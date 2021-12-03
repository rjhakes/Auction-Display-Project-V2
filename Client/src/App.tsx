import React, { useEffect, useState } from 'react';
import logo from './logo.svg';
import './App.css';
import axios from 'axios';
import { Header, List } from 'semantic-ui-react';

function App() {
  const [buyers, setBuyers] = useState([]);

  useEffect(() => {
    axios.get('http://localhost:5000/api/Buyer').then(response => {
      console.log(response);
      setBuyers(response.data);
    })
  }, [])


  return (
    <div>
      <Header as='h2' icon='users' content='Auction'/>
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
