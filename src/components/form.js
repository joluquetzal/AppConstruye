import React, { Component } from 'react';
import { StyleSheet, View, Text, TextInput, TouchableOpacity} from 'react-native';

export default class Logo extends Component {

    render(){
        return(
            <View style={styles.container}>
                <TextInput style={styles.inputBox} 
                underlineColorAndroid= 'rgba(0,0,0,0)' 
                placeholder="Clave única:"
                placeholderTextColor= '#ffff'
                />
                <TextInput style={styles.inputBox} 
                underlineColorAndroid= 'rgba(0,0,0,0)' 
                placeholder="Contraseña:"
                secureTextEntry={true}
                placeholderTextColor= '#ffff'
                />

                <TouchableOpacity style={styles.button}>
                    <Text style={styles.buttonText}>{this.props.type}</Text>
                </TouchableOpacity>
            </View>
        )
    }

}
const styles = StyleSheet.create({
    container: {
      flexGrow: 1,
      justifyContent: 'center',
      alignItems: 'center',
    },
    inputBox: {
        width: 300,
        height: 50,
        backgroundColor: 'rgba(7, 64, 135, 0.8)',
        borderRadius: 25,
        paddingHorizontal:16,
        fontSize:19,
        color:'#ffff',
        marginVertical:12,
    },
    button: {
        width:300,
        backgroundColor: 'rgb(58, 115, 130)',
        borderRadius:17,
        marginVertical:20,
        paddingVertical:13,
    },
    buttonText: {
        fontSize:16,
        fontWeight:'500',
        color:'#ffffff',
        textAlign:'center',
    }
  });