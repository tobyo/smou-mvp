import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

const PaymentOptionsScreen: React.FC = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Payment Options</Text>
      <Text>Pay-as-you-go and other payment methods coming soon!</Text>
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

export default PaymentOptionsScreen;