import React, { ChangeEvent, useState } from 'react'
import { Button, Form, Segment } from 'semantic-ui-react'
import { ExhibitorModel } from '../../../Models/Exhibitor'

interface Props {
    exhibitor: ExhibitorModel | undefined;
    closeForm: () => void;
    createOrEdit: (exhibitor: ExhibitorModel) => void;
}

export default function ExhibitorForm({exhibitor: selectedExhibitor, closeForm, createOrEdit}: Props) {

    const initialState = selectedExhibitor ?? {
        id: '',
        saleNumber: '',
        name: '',
        tag: '',
        species: '',
        description: '',
        checkInWeight: '',
        clubName: '',
        showClassName: '',
        placing: '',
        buyBack: '',
        action: ''
    }

    const [exhibitor, setExhibitor] = useState(initialState);

    function handleSubmit() {
        createOrEdit(exhibitor);
        
    }

    function handleInputChange(event: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) {
        const {name, value} = event.target;
        setExhibitor({...exhibitor, [name]: value});
    }

    return (
        <Segment className='add-form create-form' clearing>
            <Form onSubmit={handleSubmit} autoComplete='off'>
                <Form.Input placeholder='Sale Number' value={exhibitor.saleNumber} name='saleNumber' onChange={handleInputChange}/>
                <Form.Input placeholder='Name' value={exhibitor.name} name='name' onChange={handleInputChange}/>
                <Form.Input placeholder='Tag' value={exhibitor.tag} name='tag' onChange={handleInputChange}/>
                <Form.Input placeholder='Species' value={exhibitor.species} name='species' onChange={handleInputChange}/>
                <Form.Input placeholder='Description' value={exhibitor.description} name='description' onChange={handleInputChange}/>
                <Form.Input placeholder='Check in Weight' value={exhibitor.checkInWeight} name='checkInWeight' onChange={handleInputChange}/>
                <Form.Input placeholder='Club' value={exhibitor.clubName} name='clubName' onChange={handleInputChange}/>
                <Form.Input placeholder='Show Class' value={exhibitor.showClassName} name='showClassName' onChange={handleInputChange}/>
                <Form.Input placeholder='Placing' value={exhibitor.placing} name='placing' onChange={handleInputChange}/>
                <Form.Input placeholder='Buy Back' value={exhibitor.buyBack} name='buyBack' onChange={handleInputChange}/>
                <Form.Input placeholder='Action' value={exhibitor.action} name='action' onChange={handleInputChange}/>
                <Button onClick={handleSubmit} floated='right' positive type='submit' content='Submit' />
                <Button onClick={closeForm} floated='right' type='button' content='Cancel' />
            </Form>
        </Segment>
    )
}