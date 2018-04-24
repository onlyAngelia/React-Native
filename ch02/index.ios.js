/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  View
} from 'react-native';

export default class ch02 extends Component {
  render() {
    return (
      <View style={styles.container}>
        <View style = {styles.View1}></View>
        <View style = {styles.View2}></View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    // flexDirection: 'row',
    // flexWrap: 'wrap',
    // justifyContent: 'center',
    // alignItems: 'center',
    // backgroundColor: 'gray',
  },
  View1:{
    flex:1,
    backgroundColor: 'red'
  },
  View2:{
    flex:1,
    backgroundColor: 'green',
    // alignSelf: 'center'
  },
});

AppRegistry.registerComponent('ch02', () => ch02);
