/*
 * @Author: iChengbo
 * @Date: 2021-04-09 15:59:32
 * @LastEditors: iChengbo
 * @LastEditTime: 2021-04-24 00:05:48
 * @FilePath: /react-native-laboratory/index.js
 */
/**
 * @format
 */

import {AppRegistry} from 'react-native';
import { setGlobalErrorHandler, setPromiseUnCatchHandler } from 'react-native-error-helper';
import App from './App';
import {name as appName} from './app.json';

setGlobalErrorHandler((error, isFatal) => {
    console.log('global error：', error, isFatal);
}, true);

setPromiseUnCatchHandler((id, err) => {
    console.log('promise un catch：', err);
}, true);

AppRegistry.registerComponent(appName, () => App);
