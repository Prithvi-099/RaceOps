import axios from 'axios';

const BASE_URL = 'https://api.openf1.org/v1';

// Base mock positions
const BASE_POSITIONS = [
  { driver_number: 1, x: 2800, y: 1500 },
  { driver_number: 11, x: 2900, y: 1600 },
  { driver_number: 16, x: 2700, y: 1400 },
  { driver_number: 55, x: 3000, y: 1700 },
  { driver_number: 44, x: 2600, y: 1300 },
  { driver_number: 63, x: 3100, y: 1800 },
  { driver_number: 4, x: 2500, y: 1200 },
  { driver_number: 81, x: 3200, y: 1900 },
];

const MOCK_DRIVERS = [
  { driver_number: 1, name_acronym: 'VER', team_name: 'Red Bull Racing', team_colour: '3671C6' },
  { driver_number: 11, name_acronym: 'PER', team_name: 'Red Bull Racing', team_colour: '3671C6' },
  { driver_number: 16, name_acronym: 'LEC', team_name: 'Ferrari', team_colour: 'E8002D' },
  { driver_number: 55, name_acronym: 'SAI', team_name: 'Ferrari', team_colour: 'E8002D' },
  { driver_number: 44, name_acronym: 'HAM', team_name: 'Mercedes', team_colour: '27F4D2' },
  { driver_number: 63, name_acronym: 'RUS', team_name: 'Mercedes', team_colour: '27F4D2' },
  { driver_number: 4, name_acronym: 'NOR', team_name: 'McLaren', team_colour: 'FF8000' },
  { driver_number: 81, name_acronym: 'PIA', team_name: 'McLaren', team_colour: 'FF8000' },
];

const MOCK_CAR_DATA = [
  { driver_number: 1, speed: 312 },
  { driver_number: 11, speed: 308 },
  { driver_number: 16, speed: 315 },
  { driver_number: 55, speed: 305 },
  { driver_number: 44, speed: 318 },
  { driver_number: 63, speed: 310 },
  { driver_number: 4, speed: 320 },
  { driver_number: 81, speed: 316 },
];

// Track position state for animation
let animationOffset = 0;

export const trackDataService = {
  getLatestSession: async () => {
    try {
      const response = await axios.get(`${BASE_URL}/sessions`, {
        params: { session_key: 'latest' },
        timeout: 5000
      });
      return response.data[0];
    } catch (error) {
      console.error('Error fetching latest session:', error);
      return null;
    }
  },

  getSession: async (sessionKey: number) => {
    try {
      const response = await axios.get(`${BASE_URL}/sessions`, {
        params: { session_key: sessionKey },
        timeout: 5000
      });
      return response.data[0];
    } catch (error) {
      console.error('Error fetching session:', error);
      
      // Return appropriate mock data based on session
      const sessionMockData: Record<number, any> = {
        9159: { session_key: 9159, circuit_short_name: 'Bahrain', location: 'Sakhir', session_name: 'Race' },
        9162: { session_key: 9162, circuit_short_name: 'Jeddah', location: 'Jeddah', session_name: 'Race' },
        9165: { session_key: 9165, circuit_short_name: 'Melbourne', location: 'Melbourne', session_name: 'Race' },
        9474: { session_key: 9474, circuit_short_name: 'Singapore', location: 'Marina Bay', session_name: 'Practice 1' },
      };
      
      return sessionMockData[sessionKey] || {
        session_key: sessionKey,
        circuit_short_name: 'Unknown',
        location: 'Unknown',
        session_name: 'Race'
      };
    }
  },

  getDrivers: async (_sessionKey: number) => {
    console.log('📊 Loading driver data (mock mode)...');
    await new Promise(resolve => setTimeout(resolve, 100));
    return MOCK_DRIVERS;
  },

  getLatestDriverPositions: async (_sessionKey: number) => {
    console.log('🗺️ Loading position data (mock mode with animation)...');
    
    await new Promise(resolve => setTimeout(resolve, 200));
    
    // Increment animation offset
    animationOffset += 50;
    
    // Animate positions in a circular pattern
    return BASE_POSITIONS.map((pos, index) => {
      const angle = (animationOffset + index * 45) * (Math.PI / 180);
      const radius = 200 + (index * 20);
      
      return {
        driver_number: pos.driver_number,
        x: pos.x + Math.cos(angle) * radius,
        y: pos.y + Math.sin(angle) * radius
      };
    });
  },

  getLatestCarData: async (_sessionKey: number) => {
    console.log('🏎️ Loading car data (mock mode)...');
    
    await new Promise(resolve => setTimeout(resolve, 200));
    
    // Vary speeds slightly for realism
    return MOCK_CAR_DATA.map(data => ({
      ...data,
      speed: data.speed + Math.floor(Math.random() * 10) - 5 // ±5 km/h variation
    }));
  }
};
