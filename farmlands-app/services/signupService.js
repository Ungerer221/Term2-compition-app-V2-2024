
import { createUserWithEmailAndPassword, getAuth } from "firebase/auth";
import { auth, db } from "../config/firebase";
import { addDoc, collection, doc, getDoc, updateDoc } from "firebase/firestore";

export const handleSignup = (email, password) => {
    createUserWithEmailAndPassword(auth, email, password)
        .then((userCredential) => {
            // Signed up 
            const user = userCredential.user;
            console.log("User Created Successfully - " + user.email)
            // ...
        })
        .catch((error) => {
            const errorCode = error.code;
            const errorMessage = error.message;
            console.log(errorMessage)
            // ..
        });
}

// TODO : Create user in database as the user signs up
export const createNewUser = async (item) => {
    try {
        const docRef = await addDoc(collection(db, "users"), item);
        console.log("user created with ID: ", docRef.id);
        return true
    } catch (e) {
        console.error("Error adding user: ", e);
        return false
    }
}