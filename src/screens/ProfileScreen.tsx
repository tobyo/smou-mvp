import React from 'react';
import { View, Text, Button, StyleSheet } from 'react-native';

const ProfileScreen: React.FC = () => {
  const handleUnsubscribe = () => {
    // Logic for unsubscribing
    alert('Unsubscribed successfully!');
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Subscription Management</Text>
      <Button title="Unsubscribe" onPress={handleUnsubscribe} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  title: {
    fontSize: 24,
    marginBottom: 20,
  },
});

export default ProfileScreen;