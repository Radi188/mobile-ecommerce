import { StyleSheet, Text, View, SafeAreaView, Image, Dimensions, TouchableOpacity, FlatList, } from 'react-native'
import React, { useState, useEffect } from 'react'
import SearchBar from '../../components/SearchBar'
import Icon from 'react-native-vector-icons/FontAwesome';
import client from '../../app/api/client'
import Loading from '../../shared/Loading';
import GlobalStyle from '../../GlobalStyle'

export default function Trending({ navigation, route }) {
    const trending = route.params
    const path = 'https://admin.franceajalimentaire.com/assets/images/products/'
    const CardProduct = ({ product }) => {
        return <FlatList data={trending.bestsell.collection_details}
            renderItem={({ item }) => (
                <TouchableOpacity style={styles.card} onPress={() => navigation.navigate("CollectionDetails", product = { item })} >
                    <Image source={{ uri: path + item.product.thumbnail }} style={{ width: 170, height: 170, resizeMode: 'cover' }} />
                    <Text style={{ fontWeight: 'bold', marginBottom: 10, fontSize: 12, textAlign: 'center' }}>{item.product.product_title}</Text>
                    <TouchableOpacity style={styles.button} onPress={() => navigation.navigate("CollectionDetails", product = { item })} >
                        <Text style={{ fontWeight: 'bold', fontSize: 12, padding: 10, textAlign: 'center', color: 'white' }} >Check detail</Text>
                    </TouchableOpacity>
                </TouchableOpacity>
            )}
            numColumns={2}
            style={styles.containCard}
            showsVerticalScrollIndicator={false}
        />
    }
    return (
        <SafeAreaView style={[styles.contain, GlobalStyle.droidSafeArea]}>
            <View style={styles.navbar}>
                <Icon name='arrow-left' size={20} onPress={() => navigation.goBack()} />
                <Image source={require('../../assets/Image/logo-black.png')} style={{ width: 200, height: 60 }} />
                <View>
                    <Icon name="" style={{ width: 60, height: 60 }} size={30} />
                </View>
            </View>
            <View>
                <Text style={{ textAlign: 'center', fontSize: 25, fontWeight: 'bold', marginBottom: 20, color: '#333' }}>Best selling product</Text>
                <CardProduct />
                <View style={{ alignItems: 'center', paddingBottom: 50 }}>
                    <TouchableOpacity style={styles.buttonn}>
                        <Text onPress={() => navigation.navigate('Contact')} style={{ fontWeight: 'bold', fontSize: 16, padding: 10, textAlign: 'center', color: 'white' }}>More information</Text>
                    </TouchableOpacity>
                </View>
            </View>
        </SafeAreaView>
    )
}
const width = Dimensions.get('screen').width / 2 - 30;
const styles = StyleSheet.create({
    navbar: {
        alignItems: 'center',
        flexDirection: 'row',
        height: 80,
        width: '90%',
        paddingLeft: 10,
        margin: 5,
        justifyContent: 'space-between',
    },
    contain: {
        backgroundColor: '#fafafa',
    },
    item: {
        marginHorizontal: 20,
        fontWeight: 'bold',
        color: 'grey'
    },
    categorySelected: {
        color: '#007AFF',
        borderBottomWidth: 10,
        paddingBottom: 10,
        borderColor: '#007AFF',
        height: 30,
    },
    button: {
        margin: 10,
        backgroundColor: '#007AFF',
        borderRadius: 10
    },
    card: {
        height: 260,
        backgroundColor: '#fff',
        width,
        borderRadius: 10,
        marginBottom: 20,
        paddingBottom: 15,
        marginHorizontal: 10,
        alignItems: 'center'
    },
    containCard: {
        height: '68%',
        marginHorizontal: 10,
    },
    button: {
        backgroundColor: '#2F58D2',
        borderRadius: 10,
        marginHorizontal: 20,
    },
    buttonn: {
        marginTop: 30,
        backgroundColor: '#2F58D2',
        borderRadius: 25,
        paddingVertical: 15,
        marginHorizontal: 20,
        width: 200,
        justifyContent: 'center',
        shadowOffset: { width: 0, height: 0 },
        shadowColor: '#2F58D2',
        shadowOpacity: 0.5,
        shadowRadius: 20,
        elevation: 5,
    },
})