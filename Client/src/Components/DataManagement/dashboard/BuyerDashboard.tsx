import React from 'react';
import { Button, Label, Table, TableBody, TableCell, TableHeader, TableHeaderCell, TableRow } from 'semantic-ui-react';
// import axios from 'axios';
import { BuyerModel } from '../../../Models/Buyer'
// import BuyerList from './BuyerList';
// import BuyerDetails from '../details/BuyerDetails';
import BuyerForm from '../form/BuyerForm';


interface Props {
    buyers: BuyerModel[];
    selectedBuyer: BuyerModel | undefined;
    selectBuyer: (id: string) => void;
    cancelSelectBuyer: () => void;
    editMode: boolean;
    openForm: (id?: string) => void;
    closeForm: () => void;
    createOrEdit: (buyer: BuyerModel) => void;
    deleteBuyer: (id: string) => void;
}

export default function BuyerDashboard({buyers, selectedBuyer, 
    selectBuyer, cancelSelectBuyer, editMode, 
    openForm, closeForm, createOrEdit, deleteBuyer}: Props) {

    return (
        <>
            <Button onClick={() => openForm()} positive content='Add Buyer'/>
            <div className='div-data-table'>
                        <Table className='data-table'>
                            <TableHeader>
                                <TableRow> 
                                    <TableHeaderCell>Bidder Number</TableHeaderCell>
                                    <TableHeaderCell>Name</TableHeaderCell>
                                    <TableHeaderCell>Contact Name</TableHeaderCell>
                                    <TableHeaderCell>Phone</TableHeaderCell>
                                    <TableHeaderCell>Email</TableHeaderCell>
                                    <TableHeaderCell>Logo File</TableHeaderCell>
                                    <TableHeaderCell>Action</TableHeaderCell>
                                </TableRow>
                            </TableHeader>
                            <TableBody>
                                {buyers.map(buyer => (
                                    <TableRow key={buyer.id}>
                                        <TableCell>{buyer.bidderNumber}</TableCell>
                                        <TableCell>{buyer.name}</TableCell>
                                        <TableCell>{buyer.contactName}</TableCell>
                                        <TableCell>{buyer.phone}</TableCell>
                                        <TableCell>{buyer.email}</TableCell>
                                        <TableCell>{buyer.logoFile}</TableCell>
                                        <TableCell>{buyer.action}</TableCell>
                                        <TableCell>
                                            <Label onClick={() => openForm(buyer.id)} basic color='green' content='Edit'/>
                                            <Label onClick={() => deleteBuyer(buyer.id)} basic color='red' content='Delete'/>    
                                        </TableCell>
                                    </TableRow>
                                ))}
                            </TableBody>
                        </Table>
            </div>
            <div className='add-form create-form'>
                {editMode &&
                <BuyerForm 
                    closeForm={closeForm}
                    buyer={selectedBuyer}
                    createOrEdit={createOrEdit}
                />}
            </div>
            
            {/* <Grid>
                <Grid.Column width='10'>
                    <BuyerList 
                        buyers={buyers}
                        selectBuyer={selectBuyer}
                        deleteBuyer={deleteBuyer}
                    />
                </Grid.Column>
                <Grid.Column width='6'>
                    {selectedBuyer && !editMode &&
                    <BuyerDetails 
                        buyer={selectedBuyer} 
                        cancelSelectBuyer={cancelSelectBuyer} 
                        openForm={openForm}
                    />}
                    {editMode &&
                    <BuyerForm 
                        closeForm={closeForm}
                        buyer={selectedBuyer}
                        createOrEdit={createOrEdit}
                    />}
                </Grid.Column>
            </Grid> */}
        </>
    )
}
