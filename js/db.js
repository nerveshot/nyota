// ==========================================================================
// NYOTA FIRESTORE DATABASE SERVICE (RESILIENT VANILLA JS)
// Zero-hang data layer conforming to /nyota/* schema with LocalStorage fallback
// ==========================================================================

import { initFirebaseServices } from './config.js';

export const NYOTA_COLLECTIONS = {
  INVITATIONS: 'invitations',
  RSVPS: 'rsvps',
  ORDERS: 'orders',
  USERS: 'users',
  GUESTBOOK: 'guestbook',
  NEWSLETTER: 'newsletter',
  SETTINGS: 'settings'
};

const LOCAL_STORAGE_PREFIX = 'nyota_db_';

function getLocal(key) {
  try {
    const d = localStorage.getItem(LOCAL_STORAGE_PREFIX + key);
    return d ? JSON.parse(d) : [];
  } catch (e) {
    return [];
  }
}

function setLocal(key, data) {
  try {
    localStorage.setItem(LOCAL_STORAGE_PREFIX + key, JSON.stringify(data));
  } catch (e) {}
}

// ================= AUTHENTICATION =================

export async function subscribeToAuth(callback) {
  // First notify with local state immediately for zero-delay UI rendering
  const localUser = localStorage.getItem('nyota_local_user');
  callback(localUser ? JSON.parse(localUser) : null);

  const fb = await initFirebaseServices();
  if (fb && fb.auth) {
    return fb.authMod.onAuthStateChanged(fb.auth, (user) => {
      if (user) {
        const u = {
          uid: user.uid,
          email: user.email,
          displayName: user.displayName || user.email?.split('@')[0]
        };
        localStorage.setItem('nyota_local_user', JSON.stringify(u));
        callback(u);
      } else {
        localStorage.removeItem('nyota_local_user');
        callback(null);
      }
    });
  }
  return () => {};
}

export async function loginWithGoogle() {
  const fb = await initFirebaseServices();
  if (fb && fb.auth && fb.googleProvider) {
    const res = await fb.authMod.signInWithPopup(fb.auth, fb.googleProvider);
    const u = {
      uid: res.user.uid,
      email: res.user.email,
      displayName: res.user.displayName
    };
    localStorage.setItem('nyota_local_user', JSON.stringify(u));
    return u;
  }
  const mockUser = { uid: 'demo_user_1', email: 'demo@nyota.luxury', displayName: 'Demo Guest' };
  localStorage.setItem('nyota_local_user', JSON.stringify(mockUser));
  return mockUser;
}

export async function loginWithEmail(email, password) {
  const fb = await initFirebaseServices();
  if (fb && fb.auth) {
    const res = await fb.authMod.signInWithEmailAndPassword(fb.auth, email, password);
    const u = {
      uid: res.user.uid,
      email: res.user.email,
      displayName: res.user.displayName || email.split('@')[0]
    };
    localStorage.setItem('nyota_local_user', JSON.stringify(u));
    return u;
  }
  const mockUser = { uid: 'email_user_1', email, displayName: email.split('@')[0] };
  localStorage.setItem('nyota_local_user', JSON.stringify(mockUser));
  return mockUser;
}

export async function registerWithEmail(email, password) {
  const fb = await initFirebaseServices();
  if (fb && fb.auth) {
    const res = await fb.authMod.createUserWithEmailAndPassword(fb.auth, email, password);
    const u = {
      uid: res.user.uid,
      email: res.user.email,
      displayName: email.split('@')[0]
    };
    localStorage.setItem('nyota_local_user', JSON.stringify(u));
    return u;
  }
  const mockUser = { uid: 'email_user_1', email, displayName: email.split('@')[0] };
  localStorage.setItem('nyota_local_user', JSON.stringify(mockUser));
  return mockUser;
}

export async function logoutUser() {
  const fb = await initFirebaseServices();
  if (fb && fb.auth) {
    await fb.authMod.signOut(fb.auth);
  }
  localStorage.removeItem('nyota_local_user');
}

// ================= INVITATIONS =================

export async function saveInvitation(invitationData) {
  const invId = invitationData.id || `inv_${Date.now()}_${Math.random().toString(36).substr(2, 6)}`;
  const cleanData = {
    ...invitationData,
    id: invId,
    slug: invitationData.slug || invId,
    updatedAt: new Date().toISOString()
  };

  // Save to local storage first for instant reliability
  const items = getLocal(NYOTA_COLLECTIONS.INVITATIONS);
  const idx = items.findIndex(i => i.id === invId);
  if (idx >= 0) {
    items[idx] = cleanData;
  } else {
    items.unshift(cleanData);
  }
  setLocal(NYOTA_COLLECTIONS.INVITATIONS, items);

  const fb = await initFirebaseServices();
  if (fb && fb.db) {
    try {
      const docRef = fb.firestoreMod.doc(fb.db, NYOTA_COLLECTIONS.INVITATIONS, invId);
      await fb.firestoreMod.setDoc(docRef, cleanData, { merge: true });
    } catch (e) {
      console.warn('Firestore write warning:', e);
    }
  }

  return { success: true, id: invId, invitation: cleanData };
}

export async function getInvitationById(idOrSlug) {
  if (!idOrSlug) return null;

  const localItems = getLocal(NYOTA_COLLECTIONS.INVITATIONS);
  const localMatch = localItems.find(i => i.id === idOrSlug || i.slug === idOrSlug);
  if (localMatch) return localMatch;

  const fb = await initFirebaseServices();
  if (fb && fb.db) {
    try {
      const docRef = fb.firestoreMod.doc(fb.db, NYOTA_COLLECTIONS.INVITATIONS, idOrSlug);
      const snap = await fb.firestoreMod.getDoc(docRef);
      if (snap.exists()) return { id: snap.id, ...snap.data() };

      const q = fb.firestoreMod.query(
        fb.firestoreMod.collection(fb.db, NYOTA_COLLECTIONS.INVITATIONS),
        fb.firestoreMod.where('slug', '==', idOrSlug),
        fb.firestoreMod.limit(1)
      );
      const qSnap = await fb.firestoreMod.getDocs(q);
      if (!qSnap.empty) {
        return { id: qSnap.docs[0].id, ...qSnap.docs[0].data() };
      }
    } catch (e) {
      console.warn('Firestore fetch warning:', e);
    }
  }

  return null;
}

export async function getAllInvitations() {
  const localItems = getLocal(NYOTA_COLLECTIONS.INVITATIONS);

  const fb = await initFirebaseServices();
  if (fb && fb.db) {
    try {
      const snap = await fb.firestoreMod.getDocs(fb.firestoreMod.collection(fb.db, NYOTA_COLLECTIONS.INVITATIONS));
      if (!snap.empty) {
        return snap.docs.map(d => ({ id: d.id, ...d.data() }));
      }
    } catch (e) {
      console.warn('Firestore fetch all warning:', e);
    }
  }

  return localItems;
}

// ================= RSVPS =================

export async function submitRsvp(rsvpData) {
  const rsvpId = `rsvp_${Date.now()}_${Math.random().toString(36).substr(2, 6)}`;
  const cleanData = {
    ...rsvpData,
    id: rsvpId,
    createdAt: new Date().toISOString()
  };

  const rsvps = getLocal(NYOTA_COLLECTIONS.RSVPS);
  rsvps.unshift(cleanData);
  setLocal(NYOTA_COLLECTIONS.RSVPS, rsvps);

  const fb = await initFirebaseServices();
  if (fb && fb.db) {
    try {
      const docRef = fb.firestoreMod.doc(fb.db, NYOTA_COLLECTIONS.RSVPS, rsvpId);
      await fb.firestoreMod.setDoc(docRef, cleanData);
    } catch (e) {
      console.warn('Firestore RSVP sync warning:', e);
    }
  }

  return { success: true, id: rsvpId };
}

export async function getAllRsvps(invitationId = null) {
  const localRsvps = getLocal(NYOTA_COLLECTIONS.RSVPS);
  const fb = await initFirebaseServices();
  if (fb && fb.db) {
    try {
      let q = fb.firestoreMod.collection(fb.db, NYOTA_COLLECTIONS.RSVPS);
      if (invitationId) {
        q = fb.firestoreMod.query(q, fb.firestoreMod.where('invitationId', '==', invitationId));
      }
      const snap = await fb.firestoreMod.getDocs(q);
      if (!snap.empty) {
        return snap.docs.map(d => ({ id: d.id, ...d.data() }));
      }
    } catch (e) {}
  }
  return invitationId ? localRsvps.filter(i => i.invitationId === invitationId) : localRsvps;
}

// ================= ORDERS =================

export async function createOrder(orderData) {
  const orderId = `order_${Date.now()}_${Math.random().toString(36).substr(2, 6)}`;
  const cleanData = {
    ...orderData,
    id: orderId,
    status: 'pending_verification',
    createdAt: new Date().toISOString()
  };

  const orders = getLocal(NYOTA_COLLECTIONS.ORDERS);
  orders.unshift(cleanData);
  setLocal(NYOTA_COLLECTIONS.ORDERS, orders);

  const fb = await initFirebaseServices();
  if (fb && fb.db) {
    try {
      const docRef = fb.firestoreMod.doc(fb.db, NYOTA_COLLECTIONS.ORDERS, orderId);
      await fb.firestoreMod.setDoc(docRef, cleanData);
    } catch (e) {}
  }

  return { success: true, id: orderId, order: cleanData };
}

export async function getAllOrders() {
  const localOrders = getLocal(NYOTA_COLLECTIONS.ORDERS);
  const fb = await initFirebaseServices();
  if (fb && fb.db) {
    try {
      const snap = await fb.firestoreMod.getDocs(fb.firestoreMod.collection(fb.db, NYOTA_COLLECTIONS.ORDERS));
      if (!snap.empty) {
        return snap.docs.map(d => ({ id: d.id, ...d.data() }));
      }
    } catch (e) {}
  }
  return localOrders;
}
