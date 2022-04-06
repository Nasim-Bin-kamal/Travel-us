import React from 'react';
import { Container, Row, Spinner } from 'react-bootstrap';
import Footer from '../../components/Footer/Footer';
import Header from '../../components/Header/Header';
import SingleTourPackage from '../../components/SingleTourPackage/SingleTourPackage';
import useAuth from '../../hooks/useAuth';
import usePackages from '../../hooks/usePackages';

const Packages = () => {
    const [packages] = usePackages([]);
    const { isLoading } = useAuth();

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
        <div>
            <Header />
            <Container>
                <div className='mx-auto my-5'>
                    <h2 className='text-center'>All Tour Packages</h2>
                </div>
                <div className='mx-auto mb-5'>
                    <Row xs={1} md={2} lg={3}>
                        {
                            packages?.map((tourPackage) => (<SingleTourPackage key={tourPackage?._id} tourPackage={tourPackage} />))
                        }
                    </Row>

                </div>
            </Container>
            <Footer />
        </div>
    );
};

export default Packages;