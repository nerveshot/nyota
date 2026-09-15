(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const a of document.querySelectorAll('link[rel="modulepreload"]'))i(a);new MutationObserver(a=>{for(const s of a)if(s.type==="childList")for(const r of s.addedNodes)r.tagName==="LINK"&&r.rel==="modulepreload"&&i(r)}).observe(document,{childList:!0,subtree:!0});function t(a){const s={};return a.integrity&&(s.integrity=a.integrity),a.referrerPolicy&&(s.referrerPolicy=a.referrerPolicy),a.crossOrigin==="use-credentials"?s.credentials="include":a.crossOrigin==="anonymous"?s.credentials="omit":s.credentials="same-origin",s}function i(a){if(a.ep)return;a.ep=!0;const s=t(a);fetch(a.href,s)}})();const De="modulepreload",Oe=function(n,e){return new URL(n,e).href},pe={},_=function(e,t,i){let a=Promise.resolve();if(t&&t.length>0){const r=document.getElementsByTagName("link"),l=document.querySelector("meta[property=csp-nonce]"),c=(l==null?void 0:l.nonce)||(l==null?void 0:l.getAttribute("nonce"));a=Promise.allSettled(t.map(o=>{if(o=Oe(o,i),o in pe)return;pe[o]=!0;const m=o.endsWith(".css"),g=m?'[rel="stylesheet"]':"";if(!!i)for(let v=r.length-1;v>=0;v--){const y=r[v];if(y.href===o&&(!m||y.rel==="stylesheet"))return}else if(document.querySelector(`link[href="${o}"]${g}`))return;const d=document.createElement("link");if(d.rel=m?"stylesheet":De,m||(d.as="script"),d.crossOrigin="",d.href=o,c&&d.setAttribute("nonce",c),document.head.appendChild(d),m)return new Promise((v,y)=>{d.addEventListener("load",v),d.addEventListener("error",()=>y(new Error(`Unable to preload CSS for ${o}`)))})}))}function s(r){const l=new Event("vite:preloadError",{cancelable:!0});if(l.payload=r,window.dispatchEvent(l),!l.defaultPrevented)throw r}return a.then(r=>{for(const l of r||[])l.status==="rejected"&&s(l.reason);return e().catch(s)})},Ge={apiKey:"AIzaSyBS5tnarLnakH6XmTLCmSKLnjVnjWAO2jU",authDomain:"nyotapages.firebaseapp.com",projectId:"nyotapages",storageBucket:"nyotapages.firebasestorage.app",messagingSenderId:"302366148046",appId:"1:302366148046:web:d8fd3317971d94dfbb179f",measurementId:"G-ZSPRZ1TE3S"};let Y=null,ge=null,ue=null,J=null,R=null;async function f(){if(R)return R;try{const[n,e,t]=await Promise.all([_(()=>import("https://www.gstatic.com/firebasejs/11.4.0/firebase-app.js"),[],import.meta.url),_(()=>import("https://www.gstatic.com/firebasejs/11.4.0/firebase-firestore.js"),[],import.meta.url),_(()=>import("https://www.gstatic.com/firebasejs/11.4.0/firebase-auth.js"),[],import.meta.url)]);return Y=n.getApps().length===0?n.initializeApp(Ge):n.getApps()[0],ge=e.getFirestore(Y),ue=t.getAuth(Y),J=new t.GoogleAuthProvider,J.setCustomParameters({prompt:"select_account"}),R={appMod:n,firestoreMod:e,authMod:t,db:ge,auth:ue,googleProvider:J},R}catch(n){return console.warn("Using offline / local storage mode (Firebase CDN unavailable):",n.message),null}}const h={INVITATIONS:"invitations",RSVPS:"rsvps",ORDERS:"orders",USERS:"users",GUESTBOOK:"guestbook",NEWSLETTER:"newsletter",SETTINGS:"settings"},fe="nyota_db_";function E(n){try{const e=localStorage.getItem(fe+n);return e?JSON.parse(e):[]}catch{return[]}}function Q(n,e){try{localStorage.setItem(fe+n,JSON.stringify(e))}catch{}}async function We(n){const e=localStorage.getItem("nyota_local_user");n(e?JSON.parse(e):null);const t=await f();return t&&t.auth?t.authMod.onAuthStateChanged(t.auth,i=>{var a;if(i){const s={uid:i.uid,email:i.email,displayName:i.displayName||((a=i.email)==null?void 0:a.split("@")[0])};localStorage.setItem("nyota_local_user",JSON.stringify(s)),n(s)}else localStorage.removeItem("nyota_local_user"),n(null)}):()=>{}}async function Ve(){const n=await f();if(n&&n.auth&&n.googleProvider){const t=await n.authMod.signInWithPopup(n.auth,n.googleProvider),i={uid:t.user.uid,email:t.user.email,displayName:t.user.displayName};return localStorage.setItem("nyota_local_user",JSON.stringify(i)),i}const e={uid:"demo_user_1",email:"demo@nyota.luxury",displayName:"Demo Guest"};return localStorage.setItem("nyota_local_user",JSON.stringify(e)),e}async function He(n,e){const t=await f();if(t&&t.auth){const a=await t.authMod.signInWithEmailAndPassword(t.auth,n,e),s={uid:a.user.uid,email:a.user.email,displayName:a.user.displayName||n.split("@")[0]};return localStorage.setItem("nyota_local_user",JSON.stringify(s)),s}const i={uid:"email_user_1",email:n,displayName:n.split("@")[0]};return localStorage.setItem("nyota_local_user",JSON.stringify(i)),i}async function je(n,e){const t=await f();if(t&&t.auth){const a=await t.authMod.createUserWithEmailAndPassword(t.auth,n,e),s={uid:a.user.uid,email:a.user.email,displayName:n.split("@")[0]};return localStorage.setItem("nyota_local_user",JSON.stringify(s)),s}const i={uid:"email_user_1",email:n,displayName:n.split("@")[0]};return localStorage.setItem("nyota_local_user",JSON.stringify(i)),i}async function qe(){const n=await f();n&&n.auth&&await n.authMod.signOut(n.auth),localStorage.removeItem("nyota_local_user")}async function Ue(n){const e=n.id||`inv_${Date.now()}_${Math.random().toString(36).substr(2,6)}`,t={...n,id:e,slug:n.slug||e,updatedAt:new Date().toISOString()},i=E(h.INVITATIONS),a=i.findIndex(r=>r.id===e);a>=0?i[a]=t:i.unshift(t),Q(h.INVITATIONS,i);const s=await f();if(s&&s.db)try{const r=s.firestoreMod.doc(s.db,h.INVITATIONS,e);await s.firestoreMod.setDoc(r,t,{merge:!0})}catch(r){console.warn("Firestore write warning:",r)}return{success:!0,id:e,invitation:t}}async function _e(n){if(!n)return null;const t=E(h.INVITATIONS).find(a=>a.id===n||a.slug===n);if(t)return t;const i=await f();if(i&&i.db)try{const a=i.firestoreMod.doc(i.db,h.INVITATIONS,n),s=await i.firestoreMod.getDoc(a);if(s.exists())return{id:s.id,...s.data()};const r=i.firestoreMod.query(i.firestoreMod.collection(i.db,h.INVITATIONS),i.firestoreMod.where("slug","==",n),i.firestoreMod.limit(1)),l=await i.firestoreMod.getDocs(r);if(!l.empty)return{id:l.docs[0].id,...l.docs[0].data()}}catch(a){console.warn("Firestore fetch warning:",a)}return null}async function xe(){const n=E(h.INVITATIONS),e=await f();if(e&&e.db)try{const t=await e.firestoreMod.getDocs(e.firestoreMod.collection(e.db,h.INVITATIONS));if(!t.empty)return t.docs.map(i=>({id:i.id,...i.data()}))}catch(t){console.warn("Firestore fetch all warning:",t)}return n}async function Ye(n){const e=`rsvp_${Date.now()}_${Math.random().toString(36).substr(2,6)}`,t={...n,id:e,createdAt:new Date().toISOString()},i=E(h.RSVPS);i.unshift(t),Q(h.RSVPS,i);const a=await f();if(a&&a.db)try{const s=a.firestoreMod.doc(a.db,h.RSVPS,e);await a.firestoreMod.setDoc(s,t)}catch(s){console.warn("Firestore RSVP sync warning:",s)}return{success:!0,id:e}}async function we(n=null){const e=E(h.RSVPS),t=await f();if(t&&t.db)try{let i=t.firestoreMod.collection(t.db,h.RSVPS);n&&(i=t.firestoreMod.query(i,t.firestoreMod.where("invitationId","==",n)));const a=await t.firestoreMod.getDocs(i);if(!a.empty)return a.docs.map(s=>({id:s.id,...s.data()}))}catch{}return n?e.filter(i=>i.invitationId===n):e}async function Je(n){const e=`order_${Date.now()}_${Math.random().toString(36).substr(2,6)}`,t={...n,id:e,status:"pending_verification",createdAt:new Date().toISOString()},i=E(h.ORDERS);i.unshift(t),Q(h.ORDERS,i);const a=await f();if(a&&a.db)try{const s=a.firestoreMod.doc(a.db,h.ORDERS,e);await a.firestoreMod.setDoc(s,t)}catch{}return{success:!0,id:e,order:t}}async function Ke(){const n=E(h.ORDERS),e=await f();if(e&&e.db)try{const t=await e.firestoreMod.getDocs(e.firestoreMod.collection(e.db,h.ORDERS));if(!t.empty)return t.docs.map(i=>({id:i.id,...i.data()}))}catch{}return n}function b(n,e="default"){let t=document.getElementById("toast-container");t||(t=document.createElement("div"),t.id="toast-container",document.body.appendChild(t));const i=document.createElement("div");i.className=`toast ${e}`,i.innerHTML=`
    <span>${e==="success"?"✨":e==="error"?"⚠️":"🔔"}</span>
    <span>${n}</span>
  `,t.appendChild(i),setTimeout(()=>{i.style.opacity="0",i.style.transform="translateY(10px)",i.style.transition="all 0.3s ease",setTimeout(()=>i.remove(),300)},3500)}function F(n,e="Link copied to clipboard!"){navigator.clipboard&&window.isSecureContext?navigator.clipboard.writeText(n).then(()=>{b(e,"success")}).catch(()=>{ve(n,e)}):ve(n,e)}function ve(n,e){const t=document.createElement("textarea");t.value=n,t.style.position="fixed",t.style.opacity="0",document.body.appendChild(t),t.focus(),t.select();try{document.execCommand("copy"),b(e,"success")}catch{b("Failed to copy","error")}document.body.removeChild(t)}function Qe(n){if(!n)return"N & Y";const e=n.split("&").map(i=>i.trim());if(e.length>=2){const i=e[0].charAt(0).toUpperCase()||"A",a=e[1].charAt(0).toUpperCase()||"B";return`${i} & ${a}`}const t=n.trim().split(/\s+/);return t.length>=2?`${t[0].charAt(0).toUpperCase()} & ${t[t.length-1].charAt(0).toUpperCase()}`:n.slice(0,2).toUpperCase()}function he(n){const e=document.getElementById(n);e&&(e.classList.add("active"),document.body.style.overflow="hidden")}function C(n){const e=document.getElementById(n);e&&(e.classList.remove("active"),document.body.style.overflow="")}function M(n,e={}){if(!n)return"";const t=n.split("&").map(s=>s.trim()),i=e.size||"normal",a=e.fontClass||"font-cinzel";if(t.length>=2){const s=t[0],r=t[1],l=i==="lg"?"2.2rem":i==="sm"?"1.2rem":"1.5rem",c=i==="lg"?"2.75rem":i==="sm"?"1.3rem":"1.65rem";return`
      <div class="names-stacked-wrapper ${a}" style="display: flex; flex-direction: column; align-items: center; justify-content: center; line-height: 1.15; margin: 0.5rem 0;">
        <span class="gold-gradient-text" style="font-size: ${c}; font-weight: 700; letter-spacing: 0.05em; text-transform: uppercase;">${s}</span>
        <span class="font-script gold-gradient-text" style="font-size: ${l}; margin: 0.15rem 0; opacity: 0.95; line-height: 1;">&</span>
        <span class="gold-gradient-text" style="font-size: ${c}; font-weight: 700; letter-spacing: 0.05em; text-transform: uppercase;">${r}</span>
      </div>
    `}return`<h2 class="${a} gold-gradient-text" style="font-size: 1.8rem; font-weight: 700;">${n}</h2>`}function Xe(n,e={}){const t=document.getElementById(n);if(!t)return;const{onNavigate:i=()=>{},currentView:a="landing"}=e;t.innerHTML=`
    <nav class="navbar">
      <div class="container nav-container">
        
        <!-- Brand Logo -->
        <a href="#" class="nav-brand" data-view="landing">
          <div class="nav-logo-icon" style="display: flex; align-items: center; justify-content: center; background: linear-gradient(135deg, #180F2A, #0A0714); border: 1px solid #D4AF37; box-shadow: 0 0 15px rgba(212,175,55,0.4);">
            <svg viewBox="0 0 48 48" fill="none" style="width: 22px; height: 22px;">
              <rect x="6" y="11" width="36" height="26" rx="3.5" fill="#170D28" stroke="#D4AF37" stroke-width="1.4" />
              <path d="M6 37L19 25" stroke="#D4AF37" stroke-width="1" stroke-linecap="round" opacity="0.65" />
              <path d="M42 37L29 25" stroke="#D4AF37" stroke-width="1" stroke-linecap="round" opacity="0.65" />
              <path d="M6 12L24 26L42 12" fill="#24143D" stroke="#D4AF37" stroke-width="1.4" stroke-linejoin="round" />
              <circle cx="24" cy="26" r="5.5" fill="#F5D061" stroke="#3D2604" stroke-width="0.6" />
              <circle cx="24" cy="26" r="1.8" fill="#FFFFFF" />
            </svg>
          </div>
          <span class="nav-title gold-gradient-text">NYOTA</span>
        </a>

        <!-- Nav Links -->
        <ul class="nav-links">
          <li><a href="#" class="nav-link ${a==="landing"?"active":""}" data-view="landing">Home</a></li>
          <li><a href="#gallery-section" class="nav-link" data-view="landing">Templates</a></li>
          <li><a href="#contact-section" class="nav-link" data-view="landing">Contact & Help</a></li>
          <li><a href="#" class="nav-link ${a==="studio"?"active":""}" data-view="studio">Customizer Studio</a></li>
          <li><a href="#" class="nav-link ${a==="dashboard"?"active":""}" data-view="dashboard">My Invitations</a></li>
          <li><a href="#" class="nav-link ${a==="admin"?"active":""}" data-view="admin">Admin Portal</a></li>
        </ul>

        <!-- Nav Actions -->
        <div class="nav-actions">
          <button id="nav-pricing-btn" class="btn btn-sm btn-gold-outline">
            <span>₹1001 Suite</span>
          </button>
          
          <div id="nav-auth-slot">
            <button id="nav-login-btn" class="btn btn-sm btn-primary-gold">
              <span>Sign In</span>
            </button>
          </div>
        </div>

      </div>
    </nav>
  `,t.querySelectorAll("[data-view]").forEach(r=>{r.addEventListener("click",l=>{l.preventDefault();const c=r.dataset.view;i(c)})});const s=document.getElementById("nav-pricing-btn");s&&s.addEventListener("click",()=>{he("checkout-modal")}),We(r=>{var c,o,m;const l=document.getElementById("nav-auth-slot");l&&(r?(l.innerHTML=`
        <div class="flex items-center gap-2">
          <span style="font-size: 0.8rem; color: var(--gold-light); font-weight: 600;">
            ${r.displayName||((c=r.email)==null?void 0:c.split("@")[0])||"Member"}
          </span>
          <button id="nav-logout-btn" class="btn btn-sm btn-secondary">Logout</button>
        </div>
      `,(o=document.getElementById("nav-logout-btn"))==null||o.addEventListener("click",()=>{qe()})):(l.innerHTML=`
        <button id="nav-login-btn" class="btn btn-sm btn-primary-gold">
          <span>Sign In</span>
        </button>
      `,(m=document.getElementById("nav-login-btn"))==null||m.addEventListener("click",()=>{he("auth-modal")})))})}const K=[{id:"all",label:"All Templates",icon:"✨"},{id:"wedding",label:"Wedding & Engagement",icon:"💍"},{id:"birthday",label:"Birthdays & Milestones",icon:"🎂"},{id:"babyshower",label:"Baby Shower & Reveal",icon:"👶"},{id:"anniversary",label:"Anniversaries & Romance",icon:"🍷"},{id:"corporate",label:"Galas & Corporate",icon:"💼"}],w={royalRedNavyBlack:{id:"royalRedNavyBlack",name:"Royal Red, Navy & Obsidian Black",bgClass:"background: linear-gradient(135deg, #05060F 0%, #100612 50%, #040207 100%);",cardBg:"#12050E",accent:"#D4AF37",accentText:"#F5D38B",secondaryText:"#FECDD3",border:"rgba(212, 175, 55, 0.4)",envelopeBg:"#1C0612",foilType:"gold",isLight:!1},pearlWhiteGold:{id:"pearlWhiteGold",name:"Royal Pearl & White Gold (Light)",bgClass:"background: linear-gradient(180deg, #FAF8F5 0%, #F5EFE6 50%, #ECE4D8 100%);",cardBg:"#FFFFFF",accent:"#B8860B",accentText:"#8F662C",secondaryText:"#475569",border:"rgba(184, 134, 11, 0.35)",envelopeBg:"#FAF7F2",foilType:"gold",isLight:!0},ivoryMarbleGold:{id:"ivoryMarbleGold",name:"Ivory Marble & Imperial Gold (Light)",bgClass:"background: linear-gradient(135deg, #FFFFFF 0%, #F8F5EE 40%, #EFE9DC 100%);",cardBg:"#FCFBF9",accent:"#C59B27",accentText:"#785210",secondaryText:"#334155",border:"rgba(197, 155, 39, 0.4)",envelopeBg:"#F7F3EB",foilType:"gold",isLight:!0},emeraldGold:{id:"emeraldGold",name:"Royal Emerald & Gold Foil",bgClass:"background: linear-gradient(135deg, #061C14 0%, #0B2E21 50%, #04120D 100%);",cardBg:"#09261B",accent:"#D4AA64",accentText:"#F5E5C9",secondaryText:"#A7F3D0",border:"rgba(212, 170, 100, 0.3)",envelopeBg:"#072017",foilType:"gold",isLight:!1},midnightGold:{id:"midnightGold",name:"Celestial Midnight & Starlight",bgClass:"background: linear-gradient(135deg, #090B1E 0%, #121638 50%, #060714 100%);",cardBg:"#0F1230",accent:"#E5C07B",accentText:"#FDE68A",secondaryText:"#C7D2FE",border:"rgba(229, 192, 123, 0.3)",envelopeBg:"#0B0E28",foilType:"gold",isLight:!1},roseQuartz:{id:"roseQuartz",name:"Romantic Rose Quartz & Velvet",bgClass:"background: linear-gradient(135deg, #2D121B 0%, #451B2A 50%, #1F0B12 100%);",cardBg:"#361521",accent:"#F8B6C3",accentText:"#FDA4AF",secondaryText:"#FECDD3",border:"rgba(248, 182, 195, 0.3)",envelopeBg:"#2A101A",foilType:"roseGold",isLight:!1},noirLuxe:{id:"noirLuxe",name:"Black Tie Noir & Silver Platinum",bgClass:"background: linear-gradient(135deg, #121215 0%, #1A1A22 50%, #0A0A0C 100%);",cardBg:"#16161D",accent:"#E2E8F0",accentText:"#E2E8F0",secondaryText:"#94A3B8",border:"rgba(148, 163, 184, 0.3)",envelopeBg:"#121217",foilType:"silver",isLight:!1}},B={classicSerif:{id:"classicSerif",name:"Playfair Display + Outfit",heading:"font-serif",script:"font-script",body:"font-sans",description:"Timeless, romantic and formal"},majesticCinzel:{id:"majesticCinzel",name:"Cinzel + Cormorant",heading:"font-cinzel",script:"font-alex",body:"font-cormorant",description:"Regal, classical, and grand"},flowingCalligraphy:{id:"flowingCalligraphy",name:"Great Vibes + Playfair",heading:"font-script",script:"font-script",body:"font-serif",description:"Whimsical, intimate, and delicate"}},be=[{id:"botanical",name:"Olive Branch Laurel",icon:"🌿"},{id:"monogram",name:"Intertwined Monogram",icon:"⚜️"},{id:"heart",name:"Eternal Heart",icon:"❤️"},{id:"crown",name:"Imperial Crown",icon:"👑"},{id:"star",name:"Celestial Star",icon:"⭐"}],Ze=[{id:"romanticPiano",title:"Moonlight Romance (Serenade Piano)",genre:"Classical / Romantic"},{id:"acousticJoy",title:"Acoustic Joy (Celebratory & Bright)",genre:"Acoustic / Celebration"},{id:"lofiVibes",title:"Golden Hour (Chill Ambient)",genre:"Lo-Fi / Modern"},{id:"orchestralGala",title:"Imperial Waltz (Grand Orchestral)",genre:"Gala / Grand"}],I=[{id:"wedding-emerald-luxury",category:"wedding",name:"Arabic Royal Wedding Invitation",tagline:"An opulent royal Arabian palace theme with sacred Bismillah calligraphy, Moorish arches, and starlit Walima banquet.",badge:"Bestseller ⭐",basePrice:1001,themeId:"royalRedNavyBlack",fontPairingId:"classicSerif",sealId:"botanical",sealColor:"#B88B42",ambientTrackId:"romanticPiano",defaults:{bismillah:"بِسْمِ ٱللَّٰهِ ٱلرَّحْمَٰنِ ٱلرَّحِيمِ",tag:"TOGETHER WITH THEIR FAMILIES",quranVerse:"“And among His signs is that He created for you mates from among yourselves, that you may find tranquility in them; and He placed between you affection and mercy.”",quranRef:"Surah Ar-Rum (30:21)",duaBlessing:"بَارَكَ اللَّهُ لَكَ وَبَارَكَ عَلَيْكَ وَجَمَعَ بَيْنَكُمَا فِي خَيْرٍ",duaTranslation:"May Allah bless you, shower His blessings upon you, and unite you both in goodness & harmony.",title:"Cordially invite you to grace the blessed wedding celebration & Nikah of",primaryNames:"Faizan Salam & Mushira Shaikh",dateText:"Saturday, October 24, 2026",timeText:"Five O'Clock In The Evening",isoDate:"2026-10-24T17:00:00",venueName:"The Royal Emirates Palace & Grand Ballroom",venueAddress:"West Corniche Road, Grand Palace Avenue, NY 10022",heroPhoto:"/images/muslim-royal-couple.jpg",receptionInfo:"Grand Royal Walima Banquet & Celebrations to Follow",dressCode:"Royal Arabian / Traditional Formal / Black Tie",dressCodeNote:"We warmly encourage our cherished guests to embrace royal jewel tones, traditional formal attire (Sherwanis, Anarkalis, Abayas, Lehengas) or evening tuxedos & gowns.",rsvpDeadline:"Kindly RSVP by September 15, 2026",hostMessage:"With the grace and blessings of Allah (SWT), we invite you to celebrate our sacred union and share in our joy, prayers, and lifelong memories.",groomParents:"Mr. & Mrs. Mohammed Salam",brideParents:"Mr. & Mrs. Tariq Shaikh",familyBlessingText:"Request the honor of your presence and heartfelt blessings on the auspicious occasion of the Nikah & Walima of their cherished children.",itinerary:[{time:"4:00 PM",event:"Holy Nikah Ceremony & Sacred Vows",icon:"💍",desc:"The sacred religious marriage contract in the presence of beloved family."},{time:"5:30 PM",event:"Dawat-e-Khas & Welcome Refreshments",icon:"🥂",desc:"Gourmet Medjool dates, Arabian Kahwa, and handcrafted royal appetizers."},{time:"7:00 PM",event:"Baraat Arrival & Royal Reception",icon:"👑",desc:"Grand royal welcome of the groom and celebratory blessings."},{time:"8:30 PM",event:"Grand Walima Feast & Dinner Banquet",icon:"🍽️",desc:"An authentic multi-course royal Mughlai and Arabian feast."},{time:"11:00 PM",event:"Rukhsati & Heartfelt Duas",icon:"✨",desc:"A tender farewell with heartfelt blessings as the newlyweds begin their journey."}],loveStories:[{year:"2022",title:"Written in Destiny (Qadr)",desc:"An arranged family introduction that blossomed into deep mutual respect and shared faith.",image:"/images/muslim-destiny.jpg"},{year:"2024",title:"The Blessed Engagement",desc:"Surrounded by our families and sincere prayers, our rings were exchanged under golden lights.",image:"/images/muslim-engagement.jpg"},{year:"2026",title:"Nikah & Two Souls United",desc:"Committing to a lifetime of love and companionship as husband and wife.",image:"/images/muslim-nikah.jpg"}],galleryPhotos:[{image:"/images/muslim-royal-couple.jpg",caption:"Royal Couple Portrait"},{image:"/images/muslim-nikah.jpg",caption:"The Sacred Nikah Ceremony"},{image:"/images/muslim-engagement.jpg",caption:"Golden Ring Exchange"},{image:"/images/muslim-destiny.jpg",caption:"Written in Destiny"},{image:"/images/royal-chandelier-hallway.jpg",caption:"Crystal Palace Promenade"},{image:"/images/royal-main-wedding-arena.jpg",caption:"Grand Reception Stage"}],faqs:[{q:"Is valet parking available?",a:"Yes, complimentary VIP valet parking is available at the Main Grand Ballroom Entrance Portico."},{q:"What is the dress code recommendation?",a:"Guests are warmly encouraged to wear royal jewel tones, traditional South Asian / Arabian formal attire, or black-tie evening wear."},{q:"Are children & families welcome?",a:"We cherish family togetherness! Children and family members of all ages are joyfully invited."},{q:"Can we take photographs & share on social media?",a:"Yes! Please share your cherished moments and tag the couple with #FaizanMushira2026."}],wishingWellTitle:"Digital Shagun / Wedding Gift Fund",wishingWellAccount:"shagun.faizan-mushira@upi",wishingWellNote:"Your prayers, love, and presence on our special day are the greatest blessings of all. For friends and family who wish to bestow a traditional digital Shagun:"}}],et=[{id:"all-in-one-shagun",name:"All-In-One Complete Luxury Suite",price:1001,originalPrice:2501,currencySymbol:"₹",currency:"INR",popular:!0,shagunBadge:"All-Inclusive Shagun ₹1001 🕉️",description:"One simple price. Everything included forever — live webpage, full customizer, 3D unboxing, real-time RSVPs, music, and instant admin verification.",features:["Full Access to Customizer Studio (Unlimited Live Editing)","Cinematic Webpage Invitation","Personalized Shareable Web Link for WhatsApp & Instagram","Interactive 3D Wax Seal Envelope Unboxing Experience","Real-time Firestore Guest RSVP & Guestbook Registry","Live Countdown Clock to Celebration Day","Love Story Milestones & Photo Gallery","Interactive Google Maps Navigation","Ambient Celebration Background Music Player","Dress Code Moodboard & Digital Wishing Well / Bank Details","Instant HD Digital Download"]}];function tt(n,e={}){var l,c;const t=document.getElementById(n);if(!t)return;const{onStartCustomizing:i=()=>{},onOpenEnvelopeDemo:a=()=>{}}=e,s=I[0],r=w[s.themeId]||w.royalRedNavyBlack;t.innerHTML=`
    <section style="position: relative; padding: 6rem 0 4rem; overflow: hidden; background: radial-gradient(circle at 50% 20%, #16102C 0%, #0B0914 80%);">
      
      <!-- Subtle Background Glows -->
      <div style="position: absolute; top: 10%; left: 50%; transform: translateX(-50%); width: 600px; height: 350px; background: radial-gradient(ellipse, rgba(212, 175, 55, 0.12) 0%, transparent 70%); pointer-events: none;"></div>

      <div class="container" style="display: grid; grid-template-columns: 1.1fr 0.9fr; gap: 3.5rem; align-items: center;">
        
        <!-- Hero Text & Value Proposition -->
        <div>
          <div class="badge badge-gold" style="margin-bottom: 1.25rem;">
            <span>✨</span>
            <span>Digital Luxury Wedding & Gala Invitations</span>
          </div>

          <h1 class="font-serif" style="font-size: 3.25rem; line-height: 1.15; color: #FFF; margin-bottom: 1.25rem;">
            Unforgettable <span class="gold-gradient-text">Celebrations</span> Begin With Royalty.
          </h1>

          <p class="text-secondary" style="font-size: 1.1rem; line-height: 1.7; margin-bottom: 2rem;">
            Experience 3D wax-seal unboxing, cinematic webpage invitations, ambient background music, and real-time Firestore guest RSVPs — all for one simple ₹1001 Shagun price.
          </p>

          <div class="flex gap-4" style="flex-wrap: wrap;">
            <button id="hero-create-btn" class="btn btn-primary-gold btn-lg">
              <span>Start Customizing</span>
              <span>✨</span>
            </button>
            <button id="hero-unboxing-demo-btn" class="btn btn-secondary btn-lg">
              <span>Try 3D Unboxing Demo</span>
              <span>✉️</span>
            </button>
          </div>

          <!-- Feature Highlights -->
          <div class="flex gap-6" style="margin-top: 3rem; border-top: 1px solid rgba(255,255,255,0.08); padding-top: 2rem;">
            <div>
              <div style="font-family: var(--font-cinzel); font-size: 1.4rem; color: var(--gold-light); font-weight: 700;">100%</div>
              <div class="text-muted" style="font-size: 0.75rem; text-transform: uppercase;">Zero Lag Speed</div>
            </div>
            <div>
              <div style="font-family: var(--font-cinzel); font-size: 1.4rem; color: var(--gold-light); font-weight: 700;">3D Box</div>
              <div class="text-muted" style="font-size: 0.75rem; text-transform: uppercase;">Wax Seal Reveal</div>
            </div>
            <div>
              <div style="font-family: var(--font-cinzel); font-size: 1.4rem; color: var(--gold-light); font-weight: 700;">Realtime</div>
              <div class="text-muted" style="font-size: 0.75rem; text-transform: uppercase;">Firestore RSVPs</div>
            </div>
          </div>
        </div>

        <!-- Hero Interactive Invitation Card Preview -->
        <div style="perspective: 1000px; display: flex; justify-content: center;">
          <div class="invitation-card ${r.isLight?"theme-light":""}" style="background-color: ${r.cardBg}; border-color: ${r.border}; max-width: 440px; transform: rotate(1deg) translateY(-8px); box-shadow: var(--shadow-gold-lg); transition: transform 0.4s ease;" onmouseenter="this.style.transform='rotate(0deg) scale(1.02)'" onmouseleave="this.style.transform='rotate(1deg) translateY(-8px)'">
            <div class="invitation-arch-border"></div>
            
            <div class="invitation-bismillah font-serif">${s.defaults.bismillah}</div>
            <div class="invitation-tag font-mono">${s.defaults.tag}</div>
            
            <p style="font-size: 0.8rem; color: var(--text-muted); margin-bottom: 0.5rem;">
              ${s.defaults.title}
            </p>

            ${M(s.defaults.primaryNames,{size:"normal",fontClass:"font-cinzel"})}

            <div class="invitation-date">
              ${s.defaults.dateText}
            </div>
            <div style="font-size: 0.85rem; color: var(--gold-hover); margin-top: 0.25rem;">
              ${s.defaults.timeText}
            </div>

            <div class="invitation-venue" style="margin-top: 1rem; padding-top: 0.75rem; border-top: 1px solid rgba(212,175,55,0.2);">
              📍 ${s.defaults.venueName}
            </div>
          </div>
        </div>

      </div>
    </section>
  `,(l=document.getElementById("hero-create-btn"))==null||l.addEventListener("click",i),(c=document.getElementById("hero-unboxing-demo-btn"))==null||c.addEventListener("click",a)}function at(n,e=()=>{}){const t=document.getElementById(n);if(!t)return;let i="all";function a(){const s=i==="all"?I:I.filter(o=>o.category===i),r=K.find(o=>o.id===i)||K[0],c=`https://wa.me/918302929248?text=${encodeURIComponent(`Hi! ✨ I would like to order a bespoke custom invitation for ${r.label}. Please share design details and pricing.`)}`;t.innerHTML=`
      <section id="gallery-section" style="padding: 5rem 0;">
        <div class="container">
          <div class="text-center" style="margin-bottom: 3rem;">
            <span class="badge badge-gold" style="margin-bottom: 0.75rem;">Curated Collection</span>
            <h2 class="font-serif" style="font-size: 2.5rem; color: #FFF; margin-bottom: 0.75rem;">
              Handcrafted Luxury Invitation Suites
            </h2>
            <p class="text-muted" style="max-width: 600px; margin: 0 auto; font-size: 0.95rem;">
              Choose from royal wedding themes, or request a bespoke custom invitation for any milestone celebration.
            </p>
          </div>

          <!-- Category Filters -->
          <div class="flex justify-center gap-2" style="flex-wrap: wrap; margin-bottom: 3rem;">
            ${K.map(o=>`
              <button class="btn btn-sm ${i===o.id?"btn-primary-gold":"btn-secondary"} gallery-filter-btn" data-category="${o.id}">
                <span>${o.icon}</span>
                <span>${o.label}</span>
              </button>
            `).join("")}
          </div>

          <!-- Templates Grid -->
          ${s.length>0?`
            <div style="display: grid; grid-template-columns: repeat(auto-fit, minmax(340px, 1fr)); gap: 2rem;">
              ${s.map(o=>`
                <div class="glass-panel" style="overflow: hidden; display: flex; flex-direction: column; transition: var(--transition);" onmouseenter="this.style.transform='translateY(-6px)'" onmouseleave="this.style.transform='translateY(0)'">
                  <div style="position: relative; height: 260px; overflow: hidden; background: #05060F;">
                    <img src="${o.defaults.heroPhoto||"/images/muslim-royal-couple.jpg"}" alt="${o.name}" style="width: 100%; height: 100%; object-fit: cover;" loading="lazy" />
                    <div style="position: absolute; top: 1rem; left: 1rem;">
                      <span class="badge badge-gold">${o.badge||"Luxury"}</span>
                    </div>
                    <div style="position: absolute; bottom: 1rem; right: 1rem; background: rgba(0,0,0,0.7); backdrop-filter: blur(8px); padding: 0.4rem 0.8rem; border-radius: var(--radius-md); font-family: var(--font-mono); font-size: 0.85rem; color: var(--gold-light);">
                      ₹${o.basePrice}
                    </div>
                  </div>

                  <div style="padding: 1.75rem; flex: 1; display: flex; flex-direction: column; justify-content: space-between;">
                    <div>
                      <h3 class="font-serif" style="font-size: 1.35rem; color: #FFF; margin-bottom: 0.5rem;">${o.name}</h3>
                      <p class="text-muted" style="font-size: 0.85rem; line-height: 1.5; margin-bottom: 1.5rem;">${o.tagline}</p>
                    </div>

                    <div class="flex gap-2">
                      <button class="btn btn-primary-gold btn-block template-customize-btn" data-template-id="${o.id}">
                        <span>Customize in Studio</span>
                        <span>✨</span>
                      </button>
                    </div>
                  </div>
                </div>
              `).join("")}

              ${i==="all"?`
                <!-- Bespoke Custom Request Card in All view -->
                <div class="glass-panel" style="overflow: hidden; display: flex; flex-direction: column; justify-content: space-between; border: 2px dashed rgba(212, 175, 55, 0.4); padding: 2rem; text-align: center; background: radial-gradient(circle at center, rgba(19, 15, 41, 0.9) 0%, rgba(11, 9, 20, 0.95) 100%); transition: var(--transition);" onmouseenter="this.style.borderColor='rgba(212,175,55,0.8)'; this.style.transform='translateY(-6px)'" onmouseleave="this.style.borderColor='rgba(212,175,55,0.4)'; this.style.transform='translateY(0)'">
                  <div>
                    <div style="width: 60px; height: 60px; border-radius: 50%; background: rgba(212, 175, 55, 0.15); border: 1px solid var(--gold-border); margin: 0 auto 1.25rem; display: flex; align-items: center; justify-content: center; font-size: 1.75rem;">
                      🎨
                    </div>
                    <span class="badge badge-gold" style="margin-bottom: 0.75rem; font-size: 0.7rem;">Bespoke Service</span>
                    <h3 class="font-serif" style="font-size: 1.4rem; color: #FFF; margin-bottom: 0.5rem;">Need a Custom Design?</h3>
                    <p class="text-muted" style="font-size: 0.88rem; line-height: 1.6; margin-bottom: 1.5rem;">
                      Looking for birthdays, baby showers, anniversaries, or gala events? We handcraft custom invitations tailored to your exact theme.
                    </p>
                  </div>
                  
                  <a href="https://wa.me/918302929248?text=${encodeURIComponent("Hi! ✨ I would like to request a bespoke custom invitation for my event.")}" target="_blank" rel="noopener" class="btn btn-primary-gold btn-block" style="text-decoration: none;">
                    <span>Order Custom on WhatsApp</span>
                    <span>💬</span>
                  </a>
                </div>
              `:""}

            </div>
          `:`
            <!-- Empty Category: Coming Soon & Custom Order Card -->
            <div class="glass-panel coming-soon-card" style="max-width: 680px; width: 100%; margin: 0 auto; padding: clamp(1.75rem, 5vw, 3.5rem) clamp(1rem, 4vw, 2.5rem); text-align: center; border: 2px solid rgba(212, 175, 55, 0.45); border-radius: var(--radius-xl); background: radial-gradient(circle at center, rgba(22, 18, 44, 0.92) 0%, rgba(11, 9, 20, 0.96) 100%); box-shadow: var(--shadow-gold-lg); box-sizing: border-box;">
              
              <div style="width: 72px; height: 72px; border-radius: 50%; background: rgba(212, 175, 55, 0.15); border: 1.5px solid var(--gold-border); margin: 0 auto 1.5rem; display: flex; align-items: center; justify-content: center; font-size: 2.25rem; box-shadow: var(--shadow-gold);">
                ${r.icon}
              </div>

              <div class="badge badge-gold" style="margin-bottom: 1rem; font-size: 0.75rem; letter-spacing: 0.12em; white-space: normal; line-height: 1.4; padding: 0.35rem 0.85rem; max-width: 100%;">
                <span>✨</span>
                <span>Coming Soon • Bespoke Orders Open</span>
              </div>

              <h3 class="font-cinzel" style="font-size: clamp(1.5rem, 4vw, 2rem); color: #FFF; font-weight: 700; margin-bottom: 0.75rem; word-break: break-word;">
                ${r.label} Suite
              </h3>

              <p class="text-muted" style="font-size: 0.95rem; line-height: 1.7; max-width: 520px; margin: 0 auto 1.75rem;">
                Pre-made templates for <strong style="color: var(--gold-light);">${r.label}</strong> are currently being handcrafted and will be launching soon!
              </p>

              <!-- Highlight Box -->
              <div style="background: rgba(0, 0, 0, 0.45); border: 1px solid rgba(212, 175, 55, 0.3); border-radius: var(--radius-md); padding: 1.25rem; margin-bottom: 2rem; text-align: left; box-sizing: border-box; width: 100%;">
                <div style="font-size: 0.88rem; font-weight: 700; color: var(--gold-light); display: flex; align-items: center; gap: 0.5rem; margin-bottom: 0.4rem; flex-wrap: wrap;">
                  <span>💬</span>
                  <span>Custom Invitations Available Right Now:</span>
                </div>
                <p style="font-size: 0.82rem; color: var(--text-secondary); line-height: 1.6; margin: 0;">
                  For now, you can order a bespoke custom invitation designed exclusively for your ${r.label} celebration with personalized music, 3D wax seal unboxing, and tailored theme colors.
                </p>
              </div>

              <!-- Action CTAs -->
              <div style="display: flex; flex-direction: column; gap: 0.75rem; width: 100%; max-width: 440px; margin: 0 auto; box-sizing: border-box;">
                <a href="${c}" target="_blank" rel="noopener" class="btn btn-primary-gold" style="box-shadow: 0 8px 25px rgba(212, 175, 55, 0.4); text-decoration: none; padding: 0.85rem 1.25rem; font-size: 0.95rem; white-space: normal; line-height: 1.4; text-align: center; width: 100%; box-sizing: border-box; display: inline-flex; justify-content: center; align-items: center; gap: 0.5rem;">
                  <span>💬</span>
                  <span>Order Custom Invitation on WhatsApp</span>
                </a>
                <button class="btn btn-secondary gallery-filter-btn" data-category="all" style="padding: 0.85rem 1.25rem; font-size: 0.95rem; white-space: normal; line-height: 1.4; text-align: center; width: 100%; box-sizing: border-box; display: inline-flex; justify-content: center; align-items: center; gap: 0.5rem;">
                  <span>Explore Wedding Templates</span>
                  <span>💍</span>
                </button>
              </div>

            </div>
          `}
        </div>
      </section>
    `,t.querySelectorAll(".gallery-filter-btn").forEach(o=>{o.addEventListener("click",()=>{i=o.dataset.category,a()})}),t.querySelectorAll(".template-customize-btn").forEach(o=>{o.addEventListener("click",()=>{const m=o.dataset.templateId,g=I.find(p=>p.id===m)||I[0];e(g)})})}a()}const it="918302929248";function nt(n,e={}){const t=document.getElementById(n);if(!t)return;const i=e.whatsappNumber||it,a=encodeURIComponent("Hi! ✨ I would like to order a bespoke custom invitation webpage with specialized requirements. Please share design options and custom pricing for my event."),s=`https://wa.me/${i}?text=${a}`,r=encodeURIComponent("Hi! 🛠️ I need assistance with my Nyota invitation / ₹1001 payment verification / editor setup."),l=`https://wa.me/${i}?text=${r}`;t.innerHTML=`
    <section id="contact-section" style="position: relative; padding: 6rem 0; overflow: hidden; background: radial-gradient(circle at 50% 30%, #130F29 0%, #0B0914 100%); border-top: 1px solid rgba(212,175,55,0.15);">
      
      <!-- Ambient Glow Blobs -->
      <div style="position: absolute; top: 20%; left: 15%; width: 350px; height: 350px; background: radial-gradient(circle, rgba(16, 185, 129, 0.12) 0%, transparent 70%); pointer-events: none; filter: blur(60px);"></div>
      <div style="position: absolute; bottom: 20%; right: 15%; width: 350px; height: 350px; background: radial-gradient(circle, rgba(212, 175, 55, 0.12) 0%, transparent 70%); pointer-events: none; filter: blur(60px);"></div>

      <div class="container" style="position: relative; z-index: 10;">
        
        <!-- Section Header -->
        <div class="text-center" style="max-width: 700px; margin: 0 auto 3.5rem;">
          <div class="badge badge-emerald" style="margin-bottom: 0.85rem; font-size: 0.75rem; letter-spacing: 0.15em;">
            <span>💬</span>
            <span>Direct WhatsApp Concierge & Support</span>
          </div>
          
          <h2 class="font-cinzel" style="font-size: 2.5rem; color: #FFF; margin-bottom: 0.75rem; font-weight: 700;">
            Need Custom Work or <span class="gold-gradient-text">Instant Help?</span>
          </h2>
          
          <p class="text-muted" style="font-size: 0.95rem; line-height: 1.7;">
            Reach out directly on WhatsApp for bespoke custom invitation designs, unique caricature artwork, special animation requests, or prompt customer support.
          </p>
        </div>

        <!-- 2-Column Action Cards Grid -->
        <div style="display: grid; grid-template-columns: repeat(auto-fit, minmax(340px, 1fr)); gap: 2.25rem; max-width: 1080px; margin: 0 auto;">
          
          <!-- CARD 1: BESPOKE CUSTOM INVITATION ORDERS -->
          <div class="glass-panel" style="padding: 2.75rem 2.25rem; border: 2px solid rgba(212, 175, 55, 0.45); border-radius: var(--radius-xl); display: flex; flex-direction: column; justify-content: space-between; transition: var(--transition);" onmouseenter="this.style.borderColor='rgba(212,175,55,0.85)'; this.style.transform='translateY(-6px)'" onmouseleave="this.style.borderColor='rgba(212,175,55,0.45)'; this.style.transform='translateY(0)'">
            
            <div>
              <div style="display: flex; align-items: center; justify-content: space-between; margin-bottom: 1.5rem;">
                <div style="width: 52px; height: 52px; border-radius: 16px; background: rgba(212, 175, 55, 0.18); border: 1px solid rgba(212, 175, 55, 0.4); display: flex; align-items: center; justify-content: center; font-size: 1.5rem; color: var(--gold-light); box-shadow: var(--shadow-gold);">
                  ✨
                </div>
                <span class="badge badge-gold" style="font-size: 0.7rem; font-family: var(--font-mono);">
                  Bespoke Design
                </span>
              </div>

              <h3 class="font-cinzel" style="font-size: 1.5rem; color: #FFF; font-weight: 700; margin-bottom: 0.6rem;">
                Order Custom Invitations
              </h3>
              
              <p class="text-muted" style="font-size: 0.88rem; line-height: 1.65; margin-bottom: 1.5rem;">
                Looking for custom bride & groom caricature artwork, complex multi-event itineraries, 3D palace themes, video intros, or tailored royal animations?
              </p>

              <!-- Tailored Pricing Policy Note -->
              <div style="background: rgba(0, 0, 0, 0.45); border: 1px solid rgba(212, 175, 55, 0.25); border-radius: var(--radius-md); padding: 1rem 1.25rem; margin-bottom: 1.5rem;">
                <div style="font-size: 0.82rem; font-weight: 700; color: var(--gold-light); display: flex; align-items: center; gap: 0.4rem; margin-bottom: 0.25rem;">
                  <span>🤝</span>
                  <span>Tailored Pricing Policy:</span>
                </div>
                <p style="font-size: 0.78rem; color: var(--text-secondary); line-height: 1.5;">
                  Custom handcrafted invitations are priced individually based on design complexity, custom illustration assets, and specific client requirements.
                </p>
              </div>

              <!-- Feature Bullet List -->
              <ul style="list-style: none; display: flex; flex-direction: column; gap: 0.65rem; font-size: 0.85rem; color: #E2E8F0; margin-bottom: 2rem;">
                <li style="display: flex; align-items: center; gap: 0.6rem;">
                  <span style="color: #10B981; font-weight: bold;">✓</span>
                  <span>1-on-1 direct designer collaboration</span>
                </li>
                <li style="display: flex; align-items: center; gap: 0.6rem;">
                  <span style="color: #10B981; font-weight: bold;">✓</span>
                  <span>Unlimited revisions & custom audio/tracks</span>
                </li>
                <li style="display: flex; align-items: center; gap: 0.6rem;">
                  <span style="color: #10B981; font-weight: bold;">✓</span>
                  <span>Dedicated custom domain & private hosting</span>
                </li>
              </ul>
            </div>

            <a href="${s}" target="_blank" rel="noopener" class="btn btn-block btn-lg" style="background: linear-gradient(135deg, #10B981 0%, #059669 100%); color: #FFF; font-weight: 700; box-shadow: 0 8px 25px rgba(16, 185, 129, 0.35); text-decoration: none;">
              <span>💬</span>
              <span>Chat on WhatsApp for Custom Order</span>
              <span>→</span>
            </a>

          </div>

          <!-- CARD 2: INSTANT SUPPORT & ASSISTANCE -->
          <div class="glass-panel" style="padding: 2.75rem 2.25rem; border: 2px solid rgba(16, 185, 129, 0.4); border-radius: var(--radius-xl); display: flex; flex-direction: column; justify-content: space-between; transition: var(--transition);" onmouseenter="this.style.borderColor='rgba(16, 185, 129, 0.85)'; this.style.transform='translateY(-6px)'" onmouseleave="this.style.borderColor='rgba(16, 185, 129, 0.4)'; this.style.transform='translateY(0)'">
            
            <div>
              <div style="display: flex; align-items: center; justify-content: space-between; margin-bottom: 1.5rem;">
                <div style="width: 52px; height: 52px; border-radius: 16px; background: rgba(16, 185, 129, 0.18); border: 1px solid rgba(16, 185, 129, 0.4); display: flex; align-items: center; justify-content: center; font-size: 1.5rem; color: #6EE7B7; box-shadow: 0 0 20px rgba(16, 185, 129, 0.3);">
                  🛠️
                </div>
                <span class="badge badge-emerald" style="font-size: 0.7rem; font-family: var(--font-mono);">
                  Fast Support
                </span>
              </div>

              <h3 class="font-cinzel" style="font-size: 1.5rem; color: #FFF; font-weight: 700; margin-bottom: 0.6rem;">
                Need Help or Facing Any Issue?
              </h3>
              
              <p class="text-muted" style="font-size: 0.88rem; line-height: 1.65; margin-bottom: 1.5rem;">
                Have a question about your ₹1001 payment verification, photo sizing, Firestore RSVP management, or link sharing? We are here to help!
              </p>

              <!-- Prompt Response Box -->
              <div style="background: rgba(0, 0, 0, 0.45); border: 1px solid rgba(16, 185, 129, 0.25); border-radius: var(--radius-md); padding: 1rem 1.25rem; margin-bottom: 1.5rem;">
                <div style="font-size: 0.82rem; font-weight: 700; color: #6EE7B7; display: flex; align-items: gap: 0.4rem; margin-bottom: 0.25rem;">
                  <span>⚡</span>
                  <span>Prompt Response Time:</span>
                </div>
                <p style="font-size: 0.78rem; color: var(--text-secondary); line-height: 1.5;">
                  We reply directly on WhatsApp within minutes to resolve any doubts, approve payments, or assist with your live event setup.
                </p>
              </div>

              <!-- Feature Bullet List -->
              <ul style="list-style: none; display: flex; flex-direction: column; gap: 0.65rem; font-size: 0.85rem; color: #E2E8F0; margin-bottom: 2rem;">
                <li style="display: flex; align-items: center; gap: 0.6rem;">
                  <span style="color: #10B981; font-weight: bold;">✓</span>
                  <span>Instant payment & UTR verification help</span>
                </li>
                <li style="display: flex; align-items: center; gap: 0.6rem;">
                  <span style="color: #10B981; font-weight: bold;">✓</span>
                  <span>Assistance with audio tracks & photo sizing</span>
                </li>
                <li style="display: flex; align-items: center; gap: 0.6rem;">
                  <span style="color: #10B981; font-weight: bold;">✓</span>
                  <span>RSVP guest list export & technical guidance</span>
                </li>
              </ul>
            </div>

            <a href="${l}" target="_blank" rel="noopener" class="btn btn-block btn-lg" style="background: rgba(16, 185, 129, 0.2); border: 1.5px solid #10B981; color: #6EE7B7; font-weight: 700; box-shadow: 0 4px 20px rgba(16, 185, 129, 0.2); text-decoration: none;">
              <span>📞</span>
              <span>Contact Support on WhatsApp</span>
              <span>→</span>
            </a>

          </div>

        </div>

        <!-- Quick Contact Info Bar with Copy Button -->
        <div class="glass-panel" style="max-width: 600px; margin: 3rem auto 0; padding: 1.25rem 1.75rem; border-radius: var(--radius-lg); display: flex; align-items: center; justify-content: space-between; gap: 1rem; flex-wrap: wrap; text-align: left;">
          <div style="display: flex; align-items: center; gap: 0.75rem;">
            <div style="width: 40px; height: 40px; border-radius: 50%; background: rgba(16, 185, 129, 0.2); color: #10B981; display: flex; align-items: center; justify-content: center; font-size: 1.2rem;">
              💬
            </div>
            <div>
              <div style="font-size: 0.85rem; font-weight: 700; color: #FFF;">Direct WhatsApp Helpline</div>
              <div style="font-family: var(--font-mono); font-size: 0.8rem; color: var(--gold-light);">+${i}</div>
            </div>
          </div>

          <button id="copy-whatsapp-number-btn" class="btn btn-sm btn-gold-outline" style="cursor: pointer;">
            <span>Copy Number</span>
          </button>
        </div>

      </div>
    </section>
  `;const c=document.getElementById("copy-whatsapp-number-btn");c&&c.addEventListener("click",()=>{F(`+${i}`,"WhatsApp number copied to clipboard!")})}function N(n={}){var m,g;const e=n.particleCount||70,t=n.colors||["#D4AF37","#FAF5ED","#F5D38B","#F472B6","#38BDF8"];let i=document.getElementById("nyota-confetti-canvas");i||(i=document.createElement("canvas"),i.id="nyota-confetti-canvas",i.style.position="fixed",i.style.inset="0",i.style.width="100vw",i.style.height="100vh",i.style.pointerEvents="none",i.style.zIndex="9999",document.body.appendChild(i));const a=i.getContext("2d");i.width=window.innerWidth,i.height=window.innerHeight;const s=[],r=(m=n.origin)!=null&&m.x?n.origin.x*i.width:i.width/2,l=(g=n.origin)!=null&&g.y?n.origin.y*i.height:i.height*.6;for(let p=0;p<e;p++){const d=Math.PI*2*p/e+(Math.random()-.5),v=4+Math.random()*8;s.push({x:r,y:l,vx:Math.cos(d)*v,vy:Math.sin(d)*v-6,size:5+Math.random()*6,color:t[Math.floor(Math.random()*t.length)],rotation:Math.random()*360,rotationSpeed:(Math.random()-.5)*10,alpha:1,gravity:.25})}let c;function o(){a.clearRect(0,0,i.width,i.height);let p=0;s.forEach(d=>{d.alpha<=0||(p++,d.x+=d.vx,d.y+=d.vy,d.vy+=d.gravity,d.rotation+=d.rotationSpeed,d.alpha-=.012,a.save(),a.translate(d.x,d.y),a.rotate(d.rotation*Math.PI/180),a.globalAlpha=Math.max(0,d.alpha),a.fillStyle=d.color,a.fillRect(-d.size/2,-d.size/2,d.size,d.size*.7),a.restore())}),p>0?c=requestAnimationFrame(o):(a.clearRect(0,0,i.width,i.height),cancelAnimationFrame(c))}o()}class st{constructor(){this.ctx=null,this.isPlaying=!1,this.currentTrack="romanticPiano",this.intervalId=null,this.masterGain=null,this.isMuted=!1}init(){if(!this.ctx){const e=window.AudioContext||window.webkitAudioContext;if(!e)return;this.ctx=new e,this.masterGain=this.ctx.createGain(),this.masterGain.gain.setValueAtTime(.18,this.ctx.currentTime),this.masterGain.connect(this.ctx.destination)}this.ctx&&this.ctx.state==="suspended"&&this.ctx.resume()}playNote(e,t="sine",i=1.8,a=0){if(!(!this.ctx||this.isMuted))try{const s=this.ctx.createOscillator(),r=this.ctx.createGain();s.type=t,s.frequency.setValueAtTime(e,this.ctx.currentTime+a),r.gain.setValueAtTime(0,this.ctx.currentTime+a),r.gain.linearRampToValueAtTime(.15,this.ctx.currentTime+a+.08),r.gain.exponentialRampToValueAtTime(1e-4,this.ctx.currentTime+a+i),s.connect(r),r.connect(this.masterGain),s.start(this.ctx.currentTime+a),s.stop(this.ctx.currentTime+a+i)}catch(s){console.warn("Audio note play error:",s)}}startTrack(e="romanticPiano"){this.init(),this.stopTrack(),this.isPlaying=!0,this.currentTrack=e;let t=0;const i={romanticPiano:[[261.63,329.63,392,523.25],[220,261.63,329.63,440],[174.61,220,261.63,349.23],[196,246.94,293.66,392]],acousticJoy:[[293.66,369.99,440,587.33],[220,277.18,329.63,440],[246.94,293.66,369.99,493.88],[196,246.94,293.66,392]],lofiVibes:[[261.63,311.13,392,466.16],[233.08,293.66,349.23,440],[207.65,261.63,311.13,392],[196,246.94,293.66,349.23]],orchestralGala:[[220,277.18,329.63,440],[246.94,311.13,369.99,493.88],[207.65,261.63,311.13,415.3],[220,277.18,329.63,554.37]]},a=i[e]||i.romanticPiano,s=()=>{if(!this.isPlaying)return;const r=a[t%a.length];r.forEach((l,c)=>{this.playNote(l,e==="acousticJoy"?"triangle":"sine",3.2,c*.22)}),this.playNote(r[0]/2,"sine",3.8,0),t++};s(),this.intervalId=setInterval(s,3600)}stopTrack(){this.isPlaying=!1,this.intervalId&&(clearInterval(this.intervalId),this.intervalId=null)}toggleMute(){return this.isMuted=!this.isMuted,this.masterGain&&this.ctx&&this.masterGain.gain.setValueAtTime(this.isMuted?0:.18,this.ctx.currentTime),this.isMuted}}const L=new st;function ot(n,e={}){const t=document.getElementById(n);if(!t)return;const{invitationData:i={},themeId:a="royalRedNavyBlack",sealId:s="botanical",sealColor:r="#B88B42",ambientTrackId:l="romanticPiano",onOpened:c=()=>{}}=e,o=w[a]||w.royalRedNavyBlack,m=be.find(d=>d.id===s)||be[0];t.innerHTML=`
    <div class="envelope-stage">
      <div id="envelope-box" class="envelope-wrapper" style="background-color: ${o.envelopeBg};">
        
        <!-- Flap -->
        <div class="envelope-flap"></div>
        <div class="envelope-inner-glow"></div>
        <div class="envelope-border-line"></div>

        <!-- Recipient Header -->
        <div class="envelope-stamp-top">
          <div class="envelope-recipient-tag">SPECIAL INVITATION FOR</div>
          <div class="envelope-recipient-name">Honored Guest</div>
        </div>

        <!-- Wax Seal Center Button -->
        <div id="wax-seal-trigger" class="wax-seal-btn">
          <div class="wax-seal-badge" style="background: radial-gradient(circle at 35% 35%, rgba(255,255,255,0.45) 0%, rgba(212,175,55,0.2) 20%, transparent 60%), linear-gradient(135deg, ${r} 0%, #4a3606 100%);">
            <div class="wax-seal-pulse-ring"></div>
            <span>${m.icon}</span>
          </div>
          <div class="wax-seal-label">
            <span>Tap Seal To Open</span>
            <span>✨</span>
          </div>
        </div>

        <!-- Bottom Luxury Seal Stamp -->
        <div style="position: absolute; bottom: 1.25rem; right: 1.5rem; font-family: var(--font-mono); font-size: 0.65rem; letter-spacing: 0.15em; color: rgba(255,255,255,0.4);">
          NYOTA LUXE • AIR MAIL
        </div>

      </div>
    </div>
  `;const g=document.getElementById("wax-seal-trigger"),p=document.getElementById("envelope-box");g&&p&&g.addEventListener("click",d=>{d.stopPropagation(),p.classList.add("open"),N(),L.startTrack(l||"romanticPiano"),setTimeout(()=>{c()},1e3)})}function rt(n,e={}){const t=document.getElementById(n);if(!t)return;const i=e.id||"default_invitation",a=e.rsvpDeadline||"Kindly RSVP by September 15, 2026";t.innerHTML=`
    <div class="glass-panel" style="max-width: 680px; margin: 0 auto; padding: 2.5rem 2rem;">
      <div class="text-center" style="margin-bottom: 2rem;">
        <span class="badge badge-gold" style="margin-bottom: 0.75rem;">RSVP Response</span>
        <h3 class="font-serif" style="font-size: 2rem; color: #FFF; margin-bottom: 0.5rem;">Celebrate With Us</h3>
        <p class="text-muted" style="font-size: 0.875rem;">${a}</p>
      </div>

      <form id="nyota-rsvp-form">
        <div class="form-group">
          <label class="form-label">Full Name *</label>
          <input type="text" id="rsvp-guest-name" class="form-input" placeholder="e.g. Tariq & Yasmin Al-Mansoor" required />
        </div>

        <div class="grid" style="grid-template-columns: 1fr 1fr; gap: 1rem;">
          <div class="form-group">
            <label class="form-label">Email Address *</label>
            <input type="email" id="rsvp-guest-email" class="form-input" placeholder="tariq@example.com" required />
          </div>
          <div class="form-group">
            <label class="form-label">Phone / WhatsApp</label>
            <input type="tel" id="rsvp-guest-phone" class="form-input" placeholder="+1 (555) 000-0000" />
          </div>
        </div>

        <div class="form-group" style="margin-top: 0.5rem;">
          <label class="form-label">Will you be attending?</label>
          <div class="flex gap-4" style="margin-top: 0.25rem;">
            <label style="display: flex; align-items: center; gap: 0.5rem; cursor: pointer; color: #FFF;">
              <input type="radio" name="rsvp-status" value="attending" checked />
              <span>Joyfully Accepts ✨</span>
            </label>
            <label style="display: flex; align-items: center; gap: 0.5rem; cursor: pointer; color: var(--text-muted);">
              <input type="radio" name="rsvp-status" value="declined" />
              <span>Regretfully Declines</span>
            </label>
          </div>
        </div>

        <div class="grid" style="grid-template-columns: 1fr 1fr; gap: 1rem; margin-top: 1rem;">
          <div class="form-group">
            <label class="form-label">Total Attending Guests</label>
            <select id="rsvp-guest-count" class="form-select">
              <option value="1">1 Guest</option>
              <option value="2" selected>2 Guests</option>
              <option value="3">3 Guests</option>
              <option value="4">4 Guests</option>
              <option value="5">5+ Guests</option>
            </select>
          </div>
          <div class="form-group">
            <label class="form-label">Dietary Preferences</label>
            <select id="rsvp-dietary" class="form-select">
              <option value="Halal / Standard" selected>Halal / Standard Feast</option>
              <option value="Vegetarian">Pure Vegetarian / Vegan</option>
              <option value="Gluten-Free">Gluten-Free</option>
              <option value="Nut-Allergy">Nut Allergy / Special</option>
            </select>
          </div>
        </div>

        <div class="form-group" style="margin-top: 0.5rem;">
          <label class="form-label">Warm Wishes & Duas for the Couple</label>
          <textarea id="rsvp-message" class="form-textarea" placeholder="May Allah shower both of you with eternal love, barakah, and happiness..."></textarea>
        </div>

        <button type="submit" id="rsvp-submit-btn" class="btn btn-primary-gold btn-block btn-lg" style="margin-top: 1rem;">
          <span>Submit RSVP Confirmation</span>
          <span>✨</span>
        </button>
      </form>

      <div id="rsvp-success-state" class="hidden text-center" style="padding: 2rem 1rem;">
        <div style="font-size: 3rem; margin-bottom: 1rem;">🎉</div>
        <h4 class="font-serif" style="font-size: 1.75rem; color: var(--gold-light); margin-bottom: 0.5rem;">RSVP Confirmed!</h4>
        <p class="text-secondary" style="font-size: 0.9rem; max-width: 440px; margin: 0 auto;">Thank you for celebrating with us. We have recorded your response and look forward to sharing this blessed celebration!</p>
      </div>
    </div>
  `;const s=document.getElementById("nyota-rsvp-form"),r=document.getElementById("rsvp-success-state");s&&s.addEventListener("submit",async l=>{var $;l.preventDefault();const c=document.getElementById("rsvp-submit-btn");c.disabled=!0,c.innerHTML="<span>Saving...</span>";const o=document.getElementById("rsvp-guest-name").value.trim(),m=document.getElementById("rsvp-guest-email").value.trim(),g=document.getElementById("rsvp-guest-phone").value.trim(),p=(($=document.querySelector('input[name="rsvp-status"]:checked'))==null?void 0:$.value)||"attending",d=parseInt(document.getElementById("rsvp-guest-count").value,10)||1,v=document.getElementById("rsvp-dietary").value,y=document.getElementById("rsvp-message").value.trim();try{await Ye({invitationId:i,guestName:o,guestEmail:m,guestPhone:g,status:p,guestCount:p==="attending"?d:0,dietary:v,message:y}),N(),s.classList.add("hidden"),r.classList.remove("hidden"),b("RSVP submitted successfully!","success")}catch{b("Failed to submit RSVP. Please try again.","error"),c.disabled=!1,c.innerHTML="<span>Submit RSVP Confirmation</span><span>✨</span>"}})}function Ie(n,e={},t={}){const i=document.getElementById(n);if(!i)return;let a=t.themeId||e.themeId||"royalRedNavyBlack";const{fontPairingId:s=e.fontPairingId||"classicSerif",ambientTrackId:r=e.ambientTrackId||"romanticPiano",startWithCurtains:l=!0}=t;let c=w[a]||w.royalRedNavyBlack;const o=B[s]||B.classicSerif,{bismillah:m="بِسْمِ ٱللَّٰهِ ٱلرَّحْمَٰنِ ٱلرَّحِيمِ",quranVerse:g="“And among His signs is that He created for you mates from among yourselves, that you may find tranquility in them; and He placed between you affection and mercy.”",quranRef:p="Surah Ar-Rum (30:21)",duaBlessing:d="بَارَكَ اللَّهُ لَكَ وَبَارَكَ عَلَيْكَ وَجَمَعَ بَيْنَكُمَا فِي خَيْرٍ",duaTranslation:v="May Allah bless you, shower His blessings upon you, and unite you both in goodness & harmony.",tag:y="TOGETHER WITH THEIR FAMILIES",title:$="Cordially invite you to grace the blessed wedding celebration & Nikah of",primaryNames:S="Faizan Salam & Mushira Shaikh",dateText:X="Saturday, October 24, 2026",timeText:Se="Five O'Clock In The Evening",venueName:T="The Royal Emirates Palace & Grand Ballroom",venueAddress:P="West Corniche Road, Grand Palace Avenue, NY 10022",heroPhoto:Ee="/images/muslim-royal-couple.jpg",receptionInfo:ht="Grand Royal Walima Banquet & Celebrations to Follow",dressCode:Te="Royal Crimson, Midnight Sapphire & Obsidian Black Formal",dressCodeNote:Ce="We warmly encourage our cherished guests to embrace royal jewel tones, traditional formal attire (Sherwanis, Anarkalis, Abayas, Lehengas) or classic evening gowns & tuxedos.",groomParents:Ae="Mr. & Mrs. Mohammed Salam",brideParents:ke="Mr. & Mrs. Tariq Shaikh",familyBlessingText:Be="With the grace and blessings of Allah (SWT), we invite you to share our immense happiness and grace the holy union of our beloved children.",itinerary:D=[],loveStories:O=[],galleryPhotos:G=[{image:"/images/muslim-royal-couple.jpg",caption:"Royal Couple Portrait"},{image:"/images/muslim-nikah.jpg",caption:"The Sacred Nikah Ceremony"},{image:"/images/muslim-engagement.jpg",caption:"Golden Ring Exchange"},{image:"/images/muslim-destiny.jpg",caption:"Written in Destiny"},{image:"/images/royal-chandelier-hallway.jpg",caption:"Crystal Palace Promenade"},{image:"/images/royal-main-wedding-arena.jpg",caption:"Grand Reception Stage"}],faqs:W=[{q:"Is valet parking available?",a:"Yes, complimentary VIP valet parking is available at the Main Grand Ballroom Entrance Portico."},{q:"What is the dress code recommendation?",a:"Guests are warmly encouraged to wear royal jewel tones, traditional South Asian / Arabian formal attire, or black-tie evening wear."},{q:"Are children & families welcome?",a:"We cherish family togetherness! Children and family members of all ages are joyfully invited."},{q:"Can we take photographs & share on social media?",a:"Yes! Please share your cherished moments and tag the couple with #FaizanMushira2026."}],wishingWellTitle:Fe="Digital Shagun / Wedding Gift Fund",wishingWellAccount:Z="shagun.faizan-mushira@upi",wishingWellNote:$e="Your prayers, love, and presence on our special day are the greatest blessings of all."}=e,Pe=Qe(S),ee=`https://calendar.google.com/calendar/render?action=TEMPLATE&text=${encodeURIComponent(`Royal Wedding & Nikah: ${S}`)}&dates=20261024T170000/20261024T233000&details=${encodeURIComponent(`You are cordially invited to celebrate the Nikah and Walima banquet of ${S}. Venue: ${T}`)}&location=${encodeURIComponent(`${T}, ${P}`)}`,ze=`✨ You are cordially invited to the Royal Wedding & Nikah of *${S}* on ${X}! View our interactive royal invitation suite: ${window.location.href}`,Re=`https://api.whatsapp.com/send?text=${encodeURIComponent(ze)}`;i.innerHTML=`
    <div id="invitation-suite-root" class="${c.isLight?"theme-light":""}" style="${c.bgClass}; min-height: 100vh; color: var(--text-primary); position: relative; overflow-x: hidden; transition: background 0.5s ease;">
      
      <!-- Background Ambient Starlight & Golden Dust Particle Canvas -->
      <canvas id="starlight-canvas" class="starlight-particle-canvas"></canvas>
      <div class="mashrabiya-backdrop"></div>

      <!-- ========================================================================= -->
      <!-- 1. MULTI-STAGE ROYAL CURTAINS & CHANDELIER HALLWAY WALKTHROUGH GATEWAY -->
      <!-- ========================================================================= -->
      ${l?`
      <div id="royal-curtain-gateway" class="royal-entrance-stage">
        
        <!-- Backdrops Layer -->
        <div class="walkthrough-backdrops-container">
          
          <!-- Scene 1: Grand Crystal Chandelier Palace Hallway -->
          <div class="chandelier-hallway-wrapper">
            <img src="/images/royal-chandelier-hallway.jpg" alt="Grand Chandelier Hallway" class="chandelier-hallway-img" />
            <div class="chandelier-lighting-glow"></div>
          </div>

          <!-- Scene 2: Main Grand Wedding Arena & Canopy Stage -->
          <div class="wedding-arena-wrapper">
            <img src="/images/royal-main-wedding-arena.jpg" alt="Royal Wedding Arena Stage" class="wedding-arena-img" />
          </div>

          <!-- Rising Golden Arabic Bismillah Calligraphy & High-Contrast Welcome Plaque -->
          <div id="rising-bismillah-slot" class="bismillah-rising-hero hidden">
            <div class="royal-welcome-plaque">
              <div class="invitation-bismillah font-serif gold-gradient-text" style="font-size: 2.85rem; text-shadow: 0 0 30px rgba(212,175,55,1); margin-bottom: 0.25rem;">
                ${m}
              </div>
              <div class="royal-welcome-badge">
                <span>✨</span>
                <span>Welcome to the Royal Celebration</span>
                <span>✨</span>
              </div>
            </div>
          </div>

        </div>

        <!-- Layer 2 (Inner): Sapphire Blue Silk Curtains in Chandelier Hallway (Opens in Austrian Tieback Style) -->
        <div class="hallway-curtains-stage2">
          <div class="stage2-curtain-left">
            <div class="gold-damask-overlay" style="position: absolute; inset: 0;"></div>
            <div style="position: absolute; top: 0; bottom: 0; right: 0; width: 4px; background: linear-gradient(180deg, #F5D38B, #D4AF37); box-shadow: 0 0 12px rgba(212,175,55,0.8);"></div>
          </div>
          <div class="stage2-curtain-right">
            <div class="gold-damask-overlay" style="position: absolute; inset: 0;"></div>
            <div style="position: absolute; top: 0; bottom: 0; left: 0; width: 4px; background: linear-gradient(180deg, #F5D38B, #D4AF37); box-shadow: 0 0 12px rgba(212,175,55,0.8);"></div>
          </div>
        </div>

        <!-- Layer 1 (Outer): Royal Crimson Heavy Velvet Curtains with Pullers -->
        <div class="curtain-fabric-left">
          <div class="gold-damask-overlay" style="position: absolute; inset: 0;"></div>
          <div class="gold-fringe-pattern" style="position: absolute; top: 0; bottom: 0; right: 0; width: 8px; box-shadow: 0 0 15px rgba(212,175,55,0.8);"></div>

          <!-- Cartoon Bride Pulling Golden Braided Rope -->
          <div style="position: absolute; top: 40%; right: 12px; transform: translateY(-50%); display: flex; flex-direction: column; align-items: center; z-index: 35; pointer-events: none;">
            <div style="width: 5px; height: 80px; background: linear-gradient(180deg, #F5D38B, #B88B42); box-shadow: var(--shadow-gold); border-radius: 999px;"></div>
            <div id="bride-puller" style="width: 140px; height: 140px; transition: transform 0.4s ease;">
              <img src="/images/cartoon-bride-pulling.png" alt="Bride Pulling Curtain" style="width: 100%; height: 100%; object-fit: contain; filter: drop-shadow(0 10px 20px rgba(0,0,0,0.8));" />
            </div>
            <div style="width: 16px; height: 36px; border-radius: 0 0 8px 8px; background: linear-gradient(180deg, #D4AF37, #8F662C); box-shadow: var(--shadow-gold);"></div>
          </div>
        </div>

        <div class="curtain-fabric-right">
          <div class="gold-damask-overlay" style="position: absolute; inset: 0;"></div>
          <div class="gold-fringe-pattern" style="position: absolute; top: 0; bottom: 0; left: 0; width: 8px; box-shadow: 0 0 15px rgba(212,175,55,0.8);"></div>

          <!-- Cartoon Groom Pulling Golden Braided Rope -->
          <div style="position: absolute; top: 40%; left: 12px; transform: translateY(-50%); display: flex; flex-direction: column; align-items: center; z-index: 35; pointer-events: none;">
            <div style="width: 5px; height: 80px; background: linear-gradient(180deg, #F5D38B, #B88B42); box-shadow: var(--shadow-gold); border-radius: 999px;"></div>
            <div id="groom-puller" style="width: 140px; height: 140px; transition: transform 0.4s ease;">
              <img src="/images/cartoon-groom-pulling.png" alt="Groom Pulling Curtain" style="width: 100%; height: 100%; object-fit: contain; filter: drop-shadow(0 10px 20px rgba(0,0,0,0.8));" />
            </div>
            <div style="width: 16px; height: 36px; border-radius: 0 0 8px 8px; background: linear-gradient(180deg, #D4AF37, #8F662C); box-shadow: var(--shadow-gold);"></div>
          </div>
        </div>

        <!-- Top Austrian Pelmet Valance -->
        <div class="curtain-valance-box">
          <div class="curtain-valance"></div>
          <div class="curtain-swag-row">
            <div class="curtain-swag" style="width: 260px; height: 50px; border-radius: 0 0 100px 100px; border-bottom: 2px solid #D4AF37; display: flex; align-items: center; justify-content: center;">
              <div style="width: 36px; height: 36px; border-radius: 50%; background: #1A030A; border: 1.5px solid #D4AF37; display: flex; align-items: center; justify-content: center; font-size: 1rem; color: #F5D38B; box-shadow: var(--shadow-gold);">
                👑
              </div>
            </div>
          </div>
          <div class="curtain-jabot-left"></div>
          <div class="curtain-jabot-right"></div>
        </div>

        <!-- Center Gateway Preview Card -->
        <div id="curtain-center-card" style="position: relative; z-index: 45; width: 100%; max-width: 440px; padding: 1.5rem; text-align: center; transition: all 1s ease;">
          
          <!-- Arabic Calligraphy -->
          <div class="invitation-bismillah font-serif animate-bismillah-radiance" style="font-size: 1.85rem; margin-bottom: 1rem;">
            ${m}
          </div>

          <!-- Moorish Arch Preview Card -->
          <div class="invitation-card royal-glow-box" style="padding: 2.5rem 1.75rem;">
            <div class="invitation-arch-border"></div>

            <!-- Monogram Crest -->
            <div style="width: 68px; height: 68px; border-radius: 50%; margin: 0 auto 1.25rem; background: linear-gradient(135deg, #D4AF37, #8B152B, #0B1B3D); padding: 2px; box-shadow: 0 0 20px rgba(212,175,55,0.7); display: flex; align-items: center; justify-content: center;">
              <div style="width: 100%; height: 100%; border-radius: 50%; background: #0A040A; display: flex; flex-direction: column; align-items: center; justify-content: center;">
                <span style="font-size: 0.75rem;" class="animate-crown-pulse">👑</span>
                <span class="font-cinzel" style="font-size: 0.85rem; font-weight: bold; color: var(--gold-light);">${Pe}</span>
              </div>
            </div>

            <div style="font-family: var(--font-mono); font-size: 0.7rem; color: #FDA4AF; letter-spacing: 0.22em; text-transform: uppercase; margin-bottom: 0.35rem;">
              DAWAT-E-KHAS • NIKAH CEREMONY
            </div>

            ${M(S,{size:"normal",fontClass:"font-cinzel"})}

            <p class="font-serif text-muted" style="font-size: 0.88rem; font-style: italic; line-height: 1.6; margin: 1rem 0 1.75rem; border-top: 1px solid rgba(212,175,55,0.25); padding-top: 0.85rem;">
              ${g}
            </p>

            <!-- Grand Open Button -->
            <button id="open-royal-curtains-btn" class="btn btn-primary-gold btn-block btn-lg" style="font-size: 1.05rem; box-shadow: 0 0 30px rgba(212, 175, 55, 0.7); cursor: pointer;">
              <span>Open Royal Invitation</span>
              <span>✨</span>
            </button>

            <div style="display: flex; align-items: center; justify-content: center; gap: 0.45rem; font-size: 0.78rem; color: var(--gold-light); margin-top: 0.85rem;">
              <span>🎵</span>
              <span>Curtains unfold & walk through the royal palace</span>
            </div>
          </div>

        </div>

      </div>
      `:""}

      <!-- Floating Audio Controller with Animated Vinyl & Equalizer -->
      <div id="floating-music-btn" class="floating-audio-control">
        <div id="music-vinyl-disc" class="vinyl-disc-mini"></div>
        <div id="music-sound-bars" class="sound-bars-container">
          <div class="sound-bar"></div>
          <div class="sound-bar"></div>
          <div class="sound-bar"></div>
          <div class="sound-bar"></div>
        </div>
        <span id="music-text-state">Play Music</span>
      </div>

      <!-- Floating Quick Dock (WhatsApp Share) -->
      <div class="floating-quick-dock">
        <a href="${Re}" target="_blank" rel="noopener" class="floating-pill-control" style="background: linear-gradient(135deg, #10B981, #059669); color: #FFF; border: none; box-shadow: 0 8px 25px rgba(16, 185, 129, 0.4);" title="Share Invitation on WhatsApp">
          <span>💬 Share on WhatsApp</span>
        </a>
      </div>

      <!-- ========================================================================= -->
      <!-- 2. ROYAL WEBPAGE HERO BANNER WITH STACKED COUPLE NAMES -->
      <!-- ========================================================================= -->
      <header id="invitation-hero" class="webpage-hero" style="background-image: url('${Ee}');">
        <div class="webpage-hero-content">
          ${m?`<div class="invitation-bismillah ${o.heading} animate-bismillah-radiance">${m}</div>`:""}
          
          <div class="badge badge-gold animate-float-card" style="margin-bottom: 1.25rem; font-size: 0.75rem; letter-spacing: 0.25em;">
            ${y}
          </div>
          
          <p style="font-size: 1.05rem; color: var(--gold-light); margin-bottom: 0.85rem; font-family: var(--font-serif); font-style: italic;">
            ${$}
          </p>
          
          ${M(S,{size:"lg",fontClass:o.heading||"font-cinzel"})}

          <div style="font-size: 1.35rem; font-family: var(--font-cinzel); color: var(--gold-light); margin-top: 1.25rem; text-shadow: 0 0 15px rgba(212,175,55,0.6);">
            ${X} • ${Se}
          </div>

          <div style="font-size: 1.05rem; margin-top: 0.6rem; font-weight: 500;">
            📍 ${T}
          </div>

          <!-- 1-Click Add to Calendar & Maps Actions -->
          <div class="calendar-actions-bar">
            <a href="${ee}" target="_blank" rel="noopener" class="calendar-pill-btn" title="Add event to Google Calendar">
              <span>📅</span>
              <span>Add to Google Calendar</span>
            </a>
            <a href="https://maps.google.com/?q=${encodeURIComponent(T+" "+P)}" target="_blank" rel="noopener" class="calendar-pill-btn" title="Get Driving Directions">
              <span>📍</span>
              <span>Directions</span>
            </a>
          </div>

          <!-- Live Countdown Clock -->
          <div class="countdown-grid">
            <div class="countdown-box">
              <div class="countdown-number" id="cd-days">42</div>
              <div class="countdown-label">Days</div>
            </div>
            <div class="countdown-box">
              <div class="countdown-number" id="cd-hours">14</div>
              <div class="countdown-label">Hours</div>
            </div>
            <div class="countdown-box">
              <div class="countdown-number" id="cd-minutes">36</div>
              <div class="countdown-label">Minutes</div>
            </div>
            <div class="countdown-box">
              <div class="countdown-number" id="cd-seconds">20</div>
              <div class="countdown-label">Seconds</div>
            </div>
          </div>

          <div class="flex justify-center gap-4" style="margin-top: 2.25rem;">
            <a href="#rsvp-section-anchor" class="btn btn-primary-gold btn-lg" style="box-shadow: 0 0 25px rgba(212, 175, 55, 0.6);">
              <span>RSVP Now</span>
              <span>✨</span>
            </a>
            <a href="#itinerary-section" class="btn btn-secondary btn-lg">
              <span>View Itinerary</span>
              <span>📜</span>
            </a>
          </div>
        </div>
      </header>

      <!-- ========================================================================= -->
      <!-- 3. WELCOMING HOSTS & PARENTAL BLESSINGS (DESIGNER SECTION) -->
      <!-- ========================================================================= -->
      <section style="padding: 5rem 1.5rem 2rem; position: relative; z-index: 5;">
        <div class="container-narrow glass-panel text-center royal-glow-box" style="padding: 3.5rem 2.5rem; border-radius: var(--radius-xl);">
          <span class="badge badge-gold">With Parental Blessings</span>
          <h2 class="font-serif" style="font-size: 2.25rem; margin-top: 0.75rem;">The Blessed Families</h2>
          <p class="text-muted" style="font-size: 0.95rem; max-width: 620px; margin: 0.6rem auto 0; line-height: 1.7;">
            ${Be}
          </p>

          <div class="family-hosts-grid">
            <!-- Groom's Parents -->
            <div class="family-host-card">
              <span class="family-host-badge">Groom's Side</span>
              <div class="family-host-parents">${Ae}</div>
              <p class="text-muted" style="font-size: 0.85rem; margin-top: 0.35rem;">Cordially welcome all guests to share in the joy of the groom & family.</p>
            </div>

            <!-- Bride's Parents -->
            <div class="family-host-card">
              <span class="family-host-badge">Bride's Side</span>
              <div class="family-host-parents">${ke}</div>
              <p class="text-muted" style="font-size: 0.85rem; margin-top: 0.35rem;">Warmly invite your gracious presence to bestow prayers upon the bride & family.</p>
            </div>
          </div>
        </div>
      </section>

      <!-- ========================================================================= -->
      <!-- 4. SACRED QURANIC VERSE & WEDDING DUA -->
      <!-- ========================================================================= -->
      ${g?`
      <section style="padding: 4rem 1.5rem; text-align: center; position: relative; z-index: 5;">
        <div class="container-narrow glass-panel" style="padding: 3.5rem 2.5rem; border-radius: var(--radius-xl);">
          <div style="font-size: 2.25rem; margin-bottom: 1.25rem;" class="animate-float-card">✨ 🕊️ ✨</div>
          
          <blockquote class="${o.heading}" style="font-size: 1.45rem; line-height: 1.8; font-style: italic;">
            ${g}
          </blockquote>
          
          <div style="margin-top: 1.25rem; font-family: var(--font-mono); font-size: 0.85rem; color: var(--gold-light); letter-spacing: 0.15em;">
            — ${p}
          </div>
          
          ${d?`
            <div style="margin-top: 2.5rem; padding-top: 2rem; border-top: 1px solid rgba(212,175,55,0.25);">
              <div class="font-serif animate-bismillah-radiance" style="font-size: 1.45rem; color: var(--gold-light);">${d}</div>
              <p style="font-size: 0.92rem; margin-top: 0.75rem; font-style: italic;" class="text-muted">${v}</p>
            </div>
          `:""}
        </div>
      </section>
      `:""}

      <!-- ========================================================================= -->
      <!-- 5. CELEBRATION ITINERARY TIMELINE -->
      <!-- ========================================================================= -->
      ${D&&D.length>0?`
      <section id="itinerary-section" style="padding: 5rem 1.5rem; position: relative; z-index: 5;">
        <div class="container">
          <div class="text-center">
            <span class="badge badge-gold">Order of Events</span>
            <h2 class="font-serif" style="font-size: 2.5rem; margin-top: 0.75rem;">Celebration Itinerary</h2>
            <p style="color: var(--gold-light); font-size: 0.95rem; margin-top: 0.4rem;">Join us for an unforgettable evening of sacred vows and grand festivities</p>
          </div>

          <div class="itinerary-timeline">
            ${D.map(u=>`
              <div class="itinerary-item">
                <div class="itinerary-node">${u.icon||"✨"}</div>
                <div class="itinerary-card">
                  <div class="itinerary-time">${u.time}</div>
                  <div class="itinerary-title">${u.event}</div>
                  <div class="itinerary-desc">${u.desc||""}</div>
                </div>
              </div>
            `).join("")}
          </div>
        </div>
      </section>
      `:""}

      <!-- ========================================================================= -->
      <!-- 6. LOVE STORY MILESTONES -->
      <!-- ========================================================================= -->
      ${O&&O.length>0?`
      <section style="padding: 5rem 1.5rem; position: relative; z-index: 5;">
        <div class="container">
          <div class="text-center">
            <span class="badge badge-rose">Our Journey</span>
            <h2 class="font-serif" style="font-size: 2.5rem; margin-top: 0.75rem;">Our Love Story</h2>
            <p style="font-size: 0.95rem; margin-top: 0.4rem;" class="text-muted">Every chapter beautifully guided by faith, family, and destiny</p>
          </div>

          <div class="story-grid">
            ${O.map(u=>`
              <div class="story-card">
                ${u.image?`
                  <div class="story-image-wrapper">
                    <img src="${u.image}" alt="${u.title}" class="story-image" loading="lazy" />
                    <div class="story-image-overlay"></div>
                  </div>
                `:""}
                <div class="story-content">
                  <span class="story-year">${u.year}</span>
                  <div class="story-title">${u.title}</div>
                  <p class="text-muted" style="font-size: 0.92rem; line-height: 1.6;">${u.desc}</p>
                </div>
              </div>
            `).join("")}
          </div>
        </div>
      </section>
      `:""}

      <!-- ========================================================================= -->
      <!-- 7. ROYAL PHOTO GALLERY SHOWCASE (DESIGNER SECTION) -->
      <!-- ========================================================================= -->
      ${G&&G.length>0?`
      <section style="padding: 5rem 1.5rem; position: relative; z-index: 5;">
        <div class="container">
          <div class="text-center">
            <span class="badge badge-gold">Memories & Portraits</span>
            <h2 class="font-serif" style="font-size: 2.5rem; margin-top: 0.75rem;">Photo Gallery</h2>
            <p class="text-muted" style="font-size: 0.95rem; margin-top: 0.4rem;">Glimpses of sacred celebrations, royal elegance, and timeless moments</p>
          </div>

          <div class="royal-gallery-grid">
            ${G.map(u=>`
              <div class="royal-gallery-item">
                <img src="${u.image}" alt="${u.caption}" class="royal-gallery-img" loading="lazy" />
                <div class="royal-gallery-overlay">
                  <div class="royal-gallery-caption">${u.caption}</div>
                </div>
              </div>
            `).join("")}
          </div>
        </div>
      </section>
      `:""}

      <!-- ========================================================================= -->
      <!-- 8. INTERACTIVE SECRET ROYAL BLESSING SCRATCH CARD -->
      <!-- ========================================================================= -->
      <section style="padding: 4rem 1.5rem; position: relative; z-index: 5;">
        <div class="container">
          <div class="royal-scratch-card">
            <span class="badge badge-gold">Special Couple Reveal</span>
            <h3 class="font-serif" style="font-size: 1.75rem; margin: 0.6rem 0;">Secret Blessing From The Couple</h3>
            <p class="text-muted" style="font-size: 0.9rem;">Tap or scratch the golden royal seal below to reveal a heartfelt private message!</p>
            
            <div id="secret-scratch-box" class="secret-reveal-box">
              <div id="secret-cover-layer" class="secret-reveal-cover">
                <div style="font-size: 2.5rem; margin-bottom: 0.5rem;" class="animate-crown-pulse">👑</div>
                <div style="font-family: var(--font-cinzel); font-size: 1.1rem; color: #FFF; font-weight: bold; text-shadow: 0 2px 8px rgba(0,0,0,0.8);">
                  TAP TO UNSEAL BLESSING
                </div>
                <div style="font-size: 0.8rem; color: var(--gold-light); margin-top: 0.25rem;">✨ Touch with love & prayers ✨</div>
              </div>

              <!-- Unveiled Message -->
              <div style="padding: 1rem; text-align: center;">
                <div style="font-size: 2rem; margin-bottom: 0.5rem;">💌 💍 🕊️</div>
                <div class="font-serif" style="font-size: 1.25rem; color: var(--gold-light); font-style: italic; line-height: 1.6;">
                  “May unending peace, heartfelt laughter, and infinite barakah bless all who pray for us. Thank you for gracing the most sacred milestone of our lives!”
                </div>
                <div class="font-cinzel" style="font-size: 0.95rem; margin-top: 1rem; font-weight: bold; letter-spacing: 0.1em;">
                  — WITH ENDLESS LOVE, FAIZAN & MUSHIRA —
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <!-- ========================================================================= -->
      <!-- 9. VENUE & GOOGLE MAPS NAVIGATION -->
      <!-- ========================================================================= -->
      <section style="padding: 4rem 1.5rem; position: relative; z-index: 5;">
        <div class="container-narrow glass-panel text-center royal-glow-box" style="padding: 3.5rem 2rem; border-radius: var(--radius-xl);">
          <span class="badge badge-gold">Ceremony Location</span>
          <h2 class="font-serif" style="font-size: 2.25rem; margin-top: 0.75rem;">${T}</h2>
          <p class="text-muted" style="font-size: 1rem; margin: 0.75rem 0 2rem;">${P}</p>
          
          <div class="flex justify-center gap-4 flex-wrap">
            <a href="https://maps.google.com/?q=${encodeURIComponent(T+" "+P)}" target="_blank" rel="noopener" class="btn btn-primary-gold btn-lg" style="box-shadow: 0 0 25px rgba(212, 175, 55, 0.6);">
              <span>Open in Google Maps</span>
              <span>📍</span>
            </a>
            <a href="${ee}" target="_blank" rel="noopener" class="btn btn-secondary btn-lg">
              <span>Add to Calendar</span>
              <span>📅</span>
            </a>
          </div>
        </div>
      </section>

      <!-- ========================================================================= -->
      <!-- 10. GUEST HOSPITALITY & FAQ (DESIGNER SECTION) -->
      <!-- ========================================================================= -->
      ${W&&W.length>0?`
      <section style="padding: 4rem 1.5rem; position: relative; z-index: 5;">
        <div class="container">
          <div class="text-center">
            <span class="badge badge-gold">Guest Concierge</span>
            <h2 class="font-serif" style="font-size: 2.25rem; margin-top: 0.75rem;">Hospitality & Guest Information</h2>
            <p class="text-muted" style="font-size: 0.95rem; margin-top: 0.4rem;">Everything you need to know for a seamless and delightful celebration</p>
          </div>

          <div class="hospitality-faq-grid">
            ${W.map(u=>`
              <div class="hospitality-faq-card">
                <div class="faq-q-title">
                  <span>✨</span>
                  <span>${u.q}</span>
                </div>
                <div class="faq-a-text">${u.a}</div>
              </div>
            `).join("")}
          </div>
        </div>
      </section>
      `:""}

      <!-- ========================================================================= -->
      <!-- 11. ROYAL DRESS CODE & WISHING WELL / SHAGUN -->
      <!-- ========================================================================= -->
      <section style="padding: 2rem 1.5rem 5rem; position: relative; z-index: 5;">
        <div class="container" style="display: grid; grid-template-columns: repeat(auto-fit, minmax(340px, 1fr)); gap: 2.5rem;">
          
          <!-- Dress Code Moodboard -->
          <div class="glass-panel" style="padding: 3rem 2rem; text-align: center; border-radius: var(--radius-xl); border: 1px solid rgba(212,175,55,0.35);">
            <div style="font-size: 2.5rem; margin-bottom: 0.75rem;" class="animate-float-card">👔 👗</div>
            <h3 class="font-serif" style="font-size: 1.65rem; margin-bottom: 0.5rem;">Royal Dress Code</h3>
            <p style="color: var(--gold-light); font-weight: 600; font-size: 1.05rem; margin-bottom: 0.5rem;">${Te}</p>
            <p class="text-muted" style="font-size: 0.9rem; line-height: 1.6;">${Ce}</p>
            
            <!-- Palette Swatches -->
            <div class="dress-code-swatch-box">
              <div class="color-swatch-pill" title="Blood Red Velvet">
                <div class="swatch-dot" style="background: #8B152B;"></div>
                <span>Crimson Red</span>
              </div>
              <div class="color-swatch-pill" title="Midnight Sapphire">
                <div class="swatch-dot" style="background: #0B1B3D;"></div>
                <span>Sapphire Blue</span>
              </div>
              <div class="color-swatch-pill" title="Diamond White Silk">
                <div class="swatch-dot" style="background: #FFFFFF;"></div>
                <span>Diamond White</span>
              </div>
              <div class="color-swatch-pill" title="Obsidian Noir">
                <div class="swatch-dot" style="background: #040207;"></div>
                <span>Obsidian Black</span>
              </div>
              <div class="color-swatch-pill" title="Imperial Gold Foil">
                <div class="swatch-dot" style="background: #D4AF37;"></div>
                <span>Imperial Gold</span>
              </div>
            </div>
          </div>

          <!-- Wishing Well / Digital Shagun -->
          <div class="glass-panel" style="padding: 3rem 2rem; text-align: center; border-radius: var(--radius-xl); border: 1px solid rgba(212,175,55,0.35);">
            <div style="font-size: 2.5rem; margin-bottom: 0.75rem;" class="animate-float-card">🎁 💌</div>
            <h3 class="font-serif" style="font-size: 1.65rem; margin-bottom: 0.5rem;">${Fe}</h3>
            <p class="text-muted" style="font-size: 0.9rem; line-height: 1.6; margin-bottom: 1.25rem;">${$e}</p>
            
            <div style="background: rgba(0,0,0,0.35); border: 1px solid var(--gold-border); padding: 1rem 1.25rem; border-radius: var(--radius-lg); display: flex; align-items: center; justify-content: space-between; box-shadow: 0 8px 20px rgba(0,0,0,0.4);">
              <span style="font-family: var(--font-mono); font-size: 0.95rem; color: var(--gold-light); font-weight: 600;">${Z}</span>
              <button id="copy-bank-btn" class="btn btn-sm btn-gold-outline" style="cursor: pointer;">Copy UPI</button>
            </div>
            
            <div style="font-size: 0.8rem; color: var(--gold-hover); margin-top: 1rem;">
              ✨ Instant one-touch UPI / QR payment support ✨
            </div>
          </div>

        </div>
      </section>

      <!-- ========================================================================= -->
      <!-- 12. RSVP SECTION ANCHOR -->
      <!-- ========================================================================= -->
      <section id="rsvp-section-anchor" style="padding: 4rem 1.5rem 7rem; position: relative; z-index: 5;">
        <div id="rsvp-mount-point"></div>
      </section>

    </div>
  `,rt("rsvp-mount-point",e),lt(!0);const te=document.getElementById("open-royal-curtains-btn"),A=document.getElementById("royal-curtain-gateway"),z=document.getElementById("curtain-center-card"),V=document.getElementById("rising-bismillah-slot"),ae=document.getElementById("bride-puller"),ie=document.getElementById("groom-puller");te&&A&&te.addEventListener("click",()=>{N({particleCount:200,colors:["#D4AF37","#8B152B","#0B1B3D","#FFFFFF","#F5D38B"]}),L.startTrack(r||"romanticPiano"),j(!0),ae&&ae.classList.add("animate-tug-left"),ie&&ie.classList.add("animate-tug-right"),z&&(z.style.opacity="0",z.style.transform="scale(0.8) translateY(-25px)",z.style.pointerEvents="none"),A.classList.add("entering"),setTimeout(()=>{A.classList.add("stage-2-active")},1900),V&&(V.classList.remove("hidden"),setTimeout(()=>{V.classList.add("rising")},3200)),setTimeout(()=>{A.classList.add("faded-out"),setTimeout(()=>{A.remove();const u=document.getElementById("invitation-hero");u&&u.scrollIntoView({behavior:"smooth"})},1500)},5800)});const ne=document.getElementById("floating-music-btn");let H=!l;function j(u){const U=document.getElementById("music-text-state"),x=document.getElementById("music-vinyl-disc"),k=document.getElementById("music-sound-bars");U&&(U.textContent=u?"Pause Music":"Play Music"),x&&(u?x.classList.add("playing"):x.classList.remove("playing")),k&&(u?k.classList.add("playing"):k.classList.remove("playing"))}ne&&ne.addEventListener("click",()=>{H?(L.stopTrack(),H=!1,j(!1)):(L.startTrack(r),H=!0,j(!0))});const se=document.getElementById("secret-scratch-box"),q=document.getElementById("secret-cover-layer");se&&q&&se.addEventListener("click",()=>{q.classList.contains("scratched")||(q.classList.add("scratched"),N({particleCount:140,colors:["#D4AF37","#FDA4AF","#FFFFFF","#0B1B3D"]}))});const oe=document.getElementById("copy-bank-btn");oe&&oe.addEventListener("click",()=>{F(Z,"Gift UPI account copied!")});function re(){const x=new Date("2026-10-24T17:00:00")-new Date;if(x>0){const k=Math.floor(x/864e5),Le=Math.floor(x/(1e3*60*60)%24),Me=Math.floor(x/1e3/60%60),Ne=Math.floor(x/1e3%60),le=document.getElementById("cd-days"),de=document.getElementById("cd-hours"),ce=document.getElementById("cd-minutes"),me=document.getElementById("cd-seconds");le&&(le.textContent=k),de&&(de.textContent=Le),ce&&(ce.textContent=Me),me&&(me.textContent=Ne)}}setInterval(re,1e3),re()}function lt(n=!1){const e=document.getElementById("starlight-canvas");if(!e||!e.getContext("2d"))return;let i=[];const a=45;function s(){e.width=window.innerWidth,e.height=window.innerHeight}window.addEventListener("resize",s),s();const r=n?["rgba(184, 134, 11, ","rgba(212, 175, 55, ","rgba(100, 116, 139, ","rgba(244, 114, 182, "]:["rgba(212, 175, 55, ","rgba(255, 255, 255, ","rgba(253, 164, 175, ","rgba(147, 197, 253, "];for(let l=0;l<a;l++)i.push({x:Math.random()*e.width,y:Math.random()*e.height,radius:Math.random()*2+.75,color:r[Math.floor(Math.random()*r.length)],alpha:Math.random()*.7+.2,speedY:Math.random()*.4+.15,speedX:(Math.random()-.5)*.25,pulseSpeed:Math.random()*.02+.01,pulseFactor:Math.random()*Math.PI})}function dt(n,e=null){const t=document.getElementById(n);if(!t)return;const i=I[0];let a={themeId:(e==null?void 0:e.themeId)||i.themeId,fontPairingId:(e==null?void 0:e.fontPairingId)||i.fontPairingId,sealId:(e==null?void 0:e.sealId)||i.sealId,sealColor:(e==null?void 0:e.sealColor)||i.sealColor,ambientTrackId:(e==null?void 0:e.ambientTrackId)||i.ambientTrackId,previewMode:"card",activeTab:"details",data:{...i.defaults,...(e==null?void 0:e.defaults)||e||{}}};function s(){t.innerHTML=`
      <div class="studio-container">
        
        <!-- SIDEBAR CONTROLS -->
        <aside class="studio-sidebar">
          
          <!-- Tab Navigation -->
          <div class="studio-tabs-nav">
            <button class="studio-tab-btn ${a.activeTab==="details"?"active":""}" data-tab="details">💍 Couple & Text</button>
            <button class="studio-tab-btn ${a.activeTab==="ceremony"?"active":""}" data-tab="ceremony">📅 Date & Venue</button>
            <button class="studio-tab-btn ${a.activeTab==="design"?"active":""}" data-tab="design">🎨 Themes & Audio</button>
            <button class="studio-tab-btn ${a.activeTab==="story"?"active":""}" data-tab="story">📖 Story & Gifts</button>
          </div>

          <!-- Tab Content Form -->
          <div class="studio-tab-content">
            ${r(a)}
          </div>

          <!-- Footer Actions -->
          <div class="studio-footer-actions">
            <button id="studio-save-btn" class="btn btn-primary-gold btn-block">
              <span>Save & Publish Invitation</span>
              <span>💾</span>
            </button>
          </div>
        </aside>

        <!-- LIVE PREVIEW PANE -->
        <main class="studio-preview-pane">
          
          <!-- Mode Selector Switcher -->
          <div class="preview-mode-bar">
            <button class="preview-mode-btn ${a.previewMode==="card"?"active":""}" data-mode="card">Luxury Card</button>
            <button class="preview-mode-btn ${a.previewMode==="envelope"?"active":""}" data-mode="envelope">3D Envelope</button>
            <button class="preview-mode-btn ${a.previewMode==="webpage"?"active":""}" data-mode="webpage">Full Webpage</button>
          </div>

          <!-- Live Canvas -->
          <div id="studio-preview-canvas" class="preview-canvas-wrapper ${a.previewMode==="webpage"?"preview-full-webpage":""}">
            <!-- Rendered dynamically -->
          </div>
        </main>

      </div>
    `,c(),l()}function r(o){if(o.activeTab==="details")return`
        <div class="form-group">
          <label class="form-label">Featured Couple / Host Names *</label>
          <input type="text" id="input-primaryNames" class="form-input" value="${o.data.primaryNames||""}" />
        </div>
        <div class="form-group">
          <label class="form-label">Groom's Parents *</label>
          <input type="text" id="input-groomParents" class="form-input" value="${o.data.groomParents||""}" placeholder="Mr. & Mrs. Mohammed Salam" />
        </div>
        <div class="form-group">
          <label class="form-label">Bride's Parents *</label>
          <input type="text" id="input-brideParents" class="form-input" value="${o.data.brideParents||""}" placeholder="Mr. & Mrs. Tariq Shaikh" />
        </div>
        <div class="form-group">
          <label class="form-label">Family Blessing Invitation Line</label>
          <input type="text" id="input-familyBlessingText" class="form-input" value="${o.data.familyBlessingText||""}" />
        </div>
        <div class="form-group">
          <label class="form-label">Header Tagline</label>
          <input type="text" id="input-tag" class="form-input" value="${o.data.tag||""}" />
        </div>
        <div class="form-group">
          <label class="form-label">Ceremony Title</label>
          <input type="text" id="input-title" class="form-input" value="${o.data.title||""}" />
        </div>
        <div class="form-group">
          <label class="form-label">Sacred Arabic Calligraphy (Bismillah)</label>
          <input type="text" id="input-bismillah" class="form-input" value="${o.data.bismillah||""}" />
        </div>
        <div class="form-group">
          <label class="form-label">Quran Verse / Quote</label>
          <textarea id="input-quranVerse" class="form-textarea">${o.data.quranVerse||""}</textarea>
        </div>
      `;if(o.activeTab==="ceremony")return`
        <div class="form-group">
          <label class="form-label">Event Date Text *</label>
          <input type="text" id="input-dateText" class="form-input" value="${o.data.dateText||""}" />
        </div>
        <div class="form-group">
          <label class="form-label">Event Time Text *</label>
          <input type="text" id="input-timeText" class="form-input" value="${o.data.timeText||""}" />
        </div>
        <div class="form-group">
          <label class="form-label">Venue / Ballroom Name *</label>
          <input type="text" id="input-venueName" class="form-input" value="${o.data.venueName||""}" />
        </div>
        <div class="form-group">
          <label class="form-label">Venue Address / Directions</label>
          <input type="text" id="input-venueAddress" class="form-input" value="${o.data.venueAddress||""}" />
        </div>
        <div class="form-group">
          <label class="form-label">RSVP Deadline</label>
          <input type="text" id="input-rsvpDeadline" class="form-input" value="${o.data.rsvpDeadline||""}" />
        </div>
      `;if(o.activeTab==="design")return`
        <div class="form-group">
          <label class="form-label">Color Theme Palette</label>
          <div class="theme-picker-grid">
            ${Object.values(w).map(m=>`
              <div class="theme-card ${o.themeId===m.id?"active":""}" data-theme="${m.id}">
                <div class="theme-color-preview" style="background: ${m.cardBg}; border: 2px solid ${m.accent};"></div>
                <div class="theme-name">${m.name}</div>
              </div>
            `).join("")}
          </div>
        </div>

        <div class="form-group" style="margin-top: 1.5rem;">
          <label class="form-label">Typography Pairing</label>
          <select id="select-fontPairing" class="form-select">
            ${Object.values(B).map(m=>`
              <option value="${m.id}" ${o.fontPairingId===m.id?"selected":""}>${m.name} (${m.description})</option>
            `).join("")}
          </select>
        </div>

        <div class="form-group" style="margin-top: 1rem;">
          <label class="form-label">Ambient Celebration Music</label>
          <select id="select-ambientTrack" class="form-select">
            ${Ze.map(m=>`
              <option value="${m.id}" ${o.ambientTrackId===m.id?"selected":""}>${m.title}</option>
            `).join("")}
          </select>
        </div>
      `;if(o.activeTab==="story")return`
        <div class="form-group">
          <label class="form-label">Wishing Well / Digital Shagun Title</label>
          <input type="text" id="input-wishingWellTitle" class="form-input" value="${o.data.wishingWellTitle||""}" />
        </div>
        <div class="form-group">
          <label class="form-label">UPI / Bank Account Handle</label>
          <input type="text" id="input-wishingWellAccount" class="form-input" value="${o.data.wishingWellAccount||""}" />
        </div>
        <div class="form-group">
          <label class="form-label">Dress Code Specification</label>
          <input type="text" id="input-dressCode" class="form-input" value="${o.data.dressCode||""}" />
        </div>
      `}function l(){const o=document.getElementById("studio-preview-canvas");if(!o)return;const m=w[a.themeId]||w.royalRedNavyBlack,g=B[a.fontPairingId]||B.classicSerif;a.previewMode==="card"?o.innerHTML=`
        <div class="invitation-card ${m.isLight?"theme-light":""}" style="background-color: ${m.cardBg}; border-color: ${m.border};">
          <div class="invitation-arch-border"></div>
          ${a.data.bismillah?`<div class="invitation-bismillah">${a.data.bismillah}</div>`:""}
          <div class="invitation-tag">${a.data.tag}</div>
          <p style="font-size: 0.85rem; color: var(--text-muted);">${a.data.title}</p>
          ${M(a.data.primaryNames,{size:"normal",fontClass:g.heading||"font-cinzel"})}
          <div class="invitation-date">${a.data.dateText} • ${a.data.timeText}</div>
          <div class="invitation-venue">📍 ${a.data.venueName}</div>
        </div>
      `:a.previewMode==="envelope"?ot("studio-preview-canvas",{invitationData:a.data,themeId:a.themeId,sealId:a.sealId,sealColor:a.sealColor,ambientTrackId:a.ambientTrackId,onOpened:()=>{b("Envelope opened!","success")}}):a.previewMode==="webpage"&&Ie("studio-preview-canvas",a.data,{themeId:a.themeId,fontPairingId:a.fontPairingId,ambientTrackId:a.ambientTrackId})}function c(){t.querySelectorAll(".studio-tab-btn").forEach(d=>{d.addEventListener("click",()=>{a.activeTab=d.dataset.tab,s()})}),t.querySelectorAll(".preview-mode-btn").forEach(d=>{d.addEventListener("click",()=>{a.previewMode=d.dataset.mode,t.querySelectorAll(".preview-mode-btn").forEach(y=>y.classList.remove("active")),d.classList.add("active");const v=document.getElementById("studio-preview-canvas");a.previewMode==="webpage"?v.classList.add("preview-full-webpage"):v.classList.remove("preview-full-webpage"),l()})}),t.querySelectorAll(".form-input, .form-textarea").forEach(d=>{d.addEventListener("input",v=>{const y=v.target.id.replace("input-","");a.data[y]=v.target.value,l()})}),t.querySelectorAll(".theme-card").forEach(d=>{d.addEventListener("click",()=>{a.themeId=d.dataset.theme,s()})});const m=document.getElementById("select-fontPairing");m&&m.addEventListener("change",d=>{a.fontPairingId=d.target.value,l()});const g=document.getElementById("select-ambientTrack");g&&g.addEventListener("change",d=>{a.ambientTrackId=d.target.value});const p=document.getElementById("studio-save-btn");p&&p.addEventListener("click",async()=>{p.disabled=!0,p.innerHTML="<span>Saving to Firestore...</span>";try{const d=await Ue({...a.data,themeId:a.themeId,fontPairingId:a.fontPairingId,sealId:a.sealId,sealColor:a.sealColor,ambientTrackId:a.ambientTrackId});b("Invitation published successfully! 🎉","success"),p.disabled=!1,p.innerHTML="<span>Save & Publish Invitation</span><span>💾</span>"}catch{b("Failed to save invitation","error"),p.disabled=!1,p.innerHTML="<span>Save & Publish Invitation</span><span>💾</span>"}})}s()}function ct(n,e={}){const t=document.getElementById(n);if(!t)return;const{onEditInvitation:i=()=>{},onOpenStudio:a=()=>{}}=e;async function s(){t.innerHTML=`
      <div class="dashboard-wrapper container">
        <div class="text-center" style="padding: 4rem 0;">
          <div class="stat-icon" style="margin: 0 auto 1rem;">⏳</div>
          <p class="text-gold">Loading Your Luxury Dashboard...</p>
        </div>
      </div>
    `;const r=await xe(),l=await we(),c=l.length,o=l.filter(p=>p.status==="attending").reduce((p,d)=>p+(d.guestCount||1),0);t.innerHTML=`
      <div class="dashboard-wrapper container">
        
        <!-- Header -->
        <div class="flex justify-between items-center" style="margin-bottom: 2.5rem; flex-wrap: wrap; gap: 1rem;">
          <div>
            <span class="badge badge-gold" style="margin-bottom: 0.5rem;">Host Portal</span>
            <h1 class="font-serif" style="font-size: 2.25rem; color: #FFF;">My Invitation Dashboard</h1>
            <p class="text-muted" style="font-size: 0.9rem;">Manage your wedding invitations, track RSVPs, and share links.</p>
          </div>
          <button id="dash-new-inv-btn" class="btn btn-primary-gold">
            <span>+ Create New Invitation</span>
          </button>
        </div>

        <!-- Metrics Cards -->
        <div class="stats-grid">
          <div class="stat-card">
            <div class="stat-icon">💌</div>
            <div>
              <div class="stat-val">${r.length}</div>
              <div class="stat-title">Active Invitations</div>
            </div>
          </div>
          <div class="stat-card">
            <div class="stat-icon">👥</div>
            <div>
              <div class="stat-val">${o}</div>
              <div class="stat-title">Attending Guests</div>
            </div>
          </div>
          <div class="stat-card">
            <div class="stat-icon">📨</div>
            <div>
              <div class="stat-val">${c}</div>
              <div class="stat-title">RSVP Responses</div>
            </div>
          </div>
          <div class="stat-card">
            <div class="stat-icon">💎</div>
            <div>
              <div class="stat-val">₹1001</div>
              <div class="stat-title">Plan Status: Active</div>
            </div>
          </div>
        </div>

        <!-- Invitations Table -->
        <div class="table-container" style="margin-bottom: 3rem;">
          <div class="table-toolbar">
            <h3 class="font-serif" style="font-size: 1.25rem; color: #FFF;">Your Created Invitations</h3>
          </div>

          ${r.length===0?`
            <div class="text-center" style="padding: 3rem 1.5rem;">
              <p class="text-muted" style="margin-bottom: 1rem;">You have not created any invitations yet.</p>
              <button id="empty-create-btn" class="btn btn-primary-gold">Create Your First Invitation ✨</button>
            </div>
          `:`
            <table class="data-table">
              <thead>
                <tr>
                  <th>Couple / Title</th>
                  <th>Date & Venue</th>
                  <th>Theme</th>
                  <th>Share Link</th>
                  <th>Actions</th>
                </tr>
              </thead>
              <tbody>
                ${r.map(p=>`
                  <tr>
                    <td>
                      <div style="font-weight: 600; color: #FFF;">${p.primaryNames||"Celebration"}</div>
                      <div class="text-muted" style="font-size: 0.75rem;">${p.id}</div>
                    </td>
                    <td>
                      <div>${p.dateText||"TBD"}</div>
                      <div class="text-muted" style="font-size: 0.75rem;">${p.venueName||""}</div>
                    </td>
                    <td>
                      <span class="badge badge-gold">${p.themeId||"royalRed"}</span>
                    </td>
                    <td>
                      <button class="btn btn-sm btn-gold-outline copy-inv-link-btn" data-slug="${p.slug||p.id}">
                        <span>Copy Link</span>
                        <span>📋</span>
                      </button>
                    </td>
                    <td>
                      <div class="flex gap-2">
                        <button class="btn btn-sm btn-secondary edit-inv-btn" data-id="${p.id}">Edit</button>
                        <a href="invite.html?id=${p.id}" target="_blank" class="btn btn-sm btn-primary-gold">View Page ↗</a>
                      </div>
                    </td>
                  </tr>
                `).join("")}
              </tbody>
            </table>
          `}
        </div>

      </div>
    `;const m=document.getElementById("dash-new-inv-btn");m&&m.addEventListener("click",a);const g=document.getElementById("empty-create-btn");g&&g.addEventListener("click",a),t.querySelectorAll(".copy-inv-link-btn").forEach(p=>{p.addEventListener("click",()=>{const d=p.dataset.slug,v=`${window.location.origin}/invite.html?id=${d}`;F(v,"Guest invitation link copied!")})}),t.querySelectorAll(".edit-inv-btn").forEach(p=>{p.addEventListener("click",()=>{const d=r.find(v=>v.id===p.dataset.id);d&&i(d)})})}s()}function mt(n){const e=document.getElementById(n);if(!e)return;async function t(){e.innerHTML=`
      <div class="dashboard-wrapper container">
        <div class="text-center" style="padding: 4rem 0;">
          <div class="stat-icon" style="margin: 0 auto 1rem;">⚡</div>
          <p class="text-gold">Loading Admin Console & Live Firestore Data...</p>
        </div>
      </div>
    `;const i=await xe(),a=await we(),r=(await Ke()).length*1001;e.innerHTML=`
      <div class="dashboard-wrapper container">
        
        <!-- Header -->
        <div class="flex justify-between items-center" style="margin-bottom: 2.5rem; flex-wrap: wrap; gap: 1rem;">
          <div>
            <div class="flex items-center gap-2" style="margin-bottom: 0.5rem;">
              <span class="badge badge-emerald">Master Admin Console</span>
              <span class="badge badge-gold">Firestore Live</span>
            </div>
            <h1 class="font-serif" style="font-size: 2.25rem; color: #FFF;">System Overview & Controls</h1>
            <p class="text-muted" style="font-size: 0.9rem;">Namespace: <code>/nyota/*</code> • Firebase Project: <code>nyotapages</code></p>
          </div>
          <button id="admin-refresh-btn" class="btn btn-secondary">
            <span>Refresh Telemetry</span>
            <span>🔄</span>
          </button>
        </div>

        <!-- Metrics -->
        <div class="stats-grid">
          <div class="stat-card">
            <div class="stat-icon">📜</div>
            <div>
              <div class="stat-val">${i.length}</div>
              <div class="stat-title">Total Invitations</div>
            </div>
          </div>
          <div class="stat-card">
            <div class="stat-icon">📨</div>
            <div>
              <div class="stat-val">${a.length}</div>
              <div class="stat-title">Total RSVPs</div>
            </div>
          </div>
          <div class="stat-card">
            <div class="stat-icon">💰</div>
            <div>
              <div class="stat-val">₹${r.toLocaleString()}</div>
              <div class="stat-title">Gross Revenue</div>
            </div>
          </div>
          <div class="stat-card">
            <div class="stat-icon">🛡️</div>
            <div>
              <div class="stat-val">Online</div>
              <div class="stat-title">Firebase Status</div>
            </div>
          </div>
        </div>

        <!-- RSVPs Table -->
        <div class="table-container" style="margin-bottom: 3rem;">
          <div class="table-toolbar">
            <h3 class="font-serif" style="font-size: 1.25rem; color: #FFF;">Live RSVP Registry</h3>
          </div>

          ${a.length===0?`
            <div class="text-center" style="padding: 2.5rem;">
              <p class="text-muted">No RSVPs recorded yet.</p>
            </div>
          `:`
            <table class="data-table">
              <thead>
                <tr>
                  <th>Guest Name</th>
                  <th>Status</th>
                  <th>Count</th>
                  <th>Dietary</th>
                  <th>Message / Blessing</th>
                  <th>Time</th>
                </tr>
              </thead>
              <tbody>
                ${a.map(c=>`
                  <tr>
                    <td>
                      <div style="font-weight: 600; color: #FFF;">${c.guestName}</div>
                      <div class="text-muted" style="font-size: 0.75rem;">${c.guestEmail||""} ${c.guestPhone?"• "+c.guestPhone:""}</div>
                    </td>
                    <td>
                      <span class="badge ${c.status==="attending"?"badge-emerald":"badge-rose"}">
                        ${c.status}
                      </span>
                    </td>
                    <td>${c.guestCount||0}</td>
                    <td>${c.dietary||"Standard"}</td>
                    <td style="max-width: 250px; overflow: hidden; text-overflow: ellipsis; white-space: nowrap;">
                      ${c.message||"—"}
                    </td>
                    <td class="text-muted" style="font-size: 0.75rem;">
                      ${c.createdAt?new Date(c.createdAt).toLocaleDateString():"Recent"}
                    </td>
                  </tr>
                `).join("")}
              </tbody>
            </table>
          `}
        </div>

      </div>
    `;const l=document.getElementById("admin-refresh-btn");l&&l.addEventListener("click",()=>{b("Refreshing data...","default"),t()})}t()}function pt(n){const e=document.getElementById(n);if(!e)return;let t="signin";function i(){var a,s,r,l;e.innerHTML=`
      <div id="auth-modal" class="modal-overlay">
        <div class="modal-content" style="max-width: 440px;">
          
          <div class="modal-header">
            <div>
              <span class="badge badge-gold" style="margin-bottom: 0.25rem;">Nyota Access</span>
              <h3 class="font-serif" style="font-size: 1.35rem; color: #FFF;">
                ${t==="signin"?"Sign In to Nyota":"Create Member Account"}
              </h3>
            </div>
            <button class="modal-close-btn" data-close="auth-modal">&times;</button>
          </div>

          <div class="modal-body">
            <!-- Google One-Click Button -->
            <button id="google-auth-btn" class="btn btn-secondary btn-block" style="padding: 0.75rem; margin-bottom: 1.25rem;">
              <span style="font-size: 1.1rem;">🌐</span>
              <span>Continue with Google</span>
            </button>

            <div class="flex items-center gap-4" style="margin-bottom: 1.25rem;">
              <div style="flex: 1; height: 1px; background: rgba(255,255,255,0.1);"></div>
              <span class="text-muted" style="font-size: 0.75rem; text-transform: uppercase;">Or Email</span>
              <div style="flex: 1; height: 1px; background: rgba(255,255,255,0.1);"></div>
            </div>

            <form id="auth-email-form">
              <div class="form-group">
                <label class="form-label">Email Address</label>
                <input type="email" id="auth-email-input" class="form-input" placeholder="you@example.com" required />
              </div>

              <div class="form-group">
                <label class="form-label">Password</label>
                <input type="password" id="auth-password-input" class="form-input" placeholder="••••••••" required />
              </div>

              <button type="submit" id="auth-submit-btn" class="btn btn-primary-gold btn-block btn-lg" style="margin-top: 1rem;">
                <span>${t==="signin"?"Sign In":"Create Account"}</span>
              </button>
            </form>

            <div class="text-center" style="margin-top: 1.25rem;">
              <button id="toggle-auth-mode-btn" style="background: none; border: none; color: var(--gold-light); font-size: 0.8rem; cursor: pointer; text-decoration: underline;">
                ${t==="signin"?"Don't have an account? Sign Up":"Already have an account? Sign In"}
              </button>
            </div>
          </div>

        </div>
      </div>
    `,(a=e.querySelector('[data-close="auth-modal"]'))==null||a.addEventListener("click",()=>{C("auth-modal")}),(s=document.getElementById("toggle-auth-mode-btn"))==null||s.addEventListener("click",()=>{t=t==="signin"?"signup":"signin",i(),document.getElementById("auth-modal").classList.add("active")}),(r=document.getElementById("google-auth-btn"))==null||r.addEventListener("click",async()=>{try{await Ve(),b("Signed in successfully with Google! ✨","success"),C("auth-modal")}catch(c){b("Google Sign In failed: "+c.message,"error")}}),(l=document.getElementById("auth-email-form"))==null||l.addEventListener("submit",async c=>{c.preventDefault();const o=document.getElementById("auth-email-input").value.trim(),m=document.getElementById("auth-password-input").value.trim(),g=document.getElementById("auth-submit-btn");g.disabled=!0;try{t==="signin"?(await He(o,m),b("Welcome back! ✨","success")):(await je(o,m),b("Account created successfully! ✨","success")),C("auth-modal")}catch(p){b(p.message,"error"),g.disabled=!1}})}i()}function gt(n){var i,a,s;const e=document.getElementById(n);if(!e)return;const t=et[0];e.innerHTML=`
    <div id="checkout-modal" class="modal-overlay">
      <div class="modal-content" style="max-width: 540px;">
        
        <div class="modal-header">
          <div>
            <span class="badge badge-gold" style="margin-bottom: 0.25rem;">${t.shagunBadge}</span>
            <h3 class="font-serif" style="font-size: 1.4rem; color: #FFF;">${t.name}</h3>
          </div>
          <button class="modal-close-btn" data-close="checkout-modal">&times;</button>
        </div>

        <div class="modal-body">
          <div class="flex items-baseline gap-2" style="margin-bottom: 1rem;">
            <span style="font-family: var(--font-cinzel); font-size: 2.25rem; font-weight: 700; color: var(--gold-light);">
              ${t.currencySymbol}${t.price}
            </span>
            <span class="text-muted" style="text-decoration: line-through; font-size: 1rem;">
              ${t.currencySymbol}${t.originalPrice}
            </span>
            <span class="badge badge-emerald">60% Off Shagun Price</span>
          </div>

          <p class="text-secondary" style="font-size: 0.875rem; margin-bottom: 1.5rem;">
            ${t.description}
          </p>

          <!-- QR Code payment preview -->
          <div style="background: rgba(0,0,0,0.4); border: 1px solid var(--gold-border); border-radius: var(--radius-md); padding: 1.25rem; text-align: center; margin-bottom: 1.5rem;">
            <img src="/payment-qr.jpg" alt="UPI QR Payment" style="max-width: 180px; border-radius: var(--radius-sm); margin: 0 auto 0.75rem; display: block;" />
            <div style="font-family: var(--font-mono); font-size: 0.85rem; color: var(--gold-light);">
              UPI: <code>faizansalam@upi</code>
            </div>
            <button id="checkout-copy-upi" class="btn btn-sm btn-gold-outline" style="margin-top: 0.5rem;">Copy UPI ID</button>
          </div>

          <form id="checkout-order-form">
            <div class="form-group">
              <label class="form-label">Host Name</label>
              <input type="text" id="order-host-name" class="form-input" placeholder="e.g. Faizan Salam" required />
            </div>

            <div class="form-group">
              <label class="form-label">Host Email / WhatsApp</label>
              <input type="text" id="order-host-contact" class="form-input" placeholder="faizan@example.com or +91 8302929248" required />
            </div>

            <div class="form-group">
              <label class="form-label">UPI Transaction Reference / UTR Number</label>
              <input type="text" id="order-utr" class="form-input" placeholder="e.g. 429182910291" required />
            </div>

            <button type="submit" id="checkout-submit-btn" class="btn btn-primary-gold btn-block btn-lg" style="margin-top: 1rem;">
              <span>Submit Payment for Instant Verification</span>
              <span>✨</span>
            </button>
          </form>
        </div>

      </div>
    </div>
  `,(i=e.querySelector('[data-close="checkout-modal"]'))==null||i.addEventListener("click",()=>{C("checkout-modal")}),(a=document.getElementById("checkout-copy-upi"))==null||a.addEventListener("click",()=>{F("faizansalam@upi","UPI ID copied to clipboard!")}),(s=document.getElementById("checkout-order-form"))==null||s.addEventListener("submit",async r=>{r.preventDefault();const l=document.getElementById("checkout-submit-btn");l.disabled=!0,l.innerHTML="<span>Verifying & Recording Order...</span>";const c=document.getElementById("order-host-name").value.trim(),o=document.getElementById("order-host-contact").value.trim(),m=document.getElementById("order-utr").value.trim();try{await Je({hostName:c,hostContact:o,utr:m,amount:1001,packageId:"all-in-one-shagun"}),b("Order submitted! Your invitation package is unlocked ✨","success"),C("checkout-modal")}catch{b("Failed to record order","error"),l.disabled=!1,l.innerHTML="<span>Submit Payment for Instant Verification</span><span>✨</span>"}})}function ut(n){const e=document.getElementById(n);if(!e)return;let t=window.location.origin+"/invite.html";function i(){var a,s,r,l;e.innerHTML=`
      <div id="export-modal" class="modal-overlay">
        <div class="modal-content" style="max-width: 480px;">
          
          <div class="modal-header">
            <div>
              <span class="badge badge-gold" style="margin-bottom: 0.25rem;">Share & Send</span>
              <h3 class="font-serif" style="font-size: 1.35rem; color: #FFF;">Share Your Invitation</h3>
            </div>
            <button class="modal-close-btn" data-close="export-modal">&times;</button>
          </div>

          <div class="modal-body">
            <p class="text-secondary" style="font-size: 0.875rem; margin-bottom: 1.25rem;">
              Send this link to family and friends via WhatsApp, SMS, or Instagram for instant 3D unboxing and RSVP collection:
            </p>

            <div style="background: rgba(0,0,0,0.4); border: 1px solid var(--gold-border); padding: 0.75rem 1rem; border-radius: var(--radius-md); display: flex; align-items: center; justify-content: space-between; gap: 0.5rem; margin-bottom: 1.5rem;">
              <span id="export-link-text" style="font-family: var(--font-mono); font-size: 0.8rem; color: var(--gold-light); overflow: hidden; text-overflow: ellipsis; white-space: nowrap;">
                ${t}
              </span>
              <button id="export-copy-btn" class="btn btn-sm btn-primary-gold">Copy</button>
            </div>

            <div class="flex flex-col gap-2">
              <button id="export-whatsapp-btn" class="btn btn-block" style="background: #25D366; color: #000; font-weight: 700;">
                <span>Share Directly on WhatsApp</span>
                <span>💬</span>
              </button>

              <button id="export-email-btn" class="btn btn-secondary btn-block">
                <span>Share via Email</span>
                <span>✉️</span>
              </button>
            </div>
          </div>

        </div>
      </div>
    `,(a=e.querySelector('[data-close="export-modal"]'))==null||a.addEventListener("click",()=>{C("export-modal")}),(s=document.getElementById("export-copy-btn"))==null||s.addEventListener("click",()=>{F(t,"Invitation link copied!")}),(r=document.getElementById("export-whatsapp-btn"))==null||r.addEventListener("click",()=>{const c=encodeURIComponent(`You are cordially invited to celebrate with us! ✨ Please open our digital invitation here: ${t}`);window.open(`https://api.whatsapp.com/send?text=${c}`,"_blank")}),(l=document.getElementById("export-email-btn"))==null||l.addEventListener("click",()=>{const c=encodeURIComponent("Special Wedding & Celebration Invitation"),o=encodeURIComponent(`Dear Honored Guest,

You are cordially invited to celebrate our special day with us!
Please view our interactive digital invitation here:
${t}

With warm wishes & prayers.`);window.open(`mailto:?subject=${c}&body=${o}`,"_blank")})}window.setExportModalLink=a=>{t=a,i()},i()}class vt{constructor(){this.currentView="landing",this.selectedTemplate=I[0]}init(){this.initModals(),this.handleUrlRouting(),this.renderCurrentView(),window.addEventListener("popstate",()=>{this.handleUrlRouting(),this.renderCurrentView()})}initModals(){pt("modal-auth-slot"),gt("modal-checkout-slot"),ut("modal-export-slot")}handleUrlRouting(){const e=new URLSearchParams(window.location.search),t=e.get("view"),i=e.get("admin"),a=e.get("invite")||e.get("id")||e.get("slug");if(i==="true"){this.currentView="admin";return}if(t==="studio"){this.currentView="studio";return}if(t==="dashboard"){this.currentView="dashboard";return}if(a){_e(a).then(s=>{s&&(this.selectedTemplate={...I[0],defaults:s,...s},this.currentView="envelope_demo",this.renderCurrentView())});return}this.currentView="landing"}navigate(e,t=null){this.currentView=e,t&&(this.selectedTemplate=t);const i=new URL(window.location.href);e==="landing"?(i.searchParams.delete("view"),i.searchParams.delete("admin")):e==="admin"?i.searchParams.set("admin","true"):(i.searchParams.set("view",e),i.searchParams.delete("admin")),window.history.pushState({},"",i.toString()),this.renderCurrentView(),window.scrollTo({top:0,behavior:"smooth"})}renderCurrentView(){Xe("app-navbar-slot",{currentView:this.currentView,onNavigate:t=>this.navigate(t)});const e=document.getElementById("app-main-content");e&&(this.currentView==="landing"?(e.innerHTML=`
        <div id="landing-hero-slot"></div>
        <div id="landing-gallery-slot"></div>
        <div id="landing-contact-slot"></div>
        <div id="landing-faq-slot"></div>
        <div id="landing-footer-slot"></div>
      `,tt("landing-hero-slot",{onStartCustomizing:()=>this.navigate("studio",this.selectedTemplate),onOpenEnvelopeDemo:()=>this.navigate("envelope_demo")}),at("landing-gallery-slot",t=>{this.navigate("studio",t)}),nt("landing-contact-slot"),this.renderFAQAndFooter()):this.currentView==="studio"?(e.innerHTML='<div id="studio-mount-point"></div>',dt("studio-mount-point",this.selectedTemplate)):this.currentView==="dashboard"?(e.innerHTML='<div id="dashboard-mount-point"></div>',ct("dashboard-mount-point",{onOpenStudio:()=>this.navigate("studio"),onEditInvitation:t=>this.navigate("studio",t)})):this.currentView==="admin"?(e.innerHTML='<div id="admin-mount-point"></div>',mt("admin-mount-point")):this.currentView==="envelope_demo"&&(e.innerHTML='<div id="webpage-revealed-slot"></div>',Ie("webpage-revealed-slot",this.selectedTemplate.defaults||this.selectedTemplate,{themeId:this.selectedTemplate.themeId||"royalRedNavyBlack",fontPairingId:this.selectedTemplate.fontPairingId||"classicSerif",ambientTrackId:this.selectedTemplate.ambientTrackId||"romanticPiano",startWithCurtains:!0})))}renderFAQAndFooter(){const e=document.getElementById("landing-faq-slot");e&&(e.innerHTML=`
        <section style="padding: 5rem 0; background: rgba(0,0,0,0.3);">
          <div class="container-narrow text-center">
            <span class="badge badge-gold" style="margin-bottom: 0.75rem;">Frequently Asked Questions</span>
            <h2 class="font-serif" style="font-size: 2.25rem; color: #FFF; margin-bottom: 2rem;">Everything You Need To Know</h2>

            <div style="text-align: left; display: flex; flex-direction: column; gap: 1rem;">
              <div class="glass-panel" style="padding: 1.5rem;">
                <h4 style="color: var(--gold-light); font-size: 1.1rem; margin-bottom: 0.5rem;">How does the 3D unboxing experience work?</h4>
                <p class="text-muted" style="font-size: 0.875rem;">When your guests tap your custom WhatsApp or Instagram link, they are presented with a luxury 3D envelope and personalized wax seal. Tapping the seal plays ambient celebration music and reveals your full wedding webpage.</p>
              </div>
              <div class="glass-panel" style="padding: 1.5rem;">
                <h4 style="color: var(--gold-light); font-size: 1.1rem; margin-bottom: 0.5rem;">How are guest RSVPs managed?</h4>
                <p class="text-muted" style="font-size: 0.875rem;">All guest responses, party sizes, dietary requirements, and prayers are saved instantly to your secure Firestore database. You can track attendance live on your Host Dashboard.</p>
              </div>
              <div class="glass-panel" style="padding: 1.5rem;">
                <h4 style="color: var(--gold-light); font-size: 1.1rem; margin-bottom: 0.5rem;">Is the ₹1001 Shagun a one-time fee?</h4>
                <p class="text-muted" style="font-size: 0.875rem;">Yes, absolutely. No recurring subscriptions or hidden costs. One payment gives you unlimited live editing, permanent hosting, and instant support.</p>
              </div>
            </div>
          </div>
        </section>
      `);const t=document.getElementById("landing-footer-slot");t&&(t.innerHTML=`
        <footer style="padding: 4rem 0 2rem; border-top: 1px solid rgba(212,175,55,0.15); background: #07050E;">
          <div class="container text-center">
            <div class="gold-gradient-text font-cinzel" style="font-size: 1.5rem; font-weight: 700; margin-bottom: 0.5rem;">NYOTA LUXURY INVITATIONS</div>
            <p class="text-muted" style="font-size: 0.85rem; max-width: 480px; margin: 0 auto 2rem;">Crafting timeless memories with regal digital invitations, 3D unboxing, and real-time celebrations.</p>
            <div style="font-size: 0.75rem; color: rgba(255,255,255,0.4);">
              &copy; ${new Date().getFullYear()} Nyota Luxury Invitations. Built with Vanilla HTML5, CSS3 & JavaScript.
            </div>
          </div>
        </footer>
      `)}}function ye(){try{const n=new vt;n.init(),window.nyotaApp=n}catch(n){console.error("Error starting Nyota App:",n)}}document.readyState==="loading"?document.addEventListener("DOMContentLoaded",ye):ye();
