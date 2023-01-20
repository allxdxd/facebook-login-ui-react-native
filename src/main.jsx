import React from 'react';
import { View, StyleSheet } from 'react-native';
import Header from './components/header/header.jsx';
import Inputs from './components/inputs/inputs.jsx';

function Main() {
  return (
    <View style={styles.container}>
      <Header />
      <Inputs />
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
