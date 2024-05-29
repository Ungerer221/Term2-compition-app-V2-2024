import { View, Text, TextInput, TouchableOpacity, StyleSheet, Switch, Keyboard, TouchableWithoutFeedback, } from 'react-native'
import React, { useState } from 'react'
import { createNewCompItem } from '../services/compDbService'
import Add01Icon from '../icons/add-01-stroke-rounded'
import Menu01IconList from '../icons/menu-01-stroke-rounded'
import AddCircleHalfDotIcon from '../icons/add-circle-half-dot-stroke-rounded'

export default function CompAddScreen() {

    const [name, setName] = useState('')
    const [description, setDescription] = useState('')
    const [endDay, setEndDay] = useState('')
    const [endMonth, setEndMonth] = useState('')
    const [endYear, setEndYear] = useState('')
    // TODO : the enroll will be booleen and will be set to fals eand when user enrols set to true
    

    const handleCompCreation = async () => {
        var items = { name, description, endDay, endMonth, endYear }
        var success = await createNewCompItem(items)
        if (success) {
            NavigationPreloadManager.goBack()
        } else {
            console.log("NOPE")
        }
    }

    return (
        <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
            <View style={styles.container}>
                <View style={styles.inputContainer}>
                    <View style={styles.infoCon}>
                        <Text style={styles.titleText01}>Add a Competititon</Text>
                        <AddCircleHalfDotIcon />
                    </View>
                    <TextInput
                        style={styles.inputField}
                        placeholder="Competition Name"
                        onChangeText={newText => setName(newText)}
                        defaultValue={name}
                    />
                    <TextInput
                        multiline
                        numberOfLines={1}
                        style={styles.inputField}
                        placeholder="Description of Competition"
                        onChangeText={newText => setDescription(newText)}
                        defaultValue={description}
                    />
                    <TextInput
                        style={styles.inputField}
                        placeholder="Day Event ends on"
                        onChangeText={newText => setEndDay(newText)}
                        defaultValue={endDay}
                    />
                    <TextInput
                        style={styles.inputField}
                        placeholder="Month Event ends in"
                        onChangeText={newText => setEndMonth(newText)}
                        defaultValue={endMonth}
                    />
                    <TextInput
                        style={styles.inputField}
                        placeholder="Year Event ends in"
                        onChangeText={newText => setEndYear(newText)}
                        defaultValue={endYear}
                    />
                </View>

                <TouchableOpacity style={styles.button} onPress={handleCompCreation}>
                    {/* <Text style={styles.buttonText}>Create Plant Item</Text> */}
                    <Add01Icon />
                </TouchableOpacity>

            </View>
        </TouchableWithoutFeedback>
    )
}
const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'space-between',
        width: '100%',
        // backgroundColor:'gray',
        gap: 20,
        padding: 20,
    },
    inputContainer: {
        width: '100%',
        // backgroundColor: 'gray',
        gap: 20,
        borderWidth: 2,
        borderRadius: 16,
        padding:5,
    },
    inputField: {
        borderWidth: 2,
        borderRadius: 12,
        borderColor: 'black',
        // marginTop: 10,
        padding: 15,
        color: 'black',
        width: '100%',
    },
    button: {
        padding: 20,
        backgroundColor: '#F46987',
        borderRadius: 22,
        width: '100%',
        alignItems: 'center',
        justifyContent: 'center',
        borderWidth: 2,
        // marginTop: 10,
        marginBottom: 40,
    },
    infoCon: {
        width: '100%',
        padding: 20,
        borderRadius: 12,
        borderWidth: 2,
        justifyContent: 'space-between',
        alignItems: 'center',
        flexDirection: 'row'
    },
    titleText01: {
        fontSize: 24,
        fontWeight: '900',
        width: 200,
    },
})