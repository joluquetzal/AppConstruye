import React, { Component } from 'react';
import { StyleSheet, View, Text, StatusBar } from 'react-native';

import Login from './src/pages/login'
import Signup from './src/pages/signup'

export default class App extends Component {
  
  render() {
    return (
      <View style={styles.container}>
        <StatusBar backgroundColor= "#009faf" barStyle="light-content"/>
        <Login/>
      </View>
   
    );
  }
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#fafafa',
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  }
});
