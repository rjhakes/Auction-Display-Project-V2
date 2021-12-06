import React, { ChangeEvent, useState } from 'react'
import { Button, Form, Segment } from 'semantic-ui-react'
import { BuyerModel } from '../../../Models/Buyer'

interface Props {
    buyer: BuyerModel | undefined;
    closeForm: () => void;
    createOrEdit: (buyer: BuyerModel) => void;
}

export default function BuyerForm({buyer: selectedBuyer, closeForm, createOrEdit}: Props) {

    const initialState = selectedBuyer ?? {
        id: '',
        bidderNumber: '',
        name: '',
        contactName: '',
        phone: '',
        email: '',
        logoFile: '',
        action: '',
    }

    const [buyer, setBuyer] = useState(initialState);

    function handleSubmit() {
        createOrEdit(buyer);
        
    }

    function handleInputChange(event: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) {
        const {name, value} = event.target;
        setBuyer({...buyer, [name]: value});
    }

    return (
        <Segment className='add-form create-form' clearing>
            <Form onSubmit={handleSubmit} autoComplete='off'>
                <Form.Input placeholder='Bidder Number' value={buyer.bidderNumber} name='bidderNumber' onChange={handleInputChange}/>
                <Form.Input placeholder='Name' value={buyer.name} name='name' onChange={handleInputChange}/>
                <Form.Input placeholder='Contact Name' value={buyer.contactName} name='contactName' onChange={handleInputChange}/>
                <Form.Input placeholder='Phone Number' value={buyer.phone} name='phone' onChange={handleInputChange}/>
                <Form.Input placeholder='Email' value={buyer.email} name='email' onChange={handleInputChange}/>
                <Form.Input placeholder='Logo File' value={buyer.logoFile} name='logoFile' onChange={handleInputChange}/>
                <Form.Input placeholder='Action' value={buyer.action} name='action' onChange={handleInputChange}/>
                <Button onClick={handleSubmit} floated='right' positive type='submit' content='Submit' />
                <Button onClick={closeForm} floated='right' type='button' content='Cancel' />
            </Form>
        </Segment>
    )
}