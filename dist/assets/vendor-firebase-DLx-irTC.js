import{o as _p,R as pa}from"./vendor-libs-BDRZaZVY.js";const yp=()=>{};var Ru={};/**
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
 */const Xl=function(n){const e=[];let t=0;for(let r=0;r<n.length;r++){let s=n.charCodeAt(r);s<128?e[t++]=s:s<2048?(e[t++]=s>>6|192,e[t++]=s&63|128):(s&64512)===55296&&r+1<n.length&&(n.charCodeAt(r+1)&64512)===56320?(s=65536+((s&1023)<<10)+(n.charCodeAt(++r)&1023),e[t++]=s>>18|240,e[t++]=s>>12&63|128,e[t++]=s>>6&63|128,e[t++]=s&63|128):(e[t++]=s>>12|224,e[t++]=s>>6&63|128,e[t++]=s&63|128)}return e},Ep=function(n){const e=[];let t=0,r=0;for(;t<n.length;){const s=n[t++];if(s<128)e[r++]=String.fromCharCode(s);else if(s>191&&s<224){const i=n[t++];e[r++]=String.fromCharCode((s&31)<<6|i&63)}else if(s>239&&s<365){const i=n[t++],a=n[t++],c=n[t++],l=((s&7)<<18|(i&63)<<12|(a&63)<<6|c&63)-65536;e[r++]=String.fromCharCode(55296+(l>>10)),e[r++]=String.fromCharCode(56320+(l&1023))}else{const i=n[t++],a=n[t++];e[r++]=String.fromCharCode((s&15)<<12|(i&63)<<6|a&63)}}return e.join("")},Zl={byteToCharMap_:null,charToByteMap_:null,byteToCharMapWebSafe_:null,charToByteMapWebSafe_:null,ENCODED_VALS_BASE:"ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",get ENCODED_VALS(){return this.ENCODED_VALS_BASE+"+/="},get ENCODED_VALS_WEBSAFE(){return this.ENCODED_VALS_BASE+"-_."},HAS_NATIVE_SUPPORT:typeof atob=="function",encodeByteArray(n,e){if(!Array.isArray(n))throw Error("encodeByteArray takes an array as a parameter");this.init_();const t=e?this.byteToCharMapWebSafe_:this.byteToCharMap_,r=[];for(let s=0;s<n.length;s+=3){const i=n[s],a=s+1<n.length,c=a?n[s+1]:0,l=s+2<n.length,h=l?n[s+2]:0,f=i>>2,m=(i&3)<<4|c>>4;let E=(c&15)<<2|h>>6,V=h&63;l||(V=64,a||(E=64)),r.push(t[f],t[m],t[E],t[V])}return r.join("")},encodeString(n,e){return this.HAS_NATIVE_SUPPORT&&!e?btoa(n):this.encodeByteArray(Xl(n),e)},decodeString(n,e){return this.HAS_NATIVE_SUPPORT&&!e?atob(n):Ep(this.decodeStringToByteArray(n,e))},decodeStringToByteArray(n,e){this.init_();const t=e?this.charToByteMapWebSafe_:this.charToByteMap_,r=[];for(let s=0;s<n.length;){const i=t[n.charAt(s++)],c=s<n.length?t[n.charAt(s)]:0;++s;const h=s<n.length?t[n.charAt(s)]:64;++s;const m=s<n.length?t[n.charAt(s)]:64;if(++s,i==null||c==null||h==null||m==null)throw new wp;const E=i<<2|c>>4;if(r.push(E),h!==64){const V=c<<4&240|h>>2;if(r.push(V),m!==64){const N=h<<6&192|m;r.push(N)}}}return r},init_(){if(!this.byteToCharMap_){this.byteToCharMap_={},this.charToByteMap_={},this.byteToCharMapWebSafe_={},this.charToByteMapWebSafe_={};for(let n=0;n<this.ENCODED_VALS.length;n++)this.byteToCharMap_[n]=this.ENCODED_VALS.charAt(n),this.charToByteMap_[this.byteToCharMap_[n]]=n,this.byteToCharMapWebSafe_[n]=this.ENCODED_VALS_WEBSAFE.charAt(n),this.charToByteMapWebSafe_[this.byteToCharMapWebSafe_[n]]=n,n>=this.ENCODED_VALS_BASE.length&&(this.charToByteMap_[this.ENCODED_VALS_WEBSAFE.charAt(n)]=n,this.charToByteMapWebSafe_[this.ENCODED_VALS.charAt(n)]=n)}}};class wp extends Error{constructor(){super(...arguments),this.name="DecodeBase64StringError"}}const Tp=function(n){const e=Xl(n);return Zl.encodeByteArray(e,!0)},hi=function(n){return Tp(n).replace(/\./g,"")},eh=function(n){try{return Zl.decodeString(n,!0)}catch(e){console.error("base64Decode failed: ",e)}return null};/**
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
 */function Ip(){if(typeof self<"u")return self;if(typeof window<"u")return window;if(typeof global<"u")return global;throw new Error("Unable to locate global object.")}/**
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
 */const vp=()=>Ip().__FIREBASE_DEFAULTS__,Ap=()=>{if(typeof process>"u"||typeof Ru>"u")return;const n=Ru.__FIREBASE_DEFAULTS__;if(n)return JSON.parse(n)},Rp=()=>{if(typeof document>"u")return;let n;try{n=document.cookie.match(/__FIREBASE_DEFAULTS__=([^;]+)/)}catch{return}const e=n&&eh(n[1]);return e&&JSON.parse(e)},Di=()=>{try{return yp()||vp()||Ap()||Rp()}catch(n){console.info(`Unable to get __FIREBASE_DEFAULTS__ due to: ${n}`);return}},th=n=>{var e,t;return(t=(e=Di())==null?void 0:e.emulatorHosts)==null?void 0:t[n]},Pp=n=>{const e=th(n);if(!e)return;const t=e.lastIndexOf(":");if(t<=0||t+1===e.length)throw new Error(`Invalid host ${e} with no separate hostname and port!`);const r=parseInt(e.substring(t+1),10);return e[0]==="["?[e.substring(1,t-1),r]:[e.substring(0,t),r]},nh=()=>{var n;return(n=Di())==null?void 0:n.config},rh=n=>{var e;return(e=Di())==null?void 0:e[`_${n}`]};/**
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
 */class sh{constructor(){this.reject=()=>{},this.resolve=()=>{},this.promise=new Promise((e,t)=>{this.resolve=e,this.reject=t})}wrapCallback(e){return(t,r)=>{t?this.reject(t):this.resolve(r),typeof e=="function"&&(this.promise.catch(()=>{}),e.length===1?e(t):e(t,r))}}}/**
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
 */function Sp(n,e){if(n.uid)throw new Error('The "uid" field is no longer supported by mockUserToken. Please use "sub" instead for Firebase Auth User ID.');const t={alg:"none",type:"JWT"},r=e||"demo-project",s=n.iat||0,i=n.sub||n.user_id;if(!i)throw new Error("mockUserToken must contain 'sub' or 'user_id' field!");const a={iss:`https://securetoken.google.com/${r}`,aud:r,iat:s,exp:s+3600,auth_time:s,sub:i,user_id:i,firebase:{sign_in_provider:"custom",identities:{}},...n};return[hi(JSON.stringify(t)),hi(JSON.stringify(a)),""].join(".")}/**
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
 */function Ve(){return typeof navigator<"u"&&typeof navigator.userAgent=="string"?navigator.userAgent:""}function Vp(){return typeof window<"u"&&!!(window.cordova||window.phonegap||window.PhoneGap)&&/ios|iphone|ipod|ipad|android|blackberry|iemobile/i.test(Ve())}function Cp(){var e;const n=(e=Di())==null?void 0:e.forceEnvironment;if(n==="node")return!0;if(n==="browser")return!1;try{return Object.prototype.toString.call(global.process)==="[object process]"}catch{return!1}}function bp(){return typeof navigator<"u"&&navigator.userAgent==="Cloudflare-Workers"}function Np(){const n=typeof chrome=="object"?chrome.runtime:typeof browser=="object"?browser.runtime:void 0;return typeof n=="object"&&n.id!==void 0}function kp(){return typeof navigator=="object"&&navigator.product==="ReactNative"}function Dp(){const n=Ve();return n.indexOf("MSIE ")>=0||n.indexOf("Trident/")>=0}function xp(){return!Cp()&&!!navigator.userAgent&&navigator.userAgent.includes("Safari")&&!navigator.userAgent.includes("Chrome")}function Op(){try{return typeof indexedDB=="object"}catch{return!1}}function Lp(){return new Promise((n,e)=>{try{let t=!0;const r="validate-browser-context-for-indexeddb-analytics-module",s=self.indexedDB.open(r);s.onsuccess=()=>{s.result.close(),t||self.indexedDB.deleteDatabase(r),n(!0)},s.onupgradeneeded=()=>{t=!1},s.onerror=()=>{var i;e(((i=s.error)==null?void 0:i.message)||"")}}catch(t){e(t)}})}/**
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
 */const Mp="FirebaseError";class bt extends Error{constructor(e,t,r){super(t),this.code=e,this.customData=r,this.name=Mp,Object.setPrototypeOf(this,bt.prototype),Error.captureStackTrace&&Error.captureStackTrace(this,gs.prototype.create)}}class gs{constructor(e,t,r){this.service=e,this.serviceName=t,this.errors=r}create(e,...t){const r=t[0]||{},s=`${this.service}/${e}`,i=this.errors[e],a=i?Up(i,r):"Error",c=`${this.serviceName}: ${a} (${s}).`;return new bt(s,c,r)}}function Up(n,e){try{let t=0,r="";for(;t<n.length;){const s=n.indexOf("{$",t);if(s===-1){r+=n.substring(t);break}const i=n.indexOf("}",s+2);if(i===-1){r+=n.substring(t);break}const a=n.substring(s+2,i),c=e[a];r+=n.substring(t,s)+(c!=null?String(c):`<${a}?>`),t=i+1}return r}catch{return n}}function Fp(n){for(const e in n)if(Object.prototype.hasOwnProperty.call(n,e))return!1;return!0}function An(n,e){if(n===e)return!0;const t=Object.keys(n),r=Object.keys(e);for(const s of t){if(!r.includes(s))return!1;const i=n[s],a=e[s];if(Pu(i)&&Pu(a)){if(!An(i,a))return!1}else if(i!==a)return!1}for(const s of r)if(!t.includes(s))return!1;return!0}function Pu(n){return n!==null&&typeof n=="object"}/**
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
 */function tr(n){const e=[];for(const[t,r]of Object.entries(n))Array.isArray(r)?r.forEach(s=>{e.push(encodeURIComponent(t)+"="+encodeURIComponent(s))}):e.push(encodeURIComponent(t)+"="+encodeURIComponent(r));return e.length?"&"+e.join("&"):""}function kr(n){const e={};return n.replace(/^\?/,"").split("&").forEach(r=>{if(r){const[s,i]=r.split("=");e[decodeURIComponent(s)]=decodeURIComponent(i)}}),e}function Dr(n){const e=n.indexOf("?");if(!e)return"";const t=n.indexOf("#",e);return n.substring(e,t>0?t:void 0)}function Bp(n,e){const t=new qp(n,e);return t.subscribe.bind(t)}class qp{constructor(e,t){this.observers=[],this.unsubscribes=[],this.observerCount=0,this.task=Promise.resolve(),this.finalized=!1,this.onNoObservers=t,this.task.then(()=>{e(this)}).catch(r=>{this.error(r)})}next(e){this.forEachObserver(t=>{t.next(e)})}error(e){this.forEachObserver(t=>{t.error(e)}),this.close(e)}complete(){this.forEachObserver(e=>{e.complete()}),this.close()}subscribe(e,t,r){let s;if(e===void 0&&t===void 0&&r===void 0)throw new Error("Missing Observer.");$p(e,["next","error","complete"])?s=e:s={next:e,error:t,complete:r},s.next===void 0&&(s.next=Do),s.error===void 0&&(s.error=Do),s.complete===void 0&&(s.complete=Do);const i=this.unsubscribeOne.bind(this,this.observers.length);return this.finalized&&this.task.then(()=>{try{this.finalError?s.error(this.finalError):s.complete()}catch{}}),this.observers.push(s),i}unsubscribeOne(e){this.observers===void 0||this.observers[e]===void 0||(delete this.observers[e],this.observerCount-=1,this.observerCount===0&&this.onNoObservers!==void 0&&this.onNoObservers(this))}forEachObserver(e){if(!this.finalized)for(let t=0;t<this.observers.length;t++)this.sendOne(t,e)}sendOne(e,t){this.task.then(()=>{if(this.observers!==void 0&&this.observers[e]!==void 0)try{t(this.observers[e])}catch(r){typeof console<"u"&&console.error&&console.error(r)}})}close(e){this.finalized||(this.finalized=!0,e!==void 0&&(this.finalError=e),this.task.then(()=>{this.observers=void 0,this.onNoObservers=void 0}))}}function $p(n,e){if(typeof n!="object"||n===null)return!1;for(const t of e)if(t in n&&typeof n[t]=="function")return!0;return!1}function Do(){}/**
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
 */function ae(n){return n&&n._delegate?n._delegate:n}/**
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
 */function _s(n){try{return(n.startsWith("http://")||n.startsWith("https://")?new URL(n).hostname:n).endsWith(".cloudworkstations.dev")}catch{return!1}}async function ih(n){return(await fetch(n,{credentials:"include"})).ok}class Rn{constructor(e,t,r){this.name=e,this.instanceFactory=t,this.type=r,this.multipleInstances=!1,this.serviceProps={},this.instantiationMode="LAZY",this.onInstanceCreated=null}setInstantiationMode(e){return this.instantiationMode=e,this}setMultipleInstances(e){return this.multipleInstances=e,this}setServiceProps(e){return this.serviceProps=e,this}setInstanceCreatedCallback(e){return this.onInstanceCreated=e,this}}/**
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
 */class jp{constructor(e,t){this.name=e,this.container=t,this.component=null,this.instances=new Map,this.instancesDeferred=new Map,this.instancesOptions=new Map,this.onInitCallbacks=new Map}get(e){const t=this.normalizeInstanceIdentifier(e);if(!this.instancesDeferred.has(t)){const r=new sh;if(this.instancesDeferred.set(t,r),this.isInitialized(t)||this.shouldAutoInitialize())try{const s=this.getOrInitializeService({instanceIdentifier:t});s&&r.resolve(s)}catch{}}return this.instancesDeferred.get(t).promise}getImmediate(e){const t=this.normalizeInstanceIdentifier(e==null?void 0:e.identifier),r=(e==null?void 0:e.optional)??!1;if(this.isInitialized(t)||this.shouldAutoInitialize())try{return this.getOrInitializeService({instanceIdentifier:t})}catch(s){if(r)return null;throw s}else{if(r)return null;throw Error(`Service ${this.name} is not available`)}}getComponent(){return this.component}setComponent(e){if(e.name!==this.name)throw Error(`Mismatching Component ${e.name} for Provider ${this.name}.`);if(this.component)throw Error(`Component for ${this.name} has already been provided`);if(this.component=e,!!this.shouldAutoInitialize()){if(zp(e))try{this.getOrInitializeService({instanceIdentifier:gn})}catch{}for(const[t,r]of this.instancesDeferred.entries()){const s=this.normalizeInstanceIdentifier(t);try{const i=this.getOrInitializeService({instanceIdentifier:s});r.resolve(i)}catch{}}}}clearInstance(e=gn){this.instancesDeferred.delete(e),this.instancesOptions.delete(e),this.instances.delete(e)}async delete(){const e=Array.from(this.instances.values());await Promise.all([...e.filter(t=>"INTERNAL"in t).map(t=>t.INTERNAL.delete()),...e.filter(t=>"_delete"in t).map(t=>t._delete())])}isComponentSet(){return this.component!=null}isInitialized(e=gn){return this.instances.has(e)}getOptions(e=gn){return this.instancesOptions.get(e)||{}}initialize(e={}){const{options:t={}}=e,r=this.normalizeInstanceIdentifier(e.instanceIdentifier);if(this.isInitialized(r))throw Error(`${this.name}(${r}) has already been initialized`);if(!this.isComponentSet())throw Error(`Component ${this.name} has not been registered yet`);const s=this.getOrInitializeService({instanceIdentifier:r,options:t});for(const[i,a]of this.instancesDeferred.entries()){const c=this.normalizeInstanceIdentifier(i);r===c&&a.resolve(s)}return s}onInit(e,t){const r=this.normalizeInstanceIdentifier(t),s=this.onInitCallbacks.get(r)??new Set;s.add(e),this.onInitCallbacks.set(r,s);const i=this.instances.get(r);return i&&e(i,r),()=>{s.delete(e)}}invokeOnInitCallbacks(e,t){const r=this.onInitCallbacks.get(t);if(r)for(const s of r)try{s(e,t)}catch{}}getOrInitializeService({instanceIdentifier:e,options:t={}}){let r=this.instances.get(e);if(!r&&this.component&&(r=this.component.instanceFactory(this.container,{instanceIdentifier:Wp(e),options:t}),this.instances.set(e,r),this.instancesOptions.set(e,t),this.invokeOnInitCallbacks(r,e),this.component.onInstanceCreated))try{this.component.onInstanceCreated(this.container,e,r)}catch{}return r||null}normalizeInstanceIdentifier(e=gn){return this.component?this.component.multipleInstances?e:gn:e}shouldAutoInitialize(){return!!this.component&&this.component.instantiationMode!=="EXPLICIT"}}function Wp(n){return n===gn?void 0:n}function zp(n){return n.instantiationMode==="EAGER"}/**
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
 */class Hp{constructor(e){this.name=e,this.providers=new Map}addComponent(e){const t=this.getProvider(e.name);if(t.isComponentSet())throw new Error(`Component ${e.name} has already been registered with ${this.name}`);t.setComponent(e)}addOrOverwriteComponent(e){this.getProvider(e.name).isComponentSet()&&this.providers.delete(e.name),this.addComponent(e)}getProvider(e){if(this.providers.has(e))return this.providers.get(e);const t=new jp(e,this);return this.providers.set(e,t),t}getProviders(){return Array.from(this.providers.values())}}/**
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
 */var Q;(function(n){n[n.DEBUG=0]="DEBUG",n[n.VERBOSE=1]="VERBOSE",n[n.INFO=2]="INFO",n[n.WARN=3]="WARN",n[n.ERROR=4]="ERROR",n[n.SILENT=5]="SILENT"})(Q||(Q={}));const Gp={debug:Q.DEBUG,verbose:Q.VERBOSE,info:Q.INFO,warn:Q.WARN,error:Q.ERROR,silent:Q.SILENT},Kp=Q.INFO,Qp={[Q.DEBUG]:"log",[Q.VERBOSE]:"log",[Q.INFO]:"info",[Q.WARN]:"warn",[Q.ERROR]:"error"},Yp=(n,e,...t)=>{if(e<n.logLevel)return;const r=new Date().toISOString(),s=Qp[e];if(s)console[s](`[${r}]  ${n.name}:`,...t);else throw new Error(`Attempted to log a message with an invalid logType (value: ${e})`)};class ma{constructor(e){this.name=e,this._logLevel=Kp,this._logHandler=Yp,this._userLogHandler=null}get logLevel(){return this._logLevel}set logLevel(e){if(!(e in Q))throw new TypeError(`Invalid value "${e}" assigned to \`logLevel\``);this._logLevel=e}setLogLevel(e){this._logLevel=typeof e=="string"?Gp[e]:e}get logHandler(){return this._logHandler}set logHandler(e){if(typeof e!="function")throw new TypeError("Value assigned to `logHandler` must be a function");this._logHandler=e}get userLogHandler(){return this._userLogHandler}set userLogHandler(e){this._userLogHandler=e}debug(...e){this._userLogHandler&&this._userLogHandler(this,Q.DEBUG,...e),this._logHandler(this,Q.DEBUG,...e)}log(...e){this._userLogHandler&&this._userLogHandler(this,Q.VERBOSE,...e),this._logHandler(this,Q.VERBOSE,...e)}info(...e){this._userLogHandler&&this._userLogHandler(this,Q.INFO,...e),this._logHandler(this,Q.INFO,...e)}warn(...e){this._userLogHandler&&this._userLogHandler(this,Q.WARN,...e),this._logHandler(this,Q.WARN,...e)}error(...e){this._userLogHandler&&this._userLogHandler(this,Q.ERROR,...e),this._logHandler(this,Q.ERROR,...e)}}/**
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
 */class Jp{constructor(e){this.container=e}getPlatformInfoString(){return this.container.getProviders().map(t=>{if(Xp(t)){const r=t.getImmediate();return`${r.library}/${r.version}`}else return null}).filter(t=>t).join(" ")}}function Xp(n){const e=n.getComponent();return(e==null?void 0:e.type)==="VERSION"}const Ho="@firebase/app",Su="0.16.2";/**
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
 */const Pt=new ma("@firebase/app"),Zp="@firebase/app-compat",em="@firebase/analytics-compat",tm="@firebase/analytics",nm="@firebase/app-check-compat",rm="@firebase/app-check",sm="@firebase/auth",im="@firebase/auth-compat",om="@firebase/database",am="@firebase/data-connect",cm="@firebase/database-compat",um="@firebase/functions",lm="@firebase/functions-compat",hm="@firebase/installations",dm="@firebase/installations-compat",fm="@firebase/messaging",pm="@firebase/messaging-compat",mm="@firebase/performance",gm="@firebase/performance-compat",_m="@firebase/remote-config",ym="@firebase/remote-config-compat",Em="@firebase/storage",wm="@firebase/storage-compat",Tm="@firebase/firestore",Im="@firebase/ai",vm="@firebase/firestore-compat",Am="firebase",Rm="12.19.0";/**
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
 */const Go="[DEFAULT]",Pm={[Ho]:"fire-core",[Zp]:"fire-core-compat",[tm]:"fire-analytics",[em]:"fire-analytics-compat",[rm]:"fire-app-check",[nm]:"fire-app-check-compat",[sm]:"fire-auth",[im]:"fire-auth-compat",[om]:"fire-rtdb",[am]:"fire-data-connect",[cm]:"fire-rtdb-compat",[um]:"fire-fn",[lm]:"fire-fn-compat",[hm]:"fire-iid",[dm]:"fire-iid-compat",[fm]:"fire-fcm",[pm]:"fire-fcm-compat",[mm]:"fire-perf",[gm]:"fire-perf-compat",[_m]:"fire-rc",[ym]:"fire-rc-compat",[Em]:"fire-gcs",[wm]:"fire-gcs-compat",[Tm]:"fire-fst",[vm]:"fire-fst-compat",[Im]:"fire-vertex","fire-js":"fire-js",[Am]:"fire-js-all"};/**
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
 */const Jr=new Map,Sm=new Map,Ko=new Map;function Vu(n,e){try{n.container.addComponent(e)}catch(t){Pt.debug(`Component ${e.name} failed to register with FirebaseApp ${n.name}`,t)}}function Hn(n){const e=n.name;if(Ko.has(e))return Pt.debug(`There were multiple attempts to register component ${e}.`),!1;Ko.set(e,n);for(const t of Jr.values())Vu(t,n);for(const t of Sm.values())Vu(t,n);return!0}function ga(n,e){const t=n.container.getProvider("heartbeat").getImmediate({optional:!0});return t&&t.triggerHeartbeat(),n.container.getProvider(e)}function Xe(n){return n==null?!1:n.settings!==void 0}/**
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
 */const Vm={"no-app":"No Firebase App '{$appName}' has been created - call initializeApp() first","bad-app-name":"Illegal App name: '{$appName}'","duplicate-app":"Firebase App named '{$appName}' already exists with different {$mismatchedParam}. Existing: '{$oldValue}'. New: '{$newValue}'.","app-deleted":"Firebase App named '{$appName}' already deleted","server-app-deleted":"Firebase Server App has been deleted","no-options":"Need to provide options, when not being deployed to hosting via source.","invalid-app-argument":"firebase.{$appName}() takes either no argument or a Firebase App instance.","invalid-log-argument":"First argument to `onLog` must be null or a function.","idb-open":"Error thrown when opening IndexedDB. Original error: {$originalErrorMessage}.","idb-get":"Error thrown when reading from IndexedDB. Original error: {$originalErrorMessage}.","idb-set":"Error thrown when writing to IndexedDB. Original error: {$originalErrorMessage}.","idb-delete":"Error thrown when deleting from IndexedDB. Original error: {$originalErrorMessage}.","finalization-registry-not-supported":"FirebaseServerApp deleteOnDeref field defined but the JS runtime does not support FinalizationRegistry.","invalid-server-app-environment":"FirebaseServerApp is not for use in browser environments."},yt=new gs("app","Firebase",Vm);/**
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
 */class Cm{constructor(e,t,r){this._isDeleted=!1,this._options={...e},this._config={...t},this._name=t.name,this._automaticDataCollectionEnabled=t.automaticDataCollectionEnabled,this._container=r,this.container.addComponent(new Rn("app",()=>this,"PUBLIC"))}get automaticDataCollectionEnabled(){return this.checkDestroyed(),this._automaticDataCollectionEnabled}set automaticDataCollectionEnabled(e){this.checkDestroyed(),this._automaticDataCollectionEnabled=e}get name(){return this.checkDestroyed(),this._name}get options(){return this.checkDestroyed(),this._options}get config(){return this.checkDestroyed(),this._config}get container(){return this._container}get isDeleted(){return this._isDeleted}set isDeleted(e){this._isDeleted=e}checkDestroyed(){if(this.isDeleted)throw yt.create("app-deleted",{appName:this._name})}}/**
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
 */const nr=Rm;function bm(n,e={}){let t=n;typeof e!="object"&&(e={name:e});const r={name:Go,automaticDataCollectionEnabled:!0,...e},s=r.name;if(typeof s!="string"||!s)throw yt.create("bad-app-name",{appName:String(s)});if(t||(t=nh()),!t)throw yt.create("no-options");const i=Jr.get(s);if(i)if(An(t,i.options)){if(An(r,i.config))return i;throw yt.create("duplicate-app",{appName:s,mismatchedParam:"config",oldValue:JSON.stringify(i.config),newValue:JSON.stringify(r)})}else throw yt.create("duplicate-app",{appName:s,mismatchedParam:"options",oldValue:JSON.stringify(i.options),newValue:JSON.stringify(t)});const a=new Hp(s);for(const l of Ko.values())a.addComponent(l);const c=new Cm(t,r,a);return Jr.set(s,c),c}function oh(n=Go){const e=Jr.get(n);if(!e&&n===Go&&nh())return bm();if(!e)throw yt.create("no-app",{appName:n});return e}function fv(){return Array.from(Jr.values())}function Wt(n,e,t){let r=Pm[n]??n;t&&(r+=`-${t}`);const s=r.match(/\s|\//),i=e.match(/\s|\//);if(s||i){const a=[`Unable to register library "${r}" with version "${e}":`];s&&a.push(`library name "${r}" contains illegal characters (whitespace or "/")`),s&&i&&a.push("and"),i&&a.push(`version name "${e}" contains illegal characters (whitespace or "/")`),Pt.warn(a.join(" "));return}Hn(new Rn(`${r}-version`,()=>({library:r,version:e}),"VERSION"))}/**
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
 */const Nm="firebase-heartbeat-database",km=1,Xr="firebase-heartbeat-store";let xo=null;function ah(){return xo||(xo=_p(Nm,km,{upgrade:(n,e)=>{switch(e){case 0:try{n.createObjectStore(Xr)}catch(t){console.warn(t)}}}}).catch(n=>{throw yt.create("idb-open",{originalErrorMessage:n.message})})),xo}async function Dm(n){try{const t=(await ah()).transaction(Xr),r=await t.objectStore(Xr).get(ch(n));return await t.done,r}catch(e){if(e instanceof bt)Pt.warn(e.message);else{const t=yt.create("idb-get",{originalErrorMessage:e==null?void 0:e.message});Pt.warn(t.message)}}}async function Cu(n,e){try{const r=(await ah()).transaction(Xr,"readwrite");await r.objectStore(Xr).put(e,ch(n)),await r.done}catch(t){if(t instanceof bt)Pt.warn(t.message);else{const r=yt.create("idb-set",{originalErrorMessage:t==null?void 0:t.message});Pt.warn(r.message)}}}function ch(n){return`${n.name}!${n.options.appId}`}/**
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
 */const xm=1024,Om=30;class Lm{constructor(e){this.container=e,this._heartbeatsCache=null;const t=this.container.getProvider("app").getImmediate();this._storage=new Um(t),this._heartbeatsCachePromise=this._storage.read().then(r=>(this._heartbeatsCache=r,r))}async triggerHeartbeat(){var e,t;try{const s=this.container.getProvider("platform-logger").getImmediate().getPlatformInfoString(),i=bu();if(((e=this._heartbeatsCache)==null?void 0:e.heartbeats)==null&&(this._heartbeatsCache=await this._heartbeatsCachePromise,((t=this._heartbeatsCache)==null?void 0:t.heartbeats)==null)||this._heartbeatsCache.lastSentHeartbeatDate===i||this._heartbeatsCache.heartbeats.some(a=>a.date===i))return;if(this._heartbeatsCache.heartbeats.push({date:i,agent:s}),this._heartbeatsCache.heartbeats.length>Om){const a=Fm(this._heartbeatsCache.heartbeats);this._heartbeatsCache.heartbeats.splice(a,1)}return this._storage.overwrite(this._heartbeatsCache)}catch(r){Pt.warn(r)}}async getHeartbeatsHeader(){var e;try{if(this._heartbeatsCache===null&&await this._heartbeatsCachePromise,((e=this._heartbeatsCache)==null?void 0:e.heartbeats)==null||this._heartbeatsCache.heartbeats.length===0)return"";const t=bu(),{heartbeatsToSend:r,unsentEntries:s}=Mm(this._heartbeatsCache.heartbeats),i=hi(JSON.stringify({version:2,heartbeats:r}));return this._heartbeatsCache.lastSentHeartbeatDate=t,s.length>0?(this._heartbeatsCache.heartbeats=s,await this._storage.overwrite(this._heartbeatsCache)):(this._heartbeatsCache.heartbeats=[],this._storage.overwrite(this._heartbeatsCache)),i}catch(t){return Pt.warn(t),""}}}function bu(){return new Date().toISOString().substring(0,10)}function Mm(n,e=xm){const t=[];let r=n.slice();for(const s of n){const i=t.find(a=>a.agent===s.agent);if(i){if(i.dates.push(s.date),Nu(t)>e){i.dates.pop();break}}else if(t.push({agent:s.agent,dates:[s.date]}),Nu(t)>e){t.pop();break}r=r.slice(1)}return{heartbeatsToSend:t,unsentEntries:r}}class Um{constructor(e){this.app=e,this._canUseIndexedDBPromise=this.runIndexedDBEnvironmentCheck()}async runIndexedDBEnvironmentCheck(){return Op()?Lp().then(()=>!0).catch(()=>!1):!1}async read(){if(await this._canUseIndexedDBPromise){const t=await Dm(this.app);return t!=null&&t.heartbeats?t:{heartbeats:[]}}else return{heartbeats:[]}}async overwrite(e){if(await this._canUseIndexedDBPromise){const r=await this.read();return Cu(this.app,{lastSentHeartbeatDate:e.lastSentHeartbeatDate??r.lastSentHeartbeatDate,heartbeats:e.heartbeats})}else return}async add(e){if(await this._canUseIndexedDBPromise){const r=await this.read();return Cu(this.app,{lastSentHeartbeatDate:e.lastSentHeartbeatDate??r.lastSentHeartbeatDate,heartbeats:[...r.heartbeats,...e.heartbeats]})}else return}}function Nu(n){return hi(JSON.stringify({version:2,heartbeats:n})).length}function Fm(n){if(n.length===0)return-1;let e=0,t=n[0].date;for(let r=1;r<n.length;r++)n[r].date<t&&(t=n[r].date,e=r);return e}/**
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
 */function Bm(n){Hn(new Rn("platform-logger",e=>new Jp(e),"PRIVATE")),Hn(new Rn("heartbeat",e=>new Lm(e),"PRIVATE")),Wt(Ho,Su,n),Wt(Ho,Su,"esm2020"),Wt("fire-js","")}/**
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
 */Bm("");var ku=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{};/** @license
Copyright The Closure Library Authors.
SPDX-License-Identifier: Apache-2.0
*/var zt,uh;(function(){var n;/** @license

 Copyright The Closure Library Authors.
 SPDX-License-Identifier: Apache-2.0
*/function e(I,g){function y(){}y.prototype=g.prototype,I.F=g.prototype,I.prototype=new y,I.prototype.constructor=I,I.D=function(v,T,R){for(var _=Array(arguments.length-2),xe=2;xe<arguments.length;xe++)_[xe-2]=arguments[xe];return g.prototype[T].apply(v,_)}}function t(){this.blockSize=-1}function r(){this.blockSize=-1,this.blockSize=64,this.g=Array(4),this.C=Array(this.blockSize),this.o=this.h=0,this.u()}e(r,t),r.prototype.u=function(){this.g[0]=1732584193,this.g[1]=4023233417,this.g[2]=2562383102,this.g[3]=271733878,this.o=this.h=0};function s(I,g,y){y||(y=0);const v=Array(16);if(typeof g=="string")for(var T=0;T<16;++T)v[T]=g.charCodeAt(y++)|g.charCodeAt(y++)<<8|g.charCodeAt(y++)<<16|g.charCodeAt(y++)<<24;else for(T=0;T<16;++T)v[T]=g[y++]|g[y++]<<8|g[y++]<<16|g[y++]<<24;g=I.g[0],y=I.g[1],T=I.g[2];let R=I.g[3],_;_=g+(R^y&(T^R))+v[0]+3614090360&4294967295,g=y+(_<<7&4294967295|_>>>25),_=R+(T^g&(y^T))+v[1]+3905402710&4294967295,R=g+(_<<12&4294967295|_>>>20),_=T+(y^R&(g^y))+v[2]+606105819&4294967295,T=R+(_<<17&4294967295|_>>>15),_=y+(g^T&(R^g))+v[3]+3250441966&4294967295,y=T+(_<<22&4294967295|_>>>10),_=g+(R^y&(T^R))+v[4]+4118548399&4294967295,g=y+(_<<7&4294967295|_>>>25),_=R+(T^g&(y^T))+v[5]+1200080426&4294967295,R=g+(_<<12&4294967295|_>>>20),_=T+(y^R&(g^y))+v[6]+2821735955&4294967295,T=R+(_<<17&4294967295|_>>>15),_=y+(g^T&(R^g))+v[7]+4249261313&4294967295,y=T+(_<<22&4294967295|_>>>10),_=g+(R^y&(T^R))+v[8]+1770035416&4294967295,g=y+(_<<7&4294967295|_>>>25),_=R+(T^g&(y^T))+v[9]+2336552879&4294967295,R=g+(_<<12&4294967295|_>>>20),_=T+(y^R&(g^y))+v[10]+4294925233&4294967295,T=R+(_<<17&4294967295|_>>>15),_=y+(g^T&(R^g))+v[11]+2304563134&4294967295,y=T+(_<<22&4294967295|_>>>10),_=g+(R^y&(T^R))+v[12]+1804603682&4294967295,g=y+(_<<7&4294967295|_>>>25),_=R+(T^g&(y^T))+v[13]+4254626195&4294967295,R=g+(_<<12&4294967295|_>>>20),_=T+(y^R&(g^y))+v[14]+2792965006&4294967295,T=R+(_<<17&4294967295|_>>>15),_=y+(g^T&(R^g))+v[15]+1236535329&4294967295,y=T+(_<<22&4294967295|_>>>10),_=g+(T^R&(y^T))+v[1]+4129170786&4294967295,g=y+(_<<5&4294967295|_>>>27),_=R+(y^T&(g^y))+v[6]+3225465664&4294967295,R=g+(_<<9&4294967295|_>>>23),_=T+(g^y&(R^g))+v[11]+643717713&4294967295,T=R+(_<<14&4294967295|_>>>18),_=y+(R^g&(T^R))+v[0]+3921069994&4294967295,y=T+(_<<20&4294967295|_>>>12),_=g+(T^R&(y^T))+v[5]+3593408605&4294967295,g=y+(_<<5&4294967295|_>>>27),_=R+(y^T&(g^y))+v[10]+38016083&4294967295,R=g+(_<<9&4294967295|_>>>23),_=T+(g^y&(R^g))+v[15]+3634488961&4294967295,T=R+(_<<14&4294967295|_>>>18),_=y+(R^g&(T^R))+v[4]+3889429448&4294967295,y=T+(_<<20&4294967295|_>>>12),_=g+(T^R&(y^T))+v[9]+568446438&4294967295,g=y+(_<<5&4294967295|_>>>27),_=R+(y^T&(g^y))+v[14]+3275163606&4294967295,R=g+(_<<9&4294967295|_>>>23),_=T+(g^y&(R^g))+v[3]+4107603335&4294967295,T=R+(_<<14&4294967295|_>>>18),_=y+(R^g&(T^R))+v[8]+1163531501&4294967295,y=T+(_<<20&4294967295|_>>>12),_=g+(T^R&(y^T))+v[13]+2850285829&4294967295,g=y+(_<<5&4294967295|_>>>27),_=R+(y^T&(g^y))+v[2]+4243563512&4294967295,R=g+(_<<9&4294967295|_>>>23),_=T+(g^y&(R^g))+v[7]+1735328473&4294967295,T=R+(_<<14&4294967295|_>>>18),_=y+(R^g&(T^R))+v[12]+2368359562&4294967295,y=T+(_<<20&4294967295|_>>>12),_=g+(y^T^R)+v[5]+4294588738&4294967295,g=y+(_<<4&4294967295|_>>>28),_=R+(g^y^T)+v[8]+2272392833&4294967295,R=g+(_<<11&4294967295|_>>>21),_=T+(R^g^y)+v[11]+1839030562&4294967295,T=R+(_<<16&4294967295|_>>>16),_=y+(T^R^g)+v[14]+4259657740&4294967295,y=T+(_<<23&4294967295|_>>>9),_=g+(y^T^R)+v[1]+2763975236&4294967295,g=y+(_<<4&4294967295|_>>>28),_=R+(g^y^T)+v[4]+1272893353&4294967295,R=g+(_<<11&4294967295|_>>>21),_=T+(R^g^y)+v[7]+4139469664&4294967295,T=R+(_<<16&4294967295|_>>>16),_=y+(T^R^g)+v[10]+3200236656&4294967295,y=T+(_<<23&4294967295|_>>>9),_=g+(y^T^R)+v[13]+681279174&4294967295,g=y+(_<<4&4294967295|_>>>28),_=R+(g^y^T)+v[0]+3936430074&4294967295,R=g+(_<<11&4294967295|_>>>21),_=T+(R^g^y)+v[3]+3572445317&4294967295,T=R+(_<<16&4294967295|_>>>16),_=y+(T^R^g)+v[6]+76029189&4294967295,y=T+(_<<23&4294967295|_>>>9),_=g+(y^T^R)+v[9]+3654602809&4294967295,g=y+(_<<4&4294967295|_>>>28),_=R+(g^y^T)+v[12]+3873151461&4294967295,R=g+(_<<11&4294967295|_>>>21),_=T+(R^g^y)+v[15]+530742520&4294967295,T=R+(_<<16&4294967295|_>>>16),_=y+(T^R^g)+v[2]+3299628645&4294967295,y=T+(_<<23&4294967295|_>>>9),_=g+(T^(y|~R))+v[0]+4096336452&4294967295,g=y+(_<<6&4294967295|_>>>26),_=R+(y^(g|~T))+v[7]+1126891415&4294967295,R=g+(_<<10&4294967295|_>>>22),_=T+(g^(R|~y))+v[14]+2878612391&4294967295,T=R+(_<<15&4294967295|_>>>17),_=y+(R^(T|~g))+v[5]+4237533241&4294967295,y=T+(_<<21&4294967295|_>>>11),_=g+(T^(y|~R))+v[12]+1700485571&4294967295,g=y+(_<<6&4294967295|_>>>26),_=R+(y^(g|~T))+v[3]+2399980690&4294967295,R=g+(_<<10&4294967295|_>>>22),_=T+(g^(R|~y))+v[10]+4293915773&4294967295,T=R+(_<<15&4294967295|_>>>17),_=y+(R^(T|~g))+v[1]+2240044497&4294967295,y=T+(_<<21&4294967295|_>>>11),_=g+(T^(y|~R))+v[8]+1873313359&4294967295,g=y+(_<<6&4294967295|_>>>26),_=R+(y^(g|~T))+v[15]+4264355552&4294967295,R=g+(_<<10&4294967295|_>>>22),_=T+(g^(R|~y))+v[6]+2734768916&4294967295,T=R+(_<<15&4294967295|_>>>17),_=y+(R^(T|~g))+v[13]+1309151649&4294967295,y=T+(_<<21&4294967295|_>>>11),_=g+(T^(y|~R))+v[4]+4149444226&4294967295,g=y+(_<<6&4294967295|_>>>26),_=R+(y^(g|~T))+v[11]+3174756917&4294967295,R=g+(_<<10&4294967295|_>>>22),_=T+(g^(R|~y))+v[2]+718787259&4294967295,T=R+(_<<15&4294967295|_>>>17),_=y+(R^(T|~g))+v[9]+3951481745&4294967295,I.g[0]=I.g[0]+g&4294967295,I.g[1]=I.g[1]+(T+(_<<21&4294967295|_>>>11))&4294967295,I.g[2]=I.g[2]+T&4294967295,I.g[3]=I.g[3]+R&4294967295}r.prototype.v=function(I,g){g===void 0&&(g=I.length);const y=g-this.blockSize,v=this.C;let T=this.h,R=0;for(;R<g;){if(T==0)for(;R<=y;)s(this,I,R),R+=this.blockSize;if(typeof I=="string"){for(;R<g;)if(v[T++]=I.charCodeAt(R++),T==this.blockSize){s(this,v),T=0;break}}else for(;R<g;)if(v[T++]=I[R++],T==this.blockSize){s(this,v),T=0;break}}this.h=T,this.o+=g},r.prototype.A=function(){var I=Array((this.h<56?this.blockSize:this.blockSize*2)-this.h);I[0]=128;for(var g=1;g<I.length-8;++g)I[g]=0;g=this.o*8;for(var y=I.length-8;y<I.length;++y)I[y]=g&255,g/=256;for(this.v(I),I=Array(16),g=0,y=0;y<4;++y)for(let v=0;v<32;v+=8)I[g++]=this.g[y]>>>v&255;return I};function i(I,g){var y=c;return Object.prototype.hasOwnProperty.call(y,I)?y[I]:y[I]=g(I)}function a(I,g){this.h=g;const y=[];let v=!0;for(let T=I.length-1;T>=0;T--){const R=I[T]|0;v&&R==g||(y[T]=R,v=!1)}this.g=y}var c={};function l(I){return-128<=I&&I<128?i(I,function(g){return new a([g|0],g<0?-1:0)}):new a([I|0],I<0?-1:0)}function h(I){if(isNaN(I)||!isFinite(I))return m;if(I<0)return L(h(-I));const g=[];let y=1;for(let v=0;I>=y;v++)g[v]=I/y|0,y*=4294967296;return new a(g,0)}function f(I,g){if(I.length==0)throw Error("number format error: empty string");if(g=g||10,g<2||36<g)throw Error("radix out of range: "+g);if(I.charAt(0)=="-")return L(f(I.substring(1),g));if(I.indexOf("-")>=0)throw Error('number format error: interior "-" character');const y=h(Math.pow(g,8));let v=m;for(let R=0;R<I.length;R+=8){var T=Math.min(8,I.length-R);const _=parseInt(I.substring(R,R+T),g);T<8?(T=h(Math.pow(g,T)),v=v.j(T).add(h(_))):(v=v.j(y),v=v.add(h(_)))}return v}var m=l(0),E=l(1),V=l(16777216);n=a.prototype,n.m=function(){if(U(this))return-L(this).m();let I=0,g=1;for(let y=0;y<this.g.length;y++){const v=this.i(y);I+=(v>=0?v:4294967296+v)*g,g*=4294967296}return I},n.toString=function(I){if(I=I||10,I<2||36<I)throw Error("radix out of range: "+I);if(N(this))return"0";if(U(this))return"-"+L(this).toString(I);const g=h(Math.pow(I,6));var y=this;let v="";for(;;){const T=Je(y,g).g;y=H(y,T.j(g));let R=((y.g.length>0?y.g[0]:y.h)>>>0).toString(I);if(y=T,N(y))return R+v;for(;R.length<6;)R="0"+R;v=R+v}},n.i=function(I){return I<0?0:I<this.g.length?this.g[I]:this.h};function N(I){if(I.h!=0)return!1;for(let g=0;g<I.g.length;g++)if(I.g[g]!=0)return!1;return!0}function U(I){return I.h==-1}n.l=function(I){return I=H(this,I),U(I)?-1:N(I)?0:1};function L(I){const g=I.g.length,y=[];for(let v=0;v<g;v++)y[v]=~I.g[v];return new a(y,~I.h).add(E)}n.abs=function(){return U(this)?L(this):this},n.add=function(I){const g=Math.max(this.g.length,I.g.length),y=[];let v=0;for(let T=0;T<=g;T++){let R=v+(this.i(T)&65535)+(I.i(T)&65535),_=(R>>>16)+(this.i(T)>>>16)+(I.i(T)>>>16);v=_>>>16,R&=65535,_&=65535,y[T]=_<<16|R}return new a(y,y[y.length-1]&-2147483648?-1:0)};function H(I,g){return I.add(L(g))}n.j=function(I){if(N(this)||N(I))return m;if(U(this))return U(I)?L(this).j(L(I)):L(L(this).j(I));if(U(I))return L(this.j(L(I)));if(this.l(V)<0&&I.l(V)<0)return h(this.m()*I.m());const g=this.g.length+I.g.length,y=[];for(var v=0;v<2*g;v++)y[v]=0;for(v=0;v<this.g.length;v++)for(let T=0;T<I.g.length;T++){const R=this.i(v)>>>16,_=this.i(v)&65535,xe=I.i(T)>>>16,ln=I.i(T)&65535;y[2*v+2*T]+=_*ln,J(y,2*v+2*T),y[2*v+2*T+1]+=R*ln,J(y,2*v+2*T+1),y[2*v+2*T+1]+=_*xe,J(y,2*v+2*T+1),y[2*v+2*T+2]+=R*xe,J(y,2*v+2*T+2)}for(I=0;I<g;I++)y[I]=y[2*I+1]<<16|y[2*I];for(I=g;I<2*g;I++)y[I]=0;return new a(y,0)};function J(I,g){for(;(I[g]&65535)!=I[g];)I[g+1]+=I[g]>>>16,I[g]&=65535,g++}function ie(I,g){this.g=I,this.h=g}function Je(I,g){if(N(g))throw Error("division by zero");if(N(I))return new ie(m,m);if(U(I))return g=Je(L(I),g),new ie(L(g.g),L(g.h));if(U(g))return g=Je(I,L(g)),new ie(L(g.g),g.h);if(I.g.length>30){if(U(I)||U(g))throw Error("slowDivide_ only works with positive integers.");for(var y=E,v=g;v.l(I)<=0;)y=Ie(y),v=Ie(v);var T=ve(y,1),R=ve(v,1);for(v=ve(v,2),y=ve(y,2);!N(v);){var _=R.add(v);_.l(I)<=0&&(T=T.add(y),R=_),v=ve(v,1),y=ve(y,1)}return g=H(I,T.j(g)),new ie(T,g)}for(T=m;I.l(g)>=0;){for(y=Math.max(1,Math.floor(I.m()/g.m())),v=Math.ceil(Math.log(y)/Math.LN2),v=v<=48?1:Math.pow(2,v-48),R=h(y),_=R.j(g);U(_)||_.l(I)>0;)y-=v,R=h(y),_=R.j(g);N(R)&&(R=E),T=T.add(R),I=H(I,_)}return new ie(T,I)}n.B=function(I){return Je(this,I).h},n.and=function(I){const g=Math.max(this.g.length,I.g.length),y=[];for(let v=0;v<g;v++)y[v]=this.i(v)&I.i(v);return new a(y,this.h&I.h)},n.or=function(I){const g=Math.max(this.g.length,I.g.length),y=[];for(let v=0;v<g;v++)y[v]=this.i(v)|I.i(v);return new a(y,this.h|I.h)},n.xor=function(I){const g=Math.max(this.g.length,I.g.length),y=[];for(let v=0;v<g;v++)y[v]=this.i(v)^I.i(v);return new a(y,this.h^I.h)};function Ie(I){const g=I.g.length+1,y=[];for(let v=0;v<g;v++)y[v]=I.i(v)<<1|I.i(v-1)>>>31;return new a(y,I.h)}function ve(I,g){const y=g>>5;g%=32;const v=I.g.length-y,T=[];for(let R=0;R<v;R++)T[R]=g>0?I.i(R+y)>>>g|I.i(R+y+1)<<32-g:I.i(R+y);return new a(T,I.h)}r.prototype.digest=r.prototype.A,r.prototype.reset=r.prototype.u,r.prototype.update=r.prototype.v,uh=r,a.prototype.add=a.prototype.add,a.prototype.multiply=a.prototype.j,a.prototype.modulo=a.prototype.B,a.prototype.compare=a.prototype.l,a.prototype.toNumber=a.prototype.m,a.prototype.toString=a.prototype.toString,a.prototype.getBits=a.prototype.i,a.fromNumber=h,a.fromString=f,zt=a}).apply(typeof ku<"u"?ku:typeof self<"u"?self:typeof window<"u"?window:{});var Hs=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{};/** @license
Copyright The Closure Library Authors.
SPDX-License-Identifier: Apache-2.0
*/var lh,xr,hh,Zs,Qo,dh,fh,ph;(function(){var n,e=Object.defineProperty;function t(o){o=[typeof globalThis=="object"&&globalThis,o,typeof window=="object"&&window,typeof self=="object"&&self,typeof Hs=="object"&&Hs];for(var u=0;u<o.length;++u){var d=o[u];if(d&&d.Math==Math)return d}throw Error("Cannot find global object")}var r=t(this);function s(o,u){if(u)e:{var d=r;o=o.split(".");for(var p=0;p<o.length-1;p++){var A=o[p];if(!(A in d))break e;d=d[A]}o=o[o.length-1],p=d[o],u=u(p),u!=p&&u!=null&&e(d,o,{configurable:!0,writable:!0,value:u})}}s("Symbol.dispose",function(o){return o||Symbol("Symbol.dispose")}),s("Array.prototype.values",function(o){return o||function(){return this[Symbol.iterator]()}}),s("Object.entries",function(o){return o||function(u){var d=[],p;for(p in u)Object.prototype.hasOwnProperty.call(u,p)&&d.push([p,u[p]]);return d}});/** @license

 Copyright The Closure Library Authors.
 SPDX-License-Identifier: Apache-2.0
*/var i=i||{},a=this||self;function c(o){var u=typeof o;return u=="object"&&o!=null||u=="function"}function l(o,u,d){return o.call.apply(o.bind,arguments)}function h(o,u,d){return h=l,h.apply(null,arguments)}function f(o,u){var d=Array.prototype.slice.call(arguments,1);return function(){var p=d.slice();return p.push.apply(p,arguments),o.apply(this,p)}}function m(o,u){function d(){}d.prototype=u.prototype,o.Z=u.prototype,o.prototype=new d,o.prototype.constructor=o,o.Ob=function(p,A,P){for(var x=Array(arguments.length-2),z=2;z<arguments.length;z++)x[z-2]=arguments[z];return u.prototype[A].apply(p,x)}}var E=typeof AsyncContext<"u"&&typeof AsyncContext.Snapshot=="function"?o=>o&&AsyncContext.Snapshot.wrap(o):o=>o;function V(o){const u=o.length;if(u>0){const d=Array(u);for(let p=0;p<u;p++)d[p]=o[p];return d}return[]}function N(o,u){for(let p=1;p<arguments.length;p++){const A=arguments[p];var d=typeof A;if(d=d!="object"?d:A?Array.isArray(A)?"array":d:"null",d=="array"||d=="object"&&typeof A.length=="number"){d=o.length||0;const P=A.length||0;o.length=d+P;for(let x=0;x<P;x++)o[d+x]=A[x]}else o.push(A)}}class U{constructor(u,d){this.i=u,this.j=d,this.h=0,this.g=null}get(){let u;return this.h>0?(this.h--,u=this.g,this.g=u.next,u.next=null):u=this.i(),u}}function L(o){a.setTimeout(()=>{throw o},0)}function H(){var o=I;let u=null;return o.g&&(u=o.g,o.g=o.g.next,o.g||(o.h=null),u.next=null),u}class J{constructor(){this.h=this.g=null}add(u,d){const p=ie.get();p.set(u,d),this.h?this.h.next=p:this.g=p,this.h=p}}var ie=new U(()=>new Je,o=>o.reset());class Je{constructor(){this.next=this.g=this.h=null}set(u,d){this.h=u,this.g=d,this.next=null}reset(){this.next=this.g=this.h=null}}let Ie,ve=!1,I=new J,g=()=>{const o=Promise.resolve(void 0);Ie=()=>{o.then(y)}};function y(){for(var o;o=H();){try{o.h.call(o.g)}catch(d){L(d)}var u=ie;u.j(o),u.h<100&&(u.h++,o.next=u.g,u.g=o)}ve=!1}function v(){this.u=this.u,this.C=this.C}v.prototype.u=!1,v.prototype.dispose=function(){this.u||(this.u=!0,this.N())},v.prototype[Symbol.dispose]=function(){this.dispose()},v.prototype.N=function(){if(this.C)for(;this.C.length;)this.C.shift()()};function T(o,u){this.type=o,this.g=this.target=u,this.defaultPrevented=!1}T.prototype.h=function(){this.defaultPrevented=!0};var R=function(){if(!a.addEventListener||!Object.defineProperty)return!1;var o=!1,u=Object.defineProperty({},"passive",{get:function(){o=!0}});try{const d=()=>{};a.addEventListener("test",d,u),a.removeEventListener("test",d,u)}catch{}return o}();function _(o){return/^[\s\xa0]*$/.test(o)}function xe(o,u){T.call(this,o?o.type:""),this.relatedTarget=this.g=this.target=null,this.button=this.screenY=this.screenX=this.clientY=this.clientX=0,this.key="",this.metaKey=this.shiftKey=this.altKey=this.ctrlKey=!1,this.state=null,this.pointerId=0,this.pointerType="",this.i=null,o&&this.init(o,u)}m(xe,T),xe.prototype.init=function(o,u){const d=this.type=o.type,p=o.changedTouches&&o.changedTouches.length?o.changedTouches[0]:null;this.target=o.target||o.srcElement,this.g=u,u=o.relatedTarget,u||(d=="mouseover"?u=o.fromElement:d=="mouseout"&&(u=o.toElement)),this.relatedTarget=u,p?(this.clientX=p.clientX!==void 0?p.clientX:p.pageX,this.clientY=p.clientY!==void 0?p.clientY:p.pageY,this.screenX=p.screenX||0,this.screenY=p.screenY||0):(this.clientX=o.clientX!==void 0?o.clientX:o.pageX,this.clientY=o.clientY!==void 0?o.clientY:o.pageY,this.screenX=o.screenX||0,this.screenY=o.screenY||0),this.button=o.button,this.key=o.key||"",this.ctrlKey=o.ctrlKey,this.altKey=o.altKey,this.shiftKey=o.shiftKey,this.metaKey=o.metaKey,this.pointerId=o.pointerId||0,this.pointerType=o.pointerType,this.state=o.state,this.i=o,o.defaultPrevented&&xe.Z.h.call(this)},xe.prototype.h=function(){xe.Z.h.call(this);const o=this.i;o.preventDefault?o.preventDefault():o.returnValue=!1};var ln="closure_listenable_"+(Math.random()*1e6|0),Ff=0;function Bf(o,u,d,p,A){this.listener=o,this.proxy=null,this.src=u,this.type=d,this.capture=!!p,this.ha=A,this.key=++Ff,this.da=this.fa=!1}function Ns(o){o.da=!0,o.listener=null,o.proxy=null,o.src=null,o.ha=null}function ks(o,u,d){for(const p in o)u.call(d,o[p],p,o)}function qf(o,u){for(const d in o)u.call(void 0,o[d],d,o)}function Ac(o){const u={};for(const d in o)u[d]=o[d];return u}const Rc="constructor hasOwnProperty isPrototypeOf propertyIsEnumerable toLocaleString toString valueOf".split(" ");function Pc(o,u){let d,p;for(let A=1;A<arguments.length;A++){p=arguments[A];for(d in p)o[d]=p[d];for(let P=0;P<Rc.length;P++)d=Rc[P],Object.prototype.hasOwnProperty.call(p,d)&&(o[d]=p[d])}}function Ds(o){this.src=o,this.g={},this.h=0}Ds.prototype.add=function(o,u,d,p,A){const P=o.toString();o=this.g[P],o||(o=this.g[P]=[],this.h++);const x=uo(o,u,p,A);return x>-1?(u=o[x],d||(u.fa=!1)):(u=new Bf(u,this.src,P,!!p,A),u.fa=d,o.push(u)),u};function co(o,u){const d=u.type;if(d in o.g){var p=o.g[d],A=Array.prototype.indexOf.call(p,u,void 0),P;(P=A>=0)&&Array.prototype.splice.call(p,A,1),P&&(Ns(u),o.g[d].length==0&&(delete o.g[d],o.h--))}}function uo(o,u,d,p){for(let A=0;A<o.length;++A){const P=o[A];if(!P.da&&P.listener==u&&P.capture==!!d&&P.ha==p)return A}return-1}var lo="closure_lm_"+(Math.random()*1e6|0),ho={};function Sc(o,u,d,p,A){if(Array.isArray(u)){for(let P=0;P<u.length;P++)Sc(o,u[P],d,p,A);return null}return d=bc(d),o&&o[ln]?o.J(u,d,c(p)?!!p.capture:!1,A):$f(o,u,d,!1,p,A)}function $f(o,u,d,p,A,P){if(!u)throw Error("Invalid event type");const x=c(A)?!!A.capture:!!A;let z=po(o);if(z||(o[lo]=z=new Ds(o)),d=z.add(u,d,p,x,P),d.proxy)return d;if(p=jf(),d.proxy=p,p.src=o,p.listener=d,o.addEventListener)R||(A=x),A===void 0&&(A=!1),o.addEventListener(u.toString(),p,A);else if(o.attachEvent)o.attachEvent(Cc(u.toString()),p);else if(o.addListener&&o.removeListener)o.addListener(p);else throw Error("addEventListener and attachEvent are unavailable.");return d}function jf(){function o(d){return u.call(o.src,o.listener,d)}const u=Wf;return o}function Vc(o,u,d,p,A){if(Array.isArray(u))for(var P=0;P<u.length;P++)Vc(o,u[P],d,p,A);else p=c(p)?!!p.capture:!!p,d=bc(d),o&&o[ln]?(o=o.i,P=String(u).toString(),P in o.g&&(u=o.g[P],d=uo(u,d,p,A),d>-1&&(Ns(u[d]),Array.prototype.splice.call(u,d,1),u.length==0&&(delete o.g[P],o.h--)))):o&&(o=po(o))&&(u=o.g[u.toString()],o=-1,u&&(o=uo(u,d,p,A)),(d=o>-1?u[o]:null)&&fo(d))}function fo(o){if(typeof o!="number"&&o&&!o.da){var u=o.src;if(u&&u[ln])co(u.i,o);else{var d=o.type,p=o.proxy;u.removeEventListener?u.removeEventListener(d,p,o.capture):u.detachEvent?u.detachEvent(Cc(d),p):u.addListener&&u.removeListener&&u.removeListener(p),(d=po(u))?(co(d,o),d.h==0&&(d.src=null,u[lo]=null)):Ns(o)}}}function Cc(o){return o in ho?ho[o]:ho[o]="on"+o}function Wf(o,u){if(o.da)o=!0;else{u=new xe(u,this);const d=o.listener,p=o.ha||o.src;o.fa&&fo(o),o=d.call(p,u)}return o}function po(o){return o=o[lo],o instanceof Ds?o:null}var mo="__closure_events_fn_"+(Math.random()*1e9>>>0);function bc(o){return typeof o=="function"?o:(o[mo]||(o[mo]=function(u){return o.handleEvent(u)}),o[mo])}function Ae(){v.call(this),this.i=new Ds(this),this.M=this,this.G=null}m(Ae,v),Ae.prototype[ln]=!0,Ae.prototype.removeEventListener=function(o,u,d,p){Vc(this,o,u,d,p)};function be(o,u){var d,p=o.G;if(p)for(d=[];p;p=p.G)d.push(p);if(o=o.M,p=u.type||u,typeof u=="string")u=new T(u,o);else if(u instanceof T)u.target=u.target||o;else{var A=u;u=new T(p,o),Pc(u,A)}A=!0;let P,x;if(d)for(x=d.length-1;x>=0;x--)P=u.g=d[x],A=xs(P,p,!0,u)&&A;if(P=u.g=o,A=xs(P,p,!0,u)&&A,A=xs(P,p,!1,u)&&A,d)for(x=0;x<d.length;x++)P=u.g=d[x],A=xs(P,p,!1,u)&&A}Ae.prototype.N=function(){if(Ae.Z.N.call(this),this.i){var o=this.i;for(const u in o.g){const d=o.g[u];for(let p=0;p<d.length;p++)Ns(d[p]);delete o.g[u],o.h--}}this.G=null},Ae.prototype.J=function(o,u,d,p){return this.i.add(String(o),u,!1,d,p)},Ae.prototype.K=function(o,u,d,p){return this.i.add(String(o),u,!0,d,p)};function xs(o,u,d,p){if(u=o.i.g[String(u)],!u)return!0;u=u.concat();let A=!0;for(let P=0;P<u.length;++P){const x=u[P];if(x&&!x.da&&x.capture==d){const z=x.listener,me=x.ha||x.src;x.fa&&co(o.i,x),A=z.call(me,p)!==!1&&A}}return A&&!p.defaultPrevented}function zf(o,u){if(typeof o!="function")if(o&&typeof o.handleEvent=="function")o=h(o.handleEvent,o);else throw Error("Invalid listener argument");return Number(u)>2147483647?-1:a.setTimeout(o,u||0)}function Nc(o){o.g=zf(()=>{o.g=null,o.i&&(o.i=!1,Nc(o))},o.l);const u=o.h;o.h=null,o.m.apply(null,u)}class Hf extends v{constructor(u,d){super(),this.m=u,this.l=d,this.h=null,this.i=!1,this.g=null}j(u){this.h=arguments,this.g?this.i=!0:Nc(this)}N(){super.N(),this.g&&(a.clearTimeout(this.g),this.g=null,this.i=!1,this.h=null)}}function fr(o){v.call(this),this.h=o,this.g={}}m(fr,v);var kc=[];function Dc(o){ks(o.g,function(u,d){this.g.hasOwnProperty(d)&&fo(u)},o),o.g={}}fr.prototype.N=function(){fr.Z.N.call(this),Dc(this)},fr.prototype.handleEvent=function(){throw Error("EventHandler.handleEvent not implemented")};var go=a.JSON.stringify,Gf=a.JSON.parse,Kf=class{stringify(o){return a.JSON.stringify(o,void 0)}parse(o){return a.JSON.parse(o,void 0)}};function xc(){}function Oc(){}var pr={OPEN:"a",hb:"b",ERROR:"c",tb:"d"};function _o(){T.call(this,"d")}m(_o,T);function yo(){T.call(this,"c")}m(yo,T);var hn={},Lc=null;function Os(){return Lc=Lc||new Ae}hn.Ia="serverreachability";function Mc(o){T.call(this,hn.Ia,o)}m(Mc,T);function mr(o){const u=Os();be(u,new Mc(u))}hn.STAT_EVENT="statevent";function Uc(o,u){T.call(this,hn.STAT_EVENT,o),this.stat=u}m(Uc,T);function Ne(o){const u=Os();be(u,new Uc(u,o))}hn.Ja="timingevent";function Fc(o,u){T.call(this,hn.Ja,o),this.size=u}m(Fc,T);function gr(o,u){if(typeof o!="function")throw Error("Fn must not be null and must be a function");return a.setTimeout(function(){o()},u)}function _r(){this.g=!0}_r.prototype.ua=function(){this.g=!1};function Qf(o,u,d,p,A,P){o.info(function(){if(o.g)if(P){var x="",z=P.split("&");for(let ee=0;ee<z.length;ee++){var me=z[ee].split("=");if(me.length>1){const _e=me[0];me=me[1];const at=_e.split("_");x=at.length>=2&&at[1]=="type"?x+(_e+"="+me+"&"):x+(_e+"=redacted&")}}}else x=null;else x=P;return"XMLHTTP REQ ("+p+") [attempt "+A+"]: "+u+`
`+d+`
`+x})}function Yf(o,u,d,p,A,P,x){o.info(function(){return"XMLHTTP RESP ("+p+") [ attempt "+A+"]: "+u+`
`+d+`
`+P+" "+x})}function Dn(o,u,d,p){o.info(function(){return"XMLHTTP TEXT ("+u+"): "+Xf(o,d)+(p?" "+p:"")})}function Jf(o,u){o.info(function(){return"TIMEOUT: "+u})}_r.prototype.info=function(){};function Xf(o,u){if(!o.g)return u;if(!u)return null;try{const P=JSON.parse(u);if(P){for(o=0;o<P.length;o++)if(Array.isArray(P[o])){var d=P[o];if(!(d.length<2)){var p=d[1];if(Array.isArray(p)&&!(p.length<1)){var A=p[0];if(A!="noop"&&A!="stop"&&A!="close")for(let x=1;x<p.length;x++)p[x]=""}}}}return go(P)}catch{return u}}var Ls={NO_ERROR:0,cb:1,qb:2,pb:3,kb:4,ob:5,rb:6,Ga:7,TIMEOUT:8,ub:9},Bc={ib:"complete",Fb:"success",ERROR:"error",Ga:"abort",xb:"ready",yb:"readystatechange",TIMEOUT:"timeout",sb:"incrementaldata",wb:"progress",lb:"downloadprogress",Nb:"uploadprogress"},qc;function Eo(){}m(Eo,xc),Eo.prototype.g=function(){return new XMLHttpRequest},qc=new Eo;function yr(o){return encodeURIComponent(String(o))}function Zf(o){var u=1;o=o.split(":");const d=[];for(;u>0&&o.length;)d.push(o.shift()),u--;return o.length&&d.push(o.join(":")),d}function kt(o,u,d,p){this.j=o,this.i=u,this.l=d,this.S=p||1,this.V=new fr(this),this.H=45e3,this.J=null,this.o=!1,this.u=this.B=this.A=this.M=this.F=this.T=this.D=null,this.G=[],this.g=null,this.C=0,this.m=this.v=null,this.X=-1,this.K=!1,this.P=0,this.O=null,this.W=this.L=this.U=this.R=!1,this.h=new $c}function $c(){this.i=null,this.g="",this.h=!1}var jc={},wo={};function To(o,u,d){o.M=1,o.A=Us(ot(u)),o.u=d,o.R=!0,Wc(o,null)}function Wc(o,u){o.F=Date.now(),Ms(o),o.B=ot(o.A);var d=o.B,p=o.S;Array.isArray(p)||(p=[String(p)]),ru(d.i,"t",p),o.C=0,d=o.j.L,o.h=new $c,o.g=Tu(o.j,d?u:null,!o.u),o.P>0&&(o.O=new Hf(h(o.Y,o,o.g),o.P)),u=o.V,d=o.g,p=o.ba;var A="readystatechange";Array.isArray(A)||(A&&(kc[0]=A.toString()),A=kc);for(let P=0;P<A.length;P++){const x=Sc(d,A[P],p||u.handleEvent,!1,u.h||u);if(!x)break;u.g[x.key]=x}u=o.J?Ac(o.J):{},o.u?(o.v||(o.v="POST"),u["Content-Type"]="application/x-www-form-urlencoded",o.g.ea(o.B,o.v,o.u,u)):(o.v="GET",o.g.ea(o.B,o.v,null,u)),mr(),Qf(o.i,o.v,o.B,o.l,o.S,o.u)}kt.prototype.ba=function(o){o=o.target;const u=this.O;u&&Ot(o)==3?u.j():this.Y(o)},kt.prototype.Y=function(o){try{if(o==this.g)e:{const z=Ot(this.g),me=this.g.ya(),ee=this.g.ca();if(!(z<3)&&(z!=3||this.g&&(this.h.h||this.g.la()||lu(this.g)))){this.K||z!=4||me==7||(me==8||ee<=0?mr(3):mr(2)),Io(this);var u=this.g.ca();this.X=u;var d=ep(this);if(this.o=u==200,Yf(this.i,this.v,this.B,this.l,this.S,z,u),this.o){if(this.U&&!this.L){t:{if(this.g){var p,A=this.g;if((p=A.g?A.g.getResponseHeader("X-HTTP-Initial-Response"):null)&&!_(p)){var P=p;break t}}P=null}if(o=P)Dn(this.i,this.l,o,"Initial handshake response via X-HTTP-Initial-Response"),this.L=!0,vo(this,o);else{this.o=!1,this.m=3,Ne(12),dn(this),Er(this);break e}}if(this.R){o=!0;let _e;for(;!this.K&&this.C<d.length;)if(_e=tp(this,d),_e==wo){z==4&&(this.m=4,Ne(14),o=!1),Dn(this.i,this.l,null,"[Incomplete Response]");break}else if(_e==jc){this.m=4,Ne(15),Dn(this.i,this.l,d,"[Invalid Chunk]"),o=!1;break}else Dn(this.i,this.l,_e,null),vo(this,_e);if(zc(this)&&this.C!=0&&(this.h.g=this.h.g.slice(this.C),this.C=0),z!=4||d.length!=0||this.h.h||(this.m=1,Ne(16),o=!1),this.o=this.o&&o,!o)Dn(this.i,this.l,d,"[Invalid Chunked Response]"),dn(this),Er(this);else if(d.length>0&&!this.W){this.W=!0;var x=this.j;x.g==this&&x.aa&&!x.P&&(x.j.info("Great, no buffering proxy detected. Bytes received: "+d.length),No(x),x.P=!0,Ne(11))}}else Dn(this.i,this.l,d,null),vo(this,d);z==4&&dn(this),this.o&&!this.K&&(z==4?_u(this.j,this):(this.o=!1,Ms(this)))}else mp(this.g),u==400&&d.indexOf("Unknown SID")>0?(this.m=3,Ne(12)):(this.m=0,Ne(13)),dn(this),Er(this)}}}catch{}finally{}};function ep(o){if(!zc(o))return o.g.la();const u=lu(o.g);if(u==="")return"";let d="";const p=u.length,A=Ot(o.g)==4;if(!o.h.i){if(typeof TextDecoder>"u")return dn(o),Er(o),"";o.h.i=new a.TextDecoder}for(let P=0;P<p;P++)o.h.h=!0,d+=o.h.i.decode(u[P],{stream:!(A&&P==p-1)});return u.length=0,o.h.g+=d,o.C=0,o.h.g}function zc(o){return o.g?o.v=="GET"&&o.M!=2&&o.j.Aa:!1}function tp(o,u){var d=o.C,p=u.indexOf(`
`,d);return p==-1?wo:(d=Number(u.substring(d,p)),isNaN(d)?jc:(p+=1,p+d>u.length?wo:(u=u.slice(p,p+d),o.C=p+d,u)))}kt.prototype.cancel=function(){this.K=!0,dn(this)};function Ms(o){o.T=Date.now()+o.H,Hc(o,o.H)}function Hc(o,u){if(o.D!=null)throw Error("WatchDog timer not null");o.D=gr(h(o.aa,o),u)}function Io(o){o.D&&(a.clearTimeout(o.D),o.D=null)}kt.prototype.aa=function(){this.D=null;const o=Date.now();o-this.T>=0?(Jf(this.i,this.B),this.M!=2&&(mr(),Ne(17)),dn(this),this.m=2,Er(this)):Hc(this,this.T-o)};function Er(o){o.j.I==0||o.K||_u(o.j,o)}function dn(o){Io(o);var u=o.O;u&&typeof u.dispose=="function"&&u.dispose(),o.O=null,Dc(o.V),o.g&&(u=o.g,o.g=null,u.abort(),u.dispose())}function vo(o,u){try{var d=o.j;if(d.I!=0&&(d.g==o||Ao(d.h,o))){if(!o.L&&Ao(d.h,o)&&d.I==3){try{var p=d.Ba.g.parse(u)}catch{p=null}if(Array.isArray(p)&&p.length==3){var A=p;if(A[0]==0){e:if(!d.v){if(d.g)if(d.g.F+3e3<o.F)js(d),qs(d);else break e;bo(d),Ne(18)}}else d.xa=A[1],0<d.xa-d.K&&A[2]<37500&&d.F&&d.A==0&&!d.C&&(d.C=gr(h(d.Va,d),6e3));Qc(d.h)<=1&&d.ta&&(d.ta=void 0)}else pn(d,11)}else if((o.L||d.g==o)&&js(d),!_(u))for(A=d.Ba.g.parse(u),u=0;u<A.length;u++){let ee=A[u];const _e=ee[0];if(!(_e<=d.K))if(d.K=_e,ee=ee[1],d.I==2)if(ee[0]=="c"){d.M=ee[1],d.ba=ee[2];const at=ee[3];at!=null&&(d.ka=at,d.j.info("VER="+d.ka));const mn=ee[4];mn!=null&&(d.za=mn,d.j.info("SVER="+d.za));const Lt=ee[5];Lt!=null&&typeof Lt=="number"&&Lt>0&&(p=1.5*Lt,d.O=p,d.j.info("backChannelRequestTimeoutMs_="+p)),p=d;const Mt=o.g;if(Mt){const zs=Mt.g?Mt.g.getResponseHeader("X-Client-Wire-Protocol"):null;if(zs){var P=p.h;P.g||zs.indexOf("spdy")==-1&&zs.indexOf("quic")==-1&&zs.indexOf("h2")==-1||(P.j=P.l,P.g=new Set,P.h&&(Ro(P,P.h),P.h=null))}if(p.G){const ko=Mt.g?Mt.g.getResponseHeader("X-HTTP-Session-Id"):null;ko&&(p.wa=ko,te(p.J,p.G,ko))}}d.I=3,d.l&&d.l.ra(),d.aa&&(d.T=Date.now()-o.F,d.j.info("Handshake RTT: "+d.T+"ms")),p=d;var x=o;if(p.na=wu(p,p.L?p.ba:null,p.W),x.L){Yc(p.h,x);var z=x,me=p.O;me&&(z.H=me),z.D&&(Io(z),Ms(z)),p.g=x}else mu(p);d.i.length>0&&$s(d)}else ee[0]!="stop"&&ee[0]!="close"||pn(d,7);else d.I==3&&(ee[0]=="stop"||ee[0]=="close"?ee[0]=="stop"?pn(d,7):Co(d):ee[0]!="noop"&&d.l&&d.l.qa(ee),d.A=0)}}mr(4)}catch{}}var np=class{constructor(o,u){this.g=o,this.map=u}};function Gc(o){this.l=o||10,a.PerformanceNavigationTiming?(o=a.performance.getEntriesByType("navigation"),o=o.length>0&&(o[0].nextHopProtocol=="hq"||o[0].nextHopProtocol=="h2")):o=!!(a.chrome&&a.chrome.loadTimes&&a.chrome.loadTimes()&&a.chrome.loadTimes().wasFetchedViaSpdy),this.j=o?this.l:1,this.g=null,this.j>1&&(this.g=new Set),this.h=null,this.i=[]}function Kc(o){return o.h?!0:o.g?o.g.size>=o.j:!1}function Qc(o){return o.h?1:o.g?o.g.size:0}function Ao(o,u){return o.h?o.h==u:o.g?o.g.has(u):!1}function Ro(o,u){o.g?o.g.add(u):o.h=u}function Yc(o,u){o.h&&o.h==u?o.h=null:o.g&&o.g.has(u)&&o.g.delete(u)}Gc.prototype.cancel=function(){if(this.i=Jc(this),this.h)this.h.cancel(),this.h=null;else if(this.g&&this.g.size!==0){for(const o of this.g.values())o.cancel();this.g.clear()}};function Jc(o){if(o.h!=null)return o.i.concat(o.h.G);if(o.g!=null&&o.g.size!==0){let u=o.i;for(const d of o.g.values())u=u.concat(d.G);return u}return V(o.i)}var Xc=RegExp("^(?:([^:/?#.]+):)?(?://(?:([^\\\\/?#]*)@)?([^\\\\/?#]*?)(?::([0-9]+))?(?=[\\\\/?#]|$))?([^?#]+)?(?:\\?([^#]*))?(?:#([\\s\\S]*))?$");function rp(o,u){if(o){o=o.split("&");for(let d=0;d<o.length;d++){const p=o[d].indexOf("=");let A,P=null;p>=0?(A=o[d].substring(0,p),P=o[d].substring(p+1)):A=o[d],u(A,P?decodeURIComponent(P.replace(/\+/g," ")):"")}}}function Dt(o){this.g=this.o=this.j="",this.u=null,this.m=this.h="",this.l=!1;let u;o instanceof Dt?(this.l=o.l,wr(this,o.j),this.o=o.o,this.g=o.g,Tr(this,o.u),this.h=o.h,Po(this,su(o.i)),this.m=o.m):o&&(u=String(o).match(Xc))?(this.l=!1,wr(this,u[1]||"",!0),this.o=Ir(u[2]||""),this.g=Ir(u[3]||"",!0),Tr(this,u[4]),this.h=Ir(u[5]||"",!0),Po(this,u[6]||"",!0),this.m=Ir(u[7]||"")):(this.l=!1,this.i=new Ar(null,this.l))}Dt.prototype.toString=function(){const o=[];var u=this.j;u&&o.push(vr(u,Zc,!0),":");var d=this.g;return(d||u=="file")&&(o.push("//"),(u=this.o)&&o.push(vr(u,Zc,!0),"@"),o.push(yr(d).replace(/%25([0-9a-fA-F]{2})/g,"%$1")),d=this.u,d!=null&&o.push(":",String(d))),(d=this.h)&&(this.g&&d.charAt(0)!="/"&&o.push("/"),o.push(vr(d,d.charAt(0)=="/"?op:ip,!0))),(d=this.i.toString())&&o.push("?",d),(d=this.m)&&o.push("#",vr(d,cp)),o.join("")},Dt.prototype.resolve=function(o){const u=ot(this);let d=!!o.j;d?wr(u,o.j):d=!!o.o,d?u.o=o.o:d=!!o.g,d?u.g=o.g:d=o.u!=null;var p=o.h;if(d)Tr(u,o.u);else if(d=!!o.h){if(p.charAt(0)!="/")if(this.g&&!this.h)p="/"+p;else{var A=u.h.lastIndexOf("/");A!=-1&&(p=u.h.slice(0,A+1)+p)}if(A=p,A==".."||A==".")p="";else if(A.indexOf("./")!=-1||A.indexOf("/.")!=-1){p=A.lastIndexOf("/",0)==0,A=A.split("/");const P=[];for(let x=0;x<A.length;){const z=A[x++];z=="."?p&&x==A.length&&P.push(""):z==".."?((P.length>1||P.length==1&&P[0]!="")&&P.pop(),p&&x==A.length&&P.push("")):(P.push(z),p=!0)}p=P.join("/")}else p=A}return d?u.h=p:d=o.i.toString()!=="",d?Po(u,su(o.i)):d=!!o.m,d&&(u.m=o.m),u};function ot(o){return new Dt(o)}function wr(o,u,d){o.j=d?Ir(u,!0):u,o.j&&(o.j=o.j.replace(/:$/,""))}function Tr(o,u){if(u){if(u=Number(u),isNaN(u)||u<0)throw Error("Bad port number "+u);o.u=u}else o.u=null}function Po(o,u,d){u instanceof Ar?(o.i=u,up(o.i,o.l)):(d||(u=vr(u,ap)),o.i=new Ar(u,o.l))}function te(o,u,d){o.i.set(u,d)}function Us(o){return te(o,"zx",Math.floor(Math.random()*2147483648).toString(36)+Math.abs(Math.floor(Math.random()*2147483648)^Date.now()).toString(36)),o}function Ir(o,u){return o?u?decodeURI(o.replace(/%25/g,"%2525")):decodeURIComponent(o):""}function vr(o,u,d){return typeof o=="string"?(o=encodeURI(o).replace(u,sp),d&&(o=o.replace(/%25([0-9a-fA-F]{2})/g,"%$1")),o):null}function sp(o){return o=o.charCodeAt(0),"%"+(o>>4&15).toString(16)+(o&15).toString(16)}var Zc=/[#\/\?@]/g,ip=/[#\?:]/g,op=/[#\?]/g,ap=/[#\?@]/g,cp=/#/g;function Ar(o,u){this.h=this.g=null,this.i=o||null,this.j=!!u}function fn(o){o.g||(o.g=new Map,o.h=0,o.i&&rp(o.i,function(u,d){o.add(decodeURIComponent(u.replace(/\+/g," ")),d)}))}n=Ar.prototype,n.add=function(o,u){fn(this),this.i=null,o=xn(this,o);let d=this.g.get(o);return d||this.g.set(o,d=[]),d.push(u),this.h+=1,this};function eu(o,u){fn(o),u=xn(o,u),o.g.has(u)&&(o.i=null,o.h-=o.g.get(u).length,o.g.delete(u))}function tu(o,u){return fn(o),u=xn(o,u),o.g.has(u)}n.forEach=function(o,u){fn(this),this.g.forEach(function(d,p){d.forEach(function(A){o.call(u,A,p,this)},this)},this)};function nu(o,u){fn(o);let d=[];if(typeof u=="string")tu(o,u)&&(d=d.concat(o.g.get(xn(o,u))));else for(o=Array.from(o.g.values()),u=0;u<o.length;u++)d=d.concat(o[u]);return d}n.set=function(o,u){return fn(this),this.i=null,o=xn(this,o),tu(this,o)&&(this.h-=this.g.get(o).length),this.g.set(o,[u]),this.h+=1,this},n.get=function(o,u){return o?(o=nu(this,o),o.length>0?String(o[0]):u):u};function ru(o,u,d){eu(o,u),d.length>0&&(o.i=null,o.g.set(xn(o,u),V(d)),o.h+=d.length)}n.toString=function(){if(this.i)return this.i;if(!this.g)return"";const o=[],u=Array.from(this.g.keys());for(let p=0;p<u.length;p++){var d=u[p];const A=yr(d);d=nu(this,d);for(let P=0;P<d.length;P++){let x=A;d[P]!==""&&(x+="="+yr(d[P])),o.push(x)}}return this.i=o.join("&")};function su(o){const u=new Ar;return u.i=o.i,o.g&&(u.g=new Map(o.g),u.h=o.h),u}function xn(o,u){return u=String(u),o.j&&(u=u.toLowerCase()),u}function up(o,u){u&&!o.j&&(fn(o),o.i=null,o.g.forEach(function(d,p){const A=p.toLowerCase();p!=A&&(eu(this,p),ru(this,A,d))},o)),o.j=u}function lp(o,u){const d=new _r;if(a.Image){const p=new Image;p.onload=f(xt,d,"TestLoadImage: loaded",!0,u,p),p.onerror=f(xt,d,"TestLoadImage: error",!1,u,p),p.onabort=f(xt,d,"TestLoadImage: abort",!1,u,p),p.ontimeout=f(xt,d,"TestLoadImage: timeout",!1,u,p),a.setTimeout(function(){p.ontimeout&&p.ontimeout()},1e4),p.src=o}else u(!1)}function hp(o,u){const d=new _r,p=new AbortController,A=setTimeout(()=>{p.abort(),xt(d,"TestPingServer: timeout",!1,u)},1e4);fetch(o,{signal:p.signal}).then(P=>{clearTimeout(A),P.ok?xt(d,"TestPingServer: ok",!0,u):xt(d,"TestPingServer: server error",!1,u)}).catch(()=>{clearTimeout(A),xt(d,"TestPingServer: error",!1,u)})}function xt(o,u,d,p,A){try{A&&(A.onload=null,A.onerror=null,A.onabort=null,A.ontimeout=null),p(d)}catch{}}function dp(){this.g=new Kf}function So(o){this.i=o.Sb||null,this.h=o.ab||!1}m(So,xc),So.prototype.g=function(){return new Fs(this.i,this.h)};function Fs(o,u){Ae.call(this),this.H=o,this.o=u,this.m=void 0,this.status=this.readyState=0,this.responseType=this.responseText=this.response=this.statusText="",this.onreadystatechange=null,this.A=new Headers,this.h=null,this.F="GET",this.D="",this.g=!1,this.B=this.j=this.l=null,this.v=new AbortController}m(Fs,Ae),n=Fs.prototype,n.open=function(o,u){if(this.readyState!=0)throw this.abort(),Error("Error reopening a connection");this.F=o,this.D=u,this.readyState=1,Pr(this)},n.send=function(o){if(this.readyState!=1)throw this.abort(),Error("need to call open() first. ");if(this.v.signal.aborted)throw this.abort(),Error("Request was aborted.");this.g=!0;const u={headers:this.A,method:this.F,credentials:this.m,cache:void 0,signal:this.v.signal};o&&(u.body=o),(this.H||a).fetch(new Request(this.D,u)).then(this.Pa.bind(this),this.ga.bind(this))},n.abort=function(){this.response=this.responseText="",this.A=new Headers,this.status=0,this.v.abort(),this.j&&this.j.cancel("Request was aborted.").catch(()=>{}),this.readyState>=1&&this.g&&this.readyState!=4&&(this.g=!1,Rr(this)),this.readyState=0},n.Pa=function(o){if(this.g&&(this.l=o,this.h||(this.status=this.l.status,this.statusText=this.l.statusText,this.h=o.headers,this.readyState=2,Pr(this)),this.g&&(this.readyState=3,Pr(this),this.g)))if(this.responseType==="arraybuffer")o.arrayBuffer().then(this.Na.bind(this),this.ga.bind(this));else if(typeof a.ReadableStream<"u"&&"body"in o){if(this.j=o.body.getReader(),this.o){if(this.responseType)throw Error('responseType must be empty for "streamBinaryChunks" mode responses.');this.response=[]}else this.response=this.responseText="",this.B=new TextDecoder;iu(this)}else o.text().then(this.Oa.bind(this),this.ga.bind(this))};function iu(o){o.j.read().then(o.Ma.bind(o)).catch(o.ga.bind(o))}n.Ma=function(o){if(this.g){if(this.o&&o.value)this.response.push(o.value);else if(!this.o){var u=o.value?o.value:new Uint8Array(0);(u=this.B.decode(u,{stream:!o.done}))&&(this.response=this.responseText+=u)}o.done?Rr(this):Pr(this),this.readyState==3&&iu(this)}},n.Oa=function(o){this.g&&(this.response=this.responseText=o,Rr(this))},n.Na=function(o){this.g&&(this.response=o,Rr(this))},n.ga=function(){this.g&&Rr(this)};function Rr(o){o.readyState=4,o.l=null,o.j=null,o.B=null,Pr(o)}n.setRequestHeader=function(o,u){this.A.append(o,u)},n.getResponseHeader=function(o){return this.h&&this.h.get(o.toLowerCase())||""},n.getAllResponseHeaders=function(){if(!this.h)return"";const o=[],u=this.h.entries();for(var d=u.next();!d.done;)d=d.value,o.push(d[0]+": "+d[1]),d=u.next();return o.join(`\r
`)};function Pr(o){o.onreadystatechange&&o.onreadystatechange.call(o)}Object.defineProperty(Fs.prototype,"withCredentials",{get:function(){return this.m==="include"},set:function(o){this.m=o?"include":"same-origin"}});function ou(o){let u="";return ks(o,function(d,p){u+=p,u+=":",u+=d,u+=`\r
`}),u}function Vo(o,u,d){e:{for(p in d){var p=!1;break e}p=!0}p||(d=ou(d),typeof o=="string"?d!=null&&yr(d):te(o,u,d))}function oe(o){Ae.call(this),this.headers=new Map,this.L=o||null,this.h=!1,this.g=null,this.D="",this.o=0,this.l="",this.j=this.B=this.v=this.A=!1,this.m=null,this.F="",this.H=!1}m(oe,Ae);var fp=/^https?$/i,pp=["POST","PUT"];n=oe.prototype,n.Fa=function(o){this.H=o},n.ea=function(o,u,d,p){if(this.g)throw Error("[goog.net.XhrIo] Object is active with another request="+this.D+"; newUri="+o);u=u?u.toUpperCase():"GET",this.D=o,this.l="",this.o=0,this.A=!1,this.h=!0,this.g=this.L?this.L.g():qc.g(),this.g.onreadystatechange=E(h(this.Ca,this));try{this.B=!0,this.g.open(u,String(o),!0),this.B=!1}catch(P){au(this,P);return}if(o=d||"",d=new Map(this.headers),p)if(Object.getPrototypeOf(p)===Object.prototype)for(var A in p)d.set(A,p[A]);else if(typeof p.keys=="function"&&typeof p.get=="function")for(const P of p.keys())d.set(P,p.get(P));else throw Error("Unknown input type for opt_headers: "+String(p));p=Array.from(d.keys()).find(P=>P.toLowerCase()=="content-type"),A=a.FormData&&o instanceof a.FormData,!(Array.prototype.indexOf.call(pp,u,void 0)>=0)||p||A||d.set("Content-Type","application/x-www-form-urlencoded;charset=utf-8");for(const[P,x]of d)this.g.setRequestHeader(P,x);this.F&&(this.g.responseType=this.F),"withCredentials"in this.g&&this.g.withCredentials!==this.H&&(this.g.withCredentials=this.H);try{this.m&&(clearTimeout(this.m),this.m=null),this.v=!0,this.g.send(o),this.v=!1}catch(P){au(this,P)}};function au(o,u){o.h=!1,o.g&&(o.j=!0,o.g.abort(),o.j=!1),o.l=u,o.o=5,cu(o),Bs(o)}function cu(o){o.A||(o.A=!0,be(o,"complete"),be(o,"error"))}n.abort=function(o){this.g&&this.h&&(this.h=!1,this.j=!0,this.g.abort(),this.j=!1,this.o=o||7,be(this,"complete"),be(this,"abort"),Bs(this))},n.N=function(){this.g&&(this.h&&(this.h=!1,this.j=!0,this.g.abort(),this.j=!1),Bs(this,!0)),oe.Z.N.call(this)},n.Ca=function(){this.u||(this.B||this.v||this.j?uu(this):this.Xa())},n.Xa=function(){uu(this)};function uu(o){if(o.h&&typeof i<"u"){if(o.v&&Ot(o)==4)setTimeout(o.Ca.bind(o),0);else if(be(o,"readystatechange"),Ot(o)==4){o.h=!1;try{const P=o.ca();e:switch(P){case 200:case 201:case 202:case 204:case 206:case 304:case 1223:var u=!0;break e;default:u=!1}var d;if(!(d=u)){var p;if(p=P===0){let x=String(o.D).match(Xc)[1]||null;!x&&a.self&&a.self.location&&(x=a.self.location.protocol.slice(0,-1)),p=!fp.test(x?x.toLowerCase():"")}d=p}if(d)be(o,"complete"),be(o,"success");else{o.o=6;try{var A=Ot(o)>2?o.g.statusText:""}catch{A=""}o.l=A+" ["+o.ca()+"]",cu(o)}}finally{Bs(o)}}}}function Bs(o,u){if(o.g){o.m&&(clearTimeout(o.m),o.m=null);const d=o.g;o.g=null,u||be(o,"ready");try{d.onreadystatechange=null}catch{}}}n.isActive=function(){return!!this.g};function Ot(o){return o.g?o.g.readyState:0}n.ca=function(){try{return Ot(this)>2?this.g.status:-1}catch{return-1}},n.la=function(){try{return this.g?this.g.responseText:""}catch{return""}},n.La=function(o){if(this.g){var u=this.g.responseText;return o&&u.indexOf(o)==0&&(u=u.substring(o.length)),Gf(u)}};function lu(o){try{if(!o.g)return null;if("response"in o.g)return o.g.response;switch(o.F){case"":case"text":return o.g.responseText;case"arraybuffer":if("mozResponseArrayBuffer"in o.g)return o.g.mozResponseArrayBuffer}return null}catch{return null}}function mp(o){const u={};o=(o.g&&Ot(o)>=2&&o.g.getAllResponseHeaders()||"").split(`\r
`);for(let p=0;p<o.length;p++){if(_(o[p]))continue;var d=Zf(o[p]);const A=d[0];if(d=d[1],typeof d!="string")continue;d=d.trim();const P=u[A]||[];u[A]=P,P.push(d)}qf(u,function(p){return p.join(", ")})}n.ya=function(){return this.o},n.Ha=function(){return typeof this.l=="string"?this.l:String(this.l)};function Sr(o,u,d){return d&&d.internalChannelParams&&d.internalChannelParams[o]||u}function hu(o){this.za=0,this.i=[],this.j=new _r,this.ba=this.na=this.J=this.W=this.g=this.wa=this.G=this.H=this.u=this.U=this.o=null,this.Ya=this.V=0,this.Sa=Sr("failFast",!1,o),this.F=this.C=this.v=this.m=this.l=null,this.X=!0,this.xa=this.K=-1,this.Y=this.A=this.D=0,this.Qa=Sr("baseRetryDelayMs",5e3,o),this.Za=Sr("retryDelaySeedMs",1e4,o),this.Ta=Sr("forwardChannelMaxRetries",2,o),this.va=Sr("forwardChannelRequestTimeoutMs",2e4,o),this.ma=o&&o.xmlHttpFactory||void 0,this.Ua=o&&o.Rb||void 0,this.Aa=o&&o.useFetchStreams||!1,this.O=void 0,this.L=o&&o.supportsCrossDomainXhr||!1,this.M="",this.h=new Gc(o&&o.concurrentRequestLimit),this.Ba=new dp,this.S=o&&o.fastHandshake||!1,this.R=o&&o.encodeInitMessageHeaders||!1,this.S&&this.R&&(this.R=!1),this.Ra=o&&o.Pb||!1,o&&o.ua&&this.j.ua(),o&&o.forceLongPolling&&(this.X=!1),this.aa=!this.S&&this.X&&o&&o.detectBufferingProxy||!1,this.ia=void 0,o&&o.longPollingTimeout&&o.longPollingTimeout>0&&(this.ia=o.longPollingTimeout),this.ta=void 0,this.T=0,this.P=!1,this.ja=this.B=null}n=hu.prototype,n.ka=8,n.I=1,n.connect=function(o,u,d,p){Ne(0),this.W=o,this.H=u||{},d&&p!==void 0&&(this.H.OSID=d,this.H.OAID=p),this.F=this.X,this.J=wu(this,null,this.W),$s(this)};function Co(o){if(du(o),o.I==3){var u=o.V++,d=ot(o.J);if(te(d,"SID",o.M),te(d,"RID",u),te(d,"TYPE","terminate"),Vr(o,d),u=new kt(o,o.j,u),u.M=2,u.A=Us(ot(d)),d=!1,a.navigator&&a.navigator.sendBeacon)try{d=a.navigator.sendBeacon(u.A.toString(),"")}catch{}!d&&a.Image&&(new Image().src=u.A,d=!0),d||(u.g=Tu(u.j,null),u.g.ea(u.A)),u.F=Date.now(),Ms(u)}Eu(o)}function qs(o){o.g&&(No(o),o.g.cancel(),o.g=null)}function du(o){qs(o),o.v&&(a.clearTimeout(o.v),o.v=null),js(o),o.h.cancel(),o.m&&(typeof o.m=="number"&&a.clearTimeout(o.m),o.m=null)}function $s(o){if(!Kc(o.h)&&!o.m){o.m=!0;var u=o.Ea;Ie||g(),ve||(Ie(),ve=!0),I.add(u,o),o.D=0}}function gp(o,u){return Qc(o.h)>=o.h.j-(o.m?1:0)?!1:o.m?(o.i=u.G.concat(o.i),!0):o.I==1||o.I==2||o.D>=(o.Sa?0:o.Ta)?!1:(o.m=gr(h(o.Ea,o,u),yu(o,o.D)),o.D++,!0)}n.Ea=function(o){if(this.m)if(this.m=null,this.I==1){if(!o){this.V=Math.floor(Math.random()*1e5),o=this.V++;const A=new kt(this,this.j,o);let P=this.o;if(this.U&&(P?(P=Ac(P),Pc(P,this.U)):P=this.U),this.u!==null||this.R||(A.J=P,P=null),this.S)e:{for(var u=0,d=0;d<this.i.length;d++){t:{var p=this.i[d];if("__data__"in p.map&&(p=p.map.__data__,typeof p=="string")){p=p.length;break t}p=void 0}if(p===void 0)break;if(u+=p,u>4096){u=d;break e}if(u===4096||d===this.i.length-1){u=d+1;break e}}u=1e3}else u=1e3;u=pu(this,A,u),d=ot(this.J),te(d,"RID",o),te(d,"CVER",22),this.G&&te(d,"X-HTTP-Session-Id",this.G),Vr(this,d),P&&(this.R?u="headers="+yr(ou(P))+"&"+u:this.u&&Vo(d,this.u,P)),Ro(this.h,A),this.Ra&&te(d,"TYPE","init"),this.S?(te(d,"$req",u),te(d,"SID","null"),A.U=!0,To(A,d,null)):To(A,d,u),this.I=2}}else this.I==3&&(o?fu(this,o):this.i.length==0||Kc(this.h)||fu(this))};function fu(o,u){var d;u?d=u.l:d=o.V++;const p=ot(o.J);te(p,"SID",o.M),te(p,"RID",d),te(p,"AID",o.K),Vr(o,p),o.u&&o.o&&Vo(p,o.u,o.o),d=new kt(o,o.j,d,o.D+1),o.u===null&&(d.J=o.o),u&&(o.i=u.G.concat(o.i)),u=pu(o,d,1e3),d.H=Math.round(o.va*.5)+Math.round(o.va*.5*Math.random()),Ro(o.h,d),To(d,p,u)}function Vr(o,u){o.H&&ks(o.H,function(d,p){te(u,p,d)}),o.l&&ks({},function(d,p){te(u,p,d)})}function pu(o,u,d){d=Math.min(o.i.length,d);const p=o.l?h(o.l.Ka,o.l,o):null;e:{var A=o.i;let z=-1;for(;;){const me=["count="+d];z==-1?d>0?(z=A[0].g,me.push("ofs="+z)):z=0:me.push("ofs="+z);let ee=!0;for(let _e=0;_e<d;_e++){var P=A[_e].g;const at=A[_e].map;if(P-=z,P<0)z=Math.max(0,A[_e].g-100),ee=!1;else try{P="req"+P+"_"||"";try{var x=at instanceof Map?at:Object.entries(at);for(const[mn,Lt]of x){let Mt=Lt;c(Lt)&&(Mt=go(Lt)),me.push(P+mn+"="+encodeURIComponent(Mt))}}catch(mn){throw me.push(P+"type="+encodeURIComponent("_badmap")),mn}}catch{p&&p(at)}}if(ee){x=me.join("&");break e}}x=void 0}return o=o.i.splice(0,d),u.G=o,x}function mu(o){if(!o.g&&!o.v){o.Y=1;var u=o.Da;Ie||g(),ve||(Ie(),ve=!0),I.add(u,o),o.A=0}}function bo(o){return o.g||o.v||o.A>=3?!1:(o.Y++,o.v=gr(h(o.Da,o),yu(o,o.A)),o.A++,!0)}n.Da=function(){if(this.v=null,gu(this),this.aa&&!(this.P||this.g==null||this.T<=0)){var o=4*this.T;this.j.info("BP detection timer enabled: "+o),this.B=gr(h(this.Wa,this),o)}},n.Wa=function(){this.B&&(this.B=null,this.j.info("BP detection timeout reached."),this.j.info("Buffering proxy detected and switch to long-polling!"),this.F=!1,this.P=!0,Ne(10),qs(this),gu(this))};function No(o){o.B!=null&&(a.clearTimeout(o.B),o.B=null)}function gu(o){o.g=new kt(o,o.j,"rpc",o.Y),o.u===null&&(o.g.J=o.o),o.g.P=0;var u=ot(o.na);te(u,"RID","rpc"),te(u,"SID",o.M),te(u,"AID",o.K),te(u,"CI",o.F?"0":"1"),!o.F&&o.ia&&te(u,"TO",o.ia),te(u,"TYPE","xmlhttp"),Vr(o,u),o.u&&o.o&&Vo(u,o.u,o.o),o.O&&(o.g.H=o.O);var d=o.g;o=o.ba,d.M=1,d.A=Us(ot(u)),d.u=null,d.R=!0,Wc(d,o)}n.Va=function(){this.C!=null&&(this.C=null,qs(this),bo(this),Ne(19))};function js(o){o.C!=null&&(a.clearTimeout(o.C),o.C=null)}function _u(o,u){var d=null;if(o.g==u){js(o),No(o),o.g=null;var p=2}else if(Ao(o.h,u))d=u.G,Yc(o.h,u),p=1;else return;if(o.I!=0){if(u.o)if(p==1){d=u.u?u.u.length:0,u=Date.now()-u.F;var A=o.D;p=Os(),be(p,new Fc(p,d)),$s(o)}else mu(o);else if(A=u.m,A==3||A==0&&u.X>0||!(p==1&&gp(o,u)||p==2&&bo(o)))switch(d&&d.length>0&&(u=o.h,u.i=u.i.concat(d)),A){case 1:pn(o,5);break;case 4:pn(o,10);break;case 3:pn(o,6);break;default:pn(o,2)}}}function yu(o,u){let d=o.Qa+Math.floor(Math.random()*o.Za);return o.isActive()||(d*=2),d*u}function pn(o,u){if(o.j.info("Error code "+u),u==2){var d=h(o.bb,o),p=o.Ua;const A=!p;p=new Dt(p||"//www.google.com/images/cleardot.gif"),a.location&&a.location.protocol=="http"||wr(p,"https"),Us(p),A?lp(p.toString(),d):hp(p.toString(),d)}else Ne(2);o.I=0,o.l&&o.l.pa(u),Eu(o),du(o)}n.bb=function(o){o?(this.j.info("Successfully pinged google.com"),Ne(2)):(this.j.info("Failed to ping google.com"),Ne(1))};function Eu(o){if(o.I=0,o.ja=[],o.l){const u=Jc(o.h);(u.length!=0||o.i.length!=0)&&(N(o.ja,u),N(o.ja,o.i),o.h.i.length=0,V(o.i),o.i.length=0),o.l.oa()}}function wu(o,u,d){var p=d instanceof Dt?ot(d):new Dt(d);if(p.g!="")u&&(p.g=u+"."+p.g),Tr(p,p.u);else{var A=a.location;p=A.protocol,u=u?u+"."+A.hostname:A.hostname,A=+A.port;const P=new Dt(null);p&&wr(P,p),u&&(P.g=u),A&&Tr(P,A),d&&(P.h=d),p=P}return d=o.G,u=o.wa,d&&u&&te(p,d,u),te(p,"VER",o.ka),Vr(o,p),p}function Tu(o,u,d){if(u&&!o.L)throw Error("Can't create secondary domain capable XhrIo object.");return u=o.Aa&&!o.ma?new oe(new So({ab:d})):new oe(o.ma),u.Fa(o.L),u}n.isActive=function(){return!!this.l&&this.l.isActive(this)};function Iu(){}n=Iu.prototype,n.ra=function(){},n.qa=function(){},n.pa=function(){},n.oa=function(){},n.isActive=function(){return!0},n.Ka=function(){};function Ws(){}Ws.prototype.g=function(o,u){return new je(o,u)};function je(o,u){Ae.call(this),this.g=new hu(u),this.l=o,this.h=u&&u.messageUrlParams||null,o=u&&u.messageHeaders||null,u&&u.clientProtocolHeaderRequired&&(o?o["X-Client-Protocol"]="webchannel":o={"X-Client-Protocol":"webchannel"}),this.g.o=o,o=u&&u.initMessageHeaders||null,u&&u.messageContentType&&(o?o["X-WebChannel-Content-Type"]=u.messageContentType:o={"X-WebChannel-Content-Type":u.messageContentType}),u&&u.sa&&(o?o["X-WebChannel-Client-Profile"]=u.sa:o={"X-WebChannel-Client-Profile":u.sa}),this.g.U=o,(o=u&&u.Qb)&&!_(o)&&(this.g.u=o),this.A=u&&u.supportsCrossDomainXhr||!1,this.v=u&&u.sendRawJson||!1,(u=u&&u.httpSessionIdParam)&&!_(u)&&(this.g.G=u,o=this.h,o!==null&&u in o&&(o=this.h,u in o&&delete o[u])),this.j=new On(this)}m(je,Ae),je.prototype.m=function(){this.g.l=this.j,this.A&&(this.g.L=!0),this.g.connect(this.l,this.h||void 0)},je.prototype.close=function(){Co(this.g)},je.prototype.o=function(o){var u=this.g;if(typeof o=="string"){var d={};d.__data__=o,o=d}else this.v&&(d={},d.__data__=go(o),o=d);u.i.push(new np(u.Ya++,o)),u.I==3&&$s(u)},je.prototype.N=function(){this.g.l=null,delete this.j,Co(this.g),delete this.g,je.Z.N.call(this)};function vu(o){_o.call(this),o.__headers__&&(this.headers=o.__headers__,this.statusCode=o.__status__,delete o.__headers__,delete o.__status__);var u=o.__sm__;if(u){e:{for(const d in u){o=d;break e}o=void 0}(this.i=o)&&(o=this.i,u=u!==null&&o in u?u[o]:void 0),this.data=u}else this.data=o}m(vu,_o);function Au(){yo.call(this),this.status=1}m(Au,yo);function On(o){this.g=o}m(On,Iu),On.prototype.ra=function(){be(this.g,"a")},On.prototype.qa=function(o){be(this.g,new vu(o))},On.prototype.pa=function(o){be(this.g,new Au)},On.prototype.oa=function(){be(this.g,"b")},Ws.prototype.createWebChannel=Ws.prototype.g,je.prototype.send=je.prototype.o,je.prototype.open=je.prototype.m,je.prototype.close=je.prototype.close,ph=function(){return new Ws},fh=function(){return Os()},dh=hn,Qo={jb:0,mb:1,nb:2,Hb:3,Mb:4,Jb:5,Kb:6,Ib:7,Gb:8,Lb:9,PROXY:10,NOPROXY:11,Eb:12,Ab:13,Bb:14,zb:15,Cb:16,Db:17,fb:18,eb:19,gb:20},Ls.NO_ERROR=0,Ls.TIMEOUT=8,Ls.HTTP_ERROR=6,Zs=Ls,Bc.COMPLETE="complete",hh=Bc,Oc.EventType=pr,pr.OPEN="a",pr.CLOSE="b",pr.ERROR="c",pr.MESSAGE="d",Ae.prototype.listen=Ae.prototype.J,xr=Oc,oe.prototype.listenOnce=oe.prototype.K,oe.prototype.getLastError=oe.prototype.Ha,oe.prototype.getLastErrorCode=oe.prototype.ya,oe.prototype.getStatus=oe.prototype.ca,oe.prototype.getResponseJson=oe.prototype.La,oe.prototype.getResponseText=oe.prototype.la,oe.prototype.send=oe.prototype.ea,oe.prototype.setWithCredentials=oe.prototype.Fa,lh=oe}).apply(typeof Hs<"u"?Hs:typeof self<"u"?self:typeof window<"u"?window:{});/**
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
 */let rr="12.19.0";function qm(n){rr=n}/**
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
 */const Pn=new ma("@firebase/firestore");function Ln(){return Pn.logLevel}function O(n,...e){if(Pn.logLevel<=Q.DEBUG){const t=e.map(_a);Pn.debug(`Firestore (${rr}): ${n}`,...t)}}function St(n,...e){if(Pn.logLevel<=Q.ERROR){const t=e.map(_a);Pn.error(`Firestore (${rr}): ${n}`,...t)}}function rt(n,...e){if(Pn.logLevel<=Q.WARN){const t=e.map(_a);Pn.warn(`Firestore (${rr}): ${n}`,...t)}}function _a(n){if(typeof n=="string")return n;try{return function(t){return JSON.stringify(t)}(n)}catch{return n}}/**
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
 */function q(n,e,t){let r="Unexpected state";typeof e=="string"?r=e:t=e,mh(n,r,t)}function mh(n,e,t){let r=`FIRESTORE (${rr}) INTERNAL ASSERTION FAILED: ${e} (ID: ${n.toString(16)})`;if(t!==void 0)try{r+=" CONTEXT: "+JSON.stringify(t)}catch{r+=" CONTEXT: "+t}throw St(r),new Error(r)}function F(n,e,t,r){let s="Unexpected state";typeof t=="string"?s=t:r=t,n||mh(e,s,r)}function W(n,e){return n}/**
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
 */function $m(n){const e=typeof self<"u"&&(self.crypto||self.msCrypto),t=new Uint8Array(n);if(e&&typeof e.getRandomValues=="function")e.getRandomValues(t);else for(let r=0;r<n;r++)t[r]=Math.floor(256*Math.random());return t}/**
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
 */class ya{static newId(){const e="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",t=62*Math.floor(4.129032258064516);let r="";for(;r.length<20;){const s=$m(40);for(let i=0;i<s.length;++i)r.length<20&&s[i]<t&&(r+=e.charAt(s[i]%62))}return r}}function K(n,e){return n<e?-1:n>e?1:0}function Yo(n,e){const t=Math.min(n.length,e.length);for(let r=0;r<t;r++){const s=n.charAt(r),i=e.charAt(r);if(s!==i)return Oo(s)===Oo(i)?K(s,i):Oo(s)?1:-1}return K(n.length,e.length)}const jm=55296,Wm=57343;function Oo(n){const e=n.charCodeAt(0);return e>=jm&&e<=Wm}function Gn(n,e,t){return n.length===e.length&&n.every((r,s)=>t(r,e[s]))}/**
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
 */class ne{constructor(e,t){this.comparator=e,this.root=t||we.EMPTY}insert(e,t){return new ne(this.comparator,this.root.insert(e,t,this.comparator).copy(null,null,we.BLACK,null,null))}remove(e){return new ne(this.comparator,this.root.remove(e,this.comparator).copy(null,null,we.BLACK,null,null))}get(e){let t=this.root;for(;!t.isEmpty();){const r=this.comparator(e,t.key);if(r===0)return t.value;r<0?t=t.left:r>0&&(t=t.right)}return null}indexOf(e){let t=0,r=this.root;for(;!r.isEmpty();){const s=this.comparator(e,r.key);if(s===0)return t+r.left.size;s<0?r=r.left:(t+=r.left.size+1,r=r.right)}return-1}isEmpty(){return this.root.isEmpty()}get size(){return this.root.size}minKey(){return this.root.minKey()}maxKey(){return this.root.maxKey()}inorderTraversal(e){return this.root.inorderTraversal(e)}forEach(e){this.inorderTraversal((t,r)=>(e(t,r),!1))}toString(){const e=[];return this.inorderTraversal((t,r)=>(e.push(`${t}:${r}`),!1)),`{${e.join(", ")}}`}reverseTraversal(e){return this.root.reverseTraversal(e)}getIterator(){return new Gs(this.root,null,this.comparator,!1)}getIteratorFrom(e){return new Gs(this.root,e,this.comparator,!1)}getReverseIterator(){return new Gs(this.root,null,this.comparator,!0)}getReverseIteratorFrom(e){return new Gs(this.root,e,this.comparator,!0)}}class Gs{constructor(e,t,r,s){this.isReverse=s,this.nodeStack=[];let i=1;for(;!e.isEmpty();)if(i=t?r(e.key,t):1,t&&s&&(i*=-1),i<0)e=this.isReverse?e.left:e.right;else{if(i===0){this.nodeStack.push(e);break}this.nodeStack.push(e),e=this.isReverse?e.right:e.left}}getNext(){let e=this.nodeStack.pop();const t={key:e.key,value:e.value};if(this.isReverse)for(e=e.left;!e.isEmpty();)this.nodeStack.push(e),e=e.right;else for(e=e.right;!e.isEmpty();)this.nodeStack.push(e),e=e.left;return t}hasNext(){return this.nodeStack.length>0}peek(){if(this.nodeStack.length===0)return null;const e=this.nodeStack[this.nodeStack.length-1];return{key:e.key,value:e.value}}}class we{constructor(e,t,r,s,i){this.key=e,this.value=t,this.color=r??we.RED,this.left=s??we.EMPTY,this.right=i??we.EMPTY,this.size=this.left.size+1+this.right.size}copy(e,t,r,s,i){return new we(e??this.key,t??this.value,r??this.color,s??this.left,i??this.right)}isEmpty(){return!1}inorderTraversal(e){return this.left.inorderTraversal(e)||e(this.key,this.value)||this.right.inorderTraversal(e)}reverseTraversal(e){return this.right.reverseTraversal(e)||e(this.key,this.value)||this.left.reverseTraversal(e)}min(){return this.left.isEmpty()?this:this.left.min()}minKey(){return this.min().key}maxKey(){return this.right.isEmpty()?this.key:this.right.maxKey()}insert(e,t,r){let s=this;const i=r(e,s.key);return s=i<0?s.copy(null,null,null,s.left.insert(e,t,r),null):i===0?s.copy(null,t,null,null,null):s.copy(null,null,null,null,s.right.insert(e,t,r)),s.fixUp()}removeMin(){if(this.left.isEmpty())return we.EMPTY;let e=this;return e.left.isRed()||e.left.left.isRed()||(e=e.moveRedLeft()),e=e.copy(null,null,null,e.left.removeMin(),null),e.fixUp()}remove(e,t){let r,s=this;if(t(e,s.key)<0)s.left.isEmpty()||s.left.isRed()||s.left.left.isRed()||(s=s.moveRedLeft()),s=s.copy(null,null,null,s.left.remove(e,t),null);else{if(s.left.isRed()&&(s=s.rotateRight()),s.right.isEmpty()||s.right.isRed()||s.right.left.isRed()||(s=s.moveRedRight()),t(e,s.key)===0){if(s.right.isEmpty())return we.EMPTY;r=s.right.min(),s=s.copy(r.key,r.value,null,null,s.right.removeMin())}s=s.copy(null,null,null,null,s.right.remove(e,t))}return s.fixUp()}isRed(){return this.color}fixUp(){let e=this;return e.right.isRed()&&!e.left.isRed()&&(e=e.rotateLeft()),e.left.isRed()&&e.left.left.isRed()&&(e=e.rotateRight()),e.left.isRed()&&e.right.isRed()&&(e=e.colorFlip()),e}moveRedLeft(){let e=this.colorFlip();return e.right.left.isRed()&&(e=e.copy(null,null,null,null,e.right.rotateRight()),e=e.rotateLeft(),e=e.colorFlip()),e}moveRedRight(){let e=this.colorFlip();return e.left.left.isRed()&&(e=e.rotateRight(),e=e.colorFlip()),e}rotateLeft(){const e=this.copy(null,null,we.RED,null,this.right.left);return this.right.copy(null,null,this.color,e,null)}rotateRight(){const e=this.copy(null,null,we.RED,this.left.right,null);return this.left.copy(null,null,this.color,null,e)}colorFlip(){const e=this.left.copy(null,null,!this.left.color,null,null),t=this.right.copy(null,null,!this.right.color,null,null);return this.copy(null,null,!this.color,e,t)}checkMaxDepth(){const e=this.check();return Math.pow(2,e)<=this.size+1}check(){if(this.isRed()&&this.left.isRed())throw q(43730,{key:this.key,value:this.value});if(this.right.isRed())throw q(14113,{key:this.key,value:this.value});const e=this.left.check();if(e!==this.right.check())throw q(27949);return e+(this.isRed()?0:1)}}we.EMPTY=null,we.RED=!0,we.BLACK=!1;we.EMPTY=new class{constructor(){this.size=0}get key(){throw q(57766)}get value(){throw q(16141)}get color(){throw q(16727)}get left(){throw q(29726)}get right(){throw q(36894)}copy(e,t,r,s,i){return this}insert(e,t,r){return new we(e,t)}remove(e,t){return this}isEmpty(){return!0}inorderTraversal(e){return!1}reverseTraversal(e){return!1}minKey(){return null}maxKey(){return null}isRed(){return!1}checkMaxDepth(){return!0}check(){return 0}};/**
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
 */class de{constructor(e){this.comparator=e,this.data=new ne(this.comparator)}has(e){return this.data.get(e)!==null}first(){return this.data.minKey()}last(){return this.data.maxKey()}get size(){return this.data.size}indexOf(e){return this.data.indexOf(e)}forEach(e){this.data.inorderTraversal((t,r)=>(e(t),!1))}forEachInRange(e,t){const r=this.data.getIteratorFrom(e[0]);for(;r.hasNext();){const s=r.getNext();if(this.comparator(s.key,e[1])>=0)return;t(s.key)}}forEachWhile(e,t){let r;for(r=t!==void 0?this.data.getIteratorFrom(t):this.data.getIterator();r.hasNext();)if(!e(r.getNext().key))return}firstAfterOrEqual(e){const t=this.data.getIteratorFrom(e);return t.hasNext()?t.getNext().key:null}getIterator(){return new Du(this.data.getIterator())}getIteratorFrom(e){return new Du(this.data.getIteratorFrom(e))}add(e){return this.copy(this.data.remove(e).insert(e,!0))}delete(e){return this.has(e)?this.copy(this.data.remove(e)):this}isEmpty(){return this.data.isEmpty()}unionWith(e){let t=this;return t.size<e.size&&(t=e,e=this),e.forEach(r=>{t=t.add(r)}),t}isEqual(e){if(!(e instanceof de)||this.size!==e.size)return!1;const t=this.data.getIterator(),r=e.data.getIterator();for(;t.hasNext();){const s=t.getNext().key,i=r.getNext().key;if(this.comparator(s,i)!==0)return!1}return!0}toArray(){const e=[];return this.forEach(t=>{e.push(t)}),e}toString(){const e=[];return this.forEach(t=>e.push(t)),"SortedSet("+e.toString()+")"}copy(e){const t=new de(this.comparator);return t.data=e,t}}class Du{constructor(e){this.iter=e}getNext(){return this.iter.getNext().key}hasNext(){return this.iter.hasNext()}}/**
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
 */const C={OK:"ok",CANCELLED:"cancelled",UNKNOWN:"unknown",INVALID_ARGUMENT:"invalid-argument",DEADLINE_EXCEEDED:"deadline-exceeded",NOT_FOUND:"not-found",ALREADY_EXISTS:"already-exists",PERMISSION_DENIED:"permission-denied",UNAUTHENTICATED:"unauthenticated",RESOURCE_EXHAUSTED:"resource-exhausted",FAILED_PRECONDITION:"failed-precondition",ABORTED:"aborted",OUT_OF_RANGE:"out-of-range",UNIMPLEMENTED:"unimplemented",INTERNAL:"internal",UNAVAILABLE:"unavailable",DATA_LOSS:"data-loss"};class D extends bt{constructor(e,t){super(e,t),this.code=e,this.message=t,this.toString=()=>`${this.name}: [code=${this.code}]: ${this.message}`}}/**
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
 */const ut="__name__";class ct{constructor(e,t,r){t===void 0?t=0:t>e.length&&q(637,{offset:t,range:e.length}),r===void 0?r=e.length-t:r>e.length-t&&q(1746,{length:r,range:e.length-t}),this.segments=e,this.offset=t,this.len=r}get length(){return this.len}isEqual(e){return ct.comparator(this,e)===0}child(e){const t=this.segments.slice(this.offset,this.limit());return e instanceof ct?e.forEach(r=>{t.push(r)}):t.push(e),this.construct(t)}limit(){return this.offset+this.length}popFirst(e){return e=e===void 0?1:e,this.construct(this.segments,this.offset+e,this.length-e)}popLast(){return this.construct(this.segments,this.offset,this.length-1)}firstSegment(){return this.segments[this.offset]}lastSegment(){return this.get(this.length-1)}get(e){return this.segments[this.offset+e]}isEmpty(){return this.length===0}isPrefixOf(e){if(e.length<this.length)return!1;for(let t=0;t<this.length;t++)if(this.get(t)!==e.get(t))return!1;return!0}isImmediateParentOf(e){if(this.length+1!==e.length)return!1;for(let t=0;t<this.length;t++)if(this.get(t)!==e.get(t))return!1;return!0}forEach(e){for(let t=this.offset,r=this.limit();t<r;t++)e(this.segments[t])}toArray(){return this.segments.slice(this.offset,this.limit())}static comparator(e,t){const r=Math.min(e.length,t.length);for(let s=0;s<r;s++){const i=ct.compareSegments(e.get(s),t.get(s));if(i!==0)return i}return K(e.length,t.length)}static compareSegments(e,t){const r=ct.isNumericId(e),s=ct.isNumericId(t);return r&&!s?-1:!r&&s?1:r&&s?ct.extractNumericId(e).compare(ct.extractNumericId(t)):Yo(e,t)}static isNumericId(e){return e.startsWith("__id")&&e.endsWith("__")}static extractNumericId(e){return zt.fromString(e.substring(4,e.length-2))}}class X extends ct{construct(e,t,r){return new X(e,t,r)}canonicalString(){return this.toArray().join("/")}toString(){return this.canonicalString()}toStringWithLeadingSlash(){return`/${this.canonicalString()}`}toUriEncodedString(){return this.toArray().map(encodeURIComponent).join("/")}static fromString(...e){const t=[];for(const r of e){if(r.indexOf("//")>=0)throw new D(C.INVALID_ARGUMENT,`Invalid segment (${r}). Paths must not contain // in them.`);t.push(...r.split("/").filter(s=>s.length>0))}return new X(t)}static emptyPath(){return new X([])}}const zm=/^[_a-zA-Z][_a-zA-Z0-9]*$/;let Ge=class Mn extends ct{construct(e,t,r){return new Mn(e,t,r)}static isValidIdentifier(e){return zm.test(e)}canonicalString(){return this.toArray().map(e=>(e=e.replace(/\\/g,"\\\\").replace(/`/g,"\\`"),Mn.isValidIdentifier(e)||(e="`"+e+"`"),e)).join(".")}toString(){return this.canonicalString()}isKeyField(){return this.length===1&&this.get(0)===ut}static keyField(){return new Mn([ut])}static fromServerFormat(e){const t=[];let r="",s=0;const i=()=>{if(r.length===0)throw new D(C.INVALID_ARGUMENT,`Invalid field path (${e}). Paths must not be empty, begin with '.', end with '.', or contain '..'`);t.push(r),r=""};let a=!1;for(;s<e.length;){const c=e[s];if(c==="\\"){if(s+1===e.length)throw new D(C.INVALID_ARGUMENT,"Path has trailing escape character: "+e);const l=e[s+1];if(l!=="\\"&&l!=="."&&l!=="`")throw new D(C.INVALID_ARGUMENT,"Path has invalid escape sequence: "+e);r+=l,s+=2}else c==="`"?(a=!a,s++):c!=="."||a?(r+=c,s++):(i(),s++)}if(i(),a)throw new D(C.INVALID_ARGUMENT,"Unterminated ` in path: "+e);return new Mn(t)}static emptyPath(){return new Mn([])}};/**
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
 */class ze{constructor(e){this.fields=e,e.sort(Ge.comparator)}static empty(){return new ze([])}unionWith(e){let t=new de(Ge.comparator);for(const r of this.fields)t=t.add(r);for(const r of e)t=t.add(r);return new ze(t.toArray())}covers(e){for(const t of this.fields)if(t.isPrefixOf(e))return!0;return!1}isEqual(e){return Gn(this.fields,e.fields,(t,r)=>t.isEqual(r))}}/**
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
 */function di(n){let e=0;for(const t in n)Object.prototype.hasOwnProperty.call(n,t)&&e++;return e}function cn(n,e){for(const t in n)Object.prototype.hasOwnProperty.call(n,t)&&e(t,n[t])}function Hm(n,e){const t=[];for(const r in n)Object.prototype.hasOwnProperty.call(n,r)&&t.push(e(n[r],r,n));return t}function gh(n){for(const e in n)if(Object.prototype.hasOwnProperty.call(n,e))return!1;return!0}/**
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
 */class B{constructor(e){this.path=e}static fromPath(e){return new B(X.fromString(e))}static fromName(e){return new B(X.fromString(e).popFirst(5))}static empty(){return new B(X.emptyPath())}get collectionGroup(){return this.path.popLast().lastSegment()}hasCollectionId(e){return this.path.length>=2&&this.path.get(this.path.length-2)===e}getCollectionGroup(){return this.path.get(this.path.length-2)}getCollectionPath(){return this.path.popLast()}isEqual(e){return e!==null&&X.comparator(this.path,e.path)===0}toString(){return this.path.toString()}static comparator(e,t){return X.comparator(e.path,t.path)}static isDocumentKey(e){return e.length%2==0}static fromSegments(e){return new B(new X(e.slice()))}}/**
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
 */function _h(n,e,t){if(!t)throw new D(C.INVALID_ARGUMENT,`Function ${n}() cannot be called with an empty ${e}.`)}function Gm(n,e,t,r){if(e===!0&&r===!0)throw new D(C.INVALID_ARGUMENT,`${n} and ${t} cannot be used together.`)}function xu(n){if(!B.isDocumentKey(n))throw new D(C.INVALID_ARGUMENT,`Invalid document reference. Document references must have an even number of segments, but ${n} has ${n.length}.`)}function Ou(n){if(B.isDocumentKey(n))throw new D(C.INVALID_ARGUMENT,`Invalid collection reference. Collection references must have an odd number of segments, but ${n} has ${n.length}.`)}function ys(n){return typeof n=="object"&&n!==null&&(Object.getPrototypeOf(n)===Object.prototype||Object.getPrototypeOf(n)===null)}function xi(n){if(n===void 0)return"undefined";if(n===null)return"null";if(typeof n=="string")return n.length>20&&(n=`${n.substring(0,20)}...`),JSON.stringify(n);if(typeof n=="number"||typeof n=="boolean")return""+n;if(typeof n=="object"){if(n instanceof Array)return"an array";{const e=function(r){return r.constructor?r.constructor.name:null}(n);return e?`a custom ${e} object`:"an object"}}return typeof n=="function"?"a function":q(12329,{type:typeof n})}function Ke(n,e){if("_delegate"in n&&(n=n._delegate),!(n instanceof e)){if(e.name===n.constructor.name)throw new D(C.INVALID_ARGUMENT,"Type does not match the expected instance. Did you pass a reference from a different Firestore SDK?");{const t=xi(n);throw new D(C.INVALID_ARGUMENT,`Expected type '${e.name}', but it was: ${t}`)}}return n}function Km(n,e){if(e<=0)throw new D(C.INVALID_ARGUMENT,`Function ${n}() requires a positive number, but it was: ${e}.`)}/**
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
 */function he(n,e){const t={typeString:n};return e&&(t.value=e),t}function Es(n,e){if(!ys(n))throw new D(C.INVALID_ARGUMENT,"JSON must be an object");let t;for(const r in e)if(e[r]){const s=e[r].typeString,i="value"in e[r]?{value:e[r].value}:void 0;if(!(r in n)){t=`JSON missing required field: '${r}'`;break}const a=n[r];if(s&&typeof a!==s){t=`JSON field '${r}' must be a ${s}.`;break}if(i!==void 0&&a!==i.value){t=`Expected '${r}' field to equal '${i.value}'`;break}}if(t)throw new D(C.INVALID_ARGUMENT,t);return!0}/**
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
 */const Lu=-62135596800,Mu=1e6;class Z{static now(){return Z.fromMillis(Date.now())}static fromDate(e){return Z.fromMillis(e.getTime())}static fromMillis(e){const t=Math.floor(e/1e3),r=Math.floor((e-1e3*t)*Mu);return new Z(t,r)}static fromInstant(e){if(!e||typeof e.t!="bigint")throw new D(C.INVALID_ARGUMENT,"Invalid Temporal.Instant object provided.");return Z._fromEpochNanoseconds(e.t)}static _fromEpochNanoseconds(e){let t,r;if(e>=0n)t=Number(e/1000000000n),r=Number(e%1000000000n);else{const s=e%1000000000n;s===0n?(t=Number(e/1000000000n),r=0):(t=Number(e/1000000000n-1n),r=Number(s+1000000000n))}return new Z(t,r)}constructor(e,t){if(this.seconds=e,this.nanoseconds=t,t<0)throw new D(C.INVALID_ARGUMENT,"Timestamp nanoseconds out of range: "+t);if(t>=1e9)throw new D(C.INVALID_ARGUMENT,"Timestamp nanoseconds out of range: "+t);if(e<Lu)throw new D(C.INVALID_ARGUMENT,"Timestamp seconds out of range: "+e);if(e>=253402300800)throw new D(C.INVALID_ARGUMENT,"Timestamp seconds out of range: "+e)}toDate(){return new Date(this.toMillis())}toMillis(){return 1e3*this.seconds+this.nanoseconds/Mu}toInstant(){if(typeof Temporal>"u"||!Temporal.Instant)throw new D(C.FAILED_PRECONDITION,"The Temporal object is not available in the current environment.");const e=1000000000n*BigInt(this.seconds)+BigInt(this.nanoseconds);return Temporal.Instant.__PRIVATE_fromEpochNanoseconds(e)}_compareTo(e){return this.seconds===e.seconds?K(this.nanoseconds,e.nanoseconds):K(this.seconds,e.seconds)}isEqual(e){return e.seconds===this.seconds&&e.nanoseconds===this.nanoseconds}toString(){return"Timestamp(seconds="+this.seconds+", nanoseconds="+this.nanoseconds+")"}toJSON(){return{type:Z._jsonSchemaVersion,seconds:this.seconds,nanoseconds:this.nanoseconds}}static fromJSON(e){if(Es(e,Z._jsonSchema))return new Z(e.seconds,e.nanoseconds)}valueOf(){const e=this.seconds-Lu;return String(e).padStart(12,"0")+"."+String(this.nanoseconds).padStart(9,"0")}}Z._jsonSchemaVersion="firestore/timestamp/1.0",Z._jsonSchema={type:he("string",Z._jsonSchemaVersion),seconds:he("number"),nanoseconds:he("number")};/**
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
 */class yh extends Error{constructor(){super(...arguments),this.name="Base64DecodeError"}}/**
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
 */class fe{constructor(e){this.binaryString=e}static fromBase64String(e){const t=function(s){try{return atob(s)}catch(i){throw typeof DOMException<"u"&&i instanceof DOMException?new yh("Invalid base64 string: "+i):i}}(e);return new fe(t)}static fromUint8Array(e){const t=function(s){let i="";for(let a=0;a<s.length;++a)i+=String.fromCharCode(s[a]);return i}(e);return new fe(t)}[Symbol.iterator](){let e=0;return{next:()=>e<this.binaryString.length?{value:this.binaryString.charCodeAt(e++),done:!1}:{value:void 0,done:!0}}}toBase64(){return function(t){return btoa(t)}(this.binaryString)}toUint8Array(){return function(t){const r=new Uint8Array(t.length);for(let s=0;s<t.length;s++)r[s]=t.charCodeAt(s);return r}(this.binaryString)}approximateByteSize(){return 2*this.binaryString.length}compareTo(e){return K(this.binaryString,e.binaryString)}isEqual(e){return this.binaryString===e.binaryString}}fe.EMPTY_BYTE_STRING=new fe("");const Qm=new RegExp(/^\d{4}-\d\d-\d\dT\d\d:\d\d:\d\d(?:\.(\d+))?Z$/);function Qt(n){if(F(!!n,39018),typeof n=="string"){let e=0;const t=Qm.exec(n);if(F(!!t,46558,{timestamp:n}),t[1]){let s=t[1];s=(s+"000000000").substr(0,9),e=Number(s)}const r=new Date(n);return{seconds:Math.floor(r.getTime()/1e3),nanos:e}}return{seconds:re(n.seconds),nanos:re(n.nanos)}}function re(n){return typeof n=="number"?n:typeof n=="string"?Number(n):0}function Yt(n){return typeof n=="string"?fe.fromBase64String(n):fe.fromUint8Array(n)}/**
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
 */const Eh="server_timestamp",wh="__type__",Th="__previous_value__",Ih="__local_write_time__";function Oi(n){var t,r;return((r=(((t=n==null?void 0:n.mapValue)==null?void 0:t.fields)||{})[wh])==null?void 0:r.stringValue)===Eh}function ws(n){const e=n.mapValue.fields[Th];return Oi(e)?ws(e):e}function Kn(n){const e=Qt(n.mapValue.fields[Ih].timestampValue);return new Z(e.seconds,e.nanos)}/**
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
 */class Ym{constructor(e,t,r,s,i,a,c,l,h,f,m,E,V){this.databaseId=e,this.appId=t,this.persistenceKey=r,this.host=s,this.ssl=i,this.forceLongPolling=a,this.autoDetectLongPolling=c,this.longPollingOptions=l,this.useFetchStreams=h,this.isUsingEmulator=f,this.apiKey=m,this._customHeaders=E,this.grpcFlowControlWindow=V}}const fi="(default)";class Zr{constructor(e,t){this.projectId=e,this.database=t||fi}static empty(){return new Zr("","")}get isDefaultDatabase(){return this.database===fi}isEqual(e){return e instanceof Zr&&e.projectId===this.projectId&&e.database===this.database}}function Jm(n,e){if(!Object.prototype.hasOwnProperty.apply(n.options,["projectId"]))throw new D(C.INVALID_ARGUMENT,'"projectId" not provided in firebase.initializeApp.');return new Zr(n.options.projectId,e)}/**
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
 */const Ea=-1;function Li(n){return n==null}function es(n){return n===0&&1/n==-1/0}function Xm(n){return typeof n=="number"&&Number.isInteger(n)&&!es(n)&&n<=Number.MAX_SAFE_INTEGER&&n>=Number.MIN_SAFE_INTEGER}function Zm(n){return typeof n=="string"}/**
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
 */const vh="__type__",eg="__max__",Ks={mapValue:{}},Ah="__vector__",ts="value",Qn={nullValue:"NULL_VALUE"},Ue={booleanValue:!0},Ee={booleanValue:!1};function pe(n){return"nullValue"in n?0:"booleanValue"in n?1:"integerValue"in n||"doubleValue"in n?2:"timestampValue"in n?3:"stringValue"in n?5:"bytesValue"in n?6:"referenceValue"in n?7:"geoPointValue"in n?8:"arrayValue"in n?9:"mapValue"in n?Oi(n)?4:tg(n)?9007199254740991:pi(n)?10:11:q(28295,{value:n})}function et(n,e,t){if(n===e)return!0;const r=pe(n);if(r!==pe(e))return!1;switch(r){case 0:case 9007199254740991:return!0;case 1:return n.booleanValue===e.booleanValue;case 4:return Kn(n).isEqual(Kn(e));case 3:return function(i,a){if(typeof i.timestampValue=="string"&&typeof a.timestampValue=="string"&&i.timestampValue.length===a.timestampValue.length)return i.timestampValue===a.timestampValue;const c=Qt(i.timestampValue),l=Qt(a.timestampValue);return c.seconds===l.seconds&&c.nanos===l.nanos}(n,e);case 5:return n.stringValue===e.stringValue;case 6:return function(i,a){return Yt(i.bytesValue).isEqual(Yt(a.bytesValue))}(n,e);case 7:return n.referenceValue===e.referenceValue;case 8:return function(i,a){return re(i.geoPointValue.latitude)===re(a.geoPointValue.latitude)&&re(i.geoPointValue.longitude)===re(a.geoPointValue.longitude)}(n,e);case 2:return function(i,a,c){if("integerValue"in i&&"integerValue"in a)return re(i.integerValue)===re(a.integerValue);let l,h;if("doubleValue"in i&&"doubleValue"in a)l=re(i.doubleValue),h=re(a.doubleValue);else{if(!(c!=null&&c.i))return!1;l=re(i.integerValue??i.doubleValue),h=re(a.integerValue??a.doubleValue)}return l===h?!!(c!=null&&c.o)||es(l)===es(h):!!(c===void 0||c.u)&&isNaN(l)&&isNaN(h)}(n,e,t);case 9:return Gn(n.arrayValue.values||[],e.arrayValue.values||[],(s,i)=>et(s,i,t));case 10:case 11:return function(i,a,c){const l=i.mapValue.fields||{},h=a.mapValue.fields||{};if(di(l)!==di(h))return!1;for(const f in l)if(l.hasOwnProperty(f)&&(h[f]===void 0||!et(l[f],h[f],c)))return!1;return!0}(n,e,t);default:return q(52216,{left:n})}}function ns(n,e){return(n.values||[]).find(t=>et(t,e))!==void 0}function Fe(n,e){if(n===e)return 0;const t=pe(n),r=pe(e);if(t!==r)return K(t,r);switch(t){case 0:case 9007199254740991:return 0;case 1:return K(n.booleanValue,e.booleanValue);case 2:return function(i,a){const c=re(i.integerValue||i.doubleValue),l=re(a.integerValue||a.doubleValue);return c<l?-1:c>l?1:c===l?0:isNaN(c)?isNaN(l)?0:-1:1}(n,e);case 3:return Uu(n.timestampValue,e.timestampValue);case 4:return Uu(Kn(n),Kn(e));case 5:return Yo(n.stringValue,e.stringValue);case 6:return function(i,a){const c=Yt(i),l=Yt(a);return c.compareTo(l)}(n.bytesValue,e.bytesValue);case 7:return function(i,a){const c=i.split("/"),l=a.split("/");for(let h=0;h<c.length&&h<l.length;h++){const f=K(c[h],l[h]);if(f!==0)return f}return K(c.length,l.length)}(n.referenceValue,e.referenceValue);case 8:return function(i,a){const c=K(re(i.latitude),re(a.latitude));return c!==0?c:K(re(i.longitude),re(a.longitude))}(n.geoPointValue,e.geoPointValue);case 9:return Fu(n.arrayValue,e.arrayValue);case 10:return function(i,a){var E,V,N,U;const c=i.fields||{},l=a.fields||{},h=(E=c[ts])==null?void 0:E.arrayValue,f=(V=l[ts])==null?void 0:V.arrayValue,m=K(((N=h==null?void 0:h.values)==null?void 0:N.length)||0,((U=f==null?void 0:f.values)==null?void 0:U.length)||0);return m!==0?m:Fu(h,f)}(n.mapValue,e.mapValue);case 11:return function(i,a){if(i===Ks.mapValue&&a===Ks.mapValue)return 0;if(i===Ks.mapValue)return 1;if(a===Ks.mapValue)return-1;const c=i.fields||{},l=Object.keys(c),h=a.fields||{},f=Object.keys(h);l.sort(),f.sort();for(let m=0;m<l.length&&m<f.length;++m){const E=Yo(l[m],f[m]);if(E!==0)return E;const V=Fe(c[l[m]],h[f[m]]);if(V!==0)return V}return K(l.length,f.length)}(n.mapValue,e.mapValue);default:throw q(23264,{l:t})}}function Uu(n,e){if(typeof n=="string"&&typeof e=="string"&&n.length===e.length)return K(n,e);const t=Qt(n),r=Qt(e),s=K(t.seconds,r.seconds);return s!==0?s:K(t.nanos,r.nanos)}function Fu(n,e){const t=n.values||[],r=e.values||[];for(let s=0;s<t.length&&s<r.length;++s){const i=Fe(t[s],r[s]);if(i!==void 0&&i!==0)return i}return K(t.length,r.length)}function Yn(n){return Jo(n)}function Jo(n){return"nullValue"in n?"null":"booleanValue"in n?""+n.booleanValue:"integerValue"in n?""+n.integerValue:"doubleValue"in n?""+n.doubleValue:"timestampValue"in n?function(t){const r=Qt(t);return`time(${r.seconds},${r.nanos})`}(n.timestampValue):"stringValue"in n?n.stringValue:"bytesValue"in n?function(t){return Yt(t).toBase64()}(n.bytesValue):"referenceValue"in n?function(t){return B.fromName(t).toString()}(n.referenceValue):"geoPointValue"in n?function(t){return`geo(${t.latitude},${t.longitude})`}(n.geoPointValue):"arrayValue"in n?function(t){let r="[",s=!0;for(const i of t.values||[])s?s=!1:r+=",",r+=Jo(i);return r+"]"}(n.arrayValue):"mapValue"in n?function(t){const r=Object.keys(t.fields||{}).sort();let s="{",i=!0;for(const a of r)i?i=!1:s+=",",s+=`${a}:${Jo(t.fields[a])}`;return s+"}"}(n.mapValue):q(61005,{value:n})}function ei(n){switch(pe(n)){case 0:case 1:return 4;case 2:return 8;case 3:case 8:return 16;case 4:const e=ws(n);return e?16+ei(e):16;case 5:return 2*n.stringValue.length;case 6:return Yt(n.bytesValue).approximateByteSize();case 7:return n.referenceValue.length;case 9:return function(r){return(r.values||[]).reduce((s,i)=>s+ei(i),0)}(n.arrayValue);case 10:case 11:return function(r){let s=0;return cn(r.fields,(i,a)=>{s+=i.length+ei(a)}),s}(n.mapValue);default:throw q(13486,{value:n})}}function Bu(n,e){return{referenceValue:`projects/${n.projectId}/databases/${n.database}/documents/${e.path.canonicalString()}`}}function lt(n){return!!n&&"integerValue"in n}function yn(n){return!!n&&"doubleValue"in n}function Jt(n){return lt(n)||yn(n)}function Jn(n){return!!n&&"arrayValue"in n}function He(n){return!!n&&"nullValue"in n}function Be(n){return!!n&&"doubleValue"in n&&isNaN(Number(n.doubleValue))}function En(n){return!!n&&"mapValue"in n}function pi(n){var t,r;return((r=(((t=n==null?void 0:n.mapValue)==null?void 0:t.fields)||{})[vh])==null?void 0:r.stringValue)===Ah}function Xo(n){var e,t;return(t=(((e=n==null?void 0:n.mapValue)==null?void 0:e.fields)||{})[ts])==null?void 0:t.arrayValue}function Fr(n){if(n.geoPointValue)return{geoPointValue:{...n.geoPointValue}};if(n.timestampValue&&typeof n.timestampValue=="object")return{timestampValue:{...n.timestampValue}};if(n.mapValue){const e={mapValue:{fields:{}}};return cn(n.mapValue.fields,(t,r)=>e.mapValue.fields[t]=Fr(r)),e}if(n.arrayValue){const e={arrayValue:{values:[]}};for(let t=0;t<(n.arrayValue.values||[]).length;++t)e.arrayValue.values[t]=Fr(n.arrayValue.values[t]);return e}return{...n}}function tg(n){return(((n.mapValue||{}).fields||{}).__type__||{}).stringValue===eg}/**
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
 */class De{constructor(e){this.value=e}static empty(){return new De({mapValue:{}})}field(e){if(e.isEmpty())return this.value;{let t=this.value;for(let r=0;r<e.length-1;++r)if(t=(t.mapValue.fields||{})[e.get(r)],!En(t))return null;return t=(t.mapValue.fields||{})[e.lastSegment()],t||null}}set(e,t){this.getFieldsMap(e.popLast())[e.lastSegment()]=Fr(t)}setAll(e){let t=Ge.emptyPath(),r={},s=[];e.forEach((a,c)=>{if(!t.isImmediateParentOf(c)){const l=this.getFieldsMap(t);this.applyChanges(l,r,s),r={},s=[],t=c.popLast()}a?r[c.lastSegment()]=Fr(a):s.push(c.lastSegment())});const i=this.getFieldsMap(t);this.applyChanges(i,r,s)}delete(e){const t=this.field(e.popLast());En(t)&&t.mapValue.fields&&delete t.mapValue.fields[e.lastSegment()]}isEqual(e){return et(this.value,e.value)}getFieldsMap(e){let t=this.value;t.mapValue.fields||(t.mapValue={fields:{}});for(let r=0;r<e.length;++r){let s=t.mapValue.fields[e.get(r)];En(s)&&s.mapValue.fields||(s={mapValue:{fields:{}}},t.mapValue.fields[e.get(r)]=s),t=s}return t.mapValue.fields}applyChanges(e,t,r){cn(t,(s,i)=>e[s]=i);for(const s of r)delete e[s]}clone(){return new De(Fr(this.value))}}function Rh(n){const e=[];return cn(n.fields,(t,r)=>{const s=new Ge([t]);if(En(r)){const i=Rh(r.mapValue).fields;if(i.length===0)e.push(s);else for(const a of i)e.push(s.child(a))}else e.push(s)}),new ze(e)}/**
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
 */function Mi(n,e){if(n.useProto3Json){if(isNaN(e))return{doubleValue:"NaN"};if(e===1/0)return{doubleValue:"Infinity"};if(e===-1/0)return{doubleValue:"-Infinity"}}return{doubleValue:es(e)?"-0":e}}function wa(n){return{integerValue:""+n}}function Ta(n,e,t){return Xm(e)?wa(e):Mi(n,e)}/**
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
 */class Ui{constructor(){this._=void 0}}function ng(n,e,t){return n instanceof rs?function(s,i){const a={fields:{[wh]:{stringValue:Eh},[Ih]:{timestampValue:{seconds:s.seconds,nanos:s.nanoseconds}}}};return i&&Oi(i)&&(i=ws(i)),i&&(a.fields[Th]=i),{mapValue:a}}(t,e):n instanceof ss?Sh(n,e):n instanceof is?Vh(n,e):n instanceof os?function(s,i){const a=Ph(s,i),c=_i(a)+_i(s.h);return lt(a)&&lt(s.h)?wa(c):Mi(s.serializer,c)}(n,e):n instanceof mi?function(s,i){return qu(s,i,Math.min)}(n,e):n instanceof gi?function(s,i){return qu(s,i,Math.max)}(n,e):void 0}function rg(n,e,t){return n instanceof ss?Sh(n,e):n instanceof is?Vh(n,e):t}function Ph(n,e){return n instanceof os?Jt(e)?e:{integerValue:0}:null}class rs extends Ui{}class ss extends Ui{constructor(e){super(),this.elements=e}}function Sh(n,e){const t=Ch(e);for(const r of n.elements)t.some(s=>et(s,r))||t.push(r);return{arrayValue:{values:t}}}class is extends Ui{constructor(e){super(),this.elements=e}}function Vh(n,e){let t=Ch(e);for(const r of n.elements)t=t.filter(s=>!et(s,r));return{arrayValue:{values:t}}}class Ia extends Ui{constructor(e,t){super(),this.serializer=e,this.h=t}}class os extends Ia{}class mi extends Ia{}class gi extends Ia{}function qu(n,e,t){if(!Jt(e))return n.h;const r=t(_i(e),_i(n.h));return lt(e)&&lt(n.h)?wa(r):Mi(n.serializer,r)}function _i(n){return re(n.integerValue||n.doubleValue)}function Ch(n){return Jn(n)&&n.arrayValue.values?n.arrayValue.values.slice():[]}/**
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
 */class sg{constructor(e,t){this.field=e,this.transform=t}}function ig(n,e){return n.field.isEqual(e.field)&&function(r,s){return r instanceof ss&&s instanceof ss||r instanceof is&&s instanceof is?Gn(r.elements,s.elements,et):r instanceof os&&s instanceof os||r instanceof mi&&s instanceof mi||r instanceof gi&&s instanceof gi?et(r.h,s.h):r instanceof rs&&s instanceof rs}(n.transform,e.transform)}class og{constructor(e,t){this.version=e,this.transformResults=t}}class nt{constructor(e,t){this.updateTime=e,this.exists=t}static none(){return new nt}static exists(e){return new nt(void 0,e)}static updateTime(e){return new nt(e)}get isNone(){return this.updateTime===void 0&&this.exists===void 0}isEqual(e){return this.exists===e.exists&&(this.updateTime?!!e.updateTime&&this.updateTime.isEqual(e.updateTime):!e.updateTime)}}function ti(n,e){return n.updateTime!==void 0?e.isFoundDocument()&&e.version.isEqual(n.updateTime):n.exists===void 0||n.exists===e.isFoundDocument()}class Fi{}function bh(n,e){if(!n.hasLocalMutations||e&&e.fields.length===0)return null;if(e===null)return n.isNoDocument()?new va(n.key,nt.none()):new Ts(n.key,n.data,nt.none());{const t=n.data,r=De.empty();let s=new de(Ge.comparator);for(let i of e.fields)if(!s.has(i)){let a=t.field(i);a===null&&i.length>1&&(i=i.popLast(),a=t.field(i)),a===null?r.delete(i):r.set(i,a),s=s.add(i)}return new un(n.key,r,new ze(s.toArray()),nt.none())}}function ag(n,e,t){n instanceof Ts?function(s,i,a){const c=s.value.clone(),l=ju(s.fieldTransforms,i,a.transformResults);c.setAll(l),i.convertToFoundDocument(a.version,c).setHasCommittedMutations()}(n,e,t):n instanceof un?function(s,i,a){if(!ti(s.precondition,i))return void i.convertToUnknownDocument(a.version);const c=ju(s.fieldTransforms,i,a.transformResults),l=i.data;l.setAll(Nh(s)),l.setAll(c),i.convertToFoundDocument(a.version,l).setHasCommittedMutations()}(n,e,t):function(s,i,a){i.convertToNoDocument(a.version).setHasCommittedMutations()}(0,e,t)}function Br(n,e,t,r){return n instanceof Ts?function(i,a,c,l){if(!ti(i.precondition,a))return c;const h=i.value.clone(),f=Wu(i.fieldTransforms,l,a);return h.setAll(f),a.convertToFoundDocument(a.version,h).setHasLocalMutations(),null}(n,e,t,r):n instanceof un?function(i,a,c,l){if(!ti(i.precondition,a))return c;const h=Wu(i.fieldTransforms,l,a),f=a.data;return f.setAll(Nh(i)),f.setAll(h),a.convertToFoundDocument(a.version,f).setHasLocalMutations(),c===null?null:c.unionWith(i.fieldMask.fields).unionWith(i.fieldTransforms.map(m=>m.field))}(n,e,t,r):function(i,a,c){return ti(i.precondition,a)?(a.convertToNoDocument(a.version).setHasLocalMutations(),null):c}(n,e,t)}function cg(n,e){let t=null;for(const r of n.fieldTransforms){const s=e.data.field(r.field),i=Ph(r.transform,s||null);i!=null&&(t===null&&(t=De.empty()),t.set(r.field,i))}return t||null}function $u(n,e){return n.type===e.type&&!!n.key.isEqual(e.key)&&!!n.precondition.isEqual(e.precondition)&&!!function(r,s){return r===void 0&&s===void 0||!(!r||!s)&&Gn(r,s,(i,a)=>ig(i,a))}(n.fieldTransforms,e.fieldTransforms)&&(n.type===0?n.value.isEqual(e.value):n.type!==1||n.data.isEqual(e.data)&&n.fieldMask.isEqual(e.fieldMask))}class Ts extends Fi{constructor(e,t,r,s=[]){super(),this.key=e,this.value=t,this.precondition=r,this.fieldTransforms=s,this.type=0}getFieldMask(){return null}}class un extends Fi{constructor(e,t,r,s,i=[]){super(),this.key=e,this.data=t,this.fieldMask=r,this.precondition=s,this.fieldTransforms=i,this.type=1}getFieldMask(){return this.fieldMask}}function Nh(n){const e=new Map;return n.fieldMask.fields.forEach(t=>{if(!t.isEmpty()){const r=n.data.field(t);e.set(t,r)}}),e}function ju(n,e,t){const r=new Map;F(n.length===t.length,32656,{T:t.length,P:n.length});for(let s=0;s<t.length;s++){const i=n[s],a=i.transform,c=e.data.field(i.field);r.set(i.field,rg(a,c,t[s]))}return r}function Wu(n,e,t){const r=new Map;for(const s of n){const i=s.transform,a=t.data.field(s.field);r.set(s.field,ng(i,a,e))}return r}class va extends Fi{constructor(e,t){super(),this.key=e,this.precondition=t,this.type=2,this.fieldTransforms=[]}getFieldMask(){return null}}class ug extends Fi{constructor(e,t){super(),this.key=e,this.precondition=t,this.type=3,this.fieldTransforms=[]}getFieldMask(){return null}}/**
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
 */class yi{constructor(e,t){this.position=e,this.inclusive=t}}function zu(n,e,t){let r=0;for(let s=0;s<n.position.length;s++){const i=e[s],a=n.position[s];if(i.field.isKeyField()?r=B.comparator(B.fromName(a.referenceValue),t.key):r=Fe(a,t.data.field(i.field)),i.dir==="desc"&&(r*=-1),r!==0)break}return r}function Hu(n,e){if(n===null)return e===null;if(e===null||n.inclusive!==e.inclusive||n.position.length!==e.position.length)return!1;for(let t=0;t<n.position.length;t++)if(!et(n.position[t],e.position[t]))return!1;return!0}/**
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
 */class kh{}class le extends kh{constructor(e,t,r){super(),this.field=e,this.op=t,this.value=r}static create(e,t,r){return e.isKeyField()?t==="in"||t==="not-in"?this.createKeyFieldInFilter(e,t,r):new hg(e,t,r):t==="array-contains"?new pg(e,r):t==="in"?new mg(e,r):t==="not-in"?new gg(e,r):t==="array-contains-any"?new _g(e,r):new le(e,t,r)}static createKeyFieldInFilter(e,t,r){return t==="in"?new dg(e,r):new fg(e,r)}matches(e){const t=e.data.field(this.field);return this.op==="!="?t!==null&&t.nullValue===void 0&&this.matchesComparison(Fe(t,this.value)):t!==null&&pe(this.value)===pe(t)&&this.matchesComparison(Fe(t,this.value))}matchesComparison(e){switch(this.op){case"<":return e<0;case"<=":return e<=0;case"==":return e===0;case"!=":return e!==0;case">":return e>0;case">=":return e>=0;default:return q(47266,{operator:this.op})}}isInequality(){return["<","<=",">",">=","!=","not-in"].indexOf(this.op)>=0}getFlattenedFilters(){return[this]}getFilters(){return[this]}}class st extends kh{constructor(e,t){super(),this.filters=e,this.op=t,this.I=null}static create(e,t){return new st(e,t)}matches(e){return Dh(this)?this.filters.find(t=>!t.matches(e))===void 0:this.filters.find(t=>t.matches(e))!==void 0}getFlattenedFilters(){return this.I!==null||(this.I=this.filters.reduce((e,t)=>e.concat(t.getFlattenedFilters()),[])),this.I}getFilters(){return Object.assign([],this.filters)}}function Dh(n){return n.op==="and"}function xh(n){return lg(n)&&Dh(n)}function lg(n){for(const e of n.filters)if(e instanceof st)return!1;return!0}function Zo(n){if(n instanceof le)return n.field.canonicalString()+n.op.toString()+Yn(n.value);if(xh(n))return n.filters.map(e=>Zo(e)).join(",");{const e=n.filters.map(t=>Zo(t)).join(",");return`${n.op}(${e})`}}function Oh(n,e){return n instanceof le?function(r,s){return s instanceof le&&r.op===s.op&&r.field.isEqual(s.field)&&et(r.value,s.value)}(n,e):n instanceof st?function(r,s){return s instanceof st&&r.op===s.op&&r.filters.length===s.filters.length?r.filters.reduce((i,a,c)=>i&&Oh(a,s.filters[c]),!0):!1}(n,e):void q(19439)}function Lh(n){return n instanceof le?function(t){return`${t.field.canonicalString()} ${t.op} ${Yn(t.value)}`}(n):n instanceof st?function(t){return t.op.toString()+" {"+t.getFilters().map(Lh).join(" ,")+"}"}(n):"Filter"}class hg extends le{constructor(e,t,r){super(e,t,r),this.key=B.fromName(r.referenceValue)}matches(e){const t=B.comparator(e.key,this.key);return this.matchesComparison(t)}}class dg extends le{constructor(e,t){super(e,"in",t),this.keys=Mh("in",t)}matches(e){return this.keys.some(t=>t.isEqual(e.key))}}class fg extends le{constructor(e,t){super(e,"not-in",t),this.keys=Mh("not-in",t)}matches(e){return!this.keys.some(t=>t.isEqual(e.key))}}function Mh(n,e){var t;return(((t=e.arrayValue)==null?void 0:t.values)||[]).map(r=>B.fromName(r.referenceValue))}class pg extends le{constructor(e,t){super(e,"array-contains",t)}matches(e){const t=e.data.field(this.field);return Jn(t)&&ns(t.arrayValue,this.value)}}class mg extends le{constructor(e,t){super(e,"in",t)}matches(e){const t=e.data.field(this.field);return t!==null&&ns(this.value.arrayValue,t)}}class gg extends le{constructor(e,t){super(e,"not-in",t)}matches(e){if(ns(this.value.arrayValue,{nullValue:"NULL_VALUE"}))return!1;const t=e.data.field(this.field);return t!==null&&t.nullValue===void 0&&!ns(this.value.arrayValue,t)}}class _g extends le{constructor(e,t){super(e,"array-contains-any",t)}matches(e){const t=e.data.field(this.field);return!(!Jn(t)||!t.arrayValue.values)&&t.arrayValue.values.some(r=>ns(this.value.arrayValue,r))}}/**
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
 */class as{constructor(e,t="asc"){this.field=e,this.dir=t}}function yg(n,e){return n.dir===e.dir&&n.field.isEqual(e.field)}/**
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
 */class Se{constructor(e,t,r,s,i,a,c){this.key=e,this.documentType=t,this.version=r,this.readTime=s,this.createTime=i,this.data=a,this.documentState=c}static newInvalidDocument(e){return new Se(e,0,j.min(),j.min(),j.min(),De.empty(),0)}static newFoundDocument(e,t,r,s){return new Se(e,1,t,j.min(),r,s,0)}static newNoDocument(e,t){return new Se(e,2,t,j.min(),j.min(),De.empty(),0)}static newUnknownDocument(e,t){return new Se(e,3,t,j.min(),j.min(),De.empty(),2)}convertToFoundDocument(e,t){return!this.createTime.isEqual(j.min())||this.documentType!==2&&this.documentType!==0||(this.createTime=e),this.version=e,this.documentType=1,this.data=t,this.documentState=0,this}convertToNoDocument(e){return this.version=e,this.documentType=2,this.data=De.empty(),this.documentState=0,this}convertToUnknownDocument(e){return this.version=e,this.documentType=3,this.data=De.empty(),this.documentState=2,this}setHasCommittedMutations(){return this.documentState=2,this}setHasLocalMutations(){return this.documentState=1,this.version=j.min(),this}setReadTime(e){return this.readTime=e,this}get hasLocalMutations(){return this.documentState===1}get hasCommittedMutations(){return this.documentState===2}get hasPendingWrites(){return this.hasLocalMutations||this.hasCommittedMutations}isValidDocument(){return this.documentType!==0}isFoundDocument(){return this.documentType===1}isNoDocument(){return this.documentType===2}isUnknownDocument(){return this.documentType===3}isEqual(e){return e instanceof Se&&this.key.isEqual(e.key)&&this.version.isEqual(e.version)&&this.documentType===e.documentType&&this.documentState===e.documentState&&this.data.isEqual(e.data)}mutableCopy(){return new Se(this.key,this.documentType,this.version,this.readTime,this.createTime,this.data.clone(),this.documentState)}toString(){return`Document(${this.key}, ${this.version}, ${JSON.stringify(this.data.value)}, {createTime: ${this.createTime}}), {documentType: ${this.documentType}}), {documentState: ${this.documentState}})`}}/**
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
 */const cs=-1;function Eg(n,e){const t=n.toTimestamp().seconds,r=n.toTimestamp().nanoseconds+1,s=j.fromTimestamp(r===1e9?new Z(t+1,0):new Z(t,r));return new Xt(s,B.empty(),e)}function wg(n){return new Xt(n.readTime,n.key,cs)}class Xt{constructor(e,t,r){this.readTime=e,this.documentKey=t,this.largestBatchId=r}static min(){return new Xt(j.min(),B.empty(),cs)}static max(){return new Xt(j.max(),B.empty(),cs)}}function Tg(n,e){let t=n.readTime.compareTo(e.readTime);return t!==0?t:(t=B.comparator(n.documentKey,e.documentKey),t!==0?t:K(n.largestBatchId,e.largestBatchId))}/**
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
 */class Ig{constructor(e,t=null,r=[],s=[],i=null,a=null,c=null){this.path=e,this.collectionGroup=t,this.orderBy=r,this.filters=s,this.limit=i,this.startAt=a,this.endAt=c,this.R=null}}function Gu(n,e=null,t=[],r=[],s=null,i=null,a=null){return new Ig(n,e,t,r,s,i,a)}function Uh(n){const e=W(n);if(e.R===null){let t=e.path.canonicalString();e.collectionGroup!==null&&(t+="|cg:"+e.collectionGroup),t+="|f:",t+=e.filters.map(r=>Zo(r)).join(","),t+="|ob:",t+=e.orderBy.map(r=>function(i){return i.field.canonicalString()+i.dir}(r)).join(","),Li(e.limit)||(t+="|l:",t+=e.limit),e.startAt&&(t+="|lb:",t+=e.startAt.inclusive?"b:":"a:",t+=e.startAt.position.map(r=>Yn(r)).join(",")),e.endAt&&(t+="|ub:",t+=e.endAt.inclusive?"a:":"b:",t+=e.endAt.position.map(r=>Yn(r)).join(",")),e.R=t}return e.R}function Fh(n,e){if(n.limit!==e.limit||n.orderBy.length!==e.orderBy.length)return!1;for(let t=0;t<n.orderBy.length;t++)if(!yg(n.orderBy[t],e.orderBy[t]))return!1;if(n.filters.length!==e.filters.length)return!1;for(let t=0;t<n.filters.length;t++)if(!Oh(n.filters[t],e.filters[t]))return!1;return n.collectionGroup===e.collectionGroup&&!!n.path.isEqual(e.path)&&!!Hu(n.startAt,e.startAt)&&Hu(n.endAt,e.endAt)}function _n(n){return!!n.isCorePipeline}function Bh(n){return!!n.path&&B.isDocumentKey(n.path)&&n.collectionGroup===null&&n.filters.length===0}/**
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
 */class sr{constructor(e,t=null,r=[],s=[],i=null,a="F",c=null,l=null){this.path=e,this.collectionGroup=t,this.explicitOrderBy=r,this.filters=s,this.limit=i,this.limitType=a,this.startAt=c,this.endAt=l,this.A=null,this.V=null,this.m=null,this.startAt,this.endAt}}function vg(n,e,t,r,s,i,a,c){return new sr(n,e,t,r,s,i,a,c)}function Bi(n){return new sr(n)}function Ku(n){return n.filters.length===0&&n.limit===null&&n.startAt==null&&n.endAt==null&&(n.explicitOrderBy.length===0||n.explicitOrderBy.length===1&&n.explicitOrderBy[0].field.isKeyField())}function Ag(n){return B.isDocumentKey(n.path)&&n.collectionGroup===null&&n.filters.length===0}function qh(n){return n.collectionGroup!==null}function qr(n){const e=W(n);if(e.A===null){e.A=[];const t=new Set;for(const i of e.explicitOrderBy)e.A.push(i),t.add(i.field.canonicalString());const r=e.explicitOrderBy.length>0?e.explicitOrderBy[e.explicitOrderBy.length-1].dir:"asc";(function(a){let c=new de(Ge.comparator);return a.filters.forEach(l=>{l.getFlattenedFilters().forEach(h=>{h.isInequality()&&(c=c.add(h.field))})}),c})(e).forEach(i=>{t.has(i.canonicalString())||i.isKeyField()||e.A.push(new as(i,r))}),t.has(Ge.keyField().canonicalString())||e.A.push(new as(Ge.keyField(),r))}return e.A}function ht(n){const e=W(n);return e.V||(e.V=Rg(e,qr(n))),e.V}function Rg(n,e){if(n.limitType==="F")return Gu(n.path,n.collectionGroup,e,n.filters,n.limit,n.startAt,n.endAt);{e=e.map(s=>{const i=s.dir==="desc"?"asc":"desc";return new as(s.field,i)});const t=n.endAt?new yi(n.endAt.position,n.endAt.inclusive):null,r=n.startAt?new yi(n.startAt.position,n.startAt.inclusive):null;return Gu(n.path,n.collectionGroup,e,n.filters,n.limit,t,r)}}function ea(n,e){const t=n.filters.concat([e]);return new sr(n.path,n.collectionGroup,n.explicitOrderBy.slice(),t,n.limit,n.limitType,n.startAt,n.endAt)}function Pg(n,e){const t=n.explicitOrderBy.concat([e]);return new sr(n.path,n.collectionGroup,t,n.filters.slice(),n.limit,n.limitType,n.startAt,n.endAt)}function Ei(n,e,t){return new sr(n.path,n.collectionGroup,n.explicitOrderBy.slice(),n.filters.slice(),e,t,n.startAt,n.endAt)}function Sg(n,e){return Fh(ht(n),ht(e))&&n.limitType===e.limitType}function $r(n){return`Query(target=${function(t){let r=t.path.canonicalString();return t.collectionGroup!==null&&(r+=" collectionGroup="+t.collectionGroup),t.filters.length>0&&(r+=`, filters: [${t.filters.map(s=>Lh(s)).join(", ")}]`),Li(t.limit)||(r+=", limit: "+t.limit),t.orderBy.length>0&&(r+=`, orderBy: [${t.orderBy.map(s=>function(a){return`${a.field.canonicalString()} (${a.dir})`}(s)).join(", ")}]`),t.startAt&&(r+=", startAt: ",r+=t.startAt.inclusive?"b:":"a:",r+=t.startAt.position.map(s=>Yn(s)).join(",")),t.endAt&&(r+=", endAt: ",r+=t.endAt.inclusive?"a:":"b:",r+=t.endAt.position.map(s=>Yn(s)).join(",")),`Target(${r})`}(ht(n))}; limitType=${n.limitType})`}function qi(n,e){return e.isFoundDocument()&&function(r,s){const i=s.key.path;return r.collectionGroup!==null?s.key.hasCollectionId(r.collectionGroup)&&r.path.isPrefixOf(i):B.isDocumentKey(r.path)?r.path.isEqual(i):r.path.isImmediateParentOf(i)}(n,e)&&function(r,s){for(const i of qr(r))if(!i.field.isKeyField()&&s.data.field(i.field)===null)return!1;return!0}(n,e)&&function(r,s){for(const i of r.filters)if(!i.matches(s))return!1;return!0}(n,e)&&function(r,s){return!(r.startAt&&!function(a,c,l){const h=zu(a,c,l);return a.inclusive?h<=0:h<0}(r.startAt,qr(r),s)||r.endAt&&!function(a,c,l){const h=zu(a,c,l);return a.inclusive?h>=0:h>0}(r.endAt,qr(r),s))}(n,e)}function Aa(n){return(e,t)=>{let r=!1;for(const s of qr(n)){const i=Vg(s,e,t);if(i!==0)return i;r=r||s.field.isKeyField()}return 0}}function Vg(n,e,t){const r=n.field.isKeyField()?B.comparator(e.key,t.key):function(i,a,c){const l=a.data.field(i),h=c.data.field(i);return l!==null&&h!==null?Fe(l,h):q(42886)}(n.field,e,t);switch(n.dir){case"asc":return r;case"desc":return-1*r;default:return q(19790,{direction:n.dir})}}/**
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
 */class Cg{constructor(e,t){this.count=e,this.unchangedNames=t}}/**
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
 */var ce,Y;function bg(n){switch(n){case C.OK:return q(64938);case C.CANCELLED:case C.UNKNOWN:case C.DEADLINE_EXCEEDED:case C.RESOURCE_EXHAUSTED:case C.INTERNAL:case C.UNAVAILABLE:case C.UNAUTHENTICATED:return!1;case C.INVALID_ARGUMENT:case C.NOT_FOUND:case C.ALREADY_EXISTS:case C.PERMISSION_DENIED:case C.FAILED_PRECONDITION:case C.ABORTED:case C.OUT_OF_RANGE:case C.UNIMPLEMENTED:case C.DATA_LOSS:return!0;default:return q(15467,{code:n})}}function $h(n){if(n===void 0)return St("GRPC error has no .code"),C.UNKNOWN;switch(n){case ce.OK:return C.OK;case ce.CANCELLED:return C.CANCELLED;case ce.UNKNOWN:return C.UNKNOWN;case ce.DEADLINE_EXCEEDED:return C.DEADLINE_EXCEEDED;case ce.RESOURCE_EXHAUSTED:return C.RESOURCE_EXHAUSTED;case ce.INTERNAL:return C.INTERNAL;case ce.UNAVAILABLE:return C.UNAVAILABLE;case ce.UNAUTHENTICATED:return C.UNAUTHENTICATED;case ce.INVALID_ARGUMENT:return C.INVALID_ARGUMENT;case ce.NOT_FOUND:return C.NOT_FOUND;case ce.ALREADY_EXISTS:return C.ALREADY_EXISTS;case ce.PERMISSION_DENIED:return C.PERMISSION_DENIED;case ce.FAILED_PRECONDITION:return C.FAILED_PRECONDITION;case ce.ABORTED:return C.ABORTED;case ce.OUT_OF_RANGE:return C.OUT_OF_RANGE;case ce.UNIMPLEMENTED:return C.UNIMPLEMENTED;case ce.DATA_LOSS:return C.DATA_LOSS;default:return q(39323,{code:n})}}(Y=ce||(ce={}))[Y.OK=0]="OK",Y[Y.CANCELLED=1]="CANCELLED",Y[Y.UNKNOWN=2]="UNKNOWN",Y[Y.INVALID_ARGUMENT=3]="INVALID_ARGUMENT",Y[Y.DEADLINE_EXCEEDED=4]="DEADLINE_EXCEEDED",Y[Y.NOT_FOUND=5]="NOT_FOUND",Y[Y.ALREADY_EXISTS=6]="ALREADY_EXISTS",Y[Y.PERMISSION_DENIED=7]="PERMISSION_DENIED",Y[Y.UNAUTHENTICATED=16]="UNAUTHENTICATED",Y[Y.RESOURCE_EXHAUSTED=8]="RESOURCE_EXHAUSTED",Y[Y.FAILED_PRECONDITION=9]="FAILED_PRECONDITION",Y[Y.ABORTED=10]="ABORTED",Y[Y.OUT_OF_RANGE=11]="OUT_OF_RANGE",Y[Y.UNIMPLEMENTED=12]="UNIMPLEMENTED",Y[Y.INTERNAL=13]="INTERNAL",Y[Y.UNAVAILABLE=14]="UNAVAILABLE",Y[Y.DATA_LOSS=15]="DATA_LOSS";/**
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
 */class Cn{constructor(e,t){this.mapKeyFn=e,this.equalsFn=t,this.inner={},this.innerSize=0}get(e){const t=this.mapKeyFn(e),r=this.inner[t];if(r!==void 0){for(const[s,i]of r)if(this.equalsFn(s,e))return i}}has(e){return this.get(e)!==void 0}set(e,t){const r=this.mapKeyFn(e),s=this.inner[r];if(s===void 0)return this.inner[r]=[[e,t]],void this.innerSize++;for(let i=0;i<s.length;i++)if(this.equalsFn(s[i][0],e))return void(s[i]=[e,t]);s.push([e,t]),this.innerSize++}delete(e){const t=this.mapKeyFn(e),r=this.inner[t];if(r===void 0)return!1;for(let s=0;s<r.length;s++)if(this.equalsFn(r[s][0],e))return r.length===1?delete this.inner[t]:r.splice(s,1),this.innerSize--,!0;return!1}forEach(e){cn(this.inner,(t,r)=>{for(const[s,i]of r)e(s,i)})}isEmpty(){return gh(this.inner)}size(){return this.innerSize}}/**
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
 */const Ng=new ne(B.comparator);function Le(){return Ng}const jh=new ne(B.comparator);function Un(...n){let e=jh;for(const t of n)e=e.insert(t.key,t);return e}function Wh(n){let e=jh;return n.forEach((t,r)=>e=e.insert(t,r.overlayedDocument)),e}function Ft(){return jr()}function zh(){return jr()}function jr(){return new Cn(n=>n.toString(),(n,e)=>n.isEqual(e))}const kg=new ne(B.comparator),Dg=new de(B.comparator);function G(...n){let e=Dg;for(const t of n)e=e.add(t);return e}const xg=new de(K);function Og(){return xg}/**
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
 */function Lg(){return new TextEncoder}/**
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
 */const Mg=new zt([4294967295,4294967295],0);function Qu(n){const e=Lg().encode(n),t=new uh;return t.update(e),new Uint8Array(t.digest())}function Yu(n){const e=new DataView(n.buffer),t=e.getUint32(0,!0),r=e.getUint32(4,!0),s=e.getUint32(8,!0),i=e.getUint32(12,!0);return[new zt([t,r],0),new zt([s,i],0)]}class Ra{constructor(e,t,r){if(this.bitmap=e,this.padding=t,this.hashCount=r,t<0||t>=8)throw new Or(`Invalid padding: ${t}`);if(r<0)throw new Or(`Invalid hash count: ${r}`);if(e.length>0&&this.hashCount===0)throw new Or(`Invalid hash count: ${r}`);if(e.length===0&&t!==0)throw new Or(`Invalid padding when bitmap length is 0: ${t}`);this.p=8*e.length-t,this.S=zt.fromNumber(this.p)}v(e,t,r){let s=e.add(t.multiply(zt.fromNumber(r)));return s.compare(Mg)===1&&(s=new zt([s.getBits(0),s.getBits(1)],0)),s.modulo(this.S).toNumber()}D(e){return!!(this.bitmap[Math.floor(e/8)]&1<<e%8)}mightContain(e){if(this.p===0)return!1;const t=Qu(e),[r,s]=Yu(t);for(let i=0;i<this.hashCount;i++){const a=this.v(r,s,i);if(!this.D(a))return!1}return!0}static create(e,t,r){const s=e%8==0?0:8-e%8,i=new Uint8Array(Math.ceil(e/8)),a=new Ra(i,s,t);return r.forEach(c=>a.insert(c)),a}insert(e){if(this.p===0)return;const t=Qu(e),[r,s]=Yu(t);for(let i=0;i<this.hashCount;i++){const a=this.v(r,s,i);this.C(a)}}C(e){const t=Math.floor(e/8),r=e%8;this.bitmap[t]|=1<<r}}class Or extends Error{constructor(){super(...arguments),this.name="BloomFilterError"}}/**
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
 */class Is{constructor(e,t,r,s,i,a){this.snapshotVersion=e,this.targetChanges=t,this.targetMismatches=r,this.documentUpdates=s,this.augmentedDocumentUpdates=i,this.resolvedLimboDocuments=a}static createSynthesizedRemoteEventForCurrentChange(e,t,r){const s=new Map;return s.set(e,vs.createSynthesizedTargetChangeForCurrentChange(e,t,r)),new Is(j.min(),s,new ne(K),Le(),Le(),G())}}class vs{constructor(e,t,r,s,i){this.resumeToken=e,this.current=t,this.addedDocuments=r,this.modifiedDocuments=s,this.removedDocuments=i}static createSynthesizedTargetChangeForCurrentChange(e,t,r){return new vs(r,t,G(),G(),G())}}/**
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
 */class ni{constructor(e,t,r,s){this.F=e,this.removedTargetIds=t,this.key=r,this.O=s}}class Hh{constructor(e,t){this.targetId=e,this.M=t}}class Gh{constructor(e,t,r=fe.EMPTY_BYTE_STRING,s=null){this.state=e,this.targetIds=t,this.resumeToken=r,this.cause=s}}class Ju{constructor(e){this.targetId=e,this.N=0,this.L=Xu(),this.B=fe.EMPTY_BYTE_STRING,this.U=!1,this.k=!0}get current(){return this.U}get resumeToken(){return this.B}get q(){return this.N!==0}get $(){return this.k}K(e){e.approximateByteSize()>0&&(this.k=!0,this.B=e)}W(){let e=G(),t=G(),r=G();return this.L.forEach((s,i)=>{switch(i){case 0:e=e.add(s);break;case 2:t=t.add(s);break;case 1:r=r.add(s);break;default:q(38017,{changeType:i})}}),new vs(this.B,this.U,e,t,r)}G(){this.k=!1,this.L=Xu()}j(e,t){this.k=!0,this.L=this.L.insert(e,t)}H(e){this.k=!0,this.L=this.L.remove(e)}J(){this.N+=1}Y(){this.N-=1,F(this.N>=0,3241,{N:this.N,targetId:this.targetId})}Z(){this.k=!0,this.U=!0}}const Cr="WatchChangeAggregator";class Ug{constructor(e){this.X=e,this.ee=new Map,this.te=Le(),this.ne=Qs(),this.re=Le(),this.ie=Qs(),this.se=new ne(K)}_e(e){for(const t of e.F)e.O&&e.O.isFoundDocument()?this.oe(t,e.O):this.ae(t,e.key,e.O);for(const t of e.removedTargetIds)this.ae(t,e.key,e.O)}ue(e){this.forEachTarget(e,t=>{const r=this.ee.get(t);if(r)switch(e.state){case 0:this.ce(t)&&r.K(e.resumeToken);break;case 1:r.Y(),r.q||r.G(),r.K(e.resumeToken);break;case 2:r.Y(),r.q||this.removeTarget(t);break;case 3:this.ce(t)&&(r.Z(),r.K(e.resumeToken));break;case 4:this.ce(t)&&(this.le(t),r.K(e.resumeToken));break;default:q(56790,{state:e.state})}else O(Cr,`handleTargetChange received targetChange for untracked target ID (${t}) with state (${e.state})`)})}forEachTarget(e,t){e.targetIds.length>0?e.targetIds.forEach(t):this.ee.forEach((r,s)=>{this.ce(s)&&t(s)})}Ee(e){var t;return _n(e)?e.getPipelineSourceType()==="documents"&&((t=e.getPipelineDocuments())==null?void 0:t.length)===1:Bh(e)}he(e){const t=e.targetId,r=e.M.count,s=this.Te(t);if(s){const i=s.target;if(this.Ee(i))if(r===0){const a=new B(_n(i)?X.fromString(i.getPipelineDocuments()[0]):i.path);this.ae(t,a,Se.newNoDocument(a,j.min()))}else F(r===1,20013,"Single document existence filter with count: "+r);else{const a=this.Pe(t);if(a!==r){const c=this.Ie(e),l=c?this.Re(c,e,a):1;if(l!==0){this.le(t);const h=l===2?"TargetPurposeExistenceFilterMismatchBloom":"TargetPurposeExistenceFilterMismatch";this.se=this.se.insert(t,h)}}}}}Ie(e){const t=e.M.unchangedNames;if(!t||!t.bits)return null;const{bits:{bitmap:r="",padding:s=0},hashCount:i=0}=t;let a,c;try{a=Yt(r).toUint8Array()}catch(l){if(l instanceof yh)return rt("Decoding the base64 bloom filter in existence filter failed ("+l.message+"); ignoring the bloom filter and falling back to full re-query."),null;throw l}try{c=new Ra(a,s,i)}catch(l){return rt(l instanceof Or?"BloomFilter error: ":"Applying bloom filter failed: ",l),null}return c.p===0?null:c}Re(e,t,r){return t.M.count===r-this.de(e,t.targetId)?0:2}de(e,t){const r=this.X.getRemoteKeysForTarget(t);let s=0;return r.forEach(i=>{const a=this.X.Ve(),c=`projects/${a.projectId}/databases/${a.database}/documents/${i.path.canonicalString()}`;e.mightContain(c)||(this.ae(t,i,null),s++)}),s}fe(e){const t=new Map;this.ee.forEach((i,a)=>{const c=this.Te(a);if(c){if(i.current&&this.Ee(c.target)){const l=_n(c.target)?X.fromString(c.target.getPipelineDocuments()[0]):c.target.path,h=new B(l);this.me(h).has(a)||this.pe(a,h)||this.ae(a,h,Se.newNoDocument(h,e))}i.$&&(t.set(a,i.W()),i.G())}});let r=G();this.ie.forEach((i,a)=>{let c=!0;a.forEachWhile(l=>{const h=this.Te(l);return!h||h.purpose==="TargetPurposeLimboResolution"||(c=!1,!1)}),c&&(r=r.add(i))}),this.te.forEach((i,a)=>a.setReadTime(e)),this.re.forEach((i,a)=>a.setReadTime(e));const s=new Is(e,t,this.se,this.te,this.re,r);return this.te=Le(),this.ne=Qs(),this.re=Le(),this.ie=Qs(),this.se=new ne(K),s}oe(e,t){const r=this.ee.get(e);if(!r||!this.ce(e))return void O(Cr,`addDocumentToTarget received document for unknown inactive target (${e})`);const s=this.pe(e,t.key)?2:0;r.j(t.key,s),_n(this.Te(e).target)&&this.Te(e).target.getPipelineFlavor()!=="exact"?this.re=this.re.insert(t.key,t):this.te=this.te.insert(t.key,t),this.ne=this.ne.insert(t.key,this.me(t.key).add(e)),this.ie=this.ie.insert(t.key,this.ge(t.key).add(e))}ae(e,t,r){const s=this.ee.get(e);s&&this.ce(e)?(this.pe(e,t)?s.j(t,1):s.H(t),this.ie=this.ie.insert(t,this.ge(t).delete(e)),this.ie=this.ie.insert(t,this.ge(t).add(e)),r&&(_n(this.Te(e).target)&&this.Te(e).target.getPipelineFlavor()!=="exact"?this.re=this.re.insert(t,r):this.te=this.te.insert(t,r))):O(Cr,`removeDocumentFromTarget received document for unknown or inactive target (${e})`)}removeTarget(e){this.ee.delete(e)}Pe(e){const t=this.ee.get(e);if(!t)return 0;const r=t.W();return this.X.getRemoteKeysForTarget(e).size+r.addedDocuments.size-r.removedDocuments.size}J(e){let t=this.ee.get(e);t||(O(Cr,`recordPendingTargetRequest set up tracking for target ID ${e}`),t=new Ju(e),this.ee.set(e,t)),t.J()}ge(e){let t=this.ie.get(e);return t||(t=new de(K),this.ie=this.ie.insert(e,t)),t}me(e){let t=this.ne.get(e);return t||(t=new de(K),this.ne=this.ne.insert(e,t)),t}ce(e){const t=this.Te(e)!==null;return t||O(Cr,"Detected inactive target",e),t}Te(e){const t=this.ee.get(e);return t===void 0||t.q?null:this.X.ye(e)}le(e){this.ee.set(e,new Ju(e)),this.X.getRemoteKeysForTarget(e).forEach(t=>{this.ae(e,t,null)})}pe(e,t){return this.X.getRemoteKeysForTarget(e).has(t)}}function Qs(){return new ne(B.comparator)}function Xu(){return new ne(B.comparator)}const Fg={asc:"ASCENDING",desc:"DESCENDING"},Bg={"<":"LESS_THAN","<=":"LESS_THAN_OR_EQUAL",">":"GREATER_THAN",">=":"GREATER_THAN_OR_EQUAL","==":"EQUAL","!=":"NOT_EQUAL","array-contains":"ARRAY_CONTAINS",in:"IN","not-in":"NOT_IN","array-contains-any":"ARRAY_CONTAINS_ANY"},qg={and:"AND",or:"OR"};class $g{constructor(e,t){this.databaseId=e,this.useProto3Json=t}}function ta(n,e){return n.useProto3Json||Li(e)?e:{value:e}}function Wr(n,e){return n.useProto3Json?`${new Date(1e3*e.seconds).toISOString().replace(/\.\d*/,"").replace("Z","")}.${("000000000"+e.nanoseconds).slice(-9)}Z`:{seconds:""+e.seconds,nanos:e.nanoseconds}}function Pa(n){const e=Qt(n);return new Z(e.seconds,e.nanos)}function Kh(n,e){return n.useProto3Json?e.toBase64():e.toUint8Array()}function ri(n,e){return Wr(n,e.toTimestamp())}function dt(n){return F(!!n,49232),j.fromTimestamp(Pa(n))}function Sa(n,e){return na(n,e).canonicalString()}function na(n,e){const t=function(s){return new X(["projects",s.projectId,"databases",s.database])}(n).child("documents");return e===void 0?t:t.child(e)}function Qh(n){const e=X.fromString(n);return F(ed(e),10190,{key:e.toString()}),e}function wi(n,e){return Sa(n.databaseId,e.path)}function Lo(n,e){const t=Qh(e);if(t.get(1)!==n.databaseId.projectId)throw new D(C.INVALID_ARGUMENT,"Tried to deserialize key from different project: "+t.get(1)+" vs "+n.databaseId.projectId);if(t.get(3)!==n.databaseId.database)throw new D(C.INVALID_ARGUMENT,"Tried to deserialize key from different database: "+t.get(3)+" vs "+n.databaseId.database);return new B(Jh(t))}function Yh(n,e){return Sa(n.databaseId,e)}function jg(n){const e=Qh(n);return e.length===4?X.emptyPath():Jh(e)}function ra(n){return new X(["projects",n.databaseId.projectId,"databases",n.databaseId.database]).canonicalString()}function Jh(n){return F(n.length>4&&n.get(4)==="documents",29091,{key:n.toString()}),n.popFirst(5)}function Zu(n,e,t){return{name:wi(n,e),fields:t.value.mapValue.fields}}function Wg(n,e){let t;if("targetChange"in e){e.targetChange;const r=function(h){return h==="NO_CHANGE"?0:h==="ADD"?1:h==="REMOVE"?2:h==="CURRENT"?3:h==="RESET"?4:q(39313,{state:h})}(e.targetChange.targetChangeType||"NO_CHANGE"),s=e.targetChange.targetIds||[],i=function(h,f){return h.useProto3Json?(F(f===void 0||typeof f=="string",58123),fe.fromBase64String(f||"")):(F(f===void 0||f instanceof Buffer||f instanceof Uint8Array,16193),fe.fromUint8Array(f||new Uint8Array))}(n,e.targetChange.resumeToken),a=e.targetChange.cause,c=a&&function(h){const f=h.code===void 0?C.UNKNOWN:$h(h.code);return new D(f,h.message||"")}(a);t=new Gh(r,s,i,c||null)}else if("documentChange"in e){e.documentChange;const r=e.documentChange;r.document,r.document.name,r.document.updateTime;const s=Lo(n,r.document.name),i=dt(r.document.updateTime),a=r.document.createTime?dt(r.document.createTime):j.min(),c=new De({mapValue:{fields:r.document.fields}}),l=Se.newFoundDocument(s,i,a,c),h=r.targetIds||[],f=r.removedTargetIds||[];t=new ni(h,f,l.key,l)}else if("documentDelete"in e){e.documentDelete;const r=e.documentDelete;r.document;const s=Lo(n,r.document),i=r.readTime?dt(r.readTime):j.min(),a=Se.newNoDocument(s,i),c=r.removedTargetIds||[];t=new ni([],c,a.key,a)}else if("documentRemove"in e){e.documentRemove;const r=e.documentRemove;r.document;const s=Lo(n,r.document),i=r.removedTargetIds||[];t=new ni([],i,s,null)}else{if(!("filter"in e))return q(11601,{we:e});{e.filter;const r=e.filter;r.targetId;const{count:s=0,unchangedNames:i}=r,a=new Cg(s,i),c=r.targetId;t=new Hh(c,a)}}return t}function zg(n,e){let t;if(e instanceof Ts)t={update:Zu(n,e.key,e.value)};else if(e instanceof va)t={delete:wi(n,e.key)};else if(e instanceof un)t={update:Zu(n,e.key,e.data),updateMask:t_(e.fieldMask)};else{if(!(e instanceof ug))return q(16599,{be:e.type});t={verify:wi(n,e.key)}}return e.fieldTransforms.length>0&&(t.updateTransforms=e.fieldTransforms.map(r=>function(i,a){const c=a.transform;if(c instanceof rs)return{fieldPath:a.field.canonicalString(),setToServerValue:"REQUEST_TIME"};if(c instanceof ss)return{fieldPath:a.field.canonicalString(),appendMissingElements:{values:c.elements}};if(c instanceof is)return{fieldPath:a.field.canonicalString(),removeAllFromArray:{values:c.elements}};if(c instanceof os)return{fieldPath:a.field.canonicalString(),increment:c.h};if(c instanceof mi)return{fieldPath:a.field.canonicalString(),minimum:c.h};if(c instanceof gi)return{fieldPath:a.field.canonicalString(),maximum:c.h};throw q(20930,{transform:a.transform})}(0,r))),e.precondition.isNone||(t.currentDocument=function(s,i){return i.updateTime!==void 0?{updateTime:ri(s,i.updateTime)}:i.exists!==void 0?{exists:i.exists}:q(27497)}(n,e.precondition)),t}function Hg(n,e){return n&&n.length>0?(F(e!==void 0,14353),n.map(t=>function(s,i){let a=s.updateTime?dt(s.updateTime):dt(i);return a.isEqual(j.min())&&(a=dt(i)),new og(a,s.transformResults||[])}(t,e))):[]}function Gg(n,e){return{documents:[Yh(n,e.path)]}}function Kg(n,e){const t={structuredQuery:{}},r=e.path;let s;e.collectionGroup!==null?(s=r,t.structuredQuery.from=[{collectionId:e.collectionGroup,allDescendants:!0}]):(s=r.popLast(),t.structuredQuery.from=[{collectionId:r.lastSegment()}]),t.parent=Yh(n,s);const i=function(h){if(h.length!==0)return Zh(st.create(h,"and"))}(e.filters);i&&(t.structuredQuery.where=i);const a=function(h){if(h.length!==0)return h.map(f=>function(E){return{field:Fn(E.field),direction:Xg(E.dir)}}(f))}(e.orderBy);a&&(t.structuredQuery.orderBy=a);const c=ta(n,e.limit);return c!==null&&(t.structuredQuery.limit=c),e.startAt&&(t.structuredQuery.startAt=function(h){return{before:h.inclusive,values:h.position}}(e.startAt)),e.endAt&&(t.structuredQuery.endAt=function(h){return{before:!h.inclusive,values:h.position}}(e.endAt)),{Se:t,parent:s}}function Qg(n){let e=jg(n.parent);const t=n.structuredQuery,r=t.from?t.from.length:0;let s=null;if(r>0){F(r===1,65062);const f=t.from[0];f.allDescendants?s=f.collectionId:e=e.child(f.collectionId)}let i=[];t.where&&(i=function(m){const E=Xh(m);return E instanceof st&&xh(E)?E.getFilters():[E]}(t.where));let a=[];t.orderBy&&(a=function(m){return m.map(E=>function(N){return new as(Bn(N.field),function(L){switch(L){case"ASCENDING":return"asc";case"DESCENDING":return"desc";default:return}}(N.direction))}(E))}(t.orderBy));let c=null;t.limit&&(c=function(m){let E;return E=typeof m=="object"?m.value:m,Li(E)?null:E}(t.limit));let l=null;t.startAt&&(l=function(m){const E=!!m.before,V=m.values||[];return new yi(V,E)}(t.startAt));let h=null;return t.endAt&&(h=function(m){const E=!m.before,V=m.values||[];return new yi(V,E)}(t.endAt)),vg(e,s,a,i,c,"F",l,h)}function Yg(n,e){const t=function(s){switch(s){case"TargetPurposeListen":return null;case"TargetPurposeExistenceFilterMismatch":return"existence-filter-mismatch";case"TargetPurposeExistenceFilterMismatchBloom":return"existence-filter-mismatch-bloom";case"TargetPurposeLimboResolution":return"limbo-document";default:return q(28987,{purpose:s})}}(e.purpose);return t==null?null:{"goog-listen-tags":t}}function Jg(n,e){return{structuredPipeline:{pipeline:{stages:e.stages.map(t=>t._toProto(n))}}}}function Xh(n){return n.unaryFilter!==void 0?function(t){switch(t.unaryFilter.op){case"IS_NAN":const r=Bn(t.unaryFilter.field);return le.create(r,"==",{doubleValue:NaN});case"IS_NULL":const s=Bn(t.unaryFilter.field);return le.create(s,"==",{nullValue:"NULL_VALUE"});case"IS_NOT_NAN":const i=Bn(t.unaryFilter.field);return le.create(i,"!=",{doubleValue:NaN});case"IS_NOT_NULL":const a=Bn(t.unaryFilter.field);return le.create(a,"!=",{nullValue:"NULL_VALUE"});case"OPERATOR_UNSPECIFIED":return q(61313);default:return q(60726)}}(n):n.fieldFilter!==void 0?function(t){return le.create(Bn(t.fieldFilter.field),function(s){switch(s){case"EQUAL":return"==";case"NOT_EQUAL":return"!=";case"GREATER_THAN":return">";case"GREATER_THAN_OR_EQUAL":return">=";case"LESS_THAN":return"<";case"LESS_THAN_OR_EQUAL":return"<=";case"ARRAY_CONTAINS":return"array-contains";case"IN":return"in";case"NOT_IN":return"not-in";case"ARRAY_CONTAINS_ANY":return"array-contains-any";case"OPERATOR_UNSPECIFIED":return q(58110);default:return q(50506)}}(t.fieldFilter.op),t.fieldFilter.value)}(n):n.compositeFilter!==void 0?function(t){return st.create(t.compositeFilter.filters.map(r=>Xh(r)),function(s){switch(s){case"AND":return"and";case"OR":return"or";default:return q(1026)}}(t.compositeFilter.op))}(n):q(30097,{filter:n})}function Xg(n){return Fg[n]}function Zg(n){return Bg[n]}function e_(n){return qg[n]}function Fn(n){return{fieldPath:n.canonicalString()}}function Bn(n){return Ge.fromServerFormat(n.fieldPath)}function Zh(n){return n instanceof le?function(t){if(t.op==="=="){if(Be(t.value))return{unaryFilter:{field:Fn(t.field),op:"IS_NAN"}};if(He(t.value))return{unaryFilter:{field:Fn(t.field),op:"IS_NULL"}}}else if(t.op==="!="){if(Be(t.value))return{unaryFilter:{field:Fn(t.field),op:"IS_NOT_NAN"}};if(He(t.value))return{unaryFilter:{field:Fn(t.field),op:"IS_NOT_NULL"}}}return{fieldFilter:{field:Fn(t.field),op:Zg(t.op),value:t.value}}}(n):n instanceof st?function(t){const r=t.getFilters().map(s=>Zh(s));return r.length===1?r[0]:{compositeFilter:{op:e_(t.op),filters:r}}}(n):q(54877,{filter:n})}function t_(n){const e=[];return n.fields.forEach(t=>e.push(t.canonicalString())),{fieldPaths:e}}function ed(n){return n.length>=4&&n.get(0)==="projects"&&n.get(2)==="databases"}function td(n){return!!n&&typeof n._toProto=="function"&&n._protoValueType==="ProtoValue"}function us(n,e){const t={fields:{}};return e.forEach((r,s)=>{if(typeof s!="string")throw new Error(`Cannot encode map with non-string key: ${s}`);t.fields[s]=r._toProto(n)}),{mapValue:t}}function nd(n){return{stringValue:n}}/**
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
 */function $i(n){return new $g(n,!0)}/**
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
 */class Ze{constructor(e){this._byteString=e}static fromBase64String(e){try{return new Ze(fe.fromBase64String(e))}catch(t){throw new D(C.INVALID_ARGUMENT,"Failed to construct data from Base64 string: "+t)}}static fromUint8Array(e){return new Ze(fe.fromUint8Array(e))}toBase64(){return this._byteString.toBase64()}toUint8Array(){return this._byteString.toUint8Array()}toString(){return"Bytes(base64: "+this.toBase64()+")"}isEqual(e){return this._byteString.isEqual(e._byteString)}toJSON(){return{type:Ze._jsonSchemaVersion,bytes:this.toBase64()}}static fromJSON(e){if(Es(e,Ze._jsonSchema))return Ze.fromBase64String(e.bytes)}}Ze._jsonSchemaVersion="firestore/bytes/1.0",Ze._jsonSchema={type:he("string",Ze._jsonSchemaVersion),bytes:he("string")};/**
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
 */class ji{constructor(...e){for(let t=0;t<e.length;++t)if(e[t].length===0)throw new D(C.INVALID_ARGUMENT,"Invalid field name at argument $(i + 1). Field names must not be empty.");this._internalPath=new Ge(e)}isEqual(e){return this._internalPath.isEqual(e._internalPath)}}function n_(){return new ji(ut)}/**
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
 */class Wi{constructor(e){this._methodName=e}}/**
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
 */class ft{constructor(e,t){if(!isFinite(e)||e<-90||e>90)throw new D(C.INVALID_ARGUMENT,"Latitude must be a number between -90 and 90, but was: "+e);if(!isFinite(t)||t<-180||t>180)throw new D(C.INVALID_ARGUMENT,"Longitude must be a number between -180 and 180, but was: "+t);this._lat=e,this._long=t}get latitude(){return this._lat}get longitude(){return this._long}isEqual(e){return this._lat===e._lat&&this._long===e._long}_compareTo(e){return K(this._lat,e._lat)||K(this._long,e._long)}toJSON(){return{latitude:this._lat,longitude:this._long,type:ft._jsonSchemaVersion}}static fromJSON(e){if(Es(e,ft._jsonSchema))return new ft(e.latitude,e.longitude)}}ft._jsonSchemaVersion="firestore/geoPoint/1.0",ft._jsonSchema={type:he("string",ft._jsonSchemaVersion),latitude:he("number"),longitude:he("number")};/**
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
 */class Pe{constructor(e){this.uid=e}isAuthenticated(){return this.uid!=null}toKey(){return this.isAuthenticated()?"uid:"+this.uid:"anonymous-user"}isEqual(e){return e.uid===this.uid}}Pe.UNAUTHENTICATED=new Pe(null),Pe.GOOGLE_CREDENTIALS=new Pe("google-credentials-uid"),Pe.FIRST_PARTY=new Pe("first-party-uid"),Pe.MOCK_USER=new Pe("mock-user");/**
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
 */class vt{constructor(){this.promise=new Promise((e,t)=>{this.resolve=e,this.reject=t})}}/**
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
 */class rd{constructor(e,t){this.user=t,this.type="OAuth",this.headers=new Map,this.headers.set("Authorization",`Bearer ${e}`)}}class r_{getToken(){return Promise.resolve(null)}invalidateToken(){}start(e,t){e.enqueueRetryable(()=>t(Pe.UNAUTHENTICATED))}shutdown(){}}class s_{constructor(e){this.token=e,this.changeListener=null}getToken(){return Promise.resolve(this.token)}invalidateToken(){}start(e,t){this.changeListener=t,e.enqueueRetryable(()=>t(this.token.user))}shutdown(){this.changeListener=null}}class i_{constructor(e){this.De=e,this.currentUser=Pe.UNAUTHENTICATED,this.xe=0,this.forceRefresh=!1,this.auth=null}start(e,t){F(this.Ce===void 0,42304);let r=this.xe;const s=l=>this.xe!==r?(r=this.xe,t(l)):Promise.resolve();let i=new vt;this.Ce=()=>{this.xe++,this.currentUser=this.Fe(),i.resolve(),i=new vt,e.enqueueRetryable(()=>s(this.currentUser))};const a=()=>{const l=i;e.enqueueRetryable(async()=>{await l.promise,await s(this.currentUser)})},c=l=>{O("FirebaseAuthCredentialsProvider","Auth detected"),this.auth=l,this.Ce&&(this.auth.addAuthTokenListener(this.Ce),a())};this.De.onInit(l=>c(l)),setTimeout(()=>{if(!this.auth){const l=this.De.getImmediate({optional:!0});l?c(l):(O("FirebaseAuthCredentialsProvider","Auth not yet detected"),i.resolve(),i=new vt)}},0),a()}getToken(){const e=this.xe,t=this.forceRefresh;return this.forceRefresh=!1,this.auth?this.auth.getToken(t).then(r=>this.xe!==e?(O("FirebaseAuthCredentialsProvider","getToken aborted due to token change."),this.getToken()):r?(F(typeof r.accessToken=="string",31837,{Oe:r}),new rd(r.accessToken,this.currentUser)):null):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.auth&&this.Ce&&this.auth.removeAuthTokenListener(this.Ce),this.Ce=void 0}Fe(){const e=this.auth&&this.auth.getUid();return F(e===null||typeof e=="string",2055,{Me:e}),new Pe(e)}}class o_{constructor(e,t,r){this.Ne=e,this.Le=t,this.Be=r,this.type="FirstParty",this.user=Pe.FIRST_PARTY,this.Ue=new Map}ke(){return this.Be?this.Be():null}get headers(){this.Ue.set("X-Goog-AuthUser",this.Ne);const e=this.ke();return e&&this.Ue.set("Authorization",e),this.Le&&this.Ue.set("X-Goog-Iam-Authorization-Token",this.Le),this.Ue}}class a_{constructor(e,t,r){this.Ne=e,this.Le=t,this.Be=r}getToken(){return Promise.resolve(new o_(this.Ne,this.Le,this.Be))}start(e,t){e.enqueueRetryable(()=>t(Pe.FIRST_PARTY))}shutdown(){}invalidateToken(){}}class el{constructor(e){this.value=e,this.type="AppCheck",this.headers=new Map,e&&e.length>0&&this.headers.set("x-firebase-appcheck",this.value)}}class c_{constructor(e,t){this.qe=t,this.forceRefresh=!1,this.appCheck=null,this.$e=null,this.Ke=null,Xe(e)&&e.settings.appCheckToken&&(this.Ke=e.settings.appCheckToken)}start(e,t){F(this.Ce===void 0,3512);const r=i=>{i.error!=null&&O("FirebaseAppCheckTokenProvider",`Error getting App Check token; using placeholder token instead. Error: ${i.error.message}`);const a=i.token!==this.$e;return this.$e=i.token,O("FirebaseAppCheckTokenProvider",`Received ${a?"new":"existing"} token.`),a?t(i.token):Promise.resolve()};this.Ce=i=>{e.enqueueRetryable(()=>r(i))};const s=i=>{O("FirebaseAppCheckTokenProvider","AppCheck detected"),this.appCheck=i,this.Ce&&this.appCheck.addTokenListener(this.Ce)};this.qe.onInit(i=>s(i)),setTimeout(()=>{if(!this.appCheck){const i=this.qe.getImmediate({optional:!0});i?s(i):O("FirebaseAppCheckTokenProvider","AppCheck not yet detected")}},0)}getToken(){if(this.Ke)return Promise.resolve(new el(this.Ke));const e=this.forceRefresh;return this.forceRefresh=!1,this.appCheck?this.appCheck.getToken(e).then(t=>t?(F(typeof t.token=="string",44558,{tokenResult:t}),this.$e=t.token,new el(t.token)):null):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.appCheck&&this.Ce&&this.appCheck.removeTokenListener(this.Ce),this.Ce=void 0}}function sd(n){const e={};return n.timeoutSeconds!==void 0&&(e.timeoutSeconds=n.timeoutSeconds),e}/**
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
 */class u_{Qe(e){}shutdown(){}}/**
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
 */const tl="ConnectivityMonitor";class nl{constructor(){this.We=()=>this.Ge(),this.ze=()=>this.je(),this.He=[],this.Je()}Qe(e){this.He.push(e)}shutdown(){window.removeEventListener("online",this.We),window.removeEventListener("offline",this.ze)}Je(){window.addEventListener("online",this.We),window.addEventListener("offline",this.ze)}Ge(){O(tl,"Network connectivity changed: AVAILABLE");for(const e of this.He)e(0)}je(){O(tl,"Network connectivity changed: UNAVAILABLE");for(const e of this.He)e(1)}static Ye(){return typeof window<"u"&&window.addEventListener!==void 0&&window.removeEventListener!==void 0}}/**
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
 */let Ys=null;function sa(){return Ys===null?Ys=function(){return 268435456+Math.round(2147483648*Math.random())}():Ys++,"0x"+Ys.toString(16)}/**
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
 */const Mo="RestConnection",l_={BatchGetDocuments:"batchGet",Commit:"commit",RunQuery:"runQuery",RunAggregationQuery:"runAggregationQuery",ExecutePipeline:"executePipeline"};class h_{get Ze(){return!1}constructor(e){this.databaseInfo=e,this.databaseId=e.databaseId;const t=e.ssl?"https":"http",r=encodeURIComponent(this.databaseId.projectId),s=encodeURIComponent(this.databaseId.database);this.Xe=t+"://"+e.host,this.et=`projects/${r}/databases/${s}`,this.tt=this.databaseId.database===fi?`project_id=${r}`:`project_id=${r}&database_id=${s}`}nt(e,t,r,s,i){const a=sa(),c=this.rt(e,t.toUriEncodedString());O(Mo,`Sending RPC '${e}' ${a}:`,c,r);const l={"google-cloud-resource-prefix":this.et,"x-goog-request-params":this.tt};this.it(l,s,i);const{host:h}=new URL(c),f=_s(h);return this.st(e,c,l,r,f).then(m=>(O(Mo,`Received RPC '${e}' ${a}: `,m),m),m=>{throw rt(Mo,`RPC '${e}' ${a} failed with error: `,m,"url: ",c,"request:",r),m})}_t(e,t,r,s,i,a){return this.nt(e,t,r,s,i)}it(e,t,r){if(e["X-Goog-Api-Client"]=function(){return"gl-js/ fire/"+rr}(),e["Content-Type"]="text/plain",this.databaseInfo.appId&&(e["X-Firebase-GMPID"]=this.databaseInfo.appId),t&&t.headers.forEach((s,i)=>e[i]=s),r&&r.headers.forEach((s,i)=>e[i]=s),this.databaseInfo._customHeaders)for(const s of Object.keys(this.databaseInfo._customHeaders))e[s]=this.databaseInfo._customHeaders[s]}rt(e,t){const r=l_[e];let s=`${this.Xe}/v1/${t}:${r}`;return this.databaseInfo.apiKey&&(s=`${s}?key=${encodeURIComponent(this.databaseInfo.apiKey)}`),s}terminate(){}}/**
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
 */class d_{constructor(e){this.ot=e.ot,this.ut=e.ut}ct(e){this.lt=e}Et(e){this.ht=e}Tt(e){this.Pt=e}onMessage(e){this.It=e}close(){this.ut()}send(e){this.ot(e)}Rt(){this.lt()}At(){this.ht()}Vt(e){this.Pt(e)}dt(e){this.It(e)}}/**
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
 */const Re="WebChannelConnection",br=(n,e,t)=>{n.listen(e,r=>{try{t(r)}catch(s){setTimeout(()=>{throw s},0)}})};class $n extends h_{constructor(e){super(e),this.ft=[],this.forceLongPolling=e.forceLongPolling,this.autoDetectLongPolling=e.autoDetectLongPolling,this.useFetchStreams=e.useFetchStreams,this.longPollingOptions=e.longPollingOptions}static gt(){if(!$n.yt){const e=fh();br(e,dh.STAT_EVENT,t=>{t.stat===Qo.PROXY?O(Re,"STAT_EVENT: detected buffering proxy"):t.stat===Qo.NOPROXY&&O(Re,"STAT_EVENT: detected no buffering proxy")}),$n.yt=!0}}st(e,t,r,s,i){const a=sa();return new Promise((c,l)=>{const h=new lh;h.setWithCredentials(!0),h.listenOnce(hh.COMPLETE,()=>{try{switch(h.getLastErrorCode()){case Zs.NO_ERROR:const m=h.getResponseJson();O(Re,`XHR for RPC '${e}' ${a} received:`,JSON.stringify(m)),c(m);break;case Zs.TIMEOUT:O(Re,`RPC '${e}' ${a} timed out`),l(new D(C.DEADLINE_EXCEEDED,"Request time out"));break;case Zs.HTTP_ERROR:const E=h.getStatus();if(O(Re,`RPC '${e}' ${a} failed with status:`,E,"response text:",h.getResponseText()),E>0){let V=h.getResponseJson();Array.isArray(V)&&(V=V[0]);const N=V==null?void 0:V.error;if(N&&N.status&&N.message){const U=function(H){const J=H.toLowerCase().replace(/_/g,"-");return Object.values(C).indexOf(J)>=0?J:C.UNKNOWN}(N.status);l(new D(U,N.message))}else l(new D(C.UNKNOWN,"Server responded with status "+h.getStatus()))}else l(new D(C.UNAVAILABLE,"Connection failed."));break;default:q(9055,{wt:e,streamId:a,bt:h.getLastErrorCode(),St:h.getLastError()})}}finally{O(Re,`RPC '${e}' ${a} completed.`)}});const f=JSON.stringify(s);O(Re,`RPC '${e}' ${a} sending request:`,s),h.send(t,"POST",f,r,15)})}vt(e,t,r){const s=sa(),i=[this.Xe,"/","google.firestore.v1.Firestore","/",e,"/channel"],a=this.createWebChannelTransport(),c={httpSessionIdParam:"gsessionid",initMessageHeaders:{},messageUrlParams:{database:`projects/${this.databaseId.projectId}/databases/${this.databaseId.database}`},sendRawJson:!0,supportsCrossDomainXhr:!0,internalChannelParams:{forwardChannelRequestTimeoutMs:6e5},forceLongPolling:this.forceLongPolling,detectBufferingProxy:this.autoDetectLongPolling},l=this.longPollingOptions.timeoutSeconds;l!==void 0&&(c.longPollingTimeout=Math.round(1e3*l)),this.useFetchStreams&&(c.useFetchStreams=!0),this.it(c.initMessageHeaders,t,r),c.encodeInitMessageHeaders=!0;const h=i.join("");O(Re,`Creating RPC '${e}' stream ${s}: ${h}`,c);const f=a.createWebChannel(h,c);this.Dt(f);let m=!1,E=!1;const V=new d_({ot:N=>{E?O(Re,`Not sending because RPC '${e}' stream ${s} is closed:`,N):(m||(O(Re,`Opening RPC '${e}' stream ${s} transport.`),f.open(),m=!0),O(Re,`RPC '${e}' stream ${s} sending:`,N),f.send(N))},ut:()=>f.close()});return br(f,xr.EventType.OPEN,()=>{E||(O(Re,`RPC '${e}' stream ${s} transport opened.`),V.Rt())}),br(f,xr.EventType.CLOSE,()=>{E||(E=!0,O(Re,`RPC '${e}' stream ${s} transport closed`),V.Vt(),this.xt(f))}),br(f,xr.EventType.ERROR,N=>{E||(E=!0,rt(Re,`RPC '${e}' stream ${s} transport errored. Name:`,N.name,"Message:",N.message),V.Vt(new D(C.UNAVAILABLE,"The operation could not be completed")))}),br(f,xr.EventType.MESSAGE,N=>{var U;if(!E){const L=N.data[0];F(!!L,16349);const H=L,J=(H==null?void 0:H.error)||((U=H[0])==null?void 0:U.error);if(J){O(Re,`RPC '${e}' stream ${s} received error:`,J);const ie=J.status;let Je=function(I){const g=ce[I];if(g!==void 0)return $h(g)}(ie),Ie=J.message;ie==="NOT_FOUND"&&Ie.includes("database")&&Ie.includes("does not exist")&&Ie.includes(this.databaseId.database)&&rt(`Database '${this.databaseId.database}' not found. Please check your project configuration.`),Je===void 0&&(Je=C.INTERNAL,Ie="Unknown error status: "+ie+" with message "+J.message),E=!0,V.Vt(new D(Je,Ie)),f.close()}else O(Re,`RPC '${e}' stream ${s} received:`,L),V.dt(L)}}),$n.gt(),setTimeout(()=>{V.At()},0),V}terminate(){this.ft.forEach(e=>e.close()),this.ft=[]}Dt(e){this.ft.push(e)}xt(e){this.ft=this.ft.filter(t=>t===e)}it(e,t,r){super.it(e,t,r),this.databaseInfo.apiKey&&(e["x-goog-api-key"]=this.databaseInfo.apiKey)}createWebChannelTransport(){return ph()}}/**
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
 */function f_(n){return new $n(n)}$n.yt=!1;class id{constructor(e,t,r=1e3,s=1.5,i=6e4){this.Ct=e,this.timerId=t,this.Ft=r,this.Ot=s,this.Mt=i,this.Nt=0,this.Lt=null,this.Bt=Date.now(),this.reset()}reset(){this.Nt=0}Ut(){this.Nt=this.Mt}kt(e){this.cancel();const t=Math.floor(this.Nt+this.qt()),r=Math.max(0,Date.now()-this.Bt),s=Math.max(0,t-r);s>0&&O("ExponentialBackoff",`Backing off for ${s} ms (base delay: ${this.Nt} ms, delay with jitter: ${t} ms, last attempt: ${r} ms ago)`),this.Lt=this.Ct.enqueueAfterDelay(this.timerId,s,()=>(this.Bt=Date.now(),e())),this.Nt*=this.Ot,this.Nt<this.Ft&&(this.Nt=this.Ft),this.Nt>this.Mt&&(this.Nt=this.Mt)}$t(){this.Lt!==null&&(this.Lt.skipDelay(),this.Lt=null)}cancel(){this.Lt!==null&&(this.Lt.cancel(),this.Lt=null)}qt(){return(Math.random()-.5)*this.Nt}}/**
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
 */const rl="PersistentStream";class od{constructor(e,t,r,s,i,a,c,l){this.Ct=e,this.Kt=r,this.Qt=s,this.connection=i,this.authCredentialsProvider=a,this.appCheckCredentialsProvider=c,this.listener=l,this.state=0,this.Wt=0,this.Gt=null,this.zt=null,this.stream=null,this.jt=0,this.Ht=new id(e,t)}Jt(){return this.state===1||this.state===5||this.Yt()}Yt(){return this.state===2||this.state===3}start(){this.jt=0,this.state!==4?this.auth():this.Zt()}async stop(){this.Jt()&&await this.close(0)}Xt(){this.state=0,this.Ht.reset()}en(){this.Yt()&&this.Gt===null&&(this.Gt=this.Ct.enqueueAfterDelay(this.Kt,6e4,()=>this.tn()))}nn(e){this.rn(),this.stream.send(e)}async tn(){if(this.Yt())return this.close(0)}rn(){this.Gt&&(this.Gt.cancel(),this.Gt=null)}sn(){this.zt&&(this.zt.cancel(),this.zt=null)}async close(e,t){this.rn(),this.sn(),this.Ht.cancel(),this.Wt++,e!==4?this.Ht.reset():t&&t.code===C.RESOURCE_EXHAUSTED?(St(t.toString()),St("Using maximum backoff delay to prevent overloading the backend."),this.Ht.Ut()):t&&t.code===C.UNAUTHENTICATED&&this.state!==3&&(this.authCredentialsProvider.invalidateToken(),this.appCheckCredentialsProvider.invalidateToken()),this.stream!==null&&(this._n(),this.stream.close(),this.stream=null),this.state=e,await this.listener.Tt(t)}_n(){}auth(){this.state=1;const e=this.an(this.Wt),t=this.Wt;Promise.all([this.authCredentialsProvider.getToken(),this.appCheckCredentialsProvider.getToken()]).then(([r,s])=>{this.Wt===t&&this.un(r,s)},r=>{e(()=>{const s=new D(C.UNKNOWN,"Fetching auth token failed: "+r.message);return this.cn(s)})})}un(e,t){const r=this.an(this.Wt);this.stream=this.En(e,t),this.stream.ct(()=>{r(()=>this.listener.ct())}),this.stream.Et(()=>{r(()=>(this.state=2,this.zt=this.Ct.enqueueAfterDelay(this.Qt,1e4,()=>(this.Yt()&&(this.state=3),Promise.resolve())),this.listener.Et()))}),this.stream.Tt(s=>{r(()=>this.cn(s))}),this.stream.onMessage(s=>{r(()=>++this.jt==1?this.hn(s):this.onNext(s))})}Zt(){this.state=5,this.Ht.kt(async()=>{this.state=0,this.start()})}cn(e){return O(rl,`close with error: ${e}`),this.stream=null,this.close(4,e)}an(e){return t=>{this.Ct.enqueueAndForget(()=>this.Wt===e?t():(O(rl,"stream callback skipped by getCloseGuardedDispatcher."),Promise.resolve()))}}}class p_ extends od{constructor(e,t,r,s,i,a){super(e,"listen_stream_connection_backoff","listen_stream_idle","health_check_timeout",t,r,s,a),this.serializer=i}En(e,t){return this.connection.vt("Listen",e,t)}hn(e){return this.onNext(e)}onNext(e){this.Ht.reset();const t=Wg(this.serializer,e),r=function(i){if(!("targetChange"in i))return j.min();const a=i.targetChange;return a.targetIds&&a.targetIds.length?j.min():a.readTime?dt(a.readTime):j.min()}(e);return this.listener.Tn(t,r)}Pn(e){const t={};t.database=ra(this.serializer),t.addTarget=function(i,a){let c;const l=a.target;if(c=_n(l)?{pipelineQuery:Jg(i,l)}:Bh(l)?{documents:Gg(i,l)}:{query:Kg(i,l).Se},c.targetId=a.targetId,a.resumeToken.approximateByteSize()>0){c.resumeToken=Kh(i,a.resumeToken);const h=ta(i,a.expectedCount);h!==null&&(c.expectedCount=h)}else if(a.snapshotVersion.compareTo(j.min())>0){c.readTime=Wr(i,a.snapshotVersion.toTimestamp());const h=ta(i,a.expectedCount);h!==null&&(c.expectedCount=h)}return c}(this.serializer,e);const r=Yg(this.serializer,e);r&&(t.labels=r),this.nn(t)}In(e){const t={};t.database=ra(this.serializer),t.removeTarget=e,this.nn(t)}}class m_ extends od{constructor(e,t,r,s,i,a){super(e,"write_stream_connection_backoff","write_stream_idle","health_check_timeout",t,r,s,a),this.serializer=i}get Rn(){return this.jt>0}start(){this.lastStreamToken=void 0,super.start()}_n(){this.Rn&&this.An([])}En(e,t){return this.connection.vt("Write",e,t)}hn(e){return F(!!e.streamToken,31322),this.lastStreamToken=e.streamToken,F(!e.writeResults||e.writeResults.length===0,55816),this.listener.Vn()}onNext(e){F(!!e.streamToken,12678),this.lastStreamToken=e.streamToken,this.Ht.reset();const t=Hg(e.writeResults,e.commitTime),r=dt(e.commitTime);return this.listener.dn(r,t)}fn(){const e={};e.database=ra(this.serializer),this.nn(e)}An(e){const t={streamToken:this.lastStreamToken,writes:e.map(r=>zg(this.serializer,r))};this.nn(t)}}/**
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
 */class g_{}class __ extends g_{constructor(e,t,r,s){super(),this.authCredentials=e,this.appCheckCredentials=t,this.connection=r,this.serializer=s,this.mn=!1}pn(){if(this.mn)throw new D(C.FAILED_PRECONDITION,"The client has already been terminated.")}nt(e,t,r,s){return this.pn(),Promise.all([this.authCredentials.getToken(),this.appCheckCredentials.getToken()]).then(([i,a])=>this.connection.nt(e,na(t,r),s,i,a)).catch(i=>{throw i.name==="FirebaseError"?(i.code===C.UNAUTHENTICATED&&(this.authCredentials.invalidateToken(),this.appCheckCredentials.invalidateToken()),i):new D(C.UNKNOWN,i.toString())})}_t(e,t,r,s,i){return this.pn(),Promise.all([this.authCredentials.getToken(),this.appCheckCredentials.getToken()]).then(([a,c])=>this.connection._t(e,na(t,r),s,a,c,i)).catch(a=>{throw a.name==="FirebaseError"?(a.code===C.UNAUTHENTICATED&&(this.authCredentials.invalidateToken(),this.appCheckCredentials.invalidateToken()),a):new D(C.UNKNOWN,a.toString())})}terminate(){this.mn=!0,this.connection.terminate()}}function y_(n,e,t,r){return new __(n,e,t,r)}/**
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
 */const E_="ComponentProvider",sl=new Map;function w_(n,e,t,r,s){return new Ym(n,e,t,s.host,s.ssl,s.experimentalForceLongPolling,s.experimentalAutoDetectLongPolling,sd(s.experimentalLongPollingOptions),s.useFetchStreams,s.isUsingEmulator,r,s._customHeaders,s.grpcFlowControlWindow)}/**
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
 */const il={didRun:!1,sequenceNumbersCollected:0,targetsRemoved:0,documentsRemoved:0},ad=41943040;class Oe{static withCacheSize(e){return new Oe(e,Oe.DEFAULT_COLLECTION_PERCENTILE,Oe.DEFAULT_MAX_SEQUENCE_NUMBERS_TO_COLLECT)}constructor(e,t,r){this.cacheSizeCollectionThreshold=e,this.percentileToCollect=t,this.maximumSequenceNumbersToCollect=r}}Oe.DEFAULT_COLLECTION_PERCENTILE=10,Oe.DEFAULT_MAX_SEQUENCE_NUMBERS_TO_COLLECT=1e3,Oe.DEFAULT=new Oe(ad,Oe.DEFAULT_COLLECTION_PERCENTILE,Oe.DEFAULT_MAX_SEQUENCE_NUMBERS_TO_COLLECT),Oe.DISABLED=new Oe(-1,0,0);/**
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
 */class zi{constructor(e,t){this.previousValue=e,t&&(t.sequenceNumberHandler=r=>this.gn(r),this.yn=r=>t.writeSequenceNumber(r))}gn(e){return this.previousValue=Math.max(e,this.previousValue),this.previousValue}next(){const e=++this.previousValue;return this.yn&&this.yn(e),e}}zi.wn=-1;/**
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
 */const T_="The current tab is not in the required state to perform this operation. It might be necessary to refresh the browser tab.";class I_{constructor(){this.onCommittedListeners=[]}addOnCommittedListener(e){this.onCommittedListeners.push(e)}raiseOnCommittedEvent(){this.onCommittedListeners.forEach(e=>e())}}/**
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
 */async function ir(n){if(n.code!==C.FAILED_PRECONDITION||n.message!==T_)throw n;O("LocalStore","Unexpectedly lost primary lease")}/**
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
 */class b{constructor(e){this.nextCallback=null,this.catchCallback=null,this.result=void 0,this.error=void 0,this.isDone=!1,this.callbackAttached=!1,e(t=>{this.isDone=!0,this.result=t,this.nextCallback&&this.nextCallback(t)},t=>{this.isDone=!0,this.error=t,this.catchCallback&&this.catchCallback(t)})}catch(e){return this.next(void 0,e)}next(e,t){return this.callbackAttached&&q(59440),this.callbackAttached=!0,this.isDone?this.error?this.wrapFailure(t,this.error):this.wrapSuccess(e,this.result):new b((r,s)=>{this.nextCallback=i=>{this.wrapSuccess(e,i).next(r,s)},this.catchCallback=i=>{this.wrapFailure(t,i).next(r,s)}})}toPromise(){return new Promise((e,t)=>{this.next(e,t)})}wrapUserFunction(e){try{const t=e();return t instanceof b?t:b.resolve(t)}catch(t){return b.reject(t)}}wrapSuccess(e,t){return e?this.wrapUserFunction(()=>e(t)):b.resolve(t)}wrapFailure(e,t){return e?this.wrapUserFunction(()=>e(t)):b.reject(t)}static resolve(e){return new b((t,r)=>{t(e)})}static reject(e){return new b((t,r)=>{r(e)})}static waitFor(e){return new b((t,r)=>{let s=0,i=0,a=!1;e.forEach(c=>{++s,c.next(()=>{++i,a&&i===s&&t()},l=>r(l))}),a=!0,i===s&&t()})}static or(e){let t=b.resolve(!1);for(const r of e)t=t.next(s=>s?b.resolve(s):r());return t}static forEach(e,t){const r=[];return e.forEach((s,i)=>{r.push(t.call(this,s,i))}),this.waitFor(r)}static mapArray(e,t){return new b((r,s)=>{const i=e.length,a=new Array(i);let c=0;for(let l=0;l<i;l++){const h=l;t(e[h]).next(f=>{a[h]=f,++c,c===i&&r(a)},f=>s(f))}})}static doWhile(e,t){return new b((r,s)=>{const i=()=>{e()===!0?t().next(()=>{i()},s):r()};i()})}}function v_(n){const e=n.match(/Android ([\d.]+)/i),t=e?e[1].split(".").slice(0,2).join("."):"-1";return Number(t)}function or(n){return n.name==="IndexedDbTransactionError"}/**
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
 */const ol="LruGarbageCollector",A_=1048576;function al([n,e],[t,r]){const s=K(n,t);return s===0?K(e,r):s}class R_{constructor(e){this.Yn=e,this.buffer=new de(al),this.Zn=0}Xn(){return++this.Zn}er(e){const t=[e,this.Xn()];if(this.buffer.size<this.Yn)this.buffer=this.buffer.add(t);else{const r=this.buffer.last();al(t,r)<0&&(this.buffer=this.buffer.delete(r).add(t))}}get maxValue(){return this.buffer.last()[0]}}class P_{constructor(e,t,r){this.garbageCollector=e,this.asyncQueue=t,this.localStore=r,this.tr=null}start(){this.garbageCollector.params.cacheSizeCollectionThreshold!==-1&&this.nr(6e4)}stop(){this.tr&&(this.tr.cancel(),this.tr=null)}get started(){return this.tr!==null}nr(e){O(ol,`Garbage collection scheduled in ${e}ms`),this.tr=this.asyncQueue.enqueueAfterDelay("lru_garbage_collection",e,async()=>{this.tr=null;try{await this.localStore.collectGarbage(this.garbageCollector)}catch(t){or(t)?O(ol,"Ignoring IndexedDB error during garbage collection: ",t):await ir(t)}await this.nr(3e5)})}}class S_{constructor(e,t){this.rr=e,this.params=t}calculateTargetCount(e,t){return this.rr.ir(e).next(r=>Math.floor(t/100*r))}nthSequenceNumber(e,t){if(t===0)return b.resolve(zi.wn);const r=new R_(t);return this.rr.forEachTarget(e,s=>r.er(s.sequenceNumber)).next(()=>this.rr.sr(e,s=>r.er(s))).next(()=>r.maxValue)}removeTargets(e,t,r){return this.rr.removeTargets(e,t,r)}removeOrphanedDocuments(e,t){return this.rr.removeOrphanedDocuments(e,t)}collect(e,t){return this.params.cacheSizeCollectionThreshold===-1?(O("LruGarbageCollector","Garbage collection skipped; disabled"),b.resolve(il)):this.getCacheSize(e).next(r=>r<this.params.cacheSizeCollectionThreshold?(O("LruGarbageCollector",`Garbage collection skipped; Cache size ${r} is lower than threshold ${this.params.cacheSizeCollectionThreshold}`),il):this._r(e,t))}getCacheSize(e){return this.rr.getCacheSize(e)}_r(e,t){let r,s,i,a,c,l,h;const f=Date.now();return this.calculateTargetCount(e,this.params.percentileToCollect).next(m=>(m>this.params.maximumSequenceNumbersToCollect?(O("LruGarbageCollector",`Capping sequence numbers to collect down to the maximum of ${this.params.maximumSequenceNumbersToCollect} from ${m}`),s=this.params.maximumSequenceNumbersToCollect):s=m,a=Date.now(),this.nthSequenceNumber(e,s))).next(m=>(r=m,c=Date.now(),this.removeTargets(e,r,t))).next(m=>(i=m,l=Date.now(),this.removeOrphanedDocuments(e,r))).next(m=>(h=Date.now(),Ln()<=Q.DEBUG&&O("LruGarbageCollector",`LRU Garbage Collection
	Counted targets in ${a-f}ms
	Determined least recently used ${s} in `+(c-a)+`ms
	Removed ${i} targets in `+(l-c)+`ms
	Removed ${m} documents in `+(h-l)+`ms
Total Duration: ${h-f}ms`),b.resolve({didRun:!0,sequenceNumbersCollected:s,targetsRemoved:i,documentsRemoved:m})))}}function V_(n,e){return new S_(n,e)}/**
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
 */const cd="firestore.googleapis.com",cl=!0;class ul{constructor(e){if(e.host===void 0){if(e.ssl!==void 0)throw new D(C.INVALID_ARGUMENT,"Can't provide ssl option if host option is not set");this.host=cd,this.ssl=cl}else this.host=e.host,this.ssl=e.ssl??cl;if(this.isUsingEmulator=e.emulatorOptions!==void 0,this.credentials=e.credentials,this.ignoreUndefinedProperties=!!e.ignoreUndefinedProperties,this.localCache=e.localCache,e._customHeaders&&(this._customHeaders={...e._customHeaders}),e.cacheSizeBytes===void 0)this.cacheSizeBytes=ad;else{if(e.cacheSizeBytes!==-1&&e.cacheSizeBytes<A_)throw new D(C.INVALID_ARGUMENT,"cacheSizeBytes must be at least 1048576");this.cacheSizeBytes=e.cacheSizeBytes}if(Gm("experimentalForceLongPolling",e.experimentalForceLongPolling,"experimentalAutoDetectLongPolling",e.experimentalAutoDetectLongPolling),this.experimentalForceLongPolling=!!e.experimentalForceLongPolling,this.experimentalForceLongPolling?this.experimentalAutoDetectLongPolling=!1:e.experimentalAutoDetectLongPolling===void 0?this.experimentalAutoDetectLongPolling=!0:this.experimentalAutoDetectLongPolling=!!e.experimentalAutoDetectLongPolling,this.experimentalLongPollingOptions=sd(e.experimentalLongPollingOptions??{}),function(r){if(r.timeoutSeconds!==void 0){if(isNaN(r.timeoutSeconds))throw new D(C.INVALID_ARGUMENT,`invalid long polling timeout: ${r.timeoutSeconds} (must not be NaN)`);if(r.timeoutSeconds<5)throw new D(C.INVALID_ARGUMENT,`invalid long polling timeout: ${r.timeoutSeconds} (minimum allowed value is 5)`);if(r.timeoutSeconds>30)throw new D(C.INVALID_ARGUMENT,`invalid long polling timeout: ${r.timeoutSeconds} (maximum allowed value is 30)`)}}(this.experimentalLongPollingOptions),this.useFetchStreams=!!e.useFetchStreams,e.grpcFlowControlWindow!==void 0){if(typeof e.grpcFlowControlWindow!="number"||e.grpcFlowControlWindow<=0||e.grpcFlowControlWindow>2147483647||!Number.isInteger(e.grpcFlowControlWindow))throw new D(C.INVALID_ARGUMENT,"grpcFlowControlWindow must be a positive integer and cannot exceed 2147483647");this.grpcFlowControlWindow=e.grpcFlowControlWindow}}isEqual(e){return this.host===e.host&&this.ssl===e.ssl&&this.credentials===e.credentials&&this.cacheSizeBytes===e.cacheSizeBytes&&this.experimentalForceLongPolling===e.experimentalForceLongPolling&&this.experimentalAutoDetectLongPolling===e.experimentalAutoDetectLongPolling&&function(r,s){return r.timeoutSeconds===s.timeoutSeconds}(this.experimentalLongPollingOptions,e.experimentalLongPollingOptions)&&this.ignoreUndefinedProperties===e.ignoreUndefinedProperties&&this.useFetchStreams===e.useFetchStreams&&this.grpcFlowControlWindow===e.grpcFlowControlWindow&&function(r,s){if(r===s)return!0;if(!r||!s)return!1;const i=Object.keys(r),a=Object.keys(s);if(i.length!==a.length)return!1;for(const c of i)if(r[c]!==s[c])return!1;return!0}(this._customHeaders,e._customHeaders)}}let Hi=class{constructor(e,t,r,s){this._authCredentials=e,this._appCheckCredentials=t,this._databaseId=r,this._app=s,this.type="firestore-lite",this._persistenceKey="(lite)",this._settings=new ul({}),this._settingsFrozen=!1,this._emulatorOptions={},this._terminateTask="notTerminated"}get app(){if(!this._app)throw new D(C.FAILED_PRECONDITION,"Firestore was not initialized using the Firebase SDK. 'app' is not available");return this._app}get _initialized(){return this._settingsFrozen}get _terminated(){return this._terminateTask!=="notTerminated"}_setSettings(e){if(this._settingsFrozen)throw new D(C.FAILED_PRECONDITION,"Firestore has already been started and its settings can no longer be changed. You can only modify settings before calling any other methods on a Firestore object.");this._settings=new ul(e),this._emulatorOptions=e.emulatorOptions||{},e.credentials!==void 0&&(this._authCredentials=function(r){if(!r)return new r_;switch(r.type){case"firstParty":return new a_(r.sessionIndex||"0",r.iamToken||null,r.authTokenFactory||null);case"provider":return r.client;default:throw new D(C.INVALID_ARGUMENT,"makeAuthCredentialsProvider failed due to invalid credential type")}}(e.credentials))}_getSettings(){return this._settings}_getEmulatorOptions(){return this._emulatorOptions}_freezeSettings(){return this._settingsFrozen=!0,this._settings}_delete(){return this._terminateTask==="notTerminated"&&(this._terminateTask=this._terminate()),this._terminateTask}async _restart(){this._terminateTask==="notTerminated"?await this._terminate():this._terminateTask="notTerminated"}toJSON(){return{app:this._app,databaseId:this._databaseId,settings:this._settings}}_terminate(){return function(t){const r=sl.get(t);r&&(O(E_,"Removing Datastore"),sl.delete(t),r.terminate())}(this),Promise.resolve()}};function C_(n,e,t,r={}){var h;n=Ke(n,Hi);const s=_s(e),i=n._getSettings(),a={...i,emulatorOptions:n._getEmulatorOptions()},c=`${e}:${t}`;s&&ih(`https://${c}`),i.host!==cd&&i.host!==c&&rt("Host has been set in both settings() and connectFirestoreEmulator(), emulator host will be used.");const l={...i,host:c,ssl:s,emulatorOptions:r};if(!An(l,a)&&(n._setSettings(l),r.mockUserToken)){let f,m;if(typeof r.mockUserToken=="string")f=r.mockUserToken,m=Pe.MOCK_USER;else{f=Sp(r.mockUserToken,(h=n._app)==null?void 0:h.options.projectId);const E=r.mockUserToken.sub||r.mockUserToken.user_id;if(!E)throw new D(C.INVALID_ARGUMENT,"mockUserToken must contain 'sub' or 'user_id' field!");m=new Pe(E)}n._authCredentials=new s_(new rd(f,m))}}/**
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
 */class Nt{constructor(e,t,r){this.converter=t,this._query=r,this.type="query",this.firestore=e}withConverter(e){return new Nt(this.firestore,e,this._query)}}class se{constructor(e,t,r){this.converter=t,this._key=r,this.type="document",this.firestore=e}get _path(){return this._key.path}get id(){return this._key.path.lastSegment()}get path(){return this._key.path.canonicalString()}get parent(){return new Ht(this.firestore,this.converter,this._key.path.popLast())}withConverter(e){return new se(this.firestore,e,this._key)}toJSON(){return{type:se._jsonSchemaVersion,referencePath:this._key.toString()}}static fromJSON(e,t,r){if(Es(t,se._jsonSchema))return new se(e,r||null,new B(X.fromString(t.referencePath)))}}se._jsonSchemaVersion="firestore/documentReference/1.0",se._jsonSchema={type:he("string",se._jsonSchemaVersion),referencePath:he("string")};class Ht extends Nt{constructor(e,t,r){super(e,t,Bi(r)),this._path=r,this.type="collection"}get id(){return this._query.path.lastSegment()}get path(){return this._query.path.canonicalString()}get parent(){const e=this._path.popLast();return e.isEmpty()?null:new se(this.firestore,null,new B(e))}withConverter(e){return new Ht(this.firestore,e,this._path)}}function gv(n,e,...t){if(n=ae(n),_h("collection","path",e),n instanceof Hi){const r=X.fromString(e,...t);return Ou(r),new Ht(n,null,r)}{if(!(n instanceof se||n instanceof Ht))throw new D(C.INVALID_ARGUMENT,"Expected first argument to collection() to be a CollectionReference, a DocumentReference or FirebaseFirestore");const r=n._path.child(X.fromString(e,...t));return Ou(r),new Ht(n.firestore,null,r)}}function _v(n,e,...t){if(n=ae(n),arguments.length===1&&(e=ya.newId()),_h("doc","path",e),n instanceof Hi){const r=X.fromString(e,...t);return xu(r),new se(n,null,new B(r))}{if(!(n instanceof se||n instanceof Ht))throw new D(C.INVALID_ARGUMENT,"Expected first argument to doc() to be a CollectionReference, a DocumentReference or FirebaseFirestore");const r=n._path.child(X.fromString(e,...t));return xu(r),new se(n.firestore,n instanceof Ht?n.converter:null,new B(r))}}/**
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
 */class Me{constructor(e){this._values=(e||[]).map(t=>t)}toArray(){return this._values.map(e=>e)}isEqual(e){return function(r,s){if(r.length!==s.length)return!1;for(let i=0;i<r.length;++i)if(r[i]!==s[i])return!1;return!0}(this._values,e._values)}toJSON(){return{type:Me._jsonSchemaVersion,vectorValues:this._values}}static fromJSON(e){if(Es(e,Me._jsonSchema)){if(Array.isArray(e.vectorValues)&&e.vectorValues.every(t=>typeof t=="number"))return new Me(e.vectorValues);throw new D(C.INVALID_ARGUMENT,"Expected 'vectorValues' field to be a number array")}}}Me._jsonSchemaVersion="firestore/vectorValue/1.0",Me._jsonSchema={type:he("string",Me._jsonSchemaVersion),vectorValues:he("object")};/**
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
 */const b_=/^__.*__$/;class N_{constructor(e,t,r){this.data=e,this.fieldMask=t,this.fieldTransforms=r}toMutation(e,t){return this.fieldMask!==null?new un(e,this.data,this.fieldMask,t,this.fieldTransforms):new Ts(e,this.data,t,this.fieldTransforms)}}class ud{constructor(e,t,r){this.data=e,this.fieldMask=t,this.fieldTransforms=r}toMutation(e,t){return new un(e,this.data,this.fieldMask,t,this.fieldTransforms)}}function ld(n){switch(n){case 0:case 2:case 1:return!0;case 3:case 4:return!1;default:throw q(40011,{dataSource:n})}}class Va{constructor(e,t,r,s,i,a){this.settings=e,this.databaseId=t,this.serializer=r,this.ignoreUndefinedProperties=s,i===void 0&&this.validatePath(),this.fieldTransforms=i||[],this.fieldMask=a||[]}get path(){return this.settings.path}get dataSource(){return this.settings.dataSource}contextWith(e){return new Va({...this.settings,...e},this.databaseId,this.serializer,this.ignoreUndefinedProperties,this.fieldTransforms,this.fieldMask)}childContextForField(e){var s;const t=(s=this.path)==null?void 0:s.child(e),r=this.contextWith({path:t,arrayElement:!1});return r.validatePathSegment(e),r}childContextForFieldPath(e){var s;const t=(s=this.path)==null?void 0:s.child(e),r=this.contextWith({path:t,arrayElement:!1});return r.validatePath(),r}childContextForArray(e){return this.contextWith({path:void 0,arrayElement:!0})}createError(e){return Ti(e,this.settings.methodName,this.settings.hasConverter||!1,this.path,this.settings.targetDoc)}contains(e){return this.fieldMask.find(t=>e.isPrefixOf(t))!==void 0||this.fieldTransforms.find(t=>e.isPrefixOf(t.field))!==void 0}validatePath(){if(this.path)for(let e=0;e<this.path.length;e++)this.validatePathSegment(this.path.get(e))}validatePathSegment(e){if(e.length===0)throw this.createError("Document fields must not be empty");if(ld(this.dataSource)&&b_.test(e))throw this.createError('Document fields cannot begin and end with "__"')}}class k_{constructor(e,t,r){this.databaseId=e,this.ignoreUndefinedProperties=t,this.serializer=r||$i(e)}createContext(e,t,r,s=!1){return new Va({dataSource:e,methodName:t,targetDoc:r,path:Ge.emptyPath(),arrayElement:!1,hasConverter:s},this.databaseId,this.serializer,this.ignoreUndefinedProperties)}}function Ca(n){const e=n._freezeSettings(),t=$i(n._databaseId);return new k_(n._databaseId,!!e.ignoreUndefinedProperties,t)}function D_(n,e,t,r,s,i={}){const a=n.createContext(i.merge||i.mergeFields?2:0,e,t,s);Na("Data must be an object, but it was:",a,r);const c=hd(r,a);let l,h;if(i.merge)l=new ze(a.fieldMask),h=a.fieldTransforms;else if(i.mergeFields){const f=[];for(const m of i.mergeFields){const E=en(e,m,t);if(!a.contains(E))throw new D(C.INVALID_ARGUMENT,`Field '${E}' is specified in your field mask but missing from your input data.`);md(f,E)||f.push(E)}l=new ze(f),h=a.fieldTransforms.filter(m=>l.covers(m.field))}else l=null,h=a.fieldTransforms;return new N_(new De(c),l,h)}class Gi extends Wi{_toFieldTransform(e){if(e.dataSource!==2)throw e.dataSource===1?e.createError(`${this._methodName}() can only appear at the top level of your update data`):e.createError(`${this._methodName}() cannot be used with set() unless you pass {merge:true}`);return e.fieldMask.push(e.path),null}isEqual(e){return e instanceof Gi}}class ba extends Wi{_toFieldTransform(e){return new sg(e.path,new rs)}isEqual(e){return e instanceof ba}}function x_(n,e,t,r){const s=n.createContext(1,e,t);Na("Data must be an object, but it was:",s,r);const i=[],a=De.empty();cn(r,(l,h)=>{const f=pd(e,l,t);h=ae(h);const m=s.childContextForFieldPath(f);if(h instanceof Gi)i.push(f);else{const E=Zt(h,m);E!=null&&(i.push(f),a.set(f,E))}});const c=new ze(i);return new ud(a,c,s.fieldTransforms)}function O_(n,e,t,r,s,i){const a=n.createContext(1,e,t),c=[en(e,r,t)],l=[s];if(i.length%2!=0)throw new D(C.INVALID_ARGUMENT,`Function ${e}() needs to be called with an even number of arguments that alternate between field names and values.`);for(let E=0;E<i.length;E+=2)c.push(en(e,i[E])),l.push(i[E+1]);const h=[],f=De.empty();for(let E=c.length-1;E>=0;--E)if(!md(h,c[E])){const V=c[E];let N=l[E];N=ae(N);const U=a.childContextForFieldPath(V);if(N instanceof Gi)h.push(V);else{const L=Zt(N,U);L!=null&&(h.push(V),f.set(V,L))}}const m=new ze(h);return new ud(f,m,a.fieldTransforms)}function L_(n,e,t,r=!1){return Zt(t,n.createContext(r?4:3,e))}function Zt(n,e,t){if(fd(n=ae(n)))return Na("Unsupported field value:",e,n),hd(n,e);if(n instanceof Wi)return function(s,i){if(!ld(i.dataSource))throw i.createError(`${s._methodName}() can only be used with update() and set()`);if(!i.path)throw i.createError(`${s._methodName}() is not currently supported inside arrays`);const a=s._toFieldTransform(i);a&&i.fieldTransforms.push(a)}(n,e),null;if(n===void 0&&e.ignoreUndefinedProperties)return null;if(e.path&&e.fieldMask.push(e.path),n instanceof Array){if(e.settings.arrayElement&&e.dataSource!==4)throw e.createError("Nested arrays are not supported");return function(s,i){const a=[];let c=0;for(const l of s){let h=Zt(l,i.childContextForArray(c));h==null&&(h={nullValue:"NULL_VALUE"}),a.push(h),c++}return{arrayValue:{values:a}}}(n,e)}return function(s,i,a){if((s=ae(s))===null)return{nullValue:"NULL_VALUE"};if(typeof s=="number")return Ta(i.serializer,s);if(typeof s=="boolean")return{booleanValue:s};if(typeof s=="string")return{stringValue:s};if(s instanceof Date){const c=Z.fromDate(s);return{timestampValue:Wr(i.serializer,c)}}if(s instanceof Z){const c=new Z(s.seconds,1e3*Math.floor(s.nanoseconds/1e3));return{timestampValue:Wr(i.serializer,c)}}if(dd(s)){const c=Z.fromInstant(s),l=new Z(c.seconds,1e3*Math.floor(c.nanoseconds/1e3));return{timestampValue:Wr(i.serializer,l)}}if(s instanceof ft)return{geoPointValue:{latitude:s.latitude,longitude:s.longitude}};if(s instanceof Ze)return{bytesValue:Kh(i.serializer,s._byteString)};if(s instanceof se){const c=i.databaseId,l=s.firestore._databaseId;if(!l.isEqual(c))throw i.createError(`Document reference is for database ${l.projectId}/${l.database} but should be for database ${c.projectId}/${c.database}`);return{referenceValue:Sa(s.firestore._databaseId||i.databaseId,s._key.path)}}if(s instanceof Me)return function(l,h){const f=l instanceof Me?l.toArray():l;return{mapValue:{fields:{[vh]:{stringValue:Ah},[ts]:{arrayValue:{values:f.map(E=>{if(typeof E!="number")throw h.createError("VectorValues must only contain numeric values.");return Mi(h.serializer,E)})}}}}}}(s,i);if(td(s))return s._toProto(i.serializer);throw i.createError(`Unsupported field value: ${xi(s)}`)}(n,e)}function hd(n,e){const t={};return gh(n)?e.path&&e.path.length>0&&e.fieldMask.push(e.path):cn(n,(r,s)=>{const i=Zt(s,e.childContextForField(r));i!=null&&(t[r]=i)}),{mapValue:{fields:t}}}function dd(n){if(typeof n!="object"||n===null)return!1;if(typeof Temporal<"u"&&typeof Temporal.Instant=="function"&&n instanceof Temporal.Instant)return!0;const e=n;return e[Symbol.toStringTag]==="Temporal.Instant"&&typeof e.t=="bigint"}function fd(n){return!(typeof n!="object"||n===null||n instanceof Array||n instanceof Date||n instanceof Z||n instanceof ft||n instanceof Ze||n instanceof se||n instanceof Wi||n instanceof Me||dd(n)||td(n))}function Na(n,e,t){if(!fd(t)||!ys(t)){const r=xi(t);throw r==="an object"?e.createError(n+" a custom object"):e.createError(n+" "+r)}}function en(n,e,t){if((e=ae(e))instanceof ji)return e._internalPath;if(typeof e=="string")return pd(n,e);throw Ti("Field path arguments must be of type string or ",n,!1,void 0,t)}const M_=new RegExp("[~\\*/\\[\\]]");function pd(n,e,t){if(e.search(M_)>=0)throw Ti(`Invalid field path (${e}). Paths must not contain '~', '*', '/', '[', or ']'`,n,!1,void 0,t);try{return new ji(...e.split("."))._internalPath}catch{throw Ti(`Invalid field path (${e}). Paths must not be empty, begin with '.', end with '.', or contain '..'`,n,!1,void 0,t)}}function Ti(n,e,t,r,s){const i=r&&!r.isEmpty(),a=s!==void 0;let c=`Function ${e}() called with invalid data`;t&&(c+=" (via `toFirestore()`)"),c+=". ";let l="";return(i||a)&&(l+=" (found",i&&(l+=` in field ${r}`),a&&(l+=` in document ${s}`),l+=")"),new D(C.INVALID_ARGUMENT,c+n+l)}function md(n,e){return n.some(t=>t.isEqual(e))}function gd(n){return typeof n._readUserData=="function"}/**
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
 */class Ce{constructor(e){this.optionDefinitions=e}_getKnownOptions(e,t){const r=De.empty();for(const s in this.optionDefinitions)if(this.optionDefinitions.hasOwnProperty(s)){const i=this.optionDefinitions[s];if(s in e){const a=e[s];let c;i.nestedOptions&&ys(a)?c={mapValue:{fields:new Ce(i.nestedOptions).getOptionsProto(t,a)}}:a&&(c=Zt(a,t)??void 0),c&&r.set(Ge.fromServerFormat(i.serverName),c)}}return r}getOptionsProto(e,t,r){const s=this._getKnownOptions(t,e);if(r){const i=new Map(Hm(r,(a,c)=>[Ge.fromServerFormat(c),a!==void 0?Zt(a,e):null]));s.setAll(i)}return s.value.mapValue.fields??{}}}/**
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
 */function U_(n){return typeof n=="object"&&n!==null&&!!("nullValue"in n&&(n.nullValue===null||n.nullValue==="NULL_VALUE")||"booleanValue"in n&&(n.booleanValue===null||typeof n.booleanValue=="boolean")||"integerValue"in n&&(n.integerValue===null||typeof n.integerValue=="number"||typeof n.integerValue=="string")||"doubleValue"in n&&(n.doubleValue===null||typeof n.doubleValue=="number")||"timestampValue"in n&&(n.timestampValue===null||function(t){return typeof t=="object"&&t!==null&&"seconds"in t&&(t.seconds===null||typeof t.seconds=="number"||typeof t.seconds=="string")&&"nanos"in t&&(t.nanos===null||typeof t.nanos=="number")}(n.timestampValue))||"stringValue"in n&&(n.stringValue===null||typeof n.stringValue=="string")||"bytesValue"in n&&(n.bytesValue===null||n.bytesValue instanceof Uint8Array)||"referenceValue"in n&&(n.referenceValue===null||typeof n.referenceValue=="string")||"geoPointValue"in n&&(n.geoPointValue===null||function(t){return typeof t=="object"&&t!==null&&"latitude"in t&&(t.latitude===null||typeof t.latitude=="number")&&"longitude"in t&&(t.longitude===null||typeof t.longitude=="number")}(n.geoPointValue))||"arrayValue"in n&&(n.arrayValue===null||function(t){return typeof t=="object"&&t!==null&&!(!("values"in t)||t.values!==null&&!Array.isArray(t.values))}(n.arrayValue))||"mapValue"in n&&(n.mapValue===null||function(t){return typeof t=="object"&&t!==null&&!(!("fields"in t)||t.fields!==null&&!ys(t.fields))}(n.mapValue))||"fieldReferenceValue"in n&&(n.fieldReferenceValue===null||typeof n.fieldReferenceValue=="string")||"functionValue"in n&&(n.functionValue===null||function(t){return typeof t=="object"&&t!==null&&!(!("name"in t)||t.name!==null&&typeof t.name!="string"||!("args"in t)||t.args!==null&&!Array.isArray(t.args))}(n.functionValue))||"pipelineValue"in n&&(n.pipelineValue===null||function(t){return typeof t=="object"&&t!==null&&!(!("stages"in t)||t.stages!==null&&!Array.isArray(t.stages))}(n.pipelineValue)))}function yv(){return new ba("serverTimestamp")}function F_(n){return new Me(n)}/**
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
 */function k(n){let e;return n instanceof bn?n:(e=ys(n)?W_(n):n instanceof Array?z_(n):_d(n,void 0),e)}function Uo(n){if(n instanceof bn)return n;if(n instanceof Me)return ls(n);if(Array.isArray(n))return ls(F_(n));throw new Error("Unsupported value: "+typeof n)}function ka(n){return Zm(n)?si(n):k(n)}class bn{constructor(){this._protoValueType="ProtoValue"}add(e){return new S("add",[this,k(e)],"add")}asBoolean(){if(this instanceof tn)return this;if(this instanceof cr)return new Ed(this);if(this instanceof ar)return new j_(this);if(this instanceof S)return new yd(this);throw new D("invalid-argument",`Conversion of type ${typeof this} to BooleanExpression not supported.`)}subtract(e){return new S("subtract",[this,k(e)],"subtract")}multiply(e){return new S("multiply",[this,k(e)],"multiply")}divide(e){return new S("divide",[this,k(e)],"divide")}mod(e){return new S("mod",[this,k(e)],"mod")}equal(e){return new S("equal",[this,k(e)],"equal").asBoolean()}notEqual(e){return new S("not_equal",[this,k(e)],"notEqual").asBoolean()}lessThan(e){return new S("less_than",[this,k(e)],"lessThan").asBoolean()}lessThanOrEqual(e){return new S("less_than_or_equal",[this,k(e)],"lessThanOrEqual").asBoolean()}greaterThan(e){return new S("greater_than",[this,k(e)],"greaterThan").asBoolean()}greaterThanOrEqual(e){return new S("greater_than_or_equal",[this,k(e)],"greaterThanOrEqual").asBoolean()}arrayConcat(e,...t){const r=[e,...t].map(s=>k(s));return new S("array_concat",[this,...r],"arrayConcat")}arrayContains(e){return new S("array_contains",[this,k(e)],"arrayContains").asBoolean()}arrayContainsAll(e){const t=Array.isArray(e)?new Lr(e.map(k),"arrayContainsAll"):e;return new S("array_contains_all",[this,t],"arrayContainsAll").asBoolean()}arrayContainsAny(e){const t=Array.isArray(e)?new Lr(e.map(k),"arrayContainsAny"):e;return new S("array_contains_any",[this,t],"arrayContainsAny").asBoolean()}arrayReverse(){return new S("array_reverse",[this])}arrayLength(){return new S("array_length",[this],"arrayLength")}equalAny(e){const t=Array.isArray(e)?new Lr(e.map(k),"equalAny"):e;return new S("equal_any",[this,t],"equalAny").asBoolean()}notEqualAny(e){const t=Array.isArray(e)?new Lr(e.map(k),"notEqualAny"):e;return new S("not_equal_any",[this,t],"notEqualAny").asBoolean()}exists(){return new S("exists",[this],"exists").asBoolean()}charLength(){return new S("char_length",[this],"charLength")}like(e){return new S("like",[this,k(e)],"like").asBoolean()}regexContains(e){return new S("regex_contains",[this,k(e)],"regexContains").asBoolean()}regexFind(e){return new S("regex_find",[this,k(e)],"regexFind")}regexFindAll(e){return new S("regex_find_all",[this,k(e)],"regexFindAll")}regexMatch(e){return new S("regex_match",[this,k(e)],"regexMatch").asBoolean()}stringContains(e){return new S("string_contains",[this,k(e)],"stringContains").asBoolean()}startsWith(e){return new S("starts_with",[this,k(e)],"startsWith").asBoolean()}endsWith(e){return new S("ends_with",[this,k(e)],"endsWith").asBoolean()}toLower(){return new S("to_lower",[this],"toLower")}toUpper(){return new S("to_upper",[this],"toUpper")}trim(e){const t=[this];return e&&t.push(k(e)),new S("trim",t,"trim")}ltrim(e){const t=[this];return e&&t.push(k(e)),new S("ltrim",t,"ltrim")}rtrim(e){const t=[this];return e&&t.push(k(e)),new S("rtrim",t,"rtrim")}type(){return new S("type",[this])}isType(e){return new S("is_type",[this,ls(e)],"isType").asBoolean()}stringConcat(e,...t){const r=[e,...t].map(k);return new S("string_concat",[this,...r],"stringConcat")}stringIndexOf(e){return new S("string_index_of",[this,k(e)],"stringIndexOf")}stringRepeat(e){return new S("string_repeat",[this,k(e)],"stringRepeat")}stringReplaceAll(e,t){return new S("string_replace_all",[this,k(e),k(t)],"stringReplaceAll")}stringReplaceOne(e,t){return new S("string_replace_one",[this,k(e),k(t)],"stringReplaceOne")}concat(e,...t){const r=[e,...t].map(k);return new S("concat",[this,...r],"concat")}reverse(){return new S("reverse",[this],"reverse")}arrayFilter(e,t){return new S("array_filter",[this,k(e),t],"arrayFilter")}arrayTransform(e,t){return new S("array_transform",[this,k(e),t],"arrayTransform")}arrayTransformWithIndex(e,t,r){return new S("array_transform",[this,k(e),k(t),r],"arrayTransformWithIndex")}arraySlice(e,t){const r=[this,k(e)];return t!==void 0&&r.push(k(t)),new S("array_slice",r,"arraySlice")}arrayFirst(){return new S("array_first",[this],"arrayFirst")}arrayFirstN(e){return new S("array_first_n",[this,k(e)],"arrayFirstN")}arrayLast(){return new S("array_last",[this],"arrayLast")}arrayLastN(e){return new S("array_last_n",[this,k(e)],"arrayLastN")}arrayMaximum(){return new S("maximum",[this],"arrayMaximum")}arrayMaximumN(e){return new S("maximum_n",[this,k(e)],"arrayMaximumN")}arrayMinimum(){return new S("minimum",[this],"arrayMinimum")}arrayMinimumN(e){return new S("minimum_n",[this,k(e)],"arrayMinimumN")}arrayIndexOf(e){return new S("array_index_of",[this,k(e),k("first")],"arrayIndexOf")}arrayLastIndexOf(e){return new S("array_index_of",[this,k(e),k("last")],"arrayLastIndexOf")}arrayIndexOfAll(e){return new S("array_index_of_all",[this,k(e)],"arrayIndexOfAll")}byteLength(){return new S("byte_length",[this],"byteLength")}ceil(){return new S("ceil",[this])}floor(){return new S("floor",[this])}abs(){return new S("abs",[this])}exp(){return new S("exp",[this])}mapGet(e){return new S("map_get",[this,ls(e)],"mapGet")}mapSet(e,t,...r){const s=[this,k(e),k(t),...r.map(k)];return new S("map_set",s,"mapSet")}mapKeys(){return new S("map_keys",[this],"mapKeys")}mapValues(){return new S("map_values",[this],"mapValues")}mapEntries(){return new S("map_entries",[this],"mapEntries")}getField(e){return new S("get_field",[this,k(e)],"get_field")}count(){return We._create("count",[this],"count")}sum(){return We._create("sum",[this],"sum")}average(){return We._create("average",[this],"average")}minimum(){return We._create("minimum",[this],"minimum")}maximum(){return We._create("maximum",[this],"maximum")}first(){return We._create("first",[this],"first")}last(){return We._create("last",[this],"last")}arrayAgg(){return We._create("array_agg",[this],"arrayAgg")}arrayAggDistinct(){return We._create("array_agg_distinct",[this],"arrayAggDistinct")}countDistinct(){return We._create("count_distinct",[this],"countDistinct")}logicalMaximum(e,...t){const r=[e,...t];return new S("maximum",[this,...r.map(k)],"logicalMaximum")}logicalMinimum(e,...t){const r=[e,...t];return new S("minimum",[this,...r.map(k)],"minimum")}vectorLength(){return new S("vector_length",[this],"vectorLength")}cosineDistance(e){return new S("cosine_distance",[this,Uo(e)],"cosineDistance")}dotProduct(e){return new S("dot_product",[this,Uo(e)],"dotProduct")}euclideanDistance(e){return new S("euclidean_distance",[this,Uo(e)],"euclideanDistance")}unixMicrosToTimestamp(){return new S("unix_micros_to_timestamp",[this],"unixMicrosToTimestamp")}timestampToUnixMicros(){return new S("timestamp_to_unix_micros",[this],"timestampToUnixMicros")}unixMillisToTimestamp(){return new S("unix_millis_to_timestamp",[this],"unixMillisToTimestamp")}timestampToUnixMillis(){return new S("timestamp_to_unix_millis",[this],"timestampToUnixMillis")}unixSecondsToTimestamp(){return new S("unix_seconds_to_timestamp",[this],"unixSecondsToTimestamp")}timestampToUnixSeconds(){return new S("timestamp_to_unix_seconds",[this],"timestampToUnixSeconds")}timestampAdd(e,t){return new S("timestamp_add",[this,k(e),k(t)],"timestampAdd")}timestampSubtract(e,t){return new S("timestamp_subtract",[this,k(e),k(t)],"timestampSubtract")}timestampDiff(e,t){return new S("timestamp_diff",[this,ka(e),k(t)],"timestampDiff")}timestampExtract(e,t){const r=[this,k(e)];return t&&r.push(k(t)),new S("timestamp_extract",r,"timestampExtract")}documentId(){return new S("document_id",[this],"documentId")}parent(){return new S("parent",[this],"parent")}substring(e,t){const r=k(e);return new S("substring",t===void 0?[this,r]:[this,r,k(t)],"substring")}arrayGet(e){return new S("array_get",[this,k(e)],"arrayGet")}isError(){return new S("is_error",[this],"isError").asBoolean()}ifError(e){const t=new S("if_error",[this,k(e)],"ifError");return e instanceof tn?t.asBoolean():t}isAbsent(){return new S("is_absent",[this],"isAbsent").asBoolean()}mapRemove(e){return new S("map_remove",[this,k(e)],"mapRemove")}mapMerge(e,...t){const r=k(e),s=t.map(k);return new S("map_merge",[this,r,...s],"mapMerge")}pow(e){return new S("pow",[this,k(e)])}trunc(e){return e===void 0?new S("trunc",[this]):new S("trunc",[this,k(e)],"trunc")}round(e){return e===void 0?new S("round",[this]):new S("round",[this,k(e)],"round")}collectionId(){return new S("collection_id",[this])}length(){return new S("length",[this])}ln(){return new S("ln",[this])}sqrt(){return new S("sqrt",[this])}stringReverse(){return new S("string_reverse",[this])}ifAbsent(e){return new S("if_absent",[this,k(e)],"ifAbsent")}ifNull(e){return new S("if_null",[this,k(e)],"ifNull")}coalesce(e,...t){return new S("coalesce",[this,k(e),...t.map(k)],"coalesce")}join(e){return new S("join",[this,k(e)],"join")}log10(){return new S("log10",[this])}arraySum(){return new S("sum",[this])}split(e){return new S("split",[this,k(e)])}timestampTruncate(e,t){const r=[this,k(e)];return t&&r.push(k(t)),new S("timestamp_trunc",r)}ascending(){return H_(this)}descending(){return G_(this)}as(e){return new q_(this,e,"as")}}class We{constructor(e,t){this.name=e,this.params=t,this.exprType="AggregateFunction",this._protoValueType="ProtoValue"}static _create(e,t,r){const s=new We(e,t);return s._methodName=r,s}as(e){return new B_(this,e,"as")}_toProto(e){return{functionValue:{name:this.name,args:this.params.map(t=>t._toProto(e))}}}_readUserData(e){e=this._methodName?e.contextWith({methodName:this._methodName}):e,this.params.forEach(t=>t._readUserData(e))}}class B_{constructor(e,t,r){this.aggregate=e,this.alias=t,this._methodName=r}_readUserData(e){this.aggregate._readUserData(e)}}class q_{constructor(e,t,r){this.expr=e,this.alias=t,this._methodName=r,this.exprType="AliasedExpression",this.selectable=!0}_readUserData(e){this.expr._readUserData(e)}}class Lr extends bn{constructor(e,t){super(),this.cr=e,this._methodName=t,this.expressionType="ListOfExpressions"}_toProto(e){return{arrayValue:{values:this.cr.map(t=>t._toProto(e))}}}_readUserData(e){this.cr.forEach(t=>t._readUserData(e))}}class ar extends bn{constructor(e,t){super(),this.fieldPath=e,this._methodName=t,this.expressionType="Field",this.selectable=!0}get _fieldPath(){return this.fieldPath}get fieldName(){return this.fieldPath.canonicalString()}get alias(){return this.fieldName}get expr(){return this}geoDistance(e){return new S("geo_distance",[this,k(e)],"geoDistance")}_toProto(e){return{fieldReferenceValue:this.fieldPath.canonicalString()}}_readUserData(e){}}function si(n){return $_(n,"field")}function $_(n,e){return new ar(typeof n=="string"?ut===n?n_()._internalPath:en("field",n):n._internalPath,e)}class cr extends bn{constructor(e,t){super(),this.value=e,this._methodName=t,this.expressionType="Constant"}static _fromProto(e){const t=new cr(e,void 0);return t._protoValue=e,t}_toProto(e){return F(this._protoValue!==void 0,237),this._protoValue}_getValue(){return this._protoValue}_readUserData(e){e=this._methodName?e.contextWith({methodName:this._methodName}):e,U_(this._protoValue)||(this._protoValue=Zt(this.value,e))}}function ls(n,e){return _d(n,"constant")}function _d(n,e){const t=new cr(n,e);return typeof n=="boolean"?new Ed(t):t}class S extends bn{constructor(e,t,r,s){super(),this.name=e,this.params=t,this.expressionType="Function",this._optionsProto=void 0,r!==void 0&&(this._methodName=r),s!==void 0&&(this._options=s)}get _optionsUtil(){return new Ce({})}_toProto(e){const t={functionValue:{name:this.name,args:this.params.map(r=>r._toProto(e))}};return this._optionsProto&&(t.functionValue.options=this._optionsProto),t}_readUserData(e){e=this._methodName?e.contextWith({methodName:this._methodName}):e,this.params.forEach(t=>t._readUserData(e)),this._options&&(this._optionsProto=this._optionsUtil.getOptionsProto(e,this._options))}}class tn extends bn{get _methodName(){return this._expr._methodName}countIf(){return We._create("count_if",[this],"countIf")}not(){return new S("not",[this],"not").asBoolean()}conditional(e,t){return new S("conditional",[this,e,t],"conditional")}ifError(e){const t=k(e),r=new S("if_error",[this,t],"ifError");return t instanceof tn?r.asBoolean():r}_toProto(e){return this._expr._toProto(e)}_readUserData(e){this._expr._readUserData(e)}}class yd extends tn{constructor(e){super(),this._expr=e,this.expressionType="Function"}}class Ed extends tn{constructor(e){super(),this._expr=e,this.expressionType="Constant"}_getValue(){return this._expr._getValue()}}class j_ extends tn{constructor(e){super(),this._expr=e,this.expressionType="Field"}}function W_(n,e){const t=[];for(const r in n)if(Object.prototype.hasOwnProperty.call(n,r)){const s=n[r];t.push(ls(r)),t.push(k(s))}return new S("map",t,"map")}function z_(n){return function(t,r){return new S("array",t.map(s=>k(s)),r)}(n,"array")}function H_(n){return new wd(ka(n),"ascending","ascending")}function G_(n){return new wd(ka(n),"descending","descending")}class wd{constructor(e,t,r){this.expr=e,this.direction=t,this._methodName=r,this._protoValueType="ProtoValue"}_toProto(e){return{mapValue:{fields:{direction:nd(this.direction),expression:this.expr._toProto(e)}}}}_readUserData(e){this.expr._readUserData(e)}}/**
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
 */class Ye{constructor(e){this.optionsProto=void 0,{rawOptions:this.rawOptions,...this.knownOptions}=e}_readUserData(e){this.optionsProto=this._optionsUtil.getOptionsProto(e,this.knownOptions,this.rawOptions)}_toProto(e){return{name:this._name,options:this.optionsProto}}}class Td extends Ye{get _name(){return"add_fields"}get _optionsUtil(){return new Ce({})}constructor(e,t){super(t),this.fields=e}_toProto(e){return{...super._toProto(e),args:[us(e,this.fields)]}}_readUserData(e){super._readUserData(e),nn(this.fields,e)}}class Id extends Ye{get _name(){return"aggregate"}get _optionsUtil(){return new Ce({})}constructor(e,t,r){super(r),this.groups=e,this.accumulators=t}_toProto(e){return{...super._toProto(e),args:[us(e,this.accumulators),us(e,this.groups)]}}_readUserData(e){super._readUserData(e),nn(this.groups,e),nn(this.accumulators,e)}}class vd extends Ye{get _name(){return"distinct"}get _optionsUtil(){return new Ce({})}constructor(e,t){super(t),this.groups=e}_toProto(e){return{...super._toProto(e),args:[us(e,this.groups)]}}_readUserData(e){super._readUserData(e),nn(this.groups,e)}}class Ki extends Ye{get _name(){return"collection"}get _optionsUtil(){return new Ce({forceIndex:{serverName:"force_index"}})}constructor(e,t){super(t),this.hr=e.startsWith("/")?e:"/"+e}_toProto(e){return{...super._toProto(e),args:[{referenceValue:this.hr}]}}_readUserData(e){super._readUserData(e)}}class Qi extends Ye{get _name(){return"collection_group"}get _optionsUtil(){return new Ce({forceIndex:{serverName:"force_index"}})}constructor(e,t){super(t),this.collectionId=e}_toProto(e){return{...super._toProto(e),args:[{referenceValue:""},{stringValue:this.collectionId}]}}_readUserData(e){super._readUserData(e)}}class Da extends Ye{get _name(){return"database"}get _optionsUtil(){return new Ce({})}_toProto(e){return{...super._toProto(e)}}_readUserData(e){super._readUserData(e)}}class xa extends Ye{get _name(){return"documents"}get _optionsUtil(){return new Ce({})}constructor(e,t){if(super(t),!e||e.length===0)throw new D(C.INVALID_ARGUMENT,"Empty document paths are not allowed in DocumentsSource");const r=e.map(i=>i.startsWith("/")?i:"/"+i),s=new Set(r);if(s.size!==r.length)throw new D(C.INVALID_ARGUMENT,"Duplicate document paths are not allowed in DocumentsSource");this.Tr=r,this.Pr=s}_toProto(e){return{...super._toProto(e),args:this.Tr.map(t=>({referenceValue:t}))}}_readUserData(e){super._readUserData(e)}}class Yi extends Ye{get _name(){return"where"}get _optionsUtil(){return new Ce({})}constructor(e,t){super(t),this.condition=e}_toProto(e){return{...super._toProto(e),args:[this.condition._toProto(e)]}}_readUserData(e){super._readUserData(e),nn(this.condition,e)}}class Sn extends Ye{get _name(){return"limit"}get _optionsUtil(){return new Ce({})}constructor(e,t){F(!isNaN(e)&&e!==1/0&&e!==-1/0,34860),super(t),this.limit=e}_toProto(e){return{...super._toProto(e),args:[Ta(e,this.limit)]}}}class ll extends Ye{get _name(){return"offset"}get _optionsUtil(){return new Ce({})}constructor(e,t){super(t),this.offset=e}_toProto(e){return{...super._toProto(e),args:[Ta(e,this.offset)]}}}class K_ extends Ye{get _name(){return"select"}get _optionsUtil(){return new Ce({})}constructor(e,t){super(t),this.selections=e}_toProto(e){return{...super._toProto(e),args:[us(e,this.selections)]}}_readUserData(e){super._readUserData(e),nn(this.selections,e)}}class Et extends Ye{get _name(){return"sort"}get _optionsUtil(){return new Ce({})}constructor(e,t){super(t),this.orderings=e}_toProto(e){return{...super._toProto(e),args:this.orderings.map(t=>t._toProto(e))}}_readUserData(e){super._readUserData(e),nn(this.orderings,e)}}class Oa extends Ye{get _name(){return"replace_with"}get _optionsUtil(){return new Ce({})}constructor(e,t){super(t),this.map=e}_toProto(e){return{...super._toProto(e),args:[this.map._toProto(e),nd(Oa.Ir)]}}_readUserData(e){super._readUserData(e),nn(this.map,e)}}Oa.Ir="full_replace";function nn(n,e){return gd(n)?n._readUserData(e):Array.isArray(n)?n.forEach(t=>t._readUserData(e)):n instanceof Map?n.forEach(t=>t._readUserData(e)):Object.values(n).forEach(t=>t._readUserData(e)),n}/**
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
 */class zr{constructor(e,t,r,s){this._db=e,this.userDataReader=t,this._userDataWriter=r,this.stages=s}Vr(e,t){const r=this.userDataReader.createContext(3,e);return gd(t)?t._readUserData(r):Array.isArray(t)?t.forEach(s=>s._readUserData(r)):t.forEach(s=>s._readUserData(r)),t}where(e){const t=this.stages.map(r=>r);return this.Vr("where",e),t.push(new Yi(e,{})),new zr(this._db,this.userDataReader,this._userDataWriter,t)}limit(e){const t=this.stages.map(r=>r);return t.push(new Sn(e,{})),new zr(this._db,this.userDataReader,this._userDataWriter,t)}sort(e,...t){const r=this.stages.map(s=>s);return"orderings"in e?r.push(new Et(this.Vr("sort",e.orderings),{})):r.push(new Et(this.Vr("sort",[e,...t]),{})),new zr(this._db,this.userDataReader,this._userDataWriter,r)}dr(e){return{pipeline:{stages:this.stages.map(t=>t._toProto(e))}}}}// Copyright 2024 Google LLC* @license
class ke{constructor(e,t,r){this.serializer=e,this.stages=t,this.listenOptions=r,this.isCorePipeline=!0}getPipelineCollection(){return Ji(this)}getPipelineCollectionGroup(){return La(this)}getPipelineCollectionId(){return Q_(this)}getPipelineDocuments(){return ia(this)}getPipelineFlavor(){return function(t){let r="exact";return t.stages.forEach((s,i)=>{s._name!==vd.name&&s._name!==Id.name||(r="keyless"),s._name===K_.name&&r==="exact"&&(r="augmented"),s._name===Td.name&&i<t.stages.length-1&&r==="exact"&&(r="augmented")}),r}(this)}getPipelineSourceType(){return Gt(this)}}function Gt(n){const e=n.stages[0];return e instanceof Ki||e instanceof Qi||e instanceof Da||e instanceof xa?e._name:"unknown"}function Ji(n){if(Gt(n)==="collection")return n.stages[0].hr}function La(n){if(Gt(n)==="collection_group")return n.stages[0].collectionId}function Q_(n){switch(Gt(n)){case"collection":return X.fromString(Ji(n)).lastSegment();case"collection_group":return La(n);default:return}}function ia(n){if(Gt(n)==="documents")return n.stages[0].Tr}class w{constructor(e,t){this.type=e,this.value=t}static mr(){return new w("ERROR",void 0)}static pr(){return new w("UNSET",void 0)}static gr(){return new w("NULL",Qn)}static newValue(e){return He(e)?new w("NULL",Qn):function(r){return!!r&&"booleanValue"in r}(e)?new w("BOOLEAN",e):lt(e)?new w("INT",e):yn(e)?new w("DOUBLE",e):function(r){return!!r&&"timestampValue"in r&&!!r.timestampValue}(e)?new w("TIMESTAMP",e):function(r){return!!r&&"stringValue"in r}(e)?new w("STRING",e):function(r){return!!r&&"bytesValue"in r}(e)?new w("BYTES",e):e.referenceValue?new w("REFERENCE",e):e.geoPointValue?new w("GEO_POINT",e):Jn(e)?new w("ARRAY",e):pi(e)?new w("VECTOR",e):En(e)?new w("MAP",e):new w("ERROR",void 0)}yr(){return this.type==="ERROR"||this.type==="UNSET"}wr(){return this.type==="NULL"}}function Hr(n){if(!n.yr())return n.value}function Ad(n){return n instanceof tn?n._expr:n}function $(n){if((n=Ad(n))instanceof ar)return new Y_(n);if(n instanceof cr)return new J_(n);if(n instanceof Lr)return new X_(n);if(n instanceof S){if(n.name==="add")return new ty(n);if(n.name==="subtract")return new ny(n);if(n.name==="multiply")return new ry(n);if(n.name==="divide")return new sy(n);if(n.name==="mod")return new iy(n);if(n.name==="and")return new oy(n);if(n.name==="equal")return new yy(n);if(n.name==="not_equal")return new Ey(n);if(n.name==="less_than")return new wy(n);if(n.name==="less_than_or_equal")return new Ty(n);if(n.name==="greater_than")return new Iy(n);if(n.name==="greater_than_or_equal")return new vy(n);if(n.name==="array_concat")return new Ay(n);if(n.name==="array_reverse")return new Ry(n);if(n.name==="array_contains")return new Py(n);if(n.name==="array_contains_all")return new Sy(n);if(n.name==="array_contains_any")return new Vy(n);if(n.name==="array_length")return new Cy(n);if(n.name==="array_element")return new by(n);if(n.name==="equal_any")return new Rd(n);if(n.name==="not_equal_any")return new cy(n);if(n.name==="is_nan")return new uy(n);if(n.name==="is_not_nan")return new ly(n);if(n.name==="is_null")return new hy(n);if(n.name==="is_not_null")return new dy(n);if(n.name==="is_error")return new fy(n);if(n.name==="exists")return new py(n);if(n.name==="not")return new Xi(n);if(n.name==="or")return new ay(n);if(n.name==="xor")return new Ma(n);if(n.name==="conditional")return new my(n);if(n.name==="maximum")return new gy(n);if(n.name==="minimum")return new _y(n);if(n.name==="reverse")return new Ny(n);if(n.name==="replace_first")return new ky(n);if(n.name==="replace_all")return new Dy(n);if(n.name==="char_length")return new xy(n);if(n.name==="byte_length")return new Oy(n);if(n.name==="like")return new Ly(n);if(n.name==="regex_contains")return new My(n);if(n.name==="regex_match")return new Uy(n);if(n.name==="string_contains")return new Fy(n);if(n.name==="starts_with")return new By(n);if(n.name==="ends_with")return new qy(n);if(n.name==="to_lower")return new $y(n);if(n.name==="to_upper")return new jy(n);if(n.name==="trim")return new Wy(n);if(n.name==="string_concat")return new zy(n);if(n.name==="map_get")return new Hy(n);if(n.name==="cosine_distance")return new Gy(n);if(n.name==="dot_product")return new Ky(n);if(n.name==="euclidean_distance")return new Qy(n);if(n.name==="vector_length")return new Yy(n);if(n.name==="unix_micros_to_timestamp")return new tE(n);if(n.name==="timestamp_to_unix_micros")return new sE(n);if(n.name==="unix_millis_to_timestamp")return new nE(n);if(n.name==="timestamp_to_unix_millis")return new iE(n);if(n.name==="unix_seconds_to_timestamp")return new rE(n);if(n.name==="timestamp_to_unix_seconds")return new oE(n);if(n.name==="timestamp_add")return new aE(n);if(n.name==="timestamp_subtract")return new cE(n)}throw new Error(`Unknown Expr : ${n}`)}class Y_{constructor(e){this.expr=e}evaluate(e,t){if(this.expr.fieldName===ut)return w.newValue({referenceValue:wi(e.serializer,t.key)});if(this.expr.fieldName==="__update_time__")return w.newValue({timestampValue:ri(e.serializer,t.version)});if(this.expr.fieldName==="__create_time__")return w.newValue({timestampValue:ri(e.serializer,t.createTime)});const r=t.data.field(this.expr._fieldPath);return r?Oi(r)?w.newValue(function(i,a){if(i.serverTimestampBehavior==="estimate")return{timestampValue:ri(i.serializer,j.fromTimestamp(Kn(a)))};if(i.serverTimestampBehavior==="previous"){const c=ws(a);if(c)return c}return{nullValue:"NULL_VALUE"}}(e,r)):w.newValue(r):w.pr()}}class J_{constructor(e){this.expr=e}evaluate(e,t){return w.newValue(this.expr._getValue())}}class X_{constructor(e){this.expr=e}evaluate(e,t){const r=this.expr.cr.map(s=>$(s).evaluate(e,t));return r.some(s=>s.yr())?w.mr():w.newValue({arrayValue:{values:r.map(s=>s.value)}})}}function Te(n){return yn(n)?Number(n.doubleValue):Number(n.integerValue)}function pt(n){return BigInt(n.integerValue)}const Z_=BigInt("0x7fffffffffffffff"),ey=-BigInt("0x8000000000000000");class As{constructor(e){this.expr=e}evaluate(e,t){F(this.expr.params.length>=2,24778);const r=$(this.expr.params[0]).evaluate(e,t),s=$(this.expr.params[1]).evaluate(e,t);let i=this.br(r,s);for(const a of this.expr.params.slice(2)){const c=$(a).evaluate(e,t);i=this.br(i,c)}return i}br(e,t){if(e.yr()||t.yr())return w.mr();if(e.wr()||t.wr())return w.gr();const r=e.value,s=t.value;if(!yn(r)&&!lt(r)||!yn(s)&&!lt(s))return w.mr();if(yn(r)||yn(s)){const i=this.Sr(r,s);return i?w.newValue(i):w.mr()}if(lt(r)&&lt(s)){const i=this.vr(r,s);return i===void 0?w.mr():typeof i=="number"?w.newValue({doubleValue:i}):i<ey||i>Z_?w.mr():w.newValue({integerValue:`${i}`})}return w.mr()}}function Vt(n,e){return pe(n)!==pe(e)?"TYPE_MISMATCH":Be(n)||Be(e)?"NOT_EQ":He(n)&&He(e)?"EQ":He(n)||He(e)?"NULL":Jn(n)&&Jn(e)?function(r,s){var a,c,l;if(((a=r.values)==null?void 0:a.length)!==((c=s.values)==null?void 0:c.length))return"NOT_EQ";let i=!1;for(let h=0;h<(((l=r.values)==null?void 0:l.length)??0);h++){const f=r.values[h],m=s.values[h];switch(Vt(f,m)){case"EQ":break;case"NOT_EQ":case"TYPE_MISMATCH":return"NOT_EQ";case"NULL":i=!0;break;default:q(44609,{Dr:f,Cr:m})}}return i?"NULL":"EQ"}(n.arrayValue,e.arrayValue):pi(n)&&pi(e)||En(n)&&En(e)?function(r,s){const i=r.fields||{},a=s.fields||{};if(di(i)!==di(a))return"NOT_EQ";let c=!1;for(const l in i)if(i.hasOwnProperty(l)){if(a[l]===void 0)return"NOT_EQ";switch(Vt(i[l],a[l])){case"NOT_EQ":case"TYPE_MISMATCH":return"NOT_EQ";case"NULL":c=!0}}return c?"NULL":"EQ"}(n.mapValue,e.mapValue):function(r,s){return et(r,s,{u:!1,i:!0,o:!0})}(n,e)?"EQ":"NOT_EQ"}class ty extends As{vr(e,t){return pt(e)+pt(t)}Sr(e,t){return{doubleValue:Te(e)+Te(t)}}}class ny extends As{constructor(e){super(e),this.expr=e}vr(e,t){return pt(e)-pt(t)}Sr(e,t){return{doubleValue:Te(e)-Te(t)}}}class ry extends As{constructor(e){super(e),this.expr=e}vr(e,t){return pt(e)*pt(t)}Sr(e,t){return{doubleValue:Te(e)*Te(t)}}}class sy extends As{constructor(e){super(e),this.expr=e}vr(e,t){const r=pt(t);if(r!==BigInt(0))return pt(e)/r}Sr(e,t){const r=Te(t);return r===0?{doubleValue:es(r)?Number.NEGATIVE_INFINITY:Number.POSITIVE_INFINITY}:{doubleValue:Te(e)/r}}}class iy extends As{constructor(e){super(e),this.expr=e}vr(e,t){const r=pt(t);if(r!==BigInt(0))return pt(e)%r}Sr(e,t){const r=Te(t);if(r!==0)return{doubleValue:Te(e)%r}}}class oy{constructor(e){this.expr=e}evaluate(e,t){var i;let r=!1,s=!1;for(const a of this.expr.params){const c=$(a).evaluate(e,t);switch(c.type){case"BOOLEAN":if(!((i=c.value)!=null&&i.booleanValue))return w.newValue(Ee);break;case"NULL":s=!0;break;default:r=!0}}return r?w.mr():s?w.gr():w.newValue(Ue)}}class Xi{constructor(e){this.expr=e}evaluate(e,t){var s;F(this.expr.params.length===1,9634);const r=$(this.expr.params[0]).evaluate(e,t);switch(r.type){case"BOOLEAN":return w.newValue({booleanValue:!((s=r.value)!=null&&s.booleanValue)});case"NULL":return w.gr();default:return w.mr()}}}class ay{constructor(e){this.expr=e}evaluate(e,t){var i;let r=!1,s=!1;for(const a of this.expr.params){const c=$(a).evaluate(e,t);switch(c.type){case"BOOLEAN":if((i=c.value)!=null&&i.booleanValue)return w.newValue(Ue);break;case"NULL":s=!0;break;default:r=!0}}return r?w.mr():s?w.gr():w.newValue(Ee)}}class Ma{constructor(e){this.expr=e}evaluate(e,t){var i;let r=!1,s=!1;for(const a of this.expr.params){const c=$(a).evaluate(e,t);switch(c.type){case"BOOLEAN":r=Ma.xor(r,!!((i=c.value)!=null&&i.booleanValue));break;case"NULL":s=!0;break;default:return w.mr()}}return s?w.gr():w.newValue({booleanValue:r})}static xor(e,t){return(e||t)&&!(e&&t)}}class Rd{constructor(e){this.expr=e}evaluate(e,t){var a,c;F(this.expr.params.length===2,55094);let r=!1;const s=$(this.expr.params[0]).evaluate(e,t);switch(s.type){case"NULL":r=!0;break;case"ERROR":case"UNSET":return w.mr()}const i=$(this.expr.params[1]).evaluate(e,t);switch(i.type){case"ARRAY":break;case"NULL":r=!0;break;default:return w.mr()}if(r)return w.gr();for(const l of((c=(a=i.value)==null?void 0:a.arrayValue)==null?void 0:c.values)??[])switch(He(s.value)&&He(l)?"EQ":Vt(s.value,l)){case"EQ":return w.newValue(Ue);case"NOT_EQ":case"TYPE_MISMATCH":break;case"NULL":r=!0;break;default:q(44608,{value:s.value,candidate:l})}return r?w.gr():w.newValue(Ee)}}class cy{constructor(e){this.expr=e}evaluate(e,t){return new Xi(new S("not",[new S("equal_any",this.expr.params)])).evaluate(e,t)}}class uy{constructor(e){this.expr=e}evaluate(e,t){F(this.expr.params.length===1,23322);const r=$(this.expr.params[0]).evaluate(e,t);switch(r.type){case"INT":return w.newValue(Ee);case"DOUBLE":return w.newValue({booleanValue:isNaN(Te(r.value))});case"NULL":return w.gr();default:return w.mr()}}}class ly{constructor(e){this.expr=e}evaluate(e,t){return F(this.expr.params.length===1,50406),new Xi(new S("not",[new S("is_nan",this.expr.params)])).evaluate(e,t)}}class hy{constructor(e){this.expr=e}evaluate(e,t){switch(F(this.expr.params.length===1,23123),$(this.expr.params[0]).evaluate(e,t).type){case"NULL":return w.newValue(Ue);case"UNSET":case"ERROR":return w.mr();default:return w.newValue(Ee)}}}class dy{constructor(e){this.expr=e}evaluate(e,t){return F(this.expr.params.length===1,23167),new Xi(new S("not",[new S("is_null",this.expr.params)])).evaluate(e,t)}}class fy{constructor(e){this.expr=e}evaluate(e,t){return F(this.expr.params.length===1,5228),$(this.expr.params[0]).evaluate(e,t).type==="ERROR"?w.newValue(Ue):w.newValue(Ee)}}class py{constructor(e){this.expr=e}evaluate(e,t){switch(F(this.expr.params.length===1,6877),$(this.expr.params[0]).evaluate(e,t).type){case"ERROR":return w.mr();case"UNSET":return w.newValue(Ee);default:return w.newValue(Ue)}}}class my{constructor(e){this.expr=e}evaluate(e,t){var s;F(this.expr.params.length===3,11706);const r=$(this.expr.params[0]).evaluate(e,t);switch(r.type){case"BOOLEAN":return(s=r.value)!=null&&s.booleanValue?$(this.expr.params[1]).evaluate(e,t):$(this.expr.params[2]).evaluate(e,t);case"NULL":return $(this.expr.params[2]).evaluate(e,t);default:return w.mr()}}}class gy{constructor(e){this.expr=e}evaluate(e,t){const r=this.expr.params.map(i=>$(i).evaluate(e,t));let s;for(const i of r)switch(i.type){case"ERROR":case"UNSET":case"NULL":continue;default:s=s===void 0||Fe(i.value,s.value)>0?i:s}return s===void 0?w.gr():s}}class _y{constructor(e){this.expr=e}evaluate(e,t){const r=this.expr.params.map(i=>$(i).evaluate(e,t));let s;for(const i of r)switch(i.type){case"ERROR":case"UNSET":case"NULL":continue;default:s=s===void 0||Fe(i.value,s.value)<0?i:s}return s===void 0?w.gr():s}}class ur{constructor(e){this.expr=e}evaluate(e,t){F(this.expr.params.length===2,31033,`${this.expr.name}() function should have exactly 2 params`);const r=$(this.expr.params[0]).evaluate(e,t);switch(r.type){case"ERROR":case"UNSET":return w.mr()}const s=$(this.expr.params[1]).evaluate(e,t);switch(s.type){case"ERROR":case"UNSET":return w.mr()}return this.Fr(r,s)}}class yy extends ur{constructor(e){super(e),this.expr=e}Fr(e,t){if(e.wr()&&t.wr())return w.newValue(Ue);if(e.wr()||t.wr()||Be(e.value)||Be(t.value)||pe(e.value)!==pe(t.value))return w.newValue(Ee);switch(Vt(e.value,t.value)){case"EQ":return w.newValue(Ue);case"NOT_EQ":return w.newValue(Ee);case"NULL":return w.gr();default:q(44615,{left:e,right:t})}}}class Ey extends ur{constructor(e){super(e),this.expr=e}Fr(e,t){switch(Vt(e.value,t.value)){case"EQ":return w.newValue(Ee);case"NOT_EQ":case"TYPE_MISMATCH":return w.newValue(Ue);case"NULL":return w.gr();default:q(44614,{left:e,right:t})}}}class wy extends ur{constructor(e){super(e),this.expr=e}Fr(e,t){return pe(e.value)!==pe(t.value)||Be(e.value)||Be(t.value)?w.newValue(Ee):w.newValue({booleanValue:Fe(e.value,t.value)<0})}}class Ty extends ur{constructor(e){super(e),this.expr=e}Fr(e,t){return pe(e.value)!==pe(t.value)||Be(e.value)||Be(t.value)?w.newValue(Ee):Vt(e.value,t.value)==="EQ"?w.newValue(Ue):w.newValue({booleanValue:Fe(e.value,t.value)<0})}}class Iy extends ur{constructor(e){super(e),this.expr=e}Fr(e,t){return pe(e.value)!==pe(t.value)||Be(e.value)||Be(t.value)?w.newValue(Ee):w.newValue({booleanValue:Fe(e.value,t.value)>0})}}class vy extends ur{constructor(e){super(e),this.expr=e}Fr(e,t){return pe(e.value)!==pe(t.value)||Be(e.value)||Be(t.value)?w.newValue(Ee):Vt(e.value,t.value)==="EQ"?w.newValue(Ue):w.newValue({booleanValue:Fe(e.value,t.value)>0})}}class Ay{constructor(e){this.expr=e}evaluate(e,t){throw new Error("Unimplemented")}}class Ry{constructor(e){this.expr=e}evaluate(e,t){var s;F(this.expr.params.length===1,216);const r=$(this.expr.params[0]).evaluate(e,t);switch(r.type){case"NULL":return w.gr();case"ARRAY":{const i=((s=r.value.arrayValue)==null?void 0:s.values)??[];return w.newValue({arrayValue:{values:[...i].reverse()}})}default:return w.mr()}}}class Py{constructor(e){this.expr=e}evaluate(e,t){return F(this.expr.params.length===2,52884),new Rd(new S("eq_any",[this.expr.params[1],this.expr.params[0]])).evaluate(e,t)}}class Sy{constructor(e){this.expr=e}evaluate(e,t){var l,h,f,m;F(this.expr.params.length===2,1392);let r=!1;const s=$(this.expr.params[0]).evaluate(e,t);switch(s.type){case"ARRAY":break;case"NULL":r=!0;break;default:return w.mr()}const i=$(this.expr.params[1]).evaluate(e,t);switch(i.type){case"ARRAY":break;case"NULL":r=!0;break;default:return w.mr()}if(r)return w.gr();const a=((h=(l=i.value)==null?void 0:l.arrayValue)==null?void 0:h.values)??[],c=((m=(f=s.value)==null?void 0:f.arrayValue)==null?void 0:m.values)??[];for(const E of a){let V=!1;r=!1;for(const N of c){switch(He(E)&&He(N)?"EQ":Vt(E,N)){case"EQ":V=!0;break;case"NOT_EQ":case"TYPE_MISMATCH":break;case"NULL":r=!0;break;default:q(44613,{value:N,search:E})}if(V)break}if(!V)return w.newValue(Ee)}return w.newValue(Ue)}}class Vy{constructor(e){this.expr=e}evaluate(e,t){var l,h,f,m;F(this.expr.params.length===2,2680);let r=!1;const s=$(this.expr.params[0]).evaluate(e,t);switch(s.type){case"ARRAY":break;case"NULL":r=!0;break;default:return w.mr()}const i=$(this.expr.params[1]).evaluate(e,t);switch(i.type){case"ARRAY":break;case"NULL":r=!0;break;default:return w.mr()}if(r)return w.gr();const a=((h=(l=i.value)==null?void 0:l.arrayValue)==null?void 0:h.values)??[],c=((m=(f=s.value)==null?void 0:f.arrayValue)==null?void 0:m.values)??[];for(const E of c)for(const V of a)switch(He(E)&&He(V)?"EQ":Vt(E,V)){case"EQ":return w.newValue(Ue);case"NOT_EQ":case"TYPE_MISMATCH":break;case"NULL":r=!0;break;default:q(60403,{value:E,search:V})}return r?w.gr():w.newValue(Ee)}}class Cy{constructor(e){this.expr=e}evaluate(e,t){var s,i,a;F(this.expr.params.length===1,38605);const r=$(this.expr.params[0]).evaluate(e,t);switch(r.type){case"NULL":return w.gr();case"ARRAY":return w.newValue({integerValue:`${((a=(i=(s=r.value)==null?void 0:s.arrayValue)==null?void 0:i.values)==null?void 0:a.length)??0}`});default:return w.mr()}}}class by{constructor(e){this.expr=e}evaluate(e,t){throw new Error("Unimplemented")}}class Ny{constructor(e){this.expr=e}evaluate(e,t){var s,i;F(this.expr.params.length===1,1508);const r=$(this.expr.params[0]).evaluate(e,t);switch(r.type){case"NULL":return w.gr();case"BYTES":{const a=(s=r.value)==null?void 0:s.bytesValue;if(typeof a=="string"){const c=fe.fromBase64String(a).toUint8Array();return c.reverse(),w.newValue({bytesValue:fe.fromUint8Array(c).toBase64()})}return w.newValue({bytesValue:new Uint8Array(a).reverse()})}case"STRING":{const a=(i=r.value)==null?void 0:i.stringValue,c=new Intl.__PRIVATE_Segmenter(void 0,{granularity:"grapheme"}).segment(a),l=Array.from(c,h=>h.segment).reverse();return w.newValue({stringValue:l.join("")})}default:return w.mr()}}}class ky{constructor(e){this.expr=e}evaluate(e,t){throw new Error("Unimplemented")}}class Dy{constructor(e){this.expr=e}evaluate(e,t){throw new Error("Unimplemented")}}class xy{constructor(e){this.expr=e}evaluate(e,t){F(this.expr.params.length===1,19400);const r=$(this.expr.params[0]).evaluate(e,t);switch(r.type){case"NULL":return w.gr();case"STRING":{const s=function(a){let c=0;for(let l=0;l<a.length;l++){const h=a.codePointAt(l);if(h===void 0)return;if(h<=65535)if(h>=55296&&h<=57343)if(h<=56319){const f=a.codePointAt(l+1);f!==void 0&&f>=56320&&f<=57343?(c+=1,l++):c+=1}else c+=1;else c+=1;else{if(!(h<=1114111))return;c+=1,l++}}return c}(r.value.stringValue);return s===void 0?w.mr():w.newValue({integerValue:s})}default:return w.mr()}}}class Oy{constructor(e){this.expr=e}evaluate(e,t){var s,i;F(this.expr.params.length===1,8486);const r=$(this.expr.params[0]).evaluate(e,t);switch(r.type){case"BYTES":{const a=(s=r.value)==null?void 0:s.bytesValue;return typeof a=="string"?w.newValue({integerValue:fe.fromBase64String(a).toUint8Array().length}):w.newValue({integerValue:new Uint8Array(a).length})}case"STRING":{const a=function(l){let h=0;for(let f=0;f<l.length;f++){const m=l.codePointAt(f);if(m===void 0)return;if(m>=55296&&m<=57343){if(!(m<=56319))return;{const E=l.codePointAt(f+1);if(E===void 0||!(E>=56320&&E<=57343))return;h+=4,f++}}else if(m<=127)h+=1;else if(m<=2047)h+=2;else if(m<=65535)h+=3;else{if(!(m<=1114111))return;h+=4,f++}}return h}((i=r.value)==null?void 0:i.stringValue);return a===void 0?w.mr():w.newValue({integerValue:a})}case"NULL":return w.gr();default:return w.mr()}}}class lr{constructor(e){this.expr=e}evaluate(e,t){var a,c;F(this.expr.params.length===2,39773,`${this.expr.name}() function should have exactly two parameters`);let r=!1;const s=$(this.expr.params[0]).evaluate(e,t);switch(s.type){case"STRING":break;case"NULL":r=!0;break;default:return w.mr()}const i=$(this.expr.params[1]).evaluate(e,t);switch(i.type){case"STRING":break;case"NULL":r=!0;break;default:return w.mr()}return r?w.gr():this.Or((a=s.value)==null?void 0:a.stringValue,(c=i.value)==null?void 0:c.stringValue)}}class Ly extends lr{Or(e,t){try{const r=function(a){let c="";for(let l=0;l<a.length;l++){const h=a.charAt(l);switch(h){case"_":c+=".";break;case"%":c+=".*";break;case"\\":case".":case"*":case"?":case"+":case"^":case"$":case"|":case"(":case")":case"[":case"]":case"{":case"}":c+="\\"+h;break;default:c+=h}}return"^"+c+"$"}(t),s=pa.compile(r);return w.newValue({booleanValue:s.matches(e)})}catch(r){return rt(`Invalid LIKE pattern converted to regex: ${t}, returning error. Error: ${r}`),w.mr()}}}class My extends lr{Or(e,t){try{const r=pa.compile(t);return w.newValue({booleanValue:r.test(e)})}catch{return rt(`Invalid regex pattern found in regex_contains: ${t}, returning error`),w.mr()}}}class Uy extends lr{Or(e,t){try{return w.newValue({booleanValue:pa.compile(t).matches(e)})}catch{return rt(`Invalid regex pattern found in regex_match: ${t}, returning error`),w.mr()}}}class Fy extends lr{Or(e,t){return w.newValue({booleanValue:e.includes(t)})}}class By extends lr{Or(e,t){return w.newValue({booleanValue:e.startsWith(t)})}}class qy extends lr{Or(e,t){return w.newValue({booleanValue:e.endsWith(t)})}}class $y{constructor(e){this.expr=e}evaluate(e,t){var s,i;F(this.expr.params.length===1,29079);const r=$(this.expr.params[0]).evaluate(e,t);switch(r.type){case"STRING":return w.newValue({stringValue:(i=(s=r.value)==null?void 0:s.stringValue)==null?void 0:i.toLowerCase()});case"NULL":return w.gr();default:return w.mr()}}}class jy{constructor(e){this.expr=e}evaluate(e,t){var s,i;F(this.expr.params.length===1,60487);const r=$(this.expr.params[0]).evaluate(e,t);switch(r.type){case"STRING":return w.newValue({stringValue:(i=(s=r.value)==null?void 0:s.stringValue)==null?void 0:i.toUpperCase()});case"NULL":return w.gr();default:return w.mr()}}}class Wy{constructor(e){this.expr=e}evaluate(e,t){var s,i;F(this.expr.params.length===1,28544);const r=$(this.expr.params[0]).evaluate(e,t);switch(r.type){case"STRING":return w.newValue({stringValue:(i=(s=r.value)==null?void 0:s.stringValue)==null?void 0:i.trim()});case"NULL":return w.gr();default:return w.mr()}}}class zy{constructor(e){this.expr=e}evaluate(e,t){const r=this.expr.params.map(a=>$(a).evaluate(e,t));let s="",i=!1;for(const a of r)switch(a.type){case"STRING":s+=a.value.stringValue;break;case"NULL":i=!0;break;default:return w.mr()}return i?w.gr():w.newValue({stringValue:s})}}class Hy{constructor(e){this.expr=e}evaluate(e,t){var a,c,l,h;F(this.expr.params.length===2,4483);const r=$(this.expr.params[0]).evaluate(e,t);switch(r.type){case"UNSET":return w.pr();case"MAP":break;default:return w.mr()}const s=$(this.expr.params[1]).evaluate(e,t);if(s.type!=="STRING")return w.mr();const i=(h=(c=(a=r.value)==null?void 0:a.mapValue)==null?void 0:c.fields)==null?void 0:h[(l=s.value)==null?void 0:l.stringValue];return i===void 0?w.pr():w.newValue(i)}}class Ua{constructor(e){this.expr=e}evaluate(e,t){var h,f;F(this.expr.params.length===2,25231,`${this.expr.name}() function should have exactly 2 params`);let r=!1;const s=$(this.expr.params[0]).evaluate(e,t);switch(s.type){case"VECTOR":break;case"NULL":r=!0;break;default:return w.mr()}const i=$(this.expr.params[1]).evaluate(e,t);switch(i.type){case"VECTOR":break;case"NULL":r=!0;break;default:return w.mr()}if(r)return w.gr();const a=Xo(s.value),c=Xo(i.value);if(a===void 0||c===void 0||((h=a.values)==null?void 0:h.length)!==((f=c.values)==null?void 0:f.length))return w.mr();const l=this.Mr(a,c);return l===void 0||isNaN(l)?w.mr():w.newValue({doubleValue:l})}}class Gy extends Ua{Mr(e,t){const r=(e==null?void 0:e.values)??[],s=(t==null?void 0:t.values)??[];if(r.length===0)return;let i=0,a=0,c=0;for(let h=0;h<r.length;h++){if(!Jt(r[h])||!Jt(s[h]))return;const f=Te(r[h]),m=Te(s[h]);i+=f*m,a+=f*f,c+=m*m}const l=Math.sqrt(a)*Math.sqrt(c);if(l!==0)return 1-Math.max(-1,Math.min(1,i/l))}}class Ky extends Ua{Mr(e,t){const r=(e==null?void 0:e.values)??[],s=(t==null?void 0:t.values)??[];if(r.length===0)return 0;let i=0;for(let a=0;a<r.length;a++){if(!Jt(r[a])||!Jt(s[a]))return;i+=Te(r[a])*Te(s[a])}return i}}class Qy extends Ua{Mr(e,t){const r=(e==null?void 0:e.values)??[],s=(t==null?void 0:t.values)??[];if(r.length===0)return 0;let i=0;for(let a=0;a<r.length;a++){if(!Jt(r[a])||!Jt(s[a]))return;const c=Te(r[a]),l=Te(s[a]);i+=Math.pow(c-l,2)}return Math.sqrt(i)}}class Yy{constructor(e){this.expr=e}evaluate(e,t){var s;F(this.expr.params.length===1,39044);const r=$(this.expr.params[0]).evaluate(e,t);switch(r.type){case"VECTOR":{const i=Xo(r.value);return w.newValue({integerValue:((s=i==null?void 0:i.values)==null?void 0:s.length)??0})}case"NULL":return w.gr();default:return w.mr()}}}const hs=BigInt(-62135596800),ds=BigInt(253402300799),Ii=BigInt(1e3),Kt=BigInt(1e6),Jy=hs*Ii,Xy=ds*Ii+BigInt(999),Zy=hs*Kt,eE=ds*Kt+BigInt(999999);function Fa(n){return n>=Zy&&n<=eE}function Pd(n){return n>=hs&&n<=ds}function fs(n,e){const t=BigInt(n);return!(t<hs||t>ds)&&!(e<0||e>=1e9)&&(t!==hs||e===0)&&!(t===ds&&e>999999999)}function Sd(n,e){return e<0?{seconds:n-1,nanos:e+1e9}:{seconds:n,nanos:e}}function Ba(n){return BigInt(n.seconds)*Kt+BigInt(Math.trunc(n.nanoseconds/1e3))}class qa{constructor(e){this.expr=e}evaluate(e,t){F(this.expr.params.length===1,49262,`${this.expr.name}() function should have exactly one parameter`);const r=$(this.expr.params[0]).evaluate(e,t);switch(r.type){case"INT":return this.toTimestamp(BigInt(r.value.integerValue));case"NULL":return w.gr();default:return w.mr()}}}class tE extends qa{toTimestamp(e){if(!Fa(e))return w.mr();let t=Number(e/Kt),r=Number(e%Kt*BigInt(1e3));const s=Sd(t,r);return t=s.seconds,r=s.nanos,fs(t,r)?w.newValue({timestampValue:{seconds:t,nanos:r}}):w.mr()}}class nE extends qa{toTimestamp(e){if(!function(a){return a>=Jy&&a<=Xy}(e))return w.mr();let t=Number(e/Ii),r=Number(e%Ii*BigInt(1e6));const s=Sd(t,r);return t=s.seconds,r=s.nanos,fs(t,r)?w.newValue({timestampValue:{seconds:t,nanos:r}}):w.mr()}}class rE extends qa{toTimestamp(e){if(!Pd(e))return w.mr();const t=Number(e);return w.newValue({timestampValue:{seconds:t,nanos:0}})}}class $a{constructor(e){this.expr=e}evaluate(e,t){F(this.expr.params.length===1,1265,`${this.expr.name}() function should have exactly one parameter`);const r=$(this.expr.params[0]).evaluate(e,t);switch(r.type){case"TIMESTAMP":break;case"NULL":return w.gr();default:return w.mr()}const s=Pa(r.value.timestampValue);return fs(s.seconds,s.nanoseconds)?this.Nr(s):w.mr()}}class sE extends $a{Nr(e){const t=Ba(e);return Fa(t)?w.newValue({integerValue:`${t.toString()}`}):w.mr()}}class iE extends $a{Nr(e){const t=Ba(e),r=t/BigInt(1e3),s=t%BigInt(1e3);return r>BigInt(0)||s===BigInt(0)?w.newValue({integerValue:r.toString()}):w.newValue({integerValue:(r-BigInt(1)).toString()})}}class oE extends $a{Nr(e){const t=BigInt(e.seconds);return Pd(t)?w.newValue({integerValue:t.toString()}):w.mr()}}class Vd{constructor(e){this.expr=e}evaluate(e,t){F(this.expr.params.length===3,2775,`${this.expr.name}() function should have exactly 3 parameters`);let r=!1;const s=$(this.expr.params[0]).evaluate(e,t);switch(s.type){case"TIMESTAMP":break;case"NULL":r=!0;break;default:return w.mr()}const i=$(this.expr.params[1]).evaluate(e,t);let a;switch(i.type){case"STRING":if(a=function(J){switch(J){case"microsecond":return"microsecond";case"millisecond":return"millisecond";case"second":return"second";case"minute":return"minute";case"hour":return"hour";case"day":return"day";default:return}}(i.value.stringValue),a===void 0)return w.mr();break;case"NULL":r=!0;break;default:return w.mr()}const c=$(this.expr.params[2]).evaluate(e,t);switch(c.type){case"INT":break;case"NULL":r=!0;break;default:return w.mr()}if(r)return w.gr();const l=BigInt(c.value.integerValue);let h;try{switch(a){case"microsecond":h=l;break;case"millisecond":h=l*BigInt(1e3);break;case"second":h=l*BigInt(1e6);break;case"minute":h=l*BigInt(6e7);break;case"hour":h=l*BigInt(36e8);break;case"day":h=l*BigInt(864e8);break;default:return w.mr()}if(a!=="microsecond"&&l!==BigInt(0)&&h/l!==BigInt(this.Lr(a)))return w.mr()}catch(H){return rt(`Error during timestamp arithmetic: ${H}`),w.mr()}const f=Pa(s.value.timestampValue);if(!fs(f.seconds,f.nanoseconds))return w.mr();const m=Ba(f),E=this.Br(m,h);if(!Fa(E))return w.mr();const V=Number(E/Kt),N=E%Kt,U=Number((N<0?N+Kt:N)*BigInt(1e3)),L=N<0?V-1:V;return fs(L,U)?w.newValue({timestampValue:{seconds:L,nanos:U}}):w.mr()}Lr(e){switch(e){case"millisecond":return 1e3;case"second":return 1e6;case"minute":return 6e7;case"hour":return 36e8;case"day":return 864e8;default:return 1}}}class aE extends Vd{Br(e,t){return e+t}}class cE extends Vd{Br(e,t){return e-t}}function ps(n){if((n=Ad(n))instanceof ar)return`fld(${n.fieldName})`;if(n instanceof cr)return`cst(${function(t){return t===null?"null":typeof t=="number"?t.toString():typeof t=="string"?`"${t}"`:t instanceof se?`ref(${t.path})`:t instanceof Me?`vec(${JSON.stringify(t)})`:JSON.stringify(t)}(n.value)})`;if(n instanceof S)return`fn(${n.name},[${n.params.map(ps).join(",")}])`;if(n.expressionType==="ListOfExpressions")return`list([${n.cr.map(ps).join(",")}])`;throw new Error(`Unrecognized expr ${JSON.stringify(n,null,2)}`)}function uE(n){if(n instanceof Td)return`${n._name}(${Js(n.fields)})`;if(n instanceof Id){let e=`${n._name}(${Js(n.accumulators)})`;return n.groups.size>0&&(e+=`grouping(${Js(n.groups)})`),e}if(n instanceof vd)return`${n._name}(${Js(n.groups)})`;if(n instanceof Ki)return`${n._name}(${n.hr})`;if(n instanceof Qi)return`${n._name}(${n.collectionId})`;if(n instanceof Da)return`${n._name}()`;if(n instanceof xa)return`${n._name}(${n.Tr.sort()})`;if(n instanceof Yi)return`${n._name}(${ps(n.condition)})`;if(n instanceof Sn)return`${n._name}(${n.limit})`;if(n instanceof Et)return`${n._name}(${function(t){return t.map(r=>`${ps(r.expr)}${r.direction}`).join(",")}(n.orderings)})`;throw new Error(`Unrecognized stage ${n._name}`)}function Js(n){return`${Array.from(n.entries()).sort().map(([e,t])=>`${e}=${ps(t)}`).join(",")}`}function At(n){return n.stages.map(e=>uE(e)).join("|")}function Cd(n,e){return At(n)===At(e)}function ge(n){return n instanceof ke}function hl(n){return ge(n)?At(n):$r(n)}function bd(n){return ge(n)?At(n):function(t){return`${Uh(ht(t))}|lt:${t.limitType}`}(n)}function Zi(n,e){return n instanceof ke&&e instanceof ke?Cd(n,e):!(n instanceof ke&&!(e instanceof ke)||!(n instanceof ke)&&e instanceof ke)&&Sg(n,e)}function Nd(n){return _n(n)?At(n):Uh(n)}function kd(n,e){return n instanceof ke&&e instanceof ke?Cd(n,e):!(n instanceof ke&&!(e instanceof ke)||!(n instanceof ke)&&e instanceof ke)&&Fh(n,e)}function lE(n,e){const t=function(s){let i=!1;const a=[];for(const c of s)if(c instanceof Et)if(i=!0,c.orderings.some(l=>l.expr instanceof ar&&l.expr.fieldName===ut))a.push(c);else{const l=c.orderings.map(h=>h);l.push(si(ut).ascending()),a.push(new Et(l,{}))}else c instanceof Sn&&(i||(a.push(new Et([si(ut).ascending()],{})),i=!0)),a.push(c);return i||a.push(new Et([si(ut).ascending()],{})),a}(n.stages);if(n.userDataReader){const r=n.userDataReader.createContext(3,"toCorePipeline");t.forEach(s=>s._readUserData(r))}return new ke(n.userDataReader.serializer,t,e)}/**
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
 */class hE{constructor(e,t,r,s){this.batchId=e,this.localWriteTime=t,this.baseMutations=r,this.mutations=s}applyToRemoteDocument(e,t){const r=t.mutationResults;for(let s=0;s<this.mutations.length;s++){const i=this.mutations[s];i.key.isEqual(e.key)&&ag(i,e,r[s])}}applyToLocalView(e,t){for(const r of this.baseMutations)r.key.isEqual(e.key)&&(t=Br(r,e,t,this.localWriteTime));for(const r of this.mutations)r.key.isEqual(e.key)&&(t=Br(r,e,t,this.localWriteTime));return t}applyToLocalDocumentSet(e,t){const r=zh();return this.mutations.forEach(s=>{const i=e.get(s.key),a=i.overlayedDocument;let c=this.applyToLocalView(a,i.mutatedFields);c=t.has(s.key)?null:c;const l=bh(a,c);l!==null&&r.set(s.key,l),a.isValidDocument()||a.convertToNoDocument(j.min())}),r}keys(){return this.mutations.reduce((e,t)=>e.add(t.key),G())}isEqual(e){return this.batchId===e.batchId&&Gn(this.mutations,e.mutations,(t,r)=>$u(t,r))&&Gn(this.baseMutations,e.baseMutations,(t,r)=>$u(t,r))}}class ja{constructor(e,t,r,s){this.batch=e,this.commitVersion=t,this.mutationResults=r,this.docVersions=s}static from(e,t,r){F(e.mutations.length===r.length,58842,{Ur:e.mutations.length,kr:r.length});let s=function(){return kg}();const i=e.mutations;for(let a=0;a<i.length;a++)s=s.insert(i[a].key,r[a].version);return new ja(e,t,r,s)}}/**
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
 */const Dd="";function dE(n){let e="";for(let t=0;t<n.length;t++)e.length>0&&(e=dl(e)),e=fE(n.get(t),e);return dl(e)}function fE(n,e){let t=e;const r=n.length;for(let s=0;s<r;s++){const i=n.charAt(s);switch(i){case"\0":t+="";break;case Dd:t+="";break;default:t+=i}}return t}function dl(n){return n+Dd+""}/**
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
 */class pE{constructor(e,t){this.largestBatchId=e,this.mutation=t}getKey(){return this.mutation.key}isEqual(e){return e!==null&&this.mutation===e.mutation}toString(){return`Overlay{
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
 */class wt{constructor(e,t,r,s,i=j.min(),a=j.min(),c=fe.EMPTY_BYTE_STRING,l=null){this.target=e,this.targetId=t,this.purpose=r,this.sequenceNumber=s,this.snapshotVersion=i,this.lastLimboFreeSnapshotVersion=a,this.resumeToken=c,this.expectedCount=l}withSequenceNumber(e){return new wt(this.target,this.targetId,this.purpose,e,this.snapshotVersion,this.lastLimboFreeSnapshotVersion,this.resumeToken,this.expectedCount)}withResumeToken(e,t){return new wt(this.target,this.targetId,this.purpose,this.sequenceNumber,t,this.lastLimboFreeSnapshotVersion,e,null)}withExpectedCount(e){return new wt(this.target,this.targetId,this.purpose,this.sequenceNumber,this.snapshotVersion,this.lastLimboFreeSnapshotVersion,this.resumeToken,e)}withLastLimboFreeSnapshotVersion(e){return new wt(this.target,this.targetId,this.purpose,this.sequenceNumber,this.snapshotVersion,e,this.resumeToken,this.expectedCount)}}/**
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
 */class mE{constructor(e){this.$r=e}}function gE(n){const e=Qg({parent:n.parent,structuredQuery:n.structuredQuery});return n.limitType==="LAST"?Ei(e,e.limit,"L"):e}/**
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
 */class _E{constructor(){this.Zi=new yE}addToCollectionParentIndex(e,t){return this.Zi.add(t),b.resolve()}getCollectionParents(e,t){return b.resolve(this.Zi.getEntries(t))}addFieldIndex(e,t){return b.resolve()}deleteFieldIndex(e,t){return b.resolve()}deleteAllFieldIndexes(e){return b.resolve()}createTargetIndexes(e,t){return b.resolve()}getDocumentsMatchingTarget(e,t){return b.resolve(null)}getIndexType(e,t){return b.resolve(0)}getFieldIndexes(e,t){return b.resolve([])}getNextCollectionGroupToUpdate(e){return b.resolve(null)}getMinOffset(e,t){return b.resolve(Xt.min())}getMinOffsetFromCollectionGroup(e,t){return b.resolve(Xt.min())}updateCollectionGroup(e,t,r){return b.resolve()}updateIndexEntries(e,t){return b.resolve()}}class yE{constructor(){this.index={}}add(e){const t=e.lastSegment(),r=e.popLast(),s=this.index[t]||new de(X.comparator),i=!s.has(r);return this.index[t]=s.add(r),i}has(e){const t=e.lastSegment(),r=e.popLast(),s=this.index[t];return s&&s.has(r)}getEntries(e){return(this.index[e]||new de(X.comparator)).toArray()}}/**
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
function xd(n,e){var r;let t=e;for(const s of n.stages)t=wE({serializer:n.serializer,serverTimestampBehavior:(r=n.listenOptions)==null?void 0:r.serverTimestampBehavior},s,t);return t}function eo(n,e){return xd(n,[e]).length>0}function EE(n,e){return ge(n)?eo(n,e):qi(n,e)}function wE(n,e,t){if(e instanceof Ki)return function(s,i,a){return a.filter(c=>c.isFoundDocument()&&`/${c.key.getCollectionPath().canonicalString()}`===i.hr)}(0,e,t);if(e instanceof Yi)return function(s,i,a){return a.filter(c=>{const l=Hr($(i.condition).evaluate(s,c));return l!==void 0&&et(l,Ue)})}(n,e,t);if(e instanceof Qi)return function(s,i,a){return a.filter(c=>c.isFoundDocument()&&c.key.getCollectionPath().lastSegment()===i.collectionId)}(0,e,t);if(e instanceof Da)return function(s,i,a){return a.filter(c=>c.isFoundDocument())}(0,0,t);if(e instanceof xa)return function(s,i,a){return a.filter(c=>c.isFoundDocument()&&i.Pr.has(c.key.path.toStringWithLeadingSlash()))}(0,e,t);if(e instanceof Sn)return function(s,i,a){return a.slice(0,i.limit)}(0,e,t);if(e instanceof Et)return function(s,i,a){const c=i.orderings.map(l=>({Ms:$(l.expr),direction:l.direction}));return[...a].sort((l,h)=>{for(const{Ms:f,direction:m}of c){const E=Hr(f.evaluate(s,l)),V=Hr(f.evaluate(s,h)),N=Fe(E??Qn,V??Qn);if(N!==0)return m==="ascending"?N:-N}return 0})}(n,e,t);throw new Error(`Unknown stage: ${e._name}`)}function oa(n){const e=function(r){for(let s=r.stages.length-1;s>=0;s--){const i=r.stages[s];if(i instanceof Et)return i.orderings}throw new Error("Pipeline must contain at least one Sort stage")}(n);return(t,r)=>{for(const s of e){const i=Hr($(s.expr).evaluate({serializer:n.serializer},t)),a=Hr($(s.expr).evaluate({serializer:n.serializer},r)),c=Fe(i||Qn,a||Qn);if(c!==0)return s.direction==="ascending"?c:-c}return 0}}function Fo(n){for(let e=n.stages.length-1;e>=0;e--){const t=n.stages[e];if(t instanceof Sn)return{limit:t.limit}}}/**
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
 */class TE{constructor(){this.changes=new Cn(e=>e.toString(),(e,t)=>e.isEqual(t)),this.changesApplied=!1}addEntry(e){this.assertNotApplied(),this.changes.set(e.key,e)}removeEntry(e,t){this.assertNotApplied(),this.changes.set(e,Se.newInvalidDocument(e).setReadTime(t))}getEntry(e,t){this.assertNotApplied();const r=this.changes.get(t);return r!==void 0?b.resolve(r):this.getFromCache(e,t)}getEntries(e,t){return this.getAllFromCache(e,t)}apply(e){return this.assertNotApplied(),this.changesApplied=!0,this.applyChanges(e)}assertNotApplied(){}}/**
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
 */class IE{constructor(e,t){this.overlayedDocument=e,this.mutatedFields=t}}/**
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
 */class vE{constructor(e,t,r,s){this.remoteDocumentCache=e,this.mutationQueue=t,this.documentOverlayCache=r,this.indexManager=s}getDocument(e,t){let r=null;return this.documentOverlayCache.getOverlay(e,t).next(s=>(r=s,this.remoteDocumentCache.getEntry(e,t))).next(s=>(r!==null&&Br(r.mutation,s,ze.empty(),Z.now()),s))}getDocuments(e,t){return this.remoteDocumentCache.getEntries(e,t).next(r=>this.getLocalViewOfDocuments(e,r,G()).next(()=>r))}getLocalViewOfDocuments(e,t,r=G()){const s=Ft();return this.populateOverlays(e,s,t).next(()=>this.computeViews(e,t,s,r).next(i=>{let a=Un();return i.forEach((c,l)=>{a=a.insert(c,l.overlayedDocument)}),a}))}getOverlayedDocuments(e,t){const r=Ft();return this.populateOverlays(e,r,t).next(()=>this.computeViews(e,t,r,G()))}populateOverlays(e,t,r){const s=[];return r.forEach(i=>{t.has(i)||s.push(i)}),this.documentOverlayCache.getOverlays(e,s).next(i=>{i.forEach((a,c)=>{t.set(a,c)})})}computeViews(e,t,r,s){let i=Le();const a=jr(),c=function(){return jr()}();return t.forEach((l,h)=>{const f=r.get(h.key);s.has(h.key)&&(f===void 0||f.mutation instanceof un)?i=i.insert(h.key,h):f!==void 0?(a.set(h.key,f.mutation.getFieldMask()),Br(f.mutation,h,f.mutation.getFieldMask(),Z.now())):a.set(h.key,ze.empty())}),this.recalculateAndSaveOverlays(e,i).next(l=>(l.forEach((h,f)=>a.set(h,f)),t.forEach((h,f)=>c.set(h,new IE(f,a.get(h)??null))),c))}recalculateAndSaveOverlays(e,t){const r=jr();let s=new ne((a,c)=>a-c),i=G();return this.mutationQueue.getAllMutationBatchesAffectingDocumentKeys(e,t).next(a=>{for(const c of a)c.keys().forEach(l=>{const h=t.get(l);if(h===null)return;let f=r.get(l)||ze.empty();f=c.applyToLocalView(h,f),r.set(l,f);const m=(s.get(c.batchId)||G()).add(l);s=s.insert(c.batchId,m)})}).next(()=>{const a=[],c=s.getReverseIterator();for(;c.hasNext();){const l=c.getNext(),h=l.key,f=l.value,m=zh();f.forEach(E=>{if(!i.has(E)){const V=bh(t.get(E),r.get(E));V!==null&&m.set(E,V),i=i.add(E)}}),a.push(this.documentOverlayCache.saveOverlays(e,h,m))}return b.waitFor(a)}).next(()=>r)}recalculateAndSaveOverlaysForDocumentKeys(e,t){return this.remoteDocumentCache.getEntries(e,t).next(r=>this.recalculateAndSaveOverlays(e,r))}getDocumentsMatchingQuery(e,t,r,s){return ge(t)?this.getDocumentsMatchingPipeline(e,t,r,s):Ag(t)?this.getDocumentsMatchingDocumentQuery(e,t.path):qh(t)?this.getDocumentsMatchingCollectionGroupQuery(e,t,r,s):this.getDocumentsMatchingCollectionQuery(e,t,r,s)}getNextDocuments(e,t,r,s){return this.remoteDocumentCache.getAllFromCollectionGroup(e,t,r,s).next(i=>{const a=s-i.size>0?this.documentOverlayCache.getOverlaysForCollectionGroup(e,t,r.largestBatchId,s-i.size):b.resolve(Ft());let c=cs,l=i;return a.next(h=>b.forEach(h,(f,m)=>(c<m.largestBatchId&&(c=m.largestBatchId),i.get(f)?b.resolve():this.remoteDocumentCache.getEntry(e,f).next(E=>{l=l.insert(f,E)}))).next(()=>this.populateOverlays(e,h,i)).next(()=>this.computeViews(e,l,h,G())).next(f=>({batchId:c,changes:Wh(f)})))})}getDocumentsMatchingDocumentQuery(e,t){return this.getDocument(e,new B(t)).next(r=>{let s=Un();return r.isFoundDocument()&&(s=s.insert(r.key,r)),s})}getDocumentsMatchingCollectionGroupQuery(e,t,r,s){const i=t.collectionGroup;let a=Un();return this.indexManager.getCollectionParents(e,i).next(c=>b.forEach(c,l=>{const h=function(m,E){return new sr(E,null,m.explicitOrderBy.slice(),m.filters.slice(),m.limit,m.limitType,m.startAt,m.endAt)}(t,l.child(i));return this.getDocumentsMatchingCollectionQuery(e,h,r,s).next(f=>{f.forEach((m,E)=>{a=a.insert(m,E)})})}).next(()=>a))}getDocumentsMatchingCollectionQuery(e,t,r,s){let i;return this.documentOverlayCache.getOverlaysForCollection(e,t.path,r.largestBatchId).next(a=>(i=a,this.remoteDocumentCache.getDocumentsMatchingQuery(e,t,r,i,s))).next(a=>this.retrieveMatchingLocalDocuments(i,a,c=>qi(t,c)))}getDocumentsMatchingPipeline(e,t,r,s){if(Gt(t)==="collection_group"){const i=La(t);let a=Un();return this.indexManager.getCollectionParents(e,i).next(c=>b.forEach(c,l=>{const h=function(m,E){const V=m.stages.map(N=>N instanceof Qi?new Ki(E.canonicalString(),{}):N);return new ke(m.serializer,V)}(t,l.child(i));return this.getDocumentsMatchingPipeline(e,h,r,s).next(f=>{f.forEach((m,E)=>{a=a.insert(m,E)})})}).next(()=>a))}{let i;return this.getOverlaysForPipeline(e,t,r.largestBatchId).next(a=>{switch(i=a,Gt(t)){case"collection":return this.remoteDocumentCache.getDocumentsMatchingQuery(e,t,r,i,s);case"documents":let c=G();for(const l of ia(t))c=c.add(B.fromPath(l));return this.remoteDocumentCache.getEntries(e,c);case"database":return this.remoteDocumentCache.getAllEntries(e);default:throw new D("invalid-argument",`Invalid pipeline source to execute offline: ${At(t)}`)}}).next(a=>this.retrieveMatchingLocalDocuments(i,a,c=>eo(t,c)))}}retrieveMatchingLocalDocuments(e,t,r){e.forEach((i,a)=>{const c=a.getKey();t.get(c)===null&&(t=t.insert(c,Se.newInvalidDocument(c)))});let s=Un();return t.forEach((i,a)=>{const c=e.get(i);c!==void 0&&Br(c.mutation,a,ze.empty(),Z.now()),r(a)&&(s=s.insert(i,a))}),s}getOverlaysForPipeline(e,t,r){switch(Gt(t)){case"collection":return this.documentOverlayCache.getOverlaysForCollection(e,X.fromString(Ji(t)),r);case"collection_group":throw new D("invalid-argument",`Unexpected collection group pipeline: ${At(t)}`);case"documents":return this.documentOverlayCache.getOverlays(e,ia(t).map(s=>B.fromPath(s)));case"database":return this.documentOverlayCache.getAllOverlays(e,r);default:throw new D("invalid-argument",`Failed to get overlays for pipeline: ${At(t)}`)}}}/**
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
 */class AE{constructor(e){this.serializer=e,this.Qs=new Map,this.Ws=new Map}getBundleMetadata(e,t){return b.resolve(this.Qs.get(t))}saveBundleMetadata(e,t){return this.Qs.set(t.id,function(s){return{id:s.id,version:s.version,createTime:dt(s.createTime)}}(t)),b.resolve()}getNamedQuery(e,t){return b.resolve(this.Ws.get(t))}saveNamedQuery(e,t){return this.Ws.set(t.name,function(s){return{name:s.name,query:gE(s.bundledQuery),readTime:dt(s.readTime)}}(t)),b.resolve()}}/**
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
 */class RE{constructor(){this.overlays=new ne(B.comparator),this.Gs=new Map}getOverlay(e,t){return b.resolve(this.overlays.get(t))}getOverlays(e,t){const r=Ft();return b.forEach(t,s=>this.getOverlay(e,s).next(i=>{i!==null&&r.set(s,i)})).next(()=>r)}getAllOverlays(e,t){const r=Ft();return this.overlays.forEach((s,i)=>{i.largestBatchId>t&&r.set(s,i)}),b.resolve(r)}saveOverlays(e,t,r){return r.forEach((s,i)=>{this.Zr(e,t,i)}),b.resolve()}removeOverlaysForBatchId(e,t,r){const s=this.Gs.get(r);return s!==void 0&&(s.forEach(i=>this.overlays=this.overlays.remove(i)),this.Gs.delete(r)),b.resolve()}getOverlaysForCollection(e,t,r){const s=Ft(),i=t.length+1,a=new B(t.child("")),c=this.overlays.getIteratorFrom(a);for(;c.hasNext();){const l=c.getNext().value,h=l.getKey();if(!t.isPrefixOf(h.path))break;h.path.length===i&&l.largestBatchId>r&&s.set(l.getKey(),l)}return b.resolve(s)}getOverlaysForCollectionGroup(e,t,r,s){let i=new ne((h,f)=>h-f);const a=this.overlays.getIterator();for(;a.hasNext();){const h=a.getNext().value;if(h.getKey().getCollectionGroup()===t&&h.largestBatchId>r){let f=i.get(h.largestBatchId);f===null&&(f=Ft(),i=i.insert(h.largestBatchId,f)),f.set(h.getKey(),h)}}const c=Ft(),l=i.getIterator();for(;l.hasNext()&&(l.getNext().value.forEach((h,f)=>c.set(h,f)),!(c.size()>=s)););return b.resolve(c)}Zr(e,t,r){const s=this.overlays.get(r.key);if(s!==null){const a=this.Gs.get(s.largestBatchId).delete(r.key);this.Gs.set(s.largestBatchId,a)}this.overlays=this.overlays.insert(r.key,new pE(t,r));let i=this.Gs.get(t);i===void 0&&(i=G(),this.Gs.set(t,i)),this.Gs.set(t,i.add(r.key))}}/**
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
 */class PE{constructor(){this.sessionToken=fe.EMPTY_BYTE_STRING}getSessionToken(e){return b.resolve(this.sessionToken)}setSessionToken(e,t){return this.sessionToken=t,b.resolve()}}/**
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
 */class Wa{constructor(){this.zs=new de(ye.js),this.Hs=new de(ye.Js)}isEmpty(){return this.zs.isEmpty()}addReference(e,t){const r=new ye(e,t);this.zs=this.zs.add(r),this.Hs=this.Hs.add(r)}Ys(e,t){e.forEach(r=>this.addReference(r,t))}removeReference(e,t){this.Zs(new ye(e,t))}Xs(e,t){e.forEach(r=>this.removeReference(r,t))}e_(e){const t=new B(new X([])),r=new ye(t,e),s=new ye(t,e+1),i=[];return this.Hs.forEachInRange([r,s],a=>{this.Zs(a),i.push(a.key)}),i}t_(){this.zs.forEach(e=>this.Zs(e))}Zs(e){this.zs=this.zs.delete(e),this.Hs=this.Hs.delete(e)}n_(e){const t=new B(new X([])),r=new ye(t,e),s=new ye(t,e+1);let i=G();return this.Hs.forEachInRange([r,s],a=>{i=i.add(a.key)}),i}containsKey(e){const t=new ye(e,0),r=this.zs.firstAfterOrEqual(t);return r!==null&&e.isEqual(r.key)}}class ye{constructor(e,t){this.key=e,this.r_=t}static js(e,t){return B.comparator(e.key,t.key)||K(e.r_,t.r_)}static Js(e,t){return K(e.r_,t.r_)||B.comparator(e.key,t.key)}}/**
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
 */class SE{constructor(e,t){this.indexManager=e,this.referenceDelegate=t,this.mutationQueue=[],this.Gr=1,this.i_=new de(ye.js)}checkEmpty(e){return b.resolve(this.mutationQueue.length===0)}addMutationBatch(e,t,r,s){const i=this.Gr;this.Gr++,this.mutationQueue.length>0&&this.mutationQueue[this.mutationQueue.length-1];const a=new hE(i,t,r,s);this.mutationQueue.push(a);for(const c of s)this.i_=this.i_.add(new ye(c.key,i)),this.indexManager.addToCollectionParentIndex(e,c.key.path.popLast());return b.resolve(a)}lookupMutationBatch(e,t){return b.resolve(this.s_(t))}getNextMutationBatchAfterBatchId(e,t){const r=t+1,s=this.__(r),i=s<0?0:s;return b.resolve(this.mutationQueue.length>i?this.mutationQueue[i]:null)}getHighestUnacknowledgedBatchId(){return b.resolve(this.mutationQueue.length===0?Ea:this.Gr-1)}getAllMutationBatches(e){return b.resolve(this.mutationQueue.slice())}getAllMutationBatchesAffectingDocumentKey(e,t){const r=new ye(t,0),s=new ye(t,Number.POSITIVE_INFINITY),i=[];return this.i_.forEachInRange([r,s],a=>{const c=this.s_(a.r_);i.push(c)}),b.resolve(i)}getAllMutationBatchesAffectingDocumentKeys(e,t){let r=new de(K);return t.forEach(s=>{const i=new ye(s,0),a=new ye(s,Number.POSITIVE_INFINITY);this.i_.forEachInRange([i,a],c=>{r=r.add(c.r_)})}),b.resolve(this.o_(r))}getAllMutationBatchesAffectingQuery(e,t){const r=t.path,s=r.length+1;let i=r;B.isDocumentKey(i)||(i=i.child(""));const a=new ye(new B(i),0);let c=new de(K);return this.i_.forEachWhile(l=>{const h=l.key.path;return!!r.isPrefixOf(h)&&(h.length===s&&(c=c.add(l.r_)),!0)},a),b.resolve(this.o_(c))}o_(e){const t=[];return e.forEach(r=>{const s=this.s_(r);s!==null&&t.push(s)}),t}removeMutationBatch(e,t){F(this.a_(t.batchId,"removed")===0,55003),this.mutationQueue.shift();let r=this.i_;return b.forEach(t.mutations,s=>{const i=new ye(s.key,t.batchId);return r=r.delete(i),this.referenceDelegate.markPotentiallyOrphaned(e,s.key)}).next(()=>{this.i_=r})}Hr(e){}containsKey(e,t){const r=new ye(t,0),s=this.i_.firstAfterOrEqual(r);return b.resolve(t.isEqual(s&&s.key))}performConsistencyCheck(e){return this.mutationQueue.length,b.resolve()}a_(e,t){return this.__(e)}__(e){return this.mutationQueue.length===0?0:e-this.mutationQueue[0].batchId}s_(e){const t=this.__(e);return t<0||t>=this.mutationQueue.length?null:this.mutationQueue[t]}}/**
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
 */class VE{constructor(e){this.u_=e,this.docs=function(){return new ne(B.comparator)}(),this.size=0}setIndexManager(e){this.indexManager=e}addEntry(e,t){const r=t.key,s=this.docs.get(r),i=s?s.size:0,a=this.u_(t);return this.docs=this.docs.insert(r,{document:t.mutableCopy(),size:a}),this.size+=a-i,this.indexManager.addToCollectionParentIndex(e,r.path.popLast())}removeEntry(e){const t=this.docs.get(e);t&&(this.docs=this.docs.remove(e),this.size-=t.size)}getEntry(e,t){const r=this.docs.get(t);return b.resolve(r?r.document.mutableCopy():Se.newInvalidDocument(t))}getEntries(e,t){let r=Le();return t.forEach(s=>{const i=this.docs.get(s);r=r.insert(s,i?i.document.mutableCopy():Se.newInvalidDocument(s))}),b.resolve(r)}getAllEntries(e){let t=Le();return this.docs.forEach((r,s)=>{t=t.insert(r,s.document)}),b.resolve(t)}getDocumentsMatchingQuery(e,t,r,s){let i,a;ge(t)?(i=X.fromString(Ji(t)),a=f=>eo(t,f)):(i=t.path,a=f=>qi(t,f));let c=Le();const l=new B(i.child("__id-9223372036854775808__")),h=this.docs.getIteratorFrom(l);for(;h.hasNext();){const{key:f,value:{document:m}}=h.getNext();if(!i.isPrefixOf(f.path))break;f.path.length>i.length+1||Tg(wg(m),r)<=0||(s.has(m.key)||a(m))&&(c=c.insert(m.key,m.mutableCopy()))}return b.resolve(c)}getAllFromCollectionGroup(e,t,r,s){q(9500)}c_(e,t){return b.forEach(this.docs,r=>t(r))}newChangeBuffer(e){return new CE(this)}getSize(e){return b.resolve(this.size)}}class CE extends TE{constructor(e){super(),this.$s=e}applyChanges(e){const t=[];return this.changes.forEach((r,s)=>{s.isValidDocument()?t.push(this.$s.addEntry(e,s)):this.$s.removeEntry(r)}),b.waitFor(t)}getFromCache(e,t){return this.$s.getEntry(e,t)}getAllFromCache(e,t){return this.$s.getEntries(e,t)}}/**
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
 */class bE{constructor(e){this.persistence=e,this.l_=new Cn(t=>Nd(t),kd),this.lastRemoteSnapshotVersion=j.min(),this.highestTargetId=0,this.E_=0,this.h_=new Wa,this.targetCount=0,this.T_=rn.ws()}forEachTarget(e,t){return this.l_.forEach((r,s)=>t(s)),b.resolve()}getLastRemoteSnapshotVersion(e){return b.resolve(this.lastRemoteSnapshotVersion)}getHighestSequenceNumber(e){return b.resolve(this.E_)}allocateTargetId(e){return this.highestTargetId=this.T_.next(),b.resolve(this.highestTargetId)}setTargetsMetadata(e,t,r){return r&&(this.lastRemoteSnapshotVersion=r),t>this.E_&&(this.E_=t),b.resolve()}Ds(e){this.l_.set(e.target,e);const t=e.targetId;t>this.highestTargetId&&(this.T_=new rn(t),this.highestTargetId=t),e.sequenceNumber>this.E_&&(this.E_=e.sequenceNumber)}addTargetData(e,t){return this.Ds(t),this.targetCount+=1,b.resolve()}updateTargetData(e,t){return this.Ds(t),b.resolve()}removeTargetData(e,t){return this.l_.delete(t.target),this.h_.e_(t.targetId),this.targetCount-=1,b.resolve()}removeTargets(e,t,r){let s=0;const i=[];return this.l_.forEach((a,c)=>{c.sequenceNumber<=t&&r.get(c.targetId)===null&&(this.l_.delete(a),i.push(this.removeMatchingKeysForTargetId(e,c.targetId)),s++)}),b.waitFor(i).next(()=>s)}getTargetCount(e){return b.resolve(this.targetCount)}getTargetData(e,t){const r=this.l_.get(t)||null;return b.resolve(r)}addMatchingKeys(e,t,r){return this.h_.Ys(t,r),b.resolve()}removeMatchingKeys(e,t,r){this.h_.Xs(t,r);const s=this.persistence.referenceDelegate,i=[];return s&&t.forEach(a=>{i.push(s.markPotentiallyOrphaned(e,a))}),b.waitFor(i)}removeMatchingKeysForTargetId(e,t){return this.h_.e_(t),b.resolve()}getMatchingKeysForTargetId(e,t){const r=this.h_.n_(t);return b.resolve(r)}containsKey(e,t){return b.resolve(this.h_.containsKey(t))}}/**
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
 */class Od{constructor(e,t){this.P_={},this.overlays={},this.I_=new zi(0),this.R_=!1,this.R_=!0,this.A_=new PE,this.referenceDelegate=e(this),this.V_=new bE(this),this.indexManager=new _E,this.remoteDocumentCache=function(s){return new VE(s)}(r=>this.referenceDelegate.d_(r)),this.serializer=new mE(t),this.f_=new AE(this.serializer)}start(){return Promise.resolve()}shutdown(){return this.R_=!1,Promise.resolve()}get started(){return this.R_}setDatabaseDeletedListener(){}setNetworkEnabled(){}getIndexManager(e){return this.indexManager}getDocumentOverlayCache(e){let t=this.overlays[e.toKey()];return t||(t=new RE,this.overlays[e.toKey()]=t),t}getMutationQueue(e,t){let r=this.P_[e.toKey()];return r||(r=new SE(t,this.referenceDelegate),this.P_[e.toKey()]=r),r}getGlobalsCache(){return this.A_}getTargetCache(){return this.V_}getRemoteDocumentCache(){return this.remoteDocumentCache}getBundleCache(){return this.f_}runTransaction(e,t,r){O("MemoryPersistence","Starting transaction:",e);const s=new NE(this.I_.next());return this.referenceDelegate.m_(),r(s).next(i=>this.referenceDelegate.p_(s).next(()=>i)).toPromise().then(i=>(s.raiseOnCommittedEvent(),i))}g_(e,t){return b.or(Object.values(this.P_).map(r=>()=>r.containsKey(e,t)))}}class NE extends I_{constructor(e){super(),this.currentSequenceNumber=e}}class za{constructor(e){this.persistence=e,this.y_=new Wa,this.w_=null}static b_(e){return new za(e)}get S_(){if(this.w_)return this.w_;throw q(60996)}addReference(e,t,r){return this.y_.addReference(r,t),this.S_.delete(r.toString()),b.resolve()}removeReference(e,t,r){return this.y_.removeReference(r,t),this.S_.add(r.toString()),b.resolve()}markPotentiallyOrphaned(e,t){return this.S_.add(t.toString()),b.resolve()}removeTarget(e,t){this.y_.e_(t.targetId).forEach(s=>this.S_.add(s.toString()));const r=this.persistence.getTargetCache();return r.getMatchingKeysForTargetId(e,t.targetId).next(s=>{s.forEach(i=>this.S_.add(i.toString()))}).next(()=>r.removeTargetData(e,t))}m_(){this.w_=new Set}p_(e){const t=this.persistence.getRemoteDocumentCache().newChangeBuffer();return b.forEach(this.S_,r=>{const s=B.fromPath(r);return this.v_(e,s).next(i=>{i||t.removeEntry(s,j.min())})}).next(()=>(this.w_=null,t.apply(e)))}updateLimboDocument(e,t){return this.v_(e,t).next(r=>{r?this.S_.delete(t.toString()):this.S_.add(t.toString())})}d_(e){return 0}v_(e,t){return b.or([()=>b.resolve(this.y_.containsKey(t)),()=>this.persistence.getTargetCache().containsKey(e,t),()=>this.persistence.g_(e,t)])}}class vi{constructor(e,t){this.persistence=e,this.D_=new Cn(r=>dE(r.path),(r,s)=>r.isEqual(s)),this.garbageCollector=V_(this,t)}static b_(e,t){return new vi(e,t)}m_(){}p_(e){return b.resolve()}forEachTarget(e,t){return this.persistence.getTargetCache().forEachTarget(e,t)}ir(e){const t=this.Cs(e);return this.persistence.getTargetCache().getTargetCount(e).next(r=>t.next(s=>r+s))}Cs(e){let t=0;return this.sr(e,r=>{t++}).next(()=>t)}sr(e,t){return b.forEach(this.D_,(r,s)=>this.Os(e,r,s).next(i=>i?b.resolve():t(s)))}removeTargets(e,t,r){return this.persistence.getTargetCache().removeTargets(e,t,r)}removeOrphanedDocuments(e,t){let r=0;const s=this.persistence.getRemoteDocumentCache(),i=s.newChangeBuffer();return s.c_(e,a=>this.Os(e,a,t).next(c=>{c||(r++,i.removeEntry(a,j.min()))})).next(()=>i.apply(e)).next(()=>r)}markPotentiallyOrphaned(e,t){return this.D_.set(t,e.currentSequenceNumber),b.resolve()}removeTarget(e,t){const r=t.withSequenceNumber(e.currentSequenceNumber);return this.persistence.getTargetCache().updateTargetData(e,r)}addReference(e,t,r){return this.D_.set(r,e.currentSequenceNumber),b.resolve()}removeReference(e,t,r){return this.D_.set(r,e.currentSequenceNumber),b.resolve()}updateLimboDocument(e,t){return this.D_.set(t,e.currentSequenceNumber),b.resolve()}d_(e){let t=e.key.toString().length;return e.isFoundDocument()&&(t+=ei(e.data.value)),t}Os(e,t,r){return b.or([()=>this.persistence.g_(e,t),()=>this.persistence.getTargetCache().containsKey(e,t),()=>{const s=this.D_.get(t);return b.resolve(s!==void 0&&s>r)}])}getCacheSize(e){return this.persistence.getRemoteDocumentCache().getSize(e)}}/**
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
 */class Ha{constructor(e,t,r,s){this.targetId=e,this.fromCache=t,this.Vo=r,this.fo=s}static mo(e,t){let r=G(),s=G();for(const i of t.docChanges)switch(i.type){case 0:r=r.add(i.doc.key);break;case 1:s=s.add(i.doc.key)}return new Ha(e,t.fromCache,r,s)}}/**
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
 */function kE(n,e){return B.comparator(n.key,e.key)}/**
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
 */class DE{constructor(){this._documentReadCount=0}get documentReadCount(){return this._documentReadCount}incrementDocumentReadCount(e){this._documentReadCount+=e}}/**
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
 */class xE{constructor(){this.po=!1,this.yo=!1,this.wo=100,this.bo=function(){return xp()?8:v_(Ve())>0?6:4}()}initialize(e,t){this.So=e,this.indexManager=t,this.po=!0}getDocumentsMatchingQuery(e,t,r,s){const i={result:null};return this.vo(e,t).next(a=>{i.result=a}).next(()=>{if(!i.result)return this.Do(e,t,s,r).next(a=>{i.result=a})}).next(()=>{if(i.result)return;const a=new DE;return this.xo(e,t,a).next(c=>{if(i.result=c,this.yo)return this.Co(e,t,a,c.size)})}).next(()=>i.result)}Co(e,t,r,s){return ge(t)?b.resolve():r.documentReadCount<this.wo?(Ln()<=Q.DEBUG&&O("QueryEngine","SDK will not create cache indexes for query:",$r(t),"since it only creates cache indexes for collection contains","more than or equal to",this.wo,"documents"),b.resolve()):(Ln()<=Q.DEBUG&&O("QueryEngine","Query:",$r(t),"scans",r.documentReadCount,"local documents and returns",s,"documents as results."),r.documentReadCount>this.bo*s?(Ln()<=Q.DEBUG&&O("QueryEngine","The SDK decides to create cache indexes for query:",$r(t),"as using cache indexes may help improve performance."),this.indexManager.createTargetIndexes(e,ht(t))):b.resolve())}vo(e,t){if(ge(t))return b.resolve(null);let r=t;if(Ku(r))return b.resolve(null);let s=ht(r);return this.indexManager.getIndexType(e,s).next(i=>i===0?null:(r.limit!==null&&i===1&&(r=Ei(r,null,"F"),s=ht(r)),this.indexManager.getDocumentsMatchingTarget(e,s).next(a=>{const c=G(...a);return this.So.getDocuments(e,c).next(l=>this.indexManager.getMinOffset(e,s).next(h=>{const f=this.Fo(r,l);return this.Oo(r,f,c,h.readTime)?this.vo(e,Ei(r,null,"F")):this.Mo(e,f,r,h)}))})))}Do(e,t,r,s){return(ge(t)?function(a){for(const c of a.stages){if(c instanceof Sn||c instanceof ll)return!1;if(c instanceof Yi){if(c.condition instanceof yd&&c.condition._expr.name==="exists"&&c.condition._expr.params[0]instanceof ar&&c.condition._expr.params[0].fieldName===ut)continue;return!1}}return!0}(t):Ku(t))||s.isEqual(j.min())?b.resolve(null):this.So.getDocuments(e,r).next(i=>{const a=this.Fo(t,i);return this.Oo(t,a,r,s)?b.resolve(null):(Ln()<=Q.DEBUG&&O("QueryEngine","Re-using previous result from %s to execute query: %s",s.toString(),hl(t)),this.Mo(e,a,t,Eg(s,cs)).next(c=>c))})}Fo(e,t){let r,s;return ge(e)?(r=new de(kE),s=i=>eo(e,i)):(r=new de(Aa(e)),s=i=>qi(e,i)),t.forEach((i,a)=>{s(a)&&(r=r.add(a))}),r}Oo(e,t,r,s){if(ge(e))return function(c){return c.stages.some(l=>l instanceof Sn||l instanceof ll)}(e);if(e.limit===null)return!1;if(r.size!==t.size)return!0;const i=e.limitType==="F"?t.last():t.first();return!!i&&(i.hasPendingWrites||i.version.compareTo(s)>0)}xo(e,t,r){return Ln()<=Q.DEBUG&&O("QueryEngine","Using full collection scan to execute query:",hl(t)),this.So.getDocumentsMatchingQuery(e,t,Xt.min(),r)}Mo(e,t,r,s){return this.So.getDocumentsMatchingQuery(e,r,s).next(i=>(t.forEach(a=>{i=i.insert(a.key,a)}),i))}}/**
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
 */const Ga="LocalStore",OE=3e8;class LE{constructor(e,t,r,s){this.persistence=e,this.No=t,this.serializer=s,this.Lo=new ne(K),this.Bo=new Cn(i=>Nd(i),kd),this.Uo=new Map,this.ko=e.getRemoteDocumentCache(),this.V_=e.getTargetCache(),this.f_=e.getBundleCache(),this.qo(r)}qo(e){this.documentOverlayCache=this.persistence.getDocumentOverlayCache(e),this.indexManager=this.persistence.getIndexManager(e),this.mutationQueue=this.persistence.getMutationQueue(e,this.indexManager),this.localDocuments=new vE(this.ko,this.mutationQueue,this.documentOverlayCache,this.indexManager),this.ko.setIndexManager(this.indexManager),this.No.initialize(this.localDocuments,this.indexManager)}collectGarbage(e){return this.persistence.runTransaction("Collect garbage","readwrite-primary",t=>e.collect(t,this.Lo))}}function ME(n,e,t,r){return new LE(n,e,t,r)}async function Ld(n,e){const t=W(n);return await t.persistence.runTransaction("Handle user change","readonly",r=>{let s;return t.mutationQueue.getAllMutationBatches(r).next(i=>(s=i,t.qo(e),t.mutationQueue.getAllMutationBatches(r))).next(i=>{const a=[],c=[];let l=G();for(const h of s){a.push(h.batchId);for(const f of h.mutations)l=l.add(f.key)}for(const h of i){c.push(h.batchId);for(const f of h.mutations)l=l.add(f.key)}return t.localDocuments.getDocuments(r,l).next(h=>({$o:h,removedBatchIds:a,addedBatchIds:c}))})})}function UE(n,e){const t=W(n);return t.persistence.runTransaction("Acknowledge batch","readwrite-primary",r=>{const s=e.batch.keys(),i=t.ko.newChangeBuffer({trackRemovals:!0});return function(c,l,h,f){const m=h.batch,E=m.keys();let V=b.resolve();return E.forEach(N=>{V=V.next(()=>f.getEntry(l,N)).next(U=>{const L=h.docVersions.get(N);F(L!==null,48541),U.version.compareTo(L)<0&&(m.applyToRemoteDocument(U,h),U.isValidDocument()&&(U.setReadTime(h.commitVersion),f.addEntry(U)))})}),V.next(()=>c.mutationQueue.removeMutationBatch(l,m))}(t,r,e,i).next(()=>i.apply(r)).next(()=>t.mutationQueue.performConsistencyCheck(r)).next(()=>t.documentOverlayCache.removeOverlaysForBatchId(r,s,e.batch.batchId)).next(()=>t.localDocuments.recalculateAndSaveOverlaysForDocumentKeys(r,function(c){let l=G();for(let h=0;h<c.mutationResults.length;++h)c.mutationResults[h].transformResults.length>0&&(l=l.add(c.batch.mutations[h].key));return l}(e))).next(()=>t.localDocuments.getDocuments(r,s))})}function Md(n){const e=W(n);return e.persistence.runTransaction("Get last remote snapshot version","readonly",t=>e.V_.getLastRemoteSnapshotVersion(t))}function FE(n,e){const t=W(n),r=e.snapshotVersion;let s=t.Lo;return t.persistence.runTransaction("Apply remote event","readwrite-primary",i=>{const a=t.ko.newChangeBuffer({trackRemovals:!0});s=t.Lo;const c=[];e.targetChanges.forEach((f,m)=>{const E=s.get(m);if(!E)return;c.push(t.V_.removeMatchingKeys(i,f.removedDocuments,m).next(()=>t.V_.addMatchingKeys(i,f.addedDocuments,m)));let V=E.withSequenceNumber(i.currentSequenceNumber);e.targetMismatches.get(m)!==null?V=V.withResumeToken(fe.EMPTY_BYTE_STRING,j.min()).withLastLimboFreeSnapshotVersion(j.min()):f.resumeToken.approximateByteSize()>0&&(V=V.withResumeToken(f.resumeToken,r)),s=s.insert(m,V),function(U,L,H){return U.resumeToken.approximateByteSize()===0||L.snapshotVersion.toMicroseconds()-U.snapshotVersion.toMicroseconds()>=OE?!0:H.addedDocuments.size+H.modifiedDocuments.size+H.removedDocuments.size>0}(E,V,f)&&c.push(t.V_.updateTargetData(i,V))});let l=Le(),h=G();if(e.documentUpdates.forEach(f=>{e.resolvedLimboDocuments.has(f)&&c.push(t.persistence.referenceDelegate.updateLimboDocument(i,f))}),c.push(BE(i,a,e.documentUpdates).next(f=>{l=f.Ko,h=f.Qo})),!r.isEqual(j.min())){const f=t.V_.getLastRemoteSnapshotVersion(i).next(m=>t.V_.setTargetsMetadata(i,i.currentSequenceNumber,r));c.push(f)}return b.waitFor(c).next(()=>a.apply(i)).next(()=>t.localDocuments.getLocalViewOfDocuments(i,l,h)).next(()=>l)}).then(i=>(t.Lo=s,i))}function BE(n,e,t){let r=G(),s=G();return t.forEach(i=>r=r.add(i)),e.getEntries(n,r).next(i=>{let a=Le();return t.forEach((c,l)=>{const h=i.get(c);l.isFoundDocument()!==h.isFoundDocument()&&(s=s.add(c)),l.isNoDocument()&&l.version.isEqual(j.min())?(e.removeEntry(c,l.readTime),a=a.insert(c,l)):!h.isValidDocument()||l.version.compareTo(h.version)>0||l.version.compareTo(h.version)===0&&h.hasPendingWrites?(e.addEntry(l),a=a.insert(c,l)):O(Ga,"Ignoring outdated watch update for ",c,". Current version:",h.version," Watch version:",l.version)}),{Ko:a,Qo:s}})}function qE(n,e){const t=W(n);return t.persistence.runTransaction("Get next mutation batch","readonly",r=>(e===void 0&&(e=Ea),t.mutationQueue.getNextMutationBatchAfterBatchId(r,e)))}function $E(n,e){const t=W(n);return t.persistence.runTransaction("Allocate target","readwrite",r=>{let s;return t.V_.getTargetData(r,e).next(i=>i?(s=i,b.resolve(s)):t.V_.allocateTargetId(r).next(a=>(s=new wt(e,a,"TargetPurposeListen",r.currentSequenceNumber),t.V_.addTargetData(r,s).next(()=>s))))}).then(r=>{const s=t.Lo.get(r.targetId);return(s===null||r.snapshotVersion.compareTo(s.snapshotVersion)>0)&&(t.Lo=t.Lo.insert(r.targetId,r),t.Bo.set(e,r.targetId)),r})}async function aa(n,e,t){const r=W(n),s=r.Lo.get(e),i=t?"readwrite":"readwrite-primary";try{t||await r.persistence.runTransaction("Release target",i,a=>r.persistence.referenceDelegate.removeTarget(a,s))}catch(a){if(!or(a))throw a;O(Ga,`Failed to update sequence numbers for target ${e}: ${a}`)}r.Lo=r.Lo.remove(e),r.Bo.delete(s.target)}function fl(n,e,t){const r=W(n);let s=j.min(),i=G();return r.persistence.runTransaction("Execute query","readwrite",a=>function(l,h,f){const m=W(l),E=m.Bo.get(f);return E!==void 0?b.resolve(m.Lo.get(E)):m.V_.getTargetData(h,f)}(r,a,ge(e)?e:ht(e)).next(c=>{if(c)return s=c.lastLimboFreeSnapshotVersion,r.V_.getMatchingKeysForTargetId(a,c.targetId).next(l=>{i=l})}).next(()=>r.No.getDocumentsMatchingQuery(a,e,t?s:j.min(),t?i:G())).next(c=>(jE(r,c),{documents:c,Wo:i})))}function jE(n,e){e.forEach((t,r)=>{const s=r.key.getCollectionGroup(),i=n.Uo.get(s)||j.min();r.readTime.compareTo(i)>0&&n.Uo.set(s,r.readTime)})}/**
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
 */class WE{constructor(e,t){this.asyncQueue=e,this.onlineStateHandler=t,this.state="Unknown",this.Yo=0,this.Zo=null,this.Xo=!0}ea(){this.Yo===0&&(this.ta("Unknown"),this.Zo=this.asyncQueue.enqueueAfterDelay("online_state_timeout",1e4,()=>(this.Zo=null,this.na("Backend didn't respond within 10 seconds."),this.ta("Offline"),Promise.resolve())))}ra(e){this.state==="Online"?this.ta("Unknown"):(this.Yo++,this.Yo>=1&&(this.ia(),this.na(`Connection failed 1 times. Most recent error: ${e.toString()}`),this.ta("Offline")))}set(e){this.ia(),this.Yo=0,e==="Online"&&(this.Xo=!1),this.ta(e)}ta(e){e!==this.state&&(this.state=e,this.onlineStateHandler(e))}na(e){const t=`Could not reach Cloud Firestore backend. ${e}
This typically indicates that your device does not have a healthy Internet connection at the moment. The client will operate in offline mode until it is able to successfully connect to the backend.`;this.Xo?(St(t),this.Xo=!1):O("OnlineStateTracker",t)}ia(){this.Zo!==null&&(this.Zo.cancel(),this.Zo=null)}}/**
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
 */const mt="RemoteStore";class zE{constructor(e,t,r,s,i){this.localStore=e,this.datastore=t,this.asyncQueue=r,this.remoteSyncer={},this.sa=[],this._a=new Map,this.oa=new Map,this.aa=new Map,this.ua=new rn(1e3),this.ca=new rn(1001),this.la=new Set,this.Ea=[],this.ha=i,this.ha.Qe(a=>{r.enqueueAndForget(async()=>{Nn(this)&&(O(mt,"Restarting streams for network reachability change."),await async function(l){const h=W(l);h.la.add(4),await Rs(h),h.Ta.set("Unknown"),h.la.delete(4),await to(h)}(this))})}),this.Ta=new WE(r,s)}}async function to(n){if(Nn(n))for(const e of n.Ea)await e(!0)}async function Rs(n){for(const e of n.Ea)await e(!1)}function ca(n,e){return n.oa.get(e)||void 0}function Ud(n,e){const t=W(n),r=ca(t,e.targetId);if(r!==void 0&&t._a.has(r))return;const s=function(c,l){const h=ca(c,l);h!==void 0&&c.aa.delete(h);const f=function(E,V){return V%2!=0?E.ca.next():E.ua.next()}(c,l);return c.oa.set(l,f),c.aa.set(f,l),f}(t,e.targetId);O(mt,"remoteStoreListen mapping SDK target ID to remote",e.targetId,s);const i=new wt(e.target,s,e.purpose,e.sequenceNumber,e.snapshotVersion,e.lastLimboFreeSnapshotVersion,e.resumeToken);t._a.set(s,i),Ja(t)?Ya(t):hr(t).Yt()&&Qa(t,i)}function Ka(n,e){const t=W(n),r=hr(t),s=ca(t,e);O(mt,"remoteStoreUnlisten removing mapping of SDK target ID to remote",e,s),t._a.delete(s),t.oa.delete(e),t.aa.delete(s),r.Yt()&&Fd(t,s),t._a.size===0&&(r.Yt()?r.en():Nn(t)&&t.Ta.set("Unknown"))}function Qa(n,e){if(n.Pa.J(e.targetId),e.resumeToken.approximateByteSize()>0||e.snapshotVersion.compareTo(j.min())>0){const t=n.aa.get(e.targetId);if(t===void 0)return void O(mt,"SDK target ID not found for remote ID: "+e.targetId);const r=n.remoteSyncer.getRemoteKeysForTarget(t).size;e=e.withExpectedCount(r)}hr(n).Pn(e)}function Fd(n,e){n.Pa.J(e),hr(n).In(e)}function Ya(n){n.Pa=new Ug({getRemoteKeysForTarget:e=>{const t=n.aa.get(e);return t!==void 0?n.remoteSyncer.getRemoteKeysForTarget(t):G()},ye:e=>n._a.get(e)||null,Ve:()=>n.datastore.serializer.databaseId}),hr(n).start(),n.Ta.ea()}function Ja(n){return Nn(n)&&!hr(n).Jt()&&n._a.size>0}function Nn(n){return W(n).la.size===0}function Bd(n){n.Pa=void 0}async function HE(n){n.Ta.set("Online")}async function GE(n){n._a.forEach((e,t)=>{Qa(n,e)})}async function KE(n,e){Bd(n),Ja(n)?(n.Ta.ra(e),Ya(n)):n.Ta.set("Unknown")}async function QE(n,e,t){if(n.Ta.set("Online"),e instanceof Gh&&e.state===2&&e.cause)try{await async function(s,i){const a=i.cause;for(const c of i.targetIds){if(s._a.has(c)){const l=s.aa.get(c);l!==void 0&&(await s.remoteSyncer.rejectListen(l,a),s.oa.delete(l),s.aa.delete(c)),s._a.delete(c)}s.Pa.removeTarget(c)}}(n,e)}catch(r){O(mt,"Failed to remove targets %s: %s ",e.targetIds.join(","),r),await Ai(n,r)}else if(e instanceof ni?n.Pa._e(e):e instanceof Hh?n.Pa.he(e):n.Pa.ue(e),!t.isEqual(j.min()))try{const r=await Md(n.localStore);t.compareTo(r)>=0&&await function(i,a){const c=i.Pa.fe(a);c.targetChanges.forEach((h,f)=>{if(h.resumeToken.approximateByteSize()>0){const m=i._a.get(f);m&&i._a.set(f,m.withResumeToken(h.resumeToken,a))}}),c.targetMismatches.forEach((h,f)=>{const m=i._a.get(h);if(!m)return;i._a.set(h,m.withResumeToken(fe.EMPTY_BYTE_STRING,m.snapshotVersion)),Fd(i,h);const E=new wt(m.target,h,f,m.sequenceNumber);Qa(i,E)});const l=function(f,m){const E=new Map;m.targetChanges.forEach((N,U)=>{const L=f.aa.get(U);L!==void 0&&E.set(L,N)});let V=new ne(K);return m.targetMismatches.forEach((N,U)=>{const L=f.aa.get(N);L!==void 0&&(V=V.insert(L,U))}),new Is(m.snapshotVersion,E,V,m.documentUpdates,m.augmentedDocumentUpdates,m.resolvedLimboDocuments)}(i,c);return i.remoteSyncer.applyRemoteEvent(l)}(n,t)}catch(r){O(mt,"Failed to raise snapshot:",r),await Ai(n,r)}}async function Ai(n,e,t){if(!or(e))throw e;n.la.add(1),await Rs(n),n.Ta.set("Offline"),t||(t=()=>Md(n.localStore)),n.asyncQueue.enqueueRetryable(async()=>{O(mt,"Retrying IndexedDB access"),await t(),n.la.delete(1),await to(n)})}function qd(n,e){return e().catch(t=>Ai(n,t,e))}async function no(n){const e=W(n),t=sn(e);let r=e.sa.length>0?e.sa[e.sa.length-1].batchId:Ea;for(;YE(e);)try{const s=await qE(e.localStore,r);if(s===null){e.sa.length===0&&t.en();break}r=s.batchId,JE(e,s)}catch(s){await Ai(e,s)}$d(e)&&jd(e)}function YE(n){return Nn(n)&&n.sa.length<10}function JE(n,e){n.sa.push(e);const t=sn(n);t.Yt()&&t.Rn&&t.An(e.mutations)}function $d(n){return Nn(n)&&!sn(n).Jt()&&n.sa.length>0}function jd(n){sn(n).start()}async function XE(n){sn(n).fn()}async function ZE(n){const e=sn(n);for(const t of n.sa)e.An(t.mutations)}async function ew(n,e,t){const r=n.sa.shift(),s=ja.from(r,e,t);await qd(n,()=>n.remoteSyncer.applySuccessfulWrite(s)),await no(n)}async function tw(n,e){e&&sn(n).Rn&&await async function(r,s){if(function(a){return bg(a)&&a!==C.ABORTED}(s.code)){const i=r.sa.shift();sn(r).Xt(),await qd(r,()=>r.remoteSyncer.rejectFailedWrite(i.batchId,s)),await no(r)}}(n,e),$d(n)&&jd(n)}async function pl(n,e){const t=W(n);t.asyncQueue.verifyOperationInProgress(),O(mt,"RemoteStore received new credentials");const r=Nn(t);t.la.add(3),await Rs(t),r&&t.Ta.set("Unknown"),await t.remoteSyncer.handleCredentialChange(e),t.la.delete(3),await to(t)}async function nw(n,e){const t=W(n);e?(t.la.delete(2),await to(t)):e||(t.la.add(2),await Rs(t),t.Ta.set("Unknown"))}function hr(n){return n.Ia||(n.Ia=function(t,r,s){const i=W(t);return i.pn(),new p_(r,i.connection,i.authCredentials,i.appCheckCredentials,i.serializer,s)}(n.datastore,n.asyncQueue,{ct:HE.bind(null,n),Et:GE.bind(null,n),Tt:KE.bind(null,n),Tn:QE.bind(null,n)}),n.Ea.push(async e=>{e?(n.Ia.Xt(),Ja(n)?Ya(n):n.Ta.set("Unknown")):(await n.Ia.stop(),Bd(n))})),n.Ia}function sn(n){return n.Ra||(n.Ra=function(t,r,s){const i=W(t);return i.pn(),new m_(r,i.connection,i.authCredentials,i.appCheckCredentials,i.serializer,s)}(n.datastore,n.asyncQueue,{ct:()=>Promise.resolve(),Et:XE.bind(null,n),Tt:tw.bind(null,n),Vn:ZE.bind(null,n),dn:ew.bind(null,n)}),n.Ea.push(async e=>{e?(n.Ra.Xt(),await no(n)):(await n.Ra.stop(),n.sa.length>0&&(O(mt,`Stopping write stream with ${n.sa.length} pending writes`),n.sa=[]))})),n.Ra}/**
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
 */class Xa{constructor(e){this.observer=e,this.muted=!1}next(e){this.muted||this.observer.next&&this.Aa(this.observer.next,e)}error(e){this.muted||(this.observer.error?this.Aa(this.observer.error,e):St("Uncaught Error in snapshot listener:",e.toString()))}Va(){this.muted=!0}Aa(e,t){setTimeout(()=>{this.muted||e(t)},0)}}/**
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
 */class Za{constructor(e,t,r,s,i){this.asyncQueue=e,this.timerId=t,this.targetTimeMs=r,this.op=s,this.removalCallback=i,this.deferred=new vt,this.then=this.deferred.promise.then.bind(this.deferred.promise),this.deferred.promise.catch(a=>{})}get promise(){return this.deferred.promise}static createAndSchedule(e,t,r,s,i){const a=Date.now()+r,c=new Za(e,t,a,s,i);return c.start(r),c}start(e){this.timerHandle=setTimeout(()=>this.handleDelayElapsed(),e)}skipDelay(){return this.handleDelayElapsed()}cancel(e){this.timerHandle!==null&&(this.clearTimeout(),this.deferred.reject(new D(C.CANCELLED,"Operation cancelled"+(e?": "+e:""))))}handleDelayElapsed(){this.asyncQueue.enqueueAndForget(()=>this.timerHandle!==null?(this.clearTimeout(),this.op().then(e=>this.deferred.resolve(e))):Promise.resolve())}clearTimeout(){this.timerHandle!==null&&(this.removalCallback(this),clearTimeout(this.timerHandle),this.timerHandle=null)}}function ec(n,e){if(St("AsyncQueue",`${e}: ${n}`),or(n))return new D(C.UNAVAILABLE,`${e}: ${n}`);throw n}class ml{constructor(){this.activeTargetIds=Og()}Ba(e){this.activeTargetIds=this.activeTargetIds.add(e)}Ua(e){this.activeTargetIds=this.activeTargetIds.delete(e)}La(){const e={activeTargetIds:this.activeTargetIds.toArray(),updateTimeMs:Date.now()};return JSON.stringify(e)}}class rw{constructor(){this.fu=new ml,this.mu={},this.onlineStateHandler=null,this.sequenceNumberHandler=null}addPendingMutation(e){}updateMutationState(e,t,r){}addLocalQueryTarget(e,t=!0){return t&&this.fu.Ba(e),this.mu[e]||"not-current"}updateQueryState(e,t,r){this.mu[e]=t}removeLocalQueryTarget(e){this.fu.Ua(e)}isLocalQueryTarget(e){return this.fu.activeTargetIds.has(e)}clearQueryState(e){delete this.mu[e]}getAllActiveQueryTargets(){return this.fu.activeTargetIds}isActiveQueryTarget(e){return this.fu.activeTargetIds.has(e)}start(){return this.fu=new ml,Promise.resolve()}handleUserChange(e,t,r){}setOnlineState(e){}shutdown(){}writeSequenceNumber(e){}notifyBundleLoaded(e){}}function Bo(){return typeof document<"u"?document:null}/**
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
 */class wn{static emptySet(e){return new wn(e.comparator)}constructor(e){this.comparator=e?(t,r)=>e(t,r)||B.comparator(t.key,r.key):(t,r)=>B.comparator(t.key,r.key),this.keyedMap=Un(),this.sortedSet=new ne(this.comparator)}has(e){return this.keyedMap.get(e)!=null}get(e){return this.keyedMap.get(e)}first(){return this.sortedSet.minKey()}last(){return this.sortedSet.maxKey()}isEmpty(){return this.sortedSet.isEmpty()}indexOf(e){const t=this.keyedMap.get(e);return t?this.sortedSet.indexOf(t):-1}get size(){return this.sortedSet.size}forEach(e){this.sortedSet.inorderTraversal((t,r)=>(e(t),!1))}add(e){const t=this.delete(e.key);return t.copy(t.keyedMap.insert(e.key,e),t.sortedSet.insert(e,null))}delete(e){const t=this.get(e);return t?this.copy(this.keyedMap.remove(e),this.sortedSet.remove(t)):this}isEqual(e){if(!(e instanceof wn)||this.size!==e.size)return!1;const t=this.sortedSet.getIterator(),r=e.sortedSet.getIterator();for(;t.hasNext();){const s=t.getNext().key,i=r.getNext().key;if(!s.isEqual(i))return!1}return!0}toString(){const e=[];return this.forEach(t=>{e.push(t.toString())}),e.length===0?"DocumentSet ()":`DocumentSet (
  `+e.join(`  
`)+`
)`}copy(e,t){const r=new wn;return r.comparator=this.comparator,r.keyedMap=e,r.sortedSet=t,r}}/**
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
 */class gl{constructor(){this.pu=new ne(B.comparator)}track(e){const t=e.doc.key,r=this.pu.get(t);r?e.type!==0&&r.type===3?this.pu=this.pu.insert(t,e):e.type===3&&r.type!==1?this.pu=this.pu.insert(t,{type:r.type,doc:e.doc}):e.type===2&&r.type===2?this.pu=this.pu.insert(t,{type:2,doc:e.doc}):e.type===2&&r.type===0?this.pu=this.pu.insert(t,{type:0,doc:e.doc}):e.type===1&&r.type===0?this.pu=this.pu.remove(t):e.type===1&&r.type===2?this.pu=this.pu.insert(t,{type:1,doc:r.doc}):e.type===0&&r.type===1?this.pu=this.pu.insert(t,{type:2,doc:e.doc}):q(63341,{we:e,gu:r}):this.pu=this.pu.insert(t,e)}yu(){const e=[];return this.pu.inorderTraversal((t,r)=>{e.push(r)}),e}}class Xn{constructor(e,t,r,s,i,a,c,l,h){this.query=e,this.docs=t,this.oldDocs=r,this.docChanges=s,this.mutatedKeys=i,this.fromCache=a,this.syncStateChanged=c,this.excludesMetadataChanges=l,this.hasCachedResults=h}static fromInitialDocuments(e,t,r,s,i){const a=[];return t.forEach(c=>{a.push({type:0,doc:c})}),new Xn(e,t,wn.emptySet(t),a,r,s,!0,!1,i)}get hasPendingWrites(){return!this.mutatedKeys.isEmpty()}isEqual(e){if(!(this.fromCache===e.fromCache&&this.hasCachedResults===e.hasCachedResults&&this.syncStateChanged===e.syncStateChanged&&this.mutatedKeys.isEqual(e.mutatedKeys)&&Zi(this.query,e.query)&&this.docs.isEqual(e.docs)&&this.oldDocs.isEqual(e.oldDocs)))return!1;const t=this.docChanges,r=e.docChanges;if(t.length!==r.length)return!1;for(let s=0;s<t.length;s++)if(t[s].type!==r[s].type||!t[s].doc.isEqual(r[s].doc))return!1;return!0}}/**
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
 */class sw{constructor(){this.wu=void 0,this.bu=[]}Su(){return this.bu.some(e=>e.vu())}}class iw{constructor(){this.queries=_l(),this.onlineState="Unknown",this.Du=new Set}terminate(){(function(t,r){const s=W(t),i=s.queries;s.queries=_l(),i.forEach((a,c)=>{for(const l of c.bu)l.onError(r)})})(this,new D(C.ABORTED,"Firestore shutting down"))}}function _l(){return new Cn(n=>bd(n),Zi)}async function tc(n,e){const t=W(n);let r=3;const s=e.query;let i=t.queries.get(s);i?!i.Su()&&e.vu()&&(r=2):(i=new sw,r=e.vu()?0:1);try{switch(r){case 0:i.wu=await t.onListen(s,!0);break;case 1:i.wu=await t.onListen(s,!1);break;case 2:await t.onFirstRemoteStoreListen(s)}}catch(a){const c=ec(a,`Initialization of query '${ge(e.query)?At(e.query):$r(e.query)}' failed`);return void e.onError(c)}t.queries.set(s,i),i.bu.push(e),e.xu(t.onlineState),i.wu&&e.Cu(i.wu)&&rc(t)}async function nc(n,e){const t=W(n),r=e.query;let s=3;const i=t.queries.get(r);if(i){const a=i.bu.indexOf(e);a>=0&&(i.bu.splice(a,1),i.bu.length===0?s=e.vu()?0:1:!i.Su()&&e.vu()&&(s=2))}switch(s){case 0:return t.queries.delete(r),t.onUnlisten(r,!0);case 1:return t.queries.delete(r),t.onUnlisten(r,!1);case 2:return t.onLastRemoteStoreUnlisten(r);default:return}}function ow(n,e){const t=W(n);let r=!1;for(const s of e){const i=s.query,a=t.queries.get(i);if(a){for(const c of a.bu)c.Cu(s)&&(r=!0);a.wu=s}}r&&rc(t)}function aw(n,e,t){const r=W(n),s=r.queries.get(e);if(s)for(const i of s.bu)i.onError(t);r.queries.delete(e)}function rc(n){n.Du.forEach(e=>{e.next()})}var ua;(function(n){n.Default="default",n.Cache="cache"})(ua||(ua={}));class sc{constructor(e,t,r){this.query=e,this.Fu=t,this.Ou=!1,this.Mu=null,this.onlineState="Unknown",this.options=r||{}}Cu(e){if(!this.options.includeMetadataChanges){const r=[];for(const s of e.docChanges)s.type!==3&&r.push(s);e=new Xn(e.query,e.docs,e.oldDocs,r,e.mutatedKeys,e.fromCache,e.syncStateChanged,!0,e.hasCachedResults)}let t=!1;return this.Ou?this.Nu(e)&&(this.Fu.next(e),t=!0):this.Lu(e,this.onlineState)&&(this.Bu(e),t=!0),this.Mu=e,t}onError(e){this.Fu.error(e)}xu(e){this.onlineState=e;let t=!1;return this.Mu&&!this.Ou&&this.Lu(this.Mu,e)&&(this.Bu(this.Mu),t=!0),t}Lu(e,t){if(!e.fromCache||!this.vu())return!0;const r=t!=="Offline";return(!this.options.waitForSyncWhenOnline||!r)&&(!e.docs.isEmpty()||e.hasCachedResults||t==="Offline")}Nu(e){if(e.docChanges.length>0)return!0;const t=this.Mu&&this.Mu.hasPendingWrites!==e.hasPendingWrites;return!(!e.syncStateChanged&&!t)&&this.options.includeMetadataChanges===!0}Bu(e){e=Xn.fromInitialDocuments(e.query,e.docs,e.mutatedKeys,e.fromCache,e.hasCachedResults),this.Ou=!0,this.Fu.next(e)}vu(){return this.options.source!==ua.Cache}}/**
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
 */class Wd{constructor(e){this.key=e}}class zd{constructor(e){this.key=e}}class cw{constructor(e,t){this.query=e,this.zu=t,this.ju=null,this.hasCachedResults=!1,this.current=!1,this.Hu=G(),this.mutatedKeys=G(),this.Ju=ge(e)?oa(e):Aa(e),this.Yu=new wn(this.Ju)}get Zu(){return this.zu}Xu(e,t){const r=t?t.ec:new gl,s=t?t.Yu:this.Yu;let i=t?t.mutatedKeys:this.mutatedKeys,a=s,c=!1;const[l,h]=this.tc(this.query,s);e.inorderTraversal((m,E)=>{const V=s.get(m),N=EE(this.query,E)?E:null,U=!!V&&this.mutatedKeys.has(V.key),L=!!N&&(N.hasLocalMutations||this.mutatedKeys.has(N.key)&&N.hasCommittedMutations);let H=!1;V&&N?V.data.isEqual(N.data)?U!==L&&(r.track({type:3,doc:N}),H=!0):this.nc(V,N)||(r.track({type:2,doc:N}),H=!0,(l&&this.Ju(N,l)>0||h&&this.Ju(N,h)<0)&&(c=!0)):!V&&N?(r.track({type:0,doc:N}),H=!0):V&&!N&&(r.track({type:1,doc:V}),H=!0,(l||h)&&(c=!0)),H&&(N?(a=a.add(N),i=L?i.add(m):i.delete(m)):(a=a.delete(m),i=i.delete(m)))});const f=this.rc(this.query);if(f)if(ge(this.query)){const m=[];a.forEach(N=>m.push(N));const E=xd(this.query,m);let V=new wn(oa(this.query));for(const N of E)V=V.add(N);a.forEach(N=>{V.has(N.key)||(i=i.delete(N.key),r.track({type:1,doc:N}))}),a=V}else{const m=this.sc(this.query);for(;a.size>f;){const E=m==="F"?a.last():a.first();a=a.delete(E.key),i=i.delete(E.key),r.track({type:1,doc:E})}}return{Yu:a,ec:r,Oo:c,mutatedKeys:i}}rc(e){var t;return ge(e)?(t=Fo(e))==null?void 0:t.limit:e.limit||void 0}sc(e){if(ge(e)){const t=Fo(e);return t&&t.limit<0?"L":"F"}return e.limitType}tc(e,t){var r;if(ge(e)){const s=(r=Fo(e))==null?void 0:r.limit;return[t.size===s?t.last():null,null]}return[e.limitType==="F"&&t.size===this.rc(this.query)?t.last():null,e.limitType==="L"&&t.size===this.rc(this.query)?t.first():null]}nc(e,t){return e.hasLocalMutations&&t.hasCommittedMutations&&!t.hasLocalMutations}applyChanges(e,t,r,s){const i=this.Yu;this.Yu=e.Yu,this.mutatedKeys=e.mutatedKeys;const a=e.ec.yu();a.sort((f,m)=>function(V,N){const U=L=>{switch(L){case 0:return 1;case 2:case 3:return 2;case 1:return 0;default:return q(20277,{we:L})}};return U(V)-U(N)}(f.type,m.type)||this.Ju(f.doc,m.doc)),this._c(r),s=s??!1;const c=t&&!s?this.oc():[],l=this.Hu.size===0&&this.current&&!s?1:0,h=l!==this.ju;return this.ju=l,a.length!==0||h?{snapshot:new Xn(this.query,e.Yu,i,a,e.mutatedKeys,l===0,h,!1,!!r&&r.resumeToken.approximateByteSize()>0),ac:c}:{ac:c}}xu(e){return this.current&&e==="Offline"?(this.current=!1,this.applyChanges({Yu:this.Yu,ec:new gl,mutatedKeys:this.mutatedKeys,Oo:!1},!1)):{ac:[]}}uc(e){return!this.zu.has(e)&&!!this.Yu.has(e)&&!this.Yu.get(e).hasLocalMutations}_c(e){e&&(e.addedDocuments.forEach(t=>this.zu=this.zu.add(t)),e.modifiedDocuments.forEach(t=>{}),e.removedDocuments.forEach(t=>this.zu=this.zu.delete(t)),this.current=e.current)}oc(){if(!this.current)return[];const e=this.Hu;this.Hu=G(),this.Yu.forEach(r=>{this.uc(r.key)&&(this.Hu=this.Hu.add(r.key))});const t=[];return e.forEach(r=>{this.Hu.has(r)||t.push(new zd(r))}),this.Hu.forEach(r=>{e.has(r)||t.push(new Wd(r))}),t}cc(e){this.zu=e.Wo,this.Hu=G();const t=this.Xu(e.documents);return this.applyChanges(t,!0)}lc(){return Xn.fromInitialDocuments(this.query,this.Yu,this.mutatedKeys,this.ju===0,this.hasCachedResults)}}const ic="SyncEngine";class uw{constructor(e,t,r){this.query=e,this.targetId=t,this.view=r}}class lw{constructor(e){this.key=e,this.Ec=!1}}class hw{constructor(e,t,r,s,i,a){this.localStore=e,this.remoteStore=t,this.eventManager=r,this.sharedClientState=s,this.currentUser=i,this.maxConcurrentLimboResolutions=a,this.hc={},this.Tc=new Cn(c=>bd(c),Zi),this.Pc=new Map,this.Ic=new Set,this.Rc=new ne(B.comparator),this.Ac=new Map,this.Vc=new Wa,this.dc={},this.fc=new Map,this.mc=rn.bs(),this.onlineState="Unknown",this.gc=void 0}get isPrimaryClient(){return this.gc===!0}}async function dw(n,e,t=!0){const r=Jd(n);let s;const i=r.Tc.get(e);return i?(r.sharedClientState.addLocalQueryTarget(i.targetId),s=i.view.lc()):s=await Hd(r,e,t,!0),s}async function fw(n,e){const t=Jd(n);await Hd(t,e,!0,!1)}async function Hd(n,e,t,r){const s=await $E(n.localStore,ge(e)?e:ht(e)),i=s.targetId,a=n.sharedClientState.addLocalQueryTarget(i,t);let c;return r&&(c=await pw(n,e,i,a==="current",s.resumeToken)),n.isPrimaryClient&&t&&Ud(n.remoteStore,s),c}async function pw(n,e,t,r,s){n.yc=(m,E,V)=>async function(U,L,H,J){let ie=L.view.Xu(H);ie.Oo&&(ie=await fl(U.localStore,L.query,!1).then(({documents:I})=>L.view.Xu(I,ie)));const Je=J&&J.targetChanges.get(L.targetId),Ie=J&&J.targetMismatches.get(L.targetId)!=null,ve=L.view.applyChanges(ie,U.isPrimaryClient,Je,Ie);return El(U,L.targetId,ve.ac),ve.snapshot}(n,m,E,V);const i=await fl(n.localStore,e,!0),a=new cw(e,i.Wo),c=a.Xu(i.documents),l=vs.createSynthesizedTargetChangeForCurrentChange(t,r&&n.onlineState!=="Offline",s),h=a.applyChanges(c,n.isPrimaryClient,l);El(n,t,h.ac);const f=new uw(e,t,a);return n.Tc.set(e,f),n.Pc.has(t)?n.Pc.get(t).push(e):n.Pc.set(t,[e]),h.snapshot}async function mw(n,e,t){const r=W(n),s=r.Tc.get(e),i=r.Pc.get(s.targetId);if(i.length>1)return r.Pc.set(s.targetId,i.filter(a=>!Zi(a,e))),void r.Tc.delete(e);r.isPrimaryClient?(r.sharedClientState.removeLocalQueryTarget(s.targetId),r.sharedClientState.isActiveQueryTarget(s.targetId)||await aa(r.localStore,s.targetId,!1).then(()=>{r.sharedClientState.clearQueryState(s.targetId),t&&Ka(r.remoteStore,s.targetId),la(r,s.targetId)}).catch(ir)):(la(r,s.targetId),await aa(r.localStore,s.targetId,!0))}async function gw(n,e){const t=W(n),r=t.Tc.get(e),s=t.Pc.get(r.targetId);t.isPrimaryClient&&s.length===1&&(t.sharedClientState.removeLocalQueryTarget(r.targetId),Ka(t.remoteStore,r.targetId))}async function _w(n,e,t){const r=Aw(n);try{const s=await function(a,c){const l=W(a),h=Z.now(),f=c.reduce((V,N)=>V.add(N.key),G());let m,E;return l.persistence.runTransaction("Locally write mutations","readwrite",V=>{let N=Le(),U=G();return l.ko.getEntries(V,f).next(L=>{N=L,N.forEach((H,J)=>{J.isValidDocument()||(U=U.add(H))})}).next(()=>l.localDocuments.getOverlayedDocuments(V,N)).next(L=>{m=L;const H=[];for(const J of c){const ie=cg(J,m.get(J.key).overlayedDocument);ie!=null&&H.push(new un(J.key,ie,Rh(ie.value.mapValue),nt.exists(!0)))}return l.mutationQueue.addMutationBatch(V,h,H,c)}).next(L=>{E=L;const H=L.applyToLocalDocumentSet(m,U);return l.documentOverlayCache.saveOverlays(V,L.batchId,H)})}).then(()=>({batchId:E.batchId,changes:Wh(m)}))}(r.localStore,e);r.sharedClientState.addPendingMutation(s.batchId),function(a,c,l){let h=a.dc[a.currentUser.toKey()];h||(h=new ne(K)),h=h.insert(c,l),a.dc[a.currentUser.toKey()]=h}(r,s.batchId,t),await Ps(r,s.changes),await no(r.remoteStore)}catch(s){const i=ec(s,"Failed to persist write");t.reject(i)}}async function Gd(n,e){const t=W(n);try{const r=await FE(t.localStore,e);e.targetChanges.forEach((s,i)=>{const a=t.Ac.get(i);a&&(F(s.addedDocuments.size+s.modifiedDocuments.size+s.removedDocuments.size<=1,22616),s.addedDocuments.size>0?a.Ec=!0:s.modifiedDocuments.size>0?F(a.Ec,14607):s.removedDocuments.size>0&&(F(a.Ec,42227),a.Ec=!1))}),await Ps(t,r,e)}catch(r){await ir(r)}}function yl(n,e,t){const r=W(n);if(r.isPrimaryClient&&t===0||!r.isPrimaryClient&&t===1){const s=[];r.Tc.forEach((i,a)=>{const c=a.view.xu(e);c.snapshot&&s.push(c.snapshot)}),function(a,c){const l=W(a);l.onlineState=c;let h=!1;l.queries.forEach((f,m)=>{for(const E of m.bu)E.xu(c)&&(h=!0)}),h&&rc(l)}(r.eventManager,e),s.length&&r.hc.Tn(s),r.onlineState=e,r.isPrimaryClient&&r.sharedClientState.setOnlineState(e)}}async function yw(n,e,t){const r=W(n);r.sharedClientState.updateQueryState(e,"rejected",t);const s=r.Ac.get(e),i=s&&s.key;if(i){let a=new ne(B.comparator);a=a.insert(i,Se.newNoDocument(i,j.min()));const c=G().add(i),l=new Is(j.min(),new Map,new ne(K),a,Le(),c);await Gd(r,l),r.Rc=r.Rc.remove(i),r.Ac.delete(e),oc(r)}else await aa(r.localStore,e,!1).then(()=>la(r,e,t)).catch(ir)}async function Ew(n,e){const t=W(n),r=e.batch.batchId;try{const s=await UE(t.localStore,e);Qd(t,r,null),Kd(t,r),t.sharedClientState.updateMutationState(r,"acknowledged"),await Ps(t,s)}catch(s){await ir(s)}}async function ww(n,e,t){const r=W(n);try{const s=await function(a,c){const l=W(a);return l.persistence.runTransaction("Reject batch","readwrite-primary",h=>{let f;return l.mutationQueue.lookupMutationBatch(h,c).next(m=>(F(m!==null,37113),f=m.keys(),l.mutationQueue.removeMutationBatch(h,m))).next(()=>l.mutationQueue.performConsistencyCheck(h)).next(()=>l.documentOverlayCache.removeOverlaysForBatchId(h,f,c)).next(()=>l.localDocuments.recalculateAndSaveOverlaysForDocumentKeys(h,f)).next(()=>l.localDocuments.getDocuments(h,f))})}(r.localStore,e);Qd(r,e,t),Kd(r,e),r.sharedClientState.updateMutationState(e,"rejected",t),await Ps(r,s)}catch(s){await ir(s)}}function Kd(n,e){(n.fc.get(e)||[]).forEach(t=>{t.resolve()}),n.fc.delete(e)}function Qd(n,e,t){const r=W(n);let s=r.dc[r.currentUser.toKey()];if(s){const i=s.get(e);i&&(t?i.reject(t):i.resolve(),s=s.remove(e)),r.dc[r.currentUser.toKey()]=s}}function la(n,e,t=null){n.sharedClientState.removeLocalQueryTarget(e);for(const r of n.Pc.get(e))n.Tc.delete(r),t&&n.hc.wc(r,t);n.Pc.delete(e),n.isPrimaryClient&&n.Vc.e_(e).forEach(r=>{n.Vc.containsKey(r)||Yd(n,r)})}function Yd(n,e){n.Ic.delete(e.path.canonicalString());const t=n.Rc.get(e);t!==null&&(Ka(n.remoteStore,t),n.Rc=n.Rc.remove(e),n.Ac.delete(t),oc(n))}function El(n,e,t){for(const r of t)r instanceof Wd?(n.Vc.addReference(r.key,e),Tw(n,r)):r instanceof zd?(O(ic,"Document no longer in limbo: "+r.key),n.Vc.removeReference(r.key,e),n.Vc.containsKey(r.key)||Yd(n,r.key)):q(19791,{bc:r})}function Tw(n,e){const t=e.key,r=t.path.canonicalString();n.Rc.get(t)||n.Ic.has(r)||(O(ic,"New document in limbo: "+t),n.Ic.add(r),oc(n))}function oc(n){for(;n.Ic.size>0&&n.Rc.size<n.maxConcurrentLimboResolutions;){const e=n.Ic.values().next().value;n.Ic.delete(e);const t=new B(X.fromString(e)),r=n.mc.next();n.Ac.set(r,new lw(t)),n.Rc=n.Rc.insert(t,r),Ud(n.remoteStore,new wt(ht(Bi(t.path)),r,"TargetPurposeLimboResolution",zi.wn))}}async function Ps(n,e,t){const r=W(n),s=[],i=[],a=[];r.Tc.isEmpty()||(r.Tc.forEach((c,l)=>{a.push(r.yc(l,e,t).then(h=>{var f;if((h||t)&&r.isPrimaryClient){const m=h?!h.fromCache:(f=t==null?void 0:t.targetChanges.get(l.targetId))==null?void 0:f.current;r.sharedClientState.updateQueryState(l.targetId,m?"current":"not-current")}if(h){s.push(h);const m=Ha.mo(l.targetId,h);i.push(m)}}))}),await Promise.all(a),r.hc.Tn(s),await async function(l,h){const f=W(l);try{await f.persistence.runTransaction("notifyLocalViewChanges","readwrite",m=>b.forEach(h,E=>b.forEach(E.Vo,V=>f.persistence.referenceDelegate.addReference(m,E.targetId,V)).next(()=>b.forEach(E.fo,V=>f.persistence.referenceDelegate.removeReference(m,E.targetId,V)))))}catch(m){if(!or(m))throw m;O(Ga,"Failed to update sequence numbers: "+m)}for(const m of h){const E=m.targetId;if(!m.fromCache){const V=f.Lo.get(E),N=V.snapshotVersion,U=V.withLastLimboFreeSnapshotVersion(N);f.Lo=f.Lo.insert(E,U)}}}(r.localStore,i))}async function Iw(n,e){const t=W(n);if(!t.currentUser.isEqual(e)){O(ic,"User change. New user:",e.toKey());const r=await Ld(t.localStore,e);t.currentUser=e,function(i,a){i.fc.forEach(c=>{c.forEach(l=>{l.reject(new D(C.CANCELLED,a))})}),i.fc.clear()}(t,"'waitForPendingWrites' promise is rejected due to a user change."),t.sharedClientState.handleUserChange(e,r.removedBatchIds,r.addedBatchIds),await Ps(t,r.$o)}}function vw(n,e){const t=W(n),r=t.Ac.get(e);if(r&&r.Ec)return G().add(r.key);{let s=G();const i=t.Pc.get(e);if(!i)return s;for(const a of i??[]){const c=t.Tc.get(a);s=s.unionWith(c.view.Zu)}return s}}function Jd(n){const e=W(n);return e.remoteStore.remoteSyncer.applyRemoteEvent=Gd.bind(null,e),e.remoteStore.remoteSyncer.getRemoteKeysForTarget=vw.bind(null,e),e.remoteStore.remoteSyncer.rejectListen=yw.bind(null,e),e.hc.Tn=ow.bind(null,e.eventManager),e.hc.wc=aw.bind(null,e.eventManager),e}function Aw(n){const e=W(n);return e.remoteStore.remoteSyncer.applySuccessfulWrite=Ew.bind(null,e),e.remoteStore.remoteSyncer.rejectFailedWrite=ww.bind(null,e),e}class Ri{constructor(){this.kind="memory",this.synchronizeTabs=!1}async initialize(e){this.serializer=$i(e.databaseInfo.databaseId),this.sharedClientState=this.vc(e),this.persistence=this.Dc(e),await this.persistence.start(),this.localStore=this.xc(e),this.gcScheduler=this.Cc(e,this.localStore),this.indexBackfillerScheduler=this.Fc(e,this.localStore)}Cc(e,t){return null}Fc(e,t){return null}xc(e){return ME(this.persistence,new xE,e.initialUser,this.serializer)}Dc(e){return new Od(za.b_,this.serializer)}vc(e){return new rw}async terminate(){var e,t;(e=this.gcScheduler)==null||e.stop(),(t=this.indexBackfillerScheduler)==null||t.stop(),this.sharedClientState.shutdown(),await this.persistence.shutdown()}}Ri.provider={build:()=>new Ri};class Rw extends Ri{constructor(e){super(),this.cacheSizeBytes=e}Cc(e,t){F(this.persistence.referenceDelegate instanceof vi,46915);const r=this.persistence.referenceDelegate.garbageCollector;return new P_(r,e.asyncQueue,t)}Dc(e){const t=this.cacheSizeBytes!==void 0?Oe.withCacheSize(this.cacheSizeBytes):Oe.DEFAULT;return new Od(r=>vi.b_(r,t),this.serializer)}}class ha{async initialize(e,t){this.localStore||(this.localStore=e.localStore,this.sharedClientState=e.sharedClientState,this.datastore=this.createDatastore(t),this.remoteStore=this.createRemoteStore(t),this.eventManager=this.createEventManager(t),this.syncEngine=this.createSyncEngine(t,!e.synchronizeTabs),this.sharedClientState.onlineStateHandler=r=>yl(this.syncEngine,r,1),this.remoteStore.remoteSyncer.handleCredentialChange=Iw.bind(null,this.syncEngine),await nw(this.remoteStore,this.syncEngine.isPrimaryClient))}createEventManager(e){return function(){return new iw}()}createDatastore(e){const t=$i(e.databaseInfo.databaseId),r=f_(e.databaseInfo);return y_(e.authCredentials,e.appCheckCredentials,r,t)}createRemoteStore(e){return function(r,s,i,a,c){return new zE(r,s,i,a,c)}(this.localStore,this.datastore,e.asyncQueue,t=>yl(this.syncEngine,t,0),function(){return nl.Ye()?new nl:new u_}())}createSyncEngine(e,t){return function(s,i,a,c,l,h,f){const m=new hw(s,i,a,c,l,h);return f&&(m.gc=!0),m}(this.localStore,this.remoteStore,this.eventManager,this.sharedClientState,e.initialUser,e.maxConcurrentLimboResolutions,t)}async terminate(){var e,t;await async function(s){const i=W(s);O(mt,"RemoteStore shutting down."),i.la.add(5),await Rs(i),i.ha.shutdown(),i.Ta.set("Unknown")}(this.remoteStore),(e=this.datastore)==null||e.terminate(),(t=this.eventManager)==null||t.terminate()}}ha.provider={build:()=>new ha};/**
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
 */const on="FirestoreClient";class Pw{constructor(e,t,r,s,i){this.authCredentials=e,this.appCheckCredentials=t,this.asyncQueue=r,this._databaseInfo=s,this.user=Pe.UNAUTHENTICATED,this.clientId=ya.newId(),this.authCredentialListener=()=>Promise.resolve(),this.appCheckCredentialListener=()=>Promise.resolve(),this._uninitializedComponentsProvider=i,this.authCredentials.start(r,async a=>{O(on,"Received user=",a.uid),await this.authCredentialListener(a),this.user=a}),this.appCheckCredentials.start(r,a=>(O(on,"Received new app check token=",a),this.appCheckCredentialListener(a,this.user)))}get configuration(){return{asyncQueue:this.asyncQueue,databaseInfo:this._databaseInfo,clientId:this.clientId,authCredentials:this.authCredentials,appCheckCredentials:this.appCheckCredentials,initialUser:this.user,maxConcurrentLimboResolutions:100}}setCredentialChangeListener(e){this.authCredentialListener=e}setAppCheckTokenChangeListener(e){this.appCheckCredentialListener=e}terminate(){this.asyncQueue.enterRestrictedMode();const e=new vt;return this.asyncQueue.enqueueAndForgetEvenWhileRestricted(async()=>{try{this._onlineComponents&&await this._onlineComponents.terminate(),this._offlineComponents&&await this._offlineComponents.terminate(),this.authCredentials.shutdown(),this.appCheckCredentials.shutdown(),e.resolve()}catch(t){const r=ec(t,"Failed to shutdown persistence");e.reject(r)}}),e.promise}}async function qo(n,e){n.asyncQueue.verifyOperationInProgress(),O(on,"Initializing OfflineComponentProvider");const t=n.configuration;await e.initialize(t);let r=t.initialUser;n.setCredentialChangeListener(async s=>{r.isEqual(s)||(await Ld(e.localStore,s),r=s)}),e.persistence.setDatabaseDeletedListener(()=>n.terminate()),n._offlineComponents=e}async function wl(n,e){n.asyncQueue.verifyOperationInProgress();const t=await Sw(n);O(on,"Initializing OnlineComponentProvider"),await e.initialize(t,n.configuration),n.setCredentialChangeListener(r=>pl(e.remoteStore,r)),n.setAppCheckTokenChangeListener((r,s)=>pl(e.remoteStore,s)),n._onlineComponents=e}async function Sw(n){if(!n._offlineComponents)if(n._uninitializedComponentsProvider){O(on,"Using user provided OfflineComponentProvider");try{await qo(n,n._uninitializedComponentsProvider._offline)}catch(e){const t=e;if(!function(s){return s.name==="FirebaseError"?s.code===C.FAILED_PRECONDITION||s.code===C.UNIMPLEMENTED:!(typeof DOMException<"u"&&s instanceof DOMException)||s.code===22||s.code===20||s.code===11}(t))throw t;rt("Error using user provided cache. Falling back to memory cache: "+t),await qo(n,new Ri)}}else O(on,"Using default OfflineComponentProvider"),await qo(n,new Rw(void 0));return n._offlineComponents}async function Xd(n){return n._onlineComponents||(n._uninitializedComponentsProvider?(O(on,"Using user provided OnlineComponentProvider"),await wl(n,n._uninitializedComponentsProvider._online)):(O(on,"Using default OnlineComponentProvider"),await wl(n,new ha))),n._onlineComponents}function Vw(n){return Xd(n).then(e=>e.syncEngine)}async function Pi(n){const e=await Xd(n),t=e.eventManager;return t.onListen=dw.bind(null,e.syncEngine),t.onUnlisten=mw.bind(null,e.syncEngine),t.onFirstRemoteStoreListen=fw.bind(null,e.syncEngine),t.onLastRemoteStoreUnlisten=gw.bind(null,e.syncEngine),t}function Cw(n,e,t,r){const s=new Xa(r),i=new sc(e,s,t);return n.asyncQueue.enqueueAndForget(async()=>tc(await Pi(n),i)),()=>{s.Va(),n.asyncQueue.enqueueAndForget(async()=>nc(await Pi(n),i))}}function bw(n,e,t={}){const r=new vt;return n.asyncQueue.enqueueAndForget(async()=>function(i,a,c,l,h){const f=new Xa({next:E=>{f.Va(),a.enqueueAndForget(()=>nc(i,m));const V=E.docs.has(c);!V&&E.fromCache?h.reject(new D(C.UNAVAILABLE,"Failed to get document because the client is offline.")):V&&E.fromCache&&l&&l.source==="server"?h.reject(new D(C.UNAVAILABLE,'Failed to get document from server. (However, this document does exist in the local cache. Run again without setting source to "server" to retrieve the cached document.)')):h.resolve(E)},error:E=>h.reject(E)}),m=new sc(Bi(c.path),f,{includeMetadataChanges:!0,waitForSyncWhenOnline:!0});return tc(i,m)}(await Pi(n),n.asyncQueue,e,t,r)),r.promise}function Nw(n,e,t={}){const r=new vt;return n.asyncQueue.enqueueAndForget(async()=>function(i,a,c,l,h){const f=new Xa({next:E=>{f.Va(),a.enqueueAndForget(()=>nc(i,m)),E.fromCache&&l.source==="server"?h.reject(new D(C.UNAVAILABLE,'Failed to get documents from server. (However, these documents may exist in the local cache. Run again without setting source to "server" to retrieve the cached documents.)')):h.resolve(E)},error:E=>h.reject(E)}),m=new sc(c instanceof zr?lE(c):c,f,{includeMetadataChanges:!0,waitForSyncWhenOnline:!0});return tc(i,m)}(await Pi(n),n.asyncQueue,e,t,r)),r.promise}function kw(n,e){const t=new vt;return n.asyncQueue.enqueueAndForget(async()=>_w(await Vw(n),e,t)),t.promise}/**
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
 */let Zd=class{constructor(e,t,r,s,i){this._firestore=e,this._userDataWriter=t,this._key=r,this._document=s,this._converter=i}get id(){return this._key.path.lastSegment()}get ref(){return new se(this._firestore,this._converter,this._key)}exists(){return this._document!==null}data(){if(this._document){if(this._converter){const e=new Dw(this._firestore,this._userDataWriter,this._key,this._document,null);return this._converter.fromFirestore(e)}return this._userDataWriter.convertValue(this._document.data.value)}}_fieldsProto(){var e;return((e=this._document)==null?void 0:e.data.clone().value.mapValue.fields)??void 0}get(e){if(this._document){const t=this._document.data.field(en("DocumentSnapshot.get",e));if(t!==null)return this._userDataWriter.convertValue(t)}}},Dw=class extends Zd{data(){return super.data()}};/**
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
 */class xw{convertValue(e,t="none"){switch(pe(e)){case 0:return null;case 1:return e.booleanValue;case 2:return re(e.integerValue||e.doubleValue);case 3:return this.convertTimestamp(e.timestampValue);case 4:return this.convertServerTimestamp(e,t);case 5:return e.stringValue;case 6:return this.convertBytes(Yt(e.bytesValue));case 7:return this.convertReference(e.referenceValue);case 8:return this.convertGeoPoint(e.geoPointValue);case 9:return this.convertArray(e.arrayValue,t);case 11:return this.convertObject(e.mapValue,t);case 10:return this.convertVectorValue(e.mapValue);default:throw q(62114,{value:e})}}convertObject(e,t){return this.convertObjectMap(e.fields,t)}convertObjectMap(e,t="none"){const r={};return cn(e,(s,i)=>{r[s]=this.convertValue(i,t)}),r}convertVectorValue(e){var r,s,i;const t=(i=(s=(r=e.fields)==null?void 0:r[ts].arrayValue)==null?void 0:s.values)==null?void 0:i.map(a=>re(a.doubleValue));return new Me(t)}convertGeoPoint(e){return new ft(re(e.latitude),re(e.longitude))}convertArray(e,t){return(e.values||[]).map(r=>this.convertValue(r,t))}convertServerTimestamp(e,t){switch(t){case"previous":const r=ws(e);return r==null?null:this.convertValue(r,t);case"estimate":return this.convertTimestamp(Kn(e));default:return null}}convertTimestamp(e){const t=Qt(e);return new Z(t.seconds,t.nanos)}convertDocumentKey(e,t){const r=X.fromString(e);F(ed(r),9688,{name:e});const s=new Zr(r.get(1),r.get(3)),i=new B(r.popFirst(5));return s.isEqual(t)||St(`A document reference to ${i} refers to a different database (${s.projectId}/${s.database}), which is not supported. It will be treated as a reference in the current database (${t.projectId}/${t.database}) instead.`),i}}/**
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
 */function Ow(n,e,t){let r;return r=n?t&&(t.merge||t.mergeFields)?n.toFirestore(e,t):n.toFirestore(e):e,r}/**
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
 */const Tl="AsyncQueue";class Il{constructor(e=Promise.resolve()){this.$c=[],this.Kc=!1,this.Qc=[],this.Wc=null,this.Gc=!1,this.zc=!1,this.jc=[],this.Ht=new id(this,"async_queue_retry"),this.Hc=()=>{const r=Bo();r&&O(Tl,"Visibility state changed to "+r.visibilityState),this.Ht.$t()},this.Jc=e;const t=Bo();t&&typeof t.addEventListener=="function"&&t.addEventListener("visibilitychange",this.Hc)}get isShuttingDown(){return this.Kc}enqueueAndForget(e){this.enqueue(e)}enqueueAndForgetEvenWhileRestricted(e){this.Yc(),this.Zc(e)}enterRestrictedMode(e){if(!this.Kc){this.Kc=!0,this.zc=e||!1;const t=Bo();t&&typeof t.removeEventListener=="function"&&t.removeEventListener("visibilitychange",this.Hc)}}enqueue(e){if(this.Yc(),this.Kc)return new Promise(()=>{});const t=new vt;return this.Zc(()=>this.Kc&&this.zc?Promise.resolve():(e().then(t.resolve,t.reject),t.promise)).then(()=>t.promise)}enqueueRetryable(e){this.enqueueAndForget(()=>(this.$c.push(e),this.Xc()))}async Xc(){if(this.$c.length!==0){try{await this.$c[0](),this.$c.shift(),this.Ht.reset()}catch(e){if(!or(e))throw e;O(Tl,"Operation failed with retryable error: "+e)}this.$c.length>0&&this.Ht.kt(()=>this.Xc())}}Zc(e){const t=this.Jc.then(()=>(this.Gc=!0,e().catch(r=>{throw this.Wc=r,this.Gc=!1,St("INTERNAL UNHANDLED ERROR: ",vl(r)),r}).then(r=>(this.Gc=!1,r))));return this.Jc=t,t}enqueueAfterDelay(e,t,r){this.Yc(),this.jc.indexOf(e)>-1&&(t=0);const s=Za.createAndSchedule(this,e,t,r,i=>this.el(i));return this.Qc.push(s),s}Yc(){this.Wc&&q(47125,{tl:vl(this.Wc)})}verifyOperationInProgress(){}async nl(){let e;do e=this.Jc,await e;while(e!==this.Jc)}rl(e){for(const t of this.Qc)if(t.timerId===e)return!0;return!1}il(e){return this.nl().then(()=>{this.Qc.sort((t,r)=>t.targetTimeMs-r.targetTimeMs);for(const t of this.Qc)if(t.skipDelay(),e!=="all"&&t.timerId===e)break;return this.nl()})}sl(e){this.jc.push(e)}el(e){const t=this.Qc.indexOf(e);this.Qc.splice(t,1)}}function vl(n){let e=n.message||"";return n.stack&&(e=n.stack.includes(n.message)?n.stack:n.message+`
`+n.stack),e}class an extends Hi{constructor(e,t,r,s){super(e,t,r,s),this.type="firestore",this._queue=new Il,this._persistenceKey=(s==null?void 0:s.name)||"[DEFAULT]"}async _terminate(){if(this._firestoreClient){const e=this._firestoreClient.terminate();this._queue=new Il(e),this._firestoreClient=void 0,await e}}}function Tv(n,e){const t=typeof n=="object"?n:oh(),r=typeof n=="string"?n:fi,s=ga(t,"firestore").getImmediate({identifier:r});if(!s._initialized){const i=Pp("firestore");i&&C_(s,...i)}return s}function ro(n){if(n._terminated)throw new D(C.FAILED_PRECONDITION,"The client has already been terminated.");return n._firestoreClient||Lw(n),n._firestoreClient}function Lw(n){var r,s,i,a;const e=n._freezeSettings(),t=w_(n._databaseId,((r=n._app)==null?void 0:r.options.appId)||"",n._persistenceKey,(s=n._app)==null?void 0:s.options.apiKey,e);n._componentsProvider||(i=e.localCache)!=null&&i._offlineComponentProvider&&((a=e.localCache)!=null&&a._onlineComponentProvider)&&(n._componentsProvider={_offline:e.localCache._offlineComponentProvider,_online:e.localCache._onlineComponentProvider}),n._firestoreClient=new Pw(n._authCredentials,n._appCheckCredentials,n._queue,t,n._componentsProvider&&function(l){const h=l==null?void 0:l._online.build();return{_offline:l==null?void 0:l._offline.build(h),_online:h}}(n._componentsProvider))}/**
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
 */class ac extends xw{constructor(e){super(),this.firestore=e}convertBytes(e){return new Ze(e)}convertReference(e){const t=this.convertDocumentKey(e,this.firestore._databaseId);return new se(this.firestore,null,t)}}class Mr{constructor(e,t){this.hasPendingWrites=e,this.fromCache=t}isEqual(e){return this.hasPendingWrites===e.hasPendingWrites&&this.fromCache===e.fromCache}}class Tn extends Zd{constructor(e,t,r,s,i,a){super(e,t,r,s,a),this._firestore=e,this._firestoreImpl=e,this.metadata=i}exists(){return super.exists()}data(e={}){if(this._document){if(this._converter){const t=new ii(this._firestore,this._userDataWriter,this._key,this._document,this.metadata,null);return this._converter.fromFirestore(t,e)}return this._userDataWriter.convertValue(this._document.data.value,e.serverTimestamps)}}get(e,t={}){if(this._document){const r=this._document.data.field(en("DocumentSnapshot.get",e));if(r!==null)return this._userDataWriter.convertValue(r,t.serverTimestamps)}}toJSON(){if(this.metadata.hasPendingWrites)throw new D(C.FAILED_PRECONDITION,"DocumentSnapshot.toJSON() attempted to serialize a document with pending writes. Await waitForPendingWrites() before invoking toJSON().");const e=this._document,t={};return t.type=Tn._jsonSchemaVersion,t.bundle="",t.bundleSource="DocumentSnapshot",t.bundleName=this._key.toString(),!e||!e.isValidDocument()||!e.isFoundDocument()?t:(this._userDataWriter.convertObjectMap(e.data.value.mapValue.fields,"previous"),t.bundle=(this._firestore,this.ref.path,"NOT SUPPORTED"),t)}}Tn._jsonSchemaVersion="firestore/documentSnapshot/1.0",Tn._jsonSchema={type:he("string",Tn._jsonSchemaVersion),bundleSource:he("string","DocumentSnapshot"),bundleName:he("string"),bundle:he("string")};class ii extends Tn{data(e={}){return super.data(e)}}class In{constructor(e,t,r,s){this._firestore=e,this._userDataWriter=t,this._snapshot=s,this.metadata=new Mr(s.hasPendingWrites,s.fromCache),this.query=r}get docs(){const e=[];return this.forEach(t=>e.push(t)),e}get size(){return this._snapshot.docs.size}get empty(){return this.size===0}forEach(e,t){this._snapshot.docs.forEach(r=>{e.call(t,new ii(this._firestore,this._userDataWriter,r.key,r,new Mr(this._snapshot.mutatedKeys.has(r.key),this._snapshot.fromCache),this.query.converter))})}docChanges(e={}){const t=!!e.includeMetadataChanges;if(t&&this._snapshot.excludesMetadataChanges)throw new D(C.INVALID_ARGUMENT,"To include metadata changes with your document changes, you must also pass { includeMetadataChanges:true } to onSnapshot().");return this._cachedChanges&&this._cachedChangesIncludeMetadataChanges===t||(this._cachedChanges=function(s,i){if(s._snapshot.oldDocs.isEmpty()){let a=0;return s._snapshot.docChanges.map(c=>{ge(s._snapshot.query)?oa(s._snapshot.query):Aa(s.query._query);const l=new ii(s._firestore,s._userDataWriter,c.doc.key,c.doc,new Mr(s._snapshot.mutatedKeys.has(c.doc.key),s._snapshot.fromCache),s.query.converter);return c.doc,{type:"added",doc:l,oldIndex:-1,newIndex:a++}})}{let a=s._snapshot.oldDocs;return s._snapshot.docChanges.filter(c=>i||c.type!==3).map(c=>{const l=new ii(s._firestore,s._userDataWriter,c.doc.key,c.doc,new Mr(s._snapshot.mutatedKeys.has(c.doc.key),s._snapshot.fromCache),s.query.converter);let h=-1,f=-1;return c.type!==0&&(h=a.indexOf(c.doc.key),a=a.delete(c.doc.key)),c.type!==1&&(a=a.add(c.doc),f=a.indexOf(c.doc.key)),{type:Mw(c.type),doc:l,oldIndex:h,newIndex:f}})}}(this,t),this._cachedChangesIncludeMetadataChanges=t),this._cachedChanges}toJSON(){if(this.metadata.hasPendingWrites)throw new D(C.FAILED_PRECONDITION,"QuerySnapshot.toJSON() attempted to serialize a document with pending writes. Await waitForPendingWrites() before invoking toJSON().");const e={};e.type=In._jsonSchemaVersion,e.bundleSource="QuerySnapshot",e.bundleName=ya.newId(),this._firestore._databaseId.database,this._firestore._databaseId.projectId;const t=[],r=[],s=[];return this.docs.forEach(i=>{i._document!==null&&(t.push(i._document),r.push(this._userDataWriter.convertObjectMap(i._document.data.value.mapValue.fields,"previous")),s.push(i.ref.path))}),e.bundle=(this._firestore,this.query._query,e.bundleName,"NOT SUPPORTED"),e}}function Mw(n){switch(n){case 0:return"added";case 2:case 3:return"modified";case 1:return"removed";default:return q(61501,{type:n})}}/**
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
 */In._jsonSchemaVersion="firestore/querySnapshot/1.0",In._jsonSchema={type:he("string",In._jsonSchemaVersion),bundleSource:he("string","QuerySnapshot"),bundleName:he("string"),bundle:he("string")};/**
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
 */function ef(n){if(n.limitType==="L"&&n.explicitOrderBy.length===0)throw new D(C.UNIMPLEMENTED,"limitToLast() queries require specifying at least one orderBy() clause")}class cc{}class uc extends cc{}function Iv(n,e,...t){let r=[];e instanceof cc&&r.push(e),r=r.concat(t),function(i){const a=i.filter(l=>l instanceof lc).length,c=i.filter(l=>l instanceof so).length;if(a>1||a>0&&c>0)throw new D(C.INVALID_ARGUMENT,"InvalidQuery. When using composite filters, you cannot use more than one filter at the top level. Consider nesting the multiple filters within an `and(...)` statement. For example: change `query(query, where(...), or(...))` to `query(query, and(where(...), or(...)))`.")}(r);for(const s of r)n=s._apply(n);return n}class so extends uc{constructor(e,t,r){super(),this._field=e,this._op=t,this._value=r,this.type="where"}static _create(e,t,r){return new so(e,t,r)}_apply(e){const t=this._parse(e);return tf(e._query,t),new Nt(e.firestore,e.converter,ea(e._query,t))}_parse(e){const t=Ca(e.firestore);return function(i,a,c,l,h,f,m){let E;if(h.isKeyField()){if(f==="array-contains"||f==="array-contains-any")throw new D(C.INVALID_ARGUMENT,`Invalid Query. You can't perform '${f}' queries on documentId().`);if(f==="in"||f==="not-in"){Rl(m,f);const N=[];for(const U of m)N.push(Al(l,i,U));E={arrayValue:{values:N}}}else E=Al(l,i,m)}else f!=="in"&&f!=="not-in"&&f!=="array-contains-any"||Rl(m,f),E=L_(c,a,m,f==="in"||f==="not-in");return le.create(h,f,E)}(e._query,"where",t,e.firestore._databaseId,this._field,this._op,this._value)}}function vv(n,e,t){const r=e,s=en("where",n);return so._create(s,r,t)}class lc extends cc{constructor(e,t){super(),this.type=e,this._queryConstraints=t}static _create(e,t){return new lc(e,t)}_parse(e){const t=this._queryConstraints.map(r=>r._parse(e)).filter(r=>r.getFilters().length>0);return t.length===1?t[0]:st.create(t,this._getOperator())}_apply(e){const t=this._parse(e);return t.getFilters().length===0?e:(function(s,i){let a=s;const c=i.getFlattenedFilters();for(const l of c)tf(a,l),a=ea(a,l)}(e._query,t),new Nt(e.firestore,e.converter,ea(e._query,t)))}_getQueryConstraints(){return this._queryConstraints}_getOperator(){return this.type==="and"?"and":"or"}}class hc extends uc{constructor(e,t){super(),this._field=e,this._direction=t,this.type="orderBy"}static _create(e,t){return new hc(e,t)}_apply(e){const t=function(s,i,a){if(s.startAt!==null)throw new D(C.INVALID_ARGUMENT,"Invalid query. You must not call startAt() or startAfter() before calling orderBy().");if(s.endAt!==null)throw new D(C.INVALID_ARGUMENT,"Invalid query. You must not call endAt() or endBefore() before calling orderBy().");return new as(i,a)}(e._query,this._field,this._direction);return new Nt(e.firestore,e.converter,Pg(e._query,t))}}function Av(n,e="asc"){const t=e,r=en("orderBy",n);return hc._create(r,t)}class dc extends uc{constructor(e,t,r){super(),this.type=e,this._limit=t,this._limitType=r}static _create(e,t,r){return new dc(e,t,r)}_apply(e){return new Nt(e.firestore,e.converter,Ei(e._query,this._limit,this._limitType))}}function Rv(n){return Km("limit",n),dc._create("limit",n,"F")}function Al(n,e,t){if(typeof(t=ae(t))=="string"){if(t==="")throw new D(C.INVALID_ARGUMENT,"Invalid query. When querying with documentId(), you must provide a valid document ID, but it was an empty string.");if(!qh(e)&&t.indexOf("/")!==-1)throw new D(C.INVALID_ARGUMENT,`Invalid query. When querying a collection by documentId(), you must provide a plain document ID, but '${t}' contains a '/' character.`);const r=e.path.child(X.fromString(t));if(!B.isDocumentKey(r))throw new D(C.INVALID_ARGUMENT,`Invalid query. When querying a collection group by documentId(), the value provided must result in a valid document path, but '${r}' is not because it has an odd number of segments (${r.length}).`);return Bu(n,new B(r))}if(t instanceof se)return Bu(n,t._key);throw new D(C.INVALID_ARGUMENT,`Invalid query. When querying with documentId(), you must provide a valid string or a DocumentReference, but it was: ${xi(t)}.`)}function Rl(n,e){if(!Array.isArray(n)||n.length===0)throw new D(C.INVALID_ARGUMENT,`Invalid Query. A non-empty array is required for '${e.toString()}' filters.`)}function tf(n,e){const t=function(s,i){for(const a of s)for(const c of a.getFlattenedFilters())if(i.indexOf(c.op)>=0)return c.op;return null}(n.filters,function(s){switch(s){case"!=":return["!=","not-in"];case"array-contains-any":case"in":return["not-in"];case"not-in":return["array-contains-any","in","not-in","!="];default:return[]}}(e.op));if(t!==null)throw t===e.op?new D(C.INVALID_ARGUMENT,`Invalid query. You cannot use more than one '${e.op.toString()}' filter.`):new D(C.INVALID_ARGUMENT,`Invalid query. You cannot use '${e.op.toString()}' filters with '${t.toString()}' filters.`)}/**
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
 */function Pl(n){return function(t,r){if(typeof t!="object"||t===null)return!1;const s=t;for(const i of r)if(i in s&&typeof s[i]=="function")return!0;return!1}(n,["next","error","complete"])}/**
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
 */function Pv(n){n=Ke(n,se);const e=Ke(n.firestore,an),t=ro(e);return bw(t,n._key).then(r=>nf(e,n,r))}function Sv(n){n=Ke(n,Nt);const e=Ke(n.firestore,an),t=ro(e),r=new ac(e);return ef(n._query),Nw(t,n._query).then(s=>new In(e,r,n,s))}function Vv(n,e,t){n=Ke(n,se);const r=Ke(n.firestore,an),s=Ow(n.converter,e,t),i=Ca(r);return fc(r,[D_(i,"setDoc",n._key,s,n.converter!==null,t).toMutation(n._key,nt.none())])}function Cv(n,e,t,...r){n=Ke(n,se);const s=Ke(n.firestore,an),i=Ca(s);let a;return a=typeof(e=ae(e))=="string"||e instanceof ji?O_(i,"updateDoc",n._key,e,t,r):x_(i,"updateDoc",n._key,e),fc(s,[a.toMutation(n._key,nt.exists(!0))])}function bv(n){return fc(Ke(n.firestore,an),[new va(n._key,nt.none())])}function Nv(n,...e){var h,f,m;n=ae(n);let t={includeMetadataChanges:!1,source:"default"},r=0;typeof e[r]!="object"||Pl(e[r])||(t=e[r++]);const s={includeMetadataChanges:t.includeMetadataChanges,source:t.source};if(Pl(e[r])){const E=e[r];e[r]=(h=E.next)==null?void 0:h.bind(E),e[r+1]=(f=E.error)==null?void 0:f.bind(E),e[r+2]=(m=E.complete)==null?void 0:m.bind(E)}let i,a,c;if(n instanceof se)a=Ke(n.firestore,an),c=Bi(n._key.path),i={next:E=>{e[r]&&e[r](nf(a,n,E))},error:e[r+1],complete:e[r+2]};else{const E=Ke(n,Nt);a=Ke(E.firestore,an),c=E._query;const V=new ac(a);i={next:N=>{e[r]&&e[r](new In(a,V,E,N))},error:e[r+1],complete:e[r+2]},ef(n._query)}const l=ro(a);return Cw(l,c,s,i)}function fc(n,e){const t=ro(n);return kw(t,e)}function nf(n,e,t){const r=t.docs.get(e._key),s=new ac(n);return new Tn(n,s,e._key,r,new Mr(t.hasPendingWrites,t.fromCache),e.converter)}const Sl="@firebase/firestore",Vl="4.17.2";(function(e,t=!0){qm(nr),Hn(new Rn("firestore",(r,{instanceIdentifier:s,options:i})=>{const a=r.getProvider("app").getImmediate(),c=new an(new i_(r.getProvider("auth-internal")),new c_(a,r.getProvider("app-check-internal")),Jm(a,s),a);return i={useFetchStreams:t,...i},c._setSettings(i),c},"PUBLIC").setMultipleInstances(!0)),Wt(Sl,Vl,e),Wt(Sl,Vl,"esm2020")})();var Uw="firebase",Fw="12.19.0";/**
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
 */Wt(Uw,Fw,"app");function rf(){return{"dependent-sdk-initialized-before-auth":"Another Firebase SDK was initialized and is trying to use Auth before Auth is initialized. Please be sure to call `initializeAuth` or `getAuth` before starting any other Firebase SDK."}}const Bw=rf,sf=new gs("auth","Firebase",rf());/**
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
 */const Si=new ma("@firebase/auth");function oi(n,...e){Si.logLevel<=Q.WARN&&Si.warn(`Auth (${nr}): ${n}`,...e)}function ai(n,...e){Si.logLevel<=Q.ERROR&&Si.error(`Auth (${nr}): ${n}`,...e)}/**
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
 */function it(n,...e){throw mc(n,...e)}function Qe(n,...e){return mc(n,...e)}function pc(n,e,t){const r={...Bw(),[e]:t};return new gs("auth","Firebase",r).create(e,{appName:n.name})}function Rt(n){return pc(n,"operation-not-supported-in-this-environment","Operations that alter the current user are not supported in conjunction with FirebaseServerApp")}function mc(n,...e){if(typeof n!="string"){const t=e[0],r=[...e.slice(1)];return r[0]&&(r[0].appName=n.name),n._errorFactory.create(t,...r)}return sf.create(n,...e)}function M(n,e,...t){if(!n)throw mc(e,...t)}function Tt(n){const e="INTERNAL ASSERTION FAILED: "+n;throw ai(e),new Error(e)}function Ct(n,e){n||Tt(e)}/**
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
 */function da(){var n;return typeof self<"u"&&((n=self.location)==null?void 0:n.href)||""}function of(){return Cl()==="http:"||Cl()==="https:"}function Cl(){var n;return typeof self<"u"&&((n=self.location)==null?void 0:n.protocol)||null}/**
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
 */function qw(){return typeof navigator<"u"&&navigator&&"onLine"in navigator&&typeof navigator.onLine=="boolean"&&(of()||Np()||"connection"in navigator)?navigator.onLine:!0}function $w(){if(typeof navigator>"u")return null;const n=navigator;return n.languages&&n.languages[0]||n.language||null}/**
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
 */class Ss{constructor(e,t){this.shortDelay=e,this.longDelay=t,Ct(t>e,"Short delay should be less than long delay!"),this.isMobile=Vp()||kp()}get(){return qw()?this.isMobile?this.longDelay:this.shortDelay:Math.min(5e3,this.shortDelay)}}/**
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
 */function gc(n,e){Ct(n.emulator,"Emulator should always be set here");const{url:t}=n.emulator;return e?`${t}${e.startsWith("/")?e.slice(1):e}`:t}/**
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
 */class af{static initialize(e,t,r){this.fetchImpl=e,t&&(this.headersImpl=t),r&&(this.responseImpl=r)}static fetch(){if(this.fetchImpl)return this.fetchImpl;if(typeof self<"u"&&"fetch"in self)return self.fetch;if(typeof globalThis<"u"&&globalThis.fetch)return globalThis.fetch;if(typeof fetch<"u")return fetch;Tt("Could not find fetch implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static headers(){if(this.headersImpl)return this.headersImpl;if(typeof self<"u"&&"Headers"in self)return self.Headers;if(typeof globalThis<"u"&&globalThis.Headers)return globalThis.Headers;if(typeof Headers<"u")return Headers;Tt("Could not find Headers implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static response(){if(this.responseImpl)return this.responseImpl;if(typeof self<"u"&&"Response"in self)return self.Response;if(typeof globalThis<"u"&&globalThis.Response)return globalThis.Response;if(typeof Response<"u")return Response;Tt("Could not find Response implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}}/**
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
 */const jw={CREDENTIAL_MISMATCH:"custom-token-mismatch",MISSING_CUSTOM_TOKEN:"internal-error",INVALID_IDENTIFIER:"invalid-email",MISSING_CONTINUE_URI:"internal-error",INVALID_PASSWORD:"wrong-password",MISSING_PASSWORD:"missing-password",INVALID_LOGIN_CREDENTIALS:"invalid-credential",EMAIL_EXISTS:"email-already-in-use",PASSWORD_LOGIN_DISABLED:"operation-not-allowed",INVALID_IDP_RESPONSE:"invalid-credential",INVALID_PENDING_TOKEN:"invalid-credential",FEDERATED_USER_ID_ALREADY_LINKED:"credential-already-in-use",MISSING_REQ_TYPE:"internal-error",EMAIL_NOT_FOUND:"user-not-found",RESET_PASSWORD_EXCEED_LIMIT:"too-many-requests",EXPIRED_OOB_CODE:"expired-action-code",INVALID_OOB_CODE:"invalid-action-code",MISSING_OOB_CODE:"internal-error",CREDENTIAL_TOO_OLD_LOGIN_AGAIN:"requires-recent-login",INVALID_ID_TOKEN:"invalid-user-token",TOKEN_EXPIRED:"user-token-expired",USER_NOT_FOUND:"user-token-expired",TOO_MANY_ATTEMPTS_TRY_LATER:"too-many-requests",PASSWORD_DOES_NOT_MEET_REQUIREMENTS:"password-does-not-meet-requirements",INVALID_CODE:"invalid-verification-code",INVALID_SESSION_INFO:"invalid-verification-id",INVALID_TEMPORARY_PROOF:"invalid-credential",MISSING_SESSION_INFO:"missing-verification-id",SESSION_EXPIRED:"code-expired",MISSING_ANDROID_PACKAGE_NAME:"missing-android-pkg-name",UNAUTHORIZED_DOMAIN:"unauthorized-continue-uri",INVALID_OAUTH_CLIENT_ID:"invalid-oauth-client-id",ADMIN_ONLY_OPERATION:"admin-restricted-operation",INVALID_MFA_PENDING_CREDENTIAL:"invalid-multi-factor-session",MFA_ENROLLMENT_NOT_FOUND:"multi-factor-info-not-found",MISSING_MFA_ENROLLMENT_ID:"missing-multi-factor-info",MISSING_MFA_PENDING_CREDENTIAL:"missing-multi-factor-session",SECOND_FACTOR_EXISTS:"second-factor-already-in-use",SECOND_FACTOR_LIMIT_EXCEEDED:"maximum-second-factor-count-exceeded",BLOCKING_FUNCTION_ERROR_RESPONSE:"internal-error",RECAPTCHA_NOT_ENABLED:"recaptcha-not-enabled",MISSING_RECAPTCHA_TOKEN:"missing-recaptcha-token",INVALID_RECAPTCHA_TOKEN:"invalid-recaptcha-token",INVALID_RECAPTCHA_ACTION:"invalid-recaptcha-action",MISSING_CLIENT_TYPE:"missing-client-type",MISSING_RECAPTCHA_VERSION:"missing-recaptcha-version",INVALID_RECAPTCHA_VERSION:"invalid-recaptcha-version",INVALID_REQ_TYPE:"invalid-req-type"};/**
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
 */const Ww=["/v1/accounts:signInWithCustomToken","/v1/accounts:signInWithEmailLink","/v1/accounts:signInWithIdp","/v1/accounts:signInWithPassword","/v1/accounts:signInWithPhoneNumber","/v1/token"],zw=new Ss(3e4,6e4);function qe(n,e){return n.tenantId&&!e.tenantId?{...e,tenantId:n.tenantId}:e}async function $e(n,e,t,r,s={}){return cf(n,s,async()=>{let i={},a={};r&&(e==="GET"?a=r:i={body:JSON.stringify(r)});const c=tr({...a,key:n.config.apiKey}).slice(1),l=await n._getAdditionalHeaders();l["Content-Type"]="application/json",n.languageCode&&(l["X-Firebase-Locale"]=n.languageCode);const h={method:e,headers:l,...i};return bp()||(h.referrerPolicy="strict-origin-when-cross-origin"),n.emulatorConfig&&_s(n.emulatorConfig.host)&&(h.credentials="include"),af.fetch()(await uf(n,n.config.apiHost,t,c),h)})}async function cf(n,e,t){n._canInitEmulator=!1;const r={...jw,...e};try{const s=new Gw(n),i=await Promise.race([t(),s.promise]);s.clearNetworkTimeout();const a=await i.json();if("needConfirmation"in a)throw Ur(n,"account-exists-with-different-credential",a);if(i.ok&&!("errorMessage"in a))return a;{const c=i.ok?a.errorMessage:a.error.message,[l,h]=c.split(" : ");if(l==="FEDERATED_USER_ID_ALREADY_LINKED")throw Ur(n,"credential-already-in-use",a);if(l==="EMAIL_EXISTS")throw Ur(n,"email-already-in-use",a);if(l==="USER_DISABLED")throw Ur(n,"user-disabled",a);const f=r[l]||l.toLowerCase().replace(/[_\s]+/g,"-");if(h)throw pc(n,f,h);it(n,f)}}catch(s){if(s instanceof bt)throw s;it(n,"network-request-failed",{message:String(s)})}}async function kn(n,e,t,r,s={}){const i=await $e(n,e,t,r,s);return"mfaPendingCredential"in i&&it(n,"multi-factor-auth-required",{_serverResponse:i}),i}async function uf(n,e,t,r){const s=`${e}${t}?${r}`,i=n,a=i.config.emulator?gc(n.config,s):`${n.config.apiScheme}://${s}`;return Ww.includes(t)&&(await i._persistenceManagerAvailable,i._getPersistenceType()==="COOKIE")?i._getPersistence()._getFinalTarget(a).toString():a}function Hw(n){switch(n){case"ENFORCE":return"ENFORCE";case"AUDIT":return"AUDIT";case"OFF":return"OFF";default:return"ENFORCEMENT_STATE_UNSPECIFIED"}}class Gw{clearNetworkTimeout(){clearTimeout(this.timer)}constructor(e){this.auth=e,this.timer=null,this.promise=new Promise((t,r)=>{this.timer=setTimeout(()=>r(Qe(this.auth,"network-request-failed")),zw.get())})}}function Ur(n,e,t){const r={appName:n.name};t.email&&(r.email=t.email),t.phoneNumber&&(r.phoneNumber=t.phoneNumber);const s=Qe(n,e,r);return s.customData._tokenResponse=t,s}/**
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
 */function bl(n){return n!==void 0&&n.getResponse!==void 0}function Nl(n){return n!==void 0&&n.enterprise!==void 0}class lf{constructor(e){if(this.siteKey="",this.recaptchaEnforcementState=[],e.recaptchaKey===void 0)throw new Error("recaptchaKey undefined");this.siteKey=e.recaptchaKey.split("/")[3],this.recaptchaEnforcementState=e.recaptchaEnforcementState}getProviderEnforcementState(e){if(!this.recaptchaEnforcementState||this.recaptchaEnforcementState.length===0)return null;for(const t of this.recaptchaEnforcementState)if(t.provider&&t.provider===e)return Hw(t.enforcementState);return null}isProviderEnabled(e){return this.getProviderEnforcementState(e)==="ENFORCE"||this.getProviderEnforcementState(e)==="AUDIT"}isAnyProviderEnabled(){return this.isProviderEnabled("EMAIL_PASSWORD_PROVIDER")||this.isProviderEnabled("PHONE_PROVIDER")}}/**
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
 */async function Kw(n){return(await $e(n,"GET","/v1/recaptchaParams")).recaptchaSiteKey||""}async function hf(n,e){return $e(n,"GET","/v2/recaptchaConfig",qe(n,e))}/**
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
 */async function Qw(n,e){return $e(n,"POST","/v1/accounts:delete",e)}async function Vi(n,e){return $e(n,"POST","/v1/accounts:lookup",e)}/**
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
 */function Gr(n){if(n)try{const e=new Date(Number(n));if(!isNaN(e.getTime()))return e.toUTCString()}catch{}}async function Yw(n,e=!1){const t=ae(n),r=await t.getIdToken(e),s=_c(r);M(s&&s.exp&&s.auth_time&&s.iat,t.auth,"internal-error");const i=typeof s.firebase=="object"?s.firebase:void 0,a=i==null?void 0:i.sign_in_provider;return{claims:s,token:r,authTime:Gr($o(s.auth_time)),issuedAtTime:Gr($o(s.iat)),expirationTime:Gr($o(s.exp)),signInProvider:a||null,signInSecondFactor:(i==null?void 0:i.sign_in_second_factor)||null}}function $o(n){return Number(n)*1e3}function _c(n){const[e,t,r]=n.split(".");if(e===void 0||t===void 0||r===void 0)return ai("JWT malformed, contained fewer than 3 sections"),null;try{const s=eh(t);return s?JSON.parse(s):(ai("Failed to decode base64 JWT payload"),null)}catch(s){return ai("Caught error parsing JWT payload as JSON",s==null?void 0:s.toString()),null}}function kl(n){const e=_c(n);return M(e,"internal-error"),M(typeof e.exp<"u","internal-error"),M(typeof e.iat<"u","internal-error"),Number(e.exp)-Number(e.iat)}/**
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
 */async function Zn(n,e,t=!1){if(t)return e;try{return await e}catch(r){throw r instanceof bt&&Jw(r)&&n.auth.currentUser===n&&await n.auth.signOut(),r}}function Jw({code:n}){return n==="auth/user-disabled"||n==="auth/user-token-expired"}/**
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
 */class Xw{constructor(e){this.user=e,this.isRunning=!1,this.timerId=null,this.errorBackoff=3e4}_start(){this.isRunning||(this.isRunning=!0,this.schedule())}_stop(){this.isRunning&&(this.isRunning=!1,this.timerId!==null&&clearTimeout(this.timerId))}getInterval(e){if(e){const t=this.errorBackoff;return this.errorBackoff=Math.min(this.errorBackoff*2,96e4),t}else{this.errorBackoff=3e4;const r=(this.user.stsTokenManager.expirationTime??0)-Date.now()-3e5;return Math.max(0,r)}}schedule(e=!1){if(!this.isRunning)return;const t=this.getInterval(e);this.timerId=setTimeout(async()=>{await this.iteration()},t)}async iteration(){try{await this.user.getIdToken(!0)}catch(e){(e==null?void 0:e.code)==="auth/network-request-failed"&&this.schedule(!0);return}this.schedule()}}/**
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
 */class fa{constructor(e,t){this.createdAt=e,this.lastLoginAt=t,this._initializeTime()}_initializeTime(){this.lastSignInTime=Gr(this.lastLoginAt),this.creationTime=Gr(this.createdAt)}_copy(e){this.createdAt=e.createdAt,this.lastLoginAt=e.lastLoginAt,this._initializeTime()}toJSON(){return{createdAt:this.createdAt,lastLoginAt:this.lastLoginAt}}}/**
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
 */async function Ci(n){var m;const e=n.auth,t=await n.getIdToken(),r=await Zn(n,Vi(e,{idToken:t}));M(r==null?void 0:r.users.length,e,"internal-error");const s=r.users[0];n._notifyReloadListener(s);const i=(m=s.providerUserInfo)!=null&&m.length?df(s.providerUserInfo):[],a=eT(n.providerData,i),c=n.isAnonymous,l=!(n.email&&s.passwordHash)&&!(a!=null&&a.length),h=c?l:!1,f={uid:s.localId,displayName:s.displayName||null,photoURL:s.photoUrl||null,email:s.email||null,emailVerified:s.emailVerified||!1,phoneNumber:s.phoneNumber||null,tenantId:s.tenantId||null,providerData:a,metadata:new fa(s.createdAt,s.lastLoginAt),isAnonymous:h};Object.assign(n,f)}async function Zw(n){const e=ae(n);await Ci(e),await e.auth._persistUserIfCurrent(e),e.auth._notifyListenersIfCurrent(e)}function eT(n,e){return[...n.filter(r=>!e.some(s=>s.providerId===r.providerId)),...e]}function df(n){return n.map(({providerId:e,...t})=>({providerId:e,uid:t.rawId||"",displayName:t.displayName||null,email:t.email||null,phoneNumber:t.phoneNumber||null,photoURL:t.photoUrl||null}))}/**
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
 */async function tT(n,e){const t=await cf(n,{},async()=>{const r=tr({grant_type:"refresh_token",refresh_token:e}).slice(1),{tokenApiHost:s,apiKey:i}=n.config,a=await uf(n,s,"/v1/token",`key=${i}`),c=await n._getAdditionalHeaders();c["Content-Type"]="application/x-www-form-urlencoded";const l={method:"POST",headers:c,body:r};return n.emulatorConfig&&_s(n.emulatorConfig.host)&&(l.credentials="include"),af.fetch()(a,l)});return{accessToken:t.access_token,expiresIn:t.expires_in,refreshToken:t.refresh_token}}async function nT(n,e){return $e(n,"POST","/v2/accounts:revokeToken",qe(n,e))}/**
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
 */class jn{constructor(){this.refreshToken=null,this.accessToken=null,this.expirationTime=null}get isExpired(){return!this.expirationTime||Date.now()>this.expirationTime-3e4}updateFromServerResponse(e){M(e.idToken,"internal-error"),M(typeof e.idToken<"u","internal-error"),M(typeof e.refreshToken<"u","internal-error");const t="expiresIn"in e&&typeof e.expiresIn<"u"?Number(e.expiresIn):kl(e.idToken);this.updateTokensAndExpiration(e.idToken,e.refreshToken,t)}updateFromIdToken(e){M(e.length!==0,"internal-error");const t=kl(e);this.updateTokensAndExpiration(e,null,t)}async getToken(e,t=!1){return!t&&this.accessToken&&!this.isExpired?this.accessToken:(M(this.refreshToken,e,"user-token-expired"),this.refreshToken?(await this.refresh(e,this.refreshToken),this.accessToken):null)}clearRefreshToken(){this.refreshToken=null}async refresh(e,t){const{accessToken:r,refreshToken:s,expiresIn:i}=await tT(e,t);this.updateTokensAndExpiration(r,s,Number(i))}updateTokensAndExpiration(e,t,r){this.refreshToken=t||null,this.accessToken=e||null,this.expirationTime=Date.now()+r*1e3}static fromJSON(e,t){const{refreshToken:r,accessToken:s,expirationTime:i}=t,a=new jn;return r&&(M(typeof r=="string","internal-error",{appName:e}),a.refreshToken=r),s&&(M(typeof s=="string","internal-error",{appName:e}),a.accessToken=s),i&&(M(typeof i=="number","internal-error",{appName:e}),a.expirationTime=i),a}toJSON(){return{refreshToken:this.refreshToken,accessToken:this.accessToken,expirationTime:this.expirationTime}}_assign(e){this.accessToken=e.accessToken,this.refreshToken=e.refreshToken,this.expirationTime=e.expirationTime}_clone(){return Object.assign(new jn,this.toJSON())}_performRefresh(){return Tt("not implemented")}}/**
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
 */function Ut(n,e){M(typeof n=="string"||typeof n>"u","internal-error",{appName:e})}class tt{constructor({uid:e,auth:t,stsTokenManager:r,...s}){this.providerId="firebase",this.proactiveRefresh=new Xw(this),this.reloadUserInfo=null,this.reloadListener=null,this.uid=e,this.auth=t,this.stsTokenManager=r,this.accessToken=r.accessToken,this.displayName=s.displayName||null,this.email=s.email||null,this.emailVerified=s.emailVerified||!1,this.phoneNumber=s.phoneNumber||null,this.photoURL=s.photoURL||null,this.isAnonymous=s.isAnonymous||!1,this.tenantId=s.tenantId||null,this.providerData=s.providerData?[...s.providerData]:[],this.metadata=new fa(s.createdAt||void 0,s.lastLoginAt||void 0)}async getIdToken(e){const t=await Zn(this,this.stsTokenManager.getToken(this.auth,e));return M(t,this.auth,"internal-error"),this.accessToken!==t&&(this.accessToken=t,await this.auth._persistUserIfCurrent(this),this.auth._notifyListenersIfCurrent(this)),t}getIdTokenResult(e){return Yw(this,e)}reload(){return Zw(this)}_assign(e){this!==e&&(M(this.uid===e.uid,this.auth,"internal-error"),this.displayName=e.displayName,this.photoURL=e.photoURL,this.email=e.email,this.emailVerified=e.emailVerified,this.phoneNumber=e.phoneNumber,this.isAnonymous=e.isAnonymous,this.tenantId=e.tenantId,this.providerData=e.providerData.map(t=>({...t})),this.metadata._copy(e.metadata),this.stsTokenManager._assign(e.stsTokenManager))}_clone(e){const t=new tt({...this,auth:e,stsTokenManager:this.stsTokenManager._clone()});return t.metadata._copy(this.metadata),t}_onReload(e){M(!this.reloadListener,this.auth,"internal-error"),this.reloadListener=e,this.reloadUserInfo&&(this._notifyReloadListener(this.reloadUserInfo),this.reloadUserInfo=null)}_notifyReloadListener(e){this.reloadListener?this.reloadListener(e):this.reloadUserInfo=e}_startProactiveRefresh(){this.proactiveRefresh._start()}_stopProactiveRefresh(){this.proactiveRefresh._stop()}async _updateTokensIfNecessary(e,t=!1){let r=!1;e.idToken&&e.idToken!==this.stsTokenManager.accessToken&&(this.stsTokenManager.updateFromServerResponse(e),r=!0),t&&await Ci(this),await this.auth._persistUserIfCurrent(this),r&&this.auth._notifyListenersIfCurrent(this)}async delete(){if(Xe(this.auth.app))return Promise.reject(Rt(this.auth));const e=await this.getIdToken();return await Zn(this,Qw(this.auth,{idToken:e})),this.stsTokenManager.clearRefreshToken(),this.auth.signOut()}toJSON(){return{uid:this.uid,email:this.email||void 0,emailVerified:this.emailVerified,displayName:this.displayName||void 0,isAnonymous:this.isAnonymous,photoURL:this.photoURL||void 0,phoneNumber:this.phoneNumber||void 0,tenantId:this.tenantId||void 0,providerData:this.providerData.map(e=>({...e})),stsTokenManager:this.stsTokenManager.toJSON(),_redirectEventId:this._redirectEventId,...this.metadata.toJSON(),apiKey:this.auth.config.apiKey,appName:this.auth.name}}get refreshToken(){return this.stsTokenManager.refreshToken||""}static _fromJSON(e,t){const r=t.displayName??void 0,s=t.email??void 0,i=t.phoneNumber??void 0,a=t.photoURL??void 0,c=t.tenantId??void 0,l=t._redirectEventId??void 0,h=t.createdAt??void 0,f=t.lastLoginAt??void 0,{uid:m,emailVerified:E,isAnonymous:V,providerData:N,stsTokenManager:U}=t;M(m&&U,e,"internal-error");const L=jn.fromJSON(this.name,U);M(typeof m=="string",e,"internal-error"),Ut(r,e.name),Ut(s,e.name),M(typeof E=="boolean",e,"internal-error"),M(typeof V=="boolean",e,"internal-error"),Ut(i,e.name),Ut(a,e.name),Ut(c,e.name),Ut(l,e.name),Ut(h,e.name),Ut(f,e.name);const H=new tt({uid:m,auth:e,email:s,emailVerified:E,displayName:r,isAnonymous:V,photoURL:a,phoneNumber:i,tenantId:c,stsTokenManager:L,createdAt:h,lastLoginAt:f});return N&&Array.isArray(N)&&(H.providerData=N.map(J=>({...J}))),l&&(H._redirectEventId=l),H}static async _fromIdTokenResponse(e,t,r=!1){const s=new jn;s.updateFromServerResponse(t);const i=new tt({uid:t.localId,auth:e,stsTokenManager:s,isAnonymous:r});return await Ci(i),i}static async _fromGetAccountInfoResponse(e,t,r){const s=t.users[0];M(s.localId!==void 0,"internal-error");const i=s.providerUserInfo!==void 0?df(s.providerUserInfo):[],a=!(s.email&&s.passwordHash)&&!(i!=null&&i.length),c=new jn;c.updateFromIdToken(r);const l=new tt({uid:s.localId,auth:e,stsTokenManager:c,isAnonymous:a}),h={uid:s.localId,displayName:s.displayName||null,photoURL:s.photoUrl||null,email:s.email||null,emailVerified:s.emailVerified||!1,phoneNumber:s.phoneNumber||null,tenantId:s.tenantId||null,providerData:i,metadata:new fa(s.createdAt,s.lastLoginAt),isAnonymous:!(s.email&&s.passwordHash)&&!(i!=null&&i.length)};return Object.assign(l,h),l}}/**
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
 */const Dl=new Map;function It(n){Ct(n instanceof Function,"Expected a class definition");let e=Dl.get(n);return e?(Ct(e instanceof n,"Instance stored in cache mismatched with class"),e):(e=new n,Dl.set(n,e),e)}/**
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
 */class ff{constructor(){this.type="NONE",this.storage={}}async _isAvailable(){return!0}async _set(e,t){this.storage[e]=t}async _get(e){const t=this.storage[e];return t===void 0?null:t}async _remove(e){delete this.storage[e]}_addListener(e,t){}_removeListener(e,t){}}ff.type="NONE";const xl=ff;/**
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
 */function ci(n,e,t){return`firebase:${n}:${e}:${t}`}class vn{constructor(e,t,r){this.persistence=e,this.auth=t,this.userKey=r;const{config:s,name:i}=this.auth;this.fullUserKey=ci(this.userKey,s.apiKey,i),this.fullPersistenceKey=ci("persistence",s.apiKey,i),this.boundEventHandler=t._onStorageEvent.bind(t);try{this.persistence._addListener(this.fullUserKey,this.boundEventHandler)}catch{}}setCurrentUser(e){return this.persistence._set(this.fullUserKey,e.toJSON())}async getCurrentUser(){const e=await this.persistence._get(this.fullUserKey);if(!e)return null;if(typeof e=="string"){const t=await Vi(this.auth,{idToken:e}).catch(()=>{});return t?tt._fromGetAccountInfoResponse(this.auth,t,e):null}return tt._fromJSON(this.auth,e)}removeCurrentUser(){return this.persistence._remove(this.fullUserKey)}savePersistenceForRedirect(){return this.persistence._set(this.fullPersistenceKey,this.persistence.type)}async setPersistence(e){if(this.persistence===e)return;const t=await this.getCurrentUser();if(await this.removeCurrentUser(),this.persistence=e,t)return this.setCurrentUser(t)}delete(){try{this.persistence._removeListener(this.fullUserKey,this.boundEventHandler)}catch{}}static async create(e,t,r="authUser"){if(!t.length)return new vn(It(xl),e,r);const s=(await Promise.all(t.map(async h=>{try{if(await h._isAvailable())return h}catch{return}}))).filter(h=>h);let i=s[0]||It(xl);const a=ci(r,e.config.apiKey,e.name);let c=null;for(const h of t)try{const f=await h._get(a);if(f){let m;if(typeof f=="string"){const E=await Vi(e,{idToken:f}).catch(()=>{});if(!E)break;m=await tt._fromGetAccountInfoResponse(e,E,f)}else m=tt._fromJSON(e,f);h!==i&&(c=m),i=h;break}}catch{}const l=s.filter(h=>h._shouldAllowMigration);return!i._shouldAllowMigration||!l.length?new vn(i,e,r):(i=l[0],c&&await i._set(a,c.toJSON()),await Promise.all(t.map(async h=>{if(h!==i)try{await h._remove(a)}catch{}})),new vn(i,e,r))}}/**
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
 */function Ol(n){const e=n.toLowerCase();if(e.includes("opera/")||e.includes("opr/")||e.includes("opios/"))return"Opera";if(_f(e))return"IEMobile";if(e.includes("msie")||e.includes("trident/"))return"IE";if(e.includes("edge/"))return"Edge";if(pf(e))return"Firefox";if(e.includes("silk/"))return"Silk";if(Ef(e))return"Blackberry";if(wf(e))return"Webos";if(mf(e))return"Safari";if((e.includes("chrome/")||gf(e))&&!e.includes("edge/"))return"Chrome";if(yf(e))return"Android";{const t=/([a-zA-Z\d\.]+)\/[a-zA-Z\d\.]*$/,r=n.match(t);if((r==null?void 0:r.length)===2)return r[1]}return"Other"}function pf(n=Ve()){return/firefox\//i.test(n)}function mf(n=Ve()){const e=n.toLowerCase();return e.includes("safari/")&&!e.includes("chrome/")&&!e.includes("crios/")&&!e.includes("android")}function gf(n=Ve()){return/crios\//i.test(n)}function _f(n=Ve()){return/iemobile/i.test(n)}function yf(n=Ve()){return/android/i.test(n)}function Ef(n=Ve()){return/blackberry/i.test(n)}function wf(n=Ve()){return/webos/i.test(n)}function yc(n=Ve()){return/iphone|ipad|ipod/i.test(n)||/macintosh/i.test(n)&&/mobile/i.test(n)}function rT(n=Ve()){var e;return yc(n)&&!!((e=window.navigator)!=null&&e.standalone)}function sT(){return Dp()&&document.documentMode===10}function Tf(n=Ve()){return yc(n)||yf(n)||wf(n)||Ef(n)||/windows phone/i.test(n)||_f(n)}/**
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
 */function If(n,e=[]){let t;switch(n){case"Browser":t=Ol(Ve());break;case"Worker":t=`${Ol(Ve())}-${n}`;break;default:t=n}const r=e.length?e.join(","):"FirebaseCore-web";return`${t}/JsCore/${nr}/${r}`}/**
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
 */class iT{constructor(e){this.auth=e,this.queue=[]}pushCallback(e,t){const r=i=>new Promise((a,c)=>{try{const l=e(i);a(l)}catch(l){c(l)}});r.onAbort=t,this.queue.push(r);const s=this.queue.length-1;return()=>{this.queue[s]=()=>Promise.resolve()}}async runMiddleware(e){if(this.auth.currentUser===e)return;const t=[];try{for(const r of this.queue)await r(e),r.onAbort&&t.push(r.onAbort)}catch(r){t.reverse();for(const s of t)try{s()}catch{}throw this.auth._errorFactory.create("login-blocked",{originalMessage:r==null?void 0:r.message})}}}/**
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
 */async function oT(n,e={}){return $e(n,"GET","/v2/passwordPolicy",qe(n,e))}/**
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
 */const aT=6;class cT{constructor(e){var r;const t=e.customStrengthOptions;this.customStrengthOptions={},this.customStrengthOptions.minPasswordLength=t.minPasswordLength??aT,t.maxPasswordLength&&(this.customStrengthOptions.maxPasswordLength=t.maxPasswordLength),t.containsLowercaseCharacter!==void 0&&(this.customStrengthOptions.containsLowercaseLetter=t.containsLowercaseCharacter),t.containsUppercaseCharacter!==void 0&&(this.customStrengthOptions.containsUppercaseLetter=t.containsUppercaseCharacter),t.containsNumericCharacter!==void 0&&(this.customStrengthOptions.containsNumericCharacter=t.containsNumericCharacter),t.containsNonAlphanumericCharacter!==void 0&&(this.customStrengthOptions.containsNonAlphanumericCharacter=t.containsNonAlphanumericCharacter),this.enforcementState=e.enforcementState,this.enforcementState==="ENFORCEMENT_STATE_UNSPECIFIED"&&(this.enforcementState="OFF"),this.allowedNonAlphanumericCharacters=((r=e.allowedNonAlphanumericCharacters)==null?void 0:r.join(""))??"",this.forceUpgradeOnSignin=e.forceUpgradeOnSignin??!1,this.schemaVersion=e.schemaVersion}validatePassword(e){const t={isValid:!0,passwordPolicy:this};return this.validatePasswordLengthOptions(e,t),this.validatePasswordCharacterOptions(e,t),t.isValid&&(t.isValid=t.meetsMinPasswordLength??!0),t.isValid&&(t.isValid=t.meetsMaxPasswordLength??!0),t.isValid&&(t.isValid=t.containsLowercaseLetter??!0),t.isValid&&(t.isValid=t.containsUppercaseLetter??!0),t.isValid&&(t.isValid=t.containsNumericCharacter??!0),t.isValid&&(t.isValid=t.containsNonAlphanumericCharacter??!0),t}validatePasswordLengthOptions(e,t){const r=this.customStrengthOptions.minPasswordLength,s=this.customStrengthOptions.maxPasswordLength;r&&(t.meetsMinPasswordLength=e.length>=r),s&&(t.meetsMaxPasswordLength=e.length<=s)}validatePasswordCharacterOptions(e,t){this.updatePasswordCharacterOptionsStatuses(t,!1,!1,!1,!1);let r;for(let s=0;s<e.length;s++)r=e.charAt(s),this.updatePasswordCharacterOptionsStatuses(t,r>="a"&&r<="z",r>="A"&&r<="Z",r>="0"&&r<="9",this.allowedNonAlphanumericCharacters.includes(r))}updatePasswordCharacterOptionsStatuses(e,t,r,s,i){this.customStrengthOptions.containsLowercaseLetter&&(e.containsLowercaseLetter||(e.containsLowercaseLetter=t)),this.customStrengthOptions.containsUppercaseLetter&&(e.containsUppercaseLetter||(e.containsUppercaseLetter=r)),this.customStrengthOptions.containsNumericCharacter&&(e.containsNumericCharacter||(e.containsNumericCharacter=s)),this.customStrengthOptions.containsNonAlphanumericCharacter&&(e.containsNonAlphanumericCharacter||(e.containsNonAlphanumericCharacter=i))}}/**
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
 */class uT{constructor(e,t,r,s){this.app=e,this.heartbeatServiceProvider=t,this.appCheckServiceProvider=r,this.config=s,this.currentUser=null,this.emulatorConfig=null,this.operations=Promise.resolve(),this.authStateSubscription=new Ll(this),this.idTokenSubscription=new Ll(this),this.beforeStateQueue=new iT(this),this.redirectUser=null,this.isProactiveRefreshEnabled=!1,this.EXPECTED_PASSWORD_POLICY_SCHEMA_VERSION=1,this._canInitEmulator=!0,this._isInitialized=!1,this._deleted=!1,this._initializationPromise=null,this._popupRedirectResolver=null,this._errorFactory=sf,this._agentRecaptchaConfig=null,this._tenantRecaptchaConfigs={},this._projectPasswordPolicy=null,this._tenantPasswordPolicies={},this._resolvePersistenceManagerAvailable=void 0,this.lastNotifiedUid=void 0,this.languageCode=null,this.tenantId=null,this.settings={appVerificationDisabledForTesting:!1},this.frameworks=[],this.name=e.name,this.clientVersion=s.sdkClientVersion,this._persistenceManagerAvailable=new Promise(i=>this._resolvePersistenceManagerAvailable=i)}_initializeWithPersistence(e,t){return t&&(this._popupRedirectResolver=It(t)),this._initializationPromise=this.queue(async()=>{var r,s,i;if(!this._deleted){try{this.persistenceManager=await vn.create(this,e)}catch(a){oi(`Failed to initialize persistence: ${a}`),this.persistenceManager=await vn.create(this,[])}finally{(r=this._resolvePersistenceManagerAvailable)==null||r.call(this)}if(!this._deleted){if((s=this._popupRedirectResolver)!=null&&s._shouldInitProactively)try{await this._popupRedirectResolver._initialize(this)}catch{}try{await this.initializeCurrentUser(t)}catch(a){oi(`Failed to initialize current user: ${a}`),await this.directlySetCurrentUser(null).catch(()=>{})}this.lastNotifiedUid=((i=this.currentUser)==null?void 0:i.uid)||null,!this._deleted&&(this._isInitialized=!0)}}}),this._initializationPromise}async _onStorageEvent(){if(this._deleted)return;const e=await this.assertedPersistence.getCurrentUser();if(!(!this.currentUser&&!e)){if(this.currentUser&&e&&this.currentUser.uid===e.uid){this._currentUser._assign(e),await this.currentUser.getIdToken();return}await this._updateCurrentUser(e,!0)}}async initializeCurrentUserFromIdToken(e){try{const t=await Vi(this,{idToken:e}),r=await tt._fromGetAccountInfoResponse(this,t,e);await this.directlySetCurrentUser(r)}catch(t){console.warn("FirebaseServerApp could not login user with provided authIdToken: ",t),await this.directlySetCurrentUser(null)}}async initializeCurrentUser(e){var i;if(Xe(this.app)){const a=this.app.settings.authIdToken;return a?new Promise(c=>{setTimeout(()=>this.initializeCurrentUserFromIdToken(a).then(c,c))}):this.directlySetCurrentUser(null)}const t=await this.assertedPersistence.getCurrentUser();let r=t,s=!1;if(e&&this.config.authDomain){await this.getOrInitRedirectPersistenceManager();const a=(i=this.redirectUser)==null?void 0:i._redirectEventId,c=r==null?void 0:r._redirectEventId,l=await this.tryRedirectSignIn(e);(!a||a===c)&&(l!=null&&l.user)&&(r=l.user,s=!0)}if(!r)return this.directlySetCurrentUser(null);if(!r._redirectEventId){if(s)try{await this.beforeStateQueue.runMiddleware(r)}catch(a){r=t,this._popupRedirectResolver._overrideRedirectResult(this,()=>Promise.reject(a))}return r?this.reloadAndSetCurrentUserOrClear(r):this.directlySetCurrentUser(null)}return M(this._popupRedirectResolver,this,"argument-error"),await this.getOrInitRedirectPersistenceManager(),this.redirectUser&&this.redirectUser._redirectEventId===r._redirectEventId?this.directlySetCurrentUser(r):this.reloadAndSetCurrentUserOrClear(r)}async tryRedirectSignIn(e){let t=null;try{t=await this._popupRedirectResolver._completeRedirectFn(this,e,!0)}catch{await this._setRedirectUser(null)}return t}async reloadAndSetCurrentUserOrClear(e){try{await Ci(e)}catch(t){if((t==null?void 0:t.code)!=="auth/network-request-failed")return this.directlySetCurrentUser(null)}return this.directlySetCurrentUser(e)}useDeviceLanguage(){this.languageCode=$w()}async _delete(){this._deleted=!0}async updateCurrentUser(e){if(Xe(this.app))return Promise.reject(Rt(this));const t=e?ae(e):null;return t&&M(t.auth.config.apiKey===this.config.apiKey,this,"invalid-user-token"),this._updateCurrentUser(t&&t._clone(this))}async _updateCurrentUser(e,t=!1){if(!this._deleted)return e&&M(this.tenantId===e.tenantId,this,"tenant-id-mismatch"),t||await this.beforeStateQueue.runMiddleware(e),this.queue(async()=>{await this.directlySetCurrentUser(e),this.notifyAuthListeners()})}async signOut(){return Xe(this.app)?Promise.reject(Rt(this)):(await this.beforeStateQueue.runMiddleware(null),(this.redirectPersistenceManager||this._popupRedirectResolver)&&await this._setRedirectUser(null),this._updateCurrentUser(null,!0))}setPersistence(e){return Xe(this.app)?Promise.reject(Rt(this)):this.queue(async()=>{await this.assertedPersistence.setPersistence(It(e))})}_getRecaptchaConfig(){return this.tenantId==null?this._agentRecaptchaConfig:this._tenantRecaptchaConfigs[this.tenantId]}async validatePassword(e){this._getPasswordPolicyInternal()||await this._updatePasswordPolicy();const t=this._getPasswordPolicyInternal();return t.schemaVersion!==this.EXPECTED_PASSWORD_POLICY_SCHEMA_VERSION?Promise.reject(this._errorFactory.create("unsupported-password-policy-schema-version",{})):t.validatePassword(e)}_getPasswordPolicyInternal(){return this.tenantId===null?this._projectPasswordPolicy:this._tenantPasswordPolicies[this.tenantId]}async _updatePasswordPolicy(){const e=await oT(this),t=new cT(e);this.tenantId===null?this._projectPasswordPolicy=t:this._tenantPasswordPolicies[this.tenantId]=t}_getPersistenceType(){return this.assertedPersistence.persistence.type}_getPersistence(){return this.assertedPersistence.persistence}_updateErrorMap(e){this._errorFactory=new gs("auth","Firebase",e())}onAuthStateChanged(e,t,r){return this.registerStateListener(this.authStateSubscription,e,t,r)}beforeAuthStateChanged(e,t){return this.beforeStateQueue.pushCallback(e,t)}onIdTokenChanged(e,t,r){return this.registerStateListener(this.idTokenSubscription,e,t,r)}authStateReady(){return new Promise((e,t)=>{if(this.currentUser)e();else{const r=this.onAuthStateChanged(()=>{r(),e()},t)}})}async revokeAccessToken(e){if(this.currentUser){const t=await this.currentUser.getIdToken(),r={providerId:"apple.com",tokenType:"ACCESS_TOKEN",token:e,idToken:t};this.tenantId!=null&&(r.tenantId=this.tenantId),await nT(this,r)}}toJSON(){var e;return{apiKey:this.config.apiKey,authDomain:this.config.authDomain,appName:this.name,currentUser:(e=this._currentUser)==null?void 0:e.toJSON()}}async _setRedirectUser(e,t){const r=await this.getOrInitRedirectPersistenceManager(t);return e===null?r.removeCurrentUser():r.setCurrentUser(e)}async getOrInitRedirectPersistenceManager(e){if(!this.redirectPersistenceManager){const t=e&&It(e)||this._popupRedirectResolver;M(t,this,"argument-error"),this.redirectPersistenceManager=await vn.create(this,[It(t._redirectPersistence)],"redirectUser"),this.redirectUser=await this.redirectPersistenceManager.getCurrentUser()}return this.redirectPersistenceManager}async _redirectUserForId(e){var t,r;return this._isInitialized&&await this.queue(async()=>{}),((t=this._currentUser)==null?void 0:t._redirectEventId)===e?this._currentUser:((r=this.redirectUser)==null?void 0:r._redirectEventId)===e?this.redirectUser:null}async _persistUserIfCurrent(e){if(e===this.currentUser)return this.queue(async()=>this.directlySetCurrentUser(e))}_notifyListenersIfCurrent(e){e===this.currentUser&&this.notifyAuthListeners()}_key(){return`${this.config.authDomain}:${this.config.apiKey}:${this.name}`}_startProactiveRefresh(){this.isProactiveRefreshEnabled=!0,this.currentUser&&this._currentUser._startProactiveRefresh()}_stopProactiveRefresh(){this.isProactiveRefreshEnabled=!1,this.currentUser&&this._currentUser._stopProactiveRefresh()}get _currentUser(){return this.currentUser}notifyAuthListeners(){var t;if(!this._isInitialized)return;this.idTokenSubscription.next(this.currentUser);const e=((t=this.currentUser)==null?void 0:t.uid)??null;this.lastNotifiedUid!==e&&(this.lastNotifiedUid=e,this.authStateSubscription.next(this.currentUser))}registerStateListener(e,t,r,s){if(this._deleted)return()=>{};const i=typeof t=="function"?t:t.next.bind(t);let a=!1;const c=this._isInitialized?Promise.resolve():this._initializationPromise;if(M(c,this,"internal-error"),c.then(()=>{a||i(this.currentUser)}).catch(l=>{if(!a)if(typeof t!="function"&&t.error)t.error(l);else if(r)r(l);else throw l}),typeof t=="function"){const l=e.addObserver(t,r,s);return()=>{a=!0,l()}}else{const l=e.addObserver(t);return()=>{a=!0,l()}}}async directlySetCurrentUser(e){if(this.currentUser&&this.currentUser!==e&&this._currentUser._stopProactiveRefresh(),e&&this.isProactiveRefreshEnabled&&e._startProactiveRefresh(),this.currentUser=e,this.persistenceManager)try{e?await this.persistenceManager.setCurrentUser(e):await this.persistenceManager.removeCurrentUser()}catch(t){const r=(t==null?void 0:t.message)||String(t),s=pc(this,"internal-error",`An internal AuthError has occurred: ${r}`);throw s.customData={originalError:t},s}}queue(e){return this.operations=this.operations.then(e,e),this.operations}get assertedPersistence(){return M(this.persistenceManager,this,"internal-error"),this.persistenceManager}_logFramework(e){!e||this.frameworks.includes(e)||(this.frameworks.push(e),this.frameworks.sort(),this.clientVersion=If(this.config.clientPlatform,this._getFrameworks()))}_getFrameworks(){return this.frameworks}async _getAdditionalHeaders(){var s;const e={"X-Client-Version":this.clientVersion};this.app.options.appId&&(e["X-Firebase-gmpid"]=this.app.options.appId);const t=await((s=this.heartbeatServiceProvider.getImmediate({optional:!0}))==null?void 0:s.getHeartbeatsHeader());t&&(e["X-Firebase-Client"]=t);const r=await this._getAppCheckToken();return r&&(e["X-Firebase-AppCheck"]=r),e}async _getAppCheckToken(){var t;if(Xe(this.app)&&this.app.settings.appCheckToken)return this.app.settings.appCheckToken;const e=await((t=this.appCheckServiceProvider.getImmediate({optional:!0}))==null?void 0:t.getToken());return e!=null&&e.error&&oi(`Error while retrieving App Check token: ${e.error}`),e==null?void 0:e.token}}function gt(n){return ae(n)}class Ll{constructor(e){this.auth=e,this.observer=null,this.addObserver=Bp(t=>this.observer=t)}get next(){return M(this.observer,this.auth,"internal-error"),this.observer.next.bind(this.observer)}}/**
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
 */let Vs={async loadJS(){throw new Error("Unable to load external scripts")},recaptchaV2Script:"",recaptchaEnterpriseScript:"",gapiScript:""};function lT(n){Vs=n}function Ec(n){return Vs.loadJS(n)}function hT(){return Vs.recaptchaV2Script}function dT(){return Vs.recaptchaEnterpriseScript}function fT(){return Vs.gapiScript}function vf(n){return`__${n}${Math.floor(Math.random()*1e6)}`}/**
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
 */const pT=500,mT=6e4,Xs=1e12;class gT{constructor(e){this.auth=e,this.counter=Xs,this._widgets=new Map}render(e,t){const r=this.counter;return this._widgets.set(r,new ET(e,this.auth.name,t||{})),this.counter++,r}reset(e){var r;const t=e||Xs;(r=this._widgets.get(t))==null||r.delete(),this._widgets.delete(t)}getResponse(e){var r;const t=e||Xs;return((r=this._widgets.get(t))==null?void 0:r.getResponse())||""}async execute(e){var r;const t=e||Xs;return(r=this._widgets.get(t))==null||r.execute(),""}}class _T{constructor(){this.enterprise=new yT}ready(e){e()}execute(e,t){return Promise.resolve("token")}render(e,t){return""}}class yT{ready(e){e()}execute(e,t){return Promise.resolve("token")}render(e,t){return""}}class ET{constructor(e,t,r){this.params=r,this.timerId=null,this.deleted=!1,this.responseToken=null,this.clickHandler=()=>{this.execute()};const s=typeof e=="string"?document.getElementById(e):e;M(s,"argument-error",{appName:t}),this.container=s,this.isVisible=this.params.size!=="invisible",this.isVisible?this.execute():this.container.addEventListener("click",this.clickHandler)}getResponse(){return this.checkIfDeleted(),this.responseToken}delete(){this.checkIfDeleted(),this.deleted=!0,this.timerId&&(clearTimeout(this.timerId),this.timerId=null),this.container.removeEventListener("click",this.clickHandler)}execute(){this.checkIfDeleted(),!this.timerId&&(this.timerId=window.setTimeout(()=>{this.responseToken=wT(50);const{callback:e,"expired-callback":t}=this.params;if(e)try{e(this.responseToken)}catch{}this.timerId=window.setTimeout(()=>{if(this.timerId=null,this.responseToken=null,t)try{t()}catch{}this.isVisible&&this.execute()},mT)},pT))}checkIfDeleted(){if(this.deleted)throw new Error("reCAPTCHA mock was already deleted!")}}function wT(n){const e=[],t="1234567890abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ";for(let r=0;r<n;r++)e.push(t.charAt(Math.floor(Math.random()*t.length)));return e.join("")}/**
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
 */const TT="recaptcha-enterprise",Kr="NO_RECAPTCHA",Ml="onFirebaseAuthREInstanceReady";class _t{constructor(e){this.type=TT,this.auth=gt(e)}async verify(e="verify",t=!1){async function r(i){if(!t){if(i.tenantId==null&&i._agentRecaptchaConfig!=null)return i._agentRecaptchaConfig.siteKey;if(i.tenantId!=null&&i._tenantRecaptchaConfigs[i.tenantId]!==void 0)return i._tenantRecaptchaConfigs[i.tenantId].siteKey}return new Promise(async(a,c)=>{hf(i,{clientType:"CLIENT_TYPE_WEB",version:"RECAPTCHA_ENTERPRISE"}).then(l=>{if(l.recaptchaKey===void 0)c(new Error("recaptcha Enterprise site key undefined"));else{const h=new lf(l);return i.tenantId==null?i._agentRecaptchaConfig=h:i._tenantRecaptchaConfigs[i.tenantId]=h,a(h.siteKey)}}).catch(l=>{c(l)})})}function s(i,a,c){const l=window.grecaptcha;Nl(l)?l.enterprise.ready(()=>{l.enterprise.execute(i,{action:e}).then(h=>{a(h)}).catch(()=>{a(Kr)})}):c(Error("No reCAPTCHA enterprise script loaded."))}return this.auth.settings.appVerificationDisabledForTesting?new _T().execute("siteKey",{action:"verify"}):new Promise((i,a)=>{r(this.auth).then(async c=>{if(!t&&Nl(window.grecaptcha)&&_t.scriptInjectionDeferred)await _t.scriptInjectionDeferred.promise,s(c,i,a);else{if(typeof window>"u"){a(new Error("RecaptchaVerifier is only supported in browser"));return}let l=dT();l.length!==0&&(l+=c+`&onload=${Ml}`),_t.scriptInjectionDeferred=new sh,window[Ml]=()=>{var h;(h=_t.scriptInjectionDeferred)==null||h.resolve()},Ec(l).then(()=>{var h;return(h=_t.scriptInjectionDeferred)==null?void 0:h.promise}).then(()=>{s(c,i,a)}).catch(h=>{a(h)})}}).catch(c=>{a(c)})})}}_t.scriptInjectionDeferred=null;async function Nr(n,e,t,r=!1,s=!1){const i=new _t(n);let a;if(s)a=Kr;else try{a=await i.verify(t)}catch{a=await i.verify(t,!0)}const c={...e};if(t==="mfaSmsEnrollment"||t==="mfaSmsSignIn"){if("phoneEnrollmentInfo"in c){const l=c.phoneEnrollmentInfo.phoneNumber,h=c.phoneEnrollmentInfo.recaptchaToken;Object.assign(c,{phoneEnrollmentInfo:{phoneNumber:l,recaptchaToken:h,captchaResponse:a,clientType:"CLIENT_TYPE_WEB",recaptchaVersion:"RECAPTCHA_ENTERPRISE"}})}else if("phoneSignInInfo"in c){const l=c.phoneSignInInfo.recaptchaToken;Object.assign(c,{phoneSignInInfo:{recaptchaToken:l,captchaResponse:a,clientType:"CLIENT_TYPE_WEB",recaptchaVersion:"RECAPTCHA_ENTERPRISE"}})}return c}return r?Object.assign(c,{captchaResp:a}):Object.assign(c,{captchaResponse:a}),Object.assign(c,{clientType:"CLIENT_TYPE_WEB"}),Object.assign(c,{recaptchaVersion:"RECAPTCHA_ENTERPRISE"}),c}async function Wn(n,e,t,r,s){var i,a;if(s==="EMAIL_PASSWORD_PROVIDER")if((i=n._getRecaptchaConfig())!=null&&i.isProviderEnabled("EMAIL_PASSWORD_PROVIDER")){const c=await Nr(n,e,t,t==="getOobCode");return r(n,c)}else return r(n,e).catch(async c=>{if(c.code==="auth/missing-recaptcha-token"){console.log(`${t} is protected by reCAPTCHA Enterprise for this project. Automatically triggering the reCAPTCHA flow and restarting the flow.`);const l=await Nr(n,e,t,t==="getOobCode");return r(n,l)}else return Promise.reject(c)});else if(s==="PHONE_PROVIDER")if((a=n._getRecaptchaConfig())!=null&&a.isProviderEnabled("PHONE_PROVIDER")){const c=await Nr(n,e,t);return r(n,c).catch(async l=>{var h;if(((h=n._getRecaptchaConfig())==null?void 0:h.getProviderEnforcementState("PHONE_PROVIDER"))==="AUDIT"&&(l.code==="auth/missing-recaptcha-token"||l.code==="auth/invalid-app-credential")){console.log(`Failed to verify with reCAPTCHA Enterprise. Automatically triggering the reCAPTCHA v2 flow to complete the ${t} flow.`);const f=await Nr(n,e,t,!1,!0);return r(n,f)}return Promise.reject(l)})}else{const c=await Nr(n,e,t,!1,!0);return r(n,c)}else return Promise.reject(s+" provider is not supported.")}async function IT(n){const e=gt(n),t=await hf(e,{clientType:"CLIENT_TYPE_WEB",version:"RECAPTCHA_ENTERPRISE"}),r=new lf(t);e.tenantId==null?e._agentRecaptchaConfig=r:e._tenantRecaptchaConfigs[e.tenantId]=r,r.isAnyProviderEnabled()&&new _t(e).verify()}/**
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
 */function vT(n,e){const t=ga(n,"auth");if(t.isInitialized()){const s=t.getImmediate(),i=t.getOptions();if(An(i,e??{}))return s;it(s,"already-initialized")}return t.initialize({options:e})}function AT(n,e){const t=(e==null?void 0:e.persistence)||[],r=(Array.isArray(t)?t:[t]).map(It);e!=null&&e.errorMap&&n._updateErrorMap(e.errorMap),n._initializeWithPersistence(r,e==null?void 0:e.popupRedirectResolver)}function RT(n,e,t){const r=gt(n);M(/^https?:\/\//.test(e),r,"invalid-emulator-scheme");const s=!1,i=Af(e),{host:a,port:c}=PT(e),l=c===null?"":`:${c}`,h={url:`${i}//${a}${l}/`},f=Object.freeze({host:a,port:c,protocol:i.replace(":",""),options:Object.freeze({disableWarnings:s})});if(!r._canInitEmulator){M(r.config.emulator&&r.emulatorConfig,r,"emulator-config-failed"),M(An(h,r.config.emulator)&&An(f,r.emulatorConfig),r,"emulator-config-failed");return}r.config.emulator=h,r.emulatorConfig=f,r.settings.appVerificationDisabledForTesting=!0,_s(a)?ih(`${i}//${a}${l}`):ST()}function Af(n){const e=n.indexOf(":");return e<0?"":n.substr(0,e+1)}function PT(n){const e=Af(n),t=/(\/\/)?([^?#/]+)/.exec(n.substr(e.length));if(!t)return{host:"",port:null};const r=t[2].split("@").pop()||"",s=/^(\[[^\]]+\])(:|$)/.exec(r);if(s){const i=s[1];return{host:i,port:Ul(r.substr(i.length+1))}}else{const[i,a]=r.split(":");return{host:i,port:Ul(a)}}}function Ul(n){if(!n)return null;const e=Number(n);return isNaN(e)?null:e}function ST(){function n(){const e=document.createElement("p"),t=e.style;e.innerText="Running in emulator mode. Do not use with production credentials.",t.position="fixed",t.width="100%",t.backgroundColor="#ffffff",t.border=".1em solid #000000",t.color="#b50000",t.bottom="0px",t.left="0px",t.margin="0px",t.zIndex="10000",t.textAlign="center",e.classList.add("firebase-emulator-warning"),document.body.appendChild(e)}typeof console<"u"&&typeof console.info=="function"&&console.info("WARNING: You are using the Auth Emulator, which is intended for local testing only.  Do not use with production credentials."),typeof window<"u"&&typeof document<"u"&&(document.readyState==="loading"?window.addEventListener("DOMContentLoaded",n):n())}/**
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
 */class io{constructor(e,t){this.providerId=e,this.signInMethod=t}toJSON(){return Tt("not implemented")}_getIdTokenResponse(e){return Tt("not implemented")}_linkToIdToken(e,t){return Tt("not implemented")}_getReauthenticationResolver(e){return Tt("not implemented")}}async function VT(n,e){return $e(n,"POST","/v1/accounts:signUp",e)}/**
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
 */async function CT(n,e){return kn(n,"POST","/v1/accounts:signInWithPassword",qe(n,e))}async function bT(n,e){return $e(n,"POST","/v1/accounts:sendOobCode",qe(n,e))}async function NT(n,e){return bT(n,e)}/**
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
 */async function kT(n,e){return kn(n,"POST","/v1/accounts:signInWithEmailLink",qe(n,e))}async function DT(n,e){return kn(n,"POST","/v1/accounts:signInWithEmailLink",qe(n,e))}/**
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
 */class ms extends io{constructor(e,t,r,s=null){super("password",r),this._email=e,this._password=t,this._tenantId=s}static _fromEmailAndPassword(e,t){return new ms(e,t,"password")}static _fromEmailAndCode(e,t,r=null){return new ms(e,t,"emailLink",r)}toJSON(){return{email:this._email,password:this._password,signInMethod:this.signInMethod,tenantId:this._tenantId}}static fromJSON(e){const t=typeof e=="string"?JSON.parse(e):e;if(t!=null&&t.email&&(t!=null&&t.password)){if(t.signInMethod==="password")return this._fromEmailAndPassword(t.email,t.password);if(t.signInMethod==="emailLink")return this._fromEmailAndCode(t.email,t.password,t.tenantId)}return null}async _getIdTokenResponse(e){switch(this.signInMethod){case"password":const t={returnSecureToken:!0,email:this._email,password:this._password,clientType:"CLIENT_TYPE_WEB"};return Wn(e,t,"signInWithPassword",CT,"EMAIL_PASSWORD_PROVIDER");case"emailLink":return kT(e,{email:this._email,oobCode:this._password});default:it(e,"internal-error")}}async _linkToIdToken(e,t){switch(this.signInMethod){case"password":const r={idToken:t,returnSecureToken:!0,email:this._email,password:this._password,clientType:"CLIENT_TYPE_WEB"};return Wn(e,r,"signUpPassword",VT,"EMAIL_PASSWORD_PROVIDER");case"emailLink":return DT(e,{idToken:t,email:this._email,oobCode:this._password});default:it(e,"internal-error")}}_getReauthenticationResolver(e){return this._getIdTokenResponse(e)}}/**
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
 */async function zn(n,e){return kn(n,"POST","/v1/accounts:signInWithIdp",qe(n,e))}/**
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
 */const xT="http://localhost";class Vn extends io{constructor(){super(...arguments),this.pendingToken=null}static _fromParams(e){const t=new Vn(e.providerId,e.signInMethod);return e.idToken||e.accessToken?(e.idToken&&(t.idToken=e.idToken),e.accessToken&&(t.accessToken=e.accessToken),e.nonce&&!e.pendingToken&&(t.nonce=e.nonce),e.pendingToken&&(t.pendingToken=e.pendingToken)):e.oauthToken&&e.oauthTokenSecret?(t.accessToken=e.oauthToken,t.secret=e.oauthTokenSecret):it("argument-error"),t}toJSON(){return{idToken:this.idToken,accessToken:this.accessToken,secret:this.secret,nonce:this.nonce,pendingToken:this.pendingToken,providerId:this.providerId,signInMethod:this.signInMethod}}static fromJSON(e){const t=typeof e=="string"?JSON.parse(e):e,{providerId:r,signInMethod:s,...i}=t;if(!r||!s)return null;const a=new Vn(r,s);return a.idToken=i.idToken||void 0,a.accessToken=i.accessToken||void 0,a.secret=i.secret,a.nonce=i.nonce,a.pendingToken=i.pendingToken||null,a}_getIdTokenResponse(e){const t=this.buildRequest();return zn(e,t)}_linkToIdToken(e,t){const r=this.buildRequest();return r.idToken=t,zn(e,r)}_getReauthenticationResolver(e){const t=this.buildRequest();return t.autoCreate=!1,zn(e,t)}buildRequest(){const e={requestUri:xT,returnSecureToken:!0};if(this.pendingToken)e.pendingToken=this.pendingToken;else{const t={};this.idToken&&(t.id_token=this.idToken),this.accessToken&&(t.access_token=this.accessToken),this.secret&&(t.oauth_token_secret=this.secret),t.providerId=this.providerId,this.nonce&&!this.pendingToken&&(t.nonce=this.nonce),e.postBody=tr(t)}return e}}/**
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
 */async function Fl(n,e){return $e(n,"POST","/v1/accounts:sendVerificationCode",qe(n,e))}async function OT(n,e){return kn(n,"POST","/v1/accounts:signInWithPhoneNumber",qe(n,e))}async function LT(n,e){const t=await kn(n,"POST","/v1/accounts:signInWithPhoneNumber",qe(n,e));if(t.temporaryProof)throw Ur(n,"account-exists-with-different-credential",t);return t}const MT={USER_NOT_FOUND:"user-not-found"};async function UT(n,e){const t={...e,operation:"REAUTH"};return kn(n,"POST","/v1/accounts:signInWithPhoneNumber",qe(n,t),MT)}/**
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
 */class Qr extends io{constructor(e){super("phone","phone"),this.params=e}static _fromVerification(e,t){return new Qr({verificationId:e,verificationCode:t})}static _fromTokenResponse(e,t){return new Qr({phoneNumber:e,temporaryProof:t})}_getIdTokenResponse(e){return OT(e,this._makeVerificationRequest())}_linkToIdToken(e,t){return LT(e,{idToken:t,...this._makeVerificationRequest()})}_getReauthenticationResolver(e){return UT(e,this._makeVerificationRequest())}_makeVerificationRequest(){const{temporaryProof:e,phoneNumber:t,verificationId:r,verificationCode:s}=this.params;return e&&t?{temporaryProof:e,phoneNumber:t}:{sessionInfo:r,code:s}}toJSON(){const e={providerId:this.providerId};return this.params.phoneNumber&&(e.phoneNumber=this.params.phoneNumber),this.params.temporaryProof&&(e.temporaryProof=this.params.temporaryProof),this.params.verificationCode&&(e.verificationCode=this.params.verificationCode),this.params.verificationId&&(e.verificationId=this.params.verificationId),e}static fromJSON(e){typeof e=="string"&&(e=JSON.parse(e));const{verificationId:t,verificationCode:r,phoneNumber:s,temporaryProof:i}=e;return!r&&!t&&!s&&!i?null:new Qr({verificationId:t,verificationCode:r,phoneNumber:s,temporaryProof:i})}}/**
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
 */function FT(n){switch(n){case"recoverEmail":return"RECOVER_EMAIL";case"resetPassword":return"PASSWORD_RESET";case"signIn":return"EMAIL_SIGNIN";case"verifyEmail":return"VERIFY_EMAIL";case"verifyAndChangeEmail":return"VERIFY_AND_CHANGE_EMAIL";case"revertSecondFactorAddition":return"REVERT_SECOND_FACTOR_ADDITION";default:return null}}function BT(n){const e=kr(Dr(n)).link,t=e?kr(Dr(e)).deep_link_id:null,r=kr(Dr(n)).deep_link_id;return(r?kr(Dr(r)).link:null)||r||t||e||n}class wc{constructor(e){const t=kr(Dr(e)),r=t.apiKey??null,s=t.oobCode??null,i=FT(t.mode??null);M(r&&s&&i,"argument-error"),this.apiKey=r,this.operation=i,this.code=s,this.continueUrl=t.continueUrl??null,this.languageCode=t.lang??null,this.tenantId=t.tenantId??null}static parseLink(e){const t=BT(e);try{return new wc(t)}catch{return null}}}/**
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
 */class dr{constructor(){this.providerId=dr.PROVIDER_ID}static credential(e,t){return ms._fromEmailAndPassword(e,t)}static credentialWithLink(e,t){const r=wc.parseLink(t);return M(r,"argument-error"),ms._fromEmailAndCode(e,r.code,r.tenantId)}}dr.PROVIDER_ID="password";dr.EMAIL_PASSWORD_SIGN_IN_METHOD="password";dr.EMAIL_LINK_SIGN_IN_METHOD="emailLink";/**
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
 */class Rf{constructor(e){this.providerId=e,this.defaultLanguageCode=null,this.customParameters={}}setDefaultLanguage(e){this.defaultLanguageCode=e}setCustomParameters(e){return this.customParameters=e,this}getCustomParameters(){return this.customParameters}}/**
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
 */class Cs extends Rf{constructor(){super(...arguments),this.scopes=[]}addScope(e){return this.scopes.includes(e)||this.scopes.push(e),this}getScopes(){return[...this.scopes]}}/**
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
 */class Bt extends Cs{constructor(){super("facebook.com")}static credential(e){return Vn._fromParams({providerId:Bt.PROVIDER_ID,signInMethod:Bt.FACEBOOK_SIGN_IN_METHOD,accessToken:e})}static credentialFromResult(e){return Bt.credentialFromTaggedObject(e)}static credentialFromError(e){return Bt.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e||!("oauthAccessToken"in e)||!e.oauthAccessToken)return null;try{return Bt.credential(e.oauthAccessToken)}catch{return null}}}Bt.FACEBOOK_SIGN_IN_METHOD="facebook.com";Bt.PROVIDER_ID="facebook.com";/**
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
 */class qt extends Cs{constructor(){super("google.com"),this.addScope("profile")}static credential(e,t){return Vn._fromParams({providerId:qt.PROVIDER_ID,signInMethod:qt.GOOGLE_SIGN_IN_METHOD,idToken:e,accessToken:t})}static credentialFromResult(e){return qt.credentialFromTaggedObject(e)}static credentialFromError(e){return qt.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{oauthIdToken:t,oauthAccessToken:r}=e;if(!t&&!r)return null;try{return qt.credential(t,r)}catch{return null}}}qt.GOOGLE_SIGN_IN_METHOD="google.com";qt.PROVIDER_ID="google.com";/**
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
 */class $t extends Cs{constructor(){super("github.com")}static credential(e){return Vn._fromParams({providerId:$t.PROVIDER_ID,signInMethod:$t.GITHUB_SIGN_IN_METHOD,accessToken:e})}static credentialFromResult(e){return $t.credentialFromTaggedObject(e)}static credentialFromError(e){return $t.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e||!("oauthAccessToken"in e)||!e.oauthAccessToken)return null;try{return $t.credential(e.oauthAccessToken)}catch{return null}}}$t.GITHUB_SIGN_IN_METHOD="github.com";$t.PROVIDER_ID="github.com";/**
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
 */class jt extends Cs{constructor(){super("twitter.com")}static credential(e,t){return Vn._fromParams({providerId:jt.PROVIDER_ID,signInMethod:jt.TWITTER_SIGN_IN_METHOD,oauthToken:e,oauthTokenSecret:t})}static credentialFromResult(e){return jt.credentialFromTaggedObject(e)}static credentialFromError(e){return jt.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{oauthAccessToken:t,oauthTokenSecret:r}=e;if(!t||!r)return null;try{return jt.credential(t,r)}catch{return null}}}jt.TWITTER_SIGN_IN_METHOD="twitter.com";jt.PROVIDER_ID="twitter.com";/**
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
 */class er{constructor(e){this.user=e.user,this.providerId=e.providerId,this._tokenResponse=e._tokenResponse,this.operationType=e.operationType}static async _fromIdTokenResponse(e,t,r,s=!1){const i=await tt._fromIdTokenResponse(e,r,s),a=Bl(r);return new er({user:i,providerId:a,_tokenResponse:r,operationType:t})}static async _forOperation(e,t,r){await e._updateTokensIfNecessary(r,!0);const s=Bl(r);return new er({user:e,providerId:s,_tokenResponse:r,operationType:t})}}function Bl(n){return n.providerId?n.providerId:"phoneNumber"in n?"phone":null}/**
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
 */class bi extends bt{constructor(e,t,r,s){super(t.code,t.message),this.operationType=r,this.user=s,Object.setPrototypeOf(this,bi.prototype),this.customData={appName:e.name,tenantId:e.tenantId??void 0,_serverResponse:t.customData._serverResponse,operationType:r}}static _fromErrorAndOperation(e,t,r,s){return new bi(e,t,r,s)}}function Pf(n,e,t,r){return(e==="reauthenticate"?t._getReauthenticationResolver(n):t._getIdTokenResponse(n)).catch(i=>{throw i.code==="auth/multi-factor-auth-required"?bi._fromErrorAndOperation(n,i,e,r):i})}async function qT(n,e,t=!1){const r=await Zn(n,e._linkToIdToken(n.auth,await n.getIdToken()),t);return er._forOperation(n,"link",r)}/**
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
 */async function $T(n,e,t=!1){const{auth:r}=n;if(Xe(r.app))return Promise.reject(Rt(r));const s="reauthenticate";try{const i=await Zn(n,Pf(r,s,e,n),t);M(i.idToken,r,"internal-error");const a=_c(i.idToken);M(a,r,"internal-error");const{sub:c}=a;return M(n.uid===c,r,"user-mismatch"),er._forOperation(n,s,i)}catch(i){throw(i==null?void 0:i.code)==="auth/user-not-found"&&it(r,"user-mismatch"),i}}/**
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
 */async function Sf(n,e,t=!1){if(Xe(n.app))return Promise.reject(Rt(n));const r="signIn",s=await Pf(n,r,e),i=await er._fromIdTokenResponse(n,r,s);return t||await n._updateCurrentUser(i.user),i}async function Vf(n,e){return Sf(gt(n),e)}/**
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
 */async function jT(n){const e=gt(n);e._getPasswordPolicyInternal()&&await e._updatePasswordPolicy()}async function kv(n,e,t){const r=gt(n);await Wn(r,{requestType:"PASSWORD_RESET",email:e,clientType:"CLIENT_TYPE_WEB"},"getOobCode",NT,"EMAIL_PASSWORD_PROVIDER")}function Dv(n,e,t){return Xe(n.app)?Promise.reject(Rt(n)):Vf(ae(n),dr.credential(e,t)).catch(async r=>{throw r.code==="auth/password-does-not-meet-requirements"&&jT(n),r})}/**
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
 */async function WT(n,e){return $e(n,"POST","/v1/accounts:update",e)}/**
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
 */async function xv(n,e){const{displayName:t,photoURL:r}=e;if(t===void 0&&r===void 0)return;const s=ae(n),a={idToken:await s.getIdToken(),displayName:t,photoUrl:r,returnSecureToken:!0},c=await Zn(s,WT(s.auth,a));s.displayName=c.displayName||null,s.photoURL=c.photoUrl||null;const l=s.providerData.find(({providerId:h})=>h==="password");l&&(l.displayName=s.displayName,l.photoURL=s.photoURL),await s._updateTokensIfNecessary(c)}function zT(n,e,t,r){return ae(n).onIdTokenChanged(e,t,r)}function HT(n,e,t){return ae(n).beforeAuthStateChanged(e,t)}function Ov(n,e,t,r){return ae(n).onAuthStateChanged(e,t,r)}function Lv(n){return ae(n).signOut()}/**
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
 */function ql(n,e){return $e(n,"POST","/v2/accounts/mfaEnrollment:start",qe(n,e))}const Ni="__sak";/**
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
 */class Cf{constructor(e,t){this.storageRetriever=e,this.type=t}_isAvailable(){try{return this.storage?(this.storage.setItem(Ni,"1"),this.storage.removeItem(Ni),Promise.resolve(!0)):Promise.resolve(!1)}catch{return Promise.resolve(!1)}}_set(e,t){return this.storage.setItem(e,JSON.stringify(t)),Promise.resolve()}_get(e){const t=this.storage.getItem(e);return Promise.resolve(t?JSON.parse(t):null)}_remove(e){return this.storage.removeItem(e),Promise.resolve()}get storage(){return this.storageRetriever()}}/**
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
 */const GT=1e3,KT=10;class bf extends Cf{constructor(){super(()=>window.localStorage,"LOCAL"),this.boundEventHandler=(e,t)=>this.onStorageEvent(e,t),this.listeners={},this.localCache={},this.pollTimer=null,this.fallbackToPolling=Tf(),this._shouldAllowMigration=!0}forAllChangedKeys(e){for(const t of Object.keys(this.listeners)){const r=this.storage.getItem(t),s=this.localCache[t];r!==s&&e(t,s,r)}}onStorageEvent(e,t=!1){if(!e.key){this.forAllChangedKeys((a,c,l)=>{this.notifyListeners(a,l)});return}const r=e.key;t?this.detachListener():this.stopPolling();const s=()=>{const a=this.storage.getItem(r);!t&&this.localCache[r]===a||this.notifyListeners(r,a)},i=this.storage.getItem(r);sT()&&i!==e.newValue&&e.newValue!==e.oldValue?setTimeout(s,KT):s()}notifyListeners(e,t){this.localCache[e]=t;const r=this.listeners[e];if(r)for(const s of Array.from(r))s(t&&JSON.parse(t))}startPolling(){this.stopPolling(),this.pollTimer=setInterval(()=>{this.forAllChangedKeys((e,t,r)=>{this.onStorageEvent(new StorageEvent("storage",{key:e,oldValue:t,newValue:r}),!0)})},GT)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}attachListener(){window.addEventListener("storage",this.boundEventHandler)}detachListener(){window.removeEventListener("storage",this.boundEventHandler)}_addListener(e,t){Object.keys(this.listeners).length===0&&(this.fallbackToPolling?this.startPolling():this.attachListener()),this.listeners[e]||(this.listeners[e]=new Set,this.localCache[e]=this.storage.getItem(e)),this.listeners[e].add(t)}_removeListener(e,t){this.listeners[e]&&(this.listeners[e].delete(t),this.listeners[e].size===0&&delete this.listeners[e]),Object.keys(this.listeners).length===0&&(this.detachListener(),this.stopPolling())}async _set(e,t){await super._set(e,t),this.localCache[e]=JSON.stringify(t)}async _get(e){const t=await super._get(e);return this.localCache[e]=JSON.stringify(t),t}async _remove(e){await super._remove(e),delete this.localCache[e]}}bf.type="LOCAL";const QT=bf;/**
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
 */class Nf extends Cf{constructor(){super(()=>window.sessionStorage,"SESSION")}_addListener(e,t){}_removeListener(e,t){}}Nf.type="SESSION";const kf=Nf;/**
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
 */function YT(n){return Promise.all(n.map(async e=>{try{return{fulfilled:!0,value:await e}}catch(t){return{fulfilled:!1,reason:t}}}))}/**
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
 */class oo{constructor(e){this.eventTarget=e,this.handlersMap={},this.boundEventHandler=this.handleEvent.bind(this)}static _getInstance(e){const t=this.receivers.find(s=>s.isListeningto(e));if(t)return t;const r=new oo(e);return this.receivers.push(r),r}isListeningto(e){return this.eventTarget===e}async handleEvent(e){const t=e,{eventId:r,eventType:s,data:i}=t.data,a=this.handlersMap[s];if(!(a!=null&&a.size))return;t.ports[0].postMessage({status:"ack",eventId:r,eventType:s});const c=Array.from(a).map(async h=>h(t.origin,i)),l=await YT(c);t.ports[0].postMessage({status:"done",eventId:r,eventType:s,response:l})}_subscribe(e,t){Object.keys(this.handlersMap).length===0&&this.eventTarget.addEventListener("message",this.boundEventHandler),this.handlersMap[e]||(this.handlersMap[e]=new Set),this.handlersMap[e].add(t)}_unsubscribe(e,t){this.handlersMap[e]&&t&&this.handlersMap[e].delete(t),(!t||this.handlersMap[e].size===0)&&delete this.handlersMap[e],Object.keys(this.handlersMap).length===0&&this.eventTarget.removeEventListener("message",this.boundEventHandler)}}oo.receivers=[];/**
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
 */function Tc(n="",e=10){let t="";for(let r=0;r<e;r++)t+=Math.floor(Math.random()*10);return n+t}/**
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
 */class JT{constructor(e){this.target=e,this.handlers=new Set}removeMessageHandler(e){e.messageChannel&&(e.messageChannel.port1.removeEventListener("message",e.onMessage),e.messageChannel.port1.close()),this.handlers.delete(e)}async _send(e,t,r=50){const s=typeof MessageChannel<"u"?new MessageChannel:null;if(!s)throw new Error("connection_unavailable");let i,a;return new Promise((c,l)=>{const h=Tc("",20);s.port1.start();const f=setTimeout(()=>{l(new Error("unsupported_event"))},r);a={messageChannel:s,onMessage(m){const E=m;if(E.data.eventId===h)switch(E.data.status){case"ack":clearTimeout(f),i=setTimeout(()=>{l(new Error("timeout"))},3e3);break;case"done":clearTimeout(i),c(E.data.response);break;default:clearTimeout(f),clearTimeout(i),l(new Error("invalid_response"));break}}},this.handlers.add(a),s.port1.addEventListener("message",a.onMessage),this.target.postMessage({eventType:e,eventId:h,data:t},[s.port2])}).finally(()=>{a&&this.removeMessageHandler(a)})}}/**
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
 */function ue(){return window}function XT(n){ue().location.href=n}/**
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
 */function Ic(){return typeof ue().WorkerGlobalScope<"u"&&typeof ue().importScripts=="function"}async function ZT(){if(!(navigator!=null&&navigator.serviceWorker))return null;try{return(await navigator.serviceWorker.ready).active}catch{return null}}function eI(){var n;return((n=navigator==null?void 0:navigator.serviceWorker)==null?void 0:n.controller)||null}function tI(){return Ic()?self:null}/**
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
 */const Df="firebaseLocalStorageDb",nI=1,ki="firebaseLocalStorage",xf="fbase_key";class bs{constructor(e){this.request=e}toPromise(){return new Promise((e,t)=>{this.request.addEventListener("success",()=>{e(this.request.result)}),this.request.addEventListener("error",()=>{t(this.request.error)})})}}function ao(n,e){return n.transaction([ki],e?"readwrite":"readonly").objectStore(ki)}function rI(){const n=indexedDB.deleteDatabase(Df);return new bs(n).toPromise()}function Of(){const n=indexedDB.open(Df,nI);return new Promise((e,t)=>{n.addEventListener("error",()=>{t(n.error)}),n.addEventListener("upgradeneeded",()=>{const r=n.result;try{r.createObjectStore(ki,{keyPath:xf})}catch(s){t(s)}}),n.addEventListener("success",async()=>{const r=n.result;r.objectStoreNames.contains(ki)?e(r):(r.close(),await rI(),e(await Of()))})})}async function $l(n,e,t){const r=ao(n,!0).put({[xf]:e,value:t});return new bs(r).toPromise()}async function sI(n,e){const t=ao(n,!1).get(e),r=await new bs(t).toPromise();return r===void 0?null:r.value}function jl(n,e){const t=ao(n,!0).delete(e);return new bs(t).toPromise()}const iI=800,oI=3;class Lf{registerLifecycleListeners(){typeof window<"u"&&typeof window.addEventListener=="function"&&(window.addEventListener("pagehide",this.onPageHide),window.addEventListener("pageshow",this.onPageShow))}unregisterLifecycleListeners(){typeof window<"u"&&typeof window.removeEventListener=="function"&&(window.removeEventListener("pagehide",this.onPageHide),window.removeEventListener("pageshow",this.onPageShow))}constructor(){this.type="LOCAL",this.dbPromise=null,this._shouldAllowMigration=!0,this.listeners={},this.localCache={},this.pollTimer=null,this.isClosing=!1,this.pendingWrites=0,this.receiver=null,this.sender=null,this.serviceWorkerReceiverAvailable=!1,this.activeServiceWorker=null,this.onPageHide=()=>{this.isClosing=!0,this.stopPolling(),this.dbPromise&&(this.dbPromise.then(e=>e.close()).catch(()=>{}),this.dbPromise=null)},this.onPageShow=()=>{this.isClosing&&(this.isClosing=!1,Object.keys(this.listeners).length>0&&this.startPolling())},this._workerInitializationPromise=this.initializeServiceWorkerMessaging().then(()=>{},()=>{})}async _openDb(){return this.dbPromise?this.dbPromise:(this.dbPromise=Of(),this.dbPromise.catch(()=>{this.dbPromise=null}),this.dbPromise)}async _withRetries(e){let t=0;for(;;)try{const r=await this._openDb();return await e(r)}catch(r){if(t++>oI)throw r;if(this.dbPromise){const s=this.dbPromise;this.dbPromise=null;try{(await s).close()}catch{}}}}async initializeServiceWorkerMessaging(){return Ic()?this.initializeReceiver():this.initializeSender()}async initializeReceiver(){this.receiver=oo._getInstance(tI()),this.receiver._subscribe("keyChanged",async(e,t)=>({keyProcessed:(await this._poll()).includes(t.key)})),this.receiver._subscribe("ping",async(e,t)=>["keyChanged"])}async initializeSender(){var t,r;if(this.activeServiceWorker=await ZT(),!this.activeServiceWorker)return;this.sender=new JT(this.activeServiceWorker);const e=await this.sender._send("ping",{},800);e&&(t=e[0])!=null&&t.fulfilled&&(r=e[0])!=null&&r.value.includes("keyChanged")&&(this.serviceWorkerReceiverAvailable=!0)}async notifyServiceWorker(e){if(!(!this.sender||!this.activeServiceWorker||eI()!==this.activeServiceWorker))try{await this.sender._send("keyChanged",{key:e},this.serviceWorkerReceiverAvailable?800:50)}catch{}}async _isAvailable(){try{return indexedDB?(await this._withRetries(async e=>{await $l(e,Ni,"1"),await jl(e,Ni)}),!0):!1}catch{}return!1}async _withPendingWrite(e){this.pendingWrites++;try{await e()}finally{this.pendingWrites--}}async _set(e,t){return this._withPendingWrite(async()=>(await this._withRetries(r=>$l(r,e,t)),this.localCache[e]=t,this.notifyServiceWorker(e)))}async _get(e){const t=await this._withRetries(r=>sI(r,e));return this.localCache[e]=t,t}async _remove(e){return this._withPendingWrite(async()=>(await this._withRetries(t=>jl(t,e)),delete this.localCache[e],this.notifyServiceWorker(e)))}async _poll(){if(this.isClosing)return[];try{const e=await this._withRetries(s=>{const i=ao(s,!1).getAll();return new bs(i).toPromise()});if(this.isClosing)return[];if(!e)return[];if(this.pendingWrites!==0)return[];const t=[],r=new Set;if(e.length!==0)for(const{fbase_key:s,value:i}of e)r.add(s),JSON.stringify(this.localCache[s])!==JSON.stringify(i)&&(this.notifyListeners(s,i),t.push(s));for(const s of Object.keys(this.localCache))this.localCache[s]&&!r.has(s)&&(this.notifyListeners(s,null),t.push(s));return t}catch(e){return this.isClosing||oi(`Firebase Auth cross-tab polling failed with error: ${e}`),[]}}notifyListeners(e,t){this.localCache[e]=t;const r=this.listeners[e];if(r)for(const s of Array.from(r))s(t)}startPolling(){this.stopPolling(),this.pollTimer=setInterval(async()=>this._poll(),iI)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}_addListener(e,t){Object.keys(this.listeners).length===0&&(this.startPolling(),this.registerLifecycleListeners()),this.listeners[e]||(this.listeners[e]=new Set,this._get(e)),this.listeners[e].add(t)}_removeListener(e,t){this.listeners[e]&&(this.listeners[e].delete(t),this.listeners[e].size===0&&delete this.listeners[e]),Object.keys(this.listeners).length===0&&(this.stopPolling(),this.unregisterLifecycleListeners())}}Lf.type="LOCAL";const aI=Lf;/**
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
 */function Wl(n,e){return $e(n,"POST","/v2/accounts/mfaSignIn:start",qe(n,e))}/**
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
 */const jo=vf("rcb"),cI=new Ss(3e4,6e4);class uI{constructor(){var e;this.hostLanguage="",this.counter=0,this.librarySeparatelyLoaded=!!((e=ue().grecaptcha)!=null&&e.render)}load(e,t=""){return M(lI(t),e,"argument-error"),this.shouldResolveImmediately(t)&&bl(ue().grecaptcha)?Promise.resolve(ue().grecaptcha):new Promise((r,s)=>{const i=ue().setTimeout(()=>{s(Qe(e,"network-request-failed"))},cI.get());ue()[jo]=()=>{ue().clearTimeout(i),delete ue()[jo];const c=ue().grecaptcha;if(!c||!bl(c)){s(Qe(e,"internal-error"));return}const l=c.render;c.render=(h,f)=>{const m=l(h,f);return this.counter++,m},this.hostLanguage=t,r(c)};const a=`${hT()}?${tr({onload:jo,render:"explicit",hl:t})}`;Ec(a).catch(()=>{clearTimeout(i),s(Qe(e,"internal-error"))})})}clearedOneInstance(){this.counter--}shouldResolveImmediately(e){var t;return!!((t=ue().grecaptcha)!=null&&t.render)&&(e===this.hostLanguage||this.counter>0||this.librarySeparatelyLoaded)}}function lI(n){return n.length<=6&&/^\s*[a-zA-Z0-9\-]*\s*$/.test(n)}class hI{async load(e){return new gT(e)}clearedOneInstance(){}}/**
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
 */const Yr="recaptcha",dI={theme:"light",type:"image"};class Mv{constructor(e,t,r={...dI}){this.parameters=r,this.type=Yr,this.destroyed=!1,this.widgetId=null,this.tokenChangeListeners=new Set,this.renderPromise=null,this.recaptcha=null,this.auth=gt(e),this.isInvisible=this.parameters.size==="invisible",M(typeof document<"u",this.auth,"operation-not-supported-in-this-environment");const s=typeof t=="string"?document.getElementById(t):t;M(s,this.auth,"argument-error"),this.container=s,this.parameters.callback=this.makeTokenCallback(this.parameters.callback),this._recaptchaLoader=this.auth.settings.appVerificationDisabledForTesting?new hI:new uI,this.validateStartingState()}async verify(){this.assertNotDestroyed();const e=await this.render(),t=this.getAssertedRecaptcha(),r=t.getResponse(e);return r||new Promise(s=>{const i=a=>{a&&(this.tokenChangeListeners.delete(i),s(a))};this.tokenChangeListeners.add(i),this.isInvisible&&t.execute(e)})}render(){try{this.assertNotDestroyed()}catch(e){return Promise.reject(e)}return this.renderPromise?this.renderPromise:(this.renderPromise=this.makeRenderPromise().catch(e=>{throw this.renderPromise=null,e}),this.renderPromise)}_reset(){this.assertNotDestroyed(),this.widgetId!==null&&this.getAssertedRecaptcha().reset(this.widgetId)}clear(){this.assertNotDestroyed(),this.destroyed=!0,this._recaptchaLoader.clearedOneInstance(),this.isInvisible||this.container.childNodes.forEach(e=>{this.container.removeChild(e)})}validateStartingState(){M(!this.parameters.sitekey,this.auth,"argument-error"),M(this.isInvisible||!this.container.hasChildNodes(),this.auth,"argument-error"),M(typeof document<"u",this.auth,"operation-not-supported-in-this-environment")}makeTokenCallback(e){return t=>{if(this.tokenChangeListeners.forEach(r=>r(t)),typeof e=="function")e(t);else if(typeof e=="string"){const r=ue()[e];typeof r=="function"&&r(t)}}}assertNotDestroyed(){M(!this.destroyed,this.auth,"internal-error")}async makeRenderPromise(){if(await this.init(),!this.widgetId){let e=this.container;if(!this.isInvisible){const t=document.createElement("div");e.appendChild(t),e=t}this.widgetId=this.getAssertedRecaptcha().render(e,this.parameters)}return this.widgetId}async init(){M(of()&&!Ic(),this.auth,"internal-error"),await fI(),this.recaptcha=await this._recaptchaLoader.load(this.auth,this.auth.languageCode||void 0);const e=await Kw(this.auth);M(e,this.auth,"internal-error"),this.parameters.sitekey=e}getAssertedRecaptcha(){return M(this.recaptcha,this.auth,"internal-error"),this.recaptcha}}function fI(){let n=null;return new Promise(e=>{if(document.readyState==="complete"){e();return}n=()=>e(),window.addEventListener("load",n)}).catch(e=>{throw n&&window.removeEventListener("load",n),e})}/**
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
 */class pI{constructor(e,t){this.verificationId=e,this.onConfirmation=t}confirm(e){const t=Qr._fromVerification(this.verificationId,e);return this.onConfirmation(t)}}async function Uv(n,e,t){if(Xe(n.app))return Promise.reject(Rt(n));const r=gt(n),s=await mI(r,e,ae(t));return new pI(s,i=>Vf(r,i))}async function mI(n,e,t){var r;if(!n._getRecaptchaConfig())try{await IT(n)}catch{console.log("Failed to initialize reCAPTCHA Enterprise config. Triggering the reCAPTCHA v2 verification.")}try{let s;if(typeof e=="string"?s={phoneNumber:e}:s=e,"session"in s){const i=s.session;if("phoneNumber"in s){M(i.type==="enroll",n,"internal-error");const a={idToken:i.credential,phoneEnrollmentInfo:{phoneNumber:s.phoneNumber,clientType:"CLIENT_TYPE_WEB"}};return(await Wn(n,a,"mfaSmsEnrollment",async(f,m)=>{if(m.phoneEnrollmentInfo.captchaResponse===Kr){M((t==null?void 0:t.type)===Yr,f,"argument-error");const E=await Wo(f,m,t);return ql(f,E)}return ql(f,m)},"PHONE_PROVIDER").catch(f=>Promise.reject(f))).phoneSessionInfo.sessionInfo}else{M(i.type==="signin",n,"internal-error");const a=((r=s.multiFactorHint)==null?void 0:r.uid)||s.multiFactorUid;M(a,n,"missing-multi-factor-info");const c={mfaPendingCredential:i.credential,mfaEnrollmentId:a,phoneSignInInfo:{clientType:"CLIENT_TYPE_WEB"}};return(await Wn(n,c,"mfaSmsSignIn",async(m,E)=>{if(E.phoneSignInInfo.captchaResponse===Kr){M((t==null?void 0:t.type)===Yr,m,"argument-error");const V=await Wo(m,E,t);return Wl(m,V)}return Wl(m,E)},"PHONE_PROVIDER").catch(m=>Promise.reject(m))).phoneResponseInfo.sessionInfo}}else{const i={phoneNumber:s.phoneNumber,clientType:"CLIENT_TYPE_WEB"};return(await Wn(n,i,"sendVerificationCode",async(h,f)=>{if(f.captchaResponse===Kr){M((t==null?void 0:t.type)===Yr,h,"argument-error");const m=await Wo(h,f,t);return Fl(h,m)}return Fl(h,f)},"PHONE_PROVIDER").catch(h=>Promise.reject(h))).sessionInfo}}finally{t==null||t._reset()}}async function Wo(n,e,t){M(t.type===Yr,n,"argument-error");const r=await t.verify();M(typeof r=="string",n,"argument-error");const s={...e};if("phoneEnrollmentInfo"in s){const i=s.phoneEnrollmentInfo.phoneNumber,a=s.phoneEnrollmentInfo.captchaResponse,c=s.phoneEnrollmentInfo.clientType,l=s.phoneEnrollmentInfo.recaptchaVersion;return Object.assign(s,{phoneEnrollmentInfo:{phoneNumber:i,recaptchaToken:r,captchaResponse:a,clientType:c,recaptchaVersion:l}}),s}else if("phoneSignInInfo"in s){const i=s.phoneSignInInfo.captchaResponse,a=s.phoneSignInInfo.clientType,c=s.phoneSignInInfo.recaptchaVersion;return Object.assign(s,{phoneSignInInfo:{recaptchaToken:r,captchaResponse:i,clientType:a,recaptchaVersion:c}}),s}else return Object.assign(s,{recaptchaToken:r}),s}/**
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
 */function gI(n,e){return e?It(e):(M(n._popupRedirectResolver,n,"argument-error"),n._popupRedirectResolver)}/**
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
 */class vc extends io{constructor(e){super("custom","custom"),this.params=e}_getIdTokenResponse(e){return zn(e,this._buildIdpRequest())}_linkToIdToken(e,t){return zn(e,this._buildIdpRequest(t))}_getReauthenticationResolver(e){return zn(e,this._buildIdpRequest())}_buildIdpRequest(e){const t={requestUri:this.params.requestUri,sessionId:this.params.sessionId,postBody:this.params.postBody,tenantId:this.params.tenantId,pendingToken:this.params.pendingToken,returnSecureToken:!0,returnIdpCredential:!0};return e&&(t.idToken=e),t}}function _I(n){return Sf(n.auth,new vc(n),n.bypassAuthState)}function yI(n){const{auth:e,user:t}=n;return M(t,e,"internal-error"),$T(t,new vc(n),n.bypassAuthState)}async function EI(n){const{auth:e,user:t}=n;return M(t,e,"internal-error"),qT(t,new vc(n),n.bypassAuthState)}/**
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
 */class Mf{constructor(e,t,r,s,i=!1){this.auth=e,this.resolver=r,this.user=s,this.bypassAuthState=i,this.pendingPromise=null,this.eventManager=null,this.filter=Array.isArray(t)?t:[t]}execute(){return new Promise(async(e,t)=>{this.pendingPromise={resolve:e,reject:t};try{this.eventManager=await this.resolver._initialize(this.auth),await this.onExecution(),this.eventManager.registerConsumer(this)}catch(r){this.reject(r)}})}async onAuthEvent(e){const{urlResponse:t,sessionId:r,postBody:s,tenantId:i,error:a,type:c}=e;if(a){this.reject(a);return}const l={auth:this.auth,requestUri:t,sessionId:r,tenantId:i||void 0,postBody:s||void 0,user:this.user,bypassAuthState:this.bypassAuthState};try{this.resolve(await this.getIdpTask(c)(l))}catch(h){this.reject(h)}}onError(e){this.reject(e)}getIdpTask(e){switch(e){case"signInViaPopup":case"signInViaRedirect":return _I;case"linkViaPopup":case"linkViaRedirect":return EI;case"reauthViaPopup":case"reauthViaRedirect":return yI;default:it(this.auth,"internal-error")}}resolve(e){Ct(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.resolve(e),this.unregisterAndCleanUp()}reject(e){Ct(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.reject(e),this.unregisterAndCleanUp()}unregisterAndCleanUp(){this.eventManager&&this.eventManager.unregisterConsumer(this),this.pendingPromise=null,this.cleanUp()}}/**
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
 */const wI=new Ss(2e3,1e4);class qn extends Mf{constructor(e,t,r,s,i){super(e,t,s,i),this.provider=r,this.authWindow=null,this.pollId=null,qn.currentPopupAction&&qn.currentPopupAction.cancel(),qn.currentPopupAction=this}async executeNotNull(){const e=await this.execute();return M(e,this.auth,"internal-error"),e}async onExecution(){Ct(this.filter.length===1,"Popup operations only handle one event");const e=Tc();this.authWindow=await this.resolver._openPopup(this.auth,this.provider,this.filter[0],e),this.authWindow.associatedEvent=e,this.resolver._originValidation(this.auth).catch(t=>{this.reject(t)}),this.resolver._isIframeWebStorageSupported(this.auth,t=>{t||this.reject(Qe(this.auth,"web-storage-unsupported"))}),this.pollUserCancellation()}get eventId(){var e;return((e=this.authWindow)==null?void 0:e.associatedEvent)||null}cancel(){this.reject(Qe(this.auth,"cancelled-popup-request"))}cleanUp(){this.authWindow&&this.authWindow.close(),this.pollId&&window.clearTimeout(this.pollId),this.authWindow=null,this.pollId=null,qn.currentPopupAction=null}pollUserCancellation(){const e=()=>{var t,r;if((r=(t=this.authWindow)==null?void 0:t.window)!=null&&r.closed){this.pollId=window.setTimeout(()=>{this.pollId=null,this.reject(Qe(this.auth,"popup-closed-by-user"))},8e3);return}this.pollId=window.setTimeout(e,wI.get())};e()}}qn.currentPopupAction=null;/**
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
 */const TI="pendingRedirect",ui=new Map;class II extends Mf{constructor(e,t,r=!1){super(e,["signInViaRedirect","linkViaRedirect","reauthViaRedirect","unknown"],t,void 0,r),this.eventId=null}async execute(){let e=ui.get(this.auth._key());if(!e){try{const r=await vI(this.resolver,this.auth)?await super.execute():null;e=()=>Promise.resolve(r)}catch(t){e=()=>Promise.reject(t)}ui.set(this.auth._key(),e)}return this.bypassAuthState||ui.set(this.auth._key(),()=>Promise.resolve(null)),e()}async onAuthEvent(e){if(e.type==="signInViaRedirect")return super.onAuthEvent(e);if(e.type==="unknown"){this.resolve(null);return}if(e.eventId){const t=await this.auth._redirectUserForId(e.eventId);if(t)return this.user=t,super.onAuthEvent(e);this.resolve(null)}}async onExecution(){}cleanUp(){}}async function vI(n,e){const t=PI(e),r=RI(n);if(!await r._isAvailable())return!1;const s=await r._get(t)==="true";return await r._remove(t),s}function AI(n,e){ui.set(n._key(),e)}function RI(n){return It(n._redirectPersistence)}function PI(n){return ci(TI,n.config.apiKey,n.name)}async function SI(n,e,t=!1){if(Xe(n.app))return Promise.reject(Rt(n));const r=gt(n),s=gI(r,e),a=await new II(r,s,t).execute();return a&&!t&&(delete a.user._redirectEventId,await r._persistUserIfCurrent(a.user),await r._setRedirectUser(null,e)),a}/**
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
 */const VI=10*60*1e3;class CI{constructor(e){this.auth=e,this.cachedEventUids=new Set,this.consumers=new Set,this.queuedRedirectEvent=null,this.hasHandledPotentialRedirect=!1,this.lastProcessedEventTime=Date.now()}registerConsumer(e){this.consumers.add(e),this.queuedRedirectEvent&&this.isEventForConsumer(this.queuedRedirectEvent,e)&&(this.sendToConsumer(this.queuedRedirectEvent,e),this.saveEventToCache(this.queuedRedirectEvent),this.queuedRedirectEvent=null)}unregisterConsumer(e){this.consumers.delete(e)}onEvent(e){if(this.hasEventBeenHandled(e))return!1;let t=!1;return this.consumers.forEach(r=>{this.isEventForConsumer(e,r)&&(t=!0,this.sendToConsumer(e,r),this.saveEventToCache(e))}),this.hasHandledPotentialRedirect||!bI(e)||(this.hasHandledPotentialRedirect=!0,t||(this.queuedRedirectEvent=e,t=!0)),t}sendToConsumer(e,t){var r;if(e.error&&!Uf(e)){const s=((r=e.error.code)==null?void 0:r.split("auth/")[1])||"internal-error";t.onError(Qe(this.auth,s))}else t.onAuthEvent(e)}isEventForConsumer(e,t){const r=t.eventId===null||!!e.eventId&&e.eventId===t.eventId;return t.filter.includes(e.type)&&r}hasEventBeenHandled(e){return Date.now()-this.lastProcessedEventTime>=VI&&this.cachedEventUids.clear(),this.cachedEventUids.has(zl(e))}saveEventToCache(e){this.cachedEventUids.add(zl(e)),this.lastProcessedEventTime=Date.now()}}function zl(n){return[n.type,n.eventId,n.sessionId,n.tenantId].filter(e=>e).join("-")}function Uf({type:n,error:e}){return n==="unknown"&&(e==null?void 0:e.code)==="auth/no-auth-event"}function bI(n){switch(n.type){case"signInViaRedirect":case"linkViaRedirect":case"reauthViaRedirect":return!0;case"unknown":return Uf(n);default:return!1}}/**
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
 */async function NI(n,e={}){return $e(n,"GET","/v1/projects",e)}/**
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
 */const kI=/^\d{1,3}\.\d{1,3}\.\d{1,3}\.\d{1,3}$/,DI=/^https?/;async function xI(n){if(n.config.emulator)return;const{authorizedDomains:e}=await NI(n);for(const t of e)try{if(OI(t))return}catch{}it(n,"unauthorized-domain")}function OI(n){const e=da(),{protocol:t,hostname:r}=new URL(e);if(n.startsWith("chrome-extension://")){const a=new URL(n);return a.hostname===""&&r===""?t==="chrome-extension:"&&n.replace("chrome-extension://","")===e.replace("chrome-extension://",""):t==="chrome-extension:"&&a.hostname===r}if(!DI.test(t))return!1;if(kI.test(n))return r===n;const s=n.replace(/\./g,"\\.");return new RegExp("^(.+\\."+s+"|"+s+")$","i").test(r)}/**
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
 */const LI=new Ss(3e4,6e4);function Hl(){const n=ue().___jsl;if(n!=null&&n.H){for(const e of Object.keys(n.H))if(n.H[e].r=n.H[e].r||[],n.H[e].L=n.H[e].L||[],n.H[e].r=[...n.H[e].L],n.CP)for(let t=0;t<n.CP.length;t++)n.CP[t]=null}}function MI(n){return new Promise((e,t)=>{var s,i,a;function r(){Hl(),gapi.load("gapi.iframes",{callback:()=>{e(gapi.iframes.getContext())},ontimeout:()=>{Hl(),t(Qe(n,"network-request-failed"))},timeout:LI.get()})}if((i=(s=ue().gapi)==null?void 0:s.iframes)!=null&&i.Iframe)e(gapi.iframes.getContext());else if((a=ue().gapi)!=null&&a.load)r();else{const c=vf("iframefcb");return ue()[c]=()=>{gapi.load?r():t(Qe(n,"network-request-failed"))},Ec(`${fT()}?onload=${c}`).catch(l=>t(l))}}).catch(e=>{throw li=null,e})}let li=null;function UI(n){return li=li||MI(n),li}/**
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
 */const FI=new Ss(5e3,15e3),BI="__/auth/iframe",qI="emulator/auth/iframe",$I={style:{position:"absolute",top:"-100px",width:"1px",height:"1px"},"aria-hidden":"true",tabindex:"-1"},jI=new Map([["identitytoolkit.googleapis.com","p"],["staging-identitytoolkit.sandbox.googleapis.com","s"],["test-identitytoolkit.sandbox.googleapis.com","t"]]);function WI(n){const e=n.config;M(e.authDomain,n,"auth-domain-config-required");const t=e.emulator?gc(e,qI):`https://${n.config.authDomain}/${BI}`,r={apiKey:e.apiKey,appName:n.name,v:nr},s=jI.get(n.config.apiHost);s&&(r.eid=s);const i=n._getFrameworks();return i.length&&(r.fw=i.join(",")),`${t}?${tr(r).slice(1)}`}async function zI(n){const e=await UI(n),t=ue().gapi;return M(t,n,"internal-error"),e.open({where:document.body,url:WI(n),messageHandlersFilter:t.iframes.CROSS_ORIGIN_IFRAMES_FILTER,attributes:$I,dontclear:!0},r=>new Promise(async(s,i)=>{await r.restyle({setHideOnLeave:!1});const a=Qe(n,"network-request-failed"),c=ue().setTimeout(()=>{i(a)},FI.get());function l(){ue().clearTimeout(c),s(r)}r.ping(l).then(l,()=>{i(a)})}))}/**
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
 */const HI={location:"yes",resizable:"yes",statusbar:"yes",toolbar:"no"},GI=500,KI=600,QI="_blank",YI="http://localhost";class Gl{constructor(e){this.window=e,this.associatedEvent=null}close(){if(this.window)try{this.window.close()}catch{}}}function JI(n,e,t,r=GI,s=KI){const i=Math.max((window.screen.availHeight-s)/2,0).toString(),a=Math.max((window.screen.availWidth-r)/2,0).toString();let c="";const l={...HI,width:r.toString(),height:s.toString(),top:i,left:a},h=Ve().toLowerCase();t&&(c=gf(h)?QI:t),pf(h)&&(e=e||YI,l.scrollbars="yes");const f=Object.entries(l).reduce((E,[V,N])=>`${E}${V}=${N},`,"");if(rT(h)&&c!=="_self")return XI(e||"",c),new Gl(null);const m=window.open(e||"",c,f);M(m,n,"popup-blocked");try{m.focus()}catch{}return new Gl(m)}function XI(n,e){const t=document.createElement("a");t.href=n,t.target=e;const r=document.createEvent("MouseEvent");r.initMouseEvent("click",!0,!0,window,1,0,0,0,0,!1,!1,!1,!1,1,null),t.dispatchEvent(r)}/**
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
 */const ZI="__/auth/handler",ev="emulator/auth/handler",tv=encodeURIComponent("fac");async function Kl(n,e,t,r,s,i){M(n.config.authDomain,n,"auth-domain-config-required"),M(n.config.apiKey,n,"invalid-api-key");const a={apiKey:n.config.apiKey,appName:n.name,authType:t,redirectUrl:r,v:nr,eventId:s};if(e instanceof Rf){e.setDefaultLanguage(n.languageCode),a.providerId=e.providerId||"",Fp(e.getCustomParameters())||(a.customParameters=JSON.stringify(e.getCustomParameters()));for(const[f,m]of Object.entries({}))a[f]=m}if(e instanceof Cs){const f=e.getScopes().filter(m=>m!=="");f.length>0&&(a.scopes=f.join(","))}n.tenantId&&(a.tid=n.tenantId);const c=a;for(const f of Object.keys(c))c[f]===void 0&&delete c[f];const l=await n._getAppCheckToken(),h=l?`#${tv}=${encodeURIComponent(l)}`:"";return`${nv(n)}?${tr(c).slice(1)}${h}`}function nv({config:n}){return n.emulator?gc(n,ev):`https://${n.authDomain}/${ZI}`}/**
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
 */const zo="webStorageSupport";class rv{constructor(){this.eventManagers={},this.iframes={},this.originValidationPromises={},this._redirectPersistence=kf,this._completeRedirectFn=SI,this._overrideRedirectResult=AI}async _openPopup(e,t,r,s){var a;Ct((a=this.eventManagers[e._key()])==null?void 0:a.manager,"_initialize() not called before _openPopup()");const i=await Kl(e,t,r,da(),s);return JI(e,i,Tc())}async _openRedirect(e,t,r,s){await this._originValidation(e);const i=await Kl(e,t,r,da(),s);return XT(i),new Promise(()=>{})}_initialize(e){const t=e._key();if(this.eventManagers[t]){const{manager:s,promise:i}=this.eventManagers[t];return s?Promise.resolve(s):(Ct(i,"If manager is not set, promise should be"),i)}const r=this.initAndGetManager(e);return this.eventManagers[t]={promise:r},r.catch(()=>{delete this.eventManagers[t]}),r}async initAndGetManager(e){const t=await zI(e),r=new CI(e);return t.register("authEvent",s=>(M(s==null?void 0:s.authEvent,e,"invalid-auth-event"),{status:r.onEvent(s.authEvent)?"ACK":"ERROR"}),gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER),this.eventManagers[e._key()]={manager:r},this.iframes[e._key()]=t,r}_isIframeWebStorageSupported(e,t){this.iframes[e._key()].send(zo,{type:zo},s=>{var a;const i=(a=s==null?void 0:s[0])==null?void 0:a[zo];i!==void 0&&t(!!i),it(e,"internal-error")},gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER)}_originValidation(e){const t=e._key();return this.originValidationPromises[t]||(this.originValidationPromises[t]=xI(e)),this.originValidationPromises[t]}get _shouldInitProactively(){return Tf()||mf()||yc()}}const sv=rv;var Ql="@firebase/auth",Yl="1.13.6";/**
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
 */class iv{constructor(e){this.auth=e,this.internalListeners=new Map}getUid(){var e;return this.assertAuthConfigured(),((e=this.auth.currentUser)==null?void 0:e.uid)||null}async getToken(e){return this.assertAuthConfigured(),await this.auth._initializationPromise,this.auth.currentUser?{accessToken:await this.auth.currentUser.getIdToken(e)}:null}addAuthTokenListener(e){if(this.assertAuthConfigured(),this.internalListeners.has(e))return;const t=this.auth.onIdTokenChanged(r=>{e((r==null?void 0:r.stsTokenManager.accessToken)||null)});this.internalListeners.set(e,t),this.updateProactiveRefresh()}removeAuthTokenListener(e){this.assertAuthConfigured();const t=this.internalListeners.get(e);t&&(this.internalListeners.delete(e),t(),this.updateProactiveRefresh())}assertAuthConfigured(){M(this.auth._initializationPromise,"dependent-sdk-initialized-before-auth")}updateProactiveRefresh(){this.internalListeners.size>0?this.auth._startProactiveRefresh():this.auth._stopProactiveRefresh()}}/**
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
 */function ov(n){switch(n){case"Node":return"node";case"ReactNative":return"rn";case"Worker":return"webworker";case"Cordova":return"cordova";case"WebExtension":return"web-extension";default:return}}function av(n){Hn(new Rn("auth",(e,{options:t})=>{const r=e.getProvider("app").getImmediate(),s=e.getProvider("heartbeat"),i=e.getProvider("app-check-internal"),{apiKey:a,authDomain:c}=r.options;M(a&&!a.includes(":"),"invalid-api-key",{appName:r.name});const l={apiKey:a,authDomain:c,clientPlatform:n,apiHost:"identitytoolkit.googleapis.com",tokenApiHost:"securetoken.googleapis.com",apiScheme:"https",sdkClientVersion:If(n)},h=new uT(r,s,i,l);return AT(h,t),h},"PUBLIC").setInstantiationMode("EXPLICIT").setInstanceCreatedCallback((e,t,r)=>{e.getProvider("auth-internal").initialize()})),Hn(new Rn("auth-internal",e=>{const t=gt(e.getProvider("auth").getImmediate());return(r=>new iv(r))(t)},"PRIVATE").setInstantiationMode("EXPLICIT")),Wt(Ql,Yl,ov(n)),Wt(Ql,Yl,"esm2020")}/**
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
 */const cv=5*60,uv=rh("authIdTokenMaxAge")||cv;let Jl=null;const lv=n=>async e=>{const t=e&&await e.getIdTokenResult(),r=t&&(new Date().getTime()-Date.parse(t.issuedAtTime))/1e3;if(r&&r>uv)return;const s=t==null?void 0:t.token;Jl!==s&&(Jl=s,await fetch(n,{method:s?"POST":"DELETE",headers:s?{Authorization:`Bearer ${s}`}:{}}))};function Fv(n=oh()){const e=ga(n,"auth");if(e.isInitialized())return e.getImmediate();const t=vT(n,{popupRedirectResolver:sv,persistence:[aI,QT,kf]}),r=rh("authTokenSyncURL");if(r&&typeof isSecureContext=="boolean"&&isSecureContext){const i=new URL(r,location.origin);if(location.origin===i.origin){const a=lv(i.toString());HT(t,a,()=>a(t.currentUser)),zT(t,c=>a(c))}}const s=th("auth");return s&&RT(t,`http://${s}`),t}function hv(){var n;return((n=document.getElementsByTagName("head"))==null?void 0:n[0])??document}lT({loadJS(n){return new Promise((e,t)=>{const r=document.createElement("script");r.setAttribute("src",n),r.onload=e,r.onerror=s=>{const i=Qe("internal-error");i.customData=s,t(i)},r.type="text/javascript",r.charset="UTF-8",hv().appendChild(r)})},gapiScript:"https://apis.google.com/js/api.js",recaptchaV2Script:"https://www.google.com/recaptcha/api.js",recaptchaEnterpriseScript:"https://www.google.com/recaptcha/enterprise.js?render="});av("Browser");export{qt as G,Mv as R,oh as a,Tv as b,Fv as c,Av as d,Nv as e,Vv as f,fv as g,yv as h,bm as i,Pv as j,bv as k,Rv as l,gv as m,Uv as n,Ov as o,_v as p,Iv as q,Dv as r,Lv as s,kv as t,xv as u,Cv as v,vv as w,Sv as x};
