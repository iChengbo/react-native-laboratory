import React from 'react';
import { View } from 'react-native';
import { Button, Text } from 'native-base';

import CustomHeader from '../components/common/CustomeHeader';

class Register extends React.Component {
    render() {
        return (
            <View style={{ flex: 1 }}>
                <CustomHeader title='Register' isHome={false} navigation={this.props.navigation} />
                <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
                    <Text>Register Screen!</Text>
                    <Text>Register</Text>
                </View>
            </View>
        );
    }
}

export default Register;