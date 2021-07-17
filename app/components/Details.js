import React from 'react';
import { Text, View } from 'react-native';
import { width, height, totalSize } from '../packages/screenDimentions';
import { appColors } from '../comman/constants';

export default function Details(props) {
    return (
        <View style={{ flexDirection: 'row', marginTop: height(1) }}>
            <Text style={{ fontSize: totalSize(1.8) }}>
                {props.title}{'   :  '}
            </Text>
            <Text style={{ fontSize: totalSize(1.8), color: appColors.textGray }}>
                {props.detail}
            </Text>
        </View>
    );
}