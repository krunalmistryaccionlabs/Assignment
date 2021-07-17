import React from 'react';
import { View, TouchableOpacity, Text, Image } from 'react-native';
import { width, height, totalSize } from '../packages/screenDimentions';
import { appColors } from '../comman/constants';

export default function ListItem(props) {
    let data = props.data.item
    return (
        <TouchableOpacity
            style={{
                backgroundColor: 'white',
                padding: 16,
                marginTop: 10,
                flexDirection: 'row',
                justifyContent: 'space-between',
                borderRadius: 10
            }}
            onPress={() => props.navigation.navigate('viewCode', { data: data })}
        >
            <View>
                <Image
                    style={{ height: width(15), width: width(15) }}
                    source={{ uri: data.artworkUrl100 }}
                />
            </View>

            <View style={{ width: width(70) }}>
                <Text numberOfLines={1} style={{ textAlign: 'center', fontSize: totalSize(2.2) }}>{data.trackName}</Text>
                <Text numberOfLines={1} style={{ textAlign: 'center', fontSize: totalSize(1.8), color: appColors.textGray }}>{data.collectionName}</Text>
                <Text numberOfLines={1} style={{ textAlign: 'center', fontSize: totalSize(1.8), color: appColors.textGray }}>( {data.artistName} )</Text>
            </View>
        </TouchableOpacity>
    );
}