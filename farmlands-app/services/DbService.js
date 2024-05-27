import { collection, addDoc, getDocs, query, orderBy, } from "firebase/firestore";
import { db } from "../config/firebase";
import { doc, getDoc } from "firebase/firestore";


// Todo : get all items 
export const getAllPlantsList = async () => {
    // var allPlants = []

    // var q = query(collection(db, "items"))
    // const querySnapShot = await getDocs(q);

    // querySnapShot.forEach((doc) => {
    //     allPlants.push({ ...doc.data(), id: doc.id })
    // });
    // console.log(allPlants)
    // return allPlants

    const querySnapshot = await getDocs(collection(db, "items"));
    querySnapshot.forEach((doc) => {
      // doc.data() is never undefined for query doc snapshots
      console.log(doc.id, " => ", doc.data());
    });
}

