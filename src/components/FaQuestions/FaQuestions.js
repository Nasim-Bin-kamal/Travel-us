import React, { useEffect } from 'react';
import { Accordion, Col, Container, Row } from 'react-bootstrap';
import AOS from 'aos';

const faqs = [
    {
        id: "0",
        title: "Trip Style",
        desc: "Our three styles of travel – Basix, Original and Comfort – cover a whole gamut of travel experiences. To find out which one has ‘You’ written all over it, visit our trip styles page.",
    },
    {
        id: "1",
        title: "Does Travel US have family trips? ",
        desc: "Travel Us offers a wide range of Family Adventures around the globe. The minimum age (for Family trips) varies depending on destination, and Intrepid has set minimum ages to ensure that the included activities suit each age range. Additionally, you’ll notice that some of the more adventurous destinations have a higher minimum age. Please view our family adventures for more information."
    },
    {
        id: "2",
        title: "How many people will be on my trip? ",
        desc: "Good things come in small packages, which is why we keep our group sizes down. This means we’re small enough to remain flexible as we thread our way through communities without intimidating the locals. On most of our trips you’ll be part of an intimate group of 12-16 people, though our group sizes are on average 10 people. Our Overland trips are in purpose-built vehicles that can carry up to 24 travellers. Group sizes are displayed on each trip’s overview page on our website."
    },
    {
        id: "3",
        title: "Are there age restrictions on your trips?",
        desc: "For the majority of our trips the minimum age is 15. An adult must accompany all children under the age of 18. Our Overland Adventures have a minimum age of 18. Younger children can join us on our Family trips and Short Break Adventures, but check each trip for its minimum age, which is located on the trip’s overview page on the website. Most of our trips don’t have a maximum age limit, but a Self-Assessment Form is required for all passengers 70 years and over."
    },
    {
        id: "4",
        title: "Where do I find my essential trip information?",
        desc: "Make sure you bring these with you. Every trip has a set of Essential Trip Information, accessible on our website, that gives you in-depth information about all aspects of your trip. To access your Essential Trip Information, please visit your trip’s specific facts page on our website. The Essential Trip Information are accessible at the top of this page. "
    },
    {
        id: "5",
        title: "What happens if my trip is cancelled?",
        desc: "We never want to cancel a trip, but sometimes things happen. Find our more information about cancellations, credits and refunds on our Trip Cancellations page."

    }




];

const FaQuestions = () => {
    useEffect(() => {
        AOS.init({
            duration: 2000
        });
    }, []);


    return (
        <div>
            <Container>
                <div>
                    <h2 className='mx-auto py-3 text-center text-secondary fw-bold'>Some FAQs</h2>
                </div>
                <Row xs={1} md={2} lg={2} className='mx-auto my-5 '>
                    <Col className='py-2' data-aos="fade-right">
                        <img className='img-fluid' src="https://i.ibb.co/KspJbhv/19333426.jpg" alt="" />
                    </Col>
                    <Col className='py-2' data-aos="fade-left">
                        <Accordion className='accordion'>
                            {
                                faqs?.map((faq, f_id) => (
                                    <Accordion.Item key={f_id} eventKey={faq?.id} className='border border-2'>
                                        <Accordion.Header>
                                            <h6 className='title fw-bold'>{faq?.title}</h6>
                                        </Accordion.Header>
                                        <Accordion.Body className='text-white bg-secondary'>
                                            {faq?.desc}
                                        </Accordion.Body>
                                    </Accordion.Item>
                                ))
                            }
                        </Accordion>

                    </Col>
                </Row>
            </Container>
        </div>
    );
};

export default FaQuestions;