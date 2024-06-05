// ! this file is in active 
import { createUserWithEmailAndPassword, getAuth } from "firebase/auth";
import { auth, db } from "../config/firebase";
import { addDoc, collection, doc, getDoc, updateDoc } from "firebase/firestore";