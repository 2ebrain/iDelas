import React from 'react'
import { StyleSheet, 
          Text, 
          TouchableOpacity, 
          SafeAreaView, 
          ScrollView, 
          View} from 'react-native'
import {FontAwesome5} from '@expo/vector-icons'

import { useNavigation} from '@react-navigation/core'

export default function Detalhes(){
  const navigation = useNavigation();
  return(
    <SafeAreaView style={styles.container}>
      <ScrollView style={styles.scrollContainer}>

        <View style={styles.content}>

          <View style={styles.closeContainer}>
            <View style={styles.closeBox}>
              <Text style={styles.closeText}>Fechar Detalhes</Text>
              <TouchableOpacity onPress={() => navigation.goBack()}>
                <FontAwesome5 name='times-circle' color='#fff' size={23}/>
              </TouchableOpacity>
            </View>
          </View>

          <View  style={styles.contentBox}>
            <Text style={styles.textDetails}>Detalhes do Resultado Financeiro</Text>

            <View style={styles.boxWhite}>
              <Text style={styles.boxText}>Quanto cada saída corresponde a 
                    meta financeira mensal </Text>
            </View>
            {/* Seção de inputs */}
            <View style={styles.boxInput}>
              <View>
                <Text style={styles.textInitial}>Entradas Operacionais</Text>
              </View>
              <View style={styles.boxMountante}>
                <Text style={styles.textValor}>-</Text>
              </View>
              <View style={styles.boxPorcertn}>
                <Text style={styles.textPorcen}>0,0%</Text>
                <TouchableOpacity>
                  <FontAwesome5 name='chevron-down'/>
                </TouchableOpacity>
              </View>
            </View>
            <View style={styles.boxInput}>
              <View>
                <Text style={styles.textInitial}>Entradas Operacionais</Text>
              </View>
              <View style={styles.boxMountante}>
                <Text style={styles.textValor}>-</Text>
              </View>
              <View style={styles.boxPorcertn}>
                <Text style={styles.textPorcen}>0,0%</Text>
                <TouchableOpacity>
                  <FontAwesome5 name='chevron-down'/>
                </TouchableOpacity>
              </View>
            </View>
            <View style={styles.boxInput}>
              <View>
                <Text style={styles.textInitial}>Entradas Operacionais</Text>
              </View>
              <View style={styles.boxMountante}>
                <Text style={styles.textValor}>-</Text>
              </View>
              <View style={styles.boxPorcertn}>
                <Text style={styles.textPorcen}>0,0%</Text>
                <TouchableOpacity>
                  <FontAwesome5 name='chevron-down'/>
                </TouchableOpacity>
              </View>
            </View>
            <View style={styles.boxInput}>
              <View>
                <Text style={styles.textInitial}>Entradas Operacionais</Text>
              </View>
              <View style={styles.boxMountante}>
                <Text style={styles.textValor}>-</Text>
              </View>
              <View style={styles.boxPorcertn}>
                <Text style={styles.textPorcen}>0,0%</Text>
                <TouchableOpacity>
                  <FontAwesome5 name='chevron-down'/>
                </TouchableOpacity>
              </View>
            </View>
            <View style={styles.boxInput}>
              <View>
                <Text style={styles.textInitial}>Entradas Operacionais</Text>
              </View>
              <View style={styles.boxMountante}>
                <Text style={styles.textValor}>-</Text>
              </View>
              <View style={styles.boxPorcertn}>
                <Text style={styles.textPorcen}>0,0%</Text>
                <TouchableOpacity>
                  <FontAwesome5 name='chevron-down'/>
                </TouchableOpacity>
              </View>
            </View>
            <View style={styles.boxInput}>
              <View>
                <Text style={styles.textInitial}>Entradas Operacionais</Text>
              </View>
              <View style={styles.boxMountante}>
                <Text style={styles.textValor}>-</Text>
              </View>
              <View style={styles.boxPorcertn}>
                <Text style={styles.textPorcen}>0,0%</Text>
                <TouchableOpacity>
                  <FontAwesome5 name='chevron-down'/>
                </TouchableOpacity>
              </View>
            </View>
            <View style={styles.boxInput}>
              <View>
                <Text style={styles.textInitial}>Entradas Operacionais</Text>
              </View>
              <View style={styles.boxMountante}>
                <Text style={styles.textValor}>-</Text>
              </View>
              <View style={styles.boxPorcertn}>
                <Text style={styles.textPorcen}>0,0%</Text>
                <TouchableOpacity>
                  <FontAwesome5 name='chevron-down'/>
                </TouchableOpacity>
              </View>
            </View>
            <View style={styles.boxInput}>
              <View>
                <Text style={styles.textInitial}>Entradas Operacionais</Text>
              </View>
              <View style={styles.boxMountante}>
                <Text style={styles.textValor}>-</Text>
              </View>
              <View style={styles.boxPorcertn}>
                <Text style={styles.textPorcen}>0,0%</Text>
                <TouchableOpacity>
                  <FontAwesome5 name='chevron-down'/>
                </TouchableOpacity>
              </View>
            </View>
            <View style={styles.boxInput}>
              <View>
                <Text style={styles.textInitial}>Entradas Operacionais</Text>
              </View>
              <View style={styles.boxMountante}>
                <Text style={styles.textValor}>-</Text>
              </View>
              <View style={styles.boxPorcertn}>
                <Text style={styles.textPorcen}>0,0%</Text>
                <TouchableOpacity>
                  <FontAwesome5 name='chevron-down'/>
                </TouchableOpacity>
              </View>
            </View>

            <View style={styles.boxTotal}>
              <View>
                <Text style={styles.textInitial}>TOTAL</Text>
              </View>
              <View style={styles.boxPorcertn}>
                <Text style={styles.textPorcen}>100%</Text>
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
    height:'100%',
    backgroundColor:'#691CC7',
  },
  scrollContainer:{
    flex:1,
    width:'100%',
  },
  content:{
    flex:1,
    width:'100%',
    height:'100%',
    alignItems:'center',
    justifyContent:'space-evenly',
    paddingTop:15,
  },

  closeContainer:{
    width:'100%',
    alignItems:'flex-end',
    justifyContent:'flex-end',
  },
  closeBox:{
    width:125,
    flex:1,
    flexDirection:'row',
    alignItems:'center',
    justifyContent:'space-evenly',
    marginRight:25,
    marginTop:15,
  },
  closeText:{
    color:'#fff',
    fontSize:11,
    fontWeight:'bold',
  },
  contentBox:{
    width:'90%',
    height:'auto',
    marginTop:20,
    alignItems:'flex-start',
    justifyContent:'center',
    marginTop:55,
  },
  textDetails:{
    color:'#fff',
    fontSize:15,
    marginBottom:10,
  },
  boxWhite:{
    backgroundColor:'#fff',
    borderRadius:10,
    width:'100%',
    height:57,
    marginVertical:10,
    alignItems:'center',
    justifyContent:'center',

  },
  boxText:{
    textAlign:'center',
    width:214,
    fontSize:13,
  },
  boxInput:{
    flexDirection:'row',
    width:'100%',
    height:47,
    justifyContent:'space-evenly',
    alignItems:'center',
    backgroundColor:'#fff',
    borderRadius:10,
    marginBottom:10,
  },
  boxMountante:{
    borderLeftWidth:1,
    borderRightWidth:1,
    justifyContent:'center',
    alignItems:'center',
    height:'100%',
    width:85,
    borderColor:'#B7B7B7',
  },
  boxPorcertn:{
    flexDirection:'row',
    width:85,
    justifyContent:'space-between',
    alignItems:'center',
  },
  boxTotal:{
    backgroundColor:'#F9A179',
    flexDirection:'row',
    width:'100%',
    height:47,
    justifyContent:'space-between',
    alignItems:'center',
    borderRadius:10,
    marginBottom:10,
  },
});