'use client';

import Filters from './filters';
import Table from '@core/components/table';
import { studiesColumns } from './columns';
import TablePagination from '@core/components/table/pagination';
import { useTanStackTable } from '@core/components/table/custom/use-TanStack-Table';
import { useStudiesQuery } from './use-studies-query';
import { studies } from '@/data/studies';

export type StudiesTableDataType = (typeof studies)['data'][number];

export default function StudiesTable() {
  const { data: studiesData, isLoading, error } = useStudiesQuery();
  
  const { table, setData } = useTanStackTable<StudiesTableDataType>({
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

  if (isLoading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>Error loading studies data</div>;
  }

  return (
    <>
      <Filters table={table} />
      <Table table={table} variant="modern" />
      <TablePagination table={table} className="p-4" />
    </>
  );
}
