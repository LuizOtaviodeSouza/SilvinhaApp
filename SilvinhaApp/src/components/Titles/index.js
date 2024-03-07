import { View, Text } from 'react-native'
import React from 'react'
import styles from './styles'

export default function Title() {
  return (
    <View style={styles.boxTitle}>
      <Text style={styles.textTitle}>I.M.C Silvinha App
      </Text>
    </View>
  )
}