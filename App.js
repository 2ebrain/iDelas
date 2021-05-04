import React from 'react'
import { StyleSheet, View} from 'react-native'

import { useFonts } from 'expo-font'

import Routes from './src/routes'

export default function App() {
  // Fazendo o carregamento das fontes para poder utilizar
  const [loaded] = useFonts({
    'gotham-light': require('./src/fonts/GothamLight.ttf'),
    'gotham-regular': require('./src/fonts/GothamRegular.ttf'),
    'gotham-book': require('./src/fonts/GothamBook.ttf'),
    'gotham-medium': require('./src/fonts/GothamMedium.ttf'),
    'gotham-bold': require('./src/fonts/GothamBold.ttf'),
  })
  // caso as fontes não carregue ocorrera um erro
  if (!loaded) {
    return null
  }
  return (
    <View style={styles.container}>
     <Routes/> 
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
})
