import { observer } from 'mobx-react-lite';
import React, { useEffect } from 'react';
import { Button, Container, Label, Table, TableBody, TableCell, TableHeader, TableHeaderCell, TableRow } from 'semantic-ui-react';
import LoadingComponent from '../../../app/layout/LoadingComponent';
// import axios from 'axios';
import { TransactionModel } from '../../../app/Models/Transaction'
import { useStore } from '../../../app/stores/store';
// import TransactionList from './TransactionList';
// import TransactionDetails from '../details/TransactionDetails';
import TransactionForm from '../form/TransactionForm';
import TransactionList from './TransactionList';

export default observer(function TransactionDashboard() {
    const {transactionStore} = useStore();
    const {editMode, openForm} = transactionStore;

    useEffect(() => {
        transactionStore.loadTransactions();
    }, [transactionStore])

    if (transactionStore.loadingInitial) return <LoadingComponent content='Loaading app' />

    return (
        <>
            <Container className='container-data-buttons' fixed='top' style={{marginBottom: '1em'}}>
                <Button onClick={() => openForm()} positive content='Add Transaction'/>
                <Button positive content='Delete All Transactions'/>
                <Button floated='right' positive content='Export Transactions'/>
                <Button floated='right' positive content='Import Transactions'/>
            </Container>
            <Container className='add-form create-form'>
                {editMode &&
                <TransactionForm />}
            </Container>
            <TransactionList />
        </>
    )
})
