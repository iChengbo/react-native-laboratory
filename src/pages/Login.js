/*
 * @Author: iChengbo
 * @Date: 2020-01-19 15:20:06
 * @LastEditors: iChengbo
 * @LastEditTime: 2020-05-31 11:48:46
 * @FilePath: /RNLaboratory/src/pages/Login.js
 */ 
import React from 'react';
import { View } from 'react-native';
import { Button, Text } from 'native-base';


class Login extends React.Component {
    render() {
        return (
            <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
                <Text>Login Screen</Text>
                <Button light style={{ marginTop: 10 }} onPress={() => this.props.navigation.navigate('Main')}>
                    <Text>Login</Text>
                </Button>
                <Button light style={{ marginTop: 10 }} onPress={() => this.props.navigation.navigate('Register')}>
                    <Text>Register</Text>
                </Button>
            </View>
        );
    }
}

export default Login;