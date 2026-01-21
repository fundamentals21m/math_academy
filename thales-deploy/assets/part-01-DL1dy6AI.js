const t="Ancient Mathematics",e="Part 1",n=[{sectionId:0,sectionTitle:"Egyptian Mathematics",textbookSection:"Section 0",examples:[{id:"ex-1-0-1",type:"example",title:"Egyptian Multiplication",statement:"Use the Egyptian multiplication method (doubling and adding) to compute $13 \\times 21$.",solution:{steps:[{title:"Set up the doubling table",content:`Start with 1 and 21, then double repeatedly:
1 → 21
2 → 42
4 → 84
8 → 168`},{title:"Decompose 13 as sum of powers of 2",content:`$13 = 8 + 4 + 1$

So we need rows 1, 4, and 8.`},{title:"Add the corresponding values",content:"$13 \\times 21 = 21 + 84 + 168 = 273$"}],conclusion:"The Egyptian method relies on the binary representation of numbers, anticipating modern computer arithmetic by millennia."}}],exercises:[{id:"1-0-1",type:"exercise",number:1,statement:"The Rhind Papyrus shows that Egyptians represented fractions as sums of unit fractions (fractions with numerator 1). Express $\\frac{2}{5}$ as a sum of distinct unit fractions.",solution:{steps:[{title:"Find the first unit fraction",content:`$\\frac{2}{5}$ is less than $\\frac{1}{2}$ but greater than $\\frac{1}{3}$.

Try $\\frac{1}{3}$: $\\frac{2}{5} - \\frac{1}{3} = \\frac{6-5}{15} = \\frac{1}{15}$`},{title:"Verify",content:"$\\frac{1}{3} + \\frac{1}{15} = \\frac{5}{15} + \\frac{1}{15} = \\frac{6}{15} = \\frac{2}{5}$ ✓"}],conclusion:"$\\frac{2}{5} = \\frac{1}{3} + \\frac{1}{15}$"}},{id:"1-0-2",type:"exercise",number:2,statement:"The Moscow Papyrus contains a formula for the volume of a truncated pyramid (frustum). Verify that the formula $V = \\frac{h}{3}(a^2 + ab + b^2)$ gives the correct volume when $a = 4$, $b = 2$, and $h = 6$.",solution:{steps:[{title:"Substitute values",content:`$V = \\frac{6}{3}(4^2 + 4 \\cdot 2 + 2^2)$
$= 2(16 + 8 + 4)$
$= 2(28) = 56$`},{title:"Verify with modern formula",content:`Volume of full pyramid with base $a$: $\\frac{1}{3} \\cdot a^2 \\cdot H$

Using similar triangles with the cut pyramid, we can verify this matches the Egyptian formula.`}],conclusion:"The Egyptians correctly computed frustum volumes around 1850 BCE."}}]},{sectionId:2,sectionTitle:"Prime Numbers",textbookSection:"Section 2",examples:[{id:"ex-1-2-1",type:"example",title:"Sieve of Eratosthenes",statement:"Use the Sieve of Eratosthenes to find all primes up to 30.",solution:{steps:[{title:"List numbers 2 to 30",content:"2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30"},{title:"Cross out multiples of 2 (except 2)",content:"2, 3, ~~4~~, 5, ~~6~~, 7, ~~8~~, 9, ~~10~~, 11, ~~12~~, 13, ~~14~~, 15, ~~16~~, 17, ~~18~~, 19, ~~20~~, 21, ~~22~~, 23, ~~24~~, 25, ~~26~~, 27, ~~28~~, 29, ~~30~~"},{title:"Cross out multiples of 3 (except 3)",content:"Remaining: 2, 3, 5, 7, ~~9~~, 11, 13, ~~15~~, 17, 19, ~~21~~, 23, 25, ~~27~~, 29"},{title:"Cross out multiples of 5 (except 5)",content:"~~25~~ is the only remaining multiple of 5."}],conclusion:"Primes up to 30: 2, 3, 5, 7, 11, 13, 17, 19, 23, 29"}}],exercises:[{id:"1-2-1",type:"exercise",number:1,statement:"Prove that there are infinitely many primes using Euclid's argument.",solution:{steps:[{title:"Assume finitely many primes",content:"Suppose there are only finitely many primes: $p_1, p_2, ..., p_n$."},{title:"Construct a new number",content:"Let $N = p_1 \\cdot p_2 \\cdot ... \\cdot p_n + 1$."},{title:"Analyze N",content:`$N > 1$, so $N$ has a prime divisor $p$.

If $p = p_i$ for some $i$, then $p | N$ and $p | (p_1 \\cdot p_2 \\cdot ... \\cdot p_n)$.

So $p | (N - p_1 \\cdot p_2 \\cdot ... \\cdot p_n) = 1$.

But no prime divides 1. Contradiction.`}],conclusion:"There must be infinitely many primes."}}]}],i={partId:1,partTitle:t,textbookChapter:e,sections:n};export{i as p};
