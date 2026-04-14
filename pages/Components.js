import React, {Component} from "react";
import { View, Text, StyleSheet } from "react-native";

// 1. Class Component

export class KartuClass extends Component {
    render(){
        return(
            <View style={styles.cardClass}>
                <Text style={styles.textWhite}>Halo, saya dari class component!</Text>
                <Text style={styles.textSub}>Sintaks saya lebih panjang dan butuh render()</Text>
            </View>
        );
    }
}

// 2. Functional Component

export const KartuFunctional = () => {
     return(
            <View style={styles.cardFunc}>
                <Text style={styles.textWhite}>Halo, saya dari Functional component!</Text>
                <Text style={styles.textSub}>Sintaks saya lebih ringkas dan murni sebuah fungsi biasa()</Text>
            </View>
        );
    };


const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#F5F7Fa",
    padding: 20,
  },
  title: {
    fontSize: 24,
    fontWeight: "bold",
    marginBottom: 30,
  },
  cardClass: {
    borderRadius: 10,
    backgroundColor: "#0056A0",
    padding: 20,
    marginBottom: 20,
    width: "100%",
    alignItems: "center",
  },
  cardFunc:{
    backgroundColor: "#2E7D32",
    borderRadius: 10,
    padding: 20,
    width: "100%",
    alignItems: "center",
  },
  textWhite:{
    color: "white",
    fontSize: 16,
    fontWeight: "bold",
  },
  textSub: {
    color: "#D1E8FF",
    fontSize: 12,
    marginTop: 5,
    textAlign: "center",
  },
});

