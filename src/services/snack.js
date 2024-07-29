import { collection,getDocs,doc,getDoc,addDoc,deleteDoc,updateDoc} from 'firebase/firestore';
import { db } from "../config/firestore";

export const getAllSnack = async () => {
  const collectionRef = collection(db, 'snack')
  const snapshot = await getDocs(collectionRef)
  console.log(snapshot);
  const cleanData = snapshot.docs.map((doc) => {
    return {id:doc.id, ...doc.data()}
  })
  console.log(cleanData);
  return cleanData
}

export const getSnackById = async (id) => {
  const docRef = doc(db, 'snack',id);
  const docSnap = await getDoc(docRef);

  if (docSnap.exists()) {
    return {id:docSnap.id, ...docSnap.data()}
  } else {
    // docSnap.data() will be undefined in this case
    throw new Error ("Couldn't find this Snack!");
  }
  
}


export const cleanSnackData = (SnackData) => {
  const defaultLnk = "https://cloudinary.images-iherb.com/image/upload/f_auto,q_auto:eco/images/snl/snl68752/l/8.jpg"
  const { imageLink, ...rest } = SnackData
  const newSnack = { ...rest, imageLink: imageLink || defaultLnk }
  return newSnack
}


export const createSnack = async (SnackData) => {
  try {
    const cleanedSnack = cleanSnackData(SnackData)
    const collectionRef = collection(db, 'snack')
    const docRef = await addDoc(collectionRef, cleanedSnack)
    return docRef.id
  } catch (error) {
    throw error
  }
}


export const deleteSnack = async (id) => {
  const docRef = doc(db, 'snack',id);
  await deleteDoc(docRef);
}


export const updateSnackByID = async (id, SnackData) => {
  const docRef = doc(db, 'snack', id);
  const cleanedSnack = cleanSnackData(SnackData)
  await updateDoc(docRef, cleanedSnack)
  
}


// export const updateSnackByID = async (id, newHP) => {
//   const docRef = doc(db, 'snack', id);

//   await updateDoc(docRef, {
//     hp:newHP
//   })
  
// }


