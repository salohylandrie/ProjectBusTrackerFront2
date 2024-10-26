import React from 'react';

function GenerateBus() {
  return (
    <div style={styles.container}>
      <h2>Générer un Bus</h2>
      <p>Ici, vous pouvez ajouter des informations pour générer un nouveau bus.</p>
    </div>
  );
}

const styles = {
  container: {
    textAlign: 'center',
    marginTop: '50px',
  },
};

export default GenerateBus;
