/*
 * @Author: iChengbo
 * @Date: 2020-01-19 15:20:06
 * @LastEditors: iChengbo
 * @LastEditTime: 2020-05-31 11:33:11
 * @FilePath: /RNLaboratory/App.js
 */ 
import React from 'react';
import { NavigationContainer } from '@react-navigation/native';

import { MainApp } from './src/navigator/navigator';

export default function App() {
    return (
        <NavigationContainer>
            <MainApp></MainApp>
        </NavigationContainer>
    )
}