import { View, Text, TouchableOpacity } from "react-native";
import styles from "./styles.js";
import createAlert from "./alertDialog.jsx";

let errorMsg1 = 'Hubo un error a la hora de conectar con el servicio de creación de usuario.'
let errorMsg2 = 'Por el momento no se puede acceder al servicio de recuperación de cuentas, por favor intente más tarde.'
const msgErrforgedPass = () => createAlert('Error de usuario', errorMsg2, 'Aceptar');
const msgErrCreateAccount = () => createAlert('Error de usuario', errorMsg1, 'Aceptar');

function Footer() {
  return (
    <View>

      <View style={{ marginTop: 30, marginBottom: 30 }}>
        <Text style={styles.textforged} onPress={msgErrforgedPass}>
          ¿Olvidaste tu contraseña?
        </Text>
      </View>

      <View style={{ flexDirection: "row", marginHorizontal: 40 }}>
        <View style={styles.separator1} />
        <Text style={styles.separator2}>O</Text>
        <View style={styles.separator1} />
      </View>

      <View style={styles.create}>
        <TouchableOpacity style={styles.createbtn} onPress={msgErrCreateAccount}>
          <Text style={styles.textcreatebtn}>Crear cuenta de Facebook</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}

export default Footer;
