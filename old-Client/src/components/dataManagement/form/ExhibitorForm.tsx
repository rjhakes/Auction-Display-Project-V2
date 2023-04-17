import { observer } from 'mobx-react-lite'
import React, { ChangeEvent, useState } from 'react'
import { Button, Form, Segment } from 'semantic-ui-react'
import { useStore } from '../../../app/stores/store'

export default observer( function ExhibitorForm() {
    const {exhibitorStore} = useStore();
    const {selectedExhibitor, closeForm, createExhibitor, updateExhibitor, loading} = exhibitorStore;

    const initialState = selectedExhibitor ?? {
        id: '',
        saleNumber: 0,
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
        exhibitor.id ? updateExhibitor(exhibitor) : createExhibitor(exhibitor);
        
    }

    function handleInputChange(event: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) {
        const {name, value} = event.target;
        setExhibitor({...exhibitor, [name]: value});
    }

    return (
        <Segment className='add-form create-form' clearing>
            <div className='add-create-form-div'>
                <Form onSubmit={handleSubmit} autoComplete='off'>
                <div className="exhibitor-form-left">
                    <Form.Input className='form-input-label' required={true} label='Sale #' placeholder='Sale #' value={exhibitor.saleNumber} name='saleNumber' onChange={handleInputChange}/>
                    <Form.Input className='form-input-label' required={true} label='Name' placeholder='Name' value={exhibitor.name} name='name' onChange={handleInputChange}/>
                    <Form.Input className='form-input-label' label='Tag' placeholder='Tag' value={exhibitor.tag} name='tag' onChange={handleInputChange}/>
                    <Form.Input className='form-input-label' label='Species' placeholder='Species' value={exhibitor.species} name='species' onChange={handleInputChange}/>
                    <Form.Input className='form-input-label' label='Description' placeholder='Description' value={exhibitor.description} name='description' onChange={handleInputChange}/>
                    <Form.Input className='form-input-label' label='Check in Weight' placeholder='Check in Weight' value={exhibitor.checkInWeight} name='checkInWeight' onChange={handleInputChange}/>
                </div>
                <div className="exhibitor-form-right">
                    <Form.Input label='Club' placeholder='Club' value={exhibitor.clubName} name='clubName' onChange={handleInputChange}/>
                    <Form.Input label='Show Class' placeholder='Show Class' value={exhibitor.showClassName} name='showClassName' onChange={handleInputChange}/>
                    <Form.Input label='Placing' placeholder='Placing' value={exhibitor.placing} name='placing' onChange={handleInputChange}/>
                    <Form.Input label='Buy Back' placeholder='Buy Back' value={exhibitor.buyBack} name='buyBack' onChange={handleInputChange}/>
                    <Button onClick={handleSubmit} loading={loading} floated='right' positive type='submit' content='Submit' />
                    <Button onClick={closeForm} floated='right' type='button' content='Cancel' />
                </div>
            </Form>
            </div>
            
        </Segment>
    )
})