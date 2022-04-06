import React from 'react';
import { Container, Spinner } from 'react-bootstrap';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from 'react-slick';
import useAuth from '../../hooks/useAuth';
import usePackages from '../../hooks/usePackages';
import SingleTourPackage from '../SingleTourPackage/SingleTourPackage';


const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    initialSlide: 0,
    autoplay: true,
    autoplaySpeed: 2000,
    pauseOnHover: true,
    responsive: [
        {
            breakpoint: 1024,
            settings: {
                slidesToShow: 3,
                slidesToScroll: 1,
                infinite: true,
                dots: true
            }
        },
        {
            breakpoint: 600,
            settings: {
                slidesToShow: 2,
                slidesToScroll: 1,
                initialSlide: 2
            }
        },
        {
            breakpoint: 480,
            settings: {
                slidesToShow: 1,
                slidesToScroll: 1
            }
        }
    ]
};

const ForeignPackages = () => {

    const [packages] = usePackages([]);
    const { isLoading } = useAuth();

    const foreignPackages = packages.filter(tourPackage => tourPackage.category === "Foreign")


    if (isLoading) {
        return (
            <div className="d-flex justify-content-center my-5 loading">
                <Spinner className="" animation="grow" variant="danger" />
                <Spinner className="" animation="grow" variant="warning" />
                <Spinner className="" animation="grow" variant="success" />
            </div>
        )
    }

    return (
        <div className="packages-section py-3">
            <Container>
                <div className="text-center mx-auto">
                    <h5 className="short-info">Choose Your Package</h5>
                    <h2 className="text-secondary fw-bold">Outside Bangladesh</h2>
                </div>
                <div className="mx-3 my-5 ">
                    <Slider {...settings}>

                        {
                            foreignPackages?.map((tourPackage, p_id) => <SingleTourPackage key={tourPackage?._id} tourPackage={tourPackage} />)
                        }


                    </Slider>
                </div>
            </Container>
        </div>
    );
};

export default ForeignPackages;