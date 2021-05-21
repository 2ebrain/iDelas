import {StyleSheet} from 'react-native'

export default StyleSheet.create({
  container:{
    flex:1,
    justifyContent:'center',
    alignItems:'center',
  },
  // Segunda seção após Header
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
  },


  // Seção do Saldo de Entradas
  sectionSaldo:{
    width: '100%',
    justifyContent:'center',
    alignItems:'center',
    

  },
  inputRecebimento:{
    width: '90%',
    height: 35,
    justifyContent:'center',
    alignItems:'center',
    backgroundColor:'#fff',
    flexDirection:'row',
    borderRadius:10,
    borderColor:'#CBCBCB',
    borderWidth:1,
  },
  titleRecebimento:{
    fontSize:8,
    fontFamily:'gotham-medium',
    color: '#989898',
    marginLeft:12,
  },

  inputSaldo:{
    flexDirection:'row',
    backgroundColor:'#79F9D7', 
    marginLeft:15, width:'45%', 
    borderBottomEndRadius:10,
    borderTopRightRadius:10,
    borderWidth:1,
    borderColor:'#CBCBCB',
    
  },
  textSaldo:{
    fontFamily:'gotham-medium',
    fontSize:11,
    color: '#000',
    padding: 10,
  },
  //Seção de recedimento mensal
  containerRecebido:{
    backgroundColor:'#fff',
    width:'95%',
    borderRadius:10,
  },
  // Botões flutuantes
  sectionButtons:{
    flexDirection:'row',
    width:'100%',
    justifyContent:'space-around',
    marginTop:16,
    marginBottom:25,
  },
  button:{
    width:170,
    backgroundColor:'#691CC7',
    flexDirection:'row',
    alignItems:'center',
    justifyContent:'space-evenly',
    borderRadius:10,
  },
  iconCirclePlus:{
    width:20,
    height:20,
  },
  buttonText:{
    color:'#fff',
    fontSize:10,
    textAlign:'left',
    paddingVertical:10,
  },

  sectionFilter:{
    width:'100%',
    justifyContent:'center',
    alignItems:'flex-end',
  },
  buttonFilter:{
    backgroundColor:'#fff',
    width:42,
    height:25,
    justifyContent:'center',
    alignItems:'center',
    borderRadius:10,
    marginRight:28,
  },

})