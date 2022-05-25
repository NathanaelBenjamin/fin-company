import { initializeApp } from 'firebase/app';
import {
    getAuth,
    signInWithRedirect,
    signInWithPopup,
    signInWithEmailAndPassword,
    GoogleAuthProvider,
    createUserWithEmailAndPassword,
    signOut,
    onAuthStateChanged

}
    from 'firebase/auth';
import {
    getFirestore,
    doc,
    getDoc,
    setDoc,
} from 'firebase/firestore';


const firebaseConfig = {
    apiKey: "AIzaSyDUWeLFf9T7NLXA3GdvGcCv2cM-84jlBk0",
    authDomain: "managee-fe589.firebaseapp.com",
    projectId: "managee-fe589",
    storageBucket: "managee-fe589.appspot.com",
    messagingSenderId: "599508324257",
    appId: "1:599508324257:web:286d9af4f53770a1ac05e0",
    measurementId: "G-5HBX8E4K9T"
};

// Initialize Firebase
const firebaseApp = initializeApp(firebaseConfig);

const provider = new GoogleAuthProvider();
provider.setCustomParameters({
    prompt: 'select_account'
});

export const auth = getAuth()
export const siginWithGooglePopup = () => signInWithPopup(auth, provider)
export const signInWithGoogleRedirect = () => signInWithRedirect(auth, provider);
export const db = getFirestore();

export const createUserDocumentFromAuth = async (userAuth,
    additionalInformation = {}
) => {
    if (!userAuth) return;
    const userDocRef = doc(db, 'users', userAuth.uid)


    const userSnapshot = await getDoc(userDocRef)
    // console.log(userDocRef);
    if (!userSnapshot.exists()) {
        const { displayName, email } = userAuth
        const createdAt = new Date()
        try {
            await setDoc(userDocRef, {
                displayName, email, createdAt,
                ...additionalInformation,
            })
        }
        catch (error) {
            console.log('this is an error', error.message);
        }
        return userDocRef
    }
}
export const createEmailAndPasswordAuth = async (email, password) => {
    if (!email || !password) return;
    return await createUserWithEmailAndPassword(auth, email, password)
}

export const signInWithEmailAndPasswordAuth = async (email, password) => {
    if (!email || !password) return;
    return await signInWithEmailAndPassword(auth, email, password)
}


export const signOutUser = async () => {
    await signOut(auth)
}

export const onAuthStateChangedListener = (callback) => {

    return onAuthStateChanged(auth, callback)
}
// export const auth = getAuth();
// export const siginWithGooglePopup = () => signInWithPopup(auth, provider);
// export const signInWithGoogleRedirect = () => signInWithRedirect(auth, provider);


// export const db = getFirestore();

// export const createUserDocumentFromAuth = async (userAuth) => {
//     const userDocRef = doc(db, 'users', userAuth.uid);
//     console.log(userDocRef);

//     const userSnapshot = await getDoc(userDocRef)


//     if (!userSnapshot.exists()) {
//         const { email, displayName } = userAuth
//         const createdAt = new Date()

//         try {
//             await setDoc(userDocRef, {
//                 displayName, email, createdAt
//             })
//         }
//         catch (error) {
//             console.log('error creating the user', error.message);
//         }
//         return userDocRef
//     }


// }







