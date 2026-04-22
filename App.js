import React from "react";
import { View, StyleSheet, SafeAreaView , ScrollView} from "react-native";
import { KartuClass, KartuFunctional } from "./pages/Components";
import Home from "./pages/Home";
import ClassLifeCycle from "./pages/ClassLifeCycle";
import MainApp from "./pages/P5_Percobaan_1/MainApp";
import MapScreen from "./pages/P5_Percobaan_2/MapScreen";
import FlatListScreen from "./pages/P5_Percobaan_2/FlatScreen";
import Kalkulator from "./pages/Kalkulator";
import CounterApp from "./pages/CounterApp";

export default function App() {
  return (
    <View>
      {/* <MapScreen />
      <FlatListScreen /> */}
      {/* <Kalkulator /> */}
      <CounterApp />
    </View>
    // <MainApp />
    // <SafeAreaView>
    //     <ScrollView>
    //         {/* <KartuClass />
    //         <KartuFunctional /> */}
    //         {/* <ClassLifeCycle />
    //         <ClassLifeCycle /> */}
    //         {/* <Home /> */}
    //         <MainApp />
    //     </ScrollView>
    // </SafeAreaView>
  );
}