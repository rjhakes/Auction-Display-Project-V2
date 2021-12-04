import React, { useEffect, useState } from 'react';
import { Routes, Route } from 'react-router-dom';
// import logo from './logo.svg';
import './App.css';
import axios from 'axios';
import { Header, List } from 'semantic-ui-react';
import Home from './Components/Home';
import AddonDisplay from './Components/AddonDisplay';
import AddonGUI from './Components/AddonGUI';
import DataManagement from './Components/DataManagement';
import LiveSaleDisplay from './Components/LiveSaleDisplay';
import SaleScrollDisplay from './Components/SaleScrollDisplay';
import TransactionGUI from './Components/TransactionGUI';
import Navigation from './Components/Navigation';

function App() {
  const [buyers, setBuyers] = useState([]);

  useEffect(() => {
    axios.get('http://localhost:5000/api/Buyer').then(response => {
      console.log(response);
      setBuyers(response.data);
    })
  }, [])


  return (
    <div className="App">
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

        <Header as='h2' icon='users' content='Auction' />
      <List>
        {buyers.map((buyer: any) => (
          <List.Item key={buyer.id}>
            {buyer.name} 
          </List.Item>
          )
        )}
      </List>

    </div>
  );
}

export default App;
