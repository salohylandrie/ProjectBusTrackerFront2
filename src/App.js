import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import SplashScreen from './SplashScreen'; // Importation du SplashScreen
import Auth from './Auth';
import RechercheBus from './RechercheBuss'; // Assurez-vous que le chemin est correct
import BusList from './BusList'; // Importation du composant de la liste des bus
import AdminDashboard from './AdminDashboard'; // Assurez-vous que le chemin est correct
import CreateBus from './CreateBus';
import EditBus from './EditBus';
import ManageBus from './ManageBus';
import Home from './Home'; 


const App = () => {
    return (
        <Router>
            <Routes>
            <Route path="/" element={<AdminDashboard />}> 
                <Route path="/splash" element={<SplashScreen />} /> {/* SplashScreen avant Auth */}
                <Route path="/auth" element={<Auth />} />
                
                <Route path="/recherche-bus" element={<RechercheBus />} />
                <Route path="/bus-list" element={<BusList />} /> {/* Route vers la liste des bus */}
                <Route path="/create-bus" element={<CreateBus />} />
                <Route path="/edit-bus/:id" element={<EditBus />} />
                <Route path="generer-bus" element={<ManageBus />} />
               
                <Route path="/home" element={<Home />} />
            </Route>
            </Routes>
        </Router>
    );
};

export default App;
