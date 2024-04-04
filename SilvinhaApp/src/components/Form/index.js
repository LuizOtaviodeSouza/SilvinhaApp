import { View, Text, TextInput, TouchableOpacity, Keyboard } from 'react-native'
import React, { useState } from 'react'
import styles from './styles'
import ResultImc from './ResultImc'

export default function Form() {

 const [ height, setHeight ] = useState ( null );
 const [ weight, setWeight ] = useState ( null );
 const [ imc, setImc ] = useState ( null );
 const [ messageImc, setMessageImc ] = useState ( "Resultado I.M.C" );
 const [ textButton, setTextButton ] = useState (' Preencha os requisitos' );


 function imcCalculator () { return setImc(
  (weight / (height * height)).toFixed(2)
  ); }
     
    function validationImc(){
      if (height != null && weight != null){
        imcCalculator();
        Keyboard.dismiss();
        setHeight(null);
        setWeight(null);
        setMessageImc("Seu I.M.C é:");
        setTextButton("Calcular Novamente?");
        return;
      }
      setImc(null);
      setTextButton("Calcula I.M.C");
    }


  return (
    <View style={styles.formContent}>

      <View style={styles.form}>
      <Text style={styles.formLabel}>Altura</Text>
      <TextInput 
      style ={styles.input}
      onChangeText={setHeight}
      value={height ??  ""}
      keyboardType='numeric'
      placeholder='Ex. 1.70'
      />

      <Text style={styles.formLabel}>Peso</Text>
      <TextInput 
       style ={styles.input}
       onChangeText={setWeight}
       value={weight ??  ""}
       keyboardType='numeric'
       placeholder='Ex. 78'
       />

      <TouchableOpacity 
       style={styles.button}
       onPress={() => validationImc()}>
       <Text style={styles.textButton}>{textButton}</Text>
      </TouchableOpacity>

      </View>
       <ResultImc messageResult={messageImc} 
       resultImc ={imc}/>
      </View>
  )
}