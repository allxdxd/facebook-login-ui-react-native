import { View, Text, TouchableOpacity } from "react-native";
import styles from "./styles.js";

function Footer() {
  return (
    <View>

      <View style={{ marginTop: 30, marginBottom: 30 }}>
        <Text style={styles.textforged}>
          ¿Olvidaste tu contraseña?
        </Text>
      </View>

      <View style={{ flexDirection: "row", marginHorizontal: 40 }}>
        <View style={styles.separator1} />
        <Text style={styles.separator2}>O</Text>
        <View style={styles.separator1} />
      </View>

      <View style={styles.create}>
        <TouchableOpacity style={styles.createbtn}>
          <Text style={styles.textcreatebtn}>Crear cuenta de Facebook</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}

export default Footer;
