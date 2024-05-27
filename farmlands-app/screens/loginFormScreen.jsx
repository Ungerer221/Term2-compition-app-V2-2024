import { View, Text, TouchableOpacity, StyleSheet, Image, TextInput, KeyboardAvoidingView,Platform,Keyboard, } from 'react-native'
import React, { useState } from 'react'
// View
import TopNavBar from '../views/topNavBar';
// components
import EmailInputField from '../components/emailInputField';
import PasswordInputField from '../components/passwordInputField';
// fireBase
import { handleLogin } from '../services/authService';

export default function LoginFormScreen({ navigation }) {
    // const [text, onChangeText] = React.useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const login = () => { handleLogin(email, password) }

    return (
            <View style={styles.container}>
                <TopNavBar />
                <Text style={styles.loginHeadingText}>Login</Text>
                <Text>If you dont have an account please feel free to register</Text>
                <Image
                    style={styles.backGroundImage}
                    source={require('../assets/44.png')}
                />
                {/* input field con */}
                <View style={styles.formCon}>

                    {/* //* email */}
                    <TextInput
                        style={styles.input}
                        placeholder='email'
                        onChangeText={newText => setEmail(newText)}
                        value={email}
                    />
                    {/* //* pass word field */}
                    <TextInput
                        style={styles.input}
                        placeholder='password'
                        onChangeText={newText => setPassword(newText)}
                        value={password}
                    />

                    {/* //* submit button  */}
                    <TouchableOpacity style={styles.loginButton} onPress={login}>
                        <Text style={styles.loginButtonText}>Login</Text>
                    </TouchableOpacity>
                    {/* //* signUp button  */}
                    <TouchableOpacity
                        style={styles.navSignupButton}
                        onPress={() => navigation.navigate('Signup')}
                    >
                        <Text style={styles.loginButtonText}>Create an account</Text>
                    </TouchableOpacity>
                    {/* <TouchableOpacity
                        style={styles.navSignupButton}
                        onPress={() => navigation.navigate('Home')}
                    >
                        <Text style={styles.loginButtonText}>home</Text>
                    </TouchableOpacity> */}
                    {/* //* Admin  */}
                    <TouchableOpacity
                        style={styles.navSignupButton}
                        onPress={() => navigation.navigate('Admin')}
                    >
                        <Text style={styles.loginButtonText}>Admin</Text>
                    </TouchableOpacity>
                </View>
            </View>
    )
}
const styles = StyleSheet.create({
    container: {
        flex: 1,
        width: '100%',
        backgroundColor: '#fff',
        // backgroundColor: '#90F6DE',
        alignItems: 'center',
        justifyContent: 'flex-start',
        // gap: 20,
        paddingTop: 40,
    },
    loginHeadingText: {
        fontSize: 42,
        fontWeight: '700',
    },
    formCon: {
        width: '100%',
        flex: 1,
        justifyContent: 'flex-start',
        alignItems: 'center',
        padding: 20,
        gap: 10,
        // backgroundColor:'purple',
    },
    loginButton: {
        width: '100%',
        backgroundColor: '#41A8BB',
        justifyContent: 'center',
        alignItems: 'center',
        padding: 20,
        borderRadius: 22,
    },
    loginButtonText: {
        color: '#fff',
        fontWeight: '700',
        fontSize: 16,
    },
    navSignupButton: {
        width: '50%',
        backgroundColor: '#FFD166',
        justifyContent: 'center',
        alignItems: 'center',
        padding: 20,
        borderRadius: 22,
    },
    backGroundImage: {
        width: '100%',
        height: 250,
        // backgroundColor:'red',
    },
    input: {
        width: '100%',
        margin: 12,
        borderWidth: 1,
        padding: 20,
        borderRadius: 12,
    },
});