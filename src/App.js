import React, { useState } from 'react';
import { MapContainer, TileLayer, Marker, Popup, Polyline } from 'react-leaflet';
import L from 'leaflet';
import axios from 'axios';
import 'leaflet/dist/leaflet.css';
import './RechercheBus.css'; // Importez votre fichier CSS

const RechercheBus = () => {
  const busLines = [
    {
      id: 22,
      name: 'Ligne 22 - Ambozontany (cathédrale) – Ampopoka',
      stops: [
        { name: 'Ambozontany (cathédrale)', latitude: -21.45, longitude: 47.09 },
        { name: 'Ampopoka', latitude: -21.47, longitude: 47.11 },
      ],
    },
    // Ajouter d'autres lignes de bus...
  ];

  const [startLocation, setStartLocation] = useState(null);
  const [endLocation, setEndLocation] = useState(null);
  const [route, setRoute] = useState(null);

  const handleSearch = async () => {
    if (startLocation && endLocation) {
      // Logique pour rechercher l'itinéraire entre les deux points
      const response = await axios.get(`http://router.project-osrm.org/route/v1/driving/${startLocation.lng},${startLocation.lat};${endLocation.lng},${endLocation.lat}?geometries=geojson`);
      
      const coordinates = response.data.routes[0].geometry.coordinates.map(coord => [coord[1], coord[0]]);
      setRoute(coordinates);
    }
  };

  const position = [-21.453611, 47.085833]; // Coordonnées initiales

  return (
    <div className="container">
      <div className="searchContainer">
        {/* Vos inputs de recherche pour le départ et l'arrivée */}
      </div>

      {/* MapContainer de React Leaflet */}
      <MapContainer center={position} zoom={13} scrollWheelZoom={false} style={{ height: '500px', width: '100%' }}>
        <TileLayer
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
          attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
        />
        
        {startLocation && (
          <Marker position={[startLocation.lat, startLocation.lng]} icon={L.icon({ iconUrl: 'https://leafletjs.com/examples/custom-icons/leaf-orange.png', iconSize: [25, 41] })}>
            <Popup>Start Location</Popup>
          </Marker>
        )}

        {endLocation && (
          <Marker position={[endLocation.lat, endLocation.lng]} icon={L.icon({ iconUrl: 'https://leafletjs.com/examples/custom-icons/leaf-green.png', iconSize: [25, 41] })}>
            <Popup>End Location</Popup>
          </Marker>
        )}

        {route && (
          <Polyline positions={route} color="blue" />
        )}
      </MapContainer>
    </div>
  );
};

export default RechercheBus;
