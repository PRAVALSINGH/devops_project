// Header component: Basic top bar
import React from 'react';

function Header() {
  return (
    <header style={{
      backgroundColor: '#333',
      color: '#fff',
      padding: '10px',
      textAlign: 'center',
      fontSize: '1.2rem',
      fontWeight: 'bold'
    }}>
      Simple CI/CD Webpage
    </header>
  );
}

export default Header;