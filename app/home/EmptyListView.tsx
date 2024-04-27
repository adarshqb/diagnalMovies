import React from "react";
import { View, Image, Text } from "react-native";
import AppStyle from "../../assets/css/AppStyle";
import { noResult } from "../../assets/images";

const EmptyListView = () => {

    return (
        <View style={[AppStyle.emptyListView]}>
            <Image source={noResult} style={[AppStyle.emptyListImage]} />
            <Text style={[AppStyle.emptyListText]}>Sorry, we couldn't find any results matching your search. Please try a different movie title.</Text>
        </View>
    )
}

export default EmptyListView;