/* eslint-disable react/jsx-key */
import { usePagination, useTable } from 'react-table'
import { HiChevronLeft, HiChevronRight } from 'react-icons/hi'
import { IconButton } from '../IconButton'

import './style.css'

interface TableProps {
  columns: Array<{ Header: string; acessor: string }>
  data: Array<any>
}

export const Table = (props: TableProps) => {
  const { columns, data } = props

  const tableInstance: any = useTable(
    {
      columns,
      data
    },
    usePagination
  )

  const {
    getTableProps,
    getTableBodyProps,
    headerGroups,
    prepareRow,
    page,
    pageOptions,
    nextPage,
    previousPage,
    state: { pageIndex }
  } = tableInstance

  return (
    <div className="container">
      <table {...getTableProps()} className="table">
        <thead>
          {headerGroups.map((headerGroup: any) => (
            <tr {...headerGroup.getHeaderGroupProps()}>
              {headerGroup.headers.map((column: any) => (
                <th {...column.getHeaderProps()}>{column.render('Header')}</th>
              ))}
            </tr>
          ))}
        </thead>
        <tbody {...getTableBodyProps()}>
          {page.map((row: any) => {
            prepareRow(row)
            return (
              <tr {...row.getRowProps()}>
                {row.cells.map((cell: any) => {
                  return <td {...cell.getCellProps()}>{cell.render('Cell')}</td>
                })}
              </tr>
            )
          })}
        </tbody>
        <tfoot>
          <tr>
            <td colSpan={headerGroups[0].headers.length}>
              <div className="pagination">
                <div style={{ paddingRight: 16 }}>
                  <span>
                    {pageIndex + 1} de {pageOptions.length}
                  </span>
                </div>
                <div>
                  <IconButton onClick={() => previousPage()}>
                    <HiChevronLeft size={24} />
                  </IconButton>
                  <IconButton onClick={() => nextPage()}>
                    <HiChevronRight size={24} />
                  </IconButton>
                </div>
              </div>
            </td>
          </tr>
        </tfoot>
      </table>
    </div>
  )
}
