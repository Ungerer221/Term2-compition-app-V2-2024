import { View, Text, StyleSheet, TextInput, TouchableOpacity, Image, ScrollView } from 'react-native'
// import React from 'react'
import React, { useEffect, useState } from 'react';
// views
import TopNavBar from '../views/topNavBar';

// componenets
import PasswordInputField from '../components/passwordInputField';
import EmailInputField from '../components/emailInputField';
import UserNameInput from '../components/userNameInput';
// firebase
import { createNewUser, getloggedinUser, handleSignup } from '../services/authService';


// todo : make the sign up screen part of the drawer navigation for the menu button
export default function SignUpScreen({ navigation }) {

    // const [uid, setUid] = useState('');
    const [username, setUsername] = useState(''); // uses the onchange value
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [score, setScore] = useState(0); // to set the initial score upon creating to zero
    const [date, setDate] = useState(new Date());


    const handleUserCreation = async () => {
        // var uid = await getloggedinUser()
        var items = { username, email, password, score, date }
        // var success = await createNewUser(items)
        var success = handleSignup(email, password, items)

        // setUid(getloggedinUser.uid)

        // Create user document in Firestore
        // await firebase.firestore().collection('users').doc(userId).set({
        //     email,
        //     username,
        //     // Add any other fields you want to store
        // });
        // console.log("executed")
    }
    // const getloggedinUser = ()=>{
    //    useEffect(()=>{
    //     firebase
    //    })
    // }

    const signUp = () => { handleUserCreation() }

    // chatGpt
    // const handleSignUp = async () => {
    //     try {

    //         // Create user in Firebase Authentication
    //           const userCredential = await firebase.auth().createUserWithEmailAndPassword(email, password);

    //         // Get the user ID
    //         const userId = userCredential.user.uid;

    //         // Create user document in Firestore
    //         await firebase.firestore().collection('users').doc(userId).set({
    //             email,
    //             username,
    //             // Add any other fields you want to store
    //         });

    //         console.log('User signed up successfully!');

    //     } catch (error) {
    //         console.error('Error signing up:', error);
    //     }
    // };

    return (
        <ScrollView>
            <View style={styles.container}>
                <TopNavBar />
                <Text style={styles.loginHeadingText}>Sign Up</Text>
                <Text>If you already have an account then login</Text>
                <Image
                    style={styles.backGroundImage}
                    source={require('../assets/54.png')}
                />
                <View style={styles.formCon}>
                    {/* //* username */}
                    <TextInput
                        style={styles.input}
                        placeholder='Username'
                        onChangeText={newText => setUsername(newText)}
                        value={username}
                    />
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
                    <View style={styles.buttonContainer}>
                        {/* submit button  */}
                        <TouchableOpacity
                            style={styles.signUpButton}
                            onPress={signUp}
                        >
                            <Text style={styles.signUpButtonText}>SignUp</Text>
                        </TouchableOpacity>
                        {/* link to login */}
                        <TouchableOpacity
                            style={styles.navSignupButton}
                            onPress={() => navigation.navigate('Login')}
                        >
                            <Text style={styles.loginButtonText}>Login</Text>
                        </TouchableOpacity>
                    </View>
                </View>
            </View>
        </ScrollView>
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
        gap: 20,
        paddingTop: 40,
    },
    loginHeadingText: {
        fontSize: 42,
        fontWeight: '700',
    },
    input: {
        width: '100%',
        margin: 12,
        borderWidth: 1,
        padding: 20,
        borderRadius: 12,
    },
    formCon: {
        width: '100%',
        flex: 1,
        justifyContent: 'flex-start',
        alignItems: 'center',
        padding: 20,
        // backgroundColor:'red',
        // gap:10,
    },
    buttonContainer: {
        justifyContent: 'center',
        alignItems: 'center',
        width: '100%',
        gap: 10,
    },
    signUpButton: {
        width: '100%',
        backgroundColor: '#41A8BB',
        justifyContent: 'center',
        alignItems: 'center',
        padding: 20,
        borderRadius: 22,
    },
    signUpButtonText: {
        color: '#fff',
        fontWeight: '700',
        fontSize: 16,
    },
    backGroundImage: {
        width: '100%',
        height: 200,
        // backgroundColor:'red',
    },
    loginButtonText: {
        color: '#fff',
        fontWeight: '700',
        fontSize: 16,
    },
    navSignupButton: {
        width: '50%',
        backgroundColor: '#E6BE27',
        justifyContent: 'center',
        alignItems: 'center',
        padding: 20,
        borderRadius: 22,
    },
});