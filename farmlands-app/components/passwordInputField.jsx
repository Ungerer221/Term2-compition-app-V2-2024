import { View, Text, StyleSheet, TextInput } from 'react-native'
import React from 'react'

export default function PasswordInputField() {
    const [text, onChangeText] = React.useState('');
    return (
        <View style={styles.container}>
            <TextInput
                style={styles.input}
                placeholder='password'
                onChangeText={onChangeText}
                value={text}
            />
        </View>
    )
}
const styles = StyleSheet.create({
    container:{
        width:'100%',
        justifyContent:'center',
        alignItems:'center',
    },
    input: {
        height: 40,
        width: '100%',
        margin: 12,
        borderWidth: 1,
        padding: 20,
        borderRadius:12,
    },
})