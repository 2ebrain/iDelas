import React from 'react'

import {StyleSheet, 
        TouchableOpacity, 
        Text, 
        View} from 'react-native'

import EyeGray from '../assets/eye-gray.svg'
import EditGray from '../assets/edit-gray.svg'
import DownloadGray from '../assets/download-gray.svg'



export default (props) =>{
  return(
    <View style={styles.cardPlan}>
            <Text style={styles.textCardPlan}>{props.titlePlan}</Text>

            <View style={styles.buttonsCardPlans}>
              <TouchableOpacity style={styles.buttonOptionPlan}>
                <EyeGray width={15} heigth={10}/>
                <Text style={styles.textButtonOptionPlan}>Visualizar</Text>
              </TouchableOpacity>
              <TouchableOpacity style={styles.buttonOptionPlan}>
                <EditGray width={12} heigth={12}/>
                <Text style={styles.textButtonOptionPlan}>Editar</Text>
              </TouchableOpacity>
              <TouchableOpacity style={styles.buttonOptionPlan}>
                <DownloadGray width={13} heigth={13}/>
                <Text style={styles.textButtonOptionPlan}>Download</Text>
              </TouchableOpacity>
            </View>
            
    </View>

  )
}


const styles = StyleSheet.create({
  cardPlan:{
    backgroundColor:'#fff',
    borderRadius:10,
    marginBottom:13,
  },
  textCardPlan:{
    fontFamily:'gotham-medium', 
    color:'#691CC7', 
    fontSize:13, 
    marginLeft:16, 
    marginTop:10
  },
  buttonsCardPlans:{
    flexDirection:'row', 
    width: '100%',
    justifyContent:'space-around',
    alignItems:'center',
  },
  buttonOptionPlan:{
    backgroundColor:'#F7EAE4', 
    width:88, 
    height:22, 
    flexDirection:'row', 
    borderRadius:10, 
    padding: 5,
    justifyContent:'space-evenly', 
    alignItems:'center', 
    margin:14
  },
  textButtonOptionPlan:{
    fontFamily:'gotham-medium', 
    fontSize:10, 
    color:'#777777'
  },
})