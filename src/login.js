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
    Image,
    View
} from 'react-native';

// import Login from './src/components/login/login';
import Logindata from './components/data/data';
import remote from './components/action/remote';

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
        // const { navigate } = this.props.navigation;

        const success = (user,pass) => {
            remote.getContent(user,pass).then((res) => {
                this.setState({
                    content:res.code
                });
                if (res.code === 'SUCCESS') {
                    this.props.navigation.navigate('ProfileScreen', {
                        name: res.data.name,
                        fname: res.data.fname,
                        age: res.data.age,
                        pic: res.data.profilepic,
                    });
                }
            });
        }

        // const { navigate } = this.props.navigation;

        return (
            <View style={styles.container}>

                {(this.state.content == "ERROR") ? (<View style={styles.error}><Text style={styles.notify}>نام کاربری یا کلمه عبور نامعتبر است</Text></View>) : null }

                <Logindata />
                <View style={{height:20}} />

                {/*<Text style={styles.notify}>*/}
                {/*{this.state.content}*/}
                {/*</Text>*/}

                {/*if({this.state.content} == "SUCCESS"){*/}

                {/*}*/}

                {/*<Login />*/}
                <View style={styles.textall}>
                    <View style={styles.texticon}>
                        <TextInput style={styles.input} onChangeText={this.user} placeholder={"نام کاربری"} underlineColorAndroid="rgba(0,0,0,0)" /><Image source={require('../img/user.png')} style={styles.userimg} />
                    </View>
                    <View style={{height:10}} />
                    <View style={styles.texticon}>
                        <TextInput secureTextEntry={true} style={styles.input} onChangeText={this.pass} placeholder={"کلمه ی عبور"} underlineColorAndroid="rgba(0,0,0,0)" /><Image source={require('../img/lock.png')} style={styles.lockimg} />
                    </View>
                </View>

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
        // height:5,
    },
    error:{
        backgroundColor:"#ff8686",
        width:410,
        height:80,
        flexDirection: 'column',
        position: 'absolute',
        top:0,
    },
    pass:{
        backgroundColor:'green',
    },
    notify: {
        color: '#F5FCFF',
        fontWeight:'bold',
        textAlign:'center',
    },
    button: {
        backgroundColor: '#25c6da',
        color: 'white',
        height: 40,
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
        textAlign:'right',
        paddingRight:40,
        borderRadius: 5,
    },
    userimg:{
        width:28,
        height:26,
        position:'absolute',
        right:12,
        top:10,
    },
    lockimg:{
        width:18,
        height:28,
        position:'absolute',
        right:15,
        top:5,
    },
    texticon:{
        flexDirection:'row',
    },
});