import React from 'react';
import { View, Image, Dimensions, SafeAreaView, ScrollView } from 'react-native';
import { createAppContainer, createSwitchNavigator } from 'react-navigation';
import { createBottomTabNavigator } from 'react-navigation-tabs';
import { createStackNavigator } from 'react-navigation-stack';
import { createDrawerNavigator } from 'react-navigation-drawer';

import { Header, Left, Body, Right, Button, Icon, Title, Text, List, ListItem } from 'native-base';

import { IMAGE } from './src/constants/image';

class CustomHeader extends React.Component {
  render() {
    const { title, isHome } = this.props
    return (
      <Header>
        <Left>
          {
            isHome ?
              <Button transparent onPress={() => this.props.navigation.openDrawer()}>
                <Icon name='menu' />
              </Button> :
              <Button transparent onPress={() => this.props.navigation.goBack()}>
                <Icon name='arrow-back' />
              </Button>
          }
        </Left>
        <Body>
          <Title>{title}</Title>
        </Body>
        <Right>
          {/* <Button transparent>
            <Icon name='menu' />
          </Button> */}
        </Right>
      </Header>
    )
  }
}

class Login extends React.Component {
  render() {
    return (
      <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
        <Text>Login Screen</Text>
        <Button light style={{ marginTop: 10 }} onPress={() => this.props.navigation.navigate('app')}>
          <Text>Login</Text>
        </Button>
        <Button light style={{ marginTop: 10 }} onPress={() => this.props.navigation.navigate('Register')}>
          <Text>Register</Text>
        </Button>
      </View>
    );
  }
}

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

class HomeDetail extends React.Component {
  render() {
    return (
      <View style={{ flex: 1 }}>
        <CustomHeader title='HomeDetail' isHome={false} navigation={this.props.navigation} />
        <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
          <Text>Home Detail Screen!</Text>
        </View>
      </View>
    );
  }
}

class Search extends React.Component {
  render() {
    return (
      <View style={{ flex: 1 }}>
        <CustomHeader title='Search' isHome={true} navigation={this.props.navigation} />
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

class SearchDetail extends React.Component {
  render() {
    return (
      <View style={{ flex: 1 }}>
        <CustomHeader title='SearchDetail' isHome={false} navigation={this.props.navigation} />
        <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
          <Text>Home Search Screen!</Text>
        </View>
      </View>
    );
  }
}

class Profile extends React.Component {
  render() {
    return (
      <View style={{ flex: 1 }}>
        <CustomHeader title='Profile' isHome={false} navigation={this.props.navigation} />
        <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
          <Text>Profile Screen!</Text>
        </View>
      </View>
    );
  }
}

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

const navOptionsHandler = (navigation) => ({
  headerShown: false
})

const MainTabs = createBottomTabNavigator({
  Home: {
    screen: Home,
    navigationOptions: {
      tabBarLabel: 'Home',
      tabBarIcon: ({ tintColor }) => (
        <Image
          source={IMAGE.ICON_USER_DEFAULT}
          resizeMode='contain'
          style={{ width: 20, height: 20 }}
        />
      )
    }
  },
  Search: {
    screen: Search,
    navigationOptions: {
      tabBarLabel: 'Search',
      tabBarIcon: ({ tintColor }) => (
        <Image
          source={IMAGE.ICON_USER_DEFAULT}
          resizeMode='contain'
          style={{ width: 20, height: 20 }}
        />
      )
    }
  },
});

const MainStack = createStackNavigator({
  Main: {
    screen: MainTabs,
    navigationOptions: navOptionsHandler
  },
  Setting: {
    screen: Setting,
    navigationOptions: navOptionsHandler
  },
  Profile: {
    screen: Profile,
    navigationOptions: navOptionsHandler
  },
  HomeDetail: {
    screen: HomeDetail,
    navigationOptions: navOptionsHandler
  },
  SearchDetail: {
    screen: SearchDetail,
    navigationOptions: navOptionsHandler
  }
}, {
  initialRouteName: 'Main'
});

const AppDrawer = createDrawerNavigator({
  drawer: MainStack,
}, {
  contentComponent: SliderMenu,
  drawerWidth: Dimensions.get('window').width * 3 / 4
});

const authStack = createStackNavigator({
  Login: {
    screen: Login,
    navigationOptions: navOptionsHandler
  },
  Register: {
    screen: Register,
    navigationOptions: navOptionsHandler
  }
});

const MainApp = createSwitchNavigator({
  app: AppDrawer,
  auth: authStack,
}, {
  initialRouteName: 'auth'
})

export default createAppContainer(MainApp);
