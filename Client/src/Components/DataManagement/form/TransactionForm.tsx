import React, { ChangeEvent, useState } from 'react'
import { Button, Form, Segment } from 'semantic-ui-react'
import { TransactionModel } from '../../../Models/Transaction'

interface Props {
    transaction: TransactionModel | undefined;
    closeForm: () => void;
    createOrEdit: (transaction: TransactionModel) => void;
}

export default function TransactionForm({transaction: selectedTransaction, closeForm, createOrEdit}: Props) {

    const initialState = selectedTransaction ?? {
        id: '',
        saleNumber: '',
        bidderNumber: '',
        purchaseAmount: '',
        processor: '',
        action: '',
    }

    const [transaction, setTransaction] = useState(initialState);

    function handleSubmit() {
        createOrEdit(transaction);
        
    }

    function handleInputChange(event: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) {
        const {name, value} = event.target;
        setTransaction({...transaction, [name]: value});
    }

    return (
        <Segment className='add-form create-form' clearing>
            <Form onSubmit={handleSubmit} autoComplete='off'>
                <Form.Input placeholder='Sale Number' value={transaction.saleNumber} name='saleNumber' onChange={handleInputChange}/>
                <Form.Input placeholder='Bidder Number' value={transaction.bidderNumber} name='bidderNumber' onChange={handleInputChange}/>
                <Form.Input placeholder='Purchase Amount' value={transaction.purchaseAmount} name='purchaseAmount' onChange={handleInputChange}/>
                <Form.Input placeholder='Processor' value={transaction.processor} name='processor' onChange={handleInputChange}/>
                <Form.Input placeholder='Action' value={transaction.action} name='action' onChange={handleInputChange}/>
                <Button onClick={handleSubmit} floated='right' positive type='submit' content='Submit' />
                <Button onClick={closeForm} floated='right' type='button' content='Cancel' />
            </Form>
        </Segment>
    )
}