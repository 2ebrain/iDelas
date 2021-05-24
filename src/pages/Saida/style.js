import {StyleSheet} from 'react-native'

export default StyleSheet.create({
  container:{
    flex:1,
  },
  contentContainer:{
    alignItems:'center',
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

  saidasSection:{
    width:'90%',
    alignItems:'center',
    justifyContent:'space-around',
    flexDirection:'row',
    borderWidth:1,
    borderColor:'#F4C4AF',
    borderRadius:20,
    paddingHorizontal:15,
    paddingVertical:15,
    marginBottom:27,
  },
  saidasItem:{
    height:37, 
    justifyContent:'space-between'
  },

  valorSaida:{
    fontSize:8,
    fontFamily:'gotham-medium',
  },
  titleSaida:{
    color:'#A7A7A7',
    fontFamily:'gotham-medium',
    fontSize:9,
  },
  colorF:{
    color:'#63B0D9',
  },
  colorPink:{
    color:'#D96390',
  },
  colorOrange:{
    color: '#E38B34',
  },
  colorViolet:{
    color: '#7E63D9',
  },


  // Botões de Add flutuantes
  sectionsButton:{
    width: "85%",
    flexDirection: "row",
    justifyContent: "space-between",
    marginBottom:22,
  },

  // Botão de filter
  sectionFilter:{
    width:'100%',
    alignItems:'flex-end',
  },
  buttonFilter:{
    width: 40,
    height: 25,
    justifyContent:'center',
    alignItems:'center',
    backgroundColor:'#fff',
    borderRadius:10,
    marginRight:27,
  },


  // Seção de card de entradas
  cardSaida:{
    backgroundColor:'#fff',
    width:'90%',
    padding: 15,
    marginTop:15,
    borderWidth:1,
    borderRadius:10,
    borderColor:'#C9C9C9',
    alignItems:'center',
  },
  saidasInfo:{
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
  nomeSaida:{
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


  textInfoSaida:{
    fontSize:10,
    fontFamily:'gotham-book',
    color: '#6A6A6A',
  },
  tipoSaidaText:{
    paddingHorizontal: 10,
    height: 16,
    paddingVertical:2,
    fontFamily:'gotham-bold',
    fontSize:9,
    color: '#D1A83A',
    borderWidth:1,
    borderColor:'#8B7743',
    borderRadius:10,
    marginLeft:16,
    
    
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