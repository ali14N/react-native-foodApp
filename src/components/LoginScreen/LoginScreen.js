import React, { useState, useEffect } from 'react'
import { View, Text, TextInput, StyleSheet, TouchableHighlight, ImageBackground } from 'react-native';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5'
import AsyncStorage from '@react-native-community/async-storage';


const LoginScreen = (
    // { switchScreen }
    { navigation }
) => {

    const [state, setState] = useState({ username: '', password: '' })
    const onLoginClick = async () => {
        try {
            const user = JSON.parse(await AsyncStorage.getItem('users'))
            user.username === state.username && user.password === state.password ? alert("Authorized user") : alert('login fail')

        }
        catch (e) {
            console.log(e)
        }
    }
    // const InputBox = ({ name, type, placeholder, value, secureTextEntry }) => {

    //     const inputChangeHandler = (value) => {
    //         setState(prevState => ({
    //             ...prevState,
    //             [type]: value
    //         }))
    //     }
    // return (
    //     <View style={styles.inputBox}>
    //         <FontAwesome5
    //             name={name}
    //             style={styles.inputIcons}
    //         />
    //         <TextInput
    //             style={styles.inputText}
    //             // value={value}
    //             textContentType={type}
    //             secureTextEntry={secureTextEntry}
    //             placeholder={placeholder}
    //             placeholderTextColor="white"
    //             onChangeText={inputChangeHandler}
    //         />
    //     </View>
    // )
    // }
    return (
        <ImageBackground source={require('../../assets/img/SignUp/Register.jpg')} style={styles.backgroundImg} resizeMode='stretch'>
            <Text style={styles.brandText}>Foodybite</Text>
            <View style={styles.inputContainer}>
                {/* <InputBox name='envelope' placeholder="Username/Email" type="username" />
                <InputBox name='lock' placeholder="Password" type="password" secureTextEntry={true} /> */}

                <View style={styles.inputBox}>
                    <FontAwesome5
                        name='user'
                        style={styles.inputIcons}
                    />
                    <TextInput
                        style={styles.inputText}
                        value={state.username}
                        // textContentType={type}
                        placeholder='Username/Email'
                        placeholderTextColor="white"
                        onChangeText={(value) => setState((prevState) => ({ ...prevState, username: value }))}
                    />
                </View>
                <View style={styles.inputBox}>
                    <FontAwesome5
                        name='lock'
                        style={styles.inputIcons}
                    />
                    <TextInput
                        style={styles.inputText}
                        value={state.password}
                        // textContentType={type}
                        secureTextEntry={true}
                        placeholder='Password'
                        placeholderTextColor="white"
                        onChangeText={(value) => setState((prevState) => ({ ...prevState, password: value }))}
                    />
                </View>

            </View>
            <TouchableHighlight onPress={() => { navigation.navigate("Forgot Password") }} style={styles.forgotContainer}>
                <Text style={styles.forgotText}>Forgot Password?</Text>
            </TouchableHighlight>
            <TouchableHighlight style={styles.loginButton} onPress={onLoginClick}>

                <Text style={styles.loginButtonText}>Login</Text>

            </TouchableHighlight>
            <TouchableHighlight onPress={
                // switchScreen
                () => { navigation.navigate("SignUp") }
            }>
                <Text style={styles.signupText}>Create New Account</Text>
            </TouchableHighlight>
        </ImageBackground>
    )
}

export default LoginScreen
const styles = StyleSheet.create({
    backgroundImg: {
        height: "100%",
        alignItems: 'center',
        width: "100%",
    },
    brandText: {
        color: "white",
        textAlign: "center",
        fontSize: 40,
        fontWeight: "bold",
        marginVertical: 60
    },
    inputContainer: {
        width: "80%",
        marginTop: 100
    },

    inputBox: {
        flexDirection: 'row',
        alignItems: 'center',
        color: "white",
        padding: 10,
        borderRadius: 15,
        marginVertical: 10,
        backgroundColor: 'rgba(255, 255, 255, 0.3)',
    },
    inputIcons: {
        fontSize: 24,
        color: 'white',
        // marginHorizontal: 10
    },
    inputText: {
        fontSize: 20,
        color: "white",
        width: "100%",
        height: "100%"
    },


    forgotText: {
        alignItems: "stretch",
        color: "white",
        fontSize: 20,
        width: '100%',
        marginVertical: 10,
        textAlign: 'right'
    },
    forgotContainer: {
        width: '80%',
    },
    signupText: {
        textAlign: "center",
        color: "white",
        fontSize: 20,
        marginVertical: 20,
        padding: 10,
        borderBottomWidth: StyleSheet.hairlineWidth,
        borderBottomColor: 'white'
    },
    loginButton: {
        marginVertical: 20,
        backgroundColor: "#1A66D6",
        borderRadius: 15,
        width: '80%',
        padding: 10
    },
    loginButtonText: {
        color: "white",
        textAlign: 'center',
        padding: 10,
        fontSize: 24,
    },

})
