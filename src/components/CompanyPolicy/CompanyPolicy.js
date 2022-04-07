import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import './CompanyPolicy.css';



const CompanyPolicy = () => {
    return (
        <div className="pt-5 policy-section">
            <Container>
                <div className="text-center mx-auto">
                    <h5 className="short-info">Our Policies</h5>
                    <h2 className="text-white fw-bold">Why You Are Travel With Us</h2>
                </div>
                <div className="py-5 px-auto mx-auto">
                    <Row xs={1} md={2} lg={4}>
                        <Col className="mx-auto my-3">
                            <div className="d-flex align-items-center justify-content-center flex-column mx-auto p-3 text-white status rounded-3">
                                <img className="img-fluid w-25 mx-auto" src="https://i.ibb.co/fXPK4B4/Local-Tour-Guide-travel-tourism-guide-journey-tourism-job-occupation-512.png" alt="" />
                                <h6 className="pt-2 fw-bold">2k+ Professional Guide</h6>
                            </div>
                        </Col>
                        <Col className="mx-auto my-3">
                            <div className="d-flex align-items-center justify-content-center flex-column mx-auto p-3 text-white status rounded-3">
                                <img className="img-fluid w-25 mx-auto" src="https://i.ibb.co/tsqd97Y/4371345.png" alt="" />
                                <h6 className="pt-2 fw-bold">100% Trusted Travel Agency</h6>
                            </div>
                        </Col>
                        <Col className="mx-auto my-3">
                            <div className="d-flex align-items-center justify-content-center flex-column mx-auto p-3 text-white status rounded-3">
                                <img className="img-fluid w-25 mx-auto" src="https://i.ibb.co/rmpvJCj/experience-knowledge-expertise-expert-512.png" alt="" />
                                <h6 className="pt-2 fw-bold">8+ Years of Travel Experience</h6>
                            </div>
                        </Col>
                        <Col className="mx-auto my-3">
                            <div className="d-flex  align-items-center justify-content-center flex-column mx-auto p-3 text-white status rounded-3 ">
                                <img className="img-fluid w-25 mx-auto" src="https://i.ibb.co/BLRsrS5/3284331.png" alt="" />
                                <h6 className="pt-2 fw-bold">90% of Happy Traveller</h6>
                            </div>
                        </Col>
                    </Row>
                </div>
            </Container>
        </div>
    );
};

export default CompanyPolicy;