import React from 'react';
// import BuyerDashboard from './dashboard/BuyerDashboard';
import { observer } from 'mobx-react-lite';
import { Box, Typography } from '@mui/material';
import { useTheme } from '../../app/theme/theme';
import BuyerDashboard from './dashboard/BuyerDashboard';
// import NavData from './NavData';

function Buyer() {
    const {themer} = useTheme();
    const {theme, tokens} = themer;
    const colors = tokens(theme.palette.mode);
    
    return (
        <>
        <Box>
            <Box>
                <Typography
                variant="h1"
                color={colors.grey[100]}
                sx={{ m: "15px 0 5px 20px" }}
                >
                Buyers
                </Typography>
            </Box>
            <Box>
                {/* <Typography
                    variant="h1"
                    color={colors.grey[100]}
                    sx={{ m: "15px 0 5px 20px" }}
                    >
                    Hello World
                </Typography> */}
                <BuyerDashboard />
            </Box>
        </Box>
        </>
    );
                {/* <Grid columns={2} centered stackable style={{height: '90vh'}} >
                    <Grid.Row style={{height: '100%'}}>
                        <Grid.Column stretched width={2} style={{height: '20em'}}>
                            <Header className='header-data' as='h2' icon='users' content='Buyers'  />
                            {/* <Segment><NavData/></Segment> 
                        </Grid.Column>
                        <Grid.Column stretched width={13} style={{height: '62em'}}>
                            <Segment className='data-manager'>
                                {/* <BuyerDashboard/> 
                            </Segment>
                        </Grid.Column>
                    </Grid.Row>
                </Grid> */}   
}
export default observer(Buyer);