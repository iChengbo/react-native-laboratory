import React from 'react';
import { View, Image, Dimensions, SafeAreaView, ScrollView } from 'react-native';
import { Header, Left, Body, Right, Button, Icon, Title, Text, List, ListItem } from 'native-base';

// import CustomHeader from '../components/common/CustomeHeader';

import { IMAGE } from '../constants/image';

class SliderMenu extends React.Component {
    render() {
        return (
            <SafeAreaView style={{ flex: 1 }}>
                <View style={{ height: 150, alignItems: 'center', justifyContent: 'center' }}>
                    <Image
                        style={{ height: 120, width: 120, borderRadius: 60 }}
                        source={IMAGE.ICON_USER_DEFAULT}
                    />
                </View>
                <ScrollView>
                    <List>
                        <ListItem onPress={() => this.props.navigation.navigate('Setting')}>
                            <Text>Setting</Text>
                        </ListItem>
                        <ListItem onPress={() => this.props.navigation.navigate('Profile')}>
                            <Text>Profile</Text>
                        </ListItem>
                    </List>
                </ScrollView>

                <List>
                    <ListItem noBorder onPress={() => this.props.navigation.navigate('auth')}>
                        <Text>Logout</Text>
                    </ListItem>
                </List>
            </SafeAreaView>
        )
    }
}

export default SliderMenu;