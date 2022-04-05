import React from 'react';
import { Carousel, Button } from 'react-bootstrap';
import './Slider.css';


const sliderItems = [
    {
        image: "https://i.ibb.co/xsJqP07/traveling-thailand-amazing-view-from-thai-traditional-wooden-longtail-boat-travel-sea-7186-3259.jpg",
        caption: "Amazing Tour All Over The World",
        description: "Amazing Tour All Over The World"
    },
    {
        image: "https://i.ibb.co/F7PvKM2/1293441583-nature-forest-morning-in-the-forest-015232.jpg",
        caption: "Travel and Adventures",
        description: "Where would you like to go?"
    },
    {
        image: "https://i.ibb.co/xSpr3jM/newyorkcity336475-1280.jpg",
        caption: "Find Your Next Tours",
        description: "Plan your favourite destination"
    }
];


const Slider = () => {
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
                                <Button className="text-white border border-2 px-4 py-2 slider-btn" variant="outside-light">Read More <i class="fas fa-angle-double-right"></i></Button>
                            </Carousel.Caption>
                        </Carousel.Item>
                    ))
                }
            </Carousel>
        </div>
    );
};

export default Slider;