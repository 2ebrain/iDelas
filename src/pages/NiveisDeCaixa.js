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
              <View style={{justifyContent:'flex-start', width:'100%'}}>
                <View style={styles.metaContainerText}>
                  <Text style={styles.textMeta}>Metas</Text>
                </View>
              </View>

              <View style={styles.containerMountant}>

                <View style={styles.column}>
                    <Text style={styles.inputColumn}>
                      R$ 103.202,00
                    </Text>
                  <Text style={styles.inputColumn}>
                    R$ 103.202,00
                  </Text>
                  <Text style={styles.inputColumn}>
                    R$ 103.202,00
                  </Text>

                  <View style={{backgroundColor:'#691CC7', width:'100%', borderBottomEndRadius:10, borderBottomLeftRadius:10, alignItems:'center' }}>
                    <Text style={{paddingTop:75, color:'#fff', fontSize:8}} >
                        R$ 103.202,00
                      </Text>
                    <Text style={{paddingTop:75, color:'#fff', fontSize:8}} >
                      R$ 103.202,00
                    </Text>
                    <Text style={{paddingTop:75, color:'#fff', fontSize:8}} >
                    
                    </Text>
                  </View>
                </View>
                
                <View style={styles.columnSecundary}>
                  <Text style={styles.inputColumnSecundary}>
                  </Text>
                  <Text style={styles.inputColumnSecundary}>
                   0% FALTA 100%
                  </Text>
                  <Text style={styles.inputColumnSecundary}>
                    55% FALTA 45%
                  </Text>
                  <Text style={styles.inputColumnSecundary}>
                    100%
                  </Text>
                  <Text style={styles.inputColumnSecundary}>
                    100%
                  </Text>
                </View>

                <View style={styles.columnThird}>

                  <TouchableOpacity style={{backgroundColor:'#691CC7', 
                                borderRadius:5, alignItems:'center', width:'100%', 
                                height:18, justifyContent:'center', marginBottom:20}}
                                >
                    <Text style={{color:'#fff', fontSize:9, fontFamily:'gotham-bold'}}>Dividendos</Text>
                  </TouchableOpacity>

                  <TouchableOpacity style={{backgroundColor:'#691CC7', borderRadius:5, alignItems:'center', width:'100%', height:18, justifyContent:'center'}}>
                    <Text style={{color:'#fff', fontSize:9, fontFamily:'gotham-bold'}}
                    onPress={() => navigate.navigate('Investimento')}>Invetsimentos</Text>
                  </TouchableOpacity>

                  <TouchableOpacity style={{backgroundColor:'#691CC7', borderRadius:5, alignItems:'center', width:'100%', height:18, justifyContent:'center'}}>
                    <Text style={{color:'#fff', fontSize:9, fontFamily:'gotham-bold'}}>Reserva Financeira</Text>
                  </TouchableOpacity>

                  <TouchableOpacity style={{backgroundColor:'#691CC7', borderRadius:5, alignItems:'center', width:'100%', height:18, justifyContent:'center'}}>
                    <Text style={{color:'#fff', fontSize:9, fontFamily:'gotham-bold'}}>Obrigações Trabalhistas</Text>
                  </TouchableOpacity>
                  
                  <TouchableOpacity style={{backgroundColor:'#691CC7', borderRadius:5, alignItems:'center', width:'100%', height:18, justifyContent:'center'}}>
                    <Text style={{color:'#fff', fontSize:9, fontFamily:'gotham-bold'}}>Corrente</Text>
                  </TouchableOpacity>
                    
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
    width:47,
    alignItems:'center',
    justifyContent:'center',
    height:18,
    margin:15,
    
  },
  textMeta:{
    padding:5,
    fontSize:9,
    fontFamily:'gotham-medium',
    color:'#fff',
    borderRadius:5,
    backgroundColor:'#691CC7',
    
  },

  //Seção de tabelas(Colunas) 
  containerMountant:{
    width:'100%',
    // paddingHorizontal:10,
    justifyContent:'space-evenly',
    flexDirection:'row',
    marginBottom:20,
  },
  column:{
    width:80,
    alignItems:'center',
    borderWidth:1,
    borderColor:'#691CC7',
    borderBottomEndRadius:10, 
    borderBottomLeftRadius:10,
  },
  inputColumn:{
    color:'#777777',
    paddingTop:75,
    fontSize:8,
    fontFamily:'gotham-medium',
  },
  columnSecundary:{
    width: 75,
  },
  inputColumnSecundary:{
    color:'#777777',
    paddingTop:75,
    fontSize:8,
    fontFamily:'gotham-medium',
  },
  columnThird:{
    width:124,
    height: 'auto',
    alignItems:'center',
    justifyContent:'space-around',
  },
  

});