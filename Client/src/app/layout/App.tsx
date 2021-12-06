import React, { Fragment, useEffect, useState } from 'react';
import { Routes, Route } from 'react-router-dom';
// import logo from './logo.svg';
// import './App.css';
import './styles.css';
import Home from '../../Components/Home';
import AddonDisplay from '../../Components/AddonDisplay';
import AddonGUI from '../../Components/AddonGUI';
import DataManagement from '../../Components/DataManagement/DataManagement';
import LiveSaleDisplay from '../../Components/LiveSaleDisplay';
import SaleScrollDisplay from '../../Components/SaleScrollDisplay';
import TransactionGUI from '../../Components/TransactionGUI';
import Navigation from '../../Components/Navigation';
import NavBar from './NavBar';
import { Container } from 'semantic-ui-react';
import DMDashboard from '../../Components/DataManagement/dashboard/DMDashboard';

function App() {
  return (
    <>
      <NavBar/>
      <Container style={{marginTop: '7em'}}>
        <DMDashboard/>
      </Container>
      {/* <Container style={{marginTop:'7em'}}>
        <Navigation/>
        <Routes>
          <Route path='/Datamanagement' element={<DataManagement/>}/>
          <Route path='/TransactionGUI' element={<TransactionGUI/>}/>
          <Route path='/LiveSaleDisplay' element={<LiveSaleDisplay/>}/>
          <Route path='/SaleScrollDisplay' element={<SaleScrollDisplay/>}/>
          <Route path='/AddonGUI' element={<AddonGUI/>}/>
          <Route path='/AddonDisplay' element={<AddonDisplay/>}/>
          <Route path='/' element={<Home/>}/>
        </Routes>
      </Container> */}
    </>
  );
}

export default App;
