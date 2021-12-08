import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { Header } from 'semantic-ui-react';
import { TransactionModel } from '../../app/Models/Transaction'
import TransactionDashboard from './dashboard/TransactionDashboard';
import {v4 as uuid} from 'uuid';

function Transaction() {
    const [transactions, setTransactions] = useState<TransactionModel[]>([]);
    const [selectedTransaction, setSelectedTransaction] = useState<TransactionModel | undefined>(undefined);
    const [editMode, setEditMode] = useState(false);



    useEffect(() => {
        axios.get<TransactionModel[]>('http://localhost:5000/api/Transaction').then(response => {
        console.log(response);
        setTransactions(response.data);
        })
    }, [])

    function handleSelectTransaction(id: string) {
        setSelectedTransaction(transactions.find(x => x.id === id));
    }

    function handleCancelSelectTransaction() {
        setSelectedTransaction(undefined);
    }

    function handleFormOpen(id?: string){
        id ? handleSelectTransaction(id) : handleCancelSelectTransaction();
        setEditMode(true);
    }

    function handleFormClose() {
        setEditMode(false);
    }

    function handleCreateOrEditTransaction(transaction: TransactionModel) {
        transaction.id 
            ? setTransactions([...transactions.filter(x => x.id !== transaction.id), transaction])
            : setTransactions([...transactions, {...transaction, id: uuid()}]);
        setEditMode(false);
        setSelectedTransaction(transaction);
    }

    function handleDeleteTransaction(id: string) {
        setTransactions([...transactions.filter(x => x.id !== id)])
    }


    return (
    <>
        <Header as='h2' icon='users' content='Transactions' />
        <TransactionDashboard
            transactions={transactions}
            selectedTransaction={selectedTransaction}
            selectTransaction={handleSelectTransaction}
            cancelSelectTransaction={handleCancelSelectTransaction}
            editMode={editMode}
            openForm={handleFormOpen}
            closeForm={handleFormClose}
            createOrEdit={handleCreateOrEditTransaction}
            deleteTransaction={handleDeleteTransaction}
        />
    </>
    );
}

export default Transaction;