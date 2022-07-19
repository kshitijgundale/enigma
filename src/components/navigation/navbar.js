import { Navbar, Container, Nav, NavDropdown } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { logout } from "../../reducers/userReducer";

const NavBar = () => {

    const user = useSelector(state => state.user.user)

    const dispatch = useDispatch()

    const handleLogout = () => {
        dispatch(logout)
    }

    return (
            <>
            {user ? 
                <Navbar bg="light" expand="lg">
                    <Container>
                        <Navbar.Brand href="#home">Enigma</Navbar.Brand>
                        <Navbar.Toggle aria-controls="basic-navbar-nav" />
                        <Navbar.Collapse id="basic-navbar-nav">
                        <Nav className="me-auto">
                            <Nav.Link href="#home">Dashboard</Nav.Link>
                            <NavDropdown title={user.username} id="basic-nav-dropdown">
                            <NavDropdown.Item href="#action/3.1">Profile</NavDropdown.Item>
                            <NavDropdown.Divider />
                            <NavDropdown.Item href="#action/3.4" onClick={handleLogout}>Logout</NavDropdown.Item>
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