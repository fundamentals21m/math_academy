import { LessonLayout } from '@/components/layout/LessonLayout';
import { Definition, Theorem, Example } from '@/components/common';
import { MathBlock } from '@/components/common/MathBlock';
import { Callout } from '@/components/common/Callout';

export default function Section11() {
  return (
    <LessonLayout sectionId={11}>
      <h2>Knapsack</h2>

      <p>
        The knapsack (or subset sum) problem was the first NP-complete problem proposed as a
        basis for public-key cryptography. While early knapsack cryptosystems were broken,
        they remain historically important and have influenced modern designs.
      </p>

      <h3>The Subset Sum Problem</h3>

      <Definition title="Subset Sum Problem">
        Given a set of positive integers <MathBlock math="\{a_1, a_2, \ldots, a_n\}" inline /> and a
        target sum <em>S</em>, find a subset that sums to <em>S</em>. Equivalently, find{' '}
        <MathBlock math="x_1, x_2, \ldots, x_n \in \{0, 1\}" inline /> such that:
        <MathBlock math="\sum_{i=1}^{n} x_i a_i = S" />
      </Definition>

      <Callout type="info">
        <strong>NP-Completeness:</strong> The subset sum problem is NP-complete. The general case
        is believed to have no polynomial-time algorithm.
      </Callout>

      <h3>Superincreasing Sequences</h3>

      <Definition title="Superincreasing Sequence">
        A sequence <MathBlock math="(b_1, b_2, \ldots, b_n)" inline /> is <strong>superincreasing</strong>{' '}
        if each element is greater than the sum of all preceding elements:
        <MathBlock math="b_k > \sum_{i=1}^{k-1} b_i \quad \text{for all } k \geq 2" />
      </Definition>

      <Theorem title="Easy Knapsack"
        proof={
          <>
            <p>We prove correctness of the greedy algorithm by induction on <em>n</em>.</p>
            <p className="mt-2"><strong>Base case:</strong> For <MathBlock math="n = 1" inline />, the algorithm correctly determines whether <MathBlock math="S = b_1" inline /> or has no solution.</p>
            <p className="mt-2"><strong>Inductive step:</strong> Assume the algorithm works for sequences of length <MathBlock math="n - 1" inline />. Consider a superincreasing sequence <MathBlock math="(b_1, \ldots, b_n)" inline /> and target <em>S</em>.</p>
            <p className="mt-2"><strong>Claim:</strong> If a solution exists with <MathBlock math="b_n" inline /> included, then the greedy algorithm must include <MathBlock math="b_n" inline />.</p>
            <p className="mt-2"><strong>Proof of claim:</strong> Since the sequence is superincreasing:</p>
            <MathBlock math="\sum_{i=1}^{n-1} b_i < b_n" />
            <p>Therefore, if <MathBlock math="b_n" inline /> is in the solution but we don't include it, we cannot reach any target <MathBlock math="S \geq b_n" inline /> using only <MathBlock math="b_1, \ldots, b_{n-1}" inline />.</p>
            <p className="mt-2"><strong>Conversely:</strong> If <MathBlock math="S < b_n" inline />, then <MathBlock math="b_n" inline /> cannot be in any solution (it would exceed <em>S</em> by itself).</p>
            <p className="mt-2">Thus the greedy choice is always correct. After deciding on <MathBlock math="b_n" inline />, we have a subproblem of size <MathBlock math="n - 1" inline /> with target <MathBlock math="S' = S - b_n" inline /> (if included) or <MathBlock math="S' = S" inline /> (if not). By induction, the greedy algorithm solves this correctly.</p>
            <p className="mt-2">The algorithm makes exactly <em>n</em> decisions, each in constant time, giving <MathBlock math="O(n)" inline /> total complexity.</p>
          </>
        }
      >
        For a superincreasing sequence, the subset sum problem can be solved in <MathBlock math="O(n)" inline />{' '}
        time using a greedy algorithm:
        <ol className="list-decimal list-inside mt-2 space-y-1">
          <li>Start with the largest element <MathBlock math="b_n" inline /></li>
          <li>If <MathBlock math="b_n \leq S" inline />, include it and set <MathBlock math="S := S - b_n" inline /></li>
          <li>Repeat for <MathBlock math="b_{n-1}, b_{n-2}, \ldots, b_1" inline /></li>
        </ol>
      </Theorem>

      <Example title="Solving Easy Knapsack">
        <p>Sequence: <MathBlock math="(2, 3, 7, 14, 30)" inline />. Find subset summing to <MathBlock math="S = 23" inline />.</p>
        <p className="mt-2"><strong>Solution:</strong></p>
        <ol className="list-decimal list-inside mt-2">
          <li><MathBlock math="30 > 23" inline />, skip</li>
          <li><MathBlock math="14 \leq 23" inline />, include. <MathBlock math="S := 23 - 14 = 9" inline /></li>
          <li><MathBlock math="7 \leq 9" inline />, include. <MathBlock math="S := 9 - 7 = 2" inline /></li>
          <li><MathBlock math="3 > 2" inline />, skip</li>
          <li><MathBlock math="2 \leq 2" inline />, include. <MathBlock math="S := 2 - 2 = 0" inline /></li>
        </ol>
        <p className="mt-2">Answer: <MathBlock math="\{2, 7, 14\}" inline /> (indices 1, 3, 4)</p>
      </Example>

      <h3>Merkle-Hellman Knapsack Cryptosystem</h3>

      <Definition title="Merkle-Hellman Cryptosystem">
        <p><strong>Key Generation:</strong></p>
        <ol className="list-decimal list-inside space-y-1">
          <li>Choose superincreasing sequence <MathBlock math="(b_1, \ldots, b_n)" inline /> (private)</li>
          <li>Choose <MathBlock math="M > \sum b_i" inline /> and <MathBlock math="W" inline /> with <MathBlock math="\gcd(W, M) = 1" inline /></li>
          <li>Compute public key: <MathBlock math="a_i = W \cdot b_i \bmod M" inline /></li>
        </ol>
        <p className="mt-2"><strong>Encryption:</strong> For binary message <MathBlock math="(x_1, \ldots, x_n)" inline />:</p>
        <MathBlock math="S = \sum_{i=1}^{n} x_i a_i" />
        <p><strong>Decryption:</strong></p>
        <ol className="list-decimal list-inside">
          <li>Compute <MathBlock math="S' = W^{-1} \cdot S \bmod M" inline /></li>
          <li>Solve easy knapsack for <MathBlock math="(b_1, \ldots, b_n)" inline /> with target <MathBlock math="S'" inline /></li>
        </ol>
      </Definition>

      <Example title="Merkle-Hellman Example">
        <p>Private: <MathBlock math="(2, 5, 9, 21)" inline />, <MathBlock math="M = 50" inline />, <MathBlock math="W = 31" inline /></p>
        <p className="mt-2">Public key: <MathBlock math="a_i = 31 \cdot b_i \bmod 50" inline /></p>
        <ul className="list-disc list-inside mt-2">
          <li><MathBlock math="a_1 = 31 \cdot 2 = 62 \equiv 12 \pmod{50}" inline /></li>
          <li><MathBlock math="a_2 = 31 \cdot 5 = 155 \equiv 5 \pmod{50}" inline /></li>
          <li><MathBlock math="a_3 = 31 \cdot 9 = 279 \equiv 29 \pmod{50}" inline /></li>
          <li><MathBlock math="a_4 = 31 \cdot 21 = 651 \equiv 1 \pmod{50}" inline /></li>
        </ul>
        <p className="mt-2"><strong>Encrypt (1, 0, 1, 1):</strong> <MathBlock math="S = 12 + 29 + 1 = 42" inline /></p>
        <p className="mt-2"><strong>Decrypt:</strong></p>
        <ul className="list-disc list-inside">
          <li><MathBlock math="W^{-1} = 31^{-1} \equiv 21 \pmod{50}" inline /></li>
          <li><MathBlock math="S' = 21 \cdot 42 \bmod 50 = 882 \bmod 50 = 32" inline /></li>
          <li>Solve easy knapsack: <MathBlock math="32 = 21 + 9 + 2" inline /> → (1, 0, 1, 1) ✓</li>
        </ul>
      </Example>

      <h3>Shamir's Attack</h3>

      <Theorem title="Shamir's Attack (1984)"
        proof={
          <>
            <p>The attack exploits the structure hidden in the public key through lattice techniques. We outline the key ideas:</p>
            <p className="mt-2"><strong>Step 1: Lattice formulation.</strong> Construct the lattice <MathBlock math="\Lambda" inline /> generated by the rows of:</p>
            <MathBlock math="\begin{pmatrix} 1 & 0 & \cdots & 0 & a_1 \\ 0 & 1 & \cdots & 0 & a_2 \\ \vdots & \vdots & \ddots & \vdots & \vdots \\ 0 & 0 & \cdots & 1 & a_n \\ 0 & 0 & \cdots & 0 & -n \end{pmatrix}" />
            <p className="mt-2"><strong>Step 2: Short vector existence.</strong> The private superincreasing sequence <MathBlock math="(b_1, \ldots, b_n)" inline /> satisfies <MathBlock math="a_i \equiv W b_i \pmod{M}" inline />. This implies:</p>
            <MathBlock math="a_i = W b_i - k_i M \text{ for some } k_i" />
            <p>The vector <MathBlock math="(b_1, b_2, \ldots, b_n, W)" inline /> lies in a sublattice and has unusually small norm because the <MathBlock math="b_i" inline /> form a superincreasing sequence with relatively small entries.</p>
            <p className="mt-2"><strong>Step 3: LLL reduction.</strong> Apply the LLL algorithm to find a reduced basis. With high probability, the shortest vectors in the reduced basis reveal linear combinations that expose the trapdoor structure.</p>
            <p className="mt-2"><strong>Step 4: Extract trapdoor.</strong> From short lattice vectors, recover a pair <MathBlock math="(W', M')" inline /> such that <MathBlock math="a_i W'^{-1} \bmod M'" inline /> yields a superincreasing-like sequence that enables decryption.</p>
            <p className="mt-2">The LLL algorithm runs in polynomial time <MathBlock math="O(n^6 \log^3 B)" inline /> where <em>B</em> bounds the entries. Since the lattice dimension is <MathBlock math="n + 1" inline />, the entire attack is polynomial in the key length.</p>
          </>
        }
      >
        The Merkle-Hellman cryptosystem can be broken in polynomial time using lattice reduction.
        Given the public key <MathBlock math="(a_1, \ldots, a_n)" inline />, one can find a different
        trapdoor pair <MathBlock math="(W', M')" inline /> that allows decryption.
      </Theorem>

      <p>
        The attack uses the LLL algorithm for lattice basis reduction to find short vectors
        in a certain lattice constructed from the public key.
      </p>

      <Callout type="warning">
        <strong>Broken!</strong> The Merkle-Hellman cryptosystem and its variants are considered
        insecure. More sophisticated knapsack-based systems have also been broken.
      </Callout>

      <h3>Modern Lattice Cryptography</h3>

      <p>
        Despite the failure of early knapsack schemes, lattice problems remain central to
        post-quantum cryptography:
      </p>

      <div className="bg-dark-800/50 rounded-xl p-4 border border-dark-700 my-4">
        <h4 className="text-lg font-semibold text-primary-400 mb-3">Lattice-Based Problems</h4>
        <ul className="list-disc list-inside space-y-2 text-dark-300">
          <li><strong>Shortest Vector Problem (SVP):</strong> Find shortest nonzero vector in lattice</li>
          <li><strong>Closest Vector Problem (CVP):</strong> Find lattice point closest to target</li>
          <li><strong>Learning With Errors (LWE):</strong> Solve noisy linear equations</li>
          <li><strong>Ring-LWE:</strong> Structured version enabling efficient crypto</li>
        </ul>
      </div>

      <Definition title="NTRU (1996)">
        A lattice-based cryptosystem using polynomial rings that has resisted attacks for decades.
        Operations are in <MathBlock math="\mathbb{Z}[x]/(x^N - 1)" inline />:
        <ul className="list-disc list-inside mt-2">
          <li>Small polynomial secrets <em>f</em>, <em>g</em></li>
          <li>Public key: <MathBlock math="h = g \cdot f^{-1} \pmod{q}" inline /></li>
          <li>Security from difficulty of finding short vectors</li>
        </ul>
      </Definition>

      <Callout type="success">
        <strong>Post-Quantum:</strong> Lattice-based cryptography (Kyber, Dilithium) was selected
        by NIST for post-quantum standardization. Unlike RSA/ECC, these schemes resist quantum attacks.
      </Callout>

      <h3>Lessons Learned</h3>

      <div className="bg-dark-800/50 rounded-xl p-4 border border-dark-700 my-4">
        <h4 className="text-lg font-semibold text-primary-400 mb-3">Cryptographic Design Principles</h4>
        <ul className="list-disc list-inside space-y-2 text-dark-300">
          <li><strong>Worst-case vs. average-case:</strong> NP-completeness is worst-case; crypto needs average-case hardness</li>
          <li><strong>Trapdoor quality:</strong> The trapdoor must not leak through the public key</li>
          <li><strong>Reduction tightness:</strong> Security should reduce tightly to the hard problem</li>
          <li><strong>Conservative design:</strong> Large security margins against unknown attacks</li>
        </ul>
      </div>
    </LessonLayout>
  );
}
