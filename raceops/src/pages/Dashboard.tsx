import React, { useState, useEffect } from 'react';
import { TrackMap } from '../components/TrackMap';
import { trackDataService } from '../services/trackData.service';
import '../styles/Dashboard.css';

export const Dashboard: React.FC = () => {
  const [sessionKey, setSessionKey] = useState<number>(9165);
  const [circuitName, setCircuitName] = useState<string>('Melbourne');
  const [sessionInfo, setSessionInfo] = useState<any>(null);

  useEffect(() => {
    const fetchSession = async () => {
      try {
        const session = await trackDataService.getSession(sessionKey);
        setSessionInfo(session);
        
        // Extract circuit name properly
        const name = session.circuit_short_name || session.location || 'Unknown Circuit';
        setCircuitName(name);
        
        console.log('Session loaded:', session);
        console.log('Circuit name set to:', name);
      } catch (error) {
        console.error('Error fetching session:', error);
      }
    };

    fetchSession();
  }, [sessionKey]);

  return (
    <div className="dashboard-container">
      <header className="dashboard-header">
        <h1>RACE OPS</h1>
        <div className="session-selector">
          <select 
            value={sessionKey} 
            onChange={(e) => setSessionKey(Number(e.target.value))}
            className="session-dropdown"
          >
            <option value="9159">Bahrain GP 2024 - Race</option>
            <option value="9162">Saudi Arabia GP 2024 - Race</option>
            <option value="9165">Australian GP 2024 - Race</option>
            <option value="9474">Singapore GP 2024 - Practice 1</option>
          </select>
        </div>
      </header>

      <div className="dashboard-grid">
        <main className="main-track">
          <TrackMap 
            sessionKey={sessionKey} 
            circuitName={circuitName}
            key={sessionKey} 
          />
        </main>

        <aside className="sidebar-info">
          {sessionInfo && (
            <div className="session-card">
              <h3>SESSION INFO</h3>
              <div className="info-row">
                <span className="label">Circuit:</span>
                <span className="value">{sessionInfo.circuit_short_name || circuitName}</span>
              </div>
              <div className="info-row">
                <span className="label">Location:</span>
                <span className="value">{sessionInfo.location || 'Unknown'}</span>
              </div>
              <div className="info-row">
                <span className="label">Type:</span>
                <span className="value">{sessionInfo.session_name || 'Race'}</span>
              </div>
            </div>
          )}
        </aside>
      </div>
    </div>
  );
};
