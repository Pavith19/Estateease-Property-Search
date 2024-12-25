import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import './styles.css';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import PropertyDetails from "./components/PropertyDetails";
import propertiesData from './data/properties.json';


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
        <Router>
          <Routes>
              <Route path="/" element={<App />} />
              <Route path="/property/:id" element={<PropertyDetails properties={propertiesData}/>} />
            </Routes>
        </Router>
);