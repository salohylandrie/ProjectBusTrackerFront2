import React, { useState } from 'react';
import axios from 'axios';
import { BrowserRouter as Router, Routes, Route, useNavigate } from 'react-router-dom';
import RechercheBus from './RechercheBuss'; // Assurez-vous que le chemin est correct.
import AdminDashboard from './AdminDashboard'; // Assurez-vous que le chemin est correct.
import './Auth.css';

const Auth = () => {
    const [registerUsername, setRegisterUsername] = useState('');
    const [registerPassword, setRegisterPassword] = useState('');
    const [registerEmail, setRegisterEmail] = useState('');
    const [registerRole, setRegisterRole] = useState('user'); // Par défaut, utilisateur normal
    const [registerAdminCode, setRegisterAdminCode] = useState(''); // Champ pour le code admin
    const [registerMessage, setRegisterMessage] = useState('');

    const [loginUsername, setLoginUsername] = useState('');
    const [loginPassword, setLoginPassword] = useState('');
    const [loginMessage, setLoginMessage] = useState('');

    const navigate = useNavigate(); // Utilisation du hook pour la redirection

    // Gestion de l'inscription
    const handleRegister = async (e) => {
        e.preventDefault();
        try {
            const requestData = {
                username: registerUsername,
                password: registerPassword,
                email: registerEmail,
                role: registerRole,
            };

            // Si l'utilisateur choisit de s'inscrire en tant qu'admin, inclure le code admin
            if (registerRole === 'admin') {
                requestData.admin_code = registerAdminCode; // Envoyer le code admin
            }

            const response = await axios.post('https://d6f8-41-77-17-1.ngrok-free.app/register/', requestData);
            setRegisterMessage(response.data.message);
        } catch (error) {
            if (error.response) {
                setRegisterMessage(error.response.data.message);
            } else {
                setRegisterMessage("Erreur lors de l'inscription.");
            }
        }
    };

    // Gestion de la connexion
    const handleLogin = async (e) => {
        e.preventDefault();
        try {
            const response = await axios.post('https://d6f8-41-77-17-1.ngrok-free.app/login/', {
                username: loginUsername,
                password: loginPassword,
            });

            setLoginMessage(response.data.message);

            // Si la connexion réussit, vérifier le rôle et rediriger en fonction
            if (response.data.message === 'Connexion réussie') {
                const userRole = response.data.role; // Récupérer le rôle de l'utilisateur depuis la réponse du backend
                
                // Redirige en fonction du rôle
                if (userRole === 'admin') {
                    navigate('/admin-dashboard'); // Redirige vers AdminDashboard si c'est un admin
                } else {
                    navigate('/recherche-bus'); // Redirige vers RechercheBus pour un utilisateur normal
                }
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

                {/* Sélection du rôle */}
                <select value={registerRole} onChange={(e) => setRegisterRole(e.target.value)}>
                    <option value="user">Utilisateur</option>
                    <option value="admin">Admin</option>
                </select>

                {/* Champ pour le code admin uniquement si l'utilisateur veut être admin */}
                {registerRole === 'admin' && (
                    <input
                        type="text"
                        placeholder="Code Admin"
                        value={registerAdminCode}
                        onChange={(e) => setRegisterAdminCode(e.target.value)}
                        required
                    />
                )}

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
                <Route path="/admin-dashboard" element={<AdminDashboard />} />
            </Routes>
        </Router>
    );
};

export default Auth;
