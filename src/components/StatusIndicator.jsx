// StatusIndicator: Tells if the page is running or not
import React, { useState } from 'react';

function StatusIndicator() {
  const [isOn, setIsOn] = useState(true);

  const toggleStatus = () => {
    setIsOn(!isOn);
  };

  return (
    <div style={{
      textAlign: 'center',
      marginTop: '20px'
    }}>
      <h3>Application Status:</h3>
      <button
        onClick={toggleStatus}
        style={{
          padding: '10px 20px',
          backgroundColor: isOn ? '#4CAF50' : '#F44336', // Green or Red
          color: 'white',
          border: 'none',
          borderRadius: '5px',
          cursor: 'pointer',
          fontSize: '1rem',
          transition: 'background-color 0.3s ease'
        }}
      >
        {isOn ? 'Active (Ready)' : 'Inactive (Stopped)'}
      </button>
    </div>
  );
}

export default StatusIndicator;