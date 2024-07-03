import React, { useState, useEffect } from 'react';
import { getAllAppointments, cancelAppointment } from '../services/appointmentService';

const AppointmentList = () => {
    const [appointments, setAppointments] = useState([]);

    useEffect(() => {
        fetchAppointments();
    }, []);

    const fetchAppointments = async () => {
        try {
            const response = await getAllAppointments();
            setAppointments(response.data);
        } catch (error) {
            console.error('Error fetching appointments:', error);
        }
    };

    const handleCancelAppointment = async (id) => {
        try {
            const response = await cancelAppointment(id);
            console.log('Appointment canceled:', response.data);
            // Refresh the list of appointments after cancellation
            fetchAppointments();
        } catch (error) {
            console.error('Error canceling appointment:', error);
        }
    };

    return (
        <div>
            <h2>Appointments</h2>
            <ul>
                {appointments.map(appointment => (
                    <li key={appointment.id}>
                        <div>Doctor ID: {appointment.doctorId}</div>
                        <div>Patient ID: {appointment.patientId}</div>
                        <div>Date: {new Date(appointment.appointmentDate).toLocaleString()}</div>
                        <div>Status: {appointment.status}</div>
                        <div>Notes: {appointment.notes}</div>
                        <button onClick={() => handleCancelAppointment(appointment.id)}>Cancel Appointment</button>
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default AppointmentList;
