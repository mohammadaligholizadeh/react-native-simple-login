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
                    <Image style={styles.image} source={{uri:'https:\/\/media.licdn.com\/mpr\/mpr\/shrinknp_400_400\/AAEAAQAAAAAAAAeSAAAAJGRlODc0Y2IwLTU3MTYtNDQ2MC05ZDU0LWQzZDM5OGIwMjVjNw.jpg'}} />
                </View>
                <View style={styles.blue}>
                    <Text style={styles.data}>نام :<Text style={styles.res}>{this.props.navigation.state.params.name}</Text></Text>
                    <Text style={styles.data}>نام خانوادگی :<Text style={styles.res}>{this.props.navigation.state.params.fname}</Text></Text>
                    <Text style={styles.data}>سن :<Text style={styles.res}>{this.props.navigation.state.params.age}</Text></Text>
                </View>
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
        backgroundColor: '#F5FCFF',
        flexDirection: 'column',
    },
    blue: {
        backgroundColor:'#e4fbff',
        width:300,
        height:200,
        borderStyle:'solid',
    },
    data:{
        textAlign:'center',
        lineHeight:50,
    },
    res:{
        fontWeight:'bold',
    },
    image:{
        height:128,
        width: 128,
        borderRadius: 64
    },
    button:{
        backgroundColor:'#f66748',
        color: 'white',
        height: 30,
        lineHeight: 30,
        marginTop: 10,
        textAlign: 'center',
        width: 250
    }
});