/*
 * @Author: iChengbo
 * @Date: 2020-05-26 21:35:00
 * @LastEditors: iChengbo
 * @LastEditTime: 2020-05-31 14:29:56
 * @FilePath: /RNLaboratory/src/pages/demo/index.js
 */
import React, { PureComponent } from 'react';
import {
    View,
    Text,
    StyleSheet,
    TouchableHighlight,
} from 'react-native';

import CustomHeader from '../../components/common/CustomeHeader';

import { GridView2 } from '../../components/common/GridView';
import COLORS from '../../constants/colors';

const NUM_COLUMNS = 3;

const DEMO_LIST = [
    {
        screen: 'GridViewDemo',
        name: '类九宫格',
        desc: '实现类似九宫格的Grid布局',
    },
]


class DemoIndex extends PureComponent {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <View style={{ flex: 1 }}>
                <CustomHeader title='demo列表' isHome={false} navigation={this.props.navigation} />
                <GridView2
                    numColumns={NUM_COLUMNS}
                    lineSpaceDistance={10}
                    itemSpaceDistance={10}
                    edgeSpaceDistance={15}
                    data={DEMO_LIST}
                    renderItem={({ item, index }) => {
                        return (
                            <TouchableHighlight
                                underlayColor={'blue'}
                                onPress={() => this.props.navigation.navigate(item.screen)}
                            >
                                <View style={styles._itemWrap}>
                                    <Text style={styles._itemName}>{item.name}</Text>
                                    <Text style={styles._itemDesc}>{item.desc}</Text>
                                </View>
                            </TouchableHighlight>
                        )
                    }}
                ></GridView2>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    _itemWrap: {
        height: 140,
        justifyContent: 'center',
        alignItems: 'center',
        paddingHorizontal: 5,
        shadowColor: 'rgba(0,0,0,0.6)',
        shadowOffset: { height: 0, width: 0 },
        shadowOpacity: 1,
        shadowRadius: 4,
        elevation: 10,
        backgroundColor: '#fff',
    },
    _itemName: {
        fontSize: 18,
        fontWeight: 'bold',
        color: COLORS.black_1,
    },
    _itemDesc: {
        marginTop: 8,
        fontSize: 14,
        color: COLORS.black_4,
        textAlign: 'center',
    }
})

export default DemoIndex;