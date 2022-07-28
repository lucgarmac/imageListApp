import { TableColumn } from "../../../components/table/models/table-column.interface";

export function getTableColumns(): TableColumn[] {
  return [
    {
      id: 1,
      field: 'photo',
      label: 'IMAGE.TABLE.PHOTO',
      type: 'image'
    },
    {
      id: 2,
      field: 'text',
      label: 'IMAGE.TABLE.TEXT',
      type: 'data'
    }
  ]
}