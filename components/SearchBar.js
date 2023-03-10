import * as react from 'react';
import { View, SafeAreaView, StyleSheet, TextInput } from 'react-native';

export default function SearchBar() {
    return (
        <SafeAreaView style={styles.container}>
            <TextInput style={styles.textInput} placeholder='Try "Chocolate"'></TextInput>
        </SafeAreaView>
    )
}
const styles = StyleSheet.create({
    container: {
        height: 60,
        alignItems: 'center'
    },
    textInput: {
        backgroundColor: 'white',
        borderWidth: 1,
        paddingLeft: 20,
        margin: 5,
        borderColor: 'grey',
        height: 40,
        width: '95%',
        borderRadius: 50,
    }
})