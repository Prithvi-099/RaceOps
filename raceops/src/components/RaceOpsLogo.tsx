import React from 'react';

interface RaceOpsLogoProps {
  width?: number;
  height?: number;
  animated?: boolean;
  showTagline?: boolean;
}

export const RaceOpsLogo: React.FC<RaceOpsLogoProps> = ({ 
  width = 300, 
  height = 140, 
  animated = false,
  showTagline = true 
}) => {
  return (
    <svg 
      width={width} 
      height={height} 
      viewBox="0 0 300 140" 
      xmlns="http://www.w3.org/2000/svg"
      className={animated ? 'raceops-logo-animated' : 'raceops-logo'}
    >
      <defs>
        <linearGradient id="wheelGrad" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" style={{ stopColor: '#8B0000' }} />
          <stop offset="50%" style={{ stopColor: '#B71C1C' }} />
          <stop offset="100%" style={{ stopColor: '#D32F2F' }} />
        </linearGradient>

        <pattern id="checkerPattern" x="0" y="0" width="16" height="16" patternUnits="userSpaceOnUse">
          <rect x="0" y="0" width="8" height="8" fill="#1a1a1a"/>
          <rect x="8" y="8" width="8" height="8" fill="#1a1a1a"/>
          <rect x="8" y="0" width="8" height="8" fill="#f5f5f5"/>
          <rect x="0" y="8" width="8" height="8" fill="#f5f5f5"/>
        </pattern>
      </defs>

      {/* Checkered flag */}
      <g className={animated ? 'flag-wave' : ''}>
        <path 
          d="M 30 35 Q 40 30, 50 35 Q 60 40, 70 35 Q 80 30, 90 35 Q 100 40, 110 35 L 110 50 Q 100 55, 90 50 Q 80 45, 70 50 Q 60 55, 50 50 Q 40 45, 30 50 Z" 
          fill="url(#checkerPattern)"
          stroke="#2a2a2a"
          strokeWidth="1"
        />
      </g>

      {/* Racing wheel */}
      <g className={animated ? 'wheel-spin' : ''} transform="translate(130, 40)">
        <circle cx="0" cy="0" r="30" fill="url(#wheelGrad)" />
        <circle cx="0" cy="0" r="28" fill="none" stroke="#5a1a1a" strokeWidth="2" />
        <circle cx="0" cy="0" r="24" fill="#2a2a2a" />
        
        <g className="spokes" opacity="0.8">
          <line x1="-18" y1="0" x2="18" y2="0" stroke="#888" strokeWidth="3" strokeLinecap="round" />
          <line x1="0" y1="-18" x2="0" y2="18" stroke="#888" strokeWidth="3" strokeLinecap="round" />
          <line x1="-13" y1="-13" x2="13" y2="13" stroke="#888" strokeWidth="3" strokeLinecap="round" />
          <line x1="-13" y1="13" x2="13" y2="-13" stroke="#888" strokeWidth="3" strokeLinecap="round" />
        </g>
        
        <circle cx="0" cy="0" r="8" fill="#B71C1C" />
        <circle cx="0" cy="0" r="4" fill="#1a1a1a" />
      </g>

      {/* Speed lines */}
      <g opacity="0.7">
        <line x1="165" y1="30" x2="180" y2="30" stroke="#B71C1C" strokeWidth="3" strokeLinecap="round" />
        <line x1="168" y1="37" x2="183" y2="37" stroke="#B71C1C" strokeWidth="2.5" strokeLinecap="round" />
        <line x1="165" y1="44" x2="180" y2="44" stroke="#B71C1C" strokeWidth="3" strokeLinecap="round" />
      </g>

      {/* Text with Formula1 Bold */}
      <text 
        x="30" 
        y="95" 
        fontFamily="Formula1, Impact, Arial Black" 
        fontSize="42" 
        fontWeight="700" 
        fill="#2a2a2a"
        letterSpacing="0"
      >
        Race ops
      </text>

      {/* Tagline with Formula1 Regular */}
      {showTagline && (
        <text 
          x="30" 
          y="115" 
          fontFamily="Formula1, Arial" 
          fontSize="14" 
          fontWeight="400" 
          fill="#B71C1C"
          letterSpacing="3"
        >
          F1 MISSION CONTROL
        </text>
      )}

      <style>
        {`
          @keyframes flagWave {
            0%, 100% { transform: translateY(0) scaleY(1); }
            50% { transform: translateY(-2px) scaleY(1.02); }
          }
          
          @keyframes wheelRotate {
            from { transform: rotate(0deg); }
            to { transform: rotate(360deg); }
          }

          .flag-wave {
            animation: flagWave 2s ease-in-out infinite;
            transform-origin: center;
          }

          .wheel-spin {
            animation: wheelRotate 3s linear infinite;
            transform-origin: center;
          }

          .raceops-logo {
            filter: drop-shadow(0 4px 8px rgba(0, 0, 0, 0.1));
          }

          .raceops-logo-animated {
            filter: drop-shadow(0 4px 12px rgba(183, 28, 28, 0.3));
          }
        `}
      </style>
    </svg>
  );
};
