import{j as e,A as b,m as y}from"./vendor-animation-CmxkKU9r.js";import{r as c,L as l}from"./vendor-react-DamxDR2H.js";import{H as g,S as v,C as N}from"./index-DxPX284e.js";import"./vendor-math-p018AHG0.js";import{M as j}from"./MathBlock-BL5cXRU1.js";const n=[{id:"thm-fundamental-arithmetic",title:"Fundamental Theorem of Arithmetic",statement:"Every integer greater than 1 can be expressed as a unique product of prime numbers (up to reordering).",sectionId:4,sectionTitle:"Prime Numbers",category:"Number Theory",type:"theorem",hasProof:!0,proof:`
**Existence:** We prove by strong induction. For $n = 2$, we're done (2 is prime). For $n > 2$, either $n$ is prime (done) or $n = ab$ for $1 < a, b < n$. By induction, both $a$ and $b$ have prime factorizations, so their product $n$ does too.

**Uniqueness:** Suppose $n = p_1 p_2 \\cdots p_k = q_1 q_2 \\cdots q_m$. Since $p_1$ divides the left side, it divides the right side. By Euclid's Lemma (if a prime divides a product, it divides at least one factor), $p_1$ divides some $q_j$. Since both are prime, $p_1 = q_j$. Cancel and repeat to show the factorizations are identical up to reordering.
    `},{id:"thm-infinitude-primes",title:"Infinitude of Primes",statement:"There are infinitely many prime numbers.",sectionId:4,sectionTitle:"Prime Numbers",category:"Number Theory",type:"theorem",hasProof:!0,proof:`
**Proof (Euclid, c. 300 BCE):**

Suppose, for contradiction, that there are only finitely many primes: $p_1, p_2, \\ldots, p_n$.

Consider $N = p_1 \\cdot p_2 \\cdots p_n + 1$.

$N$ is either prime or composite:
- If $N$ is prime, then $N$ is a prime not in our list (since $N > p_i$ for all $i$).
- If $N$ is composite, it must have a prime factor $p$. But $N \\equiv 1 \\pmod{p_i}$ for all $i$, so $p \\neq p_i$ for any $i$.

Either way, we have found a prime not in our list. Contradiction.

Therefore, there are infinitely many primes.
    `},{id:"thm-bezout",title:"Bézout's Identity",statement:"For any integers $a$ and $b$ (not both zero), there exist integers $x$ and $y$ such that $ax + by = \\gcd(a, b)$.",sectionId:5,sectionTitle:"Greatest Common Divisor",category:"Number Theory",type:"theorem",hasProof:!0,proof:`
**Proof (by the Extended Euclidean Algorithm):**

We prove by strong induction on $\\min(|a|, |b|)$.

**Base case:** If $b = 0$, then $\\gcd(a, 0) = |a| = a \\cdot 1 + 0 \\cdot 0$, so $x = 1, y = 0$ works.

**Inductive step:** Assume the result holds for all pairs with smaller minimum. By the Euclidean algorithm, $\\gcd(a, b) = \\gcd(b, a \\bmod b)$. 

By induction, there exist $x', y'$ with $bx' + (a \\bmod b)y' = \\gcd(b, a \\bmod b)$.

Since $a \\bmod b = a - \\lfloor a/b \\rfloor \\cdot b$, we get:
$$bx' + (a - \\lfloor a/b \\rfloor \\cdot b)y' = a \\cdot y' + b \\cdot (x' - \\lfloor a/b \\rfloor \\cdot y') = \\gcd(a, b)$$

So $x = y'$ and $y = x' - \\lfloor a/b \\rfloor \\cdot y'$ satisfy $ax + by = \\gcd(a, b)$.
    `},{id:"thm-modular-inverse-existence",title:"Existence of Modular Inverse",statement:"The modular inverse of $a$ modulo $n$ exists if and only if $\\gcd(a, n) = 1$.",sectionId:6,sectionTitle:"Modular Inverse",category:"Modular Arithmetic",type:"theorem",hasProof:!0,proof:`
**(⇒ Direction)** Suppose $a^{-1}$ exists, so $ax \\equiv 1 \\pmod{n}$ for some $x$. 

Then $ax = 1 + kn$ for some integer $k$, meaning $ax - kn = 1$. 

Any common divisor of $a$ and $n$ must divide 1, so $\\gcd(a, n) = 1$.

**(⇐ Direction)** Suppose $\\gcd(a, n) = 1$. 

By Bézout's Identity, there exist integers $x, y$ such that $ax + ny = 1$. 

Taking this mod $n$: $ax \\equiv 1 \\pmod{n}$, so $x$ is the modular inverse of $a$.

This is why the Extended Euclidean Algorithm computes the inverse: it finds the Bézout coefficients!
    `},{id:"thm-euler",title:"Euler's Theorem",statement:"If $\\gcd(a, n) = 1$, then $a^{\\varphi(n)} \\equiv 1 \\pmod{n}$.",sectionId:7,sectionTitle:"Euler's Totient Function",category:"Number Theory",type:"theorem",hasProof:!0,proof:`
**Proof Sketch:**

1. Let $\\{r_1, r_2, \\ldots, r_{\\varphi(n)}\\}$ be the reduced residue system mod $n$ (all integers coprime to $n$ in $[1, n-1]$).

2. Since $\\gcd(a, n) = 1$, the set $\\{a \\cdot r_1, a \\cdot r_2, \\ldots, a \\cdot r_{\\varphi(n)}\\}$ is also a reduced residue system mod $n$ (just permuted).

3. Therefore:
$$(a \\cdot r_1)(a \\cdot r_2) \\cdots (a \\cdot r_{\\varphi(n)}) \\equiv r_1 \\cdot r_2 \\cdots r_{\\varphi(n)} \\pmod{n}$$

4. This gives us:
$$a^{\\varphi(n)} \\cdot (r_1 r_2 \\cdots r_{\\varphi(n)}) \\equiv r_1 r_2 \\cdots r_{\\varphi(n)} \\pmod{n}$$

5. Since each $r_i$ is coprime to $n$, their product is also coprime to $n$. We can cancel it to get:
$$a^{\\varphi(n)} \\equiv 1 \\pmod{n}$$
    `},{id:"thm-fermat-little",title:"Fermat's Little Theorem",statement:"If $p$ is prime and $\\gcd(a, p) = 1$, then $a^{p-1} \\equiv 1 \\pmod{p}$.",sectionId:7,sectionTitle:"Euler's Totient Function",category:"Number Theory",type:"corollary",hasProof:!0,proof:`
This is a special case of Euler's Theorem.

For a prime $p$, we have $\\varphi(p) = p - 1$ (every integer from 1 to $p-1$ is coprime to $p$).

By Euler's Theorem, if $\\gcd(a, p) = 1$:
$$a^{\\varphi(p)} = a^{p-1} \\equiv 1 \\pmod{p}$$
    `},{id:"thm-rsa-correctness",title:"RSA Correctness",statement:"For properly chosen $e$ and $d$, decryption correctly recovers the original message: $m^{ed} \\equiv m \\pmod{n}$.",sectionId:10,sectionTitle:"RSA Encryption",category:"Cryptographic Protocols",type:"theorem",hasProof:!0,proof:`
**Setup:** Let $n = pq$ for distinct primes $p, q$. Let $e$ be coprime to $\\varphi(n) = (p-1)(q-1)$, and let $d = e^{-1} \\pmod{\\varphi(n)}$.

This means $ed = 1 + k \\cdot \\varphi(n)$ for some integer $k$.

**Proof:**

We need to show $m^{ed} \\equiv m \\pmod{n}$ for any message $m$ with $0 \\leq m < n$.

$$m^{ed} = m^{1 + k \\cdot \\varphi(n)} = m \\cdot (m^{\\varphi(n)})^k$$

**Case 1:** If $\\gcd(m, n) = 1$, by Euler's Theorem:
$$m^{\\varphi(n)} \\equiv 1 \\pmod{n}$$
So $m^{ed} = m \\cdot 1^k = m \\pmod{n}$.

**Case 2:** If $\\gcd(m, n) \\neq 1$, then $m$ is divisible by $p$ or $q$ (or both).

If $p | m$ but $q \\nmid m$: By Fermat's Little Theorem, $m^{q-1} \\equiv 1 \\pmod{q}$.
So $m^{ed} \\equiv m \\pmod{q}$ and $m^{ed} \\equiv 0 \\equiv m \\pmod{p}$.
By CRT, $m^{ed} \\equiv m \\pmod{n}$.

Similar argument for other cases.
    `}];function k(){return[...new Set(n.map(o=>o.category).filter(Boolean))]}function T(o){const s=o.toLowerCase();return n.filter(i=>i.title.toLowerCase().includes(s)||i.statement.toLowerCase().includes(s))}function E(){const[o,s]=c.useState(!1),[i,$]=c.useState(""),[d,p]=c.useState(null),m=i?T(i):n,h=i?[{category:"Search Results",items:m}]:k().map(r=>({category:r,items:n.filter(a=>a.category===r)})),u=r=>{p(d===r?null:r)},f={theorem:"text-amber-400 bg-amber-500/10",definition:"text-blue-400 bg-blue-500/10",lemma:"text-purple-400 bg-purple-500/10",corollary:"text-green-400 bg-green-500/10",proposition:"text-cyan-400 bg-cyan-500/10"};return e.jsxs("div",{className:"min-h-screen bg-dark-950",children:[e.jsx(g,{onToggleSidebar:()=>s(!o),sidebarOpen:o}),e.jsx(v,{isOpen:o,onClose:()=>s(!1)}),e.jsx("main",{className:"pt-20 pb-12 px-4 lg:pl-80 lg:pr-8",children:e.jsxs("div",{className:"max-w-4xl mx-auto",children:[e.jsx("h1",{className:"text-3xl font-bold text-dark-100 mb-2",children:"Theorems & Definitions"}),e.jsxs("p",{className:"text-dark-400 mb-8",children:["Quick reference for all theorems and definitions in ",N]}),e.jsx("div",{className:"mb-8",children:e.jsx("input",{type:"text",placeholder:"Search theorems and definitions...",value:i,onChange:r=>$(r.target.value),className:"w-full px-4 py-3 rounded-xl bg-dark-800 border border-dark-700 text-dark-100 placeholder-dark-500 focus:outline-none focus:border-primary-500 transition-colors"})}),e.jsx("div",{className:"bg-gradient-to-br from-amber-500/10 to-dark-800/50 border border-amber-500/20 rounded-2xl p-4 mb-8",children:e.jsxs("p",{className:"text-amber-300 text-sm",children:[e.jsx("span",{className:"font-semibold",children:"Tip:"})," Click any theorem to go to its section. Many include expandable proofs with LaTeX!"]})}),e.jsx("div",{className:"space-y-8",children:h.map(({category:r,items:a})=>e.jsxs("div",{className:"space-y-3",children:[e.jsxs("h2",{className:"text-xl font-bold text-dark-200 border-b border-dark-700/50 pb-2 flex items-center gap-3",children:[e.jsx("span",{className:"w-8 h-8 rounded-lg bg-gradient-to-br from-amber-500/20 to-orange-500/10 flex items-center justify-center text-sm font-bold text-amber-400",children:a.length}),r]}),e.jsx("div",{className:"space-y-2",children:a.map(t=>e.jsx(l,{to:`/section/${t.sectionId}`,className:"block group",children:e.jsxs("div",{className:"relative overflow-hidden rounded-xl bg-dark-800/40 border border-dark-700/50 p-4 transition-all duration-200 hover:border-amber-500/30 hover:bg-dark-800/60",children:[e.jsx("div",{className:"absolute left-0 top-0 bottom-0 w-1 bg-gradient-to-b from-amber-500 to-orange-600 opacity-40 group-hover:opacity-100 transition-opacity"}),e.jsxs("div",{className:"pl-3",children:[e.jsxs("div",{className:"flex items-center gap-2 mb-2 flex-wrap",children:[t.type&&e.jsx("span",{className:`text-[10px] font-semibold uppercase tracking-wider px-2 py-0.5 rounded ${f[t.type]||"text-dark-400 bg-dark-700"}`,children:t.type}),e.jsxs("span",{className:"text-[10px] text-dark-500",children:["Section ",t.sectionId]}),t.sectionTitle&&e.jsx("span",{className:"text-[10px] text-dark-600",children:t.sectionTitle}),t.hasProof&&t.proof&&e.jsx("span",{onClick:x=>{x.preventDefault(),u(t.id)},className:"ml-auto text-[10px] text-amber-500/70 font-medium cursor-pointer hover:text-amber-400 transition-colors",children:d===t.id?"Hide Proof":"View Proof"})]}),e.jsx("h3",{className:"font-semibold text-amber-400 group-hover:text-amber-300 transition-colors",children:t.title}),e.jsx("p",{className:"text-sm text-dark-400 mt-1",children:t.statement}),t.hasProof&&t.proof&&e.jsx("div",{className:"mt-3",children:e.jsx(b,{children:d===t.id?e.jsx(y.div,{initial:{height:0,opacity:0},animate:{height:"auto",opacity:1},exit:{height:0,opacity:0},transition:{duration:.3,ease:"easeInOut"},className:"overflow-hidden",children:e.jsxs("div",{className:"pt-4 border-t border-dark-700/50",children:[e.jsx("h4",{className:"text-sm font-semibold text-amber-400 mb-2",children:"Proof:"}),e.jsx(j,{children:t.proof})]})}):null})})]})]})},t.id))})]},r))}),m.length===0&&e.jsx("div",{className:"text-center py-12 text-dark-400",children:"No theorems found matching your search."}),e.jsx("div",{className:"mt-12 pt-8 border-t border-dark-700/50 flex justify-between items-center",children:e.jsxs(l,{to:"/interactive",className:"text-primary-400 hover:text-primary-300 transition-colors flex items-center gap-2",children:[e.jsx("svg",{className:"w-4 h-4",fill:"none",stroke:"currentColor",viewBox:"0 0 24 24",children:e.jsx("path",{strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:2,d:"M12 19l9 2-9-5-9-5 5-2-9 0-9 5 5 9 12 19 19 2 12 0 0 0 9 5-2-9-5-9 0-9 5-9-5 5-2 9 0 9-5"})}),"Interactive Modules"]})})]})})]})}export{E as default};
