import {
  createContext,
  Dispatch,
  FC,
  useCallback,
  useContext,
  useState
} from 'react'

type Pagination = {
  page: number
  limit: number
}

interface TableContextData {
  setPagination: Dispatch<React.SetStateAction<Pagination>>
  pagination: Pagination
  handlePageChange: (page: number) => void
  handlePageSizeChange: (limit: number) => void
}

export const TableContext = createContext<TableContextData>(
  {} as TableContextData
)

export const TableProvider: FC = ({ children }) => {
  const [pagination, setPagination] = useState<Pagination>({
    page: 0,
    limit: 10
  })

  const handlePageChange = useCallback((page: number) => {
    setPagination((prev) => ({
      ...prev,
      page
    }))
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  const handlePageSizeChange = useCallback((limit: number) => {
    setPagination((prev) => ({
      ...prev,
      limit
    }))
  }, [])

  return (
    <TableContext.Provider
      value={{
        setPagination,
        pagination,
        handlePageSizeChange,
        handlePageChange
      }}
    >
      {children}
    </TableContext.Provider>
  )
}

export function useTableContext() {
  return useContext(TableContext)
}
