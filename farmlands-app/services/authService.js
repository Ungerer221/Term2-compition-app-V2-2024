import { getAuth, signInWithEmailAndPassword, createUserWithEmailAndPassword, signOut } from "firebase/auth";
import { auth, db } from "../config/firebase";
import { addDoc, collection, doc, getDoc, updateDoc } from "firebase/firestore";


export const handleLogin = (email, password) => {
    signInWithEmailAndPassword(auth, email, password)
        .then((userCredential) => {
            // Signed in
            const user = userCredential.user;
            console.log("logged In User - " + user.email)
            // ...
        })
        .catch((error) => {
            const errorCode = error.code;
            const errorMessage = error.message;
            console.log(errorMessage)
        });
}

// Signup function
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

// TODO : Logout Function
export const handleLogout = () => {
    const auth = getAuth();
    signOut(auth).then(() => {
        // Sign-out successful.
        console.log('User signed out successfully');
    }).catch((error) => {
        // An error happened.
        console.error('Error signing out:', error);
    });
    // try {
    //     await signOut(auth);
    //     console.log('User signed out successfully');
    //     // You can navigate to another screen or update the state as needed after logout
    // } catch (error) {
    //     console.error('Error signing out:', error);
    // }
    console.log("Executed Function")
}

