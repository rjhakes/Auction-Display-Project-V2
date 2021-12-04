import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { Header, List } from 'semantic-ui-react';

function Buyer() {
    const [buyers, setBuyers] = useState([]);

    useEffect(() => {
        axios.get('http://localhost:5000/api/Buyer').then(response => {
        console.log(response);
        setBuyers(response.data);
        })
    }, [])

    return (
    <div>
        <Header as='h2' icon='users' content='Buyers' />
        <table>
            <thead>
                <tr>
                    <th>Bidder Number</th>
                    <th>Name</th>
                    <th>Contact Name</th>
                    <th>Phone</th>
                    <th>Email</th>
                    <th>Logo File</th>
                    <th>Action</th>
                </tr>
            </thead>
            <tbody>
                {buyers.map((buyer: any) => (
                    <tr key={buyer.id}>
                        <td>{buyer.bidderNumber}</td>
                        <td>{buyer.name}</td>
                        <td>{buyer.contactName}</td>
                        <td>{buyer.phone}</td>
                        <td>{buyer.email}</td>
                        <td>{buyer.logoFile}</td>
                        <td>{buyer.action}</td>
                    </tr>
                ))}
            </tbody>
        </table>
    </div>
    );
}

export default Buyer;