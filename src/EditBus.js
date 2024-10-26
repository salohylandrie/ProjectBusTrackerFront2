import React, { useState, useEffect } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import axios from 'axios';

function EditBus() {
  const [numLigne, setNumLigne] = useState('');
  const [capacite, setCapacite] = useState('');
  const { id } = useParams();
  const navigate = useNavigate();

  useEffect(() => {
    const fetchBus = async () => {
      try {
        const response = await axios.get(`http://localhost:4000/buses/${id}`);
        setNumLigne(response.data.numLigne);
        setCapacite(response.data.capacite);
      } catch (error) {
        console.error("Error fetching bus data:", error);
      }
    };

    fetchBus();
  }, [id]); // Adding 'id' as a dependency since it affects the fetch request

  const updateBus = async (e) => {
    e.preventDefault();
    try {
      await axios.put(`http://localhost:4000/buses/${id}`, { numLigne, capacite });
      navigate('/');
    } catch (error) {
      console.error("Error updating bus data:", error);
    }
  };

  return (
    <div>
      <h2>Modifier le Bus</h2>
      <form onSubmit={updateBus}>
        <div>
          <label>Numéro de Ligne :</label>
          <input
            type="text"
            value={numLigne}
            onChange={(e) => setNumLigne(e.target.value)}
          />
        </div>
        <div>
          <label>Capacité :</label>
          <input
            type="text"
            value={capacite}
            onChange={(e) => setCapacite(e.target.value)}
          />
        </div>
        <button type="submit">Modifier</button>
      </form>
    </div>
  );
}

export default EditBus;
