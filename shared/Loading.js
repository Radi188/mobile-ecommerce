import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import LottieView from 'lottie-react-native'

export default function Loading() {
    return (
        <View style={[StyleSheet.absoluteFillObject, styles.container]}>
            <LottieView source={require('./../assets/loading.json')} autoPlay loop />
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        zIndex: 0,
        margin: 10,
        height: 200
    }
})