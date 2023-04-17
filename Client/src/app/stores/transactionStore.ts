import { makeAutoObservable, runInAction } from "mobx";
import agent from "../api/agent";
import { TransactionModel } from "../models/Transaction";
import {v4 as uuid} from 'uuid';

export default class TransactionStore {
    transactionRegistry = new Map<string, TransactionModel>();
    selectedTransaction: TransactionModel | undefined = undefined;
    editMode = false;
    loading = false;
    loadingInitial = true;

    constructor() {
        makeAutoObservable(this)
    }

    get transactionsBySaleNum() {
        return Array.from(this.transactionRegistry.values()).sort((a,b) => 
            a.saleNumber - b.saleNumber);
    }

    loadTransactions = async () => {
        this.loadingInitial = true;
        try {
            const transactions = await agent.Transactions.list();
            transactions.forEach(transaction => {
                this.setTransaction(transaction);
            })
            this.setLoadingInitial(false);
        } catch (error) {
            console.log(error);
            this.setLoadingInitial(false);
        }
    }

    loadTransaction = async (id: string) => {
        let transaction = this.getTransaction(id);
        if (transaction) {
            this.selectedTransaction = transaction;
        } else {
            this.loadingInitial = true;
            try {
                transaction = await agent.Transactions.details(id);
                this.setTransaction(transaction);
                this.selectedTransaction = transaction;
                this.setLoadingInitial(false);
            } catch (error) {
                console.log(error);
                this.setLoadingInitial(false);
            }
        }
    }

    private setTransaction = (transaction: TransactionModel) => {
        this.transactionRegistry.set(transaction.id, transaction);
    }

    private getTransaction = (id: string) => {
        return this.transactionRegistry.get(id);
    }

    setLoadingInitial = (state: boolean) => {
        this.loadingInitial = state;
    }

    selectTransaction = (id: string) => {
        this.selectedTransaction = this.transactionRegistry.get(id);
    }

    cancelSelectedTransaction = () => {
        this.selectedTransaction = undefined;
    }

    openForm = (id?: string) => {
        id ? this.selectTransaction(id) : this.cancelSelectedTransaction();
        this.editMode = true;
    }

    closeForm = () => {
        this.editMode = false;
    }

    createTransaction = async (transaction: TransactionModel) => {
        this.loading = true;
        transaction.id = uuid();
        try {
            await agent.Transactions.create(transaction);
            runInAction(() => {
                this.transactionRegistry.set(transaction.id, transaction);
                this.selectedTransaction = transaction;
                this.editMode = false;
                this.loading = false;
            })
        } catch (error) {
            console.log(error);
            runInAction(() => {
                this.loading = false;
            })
        }
    } 

    createTransactionList = async (transactions: Array<TransactionModel>) => {
        this.loading = true;
        this.loadingInitial = true;
        try {
            await agent.Transactions.createList(transactions);
            
            runInAction(() => {
                this.loading = false;
                this.loadingInitial = false;
            })
            this.loadTransactions();
        } catch (error) {
            console.log(error);
            
            runInAction(() => {
                this.loading = false;
                this.loadingInitial = false;
            })
            this.loadTransactions();
        }
        
    }

    updateTransaction = async (transaction: TransactionModel) => {
        this.loading = true;
        try {
            await agent.Transactions.update(transaction);
            runInAction(() => {
                this.transactionRegistry.set(transaction.id, transaction);
                this.selectedTransaction = transaction;
                this.editMode = false;
                this.loading = false;
            })
        } catch (error) {
            console.log(error);
            runInAction(() => {
                this.loading = false;
            })
        }
    }

    deleteTransaction = async (id: string) => {
        this.loading = true;
        try {
            await agent.Transactions.delete(id);
            runInAction(() => {
                this.transactionRegistry.delete(id);
                // if (this.selectedTransaction?.id === id) this.cancelSelectedTransaction();
                this.loading = false;
            })
        } catch (error) {
            console.log(error);
            runInAction(() => {
                this.loading = false;
            })
        }
    }

    deleteAllTransactions = async () => {
        this.loading = true;
        this.loadingInitial = true;
        this.csvExport();
        try {
            await agent.Transactions.deleteAll(); //Array.from(this.transactionRegistry.values()));
            this.transactionRegistry = new Map<string, TransactionModel>();
            runInAction(() => {
                this.loading = false;
                this.loadingInitial = false;
            })
        } catch (error) {
            console.log(error);
            runInAction(() => {
                this.loading = false;
                this.loadingInitial = false;
            })
        }
    }

    csvImport = async (e: string) => {
        let line: string[];
        let csvTransaction = e.split('\n');
        let transactionArr = new Array<TransactionModel>();
        for (let i = 1; i < csvTransaction.length; i++) {
            line = csvTransaction[i].split(/,(?=(?:(?:[^"]*"){2})*[^"]*$)/);
            if (line[0] == '') {
                
            } else {
            this.selectedTransaction = {
                id: uuid(),
                saleNumber: parseInt(line[0]),
                bidderNumber: parseInt(line[1]),
                purchaseAmount: line[2],
                processor: line[3],
            }
            transactionArr.push(this.selectedTransaction);
            }       
        }
        this.createTransactionList(transactionArr);
    }

    csvExport = async () => {
        const csvRows = [];
        csvRows.push("saleNumber,bidderNumber,purchaseAmount,processor")
        this.transactionRegistry.forEach(element => {
            const values = [];
            values.push(element.saleNumber);
            values.push(element.bidderNumber);
            values.push(element.purchaseAmount);
            values.push(element.processor);
            csvRows.push(values.join(','));
        });
        const csvData = csvRows.join('\n');
        const blob = new Blob([csvData], { type: 'text/csv' });
        const url = window.URL.createObjectURL(blob)
        const a = document.createElement('a')
        a.setAttribute('hidden', '')
        a.setAttribute('href', url)
        a.setAttribute('download', 'transactionData.csv')
        document.body.appendChild(a)
        a.click()
        document.body.removeChild(a)
    }
}