import React from 'react';
import './BusListt.css';

const busData = [
  { id: 1, number: '32', destination: 'TSARAMANDROSO SOANIerana' },
  { id: 2, number: '32', destination: '' },
  { id: 3, number: '32', destination: '' },
  { id: 4, number: '32', destination: '' }
];

function App() {
  return (
    <div className="app-container">
      {/* Titre principal */}
      <div className="header">
        ANJOMA - AMBODIRANO TSENA
      </div>

      {/* Liste des bus */}
      <div className="bus-list">
        {busData.map(bus => (
          <div className="bus-item" key={bus.id}>
            <div className="bus-icon">🚌</div>
            <div className="bus-details">
              <div className="bus-number">{bus.number}</div>
              {bus.destination && <div className="bus-destination">{bus.destination}</div>}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default App;
