import { View, Text, TextInput,StyleSheet } from 'react-native'
import React from 'react'

export default function UserNameInput() {
    const [text, onChangeText] = React.useState('hey');
  return (
    <View style={styles.container}>
            <TextInput
                style={styles.input}
                placeholder='username'
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
        justifyContent:'flex-start',
        alignItems:'center',
    },
})