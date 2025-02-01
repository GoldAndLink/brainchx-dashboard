import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { StudyType } from '@/app/shared/dashboard/studies/studies-table/table';

export interface StudiesState {
  data: Record<string, StudyType>;
  loading: boolean;
  error: string | null;
}

const initialState: StudiesState = {
  data: {},
  loading: false,
  error: null,
};

export const studiesSlice = createSlice({
  name: 'studies',
  initialState,
  reducers: {
    setStudiesHashData: (state, action: PayloadAction<StudyType[]>) => {
      state.data = action.payload.reduce((acc, study) => {
        acc[study.patient_id] = study;
        return acc;
      }, {} as Record<string, StudyType>);
      state.loading = false;
      state.error = null;
    },
    setLoading: (state, action: PayloadAction<boolean>) => {
      state.loading = action.payload;
    },
    setError: (state, action: PayloadAction<string>) => {
      state.error = action.payload;
      state.loading = false;
    },
    deleteStudy: (state, action: PayloadAction<string>) => {
      delete state.data[action.payload];
    },
  },
});

export const { setStudiesHashData, setLoading, setError, deleteStudy } = studiesSlice.actions;
export default studiesSlice.reducer;