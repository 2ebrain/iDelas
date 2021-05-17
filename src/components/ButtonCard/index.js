import React from 'react'
import {Text, TouchableOpacity} from 'react-native'

import Style from './style'

// Componente de ButtonCard, ele recebe propriedades do componente pai
// para que seja mais reutilizavel
// seu css tambem é externo para melhor vialização
export default (props) => {
  return (
    <TouchableOpacity style={[Style.botao, 
                            {borderTopRightRadius:props.borderTopRightRadius},
                            {borderBottomEndRadius:props.borderBottomEndRadius},
                            {borderBottomLeftRadius:props.borderBottomLeftRadius},
                            {borderTopLeftRadius:props.borderTopLeftRadius}]}
                      onPress={props.onPress}>
     {/* props.children recebe todo o valor que
         for adicionado no componente de maneira
         <componente></componente>
     */}
      {props.children}
      
      {/* Titulo do butão */}
      <Text style={Style.textBotao}>{props.tituloButon}</Text>
    </TouchableOpacity>
  )
}