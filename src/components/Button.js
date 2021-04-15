import React from 'react'
import { TouchableOpacity, Text, StyleSheet} from 'react-native'


export default ( { onPress , tittle, color, width, marginBottom, marginTop } ) => {
    return(
    <TouchableOpacity style={[styles.button, 
                                {backgroundColor: color}, 
                                {width: width},
                                {marginBottom: marginBottom},
                                {marginTop: marginTop}
                            ]} 
                      onPress={ onPress }>
        <Text style={styles.buttonText}>{tittle}</Text>
    </TouchableOpacity>
    );
}

const styles = StyleSheet.create({
    button:{
        height:41,
        borderRadius:30,
        elevation: 3,
        justifyContent: 'center',
        alignItems:'center',
    },
    buttonText:{
        fontSize: 15,
        color: "#fff", 
        fontWeight: "bold",
    },
})