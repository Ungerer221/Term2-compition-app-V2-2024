import { View, Text, TextInput, TouchableOpacity, StyleSheet, Switch } from 'react-native'
import React, { useState } from 'react'
// import { createNewBucketItem } from '../services/plantDbService'

export default function AdminScreen() {


    const [title, setTitle] = useState('')
    const [priority, setPriority] = useState(false)
    const [due, setDue] = useState('')
    const [description, setDescription] = useState('')
    const [growthTime, setGrowthTime] = useState('')


    return (
        <View style={styles.container}>
            <TextInput
                style={styles.inputField}
                placeholder="Plant Title"
                onChangeText={newText => setTitle(newText)}
                defaultValue={title}
            />

            {/* <TextInput
                style={styles.inputField}
                placeholder="When do you want it done?"
                onChangeText={newText => setDue(newText)}
                defaultValue={due}
            /> */}

            <TextInput
                multiline
                numberOfLines={4}
                style={styles.inputField}
                placeholder="Description of bucket list"
                onChangeText={newText => setDescription(newText)}
                defaultValue={description}
            />

            <TextInput
                multiline
                numberOfLines={4}
                style={styles.inputField}
                placeholder="Growth Time"
                onChangeText={newText => setGrowthTime(newText)}
                defaultValue={growthTime}
            />

            <View style={styles.switch}>
                <Switch
                    trackColor={{ false: 'black', true: 'green' }}
                    thumbColor={priority ? 'yellow' : 'white'}
                    ios_backgroundColor="#3e3e3e"
                    onValueChange={(toggle) => setPriority(toggle)}
                    value={priority}
                />
                <Text>Priority?</Text>
            </View>

            {/* the onpress for our create item */}
            <TouchableOpacity style={styles.button} onPress={handleCreation}>
                <Text style={styles.buttonText}>Create Plant Item</Text>
            </TouchableOpacity>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
        width: '100%',
        // backgroundColor:'gray',
    },
    container02: {
        backgroundColor: '#82BF00'
    },
    inputField: {
        borderWidth: 2,
        borderColor: 'black',
        marginTop: 15,
        padding: 10,
        color: 'black',
        width: '90%',
    },
    button: {
        backgroundColor: "green",
        textAlign: 'center',
        padding: 15,
        marginTop: 30
    },
    buttonText: {
        textAlign: 'center',
        color: 'white'
    },
    switch: {
        marginTop: 15,
        display: 'flex',
        flexDirection: 'row-reverse',
        alignItems: 'center',
        gap: 10,
    }
});