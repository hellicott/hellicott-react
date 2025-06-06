import React from 'react';
import ReactDOM from 'react-dom/client';
import { Routes, Route, BrowserRouter } from 'react-router-dom';
import './index.css';
import App from './App';
import Christmas from './merryXmasDad/christmas';
import reportWebVitals from './reportWebVitals';
import Countdown from './countdown/countdown';
import CreateCountdown from './countdown/createCountdown';

const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="*" element={<App />} />
        <Route path="/" element={<App />} />
        <Route path="/merryXmasDad" element={<Christmas />} />
        <Route path="/countdown/:timestamp" element={<Countdown />} />
        <Route path="/countdown" element={<CreateCountdown />} />
      </Routes>
    </BrowserRouter>
  </React.StrictMode>,
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
