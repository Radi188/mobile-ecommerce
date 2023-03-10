import axios from 'axios';
import * as React from 'react'
import { View, Text, StyleSheet, Image, TextInput, ScrollView, TouchableOpacity, SafeAreaView, Alert } from 'react-native'
import Icon from 'react-native-vector-icons/FontAwesome';
import client from '../../app/api/client';


export default function ContactScreen({ navigation }) {
    const [colorName, setColorName] = React.useState('')
    const [colorEmail, setColorEmail] = React.useState('')
    const [colorSubject, setColorSubject] = React.useState('')
    const [colorPhoneNumber, setColorPhoneNumber] = React.useState('')
    const [colorMessage, setColorMessage] = React.useState('')
    const [name, setName] = React.useState('')
    const [email, setEmail] = React.useState('')
    const [phoneNumber, setPhoneNumber] = React.useState('')
    const [subject, setSubject] = React.useState('')
    const [ipAddress, setIpAddress] = React.useState('')
    const [timezone, setTimezone] = React.useState('')
    const [isp, setIsp] = React.useState('')
    const [country, setCountry] = React.useState('')
    const [city, setCity] = React.useState('')
    const [message, setMessage] = React.useState('')
    const url = 'https://admin.franceajalimentaire.com/api/store_message'
    const [emailError, setEmailError] = React.useState('please input your email')
    const hasName = (name) => {
        if (name.length > 2) {
            setColorName('#ddd')
            setName(name)
        } else {
            setColorName('red')
            setName(name)
        }
    }
    const hasPhoneNumber = (phoneNumber) => {
        if (phoneNumber.length > 8) {
            setColorPhoneNumber('#ddd')
            setPhoneNumber(phoneNumber)
        } else {
            setColorPhoneNumber('red')
            setPhoneNumber(phoneNumber)
        }
    }
    const hasSubject = (subject) => {
        if (subject.length > 6) {
            setColorSubject('#ddd')
            setSubject(subject)
        } else {
            setColorSubject('red')
            setSubject(subject)
        }
    }
    const hasMessage = (message) => {
        if (message.length > 5) {
            setColorMessage('#ddd')
            setMessage(message)
        } else {
            setColorMessage('red')
            setMessage(message)
        }
    }
    const validate = (text) => {
        let reg = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w\w+)+$/;
        if (reg.test(text) === false) {
            setColorEmail("red")
            setEmail(text)
            return false;
        }
        else {
            setEmail(text)
            setColorEmail("#ddd")
        }
    }
    const apiSend = async () => {

        await axios.post(url, {
            email: email,
            name: name,
            phone_number: phoneNumber,
            subject: subject,
            message: message,
            ip_address: ipAddress,
            timezone: timezone,
            isp: isp,
            country: country,
            city: city
        }).then(result => {
            Alert.alert('Success', 'Message has been sent')
        }).catch(err => {
            Alert.alert('Error', 'Please Input the field correctly')
        })
        setName('')
        setEmail('')
        setSubject('')
        setPhoneNumber('')
        setMessage('')

    }

    return (
        <SafeAreaView style={styles.contain}>
            <ScrollView>
                <View style={{ alignItems: 'center', justifyContent: 'center', marginTop: 50 }}>
                    <Image source={require('../../assets/2447622.png')} style={{ resizeMode: 'contain', width: '75%', height: 150 }} />
                    <Text style={{ textAlign: 'center', fontSize: 28, marginTop: 20, fontWeight: 'bold' }}>Contact us</Text>
                </View>
                <View style={{ marginTop: 10 }}>
                    <View style={styles.contactContain}>
                        <TextInput value={name} placeholder='Name:' style={[styles.TextInput, { borderColor: `${colorName}` }]} onChangeText={(name) => hasName(name)} ></TextInput>
                    </View>
                    <View style={styles.contactContain}>
                        <TextInput value={email} placeholder='Email:' style={[styles.TextInput, { borderColor: `${colorEmail}` }]} onChangeText={(text) => validate(text)}></TextInput>
                    </View>
                    <View style={styles.contactContain}>
                        <TextInput value={phoneNumber} keyboardType='numeric' placeholder='phone number:' style={[styles.TextInput, { borderColor: `${colorPhoneNumber}` }]} onChangeText={(text) => hasPhoneNumber(text)} ></TextInput>
                    </View>
                    <View style={styles.contactContain}>
                        <TextInput value={subject} placeholder='subject:' style={[styles.TextInput, { borderColor: `${colorSubject}` }]} onChangeText={(text) => hasSubject(text)}  ></TextInput>
                    </View>
                    <View style={styles.message}>
                        <TextInput value={message} placeholder='Message:' multiline={true} style={[styles.TextArea, { borderColor: `${colorMessage}` }]} onChangeText={(text) => hasMessage(text)}  ></TextInput>
                    </View>
                    <View style={{ alignItems: 'center', paddingBottom: 50 }}>
                        <TouchableOpacity style={styles.buttonn} onPress={apiSend}>
                            <Text style={{ padding: 20, textAlign: 'center', color: 'white' }}>Send</Text>
                        </TouchableOpacity>
                    </View>
                </View>
            </ScrollView >
        </SafeAreaView >
    )
}
const styles = StyleSheet.create({
    navbar: {
        alignItems: 'center',
        flexDirection: 'row',
        height: 150,
        width: '90%',
        margin: 5,
        justifyContent: 'space-between',
    },
    contain: {
        paddingTop: 50,
        backgroundColor: '#fafafa',
        height: '100%'
    },
    TextInput: {
        backgroundColor: 'white',
        borderWidth: 1,
        paddingLeft: 10,
        margin: 5,
        borderColor: '#ddd',
        height: 50,
        width: '100%',
        borderRadius: 15,
    },
    TextInputError: {
        backgroundColor: 'white',
        borderWidth: 1,
        paddingLeft: 10,
        margin: 5,
        borderColor: 'red',
        height: 50,
        width: '100%',
        borderRadius: 15,
    },
    contactContain: {
        marginHorizontal: 20,
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        margin: 5
    },
    TextArea: {
        backgroundColor: 'white',
        borderWidth: 1,
        paddingLeft: 10,
        margin: 5,
        borderColor: '#ddd',
        height: 100,
        width: '100%',
        borderRadius: 15,
    },
    message: {
        marginHorizontal: 20,
        alignItems: 'center'
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
    }
})