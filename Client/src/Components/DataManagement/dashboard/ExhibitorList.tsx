import { observer } from 'mobx-react-lite';
import React, { SyntheticEvent, useState } from 'react';
import { Button, Table, TableHeader, TableRow, TableHeaderCell, TableBody, TableCell } from 'semantic-ui-react';
import LoadingComponent from '../../../app/layout/LoadingComponent';
import { useStore } from '../../../app/stores/store';

export default observer( function ExhibitorList() {
    const {exhibitorStore} = useStore();
    const {exhibitorsByBidNum, deleteExhibitor, loading, openForm} = exhibitorStore;

    const [target, setTarget] = useState('');
    
    function handleExhibitorDelete(e: SyntheticEvent<HTMLButtonElement>, id: string) {
        setTarget(e.currentTarget.name);
        deleteExhibitor(id);
    }    

    if (exhibitorStore.loadingInitial) return <LoadingComponent content='Loaading app' />
    return (
        <>
            <div className='div-data-table-header'>
                <Table inverted fixed stackable className='data-table-header'>
                    <TableHeader  className='table-body'>
                        <TableRow className=''> 
                            <TableHeaderCell with={1} textAlign='center'>Sale #</TableHeaderCell>
                            <TableHeaderCell with={1} textAlign='center'>Name</TableHeaderCell>
                            <TableHeaderCell with={1} textAlign='center'>Tag</TableHeaderCell>
                            <TableHeaderCell with={1} textAlign='center'>Species</TableHeaderCell>
                            <TableHeaderCell with={1} textAlign='center'>Description</TableHeaderCell>
                            <TableHeaderCell with={1} textAlign='center'>Check in Weight</TableHeaderCell>
                            <TableHeaderCell with={1} textAlign='center'>Show Class Name</TableHeaderCell>
                            <TableHeaderCell with={1} textAlign='center'>Placing</TableHeaderCell>
                            <TableHeaderCell with={1} textAlign='center'>Buy Back</TableHeaderCell>
                            <TableHeaderCell with={1} textAlign='center'>Action</TableHeaderCell>
                        </TableRow>
                    </TableHeader>
                </Table>
            </div>
            <div className='div-data-table-body'>
                <Table inverted fixed striped stackable className='data-table-body'>
                    <TableBody className='table-body'>
                        {exhibitorsByBidNum.map(exhibitor => (
                            <TableRow key={exhibitor.id}>
                                <TableCell width={1} textAlign='center'>{exhibitor.saleNumber}</TableCell>
                                <TableCell width={1} textAlign='center'>{exhibitor.name}</TableCell>
                                <TableCell width={1} textAlign='center'>{exhibitor.tag}</TableCell>
                                <TableCell width={1} textAlign='center'>{exhibitor.species}</TableCell>
                                <TableCell width={1} textAlign='center'>{exhibitor.description}</TableCell>
                                <TableCell width={1} textAlign='center'>{exhibitor.checkInWeight}</TableCell>
                                <TableCell width={1} textAlign='center'>{exhibitor.clubName}</TableCell>
                                <TableCell width={1} textAlign='center'>{exhibitor.showClassName}</TableCell>
                                <TableCell width={1} textAlign='center'>{exhibitor.placing}</TableCell>
                                <TableCell width={1} textAlign='center'>{exhibitor.buyBack}</TableCell>
                                <TableCell width={1} textAlign='center'>{exhibitor.action}</TableCell>
                                <TableCell width={2} textAlign='center'>
                                    <Button onClick={() => openForm(exhibitor.id)} basic color='green' content='Edit' />
                                    <Button 
                                        name={exhibitor.id}
                                        onClick={(e) => { 
                                        if (window
                                            .confirm(`Are you sure you want to DELETE exhibitor:\n\nSale #:       ${exhibitor.saleNumber}\n`)) 
                                            handleExhibitorDelete(e, exhibitor.id)
                                        }} 
                                        loading={loading && target === exhibitor.id} basic color='red' content='Delete' />   
                                </TableCell>
                            </TableRow>
                        ))}
                    </TableBody>
                </Table>
            </div>
        </>
    )
})