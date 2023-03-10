import { View, Text, StyleSheet, Image, ScrollView, TouchableHighlight, SafeAreaView, TouchableOpacity } from 'react-native'
import React from 'react'
import Icon from 'react-native-vector-icons/FontAwesome';
import GlobalStyle from '../../GlobalStyle';

export default function ProductDetails({ navigation, route }) {
    const path = 'https://admin.franceajalimentaire.com/assets/images/products/'
    const product = route.params;
    return (
        <SafeAreaView style={GlobalStyle.droidSafeArea}>
            <ScrollView style={styles.contain}>
                <View style={styles.navbar}>
                    <Icon style={{ marginRight: 80 }} name='arrow-left' size={20} onPress={() => navigation.goBack()} />
                </View>

                <View style={styles.imageContain}>
                    <Image source={{ uri: path + product.item.product.thumbnail }} style={{ resizeMode: 'contain', width: '100%', height: 400 }} />
                </View>
                <View styles={styles.detialContainer}>
                    <View style={{ marginLeft: 20, marginTop: 20, flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center' }}>
                        <Text numberOfLines={2} style={{ fontSize: 20, fontWeight: 'bold', width: 250 }}>{product.item.product.product_title}
                        </Text>
                    </View>
                    <View style={{ paddingHorizontal: 20, marginTop: 20 }}>
                        <Text style={{ color: 'grey', fontSize: 16, lineHeight: 22, }}>
                            {product.item.product.description}
                        </Text>
                    </View>
                    <View style={{ alignItems: 'center', paddingBottom: 100 }}>
                        <TouchableOpacity style={styles.button}>
                            <Text onPress={() => navigation.navigate('Contact')} style={{ fontWeight: 'bold', fontSize: 16, padding: 10, textAlign: 'center', color: 'white' }}>More information</Text>
                        </TouchableOpacity>
                    </View>

                </View>
            </ScrollView>
        </SafeAreaView>

    )
}

const styles = StyleSheet.create({
    navbar: {
        alignItems: 'center',
        flexDirection: 'row',
        height: 30,
        width: '90%',
        paddingLeft: 10,
        margin: 5,
        justifyContent: 'flex-start',

    },
    contain: {
        backgroundColor: '#fafafa',
    },
    imageContain: {
        justifyContent: 'center',
        alignItems: 'center',
    },
    detialContainer: {
        marginTop: 20,
    },
    priceTag: {
        padding: 10,
        backgroundColor: '#007AFF',
        borderTopLeftRadius: 50,
        borderBottomLeftRadius: 50,
        justifyContent: 'center'
    },
    button: {
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