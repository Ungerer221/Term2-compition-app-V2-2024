import { View, Text, StyleSheet, Pressable, TouchableOpacity, ScrollView } from 'react-native'
import React, { useEffect, useState } from 'react'
import { useFocusEffect } from '@react-navigation/native'
import Sun01Icon from '../icons/sun-01-stroke-rounded'
import Menu01IconList from '../icons/menu-01-stroke-rounded'
import AddCircleHalfDotIcon from '../icons/add-circle-half-dot-stroke-rounded'
import { getAllUsersList } from '../services/userService'

export default function UserListScreen({ navigation }) {

  const goToAdd = () => { navigation.navigate("CompAdd") }

  const [users, setUsers] = useState([]) // setting the use state to an empty array

  useFocusEffect(
    React.useCallback(() => {
      handleGettingUserData()
      return () => {
        // Do something when the screen is unfocused
        // Useful for cleanup functions
        // DO NOTHING
      }
    })
  )

  const handleGettingUserData = async () => {
    var allUserData = await getAllUsersList()
    setUsers(allUserData)
  }

  return (
    <ScrollView>
      <View style={styles.container}>
        <View style={styles.container02}>
          <View style={styles.infoCon}>
            <Text style={styles.titleText01}>User List</Text>
            <Menu01IconList />
          </View>
          {/* add button */}
          <Pressable style={styles.addButton}>
            {/* <Text style={styles.addButtonText}>Add</Text> */}
            <AddCircleHalfDotIcon />
          </Pressable>
          {/* this is the card element */}
          <View style={styles.cardCon}>
            <View >
              <Text style={styles.cardConInfoText}>Current Users</Text>
            </View>
            {
              // just so that if there is empty data it doesnt bug out
              // first check if items is empty - if not empty then display map - empty then display text
              users != [] ? (
                users.map((item, index) => (

                  <TouchableOpacity key={index} style={styles.card} onPress={() => navigation.navigate("",
                    {
                      itemID: item?.id, // here we are passing the data to the details page
                      itemUserName: item?.username,
                      itemEmail: item?.email, // here we are passing the data to the details page
                      itemPassword: item?.password,
                      itemEScore: item?.score,
                    }
                  )}>
                    <Text>{item.username}</Text>
                    {/* // when the item is a priority the star must show - with if statement */}
                    {/* {item.priority ? <AntDesign name="star" size={24} color="orange" /> : null} */}
                  </TouchableOpacity>
                ))
              ) : (
                <Text>no items found</Text>
              )
            }
          </View>
        </View>
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
    // backgroundColor:'gray',
    padding: 20,
    gap: 20,
  },
  container02: {
    width: '100%',
    // height: '100%',
    padding: 10,
    borderWidth: 2,
    borderRadius: 22,
    gap: 20,
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
  addButton: {
    width: '100%',
    borderRadius: 22,
    borderWidth: 2,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 20,
    flexDirection: 'row',
    gap: 10,
    backgroundColor: '#A08BF6'
  },
  addButtonText: {
    fontSize: 24,
  },
  cardCon: {
    width: '100%',
    padding: 10,
    gap: 10,
    borderRadius: 12,
    borderWidth: 2,
  },
  card: {
    width: '100%',
    // backgroundColor: '#F65774',
    padding: 15,
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    borderRadius: 12,
    borderWidth: 2,

  },
})