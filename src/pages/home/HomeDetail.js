import React from 'react';
import {
    View,
    Text,
    StyleSheet,
    FlatList,
    ScrollView
} from 'react-native';

import CustomHeader from '../../components/common/CustomeHeader';
import { GridView1, GridView2, GridView3 } from '../../components/common/GridView';

import { fillArrayForUnite } from '../../utils/ArrayFunctions';

import { SCREEN_HEIGHT, SCREEN_WIDTH } from '../../constants/layout';

let DATA = [];
DATA = [{ key: '1', title: '1' }, { key: '2', title: '2' }];
// DATA = [{ key: '1', title: '1' }, { key: '2', title: '2' }, { key: '3', title: '3' }];
// DATA = [{ key: '1', title: '1' }, { key: '2', title: '2' }, { key: '3', title: '3' }, { key: '4', title: '4' }];
DATA = [{ key: '1', title: '1' }, { key: '2', title: '2' }, { key: '3', title: '3' }, { key: '4', title: '4' }, { key: '5', title: '5' }];
// DATA = [{ key: '1', title: '1' }, { key: '2', title: '2' }, { key: '3', title: '3' }, { key: '4', title: '4' }, { key: '5', title: '5' }, {key: '6', title: '6' }];

const NUM_COLUMNS = 3;

/**
 * 头部标题
 * @param {*} props 
 */
const DemoHeader = (props) => {
    const { title } = props;
    return (
        <View style={titleStyle._titleWrap}>
            <Text style={titleStyle._titleText}>{title}</Text>
        </View>
    )
}

const titleStyle = StyleSheet.create({
    _titleWrap: {
        height: 50,
        zIndex: 2,
        justifyContent: 'center',
        paddingLeft: 15,
        // backgroundColor: 'red'
    },
    _titleText: {
        fontWeight: 'bold',
        fontSize: 18,
    }
})

/**
 * 实现九宫格布局
 * 方式一：View + Dimensions
 * 方式二：View + flex (一行一行的实现)
 * 方式三：利用 FlatList
 */
class HomeDetail extends React.Component {
    _renderItem = ({ item, index }) => {
        return (
            <View style={styles._demoItem}>
                <Text>{item.title}</Text>
            </View>
        )
    }
    render() {
        // const filledData = fillArrayForUnite(DATA, NUM_COLUMNS, { _isFalse: true })
        return (
            <View style={{ flex: 1 }}>
                <CustomHeader title='栈格布局' isHome={false} navigation={this.props.navigation} />
                <ScrollView style={{ flex: 1 }}>
                    <DemoHeader title={'View + Dimensions'}></DemoHeader>
                    <GridView1
                        numColumns={NUM_COLUMNS}
                        lineSpaceDistance={10}
                        itemSpaceDistance={10}
                        edgeSpaceDistance={15}
                        data={DATA}
                        renderItem={this._renderItem}
                    ></GridView1>
                    <DemoHeader title={'View + flex'}></DemoHeader>
                    <GridView2
                        numColumns={NUM_COLUMNS}
                        lineSpaceDistance={10}
                        itemSpaceDistance={10}
                        edgeSpaceDistance={15}
                        data={DATA}
                        renderItem={this._renderItem}
                    ></GridView2>
                    <DemoHeader title={'利用 FlatList'}></DemoHeader>
                    <GridView3
                        numColumns={NUM_COLUMNS}
                        lineSpaceDistance={10}
                        itemSpaceDistance={10}
                        edgeSpaceDistance={15}
                        data={DATA}
                        renderItem={this._renderItem}
                    ></GridView3>
                </ScrollView>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    _demoItem: {
        flex: 1,
        height: (SCREEN_WIDTH - 30 - 20) / 3,
        width: '100%',
        backgroundColor: 'blue',
        justifyContent: 'center',
        alignItems: 'center'
    }
})

export default HomeDetail;