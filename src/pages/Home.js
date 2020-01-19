import React from 'react';
import { View } from 'react-native';
import { Button, Text } from 'native-base';

import CustomHeader from '../components/common/CustomeHeader';

class Home extends React.Component {
    render() {
        return (
            <View style={{ flex: 1 }}>
                <CustomHeader title='Home' isHome={true} navigation={this.props.navigation} />
                <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
                    <Text>Home Screen!</Text>
                    <Button light onPress={() => this.props.navigation.navigate('HomeDetail')}>
                        <Text>Go to Home Detail</Text>
                    </Button>
                </View>
            </View>
        );
    }
}

export default Home;