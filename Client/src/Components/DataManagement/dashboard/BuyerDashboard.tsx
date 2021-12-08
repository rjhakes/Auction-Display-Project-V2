import { observer } from 'mobx-react-lite';
import React, { useEffect } from 'react';
import { Button, Container } from 'semantic-ui-react';
import LoadingComponent from '../../../app/layout/LoadingComponent';
import { useStore } from '../../../app/stores/store';
import BuyerForm from '../form/BuyerForm';
import BuyerList from './BuyerList';

export default observer( function BuyerDashboard() {

    const {buyerStore} = useStore();
    const {editMode, openForm} = buyerStore;

    useEffect(() => {
        buyerStore.loadBuyers();
    }, [buyerStore])

    if (buyerStore.loadingInitial) return <LoadingComponent content='Loaading app' />

    return (
        <>
            <Container className='container-data-buttons' fixed='top' style={{marginBottom: '1em'}}>
                <Button onClick={() => openForm()} positive content='Add Buyer'/>
                <Button positive content='Delete All Buyers'/>
                <Button floated='right' positive content='Export Buyers'/>
                <Button floated='right' positive content='Import Buyers'/>
            </Container>
            <Container className='add-form create-form'>
                {editMode &&
                <BuyerForm />}
            </Container>
            <BuyerList />
        </>
    )
})