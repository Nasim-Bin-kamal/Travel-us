import React from 'react';
import { Container } from 'react-bootstrap';
import Footer from '../../components/Footer/Footer';
import Header from '../../components/Header/Header';

const Packages = () => {
    return (
        <div>
            <Header />
            <Container>
                <div className='mx-auto mt-5 text-align-center'>
                    <h2 >All Tour Packages</h2>
                </div>
            </Container>
            <Footer />
        </div>
    );
};

export default Packages;