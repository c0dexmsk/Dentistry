import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import reportWebVitals from './reportWebVitals';
import ReactDOM from 'react-dom/client';
import MainPage from './pages/MainPage.jsx';
import React from 'react';
import './styles/general/Normalize.css';
import './index.css';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <>
      <Router>
          <Routes>
              <Route path="/" element={<MainPage />} />
              <Route path="*" element={<MainPage />} />
          </Routes>
      </Router>
    </>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
