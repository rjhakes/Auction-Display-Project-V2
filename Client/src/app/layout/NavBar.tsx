import DropdownMenu from '@restart/ui/esm/DropdownMenu';
import React from 'react';
import { Container, Menu } from 'semantic-ui-react';

export default function NavBar() {
    return (
        <Menu inverted fixed='top'>
            <Container>
                <Menu.Item header>
                    <img src="/assets/4h_Logo.png" alt="logo" style={{marginRight: '10px'}}/>
                    Auction
                </Menu.Item>
                <Menu.Item name='Data Management' />
                <Menu.Item name='Transaction GUI' />
                <Menu.Item name='Live Sale Display' />
                <Menu.Item name='Sale Scroll Display' />
                <Menu.Item name='Addon GUI' />
                <Menu.Item name='Addon Display' />
                {/* <Menu.Item>
                    <Button positive content='Create Auction' />
                </Menu.Item> */}
            </Container>

        </Menu>
    )
}