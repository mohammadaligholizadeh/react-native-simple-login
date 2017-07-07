import React, { Component } from 'react';
import {
    AppRegistry,
    StyleSheet,
    Text,
    Image,
    View
} from 'react-native';

export default class Logindata extends Component{

    render(){
        return(
            <View>

                <Image source={require('../../../img/logo.png')} style={styles.image} />

                <Text style={styles.notify} >
                    اطلاعات خود را وارد کنید
                </Text>

            </View>
        );
    }

}

const styles =
    StyleSheet.create({
        image: {
            width:200,
            height:200,
            resizeMode: 'contain'
        },
        notify: {
            textAlign: 'center',
            color: '#333333',
            marginBottom: 5,
            fontWeight:'bold',
            // textColor:'#506482'
        },
    });