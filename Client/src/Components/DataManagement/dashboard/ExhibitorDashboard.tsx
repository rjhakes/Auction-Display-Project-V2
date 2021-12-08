import React from 'react';
import { Button, Label, Table, TableBody, TableCell, TableHeader, TableHeaderCell, TableRow } from 'semantic-ui-react';
// import axios from 'axios';
import { ExhibitorModel } from '../../../app/Models/Exhibitor'
// import ExhibitorList from './ExhibitorList';
// import ExhibitorDetails from '../details/ExhibitorDetails';
import ExhibitorForm from '../form/ExhibitorForm';


interface Props {
    exhibitors: ExhibitorModel[];
    selectedExhibitor: ExhibitorModel | undefined;
    selectExhibitor: (id: string) => void;
    cancelSelectExhibitor: () => void;
    editMode: boolean;
    openForm: (id?: string) => void;
    closeForm: () => void;
    createOrEdit: (exhibitor: ExhibitorModel) => void;
    deleteExhibitor: (id: string) => void;
}

export default function ExhibitorDashboard({exhibitors, selectedExhibitor, 
    selectExhibitor, cancelSelectExhibitor, editMode, 
    openForm, closeForm, createOrEdit, deleteExhibitor}: Props) {

    return (
        <>
            <Button onClick={() => openForm()} positive content='Add Exhibitor'/>
            <div className='div-data-table'>
                        <Table className='data-table'>
                            <TableHeader>
                                <TableRow> 
                                    <TableHeaderCell>Sale #</TableHeaderCell>
                                    <TableHeaderCell>Name</TableHeaderCell>
                                    <TableHeaderCell>Tag</TableHeaderCell>
                                    <TableHeaderCell>Species</TableHeaderCell>
                                    <TableHeaderCell>Description</TableHeaderCell>
                                    <TableHeaderCell>Check in Weight</TableHeaderCell>
                                    <TableHeaderCell>Club</TableHeaderCell>
                                    <TableHeaderCell>Show Class</TableHeaderCell>
                                    <TableHeaderCell>Placing</TableHeaderCell>
                                    <TableHeaderCell>Buy Back</TableHeaderCell>
                                    <TableHeaderCell>Action</TableHeaderCell>
                                </TableRow>
                            </TableHeader>
                            <TableBody>
                                {exhibitors.map(exhibitor => (
                                    <TableRow key={exhibitor.id}>
                                        <TableCell>{exhibitor.saleNumber}</TableCell>
                                        <TableCell>{exhibitor.name}</TableCell>
                                        <TableCell>{exhibitor.tag}</TableCell>
                                        <TableCell>{exhibitor.species}</TableCell>
                                        <TableCell>{exhibitor.description}</TableCell>
                                        <TableCell>{exhibitor.checkInWeight}</TableCell>
                                        <TableCell>{exhibitor.clubName}</TableCell>
                                        <TableCell>{exhibitor.showClassName}</TableCell>
                                        <TableCell>{exhibitor.placing}</TableCell>
                                        <TableCell>{exhibitor.buyBack}</TableCell>
                                        <TableCell>{exhibitor.action}</TableCell>
                                        <TableCell>
                                            <Label onClick={() => openForm(exhibitor.id)} basic color='green' content='Edit'/>
                                            <Label onClick={() => deleteExhibitor(exhibitor.id)} basic color='red' content='Delete'/>    
                                        </TableCell>
                                    </TableRow>
                                ))}
                            </TableBody>
                        </Table>
            </div>
            <div className='add-form create-form'>
                {editMode &&
                <ExhibitorForm 
                    closeForm={closeForm}
                    exhibitor={selectedExhibitor}
                    createOrEdit={createOrEdit}
                />}
            </div>
        </>)}