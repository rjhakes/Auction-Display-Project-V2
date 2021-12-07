import React, { useEffect, useState } from 'react';
import { Header } from 'semantic-ui-react';
import { BuyerModel } from '../../Models/Buyer'
import BuyerDashboard from './dashboard/BuyerDashboard';
import {v4 as uuid} from 'uuid';
import agent from '../../app/api/agent';
import LoadingComponent from '../../app/layout/LoadingComponent';

function Buyer() {
    const [buyers, setBuyers] = useState<BuyerModel[]>([]);
    const [selectedBuyer, setSelectedBuyer] = useState<BuyerModel | undefined>(undefined);
    const [editMode, setEditMode] = useState(false);
    const [loading, setLoading] = useState(true);
    const [submitting, setSubmitting] = useState(false);



    useEffect(() => {
        // axios.get<BuyerModel[]>('http://localhost:5000/api/Buyer').then(response => {
        // console.log(response);
        // setBuyers(response.data);
        // })
        agent.Buyers.list().then(response => {
            setBuyers(response);
            setLoading(false);
        })
    }, [])

    function handleSelectBuyer(id: string) {
        setSelectedBuyer(buyers.find(x => x.id === id));
    }

    function handleCancelSelectBuyer() {
        setSelectedBuyer(undefined);
    }

    function handleFormOpen(id?: string){
        id ? handleSelectBuyer(id) : handleCancelSelectBuyer();
        setEditMode(true);
    }

    function handleFormClose() {
        setEditMode(false);
    }

    function handleCreateOrEditBuyer(buyer: BuyerModel) {
        setSubmitting(true);
        if (buyer.id) {
            agent.Buyers.update(buyer).then(() => {
                setBuyers([...buyers.filter(x => x.id !== buyer.id), buyer])
                setSelectedBuyer(buyer);
                setEditMode(false);
                setSubmitting(false);
            })
        } else {
            buyer.id = uuid();
            agent.Buyers.create(buyer).then(() => {
                setBuyers([...buyers, buyer])
                setSelectedBuyer(buyer);
                setEditMode(false);
                setSubmitting(false);
            })
        }
    }

    function handleDeleteBuyer(id: string) {
        setSubmitting(true);
        agent.Buyers.delete(id).then(() => {
            setBuyers([...buyers.filter(x => x.id !== id)]);
            setSubmitting(false);
        })
        
    }


    if (loading) return <LoadingComponent content='Loaading app' />

    return (
    <div className='data-manager'>
        <Header className='header-data' as='h2' icon='users' content='Buyers'  />
        <BuyerDashboard
            buyers={buyers}
            selectedBuyer={selectedBuyer}
            selectBuyer={handleSelectBuyer}
            cancelSelectBuyer={handleCancelSelectBuyer}
            editMode={editMode}
            openForm={handleFormOpen}
            closeForm={handleFormClose}
            createOrEdit={handleCreateOrEditBuyer}
            deleteBuyer={handleDeleteBuyer}
            submitting={submitting}
        />
    </div>
    );
}
export default Buyer;
        // {/* <table>
        //     <thead>
        //         <tr>
        //             <th>Bidder Number</th>
        //             <th>Name</th>
        //             <th>Contact Name</th>
        //             <th>Phone</th>
        //             <th>Email</th>
        //             <th>Logo File</th>
        //             <th>Action</th>
        //         </tr>
        //     </thead>
        //     <tbody>
        //         {buyers.map(buyer => (
        //             <tr key={buyer.id}>
        //                 <td>{buyer.bidderNumber}</td>
        //                 <td>{buyer.name}</td>
        //                 <td>{buyer.contactName}</td>
        //                 <td>{buyer.phone}</td>
        //                 <td>{buyer.email}</td>
        //                 <td>{buyer.logoFile}</td>
        //                 <td>{buyer.action}</td>
        //             </tr>
        //         ))}
        //     </tbody>
        // </table> */}
    

