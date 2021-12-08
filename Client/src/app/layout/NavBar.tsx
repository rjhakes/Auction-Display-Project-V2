import React from 'react';
import { NavLink } from 'react-router-dom';
import { Container, Menu } from 'semantic-ui-react';

export default function NavBar() {
    return (
        <Menu inverted fixed='top'>
            <Container>
                <Menu.Item as={NavLink} to='/' header>
                    <img src="/assets/4h_Logo.png" alt="logo" style={{marginRight: '10px'}}/>
                    Auction
                </Menu.Item>
                <Menu.Item as={NavLink} to='/dataManagement' name='Data Management' />
                <Menu.Item as={NavLink} to='/transactionGUI' name='Transaction GUI' />
                <Menu.Item as={NavLink} to='/liveSaleDisplay' name='Live Sale Display' />
                <Menu.Item as={NavLink} to='/saleScrollDisplay' name='Sale Scroll Display' />
                <Menu.Item as={NavLink} to='/addonGUI' name='Addon GUI' />
                <Menu.Item as={NavLink} to='/addonDisplay' name='Addon Display' />
            </Container>
        </Menu>
    )
}