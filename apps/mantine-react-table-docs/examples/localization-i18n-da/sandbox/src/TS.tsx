import '@mantine/core/styles.css';
import '@mantine/dates/styles.css';
import 'mantine-react-table/styles.css'; //make sure MRT styles were imported in your app root (once)
//Import Mantine React Table and its Types
import { MantineReactTable, type MRT_ColumnDef } from 'mantine-react-table';

//Import Mantine React Table Translations
import { MRT_Localization_DA } from 'mantine-react-table/locales/da';

//mock data
import { data, type Person } from './makeData';

const columns: MRT_ColumnDef<Person>[] = [
  {
    accessorKey: 'firstName',
    header: 'Fornavn',
  },
  {
    accessorKey: 'lastName',
    header: 'Efternavn',
    enableClickToCopy: true,
  },
  {
    accessorKey: 'age',
    header: 'Alder',
  },
];

const Example = () => {
  return (
    <MantineReactTable
      columns={columns}
      data={data}
      enableColumnFilterModes
      enableColumnOrdering
      enableEditing
      enableColumnPinning
      enableRowActions
      enableRowSelection
      enableSelectAll={false}
      initialState={{ showColumnFilters: true, showGlobalFilter: true }}
      localization={MRT_Localization_DA}
    />
  );
};

export default Example;
