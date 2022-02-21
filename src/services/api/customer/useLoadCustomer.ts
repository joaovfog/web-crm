import { useQuery } from "react-query"
import api from "../../lib/axios"

export const loadCustomer = (id: string): Promise<any> => {
    return api.get(`/customers/${id}`)
}

export function useLoadCustomer(query: any) {
    const { data } = useQuery(
        ['customers', query],
        () => loadCustomer(query)
    )

    return { data }
}