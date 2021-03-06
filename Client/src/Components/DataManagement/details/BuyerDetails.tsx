import React from 'react'
import { Button, Card } from 'semantic-ui-react'
import { BuyerModel } from '../../../app/models/Buyer'

interface Props {
    buyer: BuyerModel
    cancelSelectBuyer: () => void;
    openForm: (id: string) => void;
    // deleteBuyer: (id: string) => void;
}

export default function BuyerDetails({buyer, cancelSelectBuyer, openForm}: Props) {
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
                    <Button onClick={() => openForm(buyer.id)} basic color='green' content='Edit'/>
                    {/* <Button onClick={() => deleteBuyer(buyer.id)} basic color='red' content='Delete'/> */}
                    <Button onClick={cancelSelectBuyer} basic color='grey' content='Close'/>
                </Button.Group>
            </Card.Content>
        </Card>
    )
}