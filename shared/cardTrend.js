import { View, Text, StyleSheet } from 'react-native'
import React from 'react'

export default function cardTrend(props) {
    return (
        <View>
            <View style={styles.card}>
                <View style={styles.cardContent}>
                    {props.children}
                </View>
            </View>
            <Text numberOfLines={2} style={{ width: 80, textAlign: 'center', fontSize: 10, fontWeight: 'bold', color: 'white' }}>{props.title}</Text>
        </View>
    )
}
const styles = StyleSheet.create({
    card: {
        borderRadius: 10,
        elevation: 3,
        backgroundColor: '#fff',
        shadowOffset: { width: 0, height: 0 },
        shadowColor: '#333',
        shadowOpacity: 0.1,
        alignItems: 'center',
        shadowRadius: 8,
        marginVertical: 10,
    },
    cardContent: {
        justifyContent: 'center',
        alignItems: 'center',
        width: 80,
        height: 80,
        borderRadius: 20,
    }
})