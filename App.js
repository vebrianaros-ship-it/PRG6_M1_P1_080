import { StatusBar } from 'expo-status-bar';
import { StyleSheet, View, Text } from 'react-native';

export default function App() {
  return (
    <View style={styles.container}>

      <View style={styles.topArea}>
        <View style={styles.red}>
          <Text style={styles.text}>Red</Text>
        </View>

        <View style={styles.blue}>
          <Text style={styles.text}>Blue</Text>
        </View>

        <View style={styles.green}>
          <Text style={styles.text}>Green</Text>
        </View>

        <View style={styles.orange}>
          <Text style={styles.text}>Orange</Text>
        </View>
      </View>

      <View style={styles.bottomArea} />

      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 40,
  },

  topArea: {
    height: 200,
    backgroundColor: '#f9f9f9',
    flexDirection: 'row',
    alignItems: 'flex-start',
  },

  red: {
    flex: 1,
    height: 20,
    backgroundColor: 'red',
    justifyContent: 'center',
    alignItems: 'center',
  },

  blue: {
    flex: 2,
    height: 60,
    backgroundColor: 'blue',
    justifyContent: 'center',
    alignItems: 'center',
  },

  green: {
    flex: 3,
    height: 100,
    backgroundColor: 'green',
    justifyContent: 'center',
    alignItems: 'center',
  },

  orange: {
    flex: 4,
    height: 160,
    backgroundColor: 'orange',
    justifyContent: 'center',
    alignItems: 'center',
  },

  bottomArea: {
    flex: 1,
    backgroundColor: 'gray',
  },

  text: {
    color: 'white',
    fontSize: 14,
    fontWeight: 'bold',
  },
});