import React from 'react';
import { Link } from 'react-router-dom';

const Home = () => {
    return (
        <div>
            <h1>Hospital Management System</h1>
            <ul>
                <li><Link to="/appointments">Appointments</Link></li>
                <li><Link to="/doctors">Doctors</Link></li>
                <li><Link to="/patients">Patients</Link></li>
                <li><Link to="/add-doctor">Add Doctor</Link></li>
                <li><Link to="/add-patient">Add Patient</Link></li>
            </ul>
        </div>
    );
};

export default Home;
