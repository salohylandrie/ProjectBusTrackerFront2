import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import SplashScreen from './SplashScreen'; // Importation du SplashScreen
import Auth from './Auth';
import RechercheBus from './RechercheBuss'; // Assurez-vous que le chemin est correct

const App = () => {
    return (
        <Router>
            <Routes>
                <Route path="/" element={<SplashScreen />} /> {/* SplashScreen avant Auth */}
                <Route path="/auth" element={<Auth />} />
                <Route path="/recherche-bus" element={<RechercheBus />} />
            </Routes>
        </Router>
    );
};

export default App;
