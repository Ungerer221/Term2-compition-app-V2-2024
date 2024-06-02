import { View, Text, TouchableOpacity, StyleSheet, Image, TextInput, KeyboardAvoidingView, Platform, Keyboard, TouchableWithoutFeedback, } from 'react-native'
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
        <KeyboardAvoidingView
            behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
            style={styles.container}>
            <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
                <View style={styles.container}>
                    <TopNavBar />
                    <View style={styles.innerContainer}>


                        <View style={styles.infoCon}>
                            <Text style={styles.loginHeadingText}>Login</Text>
                            <Text>If you dont have an account please feel free to register</Text>
                        </View>
                        <Image
                            style={styles.backGroundImage}
                            source={require('../assets/44.png')}
                        />
                        {/* input field con */}
                        <View style={styles.formCon}>
                            <View style={styles.inputCon}>
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
                            </View>

                            {/* //* submit button  */}
                            <TouchableOpacity style={styles.loginButton} onPress={login}>
                                <Text style={styles.loginButtonText}>Login</Text>
                            </TouchableOpacity>
                            {/* //* signUp button  */}
                            <TouchableOpacity
                                style={styles.navSignupButton}
                                onPress={() => navigation.navigate('Signup')}
                            >
                                <Text style={styles.SignupButtonText}>Create an account</Text>
                            </TouchableOpacity>
                            {/* <TouchableOpacity
                        style={styles.navSignupButton}
                        onPress={() => navigation.navigate('Home')}
                    >
                        <Text style={styles.loginButtonText}>home</Text>
                    </TouchableOpacity> */}
                            {/* //* Admin  */}
                            <TouchableOpacity
                                style={styles.navAdminButton}
                                onPress={() => navigation.navigate('AdminStack')}
                            >
                                <Text style={styles.loginButtonText}>Admin</Text>
                            </TouchableOpacity>
                        </View>
                    </View>
                </View>
            </TouchableWithoutFeedback>
        </KeyboardAvoidingView>
    )
}
const styles = StyleSheet.create({
    container: {
        flex: 1,
        width: '100%',
        height: '100%',
        backgroundColor: '#fff',
        // backgroundColor: '#90F6DE',
        alignItems: 'center',
        justifyContent: 'flex-start',
        // gap: 20,
        paddingTop: 20,
        padding:5,
    },
    innerContainer:{
        width:'100%',
        height:'90%',
        borderWidth:2,
        borderRadius:22,
        padding:10,
        marginTop:10,
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
        backgroundColor: '#9CCCFF',
        justifyContent: 'center',
        alignItems: 'center',
        padding: 20,
        borderRadius: 22,
        borderWidth: 2,
    },
    loginButtonText: {
        // color: '#fff',
        fontWeight: '700',
        fontSize: 16,
    },
    navSignupButton: {
        width: '100%',
        // backgroundColor: '#A08BF6',
        justifyContent: 'center',
        alignItems: 'center',
        padding: 20,
        borderRadius: 22,
        borderWidth: 2,
    },
    SignupButtonText: {
        color: "#F65774",
        fontSize: 20,
        fontWeight: '700',
    },
    backGroundImage: {
        width: '100%',
        height: 250,
        // backgroundColor:'red',
    },
    input: {
        width: '100%',
        // margin: 12,
        borderWidth: 2,
        padding: 20,
        borderRadius: 12,
    },
    navAdminButton: {
        width: '50%',
        backgroundColor: '#A08BF6',
        justifyContent: 'center',
        alignItems: 'center',
        padding: 10,
        borderRadius: 16,
        borderWidth: 2,
    },
    infoCon: {
        justifyContent: 'center',
        alignItems: 'center',
        padding: 10,
        borderRadius: 16,
        borderWidth: 2,
    },
    inputCon: {
        width: '100%',
        gap: 10,
        paddingVertical: 20,
    }
});