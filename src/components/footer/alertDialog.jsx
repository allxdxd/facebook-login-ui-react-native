import { Alert } from "react-native";

const createAlert = (title,msg,btn) =>
  Alert.alert(
    title,
    msg,
    [
      {
        text: btn,
        onPress: () => console.log("Cancel Pressed"),
        style: "cancel"
      }
    ]
  );

export default createAlert;
