import React from 'react';
import { View, Text } from 'react-native';

import CustomHeader from '../../components/common/CustomeHeader';

class SearchDetail extends React.Component {
    render() {
        return (
            <View style={{ flex: 1 }}>
                <CustomHeader title='SearchDetail' isHome={false} navigation={this.props.navigation} />
                <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
                    <Text>Home Detail Screen!</Text>
                </View>
            </View>
        );
    }
}

export default SearchDetail;