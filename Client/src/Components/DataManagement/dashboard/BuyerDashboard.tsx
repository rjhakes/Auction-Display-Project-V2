import { observer } from 'mobx-react-lite';
import React, { SyntheticEvent, useState } from 'react';
import { Button, Container, Table, TableBody, TableCell, TableHeader, TableHeaderCell, TableRow } from 'semantic-ui-react';
import { useStore } from '../../../app/stores/store';
import BuyerForm from '../form/BuyerForm';

export default observer( function BuyerDashboard() {

    const {buyerStore} = useStore();
    const {buyersByBidNum, editMode, openForm, deleteBuyer, loading} = buyerStore;

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
                <BuyerForm />}
            </Container>
            <div className='div-data-table-header'>
                <Table inverted fixed stackable className='data-table-header'>
                    <TableHeader  className='table-body'>
                        <TableRow className=''> 
                            <TableHeaderCell with={1} textAlign='center'>Bidder #</TableHeaderCell>
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
                        {buyersByBidNum.map(buyer => (
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
                                        loading={loading && target === buyer.id} 
                                        basic color='red' 
                                        content='Delete' />    
                                </TableCell>
                            </TableRow>
                        ))}
                    </TableBody>
                </Table>
            </div>
        </>
    )
})