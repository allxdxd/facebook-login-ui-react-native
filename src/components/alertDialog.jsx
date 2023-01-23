import { Alert } from "react-native";

const createAlert = (title,msg,btn) =>
  Alert.alert(
    title,
    msg,
    [
      {
        text: btn,
        onPress: () => console.log(`"${title}" button has been pressed`),
        style: "cancel"
      }
    ]
  );

export default createAlert;
