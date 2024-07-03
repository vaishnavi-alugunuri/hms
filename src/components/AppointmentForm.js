import React, { useState } from 'react';
import { scheduleAppointment } from '../services/appointmentService';

const AppointmentForm = () => {
    const [doctorId, setDoctorId] = useState('');
    const [patientId, setPatientId] = useState('');
    const [appointmentDate, setAppointmentDate] = useState('');
    const [status, setStatus] = useState('');
    const [notes, setNotes] = useState('');

    const handleSubmit = async (e) => {
        e.preventDefault();
        const appointmentData = {
            doctorId,
            patientId,
            appointmentDate,
            status,
            notes
        };
        try {
            const response = await scheduleAppointment(appointmentData);
            console.log('Appointment scheduled:', response.data);
        } catch (error) {
            console.error('Error scheduling appointment:', error);
        }
    };

    return (
        <form onSubmit={handleSubmit}>
            <input
                type="text"
                placeholder="Doctor ID"
                value={doctorId}
                onChange={(e) => setDoctorId(e.target.value)}
            />
            <input
                type="text"
                placeholder="Patient ID"
                value={patientId}
                onChange={(e) => setPatientId(e.target.value)}
            />
            <input
                type="datetime-local"
                value={appointmentDate}
                onChange={(e) => setAppointmentDate(e.target.value)}
            />
            <input
                type="text"
                placeholder="Status"
                value={status}
                onChange={(e) => setStatus(e.target.value)}
            />
            <textarea
                placeholder="Notes"
                value={notes}
                onChange={(e) => setNotes(e.target.value)}
            ></textarea>
            <button type="submit">Schedule Appointment</button>
        </form>
    );
};

export default AppointmentForm;
