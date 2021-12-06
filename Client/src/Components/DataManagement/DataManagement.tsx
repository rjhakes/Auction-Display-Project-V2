import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Transaction from './TransactionManager';
import Buyer from './BuyerManager';
import NavData from './NavData.js';

function DataManagement() {
    return (
        // <div>
        //    <Transaction/>
        //     <Buyer/>
        // </div>
        

        <div className="DataManagement">
            <NavData/>
            <Routes>
                <Route path='/DataManagement/Transactions' element={<Transaction/>}/>
                <Route path='/DataManagement/Buyers' element={<Buyer/>}/>
            </Routes>
        </div>
    );
}

export default DataManagement;