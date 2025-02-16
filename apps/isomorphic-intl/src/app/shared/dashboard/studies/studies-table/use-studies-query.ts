import { useQuery } from '@tanstack/react-query';
import axios from 'axios';
import { StudyType } from './table';
import { studies } from '@/data/studies';
// import get_patient_data_paginated_decoded from '@/data/dump/get_patient_data_paginated_decoded.json';

// const mockAPIResponse = get_patient_data_paginated_decoded as unknown as StudiesResponse;

export type ExportStudyType = {
  patient_id: string;
  study_id: string | undefined;
  study_phase: string | undefined;
  created_at: string | undefined;
  s3_path: string | null;
  image_data?: string | undefined;
  age: string | undefined;
  education: string | undefined;
  gender: string | undefined;
  maritalStatus: string | undefined;
  occupation: string | undefined;
  ct_sdt_right_answers_count: string | undefined;
  ct_sdt_wrong_answers_count: string | undefined;
  ct_vmt_right_answers_index: string | undefined;
  ct_vmt_wrong_answers_index: string | undefined;
  ct_lot_answers: string | undefined;
  ct_lot_right_answers_count: string | undefined;
  ct_lot_wrong_answers_count: string | undefined;
  ct_tmt_b_end: string | undefined;
  ct_tmt_b_start: string | undefined;
  ct_tmt_b_wrong_answers_count: string | undefined;
  ct_clock_base64: string | undefined;
  scdq_1: string | undefined;
  scdq_2: string | undefined;
  scdq_3: string | undefined;
  scdq_4: string | undefined;
  scdq_5: string | undefined;
  scdq_6: string | undefined;
  scdq_7: string | undefined;
  scdq_8: string | undefined;
  scdq_9: string | undefined;
  scdq_10: string | undefined;
  scdq_11: string | undefined;
  scdq_12: string | undefined;
  scdq_13: string | undefined;
  scdq_14: string | undefined;
  scdq_15: string | undefined;
  scdq_16: string | undefined;
  scdq_17: string | undefined;
  scdq_18: string | undefined;
  scdq_19: string | undefined;
  scdq_20: string | undefined;
  opqol_0: string | undefined;
  opqol_1: string | undefined;
  opqol_2: string | undefined;
  opqol_3: string | undefined;
  opqol_4: string | undefined;
  opqol_5: string | undefined;
  opqol_6: string | undefined;
  opqol_7: string | undefined;
  opqol_8: string | undefined;
  opqol_9: string | undefined;
  opqol_10: string | undefined;
  opqol_11: string | undefined;
  opqol_12: string | undefined;
  opqol_13: string | undefined;
  hypertension_1: string | undefined;
  hypertension_2: string | undefined;
  hypertension_3: string | undefined;
  hypertension_4: string | undefined;
  depression_1: string | undefined;
  depression_2: string | undefined;
  depression_3: string | undefined;
  depression_4: string | undefined;
  depression_5: string | undefined;
  depression_6: string | undefined;
  depression_7: string | undefined;
  depression_8: string | undefined;
  depression_9: string | undefined;
  depression_10: string | undefined;
  patient_drawing_presigned_urls?: string[] | null;
  dicom_to_nifti_presigned_urls?: string[] | null;
  user?: {
    loginId: string;
    authFlowType: string;
    userId: string;
    username: string;
  } | string | null;
  [key: string]: any;  // This allows for additional properties
}

// Define the response type from the API
// interface StudiesResponse {
//   data: {
//     patient_id: string;
//     image_data: string | undefined;
//     s3_path: string | null;
//     study_id: string | undefined;
//     study_phase: string | undefined;
//     patient_drawing_presigned_urls: string[] | null | undefined;
//     dicom_to_nifti_presigned_urls: string[] | null | undefined;
//     user: {
//       loginId: string;
//       authFlowType: string;
//       userId: string;
//       username: string;
//     } | string | null | undefined;
//     created_at: string | undefined;
//     // Add other optional fields as needed
//     [key: string]: any;  // This allows for additional properties
//   }[];
//   pagination: {
//     total_records: number;
//     per_page: number;
//     current_page: number;
//     total_pages: number;
//     next_page: number | null;
//     prev_page: number | null;
//   };
// }
interface StudiesResponse {
  data: ExportStudyType[];
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
  const url = '/api/patient_data?patient_id_only=false&limit=100&page=1'

  // Replace with your actual API endpoint
  const response = await axios.get(url, {
    headers: {
      'x-api-key': 'FryrCerAjT63p8YLJwGfZ6rHf9UYLVK1aiTjYlut'
    }
  });
  
  // Decode base64 data
  const decodedResponse = {
    ...response.data,
    data: response.data.data.map((item: ExportStudyType) => ({
      ...item,
      // user: typeof item.user === 'string' ? JSON.parse(Buffer.from(item.user, 'base64').toString()) : item.user
      user: typeof item.user === 'string' ? JSON.parse(item.user) : item.user
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