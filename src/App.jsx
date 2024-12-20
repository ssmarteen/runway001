import React, { useState } from 'react';
    import { useGeolocation } from 'geolonia';

    function App() {
      const [location, setLocation] = useState(null);
      const [runwayConditionCode, setRunwayConditionCode] = useState('');
      const [contaminants, setContaminants] = useState('');

      const handleLocationChange = (position) => {
        setLocation(position.coords.latitude + ', ' + position.coords.longitude);
      };

      return (
        <div>
          <h1>Evaluation des Pistes</h1>
          {location ? (
            <p>Localisation : {location}</p>
          ) : (
            <button onClick={() => navigator.geolocation.getCurrentPosition(handleLocationChange)}>
              Géolocaliser
            </button>
          )}
          <br />
          <label htmlFor="runway-condition-code">Code de Condition du Runway (RWYCC) :</label>
          <input type="text" id="runway-condition-code" value={runwayConditionCode} onChange={(e) => setRunwayConditionCode(e.target.value)} /><br />
          <label htmlFor="contaminants">Contaminants (type, profondeur, couverture) :</label>
          <textarea id="contaminants" value={contaminants} onChange={(e) => setContaminants(e.target.value)} /><br />
          <button onClick={() => console.log('Rapport généré')}>Générer le Rapport</button>
        </div>
      );
    }

    export default App;
