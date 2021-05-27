import React from 'react'
import {Text, 
        StyleSheet, 
        View, 
        TouchableOpacity} from 'react-native'


export default (props) => {
  // const bordaAmais = props.testeTitulo  ? true : null

  function inputAmais(props){
    return (
      <TouchableOpacity style={{backgroundColor:'#D8EADB', width:'60%', paddingLeft:13, borderBottomEndRadius:10, borderBottomLeftRadius:10, justifyContent:'center', alignItems:'flex-start'}}>
        <Text style={styles.textMedium8}>{props.testeTitulo}</Text>
      </TouchableOpacity>
      )
  }
  

  return (
    <>
      <View style={styles.containerInitial}>
        <View style={[styles.containerSecundary, ]}>
          <TouchableOpacity style={[styles.borderRadiusBottom10, 
                                  styles.alignJustifyCenter, 
                                  styles.withHeigthInput,
                                  styles.paddingHorizontalLeft15,
                                  styles.backgroundColorPrimaryInput,
                                  {backgroundColor: props.backgroundColorPrimary || '#AC58DB'}
          ]}>
            <Text
              style={[styles.textMedium8, { color: props.color || "#fff" }]}
            >
              {props.titlePrimary}
            </Text>

          </TouchableOpacity>



          <TouchableOpacity style={{flexDirection:'row',width:'100%', justifyContent:'space-between'}}>
            <View>
              <TouchableOpacity style={[styles.borderRadiusBottom10, 
                                    styles.alignJustifyCenter, 
                                    styles.withHeigthInput,
                                    styles.paddingHorizontalLeft15
              ]}>
                <Text
                  style={[styles.textMedium8, { color: props.colorSecondary || "#3B3B3B" }]}
                >
                  {props.titleSecondary}
                </Text>
                
              </TouchableOpacity>
            </View>

            {props.testeTitulo ? inputAmais(props) : null}
            
          </TouchableOpacity>



        </View>

        <TouchableOpacity style={[styles.borderRadiusBottom10, 
                                  styles.alignJustifyCenter, 
                                  styles.withHeigthInput,
                                  styles.paddingHorizontalLeft15]}
        >
          <Text style={[styles.textMedium8, { color: props.color || "#fff" }]}>
            {props.titleThird}
          </Text>
        </TouchableOpacity>
      </View>
    </>
  );
}


const styles = StyleSheet.create({

  containerInitial:{
    width: "90%",
    alignItems: "center",
    backgroundColor: "#207345",
    borderBottomLeftRadius: 10,
    borderBottomRightRadius: 10,
  },
  containerSecundary:{
    width: "100%",
    alignItems: "center",
    backgroundColor: "#35FEAB",
    borderBottomLeftRadius: 10,
    borderBottomRightRadius: 10,
  },

  backgroundColorIntermediario:{
    backgroundColor:'#D8EADB'
  },
  backgroundColorPrimaryInput:{
    backgroundColor:'#AC58DB',
  },
  backgroundColorSecondaryInput:{
    backgroundColor:'#35FEAB',
  },
  backgroundColorSecondaryInput:{
    backgroundColor:'#35FEAB',
  },
  paddingHorizontalLeft15:{
    paddingHorizontal:15,
  },
  withHeigthInput:{
    width:'100%',
    height:24,
  },
  alignJustifyCenter:{
    justifyContent:'center',
    alignItems:'flex-start',
  },
  borderRadiusBottom10:{
    borderBottomLeftRadius:10,
    borderBottomRightRadius:10,
  },
  textMedium8:{
  fontSize:8,
  fontFamily:'gotham-medium',
  textTransform:'uppercase',
  },
})