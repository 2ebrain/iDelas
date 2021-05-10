import React from 'react'
import { StyleSheet,
         SafeAreaView, 
         Text, 
         ScrollView, 
         View, 
         TouchableOpacity } from 'react-native'

import AvatarHome from '../assets/icon-avatar-home.png'

import Header from '../components/Header'
import HeaderMenu from '../components/HeaderMenuSecundary'

import { useNavigation } from '@react-navigation/core'

export default function Home(){
  const navigate = useNavigation();
  return (
    <SafeAreaView style={styles.container}>
      <ScrollView>
        <View style={styles.content}>
          {/** Seção do Header*/}
          <View style={styles.header}>
            <HeaderMenu/>
            <Header nickName='Renata Mendes' source={AvatarHome}/>
          </View>


          {/*section moutant*/}
          <View style={styles.accountContainer}>
            <View style={styles.boxText}>
              <Text style={styles.tituloH1}>Níveis de caixa</Text>
            </View>

            <View style={styles.boxMeta}>
              <View style={styles.metaContainerText}>
                <Text style={styles.textMeta}>Metas</Text>
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

                  <View style={styles.columnBox}>
                    <View style={styles.boxItem}>
                      <Text style={[styles.itemText, styles.colorWhite]}>
                        R$ 103.202.00
                      </Text>
                    </View>
                    <View style={styles.boxItem}>
                      <Text style={[styles.itemText, styles.colorWhite]}>
                        R$ 103.202.00
                      </Text>
                    </View>
                    <View style={styles.boxItem}>
                      <Text style={[styles.itemText, styles.colorWhite]}></Text>
                    </View>
                  </View>
                </View>
                {/* Segunda Caixa de colunas */}
                <View style={styles.columContainerSecundary}>
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
                {/* Terceira Caixa de colunas */}
                <View style={styles.columContainerTri}>
                  <View style={styles.boxTableShiel}>
                    <Text style={styles.inputText}>Dividendos</Text>
                    <Text style={styles.inputText}>Investidores</Text>
                  </View>

                  <Text style={styles.inputText}>Reserva Financeira</Text>
              
                  <View style={styles.boxTableShiel}>
                    <Text style={styles.inputText}>Obrigações Trabalhistas</Text>
                    <Text style={styles.inputText}>Corrente</Text>
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
    width:'100%',
  },
  header:{
    width:'100%',
    alignItems:'center',
  },
  headerMenu:{
    flexDirection:'row',
    alignItems:'center',
    justifyContent:'space-between', 
    width:65,
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
    height:'auto',
    backgroundColor:'#fff',
    borderRadius:10,
    marginBottom:20,
    justifyContent:'center',
    alignItems:'center',
  },
  metaContainerText:{
    width:'95%',
    alignItems:'flex-start',
    justifyContent:'center',
    height:20,
    margin:15,
    
    
  },
  textMeta:{
    width:'13%',
    padding:5,
    fontSize:10,
    color:'#fff',
    borderRadius:5,
    backgroundColor:'#691CC7',
    
  },

  //Seção de tabelas(Colunas) 
  containerMountant:{
    width:'100%',
    justifyContent:'space-evenly',
    flexDirection:'row',
  },
  // Primeira Coluna
  columContainer:{
    borderWidth:2,
    borderBottomEndRadius:20,
    borderBottomLeftRadius:20,
    borderColor:'#691CC7',
    width:95,
    height:'auto',
    marginBottom:25,
  },
  columnBox:{
    backgroundColor:'#691CC7',
    borderBottomEndRadius:15,
    borderBottomLeftRadius:15,
  },
  // Segunda Coluna
  columContainerSecundary:{
    width:80,
  },
  columContainerTri:{
    width:'100%',
    height:350,
    justifyContent:'space-between',
    alignItems:'center',
  },
  boxTableShiel:{ 
    height:90,
    justifyContent:'space-between',
  },
  boxTableShielPrimary:{
    height:30,
  },
  inputText:{
    width:210,
    fontSize:11,
    backgroundColor:'#691CC7',
    color:'#fff',
    padding:3,
    textAlign:'center',
    marginBottom:5,
    borderRadius:10,

  },
  colorWhite:{
    color:'#fff',
  },
  boxItem:{
    borderRadius:5,
    height:85,
    justifyContent:'flex-end',
    alignItems:'center',
  },
  itemText:{
    fontSize:11,
    
  },

});