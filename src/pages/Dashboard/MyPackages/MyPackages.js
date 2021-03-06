import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { Container, Table } from 'react-bootstrap';
import useAuth from '../../../hooks/useAuth';
import './MyPackages.css';

const MyPackages = () => {
    const { user } = useAuth();
    const [bookedPackages, setBookedPackages] = useState([]);
    useEffect(() => {
        const url = `http://localhost:5000/bookings?email=${user?.email}`;
        fetch(url)
            .then(res => res.json())
            .then(data => setBookedPackages(data));

    }, [user?.email]);

    const handleCancelBooking = (id) => {
        const url = `http://localhost:5000/bookings/${id}`;
        const proceed = window.confirm('Are you want to delete this package');
        if (proceed) {
            axios.delete(url)
                .then(res => {
                    console.log(res.data);
                    if (res.data.deletedCount > 0) {
                        alert('Deleted Successfully.');
                        const remainingPackages = bookedPackages?.filter(bookedPackage => bookedPackage._id !== id);
                        setBookedPackages(remainingPackages);
                    }
                });
        }
    }

    return (
        <div>
            <Container>
                <h2 className="text-center title">My Ordered Packages</h2>
                <div className="mx-auto my-5">
                    <Table striped bordered hover responsive className="shadow-sm">
                        <thead className="text-center">
                            <tr>

                                <th>Booked Package</th>
                                <th>Package Price</th>
                                <th>Booked Status</th>
                                <th>Cancel Booking</th>
                            </tr>
                        </thead>
                        <tbody className="text-center">
                            {
                                bookedPackages?.map(myPackage => <tr key={myPackage?._id}>

                                    <td>{myPackage?.bookedPackage?.packageName} ({myPackage?.bookedPackage?.spendDays})</td>
                                    <td>${myPackage?.bookedPackage?.packagePrice}</td>
                                    <td>{myPackage?.bookingStatus}</td>
                                    <td className="d-flex align-items-center justify-content-around">
                                        <i onClick={() => handleCancelBooking(myPackage?._id)} className="fas p-1 fa-trash-alt text-danger"></i>
                                    </td>
                                </tr>)
                            }


                        </tbody>
                    </Table>
                </div>
            </Container>
        </div>
    );
};

export default MyPackages;