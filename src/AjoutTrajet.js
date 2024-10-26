// src/components/CreateTrajet.js
import React, { useState } from 'react';
import axios from 'axios';

const CreateTrajet = () => {
    const [pointDepart, setPointDepart] = useState('');
    const [pointArrive, setPointArrive] = useState('');
    const [message, setMessage] = useState('');

    const handleSubmit = async (e) => {
        e.preventDefault();

        try {
            const response = await axios.post('https://9c75-41-77-17-1.ngrok-free.app/create_trajet/', {
                pointDepart,
                pointArrive,
            });
            setMessage(`Trajet créé avec succès: ${response.data.idTrajet}`);
            // Réinitialiser le formulaire
            setPointDepart('');
            setPointArrive('');
        } catch (error) {
            if (error.response) {
                setMessage(`Erreur: ${error.response.data}`);
            } else {
                setMessage('Erreur de connexion au serveur.');
            }
        }
    };

    return (
        <div>
            <h2>Créer un nouveau trajet</h2>
            <form onSubmit={handleSubmit}>
                <div>
                    <label>Point de départ:</label>
                    <input
                        type="text"
                        value={pointDepart}
                        onChange={(e) => setPointDepart(e.target.value)}
                        required
                    />
                </div>
                <div>
                    <label>Point d'arrivée:</label>
                    <input
                        type="text"
                        value={pointArrive}
                        onChange={(e) => setPointArrive(e.target.value)}
                        required
                    />
                </div>
                <button type="submit">Créer Trajet</button>
            </form>
            {message && <p>{message}</p>}
        </div>
    );
};

export default CreateTrajet;
