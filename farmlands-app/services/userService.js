import { collection, addDoc, getDocs, query, orderBy, Firestore, where, } from "firebase/firestore";
import { auth, db } from "../config/firebase";
import { doc, getDoc, updateDoc, deleteDoc } from "firebase/firestore";
import { getAuth } from "firebase/auth";
import { getloggedinUser } from "./authService";

// Create user is in auth

// TODO : Get All users
export const getAllUsersList = async () => {
    var allUsers = []

    var q = query(collection(db, "users"), orderBy("score", "desc"), where("score", ">", 0) )
    const querySnapShot = await getDocs(q);

    querySnapShot.forEach((doc) => {
        allUsers.push({ ...doc.data(), id: doc.id })
    })
    // console.log("get all users Log")
    // console.log(allUsers)
    return allUsers
}

// console.log(getloggedinUser())

// * : get single user data
export const getUserItem = async () => {
    const auth = getAuth();
    const user = auth.currentUser;
    // const currentUserUid = getloggedinUser()
    // console.log(currentUserUid)
    try {
        const docRef = doc(db, "users", user.uid);
        const docSnap = await getDoc((docRef), user);

        if (docSnap.exists()) {
            // ? this loops infinitly 
            console.log("Document data:", docSnap.data());
            // TODO: include the id in the docsnap
            // var theUserData = {...doc.data(), id: doc.id}
            var theUserData = { ...docSnap.data(), id: docSnap.id } // to get the id frfom the docsnap
            // usersData.push(theUserData)
            // return docSnap.data() 
            return theUserData; // Directly return the document data
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
// export const getloggedinUser = async () => {
//     const auth = getAuth();
//     const user = auth.currentUser;
//     if (user) {
//         // User is signed in, see docs for a list of available properties
//         // https://firebase.google.com/docs/reference/js/auth.user
//         const uid = user.uid;
//         // ...
//         console.log(uid)
//         return uid // if you wan to return data froma function
//     } else {
//         // User is signed out
//         // ...
//     }
// }