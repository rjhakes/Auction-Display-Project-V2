import React, { SyntheticEvent, useState } from 'react';
import { Button, Container, Label, Table, TableBody, TableCell, TableHeader, TableHeaderCell, TableRow } from 'semantic-ui-react';
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
    submitting: boolean;
}

export default function BuyerDashboard({buyers, selectedBuyer, 
    selectBuyer, cancelSelectBuyer, editMode, 
    openForm, closeForm, createOrEdit, deleteBuyer, submitting}: Props) {

    const [target, setTarget] = useState('');

    function handleBuyerDelete(e: SyntheticEvent<HTMLButtonElement>, id: string) {
        setTarget(e.currentTarget.name);
        deleteBuyer(id);
    }

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
                <BuyerForm 
                    closeForm={closeForm}
                    buyer={selectedBuyer}
                    createOrEdit={createOrEdit}
                    submitting={submitting}
                />}
            </Container>
            <div className='div-data-table-header'>
                <Table inverted fixed stackable className='data-table-header'>
                    <TableHeader  className='table-body'>
                        <TableRow className=''> 
                            <TableHeaderCell with={1} textAlign='center'>Bidder Number</TableHeaderCell>
                            <TableHeaderCell with={1} textAlign='center'>Name</TableHeaderCell>
                            <TableHeaderCell with={1} textAlign='center'>Contact Name</TableHeaderCell>
                            <TableHeaderCell with={1} textAlign='center'>Phone</TableHeaderCell>
                            <TableHeaderCell with={1} textAlign='center'>Email</TableHeaderCell>
                            <TableHeaderCell with={1} textAlign='center'>Logo File</TableHeaderCell>
                            <TableHeaderCell with={1} textAlign='center'>Action</TableHeaderCell>
                        </TableRow>
                    </TableHeader>
                </Table>
            </div>
            <div className='div-data-table-body'>
                <Table inverted fixed striped stackable className='data-table-body'>
                    <TableBody className='table-body'>
                        {buyers.map(buyer => (
                            <TableRow key={buyer.id}>
                                <TableCell width={1} textAlign='center'>{buyer.bidderNumber}</TableCell>
                                <TableCell width={1} textAlign='center'>{buyer.name}</TableCell>
                                <TableCell width={1} textAlign='center'>{buyer.contactName}</TableCell>
                                <TableCell width={1} textAlign='center'>{buyer.phone}</TableCell>
                                <TableCell width={1} textAlign='center'>{buyer.email}</TableCell>
                                <TableCell width={1} textAlign='center'>{buyer.logoFile}</TableCell>
                                <TableCell width={1} textAlign='center'>{buyer.action}</TableCell>
                                <TableCell width={2} textAlign='center'>
                                    <Button onClick={() => openForm(buyer.id)} basic color='green' content='Edit' />
                                    <Button 
                                        name={buyer.id}
                                        onClick={(e) => handleBuyerDelete(e, buyer.id)} 
                                        loading={submitting && target === buyer.id} 
                                        basic color='red' 
                                        content='Delete' />    
                                </TableCell>
                            </TableRow>
                        ))}
                    </TableBody>
                </Table>
            </div>
                    
                {/* </div> */}
        </>
    )
}


// {/* <Grid>
//                 <Grid.Column width='10'>
//                     <BuyerList 
//                         buyers={buyers}
//                         selectBuyer={selectBuyer}
//                         deleteBuyer={deleteBuyer}
//                     />
//                 </Grid.Column>
//                 <Grid.Column width='6'>
//                     {selectedBuyer && !editMode &&
//                     <BuyerDetails 
//                         buyer={selectedBuyer} 
//                         cancelSelectBuyer={cancelSelectBuyer} 
//                         openForm={openForm}
//                     />}
//                     {editMode &&
//                     <BuyerForm 
//                         closeForm={closeForm}
//                         buyer={selectedBuyer}
//                         createOrEdit={createOrEdit}
//                     />}
//                 </Grid.Column>
//             </Grid> */}