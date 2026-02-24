import { useEffect, useState } from 'react';
import { Route, Routes } from "react-router";
import "./assets/css/global.css";
import SignUpLogin from "./Pages/SignUpLogin/SignUpLogin";
import ForgotPassword from "./Pages/ForgotPassword/ForgotPassword";
import ResetPassword from "./Pages/ResetPassword/ResetPassword";

const App = () => {
  const [backendStatus, setBackendStatus] = useState('Checking backend connection...');
  const [error, setError] = useState(null);
  const [showStatus, setShowStatus] = useState(true);  // Controls visibility

  useEffect(() => {
    const checkBackend = async () => {
      try {
        const response = await fetch('https://team51ecoswap-backend.onrender.com/api/health');
        
        if (!response.ok) {
          throw new Error(`Backend responded with status ${response.status}`);
        }

        const data = await response.json();
        setBackendStatus(`Backend connected: ${data.status} (${data.message})`);
      } catch (err) {
        setError(err.message);
        setBackendStatus('Failed to connect to backend');
      }

      // Hide the status message after 5 seconds (5000 ms)
      setTimeout(() => {
        setShowStatus(false);
      }, 5000);
    };

    checkBackend();
  }, []);

  return (
    <div>
      {/* Backend status banner - shows for 5 seconds then disappears */}
      {showStatus && (
        <div style={{
          background: error ? '#ffebee' : '#e8f5e9',
          color: error ? '#c62828' : '#2e7d32',
          padding: '10px',
          textAlign: 'center',
          fontSize: '14px',
          borderBottom: '1px solid #ccc',
          position: 'fixed',
          top: 0,
          left: 0,
          right: 0,
          zIndex: 1000,
        }}>
          {backendStatus}
          {error && <div style={{ color: '#c62828' }}>Error: {error}</div>}
        </div>
      )}

      {/* Your existing routes */}
      <Routes>
        <Route path="/" element={<SignUpLogin />} />
        <Route path="/forgotPassword" element={<ForgotPassword />} />
        <Route path="/reset-password/:token" element={<ResetPassword />} />
      </Routes>
    </div>
  );
};

export default App;