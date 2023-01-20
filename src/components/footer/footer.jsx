import { View, Text, TouchableOpacity } from "react-native";
import styles from "./styles.js";

function Footer() {
  return (
    <View>
      <View style={{ flexDirection: "row", marginHorizontal: 40 }}>
        <View
          style={{
            backgroundColor: "#A7A8AB",
            height: 1,
            flex: 1,
            alignSelf: "center"
          }}
        />
        <Text
          style={{
            alignSelf: "center",
            paddingHorizontal: 5,
            fontSize: 15,
            color: "#A7A8AB"
          }}
        >
          O
        </Text>
        <View
          style={{
            backgroundColor: "#A7A8AB",
            height: 1,
            flex: 1,
            alignSelf: "center"
          }}
        />
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
