import { collection, addDoc, getDocs, query, orderBy, Firestore, } from "firebase/firestore";
import { db } from "../config/firebase";
import { doc, getDoc, updateDoc, deleteDoc } from "firebase/firestore";
// TODO : Create Doc
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


// TODO : get all docs
export const getAllCompsList = async () => {
    var allComps = []

    var q = query(collection(db, "competitions"))
    const querySnapShot = await getDocs(q);

    querySnapShot.forEach((doc) => {
        allComps.push({ ...doc.data(), id: doc.id })
    })
    // console.log(allComps)
    return allComps
}

// TODO : Get single item 
export const getCompItem = async (itemID) => {
    const docRef = doc(db, "competitions", itemID);
    const docSnap = await getDoc(docRef);
    if (docSnap.exists()) {
        // console.log("Document data:", docSnap.data());
    } else {
        // docSnap.data() will be undefined in this case
        console.log("No such document!");
    }
}

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