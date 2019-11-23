import React, { Component } from 'react';
import { StyleSheet, View, StatusBar } from 'react-native';

import Route from './src/rout';
import Login from './src/pages/login';
export default class App extends Component {
  
  render() {
    return (
      <View style={styles.container}>
        <StatusBar backgroundColor= "#009faf" barStyle="light-content"/>
        <Route/>
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
