import React from 'react';
import { Header } from 'semantic-ui-react';
import ExhibitorDashboard from './dashboard/ExhibitorDashboard';
import { observer } from 'mobx-react-lite';
import NavData from './NavData';

function Exhibitor() {
    return (
        <>
            <div className="navData">
                <NavData/>
            </div>
            <div className='data-manager'>
                <Header className='header-data' as='h2' icon='users' content='Exhibitors'  />
                <ExhibitorDashboard/>
            </div>
        </>        
    );
}
export default observer(Exhibitor);