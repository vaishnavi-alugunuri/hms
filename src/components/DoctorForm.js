import React, { useState } from 'react';
import { addDoctor } from '../services/doctorService';

const DoctorForm = () => {
    const [name, setName] = useState('');
    const [specialty, setSpecialty] = useState('');
    const [contact, setContact] = useState('');

    const handleSubmit = async (e) => {
        e.preventDefault();
        const doctorData = { name, specialty, contact };
        try {
            const response = await addDoctor(doctorData);
            console.log('Doctor added:', response.data);
        } catch (error) {
            console.error('Error adding doctor:', error);
        }
    };

    return (
        <form onSubmit={handleSubmit}>
            <input
                type="text"
                placeholder="Name"
                value={name}
                onChange={(e) => setName(e.target.value)}
            />
            <input
                type="text"
                placeholder="Specialty"
                value={specialty}
                onChange={(e) => setSpecialty(e.target.value)}
            />
            <input
                type="text"
                placeholder="Contact"
                value={contact}
                onChange={(e) => setContact(e.target.value)}
            />
            <button type="submit">Add Doctor</button>
        </form>
    );
};

export default DoctorForm;
