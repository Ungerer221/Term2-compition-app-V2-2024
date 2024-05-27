import { getAuth, signInWithEmailAndPassword } from "firebase/auth";
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