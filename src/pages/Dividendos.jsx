import React from 'react'
import {StyleSheet, 
        Text, View, TouchableOpacity,
        SafeAreaView, ScrollView} from 'react-native'

import AvatarHome from '../assets/icon-avatar-home.png'

import Header from '../components/Header'
import HeaderMenu from '../components/HeaderMenuSecundary'

export default function Dividendos(){
  const list = [
    {

      id:1,
      nomeDividendo:'Fernanda Rosa',
      dataEntrega:'Data de entrega',
      porcentagemEmpresa:'Porcentagem da empresa',
      valorInvestido:'Valor investido'
    },
    {
      id:2,
      nomeDividendo:'Fernanda Rosa',
      dataEntrega:'Data de entrega',
      porcentagemEmpresa:'Porcentagem da empresa',
      valorInvestido:'Valor investido'
    },
    {
      id:3,
      nomeDividendo:'Fernanda Rosa',
      dataEntrega:'Data de entrega',
      porcentagemEmpresa:'Porcentagem da empresa',
      valorInvestido:'Valor investido'
    },
  ]
  return (
    <SafeAreaView style={styles.container}>
      <ScrollView>
        <View style={styles.contentContainer}>
          <HeaderMenu />
          <Header nickName="Renata Mendes" source={AvatarHome} />
          <View style={styles.content}>
            <View style={styles.titulo}>
              <Text style={styles.textTitulo}>Dividendos</Text>
            </View>
          </View>

          <View style={styles.dividendosContainer}>
            {list.map(dividendo => (
              <View key={dividendo.id} style={styles.cardDividendo}>
                <View style={styles.infoDividendo}>

                  <View style={styles.avatarDividendo}>
                    {/* Avatar do divvidendo */}
                  </View>
                  <View style={styles.valuesDividendo}>
                    <Text style={styles.nomeDividendo}>{dividendo.nomeDividendo}</Text>
                    <Text style={styles.textDividendo}>{dividendo.dataEntrega}</Text>
                    <Text style={styles.textDividendo}>{dividendo.porcentagemEmpresa}</Text>
                    <Text style={styles.textDividendo}>{dividendo.valorInvestido}</Text>
                  </View>
                </View>
                <TouchableOpacity style={styles.buttonPagar}>
                  <Text style={styles.textButtonPagar}>Pagar Dividendo</Text>
                </TouchableOpacity>
              </View>
            ))}
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}


const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  contentContainer: {
    alignItems: "center",
  },
  content: {
    width: "100%",
    justifyContent: "center",
    alignItems: "center",
    marginTop: 30,
  },
  titulo: {
    width: "100%",
    paddingHorizontal: 25,
    marginBottom: 10,
  },
  textTitulo: {
    fontSize: 15,
    color: "#691CC7",
    fontFamily: "gotham-medium",
  },

  dividendosContainer: {
    backgroundColor: "#fff",
    width: "90%",
    alignItems: "center",
    borderRadius: 10,
    paddingTop: 15,
    marginBottom: 25,
  },
  cardDividendo: {
    width: 321,
    borderWidth: 1,
    borderColor: "#C9C9C9",
    borderRadius: 10,
    marginBottom: 15,
    alignItems: "center",
  },
  infoDividendo: {
    flexDirection: "row",
    width: "100%",
    paddingLeft: 15,
    paddingTop: 15,
    paddingBottom: 20,
  },
  avatarDividendo: {
    width: 36,
    height: 36,
    backgroundColor: "#691CC7",
    borderRadius: 20,
  },
  valuesDividendo: {
    paddingLeft: 15,
  },

  nomeDividendo: {
    fontSize: 10,
    color: "#691CC7",
    fontFamily: "gotham-bold",
  },
  textDividendo: {
    fontSize: 10,
    fontFamily: "gotham-book",
    lineHeight: 11,
  },

  buttonPagar: {
    width: 262,
    height: 28,
    backgroundColor: "#F9A179",
    borderRadius: 4,
    alignItems: "center",
    justifyContent: "center",
    marginBottom: 14,
  },
  textButtonPagar: {
    fontSize: 10,
    fontFamily: "gotham-medium",
    color: "#fff",
  },
});