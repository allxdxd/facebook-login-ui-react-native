import { useField } from 'formik'
import { View, TextInput } from 'react-native'

export default function InputsFields({ styles, name, placeh, pass = false }) {
  const [field, meta, helpers] = useField(name)
  return (
    <View style={styles}>
      <TextInput
        onChangeText={(values) => helpers.setValue(values)}
        value={field.value}
        style={{ marginBottom: 10, fontSize: 18, color: '#fff' }}
        placeholder={placeh}
        placeholderTextColor='#A7A8AB'
        secureTextEntry={pass}
      />
    </View>
  )
}
