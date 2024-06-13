import { getAuth, signInWithEmailAndPassword, createUserWithEmailAndPassword, onAuthStateChanged, signOut } from "firebase/auth";
import { auth, db } from "../config/firebase";
import { addDoc, collection, doc, getDoc, setDoc, updateDoc } from "firebase/firestore";

// * Login Function
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

// * Signup function
export const handleSignup = (email, password,userInfo) => {
    createUserWithEmailAndPassword(auth, email, password)
        .then((userCredential) => {
            // Signed up 
            const user = userCredential.user;
            console.log("User Auth Created Successfully - " + user.email)
            console.log("The User UID: " + user.uid)
            // TODO: Call create new user and also send the user.UID
            createNewUser(userInfo,user.uid)
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
// export const createNewUser = async (item) => {
//     try {
//         //TODO: change to setDOC and use the UID from handle signup
//         const docRef = await addDoc(collection(db, "users"), item); 
//         console.log("user created with ID: ", docRef.id);
//         return true
//     } catch (e) {
//         console.error("Error adding user: ", e);
//         return false
//     }
// }
export const createNewUser = async (user,id) => {
    try {
        const docRef = await setDoc(doc(db, "users", id),user) 
        // console.log("user Doc created with ID: ", docRef.id);
        return true
    } catch (e) {
        console.error("Error adding user: ", e);
        return false
    }
}



// * : Logout Function
export const handleLogout = () => {
    const auth = getAuth();
    signOut(auth).then(() => {
        // Sign-out successful.
        console.log('User signed out successfully');
    }).catch((error) => {
        // An error happened.
        console.error('Error signing out:', error);
    });
    console.log("Executed Function")
}

// * To Get the currently Logged in User
export const getloggedinUser = async () => {
    const auth = getAuth();
    const user = auth.currentUser;
    if (user) {
        // User is signed in, see docs for a list of available properties
        // https://firebase.google.com/docs/reference/js/auth.user
        const uid = user.uid;
        // ...
        // console.log(uid)
        return uid // if you wan to return data froma function
    } else {
        // User is signed out
        // ...
    }
}
