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

import Login from './src/components/login/login';
import Logindata from './src/components/data/data';
import remote from './src/components/action/remote';

export default class loginapp extends Component {

    constructor(props){
        super(props);
            this.state = {
                content:[]
            }
    }

    componentWillMount(){
        remote.getContent().then((res) => {
           this.setState({
               content:res.code
           })
        });
    }

  render() {
    return (
      <View style={styles.container}>

        <Logindata />

          <Text style={styles.notify}>
              {this.state.content}
          </Text>

        <Login />
        
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 2,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
    notify: {
        textAlign: 'center',
        color: '#333333',
        marginBottom: 5,
        fontWeight:'bold',
        // textColor:'#506482'
    },
});

AppRegistry.registerComponent('loginapp', () => loginapp);
