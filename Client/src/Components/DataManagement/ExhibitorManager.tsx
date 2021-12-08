import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { Header } from 'semantic-ui-react';
import { ExhibitorModel } from '../../app/Models/Exhibitor'
import ExhibitorDashboard from './dashboard/ExhibitorDashboard';
import {v4 as uuid} from 'uuid';

function Exhibitor() {
    const [exhibitors, setExhibitors] = useState<ExhibitorModel[]>([]);
    const [selectedExhibitor, setSelectedExhibitor] = useState<ExhibitorModel | undefined>(undefined);
    const [editMode, setEditMode] = useState(false);



    useEffect(() => {
        axios.get<ExhibitorModel[]>('http://localhost:5000/api/Exhibitor').then(response => {
        console.log(response);
        setExhibitors(response.data);
        })
    }, [])

    function handleSelectExhibitor(id: string) {
        setSelectedExhibitor(exhibitors.find(x => x.id === id));
    }

    function handleCancelSelectExhibitor() {
        setSelectedExhibitor(undefined);
    }

    function handleFormOpen(id?: string){
        id ? handleSelectExhibitor(id) : handleCancelSelectExhibitor();
        setEditMode(true);
    }

    function handleFormClose() {
        setEditMode(false);
    }

    function handleCreateOrEditExhibitor(exhibitor: ExhibitorModel) {
        exhibitor.id 
            ? setExhibitors([...exhibitors.filter(x => x.id !== exhibitor.id), exhibitor])
            : setExhibitors([...exhibitors, {...exhibitor, id: uuid()}]);
        setEditMode(false);
        setSelectedExhibitor(exhibitor);
    }

    function handleDeleteExhibitor(id: string) {
        setExhibitors([...exhibitors.filter(x => x.id !== id)])
    }


    return (
    <>
        <Header as='h2' icon='users' content='Exhibitors' />
        <ExhibitorDashboard
            exhibitors={exhibitors}
            selectedExhibitor={selectedExhibitor}
            selectExhibitor={handleSelectExhibitor}
            cancelSelectExhibitor={handleCancelSelectExhibitor}
            editMode={editMode}
            openForm={handleFormOpen}
            closeForm={handleFormClose}
            createOrEdit={handleCreateOrEditExhibitor}
            deleteExhibitor={handleDeleteExhibitor}
        />
    </>
    );
}

export default Exhibitor;