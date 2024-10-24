import React, { useEffect, useState } from 'react';
import axios from 'axios';

const TrajetList = () => {
  const [trajets, setTrajets] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
 // Nouvel état pour le message

  // Fonction pour récupérer les trajets via l'API
  const fetchTrajets = async () => {
    try {
      const response = await axios.get('https://d6f8-41-77-17-1.ngrok-free.app/trajets/');
      console.log(response.data);  // Debug pour vérifier la structure de la réponse
      setTrajets(response.data.data);  // Met à jour avec response.data.data (le tableau des trajets)
      setLoading(false);
    } catch (error) {
      setError('Erreur lors de la récupération des trajets');
      setLoading(false);
    }
  };

  // useEffect pour déclencher la récupération des données au chargement du composant
  useEffect(() => {
    fetchTrajets();
  }, []);

  // Affiche un message de chargement si les trajets sont en cours de récupération
  if (loading) {
    return <p>Chargement des trajets...</p>;
  }

  // Affiche un message d'erreur si la récupération échoue
  if (error) {
    return <p>{error}</p>;
  }

  // Affichage des trajets récupérés
  return (
    <div>
      <h2>Liste des trajets</h2>
     
      {Array.isArray(trajets) && trajets.length > 0 ? (
        <ul>
          {trajets.map((trajet) => (
            <li key={trajet.idTrajet}>
              {trajet.pointDepart} - {trajet.pointArrive}
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
