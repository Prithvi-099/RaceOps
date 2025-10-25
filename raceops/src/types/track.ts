export interface TrackPoint {
  x: number;
  y: number;
  distance: number;
  sector: number;
}

export interface DriverPosition {
  driver_number: number;
  driver_name: string;
  team_color: string;
  position: number;
  x: number;
  y: number;
  speed: number;
  distance: number;
}

export interface Circuit {
  circuit_key: number;
  circuit_short_name: string;
  meeting_key: number;
  location: string;
  country_name: string;
}
