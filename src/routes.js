import React from 'react'

import { NavigationContainer } from '@react-navigation/native'
import { createStackNavigator, TransitionSpecs, CardStyleInterpolators } from '@react-navigation/stack'

import Login from '../src/pages/Login'
import Register from '../src/pages/Register'

import Confirmation from '../src/pages/Confirmation'
import TermsContracts from '../src/pages/TermsContracts'

import NiveisDeCixa from '../src/pages/NiveisDeCaixa'
import Detalhes from '../src/pages/Detalhes'
import Home from './pages/Home'
import ConciliacaoDeContas from './pages/ConciliacaoDeContas'
import TestView from './pages/ViewLoading'
import ProdutosServicos from './pages/ProdutosServicos'
import Relatorios from './pages/Relatorios'
import Categorias from './pages/Categorias'
import MyNegoces from './pages/MeuNegocio'
import FuncionariosSocios from './pages/FuncionariosSocios'
import Entradas from './pages/Entradas'
import Investimento from './pages/Investimentos'
import Dividendos from './pages/Dividendos'
import ObrigacoesTrabalhistas from './pages/ObrigacoesTrabalhistas'
import Saida from './pages/Saida'
import CobrancasPendentes from './pages/CobrancasPendentes'

const { Navigator, Screen} = createStackNavigator();



export default function Routes() {
    
   return (
     <NavigationContainer>
       <Navigator screenOptions={{ headerShown: false }}>
         <Screen
           name="Login"
           component={Login}
           options={{
             gestureEnabled: true,
             gestureDirection: "horizontal",
             cardStyleInterpolator: CardStyleInterpolators.forHorizontalIOS,
           }}
         />
         <Screen
           name="Register"
           component={Register}
           options={{
             gestureEnabled: true,
             gestureDirection: "horizontal",
             cardStyleInterpolator: CardStyleInterpolators.forHorizontalIOS,
           }}
         />
         <Screen name="Confirmation" component={Confirmation} />
         <Screen
           name="TermsContracts"
           component={TermsContracts}
           options={{
             gestureEnabled: true,
             gestureDirection: "horizontal",
             cardStyleInterpolator: CardStyleInterpolators.forHorizontalIOS,
           }}
         />
         <Screen
           name="NiveisDeCaixa"
           component={NiveisDeCixa}
           options={{
             gestureEnabled: true,
             gestureDirection: "horizontal",
             cardStyleInterpolator: CardStyleInterpolators.forHorizontalIOS,
           }}
         />
         <Screen
           name="Detalhes"
           component={Detalhes}
           options={{
             gestureEnabled: true,
             gestureDirection: "horizontal",
             cardStyleInterpolator: CardStyleInterpolators.forHorizontalIOS,
           }}
         />
         <Screen
           name="Home"
           component={Home}
           options={{
             gestureEnabled: true,
             gestureDirection: "horizontal",
             cardStyleInterpolator: CardStyleInterpolators.forHorizontalIOS,
           }}
         />
         <Screen
           name="ConciliacaoDeContas"
           component={ConciliacaoDeContas}
           options={{
             gestureEnabled: true,
             gestureDirection: "horizontal",
             cardStyleInterpolator: CardStyleInterpolators.forHorizontalIOS,
           }}
         />
         <Screen
           name="TestView"
           component={TestView}
           options={{
             gestureEnabled: true,
             gestureDirection: "horizontal",
             cardStyleInterpolator: CardStyleInterpolators.forHorizontalIOS,
           }}
         />
         <Screen
           name="ProdutosServicos"
           component={ProdutosServicos}
           options={{
             gestureEnabled: true,
             gestureDirection: "horizontal",
             cardStyleInterpolator: CardStyleInterpolators.forHorizontalIOS,
           }}
         />
         <Screen
           name="Relatorios"
           component={Relatorios}
           options={{
             gestureEnabled: true,
             gestureDirection: "horizontal",
             cardStyleInterpolator: CardStyleInterpolators.forHorizontalIOS,
           }}
         />
         <Screen
           name="Categorias"
           component={Categorias}
           options={{
             gestureEnabled: true,
             gestureDirection: "horizontal",
             cardStyleInterpolator: CardStyleInterpolators.forHorizontalIOS,
           }}
         />
         <Screen
           name="MyNegoces"
           component={MyNegoces}
           options={{
             gestureEnabled: true,
             gestureDirection: "horizontal",
             cardStyleInterpolator: CardStyleInterpolators.forHorizontalIOS,
           }}
         />
         <Screen
           name="FuncionariosSocios"
           component={FuncionariosSocios}
           options={{
             gestureEnabled: true,
             gestureDirection: "horizontal",
             cardStyleInterpolator: CardStyleInterpolators.forHorizontalIOS,
           }}
         />
         <Screen
           name="Entradas"
           component={Entradas}
           options={{
             gestureEnabled: true,
             gestureDirection: "horizontal",
             cardStyleInterpolator: CardStyleInterpolators.forHorizontalIOS,
           }}
         />
         <Screen
           name="Investimento"
           component={Investimento}
           options={{
             gestureEnabled: true,
             gestureDirection: "horizontal",
             cardStyleInterpolator: CardStyleInterpolators.forHorizontalIOS,
           }}
         />
         <Screen
           name="Dividendos"
           component={Dividendos}
           options={{
             gestureEnabled: true,
             gestureDirection: "horizontal",
             cardStyleInterpolator: CardStyleInterpolators.forHorizontalIOS,
           }}
         />
         <Screen
           name="ObrigacoesTrabalhistas"
           component={ObrigacoesTrabalhistas}
           options={{
             gestureEnabled: true,
             gestureDirection: "horizontal",
             cardStyleInterpolator: CardStyleInterpolators.forHorizontalIOS,
           }}
         />
         <Screen
           name="Saida"
           component={Saida}
           options={{
             gestureEnabled: true,
             gestureDirection: "horizontal",
             cardStyleInterpolator: CardStyleInterpolators.forHorizontalIOS,
           }}
         />
         <Screen
           name="CobrancasPendentes"
           component={CobrancasPendentes}
           options={{
             gestureEnabled: true,
             gestureDirection: "horizontal",
             cardStyleInterpolator: CardStyleInterpolators.forHorizontalIOS,
           }}
         />
       </Navigator>
     </NavigationContainer>
   );
}