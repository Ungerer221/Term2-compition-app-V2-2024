import { getAuth, signInWithEmailAndPassword, signOut } from "firebase/auth";
import { auth } from "../config/firebase";


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


// to log out
// export const handleSignout = () => {
//     getAuth()
//         .revokeRefreshTokens(uid)
//         .then(() => {
//             return getAuth().getUser(uid);
//         })
//         .then((userRecord) => {
//             return new Date(userRecord.tokensValidAfterTime).getTime() / 1000;
//         })
//         .then((timestamp) => {
//             console.log(`Tokens revoked at: ${timestamp}`);
//         });
// }