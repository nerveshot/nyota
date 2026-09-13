# Nyota Invitations – Firestore Database Architecture

## 1. Multi-Project Isolation Principle

To coexist seamlessly inside the shared **`faizansalam`** Firebase project alongside your other applications, **all Nyota data is strictly contained under the top-level `/nyota` collection**.

No documents or subcollections outside `/nyota` are touched.

```
/nyota (Root Namespace Collection)
  ├── invitations / items / {invitationId}
  ├── rsvps / items / {rsvpId}
  ├── orders / items / {orderId}
  ├── newsletter / items / {subscriberId}
  ├── guestbook / items / {entryId}
  └── app_config / items / system
```

---

## 2. Collection Schemas & Data Structures

### A. Invitations (`/nyota/invitations/items/{invitationId}`)
Stores customizable luxury wedding, gala, and celebration invitations.

| Field | Type | Description |
| :--- | :--- | :--- |
| `id` | `string` | Unique identifier (e.g. `inv_1694589200_a8f9`) |
| `tag` | `string` | Header tag line (e.g. `"TOGETHER WITH THEIR FAMILIES"`) |
| `title` | `string` | Ceremony title (e.g. `"The Wedding Celebration Of"`) |
| `primaryNames` | `string` | Featured couple / host names (e.g. `"Elena Vance & Arthur Pendelton"`) |
| `dateText` | `string` | Formatted event date |
| `timeText` | `string` | Ceremony start time |
| `venueName` | `string` | Venue / Ballroom name |
| `venueAddress` | `string` | Physical location and postal address |
| `receptionInfo` | `string` | Reception or after-party details |
| `dressCode` | `string` | Dress code (e.g. `"Black Tie Optional"`) |
| `rsvpDeadline` | `string` | RSVP cut-off notice |
| `hostMessage` | `string` | Personal welcoming note |
| `registryUrl` | `string` | External honeymoon or gift registry link |
| `itinerary` | `array<object>` | List of timeline schedule items: `[{ time: "4:00 PM", event: "..." }]` |
| `themeId` | `string` | Selected luxury color palette (e.g. `"emeraldGold"`) |
| `fontPairingId` | `string` | Typography pairing (e.g. `"classicSerif"`) |
| `sealId` | `string` | Wax seal icon (e.g. `"botanical"`, `"monogram"`, `"crown"`) |
| `sealColor` | `string` | Hexadecimal color of the seal |
| `ambientTrackId`| `string` | Background instrumental music track identifier |
| `status` | `string` | Status: `"draft"` \| `"published"` \| `"archived"` |
| `viewCount` | `number` | Total page impressions |
| `rsvpCount` | `number` | Total accepted RSVPs |
| `createdAt` | `timestamp`| Server timestamp of creation |
| `updatedAt` | `timestamp`| Server timestamp of last edit |

---

### B. RSVPs & Guestbook Responses (`/nyota/rsvps/items/{rsvpId}`)
Real-time guest responses synchronized via Firestore `onSnapshot`.

| Field | Type | Description |
| :--- | :--- | :--- |
| `id` | `string` | Unique RSVP ID |
| `invitationId` | `string` | Parent invitation identifier (e.g. `"default-wedding"`) |
| `name` | `string` | Guest full name or party names |
| `email` | `string` | Guest email address |
| `status` | `string` | `"attending"` \| `"declined"` |
| `plusOnes` | `number` | Additional accompanying guests count |
| `dietary` | `string` | Dietary preferences (`"None"`, `"Vegetarian"`, `"Gluten-Free"`, etc.) |
| `song` | `string` | DJ dance floor song request |
| `message` | `string` | Heartfelt congratulatory message for the hosts |
| `createdAt` | `timestamp`| Timestamp of submission |

---

### C. Orders & Transactions (`/nyota/orders/items/{orderId}`)
Payment and licensing records for digital delivery and custom domains.

| Field | Type | Description |
| :--- | :--- | :--- |
| `id` | `string` | Order number (e.g. `"NYO-589200-4821"`) |
| `orderNumber` | `string` | Formatted receipt ID |
| `invitationId` | `string` | Linked customized invitation |
| `planId` | `string` | Selected package tier (`"starter"`, `"pro"`, `"couture"`) |
| `planName` | `string` | Plan title (`"Luxe Celebration Pro"`) |
| `amount` | `number` | Final total in USD |
| `currency` | `string` | `"USD"` |
| `discountApplied`| `number` | Coupon savings amount |
| `couponCode` | `string` | Applied promo code |
| `addOns` | `array<string>`| Selected add-ons (e.g. `["VIP Concierge", "Vanity Domain"]`) |
| `customerName` | `string` | Cardholder / purchaser name |
| `paymentStatus` | `string` | `"completed"` \| `"pending"` |
| `paymentMethod` | `string` | `"card"` \| `"applepay"` \| `"paypal"` |
| `createdAt` | `timestamp`| Timestamp of order completion |

---

### D. Newsletter Subscriptions (`/nyota/newsletter/items/{subscriberId}`)
Lead capture for product announcements and seasonal wedding templates.

| Field | Type | Description |
| :--- | :--- | :--- |
| `id` | `string` | Normalized email slug |
| `email` | `string` | Subscriber email address |
| `source` | `string` | Capture point (`"footer"`, `"checkout"`, `"rsvp"`) |
| `active` | `boolean` | Subscription status |
| `subscribedAt` | `timestamp`| Date of subscription |

---

### E. App Configuration & System Metadata (`/nyota/app_config/items/system`)

| Field | Type | Description |
| :--- | :--- | :--- |
| `appName` | `string` | `"Nyota Invitations"` |
| `version` | `string` | `"1.0.0"` |
| `owner` | `string` | `"faizansalam"` |
| `namespace` | `string` | `"nyota"` |
| `features` | `map` | Feature flags for real-time RSVP, ambient audio, etc. |

---

## 3. Database Management Service API

All database interactions in the client are encapsulated inside [`src/firebase/nyotaDb.js`](file:///Users/faizansalam/Desktop/Workspace/GitHub/nyota/src/firebase/nyotaDb.js):

- `saveInvitationToCloud(invitationData)` – Saves draft or published invitations to `/nyota/invitations/items`.
- `getInvitationById(id)` – Retrieves an invitation document.
- `listAllInvitations()` – Queries invitations ordered by `updatedAt desc`.
- `submitRsvpToCloud(rsvpData)` – Saves a guest RSVP to `/nyota/rsvps/items`.
- `subscribeToRsvps(invitationId, callback)` – Listens to real-time `onSnapshot` changes.
- `deleteRsvpFromCloud(rsvpId)` – Removes an RSVP document.
- `createOrderRecord(orderData)` – Records a transaction to `/nyota/orders/items`.
- `subscribeNewsletterToCloud(email, source)` – Subscribes an email to `/nyota/newsletter/items`.
- `seedFirestoreNyotaCollection()` – Seeds initial template config and mock RSVPs into the `/nyota` collection.

---

## 4. Environment Configuration

To connect to your live `faizansalam` project, create a `.env` file in the project root:

```bash
VITE_FIREBASE_API_KEY=your_actual_api_key
VITE_FIREBASE_AUTH_DOMAIN=faizansalam.firebaseapp.com
VITE_FIREBASE_PROJECT_ID=faizansalam
VITE_FIREBASE_STORAGE_BUCKET=faizansalam.appspot.com
VITE_FIREBASE_MESSAGING_SENDER_ID=your_sender_id
VITE_FIREBASE_APP_ID=your_app_id
```

If `.env` is not yet configured, Nyota automatically defaults to a **Local Fallback Mode** with full mock state persistence, and provides a **Seed Nyota Data** tool in the status badge to populate Firestore with one click once credentials are in place!
