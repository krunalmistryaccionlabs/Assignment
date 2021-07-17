import React from 'react';
import { StatusBar } from 'react-native';
import { appColors } from '../comman/constants';


export default function MyStatusBar(props) {
    return (
        <StatusBar
            backgroundColor={appColors.statusBar}
            barStyle='light-content'
        />
    );
}