const X=(e,t)=>t.some(r=>e instanceof r);let M,R;function Z(){return M||(M=[IDBDatabase,IDBObjectStore,IDBIndex,IDBCursor,IDBTransaction])}function Q(){return R||(R=[IDBCursor.prototype.advance,IDBCursor.prototype.continue,IDBCursor.prototype.continuePrimaryKey])}const U=new WeakMap,w=new WeakMap,j=new WeakMap,_=new WeakMap,C=new WeakMap;function q(e){const t=new Promise((r,a)=>{const n=()=>{e.removeEventListener("success",s),e.removeEventListener("error",o)},s=()=>{r(f(e.result)),n()},o=()=>{a(e.error),n()};e.addEventListener("success",s),e.addEventListener("error",o)});return t.then(r=>{r instanceof IDBCursor&&U.set(r,e)}).catch(()=>{}),C.set(t,e),t}function ee(e){if(w.has(e))return;const t=new Promise((r,a)=>{const n=()=>{e.removeEventListener("complete",s),e.removeEventListener("error",o),e.removeEventListener("abort",o)},s=()=>{r(),n()},o=()=>{a(e.error||new DOMException("AbortError","AbortError")),n()};e.addEventListener("complete",s),e.addEventListener("error",o),e.addEventListener("abort",o)});w.set(e,t)}let B={get(e,t,r){if(e instanceof IDBTransaction){if(t==="done")return w.get(e);if(t==="objectStoreNames")return e.objectStoreNames||j.get(e);if(t==="store")return r.objectStoreNames[1]?void 0:r.objectStore(r.objectStoreNames[0])}return f(e[t])},set(e,t,r){return e[t]=r,!0},has(e,t){return e instanceof IDBTransaction&&(t==="done"||t==="store")?!0:t in e}};function te(e){B=e(B)}function re(e){return e===IDBDatabase.prototype.transaction&&!("objectStoreNames"in IDBTransaction.prototype)?function(t,...r){const a=e.call(E(this),t,...r);return j.set(a,t.sort?t.sort():[t]),f(a)}:Q().includes(e)?function(...t){return e.apply(E(this),t),f(U.get(this))}:function(...t){return f(e.apply(E(this),t))}}function ne(e){return typeof e=="function"?re(e):(e instanceof IDBTransaction&&ee(e),X(e,Z())?new Proxy(e,B):e)}function f(e){if(e instanceof IDBRequest)return q(e);if(_.has(e))return _.get(e);const t=ne(e);return t!==e&&(_.set(e,t),C.set(t,e)),t}const E=e=>C.get(e);function ae(e,t,{blocked:r,upgrade:a,blocking:n,terminated:s}={}){const o=indexedDB.open(e,t),c=f(o);return a&&o.addEventListener("upgradeneeded",h=>{a(f(o.result),h.oldVersion,h.newVersion,f(o.transaction),h)}),r&&o.addEventListener("blocked",h=>r(h.oldVersion,h.newVersion,h)),c.then(h=>{s&&h.addEventListener("close",()=>s()),n&&h.addEventListener("versionchange",l=>n(l.oldVersion,l.newVersion,l))}).catch(()=>{}),c}const se=["get","getKey","getAll","getAllKeys","count"],oe=["put","add","delete","clear"],y=new Map;function $(e,t){if(!(e instanceof IDBDatabase&&!(t in e)&&typeof t=="string"))return;if(y.get(t))return y.get(t);const r=t.replace(/FromIndex$/,""),a=t!==r,n=oe.includes(r);if(!(r in(a?IDBIndex:IDBObjectStore).prototype)||!(n||se.includes(r)))return;const s=async function(o,...c){const h=this.transaction(o,n?"readwrite":"readonly");let l=h.store;return a&&(l=l.index(c.shift())),(await Promise.all([l[r](...c),n&&h.done]))[0]};return y.set(t,s),s}te(e=>({...e,get:(t,r,a)=>$(t,r)||e.get(t,r,a),has:(t,r)=>!!$(t,r)||e.has(t,r)}));var N={};/**
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
 */const W=function(e){const t=[];let r=0;for(let a=0;a<e.length;a++){let n=e.charCodeAt(a);n<128?t[r++]=n:n<2048?(t[r++]=n>>6|192,t[r++]=n&63|128):(n&64512)===55296&&a+1<e.length&&(e.charCodeAt(a+1)&64512)===56320?(n=65536+((n&1023)<<10)+(e.charCodeAt(++a)&1023),t[r++]=n>>18|240,t[r++]=n>>12&63|128,t[r++]=n>>6&63|128,t[r++]=n&63|128):(t[r++]=n>>12|224,t[r++]=n>>6&63|128,t[r++]=n&63|128)}return t},ie=function(e){const t=[];let r=0,a=0;for(;r<e.length;){const n=e[r++];if(n<128)t[a++]=String.fromCharCode(n);else if(n>191&&n<224){const s=e[r++];t[a++]=String.fromCharCode((n&31)<<6|s&63)}else if(n>239&&n<365){const s=e[r++],o=e[r++],c=e[r++],h=((n&7)<<18|(s&63)<<12|(o&63)<<6|c&63)-65536;t[a++]=String.fromCharCode(55296+(h>>10)),t[a++]=String.fromCharCode(56320+(h&1023))}else{const s=e[r++],o=e[r++];t[a++]=String.fromCharCode((n&15)<<12|(s&63)<<6|o&63)}}return t.join("")},k={byteToCharMap_:null,charToByteMap_:null,byteToCharMapWebSafe_:null,charToByteMapWebSafe_:null,ENCODED_VALS_BASE:"ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",get ENCODED_VALS(){return this.ENCODED_VALS_BASE+"+/="},get ENCODED_VALS_WEBSAFE(){return this.ENCODED_VALS_BASE+"-_."},HAS_NATIVE_SUPPORT:typeof atob=="function",encodeByteArray(e,t){if(!Array.isArray(e))throw Error("encodeByteArray takes an array as a parameter");this.init_();const r=t?this.byteToCharMapWebSafe_:this.byteToCharMap_,a=[];for(let n=0;n<e.length;n+=3){const s=e[n],o=n+1<e.length,c=o?e[n+1]:0,h=n+2<e.length,l=h?e[n+2]:0,O=s>>2,u=(s&3)<<4|c>>4;let b=(c&15)<<2|l>>6,m=l&63;h||(m=64,o||(b=64)),a.push(r[O],r[u],r[b],r[m])}return a.join("")},encodeString(e,t){return this.HAS_NATIVE_SUPPORT&&!t?btoa(e):this.encodeByteArray(W(e),t)},decodeString(e,t){return this.HAS_NATIVE_SUPPORT&&!t?atob(e):ie(this.decodeStringToByteArray(e,t))},decodeStringToByteArray(e,t){this.init_();const r=t?this.charToByteMapWebSafe_:this.charToByteMap_,a=[];for(let n=0;n<e.length;){const s=r[e.charAt(n++)],c=n<e.length?r[e.charAt(n)]:0;++n;const l=n<e.length?r[e.charAt(n)]:64;++n;const u=n<e.length?r[e.charAt(n)]:64;if(++n,s==null||c==null||l==null||u==null)throw new ce;const b=s<<2|c>>4;if(a.push(b),l!==64){const m=c<<4&240|l>>2;if(a.push(m),u!==64){const z=l<<6&192|u;a.push(z)}}}return a},init_(){if(!this.byteToCharMap_){this.byteToCharMap_={},this.charToByteMap_={},this.byteToCharMapWebSafe_={},this.charToByteMapWebSafe_={};for(let e=0;e<this.ENCODED_VALS.length;e++)this.byteToCharMap_[e]=this.ENCODED_VALS.charAt(e),this.charToByteMap_[this.byteToCharMap_[e]]=e,this.byteToCharMapWebSafe_[e]=this.ENCODED_VALS_WEBSAFE.charAt(e),this.charToByteMapWebSafe_[this.byteToCharMapWebSafe_[e]]=e,e>=this.ENCODED_VALS_BASE.length&&(this.charToByteMap_[this.ENCODED_VALS_WEBSAFE.charAt(e)]=e,this.charToByteMapWebSafe_[this.ENCODED_VALS.charAt(e)]=e)}}};class ce extends Error{constructor(){super(...arguments),this.name="DecodeBase64StringError"}}const he=function(e){const t=W(e);return k.encodeByteArray(t,!0)},G=function(e){return he(e).replace(/\./g,"")},le=function(e){try{return k.decodeString(e,!0)}catch(t){console.error("base64Decode failed: ",t)}return null};/**
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
 */function de(){if(typeof self<"u")return self;if(typeof window<"u")return window;if(typeof global<"u")return global;throw new Error("Unable to locate global object.")}/**
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
 */const fe=()=>de().__FIREBASE_DEFAULTS__,ue=()=>{if(typeof process>"u"||typeof N>"u")return;const e=N.__FIREBASE_DEFAULTS__;if(e)return JSON.parse(e)},pe=()=>{if(typeof document>"u")return;let e;try{e=document.cookie.match(/__FIREBASE_DEFAULTS__=([^;]+)/)}catch{return}const t=e&&le(e[1]);return t&&JSON.parse(t)},ge=()=>{try{return fe()||ue()||pe()}catch(e){console.info(`Unable to get __FIREBASE_DEFAULTS__ due to: ${e}`);return}};/**
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
 */function gt(){return typeof navigator<"u"&&typeof navigator.userAgent=="string"?navigator.userAgent:""}function be(){var e;const t=(e=ge())===null||e===void 0?void 0:e.forceEnvironment;if(t==="node")return!0;if(t==="browser")return!1;try{return Object.prototype.toString.call(global.process)==="[object process]"}catch{return!1}}function bt(){return!be()&&!!navigator.userAgent&&navigator.userAgent.includes("Safari")&&!navigator.userAgent.includes("Chrome")}function me(){try{return typeof indexedDB=="object"}catch{return!1}}function _e(){return new Promise((e,t)=>{try{let r=!0;const a="validate-browser-context-for-indexeddb-analytics-module",n=self.indexedDB.open(a);n.onsuccess=()=>{n.result.close(),r||self.indexedDB.deleteDatabase(a),e(!0)},n.onupgradeneeded=()=>{r=!1},n.onerror=()=>{var s;t(((s=n.error)===null||s===void 0?void 0:s.message)||"")}}catch(r){t(r)}})}/**
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
 */const Ee="FirebaseError";class g extends Error{constructor(t,r,a){super(r),this.code=t,this.customData=a,this.name=Ee,Object.setPrototypeOf(this,g.prototype),Error.captureStackTrace&&Error.captureStackTrace(this,J.prototype.create)}}class J{constructor(t,r,a){this.service=t,this.serviceName=r,this.errors=a}create(t,...r){const a=r[0]||{},n=`${this.service}/${t}`,s=this.errors[t],o=s?ye(s,a):"Error",c=`${this.serviceName}: ${o} (${n}).`;return new g(n,c,a)}}function ye(e,t){return e.replace(Se,(r,a)=>{const n=t[a];return n!=null?String(n):`<${a}?>`})}const Se=/\{\$([^}]+)}/g;/**
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
 */function mt(e){return e&&e._delegate?e._delegate:e}class A{constructor(t,r,a){this.name=t,this.instanceFactory=r,this.type=a,this.multipleInstances=!1,this.serviceProps={},this.instantiationMode="LAZY",this.onInstanceCreated=null}setInstantiationMode(t){return this.instantiationMode=t,this}setMultipleInstances(t){return this.multipleInstances=t,this}setServiceProps(t){return this.serviceProps=t,this}setInstanceCreatedCallback(t){return this.onInstanceCreated=t,this}}/**
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
 */var i;(function(e){e[e.DEBUG=0]="DEBUG",e[e.VERBOSE=1]="VERBOSE",e[e.INFO=2]="INFO",e[e.WARN=3]="WARN",e[e.ERROR=4]="ERROR",e[e.SILENT=5]="SILENT"})(i||(i={}));const De={debug:i.DEBUG,verbose:i.VERBOSE,info:i.INFO,warn:i.WARN,error:i.ERROR,silent:i.SILENT},we=i.INFO,Be={[i.DEBUG]:"log",[i.VERBOSE]:"log",[i.INFO]:"info",[i.WARN]:"warn",[i.ERROR]:"error"},Ae=(e,t,...r)=>{if(t<e.logLevel)return;const a=new Date().toISOString(),n=Be[t];if(n)console[n](`[${a}]  ${e.name}:`,...r);else throw new Error(`Attempted to log a message with an invalid logType (value: ${t})`)};class ve{constructor(t){this.name=t,this._logLevel=we,this._logHandler=Ae,this._userLogHandler=null}get logLevel(){return this._logLevel}set logLevel(t){if(!(t in i))throw new TypeError(`Invalid value "${t}" assigned to \`logLevel\``);this._logLevel=t}setLogLevel(t){this._logLevel=typeof t=="string"?De[t]:t}get logHandler(){return this._logHandler}set logHandler(t){if(typeof t!="function")throw new TypeError("Value assigned to `logHandler` must be a function");this._logHandler=t}get userLogHandler(){return this._userLogHandler}set userLogHandler(t){this._userLogHandler=t}debug(...t){this._userLogHandler&&this._userLogHandler(this,i.DEBUG,...t),this._logHandler(this,i.DEBUG,...t)}log(...t){this._userLogHandler&&this._userLogHandler(this,i.VERBOSE,...t),this._logHandler(this,i.VERBOSE,...t)}info(...t){this._userLogHandler&&this._userLogHandler(this,i.INFO,...t),this._logHandler(this,i.INFO,...t)}warn(...t){this._userLogHandler&&this._userLogHandler(this,i.WARN,...t),this._logHandler(this,i.WARN,...t)}error(...t){this._userLogHandler&&this._userLogHandler(this,i.ERROR,...t),this._logHandler(this,i.ERROR,...t)}}/**
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
 */class Ie{constructor(t){this.container=t}getPlatformInfoString(){return this.container.getProviders().map(r=>{if(Ce(r)){const a=r.getImmediate();return`${a.library}/${a.version}`}else return null}).filter(r=>r).join(" ")}}function Ce(e){const t=e.getComponent();return(t==null?void 0:t.type)==="VERSION"}const v="@firebase/app",H="0.10.13";/**
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
 */const d=new ve("@firebase/app"),Te="@firebase/app-compat",Oe="@firebase/analytics-compat",Me="@firebase/analytics",Re="@firebase/app-check-compat",$e="@firebase/app-check",Ne="@firebase/auth",He="@firebase/auth-compat",Le="@firebase/database",Fe="@firebase/data-connect",Pe="@firebase/database-compat",xe="@firebase/functions",Ve="@firebase/functions-compat",Ue="@firebase/installations",je="@firebase/installations-compat",We="@firebase/messaging",ke="@firebase/messaging-compat",Ge="@firebase/performance",Je="@firebase/performance-compat",Ke="@firebase/remote-config",Ye="@firebase/remote-config-compat",ze="@firebase/storage",Xe="@firebase/storage-compat",Ze="@firebase/firestore",Qe="@firebase/vertexai-preview",qe="@firebase/firestore-compat",et="firebase",tt="10.14.1",rt={[v]:"fire-core",[Te]:"fire-core-compat",[Me]:"fire-analytics",[Oe]:"fire-analytics-compat",[$e]:"fire-app-check",[Re]:"fire-app-check-compat",[Ne]:"fire-auth",[He]:"fire-auth-compat",[Le]:"fire-rtdb",[Fe]:"fire-data-connect",[Pe]:"fire-rtdb-compat",[xe]:"fire-fn",[Ve]:"fire-fn-compat",[Ue]:"fire-iid",[je]:"fire-iid-compat",[We]:"fire-fcm",[ke]:"fire-fcm-compat",[Ge]:"fire-perf",[Je]:"fire-perf-compat",[Ke]:"fire-rc",[Ye]:"fire-rc-compat",[ze]:"fire-gcs",[Xe]:"fire-gcs-compat",[Ze]:"fire-fst",[qe]:"fire-fst-compat",[Qe]:"fire-vertex","fire-js":"fire-js",[et]:"fire-js-all"};/**
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
 */const nt=new Map,at=new Map,L=new Map;function F(e,t){try{e.container.addComponent(t)}catch(r){d.debug(`Component ${t.name} failed to register with FirebaseApp ${e.name}`,r)}}function I(e){const t=e.name;if(L.has(t))return d.debug(`There were multiple attempts to register component ${t}.`),!1;L.set(t,e);for(const r of nt.values())F(r,e);for(const r of at.values())F(r,e);return!0}/**
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
 */const st={"no-app":"No Firebase App '{$appName}' has been created - call initializeApp() first","bad-app-name":"Illegal App name: '{$appName}'","duplicate-app":"Firebase App named '{$appName}' already exists with different options or config","app-deleted":"Firebase App named '{$appName}' already deleted","server-app-deleted":"Firebase Server App has been deleted","no-options":"Need to provide options, when not being deployed to hosting via source.","invalid-app-argument":"firebase.{$appName}() takes either no argument or a Firebase App instance.","invalid-log-argument":"First argument to `onLog` must be null or a function.","idb-open":"Error thrown when opening IndexedDB. Original error: {$originalErrorMessage}.","idb-get":"Error thrown when reading from IndexedDB. Original error: {$originalErrorMessage}.","idb-set":"Error thrown when writing to IndexedDB. Original error: {$originalErrorMessage}.","idb-delete":"Error thrown when deleting from IndexedDB. Original error: {$originalErrorMessage}.","finalization-registry-not-supported":"FirebaseServerApp deleteOnDeref field defined but the JS runtime does not support FinalizationRegistry.","invalid-server-app-environment":"FirebaseServerApp is not for use in browser environments."},T=new J("app","Firebase",st);/**
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
 */const _t=tt;function S(e,t,r){var a;let n=(a=rt[e])!==null&&a!==void 0?a:e;r&&(n+=`-${r}`);const s=n.match(/\s|\//),o=t.match(/\s|\//);if(s||o){const c=[`Unable to register library "${n}" with version "${t}":`];s&&c.push(`library name "${n}" contains illegal characters (whitespace or "/")`),s&&o&&c.push("and"),o&&c.push(`version name "${t}" contains illegal characters (whitespace or "/")`),d.warn(c.join(" "));return}I(new A(`${n}-version`,()=>({library:n,version:t}),"VERSION"))}/**
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
 */const ot="firebase-heartbeat-database",it=1,p="firebase-heartbeat-store";let D=null;function K(){return D||(D=ae(ot,it,{upgrade:(e,t)=>{switch(t){case 0:try{e.createObjectStore(p)}catch(r){console.warn(r)}}}}).catch(e=>{throw T.create("idb-open",{originalErrorMessage:e.message})})),D}async function ct(e){try{const r=(await K()).transaction(p),a=await r.objectStore(p).get(Y(e));return await r.done,a}catch(t){if(t instanceof g)d.warn(t.message);else{const r=T.create("idb-get",{originalErrorMessage:t==null?void 0:t.message});d.warn(r.message)}}}async function P(e,t){try{const a=(await K()).transaction(p,"readwrite");await a.objectStore(p).put(t,Y(e)),await a.done}catch(r){if(r instanceof g)d.warn(r.message);else{const a=T.create("idb-set",{originalErrorMessage:r==null?void 0:r.message});d.warn(a.message)}}}function Y(e){return`${e.name}!${e.options.appId}`}/**
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
 */const ht=1024,lt=30*24*60*60*1e3;class dt{constructor(t){this.container=t,this._heartbeatsCache=null;const r=this.container.getProvider("app").getImmediate();this._storage=new ut(r),this._heartbeatsCachePromise=this._storage.read().then(a=>(this._heartbeatsCache=a,a))}async triggerHeartbeat(){var t,r;try{const n=this.container.getProvider("platform-logger").getImmediate().getPlatformInfoString(),s=x();return((t=this._heartbeatsCache)===null||t===void 0?void 0:t.heartbeats)==null&&(this._heartbeatsCache=await this._heartbeatsCachePromise,((r=this._heartbeatsCache)===null||r===void 0?void 0:r.heartbeats)==null)||this._heartbeatsCache.lastSentHeartbeatDate===s||this._heartbeatsCache.heartbeats.some(o=>o.date===s)?void 0:(this._heartbeatsCache.heartbeats.push({date:s,agent:n}),this._heartbeatsCache.heartbeats=this._heartbeatsCache.heartbeats.filter(o=>{const c=new Date(o.date).valueOf();return Date.now()-c<=lt}),this._storage.overwrite(this._heartbeatsCache))}catch(a){d.warn(a)}}async getHeartbeatsHeader(){var t;try{if(this._heartbeatsCache===null&&await this._heartbeatsCachePromise,((t=this._heartbeatsCache)===null||t===void 0?void 0:t.heartbeats)==null||this._heartbeatsCache.heartbeats.length===0)return"";const r=x(),{heartbeatsToSend:a,unsentEntries:n}=ft(this._heartbeatsCache.heartbeats),s=G(JSON.stringify({version:2,heartbeats:a}));return this._heartbeatsCache.lastSentHeartbeatDate=r,n.length>0?(this._heartbeatsCache.heartbeats=n,await this._storage.overwrite(this._heartbeatsCache)):(this._heartbeatsCache.heartbeats=[],this._storage.overwrite(this._heartbeatsCache)),s}catch(r){return d.warn(r),""}}}function x(){return new Date().toISOString().substring(0,10)}function ft(e,t=ht){const r=[];let a=e.slice();for(const n of e){const s=r.find(o=>o.agent===n.agent);if(s){if(s.dates.push(n.date),V(r)>t){s.dates.pop();break}}else if(r.push({agent:n.agent,dates:[n.date]}),V(r)>t){r.pop();break}a=a.slice(1)}return{heartbeatsToSend:r,unsentEntries:a}}class ut{constructor(t){this.app=t,this._canUseIndexedDBPromise=this.runIndexedDBEnvironmentCheck()}async runIndexedDBEnvironmentCheck(){return me()?_e().then(()=>!0).catch(()=>!1):!1}async read(){if(await this._canUseIndexedDBPromise){const r=await ct(this.app);return r!=null&&r.heartbeats?r:{heartbeats:[]}}else return{heartbeats:[]}}async overwrite(t){var r;if(await this._canUseIndexedDBPromise){const n=await this.read();return P(this.app,{lastSentHeartbeatDate:(r=t.lastSentHeartbeatDate)!==null&&r!==void 0?r:n.lastSentHeartbeatDate,heartbeats:t.heartbeats})}else return}async add(t){var r;if(await this._canUseIndexedDBPromise){const n=await this.read();return P(this.app,{lastSentHeartbeatDate:(r=t.lastSentHeartbeatDate)!==null&&r!==void 0?r:n.lastSentHeartbeatDate,heartbeats:[...n.heartbeats,...t.heartbeats]})}else return}}function V(e){return G(JSON.stringify({version:2,heartbeats:e})).length}/**
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
 */function pt(e){I(new A("platform-logger",t=>new Ie(t),"PRIVATE")),I(new A("heartbeat",t=>new dt(t),"PRIVATE")),S(v,H,e),S(v,H,"esm2017"),S("fire-js","")}pt("");export{A as C,g as F,ve as L,_t as S,I as _,i as a,gt as b,mt as g,bt as i,ae as o,S as r};
