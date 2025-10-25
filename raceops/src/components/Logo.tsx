import React from 'react';

interface LogoProps {
  width?: number;
  height?: number;
  animated?: boolean;
}

export const Logo: React.FC<LogoProps> = ({ width = 240, height = 80, animated = false }) => {
  return (
    <svg 
      width={width} 
      height={height} 
      viewBox="0 0 240 80" 
      xmlns="http://www.w3.org/2000/svg"
      className={animated ? 'logo-animated' : ''}
    >
      <defs>
        {/* Gradient for wheel */}
        <linearGradient id="wheelGradient" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" style={{ stopColor: '#B80000' }} />
          <stop offset="50%" style={{ stopColor: '#E10600' }} />
          <stop offset="100%" style={{ stopColor: '#FF1E1E' }} />
        </linearGradient>

        {/* Checkered pattern */}
        <pattern id="checkered" x="0" y="0" width="8" height="8" patternUnits="userSpaceOnUse">
          <rect x="0" y="0" width="4" height="4" fill="#2a2a2a"/>
          <rect x="4" y="4" width="4" height="4" fill="#2a2a2a"/>
          <rect x="4" y="0" width="4" height="4" fill="#f5f5f5"/>
          <rect x="0" y="4" width="4" height="4" fill="#f5f5f5"/>
        </pattern>
      </defs>

      {/* Checkered flag flowing */}
      <g className={animated ? 'flag-wave' : ''}>
        <path 
          d="M 5 25 Q 15 20, 25 25 Q 35 30, 45 25 Q 55 20, 65 25 L 65 35 Q 55 40, 45 35 Q 35 30, 25 35 Q 15 40, 5 35 Z" 
          fill="url(#checkered)"
          opacity="0.9"
        />
      </g>

      {/* Racing wheel with spinning animation */}
      <g className={animated ? 'wheel-spin' : ''} transform="translate(75, 30)">
        {/* Outer tire */}
        <circle cx="0" cy="0" r="22" fill="url(#wheelGradient)" />
        
        {/* Tire details */}
        <circle cx="0" cy="0" r="20" fill="none" stroke="#1a1a1a" strokeWidth="1.5" />
        <circle cx="0" cy="0" r="16" fill="#2a2a2a" />
        
        {/* Rim spokes */}
        <g className="spokes">
          <line x1="-12" y1="0" x2="12" y2="0" stroke="#888" strokeWidth="2" />
          <line x1="0" y1="-12" x2="0" y2="12" stroke="#888" strokeWidth="2" />
          <line x1="-8" y1="-8" x2="8" y2="8" stroke="#888" strokeWidth="2" />
          <line x1="-8" y1="8" x2="8" y2="-8" stroke="#888" strokeWidth="2" />
        </g>
        
        {/* Center cap */}
        <circle cx="0" cy="0" r="6" fill="#E10600" />
        <circle cx="0" cy="0" r="3" fill="#1a1a1a" />
      </g>

      {/* Speed motion lines */}
      <g opacity="0.6">
        <line x1="100" y1="25" x2="110" y2="25" stroke="#E10600" strokeWidth="2" strokeLinecap="round" />
        <line x1="102" y1="30" x2="112" y2="30" stroke="#E10600" strokeWidth="1.5" strokeLinecap="round" />
        <line x1="100" y1="35" x2="110" y2="35" stroke="#E10600" strokeWidth="2" strokeLinecap="round" />
      </g>

      {/* RACE OPS Text */}
      <text 
        x="120" 
        y="45" 
        fontFamily="Formula1-Bold, Impact, Arial Black" 
        fontSize="32" 
        fontWeight="900" 
        fill="#2a2a2a"
        letterSpacing="-1"
      >
        RACE
      </text>
      
      <text 
        x="185" 
        y="45" 
        fontFamily="Formula1, Impact, Arial Black" 
        fontSize="32" 
        fontWeight="900" 
        fill="#E10600"
        letterSpacing="-1"
      >
        OPS
      </text>

      {/* Tagline */}
      <text 
        x="120" 
        y="58" 
        fontFamily="Formula1, Arial" 
        fontSize="8" 
        fontWeight="700" 
        fill="#666"
        letterSpacing="2"
      >
        REAL-TIME INTELLIGENCE
      </text>

      <style>
        {`
          @keyframes flagWave {
            0%, 100% { transform: translateY(0); }
            50% { transform: translateY(-2px); }
          }
          
          @keyframes wheelRotate {
            from { transform: rotate(0deg); }
            to { transform: rotate(360deg); }
          }

          .flag-wave {
            animation: flagWave 1.5s ease-in-out infinite;
            transform-origin: center;
          }

          .wheel-spin {
            animation: wheelRotate 2s linear infinite;
            transform-origin: center;
          }

          .logo-animated .spokes {
            animation: wheelRotate 2s linear infinite;
            transform-origin: center;
          }
        `}
      </style>
    </svg>
  );
};
