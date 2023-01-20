import React from "react";
import { View, TextInput, StyleSheet } from "react-native";

function Inputs() {
  return (
    <View>
      <View style={styles.username}>
        <TextInput
          style={{ marginBottom: 10, fontSize: 18, color: "#fff" }}
          placeholder='Teléfono o Correo Electrónico'
          placeholderTextColor='#A7A8AB'
        />
      </View>
      <View style={styles.username2}>
        <TextInput
          secureTextEntry={true}
          style={{ marginBottom: 10, fontSize: 18, color: "#fff" }}
          placeholder='Contraseña'
          placeholderTextColor='#A7A8AB'
        />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  username: {
    color: "#A7A8AB",
    padding: 0,
    marginBottom: 0,
    borderBottomWidth: 1,
    borderBottomColor: "#A7A8AB",
    marginTop: 50,
    marginHorizontal: 40
  },
  username2: {
    color: "#A7A8AB",
    padding: 0,
    marginBottom: 15,
    borderBottomWidth: 1,
    borderBottomColor: '#A7A8AB',
    marginTop: 25,
    marginHorizontal: 40,
  },
});

export default Inputs;
