/*
 * @Author: iChengbo
 * @Date: 2020-05-31 14:15:09
 * @LastEditors: iChengbo
 * @LastEditTime: 2020-05-31 14:17:38
 * @FilePath: /RNLaboratory/src/utils/System.js
 */
import {
    Platform,
    Dimensions,
    StyleSheet,
} from 'react-native';

const { height, width } = Dimensions.get('window');

function isIphoneX() {
    return Platform.OS === 'ios' &&
        !Platform.isPad &&
        !Platform.isTVOS &&
        (height === 812 ||
            width === 812 ||
            width === 896 ||
            height === 896
        );
}

export {
    isIphoneX,
}