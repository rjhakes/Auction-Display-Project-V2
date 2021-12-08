import React, { useEffect } from 'react';
import { Header } from 'semantic-ui-react';
import BuyerDashboard from './dashboard/BuyerDashboard';
import LoadingComponent from '../../app/layout/LoadingComponent';
import { useStore } from '../../app/stores/store';
import { observer } from 'mobx-react-lite';

function Buyer() {
    const {buyerStore} = useStore();

    useEffect(() => {
        buyerStore.loadBuyers();
    }, [buyerStore])

    if (buyerStore.loadingInitial) return <LoadingComponent content='Loaading app' />

    return (
    <div className='data-manager'>
        <Header className='header-data' as='h2' icon='users' content='Buyers'  />
        <BuyerDashboard/>
    </div>
    );
}
export default observer(Buyer);