import { initializeApp, getApps, getApp } from 'firebase/app';
import { getFirestore } from 'firebase/firestore';
import { 
  getAuth, 
  GoogleAuthProvider, 
  signInWithPopup, 
  signInWithEmailAndPassword,
  createUserWithEmailAndPassword,
  sendPasswordResetEmail,
  updateProfile,
  signOut, 
  onAuthStateChanged 
} from 'firebase/auth';

/**
 * Firebase Client Configuration for Nyota Invitations
 * Project: nyotapages
 */
const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_API_KEY || "AIzaSyBS5tnarLnakH6XmTLCmSKLnjVnjWAO2jU",
  authDomain: import.meta.env.VITE_FIREBASE_AUTH_DOMAIN || "nyotapages.firebaseapp.com",
  projectId: import.meta.env.VITE_FIREBASE_PROJECT_ID || "nyotapages",
  storageBucket: import.meta.env.VITE_FIREBASE_STORAGE_BUCKET || "nyotapages.firebasestorage.app",
  messagingSenderId: import.meta.env.VITE_FIREBASE_MESSAGING_SENDER_ID || "302366148046",
  appId: import.meta.env.VITE_FIREBASE_APP_ID || "1:302366148046:web:d8fd3317971d94dfbb179f",
  measurementId: import.meta.env.VITE_FIREBASE_MEASUREMENT_ID || "G-ZSPRZ1TE3S"
};

// Check if valid Firebase credentials are provided via environment variables or defaults
export const isFirebaseConfigured = () => {
  return (
    Boolean(firebaseConfig.apiKey) &&
    firebaseConfig.apiKey !== "AIzaSyMockKeyForDevelopmentOnly" &&
    Boolean(firebaseConfig.projectId)
  );
};

// Initialize Firebase safely
let app = null;
let db = null;
let auth = null;
const googleProvider = new GoogleAuthProvider();
googleProvider.setCustomParameters({ prompt: 'select_account' });

try {
  app = getApps().length === 0 ? initializeApp(firebaseConfig) : getApp();
  db = getFirestore(app);
  auth = getAuth(app);
} catch (error) {
  console.warn("Firebase initialization warning (using local fallback mode):", error.message);
}

export { 
  app, 
  db, 
  auth, 
  googleProvider, 
  signInWithPopup, 
  signInWithEmailAndPassword,
  createUserWithEmailAndPassword,
  sendPasswordResetEmail,
  updateProfile,
  signOut, 
  onAuthStateChanged, 
  firebaseConfig 
};
