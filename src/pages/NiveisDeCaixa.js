import React from 'react'
import { StyleSheet,
         SafeAreaView, 
         Text, 
         ScrollView, 
         View, 
         StatusBar,
        Image,
        TouchableOpacity } from 'react-native'

import AvatarHome from '../assets/icon-avatar-home.png'

import { useNavigation } from '@react-navigation/core'

import { FontAwesome5 } from '@expo/vector-icons'


export default function Home(){
  const navigate = useNavigation();
  return(
    <SafeAreaView style={styles.container}>
      <StatusBar/>

      <ScrollView >
        <View style={styles.content}>
          {/** Seção do Header*/}
          <View style={styles.header}>

            <View style={styles.headerMenu}>
              <TouchableOpacity onPress={() => navigate.goBack()}>
                <FontAwesome5 name="chevron-left" size={25}/>
              </TouchableOpacity>
              <Text>Voltar</Text>
            </View>

            <View style={styles.headerContent}>
              <TouchableOpacity><FontAwesome5 name="question" size={25}/></TouchableOpacity>
              <TouchableOpacity><FontAwesome5 name="bell" size={25}/></TouchableOpacity>
            </View>
          </View>

          {/* Seção de perfil */}
          <View style={styles.perfilContainer}>
            <Image source={AvatarHome}
                  style={styles.avatarHome}/>
            <View style={styles.infoContainer}>
              <Text style={styles.nameAvatar}>Renata Mendes</Text>
              <View style={styles.progressContainer}>
                <View style={styles.barraBorder}><View style={styles.barraProgress}></View></View><Text style={styles.progressText}>NIVEL 1</Text>
              </View>
              <View style={styles.progressContainer}>
                <View style={styles.barraBorderBlack}><View style={styles.barraProgressBlack}></View></View><Text style={styles.progressTextBlack}>50 PTS</Text>
              </View>
              <View style={styles.progressContainer}>
                <View style={styles.barraBorderGreen}><View style={styles.barraProgressGreen}></View></View><Text style={styles.progressTextGreen}>RF</Text>
              </View>
            </View>
          </View>

          {/*section moutant*/}
          <View style={styles.accountContainer}>
            <View style={styles.boxText}>
              <Text style={styles.tituloH1}>Níveis de caixa</Text>
            </View>

            <View style={styles.boxMeta}>

              <View style={styles.metaContainerText}>
                <Text style={styles.textMeta}>Metas </Text>            
              </View>

              <View style={styles.containerMountant}>
                {/* Caixa de colunas */}
                <View style={styles.columContainer}>
                  <View style={styles.boxItem}>
                      <Text style={styles.itemText}>R$ 103.202.00</Text>
                  </View>
                  <View style={styles.boxItem}>
                      <Text style={styles.itemText}>R$ 103.202.00</Text>
                  </View>
                  <View style={styles.boxItem}>
                      <Text style={styles.itemText}>R$ 103.202.00</Text>
                  </View>
                  <View style={styles.boxItem}>
                      <Text style={styles.itemText}>R$ 103.202.00</Text>
                  </View>
                </View>
                {/* Segunda Coluna */}
                <View style={styles.columContainer}>
                  <View style={styles.boxItem}>
                      <Text style={styles.itemText}>R$ 103.202.00</Text>
                  </View>
                  <View style={styles.boxItem}>
                      <Text style={styles.itemText}>R$ 103.202.00</Text>
                  </View>
                  <View style={styles.boxItem}>
                      <Text style={styles.itemText}>R$ 103.202.00</Text>
                  </View>
                  <View style={styles.boxItem}>
                      <Text style={styles.itemText}>R$ 103.202.00</Text>
                  </View>
                </View>
                {/* Terceira Coluna */}
                <View style={styles.columContainer}>
                  <View style={styles.boxItem}>
                      <Text style={styles.itemText}>R$ 103.202.00</Text>
                  </View>
                  <View style={styles.boxItem}>
                      <Text style={styles.itemText}>R$ 103.202.00</Text>
                  </View>
                  <View style={styles.boxItem}>
                      <Text style={styles.itemText}>R$ 103.202.00</Text>
                  </View>
                  <View style={styles.boxItem}>
                      <Text style={styles.itemText}>R$ 103.202.00</Text>
                  </View>
                </View>
              </View>
             

            </View>


          </View>


        </View>


      </ScrollView>
    </SafeAreaView>
  );

}

const styles = StyleSheet.create({
  container:{
    flex:1,
    width:'100%',
    
  },
  content:{
    alignItems:'center',
  },
  header:{
    width:'100%',
    flexDirection:'row',
    alignItems:'center',
    justifyContent:'space-between',
    padding:25,

  },
  headerMenu:{
    flexDirection:'row',
    alignItems:'center',
    justifyContent:'space-between', 
    width:65,
  },
  headerContent:{
    flexDirection:'row',
    width:55,
    alignItems:'center',
    justifyContent:'space-between',

  },
  realidBox:{
    width:100,
    height:25,
    padding:6,
    backgroundColor:'#691CC7',
    alignItems:'center',
    justifyContent:'space-between',
    flexDirection:'row',
    borderRadius:10,
  },
  realidText:{
    color:'#fff',
    fontSize:14,
  },
  //Seção do Perfil
  perfilContainer:{
    flexDirection:'row',
    width:'100%',
    padding:15,
    justifyContent:'space-evenly',
    alignItems:'center',
  },
  avatarHome:{
    width:100,
    height:100,
  },
  infoContainer:{
    width:230,
    justifyContent:'flex-start',
    alignItems:'flex-start',
 
  },
  nameAvatar:{
    fontSize:15,
    marginBottom:10,
  },
  /*Barra de progressao do perfil*/ 
  progressContainer:{
    width:'100%',
    flexDirection:'row',
    alignItems:'center',
    justifyContent:'space-between',
  },
  barraBorder:{
    width:150,
    height:15,
    borderWidth:2,
    borderColor:'#7B1DCC',
    borderRadius:7,
    marginBottom:5,
  },
  barraProgress:{
    width:'30%',
    height:'100%',
    backgroundColor:'#7B1DCC',
  },
  progressText:{
    fontSize:13,
    color:'#691CC7',
  },
  //Progrção Preta
  barraBorderBlack:{
    width:150,
    height:15,
    borderWidth:2,
    borderColor:'#000',
    borderRadius:7,
    marginBottom:5,
  },
  barraProgressBlack:{
    width:'15%',
    height:'100%',
    backgroundColor:'#000',
  },
  progressTextBlack:{
    fontSize:13,
    color:'#000',
  },
  //Progrção Verde
  barraBorderGreen:{
    width:150,
    height:15,
    borderWidth:2,
    borderColor:'#40CC4B',
    borderRadius:7,
    marginBottom:5,
  },
  barraProgressGreen:{
    width:'78%',
    height:'100%',
    backgroundColor:'#40CC4B',
  },
  progressTextGreen:{
    textAlign:'center',
    fontSize:12,
    width:45,
    backgroundColor:'#40CC4B',
    borderRadius:10,
    color:'#fff',
  },

  //Moutant
  accountContainer:{
    flex:1,
    alignItems:'center',
    justifyContent:'center',
    width:'100%',
  },
  boxText:{
    width:'100%',
    paddingHorizontal:24,
    marginBottom:20,
    
  },
  tituloH1:{
    fontSize:15,
    color:'#691CC7',
  },
  boxMeta:{
    width:'90%',
    backgroundColor:'#fff',
    borderRadius:10,
    marginBottom:20,
  },
  metaContainerText:{
    backgroundColor:'#691CC7',
    width:'10%',
    alignItems:'center',
    justifyContent:'center',
    height:20,
    borderRadius:5,
    margin:15,
  },
  textMeta:{
    fontSize:9,
    color:'#fff',
  },
  containerMountant:{
    width:'85%',
    paddingHorizontal:20,
    flexDirection:'row',
  },
  columContainer:{
    borderWidth:5,
    
    borderColor:'#691CC7',
    borderBottomEndRadius:20,
    borderBottomLeftRadius:20,
    width:'40%',
    height:'auto',
    marginBottom:25,
  },
  boxItem:{
    borderBottomWidth:2, 
    borderStyle:'dotted',
    borderRadius:5 ,
    width:'100%',
    height:85,
    justifyContent:'flex-end',
    alignItems:'center',
     
    
  },
  itemText:{
    fontSize:11,
    
  },

});