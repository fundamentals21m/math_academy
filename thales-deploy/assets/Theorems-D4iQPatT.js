import{j as e,A as g,m as b}from"./vendor-animation-0o8UKZ_1.js";import{r as c,L as m}from"./vendor-react-Drj8qL0h.js";import{H as x,S as T}from"./Sidebar-CrhpFB_E.js";import{C as v}from"./index-C9u-ZSPx.js";import"./vendor-math-p018AHG0.js";import{M as A}from"./MathBlock-_bBfq7Jh.js";import"./vendor-firebase-core-BXWtuYvb.js";const n=[{id:"th-001",title:"Truncated Pyramid Volume",statement:"The volume of a truncated pyramid with square bases of sides $a$ and $b$ and height $h$ is: $V = \\frac{h}{3}(a^2 + ab + b^2)$.",sectionId:0,sectionTitle:"Egyptian Mathematics",category:"Geometry",type:"theorem"},{id:"th-002",title:"Egyptian Circle Area",statement:"The area of a circle is approximately $\\left(\\frac{8}{9}d\\right)^2 \\approx 3.16r^2$, where $d$ is the diameter.",sectionId:0,sectionTitle:"Egyptian Mathematics",category:"Geometry",type:"theorem"},{id:"th-003",title:"Euclid's Lemma",statement:"Every integer $n > 1$ is divisible by some prime number.",sectionId:2,sectionTitle:"Prime Numbers",category:"Number Theory",type:"lemma",hasProof:!0,proof:`
      Among the divisors of $n$ greater than $1$, let $p$ be the smallest.

      If $p$ had any divisor $d$ with $1 < d < p$, then $d$ would also divide $n$.

      But $p$ is the smallest divisor of $n$ greater than $1$.

      Therefore $p$ has no divisors other than $1$ and itself, so $p$ is prime.
    `},{id:"th-004",title:"Euclid's Theorem on Infinitude of Primes",statement:"Given any finite list of primes $p_1, p_2, \\ldots, p_k$, there exists a prime not on this list.",sectionId:2,sectionTitle:"Prime Numbers",category:"Number Theory",type:"theorem",hasProof:!0,proof:`
      Consider $n = p_1 p_2 \\cdots p_k + 1$.

      By the Lemma, $n$ has some prime divisor $p$.

      But $n \\equiv 1 \\pmod{p_i}$ for each $i$, so $p$ cannot equal any $p_i$.

      Therefore there exists a prime not on the original list.

      Since any finite list can be extended, there are infinitely many primes.
    `},{id:"th-005",title:"Fundamental Theorem of Arithmetic",statement:"Every positive integer greater than $1$ has a unique factorization into prime numbers (up to order).",sectionId:2,sectionTitle:"Prime Numbers",category:"Number Theory",type:"theorem"},{id:"th-006",title:"Sieve of Eratosthenes",statement:"To find all primes up to $n$: list integers $2$ to $n$, then iteratively mark multiples of each unmarked number. Unmarked numbers are prime.",sectionId:2,sectionTitle:"Prime Numbers",category:"Number Theory",type:"theorem"},{id:"th-007",title:"Pythagorean Triple Formula",statement:"If $u > v > 0$ are coprime with opposite parity, then $a = 2uv$, $b = u^2 - v^2$, $c = u^2 + v^2$ gives $a^2 + b^2 = c^2$.",sectionId:4,sectionTitle:"Babylonian Mathematics",category:"Number Theory",type:"theorem",hasProof:!0,proof:`
      Compute: $a^2 + b^2 = (2uv)^2 + (u^2 - v^2)^2$

      $= 4u^2v^2 + u^4 - 2u^2v^2 + v^4$

      $= u^4 + 2u^2v^2 + v^4 = (u^2 + v^2)^2 = c^2$.
    `},{id:"th-008",title:"Sum of Squares Formula",statement:"$1^2 + 2^2 + 3^2 + \\cdots + n^2 = \\frac{n(n+1)(2n+1)}{6}$.",sectionId:4,sectionTitle:"Babylonian Mathematics",category:"Algebra",type:"theorem"},{id:"th-009",title:"Circle Bisected by Diameter",statement:"A circle is bisected by any of its diameters.",sectionId:5,sectionTitle:"Thales of Miletus",category:"Geometry",type:"theorem"},{id:"th-010",title:"Isosceles Triangle Base Angles",statement:"The base angles of an isosceles triangle are equal.",sectionId:5,sectionTitle:"Thales of Miletus",category:"Geometry",type:"theorem",hasProof:!0,proof:`
      Let triangle $ABC$ have $AB = AC$.

      The triangle is congruent to its reflection about the perpendicular bisector of $BC$.

      Under this reflection, $B$ and $C$ swap while $A$ remains fixed.

      Therefore $\\angle ABC = \\angle ACB$.
    `},{id:"th-011",title:"Vertically Opposite Angles",statement:"When two lines intersect, the vertically opposite angles are equal.",sectionId:5,sectionTitle:"Thales of Miletus",category:"Geometry",type:"theorem",hasProof:!0,proof:`
      Let angles $\\alpha$ and $\\beta$ be adjacent angles at the intersection.

      Then $\\alpha + \\beta = 180°$ (straight line).

      The angle vertically opposite to $\\alpha$ also has $\\beta$ as its adjacent angle.

      So opposite angle $= 180° - \\beta = \\alpha$.
    `},{id:"th-012",title:"Thales' Theorem (Angle in Semicircle)",statement:"If $A$, $B$, $C$ are points on a circle and $AC$ is a diameter, then $\\angle ABC = 90°$.",sectionId:5,sectionTitle:"Thales of Miletus",category:"Geometry",type:"theorem",hasProof:!0,proof:`
      Let $O$ be the center of the circle.

      Then $OA = OB = OC = r$ (radii).

      Triangle $OAB$ is isosceles: $\\angle OAB = \\angle OBA = \\alpha$.

      Triangle $OBC$ is isosceles: $\\angle OBC = \\angle OCB = \\beta$.

      In triangle $ABC$: $\\alpha + (\\alpha + \\beta) + \\beta = 180°$.

      Therefore $\\angle ABC = \\alpha + \\beta = 90°$.
    `},{id:"th-013",title:"Triangle Angle Sum",statement:"The sum of the angles in a triangle equals two right angles ($180°$).",sectionId:5,sectionTitle:"Thales of Miletus",category:"Geometry",type:"theorem"},{id:"th-014",title:"Similar Triangles",statement:"Triangles with equal corresponding angles have proportional corresponding sides.",sectionId:5,sectionTitle:"Thales of Miletus",category:"Geometry",type:"theorem"},{id:"th-015",title:"Pythagorean Theorem",statement:"In a right triangle with legs $a$, $b$ and hypotenuse $c$: $a^2 + b^2 = c^2$.",sectionId:6,sectionTitle:"Pythagoras",category:"Geometry",type:"theorem",hasProof:!0,proof:`
      Consider a square of side $a + b$.

      Arrange four congruent right triangles (legs $a$, $b$) inside it.

      The hypotenuses form an inner square of side $c$.

      Area of large square: $(a + b)^2 = a^2 + 2ab + b^2$.

      Area also equals: $4 \\cdot \\frac{1}{2}ab + c^2 = 2ab + c^2$.

      Therefore $a^2 + 2ab + b^2 = 2ab + c^2$, giving $a^2 + b^2 = c^2$.
    `},{id:"th-016",title:"Irrationality of √2",statement:"$\\sqrt{2}$ cannot be expressed as a ratio of integers.",sectionId:6,sectionTitle:"Pythagoras",category:"Number Theory",type:"theorem",hasProof:!0,proof:`
      Suppose $\\sqrt{2} = \\frac{m}{n}$ in lowest terms.

      Then $2n^2 = m^2$, so $m^2$ is even, hence $m$ is even.

      Write $m = 2k$. Then $2n^2 = 4k^2$, so $n^2 = 2k^2$.

      Thus $n^2$ is even, so $n$ is even.

      But if both $m$ and $n$ are even, $\\frac{m}{n}$ was not in lowest terms.

      Contradiction. Therefore $\\sqrt{2}$ is irrational.
    `},{id:"th-017",title:"Sum of Odd Numbers",statement:"$1 + 3 + 5 + \\cdots + (2n-1) = n^2$.",sectionId:6,sectionTitle:"Pythagoras",category:"Algebra",type:"theorem",hasProof:!0,proof:`
      Visualize square numbers with pebbles.

      The $n$-th square can be built from the $(n-1)$-th by adding an L-shaped gnomon.

      This gnomon contains $2n - 1$ pebbles.

      So $n^2 = 1 + 3 + 5 + \\cdots + (2n-1)$.
    `},{id:"th-018",title:"Triangular Numbers",statement:"$1 + 2 + 3 + \\cdots + n = \\frac{n(n+1)}{2}$.",sectionId:6,sectionTitle:"Pythagoras",category:"Algebra",type:"theorem",hasProof:!0,proof:`
      Arrange $n$ rows of pebbles in triangular form.

      Make a copy and rotate it $180°$.

      The two triangles fit together to form a rectangle of dimensions $n \\times (n+1)$.

      Total pebbles in rectangle: $n(n+1)$.

      Each triangle has half: $\\frac{n(n+1)}{2}$.
    `},{id:"th-019",title:"Sum of Cubes",statement:"$1^3 + 2^3 + 3^3 + \\cdots + n^3 = \\left(\\frac{n(n+1)}{2}\\right)^2$.",sectionId:6,sectionTitle:"Pythagoras",category:"Algebra",type:"theorem"},{id:"th-020",title:"The Three Pythagorean Means",statement:"Arithmetic: $\\frac{a+b}{2}$; Geometric: $\\sqrt{ab}$; Harmonic: $\\frac{2ab}{a+b}$.",sectionId:6,sectionTitle:"Pythagoras",category:"Algebra",type:"definition"},{id:"th-021",title:"Amicable Numbers",statement:"Two numbers are amicable if each equals the sum of proper divisors of the other. Example: $220$ and $284$.",sectionId:6,sectionTitle:"Pythagoras",category:"Number Theory",type:"definition"},{id:"th-022",title:"Perfect Number",statement:"A positive integer $n$ is perfect if it equals the sum of its proper divisors: $\\sigma(n) = 2n$.",sectionId:7,sectionTitle:"Perfect Numbers",category:"Number Theory",type:"definition"},{id:"th-023",title:"Euclid's Perfect Number Theorem",statement:"If $2^m - 1$ is prime, then $n = 2^{m-1}(2^m - 1)$ is perfect.",sectionId:7,sectionTitle:"Perfect Numbers",category:"Number Theory",type:"theorem",hasProof:!0,proof:`
      Let $p = 2^m - 1$ be prime and $n = 2^{m-1}p$.

      Divisors of $n$ are: $1, 2, 4, \\ldots, 2^{m-1}, p, 2p, \\ldots, 2^{m-1}p$.

      Sum of divisors: $(1 + 2 + \\cdots + 2^{m-1})(1 + p)$

      $= (2^m - 1)(2^m) = p \\cdot 2^m = 2 \\cdot 2^{m-1} \\cdot p = 2n$.

      Therefore $n$ is perfect.
    `},{id:"th-024",title:"Mersenne Prime",statement:"A prime of the form $2^m - 1$ is called a Mersenne prime. For $2^m - 1$ to be prime, $m$ must be prime.",sectionId:7,sectionTitle:"Perfect Numbers",category:"Number Theory",type:"definition"},{id:"th-025",title:"Euler's Perfect Number Converse",statement:"Every even perfect number has the form $2^{m-1}(2^m - 1)$ where $2^m - 1$ is a Mersenne prime.",sectionId:7,sectionTitle:"Perfect Numbers",category:"Number Theory",type:"theorem"},{id:"th-026",title:"Classification of Platonic Solids",statement:"Exactly five regular convex polyhedra exist: tetrahedron (4 faces), cube (6), octahedron (8), dodecahedron (12), icosahedron (20).",sectionId:8,sectionTitle:"Regular Polyhedra",category:"Geometry",type:"theorem",hasProof:!0,proof:`
      Let each face be a regular $p$-gon with $q$ faces meeting at each vertex.

      Interior angle of $p$-gon: $\\frac{(p-2) \\cdot 180°}{p}$.

      At each vertex, $q$ such angles must sum to less than $360°$:

      $q \\cdot \\frac{(p-2) \\cdot 180°}{p} < 360°$.

      This simplifies to $(p-2)(q-2) < 4$.

      With $p \\geq 3$ and $q \\geq 3$, the only solutions are:

      $(3,3), (3,4), (3,5), (4,3), (5,3)$.
    `},{id:"th-027",title:"Regular Tilings of the Plane",statement:"Exactly three regular tilings of the plane exist: by equilateral triangles, squares, or regular hexagons.",sectionId:8,sectionTitle:"Regular Polyhedra",category:"Geometry",type:"theorem"},{id:"th-028",title:"Euler's Polyhedron Formula",statement:"For any convex polyhedron: $V - E + F = 2$, where $V$ = vertices, $E$ = edges, $F$ = faces.",sectionId:8,sectionTitle:"Regular Polyhedra",category:"Geometry",type:"theorem"},{id:"th-029",title:"Dual Polyhedra",statement:"The dual of a polyhedron is formed by placing vertices at face centers. Cube and octahedron are duals; dodecahedron and icosahedron are duals; tetrahedron is self-dual.",sectionId:8,sectionTitle:"Regular Polyhedra",category:"Geometry",type:"definition"},{id:"th-030",title:"Zeno's Dichotomy",statement:"To travel from $0$ to $1$, one must first reach $\\frac{1}{2}$, then $\\frac{3}{4}$, then $\\frac{7}{8}$, etc. After $n$ steps: $1 - \\frac{1}{2^n}$.",sectionId:10,sectionTitle:"Pre-Socratic Philosophy",category:"Analysis",type:"proposition"},{id:"th-031",title:"Geometric Series",statement:"$\\frac{1}{2} + \\frac{1}{4} + \\frac{1}{8} + \\cdots = 1$. The series converges to finite sum.",sectionId:10,sectionTitle:"Pre-Socratic Philosophy",category:"Analysis",type:"theorem"},{id:"th-032",title:"Volume of Pyramid",statement:"The volume of a pyramid is $\\frac{1}{3} \\times \\text{base area} \\times \\text{height}$.",sectionId:10,sectionTitle:"Pre-Socratic Philosophy",category:"Geometry",type:"theorem"},{id:"th-033",title:"The Axiomatic Method",statement:"Mathematics should be derived from explicit definitions, common notions (axioms), and postulates.",sectionId:15,sectionTitle:"Euclid's Elements",category:"Foundations",type:"definition"},{id:"th-034",title:"Euclid's First Postulate",statement:"A unique straight line can be drawn joining any two points.",sectionId:15,sectionTitle:"Euclid's Elements",category:"Geometry",type:"definition"},{id:"th-035",title:"Euclid's Second Postulate",statement:"A finite straight line can be extended continuously in a straight line.",sectionId:15,sectionTitle:"Euclid's Elements",category:"Geometry",type:"definition"},{id:"th-036",title:"Euclid's Third Postulate",statement:"A circle can be drawn with any center and any radius.",sectionId:15,sectionTitle:"Euclid's Elements",category:"Geometry",type:"definition"},{id:"th-037",title:"Euclid's Fourth Postulate",statement:"All right angles are equal to one another.",sectionId:15,sectionTitle:"Euclid's Elements",category:"Geometry",type:"definition"},{id:"th-038",title:"Euclid's Fifth Postulate (Parallel Postulate)",statement:"If a line crossing two lines makes interior angles on one side less than two right angles, those two lines meet on that side.",sectionId:15,sectionTitle:"Euclid's Elements",category:"Geometry",type:"definition"},{id:"th-039",title:"Equilateral Triangle Construction (Elements I.1)",statement:"Given a finite straight line, an equilateral triangle can be constructed on it.",sectionId:15,sectionTitle:"Euclid's Elements",category:"Geometry",type:"proposition",hasProof:!0,proof:`
      Given segment $AB$.

      Draw circle centered at $A$ with radius $AB$.

      Draw circle centered at $B$ with radius $BA$.

      Let $C$ be an intersection point of the two circles.

      Then $AC = AB$ (radius) and $BC = BA$ (radius).

      Therefore $AB = BC = CA$, so $\\triangle ABC$ is equilateral.
    `},{id:"th-040",title:"Pythagorean Theorem (Elements I.47)",statement:"In right triangles, the square on the hypotenuse equals the sum of squares on the other sides.",sectionId:15,sectionTitle:"Euclid's Elements",category:"Geometry",type:"theorem"},{id:"th-041",title:"Euclidean Algorithm",statement:"To find the GCD of two integers: repeatedly replace the larger by its remainder when divided by the smaller.",sectionId:15,sectionTitle:"Euclid's Elements",category:"Number Theory",type:"theorem"},{id:"th-042",title:"Classification of Quadratic Irrationals",statement:"All quadratic irrationals (numbers of form $\\sqrt{n}$ for non-square $n$) can be systematically classified.",sectionId:15,sectionTitle:"Euclid's Elements",category:"Algebra",type:"theorem"},{id:"th-043",title:"Method of Exhaustion",statement:"To find an area or volume, inscribe and circumscribe regular figures and take limits.",sectionId:20,sectionTitle:"Eudoxus and Archimedes",category:"Analysis",type:"theorem"},{id:"th-044",title:"Archimedes: Area of Circle",statement:"The area of a circle equals that of a triangle with base equal to circumference and height equal to radius: $A = \\pi r^2$.",sectionId:20,sectionTitle:"Eudoxus and Archimedes",category:"Geometry",type:"theorem"},{id:"th-045",title:"Archimedes: Volume of Sphere",statement:"The volume of a sphere is $\\frac{4}{3}\\pi r^3$.",sectionId:20,sectionTitle:"Eudoxus and Archimedes",category:"Geometry",type:"theorem"},{id:"th-046",title:"Archimedes: Surface Area of Sphere",statement:"The surface area of a sphere equals four times the area of a great circle: $S = 4\\pi r^2$.",sectionId:20,sectionTitle:"Eudoxus and Archimedes",category:"Geometry",type:"theorem"},{id:"th-047",title:"Archimedes' Bounds on Pi",statement:"$\\frac{223}{71} < \\pi < \\frac{22}{7}$, i.e., $3.1408 < \\pi < 3.1429$.",sectionId:20,sectionTitle:"Eudoxus and Archimedes",category:"Geometry",type:"theorem"}];function I(){return[...new Set(n.map(r=>r.category).filter(r=>!!r))]}function P(r){const o=r.toLowerCase();return n.filter(a=>a.title.toLowerCase().includes(o)||a.statement.toLowerCase().includes(o))}function B(){const[r,o]=c.useState(!1),[a,h]=c.useState(""),[l,$]=c.useState(null),d=a?P(a):n,p=a?[{category:"Search Results",items:d}]:I().map(i=>({category:i,items:n.filter(s=>s.category===i)})),u=i=>{$(l===i?null:i)},f={theorem:"text-amber-400 bg-amber-500/10",definition:"text-blue-400 bg-blue-500/10",lemma:"text-purple-400 bg-purple-500/10",corollary:"text-green-400 bg-green-500/10",proposition:"text-cyan-400 bg-cyan-500/10"};return e.jsxs("div",{className:"min-h-screen bg-dark-950",children:[e.jsx(x,{onToggleSidebar:()=>o(!r),sidebarOpen:r}),e.jsx(T,{isOpen:r,onClose:()=>o(!1)}),e.jsx("main",{className:"pt-20 pb-12 px-4 lg:pl-80 lg:pr-8",children:e.jsxs("div",{className:"max-w-4xl mx-auto",children:[e.jsx("h1",{className:"text-3xl font-bold text-dark-100 mb-2",children:"Theorems & Definitions"}),e.jsxs("p",{className:"text-dark-400 mb-8",children:["Quick reference for all theorems and definitions in ",v]}),e.jsx("div",{className:"mb-8",children:e.jsx("input",{type:"text",placeholder:"Search theorems and definitions...",value:a,onChange:i=>h(i.target.value),className:"w-full px-4 py-3 rounded-xl bg-dark-800 border border-dark-700 text-dark-100 placeholder-dark-500 focus:outline-none focus:border-primary-500 transition-colors"})}),e.jsx("div",{className:"bg-gradient-to-br from-amber-500/10 to-dark-800/50 border border-amber-500/20 rounded-2xl p-4 mb-8",children:e.jsxs("p",{className:"text-amber-300 text-sm",children:[e.jsx("span",{className:"font-semibold",children:"Tip:"})," Click any theorem to go to its section. Many include expandable proofs with LaTeX!"]})}),e.jsx("div",{className:"space-y-8",children:p.map(({category:i,items:s})=>e.jsxs("div",{className:"space-y-3",children:[e.jsxs("h2",{className:"text-xl font-bold text-dark-200 border-b border-dark-700/50 pb-2 flex items-center gap-3",children:[e.jsx("span",{className:"w-8 h-8 rounded-lg bg-gradient-to-br from-amber-500/20 to-orange-500/10 flex items-center justify-center text-sm font-bold text-amber-400",children:s.length}),i]}),e.jsx("div",{className:"space-y-2",children:s.map(t=>e.jsx(m,{to:`/section/${t.sectionId}`,className:"block group",children:e.jsxs("div",{className:"relative overflow-hidden rounded-xl bg-dark-800/40 border border-dark-700/50 p-4 transition-all duration-200 hover:border-amber-500/30 hover:bg-dark-800/60",children:[e.jsx("div",{className:"absolute left-0 top-0 bottom-0 w-1 bg-gradient-to-b from-amber-500 to-orange-600 opacity-40 group-hover:opacity-100 transition-opacity"}),e.jsxs("div",{className:"pl-3",children:[e.jsxs("div",{className:"flex items-center gap-2 mb-2 flex-wrap",children:[t.type&&e.jsx("span",{className:`text-[10px] font-semibold uppercase tracking-wider px-2 py-0.5 rounded ${f[t.type]||"text-dark-400 bg-dark-700"}`,children:t.type}),e.jsxs("span",{className:"text-[10px] text-dark-500",children:["Section ",t.sectionId]}),t.sectionTitle&&e.jsx("span",{className:"text-[10px] text-dark-600",children:t.sectionTitle}),t.hasProof&&t.proof&&e.jsx("span",{onClick:y=>{y.preventDefault(),u(t.id)},className:"ml-auto text-[10px] text-amber-500/70 font-medium cursor-pointer hover:text-amber-400 transition-colors",children:l===t.id?"Hide Proof":"View Proof"})]}),e.jsx("h3",{className:"font-semibold text-amber-400 group-hover:text-amber-300 transition-colors",children:t.title}),e.jsx("p",{className:"text-sm text-dark-400 mt-1",children:t.statement}),t.hasProof&&t.proof&&e.jsx("div",{className:"mt-3",children:e.jsx(g,{children:l===t.id?e.jsx(b.div,{initial:{height:0,opacity:0},animate:{height:"auto",opacity:1},exit:{height:0,opacity:0},transition:{duration:.3,ease:"easeInOut"},className:"overflow-hidden",children:e.jsxs("div",{className:"pt-4 border-t border-dark-700/50",children:[e.jsx("h4",{className:"text-sm font-semibold text-amber-400 mb-2",children:"Proof:"}),e.jsx(A,{children:t.proof})]})}):null})})]})]})},t.id))})]},i))}),d.length===0&&e.jsx("div",{className:"text-center py-12 text-dark-400",children:"No theorems found matching your search."}),e.jsx("div",{className:"mt-12 pt-8 border-t border-dark-700/50 flex justify-between items-center",children:e.jsxs(m,{to:"/interactive",className:"text-primary-400 hover:text-primary-300 transition-colors flex items-center gap-2",children:[e.jsx("svg",{className:"w-4 h-4",fill:"none",stroke:"currentColor",viewBox:"0 0 24 24",children:e.jsx("path",{strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:2,d:"M12 19l9 2-9-5-9-5 5-2-9 0-9 5 5 9 12 19 19 2 12 0 0 0 9 5-2-9-5-9 0-9 5-9-5 5-2 9 0 9-5"})}),"Interactive Modules"]})})]})})]})}export{B as default};
