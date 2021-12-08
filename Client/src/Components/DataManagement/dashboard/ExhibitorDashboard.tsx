import { observer } from 'mobx-react-lite';
import React, { useEffect } from 'react';
import { Button, Container } from 'semantic-ui-react';
import LoadingComponent from '../../../app/layout/LoadingComponent';
import { useStore } from '../../../app/stores/store';
import ExhibitorForm from '../form/ExhibitorForm';
import ExhibitorList from './ExhibitorList';

export default observer( function ExhibitorDashboard() {

    const {exhibitorStore} = useStore();
    const {editMode, openForm} = exhibitorStore;

    useEffect(() => {
        exhibitorStore.loadExhibitors();
    }, [exhibitorStore])

    if (exhibitorStore.loadingInitial) return <LoadingComponent content='Loaading app' />

    return (
        <>
            <Container className='container-data-buttons' fixed='top' style={{marginBottom: '1em'}}>
                <Button onClick={() => openForm()} positive content='Add Exhibitor'/>
                <Button positive content='Delete All Exhibitors'/>
                <Button floated='right' positive content='Export Exhibitors'/>
                <Button floated='right' positive content='Import Exhibitors'/>
            </Container>
            <Container className='add-form create-form'>
                {editMode &&
                <ExhibitorForm />}
            </Container>
            <ExhibitorList />
        </>
    )
})