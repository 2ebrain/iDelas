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
  },
  
  sectionButtons:{
    flexDirection:'row', 
    width:'90%', 
    justifyContent:'space-between', 
    alignItems:'center'
  },
  buttonsFilter:{
    justifyContent:'space-between'
  },
  buttonFilter:{
    width:107, 
    height:18, 
    backgroundColor:'#fff', 
    paddingHorizontal:8, 
    flexDirection:'row', 
    justifyContent:'space-between', 
    alignItems:'center', 
    borderRadius:5, 
    marginBottom:7
  },
  textButonFilter:{
    fontSize:10, 
    fontFamily:'gotham-medium', 
    color:'#691CC7'
  },

  containerPlans:{
    width: '90%',
    marginTop:21,
  },
  
})