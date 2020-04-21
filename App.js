/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React, { Component } from 'react';
import {
  SafeAreaView,
  StyleSheet,
  ScrollView,
  View,
  Text,
  StatusBar,
} from 'react-native';

import Root from "./src/main";

export default class App extends Component {
  render(){
    return (
      <View style={styles.container}>
        <Root {...this.props}/>
      </View>
    )
  }
  
};

const styles = StyleSheet.create({
  container: {
    flex: 1
  }
});


