import React from 'react';
import {
    View,
    Text,
    Image,
    StyleSheet,
    TouchableOpacity,
} from 'react-native';

import { createStackNavigator, CardStyleInterpolators } from '@react-navigation/stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

import MaterialCommunityIcons from "react-native-vector-icons/MaterialCommunityIcons"

import { isIphoneX } from '../utils/System';

// 登录相关
import Login from '../pages/Login';
import Register from '../pages/Register';

// 侧边导航
import SliderMenu from '../pages/SliderMenu';
import Setting from '../pages/slider/Setting';
import Profile from '../pages/slider/Profile';

// TAB 页
import Home from '../pages/Home';
import Publish from '../pages/Publish';
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

const styles = StyleSheet.create({
    btmTabWrap: {
        flexDirection: 'row',
        backgroundColor: '#fff',
        justifyContent: 'space-between',
        paddingHorizontal: 20,
        paddingBottom: isIphoneX() ? 34 : 0,
    },
    tabWrap: {
        height: 50,
        width: 50,
        justifyContent: 'center',
        alignItems: 'center',
    }
})

// TabBar
export const MainTabs = () => {
    return (
        <Tab.Navigator
            initialRouteName='Home'
            tabBar={({ state, descriptors, navigation }) => {
                return (
                    <View style={styles.btmTabWrap}>
                        {
                            state.routes.map((route, index) => {

                                const { options } = descriptors[route.key];
                                const label =
                                    options.tabBarLabel !== undefined
                                        ? options.tabBarLabel
                                        : options.title !== undefined
                                            ? options.title
                                            : route.name;
                                const tabBarIcon = options.tabBarIcon;

                                const isFocused = state.index === index;
                                const onPress = () => {
                                    if (index == 1) {
                                        // TODO： 弹出发布
                                        return null;
                                    }
                                    const event = navigation.emit({
                                        type: 'tabPress',
                                        target: route.key,
                                        canPreventDefault: true,
                                    });

                                    if (!isFocused && !event.defaultPrevented) {
                                        navigation.navigate(route.name);
                                    }
                                }

                                return (
                                    <TouchableOpacity
                                        onPress={onPress}
                                    >
                                        <View style={StyleSheet.flatten([styles.tabWrap, { opacity: isFocused ? 1 : 0.4 }])}>
                                            {tabBarIcon()}
                                            <Text>{label}</Text>
                                        </View>
                                    </TouchableOpacity>
                                )
                            })
                        }
                    </View >
                )
            }}
        >
            <Tab.Screen
                name="Home"
                component={Home}
                options={{
                    tabBarLabel: '首页',
                    tabBarIcon: () => (
                        <MaterialCommunityIcons name="home" size={25} />
                    )
                }}
            />
            <Tab.Screen name="Publish" component={Publish}
                options={{
                    tabBarLabel: '发布',
                    tabBarIcon: () => (
                        <MaterialCommunityIcons name="account-plus-outline" size={25} />
                    )
                }}
            />
            <Tab.Screen name="Search" component={Search}
                options={{
                    tabBarLabel: '搜索',
                    tabBarIcon: () => (
                        <MaterialCommunityIcons name="account" size={25} />
                    )
                }}
            />
        </Tab.Navigator >
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
                            key={screen.name}
                            name={screen.name}
                            component={screen.component}
                        ></Stack.Screen>
                    )
                })
            }
        </Stack.Navigator>
    )
}