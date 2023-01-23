import React, { useState, useEffect } from 'react'
import { View, Button } from 'react-native'
import { Formik } from 'formik'
import InputsFields from './InputsFields.js'
import styles from './styles'
import saveInfo from './saveInfo/saveInfo.js'

const initialValues = {
  email: '',
  password: ''
}

function Inputs() {
  const [data, setData] = useState(initialValues)

  useEffect(() => {
    saveInfo(data)
  }, [data])

  return (
    <Formik
      initialValues={initialValues}
      onSubmit={(values) => {
        setData(values)
      }}
    >
      {({ handleSubmit }) => (
        <View>
          <InputsFields
            name={'email'}
            styles={styles.username}
            placeh={'Teléfono o Correo Electrónico'}
          />

          <InputsFields
            name={'password'}
            styles={styles.username2}
            placeh={'Contraseña'}
            pass={true}
          />

          <View style={styles.login}>
            <Button onPress={handleSubmit} title={'Iniciar sesión'} />
          </View>
        </View>
      )}
    </Formik>
  )
}

export default Inputs
