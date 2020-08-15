import React, { useState, useEffect } from 'react'
import { Text, View, TextInput, Button, StyleSheet, StatusBar, ImageBackground, TouchableHighlight, Image } from 'react-native'
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';
import userImg from '../../assets/img/SignUp/345.jpg'
import AsyncStorage from '@react-native-community/async-storage';
const SignUpScreen = ({ navigation }) => {

    const [state, setState] = useState({ username: '', email: '', password: '', confirmPassword: '' })
    // console.log(state.username)
    // const inputChangeHandler = (value) => {
    //     // setText(value)
    //     // console.log(type, value)
    //     setState({ username: value })
    //     // setState(prevState => ({
    //     //     ...prevState,
    //     //     [type]: value
    //     // }))
    // }
    // const InputBox = ({ name, placeholder, type, secureTextEntry }) => {
    //     // const InputBox = ({ name, placeholder, type, secureTextEntry }) => {

    //     return (
    //         <View style={styles.inputBox}>
    //             {/* <FontAwesome5
    //                 name={name}
    //                 style={styles.inputIcons} /> */}
    //             <TextInput
    //                 style={styles.inputText}
    //                 value={state.username}
    //                 // textContentType={type}
    //                 // secureTextEntry={secureTextEntry}
    //                 // placeholder={placeholder}
    //                 placeholderTextColor="white"
    //                 onChangeText={(value) =>
    //                     inputChangeHandler(value)} />
    //         </View>
    //     )
    // }
    const handleRegister = async () => {
        try {
            await AsyncStorage.setItem('users', JSON.stringify(state))
            console.log('It was saved successfully')
        }
        catch (e) {
            console.log(e)
        }
    }
    return (
        <ImageBackground source={require('../../assets/img/SignUp/Register.jpg')} style={styles.backgroundImg} resizeMode='stretch'>

            <View style={styles.avatar}>
                {/* <Image source={userImg} /> */}
            </View >

            <View style={styles.inputContainer}>
                {/* <InputBox /> */}
                <View style={styles.inputBox}>
                    <FontAwesome5
                        name="user"
                        style={styles.inputIcons} />

                    <TextInput style={styles.inputText} value={state.username} placeholder="Username" placeholderTextColor="white" onChangeText={(value) => setState((prevState) => ({ ...prevState, username: value }))} />
                </View>
                <View style={styles.inputBox}>
                    <FontAwesome5
                        name="envelope"
                        style={styles.inputIcons} />
                    <TextInput style={styles.inputText} value={state.email} placeholder="Email" placeholderTextColor="white" onChangeText={(value) => setState((prevState) => ({ ...prevState, email: value }))} />
                </View>
                <View style={styles.inputBox}>
                    <FontAwesome5
                        name="lock"
                        style={styles.inputIcons} />
                    <TextInput style={styles.inputText} value={state.password} placeholder="Password" placeholderTextColor="white" secureTextEntry={true} onChangeText={(value) => setState((prevState) => ({ ...prevState, password: value }))} />
                </View>
                <View style={styles.inputBox}>
                    <FontAwesome5
                        name="lock"
                        style={styles.inputIcons} />

                    <TextInput style={styles.inputText} value={state.confirmPassword} placeholder="Confirm Password" placeholderTextColor="white" secureTextEntry={true} onChangeText={(value) => setState((prevState) => ({ ...prevState, confirmPassword: value }))} />
                </View>
                {/* <InputBox name='user' placeholder="Name" type="username" /> */}
                {/* <InputBox name='envelope' placeholder="Email" type="email" />
                <InputBox name='lock' placeholder="Password" secureTextEntry={true} type="password" />
                <InputBox name='lock' placeholder="Confirm Password" secureTextEntry={true} type="confirmPassword" /> */}
            </View>

            <TouchableHighlight style={styles.registerButton} onPress={handleRegister}>
                <Text style={styles.loginText}>Register
                    </Text>
            </TouchableHighlight>

            <TouchableHighlight onPress={() => { navigation.navigate("Login") }}>
                <Text style={styles.loginText}>Already have an account? Login</Text>
            </TouchableHighlight>
        </ImageBackground >

    )
}

export default SignUpScreen

const styles = StyleSheet.create({
    backgroundImg: {
        height: "100%",
        alignItems: 'center',
        width: "100%",
    },
    avatar: {
        width: 140,
        height: 140,
        borderRadius: 70,
        marginVertical: 20,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: 'rgba(255, 255, 255, 0.5)',
    },

    inputIcons: { fontSize: 24, color: 'white', marginHorizontal: 10 },
    inputContainer: {
        width: "80%"
    },
    inputBox: {
        flexDirection: 'row',
        alignItems: 'center',
        color: "white",
        padding: 10,
        borderRadius: 20,
        marginVertical: 10,
        backgroundColor: 'rgba(255, 255, 255, 0.3)',

    },
    inputText: {
        fontSize: 20,
        color: "white",
        width: "100%",
        height: "100%"
    },
    registerButton: {
        backgroundColor: "#2299eb",
        borderRadius: 20,
        height: 60,
        width: '80%',
        marginVertical: 20,
        justifyContent: 'center',
        alignItems: 'center'
    },
    loginText: {
        color: "white",
        fontSize: 20,
    }
})
