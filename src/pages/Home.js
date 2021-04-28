import React from 'react'
import { StyleSheet,
         SafeAreaView, 
         Text, 
         ScrollView, 
         View, 
         StatusBar,
        Image,
      TouchableOpacity } from 'react-native'

import { useNavigation } from '@react-navigation/core'

//importes dos icones usados na view
import butonToggle from '../assets/icons/icon-toggle.png'
import buttonSing from '../assets/icons/icon-sino.png'
import iconDollar from '../assets/icons/dollar-coin.png'
import iconEye from '../assets/icons/icon-eye-gray.png'
import iconArrowBottom from '../assets/icons/icon-arrow-bottom.png'
import IconCategoria from '../assets/icons/icon-categorias.png'
import IconRelatorios from '../assets/icons/icon-relatorios.png'
import IconSocios from '../assets/icons/icon-socios.png'
import IconBoxDollar from '../assets/icons/icon-box-dollar.png'
import IconConciliacaoContas from '../assets/icons/icon-carteira.png'
import IconSaidas from '../assets/icons/icon-saidas.png'
import IconCobranca from '../assets/icons/icon-cobrancas.png'
import IconEntradas from '../assets/icons/icon-entradas.png'
import AvatarHome from '../assets/icon-avatar-home.png'
import AvatarProfile from '../assets/avatar-profile.png'

import Capa from '../assets/capa.png'
import CardMap from '../assets/map-image.png'
import GirlStudy from '../assets/university-girl.png'

import { FontAwesome5 } from '@expo/vector-icons'

export default function Home(){
  const navigation = useNavigation();
  
  return(
    <SafeAreaView style={styles.container}>
      
      <StatusBar/>
 
      <ScrollView >
        <View style={styles.content}>
          {/** Seção do Header*/}
          <View style={styles.header}>
            <TouchableOpacity onPress={() =>{navigation.goBack()}}>
              <Image source={butonToggle} style={{width:20, height:20,}}/>
            </TouchableOpacity>
            <View style={styles.headerContent}>
             
              <View style={styles.realidBox}>
              
                <Text style={styles.realidText}>Realizado</Text>
                <FontAwesome5 name='chevron-down' color='#fff'/>
                
              </View>
              <Image source={buttonSing} style={{width:20, height:22,}}/>
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

          {/* Seção de Caixa */}
          <View style={styles.sectionBox}>
            <Text style={styles.tittleText}>Fluxo de Caixa</Text>
            <View style={styles.contentBox}>
              <View style={styles.accountSaldo}>
                <Image source={iconDollar} style={{width:27, height:21,}}/>
                <Text>R$ 24.643,00</Text>
              </View>
              <View style={styles.iconsContainer}>
                <TouchableOpacity>
                  <Image source={iconEye} style={{width:18, height:13,}}/>
                </TouchableOpacity>
                <TouchableOpacity>
                  <Image source={iconArrowBottom} style={{width:15, height:13,}}/>
                </TouchableOpacity>
                
              </View>
            </View>
          </View>

          <View style={styles.sectionBox}>
            <Text style={styles.tittleText}>Níveis de Caixa</Text>
            <View style={styles.contentBox}>
              <View style={styles.accountSaldo}>
                <Image source={iconDollar} style={{width:27, height:21,}}/>
                <Text>R$ 55.265,00</Text>
              </View>
              <View style={styles.iconsContainer}>
                <TouchableOpacity>
                  <Image source={iconEye} style={{width:18, height:13,}}/>
                </TouchableOpacity>
                <TouchableOpacity onPress={() => navigation.navigate('NiveisDeCaixa')}>
                  <Image source={iconArrowBottom} style={{width:15, height:13,}}/>
                </TouchableOpacity>
              </View>
            </View>
          </View>

          <View style={styles.sectionBox}>
            <Text style={styles.tittleText}>Resultado Financeiro</Text>
            <View style={styles.contentBox}>
              <View style={styles.accountSaldo}>
                <Image source={iconDollar} style={{width:27, height:21,}}/>
                <Text>R$ 24.643,00</Text>
              </View>
              <View style={styles.iconsContainer}>
                <TouchableOpacity>
                  <Image source={iconEye} style={{width:18, height:13,}}/>
                </TouchableOpacity>
                <TouchableOpacity onPress={() => navigation.navigate('Detalhes')}>
                  <Image source={iconArrowBottom} style={{width:15, height:13,}}/>
                </TouchableOpacity>
              </View>
            </View>
          </View>

        
          {/* Seção Botoes */}
          <View style={styles.botoesContainer}>
            <View style={styles.botao}>
              <Image source={IconConciliacaoContas} style={{width:41, height:46,}}/>
              <Text style={styles.textBotao}>Conciliação de Contas</Text>
            </View>
            <View style={styles.botao}>
            <Image source={IconSaidas} style={{width:53, height:38,}}/>
              <Text style={styles.textBotao}>Saidas</Text>
            </View>
            <View style={styles.botao}>
            <Image source={IconCobranca} style={{width:67, height:40,}}/>
              <Text style={styles.textBotao}>Cobranças Pendentes</Text>
            </View>
            <View style={styles.botao}>
            <Image source={IconEntradas} style={{width:60, height:47,}}/>
              <Text style={styles.textBotao}>Entradas</Text>
            </View>

          </View>

          {/* Seção botoes elims */}
          <View style={styles.cardOptions}>
            <Image source={IconBoxDollar} style={{width:30, height:28,}}/>
            <Text style={styles.textRelatorios}>Precificação de Produtos & Serviços</Text>
          </View>
          <View style={styles.cardOptions}>
            <Image source={IconRelatorios} style={{width:21, height:31,}}/>
            <Text style={styles.textRelatorios}>Relatórios</Text>
          </View>
          <View style={styles.cardOptions}>
            <Image source={IconCategoria} style={{width:27, height:27,}}/>
            <Text style={styles.textRelatorios}>Categorias</Text>
          </View>
          <View style={styles.cardOptions}>
            <Image source={IconSocios} style={{width:27, height:27,}}/>
            <Text style={styles.textRelatorios}>Sócios & Funcionários</Text>
          </View>

          {/* Seção Mais Opções */}
          <View style={styles.profileContainer}>
            <Image source={Capa}/>
            <View style={styles.profileContent}>
              <Image source={AvatarProfile} style={styles.avatarProfile}/>
              <Text style={styles.profileText}>Atatica Studios</Text>
            </View>
          </View>
          {/* Container Box */}
          <View style={styles.cardsContainer}>
            <View style={styles.cardMap}>
              <Image source={CardMap} style={styles.cardImg}/>
            </View>

            <View style={styles.cardGirl}>
              <Image source={GirlStudy} style={styles.cardImg}/>
              <Text style={styles.textCard}>Universidade{'\n'}Da Quel</Text>
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
  headerContent:{
    flexDirection:'row',
    width:135,
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
  //Section Caixas
  sectionBox:{
    width:350,
    padding:10,
  },
  contentBox:{
    flexDirection:'row',
    width:321,
    height:40,
    elevation:8,
    backgroundColor:'#fff',
    borderRadius:10,
    justifyContent:'space-between',
    alignItems:'center',
  },
  accountSaldo:{
    flexDirection:'row',
    alignItems:'center',
    width:120,
    justifyContent:'space-between',
    marginLeft:10,
  },
  iconsContainer:{
    flexDirection:'row',
    width:40,
    justifyContent:'space-between',
    marginRight:10,
  },
  tittleText:{
    marginBottom:10,
  },
  // Seção de botoes
  botoesContainer:{
    width:350,
    marginTop:25,
    flexDirection:'row',
    flexWrap:'wrap',
  },
  botao:{
    borderWidth:3,
    borderTopRightRadius:15,
    borderBottomEndRadius:15,
    borderBottomLeftRadius:15,
    justifyContent:'center',
    alignItems:'center',
    borderColor:'#691CC7',
    width:150,
    height:115,
    margin:10,
  },
  textBotao:{
    color:'#691CC7',
    textAlign:'center',
  },
  // Card Options
  cardOptions:{
    flexDirection:'row',
    justifyContent:'flex-start',
    alignItems:'center',
    width:325,
    height:51,
    elevation:5,
    backgroundColor:'#691CC7',
    borderTopLeftRadius:15,
    borderBottomLeftRadius:15,
    borderBottomRightRadius: 20,
    marginBottom:10,
    padding:10,

  },
  textRelatorios:{
    fontSize:12,
    color:'#fff',
    marginLeft:10,
  },
  // Mais opções
  profileContainer:{
    width:321,
    height:160,
    backgroundColor:'#fff',
    borderRadius:25,
    marginBottom:30,
    elevation:8,
  },
  profileContent:{
    flexDirection:'row',
    position:'absolute',
    top:90,
    left:15,
   
    alignItems:'center',
    justifyContent:'space-between',
    width:160,
  },
  avatarProfile:{
    backgroundColor:'#000',
    width:50,
    height:50,
    borderRadius:25,
  },
  profileText:{
    color:'#691CC7',
    fontSize:13,
    marginTop:25,
  },
  // Cards
  cardsContainer:{
    width:325,
    height:'auto',
    marginBottom:15,
    justifyContent:'space-between',
    flexDirection:'row',
    
  },
  cardMap:{
    elevation:8,
    borderRadius:20,
    width:151,
    height:90,
  },
  cardGirl:{
    elevation:8,
    borderRadius:20,
    width:151,
    height:90,
  },
  cardImg:{
    width:153,
    height:93,
    flexDirection:'row',
    alignItems:'center',
    backgroundColor:'#000',
    borderRadius:20,
    },
    textCard:{
      color:'#fff',
      fontSize:12,
      position:'absolute',
      top:40,
      left:65,
      textAlign:'left',
    },


    cardDropDown:{
      backgroundColor:'#fff',
      width:'80%',
      height:'auto',
      marginBottom:20,
      borderRadius:15,
    },

});