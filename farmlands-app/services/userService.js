import { collection, addDoc, getDocs, query, orderBy, Firestore, } from "firebase/firestore";
import { auth, db } from "../config/firebase";
import { doc, getDoc, updateDoc, deleteDoc } from "firebase/firestore";
import { getAuth } from "firebase/auth";

// Create user is in auth

// TODO : Get All users
export const getAllUsersList = async () => {
    var allUsers = []

    var q = query(collection(db, "users"), orderBy("score", "desc"))
    const querySnapShot = await getDocs(q);

    querySnapShot.forEach((doc) => {
        allUsers.push({ ...doc.data(), id: doc.id })
    })
    console.log("get all users Log")
    // console.log(allUsers)
    return allUsers
}

// TODO : get single user
export const getUserItem = async (userId,id) => {
    // const auth = getAuth();
    // const user = auth.currentUser;
    try {
        const docRef = doc(db, "users", "wRQiXy0pHGhL1LOl2F5fVmnHrXu1");
        const docSnap = await getDoc(docRef);

        if (docSnap.exists()) {
            // ? this loops infinitly 
            // console.log("Document data:", docSnap.data());
            return docSnap.data(); // Directly return the document data
        } else {
            console.log("No such document!");
            return null; // Return null if the document does not exist
        }
    } catch (error) {
        console.error("Error getting UserItem: ", error);
        throw error; // Optionally rethrow the error to handle it elsewhere
    }
};



// * To Get the currently Logged in User
export const getloggedinUser = async () => {
    const auth = getAuth();
    const user = auth.currentUser;
    if (user) {
        // User is signed in, see docs for a list of available properties
        // https://firebase.google.com/docs/reference/js/auth.user
        const uid = user.uid;
        // ...
        console.log(uid)
        return uid // if you wan to return data froma function
    } else {
        // User is signed out
        // ...
    }
}