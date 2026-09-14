// ==========================================================================
// NYOTA FIREBASE CLIENT INITIALIZER (RESILIENT VANILLA JS)
// Dynamically loads Firebase with automatic LocalStorage fallback
// ==========================================================================

export const firebaseConfig = {
  apiKey: "AIzaSyBS5tnarLnakH6XmTLCmSKLnjVnjWAO2jU",
  authDomain: "nyotapages.firebaseapp.com",
  projectId: "nyotapages",
  storageBucket: "nyotapages.firebasestorage.app",
  messagingSenderId: "302366148046",
  appId: "1:302366148046:web:d8fd3317971d94dfbb179f",
  measurementId: "G-ZSPRZ1TE3S"
};

export let app = null;
export let db = null;
export let auth = null;
export let googleProvider = null;
export let fbModules = null;

export async function initFirebaseServices() {
  if (fbModules) return fbModules;

  try {
    const [appMod, firestoreMod, authMod] = await Promise.all([
      import('https://www.gstatic.com/firebasejs/11.4.0/firebase-app.js'),
      import('https://www.gstatic.com/firebasejs/11.4.0/firebase-firestore.js'),
      import('https://www.gstatic.com/firebasejs/11.4.0/firebase-auth.js')
    ]);

    app = appMod.getApps().length === 0 ? appMod.initializeApp(firebaseConfig) : appMod.getApps()[0];
    db = firestoreMod.getFirestore(app);
    auth = authMod.getAuth(app);
    googleProvider = new authMod.GoogleAuthProvider();
    googleProvider.setCustomParameters({ prompt: 'select_account' });

    fbModules = {
      appMod,
      firestoreMod,
      authMod,
      db,
      auth,
      googleProvider
    };

    return fbModules;
  } catch (err) {
    console.warn("Using offline / local storage mode (Firebase CDN unavailable):", err.message);
    return null;
  }
}
