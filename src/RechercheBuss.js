import React, { useState } from 'react';
import './RechercheBus.css';

const RechercheBus = () => {
  const [startQuery, setStartQuery] = useState(''); // Champs de recherche pour la localisation de départ
  const [endQuery, setEndQuery] = useState(''); // Champs de recherche pour la localisation de destination

  // Fonction de recherche (sans calcul d'itinéraire)
  const handleSearch = () => {
    alert(`Recherche de bus entre ${startQuery} et ${endQuery}`);
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

      {/* Remplacement de la carte par une image statique */}
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
