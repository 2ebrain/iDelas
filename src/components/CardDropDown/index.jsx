import React from 'react'
import { List} from 'react-native-paper'
import {StyleSheet, View} from 'react-native'

const MyComponent = (props) => {
  const [expanded, setExpanded] = React.useState(true);

  const handlePress = () => setExpanded(!expanded);

  return (
    <View >
      <List.Section>
      <List.Accordion
        title={props.valorMountant}
        titleStyle={styles.textCash}
        left={props => <List.Icon {...props} icon="currency-usd" color='#31D57C'/>}>
        <List.Item title="First item" />
        <List.Item title="Second item" />
      </List.Accordion>
    </List.Section>
    </View>
  );
};

const styles = StyleSheet.create({
  
  textCash:{
    color:'#777777',
    borderBottomWidth:2,
  },
})

export default MyComponent;