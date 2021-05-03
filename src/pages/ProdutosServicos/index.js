import React from "react";
import { useNavigation } from "@react-navigation/core";

import AvatarHome from "../../assets/icon-avatar-home.png";

import IconPlusCircle from "../../assets/icons/icon-plus-circle-white.png";

import {
  SafeAreaView,
  Text,
  View,
  TouchableOpacity,
  Image,
  ScrollView,
} from "react-native"
import Styles from "./style"


import IconPlusOrange from "../../assets/icons/icon-plus-circle-orange.png"

import Header from "../../components/Header"

export default function () {
  const navigation = useNavigation();
  return (
    <SafeAreaView>
      <ScrollView>
        <View style={Styles.container}>
          <Header nickName="Renata Mendes" source={AvatarHome} />
          {/* Seção de saldo e escolhas das contas de banco */}
          <View style={Styles.content}>
            <View style={Styles.titulo}>
              <Text style={Styles.textTitulo}>Produtos & Serviços </Text>
            </View>
          </View>
          {/* Seção de Botoes flutuantes */}
          <View style={Styles.sectionButtons}>
            <View style={Styles.button}>
              <TouchableOpacity>
                <Image source={IconPlusCircle} style={Styles.iconCirclePlus} />
              </TouchableOpacity>
              <Text style={Styles.buttonText}>
                Cadastrar{"\n"}Produto
              </Text>
            </View>
            <View style={Styles.button}>
              <TouchableOpacity>
                <Image source={IconPlusCircle} style={Styles.iconCirclePlus} />
              </TouchableOpacity>
              <Text style={Styles.buttonText}>Cadastrar{"\n"}Serviços</Text>
            </View>
          </View>
          {/* Lista de Items */}
          <View style={Styles.listProdutos}>
            <View style={Styles.produtoItem}>
              <View style={Styles.productContent}>
                <View style={Styles.circleProdut}></View>
                <Text style={Styles.textProduto}>
                  <Text style={Styles.productName}>Nome Do Produto</Text>{'\n'}
                  Custo da mercadoria{'\n'}
                  Investimento{'\n'}
                  Preço de venda{'\n'}
                  Lucratividade{'\n'}
                  Estoque: 20
                </Text>
              </View>
              <TouchableOpacity>
                <Image source={IconPlusOrange} style={Styles.iconPlusProduct}/>
              </TouchableOpacity>
            </View>
            <View style={Styles.produtoItem}>
              <View style={Styles.productContent}>
                <View style={Styles.circleProdut}></View>
                <Text style={Styles.textProduto}>
                  <Text style={Styles.productName}>Nome Do Produto</Text>{'\n'}
                  Custo da mercadoria{'\n'}
                  Investimento{'\n'}
                  Preço de venda{'\n'}
                  Lucratividade{'\n'}
                  Estoque: 20
                </Text>
              </View>
              <TouchableOpacity>
                <Image source={IconPlusOrange} style={Styles.iconPlusProduct}/>
              </TouchableOpacity>
            </View>
            <View style={Styles.produtoItem}>
              <View style={Styles.productContent}>
                <View style={Styles.circleProdut}></View>
                <Text style={Styles.textProduto}>
                  <Text style={Styles.productName}>Nome Do Produto</Text>{'\n'}
                  Custo da mercadoria{'\n'}
                  Investimento{'\n'}
                  Preço de venda{'\n'}
                  Lucratividade{'\n'}
                  Estoque: 20
                </Text>
              </View>
              <TouchableOpacity>
                <Image source={IconPlusOrange} style={Styles.iconPlusProduct}/>
              </TouchableOpacity>
            </View>
            <View style={Styles.produtoItem}>
              <View style={Styles.productContent}>
                <View style={Styles.circleProdut}></View>
                <Text style={Styles.textProduto}>
                  <Text style={Styles.productName}>Nome Do Produto</Text>{'\n'}
                  Custo da mercadoria{'\n'}
                  Investimento{'\n'}
                  Preço de venda{'\n'}
                  Lucratividade{'\n'}
                  Estoque: 20
                </Text>
              </View>
              <TouchableOpacity>
                <Image source={IconPlusOrange} style={Styles.iconPlusProduct}/>
              </TouchableOpacity>
            </View>




          </View>

          
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}
