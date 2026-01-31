import { getFirestore, collection, getDocs, where, query, doc, getDoc, addDoc, serverTimestamp } from "firebase/firestore";
import { app } from './config'

const db = getFirestore(app);

export const getProducts = async () => {
    const querySnapshot = await getDocs(collection(db, "items"))
    const products = []

    querySnapshot.forEach((doc) => {
        products.push({ ... doc.data(), id: doc.id})
    })

    return products
}

export const getCategories = async () => {
    const querySnapshot = await getDocs(collection(db, "categories"))
    const categories = []

    querySnapshot.forEach((doc) => {
        categories.push({ ...doc.data(), id: doc.id})
    })
    
    return categories

}

export const getProductsByCategory = async (category) => {
    const q = query(collection(db, "items"), where("category", "==", category))
    const querySnapshot = await getDocs(q)
    const filterProducts = []

        querySnapshot.forEach((doc) => {
            filterProducts.push({ ...doc.data(), id: doc.id})
        })

        return filterProducts
}

export const getDetail = async (id) => {
    const docRef = doc(db, "items", id)
    const docSnap = await getDoc(docRef)

    if (docSnap.exists()) {
        return { ...docSnap.data(), id: docSnap.id}
    } else {
     console.log("No such document!")
}
}

export const createOrder = async (user, items, total) => {
    const order = {
        user,
        items,
        total,
        time: serverTimestamp()
    }

    try { 
        const docRef = await addDoc(collection(db, "orders"), order)

        return docRef.id
    } catch (error) {
        console.error("Error al agregar documento: ", error)
    }
}