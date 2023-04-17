import React from 'react';
import { Grid, Segment, Container, Header } from 'semantic-ui-react';
import NavData from './NavData.js';

export default function DataManagement() {
    return (
        <>
        <Container style={{height:"90%"}}>
                <Grid columns={2} style={{height: '80vh'}} >
                    <Grid.Row style={{height: '100%'}}>
                        <Grid.Column stretched width={3} style={{height: '21em'}}>
                            <Header className='header-data' as='h2' icon='database' content='Data'  />
                            <Segment><NavData/></Segment>
                        </Grid.Column>
                    </Grid.Row>
                </Grid>
            </Container>   



        {/* <Grid column={2} stretched style={{height: '80vh', marginTop: '5em'}}>
            <Grid.Row>
                <Grid.Column stretched floated={'left'}>
                    <Container className="DataManagement">
                        
                    </Container>
                </Grid.Column>
            </Grid.Row>
        </Grid>
         */}
        </>
        
    );
}
