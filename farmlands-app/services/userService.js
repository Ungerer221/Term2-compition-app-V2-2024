import { collection, addDoc, getDocs, query, orderBy, Firestore, } from "firebase/firestore";
import { db } from "../config/firebase";
import { doc, getDoc, updateDoc, deleteDoc } from "firebase/firestore";
import { getAuth } from "firebase/auth";

// Create user is in auth

// TODO : Get All users
export const getAllUsersList = async () => {
    var allUsers = []

    var q = query(collection(db, "users"))
    const querySnapShot = await getDocs(q);

    querySnapShot.forEach((doc) => {
        allUsers.push({ ...doc.data(), id: doc.id })
    })
    // console.log(allUsers)
    return allUsers
}
// TODO : get single user
// export const getUserItem = async (users, id) => {
//     // const auth = getAuth();
//     // const user = auth.currentUser;
//     try {
//         const docRef = doc(db, users, id);
//         const docSnap = await getDoc(docRef);

//         if (docSnap.exists()) {
//             console.log("Document data:", docSnap.data());
//             return docSnap.data(); // Directly return the document data
//         } else {
//             console.log("No such document!");
//             return null; // Return null if the document does not exist
//         }
//     } catch (error) {
//         console.error("Error getting UserItem: ", error);
//         throw error; // Optionally rethrow the error to handle it elsewhere
//     }
// };
export const getUserItem = async (id) => {
    // TODO : 1. get the Item of currently logged in user using the user id or uid
    // TODO : 2. Call the data to the profile screen 
    // TODO : 3. display the data
    try {
        const docRef = doc(db, "users", "WjYXoE9eiEWzAmqV1HclpQ2wfZp2");
        const docSnap = await getDoc(docRef);

        if (docSnap.exists()) {
            // console.log("Document data:", docSnap.data());
            return docSnap.data(); // Directly return the document data
        } else {
            // docSnap.data() will be undefined in this case
            console.log("No such document!");
            return null; // Return null if the document does not exist
        }
    } catch (error) {
        console.error("Error getting UserItem: ", error);
        //         throw error; // Optionally rethrow the error to handle it elsewhere
    }
// return 
}