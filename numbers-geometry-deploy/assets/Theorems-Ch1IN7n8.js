import{j as e,A as y,m as b}from"./vendor-animation-0o8UKZ_1.js";import{r as l,L as d}from"./vendor-react-Drj8qL0h.js";import{H as T,S as x}from"./Sidebar-_CtYZ2LQ.js";import{C as _}from"./index-DpGWsfAG.js";import"./vendor-math-p018AHG0.js";import{M as k}from"./MathBlock-uz1iP4cD.js";import"./vendor-firebase-core-BXWtuYvb.js";const s=[{id:"ng-001",title:"Irrationality of √2",statement:"There are no natural numbers $m$ and $n$ such that $m^2 = 2n^2$.",sectionId:0,sectionTitle:"The Natural Numbers",category:"Foundations",type:"theorem",hasProof:!0,proof:`
      Assume $m^2 = 2n^2$ for natural numbers $m$ and $n$.

      Then $m^2$ is even, so $m$ must be even. Write $m = 2m_1$.

      Substituting: $(2m_1)^2 = 2n^2$, which gives $4m_1^2 = 2n^2$, so $2m_1^2 = n^2$.

      Thus $n^2$ is even, so $n$ must be even. Write $n = 2n_1$.

      Now $m_1^2 = 2n_1^2$ with $m > m_1 > 0$ and $n > n_1 > 0$.

      This creates an infinite descending sequence of natural numbers, which is impossible.

      Therefore, no such $m$ and $n$ exist.
    `},{id:"ng-002",title:"Principle of Infinite Descent",statement:"There is no infinite descending sequence of natural numbers: $n_1 > n_2 > n_3 > \\cdots$ is impossible.",sectionId:0,sectionTitle:"The Natural Numbers",category:"Foundations",type:"theorem"},{id:"ng-003",title:"Egyptian Fraction Representation",statement:"Any fraction $\\frac{a}{b}$ between $0$ and $1$ can be written as a sum of distinct unit fractions (fractions of the form $\\frac{1}{n}$).",sectionId:0,sectionTitle:"The Natural Numbers",category:"Foundations",type:"theorem",hasProof:!0,proof:`
      Use Fibonacci's greedy algorithm: repeatedly find the largest unit fraction less than the remainder.

      Given $\\frac{a}{b}$, find the largest $n$ such that $\\frac{1}{n} \\leq \\frac{a}{b}$.

      Compute $\\frac{a}{b} - \\frac{1}{n} = \\frac{an - b}{bn}$.

      The numerator of this remainder is strictly less than $a$.

      By infinite descent on the numerator, the process terminates with a sum of unit fractions.
    `},{id:"ng-004",title:"Division Property",statement:"For any natural numbers $a$ and $b$, we can write $a = qb + r$, where $0 \\leq r < b$.",sectionId:1,sectionTitle:"Division and Primes",category:"Number Theory",type:"theorem",hasProof:!0,proof:`
      Consider the set of non-negative remainders $\\{a - qb : q \\in \\mathbb{Z}, a - qb \\geq 0\\}$.

      This set is non-empty (take $q = 0$) and bounded below by $0$.

      By the well-ordering principle, there exists a smallest such remainder $r = a - qb$.

      If $r \\geq b$, then $a - (q+1)b = r - b \\geq 0$ would be smaller, contradiction.

      Therefore $0 \\leq r < b$.
    `},{id:"ng-005",title:"Prime Number",statement:"A natural number $p > 1$ is prime if its only divisors are $1$ and $p$.",sectionId:1,sectionTitle:"Division and Primes",category:"Number Theory",type:"definition"},{id:"ng-006",title:"Mersenne Prime Condition",statement:"If $2^m - 1$ is prime, then $m$ must be prime.",sectionId:1,sectionTitle:"Division and Primes",category:"Number Theory",type:"proposition",hasProof:!0,proof:`
      Suppose $m = np$ is composite with $n, p > 1$.

      Then $2^m - 1 = 2^{np} - 1 = (2^n)^p - 1$.

      Using the factorization $x^p - 1 = (x-1)(x^{p-1} + x^{p-2} + \\cdots + 1)$:

      $2^{np} - 1 = (2^n - 1)(2^{n(p-1)} + 2^{n(p-2)} + \\cdots + 1)$.

      Since $2^n - 1 > 1$ when $n > 1$, this shows $2^m - 1$ is composite.

      Therefore, if $2^m - 1$ is prime, $m$ must be prime.
    `},{id:"ng-007",title:"Fermat Prime Condition",statement:"If $2^n + 1$ is prime, then $n$ must be a power of $2$.",sectionId:1,sectionTitle:"Division and Primes",category:"Number Theory",type:"proposition",hasProof:!0,proof:`
      Suppose $n$ has an odd divisor $k > 1$, so $n = km$ for some $m$.

      Using the factorization for odd $k$: $x^k + 1 = (x+1)(x^{k-1} - x^{k-2} + \\cdots + 1)$:

      $2^n + 1 = 2^{km} + 1 = (2^m)^k + 1 = (2^m + 1)(\\cdots)$.

      Since $2^m + 1 > 1$, this shows $2^n + 1$ is composite.

      Therefore $n$ can have no odd divisors greater than $1$, so $n = 2^j$ for some $j$.
    `},{id:"ng-008",title:"Euclid's Theorem (Infinitely Many Primes)",statement:"There are infinitely many primes.",sectionId:2,sectionTitle:"The Sequence of Primes",category:"Number Theory",type:"theorem",hasProof:!0,proof:`
      Suppose there are only finitely many primes: $p_1, p_2, \\ldots, p_k$.

      Consider $n = p_1 p_2 \\cdots p_k + 1$.

      Since $n > 1$, it has a prime divisor $p$.

      But $n \\equiv 1 \\pmod{p_i}$ for each $i$, so $p$ cannot be any of $p_1, \\ldots, p_k$.

      This contradicts our assumption that we listed all primes.

      Therefore, there are infinitely many primes.
    `},{id:"ng-009",title:"Infinitely Many Primes of Form 4n + 3",statement:"There are infinitely many primes of the form $4n + 3$.",sectionId:2,sectionTitle:"The Sequence of Primes",category:"Number Theory",type:"theorem",hasProof:!0,proof:`
      Suppose there are only finitely many such primes: $p_1, p_2, \\ldots, p_k$.

      Consider $N = 4p_1 p_2 \\cdots p_k - 1 = 4(p_1 \\cdots p_k - 1) + 3$.

      This $N$ is of the form $4n + 3$.

      Key observation: the product of numbers of form $4a + 1$ is again $4b + 1$.

      Since $N \\equiv 3 \\pmod 4$, at least one prime factor of $N$ must be $\\equiv 3 \\pmod 4$.

      But $N \\equiv -1 \\pmod{p_i}$ for each $i$, so this prime is not among $p_1, \\ldots, p_k$.

      Contradiction. Therefore infinitely many primes have form $4n + 3$.
    `},{id:"ng-010",title:"Dirichlet's Theorem",statement:"Any arithmetic sequence $an + b$ with $\\gcd(a,b) = 1$ contains infinitely many primes.",sectionId:2,sectionTitle:"The Sequence of Primes",category:"Number Theory",type:"theorem"},{id:"ng-011",title:"The Integers",statement:"$\\mathbb{Z} = \\{\\ldots, -3, -2, -1, 0, 1, 2, 3, \\ldots\\}$ formed by adjoining $0$ and negatives to natural numbers.",sectionId:3,sectionTitle:"Integers and Rationals",category:"Algebra",type:"definition"},{id:"ng-012",title:"Ring Properties of ℤ",statement:"Addition and multiplication on $\\mathbb{Z}$ satisfy: associativity, commutativity, identity elements ($0$ and $1$), additive inverses, and distributivity.",sectionId:3,sectionTitle:"Integers and Rationals",category:"Algebra",type:"definition"},{id:"ng-013",title:"Product of Negatives",statement:"$(-1) \\times (-1) = 1$",sectionId:3,sectionTitle:"Integers and Rationals",category:"Algebra",type:"theorem",hasProof:!0,proof:`
      First show that $a \\times (-1) = -a$ for all integers $a$:

      $a + a \\times (-1) = a \\times 1 + a \\times (-1) = a \\times (1 + (-1)) = a \\times 0 = 0$.

      Therefore $a \\times (-1) = -a$.

      Applying this with $a = -1$:

      $(-1) \\times (-1) = -(-1) = 1$.
    `},{id:"ng-014",title:"The Rationals",statement:"$\\mathbb{Q}$ extends $\\mathbb{Z}$ by adjoining multiplicative inverses $a^{-1}$ for each nonzero integer $a$.",sectionId:3,sectionTitle:"Integers and Rationals",category:"Algebra",type:"definition"},{id:"ng-015",title:"Ring",statement:"A ring is a set with operations $+$ and $\\times$ satisfying: associativity, commutativity, distributivity, identity elements, and additive inverses.",sectionId:3,sectionTitle:"Integers and Rationals",category:"Algebra",type:"definition"},{id:"ng-016",title:"Field",statement:"A field is a ring where every nonzero element has a multiplicative inverse.",sectionId:3,sectionTitle:"Integers and Rationals",category:"Algebra",type:"definition"},{id:"ng-017",title:"The Euclidean Algorithm",statement:"Given natural numbers $a$ and $b$, repeatedly compute $(a_{i+1}, b_{i+1}) = (\\max(a_i,b_i) - \\min(a_i,b_i), \\min(a_i,b_i))$ until $a_k = b_k$; then $\\gcd(a,b) = a_k$.",sectionId:4,sectionTitle:"Linear Equations and the GCD",category:"Number Theory",type:"theorem",hasProof:!0,proof:`
      The algorithm terminates by infinite descent: each step reduces $\\max(a_i, b_i)$.

      Key observation: $\\gcd(a - b, b) = \\gcd(a, b)$ for $a > b$.

      Proof: If $d$ divides both $a$ and $b$, then $d$ divides $a - b$.
      Conversely, if $d$ divides $a - b$ and $b$, then $d$ divides $a = (a-b) + b$.

      Therefore the gcd is preserved at each step.

      When $a_k = b_k$, we have $\\gcd(a_k, b_k) = a_k$.
    `},{id:"ng-018",title:"Linear Representation of GCD",statement:"For any integers $a$ and $b$, there exist integers $x$ and $y$ such that $\\gcd(a,b) = ax + by$.",sectionId:4,sectionTitle:"Linear Equations and the GCD",category:"Number Theory",type:"theorem",hasProof:!0,proof:`
      Track back through the Euclidean algorithm.

      Initially, $a = a \\cdot 1 + b \\cdot 0$ and $b = a \\cdot 0 + b \\cdot 1$.

      Each step: if $a_i = ax_1 + by_1$ and $b_i = ax_2 + by_2$, then
      $a_i - b_i = a(x_1 - x_2) + b(y_1 - y_2)$.

      So every number appearing in the algorithm has form $ax + by$.

      In particular, $\\gcd(a,b) = ax + by$ for some integers $x, y$.
    `},{id:"ng-019",title:"Solvability of Linear Diophantine Equations",statement:"The equation $ax + by = c$ has integer solutions if and only if $\\gcd(a,b)$ divides $c$.",sectionId:4,sectionTitle:"Linear Equations and the GCD",category:"Number Theory",type:"theorem",hasProof:!0,proof:`
      (⟹) If $x, y$ are solutions, then $\\gcd(a,b)$ divides $ax + by = c$.

      (⟸) Suppose $d = \\gcd(a,b)$ divides $c$. Write $c = dk$.

      By the Linear Representation Theorem, $d = ax_0 + by_0$ for some integers.

      Then $c = dk = a(kx_0) + b(ky_0)$.

      So $x = kx_0$ and $y = ky_0$ is a solution.
    `},{id:"ng-020",title:"Prime Divisor Property",statement:"If prime $p$ divides $ab$, then $p$ divides $a$ or $p$ divides $b$ (or both).",sectionId:5,sectionTitle:"Unique Prime Factorization",category:"Number Theory",type:"theorem",hasProof:!0,proof:`
      Suppose $p \\nmid a$. Since $p$ is prime, $\\gcd(a, p) = 1$.

      By the Linear Representation Theorem, $1 = ax + py$ for some integers.

      Multiply both sides by $b$: $b = abx + pby$.

      Since $p | ab$, we have $p | abx$. Also $p | pby$.

      Therefore $p | (abx + pby) = b$.
    `},{id:"ng-021",title:"Fundamental Theorem of Arithmetic",statement:"Each natural number greater than $1$ has a unique prime factorization (up to order).",sectionId:5,sectionTitle:"Unique Prime Factorization",category:"Number Theory",type:"theorem",hasProof:!0,proof:`
      Existence: If $n$ is prime, we're done. Otherwise $n = ab$ with $1 < a, b < n$.
      By infinite descent, $a$ and $b$ factor into primes, so $n$ does too.

      Uniqueness: Suppose $n = p_1 p_2 \\cdots p_k = q_1 q_2 \\cdots q_m$.

      Then $p_1 | q_1 q_2 \\cdots q_m$.

      By the Prime Divisor Property, $p_1 | q_j$ for some $j$.

      Since both are prime, $p_1 = q_j$.

      Cancel $p_1$ and repeat by infinite descent on $n$.
    `},{id:"ng-022",title:"Irrationality of √n",statement:"$\\sqrt{n}$ is irrational unless $n$ is a perfect square.",sectionId:5,sectionTitle:"Unique Prime Factorization",category:"Number Theory",type:"theorem",hasProof:!0,proof:`
      Suppose $\\sqrt{n} = \\frac{m}{k}$ in lowest terms.

      Then $nk^2 = m^2$.

      By unique prime factorization, each prime appears an even number of times in $m^2$ and $k^2$.

      So each prime in $nk^2$ appears: (times in $n$) + (even number).

      For this to equal $m^2$ (all even), each prime must appear an even number of times in $n$.

      Therefore $n$ is a perfect square.
    `},{id:"ng-023",title:"Divisors from Prime Factorization",statement:"If $n = p_1^{e_1} p_2^{e_2} \\cdots p_k^{e_k}$, then divisors of $n$ are exactly $p_1^{d_1} \\cdots p_k^{d_k}$ where $0 \\leq d_i \\leq e_i$.",sectionId:6,sectionTitle:"More on Prime Factorization",category:"Number Theory",type:"theorem",hasProof:!0,proof:`
      By unique factorization, any divisor $d | n$ must have $d = p_1^{d_1} \\cdots p_k^{d_k}$.

      For $d | n$, we need $n/d$ to be a positive integer.

      $\\frac{n}{d} = p_1^{e_1 - d_1} \\cdots p_k^{e_k - d_k}$.

      This is a positive integer iff $e_i - d_i \\geq 0$ for all $i$, i.e., $d_i \\leq e_i$.
    `},{id:"ng-024",title:"Number of Divisors Formula",statement:"If $n = p_1^{e_1} \\cdots p_k^{e_k}$, then $\\tau(n) = (e_1 + 1)(e_2 + 1) \\cdots (e_k + 1)$.",sectionId:6,sectionTitle:"More on Prime Factorization",category:"Number Theory",type:"theorem",hasProof:!0,proof:`
      Each divisor is determined by choosing exponents $d_1, \\ldots, d_k$.

      For $d_i$, there are $e_i + 1$ choices: $0, 1, 2, \\ldots, e_i$.

      By the multiplication principle, total divisors = $(e_1 + 1)(e_2 + 1) \\cdots (e_k + 1)$.
    `},{id:"ng-025",title:"GCD from Prime Factorizations",statement:"If $m = \\prod p_i^{e_i}$ and $n = \\prod p_i^{f_i}$, then $\\gcd(m,n) = \\prod p_i^{\\min(e_i, f_i)}$.",sectionId:6,sectionTitle:"More on Prime Factorization",category:"Number Theory",type:"theorem"},{id:"ng-026",title:"LCM from Prime Factorizations",statement:"If $m = \\prod p_i^{e_i}$ and $n = \\prod p_i^{f_i}$, then $\\text{lcm}(m,n) = \\prod p_i^{\\max(e_i, f_i)}$.",sectionId:6,sectionTitle:"More on Prime Factorization",category:"Number Theory",type:"theorem"},{id:"ng-027",title:"GCD-LCM Product Formula",statement:"$\\gcd(m,n) \\times \\text{lcm}(m,n) = m \\times n$.",sectionId:6,sectionTitle:"More on Prime Factorization",category:"Number Theory",type:"theorem",hasProof:!0,proof:`
      For each prime $p$, let $e$ and $f$ be its exponents in $m$ and $n$.

      In $\\gcd \\times \\text{lcm}$, power of $p$ is $\\min(e,f) + \\max(e,f) = e + f$.

      In $m \\times n$, power of $p$ is $e + f$.

      Since this holds for all primes, $\\gcd(m,n) \\times \\text{lcm}(m,n) = mn$.
    `},{id:"ng-028",title:"Perfect Number",statement:"A natural number $n$ is perfect if it equals the sum of its proper divisors.",sectionId:6,sectionTitle:"More on Prime Factorization",category:"Number Theory",type:"definition"},{id:"ng-029",title:"Euclid's Perfect Number Theorem",statement:"If $p = 2^n - 1$ is prime (Mersenne prime), then $2^{n-1} \\cdot p$ is perfect.",sectionId:6,sectionTitle:"More on Prime Factorization",category:"Number Theory",type:"theorem",hasProof:!0,proof:`
      Let $N = 2^{n-1}(2^n - 1)$ where $p = 2^n - 1$ is prime.

      Sum of divisors of $N$ is $(1 + 2 + \\cdots + 2^{n-1})(1 + p) = (2^n - 1)(2^n)$.

      $= 2^n(2^n - 1) = 2 \\cdot 2^{n-1}(2^n - 1) = 2N$.

      Sum of proper divisors = $2N - N = N$, so $N$ is perfect.
    `},{id:"ng-030",title:"Euler's Converse",statement:"Every even perfect number has the form $2^{n-1}(2^n - 1)$ where $2^n - 1$ is prime.",sectionId:6,sectionTitle:"More on Prime Factorization",category:"Number Theory",type:"theorem"},{id:"ng-031",title:"Principle of Mathematical Induction",statement:"To prove $S(n)$ for all natural numbers: (1) prove $S(1)$, (2) prove $S(i) \\Rightarrow S(i+1)$. Then $S(n)$ holds for all $n$.",sectionId:7,sectionTitle:"Mathematical Induction",category:"Foundations",type:"theorem"},{id:"ng-032",title:"Sum of First n Natural Numbers",statement:"$1 + 2 + \\cdots + n = \\frac{n(n+1)}{2}$.",sectionId:7,sectionTitle:"Mathematical Induction",category:"Arithmetic",type:"theorem",hasProof:!0,proof:`
      Base case: $n = 1$: $1 = \\frac{1 \\cdot 2}{2} = 1$. ✓

      Inductive step: Assume $1 + 2 + \\cdots + k = \\frac{k(k+1)}{2}$.

      Then $1 + 2 + \\cdots + k + (k+1) = \\frac{k(k+1)}{2} + (k+1)$

      $= \\frac{k(k+1) + 2(k+1)}{2} = \\frac{(k+1)(k+2)}{2}$.

      This is the formula for $n = k+1$. ✓
    `},{id:"ng-033",title:"Sum of Squares",statement:"$1^2 + 2^2 + \\cdots + n^2 = \\frac{n(n+1)(2n+1)}{6}$.",sectionId:7,sectionTitle:"Mathematical Induction",category:"Arithmetic",type:"theorem",hasProof:!0,proof:`
      Base case: $n = 1$: $1 = \\frac{1 \\cdot 2 \\cdot 3}{6} = 1$. ✓

      Inductive step: Assume the formula holds for $k$.

      $1^2 + \\cdots + k^2 + (k+1)^2 = \\frac{k(k+1)(2k+1)}{6} + (k+1)^2$

      $= \\frac{(k+1)[k(2k+1) + 6(k+1)]}{6} = \\frac{(k+1)(2k^2 + 7k + 6)}{6}$

      $= \\frac{(k+1)(k+2)(2k+3)}{6}$.

      This is the formula for $n = k+1$. ✓
    `},{id:"ng-034",title:"Sum of Cubes",statement:"$1^3 + 2^3 + \\cdots + n^3 = \\left[\\frac{n(n+1)}{2}\\right]^2$.",sectionId:7,sectionTitle:"Mathematical Induction",category:"Arithmetic",type:"theorem",hasProof:!0,proof:`
      The sum of cubes equals the square of the sum of integers.

      Base case: $n = 1$: $1 = 1^2$. ✓

      Inductive step: Assume $1^3 + \\cdots + k^3 = \\left[\\frac{k(k+1)}{2}\\right]^2$.

      $1^3 + \\cdots + k^3 + (k+1)^3 = \\left[\\frac{k(k+1)}{2}\\right]^2 + (k+1)^3$

      $= (k+1)^2 \\left[\\frac{k^2}{4} + (k+1)\\right] = (k+1)^2 \\cdot \\frac{k^2 + 4k + 4}{4}$

      $= (k+1)^2 \\cdot \\frac{(k+2)^2}{4} = \\left[\\frac{(k+1)(k+2)}{2}\\right]^2$. ✓
    `},{id:"ng-035",title:"Geometric Series",statement:"$1 + r + r^2 + \\cdots + r^n = \\frac{1 - r^{n+1}}{1 - r}$ for $r \\neq 1$.",sectionId:7,sectionTitle:"Mathematical Induction",category:"Arithmetic",type:"theorem",hasProof:!0,proof:`
      Let $S = 1 + r + r^2 + \\cdots + r^n$.

      Then $rS = r + r^2 + \\cdots + r^{n+1}$.

      Subtracting: $S - rS = 1 - r^{n+1}$.

      Therefore $S(1 - r) = 1 - r^{n+1}$, so $S = \\frac{1 - r^{n+1}}{1 - r}$.
    `},{id:"ng-036",title:"Inductive Definition",statement:"A function $f$ on natural numbers can be defined by: (1) specifying $f(1)$, (2) defining $f(i+1)$ in terms of $f(i)$.",sectionId:8,sectionTitle:"Foundations",category:"Foundations",type:"theorem"},{id:"ng-037",title:"Inductive Definition of Addition",statement:"$m + 1 = S(m)$ (successor); $m + S(i) = S(m + i)$.",sectionId:8,sectionTitle:"Foundations",category:"Foundations",type:"definition"},{id:"ng-038",title:"Inductive Definition of Multiplication",statement:"$m \\times 1 = m$; $m \\times S(i) = m \\times i + m$.",sectionId:8,sectionTitle:"Foundations",category:"Foundations",type:"definition"},{id:"ng-039",title:"Von Neumann's Natural Numbers",statement:"$0 = \\emptyset$; $1 = \\{0\\}$; $2 = \\{0, 1\\}$; $n = \\{0, 1, \\ldots, n-1\\}$. Then $m < n$ iff $m \\in n$.",sectionId:8,sectionTitle:"Foundations",category:"Foundations",type:"definition"},{id:"ng-040",title:"Axiom of Infinity",statement:"There exists a set $\\Omega$ containing $\\emptyset$ and closed under the successor operation $X \\mapsto X \\cup \\{X\\}$.",sectionId:8,sectionTitle:"Foundations",category:"Foundations",type:"theorem"},{id:"ng-041",title:"Pythagorean Theorem",statement:"In a right triangle with legs $a$, $b$ and hypotenuse $c$: $a^2 + b^2 = c^2$.",sectionId:10,sectionTitle:"Geometry Begins",category:"Geometry",type:"theorem",hasProof:!0,proof:`
      Consider a square of side $a + b$.

      Arrange four right triangles (legs $a$, $b$) inside, with hypotenuses forming an inner square.

      Area of large square: $(a + b)^2 = a^2 + 2ab + b^2$.

      Area also equals: 4 triangles + inner square = $4 \\cdot \\frac{ab}{2} + c^2 = 2ab + c^2$.

      Therefore $a^2 + 2ab + b^2 = 2ab + c^2$, so $a^2 + b^2 = c^2$.
    `},{id:"ng-042",title:"Thales' Theorem",statement:"If $AB$ is a diameter of a circle and $C$ is any other point on the circle, then $\\angle ACB = 90°$.",sectionId:10,sectionTitle:"Geometry Begins",category:"Geometry",type:"theorem",hasProof:!0,proof:`
      Let $O$ be the center of the circle.

      Then $OA = OB = OC = r$ (radii).

      Triangle $OAC$ is isosceles, so $\\angle OAC = \\angle OCA = \\alpha$.

      Triangle $OBC$ is isosceles, so $\\angle OBC = \\angle OCB = \\beta$.

      In triangle $ABC$: $\\alpha + (\\alpha + \\beta) + \\beta = 180°$.

      So $2(\\alpha + \\beta) = 180°$, giving $\\angle ACB = \\alpha + \\beta = 90°$.
    `},{id:"ng-043",title:"Euclid's Construction Postulates",statement:"(1) A straight line can be drawn from any point to any point. (2) A circle can be drawn with any center and radius.",sectionId:11,sectionTitle:"Geometric Constructions",category:"Geometry",type:"definition"},{id:"ng-044",title:"Equilateral Triangle Construction",statement:"Given segment $AB$, an equilateral triangle can be constructed with $AB$ as one side.",sectionId:11,sectionTitle:"Geometric Constructions",category:"Geometry",type:"proposition",hasProof:!0,proof:`
      Draw circle centered at $A$ with radius $AB$.

      Draw circle centered at $B$ with radius $BA$.

      Let $C$ be an intersection point of these circles.

      Then $AC = AB$ (radius of first circle) and $BC = BA$ (radius of second).

      Therefore $AB = BC = CA$, so triangle $ABC$ is equilateral.
    `},{id:"ng-045",title:"Gauss-Wantzel Theorem",statement:"A regular $n$-gon is constructible with ruler and compass iff $n = 2^k p_1 p_2 \\cdots p_m$ where the $p_i$ are distinct Fermat primes.",sectionId:11,sectionTitle:"Geometric Constructions",category:"Geometry",type:"theorem"},{id:"ng-046",title:"Playfair's Axiom",statement:"Given a line $\\ell$ and a point $P$ not on $\\ell$, there is exactly one line through $P$ parallel to $\\ell$.",sectionId:12,sectionTitle:"Parallels and Angles",category:"Geometry",type:"definition"},{id:"ng-047",title:"Vertical Angles Theorem",statement:"When two lines intersect, vertically opposite angles are equal.",sectionId:12,sectionTitle:"Parallels and Angles",category:"Geometry",type:"theorem",hasProof:!0,proof:`
      Let the lines intersect at $O$, forming angles $\\alpha, \\beta, \\alpha', \\beta'$ in order.

      Then $\\alpha + \\beta = 180°$ (angles on a straight line).

      Also $\\beta + \\alpha' = 180°$.

      Therefore $\\alpha = \\alpha'$.

      Similarly, $\\beta = \\beta'$.
    `},{id:"ng-048",title:"Triangle Angle Sum",statement:"The sum of angles in any triangle equals $180°$.",sectionId:12,sectionTitle:"Parallels and Angles",category:"Geometry",type:"theorem",hasProof:!0,proof:`
      Let triangle $ABC$ have angles $\\alpha$, $\\beta$, $\\gamma$ at vertices $A$, $B$, $C$.

      Draw line through $C$ parallel to $AB$.

      By alternate angles with transversal $AC$: angle on left of $C$ equals $\\alpha$.

      By alternate angles with transversal $BC$: angle on right of $C$ equals $\\beta$.

      These two angles plus $\\gamma$ form a straight line at $C$:

      $\\alpha + \\gamma + \\beta = 180°$.
    `},{id:"ng-049",title:"Quadrilateral Angle Sum",statement:"The sum of angles in any quadrilateral equals $360°$.",sectionId:12,sectionTitle:"Parallels and Angles",category:"Geometry",type:"corollary",hasProof:!0,proof:`
      Draw a diagonal, dividing the quadrilateral into two triangles.

      Each triangle has angle sum $180°$.

      Total = $180° + 180° = 360°$.
    `},{id:"ng-050",title:"Isosceles Triangle Theorem",statement:"In an isosceles triangle (two equal sides), the base angles are equal.",sectionId:13,sectionTitle:"Angles and Circles",category:"Geometry",type:"theorem",hasProof:!0,proof:`
      Let triangle $ABC$ have $AB = AC$.

      Reflect the triangle in the perpendicular bisector of $BC$.

      Points $B$ and $C$ swap, but $A$ stays fixed (equidistant from $B$ and $C$).

      The triangle maps to itself, so $\\angle ABC = \\angle ACB$.
    `},{id:"ng-051",title:"SAS Congruence",statement:"Two triangles are congruent if they have two sides and the included angle equal.",sectionId:13,sectionTitle:"Angles and Circles",category:"Geometry",type:"definition"},{id:"ng-052",title:"ASA Congruence",statement:"Two triangles are congruent if they have two angles and the included side equal.",sectionId:13,sectionTitle:"Angles and Circles",category:"Geometry",type:"definition"},{id:"ng-053",title:"SSS Congruence",statement:"Two triangles are congruent if they have all three sides equal.",sectionId:13,sectionTitle:"Angles and Circles",category:"Geometry",type:"definition"},{id:"ng-054",title:"Inscribed Angle Theorem",statement:"An inscribed angle is half the central angle subtending the same arc: $\\theta_{\\text{inscribed}} = \\frac{1}{2}\\theta_{\\text{central}}$.",sectionId:13,sectionTitle:"Angles and Circles",category:"Geometry",type:"theorem",hasProof:!0,proof:`
      Case 1: One side of inscribed angle passes through center $O$.

      Let inscribed angle be $\\angle BAC$ with $A$ on circle, $O$ on $AC$.

      Triangle $OAB$ is isosceles ($OA = OB$ = radius).

      Let $\\angle OAB = \\angle OBA = \\alpha$.

      External angle $\\angle BOC = 2\\alpha$ (central angle).

      So inscribed angle $= \\alpha = \\frac{1}{2}$ central angle.

      General case: Draw diameter through $A$ and use case 1 twice.
    `},{id:"ng-055",title:"Angles in Same Segment",statement:"Inscribed angles subtending the same arc are equal.",sectionId:13,sectionTitle:"Angles and Circles",category:"Geometry",type:"corollary",hasProof:!0,proof:`
      Each inscribed angle equals half the central angle subtending the same arc.

      Therefore all such inscribed angles are equal.
    `},{id:"ng-056",title:"Rectangle Area",statement:"Area of a rectangle = length $\\times$ width.",sectionId:14,sectionTitle:"Length and Area",category:"Geometry",type:"definition"},{id:"ng-057",title:"Parallelogram Area",statement:"Area of a parallelogram = base $\\times$ height.",sectionId:14,sectionTitle:"Length and Area",category:"Geometry",type:"theorem",hasProof:!0,proof:`
      Cut a triangle from one end of the parallelogram.

      Translate it to the other end.

      The result is a rectangle with the same base and height.

      Therefore area = base $\\times$ height.
    `},{id:"ng-058",title:"Triangle Area",statement:"Area of a triangle = $\\frac{1}{2} \\times$ base $\\times$ height.",sectionId:14,sectionTitle:"Length and Area",category:"Geometry",type:"theorem",hasProof:!0,proof:`
      Complete the triangle to a parallelogram by adding a congruent copy.

      Area of parallelogram = base $\\times$ height.

      The triangle is half the parallelogram.

      Therefore triangle area = $\\frac{1}{2} \\times$ base $\\times$ height.
    `},{id:"ng-059",title:"Polygon Area",statement:"Any polygon can be decomposed into triangles, so its area is the sum of triangle areas.",sectionId:14,sectionTitle:"Length and Area",category:"Geometry",type:"theorem"}];function v(){return[...new Set(s.map(n=>n.category).filter(n=>!!n))]}function I(n){const r=n.toLowerCase();return s.filter(a=>a.title.toLowerCase().includes(r)||a.statement.toLowerCase().includes(r))}function B(){const[n,r]=l.useState(!1),[a,m]=l.useState(""),[$,h]=l.useState(null),c=a?I(a):s,p=a?[{category:"Search Results",items:c}]:v().map(i=>({category:i,items:s.filter(o=>o.category===i)})),f=i=>{h($===i?null:i)},g={theorem:"text-amber-400 bg-amber-500/10",definition:"text-blue-400 bg-blue-500/10",lemma:"text-purple-400 bg-purple-500/10",corollary:"text-green-400 bg-green-500/10",proposition:"text-cyan-400 bg-cyan-500/10"};return e.jsxs("div",{className:"min-h-screen bg-dark-950",children:[e.jsx(T,{onToggleSidebar:()=>r(!n),sidebarOpen:n}),e.jsx(x,{isOpen:n,onClose:()=>r(!1)}),e.jsx("main",{className:"pt-20 pb-12 px-4 lg:pl-80 lg:pr-8",children:e.jsxs("div",{className:"max-w-4xl mx-auto",children:[e.jsx("h1",{className:"text-3xl font-bold text-dark-100 mb-2",children:"Theorems & Definitions"}),e.jsxs("p",{className:"text-dark-400 mb-8",children:["Quick reference for all theorems and definitions in ",_]}),e.jsx("div",{className:"mb-8",children:e.jsx("input",{type:"text",placeholder:"Search theorems and definitions...",value:a,onChange:i=>m(i.target.value),className:"w-full px-4 py-3 rounded-xl bg-dark-800 border border-dark-700 text-dark-100 placeholder-dark-500 focus:outline-none focus:border-primary-500 transition-colors"})}),e.jsx("div",{className:"bg-gradient-to-br from-amber-500/10 to-dark-800/50 border border-amber-500/20 rounded-2xl p-4 mb-8",children:e.jsxs("p",{className:"text-amber-300 text-sm",children:[e.jsx("span",{className:"font-semibold",children:"Tip:"})," Click any theorem to go to its section. Many include expandable proofs with LaTeX!"]})}),e.jsx("div",{className:"space-y-8",children:p.map(({category:i,items:o})=>e.jsxs("div",{className:"space-y-3",children:[e.jsxs("h2",{className:"text-xl font-bold text-dark-200 border-b border-dark-700/50 pb-2 flex items-center gap-3",children:[e.jsx("span",{className:"w-8 h-8 rounded-lg bg-gradient-to-br from-amber-500/20 to-orange-500/10 flex items-center justify-center text-sm font-bold text-amber-400",children:o.length}),i]}),e.jsx("div",{className:"space-y-2",children:o.map(t=>e.jsx(d,{to:`/section/${t.sectionId}`,className:"block group",children:e.jsxs("div",{className:"relative overflow-hidden rounded-xl bg-dark-800/40 border border-dark-700/50 p-4 transition-all duration-200 hover:border-amber-500/30 hover:bg-dark-800/60",children:[e.jsx("div",{className:"absolute left-0 top-0 bottom-0 w-1 bg-gradient-to-b from-amber-500 to-orange-600 opacity-40 group-hover:opacity-100 transition-opacity"}),e.jsxs("div",{className:"pl-3",children:[e.jsxs("div",{className:"flex items-center gap-2 mb-2 flex-wrap",children:[t.type&&e.jsx("span",{className:`text-[10px] font-semibold uppercase tracking-wider px-2 py-0.5 rounded ${g[t.type]||"text-dark-400 bg-dark-700"}`,children:t.type}),e.jsxs("span",{className:"text-[10px] text-dark-500",children:["Section ",t.sectionId]}),t.sectionTitle&&e.jsx("span",{className:"text-[10px] text-dark-600",children:t.sectionTitle}),t.hasProof&&t.proof&&e.jsx("span",{onClick:u=>{u.preventDefault(),f(t.id)},className:"ml-auto text-[10px] text-amber-500/70 font-medium cursor-pointer hover:text-amber-400 transition-colors",children:$===t.id?"Hide Proof":"View Proof"})]}),e.jsx("h3",{className:"font-semibold text-amber-400 group-hover:text-amber-300 transition-colors",children:t.title}),e.jsx("p",{className:"text-sm text-dark-400 mt-1",children:t.statement}),t.hasProof&&t.proof&&e.jsx("div",{className:"mt-3",children:e.jsx(y,{children:$===t.id?e.jsx(b.div,{initial:{height:0,opacity:0},animate:{height:"auto",opacity:1},exit:{height:0,opacity:0},transition:{duration:.3,ease:"easeInOut"},className:"overflow-hidden",children:e.jsxs("div",{className:"pt-4 border-t border-dark-700/50",children:[e.jsx("h4",{className:"text-sm font-semibold text-amber-400 mb-2",children:"Proof:"}),e.jsx(k,{children:t.proof})]})}):null})})]})]})},t.id))})]},i))}),c.length===0&&e.jsx("div",{className:"text-center py-12 text-dark-400",children:"No theorems found matching your search."}),e.jsx("div",{className:"mt-12 pt-8 border-t border-dark-700/50 flex justify-between items-center",children:e.jsxs(d,{to:"/interactive",className:"text-primary-400 hover:text-primary-300 transition-colors flex items-center gap-2",children:[e.jsx("svg",{className:"w-4 h-4",fill:"none",stroke:"currentColor",viewBox:"0 0 24 24",children:e.jsx("path",{strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:2,d:"M12 19l9 2-9-5-9-5 5-2-9 0-9 5 5 9 12 19 19 2 12 0 0 0 9 5-2-9-5-9 0-9 5-9-5 5-2 9 0 9-5"})}),"Interactive Modules"]})})]})})]})}export{B as default};
