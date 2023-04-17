import React from 'react';
import { Container, Grid, Segment } from 'semantic-ui-react';
import TransactionForm from './TransactionForm';

export default function TransactionGUI() {
    return (
        <>
        <Container style={{height:"90%", marginTop: '7em', }}>
            <Grid columns={2} centered container style={{height: '80vh'}} >
                <Grid.Row style={{height: '100%'}}>
                    <Grid.Column stretched style={{width: '30%'}}>
                        <Segment>1</Segment>
                    </Grid.Column>
                    <Grid.Column stretched style={{width: '70%'}}>
                        <Segment>1</Segment>
                        <Segment>2</Segment>
                    </Grid.Column>
                </Grid.Row>
            </Grid>
        </Container>    
        </>
    );
}