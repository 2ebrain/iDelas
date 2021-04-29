import React from 'react'
import {Image, 
        Text, TouchableOpacity} from 'react-native'
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
      <Image source={props.source} style={[Style.iconButton,
                                        {width:props.width},
                                        {height:props.height}]} 
      />
      <Text style={Style.textBotao}>{props.tituloButon}</Text>
    </TouchableOpacity>
  )
}