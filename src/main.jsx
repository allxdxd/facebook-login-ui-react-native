import React from "react";
import { View, StyleSheet } from "react-native";
import { Header, Inputs, Footer } from "./components/indexComponents.js";

function Main() {
  return (
    <View style={styles.container}>
      <Header />
      <Inputs />
      <Footer />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#242527"
  }
});
export default Main;
