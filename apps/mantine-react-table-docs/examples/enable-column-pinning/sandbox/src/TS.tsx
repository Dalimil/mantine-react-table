import '@mantine/core/styles.css';
import '@mantine/dates/styles.css';
import 'mantine-react-table/styles.css'; //make sure MRT styles were imported in your app root (once)
import { useMemo } from 'react';
import { MantineReactTable, type MRT_ColumnDef } from 'mantine-react-table';
import { data, type Person } from './makeData';

const Example = () => {
  const columns = useMemo<MRT_ColumnDef<Person>[]>(
    () => [
      {
        accessorKey: 'id',
        enableColumnPinning: false, //disable column pinning for this column
        header: 'ID',
        size: 50,
      },
      {
        accessorKey: 'firstName',
        header: 'First Name',
      },
      {
        accessorKey: 'middleName',
        header: 'Middle Name',
      },
      {
        accessorKey: 'lastName',
        header: 'Last Name',
      },
      {
        accessorKey: 'address',
        header: 'Address',
        size: 300,
      },
      {
        accessorKey: 'city', //this column gets pinned to the right by default because of the initial state,
        header: 'City',
      },

      {
        accessorKey: 'state', //this column gets pinned left by default because of the the initial state,
        header: 'State',
      },
    ],
    [],
  );

  return (
    <MantineReactTable
      columns={columns}
      data={data}
      enableColumnPinning
      initialState={{ columnPinning: { left: ['state'], right: ['city'] } }}
    />
  );
};

export default Example;
