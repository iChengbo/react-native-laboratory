/*
 * @Author: iChengbo
 * @Date: 2020-05-31 12:53:28
 * @LastEditors: iChengbo
 * @LastEditTime: 2020-05-31 13:07:03
 * @FilePath: /RNLaboratory/src/components/hocs/withPage.js
 */
import React, { Component, createElement } from 'react';
import {
    View,
} from 'react-native';

import CustomeHeader from '../common/CustomeHeader';

export default function withPage(wrappedComponent) {

    const headerTitle = wrappedComponent.title;

    return class extends Component {

        renderChildComponent() {
            try {
                return createElement(wrappedComponent, { ...this.props });
            } catch (e) {
                console.log("渲染出错了", e);
                throw new Error(e);
            }
        }

        render() {
            return (
                <View>
                    <CustomeHeader
                        title={headerTitle}
                        navigation={this.props.navigation}
                    ></CustomeHeader>
                    {this.renderChildComponent()}
                </View>
            )
        }
    }
}