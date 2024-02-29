import { View, Text } from 'react-native'
import React from 'react'
import styles from './styles'

export default function Title() {
  return (
    <View styles={styles.boxTitle}>
      <Text style={styles.textTitle}>Chocolate</Text>
    </View>
  )
}