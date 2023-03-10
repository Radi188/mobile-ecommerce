import * as react from 'react';
import { StyleSheet, View, Text } from 'react-native';

export default function Card(props) {
    return (
        <View>
            <View style={styles.card}>
                <View style={styles.cardContent}>
                    {props.children}
                </View>
            </View>
            <Text style={{ textAlign: 'center', fontSize: 10, fontWeight: 'bold' }}>{props.title}</Text>
        </View>

    )
}
const styles = StyleSheet.create({
    card: {
        borderRadius: 50,
        elevation: 3,
        backgroundColor: '#fff',
        shadowOffset: { width: 0, height: 0 },
        shadowColor: '#333',
        shadowOpacity: 0.2,
        shadowRadius: 15,
        alignItems: 'center',
        marginHorizontal: 10,
        marginVertical: 10
    },
    cardContent: {
        justifyContent: 'center',
        alignItems: 'center',
        width: 60,
        height: 60
    }
})