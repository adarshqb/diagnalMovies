

import React from 'react';
import LinearGradient from 'react-native-linear-gradient';
import AppStyle from '../../assets/css/AppStyle';

const BlackShadow = ({endPosition}: {endPosition: number}) => {

    return (
        <LinearGradient
            colors={['#000000', 'rgba(0,0,0, 0.9)', 'rgba(0,0,0, 0.6)', 'rgba(118,118,118, 0.1)']}
            style={[AppStyle.linearGradient, {top: endPosition}]}
        />
    )

}

export default BlackShadow;