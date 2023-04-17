import React, { Fragment } from 'react';
import { Container, Grid } from 'semantic-ui-react';
import { Route, Routes } from 'react-router-dom';
import './styles.css';
import NavBar from './NavBar';
import HomePage from '../../components/home/HomePage';
import BuyerManager from '../../components/dataManagement/BuyerManager';
import DataManagement from '../../components/dataManagement/DataManagement';
import ExhibitorManager from '../../components/dataManagement/ExhibitorManager';
import TransactionManager from '../../components/dataManagement/TransactionManager';
import TransactionGUI from '../../components/transactionGUI/TransactionGUI';
import LiveSaleDisplay from '../../components/liveSaleDisplay/LiveSaleDisplay';
import SaleScrollDisplay from '../../components/saleScrollDisplay/SaleScrollDisplay';
import AddonGUI from '../../components/addonGUI/AddonGUI';
import AddonDisplay from '../../components/addonDisplay/AddonDisplay';

function App() {
  return (
    <>
    <Grid style={{padding: '1em'}}>
      <Grid.Row>
        <NavBar/>
      </Grid.Row>
      <Grid.Row>
        {/* <Container className='app-container'> */}
          <Routes>
            <Route path='/' element={<HomePage />}/>
            <Route path='/dataManagement' element={<DataManagement />}/>
            <Route path='/dataManagement/buyers' element={<BuyerManager />}/>
            <Route path='/dataManagement/exhibitors' element={<ExhibitorManager />}/>
            <Route path='/dataManagement/transactions' element={<TransactionManager />}/>
            <Route path='/transactionGUI' element={<TransactionGUI />}/>
            <Route path='/liveSaleDisplay' element={<LiveSaleDisplay />}/>
            <Route path='/saleScrollDisplay' element={<SaleScrollDisplay />}/>
            <Route path='/addonGUI' element={<AddonGUI />}/>
            <Route path='/addonDisplay' element={<AddonDisplay />}/>
          </Routes>
        {/* </Container> */}
      </Grid.Row>
    </Grid>      
    </>
  );
}

export default App;
