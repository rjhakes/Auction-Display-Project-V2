import React from 'react';
import { NavLink } from 'react-router-dom';
import { Container, Menu } from 'semantic-ui-react';

const NavData = (props) => {
    return (
        <div className="navData">
            <Menu vertical>
                <Container>
                    <Menu.Item as={NavLink} to='/dataManagement/buyers' name="Buyers" />
                    <Menu.Item as={NavLink} to='/dataManagement/exhibitors' name="Exhibitors" />
                    <Menu.Item as={NavLink} to='/dataManagement/transactions' name="Transactions" />
                </Container>
            </Menu>
        </div>
    )
}

export default NavData


// import { Navbar, Nav, Container } from 'react-bootstrap';

// const NavData = () => {
//     return (
//         <>
//             <Navbar className="navData" collapseOnSelect fixed='bottom' expand='sm' bg='dark' variant='dark'>
//                 <Container>
//                     <Navbar.Toggle aria-controls='responsive-navbar-nav' />
//                     <Navbar.Collapse id='responsive-navbar-nav'>
//                         <Nav>
//                             <Nav.Link href="/DataManagment/Buyers">Buyers</Nav.Link>
//                             <Nav.Link href="/DataManagment/Exhibitors">Exhibitors</Nav.Link>
//                             <Nav.Link href="/DataManagment/Transactions">Transactions</Nav.Link>
//                         </Nav>
//                     </Navbar.Collapse>
//                 </Container>
//             </Navbar>
//         </>
//     )
// }

// export default NavData;