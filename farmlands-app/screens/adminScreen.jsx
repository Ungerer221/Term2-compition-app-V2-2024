import { View, Text, TextInput, TouchableOpacity, StyleSheet, Switch, } from 'react-native'
import React, { useState } from 'react'
import { createNewPlantItem } from '../services/plantDbService'
import DateTimePicker from '@react-native-community/datetimepicker';
// import { createNewBucketItem } from '../services/plantDbService'

export default function AdminScreen() {


    const [name, setName] = useState('')
    // const [priority, setPriority] = useState(false)
    // const [due, setDue] = useState('')
    const [description, setDescription] = useState('')
    const [growthTime, setGrowthTime] = useState('')
    const [date, setDate] = React.useState(new Date());
    const [time, setTime] = React.useState('')
    // const [stamp,setStamp]= React.useState(new Date())


    // * : we want to call the createNewBucketItem function to our create screen 
    // done at the top to pass our data down
    const handleCreation = async () => {
        // todo : need to pass all our data to the function - defined in services file
        // now for item creation
        // TODO : make sure all values have been entered - show error if not - or hide button - basic if statement logic
        var items = { name, description, growthTime, date, time }
        // * : to navigate back to previous screen after filling in info
        var success = await createNewPlantItem(items)
        if (success) {
            navigation.goBack() // if successfull go back home
            // Optional that when the use click create then only will it go back and re-render the data insead of it always re-rendering apon viewing
            // check passing parameters to routes : https://reactnavigation.org/docs/params : passing params to previous screen
        } else {
            // TODO : validation on why
        }
    }


    return (
        <View style={styles.container}>
            <TextInput
                style={styles.inputField}
                placeholder="Plant Name"
                onChangeText={newText => setName(newText)}
                defaultValue={name}
            />

            {/* <TextInput
                style={styles.inputField}
                placeholder="When do you want it done?"
                onChangeText={newText => setDue(newText)}
                defaultValue={due}
            /> */}

            <TextInput
                multiline
                numberOfLines={1}
                style={styles.inputField}
                placeholder="Description of bucket list"
                onChangeText={newText => setDescription(newText)}
                defaultValue={description}
            />

            <TextInput
                multiline
                numberOfLines={1}
                style={styles.inputField}
                placeholder="Growth Time"
                onChangeText={newText => setGrowthTime(newText)}
                defaultValue={growthTime}
            />

            <DateTimePicker
                value={new Date()}
                onChange={(evt, selectedDate) => {
                    setDate(selectedDate);
                }}
            />
            {/* <DateTimePicker
                mode="time"
                value={new Date(0)}
                onChange={(evt, selectedTime) => {
                    setDate(selectedTime);
                }}
            /> */}
            {/* <DateTimePicker
                mode="datetime"
                value={new Date(2023, 0, 1)}
                onChange={(evt, selectedDate) => {
                    setDate(selectedDate);
                }}
            /> */}


            {/* <View style={styles.switch}>
                <Switch
                    trackColor={{ false: 'black', true: 'green' }}
                    thumbColor={priority ? 'yellow' : 'white'}
                    ios_backgroundColor="#3e3e3e"
                    onValueChange={(toggle) => setPriority(toggle)}
                    value={priority}
                />
                <Text>Priority?</Text>
            </View> */}

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
        justifyContent: 'flex-start',
        width: '100%',
        // backgroundColor:'gray',
        gap: 10,
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