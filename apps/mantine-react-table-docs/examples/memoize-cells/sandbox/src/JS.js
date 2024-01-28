import '@mantine/core/styles.css';
import '@mantine/dates/styles.css';
import 'mantine-react-table/styles.css'; //make sure MRT styles were imported in your app root (once)
import { useMemo } from 'react';
import { MantineReactTable } from 'mantine-react-table';
import { Title } from '@mantine/core';
import { data } from './makeData';

export const Example = () => {
  const columns = useMemo(
    () => [
      {
        accessorKey: 'firstName',
        header: 'First Name',
      },
      {
        accessorKey: 'lastName',
        header: 'Last Name',
      },
      {
        accessorKey: 'address',
        header: 'Address',
      },
      {
        accessorKey: 'city',
        header: 'City',
      },
      {
        accessorKey: 'state',
        header: 'State',
      },
    ],
    [],
  );

  return (
    <MantineReactTable
      columns={columns}
      data={data}
      //just for demo purposes
      defaultColumn={{
        Cell: ({ cell }) => {
          //see how often cells are re-rendered
          // console.info('render cell', cell.id);
          return <>{cell.getValue()}</>;
        },
      }}
      editDisplayMode="row"
      enableColumnOrdering
      enableDensityToggle={false} //density toggle is not compatible with memoization
      enableEditing
      enableColumnPinning
      enableRowSelection
      enableStickyHeader
      initialState={{ pagination: { pageSize: 20, pageIndex: 0 } }}
      memoMode="cells"
      mantineTableContainerProps={{ style: { maxHeight: '500px' } }}
      renderDetailPanel={({ row }) => <div>{row.original.firstName}</div>}
      renderTopToolbarCustomActions={() => (
        <Title order={4}>Memoized Cells</Title>
      )}
    />
  );
};

export default Example;
