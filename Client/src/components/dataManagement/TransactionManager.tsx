import React from 'react';
import { Header, Container, Grid, Segment } from 'semantic-ui-react';
// import TransactionDashboard from './dashboard/TransactionDashboard';
import { observer } from 'mobx-react-lite';
// import NavData from './NavData';

function Transaction() {
    return (
        <>
            <Container style={{height:"90%", marginTop: '2em', }}>
                <Grid columns={2} centered stackable style={{height: '80vh'}} >
                    <Grid.Row style={{height: '100%'}}>
                        <Grid.Column stretched width={3} style={{height: '20em'}}>
                            <Header className='header-data' as='h2' icon='handshake outline' content='Transactions'  />
                            {/* <Segment><NavData/></Segment> */}
                        </Grid.Column>
                        <Grid.Column stretched width={13} style={{height: '62em'}}>
                            <Segment className='data-manager'>
                                {/* <TransactionDashboard/> */}
                            </Segment>
                        </Grid.Column>
                    </Grid.Row>
                </Grid>
            </Container>    
        </>        
    );
}
export default observer(Transaction);;