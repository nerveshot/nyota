import { initializeApp, getApps, getApp } from 'firebase/app';
import { getFirestore } from 'firebase/firestore';

/**
 * Firebase Client Configuration for Nyota Invitations
 * Scoped strictly to the 'nyota' collection in the shared 'faizansalam' Firebase project.
 */
const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_API_KEY || "AIzaSyMockKeyForDevelopmentOnly",
  authDomain: import.meta.env.VITE_FIREBASE_AUTH_DOMAIN || "faizansalam.firebaseapp.com",
  projectId: import.meta.env.VITE_FIREBASE_PROJECT_ID || "faizansalam",
  storageBucket: import.meta.env.VITE_FIREBASE_STORAGE_BUCKET || "faizansalam.appspot.com",
  messagingSenderId: import.meta.env.VITE_FIREBASE_MESSAGING_SENDER_ID || "123456789012",
  appId: import.meta.env.VITE_FIREBASE_APP_ID || "1:123456789012:web:abcdef123456"
};

// Check if valid Firebase credentials are provided via environment variables
export const isFirebaseConfigured = () => {
  return (
    Boolean(import.meta.env.VITE_FIREBASE_API_KEY) &&
    import.meta.env.VITE_FIREBASE_API_KEY !== "AIzaSyMockKeyForDevelopmentOnly" &&
    Boolean(import.meta.env.VITE_FIREBASE_PROJECT_ID)
  );
};

// Initialize Firebase safely
let app;
let db;

try {
  app = getApps().length === 0 ? initializeApp(firebaseConfig) : getApp();
  db = getFirestore(app);
} catch (error) {
  console.warn("Firebase initialization warning (using local fallback mode):", error.message);
}

export { app, db, firebaseConfig };
