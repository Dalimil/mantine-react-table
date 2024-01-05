import 'mantine-react-table/styles.css'; //make sure MRT styles were imported in your app root (once)
//Import Mantine React Table and its Types
import { MantineReactTable } from 'mantine-react-table';

//Import Mantine React Table Translations
import { MRT_Localization_ZH_HANT } from 'mantine-react-table/locales/zh-Hant';

//mock data
import { data } from './makeData';

const columns = [
  {
    accessorKey: 'firstName',
    header: '名',
  },
  {
    accessorKey: 'lastName',
    header: '姓',
    enableClickToCopy: true,
  },
  {
    accessorKey: 'age',
    header: '年齡',
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
      localization={MRT_Localization_ZH_HANT}
    />
  );
};

export default Example;
