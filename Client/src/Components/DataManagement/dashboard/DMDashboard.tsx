import React, { useEffect, useState } from 'react';
import { Grid, List, Table, TableBody, TableCell, TableHeader, TableHeaderCell, TableRow } from 'semantic-ui-react';
import axios from 'axios';
import { BuyerModel } from '../../../Models/Buyer'
import DMList from './DMList';
import DMDetails from '../details/DMDetails';
import DMForm from '../form/DMForm';

interface Props {
    // buyers: BuyerModel[];
    // selectedBuyer: BuyerModel | undefined;
    // selectBuyer: (id: string) => void;
    // cancelSelectBuyer: () => void;
}

export default function DMDashboard() {
    const [buyers, setBuyers] = useState<BuyerModel[]>([]);
    const [selectedBuyer, setSelectedBuyer] = useState<BuyerModel | undefined>(undefined);

    useEffect(() => {
        axios.get<BuyerModel[]>('http://localhost:5000/api/Buyer').then(response => {
        console.log(response);
        setBuyers(response.data);
        })
    }, [])

    function handleSelectBuyer(id: string) {
        setSelectedBuyer(buyers.find(x => x.id === id));
    }

    function handleCancelSelectBuyer() {
        setSelectedBuyer(undefined);
    }

    return (
        <>
            <Grid>
                <Grid.Column width='10'>
                    <DMList 
                        buyers={buyers}
                        selectBuyer={handleSelectBuyer}
                    />
                </Grid.Column>
                <Grid.Column width='6'>
                    {selectedBuyer &&
                    <DMDetails buyer={selectedBuyer} cancelSelectBuyer={handleCancelSelectBuyer} />}
                    <DMForm />
                </Grid.Column>
            </Grid>
            

            <Table>
                <TableHeader>
                    <TableRow> 
                        <TableHeaderCell>Bidder Number</TableHeaderCell>
                        <TableHeaderCell>Name</TableHeaderCell>
                        <TableHeaderCell>Contact Name</TableHeaderCell>
                        <TableHeaderCell>Phone</TableHeaderCell>
                        <TableHeaderCell>Email</TableHeaderCell>
                        <TableHeaderCell>Logo File</TableHeaderCell>
                        <TableHeaderCell>Action</TableHeaderCell>
                    </TableRow>
                </TableHeader>
                <TableBody>
                    {buyers.map(buyer => (
                        <TableRow key={buyer.id}>
                            <TableCell>{buyer.bidderNumber}</TableCell>
                            <TableCell>{buyer.name}</TableCell>
                            <TableCell>{buyer.contactName}</TableCell>
                            <TableCell>{buyer.phone}</TableCell>
                            <TableCell>{buyer.email}</TableCell>
                            <TableCell>{buyer.logoFile}</TableCell>
                            <TableCell>{buyer.action}</TableCell>
                        </TableRow>
                    ))}
                </TableBody>
            </Table>


            
        </>
    )
}

                        // selectedBuyer={selectedBuyer}
                        // cancelSelectBuyer={handleCancelSelectBuyer}
