import {
    auth,
    signInWithEmailAndPassword,
    createUserWithEmailAndPassword,
    signOut,
    GoogleAuthProvider,
    signInWithPopup,
    sendPasswordResetEmail,
    fetchSignInMethodsForEmail,
    sendEmailVerification,
    db,
    doc,
    getDocs,
    collection,
    setDoc,
    updateDoc,
    deleteDoc,
    addDoc,
    query,
    where,
    onSnapshot
  } from './firebase';
  

const collectionName = 'Camilomemes';

export const createItem = async (obj) => {
    const colRef = collection(db, collectionName);
    const data = await addDoc(colRef, obj);
    return data.id;
}

export const updateItem = async (id, obj) => {
    const docRef = doc(db, collectionName, id);
    await updateDoc(docRef, obj)
}

export const getItems = async ()=>{
    const colRef = collection(db, collectionName);
    const result = await getDocs(query(colRef));
    return getArrayFromCollection(result);
}