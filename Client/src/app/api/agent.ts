import axios, { AxiosResponse } from 'axios';
import { BuyerModel } from '../models/Buyer';
import { ExhibitorModel } from '../models/Exhibitor';
import { TransactionModel } from '../models/Transaction';

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

const Transactions = {
    list: () => requests.get<TransactionModel[]>('/Transaction'),
    details: (id: string) => requests.get<TransactionModel>(`/Transaction/${id}`),
    create: (transaction: TransactionModel) => axios.post<void>('/Transaction', transaction),
    update: (transaction: TransactionModel) => axios.put<void>(`/Transaction/${transaction.id}`, transaction),
    delete: (id: string) => axios.delete<void>(`/Transaction/${id}`)
}

const Exhibitors = {
    list: () => requests.get<ExhibitorModel[]>('/Exhibitor'),
    details: (id: string) => requests.get<ExhibitorModel>(`/Exhibitor/${id}`),
    create: (exhibitor: ExhibitorModel) => axios.post<void>('/Exhibitor', exhibitor),
    update: (exhibitor: ExhibitorModel) => axios.put<void>(`/Exhibitor/${exhibitor.id}`, exhibitor),
    delete: (id: string) => axios.delete<void>(`/Exhibitor/${id}`)
}


const agent = {
    Buyers,
    Transactions,
    Exhibitors
}

export default agent;