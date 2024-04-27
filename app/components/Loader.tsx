

import React from 'react';
import LoaderKit from 'react-native-loader-kit'
import AppStyle from '../../assets/css/AppStyle';
import { View } from 'react-native';

const Loader = () => {

    return (
        <View style={AppStyle.loaderView}>
            <LoaderKit
                style={AppStyle.loaderIcon}
                name={'BallTrianglePath'}
                color={'#FFF'}
            />
        </View>
    )

}

export default Loader;