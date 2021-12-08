import { observer } from 'mobx-react-lite';
import React, { useEffect } from 'react';
import { Button, Container } from 'semantic-ui-react';
import LoadingComponent from '../../../app/layout/LoadingComponent';
import { useStore } from '../../../app/stores/store';
import TransactionForm from '../form/TransactionForm';
import TransactionList from './TransactionList';

export default observer(function TransactionDashboard() {
    const {transactionStore} = useStore();
    const {editMode, openForm, deleteAllTransactions, loading} = transactionStore;

    useEffect(() => {
        transactionStore.loadTransactions();
    }, [transactionStore])

    if (transactionStore.loadingInitial) return <LoadingComponent content='Loaading app' />

    return (
        <>
            <Container className='container-data-buttons' fixed='top' style={{marginBottom: '1em'}}>
                <Button onClick={() => openForm()} positive content='Add Transaction'/>
                <Button 
                    onClick={() => { 
                        if (window.confirm('Are you sure you want to DELETE ALL TRANSACTIONS?')) 
                        deleteAllTransactions()
                        }} 
                        loading={loading} negative content='Delete All Transactions'/>
                <Button floated='right' color='blue'  content='Export Transactions'/>
                <Button floated='right' color='blue' content='Import Transactions'/>
            </Container>
            <Container className='add-form create-form'>
                {editMode &&
                <TransactionForm />}
            </Container>
            <TransactionList />
        </>
    )
})
