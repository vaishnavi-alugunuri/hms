import axios from 'axios';

const API_URL = 'http://localhost:8080/patients';

export const addPatient = (patientData) => {
    return axios.post(API_URL, patientData);
};

export const getAllPatients = () => {
    return axios.get(API_URL);
};
