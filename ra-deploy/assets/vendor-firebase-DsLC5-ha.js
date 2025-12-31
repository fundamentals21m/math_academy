var _n={};/**
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
 */const qn=function(r){const e=[];let n=0;for(let o=0;o<r.length;o++){let h=r.charCodeAt(o);h<128?e[n++]=h:h<2048?(e[n++]=h>>6|192,e[n++]=h&63|128):(h&64512)===55296&&o+1<r.length&&(r.charCodeAt(o+1)&64512)===56320?(h=65536+((h&1023)<<10)+(r.charCodeAt(++o)&1023),e[n++]=h>>18|240,e[n++]=h>>12&63|128,e[n++]=h>>6&63|128,e[n++]=h&63|128):(e[n++]=h>>12|224,e[n++]=h>>6&63|128,e[n++]=h&63|128)}return e},ss=function(r){const e=[];let n=0,o=0;for(;n<r.length;){const h=r[n++];if(h<128)e[o++]=String.fromCharCode(h);else if(h>191&&h<224){const f=r[n++];e[o++]=String.fromCharCode((h&31)<<6|f&63)}else if(h>239&&h<365){const f=r[n++],y=r[n++],w=r[n++],E=((h&7)<<18|(f&63)<<12|(y&63)<<6|w&63)-65536;e[o++]=String.fromCharCode(55296+(E>>10)),e[o++]=String.fromCharCode(56320+(E&1023))}else{const f=r[n++],y=r[n++];e[o++]=String.fromCharCode((h&15)<<12|(f&63)<<6|y&63)}}return e.join("")},Jn={byteToCharMap_:null,charToByteMap_:null,byteToCharMapWebSafe_:null,charToByteMapWebSafe_:null,ENCODED_VALS_BASE:"ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",get ENCODED_VALS(){return this.ENCODED_VALS_BASE+"+/="},get ENCODED_VALS_WEBSAFE(){return this.ENCODED_VALS_BASE+"-_."},HAS_NATIVE_SUPPORT:typeof atob=="function",encodeByteArray(r,e){if(!Array.isArray(r))throw Error("encodeByteArray takes an array as a parameter");this.init_();const n=e?this.byteToCharMapWebSafe_:this.byteToCharMap_,o=[];for(let h=0;h<r.length;h+=3){const f=r[h],y=h+1<r.length,w=y?r[h+1]:0,E=h+2<r.length,I=E?r[h+2]:0,O=f>>2,L=(f&3)<<4|w>>4;let k=(w&15)<<2|I>>6,$=I&63;E||($=64,y||(k=64)),o.push(n[O],n[L],n[k],n[$])}return o.join("")},encodeString(r,e){return this.HAS_NATIVE_SUPPORT&&!e?btoa(r):this.encodeByteArray(qn(r),e)},decodeString(r,e){return this.HAS_NATIVE_SUPPORT&&!e?atob(r):ss(this.decodeStringToByteArray(r,e))},decodeStringToByteArray(r,e){this.init_();const n=e?this.charToByteMapWebSafe_:this.charToByteMap_,o=[];for(let h=0;h<r.length;){const f=n[r.charAt(h++)],w=h<r.length?n[r.charAt(h)]:0;++h;const I=h<r.length?n[r.charAt(h)]:64;++h;const L=h<r.length?n[r.charAt(h)]:64;if(++h,f==null||w==null||I==null||L==null)throw new os;const k=f<<2|w>>4;if(o.push(k),I!==64){const $=w<<4&240|I>>2;if(o.push($),L!==64){const b=I<<6&192|L;o.push(b)}}}return o},init_(){if(!this.byteToCharMap_){this.byteToCharMap_={},this.charToByteMap_={},this.byteToCharMapWebSafe_={},this.charToByteMapWebSafe_={};for(let r=0;r<this.ENCODED_VALS.length;r++)this.byteToCharMap_[r]=this.ENCODED_VALS.charAt(r),this.charToByteMap_[this.byteToCharMap_[r]]=r,this.byteToCharMapWebSafe_[r]=this.ENCODED_VALS_WEBSAFE.charAt(r),this.charToByteMapWebSafe_[this.byteToCharMapWebSafe_[r]]=r,r>=this.ENCODED_VALS_BASE.length&&(this.charToByteMap_[this.ENCODED_VALS_WEBSAFE.charAt(r)]=r,this.charToByteMapWebSafe_[this.ENCODED_VALS.charAt(r)]=r)}}};class os extends Error{constructor(){super(...arguments),this.name="DecodeBase64StringError"}}const as=function(r){const e=qn(r);return Jn.encodeByteArray(e,!0)},Yn=function(r){return as(r).replace(/\./g,"")},Qn=function(r){try{return Jn.decodeString(r,!0)}catch(e){console.error("base64Decode failed: ",e)}return null};/**
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
 */function hs(){if(typeof self<"u")return self;if(typeof window<"u")return window;if(typeof global<"u")return global;throw new Error("Unable to locate global object.")}/**
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
 */const ls=()=>hs().__FIREBASE_DEFAULTS__,us=()=>{if(typeof process>"u"||typeof _n>"u")return;const r=_n.__FIREBASE_DEFAULTS__;if(r)return JSON.parse(r)},cs=()=>{if(typeof document>"u")return;let r;try{r=document.cookie.match(/__FIREBASE_DEFAULTS__=([^;]+)/)}catch{return}const e=r&&Qn(r[1]);return e&&JSON.parse(e)},fs=()=>{try{return ls()||us()||cs()}catch(r){console.info(`Unable to get __FIREBASE_DEFAULTS__ due to: ${r}`);return}},ds=r=>{var e;return(e=fs())===null||e===void 0?void 0:e[`_${r}`]};/**
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
 */function it(){return typeof navigator<"u"&&typeof navigator.userAgent=="string"?navigator.userAgent:""}function ps(){return typeof window<"u"&&!!(window.cordova||window.phonegap||window.PhoneGap)&&/ios|iphone|ipod|ipad|android|blackberry|iemobile/i.test(it())}function gs(){return typeof navigator<"u"&&navigator.userAgent==="Cloudflare-Workers"}function ms(){const r=typeof chrome=="object"?chrome.runtime:typeof browser=="object"?browser.runtime:void 0;return typeof r=="object"&&r.id!==void 0}function ys(){return typeof navigator=="object"&&navigator.product==="ReactNative"}function vs(){try{return typeof indexedDB=="object"}catch{return!1}}function _s(){return new Promise((r,e)=>{try{let n=!0;const o="validate-browser-context-for-indexeddb-analytics-module",h=self.indexedDB.open(o);h.onsuccess=()=>{h.result.close(),n||self.indexedDB.deleteDatabase(o),r(!0)},h.onupgradeneeded=()=>{n=!1},h.onerror=()=>{var f;e(((f=h.error)===null||f===void 0?void 0:f.message)||"")}}catch(n){e(n)}})}/**
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
 */const ws="FirebaseError";class gt extends Error{constructor(e,n,o){super(n),this.code=e,this.customData=o,this.name=ws,Object.setPrototypeOf(this,gt.prototype),Error.captureStackTrace&&Error.captureStackTrace(this,Zt.prototype.create)}}class Zt{constructor(e,n,o){this.service=e,this.serviceName=n,this.errors=o}create(e,...n){const o=n[0]||{},h=`${this.service}/${e}`,f=this.errors[e],y=f?Es(f,o):"Error",w=`${this.serviceName}: ${y} (${h}).`;return new gt(h,w,o)}}function Es(r,e){return r.replace(Ts,(n,o)=>{const h=e[o];return h!=null?String(h):`<${o}?>`})}const Ts=/\{\$([^}]+)}/g;/**
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
 */function Zn(r){const e=[];for(const[n,o]of Object.entries(r))Array.isArray(o)?o.forEach(h=>{e.push(encodeURIComponent(n)+"="+encodeURIComponent(h))}):e.push(encodeURIComponent(n)+"="+encodeURIComponent(o));return e.length?"&"+e.join("&"):""}function Is(r,e){const n=new As(r,e);return n.subscribe.bind(n)}class As{constructor(e,n){this.observers=[],this.unsubscribes=[],this.observerCount=0,this.task=Promise.resolve(),this.finalized=!1,this.onNoObservers=n,this.task.then(()=>{e(this)}).catch(o=>{this.error(o)})}next(e){this.forEachObserver(n=>{n.next(e)})}error(e){this.forEachObserver(n=>{n.error(e)}),this.close(e)}complete(){this.forEachObserver(e=>{e.complete()}),this.close()}subscribe(e,n,o){let h;if(e===void 0&&n===void 0&&o===void 0)throw new Error("Missing Observer.");Ss(e,["next","error","complete"])?h=e:h={next:e,error:n,complete:o},h.next===void 0&&(h.next=ii),h.error===void 0&&(h.error=ii),h.complete===void 0&&(h.complete=ii);const f=this.unsubscribeOne.bind(this,this.observers.length);return this.finalized&&this.task.then(()=>{try{this.finalError?h.error(this.finalError):h.complete()}catch{}}),this.observers.push(h),f}unsubscribeOne(e){this.observers===void 0||this.observers[e]===void 0||(delete this.observers[e],this.observerCount-=1,this.observerCount===0&&this.onNoObservers!==void 0&&this.onNoObservers(this))}forEachObserver(e){if(!this.finalized)for(let n=0;n<this.observers.length;n++)this.sendOne(n,e)}sendOne(e,n){this.task.then(()=>{if(this.observers!==void 0&&this.observers[e]!==void 0)try{n(this.observers[e])}catch(o){typeof console<"u"&&console.error&&console.error(o)}})}close(e){this.finalized||(this.finalized=!0,e!==void 0&&(this.finalError=e),this.task.then(()=>{this.observers=void 0,this.onNoObservers=void 0}))}}function Ss(r,e){if(typeof r!="object"||r===null)return!1;for(const n of e)if(n in r&&typeof r[n]=="function")return!0;return!1}function ii(){}/**
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
 */function be(r){return r&&r._delegate?r._delegate:r}class Et{constructor(e,n,o){this.name=e,this.instanceFactory=n,this.type=o,this.multipleInstances=!1,this.serviceProps={},this.instantiationMode="LAZY",this.onInstanceCreated=null}setInstantiationMode(e){return this.instantiationMode=e,this}setMultipleInstances(e){return this.multipleInstances=e,this}setServiceProps(e){return this.serviceProps=e,this}setInstanceCreatedCallback(e){return this.onInstanceCreated=e,this}}/**
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
 */var P;(function(r){r[r.DEBUG=0]="DEBUG",r[r.VERBOSE=1]="VERBOSE",r[r.INFO=2]="INFO",r[r.WARN=3]="WARN",r[r.ERROR=4]="ERROR",r[r.SILENT=5]="SILENT"})(P||(P={}));const bs={debug:P.DEBUG,verbose:P.VERBOSE,info:P.INFO,warn:P.WARN,error:P.ERROR,silent:P.SILENT},Cs=P.INFO,Ps={[P.DEBUG]:"log",[P.VERBOSE]:"log",[P.INFO]:"info",[P.WARN]:"warn",[P.ERROR]:"error"},Rs=(r,e,...n)=>{if(e<r.logLevel)return;const o=new Date().toISOString(),h=Ps[e];if(h)console[h](`[${o}]  ${r.name}:`,...n);else throw new Error(`Attempted to log a message with an invalid logType (value: ${e})`)};class gi{constructor(e){this.name=e,this._logLevel=Cs,this._logHandler=Rs,this._userLogHandler=null}get logLevel(){return this._logLevel}set logLevel(e){if(!(e in P))throw new TypeError(`Invalid value "${e}" assigned to \`logLevel\``);this._logLevel=e}setLogLevel(e){this._logLevel=typeof e=="string"?bs[e]:e}get logHandler(){return this._logHandler}set logHandler(e){if(typeof e!="function")throw new TypeError("Value assigned to `logHandler` must be a function");this._logHandler=e}get userLogHandler(){return this._userLogHandler}set userLogHandler(e){this._userLogHandler=e}debug(...e){this._userLogHandler&&this._userLogHandler(this,P.DEBUG,...e),this._logHandler(this,P.DEBUG,...e)}log(...e){this._userLogHandler&&this._userLogHandler(this,P.VERBOSE,...e),this._logHandler(this,P.VERBOSE,...e)}info(...e){this._userLogHandler&&this._userLogHandler(this,P.INFO,...e),this._logHandler(this,P.INFO,...e)}warn(...e){this._userLogHandler&&this._userLogHandler(this,P.WARN,...e),this._logHandler(this,P.WARN,...e)}error(...e){this._userLogHandler&&this._userLogHandler(this,P.ERROR,...e),this._logHandler(this,P.ERROR,...e)}}const ks=(r,e)=>e.some(n=>r instanceof n);let wn,En;function Ns(){return wn||(wn=[IDBDatabase,IDBObjectStore,IDBIndex,IDBCursor,IDBTransaction])}function Ds(){return En||(En=[IDBCursor.prototype.advance,IDBCursor.prototype.continue,IDBCursor.prototype.continuePrimaryKey])}const tr=new WeakMap,ui=new WeakMap,er=new WeakMap,ni=new WeakMap,mi=new WeakMap;function Os(r){const e=new Promise((n,o)=>{const h=()=>{r.removeEventListener("success",f),r.removeEventListener("error",y)},f=()=>{n(pt(r.result)),h()},y=()=>{o(r.error),h()};r.addEventListener("success",f),r.addEventListener("error",y)});return e.then(n=>{n instanceof IDBCursor&&tr.set(n,r)}).catch(()=>{}),mi.set(e,r),e}function Ls(r){if(ui.has(r))return;const e=new Promise((n,o)=>{const h=()=>{r.removeEventListener("complete",f),r.removeEventListener("error",y),r.removeEventListener("abort",y)},f=()=>{n(),h()},y=()=>{o(r.error||new DOMException("AbortError","AbortError")),h()};r.addEventListener("complete",f),r.addEventListener("error",y),r.addEventListener("abort",y)});ui.set(r,e)}let ci={get(r,e,n){if(r instanceof IDBTransaction){if(e==="done")return ui.get(r);if(e==="objectStoreNames")return r.objectStoreNames||er.get(r);if(e==="store")return n.objectStoreNames[1]?void 0:n.objectStore(n.objectStoreNames[0])}return pt(r[e])},set(r,e,n){return r[e]=n,!0},has(r,e){return r instanceof IDBTransaction&&(e==="done"||e==="store")?!0:e in r}};function Ms(r){ci=r(ci)}function Us(r){return r===IDBDatabase.prototype.transaction&&!("objectStoreNames"in IDBTransaction.prototype)?function(e,...n){const o=r.call(ri(this),e,...n);return er.set(o,e.sort?e.sort():[e]),pt(o)}:Ds().includes(r)?function(...e){return r.apply(ri(this),e),pt(tr.get(this))}:function(...e){return pt(r.apply(ri(this),e))}}function xs(r){return typeof r=="function"?Us(r):(r instanceof IDBTransaction&&Ls(r),ks(r,Ns())?new Proxy(r,ci):r)}function pt(r){if(r instanceof IDBRequest)return Os(r);if(ni.has(r))return ni.get(r);const e=xs(r);return e!==r&&(ni.set(r,e),mi.set(e,r)),e}const ri=r=>mi.get(r);function Fs(r,e,{blocked:n,upgrade:o,blocking:h,terminated:f}={}){const y=indexedDB.open(r,e),w=pt(y);return o&&y.addEventListener("upgradeneeded",E=>{o(pt(y.result),E.oldVersion,E.newVersion,pt(y.transaction),E)}),n&&y.addEventListener("blocked",E=>n(E.oldVersion,E.newVersion,E)),w.then(E=>{f&&E.addEventListener("close",()=>f()),h&&E.addEventListener("versionchange",I=>h(I.oldVersion,I.newVersion,I))}).catch(()=>{}),w}const Bs=["get","getKey","getAll","getAllKeys","count"],js=["put","add","delete","clear"],si=new Map;function Tn(r,e){if(!(r instanceof IDBDatabase&&!(e in r)&&typeof e=="string"))return;if(si.get(e))return si.get(e);const n=e.replace(/FromIndex$/,""),o=e!==n,h=js.includes(n);if(!(n in(o?IDBIndex:IDBObjectStore).prototype)||!(h||Bs.includes(n)))return;const f=async function(y,...w){const E=this.transaction(y,h?"readwrite":"readonly");let I=E.store;return o&&(I=I.index(w.shift())),(await Promise.all([I[n](...w),h&&E.done]))[0]};return si.set(e,f),f}Ms(r=>({...r,get:(e,n,o)=>Tn(e,n)||r.get(e,n,o),has:(e,n)=>!!Tn(e,n)||r.has(e,n)}));/**
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
 */class Vs{constructor(e){this.container=e}getPlatformInfoString(){return this.container.getProviders().map(n=>{if(Hs(n)){const o=n.getImmediate();return`${o.library}/${o.version}`}else return null}).filter(n=>n).join(" ")}}function Hs(r){const e=r.getComponent();return(e==null?void 0:e.type)==="VERSION"}const fi="@firebase/app",In="0.10.13";/**
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
 */const at=new gi("@firebase/app"),$s="@firebase/app-compat",Gs="@firebase/analytics-compat",Ks="@firebase/analytics",zs="@firebase/app-check-compat",Ws="@firebase/app-check",Xs="@firebase/auth",qs="@firebase/auth-compat",Js="@firebase/database",Ys="@firebase/data-connect",Qs="@firebase/database-compat",Zs="@firebase/functions",to="@firebase/functions-compat",eo="@firebase/installations",io="@firebase/installations-compat",no="@firebase/messaging",ro="@firebase/messaging-compat",so="@firebase/performance",oo="@firebase/performance-compat",ao="@firebase/remote-config",ho="@firebase/remote-config-compat",lo="@firebase/storage",uo="@firebase/storage-compat",co="@firebase/firestore",fo="@firebase/vertexai-preview",po="@firebase/firestore-compat",go="firebase",mo="10.14.1",yo={[fi]:"fire-core",[$s]:"fire-core-compat",[Ks]:"fire-analytics",[Gs]:"fire-analytics-compat",[Ws]:"fire-app-check",[zs]:"fire-app-check-compat",[Xs]:"fire-auth",[qs]:"fire-auth-compat",[Js]:"fire-rtdb",[Ys]:"fire-data-connect",[Qs]:"fire-rtdb-compat",[Zs]:"fire-fn",[to]:"fire-fn-compat",[eo]:"fire-iid",[io]:"fire-iid-compat",[no]:"fire-fcm",[ro]:"fire-fcm-compat",[so]:"fire-perf",[oo]:"fire-perf-compat",[ao]:"fire-rc",[ho]:"fire-rc-compat",[lo]:"fire-gcs",[uo]:"fire-gcs-compat",[co]:"fire-fst",[po]:"fire-fst-compat",[fo]:"fire-vertex","fire-js":"fire-js",[go]:"fire-js-all"};/**
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
 */const vo=new Map,_o=new Map,An=new Map;function Sn(r,e){try{r.container.addComponent(e)}catch(n){at.debug(`Component ${e.name} failed to register with FirebaseApp ${r.name}`,n)}}function Tt(r){const e=r.name;if(An.has(e))return at.debug(`There were multiple attempts to register component ${e}.`),!1;An.set(e,r);for(const n of vo.values())Sn(n,r);for(const n of _o.values())Sn(n,r);return!0}function Wt(r){return r.settings!==void 0}/**
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
 */const wo={"no-app":"No Firebase App '{$appName}' has been created - call initializeApp() first","bad-app-name":"Illegal App name: '{$appName}'","duplicate-app":"Firebase App named '{$appName}' already exists with different options or config","app-deleted":"Firebase App named '{$appName}' already deleted","server-app-deleted":"Firebase Server App has been deleted","no-options":"Need to provide options, when not being deployed to hosting via source.","invalid-app-argument":"firebase.{$appName}() takes either no argument or a Firebase App instance.","invalid-log-argument":"First argument to `onLog` must be null or a function.","idb-open":"Error thrown when opening IndexedDB. Original error: {$originalErrorMessage}.","idb-get":"Error thrown when reading from IndexedDB. Original error: {$originalErrorMessage}.","idb-set":"Error thrown when writing to IndexedDB. Original error: {$originalErrorMessage}.","idb-delete":"Error thrown when deleting from IndexedDB. Original error: {$originalErrorMessage}.","finalization-registry-not-supported":"FirebaseServerApp deleteOnDeref field defined but the JS runtime does not support FinalizationRegistry.","invalid-server-app-environment":"FirebaseServerApp is not for use in browser environments."},yi=new Zt("app","Firebase",wo);/**
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
 */const Ce=mo;function et(r,e,n){var o;let h=(o=yo[r])!==null&&o!==void 0?o:r;n&&(h+=`-${n}`);const f=h.match(/\s|\//),y=e.match(/\s|\//);if(f||y){const w=[`Unable to register library "${h}" with version "${e}":`];f&&w.push(`library name "${h}" contains illegal characters (whitespace or "/")`),f&&y&&w.push("and"),y&&w.push(`version name "${e}" contains illegal characters (whitespace or "/")`),at.warn(w.join(" "));return}Tt(new Et(`${h}-version`,()=>({library:h,version:e}),"VERSION"))}/**
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
 */const Eo="firebase-heartbeat-database",To=1,Qt="firebase-heartbeat-store";let oi=null;function ir(){return oi||(oi=Fs(Eo,To,{upgrade:(r,e)=>{switch(e){case 0:try{r.createObjectStore(Qt)}catch(n){console.warn(n)}}}}).catch(r=>{throw yi.create("idb-open",{originalErrorMessage:r.message})})),oi}async function Io(r){try{const n=(await ir()).transaction(Qt),o=await n.objectStore(Qt).get(nr(r));return await n.done,o}catch(e){if(e instanceof gt)at.warn(e.message);else{const n=yi.create("idb-get",{originalErrorMessage:e==null?void 0:e.message});at.warn(n.message)}}}async function bn(r,e){try{const o=(await ir()).transaction(Qt,"readwrite");await o.objectStore(Qt).put(e,nr(r)),await o.done}catch(n){if(n instanceof gt)at.warn(n.message);else{const o=yi.create("idb-set",{originalErrorMessage:n==null?void 0:n.message});at.warn(o.message)}}}function nr(r){return`${r.name}!${r.options.appId}`}/**
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
 */const Ao=1024,So=30*24*60*60*1e3;class bo{constructor(e){this.container=e,this._heartbeatsCache=null;const n=this.container.getProvider("app").getImmediate();this._storage=new Po(n),this._heartbeatsCachePromise=this._storage.read().then(o=>(this._heartbeatsCache=o,o))}async triggerHeartbeat(){var e,n;try{const h=this.container.getProvider("platform-logger").getImmediate().getPlatformInfoString(),f=Cn();return((e=this._heartbeatsCache)===null||e===void 0?void 0:e.heartbeats)==null&&(this._heartbeatsCache=await this._heartbeatsCachePromise,((n=this._heartbeatsCache)===null||n===void 0?void 0:n.heartbeats)==null)||this._heartbeatsCache.lastSentHeartbeatDate===f||this._heartbeatsCache.heartbeats.some(y=>y.date===f)?void 0:(this._heartbeatsCache.heartbeats.push({date:f,agent:h}),this._heartbeatsCache.heartbeats=this._heartbeatsCache.heartbeats.filter(y=>{const w=new Date(y.date).valueOf();return Date.now()-w<=So}),this._storage.overwrite(this._heartbeatsCache))}catch(o){at.warn(o)}}async getHeartbeatsHeader(){var e;try{if(this._heartbeatsCache===null&&await this._heartbeatsCachePromise,((e=this._heartbeatsCache)===null||e===void 0?void 0:e.heartbeats)==null||this._heartbeatsCache.heartbeats.length===0)return"";const n=Cn(),{heartbeatsToSend:o,unsentEntries:h}=Co(this._heartbeatsCache.heartbeats),f=Yn(JSON.stringify({version:2,heartbeats:o}));return this._heartbeatsCache.lastSentHeartbeatDate=n,h.length>0?(this._heartbeatsCache.heartbeats=h,await this._storage.overwrite(this._heartbeatsCache)):(this._heartbeatsCache.heartbeats=[],this._storage.overwrite(this._heartbeatsCache)),f}catch(n){return at.warn(n),""}}}function Cn(){return new Date().toISOString().substring(0,10)}function Co(r,e=Ao){const n=[];let o=r.slice();for(const h of r){const f=n.find(y=>y.agent===h.agent);if(f){if(f.dates.push(h.date),Pn(n)>e){f.dates.pop();break}}else if(n.push({agent:h.agent,dates:[h.date]}),Pn(n)>e){n.pop();break}o=o.slice(1)}return{heartbeatsToSend:n,unsentEntries:o}}class Po{constructor(e){this.app=e,this._canUseIndexedDBPromise=this.runIndexedDBEnvironmentCheck()}async runIndexedDBEnvironmentCheck(){return vs()?_s().then(()=>!0).catch(()=>!1):!1}async read(){if(await this._canUseIndexedDBPromise){const n=await Io(this.app);return n!=null&&n.heartbeats?n:{heartbeats:[]}}else return{heartbeats:[]}}async overwrite(e){var n;if(await this._canUseIndexedDBPromise){const h=await this.read();return bn(this.app,{lastSentHeartbeatDate:(n=e.lastSentHeartbeatDate)!==null&&n!==void 0?n:h.lastSentHeartbeatDate,heartbeats:e.heartbeats})}else return}async add(e){var n;if(await this._canUseIndexedDBPromise){const h=await this.read();return bn(this.app,{lastSentHeartbeatDate:(n=e.lastSentHeartbeatDate)!==null&&n!==void 0?n:h.lastSentHeartbeatDate,heartbeats:[...h.heartbeats,...e.heartbeats]})}else return}}function Pn(r){return Yn(JSON.stringify({version:2,heartbeats:r})).length}/**
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
 */function Ro(r){Tt(new Et("platform-logger",e=>new Vs(e),"PRIVATE")),Tt(new Et("heartbeat",e=>new bo(e),"PRIVATE")),et(fi,In,r),et(fi,In,"esm2017"),et("fire-js","")}Ro("");var ko="firebase",No="10.14.1";/**
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
 */et(ko,No,"app");function rr(r,e){var n={};for(var o in r)Object.prototype.hasOwnProperty.call(r,o)&&e.indexOf(o)<0&&(n[o]=r[o]);if(r!=null&&typeof Object.getOwnPropertySymbols=="function")for(var h=0,o=Object.getOwnPropertySymbols(r);h<o.length;h++)e.indexOf(o[h])<0&&Object.prototype.propertyIsEnumerable.call(r,o[h])&&(n[o[h]]=r[o[h]]);return n}function sr(){return{"dependent-sdk-initialized-before-auth":"Another Firebase SDK was initialized and is trying to use Auth before Auth is initialized. Please be sure to call `initializeAuth` or `getAuth` before starting any other Firebase SDK."}}const Do=sr,or=new Zt("auth","Firebase",sr());/**
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
 */const Ee=new gi("@firebase/auth");function Oo(r,...e){Ee.logLevel<=P.WARN&&Ee.warn(`Auth (${Ce}): ${r}`,...e)}function _e(r,...e){Ee.logLevel<=P.ERROR&&Ee.error(`Auth (${Ce}): ${r}`,...e)}/**
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
 */function Rn(r,...e){throw vi(r,...e)}function ar(r,...e){return vi(r,...e)}function hr(r,e,n){const o=Object.assign(Object.assign({},Do()),{[e]:n});return new Zt("auth","Firebase",o).create(e,{appName:r.name})}function we(r){return hr(r,"operation-not-supported-in-this-environment","Operations that alter the current user are not supported in conjunction with FirebaseServerApp")}function vi(r,...e){if(typeof r!="string"){const n=e[0],o=[...e.slice(1)];return o[0]&&(o[0].appName=r.name),r._errorFactory.create(n,...o)}return or.create(r,...e)}function C(r,e,...n){if(!r)throw vi(e,...n)}function Xt(r){const e="INTERNAL ASSERTION FAILED: "+r;throw _e(e),new Error(e)}function Te(r,e){r||Xt(e)}function Lo(){return kn()==="http:"||kn()==="https:"}function kn(){var r;return typeof self<"u"&&((r=self.location)===null||r===void 0?void 0:r.protocol)||null}/**
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
 */function Mo(){return typeof navigator<"u"&&navigator&&"onLine"in navigator&&typeof navigator.onLine=="boolean"&&(Lo()||ms()||"connection"in navigator)?navigator.onLine:!0}function Uo(){if(typeof navigator>"u")return null;const r=navigator;return r.languages&&r.languages[0]||r.language||null}/**
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
 */class te{constructor(e,n){this.shortDelay=e,this.longDelay=n,Te(n>e,"Short delay should be less than long delay!"),this.isMobile=ps()||ys()}get(){return Mo()?this.isMobile?this.longDelay:this.shortDelay:Math.min(5e3,this.shortDelay)}}/**
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
 */function xo(r,e){Te(r.emulator,"Emulator should always be set here");const{url:n}=r.emulator;return e?`${n}${e.startsWith("/")?e.slice(1):e}`:n}/**
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
 */class lr{static initialize(e,n,o){this.fetchImpl=e,n&&(this.headersImpl=n),o&&(this.responseImpl=o)}static fetch(){if(this.fetchImpl)return this.fetchImpl;if(typeof self<"u"&&"fetch"in self)return self.fetch;if(typeof globalThis<"u"&&globalThis.fetch)return globalThis.fetch;if(typeof fetch<"u")return fetch;Xt("Could not find fetch implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static headers(){if(this.headersImpl)return this.headersImpl;if(typeof self<"u"&&"Headers"in self)return self.Headers;if(typeof globalThis<"u"&&globalThis.Headers)return globalThis.Headers;if(typeof Headers<"u")return Headers;Xt("Could not find Headers implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static response(){if(this.responseImpl)return this.responseImpl;if(typeof self<"u"&&"Response"in self)return self.Response;if(typeof globalThis<"u"&&globalThis.Response)return globalThis.Response;if(typeof Response<"u")return Response;Xt("Could not find Response implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}}/**
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
 */const Fo={CREDENTIAL_MISMATCH:"custom-token-mismatch",MISSING_CUSTOM_TOKEN:"internal-error",INVALID_IDENTIFIER:"invalid-email",MISSING_CONTINUE_URI:"internal-error",INVALID_PASSWORD:"wrong-password",MISSING_PASSWORD:"missing-password",INVALID_LOGIN_CREDENTIALS:"invalid-credential",EMAIL_EXISTS:"email-already-in-use",PASSWORD_LOGIN_DISABLED:"operation-not-allowed",INVALID_IDP_RESPONSE:"invalid-credential",INVALID_PENDING_TOKEN:"invalid-credential",FEDERATED_USER_ID_ALREADY_LINKED:"credential-already-in-use",MISSING_REQ_TYPE:"internal-error",EMAIL_NOT_FOUND:"user-not-found",RESET_PASSWORD_EXCEED_LIMIT:"too-many-requests",EXPIRED_OOB_CODE:"expired-action-code",INVALID_OOB_CODE:"invalid-action-code",MISSING_OOB_CODE:"internal-error",CREDENTIAL_TOO_OLD_LOGIN_AGAIN:"requires-recent-login",INVALID_ID_TOKEN:"invalid-user-token",TOKEN_EXPIRED:"user-token-expired",USER_NOT_FOUND:"user-token-expired",TOO_MANY_ATTEMPTS_TRY_LATER:"too-many-requests",PASSWORD_DOES_NOT_MEET_REQUIREMENTS:"password-does-not-meet-requirements",INVALID_CODE:"invalid-verification-code",INVALID_SESSION_INFO:"invalid-verification-id",INVALID_TEMPORARY_PROOF:"invalid-credential",MISSING_SESSION_INFO:"missing-verification-id",SESSION_EXPIRED:"code-expired",MISSING_ANDROID_PACKAGE_NAME:"missing-android-pkg-name",UNAUTHORIZED_DOMAIN:"unauthorized-continue-uri",INVALID_OAUTH_CLIENT_ID:"invalid-oauth-client-id",ADMIN_ONLY_OPERATION:"admin-restricted-operation",INVALID_MFA_PENDING_CREDENTIAL:"invalid-multi-factor-session",MFA_ENROLLMENT_NOT_FOUND:"multi-factor-info-not-found",MISSING_MFA_ENROLLMENT_ID:"missing-multi-factor-info",MISSING_MFA_PENDING_CREDENTIAL:"missing-multi-factor-session",SECOND_FACTOR_EXISTS:"second-factor-already-in-use",SECOND_FACTOR_LIMIT_EXCEEDED:"maximum-second-factor-count-exceeded",BLOCKING_FUNCTION_ERROR_RESPONSE:"internal-error",RECAPTCHA_NOT_ENABLED:"recaptcha-not-enabled",MISSING_RECAPTCHA_TOKEN:"missing-recaptcha-token",INVALID_RECAPTCHA_TOKEN:"invalid-recaptcha-token",INVALID_RECAPTCHA_ACTION:"invalid-recaptcha-action",MISSING_CLIENT_TYPE:"missing-client-type",MISSING_RECAPTCHA_VERSION:"missing-recaptcha-version",INVALID_RECAPTCHA_VERSION:"invalid-recaptcha-version",INVALID_REQ_TYPE:"invalid-req-type"};/**
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
 */const Bo=new te(3e4,6e4);function ur(r,e){return r.tenantId&&!e.tenantId?Object.assign(Object.assign({},e),{tenantId:r.tenantId}):e}async function Pe(r,e,n,o,h={}){return cr(r,h,async()=>{let f={},y={};o&&(e==="GET"?y=o:f={body:JSON.stringify(o)});const w=Zn(Object.assign({key:r.config.apiKey},y)).slice(1),E=await r._getAdditionalHeaders();E["Content-Type"]="application/json",r.languageCode&&(E["X-Firebase-Locale"]=r.languageCode);const I=Object.assign({method:e,headers:E},f);return gs()||(I.referrerPolicy="no-referrer"),lr.fetch()(fr(r,r.config.apiHost,n,w),I)})}async function cr(r,e,n){r._canInitEmulator=!1;const o=Object.assign(Object.assign({},Fo),e);try{const h=new jo(r),f=await Promise.race([n(),h.promise]);h.clearNetworkTimeout();const y=await f.json();if("needConfirmation"in y)throw ye(r,"account-exists-with-different-credential",y);if(f.ok&&!("errorMessage"in y))return y;{const w=f.ok?y.errorMessage:y.error.message,[E,I]=w.split(" : ");if(E==="FEDERATED_USER_ID_ALREADY_LINKED")throw ye(r,"credential-already-in-use",y);if(E==="EMAIL_EXISTS")throw ye(r,"email-already-in-use",y);if(E==="USER_DISABLED")throw ye(r,"user-disabled",y);const O=o[E]||E.toLowerCase().replace(/[_\s]+/g,"-");if(I)throw hr(r,O,I);Rn(r,O)}}catch(h){if(h instanceof gt)throw h;Rn(r,"network-request-failed",{message:String(h)})}}function fr(r,e,n,o){const h=`${e}${n}?${o}`;return r.config.emulator?xo(r.config,h):`${r.config.apiScheme}://${h}`}class jo{constructor(e){this.auth=e,this.timer=null,this.promise=new Promise((n,o)=>{this.timer=setTimeout(()=>o(ar(this.auth,"network-request-failed")),Bo.get())})}clearNetworkTimeout(){clearTimeout(this.timer)}}function ye(r,e,n){const o={appName:r.name};n.email&&(o.email=n.email),n.phoneNumber&&(o.phoneNumber=n.phoneNumber);const h=ar(r,e,o);return h.customData._tokenResponse=n,h}/**
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
 */async function Vo(r,e){return Pe(r,"POST","/v1/accounts:delete",e)}async function dr(r,e){return Pe(r,"POST","/v1/accounts:lookup",e)}/**
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
 */function qt(r){if(r)try{const e=new Date(Number(r));if(!isNaN(e.getTime()))return e.toUTCString()}catch{}}async function Ho(r,e=!1){const n=be(r),o=await n.getIdToken(e),h=pr(o);C(h&&h.exp&&h.auth_time&&h.iat,n.auth,"internal-error");const f=typeof h.firebase=="object"?h.firebase:void 0,y=f==null?void 0:f.sign_in_provider;return{claims:h,token:o,authTime:qt(ai(h.auth_time)),issuedAtTime:qt(ai(h.iat)),expirationTime:qt(ai(h.exp)),signInProvider:y||null,signInSecondFactor:(f==null?void 0:f.sign_in_second_factor)||null}}function ai(r){return Number(r)*1e3}function pr(r){const[e,n,o]=r.split(".");if(e===void 0||n===void 0||o===void 0)return _e("JWT malformed, contained fewer than 3 sections"),null;try{const h=Qn(n);return h?JSON.parse(h):(_e("Failed to decode base64 JWT payload"),null)}catch(h){return _e("Caught error parsing JWT payload as JSON",h==null?void 0:h.toString()),null}}function Nn(r){const e=pr(r);return C(e,"internal-error"),C(typeof e.exp<"u","internal-error"),C(typeof e.iat<"u","internal-error"),Number(e.exp)-Number(e.iat)}/**
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
 */async function di(r,e,n=!1){if(n)return e;try{return await e}catch(o){throw o instanceof gt&&$o(o)&&r.auth.currentUser===r&&await r.auth.signOut(),o}}function $o({code:r}){return r==="auth/user-disabled"||r==="auth/user-token-expired"}/**
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
 */class Go{constructor(e){this.user=e,this.isRunning=!1,this.timerId=null,this.errorBackoff=3e4}_start(){this.isRunning||(this.isRunning=!0,this.schedule())}_stop(){this.isRunning&&(this.isRunning=!1,this.timerId!==null&&clearTimeout(this.timerId))}getInterval(e){var n;if(e){const o=this.errorBackoff;return this.errorBackoff=Math.min(this.errorBackoff*2,96e4),o}else{this.errorBackoff=3e4;const h=((n=this.user.stsTokenManager.expirationTime)!==null&&n!==void 0?n:0)-Date.now()-3e5;return Math.max(0,h)}}schedule(e=!1){if(!this.isRunning)return;const n=this.getInterval(e);this.timerId=setTimeout(async()=>{await this.iteration()},n)}async iteration(){try{await this.user.getIdToken(!0)}catch(e){(e==null?void 0:e.code)==="auth/network-request-failed"&&this.schedule(!0);return}this.schedule()}}/**
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
 */class pi{constructor(e,n){this.createdAt=e,this.lastLoginAt=n,this._initializeTime()}_initializeTime(){this.lastSignInTime=qt(this.lastLoginAt),this.creationTime=qt(this.createdAt)}_copy(e){this.createdAt=e.createdAt,this.lastLoginAt=e.lastLoginAt,this._initializeTime()}toJSON(){return{createdAt:this.createdAt,lastLoginAt:this.lastLoginAt}}}/**
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
 */async function Ie(r){var e;const n=r.auth,o=await r.getIdToken(),h=await di(r,dr(n,{idToken:o}));C(h==null?void 0:h.users.length,n,"internal-error");const f=h.users[0];r._notifyReloadListener(f);const y=!((e=f.providerUserInfo)===null||e===void 0)&&e.length?gr(f.providerUserInfo):[],w=zo(r.providerData,y),E=r.isAnonymous,I=!(r.email&&f.passwordHash)&&!(w!=null&&w.length),O=E?I:!1,L={uid:f.localId,displayName:f.displayName||null,photoURL:f.photoUrl||null,email:f.email||null,emailVerified:f.emailVerified||!1,phoneNumber:f.phoneNumber||null,tenantId:f.tenantId||null,providerData:w,metadata:new pi(f.createdAt,f.lastLoginAt),isAnonymous:O};Object.assign(r,L)}async function Ko(r){const e=be(r);await Ie(e),await e.auth._persistUserIfCurrent(e),e.auth._notifyListenersIfCurrent(e)}function zo(r,e){return[...r.filter(o=>!e.some(h=>h.providerId===o.providerId)),...e]}function gr(r){return r.map(e=>{var{providerId:n}=e,o=rr(e,["providerId"]);return{providerId:n,uid:o.rawId||"",displayName:o.displayName||null,email:o.email||null,phoneNumber:o.phoneNumber||null,photoURL:o.photoUrl||null}})}/**
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
 */async function Wo(r,e){const n=await cr(r,{},async()=>{const o=Zn({grant_type:"refresh_token",refresh_token:e}).slice(1),{tokenApiHost:h,apiKey:f}=r.config,y=fr(r,h,"/v1/token",`key=${f}`),w=await r._getAdditionalHeaders();return w["Content-Type"]="application/x-www-form-urlencoded",lr.fetch()(y,{method:"POST",headers:w,body:o})});return{accessToken:n.access_token,expiresIn:n.expires_in,refreshToken:n.refresh_token}}async function Xo(r,e){return Pe(r,"POST","/v2/accounts:revokeToken",ur(r,e))}/**
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
 */class Pt{constructor(){this.refreshToken=null,this.accessToken=null,this.expirationTime=null}get isExpired(){return!this.expirationTime||Date.now()>this.expirationTime-3e4}updateFromServerResponse(e){C(e.idToken,"internal-error"),C(typeof e.idToken<"u","internal-error"),C(typeof e.refreshToken<"u","internal-error");const n="expiresIn"in e&&typeof e.expiresIn<"u"?Number(e.expiresIn):Nn(e.idToken);this.updateTokensAndExpiration(e.idToken,e.refreshToken,n)}updateFromIdToken(e){C(e.length!==0,"internal-error");const n=Nn(e);this.updateTokensAndExpiration(e,null,n)}async getToken(e,n=!1){return!n&&this.accessToken&&!this.isExpired?this.accessToken:(C(this.refreshToken,e,"user-token-expired"),this.refreshToken?(await this.refresh(e,this.refreshToken),this.accessToken):null)}clearRefreshToken(){this.refreshToken=null}async refresh(e,n){const{accessToken:o,refreshToken:h,expiresIn:f}=await Wo(e,n);this.updateTokensAndExpiration(o,h,Number(f))}updateTokensAndExpiration(e,n,o){this.refreshToken=n||null,this.accessToken=e||null,this.expirationTime=Date.now()+o*1e3}static fromJSON(e,n){const{refreshToken:o,accessToken:h,expirationTime:f}=n,y=new Pt;return o&&(C(typeof o=="string","internal-error",{appName:e}),y.refreshToken=o),h&&(C(typeof h=="string","internal-error",{appName:e}),y.accessToken=h),f&&(C(typeof f=="number","internal-error",{appName:e}),y.expirationTime=f),y}toJSON(){return{refreshToken:this.refreshToken,accessToken:this.accessToken,expirationTime:this.expirationTime}}_assign(e){this.accessToken=e.accessToken,this.refreshToken=e.refreshToken,this.expirationTime=e.expirationTime}_clone(){return Object.assign(new Pt,this.toJSON())}_performRefresh(){return Xt("not implemented")}}/**
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
 */function ft(r,e){C(typeof r=="string"||typeof r>"u","internal-error",{appName:e})}class dt{constructor(e){var{uid:n,auth:o,stsTokenManager:h}=e,f=rr(e,["uid","auth","stsTokenManager"]);this.providerId="firebase",this.proactiveRefresh=new Go(this),this.reloadUserInfo=null,this.reloadListener=null,this.uid=n,this.auth=o,this.stsTokenManager=h,this.accessToken=h.accessToken,this.displayName=f.displayName||null,this.email=f.email||null,this.emailVerified=f.emailVerified||!1,this.phoneNumber=f.phoneNumber||null,this.photoURL=f.photoURL||null,this.isAnonymous=f.isAnonymous||!1,this.tenantId=f.tenantId||null,this.providerData=f.providerData?[...f.providerData]:[],this.metadata=new pi(f.createdAt||void 0,f.lastLoginAt||void 0)}async getIdToken(e){const n=await di(this,this.stsTokenManager.getToken(this.auth,e));return C(n,this.auth,"internal-error"),this.accessToken!==n&&(this.accessToken=n,await this.auth._persistUserIfCurrent(this),this.auth._notifyListenersIfCurrent(this)),n}getIdTokenResult(e){return Ho(this,e)}reload(){return Ko(this)}_assign(e){this!==e&&(C(this.uid===e.uid,this.auth,"internal-error"),this.displayName=e.displayName,this.photoURL=e.photoURL,this.email=e.email,this.emailVerified=e.emailVerified,this.phoneNumber=e.phoneNumber,this.isAnonymous=e.isAnonymous,this.tenantId=e.tenantId,this.providerData=e.providerData.map(n=>Object.assign({},n)),this.metadata._copy(e.metadata),this.stsTokenManager._assign(e.stsTokenManager))}_clone(e){const n=new dt(Object.assign(Object.assign({},this),{auth:e,stsTokenManager:this.stsTokenManager._clone()}));return n.metadata._copy(this.metadata),n}_onReload(e){C(!this.reloadListener,this.auth,"internal-error"),this.reloadListener=e,this.reloadUserInfo&&(this._notifyReloadListener(this.reloadUserInfo),this.reloadUserInfo=null)}_notifyReloadListener(e){this.reloadListener?this.reloadListener(e):this.reloadUserInfo=e}_startProactiveRefresh(){this.proactiveRefresh._start()}_stopProactiveRefresh(){this.proactiveRefresh._stop()}async _updateTokensIfNecessary(e,n=!1){let o=!1;e.idToken&&e.idToken!==this.stsTokenManager.accessToken&&(this.stsTokenManager.updateFromServerResponse(e),o=!0),n&&await Ie(this),await this.auth._persistUserIfCurrent(this),o&&this.auth._notifyListenersIfCurrent(this)}async delete(){if(Wt(this.auth.app))return Promise.reject(we(this.auth));const e=await this.getIdToken();return await di(this,Vo(this.auth,{idToken:e})),this.stsTokenManager.clearRefreshToken(),this.auth.signOut()}toJSON(){return Object.assign(Object.assign({uid:this.uid,email:this.email||void 0,emailVerified:this.emailVerified,displayName:this.displayName||void 0,isAnonymous:this.isAnonymous,photoURL:this.photoURL||void 0,phoneNumber:this.phoneNumber||void 0,tenantId:this.tenantId||void 0,providerData:this.providerData.map(e=>Object.assign({},e)),stsTokenManager:this.stsTokenManager.toJSON(),_redirectEventId:this._redirectEventId},this.metadata.toJSON()),{apiKey:this.auth.config.apiKey,appName:this.auth.name})}get refreshToken(){return this.stsTokenManager.refreshToken||""}static _fromJSON(e,n){var o,h,f,y,w,E,I,O;const L=(o=n.displayName)!==null&&o!==void 0?o:void 0,k=(h=n.email)!==null&&h!==void 0?h:void 0,$=(f=n.phoneNumber)!==null&&f!==void 0?f:void 0,b=(y=n.photoURL)!==null&&y!==void 0?y:void 0,U=(w=n.tenantId)!==null&&w!==void 0?w:void 0,D=(E=n._redirectEventId)!==null&&E!==void 0?E:void 0,nt=(I=n.createdAt)!==null&&I!==void 0?I:void 0,W=(O=n.lastLoginAt)!==null&&O!==void 0?O:void 0,{uid:F,emailVerified:J,isAnonymous:mt,providerData:z,stsTokenManager:g}=n;C(F&&g,e,"internal-error");const l=Pt.fromJSON(this.name,g);C(typeof F=="string",e,"internal-error"),ft(L,e.name),ft(k,e.name),C(typeof J=="boolean",e,"internal-error"),C(typeof mt=="boolean",e,"internal-error"),ft($,e.name),ft(b,e.name),ft(U,e.name),ft(D,e.name),ft(nt,e.name),ft(W,e.name);const c=new dt({uid:F,auth:e,email:k,emailVerified:J,displayName:L,isAnonymous:mt,photoURL:b,phoneNumber:$,tenantId:U,stsTokenManager:l,createdAt:nt,lastLoginAt:W});return z&&Array.isArray(z)&&(c.providerData=z.map(d=>Object.assign({},d))),D&&(c._redirectEventId=D),c}static async _fromIdTokenResponse(e,n,o=!1){const h=new Pt;h.updateFromServerResponse(n);const f=new dt({uid:n.localId,auth:e,stsTokenManager:h,isAnonymous:o});return await Ie(f),f}static async _fromGetAccountInfoResponse(e,n,o){const h=n.users[0];C(h.localId!==void 0,"internal-error");const f=h.providerUserInfo!==void 0?gr(h.providerUserInfo):[],y=!(h.email&&h.passwordHash)&&!(f!=null&&f.length),w=new Pt;w.updateFromIdToken(o);const E=new dt({uid:h.localId,auth:e,stsTokenManager:w,isAnonymous:y}),I={uid:h.localId,displayName:h.displayName||null,photoURL:h.photoUrl||null,email:h.email||null,emailVerified:h.emailVerified||!1,phoneNumber:h.phoneNumber||null,tenantId:h.tenantId||null,providerData:f,metadata:new pi(h.createdAt,h.lastLoginAt),isAnonymous:!(h.email&&h.passwordHash)&&!(f!=null&&f.length)};return Object.assign(E,I),E}}/**
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
 */const Dn=new Map;function wt(r){Te(r instanceof Function,"Expected a class definition");let e=Dn.get(r);return e?(Te(e instanceof r,"Instance stored in cache mismatched with class"),e):(e=new r,Dn.set(r,e),e)}/**
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
 */class mr{constructor(){this.type="NONE",this.storage={}}async _isAvailable(){return!0}async _set(e,n){this.storage[e]=n}async _get(e){const n=this.storage[e];return n===void 0?null:n}async _remove(e){delete this.storage[e]}_addListener(e,n){}_removeListener(e,n){}}mr.type="NONE";const On=mr;/**
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
 */function hi(r,e,n){return`firebase:${r}:${e}:${n}`}class Rt{constructor(e,n,o){this.persistence=e,this.auth=n,this.userKey=o;const{config:h,name:f}=this.auth;this.fullUserKey=hi(this.userKey,h.apiKey,f),this.fullPersistenceKey=hi("persistence",h.apiKey,f),this.boundEventHandler=n._onStorageEvent.bind(n),this.persistence._addListener(this.fullUserKey,this.boundEventHandler)}setCurrentUser(e){return this.persistence._set(this.fullUserKey,e.toJSON())}async getCurrentUser(){const e=await this.persistence._get(this.fullUserKey);return e?dt._fromJSON(this.auth,e):null}removeCurrentUser(){return this.persistence._remove(this.fullUserKey)}savePersistenceForRedirect(){return this.persistence._set(this.fullPersistenceKey,this.persistence.type)}async setPersistence(e){if(this.persistence===e)return;const n=await this.getCurrentUser();if(await this.removeCurrentUser(),this.persistence=e,n)return this.setCurrentUser(n)}delete(){this.persistence._removeListener(this.fullUserKey,this.boundEventHandler)}static async create(e,n,o="authUser"){if(!n.length)return new Rt(wt(On),e,o);const h=(await Promise.all(n.map(async I=>{if(await I._isAvailable())return I}))).filter(I=>I);let f=h[0]||wt(On);const y=hi(o,e.config.apiKey,e.name);let w=null;for(const I of n)try{const O=await I._get(y);if(O){const L=dt._fromJSON(e,O);I!==f&&(w=L),f=I;break}}catch{}const E=h.filter(I=>I._shouldAllowMigration);return!f._shouldAllowMigration||!E.length?new Rt(f,e,o):(f=E[0],w&&await f._set(y,w.toJSON()),await Promise.all(n.map(async I=>{if(I!==f)try{await I._remove(y)}catch{}})),new Rt(f,e,o))}}/**
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
 */function Ln(r){const e=r.toLowerCase();if(e.includes("opera/")||e.includes("opr/")||e.includes("opios/"))return"Opera";if(Qo(e))return"IEMobile";if(e.includes("msie")||e.includes("trident/"))return"IE";if(e.includes("edge/"))return"Edge";if(qo(e))return"Firefox";if(e.includes("silk/"))return"Silk";if(ta(e))return"Blackberry";if(ea(e))return"Webos";if(Jo(e))return"Safari";if((e.includes("chrome/")||Yo(e))&&!e.includes("edge/"))return"Chrome";if(Zo(e))return"Android";{const n=/([a-zA-Z\d\.]+)\/[a-zA-Z\d\.]*$/,o=r.match(n);if((o==null?void 0:o.length)===2)return o[1]}return"Other"}function qo(r=it()){return/firefox\//i.test(r)}function Jo(r=it()){const e=r.toLowerCase();return e.includes("safari/")&&!e.includes("chrome/")&&!e.includes("crios/")&&!e.includes("android")}function Yo(r=it()){return/crios\//i.test(r)}function Qo(r=it()){return/iemobile/i.test(r)}function Zo(r=it()){return/android/i.test(r)}function ta(r=it()){return/blackberry/i.test(r)}function ea(r=it()){return/webos/i.test(r)}/**
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
 */function yr(r,e=[]){let n;switch(r){case"Browser":n=Ln(it());break;case"Worker":n=`${Ln(it())}-${r}`;break;default:n=r}const o=e.length?e.join(","):"FirebaseCore-web";return`${n}/JsCore/${Ce}/${o}`}/**
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
 */class ia{constructor(e){this.auth=e,this.queue=[]}pushCallback(e,n){const o=f=>new Promise((y,w)=>{try{const E=e(f);y(E)}catch(E){w(E)}});o.onAbort=n,this.queue.push(o);const h=this.queue.length-1;return()=>{this.queue[h]=()=>Promise.resolve()}}async runMiddleware(e){if(this.auth.currentUser===e)return;const n=[];try{for(const o of this.queue)await o(e),o.onAbort&&n.push(o.onAbort)}catch(o){n.reverse();for(const h of n)try{h()}catch{}throw this.auth._errorFactory.create("login-blocked",{originalMessage:o==null?void 0:o.message})}}}/**
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
 */async function na(r,e={}){return Pe(r,"GET","/v2/passwordPolicy",ur(r,e))}/**
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
 */const ra=6;class sa{constructor(e){var n,o,h,f;const y=e.customStrengthOptions;this.customStrengthOptions={},this.customStrengthOptions.minPasswordLength=(n=y.minPasswordLength)!==null&&n!==void 0?n:ra,y.maxPasswordLength&&(this.customStrengthOptions.maxPasswordLength=y.maxPasswordLength),y.containsLowercaseCharacter!==void 0&&(this.customStrengthOptions.containsLowercaseLetter=y.containsLowercaseCharacter),y.containsUppercaseCharacter!==void 0&&(this.customStrengthOptions.containsUppercaseLetter=y.containsUppercaseCharacter),y.containsNumericCharacter!==void 0&&(this.customStrengthOptions.containsNumericCharacter=y.containsNumericCharacter),y.containsNonAlphanumericCharacter!==void 0&&(this.customStrengthOptions.containsNonAlphanumericCharacter=y.containsNonAlphanumericCharacter),this.enforcementState=e.enforcementState,this.enforcementState==="ENFORCEMENT_STATE_UNSPECIFIED"&&(this.enforcementState="OFF"),this.allowedNonAlphanumericCharacters=(h=(o=e.allowedNonAlphanumericCharacters)===null||o===void 0?void 0:o.join(""))!==null&&h!==void 0?h:"",this.forceUpgradeOnSignin=(f=e.forceUpgradeOnSignin)!==null&&f!==void 0?f:!1,this.schemaVersion=e.schemaVersion}validatePassword(e){var n,o,h,f,y,w;const E={isValid:!0,passwordPolicy:this};return this.validatePasswordLengthOptions(e,E),this.validatePasswordCharacterOptions(e,E),E.isValid&&(E.isValid=(n=E.meetsMinPasswordLength)!==null&&n!==void 0?n:!0),E.isValid&&(E.isValid=(o=E.meetsMaxPasswordLength)!==null&&o!==void 0?o:!0),E.isValid&&(E.isValid=(h=E.containsLowercaseLetter)!==null&&h!==void 0?h:!0),E.isValid&&(E.isValid=(f=E.containsUppercaseLetter)!==null&&f!==void 0?f:!0),E.isValid&&(E.isValid=(y=E.containsNumericCharacter)!==null&&y!==void 0?y:!0),E.isValid&&(E.isValid=(w=E.containsNonAlphanumericCharacter)!==null&&w!==void 0?w:!0),E}validatePasswordLengthOptions(e,n){const o=this.customStrengthOptions.minPasswordLength,h=this.customStrengthOptions.maxPasswordLength;o&&(n.meetsMinPasswordLength=e.length>=o),h&&(n.meetsMaxPasswordLength=e.length<=h)}validatePasswordCharacterOptions(e,n){this.updatePasswordCharacterOptionsStatuses(n,!1,!1,!1,!1);let o;for(let h=0;h<e.length;h++)o=e.charAt(h),this.updatePasswordCharacterOptionsStatuses(n,o>="a"&&o<="z",o>="A"&&o<="Z",o>="0"&&o<="9",this.allowedNonAlphanumericCharacters.includes(o))}updatePasswordCharacterOptionsStatuses(e,n,o,h,f){this.customStrengthOptions.containsLowercaseLetter&&(e.containsLowercaseLetter||(e.containsLowercaseLetter=n)),this.customStrengthOptions.containsUppercaseLetter&&(e.containsUppercaseLetter||(e.containsUppercaseLetter=o)),this.customStrengthOptions.containsNumericCharacter&&(e.containsNumericCharacter||(e.containsNumericCharacter=h)),this.customStrengthOptions.containsNonAlphanumericCharacter&&(e.containsNonAlphanumericCharacter||(e.containsNonAlphanumericCharacter=f))}}/**
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
 */class oa{constructor(e,n,o,h){this.app=e,this.heartbeatServiceProvider=n,this.appCheckServiceProvider=o,this.config=h,this.currentUser=null,this.emulatorConfig=null,this.operations=Promise.resolve(),this.authStateSubscription=new Mn(this),this.idTokenSubscription=new Mn(this),this.beforeStateQueue=new ia(this),this.redirectUser=null,this.isProactiveRefreshEnabled=!1,this.EXPECTED_PASSWORD_POLICY_SCHEMA_VERSION=1,this._canInitEmulator=!0,this._isInitialized=!1,this._deleted=!1,this._initializationPromise=null,this._popupRedirectResolver=null,this._errorFactory=or,this._agentRecaptchaConfig=null,this._tenantRecaptchaConfigs={},this._projectPasswordPolicy=null,this._tenantPasswordPolicies={},this.lastNotifiedUid=void 0,this.languageCode=null,this.tenantId=null,this.settings={appVerificationDisabledForTesting:!1},this.frameworks=[],this.name=e.name,this.clientVersion=h.sdkClientVersion}_initializeWithPersistence(e,n){return n&&(this._popupRedirectResolver=wt(n)),this._initializationPromise=this.queue(async()=>{var o,h;if(!this._deleted&&(this.persistenceManager=await Rt.create(this,e),!this._deleted)){if(!((o=this._popupRedirectResolver)===null||o===void 0)&&o._shouldInitProactively)try{await this._popupRedirectResolver._initialize(this)}catch{}await this.initializeCurrentUser(n),this.lastNotifiedUid=((h=this.currentUser)===null||h===void 0?void 0:h.uid)||null,!this._deleted&&(this._isInitialized=!0)}}),this._initializationPromise}async _onStorageEvent(){if(this._deleted)return;const e=await this.assertedPersistence.getCurrentUser();if(!(!this.currentUser&&!e)){if(this.currentUser&&e&&this.currentUser.uid===e.uid){this._currentUser._assign(e),await this.currentUser.getIdToken();return}await this._updateCurrentUser(e,!0)}}async initializeCurrentUserFromIdToken(e){try{const n=await dr(this,{idToken:e}),o=await dt._fromGetAccountInfoResponse(this,n,e);await this.directlySetCurrentUser(o)}catch(n){console.warn("FirebaseServerApp could not login user with provided authIdToken: ",n),await this.directlySetCurrentUser(null)}}async initializeCurrentUser(e){var n;if(Wt(this.app)){const y=this.app.settings.authIdToken;return y?new Promise(w=>{setTimeout(()=>this.initializeCurrentUserFromIdToken(y).then(w,w))}):this.directlySetCurrentUser(null)}const o=await this.assertedPersistence.getCurrentUser();let h=o,f=!1;if(e&&this.config.authDomain){await this.getOrInitRedirectPersistenceManager();const y=(n=this.redirectUser)===null||n===void 0?void 0:n._redirectEventId,w=h==null?void 0:h._redirectEventId,E=await this.tryRedirectSignIn(e);(!y||y===w)&&(E!=null&&E.user)&&(h=E.user,f=!0)}if(!h)return this.directlySetCurrentUser(null);if(!h._redirectEventId){if(f)try{await this.beforeStateQueue.runMiddleware(h)}catch(y){h=o,this._popupRedirectResolver._overrideRedirectResult(this,()=>Promise.reject(y))}return h?this.reloadAndSetCurrentUserOrClear(h):this.directlySetCurrentUser(null)}return C(this._popupRedirectResolver,this,"argument-error"),await this.getOrInitRedirectPersistenceManager(),this.redirectUser&&this.redirectUser._redirectEventId===h._redirectEventId?this.directlySetCurrentUser(h):this.reloadAndSetCurrentUserOrClear(h)}async tryRedirectSignIn(e){let n=null;try{n=await this._popupRedirectResolver._completeRedirectFn(this,e,!0)}catch{await this._setRedirectUser(null)}return n}async reloadAndSetCurrentUserOrClear(e){try{await Ie(e)}catch(n){if((n==null?void 0:n.code)!=="auth/network-request-failed")return this.directlySetCurrentUser(null)}return this.directlySetCurrentUser(e)}useDeviceLanguage(){this.languageCode=Uo()}async _delete(){this._deleted=!0}async updateCurrentUser(e){if(Wt(this.app))return Promise.reject(we(this));const n=e?be(e):null;return n&&C(n.auth.config.apiKey===this.config.apiKey,this,"invalid-user-token"),this._updateCurrentUser(n&&n._clone(this))}async _updateCurrentUser(e,n=!1){if(!this._deleted)return e&&C(this.tenantId===e.tenantId,this,"tenant-id-mismatch"),n||await this.beforeStateQueue.runMiddleware(e),this.queue(async()=>{await this.directlySetCurrentUser(e),this.notifyAuthListeners()})}async signOut(){return Wt(this.app)?Promise.reject(we(this)):(await this.beforeStateQueue.runMiddleware(null),(this.redirectPersistenceManager||this._popupRedirectResolver)&&await this._setRedirectUser(null),this._updateCurrentUser(null,!0))}setPersistence(e){return Wt(this.app)?Promise.reject(we(this)):this.queue(async()=>{await this.assertedPersistence.setPersistence(wt(e))})}_getRecaptchaConfig(){return this.tenantId==null?this._agentRecaptchaConfig:this._tenantRecaptchaConfigs[this.tenantId]}async validatePassword(e){this._getPasswordPolicyInternal()||await this._updatePasswordPolicy();const n=this._getPasswordPolicyInternal();return n.schemaVersion!==this.EXPECTED_PASSWORD_POLICY_SCHEMA_VERSION?Promise.reject(this._errorFactory.create("unsupported-password-policy-schema-version",{})):n.validatePassword(e)}_getPasswordPolicyInternal(){return this.tenantId===null?this._projectPasswordPolicy:this._tenantPasswordPolicies[this.tenantId]}async _updatePasswordPolicy(){const e=await na(this),n=new sa(e);this.tenantId===null?this._projectPasswordPolicy=n:this._tenantPasswordPolicies[this.tenantId]=n}_getPersistence(){return this.assertedPersistence.persistence.type}_updateErrorMap(e){this._errorFactory=new Zt("auth","Firebase",e())}onAuthStateChanged(e,n,o){return this.registerStateListener(this.authStateSubscription,e,n,o)}beforeAuthStateChanged(e,n){return this.beforeStateQueue.pushCallback(e,n)}onIdTokenChanged(e,n,o){return this.registerStateListener(this.idTokenSubscription,e,n,o)}authStateReady(){return new Promise((e,n)=>{if(this.currentUser)e();else{const o=this.onAuthStateChanged(()=>{o(),e()},n)}})}async revokeAccessToken(e){if(this.currentUser){const n=await this.currentUser.getIdToken(),o={providerId:"apple.com",tokenType:"ACCESS_TOKEN",token:e,idToken:n};this.tenantId!=null&&(o.tenantId=this.tenantId),await Xo(this,o)}}toJSON(){var e;return{apiKey:this.config.apiKey,authDomain:this.config.authDomain,appName:this.name,currentUser:(e=this._currentUser)===null||e===void 0?void 0:e.toJSON()}}async _setRedirectUser(e,n){const o=await this.getOrInitRedirectPersistenceManager(n);return e===null?o.removeCurrentUser():o.setCurrentUser(e)}async getOrInitRedirectPersistenceManager(e){if(!this.redirectPersistenceManager){const n=e&&wt(e)||this._popupRedirectResolver;C(n,this,"argument-error"),this.redirectPersistenceManager=await Rt.create(this,[wt(n._redirectPersistence)],"redirectUser"),this.redirectUser=await this.redirectPersistenceManager.getCurrentUser()}return this.redirectPersistenceManager}async _redirectUserForId(e){var n,o;return this._isInitialized&&await this.queue(async()=>{}),((n=this._currentUser)===null||n===void 0?void 0:n._redirectEventId)===e?this._currentUser:((o=this.redirectUser)===null||o===void 0?void 0:o._redirectEventId)===e?this.redirectUser:null}async _persistUserIfCurrent(e){if(e===this.currentUser)return this.queue(async()=>this.directlySetCurrentUser(e))}_notifyListenersIfCurrent(e){e===this.currentUser&&this.notifyAuthListeners()}_key(){return`${this.config.authDomain}:${this.config.apiKey}:${this.name}`}_startProactiveRefresh(){this.isProactiveRefreshEnabled=!0,this.currentUser&&this._currentUser._startProactiveRefresh()}_stopProactiveRefresh(){this.isProactiveRefreshEnabled=!1,this.currentUser&&this._currentUser._stopProactiveRefresh()}get _currentUser(){return this.currentUser}notifyAuthListeners(){var e,n;if(!this._isInitialized)return;this.idTokenSubscription.next(this.currentUser);const o=(n=(e=this.currentUser)===null||e===void 0?void 0:e.uid)!==null&&n!==void 0?n:null;this.lastNotifiedUid!==o&&(this.lastNotifiedUid=o,this.authStateSubscription.next(this.currentUser))}registerStateListener(e,n,o,h){if(this._deleted)return()=>{};const f=typeof n=="function"?n:n.next.bind(n);let y=!1;const w=this._isInitialized?Promise.resolve():this._initializationPromise;if(C(w,this,"internal-error"),w.then(()=>{y||f(this.currentUser)}),typeof n=="function"){const E=e.addObserver(n,o,h);return()=>{y=!0,E()}}else{const E=e.addObserver(n);return()=>{y=!0,E()}}}async directlySetCurrentUser(e){this.currentUser&&this.currentUser!==e&&this._currentUser._stopProactiveRefresh(),e&&this.isProactiveRefreshEnabled&&e._startProactiveRefresh(),this.currentUser=e,e?await this.assertedPersistence.setCurrentUser(e):await this.assertedPersistence.removeCurrentUser()}queue(e){return this.operations=this.operations.then(e,e),this.operations}get assertedPersistence(){return C(this.persistenceManager,this,"internal-error"),this.persistenceManager}_logFramework(e){!e||this.frameworks.includes(e)||(this.frameworks.push(e),this.frameworks.sort(),this.clientVersion=yr(this.config.clientPlatform,this._getFrameworks()))}_getFrameworks(){return this.frameworks}async _getAdditionalHeaders(){var e;const n={"X-Client-Version":this.clientVersion};this.app.options.appId&&(n["X-Firebase-gmpid"]=this.app.options.appId);const o=await((e=this.heartbeatServiceProvider.getImmediate({optional:!0}))===null||e===void 0?void 0:e.getHeartbeatsHeader());o&&(n["X-Firebase-Client"]=o);const h=await this._getAppCheckToken();return h&&(n["X-Firebase-AppCheck"]=h),n}async _getAppCheckToken(){var e;const n=await((e=this.appCheckServiceProvider.getImmediate({optional:!0}))===null||e===void 0?void 0:e.getToken());return n!=null&&n.error&&Oo(`Error while retrieving App Check token: ${n.error}`),n==null?void 0:n.token}}function aa(r){return be(r)}class Mn{constructor(e){this.auth=e,this.observer=null,this.addObserver=Is(n=>this.observer=n)}get next(){return C(this.observer,this.auth,"internal-error"),this.observer.next.bind(this.observer)}}function ha(r,e){const n=(e==null?void 0:e.persistence)||[],o=(Array.isArray(n)?n:[n]).map(wt);e!=null&&e.errorMap&&r._updateErrorMap(e.errorMap),r._initializeWithPersistence(o,e==null?void 0:e.popupRedirectResolver)}new te(3e4,6e4);/**
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
 */new te(2e3,1e4);/**
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
 */new te(3e4,6e4);/**
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
 */new te(5e3,15e3);var Un="@firebase/auth",xn="1.7.9";/**
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
 */class la{constructor(e){this.auth=e,this.internalListeners=new Map}getUid(){var e;return this.assertAuthConfigured(),((e=this.auth.currentUser)===null||e===void 0?void 0:e.uid)||null}async getToken(e){return this.assertAuthConfigured(),await this.auth._initializationPromise,this.auth.currentUser?{accessToken:await this.auth.currentUser.getIdToken(e)}:null}addAuthTokenListener(e){if(this.assertAuthConfigured(),this.internalListeners.has(e))return;const n=this.auth.onIdTokenChanged(o=>{e((o==null?void 0:o.stsTokenManager.accessToken)||null)});this.internalListeners.set(e,n),this.updateProactiveRefresh()}removeAuthTokenListener(e){this.assertAuthConfigured();const n=this.internalListeners.get(e);n&&(this.internalListeners.delete(e),n(),this.updateProactiveRefresh())}assertAuthConfigured(){C(this.auth._initializationPromise,"dependent-sdk-initialized-before-auth")}updateProactiveRefresh(){this.internalListeners.size>0?this.auth._startProactiveRefresh():this.auth._stopProactiveRefresh()}}/**
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
 */function ua(r){switch(r){case"Node":return"node";case"ReactNative":return"rn";case"Worker":return"webworker";case"Cordova":return"cordova";case"WebExtension":return"web-extension";default:return}}function ca(r){Tt(new Et("auth",(e,{options:n})=>{const o=e.getProvider("app").getImmediate(),h=e.getProvider("heartbeat"),f=e.getProvider("app-check-internal"),{apiKey:y,authDomain:w}=o.options;C(y&&!y.includes(":"),"invalid-api-key",{appName:o.name});const E={apiKey:y,authDomain:w,clientPlatform:r,apiHost:"identitytoolkit.googleapis.com",tokenApiHost:"securetoken.googleapis.com",apiScheme:"https",sdkClientVersion:yr(r)},I=new oa(o,h,f,E);return ha(I,n),I},"PUBLIC").setInstantiationMode("EXPLICIT").setInstanceCreatedCallback((e,n,o)=>{e.getProvider("auth-internal").initialize()})),Tt(new Et("auth-internal",e=>{const n=aa(e.getProvider("auth").getImmediate());return(o=>new la(o))(n)},"PRIVATE").setInstantiationMode("EXPLICIT")),et(Un,xn,ua(r)),et(Un,xn,"esm2017")}/**
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
 */const fa=5*60;ds("authIdTokenMaxAge");ca("Browser");var Fn=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{};/** @license
Copyright The Closure Library Authors.
SPDX-License-Identifier: Apache-2.0
*/var vr;(function(){var r;/** @license

 Copyright The Closure Library Authors.
 SPDX-License-Identifier: Apache-2.0
*/function e(g,l){function c(){}c.prototype=l.prototype,g.D=l.prototype,g.prototype=new c,g.prototype.constructor=g,g.C=function(d,p,v){for(var u=Array(arguments.length-2),rt=2;rt<arguments.length;rt++)u[rt-2]=arguments[rt];return l.prototype[p].apply(d,u)}}function n(){this.blockSize=-1}function o(){this.blockSize=-1,this.blockSize=64,this.g=Array(4),this.B=Array(this.blockSize),this.o=this.h=0,this.s()}e(o,n),o.prototype.s=function(){this.g[0]=1732584193,this.g[1]=4023233417,this.g[2]=2562383102,this.g[3]=271733878,this.o=this.h=0};function h(g,l,c){c||(c=0);var d=Array(16);if(typeof l=="string")for(var p=0;16>p;++p)d[p]=l.charCodeAt(c++)|l.charCodeAt(c++)<<8|l.charCodeAt(c++)<<16|l.charCodeAt(c++)<<24;else for(p=0;16>p;++p)d[p]=l[c++]|l[c++]<<8|l[c++]<<16|l[c++]<<24;l=g.g[0],c=g.g[1],p=g.g[2];var v=g.g[3],u=l+(v^c&(p^v))+d[0]+3614090360&4294967295;l=c+(u<<7&4294967295|u>>>25),u=v+(p^l&(c^p))+d[1]+3905402710&4294967295,v=l+(u<<12&4294967295|u>>>20),u=p+(c^v&(l^c))+d[2]+606105819&4294967295,p=v+(u<<17&4294967295|u>>>15),u=c+(l^p&(v^l))+d[3]+3250441966&4294967295,c=p+(u<<22&4294967295|u>>>10),u=l+(v^c&(p^v))+d[4]+4118548399&4294967295,l=c+(u<<7&4294967295|u>>>25),u=v+(p^l&(c^p))+d[5]+1200080426&4294967295,v=l+(u<<12&4294967295|u>>>20),u=p+(c^v&(l^c))+d[6]+2821735955&4294967295,p=v+(u<<17&4294967295|u>>>15),u=c+(l^p&(v^l))+d[7]+4249261313&4294967295,c=p+(u<<22&4294967295|u>>>10),u=l+(v^c&(p^v))+d[8]+1770035416&4294967295,l=c+(u<<7&4294967295|u>>>25),u=v+(p^l&(c^p))+d[9]+2336552879&4294967295,v=l+(u<<12&4294967295|u>>>20),u=p+(c^v&(l^c))+d[10]+4294925233&4294967295,p=v+(u<<17&4294967295|u>>>15),u=c+(l^p&(v^l))+d[11]+2304563134&4294967295,c=p+(u<<22&4294967295|u>>>10),u=l+(v^c&(p^v))+d[12]+1804603682&4294967295,l=c+(u<<7&4294967295|u>>>25),u=v+(p^l&(c^p))+d[13]+4254626195&4294967295,v=l+(u<<12&4294967295|u>>>20),u=p+(c^v&(l^c))+d[14]+2792965006&4294967295,p=v+(u<<17&4294967295|u>>>15),u=c+(l^p&(v^l))+d[15]+1236535329&4294967295,c=p+(u<<22&4294967295|u>>>10),u=l+(p^v&(c^p))+d[1]+4129170786&4294967295,l=c+(u<<5&4294967295|u>>>27),u=v+(c^p&(l^c))+d[6]+3225465664&4294967295,v=l+(u<<9&4294967295|u>>>23),u=p+(l^c&(v^l))+d[11]+643717713&4294967295,p=v+(u<<14&4294967295|u>>>18),u=c+(v^l&(p^v))+d[0]+3921069994&4294967295,c=p+(u<<20&4294967295|u>>>12),u=l+(p^v&(c^p))+d[5]+3593408605&4294967295,l=c+(u<<5&4294967295|u>>>27),u=v+(c^p&(l^c))+d[10]+38016083&4294967295,v=l+(u<<9&4294967295|u>>>23),u=p+(l^c&(v^l))+d[15]+3634488961&4294967295,p=v+(u<<14&4294967295|u>>>18),u=c+(v^l&(p^v))+d[4]+3889429448&4294967295,c=p+(u<<20&4294967295|u>>>12),u=l+(p^v&(c^p))+d[9]+568446438&4294967295,l=c+(u<<5&4294967295|u>>>27),u=v+(c^p&(l^c))+d[14]+3275163606&4294967295,v=l+(u<<9&4294967295|u>>>23),u=p+(l^c&(v^l))+d[3]+4107603335&4294967295,p=v+(u<<14&4294967295|u>>>18),u=c+(v^l&(p^v))+d[8]+1163531501&4294967295,c=p+(u<<20&4294967295|u>>>12),u=l+(p^v&(c^p))+d[13]+2850285829&4294967295,l=c+(u<<5&4294967295|u>>>27),u=v+(c^p&(l^c))+d[2]+4243563512&4294967295,v=l+(u<<9&4294967295|u>>>23),u=p+(l^c&(v^l))+d[7]+1735328473&4294967295,p=v+(u<<14&4294967295|u>>>18),u=c+(v^l&(p^v))+d[12]+2368359562&4294967295,c=p+(u<<20&4294967295|u>>>12),u=l+(c^p^v)+d[5]+4294588738&4294967295,l=c+(u<<4&4294967295|u>>>28),u=v+(l^c^p)+d[8]+2272392833&4294967295,v=l+(u<<11&4294967295|u>>>21),u=p+(v^l^c)+d[11]+1839030562&4294967295,p=v+(u<<16&4294967295|u>>>16),u=c+(p^v^l)+d[14]+4259657740&4294967295,c=p+(u<<23&4294967295|u>>>9),u=l+(c^p^v)+d[1]+2763975236&4294967295,l=c+(u<<4&4294967295|u>>>28),u=v+(l^c^p)+d[4]+1272893353&4294967295,v=l+(u<<11&4294967295|u>>>21),u=p+(v^l^c)+d[7]+4139469664&4294967295,p=v+(u<<16&4294967295|u>>>16),u=c+(p^v^l)+d[10]+3200236656&4294967295,c=p+(u<<23&4294967295|u>>>9),u=l+(c^p^v)+d[13]+681279174&4294967295,l=c+(u<<4&4294967295|u>>>28),u=v+(l^c^p)+d[0]+3936430074&4294967295,v=l+(u<<11&4294967295|u>>>21),u=p+(v^l^c)+d[3]+3572445317&4294967295,p=v+(u<<16&4294967295|u>>>16),u=c+(p^v^l)+d[6]+76029189&4294967295,c=p+(u<<23&4294967295|u>>>9),u=l+(c^p^v)+d[9]+3654602809&4294967295,l=c+(u<<4&4294967295|u>>>28),u=v+(l^c^p)+d[12]+3873151461&4294967295,v=l+(u<<11&4294967295|u>>>21),u=p+(v^l^c)+d[15]+530742520&4294967295,p=v+(u<<16&4294967295|u>>>16),u=c+(p^v^l)+d[2]+3299628645&4294967295,c=p+(u<<23&4294967295|u>>>9),u=l+(p^(c|~v))+d[0]+4096336452&4294967295,l=c+(u<<6&4294967295|u>>>26),u=v+(c^(l|~p))+d[7]+1126891415&4294967295,v=l+(u<<10&4294967295|u>>>22),u=p+(l^(v|~c))+d[14]+2878612391&4294967295,p=v+(u<<15&4294967295|u>>>17),u=c+(v^(p|~l))+d[5]+4237533241&4294967295,c=p+(u<<21&4294967295|u>>>11),u=l+(p^(c|~v))+d[12]+1700485571&4294967295,l=c+(u<<6&4294967295|u>>>26),u=v+(c^(l|~p))+d[3]+2399980690&4294967295,v=l+(u<<10&4294967295|u>>>22),u=p+(l^(v|~c))+d[10]+4293915773&4294967295,p=v+(u<<15&4294967295|u>>>17),u=c+(v^(p|~l))+d[1]+2240044497&4294967295,c=p+(u<<21&4294967295|u>>>11),u=l+(p^(c|~v))+d[8]+1873313359&4294967295,l=c+(u<<6&4294967295|u>>>26),u=v+(c^(l|~p))+d[15]+4264355552&4294967295,v=l+(u<<10&4294967295|u>>>22),u=p+(l^(v|~c))+d[6]+2734768916&4294967295,p=v+(u<<15&4294967295|u>>>17),u=c+(v^(p|~l))+d[13]+1309151649&4294967295,c=p+(u<<21&4294967295|u>>>11),u=l+(p^(c|~v))+d[4]+4149444226&4294967295,l=c+(u<<6&4294967295|u>>>26),u=v+(c^(l|~p))+d[11]+3174756917&4294967295,v=l+(u<<10&4294967295|u>>>22),u=p+(l^(v|~c))+d[2]+718787259&4294967295,p=v+(u<<15&4294967295|u>>>17),u=c+(v^(p|~l))+d[9]+3951481745&4294967295,g.g[0]=g.g[0]+l&4294967295,g.g[1]=g.g[1]+(p+(u<<21&4294967295|u>>>11))&4294967295,g.g[2]=g.g[2]+p&4294967295,g.g[3]=g.g[3]+v&4294967295}o.prototype.u=function(g,l){l===void 0&&(l=g.length);for(var c=l-this.blockSize,d=this.B,p=this.h,v=0;v<l;){if(p==0)for(;v<=c;)h(this,g,v),v+=this.blockSize;if(typeof g=="string"){for(;v<l;)if(d[p++]=g.charCodeAt(v++),p==this.blockSize){h(this,d),p=0;break}}else for(;v<l;)if(d[p++]=g[v++],p==this.blockSize){h(this,d),p=0;break}}this.h=p,this.o+=l},o.prototype.v=function(){var g=Array((56>this.h?this.blockSize:2*this.blockSize)-this.h);g[0]=128;for(var l=1;l<g.length-8;++l)g[l]=0;var c=8*this.o;for(l=g.length-8;l<g.length;++l)g[l]=c&255,c/=256;for(this.u(g),g=Array(16),l=c=0;4>l;++l)for(var d=0;32>d;d+=8)g[c++]=this.g[l]>>>d&255;return g};function f(g,l){var c=w;return Object.prototype.hasOwnProperty.call(c,g)?c[g]:c[g]=l(g)}function y(g,l){this.h=l;for(var c=[],d=!0,p=g.length-1;0<=p;p--){var v=g[p]|0;d&&v==l||(c[p]=v,d=!1)}this.g=c}var w={};function E(g){return-128<=g&&128>g?f(g,function(l){return new y([l|0],0>l?-1:0)}):new y([g|0],0>g?-1:0)}function I(g){if(isNaN(g)||!isFinite(g))return L;if(0>g)return D(I(-g));for(var l=[],c=1,d=0;g>=c;d++)l[d]=g/c|0,c*=4294967296;return new y(l,0)}function O(g,l){if(g.length==0)throw Error("number format error: empty string");if(l=l||10,2>l||36<l)throw Error("radix out of range: "+l);if(g.charAt(0)=="-")return D(O(g.substring(1),l));if(0<=g.indexOf("-"))throw Error('number format error: interior "-" character');for(var c=I(Math.pow(l,8)),d=L,p=0;p<g.length;p+=8){var v=Math.min(8,g.length-p),u=parseInt(g.substring(p,p+v),l);8>v?(v=I(Math.pow(l,v)),d=d.j(v).add(I(u))):(d=d.j(c),d=d.add(I(u)))}return d}var L=E(0),k=E(1),$=E(16777216);r=y.prototype,r.m=function(){if(U(this))return-D(this).m();for(var g=0,l=1,c=0;c<this.g.length;c++){var d=this.i(c);g+=(0<=d?d:4294967296+d)*l,l*=4294967296}return g},r.toString=function(g){if(g=g||10,2>g||36<g)throw Error("radix out of range: "+g);if(b(this))return"0";if(U(this))return"-"+D(this).toString(g);for(var l=I(Math.pow(g,6)),c=this,d="";;){var p=J(c,l).g;c=nt(c,p.j(l));var v=((0<c.g.length?c.g[0]:c.h)>>>0).toString(g);if(c=p,b(c))return v+d;for(;6>v.length;)v="0"+v;d=v+d}},r.i=function(g){return 0>g?0:g<this.g.length?this.g[g]:this.h};function b(g){if(g.h!=0)return!1;for(var l=0;l<g.g.length;l++)if(g.g[l]!=0)return!1;return!0}function U(g){return g.h==-1}r.l=function(g){return g=nt(this,g),U(g)?-1:b(g)?0:1};function D(g){for(var l=g.g.length,c=[],d=0;d<l;d++)c[d]=~g.g[d];return new y(c,~g.h).add(k)}r.abs=function(){return U(this)?D(this):this},r.add=function(g){for(var l=Math.max(this.g.length,g.g.length),c=[],d=0,p=0;p<=l;p++){var v=d+(this.i(p)&65535)+(g.i(p)&65535),u=(v>>>16)+(this.i(p)>>>16)+(g.i(p)>>>16);d=u>>>16,v&=65535,u&=65535,c[p]=u<<16|v}return new y(c,c[c.length-1]&-2147483648?-1:0)};function nt(g,l){return g.add(D(l))}r.j=function(g){if(b(this)||b(g))return L;if(U(this))return U(g)?D(this).j(D(g)):D(D(this).j(g));if(U(g))return D(this.j(D(g)));if(0>this.l($)&&0>g.l($))return I(this.m()*g.m());for(var l=this.g.length+g.g.length,c=[],d=0;d<2*l;d++)c[d]=0;for(d=0;d<this.g.length;d++)for(var p=0;p<g.g.length;p++){var v=this.i(d)>>>16,u=this.i(d)&65535,rt=g.i(p)>>>16,kt=g.i(p)&65535;c[2*d+2*p]+=u*kt,W(c,2*d+2*p),c[2*d+2*p+1]+=v*kt,W(c,2*d+2*p+1),c[2*d+2*p+1]+=u*rt,W(c,2*d+2*p+1),c[2*d+2*p+2]+=v*rt,W(c,2*d+2*p+2)}for(d=0;d<l;d++)c[d]=c[2*d+1]<<16|c[2*d];for(d=l;d<2*l;d++)c[d]=0;return new y(c,0)};function W(g,l){for(;(g[l]&65535)!=g[l];)g[l+1]+=g[l]>>>16,g[l]&=65535,l++}function F(g,l){this.g=g,this.h=l}function J(g,l){if(b(l))throw Error("division by zero");if(b(g))return new F(L,L);if(U(g))return l=J(D(g),l),new F(D(l.g),D(l.h));if(U(l))return l=J(g,D(l)),new F(D(l.g),l.h);if(30<g.g.length){if(U(g)||U(l))throw Error("slowDivide_ only works with positive integers.");for(var c=k,d=l;0>=d.l(g);)c=mt(c),d=mt(d);var p=z(c,1),v=z(d,1);for(d=z(d,2),c=z(c,2);!b(d);){var u=v.add(d);0>=u.l(g)&&(p=p.add(c),v=u),d=z(d,1),c=z(c,1)}return l=nt(g,p.j(l)),new F(p,l)}for(p=L;0<=g.l(l);){for(c=Math.max(1,Math.floor(g.m()/l.m())),d=Math.ceil(Math.log(c)/Math.LN2),d=48>=d?1:Math.pow(2,d-48),v=I(c),u=v.j(l);U(u)||0<u.l(g);)c-=d,v=I(c),u=v.j(l);b(v)&&(v=k),p=p.add(v),g=nt(g,u)}return new F(p,g)}r.A=function(g){return J(this,g).h},r.and=function(g){for(var l=Math.max(this.g.length,g.g.length),c=[],d=0;d<l;d++)c[d]=this.i(d)&g.i(d);return new y(c,this.h&g.h)},r.or=function(g){for(var l=Math.max(this.g.length,g.g.length),c=[],d=0;d<l;d++)c[d]=this.i(d)|g.i(d);return new y(c,this.h|g.h)},r.xor=function(g){for(var l=Math.max(this.g.length,g.g.length),c=[],d=0;d<l;d++)c[d]=this.i(d)^g.i(d);return new y(c,this.h^g.h)};function mt(g){for(var l=g.g.length+1,c=[],d=0;d<l;d++)c[d]=g.i(d)<<1|g.i(d-1)>>>31;return new y(c,g.h)}function z(g,l){var c=l>>5;l%=32;for(var d=g.g.length-c,p=[],v=0;v<d;v++)p[v]=0<l?g.i(v+c)>>>l|g.i(v+c+1)<<32-l:g.i(v+c);return new y(p,g.h)}o.prototype.digest=o.prototype.v,o.prototype.reset=o.prototype.s,o.prototype.update=o.prototype.u,y.prototype.add=y.prototype.add,y.prototype.multiply=y.prototype.j,y.prototype.modulo=y.prototype.A,y.prototype.compare=y.prototype.l,y.prototype.toNumber=y.prototype.m,y.prototype.toString=y.prototype.toString,y.prototype.getBits=y.prototype.i,y.fromNumber=I,y.fromString=O,vr=y}).apply(typeof Fn<"u"?Fn:typeof self<"u"?self:typeof window<"u"?window:{});var ve=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{};(function(){var r,e=typeof Object.defineProperties=="function"?Object.defineProperty:function(t,i,s){return t==Array.prototype||t==Object.prototype||(t[i]=s.value),t};function n(t){t=[typeof globalThis=="object"&&globalThis,t,typeof window=="object"&&window,typeof self=="object"&&self,typeof ve=="object"&&ve];for(var i=0;i<t.length;++i){var s=t[i];if(s&&s.Math==Math)return s}throw Error("Cannot find global object")}var o=n(this);function h(t,i){if(i)t:{var s=o;t=t.split(".");for(var a=0;a<t.length-1;a++){var m=t[a];if(!(m in s))break t;s=s[m]}t=t[t.length-1],a=s[t],i=i(a),i!=a&&i!=null&&e(s,t,{configurable:!0,writable:!0,value:i})}}function f(t,i){t instanceof String&&(t+="");var s=0,a=!1,m={next:function(){if(!a&&s<t.length){var _=s++;return{value:i(_,t[_]),done:!1}}return a=!0,{done:!0,value:void 0}}};return m[Symbol.iterator]=function(){return m},m}h("Array.prototype.values",function(t){return t||function(){return f(this,function(i,s){return s})}});/** @license

 Copyright The Closure Library Authors.
 SPDX-License-Identifier: Apache-2.0
*/var y=y||{},w=this||self;function E(t){var i=typeof t;return i=i!="object"?i:t?Array.isArray(t)?"array":i:"null",i=="array"||i=="object"&&typeof t.length=="number"}function I(t){var i=typeof t;return i=="object"&&t!=null||i=="function"}function O(t,i,s){return t.call.apply(t.bind,arguments)}function L(t,i,s){if(!t)throw Error();if(2<arguments.length){var a=Array.prototype.slice.call(arguments,2);return function(){var m=Array.prototype.slice.call(arguments);return Array.prototype.unshift.apply(m,a),t.apply(i,m)}}return function(){return t.apply(i,arguments)}}function k(t,i,s){return k=Function.prototype.bind&&Function.prototype.bind.toString().indexOf("native code")!=-1?O:L,k.apply(null,arguments)}function $(t,i){var s=Array.prototype.slice.call(arguments,1);return function(){var a=s.slice();return a.push.apply(a,arguments),t.apply(this,a)}}function b(t,i){function s(){}s.prototype=i.prototype,t.aa=i.prototype,t.prototype=new s,t.prototype.constructor=t,t.Qb=function(a,m,_){for(var T=Array(arguments.length-2),R=2;R<arguments.length;R++)T[R-2]=arguments[R];return i.prototype[m].apply(a,T)}}function U(t){const i=t.length;if(0<i){const s=Array(i);for(let a=0;a<i;a++)s[a]=t[a];return s}return[]}function D(t,i){for(let s=1;s<arguments.length;s++){const a=arguments[s];if(E(a)){const m=t.length||0,_=a.length||0;t.length=m+_;for(let T=0;T<_;T++)t[m+T]=a[T]}else t.push(a)}}class nt{constructor(i,s){this.i=i,this.j=s,this.h=0,this.g=null}get(){let i;return 0<this.h?(this.h--,i=this.g,this.g=i.next,i.next=null):i=this.i(),i}}function W(t){return/^[\s\xa0]*$/.test(t)}function F(){var t=w.navigator;return t&&(t=t.userAgent)?t:""}function J(t){return J[" "](t),t}J[" "]=function(){};var mt=F().indexOf("Gecko")!=-1&&!(F().toLowerCase().indexOf("webkit")!=-1&&F().indexOf("Edge")==-1)&&!(F().indexOf("Trident")!=-1||F().indexOf("MSIE")!=-1)&&F().indexOf("Edge")==-1;function z(t,i,s){for(const a in t)i.call(s,t[a],a,t)}function g(t,i){for(const s in t)i.call(void 0,t[s],s,t)}function l(t){const i={};for(const s in t)i[s]=t[s];return i}const c="constructor hasOwnProperty isPrototypeOf propertyIsEnumerable toLocaleString toString valueOf".split(" ");function d(t,i){let s,a;for(let m=1;m<arguments.length;m++){a=arguments[m];for(s in a)t[s]=a[s];for(let _=0;_<c.length;_++)s=c[_],Object.prototype.hasOwnProperty.call(a,s)&&(t[s]=a[s])}}function p(t){var i=1;t=t.split(":");const s=[];for(;0<i&&t.length;)s.push(t.shift()),i--;return t.length&&s.push(t.join(":")),s}function v(t){w.setTimeout(()=>{throw t},0)}function u(){var t=ke;let i=null;return t.g&&(i=t.g,t.g=t.g.next,t.g||(t.h=null),i.next=null),i}class rt{constructor(){this.h=this.g=null}add(i,s){const a=kt.get();a.set(i,s),this.h?this.h.next=a:this.g=a,this.h=a}}var kt=new nt(()=>new Tr,t=>t.reset());class Tr{constructor(){this.next=this.g=this.h=null}set(i,s){this.h=i,this.g=s,this.next=null}reset(){this.next=this.g=this.h=null}}let Nt,Dt=!1,ke=new rt,wi=()=>{const t=w.Promise.resolve(void 0);Nt=()=>{t.then(Ir)}};var Ir=()=>{for(var t;t=u();){try{t.h.call(t.g)}catch(s){v(s)}var i=kt;i.j(t),100>i.h&&(i.h++,t.next=i.g,i.g=t)}Dt=!1};function ht(){this.s=this.s,this.C=this.C}ht.prototype.s=!1,ht.prototype.ma=function(){this.s||(this.s=!0,this.N())},ht.prototype.N=function(){if(this.C)for(;this.C.length;)this.C.shift()()};function B(t,i){this.type=t,this.g=this.target=i,this.defaultPrevented=!1}B.prototype.h=function(){this.defaultPrevented=!0};var Ar=function(){if(!w.addEventListener||!Object.defineProperty)return!1;var t=!1,i=Object.defineProperty({},"passive",{get:function(){t=!0}});try{const s=()=>{};w.addEventListener("test",s,i),w.removeEventListener("test",s,i)}catch{}return t}();function Ot(t,i){if(B.call(this,t?t.type:""),this.relatedTarget=this.g=this.target=null,this.button=this.screenY=this.screenX=this.clientY=this.clientX=0,this.key="",this.metaKey=this.shiftKey=this.altKey=this.ctrlKey=!1,this.state=null,this.pointerId=0,this.pointerType="",this.i=null,t){var s=this.type=t.type,a=t.changedTouches&&t.changedTouches.length?t.changedTouches[0]:null;if(this.target=t.target||t.srcElement,this.g=i,i=t.relatedTarget){if(mt){t:{try{J(i.nodeName);var m=!0;break t}catch{}m=!1}m||(i=null)}}else s=="mouseover"?i=t.fromElement:s=="mouseout"&&(i=t.toElement);this.relatedTarget=i,a?(this.clientX=a.clientX!==void 0?a.clientX:a.pageX,this.clientY=a.clientY!==void 0?a.clientY:a.pageY,this.screenX=a.screenX||0,this.screenY=a.screenY||0):(this.clientX=t.clientX!==void 0?t.clientX:t.pageX,this.clientY=t.clientY!==void 0?t.clientY:t.pageY,this.screenX=t.screenX||0,this.screenY=t.screenY||0),this.button=t.button,this.key=t.key||"",this.ctrlKey=t.ctrlKey,this.altKey=t.altKey,this.shiftKey=t.shiftKey,this.metaKey=t.metaKey,this.pointerId=t.pointerId||0,this.pointerType=typeof t.pointerType=="string"?t.pointerType:Sr[t.pointerType]||"",this.state=t.state,this.i=t,t.defaultPrevented&&Ot.aa.h.call(this)}}b(Ot,B);var Sr={2:"touch",3:"pen",4:"mouse"};Ot.prototype.h=function(){Ot.aa.h.call(this);var t=this.i;t.preventDefault?t.preventDefault():t.returnValue=!1};var ee="closure_listenable_"+(1e6*Math.random()|0),br=0;function Cr(t,i,s,a,m){this.listener=t,this.proxy=null,this.src=i,this.type=s,this.capture=!!a,this.ha=m,this.key=++br,this.da=this.fa=!1}function ie(t){t.da=!0,t.listener=null,t.proxy=null,t.src=null,t.ha=null}function ne(t){this.src=t,this.g={},this.h=0}ne.prototype.add=function(t,i,s,a,m){var _=t.toString();t=this.g[_],t||(t=this.g[_]=[],this.h++);var T=De(t,i,a,m);return-1<T?(i=t[T],s||(i.fa=!1)):(i=new Cr(i,this.src,_,!!a,m),i.fa=s,t.push(i)),i};function Ne(t,i){var s=i.type;if(s in t.g){var a=t.g[s],m=Array.prototype.indexOf.call(a,i,void 0),_;(_=0<=m)&&Array.prototype.splice.call(a,m,1),_&&(ie(i),t.g[s].length==0&&(delete t.g[s],t.h--))}}function De(t,i,s,a){for(var m=0;m<t.length;++m){var _=t[m];if(!_.da&&_.listener==i&&_.capture==!!s&&_.ha==a)return m}return-1}var Oe="closure_lm_"+(1e6*Math.random()|0),Le={};function Ei(t,i,s,a,m){if(Array.isArray(i)){for(var _=0;_<i.length;_++)Ei(t,i[_],s,a,m);return null}return s=Ai(s),t&&t[ee]?t.K(i,s,I(a)?!!a.capture:!1,m):Pr(t,i,s,!1,a,m)}function Pr(t,i,s,a,m,_){if(!i)throw Error("Invalid event type");var T=I(m)?!!m.capture:!!m,R=Ue(t);if(R||(t[Oe]=R=new ne(t)),s=R.add(i,s,a,T,_),s.proxy)return s;if(a=Rr(),s.proxy=a,a.src=t,a.listener=s,t.addEventListener)Ar||(m=T),m===void 0&&(m=!1),t.addEventListener(i.toString(),a,m);else if(t.attachEvent)t.attachEvent(Ii(i.toString()),a);else if(t.addListener&&t.removeListener)t.addListener(a);else throw Error("addEventListener and attachEvent are unavailable.");return s}function Rr(){function t(s){return i.call(t.src,t.listener,s)}const i=kr;return t}function Ti(t,i,s,a,m){if(Array.isArray(i))for(var _=0;_<i.length;_++)Ti(t,i[_],s,a,m);else a=I(a)?!!a.capture:!!a,s=Ai(s),t&&t[ee]?(t=t.i,i=String(i).toString(),i in t.g&&(_=t.g[i],s=De(_,s,a,m),-1<s&&(ie(_[s]),Array.prototype.splice.call(_,s,1),_.length==0&&(delete t.g[i],t.h--)))):t&&(t=Ue(t))&&(i=t.g[i.toString()],t=-1,i&&(t=De(i,s,a,m)),(s=-1<t?i[t]:null)&&Me(s))}function Me(t){if(typeof t!="number"&&t&&!t.da){var i=t.src;if(i&&i[ee])Ne(i.i,t);else{var s=t.type,a=t.proxy;i.removeEventListener?i.removeEventListener(s,a,t.capture):i.detachEvent?i.detachEvent(Ii(s),a):i.addListener&&i.removeListener&&i.removeListener(a),(s=Ue(i))?(Ne(s,t),s.h==0&&(s.src=null,i[Oe]=null)):ie(t)}}}function Ii(t){return t in Le?Le[t]:Le[t]="on"+t}function kr(t,i){if(t.da)t=!0;else{i=new Ot(i,this);var s=t.listener,a=t.ha||t.src;t.fa&&Me(t),t=s.call(a,i)}return t}function Ue(t){return t=t[Oe],t instanceof ne?t:null}var xe="__closure_events_fn_"+(1e9*Math.random()>>>0);function Ai(t){return typeof t=="function"?t:(t[xe]||(t[xe]=function(i){return t.handleEvent(i)}),t[xe])}function j(){ht.call(this),this.i=new ne(this),this.M=this,this.F=null}b(j,ht),j.prototype[ee]=!0,j.prototype.removeEventListener=function(t,i,s,a){Ti(this,t,i,s,a)};function G(t,i){var s,a=t.F;if(a)for(s=[];a;a=a.F)s.push(a);if(t=t.M,a=i.type||i,typeof i=="string")i=new B(i,t);else if(i instanceof B)i.target=i.target||t;else{var m=i;i=new B(a,t),d(i,m)}if(m=!0,s)for(var _=s.length-1;0<=_;_--){var T=i.g=s[_];m=re(T,a,!0,i)&&m}if(T=i.g=t,m=re(T,a,!0,i)&&m,m=re(T,a,!1,i)&&m,s)for(_=0;_<s.length;_++)T=i.g=s[_],m=re(T,a,!1,i)&&m}j.prototype.N=function(){if(j.aa.N.call(this),this.i){var t=this.i,i;for(i in t.g){for(var s=t.g[i],a=0;a<s.length;a++)ie(s[a]);delete t.g[i],t.h--}}this.F=null},j.prototype.K=function(t,i,s,a){return this.i.add(String(t),i,!1,s,a)},j.prototype.L=function(t,i,s,a){return this.i.add(String(t),i,!0,s,a)};function re(t,i,s,a){if(i=t.i.g[String(i)],!i)return!0;i=i.concat();for(var m=!0,_=0;_<i.length;++_){var T=i[_];if(T&&!T.da&&T.capture==s){var R=T.listener,x=T.ha||T.src;T.fa&&Ne(t.i,T),m=R.call(x,a)!==!1&&m}}return m&&!a.defaultPrevented}function Si(t,i,s){if(typeof t=="function")s&&(t=k(t,s));else if(t&&typeof t.handleEvent=="function")t=k(t.handleEvent,t);else throw Error("Invalid listener argument");return 2147483647<Number(i)?-1:w.setTimeout(t,i||0)}function bi(t){t.g=Si(()=>{t.g=null,t.i&&(t.i=!1,bi(t))},t.l);const i=t.h;t.h=null,t.m.apply(null,i)}class Nr extends ht{constructor(i,s){super(),this.m=i,this.l=s,this.h=null,this.i=!1,this.g=null}j(i){this.h=arguments,this.g?this.i=!0:bi(this)}N(){super.N(),this.g&&(w.clearTimeout(this.g),this.g=null,this.i=!1,this.h=null)}}function Lt(t){ht.call(this),this.h=t,this.g={}}b(Lt,ht);var Ci=[];function Pi(t){z(t.g,function(i,s){this.g.hasOwnProperty(s)&&Me(i)},t),t.g={}}Lt.prototype.N=function(){Lt.aa.N.call(this),Pi(this)},Lt.prototype.handleEvent=function(){throw Error("EventHandler.handleEvent not implemented")};var Fe=w.JSON.stringify,Dr=w.JSON.parse,Or=class{stringify(t){return w.JSON.stringify(t,void 0)}parse(t){return w.JSON.parse(t,void 0)}};function Be(){}Be.prototype.h=null;function Ri(t){return t.h||(t.h=t.i())}function Lr(){}var Mt={OPEN:"a",kb:"b",Ja:"c",wb:"d"};function je(){B.call(this,"d")}b(je,B);function Ve(){B.call(this,"c")}b(Ve,B);var It={},ki=null;function He(){return ki=ki||new j}It.La="serverreachability";function Ni(t){B.call(this,It.La,t)}b(Ni,B);function Ut(t){const i=He();G(i,new Ni(i))}It.STAT_EVENT="statevent";function Di(t,i){B.call(this,It.STAT_EVENT,t),this.stat=i}b(Di,B);function K(t){const i=He();G(i,new Di(i,t))}It.Ma="timingevent";function Oi(t,i){B.call(this,It.Ma,t),this.size=i}b(Oi,B);function xt(t,i){if(typeof t!="function")throw Error("Fn must not be null and must be a function");return w.setTimeout(function(){t()},i)}function Ft(){this.g=!0}Ft.prototype.xa=function(){this.g=!1};function Mr(t,i,s,a,m,_){t.info(function(){if(t.g)if(_)for(var T="",R=_.split("&"),x=0;x<R.length;x++){var S=R[x].split("=");if(1<S.length){var V=S[0];S=S[1];var H=V.split("_");T=2<=H.length&&H[1]=="type"?T+(V+"="+S+"&"):T+(V+"=redacted&")}}else T=null;else T=_;return"XMLHTTP REQ ("+a+") [attempt "+m+"]: "+i+`
`+s+`
`+T})}function Ur(t,i,s,a,m,_,T){t.info(function(){return"XMLHTTP RESP ("+a+") [ attempt "+m+"]: "+i+`
`+s+`
`+_+" "+T})}function At(t,i,s,a){t.info(function(){return"XMLHTTP TEXT ("+i+"): "+Fr(t,s)+(a?" "+a:"")})}function xr(t,i){t.info(function(){return"TIMEOUT: "+i})}Ft.prototype.info=function(){};function Fr(t,i){if(!t.g)return i;if(!i)return null;try{var s=JSON.parse(i);if(s){for(t=0;t<s.length;t++)if(Array.isArray(s[t])){var a=s[t];if(!(2>a.length)){var m=a[1];if(Array.isArray(m)&&!(1>m.length)){var _=m[0];if(_!="noop"&&_!="stop"&&_!="close")for(var T=1;T<m.length;T++)m[T]=""}}}}return Fe(s)}catch{return i}}var $e={NO_ERROR:0,TIMEOUT:8},Br={},Ge;function se(){}b(se,Be),se.prototype.g=function(){return new XMLHttpRequest},se.prototype.i=function(){return{}},Ge=new se;function lt(t,i,s,a){this.j=t,this.i=i,this.l=s,this.R=a||1,this.U=new Lt(this),this.I=45e3,this.H=null,this.o=!1,this.m=this.A=this.v=this.L=this.F=this.S=this.B=null,this.D=[],this.g=null,this.C=0,this.s=this.u=null,this.X=-1,this.J=!1,this.O=0,this.M=null,this.W=this.K=this.T=this.P=!1,this.h=new Li}function Li(){this.i=null,this.g="",this.h=!1}var Mi={},Ke={};function ze(t,i,s){t.L=1,t.v=le(st(i)),t.m=s,t.P=!0,Ui(t,null)}function Ui(t,i){t.F=Date.now(),oe(t),t.A=st(t.v);var s=t.A,a=t.R;Array.isArray(a)||(a=[String(a)]),Ji(s.i,"t",a),t.C=0,s=t.j.J,t.h=new Li,t.g=gn(t.j,s?i:null,!t.m),0<t.O&&(t.M=new Nr(k(t.Y,t,t.g),t.O)),i=t.U,s=t.g,a=t.ca;var m="readystatechange";Array.isArray(m)||(m&&(Ci[0]=m.toString()),m=Ci);for(var _=0;_<m.length;_++){var T=Ei(s,m[_],a||i.handleEvent,!1,i.h||i);if(!T)break;i.g[T.key]=T}i=t.H?l(t.H):{},t.m?(t.u||(t.u="POST"),i["Content-Type"]="application/x-www-form-urlencoded",t.g.ea(t.A,t.u,t.m,i)):(t.u="GET",t.g.ea(t.A,t.u,null,i)),Ut(),Mr(t.i,t.u,t.A,t.l,t.R,t.m)}lt.prototype.ca=function(t){t=t.target;const i=this.M;i&&ot(t)==3?i.j():this.Y(t)},lt.prototype.Y=function(t){try{if(t==this.g)t:{const H=ot(this.g);var i=this.g.Ba();const Ct=this.g.Z();if(!(3>H)&&(H!=3||this.g&&(this.h.h||this.g.oa()||rn(this.g)))){this.J||H!=4||i==7||(i==8||0>=Ct?Ut(3):Ut(2)),We(this);var s=this.g.Z();this.X=s;e:if(xi(this)){var a=rn(this.g);t="";var m=a.length,_=ot(this.g)==4;if(!this.h.i){if(typeof TextDecoder>"u"){yt(this),Bt(this);var T="";break e}this.h.i=new w.TextDecoder}for(i=0;i<m;i++)this.h.h=!0,t+=this.h.i.decode(a[i],{stream:!(_&&i==m-1)});a.length=0,this.h.g+=t,this.C=0,T=this.h.g}else T=this.g.oa();if(this.o=s==200,Ur(this.i,this.u,this.A,this.l,this.R,H,s),this.o){if(this.T&&!this.K){e:{if(this.g){var R,x=this.g;if((R=x.g?x.g.getResponseHeader("X-HTTP-Initial-Response"):null)&&!W(R)){var S=R;break e}}S=null}if(s=S)At(this.i,this.l,s,"Initial handshake response via X-HTTP-Initial-Response"),this.K=!0,Xe(this,s);else{this.o=!1,this.s=3,K(12),yt(this),Bt(this);break t}}if(this.P){s=!0;let Y;for(;!this.J&&this.C<T.length;)if(Y=jr(this,T),Y==Ke){H==4&&(this.s=4,K(14),s=!1),At(this.i,this.l,null,"[Incomplete Response]");break}else if(Y==Mi){this.s=4,K(15),At(this.i,this.l,T,"[Invalid Chunk]"),s=!1;break}else At(this.i,this.l,Y,null),Xe(this,Y);if(xi(this)&&this.C!=0&&(this.h.g=this.h.g.slice(this.C),this.C=0),H!=4||T.length!=0||this.h.h||(this.s=1,K(16),s=!1),this.o=this.o&&s,!s)At(this.i,this.l,T,"[Invalid Chunked Response]"),yt(this),Bt(this);else if(0<T.length&&!this.W){this.W=!0;var V=this.j;V.g==this&&V.ba&&!V.M&&(V.j.info("Great, no buffering proxy detected. Bytes received: "+T.length),ti(V),V.M=!0,K(11))}}else At(this.i,this.l,T,null),Xe(this,T);H==4&&yt(this),this.o&&!this.J&&(H==4?cn(this.j,this):(this.o=!1,oe(this)))}else ns(this.g),s==400&&0<T.indexOf("Unknown SID")?(this.s=3,K(12)):(this.s=0,K(13)),yt(this),Bt(this)}}}catch{}finally{}};function xi(t){return t.g?t.u=="GET"&&t.L!=2&&t.j.Ca:!1}function jr(t,i){var s=t.C,a=i.indexOf(`
`,s);return a==-1?Ke:(s=Number(i.substring(s,a)),isNaN(s)?Mi:(a+=1,a+s>i.length?Ke:(i=i.slice(a,a+s),t.C=a+s,i)))}lt.prototype.cancel=function(){this.J=!0,yt(this)};function oe(t){t.S=Date.now()+t.I,Fi(t,t.I)}function Fi(t,i){if(t.B!=null)throw Error("WatchDog timer not null");t.B=xt(k(t.ba,t),i)}function We(t){t.B&&(w.clearTimeout(t.B),t.B=null)}lt.prototype.ba=function(){this.B=null;const t=Date.now();0<=t-this.S?(xr(this.i,this.A),this.L!=2&&(Ut(),K(17)),yt(this),this.s=2,Bt(this)):Fi(this,this.S-t)};function Bt(t){t.j.G==0||t.J||cn(t.j,t)}function yt(t){We(t);var i=t.M;i&&typeof i.ma=="function"&&i.ma(),t.M=null,Pi(t.U),t.g&&(i=t.g,t.g=null,i.abort(),i.ma())}function Xe(t,i){try{var s=t.j;if(s.G!=0&&(s.g==t||qe(s.h,t))){if(!t.K&&qe(s.h,t)&&s.G==3){try{var a=s.Da.g.parse(i)}catch{a=null}if(Array.isArray(a)&&a.length==3){var m=a;if(m[0]==0){t:if(!s.u){if(s.g)if(s.g.F+3e3<t.F)ge(s),de(s);else break t;Ze(s),K(18)}}else s.za=m[1],0<s.za-s.T&&37500>m[2]&&s.F&&s.v==0&&!s.C&&(s.C=xt(k(s.Za,s),6e3));if(1>=Vi(s.h)&&s.ca){try{s.ca()}catch{}s.ca=void 0}}else _t(s,11)}else if((t.K||s.g==t)&&ge(s),!W(i))for(m=s.Da.g.parse(i),i=0;i<m.length;i++){let S=m[i];if(s.T=S[0],S=S[1],s.G==2)if(S[0]=="c"){s.K=S[1],s.ia=S[2];const V=S[3];V!=null&&(s.la=V,s.j.info("VER="+s.la));const H=S[4];H!=null&&(s.Aa=H,s.j.info("SVER="+s.Aa));const Ct=S[5];Ct!=null&&typeof Ct=="number"&&0<Ct&&(a=1.5*Ct,s.L=a,s.j.info("backChannelRequestTimeoutMs_="+a)),a=s;const Y=t.g;if(Y){const me=Y.g?Y.g.getResponseHeader("X-Client-Wire-Protocol"):null;if(me){var _=a.h;_.g||me.indexOf("spdy")==-1&&me.indexOf("quic")==-1&&me.indexOf("h2")==-1||(_.j=_.l,_.g=new Set,_.h&&(Je(_,_.h),_.h=null))}if(a.D){const ei=Y.g?Y.g.getResponseHeader("X-HTTP-Session-Id"):null;ei&&(a.ya=ei,N(a.I,a.D,ei))}}s.G=3,s.l&&s.l.ua(),s.ba&&(s.R=Date.now()-t.F,s.j.info("Handshake RTT: "+s.R+"ms")),a=s;var T=t;if(a.qa=pn(a,a.J?a.ia:null,a.W),T.K){Hi(a.h,T);var R=T,x=a.L;x&&(R.I=x),R.B&&(We(R),oe(R)),a.g=T}else ln(a);0<s.i.length&&pe(s)}else S[0]!="stop"&&S[0]!="close"||_t(s,7);else s.G==3&&(S[0]=="stop"||S[0]=="close"?S[0]=="stop"?_t(s,7):Qe(s):S[0]!="noop"&&s.l&&s.l.ta(S),s.v=0)}}Ut(4)}catch{}}var Vr=class{constructor(t,i){this.g=t,this.map=i}};function Bi(t){this.l=t||10,w.PerformanceNavigationTiming?(t=w.performance.getEntriesByType("navigation"),t=0<t.length&&(t[0].nextHopProtocol=="hq"||t[0].nextHopProtocol=="h2")):t=!!(w.chrome&&w.chrome.loadTimes&&w.chrome.loadTimes()&&w.chrome.loadTimes().wasFetchedViaSpdy),this.j=t?this.l:1,this.g=null,1<this.j&&(this.g=new Set),this.h=null,this.i=[]}function ji(t){return t.h?!0:t.g?t.g.size>=t.j:!1}function Vi(t){return t.h?1:t.g?t.g.size:0}function qe(t,i){return t.h?t.h==i:t.g?t.g.has(i):!1}function Je(t,i){t.g?t.g.add(i):t.h=i}function Hi(t,i){t.h&&t.h==i?t.h=null:t.g&&t.g.has(i)&&t.g.delete(i)}Bi.prototype.cancel=function(){if(this.i=$i(this),this.h)this.h.cancel(),this.h=null;else if(this.g&&this.g.size!==0){for(const t of this.g.values())t.cancel();this.g.clear()}};function $i(t){if(t.h!=null)return t.i.concat(t.h.D);if(t.g!=null&&t.g.size!==0){let i=t.i;for(const s of t.g.values())i=i.concat(s.D);return i}return U(t.i)}function Hr(t){if(t.V&&typeof t.V=="function")return t.V();if(typeof Map<"u"&&t instanceof Map||typeof Set<"u"&&t instanceof Set)return Array.from(t.values());if(typeof t=="string")return t.split("");if(E(t)){for(var i=[],s=t.length,a=0;a<s;a++)i.push(t[a]);return i}i=[],s=0;for(a in t)i[s++]=t[a];return i}function $r(t){if(t.na&&typeof t.na=="function")return t.na();if(!t.V||typeof t.V!="function"){if(typeof Map<"u"&&t instanceof Map)return Array.from(t.keys());if(!(typeof Set<"u"&&t instanceof Set)){if(E(t)||typeof t=="string"){var i=[];t=t.length;for(var s=0;s<t;s++)i.push(s);return i}i=[],s=0;for(const a in t)i[s++]=a;return i}}}function Gi(t,i){if(t.forEach&&typeof t.forEach=="function")t.forEach(i,void 0);else if(E(t)||typeof t=="string")Array.prototype.forEach.call(t,i,void 0);else for(var s=$r(t),a=Hr(t),m=a.length,_=0;_<m;_++)i.call(void 0,a[_],s&&s[_],t)}var Ki=RegExp("^(?:([^:/?#.]+):)?(?://(?:([^\\\\/?#]*)@)?([^\\\\/?#]*?)(?::([0-9]+))?(?=[\\\\/?#]|$))?([^?#]+)?(?:\\?([^#]*))?(?:#([\\s\\S]*))?$");function Gr(t,i){if(t){t=t.split("&");for(var s=0;s<t.length;s++){var a=t[s].indexOf("="),m=null;if(0<=a){var _=t[s].substring(0,a);m=t[s].substring(a+1)}else _=t[s];i(_,m?decodeURIComponent(m.replace(/\+/g," ")):"")}}}function vt(t){if(this.g=this.o=this.j="",this.s=null,this.m=this.l="",this.h=!1,t instanceof vt){this.h=t.h,ae(this,t.j),this.o=t.o,this.g=t.g,he(this,t.s),this.l=t.l;var i=t.i,s=new Ht;s.i=i.i,i.g&&(s.g=new Map(i.g),s.h=i.h),zi(this,s),this.m=t.m}else t&&(i=String(t).match(Ki))?(this.h=!1,ae(this,i[1]||"",!0),this.o=jt(i[2]||""),this.g=jt(i[3]||"",!0),he(this,i[4]),this.l=jt(i[5]||"",!0),zi(this,i[6]||"",!0),this.m=jt(i[7]||"")):(this.h=!1,this.i=new Ht(null,this.h))}vt.prototype.toString=function(){var t=[],i=this.j;i&&t.push(Vt(i,Wi,!0),":");var s=this.g;return(s||i=="file")&&(t.push("//"),(i=this.o)&&t.push(Vt(i,Wi,!0),"@"),t.push(encodeURIComponent(String(s)).replace(/%25([0-9a-fA-F]{2})/g,"%$1")),s=this.s,s!=null&&t.push(":",String(s))),(s=this.l)&&(this.g&&s.charAt(0)!="/"&&t.push("/"),t.push(Vt(s,s.charAt(0)=="/"?Wr:zr,!0))),(s=this.i.toString())&&t.push("?",s),(s=this.m)&&t.push("#",Vt(s,qr)),t.join("")};function st(t){return new vt(t)}function ae(t,i,s){t.j=s?jt(i,!0):i,t.j&&(t.j=t.j.replace(/:$/,""))}function he(t,i){if(i){if(i=Number(i),isNaN(i)||0>i)throw Error("Bad port number "+i);t.s=i}else t.s=null}function zi(t,i,s){i instanceof Ht?(t.i=i,Jr(t.i,t.h)):(s||(i=Vt(i,Xr)),t.i=new Ht(i,t.h))}function N(t,i,s){t.i.set(i,s)}function le(t){return N(t,"zx",Math.floor(2147483648*Math.random()).toString(36)+Math.abs(Math.floor(2147483648*Math.random())^Date.now()).toString(36)),t}function jt(t,i){return t?i?decodeURI(t.replace(/%25/g,"%2525")):decodeURIComponent(t):""}function Vt(t,i,s){return typeof t=="string"?(t=encodeURI(t).replace(i,Kr),s&&(t=t.replace(/%25([0-9a-fA-F]{2})/g,"%$1")),t):null}function Kr(t){return t=t.charCodeAt(0),"%"+(t>>4&15).toString(16)+(t&15).toString(16)}var Wi=/[#\/\?@]/g,zr=/[#\?:]/g,Wr=/[#\?]/g,Xr=/[#\?@]/g,qr=/#/g;function Ht(t,i){this.h=this.g=null,this.i=t||null,this.j=!!i}function ut(t){t.g||(t.g=new Map,t.h=0,t.i&&Gr(t.i,function(i,s){t.add(decodeURIComponent(i.replace(/\+/g," ")),s)}))}r=Ht.prototype,r.add=function(t,i){ut(this),this.i=null,t=St(this,t);var s=this.g.get(t);return s||this.g.set(t,s=[]),s.push(i),this.h+=1,this};function Xi(t,i){ut(t),i=St(t,i),t.g.has(i)&&(t.i=null,t.h-=t.g.get(i).length,t.g.delete(i))}function qi(t,i){return ut(t),i=St(t,i),t.g.has(i)}r.forEach=function(t,i){ut(this),this.g.forEach(function(s,a){s.forEach(function(m){t.call(i,m,a,this)},this)},this)},r.na=function(){ut(this);const t=Array.from(this.g.values()),i=Array.from(this.g.keys()),s=[];for(let a=0;a<i.length;a++){const m=t[a];for(let _=0;_<m.length;_++)s.push(i[a])}return s},r.V=function(t){ut(this);let i=[];if(typeof t=="string")qi(this,t)&&(i=i.concat(this.g.get(St(this,t))));else{t=Array.from(this.g.values());for(let s=0;s<t.length;s++)i=i.concat(t[s])}return i},r.set=function(t,i){return ut(this),this.i=null,t=St(this,t),qi(this,t)&&(this.h-=this.g.get(t).length),this.g.set(t,[i]),this.h+=1,this},r.get=function(t,i){return t?(t=this.V(t),0<t.length?String(t[0]):i):i};function Ji(t,i,s){Xi(t,i),0<s.length&&(t.i=null,t.g.set(St(t,i),U(s)),t.h+=s.length)}r.toString=function(){if(this.i)return this.i;if(!this.g)return"";const t=[],i=Array.from(this.g.keys());for(var s=0;s<i.length;s++){var a=i[s];const _=encodeURIComponent(String(a)),T=this.V(a);for(a=0;a<T.length;a++){var m=_;T[a]!==""&&(m+="="+encodeURIComponent(String(T[a]))),t.push(m)}}return this.i=t.join("&")};function St(t,i){return i=String(i),t.j&&(i=i.toLowerCase()),i}function Jr(t,i){i&&!t.j&&(ut(t),t.i=null,t.g.forEach(function(s,a){var m=a.toLowerCase();a!=m&&(Xi(this,a),Ji(this,m,s))},t)),t.j=i}function Yr(t,i){const s=new Ft;if(w.Image){const a=new Image;a.onload=$(ct,s,"TestLoadImage: loaded",!0,i,a),a.onerror=$(ct,s,"TestLoadImage: error",!1,i,a),a.onabort=$(ct,s,"TestLoadImage: abort",!1,i,a),a.ontimeout=$(ct,s,"TestLoadImage: timeout",!1,i,a),w.setTimeout(function(){a.ontimeout&&a.ontimeout()},1e4),a.src=t}else i(!1)}function Qr(t,i){const s=new Ft,a=new AbortController,m=setTimeout(()=>{a.abort(),ct(s,"TestPingServer: timeout",!1,i)},1e4);fetch(t,{signal:a.signal}).then(_=>{clearTimeout(m),_.ok?ct(s,"TestPingServer: ok",!0,i):ct(s,"TestPingServer: server error",!1,i)}).catch(()=>{clearTimeout(m),ct(s,"TestPingServer: error",!1,i)})}function ct(t,i,s,a,m){try{m&&(m.onload=null,m.onerror=null,m.onabort=null,m.ontimeout=null),a(s)}catch{}}function Zr(){this.g=new Or}function ts(t,i,s){const a=s||"";try{Gi(t,function(m,_){let T=m;I(m)&&(T=Fe(m)),i.push(a+_+"="+encodeURIComponent(T))})}catch(m){throw i.push(a+"type="+encodeURIComponent("_badmap")),m}}function ue(t){this.l=t.Ub||null,this.j=t.eb||!1}b(ue,Be),ue.prototype.g=function(){return new ce(this.l,this.j)},ue.prototype.i=function(t){return function(){return t}}({});function ce(t,i){j.call(this),this.D=t,this.o=i,this.m=void 0,this.status=this.readyState=0,this.responseType=this.responseText=this.response=this.statusText="",this.onreadystatechange=null,this.u=new Headers,this.h=null,this.B="GET",this.A="",this.g=!1,this.v=this.j=this.l=null}b(ce,j),r=ce.prototype,r.open=function(t,i){if(this.readyState!=0)throw this.abort(),Error("Error reopening a connection");this.B=t,this.A=i,this.readyState=1,Gt(this)},r.send=function(t){if(this.readyState!=1)throw this.abort(),Error("need to call open() first. ");this.g=!0;const i={headers:this.u,method:this.B,credentials:this.m,cache:void 0};t&&(i.body=t),(this.D||w).fetch(new Request(this.A,i)).then(this.Sa.bind(this),this.ga.bind(this))},r.abort=function(){this.response=this.responseText="",this.u=new Headers,this.status=0,this.j&&this.j.cancel("Request was aborted.").catch(()=>{}),1<=this.readyState&&this.g&&this.readyState!=4&&(this.g=!1,$t(this)),this.readyState=0},r.Sa=function(t){if(this.g&&(this.l=t,this.h||(this.status=this.l.status,this.statusText=this.l.statusText,this.h=t.headers,this.readyState=2,Gt(this)),this.g&&(this.readyState=3,Gt(this),this.g)))if(this.responseType==="arraybuffer")t.arrayBuffer().then(this.Qa.bind(this),this.ga.bind(this));else if(typeof w.ReadableStream<"u"&&"body"in t){if(this.j=t.body.getReader(),this.o){if(this.responseType)throw Error('responseType must be empty for "streamBinaryChunks" mode responses.');this.response=[]}else this.response=this.responseText="",this.v=new TextDecoder;Yi(this)}else t.text().then(this.Ra.bind(this),this.ga.bind(this))};function Yi(t){t.j.read().then(t.Pa.bind(t)).catch(t.ga.bind(t))}r.Pa=function(t){if(this.g){if(this.o&&t.value)this.response.push(t.value);else if(!this.o){var i=t.value?t.value:new Uint8Array(0);(i=this.v.decode(i,{stream:!t.done}))&&(this.response=this.responseText+=i)}t.done?$t(this):Gt(this),this.readyState==3&&Yi(this)}},r.Ra=function(t){this.g&&(this.response=this.responseText=t,$t(this))},r.Qa=function(t){this.g&&(this.response=t,$t(this))},r.ga=function(){this.g&&$t(this)};function $t(t){t.readyState=4,t.l=null,t.j=null,t.v=null,Gt(t)}r.setRequestHeader=function(t,i){this.u.append(t,i)},r.getResponseHeader=function(t){return this.h&&this.h.get(t.toLowerCase())||""},r.getAllResponseHeaders=function(){if(!this.h)return"";const t=[],i=this.h.entries();for(var s=i.next();!s.done;)s=s.value,t.push(s[0]+": "+s[1]),s=i.next();return t.join(`\r
`)};function Gt(t){t.onreadystatechange&&t.onreadystatechange.call(t)}Object.defineProperty(ce.prototype,"withCredentials",{get:function(){return this.m==="include"},set:function(t){this.m=t?"include":"same-origin"}});function Qi(t){let i="";return z(t,function(s,a){i+=a,i+=":",i+=s,i+=`\r
`}),i}function Ye(t,i,s){t:{for(a in s){var a=!1;break t}a=!0}a||(s=Qi(s),typeof t=="string"?s!=null&&encodeURIComponent(String(s)):N(t,i,s))}function M(t){j.call(this),this.headers=new Map,this.o=t||null,this.h=!1,this.v=this.g=null,this.D="",this.m=0,this.l="",this.j=this.B=this.u=this.A=!1,this.I=null,this.H="",this.J=!1}b(M,j);var es=/^https?$/i,is=["POST","PUT"];r=M.prototype,r.Ha=function(t){this.J=t},r.ea=function(t,i,s,a){if(this.g)throw Error("[goog.net.XhrIo] Object is active with another request="+this.D+"; newUri="+t);i=i?i.toUpperCase():"GET",this.D=t,this.l="",this.m=0,this.A=!1,this.h=!0,this.g=this.o?this.o.g():Ge.g(),this.v=this.o?Ri(this.o):Ri(Ge),this.g.onreadystatechange=k(this.Ea,this);try{this.B=!0,this.g.open(i,String(t),!0),this.B=!1}catch(_){Zi(this,_);return}if(t=s||"",s=new Map(this.headers),a)if(Object.getPrototypeOf(a)===Object.prototype)for(var m in a)s.set(m,a[m]);else if(typeof a.keys=="function"&&typeof a.get=="function")for(const _ of a.keys())s.set(_,a.get(_));else throw Error("Unknown input type for opt_headers: "+String(a));a=Array.from(s.keys()).find(_=>_.toLowerCase()=="content-type"),m=w.FormData&&t instanceof w.FormData,!(0<=Array.prototype.indexOf.call(is,i,void 0))||a||m||s.set("Content-Type","application/x-www-form-urlencoded;charset=utf-8");for(const[_,T]of s)this.g.setRequestHeader(_,T);this.H&&(this.g.responseType=this.H),"withCredentials"in this.g&&this.g.withCredentials!==this.J&&(this.g.withCredentials=this.J);try{nn(this),this.u=!0,this.g.send(t),this.u=!1}catch(_){Zi(this,_)}};function Zi(t,i){t.h=!1,t.g&&(t.j=!0,t.g.abort(),t.j=!1),t.l=i,t.m=5,tn(t),fe(t)}function tn(t){t.A||(t.A=!0,G(t,"complete"),G(t,"error"))}r.abort=function(t){this.g&&this.h&&(this.h=!1,this.j=!0,this.g.abort(),this.j=!1,this.m=t||7,G(this,"complete"),G(this,"abort"),fe(this))},r.N=function(){this.g&&(this.h&&(this.h=!1,this.j=!0,this.g.abort(),this.j=!1),fe(this,!0)),M.aa.N.call(this)},r.Ea=function(){this.s||(this.B||this.u||this.j?en(this):this.bb())},r.bb=function(){en(this)};function en(t){if(t.h&&typeof y<"u"&&(!t.v[1]||ot(t)!=4||t.Z()!=2)){if(t.u&&ot(t)==4)Si(t.Ea,0,t);else if(G(t,"readystatechange"),ot(t)==4){t.h=!1;try{const T=t.Z();t:switch(T){case 200:case 201:case 202:case 204:case 206:case 304:case 1223:var i=!0;break t;default:i=!1}var s;if(!(s=i)){var a;if(a=T===0){var m=String(t.D).match(Ki)[1]||null;!m&&w.self&&w.self.location&&(m=w.self.location.protocol.slice(0,-1)),a=!es.test(m?m.toLowerCase():"")}s=a}if(s)G(t,"complete"),G(t,"success");else{t.m=6;try{var _=2<ot(t)?t.g.statusText:""}catch{_=""}t.l=_+" ["+t.Z()+"]",tn(t)}}finally{fe(t)}}}}function fe(t,i){if(t.g){nn(t);const s=t.g,a=t.v[0]?()=>{}:null;t.g=null,t.v=null,i||G(t,"ready");try{s.onreadystatechange=a}catch{}}}function nn(t){t.I&&(w.clearTimeout(t.I),t.I=null)}r.isActive=function(){return!!this.g};function ot(t){return t.g?t.g.readyState:0}r.Z=function(){try{return 2<ot(this)?this.g.status:-1}catch{return-1}},r.oa=function(){try{return this.g?this.g.responseText:""}catch{return""}},r.Oa=function(t){if(this.g){var i=this.g.responseText;return t&&i.indexOf(t)==0&&(i=i.substring(t.length)),Dr(i)}};function rn(t){try{if(!t.g)return null;if("response"in t.g)return t.g.response;switch(t.H){case"":case"text":return t.g.responseText;case"arraybuffer":if("mozResponseArrayBuffer"in t.g)return t.g.mozResponseArrayBuffer}return null}catch{return null}}function ns(t){const i={};t=(t.g&&2<=ot(t)&&t.g.getAllResponseHeaders()||"").split(`\r
`);for(let a=0;a<t.length;a++){if(W(t[a]))continue;var s=p(t[a]);const m=s[0];if(s=s[1],typeof s!="string")continue;s=s.trim();const _=i[m]||[];i[m]=_,_.push(s)}g(i,function(a){return a.join(", ")})}r.Ba=function(){return this.m},r.Ka=function(){return typeof this.l=="string"?this.l:String(this.l)};function Kt(t,i,s){return s&&s.internalChannelParams&&s.internalChannelParams[t]||i}function sn(t){this.Aa=0,this.i=[],this.j=new Ft,this.ia=this.qa=this.I=this.W=this.g=this.ya=this.D=this.H=this.m=this.S=this.o=null,this.Ya=this.U=0,this.Va=Kt("failFast",!1,t),this.F=this.C=this.u=this.s=this.l=null,this.X=!0,this.za=this.T=-1,this.Y=this.v=this.B=0,this.Ta=Kt("baseRetryDelayMs",5e3,t),this.cb=Kt("retryDelaySeedMs",1e4,t),this.Wa=Kt("forwardChannelMaxRetries",2,t),this.wa=Kt("forwardChannelRequestTimeoutMs",2e4,t),this.pa=t&&t.xmlHttpFactory||void 0,this.Xa=t&&t.Tb||void 0,this.Ca=t&&t.useFetchStreams||!1,this.L=void 0,this.J=t&&t.supportsCrossDomainXhr||!1,this.K="",this.h=new Bi(t&&t.concurrentRequestLimit),this.Da=new Zr,this.P=t&&t.fastHandshake||!1,this.O=t&&t.encodeInitMessageHeaders||!1,this.P&&this.O&&(this.O=!1),this.Ua=t&&t.Rb||!1,t&&t.xa&&this.j.xa(),t&&t.forceLongPolling&&(this.X=!1),this.ba=!this.P&&this.X&&t&&t.detectBufferingProxy||!1,this.ja=void 0,t&&t.longPollingTimeout&&0<t.longPollingTimeout&&(this.ja=t.longPollingTimeout),this.ca=void 0,this.R=0,this.M=!1,this.ka=this.A=null}r=sn.prototype,r.la=8,r.G=1,r.connect=function(t,i,s,a){K(0),this.W=t,this.H=i||{},s&&a!==void 0&&(this.H.OSID=s,this.H.OAID=a),this.F=this.X,this.I=pn(this,null,this.W),pe(this)};function Qe(t){if(on(t),t.G==3){var i=t.U++,s=st(t.I);if(N(s,"SID",t.K),N(s,"RID",i),N(s,"TYPE","terminate"),zt(t,s),i=new lt(t,t.j,i),i.L=2,i.v=le(st(s)),s=!1,w.navigator&&w.navigator.sendBeacon)try{s=w.navigator.sendBeacon(i.v.toString(),"")}catch{}!s&&w.Image&&(new Image().src=i.v,s=!0),s||(i.g=gn(i.j,null),i.g.ea(i.v)),i.F=Date.now(),oe(i)}dn(t)}function de(t){t.g&&(ti(t),t.g.cancel(),t.g=null)}function on(t){de(t),t.u&&(w.clearTimeout(t.u),t.u=null),ge(t),t.h.cancel(),t.s&&(typeof t.s=="number"&&w.clearTimeout(t.s),t.s=null)}function pe(t){if(!ji(t.h)&&!t.s){t.s=!0;var i=t.Ga;Nt||wi(),Dt||(Nt(),Dt=!0),ke.add(i,t),t.B=0}}function rs(t,i){return Vi(t.h)>=t.h.j-(t.s?1:0)?!1:t.s?(t.i=i.D.concat(t.i),!0):t.G==1||t.G==2||t.B>=(t.Va?0:t.Wa)?!1:(t.s=xt(k(t.Ga,t,i),fn(t,t.B)),t.B++,!0)}r.Ga=function(t){if(this.s)if(this.s=null,this.G==1){if(!t){this.U=Math.floor(1e5*Math.random()),t=this.U++;const m=new lt(this,this.j,t);let _=this.o;if(this.S&&(_?(_=l(_),d(_,this.S)):_=this.S),this.m!==null||this.O||(m.H=_,_=null),this.P)t:{for(var i=0,s=0;s<this.i.length;s++){e:{var a=this.i[s];if("__data__"in a.map&&(a=a.map.__data__,typeof a=="string")){a=a.length;break e}a=void 0}if(a===void 0)break;if(i+=a,4096<i){i=s;break t}if(i===4096||s===this.i.length-1){i=s+1;break t}}i=1e3}else i=1e3;i=hn(this,m,i),s=st(this.I),N(s,"RID",t),N(s,"CVER",22),this.D&&N(s,"X-HTTP-Session-Id",this.D),zt(this,s),_&&(this.O?i="headers="+encodeURIComponent(String(Qi(_)))+"&"+i:this.m&&Ye(s,this.m,_)),Je(this.h,m),this.Ua&&N(s,"TYPE","init"),this.P?(N(s,"$req",i),N(s,"SID","null"),m.T=!0,ze(m,s,null)):ze(m,s,i),this.G=2}}else this.G==3&&(t?an(this,t):this.i.length==0||ji(this.h)||an(this))};function an(t,i){var s;i?s=i.l:s=t.U++;const a=st(t.I);N(a,"SID",t.K),N(a,"RID",s),N(a,"AID",t.T),zt(t,a),t.m&&t.o&&Ye(a,t.m,t.o),s=new lt(t,t.j,s,t.B+1),t.m===null&&(s.H=t.o),i&&(t.i=i.D.concat(t.i)),i=hn(t,s,1e3),s.I=Math.round(.5*t.wa)+Math.round(.5*t.wa*Math.random()),Je(t.h,s),ze(s,a,i)}function zt(t,i){t.H&&z(t.H,function(s,a){N(i,a,s)}),t.l&&Gi({},function(s,a){N(i,a,s)})}function hn(t,i,s){s=Math.min(t.i.length,s);var a=t.l?k(t.l.Na,t.l,t):null;t:{var m=t.i;let _=-1;for(;;){const T=["count="+s];_==-1?0<s?(_=m[0].g,T.push("ofs="+_)):_=0:T.push("ofs="+_);let R=!0;for(let x=0;x<s;x++){let S=m[x].g;const V=m[x].map;if(S-=_,0>S)_=Math.max(0,m[x].g-100),R=!1;else try{ts(V,T,"req"+S+"_")}catch{a&&a(V)}}if(R){a=T.join("&");break t}}}return t=t.i.splice(0,s),i.D=t,a}function ln(t){if(!t.g&&!t.u){t.Y=1;var i=t.Fa;Nt||wi(),Dt||(Nt(),Dt=!0),ke.add(i,t),t.v=0}}function Ze(t){return t.g||t.u||3<=t.v?!1:(t.Y++,t.u=xt(k(t.Fa,t),fn(t,t.v)),t.v++,!0)}r.Fa=function(){if(this.u=null,un(this),this.ba&&!(this.M||this.g==null||0>=this.R)){var t=2*this.R;this.j.info("BP detection timer enabled: "+t),this.A=xt(k(this.ab,this),t)}},r.ab=function(){this.A&&(this.A=null,this.j.info("BP detection timeout reached."),this.j.info("Buffering proxy detected and switch to long-polling!"),this.F=!1,this.M=!0,K(10),de(this),un(this))};function ti(t){t.A!=null&&(w.clearTimeout(t.A),t.A=null)}function un(t){t.g=new lt(t,t.j,"rpc",t.Y),t.m===null&&(t.g.H=t.o),t.g.O=0;var i=st(t.qa);N(i,"RID","rpc"),N(i,"SID",t.K),N(i,"AID",t.T),N(i,"CI",t.F?"0":"1"),!t.F&&t.ja&&N(i,"TO",t.ja),N(i,"TYPE","xmlhttp"),zt(t,i),t.m&&t.o&&Ye(i,t.m,t.o),t.L&&(t.g.I=t.L);var s=t.g;t=t.ia,s.L=1,s.v=le(st(i)),s.m=null,s.P=!0,Ui(s,t)}r.Za=function(){this.C!=null&&(this.C=null,de(this),Ze(this),K(19))};function ge(t){t.C!=null&&(w.clearTimeout(t.C),t.C=null)}function cn(t,i){var s=null;if(t.g==i){ge(t),ti(t),t.g=null;var a=2}else if(qe(t.h,i))s=i.D,Hi(t.h,i),a=1;else return;if(t.G!=0){if(i.o)if(a==1){s=i.m?i.m.length:0,i=Date.now()-i.F;var m=t.B;a=He(),G(a,new Oi(a,s)),pe(t)}else ln(t);else if(m=i.s,m==3||m==0&&0<i.X||!(a==1&&rs(t,i)||a==2&&Ze(t)))switch(s&&0<s.length&&(i=t.h,i.i=i.i.concat(s)),m){case 1:_t(t,5);break;case 4:_t(t,10);break;case 3:_t(t,6);break;default:_t(t,2)}}}function fn(t,i){let s=t.Ta+Math.floor(Math.random()*t.cb);return t.isActive()||(s*=2),s*i}function _t(t,i){if(t.j.info("Error code "+i),i==2){var s=k(t.fb,t),a=t.Xa;const m=!a;a=new vt(a||"//www.google.com/images/cleardot.gif"),w.location&&w.location.protocol=="http"||ae(a,"https"),le(a),m?Yr(a.toString(),s):Qr(a.toString(),s)}else K(2);t.G=0,t.l&&t.l.sa(i),dn(t),on(t)}r.fb=function(t){t?(this.j.info("Successfully pinged google.com"),K(2)):(this.j.info("Failed to ping google.com"),K(1))};function dn(t){if(t.G=0,t.ka=[],t.l){const i=$i(t.h);(i.length!=0||t.i.length!=0)&&(D(t.ka,i),D(t.ka,t.i),t.h.i.length=0,U(t.i),t.i.length=0),t.l.ra()}}function pn(t,i,s){var a=s instanceof vt?st(s):new vt(s);if(a.g!="")i&&(a.g=i+"."+a.g),he(a,a.s);else{var m=w.location;a=m.protocol,i=i?i+"."+m.hostname:m.hostname,m=+m.port;var _=new vt(null);a&&ae(_,a),i&&(_.g=i),m&&he(_,m),s&&(_.l=s),a=_}return s=t.D,i=t.ya,s&&i&&N(a,s,i),N(a,"VER",t.la),zt(t,a),a}function gn(t,i,s){if(i&&!t.J)throw Error("Can't create secondary domain capable XhrIo object.");return i=t.Ca&&!t.pa?new M(new ue({eb:s})):new M(t.pa),i.Ha(t.J),i}r.isActive=function(){return!!this.l&&this.l.isActive(this)};function mn(){}r=mn.prototype,r.ua=function(){},r.ta=function(){},r.sa=function(){},r.ra=function(){},r.isActive=function(){return!0},r.Na=function(){};function q(t,i){j.call(this),this.g=new sn(i),this.l=t,this.h=i&&i.messageUrlParams||null,t=i&&i.messageHeaders||null,i&&i.clientProtocolHeaderRequired&&(t?t["X-Client-Protocol"]="webchannel":t={"X-Client-Protocol":"webchannel"}),this.g.o=t,t=i&&i.initMessageHeaders||null,i&&i.messageContentType&&(t?t["X-WebChannel-Content-Type"]=i.messageContentType:t={"X-WebChannel-Content-Type":i.messageContentType}),i&&i.va&&(t?t["X-WebChannel-Client-Profile"]=i.va:t={"X-WebChannel-Client-Profile":i.va}),this.g.S=t,(t=i&&i.Sb)&&!W(t)&&(this.g.m=t),this.v=i&&i.supportsCrossDomainXhr||!1,this.u=i&&i.sendRawJson||!1,(i=i&&i.httpSessionIdParam)&&!W(i)&&(this.g.D=i,t=this.h,t!==null&&i in t&&(t=this.h,i in t&&delete t[i])),this.j=new bt(this)}b(q,j),q.prototype.m=function(){this.g.l=this.j,this.v&&(this.g.J=!0),this.g.connect(this.l,this.h||void 0)},q.prototype.close=function(){Qe(this.g)},q.prototype.o=function(t){var i=this.g;if(typeof t=="string"){var s={};s.__data__=t,t=s}else this.u&&(s={},s.__data__=Fe(t),t=s);i.i.push(new Vr(i.Ya++,t)),i.G==3&&pe(i)},q.prototype.N=function(){this.g.l=null,delete this.j,Qe(this.g),delete this.g,q.aa.N.call(this)};function yn(t){je.call(this),t.__headers__&&(this.headers=t.__headers__,this.statusCode=t.__status__,delete t.__headers__,delete t.__status__);var i=t.__sm__;if(i){t:{for(const s in i){t=s;break t}t=void 0}(this.i=t)&&(t=this.i,i=i!==null&&t in i?i[t]:void 0),this.data=i}else this.data=t}b(yn,je);function vn(){Ve.call(this),this.status=1}b(vn,Ve);function bt(t){this.g=t}b(bt,mn),bt.prototype.ua=function(){G(this.g,"a")},bt.prototype.ta=function(t){G(this.g,new yn(t))},bt.prototype.sa=function(t){G(this.g,new vn)},bt.prototype.ra=function(){G(this.g,"b")},q.prototype.send=q.prototype.o,q.prototype.open=q.prototype.m,q.prototype.close=q.prototype.close,$e.NO_ERROR=0,$e.TIMEOUT=8,$e.HTTP_ERROR=6,Br.COMPLETE="complete",Lr.EventType=Mt,Mt.OPEN="a",Mt.CLOSE="b",Mt.ERROR="c",Mt.MESSAGE="d",j.prototype.listen=j.prototype.K,M.prototype.listenOnce=M.prototype.L,M.prototype.getLastError=M.prototype.Ka,M.prototype.getLastErrorCode=M.prototype.Ba,M.prototype.getStatus=M.prototype.Z,M.prototype.getResponseJson=M.prototype.Oa,M.prototype.getResponseText=M.prototype.oa,M.prototype.send=M.prototype.ea,M.prototype.setWithCredentials=M.prototype.Ha}).apply(typeof ve<"u"?ve:typeof self<"u"?self:typeof window<"u"?window:{});const Bn="@firebase/firestore";/**
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
 */class X{constructor(e){this.uid=e}isAuthenticated(){return this.uid!=null}toKey(){return this.isAuthenticated()?"uid:"+this.uid:"anonymous-user"}isEqual(e){return e.uid===this.uid}}X.UNAUTHENTICATED=new X(null),X.GOOGLE_CREDENTIALS=new X("google-credentials-uid"),X.FIRST_PARTY=new X("first-party-uid"),X.MOCK_USER=new X("mock-user");/**
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
 */let Re="10.14.0";/**
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
 */const Ae=new gi("@firebase/firestore");function tt(r,...e){if(Ae.logLevel<=P.DEBUG){const n=e.map(wr);Ae.debug(`Firestore (${Re}): ${r}`,...n)}}function _r(r,...e){if(Ae.logLevel<=P.ERROR){const n=e.map(wr);Ae.error(`Firestore (${Re}): ${r}`,...n)}}function wr(r){if(typeof r=="string")return r;try{/**
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
*/return function(n){return JSON.stringify(n)}(r)}catch{return r}}/**
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
 */function Er(r="Unexpected state"){const e=`FIRESTORE (${Re}) INTERNAL ASSERTION FAILED: `+r;throw _r(e),new Error(e)}function Jt(r,e){r||Er()}/**
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
 */const Q={CANCELLED:"cancelled",INVALID_ARGUMENT:"invalid-argument",FAILED_PRECONDITION:"failed-precondition"};class Z extends gt{constructor(e,n){super(e,n),this.code=e,this.message=n,this.toString=()=>`${this.name}: [code=${this.code}]: ${this.message}`}}/**
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
 */class Yt{constructor(){this.promise=new Promise((e,n)=>{this.resolve=e,this.reject=n})}}/**
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
 */class da{constructor(e,n){this.user=n,this.type="OAuth",this.headers=new Map,this.headers.set("Authorization",`Bearer ${e}`)}}class pa{getToken(){return Promise.resolve(null)}invalidateToken(){}start(e,n){e.enqueueRetryable(()=>n(X.UNAUTHENTICATED))}shutdown(){}}class ga{constructor(e){this.t=e,this.currentUser=X.UNAUTHENTICATED,this.i=0,this.forceRefresh=!1,this.auth=null}start(e,n){Jt(this.o===void 0);let o=this.i;const h=E=>this.i!==o?(o=this.i,n(E)):Promise.resolve();let f=new Yt;this.o=()=>{this.i++,this.currentUser=this.u(),f.resolve(),f=new Yt,e.enqueueRetryable(()=>h(this.currentUser))};const y=()=>{const E=f;e.enqueueRetryable(async()=>{await E.promise,await h(this.currentUser)})},w=E=>{tt("FirebaseAuthCredentialsProvider","Auth detected"),this.auth=E,this.o&&(this.auth.addAuthTokenListener(this.o),y())};this.t.onInit(E=>w(E)),setTimeout(()=>{if(!this.auth){const E=this.t.getImmediate({optional:!0});E?w(E):(tt("FirebaseAuthCredentialsProvider","Auth not yet detected"),f.resolve(),f=new Yt)}},0),y()}getToken(){const e=this.i,n=this.forceRefresh;return this.forceRefresh=!1,this.auth?this.auth.getToken(n).then(o=>this.i!==e?(tt("FirebaseAuthCredentialsProvider","getToken aborted due to token change."),this.getToken()):o?(Jt(typeof o.accessToken=="string"),new da(o.accessToken,this.currentUser)):null):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.auth&&this.o&&this.auth.removeAuthTokenListener(this.o),this.o=void 0}u(){const e=this.auth&&this.auth.getUid();return Jt(e===null||typeof e=="string"),new X(e)}}class ma{constructor(e,n,o){this.l=e,this.h=n,this.P=o,this.type="FirstParty",this.user=X.FIRST_PARTY,this.I=new Map}T(){return this.P?this.P():null}get headers(){this.I.set("X-Goog-AuthUser",this.l);const e=this.T();return e&&this.I.set("Authorization",e),this.h&&this.I.set("X-Goog-Iam-Authorization-Token",this.h),this.I}}class ya{constructor(e,n,o){this.l=e,this.h=n,this.P=o}getToken(){return Promise.resolve(new ma(this.l,this.h,this.P))}start(e,n){e.enqueueRetryable(()=>n(X.FIRST_PARTY))}shutdown(){}invalidateToken(){}}class va{constructor(e){this.value=e,this.type="AppCheck",this.headers=new Map,e&&e.length>0&&this.headers.set("x-firebase-appcheck",this.value)}}class _a{constructor(e){this.A=e,this.forceRefresh=!1,this.appCheck=null,this.R=null}start(e,n){Jt(this.o===void 0);const o=f=>{f.error!=null&&tt("FirebaseAppCheckTokenProvider",`Error getting App Check token; using placeholder token instead. Error: ${f.error.message}`);const y=f.token!==this.R;return this.R=f.token,tt("FirebaseAppCheckTokenProvider",`Received ${y?"new":"existing"} token.`),y?n(f.token):Promise.resolve()};this.o=f=>{e.enqueueRetryable(()=>o(f))};const h=f=>{tt("FirebaseAppCheckTokenProvider","AppCheck detected"),this.appCheck=f,this.o&&this.appCheck.addTokenListener(this.o)};this.A.onInit(f=>h(f)),setTimeout(()=>{if(!this.appCheck){const f=this.A.getImmediate({optional:!0});f?h(f):tt("FirebaseAppCheckTokenProvider","AppCheck not yet detected")}},0)}getToken(){const e=this.forceRefresh;return this.forceRefresh=!1,this.appCheck?this.appCheck.getToken(e).then(n=>n?(Jt(typeof n.token=="string"),this.R=n.token,new va(n.token)):null):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.appCheck&&this.o&&this.appCheck.removeTokenListener(this.o),this.o=void 0}}function wa(r){return r.name==="IndexedDbTransactionError"}class Se{constructor(e,n){this.projectId=e,this.database=n||"(default)"}static empty(){return new Se("","")}get isDefaultDatabase(){return this.database==="(default)"}isEqual(e){return e instanceof Se&&e.projectId===this.projectId&&e.database===this.database}}/**
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
 */var jn,A;(A=jn||(jn={}))[A.OK=0]="OK",A[A.CANCELLED=1]="CANCELLED",A[A.UNKNOWN=2]="UNKNOWN",A[A.INVALID_ARGUMENT=3]="INVALID_ARGUMENT",A[A.DEADLINE_EXCEEDED=4]="DEADLINE_EXCEEDED",A[A.NOT_FOUND=5]="NOT_FOUND",A[A.ALREADY_EXISTS=6]="ALREADY_EXISTS",A[A.PERMISSION_DENIED=7]="PERMISSION_DENIED",A[A.UNAUTHENTICATED=16]="UNAUTHENTICATED",A[A.RESOURCE_EXHAUSTED=8]="RESOURCE_EXHAUSTED",A[A.FAILED_PRECONDITION=9]="FAILED_PRECONDITION",A[A.ABORTED=10]="ABORTED",A[A.OUT_OF_RANGE=11]="OUT_OF_RANGE",A[A.UNIMPLEMENTED=12]="UNIMPLEMENTED",A[A.INTERNAL=13]="INTERNAL",A[A.UNAVAILABLE=14]="UNAVAILABLE",A[A.DATA_LOSS=15]="DATA_LOSS";/**
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
 */new vr([4294967295,4294967295],0);function li(){return typeof document<"u"?document:null}/**
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
 */class Ea{constructor(e,n,o=1e3,h=1.5,f=6e4){this.ui=e,this.timerId=n,this.ko=o,this.qo=h,this.Qo=f,this.Ko=0,this.$o=null,this.Uo=Date.now(),this.reset()}reset(){this.Ko=0}Wo(){this.Ko=this.Qo}Go(e){this.cancel();const n=Math.floor(this.Ko+this.zo()),o=Math.max(0,Date.now()-this.Uo),h=Math.max(0,n-o);h>0&&tt("ExponentialBackoff",`Backing off for ${h} ms (base delay: ${this.Ko} ms, delay with jitter: ${n} ms, last attempt: ${o} ms ago)`),this.$o=this.ui.enqueueAfterDelay(this.timerId,h,()=>(this.Uo=Date.now(),e())),this.Ko*=this.qo,this.Ko<this.ko&&(this.Ko=this.ko),this.Ko>this.Qo&&(this.Ko=this.Qo)}jo(){this.$o!==null&&(this.$o.skipDelay(),this.$o=null)}cancel(){this.$o!==null&&(this.$o.cancel(),this.$o=null)}zo(){return(Math.random()-.5)*this.Ko}}/**
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
 */class _i{constructor(e,n,o,h,f){this.asyncQueue=e,this.timerId=n,this.targetTimeMs=o,this.op=h,this.removalCallback=f,this.deferred=new Yt,this.then=this.deferred.promise.then.bind(this.deferred.promise),this.deferred.promise.catch(y=>{})}get promise(){return this.deferred.promise}static createAndSchedule(e,n,o,h,f){const y=Date.now()+o,w=new _i(e,n,y,h,f);return w.start(o),w}start(e){this.timerHandle=setTimeout(()=>this.handleDelayElapsed(),e)}skipDelay(){return this.handleDelayElapsed()}cancel(e){this.timerHandle!==null&&(this.clearTimeout(),this.deferred.reject(new Z(Q.CANCELLED,"Operation cancelled"+(e?": "+e:""))))}handleDelayElapsed(){this.asyncQueue.enqueueAndForget(()=>this.timerHandle!==null?(this.clearTimeout(),this.op().then(e=>this.deferred.resolve(e))):Promise.resolve())}clearTimeout(){this.timerHandle!==null&&(this.removalCallback(this),clearTimeout(this.timerHandle),this.timerHandle=null)}}var Vn,Hn;(Hn=Vn||(Vn={})).ea="default",Hn.Cache="cache";/**
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
 */function Ta(r){const e={};return r.timeoutSeconds!==void 0&&(e.timeoutSeconds=r.timeoutSeconds),e}/**
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
 */const $n=new Map;function Ia(r,e,n,o){if(e===!0&&o===!0)throw new Z(Q.INVALID_ARGUMENT,`${r} and ${n} cannot be used together.`)}/**
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
 */class Gn{constructor(e){var n,o;if(e.host===void 0){if(e.ssl!==void 0)throw new Z(Q.INVALID_ARGUMENT,"Can't provide ssl option if host option is not set");this.host="firestore.googleapis.com",this.ssl=!0}else this.host=e.host,this.ssl=(n=e.ssl)===null||n===void 0||n;if(this.credentials=e.credentials,this.ignoreUndefinedProperties=!!e.ignoreUndefinedProperties,this.localCache=e.localCache,e.cacheSizeBytes===void 0)this.cacheSizeBytes=41943040;else{if(e.cacheSizeBytes!==-1&&e.cacheSizeBytes<1048576)throw new Z(Q.INVALID_ARGUMENT,"cacheSizeBytes must be at least 1048576");this.cacheSizeBytes=e.cacheSizeBytes}Ia("experimentalForceLongPolling",e.experimentalForceLongPolling,"experimentalAutoDetectLongPolling",e.experimentalAutoDetectLongPolling),this.experimentalForceLongPolling=!!e.experimentalForceLongPolling,this.experimentalForceLongPolling?this.experimentalAutoDetectLongPolling=!1:e.experimentalAutoDetectLongPolling===void 0?this.experimentalAutoDetectLongPolling=!0:this.experimentalAutoDetectLongPolling=!!e.experimentalAutoDetectLongPolling,this.experimentalLongPollingOptions=Ta((o=e.experimentalLongPollingOptions)!==null&&o!==void 0?o:{}),function(f){if(f.timeoutSeconds!==void 0){if(isNaN(f.timeoutSeconds))throw new Z(Q.INVALID_ARGUMENT,`invalid long polling timeout: ${f.timeoutSeconds} (must not be NaN)`);if(f.timeoutSeconds<5)throw new Z(Q.INVALID_ARGUMENT,`invalid long polling timeout: ${f.timeoutSeconds} (minimum allowed value is 5)`);if(f.timeoutSeconds>30)throw new Z(Q.INVALID_ARGUMENT,`invalid long polling timeout: ${f.timeoutSeconds} (maximum allowed value is 30)`)}}(this.experimentalLongPollingOptions),this.useFetchStreams=!!e.useFetchStreams}isEqual(e){return this.host===e.host&&this.ssl===e.ssl&&this.credentials===e.credentials&&this.cacheSizeBytes===e.cacheSizeBytes&&this.experimentalForceLongPolling===e.experimentalForceLongPolling&&this.experimentalAutoDetectLongPolling===e.experimentalAutoDetectLongPolling&&function(o,h){return o.timeoutSeconds===h.timeoutSeconds}(this.experimentalLongPollingOptions,e.experimentalLongPollingOptions)&&this.ignoreUndefinedProperties===e.ignoreUndefinedProperties&&this.useFetchStreams===e.useFetchStreams}}class Aa{constructor(e,n,o,h){this._authCredentials=e,this._appCheckCredentials=n,this._databaseId=o,this._app=h,this.type="firestore-lite",this._persistenceKey="(lite)",this._settings=new Gn({}),this._settingsFrozen=!1,this._terminateTask="notTerminated"}get app(){if(!this._app)throw new Z(Q.FAILED_PRECONDITION,"Firestore was not initialized using the Firebase SDK. 'app' is not available");return this._app}get _initialized(){return this._settingsFrozen}get _terminated(){return this._terminateTask!=="notTerminated"}_setSettings(e){if(this._settingsFrozen)throw new Z(Q.FAILED_PRECONDITION,"Firestore has already been started and its settings can no longer be changed. You can only modify settings before calling any other methods on a Firestore object.");this._settings=new Gn(e),e.credentials!==void 0&&(this._authCredentials=function(o){if(!o)return new pa;switch(o.type){case"firstParty":return new ya(o.sessionIndex||"0",o.iamToken||null,o.authTokenFactory||null);case"provider":return o.client;default:throw new Z(Q.INVALID_ARGUMENT,"makeAuthCredentialsProvider failed due to invalid credential type")}}(e.credentials))}_getSettings(){return this._settings}_freezeSettings(){return this._settingsFrozen=!0,this._settings}_delete(){return this._terminateTask==="notTerminated"&&(this._terminateTask=this._terminate()),this._terminateTask}async _restart(){this._terminateTask==="notTerminated"?await this._terminate():this._terminateTask="notTerminated"}toJSON(){return{app:this._app,databaseId:this._databaseId,settings:this._settings}}_terminate(){return function(n){const o=$n.get(n);o&&(tt("ComponentProvider","Removing Datastore"),$n.delete(n),o.terminate())}(this),Promise.resolve()}}/**
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
 */class Kn{constructor(e=Promise.resolve()){this.Pu=[],this.Iu=!1,this.Tu=[],this.Eu=null,this.du=!1,this.Au=!1,this.Ru=[],this.t_=new Ea(this,"async_queue_retry"),this.Vu=()=>{const o=li();o&&tt("AsyncQueue","Visibility state changed to "+o.visibilityState),this.t_.jo()},this.mu=e;const n=li();n&&typeof n.addEventListener=="function"&&n.addEventListener("visibilitychange",this.Vu)}get isShuttingDown(){return this.Iu}enqueueAndForget(e){this.enqueue(e)}enqueueAndForgetEvenWhileRestricted(e){this.fu(),this.gu(e)}enterRestrictedMode(e){if(!this.Iu){this.Iu=!0,this.Au=e||!1;const n=li();n&&typeof n.removeEventListener=="function"&&n.removeEventListener("visibilitychange",this.Vu)}}enqueue(e){if(this.fu(),this.Iu)return new Promise(()=>{});const n=new Yt;return this.gu(()=>this.Iu&&this.Au?Promise.resolve():(e().then(n.resolve,n.reject),n.promise)).then(()=>n.promise)}enqueueRetryable(e){this.enqueueAndForget(()=>(this.Pu.push(e),this.pu()))}async pu(){if(this.Pu.length!==0){try{await this.Pu[0](),this.Pu.shift(),this.t_.reset()}catch(e){if(!wa(e))throw e;tt("AsyncQueue","Operation failed with retryable error: "+e)}this.Pu.length>0&&this.t_.Go(()=>this.pu())}}gu(e){const n=this.mu.then(()=>(this.du=!0,e().catch(o=>{this.Eu=o,this.du=!1;const h=function(y){let w=y.message||"";return y.stack&&(w=y.stack.includes(y.message)?y.stack:y.message+`
`+y.stack),w}(o);throw _r("INTERNAL UNHANDLED ERROR: ",h),o}).then(o=>(this.du=!1,o))));return this.mu=n,n}enqueueAfterDelay(e,n,o){this.fu(),this.Ru.indexOf(e)>-1&&(n=0);const h=_i.createAndSchedule(this,e,n,o,f=>this.yu(f));return this.Tu.push(h),h}fu(){this.Eu&&Er()}verifyOperationInProgress(){}async wu(){let e;do e=this.mu,await e;while(e!==this.mu)}Su(e){for(const n of this.Tu)if(n.timerId===e)return!0;return!1}bu(e){return this.wu().then(()=>{this.Tu.sort((n,o)=>n.targetTimeMs-o.targetTimeMs);for(const n of this.Tu)if(n.skipDelay(),e!=="all"&&n.timerId===e)break;return this.wu()})}Du(e){this.Ru.push(e)}yu(e){const n=this.Tu.indexOf(e);this.Tu.splice(n,1)}}class Sa extends Aa{constructor(e,n,o,h){super(e,n,o,h),this.type="firestore",this._queue=new Kn,this._persistenceKey=(h==null?void 0:h.name)||"[DEFAULT]"}async _terminate(){if(this._firestoreClient){const e=this._firestoreClient.terminate();this._queue=new Kn(e),this._firestoreClient=void 0,await e}}}(function(e,n=!0){(function(h){Re=h})(Ce),Tt(new Et("firestore",(o,{instanceIdentifier:h,options:f})=>{const y=o.getProvider("app").getImmediate(),w=new Sa(new ga(o.getProvider("auth-internal")),new _a(o.getProvider("app-check-internal")),function(I,O){if(!Object.prototype.hasOwnProperty.apply(I.options,["projectId"]))throw new Z(Q.INVALID_ARGUMENT,'"projectId" not provided in firebase.initializeApp.');return new Se(I.options.projectId,O)}(y,h),y);return f=Object.assign({useFetchStreams:n},f),w._setSettings(f),w},"PUBLIC").setMultipleInstances(!0)),et(Bn,"4.7.3",e),et(Bn,"4.7.3","esm2017")})();/**
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
 */const ba="functions";/**
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
 */class Ca{constructor(e,n,o){this.auth=null,this.messaging=null,this.appCheck=null,this.auth=e.getImmediate({optional:!0}),this.messaging=n.getImmediate({optional:!0}),this.auth||e.get().then(h=>this.auth=h,()=>{}),this.messaging||n.get().then(h=>this.messaging=h,()=>{}),this.appCheck||o.get().then(h=>this.appCheck=h,()=>{})}async getAuthToken(){if(this.auth)try{const e=await this.auth.getToken();return e==null?void 0:e.accessToken}catch{return}}async getMessagingToken(){if(!(!this.messaging||!("Notification"in self)||Notification.permission!=="granted"))try{return await this.messaging.getToken()}catch{return}}async getAppCheckToken(e){if(this.appCheck){const n=e?await this.appCheck.getLimitedUseToken():await this.appCheck.getToken();return n.error?null:n.token}return null}async getContext(e){const n=await this.getAuthToken(),o=await this.getMessagingToken(),h=await this.getAppCheckToken(e);return{authToken:n,messagingToken:o,appCheckToken:h}}}/**
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
 */const zn="us-central1";class Pa{constructor(e,n,o,h,f=zn,y){this.app=e,this.fetchImpl=y,this.emulatorOrigin=null,this.contextProvider=new Ca(n,o,h),this.cancelAllRequests=new Promise(w=>{this.deleteService=()=>Promise.resolve(w())});try{const w=new URL(f);this.customDomain=w.origin+(w.pathname==="/"?"":w.pathname),this.region=zn}catch{this.customDomain=null,this.region=f}}_delete(){return this.deleteService()}_url(e){const n=this.app.options.projectId;return this.emulatorOrigin!==null?`${this.emulatorOrigin}/${n}/${this.region}/${e}`:this.customDomain!==null?`${this.customDomain}/${e}`:`https://${this.region}-${n}.cloudfunctions.net/${e}`}}const Wn="@firebase/functions",Xn="0.11.8";/**
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
 */const Ra="auth-internal",ka="app-check-internal",Na="messaging-internal";function Da(r,e){const n=(o,{instanceIdentifier:h})=>{const f=o.getProvider("app").getImmediate(),y=o.getProvider(Ra),w=o.getProvider(Na),E=o.getProvider(ka);return new Pa(f,y,w,E,h,r)};Tt(new Et(ba,n,"PUBLIC").setMultipleInstances(!0)),et(Wn,Xn,e),et(Wn,Xn,"esm2017")}Da(fetch.bind(self));
