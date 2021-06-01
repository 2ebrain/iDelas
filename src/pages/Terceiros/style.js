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
  sectionButtonAdd:{
    width: '90%',
    height: 'auto',
    marginBottom:22
  },

  sectionSearch:{
    flexDirection:'row',
    width: '90%',
    height: 'auto',
    alignItems:'flex-start',
    justifyContent:'flex-start',
    marginBottom:18,
  },
  search:{
    flexDirection:'row', 
    width:'90%', 
    height: '100%',
    paddingLeft:5,
    alignItems:'center', 
    justifyContent:'space-between'
  },
  searchText:{
    fontFamily:'gotham-book',
    fontSize:11,
    color:'#777777',
    textAlign:'left',
    paddingLeft:10,
    width: '100%',
    height: '100%',
  },

  cardContainer:{
    backgroundColor:'#fff',
    width: '90%',
    paddingVertical:13,
    paddingHorizontal:17,
    borderRadius:10,
    marginBottom:22,
    elevation:8
  },
  cardTerceiro:{
    borderWidth:1,
    borderColor:'#C4C4C4',
    borderRadius:10,
    flexDirection:'row',
    paddingHorizontal:13,
    paddingVertical:10,
    marginBottom:15
   
  },
  avatar:{
    backgroundColor:'#691CC7',
    width: 36,
    height: 36,
    borderRadius:20,
  },
  containerInfo:{
    paddingLeft:10,
  },
  nickName:{
    fontFamily:'gotham-medium',
    fontSize:11,
    color:'#691CC7',
  },
  textInfo:{
    fontFamily:'gotham-book',
    fontSize:10,
    color: '#7C7C7C',
  },

})