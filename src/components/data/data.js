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
                <View style={styles.imgpos}>
                    <Image source={require('../../../img/logo.png')} style={styles.image} />
                </View>
                <View>
                    <Text style={styles.notify} >اطلاعات خود را وارد کنید</Text>
                </View>

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
        imgpos:{
            alignItems:"center",
        },
        notify: {
            textAlign: 'center',
            color: '#333333',
            marginBottom: 5,
            // fontWeight:'bold',
            fontFamily:'IRANSansMobile(NoEn)_Medium',
            fontSize: 20,
        },
    });