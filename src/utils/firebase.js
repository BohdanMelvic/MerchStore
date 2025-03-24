import { initializeApp } from 'firebase/app';
import {
  getAuth,
  signInWithPopup,
  GoogleAuthProvider,
} from 'firebase/auth';
import { getFirestore, doc, getDoc, setDoc } from 'firebase/firestore';

const firebaseConfig = {
    apiKey: "AIzaSyD83Ea6geoxwJzaA-Qtsd-rzZ_ZPuGSVXw",
    authDomain: "edelweiss-page.firebaseapp.com",
    projectId: "edelweiss-page",
    storageBucket: "edelweiss-page.firebasestorage.app",
    messagingSenderId: "777113741865",
    appId: "1:777113741865:web:700e8334cb3e5439c40a38",
    measurementId: "G-4LYD4TJX5S"
  };
  
  // Initialize Firebase
  const app = initializeApp(firebaseConfig);
//   const analytics = getAnalytics(app);

const provider = new GoogleAuthProvider();

provider.setCustomParameters({
  prompt: 'select_account',
});

export const auth = getAuth();
export const signInWithGooglePopup = () => signInWithPopup(auth, provider);

export const db = getFirestore();

export const createUserDocumentFromAuth = async (userAuth) => {
    const userDocRef = doc(db, 'users', userAuth.uid);
  
    const userSnapshot = await getDoc(userDocRef);
  
    if (!userSnapshot.exists()) {
      const { displayName, email } = userAuth;
      const createdAt = new Date();
  
      try {
        await setDoc(userDocRef, {
          displayName,
          email,
          createdAt,
        });
      } catch (error) {
        console.log('error creating the user', error.message);
      }
    }
  
    return userDocRef;
  };