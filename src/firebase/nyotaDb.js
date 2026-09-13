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
import { db, isFirebaseConfigured } from './config';

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
  GUESTBOOK: 'guestbook',
  NEWSLETTER: 'newsletter',
  TEMPLATES: 'templates',
  SETTINGS: 'settings',
  ANALYTICS: 'analytics'
};

// Helper to get a typed collection reference inside /nyota/{module}/items
export const getNyotaCollectionRef = (moduleName) => {
  if (!db) return null;
  // Firestore path: nyota/{moduleName}/items
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
 * 1. INVITATIONS MANAGEMENT (/nyota/invitations/items/{id})
 * ============================================================================
 */

/**
 * Create or save an invitation
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
      // Fallback to local
    }
  }

  // Local fallback
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

/**
 * Fetch a single invitation by ID
 */
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

  // Local fallback
  const items = getLocalCollection(NYOTA_COLLECTIONS.INVITATIONS);
  return items.find(i => i.id === invitationId) || null;
}

/**
 * List all saved invitations
 */
export async function listAllInvitations(maxLimit = 20) {
  if (isFirebaseConfigured() && db) {
    try {
      const colRef = getNyotaCollectionRef(NYOTA_COLLECTIONS.INVITATIONS);
      const q = query(colRef, orderBy('updatedAt', 'desc'), limit(maxLimit));
      const snap = await getDocs(q);
      const results = [];
      snap.forEach(d => results.push({ id: d.id, ...d.data() }));
      if (results.length > 0) return results;
    } catch (err) {
      console.warn('Firestore listInvitations error:', err);
    }
  }

  return getLocalCollection(NYOTA_COLLECTIONS.INVITATIONS);
}

/**
 * ============================================================================
 * 2. RSVP MANAGEMENT (/nyota/rsvps/items/{id})
 * Real-time synchronization for guests and hosts
 * ============================================================================
 */

/**
 * Submit an RSVP
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

  // Local fallback
  const items = getLocalCollection(NYOTA_COLLECTIONS.RSVPS);
  items.unshift(payload);
  saveLocalCollection(NYOTA_COLLECTIONS.RSVPS, items);
  notifyLocalSubscribers(NYOTA_COLLECTIONS.RSVPS);

  return { success: true, id: rsvpId, source: 'local' };
}

/**
 * Delete an RSVP from Firestore
 */
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

/**
 * Subscribe to real-time RSVP list for an invitation
 */
export function subscribeToRsvps(invitationId, onUpdate) {
  // If Firebase is configured and ready
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

  // Local Fallback Real-time Subscription
  localSubscribers[NYOTA_COLLECTIONS.RSVPS].add(onUpdate);
  
  // Seed with initial default items if empty
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

/**
 * ============================================================================
 * 3. ORDERS & TRANSACTIONS (/nyota/orders/items/{orderId})
 * ============================================================================
 */

export async function createOrderRecord(orderData) {
  const orderId = `NYO-${Date.now().toString().slice(-6)}-${Math.floor(1000 + Math.random() * 9000)}`;
  
  const payload = {
    id: orderId,
    orderNumber: orderId,
    ...orderData,
    paymentStatus: 'completed',
    createdAt: new Date().toISOString(),
  };

  if (isFirebaseConfigured() && db) {
    try {
      const docRef = getNyotaDocRef(NYOTA_COLLECTIONS.ORDERS, orderId);
      await setDoc(docRef, {
        ...payload,
        createdAt: serverTimestamp(),
      });
      return { success: true, orderId, source: 'firestore' };
    } catch (err) {
      console.error('Firestore createOrder error:', err);
    }
  }

  const items = getLocalCollection(NYOTA_COLLECTIONS.ORDERS);
  items.unshift(payload);
  saveLocalCollection(NYOTA_COLLECTIONS.ORDERS, items);
  notifyLocalSubscribers(NYOTA_COLLECTIONS.ORDERS);

  return { success: true, orderId, source: 'local' };
}

/**
 * ============================================================================
 * 4. NEWSLETTER & LEADS (/nyota/newsletter/items/{subscriberId})
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

/**
 * ============================================================================
 * 5. SEEDING & UTILITIES
 * Seeds initial structured data into the /nyota namespace in Firestore
 * ============================================================================
 */

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
    },
    {
      id: 'rsvp_seed_3',
      invitationId: 'default-wedding',
      name: 'Genevieve Dupond',
      email: 'genevieve@example.com',
      status: 'declined',
      plusOnes: 0,
      dietary: 'None',
      song: '',
      message: 'Sending all our love and warmest wishes from Paris! So sorry we cannot make it in person.',
      time: 'Yesterday',
      createdAt: new Date(Date.now() - 24 * 3600 * 1000).toISOString(),
    }
  ];
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
        guestbook: true
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

    return { success: true, message: 'Successfully seeded /nyota collection in Firestore!' };
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
