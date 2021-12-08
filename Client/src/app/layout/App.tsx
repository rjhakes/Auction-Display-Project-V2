import React, { Fragment } from 'react';
import { Container } from 'semantic-ui-react';
import { Route, Routes } from 'react-router-dom';
import './styles.css';
import NavBar from './NavBar';
import HomePage from '../../Components/Home/HomePage';
import BuyerManager from '../../Components/DataManagement/BuyerManager';
import DataManagement from '../../Components/DataManagement/DataManagement';
import ExhibitorManager from '../../Components/DataManagement/ExhibitorManager';
import TransactionManager from '../../Components/DataManagement/TransactionManager';
import TransactionGUI from '../../Components/TransactionGUI/TransactionGUI';
import LiveSaleDisplay from '../../Components/LiveSaleDisplay/LiveSaleDisplay';
import SaleScrollDisplay from '../../Components/SaleScrollDisplay/SaleScrollDisplay';
import AddonGUI from '../../Components/AddonGUI/AddonGUI';
import AddonDisplay from '../../Components/AddonDisplay/AddonDisplay';

function App() {
  return (
    <>
      <NavBar/>
      <Container className='app-container'>
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
      </Container>
    </>
  );
}

export default App;
