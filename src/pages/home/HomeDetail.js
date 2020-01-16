import React from 'react';
import {
    View,
    Text,
    Dimensions,
    StyleSheet,
    FlatList,
    ScrollView
} from 'react-native';

import CustomHeader from '../../components/common/CustomeHeader';

import { fillArrayForUnite } from '../../utils/ArrayFunctions'

let DATA = [];
DATA = [{ key: '1', title: '1' }, { key: '2', title: '2' }];
// DATA = [{ key: '1', title: '1' }, { key: '2', title: '2' }, { key: '3', title: '3' }];
// DATA = [{ key: '1', title: '1' }, { key: '2', title: '2' }, { key: '3', title: '3' }, { key: '4', title: '4' }];
DATA = [{ key: '1', title: '1' }, { key: '2', title: '2' }, { key: '3', title: '3' }, { key: '4', title: '4' }, { key: '5', title: '5' }];
// DATA = [{ key: '1', title: '1' }, { key: '2', title: '2' }, { key: '3', title: '3' }, { key: '4', title: '4' }, { key: '5', title: '5' }, {key: '6', title: '6' }];

const NUM_COLUMNS = 3;
const { height, width } = Dimensions.get('window');

/**
 * 头部标题
 * @param {*} props 
 */
const DemoHeader = (props) => {
    const { title } = props;
    return (
        <View style={{ height: 50, backgroundColor: '#999', zIndex: 2, justifyContent: 'center', paddingLeft: 15 }}>
            <Text style={{ fontWeight: 'bold', fontSize: 18 }}>{title}</Text>
        </View>
    )
}

/**
 * 实现九宫格布局
 * 方式一：View + Dimensions
 * 方式二：View + flex (一行一行的实现)
 * 方式三：利用 FlatList
 */
class HomeDetail extends React.Component {
    _renderItem = ({ item, index }) => {
        return (
            <View style={styles._demoItem2}>
                <Text>{item.title}</Text>
            </View>
        )
    }
    render() {
        const filledData = fillArrayForUnite(DATA, NUM_COLUMNS, { _isFalse: true })
        return (
            <View style={{ flex: 1 }}>
                <CustomHeader title='HomeDetail' isHome={false} navigation={this.props.navigation} />
                <ScrollView style={{ flex: 1 }}>
                    <DemoHeader title={'九宫格方式1'}></DemoHeader>
                    <View style={styles._demoContainer}>
                        <View style={styles._demoWraper1}>
                            {filledData.map((item, index) => {
                                if (item._isFalse) {
                                    return <View key={Math.random()} style={[styles._demoItem1, { backgroundColor: 'transpranter' }]}></View>
                                }
                                return (
                                    <View key={item.key} style={styles._demoItem1}>
                                        <Text>{item.title}</Text>
                                    </View>
                                )
                            })}
                        </View>
                    </View>

                    <DemoHeader title={'九宫格方式2'}></DemoHeader>
                    <Text>稍等片刻</Text>
                    <DemoHeader title={'九宫格方式3'}></DemoHeader>
                    <FlatList
                        style={styles._demoWraper2}
                        data={filledData}
                        keyExtractor={(item, index) => item.key}
                        numColumns={NUM_COLUMNS}
                        renderItem={this._renderItem}
                    ></FlatList>
                </ScrollView>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    _demoContainer: {
        width: width,
        backgroundColor: 'transparent',
        paddingHorizontal: 15,
    },
    // 方式1
    _demoWraper1: {
        marginTop: -10,
        // backgroundColor: '#fff',
        flexDirection: 'row',
        flexWrap: 'wrap',
        justifyContent: 'space-between',
    },
    _demoItem1: {
        marginTop: 10,
        justifyContent: 'center',
        alignItems: 'center',
        height: (width - 30 - 20) / 3,
        width: (width - 30 - 20) / NUM_COLUMNS,
        backgroundColor: 'blue',
    },
    _demoWraper2: {
        marginTop: -10,
        marginLeft: 10,
        marginRight: 10,
    },
    _demoItem2: {
        flex: 1,
        height: (width - 30 - 20) / 3,
        backgroundColor: 'blue',
        marginLeft: 5,
        marginRight: 5,
        marginTop: 10,
        justifyContent: 'center',
        alignItems: 'center'
    }
})

export default HomeDetail;