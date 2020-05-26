import React from 'react';
import { Image, Dimensions } from 'react-native';
import { createSwitchNavigator } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import { createBottomTabNavigator } from 'react-navigation-tabs';
import { createDrawerNavigator } from 'react-navigation-drawer';

import { IMAGE } from '../constants/image';

// 登录相关
import Login from '../pages/Login';
import Register from '../pages/Register';

// 侧边导航
import SliderMenu from '../pages/SliderMenu';
import Setting from '../pages/slider/Setting';
import Profile from '../pages/slider/Profile';

// TAB 页
import Home from '../pages/Home';
import Search from '../pages/Search';

// 一般页面
import HomeDetail from '../pages/home/HomeDetail';
import SearchDetail from '../pages/search/SearchDetail';

// demo 相关页面
import DemoIndex from '../pages/demo/index';
import GridViewDemo from '../pages/demo/GridViewDemo';

export const MainTabs = createBottomTabNavigator({
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

const navOptionsHandler = (navigation) => ({
    headerShown: false
})

export const MainStack = createStackNavigator({
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
    },
    DemoIndex: {
        screen: DemoIndex,
        navigationOptions: navOptionsHandler
    },
    GridViewDemo: {
        screen: GridViewDemo,
        navigationOptions: navOptionsHandler
    },
}, {
    initialRouteName: 'Main'
});


export const AppDrawer = createDrawerNavigator({
    drawer: MainStack,
}, {
    contentComponent: SliderMenu,
    drawerWidth: Dimensions.get('window').width * 3 / 4
});

export const authStack = createStackNavigator({
    Login: {
        screen: Login,
        navigationOptions: navOptionsHandler
    },
    Register: {
        screen: Register,
        navigationOptions: navOptionsHandler
    }
});

export const MainApp = createSwitchNavigator({
    app: AppDrawer,
    auth: authStack,
}, {
    initialRouteName: 'auth'
})