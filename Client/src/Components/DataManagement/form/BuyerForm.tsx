import { observer } from 'mobx-react-lite'
import React, { ChangeEvent, useState } from 'react'
import { Button, Form, Input, Segment } from 'semantic-ui-react'
import { useStore } from '../../../app/stores/store'

export default observer( function BuyerForm() {
    const {buyerStore} = useStore();
    const {selectedBuyer, closeForm, createBuyer, updateBuyer, loading} = buyerStore;

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
        else if(!buyer.email.match( /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/)) {
            alert("Invalid email address");
        }
        else if(!buyer.phone.match(/^\(?(\d{3})\)?[- ]?(\d{3})[- ]?(\d{4})$/)) {
            alert("Invalid phone number, must be 10 digits\n\nFormats: \n1234567890, \n123-456-7890, \n(123)-456-7890, \n(123)456-7890");
        }

        else {
            buyer.phone = buyer.phone.replace(/\D/g, '');
            buyer.phone = buyer.phone.slice(0,3)+"-"+buyer.phone.slice(3,6)+"-"+buyer.phone.slice(6);
            buyer.id ? updateBuyer(buyer) : createBuyer(buyer);
        }
    }

    function handleInputChange(event: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) {
        const {name, value} = event.target;
        setBuyer({...buyer, [name]: value});
    }

    return (
        <Segment className='add-form create-form' clearing>
            <Form onSubmit={handleSubmit} autoComplete='off'>
                <Form.Input required={true} label='Bidder #' placeholder='Bidder #' value={buyer.bidderNumber} name='bidderNumber' onChange={handleInputChange}/>
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
                <Button onClick={handleSubmit} loading={loading} floated='right' positive type='submit' content='Submit' />
                <Button onClick={closeForm} floated='right' type='button' content='Cancel' />
            </Form>
        </Segment>
    )
})