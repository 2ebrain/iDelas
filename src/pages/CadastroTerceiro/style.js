import {StyleSheet} from 'react-native'

export default StyleSheet.create({
  content: {
    width: "100%",
    justifyContent: "center",
    alignItems: "center",
    marginTop: 30,
  },
  titulo: {
    width: "100%",
    paddingHorizontal: 25,
    marginBottom: 18,
  },
  textTitulo: {
    fontSize: 15,
    color: "#691CC7",
    fontFamily: "gotham-medium",
  },

  buttonsSection:{
    flexDirection:'row',
    width: '85%',
    justifyContent:'space-between',
    alignItems:'center',
    marginBottom:16
  },
  buttonForm:{
    width: '48%',
    borderRadius:10,
    paddingVertical:10,
    paddingHorizontal:12
  },
  textbuttonForm:{
    color: '#fff',
    fontFamily:'gotham-medium',
    fontSize:11
  },
  bgPurple:{
    backgroundColor:'#691CC7'
  },
  bgOrange:{
    backgroundColor:'#F9A179'
  },


  forms:{
    width: '100%',
    justifyContent:'center',
    alignItems:'center'

  },
  rowForm:{
    width:'90%',
    marginBottom:15
    
  },

  labelForm:{
    fontFamily:'gotham-book',
    fontSize:11,
    lineHeight:16,
    color:'#777777',
    marginBottom:10
  },
  inputForm:{
    backgroundColor:'#fff',
    width: '100%',
    height: 31,
    borderRadius:10
  },
  inputFormMedio:{
    backgroundColor:'#fff',
    width: '100%',
    height: 31,
    borderRadius:10
  },
  inputFormPequeno:{
    backgroundColor:'#fff',
    width: '100%',
    height: 31,
    borderRadius:10
  },


})