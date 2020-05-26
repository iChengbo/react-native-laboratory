/*
 * @Author: iChengbo
 * @Date: 2020-05-11 22:24:26
 * @LastEditors: iChengbo
 * @LastEditTime: 2020-05-26 21:22:30
 * @FilePath: /RNLaboratory/src/components/common/GridView.js
 */
import React, { PureComponent } from 'react';
import {
    View,
    StyleSheet,
    FlatList,
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
        <View style={styles._demoWrap1(lineSpaceDistance, itemSpaceDistance, edgeSpaceDistance)}>
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
            keyExtractor = (item, index) => String(index),
        } = this.props;
        const filledData = fillArrayForUnite(data, numColumns, { _isFalse: true });
        // 行数
        let lineSum = Math.ceil(filledData.length / numColumns);
        let lineFakeArray = Array(lineSum).fill('占位');

        return (
            <View style={StyleSheet.flatten([styles._demoWrap2(itemSpaceDistance, lineSpaceDistance, edgeSpaceDistance)])}>
                {lineFakeArray.map((item, lineNum) => {
                    let start = lineNum * numColumns;
                    let end = lineNum * numColumns + numColumns;
                    return (
                        <View key={lineNum} style={StyleSheet.flatten([styles._lineWrap(lineSpaceDistance)])}>
                            {filledData.slice(start, end).map((item, index) => {
                                return (
                                    <View key={keyExtractor(item, index)} style={StyleSheet.flatten([styles._itemWrap(itemSpaceDistance)])}>
                                        {!item._isFalse && renderItem({ item, index: lineNum * numColumns + index })}
                                    </View>
                                )
                            })}
                        </View>
                    )
                })}
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
    _demoWrap1: ((lineSpaceDistance, itemSpaceDistance, edgeSpaceDistance) => {
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
    // 方式2
    _demoWrap2: (itemSpaceDistance, lineSpaceDistance, edgeSpaceDistance) => ({
        paddingHorizontal: edgeSpaceDistance,
        marginTop: -lineSpaceDistance,
        marginLeft: -itemSpaceDistance / 2,
        marginRight: -itemSpaceDistance / 2,
    }),
    _lineWrap: (lineSpaceDistance) => ({
        marginTop: lineSpaceDistance,
        flexDirection: 'row',
        flexWrap: 'nowrap',
        justifyContent: 'space-between',
    }),
    _itemWrap: (itemSpaceDistance) => ({
        flex: 1,
        marginLeft: itemSpaceDistance / 2,
        marginRight: itemSpaceDistance / 2,
    })
});

