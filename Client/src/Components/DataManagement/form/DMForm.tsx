import React from 'react'
import { Button, Form, Segment } from 'semantic-ui-react'

export default function DMForm() {
    return (
        <Segment clearing>
            <Form>
                <Form.Input placeholder='Bidder Number'/>
                <Form.Input placeholder='Name'/>
                <Form.Input placeholder='Contact Name'/>
                <Form.Input placeholder='Phone Number'/>
                <Form.Input placeholder='Email'/>
                <Form.Input placeholder='Logo File'/>
                <Form.Input placeholder='Action'/>
                <Button floated='right' positive type='submit' content='Submit' />
                <Button floated='right' type='button' content='Cancel' />
            </Form>
        </Segment>
    )
}