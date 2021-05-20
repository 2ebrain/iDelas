import {StyleSheet} from 'react-native'


export default StyleSheet.create({
  container:{
    flex:1,
    justifyContent:'center',
    alignItems:'center',
  },
  // Segunda seção após Header,
  // Contendo as informações de saldo e banco
  content:{
    width:'100%',
    justifyContent:'center',
    alignItems:'center',
    marginTop:30,             
  },
  titulo:{
    width:'100%',
    paddingHorizontal:25,
    marginBottom:10,
  },
  textTitulo:{
    fontSize:15,
    color:'#691CC7',
    fontFamily:'gotham-medium'
  },
    // Botões flutuantes
    button:{
      width:'90%',
      height: 39,
      backgroundColor:'#691CC7',
      flexDirection:'row',
      alignItems:'center',
      borderRadius:10,
      paddingLeft:14,
    },
    buttonText:{
      color:'#fff',
      fontSize:12,
      fontFamily:'gotham-medium',
      textAlign:'left',
      paddingVertical:10,
      paddingLeft:17
    },
    
})