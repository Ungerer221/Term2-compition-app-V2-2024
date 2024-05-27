
import { createUserWithEmailAndPassword, getAuth } from "firebase/auth";
import { auth } from "../config/firebase";

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