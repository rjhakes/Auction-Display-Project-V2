import { observer } from 'mobx-react-lite';
import React, { useEffect, useRef } from 'react';
import { Button, Container } from 'semantic-ui-react';
import LoadingComponent from '../../../app/layout/LoadingComponent';
import { useStore } from '../../../app/stores/store';
import TransactionForm from '../form/TransactionForm';
import TransactionList from './TransactionList';

export default observer(function TransactionDashboard() {
    const {transactionStore} = useStore();
    const {editMode, openForm, deleteAllTransactions, loading, csvImport, csvExport} = transactionStore;
    const inputFile = useRef<HTMLInputElement | null>(null);

    useEffect(() => {
        transactionStore.loadTransactions();
    }, [transactionStore])

    if (transactionStore.loadingInitial) return <LoadingComponent content='Loaading ...' />

    const handleFileUpload = (e: any) => {
        const { files } = e.target;
        if (files && files.length) {
            csvImport(files);
        }
    }

    const fileSelectExhibitors = () => {
        inputFile.current?.click();
    }
    return (
        <>
            <Container className='container-data-buttons' fixed='top' style={{marginBottom: '1em'}}>
                <Button onClick={() => openForm()} positive content='Add Transaction'/>
                <Button 
                    onClick={() => { 
                        if (window.confirm('Are you sure you want to DELETE ALL TRANSACTIONS?\nA csv file will download to preserve the data.')) 
                        deleteAllTransactions()
                        }} 
                        loading={loading} negative content='Delete All Transactions'/>
                <input id="upload-csv" style={{display: "none"}} ref={inputFile} onChange={handleFileUpload} type="file" accept='.csv'/>
                <Button onClick={csvExport} floated='right' color='blue' content='Export Transactions'/>
                <Button onClick={fileSelectExhibitors} floated='right' color='blue' content='Import Transactions'/>
            </Container>
            <Container className='add-form create-form'>
                {editMode &&
                <TransactionForm />}
            </Container>
            <TransactionList />
        </>
    )
})
