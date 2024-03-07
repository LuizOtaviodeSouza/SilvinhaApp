import { View, Text, TextInput, TouchableOpacity } from 'react-native'
import React from 'react'
import styles from './styles'
import ResultImc from './ResultImc'

export default function Form() {
  return (
    <View style={styles.formContent}>

      <View style={styles.form}>
      <Text style={styles.formLabel}>Altura</Text>
      <TextInput 
      style ={styles.input}
      keyboardType='numeric'
      placeholder='Ex. 1.70'
      />

      <Text style={styles.formLabel}>Peso</Text>
      <TextInput 
       style ={styles.input}
       keyboardType='numeric'
       placeholder='Ex. 78'
       />

      <TouchableOpacity 
      style={styles.button}
       >
        <Text style={styles.textButton}>Calcular I.M.C</Text>
      </TouchableOpacity>
      </View>
       <ResultImc />
    </View>
  )
}