export interface BikeStation {
  id: string;
  latitude: number;
  longitude: number;
  availableBikes: number;
}

export interface User {
  id: string;
  name: string;
  subscriptionStatus: string;
}