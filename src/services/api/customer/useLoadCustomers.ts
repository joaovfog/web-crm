import { useQuery } from "react-query"
import api from "../../lib/axios"

export const loadCustomers = (data: any): Promise<any> => {
    return api.get('/customers', {
        params: {
            ...data
        }
    })
}

export function useLoadCustomers(query: any) {
    const { data } = useQuery(
        ['customers', query],
        () => loadCustomers(query),
        {
            keepPreviousData: true
        }
    )

    return { data }
}