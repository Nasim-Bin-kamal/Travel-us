import React from 'react';
import { Container, Nav, Navbar, Button, NavDropdown } from 'react-bootstrap';
import { NavLink } from 'react-router-dom';
import './Header.css';
import { useLocation, useNavigate } from 'react-router';
import { FaSignOutAlt } from "react-icons/fa";
import useAuth from '../../hooks/useAuth';



const Header = () => {
    const { user, userSingOut } = useAuth();
    const location = useLocation();
    const history = useNavigate();


    const handleSignOut = () => {
        userSingOut(location, history);
    }
    return (

        <Navbar collapseOnSelect className="navbarBg" bg="" variant="light" sticky="top" expand="lg">
            <Container>
                <Navbar.Brand className="nav-brand me-5">
                    <NavLink className="text-decoration-none text-white" to="/home">
                        <h1>Travel Us</h1>
                    </NavLink>
                </Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" style={{ backgroundColor: '#dae2e273' }} />
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="me-auto">
                        <NavLink className="mx-2 text-decoration-none text-white " to="/home">Home</NavLink>
                        <NavLink className="mx-2 text-decoration-none text-white " to="/packages">Packages</NavLink>
                        <NavLink className="mx-2 text-decoration-none text-white " to="/about">About</NavLink>
                        <NavLink className="mx-2 text-decoration-none text-white " to="/contact">Contact</NavLink>

                    </Nav>
                    <Nav>


                        <NavDropdown className="mx-2 text-decoration-none" title="Profile">
                            {
                                user?.email ? <>
                                    <small className="mx-2 py-1 d-block text-decoration-none">{user?.displayName}</small>
                                    <NavLink className="mx-2 py-1 d-block text-decoration-none" to="/dashboard">Dashboard</NavLink>
                                    <Button className="mx-2 my-2 rounded-pill border-2" size="sm" variant="outline-danger" onClick={handleSignOut}>
                                        <FaSignOutAlt className='me-1' />
                                        Log Out</Button>
                                </> :
                                    <>
                                        <NavLink className="mx-2 py-1 d-block text-decoration-none" to="/register">Register</NavLink>
                                        <NavLink className="mx-2 py-1 d-block text-decoration-none" to="/login">Login</NavLink>
                                    </>
                            }
                        </NavDropdown>
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>

    );
};

export default Header;