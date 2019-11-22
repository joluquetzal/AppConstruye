import React, { Component } from 'react';
import { StyleSheet, View, Text, Image} from 'react-native';

export default class Logo extends Component {
    render(){
        return(
            <View style={styles.container}>
                <Image style={{width: 90, height: 110}}
                source={{uri: 'http://www.itamconstruye.itam.mx/wp-content/uploads/Logo-sin-letras.png'}}/>
                <Text style={styles.logoText}>ITAM CONSTRUYE</Text>
            </View>
        )
    }

}
const styles = StyleSheet.create({
    container: {
      flexGrow: 1,
      justifyContent: 'flex-end',
      alignItems: 'center',
    },
    logoText: {
        fontSize:30,
        color: '#000000',
        marginVertical:15,
    }
  });