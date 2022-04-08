import React from 'react';
import { Col, Container, Nav, Row, Tab } from "react-bootstrap";
import { Link, Outlet } from "react-router-dom";
import useAuth from '../../hooks/useAuth';
import styles from './Dashboard.module.css';
import { FaHome, FaComment, FaListUl, FaUserPlus, FaSignOutAlt, FaPlusCircle, FaServicestack } from "react-icons/fa";

const Dashboard = () => {

    const { user, admin, userSignOut } = useAuth();


    return (
        <div>
            <Container fluid className="p-5">
                <Tab.Container id="left-tabs-example" defaultActiveKey="my-order">
                    <Row xs={1} sm={1} md={2} lg={2} xl={2} className="g-3 g-lg-4">
                        <Col xs={12} sm={12} md={3} lg={3} xl={3}>
                            <div className="bg-light rounded-3 pt-2 pb-4 border" style={{ minHeight: '80vh', position: 'sticky', top: '114px' }}>
                                <Nav variant="light" className={`${'flex-column'} ${styles.dashNav}`}>
                                    <>
                                        <div className='mb-3 text-center fw-bold'>
                                            <h2 >Dashboard</h2>
                                            <h5 className='text-success'>Hello, {user?.displayName}</h5>

                                        </div>
                                        <Link to="/home"><span className="me-3"><FaHome /></span>Home</Link>

                                        {
                                            user && <>

                                                <Link to="my-packages"><span className="me-3"><FaListUl /></span>My Packages</Link>

                                                {/* <Link to="add-review"><span className="me-3"><FaComment /></span>Add Review</Link> */}
                                            </>
                                        }

                                        {
                                            user && <>
                                                {/* <Link to="manage-packages"><span className="me-3"><FaServicestack /></span>Manage Packages</Link> */}
                                                <Link to="manage-packages"><span className="me-3"><FaServicestack /></span>Manage Packages</Link>
                                                <Link to="add-package"><span className="me-3"><FaPlusCircle /></span>Add Package</Link>
                                                {/* <Link to="make-admin"><span className="me-3"><FaUserPlus /></span>Make Admin</Link> */}
                                            </>
                                        }

                                        <Link to='/login' onClick={userSignOut}><span className="me-3"><FaSignOutAlt /></span>Logout</Link>
                                    </>
                                </Nav>
                            </div>
                        </Col>

                        <Col xs={12} sm={12} md={9} lg={9} xl={9}>
                            <div className="bg-light rounded-3 px-2 py-4 border">

                                <Outlet />
                            </div>
                        </Col>
                    </Row>
                </Tab.Container>
            </Container>
        </div>
    );
};

export default Dashboard;