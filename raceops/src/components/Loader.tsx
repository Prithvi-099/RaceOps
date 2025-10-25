import { useEffect, useState } from 'react';
import { RaceOpsLogo } from './RaceOpsLogo';
import '../styles/Loader.css';

const F1_LOADING_PHRASES = [
  'PREPPING PIT CREW',
  'WARMING UP TIRES',
  'CALIBRATING TELEMETRY',
  'SETTING UP STRATEGIES',
  'CHECKING FUEL LEVELS',
  'ADJUSTING FRONT WING',
  'CONFIGURING DRS SYSTEM',
  'ANALYZING TRACK CONDITIONS',
  'SYNCING RACE CONTROL',
  'INITIALIZING LIVE TIMING',
  'PREPARING TEAM RADIO',
  'LOADING CIRCUIT DATA',
];

export const Loader = ({ onLoadComplete }: { onLoadComplete: () => void }) => {
  const [progress, setProgress] = useState(0);
  const [currentPhrase, setCurrentPhrase] = useState(0);
  const [isExiting, setIsExiting] = useState(false);

  useEffect(() => {
    const progressTimer = setInterval(() => {
      setProgress((prev) => {
        if (prev >= 100) {
          clearInterval(progressTimer);
          setIsExiting(true);
          setTimeout(onLoadComplete, 800);
          return 100;
        }
        return prev + 1;
      });
    }, 25);

    const phraseTimer = setInterval(() => {
      setCurrentPhrase((prev) => (prev + 1) % F1_LOADING_PHRASES.length);
    }, 800);

    return () => {
      clearInterval(progressTimer);
      clearInterval(phraseTimer);
    };
  }, [onLoadComplete]);

  return (
    <div className={`loader-container ${isExiting ? 'loader-exit' : ''}`}>
      <div className="loader-grid"></div>

      <div className="loader-content">
        {/* Logo with animation */}
        <div className="logo-wrapper">
          <RaceOpsLogo width={400} height={180} animated={true} showTagline={true} />
        </div>

        {/* Loading phrase */}
        <div className="loading-phrase-container">
          <div className="loading-phrase" key={currentPhrase}>
            {F1_LOADING_PHRASES[currentPhrase]}
          </div>
        </div>

        {/* Progress bar */}
        <div className="progress-wrapper">
          <div className="progress-track">
            <div 
              className="progress-fill" 
              style={{ width: `${progress}%` }}
            >
              <div className="progress-glow"></div>
            </div>
          </div>
          
          <div className="progress-info">
            <span className="progress-label">LOADING SYSTEMS</span>
            <span className="progress-percent">{progress}%</span>
          </div>
        </div>

        {/* Racing lines decoration */}
        <div className="racing-lines">
          <div className="line"></div>
          <div className="line"></div>
          <div className="line"></div>
        </div>
      </div>
    </div>
  );
};
