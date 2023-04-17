import { Navbar, Nav, Container } from 'react-bootstrap';

const Navigation = () => {
    return (
        <>
            <Navbar collapseOnSelect fixed='top' expand='sm' bg='dark' variant='dark'>
                <Container>
                    <Navbar.Toggle aria-controls='responsive-navbar-nav' />
                    <Navbar.Collapse id='responsive-navbar-nav'>
                        <Nav>
                            <Nav.Link href="/">Home</Nav.Link>
                            <Nav.Link href="/DataManagement">Data Management</Nav.Link>
                            <Nav.Link href="/TransactionGUI">Transaction GUI</Nav.Link>
                            <Nav.Link href="/LiveSaleDisplay">Live Sale Display</Nav.Link>
                            <Nav.Link href="/SaleScrollDisplay">Sale Scroll Display</Nav.Link>
                            <Nav.Link href="/AddonGUI">Addon GUI</Nav.Link>
                            <Nav.Link href="/AddonDisplay">Addon Display</Nav.Link>
                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </>
    )
}

export default Navigation;