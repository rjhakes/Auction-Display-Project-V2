import { observer } from 'mobx-react-lite'
import React, { ChangeEvent, useState } from 'react'
import { Button, Form, Segment } from 'semantic-ui-react'
import { useStore } from '../../../app/stores/store'

export default observer( function TransactionForm() {
    const {transactionStore} = useStore();
    const {selectedTransaction, closeForm, createTransaction, updateTransaction, loading} = transactionStore;

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
        transaction.id ? updateTransaction(transaction) : createTransaction(transaction);
        
    }

    function handleInputChange(event: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) {
        const {name, value} = event.target;
        setTransaction({...transaction, [name]: value});
    }

    return (
        <Segment className='add-form create-form' clearing>
            <Form onSubmit={handleSubmit} autoComplete='off'>
                <Form.Input required={true} label='Sale #' placeholder='Sale Number' value={transaction.saleNumber} name='saleNumber' onChange={handleInputChange}/>
                <Form.Input required={true} label='Bidder #' placeholder='Bidder Number' value={transaction.bidderNumber} name='bidderNumber' onChange={handleInputChange}/>
                <Form.Input required={true} label='Purchase Amount' placeholder='Purchase Amount' value={transaction.purchaseAmount} name='purchaseAmount' onChange={handleInputChange}/>
                <Form.Input label='Processor' placeholder='Processor' value={transaction.processor} name='processor' onChange={handleInputChange}/>
                <Button onClick={handleSubmit} loading={loading} floated='right' positive type='submit' content='Submit' />
                <Button onClick={closeForm} floated='right' type='button' content='Cancel' />
            </Form>
        </Segment>
    )
})