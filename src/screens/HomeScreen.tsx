import React, { useEffect, useState } from 'react';
import { View, Text, StyleSheet, ActivityIndicator } from 'react-native';
import MapView, { Marker } from 'react-native-maps';
import axios from 'axios';

interface BikeStation {
  id: string;
  latitude: number;
  longitude: number;
  availableBikes: number;
}

const HomeScreen: React.FC = () => {
  const [bikeStations, setBikeStations] = useState<BikeStation[]>([]);
  const [loading, setLoading] = useState<boolean>(true);

  useEffect(() => {
    const fetchBikeStations = async () => {
      try {
        const response = await axios.get('https://api.example.com/bike-stations');
        setBikeStations(response.data);
      } catch (error) {
        console.error('Error fetching bike stations:', error);
      } finally {
        setLoading(false);
      }
    };

    fetchBikeStations();
    const interval = setInterval(fetchBikeStations, 5000);
    return () => clearInterval(interval);
  }, []);

  if (loading) {
    return <ActivityIndicator style={styles.loader} size="large" color="#0000ff" />;
  }

  return (
    <View style={styles.container}>
      <MapView style={styles.map}>
        {bikeStations.map(station => (
          <Marker
            key={station.id}
            coordinate={{ latitude: station.latitude, longitude: station.longitude }}
            title={`Bikes available: ${station.availableBikes}`}
          />
        ))}
      </MapView>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  map: {
    ...StyleSheet.absoluteFillObject,
  },
  loader: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});

export default HomeScreen;