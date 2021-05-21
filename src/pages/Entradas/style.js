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


  // Seção de card de entradas
  cardEntrada:{
    backgroundColor:'#fff',
    width:'90%',
    padding: 15,
    marginTop:15,
    borderWidth:1,
    borderRadius:10,
    borderColor:'#C9C9C9',
    alignItems:'center',
  },
  entradasInfo:{
    width: '100%',
    flexDirection:'row',
    marginBottom:17,
  },
  infoCard:{
    marginLeft:10,
  },
  headerCard:{
    width:'80%',
    flexDirection:'row',
    justifyContent:'space-between',
  },
  nomeEntrada:{
    fontFamily:'gotham-bold',
    fontSize:10,
    color:'#691CC7',
    lineHeight:11,
  },
  typeOcorrencia:{
    fontSize:6,
    padding: 4,
    fontFamily:'gotham-bold',
    color:'#6E6E6E',
    backgroundColor:'#D8D8D8',
    borderWidth:1,
    borderColor:'#8B7743',
    borderRadius:10,
    justifyContent:'center',
    alignItems:'center',
  },


  textInfoEntrada:{
    fontSize:10,
    fontFamily:'gotham-book',
    color: '#6A6A6A',
  },
  tipoEntradaText:{
    paddingHorizontal: 10,
    height: 16,
    paddingVertical:2,
    fontFamily:'gotham-bold',
    fontSize:9,
    color: '#D1A83A',
    borderWidth:1,
    borderColor:'#8B7743',
    borderRadius:10,
    
    
  },

  sectionButotns:{
    flexDirection:'row',
    width:'90%',
    justifyContent:'space-between',
    alignItems:'center',
  },
  buttonRealizar:{
    backgroundColor:'#F9A179',
    width: 137,
    height:28,
    borderRadius:4,
    alignItems:'center',
    justifyContent:'center',
  },
  buttonTextRealziar:{
    fontSize:10,
    fontFamily:'gotham-medium',
    color: '#fff',
  },
})