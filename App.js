import React from "react";
import { View, StyleSheet, SafeAreaView , ScrollView} from "react-native";
import { KartuClass, KartuFunctional } from "./pages/Components";
import Home from "./pages/Home";
import ClassLifeCycle from "./pages/ClassLifeCycle";

export default function App() {
  return (
    <SafeAreaView>
        <ScrollView>
            {/* <KartuClass />
            <KartuFunctional /> */}
            {/* <ClassLifeCycle />
            <ClassLifeCycle /> */}
            <Home />
        </ScrollView>
    </SafeAreaView>
  );
}