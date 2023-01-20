import React from "react";
import { View, Text, StatusBar, Image, StyleSheet } from "react-native";
import header from "./header.jpeg";
import styles from "./styles.js";

function Header() {
  return (
    <View backgroundColor='#053D87'>
      <StatusBar />
      <Image source={header} style={styles.header} />
      <Text style={styles.idiomas}>
        English • Français • <Text style={{ color: "#5397E8" }}>Más...</Text>{" "}
      </Text>
    </View>
  );
}

export default Header;
