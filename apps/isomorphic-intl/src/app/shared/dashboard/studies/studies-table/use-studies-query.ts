import { useQuery } from '@tanstack/react-query';
import axios from 'axios';
import { StudiesTableDataType } from './table';
import { studies } from '@/data/studies';
import get_patient_data_paginated from '@/data/dump/get_patient_data_paginated.json';

const mockAPIResponse = get_patient_data_paginated as unknown as StudiesResponse;

// Define the response type from the API
interface StudiesResponse {
  data: {
    patient_id: string;
    image_data: string;
    s3_path: string | null;
    study_id: string;
    study_phase: string;
    patient_drawing_presigned_urls: string[] | null;
    dicom_to_nifti_presigned_urls: string[] | null;
    user: {
      loginId: string;
      authFlowType: string;
      userId: string;
      username: string;
    } | string | null;
    created_at: string;
    // Add other optional fields as needed
    [key: string]: any;  // This allows for additional properties
  }[];
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
  const url = '/api/patient_data?patient_id_only=true&limit=100&page=1'

  // Replace with your actual API endpoint
  // const response = await axios.get(url);
  
  // Decode base64 data
  const decodedResponse = {
    ...mockAPIResponse,
    data: mockAPIResponse.data.map(item => ({
      ...item,
      user: typeof item.user === 'string' ? JSON.parse(Buffer.from(item.user, 'base64').toString()) : item.user
    }))
  };

  return decodedResponse;
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