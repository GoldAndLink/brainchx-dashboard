'use client';

import Filters from './filters';
import Table from '@core/components/table';
import { studiesColumns } from './columns';
import TablePagination from '@core/components/table/pagination';
import { useTanStackTable } from '@core/components/table/custom/use-TanStack-Table';
import { useStudiesQuery } from './use-studies-query';
import { useEffect } from 'react';

export type StudiesTableDataType = {
  patient_id: string;
  study_id: string;
  study_phase: string;
  created_at: string;
  image_data?: string;
  s3_path: string | null;
  [key: string]: any;
  user?: {
    username: string;
    [key: string]: any;
  } | null;
};

export default function StudiesTable() {
  const { data: studiesData, isLoading, error } = useStudiesQuery();
  
  const tableData = studiesData?.data.map((study: any) => ({
    patient_id: study.patient_id ?? 'N/A',
    study_id: study.study_id ?? 'N/A',
    study_phase: study.study_phase ?? 'N/A',
    created_at: study.created_at ?? '2025-01-03T06:50:59.945Z',
  })) ?? [];

  const { table, setData } = useTanStackTable<any>({
    tableData: studiesData?.data ?? [],
    columnConfig: studiesColumns,
    options: {
      initialState: {
        pagination: {
          pageIndex: 0,
          pageSize: 10,
        },
      },
      meta: {
        handleDeleteRow: (row: StudiesTableDataType) => {
          setData((prev) => prev.filter((r) => r.patient_id !== row.patient_id));
        },
      },
      enableColumnResizing: false,
    },
  });

  // Effect to refresh table data when studiesData changes
  useEffect(() => {
    setData(tableData);
  }, [studiesData, setData]);

  if (isLoading) {
    return <div className="flex justify-center items-center h-full">Loading...</div>;
  }

  if (error) {
    return <div className="flex justify-center items-center h-full">Error loading studies data</div>;
  }

  return (
    <>
      <Filters table={table} />
      <Table table={table} variant="modern" />
      <TablePagination table={table} className="p-4" />
    </>
  );
}
