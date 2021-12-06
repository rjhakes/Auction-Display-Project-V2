import React from 'react';
import { Button, Label, Table, TableBody, TableCell, TableHeader, TableHeaderCell, TableRow } from 'semantic-ui-react';
// import axios from 'axios';
import { TransactionModel } from '../../../Models/Transaction'
// import TransactionList from './TransactionList';
// import TransactionDetails from '../details/TransactionDetails';
import TransactionForm from '../form/TransactionForm';


interface Props {
    transactions: TransactionModel[];
    selectedTransaction: TransactionModel | undefined;
    selectTransaction: (id: string) => void;
    cancelSelectTransaction: () => void;
    editMode: boolean;
    openForm: (id?: string) => void;
    closeForm: () => void;
    createOrEdit: (transaction: TransactionModel) => void;
    deleteTransaction: (id: string) => void;
}

export default function TransactionDashboard({transactions, selectedTransaction, 
    selectTransaction, cancelSelectTransaction, editMode, 
    openForm, closeForm, createOrEdit, deleteTransaction}: Props) {

    return (
        <>
            <Button onClick={() => openForm()} positive content='Add Transaction'/>
            <div className='div-data-table'>
                        <Table className='data-table'>
                            <TableHeader>
                                <TableRow> 
                                    <TableHeaderCell>Sale Number</TableHeaderCell>
                                    <TableHeaderCell>Bidder Number</TableHeaderCell>
                                    <TableHeaderCell>Purchase Amount</TableHeaderCell>
                                    <TableHeaderCell>Processor</TableHeaderCell>
                                    <TableHeaderCell>Action</TableHeaderCell>
                                </TableRow>
                            </TableHeader>
                            <TableBody>
                                {transactions.map(transaction => (
                                    <TableRow key={transaction.id}>
                                        <TableCell>{transaction.saleNumber}</TableCell>
                                        <TableCell>{transaction.bidderNumber}</TableCell>
                                        <TableCell>{transaction.purchaseAmount}</TableCell>
                                        <TableCell>{transaction.processor}</TableCell>
                                        <TableCell>{transaction.action}</TableCell>
                                        <TableCell>
                                            <Label onClick={() => openForm(transaction.id)} basic color='green' content='Edit'/>
                                            <Label onClick={() => deleteTransaction(transaction.id)} basic color='red' content='Delete'/>    
                                        </TableCell>
                                    </TableRow>
                                ))}
                            </TableBody>
                        </Table>
            </div>
            <div className='add-form create-form'>
                {editMode &&
                <TransactionForm 
                    closeForm={closeForm}
                    transaction={selectedTransaction}
                    createOrEdit={createOrEdit}
                />}
            </div>
        </>
    )}
