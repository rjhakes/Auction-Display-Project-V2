import React from 'react';
import { Header } from 'semantic-ui-react';
import TransactionDashboard from './dashboard/TransactionDashboard';
import { observer } from 'mobx-react-lite';
import NavData from './NavData';

function Transaction() {
    return (
        <>
            <div className="navData">
                <NavData/>
            </div>
            <div className='data-manager'>
                <Header className='header-data' as='h2' icon='handshake outline' content='Transactions'  />
                <TransactionDashboard/>
            </div>
        </>        
    );
}
export default observer(Transaction);;