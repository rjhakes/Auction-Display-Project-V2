import { observer } from 'mobx-react-lite';
import React, { SyntheticEvent, useState } from 'react';
import { Button, Table, TableHeader, TableRow, TableHeaderCell, TableBody, TableCell } from 'semantic-ui-react';
import LoadingComponent from '../../../app/layout/LoadingComponent';
import { useStore } from '../../../app/stores/store';

export default observer( function BuyerList() {
    const {buyerStore} = useStore();
    const {buyersByBidNum, deleteBuyer, loading, openForm} = buyerStore;

    const [target, setTarget] = useState('');
    
    function handleBuyerDelete(e: SyntheticEvent<HTMLButtonElement>, id: string) {
        setTarget(e.currentTarget.name);
        deleteBuyer(id);
    }    

    if (buyerStore.loadingInitial) return <LoadingComponent content='Loaading ...' />
    return (
        <>
            <div className='div-data-table-header'>
                <Table inverted fixed stackable className='data-table-header'>
                    <TableHeader  className='table-body'>
                        <TableRow className=''> 
                            <TableHeaderCell width={1} textAlign='center'>Bidder #</TableHeaderCell>
                            <TableHeaderCell width={1} textAlign='center'>Name</TableHeaderCell>
                            <TableHeaderCell width={1} textAlign='center'>Contact Name</TableHeaderCell>
                            <TableHeaderCell width={1} textAlign='center'>Phone</TableHeaderCell>
                            <TableHeaderCell width={1} textAlign='center'>Email</TableHeaderCell>
                            <TableHeaderCell width={1} textAlign='center'>Logo File</TableHeaderCell>
                            <TableHeaderCell width={2} textAlign='center'></TableHeaderCell>
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
                                <TableCell width={2} textAlign='center'>
                                    <Button onClick={() => openForm(buyer.id)} basic color='green' content='Edit' />
                                    <Button 
                                        name={buyer.id}
                                        onClick={(e) => { 
                                        if (window
                                            .confirm(`Are you sure you want to DELETE buyer:\n\nBidder #:     ${buyer.bidderNumber}`)) 
                                            handleBuyerDelete(e, buyer.id)
                                        }} 
                                        loading={loading && target === buyer.id} basic color='red' content='Delete' />
                                </TableCell>
                            </TableRow>
                        ))}
                    </TableBody>
                </Table>
            </div>
        </>
    )
})