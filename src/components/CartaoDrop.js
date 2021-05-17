import React, {useState} from 'react'
import {StyleSheet, TouchableOpacity, Text} from 'react-native'
import Icon from 'react-native-vector-icons/FontAwesome5'

import { ListItem } from 'react-native-elements'

export default () =>{
  const  [expanded, setExpanded] = useState(false)

  const list = [
    {
      contaCorrente: 'Conta Corrente',
      valores:'R$ / % da meta',
      obrigacoesTrabalhistas: 'Obrigacoes Trabalhistas',
      reservaFinanceira: 'Reserva Financeira',
      Investimentos: 'Investimentos',
      total: 'Total'
    }
  ]

  function log(){

  }
  
  return(
      <ListItem.Accordion
        content={
          <>
            <Icon name='dollar-sign' size={20}  color='#31D57C'/>

            <ListItem.Content>
              <ListItem.Title style={styles.textTitle}>R$ 55.265,00</ListItem.Title>
            </ListItem.Content>

            <TouchableOpacity>
              <Icon name='eye' color='#777777'size={15} />
            </TouchableOpacity>
          </>
        }
        isExpanded={expanded}
        onPress={() => {
          setExpanded(!expanded);
        }}
        style={styles.ListAccordion}
        containerStyle={{backgroundColor:'#fff', height:40, elevation:3, borderRadius:10,}}
      >
        {list.map((l, i) => (
          <ListItem key={i} onPress={log} style={styles.subContainer} >
        
            <ListItem.Content style={styles.containerList}>

              <ListItem.Content style={styles.rowList}>
                <ListItem.Title style={styles.titleSubitem}>{l.contaCorrente}</ListItem.Title>
                <ListItem.Title style={styles.titleSubitem}>{l.valores}</ListItem.Title>
              </ListItem.Content>
              <ListItem.Content style={styles.rowList}>
                <ListItem.Title style={styles.titleSubitem}>{l.obrigacoesTrabalhistas}</ListItem.Title>
                <ListItem.Title style={styles.titleSubitem}>{l.valores}</ListItem.Title>
              </ListItem.Content>
              <ListItem.Content style={styles.rowList}>
                <ListItem.Title style={styles.titleSubitem}>{l.reservaFinanceira}</ListItem.Title>
                <ListItem.Title style={styles.titleSubitem}>{l.valores}</ListItem.Title>
              </ListItem.Content>
              <ListItem.Content style={styles.rowList}>
                <ListItem.Title style={styles.titleSubitem}>{l.Investimentos}</ListItem.Title>
                <ListItem.Title style={styles.titleSubitem}>{l.valores}</ListItem.Title>
              </ListItem.Content>
              <ListItem.Content style={styles.rowList}>
                <ListItem.Title style={styles.titleSubitem}>{l.total}</ListItem.Title>
                <ListItem.Title style={styles.titleSubitem}>{l.valores}</ListItem.Title>
              </ListItem.Content>

                <TouchableOpacity style={styles.buttonDetais}>
                  <Text style={styles.buttonDetaisText}>Detalhes</Text>
                </TouchableOpacity>
            </ListItem.Content>
          
          </ListItem>
        ))}
      </ListItem.Accordion>
  )
}



const styles = StyleSheet.create({
  ListAccordion:{
    backgroundColor:'#fff', 
    elevation:3, 
    borderRadius:10,

  },
  subContainer:{
    borderRadius:10,
    elevation:3,
  },
  containerList:{
    borderRadius:10,
  },
  rowList:{
    flexDirection:'row', 
    justifyContent:'space-between', 
    width:'100%',
    marginBottom:15,
  },
  textTitle:{
    color:'#777777',
    fontSize:12,
    fontFamily:'gotham-medium',
    marginLeft:12,
  },
  titleSubitem:{
    fontSize:11,
    fontFamily:'gotham-book',
    color:'#676767',
  },



  buttonDetais:{
    width:293,
    height:29,
    backgroundColor:'#F9A179',
    borderRadius:10,
    marginTop:3,
    justifyContent:'center',
    alignItems:'center',
  },
  buttonDetaisText:{
    fontSize:11,
    color:'#fff',

  },
})