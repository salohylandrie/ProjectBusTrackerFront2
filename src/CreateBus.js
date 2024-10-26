import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';

function CreateBus() {
  const [numLigne, setNumLigne] = useState('');
  const [capacite, setCapacite] = useState('');
  const navigate = useNavigate();

  const createBus = async (e) => {
    e.preventDefault();
    await axios.post('http://localhost:4000/buses', { numLigne, capacite });
    navigate('/');
  };

  return (
    <div>
      <h2>Créer un Bus</h2>
      <form onSubmit={createBus}>
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
        <button type="submit">Créer</button>
      </form>
    </div>
  );
}

export default CreateBus;
