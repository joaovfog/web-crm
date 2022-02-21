import { toast } from 'react-toastify'
import { useNavigate } from 'react-router-dom'

import { useMutation, useQueryClient } from "react-query"
import api from "../../lib/axios"

const createCustomer = (data: any): Promise<any> => {
    console.log(data)
    return api.post(`/customers`, {}, { params: data })
}

export function useCreateCustomer() {
    const queryClient = useQueryClient()
    const navigate = useNavigate()

    const { mutate, isLoading, mutateAsync } = useMutation(createCustomer, {
        onSuccess: (data) => {
            console.log(data)
            queryClient.invalidateQueries('customers')
            toast.success('Cliente cadastrado com sucesso!')
            navigate('/customers')
        },
        onError: () => {
            toast.error('Não foi possível cadastrar o cliente.')
        }
    })

    return { mutate, isLoading, mutateAsync }
}