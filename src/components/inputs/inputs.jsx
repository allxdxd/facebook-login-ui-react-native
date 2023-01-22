import React, { useState } from "react";
import { View, TextInput, Button } from "react-native";
import { Formik } from "formik";
import styles from "./styles";

const initialValues = {
  email: "",
  password: ""
};

function Inputs() {
  const [data, setData] = useState(initialValues);

  return (
    <Formik
      initialValues={initialValues}
      onSubmit={(values) => {
        console.log(values);
        setData(values);
      }}
    >
      {({ handleChange, handleSubmit, values }) => (
        <View>
          <View style={styles.username}>
            <TextInput
              onChangeText={handleChange("email")}
              value={values.email}
              style={{ marginBottom: 10, fontSize: 18, color: "#fff" }}
              placeholder='Teléfono o Correo Electrónico'
              placeholderTextColor='#A7A8AB'
            />
          </View>

          <View style={styles.username2}>
            <TextInput
              onChangeText={handleChange("password")}
              value={values.password}
              secureTextEntry={true}
              style={{ marginBottom: 10, fontSize: 18, color: "#fff" }}
              placeholder='Contraseña'
              placeholderTextColor='#A7A8AB'
            />
          </View>

          <View style={styles.login}>
            <Button onPress={handleSubmit} title={"Iniciar sesión"} />
          </View>
        </View>
      )}
    </Formik>
  );
}

export default Inputs;
