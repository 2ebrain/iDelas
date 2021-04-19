import React from 'react'
import { StyleSheet, 
          Text, 
          TouchableOpacity, 
          SafeAreaView, 
          ScrollView, 
          View} from 'react-native'
import {FontAwesome5} from '@expo/vector-icons'

export default function Detalhes(){
  return(
    <SafeAreaView style={styles.container}>
      <ScrollView style={styles.scrollContainer}>

        <View style={styles.content}>
          <View style={styles.closeBox}>
            <Text>Fechar Detalhes</Text>
            <FontAwesome5 name='times-circle'/>
          </View>

          <View  style={styles.contentBox}>
            <Text>Detalhes do Resultado Financeiro</Text>

            <View style={styles.boxWhite}>
              <Text style={styles.boxText}>Quanto cada saída corresponde a 
                    meta financeira mensal </Text>
            </View>
            {/* Seção de inputs */}
            <View style={styles.boxInput}>
              <Text>Entradas Operacionais</Text>
              <Text>-</Text>
              <Text>0,0%</Text>
              <FontAwesome5 name='chevron-down'/>
            </View>
            <View style={styles.boxInput}>
              <Text>Entradas Operacionais</Text>
              <Text>-</Text>
              <Text>0,0%</Text>
              <FontAwesome5 name='chevron-down'/>
            </View>
            <View style={styles.boxInput}>
              <Text>Entradas Operacionais</Text>
              <Text>-</Text>
              <Text>0,0%</Text>
              <FontAwesome5 name='chevron-down'/>
            </View>
            <View style={styles.boxInput}>
              <Text>Entradas Operacionais</Text>
              <Text>-</Text>
              <Text>0,0%</Text>
              <FontAwesome5 name='chevron-down'/>
            </View>
            <View style={styles.boxInput}>
              <Text>Entradas Operacionais</Text>
              <Text>-</Text>
              <Text>0,0%</Text>
              <FontAwesome5 name='chevron-down'/>
            </View>
            <View style={styles.boxInput}>
              <Text>Entradas Operacionais</Text>
              <Text>-</Text>
              <Text>0,0%</Text>
              <FontAwesome5 name='chevron-down'/>
            </View>
            <View style={styles.boxInput}>
              <Text>Entradas Operacionais</Text>
              <Text>-</Text>
              <Text>0,0%</Text>
              <FontAwesome5 name='chevron-down'/>
            </View>
            <View style={styles.boxInput}>
              <Text>Entradas Operacionais</Text>
              <Text>-</Text>
              <Text>0,0%</Text>
              <FontAwesome5 name='chevron-down'/>
            </View>
            <View style={styles.boxInput}>
              <Text>Entradas Operacionais</Text>
              <Text>-</Text>
              <Text>0,0%</Text>
              <FontAwesome5 name='chevron-down'/>
            </View>
            <View style={styles.boxInput}>
              <Text>Entradas Operacionais</Text>
              <Text>-</Text>
              <Text>0,0%</Text>
              <FontAwesome5 name='chevron-down'/>
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
    height:'auto',
    backgroundColor:'pink',
  },
  
  content:{
    flex:1,
    width:'100%',
    backgroundColor:'#691CC7',
    
  },
  closeBox:{
    flex:1,
    flexDirection:'row',
    alignItems:'center',
    justifyContent:'center',
  },
  contentBox:{
    width:321,
    height:'auto',
  },
  boxWhite:{
    backgroundColor:'#fff',
    borderRadius:10,
    width:'100%',
    height:57,
    alignItems:'center',
    justifyContent:'center',

  },
  boxText:{
    textAlign:'center',
  },
  boxInput:{
    flexDirection:'row',
    width:'100%',
    height:47,
    justifyContent:'space-evenly',
    alignItems:'center',
    backgroundColor:'#fff',
    borderRadius:10,
  },
});