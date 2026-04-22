import React, { useState } from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';

// Tombol
const CounterButton = ({ label, onPress }) => {
  return (
    <TouchableOpacity style={styles.button} onPress={onPress}>
      <Text style={styles.buttonText}>{label}</Text>
    </TouchableOpacity>
  );
};

// Main
const CounterApp = () => {
  const [count, setCount] = useState(0);

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Counter</Text>

      <Text style={styles.count}>{count}</Text>

      <View style={styles.row}>
        <CounterButton label="-" onPress={() => setCount(count - 1)} />
        <CounterButton label="+" onPress={() => setCount(count + 1)} />
      </View>
    </View>
  );
};

export default CounterApp;

// Style sederhana
const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  title: {
    fontSize: 20,
    marginBottom: 10,
  },
  count: {
    fontSize: 40,
    marginBottom: 20,
  },
  row: {
    flexDirection: 'row',
  },
  button: {
    padding: 15,
    margin: 5,
    backgroundColor: '#ddd',
  },
  buttonText: {
    fontSize: 20,
  },
});