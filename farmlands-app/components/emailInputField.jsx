import { View, Text, StyleSheet, TextInput } from 'react-native'
import React from 'react'

export default function EmailInputField() {
    const [text, onChangeText] = React.useState('');
    return (
        <View style={styles.container}>
            <TextInput
                style={styles.input}
                placeholder='email here'
                onChangeText={onChangeText}
                value={text}
                autoComplete='email'
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