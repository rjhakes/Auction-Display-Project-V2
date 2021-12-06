import React from 'react';
import { Item, Segment, Button, Label } from 'semantic-ui-react';
import { BuyerModel } from '../../../Models/Buyer';

interface Props {
    buyers: BuyerModel[];
    // selectedBuyer: BuyerModel | undefined;
    selectBuyer: (id: string) => void;
    // cancelSelectBuyer: () => void;
    deleteBuyer: (id: string) => void;
}

// export default function BuyerList({buyers, selectedBuyer, selectBuyer, cancelSelectBuyer}: Props) {
export default function BuyerList({buyers, selectBuyer, deleteBuyer}: Props) {
    return (
        <Segment>
            <Item.Group divided>
                {buyers.map(buyer => (
                    <Item key={buyer.id}>
                        <Item.Content>
                            
                            <Item.Header as='a'>{buyer.bidderNumber}</Item.Header>
                            <Label basic content="Name"/>
                            <Item.Meta>{buyer.name}</Item.Meta>
                            <Item.Description>
                                <Label basic content="Contact Name"/>
                                <div>{buyer.contactName}</div>
                                <Label basic content="Contact Info"/>
                                <div>{buyer.phone}, {buyer.email}</div>
                            </Item.Description>
                            <Item.Extra>
                                <Button onClick={() => selectBuyer(buyer.id)} floated="right" content='View' color='green'/>
                                <Button onClick={() => deleteBuyer(buyer.id)} floated="right" content='Delete' color='red'/>
                            </Item.Extra>
                        </Item.Content>
                    </Item>
                ))}
            </Item.Group>
        </Segment>
    )
}