import React, { useState } from 'react'
import { View, Text, TextInput, StyleSheet, ImageBackground, TouchableHighlight } from 'react-native'
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5'

const ForgotPassword = () => {
    const [email, setEmail] = useState('')
    const onSendHandler = () => { alert('sent') }
    return (
        <ImageBackground source={require('../../assets/img/SignUp/Register.jpg')} style={styles.backgroundImg} resizeMode='stretch'>
            <View style={styles.header}>

                <Text style={styles.text}>
                    Enter your email and will send you instructions on how to reset it
            </Text>
            </View>
            <View style={styles.inputContainer}>
                <View style={styles.inputBox}>
                    <FontAwesome5
                        name='envelope'
                        style={styles.inputIcons}
                    />
                    <TextInput
                        style={styles.inputText}
                        value={email}
                        // textContentType={type}
                        placeholder='Email'
                        placeholderTextColor="white"
                        onChangeText={(value) => setEmail(value)}
                    />
                </View>
            </View>
            <TouchableHighlight style={styles.Button} onPress={onSendHandler}>

                <Text style={styles.text}>Send</Text>

            </TouchableHighlight>
        </ImageBackground>
    )
}

export default ForgotPassword

const styles = StyleSheet.create(
    {
        backgroundImg: {
            height: "100%",
            alignItems: 'center',
            width: "100%",
        },
        header: {
            marginVertical: 100
        },
        inputContainer: {
            width: "80%",
        },

        inputBox: {
            flexDirection: 'row',
            alignItems: 'center',
            color: "white",
            padding: 10,
            borderRadius: 15,
            backgroundColor: 'rgba(255, 255, 255, 0.3)',
        },
        inputIcons: {
            fontSize: 24,
            color: 'white',
            marginHorizontal: 10
        },
        inputText: {
            fontSize: 20,
            color: "white",
            width: "100%",
            height: "100%"
        },
        Button: {
            position: "absolute",
            bottom: 80,
            backgroundColor: "#1A66D6",
            borderRadius: 15,
            width: '80%',
            padding: 10
        },
        text: {
            color: "white",
            textAlign: 'center',
            padding: 10,
            fontSize: 24,
        },
    }
)