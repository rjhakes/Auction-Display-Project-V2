import { observer } from 'mobx-react-lite';
import React, { useEffect, useRef, useState } from 'react';
import { Button, Container } from 'semantic-ui-react';
import LoadingComponent from '../../../app/layout/LoadingComponent';
import { useStore } from '../../../app/stores/store';
import BuyerForm from '../form/BuyerForm';
import BuyerList from './BuyerList';

export default observer( function BuyerDashboard() {
    const {buyerStore} = useStore();
    const {editMode, openForm, deleteAllBuyers, loading, csvImport, csvExport} = buyerStore;
    const inputFile = useRef<HTMLInputElement | null>(null);

    useEffect(() => {
        buyerStore.loadBuyers();
    }, [buyerStore])

    if (buyerStore.loadingInitial) return <LoadingComponent content='Loaading ...' />

    const handleFileUpload = (e: any) => {
        const { files } = e.target;
        if (files && files.length) {
            csvImport(files);
        }
    }

    const fileSelectBuyers = () => {
        inputFile.current?.click();
    }

    return (
        <>
            <Container className='container-data-buttons' fixed='top' style={{marginBottom: '1em'}}>
                <Button onClick={() => openForm()} positive content='Add Buyer'/>
                <Button
                    onClick={() => { 
                    if (window.confirm('Are you sure you want to DELETE ALL BUYERS?\nA csv file will download to preserve the data.')) 
                    deleteAllBuyers()
                    }} 
                    loading={loading} negative content='Delete All Buyers'/>
                <input id="upload-csv" style={{display: "none"}} ref={inputFile} onChange={handleFileUpload} type="file" accept='.csv'/>
                <Button onClick={csvExport} floated='right' color='blue' content='Export Buyers'/>
                <Button onClick={fileSelectBuyers} floated='right' color='blue' content='Import Buyers'/>
            </Container>
            <Container className='add-form create-form'>
                {editMode &&
                <BuyerForm />}
            </Container>
            <BuyerList />
        </>
    )
})