import { 
  collection, 
  doc, 
  setDoc, 
  getDoc, 
  getDocs, 
  updateDoc, 
  deleteDoc, 
  query, 
  where, 
  orderBy, 
  limit, 
  onSnapshot, 
  serverTimestamp 
} from 'firebase/firestore';
import { 
  db, 
  auth, 
  googleProvider, 
  signInWithPopup, 
  signOut, 
  onAuthStateChanged, 
  isFirebaseConfigured 
} from './config';

/**
 * ============================================================================
 * NYOTA FIRESTORE DATABASE ARCHITECTURE
 * All collections and documents are strictly nested under the top-level 'nyota' namespace.
 * Shared Project: faizansalam
 * Namespace: /nyota/{module}/items/{documentId}
 * ============================================================================
 */

export const NYOTA_COLLECTIONS = {
  INVITATIONS: 'invitations',
  RSVPS: 'rsvps',
  ORDERS: 'orders',
  USERS: 'users',
  GUESTBOOK: 'guestbook',
  NEWSLETTER: 'newsletter',
  TEMPLATES: 'templates',
  SETTINGS: 'settings',
  ANALYTICS: 'analytics'
};

// Helper to get a typed collection reference inside /nyota/{module}/items
export const getNyotaCollectionRef = (moduleName) => {
  if (!db) return null;
  return collection(db, 'nyota', moduleName, 'items');
};

// Helper to get a single document reference inside /nyota/{module}/items/{docId}
export const getNyotaDocRef = (moduleName, docId) => {
  if (!db) return null;
  return doc(db, 'nyota', moduleName, 'items', docId);
};

// Local storage fallback for development / demo mode when Firebase keys are not populated
const LOCAL_STORAGE_KEY_PREFIX = 'nyota_firestore_local_';

const getLocalCollection = (moduleName) => {
  try {
    const data = localStorage.getItem(`${LOCAL_STORAGE_KEY_PREFIX}${moduleName}`);
    return data ? JSON.parse(data) : [];
  } catch (err) {
    console.error('LocalStorage read error:', err);
    return [];
  }
};

const saveLocalCollection = (moduleName, items) => {
  try {
    localStorage.setItem(`${LOCAL_STORAGE_KEY_PREFIX}${moduleName}`, JSON.stringify(items));
  } catch (err) {
    console.error('LocalStorage write error:', err);
  }
};

// Listeners registry for local fallback mode
const localSubscribers = {
  [NYOTA_COLLECTIONS.RSVPS]: new Set(),
  [NYOTA_COLLECTIONS.INVITATIONS]: new Set(),
  [NYOTA_COLLECTIONS.ORDERS]: new Set(),
  [NYOTA_COLLECTIONS.USERS]: new Set(),
  auth: new Set(),
};

const notifyLocalSubscribers = (moduleName) => {
  if (localSubscribers[moduleName]) {
    const data = getLocalCollection(moduleName);
    localSubscribers[moduleName].forEach(cb => {
      try {
        cb(data);
      } catch (e) {
        console.error('Callback error:', e);
      }
    });
  }
};

/**
 * ============================================================================
 * 1. GOOGLE AUTHENTICATION & USER PROFILE (/nyota/users/items/{userId})
 * ============================================================================
 */

export const ADMIN_EMAIL = 'nrvsht@gmail.com';

export const isUserAdmin = (user) => {
  if (!user || !user.email) return false;
  return user.email.toLowerCase().trim() === ADMIN_EMAIL.toLowerCase().trim();
};

let currentActiveUser = null;

// Try to retrieve cached user session
try {
  const cachedUser = localStorage.getItem('nyota_current_user');
  if (cachedUser) {
    const parsed = JSON.parse(cachedUser);
    // Clear legacy placeholder if stored
    if (parsed.email === 'aarav.sharma@gmail.com') {
      localStorage.removeItem('nyota_current_user');
      currentActiveUser = null;
    } else {
      currentActiveUser = parsed;
    }
  }
} catch (e) {
  console.log(e);
}

/**
 * 1-Click Instant Super Admin Login
 */
export async function loginAsAdmin() {
  const adminUser = {
    uid: 'admin_nrvsht',
    displayName: 'Owner Admin (nrvsht)',
    email: ADMIN_EMAIL,
    photoURL: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=150&auto=format&fit=crop&q=80',
    role: 'admin',
    accessGranted: true,
    paymentStatus: 'verified',
    lastLogin: new Date().toISOString(),
  };

  const users = getLocalCollection(NYOTA_COLLECTIONS.USERS);
  const existingIndex = users.findIndex(u => u.email?.toLowerCase() === ADMIN_EMAIL.toLowerCase());
  if (existingIndex >= 0) {
    users[existingIndex] = { ...users[existingIndex], ...adminUser };
  } else {
    users.unshift(adminUser);
  }
  saveLocalCollection(NYOTA_COLLECTIONS.USERS, users);

  currentActiveUser = adminUser;
  localStorage.setItem('nyota_current_user', JSON.stringify(adminUser));
  notifyAuthSubscribers(adminUser);

  return { success: true, user: adminUser };
}

/**
 * 1-Click Sign in with Google
 */
export async function loginWithGoogle(asAdmin = false) {
  if (asAdmin) {
    return loginAsAdmin();
  }

  if (isFirebaseConfigured() && auth) {
    try {
      const result = await signInWithPopup(auth, googleProvider);
      const user = result.user;
      
      const isAdmin = user.email && user.email.toLowerCase().trim() === ADMIN_EMAIL.toLowerCase().trim();

      const userProfile = {
        uid: user.uid,
        displayName: user.displayName || (isAdmin ? 'Admin (nrvsht)' : 'Client User'),
        email: user.email || '',
        photoURL: user.photoURL || `https://api.dicebear.com/7.x/bottts/svg?seed=${user.uid}`,
        role: isAdmin ? 'admin' : 'member',
        accessGranted: isAdmin ? true : undefined,
        lastLogin: new Date().toISOString(),
      };

      // Sync to Firestore /nyota/users/items/{uid}
      const userDocRef = getNyotaDocRef(NYOTA_COLLECTIONS.USERS, user.uid);
      await setDoc(userDocRef, {
        ...userProfile,
        updatedAt: serverTimestamp(),
      }, { merge: true });

      // Fetch latest access status from doc
      const snap = await getDoc(userDocRef);
      const fullData = snap.exists() ? { ...userProfile, ...snap.data() } : userProfile;

      currentActiveUser = fullData;
      localStorage.setItem('nyota_current_user', JSON.stringify(fullData));
      notifyAuthSubscribers(fullData);

      return { success: true, user: fullData };
    } catch (error) {
      console.warn('Firebase Google Auth popup error, using simulated Google login:', error.message);
    }
  }

  // Fallback / Mock Google Login for instant local evaluation
  const mockId = `client_user_${Math.floor(1000 + Math.random() * 9000)}`;
  const mockUser = {
    uid: mockId,
    displayName: 'Guest Client',
    email: 'client@nyotainvites.com',
    photoURL: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=150&auto=format&fit=crop&q=80',
    role: 'member',
    accessGranted: false,
    paymentStatus: 'unpaid',
    lastLogin: new Date().toISOString(),
  };

  const users = getLocalCollection(NYOTA_COLLECTIONS.USERS);
  const existing = users.find(u => u.email === mockUser.email);
  const finalUser = existing || mockUser;

  if (!existing) {
    users.unshift(mockUser);
    saveLocalCollection(NYOTA_COLLECTIONS.USERS, users);
  }

  currentActiveUser = finalUser;
  localStorage.setItem('nyota_current_user', JSON.stringify(finalUser));
  notifyAuthSubscribers(finalUser);

  return { success: true, user: finalUser, isSimulated: true };
}

/**
 * Sign out current user
 */
export async function logoutUser() {
  if (isFirebaseConfigured() && auth) {
    try {
      await signOut(auth);
    } catch (e) {
      console.warn(e);
    }
  }
  currentActiveUser = null;
  localStorage.removeItem('nyota_current_user');
  notifyAuthSubscribers(null);
  return { success: true };
}

/**
 * Subscribe to current auth state
 */
export function subscribeToAuthUser(callback) {
  localSubscribers.auth.add(callback);
  callback(currentActiveUser);

  if (isFirebaseConfigured() && auth) {
    const unsub = onAuthStateChanged(auth, async (firebaseUser) => {
      if (firebaseUser) {
        try {
          const userDocRef = getNyotaDocRef(NYOTA_COLLECTIONS.USERS, firebaseUser.uid);
          const snap = await getDoc(userDocRef);
          const userData = snap.exists() ? snap.data() : {};

          const profile = {
            uid: firebaseUser.uid,
            displayName: firebaseUser.displayName || 'Guest User',
            email: firebaseUser.email || '',
            photoURL: firebaseUser.photoURL || `https://api.dicebear.com/7.x/bottts/svg?seed=${firebaseUser.uid}`,
            accessGranted: userData.accessGranted || false,
            paymentStatus: userData.paymentStatus || 'unpaid',
            lastOrderId: userData.lastOrderId || null,
            ...userData,
          };

          currentActiveUser = profile;
          localStorage.setItem('nyota_current_user', JSON.stringify(profile));
          callback(profile);
        } catch (err) {
          console.warn('Error fetching user profile:', err);
        }
      } else if (!currentActiveUser?.uid?.startsWith('google_user_')) {
        currentActiveUser = null;
        localStorage.removeItem('nyota_current_user');
        callback(null);
      }
    });

    return () => {
      localSubscribers.auth.delete(callback);
      unsub();
    };
  }

  return () => {
    localSubscribers.auth.delete(callback);
  };
}

function notifyAuthSubscribers(user) {
  localSubscribers.auth.forEach(cb => {
    try {
      cb(user);
    } catch (e) {
      console.error(e);
    }
  });
}

/**
 * ============================================================================
 * 2. SHAGUN MONEY ₹501 PAYMENT & ORDER VERIFICATION WORKFLOW
 * ============================================================================
 */

/**
 * Submit Shagun ₹501 Payment for Verification
 */
export async function submitShagunPaymentOrder({
  user,
  templateId = 'wedding-emerald-luxury',
  templateName = 'Royal Emerald & Gold Foil',
  utr,
  payerName,
  invitationData = null,
}) {
  if (!user || !user.uid) {
    throw new Error('User must be signed in with Google to submit payment.');
  }

  if (!utr || utr.trim().length < 4) {
    throw new Error('Please enter a valid 12-digit UPI Transaction Reference / UTR Number.');
  }

  const orderId = `SHAGUN-${Date.now().toString().slice(-6)}-${Math.floor(1000 + Math.random() * 9000)}`;
  
  const orderPayload = {
    id: orderId,
    orderNumber: orderId,
    userId: user.uid,
    userName: user.displayName || 'Honored Guest',
    userEmail: user.email || '',
    userPhoto: user.photoURL || '',
    templateId,
    templateName,
    amount: 501,
    currency: 'INR',
    amountFormatted: '₹501',
    note: 'Shagun Money ₹501',
    paymentMethod: 'PhonePe_UPI_QR',
    utr: utr.trim(),
    payerName: payerName?.trim() || user.displayName || '',
    status: 'pending_verification', // 'pending_verification' | 'verified' | 'rejected'
    invitationData,
    createdAt: new Date().toISOString(),
  };

  if (isFirebaseConfigured() && db) {
    try {
      // 1. Create order in /nyota/orders/items/{orderId}
      const orderDocRef = getNyotaDocRef(NYOTA_COLLECTIONS.ORDERS, orderId);
      await setDoc(orderDocRef, {
        ...orderPayload,
        createdAt: serverTimestamp(),
      });

      // 2. Update user access doc in /nyota/users/items/{userId}
      const userDocRef = getNyotaDocRef(NYOTA_COLLECTIONS.USERS, user.uid);
      await setDoc(userDocRef, {
        lastOrderId: orderId,
        paymentStatus: 'pending_verification',
        accessGranted: false,
        utr: utr.trim(),
        templateId,
        templateName,
        updatedAt: serverTimestamp(),
      }, { merge: true });

      return { success: true, orderId, order: orderPayload, source: 'firestore' };
    } catch (err) {
      console.error('Firestore submitShagunPayment error:', err);
    }
  }

  // Local fallback
  const orders = getLocalCollection(NYOTA_COLLECTIONS.ORDERS);
  orders.unshift(orderPayload);
  saveLocalCollection(NYOTA_COLLECTIONS.ORDERS, orders);
  notifyLocalSubscribers(NYOTA_COLLECTIONS.ORDERS);

  // Update local user record
  const users = getLocalCollection(NYOTA_COLLECTIONS.USERS);
  const uIndex = users.findIndex(u => u.uid === user.uid);
  const updatedUserData = {
    ...(users[uIndex] || user),
    lastOrderId: orderId,
    paymentStatus: 'pending_verification',
    accessGranted: false,
    utr: utr.trim(),
    templateId,
    templateName,
  };
  if (uIndex >= 0) {
    users[uIndex] = updatedUserData;
  } else {
    users.unshift(updatedUserData);
  }
  saveLocalCollection(NYOTA_COLLECTIONS.USERS, users);

  currentActiveUser = updatedUserData;
  localStorage.setItem('nyota_current_user', JSON.stringify(updatedUserData));
  notifyAuthSubscribers(updatedUserData);

  return { success: true, orderId, order: orderPayload, source: 'local' };
}

/**
 * Subscribe to User's Access and Verification Status (Auto-unlocks editor on verification)
 */
export function subscribeToUserAccess(userId, onUpdate) {
  if (!userId) return () => {};

  if (isFirebaseConfigured() && db) {
    try {
      const userDocRef = getNyotaDocRef(NYOTA_COLLECTIONS.USERS, userId);
      const unsub = onSnapshot(userDocRef, (docSnap) => {
        if (docSnap.exists()) {
          const data = docSnap.data();
          onUpdate(data);

          // Update active session in storage
          if (currentActiveUser && currentActiveUser.uid === userId) {
            const merged = { ...currentActiveUser, ...data };
            currentActiveUser = merged;
            localStorage.setItem('nyota_current_user', JSON.stringify(merged));
            notifyAuthSubscribers(merged);
          }
        }
      }, (err) => {
        console.warn('Error listening to user access:', err);
      });
      return unsub;
    } catch (e) {
      console.warn(e);
    }
  }

  // Local fallback polling listener
  const checkLocal = () => {
    const users = getLocalCollection(NYOTA_COLLECTIONS.USERS);
    const u = users.find(x => x.uid === userId);
    if (u) {
      onUpdate(u);
    }
  };
  checkLocal();

  const handleUpdate = () => checkLocal();
  localSubscribers[NYOTA_COLLECTIONS.USERS].add(handleUpdate);
  return () => {
    localSubscribers[NYOTA_COLLECTIONS.USERS].delete(handleUpdate);
  };
}

/**
 * ADMIN: Subscribe to all incoming Shagun ₹501 payment orders
 */
export function subscribeToAllShagunOrders(onUpdate) {
  if (isFirebaseConfigured() && db) {
    try {
      const colRef = getNyotaCollectionRef(NYOTA_COLLECTIONS.ORDERS);
      const q = query(colRef, orderBy('createdAt', 'desc'), limit(100));

      const unsub = onSnapshot(q, (snap) => {
        const list = [];
        snap.forEach(d => {
          const data = d.data();
          list.push({
            id: d.id,
            ...data,
            timeAgo: data.createdAt?.toDate ? formatTimeAgo(data.createdAt.toDate()) : 'Recently'
          });
        });
        onUpdate(list);
      }, (err) => {
        console.warn('Firestore orders subscription error:', err);
        onUpdate(getLocalCollection(NYOTA_COLLECTIONS.ORDERS));
      });

      return unsub;
    } catch (e) {
      console.warn(e);
    }
  }

  // Local fallback
  localSubscribers[NYOTA_COLLECTIONS.ORDERS].add(onUpdate);
  let initial = getLocalCollection(NYOTA_COLLECTIONS.ORDERS);
  if (initial.length === 0) {
    initial = getSeedOrders();
    saveLocalCollection(NYOTA_COLLECTIONS.ORDERS, initial);
  }
  onUpdate(initial);

  return () => {
    localSubscribers[NYOTA_COLLECTIONS.ORDERS].delete(onUpdate);
  };
}

/**
 * ADMIN: Verify payment order with 1-click and immediately grant user editor access
 */
export async function verifyShagunOrder(orderId, userId) {
  const verifiedAt = new Date().toISOString();

  if (isFirebaseConfigured() && db) {
    try {
      // 1. Update Order doc
      const orderRef = getNyotaDocRef(NYOTA_COLLECTIONS.ORDERS, orderId);
      await updateDoc(orderRef, {
        status: 'verified',
        paymentStatus: 'verified',
        verifiedAt: serverTimestamp(),
      });

      // 2. Update User doc to grant access
      if (userId) {
        const userRef = getNyotaDocRef(NYOTA_COLLECTIONS.USERS, userId);
        await setDoc(userRef, {
          accessGranted: true,
          paymentStatus: 'verified',
          verifiedOrderId: orderId,
          verifiedAt: serverTimestamp(),
        }, { merge: true });
      }

      return { success: true };
    } catch (err) {
      console.error('Error verifying order in Firestore:', err);
    }
  }

  // Local fallback
  const orders = getLocalCollection(NYOTA_COLLECTIONS.ORDERS);
  const oIndex = orders.findIndex(o => o.id === orderId);
  if (oIndex >= 0) {
    orders[oIndex] = {
      ...orders[oIndex],
      status: 'verified',
      paymentStatus: 'verified',
      verifiedAt,
    };
    saveLocalCollection(NYOTA_COLLECTIONS.ORDERS, orders);
    notifyLocalSubscribers(NYOTA_COLLECTIONS.ORDERS);
  }

  if (userId) {
    const users = getLocalCollection(NYOTA_COLLECTIONS.USERS);
    const uIndex = users.findIndex(u => u.uid === userId);
    if (uIndex >= 0) {
      users[uIndex] = {
        ...users[uIndex],
        accessGranted: true,
        paymentStatus: 'verified',
        verifiedOrderId: orderId,
        verifiedAt,
      };
      saveLocalCollection(NYOTA_COLLECTIONS.USERS, users);
      notifyLocalSubscribers(NYOTA_COLLECTIONS.USERS);

      if (currentActiveUser && currentActiveUser.uid === userId) {
        currentActiveUser = users[uIndex];
        localStorage.setItem('nyota_current_user', JSON.stringify(users[uIndex]));
        notifyAuthSubscribers(users[uIndex]);
      }
    }
  }

  return { success: true };
}

/**
 * ADMIN: Reject / Flag a suspicious payment order
 */
export async function rejectShagunOrder(orderId, userId, reason = 'UTR mismatch or payment not received') {
  if (isFirebaseConfigured() && db) {
    try {
      const orderRef = getNyotaDocRef(NYOTA_COLLECTIONS.ORDERS, orderId);
      await updateDoc(orderRef, {
        status: 'rejected',
        rejectionReason: reason,
        rejectedAt: serverTimestamp(),
      });

      if (userId) {
        const userRef = getNyotaDocRef(NYOTA_COLLECTIONS.USERS, userId);
        await updateDoc(userRef, {
          accessGranted: false,
          paymentStatus: 'rejected',
          rejectionReason: reason,
        });
      }

      return { success: true };
    } catch (err) {
      console.error('Error rejecting order:', err);
    }
  }

  const orders = getLocalCollection(NYOTA_COLLECTIONS.ORDERS);
  const oIndex = orders.findIndex(o => o.id === orderId);
  if (oIndex >= 0) {
    orders[oIndex] = {
      ...orders[oIndex],
      status: 'rejected',
      rejectionReason: reason,
    };
    saveLocalCollection(NYOTA_COLLECTIONS.ORDERS, orders);
    notifyLocalSubscribers(NYOTA_COLLECTIONS.ORDERS);
  }

  if (userId) {
    const users = getLocalCollection(NYOTA_COLLECTIONS.USERS);
    const uIndex = users.findIndex(u => u.uid === userId);
    if (uIndex >= 0) {
      users[uIndex] = {
        ...users[uIndex],
        accessGranted: false,
        paymentStatus: 'rejected',
        rejectionReason: reason,
      };
      saveLocalCollection(NYOTA_COLLECTIONS.USERS, users);
      notifyLocalSubscribers(NYOTA_COLLECTIONS.USERS);
    }
  }

  return { success: true };
}

function getSeedOrders() {
  return [
    {
      id: 'SHAGUN-849201-3829',
      orderNumber: 'SHAGUN-849201-3829',
      userId: 'user_seed_01',
      userName: 'Rohan & Ananya Verma',
      userEmail: 'rohan.verma@gmail.com',
      userPhoto: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=150&auto=format&fit=crop&q=80',
      templateId: 'wedding-emerald-luxury',
      templateName: 'Royal Emerald & Gold Foil',
      amount: 501,
      currency: 'INR',
      amountFormatted: '₹501',
      note: 'Shagun Money ₹501',
      paymentMethod: 'PhonePe_UPI_QR',
      utr: '425983710294',
      payerName: 'Rohan Verma (PhonePe UPI)',
      status: 'pending_verification',
      createdAt: new Date(Date.now() - 15 * 60 * 1000).toISOString(),
      timeAgo: '15m ago',
    },
    {
      id: 'SHAGUN-729103-9182',
      orderNumber: 'SHAGUN-729103-9182',
      userId: 'user_seed_02',
      userName: 'Kavita Mehrotra',
      userEmail: 'kavita.m@outlook.com',
      userPhoto: 'https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=150&auto=format&fit=crop&q=80',
      templateId: 'wedding-rose-velvet',
      templateName: 'Romantic Rose Quartz & Velvet',
      amount: 501,
      currency: 'INR',
      amountFormatted: '₹501',
      note: 'Shagun Money ₹501',
      paymentMethod: 'PhonePe_UPI_QR',
      utr: '419284719203',
      payerName: 'Kavita (GPay)',
      status: 'verified',
      verifiedAt: new Date(Date.now() - 2 * 3600 * 1000).toISOString(),
      createdAt: new Date(Date.now() - 3 * 3600 * 1000).toISOString(),
      timeAgo: '3h ago',
    }
  ];
}

/**
 * ============================================================================
 * 3. INVITATIONS MANAGEMENT (/nyota/invitations/items/{id})
 * ============================================================================
 */

export async function saveInvitationToCloud(invitationData, customId = null) {
  const invitationId = customId || invitationData.id || `inv_${Date.now()}_${Math.random().toString(36).substring(2, 7)}`;
  
  const payload = {
    ...invitationData,
    id: invitationId,
    updatedAt: new Date().toISOString(),
    status: invitationData.status || 'published',
    viewCount: invitationData.viewCount || 0,
    rsvpCount: invitationData.rsvpCount || 0,
  };

  if (isFirebaseConfigured() && db) {
    try {
      const docRef = getNyotaDocRef(NYOTA_COLLECTIONS.INVITATIONS, invitationId);
      await setDoc(docRef, {
        ...payload,
        createdAt: invitationData.createdAt || serverTimestamp(),
        updatedAt: serverTimestamp(),
      }, { merge: true });
      return { success: true, id: invitationId, source: 'firestore' };
    } catch (err) {
      console.error('Firestore saveInvitation error:', err);
    }
  }

  const items = getLocalCollection(NYOTA_COLLECTIONS.INVITATIONS);
  const existingIndex = items.findIndex(i => i.id === invitationId);
  if (existingIndex >= 0) {
    items[existingIndex] = { ...items[existingIndex], ...payload };
  } else {
    items.unshift(payload);
  }
  saveLocalCollection(NYOTA_COLLECTIONS.INVITATIONS, items);
  notifyLocalSubscribers(NYOTA_COLLECTIONS.INVITATIONS);

  return { success: true, id: invitationId, source: 'local' };
}

export async function getInvitationById(invitationId) {
  if (isFirebaseConfigured() && db) {
    try {
      const docRef = getNyotaDocRef(NYOTA_COLLECTIONS.INVITATIONS, invitationId);
      const snapshot = await getDoc(docRef);
      if (snapshot.exists()) {
        return { id: snapshot.id, ...snapshot.data() };
      }
    } catch (err) {
      console.warn('Firestore getInvitation error:', err);
    }
  }

  const items = getLocalCollection(NYOTA_COLLECTIONS.INVITATIONS);
  return items.find(i => i.id === invitationId) || null;
}

/**
 * ============================================================================
 * 4. RSVP MANAGEMENT (/nyota/rsvps/items/{id})
 * ============================================================================
 */

export async function submitRsvpToCloud(rsvpData) {
  const rsvpId = rsvpData.id ? String(rsvpData.id) : `rsvp_${Date.now()}_${Math.random().toString(36).substring(2, 7)}`;
  
  const payload = {
    id: rsvpId,
    invitationId: rsvpData.invitationId || 'default-wedding',
    name: rsvpData.name,
    email: rsvpData.email || '',
    status: rsvpData.status || 'attending',
    plusOnes: parseInt(rsvpData.plusOnes) || 0,
    dietary: rsvpData.dietary || 'None',
    song: rsvpData.song || '',
    message: rsvpData.message || '',
    time: 'Just now',
    createdAt: new Date().toISOString(),
  };

  if (isFirebaseConfigured() && db) {
    try {
      const docRef = getNyotaDocRef(NYOTA_COLLECTIONS.RSVPS, rsvpId);
      await setDoc(docRef, {
        ...payload,
        createdAt: serverTimestamp(),
      });
      return { success: true, id: rsvpId, source: 'firestore' };
    } catch (err) {
      console.error('Firestore submitRsvp error:', err);
    }
  }

  const items = getLocalCollection(NYOTA_COLLECTIONS.RSVPS);
  items.unshift(payload);
  saveLocalCollection(NYOTA_COLLECTIONS.RSVPS, items);
  notifyLocalSubscribers(NYOTA_COLLECTIONS.RSVPS);

  return { success: true, id: rsvpId, source: 'local' };
}

export async function deleteRsvpFromCloud(rsvpId) {
  if (isFirebaseConfigured() && db) {
    try {
      const docRef = getNyotaDocRef(NYOTA_COLLECTIONS.RSVPS, String(rsvpId));
      await deleteDoc(docRef);
      return { success: true };
    } catch (err) {
      console.error('Firestore deleteRsvp error:', err);
    }
  }

  const items = getLocalCollection(NYOTA_COLLECTIONS.RSVPS).filter(i => String(i.id) !== String(rsvpId));
  saveLocalCollection(NYOTA_COLLECTIONS.RSVPS, items);
  notifyLocalSubscribers(NYOTA_COLLECTIONS.RSVPS);
  return { success: true };
}

export function subscribeToRsvps(invitationId, onUpdate) {
  if (isFirebaseConfigured() && db) {
    try {
      const colRef = getNyotaCollectionRef(NYOTA_COLLECTIONS.RSVPS);
      const q = query(colRef, orderBy('createdAt', 'desc'), limit(50));
      
      const unsubscribe = onSnapshot(q, (snapshot) => {
        const list = [];
        snapshot.forEach((docSnap) => {
          const data = docSnap.data();
          list.push({
            id: docSnap.id,
            ...data,
            time: data.createdAt?.toDate ? formatTimeAgo(data.createdAt.toDate()) : (data.time || 'Recently')
          });
        });
        onUpdate(list);
      }, (error) => {
        console.warn('Firestore onSnapshot error, falling back to local:', error.message);
        onUpdate(getLocalCollection(NYOTA_COLLECTIONS.RSVPS));
      });

      return unsubscribe;
    } catch (err) {
      console.warn('Firestore subscription init error:', err);
    }
  }

  localSubscribers[NYOTA_COLLECTIONS.RSVPS].add(onUpdate);
  let currentList = getLocalCollection(NYOTA_COLLECTIONS.RSVPS);
  if (currentList.length === 0) {
    currentList = getInitialSeedRsvps();
    saveLocalCollection(NYOTA_COLLECTIONS.RSVPS, currentList);
  }
  onUpdate(currentList);

  return () => {
    localSubscribers[NYOTA_COLLECTIONS.RSVPS].delete(onUpdate);
  };
}

export function getInitialSeedRsvps() {
  return [
    {
      id: 'rsvp_seed_1',
      invitationId: 'default-wedding',
      name: 'Victoria Sterling & Marcus',
      email: 'victoria@example.com',
      status: 'attending',
      plusOnes: 1,
      dietary: 'Vegetarian',
      song: 'Can\'t Help Falling in Love - Elvis',
      message: 'So utterly thrilled for you both! Cannot wait to dance under the stars.',
      time: '2 hours ago',
      createdAt: new Date(Date.now() - 2 * 3600 * 1000).toISOString(),
    },
    {
      id: 'rsvp_seed_2',
      invitationId: 'default-wedding',
      name: 'Alexander Wright',
      email: 'alex.wright@example.com',
      status: 'attending',
      plusOnes: 0,
      dietary: 'Gluten-Free',
      song: 'September - Earth, Wind & Fire',
      message: 'Honored to celebrate this monumental milestone with you!',
      time: '5 hours ago',
      createdAt: new Date(Date.now() - 5 * 3600 * 1000).toISOString(),
    }
  ];
}

/**
 * ============================================================================
 * 5. NEWSLETTER
 * ============================================================================
 */

export async function subscribeNewsletterToCloud(email, source = 'footer') {
  if (!email || !email.includes('@')) return { success: false, error: 'Invalid email' };
  
  const subscriberId = email.toLowerCase().replace(/[^a-z0-9]/g, '_');
  const payload = {
    id: subscriberId,
    email: email.toLowerCase().trim(),
    source,
    active: true,
    subscribedAt: new Date().toISOString(),
  };

  if (isFirebaseConfigured() && db) {
    try {
      const docRef = getNyotaDocRef(NYOTA_COLLECTIONS.NEWSLETTER, subscriberId);
      await setDoc(docRef, {
        ...payload,
        subscribedAt: serverTimestamp(),
      }, { merge: true });
      return { success: true, source: 'firestore' };
    } catch (err) {
      console.error('Firestore subscribeNewsletter error:', err);
    }
  }

  const items = getLocalCollection(NYOTA_COLLECTIONS.NEWSLETTER);
  if (!items.find(i => i.email === payload.email)) {
    items.unshift(payload);
    saveLocalCollection(NYOTA_COLLECTIONS.NEWSLETTER, items);
  }
  return { success: true, source: 'local' };
}

export async function seedFirestoreNyotaCollection() {
  if (!isFirebaseConfigured() || !db) {
    return { success: false, message: 'Firebase configuration missing in .env' };
  }

  try {
    // 1. Seed System Config doc under /nyota/app_config/items/system
    const configRef = getNyotaDocRef('app_config', 'system');
    await setDoc(configRef, {
      appName: 'Nyota Invitations',
      version: '1.0.0',
      owner: 'faizansalam',
      namespace: 'nyota',
      deployedAt: serverTimestamp(),
      features: {
        realtimeRsvps: true,
        cloudCustomizer: true,
        ambientAudio: true,
        shagunPayments: true,
        adminVerification: true,
      }
    }, { merge: true });

    // 2. Seed initial RSVPs
    const initialRsvps = getInitialSeedRsvps();
    for (const rsvp of initialRsvps) {
      const rsvpDocRef = getNyotaDocRef(NYOTA_COLLECTIONS.RSVPS, rsvp.id);
      await setDoc(rsvpDocRef, {
        ...rsvp,
        createdAt: serverTimestamp()
      }, { merge: true });
    }

    return { success: true, message: 'Successfully populated /nyota collection in Firestore!' };
  } catch (err) {
    console.error('Error seeding /nyota Firestore collection:', err);
    return { success: false, error: err.message };
  }
}

function formatTimeAgo(date) {
  const seconds = Math.floor((new Date() - date) / 1000);
  if (seconds < 60) return 'Just now';
  const minutes = Math.floor(seconds / 60);
  if (minutes < 60) return `${minutes}m ago`;
  const hours = Math.floor(minutes / 60);
  if (hours < 24) return `${hours}h ago`;
  const days = Math.floor(hours / 24);
  return `${days}d ago`;
}

