import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { Header, List } from 'semantic-ui-react';
import { TransactionModel } from '../../Models/Transaction'

function Transaction() {
    const [transactions, setTransactions] = useState<TransactionModel[]>([]);

    useEffect(() => {
        axios.get('http://localhost:5000/api/Transaction').then(response => {
        console.log(response);
        setTransactions(response.data);
        })
    }, [])

    return (
    <div>
        <Header as='h2' icon='spinner' content='Transactions' />
        <table>
            <thead>
                <tr>
                    <th>Sale Number</th>
                    <th>Bidder Number</th>
                    <th>Purchase Amount</th>
                    <th>Processor</th>
                    <th>Action</th>
                </tr>
            </thead>
            <tbody>
                {transactions.map((transaction: any) => (
                    <tr key={transaction.id}>
                        <td>{transaction.saleNumber}</td>
                        <td>{transaction.bidderNumber}</td>
                        <td>{transaction.purchaseAmount}</td>
                        <td>{transaction.processor}</td>
                        <td>{transaction.action}</td>
                    </tr>
                ))}
            </tbody>
        </table>
    </div>
    );
}

export default Transaction;