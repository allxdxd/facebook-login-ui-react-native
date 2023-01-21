import { View, Text, TouchableOpacity } from "react-native";
import styles from "./styles.js";

function Footer() {
  return (
    <View style={{ backgroundColor: "#fff" }}>
      <View style={{ flexDirection: "row", marginHorizontal: 40 }}>
        <View style={styles.separator1} />
        <Text style={styles.separator2}>O</Text>
        <View style={styles.separator1} />
      </View>

      <View style={styles.create}>
        <TouchableOpacity
          style={{ backgroundColor: "#31A34C", height: 35, borderRadius: 2 }}
        >
          <Text
            style={{
              color: "#fff",
              textAlign: "center",
              marginTop: 8.5,
              fontSize: 15
            }}
          >
            Crear cuenta de Facebook
          </Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}

export default Footer;
