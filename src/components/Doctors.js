import React, { useState, useEffect } from 'react';
import { getAllDoctors } from '../services/doctorService';

const Doctors = () => {
    const [doctors, setDoctors] = useState([]);

    useEffect(() => {
        fetchDoctors();
    }, []);

    const fetchDoctors = async () => {
        try {
            const response = await getAllDoctors();
            setDoctors(response.data);
        } catch (error) {
            console.error('Error fetching doctors:', error);
        }
    };

    return (
        <div>
            <h2>Doctors</h2>
            <ul>
                {doctors.map(doctor => (
                    <li key={doctor.id}>
                        <div>Name: {doctor.name}</div>
                        <div>Specialty: {doctor.specialty}</div>
                        <div>Contact: {doctor.contact}</div>
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default Doctors;
