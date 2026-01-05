import{initializeApp as V}from"https://www.gstatic.com/firebasejs/10.7.1/firebase-app.js";import{getFunctions as X,httpsCallable as q}from"https://www.gstatic.com/firebasejs/10.7.1/firebase-functions.js";(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const r of document.querySelectorAll('link[rel="modulepreload"]'))o(r);new MutationObserver(r=>{for(const n of r)if(n.type==="childList")for(const a of n.addedNodes)a.tagName==="LINK"&&a.rel==="modulepreload"&&o(a)}).observe(document,{childList:!0,subtree:!0});function s(r){const n={};return r.integrity&&(n.integrity=r.integrity),r.referrerPolicy&&(n.referrerPolicy=r.referrerPolicy),r.crossOrigin==="use-credentials"?n.credentials="include":r.crossOrigin==="anonymous"?n.credentials="omit":n.credentials="same-origin",n}function o(r){if(r.ep)return;r.ep=!0;const n=s(r);fetch(r.href,n)}})();const W={apiKey:"***REMOVED***",authDomain:"magic-internet-math-96630.firebaseapp.com",projectId:"magic-internet-math-96630",storageBucket:"magic-internet-math-96630.firebasestorage.app",messagingSenderId:"***REMOVED***",appId:"1:***REMOVED***:web:072f6cb1724919360f94cb"};window.firebaseApp=null;window.getUserScores=async function(e){try{window.firebaseApp||(window.firebaseApp=V(W));const t=X(window.firebaseApp);return(await q(t,"getUserScores")({npub:e})).data}catch(t){throw console.error("getUserScores error:",t),t}};window.loadLeaderboard=async function(){const e=document.getElementById("leaderboard-table"),t=document.getElementById("leaderboard-status");try{t.textContent="Loading...",window.firebaseApp||(window.firebaseApp=V(W));const s=X(window.firebaseApp),n=(await q(s,"getLeaderboard")({courseId:"overall",limit:10})).data.rankings||[];if(n.length===0){e.innerHTML=`
            <div style="padding: 3rem; text-align: center; color: #64748b;">
              <div style="font-size: 2rem; margin-bottom: 1rem;">🏆</div>
              <p style="margin-bottom: 0.5rem;">No rankings yet!</p>
              <p style="font-size: 0.875rem;">Be the first - start a course and connect with Nostr.</p>
            </div>
          `,t.textContent="Refresh";return}let a="";n.forEach((i,l)=>{const c=l+1,g=c===1?"🥇":c===2?"🥈":c===3?"🥉":"",f=i.displayName||"Anonymous",u=i.npub||"",$=(i.xp||i.totalXP||0).toLocaleString(),E=i.level||1;a+=`
            <div style="display: flex; align-items: center; padding: 1rem 1.5rem; border-bottom: 1px solid var(--border); ${c<=3?"background: rgba(251, 191, 36, 0.05);":""}">
              <div style="width: 50px; font-weight: 700; color: ${c<=3?"#fbbf24":"#64748b"}; font-size: 1.1rem;">
                ${g||"#"+c}
              </div>
              <div style="flex: 1; min-width: 0;">
                <div style="color: #f1f5f9; font-weight: 600; font-size: 1rem;">${f}</div>
                <div style="color: #64748b; font-size: 0.65rem; font-family: monospace; overflow: hidden; text-overflow: ellipsis; white-space: nowrap; margin-top: 2px;">${u}</div>
              </div>
              <div style="text-align: right; margin-left: 1rem;">
                <div style="color: #fbbf24; font-weight: 600; font-size: 1.1rem;">${$} XP</div>
                <div style="color: #64748b; font-size: 0.7rem;">Level ${E}</div>
              </div>
            </div>
          `}),e.innerHTML=a,t.textContent="Refresh"}catch(s){console.error("Leaderboard error:",s),e.innerHTML=`
          <div style="padding: 3rem; text-align: center; color: #64748b;">
            <div style="font-size: 2rem; margin-bottom: 1rem;">🏆</div>
            <p style="margin-bottom: 0.5rem;">Could not load leaderboard</p>
            <p style="font-size: 0.875rem;">Check out course leaderboards below for rankings.</p>
          </div>
        `,t.textContent="Retry"}};document.readyState==="loading"?document.addEventListener("DOMContentLoaded",window.loadLeaderboard):window.loadLeaderboard();const se="modulepreload",ne=function(e){return"/"+e},B={},k=function(t,s,o){let r=Promise.resolve();if(s&&s.length>0){let l=function(c){return Promise.all(c.map(g=>Promise.resolve(g).then(f=>({status:"fulfilled",value:f}),f=>({status:"rejected",reason:f}))))};document.getElementsByTagName("link");const a=document.querySelector("meta[property=csp-nonce]"),i=a?.nonce||a?.getAttribute("nonce");r=l(s.map(c=>{if(c=ne(c),c in B)return;B[c]=!0;const g=c.endsWith(".css"),f=g?'[rel="stylesheet"]':"";if(document.querySelector(`link[href="${c}"]${f}`))return;const u=document.createElement("link");if(u.rel=g?"stylesheet":se,g||(u.as="script"),u.crossOrigin="",u.href=c,i&&u.setAttribute("nonce",i),document.head.appendChild(u),g)return new Promise(($,E)=>{u.addEventListener("load",$),u.addEventListener("error",()=>E(new Error(`Unable to preload CSS for ${c}`)))})}))}function n(a){const i=new Event("vite:preloadError",{cancelable:!0});if(i.payload=a,window.dispatchEvent(i),!i.defaultPrevented)throw a}return r.then(a=>{for(const i of a||[])i.status==="rejected"&&n(i.reason);return t().catch(n)})},D="qpzry9x8gf2tvdw0s3jn54khce6mua7l",oe=[996825010,642813549,513874426,1027748829,705979059],ae=22242,U="magic-internet-math-nostr-auth";function ie(e){let t=1;for(const s of e){const o=t>>25;t=(t&33554431)<<5^s;for(let r=0;r<5;r++)o>>r&1&&(t^=oe[r])}return t}function le(e){const t=[];for(const s of e)t.push(s.charCodeAt(0)>>5);t.push(0);for(const s of e)t.push(s.charCodeAt(0)&31);return t}function ce(e,t){const s=[...le(e),...t,0,0,0,0,0,0],o=ie(s)^1,r=[];for(let n=0;n<6;n++)r.push(o>>5*(5-n)&31);return r}function de(e,t,s,o){let r=0,n=0;const a=[],i=(1<<s)-1;for(const l of e){if(l<0||l>>t!==0)return null;for(r=r<<t|l,n+=t;n>=s;)n-=s,a.push(r>>n&i)}return n>0&&a.push(r<<s-n&i),a}function ue(e){if(e.length%2!==0)throw new Error("Hex string must have even length");const t=new Uint8Array(e.length/2);for(let s=0;s<e.length;s+=2)t[s/2]=parseInt(e.slice(s,s+2),16);return t}function fe(e,t){const s=de(t,8,5);if(!s)throw new Error("Failed to convert data to 5-bit groups");const o=ce(e,s);let r=e+"1";for(const n of s)r+=D[n];for(const n of o)r+=D[n];return r}function pe(e){if(e.length!==64)throw new Error("Pubkey must be 32 bytes (64 hex characters)");const t=ue(e);return fe("npub",t)}function ge(e,t=8){return e.length<=t*2+3?e:`${e.slice(0,t)}...${e.slice(-t)}`}function F(){return typeof window<"u"&&window.nostr!==void 0}function me(e=3e3){return new Promise(t=>{if(F()){t(!0);return}const s=Date.now(),o=setInterval(()=>{F()?(clearInterval(o),t(!0)):Date.now()-s>e&&(clearInterval(o),t(!1))},100)})}let d={isAuthenticated:!1,isConnecting:!1,npub:null,displayName:null,hasExtension:!1,extensionChecked:!1};const he="magic-internet-math-progress",O=["ba","aa","crypto","linalg","advlinalg","islr","ra","calc1","calc_lib_art","calc_easy","four_pillars","wm","mom"],M={SECTION_VISIT:5,SECTION_COMPLETE:10,VISUALIZATION_USE:3};function be(){try{const e=localStorage.getItem(he);if(!e)return console.log("[NostrAuth] No gamification data in localStorage"),null;const t=JSON.parse(e);if(!t?.user||!t?.sections)return console.log("[NostrAuth] Missing user or sections in stored data"),null;const s=t.user.totalXP||0;console.log("[NostrAuth] Found totalXP in localStorage:",s);const o={};O.forEach(r=>o[r]=0);for(const[r,n]of Object.entries(t.sections)){const[a]=r.split(":");if(O.includes(a)){if(n.quizAttempts)for(const i of n.quizAttempts)i.xpEarned&&(o[a]+=i.xpEarned);n.visitedAt&&(o[a]+=M.SECTION_VISIT),n.completedAt&&(o[a]+=M.SECTION_COMPLETE),n.visualizationsInteracted&&(o[a]+=n.visualizationsInteracted.length*M.VISUALIZATION_USE)}}return{scores:O.map(r=>({courseId:r,xp:o[r]})),totalXP:s}}catch(e){return console.error("[NostrAuth] Error extracting scores:",e),null}}async function J(){if(!d.isAuthenticated){console.log("[NostrAuth] Not authenticated, skipping sync");return}const e=be();if(!e){console.log("[NostrAuth] No scores to sync");return}try{const{getFunctions:t,httpsCallable:s}=await k(async()=>{const{getFunctions:i,httpsCallable:l}=await import("https://www.gstatic.com/firebasejs/10.7.1/firebase-functions.js");return{getFunctions:i,httpsCallable:l}},[]),o=t(window.firebaseApp),r=s(o,"syncScores"),n={scores:e.scores,totalXP:e.totalXP,displayName:d.displayName};console.log("[NostrAuth] Syncing to Firebase, totalXP:",e.totalXP);const a=await r(n);console.log("[NostrAuth] Sync successful:",a.data)}catch(t){console.error("[NostrAuth] Sync failed:",t)}}function P(){const e=document.getElementById("nostr-auth-container");if(e){if(d.isConnecting){e.innerHTML=`
      <div style="display: flex; align-items: center; gap: 0.5rem; padding: 0.4rem 0.75rem; background: rgba(0, 245, 255, 0.1); border: 1px solid rgba(0, 245, 255, 0.3); border-radius: 6px;">
        <div style="width: 14px; height: 14px; border: 2px solid #00f5ff; border-top-color: transparent; border-radius: 50%; animation: spin 1s linear infinite;"></div>
        <span style="color: #00f5ff; font-size: 0.8rem;">Connecting...</span>
      </div>
      <style>
        @keyframes spin {
          to { transform: rotate(360deg); }
        }
      </style>
    `;return}if(d.isAuthenticated){const t=d.displayName||ge(d.npub,6);e.innerHTML=`
      <div style="display: flex; align-items: center; gap: 0.5rem;">
        <span style="color: #00ff9f; font-size: 0.9rem;">⚡</span>
        <span style="color: #e8e8ff; font-size: 0.85rem; font-weight: 500;">${t}</span>
        <button onclick="window.nostrAuthDisconnect()" style="font-size: 0.7rem; color: #8888aa; background: none; border: 1px solid rgba(0, 245, 255, 0.2); padding: 0.2rem 0.5rem; border-radius: 4px; cursor: pointer; margin-left: 0.25rem;" onmouseover="this.style.borderColor='rgba(0, 245, 255, 0.5)'" onmouseout="this.style.borderColor='rgba(0, 245, 255, 0.2)'">
          ✕
        </button>
      </div>
    `;return}if(!d.extensionChecked){e.innerHTML=`
      <span style="color: #8888aa; font-size: 0.8rem;">...</span>
    `;return}if(!d.hasExtension){e.innerHTML=`
      <a href="https://getalby.com" target="_blank" style="display: flex; align-items: center; gap: 0.4rem; padding: 0.4rem 0.75rem; background: rgba(255, 170, 0, 0.1); border: 1px solid rgba(255, 170, 0, 0.3); border-radius: 6px; color: #ffaa00; font-size: 0.8rem; text-decoration: none;" title="Install Alby or nos2x extension">
        <span>⚡</span>
        <span>Get Nostr</span>
      </a>
    `;return}e.innerHTML=`
    <button onclick="window.nostrAuthConnect()" style="display: flex; align-items: center; gap: 0.4rem; padding: 0.4rem 0.75rem; background: linear-gradient(135deg, rgba(0, 245, 255, 0.15), rgba(191, 0, 255, 0.1)); border: 1px solid rgba(0, 245, 255, 0.3); border-radius: 6px; color: #00f5ff; font-weight: 500; cursor: pointer; font-size: 0.8rem; transition: all 0.2s;" onmouseover="this.style.borderColor='rgba(0, 245, 255, 0.6)'; this.style.boxShadow='0 0 15px rgba(0, 245, 255, 0.2)'" onmouseout="this.style.borderColor='rgba(0, 245, 255, 0.3)'; this.style.boxShadow='none'">
      <span>⚡</span>
      <span>Connect</span>
    </button>
  `}}async function ye(){if(!window.firebaseApp){console.error("Firebase not initialized");return}if(!F()){alert("No Nostr extension found. Please install Alby, nos2x, or another NIP-07 extension.");return}d.isConnecting=!0,P();try{const e=window.nostr,{getFunctions:t,httpsCallable:s}=await k(async()=>{const{getFunctions:C,httpsCallable:I}=await import("https://www.gstatic.com/firebasejs/10.7.1/firebase-functions.js");return{getFunctions:C,httpsCallable:I}},[]),{getAuth:o,signInWithCustomToken:r}=await k(async()=>{const{getAuth:C,signInWithCustomToken:I}=await import("https://www.gstatic.com/firebasejs/10.7.1/firebase-auth.js");return{getAuth:C,signInWithCustomToken:I}},[]),n=t(window.firebaseApp),a=o(window.firebaseApp),i=await e.getPublicKey(),l=pe(i),g=await s(n,"createChallenge")({pubkeyHex:i}),{challenge:f}=g.data,u={kind:ae,created_at:Math.floor(Date.now()/1e3),tags:[["challenge",f]],content:f},$=await e.signEvent(u),z=await s(n,"verifyNostrAndCreateToken")({signedEvent:$,challenge:f});await r(a,z.data.token),d.isAuthenticated=!0,d.npub=l;try{localStorage.setItem(U,JSON.stringify({npub:l}))}catch(C){console.warn("Failed to store auth state:",C)}we(i),J()}catch(e){console.error("Nostr connect error:",e),alert("Failed to connect: "+(e.message||"Unknown error"))}finally{d.isConnecting=!1,P()}}async function ve(){try{const{getAuth:e,signOut:t}=await k(async()=>{const{getAuth:o,signOut:r}=await import("https://www.gstatic.com/firebasejs/10.7.1/firebase-auth.js");return{getAuth:o,signOut:r}},[]),s=e(window.firebaseApp);await t(s);try{localStorage.removeItem(U)}catch(o){console.warn("Failed to clear auth state:",o)}d.isAuthenticated=!1,d.npub=null,d.displayName=null,P()}catch(e){console.error("Disconnect error:",e)}}async function we(e){const t=["wss://relay.damus.io","wss://relay.nostr.band","wss://nos.lol"];for(const s of t)try{const o=await new Promise(r=>{let n=!1,a=null,i=null;const l=()=>{n||(n=!0,i&&clearTimeout(i),a&&a.readyState!==WebSocket.CLOSED&&a.close())};i=setTimeout(()=>{l(),r(null)},5e3);try{a=new WebSocket(s)}catch{l(),r(null);return}const c=Math.random().toString(36).substring(2,15);a.onopen=()=>{n||!a||a.send(JSON.stringify(["REQ",c,{kinds:[0],authors:[e],limit:1}]))},a.onmessage=g=>{if(!n)try{const f=JSON.parse(g.data);if(f[0]==="EVENT"&&f[1]===c){const u=JSON.parse(f[2].content);l(),r({name:u.name||u.display_name,display_name:u.display_name})}else f[0]==="EOSE"&&(l(),r(null))}catch{}},a.onerror=()=>{l(),r(null)},a.onclose=()=>{n||(l(),r(null))}});if(o){d.displayName=o.display_name||o.name,P();return}}catch(o){console.debug("Failed to fetch profile from",s,o)}}async function R(){const e=await me(3e3);d.hasExtension=e,d.extensionChecked=!0,P();try{const{getAuth:t,onAuthStateChanged:s}=await k(async()=>{const{getAuth:r,onAuthStateChanged:n}=await import("https://www.gstatic.com/firebasejs/10.7.1/firebase-auth.js");return{getAuth:r,onAuthStateChanged:n}},[]),o=t(window.firebaseApp);s(o,async r=>{if(r){d.isAuthenticated=!0,d.npub=r.uid;try{const n=localStorage.getItem(U);if(n){const a=JSON.parse(n);a.displayName&&(d.displayName=a.displayName)}}catch(n){console.debug("Storage read error:",n)}J()}else d.isAuthenticated=!1,d.npub=null,d.displayName=null;P()})}catch(t){console.error("Failed to initialize auth listener:",t)}}window.nostrAuthConnect=ye;window.nostrAuthDisconnect=ve;document.readyState==="loading"?document.addEventListener("DOMContentLoaded",R):R();const xe=[{id:"featured",title:"Featured",subtitle:"Our flagship courses",style:"featured"},{id:"beginners",title:"Beginners",subtitle:"Start here to build a strong foundation",style:"beginner"},{id:"calculus",title:"Calculus",subtitle:"Continuous mathematics and analysis",style:"subject"},{id:"algebra",title:"Algebra",subtitle:"Algebraic structures and systems",style:"subject"},{id:"geometry",title:"Geometry",subtitle:"Euclidean and non-Euclidean geometry",style:"subject"},{id:"history",title:"Math History",subtitle:"The stories behind the mathematics",style:"subject"},{id:"seminal",title:"Seminal Works",subtitle:"Foundational texts that shaped mathematics",style:"subject"},{id:"austrian",title:"Austrian Economics",subtitle:"The study of human action and market processes",style:"subject"}],L=[{id:"crypto",title:"Cryptography Math",description:"Learn the mathematics that powers modern encryption. From modular arithmetic to RSA and elliptic curves, discover how math keeps the internet secure.",icon:"🔐",url:"https://cryptography-xi.vercel.app/",tags:["12 Lessons","Interactive"],sections:["featured"],totalSections:12,progressPrefix:"crypto:",leaderboardUrl:"https://cryptography-xi.vercel.app/#/leaderboard",shortName:"Cryptography",progressGradient:"linear-gradient(90deg, #6366f1, #818cf8)"},{id:"islr",title:"Intro to Statistical Learning",description:"Master machine learning fundamentals with this interactive course based on James et al.'s acclaimed textbook. From linear regression to deep learning, with interactive visualizations.",icon:"📊",url:"islr-deploy/",tags:["13 Chapters","62 Sections"],sections:["featured"],totalSections:62,progressPrefix:"islr:",leaderboardUrl:"islr-deploy/#/leaderboard",shortName:"Statistical Learning",progressGradient:"linear-gradient(90deg, #34d399, #6ee7b7)"},{id:"calc_easy",title:"Beginner Calculus",description:"Master calculus through Silvanus P. Thompson's timeless classic. From functions to integration, learn calculus the way it was meant to be taught—simply and clearly.",icon:"∂",url:"calceasy-deploy/",tags:["26 Sections","Interactive"],sections:["beginners","calculus"],totalSections:26,progressPrefix:"calc_easy:",leaderboardUrl:"calceasy-deploy/#/leaderboard",shortName:"Beginner Calculus",progressGradient:"linear-gradient(90deg, #f59e0b, #fbbf24)"},{id:"ba",title:"Basic Algebra",description:"Master the fundamentals of algebra through interactive lessons and visualizations. From integers to complex numbers, covering equations, functions, and more.",icon:"x²",url:"basic-algebra-deploy/",tags:["17 Chapters","64 Sections"],sections:["beginners","algebra"],totalSections:64,progressPrefix:"ba:",leaderboardUrl:"basic-algebra-deploy/#/leaderboard",shortName:"Basic Algebra",progressGradient:"linear-gradient(90deg, #22c55e, #4ade80)"},{id:"wm",title:"Why Math?",description:"Discover the real reasons behind mathematical concepts with R.D. Driver's classic textbook. From arithmetic to infinity, understand why math works the way it does.",icon:"📚",url:"why-math-deploy/",tags:["8 Parts","13 Sections"],sections:["beginners"],totalSections:13,progressPrefix:"wm:",leaderboardUrl:"why-math-deploy/#/leaderboard",shortName:"Why Math?",progressGradient:"linear-gradient(90deg, #6366f1, #818cf8)"},{id:"calc1",title:"Intermediate Calculus",description:"One-variable calculus with an introduction to linear algebra. Based on Tom M. Apostol's classic textbook, covering integration, differentiation, and infinite series.",icon:"∫",url:"calc1-deploy/",tags:["17 Parts","101 Sections"],sections:["calculus"],totalSections:101,progressPrefix:"calc1:",leaderboardUrl:"calc1-deploy/#/leaderboard",shortName:"Intermediate Calculus",progressGradient:"linear-gradient(90deg, #f97316, #fb923c)"},{id:"calc_lib_art",title:"Calculus as a Liberal Art",description:"Explore calculus through a liberal arts lens, emphasizing concepts, history, and connections to broader human knowledge rather than computational techniques.",icon:"📚",url:"calc-lib-art-deploy/",tags:["Interactive","Conceptual"],sections:["calculus"],totalSections:10,progressPrefix:"calc_lib_art:",leaderboardUrl:"calc-lib-art-deploy/#/leaderboard",shortName:"Calc Liberal Art",progressGradient:"linear-gradient(90deg, #6366f1, #818cf8)"},{id:"ra",title:"Introduction to Real Analysis",description:"A rigorous introduction to real analysis covering limits, continuity, differentiation, and integration through formal proofs. Based on Kenneth A. Ross's Elementary Analysis.",icon:"📐",url:"ra-deploy/",tags:["4 Parts","15 Sections"],sections:["calculus"],totalSections:15,progressPrefix:"ra:",leaderboardUrl:"ra-deploy/#/leaderboard",shortName:"Real Analysis",progressGradient:"linear-gradient(90deg, #10b981, #34d399)"},{id:"linalg",title:"Linear Algebra",description:"Master vectors, matrices, and linear transformations. Based on Gilbert Strang's Introduction to Linear Algebra, with interactive visualizations.",icon:"📐",iconImage:"images/strang-planes.svg",url:"linalg-deploy/",tags:["Vectors & Matrices","Interactive"],sections:["algebra"],totalSections:19,progressPrefix:"linalg:",leaderboardUrl:"linalg-deploy/#/leaderboard",shortName:"Linear Algebra",progressGradient:"linear-gradient(90deg, #06b6d4, #22d3ee)"},{id:"advlinalg",title:"Advanced Linear Algebra",description:"Deep dive into abstract linear algebra. Based on Hoffman & Kunze's classic text, covering vector spaces, linear transformations, and canonical forms.",icon:"ℳ",url:"advlinalg-deploy/",tags:["10 Chapters","59 Sections"],sections:["algebra"],totalSections:59,progressPrefix:"advlinalg:",leaderboardUrl:"advlinalg-deploy/#/leaderboard",shortName:"Advanced LinAlg",progressGradient:"linear-gradient(90deg, #a855f7, #c084fc)"},{id:"aa",title:"Abstract Algebra",description:"Explore the elegant world of algebraic structures. Groups, rings, fields, and the deep patterns underlying all of mathematics.",icon:"G",url:"aa-deploy/",tags:["Groups & Rings","Fields"],sections:["algebra"],totalSections:50,progressPrefix:"aa:",leaderboardUrl:"aa-deploy/#/leaderboard",shortName:"Abstract Algebra",progressGradient:"linear-gradient(90deg, #f97316, #fb923c)"},{id:"four_pillars",title:"The Four Pillars of Geometry",description:"Explore geometry from four perspectives: Euclidean constructions, coordinates, projective geometry, and transformations. Based on John Stillwell's classic textbook.",icon:"🔺",url:"four-pillars-deploy/",tags:["8 Chapters","66 Sections"],sections:["geometry"],totalSections:66,progressPrefix:"four_pillars:",leaderboardUrl:"four-pillars-deploy/#/leaderboard",shortName:"Four Pillars",progressGradient:"linear-gradient(90deg, #ec4899, #f472b6)"},{id:"euclid",title:"Euclid's Elements",description:"The foundational text of Western mathematics. Study all 13 books covering plane geometry, proportions, number theory, and solid geometry through interactive propositions and proofs.",icon:"📜",url:"https://euclid-deploy.vercel.app/",tags:["13 Books","219 Sections"],sections:["featured","seminal","geometry"],totalSections:219,progressPrefix:"euclid:",leaderboardUrl:"https://euclid-deploy.vercel.app/#/leaderboard",shortName:"Elements",progressGradient:"linear-gradient(90deg, #d97706, #f59e0b)"},{id:"gauss",title:"Disquisitiones Arithmeticae",description:"Gauss's foundational 1801 treatise that systematized number theory. Study congruences, quadratic residues, quadratic forms, and the construction of regular polygons.",icon:"🔢",url:"gauss-deploy/",tags:["7 Sections","Number Theory"],sections:["seminal"],totalSections:7,progressPrefix:"gauss:",leaderboardUrl:"gauss-deploy/#/leaderboard",shortName:"Disquisitiones",progressGradient:"linear-gradient(90deg, #d97706, #f59e0b)"},{id:"mom",title:"Men of Mathematics",description:"Journey through 2500 years of mathematical history based on E.T. Bell's classic. From Zeno to Poincaré, discover the lives and ideas of history's greatest mathematicians.",icon:"📜",url:"mom-deploy/",tags:["34 Sections","Interactive"],sections:["history"],totalSections:34,progressPrefix:"mom:",leaderboardUrl:"mom-deploy/#/leaderboard",shortName:"Men of Math",progressGradient:"linear-gradient(90deg, #8b5cf6, #a78bfa)"},{id:"thales",title:"The Heritage of Thales",description:"Journey through 2,500 years of mathematical history and foundations. From ancient Egypt through Greek mathematics, the Renaissance, and into modern foundations including set theory, logic, and category theory.",icon:"🏛️",url:"thales-deploy/",tags:["11 Parts","66 Sections"],sections:["history"],totalSections:66,progressPrefix:"thales:",leaderboardUrl:"thales-deploy/#/leaderboard",shortName:"Heritage of Thales",progressGradient:"linear-gradient(90deg, #f59e0b, #fbbf24)"},{id:"human_action",title:"Human Action",description:"Ludwig von Mises' foundational treatise on economics. A comprehensive study of human action, market processes, and the Austrian school of economic thought.",icon:"📖",url:"human-action-deploy/",tags:["8 Parts","40 Sections"],sections:["austrian"],totalSections:40,progressPrefix:"human_action:",leaderboardUrl:"human-action-deploy/#/leaderboard",shortName:"Human Action",progressGradient:"linear-gradient(90deg, #f59e0b, #fbbf24)"}];function Se(e){return L.filter(t=>t.sections.includes(e))}function Ae(e){const t=e.external?'target="_blank"':"",s=e.tags.map(o=>`<span class="course-tag">${o}</span>`).join("");return`
    <a href="${e.url}" ${t} class="course-card" data-course-id="${e.id}">
      <div class="course-icon">${e.icon}</div>
      <h3 class="course-title">${e.title}</h3>
      <p class="course-description">${e.description}</p>
      <div class="course-meta">${s}</div>
    </a>
  `}function $e(e){const t=Se(e.id);if(t.length===0)return"";const s=t.map(Ae).join("");return`
    <div class="level-section" data-section="${e.id}">
      <div class="level-header">
        <span class="level-badge ${e.style}">${e.title}</span>
        <span class="level-description">${e.subtitle}</span>
      </div>
      <div class="courses-grid level-${e.style}">
        ${s}
      </div>
    </div>
  `}function Ee(e,t={}){const s=document.getElementById(e);if(!s){console.error(`Container #${e} not found`);return}const{insertFeaturedContentAfter:o}=t;let r="";xe.forEach(n=>{r+=$e(n),o&&n.id===o&&(r+=`
        <div class="featured-section">
          <div class="level-header">
            <span class="level-badge featured">Featured</span>
            <span class="level-description">Mathematical wonder</span>
          </div>
          <div id="featured-content-inline"></div>
        </div>
      `)}),s.innerHTML=r}function Ce(e){const t=document.getElementById(e);if(!t){console.error(`Container #${e} not found`);return}const s=L.filter(o=>o.leaderboardUrl).map(o=>{const r=o.external?'target="_blank"':"";return`<a href="${o.leaderboardUrl}" ${r} class="btn btn-secondary btn-small">${o.shortName||o.title}</a>`}).join("");t.innerHTML=s}function Ne(){return L.length}const Ie="magic-internet-math-progress",Pe="nostr-auth";function j(e){return`
    <div class="progress-stats-grid">
      <div class="card progress-stat-card">
        <div class="progress-stat-value" style="color: #f59e0b;" id="total-xp">${e.user.totalXP.toLocaleString()}</div>
        <div class="progress-stat-label">Total XP</div>
      </div>
      <div class="card progress-stat-card">
        <div class="progress-stat-value" style="color: #6366f1;" id="current-level">${e.user.level}</div>
        <div class="progress-stat-label">Level</div>
      </div>
      <div class="card progress-stat-card">
        <div class="progress-stat-value" style="color: #f97316;" id="current-streak">${e.streak?.currentStreak||0}</div>
        <div class="progress-stat-label">Day Streak</div>
      </div>
      <div class="card progress-stat-card">
        <div class="progress-stat-value" style="color: #22c55e;" id="sections-completed">${e.user.sectionsCompleted?.length||0}</div>
        <div class="progress-stat-label">Sections Completed</div>
      </div>
    </div>
  `}function K(e,t){const s=t/e.totalSections*100,o=e.id==="crypto"?"lessons":"sections",r=e.progressGradient||"linear-gradient(90deg, #6366f1, #818cf8)";return`
    <div class="card progress-course-card">
      <h4 class="progress-course-title">${e.title}</h4>
      <div class="hub-progress-bar-container">
        <div class="hub-progress-bar-fill" style="background: ${r}; width: ${s}%;"></div>
      </div>
      <div class="progress-count">${t} / ${e.totalSections} ${o}</div>
    </div>
  `}function ke(e){return`<div class="progress-courses-grid">${L.map(s=>{const o=e.filter(r=>r.startsWith(s.progressPrefix)).length;return K(s,o)}).join("")}</div>`}function Le(){try{const e=localStorage.getItem(Pe);if(e)return JSON.parse(e)}catch(e){console.error("Failed to parse Nostr auth:",e)}return null}function Te(e){return`<div class="progress-courses-grid">${L.map(s=>{const r=e.find(a=>a.courseId===s.id)?.xp||0,n=Math.min(Math.floor(r/50),s.totalSections);return K(s,n)}).join("")}</div>`}async function _e(e){const t=document.getElementById(e);if(!t){console.error(`Container #${e} not found`);return}const s=localStorage.getItem(Ie),o=Le();if(o?.npub&&window.getUserScores)try{const r=await window.getUserScores(o.npub);if(r&&r.scores&&r.scores.length>0){const n=r.scores.reduce((l,c)=>l+(c.xp||0),0),a=Math.floor(n/500)+1,i={user:{totalXP:n,level:a,sectionsCompleted:[]},streak:{currentStreak:0}};t.innerHTML=`
          <h2 class="section-title">Your Progress</h2>
          <p class="section-subtitle">Track your learning journey across all courses</p>
          ${j(i)}
          ${Te(r.scores)}
        `,t.style.display="block";return}}catch(r){console.error("Failed to fetch scores from Firebase:",r)}if(!s){t.style.display="none";return}try{const r=JSON.parse(s);if(!r.user||r.user.totalXP===0){t.style.display="none";return}const n=r.user.sectionsCompleted||[];t.innerHTML=`
      <h2 class="section-title">Your Progress</h2>
      <p class="section-subtitle">Track your learning journey across all courses</p>
      ${j(r)}
      ${ke(n)}
    `,t.style.display="block"}catch(r){console.error("Failed to load progress:",r),t.style.display="none"}}function ze(e){const t=document.getElementById(e);if(!t){console.error(`Container #${e} not found`);return}let s=5,o=null,r=!1,n=null;const a=800,i=300,l={top:50,right:60,left:60},c=100;function g(m,h){const b=a-l.left-l.right,v=a/2,S=b/(2*h+2);return v+m*S}function f(){const m=[];for(let p=-s;p<=s;p++)m.push(p);const h=l.top+30,b=h+c;let v="",S="",H="";m.forEach(p=>{const A=g(p,s),y=g(p,s),w=h+15,x=b-15,N=o===p,T=o!==null?N?1:.2:.6,te=N?2.5:1.5,G=N?"#22d3ee":"#6366f1",re=(w+x)/2;v+=`<path
        d="M ${A} ${w} Q ${A} ${re}, ${y} ${x}"
        stroke="${G}"
        stroke-width="${te}"
        fill="none"
        opacity="${T}"
        class="connection-line"
        data-pair="${p}"
      />`;const _=6;v+=`<polygon
        points="${y},${x} ${y-_},${x-_*1.5} ${y+_},${x-_*1.5}"
        fill="${G}"
        opacity="${T}"
        data-pair="${p}"
      />`}),m.forEach(p=>{const A=g(p,s),y=o===p,w=y?"#22d3ee":"#f1f5f9",x=y?"16":"14",N=y?"700":"500";S+=`<g class="number-group" data-pair="${p}">
        <circle cx="${A}" cy="${h}" r="${y?20:16}" fill="${y?"rgba(34, 211, 238, 0.2)":"rgba(99, 102, 241, 0.15)"}" stroke="${y?"#22d3ee":"#6366f1"}" stroke-width="1.5"/>
        <text x="${A}" y="${h+5}" text-anchor="middle" fill="${w}" font-size="${x}" font-weight="${N}" font-family="Inter, sans-serif">${p}</text>
      </g>`}),m.forEach(p=>{const A=g(p,s),y=p*2,w=o===p,x=w?"#f472b6":"#f1f5f9",N=w?"16":"14",T=w?"700":"500";H+=`<g class="number-group" data-pair="${p}">
        <circle cx="${A}" cy="${b}" r="${w?20:16}" fill="${w?"rgba(244, 114, 182, 0.2)":"rgba(236, 72, 153, 0.15)"}" stroke="${w?"#f472b6":"#ec4899"}" stroke-width="1.5"/>
        <text x="${A}" y="${b+5}" text-anchor="middle" fill="${x}" font-size="${N}" font-weight="${T}" font-family="Inter, sans-serif">${y}</text>
      </g>`});const Y=`
      <text x="${l.left-10}" y="${h+5}" text-anchor="end" fill="#94a3b8" font-size="16" font-weight="600" font-family="Inter, sans-serif">Z</text>
      <text x="${l.left-10}" y="${b+5}" text-anchor="end" fill="#94a3b8" font-size="16" font-weight="600" font-family="Inter, sans-serif">2Z</text>
    `,Z=`
      <text x="${l.left+15}" y="${h+5}" fill="#64748b" font-size="16" font-family="Inter, sans-serif">...</text>
      <text x="${l.left+15}" y="${b+5}" fill="#64748b" font-size="16" font-family="Inter, sans-serif">...</text>
    `,Q=`
      <text x="${a-l.right-15}" y="${h+5}" fill="#64748b" font-size="16" font-family="Inter, sans-serif">...</text>
      <text x="${a-l.right-15}" y="${b+5}" fill="#64748b" font-size="16" font-family="Inter, sans-serif">...</text>
    `,ee=`
      <text x="${a/2}" y="${(h+b)/2+5}" text-anchor="middle" fill="#64748b" font-size="12" font-style="italic" font-family="Inter, sans-serif">f(n) = 2n</text>
    `;return`
      <svg viewBox="0 0 ${a} ${i}" class="cardinality-svg">
        <defs>
          <linearGradient id="line-gradient" x1="0%" y1="0%" x2="0%" y2="100%">
            <stop offset="0%" stop-color="#6366f1"/>
            <stop offset="100%" stop-color="#ec4899"/>
          </linearGradient>
        </defs>
        ${v}
        ${Y}
        ${Z}
        ${Q}
        ${S}
        ${H}
        ${ee}
      </svg>
    `}function u(){const m=2*s+1;t.innerHTML=`
      <div class="featured-viz-card">
        <div class="featured-viz-header">
          <h3 class="featured-viz-title">Integers & Even Integers: Same Size?</h3>
          <p class="featured-viz-subtitle">A mind-bending result from set theory. How is it possible that the set of even integers has the same number as all integers? Intuitively one would think it has half, but they're equal. It also turns out that all infinities are not equal.</p>
        </div>

        <div class="featured-viz-content">
          ${f()}
        </div>

        <div class="featured-viz-controls">
          <div class="control-group">
            <label for="pairs-slider" class="control-label">Show pairs:</label>
            <input type="range" id="pairs-slider" min="1" max="10" value="${s}" class="viz-slider">
            <span class="control-value">${m} pairs</span>
          </div>

          <button id="animate-btn" class="viz-btn ${r?"active":""}">
            ${r?"Stop":"Animate"}
          </button>
        </div>

        <div class="featured-viz-explanation">
          <p>
            <strong>The bijection f(n) = 2n</strong> maps every integer to exactly one even integer,
            and every even integer has exactly one partner. Despite <span class="math">2Z &sub; Z</span>,
            both sets have the same cardinality: <span class="math aleph">&alefsym;<sub>0</sub></span> (aleph-null, countably infinite).
          </p>
          <p class="hint">Hover over any number to highlight its pair!</p>
        </div>
      </div>
    `,$()}function $(){const m=document.getElementById("pairs-slider");m&&m.addEventListener("input",v=>{s=parseInt(v.target.value,10),u()});const h=document.getElementById("animate-btn");h&&h.addEventListener("click",z);const b=t.querySelector(".featured-viz-content");b&&(b.addEventListener("mouseover",v=>{const S=v.target.closest("[data-pair]");S&&(o=parseInt(S.dataset.pair,10),E())}),b.addEventListener("mouseout",v=>{v.target.closest("[data-pair]")&&(o=null,E())}))}function E(){const m=t.querySelector(".featured-viz-content");m&&(m.innerHTML=f())}function z(){r?I():C()}function C(){r=!0,s=1,u(),n=setInterval(()=>{s<10?(s++,u()):I()},800)}function I(){r=!1,n&&(clearInterval(n),n=null),u()}u()}document.addEventListener("DOMContentLoaded",()=>{Ee("courses-container",{insertFeaturedContentAfter:"featured"}),ze("featured-content-inline"),_e("progress-dashboard"),Ce("leaderboard-links");const e=Ne(),t=document.getElementById("courses-subtitle");t&&(t.textContent=`${e} courses organized by subject`)});
