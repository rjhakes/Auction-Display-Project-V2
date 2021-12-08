import { observer } from 'mobx-react-lite';
import React, { SyntheticEvent, useState } from 'react';
import { Link } from 'react-router-dom';
import { Button, Table, TableHeader, TableRow, TableHeaderCell, TableBody, TableCell } from 'semantic-ui-react';
import LoadingComponent from '../../../app/layout/LoadingComponent';
import { useStore } from '../../../app/stores/store';

export default observer( function TransactionList() {
    const {transactionStore} = useStore();
    const {transactionsBySaleNum, deleteTransaction, loading, openForm} = transactionStore;

    const [target, setTarget] = useState('');
    
    function handleTransactionDelete(e: SyntheticEvent<HTMLButtonElement>, id: string) {
        setTarget(e.currentTarget.name);
        deleteTransaction(id);
    }    

    if (transactionStore.loadingInitial) return <LoadingComponent content='Loaading app' />
    return (
        <>
            <div className='div-data-table-header'>
                <Table inverted fixed stackable className='data-table-header'>
                    <TableHeader  className='table-body'>
                        <TableRow className=''> 
                            <TableHeaderCell with={1} textAlign='center'>Sale #</TableHeaderCell>
                            <TableHeaderCell with={1} textAlign='center'>Bidder #</TableHeaderCell>
                            <TableHeaderCell with={1} textAlign='center'>Purchase Amount</TableHeaderCell>
                            <TableHeaderCell with={1} textAlign='center'>Processor</TableHeaderCell>
                            <TableHeaderCell with={1} textAlign='center'>Action</TableHeaderCell>
                        </TableRow>
                    </TableHeader>
                </Table>
            </div>
            <div className='div-data-table-body'>
                <Table inverted fixed striped stackable className='data-table-body'>
                    <TableBody className='table-body'>
                        {transactionsBySaleNum.map(transaction => (
                            <TableRow key={transaction.id}>
                                <TableCell width={1} textAlign='center'>{transaction.saleNumber}</TableCell>
                                <TableCell width={1} textAlign='center'>{transaction.bidderNumber}</TableCell>
                                <TableCell width={1} textAlign='center'>{transaction.purchaseAmount}</TableCell>
                                <TableCell width={1} textAlign='center'>{transaction.processor}</TableCell>
                                <TableCell width={1} textAlign='center'>{transaction.action}</TableCell>
                                <TableCell width={2} textAlign='center'>
                                    <Button onClick={() => openForm(transaction.id)} basic color='green' content='Edit' />
                                    {/* <Button as={Link} to={`/dataManagement/transactions/${transaction.id}`} basic color='green' content='Edit' /> */}
                                    <Button 
                                        name={transaction.id}
                                        onClick={(e) => handleTransactionDelete(e, transaction.id)} 
                                        loading={loading && target === transaction.id} 
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