import React, { useState } from 'react';
import axios from 'axios';
import './Auth.css'; // Importation du fichier CSS pour la mise en page

const Auth = () => {
    // États pour l'inscription
    const [registerUsername, setRegisterUsername] = useState('');
    const [registerPassword, setRegisterPassword] = useState('');
    const [registerEmail, setRegisterEmail] = useState('');
    const [registerMessage, setRegisterMessage] = useState('');

    // États pour la connexion
    const [loginUsername, setLoginUsername] = useState('');
    const [loginPassword, setLoginPassword] = useState('');
    const [loginMessage, setLoginMessage] = useState('');

    // Gestion de l'inscription
    const handleRegister = async (e) => {
        e.preventDefault();
        try {
            const response = await axios.post('https://f412-41-77-17-174.ngrok-free.app/register/', {
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

    // Gestion de la connexion
    const handleLogin = async (e) => {
        e.preventDefault();
        try {
            const response = await axios.post('https://f412-41-77-17-174.ngrok-free.app/login/', {
                username: loginUsername,
                password: loginPassword,
            });
            setLoginMessage(response.data.message);
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
                <button type="submit">S connecter</button>
                {loginMessage && <p className="message">{loginMessage}</p>}
            </form>
        </div>
    );
};

export default Auth;
