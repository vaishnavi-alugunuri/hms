import axios from 'axios';

const API_URL = 'http://localhost:8080/appointments';

export const scheduleAppointment = (appointmentData) => {
    return axios.post(API_URL, appointmentData);
};

export const getAllAppointments = () => {
    return axios.get(API_URL);
};

export const getAppointmentById = (id) => {
    return axios.get(`${API_URL}/${id}`);
};

export const cancelAppointment = (id) => {
    return axios.put(`${API_URL}/${id}/cancel`);
};
