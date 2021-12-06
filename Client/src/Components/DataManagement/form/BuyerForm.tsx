import React, { ChangeEvent, useState } from 'react'
import { Button, Form, Input, Segment } from 'semantic-ui-react'
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
        if(buyer.bidderNumber === '' || buyer.name === '' || buyer.contactName === '' || buyer.phone === '' || buyer.email === '') {
            alert("Complete all required fields");
        }
        else if(!buyer.email.match( /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/)) {
            alert("Invalid email address");
        }
        else if(!buyer.phone.match(/^\d{10}$/)) {
            alert("Invalid phone number, but be 10 digits");
        }

        else {
            createOrEdit(buyer);
        }
    }

    function handleInputChange(event: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) {
        const {name, value} = event.target;
        setBuyer({...buyer, [name]: value});
        if(name === 'email') {

        }
    }

    return (
        <Segment className='add-form create-form' clearing>
            <Form onSubmit={handleSubmit} autoComplete='off'>
                <Form.Input required={true} label='Bidder Number'placeholder='Bidder Number' value={buyer.bidderNumber} name='bidderNumber' onChange={handleInputChange}/>
                <Form.Input required={true} label='Name' placeholder='Name'value={buyer.name} name='name' onChange={handleInputChange}/>
                <Form.Input required={true} label ='Contact Name' placeholder='Contact Name' value={buyer.contactName} name='contactName' onChange={handleInputChange}/>
                <Form.Input required={true} type='phone' label='Phone Number' placeholder='Phone Number' value={buyer.phone} name='phone' onChange={handleInputChange}/>
                <Form.Input 
                    required={true} 
                    id='form-input-control-error-email' 
                    control={Input}
                    label='Email'
                    type='text'
                    placeholder='Email@domain.com' 
                    value={buyer.email} name='email' onChange={handleInputChange}  
                />
                <Form.Input label='Logo File' placeholder='Logo File' value={buyer.logoFile} name='logoFile' onChange={handleInputChange}/>
                <Form.Input label='Action' placeholder='Action' value={buyer.action} name='action' onChange={handleInputChange}/>
                <Button onClick={handleSubmit} floated='right' positive type='submit' content='Submit' />
                <Button onClick={closeForm} floated='right' type='button' content='Cancel' />
            </Form>
        </Segment>
    )
}