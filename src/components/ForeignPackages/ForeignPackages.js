import React from 'react';
import { Container } from 'react-bootstrap';
import SingleCountryPackage from '../SingleCountryPackage/SingleCountryPackage';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from 'react-slick';


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

    // const [reviews, setReviews] = useState([]);
    // const { isLoading } = useAuth();

    // useEffect(() => {
    //     fetch('')
    //         .then(res => res.json())
    //         .then(data => setReviews(data));
    // }, []);
    // if (isLoading) {
    //     return (
    //         <div className="d-flex justify-content-center my-5 loading">
    //             <Spinner className="" animation="grow" variant="danger" />
    //             <Spinner className="" animation="grow" variant="warning" />
    //             <Spinner className="" animation="grow" variant="success" />
    //         </div>
    //     )
    // }

    return (
        <div className="packages-section py-3">
            <Container>
                <div className="text-center mx-auto">
                    <h5 className="short-info">Choose Your Package</h5>
                    <h2 className="text-secondary fw-bold">Outside Bangladesh</h2>
                </div>
                <div className="mx-3 my-5">
                    <Slider {...settings}>
                        {/* <Row xs={1} md={2} lg={3}>
                        {
                            packages?.map((singlePackage, p_id) => <SingleCountryPackage key={p_id} singlePackage={singlePackage} />)
                        }
                    </Row> */}
                        <SingleCountryPackage />
                        <SingleCountryPackage />
                        <SingleCountryPackage />
                        <SingleCountryPackage />
                        <SingleCountryPackage />
                        <SingleCountryPackage />
                    </Slider>
                </div>
            </Container>
        </div>
    );
};

export default ForeignPackages;