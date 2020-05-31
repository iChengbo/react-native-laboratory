/*
 * @Author: iChengbo
 * @Date: 2020-01-19 15:20:06
 * @LastEditors: iChengbo
 * @LastEditTime: 2020-05-31 12:50:08
 * @FilePath: /RNLaboratory/src/pages/Search.js
 */
import React from 'react';
import { View } from 'react-native';
import { Button, Text } from 'native-base';

class Search extends React.Component {
    render() {
        return (
            <View style={{ flex: 1 }}>
                <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
                    <Text>Search Screen!</Text>
                    <Button light onPress={() => this.props.navigation.navigate('SearchDetail')}>
                        <Text>Go to Search Detail</Text>
                    </Button>
                </View>
            </View>
        );
    }
}

export default Search;