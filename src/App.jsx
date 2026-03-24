// App: Combine and render all components
import React from 'react';
import Header from './components/Header';
import StatusIndicator from './components/StatusIndicator';

function App() {
  return (
    <div className="App" style={{ fontFamily: 'Arial, sans-serif' }}>
      <Header />
      <div className="content" style={{ padding: '20px', textAlign: 'center' }}>
        <h1>Welcome to our CI/CD Project Demo!</h1>
        <p>This is a basic React webpage. We created it to learn how to set up a full GitHub Actions and Docker-based delivery pipeline without buying a server.</p>
        <p>We are deploying the frontend on Netlify and the backend on Render.</p>
        <StatusIndicator />
      </div>
    </div>
  );
}

export default App;