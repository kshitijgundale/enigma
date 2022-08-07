import { Navbar, Container, Nav, NavDropdown } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { logout } from "../../reducers/userReducer";

const NavBar = () => {

    const user = useSelector(state => state.user)

    const dispatch = useDispatch()

    const handleLogout = () => {
        dispatch(logout)
    }

    return (
            <>
            {
                user.username ? 
                <Navbar bg="light" variant="light" expand="md" className="border">
                    <Container>
                        <Navbar.Brand>Enigma</Navbar.Brand>
                        <Navbar.Toggle aria-controls="basic-navbar-nav" />
                        <Navbar.Collapse id="basic-navbar-nav">
                            <Nav className="me-auto">
                                <Nav.Link>Dashboard</Nav.Link>
                                <NavDropdown title="Create"></NavDropdown>
                                <NavDropdown title={user.username} id="basic-nav-dropdown">
                                    <NavDropdown.Item>Profile</NavDropdown.Item>
                                    <NavDropdown.Divider />
                                    <NavDropdown.Item onClick={handleLogout}>Logout</NavDropdown.Item>
                                </NavDropdown>
                            </Nav>
                        </Navbar.Collapse>
                    </Container>
                </Navbar>
                :
                <></>
            }
            </>
    )
}

export default NavBar