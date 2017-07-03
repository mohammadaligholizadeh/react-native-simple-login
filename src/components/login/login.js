import React, { Component } from 'react';
import {
    AppRegistry,
    StyleSheet,
    TextInput,
    Button,
    View
} from 'react-native';

export default class Login extends Component{

    render(){
        return(
            <View style={styles.container}>

                <TextInput style={styles.input} placeholder={"نام کاربری"} />

                <TextInput secureTextEntry={true} style={styles.input} placeholder={"کلمه ی عبور"} />

                <Button style={styles.button} title="ورود به سیستم" />

            </View>
        );
    }

}

const styles =
    StyleSheet.create({
        container:{
            flex:1,
        },
        button:{
            color:'#25c6da',
        },
        input: {
            height: 50,
            width:300,
            borderColor: 'gray',
            borderWidth: 1,
            textAlign:'right'
        },
    });