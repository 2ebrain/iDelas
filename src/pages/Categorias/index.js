import React from "react";
import { useNavigation } from "@react-navigation/core"

import AvatarHome from "../../assets/icon-avatar-home.png"

import IconPlusCircle from "../../assets/icons/icon-plus-circle-white.png"
import IconCategorias from '../../assets/icons/icon-categorias.png'
import IconArrow from '../../assets/icons/icon-arrow-bottom.png'

import {
  SafeAreaView,
  Text,
  View,
  TouchableOpacity,
  Image,
  ScrollView,
} from "react-native"
import Styles from "./style"

import Header from "../../components/Header"
import HeaderSecundary from '../../components/HeaderMenuSecundary'

export default function () {
  const navigation = useNavigation();
  return (
    <SafeAreaView>
      <ScrollView>
        <View style={Styles.container}>
          <HeaderSecundary/>
          <Header nickName="Renata Mendes" source={AvatarHome} />
          {/* Seção de saldo e escolhas das contas de banco */}
          <View style={Styles.content}>
            <View style={Styles.titulo}>
              <Text style={Styles.textTitulo}>Categorias</Text>
            </View>
          </View>
          {/* Seção de Botoes flutuantes */}
          <View style={Styles.sectionButtons}>
            <View style={Styles.button}>
              <TouchableOpacity>
                <Image source={IconPlusCircle} style={Styles.iconCirclePlus} />
              </TouchableOpacity>
              <Text style={Styles.buttonText}>
                Criar Nova{"\n"}Categoria
              </Text>
            </View>
            <View style={Styles.button}>
              <TouchableOpacity>
                <Image source={IconCategorias} style={Styles.iconCirclePlus} />
              </TouchableOpacity>
              <Text style={Styles.buttonText}>Editar{"\n"}Categorias</Text>
            </View>
          </View>
          {/* Entradas e Saidas*/}
          <View style={Styles.contentEntrada}>
            <View style={Styles.boxTitulo}>
              <Text style={Styles.tituloEntrada}>Entradas</Text>
            </View>

            <View style={Styles.containerEntrada}>
              <Text style={Styles.textoptions}>ENTRADAS OPERACIONAIS</Text>
              <TouchableOpacity>
                <Image source={IconArrow} style={Styles.iconArrow}/>
              </TouchableOpacity>
            </View>
            <View style={Styles.containerEntrada}>
              <Text style={Styles.textoptions}>ENTRADAS NÃO OPERACIONAIS</Text>
              <TouchableOpacity>
                <Image source={IconArrow} style={Styles.iconArrow}/>
              </TouchableOpacity>
            </View>
            <View style={Styles.containerEntrada}>
              <Text style={Styles.textoptions}>ENTRADAS FINANCEIRAS</Text>
              <TouchableOpacity>
                <Image source={IconArrow} style={Styles.iconArrow}/>
              </TouchableOpacity>
            </View>
          </View>
          {/* Saida */}
          <View style={Styles.contentEntrada}>
            <View style={Styles.boxTitulo}>
              <Text style={Styles.tituloEntrada}>Saidas</Text>
            </View>

            <View style={Styles.containerEntrada}>
              <Text style={Styles.textoptions}>Saídas Ligadas a Venda</Text>
              <TouchableOpacity>
                <Image source={IconArrow} style={Styles.iconArrow}/>
              </TouchableOpacity>
            </View>
            <View style={Styles.containerEntrada}>
              <Text style={Styles.textoptions}>Saídas REGULARES</Text>
              <TouchableOpacity>
                <Image source={IconArrow} style={Styles.iconArrow}/>
              </TouchableOpacity>
            </View>
            <View style={Styles.containerEntrada}>
              <Text style={Styles.textoptions}>Saídas EVENTUAIS</Text>
              <TouchableOpacity>
                <Image source={IconArrow} style={Styles.iconArrow}/>
              </TouchableOpacity>
            </View>
            <View style={Styles.containerEntrada}>
              <Text style={Styles.textoptions}>Saídas COM HUMANOS</Text>
              <TouchableOpacity>
                <Image source={IconArrow} style={Styles.iconArrow}/>
              </TouchableOpacity>
            </View>
            <View style={Styles.containerEntrada}>
              <Text style={Styles.textoptions}>INVESTIMENTOS</Text>
              <TouchableOpacity>
                <Image source={IconArrow} style={Styles.iconArrow}/>
              </TouchableOpacity>
            </View>
          </View>

          
          



          
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}
