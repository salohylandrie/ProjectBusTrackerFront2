import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom'; // Importation de useNavigate
import './RechercheBus.css';

const RechercheBus = () => {
  const [startQuery, setStartQuery] = useState(''); // Champs de recherche pour la localisation de départ
  const [endQuery, setEndQuery] = useState(''); // Champs de recherche pour la localisation de destination
  const navigate = useNavigate(); // Hook pour naviguer vers une autre page

  // Fonction de recherche (sans calcul d'itinéraire)
  const handleSearch = () => {
    // Redirige vers la page de liste des bus avec les paramètres de recherche
    navigate(`/bus-list?start=${startQuery}&end=${endQuery}`);
  };

  return (
    <div className="container">
      <div className="searchContainer">
        <input
          type="text"
          value={startQuery}
          onChange={(e) => setStartQuery(e.target.value)}
          placeholder="Lieu de départ"
          className="searchInput"
        />
        <input
          type="text"
          value={endQuery}
          onChange={(e) => setEndQuery(e.target.value)}
          placeholder="Lieu de destination"
          className="searchInput"
        />
        <button onClick={handleSearch} className="searchButton">
          Rechercher
        </button>
      </div>

      <div className="mapContainer">
        <img
          src={require('./Capture.PNG')}
          alt="Carte de la ville"
          className="mapImage"
        />
      </div>
    </div>
  );
};

export default RechercheBus;
