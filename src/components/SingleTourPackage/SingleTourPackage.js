import React, { useEffect } from 'react';
import { Card, Col, Button } from 'react-bootstrap';
import { useNavigate } from 'react-router';
import './SingleTourPackage.css';
import AOS from 'aos';

const SingleTourPackage = ({ tourPackage }) => {

    useEffect(() => {
        AOS.init({
            duration: 2000
        });
    }, []);



    const navigate = useNavigate();
    const { _id, packageName, packagePrice, spendDays, image, rating } = tourPackage || {};

    const handleBookingPackage = (id) => {
        navigate(`/packages/booking/${id}`);
    }
    return (
        <div data-aos="fade-up">
            <Col className="mx-2">
                <Card className="mx-auto my-3 p-0 rounded-3 ">
                    <div className="img-body">
                        <Card.Img className="img-fluid w-100 card-img" variant="top" src={image} />
                    </div>
                    <Card.Body>
                        <div className="d-flex justify-content-between  text-secondary">
                            <p><b className="text-dark">${packagePrice}</b>/per person</p>
                            <p><i className="far fa-calendar-alt"></i> {spendDays}</p>
                        </div>
                        <Card.Title className="fs-4 py-2"><i className="fas fa-map-marker-alt text-secondary"></i> <span className="title">{packageName}</span></Card.Title>
                        <div className="d-flex justify-content-between align-items-center">
                            <p><i className="fas fa-star pt-3"></i> <span className="text-secondary">{rating} {rating > 8.0 ? "Superb" : "Good"}</span></p>
                            <Button onClick={() => handleBookingPackage(_id)} className="border-0  btn-book" variant="dark"><i className="far fa-check-circle"></i> Book Now</Button>
                        </div>
                    </Card.Body>
                </Card>
            </Col>
        </div>
    );
};

export default SingleTourPackage;