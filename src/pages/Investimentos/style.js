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
      marginBottom:26,
    },
    buttonText:{
      color:'#fff',
      fontSize:12,
      fontFamily:'gotham-medium',
      textAlign:'left',
      paddingVertical:10,
      paddingLeft:17
    },
    

    // Seção de cards de orrçamento
    cardOrcamentos:{
      width: '90%',
      backgroundColor:'#fff',
      padding: 19,
      marginBottom:23,
      borderRadius:10,
      elevation:3,
    },
    headerCard:{
      flexDirection:'row',
      width: '100%',
      justifyContent:'space-between',
      alignItems:'center'
    },
    textHeader:{
      fontSize:8,
      color: '#BDA8B3',
      borderWidth:1,
      borderRadius:10,
      borderColor:'#BDA8B3',
      padding: 3,
      textAlign:'center',
      fontFamily:'gotham-bold',
      textTransform:'uppercase',
      
    },
    tituloOrcamento:{
      fontSize:10,
      fontFamily:'gotham-bold',
      color: '#691CC7',
      marginBottom:9,
      textTransform:'uppercase',
      
    },
    textValueCard:{
      fontSize:10,
      color:'#6A6A6A',
    },
})