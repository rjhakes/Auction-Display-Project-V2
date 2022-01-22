import React from 'react';
import { Header } from 'semantic-ui-react';
import BuyerDashboard from './dashboard/BuyerDashboard';
import { observer } from 'mobx-react-lite';
import NavData from './NavData';

function Buyer() {
    return (
        <>
            <div className="navData">
                <NavData/>
            </div>
            <div className='data-manager'>
                <Header className='header-data' as='h2' icon='users' content='Buyers'  />
                <BuyerDashboard/>
            </div>
        </>        
    );
}
export default observer(Buyer);