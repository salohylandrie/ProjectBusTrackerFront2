import React, { useState } from 'react';
import axios from 'axios';
import { BrowserRouter as Router, Routes, Route, useNavigate } from 'react-router-dom';
import RechercheBus from './RechercheBuss'; // Assurez-vous que le chemin est correct.
import './Auth.css';

const Auth = () => {
    const [registerUsername, setRegisterUsername] = useState('');
    const [registerPassword, setRegisterPassword] = useState('');
    const [registerEmail, setRegisterEmail] = useState('');
    const [registerMessage, setRegisterMessage] = useState('');

    const [loginUsername, setLoginUsername] = useState('');
    const [loginPassword, setLoginPassword] = useState('');
    const [loginMessage, setLoginMessage] = useState('');

    const navigate = useNavigate(); // Utilisation du hook pour la redirection

    const handleRegister = async (e) => {
        e.preventDefault();
        try {
            const response = await axios.post('https://7e49-41-77-17-1.ngrok-free.app/register/', {
                username: registerUsername,
                password: registerPassword,
                email: registerEmail,
            });
            setRegisterMessage(response.data.message);
        } catch (error) {
            if (error.response) {
                setRegisterMessage(error.response.data.message);
            } else {
                setRegisterMessage("Erreur lors de l'inscription.");
            }
        }
    };

    const handleLogin = async (e) => {
        e.preventDefault();
        try {
            const response = await axios.post('https://7e49-41-77-17-1.ngrok-free.app/login/', {
                username: loginUsername,
                password: loginPassword,
            });
            setLoginMessage(response.data.message);

            // Redirection vers la page de recherche de bus après une connexion réussie
            if (response.data.message === 'Connexion réussie') {
                navigate('/recherche-bus'); // Redirige vers la page RechercheBus
            }
        } catch (error) {
            if (error.response) {
                setLoginMessage(error.response.data.message);
            } else {
                setLoginMessage("Erreur lors de la connexion.");
            }
        }
    };

    return (
        <div className="auth-container">
            {/* Formulaire d'inscription */}
            <form className="form" onSubmit={handleRegister}>
                <h2>Inscription</h2>
                <input
                    type="text"
                    placeholder="Nom d'utilisateur"
                    value={registerUsername}
                    onChange={(e) => setRegisterUsername(e.target.value)}
                    required
                />
                <input
                    type="email"
                    placeholder="Email"
                    value={registerEmail}
                    onChange={(e) => setRegisterEmail(e.target.value)}
                    required
                />
                <input
                    type="password"
                    placeholder="Mot de passe"
                    value={registerPassword}
                    onChange={(e) => setRegisterPassword(e.target.value)}
                    required
                />
                <button type="submit">S'inscrire</button>
                {registerMessage && <p className="message">{registerMessage}</p>}
            </form>

            {/* Formulaire de connexion */}
            <form className="form" onSubmit={handleLogin}>
                <h2>Connexion</h2>
                <input
                    type="text"
                    placeholder="Nom d'utilisateur"
                    value={loginUsername}
                    onChange={(e) => setLoginUsername(e.target.value)}
                    required
                />
                <input
                    type="password"
                    placeholder="Mot de passe"
                    value={loginPassword}
                    onChange={(e) => setLoginPassword(e.target.value)}
                    required
                />
                <button type="submit">Se connecter</button>
                {loginMessage && <p className="message">{loginMessage}</p>}
            </form>
        </div>
    );
};

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

export default Auth;
