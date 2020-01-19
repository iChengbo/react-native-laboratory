import React from 'react';
import { View, Text } from 'react-native';

import CustomHeader from '../../components/common/CustomeHeader';

class Setting extends React.Component {
    render() {
        return (
            <View style={{ flex: 1 }}>
                <CustomHeader title='Setting' isHome={false} navigation={this.props.navigation} />
                <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
                    <Text>Setting Screen!</Text>
                </View>
            </View>
        );
    }
}

export default Setting;