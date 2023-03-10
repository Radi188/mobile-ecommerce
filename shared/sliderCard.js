import React, { useEffect, useRef } from 'react';
import { Text, StyleSheet, View, FlatList, Animated } from 'react-native';
import SliderItem from './sliderItem';
import Paginator from '../components/Paginator';
import { useState } from 'react'
import LottieView from 'lottie-react-native';
import client from '../app/api/client'
export default function sliderCard() {
    const [data, setData] = useState([])
    const [isLoading, setLoading] = useState(true)
    const scrollX = useRef(new Animated.Value(0)).current;
    const getDataSlide = () => {
        client.get('get_home_data').then((res) => setData(res.data)).then(setTimeout((isLoading) => setLoading(false), 3000))
    }
    useEffect(() => {
        getDataSlide();
    }, [])
    if (isLoading) {
        return <View style={[StyleSheet.absoluteFillObject, styles.container]}>
            <LottieView source={require('./../assets/95944-loading-animation.json')} autoPlay loop />
        </View>
    } else {
        const slider = data.sliders
        return (
            <View>
                <FlatList
                    data={slider}
                    renderItem={({ item }) => <SliderItem item={item} />}
                    horizontal
                    showsHorizontalScrollIndicator={false}
                    pagingEnabled
                    keyExtractor={(item) => item.id}
                    onScroll={Animated.event([{ nativeEvent: { contentOffset: { x: scrollX } } }], { useNativeDriver: false, })}
                />
                <Paginator data={slider} scrollX={scrollX} />
            </View>
        )
    }

}
const styles = StyleSheet.create({

})