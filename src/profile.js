import React, { Component } from 'react';
import { StyleSheet, Text, TextInput, TouchableOpacity, View , Image } from 'react-native';

export default class ProfileScreen extends Component {

    render() {

        const logout = () => {
            this.props.navigation.navigate('LoginScreen');
        }

        return (
            <View style={styles.container}>
                <View>
                    <Image style={styles.image} source={require('../img/profile.jpg')} />
                </View>
                <View style={{height:40}} />
                <View style={styles.blue}>
                    <Text style={styles.data}>نام :<Text style={styles.res}>{this.props.navigation.state.params.name}</Text></Text>
                    <Text style={styles.data}>نام خانوادگی :<Text style={styles.res}>{this.props.navigation.state.params.fname}</Text></Text>
                    <Text style={styles.data}>سن :<Text style={styles.res}>{this.props.navigation.state.params.age}</Text></Text>
                </View>
                <View style={{height:80}} />
                <TouchableOpacity onPress={()=>logout()}>
                    <Text style={styles.button}>خروج از سیستم</Text>
                </TouchableOpacity>
            </View>
        )
    }

}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#fcfcfc',
        flexDirection: 'column',
    },
    blue: {
        backgroundColor:'#e4fbff',
        width:250,
        height:200,
        borderRadius: 5,
        borderWidth: 0.5,
        borderColor: '#979797',
    },
    data:{
        textAlign:'center',
        lineHeight:50,
        fontFamily:'IRANSansMobile(NoEn)_Medium',
    },
    res:{
        fontWeight:'bold',
        fontFamily:'IRANSansMobile(NoEn)_Medium',
    },
    image:{
        height:128,
        width: 128,
        borderRadius: 64
    },
    button:{
        backgroundColor:'#f66748',
        color: 'white',
        height: 45,
        lineHeight: 30,
        marginTop: 10,
        textAlign: 'center',
        fontFamily:'IRANSansMobile(NoEn)_Medium',
        width: 250,
        borderRadius: 5,
    }
});