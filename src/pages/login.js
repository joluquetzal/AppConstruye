import React, { Component } from 'react';
import { StyleSheet, View, Text, Image } from 'react-native';

import Logo from '../components/logo'
import Form from '../components/form'

export default class Login extends Component {
    render(){
        return(
            <View style={styles.container}>
                <Logo/>
                <Form type="Ingresa"/>
                <View style={styles.SignupTextCont}>
                    <Text style={styles.signupText}>¿Todavia no tienes una cuenta?</Text>
                    <Text style={styles.signupButton}> Registrate</Text>
                </View>
            </View>
        )
    }

}

const styles = StyleSheet.create({
    container: {
      backgroundColor: '#fafafa',
      flexGrow: 1,
      alignItems: 'center',
      justifyContent: 'center',
    },
    SignupTextCont: {
        flexGrow:1,
        alignItems:'center',
        justifyContent:'center',
        paddingVertical:20,
        flexDirection:'row',
    },
    signupText: {
        color: '#000000',
        fontSize:17,
    },
    signupButton: {
        color: '#000000',
        fontSize: 16,
        fontWeight: '500',
    }
  });
