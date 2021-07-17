import React, { Fragment, useEffect, useState } from 'react';
import { SafeAreaView, Text, View, Image, ScrollView } from 'react-native';
import { width, height, totalSize } from '../packages/screenDimentions';
import { appColors } from '../comman/constants';
import MyStatusBar from '../components/myStatusbar';
import MyHeader from '../components/myHeader';
import Details from '../components/Details';

export default function homeScreen(props) {
    let data = props.route.params.data
    return (
        <Fragment>
            <MyStatusBar />
            <MyHeader title='Song Details' back={'Home'} navigation={props.navigation} />
            <SafeAreaView>
                <View style={{ marginTop: height(4), margin: 20 }}>
                    <View style={{ alignItems: 'center', justifyContent: 'center' }}>
                        <Image
                            style={{ height: width(40), width: width(40) }}
                            source={{ uri: data.artworkUrl100 }}
                        />
                    </View>
                    <Text style={{ textAlign: 'center', fontSize: totalSize(2.2), marginTop: height(4) }}>{data.trackName}</Text>
                    <Text style={{ textAlign: 'center', fontSize: totalSize(1.8), color: appColors.textGray }}>{data.collectionName}</Text>
                    <Text style={{ textAlign: 'center', fontSize: totalSize(1.8), color: appColors.textGray }}>( {data.artistName} )</Text>

                    <ScrollView style={{ marginHorizontal: width(2), marginTop: height(4) }}>

                        <Details title='Release Date' detail={new Date(data.releaseDate).toString()} />
                        <Details title='Track Price' detail={data.trackPrice ? data.trackPrice : 'NA'} />
                        <Details title='Collection Explicitness' detail={data.collectionExplicitness ? data.collectionExplicitness : 'NA'} />
                        <Details title='Track Explicitness' detail={data.trackExplicitness ? data.trackExplicitness : 'NA'} />
                        <Details title='Disc Count' detail={data.discCount ? data.discCount : 'NA'} />
                        <Details title='Disc Number' detail={data.discNumber ? data.discNumber : 'NA'} />
                        <Details title='Track Count' detail={data.trackCount ? data.trackCount : 'NA'} />
                        <Details title='Track Number' detail={data.trackNumber ? data.trackNumber : 'NA'} />

                    </ScrollView>

                </View>
            </SafeAreaView>
        </Fragment >
    );
}