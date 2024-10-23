import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import './SplashScreen.css'; // Assurez-vous d'avoir un fichier CSS pour styliser l'écran de lancement

const SplashScreen = () => {
    const navigate = useNavigate();

    useEffect(() => {
        // Attendre 3000 ms avant de rediriger vers la page d'authentification
        const timer = setTimeout(() => {
            navigate('/auth'); // Redirection vers la page d'authentification
        }, 3000);

        // Nettoyer le timeout si le composant est démonté avant les 3000ms
        return () => clearTimeout(timer);
    }, [navigate]);

    return (
        <div className="splash-container">
            <img src={require('./IMG-20241001-WA0000.jpg')} alt="Splash Screen" className="splash-image" />
            <h1>FIARABUS</h1>
        </div>
    );
};

export default SplashScreen;
