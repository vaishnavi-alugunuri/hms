import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './components/Home';
import AppointmentForm from './components/AppointmentForm';
import AppointmentList from './components/AppointmentList';
import DoctorForm from './components/DoctorForm';
import PatientForm from './components/PatientForm';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/appointments" element={<AppointmentList />} />
        <Route path="/add-appointment" element={<AppointmentForm />} />
        <Route path="/doctors" element={<DoctorForm />} />
        <Route path="/patients" element={<PatientForm />} />
        <Route path="/add-doctor" element={<DoctorForm />} />
        <Route path="/add-patient" element={<PatientForm />} />
      </Routes>
    </Router>
  );
}

export default App;
