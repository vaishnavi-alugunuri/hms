import React, { useState, useEffect } from 'react';
import { getAllPatients } from '../services/patientService';

const Patients = () => {
    const [patients, setPatients] = useState([]);

    useEffect(() => {
        fetchPatients();
    }, []);

    const fetchPatients = async () => {
        try {
            const response = await getAllPatients();
            setPatients(response.data);
        } catch (error) {
            console.error('Error fetching patients:', error);
        }
    };

    return (
        <div>
            <h2>Patients</h2>
            <ul>
                {patients.map(patient => (
                    <li key={patient.id}>
                        <div>Name: {patient.name}</div>
                        <div>Age: {patient.age}</div>
                        <div>Address: {patient.address}</div>
                        <div>Contact: {patient.contact}</div>
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default Patients;
