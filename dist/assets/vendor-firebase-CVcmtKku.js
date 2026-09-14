import{o as ip,R as aa}from"./vendor-libs-BDRZaZVY.js";const op=()=>{};var _u={};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ql=function(n){const e=[];let t=0;for(let r=0;r<n.length;r++){let s=n.charCodeAt(r);s<128?e[t++]=s:s<2048?(e[t++]=s>>6|192,e[t++]=s&63|128):(s&64512)===55296&&r+1<n.length&&(n.charCodeAt(r+1)&64512)===56320?(s=65536+((s&1023)<<10)+(n.charCodeAt(++r)&1023),e[t++]=s>>18|240,e[t++]=s>>12&63|128,e[t++]=s>>6&63|128,e[t++]=s&63|128):(e[t++]=s>>12|224,e[t++]=s>>6&63|128,e[t++]=s&63|128)}return e},ap=function(n){const e=[];let t=0,r=0;for(;t<n.length;){const s=n[t++];if(s<128)e[r++]=String.fromCharCode(s);else if(s>191&&s<224){const i=n[t++];e[r++]=String.fromCharCode((s&31)<<6|i&63)}else if(s>239&&s<365){const i=n[t++],a=n[t++],c=n[t++],l=((s&7)<<18|(i&63)<<12|(a&63)<<6|c&63)-65536;e[r++]=String.fromCharCode(55296+(l>>10)),e[r++]=String.fromCharCode(56320+(l&1023))}else{const i=n[t++],a=n[t++];e[r++]=String.fromCharCode((s&15)<<12|(i&63)<<6|a&63)}}return e.join("")},$l={byteToCharMap_:null,charToByteMap_:null,byteToCharMapWebSafe_:null,charToByteMapWebSafe_:null,ENCODED_VALS_BASE:"ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",get ENCODED_VALS(){return this.ENCODED_VALS_BASE+"+/="},get ENCODED_VALS_WEBSAFE(){return this.ENCODED_VALS_BASE+"-_."},HAS_NATIVE_SUPPORT:typeof atob=="function",encodeByteArray(n,e){if(!Array.isArray(n))throw Error("encodeByteArray takes an array as a parameter");this.init_();const t=e?this.byteToCharMapWebSafe_:this.byteToCharMap_,r=[];for(let s=0;s<n.length;s+=3){const i=n[s],a=s+1<n.length,c=a?n[s+1]:0,l=s+2<n.length,d=l?n[s+2]:0,p=i>>2,m=(i&3)<<4|c>>4;let w=(c&15)<<2|d>>6,V=d&63;l||(V=64,a||(w=64)),r.push(t[p],t[m],t[w],t[V])}return r.join("")},encodeString(n,e){return this.HAS_NATIVE_SUPPORT&&!e?btoa(n):this.encodeByteArray(ql(n),e)},decodeString(n,e){return this.HAS_NATIVE_SUPPORT&&!e?atob(n):ap(this.decodeStringToByteArray(n,e))},decodeStringToByteArray(n,e){this.init_();const t=e?this.charToByteMapWebSafe_:this.charToByteMap_,r=[];for(let s=0;s<n.length;){const i=t[n.charAt(s++)],c=s<n.length?t[n.charAt(s)]:0;++s;const d=s<n.length?t[n.charAt(s)]:64;++s;const m=s<n.length?t[n.charAt(s)]:64;if(++s,i==null||c==null||d==null||m==null)throw new cp;const w=i<<2|c>>4;if(r.push(w),d!==64){const V=c<<4&240|d>>2;if(r.push(V),m!==64){const N=d<<6&192|m;r.push(N)}}}return r},init_(){if(!this.byteToCharMap_){this.byteToCharMap_={},this.charToByteMap_={},this.byteToCharMapWebSafe_={},this.charToByteMapWebSafe_={};for(let n=0;n<this.ENCODED_VALS.length;n++)this.byteToCharMap_[n]=this.ENCODED_VALS.charAt(n),this.charToByteMap_[this.byteToCharMap_[n]]=n,this.byteToCharMapWebSafe_[n]=this.ENCODED_VALS_WEBSAFE.charAt(n),this.charToByteMapWebSafe_[this.byteToCharMapWebSafe_[n]]=n,n>=this.ENCODED_VALS_BASE.length&&(this.charToByteMap_[this.ENCODED_VALS_WEBSAFE.charAt(n)]=n,this.charToByteMapWebSafe_[this.ENCODED_VALS.charAt(n)]=n)}}};class cp extends Error{constructor(){super(...arguments),this.name="DecodeBase64StringError"}}const up=function(n){const e=ql(n);return $l.encodeByteArray(e,!0)},si=function(n){return up(n).replace(/\./g,"")},jl=function(n){try{return $l.decodeString(n,!0)}catch(e){console.error("base64Decode failed: ",e)}return null};/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function lp(){if(typeof self<"u")return self;if(typeof window<"u")return window;if(typeof global<"u")return global;throw new Error("Unable to locate global object.")}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const hp=()=>lp().__FIREBASE_DEFAULTS__,dp=()=>{if(typeof process>"u"||typeof _u>"u")return;const n=_u.__FIREBASE_DEFAULTS__;if(n)return JSON.parse(n)},fp=()=>{if(typeof document>"u")return;let n;try{n=document.cookie.match(/__FIREBASE_DEFAULTS__=([^;]+)/)}catch{return}const e=n&&jl(n[1]);return e&&JSON.parse(e)},Si=()=>{try{return op()||hp()||dp()||fp()}catch(n){console.info(`Unable to get __FIREBASE_DEFAULTS__ due to: ${n}`);return}},zl=n=>{var e,t;return(t=(e=Si())==null?void 0:e.emulatorHosts)==null?void 0:t[n]},pp=n=>{const e=zl(n);if(!e)return;const t=e.lastIndexOf(":");if(t<=0||t+1===e.length)throw new Error(`Invalid host ${e} with no separate hostname and port!`);const r=parseInt(e.substring(t+1),10);return e[0]==="["?[e.substring(1,t-1),r]:[e.substring(0,t),r]},Wl=()=>{var n;return(n=Si())==null?void 0:n.config},Hl=n=>{var e;return(e=Si())==null?void 0:e[`_${n}`]};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Gl{constructor(){this.reject=()=>{},this.resolve=()=>{},this.promise=new Promise((e,t)=>{this.resolve=e,this.reject=t})}wrapCallback(e){return(t,r)=>{t?this.reject(t):this.resolve(r),typeof e=="function"&&(this.promise.catch(()=>{}),e.length===1?e(t):e(t,r))}}}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function mp(n,e){if(n.uid)throw new Error('The "uid" field is no longer supported by mockUserToken. Please use "sub" instead for Firebase Auth User ID.');const t={alg:"none",type:"JWT"},r=e||"demo-project",s=n.iat||0,i=n.sub||n.user_id;if(!i)throw new Error("mockUserToken must contain 'sub' or 'user_id' field!");const a={iss:`https://securetoken.google.com/${r}`,aud:r,iat:s,exp:s+3600,auth_time:s,sub:i,user_id:i,firebase:{sign_in_provider:"custom",identities:{}},...n};return[si(JSON.stringify(t)),si(JSON.stringify(a)),""].join(".")}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Se(){return typeof navigator<"u"&&typeof navigator.userAgent=="string"?navigator.userAgent:""}function gp(){return typeof window<"u"&&!!(window.cordova||window.phonegap||window.PhoneGap)&&/ios|iphone|ipod|ipad|android|blackberry|iemobile/i.test(Se())}function _p(){var e;const n=(e=Si())==null?void 0:e.forceEnvironment;if(n==="node")return!0;if(n==="browser")return!1;try{return Object.prototype.toString.call(global.process)==="[object process]"}catch{return!1}}function yp(){return typeof navigator<"u"&&navigator.userAgent==="Cloudflare-Workers"}function Ep(){const n=typeof chrome=="object"?chrome.runtime:typeof browser=="object"?browser.runtime:void 0;return typeof n=="object"&&n.id!==void 0}function wp(){return typeof navigator=="object"&&navigator.product==="ReactNative"}function Tp(){const n=Se();return n.indexOf("MSIE ")>=0||n.indexOf("Trident/")>=0}function Ip(){return!_p()&&!!navigator.userAgent&&navigator.userAgent.includes("Safari")&&!navigator.userAgent.includes("Chrome")}function vp(){try{return typeof indexedDB=="object"}catch{return!1}}function Ap(){return new Promise((n,e)=>{try{let t=!0;const r="validate-browser-context-for-indexeddb-analytics-module",s=self.indexedDB.open(r);s.onsuccess=()=>{s.result.close(),t||self.indexedDB.deleteDatabase(r),n(!0)},s.onupgradeneeded=()=>{t=!1},s.onerror=()=>{var i;e(((i=s.error)==null?void 0:i.message)||"")}}catch(t){e(t)}})}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Rp="FirebaseError";class St extends Error{constructor(e,t,r){super(t),this.code=e,this.customData=r,this.name=Rp,Object.setPrototypeOf(this,St.prototype),Error.captureStackTrace&&Error.captureStackTrace(this,cs.prototype.create)}}class cs{constructor(e,t,r){this.service=e,this.serviceName=t,this.errors=r}create(e,...t){const r=t[0]||{},s=`${this.service}/${e}`,i=this.errors[e],a=i?Pp(i,r):"Error",c=`${this.serviceName}: ${a} (${s}).`;return new St(s,c,r)}}function Pp(n,e){try{let t=0,r="";for(;t<n.length;){const s=n.indexOf("{$",t);if(s===-1){r+=n.substring(t);break}const i=n.indexOf("}",s+2);if(i===-1){r+=n.substring(t);break}const a=n.substring(s+2,i),c=e[a];r+=n.substring(t,s)+(c!=null?String(c):`<${a}?>`),t=i+1}return r}catch{return n}}function Sp(n){for(const e in n)if(Object.prototype.hasOwnProperty.call(n,e))return!1;return!0}function Rn(n,e){if(n===e)return!0;const t=Object.keys(n),r=Object.keys(e);for(const s of t){if(!r.includes(s))return!1;const i=n[s],a=e[s];if(yu(i)&&yu(a)){if(!Rn(i,a))return!1}else if(i!==a)return!1}for(const s of r)if(!t.includes(s))return!1;return!0}function yu(n){return n!==null&&typeof n=="object"}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function us(n){const e=[];for(const[t,r]of Object.entries(n))Array.isArray(r)?r.forEach(s=>{e.push(encodeURIComponent(t)+"="+encodeURIComponent(s))}):e.push(encodeURIComponent(t)+"="+encodeURIComponent(r));return e.length?"&"+e.join("&"):""}function Vr(n){const e={};return n.replace(/^\?/,"").split("&").forEach(r=>{if(r){const[s,i]=r.split("=");e[decodeURIComponent(s)]=decodeURIComponent(i)}}),e}function Cr(n){const e=n.indexOf("?");if(!e)return"";const t=n.indexOf("#",e);return n.substring(e,t>0?t:void 0)}function Vp(n,e){const t=new Cp(n,e);return t.subscribe.bind(t)}class Cp{constructor(e,t){this.observers=[],this.unsubscribes=[],this.observerCount=0,this.task=Promise.resolve(),this.finalized=!1,this.onNoObservers=t,this.task.then(()=>{e(this)}).catch(r=>{this.error(r)})}next(e){this.forEachObserver(t=>{t.next(e)})}error(e){this.forEachObserver(t=>{t.error(e)}),this.close(e)}complete(){this.forEachObserver(e=>{e.complete()}),this.close()}subscribe(e,t,r){let s;if(e===void 0&&t===void 0&&r===void 0)throw new Error("Missing Observer.");bp(e,["next","error","complete"])?s=e:s={next:e,error:t,complete:r},s.next===void 0&&(s.next=Vo),s.error===void 0&&(s.error=Vo),s.complete===void 0&&(s.complete=Vo);const i=this.unsubscribeOne.bind(this,this.observers.length);return this.finalized&&this.task.then(()=>{try{this.finalError?s.error(this.finalError):s.complete()}catch{}}),this.observers.push(s),i}unsubscribeOne(e){this.observers===void 0||this.observers[e]===void 0||(delete this.observers[e],this.observerCount-=1,this.observerCount===0&&this.onNoObservers!==void 0&&this.onNoObservers(this))}forEachObserver(e){if(!this.finalized)for(let t=0;t<this.observers.length;t++)this.sendOne(t,e)}sendOne(e,t){this.task.then(()=>{if(this.observers!==void 0&&this.observers[e]!==void 0)try{t(this.observers[e])}catch(r){typeof console<"u"&&console.error&&console.error(r)}})}close(e){this.finalized||(this.finalized=!0,e!==void 0&&(this.finalError=e),this.task.then(()=>{this.observers=void 0,this.onNoObservers=void 0}))}}function bp(n,e){if(typeof n!="object"||n===null)return!1;for(const t of e)if(t in n&&typeof n[t]=="function")return!0;return!1}function Vo(){}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function he(n){return n&&n._delegate?n._delegate:n}/**
 * @license
 * Copyright 2025 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ls(n){try{return(n.startsWith("http://")||n.startsWith("https://")?new URL(n).hostname:n).endsWith(".cloudworkstations.dev")}catch{return!1}}async function Kl(n){return(await fetch(n,{credentials:"include"})).ok}class Pn{constructor(e,t,r){this.name=e,this.instanceFactory=t,this.type=r,this.multipleInstances=!1,this.serviceProps={},this.instantiationMode="LAZY",this.onInstanceCreated=null}setInstantiationMode(e){return this.instantiationMode=e,this}setMultipleInstances(e){return this.multipleInstances=e,this}setServiceProps(e){return this.serviceProps=e,this}setInstanceCreatedCallback(e){return this.onInstanceCreated=e,this}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const gn="[DEFAULT]";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Np{constructor(e,t){this.name=e,this.container=t,this.component=null,this.instances=new Map,this.instancesDeferred=new Map,this.instancesOptions=new Map,this.onInitCallbacks=new Map}get(e){const t=this.normalizeInstanceIdentifier(e);if(!this.instancesDeferred.has(t)){const r=new Gl;if(this.instancesDeferred.set(t,r),this.isInitialized(t)||this.shouldAutoInitialize())try{const s=this.getOrInitializeService({instanceIdentifier:t});s&&r.resolve(s)}catch{}}return this.instancesDeferred.get(t).promise}getImmediate(e){const t=this.normalizeInstanceIdentifier(e==null?void 0:e.identifier),r=(e==null?void 0:e.optional)??!1;if(this.isInitialized(t)||this.shouldAutoInitialize())try{return this.getOrInitializeService({instanceIdentifier:t})}catch(s){if(r)return null;throw s}else{if(r)return null;throw Error(`Service ${this.name} is not available`)}}getComponent(){return this.component}setComponent(e){if(e.name!==this.name)throw Error(`Mismatching Component ${e.name} for Provider ${this.name}.`);if(this.component)throw Error(`Component for ${this.name} has already been provided`);if(this.component=e,!!this.shouldAutoInitialize()){if(Dp(e))try{this.getOrInitializeService({instanceIdentifier:gn})}catch{}for(const[t,r]of this.instancesDeferred.entries()){const s=this.normalizeInstanceIdentifier(t);try{const i=this.getOrInitializeService({instanceIdentifier:s});r.resolve(i)}catch{}}}}clearInstance(e=gn){this.instancesDeferred.delete(e),this.instancesOptions.delete(e),this.instances.delete(e)}async delete(){const e=Array.from(this.instances.values());await Promise.all([...e.filter(t=>"INTERNAL"in t).map(t=>t.INTERNAL.delete()),...e.filter(t=>"_delete"in t).map(t=>t._delete())])}isComponentSet(){return this.component!=null}isInitialized(e=gn){return this.instances.has(e)}getOptions(e=gn){return this.instancesOptions.get(e)||{}}initialize(e={}){const{options:t={}}=e,r=this.normalizeInstanceIdentifier(e.instanceIdentifier);if(this.isInitialized(r))throw Error(`${this.name}(${r}) has already been initialized`);if(!this.isComponentSet())throw Error(`Component ${this.name} has not been registered yet`);const s=this.getOrInitializeService({instanceIdentifier:r,options:t});for(const[i,a]of this.instancesDeferred.entries()){const c=this.normalizeInstanceIdentifier(i);r===c&&a.resolve(s)}return s}onInit(e,t){const r=this.normalizeInstanceIdentifier(t),s=this.onInitCallbacks.get(r)??new Set;s.add(e),this.onInitCallbacks.set(r,s);const i=this.instances.get(r);return i&&e(i,r),()=>{s.delete(e)}}invokeOnInitCallbacks(e,t){const r=this.onInitCallbacks.get(t);if(r)for(const s of r)try{s(e,t)}catch{}}getOrInitializeService({instanceIdentifier:e,options:t={}}){let r=this.instances.get(e);if(!r&&this.component&&(r=this.component.instanceFactory(this.container,{instanceIdentifier:kp(e),options:t}),this.instances.set(e,r),this.instancesOptions.set(e,t),this.invokeOnInitCallbacks(r,e),this.component.onInstanceCreated))try{this.component.onInstanceCreated(this.container,e,r)}catch{}return r||null}normalizeInstanceIdentifier(e=gn){return this.component?this.component.multipleInstances?e:gn:e}shouldAutoInitialize(){return!!this.component&&this.component.instantiationMode!=="EXPLICIT"}}function kp(n){return n===gn?void 0:n}function Dp(n){return n.instantiationMode==="EAGER"}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class xp{constructor(e){this.name=e,this.providers=new Map}addComponent(e){const t=this.getProvider(e.name);if(t.isComponentSet())throw new Error(`Component ${e.name} has already been registered with ${this.name}`);t.setComponent(e)}addOrOverwriteComponent(e){this.getProvider(e.name).isComponentSet()&&this.providers.delete(e.name),this.addComponent(e)}getProvider(e){if(this.providers.has(e))return this.providers.get(e);const t=new Np(e,this);return this.providers.set(e,t),t}getProviders(){return Array.from(this.providers.values())}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var Q;(function(n){n[n.DEBUG=0]="DEBUG",n[n.VERBOSE=1]="VERBOSE",n[n.INFO=2]="INFO",n[n.WARN=3]="WARN",n[n.ERROR=4]="ERROR",n[n.SILENT=5]="SILENT"})(Q||(Q={}));const Op={debug:Q.DEBUG,verbose:Q.VERBOSE,info:Q.INFO,warn:Q.WARN,error:Q.ERROR,silent:Q.SILENT},Lp=Q.INFO,Mp={[Q.DEBUG]:"log",[Q.VERBOSE]:"log",[Q.INFO]:"info",[Q.WARN]:"warn",[Q.ERROR]:"error"},Up=(n,e,...t)=>{if(e<n.logLevel)return;const r=new Date().toISOString(),s=Mp[e];if(s)console[s](`[${r}]  ${n.name}:`,...t);else throw new Error(`Attempted to log a message with an invalid logType (value: ${e})`)};class ca{constructor(e){this.name=e,this._logLevel=Lp,this._logHandler=Up,this._userLogHandler=null}get logLevel(){return this._logLevel}set logLevel(e){if(!(e in Q))throw new TypeError(`Invalid value "${e}" assigned to \`logLevel\``);this._logLevel=e}setLogLevel(e){this._logLevel=typeof e=="string"?Op[e]:e}get logHandler(){return this._logHandler}set logHandler(e){if(typeof e!="function")throw new TypeError("Value assigned to `logHandler` must be a function");this._logHandler=e}get userLogHandler(){return this._userLogHandler}set userLogHandler(e){this._userLogHandler=e}debug(...e){this._userLogHandler&&this._userLogHandler(this,Q.DEBUG,...e),this._logHandler(this,Q.DEBUG,...e)}log(...e){this._userLogHandler&&this._userLogHandler(this,Q.VERBOSE,...e),this._logHandler(this,Q.VERBOSE,...e)}info(...e){this._userLogHandler&&this._userLogHandler(this,Q.INFO,...e),this._logHandler(this,Q.INFO,...e)}warn(...e){this._userLogHandler&&this._userLogHandler(this,Q.WARN,...e),this._logHandler(this,Q.WARN,...e)}error(...e){this._userLogHandler&&this._userLogHandler(this,Q.ERROR,...e),this._logHandler(this,Q.ERROR,...e)}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Fp{constructor(e){this.container=e}getPlatformInfoString(){return this.container.getProviders().map(t=>{if(Bp(t)){const r=t.getImmediate();return`${r.library}/${r.version}`}else return null}).filter(t=>t).join(" ")}}function Bp(n){const e=n.getComponent();return(e==null?void 0:e.type)==="VERSION"}const Fo="@firebase/app",Eu="0.16.2";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const vt=new ca("@firebase/app"),qp="@firebase/app-compat",$p="@firebase/analytics-compat",jp="@firebase/analytics",zp="@firebase/app-check-compat",Wp="@firebase/app-check",Hp="@firebase/auth",Gp="@firebase/auth-compat",Kp="@firebase/database",Qp="@firebase/data-connect",Yp="@firebase/database-compat",Jp="@firebase/functions",Xp="@firebase/functions-compat",Zp="@firebase/installations",em="@firebase/installations-compat",tm="@firebase/messaging",nm="@firebase/messaging-compat",rm="@firebase/performance",sm="@firebase/performance-compat",im="@firebase/remote-config",om="@firebase/remote-config-compat",am="@firebase/storage",cm="@firebase/storage-compat",um="@firebase/firestore",lm="@firebase/ai",hm="@firebase/firestore-compat",dm="firebase",fm="12.19.0";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Bo="[DEFAULT]",pm={[Fo]:"fire-core",[qp]:"fire-core-compat",[jp]:"fire-analytics",[$p]:"fire-analytics-compat",[Wp]:"fire-app-check",[zp]:"fire-app-check-compat",[Hp]:"fire-auth",[Gp]:"fire-auth-compat",[Kp]:"fire-rtdb",[Qp]:"fire-data-connect",[Yp]:"fire-rtdb-compat",[Jp]:"fire-fn",[Xp]:"fire-fn-compat",[Zp]:"fire-iid",[em]:"fire-iid-compat",[tm]:"fire-fcm",[nm]:"fire-fcm-compat",[rm]:"fire-perf",[sm]:"fire-perf-compat",[im]:"fire-rc",[om]:"fire-rc-compat",[am]:"fire-gcs",[cm]:"fire-gcs-compat",[um]:"fire-fst",[hm]:"fire-fst-compat",[lm]:"fire-vertex","fire-js":"fire-js",[dm]:"fire-js-all"};/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const jr=new Map,mm=new Map,qo=new Map;function wu(n,e){try{n.container.addComponent(e)}catch(t){vt.debug(`Component ${e.name} failed to register with FirebaseApp ${n.name}`,t)}}function Wn(n){const e=n.name;if(qo.has(e))return vt.debug(`There were multiple attempts to register component ${e}.`),!1;qo.set(e,n);for(const t of jr.values())wu(t,n);for(const t of mm.values())wu(t,n);return!0}function ua(n,e){const t=n.container.getProvider("heartbeat").getImmediate({optional:!0});return t&&t.triggerHeartbeat(),n.container.getProvider(e)}function $e(n){return n==null?!1:n.settings!==void 0}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const gm={"no-app":"No Firebase App '{$appName}' has been created - call initializeApp() first","bad-app-name":"Illegal App name: '{$appName}'","duplicate-app":"Firebase App named '{$appName}' already exists with different {$mismatchedParam}. Existing: '{$oldValue}'. New: '{$newValue}'.","app-deleted":"Firebase App named '{$appName}' already deleted","server-app-deleted":"Firebase Server App has been deleted","no-options":"Need to provide options, when not being deployed to hosting via source.","invalid-app-argument":"firebase.{$appName}() takes either no argument or a Firebase App instance.","invalid-log-argument":"First argument to `onLog` must be null or a function.","idb-open":"Error thrown when opening IndexedDB. Original error: {$originalErrorMessage}.","idb-get":"Error thrown when reading from IndexedDB. Original error: {$originalErrorMessage}.","idb-set":"Error thrown when writing to IndexedDB. Original error: {$originalErrorMessage}.","idb-delete":"Error thrown when deleting from IndexedDB. Original error: {$originalErrorMessage}.","finalization-registry-not-supported":"FirebaseServerApp deleteOnDeref field defined but the JS runtime does not support FinalizationRegistry.","invalid-server-app-environment":"FirebaseServerApp is not for use in browser environments."},mt=new cs("app","Firebase",gm);/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class _m{constructor(e,t,r){this._isDeleted=!1,this._options={...e},this._config={...t},this._name=t.name,this._automaticDataCollectionEnabled=t.automaticDataCollectionEnabled,this._container=r,this.container.addComponent(new Pn("app",()=>this,"PUBLIC"))}get automaticDataCollectionEnabled(){return this.checkDestroyed(),this._automaticDataCollectionEnabled}set automaticDataCollectionEnabled(e){this.checkDestroyed(),this._automaticDataCollectionEnabled=e}get name(){return this.checkDestroyed(),this._name}get options(){return this.checkDestroyed(),this._options}get config(){return this.checkDestroyed(),this._config}get container(){return this._container}get isDeleted(){return this._isDeleted}set isDeleted(e){this._isDeleted=e}checkDestroyed(){if(this.isDeleted)throw mt.create("app-deleted",{appName:this._name})}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Zn=fm;function ym(n,e={}){let t=n;typeof e!="object"&&(e={name:e});const r={name:Bo,automaticDataCollectionEnabled:!0,...e},s=r.name;if(typeof s!="string"||!s)throw mt.create("bad-app-name",{appName:String(s)});if(t||(t=Wl()),!t)throw mt.create("no-options");const i=jr.get(s);if(i)if(Rn(t,i.options)){if(Rn(r,i.config))return i;throw mt.create("duplicate-app",{appName:s,mismatchedParam:"config",oldValue:JSON.stringify(i.config),newValue:JSON.stringify(r)})}else throw mt.create("duplicate-app",{appName:s,mismatchedParam:"options",oldValue:JSON.stringify(i.options),newValue:JSON.stringify(t)});const a=new xp(s);for(const l of qo.values())a.addComponent(l);const c=new _m(t,r,a);return jr.set(s,c),c}function Ql(n=Bo){const e=jr.get(n);if(!e&&n===Bo&&Wl())return ym();if(!e)throw mt.create("no-app",{appName:n});return e}function BI(){return Array.from(jr.values())}function zt(n,e,t){let r=pm[n]??n;t&&(r+=`-${t}`);const s=r.match(/\s|\//),i=e.match(/\s|\//);if(s||i){const a=[`Unable to register library "${r}" with version "${e}":`];s&&a.push(`library name "${r}" contains illegal characters (whitespace or "/")`),s&&i&&a.push("and"),i&&a.push(`version name "${e}" contains illegal characters (whitespace or "/")`),vt.warn(a.join(" "));return}Wn(new Pn(`${r}-version`,()=>({library:r,version:e}),"VERSION"))}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Em="firebase-heartbeat-database",wm=1,zr="firebase-heartbeat-store";let Co=null;function Yl(){return Co||(Co=ip(Em,wm,{upgrade:(n,e)=>{switch(e){case 0:try{n.createObjectStore(zr)}catch(t){console.warn(t)}}}}).catch(n=>{throw mt.create("idb-open",{originalErrorMessage:n.message})})),Co}async function Tm(n){try{const t=(await Yl()).transaction(zr),r=await t.objectStore(zr).get(Jl(n));return await t.done,r}catch(e){if(e instanceof St)vt.warn(e.message);else{const t=mt.create("idb-get",{originalErrorMessage:e==null?void 0:e.message});vt.warn(t.message)}}}async function Tu(n,e){try{const r=(await Yl()).transaction(zr,"readwrite");await r.objectStore(zr).put(e,Jl(n)),await r.done}catch(t){if(t instanceof St)vt.warn(t.message);else{const r=mt.create("idb-set",{originalErrorMessage:t==null?void 0:t.message});vt.warn(r.message)}}}function Jl(n){return`${n.name}!${n.options.appId}`}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Im=1024,vm=30;class Am{constructor(e){this.container=e,this._heartbeatsCache=null;const t=this.container.getProvider("app").getImmediate();this._storage=new Pm(t),this._heartbeatsCachePromise=this._storage.read().then(r=>(this._heartbeatsCache=r,r))}async triggerHeartbeat(){var e,t;try{const s=this.container.getProvider("platform-logger").getImmediate().getPlatformInfoString(),i=Iu();if(((e=this._heartbeatsCache)==null?void 0:e.heartbeats)==null&&(this._heartbeatsCache=await this._heartbeatsCachePromise,((t=this._heartbeatsCache)==null?void 0:t.heartbeats)==null)||this._heartbeatsCache.lastSentHeartbeatDate===i||this._heartbeatsCache.heartbeats.some(a=>a.date===i))return;if(this._heartbeatsCache.heartbeats.push({date:i,agent:s}),this._heartbeatsCache.heartbeats.length>vm){const a=Sm(this._heartbeatsCache.heartbeats);this._heartbeatsCache.heartbeats.splice(a,1)}return this._storage.overwrite(this._heartbeatsCache)}catch(r){vt.warn(r)}}async getHeartbeatsHeader(){var e;try{if(this._heartbeatsCache===null&&await this._heartbeatsCachePromise,((e=this._heartbeatsCache)==null?void 0:e.heartbeats)==null||this._heartbeatsCache.heartbeats.length===0)return"";const t=Iu(),{heartbeatsToSend:r,unsentEntries:s}=Rm(this._heartbeatsCache.heartbeats),i=si(JSON.stringify({version:2,heartbeats:r}));return this._heartbeatsCache.lastSentHeartbeatDate=t,s.length>0?(this._heartbeatsCache.heartbeats=s,await this._storage.overwrite(this._heartbeatsCache)):(this._heartbeatsCache.heartbeats=[],this._storage.overwrite(this._heartbeatsCache)),i}catch(t){return vt.warn(t),""}}}function Iu(){return new Date().toISOString().substring(0,10)}function Rm(n,e=Im){const t=[];let r=n.slice();for(const s of n){const i=t.find(a=>a.agent===s.agent);if(i){if(i.dates.push(s.date),vu(t)>e){i.dates.pop();break}}else if(t.push({agent:s.agent,dates:[s.date]}),vu(t)>e){t.pop();break}r=r.slice(1)}return{heartbeatsToSend:t,unsentEntries:r}}class Pm{constructor(e){this.app=e,this._canUseIndexedDBPromise=this.runIndexedDBEnvironmentCheck()}async runIndexedDBEnvironmentCheck(){return vp()?Ap().then(()=>!0).catch(()=>!1):!1}async read(){if(await this._canUseIndexedDBPromise){const t=await Tm(this.app);return t!=null&&t.heartbeats?t:{heartbeats:[]}}else return{heartbeats:[]}}async overwrite(e){if(await this._canUseIndexedDBPromise){const r=await this.read();return Tu(this.app,{lastSentHeartbeatDate:e.lastSentHeartbeatDate??r.lastSentHeartbeatDate,heartbeats:e.heartbeats})}else return}async add(e){if(await this._canUseIndexedDBPromise){const r=await this.read();return Tu(this.app,{lastSentHeartbeatDate:e.lastSentHeartbeatDate??r.lastSentHeartbeatDate,heartbeats:[...r.heartbeats,...e.heartbeats]})}else return}}function vu(n){return si(JSON.stringify({version:2,heartbeats:n})).length}function Sm(n){if(n.length===0)return-1;let e=0,t=n[0].date;for(let r=1;r<n.length;r++)n[r].date<t&&(t=n[r].date,e=r);return e}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Vm(n){Wn(new Pn("platform-logger",e=>new Fp(e),"PRIVATE")),Wn(new Pn("heartbeat",e=>new Am(e),"PRIVATE")),zt(Fo,Eu,n),zt(Fo,Eu,"esm2020"),zt("fire-js","")}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */Vm("");var Au=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{};/** @license
Copyright The Closure Library Authors.
SPDX-License-Identifier: Apache-2.0
*/var Wt,Xl;(function(){var n;/** @license

 Copyright The Closure Library Authors.
 SPDX-License-Identifier: Apache-2.0
*/function e(I,g){function y(){}y.prototype=g.prototype,I.F=g.prototype,I.prototype=new y,I.prototype.constructor=I,I.D=function(v,T,R){for(var _=Array(arguments.length-2),De=2;De<arguments.length;De++)_[De-2]=arguments[De];return g.prototype[T].apply(v,_)}}function t(){this.blockSize=-1}function r(){this.blockSize=-1,this.blockSize=64,this.g=Array(4),this.C=Array(this.blockSize),this.o=this.h=0,this.u()}e(r,t),r.prototype.u=function(){this.g[0]=1732584193,this.g[1]=4023233417,this.g[2]=2562383102,this.g[3]=271733878,this.o=this.h=0};function s(I,g,y){y||(y=0);const v=Array(16);if(typeof g=="string")for(var T=0;T<16;++T)v[T]=g.charCodeAt(y++)|g.charCodeAt(y++)<<8|g.charCodeAt(y++)<<16|g.charCodeAt(y++)<<24;else for(T=0;T<16;++T)v[T]=g[y++]|g[y++]<<8|g[y++]<<16|g[y++]<<24;g=I.g[0],y=I.g[1],T=I.g[2];let R=I.g[3],_;_=g+(R^y&(T^R))+v[0]+3614090360&4294967295,g=y+(_<<7&4294967295|_>>>25),_=R+(T^g&(y^T))+v[1]+3905402710&4294967295,R=g+(_<<12&4294967295|_>>>20),_=T+(y^R&(g^y))+v[2]+606105819&4294967295,T=R+(_<<17&4294967295|_>>>15),_=y+(g^T&(R^g))+v[3]+3250441966&4294967295,y=T+(_<<22&4294967295|_>>>10),_=g+(R^y&(T^R))+v[4]+4118548399&4294967295,g=y+(_<<7&4294967295|_>>>25),_=R+(T^g&(y^T))+v[5]+1200080426&4294967295,R=g+(_<<12&4294967295|_>>>20),_=T+(y^R&(g^y))+v[6]+2821735955&4294967295,T=R+(_<<17&4294967295|_>>>15),_=y+(g^T&(R^g))+v[7]+4249261313&4294967295,y=T+(_<<22&4294967295|_>>>10),_=g+(R^y&(T^R))+v[8]+1770035416&4294967295,g=y+(_<<7&4294967295|_>>>25),_=R+(T^g&(y^T))+v[9]+2336552879&4294967295,R=g+(_<<12&4294967295|_>>>20),_=T+(y^R&(g^y))+v[10]+4294925233&4294967295,T=R+(_<<17&4294967295|_>>>15),_=y+(g^T&(R^g))+v[11]+2304563134&4294967295,y=T+(_<<22&4294967295|_>>>10),_=g+(R^y&(T^R))+v[12]+1804603682&4294967295,g=y+(_<<7&4294967295|_>>>25),_=R+(T^g&(y^T))+v[13]+4254626195&4294967295,R=g+(_<<12&4294967295|_>>>20),_=T+(y^R&(g^y))+v[14]+2792965006&4294967295,T=R+(_<<17&4294967295|_>>>15),_=y+(g^T&(R^g))+v[15]+1236535329&4294967295,y=T+(_<<22&4294967295|_>>>10),_=g+(T^R&(y^T))+v[1]+4129170786&4294967295,g=y+(_<<5&4294967295|_>>>27),_=R+(y^T&(g^y))+v[6]+3225465664&4294967295,R=g+(_<<9&4294967295|_>>>23),_=T+(g^y&(R^g))+v[11]+643717713&4294967295,T=R+(_<<14&4294967295|_>>>18),_=y+(R^g&(T^R))+v[0]+3921069994&4294967295,y=T+(_<<20&4294967295|_>>>12),_=g+(T^R&(y^T))+v[5]+3593408605&4294967295,g=y+(_<<5&4294967295|_>>>27),_=R+(y^T&(g^y))+v[10]+38016083&4294967295,R=g+(_<<9&4294967295|_>>>23),_=T+(g^y&(R^g))+v[15]+3634488961&4294967295,T=R+(_<<14&4294967295|_>>>18),_=y+(R^g&(T^R))+v[4]+3889429448&4294967295,y=T+(_<<20&4294967295|_>>>12),_=g+(T^R&(y^T))+v[9]+568446438&4294967295,g=y+(_<<5&4294967295|_>>>27),_=R+(y^T&(g^y))+v[14]+3275163606&4294967295,R=g+(_<<9&4294967295|_>>>23),_=T+(g^y&(R^g))+v[3]+4107603335&4294967295,T=R+(_<<14&4294967295|_>>>18),_=y+(R^g&(T^R))+v[8]+1163531501&4294967295,y=T+(_<<20&4294967295|_>>>12),_=g+(T^R&(y^T))+v[13]+2850285829&4294967295,g=y+(_<<5&4294967295|_>>>27),_=R+(y^T&(g^y))+v[2]+4243563512&4294967295,R=g+(_<<9&4294967295|_>>>23),_=T+(g^y&(R^g))+v[7]+1735328473&4294967295,T=R+(_<<14&4294967295|_>>>18),_=y+(R^g&(T^R))+v[12]+2368359562&4294967295,y=T+(_<<20&4294967295|_>>>12),_=g+(y^T^R)+v[5]+4294588738&4294967295,g=y+(_<<4&4294967295|_>>>28),_=R+(g^y^T)+v[8]+2272392833&4294967295,R=g+(_<<11&4294967295|_>>>21),_=T+(R^g^y)+v[11]+1839030562&4294967295,T=R+(_<<16&4294967295|_>>>16),_=y+(T^R^g)+v[14]+4259657740&4294967295,y=T+(_<<23&4294967295|_>>>9),_=g+(y^T^R)+v[1]+2763975236&4294967295,g=y+(_<<4&4294967295|_>>>28),_=R+(g^y^T)+v[4]+1272893353&4294967295,R=g+(_<<11&4294967295|_>>>21),_=T+(R^g^y)+v[7]+4139469664&4294967295,T=R+(_<<16&4294967295|_>>>16),_=y+(T^R^g)+v[10]+3200236656&4294967295,y=T+(_<<23&4294967295|_>>>9),_=g+(y^T^R)+v[13]+681279174&4294967295,g=y+(_<<4&4294967295|_>>>28),_=R+(g^y^T)+v[0]+3936430074&4294967295,R=g+(_<<11&4294967295|_>>>21),_=T+(R^g^y)+v[3]+3572445317&4294967295,T=R+(_<<16&4294967295|_>>>16),_=y+(T^R^g)+v[6]+76029189&4294967295,y=T+(_<<23&4294967295|_>>>9),_=g+(y^T^R)+v[9]+3654602809&4294967295,g=y+(_<<4&4294967295|_>>>28),_=R+(g^y^T)+v[12]+3873151461&4294967295,R=g+(_<<11&4294967295|_>>>21),_=T+(R^g^y)+v[15]+530742520&4294967295,T=R+(_<<16&4294967295|_>>>16),_=y+(T^R^g)+v[2]+3299628645&4294967295,y=T+(_<<23&4294967295|_>>>9),_=g+(T^(y|~R))+v[0]+4096336452&4294967295,g=y+(_<<6&4294967295|_>>>26),_=R+(y^(g|~T))+v[7]+1126891415&4294967295,R=g+(_<<10&4294967295|_>>>22),_=T+(g^(R|~y))+v[14]+2878612391&4294967295,T=R+(_<<15&4294967295|_>>>17),_=y+(R^(T|~g))+v[5]+4237533241&4294967295,y=T+(_<<21&4294967295|_>>>11),_=g+(T^(y|~R))+v[12]+1700485571&4294967295,g=y+(_<<6&4294967295|_>>>26),_=R+(y^(g|~T))+v[3]+2399980690&4294967295,R=g+(_<<10&4294967295|_>>>22),_=T+(g^(R|~y))+v[10]+4293915773&4294967295,T=R+(_<<15&4294967295|_>>>17),_=y+(R^(T|~g))+v[1]+2240044497&4294967295,y=T+(_<<21&4294967295|_>>>11),_=g+(T^(y|~R))+v[8]+1873313359&4294967295,g=y+(_<<6&4294967295|_>>>26),_=R+(y^(g|~T))+v[15]+4264355552&4294967295,R=g+(_<<10&4294967295|_>>>22),_=T+(g^(R|~y))+v[6]+2734768916&4294967295,T=R+(_<<15&4294967295|_>>>17),_=y+(R^(T|~g))+v[13]+1309151649&4294967295,y=T+(_<<21&4294967295|_>>>11),_=g+(T^(y|~R))+v[4]+4149444226&4294967295,g=y+(_<<6&4294967295|_>>>26),_=R+(y^(g|~T))+v[11]+3174756917&4294967295,R=g+(_<<10&4294967295|_>>>22),_=T+(g^(R|~y))+v[2]+718787259&4294967295,T=R+(_<<15&4294967295|_>>>17),_=y+(R^(T|~g))+v[9]+3951481745&4294967295,I.g[0]=I.g[0]+g&4294967295,I.g[1]=I.g[1]+(T+(_<<21&4294967295|_>>>11))&4294967295,I.g[2]=I.g[2]+T&4294967295,I.g[3]=I.g[3]+R&4294967295}r.prototype.v=function(I,g){g===void 0&&(g=I.length);const y=g-this.blockSize,v=this.C;let T=this.h,R=0;for(;R<g;){if(T==0)for(;R<=y;)s(this,I,R),R+=this.blockSize;if(typeof I=="string"){for(;R<g;)if(v[T++]=I.charCodeAt(R++),T==this.blockSize){s(this,v),T=0;break}}else for(;R<g;)if(v[T++]=I[R++],T==this.blockSize){s(this,v),T=0;break}}this.h=T,this.o+=g},r.prototype.A=function(){var I=Array((this.h<56?this.blockSize:this.blockSize*2)-this.h);I[0]=128;for(var g=1;g<I.length-8;++g)I[g]=0;g=this.o*8;for(var y=I.length-8;y<I.length;++y)I[y]=g&255,g/=256;for(this.v(I),I=Array(16),g=0,y=0;y<4;++y)for(let v=0;v<32;v+=8)I[g++]=this.g[y]>>>v&255;return I};function i(I,g){var y=c;return Object.prototype.hasOwnProperty.call(y,I)?y[I]:y[I]=g(I)}function a(I,g){this.h=g;const y=[];let v=!0;for(let T=I.length-1;T>=0;T--){const R=I[T]|0;v&&R==g||(y[T]=R,v=!1)}this.g=y}var c={};function l(I){return-128<=I&&I<128?i(I,function(g){return new a([g|0],g<0?-1:0)}):new a([I|0],I<0?-1:0)}function d(I){if(isNaN(I)||!isFinite(I))return m;if(I<0)return L(d(-I));const g=[];let y=1;for(let v=0;I>=y;v++)g[v]=I/y|0,y*=4294967296;return new a(g,0)}function p(I,g){if(I.length==0)throw Error("number format error: empty string");if(g=g||10,g<2||36<g)throw Error("radix out of range: "+g);if(I.charAt(0)=="-")return L(p(I.substring(1),g));if(I.indexOf("-")>=0)throw Error('number format error: interior "-" character');const y=d(Math.pow(g,8));let v=m;for(let R=0;R<I.length;R+=8){var T=Math.min(8,I.length-R);const _=parseInt(I.substring(R,R+T),g);T<8?(T=d(Math.pow(g,T)),v=v.j(T).add(d(_))):(v=v.j(y),v=v.add(d(_)))}return v}var m=l(0),w=l(1),V=l(16777216);n=a.prototype,n.m=function(){if(M(this))return-L(this).m();let I=0,g=1;for(let y=0;y<this.g.length;y++){const v=this.i(y);I+=(v>=0?v:4294967296+v)*g,g*=4294967296}return I},n.toString=function(I){if(I=I||10,I<2||36<I)throw Error("radix out of range: "+I);if(N(this))return"0";if(M(this))return"-"+L(this).toString(I);const g=d(Math.pow(I,6));var y=this;let v="";for(;;){const T=Ke(y,g).g;y=H(y,T.j(g));let R=((y.g.length>0?y.g[0]:y.h)>>>0).toString(I);if(y=T,N(y))return R+v;for(;R.length<6;)R="0"+R;v=R+v}},n.i=function(I){return I<0?0:I<this.g.length?this.g[I]:this.h};function N(I){if(I.h!=0)return!1;for(let g=0;g<I.g.length;g++)if(I.g[g]!=0)return!1;return!0}function M(I){return I.h==-1}n.l=function(I){return I=H(this,I),M(I)?-1:N(I)?0:1};function L(I){const g=I.g.length,y=[];for(let v=0;v<g;v++)y[v]=~I.g[v];return new a(y,~I.h).add(w)}n.abs=function(){return M(this)?L(this):this},n.add=function(I){const g=Math.max(this.g.length,I.g.length),y=[];let v=0;for(let T=0;T<=g;T++){let R=v+(this.i(T)&65535)+(I.i(T)&65535),_=(R>>>16)+(this.i(T)>>>16)+(I.i(T)>>>16);v=_>>>16,R&=65535,_&=65535,y[T]=_<<16|R}return new a(y,y[y.length-1]&-2147483648?-1:0)};function H(I,g){return I.add(L(g))}n.j=function(I){if(N(this)||N(I))return m;if(M(this))return M(I)?L(this).j(L(I)):L(L(this).j(I));if(M(I))return L(this.j(L(I)));if(this.l(V)<0&&I.l(V)<0)return d(this.m()*I.m());const g=this.g.length+I.g.length,y=[];for(var v=0;v<2*g;v++)y[v]=0;for(v=0;v<this.g.length;v++)for(let T=0;T<I.g.length;T++){const R=this.i(v)>>>16,_=this.i(v)&65535,De=I.i(T)>>>16,ln=I.i(T)&65535;y[2*v+2*T]+=_*ln,J(y,2*v+2*T),y[2*v+2*T+1]+=R*ln,J(y,2*v+2*T+1),y[2*v+2*T+1]+=_*De,J(y,2*v+2*T+1),y[2*v+2*T+2]+=R*De,J(y,2*v+2*T+2)}for(I=0;I<g;I++)y[I]=y[2*I+1]<<16|y[2*I];for(I=g;I<2*g;I++)y[I]=0;return new a(y,0)};function J(I,g){for(;(I[g]&65535)!=I[g];)I[g+1]+=I[g]>>>16,I[g]&=65535,g++}function ie(I,g){this.g=I,this.h=g}function Ke(I,g){if(N(g))throw Error("division by zero");if(N(I))return new ie(m,m);if(M(I))return g=Ke(L(I),g),new ie(L(g.g),L(g.h));if(M(g))return g=Ke(I,L(g)),new ie(L(g.g),g.h);if(I.g.length>30){if(M(I)||M(g))throw Error("slowDivide_ only works with positive integers.");for(var y=w,v=g;v.l(I)<=0;)y=Te(y),v=Te(v);var T=Ie(y,1),R=Ie(v,1);for(v=Ie(v,2),y=Ie(y,2);!N(v);){var _=R.add(v);_.l(I)<=0&&(T=T.add(y),R=_),v=Ie(v,1),y=Ie(y,1)}return g=H(I,T.j(g)),new ie(T,g)}for(T=m;I.l(g)>=0;){for(y=Math.max(1,Math.floor(I.m()/g.m())),v=Math.ceil(Math.log(y)/Math.LN2),v=v<=48?1:Math.pow(2,v-48),R=d(y),_=R.j(g);M(_)||_.l(I)>0;)y-=v,R=d(y),_=R.j(g);N(R)&&(R=w),T=T.add(R),I=H(I,_)}return new ie(T,I)}n.B=function(I){return Ke(this,I).h},n.and=function(I){const g=Math.max(this.g.length,I.g.length),y=[];for(let v=0;v<g;v++)y[v]=this.i(v)&I.i(v);return new a(y,this.h&I.h)},n.or=function(I){const g=Math.max(this.g.length,I.g.length),y=[];for(let v=0;v<g;v++)y[v]=this.i(v)|I.i(v);return new a(y,this.h|I.h)},n.xor=function(I){const g=Math.max(this.g.length,I.g.length),y=[];for(let v=0;v<g;v++)y[v]=this.i(v)^I.i(v);return new a(y,this.h^I.h)};function Te(I){const g=I.g.length+1,y=[];for(let v=0;v<g;v++)y[v]=I.i(v)<<1|I.i(v-1)>>>31;return new a(y,I.h)}function Ie(I,g){const y=g>>5;g%=32;const v=I.g.length-y,T=[];for(let R=0;R<v;R++)T[R]=g>0?I.i(R+y)>>>g|I.i(R+y+1)<<32-g:I.i(R+y);return new a(T,I.h)}r.prototype.digest=r.prototype.A,r.prototype.reset=r.prototype.u,r.prototype.update=r.prototype.v,Xl=r,a.prototype.add=a.prototype.add,a.prototype.multiply=a.prototype.j,a.prototype.modulo=a.prototype.B,a.prototype.compare=a.prototype.l,a.prototype.toNumber=a.prototype.m,a.prototype.toString=a.prototype.toString,a.prototype.getBits=a.prototype.i,a.fromNumber=d,a.fromString=p,Wt=a}).apply(typeof Au<"u"?Au:typeof self<"u"?self:typeof window<"u"?window:{});var Fs=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{};/** @license
Copyright The Closure Library Authors.
SPDX-License-Identifier: Apache-2.0
*/var Zl,br,eh,Hs,$o,th,nh,rh;(function(){var n,e=Object.defineProperty;function t(o){o=[typeof globalThis=="object"&&globalThis,o,typeof window=="object"&&window,typeof self=="object"&&self,typeof Fs=="object"&&Fs];for(var u=0;u<o.length;++u){var h=o[u];if(h&&h.Math==Math)return h}throw Error("Cannot find global object")}var r=t(this);function s(o,u){if(u)e:{var h=r;o=o.split(".");for(var f=0;f<o.length-1;f++){var A=o[f];if(!(A in h))break e;h=h[A]}o=o[o.length-1],f=h[o],u=u(f),u!=f&&u!=null&&e(h,o,{configurable:!0,writable:!0,value:u})}}s("Symbol.dispose",function(o){return o||Symbol("Symbol.dispose")}),s("Array.prototype.values",function(o){return o||function(){return this[Symbol.iterator]()}}),s("Object.entries",function(o){return o||function(u){var h=[],f;for(f in u)Object.prototype.hasOwnProperty.call(u,f)&&h.push([f,u[f]]);return h}});/** @license

 Copyright The Closure Library Authors.
 SPDX-License-Identifier: Apache-2.0
*/var i=i||{},a=this||self;function c(o){var u=typeof o;return u=="object"&&o!=null||u=="function"}function l(o,u,h){return o.call.apply(o.bind,arguments)}function d(o,u,h){return d=l,d.apply(null,arguments)}function p(o,u){var h=Array.prototype.slice.call(arguments,1);return function(){var f=h.slice();return f.push.apply(f,arguments),o.apply(this,f)}}function m(o,u){function h(){}h.prototype=u.prototype,o.Z=u.prototype,o.prototype=new h,o.prototype.constructor=o,o.Ob=function(f,A,P){for(var x=Array(arguments.length-2),W=2;W<arguments.length;W++)x[W-2]=arguments[W];return u.prototype[A].apply(f,x)}}var w=typeof AsyncContext<"u"&&typeof AsyncContext.Snapshot=="function"?o=>o&&AsyncContext.Snapshot.wrap(o):o=>o;function V(o){const u=o.length;if(u>0){const h=Array(u);for(let f=0;f<u;f++)h[f]=o[f];return h}return[]}function N(o,u){for(let f=1;f<arguments.length;f++){const A=arguments[f];var h=typeof A;if(h=h!="object"?h:A?Array.isArray(A)?"array":h:"null",h=="array"||h=="object"&&typeof A.length=="number"){h=o.length||0;const P=A.length||0;o.length=h+P;for(let x=0;x<P;x++)o[h+x]=A[x]}else o.push(A)}}class M{constructor(u,h){this.i=u,this.j=h,this.h=0,this.g=null}get(){let u;return this.h>0?(this.h--,u=this.g,this.g=u.next,u.next=null):u=this.i(),u}}function L(o){a.setTimeout(()=>{throw o},0)}function H(){var o=I;let u=null;return o.g&&(u=o.g,o.g=o.g.next,o.g||(o.h=null),u.next=null),u}class J{constructor(){this.h=this.g=null}add(u,h){const f=ie.get();f.set(u,h),this.h?this.h.next=f:this.g=f,this.h=f}}var ie=new M(()=>new Ke,o=>o.reset());class Ke{constructor(){this.next=this.g=this.h=null}set(u,h){this.h=u,this.g=h,this.next=null}reset(){this.next=this.g=this.h=null}}let Te,Ie=!1,I=new J,g=()=>{const o=Promise.resolve(void 0);Te=()=>{o.then(y)}};function y(){for(var o;o=H();){try{o.h.call(o.g)}catch(h){L(h)}var u=ie;u.j(o),u.h<100&&(u.h++,o.next=u.g,u.g=o)}Ie=!1}function v(){this.u=this.u,this.C=this.C}v.prototype.u=!1,v.prototype.dispose=function(){this.u||(this.u=!0,this.N())},v.prototype[Symbol.dispose]=function(){this.dispose()},v.prototype.N=function(){if(this.C)for(;this.C.length;)this.C.shift()()};function T(o,u){this.type=o,this.g=this.target=u,this.defaultPrevented=!1}T.prototype.h=function(){this.defaultPrevented=!0};var R=function(){if(!a.addEventListener||!Object.defineProperty)return!1;var o=!1,u=Object.defineProperty({},"passive",{get:function(){o=!0}});try{const h=()=>{};a.addEventListener("test",h,u),a.removeEventListener("test",h,u)}catch{}return o}();function _(o){return/^[\s\xa0]*$/.test(o)}function De(o,u){T.call(this,o?o.type:""),this.relatedTarget=this.g=this.target=null,this.button=this.screenY=this.screenX=this.clientY=this.clientX=0,this.key="",this.metaKey=this.shiftKey=this.altKey=this.ctrlKey=!1,this.state=null,this.pointerId=0,this.pointerType="",this.i=null,o&&this.init(o,u)}m(De,T),De.prototype.init=function(o,u){const h=this.type=o.type,f=o.changedTouches&&o.changedTouches.length?o.changedTouches[0]:null;this.target=o.target||o.srcElement,this.g=u,u=o.relatedTarget,u||(h=="mouseover"?u=o.fromElement:h=="mouseout"&&(u=o.toElement)),this.relatedTarget=u,f?(this.clientX=f.clientX!==void 0?f.clientX:f.pageX,this.clientY=f.clientY!==void 0?f.clientY:f.pageY,this.screenX=f.screenX||0,this.screenY=f.screenY||0):(this.clientX=o.clientX!==void 0?o.clientX:o.pageX,this.clientY=o.clientY!==void 0?o.clientY:o.pageY,this.screenX=o.screenX||0,this.screenY=o.screenY||0),this.button=o.button,this.key=o.key||"",this.ctrlKey=o.ctrlKey,this.altKey=o.altKey,this.shiftKey=o.shiftKey,this.metaKey=o.metaKey,this.pointerId=o.pointerId||0,this.pointerType=o.pointerType,this.state=o.state,this.i=o,o.defaultPrevented&&De.Z.h.call(this)},De.prototype.h=function(){De.Z.h.call(this);const o=this.i;o.preventDefault?o.preventDefault():o.returnValue=!1};var ln="closure_listenable_"+(Math.random()*1e6|0),Sf=0;function Vf(o,u,h,f,A){this.listener=o,this.proxy=null,this.src=u,this.type=h,this.capture=!!f,this.ha=A,this.key=++Sf,this.da=this.fa=!1}function As(o){o.da=!0,o.listener=null,o.proxy=null,o.src=null,o.ha=null}function Rs(o,u,h){for(const f in o)u.call(h,o[f],f,o)}function Cf(o,u){for(const h in o)u.call(void 0,o[h],h,o)}function gc(o){const u={};for(const h in o)u[h]=o[h];return u}const _c="constructor hasOwnProperty isPrototypeOf propertyIsEnumerable toLocaleString toString valueOf".split(" ");function yc(o,u){let h,f;for(let A=1;A<arguments.length;A++){f=arguments[A];for(h in f)o[h]=f[h];for(let P=0;P<_c.length;P++)h=_c[P],Object.prototype.hasOwnProperty.call(f,h)&&(o[h]=f[h])}}function Ps(o){this.src=o,this.g={},this.h=0}Ps.prototype.add=function(o,u,h,f,A){const P=o.toString();o=this.g[P],o||(o=this.g[P]=[],this.h++);const x=so(o,u,f,A);return x>-1?(u=o[x],h||(u.fa=!1)):(u=new Vf(u,this.src,P,!!f,A),u.fa=h,o.push(u)),u};function ro(o,u){const h=u.type;if(h in o.g){var f=o.g[h],A=Array.prototype.indexOf.call(f,u,void 0),P;(P=A>=0)&&Array.prototype.splice.call(f,A,1),P&&(As(u),o.g[h].length==0&&(delete o.g[h],o.h--))}}function so(o,u,h,f){for(let A=0;A<o.length;++A){const P=o[A];if(!P.da&&P.listener==u&&P.capture==!!h&&P.ha==f)return A}return-1}var io="closure_lm_"+(Math.random()*1e6|0),oo={};function Ec(o,u,h,f,A){if(Array.isArray(u)){for(let P=0;P<u.length;P++)Ec(o,u[P],h,f,A);return null}return h=Ic(h),o&&o[ln]?o.J(u,h,c(f)?!!f.capture:!1,A):bf(o,u,h,!1,f,A)}function bf(o,u,h,f,A,P){if(!u)throw Error("Invalid event type");const x=c(A)?!!A.capture:!!A;let W=co(o);if(W||(o[io]=W=new Ps(o)),h=W.add(u,h,f,x,P),h.proxy)return h;if(f=Nf(),h.proxy=f,f.src=o,f.listener=h,o.addEventListener)R||(A=x),A===void 0&&(A=!1),o.addEventListener(u.toString(),f,A);else if(o.attachEvent)o.attachEvent(Tc(u.toString()),f);else if(o.addListener&&o.removeListener)o.addListener(f);else throw Error("addEventListener and attachEvent are unavailable.");return h}function Nf(){function o(h){return u.call(o.src,o.listener,h)}const u=kf;return o}function wc(o,u,h,f,A){if(Array.isArray(u))for(var P=0;P<u.length;P++)wc(o,u[P],h,f,A);else f=c(f)?!!f.capture:!!f,h=Ic(h),o&&o[ln]?(o=o.i,P=String(u).toString(),P in o.g&&(u=o.g[P],h=so(u,h,f,A),h>-1&&(As(u[h]),Array.prototype.splice.call(u,h,1),u.length==0&&(delete o.g[P],o.h--)))):o&&(o=co(o))&&(u=o.g[u.toString()],o=-1,u&&(o=so(u,h,f,A)),(h=o>-1?u[o]:null)&&ao(h))}function ao(o){if(typeof o!="number"&&o&&!o.da){var u=o.src;if(u&&u[ln])ro(u.i,o);else{var h=o.type,f=o.proxy;u.removeEventListener?u.removeEventListener(h,f,o.capture):u.detachEvent?u.detachEvent(Tc(h),f):u.addListener&&u.removeListener&&u.removeListener(f),(h=co(u))?(ro(h,o),h.h==0&&(h.src=null,u[io]=null)):As(o)}}}function Tc(o){return o in oo?oo[o]:oo[o]="on"+o}function kf(o,u){if(o.da)o=!0;else{u=new De(u,this);const h=o.listener,f=o.ha||o.src;o.fa&&ao(o),o=h.call(f,u)}return o}function co(o){return o=o[io],o instanceof Ps?o:null}var uo="__closure_events_fn_"+(Math.random()*1e9>>>0);function Ic(o){return typeof o=="function"?o:(o[uo]||(o[uo]=function(u){return o.handleEvent(u)}),o[uo])}function ve(){v.call(this),this.i=new Ps(this),this.M=this,this.G=null}m(ve,v),ve.prototype[ln]=!0,ve.prototype.removeEventListener=function(o,u,h,f){wc(this,o,u,h,f)};function Ce(o,u){var h,f=o.G;if(f)for(h=[];f;f=f.G)h.push(f);if(o=o.M,f=u.type||u,typeof u=="string")u=new T(u,o);else if(u instanceof T)u.target=u.target||o;else{var A=u;u=new T(f,o),yc(u,A)}A=!0;let P,x;if(h)for(x=h.length-1;x>=0;x--)P=u.g=h[x],A=Ss(P,f,!0,u)&&A;if(P=u.g=o,A=Ss(P,f,!0,u)&&A,A=Ss(P,f,!1,u)&&A,h)for(x=0;x<h.length;x++)P=u.g=h[x],A=Ss(P,f,!1,u)&&A}ve.prototype.N=function(){if(ve.Z.N.call(this),this.i){var o=this.i;for(const u in o.g){const h=o.g[u];for(let f=0;f<h.length;f++)As(h[f]);delete o.g[u],o.h--}}this.G=null},ve.prototype.J=function(o,u,h,f){return this.i.add(String(o),u,!1,h,f)},ve.prototype.K=function(o,u,h,f){return this.i.add(String(o),u,!0,h,f)};function Ss(o,u,h,f){if(u=o.i.g[String(u)],!u)return!0;u=u.concat();let A=!0;for(let P=0;P<u.length;++P){const x=u[P];if(x&&!x.da&&x.capture==h){const W=x.listener,pe=x.ha||x.src;x.fa&&ro(o.i,x),A=W.call(pe,f)!==!1&&A}}return A&&!f.defaultPrevented}function Df(o,u){if(typeof o!="function")if(o&&typeof o.handleEvent=="function")o=d(o.handleEvent,o);else throw Error("Invalid listener argument");return Number(u)>2147483647?-1:a.setTimeout(o,u||0)}function vc(o){o.g=Df(()=>{o.g=null,o.i&&(o.i=!1,vc(o))},o.l);const u=o.h;o.h=null,o.m.apply(null,u)}class xf extends v{constructor(u,h){super(),this.m=u,this.l=h,this.h=null,this.i=!1,this.g=null}j(u){this.h=arguments,this.g?this.i=!0:vc(this)}N(){super.N(),this.g&&(a.clearTimeout(this.g),this.g=null,this.i=!1,this.h=null)}}function lr(o){v.call(this),this.h=o,this.g={}}m(lr,v);var Ac=[];function Rc(o){Rs(o.g,function(u,h){this.g.hasOwnProperty(h)&&ao(u)},o),o.g={}}lr.prototype.N=function(){lr.Z.N.call(this),Rc(this)},lr.prototype.handleEvent=function(){throw Error("EventHandler.handleEvent not implemented")};var lo=a.JSON.stringify,Of=a.JSON.parse,Lf=class{stringify(o){return a.JSON.stringify(o,void 0)}parse(o){return a.JSON.parse(o,void 0)}};function Pc(){}function Sc(){}var hr={OPEN:"a",hb:"b",ERROR:"c",tb:"d"};function ho(){T.call(this,"d")}m(ho,T);function fo(){T.call(this,"c")}m(fo,T);var hn={},Vc=null;function Vs(){return Vc=Vc||new ve}hn.Ia="serverreachability";function Cc(o){T.call(this,hn.Ia,o)}m(Cc,T);function dr(o){const u=Vs();Ce(u,new Cc(u))}hn.STAT_EVENT="statevent";function bc(o,u){T.call(this,hn.STAT_EVENT,o),this.stat=u}m(bc,T);function be(o){const u=Vs();Ce(u,new bc(u,o))}hn.Ja="timingevent";function Nc(o,u){T.call(this,hn.Ja,o),this.size=u}m(Nc,T);function fr(o,u){if(typeof o!="function")throw Error("Fn must not be null and must be a function");return a.setTimeout(function(){o()},u)}function pr(){this.g=!0}pr.prototype.ua=function(){this.g=!1};function Mf(o,u,h,f,A,P){o.info(function(){if(o.g)if(P){var x="",W=P.split("&");for(let ee=0;ee<W.length;ee++){var pe=W[ee].split("=");if(pe.length>1){const ge=pe[0];pe=pe[1];const st=ge.split("_");x=st.length>=2&&st[1]=="type"?x+(ge+"="+pe+"&"):x+(ge+"=redacted&")}}}else x=null;else x=P;return"XMLHTTP REQ ("+f+") [attempt "+A+"]: "+u+`
`+h+`
`+x})}function Uf(o,u,h,f,A,P,x){o.info(function(){return"XMLHTTP RESP ("+f+") [ attempt "+A+"]: "+u+`
`+h+`
`+P+" "+x})}function xn(o,u,h,f){o.info(function(){return"XMLHTTP TEXT ("+u+"): "+Bf(o,h)+(f?" "+f:"")})}function Ff(o,u){o.info(function(){return"TIMEOUT: "+u})}pr.prototype.info=function(){};function Bf(o,u){if(!o.g)return u;if(!u)return null;try{const P=JSON.parse(u);if(P){for(o=0;o<P.length;o++)if(Array.isArray(P[o])){var h=P[o];if(!(h.length<2)){var f=h[1];if(Array.isArray(f)&&!(f.length<1)){var A=f[0];if(A!="noop"&&A!="stop"&&A!="close")for(let x=1;x<f.length;x++)f[x]=""}}}}return lo(P)}catch{return u}}var Cs={NO_ERROR:0,cb:1,qb:2,pb:3,kb:4,ob:5,rb:6,Ga:7,TIMEOUT:8,ub:9},kc={ib:"complete",Fb:"success",ERROR:"error",Ga:"abort",xb:"ready",yb:"readystatechange",TIMEOUT:"timeout",sb:"incrementaldata",wb:"progress",lb:"downloadprogress",Nb:"uploadprogress"},Dc;function po(){}m(po,Pc),po.prototype.g=function(){return new XMLHttpRequest},Dc=new po;function mr(o){return encodeURIComponent(String(o))}function qf(o){var u=1;o=o.split(":");const h=[];for(;u>0&&o.length;)h.push(o.shift()),u--;return o.length&&h.push(o.join(":")),h}function Nt(o,u,h,f){this.j=o,this.i=u,this.l=h,this.S=f||1,this.V=new lr(this),this.H=45e3,this.J=null,this.o=!1,this.u=this.B=this.A=this.M=this.F=this.T=this.D=null,this.G=[],this.g=null,this.C=0,this.m=this.v=null,this.X=-1,this.K=!1,this.P=0,this.O=null,this.W=this.L=this.U=this.R=!1,this.h=new xc}function xc(){this.i=null,this.g="",this.h=!1}var Oc={},mo={};function go(o,u,h){o.M=1,o.A=Ns(rt(u)),o.u=h,o.R=!0,Lc(o,null)}function Lc(o,u){o.F=Date.now(),bs(o),o.B=rt(o.A);var h=o.B,f=o.S;Array.isArray(f)||(f=[String(f)]),Qc(h.i,"t",f),o.C=0,h=o.j.L,o.h=new xc,o.g=fu(o.j,h?u:null,!o.u),o.P>0&&(o.O=new xf(d(o.Y,o,o.g),o.P)),u=o.V,h=o.g,f=o.ba;var A="readystatechange";Array.isArray(A)||(A&&(Ac[0]=A.toString()),A=Ac);for(let P=0;P<A.length;P++){const x=Ec(h,A[P],f||u.handleEvent,!1,u.h||u);if(!x)break;u.g[x.key]=x}u=o.J?gc(o.J):{},o.u?(o.v||(o.v="POST"),u["Content-Type"]="application/x-www-form-urlencoded",o.g.ea(o.B,o.v,o.u,u)):(o.v="GET",o.g.ea(o.B,o.v,null,u)),dr(),Mf(o.i,o.v,o.B,o.l,o.S,o.u)}Nt.prototype.ba=function(o){o=o.target;const u=this.O;u&&xt(o)==3?u.j():this.Y(o)},Nt.prototype.Y=function(o){try{if(o==this.g)e:{const W=xt(this.g),pe=this.g.ya(),ee=this.g.ca();if(!(W<3)&&(W!=3||this.g&&(this.h.h||this.g.la()||nu(this.g)))){this.K||W!=4||pe==7||(pe==8||ee<=0?dr(3):dr(2)),_o(this);var u=this.g.ca();this.X=u;var h=$f(this);if(this.o=u==200,Uf(this.i,this.v,this.B,this.l,this.S,W,u),this.o){if(this.U&&!this.L){t:{if(this.g){var f,A=this.g;if((f=A.g?A.g.getResponseHeader("X-HTTP-Initial-Response"):null)&&!_(f)){var P=f;break t}}P=null}if(o=P)xn(this.i,this.l,o,"Initial handshake response via X-HTTP-Initial-Response"),this.L=!0,yo(this,o);else{this.o=!1,this.m=3,be(12),dn(this),gr(this);break e}}if(this.R){o=!0;let ge;for(;!this.K&&this.C<h.length;)if(ge=jf(this,h),ge==mo){W==4&&(this.m=4,be(14),o=!1),xn(this.i,this.l,null,"[Incomplete Response]");break}else if(ge==Oc){this.m=4,be(15),xn(this.i,this.l,h,"[Invalid Chunk]"),o=!1;break}else xn(this.i,this.l,ge,null),yo(this,ge);if(Mc(this)&&this.C!=0&&(this.h.g=this.h.g.slice(this.C),this.C=0),W!=4||h.length!=0||this.h.h||(this.m=1,be(16),o=!1),this.o=this.o&&o,!o)xn(this.i,this.l,h,"[Invalid Chunked Response]"),dn(this),gr(this);else if(h.length>0&&!this.W){this.W=!0;var x=this.j;x.g==this&&x.aa&&!x.P&&(x.j.info("Great, no buffering proxy detected. Bytes received: "+h.length),Po(x),x.P=!0,be(11))}}else xn(this.i,this.l,h,null),yo(this,h);W==4&&dn(this),this.o&&!this.K&&(W==4?uu(this.j,this):(this.o=!1,bs(this)))}else rp(this.g),u==400&&h.indexOf("Unknown SID")>0?(this.m=3,be(12)):(this.m=0,be(13)),dn(this),gr(this)}}}catch{}finally{}};function $f(o){if(!Mc(o))return o.g.la();const u=nu(o.g);if(u==="")return"";let h="";const f=u.length,A=xt(o.g)==4;if(!o.h.i){if(typeof TextDecoder>"u")return dn(o),gr(o),"";o.h.i=new a.TextDecoder}for(let P=0;P<f;P++)o.h.h=!0,h+=o.h.i.decode(u[P],{stream:!(A&&P==f-1)});return u.length=0,o.h.g+=h,o.C=0,o.h.g}function Mc(o){return o.g?o.v=="GET"&&o.M!=2&&o.j.Aa:!1}function jf(o,u){var h=o.C,f=u.indexOf(`
`,h);return f==-1?mo:(h=Number(u.substring(h,f)),isNaN(h)?Oc:(f+=1,f+h>u.length?mo:(u=u.slice(f,f+h),o.C=f+h,u)))}Nt.prototype.cancel=function(){this.K=!0,dn(this)};function bs(o){o.T=Date.now()+o.H,Uc(o,o.H)}function Uc(o,u){if(o.D!=null)throw Error("WatchDog timer not null");o.D=fr(d(o.aa,o),u)}function _o(o){o.D&&(a.clearTimeout(o.D),o.D=null)}Nt.prototype.aa=function(){this.D=null;const o=Date.now();o-this.T>=0?(Ff(this.i,this.B),this.M!=2&&(dr(),be(17)),dn(this),this.m=2,gr(this)):Uc(this,this.T-o)};function gr(o){o.j.I==0||o.K||uu(o.j,o)}function dn(o){_o(o);var u=o.O;u&&typeof u.dispose=="function"&&u.dispose(),o.O=null,Rc(o.V),o.g&&(u=o.g,o.g=null,u.abort(),u.dispose())}function yo(o,u){try{var h=o.j;if(h.I!=0&&(h.g==o||Eo(h.h,o))){if(!o.L&&Eo(h.h,o)&&h.I==3){try{var f=h.Ba.g.parse(u)}catch{f=null}if(Array.isArray(f)&&f.length==3){var A=f;if(A[0]==0){e:if(!h.v){if(h.g)if(h.g.F+3e3<o.F)Ls(h),xs(h);else break e;Ro(h),be(18)}}else h.xa=A[1],0<h.xa-h.K&&A[2]<37500&&h.F&&h.A==0&&!h.C&&(h.C=fr(d(h.Va,h),6e3));qc(h.h)<=1&&h.ta&&(h.ta=void 0)}else pn(h,11)}else if((o.L||h.g==o)&&Ls(h),!_(u))for(A=h.Ba.g.parse(u),u=0;u<A.length;u++){let ee=A[u];const ge=ee[0];if(!(ge<=h.K))if(h.K=ge,ee=ee[1],h.I==2)if(ee[0]=="c"){h.M=ee[1],h.ba=ee[2];const st=ee[3];st!=null&&(h.ka=st,h.j.info("VER="+h.ka));const mn=ee[4];mn!=null&&(h.za=mn,h.j.info("SVER="+h.za));const Ot=ee[5];Ot!=null&&typeof Ot=="number"&&Ot>0&&(f=1.5*Ot,h.O=f,h.j.info("backChannelRequestTimeoutMs_="+f)),f=h;const Lt=o.g;if(Lt){const Us=Lt.g?Lt.g.getResponseHeader("X-Client-Wire-Protocol"):null;if(Us){var P=f.h;P.g||Us.indexOf("spdy")==-1&&Us.indexOf("quic")==-1&&Us.indexOf("h2")==-1||(P.j=P.l,P.g=new Set,P.h&&(wo(P,P.h),P.h=null))}if(f.G){const So=Lt.g?Lt.g.getResponseHeader("X-HTTP-Session-Id"):null;So&&(f.wa=So,te(f.J,f.G,So))}}h.I=3,h.l&&h.l.ra(),h.aa&&(h.T=Date.now()-o.F,h.j.info("Handshake RTT: "+h.T+"ms")),f=h;var x=o;if(f.na=du(f,f.L?f.ba:null,f.W),x.L){$c(f.h,x);var W=x,pe=f.O;pe&&(W.H=pe),W.D&&(_o(W),bs(W)),f.g=x}else au(f);h.i.length>0&&Os(h)}else ee[0]!="stop"&&ee[0]!="close"||pn(h,7);else h.I==3&&(ee[0]=="stop"||ee[0]=="close"?ee[0]=="stop"?pn(h,7):Ao(h):ee[0]!="noop"&&h.l&&h.l.qa(ee),h.A=0)}}dr(4)}catch{}}var zf=class{constructor(o,u){this.g=o,this.map=u}};function Fc(o){this.l=o||10,a.PerformanceNavigationTiming?(o=a.performance.getEntriesByType("navigation"),o=o.length>0&&(o[0].nextHopProtocol=="hq"||o[0].nextHopProtocol=="h2")):o=!!(a.chrome&&a.chrome.loadTimes&&a.chrome.loadTimes()&&a.chrome.loadTimes().wasFetchedViaSpdy),this.j=o?this.l:1,this.g=null,this.j>1&&(this.g=new Set),this.h=null,this.i=[]}function Bc(o){return o.h?!0:o.g?o.g.size>=o.j:!1}function qc(o){return o.h?1:o.g?o.g.size:0}function Eo(o,u){return o.h?o.h==u:o.g?o.g.has(u):!1}function wo(o,u){o.g?o.g.add(u):o.h=u}function $c(o,u){o.h&&o.h==u?o.h=null:o.g&&o.g.has(u)&&o.g.delete(u)}Fc.prototype.cancel=function(){if(this.i=jc(this),this.h)this.h.cancel(),this.h=null;else if(this.g&&this.g.size!==0){for(const o of this.g.values())o.cancel();this.g.clear()}};function jc(o){if(o.h!=null)return o.i.concat(o.h.G);if(o.g!=null&&o.g.size!==0){let u=o.i;for(const h of o.g.values())u=u.concat(h.G);return u}return V(o.i)}var zc=RegExp("^(?:([^:/?#.]+):)?(?://(?:([^\\\\/?#]*)@)?([^\\\\/?#]*?)(?::([0-9]+))?(?=[\\\\/?#]|$))?([^?#]+)?(?:\\?([^#]*))?(?:#([\\s\\S]*))?$");function Wf(o,u){if(o){o=o.split("&");for(let h=0;h<o.length;h++){const f=o[h].indexOf("=");let A,P=null;f>=0?(A=o[h].substring(0,f),P=o[h].substring(f+1)):A=o[h],u(A,P?decodeURIComponent(P.replace(/\+/g," ")):"")}}}function kt(o){this.g=this.o=this.j="",this.u=null,this.m=this.h="",this.l=!1;let u;o instanceof kt?(this.l=o.l,_r(this,o.j),this.o=o.o,this.g=o.g,yr(this,o.u),this.h=o.h,To(this,Yc(o.i)),this.m=o.m):o&&(u=String(o).match(zc))?(this.l=!1,_r(this,u[1]||"",!0),this.o=Er(u[2]||""),this.g=Er(u[3]||"",!0),yr(this,u[4]),this.h=Er(u[5]||"",!0),To(this,u[6]||"",!0),this.m=Er(u[7]||"")):(this.l=!1,this.i=new Tr(null,this.l))}kt.prototype.toString=function(){const o=[];var u=this.j;u&&o.push(wr(u,Wc,!0),":");var h=this.g;return(h||u=="file")&&(o.push("//"),(u=this.o)&&o.push(wr(u,Wc,!0),"@"),o.push(mr(h).replace(/%25([0-9a-fA-F]{2})/g,"%$1")),h=this.u,h!=null&&o.push(":",String(h))),(h=this.h)&&(this.g&&h.charAt(0)!="/"&&o.push("/"),o.push(wr(h,h.charAt(0)=="/"?Kf:Gf,!0))),(h=this.i.toString())&&o.push("?",h),(h=this.m)&&o.push("#",wr(h,Yf)),o.join("")},kt.prototype.resolve=function(o){const u=rt(this);let h=!!o.j;h?_r(u,o.j):h=!!o.o,h?u.o=o.o:h=!!o.g,h?u.g=o.g:h=o.u!=null;var f=o.h;if(h)yr(u,o.u);else if(h=!!o.h){if(f.charAt(0)!="/")if(this.g&&!this.h)f="/"+f;else{var A=u.h.lastIndexOf("/");A!=-1&&(f=u.h.slice(0,A+1)+f)}if(A=f,A==".."||A==".")f="";else if(A.indexOf("./")!=-1||A.indexOf("/.")!=-1){f=A.lastIndexOf("/",0)==0,A=A.split("/");const P=[];for(let x=0;x<A.length;){const W=A[x++];W=="."?f&&x==A.length&&P.push(""):W==".."?((P.length>1||P.length==1&&P[0]!="")&&P.pop(),f&&x==A.length&&P.push("")):(P.push(W),f=!0)}f=P.join("/")}else f=A}return h?u.h=f:h=o.i.toString()!=="",h?To(u,Yc(o.i)):h=!!o.m,h&&(u.m=o.m),u};function rt(o){return new kt(o)}function _r(o,u,h){o.j=h?Er(u,!0):u,o.j&&(o.j=o.j.replace(/:$/,""))}function yr(o,u){if(u){if(u=Number(u),isNaN(u)||u<0)throw Error("Bad port number "+u);o.u=u}else o.u=null}function To(o,u,h){u instanceof Tr?(o.i=u,Jf(o.i,o.l)):(h||(u=wr(u,Qf)),o.i=new Tr(u,o.l))}function te(o,u,h){o.i.set(u,h)}function Ns(o){return te(o,"zx",Math.floor(Math.random()*2147483648).toString(36)+Math.abs(Math.floor(Math.random()*2147483648)^Date.now()).toString(36)),o}function Er(o,u){return o?u?decodeURI(o.replace(/%25/g,"%2525")):decodeURIComponent(o):""}function wr(o,u,h){return typeof o=="string"?(o=encodeURI(o).replace(u,Hf),h&&(o=o.replace(/%25([0-9a-fA-F]{2})/g,"%$1")),o):null}function Hf(o){return o=o.charCodeAt(0),"%"+(o>>4&15).toString(16)+(o&15).toString(16)}var Wc=/[#\/\?@]/g,Gf=/[#\?:]/g,Kf=/[#\?]/g,Qf=/[#\?@]/g,Yf=/#/g;function Tr(o,u){this.h=this.g=null,this.i=o||null,this.j=!!u}function fn(o){o.g||(o.g=new Map,o.h=0,o.i&&Wf(o.i,function(u,h){o.add(decodeURIComponent(u.replace(/\+/g," ")),h)}))}n=Tr.prototype,n.add=function(o,u){fn(this),this.i=null,o=On(this,o);let h=this.g.get(o);return h||this.g.set(o,h=[]),h.push(u),this.h+=1,this};function Hc(o,u){fn(o),u=On(o,u),o.g.has(u)&&(o.i=null,o.h-=o.g.get(u).length,o.g.delete(u))}function Gc(o,u){return fn(o),u=On(o,u),o.g.has(u)}n.forEach=function(o,u){fn(this),this.g.forEach(function(h,f){h.forEach(function(A){o.call(u,A,f,this)},this)},this)};function Kc(o,u){fn(o);let h=[];if(typeof u=="string")Gc(o,u)&&(h=h.concat(o.g.get(On(o,u))));else for(o=Array.from(o.g.values()),u=0;u<o.length;u++)h=h.concat(o[u]);return h}n.set=function(o,u){return fn(this),this.i=null,o=On(this,o),Gc(this,o)&&(this.h-=this.g.get(o).length),this.g.set(o,[u]),this.h+=1,this},n.get=function(o,u){return o?(o=Kc(this,o),o.length>0?String(o[0]):u):u};function Qc(o,u,h){Hc(o,u),h.length>0&&(o.i=null,o.g.set(On(o,u),V(h)),o.h+=h.length)}n.toString=function(){if(this.i)return this.i;if(!this.g)return"";const o=[],u=Array.from(this.g.keys());for(let f=0;f<u.length;f++){var h=u[f];const A=mr(h);h=Kc(this,h);for(let P=0;P<h.length;P++){let x=A;h[P]!==""&&(x+="="+mr(h[P])),o.push(x)}}return this.i=o.join("&")};function Yc(o){const u=new Tr;return u.i=o.i,o.g&&(u.g=new Map(o.g),u.h=o.h),u}function On(o,u){return u=String(u),o.j&&(u=u.toLowerCase()),u}function Jf(o,u){u&&!o.j&&(fn(o),o.i=null,o.g.forEach(function(h,f){const A=f.toLowerCase();f!=A&&(Hc(this,f),Qc(this,A,h))},o)),o.j=u}function Xf(o,u){const h=new pr;if(a.Image){const f=new Image;f.onload=p(Dt,h,"TestLoadImage: loaded",!0,u,f),f.onerror=p(Dt,h,"TestLoadImage: error",!1,u,f),f.onabort=p(Dt,h,"TestLoadImage: abort",!1,u,f),f.ontimeout=p(Dt,h,"TestLoadImage: timeout",!1,u,f),a.setTimeout(function(){f.ontimeout&&f.ontimeout()},1e4),f.src=o}else u(!1)}function Zf(o,u){const h=new pr,f=new AbortController,A=setTimeout(()=>{f.abort(),Dt(h,"TestPingServer: timeout",!1,u)},1e4);fetch(o,{signal:f.signal}).then(P=>{clearTimeout(A),P.ok?Dt(h,"TestPingServer: ok",!0,u):Dt(h,"TestPingServer: server error",!1,u)}).catch(()=>{clearTimeout(A),Dt(h,"TestPingServer: error",!1,u)})}function Dt(o,u,h,f,A){try{A&&(A.onload=null,A.onerror=null,A.onabort=null,A.ontimeout=null),f(h)}catch{}}function ep(){this.g=new Lf}function Io(o){this.i=o.Sb||null,this.h=o.ab||!1}m(Io,Pc),Io.prototype.g=function(){return new ks(this.i,this.h)};function ks(o,u){ve.call(this),this.H=o,this.o=u,this.m=void 0,this.status=this.readyState=0,this.responseType=this.responseText=this.response=this.statusText="",this.onreadystatechange=null,this.A=new Headers,this.h=null,this.F="GET",this.D="",this.g=!1,this.B=this.j=this.l=null,this.v=new AbortController}m(ks,ve),n=ks.prototype,n.open=function(o,u){if(this.readyState!=0)throw this.abort(),Error("Error reopening a connection");this.F=o,this.D=u,this.readyState=1,vr(this)},n.send=function(o){if(this.readyState!=1)throw this.abort(),Error("need to call open() first. ");if(this.v.signal.aborted)throw this.abort(),Error("Request was aborted.");this.g=!0;const u={headers:this.A,method:this.F,credentials:this.m,cache:void 0,signal:this.v.signal};o&&(u.body=o),(this.H||a).fetch(new Request(this.D,u)).then(this.Pa.bind(this),this.ga.bind(this))},n.abort=function(){this.response=this.responseText="",this.A=new Headers,this.status=0,this.v.abort(),this.j&&this.j.cancel("Request was aborted.").catch(()=>{}),this.readyState>=1&&this.g&&this.readyState!=4&&(this.g=!1,Ir(this)),this.readyState=0},n.Pa=function(o){if(this.g&&(this.l=o,this.h||(this.status=this.l.status,this.statusText=this.l.statusText,this.h=o.headers,this.readyState=2,vr(this)),this.g&&(this.readyState=3,vr(this),this.g)))if(this.responseType==="arraybuffer")o.arrayBuffer().then(this.Na.bind(this),this.ga.bind(this));else if(typeof a.ReadableStream<"u"&&"body"in o){if(this.j=o.body.getReader(),this.o){if(this.responseType)throw Error('responseType must be empty for "streamBinaryChunks" mode responses.');this.response=[]}else this.response=this.responseText="",this.B=new TextDecoder;Jc(this)}else o.text().then(this.Oa.bind(this),this.ga.bind(this))};function Jc(o){o.j.read().then(o.Ma.bind(o)).catch(o.ga.bind(o))}n.Ma=function(o){if(this.g){if(this.o&&o.value)this.response.push(o.value);else if(!this.o){var u=o.value?o.value:new Uint8Array(0);(u=this.B.decode(u,{stream:!o.done}))&&(this.response=this.responseText+=u)}o.done?Ir(this):vr(this),this.readyState==3&&Jc(this)}},n.Oa=function(o){this.g&&(this.response=this.responseText=o,Ir(this))},n.Na=function(o){this.g&&(this.response=o,Ir(this))},n.ga=function(){this.g&&Ir(this)};function Ir(o){o.readyState=4,o.l=null,o.j=null,o.B=null,vr(o)}n.setRequestHeader=function(o,u){this.A.append(o,u)},n.getResponseHeader=function(o){return this.h&&this.h.get(o.toLowerCase())||""},n.getAllResponseHeaders=function(){if(!this.h)return"";const o=[],u=this.h.entries();for(var h=u.next();!h.done;)h=h.value,o.push(h[0]+": "+h[1]),h=u.next();return o.join(`\r
`)};function vr(o){o.onreadystatechange&&o.onreadystatechange.call(o)}Object.defineProperty(ks.prototype,"withCredentials",{get:function(){return this.m==="include"},set:function(o){this.m=o?"include":"same-origin"}});function Xc(o){let u="";return Rs(o,function(h,f){u+=f,u+=":",u+=h,u+=`\r
`}),u}function vo(o,u,h){e:{for(f in h){var f=!1;break e}f=!0}f||(h=Xc(h),typeof o=="string"?h!=null&&mr(h):te(o,u,h))}function oe(o){ve.call(this),this.headers=new Map,this.L=o||null,this.h=!1,this.g=null,this.D="",this.o=0,this.l="",this.j=this.B=this.v=this.A=!1,this.m=null,this.F="",this.H=!1}m(oe,ve);var tp=/^https?$/i,np=["POST","PUT"];n=oe.prototype,n.Fa=function(o){this.H=o},n.ea=function(o,u,h,f){if(this.g)throw Error("[goog.net.XhrIo] Object is active with another request="+this.D+"; newUri="+o);u=u?u.toUpperCase():"GET",this.D=o,this.l="",this.o=0,this.A=!1,this.h=!0,this.g=this.L?this.L.g():Dc.g(),this.g.onreadystatechange=w(d(this.Ca,this));try{this.B=!0,this.g.open(u,String(o),!0),this.B=!1}catch(P){Zc(this,P);return}if(o=h||"",h=new Map(this.headers),f)if(Object.getPrototypeOf(f)===Object.prototype)for(var A in f)h.set(A,f[A]);else if(typeof f.keys=="function"&&typeof f.get=="function")for(const P of f.keys())h.set(P,f.get(P));else throw Error("Unknown input type for opt_headers: "+String(f));f=Array.from(h.keys()).find(P=>P.toLowerCase()=="content-type"),A=a.FormData&&o instanceof a.FormData,!(Array.prototype.indexOf.call(np,u,void 0)>=0)||f||A||h.set("Content-Type","application/x-www-form-urlencoded;charset=utf-8");for(const[P,x]of h)this.g.setRequestHeader(P,x);this.F&&(this.g.responseType=this.F),"withCredentials"in this.g&&this.g.withCredentials!==this.H&&(this.g.withCredentials=this.H);try{this.m&&(clearTimeout(this.m),this.m=null),this.v=!0,this.g.send(o),this.v=!1}catch(P){Zc(this,P)}};function Zc(o,u){o.h=!1,o.g&&(o.j=!0,o.g.abort(),o.j=!1),o.l=u,o.o=5,eu(o),Ds(o)}function eu(o){o.A||(o.A=!0,Ce(o,"complete"),Ce(o,"error"))}n.abort=function(o){this.g&&this.h&&(this.h=!1,this.j=!0,this.g.abort(),this.j=!1,this.o=o||7,Ce(this,"complete"),Ce(this,"abort"),Ds(this))},n.N=function(){this.g&&(this.h&&(this.h=!1,this.j=!0,this.g.abort(),this.j=!1),Ds(this,!0)),oe.Z.N.call(this)},n.Ca=function(){this.u||(this.B||this.v||this.j?tu(this):this.Xa())},n.Xa=function(){tu(this)};function tu(o){if(o.h&&typeof i<"u"){if(o.v&&xt(o)==4)setTimeout(o.Ca.bind(o),0);else if(Ce(o,"readystatechange"),xt(o)==4){o.h=!1;try{const P=o.ca();e:switch(P){case 200:case 201:case 202:case 204:case 206:case 304:case 1223:var u=!0;break e;default:u=!1}var h;if(!(h=u)){var f;if(f=P===0){let x=String(o.D).match(zc)[1]||null;!x&&a.self&&a.self.location&&(x=a.self.location.protocol.slice(0,-1)),f=!tp.test(x?x.toLowerCase():"")}h=f}if(h)Ce(o,"complete"),Ce(o,"success");else{o.o=6;try{var A=xt(o)>2?o.g.statusText:""}catch{A=""}o.l=A+" ["+o.ca()+"]",eu(o)}}finally{Ds(o)}}}}function Ds(o,u){if(o.g){o.m&&(clearTimeout(o.m),o.m=null);const h=o.g;o.g=null,u||Ce(o,"ready");try{h.onreadystatechange=null}catch{}}}n.isActive=function(){return!!this.g};function xt(o){return o.g?o.g.readyState:0}n.ca=function(){try{return xt(this)>2?this.g.status:-1}catch{return-1}},n.la=function(){try{return this.g?this.g.responseText:""}catch{return""}},n.La=function(o){if(this.g){var u=this.g.responseText;return o&&u.indexOf(o)==0&&(u=u.substring(o.length)),Of(u)}};function nu(o){try{if(!o.g)return null;if("response"in o.g)return o.g.response;switch(o.F){case"":case"text":return o.g.responseText;case"arraybuffer":if("mozResponseArrayBuffer"in o.g)return o.g.mozResponseArrayBuffer}return null}catch{return null}}function rp(o){const u={};o=(o.g&&xt(o)>=2&&o.g.getAllResponseHeaders()||"").split(`\r
`);for(let f=0;f<o.length;f++){if(_(o[f]))continue;var h=qf(o[f]);const A=h[0];if(h=h[1],typeof h!="string")continue;h=h.trim();const P=u[A]||[];u[A]=P,P.push(h)}Cf(u,function(f){return f.join(", ")})}n.ya=function(){return this.o},n.Ha=function(){return typeof this.l=="string"?this.l:String(this.l)};function Ar(o,u,h){return h&&h.internalChannelParams&&h.internalChannelParams[o]||u}function ru(o){this.za=0,this.i=[],this.j=new pr,this.ba=this.na=this.J=this.W=this.g=this.wa=this.G=this.H=this.u=this.U=this.o=null,this.Ya=this.V=0,this.Sa=Ar("failFast",!1,o),this.F=this.C=this.v=this.m=this.l=null,this.X=!0,this.xa=this.K=-1,this.Y=this.A=this.D=0,this.Qa=Ar("baseRetryDelayMs",5e3,o),this.Za=Ar("retryDelaySeedMs",1e4,o),this.Ta=Ar("forwardChannelMaxRetries",2,o),this.va=Ar("forwardChannelRequestTimeoutMs",2e4,o),this.ma=o&&o.xmlHttpFactory||void 0,this.Ua=o&&o.Rb||void 0,this.Aa=o&&o.useFetchStreams||!1,this.O=void 0,this.L=o&&o.supportsCrossDomainXhr||!1,this.M="",this.h=new Fc(o&&o.concurrentRequestLimit),this.Ba=new ep,this.S=o&&o.fastHandshake||!1,this.R=o&&o.encodeInitMessageHeaders||!1,this.S&&this.R&&(this.R=!1),this.Ra=o&&o.Pb||!1,o&&o.ua&&this.j.ua(),o&&o.forceLongPolling&&(this.X=!1),this.aa=!this.S&&this.X&&o&&o.detectBufferingProxy||!1,this.ia=void 0,o&&o.longPollingTimeout&&o.longPollingTimeout>0&&(this.ia=o.longPollingTimeout),this.ta=void 0,this.T=0,this.P=!1,this.ja=this.B=null}n=ru.prototype,n.ka=8,n.I=1,n.connect=function(o,u,h,f){be(0),this.W=o,this.H=u||{},h&&f!==void 0&&(this.H.OSID=h,this.H.OAID=f),this.F=this.X,this.J=du(this,null,this.W),Os(this)};function Ao(o){if(su(o),o.I==3){var u=o.V++,h=rt(o.J);if(te(h,"SID",o.M),te(h,"RID",u),te(h,"TYPE","terminate"),Rr(o,h),u=new Nt(o,o.j,u),u.M=2,u.A=Ns(rt(h)),h=!1,a.navigator&&a.navigator.sendBeacon)try{h=a.navigator.sendBeacon(u.A.toString(),"")}catch{}!h&&a.Image&&(new Image().src=u.A,h=!0),h||(u.g=fu(u.j,null),u.g.ea(u.A)),u.F=Date.now(),bs(u)}hu(o)}function xs(o){o.g&&(Po(o),o.g.cancel(),o.g=null)}function su(o){xs(o),o.v&&(a.clearTimeout(o.v),o.v=null),Ls(o),o.h.cancel(),o.m&&(typeof o.m=="number"&&a.clearTimeout(o.m),o.m=null)}function Os(o){if(!Bc(o.h)&&!o.m){o.m=!0;var u=o.Ea;Te||g(),Ie||(Te(),Ie=!0),I.add(u,o),o.D=0}}function sp(o,u){return qc(o.h)>=o.h.j-(o.m?1:0)?!1:o.m?(o.i=u.G.concat(o.i),!0):o.I==1||o.I==2||o.D>=(o.Sa?0:o.Ta)?!1:(o.m=fr(d(o.Ea,o,u),lu(o,o.D)),o.D++,!0)}n.Ea=function(o){if(this.m)if(this.m=null,this.I==1){if(!o){this.V=Math.floor(Math.random()*1e5),o=this.V++;const A=new Nt(this,this.j,o);let P=this.o;if(this.U&&(P?(P=gc(P),yc(P,this.U)):P=this.U),this.u!==null||this.R||(A.J=P,P=null),this.S)e:{for(var u=0,h=0;h<this.i.length;h++){t:{var f=this.i[h];if("__data__"in f.map&&(f=f.map.__data__,typeof f=="string")){f=f.length;break t}f=void 0}if(f===void 0)break;if(u+=f,u>4096){u=h;break e}if(u===4096||h===this.i.length-1){u=h+1;break e}}u=1e3}else u=1e3;u=ou(this,A,u),h=rt(this.J),te(h,"RID",o),te(h,"CVER",22),this.G&&te(h,"X-HTTP-Session-Id",this.G),Rr(this,h),P&&(this.R?u="headers="+mr(Xc(P))+"&"+u:this.u&&vo(h,this.u,P)),wo(this.h,A),this.Ra&&te(h,"TYPE","init"),this.S?(te(h,"$req",u),te(h,"SID","null"),A.U=!0,go(A,h,null)):go(A,h,u),this.I=2}}else this.I==3&&(o?iu(this,o):this.i.length==0||Bc(this.h)||iu(this))};function iu(o,u){var h;u?h=u.l:h=o.V++;const f=rt(o.J);te(f,"SID",o.M),te(f,"RID",h),te(f,"AID",o.K),Rr(o,f),o.u&&o.o&&vo(f,o.u,o.o),h=new Nt(o,o.j,h,o.D+1),o.u===null&&(h.J=o.o),u&&(o.i=u.G.concat(o.i)),u=ou(o,h,1e3),h.H=Math.round(o.va*.5)+Math.round(o.va*.5*Math.random()),wo(o.h,h),go(h,f,u)}function Rr(o,u){o.H&&Rs(o.H,function(h,f){te(u,f,h)}),o.l&&Rs({},function(h,f){te(u,f,h)})}function ou(o,u,h){h=Math.min(o.i.length,h);const f=o.l?d(o.l.Ka,o.l,o):null;e:{var A=o.i;let W=-1;for(;;){const pe=["count="+h];W==-1?h>0?(W=A[0].g,pe.push("ofs="+W)):W=0:pe.push("ofs="+W);let ee=!0;for(let ge=0;ge<h;ge++){var P=A[ge].g;const st=A[ge].map;if(P-=W,P<0)W=Math.max(0,A[ge].g-100),ee=!1;else try{P="req"+P+"_"||"";try{var x=st instanceof Map?st:Object.entries(st);for(const[mn,Ot]of x){let Lt=Ot;c(Ot)&&(Lt=lo(Ot)),pe.push(P+mn+"="+encodeURIComponent(Lt))}}catch(mn){throw pe.push(P+"type="+encodeURIComponent("_badmap")),mn}}catch{f&&f(st)}}if(ee){x=pe.join("&");break e}}x=void 0}return o=o.i.splice(0,h),u.G=o,x}function au(o){if(!o.g&&!o.v){o.Y=1;var u=o.Da;Te||g(),Ie||(Te(),Ie=!0),I.add(u,o),o.A=0}}function Ro(o){return o.g||o.v||o.A>=3?!1:(o.Y++,o.v=fr(d(o.Da,o),lu(o,o.A)),o.A++,!0)}n.Da=function(){if(this.v=null,cu(this),this.aa&&!(this.P||this.g==null||this.T<=0)){var o=4*this.T;this.j.info("BP detection timer enabled: "+o),this.B=fr(d(this.Wa,this),o)}},n.Wa=function(){this.B&&(this.B=null,this.j.info("BP detection timeout reached."),this.j.info("Buffering proxy detected and switch to long-polling!"),this.F=!1,this.P=!0,be(10),xs(this),cu(this))};function Po(o){o.B!=null&&(a.clearTimeout(o.B),o.B=null)}function cu(o){o.g=new Nt(o,o.j,"rpc",o.Y),o.u===null&&(o.g.J=o.o),o.g.P=0;var u=rt(o.na);te(u,"RID","rpc"),te(u,"SID",o.M),te(u,"AID",o.K),te(u,"CI",o.F?"0":"1"),!o.F&&o.ia&&te(u,"TO",o.ia),te(u,"TYPE","xmlhttp"),Rr(o,u),o.u&&o.o&&vo(u,o.u,o.o),o.O&&(o.g.H=o.O);var h=o.g;o=o.ba,h.M=1,h.A=Ns(rt(u)),h.u=null,h.R=!0,Lc(h,o)}n.Va=function(){this.C!=null&&(this.C=null,xs(this),Ro(this),be(19))};function Ls(o){o.C!=null&&(a.clearTimeout(o.C),o.C=null)}function uu(o,u){var h=null;if(o.g==u){Ls(o),Po(o),o.g=null;var f=2}else if(Eo(o.h,u))h=u.G,$c(o.h,u),f=1;else return;if(o.I!=0){if(u.o)if(f==1){h=u.u?u.u.length:0,u=Date.now()-u.F;var A=o.D;f=Vs(),Ce(f,new Nc(f,h)),Os(o)}else au(o);else if(A=u.m,A==3||A==0&&u.X>0||!(f==1&&sp(o,u)||f==2&&Ro(o)))switch(h&&h.length>0&&(u=o.h,u.i=u.i.concat(h)),A){case 1:pn(o,5);break;case 4:pn(o,10);break;case 3:pn(o,6);break;default:pn(o,2)}}}function lu(o,u){let h=o.Qa+Math.floor(Math.random()*o.Za);return o.isActive()||(h*=2),h*u}function pn(o,u){if(o.j.info("Error code "+u),u==2){var h=d(o.bb,o),f=o.Ua;const A=!f;f=new kt(f||"//www.google.com/images/cleardot.gif"),a.location&&a.location.protocol=="http"||_r(f,"https"),Ns(f),A?Xf(f.toString(),h):Zf(f.toString(),h)}else be(2);o.I=0,o.l&&o.l.pa(u),hu(o),su(o)}n.bb=function(o){o?(this.j.info("Successfully pinged google.com"),be(2)):(this.j.info("Failed to ping google.com"),be(1))};function hu(o){if(o.I=0,o.ja=[],o.l){const u=jc(o.h);(u.length!=0||o.i.length!=0)&&(N(o.ja,u),N(o.ja,o.i),o.h.i.length=0,V(o.i),o.i.length=0),o.l.oa()}}function du(o,u,h){var f=h instanceof kt?rt(h):new kt(h);if(f.g!="")u&&(f.g=u+"."+f.g),yr(f,f.u);else{var A=a.location;f=A.protocol,u=u?u+"."+A.hostname:A.hostname,A=+A.port;const P=new kt(null);f&&_r(P,f),u&&(P.g=u),A&&yr(P,A),h&&(P.h=h),f=P}return h=o.G,u=o.wa,h&&u&&te(f,h,u),te(f,"VER",o.ka),Rr(o,f),f}function fu(o,u,h){if(u&&!o.L)throw Error("Can't create secondary domain capable XhrIo object.");return u=o.Aa&&!o.ma?new oe(new Io({ab:h})):new oe(o.ma),u.Fa(o.L),u}n.isActive=function(){return!!this.l&&this.l.isActive(this)};function pu(){}n=pu.prototype,n.ra=function(){},n.qa=function(){},n.pa=function(){},n.oa=function(){},n.isActive=function(){return!0},n.Ka=function(){};function Ms(){}Ms.prototype.g=function(o,u){return new Be(o,u)};function Be(o,u){ve.call(this),this.g=new ru(u),this.l=o,this.h=u&&u.messageUrlParams||null,o=u&&u.messageHeaders||null,u&&u.clientProtocolHeaderRequired&&(o?o["X-Client-Protocol"]="webchannel":o={"X-Client-Protocol":"webchannel"}),this.g.o=o,o=u&&u.initMessageHeaders||null,u&&u.messageContentType&&(o?o["X-WebChannel-Content-Type"]=u.messageContentType:o={"X-WebChannel-Content-Type":u.messageContentType}),u&&u.sa&&(o?o["X-WebChannel-Client-Profile"]=u.sa:o={"X-WebChannel-Client-Profile":u.sa}),this.g.U=o,(o=u&&u.Qb)&&!_(o)&&(this.g.u=o),this.A=u&&u.supportsCrossDomainXhr||!1,this.v=u&&u.sendRawJson||!1,(u=u&&u.httpSessionIdParam)&&!_(u)&&(this.g.G=u,o=this.h,o!==null&&u in o&&(o=this.h,u in o&&delete o[u])),this.j=new Ln(this)}m(Be,ve),Be.prototype.m=function(){this.g.l=this.j,this.A&&(this.g.L=!0),this.g.connect(this.l,this.h||void 0)},Be.prototype.close=function(){Ao(this.g)},Be.prototype.o=function(o){var u=this.g;if(typeof o=="string"){var h={};h.__data__=o,o=h}else this.v&&(h={},h.__data__=lo(o),o=h);u.i.push(new zf(u.Ya++,o)),u.I==3&&Os(u)},Be.prototype.N=function(){this.g.l=null,delete this.j,Ao(this.g),delete this.g,Be.Z.N.call(this)};function mu(o){ho.call(this),o.__headers__&&(this.headers=o.__headers__,this.statusCode=o.__status__,delete o.__headers__,delete o.__status__);var u=o.__sm__;if(u){e:{for(const h in u){o=h;break e}o=void 0}(this.i=o)&&(o=this.i,u=u!==null&&o in u?u[o]:void 0),this.data=u}else this.data=o}m(mu,ho);function gu(){fo.call(this),this.status=1}m(gu,fo);function Ln(o){this.g=o}m(Ln,pu),Ln.prototype.ra=function(){Ce(this.g,"a")},Ln.prototype.qa=function(o){Ce(this.g,new mu(o))},Ln.prototype.pa=function(o){Ce(this.g,new gu)},Ln.prototype.oa=function(){Ce(this.g,"b")},Ms.prototype.createWebChannel=Ms.prototype.g,Be.prototype.send=Be.prototype.o,Be.prototype.open=Be.prototype.m,Be.prototype.close=Be.prototype.close,rh=function(){return new Ms},nh=function(){return Vs()},th=hn,$o={jb:0,mb:1,nb:2,Hb:3,Mb:4,Jb:5,Kb:6,Ib:7,Gb:8,Lb:9,PROXY:10,NOPROXY:11,Eb:12,Ab:13,Bb:14,zb:15,Cb:16,Db:17,fb:18,eb:19,gb:20},Cs.NO_ERROR=0,Cs.TIMEOUT=8,Cs.HTTP_ERROR=6,Hs=Cs,kc.COMPLETE="complete",eh=kc,Sc.EventType=hr,hr.OPEN="a",hr.CLOSE="b",hr.ERROR="c",hr.MESSAGE="d",ve.prototype.listen=ve.prototype.J,br=Sc,oe.prototype.listenOnce=oe.prototype.K,oe.prototype.getLastError=oe.prototype.Ha,oe.prototype.getLastErrorCode=oe.prototype.ya,oe.prototype.getStatus=oe.prototype.ca,oe.prototype.getResponseJson=oe.prototype.La,oe.prototype.getResponseText=oe.prototype.la,oe.prototype.send=oe.prototype.ea,oe.prototype.setWithCredentials=oe.prototype.Fa,Zl=oe}).apply(typeof Fs<"u"?Fs:typeof self<"u"?self:typeof window<"u"?window:{});/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let er="12.19.0";function Cm(n){er=n}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 *//**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Sn=new ca("@firebase/firestore");function Mn(){return Sn.logLevel}function O(n,...e){if(Sn.logLevel<=Q.DEBUG){const t=e.map(la);Sn.debug(`Firestore (${er}): ${n}`,...t)}}function At(n,...e){if(Sn.logLevel<=Q.ERROR){const t=e.map(la);Sn.error(`Firestore (${er}): ${n}`,...t)}}function tt(n,...e){if(Sn.logLevel<=Q.WARN){const t=e.map(la);Sn.warn(`Firestore (${er}): ${n}`,...t)}}function la(n){if(typeof n=="string")return n;try{return function(t){return JSON.stringify(t)}(n)}catch{return n}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function B(n,e,t){let r="Unexpected state";typeof e=="string"?r=e:t=e,sh(n,r,t)}function sh(n,e,t){let r=`FIRESTORE (${er}) INTERNAL ASSERTION FAILED: ${e} (ID: ${n.toString(16)})`;if(t!==void 0)try{r+=" CONTEXT: "+JSON.stringify(t)}catch{r+=" CONTEXT: "+t}throw At(r),new Error(r)}function U(n,e,t,r){let s="Unexpected state";typeof t=="string"?s=t:r=t,n||sh(e,s,r)}function z(n,e){return n}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function bm(n){const e=typeof self<"u"&&(self.crypto||self.msCrypto),t=new Uint8Array(n);if(e&&typeof e.getRandomValues=="function")e.getRandomValues(t);else for(let r=0;r<n;r++)t[r]=Math.floor(256*Math.random());return t}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ha{static newId(){const e="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",t=62*Math.floor(4.129032258064516);let r="";for(;r.length<20;){const s=bm(40);for(let i=0;i<s.length;++i)r.length<20&&s[i]<t&&(r+=e.charAt(s[i]%62))}return r}}function K(n,e){return n<e?-1:n>e?1:0}function jo(n,e){const t=Math.min(n.length,e.length);for(let r=0;r<t;r++){const s=n.charAt(r),i=e.charAt(r);if(s!==i)return bo(s)===bo(i)?K(s,i):bo(s)?1:-1}return K(n.length,e.length)}const Nm=55296,km=57343;function bo(n){const e=n.charCodeAt(0);return e>=Nm&&e<=km}function Hn(n,e,t){return n.length===e.length&&n.every((r,s)=>t(r,e[s]))}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ne{constructor(e,t){this.comparator=e,this.root=t||Ee.EMPTY}insert(e,t){return new ne(this.comparator,this.root.insert(e,t,this.comparator).copy(null,null,Ee.BLACK,null,null))}remove(e){return new ne(this.comparator,this.root.remove(e,this.comparator).copy(null,null,Ee.BLACK,null,null))}get(e){let t=this.root;for(;!t.isEmpty();){const r=this.comparator(e,t.key);if(r===0)return t.value;r<0?t=t.left:r>0&&(t=t.right)}return null}indexOf(e){let t=0,r=this.root;for(;!r.isEmpty();){const s=this.comparator(e,r.key);if(s===0)return t+r.left.size;s<0?r=r.left:(t+=r.left.size+1,r=r.right)}return-1}isEmpty(){return this.root.isEmpty()}get size(){return this.root.size}minKey(){return this.root.minKey()}maxKey(){return this.root.maxKey()}inorderTraversal(e){return this.root.inorderTraversal(e)}forEach(e){this.inorderTraversal((t,r)=>(e(t,r),!1))}toString(){const e=[];return this.inorderTraversal((t,r)=>(e.push(`${t}:${r}`),!1)),`{${e.join(", ")}}`}reverseTraversal(e){return this.root.reverseTraversal(e)}getIterator(){return new Bs(this.root,null,this.comparator,!1)}getIteratorFrom(e){return new Bs(this.root,e,this.comparator,!1)}getReverseIterator(){return new Bs(this.root,null,this.comparator,!0)}getReverseIteratorFrom(e){return new Bs(this.root,e,this.comparator,!0)}}class Bs{constructor(e,t,r,s){this.isReverse=s,this.nodeStack=[];let i=1;for(;!e.isEmpty();)if(i=t?r(e.key,t):1,t&&s&&(i*=-1),i<0)e=this.isReverse?e.left:e.right;else{if(i===0){this.nodeStack.push(e);break}this.nodeStack.push(e),e=this.isReverse?e.right:e.left}}getNext(){let e=this.nodeStack.pop();const t={key:e.key,value:e.value};if(this.isReverse)for(e=e.left;!e.isEmpty();)this.nodeStack.push(e),e=e.right;else for(e=e.right;!e.isEmpty();)this.nodeStack.push(e),e=e.left;return t}hasNext(){return this.nodeStack.length>0}peek(){if(this.nodeStack.length===0)return null;const e=this.nodeStack[this.nodeStack.length-1];return{key:e.key,value:e.value}}}class Ee{constructor(e,t,r,s,i){this.key=e,this.value=t,this.color=r??Ee.RED,this.left=s??Ee.EMPTY,this.right=i??Ee.EMPTY,this.size=this.left.size+1+this.right.size}copy(e,t,r,s,i){return new Ee(e??this.key,t??this.value,r??this.color,s??this.left,i??this.right)}isEmpty(){return!1}inorderTraversal(e){return this.left.inorderTraversal(e)||e(this.key,this.value)||this.right.inorderTraversal(e)}reverseTraversal(e){return this.right.reverseTraversal(e)||e(this.key,this.value)||this.left.reverseTraversal(e)}min(){return this.left.isEmpty()?this:this.left.min()}minKey(){return this.min().key}maxKey(){return this.right.isEmpty()?this.key:this.right.maxKey()}insert(e,t,r){let s=this;const i=r(e,s.key);return s=i<0?s.copy(null,null,null,s.left.insert(e,t,r),null):i===0?s.copy(null,t,null,null,null):s.copy(null,null,null,null,s.right.insert(e,t,r)),s.fixUp()}removeMin(){if(this.left.isEmpty())return Ee.EMPTY;let e=this;return e.left.isRed()||e.left.left.isRed()||(e=e.moveRedLeft()),e=e.copy(null,null,null,e.left.removeMin(),null),e.fixUp()}remove(e,t){let r,s=this;if(t(e,s.key)<0)s.left.isEmpty()||s.left.isRed()||s.left.left.isRed()||(s=s.moveRedLeft()),s=s.copy(null,null,null,s.left.remove(e,t),null);else{if(s.left.isRed()&&(s=s.rotateRight()),s.right.isEmpty()||s.right.isRed()||s.right.left.isRed()||(s=s.moveRedRight()),t(e,s.key)===0){if(s.right.isEmpty())return Ee.EMPTY;r=s.right.min(),s=s.copy(r.key,r.value,null,null,s.right.removeMin())}s=s.copy(null,null,null,null,s.right.remove(e,t))}return s.fixUp()}isRed(){return this.color}fixUp(){let e=this;return e.right.isRed()&&!e.left.isRed()&&(e=e.rotateLeft()),e.left.isRed()&&e.left.left.isRed()&&(e=e.rotateRight()),e.left.isRed()&&e.right.isRed()&&(e=e.colorFlip()),e}moveRedLeft(){let e=this.colorFlip();return e.right.left.isRed()&&(e=e.copy(null,null,null,null,e.right.rotateRight()),e=e.rotateLeft(),e=e.colorFlip()),e}moveRedRight(){let e=this.colorFlip();return e.left.left.isRed()&&(e=e.rotateRight(),e=e.colorFlip()),e}rotateLeft(){const e=this.copy(null,null,Ee.RED,null,this.right.left);return this.right.copy(null,null,this.color,e,null)}rotateRight(){const e=this.copy(null,null,Ee.RED,this.left.right,null);return this.left.copy(null,null,this.color,null,e)}colorFlip(){const e=this.left.copy(null,null,!this.left.color,null,null),t=this.right.copy(null,null,!this.right.color,null,null);return this.copy(null,null,!this.color,e,t)}checkMaxDepth(){const e=this.check();return Math.pow(2,e)<=this.size+1}check(){if(this.isRed()&&this.left.isRed())throw B(43730,{key:this.key,value:this.value});if(this.right.isRed())throw B(14113,{key:this.key,value:this.value});const e=this.left.check();if(e!==this.right.check())throw B(27949);return e+(this.isRed()?0:1)}}Ee.EMPTY=null,Ee.RED=!0,Ee.BLACK=!1;Ee.EMPTY=new class{constructor(){this.size=0}get key(){throw B(57766)}get value(){throw B(16141)}get color(){throw B(16727)}get left(){throw B(29726)}get right(){throw B(36894)}copy(e,t,r,s,i){return this}insert(e,t,r){return new Ee(e,t)}remove(e,t){return this}isEmpty(){return!0}inorderTraversal(e){return!1}reverseTraversal(e){return!1}minKey(){return null}maxKey(){return null}isRed(){return!1}checkMaxDepth(){return!0}check(){return 0}};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class le{constructor(e){this.comparator=e,this.data=new ne(this.comparator)}has(e){return this.data.get(e)!==null}first(){return this.data.minKey()}last(){return this.data.maxKey()}get size(){return this.data.size}indexOf(e){return this.data.indexOf(e)}forEach(e){this.data.inorderTraversal((t,r)=>(e(t),!1))}forEachInRange(e,t){const r=this.data.getIteratorFrom(e[0]);for(;r.hasNext();){const s=r.getNext();if(this.comparator(s.key,e[1])>=0)return;t(s.key)}}forEachWhile(e,t){let r;for(r=t!==void 0?this.data.getIteratorFrom(t):this.data.getIterator();r.hasNext();)if(!e(r.getNext().key))return}firstAfterOrEqual(e){const t=this.data.getIteratorFrom(e);return t.hasNext()?t.getNext().key:null}getIterator(){return new Ru(this.data.getIterator())}getIteratorFrom(e){return new Ru(this.data.getIteratorFrom(e))}add(e){return this.copy(this.data.remove(e).insert(e,!0))}delete(e){return this.has(e)?this.copy(this.data.remove(e)):this}isEmpty(){return this.data.isEmpty()}unionWith(e){let t=this;return t.size<e.size&&(t=e,e=this),e.forEach(r=>{t=t.add(r)}),t}isEqual(e){if(!(e instanceof le)||this.size!==e.size)return!1;const t=this.data.getIterator(),r=e.data.getIterator();for(;t.hasNext();){const s=t.getNext().key,i=r.getNext().key;if(this.comparator(s,i)!==0)return!1}return!0}toArray(){const e=[];return this.forEach(t=>{e.push(t)}),e}toString(){const e=[];return this.forEach(t=>e.push(t)),"SortedSet("+e.toString()+")"}copy(e){const t=new le(this.comparator);return t.data=e,t}}class Ru{constructor(e){this.iter=e}getNext(){return this.iter.getNext().key}hasNext(){return this.iter.hasNext()}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const C={OK:"ok",CANCELLED:"cancelled",UNKNOWN:"unknown",INVALID_ARGUMENT:"invalid-argument",DEADLINE_EXCEEDED:"deadline-exceeded",NOT_FOUND:"not-found",ALREADY_EXISTS:"already-exists",PERMISSION_DENIED:"permission-denied",UNAUTHENTICATED:"unauthenticated",RESOURCE_EXHAUSTED:"resource-exhausted",FAILED_PRECONDITION:"failed-precondition",ABORTED:"aborted",OUT_OF_RANGE:"out-of-range",UNIMPLEMENTED:"unimplemented",INTERNAL:"internal",UNAVAILABLE:"unavailable",DATA_LOSS:"data-loss"};class D extends St{constructor(e,t){super(e,t),this.code=e,this.message=t,this.toString=()=>`${this.name}: [code=${this.code}]: ${this.message}`}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ot="__name__";class it{constructor(e,t,r){t===void 0?t=0:t>e.length&&B(637,{offset:t,range:e.length}),r===void 0?r=e.length-t:r>e.length-t&&B(1746,{length:r,range:e.length-t}),this.segments=e,this.offset=t,this.len=r}get length(){return this.len}isEqual(e){return it.comparator(this,e)===0}child(e){const t=this.segments.slice(this.offset,this.limit());return e instanceof it?e.forEach(r=>{t.push(r)}):t.push(e),this.construct(t)}limit(){return this.offset+this.length}popFirst(e){return e=e===void 0?1:e,this.construct(this.segments,this.offset+e,this.length-e)}popLast(){return this.construct(this.segments,this.offset,this.length-1)}firstSegment(){return this.segments[this.offset]}lastSegment(){return this.get(this.length-1)}get(e){return this.segments[this.offset+e]}isEmpty(){return this.length===0}isPrefixOf(e){if(e.length<this.length)return!1;for(let t=0;t<this.length;t++)if(this.get(t)!==e.get(t))return!1;return!0}isImmediateParentOf(e){if(this.length+1!==e.length)return!1;for(let t=0;t<this.length;t++)if(this.get(t)!==e.get(t))return!1;return!0}forEach(e){for(let t=this.offset,r=this.limit();t<r;t++)e(this.segments[t])}toArray(){return this.segments.slice(this.offset,this.limit())}static comparator(e,t){const r=Math.min(e.length,t.length);for(let s=0;s<r;s++){const i=it.compareSegments(e.get(s),t.get(s));if(i!==0)return i}return K(e.length,t.length)}static compareSegments(e,t){const r=it.isNumericId(e),s=it.isNumericId(t);return r&&!s?-1:!r&&s?1:r&&s?it.extractNumericId(e).compare(it.extractNumericId(t)):jo(e,t)}static isNumericId(e){return e.startsWith("__id")&&e.endsWith("__")}static extractNumericId(e){return Wt.fromString(e.substring(4,e.length-2))}}class X extends it{construct(e,t,r){return new X(e,t,r)}canonicalString(){return this.toArray().join("/")}toString(){return this.canonicalString()}toStringWithLeadingSlash(){return`/${this.canonicalString()}`}toUriEncodedString(){return this.toArray().map(encodeURIComponent).join("/")}static fromString(...e){const t=[];for(const r of e){if(r.indexOf("//")>=0)throw new D(C.INVALID_ARGUMENT,`Invalid segment (${r}). Paths must not contain // in them.`);t.push(...r.split("/").filter(s=>s.length>0))}return new X(t)}static emptyPath(){return new X([])}}const Dm=/^[_a-zA-Z][_a-zA-Z0-9]*$/;let We=class Un extends it{construct(e,t,r){return new Un(e,t,r)}static isValidIdentifier(e){return Dm.test(e)}canonicalString(){return this.toArray().map(e=>(e=e.replace(/\\/g,"\\\\").replace(/`/g,"\\`"),Un.isValidIdentifier(e)||(e="`"+e+"`"),e)).join(".")}toString(){return this.canonicalString()}isKeyField(){return this.length===1&&this.get(0)===ot}static keyField(){return new Un([ot])}static fromServerFormat(e){const t=[];let r="",s=0;const i=()=>{if(r.length===0)throw new D(C.INVALID_ARGUMENT,`Invalid field path (${e}). Paths must not be empty, begin with '.', end with '.', or contain '..'`);t.push(r),r=""};let a=!1;for(;s<e.length;){const c=e[s];if(c==="\\"){if(s+1===e.length)throw new D(C.INVALID_ARGUMENT,"Path has trailing escape character: "+e);const l=e[s+1];if(l!=="\\"&&l!=="."&&l!=="`")throw new D(C.INVALID_ARGUMENT,"Path has invalid escape sequence: "+e);r+=l,s+=2}else c==="`"?(a=!a,s++):c!=="."||a?(r+=c,s++):(i(),s++)}if(i(),a)throw new D(C.INVALID_ARGUMENT,"Unterminated ` in path: "+e);return new Un(t)}static emptyPath(){return new Un([])}};/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class je{constructor(e){this.fields=e,e.sort(We.comparator)}static empty(){return new je([])}unionWith(e){let t=new le(We.comparator);for(const r of this.fields)t=t.add(r);for(const r of e)t=t.add(r);return new je(t.toArray())}covers(e){for(const t of this.fields)if(t.isPrefixOf(e))return!0;return!1}isEqual(e){return Hn(this.fields,e.fields,(t,r)=>t.isEqual(r))}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ii(n){let e=0;for(const t in n)Object.prototype.hasOwnProperty.call(n,t)&&e++;return e}function cn(n,e){for(const t in n)Object.prototype.hasOwnProperty.call(n,t)&&e(t,n[t])}function xm(n,e){const t=[];for(const r in n)Object.prototype.hasOwnProperty.call(n,r)&&t.push(e(n[r],r,n));return t}function ih(n){for(const e in n)if(Object.prototype.hasOwnProperty.call(n,e))return!1;return!0}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class F{constructor(e){this.path=e}static fromPath(e){return new F(X.fromString(e))}static fromName(e){return new F(X.fromString(e).popFirst(5))}static empty(){return new F(X.emptyPath())}get collectionGroup(){return this.path.popLast().lastSegment()}hasCollectionId(e){return this.path.length>=2&&this.path.get(this.path.length-2)===e}getCollectionGroup(){return this.path.get(this.path.length-2)}getCollectionPath(){return this.path.popLast()}isEqual(e){return e!==null&&X.comparator(this.path,e.path)===0}toString(){return this.path.toString()}static comparator(e,t){return X.comparator(e.path,t.path)}static isDocumentKey(e){return e.length%2==0}static fromSegments(e){return new F(new X(e.slice()))}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function oh(n,e,t){if(!t)throw new D(C.INVALID_ARGUMENT,`Function ${n}() cannot be called with an empty ${e}.`)}function Om(n,e,t,r){if(e===!0&&r===!0)throw new D(C.INVALID_ARGUMENT,`${n} and ${t} cannot be used together.`)}function Pu(n){if(!F.isDocumentKey(n))throw new D(C.INVALID_ARGUMENT,`Invalid document reference. Document references must have an even number of segments, but ${n} has ${n.length}.`)}function Su(n){if(F.isDocumentKey(n))throw new D(C.INVALID_ARGUMENT,`Invalid collection reference. Collection references must have an odd number of segments, but ${n} has ${n.length}.`)}function hs(n){return typeof n=="object"&&n!==null&&(Object.getPrototypeOf(n)===Object.prototype||Object.getPrototypeOf(n)===null)}function Vi(n){if(n===void 0)return"undefined";if(n===null)return"null";if(typeof n=="string")return n.length>20&&(n=`${n.substring(0,20)}...`),JSON.stringify(n);if(typeof n=="number"||typeof n=="boolean")return""+n;if(typeof n=="object"){if(n instanceof Array)return"an array";{const e=function(r){return r.constructor?r.constructor.name:null}(n);return e?`a custom ${e} object`:"an object"}}return typeof n=="function"?"a function":B(12329,{type:typeof n})}function He(n,e){if("_delegate"in n&&(n=n._delegate),!(n instanceof e)){if(e.name===n.constructor.name)throw new D(C.INVALID_ARGUMENT,"Type does not match the expected instance. Did you pass a reference from a different Firestore SDK?");{const t=Vi(n);throw new D(C.INVALID_ARGUMENT,`Expected type '${e.name}', but it was: ${t}`)}}return n}function Lm(n,e){if(e<=0)throw new D(C.INVALID_ARGUMENT,`Function ${n}() requires a positive number, but it was: ${e}.`)}/**
 * @license
 * Copyright 2025 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ue(n,e){const t={typeString:n};return e&&(t.value=e),t}function ds(n,e){if(!hs(n))throw new D(C.INVALID_ARGUMENT,"JSON must be an object");let t;for(const r in e)if(e[r]){const s=e[r].typeString,i="value"in e[r]?{value:e[r].value}:void 0;if(!(r in n)){t=`JSON missing required field: '${r}'`;break}const a=n[r];if(s&&typeof a!==s){t=`JSON field '${r}' must be a ${s}.`;break}if(i!==void 0&&a!==i.value){t=`Expected '${r}' field to equal '${i.value}'`;break}}if(t)throw new D(C.INVALID_ARGUMENT,t);return!0}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Vu=-62135596800,Cu=1e6;class Z{static now(){return Z.fromMillis(Date.now())}static fromDate(e){return Z.fromMillis(e.getTime())}static fromMillis(e){const t=Math.floor(e/1e3),r=Math.floor((e-1e3*t)*Cu);return new Z(t,r)}static fromInstant(e){if(!e||typeof e.t!="bigint")throw new D(C.INVALID_ARGUMENT,"Invalid Temporal.Instant object provided.");return Z._fromEpochNanoseconds(e.t)}static _fromEpochNanoseconds(e){let t,r;if(e>=0n)t=Number(e/1000000000n),r=Number(e%1000000000n);else{const s=e%1000000000n;s===0n?(t=Number(e/1000000000n),r=0):(t=Number(e/1000000000n-1n),r=Number(s+1000000000n))}return new Z(t,r)}constructor(e,t){if(this.seconds=e,this.nanoseconds=t,t<0)throw new D(C.INVALID_ARGUMENT,"Timestamp nanoseconds out of range: "+t);if(t>=1e9)throw new D(C.INVALID_ARGUMENT,"Timestamp nanoseconds out of range: "+t);if(e<Vu)throw new D(C.INVALID_ARGUMENT,"Timestamp seconds out of range: "+e);if(e>=253402300800)throw new D(C.INVALID_ARGUMENT,"Timestamp seconds out of range: "+e)}toDate(){return new Date(this.toMillis())}toMillis(){return 1e3*this.seconds+this.nanoseconds/Cu}toInstant(){if(typeof Temporal>"u"||!Temporal.Instant)throw new D(C.FAILED_PRECONDITION,"The Temporal object is not available in the current environment.");const e=1000000000n*BigInt(this.seconds)+BigInt(this.nanoseconds);return Temporal.Instant.__PRIVATE_fromEpochNanoseconds(e)}_compareTo(e){return this.seconds===e.seconds?K(this.nanoseconds,e.nanoseconds):K(this.seconds,e.seconds)}isEqual(e){return e.seconds===this.seconds&&e.nanoseconds===this.nanoseconds}toString(){return"Timestamp(seconds="+this.seconds+", nanoseconds="+this.nanoseconds+")"}toJSON(){return{type:Z._jsonSchemaVersion,seconds:this.seconds,nanoseconds:this.nanoseconds}}static fromJSON(e){if(ds(e,Z._jsonSchema))return new Z(e.seconds,e.nanoseconds)}valueOf(){const e=this.seconds-Vu;return String(e).padStart(12,"0")+"."+String(this.nanoseconds).padStart(9,"0")}}Z._jsonSchemaVersion="firestore/timestamp/1.0",Z._jsonSchema={type:ue("string",Z._jsonSchemaVersion),seconds:ue("number"),nanoseconds:ue("number")};/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ah extends Error{constructor(){super(...arguments),this.name="Base64DecodeError"}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class de{constructor(e){this.binaryString=e}static fromBase64String(e){const t=function(s){try{return atob(s)}catch(i){throw typeof DOMException<"u"&&i instanceof DOMException?new ah("Invalid base64 string: "+i):i}}(e);return new de(t)}static fromUint8Array(e){const t=function(s){let i="";for(let a=0;a<s.length;++a)i+=String.fromCharCode(s[a]);return i}(e);return new de(t)}[Symbol.iterator](){let e=0;return{next:()=>e<this.binaryString.length?{value:this.binaryString.charCodeAt(e++),done:!1}:{value:void 0,done:!0}}}toBase64(){return function(t){return btoa(t)}(this.binaryString)}toUint8Array(){return function(t){const r=new Uint8Array(t.length);for(let s=0;s<t.length;s++)r[s]=t.charCodeAt(s);return r}(this.binaryString)}approximateByteSize(){return 2*this.binaryString.length}compareTo(e){return K(this.binaryString,e.binaryString)}isEqual(e){return this.binaryString===e.binaryString}}de.EMPTY_BYTE_STRING=new de("");const Mm=new RegExp(/^\d{4}-\d\d-\d\dT\d\d:\d\d:\d\d(?:\.(\d+))?Z$/);function Qt(n){if(U(!!n,39018),typeof n=="string"){let e=0;const t=Mm.exec(n);if(U(!!t,46558,{timestamp:n}),t[1]){let s=t[1];s=(s+"000000000").substr(0,9),e=Number(s)}const r=new Date(n);return{seconds:Math.floor(r.getTime()/1e3),nanos:e}}return{seconds:re(n.seconds),nanos:re(n.nanos)}}function re(n){return typeof n=="number"?n:typeof n=="string"?Number(n):0}function Yt(n){return typeof n=="string"?de.fromBase64String(n):de.fromUint8Array(n)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ch="server_timestamp",uh="__type__",lh="__previous_value__",hh="__local_write_time__";function Ci(n){var t,r;return((r=(((t=n==null?void 0:n.mapValue)==null?void 0:t.fields)||{})[uh])==null?void 0:r.stringValue)===ch}function fs(n){const e=n.mapValue.fields[lh];return Ci(e)?fs(e):e}function Gn(n){const e=Qt(n.mapValue.fields[hh].timestampValue);return new Z(e.seconds,e.nanos)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Um{constructor(e,t,r,s,i,a,c,l,d,p,m,w,V){this.databaseId=e,this.appId=t,this.persistenceKey=r,this.host=s,this.ssl=i,this.forceLongPolling=a,this.autoDetectLongPolling=c,this.longPollingOptions=l,this.useFetchStreams=d,this.isUsingEmulator=p,this.apiKey=m,this._customHeaders=w,this.grpcFlowControlWindow=V}}const oi="(default)";class Wr{constructor(e,t){this.projectId=e,this.database=t||oi}static empty(){return new Wr("","")}get isDefaultDatabase(){return this.database===oi}isEqual(e){return e instanceof Wr&&e.projectId===this.projectId&&e.database===this.database}}function Fm(n,e){if(!Object.prototype.hasOwnProperty.apply(n.options,["projectId"]))throw new D(C.INVALID_ARGUMENT,'"projectId" not provided in firebase.initializeApp.');return new Wr(n.options.projectId,e)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const da=-1;function bi(n){return n==null}function Hr(n){return n===0&&1/n==-1/0}function Bm(n){return typeof n=="number"&&Number.isInteger(n)&&!Hr(n)&&n<=Number.MAX_SAFE_INTEGER&&n>=Number.MIN_SAFE_INTEGER}function qm(n){return typeof n=="string"}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const dh="__type__",$m="__max__",qs={mapValue:{}},fh="__vector__",Gr="value",Kn={nullValue:"NULL_VALUE"},Me={booleanValue:!0},ye={booleanValue:!1};function fe(n){return"nullValue"in n?0:"booleanValue"in n?1:"integerValue"in n||"doubleValue"in n?2:"timestampValue"in n?3:"stringValue"in n?5:"bytesValue"in n?6:"referenceValue"in n?7:"geoPointValue"in n?8:"arrayValue"in n?9:"mapValue"in n?Ci(n)?4:jm(n)?9007199254740991:ai(n)?10:11:B(28295,{value:n})}function Ye(n,e,t){if(n===e)return!0;const r=fe(n);if(r!==fe(e))return!1;switch(r){case 0:case 9007199254740991:return!0;case 1:return n.booleanValue===e.booleanValue;case 4:return Gn(n).isEqual(Gn(e));case 3:return function(i,a){if(typeof i.timestampValue=="string"&&typeof a.timestampValue=="string"&&i.timestampValue.length===a.timestampValue.length)return i.timestampValue===a.timestampValue;const c=Qt(i.timestampValue),l=Qt(a.timestampValue);return c.seconds===l.seconds&&c.nanos===l.nanos}(n,e);case 5:return n.stringValue===e.stringValue;case 6:return function(i,a){return Yt(i.bytesValue).isEqual(Yt(a.bytesValue))}(n,e);case 7:return n.referenceValue===e.referenceValue;case 8:return function(i,a){return re(i.geoPointValue.latitude)===re(a.geoPointValue.latitude)&&re(i.geoPointValue.longitude)===re(a.geoPointValue.longitude)}(n,e);case 2:return function(i,a,c){if("integerValue"in i&&"integerValue"in a)return re(i.integerValue)===re(a.integerValue);let l,d;if("doubleValue"in i&&"doubleValue"in a)l=re(i.doubleValue),d=re(a.doubleValue);else{if(!(c!=null&&c.i))return!1;l=re(i.integerValue??i.doubleValue),d=re(a.integerValue??a.doubleValue)}return l===d?!!(c!=null&&c.o)||Hr(l)===Hr(d):!!(c===void 0||c.u)&&isNaN(l)&&isNaN(d)}(n,e,t);case 9:return Hn(n.arrayValue.values||[],e.arrayValue.values||[],(s,i)=>Ye(s,i,t));case 10:case 11:return function(i,a,c){const l=i.mapValue.fields||{},d=a.mapValue.fields||{};if(ii(l)!==ii(d))return!1;for(const p in l)if(l.hasOwnProperty(p)&&(d[p]===void 0||!Ye(l[p],d[p],c)))return!1;return!0}(n,e,t);default:return B(52216,{left:n})}}function Kr(n,e){return(n.values||[]).find(t=>Ye(t,e))!==void 0}function Ue(n,e){if(n===e)return 0;const t=fe(n),r=fe(e);if(t!==r)return K(t,r);switch(t){case 0:case 9007199254740991:return 0;case 1:return K(n.booleanValue,e.booleanValue);case 2:return function(i,a){const c=re(i.integerValue||i.doubleValue),l=re(a.integerValue||a.doubleValue);return c<l?-1:c>l?1:c===l?0:isNaN(c)?isNaN(l)?0:-1:1}(n,e);case 3:return bu(n.timestampValue,e.timestampValue);case 4:return bu(Gn(n),Gn(e));case 5:return jo(n.stringValue,e.stringValue);case 6:return function(i,a){const c=Yt(i),l=Yt(a);return c.compareTo(l)}(n.bytesValue,e.bytesValue);case 7:return function(i,a){const c=i.split("/"),l=a.split("/");for(let d=0;d<c.length&&d<l.length;d++){const p=K(c[d],l[d]);if(p!==0)return p}return K(c.length,l.length)}(n.referenceValue,e.referenceValue);case 8:return function(i,a){const c=K(re(i.latitude),re(a.latitude));return c!==0?c:K(re(i.longitude),re(a.longitude))}(n.geoPointValue,e.geoPointValue);case 9:return Nu(n.arrayValue,e.arrayValue);case 10:return function(i,a){var w,V,N,M;const c=i.fields||{},l=a.fields||{},d=(w=c[Gr])==null?void 0:w.arrayValue,p=(V=l[Gr])==null?void 0:V.arrayValue,m=K(((N=d==null?void 0:d.values)==null?void 0:N.length)||0,((M=p==null?void 0:p.values)==null?void 0:M.length)||0);return m!==0?m:Nu(d,p)}(n.mapValue,e.mapValue);case 11:return function(i,a){if(i===qs.mapValue&&a===qs.mapValue)return 0;if(i===qs.mapValue)return 1;if(a===qs.mapValue)return-1;const c=i.fields||{},l=Object.keys(c),d=a.fields||{},p=Object.keys(d);l.sort(),p.sort();for(let m=0;m<l.length&&m<p.length;++m){const w=jo(l[m],p[m]);if(w!==0)return w;const V=Ue(c[l[m]],d[p[m]]);if(V!==0)return V}return K(l.length,p.length)}(n.mapValue,e.mapValue);default:throw B(23264,{l:t})}}function bu(n,e){if(typeof n=="string"&&typeof e=="string"&&n.length===e.length)return K(n,e);const t=Qt(n),r=Qt(e),s=K(t.seconds,r.seconds);return s!==0?s:K(t.nanos,r.nanos)}function Nu(n,e){const t=n.values||[],r=e.values||[];for(let s=0;s<t.length&&s<r.length;++s){const i=Ue(t[s],r[s]);if(i!==void 0&&i!==0)return i}return K(t.length,r.length)}function Qn(n){return zo(n)}function zo(n){return"nullValue"in n?"null":"booleanValue"in n?""+n.booleanValue:"integerValue"in n?""+n.integerValue:"doubleValue"in n?""+n.doubleValue:"timestampValue"in n?function(t){const r=Qt(t);return`time(${r.seconds},${r.nanos})`}(n.timestampValue):"stringValue"in n?n.stringValue:"bytesValue"in n?function(t){return Yt(t).toBase64()}(n.bytesValue):"referenceValue"in n?function(t){return F.fromName(t).toString()}(n.referenceValue):"geoPointValue"in n?function(t){return`geo(${t.latitude},${t.longitude})`}(n.geoPointValue):"arrayValue"in n?function(t){let r="[",s=!0;for(const i of t.values||[])s?s=!1:r+=",",r+=zo(i);return r+"]"}(n.arrayValue):"mapValue"in n?function(t){const r=Object.keys(t.fields||{}).sort();let s="{",i=!0;for(const a of r)i?i=!1:s+=",",s+=`${a}:${zo(t.fields[a])}`;return s+"}"}(n.mapValue):B(61005,{value:n})}function Gs(n){switch(fe(n)){case 0:case 1:return 4;case 2:return 8;case 3:case 8:return 16;case 4:const e=fs(n);return e?16+Gs(e):16;case 5:return 2*n.stringValue.length;case 6:return Yt(n.bytesValue).approximateByteSize();case 7:return n.referenceValue.length;case 9:return function(r){return(r.values||[]).reduce((s,i)=>s+Gs(i),0)}(n.arrayValue);case 10:case 11:return function(r){let s=0;return cn(r.fields,(i,a)=>{s+=i.length+Gs(a)}),s}(n.mapValue);default:throw B(13486,{value:n})}}function ku(n,e){return{referenceValue:`projects/${n.projectId}/databases/${n.database}/documents/${e.path.canonicalString()}`}}function at(n){return!!n&&"integerValue"in n}function yn(n){return!!n&&"doubleValue"in n}function Jt(n){return at(n)||yn(n)}function Yn(n){return!!n&&"arrayValue"in n}function ze(n){return!!n&&"nullValue"in n}function Fe(n){return!!n&&"doubleValue"in n&&isNaN(Number(n.doubleValue))}function wn(n){return!!n&&"mapValue"in n}function ai(n){var t,r;return((r=(((t=n==null?void 0:n.mapValue)==null?void 0:t.fields)||{})[dh])==null?void 0:r.stringValue)===fh}function Wo(n){var e,t;return(t=(((e=n==null?void 0:n.mapValue)==null?void 0:e.fields)||{})[Gr])==null?void 0:t.arrayValue}function xr(n){if(n.geoPointValue)return{geoPointValue:{...n.geoPointValue}};if(n.timestampValue&&typeof n.timestampValue=="object")return{timestampValue:{...n.timestampValue}};if(n.mapValue){const e={mapValue:{fields:{}}};return cn(n.mapValue.fields,(t,r)=>e.mapValue.fields[t]=xr(r)),e}if(n.arrayValue){const e={arrayValue:{values:[]}};for(let t=0;t<(n.arrayValue.values||[]).length;++t)e.arrayValue.values[t]=xr(n.arrayValue.values[t]);return e}return{...n}}function jm(n){return(((n.mapValue||{}).fields||{}).__type__||{}).stringValue===$m}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ke{constructor(e){this.value=e}static empty(){return new ke({mapValue:{}})}field(e){if(e.isEmpty())return this.value;{let t=this.value;for(let r=0;r<e.length-1;++r)if(t=(t.mapValue.fields||{})[e.get(r)],!wn(t))return null;return t=(t.mapValue.fields||{})[e.lastSegment()],t||null}}set(e,t){this.getFieldsMap(e.popLast())[e.lastSegment()]=xr(t)}setAll(e){let t=We.emptyPath(),r={},s=[];e.forEach((a,c)=>{if(!t.isImmediateParentOf(c)){const l=this.getFieldsMap(t);this.applyChanges(l,r,s),r={},s=[],t=c.popLast()}a?r[c.lastSegment()]=xr(a):s.push(c.lastSegment())});const i=this.getFieldsMap(t);this.applyChanges(i,r,s)}delete(e){const t=this.field(e.popLast());wn(t)&&t.mapValue.fields&&delete t.mapValue.fields[e.lastSegment()]}isEqual(e){return Ye(this.value,e.value)}getFieldsMap(e){let t=this.value;t.mapValue.fields||(t.mapValue={fields:{}});for(let r=0;r<e.length;++r){let s=t.mapValue.fields[e.get(r)];wn(s)&&s.mapValue.fields||(s={mapValue:{fields:{}}},t.mapValue.fields[e.get(r)]=s),t=s}return t.mapValue.fields}applyChanges(e,t,r){cn(t,(s,i)=>e[s]=i);for(const s of r)delete e[s]}clone(){return new ke(xr(this.value))}}function ph(n){const e=[];return cn(n.fields,(t,r)=>{const s=new We([t]);if(wn(r)){const i=ph(r.mapValue).fields;if(i.length===0)e.push(s);else for(const a of i)e.push(s.child(a))}else e.push(s)}),new je(e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Ni(n,e){if(n.useProto3Json){if(isNaN(e))return{doubleValue:"NaN"};if(e===1/0)return{doubleValue:"Infinity"};if(e===-1/0)return{doubleValue:"-Infinity"}}return{doubleValue:Hr(e)?"-0":e}}function fa(n){return{integerValue:""+n}}function pa(n,e,t){return Bm(e)?fa(e):Ni(n,e)}/**
 * @license
 * Copyright 2018 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ki{constructor(){this._=void 0}}function zm(n,e,t){return n instanceof Qr?function(s,i){const a={fields:{[uh]:{stringValue:ch},[hh]:{timestampValue:{seconds:s.seconds,nanos:s.nanoseconds}}}};return i&&Ci(i)&&(i=fs(i)),i&&(a.fields[lh]=i),{mapValue:a}}(t,e):n instanceof Yr?gh(n,e):n instanceof Jr?_h(n,e):n instanceof Xr?function(s,i){const a=mh(s,i),c=li(a)+li(s.h);return at(a)&&at(s.h)?fa(c):Ni(s.serializer,c)}(n,e):n instanceof ci?function(s,i){return Du(s,i,Math.min)}(n,e):n instanceof ui?function(s,i){return Du(s,i,Math.max)}(n,e):void 0}function Wm(n,e,t){return n instanceof Yr?gh(n,e):n instanceof Jr?_h(n,e):t}function mh(n,e){return n instanceof Xr?Jt(e)?e:{integerValue:0}:null}class Qr extends ki{}class Yr extends ki{constructor(e){super(),this.elements=e}}function gh(n,e){const t=yh(e);for(const r of n.elements)t.some(s=>Ye(s,r))||t.push(r);return{arrayValue:{values:t}}}class Jr extends ki{constructor(e){super(),this.elements=e}}function _h(n,e){let t=yh(e);for(const r of n.elements)t=t.filter(s=>!Ye(s,r));return{arrayValue:{values:t}}}class ma extends ki{constructor(e,t){super(),this.serializer=e,this.h=t}}class Xr extends ma{}class ci extends ma{}class ui extends ma{}function Du(n,e,t){if(!Jt(e))return n.h;const r=t(li(e),li(n.h));return at(e)&&at(n.h)?fa(r):Ni(n.serializer,r)}function li(n){return re(n.integerValue||n.doubleValue)}function yh(n){return Yn(n)&&n.arrayValue.values?n.arrayValue.values.slice():[]}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Hm{constructor(e,t){this.field=e,this.transform=t}}function Gm(n,e){return n.field.isEqual(e.field)&&function(r,s){return r instanceof Yr&&s instanceof Yr||r instanceof Jr&&s instanceof Jr?Hn(r.elements,s.elements,Ye):r instanceof Xr&&s instanceof Xr||r instanceof ci&&s instanceof ci||r instanceof ui&&s instanceof ui?Ye(r.h,s.h):r instanceof Qr&&s instanceof Qr}(n.transform,e.transform)}class Km{constructor(e,t){this.version=e,this.transformResults=t}}class Ze{constructor(e,t){this.updateTime=e,this.exists=t}static none(){return new Ze}static exists(e){return new Ze(void 0,e)}static updateTime(e){return new Ze(e)}get isNone(){return this.updateTime===void 0&&this.exists===void 0}isEqual(e){return this.exists===e.exists&&(this.updateTime?!!e.updateTime&&this.updateTime.isEqual(e.updateTime):!e.updateTime)}}function Ks(n,e){return n.updateTime!==void 0?e.isFoundDocument()&&e.version.isEqual(n.updateTime):n.exists===void 0||n.exists===e.isFoundDocument()}class Di{}function Eh(n,e){if(!n.hasLocalMutations||e&&e.fields.length===0)return null;if(e===null)return n.isNoDocument()?new ga(n.key,Ze.none()):new ps(n.key,n.data,Ze.none());{const t=n.data,r=ke.empty();let s=new le(We.comparator);for(let i of e.fields)if(!s.has(i)){let a=t.field(i);a===null&&i.length>1&&(i=i.popLast(),a=t.field(i)),a===null?r.delete(i):r.set(i,a),s=s.add(i)}return new un(n.key,r,new je(s.toArray()),Ze.none())}}function Qm(n,e,t){n instanceof ps?function(s,i,a){const c=s.value.clone(),l=Ou(s.fieldTransforms,i,a.transformResults);c.setAll(l),i.convertToFoundDocument(a.version,c).setHasCommittedMutations()}(n,e,t):n instanceof un?function(s,i,a){if(!Ks(s.precondition,i))return void i.convertToUnknownDocument(a.version);const c=Ou(s.fieldTransforms,i,a.transformResults),l=i.data;l.setAll(wh(s)),l.setAll(c),i.convertToFoundDocument(a.version,l).setHasCommittedMutations()}(n,e,t):function(s,i,a){i.convertToNoDocument(a.version).setHasCommittedMutations()}(0,e,t)}function Or(n,e,t,r){return n instanceof ps?function(i,a,c,l){if(!Ks(i.precondition,a))return c;const d=i.value.clone(),p=Lu(i.fieldTransforms,l,a);return d.setAll(p),a.convertToFoundDocument(a.version,d).setHasLocalMutations(),null}(n,e,t,r):n instanceof un?function(i,a,c,l){if(!Ks(i.precondition,a))return c;const d=Lu(i.fieldTransforms,l,a),p=a.data;return p.setAll(wh(i)),p.setAll(d),a.convertToFoundDocument(a.version,p).setHasLocalMutations(),c===null?null:c.unionWith(i.fieldMask.fields).unionWith(i.fieldTransforms.map(m=>m.field))}(n,e,t,r):function(i,a,c){return Ks(i.precondition,a)?(a.convertToNoDocument(a.version).setHasLocalMutations(),null):c}(n,e,t)}function Ym(n,e){let t=null;for(const r of n.fieldTransforms){const s=e.data.field(r.field),i=mh(r.transform,s||null);i!=null&&(t===null&&(t=ke.empty()),t.set(r.field,i))}return t||null}function xu(n,e){return n.type===e.type&&!!n.key.isEqual(e.key)&&!!n.precondition.isEqual(e.precondition)&&!!function(r,s){return r===void 0&&s===void 0||!(!r||!s)&&Hn(r,s,(i,a)=>Gm(i,a))}(n.fieldTransforms,e.fieldTransforms)&&(n.type===0?n.value.isEqual(e.value):n.type!==1||n.data.isEqual(e.data)&&n.fieldMask.isEqual(e.fieldMask))}class ps extends Di{constructor(e,t,r,s=[]){super(),this.key=e,this.value=t,this.precondition=r,this.fieldTransforms=s,this.type=0}getFieldMask(){return null}}class un extends Di{constructor(e,t,r,s,i=[]){super(),this.key=e,this.data=t,this.fieldMask=r,this.precondition=s,this.fieldTransforms=i,this.type=1}getFieldMask(){return this.fieldMask}}function wh(n){const e=new Map;return n.fieldMask.fields.forEach(t=>{if(!t.isEmpty()){const r=n.data.field(t);e.set(t,r)}}),e}function Ou(n,e,t){const r=new Map;U(n.length===t.length,32656,{T:t.length,P:n.length});for(let s=0;s<t.length;s++){const i=n[s],a=i.transform,c=e.data.field(i.field);r.set(i.field,Wm(a,c,t[s]))}return r}function Lu(n,e,t){const r=new Map;for(const s of n){const i=s.transform,a=t.data.field(s.field);r.set(s.field,zm(i,a,e))}return r}class ga extends Di{constructor(e,t){super(),this.key=e,this.precondition=t,this.type=2,this.fieldTransforms=[]}getFieldMask(){return null}}class Jm extends Di{constructor(e,t){super(),this.key=e,this.precondition=t,this.type=3,this.fieldTransforms=[]}getFieldMask(){return null}}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class hi{constructor(e,t){this.position=e,this.inclusive=t}}function Mu(n,e,t){let r=0;for(let s=0;s<n.position.length;s++){const i=e[s],a=n.position[s];if(i.field.isKeyField()?r=F.comparator(F.fromName(a.referenceValue),t.key):r=Ue(a,t.data.field(i.field)),i.dir==="desc"&&(r*=-1),r!==0)break}return r}function Uu(n,e){if(n===null)return e===null;if(e===null||n.inclusive!==e.inclusive||n.position.length!==e.position.length)return!1;for(let t=0;t<n.position.length;t++)if(!Ye(n.position[t],e.position[t]))return!1;return!0}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Th{}class ce extends Th{constructor(e,t,r){super(),this.field=e,this.op=t,this.value=r}static create(e,t,r){return e.isKeyField()?t==="in"||t==="not-in"?this.createKeyFieldInFilter(e,t,r):new Zm(e,t,r):t==="array-contains"?new ng(e,r):t==="in"?new rg(e,r):t==="not-in"?new sg(e,r):t==="array-contains-any"?new ig(e,r):new ce(e,t,r)}static createKeyFieldInFilter(e,t,r){return t==="in"?new eg(e,r):new tg(e,r)}matches(e){const t=e.data.field(this.field);return this.op==="!="?t!==null&&t.nullValue===void 0&&this.matchesComparison(Ue(t,this.value)):t!==null&&fe(this.value)===fe(t)&&this.matchesComparison(Ue(t,this.value))}matchesComparison(e){switch(this.op){case"<":return e<0;case"<=":return e<=0;case"==":return e===0;case"!=":return e!==0;case">":return e>0;case">=":return e>=0;default:return B(47266,{operator:this.op})}}isInequality(){return["<","<=",">",">=","!=","not-in"].indexOf(this.op)>=0}getFlattenedFilters(){return[this]}getFilters(){return[this]}}class nt extends Th{constructor(e,t){super(),this.filters=e,this.op=t,this.I=null}static create(e,t){return new nt(e,t)}matches(e){return Ih(this)?this.filters.find(t=>!t.matches(e))===void 0:this.filters.find(t=>t.matches(e))!==void 0}getFlattenedFilters(){return this.I!==null||(this.I=this.filters.reduce((e,t)=>e.concat(t.getFlattenedFilters()),[])),this.I}getFilters(){return Object.assign([],this.filters)}}function Ih(n){return n.op==="and"}function vh(n){return Xm(n)&&Ih(n)}function Xm(n){for(const e of n.filters)if(e instanceof nt)return!1;return!0}function Ho(n){if(n instanceof ce)return n.field.canonicalString()+n.op.toString()+Qn(n.value);if(vh(n))return n.filters.map(e=>Ho(e)).join(",");{const e=n.filters.map(t=>Ho(t)).join(",");return`${n.op}(${e})`}}function Ah(n,e){return n instanceof ce?function(r,s){return s instanceof ce&&r.op===s.op&&r.field.isEqual(s.field)&&Ye(r.value,s.value)}(n,e):n instanceof nt?function(r,s){return s instanceof nt&&r.op===s.op&&r.filters.length===s.filters.length?r.filters.reduce((i,a,c)=>i&&Ah(a,s.filters[c]),!0):!1}(n,e):void B(19439)}function Rh(n){return n instanceof ce?function(t){return`${t.field.canonicalString()} ${t.op} ${Qn(t.value)}`}(n):n instanceof nt?function(t){return t.op.toString()+" {"+t.getFilters().map(Rh).join(" ,")+"}"}(n):"Filter"}class Zm extends ce{constructor(e,t,r){super(e,t,r),this.key=F.fromName(r.referenceValue)}matches(e){const t=F.comparator(e.key,this.key);return this.matchesComparison(t)}}class eg extends ce{constructor(e,t){super(e,"in",t),this.keys=Ph("in",t)}matches(e){return this.keys.some(t=>t.isEqual(e.key))}}class tg extends ce{constructor(e,t){super(e,"not-in",t),this.keys=Ph("not-in",t)}matches(e){return!this.keys.some(t=>t.isEqual(e.key))}}function Ph(n,e){var t;return(((t=e.arrayValue)==null?void 0:t.values)||[]).map(r=>F.fromName(r.referenceValue))}class ng extends ce{constructor(e,t){super(e,"array-contains",t)}matches(e){const t=e.data.field(this.field);return Yn(t)&&Kr(t.arrayValue,this.value)}}class rg extends ce{constructor(e,t){super(e,"in",t)}matches(e){const t=e.data.field(this.field);return t!==null&&Kr(this.value.arrayValue,t)}}class sg extends ce{constructor(e,t){super(e,"not-in",t)}matches(e){if(Kr(this.value.arrayValue,{nullValue:"NULL_VALUE"}))return!1;const t=e.data.field(this.field);return t!==null&&t.nullValue===void 0&&!Kr(this.value.arrayValue,t)}}class ig extends ce{constructor(e,t){super(e,"array-contains-any",t)}matches(e){const t=e.data.field(this.field);return!(!Yn(t)||!t.arrayValue.values)&&t.arrayValue.values.some(r=>Kr(this.value.arrayValue,r))}}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Zr{constructor(e,t="asc"){this.field=e,this.dir=t}}function og(n,e){return n.dir===e.dir&&n.field.isEqual(e.field)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class j{static fromTimestamp(e){return new j(e)}static min(){return new j(new Z(0,0))}static max(){return new j(new Z(253402300799,999999999))}constructor(e){this.timestamp=e}compareTo(e){return this.timestamp._compareTo(e.timestamp)}isEqual(e){return this.timestamp.isEqual(e.timestamp)}toMicroseconds(){return 1e6*this.timestamp.seconds+this.timestamp.nanoseconds/1e3}toString(){return"SnapshotVersion("+this.timestamp.toString()+")"}toTimestamp(){return this.timestamp}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Pe{constructor(e,t,r,s,i,a,c){this.key=e,this.documentType=t,this.version=r,this.readTime=s,this.createTime=i,this.data=a,this.documentState=c}static newInvalidDocument(e){return new Pe(e,0,j.min(),j.min(),j.min(),ke.empty(),0)}static newFoundDocument(e,t,r,s){return new Pe(e,1,t,j.min(),r,s,0)}static newNoDocument(e,t){return new Pe(e,2,t,j.min(),j.min(),ke.empty(),0)}static newUnknownDocument(e,t){return new Pe(e,3,t,j.min(),j.min(),ke.empty(),2)}convertToFoundDocument(e,t){return!this.createTime.isEqual(j.min())||this.documentType!==2&&this.documentType!==0||(this.createTime=e),this.version=e,this.documentType=1,this.data=t,this.documentState=0,this}convertToNoDocument(e){return this.version=e,this.documentType=2,this.data=ke.empty(),this.documentState=0,this}convertToUnknownDocument(e){return this.version=e,this.documentType=3,this.data=ke.empty(),this.documentState=2,this}setHasCommittedMutations(){return this.documentState=2,this}setHasLocalMutations(){return this.documentState=1,this.version=j.min(),this}setReadTime(e){return this.readTime=e,this}get hasLocalMutations(){return this.documentState===1}get hasCommittedMutations(){return this.documentState===2}get hasPendingWrites(){return this.hasLocalMutations||this.hasCommittedMutations}isValidDocument(){return this.documentType!==0}isFoundDocument(){return this.documentType===1}isNoDocument(){return this.documentType===2}isUnknownDocument(){return this.documentType===3}isEqual(e){return e instanceof Pe&&this.key.isEqual(e.key)&&this.version.isEqual(e.version)&&this.documentType===e.documentType&&this.documentState===e.documentState&&this.data.isEqual(e.data)}mutableCopy(){return new Pe(this.key,this.documentType,this.version,this.readTime,this.createTime,this.data.clone(),this.documentState)}toString(){return`Document(${this.key}, ${this.version}, ${JSON.stringify(this.data.value)}, {createTime: ${this.createTime}}), {documentType: ${this.documentType}}), {documentState: ${this.documentState}})`}}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const es=-1;function ag(n,e){const t=n.toTimestamp().seconds,r=n.toTimestamp().nanoseconds+1,s=j.fromTimestamp(r===1e9?new Z(t+1,0):new Z(t,r));return new Xt(s,F.empty(),e)}function cg(n){return new Xt(n.readTime,n.key,es)}class Xt{constructor(e,t,r){this.readTime=e,this.documentKey=t,this.largestBatchId=r}static min(){return new Xt(j.min(),F.empty(),es)}static max(){return new Xt(j.max(),F.empty(),es)}}function ug(n,e){let t=n.readTime.compareTo(e.readTime);return t!==0?t:(t=F.comparator(n.documentKey,e.documentKey),t!==0?t:K(n.largestBatchId,e.largestBatchId))}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class lg{constructor(e,t=null,r=[],s=[],i=null,a=null,c=null){this.path=e,this.collectionGroup=t,this.orderBy=r,this.filters=s,this.limit=i,this.startAt=a,this.endAt=c,this.R=null}}function Fu(n,e=null,t=[],r=[],s=null,i=null,a=null){return new lg(n,e,t,r,s,i,a)}function Sh(n){const e=z(n);if(e.R===null){let t=e.path.canonicalString();e.collectionGroup!==null&&(t+="|cg:"+e.collectionGroup),t+="|f:",t+=e.filters.map(r=>Ho(r)).join(","),t+="|ob:",t+=e.orderBy.map(r=>function(i){return i.field.canonicalString()+i.dir}(r)).join(","),bi(e.limit)||(t+="|l:",t+=e.limit),e.startAt&&(t+="|lb:",t+=e.startAt.inclusive?"b:":"a:",t+=e.startAt.position.map(r=>Qn(r)).join(",")),e.endAt&&(t+="|ub:",t+=e.endAt.inclusive?"a:":"b:",t+=e.endAt.position.map(r=>Qn(r)).join(",")),e.R=t}return e.R}function Vh(n,e){if(n.limit!==e.limit||n.orderBy.length!==e.orderBy.length)return!1;for(let t=0;t<n.orderBy.length;t++)if(!og(n.orderBy[t],e.orderBy[t]))return!1;if(n.filters.length!==e.filters.length)return!1;for(let t=0;t<n.filters.length;t++)if(!Ah(n.filters[t],e.filters[t]))return!1;return n.collectionGroup===e.collectionGroup&&!!n.path.isEqual(e.path)&&!!Uu(n.startAt,e.startAt)&&Uu(n.endAt,e.endAt)}function _n(n){return!!n.isCorePipeline}function Ch(n){return!!n.path&&F.isDocumentKey(n.path)&&n.collectionGroup===null&&n.filters.length===0}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class tr{constructor(e,t=null,r=[],s=[],i=null,a="F",c=null,l=null){this.path=e,this.collectionGroup=t,this.explicitOrderBy=r,this.filters=s,this.limit=i,this.limitType=a,this.startAt=c,this.endAt=l,this.A=null,this.V=null,this.m=null,this.startAt,this.endAt}}function hg(n,e,t,r,s,i,a,c){return new tr(n,e,t,r,s,i,a,c)}function xi(n){return new tr(n)}function Bu(n){return n.filters.length===0&&n.limit===null&&n.startAt==null&&n.endAt==null&&(n.explicitOrderBy.length===0||n.explicitOrderBy.length===1&&n.explicitOrderBy[0].field.isKeyField())}function dg(n){return F.isDocumentKey(n.path)&&n.collectionGroup===null&&n.filters.length===0}function bh(n){return n.collectionGroup!==null}function Lr(n){const e=z(n);if(e.A===null){e.A=[];const t=new Set;for(const i of e.explicitOrderBy)e.A.push(i),t.add(i.field.canonicalString());const r=e.explicitOrderBy.length>0?e.explicitOrderBy[e.explicitOrderBy.length-1].dir:"asc";(function(a){let c=new le(We.comparator);return a.filters.forEach(l=>{l.getFlattenedFilters().forEach(d=>{d.isInequality()&&(c=c.add(d.field))})}),c})(e).forEach(i=>{t.has(i.canonicalString())||i.isKeyField()||e.A.push(new Zr(i,r))}),t.has(We.keyField().canonicalString())||e.A.push(new Zr(We.keyField(),r))}return e.A}function ct(n){const e=z(n);return e.V||(e.V=fg(e,Lr(n))),e.V}function fg(n,e){if(n.limitType==="F")return Fu(n.path,n.collectionGroup,e,n.filters,n.limit,n.startAt,n.endAt);{e=e.map(s=>{const i=s.dir==="desc"?"asc":"desc";return new Zr(s.field,i)});const t=n.endAt?new hi(n.endAt.position,n.endAt.inclusive):null,r=n.startAt?new hi(n.startAt.position,n.startAt.inclusive):null;return Fu(n.path,n.collectionGroup,e,n.filters,n.limit,t,r)}}function Go(n,e){const t=n.filters.concat([e]);return new tr(n.path,n.collectionGroup,n.explicitOrderBy.slice(),t,n.limit,n.limitType,n.startAt,n.endAt)}function pg(n,e){const t=n.explicitOrderBy.concat([e]);return new tr(n.path,n.collectionGroup,t,n.filters.slice(),n.limit,n.limitType,n.startAt,n.endAt)}function di(n,e,t){return new tr(n.path,n.collectionGroup,n.explicitOrderBy.slice(),n.filters.slice(),e,t,n.startAt,n.endAt)}function mg(n,e){return Vh(ct(n),ct(e))&&n.limitType===e.limitType}function Mr(n){return`Query(target=${function(t){let r=t.path.canonicalString();return t.collectionGroup!==null&&(r+=" collectionGroup="+t.collectionGroup),t.filters.length>0&&(r+=`, filters: [${t.filters.map(s=>Rh(s)).join(", ")}]`),bi(t.limit)||(r+=", limit: "+t.limit),t.orderBy.length>0&&(r+=`, orderBy: [${t.orderBy.map(s=>function(a){return`${a.field.canonicalString()} (${a.dir})`}(s)).join(", ")}]`),t.startAt&&(r+=", startAt: ",r+=t.startAt.inclusive?"b:":"a:",r+=t.startAt.position.map(s=>Qn(s)).join(",")),t.endAt&&(r+=", endAt: ",r+=t.endAt.inclusive?"a:":"b:",r+=t.endAt.position.map(s=>Qn(s)).join(",")),`Target(${r})`}(ct(n))}; limitType=${n.limitType})`}function Oi(n,e){return e.isFoundDocument()&&function(r,s){const i=s.key.path;return r.collectionGroup!==null?s.key.hasCollectionId(r.collectionGroup)&&r.path.isPrefixOf(i):F.isDocumentKey(r.path)?r.path.isEqual(i):r.path.isImmediateParentOf(i)}(n,e)&&function(r,s){for(const i of Lr(r))if(!i.field.isKeyField()&&s.data.field(i.field)===null)return!1;return!0}(n,e)&&function(r,s){for(const i of r.filters)if(!i.matches(s))return!1;return!0}(n,e)&&function(r,s){return!(r.startAt&&!function(a,c,l){const d=Mu(a,c,l);return a.inclusive?d<=0:d<0}(r.startAt,Lr(r),s)||r.endAt&&!function(a,c,l){const d=Mu(a,c,l);return a.inclusive?d>=0:d>0}(r.endAt,Lr(r),s))}(n,e)}function _a(n){return(e,t)=>{let r=!1;for(const s of Lr(n)){const i=gg(s,e,t);if(i!==0)return i;r=r||s.field.isKeyField()}return 0}}function gg(n,e,t){const r=n.field.isKeyField()?F.comparator(e.key,t.key):function(i,a,c){const l=a.data.field(i),d=c.data.field(i);return l!==null&&d!==null?Ue(l,d):B(42886)}(n.field,e,t);switch(n.dir){case"asc":return r;case"desc":return-1*r;default:return B(19790,{direction:n.dir})}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class _g{constructor(e,t){this.count=e,this.unchangedNames=t}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var ae,Y;function yg(n){switch(n){case C.OK:return B(64938);case C.CANCELLED:case C.UNKNOWN:case C.DEADLINE_EXCEEDED:case C.RESOURCE_EXHAUSTED:case C.INTERNAL:case C.UNAVAILABLE:case C.UNAUTHENTICATED:return!1;case C.INVALID_ARGUMENT:case C.NOT_FOUND:case C.ALREADY_EXISTS:case C.PERMISSION_DENIED:case C.FAILED_PRECONDITION:case C.ABORTED:case C.OUT_OF_RANGE:case C.UNIMPLEMENTED:case C.DATA_LOSS:return!0;default:return B(15467,{code:n})}}function Nh(n){if(n===void 0)return At("GRPC error has no .code"),C.UNKNOWN;switch(n){case ae.OK:return C.OK;case ae.CANCELLED:return C.CANCELLED;case ae.UNKNOWN:return C.UNKNOWN;case ae.DEADLINE_EXCEEDED:return C.DEADLINE_EXCEEDED;case ae.RESOURCE_EXHAUSTED:return C.RESOURCE_EXHAUSTED;case ae.INTERNAL:return C.INTERNAL;case ae.UNAVAILABLE:return C.UNAVAILABLE;case ae.UNAUTHENTICATED:return C.UNAUTHENTICATED;case ae.INVALID_ARGUMENT:return C.INVALID_ARGUMENT;case ae.NOT_FOUND:return C.NOT_FOUND;case ae.ALREADY_EXISTS:return C.ALREADY_EXISTS;case ae.PERMISSION_DENIED:return C.PERMISSION_DENIED;case ae.FAILED_PRECONDITION:return C.FAILED_PRECONDITION;case ae.ABORTED:return C.ABORTED;case ae.OUT_OF_RANGE:return C.OUT_OF_RANGE;case ae.UNIMPLEMENTED:return C.UNIMPLEMENTED;case ae.DATA_LOSS:return C.DATA_LOSS;default:return B(39323,{code:n})}}(Y=ae||(ae={}))[Y.OK=0]="OK",Y[Y.CANCELLED=1]="CANCELLED",Y[Y.UNKNOWN=2]="UNKNOWN",Y[Y.INVALID_ARGUMENT=3]="INVALID_ARGUMENT",Y[Y.DEADLINE_EXCEEDED=4]="DEADLINE_EXCEEDED",Y[Y.NOT_FOUND=5]="NOT_FOUND",Y[Y.ALREADY_EXISTS=6]="ALREADY_EXISTS",Y[Y.PERMISSION_DENIED=7]="PERMISSION_DENIED",Y[Y.UNAUTHENTICATED=16]="UNAUTHENTICATED",Y[Y.RESOURCE_EXHAUSTED=8]="RESOURCE_EXHAUSTED",Y[Y.FAILED_PRECONDITION=9]="FAILED_PRECONDITION",Y[Y.ABORTED=10]="ABORTED",Y[Y.OUT_OF_RANGE=11]="OUT_OF_RANGE",Y[Y.UNIMPLEMENTED=12]="UNIMPLEMENTED",Y[Y.INTERNAL=13]="INTERNAL",Y[Y.UNAVAILABLE=14]="UNAVAILABLE",Y[Y.DATA_LOSS=15]="DATA_LOSS";/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Nn{constructor(e,t){this.mapKeyFn=e,this.equalsFn=t,this.inner={},this.innerSize=0}get(e){const t=this.mapKeyFn(e),r=this.inner[t];if(r!==void 0){for(const[s,i]of r)if(this.equalsFn(s,e))return i}}has(e){return this.get(e)!==void 0}set(e,t){const r=this.mapKeyFn(e),s=this.inner[r];if(s===void 0)return this.inner[r]=[[e,t]],void this.innerSize++;for(let i=0;i<s.length;i++)if(this.equalsFn(s[i][0],e))return void(s[i]=[e,t]);s.push([e,t]),this.innerSize++}delete(e){const t=this.mapKeyFn(e),r=this.inner[t];if(r===void 0)return!1;for(let s=0;s<r.length;s++)if(this.equalsFn(r[s][0],e))return r.length===1?delete this.inner[t]:r.splice(s,1),this.innerSize--,!0;return!1}forEach(e){cn(this.inner,(t,r)=>{for(const[s,i]of r)e(s,i)})}isEmpty(){return ih(this.inner)}size(){return this.innerSize}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Eg=new ne(F.comparator);function Oe(){return Eg}const kh=new ne(F.comparator);function Fn(...n){let e=kh;for(const t of n)e=e.insert(t.key,t);return e}function Dh(n){let e=kh;return n.forEach((t,r)=>e=e.insert(t,r.overlayedDocument)),e}function Ut(){return Ur()}function xh(){return Ur()}function Ur(){return new Nn(n=>n.toString(),(n,e)=>n.isEqual(e))}const wg=new ne(F.comparator),Tg=new le(F.comparator);function G(...n){let e=Tg;for(const t of n)e=e.add(t);return e}const Ig=new le(K);function vg(){return Ig}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Ag(){return new TextEncoder}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Rg=new Wt([4294967295,4294967295],0);function qu(n){const e=Ag().encode(n),t=new Xl;return t.update(e),new Uint8Array(t.digest())}function $u(n){const e=new DataView(n.buffer),t=e.getUint32(0,!0),r=e.getUint32(4,!0),s=e.getUint32(8,!0),i=e.getUint32(12,!0);return[new Wt([t,r],0),new Wt([s,i],0)]}class ya{constructor(e,t,r){if(this.bitmap=e,this.padding=t,this.hashCount=r,t<0||t>=8)throw new Nr(`Invalid padding: ${t}`);if(r<0)throw new Nr(`Invalid hash count: ${r}`);if(e.length>0&&this.hashCount===0)throw new Nr(`Invalid hash count: ${r}`);if(e.length===0&&t!==0)throw new Nr(`Invalid padding when bitmap length is 0: ${t}`);this.p=8*e.length-t,this.S=Wt.fromNumber(this.p)}v(e,t,r){let s=e.add(t.multiply(Wt.fromNumber(r)));return s.compare(Rg)===1&&(s=new Wt([s.getBits(0),s.getBits(1)],0)),s.modulo(this.S).toNumber()}D(e){return!!(this.bitmap[Math.floor(e/8)]&1<<e%8)}mightContain(e){if(this.p===0)return!1;const t=qu(e),[r,s]=$u(t);for(let i=0;i<this.hashCount;i++){const a=this.v(r,s,i);if(!this.D(a))return!1}return!0}static create(e,t,r){const s=e%8==0?0:8-e%8,i=new Uint8Array(Math.ceil(e/8)),a=new ya(i,s,t);return r.forEach(c=>a.insert(c)),a}insert(e){if(this.p===0)return;const t=qu(e),[r,s]=$u(t);for(let i=0;i<this.hashCount;i++){const a=this.v(r,s,i);this.C(a)}}C(e){const t=Math.floor(e/8),r=e%8;this.bitmap[t]|=1<<r}}class Nr extends Error{constructor(){super(...arguments),this.name="BloomFilterError"}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ms{constructor(e,t,r,s,i,a){this.snapshotVersion=e,this.targetChanges=t,this.targetMismatches=r,this.documentUpdates=s,this.augmentedDocumentUpdates=i,this.resolvedLimboDocuments=a}static createSynthesizedRemoteEventForCurrentChange(e,t,r){const s=new Map;return s.set(e,gs.createSynthesizedTargetChangeForCurrentChange(e,t,r)),new ms(j.min(),s,new ne(K),Oe(),Oe(),G())}}class gs{constructor(e,t,r,s,i){this.resumeToken=e,this.current=t,this.addedDocuments=r,this.modifiedDocuments=s,this.removedDocuments=i}static createSynthesizedTargetChangeForCurrentChange(e,t,r){return new gs(r,t,G(),G(),G())}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Qs{constructor(e,t,r,s){this.F=e,this.removedTargetIds=t,this.key=r,this.O=s}}class Oh{constructor(e,t){this.targetId=e,this.M=t}}class Lh{constructor(e,t,r=de.EMPTY_BYTE_STRING,s=null){this.state=e,this.targetIds=t,this.resumeToken=r,this.cause=s}}class ju{constructor(e){this.targetId=e,this.N=0,this.L=zu(),this.B=de.EMPTY_BYTE_STRING,this.U=!1,this.k=!0}get current(){return this.U}get resumeToken(){return this.B}get q(){return this.N!==0}get $(){return this.k}K(e){e.approximateByteSize()>0&&(this.k=!0,this.B=e)}W(){let e=G(),t=G(),r=G();return this.L.forEach((s,i)=>{switch(i){case 0:e=e.add(s);break;case 2:t=t.add(s);break;case 1:r=r.add(s);break;default:B(38017,{changeType:i})}}),new gs(this.B,this.U,e,t,r)}G(){this.k=!1,this.L=zu()}j(e,t){this.k=!0,this.L=this.L.insert(e,t)}H(e){this.k=!0,this.L=this.L.remove(e)}J(){this.N+=1}Y(){this.N-=1,U(this.N>=0,3241,{N:this.N,targetId:this.targetId})}Z(){this.k=!0,this.U=!0}}const Pr="WatchChangeAggregator";class Pg{constructor(e){this.X=e,this.ee=new Map,this.te=Oe(),this.ne=$s(),this.re=Oe(),this.ie=$s(),this.se=new ne(K)}_e(e){for(const t of e.F)e.O&&e.O.isFoundDocument()?this.oe(t,e.O):this.ae(t,e.key,e.O);for(const t of e.removedTargetIds)this.ae(t,e.key,e.O)}ue(e){this.forEachTarget(e,t=>{const r=this.ee.get(t);if(r)switch(e.state){case 0:this.ce(t)&&r.K(e.resumeToken);break;case 1:r.Y(),r.q||r.G(),r.K(e.resumeToken);break;case 2:r.Y(),r.q||this.removeTarget(t);break;case 3:this.ce(t)&&(r.Z(),r.K(e.resumeToken));break;case 4:this.ce(t)&&(this.le(t),r.K(e.resumeToken));break;default:B(56790,{state:e.state})}else O(Pr,`handleTargetChange received targetChange for untracked target ID (${t}) with state (${e.state})`)})}forEachTarget(e,t){e.targetIds.length>0?e.targetIds.forEach(t):this.ee.forEach((r,s)=>{this.ce(s)&&t(s)})}Ee(e){var t;return _n(e)?e.getPipelineSourceType()==="documents"&&((t=e.getPipelineDocuments())==null?void 0:t.length)===1:Ch(e)}he(e){const t=e.targetId,r=e.M.count,s=this.Te(t);if(s){const i=s.target;if(this.Ee(i))if(r===0){const a=new F(_n(i)?X.fromString(i.getPipelineDocuments()[0]):i.path);this.ae(t,a,Pe.newNoDocument(a,j.min()))}else U(r===1,20013,"Single document existence filter with count: "+r);else{const a=this.Pe(t);if(a!==r){const c=this.Ie(e),l=c?this.Re(c,e,a):1;if(l!==0){this.le(t);const d=l===2?"TargetPurposeExistenceFilterMismatchBloom":"TargetPurposeExistenceFilterMismatch";this.se=this.se.insert(t,d)}}}}}Ie(e){const t=e.M.unchangedNames;if(!t||!t.bits)return null;const{bits:{bitmap:r="",padding:s=0},hashCount:i=0}=t;let a,c;try{a=Yt(r).toUint8Array()}catch(l){if(l instanceof ah)return tt("Decoding the base64 bloom filter in existence filter failed ("+l.message+"); ignoring the bloom filter and falling back to full re-query."),null;throw l}try{c=new ya(a,s,i)}catch(l){return tt(l instanceof Nr?"BloomFilter error: ":"Applying bloom filter failed: ",l),null}return c.p===0?null:c}Re(e,t,r){return t.M.count===r-this.de(e,t.targetId)?0:2}de(e,t){const r=this.X.getRemoteKeysForTarget(t);let s=0;return r.forEach(i=>{const a=this.X.Ve(),c=`projects/${a.projectId}/databases/${a.database}/documents/${i.path.canonicalString()}`;e.mightContain(c)||(this.ae(t,i,null),s++)}),s}fe(e){const t=new Map;this.ee.forEach((i,a)=>{const c=this.Te(a);if(c){if(i.current&&this.Ee(c.target)){const l=_n(c.target)?X.fromString(c.target.getPipelineDocuments()[0]):c.target.path,d=new F(l);this.me(d).has(a)||this.pe(a,d)||this.ae(a,d,Pe.newNoDocument(d,e))}i.$&&(t.set(a,i.W()),i.G())}});let r=G();this.ie.forEach((i,a)=>{let c=!0;a.forEachWhile(l=>{const d=this.Te(l);return!d||d.purpose==="TargetPurposeLimboResolution"||(c=!1,!1)}),c&&(r=r.add(i))}),this.te.forEach((i,a)=>a.setReadTime(e)),this.re.forEach((i,a)=>a.setReadTime(e));const s=new ms(e,t,this.se,this.te,this.re,r);return this.te=Oe(),this.ne=$s(),this.re=Oe(),this.ie=$s(),this.se=new ne(K),s}oe(e,t){const r=this.ee.get(e);if(!r||!this.ce(e))return void O(Pr,`addDocumentToTarget received document for unknown inactive target (${e})`);const s=this.pe(e,t.key)?2:0;r.j(t.key,s),_n(this.Te(e).target)&&this.Te(e).target.getPipelineFlavor()!=="exact"?this.re=this.re.insert(t.key,t):this.te=this.te.insert(t.key,t),this.ne=this.ne.insert(t.key,this.me(t.key).add(e)),this.ie=this.ie.insert(t.key,this.ge(t.key).add(e))}ae(e,t,r){const s=this.ee.get(e);s&&this.ce(e)?(this.pe(e,t)?s.j(t,1):s.H(t),this.ie=this.ie.insert(t,this.ge(t).delete(e)),this.ie=this.ie.insert(t,this.ge(t).add(e)),r&&(_n(this.Te(e).target)&&this.Te(e).target.getPipelineFlavor()!=="exact"?this.re=this.re.insert(t,r):this.te=this.te.insert(t,r))):O(Pr,`removeDocumentFromTarget received document for unknown or inactive target (${e})`)}removeTarget(e){this.ee.delete(e)}Pe(e){const t=this.ee.get(e);if(!t)return 0;const r=t.W();return this.X.getRemoteKeysForTarget(e).size+r.addedDocuments.size-r.removedDocuments.size}J(e){let t=this.ee.get(e);t||(O(Pr,`recordPendingTargetRequest set up tracking for target ID ${e}`),t=new ju(e),this.ee.set(e,t)),t.J()}ge(e){let t=this.ie.get(e);return t||(t=new le(K),this.ie=this.ie.insert(e,t)),t}me(e){let t=this.ne.get(e);return t||(t=new le(K),this.ne=this.ne.insert(e,t)),t}ce(e){const t=this.Te(e)!==null;return t||O(Pr,"Detected inactive target",e),t}Te(e){const t=this.ee.get(e);return t===void 0||t.q?null:this.X.ye(e)}le(e){this.ee.set(e,new ju(e)),this.X.getRemoteKeysForTarget(e).forEach(t=>{this.ae(e,t,null)})}pe(e,t){return this.X.getRemoteKeysForTarget(e).has(t)}}function $s(){return new ne(F.comparator)}function zu(){return new ne(F.comparator)}const Sg={asc:"ASCENDING",desc:"DESCENDING"},Vg={"<":"LESS_THAN","<=":"LESS_THAN_OR_EQUAL",">":"GREATER_THAN",">=":"GREATER_THAN_OR_EQUAL","==":"EQUAL","!=":"NOT_EQUAL","array-contains":"ARRAY_CONTAINS",in:"IN","not-in":"NOT_IN","array-contains-any":"ARRAY_CONTAINS_ANY"},Cg={and:"AND",or:"OR"};class bg{constructor(e,t){this.databaseId=e,this.useProto3Json=t}}function Ko(n,e){return n.useProto3Json||bi(e)?e:{value:e}}function Fr(n,e){return n.useProto3Json?`${new Date(1e3*e.seconds).toISOString().replace(/\.\d*/,"").replace("Z","")}.${("000000000"+e.nanoseconds).slice(-9)}Z`:{seconds:""+e.seconds,nanos:e.nanoseconds}}function Ea(n){const e=Qt(n);return new Z(e.seconds,e.nanos)}function Mh(n,e){return n.useProto3Json?e.toBase64():e.toUint8Array()}function Ys(n,e){return Fr(n,e.toTimestamp())}function ut(n){return U(!!n,49232),j.fromTimestamp(Ea(n))}function wa(n,e){return Qo(n,e).canonicalString()}function Qo(n,e){const t=function(s){return new X(["projects",s.projectId,"databases",s.database])}(n).child("documents");return e===void 0?t:t.child(e)}function Uh(n){const e=X.fromString(n);return U(jh(e),10190,{key:e.toString()}),e}function fi(n,e){return wa(n.databaseId,e.path)}function No(n,e){const t=Uh(e);if(t.get(1)!==n.databaseId.projectId)throw new D(C.INVALID_ARGUMENT,"Tried to deserialize key from different project: "+t.get(1)+" vs "+n.databaseId.projectId);if(t.get(3)!==n.databaseId.database)throw new D(C.INVALID_ARGUMENT,"Tried to deserialize key from different database: "+t.get(3)+" vs "+n.databaseId.database);return new F(Bh(t))}function Fh(n,e){return wa(n.databaseId,e)}function Ng(n){const e=Uh(n);return e.length===4?X.emptyPath():Bh(e)}function Yo(n){return new X(["projects",n.databaseId.projectId,"databases",n.databaseId.database]).canonicalString()}function Bh(n){return U(n.length>4&&n.get(4)==="documents",29091,{key:n.toString()}),n.popFirst(5)}function Wu(n,e,t){return{name:fi(n,e),fields:t.value.mapValue.fields}}function kg(n,e){let t;if("targetChange"in e){e.targetChange;const r=function(d){return d==="NO_CHANGE"?0:d==="ADD"?1:d==="REMOVE"?2:d==="CURRENT"?3:d==="RESET"?4:B(39313,{state:d})}(e.targetChange.targetChangeType||"NO_CHANGE"),s=e.targetChange.targetIds||[],i=function(d,p){return d.useProto3Json?(U(p===void 0||typeof p=="string",58123),de.fromBase64String(p||"")):(U(p===void 0||p instanceof Buffer||p instanceof Uint8Array,16193),de.fromUint8Array(p||new Uint8Array))}(n,e.targetChange.resumeToken),a=e.targetChange.cause,c=a&&function(d){const p=d.code===void 0?C.UNKNOWN:Nh(d.code);return new D(p,d.message||"")}(a);t=new Lh(r,s,i,c||null)}else if("documentChange"in e){e.documentChange;const r=e.documentChange;r.document,r.document.name,r.document.updateTime;const s=No(n,r.document.name),i=ut(r.document.updateTime),a=r.document.createTime?ut(r.document.createTime):j.min(),c=new ke({mapValue:{fields:r.document.fields}}),l=Pe.newFoundDocument(s,i,a,c),d=r.targetIds||[],p=r.removedTargetIds||[];t=new Qs(d,p,l.key,l)}else if("documentDelete"in e){e.documentDelete;const r=e.documentDelete;r.document;const s=No(n,r.document),i=r.readTime?ut(r.readTime):j.min(),a=Pe.newNoDocument(s,i),c=r.removedTargetIds||[];t=new Qs([],c,a.key,a)}else if("documentRemove"in e){e.documentRemove;const r=e.documentRemove;r.document;const s=No(n,r.document),i=r.removedTargetIds||[];t=new Qs([],i,s,null)}else{if(!("filter"in e))return B(11601,{we:e});{e.filter;const r=e.filter;r.targetId;const{count:s=0,unchangedNames:i}=r,a=new _g(s,i),c=r.targetId;t=new Oh(c,a)}}return t}function Dg(n,e){let t;if(e instanceof ps)t={update:Wu(n,e.key,e.value)};else if(e instanceof ga)t={delete:fi(n,e.key)};else if(e instanceof un)t={update:Wu(n,e.key,e.data),updateMask:jg(e.fieldMask)};else{if(!(e instanceof Jm))return B(16599,{be:e.type});t={verify:fi(n,e.key)}}return e.fieldTransforms.length>0&&(t.updateTransforms=e.fieldTransforms.map(r=>function(i,a){const c=a.transform;if(c instanceof Qr)return{fieldPath:a.field.canonicalString(),setToServerValue:"REQUEST_TIME"};if(c instanceof Yr)return{fieldPath:a.field.canonicalString(),appendMissingElements:{values:c.elements}};if(c instanceof Jr)return{fieldPath:a.field.canonicalString(),removeAllFromArray:{values:c.elements}};if(c instanceof Xr)return{fieldPath:a.field.canonicalString(),increment:c.h};if(c instanceof ci)return{fieldPath:a.field.canonicalString(),minimum:c.h};if(c instanceof ui)return{fieldPath:a.field.canonicalString(),maximum:c.h};throw B(20930,{transform:a.transform})}(0,r))),e.precondition.isNone||(t.currentDocument=function(s,i){return i.updateTime!==void 0?{updateTime:Ys(s,i.updateTime)}:i.exists!==void 0?{exists:i.exists}:B(27497)}(n,e.precondition)),t}function xg(n,e){return n&&n.length>0?(U(e!==void 0,14353),n.map(t=>function(s,i){let a=s.updateTime?ut(s.updateTime):ut(i);return a.isEqual(j.min())&&(a=ut(i)),new Km(a,s.transformResults||[])}(t,e))):[]}function Og(n,e){return{documents:[Fh(n,e.path)]}}function Lg(n,e){const t={structuredQuery:{}},r=e.path;let s;e.collectionGroup!==null?(s=r,t.structuredQuery.from=[{collectionId:e.collectionGroup,allDescendants:!0}]):(s=r.popLast(),t.structuredQuery.from=[{collectionId:r.lastSegment()}]),t.parent=Fh(n,s);const i=function(d){if(d.length!==0)return $h(nt.create(d,"and"))}(e.filters);i&&(t.structuredQuery.where=i);const a=function(d){if(d.length!==0)return d.map(p=>function(w){return{field:Bn(w.field),direction:Bg(w.dir)}}(p))}(e.orderBy);a&&(t.structuredQuery.orderBy=a);const c=Ko(n,e.limit);return c!==null&&(t.structuredQuery.limit=c),e.startAt&&(t.structuredQuery.startAt=function(d){return{before:d.inclusive,values:d.position}}(e.startAt)),e.endAt&&(t.structuredQuery.endAt=function(d){return{before:!d.inclusive,values:d.position}}(e.endAt)),{Se:t,parent:s}}function Mg(n){let e=Ng(n.parent);const t=n.structuredQuery,r=t.from?t.from.length:0;let s=null;if(r>0){U(r===1,65062);const p=t.from[0];p.allDescendants?s=p.collectionId:e=e.child(p.collectionId)}let i=[];t.where&&(i=function(m){const w=qh(m);return w instanceof nt&&vh(w)?w.getFilters():[w]}(t.where));let a=[];t.orderBy&&(a=function(m){return m.map(w=>function(N){return new Zr(qn(N.field),function(L){switch(L){case"ASCENDING":return"asc";case"DESCENDING":return"desc";default:return}}(N.direction))}(w))}(t.orderBy));let c=null;t.limit&&(c=function(m){let w;return w=typeof m=="object"?m.value:m,bi(w)?null:w}(t.limit));let l=null;t.startAt&&(l=function(m){const w=!!m.before,V=m.values||[];return new hi(V,w)}(t.startAt));let d=null;return t.endAt&&(d=function(m){const w=!m.before,V=m.values||[];return new hi(V,w)}(t.endAt)),hg(e,s,a,i,c,"F",l,d)}function Ug(n,e){const t=function(s){switch(s){case"TargetPurposeListen":return null;case"TargetPurposeExistenceFilterMismatch":return"existence-filter-mismatch";case"TargetPurposeExistenceFilterMismatchBloom":return"existence-filter-mismatch-bloom";case"TargetPurposeLimboResolution":return"limbo-document";default:return B(28987,{purpose:s})}}(e.purpose);return t==null?null:{"goog-listen-tags":t}}function Fg(n,e){return{structuredPipeline:{pipeline:{stages:e.stages.map(t=>t._toProto(n))}}}}function qh(n){return n.unaryFilter!==void 0?function(t){switch(t.unaryFilter.op){case"IS_NAN":const r=qn(t.unaryFilter.field);return ce.create(r,"==",{doubleValue:NaN});case"IS_NULL":const s=qn(t.unaryFilter.field);return ce.create(s,"==",{nullValue:"NULL_VALUE"});case"IS_NOT_NAN":const i=qn(t.unaryFilter.field);return ce.create(i,"!=",{doubleValue:NaN});case"IS_NOT_NULL":const a=qn(t.unaryFilter.field);return ce.create(a,"!=",{nullValue:"NULL_VALUE"});case"OPERATOR_UNSPECIFIED":return B(61313);default:return B(60726)}}(n):n.fieldFilter!==void 0?function(t){return ce.create(qn(t.fieldFilter.field),function(s){switch(s){case"EQUAL":return"==";case"NOT_EQUAL":return"!=";case"GREATER_THAN":return">";case"GREATER_THAN_OR_EQUAL":return">=";case"LESS_THAN":return"<";case"LESS_THAN_OR_EQUAL":return"<=";case"ARRAY_CONTAINS":return"array-contains";case"IN":return"in";case"NOT_IN":return"not-in";case"ARRAY_CONTAINS_ANY":return"array-contains-any";case"OPERATOR_UNSPECIFIED":return B(58110);default:return B(50506)}}(t.fieldFilter.op),t.fieldFilter.value)}(n):n.compositeFilter!==void 0?function(t){return nt.create(t.compositeFilter.filters.map(r=>qh(r)),function(s){switch(s){case"AND":return"and";case"OR":return"or";default:return B(1026)}}(t.compositeFilter.op))}(n):B(30097,{filter:n})}function Bg(n){return Sg[n]}function qg(n){return Vg[n]}function $g(n){return Cg[n]}function Bn(n){return{fieldPath:n.canonicalString()}}function qn(n){return We.fromServerFormat(n.fieldPath)}function $h(n){return n instanceof ce?function(t){if(t.op==="=="){if(Fe(t.value))return{unaryFilter:{field:Bn(t.field),op:"IS_NAN"}};if(ze(t.value))return{unaryFilter:{field:Bn(t.field),op:"IS_NULL"}}}else if(t.op==="!="){if(Fe(t.value))return{unaryFilter:{field:Bn(t.field),op:"IS_NOT_NAN"}};if(ze(t.value))return{unaryFilter:{field:Bn(t.field),op:"IS_NOT_NULL"}}}return{fieldFilter:{field:Bn(t.field),op:qg(t.op),value:t.value}}}(n):n instanceof nt?function(t){const r=t.getFilters().map(s=>$h(s));return r.length===1?r[0]:{compositeFilter:{op:$g(t.op),filters:r}}}(n):B(54877,{filter:n})}function jg(n){const e=[];return n.fields.forEach(t=>e.push(t.canonicalString())),{fieldPaths:e}}function jh(n){return n.length>=4&&n.get(0)==="projects"&&n.get(2)==="databases"}function zh(n){return!!n&&typeof n._toProto=="function"&&n._protoValueType==="ProtoValue"}function ts(n,e){const t={fields:{}};return e.forEach((r,s)=>{if(typeof s!="string")throw new Error(`Cannot encode map with non-string key: ${s}`);t.fields[s]=r._toProto(n)}),{mapValue:t}}function Wh(n){return{stringValue:n}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Li(n){return new bg(n,!0)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Qe{constructor(e){this._byteString=e}static fromBase64String(e){try{return new Qe(de.fromBase64String(e))}catch(t){throw new D(C.INVALID_ARGUMENT,"Failed to construct data from Base64 string: "+t)}}static fromUint8Array(e){return new Qe(de.fromUint8Array(e))}toBase64(){return this._byteString.toBase64()}toUint8Array(){return this._byteString.toUint8Array()}toString(){return"Bytes(base64: "+this.toBase64()+")"}isEqual(e){return this._byteString.isEqual(e._byteString)}toJSON(){return{type:Qe._jsonSchemaVersion,bytes:this.toBase64()}}static fromJSON(e){if(ds(e,Qe._jsonSchema))return Qe.fromBase64String(e.bytes)}}Qe._jsonSchemaVersion="firestore/bytes/1.0",Qe._jsonSchema={type:ue("string",Qe._jsonSchemaVersion),bytes:ue("string")};/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Mi{constructor(...e){for(let t=0;t<e.length;++t)if(e[t].length===0)throw new D(C.INVALID_ARGUMENT,"Invalid field name at argument $(i + 1). Field names must not be empty.");this._internalPath=new We(e)}isEqual(e){return this._internalPath.isEqual(e._internalPath)}}function zg(){return new Mi(ot)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ui{constructor(e){this._methodName=e}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class lt{constructor(e,t){if(!isFinite(e)||e<-90||e>90)throw new D(C.INVALID_ARGUMENT,"Latitude must be a number between -90 and 90, but was: "+e);if(!isFinite(t)||t<-180||t>180)throw new D(C.INVALID_ARGUMENT,"Longitude must be a number between -180 and 180, but was: "+t);this._lat=e,this._long=t}get latitude(){return this._lat}get longitude(){return this._long}isEqual(e){return this._lat===e._lat&&this._long===e._long}_compareTo(e){return K(this._lat,e._lat)||K(this._long,e._long)}toJSON(){return{latitude:this._lat,longitude:this._long,type:lt._jsonSchemaVersion}}static fromJSON(e){if(ds(e,lt._jsonSchema))return new lt(e.latitude,e.longitude)}}lt._jsonSchemaVersion="firestore/geoPoint/1.0",lt._jsonSchema={type:ue("string",lt._jsonSchemaVersion),latitude:ue("number"),longitude:ue("number")};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Re{constructor(e){this.uid=e}isAuthenticated(){return this.uid!=null}toKey(){return this.isAuthenticated()?"uid:"+this.uid:"anonymous-user"}isEqual(e){return e.uid===this.uid}}Re.UNAUTHENTICATED=new Re(null),Re.GOOGLE_CREDENTIALS=new Re("google-credentials-uid"),Re.FIRST_PARTY=new Re("first-party-uid"),Re.MOCK_USER=new Re("mock-user");/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class wt{constructor(){this.promise=new Promise((e,t)=>{this.resolve=e,this.reject=t})}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Hh{constructor(e,t){this.user=t,this.type="OAuth",this.headers=new Map,this.headers.set("Authorization",`Bearer ${e}`)}}class Wg{getToken(){return Promise.resolve(null)}invalidateToken(){}start(e,t){e.enqueueRetryable(()=>t(Re.UNAUTHENTICATED))}shutdown(){}}class Hg{constructor(e){this.token=e,this.changeListener=null}getToken(){return Promise.resolve(this.token)}invalidateToken(){}start(e,t){this.changeListener=t,e.enqueueRetryable(()=>t(this.token.user))}shutdown(){this.changeListener=null}}class Gg{constructor(e){this.De=e,this.currentUser=Re.UNAUTHENTICATED,this.xe=0,this.forceRefresh=!1,this.auth=null}start(e,t){U(this.Ce===void 0,42304);let r=this.xe;const s=l=>this.xe!==r?(r=this.xe,t(l)):Promise.resolve();let i=new wt;this.Ce=()=>{this.xe++,this.currentUser=this.Fe(),i.resolve(),i=new wt,e.enqueueRetryable(()=>s(this.currentUser))};const a=()=>{const l=i;e.enqueueRetryable(async()=>{await l.promise,await s(this.currentUser)})},c=l=>{O("FirebaseAuthCredentialsProvider","Auth detected"),this.auth=l,this.Ce&&(this.auth.addAuthTokenListener(this.Ce),a())};this.De.onInit(l=>c(l)),setTimeout(()=>{if(!this.auth){const l=this.De.getImmediate({optional:!0});l?c(l):(O("FirebaseAuthCredentialsProvider","Auth not yet detected"),i.resolve(),i=new wt)}},0),a()}getToken(){const e=this.xe,t=this.forceRefresh;return this.forceRefresh=!1,this.auth?this.auth.getToken(t).then(r=>this.xe!==e?(O("FirebaseAuthCredentialsProvider","getToken aborted due to token change."),this.getToken()):r?(U(typeof r.accessToken=="string",31837,{Oe:r}),new Hh(r.accessToken,this.currentUser)):null):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.auth&&this.Ce&&this.auth.removeAuthTokenListener(this.Ce),this.Ce=void 0}Fe(){const e=this.auth&&this.auth.getUid();return U(e===null||typeof e=="string",2055,{Me:e}),new Re(e)}}class Kg{constructor(e,t,r){this.Ne=e,this.Le=t,this.Be=r,this.type="FirstParty",this.user=Re.FIRST_PARTY,this.Ue=new Map}ke(){return this.Be?this.Be():null}get headers(){this.Ue.set("X-Goog-AuthUser",this.Ne);const e=this.ke();return e&&this.Ue.set("Authorization",e),this.Le&&this.Ue.set("X-Goog-Iam-Authorization-Token",this.Le),this.Ue}}class Qg{constructor(e,t,r){this.Ne=e,this.Le=t,this.Be=r}getToken(){return Promise.resolve(new Kg(this.Ne,this.Le,this.Be))}start(e,t){e.enqueueRetryable(()=>t(Re.FIRST_PARTY))}shutdown(){}invalidateToken(){}}class Hu{constructor(e){this.value=e,this.type="AppCheck",this.headers=new Map,e&&e.length>0&&this.headers.set("x-firebase-appcheck",this.value)}}class Yg{constructor(e,t){this.qe=t,this.forceRefresh=!1,this.appCheck=null,this.$e=null,this.Ke=null,$e(e)&&e.settings.appCheckToken&&(this.Ke=e.settings.appCheckToken)}start(e,t){U(this.Ce===void 0,3512);const r=i=>{i.error!=null&&O("FirebaseAppCheckTokenProvider",`Error getting App Check token; using placeholder token instead. Error: ${i.error.message}`);const a=i.token!==this.$e;return this.$e=i.token,O("FirebaseAppCheckTokenProvider",`Received ${a?"new":"existing"} token.`),a?t(i.token):Promise.resolve()};this.Ce=i=>{e.enqueueRetryable(()=>r(i))};const s=i=>{O("FirebaseAppCheckTokenProvider","AppCheck detected"),this.appCheck=i,this.Ce&&this.appCheck.addTokenListener(this.Ce)};this.qe.onInit(i=>s(i)),setTimeout(()=>{if(!this.appCheck){const i=this.qe.getImmediate({optional:!0});i?s(i):O("FirebaseAppCheckTokenProvider","AppCheck not yet detected")}},0)}getToken(){if(this.Ke)return Promise.resolve(new Hu(this.Ke));const e=this.forceRefresh;return this.forceRefresh=!1,this.appCheck?this.appCheck.getToken(e).then(t=>t?(U(typeof t.token=="string",44558,{tokenResult:t}),this.$e=t.token,new Hu(t.token)):null):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.appCheck&&this.Ce&&this.appCheck.removeTokenListener(this.Ce),this.Ce=void 0}}function Gh(n){const e={};return n.timeoutSeconds!==void 0&&(e.timeoutSeconds=n.timeoutSeconds),e}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Jg{Qe(e){}shutdown(){}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Gu="ConnectivityMonitor";class Ku{constructor(){this.We=()=>this.Ge(),this.ze=()=>this.je(),this.He=[],this.Je()}Qe(e){this.He.push(e)}shutdown(){window.removeEventListener("online",this.We),window.removeEventListener("offline",this.ze)}Je(){window.addEventListener("online",this.We),window.addEventListener("offline",this.ze)}Ge(){O(Gu,"Network connectivity changed: AVAILABLE");for(const e of this.He)e(0)}je(){O(Gu,"Network connectivity changed: UNAVAILABLE");for(const e of this.He)e(1)}static Ye(){return typeof window<"u"&&window.addEventListener!==void 0&&window.removeEventListener!==void 0}}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let js=null;function Jo(){return js===null?js=function(){return 268435456+Math.round(2147483648*Math.random())}():js++,"0x"+js.toString(16)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ko="RestConnection",Xg={BatchGetDocuments:"batchGet",Commit:"commit",RunQuery:"runQuery",RunAggregationQuery:"runAggregationQuery",ExecutePipeline:"executePipeline"};class Zg{get Ze(){return!1}constructor(e){this.databaseInfo=e,this.databaseId=e.databaseId;const t=e.ssl?"https":"http",r=encodeURIComponent(this.databaseId.projectId),s=encodeURIComponent(this.databaseId.database);this.Xe=t+"://"+e.host,this.et=`projects/${r}/databases/${s}`,this.tt=this.databaseId.database===oi?`project_id=${r}`:`project_id=${r}&database_id=${s}`}nt(e,t,r,s,i){const a=Jo(),c=this.rt(e,t.toUriEncodedString());O(ko,`Sending RPC '${e}' ${a}:`,c,r);const l={"google-cloud-resource-prefix":this.et,"x-goog-request-params":this.tt};this.it(l,s,i);const{host:d}=new URL(c),p=ls(d);return this.st(e,c,l,r,p).then(m=>(O(ko,`Received RPC '${e}' ${a}: `,m),m),m=>{throw tt(ko,`RPC '${e}' ${a} failed with error: `,m,"url: ",c,"request:",r),m})}_t(e,t,r,s,i,a){return this.nt(e,t,r,s,i)}it(e,t,r){if(e["X-Goog-Api-Client"]=function(){return"gl-js/ fire/"+er}(),e["Content-Type"]="text/plain",this.databaseInfo.appId&&(e["X-Firebase-GMPID"]=this.databaseInfo.appId),t&&t.headers.forEach((s,i)=>e[i]=s),r&&r.headers.forEach((s,i)=>e[i]=s),this.databaseInfo._customHeaders)for(const s of Object.keys(this.databaseInfo._customHeaders))e[s]=this.databaseInfo._customHeaders[s]}rt(e,t){const r=Xg[e];let s=`${this.Xe}/v1/${t}:${r}`;return this.databaseInfo.apiKey&&(s=`${s}?key=${encodeURIComponent(this.databaseInfo.apiKey)}`),s}terminate(){}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class e_{constructor(e){this.ot=e.ot,this.ut=e.ut}ct(e){this.lt=e}Et(e){this.ht=e}Tt(e){this.Pt=e}onMessage(e){this.It=e}close(){this.ut()}send(e){this.ot(e)}Rt(){this.lt()}At(){this.ht()}Vt(e){this.Pt(e)}dt(e){this.It(e)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Ae="WebChannelConnection",Sr=(n,e,t)=>{n.listen(e,r=>{try{t(r)}catch(s){setTimeout(()=>{throw s},0)}})};class $n extends Zg{constructor(e){super(e),this.ft=[],this.forceLongPolling=e.forceLongPolling,this.autoDetectLongPolling=e.autoDetectLongPolling,this.useFetchStreams=e.useFetchStreams,this.longPollingOptions=e.longPollingOptions}static gt(){if(!$n.yt){const e=nh();Sr(e,th.STAT_EVENT,t=>{t.stat===$o.PROXY?O(Ae,"STAT_EVENT: detected buffering proxy"):t.stat===$o.NOPROXY&&O(Ae,"STAT_EVENT: detected no buffering proxy")}),$n.yt=!0}}st(e,t,r,s,i){const a=Jo();return new Promise((c,l)=>{const d=new Zl;d.setWithCredentials(!0),d.listenOnce(eh.COMPLETE,()=>{try{switch(d.getLastErrorCode()){case Hs.NO_ERROR:const m=d.getResponseJson();O(Ae,`XHR for RPC '${e}' ${a} received:`,JSON.stringify(m)),c(m);break;case Hs.TIMEOUT:O(Ae,`RPC '${e}' ${a} timed out`),l(new D(C.DEADLINE_EXCEEDED,"Request time out"));break;case Hs.HTTP_ERROR:const w=d.getStatus();if(O(Ae,`RPC '${e}' ${a} failed with status:`,w,"response text:",d.getResponseText()),w>0){let V=d.getResponseJson();Array.isArray(V)&&(V=V[0]);const N=V==null?void 0:V.error;if(N&&N.status&&N.message){const M=function(H){const J=H.toLowerCase().replace(/_/g,"-");return Object.values(C).indexOf(J)>=0?J:C.UNKNOWN}(N.status);l(new D(M,N.message))}else l(new D(C.UNKNOWN,"Server responded with status "+d.getStatus()))}else l(new D(C.UNAVAILABLE,"Connection failed."));break;default:B(9055,{wt:e,streamId:a,bt:d.getLastErrorCode(),St:d.getLastError()})}}finally{O(Ae,`RPC '${e}' ${a} completed.`)}});const p=JSON.stringify(s);O(Ae,`RPC '${e}' ${a} sending request:`,s),d.send(t,"POST",p,r,15)})}vt(e,t,r){const s=Jo(),i=[this.Xe,"/","google.firestore.v1.Firestore","/",e,"/channel"],a=this.createWebChannelTransport(),c={httpSessionIdParam:"gsessionid",initMessageHeaders:{},messageUrlParams:{database:`projects/${this.databaseId.projectId}/databases/${this.databaseId.database}`},sendRawJson:!0,supportsCrossDomainXhr:!0,internalChannelParams:{forwardChannelRequestTimeoutMs:6e5},forceLongPolling:this.forceLongPolling,detectBufferingProxy:this.autoDetectLongPolling},l=this.longPollingOptions.timeoutSeconds;l!==void 0&&(c.longPollingTimeout=Math.round(1e3*l)),this.useFetchStreams&&(c.useFetchStreams=!0),this.it(c.initMessageHeaders,t,r),c.encodeInitMessageHeaders=!0;const d=i.join("");O(Ae,`Creating RPC '${e}' stream ${s}: ${d}`,c);const p=a.createWebChannel(d,c);this.Dt(p);let m=!1,w=!1;const V=new e_({ot:N=>{w?O(Ae,`Not sending because RPC '${e}' stream ${s} is closed:`,N):(m||(O(Ae,`Opening RPC '${e}' stream ${s} transport.`),p.open(),m=!0),O(Ae,`RPC '${e}' stream ${s} sending:`,N),p.send(N))},ut:()=>p.close()});return Sr(p,br.EventType.OPEN,()=>{w||(O(Ae,`RPC '${e}' stream ${s} transport opened.`),V.Rt())}),Sr(p,br.EventType.CLOSE,()=>{w||(w=!0,O(Ae,`RPC '${e}' stream ${s} transport closed`),V.Vt(),this.xt(p))}),Sr(p,br.EventType.ERROR,N=>{w||(w=!0,tt(Ae,`RPC '${e}' stream ${s} transport errored. Name:`,N.name,"Message:",N.message),V.Vt(new D(C.UNAVAILABLE,"The operation could not be completed")))}),Sr(p,br.EventType.MESSAGE,N=>{var M;if(!w){const L=N.data[0];U(!!L,16349);const H=L,J=(H==null?void 0:H.error)||((M=H[0])==null?void 0:M.error);if(J){O(Ae,`RPC '${e}' stream ${s} received error:`,J);const ie=J.status;let Ke=function(I){const g=ae[I];if(g!==void 0)return Nh(g)}(ie),Te=J.message;ie==="NOT_FOUND"&&Te.includes("database")&&Te.includes("does not exist")&&Te.includes(this.databaseId.database)&&tt(`Database '${this.databaseId.database}' not found. Please check your project configuration.`),Ke===void 0&&(Ke=C.INTERNAL,Te="Unknown error status: "+ie+" with message "+J.message),w=!0,V.Vt(new D(Ke,Te)),p.close()}else O(Ae,`RPC '${e}' stream ${s} received:`,L),V.dt(L)}}),$n.gt(),setTimeout(()=>{V.At()},0),V}terminate(){this.ft.forEach(e=>e.close()),this.ft=[]}Dt(e){this.ft.push(e)}xt(e){this.ft=this.ft.filter(t=>t===e)}it(e,t,r){super.it(e,t,r),this.databaseInfo.apiKey&&(e["x-goog-api-key"]=this.databaseInfo.apiKey)}createWebChannelTransport(){return rh()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function t_(n){return new $n(n)}$n.yt=!1;class Kh{constructor(e,t,r=1e3,s=1.5,i=6e4){this.Ct=e,this.timerId=t,this.Ft=r,this.Ot=s,this.Mt=i,this.Nt=0,this.Lt=null,this.Bt=Date.now(),this.reset()}reset(){this.Nt=0}Ut(){this.Nt=this.Mt}kt(e){this.cancel();const t=Math.floor(this.Nt+this.qt()),r=Math.max(0,Date.now()-this.Bt),s=Math.max(0,t-r);s>0&&O("ExponentialBackoff",`Backing off for ${s} ms (base delay: ${this.Nt} ms, delay with jitter: ${t} ms, last attempt: ${r} ms ago)`),this.Lt=this.Ct.enqueueAfterDelay(this.timerId,s,()=>(this.Bt=Date.now(),e())),this.Nt*=this.Ot,this.Nt<this.Ft&&(this.Nt=this.Ft),this.Nt>this.Mt&&(this.Nt=this.Mt)}$t(){this.Lt!==null&&(this.Lt.skipDelay(),this.Lt=null)}cancel(){this.Lt!==null&&(this.Lt.cancel(),this.Lt=null)}qt(){return(Math.random()-.5)*this.Nt}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Qu="PersistentStream";class Qh{constructor(e,t,r,s,i,a,c,l){this.Ct=e,this.Kt=r,this.Qt=s,this.connection=i,this.authCredentialsProvider=a,this.appCheckCredentialsProvider=c,this.listener=l,this.state=0,this.Wt=0,this.Gt=null,this.zt=null,this.stream=null,this.jt=0,this.Ht=new Kh(e,t)}Jt(){return this.state===1||this.state===5||this.Yt()}Yt(){return this.state===2||this.state===3}start(){this.jt=0,this.state!==4?this.auth():this.Zt()}async stop(){this.Jt()&&await this.close(0)}Xt(){this.state=0,this.Ht.reset()}en(){this.Yt()&&this.Gt===null&&(this.Gt=this.Ct.enqueueAfterDelay(this.Kt,6e4,()=>this.tn()))}nn(e){this.rn(),this.stream.send(e)}async tn(){if(this.Yt())return this.close(0)}rn(){this.Gt&&(this.Gt.cancel(),this.Gt=null)}sn(){this.zt&&(this.zt.cancel(),this.zt=null)}async close(e,t){this.rn(),this.sn(),this.Ht.cancel(),this.Wt++,e!==4?this.Ht.reset():t&&t.code===C.RESOURCE_EXHAUSTED?(At(t.toString()),At("Using maximum backoff delay to prevent overloading the backend."),this.Ht.Ut()):t&&t.code===C.UNAUTHENTICATED&&this.state!==3&&(this.authCredentialsProvider.invalidateToken(),this.appCheckCredentialsProvider.invalidateToken()),this.stream!==null&&(this._n(),this.stream.close(),this.stream=null),this.state=e,await this.listener.Tt(t)}_n(){}auth(){this.state=1;const e=this.an(this.Wt),t=this.Wt;Promise.all([this.authCredentialsProvider.getToken(),this.appCheckCredentialsProvider.getToken()]).then(([r,s])=>{this.Wt===t&&this.un(r,s)},r=>{e(()=>{const s=new D(C.UNKNOWN,"Fetching auth token failed: "+r.message);return this.cn(s)})})}un(e,t){const r=this.an(this.Wt);this.stream=this.En(e,t),this.stream.ct(()=>{r(()=>this.listener.ct())}),this.stream.Et(()=>{r(()=>(this.state=2,this.zt=this.Ct.enqueueAfterDelay(this.Qt,1e4,()=>(this.Yt()&&(this.state=3),Promise.resolve())),this.listener.Et()))}),this.stream.Tt(s=>{r(()=>this.cn(s))}),this.stream.onMessage(s=>{r(()=>++this.jt==1?this.hn(s):this.onNext(s))})}Zt(){this.state=5,this.Ht.kt(async()=>{this.state=0,this.start()})}cn(e){return O(Qu,`close with error: ${e}`),this.stream=null,this.close(4,e)}an(e){return t=>{this.Ct.enqueueAndForget(()=>this.Wt===e?t():(O(Qu,"stream callback skipped by getCloseGuardedDispatcher."),Promise.resolve()))}}}class n_ extends Qh{constructor(e,t,r,s,i,a){super(e,"listen_stream_connection_backoff","listen_stream_idle","health_check_timeout",t,r,s,a),this.serializer=i}En(e,t){return this.connection.vt("Listen",e,t)}hn(e){return this.onNext(e)}onNext(e){this.Ht.reset();const t=kg(this.serializer,e),r=function(i){if(!("targetChange"in i))return j.min();const a=i.targetChange;return a.targetIds&&a.targetIds.length?j.min():a.readTime?ut(a.readTime):j.min()}(e);return this.listener.Tn(t,r)}Pn(e){const t={};t.database=Yo(this.serializer),t.addTarget=function(i,a){let c;const l=a.target;if(c=_n(l)?{pipelineQuery:Fg(i,l)}:Ch(l)?{documents:Og(i,l)}:{query:Lg(i,l).Se},c.targetId=a.targetId,a.resumeToken.approximateByteSize()>0){c.resumeToken=Mh(i,a.resumeToken);const d=Ko(i,a.expectedCount);d!==null&&(c.expectedCount=d)}else if(a.snapshotVersion.compareTo(j.min())>0){c.readTime=Fr(i,a.snapshotVersion.toTimestamp());const d=Ko(i,a.expectedCount);d!==null&&(c.expectedCount=d)}return c}(this.serializer,e);const r=Ug(this.serializer,e);r&&(t.labels=r),this.nn(t)}In(e){const t={};t.database=Yo(this.serializer),t.removeTarget=e,this.nn(t)}}class r_ extends Qh{constructor(e,t,r,s,i,a){super(e,"write_stream_connection_backoff","write_stream_idle","health_check_timeout",t,r,s,a),this.serializer=i}get Rn(){return this.jt>0}start(){this.lastStreamToken=void 0,super.start()}_n(){this.Rn&&this.An([])}En(e,t){return this.connection.vt("Write",e,t)}hn(e){return U(!!e.streamToken,31322),this.lastStreamToken=e.streamToken,U(!e.writeResults||e.writeResults.length===0,55816),this.listener.Vn()}onNext(e){U(!!e.streamToken,12678),this.lastStreamToken=e.streamToken,this.Ht.reset();const t=xg(e.writeResults,e.commitTime),r=ut(e.commitTime);return this.listener.dn(r,t)}fn(){const e={};e.database=Yo(this.serializer),this.nn(e)}An(e){const t={streamToken:this.lastStreamToken,writes:e.map(r=>Dg(this.serializer,r))};this.nn(t)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class s_{}class i_ extends s_{constructor(e,t,r,s){super(),this.authCredentials=e,this.appCheckCredentials=t,this.connection=r,this.serializer=s,this.mn=!1}pn(){if(this.mn)throw new D(C.FAILED_PRECONDITION,"The client has already been terminated.")}nt(e,t,r,s){return this.pn(),Promise.all([this.authCredentials.getToken(),this.appCheckCredentials.getToken()]).then(([i,a])=>this.connection.nt(e,Qo(t,r),s,i,a)).catch(i=>{throw i.name==="FirebaseError"?(i.code===C.UNAUTHENTICATED&&(this.authCredentials.invalidateToken(),this.appCheckCredentials.invalidateToken()),i):new D(C.UNKNOWN,i.toString())})}_t(e,t,r,s,i){return this.pn(),Promise.all([this.authCredentials.getToken(),this.appCheckCredentials.getToken()]).then(([a,c])=>this.connection._t(e,Qo(t,r),s,a,c,i)).catch(a=>{throw a.name==="FirebaseError"?(a.code===C.UNAUTHENTICATED&&(this.authCredentials.invalidateToken(),this.appCheckCredentials.invalidateToken()),a):new D(C.UNKNOWN,a.toString())})}terminate(){this.mn=!0,this.connection.terminate()}}function o_(n,e,t,r){return new i_(n,e,t,r)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const a_="ComponentProvider",Yu=new Map;function c_(n,e,t,r,s){return new Um(n,e,t,s.host,s.ssl,s.experimentalForceLongPolling,s.experimentalAutoDetectLongPolling,Gh(s.experimentalLongPollingOptions),s.useFetchStreams,s.isUsingEmulator,r,s._customHeaders,s.grpcFlowControlWindow)}/**
 * @license
 * Copyright 2018 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Ju={didRun:!1,sequenceNumbersCollected:0,targetsRemoved:0,documentsRemoved:0},Yh=41943040;class xe{static withCacheSize(e){return new xe(e,xe.DEFAULT_COLLECTION_PERCENTILE,xe.DEFAULT_MAX_SEQUENCE_NUMBERS_TO_COLLECT)}constructor(e,t,r){this.cacheSizeCollectionThreshold=e,this.percentileToCollect=t,this.maximumSequenceNumbersToCollect=r}}xe.DEFAULT_COLLECTION_PERCENTILE=10,xe.DEFAULT_MAX_SEQUENCE_NUMBERS_TO_COLLECT=1e3,xe.DEFAULT=new xe(Yh,xe.DEFAULT_COLLECTION_PERCENTILE,xe.DEFAULT_MAX_SEQUENCE_NUMBERS_TO_COLLECT),xe.DISABLED=new xe(-1,0,0);/**
 * @license
 * Copyright 2018 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Fi{constructor(e,t){this.previousValue=e,t&&(t.sequenceNumberHandler=r=>this.gn(r),this.yn=r=>t.writeSequenceNumber(r))}gn(e){return this.previousValue=Math.max(e,this.previousValue),this.previousValue}next(){const e=++this.previousValue;return this.yn&&this.yn(e),e}}Fi.wn=-1;/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const u_="The current tab is not in the required state to perform this operation. It might be necessary to refresh the browser tab.";class l_{constructor(){this.onCommittedListeners=[]}addOnCommittedListener(e){this.onCommittedListeners.push(e)}raiseOnCommittedEvent(){this.onCommittedListeners.forEach(e=>e())}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function nr(n){if(n.code!==C.FAILED_PRECONDITION||n.message!==u_)throw n;O("LocalStore","Unexpectedly lost primary lease")}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class b{constructor(e){this.nextCallback=null,this.catchCallback=null,this.result=void 0,this.error=void 0,this.isDone=!1,this.callbackAttached=!1,e(t=>{this.isDone=!0,this.result=t,this.nextCallback&&this.nextCallback(t)},t=>{this.isDone=!0,this.error=t,this.catchCallback&&this.catchCallback(t)})}catch(e){return this.next(void 0,e)}next(e,t){return this.callbackAttached&&B(59440),this.callbackAttached=!0,this.isDone?this.error?this.wrapFailure(t,this.error):this.wrapSuccess(e,this.result):new b((r,s)=>{this.nextCallback=i=>{this.wrapSuccess(e,i).next(r,s)},this.catchCallback=i=>{this.wrapFailure(t,i).next(r,s)}})}toPromise(){return new Promise((e,t)=>{this.next(e,t)})}wrapUserFunction(e){try{const t=e();return t instanceof b?t:b.resolve(t)}catch(t){return b.reject(t)}}wrapSuccess(e,t){return e?this.wrapUserFunction(()=>e(t)):b.resolve(t)}wrapFailure(e,t){return e?this.wrapUserFunction(()=>e(t)):b.reject(t)}static resolve(e){return new b((t,r)=>{t(e)})}static reject(e){return new b((t,r)=>{r(e)})}static waitFor(e){return new b((t,r)=>{let s=0,i=0,a=!1;e.forEach(c=>{++s,c.next(()=>{++i,a&&i===s&&t()},l=>r(l))}),a=!0,i===s&&t()})}static or(e){let t=b.resolve(!1);for(const r of e)t=t.next(s=>s?b.resolve(s):r());return t}static forEach(e,t){const r=[];return e.forEach((s,i)=>{r.push(t.call(this,s,i))}),this.waitFor(r)}static mapArray(e,t){return new b((r,s)=>{const i=e.length,a=new Array(i);let c=0;for(let l=0;l<i;l++){const d=l;t(e[d]).next(p=>{a[d]=p,++c,c===i&&r(a)},p=>s(p))}})}static doWhile(e,t){return new b((r,s)=>{const i=()=>{e()===!0?t().next(()=>{i()},s):r()};i()})}}function h_(n){const e=n.match(/Android ([\d.]+)/i),t=e?e[1].split(".").slice(0,2).join("."):"-1";return Number(t)}function rr(n){return n.name==="IndexedDbTransactionError"}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Xu="LruGarbageCollector",d_=1048576;function Zu([n,e],[t,r]){const s=K(n,t);return s===0?K(e,r):s}class f_{constructor(e){this.Yn=e,this.buffer=new le(Zu),this.Zn=0}Xn(){return++this.Zn}er(e){const t=[e,this.Xn()];if(this.buffer.size<this.Yn)this.buffer=this.buffer.add(t);else{const r=this.buffer.last();Zu(t,r)<0&&(this.buffer=this.buffer.delete(r).add(t))}}get maxValue(){return this.buffer.last()[0]}}class p_{constructor(e,t,r){this.garbageCollector=e,this.asyncQueue=t,this.localStore=r,this.tr=null}start(){this.garbageCollector.params.cacheSizeCollectionThreshold!==-1&&this.nr(6e4)}stop(){this.tr&&(this.tr.cancel(),this.tr=null)}get started(){return this.tr!==null}nr(e){O(Xu,`Garbage collection scheduled in ${e}ms`),this.tr=this.asyncQueue.enqueueAfterDelay("lru_garbage_collection",e,async()=>{this.tr=null;try{await this.localStore.collectGarbage(this.garbageCollector)}catch(t){rr(t)?O(Xu,"Ignoring IndexedDB error during garbage collection: ",t):await nr(t)}await this.nr(3e5)})}}class m_{constructor(e,t){this.rr=e,this.params=t}calculateTargetCount(e,t){return this.rr.ir(e).next(r=>Math.floor(t/100*r))}nthSequenceNumber(e,t){if(t===0)return b.resolve(Fi.wn);const r=new f_(t);return this.rr.forEachTarget(e,s=>r.er(s.sequenceNumber)).next(()=>this.rr.sr(e,s=>r.er(s))).next(()=>r.maxValue)}removeTargets(e,t,r){return this.rr.removeTargets(e,t,r)}removeOrphanedDocuments(e,t){return this.rr.removeOrphanedDocuments(e,t)}collect(e,t){return this.params.cacheSizeCollectionThreshold===-1?(O("LruGarbageCollector","Garbage collection skipped; disabled"),b.resolve(Ju)):this.getCacheSize(e).next(r=>r<this.params.cacheSizeCollectionThreshold?(O("LruGarbageCollector",`Garbage collection skipped; Cache size ${r} is lower than threshold ${this.params.cacheSizeCollectionThreshold}`),Ju):this._r(e,t))}getCacheSize(e){return this.rr.getCacheSize(e)}_r(e,t){let r,s,i,a,c,l,d;const p=Date.now();return this.calculateTargetCount(e,this.params.percentileToCollect).next(m=>(m>this.params.maximumSequenceNumbersToCollect?(O("LruGarbageCollector",`Capping sequence numbers to collect down to the maximum of ${this.params.maximumSequenceNumbersToCollect} from ${m}`),s=this.params.maximumSequenceNumbersToCollect):s=m,a=Date.now(),this.nthSequenceNumber(e,s))).next(m=>(r=m,c=Date.now(),this.removeTargets(e,r,t))).next(m=>(i=m,l=Date.now(),this.removeOrphanedDocuments(e,r))).next(m=>(d=Date.now(),Mn()<=Q.DEBUG&&O("LruGarbageCollector",`LRU Garbage Collection
	Counted targets in ${a-p}ms
	Determined least recently used ${s} in `+(c-a)+`ms
	Removed ${i} targets in `+(l-c)+`ms
	Removed ${m} documents in `+(d-l)+`ms
Total Duration: ${d-p}ms`),b.resolve({didRun:!0,sequenceNumbersCollected:s,targetsRemoved:i,documentsRemoved:m})))}}function g_(n,e){return new m_(n,e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Jh="firestore.googleapis.com",el=!0;class tl{constructor(e){if(e.host===void 0){if(e.ssl!==void 0)throw new D(C.INVALID_ARGUMENT,"Can't provide ssl option if host option is not set");this.host=Jh,this.ssl=el}else this.host=e.host,this.ssl=e.ssl??el;if(this.isUsingEmulator=e.emulatorOptions!==void 0,this.credentials=e.credentials,this.ignoreUndefinedProperties=!!e.ignoreUndefinedProperties,this.localCache=e.localCache,e._customHeaders&&(this._customHeaders={...e._customHeaders}),e.cacheSizeBytes===void 0)this.cacheSizeBytes=Yh;else{if(e.cacheSizeBytes!==-1&&e.cacheSizeBytes<d_)throw new D(C.INVALID_ARGUMENT,"cacheSizeBytes must be at least 1048576");this.cacheSizeBytes=e.cacheSizeBytes}if(Om("experimentalForceLongPolling",e.experimentalForceLongPolling,"experimentalAutoDetectLongPolling",e.experimentalAutoDetectLongPolling),this.experimentalForceLongPolling=!!e.experimentalForceLongPolling,this.experimentalForceLongPolling?this.experimentalAutoDetectLongPolling=!1:e.experimentalAutoDetectLongPolling===void 0?this.experimentalAutoDetectLongPolling=!0:this.experimentalAutoDetectLongPolling=!!e.experimentalAutoDetectLongPolling,this.experimentalLongPollingOptions=Gh(e.experimentalLongPollingOptions??{}),function(r){if(r.timeoutSeconds!==void 0){if(isNaN(r.timeoutSeconds))throw new D(C.INVALID_ARGUMENT,`invalid long polling timeout: ${r.timeoutSeconds} (must not be NaN)`);if(r.timeoutSeconds<5)throw new D(C.INVALID_ARGUMENT,`invalid long polling timeout: ${r.timeoutSeconds} (minimum allowed value is 5)`);if(r.timeoutSeconds>30)throw new D(C.INVALID_ARGUMENT,`invalid long polling timeout: ${r.timeoutSeconds} (maximum allowed value is 30)`)}}(this.experimentalLongPollingOptions),this.useFetchStreams=!!e.useFetchStreams,e.grpcFlowControlWindow!==void 0){if(typeof e.grpcFlowControlWindow!="number"||e.grpcFlowControlWindow<=0||e.grpcFlowControlWindow>2147483647||!Number.isInteger(e.grpcFlowControlWindow))throw new D(C.INVALID_ARGUMENT,"grpcFlowControlWindow must be a positive integer and cannot exceed 2147483647");this.grpcFlowControlWindow=e.grpcFlowControlWindow}}isEqual(e){return this.host===e.host&&this.ssl===e.ssl&&this.credentials===e.credentials&&this.cacheSizeBytes===e.cacheSizeBytes&&this.experimentalForceLongPolling===e.experimentalForceLongPolling&&this.experimentalAutoDetectLongPolling===e.experimentalAutoDetectLongPolling&&function(r,s){return r.timeoutSeconds===s.timeoutSeconds}(this.experimentalLongPollingOptions,e.experimentalLongPollingOptions)&&this.ignoreUndefinedProperties===e.ignoreUndefinedProperties&&this.useFetchStreams===e.useFetchStreams&&this.grpcFlowControlWindow===e.grpcFlowControlWindow&&function(r,s){if(r===s)return!0;if(!r||!s)return!1;const i=Object.keys(r),a=Object.keys(s);if(i.length!==a.length)return!1;for(const c of i)if(r[c]!==s[c])return!1;return!0}(this._customHeaders,e._customHeaders)}}let Bi=class{constructor(e,t,r,s){this._authCredentials=e,this._appCheckCredentials=t,this._databaseId=r,this._app=s,this.type="firestore-lite",this._persistenceKey="(lite)",this._settings=new tl({}),this._settingsFrozen=!1,this._emulatorOptions={},this._terminateTask="notTerminated"}get app(){if(!this._app)throw new D(C.FAILED_PRECONDITION,"Firestore was not initialized using the Firebase SDK. 'app' is not available");return this._app}get _initialized(){return this._settingsFrozen}get _terminated(){return this._terminateTask!=="notTerminated"}_setSettings(e){if(this._settingsFrozen)throw new D(C.FAILED_PRECONDITION,"Firestore has already been started and its settings can no longer be changed. You can only modify settings before calling any other methods on a Firestore object.");this._settings=new tl(e),this._emulatorOptions=e.emulatorOptions||{},e.credentials!==void 0&&(this._authCredentials=function(r){if(!r)return new Wg;switch(r.type){case"firstParty":return new Qg(r.sessionIndex||"0",r.iamToken||null,r.authTokenFactory||null);case"provider":return r.client;default:throw new D(C.INVALID_ARGUMENT,"makeAuthCredentialsProvider failed due to invalid credential type")}}(e.credentials))}_getSettings(){return this._settings}_getEmulatorOptions(){return this._emulatorOptions}_freezeSettings(){return this._settingsFrozen=!0,this._settings}_delete(){return this._terminateTask==="notTerminated"&&(this._terminateTask=this._terminate()),this._terminateTask}async _restart(){this._terminateTask==="notTerminated"?await this._terminate():this._terminateTask="notTerminated"}toJSON(){return{app:this._app,databaseId:this._databaseId,settings:this._settings}}_terminate(){return function(t){const r=Yu.get(t);r&&(O(a_,"Removing Datastore"),Yu.delete(t),r.terminate())}(this),Promise.resolve()}};function __(n,e,t,r={}){var d;n=He(n,Bi);const s=ls(e),i=n._getSettings(),a={...i,emulatorOptions:n._getEmulatorOptions()},c=`${e}:${t}`;s&&Kl(`https://${c}`),i.host!==Jh&&i.host!==c&&tt("Host has been set in both settings() and connectFirestoreEmulator(), emulator host will be used.");const l={...i,host:c,ssl:s,emulatorOptions:r};if(!Rn(l,a)&&(n._setSettings(l),r.mockUserToken)){let p,m;if(typeof r.mockUserToken=="string")p=r.mockUserToken,m=Re.MOCK_USER;else{p=mp(r.mockUserToken,(d=n._app)==null?void 0:d.options.projectId);const w=r.mockUserToken.sub||r.mockUserToken.user_id;if(!w)throw new D(C.INVALID_ARGUMENT,"mockUserToken must contain 'sub' or 'user_id' field!");m=new Re(w)}n._authCredentials=new Hg(new Hh(p,m))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Vt{constructor(e,t,r){this.converter=t,this._query=r,this.type="query",this.firestore=e}withConverter(e){return new Vt(this.firestore,e,this._query)}}class se{constructor(e,t,r){this.converter=t,this._key=r,this.type="document",this.firestore=e}get _path(){return this._key.path}get id(){return this._key.path.lastSegment()}get path(){return this._key.path.canonicalString()}get parent(){return new Ht(this.firestore,this.converter,this._key.path.popLast())}withConverter(e){return new se(this.firestore,e,this._key)}toJSON(){return{type:se._jsonSchemaVersion,referencePath:this._key.toString()}}static fromJSON(e,t,r){if(ds(t,se._jsonSchema))return new se(e,r||null,new F(X.fromString(t.referencePath)))}}se._jsonSchemaVersion="firestore/documentReference/1.0",se._jsonSchema={type:ue("string",se._jsonSchemaVersion),referencePath:ue("string")};class Ht extends Vt{constructor(e,t,r){super(e,t,xi(r)),this._path=r,this.type="collection"}get id(){return this._query.path.lastSegment()}get path(){return this._query.path.canonicalString()}get parent(){const e=this._path.popLast();return e.isEmpty()?null:new se(this.firestore,null,new F(e))}withConverter(e){return new Ht(this.firestore,e,this._path)}}function jI(n,e,...t){if(n=he(n),oh("collection","path",e),n instanceof Bi){const r=X.fromString(e,...t);return Su(r),new Ht(n,null,r)}{if(!(n instanceof se||n instanceof Ht))throw new D(C.INVALID_ARGUMENT,"Expected first argument to collection() to be a CollectionReference, a DocumentReference or FirebaseFirestore");const r=n._path.child(X.fromString(e,...t));return Su(r),new Ht(n.firestore,null,r)}}function zI(n,e,...t){if(n=he(n),arguments.length===1&&(e=ha.newId()),oh("doc","path",e),n instanceof Bi){const r=X.fromString(e,...t);return Pu(r),new se(n,null,new F(r))}{if(!(n instanceof se||n instanceof Ht))throw new D(C.INVALID_ARGUMENT,"Expected first argument to doc() to be a CollectionReference, a DocumentReference or FirebaseFirestore");const r=n._path.child(X.fromString(e,...t));return Pu(r),new se(n.firestore,n instanceof Ht?n.converter:null,new F(r))}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 *//**
 * @license
 * Copyright 2024 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Le{constructor(e){this._values=(e||[]).map(t=>t)}toArray(){return this._values.map(e=>e)}isEqual(e){return function(r,s){if(r.length!==s.length)return!1;for(let i=0;i<r.length;++i)if(r[i]!==s[i])return!1;return!0}(this._values,e._values)}toJSON(){return{type:Le._jsonSchemaVersion,vectorValues:this._values}}static fromJSON(e){if(ds(e,Le._jsonSchema)){if(Array.isArray(e.vectorValues)&&e.vectorValues.every(t=>typeof t=="number"))return new Le(e.vectorValues);throw new D(C.INVALID_ARGUMENT,"Expected 'vectorValues' field to be a number array")}}}Le._jsonSchemaVersion="firestore/vectorValue/1.0",Le._jsonSchema={type:ue("string",Le._jsonSchemaVersion),vectorValues:ue("object")};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const y_=/^__.*__$/;class E_{constructor(e,t,r){this.data=e,this.fieldMask=t,this.fieldTransforms=r}toMutation(e,t){return this.fieldMask!==null?new un(e,this.data,this.fieldMask,t,this.fieldTransforms):new ps(e,this.data,t,this.fieldTransforms)}}class Xh{constructor(e,t,r){this.data=e,this.fieldMask=t,this.fieldTransforms=r}toMutation(e,t){return new un(e,this.data,this.fieldMask,t,this.fieldTransforms)}}function Zh(n){switch(n){case 0:case 2:case 1:return!0;case 3:case 4:return!1;default:throw B(40011,{dataSource:n})}}class Ta{constructor(e,t,r,s,i,a){this.settings=e,this.databaseId=t,this.serializer=r,this.ignoreUndefinedProperties=s,i===void 0&&this.validatePath(),this.fieldTransforms=i||[],this.fieldMask=a||[]}get path(){return this.settings.path}get dataSource(){return this.settings.dataSource}contextWith(e){return new Ta({...this.settings,...e},this.databaseId,this.serializer,this.ignoreUndefinedProperties,this.fieldTransforms,this.fieldMask)}childContextForField(e){var s;const t=(s=this.path)==null?void 0:s.child(e),r=this.contextWith({path:t,arrayElement:!1});return r.validatePathSegment(e),r}childContextForFieldPath(e){var s;const t=(s=this.path)==null?void 0:s.child(e),r=this.contextWith({path:t,arrayElement:!1});return r.validatePath(),r}childContextForArray(e){return this.contextWith({path:void 0,arrayElement:!0})}createError(e){return pi(e,this.settings.methodName,this.settings.hasConverter||!1,this.path,this.settings.targetDoc)}contains(e){return this.fieldMask.find(t=>e.isPrefixOf(t))!==void 0||this.fieldTransforms.find(t=>e.isPrefixOf(t.field))!==void 0}validatePath(){if(this.path)for(let e=0;e<this.path.length;e++)this.validatePathSegment(this.path.get(e))}validatePathSegment(e){if(e.length===0)throw this.createError("Document fields must not be empty");if(Zh(this.dataSource)&&y_.test(e))throw this.createError('Document fields cannot begin and end with "__"')}}class w_{constructor(e,t,r){this.databaseId=e,this.ignoreUndefinedProperties=t,this.serializer=r||Li(e)}createContext(e,t,r,s=!1){return new Ta({dataSource:e,methodName:t,targetDoc:r,path:We.emptyPath(),arrayElement:!1,hasConverter:s},this.databaseId,this.serializer,this.ignoreUndefinedProperties)}}function Ia(n){const e=n._freezeSettings(),t=Li(n._databaseId);return new w_(n._databaseId,!!e.ignoreUndefinedProperties,t)}function T_(n,e,t,r,s,i={}){const a=n.createContext(i.merge||i.mergeFields?2:0,e,t,s);Aa("Data must be an object, but it was:",a,r);const c=ed(r,a);let l,d;if(i.merge)l=new je(a.fieldMask),d=a.fieldTransforms;else if(i.mergeFields){const p=[];for(const m of i.mergeFields){const w=en(e,m,t);if(!a.contains(w))throw new D(C.INVALID_ARGUMENT,`Field '${w}' is specified in your field mask but missing from your input data.`);sd(p,w)||p.push(w)}l=new je(p),d=a.fieldTransforms.filter(m=>l.covers(m.field))}else l=null,d=a.fieldTransforms;return new E_(new ke(c),l,d)}class qi extends Ui{_toFieldTransform(e){if(e.dataSource!==2)throw e.dataSource===1?e.createError(`${this._methodName}() can only appear at the top level of your update data`):e.createError(`${this._methodName}() cannot be used with set() unless you pass {merge:true}`);return e.fieldMask.push(e.path),null}isEqual(e){return e instanceof qi}}class va extends Ui{_toFieldTransform(e){return new Hm(e.path,new Qr)}isEqual(e){return e instanceof va}}function I_(n,e,t,r){const s=n.createContext(1,e,t);Aa("Data must be an object, but it was:",s,r);const i=[],a=ke.empty();cn(r,(l,d)=>{const p=rd(e,l,t);d=he(d);const m=s.childContextForFieldPath(p);if(d instanceof qi)i.push(p);else{const w=Zt(d,m);w!=null&&(i.push(p),a.set(p,w))}});const c=new je(i);return new Xh(a,c,s.fieldTransforms)}function v_(n,e,t,r,s,i){const a=n.createContext(1,e,t),c=[en(e,r,t)],l=[s];if(i.length%2!=0)throw new D(C.INVALID_ARGUMENT,`Function ${e}() needs to be called with an even number of arguments that alternate between field names and values.`);for(let w=0;w<i.length;w+=2)c.push(en(e,i[w])),l.push(i[w+1]);const d=[],p=ke.empty();for(let w=c.length-1;w>=0;--w)if(!sd(d,c[w])){const V=c[w];let N=l[w];N=he(N);const M=a.childContextForFieldPath(V);if(N instanceof qi)d.push(V);else{const L=Zt(N,M);L!=null&&(d.push(V),p.set(V,L))}}const m=new je(d);return new Xh(p,m,a.fieldTransforms)}function A_(n,e,t,r=!1){return Zt(t,n.createContext(r?4:3,e))}function Zt(n,e,t){if(nd(n=he(n)))return Aa("Unsupported field value:",e,n),ed(n,e);if(n instanceof Ui)return function(s,i){if(!Zh(i.dataSource))throw i.createError(`${s._methodName}() can only be used with update() and set()`);if(!i.path)throw i.createError(`${s._methodName}() is not currently supported inside arrays`);const a=s._toFieldTransform(i);a&&i.fieldTransforms.push(a)}(n,e),null;if(n===void 0&&e.ignoreUndefinedProperties)return null;if(e.path&&e.fieldMask.push(e.path),n instanceof Array){if(e.settings.arrayElement&&e.dataSource!==4)throw e.createError("Nested arrays are not supported");return function(s,i){const a=[];let c=0;for(const l of s){let d=Zt(l,i.childContextForArray(c));d==null&&(d={nullValue:"NULL_VALUE"}),a.push(d),c++}return{arrayValue:{values:a}}}(n,e)}return function(s,i,a){if((s=he(s))===null)return{nullValue:"NULL_VALUE"};if(typeof s=="number")return pa(i.serializer,s);if(typeof s=="boolean")return{booleanValue:s};if(typeof s=="string")return{stringValue:s};if(s instanceof Date){const c=Z.fromDate(s);return{timestampValue:Fr(i.serializer,c)}}if(s instanceof Z){const c=new Z(s.seconds,1e3*Math.floor(s.nanoseconds/1e3));return{timestampValue:Fr(i.serializer,c)}}if(td(s)){const c=Z.fromInstant(s),l=new Z(c.seconds,1e3*Math.floor(c.nanoseconds/1e3));return{timestampValue:Fr(i.serializer,l)}}if(s instanceof lt)return{geoPointValue:{latitude:s.latitude,longitude:s.longitude}};if(s instanceof Qe)return{bytesValue:Mh(i.serializer,s._byteString)};if(s instanceof se){const c=i.databaseId,l=s.firestore._databaseId;if(!l.isEqual(c))throw i.createError(`Document reference is for database ${l.projectId}/${l.database} but should be for database ${c.projectId}/${c.database}`);return{referenceValue:wa(s.firestore._databaseId||i.databaseId,s._key.path)}}if(s instanceof Le)return function(l,d){const p=l instanceof Le?l.toArray():l;return{mapValue:{fields:{[dh]:{stringValue:fh},[Gr]:{arrayValue:{values:p.map(w=>{if(typeof w!="number")throw d.createError("VectorValues must only contain numeric values.");return Ni(d.serializer,w)})}}}}}}(s,i);if(zh(s))return s._toProto(i.serializer);throw i.createError(`Unsupported field value: ${Vi(s)}`)}(n,e)}function ed(n,e){const t={};return ih(n)?e.path&&e.path.length>0&&e.fieldMask.push(e.path):cn(n,(r,s)=>{const i=Zt(s,e.childContextForField(r));i!=null&&(t[r]=i)}),{mapValue:{fields:t}}}function td(n){if(typeof n!="object"||n===null)return!1;if(typeof Temporal<"u"&&typeof Temporal.Instant=="function"&&n instanceof Temporal.Instant)return!0;const e=n;return e[Symbol.toStringTag]==="Temporal.Instant"&&typeof e.t=="bigint"}function nd(n){return!(typeof n!="object"||n===null||n instanceof Array||n instanceof Date||n instanceof Z||n instanceof lt||n instanceof Qe||n instanceof se||n instanceof Ui||n instanceof Le||td(n)||zh(n))}function Aa(n,e,t){if(!nd(t)||!hs(t)){const r=Vi(t);throw r==="an object"?e.createError(n+" a custom object"):e.createError(n+" "+r)}}function en(n,e,t){if((e=he(e))instanceof Mi)return e._internalPath;if(typeof e=="string")return rd(n,e);throw pi("Field path arguments must be of type string or ",n,!1,void 0,t)}const R_=new RegExp("[~\\*/\\[\\]]");function rd(n,e,t){if(e.search(R_)>=0)throw pi(`Invalid field path (${e}). Paths must not contain '~', '*', '/', '[', or ']'`,n,!1,void 0,t);try{return new Mi(...e.split("."))._internalPath}catch{throw pi(`Invalid field path (${e}). Paths must not be empty, begin with '.', end with '.', or contain '..'`,n,!1,void 0,t)}}function pi(n,e,t,r,s){const i=r&&!r.isEmpty(),a=s!==void 0;let c=`Function ${e}() called with invalid data`;t&&(c+=" (via `toFirestore()`)"),c+=". ";let l="";return(i||a)&&(l+=" (found",i&&(l+=` in field ${r}`),a&&(l+=` in document ${s}`),l+=")"),new D(C.INVALID_ARGUMENT,c+n+l)}function sd(n,e){return n.some(t=>t.isEqual(e))}function id(n){return typeof n._readUserData=="function"}/**
 * @license
 * Copyright 2025 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ve{constructor(e){this.optionDefinitions=e}_getKnownOptions(e,t){const r=ke.empty();for(const s in this.optionDefinitions)if(this.optionDefinitions.hasOwnProperty(s)){const i=this.optionDefinitions[s];if(s in e){const a=e[s];let c;i.nestedOptions&&hs(a)?c={mapValue:{fields:new Ve(i.nestedOptions).getOptionsProto(t,a)}}:a&&(c=Zt(a,t)??void 0),c&&r.set(We.fromServerFormat(i.serverName),c)}}return r}getOptionsProto(e,t,r){const s=this._getKnownOptions(t,e);if(r){const i=new Map(xm(r,(a,c)=>[We.fromServerFormat(c),a!==void 0?Zt(a,e):null]));s.setAll(i)}return s.value.mapValue.fields??{}}}/**
 * @license
 * Copyright 2024 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function P_(n){return typeof n=="object"&&n!==null&&!!("nullValue"in n&&(n.nullValue===null||n.nullValue==="NULL_VALUE")||"booleanValue"in n&&(n.booleanValue===null||typeof n.booleanValue=="boolean")||"integerValue"in n&&(n.integerValue===null||typeof n.integerValue=="number"||typeof n.integerValue=="string")||"doubleValue"in n&&(n.doubleValue===null||typeof n.doubleValue=="number")||"timestampValue"in n&&(n.timestampValue===null||function(t){return typeof t=="object"&&t!==null&&"seconds"in t&&(t.seconds===null||typeof t.seconds=="number"||typeof t.seconds=="string")&&"nanos"in t&&(t.nanos===null||typeof t.nanos=="number")}(n.timestampValue))||"stringValue"in n&&(n.stringValue===null||typeof n.stringValue=="string")||"bytesValue"in n&&(n.bytesValue===null||n.bytesValue instanceof Uint8Array)||"referenceValue"in n&&(n.referenceValue===null||typeof n.referenceValue=="string")||"geoPointValue"in n&&(n.geoPointValue===null||function(t){return typeof t=="object"&&t!==null&&"latitude"in t&&(t.latitude===null||typeof t.latitude=="number")&&"longitude"in t&&(t.longitude===null||typeof t.longitude=="number")}(n.geoPointValue))||"arrayValue"in n&&(n.arrayValue===null||function(t){return typeof t=="object"&&t!==null&&!(!("values"in t)||t.values!==null&&!Array.isArray(t.values))}(n.arrayValue))||"mapValue"in n&&(n.mapValue===null||function(t){return typeof t=="object"&&t!==null&&!(!("fields"in t)||t.fields!==null&&!hs(t.fields))}(n.mapValue))||"fieldReferenceValue"in n&&(n.fieldReferenceValue===null||typeof n.fieldReferenceValue=="string")||"functionValue"in n&&(n.functionValue===null||function(t){return typeof t=="object"&&t!==null&&!(!("name"in t)||t.name!==null&&typeof t.name!="string"||!("args"in t)||t.args!==null&&!Array.isArray(t.args))}(n.functionValue))||"pipelineValue"in n&&(n.pipelineValue===null||function(t){return typeof t=="object"&&t!==null&&!(!("stages"in t)||t.stages!==null&&!Array.isArray(t.stages))}(n.pipelineValue)))}function WI(){return new va("serverTimestamp")}function S_(n){return new Le(n)}/**
 * @license
 * Copyright 2024 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function k(n){let e;return n instanceof kn?n:(e=hs(n)?k_(n):n instanceof Array?D_(n):od(n,void 0),e)}function Do(n){if(n instanceof kn)return n;if(n instanceof Le)return ns(n);if(Array.isArray(n))return ns(S_(n));throw new Error("Unsupported value: "+typeof n)}function Ra(n){return qm(n)?Js(n):k(n)}class kn{constructor(){this._protoValueType="ProtoValue"}add(e){return new S("add",[this,k(e)],"add")}asBoolean(){if(this instanceof tn)return this;if(this instanceof ir)return new cd(this);if(this instanceof sr)return new N_(this);if(this instanceof S)return new ad(this);throw new D("invalid-argument",`Conversion of type ${typeof this} to BooleanExpression not supported.`)}subtract(e){return new S("subtract",[this,k(e)],"subtract")}multiply(e){return new S("multiply",[this,k(e)],"multiply")}divide(e){return new S("divide",[this,k(e)],"divide")}mod(e){return new S("mod",[this,k(e)],"mod")}equal(e){return new S("equal",[this,k(e)],"equal").asBoolean()}notEqual(e){return new S("not_equal",[this,k(e)],"notEqual").asBoolean()}lessThan(e){return new S("less_than",[this,k(e)],"lessThan").asBoolean()}lessThanOrEqual(e){return new S("less_than_or_equal",[this,k(e)],"lessThanOrEqual").asBoolean()}greaterThan(e){return new S("greater_than",[this,k(e)],"greaterThan").asBoolean()}greaterThanOrEqual(e){return new S("greater_than_or_equal",[this,k(e)],"greaterThanOrEqual").asBoolean()}arrayConcat(e,...t){const r=[e,...t].map(s=>k(s));return new S("array_concat",[this,...r],"arrayConcat")}arrayContains(e){return new S("array_contains",[this,k(e)],"arrayContains").asBoolean()}arrayContainsAll(e){const t=Array.isArray(e)?new kr(e.map(k),"arrayContainsAll"):e;return new S("array_contains_all",[this,t],"arrayContainsAll").asBoolean()}arrayContainsAny(e){const t=Array.isArray(e)?new kr(e.map(k),"arrayContainsAny"):e;return new S("array_contains_any",[this,t],"arrayContainsAny").asBoolean()}arrayReverse(){return new S("array_reverse",[this])}arrayLength(){return new S("array_length",[this],"arrayLength")}equalAny(e){const t=Array.isArray(e)?new kr(e.map(k),"equalAny"):e;return new S("equal_any",[this,t],"equalAny").asBoolean()}notEqualAny(e){const t=Array.isArray(e)?new kr(e.map(k),"notEqualAny"):e;return new S("not_equal_any",[this,t],"notEqualAny").asBoolean()}exists(){return new S("exists",[this],"exists").asBoolean()}charLength(){return new S("char_length",[this],"charLength")}like(e){return new S("like",[this,k(e)],"like").asBoolean()}regexContains(e){return new S("regex_contains",[this,k(e)],"regexContains").asBoolean()}regexFind(e){return new S("regex_find",[this,k(e)],"regexFind")}regexFindAll(e){return new S("regex_find_all",[this,k(e)],"regexFindAll")}regexMatch(e){return new S("regex_match",[this,k(e)],"regexMatch").asBoolean()}stringContains(e){return new S("string_contains",[this,k(e)],"stringContains").asBoolean()}startsWith(e){return new S("starts_with",[this,k(e)],"startsWith").asBoolean()}endsWith(e){return new S("ends_with",[this,k(e)],"endsWith").asBoolean()}toLower(){return new S("to_lower",[this],"toLower")}toUpper(){return new S("to_upper",[this],"toUpper")}trim(e){const t=[this];return e&&t.push(k(e)),new S("trim",t,"trim")}ltrim(e){const t=[this];return e&&t.push(k(e)),new S("ltrim",t,"ltrim")}rtrim(e){const t=[this];return e&&t.push(k(e)),new S("rtrim",t,"rtrim")}type(){return new S("type",[this])}isType(e){return new S("is_type",[this,ns(e)],"isType").asBoolean()}stringConcat(e,...t){const r=[e,...t].map(k);return new S("string_concat",[this,...r],"stringConcat")}stringIndexOf(e){return new S("string_index_of",[this,k(e)],"stringIndexOf")}stringRepeat(e){return new S("string_repeat",[this,k(e)],"stringRepeat")}stringReplaceAll(e,t){return new S("string_replace_all",[this,k(e),k(t)],"stringReplaceAll")}stringReplaceOne(e,t){return new S("string_replace_one",[this,k(e),k(t)],"stringReplaceOne")}concat(e,...t){const r=[e,...t].map(k);return new S("concat",[this,...r],"concat")}reverse(){return new S("reverse",[this],"reverse")}arrayFilter(e,t){return new S("array_filter",[this,k(e),t],"arrayFilter")}arrayTransform(e,t){return new S("array_transform",[this,k(e),t],"arrayTransform")}arrayTransformWithIndex(e,t,r){return new S("array_transform",[this,k(e),k(t),r],"arrayTransformWithIndex")}arraySlice(e,t){const r=[this,k(e)];return t!==void 0&&r.push(k(t)),new S("array_slice",r,"arraySlice")}arrayFirst(){return new S("array_first",[this],"arrayFirst")}arrayFirstN(e){return new S("array_first_n",[this,k(e)],"arrayFirstN")}arrayLast(){return new S("array_last",[this],"arrayLast")}arrayLastN(e){return new S("array_last_n",[this,k(e)],"arrayLastN")}arrayMaximum(){return new S("maximum",[this],"arrayMaximum")}arrayMaximumN(e){return new S("maximum_n",[this,k(e)],"arrayMaximumN")}arrayMinimum(){return new S("minimum",[this],"arrayMinimum")}arrayMinimumN(e){return new S("minimum_n",[this,k(e)],"arrayMinimumN")}arrayIndexOf(e){return new S("array_index_of",[this,k(e),k("first")],"arrayIndexOf")}arrayLastIndexOf(e){return new S("array_index_of",[this,k(e),k("last")],"arrayLastIndexOf")}arrayIndexOfAll(e){return new S("array_index_of_all",[this,k(e)],"arrayIndexOfAll")}byteLength(){return new S("byte_length",[this],"byteLength")}ceil(){return new S("ceil",[this])}floor(){return new S("floor",[this])}abs(){return new S("abs",[this])}exp(){return new S("exp",[this])}mapGet(e){return new S("map_get",[this,ns(e)],"mapGet")}mapSet(e,t,...r){const s=[this,k(e),k(t),...r.map(k)];return new S("map_set",s,"mapSet")}mapKeys(){return new S("map_keys",[this],"mapKeys")}mapValues(){return new S("map_values",[this],"mapValues")}mapEntries(){return new S("map_entries",[this],"mapEntries")}getField(e){return new S("get_field",[this,k(e)],"get_field")}count(){return qe._create("count",[this],"count")}sum(){return qe._create("sum",[this],"sum")}average(){return qe._create("average",[this],"average")}minimum(){return qe._create("minimum",[this],"minimum")}maximum(){return qe._create("maximum",[this],"maximum")}first(){return qe._create("first",[this],"first")}last(){return qe._create("last",[this],"last")}arrayAgg(){return qe._create("array_agg",[this],"arrayAgg")}arrayAggDistinct(){return qe._create("array_agg_distinct",[this],"arrayAggDistinct")}countDistinct(){return qe._create("count_distinct",[this],"countDistinct")}logicalMaximum(e,...t){const r=[e,...t];return new S("maximum",[this,...r.map(k)],"logicalMaximum")}logicalMinimum(e,...t){const r=[e,...t];return new S("minimum",[this,...r.map(k)],"minimum")}vectorLength(){return new S("vector_length",[this],"vectorLength")}cosineDistance(e){return new S("cosine_distance",[this,Do(e)],"cosineDistance")}dotProduct(e){return new S("dot_product",[this,Do(e)],"dotProduct")}euclideanDistance(e){return new S("euclidean_distance",[this,Do(e)],"euclideanDistance")}unixMicrosToTimestamp(){return new S("unix_micros_to_timestamp",[this],"unixMicrosToTimestamp")}timestampToUnixMicros(){return new S("timestamp_to_unix_micros",[this],"timestampToUnixMicros")}unixMillisToTimestamp(){return new S("unix_millis_to_timestamp",[this],"unixMillisToTimestamp")}timestampToUnixMillis(){return new S("timestamp_to_unix_millis",[this],"timestampToUnixMillis")}unixSecondsToTimestamp(){return new S("unix_seconds_to_timestamp",[this],"unixSecondsToTimestamp")}timestampToUnixSeconds(){return new S("timestamp_to_unix_seconds",[this],"timestampToUnixSeconds")}timestampAdd(e,t){return new S("timestamp_add",[this,k(e),k(t)],"timestampAdd")}timestampSubtract(e,t){return new S("timestamp_subtract",[this,k(e),k(t)],"timestampSubtract")}timestampDiff(e,t){return new S("timestamp_diff",[this,Ra(e),k(t)],"timestampDiff")}timestampExtract(e,t){const r=[this,k(e)];return t&&r.push(k(t)),new S("timestamp_extract",r,"timestampExtract")}documentId(){return new S("document_id",[this],"documentId")}parent(){return new S("parent",[this],"parent")}substring(e,t){const r=k(e);return new S("substring",t===void 0?[this,r]:[this,r,k(t)],"substring")}arrayGet(e){return new S("array_get",[this,k(e)],"arrayGet")}isError(){return new S("is_error",[this],"isError").asBoolean()}ifError(e){const t=new S("if_error",[this,k(e)],"ifError");return e instanceof tn?t.asBoolean():t}isAbsent(){return new S("is_absent",[this],"isAbsent").asBoolean()}mapRemove(e){return new S("map_remove",[this,k(e)],"mapRemove")}mapMerge(e,...t){const r=k(e),s=t.map(k);return new S("map_merge",[this,r,...s],"mapMerge")}pow(e){return new S("pow",[this,k(e)])}trunc(e){return e===void 0?new S("trunc",[this]):new S("trunc",[this,k(e)],"trunc")}round(e){return e===void 0?new S("round",[this]):new S("round",[this,k(e)],"round")}collectionId(){return new S("collection_id",[this])}length(){return new S("length",[this])}ln(){return new S("ln",[this])}sqrt(){return new S("sqrt",[this])}stringReverse(){return new S("string_reverse",[this])}ifAbsent(e){return new S("if_absent",[this,k(e)],"ifAbsent")}ifNull(e){return new S("if_null",[this,k(e)],"ifNull")}coalesce(e,...t){return new S("coalesce",[this,k(e),...t.map(k)],"coalesce")}join(e){return new S("join",[this,k(e)],"join")}log10(){return new S("log10",[this])}arraySum(){return new S("sum",[this])}split(e){return new S("split",[this,k(e)])}timestampTruncate(e,t){const r=[this,k(e)];return t&&r.push(k(t)),new S("timestamp_trunc",r)}ascending(){return x_(this)}descending(){return O_(this)}as(e){return new C_(this,e,"as")}}class qe{constructor(e,t){this.name=e,this.params=t,this.exprType="AggregateFunction",this._protoValueType="ProtoValue"}static _create(e,t,r){const s=new qe(e,t);return s._methodName=r,s}as(e){return new V_(this,e,"as")}_toProto(e){return{functionValue:{name:this.name,args:this.params.map(t=>t._toProto(e))}}}_readUserData(e){e=this._methodName?e.contextWith({methodName:this._methodName}):e,this.params.forEach(t=>t._readUserData(e))}}class V_{constructor(e,t,r){this.aggregate=e,this.alias=t,this._methodName=r}_readUserData(e){this.aggregate._readUserData(e)}}class C_{constructor(e,t,r){this.expr=e,this.alias=t,this._methodName=r,this.exprType="AliasedExpression",this.selectable=!0}_readUserData(e){this.expr._readUserData(e)}}class kr extends kn{constructor(e,t){super(),this.cr=e,this._methodName=t,this.expressionType="ListOfExpressions"}_toProto(e){return{arrayValue:{values:this.cr.map(t=>t._toProto(e))}}}_readUserData(e){this.cr.forEach(t=>t._readUserData(e))}}class sr extends kn{constructor(e,t){super(),this.fieldPath=e,this._methodName=t,this.expressionType="Field",this.selectable=!0}get _fieldPath(){return this.fieldPath}get fieldName(){return this.fieldPath.canonicalString()}get alias(){return this.fieldName}get expr(){return this}geoDistance(e){return new S("geo_distance",[this,k(e)],"geoDistance")}_toProto(e){return{fieldReferenceValue:this.fieldPath.canonicalString()}}_readUserData(e){}}function Js(n){return b_(n,"field")}function b_(n,e){return new sr(typeof n=="string"?ot===n?zg()._internalPath:en("field",n):n._internalPath,e)}class ir extends kn{constructor(e,t){super(),this.value=e,this._methodName=t,this.expressionType="Constant"}static _fromProto(e){const t=new ir(e,void 0);return t._protoValue=e,t}_toProto(e){return U(this._protoValue!==void 0,237),this._protoValue}_getValue(){return this._protoValue}_readUserData(e){e=this._methodName?e.contextWith({methodName:this._methodName}):e,P_(this._protoValue)||(this._protoValue=Zt(this.value,e))}}function ns(n,e){return od(n,"constant")}function od(n,e){const t=new ir(n,e);return typeof n=="boolean"?new cd(t):t}class S extends kn{constructor(e,t,r,s){super(),this.name=e,this.params=t,this.expressionType="Function",this._optionsProto=void 0,r!==void 0&&(this._methodName=r),s!==void 0&&(this._options=s)}get _optionsUtil(){return new Ve({})}_toProto(e){const t={functionValue:{name:this.name,args:this.params.map(r=>r._toProto(e))}};return this._optionsProto&&(t.functionValue.options=this._optionsProto),t}_readUserData(e){e=this._methodName?e.contextWith({methodName:this._methodName}):e,this.params.forEach(t=>t._readUserData(e)),this._options&&(this._optionsProto=this._optionsUtil.getOptionsProto(e,this._options))}}class tn extends kn{get _methodName(){return this._expr._methodName}countIf(){return qe._create("count_if",[this],"countIf")}not(){return new S("not",[this],"not").asBoolean()}conditional(e,t){return new S("conditional",[this,e,t],"conditional")}ifError(e){const t=k(e),r=new S("if_error",[this,t],"ifError");return t instanceof tn?r.asBoolean():r}_toProto(e){return this._expr._toProto(e)}_readUserData(e){this._expr._readUserData(e)}}class ad extends tn{constructor(e){super(),this._expr=e,this.expressionType="Function"}}class cd extends tn{constructor(e){super(),this._expr=e,this.expressionType="Constant"}_getValue(){return this._expr._getValue()}}class N_ extends tn{constructor(e){super(),this._expr=e,this.expressionType="Field"}}function k_(n,e){const t=[];for(const r in n)if(Object.prototype.hasOwnProperty.call(n,r)){const s=n[r];t.push(ns(r)),t.push(k(s))}return new S("map",t,"map")}function D_(n){return function(t,r){return new S("array",t.map(s=>k(s)),r)}(n,"array")}function x_(n){return new ud(Ra(n),"ascending","ascending")}function O_(n){return new ud(Ra(n),"descending","descending")}class ud{constructor(e,t,r){this.expr=e,this.direction=t,this._methodName=r,this._protoValueType="ProtoValue"}_toProto(e){return{mapValue:{fields:{direction:Wh(this.direction),expression:this.expr._toProto(e)}}}}_readUserData(e){this.expr._readUserData(e)}}/**
 * @license
 * Copyright 2024 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ge{constructor(e){this.optionsProto=void 0,{rawOptions:this.rawOptions,...this.knownOptions}=e}_readUserData(e){this.optionsProto=this._optionsUtil.getOptionsProto(e,this.knownOptions,this.rawOptions)}_toProto(e){return{name:this._name,options:this.optionsProto}}}class ld extends Ge{get _name(){return"add_fields"}get _optionsUtil(){return new Ve({})}constructor(e,t){super(t),this.fields=e}_toProto(e){return{...super._toProto(e),args:[ts(e,this.fields)]}}_readUserData(e){super._readUserData(e),nn(this.fields,e)}}class hd extends Ge{get _name(){return"aggregate"}get _optionsUtil(){return new Ve({})}constructor(e,t,r){super(r),this.groups=e,this.accumulators=t}_toProto(e){return{...super._toProto(e),args:[ts(e,this.accumulators),ts(e,this.groups)]}}_readUserData(e){super._readUserData(e),nn(this.groups,e),nn(this.accumulators,e)}}class dd extends Ge{get _name(){return"distinct"}get _optionsUtil(){return new Ve({})}constructor(e,t){super(t),this.groups=e}_toProto(e){return{...super._toProto(e),args:[ts(e,this.groups)]}}_readUserData(e){super._readUserData(e),nn(this.groups,e)}}class $i extends Ge{get _name(){return"collection"}get _optionsUtil(){return new Ve({forceIndex:{serverName:"force_index"}})}constructor(e,t){super(t),this.hr=e.startsWith("/")?e:"/"+e}_toProto(e){return{...super._toProto(e),args:[{referenceValue:this.hr}]}}_readUserData(e){super._readUserData(e)}}class ji extends Ge{get _name(){return"collection_group"}get _optionsUtil(){return new Ve({forceIndex:{serverName:"force_index"}})}constructor(e,t){super(t),this.collectionId=e}_toProto(e){return{...super._toProto(e),args:[{referenceValue:""},{stringValue:this.collectionId}]}}_readUserData(e){super._readUserData(e)}}class Pa extends Ge{get _name(){return"database"}get _optionsUtil(){return new Ve({})}_toProto(e){return{...super._toProto(e)}}_readUserData(e){super._readUserData(e)}}class Sa extends Ge{get _name(){return"documents"}get _optionsUtil(){return new Ve({})}constructor(e,t){if(super(t),!e||e.length===0)throw new D(C.INVALID_ARGUMENT,"Empty document paths are not allowed in DocumentsSource");const r=e.map(i=>i.startsWith("/")?i:"/"+i),s=new Set(r);if(s.size!==r.length)throw new D(C.INVALID_ARGUMENT,"Duplicate document paths are not allowed in DocumentsSource");this.Tr=r,this.Pr=s}_toProto(e){return{...super._toProto(e),args:this.Tr.map(t=>({referenceValue:t}))}}_readUserData(e){super._readUserData(e)}}class zi extends Ge{get _name(){return"where"}get _optionsUtil(){return new Ve({})}constructor(e,t){super(t),this.condition=e}_toProto(e){return{...super._toProto(e),args:[this.condition._toProto(e)]}}_readUserData(e){super._readUserData(e),nn(this.condition,e)}}class Vn extends Ge{get _name(){return"limit"}get _optionsUtil(){return new Ve({})}constructor(e,t){U(!isNaN(e)&&e!==1/0&&e!==-1/0,34860),super(t),this.limit=e}_toProto(e){return{...super._toProto(e),args:[pa(e,this.limit)]}}}class nl extends Ge{get _name(){return"offset"}get _optionsUtil(){return new Ve({})}constructor(e,t){super(t),this.offset=e}_toProto(e){return{...super._toProto(e),args:[pa(e,this.offset)]}}}class L_ extends Ge{get _name(){return"select"}get _optionsUtil(){return new Ve({})}constructor(e,t){super(t),this.selections=e}_toProto(e){return{...super._toProto(e),args:[ts(e,this.selections)]}}_readUserData(e){super._readUserData(e),nn(this.selections,e)}}class gt extends Ge{get _name(){return"sort"}get _optionsUtil(){return new Ve({})}constructor(e,t){super(t),this.orderings=e}_toProto(e){return{...super._toProto(e),args:this.orderings.map(t=>t._toProto(e))}}_readUserData(e){super._readUserData(e),nn(this.orderings,e)}}class Va extends Ge{get _name(){return"replace_with"}get _optionsUtil(){return new Ve({})}constructor(e,t){super(t),this.map=e}_toProto(e){return{...super._toProto(e),args:[this.map._toProto(e),Wh(Va.Ir)]}}_readUserData(e){super._readUserData(e),nn(this.map,e)}}Va.Ir="full_replace";function nn(n,e){return id(n)?n._readUserData(e):Array.isArray(n)?n.forEach(t=>t._readUserData(e)):n instanceof Map?n.forEach(t=>t._readUserData(e)):Object.values(n).forEach(t=>t._readUserData(e)),n}/**
 * @license
 * Copyright 2026 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Br{constructor(e,t,r,s){this._db=e,this.userDataReader=t,this._userDataWriter=r,this.stages=s}Vr(e,t){const r=this.userDataReader.createContext(3,e);return id(t)?t._readUserData(r):Array.isArray(t)?t.forEach(s=>s._readUserData(r)):t.forEach(s=>s._readUserData(r)),t}where(e){const t=this.stages.map(r=>r);return this.Vr("where",e),t.push(new zi(e,{})),new Br(this._db,this.userDataReader,this._userDataWriter,t)}limit(e){const t=this.stages.map(r=>r);return t.push(new Vn(e,{})),new Br(this._db,this.userDataReader,this._userDataWriter,t)}sort(e,...t){const r=this.stages.map(s=>s);return"orderings"in e?r.push(new gt(this.Vr("sort",e.orderings),{})):r.push(new gt(this.Vr("sort",[e,...t]),{})),new Br(this._db,this.userDataReader,this._userDataWriter,r)}dr(e){return{pipeline:{stages:this.stages.map(t=>t._toProto(e))}}}}// Copyright 2024 Google LLC* @license
class Ne{constructor(e,t,r){this.serializer=e,this.stages=t,this.listenOptions=r,this.isCorePipeline=!0}getPipelineCollection(){return Wi(this)}getPipelineCollectionGroup(){return Ca(this)}getPipelineCollectionId(){return M_(this)}getPipelineDocuments(){return Xo(this)}getPipelineFlavor(){return function(t){let r="exact";return t.stages.forEach((s,i)=>{s._name!==dd.name&&s._name!==hd.name||(r="keyless"),s._name===L_.name&&r==="exact"&&(r="augmented"),s._name===ld.name&&i<t.stages.length-1&&r==="exact"&&(r="augmented")}),r}(this)}getPipelineSourceType(){return Gt(this)}}function Gt(n){const e=n.stages[0];return e instanceof $i||e instanceof ji||e instanceof Pa||e instanceof Sa?e._name:"unknown"}function Wi(n){if(Gt(n)==="collection")return n.stages[0].hr}function Ca(n){if(Gt(n)==="collection_group")return n.stages[0].collectionId}function M_(n){switch(Gt(n)){case"collection":return X.fromString(Wi(n)).lastSegment();case"collection_group":return Ca(n);default:return}}function Xo(n){if(Gt(n)==="documents")return n.stages[0].Tr}class E{constructor(e,t){this.type=e,this.value=t}static mr(){return new E("ERROR",void 0)}static pr(){return new E("UNSET",void 0)}static gr(){return new E("NULL",Kn)}static newValue(e){return ze(e)?new E("NULL",Kn):function(r){return!!r&&"booleanValue"in r}(e)?new E("BOOLEAN",e):at(e)?new E("INT",e):yn(e)?new E("DOUBLE",e):function(r){return!!r&&"timestampValue"in r&&!!r.timestampValue}(e)?new E("TIMESTAMP",e):function(r){return!!r&&"stringValue"in r}(e)?new E("STRING",e):function(r){return!!r&&"bytesValue"in r}(e)?new E("BYTES",e):e.referenceValue?new E("REFERENCE",e):e.geoPointValue?new E("GEO_POINT",e):Yn(e)?new E("ARRAY",e):ai(e)?new E("VECTOR",e):wn(e)?new E("MAP",e):new E("ERROR",void 0)}yr(){return this.type==="ERROR"||this.type==="UNSET"}wr(){return this.type==="NULL"}}function qr(n){if(!n.yr())return n.value}function fd(n){return n instanceof tn?n._expr:n}function q(n){if((n=fd(n))instanceof sr)return new U_(n);if(n instanceof ir)return new F_(n);if(n instanceof kr)return new B_(n);if(n instanceof S){if(n.name==="add")return new j_(n);if(n.name==="subtract")return new z_(n);if(n.name==="multiply")return new W_(n);if(n.name==="divide")return new H_(n);if(n.name==="mod")return new G_(n);if(n.name==="and")return new K_(n);if(n.name==="equal")return new oy(n);if(n.name==="not_equal")return new ay(n);if(n.name==="less_than")return new cy(n);if(n.name==="less_than_or_equal")return new uy(n);if(n.name==="greater_than")return new ly(n);if(n.name==="greater_than_or_equal")return new hy(n);if(n.name==="array_concat")return new dy(n);if(n.name==="array_reverse")return new fy(n);if(n.name==="array_contains")return new py(n);if(n.name==="array_contains_all")return new my(n);if(n.name==="array_contains_any")return new gy(n);if(n.name==="array_length")return new _y(n);if(n.name==="array_element")return new yy(n);if(n.name==="equal_any")return new pd(n);if(n.name==="not_equal_any")return new Y_(n);if(n.name==="is_nan")return new J_(n);if(n.name==="is_not_nan")return new X_(n);if(n.name==="is_null")return new Z_(n);if(n.name==="is_not_null")return new ey(n);if(n.name==="is_error")return new ty(n);if(n.name==="exists")return new ny(n);if(n.name==="not")return new Hi(n);if(n.name==="or")return new Q_(n);if(n.name==="xor")return new ba(n);if(n.name==="conditional")return new ry(n);if(n.name==="maximum")return new sy(n);if(n.name==="minimum")return new iy(n);if(n.name==="reverse")return new Ey(n);if(n.name==="replace_first")return new wy(n);if(n.name==="replace_all")return new Ty(n);if(n.name==="char_length")return new Iy(n);if(n.name==="byte_length")return new vy(n);if(n.name==="like")return new Ay(n);if(n.name==="regex_contains")return new Ry(n);if(n.name==="regex_match")return new Py(n);if(n.name==="string_contains")return new Sy(n);if(n.name==="starts_with")return new Vy(n);if(n.name==="ends_with")return new Cy(n);if(n.name==="to_lower")return new by(n);if(n.name==="to_upper")return new Ny(n);if(n.name==="trim")return new ky(n);if(n.name==="string_concat")return new Dy(n);if(n.name==="map_get")return new xy(n);if(n.name==="cosine_distance")return new Oy(n);if(n.name==="dot_product")return new Ly(n);if(n.name==="euclidean_distance")return new My(n);if(n.name==="vector_length")return new Uy(n);if(n.name==="unix_micros_to_timestamp")return new jy(n);if(n.name==="timestamp_to_unix_micros")return new Hy(n);if(n.name==="unix_millis_to_timestamp")return new zy(n);if(n.name==="timestamp_to_unix_millis")return new Gy(n);if(n.name==="unix_seconds_to_timestamp")return new Wy(n);if(n.name==="timestamp_to_unix_seconds")return new Ky(n);if(n.name==="timestamp_add")return new Qy(n);if(n.name==="timestamp_subtract")return new Yy(n)}throw new Error(`Unknown Expr : ${n}`)}class U_{constructor(e){this.expr=e}evaluate(e,t){if(this.expr.fieldName===ot)return E.newValue({referenceValue:fi(e.serializer,t.key)});if(this.expr.fieldName==="__update_time__")return E.newValue({timestampValue:Ys(e.serializer,t.version)});if(this.expr.fieldName==="__create_time__")return E.newValue({timestampValue:Ys(e.serializer,t.createTime)});const r=t.data.field(this.expr._fieldPath);return r?Ci(r)?E.newValue(function(i,a){if(i.serverTimestampBehavior==="estimate")return{timestampValue:Ys(i.serializer,j.fromTimestamp(Gn(a)))};if(i.serverTimestampBehavior==="previous"){const c=fs(a);if(c)return c}return{nullValue:"NULL_VALUE"}}(e,r)):E.newValue(r):E.pr()}}class F_{constructor(e){this.expr=e}evaluate(e,t){return E.newValue(this.expr._getValue())}}class B_{constructor(e){this.expr=e}evaluate(e,t){const r=this.expr.cr.map(s=>q(s).evaluate(e,t));return r.some(s=>s.yr())?E.mr():E.newValue({arrayValue:{values:r.map(s=>s.value)}})}}function we(n){return yn(n)?Number(n.doubleValue):Number(n.integerValue)}function dt(n){return BigInt(n.integerValue)}const q_=BigInt("0x7fffffffffffffff"),$_=-BigInt("0x8000000000000000");class _s{constructor(e){this.expr=e}evaluate(e,t){U(this.expr.params.length>=2,24778);const r=q(this.expr.params[0]).evaluate(e,t),s=q(this.expr.params[1]).evaluate(e,t);let i=this.br(r,s);for(const a of this.expr.params.slice(2)){const c=q(a).evaluate(e,t);i=this.br(i,c)}return i}br(e,t){if(e.yr()||t.yr())return E.mr();if(e.wr()||t.wr())return E.gr();const r=e.value,s=t.value;if(!yn(r)&&!at(r)||!yn(s)&&!at(s))return E.mr();if(yn(r)||yn(s)){const i=this.Sr(r,s);return i?E.newValue(i):E.mr()}if(at(r)&&at(s)){const i=this.vr(r,s);return i===void 0?E.mr():typeof i=="number"?E.newValue({doubleValue:i}):i<$_||i>q_?E.mr():E.newValue({integerValue:`${i}`})}return E.mr()}}function Rt(n,e){return fe(n)!==fe(e)?"TYPE_MISMATCH":Fe(n)||Fe(e)?"NOT_EQ":ze(n)&&ze(e)?"EQ":ze(n)||ze(e)?"NULL":Yn(n)&&Yn(e)?function(r,s){var a,c,l;if(((a=r.values)==null?void 0:a.length)!==((c=s.values)==null?void 0:c.length))return"NOT_EQ";let i=!1;for(let d=0;d<(((l=r.values)==null?void 0:l.length)??0);d++){const p=r.values[d],m=s.values[d];switch(Rt(p,m)){case"EQ":break;case"NOT_EQ":case"TYPE_MISMATCH":return"NOT_EQ";case"NULL":i=!0;break;default:B(44609,{Dr:p,Cr:m})}}return i?"NULL":"EQ"}(n.arrayValue,e.arrayValue):ai(n)&&ai(e)||wn(n)&&wn(e)?function(r,s){const i=r.fields||{},a=s.fields||{};if(ii(i)!==ii(a))return"NOT_EQ";let c=!1;for(const l in i)if(i.hasOwnProperty(l)){if(a[l]===void 0)return"NOT_EQ";switch(Rt(i[l],a[l])){case"NOT_EQ":case"TYPE_MISMATCH":return"NOT_EQ";case"NULL":c=!0}}return c?"NULL":"EQ"}(n.mapValue,e.mapValue):function(r,s){return Ye(r,s,{u:!1,i:!0,o:!0})}(n,e)?"EQ":"NOT_EQ"}class j_ extends _s{vr(e,t){return dt(e)+dt(t)}Sr(e,t){return{doubleValue:we(e)+we(t)}}}class z_ extends _s{constructor(e){super(e),this.expr=e}vr(e,t){return dt(e)-dt(t)}Sr(e,t){return{doubleValue:we(e)-we(t)}}}class W_ extends _s{constructor(e){super(e),this.expr=e}vr(e,t){return dt(e)*dt(t)}Sr(e,t){return{doubleValue:we(e)*we(t)}}}class H_ extends _s{constructor(e){super(e),this.expr=e}vr(e,t){const r=dt(t);if(r!==BigInt(0))return dt(e)/r}Sr(e,t){const r=we(t);return r===0?{doubleValue:Hr(r)?Number.NEGATIVE_INFINITY:Number.POSITIVE_INFINITY}:{doubleValue:we(e)/r}}}class G_ extends _s{constructor(e){super(e),this.expr=e}vr(e,t){const r=dt(t);if(r!==BigInt(0))return dt(e)%r}Sr(e,t){const r=we(t);if(r!==0)return{doubleValue:we(e)%r}}}class K_{constructor(e){this.expr=e}evaluate(e,t){var i;let r=!1,s=!1;for(const a of this.expr.params){const c=q(a).evaluate(e,t);switch(c.type){case"BOOLEAN":if(!((i=c.value)!=null&&i.booleanValue))return E.newValue(ye);break;case"NULL":s=!0;break;default:r=!0}}return r?E.mr():s?E.gr():E.newValue(Me)}}class Hi{constructor(e){this.expr=e}evaluate(e,t){var s;U(this.expr.params.length===1,9634);const r=q(this.expr.params[0]).evaluate(e,t);switch(r.type){case"BOOLEAN":return E.newValue({booleanValue:!((s=r.value)!=null&&s.booleanValue)});case"NULL":return E.gr();default:return E.mr()}}}class Q_{constructor(e){this.expr=e}evaluate(e,t){var i;let r=!1,s=!1;for(const a of this.expr.params){const c=q(a).evaluate(e,t);switch(c.type){case"BOOLEAN":if((i=c.value)!=null&&i.booleanValue)return E.newValue(Me);break;case"NULL":s=!0;break;default:r=!0}}return r?E.mr():s?E.gr():E.newValue(ye)}}class ba{constructor(e){this.expr=e}evaluate(e,t){var i;let r=!1,s=!1;for(const a of this.expr.params){const c=q(a).evaluate(e,t);switch(c.type){case"BOOLEAN":r=ba.xor(r,!!((i=c.value)!=null&&i.booleanValue));break;case"NULL":s=!0;break;default:return E.mr()}}return s?E.gr():E.newValue({booleanValue:r})}static xor(e,t){return(e||t)&&!(e&&t)}}class pd{constructor(e){this.expr=e}evaluate(e,t){var a,c;U(this.expr.params.length===2,55094);let r=!1;const s=q(this.expr.params[0]).evaluate(e,t);switch(s.type){case"NULL":r=!0;break;case"ERROR":case"UNSET":return E.mr()}const i=q(this.expr.params[1]).evaluate(e,t);switch(i.type){case"ARRAY":break;case"NULL":r=!0;break;default:return E.mr()}if(r)return E.gr();for(const l of((c=(a=i.value)==null?void 0:a.arrayValue)==null?void 0:c.values)??[])switch(ze(s.value)&&ze(l)?"EQ":Rt(s.value,l)){case"EQ":return E.newValue(Me);case"NOT_EQ":case"TYPE_MISMATCH":break;case"NULL":r=!0;break;default:B(44608,{value:s.value,candidate:l})}return r?E.gr():E.newValue(ye)}}class Y_{constructor(e){this.expr=e}evaluate(e,t){return new Hi(new S("not",[new S("equal_any",this.expr.params)])).evaluate(e,t)}}class J_{constructor(e){this.expr=e}evaluate(e,t){U(this.expr.params.length===1,23322);const r=q(this.expr.params[0]).evaluate(e,t);switch(r.type){case"INT":return E.newValue(ye);case"DOUBLE":return E.newValue({booleanValue:isNaN(we(r.value))});case"NULL":return E.gr();default:return E.mr()}}}class X_{constructor(e){this.expr=e}evaluate(e,t){return U(this.expr.params.length===1,50406),new Hi(new S("not",[new S("is_nan",this.expr.params)])).evaluate(e,t)}}class Z_{constructor(e){this.expr=e}evaluate(e,t){switch(U(this.expr.params.length===1,23123),q(this.expr.params[0]).evaluate(e,t).type){case"NULL":return E.newValue(Me);case"UNSET":case"ERROR":return E.mr();default:return E.newValue(ye)}}}class ey{constructor(e){this.expr=e}evaluate(e,t){return U(this.expr.params.length===1,23167),new Hi(new S("not",[new S("is_null",this.expr.params)])).evaluate(e,t)}}class ty{constructor(e){this.expr=e}evaluate(e,t){return U(this.expr.params.length===1,5228),q(this.expr.params[0]).evaluate(e,t).type==="ERROR"?E.newValue(Me):E.newValue(ye)}}class ny{constructor(e){this.expr=e}evaluate(e,t){switch(U(this.expr.params.length===1,6877),q(this.expr.params[0]).evaluate(e,t).type){case"ERROR":return E.mr();case"UNSET":return E.newValue(ye);default:return E.newValue(Me)}}}class ry{constructor(e){this.expr=e}evaluate(e,t){var s;U(this.expr.params.length===3,11706);const r=q(this.expr.params[0]).evaluate(e,t);switch(r.type){case"BOOLEAN":return(s=r.value)!=null&&s.booleanValue?q(this.expr.params[1]).evaluate(e,t):q(this.expr.params[2]).evaluate(e,t);case"NULL":return q(this.expr.params[2]).evaluate(e,t);default:return E.mr()}}}class sy{constructor(e){this.expr=e}evaluate(e,t){const r=this.expr.params.map(i=>q(i).evaluate(e,t));let s;for(const i of r)switch(i.type){case"ERROR":case"UNSET":case"NULL":continue;default:s=s===void 0||Ue(i.value,s.value)>0?i:s}return s===void 0?E.gr():s}}class iy{constructor(e){this.expr=e}evaluate(e,t){const r=this.expr.params.map(i=>q(i).evaluate(e,t));let s;for(const i of r)switch(i.type){case"ERROR":case"UNSET":case"NULL":continue;default:s=s===void 0||Ue(i.value,s.value)<0?i:s}return s===void 0?E.gr():s}}class or{constructor(e){this.expr=e}evaluate(e,t){U(this.expr.params.length===2,31033,`${this.expr.name}() function should have exactly 2 params`);const r=q(this.expr.params[0]).evaluate(e,t);switch(r.type){case"ERROR":case"UNSET":return E.mr()}const s=q(this.expr.params[1]).evaluate(e,t);switch(s.type){case"ERROR":case"UNSET":return E.mr()}return this.Fr(r,s)}}class oy extends or{constructor(e){super(e),this.expr=e}Fr(e,t){if(e.wr()&&t.wr())return E.newValue(Me);if(e.wr()||t.wr()||Fe(e.value)||Fe(t.value)||fe(e.value)!==fe(t.value))return E.newValue(ye);switch(Rt(e.value,t.value)){case"EQ":return E.newValue(Me);case"NOT_EQ":return E.newValue(ye);case"NULL":return E.gr();default:B(44615,{left:e,right:t})}}}class ay extends or{constructor(e){super(e),this.expr=e}Fr(e,t){switch(Rt(e.value,t.value)){case"EQ":return E.newValue(ye);case"NOT_EQ":case"TYPE_MISMATCH":return E.newValue(Me);case"NULL":return E.gr();default:B(44614,{left:e,right:t})}}}class cy extends or{constructor(e){super(e),this.expr=e}Fr(e,t){return fe(e.value)!==fe(t.value)||Fe(e.value)||Fe(t.value)?E.newValue(ye):E.newValue({booleanValue:Ue(e.value,t.value)<0})}}class uy extends or{constructor(e){super(e),this.expr=e}Fr(e,t){return fe(e.value)!==fe(t.value)||Fe(e.value)||Fe(t.value)?E.newValue(ye):Rt(e.value,t.value)==="EQ"?E.newValue(Me):E.newValue({booleanValue:Ue(e.value,t.value)<0})}}class ly extends or{constructor(e){super(e),this.expr=e}Fr(e,t){return fe(e.value)!==fe(t.value)||Fe(e.value)||Fe(t.value)?E.newValue(ye):E.newValue({booleanValue:Ue(e.value,t.value)>0})}}class hy extends or{constructor(e){super(e),this.expr=e}Fr(e,t){return fe(e.value)!==fe(t.value)||Fe(e.value)||Fe(t.value)?E.newValue(ye):Rt(e.value,t.value)==="EQ"?E.newValue(Me):E.newValue({booleanValue:Ue(e.value,t.value)>0})}}class dy{constructor(e){this.expr=e}evaluate(e,t){throw new Error("Unimplemented")}}class fy{constructor(e){this.expr=e}evaluate(e,t){var s;U(this.expr.params.length===1,216);const r=q(this.expr.params[0]).evaluate(e,t);switch(r.type){case"NULL":return E.gr();case"ARRAY":{const i=((s=r.value.arrayValue)==null?void 0:s.values)??[];return E.newValue({arrayValue:{values:[...i].reverse()}})}default:return E.mr()}}}class py{constructor(e){this.expr=e}evaluate(e,t){return U(this.expr.params.length===2,52884),new pd(new S("eq_any",[this.expr.params[1],this.expr.params[0]])).evaluate(e,t)}}class my{constructor(e){this.expr=e}evaluate(e,t){var l,d,p,m;U(this.expr.params.length===2,1392);let r=!1;const s=q(this.expr.params[0]).evaluate(e,t);switch(s.type){case"ARRAY":break;case"NULL":r=!0;break;default:return E.mr()}const i=q(this.expr.params[1]).evaluate(e,t);switch(i.type){case"ARRAY":break;case"NULL":r=!0;break;default:return E.mr()}if(r)return E.gr();const a=((d=(l=i.value)==null?void 0:l.arrayValue)==null?void 0:d.values)??[],c=((m=(p=s.value)==null?void 0:p.arrayValue)==null?void 0:m.values)??[];for(const w of a){let V=!1;r=!1;for(const N of c){switch(ze(w)&&ze(N)?"EQ":Rt(w,N)){case"EQ":V=!0;break;case"NOT_EQ":case"TYPE_MISMATCH":break;case"NULL":r=!0;break;default:B(44613,{value:N,search:w})}if(V)break}if(!V)return E.newValue(ye)}return E.newValue(Me)}}class gy{constructor(e){this.expr=e}evaluate(e,t){var l,d,p,m;U(this.expr.params.length===2,2680);let r=!1;const s=q(this.expr.params[0]).evaluate(e,t);switch(s.type){case"ARRAY":break;case"NULL":r=!0;break;default:return E.mr()}const i=q(this.expr.params[1]).evaluate(e,t);switch(i.type){case"ARRAY":break;case"NULL":r=!0;break;default:return E.mr()}if(r)return E.gr();const a=((d=(l=i.value)==null?void 0:l.arrayValue)==null?void 0:d.values)??[],c=((m=(p=s.value)==null?void 0:p.arrayValue)==null?void 0:m.values)??[];for(const w of c)for(const V of a)switch(ze(w)&&ze(V)?"EQ":Rt(w,V)){case"EQ":return E.newValue(Me);case"NOT_EQ":case"TYPE_MISMATCH":break;case"NULL":r=!0;break;default:B(60403,{value:w,search:V})}return r?E.gr():E.newValue(ye)}}class _y{constructor(e){this.expr=e}evaluate(e,t){var s,i,a;U(this.expr.params.length===1,38605);const r=q(this.expr.params[0]).evaluate(e,t);switch(r.type){case"NULL":return E.gr();case"ARRAY":return E.newValue({integerValue:`${((a=(i=(s=r.value)==null?void 0:s.arrayValue)==null?void 0:i.values)==null?void 0:a.length)??0}`});default:return E.mr()}}}class yy{constructor(e){this.expr=e}evaluate(e,t){throw new Error("Unimplemented")}}class Ey{constructor(e){this.expr=e}evaluate(e,t){var s,i;U(this.expr.params.length===1,1508);const r=q(this.expr.params[0]).evaluate(e,t);switch(r.type){case"NULL":return E.gr();case"BYTES":{const a=(s=r.value)==null?void 0:s.bytesValue;if(typeof a=="string"){const c=de.fromBase64String(a).toUint8Array();return c.reverse(),E.newValue({bytesValue:de.fromUint8Array(c).toBase64()})}return E.newValue({bytesValue:new Uint8Array(a).reverse()})}case"STRING":{const a=(i=r.value)==null?void 0:i.stringValue,c=new Intl.__PRIVATE_Segmenter(void 0,{granularity:"grapheme"}).segment(a),l=Array.from(c,d=>d.segment).reverse();return E.newValue({stringValue:l.join("")})}default:return E.mr()}}}class wy{constructor(e){this.expr=e}evaluate(e,t){throw new Error("Unimplemented")}}class Ty{constructor(e){this.expr=e}evaluate(e,t){throw new Error("Unimplemented")}}class Iy{constructor(e){this.expr=e}evaluate(e,t){U(this.expr.params.length===1,19400);const r=q(this.expr.params[0]).evaluate(e,t);switch(r.type){case"NULL":return E.gr();case"STRING":{const s=function(a){let c=0;for(let l=0;l<a.length;l++){const d=a.codePointAt(l);if(d===void 0)return;if(d<=65535)if(d>=55296&&d<=57343)if(d<=56319){const p=a.codePointAt(l+1);p!==void 0&&p>=56320&&p<=57343?(c+=1,l++):c+=1}else c+=1;else c+=1;else{if(!(d<=1114111))return;c+=1,l++}}return c}(r.value.stringValue);return s===void 0?E.mr():E.newValue({integerValue:s})}default:return E.mr()}}}class vy{constructor(e){this.expr=e}evaluate(e,t){var s,i;U(this.expr.params.length===1,8486);const r=q(this.expr.params[0]).evaluate(e,t);switch(r.type){case"BYTES":{const a=(s=r.value)==null?void 0:s.bytesValue;return typeof a=="string"?E.newValue({integerValue:de.fromBase64String(a).toUint8Array().length}):E.newValue({integerValue:new Uint8Array(a).length})}case"STRING":{const a=function(l){let d=0;for(let p=0;p<l.length;p++){const m=l.codePointAt(p);if(m===void 0)return;if(m>=55296&&m<=57343){if(!(m<=56319))return;{const w=l.codePointAt(p+1);if(w===void 0||!(w>=56320&&w<=57343))return;d+=4,p++}}else if(m<=127)d+=1;else if(m<=2047)d+=2;else if(m<=65535)d+=3;else{if(!(m<=1114111))return;d+=4,p++}}return d}((i=r.value)==null?void 0:i.stringValue);return a===void 0?E.mr():E.newValue({integerValue:a})}case"NULL":return E.gr();default:return E.mr()}}}class ar{constructor(e){this.expr=e}evaluate(e,t){var a,c;U(this.expr.params.length===2,39773,`${this.expr.name}() function should have exactly two parameters`);let r=!1;const s=q(this.expr.params[0]).evaluate(e,t);switch(s.type){case"STRING":break;case"NULL":r=!0;break;default:return E.mr()}const i=q(this.expr.params[1]).evaluate(e,t);switch(i.type){case"STRING":break;case"NULL":r=!0;break;default:return E.mr()}return r?E.gr():this.Or((a=s.value)==null?void 0:a.stringValue,(c=i.value)==null?void 0:c.stringValue)}}class Ay extends ar{Or(e,t){try{const r=function(a){let c="";for(let l=0;l<a.length;l++){const d=a.charAt(l);switch(d){case"_":c+=".";break;case"%":c+=".*";break;case"\\":case".":case"*":case"?":case"+":case"^":case"$":case"|":case"(":case")":case"[":case"]":case"{":case"}":c+="\\"+d;break;default:c+=d}}return"^"+c+"$"}(t),s=aa.compile(r);return E.newValue({booleanValue:s.matches(e)})}catch(r){return tt(`Invalid LIKE pattern converted to regex: ${t}, returning error. Error: ${r}`),E.mr()}}}class Ry extends ar{Or(e,t){try{const r=aa.compile(t);return E.newValue({booleanValue:r.test(e)})}catch{return tt(`Invalid regex pattern found in regex_contains: ${t}, returning error`),E.mr()}}}class Py extends ar{Or(e,t){try{return E.newValue({booleanValue:aa.compile(t).matches(e)})}catch{return tt(`Invalid regex pattern found in regex_match: ${t}, returning error`),E.mr()}}}class Sy extends ar{Or(e,t){return E.newValue({booleanValue:e.includes(t)})}}class Vy extends ar{Or(e,t){return E.newValue({booleanValue:e.startsWith(t)})}}class Cy extends ar{Or(e,t){return E.newValue({booleanValue:e.endsWith(t)})}}class by{constructor(e){this.expr=e}evaluate(e,t){var s,i;U(this.expr.params.length===1,29079);const r=q(this.expr.params[0]).evaluate(e,t);switch(r.type){case"STRING":return E.newValue({stringValue:(i=(s=r.value)==null?void 0:s.stringValue)==null?void 0:i.toLowerCase()});case"NULL":return E.gr();default:return E.mr()}}}class Ny{constructor(e){this.expr=e}evaluate(e,t){var s,i;U(this.expr.params.length===1,60487);const r=q(this.expr.params[0]).evaluate(e,t);switch(r.type){case"STRING":return E.newValue({stringValue:(i=(s=r.value)==null?void 0:s.stringValue)==null?void 0:i.toUpperCase()});case"NULL":return E.gr();default:return E.mr()}}}class ky{constructor(e){this.expr=e}evaluate(e,t){var s,i;U(this.expr.params.length===1,28544);const r=q(this.expr.params[0]).evaluate(e,t);switch(r.type){case"STRING":return E.newValue({stringValue:(i=(s=r.value)==null?void 0:s.stringValue)==null?void 0:i.trim()});case"NULL":return E.gr();default:return E.mr()}}}class Dy{constructor(e){this.expr=e}evaluate(e,t){const r=this.expr.params.map(a=>q(a).evaluate(e,t));let s="",i=!1;for(const a of r)switch(a.type){case"STRING":s+=a.value.stringValue;break;case"NULL":i=!0;break;default:return E.mr()}return i?E.gr():E.newValue({stringValue:s})}}class xy{constructor(e){this.expr=e}evaluate(e,t){var a,c,l,d;U(this.expr.params.length===2,4483);const r=q(this.expr.params[0]).evaluate(e,t);switch(r.type){case"UNSET":return E.pr();case"MAP":break;default:return E.mr()}const s=q(this.expr.params[1]).evaluate(e,t);if(s.type!=="STRING")return E.mr();const i=(d=(c=(a=r.value)==null?void 0:a.mapValue)==null?void 0:c.fields)==null?void 0:d[(l=s.value)==null?void 0:l.stringValue];return i===void 0?E.pr():E.newValue(i)}}class Na{constructor(e){this.expr=e}evaluate(e,t){var d,p;U(this.expr.params.length===2,25231,`${this.expr.name}() function should have exactly 2 params`);let r=!1;const s=q(this.expr.params[0]).evaluate(e,t);switch(s.type){case"VECTOR":break;case"NULL":r=!0;break;default:return E.mr()}const i=q(this.expr.params[1]).evaluate(e,t);switch(i.type){case"VECTOR":break;case"NULL":r=!0;break;default:return E.mr()}if(r)return E.gr();const a=Wo(s.value),c=Wo(i.value);if(a===void 0||c===void 0||((d=a.values)==null?void 0:d.length)!==((p=c.values)==null?void 0:p.length))return E.mr();const l=this.Mr(a,c);return l===void 0||isNaN(l)?E.mr():E.newValue({doubleValue:l})}}class Oy extends Na{Mr(e,t){const r=(e==null?void 0:e.values)??[],s=(t==null?void 0:t.values)??[];if(r.length===0)return;let i=0,a=0,c=0;for(let d=0;d<r.length;d++){if(!Jt(r[d])||!Jt(s[d]))return;const p=we(r[d]),m=we(s[d]);i+=p*m,a+=p*p,c+=m*m}const l=Math.sqrt(a)*Math.sqrt(c);if(l!==0)return 1-Math.max(-1,Math.min(1,i/l))}}class Ly extends Na{Mr(e,t){const r=(e==null?void 0:e.values)??[],s=(t==null?void 0:t.values)??[];if(r.length===0)return 0;let i=0;for(let a=0;a<r.length;a++){if(!Jt(r[a])||!Jt(s[a]))return;i+=we(r[a])*we(s[a])}return i}}class My extends Na{Mr(e,t){const r=(e==null?void 0:e.values)??[],s=(t==null?void 0:t.values)??[];if(r.length===0)return 0;let i=0;for(let a=0;a<r.length;a++){if(!Jt(r[a])||!Jt(s[a]))return;const c=we(r[a]),l=we(s[a]);i+=Math.pow(c-l,2)}return Math.sqrt(i)}}class Uy{constructor(e){this.expr=e}evaluate(e,t){var s;U(this.expr.params.length===1,39044);const r=q(this.expr.params[0]).evaluate(e,t);switch(r.type){case"VECTOR":{const i=Wo(r.value);return E.newValue({integerValue:((s=i==null?void 0:i.values)==null?void 0:s.length)??0})}case"NULL":return E.gr();default:return E.mr()}}}const rs=BigInt(-62135596800),ss=BigInt(253402300799),mi=BigInt(1e3),Kt=BigInt(1e6),Fy=rs*mi,By=ss*mi+BigInt(999),qy=rs*Kt,$y=ss*Kt+BigInt(999999);function ka(n){return n>=qy&&n<=$y}function md(n){return n>=rs&&n<=ss}function is(n,e){const t=BigInt(n);return!(t<rs||t>ss)&&!(e<0||e>=1e9)&&(t!==rs||e===0)&&!(t===ss&&e>999999999)}function gd(n,e){return e<0?{seconds:n-1,nanos:e+1e9}:{seconds:n,nanos:e}}function Da(n){return BigInt(n.seconds)*Kt+BigInt(Math.trunc(n.nanoseconds/1e3))}class xa{constructor(e){this.expr=e}evaluate(e,t){U(this.expr.params.length===1,49262,`${this.expr.name}() function should have exactly one parameter`);const r=q(this.expr.params[0]).evaluate(e,t);switch(r.type){case"INT":return this.toTimestamp(BigInt(r.value.integerValue));case"NULL":return E.gr();default:return E.mr()}}}class jy extends xa{toTimestamp(e){if(!ka(e))return E.mr();let t=Number(e/Kt),r=Number(e%Kt*BigInt(1e3));const s=gd(t,r);return t=s.seconds,r=s.nanos,is(t,r)?E.newValue({timestampValue:{seconds:t,nanos:r}}):E.mr()}}class zy extends xa{toTimestamp(e){if(!function(a){return a>=Fy&&a<=By}(e))return E.mr();let t=Number(e/mi),r=Number(e%mi*BigInt(1e6));const s=gd(t,r);return t=s.seconds,r=s.nanos,is(t,r)?E.newValue({timestampValue:{seconds:t,nanos:r}}):E.mr()}}class Wy extends xa{toTimestamp(e){if(!md(e))return E.mr();const t=Number(e);return E.newValue({timestampValue:{seconds:t,nanos:0}})}}class Oa{constructor(e){this.expr=e}evaluate(e,t){U(this.expr.params.length===1,1265,`${this.expr.name}() function should have exactly one parameter`);const r=q(this.expr.params[0]).evaluate(e,t);switch(r.type){case"TIMESTAMP":break;case"NULL":return E.gr();default:return E.mr()}const s=Ea(r.value.timestampValue);return is(s.seconds,s.nanoseconds)?this.Nr(s):E.mr()}}class Hy extends Oa{Nr(e){const t=Da(e);return ka(t)?E.newValue({integerValue:`${t.toString()}`}):E.mr()}}class Gy extends Oa{Nr(e){const t=Da(e),r=t/BigInt(1e3),s=t%BigInt(1e3);return r>BigInt(0)||s===BigInt(0)?E.newValue({integerValue:r.toString()}):E.newValue({integerValue:(r-BigInt(1)).toString()})}}class Ky extends Oa{Nr(e){const t=BigInt(e.seconds);return md(t)?E.newValue({integerValue:t.toString()}):E.mr()}}class _d{constructor(e){this.expr=e}evaluate(e,t){U(this.expr.params.length===3,2775,`${this.expr.name}() function should have exactly 3 parameters`);let r=!1;const s=q(this.expr.params[0]).evaluate(e,t);switch(s.type){case"TIMESTAMP":break;case"NULL":r=!0;break;default:return E.mr()}const i=q(this.expr.params[1]).evaluate(e,t);let a;switch(i.type){case"STRING":if(a=function(J){switch(J){case"microsecond":return"microsecond";case"millisecond":return"millisecond";case"second":return"second";case"minute":return"minute";case"hour":return"hour";case"day":return"day";default:return}}(i.value.stringValue),a===void 0)return E.mr();break;case"NULL":r=!0;break;default:return E.mr()}const c=q(this.expr.params[2]).evaluate(e,t);switch(c.type){case"INT":break;case"NULL":r=!0;break;default:return E.mr()}if(r)return E.gr();const l=BigInt(c.value.integerValue);let d;try{switch(a){case"microsecond":d=l;break;case"millisecond":d=l*BigInt(1e3);break;case"second":d=l*BigInt(1e6);break;case"minute":d=l*BigInt(6e7);break;case"hour":d=l*BigInt(36e8);break;case"day":d=l*BigInt(864e8);break;default:return E.mr()}if(a!=="microsecond"&&l!==BigInt(0)&&d/l!==BigInt(this.Lr(a)))return E.mr()}catch(H){return tt(`Error during timestamp arithmetic: ${H}`),E.mr()}const p=Ea(s.value.timestampValue);if(!is(p.seconds,p.nanoseconds))return E.mr();const m=Da(p),w=this.Br(m,d);if(!ka(w))return E.mr();const V=Number(w/Kt),N=w%Kt,M=Number((N<0?N+Kt:N)*BigInt(1e3)),L=N<0?V-1:V;return is(L,M)?E.newValue({timestampValue:{seconds:L,nanos:M}}):E.mr()}Lr(e){switch(e){case"millisecond":return 1e3;case"second":return 1e6;case"minute":return 6e7;case"hour":return 36e8;case"day":return 864e8;default:return 1}}}class Qy extends _d{Br(e,t){return e+t}}class Yy extends _d{Br(e,t){return e-t}}function os(n){if((n=fd(n))instanceof sr)return`fld(${n.fieldName})`;if(n instanceof ir)return`cst(${function(t){return t===null?"null":typeof t=="number"?t.toString():typeof t=="string"?`"${t}"`:t instanceof se?`ref(${t.path})`:t instanceof Le?`vec(${JSON.stringify(t)})`:JSON.stringify(t)}(n.value)})`;if(n instanceof S)return`fn(${n.name},[${n.params.map(os).join(",")}])`;if(n.expressionType==="ListOfExpressions")return`list([${n.cr.map(os).join(",")}])`;throw new Error(`Unrecognized expr ${JSON.stringify(n,null,2)}`)}function Jy(n){if(n instanceof ld)return`${n._name}(${zs(n.fields)})`;if(n instanceof hd){let e=`${n._name}(${zs(n.accumulators)})`;return n.groups.size>0&&(e+=`grouping(${zs(n.groups)})`),e}if(n instanceof dd)return`${n._name}(${zs(n.groups)})`;if(n instanceof $i)return`${n._name}(${n.hr})`;if(n instanceof ji)return`${n._name}(${n.collectionId})`;if(n instanceof Pa)return`${n._name}()`;if(n instanceof Sa)return`${n._name}(${n.Tr.sort()})`;if(n instanceof zi)return`${n._name}(${os(n.condition)})`;if(n instanceof Vn)return`${n._name}(${n.limit})`;if(n instanceof gt)return`${n._name}(${function(t){return t.map(r=>`${os(r.expr)}${r.direction}`).join(",")}(n.orderings)})`;throw new Error(`Unrecognized stage ${n._name}`)}function zs(n){return`${Array.from(n.entries()).sort().map(([e,t])=>`${e}=${os(t)}`).join(",")}`}function Tt(n){return n.stages.map(e=>Jy(e)).join("|")}function yd(n,e){return Tt(n)===Tt(e)}function me(n){return n instanceof Ne}function rl(n){return me(n)?Tt(n):Mr(n)}function Ed(n){return me(n)?Tt(n):function(t){return`${Sh(ct(t))}|lt:${t.limitType}`}(n)}function Gi(n,e){return n instanceof Ne&&e instanceof Ne?yd(n,e):!(n instanceof Ne&&!(e instanceof Ne)||!(n instanceof Ne)&&e instanceof Ne)&&mg(n,e)}function wd(n){return _n(n)?Tt(n):Sh(n)}function Td(n,e){return n instanceof Ne&&e instanceof Ne?yd(n,e):!(n instanceof Ne&&!(e instanceof Ne)||!(n instanceof Ne)&&e instanceof Ne)&&Vh(n,e)}function Xy(n,e){const t=function(s){let i=!1;const a=[];for(const c of s)if(c instanceof gt)if(i=!0,c.orderings.some(l=>l.expr instanceof sr&&l.expr.fieldName===ot))a.push(c);else{const l=c.orderings.map(d=>d);l.push(Js(ot).ascending()),a.push(new gt(l,{}))}else c instanceof Vn&&(i||(a.push(new gt([Js(ot).ascending()],{})),i=!0)),a.push(c);return i||a.push(new gt([Js(ot).ascending()],{})),a}(n.stages);if(n.userDataReader){const r=n.userDataReader.createContext(3,"toCorePipeline");t.forEach(s=>s._readUserData(r))}return new Ne(n.userDataReader.serializer,t,e)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Zy{constructor(e,t,r,s){this.batchId=e,this.localWriteTime=t,this.baseMutations=r,this.mutations=s}applyToRemoteDocument(e,t){const r=t.mutationResults;for(let s=0;s<this.mutations.length;s++){const i=this.mutations[s];i.key.isEqual(e.key)&&Qm(i,e,r[s])}}applyToLocalView(e,t){for(const r of this.baseMutations)r.key.isEqual(e.key)&&(t=Or(r,e,t,this.localWriteTime));for(const r of this.mutations)r.key.isEqual(e.key)&&(t=Or(r,e,t,this.localWriteTime));return t}applyToLocalDocumentSet(e,t){const r=xh();return this.mutations.forEach(s=>{const i=e.get(s.key),a=i.overlayedDocument;let c=this.applyToLocalView(a,i.mutatedFields);c=t.has(s.key)?null:c;const l=Eh(a,c);l!==null&&r.set(s.key,l),a.isValidDocument()||a.convertToNoDocument(j.min())}),r}keys(){return this.mutations.reduce((e,t)=>e.add(t.key),G())}isEqual(e){return this.batchId===e.batchId&&Hn(this.mutations,e.mutations,(t,r)=>xu(t,r))&&Hn(this.baseMutations,e.baseMutations,(t,r)=>xu(t,r))}}class La{constructor(e,t,r,s){this.batch=e,this.commitVersion=t,this.mutationResults=r,this.docVersions=s}static from(e,t,r){U(e.mutations.length===r.length,58842,{Ur:e.mutations.length,kr:r.length});let s=function(){return wg}();const i=e.mutations;for(let a=0;a<i.length;a++)s=s.insert(i[a].key,r[a].version);return new La(e,t,r,s)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Id="";function eE(n){let e="";for(let t=0;t<n.length;t++)e.length>0&&(e=sl(e)),e=tE(n.get(t),e);return sl(e)}function tE(n,e){let t=e;const r=n.length;for(let s=0;s<r;s++){const i=n.charAt(s);switch(i){case"\0":t+="";break;case Id:t+="";break;default:t+=i}}return t}function sl(n){return n+Id+""}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class nE{constructor(e,t){this.largestBatchId=e,this.mutation=t}getKey(){return this.mutation.key}isEqual(e){return e!==null&&this.mutation===e.mutation}toString(){return`Overlay{
      largestBatchId: ${this.largestBatchId},
      mutation: ${this.mutation.toString()}
    }`}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class _t{constructor(e,t,r,s,i=j.min(),a=j.min(),c=de.EMPTY_BYTE_STRING,l=null){this.target=e,this.targetId=t,this.purpose=r,this.sequenceNumber=s,this.snapshotVersion=i,this.lastLimboFreeSnapshotVersion=a,this.resumeToken=c,this.expectedCount=l}withSequenceNumber(e){return new _t(this.target,this.targetId,this.purpose,e,this.snapshotVersion,this.lastLimboFreeSnapshotVersion,this.resumeToken,this.expectedCount)}withResumeToken(e,t){return new _t(this.target,this.targetId,this.purpose,this.sequenceNumber,t,this.lastLimboFreeSnapshotVersion,e,null)}withExpectedCount(e){return new _t(this.target,this.targetId,this.purpose,this.sequenceNumber,this.snapshotVersion,this.lastLimboFreeSnapshotVersion,this.resumeToken,e)}withLastLimboFreeSnapshotVersion(e){return new _t(this.target,this.targetId,this.purpose,this.sequenceNumber,this.snapshotVersion,e,this.resumeToken,this.expectedCount)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class rE{constructor(e){this.$r=e}}function sE(n){const e=Mg({parent:n.parent,structuredQuery:n.structuredQuery});return n.limitType==="LAST"?di(e,e.limit,"L"):e}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class iE{constructor(){this.Zi=new oE}addToCollectionParentIndex(e,t){return this.Zi.add(t),b.resolve()}getCollectionParents(e,t){return b.resolve(this.Zi.getEntries(t))}addFieldIndex(e,t){return b.resolve()}deleteFieldIndex(e,t){return b.resolve()}deleteAllFieldIndexes(e){return b.resolve()}createTargetIndexes(e,t){return b.resolve()}getDocumentsMatchingTarget(e,t){return b.resolve(null)}getIndexType(e,t){return b.resolve(0)}getFieldIndexes(e,t){return b.resolve([])}getNextCollectionGroupToUpdate(e){return b.resolve(null)}getMinOffset(e,t){return b.resolve(Xt.min())}getMinOffsetFromCollectionGroup(e,t){return b.resolve(Xt.min())}updateCollectionGroup(e,t,r){return b.resolve()}updateIndexEntries(e,t){return b.resolve()}}class oE{constructor(){this.index={}}add(e){const t=e.lastSegment(),r=e.popLast(),s=this.index[t]||new le(X.comparator),i=!s.has(r);return this.index[t]=s.add(r),i}has(e){const t=e.lastSegment(),r=e.popLast(),s=this.index[t];return s&&s.has(r)}getEntries(e){return(this.index[e]||new le(X.comparator)).toArray()}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class rn{constructor(e){this.ys=e}next(){return this.ys+=2,this.ys}static ws(){return new rn(0)}static bs(){return new rn(-1)}}// Copyright 2024 Google LLC* @license
function vd(n,e){var r;let t=e;for(const s of n.stages)t=cE({serializer:n.serializer,serverTimestampBehavior:(r=n.listenOptions)==null?void 0:r.serverTimestampBehavior},s,t);return t}function Ki(n,e){return vd(n,[e]).length>0}function aE(n,e){return me(n)?Ki(n,e):Oi(n,e)}function cE(n,e,t){if(e instanceof $i)return function(s,i,a){return a.filter(c=>c.isFoundDocument()&&`/${c.key.getCollectionPath().canonicalString()}`===i.hr)}(0,e,t);if(e instanceof zi)return function(s,i,a){return a.filter(c=>{const l=qr(q(i.condition).evaluate(s,c));return l!==void 0&&Ye(l,Me)})}(n,e,t);if(e instanceof ji)return function(s,i,a){return a.filter(c=>c.isFoundDocument()&&c.key.getCollectionPath().lastSegment()===i.collectionId)}(0,e,t);if(e instanceof Pa)return function(s,i,a){return a.filter(c=>c.isFoundDocument())}(0,0,t);if(e instanceof Sa)return function(s,i,a){return a.filter(c=>c.isFoundDocument()&&i.Pr.has(c.key.path.toStringWithLeadingSlash()))}(0,e,t);if(e instanceof Vn)return function(s,i,a){return a.slice(0,i.limit)}(0,e,t);if(e instanceof gt)return function(s,i,a){const c=i.orderings.map(l=>({Ms:q(l.expr),direction:l.direction}));return[...a].sort((l,d)=>{for(const{Ms:p,direction:m}of c){const w=qr(p.evaluate(s,l)),V=qr(p.evaluate(s,d)),N=Ue(w??Kn,V??Kn);if(N!==0)return m==="ascending"?N:-N}return 0})}(n,e,t);throw new Error(`Unknown stage: ${e._name}`)}function Zo(n){const e=function(r){for(let s=r.stages.length-1;s>=0;s--){const i=r.stages[s];if(i instanceof gt)return i.orderings}throw new Error("Pipeline must contain at least one Sort stage")}(n);return(t,r)=>{for(const s of e){const i=qr(q(s.expr).evaluate({serializer:n.serializer},t)),a=qr(q(s.expr).evaluate({serializer:n.serializer},r)),c=Ue(i||Kn,a||Kn);if(c!==0)return s.direction==="ascending"?c:-c}return 0}}function xo(n){for(let e=n.stages.length-1;e>=0;e--){const t=n.stages[e];if(t instanceof Vn)return{limit:t.limit}}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class uE{constructor(){this.changes=new Nn(e=>e.toString(),(e,t)=>e.isEqual(t)),this.changesApplied=!1}addEntry(e){this.assertNotApplied(),this.changes.set(e.key,e)}removeEntry(e,t){this.assertNotApplied(),this.changes.set(e,Pe.newInvalidDocument(e).setReadTime(t))}getEntry(e,t){this.assertNotApplied();const r=this.changes.get(t);return r!==void 0?b.resolve(r):this.getFromCache(e,t)}getEntries(e,t){return this.getAllFromCache(e,t)}apply(e){return this.assertNotApplied(),this.changesApplied=!0,this.applyChanges(e)}assertNotApplied(){}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 *//**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class lE{constructor(e,t){this.overlayedDocument=e,this.mutatedFields=t}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class hE{constructor(e,t,r,s){this.remoteDocumentCache=e,this.mutationQueue=t,this.documentOverlayCache=r,this.indexManager=s}getDocument(e,t){let r=null;return this.documentOverlayCache.getOverlay(e,t).next(s=>(r=s,this.remoteDocumentCache.getEntry(e,t))).next(s=>(r!==null&&Or(r.mutation,s,je.empty(),Z.now()),s))}getDocuments(e,t){return this.remoteDocumentCache.getEntries(e,t).next(r=>this.getLocalViewOfDocuments(e,r,G()).next(()=>r))}getLocalViewOfDocuments(e,t,r=G()){const s=Ut();return this.populateOverlays(e,s,t).next(()=>this.computeViews(e,t,s,r).next(i=>{let a=Fn();return i.forEach((c,l)=>{a=a.insert(c,l.overlayedDocument)}),a}))}getOverlayedDocuments(e,t){const r=Ut();return this.populateOverlays(e,r,t).next(()=>this.computeViews(e,t,r,G()))}populateOverlays(e,t,r){const s=[];return r.forEach(i=>{t.has(i)||s.push(i)}),this.documentOverlayCache.getOverlays(e,s).next(i=>{i.forEach((a,c)=>{t.set(a,c)})})}computeViews(e,t,r,s){let i=Oe();const a=Ur(),c=function(){return Ur()}();return t.forEach((l,d)=>{const p=r.get(d.key);s.has(d.key)&&(p===void 0||p.mutation instanceof un)?i=i.insert(d.key,d):p!==void 0?(a.set(d.key,p.mutation.getFieldMask()),Or(p.mutation,d,p.mutation.getFieldMask(),Z.now())):a.set(d.key,je.empty())}),this.recalculateAndSaveOverlays(e,i).next(l=>(l.forEach((d,p)=>a.set(d,p)),t.forEach((d,p)=>c.set(d,new lE(p,a.get(d)??null))),c))}recalculateAndSaveOverlays(e,t){const r=Ur();let s=new ne((a,c)=>a-c),i=G();return this.mutationQueue.getAllMutationBatchesAffectingDocumentKeys(e,t).next(a=>{for(const c of a)c.keys().forEach(l=>{const d=t.get(l);if(d===null)return;let p=r.get(l)||je.empty();p=c.applyToLocalView(d,p),r.set(l,p);const m=(s.get(c.batchId)||G()).add(l);s=s.insert(c.batchId,m)})}).next(()=>{const a=[],c=s.getReverseIterator();for(;c.hasNext();){const l=c.getNext(),d=l.key,p=l.value,m=xh();p.forEach(w=>{if(!i.has(w)){const V=Eh(t.get(w),r.get(w));V!==null&&m.set(w,V),i=i.add(w)}}),a.push(this.documentOverlayCache.saveOverlays(e,d,m))}return b.waitFor(a)}).next(()=>r)}recalculateAndSaveOverlaysForDocumentKeys(e,t){return this.remoteDocumentCache.getEntries(e,t).next(r=>this.recalculateAndSaveOverlays(e,r))}getDocumentsMatchingQuery(e,t,r,s){return me(t)?this.getDocumentsMatchingPipeline(e,t,r,s):dg(t)?this.getDocumentsMatchingDocumentQuery(e,t.path):bh(t)?this.getDocumentsMatchingCollectionGroupQuery(e,t,r,s):this.getDocumentsMatchingCollectionQuery(e,t,r,s)}getNextDocuments(e,t,r,s){return this.remoteDocumentCache.getAllFromCollectionGroup(e,t,r,s).next(i=>{const a=s-i.size>0?this.documentOverlayCache.getOverlaysForCollectionGroup(e,t,r.largestBatchId,s-i.size):b.resolve(Ut());let c=es,l=i;return a.next(d=>b.forEach(d,(p,m)=>(c<m.largestBatchId&&(c=m.largestBatchId),i.get(p)?b.resolve():this.remoteDocumentCache.getEntry(e,p).next(w=>{l=l.insert(p,w)}))).next(()=>this.populateOverlays(e,d,i)).next(()=>this.computeViews(e,l,d,G())).next(p=>({batchId:c,changes:Dh(p)})))})}getDocumentsMatchingDocumentQuery(e,t){return this.getDocument(e,new F(t)).next(r=>{let s=Fn();return r.isFoundDocument()&&(s=s.insert(r.key,r)),s})}getDocumentsMatchingCollectionGroupQuery(e,t,r,s){const i=t.collectionGroup;let a=Fn();return this.indexManager.getCollectionParents(e,i).next(c=>b.forEach(c,l=>{const d=function(m,w){return new tr(w,null,m.explicitOrderBy.slice(),m.filters.slice(),m.limit,m.limitType,m.startAt,m.endAt)}(t,l.child(i));return this.getDocumentsMatchingCollectionQuery(e,d,r,s).next(p=>{p.forEach((m,w)=>{a=a.insert(m,w)})})}).next(()=>a))}getDocumentsMatchingCollectionQuery(e,t,r,s){let i;return this.documentOverlayCache.getOverlaysForCollection(e,t.path,r.largestBatchId).next(a=>(i=a,this.remoteDocumentCache.getDocumentsMatchingQuery(e,t,r,i,s))).next(a=>this.retrieveMatchingLocalDocuments(i,a,c=>Oi(t,c)))}getDocumentsMatchingPipeline(e,t,r,s){if(Gt(t)==="collection_group"){const i=Ca(t);let a=Fn();return this.indexManager.getCollectionParents(e,i).next(c=>b.forEach(c,l=>{const d=function(m,w){const V=m.stages.map(N=>N instanceof ji?new $i(w.canonicalString(),{}):N);return new Ne(m.serializer,V)}(t,l.child(i));return this.getDocumentsMatchingPipeline(e,d,r,s).next(p=>{p.forEach((m,w)=>{a=a.insert(m,w)})})}).next(()=>a))}{let i;return this.getOverlaysForPipeline(e,t,r.largestBatchId).next(a=>{switch(i=a,Gt(t)){case"collection":return this.remoteDocumentCache.getDocumentsMatchingQuery(e,t,r,i,s);case"documents":let c=G();for(const l of Xo(t))c=c.add(F.fromPath(l));return this.remoteDocumentCache.getEntries(e,c);case"database":return this.remoteDocumentCache.getAllEntries(e);default:throw new D("invalid-argument",`Invalid pipeline source to execute offline: ${Tt(t)}`)}}).next(a=>this.retrieveMatchingLocalDocuments(i,a,c=>Ki(t,c)))}}retrieveMatchingLocalDocuments(e,t,r){e.forEach((i,a)=>{const c=a.getKey();t.get(c)===null&&(t=t.insert(c,Pe.newInvalidDocument(c)))});let s=Fn();return t.forEach((i,a)=>{const c=e.get(i);c!==void 0&&Or(c.mutation,a,je.empty(),Z.now()),r(a)&&(s=s.insert(i,a))}),s}getOverlaysForPipeline(e,t,r){switch(Gt(t)){case"collection":return this.documentOverlayCache.getOverlaysForCollection(e,X.fromString(Wi(t)),r);case"collection_group":throw new D("invalid-argument",`Unexpected collection group pipeline: ${Tt(t)}`);case"documents":return this.documentOverlayCache.getOverlays(e,Xo(t).map(s=>F.fromPath(s)));case"database":return this.documentOverlayCache.getAllOverlays(e,r);default:throw new D("invalid-argument",`Failed to get overlays for pipeline: ${Tt(t)}`)}}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class dE{constructor(e){this.serializer=e,this.Qs=new Map,this.Ws=new Map}getBundleMetadata(e,t){return b.resolve(this.Qs.get(t))}saveBundleMetadata(e,t){return this.Qs.set(t.id,function(s){return{id:s.id,version:s.version,createTime:ut(s.createTime)}}(t)),b.resolve()}getNamedQuery(e,t){return b.resolve(this.Ws.get(t))}saveNamedQuery(e,t){return this.Ws.set(t.name,function(s){return{name:s.name,query:sE(s.bundledQuery),readTime:ut(s.readTime)}}(t)),b.resolve()}}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class fE{constructor(){this.overlays=new ne(F.comparator),this.Gs=new Map}getOverlay(e,t){return b.resolve(this.overlays.get(t))}getOverlays(e,t){const r=Ut();return b.forEach(t,s=>this.getOverlay(e,s).next(i=>{i!==null&&r.set(s,i)})).next(()=>r)}getAllOverlays(e,t){const r=Ut();return this.overlays.forEach((s,i)=>{i.largestBatchId>t&&r.set(s,i)}),b.resolve(r)}saveOverlays(e,t,r){return r.forEach((s,i)=>{this.Zr(e,t,i)}),b.resolve()}removeOverlaysForBatchId(e,t,r){const s=this.Gs.get(r);return s!==void 0&&(s.forEach(i=>this.overlays=this.overlays.remove(i)),this.Gs.delete(r)),b.resolve()}getOverlaysForCollection(e,t,r){const s=Ut(),i=t.length+1,a=new F(t.child("")),c=this.overlays.getIteratorFrom(a);for(;c.hasNext();){const l=c.getNext().value,d=l.getKey();if(!t.isPrefixOf(d.path))break;d.path.length===i&&l.largestBatchId>r&&s.set(l.getKey(),l)}return b.resolve(s)}getOverlaysForCollectionGroup(e,t,r,s){let i=new ne((d,p)=>d-p);const a=this.overlays.getIterator();for(;a.hasNext();){const d=a.getNext().value;if(d.getKey().getCollectionGroup()===t&&d.largestBatchId>r){let p=i.get(d.largestBatchId);p===null&&(p=Ut(),i=i.insert(d.largestBatchId,p)),p.set(d.getKey(),d)}}const c=Ut(),l=i.getIterator();for(;l.hasNext()&&(l.getNext().value.forEach((d,p)=>c.set(d,p)),!(c.size()>=s)););return b.resolve(c)}Zr(e,t,r){const s=this.overlays.get(r.key);if(s!==null){const a=this.Gs.get(s.largestBatchId).delete(r.key);this.Gs.set(s.largestBatchId,a)}this.overlays=this.overlays.insert(r.key,new nE(t,r));let i=this.Gs.get(t);i===void 0&&(i=G(),this.Gs.set(t,i)),this.Gs.set(t,i.add(r.key))}}/**
 * @license
 * Copyright 2024 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class pE{constructor(){this.sessionToken=de.EMPTY_BYTE_STRING}getSessionToken(e){return b.resolve(this.sessionToken)}setSessionToken(e,t){return this.sessionToken=t,b.resolve()}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ma{constructor(){this.zs=new le(_e.js),this.Hs=new le(_e.Js)}isEmpty(){return this.zs.isEmpty()}addReference(e,t){const r=new _e(e,t);this.zs=this.zs.add(r),this.Hs=this.Hs.add(r)}Ys(e,t){e.forEach(r=>this.addReference(r,t))}removeReference(e,t){this.Zs(new _e(e,t))}Xs(e,t){e.forEach(r=>this.removeReference(r,t))}e_(e){const t=new F(new X([])),r=new _e(t,e),s=new _e(t,e+1),i=[];return this.Hs.forEachInRange([r,s],a=>{this.Zs(a),i.push(a.key)}),i}t_(){this.zs.forEach(e=>this.Zs(e))}Zs(e){this.zs=this.zs.delete(e),this.Hs=this.Hs.delete(e)}n_(e){const t=new F(new X([])),r=new _e(t,e),s=new _e(t,e+1);let i=G();return this.Hs.forEachInRange([r,s],a=>{i=i.add(a.key)}),i}containsKey(e){const t=new _e(e,0),r=this.zs.firstAfterOrEqual(t);return r!==null&&e.isEqual(r.key)}}class _e{constructor(e,t){this.key=e,this.r_=t}static js(e,t){return F.comparator(e.key,t.key)||K(e.r_,t.r_)}static Js(e,t){return K(e.r_,t.r_)||F.comparator(e.key,t.key)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class mE{constructor(e,t){this.indexManager=e,this.referenceDelegate=t,this.mutationQueue=[],this.Gr=1,this.i_=new le(_e.js)}checkEmpty(e){return b.resolve(this.mutationQueue.length===0)}addMutationBatch(e,t,r,s){const i=this.Gr;this.Gr++,this.mutationQueue.length>0&&this.mutationQueue[this.mutationQueue.length-1];const a=new Zy(i,t,r,s);this.mutationQueue.push(a);for(const c of s)this.i_=this.i_.add(new _e(c.key,i)),this.indexManager.addToCollectionParentIndex(e,c.key.path.popLast());return b.resolve(a)}lookupMutationBatch(e,t){return b.resolve(this.s_(t))}getNextMutationBatchAfterBatchId(e,t){const r=t+1,s=this.__(r),i=s<0?0:s;return b.resolve(this.mutationQueue.length>i?this.mutationQueue[i]:null)}getHighestUnacknowledgedBatchId(){return b.resolve(this.mutationQueue.length===0?da:this.Gr-1)}getAllMutationBatches(e){return b.resolve(this.mutationQueue.slice())}getAllMutationBatchesAffectingDocumentKey(e,t){const r=new _e(t,0),s=new _e(t,Number.POSITIVE_INFINITY),i=[];return this.i_.forEachInRange([r,s],a=>{const c=this.s_(a.r_);i.push(c)}),b.resolve(i)}getAllMutationBatchesAffectingDocumentKeys(e,t){let r=new le(K);return t.forEach(s=>{const i=new _e(s,0),a=new _e(s,Number.POSITIVE_INFINITY);this.i_.forEachInRange([i,a],c=>{r=r.add(c.r_)})}),b.resolve(this.o_(r))}getAllMutationBatchesAffectingQuery(e,t){const r=t.path,s=r.length+1;let i=r;F.isDocumentKey(i)||(i=i.child(""));const a=new _e(new F(i),0);let c=new le(K);return this.i_.forEachWhile(l=>{const d=l.key.path;return!!r.isPrefixOf(d)&&(d.length===s&&(c=c.add(l.r_)),!0)},a),b.resolve(this.o_(c))}o_(e){const t=[];return e.forEach(r=>{const s=this.s_(r);s!==null&&t.push(s)}),t}removeMutationBatch(e,t){U(this.a_(t.batchId,"removed")===0,55003),this.mutationQueue.shift();let r=this.i_;return b.forEach(t.mutations,s=>{const i=new _e(s.key,t.batchId);return r=r.delete(i),this.referenceDelegate.markPotentiallyOrphaned(e,s.key)}).next(()=>{this.i_=r})}Hr(e){}containsKey(e,t){const r=new _e(t,0),s=this.i_.firstAfterOrEqual(r);return b.resolve(t.isEqual(s&&s.key))}performConsistencyCheck(e){return this.mutationQueue.length,b.resolve()}a_(e,t){return this.__(e)}__(e){return this.mutationQueue.length===0?0:e-this.mutationQueue[0].batchId}s_(e){const t=this.__(e);return t<0||t>=this.mutationQueue.length?null:this.mutationQueue[t]}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class gE{constructor(e){this.u_=e,this.docs=function(){return new ne(F.comparator)}(),this.size=0}setIndexManager(e){this.indexManager=e}addEntry(e,t){const r=t.key,s=this.docs.get(r),i=s?s.size:0,a=this.u_(t);return this.docs=this.docs.insert(r,{document:t.mutableCopy(),size:a}),this.size+=a-i,this.indexManager.addToCollectionParentIndex(e,r.path.popLast())}removeEntry(e){const t=this.docs.get(e);t&&(this.docs=this.docs.remove(e),this.size-=t.size)}getEntry(e,t){const r=this.docs.get(t);return b.resolve(r?r.document.mutableCopy():Pe.newInvalidDocument(t))}getEntries(e,t){let r=Oe();return t.forEach(s=>{const i=this.docs.get(s);r=r.insert(s,i?i.document.mutableCopy():Pe.newInvalidDocument(s))}),b.resolve(r)}getAllEntries(e){let t=Oe();return this.docs.forEach((r,s)=>{t=t.insert(r,s.document)}),b.resolve(t)}getDocumentsMatchingQuery(e,t,r,s){let i,a;me(t)?(i=X.fromString(Wi(t)),a=p=>Ki(t,p)):(i=t.path,a=p=>Oi(t,p));let c=Oe();const l=new F(i.child("__id-9223372036854775808__")),d=this.docs.getIteratorFrom(l);for(;d.hasNext();){const{key:p,value:{document:m}}=d.getNext();if(!i.isPrefixOf(p.path))break;p.path.length>i.length+1||ug(cg(m),r)<=0||(s.has(m.key)||a(m))&&(c=c.insert(m.key,m.mutableCopy()))}return b.resolve(c)}getAllFromCollectionGroup(e,t,r,s){B(9500)}c_(e,t){return b.forEach(this.docs,r=>t(r))}newChangeBuffer(e){return new _E(this)}getSize(e){return b.resolve(this.size)}}class _E extends uE{constructor(e){super(),this.$s=e}applyChanges(e){const t=[];return this.changes.forEach((r,s)=>{s.isValidDocument()?t.push(this.$s.addEntry(e,s)):this.$s.removeEntry(r)}),b.waitFor(t)}getFromCache(e,t){return this.$s.getEntry(e,t)}getAllFromCache(e,t){return this.$s.getEntries(e,t)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class yE{constructor(e){this.persistence=e,this.l_=new Nn(t=>wd(t),Td),this.lastRemoteSnapshotVersion=j.min(),this.highestTargetId=0,this.E_=0,this.h_=new Ma,this.targetCount=0,this.T_=rn.ws()}forEachTarget(e,t){return this.l_.forEach((r,s)=>t(s)),b.resolve()}getLastRemoteSnapshotVersion(e){return b.resolve(this.lastRemoteSnapshotVersion)}getHighestSequenceNumber(e){return b.resolve(this.E_)}allocateTargetId(e){return this.highestTargetId=this.T_.next(),b.resolve(this.highestTargetId)}setTargetsMetadata(e,t,r){return r&&(this.lastRemoteSnapshotVersion=r),t>this.E_&&(this.E_=t),b.resolve()}Ds(e){this.l_.set(e.target,e);const t=e.targetId;t>this.highestTargetId&&(this.T_=new rn(t),this.highestTargetId=t),e.sequenceNumber>this.E_&&(this.E_=e.sequenceNumber)}addTargetData(e,t){return this.Ds(t),this.targetCount+=1,b.resolve()}updateTargetData(e,t){return this.Ds(t),b.resolve()}removeTargetData(e,t){return this.l_.delete(t.target),this.h_.e_(t.targetId),this.targetCount-=1,b.resolve()}removeTargets(e,t,r){let s=0;const i=[];return this.l_.forEach((a,c)=>{c.sequenceNumber<=t&&r.get(c.targetId)===null&&(this.l_.delete(a),i.push(this.removeMatchingKeysForTargetId(e,c.targetId)),s++)}),b.waitFor(i).next(()=>s)}getTargetCount(e){return b.resolve(this.targetCount)}getTargetData(e,t){const r=this.l_.get(t)||null;return b.resolve(r)}addMatchingKeys(e,t,r){return this.h_.Ys(t,r),b.resolve()}removeMatchingKeys(e,t,r){this.h_.Xs(t,r);const s=this.persistence.referenceDelegate,i=[];return s&&t.forEach(a=>{i.push(s.markPotentiallyOrphaned(e,a))}),b.waitFor(i)}removeMatchingKeysForTargetId(e,t){return this.h_.e_(t),b.resolve()}getMatchingKeysForTargetId(e,t){const r=this.h_.n_(t);return b.resolve(r)}containsKey(e,t){return b.resolve(this.h_.containsKey(t))}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ad{constructor(e,t){this.P_={},this.overlays={},this.I_=new Fi(0),this.R_=!1,this.R_=!0,this.A_=new pE,this.referenceDelegate=e(this),this.V_=new yE(this),this.indexManager=new iE,this.remoteDocumentCache=function(s){return new gE(s)}(r=>this.referenceDelegate.d_(r)),this.serializer=new rE(t),this.f_=new dE(this.serializer)}start(){return Promise.resolve()}shutdown(){return this.R_=!1,Promise.resolve()}get started(){return this.R_}setDatabaseDeletedListener(){}setNetworkEnabled(){}getIndexManager(e){return this.indexManager}getDocumentOverlayCache(e){let t=this.overlays[e.toKey()];return t||(t=new fE,this.overlays[e.toKey()]=t),t}getMutationQueue(e,t){let r=this.P_[e.toKey()];return r||(r=new mE(t,this.referenceDelegate),this.P_[e.toKey()]=r),r}getGlobalsCache(){return this.A_}getTargetCache(){return this.V_}getRemoteDocumentCache(){return this.remoteDocumentCache}getBundleCache(){return this.f_}runTransaction(e,t,r){O("MemoryPersistence","Starting transaction:",e);const s=new EE(this.I_.next());return this.referenceDelegate.m_(),r(s).next(i=>this.referenceDelegate.p_(s).next(()=>i)).toPromise().then(i=>(s.raiseOnCommittedEvent(),i))}g_(e,t){return b.or(Object.values(this.P_).map(r=>()=>r.containsKey(e,t)))}}class EE extends l_{constructor(e){super(),this.currentSequenceNumber=e}}class Ua{constructor(e){this.persistence=e,this.y_=new Ma,this.w_=null}static b_(e){return new Ua(e)}get S_(){if(this.w_)return this.w_;throw B(60996)}addReference(e,t,r){return this.y_.addReference(r,t),this.S_.delete(r.toString()),b.resolve()}removeReference(e,t,r){return this.y_.removeReference(r,t),this.S_.add(r.toString()),b.resolve()}markPotentiallyOrphaned(e,t){return this.S_.add(t.toString()),b.resolve()}removeTarget(e,t){this.y_.e_(t.targetId).forEach(s=>this.S_.add(s.toString()));const r=this.persistence.getTargetCache();return r.getMatchingKeysForTargetId(e,t.targetId).next(s=>{s.forEach(i=>this.S_.add(i.toString()))}).next(()=>r.removeTargetData(e,t))}m_(){this.w_=new Set}p_(e){const t=this.persistence.getRemoteDocumentCache().newChangeBuffer();return b.forEach(this.S_,r=>{const s=F.fromPath(r);return this.v_(e,s).next(i=>{i||t.removeEntry(s,j.min())})}).next(()=>(this.w_=null,t.apply(e)))}updateLimboDocument(e,t){return this.v_(e,t).next(r=>{r?this.S_.delete(t.toString()):this.S_.add(t.toString())})}d_(e){return 0}v_(e,t){return b.or([()=>b.resolve(this.y_.containsKey(t)),()=>this.persistence.getTargetCache().containsKey(e,t),()=>this.persistence.g_(e,t)])}}class gi{constructor(e,t){this.persistence=e,this.D_=new Nn(r=>eE(r.path),(r,s)=>r.isEqual(s)),this.garbageCollector=g_(this,t)}static b_(e,t){return new gi(e,t)}m_(){}p_(e){return b.resolve()}forEachTarget(e,t){return this.persistence.getTargetCache().forEachTarget(e,t)}ir(e){const t=this.Cs(e);return this.persistence.getTargetCache().getTargetCount(e).next(r=>t.next(s=>r+s))}Cs(e){let t=0;return this.sr(e,r=>{t++}).next(()=>t)}sr(e,t){return b.forEach(this.D_,(r,s)=>this.Os(e,r,s).next(i=>i?b.resolve():t(s)))}removeTargets(e,t,r){return this.persistence.getTargetCache().removeTargets(e,t,r)}removeOrphanedDocuments(e,t){let r=0;const s=this.persistence.getRemoteDocumentCache(),i=s.newChangeBuffer();return s.c_(e,a=>this.Os(e,a,t).next(c=>{c||(r++,i.removeEntry(a,j.min()))})).next(()=>i.apply(e)).next(()=>r)}markPotentiallyOrphaned(e,t){return this.D_.set(t,e.currentSequenceNumber),b.resolve()}removeTarget(e,t){const r=t.withSequenceNumber(e.currentSequenceNumber);return this.persistence.getTargetCache().updateTargetData(e,r)}addReference(e,t,r){return this.D_.set(r,e.currentSequenceNumber),b.resolve()}removeReference(e,t,r){return this.D_.set(r,e.currentSequenceNumber),b.resolve()}updateLimboDocument(e,t){return this.D_.set(t,e.currentSequenceNumber),b.resolve()}d_(e){let t=e.key.toString().length;return e.isFoundDocument()&&(t+=Gs(e.data.value)),t}Os(e,t,r){return b.or([()=>this.persistence.g_(e,t),()=>this.persistence.getTargetCache().containsKey(e,t),()=>{const s=this.D_.get(t);return b.resolve(s!==void 0&&s>r)}])}getCacheSize(e){return this.persistence.getRemoteDocumentCache().getSize(e)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Fa{constructor(e,t,r,s){this.targetId=e,this.fromCache=t,this.Vo=r,this.fo=s}static mo(e,t){let r=G(),s=G();for(const i of t.docChanges)switch(i.type){case 0:r=r.add(i.doc.key);break;case 1:s=s.add(i.doc.key)}return new Fa(e,t.fromCache,r,s)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function wE(n,e){return F.comparator(n.key,e.key)}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class TE{constructor(){this._documentReadCount=0}get documentReadCount(){return this._documentReadCount}incrementDocumentReadCount(e){this._documentReadCount+=e}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class IE{constructor(){this.po=!1,this.yo=!1,this.wo=100,this.bo=function(){return Ip()?8:h_(Se())>0?6:4}()}initialize(e,t){this.So=e,this.indexManager=t,this.po=!0}getDocumentsMatchingQuery(e,t,r,s){const i={result:null};return this.vo(e,t).next(a=>{i.result=a}).next(()=>{if(!i.result)return this.Do(e,t,s,r).next(a=>{i.result=a})}).next(()=>{if(i.result)return;const a=new TE;return this.xo(e,t,a).next(c=>{if(i.result=c,this.yo)return this.Co(e,t,a,c.size)})}).next(()=>i.result)}Co(e,t,r,s){return me(t)?b.resolve():r.documentReadCount<this.wo?(Mn()<=Q.DEBUG&&O("QueryEngine","SDK will not create cache indexes for query:",Mr(t),"since it only creates cache indexes for collection contains","more than or equal to",this.wo,"documents"),b.resolve()):(Mn()<=Q.DEBUG&&O("QueryEngine","Query:",Mr(t),"scans",r.documentReadCount,"local documents and returns",s,"documents as results."),r.documentReadCount>this.bo*s?(Mn()<=Q.DEBUG&&O("QueryEngine","The SDK decides to create cache indexes for query:",Mr(t),"as using cache indexes may help improve performance."),this.indexManager.createTargetIndexes(e,ct(t))):b.resolve())}vo(e,t){if(me(t))return b.resolve(null);let r=t;if(Bu(r))return b.resolve(null);let s=ct(r);return this.indexManager.getIndexType(e,s).next(i=>i===0?null:(r.limit!==null&&i===1&&(r=di(r,null,"F"),s=ct(r)),this.indexManager.getDocumentsMatchingTarget(e,s).next(a=>{const c=G(...a);return this.So.getDocuments(e,c).next(l=>this.indexManager.getMinOffset(e,s).next(d=>{const p=this.Fo(r,l);return this.Oo(r,p,c,d.readTime)?this.vo(e,di(r,null,"F")):this.Mo(e,p,r,d)}))})))}Do(e,t,r,s){return(me(t)?function(a){for(const c of a.stages){if(c instanceof Vn||c instanceof nl)return!1;if(c instanceof zi){if(c.condition instanceof ad&&c.condition._expr.name==="exists"&&c.condition._expr.params[0]instanceof sr&&c.condition._expr.params[0].fieldName===ot)continue;return!1}}return!0}(t):Bu(t))||s.isEqual(j.min())?b.resolve(null):this.So.getDocuments(e,r).next(i=>{const a=this.Fo(t,i);return this.Oo(t,a,r,s)?b.resolve(null):(Mn()<=Q.DEBUG&&O("QueryEngine","Re-using previous result from %s to execute query: %s",s.toString(),rl(t)),this.Mo(e,a,t,ag(s,es)).next(c=>c))})}Fo(e,t){let r,s;return me(e)?(r=new le(wE),s=i=>Ki(e,i)):(r=new le(_a(e)),s=i=>Oi(e,i)),t.forEach((i,a)=>{s(a)&&(r=r.add(a))}),r}Oo(e,t,r,s){if(me(e))return function(c){return c.stages.some(l=>l instanceof Vn||l instanceof nl)}(e);if(e.limit===null)return!1;if(r.size!==t.size)return!0;const i=e.limitType==="F"?t.last():t.first();return!!i&&(i.hasPendingWrites||i.version.compareTo(s)>0)}xo(e,t,r){return Mn()<=Q.DEBUG&&O("QueryEngine","Using full collection scan to execute query:",rl(t)),this.So.getDocumentsMatchingQuery(e,t,Xt.min(),r)}Mo(e,t,r,s){return this.So.getDocumentsMatchingQuery(e,r,s).next(i=>(t.forEach(a=>{i=i.insert(a.key,a)}),i))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Ba="LocalStore",vE=3e8;class AE{constructor(e,t,r,s){this.persistence=e,this.No=t,this.serializer=s,this.Lo=new ne(K),this.Bo=new Nn(i=>wd(i),Td),this.Uo=new Map,this.ko=e.getRemoteDocumentCache(),this.V_=e.getTargetCache(),this.f_=e.getBundleCache(),this.qo(r)}qo(e){this.documentOverlayCache=this.persistence.getDocumentOverlayCache(e),this.indexManager=this.persistence.getIndexManager(e),this.mutationQueue=this.persistence.getMutationQueue(e,this.indexManager),this.localDocuments=new hE(this.ko,this.mutationQueue,this.documentOverlayCache,this.indexManager),this.ko.setIndexManager(this.indexManager),this.No.initialize(this.localDocuments,this.indexManager)}collectGarbage(e){return this.persistence.runTransaction("Collect garbage","readwrite-primary",t=>e.collect(t,this.Lo))}}function RE(n,e,t,r){return new AE(n,e,t,r)}async function Rd(n,e){const t=z(n);return await t.persistence.runTransaction("Handle user change","readonly",r=>{let s;return t.mutationQueue.getAllMutationBatches(r).next(i=>(s=i,t.qo(e),t.mutationQueue.getAllMutationBatches(r))).next(i=>{const a=[],c=[];let l=G();for(const d of s){a.push(d.batchId);for(const p of d.mutations)l=l.add(p.key)}for(const d of i){c.push(d.batchId);for(const p of d.mutations)l=l.add(p.key)}return t.localDocuments.getDocuments(r,l).next(d=>({$o:d,removedBatchIds:a,addedBatchIds:c}))})})}function PE(n,e){const t=z(n);return t.persistence.runTransaction("Acknowledge batch","readwrite-primary",r=>{const s=e.batch.keys(),i=t.ko.newChangeBuffer({trackRemovals:!0});return function(c,l,d,p){const m=d.batch,w=m.keys();let V=b.resolve();return w.forEach(N=>{V=V.next(()=>p.getEntry(l,N)).next(M=>{const L=d.docVersions.get(N);U(L!==null,48541),M.version.compareTo(L)<0&&(m.applyToRemoteDocument(M,d),M.isValidDocument()&&(M.setReadTime(d.commitVersion),p.addEntry(M)))})}),V.next(()=>c.mutationQueue.removeMutationBatch(l,m))}(t,r,e,i).next(()=>i.apply(r)).next(()=>t.mutationQueue.performConsistencyCheck(r)).next(()=>t.documentOverlayCache.removeOverlaysForBatchId(r,s,e.batch.batchId)).next(()=>t.localDocuments.recalculateAndSaveOverlaysForDocumentKeys(r,function(c){let l=G();for(let d=0;d<c.mutationResults.length;++d)c.mutationResults[d].transformResults.length>0&&(l=l.add(c.batch.mutations[d].key));return l}(e))).next(()=>t.localDocuments.getDocuments(r,s))})}function Pd(n){const e=z(n);return e.persistence.runTransaction("Get last remote snapshot version","readonly",t=>e.V_.getLastRemoteSnapshotVersion(t))}function SE(n,e){const t=z(n),r=e.snapshotVersion;let s=t.Lo;return t.persistence.runTransaction("Apply remote event","readwrite-primary",i=>{const a=t.ko.newChangeBuffer({trackRemovals:!0});s=t.Lo;const c=[];e.targetChanges.forEach((p,m)=>{const w=s.get(m);if(!w)return;c.push(t.V_.removeMatchingKeys(i,p.removedDocuments,m).next(()=>t.V_.addMatchingKeys(i,p.addedDocuments,m)));let V=w.withSequenceNumber(i.currentSequenceNumber);e.targetMismatches.get(m)!==null?V=V.withResumeToken(de.EMPTY_BYTE_STRING,j.min()).withLastLimboFreeSnapshotVersion(j.min()):p.resumeToken.approximateByteSize()>0&&(V=V.withResumeToken(p.resumeToken,r)),s=s.insert(m,V),function(M,L,H){return M.resumeToken.approximateByteSize()===0||L.snapshotVersion.toMicroseconds()-M.snapshotVersion.toMicroseconds()>=vE?!0:H.addedDocuments.size+H.modifiedDocuments.size+H.removedDocuments.size>0}(w,V,p)&&c.push(t.V_.updateTargetData(i,V))});let l=Oe(),d=G();if(e.documentUpdates.forEach(p=>{e.resolvedLimboDocuments.has(p)&&c.push(t.persistence.referenceDelegate.updateLimboDocument(i,p))}),c.push(VE(i,a,e.documentUpdates).next(p=>{l=p.Ko,d=p.Qo})),!r.isEqual(j.min())){const p=t.V_.getLastRemoteSnapshotVersion(i).next(m=>t.V_.setTargetsMetadata(i,i.currentSequenceNumber,r));c.push(p)}return b.waitFor(c).next(()=>a.apply(i)).next(()=>t.localDocuments.getLocalViewOfDocuments(i,l,d)).next(()=>l)}).then(i=>(t.Lo=s,i))}function VE(n,e,t){let r=G(),s=G();return t.forEach(i=>r=r.add(i)),e.getEntries(n,r).next(i=>{let a=Oe();return t.forEach((c,l)=>{const d=i.get(c);l.isFoundDocument()!==d.isFoundDocument()&&(s=s.add(c)),l.isNoDocument()&&l.version.isEqual(j.min())?(e.removeEntry(c,l.readTime),a=a.insert(c,l)):!d.isValidDocument()||l.version.compareTo(d.version)>0||l.version.compareTo(d.version)===0&&d.hasPendingWrites?(e.addEntry(l),a=a.insert(c,l)):O(Ba,"Ignoring outdated watch update for ",c,". Current version:",d.version," Watch version:",l.version)}),{Ko:a,Qo:s}})}function CE(n,e){const t=z(n);return t.persistence.runTransaction("Get next mutation batch","readonly",r=>(e===void 0&&(e=da),t.mutationQueue.getNextMutationBatchAfterBatchId(r,e)))}function bE(n,e){const t=z(n);return t.persistence.runTransaction("Allocate target","readwrite",r=>{let s;return t.V_.getTargetData(r,e).next(i=>i?(s=i,b.resolve(s)):t.V_.allocateTargetId(r).next(a=>(s=new _t(e,a,"TargetPurposeListen",r.currentSequenceNumber),t.V_.addTargetData(r,s).next(()=>s))))}).then(r=>{const s=t.Lo.get(r.targetId);return(s===null||r.snapshotVersion.compareTo(s.snapshotVersion)>0)&&(t.Lo=t.Lo.insert(r.targetId,r),t.Bo.set(e,r.targetId)),r})}async function ea(n,e,t){const r=z(n),s=r.Lo.get(e),i=t?"readwrite":"readwrite-primary";try{t||await r.persistence.runTransaction("Release target",i,a=>r.persistence.referenceDelegate.removeTarget(a,s))}catch(a){if(!rr(a))throw a;O(Ba,`Failed to update sequence numbers for target ${e}: ${a}`)}r.Lo=r.Lo.remove(e),r.Bo.delete(s.target)}function il(n,e,t){const r=z(n);let s=j.min(),i=G();return r.persistence.runTransaction("Execute query","readwrite",a=>function(l,d,p){const m=z(l),w=m.Bo.get(p);return w!==void 0?b.resolve(m.Lo.get(w)):m.V_.getTargetData(d,p)}(r,a,me(e)?e:ct(e)).next(c=>{if(c)return s=c.lastLimboFreeSnapshotVersion,r.V_.getMatchingKeysForTargetId(a,c.targetId).next(l=>{i=l})}).next(()=>r.No.getDocumentsMatchingQuery(a,e,t?s:j.min(),t?i:G())).next(c=>(NE(r,c),{documents:c,Wo:i})))}function NE(n,e){e.forEach((t,r)=>{const s=r.key.getCollectionGroup(),i=n.Uo.get(s)||j.min();r.readTime.compareTo(i)>0&&n.Uo.set(s,r.readTime)})}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class kE{constructor(e,t){this.asyncQueue=e,this.onlineStateHandler=t,this.state="Unknown",this.Yo=0,this.Zo=null,this.Xo=!0}ea(){this.Yo===0&&(this.ta("Unknown"),this.Zo=this.asyncQueue.enqueueAfterDelay("online_state_timeout",1e4,()=>(this.Zo=null,this.na("Backend didn't respond within 10 seconds."),this.ta("Offline"),Promise.resolve())))}ra(e){this.state==="Online"?this.ta("Unknown"):(this.Yo++,this.Yo>=1&&(this.ia(),this.na(`Connection failed 1 times. Most recent error: ${e.toString()}`),this.ta("Offline")))}set(e){this.ia(),this.Yo=0,e==="Online"&&(this.Xo=!1),this.ta(e)}ta(e){e!==this.state&&(this.state=e,this.onlineStateHandler(e))}na(e){const t=`Could not reach Cloud Firestore backend. ${e}
This typically indicates that your device does not have a healthy Internet connection at the moment. The client will operate in offline mode until it is able to successfully connect to the backend.`;this.Xo?(At(t),this.Xo=!1):O("OnlineStateTracker",t)}ia(){this.Zo!==null&&(this.Zo.cancel(),this.Zo=null)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ft="RemoteStore";class DE{constructor(e,t,r,s,i){this.localStore=e,this.datastore=t,this.asyncQueue=r,this.remoteSyncer={},this.sa=[],this._a=new Map,this.oa=new Map,this.aa=new Map,this.ua=new rn(1e3),this.ca=new rn(1001),this.la=new Set,this.Ea=[],this.ha=i,this.ha.Qe(a=>{r.enqueueAndForget(async()=>{Dn(this)&&(O(ft,"Restarting streams for network reachability change."),await async function(l){const d=z(l);d.la.add(4),await ys(d),d.Ta.set("Unknown"),d.la.delete(4),await Qi(d)}(this))})}),this.Ta=new kE(r,s)}}async function Qi(n){if(Dn(n))for(const e of n.Ea)await e(!0)}async function ys(n){for(const e of n.Ea)await e(!1)}function ta(n,e){return n.oa.get(e)||void 0}function Sd(n,e){const t=z(n),r=ta(t,e.targetId);if(r!==void 0&&t._a.has(r))return;const s=function(c,l){const d=ta(c,l);d!==void 0&&c.aa.delete(d);const p=function(w,V){return V%2!=0?w.ca.next():w.ua.next()}(c,l);return c.oa.set(l,p),c.aa.set(p,l),p}(t,e.targetId);O(ft,"remoteStoreListen mapping SDK target ID to remote",e.targetId,s);const i=new _t(e.target,s,e.purpose,e.sequenceNumber,e.snapshotVersion,e.lastLimboFreeSnapshotVersion,e.resumeToken);t._a.set(s,i),za(t)?ja(t):cr(t).Yt()&&$a(t,i)}function qa(n,e){const t=z(n),r=cr(t),s=ta(t,e);O(ft,"remoteStoreUnlisten removing mapping of SDK target ID to remote",e,s),t._a.delete(s),t.oa.delete(e),t.aa.delete(s),r.Yt()&&Vd(t,s),t._a.size===0&&(r.Yt()?r.en():Dn(t)&&t.Ta.set("Unknown"))}function $a(n,e){if(n.Pa.J(e.targetId),e.resumeToken.approximateByteSize()>0||e.snapshotVersion.compareTo(j.min())>0){const t=n.aa.get(e.targetId);if(t===void 0)return void O(ft,"SDK target ID not found for remote ID: "+e.targetId);const r=n.remoteSyncer.getRemoteKeysForTarget(t).size;e=e.withExpectedCount(r)}cr(n).Pn(e)}function Vd(n,e){n.Pa.J(e),cr(n).In(e)}function ja(n){n.Pa=new Pg({getRemoteKeysForTarget:e=>{const t=n.aa.get(e);return t!==void 0?n.remoteSyncer.getRemoteKeysForTarget(t):G()},ye:e=>n._a.get(e)||null,Ve:()=>n.datastore.serializer.databaseId}),cr(n).start(),n.Ta.ea()}function za(n){return Dn(n)&&!cr(n).Jt()&&n._a.size>0}function Dn(n){return z(n).la.size===0}function Cd(n){n.Pa=void 0}async function xE(n){n.Ta.set("Online")}async function OE(n){n._a.forEach((e,t)=>{$a(n,e)})}async function LE(n,e){Cd(n),za(n)?(n.Ta.ra(e),ja(n)):n.Ta.set("Unknown")}async function ME(n,e,t){if(n.Ta.set("Online"),e instanceof Lh&&e.state===2&&e.cause)try{await async function(s,i){const a=i.cause;for(const c of i.targetIds){if(s._a.has(c)){const l=s.aa.get(c);l!==void 0&&(await s.remoteSyncer.rejectListen(l,a),s.oa.delete(l),s.aa.delete(c)),s._a.delete(c)}s.Pa.removeTarget(c)}}(n,e)}catch(r){O(ft,"Failed to remove targets %s: %s ",e.targetIds.join(","),r),await _i(n,r)}else if(e instanceof Qs?n.Pa._e(e):e instanceof Oh?n.Pa.he(e):n.Pa.ue(e),!t.isEqual(j.min()))try{const r=await Pd(n.localStore);t.compareTo(r)>=0&&await function(i,a){const c=i.Pa.fe(a);c.targetChanges.forEach((d,p)=>{if(d.resumeToken.approximateByteSize()>0){const m=i._a.get(p);m&&i._a.set(p,m.withResumeToken(d.resumeToken,a))}}),c.targetMismatches.forEach((d,p)=>{const m=i._a.get(d);if(!m)return;i._a.set(d,m.withResumeToken(de.EMPTY_BYTE_STRING,m.snapshotVersion)),Vd(i,d);const w=new _t(m.target,d,p,m.sequenceNumber);$a(i,w)});const l=function(p,m){const w=new Map;m.targetChanges.forEach((N,M)=>{const L=p.aa.get(M);L!==void 0&&w.set(L,N)});let V=new ne(K);return m.targetMismatches.forEach((N,M)=>{const L=p.aa.get(N);L!==void 0&&(V=V.insert(L,M))}),new ms(m.snapshotVersion,w,V,m.documentUpdates,m.augmentedDocumentUpdates,m.resolvedLimboDocuments)}(i,c);return i.remoteSyncer.applyRemoteEvent(l)}(n,t)}catch(r){O(ft,"Failed to raise snapshot:",r),await _i(n,r)}}async function _i(n,e,t){if(!rr(e))throw e;n.la.add(1),await ys(n),n.Ta.set("Offline"),t||(t=()=>Pd(n.localStore)),n.asyncQueue.enqueueRetryable(async()=>{O(ft,"Retrying IndexedDB access"),await t(),n.la.delete(1),await Qi(n)})}function bd(n,e){return e().catch(t=>_i(n,t,e))}async function Yi(n){const e=z(n),t=sn(e);let r=e.sa.length>0?e.sa[e.sa.length-1].batchId:da;for(;UE(e);)try{const s=await CE(e.localStore,r);if(s===null){e.sa.length===0&&t.en();break}r=s.batchId,FE(e,s)}catch(s){await _i(e,s)}Nd(e)&&kd(e)}function UE(n){return Dn(n)&&n.sa.length<10}function FE(n,e){n.sa.push(e);const t=sn(n);t.Yt()&&t.Rn&&t.An(e.mutations)}function Nd(n){return Dn(n)&&!sn(n).Jt()&&n.sa.length>0}function kd(n){sn(n).start()}async function BE(n){sn(n).fn()}async function qE(n){const e=sn(n);for(const t of n.sa)e.An(t.mutations)}async function $E(n,e,t){const r=n.sa.shift(),s=La.from(r,e,t);await bd(n,()=>n.remoteSyncer.applySuccessfulWrite(s)),await Yi(n)}async function jE(n,e){e&&sn(n).Rn&&await async function(r,s){if(function(a){return yg(a)&&a!==C.ABORTED}(s.code)){const i=r.sa.shift();sn(r).Xt(),await bd(r,()=>r.remoteSyncer.rejectFailedWrite(i.batchId,s)),await Yi(r)}}(n,e),Nd(n)&&kd(n)}async function ol(n,e){const t=z(n);t.asyncQueue.verifyOperationInProgress(),O(ft,"RemoteStore received new credentials");const r=Dn(t);t.la.add(3),await ys(t),r&&t.Ta.set("Unknown"),await t.remoteSyncer.handleCredentialChange(e),t.la.delete(3),await Qi(t)}async function zE(n,e){const t=z(n);e?(t.la.delete(2),await Qi(t)):e||(t.la.add(2),await ys(t),t.Ta.set("Unknown"))}function cr(n){return n.Ia||(n.Ia=function(t,r,s){const i=z(t);return i.pn(),new n_(r,i.connection,i.authCredentials,i.appCheckCredentials,i.serializer,s)}(n.datastore,n.asyncQueue,{ct:xE.bind(null,n),Et:OE.bind(null,n),Tt:LE.bind(null,n),Tn:ME.bind(null,n)}),n.Ea.push(async e=>{e?(n.Ia.Xt(),za(n)?ja(n):n.Ta.set("Unknown")):(await n.Ia.stop(),Cd(n))})),n.Ia}function sn(n){return n.Ra||(n.Ra=function(t,r,s){const i=z(t);return i.pn(),new r_(r,i.connection,i.authCredentials,i.appCheckCredentials,i.serializer,s)}(n.datastore,n.asyncQueue,{ct:()=>Promise.resolve(),Et:BE.bind(null,n),Tt:jE.bind(null,n),Vn:qE.bind(null,n),dn:$E.bind(null,n)}),n.Ea.push(async e=>{e?(n.Ra.Xt(),await Yi(n)):(await n.Ra.stop(),n.sa.length>0&&(O(ft,`Stopping write stream with ${n.sa.length} pending writes`),n.sa=[]))})),n.Ra}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Wa{constructor(e){this.observer=e,this.muted=!1}next(e){this.muted||this.observer.next&&this.Aa(this.observer.next,e)}error(e){this.muted||(this.observer.error?this.Aa(this.observer.error,e):At("Uncaught Error in snapshot listener:",e.toString()))}Va(){this.muted=!0}Aa(e,t){setTimeout(()=>{this.muted||e(t)},0)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ha{constructor(e,t,r,s,i){this.asyncQueue=e,this.timerId=t,this.targetTimeMs=r,this.op=s,this.removalCallback=i,this.deferred=new wt,this.then=this.deferred.promise.then.bind(this.deferred.promise),this.deferred.promise.catch(a=>{})}get promise(){return this.deferred.promise}static createAndSchedule(e,t,r,s,i){const a=Date.now()+r,c=new Ha(e,t,a,s,i);return c.start(r),c}start(e){this.timerHandle=setTimeout(()=>this.handleDelayElapsed(),e)}skipDelay(){return this.handleDelayElapsed()}cancel(e){this.timerHandle!==null&&(this.clearTimeout(),this.deferred.reject(new D(C.CANCELLED,"Operation cancelled"+(e?": "+e:""))))}handleDelayElapsed(){this.asyncQueue.enqueueAndForget(()=>this.timerHandle!==null?(this.clearTimeout(),this.op().then(e=>this.deferred.resolve(e))):Promise.resolve())}clearTimeout(){this.timerHandle!==null&&(this.removalCallback(this),clearTimeout(this.timerHandle),this.timerHandle=null)}}function Ga(n,e){if(At("AsyncQueue",`${e}: ${n}`),rr(n))return new D(C.UNAVAILABLE,`${e}: ${n}`);throw n}class al{constructor(){this.activeTargetIds=vg()}Ba(e){this.activeTargetIds=this.activeTargetIds.add(e)}Ua(e){this.activeTargetIds=this.activeTargetIds.delete(e)}La(){const e={activeTargetIds:this.activeTargetIds.toArray(),updateTimeMs:Date.now()};return JSON.stringify(e)}}class WE{constructor(){this.fu=new al,this.mu={},this.onlineStateHandler=null,this.sequenceNumberHandler=null}addPendingMutation(e){}updateMutationState(e,t,r){}addLocalQueryTarget(e,t=!0){return t&&this.fu.Ba(e),this.mu[e]||"not-current"}updateQueryState(e,t,r){this.mu[e]=t}removeLocalQueryTarget(e){this.fu.Ua(e)}isLocalQueryTarget(e){return this.fu.activeTargetIds.has(e)}clearQueryState(e){delete this.mu[e]}getAllActiveQueryTargets(){return this.fu.activeTargetIds}isActiveQueryTarget(e){return this.fu.activeTargetIds.has(e)}start(){return this.fu=new al,Promise.resolve()}handleUserChange(e,t,r){}setOnlineState(e){}shutdown(){}writeSequenceNumber(e){}notifyBundleLoaded(e){}}function Oo(){return typeof document<"u"?document:null}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Tn{static emptySet(e){return new Tn(e.comparator)}constructor(e){this.comparator=e?(t,r)=>e(t,r)||F.comparator(t.key,r.key):(t,r)=>F.comparator(t.key,r.key),this.keyedMap=Fn(),this.sortedSet=new ne(this.comparator)}has(e){return this.keyedMap.get(e)!=null}get(e){return this.keyedMap.get(e)}first(){return this.sortedSet.minKey()}last(){return this.sortedSet.maxKey()}isEmpty(){return this.sortedSet.isEmpty()}indexOf(e){const t=this.keyedMap.get(e);return t?this.sortedSet.indexOf(t):-1}get size(){return this.sortedSet.size}forEach(e){this.sortedSet.inorderTraversal((t,r)=>(e(t),!1))}add(e){const t=this.delete(e.key);return t.copy(t.keyedMap.insert(e.key,e),t.sortedSet.insert(e,null))}delete(e){const t=this.get(e);return t?this.copy(this.keyedMap.remove(e),this.sortedSet.remove(t)):this}isEqual(e){if(!(e instanceof Tn)||this.size!==e.size)return!1;const t=this.sortedSet.getIterator(),r=e.sortedSet.getIterator();for(;t.hasNext();){const s=t.getNext().key,i=r.getNext().key;if(!s.isEqual(i))return!1}return!0}toString(){const e=[];return this.forEach(t=>{e.push(t.toString())}),e.length===0?"DocumentSet ()":`DocumentSet (
  `+e.join(`  
`)+`
)`}copy(e,t){const r=new Tn;return r.comparator=this.comparator,r.keyedMap=e,r.sortedSet=t,r}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class cl{constructor(){this.pu=new ne(F.comparator)}track(e){const t=e.doc.key,r=this.pu.get(t);r?e.type!==0&&r.type===3?this.pu=this.pu.insert(t,e):e.type===3&&r.type!==1?this.pu=this.pu.insert(t,{type:r.type,doc:e.doc}):e.type===2&&r.type===2?this.pu=this.pu.insert(t,{type:2,doc:e.doc}):e.type===2&&r.type===0?this.pu=this.pu.insert(t,{type:0,doc:e.doc}):e.type===1&&r.type===0?this.pu=this.pu.remove(t):e.type===1&&r.type===2?this.pu=this.pu.insert(t,{type:1,doc:r.doc}):e.type===0&&r.type===1?this.pu=this.pu.insert(t,{type:2,doc:e.doc}):B(63341,{we:e,gu:r}):this.pu=this.pu.insert(t,e)}yu(){const e=[];return this.pu.inorderTraversal((t,r)=>{e.push(r)}),e}}class Jn{constructor(e,t,r,s,i,a,c,l,d){this.query=e,this.docs=t,this.oldDocs=r,this.docChanges=s,this.mutatedKeys=i,this.fromCache=a,this.syncStateChanged=c,this.excludesMetadataChanges=l,this.hasCachedResults=d}static fromInitialDocuments(e,t,r,s,i){const a=[];return t.forEach(c=>{a.push({type:0,doc:c})}),new Jn(e,t,Tn.emptySet(t),a,r,s,!0,!1,i)}get hasPendingWrites(){return!this.mutatedKeys.isEmpty()}isEqual(e){if(!(this.fromCache===e.fromCache&&this.hasCachedResults===e.hasCachedResults&&this.syncStateChanged===e.syncStateChanged&&this.mutatedKeys.isEqual(e.mutatedKeys)&&Gi(this.query,e.query)&&this.docs.isEqual(e.docs)&&this.oldDocs.isEqual(e.oldDocs)))return!1;const t=this.docChanges,r=e.docChanges;if(t.length!==r.length)return!1;for(let s=0;s<t.length;s++)if(t[s].type!==r[s].type||!t[s].doc.isEqual(r[s].doc))return!1;return!0}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class HE{constructor(){this.wu=void 0,this.bu=[]}Su(){return this.bu.some(e=>e.vu())}}class GE{constructor(){this.queries=ul(),this.onlineState="Unknown",this.Du=new Set}terminate(){(function(t,r){const s=z(t),i=s.queries;s.queries=ul(),i.forEach((a,c)=>{for(const l of c.bu)l.onError(r)})})(this,new D(C.ABORTED,"Firestore shutting down"))}}function ul(){return new Nn(n=>Ed(n),Gi)}async function Ka(n,e){const t=z(n);let r=3;const s=e.query;let i=t.queries.get(s);i?!i.Su()&&e.vu()&&(r=2):(i=new HE,r=e.vu()?0:1);try{switch(r){case 0:i.wu=await t.onListen(s,!0);break;case 1:i.wu=await t.onListen(s,!1);break;case 2:await t.onFirstRemoteStoreListen(s)}}catch(a){const c=Ga(a,`Initialization of query '${me(e.query)?Tt(e.query):Mr(e.query)}' failed`);return void e.onError(c)}t.queries.set(s,i),i.bu.push(e),e.xu(t.onlineState),i.wu&&e.Cu(i.wu)&&Ya(t)}async function Qa(n,e){const t=z(n),r=e.query;let s=3;const i=t.queries.get(r);if(i){const a=i.bu.indexOf(e);a>=0&&(i.bu.splice(a,1),i.bu.length===0?s=e.vu()?0:1:!i.Su()&&e.vu()&&(s=2))}switch(s){case 0:return t.queries.delete(r),t.onUnlisten(r,!0);case 1:return t.queries.delete(r),t.onUnlisten(r,!1);case 2:return t.onLastRemoteStoreUnlisten(r);default:return}}function KE(n,e){const t=z(n);let r=!1;for(const s of e){const i=s.query,a=t.queries.get(i);if(a){for(const c of a.bu)c.Cu(s)&&(r=!0);a.wu=s}}r&&Ya(t)}function QE(n,e,t){const r=z(n),s=r.queries.get(e);if(s)for(const i of s.bu)i.onError(t);r.queries.delete(e)}function Ya(n){n.Du.forEach(e=>{e.next()})}var na;(function(n){n.Default="default",n.Cache="cache"})(na||(na={}));class Ja{constructor(e,t,r){this.query=e,this.Fu=t,this.Ou=!1,this.Mu=null,this.onlineState="Unknown",this.options=r||{}}Cu(e){if(!this.options.includeMetadataChanges){const r=[];for(const s of e.docChanges)s.type!==3&&r.push(s);e=new Jn(e.query,e.docs,e.oldDocs,r,e.mutatedKeys,e.fromCache,e.syncStateChanged,!0,e.hasCachedResults)}let t=!1;return this.Ou?this.Nu(e)&&(this.Fu.next(e),t=!0):this.Lu(e,this.onlineState)&&(this.Bu(e),t=!0),this.Mu=e,t}onError(e){this.Fu.error(e)}xu(e){this.onlineState=e;let t=!1;return this.Mu&&!this.Ou&&this.Lu(this.Mu,e)&&(this.Bu(this.Mu),t=!0),t}Lu(e,t){if(!e.fromCache||!this.vu())return!0;const r=t!=="Offline";return(!this.options.waitForSyncWhenOnline||!r)&&(!e.docs.isEmpty()||e.hasCachedResults||t==="Offline")}Nu(e){if(e.docChanges.length>0)return!0;const t=this.Mu&&this.Mu.hasPendingWrites!==e.hasPendingWrites;return!(!e.syncStateChanged&&!t)&&this.options.includeMetadataChanges===!0}Bu(e){e=Jn.fromInitialDocuments(e.query,e.docs,e.mutatedKeys,e.fromCache,e.hasCachedResults),this.Ou=!0,this.Fu.next(e)}vu(){return this.options.source!==na.Cache}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Dd{constructor(e){this.key=e}}class xd{constructor(e){this.key=e}}class YE{constructor(e,t){this.query=e,this.zu=t,this.ju=null,this.hasCachedResults=!1,this.current=!1,this.Hu=G(),this.mutatedKeys=G(),this.Ju=me(e)?Zo(e):_a(e),this.Yu=new Tn(this.Ju)}get Zu(){return this.zu}Xu(e,t){const r=t?t.ec:new cl,s=t?t.Yu:this.Yu;let i=t?t.mutatedKeys:this.mutatedKeys,a=s,c=!1;const[l,d]=this.tc(this.query,s);e.inorderTraversal((m,w)=>{const V=s.get(m),N=aE(this.query,w)?w:null,M=!!V&&this.mutatedKeys.has(V.key),L=!!N&&(N.hasLocalMutations||this.mutatedKeys.has(N.key)&&N.hasCommittedMutations);let H=!1;V&&N?V.data.isEqual(N.data)?M!==L&&(r.track({type:3,doc:N}),H=!0):this.nc(V,N)||(r.track({type:2,doc:N}),H=!0,(l&&this.Ju(N,l)>0||d&&this.Ju(N,d)<0)&&(c=!0)):!V&&N?(r.track({type:0,doc:N}),H=!0):V&&!N&&(r.track({type:1,doc:V}),H=!0,(l||d)&&(c=!0)),H&&(N?(a=a.add(N),i=L?i.add(m):i.delete(m)):(a=a.delete(m),i=i.delete(m)))});const p=this.rc(this.query);if(p)if(me(this.query)){const m=[];a.forEach(N=>m.push(N));const w=vd(this.query,m);let V=new Tn(Zo(this.query));for(const N of w)V=V.add(N);a.forEach(N=>{V.has(N.key)||(i=i.delete(N.key),r.track({type:1,doc:N}))}),a=V}else{const m=this.sc(this.query);for(;a.size>p;){const w=m==="F"?a.last():a.first();a=a.delete(w.key),i=i.delete(w.key),r.track({type:1,doc:w})}}return{Yu:a,ec:r,Oo:c,mutatedKeys:i}}rc(e){var t;return me(e)?(t=xo(e))==null?void 0:t.limit:e.limit||void 0}sc(e){if(me(e)){const t=xo(e);return t&&t.limit<0?"L":"F"}return e.limitType}tc(e,t){var r;if(me(e)){const s=(r=xo(e))==null?void 0:r.limit;return[t.size===s?t.last():null,null]}return[e.limitType==="F"&&t.size===this.rc(this.query)?t.last():null,e.limitType==="L"&&t.size===this.rc(this.query)?t.first():null]}nc(e,t){return e.hasLocalMutations&&t.hasCommittedMutations&&!t.hasLocalMutations}applyChanges(e,t,r,s){const i=this.Yu;this.Yu=e.Yu,this.mutatedKeys=e.mutatedKeys;const a=e.ec.yu();a.sort((p,m)=>function(V,N){const M=L=>{switch(L){case 0:return 1;case 2:case 3:return 2;case 1:return 0;default:return B(20277,{we:L})}};return M(V)-M(N)}(p.type,m.type)||this.Ju(p.doc,m.doc)),this._c(r),s=s??!1;const c=t&&!s?this.oc():[],l=this.Hu.size===0&&this.current&&!s?1:0,d=l!==this.ju;return this.ju=l,a.length!==0||d?{snapshot:new Jn(this.query,e.Yu,i,a,e.mutatedKeys,l===0,d,!1,!!r&&r.resumeToken.approximateByteSize()>0),ac:c}:{ac:c}}xu(e){return this.current&&e==="Offline"?(this.current=!1,this.applyChanges({Yu:this.Yu,ec:new cl,mutatedKeys:this.mutatedKeys,Oo:!1},!1)):{ac:[]}}uc(e){return!this.zu.has(e)&&!!this.Yu.has(e)&&!this.Yu.get(e).hasLocalMutations}_c(e){e&&(e.addedDocuments.forEach(t=>this.zu=this.zu.add(t)),e.modifiedDocuments.forEach(t=>{}),e.removedDocuments.forEach(t=>this.zu=this.zu.delete(t)),this.current=e.current)}oc(){if(!this.current)return[];const e=this.Hu;this.Hu=G(),this.Yu.forEach(r=>{this.uc(r.key)&&(this.Hu=this.Hu.add(r.key))});const t=[];return e.forEach(r=>{this.Hu.has(r)||t.push(new xd(r))}),this.Hu.forEach(r=>{e.has(r)||t.push(new Dd(r))}),t}cc(e){this.zu=e.Wo,this.Hu=G();const t=this.Xu(e.documents);return this.applyChanges(t,!0)}lc(){return Jn.fromInitialDocuments(this.query,this.Yu,this.mutatedKeys,this.ju===0,this.hasCachedResults)}}const Xa="SyncEngine";class JE{constructor(e,t,r){this.query=e,this.targetId=t,this.view=r}}class XE{constructor(e){this.key=e,this.Ec=!1}}class ZE{constructor(e,t,r,s,i,a){this.localStore=e,this.remoteStore=t,this.eventManager=r,this.sharedClientState=s,this.currentUser=i,this.maxConcurrentLimboResolutions=a,this.hc={},this.Tc=new Nn(c=>Ed(c),Gi),this.Pc=new Map,this.Ic=new Set,this.Rc=new ne(F.comparator),this.Ac=new Map,this.Vc=new Ma,this.dc={},this.fc=new Map,this.mc=rn.bs(),this.onlineState="Unknown",this.gc=void 0}get isPrimaryClient(){return this.gc===!0}}async function ew(n,e,t=!0){const r=Bd(n);let s;const i=r.Tc.get(e);return i?(r.sharedClientState.addLocalQueryTarget(i.targetId),s=i.view.lc()):s=await Od(r,e,t,!0),s}async function tw(n,e){const t=Bd(n);await Od(t,e,!0,!1)}async function Od(n,e,t,r){const s=await bE(n.localStore,me(e)?e:ct(e)),i=s.targetId,a=n.sharedClientState.addLocalQueryTarget(i,t);let c;return r&&(c=await nw(n,e,i,a==="current",s.resumeToken)),n.isPrimaryClient&&t&&Sd(n.remoteStore,s),c}async function nw(n,e,t,r,s){n.yc=(m,w,V)=>async function(M,L,H,J){let ie=L.view.Xu(H);ie.Oo&&(ie=await il(M.localStore,L.query,!1).then(({documents:I})=>L.view.Xu(I,ie)));const Ke=J&&J.targetChanges.get(L.targetId),Te=J&&J.targetMismatches.get(L.targetId)!=null,Ie=L.view.applyChanges(ie,M.isPrimaryClient,Ke,Te);return hl(M,L.targetId,Ie.ac),Ie.snapshot}(n,m,w,V);const i=await il(n.localStore,e,!0),a=new YE(e,i.Wo),c=a.Xu(i.documents),l=gs.createSynthesizedTargetChangeForCurrentChange(t,r&&n.onlineState!=="Offline",s),d=a.applyChanges(c,n.isPrimaryClient,l);hl(n,t,d.ac);const p=new JE(e,t,a);return n.Tc.set(e,p),n.Pc.has(t)?n.Pc.get(t).push(e):n.Pc.set(t,[e]),d.snapshot}async function rw(n,e,t){const r=z(n),s=r.Tc.get(e),i=r.Pc.get(s.targetId);if(i.length>1)return r.Pc.set(s.targetId,i.filter(a=>!Gi(a,e))),void r.Tc.delete(e);r.isPrimaryClient?(r.sharedClientState.removeLocalQueryTarget(s.targetId),r.sharedClientState.isActiveQueryTarget(s.targetId)||await ea(r.localStore,s.targetId,!1).then(()=>{r.sharedClientState.clearQueryState(s.targetId),t&&qa(r.remoteStore,s.targetId),ra(r,s.targetId)}).catch(nr)):(ra(r,s.targetId),await ea(r.localStore,s.targetId,!0))}async function sw(n,e){const t=z(n),r=t.Tc.get(e),s=t.Pc.get(r.targetId);t.isPrimaryClient&&s.length===1&&(t.sharedClientState.removeLocalQueryTarget(r.targetId),qa(t.remoteStore,r.targetId))}async function iw(n,e,t){const r=dw(n);try{const s=await function(a,c){const l=z(a),d=Z.now(),p=c.reduce((V,N)=>V.add(N.key),G());let m,w;return l.persistence.runTransaction("Locally write mutations","readwrite",V=>{let N=Oe(),M=G();return l.ko.getEntries(V,p).next(L=>{N=L,N.forEach((H,J)=>{J.isValidDocument()||(M=M.add(H))})}).next(()=>l.localDocuments.getOverlayedDocuments(V,N)).next(L=>{m=L;const H=[];for(const J of c){const ie=Ym(J,m.get(J.key).overlayedDocument);ie!=null&&H.push(new un(J.key,ie,ph(ie.value.mapValue),Ze.exists(!0)))}return l.mutationQueue.addMutationBatch(V,d,H,c)}).next(L=>{w=L;const H=L.applyToLocalDocumentSet(m,M);return l.documentOverlayCache.saveOverlays(V,L.batchId,H)})}).then(()=>({batchId:w.batchId,changes:Dh(m)}))}(r.localStore,e);r.sharedClientState.addPendingMutation(s.batchId),function(a,c,l){let d=a.dc[a.currentUser.toKey()];d||(d=new ne(K)),d=d.insert(c,l),a.dc[a.currentUser.toKey()]=d}(r,s.batchId,t),await Es(r,s.changes),await Yi(r.remoteStore)}catch(s){const i=Ga(s,"Failed to persist write");t.reject(i)}}async function Ld(n,e){const t=z(n);try{const r=await SE(t.localStore,e);e.targetChanges.forEach((s,i)=>{const a=t.Ac.get(i);a&&(U(s.addedDocuments.size+s.modifiedDocuments.size+s.removedDocuments.size<=1,22616),s.addedDocuments.size>0?a.Ec=!0:s.modifiedDocuments.size>0?U(a.Ec,14607):s.removedDocuments.size>0&&(U(a.Ec,42227),a.Ec=!1))}),await Es(t,r,e)}catch(r){await nr(r)}}function ll(n,e,t){const r=z(n);if(r.isPrimaryClient&&t===0||!r.isPrimaryClient&&t===1){const s=[];r.Tc.forEach((i,a)=>{const c=a.view.xu(e);c.snapshot&&s.push(c.snapshot)}),function(a,c){const l=z(a);l.onlineState=c;let d=!1;l.queries.forEach((p,m)=>{for(const w of m.bu)w.xu(c)&&(d=!0)}),d&&Ya(l)}(r.eventManager,e),s.length&&r.hc.Tn(s),r.onlineState=e,r.isPrimaryClient&&r.sharedClientState.setOnlineState(e)}}async function ow(n,e,t){const r=z(n);r.sharedClientState.updateQueryState(e,"rejected",t);const s=r.Ac.get(e),i=s&&s.key;if(i){let a=new ne(F.comparator);a=a.insert(i,Pe.newNoDocument(i,j.min()));const c=G().add(i),l=new ms(j.min(),new Map,new ne(K),a,Oe(),c);await Ld(r,l),r.Rc=r.Rc.remove(i),r.Ac.delete(e),Za(r)}else await ea(r.localStore,e,!1).then(()=>ra(r,e,t)).catch(nr)}async function aw(n,e){const t=z(n),r=e.batch.batchId;try{const s=await PE(t.localStore,e);Ud(t,r,null),Md(t,r),t.sharedClientState.updateMutationState(r,"acknowledged"),await Es(t,s)}catch(s){await nr(s)}}async function cw(n,e,t){const r=z(n);try{const s=await function(a,c){const l=z(a);return l.persistence.runTransaction("Reject batch","readwrite-primary",d=>{let p;return l.mutationQueue.lookupMutationBatch(d,c).next(m=>(U(m!==null,37113),p=m.keys(),l.mutationQueue.removeMutationBatch(d,m))).next(()=>l.mutationQueue.performConsistencyCheck(d)).next(()=>l.documentOverlayCache.removeOverlaysForBatchId(d,p,c)).next(()=>l.localDocuments.recalculateAndSaveOverlaysForDocumentKeys(d,p)).next(()=>l.localDocuments.getDocuments(d,p))})}(r.localStore,e);Ud(r,e,t),Md(r,e),r.sharedClientState.updateMutationState(e,"rejected",t),await Es(r,s)}catch(s){await nr(s)}}function Md(n,e){(n.fc.get(e)||[]).forEach(t=>{t.resolve()}),n.fc.delete(e)}function Ud(n,e,t){const r=z(n);let s=r.dc[r.currentUser.toKey()];if(s){const i=s.get(e);i&&(t?i.reject(t):i.resolve(),s=s.remove(e)),r.dc[r.currentUser.toKey()]=s}}function ra(n,e,t=null){n.sharedClientState.removeLocalQueryTarget(e);for(const r of n.Pc.get(e))n.Tc.delete(r),t&&n.hc.wc(r,t);n.Pc.delete(e),n.isPrimaryClient&&n.Vc.e_(e).forEach(r=>{n.Vc.containsKey(r)||Fd(n,r)})}function Fd(n,e){n.Ic.delete(e.path.canonicalString());const t=n.Rc.get(e);t!==null&&(qa(n.remoteStore,t),n.Rc=n.Rc.remove(e),n.Ac.delete(t),Za(n))}function hl(n,e,t){for(const r of t)r instanceof Dd?(n.Vc.addReference(r.key,e),uw(n,r)):r instanceof xd?(O(Xa,"Document no longer in limbo: "+r.key),n.Vc.removeReference(r.key,e),n.Vc.containsKey(r.key)||Fd(n,r.key)):B(19791,{bc:r})}function uw(n,e){const t=e.key,r=t.path.canonicalString();n.Rc.get(t)||n.Ic.has(r)||(O(Xa,"New document in limbo: "+t),n.Ic.add(r),Za(n))}function Za(n){for(;n.Ic.size>0&&n.Rc.size<n.maxConcurrentLimboResolutions;){const e=n.Ic.values().next().value;n.Ic.delete(e);const t=new F(X.fromString(e)),r=n.mc.next();n.Ac.set(r,new XE(t)),n.Rc=n.Rc.insert(t,r),Sd(n.remoteStore,new _t(ct(xi(t.path)),r,"TargetPurposeLimboResolution",Fi.wn))}}async function Es(n,e,t){const r=z(n),s=[],i=[],a=[];r.Tc.isEmpty()||(r.Tc.forEach((c,l)=>{a.push(r.yc(l,e,t).then(d=>{var p;if((d||t)&&r.isPrimaryClient){const m=d?!d.fromCache:(p=t==null?void 0:t.targetChanges.get(l.targetId))==null?void 0:p.current;r.sharedClientState.updateQueryState(l.targetId,m?"current":"not-current")}if(d){s.push(d);const m=Fa.mo(l.targetId,d);i.push(m)}}))}),await Promise.all(a),r.hc.Tn(s),await async function(l,d){const p=z(l);try{await p.persistence.runTransaction("notifyLocalViewChanges","readwrite",m=>b.forEach(d,w=>b.forEach(w.Vo,V=>p.persistence.referenceDelegate.addReference(m,w.targetId,V)).next(()=>b.forEach(w.fo,V=>p.persistence.referenceDelegate.removeReference(m,w.targetId,V)))))}catch(m){if(!rr(m))throw m;O(Ba,"Failed to update sequence numbers: "+m)}for(const m of d){const w=m.targetId;if(!m.fromCache){const V=p.Lo.get(w),N=V.snapshotVersion,M=V.withLastLimboFreeSnapshotVersion(N);p.Lo=p.Lo.insert(w,M)}}}(r.localStore,i))}async function lw(n,e){const t=z(n);if(!t.currentUser.isEqual(e)){O(Xa,"User change. New user:",e.toKey());const r=await Rd(t.localStore,e);t.currentUser=e,function(i,a){i.fc.forEach(c=>{c.forEach(l=>{l.reject(new D(C.CANCELLED,a))})}),i.fc.clear()}(t,"'waitForPendingWrites' promise is rejected due to a user change."),t.sharedClientState.handleUserChange(e,r.removedBatchIds,r.addedBatchIds),await Es(t,r.$o)}}function hw(n,e){const t=z(n),r=t.Ac.get(e);if(r&&r.Ec)return G().add(r.key);{let s=G();const i=t.Pc.get(e);if(!i)return s;for(const a of i??[]){const c=t.Tc.get(a);s=s.unionWith(c.view.Zu)}return s}}function Bd(n){const e=z(n);return e.remoteStore.remoteSyncer.applyRemoteEvent=Ld.bind(null,e),e.remoteStore.remoteSyncer.getRemoteKeysForTarget=hw.bind(null,e),e.remoteStore.remoteSyncer.rejectListen=ow.bind(null,e),e.hc.Tn=KE.bind(null,e.eventManager),e.hc.wc=QE.bind(null,e.eventManager),e}function dw(n){const e=z(n);return e.remoteStore.remoteSyncer.applySuccessfulWrite=aw.bind(null,e),e.remoteStore.remoteSyncer.rejectFailedWrite=cw.bind(null,e),e}class yi{constructor(){this.kind="memory",this.synchronizeTabs=!1}async initialize(e){this.serializer=Li(e.databaseInfo.databaseId),this.sharedClientState=this.vc(e),this.persistence=this.Dc(e),await this.persistence.start(),this.localStore=this.xc(e),this.gcScheduler=this.Cc(e,this.localStore),this.indexBackfillerScheduler=this.Fc(e,this.localStore)}Cc(e,t){return null}Fc(e,t){return null}xc(e){return RE(this.persistence,new IE,e.initialUser,this.serializer)}Dc(e){return new Ad(Ua.b_,this.serializer)}vc(e){return new WE}async terminate(){var e,t;(e=this.gcScheduler)==null||e.stop(),(t=this.indexBackfillerScheduler)==null||t.stop(),this.sharedClientState.shutdown(),await this.persistence.shutdown()}}yi.provider={build:()=>new yi};class fw extends yi{constructor(e){super(),this.cacheSizeBytes=e}Cc(e,t){U(this.persistence.referenceDelegate instanceof gi,46915);const r=this.persistence.referenceDelegate.garbageCollector;return new p_(r,e.asyncQueue,t)}Dc(e){const t=this.cacheSizeBytes!==void 0?xe.withCacheSize(this.cacheSizeBytes):xe.DEFAULT;return new Ad(r=>gi.b_(r,t),this.serializer)}}class sa{async initialize(e,t){this.localStore||(this.localStore=e.localStore,this.sharedClientState=e.sharedClientState,this.datastore=this.createDatastore(t),this.remoteStore=this.createRemoteStore(t),this.eventManager=this.createEventManager(t),this.syncEngine=this.createSyncEngine(t,!e.synchronizeTabs),this.sharedClientState.onlineStateHandler=r=>ll(this.syncEngine,r,1),this.remoteStore.remoteSyncer.handleCredentialChange=lw.bind(null,this.syncEngine),await zE(this.remoteStore,this.syncEngine.isPrimaryClient))}createEventManager(e){return function(){return new GE}()}createDatastore(e){const t=Li(e.databaseInfo.databaseId),r=t_(e.databaseInfo);return o_(e.authCredentials,e.appCheckCredentials,r,t)}createRemoteStore(e){return function(r,s,i,a,c){return new DE(r,s,i,a,c)}(this.localStore,this.datastore,e.asyncQueue,t=>ll(this.syncEngine,t,0),function(){return Ku.Ye()?new Ku:new Jg}())}createSyncEngine(e,t){return function(s,i,a,c,l,d,p){const m=new ZE(s,i,a,c,l,d);return p&&(m.gc=!0),m}(this.localStore,this.remoteStore,this.eventManager,this.sharedClientState,e.initialUser,e.maxConcurrentLimboResolutions,t)}async terminate(){var e,t;await async function(s){const i=z(s);O(ft,"RemoteStore shutting down."),i.la.add(5),await ys(i),i.ha.shutdown(),i.Ta.set("Unknown")}(this.remoteStore),(e=this.datastore)==null||e.terminate(),(t=this.eventManager)==null||t.terminate()}}sa.provider={build:()=>new sa};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const on="FirestoreClient";class pw{constructor(e,t,r,s,i){this.authCredentials=e,this.appCheckCredentials=t,this.asyncQueue=r,this._databaseInfo=s,this.user=Re.UNAUTHENTICATED,this.clientId=ha.newId(),this.authCredentialListener=()=>Promise.resolve(),this.appCheckCredentialListener=()=>Promise.resolve(),this._uninitializedComponentsProvider=i,this.authCredentials.start(r,async a=>{O(on,"Received user=",a.uid),await this.authCredentialListener(a),this.user=a}),this.appCheckCredentials.start(r,a=>(O(on,"Received new app check token=",a),this.appCheckCredentialListener(a,this.user)))}get configuration(){return{asyncQueue:this.asyncQueue,databaseInfo:this._databaseInfo,clientId:this.clientId,authCredentials:this.authCredentials,appCheckCredentials:this.appCheckCredentials,initialUser:this.user,maxConcurrentLimboResolutions:100}}setCredentialChangeListener(e){this.authCredentialListener=e}setAppCheckTokenChangeListener(e){this.appCheckCredentialListener=e}terminate(){this.asyncQueue.enterRestrictedMode();const e=new wt;return this.asyncQueue.enqueueAndForgetEvenWhileRestricted(async()=>{try{this._onlineComponents&&await this._onlineComponents.terminate(),this._offlineComponents&&await this._offlineComponents.terminate(),this.authCredentials.shutdown(),this.appCheckCredentials.shutdown(),e.resolve()}catch(t){const r=Ga(t,"Failed to shutdown persistence");e.reject(r)}}),e.promise}}async function Lo(n,e){n.asyncQueue.verifyOperationInProgress(),O(on,"Initializing OfflineComponentProvider");const t=n.configuration;await e.initialize(t);let r=t.initialUser;n.setCredentialChangeListener(async s=>{r.isEqual(s)||(await Rd(e.localStore,s),r=s)}),e.persistence.setDatabaseDeletedListener(()=>n.terminate()),n._offlineComponents=e}async function dl(n,e){n.asyncQueue.verifyOperationInProgress();const t=await mw(n);O(on,"Initializing OnlineComponentProvider"),await e.initialize(t,n.configuration),n.setCredentialChangeListener(r=>ol(e.remoteStore,r)),n.setAppCheckTokenChangeListener((r,s)=>ol(e.remoteStore,s)),n._onlineComponents=e}async function mw(n){if(!n._offlineComponents)if(n._uninitializedComponentsProvider){O(on,"Using user provided OfflineComponentProvider");try{await Lo(n,n._uninitializedComponentsProvider._offline)}catch(e){const t=e;if(!function(s){return s.name==="FirebaseError"?s.code===C.FAILED_PRECONDITION||s.code===C.UNIMPLEMENTED:!(typeof DOMException<"u"&&s instanceof DOMException)||s.code===22||s.code===20||s.code===11}(t))throw t;tt("Error using user provided cache. Falling back to memory cache: "+t),await Lo(n,new yi)}}else O(on,"Using default OfflineComponentProvider"),await Lo(n,new fw(void 0));return n._offlineComponents}async function qd(n){return n._onlineComponents||(n._uninitializedComponentsProvider?(O(on,"Using user provided OnlineComponentProvider"),await dl(n,n._uninitializedComponentsProvider._online)):(O(on,"Using default OnlineComponentProvider"),await dl(n,new sa))),n._onlineComponents}function gw(n){return qd(n).then(e=>e.syncEngine)}async function Ei(n){const e=await qd(n),t=e.eventManager;return t.onListen=ew.bind(null,e.syncEngine),t.onUnlisten=rw.bind(null,e.syncEngine),t.onFirstRemoteStoreListen=tw.bind(null,e.syncEngine),t.onLastRemoteStoreUnlisten=sw.bind(null,e.syncEngine),t}function _w(n,e,t,r){const s=new Wa(r),i=new Ja(e,s,t);return n.asyncQueue.enqueueAndForget(async()=>Ka(await Ei(n),i)),()=>{s.Va(),n.asyncQueue.enqueueAndForget(async()=>Qa(await Ei(n),i))}}function yw(n,e,t={}){const r=new wt;return n.asyncQueue.enqueueAndForget(async()=>function(i,a,c,l,d){const p=new Wa({next:w=>{p.Va(),a.enqueueAndForget(()=>Qa(i,m));const V=w.docs.has(c);!V&&w.fromCache?d.reject(new D(C.UNAVAILABLE,"Failed to get document because the client is offline.")):V&&w.fromCache&&l&&l.source==="server"?d.reject(new D(C.UNAVAILABLE,'Failed to get document from server. (However, this document does exist in the local cache. Run again without setting source to "server" to retrieve the cached document.)')):d.resolve(w)},error:w=>d.reject(w)}),m=new Ja(xi(c.path),p,{includeMetadataChanges:!0,waitForSyncWhenOnline:!0});return Ka(i,m)}(await Ei(n),n.asyncQueue,e,t,r)),r.promise}function Ew(n,e,t={}){const r=new wt;return n.asyncQueue.enqueueAndForget(async()=>function(i,a,c,l,d){const p=new Wa({next:w=>{p.Va(),a.enqueueAndForget(()=>Qa(i,m)),w.fromCache&&l.source==="server"?d.reject(new D(C.UNAVAILABLE,'Failed to get documents from server. (However, these documents may exist in the local cache. Run again without setting source to "server" to retrieve the cached documents.)')):d.resolve(w)},error:w=>d.reject(w)}),m=new Ja(c instanceof Br?Xy(c):c,p,{includeMetadataChanges:!0,waitForSyncWhenOnline:!0});return Ka(i,m)}(await Ei(n),n.asyncQueue,e,t,r)),r.promise}function ww(n,e){const t=new wt;return n.asyncQueue.enqueueAndForget(async()=>iw(await gw(n),e,t)),t.promise}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let $d=class{constructor(e,t,r,s,i){this._firestore=e,this._userDataWriter=t,this._key=r,this._document=s,this._converter=i}get id(){return this._key.path.lastSegment()}get ref(){return new se(this._firestore,this._converter,this._key)}exists(){return this._document!==null}data(){if(this._document){if(this._converter){const e=new Tw(this._firestore,this._userDataWriter,this._key,this._document,null);return this._converter.fromFirestore(e)}return this._userDataWriter.convertValue(this._document.data.value)}}_fieldsProto(){var e;return((e=this._document)==null?void 0:e.data.clone().value.mapValue.fields)??void 0}get(e){if(this._document){const t=this._document.data.field(en("DocumentSnapshot.get",e));if(t!==null)return this._userDataWriter.convertValue(t)}}},Tw=class extends $d{data(){return super.data()}};/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Iw{convertValue(e,t="none"){switch(fe(e)){case 0:return null;case 1:return e.booleanValue;case 2:return re(e.integerValue||e.doubleValue);case 3:return this.convertTimestamp(e.timestampValue);case 4:return this.convertServerTimestamp(e,t);case 5:return e.stringValue;case 6:return this.convertBytes(Yt(e.bytesValue));case 7:return this.convertReference(e.referenceValue);case 8:return this.convertGeoPoint(e.geoPointValue);case 9:return this.convertArray(e.arrayValue,t);case 11:return this.convertObject(e.mapValue,t);case 10:return this.convertVectorValue(e.mapValue);default:throw B(62114,{value:e})}}convertObject(e,t){return this.convertObjectMap(e.fields,t)}convertObjectMap(e,t="none"){const r={};return cn(e,(s,i)=>{r[s]=this.convertValue(i,t)}),r}convertVectorValue(e){var r,s,i;const t=(i=(s=(r=e.fields)==null?void 0:r[Gr].arrayValue)==null?void 0:s.values)==null?void 0:i.map(a=>re(a.doubleValue));return new Le(t)}convertGeoPoint(e){return new lt(re(e.latitude),re(e.longitude))}convertArray(e,t){return(e.values||[]).map(r=>this.convertValue(r,t))}convertServerTimestamp(e,t){switch(t){case"previous":const r=fs(e);return r==null?null:this.convertValue(r,t);case"estimate":return this.convertTimestamp(Gn(e));default:return null}}convertTimestamp(e){const t=Qt(e);return new Z(t.seconds,t.nanos)}convertDocumentKey(e,t){const r=X.fromString(e);U(jh(r),9688,{name:e});const s=new Wr(r.get(1),r.get(3)),i=new F(r.popFirst(5));return s.isEqual(t)||At(`A document reference to ${i} refers to a different database (${s.projectId}/${s.database}), which is not supported. It will be treated as a reference in the current database (${t.projectId}/${t.database}) instead.`),i}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function vw(n,e,t){let r;return r=n?t&&(t.merge||t.mergeFields)?n.toFirestore(e,t):n.toFirestore(e):e,r}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const fl="AsyncQueue";class pl{constructor(e=Promise.resolve()){this.$c=[],this.Kc=!1,this.Qc=[],this.Wc=null,this.Gc=!1,this.zc=!1,this.jc=[],this.Ht=new Kh(this,"async_queue_retry"),this.Hc=()=>{const r=Oo();r&&O(fl,"Visibility state changed to "+r.visibilityState),this.Ht.$t()},this.Jc=e;const t=Oo();t&&typeof t.addEventListener=="function"&&t.addEventListener("visibilitychange",this.Hc)}get isShuttingDown(){return this.Kc}enqueueAndForget(e){this.enqueue(e)}enqueueAndForgetEvenWhileRestricted(e){this.Yc(),this.Zc(e)}enterRestrictedMode(e){if(!this.Kc){this.Kc=!0,this.zc=e||!1;const t=Oo();t&&typeof t.removeEventListener=="function"&&t.removeEventListener("visibilitychange",this.Hc)}}enqueue(e){if(this.Yc(),this.Kc)return new Promise(()=>{});const t=new wt;return this.Zc(()=>this.Kc&&this.zc?Promise.resolve():(e().then(t.resolve,t.reject),t.promise)).then(()=>t.promise)}enqueueRetryable(e){this.enqueueAndForget(()=>(this.$c.push(e),this.Xc()))}async Xc(){if(this.$c.length!==0){try{await this.$c[0](),this.$c.shift(),this.Ht.reset()}catch(e){if(!rr(e))throw e;O(fl,"Operation failed with retryable error: "+e)}this.$c.length>0&&this.Ht.kt(()=>this.Xc())}}Zc(e){const t=this.Jc.then(()=>(this.Gc=!0,e().catch(r=>{throw this.Wc=r,this.Gc=!1,At("INTERNAL UNHANDLED ERROR: ",ml(r)),r}).then(r=>(this.Gc=!1,r))));return this.Jc=t,t}enqueueAfterDelay(e,t,r){this.Yc(),this.jc.indexOf(e)>-1&&(t=0);const s=Ha.createAndSchedule(this,e,t,r,i=>this.el(i));return this.Qc.push(s),s}Yc(){this.Wc&&B(47125,{tl:ml(this.Wc)})}verifyOperationInProgress(){}async nl(){let e;do e=this.Jc,await e;while(e!==this.Jc)}rl(e){for(const t of this.Qc)if(t.timerId===e)return!0;return!1}il(e){return this.nl().then(()=>{this.Qc.sort((t,r)=>t.targetTimeMs-r.targetTimeMs);for(const t of this.Qc)if(t.skipDelay(),e!=="all"&&t.timerId===e)break;return this.nl()})}sl(e){this.jc.push(e)}el(e){const t=this.Qc.indexOf(e);this.Qc.splice(t,1)}}function ml(n){let e=n.message||"";return n.stack&&(e=n.stack.includes(n.message)?n.stack:n.message+`
`+n.stack),e}class an extends Bi{constructor(e,t,r,s){super(e,t,r,s),this.type="firestore",this._queue=new pl,this._persistenceKey=(s==null?void 0:s.name)||"[DEFAULT]"}async _terminate(){if(this._firestoreClient){const e=this._firestoreClient.terminate();this._queue=new pl(e),this._firestoreClient=void 0,await e}}}function KI(n,e){const t=typeof n=="object"?n:Ql(),r=typeof n=="string"?n:oi,s=ua(t,"firestore").getImmediate({identifier:r});if(!s._initialized){const i=pp("firestore");i&&__(s,...i)}return s}function Ji(n){if(n._terminated)throw new D(C.FAILED_PRECONDITION,"The client has already been terminated.");return n._firestoreClient||Aw(n),n._firestoreClient}function Aw(n){var r,s,i,a;const e=n._freezeSettings(),t=c_(n._databaseId,((r=n._app)==null?void 0:r.options.appId)||"",n._persistenceKey,(s=n._app)==null?void 0:s.options.apiKey,e);n._componentsProvider||(i=e.localCache)!=null&&i._offlineComponentProvider&&((a=e.localCache)!=null&&a._onlineComponentProvider)&&(n._componentsProvider={_offline:e.localCache._offlineComponentProvider,_online:e.localCache._onlineComponentProvider}),n._firestoreClient=new pw(n._authCredentials,n._appCheckCredentials,n._queue,t,n._componentsProvider&&function(l){const d=l==null?void 0:l._online.build();return{_offline:l==null?void 0:l._offline.build(d),_online:d}}(n._componentsProvider))}/**
 * @license
 * Copyright 2024 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ec extends Iw{constructor(e){super(),this.firestore=e}convertBytes(e){return new Qe(e)}convertReference(e){const t=this.convertDocumentKey(e,this.firestore._databaseId);return new se(this.firestore,null,t)}}class Dr{constructor(e,t){this.hasPendingWrites=e,this.fromCache=t}isEqual(e){return this.hasPendingWrites===e.hasPendingWrites&&this.fromCache===e.fromCache}}class In extends $d{constructor(e,t,r,s,i,a){super(e,t,r,s,a),this._firestore=e,this._firestoreImpl=e,this.metadata=i}exists(){return super.exists()}data(e={}){if(this._document){if(this._converter){const t=new Xs(this._firestore,this._userDataWriter,this._key,this._document,this.metadata,null);return this._converter.fromFirestore(t,e)}return this._userDataWriter.convertValue(this._document.data.value,e.serverTimestamps)}}get(e,t={}){if(this._document){const r=this._document.data.field(en("DocumentSnapshot.get",e));if(r!==null)return this._userDataWriter.convertValue(r,t.serverTimestamps)}}toJSON(){if(this.metadata.hasPendingWrites)throw new D(C.FAILED_PRECONDITION,"DocumentSnapshot.toJSON() attempted to serialize a document with pending writes. Await waitForPendingWrites() before invoking toJSON().");const e=this._document,t={};return t.type=In._jsonSchemaVersion,t.bundle="",t.bundleSource="DocumentSnapshot",t.bundleName=this._key.toString(),!e||!e.isValidDocument()||!e.isFoundDocument()?t:(this._userDataWriter.convertObjectMap(e.data.value.mapValue.fields,"previous"),t.bundle=(this._firestore,this.ref.path,"NOT SUPPORTED"),t)}}In._jsonSchemaVersion="firestore/documentSnapshot/1.0",In._jsonSchema={type:ue("string",In._jsonSchemaVersion),bundleSource:ue("string","DocumentSnapshot"),bundleName:ue("string"),bundle:ue("string")};class Xs extends In{data(e={}){return super.data(e)}}class vn{constructor(e,t,r,s){this._firestore=e,this._userDataWriter=t,this._snapshot=s,this.metadata=new Dr(s.hasPendingWrites,s.fromCache),this.query=r}get docs(){const e=[];return this.forEach(t=>e.push(t)),e}get size(){return this._snapshot.docs.size}get empty(){return this.size===0}forEach(e,t){this._snapshot.docs.forEach(r=>{e.call(t,new Xs(this._firestore,this._userDataWriter,r.key,r,new Dr(this._snapshot.mutatedKeys.has(r.key),this._snapshot.fromCache),this.query.converter))})}docChanges(e={}){const t=!!e.includeMetadataChanges;if(t&&this._snapshot.excludesMetadataChanges)throw new D(C.INVALID_ARGUMENT,"To include metadata changes with your document changes, you must also pass { includeMetadataChanges:true } to onSnapshot().");return this._cachedChanges&&this._cachedChangesIncludeMetadataChanges===t||(this._cachedChanges=function(s,i){if(s._snapshot.oldDocs.isEmpty()){let a=0;return s._snapshot.docChanges.map(c=>{me(s._snapshot.query)?Zo(s._snapshot.query):_a(s.query._query);const l=new Xs(s._firestore,s._userDataWriter,c.doc.key,c.doc,new Dr(s._snapshot.mutatedKeys.has(c.doc.key),s._snapshot.fromCache),s.query.converter);return c.doc,{type:"added",doc:l,oldIndex:-1,newIndex:a++}})}{let a=s._snapshot.oldDocs;return s._snapshot.docChanges.filter(c=>i||c.type!==3).map(c=>{const l=new Xs(s._firestore,s._userDataWriter,c.doc.key,c.doc,new Dr(s._snapshot.mutatedKeys.has(c.doc.key),s._snapshot.fromCache),s.query.converter);let d=-1,p=-1;return c.type!==0&&(d=a.indexOf(c.doc.key),a=a.delete(c.doc.key)),c.type!==1&&(a=a.add(c.doc),p=a.indexOf(c.doc.key)),{type:Rw(c.type),doc:l,oldIndex:d,newIndex:p}})}}(this,t),this._cachedChangesIncludeMetadataChanges=t),this._cachedChanges}toJSON(){if(this.metadata.hasPendingWrites)throw new D(C.FAILED_PRECONDITION,"QuerySnapshot.toJSON() attempted to serialize a document with pending writes. Await waitForPendingWrites() before invoking toJSON().");const e={};e.type=vn._jsonSchemaVersion,e.bundleSource="QuerySnapshot",e.bundleName=ha.newId(),this._firestore._databaseId.database,this._firestore._databaseId.projectId;const t=[],r=[],s=[];return this.docs.forEach(i=>{i._document!==null&&(t.push(i._document),r.push(this._userDataWriter.convertObjectMap(i._document.data.value.mapValue.fields,"previous")),s.push(i.ref.path))}),e.bundle=(this._firestore,this.query._query,e.bundleName,"NOT SUPPORTED"),e}}function Rw(n){switch(n){case 0:return"added";case 2:case 3:return"modified";case 1:return"removed";default:return B(61501,{type:n})}}/**
 * @license
 * Copyright 2025 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */vn._jsonSchemaVersion="firestore/querySnapshot/1.0",vn._jsonSchema={type:ue("string",vn._jsonSchemaVersion),bundleSource:ue("string","QuerySnapshot"),bundleName:ue("string"),bundle:ue("string")};/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function jd(n){if(n.limitType==="L"&&n.explicitOrderBy.length===0)throw new D(C.UNIMPLEMENTED,"limitToLast() queries require specifying at least one orderBy() clause")}class tc{}class nc extends tc{}function QI(n,e,...t){let r=[];e instanceof tc&&r.push(e),r=r.concat(t),function(i){const a=i.filter(l=>l instanceof rc).length,c=i.filter(l=>l instanceof Xi).length;if(a>1||a>0&&c>0)throw new D(C.INVALID_ARGUMENT,"InvalidQuery. When using composite filters, you cannot use more than one filter at the top level. Consider nesting the multiple filters within an `and(...)` statement. For example: change `query(query, where(...), or(...))` to `query(query, and(where(...), or(...)))`.")}(r);for(const s of r)n=s._apply(n);return n}class Xi extends nc{constructor(e,t,r){super(),this._field=e,this._op=t,this._value=r,this.type="where"}static _create(e,t,r){return new Xi(e,t,r)}_apply(e){const t=this._parse(e);return zd(e._query,t),new Vt(e.firestore,e.converter,Go(e._query,t))}_parse(e){const t=Ia(e.firestore);return function(i,a,c,l,d,p,m){let w;if(d.isKeyField()){if(p==="array-contains"||p==="array-contains-any")throw new D(C.INVALID_ARGUMENT,`Invalid Query. You can't perform '${p}' queries on documentId().`);if(p==="in"||p==="not-in"){_l(m,p);const N=[];for(const M of m)N.push(gl(l,i,M));w={arrayValue:{values:N}}}else w=gl(l,i,m)}else p!=="in"&&p!=="not-in"&&p!=="array-contains-any"||_l(m,p),w=A_(c,a,m,p==="in"||p==="not-in");return ce.create(d,p,w)}(e._query,"where",t,e.firestore._databaseId,this._field,this._op,this._value)}}function YI(n,e,t){const r=e,s=en("where",n);return Xi._create(s,r,t)}class rc extends tc{constructor(e,t){super(),this.type=e,this._queryConstraints=t}static _create(e,t){return new rc(e,t)}_parse(e){const t=this._queryConstraints.map(r=>r._parse(e)).filter(r=>r.getFilters().length>0);return t.length===1?t[0]:nt.create(t,this._getOperator())}_apply(e){const t=this._parse(e);return t.getFilters().length===0?e:(function(s,i){let a=s;const c=i.getFlattenedFilters();for(const l of c)zd(a,l),a=Go(a,l)}(e._query,t),new Vt(e.firestore,e.converter,Go(e._query,t)))}_getQueryConstraints(){return this._queryConstraints}_getOperator(){return this.type==="and"?"and":"or"}}class sc extends nc{constructor(e,t){super(),this._field=e,this._direction=t,this.type="orderBy"}static _create(e,t){return new sc(e,t)}_apply(e){const t=function(s,i,a){if(s.startAt!==null)throw new D(C.INVALID_ARGUMENT,"Invalid query. You must not call startAt() or startAfter() before calling orderBy().");if(s.endAt!==null)throw new D(C.INVALID_ARGUMENT,"Invalid query. You must not call endAt() or endBefore() before calling orderBy().");return new Zr(i,a)}(e._query,this._field,this._direction);return new Vt(e.firestore,e.converter,pg(e._query,t))}}function JI(n,e="asc"){const t=e,r=en("orderBy",n);return sc._create(r,t)}class ic extends nc{constructor(e,t,r){super(),this.type=e,this._limit=t,this._limitType=r}static _create(e,t,r){return new ic(e,t,r)}_apply(e){return new Vt(e.firestore,e.converter,di(e._query,this._limit,this._limitType))}}function XI(n){return Lm("limit",n),ic._create("limit",n,"F")}function gl(n,e,t){if(typeof(t=he(t))=="string"){if(t==="")throw new D(C.INVALID_ARGUMENT,"Invalid query. When querying with documentId(), you must provide a valid document ID, but it was an empty string.");if(!bh(e)&&t.indexOf("/")!==-1)throw new D(C.INVALID_ARGUMENT,`Invalid query. When querying a collection by documentId(), you must provide a plain document ID, but '${t}' contains a '/' character.`);const r=e.path.child(X.fromString(t));if(!F.isDocumentKey(r))throw new D(C.INVALID_ARGUMENT,`Invalid query. When querying a collection group by documentId(), the value provided must result in a valid document path, but '${r}' is not because it has an odd number of segments (${r.length}).`);return ku(n,new F(r))}if(t instanceof se)return ku(n,t._key);throw new D(C.INVALID_ARGUMENT,`Invalid query. When querying with documentId(), you must provide a valid string or a DocumentReference, but it was: ${Vi(t)}.`)}function _l(n,e){if(!Array.isArray(n)||n.length===0)throw new D(C.INVALID_ARGUMENT,`Invalid Query. A non-empty array is required for '${e.toString()}' filters.`)}function zd(n,e){const t=function(s,i){for(const a of s)for(const c of a.getFlattenedFilters())if(i.indexOf(c.op)>=0)return c.op;return null}(n.filters,function(s){switch(s){case"!=":return["!=","not-in"];case"array-contains-any":case"in":return["not-in"];case"not-in":return["array-contains-any","in","not-in","!="];default:return[]}}(e.op));if(t!==null)throw t===e.op?new D(C.INVALID_ARGUMENT,`Invalid query. You cannot use more than one '${e.op.toString()}' filter.`):new D(C.INVALID_ARGUMENT,`Invalid query. You cannot use '${e.op.toString()}' filters with '${t.toString()}' filters.`)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function yl(n){return function(t,r){if(typeof t!="object"||t===null)return!1;const s=t;for(const i of r)if(i in s&&typeof s[i]=="function")return!0;return!1}(n,["next","error","complete"])}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ZI(n){n=He(n,se);const e=He(n.firestore,an),t=Ji(e);return yw(t,n._key).then(r=>Wd(e,n,r))}function ev(n){n=He(n,Vt);const e=He(n.firestore,an),t=Ji(e),r=new ec(e);return jd(n._query),Ew(t,n._query).then(s=>new vn(e,r,n,s))}function tv(n,e,t){n=He(n,se);const r=He(n.firestore,an),s=vw(n.converter,e,t),i=Ia(r);return oc(r,[T_(i,"setDoc",n._key,s,n.converter!==null,t).toMutation(n._key,Ze.none())])}function nv(n,e,t,...r){n=He(n,se);const s=He(n.firestore,an),i=Ia(s);let a;return a=typeof(e=he(e))=="string"||e instanceof Mi?v_(i,"updateDoc",n._key,e,t,r):I_(i,"updateDoc",n._key,e),oc(s,[a.toMutation(n._key,Ze.exists(!0))])}function rv(n){return oc(He(n.firestore,an),[new ga(n._key,Ze.none())])}function sv(n,...e){var d,p,m;n=he(n);let t={includeMetadataChanges:!1,source:"default"},r=0;typeof e[r]!="object"||yl(e[r])||(t=e[r++]);const s={includeMetadataChanges:t.includeMetadataChanges,source:t.source};if(yl(e[r])){const w=e[r];e[r]=(d=w.next)==null?void 0:d.bind(w),e[r+1]=(p=w.error)==null?void 0:p.bind(w),e[r+2]=(m=w.complete)==null?void 0:m.bind(w)}let i,a,c;if(n instanceof se)a=He(n.firestore,an),c=xi(n._key.path),i={next:w=>{e[r]&&e[r](Wd(a,n,w))},error:e[r+1],complete:e[r+2]};else{const w=He(n,Vt);a=He(w.firestore,an),c=w._query;const V=new ec(a);i={next:N=>{e[r]&&e[r](new vn(a,V,w,N))},error:e[r+1],complete:e[r+2]},jd(n._query)}const l=Ji(a);return _w(l,c,s,i)}function oc(n,e){const t=Ji(n);return ww(t,e)}function Wd(n,e,t){const r=t.docs.get(e._key),s=new ec(n);return new In(n,s,e._key,r,new Dr(t.hasPendingWrites,t.fromCache),e.converter)}const El="@firebase/firestore",wl="4.17.2";(function(e,t=!0){Cm(Zn),Wn(new Pn("firestore",(r,{instanceIdentifier:s,options:i})=>{const a=r.getProvider("app").getImmediate(),c=new an(new Gg(r.getProvider("auth-internal")),new Yg(a,r.getProvider("app-check-internal")),Fm(a,s),a);return i={useFetchStreams:t,...i},c._setSettings(i),c},"PUBLIC").setMultipleInstances(!0)),zt(El,wl,e),zt(El,wl,"esm2020")})();var Pw="firebase",Sw="12.19.0";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */zt(Pw,Sw,"app");function Hd(){return{"dependent-sdk-initialized-before-auth":"Another Firebase SDK was initialized and is trying to use Auth before Auth is initialized. Please be sure to call `initializeAuth` or `getAuth` before starting any other Firebase SDK."}}const Vw=Hd,Gd=new cs("auth","Firebase",Hd());/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const wi=new ca("@firebase/auth");function Zs(n,...e){wi.logLevel<=Q.WARN&&wi.warn(`Auth (${Zn}): ${n}`,...e)}function ei(n,...e){wi.logLevel<=Q.ERROR&&wi.error(`Auth (${Zn}): ${n}`,...e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Je(n,...e){throw ac(n,...e)}function et(n,...e){return ac(n,...e)}function Zi(n,e,t){const r={...Vw(),[e]:t};return new cs("auth","Firebase",r).create(e,{appName:n.name})}function It(n){return Zi(n,"operation-not-supported-in-this-environment","Operations that alter the current user are not supported in conjunction with FirebaseServerApp")}function Cw(n,e,t){const r=t;if(!(e instanceof r))throw r.name!==e.constructor.name&&Je(n,"argument-error"),Zi(n,"argument-error",`Type of ${e.constructor.name} does not match expected instance.Did you pass a reference from a different Auth SDK?`)}function ac(n,...e){if(typeof n!="string"){const t=e[0],r=[...e.slice(1)];return r[0]&&(r[0].appName=n.name),n._errorFactory.create(t,...r)}return Gd.create(n,...e)}function $(n,e,...t){if(!n)throw ac(e,...t)}function yt(n){const e="INTERNAL ASSERTION FAILED: "+n;throw ei(e),new Error(e)}function Pt(n,e){n||yt(e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ia(){var n;return typeof self<"u"&&((n=self.location)==null?void 0:n.href)||""}function bw(){return Tl()==="http:"||Tl()==="https:"}function Tl(){var n;return typeof self<"u"&&((n=self.location)==null?void 0:n.protocol)||null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Nw(){return typeof navigator<"u"&&navigator&&"onLine"in navigator&&typeof navigator.onLine=="boolean"&&(bw()||Ep()||"connection"in navigator)?navigator.onLine:!0}function kw(){if(typeof navigator>"u")return null;const n=navigator;return n.languages&&n.languages[0]||n.language||null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ws{constructor(e,t){this.shortDelay=e,this.longDelay=t,Pt(t>e,"Short delay should be less than long delay!"),this.isMobile=gp()||wp()}get(){return Nw()?this.isMobile?this.longDelay:this.shortDelay:Math.min(5e3,this.shortDelay)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function cc(n,e){Pt(n.emulator,"Emulator should always be set here");const{url:t}=n.emulator;return e?`${t}${e.startsWith("/")?e.slice(1):e}`:t}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Kd{static initialize(e,t,r){this.fetchImpl=e,t&&(this.headersImpl=t),r&&(this.responseImpl=r)}static fetch(){if(this.fetchImpl)return this.fetchImpl;if(typeof self<"u"&&"fetch"in self)return self.fetch;if(typeof globalThis<"u"&&globalThis.fetch)return globalThis.fetch;if(typeof fetch<"u")return fetch;yt("Could not find fetch implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static headers(){if(this.headersImpl)return this.headersImpl;if(typeof self<"u"&&"Headers"in self)return self.Headers;if(typeof globalThis<"u"&&globalThis.Headers)return globalThis.Headers;if(typeof Headers<"u")return Headers;yt("Could not find Headers implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static response(){if(this.responseImpl)return this.responseImpl;if(typeof self<"u"&&"Response"in self)return self.Response;if(typeof globalThis<"u"&&globalThis.Response)return globalThis.Response;if(typeof Response<"u")return Response;yt("Could not find Response implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Dw={CREDENTIAL_MISMATCH:"custom-token-mismatch",MISSING_CUSTOM_TOKEN:"internal-error",INVALID_IDENTIFIER:"invalid-email",MISSING_CONTINUE_URI:"internal-error",INVALID_PASSWORD:"wrong-password",MISSING_PASSWORD:"missing-password",INVALID_LOGIN_CREDENTIALS:"invalid-credential",EMAIL_EXISTS:"email-already-in-use",PASSWORD_LOGIN_DISABLED:"operation-not-allowed",INVALID_IDP_RESPONSE:"invalid-credential",INVALID_PENDING_TOKEN:"invalid-credential",FEDERATED_USER_ID_ALREADY_LINKED:"credential-already-in-use",MISSING_REQ_TYPE:"internal-error",EMAIL_NOT_FOUND:"user-not-found",RESET_PASSWORD_EXCEED_LIMIT:"too-many-requests",EXPIRED_OOB_CODE:"expired-action-code",INVALID_OOB_CODE:"invalid-action-code",MISSING_OOB_CODE:"internal-error",CREDENTIAL_TOO_OLD_LOGIN_AGAIN:"requires-recent-login",INVALID_ID_TOKEN:"invalid-user-token",TOKEN_EXPIRED:"user-token-expired",USER_NOT_FOUND:"user-token-expired",TOO_MANY_ATTEMPTS_TRY_LATER:"too-many-requests",PASSWORD_DOES_NOT_MEET_REQUIREMENTS:"password-does-not-meet-requirements",INVALID_CODE:"invalid-verification-code",INVALID_SESSION_INFO:"invalid-verification-id",INVALID_TEMPORARY_PROOF:"invalid-credential",MISSING_SESSION_INFO:"missing-verification-id",SESSION_EXPIRED:"code-expired",MISSING_ANDROID_PACKAGE_NAME:"missing-android-pkg-name",UNAUTHORIZED_DOMAIN:"unauthorized-continue-uri",INVALID_OAUTH_CLIENT_ID:"invalid-oauth-client-id",ADMIN_ONLY_OPERATION:"admin-restricted-operation",INVALID_MFA_PENDING_CREDENTIAL:"invalid-multi-factor-session",MFA_ENROLLMENT_NOT_FOUND:"multi-factor-info-not-found",MISSING_MFA_ENROLLMENT_ID:"missing-multi-factor-info",MISSING_MFA_PENDING_CREDENTIAL:"missing-multi-factor-session",SECOND_FACTOR_EXISTS:"second-factor-already-in-use",SECOND_FACTOR_LIMIT_EXCEEDED:"maximum-second-factor-count-exceeded",BLOCKING_FUNCTION_ERROR_RESPONSE:"internal-error",RECAPTCHA_NOT_ENABLED:"recaptcha-not-enabled",MISSING_RECAPTCHA_TOKEN:"missing-recaptcha-token",INVALID_RECAPTCHA_TOKEN:"invalid-recaptcha-token",INVALID_RECAPTCHA_ACTION:"invalid-recaptcha-action",MISSING_CLIENT_TYPE:"missing-client-type",MISSING_RECAPTCHA_VERSION:"missing-recaptcha-version",INVALID_RECAPTCHA_VERSION:"invalid-recaptcha-version",INVALID_REQ_TYPE:"invalid-req-type"};/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const xw=["/v1/accounts:signInWithCustomToken","/v1/accounts:signInWithEmailLink","/v1/accounts:signInWithIdp","/v1/accounts:signInWithPassword","/v1/accounts:signInWithPhoneNumber","/v1/token"],Ow=new ws(3e4,6e4);function Ct(n,e){return n.tenantId&&!e.tenantId?{...e,tenantId:n.tenantId}:e}async function pt(n,e,t,r,s={}){return Qd(n,s,async()=>{let i={},a={};r&&(e==="GET"?a=r:i={body:JSON.stringify(r)});const c=us({...a,key:n.config.apiKey}).slice(1),l=await n._getAdditionalHeaders();l["Content-Type"]="application/json",n.languageCode&&(l["X-Firebase-Locale"]=n.languageCode);const d={method:e,headers:l,...i};return yp()||(d.referrerPolicy="strict-origin-when-cross-origin"),n.emulatorConfig&&ls(n.emulatorConfig.host)&&(d.credentials="include"),Kd.fetch()(await Yd(n,n.config.apiHost,t,c),d)})}async function Qd(n,e,t){n._canInitEmulator=!1;const r={...Dw,...e};try{const s=new Mw(n),i=await Promise.race([t(),s.promise]);s.clearNetworkTimeout();const a=await i.json();if("needConfirmation"in a)throw Ws(n,"account-exists-with-different-credential",a);if(i.ok&&!("errorMessage"in a))return a;{const c=i.ok?a.errorMessage:a.error.message,[l,d]=c.split(" : ");if(l==="FEDERATED_USER_ID_ALREADY_LINKED")throw Ws(n,"credential-already-in-use",a);if(l==="EMAIL_EXISTS")throw Ws(n,"email-already-in-use",a);if(l==="USER_DISABLED")throw Ws(n,"user-disabled",a);const p=r[l]||l.toLowerCase().replace(/[_\s]+/g,"-");if(d)throw Zi(n,p,d);Je(n,p)}}catch(s){if(s instanceof St)throw s;Je(n,"network-request-failed",{message:String(s)})}}async function Ts(n,e,t,r,s={}){const i=await pt(n,e,t,r,s);return"mfaPendingCredential"in i&&Je(n,"multi-factor-auth-required",{_serverResponse:i}),i}async function Yd(n,e,t,r){const s=`${e}${t}?${r}`,i=n,a=i.config.emulator?cc(n.config,s):`${n.config.apiScheme}://${s}`;return xw.includes(t)&&(await i._persistenceManagerAvailable,i._getPersistenceType()==="COOKIE")?i._getPersistence()._getFinalTarget(a).toString():a}function Lw(n){switch(n){case"ENFORCE":return"ENFORCE";case"AUDIT":return"AUDIT";case"OFF":return"OFF";default:return"ENFORCEMENT_STATE_UNSPECIFIED"}}class Mw{clearNetworkTimeout(){clearTimeout(this.timer)}constructor(e){this.auth=e,this.timer=null,this.promise=new Promise((t,r)=>{this.timer=setTimeout(()=>r(et(this.auth,"network-request-failed")),Ow.get())})}}function Ws(n,e,t){const r={appName:n.name};t.email&&(r.email=t.email),t.phoneNumber&&(r.phoneNumber=t.phoneNumber);const s=et(n,e,r);return s.customData._tokenResponse=t,s}function Il(n){return n!==void 0&&n.enterprise!==void 0}class Uw{constructor(e){if(this.siteKey="",this.recaptchaEnforcementState=[],e.recaptchaKey===void 0)throw new Error("recaptchaKey undefined");this.siteKey=e.recaptchaKey.split("/")[3],this.recaptchaEnforcementState=e.recaptchaEnforcementState}getProviderEnforcementState(e){if(!this.recaptchaEnforcementState||this.recaptchaEnforcementState.length===0)return null;for(const t of this.recaptchaEnforcementState)if(t.provider&&t.provider===e)return Lw(t.enforcementState);return null}isProviderEnabled(e){return this.getProviderEnforcementState(e)==="ENFORCE"||this.getProviderEnforcementState(e)==="AUDIT"}isAnyProviderEnabled(){return this.isProviderEnabled("EMAIL_PASSWORD_PROVIDER")||this.isProviderEnabled("PHONE_PROVIDER")}}async function Fw(n,e){return pt(n,"GET","/v2/recaptchaConfig",Ct(n,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Bw(n,e){return pt(n,"POST","/v1/accounts:delete",e)}async function Ti(n,e){return pt(n,"POST","/v1/accounts:lookup",e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function $r(n){if(n)try{const e=new Date(Number(n));if(!isNaN(e.getTime()))return e.toUTCString()}catch{}}async function qw(n,e=!1){const t=he(n),r=await t.getIdToken(e),s=uc(r);$(s&&s.exp&&s.auth_time&&s.iat,t.auth,"internal-error");const i=typeof s.firebase=="object"?s.firebase:void 0,a=i==null?void 0:i.sign_in_provider;return{claims:s,token:r,authTime:$r(Mo(s.auth_time)),issuedAtTime:$r(Mo(s.iat)),expirationTime:$r(Mo(s.exp)),signInProvider:a||null,signInSecondFactor:(i==null?void 0:i.sign_in_second_factor)||null}}function Mo(n){return Number(n)*1e3}function uc(n){const[e,t,r]=n.split(".");if(e===void 0||t===void 0||r===void 0)return ei("JWT malformed, contained fewer than 3 sections"),null;try{const s=jl(t);return s?JSON.parse(s):(ei("Failed to decode base64 JWT payload"),null)}catch(s){return ei("Caught error parsing JWT payload as JSON",s==null?void 0:s.toString()),null}}function vl(n){const e=uc(n);return $(e,"internal-error"),$(typeof e.exp<"u","internal-error"),$(typeof e.iat<"u","internal-error"),Number(e.exp)-Number(e.iat)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Xn(n,e,t=!1){if(t)return e;try{return await e}catch(r){throw r instanceof St&&$w(r)&&n.auth.currentUser===n&&await n.auth.signOut(),r}}function $w({code:n}){return n==="auth/user-disabled"||n==="auth/user-token-expired"}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class jw{constructor(e){this.user=e,this.isRunning=!1,this.timerId=null,this.errorBackoff=3e4}_start(){this.isRunning||(this.isRunning=!0,this.schedule())}_stop(){this.isRunning&&(this.isRunning=!1,this.timerId!==null&&clearTimeout(this.timerId))}getInterval(e){if(e){const t=this.errorBackoff;return this.errorBackoff=Math.min(this.errorBackoff*2,96e4),t}else{this.errorBackoff=3e4;const r=(this.user.stsTokenManager.expirationTime??0)-Date.now()-3e5;return Math.max(0,r)}}schedule(e=!1){if(!this.isRunning)return;const t=this.getInterval(e);this.timerId=setTimeout(async()=>{await this.iteration()},t)}async iteration(){try{await this.user.getIdToken(!0)}catch(e){(e==null?void 0:e.code)==="auth/network-request-failed"&&this.schedule(!0);return}this.schedule()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class oa{constructor(e,t){this.createdAt=e,this.lastLoginAt=t,this._initializeTime()}_initializeTime(){this.lastSignInTime=$r(this.lastLoginAt),this.creationTime=$r(this.createdAt)}_copy(e){this.createdAt=e.createdAt,this.lastLoginAt=e.lastLoginAt,this._initializeTime()}toJSON(){return{createdAt:this.createdAt,lastLoginAt:this.lastLoginAt}}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Ii(n){var m;const e=n.auth,t=await n.getIdToken(),r=await Xn(n,Ti(e,{idToken:t}));$(r==null?void 0:r.users.length,e,"internal-error");const s=r.users[0];n._notifyReloadListener(s);const i=(m=s.providerUserInfo)!=null&&m.length?Jd(s.providerUserInfo):[],a=Ww(n.providerData,i),c=n.isAnonymous,l=!(n.email&&s.passwordHash)&&!(a!=null&&a.length),d=c?l:!1,p={uid:s.localId,displayName:s.displayName||null,photoURL:s.photoUrl||null,email:s.email||null,emailVerified:s.emailVerified||!1,phoneNumber:s.phoneNumber||null,tenantId:s.tenantId||null,providerData:a,metadata:new oa(s.createdAt,s.lastLoginAt),isAnonymous:d};Object.assign(n,p)}async function zw(n){const e=he(n);await Ii(e),await e.auth._persistUserIfCurrent(e),e.auth._notifyListenersIfCurrent(e)}function Ww(n,e){return[...n.filter(r=>!e.some(s=>s.providerId===r.providerId)),...e]}function Jd(n){return n.map(({providerId:e,...t})=>({providerId:e,uid:t.rawId||"",displayName:t.displayName||null,email:t.email||null,phoneNumber:t.phoneNumber||null,photoURL:t.photoUrl||null}))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Hw(n,e){const t=await Qd(n,{},async()=>{const r=us({grant_type:"refresh_token",refresh_token:e}).slice(1),{tokenApiHost:s,apiKey:i}=n.config,a=await Yd(n,s,"/v1/token",`key=${i}`),c=await n._getAdditionalHeaders();c["Content-Type"]="application/x-www-form-urlencoded";const l={method:"POST",headers:c,body:r};return n.emulatorConfig&&ls(n.emulatorConfig.host)&&(l.credentials="include"),Kd.fetch()(a,l)});return{accessToken:t.access_token,expiresIn:t.expires_in,refreshToken:t.refresh_token}}async function Gw(n,e){return pt(n,"POST","/v2/accounts:revokeToken",Ct(n,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class jn{constructor(){this.refreshToken=null,this.accessToken=null,this.expirationTime=null}get isExpired(){return!this.expirationTime||Date.now()>this.expirationTime-3e4}updateFromServerResponse(e){$(e.idToken,"internal-error"),$(typeof e.idToken<"u","internal-error"),$(typeof e.refreshToken<"u","internal-error");const t="expiresIn"in e&&typeof e.expiresIn<"u"?Number(e.expiresIn):vl(e.idToken);this.updateTokensAndExpiration(e.idToken,e.refreshToken,t)}updateFromIdToken(e){$(e.length!==0,"internal-error");const t=vl(e);this.updateTokensAndExpiration(e,null,t)}async getToken(e,t=!1){return!t&&this.accessToken&&!this.isExpired?this.accessToken:($(this.refreshToken,e,"user-token-expired"),this.refreshToken?(await this.refresh(e,this.refreshToken),this.accessToken):null)}clearRefreshToken(){this.refreshToken=null}async refresh(e,t){const{accessToken:r,refreshToken:s,expiresIn:i}=await Hw(e,t);this.updateTokensAndExpiration(r,s,Number(i))}updateTokensAndExpiration(e,t,r){this.refreshToken=t||null,this.accessToken=e||null,this.expirationTime=Date.now()+r*1e3}static fromJSON(e,t){const{refreshToken:r,accessToken:s,expirationTime:i}=t,a=new jn;return r&&($(typeof r=="string","internal-error",{appName:e}),a.refreshToken=r),s&&($(typeof s=="string","internal-error",{appName:e}),a.accessToken=s),i&&($(typeof i=="number","internal-error",{appName:e}),a.expirationTime=i),a}toJSON(){return{refreshToken:this.refreshToken,accessToken:this.accessToken,expirationTime:this.expirationTime}}_assign(e){this.accessToken=e.accessToken,this.refreshToken=e.refreshToken,this.expirationTime=e.expirationTime}_clone(){return Object.assign(new jn,this.toJSON())}_performRefresh(){return yt("not implemented")}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Mt(n,e){$(typeof n=="string"||typeof n>"u","internal-error",{appName:e})}class Xe{constructor({uid:e,auth:t,stsTokenManager:r,...s}){this.providerId="firebase",this.proactiveRefresh=new jw(this),this.reloadUserInfo=null,this.reloadListener=null,this.uid=e,this.auth=t,this.stsTokenManager=r,this.accessToken=r.accessToken,this.displayName=s.displayName||null,this.email=s.email||null,this.emailVerified=s.emailVerified||!1,this.phoneNumber=s.phoneNumber||null,this.photoURL=s.photoURL||null,this.isAnonymous=s.isAnonymous||!1,this.tenantId=s.tenantId||null,this.providerData=s.providerData?[...s.providerData]:[],this.metadata=new oa(s.createdAt||void 0,s.lastLoginAt||void 0)}async getIdToken(e){const t=await Xn(this,this.stsTokenManager.getToken(this.auth,e));return $(t,this.auth,"internal-error"),this.accessToken!==t&&(this.accessToken=t,await this.auth._persistUserIfCurrent(this),this.auth._notifyListenersIfCurrent(this)),t}getIdTokenResult(e){return qw(this,e)}reload(){return zw(this)}_assign(e){this!==e&&($(this.uid===e.uid,this.auth,"internal-error"),this.displayName=e.displayName,this.photoURL=e.photoURL,this.email=e.email,this.emailVerified=e.emailVerified,this.phoneNumber=e.phoneNumber,this.isAnonymous=e.isAnonymous,this.tenantId=e.tenantId,this.providerData=e.providerData.map(t=>({...t})),this.metadata._copy(e.metadata),this.stsTokenManager._assign(e.stsTokenManager))}_clone(e){const t=new Xe({...this,auth:e,stsTokenManager:this.stsTokenManager._clone()});return t.metadata._copy(this.metadata),t}_onReload(e){$(!this.reloadListener,this.auth,"internal-error"),this.reloadListener=e,this.reloadUserInfo&&(this._notifyReloadListener(this.reloadUserInfo),this.reloadUserInfo=null)}_notifyReloadListener(e){this.reloadListener?this.reloadListener(e):this.reloadUserInfo=e}_startProactiveRefresh(){this.proactiveRefresh._start()}_stopProactiveRefresh(){this.proactiveRefresh._stop()}async _updateTokensIfNecessary(e,t=!1){let r=!1;e.idToken&&e.idToken!==this.stsTokenManager.accessToken&&(this.stsTokenManager.updateFromServerResponse(e),r=!0),t&&await Ii(this),await this.auth._persistUserIfCurrent(this),r&&this.auth._notifyListenersIfCurrent(this)}async delete(){if($e(this.auth.app))return Promise.reject(It(this.auth));const e=await this.getIdToken();return await Xn(this,Bw(this.auth,{idToken:e})),this.stsTokenManager.clearRefreshToken(),this.auth.signOut()}toJSON(){return{uid:this.uid,email:this.email||void 0,emailVerified:this.emailVerified,displayName:this.displayName||void 0,isAnonymous:this.isAnonymous,photoURL:this.photoURL||void 0,phoneNumber:this.phoneNumber||void 0,tenantId:this.tenantId||void 0,providerData:this.providerData.map(e=>({...e})),stsTokenManager:this.stsTokenManager.toJSON(),_redirectEventId:this._redirectEventId,...this.metadata.toJSON(),apiKey:this.auth.config.apiKey,appName:this.auth.name}}get refreshToken(){return this.stsTokenManager.refreshToken||""}static _fromJSON(e,t){const r=t.displayName??void 0,s=t.email??void 0,i=t.phoneNumber??void 0,a=t.photoURL??void 0,c=t.tenantId??void 0,l=t._redirectEventId??void 0,d=t.createdAt??void 0,p=t.lastLoginAt??void 0,{uid:m,emailVerified:w,isAnonymous:V,providerData:N,stsTokenManager:M}=t;$(m&&M,e,"internal-error");const L=jn.fromJSON(this.name,M);$(typeof m=="string",e,"internal-error"),Mt(r,e.name),Mt(s,e.name),$(typeof w=="boolean",e,"internal-error"),$(typeof V=="boolean",e,"internal-error"),Mt(i,e.name),Mt(a,e.name),Mt(c,e.name),Mt(l,e.name),Mt(d,e.name),Mt(p,e.name);const H=new Xe({uid:m,auth:e,email:s,emailVerified:w,displayName:r,isAnonymous:V,photoURL:a,phoneNumber:i,tenantId:c,stsTokenManager:L,createdAt:d,lastLoginAt:p});return N&&Array.isArray(N)&&(H.providerData=N.map(J=>({...J}))),l&&(H._redirectEventId=l),H}static async _fromIdTokenResponse(e,t,r=!1){const s=new jn;s.updateFromServerResponse(t);const i=new Xe({uid:t.localId,auth:e,stsTokenManager:s,isAnonymous:r});return await Ii(i),i}static async _fromGetAccountInfoResponse(e,t,r){const s=t.users[0];$(s.localId!==void 0,"internal-error");const i=s.providerUserInfo!==void 0?Jd(s.providerUserInfo):[],a=!(s.email&&s.passwordHash)&&!(i!=null&&i.length),c=new jn;c.updateFromIdToken(r);const l=new Xe({uid:s.localId,auth:e,stsTokenManager:c,isAnonymous:a}),d={uid:s.localId,displayName:s.displayName||null,photoURL:s.photoUrl||null,email:s.email||null,emailVerified:s.emailVerified||!1,phoneNumber:s.phoneNumber||null,tenantId:s.tenantId||null,providerData:i,metadata:new oa(s.createdAt,s.lastLoginAt),isAnonymous:!(s.email&&s.passwordHash)&&!(i!=null&&i.length)};return Object.assign(l,d),l}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Al=new Map;function Et(n){Pt(n instanceof Function,"Expected a class definition");let e=Al.get(n);return e?(Pt(e instanceof n,"Instance stored in cache mismatched with class"),e):(e=new n,Al.set(n,e),e)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Xd{constructor(){this.type="NONE",this.storage={}}async _isAvailable(){return!0}async _set(e,t){this.storage[e]=t}async _get(e){const t=this.storage[e];return t===void 0?null:t}async _remove(e){delete this.storage[e]}_addListener(e,t){}_removeListener(e,t){}}Xd.type="NONE";const Rl=Xd;/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ti(n,e,t){return`firebase:${n}:${e}:${t}`}class An{constructor(e,t,r){this.persistence=e,this.auth=t,this.userKey=r;const{config:s,name:i}=this.auth;this.fullUserKey=ti(this.userKey,s.apiKey,i),this.fullPersistenceKey=ti("persistence",s.apiKey,i),this.boundEventHandler=t._onStorageEvent.bind(t);try{this.persistence._addListener(this.fullUserKey,this.boundEventHandler)}catch{}}setCurrentUser(e){return this.persistence._set(this.fullUserKey,e.toJSON())}async getCurrentUser(){const e=await this.persistence._get(this.fullUserKey);if(!e)return null;if(typeof e=="string"){const t=await Ti(this.auth,{idToken:e}).catch(()=>{});return t?Xe._fromGetAccountInfoResponse(this.auth,t,e):null}return Xe._fromJSON(this.auth,e)}removeCurrentUser(){return this.persistence._remove(this.fullUserKey)}savePersistenceForRedirect(){return this.persistence._set(this.fullPersistenceKey,this.persistence.type)}async setPersistence(e){if(this.persistence===e)return;const t=await this.getCurrentUser();if(await this.removeCurrentUser(),this.persistence=e,t)return this.setCurrentUser(t)}delete(){try{this.persistence._removeListener(this.fullUserKey,this.boundEventHandler)}catch{}}static async create(e,t,r="authUser"){if(!t.length)return new An(Et(Rl),e,r);const s=(await Promise.all(t.map(async d=>{try{if(await d._isAvailable())return d}catch{return}}))).filter(d=>d);let i=s[0]||Et(Rl);const a=ti(r,e.config.apiKey,e.name);let c=null;for(const d of t)try{const p=await d._get(a);if(p){let m;if(typeof p=="string"){const w=await Ti(e,{idToken:p}).catch(()=>{});if(!w)break;m=await Xe._fromGetAccountInfoResponse(e,w,p)}else m=Xe._fromJSON(e,p);d!==i&&(c=m),i=d;break}}catch{}const l=s.filter(d=>d._shouldAllowMigration);return!i._shouldAllowMigration||!l.length?new An(i,e,r):(i=l[0],c&&await i._set(a,c.toJSON()),await Promise.all(t.map(async d=>{if(d!==i)try{await d._remove(a)}catch{}})),new An(i,e,r))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Pl(n){const e=n.toLowerCase();if(e.includes("opera/")||e.includes("opr/")||e.includes("opios/"))return"Opera";if(nf(e))return"IEMobile";if(e.includes("msie")||e.includes("trident/"))return"IE";if(e.includes("edge/"))return"Edge";if(Zd(e))return"Firefox";if(e.includes("silk/"))return"Silk";if(sf(e))return"Blackberry";if(of(e))return"Webos";if(ef(e))return"Safari";if((e.includes("chrome/")||tf(e))&&!e.includes("edge/"))return"Chrome";if(rf(e))return"Android";{const t=/([a-zA-Z\d\.]+)\/[a-zA-Z\d\.]*$/,r=n.match(t);if((r==null?void 0:r.length)===2)return r[1]}return"Other"}function Zd(n=Se()){return/firefox\//i.test(n)}function ef(n=Se()){const e=n.toLowerCase();return e.includes("safari/")&&!e.includes("chrome/")&&!e.includes("crios/")&&!e.includes("android")}function tf(n=Se()){return/crios\//i.test(n)}function nf(n=Se()){return/iemobile/i.test(n)}function rf(n=Se()){return/android/i.test(n)}function sf(n=Se()){return/blackberry/i.test(n)}function of(n=Se()){return/webos/i.test(n)}function lc(n=Se()){return/iphone|ipad|ipod/i.test(n)||/macintosh/i.test(n)&&/mobile/i.test(n)}function Kw(n=Se()){var e;return lc(n)&&!!((e=window.navigator)!=null&&e.standalone)}function Qw(){return Tp()&&document.documentMode===10}function af(n=Se()){return lc(n)||rf(n)||of(n)||sf(n)||/windows phone/i.test(n)||nf(n)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function cf(n,e=[]){let t;switch(n){case"Browser":t=Pl(Se());break;case"Worker":t=`${Pl(Se())}-${n}`;break;default:t=n}const r=e.length?e.join(","):"FirebaseCore-web";return`${t}/JsCore/${Zn}/${r}`}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Yw{constructor(e){this.auth=e,this.queue=[]}pushCallback(e,t){const r=i=>new Promise((a,c)=>{try{const l=e(i);a(l)}catch(l){c(l)}});r.onAbort=t,this.queue.push(r);const s=this.queue.length-1;return()=>{this.queue[s]=()=>Promise.resolve()}}async runMiddleware(e){if(this.auth.currentUser===e)return;const t=[];try{for(const r of this.queue)await r(e),r.onAbort&&t.push(r.onAbort)}catch(r){t.reverse();for(const s of t)try{s()}catch{}throw this.auth._errorFactory.create("login-blocked",{originalMessage:r==null?void 0:r.message})}}}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Jw(n,e={}){return pt(n,"GET","/v2/passwordPolicy",Ct(n,e))}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Xw=6;class Zw{constructor(e){var r;const t=e.customStrengthOptions;this.customStrengthOptions={},this.customStrengthOptions.minPasswordLength=t.minPasswordLength??Xw,t.maxPasswordLength&&(this.customStrengthOptions.maxPasswordLength=t.maxPasswordLength),t.containsLowercaseCharacter!==void 0&&(this.customStrengthOptions.containsLowercaseLetter=t.containsLowercaseCharacter),t.containsUppercaseCharacter!==void 0&&(this.customStrengthOptions.containsUppercaseLetter=t.containsUppercaseCharacter),t.containsNumericCharacter!==void 0&&(this.customStrengthOptions.containsNumericCharacter=t.containsNumericCharacter),t.containsNonAlphanumericCharacter!==void 0&&(this.customStrengthOptions.containsNonAlphanumericCharacter=t.containsNonAlphanumericCharacter),this.enforcementState=e.enforcementState,this.enforcementState==="ENFORCEMENT_STATE_UNSPECIFIED"&&(this.enforcementState="OFF"),this.allowedNonAlphanumericCharacters=((r=e.allowedNonAlphanumericCharacters)==null?void 0:r.join(""))??"",this.forceUpgradeOnSignin=e.forceUpgradeOnSignin??!1,this.schemaVersion=e.schemaVersion}validatePassword(e){const t={isValid:!0,passwordPolicy:this};return this.validatePasswordLengthOptions(e,t),this.validatePasswordCharacterOptions(e,t),t.isValid&&(t.isValid=t.meetsMinPasswordLength??!0),t.isValid&&(t.isValid=t.meetsMaxPasswordLength??!0),t.isValid&&(t.isValid=t.containsLowercaseLetter??!0),t.isValid&&(t.isValid=t.containsUppercaseLetter??!0),t.isValid&&(t.isValid=t.containsNumericCharacter??!0),t.isValid&&(t.isValid=t.containsNonAlphanumericCharacter??!0),t}validatePasswordLengthOptions(e,t){const r=this.customStrengthOptions.minPasswordLength,s=this.customStrengthOptions.maxPasswordLength;r&&(t.meetsMinPasswordLength=e.length>=r),s&&(t.meetsMaxPasswordLength=e.length<=s)}validatePasswordCharacterOptions(e,t){this.updatePasswordCharacterOptionsStatuses(t,!1,!1,!1,!1);let r;for(let s=0;s<e.length;s++)r=e.charAt(s),this.updatePasswordCharacterOptionsStatuses(t,r>="a"&&r<="z",r>="A"&&r<="Z",r>="0"&&r<="9",this.allowedNonAlphanumericCharacters.includes(r))}updatePasswordCharacterOptionsStatuses(e,t,r,s,i){this.customStrengthOptions.containsLowercaseLetter&&(e.containsLowercaseLetter||(e.containsLowercaseLetter=t)),this.customStrengthOptions.containsUppercaseLetter&&(e.containsUppercaseLetter||(e.containsUppercaseLetter=r)),this.customStrengthOptions.containsNumericCharacter&&(e.containsNumericCharacter||(e.containsNumericCharacter=s)),this.customStrengthOptions.containsNonAlphanumericCharacter&&(e.containsNonAlphanumericCharacter||(e.containsNonAlphanumericCharacter=i))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class eT{constructor(e,t,r,s){this.app=e,this.heartbeatServiceProvider=t,this.appCheckServiceProvider=r,this.config=s,this.currentUser=null,this.emulatorConfig=null,this.operations=Promise.resolve(),this.authStateSubscription=new Sl(this),this.idTokenSubscription=new Sl(this),this.beforeStateQueue=new Yw(this),this.redirectUser=null,this.isProactiveRefreshEnabled=!1,this.EXPECTED_PASSWORD_POLICY_SCHEMA_VERSION=1,this._canInitEmulator=!0,this._isInitialized=!1,this._deleted=!1,this._initializationPromise=null,this._popupRedirectResolver=null,this._errorFactory=Gd,this._agentRecaptchaConfig=null,this._tenantRecaptchaConfigs={},this._projectPasswordPolicy=null,this._tenantPasswordPolicies={},this._resolvePersistenceManagerAvailable=void 0,this.lastNotifiedUid=void 0,this.languageCode=null,this.tenantId=null,this.settings={appVerificationDisabledForTesting:!1},this.frameworks=[],this.name=e.name,this.clientVersion=s.sdkClientVersion,this._persistenceManagerAvailable=new Promise(i=>this._resolvePersistenceManagerAvailable=i)}_initializeWithPersistence(e,t){return t&&(this._popupRedirectResolver=Et(t)),this._initializationPromise=this.queue(async()=>{var r,s,i;if(!this._deleted){try{this.persistenceManager=await An.create(this,e)}catch(a){Zs(`Failed to initialize persistence: ${a}`),this.persistenceManager=await An.create(this,[])}finally{(r=this._resolvePersistenceManagerAvailable)==null||r.call(this)}if(!this._deleted){if((s=this._popupRedirectResolver)!=null&&s._shouldInitProactively)try{await this._popupRedirectResolver._initialize(this)}catch{}try{await this.initializeCurrentUser(t)}catch(a){Zs(`Failed to initialize current user: ${a}`),await this.directlySetCurrentUser(null).catch(()=>{})}this.lastNotifiedUid=((i=this.currentUser)==null?void 0:i.uid)||null,!this._deleted&&(this._isInitialized=!0)}}}),this._initializationPromise}async _onStorageEvent(){if(this._deleted)return;const e=await this.assertedPersistence.getCurrentUser();if(!(!this.currentUser&&!e)){if(this.currentUser&&e&&this.currentUser.uid===e.uid){this._currentUser._assign(e),await this.currentUser.getIdToken();return}await this._updateCurrentUser(e,!0)}}async initializeCurrentUserFromIdToken(e){try{const t=await Ti(this,{idToken:e}),r=await Xe._fromGetAccountInfoResponse(this,t,e);await this.directlySetCurrentUser(r)}catch(t){console.warn("FirebaseServerApp could not login user with provided authIdToken: ",t),await this.directlySetCurrentUser(null)}}async initializeCurrentUser(e){var i;if($e(this.app)){const a=this.app.settings.authIdToken;return a?new Promise(c=>{setTimeout(()=>this.initializeCurrentUserFromIdToken(a).then(c,c))}):this.directlySetCurrentUser(null)}const t=await this.assertedPersistence.getCurrentUser();let r=t,s=!1;if(e&&this.config.authDomain){await this.getOrInitRedirectPersistenceManager();const a=(i=this.redirectUser)==null?void 0:i._redirectEventId,c=r==null?void 0:r._redirectEventId,l=await this.tryRedirectSignIn(e);(!a||a===c)&&(l!=null&&l.user)&&(r=l.user,s=!0)}if(!r)return this.directlySetCurrentUser(null);if(!r._redirectEventId){if(s)try{await this.beforeStateQueue.runMiddleware(r)}catch(a){r=t,this._popupRedirectResolver._overrideRedirectResult(this,()=>Promise.reject(a))}return r?this.reloadAndSetCurrentUserOrClear(r):this.directlySetCurrentUser(null)}return $(this._popupRedirectResolver,this,"argument-error"),await this.getOrInitRedirectPersistenceManager(),this.redirectUser&&this.redirectUser._redirectEventId===r._redirectEventId?this.directlySetCurrentUser(r):this.reloadAndSetCurrentUserOrClear(r)}async tryRedirectSignIn(e){let t=null;try{t=await this._popupRedirectResolver._completeRedirectFn(this,e,!0)}catch{await this._setRedirectUser(null)}return t}async reloadAndSetCurrentUserOrClear(e){try{await Ii(e)}catch(t){if((t==null?void 0:t.code)!=="auth/network-request-failed")return this.directlySetCurrentUser(null)}return this.directlySetCurrentUser(e)}useDeviceLanguage(){this.languageCode=kw()}async _delete(){this._deleted=!0}async updateCurrentUser(e){if($e(this.app))return Promise.reject(It(this));const t=e?he(e):null;return t&&$(t.auth.config.apiKey===this.config.apiKey,this,"invalid-user-token"),this._updateCurrentUser(t&&t._clone(this))}async _updateCurrentUser(e,t=!1){if(!this._deleted)return e&&$(this.tenantId===e.tenantId,this,"tenant-id-mismatch"),t||await this.beforeStateQueue.runMiddleware(e),this.queue(async()=>{await this.directlySetCurrentUser(e),this.notifyAuthListeners()})}async signOut(){return $e(this.app)?Promise.reject(It(this)):(await this.beforeStateQueue.runMiddleware(null),(this.redirectPersistenceManager||this._popupRedirectResolver)&&await this._setRedirectUser(null),this._updateCurrentUser(null,!0))}setPersistence(e){return $e(this.app)?Promise.reject(It(this)):this.queue(async()=>{await this.assertedPersistence.setPersistence(Et(e))})}_getRecaptchaConfig(){return this.tenantId==null?this._agentRecaptchaConfig:this._tenantRecaptchaConfigs[this.tenantId]}async validatePassword(e){this._getPasswordPolicyInternal()||await this._updatePasswordPolicy();const t=this._getPasswordPolicyInternal();return t.schemaVersion!==this.EXPECTED_PASSWORD_POLICY_SCHEMA_VERSION?Promise.reject(this._errorFactory.create("unsupported-password-policy-schema-version",{})):t.validatePassword(e)}_getPasswordPolicyInternal(){return this.tenantId===null?this._projectPasswordPolicy:this._tenantPasswordPolicies[this.tenantId]}async _updatePasswordPolicy(){const e=await Jw(this),t=new Zw(e);this.tenantId===null?this._projectPasswordPolicy=t:this._tenantPasswordPolicies[this.tenantId]=t}_getPersistenceType(){return this.assertedPersistence.persistence.type}_getPersistence(){return this.assertedPersistence.persistence}_updateErrorMap(e){this._errorFactory=new cs("auth","Firebase",e())}onAuthStateChanged(e,t,r){return this.registerStateListener(this.authStateSubscription,e,t,r)}beforeAuthStateChanged(e,t){return this.beforeStateQueue.pushCallback(e,t)}onIdTokenChanged(e,t,r){return this.registerStateListener(this.idTokenSubscription,e,t,r)}authStateReady(){return new Promise((e,t)=>{if(this.currentUser)e();else{const r=this.onAuthStateChanged(()=>{r(),e()},t)}})}async revokeAccessToken(e){if(this.currentUser){const t=await this.currentUser.getIdToken(),r={providerId:"apple.com",tokenType:"ACCESS_TOKEN",token:e,idToken:t};this.tenantId!=null&&(r.tenantId=this.tenantId),await Gw(this,r)}}toJSON(){var e;return{apiKey:this.config.apiKey,authDomain:this.config.authDomain,appName:this.name,currentUser:(e=this._currentUser)==null?void 0:e.toJSON()}}async _setRedirectUser(e,t){const r=await this.getOrInitRedirectPersistenceManager(t);return e===null?r.removeCurrentUser():r.setCurrentUser(e)}async getOrInitRedirectPersistenceManager(e){if(!this.redirectPersistenceManager){const t=e&&Et(e)||this._popupRedirectResolver;$(t,this,"argument-error"),this.redirectPersistenceManager=await An.create(this,[Et(t._redirectPersistence)],"redirectUser"),this.redirectUser=await this.redirectPersistenceManager.getCurrentUser()}return this.redirectPersistenceManager}async _redirectUserForId(e){var t,r;return this._isInitialized&&await this.queue(async()=>{}),((t=this._currentUser)==null?void 0:t._redirectEventId)===e?this._currentUser:((r=this.redirectUser)==null?void 0:r._redirectEventId)===e?this.redirectUser:null}async _persistUserIfCurrent(e){if(e===this.currentUser)return this.queue(async()=>this.directlySetCurrentUser(e))}_notifyListenersIfCurrent(e){e===this.currentUser&&this.notifyAuthListeners()}_key(){return`${this.config.authDomain}:${this.config.apiKey}:${this.name}`}_startProactiveRefresh(){this.isProactiveRefreshEnabled=!0,this.currentUser&&this._currentUser._startProactiveRefresh()}_stopProactiveRefresh(){this.isProactiveRefreshEnabled=!1,this.currentUser&&this._currentUser._stopProactiveRefresh()}get _currentUser(){return this.currentUser}notifyAuthListeners(){var t;if(!this._isInitialized)return;this.idTokenSubscription.next(this.currentUser);const e=((t=this.currentUser)==null?void 0:t.uid)??null;this.lastNotifiedUid!==e&&(this.lastNotifiedUid=e,this.authStateSubscription.next(this.currentUser))}registerStateListener(e,t,r,s){if(this._deleted)return()=>{};const i=typeof t=="function"?t:t.next.bind(t);let a=!1;const c=this._isInitialized?Promise.resolve():this._initializationPromise;if($(c,this,"internal-error"),c.then(()=>{a||i(this.currentUser)}).catch(l=>{if(!a)if(typeof t!="function"&&t.error)t.error(l);else if(r)r(l);else throw l}),typeof t=="function"){const l=e.addObserver(t,r,s);return()=>{a=!0,l()}}else{const l=e.addObserver(t);return()=>{a=!0,l()}}}async directlySetCurrentUser(e){if(this.currentUser&&this.currentUser!==e&&this._currentUser._stopProactiveRefresh(),e&&this.isProactiveRefreshEnabled&&e._startProactiveRefresh(),this.currentUser=e,this.persistenceManager)try{e?await this.persistenceManager.setCurrentUser(e):await this.persistenceManager.removeCurrentUser()}catch(t){const r=(t==null?void 0:t.message)||String(t),s=Zi(this,"internal-error",`An internal AuthError has occurred: ${r}`);throw s.customData={originalError:t},s}}queue(e){return this.operations=this.operations.then(e,e),this.operations}get assertedPersistence(){return $(this.persistenceManager,this,"internal-error"),this.persistenceManager}_logFramework(e){!e||this.frameworks.includes(e)||(this.frameworks.push(e),this.frameworks.sort(),this.clientVersion=cf(this.config.clientPlatform,this._getFrameworks()))}_getFrameworks(){return this.frameworks}async _getAdditionalHeaders(){var s;const e={"X-Client-Version":this.clientVersion};this.app.options.appId&&(e["X-Firebase-gmpid"]=this.app.options.appId);const t=await((s=this.heartbeatServiceProvider.getImmediate({optional:!0}))==null?void 0:s.getHeartbeatsHeader());t&&(e["X-Firebase-Client"]=t);const r=await this._getAppCheckToken();return r&&(e["X-Firebase-AppCheck"]=r),e}async _getAppCheckToken(){var t;if($e(this.app)&&this.app.settings.appCheckToken)return this.app.settings.appCheckToken;const e=await((t=this.appCheckServiceProvider.getImmediate({optional:!0}))==null?void 0:t.getToken());return e!=null&&e.error&&Zs(`Error while retrieving App Check token: ${e.error}`),e==null?void 0:e.token}}function bt(n){return he(n)}class Sl{constructor(e){this.auth=e,this.observer=null,this.addObserver=Vp(t=>this.observer=t)}get next(){return $(this.observer,this.auth,"internal-error"),this.observer.next.bind(this.observer)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let eo={async loadJS(){throw new Error("Unable to load external scripts")},recaptchaV2Script:"",recaptchaEnterpriseScript:"",gapiScript:""};function tT(n){eo=n}function uf(n){return eo.loadJS(n)}function nT(){return eo.recaptchaEnterpriseScript}function rT(){return eo.gapiScript}function sT(n){return`__${n}${Math.floor(Math.random()*1e6)}`}class iT{constructor(){this.enterprise=new oT}ready(e){e()}execute(e,t){return Promise.resolve("token")}render(e,t){return""}}class oT{ready(e){e()}execute(e,t){return Promise.resolve("token")}render(e,t){return""}}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const aT="recaptcha-enterprise",lf="NO_RECAPTCHA",Vl="onFirebaseAuthREInstanceReady";class Ft{constructor(e){this.type=aT,this.auth=bt(e)}async verify(e="verify",t=!1){async function r(i){if(!t){if(i.tenantId==null&&i._agentRecaptchaConfig!=null)return i._agentRecaptchaConfig.siteKey;if(i.tenantId!=null&&i._tenantRecaptchaConfigs[i.tenantId]!==void 0)return i._tenantRecaptchaConfigs[i.tenantId].siteKey}return new Promise(async(a,c)=>{Fw(i,{clientType:"CLIENT_TYPE_WEB",version:"RECAPTCHA_ENTERPRISE"}).then(l=>{if(l.recaptchaKey===void 0)c(new Error("recaptcha Enterprise site key undefined"));else{const d=new Uw(l);return i.tenantId==null?i._agentRecaptchaConfig=d:i._tenantRecaptchaConfigs[i.tenantId]=d,a(d.siteKey)}}).catch(l=>{c(l)})})}function s(i,a,c){const l=window.grecaptcha;Il(l)?l.enterprise.ready(()=>{l.enterprise.execute(i,{action:e}).then(d=>{a(d)}).catch(()=>{a(lf)})}):c(Error("No reCAPTCHA enterprise script loaded."))}return this.auth.settings.appVerificationDisabledForTesting?new iT().execute("siteKey",{action:"verify"}):new Promise((i,a)=>{r(this.auth).then(async c=>{if(!t&&Il(window.grecaptcha)&&Ft.scriptInjectionDeferred)await Ft.scriptInjectionDeferred.promise,s(c,i,a);else{if(typeof window>"u"){a(new Error("RecaptchaVerifier is only supported in browser"));return}let l=nT();l.length!==0&&(l+=c+`&onload=${Vl}`),Ft.scriptInjectionDeferred=new Gl,window[Vl]=()=>{var d;(d=Ft.scriptInjectionDeferred)==null||d.resolve()},uf(l).then(()=>{var d;return(d=Ft.scriptInjectionDeferred)==null?void 0:d.promise}).then(()=>{s(c,i,a)}).catch(d=>{a(d)})}}).catch(c=>{a(c)})})}}Ft.scriptInjectionDeferred=null;async function Cl(n,e,t,r=!1,s=!1){const i=new Ft(n);let a;if(s)a=lf;else try{a=await i.verify(t)}catch{a=await i.verify(t,!0)}const c={...e};if(t==="mfaSmsEnrollment"||t==="mfaSmsSignIn"){if("phoneEnrollmentInfo"in c){const l=c.phoneEnrollmentInfo.phoneNumber,d=c.phoneEnrollmentInfo.recaptchaToken;Object.assign(c,{phoneEnrollmentInfo:{phoneNumber:l,recaptchaToken:d,captchaResponse:a,clientType:"CLIENT_TYPE_WEB",recaptchaVersion:"RECAPTCHA_ENTERPRISE"}})}else if("phoneSignInInfo"in c){const l=c.phoneSignInInfo.recaptchaToken;Object.assign(c,{phoneSignInInfo:{recaptchaToken:l,captchaResponse:a,clientType:"CLIENT_TYPE_WEB",recaptchaVersion:"RECAPTCHA_ENTERPRISE"}})}return c}return r?Object.assign(c,{captchaResp:a}):Object.assign(c,{captchaResponse:a}),Object.assign(c,{clientType:"CLIENT_TYPE_WEB"}),Object.assign(c,{recaptchaVersion:"RECAPTCHA_ENTERPRISE"}),c}async function vi(n,e,t,r,s){var i;if((i=n._getRecaptchaConfig())!=null&&i.isProviderEnabled("EMAIL_PASSWORD_PROVIDER")){const a=await Cl(n,e,t,t==="getOobCode");return r(n,a)}else return r(n,e).catch(async a=>{if(a.code==="auth/missing-recaptcha-token"){console.log(`${t} is protected by reCAPTCHA Enterprise for this project. Automatically triggering the reCAPTCHA flow and restarting the flow.`);const c=await Cl(n,e,t,t==="getOobCode");return r(n,c)}else return Promise.reject(a)})}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function cT(n,e){const t=ua(n,"auth");if(t.isInitialized()){const s=t.getImmediate(),i=t.getOptions();if(Rn(i,e??{}))return s;Je(s,"already-initialized")}return t.initialize({options:e})}function uT(n,e){const t=(e==null?void 0:e.persistence)||[],r=(Array.isArray(t)?t:[t]).map(Et);e!=null&&e.errorMap&&n._updateErrorMap(e.errorMap),n._initializeWithPersistence(r,e==null?void 0:e.popupRedirectResolver)}function lT(n,e,t){const r=bt(n);$(/^https?:\/\//.test(e),r,"invalid-emulator-scheme");const s=!1,i=hf(e),{host:a,port:c}=hT(e),l=c===null?"":`:${c}`,d={url:`${i}//${a}${l}/`},p=Object.freeze({host:a,port:c,protocol:i.replace(":",""),options:Object.freeze({disableWarnings:s})});if(!r._canInitEmulator){$(r.config.emulator&&r.emulatorConfig,r,"emulator-config-failed"),$(Rn(d,r.config.emulator)&&Rn(p,r.emulatorConfig),r,"emulator-config-failed");return}r.config.emulator=d,r.emulatorConfig=p,r.settings.appVerificationDisabledForTesting=!0,ls(a)?Kl(`${i}//${a}${l}`):dT()}function hf(n){const e=n.indexOf(":");return e<0?"":n.substr(0,e+1)}function hT(n){const e=hf(n),t=/(\/\/)?([^?#/]+)/.exec(n.substr(e.length));if(!t)return{host:"",port:null};const r=t[2].split("@").pop()||"",s=/^(\[[^\]]+\])(:|$)/.exec(r);if(s){const i=s[1];return{host:i,port:bl(r.substr(i.length+1))}}else{const[i,a]=r.split(":");return{host:i,port:bl(a)}}}function bl(n){if(!n)return null;const e=Number(n);return isNaN(e)?null:e}function dT(){function n(){const e=document.createElement("p"),t=e.style;e.innerText="Running in emulator mode. Do not use with production credentials.",t.position="fixed",t.width="100%",t.backgroundColor="#ffffff",t.border=".1em solid #000000",t.color="#b50000",t.bottom="0px",t.left="0px",t.margin="0px",t.zIndex="10000",t.textAlign="center",e.classList.add("firebase-emulator-warning"),document.body.appendChild(e)}typeof console<"u"&&typeof console.info=="function"&&console.info("WARNING: You are using the Auth Emulator, which is intended for local testing only.  Do not use with production credentials."),typeof window<"u"&&typeof document<"u"&&(document.readyState==="loading"?window.addEventListener("DOMContentLoaded",n):n())}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class hc{constructor(e,t){this.providerId=e,this.signInMethod=t}toJSON(){return yt("not implemented")}_getIdTokenResponse(e){return yt("not implemented")}_linkToIdToken(e,t){return yt("not implemented")}_getReauthenticationResolver(e){return yt("not implemented")}}async function fT(n,e){return pt(n,"POST","/v1/accounts:signUp",e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function pT(n,e){return Ts(n,"POST","/v1/accounts:signInWithPassword",Ct(n,e))}async function mT(n,e){return pt(n,"POST","/v1/accounts:sendOobCode",Ct(n,e))}async function gT(n,e){return mT(n,e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function _T(n,e){return Ts(n,"POST","/v1/accounts:signInWithEmailLink",Ct(n,e))}async function yT(n,e){return Ts(n,"POST","/v1/accounts:signInWithEmailLink",Ct(n,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class as extends hc{constructor(e,t,r,s=null){super("password",r),this._email=e,this._password=t,this._tenantId=s}static _fromEmailAndPassword(e,t){return new as(e,t,"password")}static _fromEmailAndCode(e,t,r=null){return new as(e,t,"emailLink",r)}toJSON(){return{email:this._email,password:this._password,signInMethod:this.signInMethod,tenantId:this._tenantId}}static fromJSON(e){const t=typeof e=="string"?JSON.parse(e):e;if(t!=null&&t.email&&(t!=null&&t.password)){if(t.signInMethod==="password")return this._fromEmailAndPassword(t.email,t.password);if(t.signInMethod==="emailLink")return this._fromEmailAndCode(t.email,t.password,t.tenantId)}return null}async _getIdTokenResponse(e){switch(this.signInMethod){case"password":const t={returnSecureToken:!0,email:this._email,password:this._password,clientType:"CLIENT_TYPE_WEB"};return vi(e,t,"signInWithPassword",pT);case"emailLink":return _T(e,{email:this._email,oobCode:this._password});default:Je(e,"internal-error")}}async _linkToIdToken(e,t){switch(this.signInMethod){case"password":const r={idToken:t,returnSecureToken:!0,email:this._email,password:this._password,clientType:"CLIENT_TYPE_WEB"};return vi(e,r,"signUpPassword",fT);case"emailLink":return yT(e,{idToken:t,email:this._email,oobCode:this._password});default:Je(e,"internal-error")}}_getReauthenticationResolver(e){return this._getIdTokenResponse(e)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function zn(n,e){return Ts(n,"POST","/v1/accounts:signInWithIdp",Ct(n,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ET="http://localhost";class Cn extends hc{constructor(){super(...arguments),this.pendingToken=null}static _fromParams(e){const t=new Cn(e.providerId,e.signInMethod);return e.idToken||e.accessToken?(e.idToken&&(t.idToken=e.idToken),e.accessToken&&(t.accessToken=e.accessToken),e.nonce&&!e.pendingToken&&(t.nonce=e.nonce),e.pendingToken&&(t.pendingToken=e.pendingToken)):e.oauthToken&&e.oauthTokenSecret?(t.accessToken=e.oauthToken,t.secret=e.oauthTokenSecret):Je("argument-error"),t}toJSON(){return{idToken:this.idToken,accessToken:this.accessToken,secret:this.secret,nonce:this.nonce,pendingToken:this.pendingToken,providerId:this.providerId,signInMethod:this.signInMethod}}static fromJSON(e){const t=typeof e=="string"?JSON.parse(e):e,{providerId:r,signInMethod:s,...i}=t;if(!r||!s)return null;const a=new Cn(r,s);return a.idToken=i.idToken||void 0,a.accessToken=i.accessToken||void 0,a.secret=i.secret,a.nonce=i.nonce,a.pendingToken=i.pendingToken||null,a}_getIdTokenResponse(e){const t=this.buildRequest();return zn(e,t)}_linkToIdToken(e,t){const r=this.buildRequest();return r.idToken=t,zn(e,r)}_getReauthenticationResolver(e){const t=this.buildRequest();return t.autoCreate=!1,zn(e,t)}buildRequest(){const e={requestUri:ET,returnSecureToken:!0};if(this.pendingToken)e.pendingToken=this.pendingToken;else{const t={};this.idToken&&(t.id_token=this.idToken),this.accessToken&&(t.access_token=this.accessToken),this.secret&&(t.oauth_token_secret=this.secret),t.providerId=this.providerId,this.nonce&&!this.pendingToken&&(t.nonce=this.nonce),e.postBody=us(t)}return e}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function wT(n){switch(n){case"recoverEmail":return"RECOVER_EMAIL";case"resetPassword":return"PASSWORD_RESET";case"signIn":return"EMAIL_SIGNIN";case"verifyEmail":return"VERIFY_EMAIL";case"verifyAndChangeEmail":return"VERIFY_AND_CHANGE_EMAIL";case"revertSecondFactorAddition":return"REVERT_SECOND_FACTOR_ADDITION";default:return null}}function TT(n){const e=Vr(Cr(n)).link,t=e?Vr(Cr(e)).deep_link_id:null,r=Vr(Cr(n)).deep_link_id;return(r?Vr(Cr(r)).link:null)||r||t||e||n}class dc{constructor(e){const t=Vr(Cr(e)),r=t.apiKey??null,s=t.oobCode??null,i=wT(t.mode??null);$(r&&s&&i,"argument-error"),this.apiKey=r,this.operation=i,this.code=s,this.continueUrl=t.continueUrl??null,this.languageCode=t.lang??null,this.tenantId=t.tenantId??null}static parseLink(e){const t=TT(e);try{return new dc(t)}catch{return null}}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ur{constructor(){this.providerId=ur.PROVIDER_ID}static credential(e,t){return as._fromEmailAndPassword(e,t)}static credentialWithLink(e,t){const r=dc.parseLink(t);return $(r,"argument-error"),as._fromEmailAndCode(e,r.code,r.tenantId)}}ur.PROVIDER_ID="password";ur.EMAIL_PASSWORD_SIGN_IN_METHOD="password";ur.EMAIL_LINK_SIGN_IN_METHOD="emailLink";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class fc{constructor(e){this.providerId=e,this.defaultLanguageCode=null,this.customParameters={}}setDefaultLanguage(e){this.defaultLanguageCode=e}setCustomParameters(e){return this.customParameters=e,this}getCustomParameters(){return this.customParameters}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Is extends fc{constructor(){super(...arguments),this.scopes=[]}addScope(e){return this.scopes.includes(e)||this.scopes.push(e),this}getScopes(){return[...this.scopes]}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Bt extends Is{constructor(){super("facebook.com")}static credential(e){return Cn._fromParams({providerId:Bt.PROVIDER_ID,signInMethod:Bt.FACEBOOK_SIGN_IN_METHOD,accessToken:e})}static credentialFromResult(e){return Bt.credentialFromTaggedObject(e)}static credentialFromError(e){return Bt.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e||!("oauthAccessToken"in e)||!e.oauthAccessToken)return null;try{return Bt.credential(e.oauthAccessToken)}catch{return null}}}Bt.FACEBOOK_SIGN_IN_METHOD="facebook.com";Bt.PROVIDER_ID="facebook.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class qt extends Is{constructor(){super("google.com"),this.addScope("profile")}static credential(e,t){return Cn._fromParams({providerId:qt.PROVIDER_ID,signInMethod:qt.GOOGLE_SIGN_IN_METHOD,idToken:e,accessToken:t})}static credentialFromResult(e){return qt.credentialFromTaggedObject(e)}static credentialFromError(e){return qt.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{oauthIdToken:t,oauthAccessToken:r}=e;if(!t&&!r)return null;try{return qt.credential(t,r)}catch{return null}}}qt.GOOGLE_SIGN_IN_METHOD="google.com";qt.PROVIDER_ID="google.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class $t extends Is{constructor(){super("github.com")}static credential(e){return Cn._fromParams({providerId:$t.PROVIDER_ID,signInMethod:$t.GITHUB_SIGN_IN_METHOD,accessToken:e})}static credentialFromResult(e){return $t.credentialFromTaggedObject(e)}static credentialFromError(e){return $t.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e||!("oauthAccessToken"in e)||!e.oauthAccessToken)return null;try{return $t.credential(e.oauthAccessToken)}catch{return null}}}$t.GITHUB_SIGN_IN_METHOD="github.com";$t.PROVIDER_ID="github.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class jt extends Is{constructor(){super("twitter.com")}static credential(e,t){return Cn._fromParams({providerId:jt.PROVIDER_ID,signInMethod:jt.TWITTER_SIGN_IN_METHOD,oauthToken:e,oauthTokenSecret:t})}static credentialFromResult(e){return jt.credentialFromTaggedObject(e)}static credentialFromError(e){return jt.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{oauthAccessToken:t,oauthTokenSecret:r}=e;if(!t||!r)return null;try{return jt.credential(t,r)}catch{return null}}}jt.TWITTER_SIGN_IN_METHOD="twitter.com";jt.PROVIDER_ID="twitter.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function IT(n,e){return Ts(n,"POST","/v1/accounts:signUp",Ct(n,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class bn{constructor(e){this.user=e.user,this.providerId=e.providerId,this._tokenResponse=e._tokenResponse,this.operationType=e.operationType}static async _fromIdTokenResponse(e,t,r,s=!1){const i=await Xe._fromIdTokenResponse(e,r,s),a=Nl(r);return new bn({user:i,providerId:a,_tokenResponse:r,operationType:t})}static async _forOperation(e,t,r){await e._updateTokensIfNecessary(r,!0);const s=Nl(r);return new bn({user:e,providerId:s,_tokenResponse:r,operationType:t})}}function Nl(n){return n.providerId?n.providerId:"phoneNumber"in n?"phone":null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ai extends St{constructor(e,t,r,s){super(t.code,t.message),this.operationType=r,this.user=s,Object.setPrototypeOf(this,Ai.prototype),this.customData={appName:e.name,tenantId:e.tenantId??void 0,_serverResponse:t.customData._serverResponse,operationType:r}}static _fromErrorAndOperation(e,t,r,s){return new Ai(e,t,r,s)}}function df(n,e,t,r){return(e==="reauthenticate"?t._getReauthenticationResolver(n):t._getIdTokenResponse(n)).catch(i=>{throw i.code==="auth/multi-factor-auth-required"?Ai._fromErrorAndOperation(n,i,e,r):i})}async function vT(n,e,t=!1){const r=await Xn(n,e._linkToIdToken(n.auth,await n.getIdToken()),t);return bn._forOperation(n,"link",r)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function AT(n,e,t=!1){const{auth:r}=n;if($e(r.app))return Promise.reject(It(r));const s="reauthenticate";try{const i=await Xn(n,df(r,s,e,n),t);$(i.idToken,r,"internal-error");const a=uc(i.idToken);$(a,r,"internal-error");const{sub:c}=a;return $(n.uid===c,r,"user-mismatch"),bn._forOperation(n,s,i)}catch(i){throw(i==null?void 0:i.code)==="auth/user-not-found"&&Je(r,"user-mismatch"),i}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function ff(n,e,t=!1){if($e(n.app))return Promise.reject(It(n));const r="signIn",s=await df(n,r,e),i=await bn._fromIdTokenResponse(n,r,s);return t||await n._updateCurrentUser(i.user),i}async function RT(n,e){return ff(bt(n),e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function pf(n){const e=bt(n);e._getPasswordPolicyInternal()&&await e._updatePasswordPolicy()}async function iv(n,e,t){const r=bt(n);await vi(r,{requestType:"PASSWORD_RESET",email:e,clientType:"CLIENT_TYPE_WEB"},"getOobCode",gT)}async function ov(n,e,t){if($e(n.app))return Promise.reject(It(n));const r=bt(n),a=await vi(r,{returnSecureToken:!0,email:e,password:t,clientType:"CLIENT_TYPE_WEB"},"signUpPassword",IT).catch(l=>{throw l.code==="auth/password-does-not-meet-requirements"&&pf(n),l}),c=await bn._fromIdTokenResponse(r,"signIn",a);return await r._updateCurrentUser(c.user),c}function av(n,e,t){return $e(n.app)?Promise.reject(It(n)):RT(he(n),ur.credential(e,t)).catch(async r=>{throw r.code==="auth/password-does-not-meet-requirements"&&pf(n),r})}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function PT(n,e){return pt(n,"POST","/v1/accounts:update",e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function cv(n,e){const{displayName:t,photoURL:r}=e;if(t===void 0&&r===void 0)return;const s=he(n),a={idToken:await s.getIdToken(),displayName:t,photoUrl:r,returnSecureToken:!0},c=await Xn(s,PT(s.auth,a));s.displayName=c.displayName||null,s.photoURL=c.photoUrl||null;const l=s.providerData.find(({providerId:d})=>d==="password");l&&(l.displayName=s.displayName,l.photoURL=s.photoURL),await s._updateTokensIfNecessary(c)}function ST(n,e,t,r){return he(n).onIdTokenChanged(e,t,r)}function VT(n,e,t){return he(n).beforeAuthStateChanged(e,t)}function uv(n,e,t,r){return he(n).onAuthStateChanged(e,t,r)}function lv(n){return he(n).signOut()}const Ri="__sak";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class mf{constructor(e,t){this.storageRetriever=e,this.type=t}_isAvailable(){try{return this.storage?(this.storage.setItem(Ri,"1"),this.storage.removeItem(Ri),Promise.resolve(!0)):Promise.resolve(!1)}catch{return Promise.resolve(!1)}}_set(e,t){return this.storage.setItem(e,JSON.stringify(t)),Promise.resolve()}_get(e){const t=this.storage.getItem(e);return Promise.resolve(t?JSON.parse(t):null)}_remove(e){return this.storage.removeItem(e),Promise.resolve()}get storage(){return this.storageRetriever()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const CT=1e3,bT=10;class gf extends mf{constructor(){super(()=>window.localStorage,"LOCAL"),this.boundEventHandler=(e,t)=>this.onStorageEvent(e,t),this.listeners={},this.localCache={},this.pollTimer=null,this.fallbackToPolling=af(),this._shouldAllowMigration=!0}forAllChangedKeys(e){for(const t of Object.keys(this.listeners)){const r=this.storage.getItem(t),s=this.localCache[t];r!==s&&e(t,s,r)}}onStorageEvent(e,t=!1){if(!e.key){this.forAllChangedKeys((a,c,l)=>{this.notifyListeners(a,l)});return}const r=e.key;t?this.detachListener():this.stopPolling();const s=()=>{const a=this.storage.getItem(r);!t&&this.localCache[r]===a||this.notifyListeners(r,a)},i=this.storage.getItem(r);Qw()&&i!==e.newValue&&e.newValue!==e.oldValue?setTimeout(s,bT):s()}notifyListeners(e,t){this.localCache[e]=t;const r=this.listeners[e];if(r)for(const s of Array.from(r))s(t&&JSON.parse(t))}startPolling(){this.stopPolling(),this.pollTimer=setInterval(()=>{this.forAllChangedKeys((e,t,r)=>{this.onStorageEvent(new StorageEvent("storage",{key:e,oldValue:t,newValue:r}),!0)})},CT)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}attachListener(){window.addEventListener("storage",this.boundEventHandler)}detachListener(){window.removeEventListener("storage",this.boundEventHandler)}_addListener(e,t){Object.keys(this.listeners).length===0&&(this.fallbackToPolling?this.startPolling():this.attachListener()),this.listeners[e]||(this.listeners[e]=new Set,this.localCache[e]=this.storage.getItem(e)),this.listeners[e].add(t)}_removeListener(e,t){this.listeners[e]&&(this.listeners[e].delete(t),this.listeners[e].size===0&&delete this.listeners[e]),Object.keys(this.listeners).length===0&&(this.detachListener(),this.stopPolling())}async _set(e,t){await super._set(e,t),this.localCache[e]=JSON.stringify(t)}async _get(e){const t=await super._get(e);return this.localCache[e]=JSON.stringify(t),t}async _remove(e){await super._remove(e),delete this.localCache[e]}}gf.type="LOCAL";const NT=gf;/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class _f extends mf{constructor(){super(()=>window.sessionStorage,"SESSION")}_addListener(e,t){}_removeListener(e,t){}}_f.type="SESSION";const yf=_f;/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function kT(n){return Promise.all(n.map(async e=>{try{return{fulfilled:!0,value:await e}}catch(t){return{fulfilled:!1,reason:t}}}))}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class to{constructor(e){this.eventTarget=e,this.handlersMap={},this.boundEventHandler=this.handleEvent.bind(this)}static _getInstance(e){const t=this.receivers.find(s=>s.isListeningto(e));if(t)return t;const r=new to(e);return this.receivers.push(r),r}isListeningto(e){return this.eventTarget===e}async handleEvent(e){const t=e,{eventId:r,eventType:s,data:i}=t.data,a=this.handlersMap[s];if(!(a!=null&&a.size))return;t.ports[0].postMessage({status:"ack",eventId:r,eventType:s});const c=Array.from(a).map(async d=>d(t.origin,i)),l=await kT(c);t.ports[0].postMessage({status:"done",eventId:r,eventType:s,response:l})}_subscribe(e,t){Object.keys(this.handlersMap).length===0&&this.eventTarget.addEventListener("message",this.boundEventHandler),this.handlersMap[e]||(this.handlersMap[e]=new Set),this.handlersMap[e].add(t)}_unsubscribe(e,t){this.handlersMap[e]&&t&&this.handlersMap[e].delete(t),(!t||this.handlersMap[e].size===0)&&delete this.handlersMap[e],Object.keys(this.handlersMap).length===0&&this.eventTarget.removeEventListener("message",this.boundEventHandler)}}to.receivers=[];/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function pc(n="",e=10){let t="";for(let r=0;r<e;r++)t+=Math.floor(Math.random()*10);return n+t}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class DT{constructor(e){this.target=e,this.handlers=new Set}removeMessageHandler(e){e.messageChannel&&(e.messageChannel.port1.removeEventListener("message",e.onMessage),e.messageChannel.port1.close()),this.handlers.delete(e)}async _send(e,t,r=50){const s=typeof MessageChannel<"u"?new MessageChannel:null;if(!s)throw new Error("connection_unavailable");let i,a;return new Promise((c,l)=>{const d=pc("",20);s.port1.start();const p=setTimeout(()=>{l(new Error("unsupported_event"))},r);a={messageChannel:s,onMessage(m){const w=m;if(w.data.eventId===d)switch(w.data.status){case"ack":clearTimeout(p),i=setTimeout(()=>{l(new Error("timeout"))},3e3);break;case"done":clearTimeout(i),c(w.data.response);break;default:clearTimeout(p),clearTimeout(i),l(new Error("invalid_response"));break}}},this.handlers.add(a),s.port1.addEventListener("message",a.onMessage),this.target.postMessage({eventType:e,eventId:d,data:t},[s.port2])}).finally(()=>{a&&this.removeMessageHandler(a)})}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ht(){return window}function xT(n){ht().location.href=n}/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Ef(){return typeof ht().WorkerGlobalScope<"u"&&typeof ht().importScripts=="function"}async function OT(){if(!(navigator!=null&&navigator.serviceWorker))return null;try{return(await navigator.serviceWorker.ready).active}catch{return null}}function LT(){var n;return((n=navigator==null?void 0:navigator.serviceWorker)==null?void 0:n.controller)||null}function MT(){return Ef()?self:null}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const wf="firebaseLocalStorageDb",UT=1,Pi="firebaseLocalStorage",Tf="fbase_key";class vs{constructor(e){this.request=e}toPromise(){return new Promise((e,t)=>{this.request.addEventListener("success",()=>{e(this.request.result)}),this.request.addEventListener("error",()=>{t(this.request.error)})})}}function no(n,e){return n.transaction([Pi],e?"readwrite":"readonly").objectStore(Pi)}function FT(){const n=indexedDB.deleteDatabase(wf);return new vs(n).toPromise()}function If(){const n=indexedDB.open(wf,UT);return new Promise((e,t)=>{n.addEventListener("error",()=>{t(n.error)}),n.addEventListener("upgradeneeded",()=>{const r=n.result;try{r.createObjectStore(Pi,{keyPath:Tf})}catch(s){t(s)}}),n.addEventListener("success",async()=>{const r=n.result;r.objectStoreNames.contains(Pi)?e(r):(r.close(),await FT(),e(await If()))})})}async function kl(n,e,t){const r=no(n,!0).put({[Tf]:e,value:t});return new vs(r).toPromise()}async function BT(n,e){const t=no(n,!1).get(e),r=await new vs(t).toPromise();return r===void 0?null:r.value}function Dl(n,e){const t=no(n,!0).delete(e);return new vs(t).toPromise()}const qT=800,$T=3;class vf{registerLifecycleListeners(){typeof window<"u"&&typeof window.addEventListener=="function"&&(window.addEventListener("pagehide",this.onPageHide),window.addEventListener("pageshow",this.onPageShow))}unregisterLifecycleListeners(){typeof window<"u"&&typeof window.removeEventListener=="function"&&(window.removeEventListener("pagehide",this.onPageHide),window.removeEventListener("pageshow",this.onPageShow))}constructor(){this.type="LOCAL",this.dbPromise=null,this._shouldAllowMigration=!0,this.listeners={},this.localCache={},this.pollTimer=null,this.isClosing=!1,this.pendingWrites=0,this.receiver=null,this.sender=null,this.serviceWorkerReceiverAvailable=!1,this.activeServiceWorker=null,this.onPageHide=()=>{this.isClosing=!0,this.stopPolling(),this.dbPromise&&(this.dbPromise.then(e=>e.close()).catch(()=>{}),this.dbPromise=null)},this.onPageShow=()=>{this.isClosing&&(this.isClosing=!1,Object.keys(this.listeners).length>0&&this.startPolling())},this._workerInitializationPromise=this.initializeServiceWorkerMessaging().then(()=>{},()=>{})}async _openDb(){return this.dbPromise?this.dbPromise:(this.dbPromise=If(),this.dbPromise.catch(()=>{this.dbPromise=null}),this.dbPromise)}async _withRetries(e){let t=0;for(;;)try{const r=await this._openDb();return await e(r)}catch(r){if(t++>$T)throw r;if(this.dbPromise){const s=this.dbPromise;this.dbPromise=null;try{(await s).close()}catch{}}}}async initializeServiceWorkerMessaging(){return Ef()?this.initializeReceiver():this.initializeSender()}async initializeReceiver(){this.receiver=to._getInstance(MT()),this.receiver._subscribe("keyChanged",async(e,t)=>({keyProcessed:(await this._poll()).includes(t.key)})),this.receiver._subscribe("ping",async(e,t)=>["keyChanged"])}async initializeSender(){var t,r;if(this.activeServiceWorker=await OT(),!this.activeServiceWorker)return;this.sender=new DT(this.activeServiceWorker);const e=await this.sender._send("ping",{},800);e&&(t=e[0])!=null&&t.fulfilled&&(r=e[0])!=null&&r.value.includes("keyChanged")&&(this.serviceWorkerReceiverAvailable=!0)}async notifyServiceWorker(e){if(!(!this.sender||!this.activeServiceWorker||LT()!==this.activeServiceWorker))try{await this.sender._send("keyChanged",{key:e},this.serviceWorkerReceiverAvailable?800:50)}catch{}}async _isAvailable(){try{return indexedDB?(await this._withRetries(async e=>{await kl(e,Ri,"1"),await Dl(e,Ri)}),!0):!1}catch{}return!1}async _withPendingWrite(e){this.pendingWrites++;try{await e()}finally{this.pendingWrites--}}async _set(e,t){return this._withPendingWrite(async()=>(await this._withRetries(r=>kl(r,e,t)),this.localCache[e]=t,this.notifyServiceWorker(e)))}async _get(e){const t=await this._withRetries(r=>BT(r,e));return this.localCache[e]=t,t}async _remove(e){return this._withPendingWrite(async()=>(await this._withRetries(t=>Dl(t,e)),delete this.localCache[e],this.notifyServiceWorker(e)))}async _poll(){if(this.isClosing)return[];try{const e=await this._withRetries(s=>{const i=no(s,!1).getAll();return new vs(i).toPromise()});if(this.isClosing)return[];if(!e)return[];if(this.pendingWrites!==0)return[];const t=[],r=new Set;if(e.length!==0)for(const{fbase_key:s,value:i}of e)r.add(s),JSON.stringify(this.localCache[s])!==JSON.stringify(i)&&(this.notifyListeners(s,i),t.push(s));for(const s of Object.keys(this.localCache))this.localCache[s]&&!r.has(s)&&(this.notifyListeners(s,null),t.push(s));return t}catch(e){return this.isClosing||Zs(`Firebase Auth cross-tab polling failed with error: ${e}`),[]}}notifyListeners(e,t){this.localCache[e]=t;const r=this.listeners[e];if(r)for(const s of Array.from(r))s(t)}startPolling(){this.stopPolling(),this.pollTimer=setInterval(async()=>this._poll(),qT)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}_addListener(e,t){Object.keys(this.listeners).length===0&&(this.startPolling(),this.registerLifecycleListeners()),this.listeners[e]||(this.listeners[e]=new Set,this._get(e)),this.listeners[e].add(t)}_removeListener(e,t){this.listeners[e]&&(this.listeners[e].delete(t),this.listeners[e].size===0&&delete this.listeners[e]),Object.keys(this.listeners).length===0&&(this.stopPolling(),this.unregisterLifecycleListeners())}}vf.type="LOCAL";const jT=vf;new ws(3e4,6e4);/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Af(n,e){return e?Et(e):($(n._popupRedirectResolver,n,"argument-error"),n._popupRedirectResolver)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class mc extends hc{constructor(e){super("custom","custom"),this.params=e}_getIdTokenResponse(e){return zn(e,this._buildIdpRequest())}_linkToIdToken(e,t){return zn(e,this._buildIdpRequest(t))}_getReauthenticationResolver(e){return zn(e,this._buildIdpRequest())}_buildIdpRequest(e){const t={requestUri:this.params.requestUri,sessionId:this.params.sessionId,postBody:this.params.postBody,tenantId:this.params.tenantId,pendingToken:this.params.pendingToken,returnSecureToken:!0,returnIdpCredential:!0};return e&&(t.idToken=e),t}}function zT(n){return ff(n.auth,new mc(n),n.bypassAuthState)}function WT(n){const{auth:e,user:t}=n;return $(t,e,"internal-error"),AT(t,new mc(n),n.bypassAuthState)}async function HT(n){const{auth:e,user:t}=n;return $(t,e,"internal-error"),vT(t,new mc(n),n.bypassAuthState)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Rf{constructor(e,t,r,s,i=!1){this.auth=e,this.resolver=r,this.user=s,this.bypassAuthState=i,this.pendingPromise=null,this.eventManager=null,this.filter=Array.isArray(t)?t:[t]}execute(){return new Promise(async(e,t)=>{this.pendingPromise={resolve:e,reject:t};try{this.eventManager=await this.resolver._initialize(this.auth),await this.onExecution(),this.eventManager.registerConsumer(this)}catch(r){this.reject(r)}})}async onAuthEvent(e){const{urlResponse:t,sessionId:r,postBody:s,tenantId:i,error:a,type:c}=e;if(a){this.reject(a);return}const l={auth:this.auth,requestUri:t,sessionId:r,tenantId:i||void 0,postBody:s||void 0,user:this.user,bypassAuthState:this.bypassAuthState};try{this.resolve(await this.getIdpTask(c)(l))}catch(d){this.reject(d)}}onError(e){this.reject(e)}getIdpTask(e){switch(e){case"signInViaPopup":case"signInViaRedirect":return zT;case"linkViaPopup":case"linkViaRedirect":return HT;case"reauthViaPopup":case"reauthViaRedirect":return WT;default:Je(this.auth,"internal-error")}}resolve(e){Pt(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.resolve(e),this.unregisterAndCleanUp()}reject(e){Pt(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.reject(e),this.unregisterAndCleanUp()}unregisterAndCleanUp(){this.eventManager&&this.eventManager.unregisterConsumer(this),this.pendingPromise=null,this.cleanUp()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const GT=new ws(2e3,1e4);async function hv(n,e,t){if($e(n.app))return Promise.reject(et(n,"operation-not-supported-in-this-environment"));const r=bt(n);Cw(n,e,fc);const s=Af(r,t);return new En(r,"signInViaPopup",e,s).executeNotNull()}class En extends Rf{constructor(e,t,r,s,i){super(e,t,s,i),this.provider=r,this.authWindow=null,this.pollId=null,En.currentPopupAction&&En.currentPopupAction.cancel(),En.currentPopupAction=this}async executeNotNull(){const e=await this.execute();return $(e,this.auth,"internal-error"),e}async onExecution(){Pt(this.filter.length===1,"Popup operations only handle one event");const e=pc();this.authWindow=await this.resolver._openPopup(this.auth,this.provider,this.filter[0],e),this.authWindow.associatedEvent=e,this.resolver._originValidation(this.auth).catch(t=>{this.reject(t)}),this.resolver._isIframeWebStorageSupported(this.auth,t=>{t||this.reject(et(this.auth,"web-storage-unsupported"))}),this.pollUserCancellation()}get eventId(){var e;return((e=this.authWindow)==null?void 0:e.associatedEvent)||null}cancel(){this.reject(et(this.auth,"cancelled-popup-request"))}cleanUp(){this.authWindow&&this.authWindow.close(),this.pollId&&window.clearTimeout(this.pollId),this.authWindow=null,this.pollId=null,En.currentPopupAction=null}pollUserCancellation(){const e=()=>{var t,r;if((r=(t=this.authWindow)==null?void 0:t.window)!=null&&r.closed){this.pollId=window.setTimeout(()=>{this.pollId=null,this.reject(et(this.auth,"popup-closed-by-user"))},8e3);return}this.pollId=window.setTimeout(e,GT.get())};e()}}En.currentPopupAction=null;/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const KT="pendingRedirect",ni=new Map;class QT extends Rf{constructor(e,t,r=!1){super(e,["signInViaRedirect","linkViaRedirect","reauthViaRedirect","unknown"],t,void 0,r),this.eventId=null}async execute(){let e=ni.get(this.auth._key());if(!e){try{const r=await YT(this.resolver,this.auth)?await super.execute():null;e=()=>Promise.resolve(r)}catch(t){e=()=>Promise.reject(t)}ni.set(this.auth._key(),e)}return this.bypassAuthState||ni.set(this.auth._key(),()=>Promise.resolve(null)),e()}async onAuthEvent(e){if(e.type==="signInViaRedirect")return super.onAuthEvent(e);if(e.type==="unknown"){this.resolve(null);return}if(e.eventId){const t=await this.auth._redirectUserForId(e.eventId);if(t)return this.user=t,super.onAuthEvent(e);this.resolve(null)}}async onExecution(){}cleanUp(){}}async function YT(n,e){const t=ZT(e),r=XT(n);if(!await r._isAvailable())return!1;const s=await r._get(t)==="true";return await r._remove(t),s}function JT(n,e){ni.set(n._key(),e)}function XT(n){return Et(n._redirectPersistence)}function ZT(n){return ti(KT,n.config.apiKey,n.name)}async function eI(n,e,t=!1){if($e(n.app))return Promise.reject(It(n));const r=bt(n),s=Af(r,e),a=await new QT(r,s,t).execute();return a&&!t&&(delete a.user._redirectEventId,await r._persistUserIfCurrent(a.user),await r._setRedirectUser(null,e)),a}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const tI=10*60*1e3;class nI{constructor(e){this.auth=e,this.cachedEventUids=new Set,this.consumers=new Set,this.queuedRedirectEvent=null,this.hasHandledPotentialRedirect=!1,this.lastProcessedEventTime=Date.now()}registerConsumer(e){this.consumers.add(e),this.queuedRedirectEvent&&this.isEventForConsumer(this.queuedRedirectEvent,e)&&(this.sendToConsumer(this.queuedRedirectEvent,e),this.saveEventToCache(this.queuedRedirectEvent),this.queuedRedirectEvent=null)}unregisterConsumer(e){this.consumers.delete(e)}onEvent(e){if(this.hasEventBeenHandled(e))return!1;let t=!1;return this.consumers.forEach(r=>{this.isEventForConsumer(e,r)&&(t=!0,this.sendToConsumer(e,r),this.saveEventToCache(e))}),this.hasHandledPotentialRedirect||!rI(e)||(this.hasHandledPotentialRedirect=!0,t||(this.queuedRedirectEvent=e,t=!0)),t}sendToConsumer(e,t){var r;if(e.error&&!Pf(e)){const s=((r=e.error.code)==null?void 0:r.split("auth/")[1])||"internal-error";t.onError(et(this.auth,s))}else t.onAuthEvent(e)}isEventForConsumer(e,t){const r=t.eventId===null||!!e.eventId&&e.eventId===t.eventId;return t.filter.includes(e.type)&&r}hasEventBeenHandled(e){return Date.now()-this.lastProcessedEventTime>=tI&&this.cachedEventUids.clear(),this.cachedEventUids.has(xl(e))}saveEventToCache(e){this.cachedEventUids.add(xl(e)),this.lastProcessedEventTime=Date.now()}}function xl(n){return[n.type,n.eventId,n.sessionId,n.tenantId].filter(e=>e).join("-")}function Pf({type:n,error:e}){return n==="unknown"&&(e==null?void 0:e.code)==="auth/no-auth-event"}function rI(n){switch(n.type){case"signInViaRedirect":case"linkViaRedirect":case"reauthViaRedirect":return!0;case"unknown":return Pf(n);default:return!1}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function sI(n,e={}){return pt(n,"GET","/v1/projects",e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const iI=/^\d{1,3}\.\d{1,3}\.\d{1,3}\.\d{1,3}$/,oI=/^https?/;async function aI(n){if(n.config.emulator)return;const{authorizedDomains:e}=await sI(n);for(const t of e)try{if(cI(t))return}catch{}Je(n,"unauthorized-domain")}function cI(n){const e=ia(),{protocol:t,hostname:r}=new URL(e);if(n.startsWith("chrome-extension://")){const a=new URL(n);return a.hostname===""&&r===""?t==="chrome-extension:"&&n.replace("chrome-extension://","")===e.replace("chrome-extension://",""):t==="chrome-extension:"&&a.hostname===r}if(!oI.test(t))return!1;if(iI.test(n))return r===n;const s=n.replace(/\./g,"\\.");return new RegExp("^(.+\\."+s+"|"+s+")$","i").test(r)}/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const uI=new ws(3e4,6e4);function Ol(){const n=ht().___jsl;if(n!=null&&n.H){for(const e of Object.keys(n.H))if(n.H[e].r=n.H[e].r||[],n.H[e].L=n.H[e].L||[],n.H[e].r=[...n.H[e].L],n.CP)for(let t=0;t<n.CP.length;t++)n.CP[t]=null}}function lI(n){return new Promise((e,t)=>{var s,i,a;function r(){Ol(),gapi.load("gapi.iframes",{callback:()=>{e(gapi.iframes.getContext())},ontimeout:()=>{Ol(),t(et(n,"network-request-failed"))},timeout:uI.get()})}if((i=(s=ht().gapi)==null?void 0:s.iframes)!=null&&i.Iframe)e(gapi.iframes.getContext());else if((a=ht().gapi)!=null&&a.load)r();else{const c=sT("iframefcb");return ht()[c]=()=>{gapi.load?r():t(et(n,"network-request-failed"))},uf(`${rT()}?onload=${c}`).catch(l=>t(l))}}).catch(e=>{throw ri=null,e})}let ri=null;function hI(n){return ri=ri||lI(n),ri}/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const dI=new ws(5e3,15e3),fI="__/auth/iframe",pI="emulator/auth/iframe",mI={style:{position:"absolute",top:"-100px",width:"1px",height:"1px"},"aria-hidden":"true",tabindex:"-1"},gI=new Map([["identitytoolkit.googleapis.com","p"],["staging-identitytoolkit.sandbox.googleapis.com","s"],["test-identitytoolkit.sandbox.googleapis.com","t"]]);function _I(n){const e=n.config;$(e.authDomain,n,"auth-domain-config-required");const t=e.emulator?cc(e,pI):`https://${n.config.authDomain}/${fI}`,r={apiKey:e.apiKey,appName:n.name,v:Zn},s=gI.get(n.config.apiHost);s&&(r.eid=s);const i=n._getFrameworks();return i.length&&(r.fw=i.join(",")),`${t}?${us(r).slice(1)}`}async function yI(n){const e=await hI(n),t=ht().gapi;return $(t,n,"internal-error"),e.open({where:document.body,url:_I(n),messageHandlersFilter:t.iframes.CROSS_ORIGIN_IFRAMES_FILTER,attributes:mI,dontclear:!0},r=>new Promise(async(s,i)=>{await r.restyle({setHideOnLeave:!1});const a=et(n,"network-request-failed"),c=ht().setTimeout(()=>{i(a)},dI.get());function l(){ht().clearTimeout(c),s(r)}r.ping(l).then(l,()=>{i(a)})}))}/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const EI={location:"yes",resizable:"yes",statusbar:"yes",toolbar:"no"},wI=500,TI=600,II="_blank",vI="http://localhost";class Ll{constructor(e){this.window=e,this.associatedEvent=null}close(){if(this.window)try{this.window.close()}catch{}}}function AI(n,e,t,r=wI,s=TI){const i=Math.max((window.screen.availHeight-s)/2,0).toString(),a=Math.max((window.screen.availWidth-r)/2,0).toString();let c="";const l={...EI,width:r.toString(),height:s.toString(),top:i,left:a},d=Se().toLowerCase();t&&(c=tf(d)?II:t),Zd(d)&&(e=e||vI,l.scrollbars="yes");const p=Object.entries(l).reduce((w,[V,N])=>`${w}${V}=${N},`,"");if(Kw(d)&&c!=="_self")return RI(e||"",c),new Ll(null);const m=window.open(e||"",c,p);$(m,n,"popup-blocked");try{m.focus()}catch{}return new Ll(m)}function RI(n,e){const t=document.createElement("a");t.href=n,t.target=e;const r=document.createEvent("MouseEvent");r.initMouseEvent("click",!0,!0,window,1,0,0,0,0,!1,!1,!1,!1,1,null),t.dispatchEvent(r)}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const PI="__/auth/handler",SI="emulator/auth/handler",VI=encodeURIComponent("fac");async function Ml(n,e,t,r,s,i){$(n.config.authDomain,n,"auth-domain-config-required"),$(n.config.apiKey,n,"invalid-api-key");const a={apiKey:n.config.apiKey,appName:n.name,authType:t,redirectUrl:r,v:Zn,eventId:s};if(e instanceof fc){e.setDefaultLanguage(n.languageCode),a.providerId=e.providerId||"",Sp(e.getCustomParameters())||(a.customParameters=JSON.stringify(e.getCustomParameters()));for(const[p,m]of Object.entries({}))a[p]=m}if(e instanceof Is){const p=e.getScopes().filter(m=>m!=="");p.length>0&&(a.scopes=p.join(","))}n.tenantId&&(a.tid=n.tenantId);const c=a;for(const p of Object.keys(c))c[p]===void 0&&delete c[p];const l=await n._getAppCheckToken(),d=l?`#${VI}=${encodeURIComponent(l)}`:"";return`${CI(n)}?${us(c).slice(1)}${d}`}function CI({config:n}){return n.emulator?cc(n,SI):`https://${n.authDomain}/${PI}`}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Uo="webStorageSupport";class bI{constructor(){this.eventManagers={},this.iframes={},this.originValidationPromises={},this._redirectPersistence=yf,this._completeRedirectFn=eI,this._overrideRedirectResult=JT}async _openPopup(e,t,r,s){var a;Pt((a=this.eventManagers[e._key()])==null?void 0:a.manager,"_initialize() not called before _openPopup()");const i=await Ml(e,t,r,ia(),s);return AI(e,i,pc())}async _openRedirect(e,t,r,s){await this._originValidation(e);const i=await Ml(e,t,r,ia(),s);return xT(i),new Promise(()=>{})}_initialize(e){const t=e._key();if(this.eventManagers[t]){const{manager:s,promise:i}=this.eventManagers[t];return s?Promise.resolve(s):(Pt(i,"If manager is not set, promise should be"),i)}const r=this.initAndGetManager(e);return this.eventManagers[t]={promise:r},r.catch(()=>{delete this.eventManagers[t]}),r}async initAndGetManager(e){const t=await yI(e),r=new nI(e);return t.register("authEvent",s=>($(s==null?void 0:s.authEvent,e,"invalid-auth-event"),{status:r.onEvent(s.authEvent)?"ACK":"ERROR"}),gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER),this.eventManagers[e._key()]={manager:r},this.iframes[e._key()]=t,r}_isIframeWebStorageSupported(e,t){this.iframes[e._key()].send(Uo,{type:Uo},s=>{var a;const i=(a=s==null?void 0:s[0])==null?void 0:a[Uo];i!==void 0&&t(!!i),Je(e,"internal-error")},gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER)}_originValidation(e){const t=e._key();return this.originValidationPromises[t]||(this.originValidationPromises[t]=aI(e)),this.originValidationPromises[t]}get _shouldInitProactively(){return af()||ef()||lc()}}const NI=bI;var Ul="@firebase/auth",Fl="1.13.6";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class kI{constructor(e){this.auth=e,this.internalListeners=new Map}getUid(){var e;return this.assertAuthConfigured(),((e=this.auth.currentUser)==null?void 0:e.uid)||null}async getToken(e){return this.assertAuthConfigured(),await this.auth._initializationPromise,this.auth.currentUser?{accessToken:await this.auth.currentUser.getIdToken(e)}:null}addAuthTokenListener(e){if(this.assertAuthConfigured(),this.internalListeners.has(e))return;const t=this.auth.onIdTokenChanged(r=>{e((r==null?void 0:r.stsTokenManager.accessToken)||null)});this.internalListeners.set(e,t),this.updateProactiveRefresh()}removeAuthTokenListener(e){this.assertAuthConfigured();const t=this.internalListeners.get(e);t&&(this.internalListeners.delete(e),t(),this.updateProactiveRefresh())}assertAuthConfigured(){$(this.auth._initializationPromise,"dependent-sdk-initialized-before-auth")}updateProactiveRefresh(){this.internalListeners.size>0?this.auth._startProactiveRefresh():this.auth._stopProactiveRefresh()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function DI(n){switch(n){case"Node":return"node";case"ReactNative":return"rn";case"Worker":return"webworker";case"Cordova":return"cordova";case"WebExtension":return"web-extension";default:return}}function xI(n){Wn(new Pn("auth",(e,{options:t})=>{const r=e.getProvider("app").getImmediate(),s=e.getProvider("heartbeat"),i=e.getProvider("app-check-internal"),{apiKey:a,authDomain:c}=r.options;$(a&&!a.includes(":"),"invalid-api-key",{appName:r.name});const l={apiKey:a,authDomain:c,clientPlatform:n,apiHost:"identitytoolkit.googleapis.com",tokenApiHost:"securetoken.googleapis.com",apiScheme:"https",sdkClientVersion:cf(n)},d=new eT(r,s,i,l);return uT(d,t),d},"PUBLIC").setInstantiationMode("EXPLICIT").setInstanceCreatedCallback((e,t,r)=>{e.getProvider("auth-internal").initialize()})),Wn(new Pn("auth-internal",e=>{const t=bt(e.getProvider("auth").getImmediate());return(r=>new kI(r))(t)},"PRIVATE").setInstantiationMode("EXPLICIT")),zt(Ul,Fl,DI(n)),zt(Ul,Fl,"esm2020")}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const OI=5*60,LI=Hl("authIdTokenMaxAge")||OI;let Bl=null;const MI=n=>async e=>{const t=e&&await e.getIdTokenResult(),r=t&&(new Date().getTime()-Date.parse(t.issuedAtTime))/1e3;if(r&&r>LI)return;const s=t==null?void 0:t.token;Bl!==s&&(Bl=s,await fetch(n,{method:s?"POST":"DELETE",headers:s?{Authorization:`Bearer ${s}`}:{}}))};function dv(n=Ql()){const e=ua(n,"auth");if(e.isInitialized())return e.getImmediate();const t=cT(n,{popupRedirectResolver:NI,persistence:[jT,NT,yf]}),r=Hl("authTokenSyncURL");if(r&&typeof isSecureContext=="boolean"&&isSecureContext){const i=new URL(r,location.origin);if(location.origin===i.origin){const a=MI(i.toString());VT(t,a,()=>a(t.currentUser)),ST(t,c=>a(c))}}const s=zl("auth");return s&&lT(t,`http://${s}`),t}function UI(){var n;return((n=document.getElementsByTagName("head"))==null?void 0:n[0])??document}tT({loadJS(n){return new Promise((e,t)=>{const r=document.createElement("script");r.setAttribute("src",n),r.onload=e,r.onerror=s=>{const i=et("internal-error");i.customData=s,t(i)},r.type="text/javascript",r.charset="UTF-8",UI().appendChild(r)})},gapiScript:"https://apis.google.com/js/api.js",recaptchaV2Script:"https://www.google.com/recaptcha/api.js",recaptchaEnterpriseScript:"https://www.google.com/recaptcha/enterprise.js?render="});xI("Browser");export{qt as G,Ql as a,KI as b,dv as c,JI as d,sv as e,tv as f,BI as g,WI as h,ym as i,ZI as j,rv as k,XI as l,jI as m,hv as n,uv as o,zI as p,QI as q,av as r,lv as s,iv as t,nv as u,ov as v,YI as w,cv as x,ev as y};
