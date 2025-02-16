'use client';

import Filters from './filters';
import Table from '@core/components/table';
import { studiesColumns, exportColumns } from './columns';
import TablePagination from '@core/components/table/pagination';
import { useTanStackTable } from '@core/components/table/custom/use-TanStack-Table';
import { useStudiesQuery, ExportStudyType } from './use-studies-query';
import { useEffect, useState } from 'react';
import { useAppDispatch, useAppSelector } from '@/store/hooks';
import { setStudiesHashData, deleteStudy, StudiesState } from '@/store/studies/studies-slice';
import { getCoreRowModel } from '@tanstack/react-table';
import exportToCsv, { getCsvBlob } from "tanstack-table-export-to-csv";

export type StudyType = {
  patient_id: string;
  study_id: string | undefined;
  study_phase: string | undefined;
  created_at: string | undefined;
  image_data?: string | undefined;
  s3_path: string | null;
  [key: string]: any;
  user?: {
    loginId: string;
    authFlowType: string;
    userId: string;
    username: string;
  } | string | null;
};

export type Pagination = {
  total_records: number;
  per_page: number;
  current_page: number;
  total_pages: number;
  next_page: number | null;
  prev_page: number | null;
};

export default function StudiesTable() {
  const dispatch = useAppDispatch();
  // const { loading: isLoading, error } = useAppSelector((state: { studies: StudiesState }) => state.studies);
  const { data: queryData, isLoading: queryLoading, error: queryError } = useStudiesQuery();
  const [studiesData, setStudiesData] = useState<{ data: StudyType[], pagination: Pagination }>({ data: [], pagination: { total_records: 0, per_page: 0, current_page: 0, total_pages: 0, next_page: null, prev_page: null } });
  const [isLoading, setIsLoading] = useState<boolean>(false)
  const [error, setError] = useState<string | null>(null)

  useEffect(() => {
    if (queryLoading) {
      setIsLoading(true)
    } else if (queryError) {
      setError(queryError.message)
    } else if (queryData) {
      const formattedData = queryData.data.map((study: ExportStudyType) => ({
        patient_id: study.patient_id ?? 'N/A',
        study_id: study.study_id ?? 'N/A',
        study_phase: study.study_phase ?? 'N/A',
        created_at: study.created_at ?? '2025-01-03T06:50:59.945Z',
        s3_path: study.s3_path ?? null
      }));
      dispatch(setStudiesHashData(queryData.data));
      setStudiesData({ data: formattedData, pagination: queryData.pagination });
    }
  }, [queryData, queryLoading, queryError, dispatch]);

  // const tableData = studiesData?.map((study: StudyType) => ({
  //   patient_id: study.patient_id ?? 'N/A',
  //   study_id: study.study_id ?? 'N/A',
  //   study_phase: study.study_phase ?? 'N/A',
  //   created_at: study.created_at ?? 'N/A',
  // })) ?? [];

  const { table, setData } = useTanStackTable({
    tableData: studiesData.data,
    columnConfig: studiesColumns,
    options: {
      initialState: {
        pagination: {
          pageIndex: 0,
          pageSize: 10,
        },
      },
      meta: {
        handleDeleteRow: (row: StudyType) => {
          dispatch(deleteStudy(row.patient_id));
          setData((prev) => prev.filter((r) => r.patient_id !== row.patient_id));
        },
      },
      enableColumnResizing: false,
    },
  });

  const { table: exportTable, setData: setExportTableData } = useTanStackTable({
    tableData: queryData?.data ?? [],
    columnConfig: exportColumns,
    // options: {
    //   initialState: {
    //     pagination: {
    //       pageIndex: 0,
    //       pageSize: 10,
    //     },
    //   },
    //   meta: {
    //     handleDeleteRow: (row: StudyType) => {
    //       dispatch(deleteStudy(row.patient_id));
    //       setData((prev) => prev.filter((r) => r.patient_id !== row.patient_id));
    //     },
    //   },
    //   enableColumnResizing: false,
    // },
  });

  // const handleExportToCsv = (): void => {
  //   const headers = table
  //     .getHeaderGroups()
  //     .map((x) => x.headers)
  //     .flat();

  //   const rows = table.getCoreRowModel().rows;

  //   const csvBlob = getCsvBlob(headers, rows);
  //   const url = URL.createObjectURL(csvBlob);
  //   const a = document.createElement('a');
  //   a.href = url;
  //   a.download = 'studies_data.csv';
  //   document.body.appendChild(a);
  //   a.click();
  // };
  const handleExportToCsv = (): void => {
    const headers = exportTable
      .getHeaderGroups()
      .map((x) => x.headers)
      .flat();

    const rows = exportTable.getCoreRowModel().rows;

    // const csvBlob = getCsvBlob(headers, rows);
    exportToCsv('studies_data.csv', headers, rows);
    // const url = URL.createObjectURL(csvBlob);
    // const a = document.createElement('a');
    // a.href = url;
    // a.download = 'studies_data.csv';
    // document.body.appendChild(a);
    // a.click();
  };

  // Effect to refresh table data when studiesData changes
  useEffect(() => {
    setData(studiesData.data);
    setIsLoading(false)
  }, [studiesData, setData]);

  useEffect(() => {
    if (queryData) {
      setExportTableData(queryData.data);
    }
  }, [queryData, setExportTableData]);

  if (isLoading) {
    return <div className="flex justify-center items-center h-full">Loading...</div>;
  }

  if (error) {
    return <div className="flex justify-center items-center h-full">Error loading studies data {error}</div>;
  }

  return (
    <>
      <button 
        onClick={handleExportToCsv} 
        className="mt-4 px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600 transition duration-200"
      >
        Export all to CSV
      </button>
      <Filters table={exportTable} />
      <Table table={exportTable} variant="modern" />
      <TablePagination table={exportTable} className="p-4" />
    </>
  );
}
