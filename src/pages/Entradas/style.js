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
  //Seção de recedimento mensal
  containerRecebido:{
    backgroundColor:'#fff',
    width:'90%',
    borderRadius:10,
  },
  // Botões flutuantes
  sectionButtons:{
    flexDirection:'row',
    width:'100%',
    justifyContent:'space-around',
    marginTop:16,
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

})