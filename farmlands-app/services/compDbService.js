import { collection, addDoc, getDocs, query, orderBy, Firestore, } from "firebase/firestore";
import { db } from "../config/firebase";
import { doc, getDoc, updateDoc, deleteDoc, } from "firebase/firestore";


// * : Create Doc
export const createNewCompItem = async (item) => {
    try {

        const docRef = await addDoc(collection(db, "competitions"), item);
        console.log("Document written with ID: ", docRef.id);
        return true

    } catch (e) {
        console.error("Error adding document: ", e);
        // * : to navigate back to previous screen after filling in info
        return false
    }
}

// TODO: create a user doc in the competition list
export const addUserToComp = async (compId, enrolledData) => {
    try {
        // 1. specify where we want the data to be added
        const compRef = doc(db, "competitions", compId) // target a specific document see (dayId)

        // 2. specifiy sub collection in this document where we want to add doc
        const enrolledRef = collection(compRef, "enrolled")

        // 3. add doc into this subcollection
        const docRef = await addDoc(enrolledRef, enrolledData)

        console.log("success adding doc id: " + docRef.id)
        return true // success

    } catch (e) {
        console.log("something went wong" + e)
        return false // failed
    }
}


// * : get all docs
export const getAllCompsList = async () => {
    var allComps = []

    var q = query(collection(db, "competitions"))
    const querySnapShot = await getDocs(q);

    querySnapShot.forEach((doc) => {
        allComps.push({ ...doc.data(), id: doc.id })
    })
    // why does is keep calling data
    // console.log(allComps) 
    return allComps
}

// TODO: get all items in the subCollection
export const getAllSubCompItems = async (id) => {
    var allSubCompItems = []

    // Query a reference to a subcollection
    const querySnapshot = await getDocs(collection(db, "competitions", "enrolled",id));
    querySnapshot.forEach((doc) => {
        // doc.data() is never undefined for query doc snapshots
        console.log(doc.id, " => ", doc.data());
    });
    return allSubCompItems
}

// TODO : Get single item 
// export const getCompItem = async (itemID) => {
//     const docRef = doc(db, "competitions", itemID);
//     const docSnap = await getDoc(docRef);
//     if (docSnap.exists()) {
//         // console.log("Document data:", docSnap.data());
//     } else {
//         // docSnap.data() will be undefined in this case
//         console.log("No such document!");
//     }
// }

// TODO : UPdate function


// TODO : Delete function
export const deleteCompItem = async (item) => {
    try {
        // const docRef = doc(db, "competitions", item);
        // const docSnap = await deleteDoc(docRef)
        // const docRef = await deleteDoc(collection(db, "competitions"), item)
        await deleteDoc(doc(db, "competitions", "rxjfHukLsp6ETr3pxXFJ")); // TODO : works but need to make it so that is getting the id from the doc
        console.log('Document successfully deleted!');
    } catch (e) {
        console.error("Error Deleting document: ", e);
        // * : to navigate back to previous screen after filling in info
        return false
    }
}