import { QueryClient, DefaultOptions } from 'react-query'

const queryConfig: DefaultOptions = {
  queries: {
    // useErrorBoundary: true,
    refetchOnWindowFocus: false,
    retry: false,
    staleTime: 5 * 60 * 1000
  }
}

export const queryClient = new QueryClient({ defaultOptions: queryConfig })
