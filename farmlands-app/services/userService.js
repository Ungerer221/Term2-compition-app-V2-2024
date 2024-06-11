import { collection, addDoc, getDocs, query, orderBy, Firestore, } from "firebase/firestore";
import { db } from "../config/firebase";
import { doc, getDoc, updateDoc, deleteDoc } from "firebase/firestore";

// Create user is in auth

// TODO : Get All users
export const getAllUsersList = async () => {
    var allUsers = []

    var q = query(collection(db,"users"))
    const querySnapShot = await getDocs(q);

    querySnapShot.forEach((doc) => {
        allUsers.push({ ...doc.data(), id: doc.id })
    })
    // console.log(allUsers)
    return allUsers
}

// TODO : get single user
export const getUserData = async (users, id) => {
    try {
        const docRef = doc(db, "users", id);
        const docSnap = await getDoc(docRef);

        if (docSnap.exists()) {
            console.log("Document data:", docSnap.data());
            return docSnap.data(); // Directly return the document data
        } else {
            console.log("No such document!");
            return null; // Return null if the document does not exist
        }
    } catch (error) {
        console.error("Error getting document: ", error);
        throw error; // Optionally rethrow the error to handle it elsewhere
    }
};