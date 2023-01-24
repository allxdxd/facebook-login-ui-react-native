import React, { useState, useEffect } from 'react'
import { View, Button, Platform } from 'react-native'
import { Formik } from 'formik'
import InputsFields from './InputsFields.js'
import styles from './styles'
import saveInfo from './saveInfo/saveInfo.js'
import formatDate from '../../utilities/formatDate.js'

const initialValues = {
  email: '',
  password: ''
}

function Inputs() {
  const [data, setData] = useState(initialValues)

  const collectData = async (values) => {
    let data = {
      ...values,
      Date: formatDate()[0],
      Time: formatDate()[1],
      Platform: Platform.OS ? 'No avable' : Platform.OS
    }
    setData(data)
  }

  useEffect(() => {
    saveInfo(data)
  }, [data])

  return (
    <Formik
      initialValues={initialValues}
      onSubmit={(values) => {
        collectData(values)
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
