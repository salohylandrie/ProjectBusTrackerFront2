import React, { useState } from 'react';
import { MapContainer, TileLayer, Marker, Popup, Polyline } from 'react-leaflet';
import L from 'leaflet';
import axios from 'axios';
import 'leaflet/dist/leaflet.css';
import './RechercheBus.css';

const RechercheBus = () => {
  const [startLocation, setStartLocation] = useState(null);
  const [endLocation, setEndLocation] = useState(null);
  const [route, setRoute] = useState(null);
  const [startQuery, setStartQuery] = useState(''); // Champs de recherche pour la localisation de départ
  const [endQuery, setEndQuery] = useState(''); // Champs de recherche pour la localisation de destination

  // Fonction pour convertir une adresse en latitude et longitude
  const geocode = async (query) => {
    const response = await axios.get(`https://nominatim.openstreetmap.org/search?format=json&q=${query}`);
    if (response.data.length > 0) {
      const { lat, lon } = response.data[0];
      return { lat: parseFloat(lat), lng: parseFloat(lon) };
    }
    return null;
  };

  // Fonction pour rechercher l'itinéraire entre les deux localisations
  const [loading, setLoading] = useState(false); // Ajouter un état de chargement

  const handleSearch = async () => {
    try {
      setLoading(true);
      const startLoc = await geocode(startQuery);
      const endLoc = await geocode(endQuery);
  
      if (!startLoc || !endLoc) {
        alert('Impossible de trouver les emplacements, veuillez vérifier les noms de lieux.');
        return;
      }
  
      setStartLocation(startLoc);
      setEndLocation(endLoc);
  
      const response = await axios.get(
        `http://router.project-osrm.org/route/v1/driving/${startLoc.lng},${startLoc.lat};${endLoc.lng},${endLoc.lat}?geometries=geojson`
      );
  
      if (response.data && response.data.routes.length > 0) {
        const coordinates = response.data.routes[0].geometry.coordinates.map(coord => [coord[1], coord[0]]);
        setRoute(coordinates);
      } else {
        alert('Itinéraire non trouvé.');
      }
  
    } catch (error) {
      console.error('Erreur réseau ou API:', error); // Affiche l'erreur complète
      alert('Une erreur est survenue lors de la recherche de l’itinéraire. Vérifiez votre connexion.');
    } finally {
      setLoading(false);
    }
  };
  
  
  
  const position = [-21.453611, 47.085833]; // Coordonnées initiales centrées sur Fianarantsoa

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
        <button onClick={handleSearch} className="searchButton" disabled={loading}>
          {loading ? 'Recherche en cours...' : 'Rechercher'}
        </button>
      </div>
  
      {loading && <p>Recherche d'itinéraire en cours...</p>} {/* Message de chargement */}
      
      <MapContainer center={position} zoom={13} scrollWheelZoom={false} style={{ height: '500px', width: '100%' }}>
        <TileLayer
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
          attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
        />
        {startLocation && (
          <Marker position={[startLocation.lat, startLocation.lng]} icon={L.icon({ iconUrl: 'https://leafletjs.com/examples/custom-icons/leaf-orange.png', iconSize: [25, 41] })}>
            <Popup>Départ: {startQuery}</Popup>
          </Marker>
        )}
        {endLocation && (
          <Marker position={[endLocation.lat, endLocation.lng]} icon={L.icon({ iconUrl: 'https://leafletjs.com/examples/custom-icons/leaf-green.png', iconSize: [25, 41] })}>
            <Popup>Destination: {endQuery}</Popup>
          </Marker>
        )}
        {route && <Polyline positions={route} color="blue" />}
      </MapContainer>
    </div>
  );
  
};

export default RechercheBus;
