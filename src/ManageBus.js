import React, { useState, useEffect } from 'react';
import axios from 'axios';
import './ManageBus.css';
import { FaEdit, FaTrashAlt } from 'react-icons/fa';

function ManageBus() {
  const [buses, setBuses] = useState([]);

  useEffect(() => {
    fetchBuses();
  }, []);

  const fetchBuses = async () => {
    try {
      const response = await axios.get('/api/buses'); // Remplacez avec votre endpoint API réel
      setBuses(response.data);
    } catch (error) {
      console.error('Erreur lors du chargement des bus', error);
    }
  };

  const deleteBus = async (id) => {
    try {
      await axios.delete(`/api/buses/${id}`);
      fetchBuses();
    } catch (error) {
      console.error('Erreur lors de la suppression du bus', error);
    }
  };

  return (
    <div className="manage-bus">
      <h2>Liste des Bus</h2>
      <button className="add-button">Ajouter un Bus</button>
      <table className="bus-table">
        <thead>
          <tr>
            <th>ID</th>
            <th>Nom du Bus</th>
            <th>Numéro de Ligne</th>
            <th>Capacité</th>
            <th>Image</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          {buses.map((bus) => (
            <tr key={bus.id}>
              <td>{bus.id}</td>
              <td>{bus.nom}</td>
              <td>{bus.Numligne}</td>
              <td>{bus.capacité}</td>
              <td><img src={bus.imageUrl} alt="Bus" className="bus-image" /></td>
              <td>
                <button className="edit-button">
                  <FaEdit />
                </button>
                <button className="delete-button" onClick={() => deleteBus(bus.id)}>
                  <FaTrashAlt />
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default ManageBus;
