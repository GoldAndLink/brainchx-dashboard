import { useQuery } from '@tanstack/react-query';
import axios from 'axios';
import { StudiesTableDataType } from './table';
import { studies } from '@/data/studies';

const mockAPIResponse = {
  data: studies.data,
  pagination: {
    total_records: 234,
    per_page: 10,
    current_page: 1,
    total_pages: 24,
    next_page: 2,
    prev_page: null,
  },
};

// Define the response type from the API
interface StudiesResponse {
  data: StudiesTableDataType[];
  pagination: {
    total_records: number;
    per_page: number;
    current_page: number;
    total_pages: number;
    next_page: number | null;
    prev_page: number | null;
  };
}

// Define the fetch function
async function fetchStudies(): Promise<StudiesResponse> {
  const url = 'https://huauwfetia.execute-api.eu-central-1.amazonaws.com/development/patient_data'
  const xApiKey = '3ygnNNVyzw2Xv2LXPC5oM8zaZxJmMU5c9KeYafSj'

  // Replace with your actual API endpoint
  const response = await axios.get(url, {
    headers: {
      'x-api-key': xApiKey,
    },
  });
  return response.data;
}

// Create the custom hook
export function useStudiesQuery() {
  return useQuery({
    queryKey: ['studies'],
    queryFn: fetchStudies,
    refetchOnWindowFocus: false,
    staleTime: 5 * 60 * 1000, // Consider data stale after 5 minutes
  });
}