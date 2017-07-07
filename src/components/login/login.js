import React, { Component } from 'react';
import {
    AppRegistry,
    StyleSheet,
    TextInput,
    Button,
    View
} from 'react-native';



export default class Login extends Component{

    constructor(props){
        super(props);
        this.state = {
            user:'',
            pass:''
        }
    }

    user = (text) => {
        this.setState({user:text})
    }

    pass = (text) => {
        this.setState({pass:text})
    }

    render(){
        return(
            <View>

                <TextInput style={styles.input} onChangeText={this.user} placeholder={"نام کاربری"} />

                <TextInput secureTextEntry={true} style={styles.input} onChangeText={this.pass} placeholder={"کلمه ی عبور"} />

            </View>
        );
    }

}

const styles =
    StyleSheet.create({
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