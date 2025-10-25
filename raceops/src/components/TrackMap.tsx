import React, { useEffect, useState, useRef } from 'react';
import { motion } from 'framer-motion';
import { trackDataService } from '../services/trackData.service';
import { getTrackConfig } from '../data/tracks';
import '../styles/TrackMap.css';

interface Driver {
  driver_number: number;
  name_acronym: string;
  team_colour: string;
  x: number;
  y: number;
  speed: number;
}

interface TrackMapProps {
  sessionKey: number;
  circuitName: string;
}

export const TrackMap: React.FC<TrackMapProps> = ({ sessionKey, circuitName }) => {
  const [drivers, setDrivers] = useState<Driver[]>([]);
  const [trackConfig, setTrackConfig] = useState(getTrackConfig(circuitName));
  const pathRef = useRef<SVGPathElement>(null);

  useEffect(() => {
    setTrackConfig(getTrackConfig(circuitName));
  }, [circuitName]);

  useEffect(() => {
    const fetchDriverPositions = async () => {
      try {
        const driversInfo = await trackDataService.getDrivers(sessionKey);
        const latestPositions = await trackDataService.getLatestDriverPositions(sessionKey);
        const latestCarData = await trackDataService.getLatestCarData(sessionKey);

        const speedMap = latestCarData.reduce((acc: any, data: any) => {
          acc[data.driver_number] = data.speed;
          return acc;
        }, {});

        const driverPositions: Driver[] = latestPositions.map((pos: any) => {
          const driverInfo = driversInfo.find((d: any) => d.driver_number === pos.driver_number);
          
          return {
            driver_number: pos.driver_number,
            name_acronym: driverInfo?.name_acronym || `#${pos.driver_number}`,
            team_colour: driverInfo?.team_colour || 'FFFFFF',
            x: pos.x || 0,
            y: pos.y || 0,
            speed: speedMap[pos.driver_number] || 0
          };
        }).filter((d: Driver) => d.x !== 0 && d.y !== 0);

        setDrivers(driverPositions);
      } catch (error) {
        console.error('Error fetching driver positions:', error);
      }
    };

    fetchDriverPositions();
    const interval = setInterval(fetchDriverPositions, 10000); // Update every 10 seconds

    return () => clearInterval(interval);
  }, [sessionKey]);

  const getPositionOnPath = (x: number, y: number): { x: number; y: number } => {
    // Use track center for more accurate positioning
    const { centerX, centerY } = trackConfig;
    
    // Scale the API coordinates (which are in meters) to SVG coordinates
    // Assuming the track is roughly 6000m x 4000m, map to SVG space
    const scale = 0.08; // Adjust this to fit drivers on track
    
    // Calculate position relative to track center
    const relativeX = (x * scale);
    const relativeY = (y * scale);
    
    // Position around the track center
    const finalX = centerX + relativeX - 240; // Offset to center the range
    const finalY = centerY + relativeY - 160;
    
    return { 
      x: Math.max(50, Math.min(650, finalX)), // Keep within bounds
      y: Math.max(50, Math.min(650, finalY))
    };
  };

  return (
    <div className="track-map-container">
      <div className="track-header">
        <h2>{trackConfig.name}</h2>
        <div className="track-info">
          <span className="live-indicator">
            <span className="pulse"></span>
            LIVE
          </span>
          <span className="driver-count">{drivers.length} DRIVERS</span>
        </div>
      </div>

      <svg 
        viewBox={trackConfig.viewBox} 
        className="track-svg"
        xmlns="http://www.w3.org/2000/svg"
      >
        <defs>
          <pattern id="grid" width="50" height="50" patternUnits="userSpaceOnUse">
            <path d="M 50 0 L 0 0 0 50" fill="none" stroke="rgba(0,255,255,0.1)" strokeWidth="0.5"/>
          </pattern>

          <filter id="glow">
            <feGaussianBlur stdDeviation="3" result="coloredBlur"/>
            <feMerge>
              <feMergeNode in="coloredBlur"/>
              <feMergeNode in="SourceGraphic"/>
            </feMerge>
          </filter>

          <linearGradient id="trackGradient" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" style={{stopColor: '#1a1a1a'}} />
            <stop offset="100%" style={{stopColor: '#0a0a0a'}} />
          </linearGradient>
        </defs>

        {/* Background grid */}
        <rect width="700" height="700" fill="url(#grid)" opacity="0.3"/>

        {/* Track outline (outer) */}
        <path
          ref={pathRef}
          d={trackConfig.path}
          fill="none"
          stroke="rgba(255,255,255,0.1)"
          strokeWidth="60"
          className="track-outline"
        />

        {/* Track surface */}
        <path
          d={trackConfig.path}
          fill="none"
          stroke="url(#trackGradient)"
          strokeWidth="45"
          className="track-surface"
        />

        {/* Track center line */}
        <path
          d={trackConfig.path}
          fill="none"
          stroke="rgba(255,255,255,0.3)"
          strokeWidth="2"
          strokeDasharray="10,5"
          className="track-centerline"
        />

        {/* Start/Finish line */}
        <g className="start-finish">
          <rect 
            x={trackConfig.centerX - 60} 
            y={trackConfig.centerY - 105} 
            width="10" 
            height="10" 
            fill="#00ff00" 
            opacity="0.8"
          />
          <text 
            x={trackConfig.centerX - 45} 
            y={trackConfig.centerY - 95} 
            fill="#00ff00" 
            fontSize="10" 
            fontFamily="Formula1"
          >
            START
          </text>
        </g>

        {/* Corner markers for Singapore */}
        {circuitName.toLowerCase().includes('singapore') && (
          <g className="corner-numbers" opacity="0.5">
            <text x="160" y="245" fill="#00ff00" fontSize="8" fontFamily="Formula1">T1</text>
            <text x="200" y="250" fill="#00ff00" fontSize="8" fontFamily="Formula1">T3</text>
            <text x="210" y="290" fill="#00ff00" fontSize="8" fontFamily="Formula1">T5</text>
            <text x="240" y="370" fill="#00ff00" fontSize="8" fontFamily="Formula1">T7</text>
            <text x="280" y="385" fill="#00ff00" fontSize="8" fontFamily="Formula1">T10</text>
            <text x="360" y="378" fill="#00ff00" fontSize="8" fontFamily="Formula1">T14</text>
            <text x="425" y="360" fill="#00ff00" fontSize="8" fontFamily="Formula1">T16</text>
            <text x="468" y="332" fill="#00ff00" fontSize="8" fontFamily="Formula1">T18</text>
            <text x="475" y="275" fill="#00ff00" fontSize="8" fontFamily="Formula1">T21</text>
            <text x="465" y="240" fill="#00ff00" fontSize="8" fontFamily="Formula1">T23</text>
          </g>
        )}

        {/* Driver cars with smooth transitions */}
        {drivers.map((driver) => {
          const pos = getPositionOnPath(driver.x, driver.y);
          
          return (
            <g key={driver.driver_number} className="driver-marker">
              {/* Speed trail */}
              <motion.line
                x1={pos.x - 15}
                y1={pos.y}
                x2={pos.x}
                y2={pos.y}
                stroke={`#${driver.team_colour}`}
                strokeWidth="2"
                opacity="0.4"
                initial={{ pathLength: 0 }}
                animate={{ pathLength: 1 }}
                transition={{ duration: 0.5 }}
              />

              {/* Car marker with glow */}
              <motion.circle
                cx={pos.x}
                cy={pos.y}
                r="8"
                fill={`#${driver.team_colour}`}
                stroke="#ffffff"
                strokeWidth="2"
                filter="url(#glow)"
                initial={{ scale: 0 }}
                animate={{ scale: 1 }}
                transition={{ 
                  type: "spring", 
                  stiffness: 260, 
                  damping: 20 
                }}
                whileHover={{ scale: 1.2 }}
              />

              {/* Driver number */}
              <text
                x={pos.x}
                y={pos.y + 1}
                textAnchor="middle"
                fill="#000"
                fontSize="8"
                fontWeight="700"
                fontFamily="Formula1"
              >
                {driver.driver_number}
              </text>

              {/* Driver info tooltip (shows on hover) */}
              <g className="driver-tooltip" transform={`translate(${pos.x + 15}, ${pos.y - 10})`}>
                <rect 
                  x="0" 
                  y="0" 
                  width="80" 
                  height="30" 
                  fill="rgba(0,0,0,0.9)" 
                  rx="4"
                />
                <text 
                  x="5" 
                  y="12" 
                  fill="#fff" 
                  fontSize="10" 
                  fontFamily="Formula1" 
                  fontWeight="700"
                >
                  {driver.name_acronym}
                </text>
                <text 
                  x="5" 
                  y="24" 
                  fill={`#${driver.team_colour}`} 
                  fontSize="8" 
                  fontFamily="Formula1"
                >
                  {driver.speed} km/h
                </text>
              </g>
            </g>
          );
        })}
      </svg>

      {/* Driver legend */}
      <div className="driver-legend">
        <h4 style={{
          fontFamily: 'Formula1',
          fontSize: '12px',
          fontWeight: 700,
          color: '#00ff00',
          marginBottom: '10px',
          letterSpacing: '2px'
        }}>
          LIVE TIMING
        </h4>
        {drivers.slice(0, 8).map((driver, index) => (
          <div key={driver.driver_number} className="legend-item">
            <span className="legend-position">{index + 1}</span>
            <div 
              className="legend-color" 
              style={{ backgroundColor: `#${driver.team_colour}` }}
            />
            <span className="legend-name">{driver.name_acronym}</span>
            <span className="legend-speed">{driver.speed} km/h</span>
          </div>
        ))}
      </div>
    </div>
  );
};
