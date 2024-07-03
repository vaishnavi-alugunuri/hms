import axios from 'axios';

const API_URL = 'http://localhost:8080/doctors';

export const addDoctor = (doctorData) => {
    return axios.post(API_URL, doctorData);
};

export const getAllDoctors = () => {
    return axios.get(API_URL);
};
