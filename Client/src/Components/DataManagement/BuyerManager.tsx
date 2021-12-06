import React, { useEffect, useState } from 'react';
import { Header } from 'semantic-ui-react';
import { BuyerModel } from '../../Models/Buyer'
import BuyerDashboard from './dashboard/BuyerDashboard';
import {v4 as uuid} from 'uuid';
import agent from '../../app/api/agent';

function Buyer() {
    const [buyers, setBuyers] = useState<BuyerModel[]>([]);
    const [selectedBuyer, setSelectedBuyer] = useState<BuyerModel | undefined>(undefined);
    const [editMode, setEditMode] = useState(false);



    useEffect(() => {
        // axios.get<BuyerModel[]>('http://localhost:5000/api/Buyer').then(response => {
        // console.log(response);
        // setBuyers(response.data);
        // })
        agent.Buyers.list().then(response => {
            setBuyers(response);
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
        buyer.id 
            ? setBuyers([...buyers.filter(x => x.id !== buyer.id), buyer])
            : setBuyers([...buyers, {...buyer, id: uuid()}]);
        setEditMode(false);
        setSelectedBuyer(buyer);
    }

    function handleDeleteBuyer(id: string) {
        setBuyers([...buyers.filter(x => x.id !== id)])
    }


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
    

