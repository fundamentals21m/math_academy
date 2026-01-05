import { LessonLayout } from '@/components/layout/LessonLayout';
import { Definition, Theorem, Example } from '@/components/common';
import { MathBlock } from '@/components/common/MathBlock';
import { Callout } from '@/components/common/Callout';

export default function Section18() {
  return (
    <LessonLayout sectionId={18}>
      <h2>Basic Facts About Elliptic Curves</h2>

      <p>
        Elliptic curves are algebraic curves with a rich group structure that makes them
        ideal for cryptography. They provide the same security as RSA with much smaller
        key sizes, making them essential for constrained environments.
      </p>

      <h3>Definition of Elliptic Curves</h3>

      <Definition title="Elliptic Curve (Weierstrass Form)">
        An <strong>elliptic curve</strong> over a field <em>K</em> is the set of points{' '}
        <MathBlock math="(x, y) \in K \times K" inline /> satisfying:
        <MathBlock math="y^2 = x^3 + ax + b" />
        where <MathBlock math="a, b \in K" inline /> and <MathBlock math="4a^3 + 27b^2 \neq 0" inline />{' '}
        (non-singular condition), together with a "point at infinity" <MathBlock math="\mathcal{O}" inline />.
      </Definition>

      <p>
        The condition <MathBlock math="4a^3 + 27b^2 \neq 0" inline /> ensures the curve has no
        singular points (cusps or self-intersections).
      </p>

      <Example title="Example Curves">
        <ul className="list-disc list-inside space-y-2">
          <li><MathBlock math="y^2 = x^3 - x" inline /> (over <MathBlock math="\mathbb{R}" inline />)</li>
          <li><MathBlock math="y^2 = x^3 + 1" inline /> (over <MathBlock math="\mathbb{F}_7" inline />: points are (0,1), (0,6), (2,3), (2,4), <MathBlock math="\mathcal{O}" inline />)</li>
          <li>secp256k1: <MathBlock math="y^2 = x^3 + 7" inline /> over <MathBlock math="\mathbb{F}_p" inline /> (Bitcoin)</li>
        </ul>
      </Example>

      <h3>The Group Law</h3>

      <Theorem title="Elliptic Curve Group"
        proof={
          <>
            <p>We verify the group axioms for the chord-and-tangent law on an elliptic curve <MathBlock math="E: y^2 = x^3 + ax + b" inline />.</p>
            <p><strong>Identity:</strong> The point at infinity <MathBlock math="\mathcal{O}" inline /> acts as identity. Geometrically, the line through <em>P</em> and <MathBlock math="\mathcal{O}" inline /> is vertical, intersecting <em>E</em> at <MathBlock math="P" inline /> and <MathBlock math="-P = (x_P, -y_P)" inline />. Thus <MathBlock math="P + \mathcal{O} = -(-P) = P" inline />.</p>
            <p><strong>Inverse:</strong> For <MathBlock math="P = (x, y)" inline />, the vertical line through <em>P</em> meets <em>E</em> at <MathBlock math="P, (x, -y)" inline />, and <MathBlock math="\mathcal{O}" inline />. Hence <MathBlock math="P + (x, -y) = \mathcal{O}" inline />, so <MathBlock math="-P = (x, -y)" inline />.</p>
            <p><strong>Commutativity:</strong> The line through <em>P</em> and <em>Q</em> is the same as the line through <em>Q</em> and <em>P</em>, so <MathBlock math="P + Q = Q + P" inline />.</p>
            <p><strong>Associativity:</strong> This is the non-trivial part. One approach uses the explicit addition formulas:</p>
            <MathBlock math="x_{P+Q} = \lambda^2 - x_P - x_Q, \quad y_{P+Q} = \lambda(x_P - x_{P+Q}) - y_P" />
            <p>where <MathBlock math="\lambda = (y_Q - y_P)/(x_Q - x_P)" inline /> for <MathBlock math="P \neq Q" inline />. Direct computation (tedious but elementary) shows <MathBlock math="(P + Q) + R = P + (Q + R)" inline />.</p>
            <p>A more elegant proof uses the Riemann-Roch theorem and divisor theory on algebraic curves, showing that the group law corresponds to the degree-zero divisor class group of <em>E</em>.</p>
          </>
        }
      >
        The points on an elliptic curve form an abelian group under the "chord-and-tangent" operation:
        <ul className="list-disc list-inside mt-2 space-y-1">
          <li><strong>Identity:</strong> The point at infinity <MathBlock math="\mathcal{O}" inline /></li>
          <li><strong>Inverse:</strong> <MathBlock math="-(x, y) = (x, -y)" inline /></li>
          <li><strong>Addition:</strong> Draw line through <em>P</em> and <em>Q</em>, find third intersection <em>R</em>, reflect to get <MathBlock math="P + Q = -R" inline /></li>
        </ul>
      </Theorem>

      <Definition title="Point Addition Formulas">
        For points <MathBlock math="P = (x_1, y_1)" inline /> and <MathBlock math="Q = (x_2, y_2)" inline />{' '}
        with <MathBlock math="P \neq \pm Q" inline />:
        <MathBlock math="\lambda = \frac{y_2 - y_1}{x_2 - x_1}" />
        <MathBlock math="x_3 = \lambda^2 - x_1 - x_2, \quad y_3 = \lambda(x_1 - x_3) - y_1" />
        <p className="mt-2">For point doubling (<MathBlock math="P = Q" inline />):</p>
        <MathBlock math="\lambda = \frac{3x_1^2 + a}{2y_1}" />
      </Definition>

      <Example title="Point Addition on y² = x³ - 7 (mod 11)">
        <p>Let <MathBlock math="P = (2, 3)" inline />, <MathBlock math="Q = (5, 2)" inline /></p>
        <p className="mt-2"><MathBlock math="\lambda = (2 - 3)/(5 - 2) = -1/3 \equiv -1 \cdot 4 = -4 \equiv 7 \pmod{11}" inline /></p>
        <p><MathBlock math="x_3 = 49 - 2 - 5 = 42 \equiv 9 \pmod{11}" inline /></p>
        <p><MathBlock math="y_3 = 7(2 - 9) - 3 = -52 \equiv 3 \pmod{11}" inline /></p>
        <p className="mt-2">So <MathBlock math="P + Q = (9, 3)" inline /></p>
      </Example>

      <h3>Order of the Group</h3>

      <Theorem title="Hasse's Theorem"
        proof={
          <>
            <p>We outline the proof of Hasse's bound on <MathBlock math="\#E(\mathbb{F}_p)" inline />.</p>
            <p>The key tool is the <strong>Frobenius endomorphism</strong> <MathBlock math="\phi: E \to E" inline /> defined by <MathBlock math="\phi(x, y) = (x^p, y^p)" inline />. This is a purely inseparable isogeny of degree <em>p</em>.</p>
            <p>The Frobenius satisfies a characteristic equation:</p>
            <MathBlock math="\phi^2 - t\phi + p = 0" />
            <p>where <MathBlock math="t = p + 1 - \#E(\mathbb{F}_p)" inline /> is the trace of Frobenius.</p>
            <p>A point <MathBlock math="P \in E(\bar{\mathbb{F}}_p)" inline /> lies in <MathBlock math="E(\mathbb{F}_p)" inline /> iff <MathBlock math="\phi(P) = P" inline />, i.e., <MathBlock math="(\phi - 1)(P) = \mathcal{O}" inline />.</p>
            <p>The number of such points equals <MathBlock math="\deg(\phi - 1)" inline /> (counting with appropriate multiplicity). Since <MathBlock math="\phi - 1" inline /> is separable, we have:</p>
            <MathBlock math="\#E(\mathbb{F}_p) = \deg(\phi - 1) = (\phi - 1)(\bar{\phi} - 1) = \phi\bar{\phi} - \phi - \bar{\phi} + 1" />
            <p>where <MathBlock math="\bar{\phi}" inline /> is the dual isogeny with <MathBlock math="\phi\bar{\phi} = p" inline />. Thus <MathBlock math="\#E(\mathbb{F}_p) = p + 1 - (\phi + \bar{\phi}) = p + 1 - t" inline />.</p>
            <p>The bound <MathBlock math="|t| \leq 2\sqrt{p}" inline /> follows because the eigenvalues of <MathBlock math="\phi" inline /> on the Tate module are algebraic integers of absolute value <MathBlock math="\sqrt{p}" inline /> (this is the Riemann Hypothesis for elliptic curves over finite fields, proved by Hasse).</p>
          </>
        }
      >
        For an elliptic curve over <MathBlock math="\mathbb{F}_p" inline />, the number of points satisfies:
        <MathBlock math="|p + 1 - \#E(\mathbb{F}_p)| \leq 2\sqrt{p}" />
        So the order is approximately <em>p</em>, within <MathBlock math="2\sqrt{p}" inline />.
      </Theorem>

      <Definition title="Trace of Frobenius">
        The <strong>trace of Frobenius</strong> is <MathBlock math="t = p + 1 - \#E(\mathbb{F}_p)" inline />.
        Hasse's theorem says <MathBlock math="|t| \leq 2\sqrt{p}" inline />.
      </Definition>

      <h3>Group Structure</h3>

      <Theorem title="Structure Theorem"
        proof={
          <>
            <p>We prove that <MathBlock math="E(\mathbb{F}_q)" inline /> is the product of at most two cyclic groups.</p>
            <p>By the structure theorem for finitely generated abelian groups, any finite abelian group is isomorphic to:</p>
            <MathBlock math="\mathbb{Z}/d_1\mathbb{Z} \times \mathbb{Z}/d_2\mathbb{Z} \times \cdots \times \mathbb{Z}/d_k\mathbb{Z}" />
            <p>where <MathBlock math="d_i \mid d_{i+1}" inline />. We must show <MathBlock math="k \leq 2" inline /> for elliptic curves.</p>
            <p>For any prime <MathBlock math="\ell" inline />, the <MathBlock math="\ell" inline />-torsion <MathBlock math="E[\ell]" inline /> (points <em>P</em> with <MathBlock math="\ell P = \mathcal{O}" inline />) over the algebraic closure satisfies:</p>
            <MathBlock math="E[\ell] \cong (\mathbb{Z}/\ell\mathbb{Z})^2" />
            <p>when <MathBlock math="\ell \neq \text{char}(\mathbb{F}_q)" inline />. This is because <em>E</em> is a 1-dimensional abelian variety, and the <MathBlock math="\ell" inline />-torsion has rank 2 over <MathBlock math="\mathbb{Z}/\ell\mathbb{Z}" inline />.</p>
            <p>Thus <MathBlock math="E(\mathbb{F}_q)[\ell] \subseteq E[\ell]" inline /> has at most 2 generators as a <MathBlock math="\mathbb{Z}/\ell\mathbb{Z}" inline />-module. This holds for all <MathBlock math="\ell" inline />, so <MathBlock math="E(\mathbb{F}_q)" inline /> has at most 2 invariant factors.</p>
            <p>The condition <MathBlock math="n_2 \mid (q-1)" inline /> follows from the Weil pairing: for <MathBlock math="P, Q \in E[n_2]" inline />, the pairing <MathBlock math="e_{n_2}(P, Q)" inline /> is a primitive <MathBlock math="n_2" inline />-th root of unity in <MathBlock math="\mathbb{F}_q^*" inline />, which requires <MathBlock math="n_2 \mid (q-1)" inline />.</p>
          </>
        }
      >
        For an elliptic curve over a finite field:
        <MathBlock math="E(\mathbb{F}_q) \cong \mathbb{Z}/n_1\mathbb{Z} \times \mathbb{Z}/n_2\mathbb{Z}" />
        where <MathBlock math="n_2 \mid n_1" inline /> and <MathBlock math="n_2 \mid (q - 1)" inline />.
        Often the group is cyclic (<MathBlock math="n_2 = 1" inline />).
      </Theorem>

      <h3>Scalar Multiplication</h3>

      <Definition title="Scalar Multiplication">
        For integer <em>n</em> and point <em>P</em>:
        <MathBlock math="nP = \underbrace{P + P + \cdots + P}_{n \text{ times}}" />
        Computed efficiently via <strong>double-and-add</strong> in <MathBlock math="O(\log n)" inline /> group operations.
      </Definition>

      <div className="bg-dark-800/50 rounded-xl p-4 border border-dark-700 my-4">
        <h4 className="text-lg font-semibold text-primary-400 mb-3">Double-and-Add Algorithm</h4>
        <div className="font-mono text-sm text-dark-300">
          <p>Input: P, n = (b_k b_{'{k-1}'} ... b_1 b_0)_2</p>
          <p>Q = O</p>
          <p>for i = k down to 0:</p>
          <p className="ml-4">Q = 2Q</p>
          <p className="ml-4">if b_i = 1: Q = Q + P</p>
          <p>return Q</p>
        </div>
      </div>

      <h3>Special Curves</h3>

      <div className="bg-dark-800/50 rounded-xl p-4 border border-dark-700 my-4">
        <h4 className="text-lg font-semibold text-primary-400 mb-3">Standard Curves</h4>
        <table className="w-full text-dark-300">
          <thead>
            <tr className="border-b border-dark-700">
              <th className="text-left py-2">Curve</th>
              <th className="text-left py-2">Equation</th>
              <th className="text-left py-2">Use</th>
            </tr>
          </thead>
          <tbody>
            <tr className="border-b border-dark-700">
              <td className="py-2">P-256</td>
              <td className="py-2"><MathBlock math="y^2 = x^3 - 3x + b" inline /></td>
              <td className="py-2">NIST, TLS</td>
            </tr>
            <tr className="border-b border-dark-700">
              <td className="py-2">secp256k1</td>
              <td className="py-2"><MathBlock math="y^2 = x^3 + 7" inline /></td>
              <td className="py-2">Bitcoin</td>
            </tr>
            <tr>
              <td className="py-2">Curve25519</td>
              <td className="py-2">Montgomery form</td>
              <td className="py-2">Modern crypto</td>
            </tr>
          </tbody>
        </table>
      </div>

      <Callout type="success">
        <strong>Why Elliptic Curves?</strong> The discrete log problem on elliptic curves has no
        known subexponential attack (unlike <MathBlock math="\mathbb{Z}_p^*" inline />). This means
        256-bit ECC ≈ 3072-bit RSA security, enabling smaller keys and faster operations.
      </Callout>
    </LessonLayout>
  );
}
