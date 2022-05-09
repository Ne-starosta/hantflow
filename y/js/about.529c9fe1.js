(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["about"],{"02db":function(e,t,n){"use strict";n("212c")},"057f":function(e,t,n){var i=n("c6b6"),s=n("fc6a"),r=n("241c").f,o=n("4dae"),a="object"==typeof window&&window&&Object.getOwnPropertyNames?Object.getOwnPropertyNames(window):[],c=function(e){try{return r(e)}catch(t){return o(a)}};e.exports.f=function(e){return a&&"Window"==i(e)?c(e):r(s(e))}},"07ac":function(e,t,n){var i=n("23e7"),s=n("6f53").values;i({target:"Object",stat:!0},{values:function(e){return s(e)}})},"0b42":function(e,t,n){var i=n("da84"),s=n("e8b5"),r=n("68ee"),o=n("861d"),a=n("b622"),c=a("species"),l=i.Array;e.exports=function(e){var t;return s(e)&&(t=e.constructor,r(t)&&(t===l||s(t.prototype))?t=void 0:o(t)&&(t=t[c],null===t&&(t=void 0))),void 0===t?l:t}},"13dc":function(e,t,n){"use strict";n("6fe6")},"159b":function(e,t,n){var i=n("da84"),s=n("fdbc"),r=n("785a"),o=n("17c2"),a=n("9112"),c=function(e){if(e&&e.forEach!==o)try{a(e,"forEach",o)}catch(t){e.forEach=o}};for(var l in s)s[l]&&c(i[l]&&i[l].prototype);c(r)},"17c2":function(e,t,n){"use strict";var i=n("b727").forEach,s=n("a640"),r=s("forEach");e.exports=r?[].forEach:function(e){return i(this,e,arguments.length>1?arguments[1]:void 0)}},"1be5":function(e,t,n){},"1dde":function(e,t,n){var i=n("d039"),s=n("b622"),r=n("2d00"),o=s("species");e.exports=function(e){return r>=51||!i((function(){var t=[],n=t.constructor={};return n[o]=function(){return{foo:1}},1!==t[e](Boolean).foo}))}},"212c":function(e,t,n){},2532:function(e,t,n){"use strict";var i=n("23e7"),s=n("e330"),r=n("5a34"),o=n("1d80"),a=n("577e"),c=n("ab13"),l=s("".indexOf);i({target:"String",proto:!0,forced:!c("includes")},{includes:function(e){return!!~l(a(o(this)),a(r(e)),arguments.length>1?arguments[1]:void 0)}})},"25f0":function(e,t,n){"use strict";var i=n("5e77").PROPER,s=n("6eeb"),r=n("825a"),o=n("577e"),a=n("d039"),c=n("90d8"),l="toString",h=RegExp.prototype,u=h[l],d=a((function(){return"/a/b"!=u.call({source:"a",flags:"b"})})),p=i&&u.name!=l;(d||p)&&s(RegExp.prototype,l,(function(){var e=r(this),t=o(e.source),n=o(c(e));return"/"+t+"/"+n}),{unsafe:!0})},"273d":function(e,t,n){"use strict";n("c636")},3015:function(e,t,n){"use strict";n("be7c")},"3d87":function(e,t,n){var i=n("4930");e.exports=i&&!!Symbol["for"]&&!!Symbol.keyFor},"408a":function(e,t,n){var i=n("e330");e.exports=i(1..valueOf)},"414e":function(e,t,n){e.exports=n.p+"img/empty.bffdac8c.jpg"},"428f":function(e,t,n){var i=n("da84");e.exports=i},"44e7":function(e,t,n){var i=n("861d"),s=n("c6b6"),r=n("b622"),o=r("match");e.exports=function(e){var t;return i(e)&&(void 0!==(t=e[o])?!!t:"RegExp"==s(e))}},"4dae":function(e,t,n){var i=n("da84"),s=n("23cb"),r=n("07fa"),o=n("8418"),a=i.Array,c=Math.max;e.exports=function(e,t,n){for(var i=r(e),l=s(t,i),h=s(void 0===n?i:n,i),u=a(c(h-l,0)),d=0;l<h;l++,d++)o(u,d,e[l]);return u.length=d,u}},"4de4":function(e,t,n){"use strict";var i=n("23e7"),s=n("b727").filter,r=n("1dde"),o=r("filter");i({target:"Array",proto:!0,forced:!o},{filter:function(e){return s(this,e,arguments.length>1?arguments[1]:void 0)}})},"51b0":function(e,t,n){"use strict";(function(e){n.d(t,"a",(function(){return fo})),n.d(t,"b",(function(){return go})),n.d(t,"c",(function(){return ko})),n.d(t,"d",(function(){return po})),n.d(t,"e",(function(){return _o})),n.d(t,"f",(function(){return mo}));var i=n("589b"),s=n("22e5"),r=n("1fd5"),o=n("e691");const a="@firebase/database",c="0.12.8";
/**
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
 */
let l="";function h(e){l=e}
/**
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
 */class u{constructor(e){this.domStorage_=e,this.prefix_="firebase:"}set(e,t){null==t?this.domStorage_.removeItem(this.prefixedName_(e)):this.domStorage_.setItem(this.prefixedName_(e),Object(r["K"])(t))}get(e){const t=this.domStorage_.getItem(this.prefixedName_(e));return null==t?null:Object(r["C"])(t)}remove(e){this.domStorage_.removeItem(this.prefixedName_(e))}prefixedName_(e){return this.prefix_+e}toString(){return this.domStorage_.toString()}}
/**
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
 */class d{constructor(){this.cache_={},this.isInMemoryStorage=!0}set(e,t){null==t?delete this.cache_[e]:this.cache_[e]=t}get(e){return Object(r["k"])(this.cache_,e)?this.cache_[e]:null}remove(e){delete this.cache_[e]}}
/**
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
 */const p=function(e){try{if("undefined"!==typeof window&&"undefined"!==typeof window[e]){const t=window[e];return t.setItem("firebase:sentinel","cache"),t.removeItem("firebase:sentinel"),new u(t)}}catch(t){}return new d},f=p("localStorage"),_=p("sessionStorage"),m=new o["b"]("@firebase/database"),g=function(){let e=1;return function(){return e++}}(),v=function(e){const t=Object(r["J"])(e),n=new r["d"];n.update(t);const i=n.digest();return r["g"].encodeByteArray(i)},y=function(...e){let t="";for(let n=0;n<e.length;n++){const i=e[n];Array.isArray(i)||i&&"object"===typeof i&&"number"===typeof i.length?t+=y.apply(null,i):t+="object"===typeof i?Object(r["K"])(i):i,t+=" "}return t};let b=null,w=!0;const C=function(e,t){Object(r["e"])(!t||!0===e||!1===e,"Can't turn on custom loggers persistently."),!0===e?(m.logLevel=o["a"].VERBOSE,b=m.log.bind(m),t&&_.set("logging_enabled",!0)):"function"===typeof e?b=e:(b=null,_.remove("logging_enabled"))},I=function(...e){if(!0===w&&(w=!1,null===b&&!0===_.get("logging_enabled")&&C(!0)),b){const t=y.apply(null,e);b(t)}},T=function(e){return function(...t){I(e,...t)}},k=function(...e){const t="FIREBASE INTERNAL ERROR: "+y(...e);m.error(t)},E=function(...e){const t="FIREBASE FATAL ERROR: "+y(...e);throw m.error(t),new Error(t)},x=function(...e){const t="FIREBASE WARNING: "+y(...e);m.warn(t)},S=function(){"undefined"!==typeof window&&window.location&&window.location.protocol&&-1!==window.location.protocol.indexOf("https:")&&x("Insecure Firebase access from a secure page. Please use https in calls to new Firebase().")},O=function(e){return"number"===typeof e&&(e!==e||e===Number.POSITIVE_INFINITY||e===Number.NEGATIVE_INFINITY)},N=function(e){if(Object(r["z"])()||"complete"===document.readyState)e();else{let t=!1;const n=function(){document.body?t||(t=!0,e()):setTimeout(n,Math.floor(10))};document.addEventListener?(document.addEventListener("DOMContentLoaded",n,!1),window.addEventListener("load",n,!1)):document.attachEvent&&(document.attachEvent("onreadystatechange",()=>{"complete"===document.readyState&&n()}),window.attachEvent("onload",n))}},P="[MIN_NAME]",R="[MAX_NAME]",j=function(e,t){if(e===t)return 0;if(e===P||t===R)return-1;if(t===P||e===R)return 1;{const n=K(e),i=K(t);return null!==n?null!==i?n-i===0?e.length-t.length:n-i:-1:null!==i?1:e<t?-1:1}},D=function(e,t){return e===t?0:e<t?-1:1},F=function(e,t){if(t&&e in t)return t[e];throw new Error("Missing required key ("+e+") in object: "+Object(r["K"])(t))},M=function(e){if("object"!==typeof e||null===e)return Object(r["K"])(e);const t=[];for(const i in e)t.push(i);t.sort();let n="{";for(let i=0;i<t.length;i++)0!==i&&(n+=","),n+=Object(r["K"])(t[i]),n+=":",n+=M(e[t[i]]);return n+="}",n},L=function(e,t){const n=e.length;if(n<=t)return[e];const i=[];for(let s=0;s<n;s+=t)s+t>n?i.push(e.substring(s,n)):i.push(e.substring(s,s+t));return i};function A(e,t){for(const n in e)e.hasOwnProperty(n)&&t(n,e[n])}const q=function(e){Object(r["e"])(!O(e),"Invalid JSON number");const t=11,n=52,i=(1<<t-1)-1;let s,o,a,c,l;0===e?(o=0,a=0,s=1/e===-1/0?1:0):(s=e<0,e=Math.abs(e),e>=Math.pow(2,1-i)?(c=Math.min(Math.floor(Math.log(e)/Math.LN2),i),o=c+i,a=Math.round(e*Math.pow(2,n-c)-Math.pow(2,n))):(o=0,a=Math.round(e/Math.pow(2,1-i-n))));const h=[];for(l=n;l;l-=1)h.push(a%2?1:0),a=Math.floor(a/2);for(l=t;l;l-=1)h.push(o%2?1:0),o=Math.floor(o/2);h.push(s?1:0),h.reverse();const u=h.join("");let d="";for(l=0;l<64;l+=8){let e=parseInt(u.substr(l,8),2).toString(16);1===e.length&&(e="0"+e),d+=e}return d.toLowerCase()},U=function(){return!("object"!==typeof window||!window["chrome"]||!window["chrome"]["extension"]||/^chrome/.test(window.location.href))},W=function(){return"object"===typeof Windows&&"object"===typeof Windows.UI};const H=new RegExp("^-?(0*)\\d{1,10}$"),V=-2147483648,z=2147483647,K=function(e){if(H.test(e)){const t=Number(e);if(t>=V&&t<=z)return t}return null},$=function(e){try{e()}catch(t){setTimeout(()=>{const e=t.stack||"";throw x("Exception was thrown by user callback.",e),t},Math.floor(0))}},Y=function(){const e="object"===typeof window&&window["navigator"]&&window["navigator"]["userAgent"]||"";return e.search(/googlebot|google webmaster tools|bingbot|yahoo! slurp|baiduspider|yandexbot|duckduckbot/i)>=0},B=function(e,t){const n=setTimeout(e,t);return"object"===typeof n&&n["unref"]&&n["unref"](),n};
/**
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
 */
class G{constructor(e,t){this.appName_=e,this.appCheckProvider=t,this.appCheck=null===t||void 0===t?void 0:t.getImmediate({optional:!0}),this.appCheck||null===t||void 0===t||t.get().then(e=>this.appCheck=e)}getToken(e){return this.appCheck?this.appCheck.getToken(e):new Promise((t,n)=>{setTimeout(()=>{this.appCheck?this.getToken(e).then(t,n):t(null)},0)})}addTokenChangeListener(e){var t;null===(t=this.appCheckProvider)||void 0===t||t.get().then(t=>t.addTokenListener(e))}notifyForInvalidToken(){x(`Provided AppCheck credentials for the app named "${this.appName_}" are invalid. This usually indicates your app was not initialized correctly.`)}}
/**
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
 */class Q{constructor(e,t,n){this.appName_=e,this.firebaseOptions_=t,this.authProvider_=n,this.auth_=null,this.auth_=n.getImmediate({optional:!0}),this.auth_||n.onInit(e=>this.auth_=e)}getToken(e){return this.auth_?this.auth_.getToken(e).catch(e=>e&&"auth/token-not-initialized"===e.code?(I("Got auth/token-not-initialized error.  Treating as null token."),null):Promise.reject(e)):new Promise((t,n)=>{setTimeout(()=>{this.auth_?this.getToken(e).then(t,n):t(null)},0)})}addTokenChangeListener(e){this.auth_?this.auth_.addAuthTokenListener(e):this.authProvider_.get().then(t=>t.addAuthTokenListener(e))}removeTokenChangeListener(e){this.authProvider_.get().then(t=>t.removeAuthTokenListener(e))}notifyForInvalidToken(){let e='Provided authentication credentials for the app named "'+this.appName_+'" are invalid. This usually indicates your app was not initialized correctly. ';"credential"in this.firebaseOptions_?e+='Make sure the "credential" property provided to initializeApp() is authorized to access the specified "databaseURL" and is from the correct project.':"serviceAccount"in this.firebaseOptions_?e+='Make sure the "serviceAccount" property provided to initializeApp() is authorized to access the specified "databaseURL" and is from the correct project.':e+='Make sure the "apiKey" and "databaseURL" properties provided to initializeApp() match the values provided for your app at https://console.firebase.google.com/.',x(e)}}class J{constructor(e){this.accessToken=e}getToken(e){return Promise.resolve({accessToken:this.accessToken})}addTokenChangeListener(e){e(this.accessToken)}removeTokenChangeListener(e){}notifyForInvalidToken(){}}J.OWNER="owner";
/**
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
 */
const X="5",Z="v",ee="s",te="r",ne="f",ie=/(console\.firebase|firebase-console-\w+\.corp|firebase\.corp)\.google\.com/,se="ls",re="p",oe="ac",ae="websocket",ce="long_polling";
/**
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
 */
class le{constructor(e,t,n,i,s=!1,r="",o=!1){this.secure=t,this.namespace=n,this.webSocketOnly=i,this.nodeAdmin=s,this.persistenceKey=r,this.includeNamespaceInQueryParams=o,this._host=e.toLowerCase(),this._domain=this._host.substr(this._host.indexOf(".")+1),this.internalHost=f.get("host:"+e)||this._host}isCacheableHost(){return"s-"===this.internalHost.substr(0,2)}isCustomHost(){return"firebaseio.com"!==this._domain&&"firebaseio-demo.com"!==this._domain}get host(){return this._host}set host(e){e!==this.internalHost&&(this.internalHost=e,this.isCacheableHost()&&f.set("host:"+this._host,this.internalHost))}toString(){let e=this.toURLString();return this.persistenceKey&&(e+="<"+this.persistenceKey+">"),e}toURLString(){const e=this.secure?"https://":"http://",t=this.includeNamespaceInQueryParams?"?ns="+this.namespace:"";return`${e}${this.host}/${t}`}}function he(e){return e.host!==e.internalHost||e.isCustomHost()||e.includeNamespaceInQueryParams}function ue(e,t,n){let i;if(Object(r["e"])("string"===typeof t,"typeof type must == string"),Object(r["e"])("object"===typeof n,"typeof params must == object"),t===ae)i=(e.secure?"wss://":"ws://")+e.internalHost+"/.ws?";else{if(t!==ce)throw new Error("Unknown connection type: "+t);i=(e.secure?"https://":"http://")+e.internalHost+"/.lp?"}he(e)&&(n["ns"]=e.namespace);const s=[];return A(n,(e,t)=>{s.push(e+"="+t)}),i+s.join("&")}
/**
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
 */class de{constructor(){this.counters_={}}incrementCounter(e,t=1){Object(r["k"])(this.counters_,e)||(this.counters_[e]=0),this.counters_[e]+=t}get(){return Object(r["n"])(this.counters_)}}
/**
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
 */const pe={},fe={};function _e(e){const t=e.toString();return pe[t]||(pe[t]=new de),pe[t]}function me(e,t){const n=e.toString();return fe[n]||(fe[n]=t()),fe[n]}
/**
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
 */class ge{constructor(e){this.onMessage_=e,this.pendingResponses=[],this.currentResponseNum=0,this.closeAfterResponse=-1,this.onClose=null}closeAfter(e,t){this.closeAfterResponse=e,this.onClose=t,this.closeAfterResponse<this.currentResponseNum&&(this.onClose(),this.onClose=null)}handleResponse(e,t){this.pendingResponses[e]=t;while(this.pendingResponses[this.currentResponseNum]){const e=this.pendingResponses[this.currentResponseNum];delete this.pendingResponses[this.currentResponseNum];for(let t=0;t<e.length;++t)e[t]&&$(()=>{this.onMessage_(e[t])});if(this.currentResponseNum===this.closeAfterResponse){this.onClose&&(this.onClose(),this.onClose=null);break}this.currentResponseNum++}}}
/**
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
 */const ve="start",ye="close",be="pLPCommand",we="pRTLPCB",Ce="id",Ie="pw",Te="ser",ke="cb",Ee="seg",xe="ts",Se="d",Oe="dframe",Ne=1870,Pe=30,Re=Ne-Pe,je=25e3,De=3e4;class Fe{constructor(e,t,n,i,s,r,o){this.connId=e,this.repoInfo=t,this.applicationId=n,this.appCheckToken=i,this.authToken=s,this.transportSessionId=r,this.lastSessionId=o,this.bytesSent=0,this.bytesReceived=0,this.everConnected_=!1,this.log_=T(e),this.stats_=_e(t),this.urlFn=e=>(this.appCheckToken&&(e[oe]=this.appCheckToken),ue(t,ce,e))}open(e,t){this.curSegmentNum=0,this.onDisconnect_=t,this.myPacketOrderer=new ge(e),this.isClosed_=!1,this.connectTimeoutTimer_=setTimeout(()=>{this.log_("Timed out trying to connect."),this.onClosed_(),this.connectTimeoutTimer_=null},Math.floor(De)),N(()=>{if(this.isClosed_)return;this.scriptTagHolder=new Me((...e)=>{const[t,n,i,s,r]=e;if(this.incrementIncomingBytes_(e),this.scriptTagHolder)if(this.connectTimeoutTimer_&&(clearTimeout(this.connectTimeoutTimer_),this.connectTimeoutTimer_=null),this.everConnected_=!0,t===ve)this.id=n,this.password=i;else{if(t!==ye)throw new Error("Unrecognized command received: "+t);n?(this.scriptTagHolder.sendNewPolls=!1,this.myPacketOrderer.closeAfter(n,()=>{this.onClosed_()})):this.onClosed_()}},(...e)=>{const[t,n]=e;this.incrementIncomingBytes_(e),this.myPacketOrderer.handleResponse(t,n)},()=>{this.onClosed_()},this.urlFn);const e={};e[ve]="t",e[Te]=Math.floor(1e8*Math.random()),this.scriptTagHolder.uniqueCallbackIdentifier&&(e[ke]=this.scriptTagHolder.uniqueCallbackIdentifier),e[Z]=X,this.transportSessionId&&(e[ee]=this.transportSessionId),this.lastSessionId&&(e[se]=this.lastSessionId),this.applicationId&&(e[re]=this.applicationId),this.appCheckToken&&(e[oe]=this.appCheckToken),"undefined"!==typeof location&&location.hostname&&ie.test(location.hostname)&&(e[te]=ne);const t=this.urlFn(e);this.log_("Connecting via long-poll to "+t),this.scriptTagHolder.addTag(t,()=>{})})}start(){this.scriptTagHolder.startLongPoll(this.id,this.password),this.addDisconnectPingFrame(this.id,this.password)}static forceAllow(){Fe.forceAllow_=!0}static forceDisallow(){Fe.forceDisallow_=!0}static isAvailable(){return!Object(r["z"])()&&(!!Fe.forceAllow_||!Fe.forceDisallow_&&"undefined"!==typeof document&&null!=document.createElement&&!U()&&!W())}markConnectionHealthy(){}shutdown_(){this.isClosed_=!0,this.scriptTagHolder&&(this.scriptTagHolder.close(),this.scriptTagHolder=null),this.myDisconnFrame&&(document.body.removeChild(this.myDisconnFrame),this.myDisconnFrame=null),this.connectTimeoutTimer_&&(clearTimeout(this.connectTimeoutTimer_),this.connectTimeoutTimer_=null)}onClosed_(){this.isClosed_||(this.log_("Longpoll is closing itself"),this.shutdown_(),this.onDisconnect_&&(this.onDisconnect_(this.everConnected_),this.onDisconnect_=null))}close(){this.isClosed_||(this.log_("Longpoll is being closed."),this.shutdown_())}send(e){const t=Object(r["K"])(e);this.bytesSent+=t.length,this.stats_.incrementCounter("bytes_sent",t.length);const n=Object(r["i"])(t),i=L(n,Re);for(let s=0;s<i.length;s++)this.scriptTagHolder.enqueueSegment(this.curSegmentNum,i.length,i[s]),this.curSegmentNum++}addDisconnectPingFrame(e,t){if(Object(r["z"])())return;this.myDisconnFrame=document.createElement("iframe");const n={};n[Oe]="t",n[Ce]=e,n[Ie]=t,this.myDisconnFrame.src=this.urlFn(n),this.myDisconnFrame.style.display="none",document.body.appendChild(this.myDisconnFrame)}incrementIncomingBytes_(e){const t=Object(r["K"])(e).length;this.bytesReceived+=t,this.stats_.incrementCounter("bytes_received",t)}}class Me{constructor(e,t,n,i){if(this.onDisconnect=n,this.urlFn=i,this.outstandingRequests=new Set,this.pendingSegs=[],this.currentSerial=Math.floor(1e8*Math.random()),this.sendNewPolls=!0,Object(r["z"])())this.commandCB=e,this.onMessageCB=t;else{this.uniqueCallbackIdentifier=g(),window[be+this.uniqueCallbackIdentifier]=e,window[we+this.uniqueCallbackIdentifier]=t,this.myIFrame=Me.createIFrame_();let n="";if(this.myIFrame.src&&"javascript:"===this.myIFrame.src.substr(0,"javascript:".length)){const e=document.domain;n='<script>document.domain="'+e+'";<\/script>'}const i="<html><body>"+n+"</body></html>";try{this.myIFrame.doc.open(),this.myIFrame.doc.write(i),this.myIFrame.doc.close()}catch(s){I("frame writing exception"),s.stack&&I(s.stack),I(s)}}}static createIFrame_(){const e=document.createElement("iframe");if(e.style.display="none",!document.body)throw"Document body has not initialized. Wait to initialize Firebase until after the document is ready.";document.body.appendChild(e);try{const t=e.contentWindow.document;t||I("No IE domain setting required")}catch(t){const n=document.domain;e.src="javascript:void((function(){document.open();document.domain='"+n+"';document.close();})())"}return e.contentDocument?e.doc=e.contentDocument:e.contentWindow?e.doc=e.contentWindow.document:e.document&&(e.doc=e.document),e}close(){this.alive=!1,this.myIFrame&&(this.myIFrame.doc.body.innerHTML="",setTimeout(()=>{null!==this.myIFrame&&(document.body.removeChild(this.myIFrame),this.myIFrame=null)},Math.floor(0)));const e=this.onDisconnect;e&&(this.onDisconnect=null,e())}startLongPoll(e,t){this.myID=e,this.myPW=t,this.alive=!0;while(this.newRequest_());}newRequest_(){if(this.alive&&this.sendNewPolls&&this.outstandingRequests.size<(this.pendingSegs.length>0?2:1)){this.currentSerial++;const e={};e[Ce]=this.myID,e[Ie]=this.myPW,e[Te]=this.currentSerial;let t=this.urlFn(e),n="",i=0;while(this.pendingSegs.length>0){const e=this.pendingSegs[0];if(!(e.d.length+Pe+n.length<=Ne))break;{const e=this.pendingSegs.shift();n=n+"&"+Ee+i+"="+e.seg+"&"+xe+i+"="+e.ts+"&"+Se+i+"="+e.d,i++}}return t+=n,this.addLongPollTag_(t,this.currentSerial),!0}return!1}enqueueSegment(e,t,n){this.pendingSegs.push({seg:e,ts:t,d:n}),this.alive&&this.newRequest_()}addLongPollTag_(e,t){this.outstandingRequests.add(t);const n=()=>{this.outstandingRequests.delete(t),this.newRequest_()},i=setTimeout(n,Math.floor(je)),s=()=>{clearTimeout(i),n()};this.addTag(e,s)}addTag(e,t){Object(r["z"])()?this.doNodeLongPoll(e,t):setTimeout(()=>{try{if(!this.sendNewPolls)return;const n=this.myIFrame.doc.createElement("script");n.type="text/javascript",n.async=!0,n.src=e,n.onload=n.onreadystatechange=function(){const e=n.readyState;e&&"loaded"!==e&&"complete"!==e||(n.onload=n.onreadystatechange=null,n.parentNode&&n.parentNode.removeChild(n),t())},n.onerror=()=>{I("Long-poll script failed to load: "+e),this.sendNewPolls=!1,this.close()},this.myIFrame.doc.body.appendChild(n)}catch(n){}},Math.floor(1))}}
/**
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
 */const Le=16384,Ae=45e3;let qe=null;"undefined"!==typeof MozWebSocket?qe=MozWebSocket:"undefined"!==typeof WebSocket&&(qe=WebSocket);class Ue{constructor(e,t,n,i,s,r,o){this.connId=e,this.applicationId=n,this.appCheckToken=i,this.authToken=s,this.keepaliveTimer=null,this.frames=null,this.totalFrames=0,this.bytesSent=0,this.bytesReceived=0,this.log_=T(this.connId),this.stats_=_e(t),this.connURL=Ue.connectionURL_(t,r,o,i),this.nodeAdmin=t.nodeAdmin}static connectionURL_(e,t,n,i){const s={};return s[Z]=X,!Object(r["z"])()&&"undefined"!==typeof location&&location.hostname&&ie.test(location.hostname)&&(s[te]=ne),t&&(s[ee]=t),n&&(s[se]=n),i&&(s[oe]=i),ue(e,ae,s)}open(t,n){this.onDisconnect=n,this.onMessage=t,this.log_("Websocket connecting to "+this.connURL),this.everConnected_=!1,f.set("previous_websocket_failure",!0);try{if(Object(r["z"])()){const t=this.nodeAdmin?"AdminNode":"Node",n={headers:{"User-Agent":`Firebase/${X}/${l}/${e.platform}/${t}`,"X-Firebase-GMPID":this.applicationId||""}};this.authToken&&(n.headers["Authorization"]="Bearer "+this.authToken),this.appCheckToken&&(n.headers["X-Firebase-AppCheck"]=this.appCheckToken);const i=Object({NODE_ENV:"production",BASE_URL:"/"}),s=0===this.connURL.indexOf("wss://")?i["HTTPS_PROXY"]||i["https_proxy"]:i["HTTP_PROXY"]||i["http_proxy"];s&&(n["proxy"]={origin:s}),this.mySock=new qe(this.connURL,[],n)}else{const e={headers:{"X-Firebase-GMPID":this.applicationId||"","X-Firebase-AppCheck":this.appCheckToken||""}};this.mySock=new qe(this.connURL,[],e)}}catch(i){this.log_("Error instantiating WebSocket.");const e=i.message||i.data;return e&&this.log_(e),void this.onClosed_()}this.mySock.onopen=()=>{this.log_("Websocket connected."),this.everConnected_=!0},this.mySock.onclose=()=>{this.log_("Websocket connection was disconnected."),this.mySock=null,this.onClosed_()},this.mySock.onmessage=e=>{this.handleIncomingFrame(e)},this.mySock.onerror=e=>{this.log_("WebSocket error.  Closing connection.");const t=e.message||e.data;t&&this.log_(t),this.onClosed_()}}start(){}static forceDisallow(){Ue.forceDisallow_=!0}static isAvailable(){let e=!1;if("undefined"!==typeof navigator&&navigator.userAgent){const t=/Android ([0-9]{0,}\.[0-9]{0,})/,n=navigator.userAgent.match(t);n&&n.length>1&&parseFloat(n[1])<4.4&&(e=!0)}return!e&&null!==qe&&!Ue.forceDisallow_}static previouslyFailed(){return f.isInMemoryStorage||!0===f.get("previous_websocket_failure")}markConnectionHealthy(){f.remove("previous_websocket_failure")}appendFrame_(e){if(this.frames.push(e),this.frames.length===this.totalFrames){const e=this.frames.join("");this.frames=null;const t=Object(r["C"])(e);this.onMessage(t)}}handleNewFrameCount_(e){this.totalFrames=e,this.frames=[]}extractFrameCount_(e){if(Object(r["e"])(null===this.frames,"We already have a frame buffer"),e.length<=6){const t=Number(e);if(!isNaN(t))return this.handleNewFrameCount_(t),null}return this.handleNewFrameCount_(1),e}handleIncomingFrame(e){if(null===this.mySock)return;const t=e["data"];if(this.bytesReceived+=t.length,this.stats_.incrementCounter("bytes_received",t.length),this.resetKeepAlive(),null!==this.frames)this.appendFrame_(t);else{const e=this.extractFrameCount_(t);null!==e&&this.appendFrame_(e)}}send(e){this.resetKeepAlive();const t=Object(r["K"])(e);this.bytesSent+=t.length,this.stats_.incrementCounter("bytes_sent",t.length);const n=L(t,Le);n.length>1&&this.sendString_(String(n.length));for(let i=0;i<n.length;i++)this.sendString_(n[i])}shutdown_(){this.isClosed_=!0,this.keepaliveTimer&&(clearInterval(this.keepaliveTimer),this.keepaliveTimer=null),this.mySock&&(this.mySock.close(),this.mySock=null)}onClosed_(){this.isClosed_||(this.log_("WebSocket is closing itself"),this.shutdown_(),this.onDisconnect&&(this.onDisconnect(this.everConnected_),this.onDisconnect=null))}close(){this.isClosed_||(this.log_("WebSocket is being closed"),this.shutdown_())}resetKeepAlive(){clearInterval(this.keepaliveTimer),this.keepaliveTimer=setInterval(()=>{this.mySock&&this.sendString_("0"),this.resetKeepAlive()},Math.floor(Ae))}sendString_(e){try{this.mySock.send(e)}catch(t){this.log_("Exception thrown from WebSocket.send():",t.message||t.data,"Closing connection."),setTimeout(this.onClosed_.bind(this),0)}}}Ue.responsesRequiredToBeHealthy=2,Ue.healthyTimeout=3e4;
/**
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
 */
class We{constructor(e){this.initTransports_(e)}static get ALL_TRANSPORTS(){return[Fe,Ue]}initTransports_(e){const t=Ue&&Ue["isAvailable"]();let n=t&&!Ue.previouslyFailed();if(e.webSocketOnly&&(t||x("wss:// URL used, but browser isn't known to support websockets.  Trying anyway."),n=!0),n)this.transports_=[Ue];else{const e=this.transports_=[];for(const t of We.ALL_TRANSPORTS)t&&t["isAvailable"]()&&e.push(t)}}initialTransport(){if(this.transports_.length>0)return this.transports_[0];throw new Error("No transports available")}upgradeTransport(){return this.transports_.length>1?this.transports_[1]:null}}
/**
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
 */const He=6e4,Ve=5e3,ze=10240,Ke=102400,$e="t",Ye="d",Be="s",Ge="r",Qe="e",Je="o",Xe="a",Ze="n",et="p",tt="h";class nt{constructor(e,t,n,i,s,r,o,a,c,l){this.id=e,this.repoInfo_=t,this.applicationId_=n,this.appCheckToken_=i,this.authToken_=s,this.onMessage_=r,this.onReady_=o,this.onDisconnect_=a,this.onKill_=c,this.lastSessionId=l,this.connectionCount=0,this.pendingDataMessages=[],this.state_=0,this.log_=T("c:"+this.id+":"),this.transportManager_=new We(t),this.log_("Connection created"),this.start_()}start_(){const e=this.transportManager_.initialTransport();this.conn_=new e(this.nextTransportId_(),this.repoInfo_,this.applicationId_,this.appCheckToken_,this.authToken_,null,this.lastSessionId),this.primaryResponsesRequired_=e["responsesRequiredToBeHealthy"]||0;const t=this.connReceiver_(this.conn_),n=this.disconnReceiver_(this.conn_);this.tx_=this.conn_,this.rx_=this.conn_,this.secondaryConn_=null,this.isHealthy_=!1,setTimeout(()=>{this.conn_&&this.conn_.open(t,n)},Math.floor(0));const i=e["healthyTimeout"]||0;i>0&&(this.healthyTimeout_=B(()=>{this.healthyTimeout_=null,this.isHealthy_||(this.conn_&&this.conn_.bytesReceived>Ke?(this.log_("Connection exceeded healthy timeout but has received "+this.conn_.bytesReceived+" bytes.  Marking connection healthy."),this.isHealthy_=!0,this.conn_.markConnectionHealthy()):this.conn_&&this.conn_.bytesSent>ze?this.log_("Connection exceeded healthy timeout but has sent "+this.conn_.bytesSent+" bytes.  Leaving connection alive."):(this.log_("Closing unhealthy connection after timeout."),this.close()))},Math.floor(i)))}nextTransportId_(){return"c:"+this.id+":"+this.connectionCount++}disconnReceiver_(e){return t=>{e===this.conn_?this.onConnectionLost_(t):e===this.secondaryConn_?(this.log_("Secondary connection lost."),this.onSecondaryConnectionLost_()):this.log_("closing an old connection")}}connReceiver_(e){return t=>{2!==this.state_&&(e===this.rx_?this.onPrimaryMessageReceived_(t):e===this.secondaryConn_?this.onSecondaryMessageReceived_(t):this.log_("message on old connection"))}}sendRequest(e){const t={t:"d",d:e};this.sendData_(t)}tryCleanupConnection(){this.tx_===this.secondaryConn_&&this.rx_===this.secondaryConn_&&(this.log_("cleaning up and promoting a connection: "+this.secondaryConn_.connId),this.conn_=this.secondaryConn_,this.secondaryConn_=null)}onSecondaryControl_(e){if($e in e){const t=e[$e];t===Xe?this.upgradeIfSecondaryHealthy_():t===Ge?(this.log_("Got a reset on secondary, closing it"),this.secondaryConn_.close(),this.tx_!==this.secondaryConn_&&this.rx_!==this.secondaryConn_||this.close()):t===Je&&(this.log_("got pong on secondary."),this.secondaryResponsesRequired_--,this.upgradeIfSecondaryHealthy_())}}onSecondaryMessageReceived_(e){const t=F("t",e),n=F("d",e);if("c"===t)this.onSecondaryControl_(n);else{if("d"!==t)throw new Error("Unknown protocol layer: "+t);this.pendingDataMessages.push(n)}}upgradeIfSecondaryHealthy_(){this.secondaryResponsesRequired_<=0?(this.log_("Secondary connection is healthy."),this.isHealthy_=!0,this.secondaryConn_.markConnectionHealthy(),this.proceedWithUpgrade_()):(this.log_("sending ping on secondary."),this.secondaryConn_.send({t:"c",d:{t:et,d:{}}}))}proceedWithUpgrade_(){this.secondaryConn_.start(),this.log_("sending client ack on secondary"),this.secondaryConn_.send({t:"c",d:{t:Xe,d:{}}}),this.log_("Ending transmission on primary"),this.conn_.send({t:"c",d:{t:Ze,d:{}}}),this.tx_=this.secondaryConn_,this.tryCleanupConnection()}onPrimaryMessageReceived_(e){const t=F("t",e),n=F("d",e);"c"===t?this.onControl_(n):"d"===t&&this.onDataMessage_(n)}onDataMessage_(e){this.onPrimaryResponse_(),this.onMessage_(e)}onPrimaryResponse_(){this.isHealthy_||(this.primaryResponsesRequired_--,this.primaryResponsesRequired_<=0&&(this.log_("Primary connection is healthy."),this.isHealthy_=!0,this.conn_.markConnectionHealthy()))}onControl_(e){const t=F($e,e);if(Ye in e){const n=e[Ye];if(t===tt)this.onHandshake_(n);else if(t===Ze){this.log_("recvd end transmission on primary"),this.rx_=this.secondaryConn_;for(let e=0;e<this.pendingDataMessages.length;++e)this.onDataMessage_(this.pendingDataMessages[e]);this.pendingDataMessages=[],this.tryCleanupConnection()}else t===Be?this.onConnectionShutdown_(n):t===Ge?this.onReset_(n):t===Qe?k("Server Error: "+n):t===Je?(this.log_("got pong on primary."),this.onPrimaryResponse_(),this.sendPingOnPrimaryIfNecessary_()):k("Unknown control packet command: "+t)}}onHandshake_(e){const t=e.ts,n=e.v,i=e.h;this.sessionId=e.s,this.repoInfo_.host=i,0===this.state_&&(this.conn_.start(),this.onConnectionEstablished_(this.conn_,t),X!==n&&x("Protocol version mismatch detected"),this.tryStartUpgrade_())}tryStartUpgrade_(){const e=this.transportManager_.upgradeTransport();e&&this.startUpgrade_(e)}startUpgrade_(e){this.secondaryConn_=new e(this.nextTransportId_(),this.repoInfo_,this.applicationId_,this.appCheckToken_,this.authToken_,this.sessionId),this.secondaryResponsesRequired_=e["responsesRequiredToBeHealthy"]||0;const t=this.connReceiver_(this.secondaryConn_),n=this.disconnReceiver_(this.secondaryConn_);this.secondaryConn_.open(t,n),B(()=>{this.secondaryConn_&&(this.log_("Timed out trying to upgrade."),this.secondaryConn_.close())},Math.floor(He))}onReset_(e){this.log_("Reset packet received.  New host: "+e),this.repoInfo_.host=e,1===this.state_?this.close():(this.closeConnections_(),this.start_())}onConnectionEstablished_(e,t){this.log_("Realtime connection established."),this.conn_=e,this.state_=1,this.onReady_&&(this.onReady_(t,this.sessionId),this.onReady_=null),0===this.primaryResponsesRequired_?(this.log_("Primary connection is healthy."),this.isHealthy_=!0):B(()=>{this.sendPingOnPrimaryIfNecessary_()},Math.floor(Ve))}sendPingOnPrimaryIfNecessary_(){this.isHealthy_||1!==this.state_||(this.log_("sending ping on primary."),this.sendData_({t:"c",d:{t:et,d:{}}}))}onSecondaryConnectionLost_(){const e=this.secondaryConn_;this.secondaryConn_=null,this.tx_!==e&&this.rx_!==e||this.close()}onConnectionLost_(e){this.conn_=null,e||0!==this.state_?1===this.state_&&this.log_("Realtime connection lost."):(this.log_("Realtime connection failed."),this.repoInfo_.isCacheableHost()&&(f.remove("host:"+this.repoInfo_.host),this.repoInfo_.internalHost=this.repoInfo_.host)),this.close()}onConnectionShutdown_(e){this.log_("Connection shutdown command received. Shutting down..."),this.onKill_&&(this.onKill_(e),this.onKill_=null),this.onDisconnect_=null,this.close()}sendData_(e){if(1!==this.state_)throw"Connection is not connected";this.tx_.send(e)}close(){2!==this.state_&&(this.log_("Closing realtime connection."),this.state_=2,this.closeConnections_(),this.onDisconnect_&&(this.onDisconnect_(),this.onDisconnect_=null))}closeConnections_(){this.log_("Shutting down all connections"),this.conn_&&(this.conn_.close(),this.conn_=null),this.secondaryConn_&&(this.secondaryConn_.close(),this.secondaryConn_=null),this.healthyTimeout_&&(clearTimeout(this.healthyTimeout_),this.healthyTimeout_=null)}}
/**
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
 */class it{put(e,t,n,i){}merge(e,t,n,i){}refreshAuthToken(e){}refreshAppCheckToken(e){}onDisconnectPut(e,t,n){}onDisconnectMerge(e,t,n){}onDisconnectCancel(e,t){}reportStats(e){}}
/**
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
 */class st{constructor(e){this.allowedEvents_=e,this.listeners_={},Object(r["e"])(Array.isArray(e)&&e.length>0,"Requires a non-empty array")}trigger(e,...t){if(Array.isArray(this.listeners_[e])){const n=[...this.listeners_[e]];for(let e=0;e<n.length;e++)n[e].callback.apply(n[e].context,t)}}on(e,t,n){this.validateEventType_(e),this.listeners_[e]=this.listeners_[e]||[],this.listeners_[e].push({callback:t,context:n});const i=this.getInitialEvent(e);i&&t.apply(n,i)}off(e,t,n){this.validateEventType_(e);const i=this.listeners_[e]||[];for(let s=0;s<i.length;s++)if(i[s].callback===t&&(!n||n===i[s].context))return void i.splice(s,1)}validateEventType_(e){Object(r["e"])(this.allowedEvents_.find(t=>t===e),"Unknown event: "+e)}}
/**
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
 */class rt extends st{constructor(){super(["online"]),this.online_=!0,"undefined"===typeof window||"undefined"===typeof window.addEventListener||Object(r["y"])()||(window.addEventListener("online",()=>{this.online_||(this.online_=!0,this.trigger("online",!0))},!1),window.addEventListener("offline",()=>{this.online_&&(this.online_=!1,this.trigger("online",!1))},!1))}static getInstance(){return new rt}getInitialEvent(e){return Object(r["e"])("online"===e,"Unknown event type: "+e),[this.online_]}currentlyOnline(){return this.online_}}
/**
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
 */const ot=32,at=768;class ct{constructor(e,t){if(void 0===t){this.pieces_=e.split("/");let t=0;for(let e=0;e<this.pieces_.length;e++)this.pieces_[e].length>0&&(this.pieces_[t]=this.pieces_[e],t++);this.pieces_.length=t,this.pieceNum_=0}else this.pieces_=e,this.pieceNum_=t}toString(){let e="";for(let t=this.pieceNum_;t<this.pieces_.length;t++)""!==this.pieces_[t]&&(e+="/"+this.pieces_[t]);return e||"/"}}function lt(){return new ct("")}function ht(e){return e.pieceNum_>=e.pieces_.length?null:e.pieces_[e.pieceNum_]}function ut(e){return e.pieces_.length-e.pieceNum_}function dt(e){let t=e.pieceNum_;return t<e.pieces_.length&&t++,new ct(e.pieces_,t)}function pt(e){return e.pieceNum_<e.pieces_.length?e.pieces_[e.pieces_.length-1]:null}function ft(e){let t="";for(let n=e.pieceNum_;n<e.pieces_.length;n++)""!==e.pieces_[n]&&(t+="/"+encodeURIComponent(String(e.pieces_[n])));return t||"/"}function _t(e,t=0){return e.pieces_.slice(e.pieceNum_+t)}function mt(e){if(e.pieceNum_>=e.pieces_.length)return null;const t=[];for(let n=e.pieceNum_;n<e.pieces_.length-1;n++)t.push(e.pieces_[n]);return new ct(t,0)}function gt(e,t){const n=[];for(let i=e.pieceNum_;i<e.pieces_.length;i++)n.push(e.pieces_[i]);if(t instanceof ct)for(let i=t.pieceNum_;i<t.pieces_.length;i++)n.push(t.pieces_[i]);else{const e=t.split("/");for(let t=0;t<e.length;t++)e[t].length>0&&n.push(e[t])}return new ct(n,0)}function vt(e){return e.pieceNum_>=e.pieces_.length}function yt(e,t){const n=ht(e),i=ht(t);if(null===n)return t;if(n===i)return yt(dt(e),dt(t));throw new Error("INTERNAL ERROR: innerPath ("+t+") is not within outerPath ("+e+")")}function bt(e,t){const n=_t(e,0),i=_t(t,0);for(let s=0;s<n.length&&s<i.length;s++){const e=j(n[s],i[s]);if(0!==e)return e}return n.length===i.length?0:n.length<i.length?-1:1}function wt(e,t){if(ut(e)!==ut(t))return!1;for(let n=e.pieceNum_,i=t.pieceNum_;n<=e.pieces_.length;n++,i++)if(e.pieces_[n]!==t.pieces_[i])return!1;return!0}function Ct(e,t){let n=e.pieceNum_,i=t.pieceNum_;if(ut(e)>ut(t))return!1;while(n<e.pieces_.length){if(e.pieces_[n]!==t.pieces_[i])return!1;++n,++i}return!0}class It{constructor(e,t){this.errorPrefix_=t,this.parts_=_t(e,0),this.byteLength_=Math.max(1,this.parts_.length);for(let n=0;n<this.parts_.length;n++)this.byteLength_+=Object(r["I"])(this.parts_[n]);Et(this)}}function Tt(e,t){e.parts_.length>0&&(e.byteLength_+=1),e.parts_.push(t),e.byteLength_+=Object(r["I"])(t),Et(e)}function kt(e){const t=e.parts_.pop();e.byteLength_-=Object(r["I"])(t),e.parts_.length>0&&(e.byteLength_-=1)}function Et(e){if(e.byteLength_>at)throw new Error(e.errorPrefix_+"has a key path longer than "+at+" bytes ("+e.byteLength_+").");if(e.parts_.length>ot)throw new Error(e.errorPrefix_+"path specified exceeds the maximum depth that can be written ("+ot+") or object contains a cycle "+xt(e))}function xt(e){return 0===e.parts_.length?"":"in property '"+e.parts_.join(".")+"'"}
/**
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
 */class St extends st{constructor(){let e,t;super(["visible"]),"undefined"!==typeof document&&"undefined"!==typeof document.addEventListener&&("undefined"!==typeof document["hidden"]?(t="visibilitychange",e="hidden"):"undefined"!==typeof document["mozHidden"]?(t="mozvisibilitychange",e="mozHidden"):"undefined"!==typeof document["msHidden"]?(t="msvisibilitychange",e="msHidden"):"undefined"!==typeof document["webkitHidden"]&&(t="webkitvisibilitychange",e="webkitHidden")),this.visible_=!0,t&&document.addEventListener(t,()=>{const t=!document[e];t!==this.visible_&&(this.visible_=t,this.trigger("visible",t))},!1)}static getInstance(){return new St}getInitialEvent(e){return Object(r["e"])("visible"===e,"Unknown event type: "+e),[this.visible_]}}
/**
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
 */const Ot=1e3,Nt=3e5,Pt=3e3,Rt=3e4,jt=1.3,Dt=3e4,Ft="server_kill",Mt=3;class Lt extends it{constructor(e,t,n,i,s,o,a,c){if(super(),this.repoInfo_=e,this.applicationId_=t,this.onDataUpdate_=n,this.onConnectStatus_=i,this.onServerInfoUpdate_=s,this.authTokenProvider_=o,this.appCheckTokenProvider_=a,this.authOverride_=c,this.id=Lt.nextPersistentConnectionId_++,this.log_=T("p:"+this.id+":"),this.interruptReasons_={},this.listens=new Map,this.outstandingPuts_=[],this.outstandingGets_=[],this.outstandingPutCount_=0,this.outstandingGetCount_=0,this.onDisconnectRequestQueue_=[],this.connected_=!1,this.reconnectDelay_=Ot,this.maxReconnectDelay_=Nt,this.securityDebugCallback_=null,this.lastSessionId=null,this.establishConnectionTimer_=null,this.visible_=!1,this.requestCBHash_={},this.requestNumber_=0,this.realtime_=null,this.authToken_=null,this.appCheckToken_=null,this.forceTokenRefresh_=!1,this.invalidAuthTokenCount_=0,this.invalidAppCheckTokenCount_=0,this.firstConnection_=!0,this.lastConnectionAttemptTime_=null,this.lastConnectionEstablishedTime_=null,c&&!Object(r["z"])())throw new Error("Auth override specified in options, but not supported on non Node.js platforms");St.getInstance().on("visible",this.onVisible_,this),-1===e.host.indexOf("fblocal")&&rt.getInstance().on("online",this.onOnline_,this)}sendRequest(e,t,n){const i=++this.requestNumber_,s={r:i,a:e,b:t};this.log_(Object(r["K"])(s)),Object(r["e"])(this.connected_,"sendRequest call when we're not connected not allowed."),this.realtime_.sendRequest(s),n&&(this.requestCBHash_[i]=n)}get(e){this.initConnection_();const t=new r["a"],n={p:e._path.toString(),q:e._queryObject},i={action:"g",request:n,onComplete:e=>{const i=e["d"];"ok"===e["s"]?(this.onDataUpdate_(n["p"],i,!1,null),t.resolve(i)):t.reject(i)}};this.outstandingGets_.push(i),this.outstandingGetCount_++;const s=this.outstandingGets_.length-1;return this.connected_||setTimeout(()=>{const e=this.outstandingGets_[s];void 0!==e&&i===e&&(delete this.outstandingGets_[s],this.outstandingGetCount_--,0===this.outstandingGetCount_&&(this.outstandingGets_=[]),this.log_("get "+s+" timed out on connection"),t.reject(new Error("Client is offline.")))},Pt),this.connected_&&this.sendGet_(s),t.promise}listen(e,t,n,i){this.initConnection_();const s=e._queryIdentifier,o=e._path.toString();this.log_("Listen called for "+o+" "+s),this.listens.has(o)||this.listens.set(o,new Map),Object(r["e"])(e._queryParams.isDefault()||!e._queryParams.loadsAllData(),"listen() called for non-default but complete query"),Object(r["e"])(!this.listens.get(o).has(s),"listen() called twice for same path/queryId.");const a={onComplete:i,hashFn:t,query:e,tag:n};this.listens.get(o).set(s,a),this.connected_&&this.sendListen_(a)}sendGet_(e){const t=this.outstandingGets_[e];this.sendRequest("g",t.request,n=>{delete this.outstandingGets_[e],this.outstandingGetCount_--,0===this.outstandingGetCount_&&(this.outstandingGets_=[]),t.onComplete&&t.onComplete(n)})}sendListen_(e){const t=e.query,n=t._path.toString(),i=t._queryIdentifier;this.log_("Listen on "+n+" for "+i);const s={p:n},r="q";e.tag&&(s["q"]=t._queryObject,s["t"]=e.tag),s["h"]=e.hashFn(),this.sendRequest(r,s,s=>{const r=s["d"],o=s["s"];Lt.warnOnListenWarnings_(r,t);const a=this.listens.get(n)&&this.listens.get(n).get(i);a===e&&(this.log_("listen response",s),"ok"!==o&&this.removeListen_(n,i),e.onComplete&&e.onComplete(o,r))})}static warnOnListenWarnings_(e,t){if(e&&"object"===typeof e&&Object(r["k"])(e,"w")){const n=Object(r["H"])(e,"w");if(Array.isArray(n)&&~n.indexOf("no_index")){const e='".indexOn": "'+t._queryParams.getIndex().toString()+'"',n=t._path.toString();x(`Using an unspecified index. Your data will be downloaded and filtered on the client. Consider adding ${e} at `+n+" to your security rules for better performance.")}}}refreshAuthToken(e){this.authToken_=e,this.log_("Auth token refreshed"),this.authToken_?this.tryAuth():this.connected_&&this.sendRequest("unauth",{},()=>{}),this.reduceReconnectDelayIfAdminCredential_(e)}reduceReconnectDelayIfAdminCredential_(e){const t=e&&40===e.length;(t||Object(r["t"])(e))&&(this.log_("Admin auth credential detected.  Reducing max reconnect time."),this.maxReconnectDelay_=Rt)}refreshAppCheckToken(e){this.appCheckToken_=e,this.log_("App check token refreshed"),this.appCheckToken_?this.tryAppCheck():this.connected_&&this.sendRequest("unappeck",{},()=>{})}tryAuth(){if(this.connected_&&this.authToken_){const e=this.authToken_,t=Object(r["B"])(e)?"auth":"gauth",n={cred:e};null===this.authOverride_?n["noauth"]=!0:"object"===typeof this.authOverride_&&(n["authvar"]=this.authOverride_),this.sendRequest(t,n,t=>{const n=t["s"],i=t["d"]||"error";this.authToken_===e&&("ok"===n?this.invalidAuthTokenCount_=0:this.onAuthRevoked_(n,i))})}}tryAppCheck(){this.connected_&&this.appCheckToken_&&this.sendRequest("appcheck",{token:this.appCheckToken_},e=>{const t=e["s"],n=e["d"]||"error";"ok"===t?this.invalidAppCheckTokenCount_=0:this.onAppCheckRevoked_(t,n)})}unlisten(e,t){const n=e._path.toString(),i=e._queryIdentifier;this.log_("Unlisten called for "+n+" "+i),Object(r["e"])(e._queryParams.isDefault()||!e._queryParams.loadsAllData(),"unlisten() called for non-default but complete query");const s=this.removeListen_(n,i);s&&this.connected_&&this.sendUnlisten_(n,i,e._queryObject,t)}sendUnlisten_(e,t,n,i){this.log_("Unlisten on "+e+" for "+t);const s={p:e},r="n";i&&(s["q"]=n,s["t"]=i),this.sendRequest(r,s)}onDisconnectPut(e,t,n){this.initConnection_(),this.connected_?this.sendOnDisconnect_("o",e,t,n):this.onDisconnectRequestQueue_.push({pathString:e,action:"o",data:t,onComplete:n})}onDisconnectMerge(e,t,n){this.initConnection_(),this.connected_?this.sendOnDisconnect_("om",e,t,n):this.onDisconnectRequestQueue_.push({pathString:e,action:"om",data:t,onComplete:n})}onDisconnectCancel(e,t){this.initConnection_(),this.connected_?this.sendOnDisconnect_("oc",e,null,t):this.onDisconnectRequestQueue_.push({pathString:e,action:"oc",data:null,onComplete:t})}sendOnDisconnect_(e,t,n,i){const s={p:t,d:n};this.log_("onDisconnect "+e,s),this.sendRequest(e,s,e=>{i&&setTimeout(()=>{i(e["s"],e["d"])},Math.floor(0))})}put(e,t,n,i){this.putInternal("p",e,t,n,i)}merge(e,t,n,i){this.putInternal("m",e,t,n,i)}putInternal(e,t,n,i,s){this.initConnection_();const r={p:t,d:n};void 0!==s&&(r["h"]=s),this.outstandingPuts_.push({action:e,request:r,onComplete:i}),this.outstandingPutCount_++;const o=this.outstandingPuts_.length-1;this.connected_?this.sendPut_(o):this.log_("Buffering put: "+t)}sendPut_(e){const t=this.outstandingPuts_[e].action,n=this.outstandingPuts_[e].request,i=this.outstandingPuts_[e].onComplete;this.outstandingPuts_[e].queued=this.connected_,this.sendRequest(t,n,n=>{this.log_(t+" response",n),delete this.outstandingPuts_[e],this.outstandingPutCount_--,0===this.outstandingPutCount_&&(this.outstandingPuts_=[]),i&&i(n["s"],n["d"])})}reportStats(e){if(this.connected_){const t={c:e};this.log_("reportStats",t),this.sendRequest("s",t,e=>{const t=e["s"];if("ok"!==t){const t=e["d"];this.log_("reportStats","Error sending stats: "+t)}})}}onDataMessage_(e){if("r"in e){this.log_("from server: "+Object(r["K"])(e));const t=e["r"],n=this.requestCBHash_[t];n&&(delete this.requestCBHash_[t],n(e["b"]))}else{if("error"in e)throw"A server-side error has occurred: "+e["error"];"a"in e&&this.onDataPush_(e["a"],e["b"])}}onDataPush_(e,t){this.log_("handleServerMessage",e,t),"d"===e?this.onDataUpdate_(t["p"],t["d"],!1,t["t"]):"m"===e?this.onDataUpdate_(t["p"],t["d"],!0,t["t"]):"c"===e?this.onListenRevoked_(t["p"],t["q"]):"ac"===e?this.onAuthRevoked_(t["s"],t["d"]):"apc"===e?this.onAppCheckRevoked_(t["s"],t["d"]):"sd"===e?this.onSecurityDebugPacket_(t):k("Unrecognized action received from server: "+Object(r["K"])(e)+"\nAre you using the latest client?")}onReady_(e,t){this.log_("connection ready"),this.connected_=!0,this.lastConnectionEstablishedTime_=(new Date).getTime(),this.handleTimestamp_(e),this.lastSessionId=t,this.firstConnection_&&this.sendConnectStats_(),this.restoreState_(),this.firstConnection_=!1,this.onConnectStatus_(!0)}scheduleConnect_(e){Object(r["e"])(!this.realtime_,"Scheduling a connect when we're already connected/ing?"),this.establishConnectionTimer_&&clearTimeout(this.establishConnectionTimer_),this.establishConnectionTimer_=setTimeout(()=>{this.establishConnectionTimer_=null,this.establishConnection_()},Math.floor(e))}initConnection_(){!this.realtime_&&this.firstConnection_&&this.scheduleConnect_(0)}onVisible_(e){e&&!this.visible_&&this.reconnectDelay_===this.maxReconnectDelay_&&(this.log_("Window became visible.  Reducing delay."),this.reconnectDelay_=Ot,this.realtime_||this.scheduleConnect_(0)),this.visible_=e}onOnline_(e){e?(this.log_("Browser went online."),this.reconnectDelay_=Ot,this.realtime_||this.scheduleConnect_(0)):(this.log_("Browser went offline.  Killing connection."),this.realtime_&&this.realtime_.close())}onRealtimeDisconnect_(){if(this.log_("data client disconnected"),this.connected_=!1,this.realtime_=null,this.cancelSentTransactions_(),this.requestCBHash_={},this.shouldReconnect_()){if(this.visible_){if(this.lastConnectionEstablishedTime_){const e=(new Date).getTime()-this.lastConnectionEstablishedTime_;e>Dt&&(this.reconnectDelay_=Ot),this.lastConnectionEstablishedTime_=null}}else this.log_("Window isn't visible.  Delaying reconnect."),this.reconnectDelay_=this.maxReconnectDelay_,this.lastConnectionAttemptTime_=(new Date).getTime();const e=(new Date).getTime()-this.lastConnectionAttemptTime_;let t=Math.max(0,this.reconnectDelay_-e);t=Math.random()*t,this.log_("Trying to reconnect in "+t+"ms"),this.scheduleConnect_(t),this.reconnectDelay_=Math.min(this.maxReconnectDelay_,this.reconnectDelay_*jt)}this.onConnectStatus_(!1)}async establishConnection_(){if(this.shouldReconnect_()){this.log_("Making a connection attempt"),this.lastConnectionAttemptTime_=(new Date).getTime(),this.lastConnectionEstablishedTime_=null;const e=this.onDataMessage_.bind(this),t=this.onReady_.bind(this),n=this.onRealtimeDisconnect_.bind(this),i=this.id+":"+Lt.nextConnectionId_++,s=this.lastSessionId;let o=!1,a=null;const c=function(){a?a.close():(o=!0,n())},l=function(e){Object(r["e"])(a,"sendRequest call when we're not connected not allowed."),a.sendRequest(e)};this.realtime_={close:c,sendRequest:l};const h=this.forceTokenRefresh_;this.forceTokenRefresh_=!1;try{const[r,c]=await Promise.all([this.authTokenProvider_.getToken(h),this.appCheckTokenProvider_.getToken(h)]);o?I("getToken() completed but was canceled"):(I("getToken() completed. Creating connection."),this.authToken_=r&&r.accessToken,this.appCheckToken_=c&&c.token,a=new nt(i,this.repoInfo_,this.applicationId_,this.appCheckToken_,this.authToken_,e,t,n,e=>{x(e+" ("+this.repoInfo_.toString()+")"),this.interrupt(Ft)},s))}catch(k){this.log_("Failed to get token: "+k),o||(this.repoInfo_.nodeAdmin&&x(k),c())}}}interrupt(e){I("Interrupting connection for reason: "+e),this.interruptReasons_[e]=!0,this.realtime_?this.realtime_.close():(this.establishConnectionTimer_&&(clearTimeout(this.establishConnectionTimer_),this.establishConnectionTimer_=null),this.connected_&&this.onRealtimeDisconnect_())}resume(e){I("Resuming connection for reason: "+e),delete this.interruptReasons_[e],Object(r["v"])(this.interruptReasons_)&&(this.reconnectDelay_=Ot,this.realtime_||this.scheduleConnect_(0))}handleTimestamp_(e){const t=e-(new Date).getTime();this.onServerInfoUpdate_({serverTimeOffset:t})}cancelSentTransactions_(){for(let e=0;e<this.outstandingPuts_.length;e++){const t=this.outstandingPuts_[e];t&&"h"in t.request&&t.queued&&(t.onComplete&&t.onComplete("disconnect"),delete this.outstandingPuts_[e],this.outstandingPutCount_--)}0===this.outstandingPutCount_&&(this.outstandingPuts_=[])}onListenRevoked_(e,t){let n;n=t?t.map(e=>M(e)).join("$"):"default";const i=this.removeListen_(e,n);i&&i.onComplete&&i.onComplete("permission_denied")}removeListen_(e,t){const n=new ct(e).toString();let i;if(this.listens.has(n)){const e=this.listens.get(n);i=e.get(t),e.delete(t),0===e.size&&this.listens.delete(n)}else i=void 0;return i}onAuthRevoked_(e,t){I("Auth token revoked: "+e+"/"+t),this.authToken_=null,this.forceTokenRefresh_=!0,this.realtime_.close(),"invalid_token"!==e&&"permission_denied"!==e||(this.invalidAuthTokenCount_++,this.invalidAuthTokenCount_>=Mt&&(this.reconnectDelay_=Rt,this.authTokenProvider_.notifyForInvalidToken()))}onAppCheckRevoked_(e,t){I("App check token revoked: "+e+"/"+t),this.appCheckToken_=null,this.forceTokenRefresh_=!0,"invalid_token"!==e&&"permission_denied"!==e||(this.invalidAppCheckTokenCount_++,this.invalidAppCheckTokenCount_>=Mt&&this.appCheckTokenProvider_.notifyForInvalidToken())}onSecurityDebugPacket_(e){this.securityDebugCallback_?this.securityDebugCallback_(e):"msg"in e&&console.log("FIREBASE: "+e["msg"].replace("\n","\nFIREBASE: "))}restoreState_(){this.tryAuth(),this.tryAppCheck();for(const e of this.listens.values())for(const t of e.values())this.sendListen_(t);for(let e=0;e<this.outstandingPuts_.length;e++)this.outstandingPuts_[e]&&this.sendPut_(e);while(this.onDisconnectRequestQueue_.length){const e=this.onDisconnectRequestQueue_.shift();this.sendOnDisconnect_(e.action,e.pathString,e.data,e.onComplete)}for(let e=0;e<this.outstandingGets_.length;e++)this.outstandingGets_[e]&&this.sendGet_(e)}sendConnectStats_(){const e={};let t="js";Object(r["z"])()&&(t=this.repoInfo_.nodeAdmin?"admin_node":"node"),e["sdk."+t+"."+l.replace(/\./g,"-")]=1,Object(r["y"])()?e["framework.cordova"]=1:Object(r["A"])()&&(e["framework.reactnative"]=1),this.reportStats(e)}shouldReconnect_(){const e=rt.getInstance().currentlyOnline();return Object(r["v"])(this.interruptReasons_)&&e}}Lt.nextPersistentConnectionId_=0,Lt.nextConnectionId_=0;
/**
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
 */
class At{constructor(e,t){this.name=e,this.node=t}static Wrap(e,t){return new At(e,t)}}
/**
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
 */class qt{getCompare(){return this.compare.bind(this)}indexedValueChanged(e,t){const n=new At(P,e),i=new At(P,t);return 0!==this.compare(n,i)}minPost(){return At.MIN}}
/**
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
 */let Ut;class Wt extends qt{static get __EMPTY_NODE(){return Ut}static set __EMPTY_NODE(e){Ut=e}compare(e,t){return j(e.name,t.name)}isDefinedOn(e){throw Object(r["f"])("KeyIndex.isDefinedOn not expected to be called.")}indexedValueChanged(e,t){return!1}minPost(){return At.MIN}maxPost(){return new At(R,Ut)}makePost(e,t){return Object(r["e"])("string"===typeof e,"KeyIndex indexValue must always be a string."),new At(e,Ut)}toString(){return".key"}}const Ht=new Wt;
/**
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
 */class Vt{constructor(e,t,n,i,s=null){this.isReverse_=i,this.resultGenerator_=s,this.nodeStack_=[];let r=1;while(!e.isEmpty())if(e=e,r=t?n(e.key,t):1,i&&(r*=-1),r<0)e=this.isReverse_?e.left:e.right;else{if(0===r){this.nodeStack_.push(e);break}this.nodeStack_.push(e),e=this.isReverse_?e.right:e.left}}getNext(){if(0===this.nodeStack_.length)return null;let e,t=this.nodeStack_.pop();if(e=this.resultGenerator_?this.resultGenerator_(t.key,t.value):{key:t.key,value:t.value},this.isReverse_){t=t.left;while(!t.isEmpty())this.nodeStack_.push(t),t=t.right}else{t=t.right;while(!t.isEmpty())this.nodeStack_.push(t),t=t.left}return e}hasNext(){return this.nodeStack_.length>0}peek(){if(0===this.nodeStack_.length)return null;const e=this.nodeStack_[this.nodeStack_.length-1];return this.resultGenerator_?this.resultGenerator_(e.key,e.value):{key:e.key,value:e.value}}}class zt{constructor(e,t,n,i,s){this.key=e,this.value=t,this.color=null!=n?n:zt.RED,this.left=null!=i?i:$t.EMPTY_NODE,this.right=null!=s?s:$t.EMPTY_NODE}copy(e,t,n,i,s){return new zt(null!=e?e:this.key,null!=t?t:this.value,null!=n?n:this.color,null!=i?i:this.left,null!=s?s:this.right)}count(){return this.left.count()+1+this.right.count()}isEmpty(){return!1}inorderTraversal(e){return this.left.inorderTraversal(e)||!!e(this.key,this.value)||this.right.inorderTraversal(e)}reverseTraversal(e){return this.right.reverseTraversal(e)||e(this.key,this.value)||this.left.reverseTraversal(e)}min_(){return this.left.isEmpty()?this:this.left.min_()}minKey(){return this.min_().key}maxKey(){return this.right.isEmpty()?this.key:this.right.maxKey()}insert(e,t,n){let i=this;const s=n(e,i.key);return i=s<0?i.copy(null,null,null,i.left.insert(e,t,n),null):0===s?i.copy(null,t,null,null,null):i.copy(null,null,null,null,i.right.insert(e,t,n)),i.fixUp_()}removeMin_(){if(this.left.isEmpty())return $t.EMPTY_NODE;let e=this;return e.left.isRed_()||e.left.left.isRed_()||(e=e.moveRedLeft_()),e=e.copy(null,null,null,e.left.removeMin_(),null),e.fixUp_()}remove(e,t){let n,i;if(n=this,t(e,n.key)<0)n.left.isEmpty()||n.left.isRed_()||n.left.left.isRed_()||(n=n.moveRedLeft_()),n=n.copy(null,null,null,n.left.remove(e,t),null);else{if(n.left.isRed_()&&(n=n.rotateRight_()),n.right.isEmpty()||n.right.isRed_()||n.right.left.isRed_()||(n=n.moveRedRight_()),0===t(e,n.key)){if(n.right.isEmpty())return $t.EMPTY_NODE;i=n.right.min_(),n=n.copy(i.key,i.value,null,null,n.right.removeMin_())}n=n.copy(null,null,null,null,n.right.remove(e,t))}return n.fixUp_()}isRed_(){return this.color}fixUp_(){let e=this;return e.right.isRed_()&&!e.left.isRed_()&&(e=e.rotateLeft_()),e.left.isRed_()&&e.left.left.isRed_()&&(e=e.rotateRight_()),e.left.isRed_()&&e.right.isRed_()&&(e=e.colorFlip_()),e}moveRedLeft_(){let e=this.colorFlip_();return e.right.left.isRed_()&&(e=e.copy(null,null,null,null,e.right.rotateRight_()),e=e.rotateLeft_(),e=e.colorFlip_()),e}moveRedRight_(){let e=this.colorFlip_();return e.left.left.isRed_()&&(e=e.rotateRight_(),e=e.colorFlip_()),e}rotateLeft_(){const e=this.copy(null,null,zt.RED,null,this.right.left);return this.right.copy(null,null,this.color,e,null)}rotateRight_(){const e=this.copy(null,null,zt.RED,this.left.right,null);return this.left.copy(null,null,this.color,null,e)}colorFlip_(){const e=this.left.copy(null,null,!this.left.color,null,null),t=this.right.copy(null,null,!this.right.color,null,null);return this.copy(null,null,!this.color,e,t)}checkMaxDepth_(){const e=this.check_();return Math.pow(2,e)<=this.count()+1}check_(){if(this.isRed_()&&this.left.isRed_())throw new Error("Red node has red child("+this.key+","+this.value+")");if(this.right.isRed_())throw new Error("Right child of ("+this.key+","+this.value+") is red");const e=this.left.check_();if(e!==this.right.check_())throw new Error("Black depths differ");return e+(this.isRed_()?0:1)}}zt.RED=!0,zt.BLACK=!1;class Kt{copy(e,t,n,i,s){return this}insert(e,t,n){return new zt(e,t,null)}remove(e,t){return this}count(){return 0}isEmpty(){return!0}inorderTraversal(e){return!1}reverseTraversal(e){return!1}minKey(){return null}maxKey(){return null}check_(){return 0}isRed_(){return!1}}class $t{constructor(e,t=$t.EMPTY_NODE){this.comparator_=e,this.root_=t}insert(e,t){return new $t(this.comparator_,this.root_.insert(e,t,this.comparator_).copy(null,null,zt.BLACK,null,null))}remove(e){return new $t(this.comparator_,this.root_.remove(e,this.comparator_).copy(null,null,zt.BLACK,null,null))}get(e){let t,n=this.root_;while(!n.isEmpty()){if(t=this.comparator_(e,n.key),0===t)return n.value;t<0?n=n.left:t>0&&(n=n.right)}return null}getPredecessorKey(e){let t,n=this.root_,i=null;while(!n.isEmpty()){if(t=this.comparator_(e,n.key),0===t){if(n.left.isEmpty())return i?i.key:null;n=n.left;while(!n.right.isEmpty())n=n.right;return n.key}t<0?n=n.left:t>0&&(i=n,n=n.right)}throw new Error("Attempted to find predecessor key for a nonexistent key.  What gives?")}isEmpty(){return this.root_.isEmpty()}count(){return this.root_.count()}minKey(){return this.root_.minKey()}maxKey(){return this.root_.maxKey()}inorderTraversal(e){return this.root_.inorderTraversal(e)}reverseTraversal(e){return this.root_.reverseTraversal(e)}getIterator(e){return new Vt(this.root_,null,this.comparator_,!1,e)}getIteratorFrom(e,t){return new Vt(this.root_,e,this.comparator_,!1,t)}getReverseIteratorFrom(e,t){return new Vt(this.root_,e,this.comparator_,!0,t)}getReverseIterator(e){return new Vt(this.root_,null,this.comparator_,!0,e)}}
/**
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
 */
function Yt(e,t){return j(e.name,t.name)}function Bt(e,t){return j(e,t)}
/**
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
 */let Gt;function Qt(e){Gt=e}$t.EMPTY_NODE=new Kt;const Jt=function(e){return"number"===typeof e?"number:"+q(e):"string:"+e},Xt=function(e){if(e.isLeafNode()){const t=e.val();Object(r["e"])("string"===typeof t||"number"===typeof t||"object"===typeof t&&Object(r["k"])(t,".sv"),"Priority must be a string or number.")}else Object(r["e"])(e===Gt||e.isEmpty(),"priority of unexpected type.");Object(r["e"])(e===Gt||e.getPriority().isEmpty(),"Priority nodes can't have a priority of their own.")};
/**
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
 */
let Zt,en,tn;class nn{constructor(e,t=nn.__childrenNodeConstructor.EMPTY_NODE){this.value_=e,this.priorityNode_=t,this.lazyHash_=null,Object(r["e"])(void 0!==this.value_&&null!==this.value_,"LeafNode shouldn't be created with null/undefined value."),Xt(this.priorityNode_)}static set __childrenNodeConstructor(e){Zt=e}static get __childrenNodeConstructor(){return Zt}isLeafNode(){return!0}getPriority(){return this.priorityNode_}updatePriority(e){return new nn(this.value_,e)}getImmediateChild(e){return".priority"===e?this.priorityNode_:nn.__childrenNodeConstructor.EMPTY_NODE}getChild(e){return vt(e)?this:".priority"===ht(e)?this.priorityNode_:nn.__childrenNodeConstructor.EMPTY_NODE}hasChild(){return!1}getPredecessorChildName(e,t){return null}updateImmediateChild(e,t){return".priority"===e?this.updatePriority(t):t.isEmpty()&&".priority"!==e?this:nn.__childrenNodeConstructor.EMPTY_NODE.updateImmediateChild(e,t).updatePriority(this.priorityNode_)}updateChild(e,t){const n=ht(e);return null===n?t:t.isEmpty()&&".priority"!==n?this:(Object(r["e"])(".priority"!==n||1===ut(e),".priority must be the last token in a path"),this.updateImmediateChild(n,nn.__childrenNodeConstructor.EMPTY_NODE.updateChild(dt(e),t)))}isEmpty(){return!1}numChildren(){return 0}forEachChild(e,t){return!1}val(e){return e&&!this.getPriority().isEmpty()?{".value":this.getValue(),".priority":this.getPriority().val()}:this.getValue()}hash(){if(null===this.lazyHash_){let e="";this.priorityNode_.isEmpty()||(e+="priority:"+Jt(this.priorityNode_.val())+":");const t=typeof this.value_;e+=t+":",e+="number"===t?q(this.value_):this.value_,this.lazyHash_=v(e)}return this.lazyHash_}getValue(){return this.value_}compareTo(e){return e===nn.__childrenNodeConstructor.EMPTY_NODE?1:e instanceof nn.__childrenNodeConstructor?-1:(Object(r["e"])(e.isLeafNode(),"Unknown node type"),this.compareToLeafNode_(e))}compareToLeafNode_(e){const t=typeof e.value_,n=typeof this.value_,i=nn.VALUE_TYPE_ORDER.indexOf(t),s=nn.VALUE_TYPE_ORDER.indexOf(n);return Object(r["e"])(i>=0,"Unknown leaf type: "+t),Object(r["e"])(s>=0,"Unknown leaf type: "+n),i===s?"object"===n?0:this.value_<e.value_?-1:this.value_===e.value_?0:1:s-i}withIndex(){return this}isIndexed(){return!0}equals(e){if(e===this)return!0;if(e.isLeafNode()){const t=e;return this.value_===t.value_&&this.priorityNode_.equals(t.priorityNode_)}return!1}}function sn(e){en=e}function rn(e){tn=e}nn.VALUE_TYPE_ORDER=["object","boolean","number","string"];class on extends qt{compare(e,t){const n=e.node.getPriority(),i=t.node.getPriority(),s=n.compareTo(i);return 0===s?j(e.name,t.name):s}isDefinedOn(e){return!e.getPriority().isEmpty()}indexedValueChanged(e,t){return!e.getPriority().equals(t.getPriority())}minPost(){return At.MIN}maxPost(){return new At(R,new nn("[PRIORITY-POST]",tn))}makePost(e,t){const n=en(e);return new At(t,new nn("[PRIORITY-POST]",n))}toString(){return".priority"}}const an=new on,cn=Math.log(2);
/**
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
 */class ln{constructor(e){const t=e=>parseInt(Math.log(e)/cn,10),n=e=>parseInt(Array(e+1).join("1"),2);this.count=t(e+1),this.current_=this.count-1;const i=n(this.count);this.bits_=e+1&i}nextBitIsOne(){const e=!(this.bits_&1<<this.current_);return this.current_--,e}}const hn=function(e,t,n,i){e.sort(t);const s=function(t,i){const r=i-t;let o,a;if(0===r)return null;if(1===r)return o=e[t],a=n?n(o):o,new zt(a,o.node,zt.BLACK,null,null);{const c=parseInt(r/2,10)+t,l=s(t,c),h=s(c+1,i);return o=e[c],a=n?n(o):o,new zt(a,o.node,zt.BLACK,l,h)}},r=function(t){let i=null,r=null,o=e.length;const a=function(t,i){const r=o-t,a=o;o-=t;const l=s(r+1,a),h=e[r],u=n?n(h):h;c(new zt(u,h.node,i,null,l))},c=function(e){i?(i.left=e,i=e):(r=e,i=e)};for(let e=0;e<t.count;++e){const n=t.nextBitIsOne(),i=Math.pow(2,t.count-(e+1));n?a(i,zt.BLACK):(a(i,zt.BLACK),a(i,zt.RED))}return r},o=new ln(e.length),a=r(o);return new $t(i||t,a)};
/**
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
 */let un;const dn={};class pn{constructor(e,t){this.indexes_=e,this.indexSet_=t}static get Default(){return Object(r["e"])(dn&&an,"ChildrenNode.ts has not been loaded"),un=un||new pn({".priority":dn},{".priority":an}),un}get(e){const t=Object(r["H"])(this.indexes_,e);if(!t)throw new Error("No index defined for "+e);return t instanceof $t?t:null}hasIndex(e){return Object(r["k"])(this.indexSet_,e.toString())}addIndex(e,t){Object(r["e"])(e!==Ht,"KeyIndex always exists and isn't meant to be added to the IndexMap.");const n=[];let i=!1;const s=t.getIterator(At.Wrap);let o,a=s.getNext();while(a)i=i||e.isDefinedOn(a.node),n.push(a),a=s.getNext();o=i?hn(n,e.getCompare()):dn;const c=e.toString(),l=Object.assign({},this.indexSet_);l[c]=e;const h=Object.assign({},this.indexes_);return h[c]=o,new pn(h,l)}addToIndexes(e,t){const n=Object(r["D"])(this.indexes_,(n,i)=>{const s=Object(r["H"])(this.indexSet_,i);if(Object(r["e"])(s,"Missing index implementation for "+i),n===dn){if(s.isDefinedOn(e.node)){const n=[],i=t.getIterator(At.Wrap);let r=i.getNext();while(r)r.name!==e.name&&n.push(r),r=i.getNext();return n.push(e),hn(n,s.getCompare())}return dn}{const i=t.get(e.name);let s=n;return i&&(s=s.remove(new At(e.name,i))),s.insert(e,e.node)}});return new pn(n,this.indexSet_)}removeFromIndexes(e,t){const n=Object(r["D"])(this.indexes_,n=>{if(n===dn)return n;{const i=t.get(e.name);return i?n.remove(new At(e.name,i)):n}});return new pn(n,this.indexSet_)}}
/**
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
 */let fn;class _n{constructor(e,t,n){this.children_=e,this.priorityNode_=t,this.indexMap_=n,this.lazyHash_=null,this.priorityNode_&&Xt(this.priorityNode_),this.children_.isEmpty()&&Object(r["e"])(!this.priorityNode_||this.priorityNode_.isEmpty(),"An empty node cannot have a priority")}static get EMPTY_NODE(){return fn||(fn=new _n(new $t(Bt),null,pn.Default))}isLeafNode(){return!1}getPriority(){return this.priorityNode_||fn}updatePriority(e){return this.children_.isEmpty()?this:new _n(this.children_,e,this.indexMap_)}getImmediateChild(e){if(".priority"===e)return this.getPriority();{const t=this.children_.get(e);return null===t?fn:t}}getChild(e){const t=ht(e);return null===t?this:this.getImmediateChild(t).getChild(dt(e))}hasChild(e){return null!==this.children_.get(e)}updateImmediateChild(e,t){if(Object(r["e"])(t,"We should always be passing snapshot nodes"),".priority"===e)return this.updatePriority(t);{const n=new At(e,t);let i,s;t.isEmpty()?(i=this.children_.remove(e),s=this.indexMap_.removeFromIndexes(n,this.children_)):(i=this.children_.insert(e,t),s=this.indexMap_.addToIndexes(n,this.children_));const r=i.isEmpty()?fn:this.priorityNode_;return new _n(i,r,s)}}updateChild(e,t){const n=ht(e);if(null===n)return t;{Object(r["e"])(".priority"!==ht(e)||1===ut(e),".priority must be the last token in a path");const i=this.getImmediateChild(n).updateChild(dt(e),t);return this.updateImmediateChild(n,i)}}isEmpty(){return this.children_.isEmpty()}numChildren(){return this.children_.count()}val(e){if(this.isEmpty())return null;const t={};let n=0,i=0,s=!0;if(this.forEachChild(an,(r,o)=>{t[r]=o.val(e),n++,s&&_n.INTEGER_REGEXP_.test(r)?i=Math.max(i,Number(r)):s=!1}),!e&&s&&i<2*n){const e=[];for(const n in t)e[n]=t[n];return e}return e&&!this.getPriority().isEmpty()&&(t[".priority"]=this.getPriority().val()),t}hash(){if(null===this.lazyHash_){let e="";this.getPriority().isEmpty()||(e+="priority:"+Jt(this.getPriority().val())+":"),this.forEachChild(an,(t,n)=>{const i=n.hash();""!==i&&(e+=":"+t+":"+i)}),this.lazyHash_=""===e?"":v(e)}return this.lazyHash_}getPredecessorChildName(e,t,n){const i=this.resolveIndex_(n);if(i){const n=i.getPredecessorKey(new At(e,t));return n?n.name:null}return this.children_.getPredecessorKey(e)}getFirstChildName(e){const t=this.resolveIndex_(e);if(t){const e=t.minKey();return e&&e.name}return this.children_.minKey()}getFirstChild(e){const t=this.getFirstChildName(e);return t?new At(t,this.children_.get(t)):null}getLastChildName(e){const t=this.resolveIndex_(e);if(t){const e=t.maxKey();return e&&e.name}return this.children_.maxKey()}getLastChild(e){const t=this.getLastChildName(e);return t?new At(t,this.children_.get(t)):null}forEachChild(e,t){const n=this.resolveIndex_(e);return n?n.inorderTraversal(e=>t(e.name,e.node)):this.children_.inorderTraversal(t)}getIterator(e){return this.getIteratorFrom(e.minPost(),e)}getIteratorFrom(e,t){const n=this.resolveIndex_(t);if(n)return n.getIteratorFrom(e,e=>e);{const n=this.children_.getIteratorFrom(e.name,At.Wrap);let i=n.peek();while(null!=i&&t.compare(i,e)<0)n.getNext(),i=n.peek();return n}}getReverseIterator(e){return this.getReverseIteratorFrom(e.maxPost(),e)}getReverseIteratorFrom(e,t){const n=this.resolveIndex_(t);if(n)return n.getReverseIteratorFrom(e,e=>e);{const n=this.children_.getReverseIteratorFrom(e.name,At.Wrap);let i=n.peek();while(null!=i&&t.compare(i,e)>0)n.getNext(),i=n.peek();return n}}compareTo(e){return this.isEmpty()?e.isEmpty()?0:-1:e.isLeafNode()||e.isEmpty()?1:e===gn?-1:0}withIndex(e){if(e===Ht||this.indexMap_.hasIndex(e))return this;{const t=this.indexMap_.addIndex(e,this.children_);return new _n(this.children_,this.priorityNode_,t)}}isIndexed(e){return e===Ht||this.indexMap_.hasIndex(e)}equals(e){if(e===this)return!0;if(e.isLeafNode())return!1;{const t=e;if(this.getPriority().equals(t.getPriority())){if(this.children_.count()===t.children_.count()){const e=this.getIterator(an),n=t.getIterator(an);let i=e.getNext(),s=n.getNext();while(i&&s){if(i.name!==s.name||!i.node.equals(s.node))return!1;i=e.getNext(),s=n.getNext()}return null===i&&null===s}return!1}return!1}}resolveIndex_(e){return e===Ht?null:this.indexMap_.get(e.toString())}}_n.INTEGER_REGEXP_=/^(0|[1-9]\d*)$/;class mn extends _n{constructor(){super(new $t(Bt),_n.EMPTY_NODE,pn.Default)}compareTo(e){return e===this?0:1}equals(e){return e===this}getPriority(){return this}getImmediateChild(e){return _n.EMPTY_NODE}isEmpty(){return!1}}const gn=new mn;Object.defineProperties(At,{MIN:{value:new At(P,_n.EMPTY_NODE)},MAX:{value:new At(R,gn)}}),Wt.__EMPTY_NODE=_n.EMPTY_NODE,nn.__childrenNodeConstructor=_n,Qt(gn),rn(gn);
/**
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
 */
const vn=!0;function yn(e,t=null){if(null===e)return _n.EMPTY_NODE;if("object"===typeof e&&".priority"in e&&(t=e[".priority"]),Object(r["e"])(null===t||"string"===typeof t||"number"===typeof t||"object"===typeof t&&".sv"in t,"Invalid priority type found: "+typeof t),"object"===typeof e&&".value"in e&&null!==e[".value"]&&(e=e[".value"]),"object"!==typeof e||".sv"in e){const n=e;return new nn(n,yn(t))}if(e instanceof Array||!vn){let n=_n.EMPTY_NODE;return A(e,(t,i)=>{if(Object(r["k"])(e,t)&&"."!==t.substring(0,1)){const e=yn(i);!e.isLeafNode()&&e.isEmpty()||(n=n.updateImmediateChild(t,e))}}),n.updatePriority(yn(t))}{const n=[];let i=!1;const s=e;if(A(s,(e,t)=>{if("."!==e.substring(0,1)){const s=yn(t);s.isEmpty()||(i=i||!s.getPriority().isEmpty(),n.push(new At(e,s)))}}),0===n.length)return _n.EMPTY_NODE;const r=hn(n,Yt,e=>e.name,Bt);if(i){const e=hn(n,an.getCompare());return new _n(r,yn(t),new pn({".priority":e},{".priority":an}))}return new _n(r,yn(t),pn.Default)}}sn(yn);
/**
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
 */
class bn extends qt{constructor(e){super(),this.indexPath_=e,Object(r["e"])(!vt(e)&&".priority"!==ht(e),"Can't create PathIndex with empty path or .priority key")}extractChild(e){return e.getChild(this.indexPath_)}isDefinedOn(e){return!e.getChild(this.indexPath_).isEmpty()}compare(e,t){const n=this.extractChild(e.node),i=this.extractChild(t.node),s=n.compareTo(i);return 0===s?j(e.name,t.name):s}makePost(e,t){const n=yn(e),i=_n.EMPTY_NODE.updateChild(this.indexPath_,n);return new At(t,i)}maxPost(){const e=_n.EMPTY_NODE.updateChild(this.indexPath_,gn);return new At(R,e)}toString(){return _t(this.indexPath_,0).join("/")}}
/**
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
 */class wn extends qt{compare(e,t){const n=e.node.compareTo(t.node);return 0===n?j(e.name,t.name):n}isDefinedOn(e){return!0}indexedValueChanged(e,t){return!e.equals(t)}minPost(){return At.MIN}maxPost(){return At.MAX}makePost(e,t){const n=yn(e);return new At(t,n)}toString(){return".value"}}const Cn=new wn,In="-0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZ_abcdefghijklmnopqrstuvwxyz";
/**
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
 */(function(){let e=0;const t=[]})();
/**
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
 */
function Tn(e){return{type:"value",snapshotNode:e}}function kn(e,t){return{type:"child_added",snapshotNode:t,childName:e}}function En(e,t){return{type:"child_removed",snapshotNode:t,childName:e}}function xn(e,t,n){return{type:"child_changed",snapshotNode:t,childName:e,oldSnap:n}}function Sn(e,t){return{type:"child_moved",snapshotNode:t,childName:e}}
/**
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
 */class On{constructor(e){this.index_=e}updateChild(e,t,n,i,s,o){Object(r["e"])(e.isIndexed(this.index_),"A node must be indexed if only a child is updated");const a=e.getImmediateChild(t);return a.getChild(i).equals(n.getChild(i))&&a.isEmpty()===n.isEmpty()?e:(null!=o&&(n.isEmpty()?e.hasChild(t)?o.trackChildChange(En(t,a)):Object(r["e"])(e.isLeafNode(),"A child remove without an old child only makes sense on a leaf node"):a.isEmpty()?o.trackChildChange(kn(t,n)):o.trackChildChange(xn(t,n,a))),e.isLeafNode()&&n.isEmpty()?e:e.updateImmediateChild(t,n).withIndex(this.index_))}updateFullNode(e,t,n){return null!=n&&(e.isLeafNode()||e.forEachChild(an,(e,i)=>{t.hasChild(e)||n.trackChildChange(En(e,i))}),t.isLeafNode()||t.forEachChild(an,(t,i)=>{if(e.hasChild(t)){const s=e.getImmediateChild(t);s.equals(i)||n.trackChildChange(xn(t,i,s))}else n.trackChildChange(kn(t,i))})),t.withIndex(this.index_)}updatePriority(e,t){return e.isEmpty()?_n.EMPTY_NODE:e.updatePriority(t)}filtersNodes(){return!1}getIndexedFilter(){return this}getIndex(){return this.index_}}
/**
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
 */class Nn{constructor(e){this.indexedFilter_=new On(e.getIndex()),this.index_=e.getIndex(),this.startPost_=Nn.getStartPost_(e),this.endPost_=Nn.getEndPost_(e)}getStartPost(){return this.startPost_}getEndPost(){return this.endPost_}matches(e){return this.index_.compare(this.getStartPost(),e)<=0&&this.index_.compare(e,this.getEndPost())<=0}updateChild(e,t,n,i,s,r){return this.matches(new At(t,n))||(n=_n.EMPTY_NODE),this.indexedFilter_.updateChild(e,t,n,i,s,r)}updateFullNode(e,t,n){t.isLeafNode()&&(t=_n.EMPTY_NODE);let i=t.withIndex(this.index_);i=i.updatePriority(_n.EMPTY_NODE);const s=this;return t.forEachChild(an,(e,t)=>{s.matches(new At(e,t))||(i=i.updateImmediateChild(e,_n.EMPTY_NODE))}),this.indexedFilter_.updateFullNode(e,i,n)}updatePriority(e,t){return e}filtersNodes(){return!0}getIndexedFilter(){return this.indexedFilter_}getIndex(){return this.index_}static getStartPost_(e){if(e.hasStart()){const t=e.getIndexStartName();return e.getIndex().makePost(e.getIndexStartValue(),t)}return e.getIndex().minPost()}static getEndPost_(e){if(e.hasEnd()){const t=e.getIndexEndName();return e.getIndex().makePost(e.getIndexEndValue(),t)}return e.getIndex().maxPost()}}
/**
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
 */class Pn{constructor(e){this.rangedFilter_=new Nn(e),this.index_=e.getIndex(),this.limit_=e.getLimit(),this.reverse_=!e.isViewFromLeft()}updateChild(e,t,n,i,s,r){return this.rangedFilter_.matches(new At(t,n))||(n=_n.EMPTY_NODE),e.getImmediateChild(t).equals(n)?e:e.numChildren()<this.limit_?this.rangedFilter_.getIndexedFilter().updateChild(e,t,n,i,s,r):this.fullLimitUpdateChild_(e,t,n,s,r)}updateFullNode(e,t,n){let i;if(t.isLeafNode()||t.isEmpty())i=_n.EMPTY_NODE.withIndex(this.index_);else if(2*this.limit_<t.numChildren()&&t.isIndexed(this.index_)){let e;i=_n.EMPTY_NODE.withIndex(this.index_),e=this.reverse_?t.getReverseIteratorFrom(this.rangedFilter_.getEndPost(),this.index_):t.getIteratorFrom(this.rangedFilter_.getStartPost(),this.index_);let n=0;while(e.hasNext()&&n<this.limit_){const t=e.getNext();let s;if(s=this.reverse_?this.index_.compare(this.rangedFilter_.getStartPost(),t)<=0:this.index_.compare(t,this.rangedFilter_.getEndPost())<=0,!s)break;i=i.updateImmediateChild(t.name,t.node),n++}}else{let e,n,s,r;if(i=t.withIndex(this.index_),i=i.updatePriority(_n.EMPTY_NODE),this.reverse_){r=i.getReverseIterator(this.index_),e=this.rangedFilter_.getEndPost(),n=this.rangedFilter_.getStartPost();const t=this.index_.getCompare();s=(e,n)=>t(n,e)}else r=i.getIterator(this.index_),e=this.rangedFilter_.getStartPost(),n=this.rangedFilter_.getEndPost(),s=this.index_.getCompare();let o=0,a=!1;while(r.hasNext()){const t=r.getNext();!a&&s(e,t)<=0&&(a=!0);const c=a&&o<this.limit_&&s(t,n)<=0;c?o++:i=i.updateImmediateChild(t.name,_n.EMPTY_NODE)}}return this.rangedFilter_.getIndexedFilter().updateFullNode(e,i,n)}updatePriority(e,t){return e}filtersNodes(){return!0}getIndexedFilter(){return this.rangedFilter_.getIndexedFilter()}getIndex(){return this.index_}fullLimitUpdateChild_(e,t,n,i,s){let o;if(this.reverse_){const e=this.index_.getCompare();o=(t,n)=>e(n,t)}else o=this.index_.getCompare();const a=e;Object(r["e"])(a.numChildren()===this.limit_,"");const c=new At(t,n),l=this.reverse_?a.getFirstChild(this.index_):a.getLastChild(this.index_),h=this.rangedFilter_.matches(c);if(a.hasChild(t)){const e=a.getImmediateChild(t);let r=i.getChildAfterChild(this.index_,l,this.reverse_);while(null!=r&&(r.name===t||a.hasChild(r.name)))r=i.getChildAfterChild(this.index_,r,this.reverse_);const u=null==r?1:o(r,c),d=h&&!n.isEmpty()&&u>=0;if(d)return null!=s&&s.trackChildChange(xn(t,n,e)),a.updateImmediateChild(t,n);{null!=s&&s.trackChildChange(En(t,e));const n=a.updateImmediateChild(t,_n.EMPTY_NODE),i=null!=r&&this.rangedFilter_.matches(r);return i?(null!=s&&s.trackChildChange(kn(r.name,r.node)),n.updateImmediateChild(r.name,r.node)):n}}return n.isEmpty()?e:h&&o(l,c)>=0?(null!=s&&(s.trackChildChange(En(l.name,l.node)),s.trackChildChange(kn(t,n))),a.updateImmediateChild(t,n).updateImmediateChild(l.name,_n.EMPTY_NODE)):e}}
/**
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
 */class Rn{constructor(){this.limitSet_=!1,this.startSet_=!1,this.startNameSet_=!1,this.startAfterSet_=!1,this.endSet_=!1,this.endNameSet_=!1,this.endBeforeSet_=!1,this.limit_=0,this.viewFrom_="",this.indexStartValue_=null,this.indexStartName_="",this.indexEndValue_=null,this.indexEndName_="",this.index_=an}hasStart(){return this.startSet_}hasStartAfter(){return this.startAfterSet_}hasEndBefore(){return this.endBeforeSet_}isViewFromLeft(){return""===this.viewFrom_?this.startSet_:"l"===this.viewFrom_}getIndexStartValue(){return Object(r["e"])(this.startSet_,"Only valid if start has been set"),this.indexStartValue_}getIndexStartName(){return Object(r["e"])(this.startSet_,"Only valid if start has been set"),this.startNameSet_?this.indexStartName_:P}hasEnd(){return this.endSet_}getIndexEndValue(){return Object(r["e"])(this.endSet_,"Only valid if end has been set"),this.indexEndValue_}getIndexEndName(){return Object(r["e"])(this.endSet_,"Only valid if end has been set"),this.endNameSet_?this.indexEndName_:R}hasLimit(){return this.limitSet_}hasAnchoredLimit(){return this.limitSet_&&""!==this.viewFrom_}getLimit(){return Object(r["e"])(this.limitSet_,"Only valid if limit has been set"),this.limit_}getIndex(){return this.index_}loadsAllData(){return!(this.startSet_||this.endSet_||this.limitSet_)}isDefault(){return this.loadsAllData()&&this.index_===an}copy(){const e=new Rn;return e.limitSet_=this.limitSet_,e.limit_=this.limit_,e.startSet_=this.startSet_,e.indexStartValue_=this.indexStartValue_,e.startNameSet_=this.startNameSet_,e.indexStartName_=this.indexStartName_,e.endSet_=this.endSet_,e.indexEndValue_=this.indexEndValue_,e.endNameSet_=this.endNameSet_,e.indexEndName_=this.indexEndName_,e.index_=this.index_,e.viewFrom_=this.viewFrom_,e}}function jn(e){return e.loadsAllData()?new On(e.getIndex()):e.hasLimit()?new Pn(e):new Nn(e)}function Dn(e){const t={};if(e.isDefault())return t;let n;return e.index_===an?n="$priority":e.index_===Cn?n="$value":e.index_===Ht?n="$key":(Object(r["e"])(e.index_ instanceof bn,"Unrecognized index type!"),n=e.index_.toString()),t["orderBy"]=Object(r["K"])(n),e.startSet_&&(t["startAt"]=Object(r["K"])(e.indexStartValue_),e.startNameSet_&&(t["startAt"]+=","+Object(r["K"])(e.indexStartName_))),e.endSet_&&(t["endAt"]=Object(r["K"])(e.indexEndValue_),e.endNameSet_&&(t["endAt"]+=","+Object(r["K"])(e.indexEndName_))),e.limitSet_&&(e.isViewFromLeft()?t["limitToFirst"]=e.limit_:t["limitToLast"]=e.limit_),t}function Fn(e){const t={};if(e.startSet_&&(t["sp"]=e.indexStartValue_,e.startNameSet_&&(t["sn"]=e.indexStartName_)),e.endSet_&&(t["ep"]=e.indexEndValue_,e.endNameSet_&&(t["en"]=e.indexEndName_)),e.limitSet_){t["l"]=e.limit_;let n=e.viewFrom_;""===n&&(n=e.isViewFromLeft()?"l":"r"),t["vf"]=n}return e.index_!==an&&(t["i"]=e.index_.toString()),t}
/**
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
 */class Mn extends it{constructor(e,t,n,i){super(),this.repoInfo_=e,this.onDataUpdate_=t,this.authTokenProvider_=n,this.appCheckTokenProvider_=i,this.log_=T("p:rest:"),this.listens_={}}reportStats(e){throw new Error("Method not implemented.")}static getListenId_(e,t){return void 0!==t?"tag$"+t:(Object(r["e"])(e._queryParams.isDefault(),"should have a tag if it's not a default query."),e._path.toString())}listen(e,t,n,i){const s=e._path.toString();this.log_("Listen called for "+s+" "+e._queryIdentifier);const o=Mn.getListenId_(e,n),a={};this.listens_[o]=a;const c=Dn(e._queryParams);this.restRequest_(s+".json",c,(e,t)=>{let c=t;if(404===e&&(c=null,e=null),null===e&&this.onDataUpdate_(s,c,!1,n),Object(r["H"])(this.listens_,o)===a){let t;t=e?401===e?"permission_denied":"rest_error:"+e:"ok",i(t,null)}})}unlisten(e,t){const n=Mn.getListenId_(e,t);delete this.listens_[n]}get(e){const t=Dn(e._queryParams),n=e._path.toString(),i=new r["a"];return this.restRequest_(n+".json",t,(e,t)=>{let s=t;404===e&&(s=null,e=null),null===e?(this.onDataUpdate_(n,s,!1,null),i.resolve(s)):i.reject(new Error(s))}),i.promise}refreshAuthToken(e){}restRequest_(e,t={},n){return t["format"]="export",Promise.all([this.authTokenProvider_.getToken(!1),this.appCheckTokenProvider_.getToken(!1)]).then(([i,s])=>{i&&i.accessToken&&(t["auth"]=i.accessToken),s&&s.token&&(t["ac"]=s.token);const o=(this.repoInfo_.secure?"https://":"http://")+this.repoInfo_.host+e+"?ns="+this.repoInfo_.namespace+Object(r["F"])(t);this.log_("Sending REST request for "+o);const a=new XMLHttpRequest;a.onreadystatechange=()=>{if(n&&4===a.readyState){this.log_("REST Response for "+o+" received. status:",a.status,"response:",a.responseText);let t=null;if(a.status>=200&&a.status<300){try{t=Object(r["C"])(a.responseText)}catch(e){x("Failed to parse JSON response for "+o+": "+a.responseText)}n(null,t)}else 401!==a.status&&404!==a.status&&x("Got unsuccessful REST response for "+o+" Status: "+a.status),n(a.status);n=null}},a.open("GET",o,!0),a.send()})}}
/**
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
 */class Ln{constructor(){this.rootNode_=_n.EMPTY_NODE}getNode(e){return this.rootNode_.getChild(e)}updateSnapshot(e,t){this.rootNode_=this.rootNode_.updateChild(e,t)}}
/**
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
 */function An(){return{value:null,children:new Map}}function qn(e,t,n){if(vt(t))e.value=n,e.children.clear();else if(null!==e.value)e.value=e.value.updateChild(t,n);else{const i=ht(t);e.children.has(i)||e.children.set(i,An());const s=e.children.get(i);t=dt(t),qn(s,t,n)}}function Un(e,t,n){null!==e.value?n(t,e.value):Wn(e,(e,i)=>{const s=new ct(t.toString()+"/"+e);Un(i,s,n)})}function Wn(e,t){e.children.forEach((e,n)=>{t(n,e)})}
/**
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
 */class Hn{constructor(e){this.collection_=e,this.last_=null}get(){const e=this.collection_.get(),t=Object.assign({},e);return this.last_&&A(this.last_,(e,n)=>{t[e]=t[e]-n}),this.last_=e,t}}
/**
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
 */const Vn=1e4,zn=3e4,Kn=3e5;class $n{constructor(e,t){this.server_=t,this.statsToReport_={},this.statsListener_=new Hn(e);const n=Vn+(zn-Vn)*Math.random();B(this.reportStats_.bind(this),Math.floor(n))}reportStats_(){const e=this.statsListener_.get(),t={};let n=!1;A(e,(e,i)=>{i>0&&Object(r["k"])(this.statsToReport_,e)&&(t[e]=i,n=!0)}),n&&this.server_.reportStats(t),B(this.reportStats_.bind(this),Math.floor(2*Math.random()*Kn))}}
/**
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
 */var Yn;function Bn(){return{fromUser:!0,fromServer:!1,queryId:null,tagged:!1}}function Gn(){return{fromUser:!1,fromServer:!0,queryId:null,tagged:!1}}function Qn(e){return{fromUser:!1,fromServer:!0,queryId:e,tagged:!0}}
/**
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
 */(function(e){e[e["OVERWRITE"]=0]="OVERWRITE",e[e["MERGE"]=1]="MERGE",e[e["ACK_USER_WRITE"]=2]="ACK_USER_WRITE",e[e["LISTEN_COMPLETE"]=3]="LISTEN_COMPLETE"})(Yn||(Yn={}));class Jn{constructor(e,t,n){this.path=e,this.affectedTree=t,this.revert=n,this.type=Yn.ACK_USER_WRITE,this.source=Bn()}operationForChild(e){if(vt(this.path)){if(null!=this.affectedTree.value)return Object(r["e"])(this.affectedTree.children.isEmpty(),"affectedTree should not have overlapping affected paths."),this;{const t=this.affectedTree.subtree(new ct(e));return new Jn(lt(),t,this.revert)}}return Object(r["e"])(ht(this.path)===e,"operationForChild called for unrelated child."),new Jn(dt(this.path),this.affectedTree,this.revert)}}
/**
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
 */
/**
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
 */
class Xn{constructor(e,t,n){this.source=e,this.path=t,this.snap=n,this.type=Yn.OVERWRITE}operationForChild(e){return vt(this.path)?new Xn(this.source,lt(),this.snap.getImmediateChild(e)):new Xn(this.source,dt(this.path),this.snap)}}
/**
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
 */class Zn{constructor(e,t,n){this.source=e,this.path=t,this.children=n,this.type=Yn.MERGE}operationForChild(e){if(vt(this.path)){const t=this.children.subtree(new ct(e));return t.isEmpty()?null:t.value?new Xn(this.source,lt(),t.value):new Zn(this.source,lt(),t)}return Object(r["e"])(ht(this.path)===e,"Can't get a merge for a child not on the path of the operation"),new Zn(this.source,dt(this.path),this.children)}toString(){return"Operation("+this.path+": "+this.source.toString()+" merge: "+this.children.toString()+")"}}
/**
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
 */class ei{constructor(e,t,n){this.node_=e,this.fullyInitialized_=t,this.filtered_=n}isFullyInitialized(){return this.fullyInitialized_}isFiltered(){return this.filtered_}isCompleteForPath(e){if(vt(e))return this.isFullyInitialized()&&!this.filtered_;const t=ht(e);return this.isCompleteForChild(t)}isCompleteForChild(e){return this.isFullyInitialized()&&!this.filtered_||this.node_.hasChild(e)}getNode(){return this.node_}}
/**
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
 */class ti{constructor(e){this.query_=e,this.index_=this.query_._queryParams.getIndex()}}function ni(e,t,n,i){const s=[],r=[];return t.forEach(t=>{"child_changed"===t.type&&e.index_.indexedValueChanged(t.oldSnap,t.snapshotNode)&&r.push(Sn(t.childName,t.snapshotNode))}),ii(e,s,"child_removed",t,i,n),ii(e,s,"child_added",t,i,n),ii(e,s,"child_moved",r,i,n),ii(e,s,"child_changed",t,i,n),ii(e,s,"value",t,i,n),s}function ii(e,t,n,i,s,r){const o=i.filter(e=>e.type===n);o.sort((t,n)=>ri(e,t,n)),o.forEach(n=>{const i=si(e,n,r);s.forEach(s=>{s.respondsTo(n.type)&&t.push(s.createEvent(i,e.query_))})})}function si(e,t,n){return"value"===t.type||"child_removed"===t.type||(t.prevName=n.getPredecessorChildName(t.childName,t.snapshotNode,e.index_)),t}function ri(e,t,n){if(null==t.childName||null==n.childName)throw Object(r["f"])("Should only compare child_ events.");const i=new At(t.childName,t.snapshotNode),s=new At(n.childName,n.snapshotNode);return e.index_.compare(i,s)}
/**
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
 */function oi(e,t){return{eventCache:e,serverCache:t}}function ai(e,t,n,i){return oi(new ei(t,n,i),e.serverCache)}function ci(e,t,n,i){return oi(e.eventCache,new ei(t,n,i))}function li(e){return e.eventCache.isFullyInitialized()?e.eventCache.getNode():null}function hi(e){return e.serverCache.isFullyInitialized()?e.serverCache.getNode():null}
/**
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
 */let ui;const di=()=>(ui||(ui=new $t(D)),ui);class pi{constructor(e,t=di()){this.value=e,this.children=t}static fromObject(e){let t=new pi(null);return A(e,(e,n)=>{t=t.set(new ct(e),n)}),t}isEmpty(){return null===this.value&&this.children.isEmpty()}findRootMostMatchingPathAndValue(e,t){if(null!=this.value&&t(this.value))return{path:lt(),value:this.value};if(vt(e))return null;{const n=ht(e),i=this.children.get(n);if(null!==i){const s=i.findRootMostMatchingPathAndValue(dt(e),t);if(null!=s){const e=gt(new ct(n),s.path);return{path:e,value:s.value}}return null}return null}}findRootMostValueAndPath(e){return this.findRootMostMatchingPathAndValue(e,()=>!0)}subtree(e){if(vt(e))return this;{const t=ht(e),n=this.children.get(t);return null!==n?n.subtree(dt(e)):new pi(null)}}set(e,t){if(vt(e))return new pi(t,this.children);{const n=ht(e),i=this.children.get(n)||new pi(null),s=i.set(dt(e),t),r=this.children.insert(n,s);return new pi(this.value,r)}}remove(e){if(vt(e))return this.children.isEmpty()?new pi(null):new pi(null,this.children);{const t=ht(e),n=this.children.get(t);if(n){const i=n.remove(dt(e));let s;return s=i.isEmpty()?this.children.remove(t):this.children.insert(t,i),null===this.value&&s.isEmpty()?new pi(null):new pi(this.value,s)}return this}}get(e){if(vt(e))return this.value;{const t=ht(e),n=this.children.get(t);return n?n.get(dt(e)):null}}setTree(e,t){if(vt(e))return t;{const n=ht(e),i=this.children.get(n)||new pi(null),s=i.setTree(dt(e),t);let r;return r=s.isEmpty()?this.children.remove(n):this.children.insert(n,s),new pi(this.value,r)}}fold(e){return this.fold_(lt(),e)}fold_(e,t){const n={};return this.children.inorderTraversal((i,s)=>{n[i]=s.fold_(gt(e,i),t)}),t(e,this.value,n)}findOnPath(e,t){return this.findOnPath_(e,lt(),t)}findOnPath_(e,t,n){const i=!!this.value&&n(t,this.value);if(i)return i;if(vt(e))return null;{const i=ht(e),s=this.children.get(i);return s?s.findOnPath_(dt(e),gt(t,i),n):null}}foreachOnPath(e,t){return this.foreachOnPath_(e,lt(),t)}foreachOnPath_(e,t,n){if(vt(e))return this;{this.value&&n(t,this.value);const i=ht(e),s=this.children.get(i);return s?s.foreachOnPath_(dt(e),gt(t,i),n):new pi(null)}}foreach(e){this.foreach_(lt(),e)}foreach_(e,t){this.children.inorderTraversal((n,i)=>{i.foreach_(gt(e,n),t)}),this.value&&t(e,this.value)}foreachChild(e){this.children.inorderTraversal((t,n)=>{n.value&&e(t,n.value)})}}
/**
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
 */class fi{constructor(e){this.writeTree_=e}static empty(){return new fi(new pi(null))}}function _i(e,t,n){if(vt(t))return new fi(new pi(n));{const i=e.writeTree_.findRootMostValueAndPath(t);if(null!=i){const s=i.path;let r=i.value;const o=yt(s,t);return r=r.updateChild(o,n),new fi(e.writeTree_.set(s,r))}{const i=new pi(n),s=e.writeTree_.setTree(t,i);return new fi(s)}}}function mi(e,t,n){let i=e;return A(n,(e,n)=>{i=_i(i,gt(t,e),n)}),i}function gi(e,t){if(vt(t))return fi.empty();{const n=e.writeTree_.setTree(t,new pi(null));return new fi(n)}}function vi(e,t){return null!=yi(e,t)}function yi(e,t){const n=e.writeTree_.findRootMostValueAndPath(t);return null!=n?e.writeTree_.get(n.path).getChild(yt(n.path,t)):null}function bi(e){const t=[],n=e.writeTree_.value;return null!=n?n.isLeafNode()||n.forEachChild(an,(e,n)=>{t.push(new At(e,n))}):e.writeTree_.children.inorderTraversal((e,n)=>{null!=n.value&&t.push(new At(e,n.value))}),t}function wi(e,t){if(vt(t))return e;{const n=yi(e,t);return new fi(null!=n?new pi(n):e.writeTree_.subtree(t))}}function Ci(e){return e.writeTree_.isEmpty()}function Ii(e,t){return Ti(lt(),e.writeTree_,t)}function Ti(e,t,n){if(null!=t.value)return n.updateChild(e,t.value);{let i=null;return t.children.inorderTraversal((t,s)=>{".priority"===t?(Object(r["e"])(null!==s.value,"Priority writes must always be leaf nodes"),i=s.value):n=Ti(gt(e,t),s,n)}),n.getChild(e).isEmpty()||null===i||(n=n.updateChild(gt(e,".priority"),i)),n}}
/**
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
 */function ki(e,t){return Bi(t,e)}function Ei(e,t,n,i,s){Object(r["e"])(i>e.lastWriteId,"Stacking an older write on top of newer ones"),void 0===s&&(s=!0),e.allWrites.push({path:t,snap:n,writeId:i,visible:s}),s&&(e.visibleWrites=_i(e.visibleWrites,t,n)),e.lastWriteId=i}function xi(e,t,n,i){Object(r["e"])(i>e.lastWriteId,"Stacking an older merge on top of newer ones"),e.allWrites.push({path:t,children:n,writeId:i,visible:!0}),e.visibleWrites=mi(e.visibleWrites,t,n),e.lastWriteId=i}function Si(e,t){for(let n=0;n<e.allWrites.length;n++){const i=e.allWrites[n];if(i.writeId===t)return i}return null}function Oi(e,t){const n=e.allWrites.findIndex(e=>e.writeId===t);Object(r["e"])(n>=0,"removeWrite called with nonexistent writeId.");const i=e.allWrites[n];e.allWrites.splice(n,1);let s=i.visible,o=!1,a=e.allWrites.length-1;while(s&&a>=0){const t=e.allWrites[a];t.visible&&(a>=n&&Ni(t,i.path)?s=!1:Ct(i.path,t.path)&&(o=!0)),a--}if(s){if(o)return Pi(e),!0;if(i.snap)e.visibleWrites=gi(e.visibleWrites,i.path);else{const t=i.children;A(t,t=>{e.visibleWrites=gi(e.visibleWrites,gt(i.path,t))})}return!0}return!1}function Ni(e,t){if(e.snap)return Ct(e.path,t);for(const n in e.children)if(e.children.hasOwnProperty(n)&&Ct(gt(e.path,n),t))return!0;return!1}function Pi(e){e.visibleWrites=ji(e.allWrites,Ri,lt()),e.allWrites.length>0?e.lastWriteId=e.allWrites[e.allWrites.length-1].writeId:e.lastWriteId=-1}function Ri(e){return e.visible}function ji(e,t,n){let i=fi.empty();for(let s=0;s<e.length;++s){const o=e[s];if(t(o)){const e=o.path;let t;if(o.snap)Ct(n,e)?(t=yt(n,e),i=_i(i,t,o.snap)):Ct(e,n)&&(t=yt(e,n),i=_i(i,lt(),o.snap.getChild(t)));else{if(!o.children)throw Object(r["f"])("WriteRecord should have .snap or .children");if(Ct(n,e))t=yt(n,e),i=mi(i,t,o.children);else if(Ct(e,n))if(t=yt(e,n),vt(t))i=mi(i,lt(),o.children);else{const e=Object(r["H"])(o.children,ht(t));if(e){const n=e.getChild(dt(t));i=_i(i,lt(),n)}}}}}return i}function Di(e,t,n,i,s){if(i||s){const r=wi(e.visibleWrites,t);if(!s&&Ci(r))return n;if(s||null!=n||vi(r,lt())){const r=function(e){return(e.visible||s)&&(!i||!~i.indexOf(e.writeId))&&(Ct(e.path,t)||Ct(t,e.path))},o=ji(e.allWrites,r,t),a=n||_n.EMPTY_NODE;return Ii(o,a)}return null}{const i=yi(e.visibleWrites,t);if(null!=i)return i;{const i=wi(e.visibleWrites,t);if(Ci(i))return n;if(null!=n||vi(i,lt())){const e=n||_n.EMPTY_NODE;return Ii(i,e)}return null}}}function Fi(e,t,n){let i=_n.EMPTY_NODE;const s=yi(e.visibleWrites,t);if(s)return s.isLeafNode()||s.forEachChild(an,(e,t)=>{i=i.updateImmediateChild(e,t)}),i;if(n){const s=wi(e.visibleWrites,t);return n.forEachChild(an,(e,t)=>{const n=Ii(wi(s,new ct(e)),t);i=i.updateImmediateChild(e,n)}),bi(s).forEach(e=>{i=i.updateImmediateChild(e.name,e.node)}),i}{const n=wi(e.visibleWrites,t);return bi(n).forEach(e=>{i=i.updateImmediateChild(e.name,e.node)}),i}}function Mi(e,t,n,i,s){Object(r["e"])(i||s,"Either existingEventSnap or existingServerSnap must exist");const o=gt(t,n);if(vi(e.visibleWrites,o))return null;{const t=wi(e.visibleWrites,o);return Ci(t)?s.getChild(n):Ii(t,s.getChild(n))}}function Li(e,t,n,i){const s=gt(t,n),r=yi(e.visibleWrites,s);if(null!=r)return r;if(i.isCompleteForChild(n)){const t=wi(e.visibleWrites,s);return Ii(t,i.getNode().getImmediateChild(n))}return null}function Ai(e,t){return yi(e.visibleWrites,t)}function qi(e,t,n,i,s,r,o){let a;const c=wi(e.visibleWrites,t),l=yi(c,lt());if(null!=l)a=l;else{if(null==n)return[];a=Ii(c,n)}if(a=a.withIndex(o),a.isEmpty()||a.isLeafNode())return[];{const e=[],t=o.getCompare(),n=r?a.getReverseIteratorFrom(i,o):a.getIteratorFrom(i,o);let c=n.getNext();while(c&&e.length<s)0!==t(c,i)&&e.push(c),c=n.getNext();return e}}function Ui(){return{visibleWrites:fi.empty(),allWrites:[],lastWriteId:-1}}function Wi(e,t,n,i){return Di(e.writeTree,e.treePath,t,n,i)}function Hi(e,t){return Fi(e.writeTree,e.treePath,t)}function Vi(e,t,n,i){return Mi(e.writeTree,e.treePath,t,n,i)}function zi(e,t){return Ai(e.writeTree,gt(e.treePath,t))}function Ki(e,t,n,i,s,r){return qi(e.writeTree,e.treePath,t,n,i,s,r)}function $i(e,t,n){return Li(e.writeTree,e.treePath,t,n)}function Yi(e,t){return Bi(gt(e.treePath,t),e.writeTree)}function Bi(e,t){return{treePath:e,writeTree:t}}
/**
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
 */class Gi{constructor(){this.changeMap=new Map}trackChildChange(e){const t=e.type,n=e.childName;Object(r["e"])("child_added"===t||"child_changed"===t||"child_removed"===t,"Only child changes supported for tracking"),Object(r["e"])(".priority"!==n,"Only non-priority child changes can be tracked.");const i=this.changeMap.get(n);if(i){const s=i.type;if("child_added"===t&&"child_removed"===s)this.changeMap.set(n,xn(n,e.snapshotNode,i.snapshotNode));else if("child_removed"===t&&"child_added"===s)this.changeMap.delete(n);else if("child_removed"===t&&"child_changed"===s)this.changeMap.set(n,En(n,i.oldSnap));else if("child_changed"===t&&"child_added"===s)this.changeMap.set(n,kn(n,e.snapshotNode));else{if("child_changed"!==t||"child_changed"!==s)throw Object(r["f"])("Illegal combination of changes: "+e+" occurred after "+i);this.changeMap.set(n,xn(n,e.snapshotNode,i.oldSnap))}}else this.changeMap.set(n,e)}getChanges(){return Array.from(this.changeMap.values())}}
/**
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
 */class Qi{getCompleteChild(e){return null}getChildAfterChild(e,t,n){return null}}const Ji=new Qi;class Xi{constructor(e,t,n=null){this.writes_=e,this.viewCache_=t,this.optCompleteServerCache_=n}getCompleteChild(e){const t=this.viewCache_.eventCache;if(t.isCompleteForChild(e))return t.getNode().getImmediateChild(e);{const t=null!=this.optCompleteServerCache_?new ei(this.optCompleteServerCache_,!0,!1):this.viewCache_.serverCache;return $i(this.writes_,e,t)}}getChildAfterChild(e,t,n){const i=null!=this.optCompleteServerCache_?this.optCompleteServerCache_:hi(this.viewCache_),s=Ki(this.writes_,i,t,1,n,e);return 0===s.length?null:s[0]}}
/**
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
 */function Zi(e){return{filter:e}}function es(e,t){Object(r["e"])(t.eventCache.getNode().isIndexed(e.filter.getIndex()),"Event snap not indexed"),Object(r["e"])(t.serverCache.getNode().isIndexed(e.filter.getIndex()),"Server snap not indexed")}function ts(e,t,n,i,s){const o=new Gi;let a,c;if(n.type===Yn.OVERWRITE){const l=n;l.source.fromUser?a=rs(e,t,l.path,l.snap,i,s,o):(Object(r["e"])(l.source.fromServer,"Unknown source."),c=l.source.tagged||t.serverCache.isFiltered()&&!vt(l.path),a=ss(e,t,l.path,l.snap,i,s,c,o))}else if(n.type===Yn.MERGE){const l=n;l.source.fromUser?a=as(e,t,l.path,l.children,i,s,o):(Object(r["e"])(l.source.fromServer,"Unknown source."),c=l.source.tagged||t.serverCache.isFiltered(),a=ls(e,t,l.path,l.children,i,s,c,o))}else if(n.type===Yn.ACK_USER_WRITE){const r=n;a=r.revert?ds(e,t,r.path,i,s,o):hs(e,t,r.path,r.affectedTree,i,s,o)}else{if(n.type!==Yn.LISTEN_COMPLETE)throw Object(r["f"])("Unknown operation type: "+n.type);a=us(e,t,n.path,i,o)}const l=o.getChanges();return ns(t,a,l),{viewCache:a,changes:l}}function ns(e,t,n){const i=t.eventCache;if(i.isFullyInitialized()){const s=i.getNode().isLeafNode()||i.getNode().isEmpty(),r=li(e);(n.length>0||!e.eventCache.isFullyInitialized()||s&&!i.getNode().equals(r)||!i.getNode().getPriority().equals(r.getPriority()))&&n.push(Tn(li(t)))}}function is(e,t,n,i,s,o){const a=t.eventCache;if(null!=zi(i,n))return t;{let c,l;if(vt(n))if(Object(r["e"])(t.serverCache.isFullyInitialized(),"If change path is empty, we must have complete server data"),t.serverCache.isFiltered()){const n=hi(t),s=n instanceof _n?n:_n.EMPTY_NODE,r=Hi(i,s);c=e.filter.updateFullNode(t.eventCache.getNode(),r,o)}else{const n=Wi(i,hi(t));c=e.filter.updateFullNode(t.eventCache.getNode(),n,o)}else{const h=ht(n);if(".priority"===h){Object(r["e"])(1===ut(n),"Can't have a priority with additional path components");const s=a.getNode();l=t.serverCache.getNode();const o=Vi(i,n,s,l);c=null!=o?e.filter.updatePriority(s,o):a.getNode()}else{const r=dt(n);let u;if(a.isCompleteForChild(h)){l=t.serverCache.getNode();const e=Vi(i,n,a.getNode(),l);u=null!=e?a.getNode().getImmediateChild(h).updateChild(r,e):a.getNode().getImmediateChild(h)}else u=$i(i,h,t.serverCache);c=null!=u?e.filter.updateChild(a.getNode(),h,u,r,s,o):a.getNode()}}return ai(t,c,a.isFullyInitialized()||vt(n),e.filter.filtersNodes())}}function ss(e,t,n,i,s,r,o,a){const c=t.serverCache;let l;const h=o?e.filter:e.filter.getIndexedFilter();if(vt(n))l=h.updateFullNode(c.getNode(),i,null);else if(h.filtersNodes()&&!c.isFiltered()){const e=c.getNode().updateChild(n,i);l=h.updateFullNode(c.getNode(),e,null)}else{const e=ht(n);if(!c.isCompleteForPath(n)&&ut(n)>1)return t;const s=dt(n),r=c.getNode().getImmediateChild(e),o=r.updateChild(s,i);l=".priority"===e?h.updatePriority(c.getNode(),o):h.updateChild(c.getNode(),e,o,s,Ji,null)}const u=ci(t,l,c.isFullyInitialized()||vt(n),h.filtersNodes()),d=new Xi(s,u,r);return is(e,u,n,s,d,a)}function rs(e,t,n,i,s,r,o){const a=t.eventCache;let c,l;const h=new Xi(s,t,r);if(vt(n))l=e.filter.updateFullNode(t.eventCache.getNode(),i,o),c=ai(t,l,!0,e.filter.filtersNodes());else{const s=ht(n);if(".priority"===s)l=e.filter.updatePriority(t.eventCache.getNode(),i),c=ai(t,l,a.isFullyInitialized(),a.isFiltered());else{const r=dt(n),l=a.getNode().getImmediateChild(s);let u;if(vt(r))u=i;else{const e=h.getCompleteChild(s);u=null!=e?".priority"===pt(r)&&e.getChild(mt(r)).isEmpty()?e:e.updateChild(r,i):_n.EMPTY_NODE}if(l.equals(u))c=t;else{const n=e.filter.updateChild(a.getNode(),s,u,r,h,o);c=ai(t,n,a.isFullyInitialized(),e.filter.filtersNodes())}}}return c}function os(e,t){return e.eventCache.isCompleteForChild(t)}function as(e,t,n,i,s,r,o){let a=t;return i.foreach((i,c)=>{const l=gt(n,i);os(t,ht(l))&&(a=rs(e,a,l,c,s,r,o))}),i.foreach((i,c)=>{const l=gt(n,i);os(t,ht(l))||(a=rs(e,a,l,c,s,r,o))}),a}function cs(e,t,n){return n.foreach((e,n)=>{t=t.updateChild(e,n)}),t}function ls(e,t,n,i,s,r,o,a){if(t.serverCache.getNode().isEmpty()&&!t.serverCache.isFullyInitialized())return t;let c,l=t;c=vt(n)?i:new pi(null).setTree(n,i);const h=t.serverCache.getNode();return c.children.inorderTraversal((n,i)=>{if(h.hasChild(n)){const c=t.serverCache.getNode().getImmediateChild(n),h=cs(e,c,i);l=ss(e,l,new ct(n),h,s,r,o,a)}}),c.children.inorderTraversal((n,i)=>{const c=!t.serverCache.isCompleteForChild(n)&&void 0===i.value;if(!h.hasChild(n)&&!c){const c=t.serverCache.getNode().getImmediateChild(n),h=cs(e,c,i);l=ss(e,l,new ct(n),h,s,r,o,a)}}),l}function hs(e,t,n,i,s,r,o){if(null!=zi(s,n))return t;const a=t.serverCache.isFiltered(),c=t.serverCache;if(null!=i.value){if(vt(n)&&c.isFullyInitialized()||c.isCompleteForPath(n))return ss(e,t,n,c.getNode().getChild(n),s,r,a,o);if(vt(n)){let i=new pi(null);return c.getNode().forEachChild(Ht,(e,t)=>{i=i.set(new ct(e),t)}),ls(e,t,n,i,s,r,a,o)}return t}{let l=new pi(null);return i.foreach((e,t)=>{const i=gt(n,e);c.isCompleteForPath(i)&&(l=l.set(e,c.getNode().getChild(i)))}),ls(e,t,n,l,s,r,a,o)}}function us(e,t,n,i,s){const r=t.serverCache,o=ci(t,r.getNode(),r.isFullyInitialized()||vt(n),r.isFiltered());return is(e,o,n,i,Ji,s)}function ds(e,t,n,i,s,o){let a;if(null!=zi(i,n))return t;{const c=new Xi(i,t,s),l=t.eventCache.getNode();let h;if(vt(n)||".priority"===ht(n)){let n;if(t.serverCache.isFullyInitialized())n=Wi(i,hi(t));else{const e=t.serverCache.getNode();Object(r["e"])(e instanceof _n,"serverChildren would be complete if leaf node"),n=Hi(i,e)}n=n,h=e.filter.updateFullNode(l,n,o)}else{const s=ht(n);let r=$i(i,s,t.serverCache);null==r&&t.serverCache.isCompleteForChild(s)&&(r=l.getImmediateChild(s)),h=null!=r?e.filter.updateChild(l,s,r,dt(n),c,o):t.eventCache.getNode().hasChild(s)?e.filter.updateChild(l,s,_n.EMPTY_NODE,dt(n),c,o):l,h.isEmpty()&&t.serverCache.isFullyInitialized()&&(a=Wi(i,hi(t)),a.isLeafNode()&&(h=e.filter.updateFullNode(h,a,o)))}return a=t.serverCache.isFullyInitialized()||null!=zi(i,lt()),ai(t,h,a,e.filter.filtersNodes())}}
/**
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
 */class ps{constructor(e,t){this.query_=e,this.eventRegistrations_=[];const n=this.query_._queryParams,i=new On(n.getIndex()),s=jn(n);this.processor_=Zi(s);const r=t.serverCache,o=t.eventCache,a=i.updateFullNode(_n.EMPTY_NODE,r.getNode(),null),c=s.updateFullNode(_n.EMPTY_NODE,o.getNode(),null),l=new ei(a,r.isFullyInitialized(),i.filtersNodes()),h=new ei(c,o.isFullyInitialized(),s.filtersNodes());this.viewCache_=oi(h,l),this.eventGenerator_=new ti(this.query_)}get query(){return this.query_}}function fs(e){return li(e.viewCache_)}function _s(e,t){const n=hi(e.viewCache_);return n&&(e.query._queryParams.loadsAllData()||!vt(t)&&!n.getImmediateChild(ht(t)).isEmpty())?n.getChild(t):null}function ms(e,t,n,i){t.type===Yn.MERGE&&null!==t.source.queryId&&(Object(r["e"])(hi(e.viewCache_),"We should always have a full cache before handling merges"),Object(r["e"])(li(e.viewCache_),"Missing event cache, even though we have a server cache"));const s=e.viewCache_,o=ts(e.processor_,s,t,n,i);return es(e.processor_,o.viewCache),Object(r["e"])(o.viewCache.serverCache.isFullyInitialized()||!s.serverCache.isFullyInitialized(),"Once a server snap is complete, it should never go back"),e.viewCache_=o.viewCache,gs(e,o.changes,o.viewCache.eventCache.getNode(),null)}function gs(e,t,n,i){const s=i?[i]:e.eventRegistrations_;return ni(e.eventGenerator_,t,n,s)}
/**
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
 */let vs,ys;class bs{constructor(){this.views=new Map}}function ws(e){Object(r["e"])(!vs,"__referenceConstructor has already been defined"),vs=e}function Cs(e,t,n,i){const s=t.source.queryId;if(null!==s){const o=e.views.get(s);return Object(r["e"])(null!=o,"SyncTree gave us an op for an invalid query."),ms(o,t,n,i)}{let s=[];for(const r of e.views.values())s=s.concat(ms(r,t,n,i));return s}}function Is(e,t,n,i,s){const r=t._queryIdentifier,o=e.views.get(r);if(!o){let e=Wi(n,s?i:null),r=!1;e?r=!0:i instanceof _n?(e=Hi(n,i),r=!1):(e=_n.EMPTY_NODE,r=!1);const o=oi(new ei(e,r,!1),new ei(i,s,!1));return new ps(t,o)}return o}function Ts(e,t){let n=null;for(const i of e.views.values())n=n||_s(i,t);return n}function ks(e){Object(r["e"])(!ys,"__referenceConstructor has already been defined"),ys=e}class Es{constructor(e){this.listenProvider_=e,this.syncPointTree_=new pi(null),this.pendingWriteTree_=Ui(),this.tagToQueryMap=new Map,this.queryToTagMap=new Map}}function xs(e,t,n,i,s){return Ei(e.pendingWriteTree_,t,n,i,s),s?Ms(e,new Xn(Bn(),t,n)):[]}function Ss(e,t,n,i){xi(e.pendingWriteTree_,t,n,i);const s=pi.fromObject(n);return Ms(e,new Zn(Bn(),t,s))}function Os(e,t,n=!1){const i=Si(e.pendingWriteTree_,t),s=Oi(e.pendingWriteTree_,t);if(s){let t=new pi(null);return null!=i.snap?t=t.set(lt(),!0):A(i.children,e=>{t=t.set(new ct(e),!0)}),Ms(e,new Jn(i.path,t,n))}return[]}function Ns(e,t,n){return Ms(e,new Xn(Gn(),t,n))}function Ps(e,t,n){const i=pi.fromObject(n);return Ms(e,new Zn(Gn(),t,i))}function Rs(e,t,n,i){const s=qs(e,i);if(null!=s){const i=Us(s),r=i.path,o=i.queryId,a=yt(r,t),c=new Xn(Qn(o),a,n);return Ws(e,r,c)}return[]}function js(e,t,n,i){const s=qs(e,i);if(s){const i=Us(s),r=i.path,o=i.queryId,a=yt(r,t),c=pi.fromObject(n),l=new Zn(Qn(o),a,c);return Ws(e,r,l)}return[]}function Ds(e,t,n){const i=!0,s=e.pendingWriteTree_,r=e.syncPointTree_.findOnPath(t,(e,n)=>{const i=yt(e,t),s=Ts(n,i);if(s)return s});return Di(s,t,r,n,i)}function Fs(e,t){const n=t._path;let i=null;e.syncPointTree_.foreachOnPath(n,(e,t)=>{const s=yt(e,n);i=i||Ts(t,s)});let s=e.syncPointTree_.get(n);s?i=i||Ts(s,lt()):(s=new bs,e.syncPointTree_=e.syncPointTree_.set(n,s));const r=null!=i,o=r?new ei(i,!0,!1):null,a=ki(e.pendingWriteTree_,t._path),c=Is(s,t,a,r?o.getNode():_n.EMPTY_NODE,r);return fs(c)}function Ms(e,t){return Ls(t,e.syncPointTree_,null,ki(e.pendingWriteTree_,lt()))}function Ls(e,t,n,i){if(vt(e.path))return As(e,t,n,i);{const s=t.get(lt());null==n&&null!=s&&(n=Ts(s,lt()));let r=[];const o=ht(e.path),a=e.operationForChild(o),c=t.children.get(o);if(c&&a){const e=n?n.getImmediateChild(o):null,t=Yi(i,o);r=r.concat(Ls(a,c,e,t))}return s&&(r=r.concat(Cs(s,e,i,n))),r}}function As(e,t,n,i){const s=t.get(lt());null==n&&null!=s&&(n=Ts(s,lt()));let r=[];return t.children.inorderTraversal((t,s)=>{const o=n?n.getImmediateChild(t):null,a=Yi(i,t),c=e.operationForChild(t);c&&(r=r.concat(As(c,s,o,a)))}),s&&(r=r.concat(Cs(s,e,i,n))),r}function qs(e,t){return e.tagToQueryMap.get(t)}function Us(e){const t=e.indexOf("$");return Object(r["e"])(-1!==t&&t<e.length-1,"Bad queryKey."),{queryId:e.substr(t+1),path:new ct(e.substr(0,t))}}function Ws(e,t,n){const i=e.syncPointTree_.get(t);Object(r["e"])(i,"Missing sync point for query tag that we're tracking");const s=ki(e.pendingWriteTree_,t);return Cs(i,n,s,null)}
/**
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
 */
class Hs{constructor(e){this.node_=e}getImmediateChild(e){const t=this.node_.getImmediateChild(e);return new Hs(t)}node(){return this.node_}}class Vs{constructor(e,t){this.syncTree_=e,this.path_=t}getImmediateChild(e){const t=gt(this.path_,e);return new Vs(this.syncTree_,t)}node(){return Ds(this.syncTree_,this.path_)}}const zs=function(e){return e=e||{},e["timestamp"]=e["timestamp"]||(new Date).getTime(),e},Ks=function(e,t,n){return e&&"object"===typeof e?(Object(r["e"])(".sv"in e,"Unexpected leaf node or priority contents"),"string"===typeof e[".sv"]?$s(e[".sv"],t,n):"object"===typeof e[".sv"]?Ys(e[".sv"],t):void Object(r["e"])(!1,"Unexpected server value: "+JSON.stringify(e,null,2))):e},$s=function(e,t,n){switch(e){case"timestamp":return n["timestamp"];default:Object(r["e"])(!1,"Unexpected server value: "+e)}},Ys=function(e,t,n){e.hasOwnProperty("increment")||Object(r["e"])(!1,"Unexpected server value: "+JSON.stringify(e,null,2));const i=e["increment"];"number"!==typeof i&&Object(r["e"])(!1,"Unexpected increment value: "+i);const s=t.node();if(Object(r["e"])(null!==s&&"undefined"!==typeof s,"Expected ChildrenNode.EMPTY_NODE for nulls"),!s.isLeafNode())return i;const o=s,a=o.getValue();return"number"!==typeof a?i:a+i},Bs=function(e,t,n,i){return Qs(t,new Vs(n,e),i)},Gs=function(e,t,n){return Qs(e,new Hs(t),n)};function Qs(e,t,n){const i=e.getPriority().val(),s=Ks(i,t.getImmediateChild(".priority"),n);let r;if(e.isLeafNode()){const i=e,r=Ks(i.getValue(),t,n);return r!==i.getValue()||s!==i.getPriority().val()?new nn(r,yn(s)):e}{const i=e;return r=i,s!==i.getPriority().val()&&(r=r.updatePriority(new nn(s))),i.forEachChild(an,(e,i)=>{const s=Qs(i,t.getImmediateChild(e),n);s!==i&&(r=r.updateImmediateChild(e,s))}),r}}
/**
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
 */class Js{constructor(e="",t=null,n={children:{},childCount:0}){this.name=e,this.parent=t,this.node=n}}function Xs(e,t){let n=t instanceof ct?t:new ct(t),i=e,s=ht(n);while(null!==s){const e=Object(r["H"])(i.node.children,s)||{children:{},childCount:0};i=new Js(s,i,e),n=dt(n),s=ht(n)}return i}function Zs(e){return e.node.value}function er(e,t){e.node.value=t,ar(e)}function tr(e){return e.node.childCount>0}function nr(e){return void 0===Zs(e)&&!tr(e)}function ir(e,t){A(e.node.children,(n,i)=>{t(new Js(n,e,i))})}function sr(e,t,n,i){n&&!i&&t(e),ir(e,e=>{sr(e,t,!0,i)}),n&&i&&t(e)}function rr(e,t,n){let i=n?e:e.parent;while(null!==i){if(t(i))return!0;i=i.parent}return!1}function or(e){return new ct(null===e.parent?e.name:or(e.parent)+"/"+e.name)}function ar(e){null!==e.parent&&cr(e.parent,e.name,e)}function cr(e,t,n){const i=nr(n),s=Object(r["k"])(e.node.children,t);i&&s?(delete e.node.children[t],e.node.childCount--,ar(e)):i||s||(e.node.children[t]=n.node,e.node.childCount++,ar(e))}
/**
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
 */const lr=/[\[\].#$\/\u0000-\u001F\u007F]/,hr=/[\[\].#$\u0000-\u001F\u007F]/,ur=10485760,dr=function(e){return"string"===typeof e&&0!==e.length&&!lr.test(e)},pr=function(e){return"string"===typeof e&&0!==e.length&&!hr.test(e)},fr=function(e){return e&&(e=e.replace(/^\/*\.info(\/|$)/,"/")),pr(e)},_r=function(e){return null===e||"string"===typeof e||"number"===typeof e&&!O(e)||e&&"object"===typeof e&&Object(r["k"])(e,".sv")},mr=function(e,t,n,i){i&&void 0===t||gr(Object(r["p"])(e,"value"),t,n)},gr=function(e,t,n){const i=n instanceof ct?new It(n,e):n;if(void 0===t)throw new Error(e+"contains undefined "+xt(i));if("function"===typeof t)throw new Error(e+"contains a function "+xt(i)+" with contents = "+t.toString());if(O(t))throw new Error(e+"contains "+t.toString()+" "+xt(i));if("string"===typeof t&&t.length>ur/3&&Object(r["I"])(t)>ur)throw new Error(e+"contains a string greater than "+ur+" utf8 bytes "+xt(i)+" ('"+t.substring(0,50)+"...')");if(t&&"object"===typeof t){let n=!1,s=!1;if(A(t,(t,r)=>{if(".value"===t)n=!0;else if(".priority"!==t&&".sv"!==t&&(s=!0,!dr(t)))throw new Error(e+" contains an invalid key ("+t+") "+xt(i)+'.  Keys must be non-empty strings and can\'t contain ".", "#", "$", "/", "[", or "]"');Tt(i,t),gr(e,r,i),kt(i)}),n&&s)throw new Error(e+' contains ".value" child '+xt(i)+" in addition to actual children.")}},vr=function(e,t){let n,i;for(n=0;n<t.length;n++){i=t[n];const s=_t(i);for(let t=0;t<s.length;t++)if(".priority"===s[t]&&t===s.length-1);else if(!dr(s[t]))throw new Error(e+"contains an invalid key ("+s[t]+") in path "+i.toString()+'. Keys must be non-empty strings and can\'t contain ".", "#", "$", "/", "[", or "]"')}t.sort(bt);let s=null;for(n=0;n<t.length;n++){if(i=t[n],null!==s&&Ct(s,i))throw new Error(e+"contains a path "+s.toString()+" that is ancestor of another path "+i.toString());s=i}},yr=function(e,t,n,i){if(i&&void 0===t)return;const s=Object(r["p"])(e,"values");if(!t||"object"!==typeof t||Array.isArray(t))throw new Error(s+" must be an object containing the children to replace.");const o=[];A(t,(e,t)=>{const i=new ct(e);if(gr(s,t,gt(n,i)),".priority"===pt(i)&&!_r(t))throw new Error(s+"contains an invalid value for '"+i.toString()+"', which must be a valid Firebase priority (a string, finite number, server value, or null).");o.push(i)}),vr(s,o)},br=function(e,t,n,i){if((!i||void 0!==n)&&!pr(n))throw new Error(Object(r["p"])(e,t)+'was an invalid path = "'+n+'". Paths must be non-empty strings and can\'t contain ".", "#", "$", "[", or "]"')},wr=function(e,t,n,i){n&&(n=n.replace(/^\/*\.info(\/|$)/,"/")),br(e,t,n,i)},Cr=function(e,t){if(".info"===ht(t))throw new Error(e+" failed = Can't modify data under /.info/")},Ir=function(e,t){const n=t.path.toString();if("string"!==typeof t.repoInfo.host||0===t.repoInfo.host.length||!dr(t.repoInfo.namespace)&&"localhost"!==t.repoInfo.host.split(":")[0]||0!==n.length&&!fr(n))throw new Error(Object(r["p"])(e,"url")+'must be a valid firebase URL and the path can\'t contain ".", "#", "$", "[", or "]".')};
/**
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
 */
class Tr{constructor(){this.eventLists_=[],this.recursionDepth_=0}}function kr(e,t){let n=null;for(let i=0;i<t.length;i++){const s=t[i],r=s.getPath();null===n||wt(r,n.path)||(e.eventLists_.push(n),n=null),null===n&&(n={events:[],path:r}),n.events.push(s)}n&&e.eventLists_.push(n)}function Er(e,t,n){kr(e,n),Sr(e,e=>wt(e,t))}function xr(e,t,n){kr(e,n),Sr(e,e=>Ct(e,t)||Ct(t,e))}function Sr(e,t){e.recursionDepth_++;let n=!0;for(let i=0;i<e.eventLists_.length;i++){const s=e.eventLists_[i];if(s){const r=s.path;t(r)?(Or(e.eventLists_[i]),e.eventLists_[i]=null):n=!1}}n&&(e.eventLists_=[]),e.recursionDepth_--}function Or(e){for(let t=0;t<e.events.length;t++){const n=e.events[t];if(null!==n){e.events[t]=null;const i=n.getEventRunner();b&&I("event: "+n.toString()),$(i)}}}
/**
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
 */const Nr="repo_interrupt",Pr=25;class Rr{constructor(e,t,n,i){this.repoInfo_=e,this.forceRestClient_=t,this.authTokenProvider_=n,this.appCheckProvider_=i,this.dataUpdateCount=0,this.statsListener_=null,this.eventQueue_=new Tr,this.nextWriteId_=1,this.interceptServerDataCallback_=null,this.onDisconnect_=An(),this.transactionQueueTree_=new Js,this.persistentConnection_=null,this.key=this.repoInfo_.toURLString()}toString(){return(this.repoInfo_.secure?"https://":"http://")+this.repoInfo_.host}}function jr(e,t,n){if(e.stats_=_e(e.repoInfo_),e.forceRestClient_||Y())e.server_=new Mn(e.repoInfo_,(t,n,i,s)=>{Mr(e,t,n,i,s)},e.authTokenProvider_,e.appCheckProvider_),setTimeout(()=>Lr(e,!0),0);else{if("undefined"!==typeof n&&null!==n){if("object"!==typeof n)throw new Error("Only objects are supported for option databaseAuthVariableOverride");try{Object(r["K"])(n)}catch(i){throw new Error("Invalid authOverride provided: "+i)}}e.persistentConnection_=new Lt(e.repoInfo_,t,(t,n,i,s)=>{Mr(e,t,n,i,s)},t=>{Lr(e,t)},t=>{Ar(e,t)},e.authTokenProvider_,e.appCheckProvider_,n),e.server_=e.persistentConnection_}e.authTokenProvider_.addTokenChangeListener(t=>{e.server_.refreshAuthToken(t)}),e.appCheckProvider_.addTokenChangeListener(t=>{e.server_.refreshAppCheckToken(t.token)}),e.statsReporter_=me(e.repoInfo_,()=>new $n(e.stats_,e.server_)),e.infoData_=new Ln,e.infoSyncTree_=new Es({startListening:(t,n,i,s)=>{let r=[];const o=e.infoData_.getNode(t._path);return o.isEmpty()||(r=Ns(e.infoSyncTree_,t._path,o),setTimeout(()=>{s("ok")},0)),r},stopListening:()=>{}}),qr(e,"connected",!1),e.serverSyncTree_=new Es({startListening:(t,n,i,s)=>(e.server_.listen(t,i,n,(n,i)=>{const r=s(n,i);xr(e.eventQueue_,t._path,r)}),[]),stopListening:(t,n)=>{e.server_.unlisten(t,n)}})}function Dr(e){const t=e.infoData_.getNode(new ct(".info/serverTimeOffset")),n=t.val()||0;return(new Date).getTime()+n}function Fr(e){return zs({timestamp:Dr(e)})}function Mr(e,t,n,i,s){e.dataUpdateCount++;const o=new ct(t);n=e.interceptServerDataCallback_?e.interceptServerDataCallback_(t,n):n;let a=[];if(s)if(i){const t=Object(r["D"])(n,e=>yn(e));a=js(e.serverSyncTree_,o,t,s)}else{const t=yn(n);a=Rs(e.serverSyncTree_,o,t,s)}else if(i){const t=Object(r["D"])(n,e=>yn(e));a=Ps(e.serverSyncTree_,o,t)}else{const t=yn(n);a=Ns(e.serverSyncTree_,o,t)}let c=o;a.length>0&&(c=Jr(e,o)),xr(e.eventQueue_,c,a)}function Lr(e,t){qr(e,"connected",t),!1===t&&zr(e)}function Ar(e,t){A(t,(t,n)=>{qr(e,t,n)})}function qr(e,t,n){const i=new ct("/.info/"+t),s=yn(n);e.infoData_.updateSnapshot(i,s);const r=Ns(e.infoSyncTree_,i,s);xr(e.eventQueue_,i,r)}function Ur(e){return e.nextWriteId_++}function Wr(e,t){const n=Fs(e.serverSyncTree_,t);return null!=n?Promise.resolve(n):e.server_.get(t).then(n=>{const i=yn(n).withIndex(t._queryParams.getIndex()),s=Ns(e.serverSyncTree_,t._path,i);return Er(e.eventQueue_,t._path,s),Promise.resolve(i)},n=>($r(e,"get for query "+Object(r["K"])(t)+" failed: "+n),Promise.reject(new Error(n))))}function Hr(e,t,n,i,s){$r(e,"set",{path:t.toString(),value:n,priority:i});const r=Fr(e),o=yn(n,i),a=Ds(e.serverSyncTree_,t),c=Gs(o,a,r),l=Ur(e),h=xs(e.serverSyncTree_,t,c,l,!0);kr(e.eventQueue_,h),e.server_.put(t.toString(),o.val(!0),(n,i)=>{const r="ok"===n;r||x("set at "+t+" failed: "+n);const o=Os(e.serverSyncTree_,l,!r);xr(e.eventQueue_,t,o),Yr(e,s,n,i)});const u=io(e,t);Jr(e,u),xr(e.eventQueue_,u,[])}function Vr(e,t,n,i){$r(e,"update",{path:t.toString(),value:n});let s=!0;const r=Fr(e),o={};if(A(n,(n,i)=>{s=!1,o[n]=Bs(gt(t,n),yn(i),e.serverSyncTree_,r)}),s)I("update() called with empty data.  Don't do anything."),Yr(e,i,"ok",void 0);else{const s=Ur(e),r=Ss(e.serverSyncTree_,t,o,s);kr(e.eventQueue_,r),e.server_.merge(t.toString(),n,(n,r)=>{const o="ok"===n;o||x("update at "+t+" failed: "+n);const a=Os(e.serverSyncTree_,s,!o),c=a.length>0?Jr(e,t):t;xr(e.eventQueue_,c,a),Yr(e,i,n,r)}),A(n,n=>{const i=io(e,gt(t,n));Jr(e,i)}),xr(e.eventQueue_,t,[])}}function zr(e){$r(e,"onDisconnectEvents");const t=Fr(e),n=An();Un(e.onDisconnect_,lt(),(i,s)=>{const r=Bs(i,s,e.serverSyncTree_,t);qn(n,i,r)});let i=[];Un(n,lt(),(t,n)=>{i=i.concat(Ns(e.serverSyncTree_,t,n));const s=io(e,t);Jr(e,s)}),e.onDisconnect_=An(),xr(e.eventQueue_,lt(),i)}function Kr(e){e.persistentConnection_&&e.persistentConnection_.interrupt(Nr)}function $r(e,...t){let n="";e.persistentConnection_&&(n=e.persistentConnection_.id+":"),I(n,...t)}function Yr(e,t,n,i){t&&$(()=>{if("ok"===n)t(null);else{const e=(n||"error").toUpperCase();let s=e;i&&(s+=": "+i);const r=new Error(s);r.code=e,t(r)}})}function Br(e,t,n){return Ds(e.serverSyncTree_,t,n)||_n.EMPTY_NODE}function Gr(e,t=e.transactionQueueTree_){if(t||no(e,t),Zs(t)){const n=eo(e,t);Object(r["e"])(n.length>0,"Sending zero length transaction queue");const i=n.every(e=>0===e.status);i&&Qr(e,or(t),n)}else tr(t)&&ir(t,t=>{Gr(e,t)})}function Qr(e,t,n){const i=n.map(e=>e.currentWriteId),s=Br(e,t,i);let o=s;const a=s.hash();for(let h=0;h<n.length;h++){const e=n[h];Object(r["e"])(0===e.status,"tryToSendTransactionQueue_: items in queue should all be run."),e.status=1,e.retryCount++;const i=yt(t,e.path);o=o.updateChild(i,e.currentOutputSnapshotRaw)}const c=o.val(!0),l=t;e.server_.put(l.toString(),c,i=>{$r(e,"transaction put response",{path:l.toString(),status:i});let s=[];if("ok"===i){const i=[];for(let t=0;t<n.length;t++)n[t].status=2,s=s.concat(Os(e.serverSyncTree_,n[t].currentWriteId)),n[t].onComplete&&i.push(()=>n[t].onComplete(null,!0,n[t].currentOutputSnapshotResolved)),n[t].unwatcher();no(e,Xs(e.transactionQueueTree_,t)),Gr(e,e.transactionQueueTree_),xr(e.eventQueue_,t,s);for(let e=0;e<i.length;e++)$(i[e])}else{if("datastale"===i)for(let e=0;e<n.length;e++)3===n[e].status?n[e].status=4:n[e].status=0;else{x("transaction at "+l.toString()+" failed: "+i);for(let e=0;e<n.length;e++)n[e].status=4,n[e].abortReason=i}Jr(e,t)}},a)}function Jr(e,t){const n=Zr(e,t),i=or(n),s=eo(e,n);return Xr(e,s,i),i}function Xr(e,t,n){if(0===t.length)return;const i=[];let s=[];const o=t.filter(e=>0===e.status),a=o.map(e=>e.currentWriteId);for(let c=0;c<t.length;c++){const o=t[c],l=yt(n,o.path);let h,u=!1;if(Object(r["e"])(null!==l,"rerunTransactionsUnderNode_: relativePath should not be null."),4===o.status)u=!0,h=o.abortReason,s=s.concat(Os(e.serverSyncTree_,o.currentWriteId,!0));else if(0===o.status)if(o.retryCount>=Pr)u=!0,h="maxretry",s=s.concat(Os(e.serverSyncTree_,o.currentWriteId,!0));else{const n=Br(e,o.path,a);o.currentInputSnapshot=n;const i=t[c].update(n.val());if(void 0!==i){gr("transaction failed: Data returned ",i,o.path);let t=yn(i);const c="object"===typeof i&&null!=i&&Object(r["k"])(i,".priority");c||(t=t.updatePriority(n.getPriority()));const l=o.currentWriteId,h=Fr(e),u=Gs(t,n,h);o.currentOutputSnapshotRaw=t,o.currentOutputSnapshotResolved=u,o.currentWriteId=Ur(e),a.splice(a.indexOf(l),1),s=s.concat(xs(e.serverSyncTree_,o.path,u,o.currentWriteId,o.applyLocally)),s=s.concat(Os(e.serverSyncTree_,l,!0))}else u=!0,h="nodata",s=s.concat(Os(e.serverSyncTree_,o.currentWriteId,!0))}xr(e.eventQueue_,n,s),s=[],u&&(t[c].status=2,function(e){setTimeout(e,Math.floor(0))}(t[c].unwatcher),t[c].onComplete&&("nodata"===h?i.push(()=>t[c].onComplete(null,!1,t[c].currentInputSnapshot)):i.push(()=>t[c].onComplete(new Error(h),!1,null))))}no(e,e.transactionQueueTree_);for(let r=0;r<i.length;r++)$(i[r]);Gr(e,e.transactionQueueTree_)}function Zr(e,t){let n,i=e.transactionQueueTree_;n=ht(t);while(null!==n&&void 0===Zs(i))i=Xs(i,n),t=dt(t),n=ht(t);return i}function eo(e,t){const n=[];return to(e,t,n),n.sort((e,t)=>e.order-t.order),n}function to(e,t,n){const i=Zs(t);if(i)for(let s=0;s<i.length;s++)n.push(i[s]);ir(t,t=>{to(e,t,n)})}function no(e,t){const n=Zs(t);if(n){let e=0;for(let t=0;t<n.length;t++)2!==n[t].status&&(n[e]=n[t],e++);n.length=e,er(t,n.length>0?n:void 0)}ir(t,t=>{no(e,t)})}function io(e,t){const n=or(Zr(e,t)),i=Xs(e.transactionQueueTree_,t);return rr(i,t=>{so(e,t)}),so(e,i),sr(i,t=>{so(e,t)}),n}function so(e,t){const n=Zs(t);if(n){const i=[];let s=[],o=-1;for(let t=0;t<n.length;t++)3===n[t].status||(1===n[t].status?(Object(r["e"])(o===t-1,"All SENT items should be at beginning of queue."),o=t,n[t].status=3,n[t].abortReason="set"):(Object(r["e"])(0===n[t].status,"Unexpected transaction status in abort"),n[t].unwatcher(),s=s.concat(Os(e.serverSyncTree_,n[t].currentWriteId,!0)),n[t].onComplete&&i.push(n[t].onComplete.bind(null,new Error("set"),!1,null))));-1===o?er(t,void 0):n.length=o+1,xr(e.eventQueue_,or(t),s);for(let e=0;e<i.length;e++)$(i[e])}}
/**
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
 */function ro(e){let t="";const n=e.split("/");for(let s=0;s<n.length;s++)if(n[s].length>0){let e=n[s];try{e=decodeURIComponent(e.replace(/\+/g," "))}catch(i){}t+="/"+e}return t}function oo(e){const t={};"?"===e.charAt(0)&&(e=e.substring(1));for(const n of e.split("&")){if(0===n.length)continue;const i=n.split("=");2===i.length?t[decodeURIComponent(i[0])]=decodeURIComponent(i[1]):x(`Invalid query segment '${n}' in query '${e}'`)}return t}const ao=function(e,t){const n=co(e),i=n.namespace;"firebase.com"===n.domain&&E(n.host+" is no longer supported. Please use <YOUR FIREBASE>.firebaseio.com instead"),i&&"undefined"!==i||"localhost"===n.domain||E("Cannot parse Firebase url. Please use https://<YOUR FIREBASE>.firebaseio.com"),n.secure||S();const s="ws"===n.scheme||"wss"===n.scheme;return{repoInfo:new le(n.host,n.secure,i,s,t,"",i!==n.subdomain),path:new ct(n.pathString)}},co=function(e){let t="",n="",i="",s="",r="",o=!0,a="https",c=443;if("string"===typeof e){let l=e.indexOf("//");l>=0&&(a=e.substring(0,l-1),e=e.substring(l+2));let h=e.indexOf("/");-1===h&&(h=e.length);let u=e.indexOf("?");-1===u&&(u=e.length),t=e.substring(0,Math.min(h,u)),h<u&&(s=ro(e.substring(h,u)));const d=oo(e.substring(Math.min(e.length,u)));l=t.indexOf(":"),l>=0?(o="https"===a||"wss"===a,c=parseInt(t.substring(l+1),10)):l=t.length;const p=t.slice(0,l);if("localhost"===p.toLowerCase())n="localhost";else if(p.split(".").length<=2)n=p;else{const e=t.indexOf(".");i=t.substring(0,e).toLowerCase(),n=t.substring(e+1),r=i}"ns"in d&&(r=d["ns"])}return{host:t,port:c,domain:n,subdomain:i,secure:o,scheme:a,pathString:s,namespace:r}};
/**
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
 */
class lo{constructor(e,t,n,i){this._repo=e,this._path=t,this._queryParams=n,this._orderByCalled=i}get key(){return vt(this._path)?null:pt(this._path)}get ref(){return new ho(this._repo,this._path)}get _queryIdentifier(){const e=Fn(this._queryParams),t=M(e);return"{}"===t?"default":t}get _queryObject(){return Fn(this._queryParams)}isEqual(e){if(e=Object(r["r"])(e),!(e instanceof lo))return!1;const t=this._repo===e._repo,n=wt(this._path,e._path),i=this._queryIdentifier===e._queryIdentifier;return t&&n&&i}toJSON(){return this.toString()}toString(){return this._repo.toString()+ft(this._path)}}class ho extends lo{constructor(e,t){super(e,t,new Rn,!1)}get parent(){const e=mt(this._path);return null===e?null:new ho(this._repo,e)}get root(){let e=this;while(null!==e.parent)e=e.parent;return e}}class uo{constructor(e,t,n){this._node=e,this.ref=t,this._index=n}get priority(){return this._node.getPriority().val()}get key(){return this.ref.key}get size(){return this._node.numChildren()}child(e){const t=new ct(e),n=fo(this.ref,e);return new uo(this._node.getChild(t),n,an)}exists(){return!this._node.isEmpty()}exportVal(){return this._node.val(!0)}forEach(e){if(this._node.isLeafNode())return!1;const t=this._node;return!!t.forEachChild(this._index,(t,n)=>e(new uo(n,fo(this.ref,t),an)))}hasChild(e){const t=new ct(e);return!this._node.getChild(t).isEmpty()}hasChildren(){return!this._node.isLeafNode()&&!this._node.isEmpty()}toJSON(){return this.exportVal()}val(){return this._node.val()}}function po(e,t){return e=Object(r["r"])(e),e._checkNotDeleted("ref"),void 0!==t?fo(e._root,t):e._root}function fo(e,t){return e=Object(r["r"])(e),null===ht(e._path)?wr("child","path",t,!1):br("child","path",t,!1),new ho(e._repo,gt(e._path,t))}function _o(e,t){e=Object(r["r"])(e),Cr("set",e._path),mr("set",t,e._path,!1);const n=new r["a"];return Hr(e._repo,e._path,t,null,n.wrapCallback(()=>{})),n.promise}function mo(e,t){yr("update",t,e._path,!1);const n=new r["a"];return Vr(e._repo,e._path,t,n.wrapCallback(()=>{})),n.promise}function go(e){return e=Object(r["r"])(e),Wr(e._repo,e).then(t=>new uo(t,new ho(e._repo,e._path),e._queryParams.getIndex()))}ws(ho),ks(ho);
/**
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
 */
const vo="FIREBASE_DATABASE_EMULATOR_HOST",yo={};let bo=!1;function wo(t,n,i,s,r){let o=s||t.options.databaseURL;void 0===o&&(t.options.projectId||E("Can't determine Firebase Database URL. Be sure to include  a Project ID when calling firebase.initializeApp()."),I("Using default host for project ",t.options.projectId),o=t.options.projectId+"-default-rtdb.firebaseio.com");let a,c=ao(o,r),l=c.repoInfo,h=void 0;"undefined"!==typeof e&&Object({NODE_ENV:"production",BASE_URL:"/"})&&(h=Object({NODE_ENV:"production",BASE_URL:"/"})[vo]),h?(a=!0,o=`http://${h}?ns=${l.namespace}`,c=ao(o,r),l=c.repoInfo):a=!c.repoInfo.secure;const u=r&&a?new J(J.OWNER):new Q(t.name,t.options,n);Ir("Invalid Firebase Database URL",c),vt(c.path)||E("Database URL must point to the root of a Firebase Database (not including a child path).");const d=Io(l,t,u,new G(t.name,i));return new To(d,t)}function Co(e,t){const n=yo[t];n&&n[e.key]===e||E(`Database ${t}(${e.repoInfo_}) has already been deleted.`),Kr(e),delete n[e.key]}function Io(e,t,n,i){let s=yo[t.name];s||(s={},yo[t.name]=s);let r=s[e.toURLString()];return r&&E("Database initialized multiple times. Please make sure the format of the database URL matches with each database() call."),r=new Rr(e,bo,n,i),s[e.toURLString()]=r,r}class To{constructor(e,t){this._repoInternal=e,this.app=t,this["type"]="database",this._instanceStarted=!1}get _repo(){return this._instanceStarted||(jr(this._repoInternal,this.app.options.appId,this.app.options["databaseAuthVariableOverride"]),this._instanceStarted=!0),this._repoInternal}get _root(){return this._rootInternal||(this._rootInternal=new ho(this._repo,lt())),this._rootInternal}_delete(){return null!==this._rootInternal&&(Co(this._repo,this.app.name),this._repoInternal=null,this._rootInternal=null),Promise.resolve()}_checkNotDeleted(e){null===this._rootInternal&&E("Cannot call "+e+" on a deleted database.")}}function ko(e=Object(i["d"])(),t){return Object(i["b"])(e,"database").getImmediate({identifier:t})}
/**
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
 */
function Eo(e){h(i["a"]),Object(i["c"])(new s["a"]("database",(e,{instanceIdentifier:t})=>{const n=e.getProvider("app").getImmediate(),i=e.getProvider("auth-internal"),s=e.getProvider("app-check-internal");return wo(n,i,s,t)},"PUBLIC").setMultipleInstances(!0)),Object(i["f"])(a,c,e),Object(i["f"])(a,c,"esm2017")}
/**
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
 */Lt.prototype.simpleListen=function(e,t){this.sendRequest("q",{p:e},t)},Lt.prototype.echo=function(e,t){this.sendRequest("echo",{d:e},t)};Eo()}).call(this,n("4362"))},5491:function(e,t,n){"use strict";n("1be5")},5530:function(e,t,n){"use strict";n.d(t,"a",(function(){return r}));n("b64b"),n("a4d3"),n("4de4"),n("d3b7"),n("e439"),n("159b"),n("dbb4");function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function s(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);t&&(i=i.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,i)}return n}function r(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?s(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):s(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}},"57b9":function(e,t,n){var i=n("c65b"),s=n("d066"),r=n("b622"),o=n("6eeb");e.exports=function(){var e=s("Symbol"),t=e&&e.prototype,n=t&&t.valueOf,a=r("toPrimitive");t&&!t[a]&&o(t,a,(function(e){return i(n,this)}))}},5899:function(e,t){e.exports="\t\n\v\f\r                　\u2028\u2029\ufeff"},"58a8":function(e,t,n){var i=n("e330"),s=n("1d80"),r=n("577e"),o=n("5899"),a=i("".replace),c="["+o+"]",l=RegExp("^"+c+c+"*"),h=RegExp(c+c+"*$"),u=function(e){return function(t){var n=r(s(t));return 1&e&&(n=a(n,l,"")),2&e&&(n=a(n,h,"")),n}};e.exports={start:u(1),end:u(2),trim:u(3)}},"5a34":function(e,t,n){var i=n("da84"),s=n("44e7"),r=i.TypeError;e.exports=function(e){if(s(e))throw r("The method doesn't accept regular expressions");return e}},"5a47":function(e,t,n){var i=n("23e7"),s=n("4930"),r=n("d039"),o=n("7418"),a=n("7b0b"),c=!s||r((function(){o.f(1)}));i({target:"Object",stat:!0,forced:c},{getOwnPropertySymbols:function(e){var t=o.f;return t?t(a(e)):[]}})},"65f0":function(e,t,n){var i=n("0b42");e.exports=function(e,t){return new(i(e))(0===t?0:t)}},"66ce":function(e,t,n){"use strict";var i=n("51b0");n.d(t,"a",(function(){return i["a"]})),n.d(t,"b",(function(){return i["b"]})),n.d(t,"c",(function(){return i["c"]})),n.d(t,"d",(function(){return i["d"]})),n.d(t,"e",(function(){return i["e"]})),n.d(t,"f",(function(){return i["f"]}))},"6e32":function(e,t,n){"use strict";n.r(t);var i=function(){var e=this,t=e.$createElement,i=e._self._c||t;return i("div",{staticClass:"wrapper"},[i("div",{staticClass:"list"},e._l(e.list,(function(t){return i("div",{key:t.id,staticClass:"item",on:{click:function(){return e.setSelectedId(t.id)}}},[i("div",[e._v(e._s(t.title))])])})),0),i("div",{staticClass:"data"},[e.selectedId?i("div",[i("div",{staticClass:"buttons"},[i("b-button",{attrs:{variant:"danger"},on:{click:function(){return e.deleteData(e.selectedData.id)}}},[e._v("Удалить")])],1),i("div",{staticClass:"title"},[e._v(e._s(e.selectedData.title))]),i("div",{staticClass:"caption"},[e._v(e._s(e.selectedData.caption))]),i("div",{staticClass:"nameCategory"},[e._v("Что вам предстоит")]),i("div",{staticClass:"caption"},[e._v(e._s(e.selectedData.responsibilities))]),i("div",{staticClass:"nameCategory"},[e._v("Что от вас требуется")]),i("div",{staticClass:"caption"},[e._v(e._s(e.selectedData.expectations))]),i("div",{staticClass:"nameCategory"},[e._v("Что мы вам предоставим")]),i("div",{staticClass:"caption"},[e._v(e._s(e.selectedData.benefits))])]):i("div",[i("img",{attrs:{src:n("414e")}})])]),i("div",{staticClass:"add"},[i("b-button",{directives:[{name:"b-modal",rawName:"v-b-modal.modal-1",modifiers:{"modal-1":!0}}],attrs:{variant:"success"}},[i("b-icon",{attrs:{icon:"plus-lg"}})],1)],1),i("b-modal",{attrs:{id:"modal-1",title:"BootstrapVue"},scopedSlots:e._u([{key:"modal-header",fn:function(){return[i("h5",[e._v("Создать новую вакансию")])]},proxy:!0},{key:"default",fn:function(){return[i("p",[e._v("Заполните все поля новой вакансии")]),i("b-form-input",{attrs:{placeholder:"Название вакансии"},model:{value:e.newVacantion.title,callback:function(t){e.$set(e.newVacantion,"title",t)},expression:"newVacantion.title"}}),i("b-form-textarea",{attrs:{id:"textarea",placeholder:"Описание вакансии",rows:"3","max-rows":"6"},model:{value:e.newVacantion.caption,callback:function(t){e.$set(e.newVacantion,"caption",t)},expression:"newVacantion.caption"}}),i("b-form-textarea",{attrs:{id:"textarea",placeholder:"Обязанности будущего кандидата",rows:"3","max-rows":"6"},model:{value:e.newVacantion.responsibilities,callback:function(t){e.$set(e.newVacantion,"responsibilities",t)},expression:"newVacantion.responsibilities"}}),i("b-form-textarea",{attrs:{id:"textarea",placeholder:"Требования, выдвигаемые к кандидату",rows:"3","max-rows":"6"},model:{value:e.newVacantion.expectations,callback:function(t){e.$set(e.newVacantion,"expectations",t)},expression:"newVacantion.expectations"}}),i("b-form-textarea",{attrs:{id:"textarea",placeholder:"Условия работы",rows:"3","max-rows":"6"},model:{value:e.newVacantion.benefits,callback:function(t){e.$set(e.newVacantion,"benefits",t)},expression:"newVacantion.benefits"}})]},proxy:!0},{key:"modal-footer",fn:function(t){var n=t.ok,s=t.cancel;return[i("b-button",{attrs:{variant:"success"},on:{click:function(){return e.saveData(n)}}},[e._v(" Сохранить ")]),i("b-button",{on:{click:function(e){return s()}}},[e._v(" Отменить ")])]}}])})],1)},s=[],r=n("5530"),o=n("1da1"),a=(n("96cf"),n("7db0"),n("d3b7"),n("25f0"),n("07ac"),n("a9e3"),n("66ce")),c={mounted:function(){this.$store.getters.getEmail||this.$router.push("/"),this.loadData()},computed:{selectedData:function(){var e=this;return this.list.find((function(t){return t.id.toString()===e.selectedId.toString()}))}},methods:{setSelectedId:function(e){this.selectedId=e.toString()},deleteData:function(e){var t=this;return Object(o["a"])(regeneratorRuntime.mark((function n(){var i;return regeneratorRuntime.wrap((function(n){while(1)switch(n.prev=n.next){case 0:return i=Object(a["c"])(),n.next=3,Object(a["e"])(Object(a["d"])(i,"vacancies/"+e),null);case 3:t.selectedId=0,t.loadData();case 5:case"end":return n.stop()}}),n)})))()},loadData:function(){var e=this,t=Object(a["d"])(Object(a["c"])());Object(a["b"])(Object(a["a"])(t,"vacancies")).then((function(t){if(t.exists()){var n=Object.values(t.val());e.list=n||[]}else console.log("No data available")})).catch((function(e){console.error(e)}))},saveData:function(e){var t=Object(a["c"])(),n=Number(new Date);Object(a["e"])(Object(a["d"])(t,"vacancies/"+n),Object(r["a"])({id:n},this.newVacantion)),e(),this.clearData(),this.loadData()},clearData:function(){this.newVacantion={title:"",caption:"",responsibilities:"",expectations:"",benefits:""}}},data:function(){return{list:[],selectedId:0,newVacantion:{title:"",caption:"",responsibilities:"",expectations:"",benefits:""}}}},l=c,h=(n("5491"),n("2877")),u=Object(h["a"])(l,i,s,!1,null,"31552d64",null);t["default"]=u.exports},"6f53":function(e,t,n){var i=n("83ab"),s=n("e330"),r=n("df75"),o=n("fc6a"),a=n("d1e7").f,c=s(a),l=s([].push),h=function(e){return function(t){var n,s=o(t),a=r(s),h=a.length,u=0,d=[];while(h>u)n=a[u++],i&&!c(s,n)||l(d,e?[n,s[n]]:s[n]);return d}};e.exports={entries:h(!0),values:h(!1)}},"6fe6":function(e,t,n){},7156:function(e,t,n){var i=n("1626"),s=n("861d"),r=n("d2bb");e.exports=function(e,t,n){var o,a;return r&&i(o=t.constructor)&&o!==n&&s(a=o.prototype)&&a!==n.prototype&&r(e,a),e}},"746f":function(e,t,n){var i=n("428f"),s=n("1a2d"),r=n("e538"),o=n("9bf2").f;e.exports=function(e){var t=i.Symbol||(i.Symbol={});s(t,e)||o(t,e,{value:r.f(e)})}},"7db0":function(e,t,n){"use strict";var i=n("23e7"),s=n("b727").find,r=n("44d2"),o="find",a=!0;o in[]&&Array(1)[o]((function(){a=!1})),i({target:"Array",proto:!0,forced:a},{find:function(e){return s(this,e,arguments.length>1?arguments[1]:void 0)}}),r(o)},8418:function(e,t,n){"use strict";var i=n("a04b"),s=n("9bf2"),r=n("5c6c");e.exports=function(e,t,n){var o=i(t);o in e?s.f(e,o,r(0,n)):e[o]=n}},"90d8":function(e,t,n){var i=n("c65b"),s=n("1a2d"),r=n("3a9b"),o=n("ad6d"),a=RegExp.prototype;e.exports=function(e){var t=e.flags;return void 0!==t||"flags"in a||s(e,"flags")||!r(a,e)?t:i(o,e)}},a4d3:function(e,t,n){n("d9f5"),n("b4f8"),n("c513"),n("e9c4"),n("5a47")},a640:function(e,t,n){"use strict";var i=n("d039");e.exports=function(e,t){var n=[][e];return!!n&&i((function(){n.call(null,t||function(){return 1},1)}))}},a9e3:function(e,t,n){"use strict";var i=n("83ab"),s=n("da84"),r=n("e330"),o=n("94ca"),a=n("6eeb"),c=n("1a2d"),l=n("7156"),h=n("3a9b"),u=n("d9b5"),d=n("c04e"),p=n("d039"),f=n("241c").f,_=n("06cf").f,m=n("9bf2").f,g=n("408a"),v=n("58a8").trim,y="Number",b=s[y],w=b.prototype,C=s.TypeError,I=r("".slice),T=r("".charCodeAt),k=function(e){var t=d(e,"number");return"bigint"==typeof t?t:E(t)},E=function(e){var t,n,i,s,r,o,a,c,l=d(e,"number");if(u(l))throw C("Cannot convert a Symbol value to a number");if("string"==typeof l&&l.length>2)if(l=v(l),t=T(l,0),43===t||45===t){if(n=T(l,2),88===n||120===n)return NaN}else if(48===t){switch(T(l,1)){case 66:case 98:i=2,s=49;break;case 79:case 111:i=8,s=55;break;default:return+l}for(r=I(l,2),o=r.length,a=0;a<o;a++)if(c=T(r,a),c<48||c>s)return NaN;return parseInt(r,i)}return+l};if(o(y,!b(" 0o1")||!b("0b1")||b("+0x1"))){for(var x,S=function(e){var t=arguments.length<1?0:b(k(e)),n=this;return h(w,n)&&p((function(){g(n)}))?l(Object(t),n,S):t},O=i?f(b):"MAX_VALUE,MIN_VALUE,NaN,NEGATIVE_INFINITY,POSITIVE_INFINITY,EPSILON,MAX_SAFE_INTEGER,MIN_SAFE_INTEGER,isFinite,isInteger,isNaN,isSafeInteger,parseFloat,parseInt,fromString,range".split(","),N=0;O.length>N;N++)c(b,x=O[N])&&!c(S,x)&&m(S,x,_(b,x));S.prototype=w,w.constructor=S,a(s,y,S)}},ab13:function(e,t,n){var i=n("b622"),s=i("match");e.exports=function(e){var t=/./;try{"/./"[e](t)}catch(n){try{return t[s]=!1,"/./"[e](t)}catch(i){}}return!1}},ad6d:function(e,t,n){"use strict";var i=n("825a");e.exports=function(){var e=i(this),t="";return e.hasIndices&&(t+="d"),e.global&&(t+="g"),e.ignoreCase&&(t+="i"),e.multiline&&(t+="m"),e.dotAll&&(t+="s"),e.unicode&&(t+="u"),e.sticky&&(t+="y"),t}},b0c0:function(e,t,n){var i=n("83ab"),s=n("5e77").EXISTS,r=n("e330"),o=n("9bf2").f,a=Function.prototype,c=r(a.toString),l=/function\b(?:\s|\/\*[\S\s]*?\*\/|\/\/[^\n\r]*[\n\r]+)*([^\s(/]*)/,h=r(l.exec),u="name";i&&!s&&o(a,u,{configurable:!0,get:function(){try{return h(l,c(this))[1]}catch(e){return""}}})},b4f8:function(e,t,n){var i=n("23e7"),s=n("d066"),r=n("1a2d"),o=n("577e"),a=n("5692"),c=n("3d87"),l=a("string-to-symbol-registry"),h=a("symbol-to-string-registry");i({target:"Symbol",stat:!0,forced:!c},{for:function(e){var t=o(e);if(r(l,t))return l[t];var n=s("Symbol")(t);return l[t]=n,h[n]=t,n}})},b64b:function(e,t,n){var i=n("23e7"),s=n("7b0b"),r=n("df75"),o=n("d039"),a=o((function(){r(1)}));i({target:"Object",stat:!0,forced:a},{keys:function(e){return r(s(e))}})},b727:function(e,t,n){var i=n("0366"),s=n("e330"),r=n("44ad"),o=n("7b0b"),a=n("07fa"),c=n("65f0"),l=s([].push),h=function(e){var t=1==e,n=2==e,s=3==e,h=4==e,u=6==e,d=7==e,p=5==e||u;return function(f,_,m,g){for(var v,y,b=o(f),w=r(b),C=i(_,m),I=a(w),T=0,k=g||c,E=t?k(f,I):n||d?k(f,0):void 0;I>T;T++)if((p||T in w)&&(v=w[T],y=C(v,T,b),e))if(t)E[T]=y;else if(y)switch(e){case 3:return!0;case 5:return v;case 6:return T;case 2:l(E,v)}else switch(e){case 4:return!1;case 7:l(E,v)}return u?-1:s||h?h:E}};e.exports={forEach:h(0),map:h(1),filter:h(2),some:h(3),every:h(4),find:h(5),findIndex:h(6),filterReject:h(7)}},bb51:function(e,t,n){"use strict";n.r(t);var i=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"wrapper"},[e._m(0),e.isShowLogin?n("Login",{on:{toggleShow:e.toggleShowLogin}}):n("Signup",{on:{toggleShow:e.toggleShowLogin}})],1)},s=[function(){var e=this,t=e.$createElement,i=e._self._c||t;return i("div",{staticClass:"img"},[i("img",{attrs:{alt:"BackGround Icon",src:n("d0cf")}})])}],r=function(){var e=this,t=this,n=t.$createElement,i=t._self._c||n;return i("div",{staticClass:"container"},[i("div",{staticClass:"wrapper"},[i("div",{staticClass:"label"},[t._v("Авторизация")]),i("b-form-input",{attrs:{type:"text",placeholder:"Введите почту"},model:{value:t.email,callback:function(e){t.email=e},expression:"email"}}),i("b-form-input",{attrs:{type:"password",placeholder:"Введите пароль"},model:{value:t.password,callback:function(e){t.password=e},expression:"password"}}),i("div",{staticClass:"buttons"},[i("b-button",{staticClass:"login",attrs:{variant:"success"},on:{click:t.login}},[t._v("Войти")]),i("b-button",{on:{click:function(){return e.$emit("toggleShow")}}},[t._v("Регистрация")])],1)],1),i("b-alert",{staticClass:"alert",attrs:{show:t.isError,variant:"danger"}},[t._v("Неверный логин или пароль")])],1)},o=[],a=n("1da1"),c=(n("96cf"),{name:"Login",props:{msg:String},data:function(){return{email:"",password:"",isError:!1}},methods:{login:function(){var e=this;return Object(a["a"])(regeneratorRuntime.mark((function t(){var n;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return n={email:e.email,password:e.password},t.prev=1,t.next=4,e.$store.dispatch("login",n);case 4:e.$router.push("/vacancies"),t.next=11;break;case 7:t.prev=7,t.t0=t["catch"](1),e.isError=!0,setTimeout((function(){return e.isError=!1}),2e3);case 11:case"end":return t.stop()}}),t,null,[[1,7]])})))()}}}),l=c,h=(n("02db"),n("2877")),u=Object(h["a"])(l,r,o,!1,null,"0678ed4f",null),d=u.exports,p=function(){var e=this,t=this,n=t.$createElement,i=t._self._c||n;return i("div",{staticClass:"container"},[i("div",{staticClass:"wrapper"},[i("div",{staticClass:"label"},[t._v("Регистрация")]),i("b-form-input",{attrs:{type:"text",placeholder:"Введите почту"},model:{value:t.email,callback:function(e){t.email=e},expression:"email"}}),i("b-form-input",{attrs:{type:"password",placeholder:"Введите пароль"},model:{value:t.password,callback:function(e){t.password=e},expression:"password"}}),i("b-form-input",{attrs:{type:"password",placeholder:"Повторите пароль"},model:{value:t.password2,callback:function(e){t.password2=e},expression:"password2"}}),i("div",{staticClass:"buttons"},[i("b-button",{staticClass:"login",attrs:{variant:"success"},on:{click:t.signup}},[t._v("Зарегестрироваться")]),i("b-button",{on:{click:function(){return e.$emit("toggleShow")}}},[t._v("Войти")])],1)],1),i("b-alert",{staticClass:"alert",attrs:{show:t.isError,variant:"danger"}},[t._v("Ошибка авторизации")])],1)},f=[],_={name:"Signup",props:{msg:String},data:function(){return{email:"",password:"",password2:"",isError:!1}},methods:{signup:function(){var e=this;return Object(a["a"])(regeneratorRuntime.mark((function t(){var n;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return e.password!==e.password2&&e.showAlert(),n={email:e.email,password:e.password},t.prev=2,t.next=5,e.$store.dispatch("signup",n);case 5:e.$router.push("/"),t.next=11;break;case 8:t.prev=8,t.t0=t["catch"](2),e.showAlert();case 11:case"end":return t.stop()}}),t,null,[[2,8]])})))()},showAlert:function(){var e=this;this.isError=!0,setTimeout((function(){return e.isError=!1}),2e3)}}},m=_,g=(n("13dc"),Object(h["a"])(m,p,f,!1,null,"4073be30",null)),v=g.exports,y={name:"Home",components:{Login:d,Signup:v},data:function(){return{isShowLogin:!0}},methods:{toggleShowLogin:function(){this.isShowLogin=!this.isShowLogin}}},b=y,w=(n("3015"),Object(h["a"])(b,i,s,!1,null,"409c4974",null));t["default"]=w.exports},bb8b:function(e,t,n){},be7c:function(e,t,n){},c513:function(e,t,n){var i=n("23e7"),s=n("1a2d"),r=n("d9b5"),o=n("0d51"),a=n("5692"),c=n("3d87"),l=a("symbol-to-string-registry");i({target:"Symbol",stat:!0,forced:!c},{keyFor:function(e){if(!r(e))throw TypeError(o(e)+" is not a symbol");if(s(l,e))return l[e]}})},c636:function(e,t,n){},c704:function(e,t,n){"use strict";n("bb8b")},caad:function(e,t,n){"use strict";var i=n("23e7"),s=n("4d64").includes,r=n("44d2");i({target:"Array",proto:!0},{includes:function(e){return s(this,e,arguments.length>1?arguments[1]:void 0)}}),r("includes")},d0cf:function(e,t,n){e.exports=n.p+"img/login.bdf917b0.jpg"},d81d:function(e,t,n){"use strict";var i=n("23e7"),s=n("b727").map,r=n("1dde"),o=r("map");i({target:"Array",proto:!0,forced:!o},{map:function(e){return s(this,e,arguments.length>1?arguments[1]:void 0)}})},d9f5:function(e,t,n){"use strict";var i=n("23e7"),s=n("da84"),r=n("c65b"),o=n("e330"),a=n("c430"),c=n("83ab"),l=n("4930"),h=n("d039"),u=n("1a2d"),d=n("3a9b"),p=n("825a"),f=n("fc6a"),_=n("a04b"),m=n("577e"),g=n("5c6c"),v=n("7c73"),y=n("df75"),b=n("241c"),w=n("057f"),C=n("7418"),I=n("06cf"),T=n("9bf2"),k=n("37e8"),E=n("d1e7"),x=n("6eeb"),S=n("5692"),O=n("f772"),N=n("d012"),P=n("90e3"),R=n("b622"),j=n("e538"),D=n("746f"),F=n("57b9"),M=n("d44e"),L=n("69f3"),A=n("b727").forEach,q=O("hidden"),U="Symbol",W="prototype",H=L.set,V=L.getterFor(U),z=Object[W],K=s.Symbol,$=K&&K[W],Y=s.TypeError,B=s.QObject,G=I.f,Q=T.f,J=w.f,X=E.f,Z=o([].push),ee=S("symbols"),te=S("op-symbols"),ne=S("wks"),ie=!B||!B[W]||!B[W].findChild,se=c&&h((function(){return 7!=v(Q({},"a",{get:function(){return Q(this,"a",{value:7}).a}})).a}))?function(e,t,n){var i=G(z,t);i&&delete z[t],Q(e,t,n),i&&e!==z&&Q(z,t,i)}:Q,re=function(e,t){var n=ee[e]=v($);return H(n,{type:U,tag:e,description:t}),c||(n.description=t),n},oe=function(e,t,n){e===z&&oe(te,t,n),p(e);var i=_(t);return p(n),u(ee,i)?(n.enumerable?(u(e,q)&&e[q][i]&&(e[q][i]=!1),n=v(n,{enumerable:g(0,!1)})):(u(e,q)||Q(e,q,g(1,{})),e[q][i]=!0),se(e,i,n)):Q(e,i,n)},ae=function(e,t){p(e);var n=f(t),i=y(n).concat(de(n));return A(i,(function(t){c&&!r(le,n,t)||oe(e,t,n[t])})),e},ce=function(e,t){return void 0===t?v(e):ae(v(e),t)},le=function(e){var t=_(e),n=r(X,this,t);return!(this===z&&u(ee,t)&&!u(te,t))&&(!(n||!u(this,t)||!u(ee,t)||u(this,q)&&this[q][t])||n)},he=function(e,t){var n=f(e),i=_(t);if(n!==z||!u(ee,i)||u(te,i)){var s=G(n,i);return!s||!u(ee,i)||u(n,q)&&n[q][i]||(s.enumerable=!0),s}},ue=function(e){var t=J(f(e)),n=[];return A(t,(function(e){u(ee,e)||u(N,e)||Z(n,e)})),n},de=function(e){var t=e===z,n=J(t?te:f(e)),i=[];return A(n,(function(e){!u(ee,e)||t&&!u(z,e)||Z(i,ee[e])})),i};l||(K=function(){if(d($,this))throw Y("Symbol is not a constructor");var e=arguments.length&&void 0!==arguments[0]?m(arguments[0]):void 0,t=P(e),n=function(e){this===z&&r(n,te,e),u(this,q)&&u(this[q],t)&&(this[q][t]=!1),se(this,t,g(1,e))};return c&&ie&&se(z,t,{configurable:!0,set:n}),re(t,e)},$=K[W],x($,"toString",(function(){return V(this).tag})),x(K,"withoutSetter",(function(e){return re(P(e),e)})),E.f=le,T.f=oe,k.f=ae,I.f=he,b.f=w.f=ue,C.f=de,j.f=function(e){return re(R(e),e)},c&&(Q($,"description",{configurable:!0,get:function(){return V(this).description}}),a||x(z,"propertyIsEnumerable",le,{unsafe:!0}))),i({global:!0,wrap:!0,forced:!l,sham:!l},{Symbol:K}),A(y(ne),(function(e){D(e)})),i({target:U,stat:!0,forced:!l},{useSetter:function(){ie=!0},useSimple:function(){ie=!1}}),i({target:"Object",stat:!0,forced:!l,sham:!c},{create:ce,defineProperty:oe,defineProperties:ae,getOwnPropertyDescriptor:he}),i({target:"Object",stat:!0,forced:!l},{getOwnPropertyNames:ue}),F(),M(K,U),N[q]=!0},dbb4:function(e,t,n){var i=n("23e7"),s=n("83ab"),r=n("56ef"),o=n("fc6a"),a=n("06cf"),c=n("8418");i({target:"Object",stat:!0,sham:!s},{getOwnPropertyDescriptors:function(e){var t,n,i=o(e),s=a.f,l=r(i),h={},u=0;while(l.length>u)n=s(i,t=l[u++]),void 0!==n&&c(h,t,n);return h}})},e439:function(e,t,n){var i=n("23e7"),s=n("d039"),r=n("fc6a"),o=n("06cf").f,a=n("83ab"),c=s((function(){o(1)})),l=!a||c;i({target:"Object",stat:!0,forced:l,sham:!a},{getOwnPropertyDescriptor:function(e,t){return o(r(e),t)}})},e538:function(e,t,n){var i=n("b622");t.f=i},e8b5:function(e,t,n){var i=n("c6b6");e.exports=Array.isArray||function(e){return"Array"==i(e)}},e9c4:function(e,t,n){var i=n("23e7"),s=n("d066"),r=n("2ba4"),o=n("c65b"),a=n("e330"),c=n("d039"),l=n("e8b5"),h=n("1626"),u=n("861d"),d=n("d9b5"),p=n("f36a"),f=n("4930"),_=s("JSON","stringify"),m=a(/./.exec),g=a("".charAt),v=a("".charCodeAt),y=a("".replace),b=a(1..toString),w=/[\uD800-\uDFFF]/g,C=/^[\uD800-\uDBFF]$/,I=/^[\uDC00-\uDFFF]$/,T=!f||c((function(){var e=s("Symbol")();return"[null]"!=_([e])||"{}"!=_({a:e})||"{}"!=_(Object(e))})),k=c((function(){return'"\\udf06\\ud834"'!==_("\udf06\ud834")||'"\\udead"'!==_("\udead")})),E=function(e,t){var n=p(arguments),i=t;if((u(t)||void 0!==e)&&!d(e))return l(t)||(t=function(e,t){if(h(i)&&(t=o(i,this,e,t)),!d(t))return t}),n[1]=t,r(_,null,n)},x=function(e,t,n){var i=g(n,t-1),s=g(n,t+1);return m(C,e)&&!m(I,s)||m(I,e)&&!m(C,i)?"\\u"+b(v(e,0),16):e};_&&i({target:"JSON",stat:!0,forced:T||k},{stringify:function(e,t,n){var i=p(arguments),s=r(T?E:_,null,i);return k&&"string"==typeof s?y(s,w,x):s}})},ed81:function(e,t,n){"use strict";n.r(t);var i=function(){var e=this,t=e.$createElement,i=e._self._c||t;return i("div",{staticClass:"wrapper"},[i("div",{staticClass:"list"},[i("b-form-input",{staticClass:"searchName",attrs:{placeholder:"Поиск по имени"},model:{value:e.searchUser,callback:function(t){e.searchUser=t},expression:"searchUser"}}),i("div",{staticStyle:{position:"relative"}},[i("b-form-select",{staticClass:"form-control",staticStyle:{width:"84%",margin:"8px"},attrs:{options:e.jobList,"value-field":"item","text-field":"name","disabled-field":"notEnabled"},model:{value:e.filterJob,callback:function(t){e.filterJob=t},expression:"filterJob"}}),i("b-icon",{staticStyle:{fill:"red",right:"20px",position:"absolute","margin-top":"-34px"},attrs:{icon:"x-square-fill",variant:"error"},on:{click:function(){return e.filterJob=0}}})],1),e._l(e.filteredList,(function(t){return i("div",{key:t.id,staticClass:"item",on:{click:function(){return e.setSelectedId(t.id)}}},[i("b-avatar",{attrs:{variant:"info",src:t.avatar}}),i("div",[e._v(e._s(t.name))]),"8"===t.status?i("div",{staticClass:"success"}):"9"===t.status?i("div",{staticClass:"fail"}):i("div",{staticClass:"progress"})],1)}))],2),i("div",{staticClass:"data"},[e.selectedId?i("div",[i("div",{staticClass:"buttons"},[i("b-form-select",{staticClass:"form-control",staticStyle:{width:"250px"},attrs:{options:e.statusOptions,"value-field":"item","text-field":"name","disabled-field":"notEnabled"},on:{change:e.setStatus},model:{value:e.selectedData.status,callback:function(t){e.$set(e.selectedData,"status",t)},expression:"selectedData.status"}}),i("b-button",{directives:[{name:"b-modal",rawName:"v-b-modal.modal-2",modifiers:{"modal-2":!0}}],attrs:{size:"sm",variant:"outline-primary"}},[i("b-icon",{attrs:{icon:"envelope","aria-hidden":"true"}}),e._v(" Написать ")],1),i("b-button",{attrs:{variant:"danger"},on:{click:function(){return e.deleteData(e.selectedData.id)}}},[e._v("Удалить")])],1),i("div",{staticClass:"mainInfo"},[i("div",{staticClass:"photo"},[i("img",{attrs:{src:e.selectedData.avatar}})]),i("div",{staticStyle:{"text-align":"left"}},[i("div",{staticClass:"name"},[e._v(e._s(e.selectedData.name))]),i("div",{staticClass:"age"},[e._v(e._s(e.selectedData.age)+" года, "+e._s(e.selectedData.city))]),i("div",[i("span",{staticClass:"userLabel"},[e._v("Пол:")]),i("span",{staticClass:"age"},[e._v(e._s(e.selectedData.male))])]),i("div",[i("span",{staticClass:"userLabel"},[e._v("Почта:")]),i("span",{staticClass:"age"},[e._v(e._s(e.selectedData.email))])]),i("div",[i("span",{staticClass:"userLabel"},[e._v("Телефон:")]),i("span",{staticClass:"age"},[e._v(e._s(e.selectedData.phone))])]),i("div",[i("span",{staticClass:"userLabel"},[e._v("Образование:")]),i("span",{staticClass:"age"},[e._v(e._s(e.selectedData.education))])]),i("div",[i("span",{staticClass:"userLabel"},[e._v("HR-сотрудник:")]),i("span",{staticClass:"age"},[e._v(e._s(e.selectedData.hrEmail))])]),i("div",[i("span",{staticClass:"userLabel"},[e._v("Вакансия:")]),i("span",{staticClass:"age"},[e._v(e._s(e.selectedData.vacation))])])])]),i("div",{staticClass:"user-about"},[e._v(" "+e._s(e.selectedData.about)+" ")])]):i("div",[i("img",{attrs:{src:n("414e")}})])]),i("div",{staticClass:"add"},[i("b-button",{directives:[{name:"b-modal",rawName:"v-b-modal.modal-1",modifiers:{"modal-1":!0}}],attrs:{variant:"success"}},[i("b-icon",{attrs:{icon:"plus-lg"}})],1)],1),i("b-modal",{attrs:{id:"modal-1",title:"BootstrapVue"},scopedSlots:e._u([{key:"modal-header",fn:function(){return[i("div",{staticClass:"head"},[i("h5",[e._v("Создать нового кандидата")])])]},proxy:!0},{key:"default",fn:function(){return[i("div",{staticClass:"content"},[i("FileInput",{on:{change:e.saveAvatar}}),i("div",{staticClass:"row"},[i("b-form-input",{staticStyle:{width:"355px"},attrs:{placeholder:"ФИО кандидата"},model:{value:e.newUser.name,callback:function(t){e.$set(e.newUser,"name",t)},expression:"newUser.name"}}),i("b-form-select",{staticClass:"form-control",staticStyle:{width:"100px"},attrs:{options:e.optionsMale,"value-field":"item","text-field":"name","disabled-field":"notEnabled"},model:{value:e.newUser.male,callback:function(t){e.$set(e.newUser,"male",t)},expression:"newUser.male"}})],1),i("div",{staticClass:"row"},[i("b-form-input",{attrs:{type:"number",placeholder:"Возраст"},model:{value:e.newUser.age,callback:function(t){e.$set(e.newUser,"age",t)},expression:"newUser.age"}}),i("b-form-input",{attrs:{placeholder:"Город проживания"},model:{value:e.newUser.city,callback:function(t){e.$set(e.newUser,"city",t)},expression:"newUser.city"}})],1),i("div",{staticClass:"row"},[i("b-form-input",{attrs:{type:"email",placeholder:"Почта"},model:{value:e.newUser.email,callback:function(t){e.$set(e.newUser,"email",t)},expression:"newUser.email"}}),i("b-form-input",{attrs:{type:"tel",placeholder:"Номер телефона"},model:{value:e.newUser.phone,callback:function(t){e.$set(e.newUser,"phone",t)},expression:"newUser.phone"}})],1),i("b-form-input",{attrs:{placeholder:"Образование"},model:{value:e.newUser.education,callback:function(t){e.$set(e.newUser,"education",t)},expression:"newUser.education"}}),i("b-form-input",{attrs:{placeholder:"О себе"},model:{value:e.newUser.about,callback:function(t){e.$set(e.newUser,"about",t)},expression:"newUser.about"}}),i("div",{staticClass:"label"},[e._v("Вакансия, на которую претендует кандидат")]),i("b-form-select",{staticClass:"form-control",attrs:{options:e.jobList,"value-field":"item","text-field":"name","disabled-field":"notEnabled"},model:{value:e.newUser.vacation,callback:function(t){e.$set(e.newUser,"vacation",t)},expression:"newUser.vacation"}})],1)]},proxy:!0},{key:"modal-footer",fn:function(t){var n=t.ok,s=t.cancel;return[i("b-button",{attrs:{variant:"success"},on:{click:function(){return e.saveData(n)}}},[e._v(" Сохранить ")]),i("b-button",{on:{click:function(e){return s()}}},[e._v(" Отменить ")])]}}])}),i("b-modal",{attrs:{id:"modal-2",title:"BootstrapVue"},scopedSlots:e._u([{key:"modal-header",fn:function(){return[i("div",{staticClass:"head"},[i("h5",[e._v("Отправить письмо на почту")])])]},proxy:!0},{key:"default",fn:function(){return[i("div",[i("b-form-textarea",{attrs:{placeholder:"Введите сообщение",rows:"3","max-rows":"6"},model:{value:e.mailText,callback:function(t){e.mailText=t},expression:"mailText"}}),i("span",{staticStyle:{color:"#858585"}},[e._v("Сообщение может попасть в спам!")])],1)]},proxy:!0},{key:"modal-footer",fn:function(t){var n=t.ok,s=t.cancel;return[i("b-button",{attrs:{variant:"success"},on:{click:function(){e.sendMailTo(),n()}}},[e._v(" Отправить ")]),i("b-button",{on:{click:function(e){return s()}}},[e._v(" Отменить ")])]}}])})],1)},s=[],r=n("1da1"),o=n("5530"),a=(n("96cf"),n("4de4"),n("d3b7"),n("caad"),n("2532"),n("b0c0"),n("7db0"),n("25f0"),n("07ac"),n("d81d"),n("a9e3"),n("66ce")),c=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",[n("label",{attrs:{for:e.fileKey,title:"Загрузить фотографию"}},[n("b-avatar",{staticClass:"fileLabel",attrs:{src:e.avatar,size:"6rem"}})],1),n("input",{ref:e.fileKey,staticClass:"fileInput",attrs:{type:"file",id:e.fileKey,name:e.fileKey},on:{change:e.handlerInputFile}})])},l=[],h={name:"FileInput",data:function(){return{fileKey:Math.random(),avatar:"photo.png"}},methods:{handlerInputFile:function(){var e=this,t=this.$refs[this.fileKey].files[0],n=new FileReader;n.readAsDataURL(t),n.onload=function(){e.avatar=n.result},this.$emit("change",t)}}},u=h,d=(n("c704"),n("2877")),p=Object(d["a"])(u,c,l,!1,null,"f9b355e8",null),f=p.exports;function _(e,t){var n="https://api.unisender.com/ru/api/sendEmail?format=json&api_key=61695smjxb8jcdcjeq3zu7prbzx55386xgtsanna",i="email="+t,s="sender_name=HuntFlow&sender_email=hantflow2022@gmail.com&subject=Sample+Subject",r="body="+e,o=n+"&"+i+"&"+s+"&"+r+"&list_id=1";fetch(o)}function m(e,t){var n={1:"Вас внесли в систему в huntflow. Ваше резюме рассматривается руководством!",2:"Вам необходимо пройти тестирование! Результаты отправьте своему HR! Удачи! https://drive.google.com/file/d/1PXAdPQIqqam4RoMuiNQ9QDhpYKMqzp-T/view?usp=sharing",3:"Вы успешно прошли тестирование, в ближайшее время с Вами свяжется HR для индивидуального разговора!",4:"Вы успешно прошли предыдущие этапы. В ближайшее время у Вас будет собеседование с руководителем!",5:"Вы успешно прошли предыдущие этапы! Теперь вас проверяет отдел ИБ!",6:"Вы успешно прошли все предыдущие этапы! Теперь вам необходимо пройти мед. комиссию!",7:"Вы успешно прошли предыдущие этапы! С вами свяжется hr для выставления оффера!",8:"Вы приняты на работу! Поздравляем!",9:"К сожалению, наша компания не готова вас принять!"};_(n[e],t)}var g={mounted:function(){this.$store.getters.getEmail||this.$router.push("/"),this.loadData()},components:{FileInput:f},computed:{filteredList:function(){var e=this,t=this.searchUser?this.list.filter((function(t){return t.name.includes(e.searchUser)})):this.list,n=this.filterJob?t.filter((function(t){return t.vacation===e.filterJob})):t;return n},selectedData:function(){var e=this;return this.list.find((function(t){return t.id.toString()===e.selectedId.toString()}))}},methods:{setSelectedId:function(e){this.selectedId=e.toString()},sendMailTo:function(){_(this.mailText,this.selectedData.email)},setStatus:function(){m(this.selectedData.status,this.selectedData.email);var e=Object(a["c"])();Object(a["f"])(Object(a["d"])(e,"candidates/"+this.selectedData.id),Object(o["a"])({},this.selectedData))},deleteData:function(e){var t=this;return Object(r["a"])(regeneratorRuntime.mark((function n(){var i;return regeneratorRuntime.wrap((function(n){while(1)switch(n.prev=n.next){case 0:return i=Object(a["c"])(),n.next=3,Object(a["e"])(Object(a["d"])(i,"candidates/"+e),null);case 3:t.selectedId=0,t.loadData();case 5:case"end":return n.stop()}}),n)})))()},loadData:function(){var e=this,t=Object(a["d"])(Object(a["c"])());Object(a["b"])(Object(a["a"])(t,"candidates")).then((function(t){if(t.exists()){var n=Object.values(t.val());e.list=n||[]}else console.log("No data available")})).catch((function(e){console.error(e)})),Object(a["b"])(Object(a["a"])(t,"vacancies")).then((function(t){var n=Object.values(t.val()).map((function(e){return{item:e.title,name:e.title}}));e.jobList=n||[]}))},saveData:function(e){var t=Object(a["c"])(),n=Number(new Date);Object(a["e"])(Object(a["d"])(t,"candidates/"+n),Object(o["a"])(Object(o["a"])({id:n},this.newUser),{},{hrEmail:this.$store.getters.getEmail})),e(),this.clearData(),this.loadData()},saveAvatar:function(e){var t=this,n=new FileReader;n.readAsDataURL(e),n.onload=function(){t.newUser.avatar=n.result}},clearData:function(){this.newUser={avatar:void 0,name:"",email:"",male:"",age:"",city:"",phone:"",education:"",about:"",hrEmail:"",status:"",vacation:""}}},data:function(){return{list:[],jobList:[],searchUser:"",filterJob:"",selectedId:0,optionsMale:[{item:"Мужской",name:"Мужской"},{item:"Женский",name:"Женский"}],statusOptions:[{item:"1",name:"Откликнулся"},{item:"2",name:"Тестирование"},{item:"3",name:"Интерьвю с HR"},{item:"4",name:"Интерьвю с руководителем"},{item:"5",name:"Проверка ИБ"},{item:"6",name:"Мед. комиисия"},{item:"7",name:"Выставление оффера"},{item:"8",name:"Принят"},{item:"9",name:"Отклонен"}],newUser:{avatar:void 0,name:"",email:"",male:"",age:"",city:"",phone:"",education:"",about:"",hrEmail:"",status:1,vacation:""},mailText:""}}},v=g,y=(n("273d"),Object(d["a"])(v,i,s,!1,null,"3c5b6a14",null));t["default"]=y.exports}}]);
//# sourceMappingURL=about.529c9fe1.js.map