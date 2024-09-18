import { View, Text, StyleSheet, TouchableOpacity, Modal, Pressable, TextInput, ScrollView } from 'react-native'
import React, { useEffect, useState } from 'react'
import { useFocusEffect } from '@react-navigation/native'
import { deletePlant, deletePlantItem, getPlantItem, updatePlantItem } from '../services/plantDbService'
import { addUserToComp, deleteCompItem, getCompItem } from '../services/compDbService';
import Sun01Icon from '../icons/sun-01-stroke-rounded';
import Delete02IconW from '../icons/delete-02-stroke-roundedW';
import { QuerySnapshot, collection, doc, onSnapshot, query } from '@firebase/firestore';
import { db } from '../config/firebase';
import { getUserItem } from '../services/userService';
import UserCircleIcon from '../icons/user-circle-stroke-rounded';

// the competition detail screen
export default function CompDetailsScreen({ route, navigation, }, props) {

    // * useStates.................................................................................
    // modal usestate
    const [modalVisible, setModalVisible] = useState(false);
    // competion item deatls usestates
    const [compItem, setCompItem] = useState([])
    const [itemId, setItemId] = useState()
    const [itemName, setItemName] = useState()
    const [itemDescription, setItemDescription] = useState()
    const [itemEndDay, setItemEndDay] = useState()
    const [itemEndMonth, setItemEndMonth] = useState()
    const [itemEndYear, setItemEndYear] = useState()
    const [itemTargetScore, setItemTargetScore] = useState(route.params.itemTargetScore)

    const { competition } = props
    const [enrolled, setEnrolled] = useState([]);
    const [user, setUser] = useState([]);
    const [userScores, setUserScores] = useState([]); // for the looping and getting all the users score data
    const [totalEnrolled, setTotalEnrolled] = useState();

    const [enrollUsername, setEnrollUsername] = useState()
    const [enrollEmail, setEnrollEmail] = useState()

    useFocusEffect(
        React.useCallback(() => {
            const { itemID, itemName, itemDesc, itemEndDay, itemEndMonth, itemEndYear, itemTargetScore } = route.params;

            // handleGettingCompItemData(itemID)
            // * the competition data
            setItemId(itemID)
            setItemName(itemName)
            setItemDescription(itemDesc)
            setItemEndDay(itemEndDay)
            setItemEndMonth(itemEndMonth)
            setItemEndYear(itemEndYear)
            setItemTargetScore(itemTargetScore)

            // * handleSettingEnrollment()
            getCurrentUserData()
            // console.log(getCurrentUserData)

            const compRef = doc(db, "competitions", itemID)
            const enrolledRef = collection(compRef, "enrolled")

            // * showing the enrolled users data...................................................
            const unsubscribe = onSnapshot(enrolledRef, (querySnapshot) => {
                // setting the enrolled data to variable
                const enrolledData = [];
                querySnapshot.forEach((doc) => {
                    enrolledData.push(doc.data());
                    // console.log("Current enrolled: ", doc.data());
                });
                // setting the enrolled data to a state = enrolled
                setEnrolled(enrolledData) // from variable
                console.log(enrolledData)
                // getting the length of the array enrolled data
                var numberOfEnrolled = enrolledData.length
                setTotalEnrolled(numberOfEnrolled)
                // console.log(numberOfEnrolled)

                // TODO: here we want to loop through enrolled data and get all the scores to compare 
            });
            return () => {
                console.log("OutOfview")
                unsubscribe()
            }
        }, [])
    )


    // * need to call the current user data
    const getCurrentUserData = async () => {
        var userData = await getUserItem()
        setUser(userData)
    }


    // TODO: to add the user to the enrolled subCollection similar to adding the user from auth
    const handleSettingEnrollment = async () => {
        var compData = await addUserToComp(itemId, user) // this must be the user object
        setCompItem(compData)
        // addUserToComp(),
        // console.log("pressed")
    }

    const enrollUser = () => { handleSettingEnrollment() }

    useEffect(() => {
        //Get set admin score
        const targetScore = itemTargetScore
        //Loop through object and create new object with username : score
        let collectedUsers = []
        enrolled.forEach(userObj => {
            if (Number(userObj.score) >= targetScore) {
                let userAndScore = {}
                userAndScore[userObj.username] = userObj.score
                collectedUsers.push(userAndScore)
            }
        });
        setUserScores(collectedUsers)

    }, [enrolled])
    console.log('User Scores', userScores)

    // * Determinig the winner function Attempt to loop through all the users data and to get all the scores 
    // const getAllScores = (enrolled) => {
    //     const scores = [];
    //     // Loop through each user and push their score into the scores array
    //     for (let i = 0; i < enrolled.length; i++) {
    //       scores.push(enrolled[i].score);
    //     }
    //     setUserScores(scores)
    //     return scores;
    // };

    return (
        <ScrollView>
            <View style={styles.container}>
                <View style={styles.container02}>
                    <View style={styles.infoCon}>
                        <Text style={styles.titleText01}>Item Details</Text>
                        <Sun01Icon />
                    </View>
                    {/* card view */}
                    <View style={styles.enrollCard}>
                        <View style={styles.enrollCardTitleRow}>
                            <View style={styles.enrollCardTitleCon}>
                                <Text style={styles.enrollCardTitle}>{itemName}</Text>
                                <Text style={styles.enrollText03}>Users: ({totalEnrolled})</Text>
                            </View>
                            <Sun01Icon />
                        </View>
                        <Text>Description : {itemDescription}</Text>
                        <View style={styles.enrollDateMainContainer}>
                            <Text style={styles.enrollText03}>End Date:</Text>
                            <View style={styles.enrollCardDateCon}>
                                <View style={styles.enrollCardDateBlock}>
                                    <Text style={styles.enrollText02}>{itemEndDay}</Text>
                                </View>
                                <Text style={styles.enrollText02}>:</Text>
                                <View style={styles.enrollCardDateBlock}>
                                    <Text style={styles.enrollText02}>{itemEndMonth}</Text>
                                </View>
                                <Text style={styles.enrollText02}>:</Text>
                                <View style={styles.enrollCardDateBlock}>
                                    <Text style={styles.enrollText02}>{itemEndYear}</Text>
                                </View>
                            </View>
                        </View>
                        <View>
                            {/* the enroll button */}
                            <TouchableOpacity style={styles.enrollBtn} onPress={enrollUser}>
                                <Text style={styles.enrollBtnText}>Enroll</Text>
                            </TouchableOpacity>
                        </View>
                    </View>

                    {/* // * show current users in the competition.............. */}
                    <View style={styles.usersListCon}>
                        <Text style={styles.enrollText03}>Current Participents in this Competition:</Text>
                        {/* //* maping the users.................... */}
                        {enrolled != [] ? (
                            enrolled.map((item, index) => (
                                <View key={index} style={styles.usersListItem}>
                                    {/* <Text>{item.name}</Text> */}
                                    <View>
                                        <View style={styles.usersListItemCon}>
                                            <Text style={styles.usersListItemheadingText}>{item.username}</Text>
                                            <Text>${item.score}.00</Text>
                                        </View>
                                        <Text>{item.email}</Text>
                                    </View>
                                    <UserCircleIcon />
                                </View>
                            ))
                        ) : <Text></Text>}
                    </View>
                </View>
                {/* <Text>CompDetailsScreen:{itemName}</Text> */}
            </View>
        </ScrollView>
    )
}
const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'flex-start',
        width: '100%',
        height: '100%',
        minHeight: 850,
        // backgroundColor:'gray',
        padding: 20,
        gap: 20,
    },
    container02: {
        marginTop: 50,
        width: '100%',
        // height: '100%',
        padding: 10,
        borderWidth: 2,
        borderRadius: 22,
        gap: 20,
        // backgroundColor:'red',
    },
    infoCon: {
        width: '100%',
        padding: 20,
        borderRadius: 12,
        borderWidth: 2,
        justifyContent: 'space-between',
        alignItems: 'center',
        flexDirection: 'row',
        backgroundColor: '#B2DFE9',
    },
    titleText01: {
        fontSize: 24,
        fontWeight: '900',
        width: 200,
    },
    enrollCard: {
        // height:50,
        padding: 10,
        borderWidth: 2,
        borderColor: 'black',
        borderRadius: 12,
        marginTop: 10,
        gap: 10,
        backgroundColor: '#E0E9EB',
    },
    enrollCardTitleRow: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
    },
    enrollCardTitleCon: {
        flexDirection: 'row',
        alignItems: 'center',
        gap: 10,
    },
    enrollCardTitle: {
        fontSize: 24,
        fontWeight: '700',
    },
    enrollDateMainContainer: {
        gap: 10,
    },
    enrollText02: {
        fontSize: 20,
        fontWeight: '600',
    },
    enrollText03: {
        fontSize: 18,
        fontWeight: '600',
    },
    enrollCardDateCon: {
        paddingHorizontal: 20,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-around',
        gap: 20,
    },
    enrollCardDateBlock: {
        padding: 15,
        borderWidth: 2,
        borderColor: 'black',
        borderRadius: 12,
        backgroundColor: '#fff'
    },
    enrollBtn: {
        backgroundColor: '#A597DE',
        padding: 10,
        borderRadius: 12,
        justifyContent: 'center',
        alignItems: 'center',
        borderWidth: 2,
    },
    enrollBtnText: {
        fontSize: 18,
        fontWeight: '600',
        color: '#fff',
        textTransform: 'capitalize',
    },
    deleteButton: {
        backgroundColor: '#F46987',
        padding: 20,
        borderRadius: 12,
        justifyContent: 'center',
        alignItems: 'center',

    },
    usersListCon: {
        gap: 10,
    },
    usersListItem: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        paddingHorizontal: 20,
        paddingVertical: 10,
        borderWidth: 2,
        borderRadius: 12,
        gap: 10,
    },
    usersListItemheadingText: {
        fontSize: 16,
        fontWeight: "900",
    },
    usersListItemCon: {
        flexDirection: 'row',
        alignItems: 'center',
        gap: 10,
    }
})