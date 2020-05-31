/*
 * @Author: iChengbo
 * @Date: 2020-01-19 15:20:06
 * @LastEditors: iChengbo
 * @LastEditTime: 2020-05-31 12:49:52
 * @FilePath: /RNLaboratory/src/pages/Home.js
 */ 
import React from 'react';
import { View } from 'react-native';
import { Button, Text } from 'native-base';

class Home extends React.Component {
    render() {
        return (
            <View style={{ flex: 1 }}>
                <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
                    <Text>Home Screen!</Text>
                    <Button light onPress={() => this.props.navigation.navigate('DemoIndex')}>
                        <Text>Demo 列表展示</Text>
                    </Button>
                </View>
            </View>
        );
    }
}

export default Home;