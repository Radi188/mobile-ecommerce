import React, { useState } from 'react';
import { StyleSheet, Text, View, useWindowDimensions, ImageBackground } from 'react-native';

export default function sliderItem({ item }) {
    const { width } = useWindowDimensions();
    const path = 'https://admin.franceajalimentaire.com/public/assets/images/slider/';
    return (
        <View style={[{ width }, styles.container]}>
            <ImageBackground source={{ uri: path + item.image_name }} style={[styles.image, { width, resizeMode: 'contain' }, styles.contain]} ><View>
                <Text style={styles.description}>{item.description}</Text>
            </View>
            </ImageBackground>
        </View>
    )
}

const styles = StyleSheet.create({
    image: {
        marginTop: 10,
        justifyContent: 'center',
        height: 180,
        alignItems: 'flex-start',
    },
    title: {
        fontWeight: '800',
        fontSize: 14,
        color: '#493d8a',
        textAlign: 'left',
        paddingHorizontal: 10,
        width: 200
    },
    description: {
        fontWeight: '300',
        color: '#62656b',
        textAlign: 'left',
        paddingHorizontal: 10,
    },
})