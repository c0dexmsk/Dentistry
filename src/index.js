import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import ServicesPattern from './pages/ServicesPattern.jsx';
import CasesProfile from "./components/cases/CasesProfile.jsx";
import DoctorProfile from "./pages/DoctorProfile.jsx"
import reportWebVitals from './reportWebVitals';
import Services from './pages/ServicesPage.jsx';
import "bootstrap/dist/js/bootstrap.bundle.min";
import "bootstrap/dist/css/bootstrap.min.css";
import FullPrice from './pages/FullPrice.jsx';
import MainPage from './pages/MainPage.jsx';
import History from "./pages/History.jsx";
import AboutUs from './pages/AboutUs.jsx';
import Doctors from './pages/Doctors.jsx';
import ReactDOM from 'react-dom/client';
import './styles/general/Normalize.css';
import Cases from './pages/Cases.jsx';
import Price from './pages/Price.jsx';
import Kids from './pages/Kids.jsx';
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
              <Route path="/doctors/:slug" element={<DoctorProfile />} />
              <Route path="/cases" element={<Cases />} />
              <Route path="/cases/:slug" element={<CasesProfile />} />
              <Route path="/history" element={<History />} />
              <Route path="/price" element={<Price />} />
              <Route path="/full-price" element={<FullPrice />} />
              <Route path="*" element={<MainPage />} />
          </Routes>
      </Router>
    </>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
