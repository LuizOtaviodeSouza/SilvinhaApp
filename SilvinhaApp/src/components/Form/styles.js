import { StyleSheet } from "react-native";
const styles = StyleSheet.create({
   formContent:{
    width:'100%',
    bottom:0,
    height:'100%',
    backgroundColor:'white',
    alignItems:'center',
    marginTop:30,
    borderTopRightRadius:30,
    borderTopLeftRadius:30,
   },

   form:{
      width:'100%',
      height:'auto',
      marginTop:30,
      padding:10,
   },

   formLabel:{
      color:'#000',
      fontSize:18,
      paddingLeft:20,
   },

   input:{
      width:'90%',
      fontSize: 18,
      borderRadius:20,
      backgroundColor:'#ef233c',
      height:50,
      margin:10,
      paddingHorizontal:15,
   },
   button:{
      borderRadius:50,
      alignItems:'center',
      justifyContent:'center',
      width:'90%',
      backgroundColor:'#ef223c',
      paddingVertical:14,
      marginLeft:12,
      margin:30,
   },
   textButton:{
      fontSize:22,
      color:'#fff'
   }

})

export default styles;