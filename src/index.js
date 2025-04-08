import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import ServicesPattern from './pages/ServicesPattern.jsx';
import reportWebVitals from './reportWebVitals';
import "bootstrap/dist/js/bootstrap.bundle.min";
import "bootstrap/dist/css/bootstrap.min.css";
import MainPage from './pages/MainPage.jsx';
import AboutUs from './pages/AboutUs.jsx';
import Doctors from './pages/Doctors.jsx';
import ReactDOM from 'react-dom/client';
import './styles/general/Normalize.css';
import Kids from './pages/Kids.jsx';
import Services from './pages/ServicesPage.jsx';
import React from 'react';
import './index.css';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <>
      <Router>
          <Routes>
              <Route path="/" element={<MainPage />} />
              <Route path="/main" element={<MainPage />} />
              <Route path="/about" element={<AboutUs />} />
              <Route path="/kids" element={<Kids />} />
              <Route path="/doctors" element={<Doctors />} />
              <Route path="/services" element={<Services />} />
              <Route path="/services/:id" element={<ServicesPattern />} />
              <Route path="*" element={<MainPage />} />
          </Routes>
      </Router>
    </>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
