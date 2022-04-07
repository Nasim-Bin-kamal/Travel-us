import React from 'react';
import { Col, Container, Row, Button, InputGroup, FormControl } from 'react-bootstrap';
import { NavLink } from 'react-router-dom';
import './Footer.css';
import { FiSend } from "react-icons/fi";

const Footer = () => {
    return (
        <div className="footer mx-auto">
            <Container>
                <Row xs={1} md={4} lg={4} className="py-5">
                    <Col >
                        <h1 className='text-white'>Travel Us</h1>
                        <p><small>Our main concern is to provide best packages with your budgets.</small></p>
                        <h4 className="text-white">Social Links</h4>
                        <div className="d-flex justify-content-start align-items-center my-3">
                            <i className="social fab fa-facebook-f me-4"></i>
                            <i className="social fab fa-instagram me-4"></i>
                            <i className="social fab fa-twitter me-4"></i>
                            <i className="social fab fa-youtube me-4"></i>
                        </div>
                    </Col>
                    <Col >
                        <h5 className="text-white">Quick Nav</h5>
                        <ul className="quickNav ps-0">
                            <li>
                                <NavLink className="menu-item" to="/home">Home</NavLink>
                            </li>
                            <li>
                                <NavLink className="menu-item" to="/about">About</NavLink>
                            </li>
                            <li>
                                <NavLink className="menu-item" to="/contact">Contact</NavLink>
                            </li>
                            <li>
                                <NavLink className="menu-item" to="/login">Login</NavLink>
                            </li>

                        </ul>
                    </Col>
                    <Col>
                        <h5 className="text-white mb-3">Contact Us</h5>
                        <p>+8801789754636</p>
                        <p>Sat – Fri: 9.00 AM – 8.00 PM</p>

                        <address>
                            <i>Lake Circus, Kolabagan</i><br />
                            <i>Dhanmondi, Dhaka-1215</i>

                        </address>
                        <p>24 hours online service.</p>

                    </Col>
                    <Col >
                        <h5 className="text-white mb-3">Subscribe Us</h5>

                        <InputGroup className="my-4">
                            <FormControl
                                type="email"
                                placeholder="Enter your email"
                                aria-label="Enter your email"
                                aria-describedby="basic-addon2"
                            />
                            <Button className='' variant="outline-warning" id="button-addon2">
                                <FiSend className='fs-5 mx-2' />
                            </Button>
                        </InputGroup>
                        <p>Subscribe To Our Newsletter For Latest Update</p>
                    </Col>

                </Row>

            </Container>
            <div className="p-4 text-center fw-lighter footer-end" >
                <p> &copy; Copyright 2022 | All Rights Reserved By Travel Us LTD.</p>
            </div>
        </div>
    );
};

export default Footer;