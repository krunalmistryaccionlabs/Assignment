import React, { Fragment, useEffect, useState } from 'react';
import { SafeAreaView, FlatList, ActivityIndicator } from 'react-native';
import { width, height, totalSize } from '../packages/screenDimentions';
import { appColors } from '../comman/constants';
import { apiData } from '../comman/apiData';
import MyStatusBar from '../components/myStatusbar';
import MyHeader from '../components/myHeader';
import ListItem from '../components/ListItem';

export default function homeScreen(props) {
    let [filterData, setfilterData] = useState([]);
    let [loading, setloading] = useState(true);

    useEffect(() => {
        async function initialSetup() {
            let filterData = apiData.results.filter((data) => data.artistName == 'Michael Jackson');
            setfilterData(filterData)
            setloading(false)
        }
        initialSetup();
    }, [])

    return (
        <Fragment>
            <MyStatusBar />
            <MyHeader title='iTunes Songs' />
            <SafeAreaView>
                {loading ?
                    <ActivityIndicator size="large" color={appColors.primary} /> : null}

                <FlatList
                    data={filterData}
                    renderItem={(item) => <ListItem data={item} navigation={props.navigation} />}
                    keyExtractor={item => item.id}
                    style={{ height: height(100), width: width(100), padding: 10 }}
                />
            </SafeAreaView>
        </Fragment >
    );
}