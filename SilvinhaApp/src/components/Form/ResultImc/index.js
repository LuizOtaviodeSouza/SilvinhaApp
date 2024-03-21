import { View, Text, StyleSheet } from 'react-native'
import React from 'react'

export default function ResultImc(props) {
  return (
    <View style={styles.container}>

      <Text style={styles.text}>
        {props.messageResult}
       </Text>

      <Text style={styles.textImc}>
        {props.ResultImc}
       </Text>

    </View>
  )
}

const styles = StyleSheet.create({

 container:{
   flex: 1,
   width:"100%",
   alignItems:"center",
   justifyContent:"center",
   marginTop:-150,
  },

  text:{
   fontSize:18,
   color:"#000",
   fontWeight:"bold"
  },

  textImc:{
   fontSize:48,
   color:"#000",
   fontWeight:"bold"
  },

})