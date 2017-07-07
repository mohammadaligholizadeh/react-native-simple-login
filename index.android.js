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
  TextInput,
  TouchableOpacity,
  View
} from 'react-native';

// import Login from './src/components/login/login';
import Logindata from './src/components/data/data';
import remote from './src/components/action/remote';
// import { StackNavigator } from 'react-navigation';

export default class loginapp extends Component {

    constructor(props){
        super(props);
            this.state = {
                content:[],
                user:'',
                pass:''
            }
    }

    // componentWillMount(){
    //     remote.getContent().then((res) => {
    //         this.setState({
    //             content:res.code
    //         })
    //     });
    // }

    user = (text) => {
        this.setState({user:text})
    }

    pass = (text) => {
        this.setState({pass:text})
    }

  render() {
      // var {navigator} = this.props

      const success = (user,pass) => {
          remote.getContent(user,pass).then((res) => {
              this.setState({
                  content:res.code
              })
          });
      }

    return (
      <View style={styles.container}>
        <Logindata />

          <Text style={styles.notify}>
              {this.state.content}
          </Text>

        {/*<Login />*/}

          <TextInput style={styles.input} onChangeText={this.user} placeholder={"نام کاربری"} />

          <TextInput secureTextEntry={true} style={styles.input} onChangeText={this.pass} placeholder={"کلمه ی عبور"} />

          <TouchableOpacity onPress={()=>success(this.state.user,this.state.pass)}>
              <Text style={styles.button}>ورود به سیستم</Text>
          </TouchableOpacity>
        
      </View>
    );
  }
}

var styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
    flexDirection: 'column',
  },
    notify: {
        textAlign: 'center',
        color: '#333333',
        marginBottom: 5,
        fontWeight:'bold',
        // textColor:'#506482'
    },
    button: {
        backgroundColor: '#25c6da',
        color: 'white',
        height: 30,
        lineHeight: 30,
        marginTop: 10,
        textAlign: 'center',
        width: 250
    },
    input: {
        height: 50,
        width:300,
        borderColor: 'gray',
        borderWidth: 1,
        textAlign:'right'
    },
});

AppRegistry.registerComponent('loginapp', () => loginapp);
