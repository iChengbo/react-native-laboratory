import React from 'react';
import { Image, Dimensions } from 'react-native';
import { createStackNavigator, TransitionSpecs, CardStyleInterpolators } from '@react-navigation/stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
// import { createDrawerNavigator } from '@react-navigation/drawer';

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


const MainScreens = [
    {
        name: 'Setting',
        component: Setting,
    },
    {
        name: 'Profile',
        component: Profile,
    },
    {
        name: 'HomeDetail',
        component: HomeDetail,
    },
    {
        name: 'SearchDetail',
        component: SearchDetail,
    },
    {
        name: 'DemoIndex',
        component: DemoIndex,
    },
    {
        name: 'GridViewDemo',
        component: GridViewDemo,
    },
]

const Tab = createBottomTabNavigator();

// TabBar
export const MainTabs = () => {
    return (
        <Tab.Navigator
            initialRouteName='Home'
            tabBarOptions={{
                activeTintColor: 'red'
            }}
        >
            <Tab.Screen
                name="Home"
                component={Home}
                options={{
                    tabBarLabel: '首页',
                    tabBarIcon: ({ color, size }) => (
                        <Image
                            source={IMAGE.ICON_USER_DEFAULT}
                            resizeMode='contain'
                            style={{ width: 20, height: 20 }}
                        />
                    )
                }}
            ></Tab.Screen>
            <Tab.Screen
                name="Search"
                component={Search}
                options={{
                    tabBarLabel: '搜索',
                    tabBarIcon: ({ color, size }) => (
                        <Image
                            source={IMAGE.ICON_USER_DEFAULT}
                            resizeMode='contain'
                            style={{ width: 20, height: 20 }}
                        />
                    )
                }}
            ></Tab.Screen>
        </Tab.Navigator>
    )
}

const Stack = createStackNavigator();

// 登录态
const isLoggedIn = true;

export const MainApp = () => {
    return (
        <Stack.Navigator
            initialRouteName={isLoggedIn ? 'Main' : 'Login'}
            mode='card'
            headerMode={null}
            screenOptions={({ route, navigation }) => ({
                gestureEnabled: true,
                gestureDirection: 'horizontal',
                gestureResponseDistance: {
                    horizontal: 120,
                },
                cardStyleInterpolator: CardStyleInterpolators.forHorizontalIOS,
            })}
        >
            <Stack.Screen name="Login" component={Login} />
            <Stack.Screen name="Register" component={Register} />
            <Stack.Screen name="Main" component={MainTabs} />
            {
                MainScreens.map((screen) => {
                    return (
                        <Stack.Screen
                            name={screen.name}
                            component={screen.component}
                        ></Stack.Screen>
                    )
                })
            }
        </Stack.Navigator>
    )
}