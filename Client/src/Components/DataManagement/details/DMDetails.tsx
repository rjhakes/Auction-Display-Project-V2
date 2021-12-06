import React from 'react'
import { Button, Card, Icon, Image } from 'semantic-ui-react'
import { BuyerModel } from '../../../Models/Buyer'

interface Props {
    buyer: BuyerModel
    cancelSelectBuyer: () => void;
}

export default function DMDetails({buyer, cancelSelectBuyer}: Props) {
    return (
        <Card fluid>
            {/* <Image src={`/aassets/categoryImages/${buyer.logoFile}`} /> */}
            <Card.Content>
            <Card.Header>{buyer.bidderNumber}</Card.Header>
            <Card.Meta>
                <span>{buyer.name}</span>
            </Card.Meta>
            <Card.Description>
                {buyer.contactName}: {buyer.phone}, {buyer.email}
            </Card.Description>
            </Card.Content>
            <Card.Content extra>
                <Button.Group widths='3'>
                    <Button basic color='green' content='Edit'/>
                    <Button basic color='red' content='Delete'/>
                    <Button onClick={cancelSelectBuyer} basic color='grey' content='Close'/>
                    
                </Button.Group>
            </Card.Content>
        </Card>
    )
}