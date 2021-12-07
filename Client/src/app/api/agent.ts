import axios, { AxiosResponse } from 'axios';
import { BuyerModel } from '../../Models/Buyer';

const sleep = (delay: number) => {
    return new Promise ((resolve) => {
        setTimeout(resolve, delay)
    })
}

axios.defaults.baseURL ='http://localhost:5000/api';

axios.interceptors.response.use(async response => {
    try {
        await sleep(1000);
        return response;
    } catch (error) {
        console.log(error);
        return await Promise.reject(error);
    }
})

const responseBody = <T> (response: AxiosResponse<T>) => response.data

const requests = {
    get: <T> (url: string) => axios.get<T>(url).then(responseBody), 
    post: <T> (url: string, body: {}) => axios.post<T>(url, body).then(responseBody), 
    put: <T> (url: string, body: {}) => axios.put<T>(url, body).then(responseBody), 
    del: <T> (url: string) => axios.delete<T>(url).then(responseBody), 
}

const Buyers = {
    list: () => requests.get<BuyerModel[]>('/Buyer'),
    details: (id: string) => requests.get<BuyerModel>(`/Buyer/${id}`),
    create: (buyer: BuyerModel) => axios.post<void>('/Buyer', buyer),
    update: (buyer: BuyerModel) => axios.put<void>(`/Buyer/${buyer.id}`, buyer),
    delete: (id: string) => axios.delete<void>(`/Buyer/${id}`)
}

const agent = {
    Buyers
}

export default agent;