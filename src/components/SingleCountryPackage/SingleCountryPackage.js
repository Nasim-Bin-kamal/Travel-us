import React from 'react';
import { Card, Col, Button } from 'react-bootstrap';
import { useNavigate } from 'react-router';
import './SingleCountryPackage.css';

const SingleCountryPackage = ({ tourPackage }) => {
    const navigate = useNavigate();
    // const { packageName, packagePrice, spendDays, image, rating } = tourPackage || {};

    const handleBookingPackage = (id) => {
        navigate(`/packages/booking/${id}`);
    }
    return (
        <div>
            <Col className="mx-auto">
                <Card className="mx-auto my-3 p-0 rounded-3">
                    <div className="img-body">
                        <Card.Img className="img-fluid w-100 card-img" variant="top" src="	https://i.ibb.co/WgVnvHd/p-2-02c7fd31.png" />
                    </div>
                    <Card.Body>
                        <div className="d-flex justify-content-between fs-5 text-secondary">
                            <p><b className="text-dark">$120</b>/per person</p>
                            <p><i className="far fa-calendar-alt"></i> 5 Days/6 Night</p>
                        </div>
                        <Card.Title className="fs-4 py-2"><i className="fas fa-map-marker-alt text-secondary"></i> <span className="title">Cox Bazar</span></Card.Title>
                        <div className="d-flex justify-content-between align-items-center">
                            <p><i className="fas fa-star pt-3"></i> <span className="text-secondary">8.5 Superb</span></p>
                            <Button onClick={() => handleBookingPackage(tourPackage?._id)} className="border-0  btn-book" variant="light"><i className="far fa-check-circle"></i> Book Now</Button>
                        </div>
                    </Card.Body>
                </Card>
            </Col>
        </div>
    );
};

export default SingleCountryPackage;