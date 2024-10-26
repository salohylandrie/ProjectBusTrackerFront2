import React from 'react';

function GenerateDriver() {
  return (
    <div style={styles.container}>
      <h2>Générer un Conducteur de Bus</h2>
      <p>Ici, vous pouvez ajouter des informations pour générer un nouveau conducteur de bus.</p>
    </div>
  );
}

const styles = {
  container: {
    textAlign: 'center',
    marginTop: '50px',
  },
};

export default GenerateDriver;
