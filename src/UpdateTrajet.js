import React, { useState, useEffect } from 'react';

const TrajetList = () => {
    const [trajets, setTrajets] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState('');

    useEffect(() => {
        // Requête GET pour récupérer tous les trajets
        fetch('https://d6f8-41-77-17-1.ngrok-free.app/trajets/')
            .then(response => {
                if (response.ok) {
                    return response.json();
                } else {
                    throw new Error('Échec du chargement des trajets.');
                }
            })
            .then(data => {
                setTrajets(data);
                setLoading(false);
            })
            .catch(error => {
                setError(error.message);
                setLoading(false);
            });
    }, []);

    if (loading) {
        return <p>Chargement des trajets...</p>;
    }

    if (error) {
        return <p>{error}</p>;
    }

    return (
        <div>
            <h2>Liste des Trajets</h2>
            {trajets.length > 0 ? (
                <ul>
                    {trajets.map((trajet) => (
                        <li key={trajet.idTrajet}>
                            Trajet {trajet.idTrajet}: {trajet.pointDepart} - {trajet.pointArrive}
                        </li>
                    ))}
                </ul>
            ) : (
                <p>Aucun trajet trouvé.</p>
            )}
        </div>
    );
};

export default TrajetList;
