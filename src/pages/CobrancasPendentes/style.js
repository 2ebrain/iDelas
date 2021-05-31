import {StyleSheet} from 'react-native'


export default StyleSheet.create({
  container:{
    flex: 1,
  },

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


  inadimValor:{
    width: '90%',
    height:35,
    justifyContent:'flex-start',
    alignItems:'center',
    flexDirection:'row',
    backgroundColor:'#fff',
    borderWidth:1,
    borderColor:'#CBCBCB',
    borderRadius:10,
    marginBottom:14,
  },
  boxValorinadim:{
    backgroundColor:'#DE4949', 
    width:48, 
    height:'100%', 
    borderBottomLeftRadius:10,
    borderTopLeftRadius:10,
    justifyContent:'center',
    alignItems:'center',
    borderWidth:1,
    borderColor:'#CBCBCB',
  },
  valorInadim:{
    fontSize:11,
    fontFamily:'gotham-medium',
    color: '#fff',
  },
  saldoValorInadim:{
    marginLeft:13,
    color:'#777777',
    fontFamily:'gotham-medium',
    fontSize:10,
  },


  boxNotification:{
    width: '90%',
    height: 54,
    justifyContent:'center',
    alignItems:'center',
    flexDirection:'row',
    borderWidth:1,
    borderColor:'#EDBBA4',
    borderRadius:10,
    backgroundColor:'#F7EAE4',
    paddingLeft:16,
    marginBottom:18
  },

  textNotification:{
    fontSize:10,
    fontFamily:'gotham-book',
    lineHeight:16,
    marginLeft:18
  },
  textStrong:{
    fontFamily:'gotham-medium'
  },

  buttonSection:{
    width:'90%',
    marginBottom:24,
  },


  // Botões de cobrança manuel/auto 

  sectionAutoManual:{
    width:'90%', 
    justifyContent:'center', 
    alignItems:'flex-end', 
    
  },
  buttonBox:{
    flexDirection:'row', 
    width:180,
    height:28,
    justifyContent:'space-around',
    alignItems:'center'
  },
  sectionClick:{
    flexDirection:'row',
    backgroundColor:'#fff',
    borderRadius:6,
  },

  buttonManual:{
    backgroundColor:'#fff', 
    paddingHorizontal:10, 
    paddingVertical:7,
    borderRadius:6,
  },
  buttonAuto:{
    backgroundColor:'#691CC7', 
    paddingHorizontal:10, 
    paddingVertical:7, 
    borderRadius:6 

  },

  textButton:{
    color: '#898989',
    fontSize:8,
    fontFamily:'gotham-medium'
  },
  textButtonWhite:{
    color: '#fff',
    fontSize:8,
    fontFamily:'gotham-medium'
  },


  cardCobrancas:{
    backgroundColor:'#fff',
    width: '90%',
    borderRadius:10,
    marginTop:25,
    marginBottom:20,
    justifyContent:'center',
    alignItems:'center',

  },
  headerCard:{
    width: '100%',
    height:56,
    paddingHorizontal:16,
    paddingVertical:12,
    flexDirection:'row',

    alignItems:'center',
    justifyContent:'flex-start',
    borderWidth:1,
    borderRadius:10,
    borderColor:'#D9D9D9',
  },

  userAvatar:{
    width: 32, 
    height: 32, 
    backgroundColor: "#691CC7",
    borderRadius:20,
  },
  textName:{
    marginLeft:11,
    fontFamily:'gotham-medium',
    fontSize:11,
    color:'#777777',
  },
  cardValores:{
    marginTop:23,
    marginBottom:23,
    width: 285,
    justifyContent:'center',
     alignItems:'center'
  },
  textValores:{
    fontFamily:'gotham-book',
    fontSize:9,
    color:'#6A6A6A',
    textAlign:'justify',
  },


  sectionButtons:{
    width: '90%',
    flexDirection:'row',
    alignItems:'center',
    justifyContent:'space-around',
    marginBottom:21,

  },
  buttonSocial:{
    width: 85,
    height: 78,
    borderWidth:1,
    borderColor:'#691CC7',
    borderRadius:10,
    alignItems:'center',
    justifyContent:'center',
    
  },
  textButtonSocial:{
    fontFamily:'gotham-medium',
    fontSize:8,
    color:'#691CC7',
    textAlign:'center',
    marginTop:11
  },

  cardSecitionTwo:{
    width: '100%',
    borderTopWidth:1,
    borderColor:'#D3D3D3',
    justifyContent:'center',
    alignItems:'center'
  },



})