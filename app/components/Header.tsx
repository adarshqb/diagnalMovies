import React, { Dispatch, SetStateAction, useState } from 'react';
import {
    Animated,
    Image,
    StatusBar,
    Text,
    TextInput,
    TouchableOpacity,
    View,
} from 'react-native';
import AppStyle from '../../assets/css/AppStyle';
import { backIcon, searchIcon, closeWhite } from '../../assets/images';

interface HeaderProps {
    searchVisible: boolean,
    searchText: string,
    setSearchVisible: Dispatch<SetStateAction<boolean>>;
    handleSearch: (newText: string) => void;
}

const Header = ({ searchVisible, searchText, setSearchVisible, handleSearch }: HeaderProps) => {

    const [animatedValue] = useState(new Animated.Value(0));

    const toggleSearch = () => {
        setSearchVisible(!searchVisible);
        Animated.timing(
            animatedValue,
            {
                toValue: searchVisible ? 0 : 1,
                duration: 300,
                useNativeDriver: true,
            }
        ).start();
    };


    const translateY = animatedValue.interpolate({
        inputRange: [0, 1],
        outputRange: [-45, 0]
    });
    
    return (
        <View style={[AppStyle.header]} >
            <StatusBar
                barStyle={'light-content'}
                backgroundColor={'#000'}
            />
            <View style={[AppStyle.flewRow, AppStyle.justifySpace]}>
                <View style={[AppStyle.flewRow]}>
                    <Image source={backIcon} style={[AppStyle.backIcon]} />
                    <Text style={[AppStyle.headerText]}>Romantic Comedy</Text>
                </View>
                <TouchableOpacity onPress={toggleSearch}>
                    <Image source={searchIcon} style={[AppStyle.searchImage]} />
                </TouchableOpacity>

                <Animated.View style={[AppStyle.searchContainer, { transform: [{ translateY }] }]}>
                    {searchVisible ?
                        <View style={[AppStyle.flewRow]}>
                            <TextInput
                                value={searchText}
                                onChangeText={handleSearch}
                                placeholder="Search here..."
                                placeholderTextColor={'#000'}
                                style={AppStyle.input}
                            />
                            <TouchableOpacity onPress={toggleSearch}>
                                <Image source={closeWhite} style={[AppStyle.closeIcon]} />
                            </TouchableOpacity>
                        </View>
                        : null}
                </Animated.View>
            </View>
        </View>
    )
}

export default Header;
