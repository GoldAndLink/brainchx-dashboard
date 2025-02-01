'use client';

import { getStatusBadge } from '@core/components/table-utils/get-status-badge';
import { getStatusColors } from '@core/components/table-utils/get-status-color';
import TableRowActionGroup from '@core/components/table-utils/table-row-action-group';
// import { StatusType } from '@/data/shipment-data';
import AvatarCard from '@core/ui/avatar-card';
import DateCell from '@core/ui/date-cell';
import { toCurrency } from '@core/utils/to-currency';
import { createColumnHelper } from '@tanstack/react-table';
import { Badge, Checkbox, Text } from 'rizzui';
import { StudyType } from './table';
import { ExportStudyType } from './use-studies-query';
import { getRandomArrayElement } from '@core/utils/get-random-array-element';
import { avatarIds } from '@core/utils/get-avatar';

const columnHelper = createColumnHelper<StudyType>();
const exportColumnHelper = createColumnHelper<ExportStudyType>();
export const studiesColumns = [
  // columnHelper.display({
  //   id: 'checked',
  //   size: 70,
  //   cell: ({ row }) => {
  //     return (
  //       <Checkbox
  //         checked={row.getIsSelected()}
  //         onChange={row.getToggleSelectedHandler()}
  //         className="ps-4"
  //       />
  //     );
  //   },
  // }),
  // columnHelper.display({
  //   id: 'patient_id',
  //   size: 180,
  //   header: 'Patient ID',
  //   cell: ({ row }) => {
  //     return <Text>{row.original.patient_id}</Text>;
  //   },
  // }),
  columnHelper.accessor('patient_id', {
    id: 'patient_id',
    size: 180,
    header: 'Patient ID',
    cell: ({ row }) => {
      return <Text>{row.original.patient_id}</Text>;
    },
  }),
  columnHelper.accessor('study_id', {
    id: 'study_id',
    size: 250,
    header: 'Study ID',
    enableSorting: false,
    cell: ({ row }) => {
      return <Text>{row.original.study_id}</Text>;
    },
  }),
  columnHelper.accessor('study_phase', {
    id: 'study_phase',
    size: 250,
    header: 'Study Phase',
    enableSorting: false,
    cell: ({ row }) => {
      return <Text>{row.original.study_phase}</Text>;
    },
  }),
  // columnHelper.display({
  //   id: 'destination',
  //   size: 200,
  //   header: 'Destination',
  //   cell: ({ row }) => {
  //     return <Text>{row.original.destination}</Text>;
  //   },
  // }),
  columnHelper.accessor('created_at', {
    id: 'created_at',
    size: 200,
    header: 'Date',
    cell: ({ row }) => {
      return <DateCell date={new Date(row.original.created_at ?? '')} />;
    },
  }),
  // columnHelper.accessor('cost', {
  //   id: 'cost',
  //   size: 140,
  //   header: 'Total Cost',
  //   cell: ({ row }) => {
  //     return (
  //       <Text className="w-full pe-4 text-end font-medium">
  //         {toCurrency(row.original.cost)}
  //       </Text>
  //     );
  //   },
  // }),
  // columnHelper.accessor('payment', {
  //   id: 'payment',
  //   size: 200,
  //   header: 'Payment Method',
  //   cell: ({ row }) => {
  //     return <Text className="font-medium">{row.original.payment}</Text>;
  //   },
  // }),
  // columnHelper.accessor('status', {
  //   id: 'status',
  //   size: 170,
  //   header: 'Status',
  //   enableSorting: false,
  //   cell: ({ row }) => {
  //     return (
  //       <Badge
  //         variant="outline"
  //         className="w-32 font-medium"
  //         color={getStatusColors(row.original.status as StatusType)}
  //         data-color={getStatusColors(row.original.status as StatusType)}
  //       >
  //         {row.original.status}
  //       </Badge>
  //     );
  //   },
  // }),
  // columnHelper.display({
  //   id: 'invoiceStatus',
  //   size: 160,
  //   header: 'Invoice Status',
  //   cell: ({ row }) => getStatusBadge(row.original.invoiceStatus),
  // }),
  columnHelper.display({
    id: 'actions',
    size: 140,
    cell: ({
      row,
      table: {
        options: { meta },
      },
    }) => (
      <TableRowActionGroup
        // onDelete={() =>
        //   meta?.handleDeleteRow && meta?.handleDeleteRow(row.original)
        // }
        onDelete={() => {
          console.log('delete');
        }}
      />
    ),
  }),
];

export const exportColumns = [
  exportColumnHelper.accessor('patient_id', {
    id: 'patient_id',
    size: 180,
    header: 'Patient ID',
    cell: ({ row }) => {
      return <Text>{row.original.patient_id}</Text>;
    },
  }),
  exportColumnHelper.accessor('study_id', {
    id: 'study_id',
    size: 250,
    header: 'Study ID',
    enableSorting: false,
    cell: ({ row }) => {
      return <Text>{row.original.study_id}</Text>;
    },
  }),
  exportColumnHelper.accessor('study_phase', {
    id: 'study_phase',
    size: 250,
    header: 'Study Phase',
    enableSorting: false,
    cell: ({ row }) => {
      return <Text>{row.original.study_phase}</Text>;
    },
  }),
  exportColumnHelper.accessor('created_at', {
    id: 'created_at',
    size: 200,
    header: 'Date',
    cell: ({ row }) => {
      return <DateCell date={new Date(row.original.created_at ?? '')} />;
    },
  }),
  exportColumnHelper.accessor('age', {
    id: 'age',
    size: 100,
    header: 'Age',
    cell: ({ row }) => {
      return <Text>{row.original.age}</Text>;
    },
  }),
  exportColumnHelper.accessor('education', {
    id: 'education',
    size: 150,
    header: 'Education',
    cell: ({ row }) => {
      return <Text>{row.original.education}</Text>;
    },
  }),
  exportColumnHelper.accessor('gender', {
    id: 'gender',
    size: 100,
    header: 'Gender',
    cell: ({ row }) => {
      return <Text>{row.original.gender}</Text>;
    },
  }),
  exportColumnHelper.accessor('maritalStatus', {
    id: 'maritalStatus',
    size: 150,
    header: 'Marital Status',
    cell: ({ row }) => {
      return <Text>{row.original.maritalStatus}</Text>;
    },
  }),
  exportColumnHelper.accessor('occupation', {
    id: 'occupation',
    size: 150,
    header: 'Occupation',
    cell: ({ row }) => {
      return <Text>{row.original.occupation}</Text>;
    },
  }),
  exportColumnHelper.accessor('ct_sdt_right_answers_count', {
    id: 'ct_sdt_right_answers_count',
    size: 200,
    header: 'CT SDT Right Answers Count',
    cell: ({ row }) => {
      return <Text>{row.original.ct_sdt_right_answers_count}</Text>;
    },
  }),
  exportColumnHelper.accessor('ct_sdt_wrong_answers_count', {
    id: 'ct_sdt_wrong_answers_count',
    size: 200,
    header: 'CT SDT Wrong Answers Count',
    cell: ({ row }) => {
      return <Text>{row.original.ct_sdt_wrong_answers_count}</Text>;
    },
  }),
  exportColumnHelper.accessor('ct_vmt_right_answers_index', {
    id: 'ct_vmt_right_answers_index',
    size: 200,
    header: 'CT VMT Right Answers Index',
    cell: ({ row }) => {
      return <Text>{row.original.ct_vmt_right_answers_index}</Text>;
    },
  }),
  exportColumnHelper.accessor('ct_vmt_wrong_answers_index', {
    id: 'ct_vmt_wrong_answers_index',
    size: 200,
    header: 'CT VMT Wrong Answers Index',
    cell: ({ row }) => {
      return <Text>{row.original.ct_vmt_wrong_answers_index}</Text>;
    },
  }),
  exportColumnHelper.accessor('ct_lot_answers', {
    id: 'ct_lot_answers',
    size: 200,
    header: 'CT LOT Answers',
    cell: ({ row }) => {
      return <Text>{row.original.ct_lot_answers}</Text>;
    },
  }),
  exportColumnHelper.accessor('ct_lot_right_answers_count', {
    id: 'ct_lot_right_answers_count',
    size: 200,
    header: 'CT LOT Right Answers Count',
    cell: ({ row }) => {
      return <Text>{row.original.ct_lot_right_answers_count}</Text>;
    },
  }),
  exportColumnHelper.accessor('ct_lot_wrong_answers_count', {
    id: 'ct_lot_wrong_answers_count',
    size: 200,
    header: 'CT LOT Wrong Answers Count',
    cell: ({ row }) => {
      return <Text>{row.original.ct_lot_wrong_answers_count}</Text>;
    },
  }),
  exportColumnHelper.accessor('ct_tmt_b_duration', {
    id: 'ct_tmt_b_duration',
    size: 200,
    header: 'CT TMT B Duration',
    cell: ({ row }) => {
      return <Text>{row.original.ct_tmt_b_end}</Text>;
    },
  }),
  // exportColumnHelper.accessor('ct_tmt_b_start', {
  //   id: 'ct_tmt_b_start',
  //   size: 200,
  //   header: 'CT TMT B Start',
  //   cell: ({ row }) => {
  //     return <Text>{row.original.ct_tmt_b_start}</Text>;
  //   },
  // }),
  exportColumnHelper.accessor('ct_tmt_b_wrong_answers_count', {
    id: 'ct_tmt_b_wrong_answers_count',
    size: 200,
    header: 'CT TMT B Wrong Answers Count',
    cell: ({ row }) => {
      return <Text>{row.original.ct_tmt_b_wrong_answers_count}</Text>;
    },
  }),
  exportColumnHelper.accessor('scdq_1', {
    id: 'scdq_1',
    size: 200,  
    header: 'SCDQ 1',
    cell: ({ row }) => {
      return <Text>{row.original.scdq_1}</Text>;
    },
  }),
  exportColumnHelper.accessor('scdq_2', {
    id: 'scdq_2',
    size: 200,
    header: 'SCDQ 2',
    cell: ({ row }) => {
      return <Text>{row.original.scdq_2}</Text>;
    },
  }),
  exportColumnHelper.accessor('scdq_3', {
    id: 'scdq_3',
    size: 200,
    header: 'SCDQ 3',
    cell: ({ row }) => {  
      return <Text>{row.original.scdq_3}</Text>;
    },
  }),
  exportColumnHelper.accessor('scdq_4', {
    id: 'scdq_4',
    size: 200,  
    header: 'SCDQ 4',
    cell: ({ row }) => {
      return <Text>{row.original.scdq_4}</Text>;
    },
  }), 
  exportColumnHelper.accessor('scdq_5', {
    id: 'scdq_5',
    size: 200,
    header: 'SCDQ 5',
    cell: ({ row }) => {
      return <Text>{row.original.scdq_5}</Text>;
    },
  }),
  exportColumnHelper.accessor('scdq_6', {
    id: 'scdq_6',
    size: 200,
    header: 'SCDQ 6',
    cell: ({ row }) => {
      return <Text>{row.original.scdq_6}</Text>;
    },
  }),
  exportColumnHelper.accessor('scdq_7', {
    id: 'scdq_7',
    size: 200,
    header: 'SCDQ 7',
    cell: ({ row }) => {
      return <Text>{row.original.scdq_7}</Text>;
    },
  }),
  exportColumnHelper.accessor('scdq_8', {
    id: 'scdq_8',
    size: 200,
    header: 'SCDQ 8',
    cell: ({ row }) => {
      return <Text>{row.original.scdq_8}</Text>;
    },
  }),
  exportColumnHelper.accessor('scdq_9', {
    id: 'scdq_9',
    size: 200,
    header: 'SCDQ 9',
    cell: ({ row }) => {
      return <Text>{row.original.scdq_9}</Text>;
    },
  }),
  exportColumnHelper.accessor('scdq_10', {
    id: 'scdq_10',
    size: 200,
    header: 'SCDQ 10',
    cell: ({ row }) => {
      return <Text>{row.original.scdq_10}</Text>;
    },
  }),
  exportColumnHelper.accessor('scdq_11', {
    id: 'scdq_11',
    size: 200,
    header: 'SCDQ 11',
    cell: ({ row }) => {
      return <Text>{row.original.scdq_11}</Text>;
    },
  }),
  exportColumnHelper.accessor('scdq_12', {
    id: 'scdq_12',
    size: 200,
    header: 'SCDQ 12',
    cell: ({ row }) => {
      return <Text>{row.original.scdq_12}</Text>;
    },
  }),
  exportColumnHelper.accessor('scdq_13', {
    id: 'scdq_13',
    size: 200,
    header: 'SCDQ 13',
    cell: ({ row }) => {
      return <Text>{row.original.scdq_13}</Text>;
    },
  }),
  exportColumnHelper.accessor('scdq_14', {
    id: 'scdq_14',
    size: 200,
    header: 'SCDQ 14',
    cell: ({ row }) => {
      return <Text>{row.original.scdq_14}</Text>;
    },
  }),
  exportColumnHelper.accessor('scdq_15', {
    id: 'scdq_15',
    size: 200,
    header: 'SCDQ 15',
    cell: ({ row }) => {
      return <Text>{row.original.scdq_15}</Text>;
    },
  }),
  exportColumnHelper.accessor('scdq_16', {
    id: 'scdq_16',
    size: 200,
    header: 'SCDQ 16',
    cell: ({ row }) => {
      return <Text>{row.original.scdq_16}</Text>;
    },
  }),
  exportColumnHelper.accessor('scdq_17', {
    id: 'scdq_17',
    size: 200,
    header: 'SCDQ 17',
    cell: ({ row }) => {
      return <Text>{row.original.scdq_17}</Text>;
    },
  }),
  exportColumnHelper.accessor('scdq_18', {
    id: 'scdq_18',
    size: 200,
    header: 'SCDQ 18',
    cell: ({ row }) => {
      return <Text>{row.original.scdq_18}</Text>;
    },
  }),
  exportColumnHelper.accessor('scdq_19', {
    id: 'scdq_19',
    size: 200,
    header: 'SCDQ 19',
    cell: ({ row }) => {
      return <Text>{row.original.scdq_19}</Text>;
    },
  }),
  exportColumnHelper.accessor('scdq_20', {
    id: 'scdq_20',
    size: 200,
    header: 'SCDQ 20',
    cell: ({ row }) => {
      return <Text>{row.original.scdq_20}</Text>;
    },
  }),
  exportColumnHelper.accessor('opqol_0', {
    id: 'opqol_0',
    size: 200,
    header: 'OPQOL 0',
    cell: ({ row }) => {
      return <Text>{row.original.opqol_0}</Text>;
    },
  }),
  exportColumnHelper.accessor('opqol_1', {
    id: 'opqol_1',
    size: 200,
    header: 'OPQOL 1',
    cell: ({ row }) => {
      return <Text>{row.original.opqol_1}</Text>;
    },
  }),
  exportColumnHelper.accessor('opqol_2', {
    id: 'opqol_2',
    size: 200,
    header: 'OPQOL 2',
    cell: ({ row }) => {
      return <Text>{row.original.opqol_2}</Text>;
    },
  }),
  exportColumnHelper.accessor('opqol_3', {
    id: 'opqol_3',
    size: 200,
    header: 'OPQOL 3',
    cell: ({ row }) => {
      return <Text>{row.original.opqol_3}</Text>;
    },
  }),
  exportColumnHelper.accessor('opqol_4', {
    id: 'opqol_4',
    size: 200,
    header: 'OPQOL 4',
    cell: ({ row }) => {
      return <Text>{row.original.opqol_4}</Text>;
    },
  }),
  exportColumnHelper.accessor('opqol_5', {
    id: 'opqol_5',
    size: 200,
    header: 'OPQOL 5',
    cell: ({ row }) => {
      return <Text>{row.original.opqol_5}</Text>;
    },
  }),
  exportColumnHelper.accessor('opqol_6', {
    id: 'opqol_6',
    size: 200,
    header: 'OPQOL 6',
    cell: ({ row }) => {
      return <Text>{row.original.opqol_6}</Text>;
    },
  }),
  exportColumnHelper.accessor('opqol_7', {
    id: 'opqol_7',
    size: 200,
    header: 'OPQOL 7',
    cell: ({ row }) => {
      return <Text>{row.original.opqol_7}</Text>;
    },
  }),
  exportColumnHelper.accessor('opqol_8', {
    id: 'opqol_8',
    size: 200,
    header: 'OPQOL 8',
    cell: ({ row }) => {
      return <Text>{row.original.opqol_8}</Text>;
    },
  }),
  exportColumnHelper.accessor('opqol_9', {
    id: 'opqol_9',
    size: 200,
    header: 'OPQOL 9',
    cell: ({ row }) => {
      return <Text>{row.original.opqol_9}</Text>;
    },
  }),
  exportColumnHelper.accessor('opqol_10', {
    id: 'opqol_10',
    size: 200,
    header: 'OPQOL 10',
    cell: ({ row }) => {
      return <Text>{row.original.opqol_10}</Text>;
    },
  }),
  exportColumnHelper.accessor('opqol_11', {
    id: 'opqol_11',
    size: 200,
    header: 'OPQOL 11',
    cell: ({ row }) => {
      return <Text>{row.original.opqol_11}</Text>;
    },
  }),
  exportColumnHelper.accessor('opqol_12', {
    id: 'opqol_12',
    size: 200,
    header: 'OPQOL 12',
    cell: ({ row }) => {
      return <Text>{row.original.opqol_12}</Text>;
    },
  }),
  exportColumnHelper.accessor('opqol_13', {
    id: 'opqol_13',
    size: 200,
    header: 'OPQOL 13',
    cell: ({ row }) => {
      return <Text>{row.original.opqol_13}</Text>;
    },
  }),
  exportColumnHelper.accessor('hypertension_1', {
    id: 'hypertension_1',
    size: 200,
    header: 'Hypertension 1',
    cell: ({ row }) => {
      return <Text>{row.original.hypertension_1}</Text>;
    },
  }),
  exportColumnHelper.accessor('hypertension_2', {
    id: 'hypertension_2',
    size: 200,
    header: 'Hypertension 2',
    cell: ({ row }) => {
      return <Text>{row.original.hypertension_2}</Text>;
    },
  }),
  exportColumnHelper.accessor('hypertension_3', {
    id: 'hypertension_3',
    size: 200,
    header: 'Hypertension 3',
    cell: ({ row }) => {
      return <Text>{row.original.hypertension_3}</Text>;
    },
  }),
  exportColumnHelper.accessor('hypertension_4', {
    id: 'hypertension_4',
    size: 200,
    header: 'Hypertension 4',
    cell: ({ row }) => {
      return <Text>{row.original.hypertension_4}</Text>;
    },
  }),
  exportColumnHelper.accessor('depression_1', {
    id: 'depression_1',
    size: 200,
    header: 'Depression 1',
    cell: ({ row }) => {
      return <Text>{row.original.depression_1}</Text>;
    },
  }),
  exportColumnHelper.accessor('depression_2', {
    id: 'depression_2',
    size: 200,
    header: 'Depression 2',
    cell: ({ row }) => {
      return <Text>{row.original.depression_2}</Text>;
    },
  }),
  exportColumnHelper.accessor('depression_3', {
    id: 'depression_3',
    size: 200,
    header: 'Depression 3',
    cell: ({ row }) => {
      return <Text>{row.original.depression_3}</Text>;
    },
  }),
  exportColumnHelper.accessor('depression_4', {
    id: 'depression_4',
    size: 200,
    header: 'Depression 4',
    cell: ({ row }) => {
      return <Text>{row.original.depression_4}</Text>;
    },
  }),
  exportColumnHelper.accessor('depression_5', {
    id: 'depression_5',
    size: 200,
    header: 'Depression 5',
    cell: ({ row }) => {
      return <Text>{row.original.depression_5}</Text>;
    },
  }),
  exportColumnHelper.accessor('depression_6', {
    id: 'depression_6',
    size: 200,
    header: 'Depression 6',
    cell: ({ row }) => {
      return <Text>{row.original.depression_6}</Text>;
    },
  }),
  exportColumnHelper.accessor('depression_7', {
    id: 'depression_7',
    size: 200,
    header: 'Depression 7',
    cell: ({ row }) => {
      return <Text>{row.original.depression_7}</Text>;
    },
  }),
  exportColumnHelper.accessor('depression_8', {
    id: 'depression_8',
    size: 200,
    header: 'Depression 8',
    cell: ({ row }) => {
      return <Text>{row.original.depression_8}</Text>;
    },
  }),
  exportColumnHelper.accessor('depression_9', {
    id: 'depression_9',
    size: 200,
    header: 'Depression 9',
    cell: ({ row }) => {
      return <Text>{row.original.depression_9}</Text>;
    },
  }),
  exportColumnHelper.accessor('depression_10', {
    id: 'depression_10',
    size: 200,
    header: 'Depression 10',
    cell: ({ row }) => {
      return <Text>{row.original.depression_10}</Text>;
    },
  }),
  // exportColumnHelper.accessor('ct_clock_base64', {
  //   id: 'ct_clock_base64',
  //   size: 200,
  //   header: 'CT Clock Base64',
  //   cell: ({ row }) => {
  //     return <img src={`data:image/png;base64,${row.original.ct_clock_base64}`} alt="CT Clock" />;
  //   },
  // }),
];
