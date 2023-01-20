import { View, TextInput, Button} from "react-native";
import styles from './styles';

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

      <View style={styles.login}>
        <Button title='Iniciar sesión'/>
      </View>
      
    </View>
  );
}

export default Inputs;