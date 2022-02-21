import axios from "axios";
import api from "../../lib/axios";

export const handleStopProcess = async (name: string) => {
    const action = "stop";
    const responseApi = await api.get(`customers`);
    console.log(responseApi.data);
    responseApi.data.map(async (res: any) => await axios.put(`${res.api_url}/processes/${name}/${action}`))
}

export const handleStartProcess = async (name: string) => {
    const action = "start";
    const responseApi = await api.get(`customers`);
    console.log(responseApi.data);
    responseApi.data.map(async (res: any) => await axios.put(`${res.api_url}/processes/${name}/${action}`))
}

export const handleRestartProcess = async (name: string) => {
    const action = "restart";
    const responseApi = await api.get(`customers`);
    console.log(responseApi.data);
    responseApi.data.map(async (res: any) => await axios.put(`${res.api_url}/processes/${name}/${action}`))
}