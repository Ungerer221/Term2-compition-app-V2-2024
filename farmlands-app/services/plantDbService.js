import { collection, addDoc, getDocs, query, orderBy, Firestore, } from "firebase/firestore";
import { db } from "../config/firebase";
import { doc, getDoc, updateDoc, deleteDoc } from "firebase/firestore";

// * : create new list itm function 
export const createNewPlantItem = async (item) => {
    try {
        // the addDoc it adding a new document and we need to specify where to add it - to a collection in our db - imported at the top -should pop up
        // * to create a user -----------------------------------------------------------------------
        // docref - our reference to our newly created document (brand ne with a self-generated ID)
        const docRef = await addDoc(collection(db, "plants"), item);
        console.log("Document written with ID: ", docRef.id);
        // * : to navigate back to previous screen after filling in info
        return true //  be more specific on why 
        // we cant ascces the info yet
        // console.log("document written with first: ", docRef.first);
    } catch (e) {
        console.error("Error adding document: ", e);
        // * : to navigate back to previous screen after filling in info
        return false
    }
}


// * : get all items 
// ? : is there a way to use this to get single item data
export const getAllPlantsList = async () => {
    var allPlants = []

    var q = query(collection(db, "plants"), orderBy('date', "desc"))
    const querySnapShot = await getDocs(q);

    querySnapShot.forEach((doc) => {
        allPlants.push({ ...doc.data(), id: doc.id })
    });
    // console.log(allPlants)
    return allPlants
}

// * : Get single Item 
// possable method
// 1. get id of the item you pressed
// 2. have that item id = var
// 3. have the var being called in the getDoc
// export const getPlantItem = async (itemID) => {
//     // const id = query(collection(db,"items"))

//     const docRef = doc(db, "plants", itemID);
//     const docSnap = await getDoc(docRef);
//     if (docSnap.exists()) {
//         console.log("Document data:", docSnap.data());
//     } else {
//         // docSnap.data() will be undefined in this case
//         console.log("No such document!");
//     }
// }

// TODO : Update Functionality
export const updatePlantItem = async (itemID) => {
    try {
        const docRef = doc(db, "plants", itemID);
        await updateDoc(docRef, {
            name: '', // this is what we are changing 
            description: '',
            growthTime: '',
        });
        console.log("Document Updated with ID: ", docRef.id);
        return true //  be more specific on why 
    } catch (e) {
        console.error("Error Updating document: ", e);
        // * : to navigate back to previous screen after filling in info
        return false
    }
}
// const updateForm = document.querySelector('.update')
// updateForm.addEventListener('submit', (e)=>{
//     e.preventDefault()

//     const docRef = doc(db, 'plants', updateForm.id.value)

//     updateDoc(docRef, {
//         name:'update name'
//     })
//     .then(()=>{
//         updateForm.reset()
//     })
// })

// TODO : Delete FUnctionality
export const deletePlant = async (plantId) => {
    try {
        //   await Firestore().collection('plants').doc(itemID).delete();
        await deleteDoc(doc(db, "plants", plantId));
        // const docRef = doc(db, "plants", itemID.id);
        // const docSnap = await deleteDoc(docRef);
        console.log('Document successfully deleted!');
    } catch (error) {
        console.error('Error deleting document: ', error);
    }
};
