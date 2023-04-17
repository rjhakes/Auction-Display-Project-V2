import React from 'react';
import { Header, Grid, Container, Segment } from 'semantic-ui-react';
import BuyerDashboard from './dashboard/BuyerDashboard';
import { observer } from 'mobx-react-lite';
import NavData from './NavData';

function Buyer() {
    return (
        <>
            {/* <Container style={{height:"90%", marginTop: '2em'}}> */}
                <Grid columns={2} centered stackable style={{height: '90vh'}} >
                    <Grid.Row style={{height: '100%'}}>
                        <Grid.Column stretched width={2} style={{height: '20em'}}>
                            <Header className='header-data' as='h2' icon='users' content='Buyers'  />
                            <Segment><NavData/></Segment>
                        </Grid.Column>
                        <Grid.Column stretched width={13} style={{height: '62em'}}>
                            <Segment className='data-manager'>
                                <BuyerDashboard/>
                            </Segment>
                        </Grid.Column>
                    </Grid.Row>
                </Grid>
            {/* </Container>              */}
        </>        
    );
}
export default observer(Buyer);