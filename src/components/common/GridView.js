/*
 * @Author: iChengbo
 * @Date: 2020-05-11 22:24:26
 * @LastEditors: iChengbo
 * @LastEditTime: 2020-05-12 00:01:07
 * @FilePath: /RNLaboratory/src/components/common/GridView.js
 */
import React, { PureComponent } from 'react';
import {
    View,
    Text,
    StyleSheet,
    FlatList,
    ScrollView
} from 'react-native';

import { SCREEN_WIDTH } from '../../constants/layout';
import { fillArrayForUnite } from '../../utils/ArrayFunctions';

// 方式一：View + Dimensions
export const GridView1 = (props) => {
    const {
        data,
        numColumns,
        renderItem,
        lineSpaceDistance = 0,
        itemSpaceDistance = 0,
        edgeSpaceDistance = 0,
    } = props;
    const filledData = fillArrayForUnite(data, numColumns, { _isFalse: true });
    return (
        <View style={styles._demoWraper1(lineSpaceDistance, itemSpaceDistance, edgeSpaceDistance)}>
            {filledData.map((item, index) => {
                if (item._isFalse) {
                    return <View key={Math.random()} style={[styles._demoItem1(numColumns, lineSpaceDistance, itemSpaceDistance, edgeSpaceDistance), { backgroundColor: 'transpranter' }]}></View>
                }
                return (
                    <View key={item.key} style={styles._demoItem1(numColumns, lineSpaceDistance, itemSpaceDistance, edgeSpaceDistance)}>
                        {renderItem({ item, index })}
                    </View>
                )
            })}
        </View>
    )
}

// 方式二：View + flex (一行一行的实现)
export class GridView2 extends PureComponent {
    
    render() {
        const {
            data,
            numColumns,
            renderItem,
            lineSpaceDistance = 0,
            itemSpaceDistance = 0,
            edgeSpaceDistance = 0,
        } = this.props;
        return (
            <View>
                <Text>124</Text>
            </View>
        )
    }
}

// 方式三：利用 FlatList
export const GridView3 = (props) => {
    const {
        data,
        numColumns,
        renderItem,
        lineSpaceDistance = 0,
        itemSpaceDistance = 0,
        edgeSpaceDistance = 0,
    } = props;
    const filledData = fillArrayForUnite(data, numColumns, { _isFalse: true });

    return (
        <FlatList
            style={{ paddingHorizontal: edgeSpaceDistance }}
            data={filledData}
            keyExtractor={(item, index) => item.key}
            numColumns={numColumns}
            renderItem={({ item, index }) => {
                let marginTop = index + 1 > numColumns ? lineSpaceDistance : 0;
                let paddingRight = (index + 1) % numColumns == 0 ? 0 : itemSpaceDistance;
                if (item._isFalse) {
                    return <View style={{ flex: 1, marginTop, paddingRight, backgroundColor: 'transpranter' }}></View>
                } else {
                    return (
                        <View style={{ flex: 1, marginTop, paddingRight }}>
                            {renderItem({ item, index })}
                        </View>
                    )
                }
            }}
        ></FlatList>
    )
}


const styles = StyleSheet.create({
    // 方式1
    _demoWraper1: ((lineSpaceDistance, itemSpaceDistance, edgeSpaceDistance) => {
        return {
            marginTop: -lineSpaceDistance,
            paddingHorizontal: edgeSpaceDistance,
            flexDirection: 'row',
            flexWrap: 'wrap',
            justifyContent: 'space-between',
        }
    }),
    _demoItem1: ((numColumns, lineSpaceDistance, itemSpaceDistance, edgeSpaceDistance) => {
        return {
            marginTop: lineSpaceDistance,
            justifyContent: 'center',
            alignItems: 'center',
            width: (SCREEN_WIDTH - itemSpaceDistance * 2 - edgeSpaceDistance * 2) / numColumns,
        }
    }),
});

