/* eslint-disable react/jsx-key */
import {
  DataGrid,
  GridCallbackDetails,
  GridRowIdGetter,
  GridRowParams,
  MuiEvent,
  ptBR
} from '@mui/x-data-grid'

import './style.css'
import { useTableContext } from './table.context'

interface TableProps {
  columns: any
  rows: any
  style?: any
  checkboxSelection: boolean
  rowHeight?: number
  getRowId?: GridRowIdGetter
  getRowClassName?: any
  onRowClick?: (
    params: GridRowParams<{
      [key: string]: any
    }>,
    event: MuiEvent<React.SyntheticEvent<Element, Event>>,
    details: GridCallbackDetails
  ) => void
  rowCount?: number
  loading?: boolean
  className?: string
}

export const Table = (props: TableProps) => {
  const {
    rows,
    columns,
    checkboxSelection,
    style,
    rowHeight,
    getRowId,
    getRowClassName,
    onRowClick,
    rowCount,
    loading,
    className
  } = props

  const { pagination, handlePageChange, handlePageSizeChange } =
    useTableContext()

  return (
    <div style={{ height: 420, width: '100%' }}>
      <DataGrid
        onRowClick={onRowClick}
        rows={rows}
        rowCount={rowCount}
        loading={loading}
        columns={columns}
        paginationMode="server"
        sortingMode="server"
        filterMode="server"
        rowsPerPageOptions={[10, 50, 100]}
        pageSize={pagination.limit}
        page={pagination.page}
        onPageSizeChange={handlePageSizeChange}
        onPageChange={handlePageChange}
        getRowId={getRowId}
        getRowClassName={getRowClassName}
        disableColumnMenu={true}
        rowHeight={rowHeight}
        checkboxSelection={checkboxSelection}
        localeText={ptBR.components.MuiDataGrid.defaultProps.localeText}
        style={{ background: 'white', ...style }}
        className={className}
      />
    </div>
  )
}

Table.defaultProps = {
  checkboxSelection: false,
  rowHeight: 44
}
