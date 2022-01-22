import React from 'react';
import { NavLink } from 'react-router-dom';
import { Container, Menu } from 'semantic-ui-react';

const NavData = (props) => {
    return (
        <div className="navData">
            <Menu vertical color="green">
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