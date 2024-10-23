import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Auth from './Auth';
import RechercheBus from './RechercheBuss'; // Assurez-vous que le chemin est correct

const App = () => {
    return (
        <Router>
            <Routes>
                <Route path="/" element={<Auth />} />
                <Route path="/recherche-bus" element={<RechercheBus />} />
            </Routes>
        </Router>
    );
};

export default App;
