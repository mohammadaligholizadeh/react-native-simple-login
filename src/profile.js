import React, { Component } from 'react';
import { StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native';

export default class ProfileScreen extends Component {

    render() {
        return (
            <View style={styles.container}>
                <Text>نام :</Text>
                <Text>{this.props.navigation.state.params.name}</Text>
                <Text>نام خانوادگی :</Text>
                <Text>{this.props.navigation.state.params.fname}</Text>
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
    }
});