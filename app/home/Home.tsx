import React, { useEffect, useRef, useState } from 'react';
import {
    FlatList,
    Image,
    NativeModules,
    RefreshControl,
    SafeAreaView,
    StatusBar,
    Text,
    TouchableOpacity,
    View,
} from 'react-native';

import { missingPlaceholder } from '../../assets/images';
import AppStyle from '../../assets/css/AppStyle';
import { BlackShadow, Header, Loader } from '../components';
import EmptyListView from './EmptyListView';
import { APIBASE, APIKEY, MovieListType, PAGEKEYS, imageList } from './Constants';

const { StatusBarManager } = NativeModules;

const Home = () => {

    //StateVariables
    const [loading, setLoading] = useState(true);
    const [searchText, setSearchText] = useState('');
    const [data, setData] = useState<MovieListType[]>([]);
    const [searchData, setSearchData] = useState<MovieListType[]>([]);
    const [refreshing, setRefreshing] = useState(false);
    const [numberOfLine, setNumberOfLine] = useState<Array<number>>([]);
    const [page, setPage] = useState(0);
    const [searchVisible, setSearchVisible] = useState(false);
    const [isScrolling, setIsScrolling] = useState(false);
    const [endPosition, setEndPosition] = useState(0);
    const viewRef = useRef<any>(null);


    useEffect(() => {
        fetchMovieList(0)
    }, [])


    const fetchMovieList = async (pageNum: number = 0) => {
        try {
            const response = await fetch(
                `${APIBASE}${PAGEKEYS[pageNum]}`,
                {
                    method: 'GET',
                    headers: {
                        Accept: 'application/json',
                        'Content-Type': 'application/json',
                        'X-Master-Key': APIKEY
                    }
                }
            );
            const json = await response.json();
            const contentList = json && json.record && json?.record?.page && json?.record?.page['content-items']
            if (contentList && contentList.content && contentList?.content.length > 0) {
                pageNum == 0 ? setData(contentList.content) : setData(data.concat(contentList?.content))
                setPage(pageNum)
            } else {
                setData([])
            }
            setLoading(false)
            setRefreshing(false);
        } catch (error) {
            setLoading(false)
            setRefreshing(false)
            console.error(error);
        }
    }

    // Pull to refresh
    const handleRefresh = () => {
        setRefreshing(true);
        setLoading(true);
        setIsScrolling(false);
        fetchMovieList(0);
        setNumberOfLine([]);
    };

    // To show full name if not visible in single line
    const handleNameReading = (index: number) => {
        const newArray: Array<number> = [...numberOfLine];
        newArray[index] = newArray[index] > 1 ? 1 : 4;
        setNumberOfLine(newArray);
    }

    // To find the where to start the shadow component
    const measureView = () => {
        viewRef.current.measure((x: number, y: number, width: number, height: number, pageX: number, pageY: number) => {
          setEndPosition(pageY);
        });
    };

    const handleSearch = (text: string) => {
        setSearchText(text)
        const filteredData = data.filter(item =>
            item.name.toLowerCase().includes(text.toLowerCase())
        );
        setSearchData(filteredData)
    }

    // Loading page on reaching end
    const handleLazyLoading = () => {
        if (!loading && page < 2) {
            fetchMovieList(page + 1)
        }
    }

    // Movie List Render Component
    const MovieList = ({ item, index }: { item: MovieListType, index: number }) => (
        <TouchableOpacity onPress={() => handleNameReading(index)} key={index} style={[AppStyle.movieItemView]}>
            <Image source={imageList[item['poster-image']] ?? missingPlaceholder} style={[AppStyle.image]} />
            <Text style={[AppStyle.movieName]} numberOfLines={numberOfLine[index] ?? 1} >{item.name}</Text>
        </TouchableOpacity>
    )

    
    return (
        <SafeAreaView style={[AppStyle.container]}>
            <Header
                searchVisible={searchVisible}
                searchText={searchText}
                setSearchVisible={setSearchVisible}
                handleSearch={handleSearch} />
            <View ref={viewRef} onLayout={measureView} />
            
            {!isScrolling &&
                <BlackShadow endPosition={endPosition} />}

            {!loading ?
                <FlatList
                    data={searchText.trim() != '' ? searchData : data}
                    numColumns={3}
                    showsVerticalScrollIndicator={false}
                    refreshControl={
                        <RefreshControl
                            refreshing={refreshing}
                            onRefresh={handleRefresh}
                            colors={['#FFF']}
                            tintColor={'#OOO'}
                        />
                    }
                    horizontal={false}
                    onScrollBeginDrag={() => setIsScrolling(true)}
                    onScrollEndDrag={() => setIsScrolling(false)}
                    scrollEventThrottle={16}
                    style={[AppStyle.flatListStyle]}
                    renderItem={MovieList}
                    keyExtractor={(item) => item.name + Math.random()}
                    onEndReached={handleLazyLoading}
                    onEndReachedThreshold={0.5}
                    ListEmptyComponent={<EmptyListView />}
                />
                : <Loader />
            }
        </SafeAreaView>
    )
}

export default Home;
