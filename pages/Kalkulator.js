import React, { Component } from "react";
import { View, Text, StyleSheet, Button, SafeAreaView } from "react-native";

// Komponen Anak : Kalkulator (punya lifecycle)
class KalkulatorLifeCycle extends Component {
  constructor(props) {
    super(props);
    this.state = {
      angka: 0,
      log: "",
    };
    console.log("0.[CONSTRUCTOR] memori disiapkan untuk kalkulator");
  }

  componentDidMount() {
    console.log("1.[MOUNTING] kalkulator muncul");
    this.setState({ log: "Kalkulator siap digunakan" });
  }

  componentDidUpdate(prevProps, prevState) {
    if (prevState.angka !== this.state.angka) {
      const arah = this.state.angka > prevState.angka ? "naik" : "turun";
      console.log(
        `2.[UPDATING] angka ${arah}: ${prevState.angka} -> ${this.state.angka}`
      );

      this.setState({
        log: `Angka ${arah} jadi ${this.state.angka}`,
      });
    }
  }

  componentWillUnmount() {
    console.log("3.[UNMOUNTING] kalkulator dihapus");
  }

  tambah = () => {
    this.setState((prev) => ({ angka: prev.angka + 1 }));
  };

  kurang = () => {
    this.setState((prev) => ({ angka: prev.angka - 1 }));
  };

  render() {
    return (
      <View style={styles.box}>
        <Text style={styles.judul}>Kalkulator Sederhana</Text>

        <Text style={styles.angka}>{this.state.angka}</Text>

        <View style={styles.row}>
          <View style={styles.btn}>
            <Button title="-" onPress={this.kurang} color="#D32F2F" />
          </View>
          <View style={styles.btn}>
            <Button title="+" onPress={this.tambah} color="#1976D2" />
          </View>
        </View>

        <Text style={styles.log}>{this.state.log}</Text>
      </View>
    );
  }
}

// Komponen Utama (Parent)
export default class ClassLifeCycleKalkulator extends Component {
  state = { tampilkanKalkulator: false };

  toggleKalkulator = () => {
    this.setState({
      tampilkanKalkulator: !this.state.tampilkanKalkulator,
    });
  };

  render() {
    return (
      <SafeAreaView style={styles.container}>
        <Text style={styles.title}>Demo Lifecycle Kalkulator</Text>

        <View style={styles.content}>
          {this.state.tampilkanKalkulator ? (
            <KalkulatorLifeCycle />
          ) : (
            <Text style={styles.infoText}>
              Komponen kalkulator belum muncul
            </Text>
          )}
        </View>

        <View style={styles.buttonContainer}>
          <Button
            title={
              this.state.tampilkanKalkulator
                ? "Hancurkan Kalkulator (Unmount)"
                : "Tampilkan Kalkulator (Mount)"
            }
            color={this.state.tampilkanKalkulator ? "#D32F2F" : "#2E7D32"}
            onPress={this.toggleKalkulator}
          />
        </View>
      </SafeAreaView>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#F5F7FA",
    alignItems: "center",
    paddingTop: 50,
  },
  title: {
    fontSize: 20,
    fontWeight: "bold",
    marginBottom: 30,
  },
  content: {
    height: 200,
    justifyContent: "center",
  },
  box: {
    backgroundColor: "#FFF",
    padding: 30,
    borderRadius: 15,
    alignItems: "center",
    elevation: 5,
    shadowColor: "#000",
    shadowOpacity: 0.2,
    shadowRadius: 5,
  },
  judul: {
    fontSize: 18,
    marginBottom: 15,
    color: "#888",
  },
  angka: {
    fontSize: 50,
    fontWeight: "bold",
    marginBottom: 20,
  },
  row: {
    flexDirection: "row",
    gap: 10,
    marginBottom: 15,
  },
  btn: {
    width: 80,
  },
  log: {
    fontSize: 12,
    color: "#666",
    textAlign: "center",
  },
  infoText: {
    fontSize: 16,
    color: "#888",
    fontStyle: "italic",
  },
  buttonContainer: {
    marginTop: 40,
    width: "80%",
  },
});