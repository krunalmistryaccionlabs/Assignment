import React from 'react';
import { View, Text, TouchableOpacity, } from 'react-native';
import { width, height, totalSize } from '../packages/screenDimentions';
import { appColors } from '../comman/constants';
import Ionicons from 'react-native-vector-icons/Ionicons';


export default function MyHeader(props) {
    return (
        <View style={{ height: height(8), width: width(100), backgroundColor: appColors.appBar, flexDirection: 'row', padding: 10 }}>
            {
                props.back
                    ? <TouchableOpacity
                        onPress={() => props.navigation.navigate(props.back)}
                        style={{ alignItems: 'center', justifyContent: 'center' }}>
                        <Ionicons
                            name="chevron-back-sharp"
                            color="white"
                            size={totalSize(3)}
                        />
                    </TouchableOpacity>
                    : null
            }
            <View style={{ alignItems: 'center', justifyContent: 'center' }}>
                <Text style={{ textAlign: 'center', fontSize: totalSize(2), color: 'white' }}>{props.title}</Text>
            </View>
        </View>
    );
}