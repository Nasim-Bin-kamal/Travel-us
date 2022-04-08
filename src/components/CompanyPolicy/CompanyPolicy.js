import React, { useEffect } from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import './CompanyPolicy.css';
import AOS from 'aos';

const policies = [
    {
        image: "https://i.ibb.co/fXPK4B4/Local-Tour-Guide-travel-tourism-guide-journey-tourism-job-occupation-512.png",
        title: "2k+ Professional Guide"
    },
    {
        image: "https://i.ibb.co/tsqd97Y/4371345.png",
        title: "100% Trusted Travel Agency"
    },
    {
        image: "https://i.ibb.co/rmpvJCj/experience-knowledge-expertise-expert-512.png",
        title: "8+ Years of Travel Experience"
    },
    {
        image: "https://i.ibb.co/BLRsrS5/3284331.png",
        title: "90% of Happy Traveller"
    }
];


const CompanyPolicy = () => {
    useEffect(() => {
        AOS.init({
            duration: 2000
        });
    }, []);

    return (
        <div className="pt-5 policy-section">
            <Container>
                <div className="text-center mx-auto">
                    <h5 className="short-info">Our Policies</h5>
                    <h2 className="text-white fw-bold">Why You Are Travel With Us</h2>
                </div>
                <div className="py-5 px-auto mx-auto">
                    <Row xs={1} md={2} lg={4}>
                        {
                            policies?.map((policy, p_id) => (
                                <Col key={p_id} className="mx-auto my-3" data-aos="flip-left">
                                    <div className="d-flex  align-items-center justify-content-center flex-column mx-auto p-3 text-white status rounded-3 ">
                                        <img className="img-fluid w-25 mx-auto" src={policy?.image} alt="" />
                                        <h6 className="pt-2 fw-bold">{policy?.title}</h6>
                                    </div>
                                </Col>
                            ))
                        }
                    </Row>
                </div>
            </Container>
        </div>
    );
};

export default CompanyPolicy;