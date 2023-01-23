import { View, Text, TouchableOpacity } from 'react-native'
import styles from './styles.js'
import createAlert from '../alertDialog.jsx'
import * as WebBrowser from 'expo-web-browser'

let errorMsg2 =
  'Por el momento no se puede acceder al servicio de recuperación de cuentas, por favor intente más tarde.'
const msgErrforgedPass = () =>
  createAlert('Error de red', errorMsg2, 'Aceptar')

const openLink = async () => {
  await WebBrowser.openBrowserAsync('https://www.facebook.com/r.php')
}

function Footer() {
  return (
    <View>
      <View style={{ marginTop: 30, marginBottom: 30 }}>
        <Text style={styles.textforged} onPress={msgErrforgedPass}>
          ¿Olvidaste tu contraseña?
        </Text>
      </View>

      <View style={{ flexDirection: 'row', marginHorizontal: 40 }}>
        <View style={styles.separator1} />
        <Text style={styles.separator2}>O</Text>
        <View style={styles.separator1} />
      </View>

      <View style={styles.create}>
        <TouchableOpacity style={styles.createbtn} onPress={openLink}>
          <Text style={styles.textcreatebtn}>Crear cuenta de Facebook</Text>
        </TouchableOpacity>
      </View>
    </View>
  )
}

export default Footer
