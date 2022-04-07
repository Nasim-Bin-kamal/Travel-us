import React from 'react';
import { Carousel, Button } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';
import './Slider.css';


const sliderItems = [
    {
        image: "https://i.ibb.co/1qjxv4M/asset-11.png",
        caption: "Amazing Tour All Over The World",
        description: "Amazing Tour All Over The World"
    },
    {
        image: "https://i.ibb.co/44q4grk/asset-19.png",
        caption: "Travel and Adventures",
        description: "Where would you like to go?"
    },
    {
        image: "https://i.ibb.co/6RXTW7r/asset-13.jpg",
        caption: "Find Your Next Tours",
        description: "Plan your favourite destination"
    },
    {
        image: "https://i.ibb.co/6YZf5r3/asset-12.jpg",
        caption: "Fixed Your Desired Location",
        description: "Fixed your location with your desired budget"
    }
];


const Slider = () => {
    const navigate = useNavigate();

    return (
        <div>
            <Carousel className="carousel">
                {
                    sliderItems?.map((item, i_id) => (
                        <Carousel.Item key={i_id}>
                            <img
                                className="d-block w-100 slider-img"
                                src={item?.image}
                                alt="First slide"
                            />
                            <Carousel.Caption className="caption">
                                <h1>{item?.caption}</h1>
                                <p className="fs-4">{item?.description}</p>
                                <Button onClick={() => navigate("/packages")} className="text-white border border-2 rounded-pill px-4 py-2 slider-btn" variant="outside-light">Book A Tour <i className="fas fa-angle-double-right"></i></Button>
                            </Carousel.Caption>
                        </Carousel.Item>
                    ))
                }
            </Carousel>
        </div>
    );
};

export default Slider;