import { useNavigate } from 'react-router-dom';
import { RaceOpsLogo } from '../components/RaceOpsLogo';
import '../styles/Landing.css';

export const Landing = () => {
  const navigate = useNavigate();

  return (
    <div className="landing-page">
      {/* Animated Grid Background */}
      <div className="grid-background"></div>

      {/* Hero Section */}
      <div className="hero-section">
        <div className="hero-content">
          {/* Logo */}
          <div className="logo-hero">
            <RaceOpsLogo width={500} height={220} animated={false} showTagline={true} />
          </div>

          {/* Tagline */}
          <h1 className="tagline">
            <span className="line-1">REAL-TIME RACE</span>
            <span className="line-2">INTELLIGENCE</span>
          </h1>

          <p className="subtitle">
            Live telemetry • Track positioning • Team radio • Driver analytics
          </p>

          {/* CTA Buttons */}
          <div className="cta-buttons">
            <button className="btn-primary" onClick={() => navigate('/dashboard')}>
              <span>ENTER DASHBOARD</span>
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                <path d="M5 12h14M12 5l7 7-7 7"/>
              </svg>
            </button>
            <button className="btn-secondary">
              <span>WATCH DEMO</span>
            </button>
          </div>

          {/* Features Grid */}
          <div className="features-grid">
            <div className="feature-card">
              <div className="feature-icon">⚡</div>
              <h3>LIVE TIMING</h3>
              <p>Real-time lap times and sector data</p>
            </div>
            <div className="feature-card">
              <div className="feature-icon">🗺️</div>
              <h3>TRACK MAP</h3>
              <p>Live car positions on circuit</p>
            </div>
            <div className="feature-card">
              <div className="feature-icon">📊</div>
              <h3>TELEMETRY</h3>
              <p>Speed, throttle, brake analysis</p>
            </div>
            <div className="feature-card">
              <div className="feature-icon">📻</div>
              <h3>TEAM RADIO</h3>
              <p>Live pit-to-driver communications</p>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="scroll-indicator">
        <div className="mouse"></div>
        <p>SCROLL TO EXPLORE</p>
      </div>
    </div>
  );
};
