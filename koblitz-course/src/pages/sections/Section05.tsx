import { LessonLayout } from '@/components/layout/LessonLayout';
import { Definition, Theorem, Example } from '@/components/common';
import { MathBlock } from '@/components/common/MathBlock';
import { Callout } from '@/components/common/Callout';

export default function Section05() {
  return (
    <LessonLayout sectionId={5}>
      <h2>Quadratic Residues and Reciprocity</h2>

      <p>
        Quadratic residues are integers that are perfect squares modulo <em>n</em>. The theory
        of quadratic residues, culminating in the Quadratic Reciprocity Law, is one of the
        most beautiful results in number theory with important cryptographic applications.
      </p>

      <h3>Quadratic Residues</h3>

      <Definition title="Quadratic Residue">
        Let <em>p</em> be an odd prime. An integer <em>a</em> with <MathBlock math="\gcd(a, p) = 1" inline />{' '}
        is a <strong>quadratic residue</strong> (QR) modulo <em>p</em> if there exists an integer{' '}
        <em>x</em> such that:
        <MathBlock math="x^2 \equiv a \pmod{p}" />
        Otherwise, <em>a</em> is a <strong>quadratic nonresidue</strong> (QNR).
      </Definition>

      <Theorem title="Number of Quadratic Residues"
        proof={
          <>
            <p>Consider the squaring map <MathBlock math="\sigma: \mathbb{F}_p^* \to \mathbb{F}_p^*" inline /> defined by <MathBlock math="\sigma(x) = x^2" inline />.</p>
            <p>The quadratic residues are exactly the image of <MathBlock math="\sigma" inline />. We count them by determining the fiber sizes.</p>
            <p>For any <MathBlock math="a \in \mathbb{F}_p^*" inline />, if <MathBlock math="x^2 = a" inline /> has a solution <em>x</em>, then <MathBlock math="(-x)^2 = a" inline /> as well. Moreover, <MathBlock math="x \neq -x" inline /> since <MathBlock math="2x \neq 0" inline /> in <MathBlock math="\mathbb{F}_p" inline /> (as <MathBlock math="p > 2" inline />).</p>
            <p>Thus each quadratic residue has exactly 2 square roots in <MathBlock math="\mathbb{F}_p^*" inline />.</p>
            <p>Partitioning <MathBlock math="\mathbb{F}_p^*" inline /> by the fibers of <MathBlock math="\sigma" inline />:</p>
            <MathBlock math="|\mathbb{F}_p^*| = 2 \cdot |\text{image}(\sigma)|" />
            <MathBlock math="p - 1 = 2 \cdot (\text{number of QRs})" />
            <p>Therefore, the number of quadratic residues is <MathBlock math="(p-1)/2" inline />.</p>
            <p>Explicitly, the QRs are <MathBlock math="1^2, 2^2, \ldots, ((p-1)/2)^2" inline />, and these are distinct because <MathBlock math="k^2 \equiv (p-k)^2 \pmod{p}" inline /> pairs up elements symmetrically around <MathBlock math="p/2" inline />.</p>
          </>
        }
      >
        For an odd prime <em>p</em>, exactly half of the nonzero elements modulo <em>p</em> are
        quadratic residues. More precisely, the QRs are:
        <MathBlock math="\{1^2, 2^2, 3^2, \ldots, ((p-1)/2)^2\} \pmod{p}" />
        and there are <MathBlock math="(p-1)/2" inline /> of them.
      </Theorem>

      <Example title="Quadratic Residues mod 7">
        <p>Find all quadratic residues modulo 7.</p>
        <p className="mt-2"><strong>Solution:</strong> Compute squares of 1, 2, 3:</p>
        <ul className="list-disc list-inside mt-2">
          <li><MathBlock math="1^2 \equiv 1" inline /></li>
          <li><MathBlock math="2^2 \equiv 4" inline /></li>
          <li><MathBlock math="3^2 \equiv 9 \equiv 2" inline /></li>
        </ul>
        <p className="mt-2">So QRs mod 7 are <MathBlock math="\{1, 2, 4\}" inline />, and QNRs are <MathBlock math="\{3, 5, 6\}" inline />.</p>
      </Example>

      <h3>The Legendre Symbol</h3>

      <Definition title="Legendre Symbol">
        For odd prime <em>p</em> and integer <em>a</em>, the <strong>Legendre symbol</strong> is:
        <MathBlock math="\left(\frac{a}{p}\right) = \begin{cases} 0 & \text{if } p \mid a \\ 1 & \text{if } a \text{ is a QR mod } p \\ -1 & \text{if } a \text{ is a QNR mod } p \end{cases}" />
      </Definition>

      <Theorem title="Euler's Criterion"
        proof={
          <>
            <p>By Fermat's Little Theorem, <MathBlock math="a^{p-1} \equiv 1 \pmod{p}" inline /> for <MathBlock math="\gcd(a, p) = 1" inline />.</p>
            <p>This means <MathBlock math="a^{p-1} - 1 \equiv 0 \pmod{p}" inline />, which factors as:</p>
            <MathBlock math="(a^{(p-1)/2} - 1)(a^{(p-1)/2} + 1) \equiv 0 \pmod{p}" />
            <p>Since <em>p</em> is prime, either <MathBlock math="a^{(p-1)/2} \equiv 1" inline /> or <MathBlock math="a^{(p-1)/2} \equiv -1 \pmod{p}" inline />.</p>
            <p><strong>Case 1:</strong> If <em>a</em> is a QR, then <MathBlock math="a = x^2" inline /> for some <em>x</em>. Thus:</p>
            <MathBlock math="a^{(p-1)/2} = (x^2)^{(p-1)/2} = x^{p-1} \equiv 1 \pmod{p}" />
            <p>by Fermat's Little Theorem.</p>
            <p><strong>Case 2:</strong> If <em>a</em> is a QNR, we show <MathBlock math="a^{(p-1)/2} \equiv -1 \pmod{p}" inline />.</p>
            <p>The polynomial <MathBlock math="x^{(p-1)/2} - 1" inline /> has degree <MathBlock math="(p-1)/2" inline />, so at most <MathBlock math="(p-1)/2" inline /> roots in <MathBlock math="\mathbb{F}_p" inline />.</p>
            <p>From Case 1, all <MathBlock math="(p-1)/2" inline /> quadratic residues are roots. These are all the roots.</p>
            <p>Since <em>a</em> is not a QR, <MathBlock math="a^{(p-1)/2} \not\equiv 1 \pmod{p}" inline />, so it must be <MathBlock math="-1" inline />.</p>
            <p>This proves <MathBlock math="a^{(p-1)/2} \equiv (a/p) \pmod{p}" inline />.</p>
          </>
        }
      >
        For odd prime <em>p</em> and <MathBlock math="\gcd(a, p) = 1" inline />:
        <MathBlock math="\left(\frac{a}{p}\right) \equiv a^{(p-1)/2} \pmod{p}" />
      </Theorem>

      <Example title="Using Euler's Criterion">
        <p>Is 2 a quadratic residue modulo 7?</p>
        <p className="mt-2"><strong>Solution:</strong> Compute <MathBlock math="2^{(7-1)/2} = 2^3 = 8 \equiv 1 \pmod{7}" inline />.</p>
        <p>Since the result is 1, we have <MathBlock math="(2/7) = 1" inline />, so 2 is a QR mod 7.</p>
      </Example>

      <h3>Properties of the Legendre Symbol</h3>

      <div className="bg-dark-800/50 rounded-xl p-4 border border-dark-700 my-4">
        <h4 className="text-lg font-semibold text-primary-400 mb-3">Key Properties</h4>
        <ol className="list-decimal list-inside space-y-2 text-dark-300">
          <li><MathBlock math="(ab/p) = (a/p)(b/p)" inline /> (multiplicativity)</li>
          <li><MathBlock math="(a^2/p) = 1" inline /> for <MathBlock math="p \nmid a" inline /></li>
          <li>If <MathBlock math="a \equiv b \pmod{p}" inline />, then <MathBlock math="(a/p) = (b/p)" inline /></li>
          <li><MathBlock math="(1/p) = 1" inline /></li>
          <li><MathBlock math="(-1/p) = (-1)^{(p-1)/2}" inline /></li>
        </ol>
      </div>

      <Theorem title="When is -1 a QR?"
        proof={
          <>
            <p>By Euler's Criterion:</p>
            <MathBlock math="\left(\frac{-1}{p}\right) \equiv (-1)^{(p-1)/2} \pmod{p}" />
            <p>Since the only values are <MathBlock math="\pm 1" inline /> and <MathBlock math="p > 2" inline />, the congruence is actually an equality.</p>
            <p><strong>Case 1:</strong> If <MathBlock math="p \equiv 1 \pmod{4}" inline />, then <MathBlock math="p = 4k + 1" inline /> for some integer <em>k</em>, so:</p>
            <MathBlock math="\frac{p-1}{2} = \frac{4k}{2} = 2k \text{ (even)}" />
            <p>Thus <MathBlock math="(-1)^{(p-1)/2} = (-1)^{2k} = 1" inline />, and <MathBlock math="-1" inline /> is a QR.</p>
            <p><strong>Case 2:</strong> If <MathBlock math="p \equiv 3 \pmod{4}" inline />, then <MathBlock math="p = 4k + 3" inline />, so:</p>
            <MathBlock math="\frac{p-1}{2} = \frac{4k + 2}{2} = 2k + 1 \text{ (odd)}" />
            <p>Thus <MathBlock math="(-1)^{(p-1)/2} = (-1)^{2k+1} = -1" inline />, and <MathBlock math="-1" inline /> is a QNR.</p>
          </>
        }
      >
        <MathBlock math="\left(\frac{-1}{p}\right) = \begin{cases} 1 & \text{if } p \equiv 1 \pmod{4} \\ -1 & \text{if } p \equiv 3 \pmod{4} \end{cases}" />
      </Theorem>

      <Theorem title="When is 2 a QR?"
        proof={
          <>
            <p>We use Gauss's Lemma. For <MathBlock math="a" inline /> with <MathBlock math="\gcd(a, p) = 1" inline />, consider the products:</p>
            <MathBlock math="a \cdot 1, a \cdot 2, \ldots, a \cdot \frac{p-1}{2}" />
            <p>reducing each modulo <em>p</em> to the range <MathBlock math="\{-(p-1)/2, \ldots, -1, 1, \ldots, (p-1)/2\}" inline />.</p>
            <p>Let <MathBlock math="\mu" inline /> be the number of these products that are negative. Gauss's Lemma states:</p>
            <MathBlock math="\left(\frac{a}{p}\right) = (-1)^{\mu}" />
            <p>For <MathBlock math="a = 2" inline />, the products <MathBlock math="2, 4, 6, \ldots, p-1" inline /> are the even numbers up to <MathBlock math="p-1" inline />.</p>
            <p>An even number <MathBlock math="2k" inline /> (where <MathBlock math="1 \leq k \leq (p-1)/2" inline />) represents a negative residue when <MathBlock math="2k > p/2" inline />, i.e., when <MathBlock math="k > p/4" inline />.</p>
            <p>The count <MathBlock math="\mu" inline /> equals the number of integers <em>k</em> with <MathBlock math="p/4 < k \leq (p-1)/2" inline />.</p>
            <p>After careful case analysis modulo 8:</p>
            <ul className="list-disc list-inside mt-2 space-y-1">
              <li>If <MathBlock math="p \equiv 1 \pmod{8}" inline />: <MathBlock math="\mu" inline /> is even, so <MathBlock math="(2/p) = 1" inline /></li>
              <li>If <MathBlock math="p \equiv 3 \pmod{8}" inline />: <MathBlock math="\mu" inline /> is odd, so <MathBlock math="(2/p) = -1" inline /></li>
              <li>If <MathBlock math="p \equiv 5 \pmod{8}" inline />: <MathBlock math="\mu" inline /> is odd, so <MathBlock math="(2/p) = -1" inline /></li>
              <li>If <MathBlock math="p \equiv 7 \pmod{8}" inline />: <MathBlock math="\mu" inline /> is even, so <MathBlock math="(2/p) = 1" inline /></li>
            </ul>
            <p>This gives <MathBlock math="(2/p) = (-1)^{(p^2-1)/8}" inline /> since <MathBlock math="(p^2 - 1)/8" inline /> has the same parity as <MathBlock math="\mu" inline />.</p>
          </>
        }
      >
        <MathBlock math="\left(\frac{2}{p}\right) = (-1)^{(p^2-1)/8} = \begin{cases} 1 & \text{if } p \equiv \pm 1 \pmod{8} \\ -1 & \text{if } p \equiv \pm 3 \pmod{8} \end{cases}" />
      </Theorem>

      <h3>The Law of Quadratic Reciprocity</h3>

      <Theorem title="Quadratic Reciprocity (Gauss)"
        proof={
          <>
            <p>We present Eisenstein's proof using the lattice point counting method.</p>
            <p>Consider the rectangle <MathBlock math="R = \{(x, y) : 1 \leq x \leq (p-1)/2, 1 \leq y \leq (q-1)/2\}" inline />.</p>
            <p>The number of lattice points in <em>R</em> is <MathBlock math="\frac{p-1}{2} \cdot \frac{q-1}{2}" inline />.</p>
            <p>The diagonal line <MathBlock math="y = (q/p)x" inline /> divides <em>R</em> into two parts. Since <em>p</em> and <em>q</em> are distinct primes, no lattice points lie on this diagonal.</p>
            <p>Let:</p>
            <ul className="list-disc list-inside mt-2 space-y-1">
              <li><MathBlock math="N_1" inline /> = number of lattice points below the diagonal (where <MathBlock math="y < (q/p)x" inline />)</li>
              <li><MathBlock math="N_2" inline /> = number of lattice points above the diagonal (where <MathBlock math="y > (q/p)x" inline />)</li>
            </ul>
            <p>Then <MathBlock math="N_1 + N_2 = \frac{p-1}{2} \cdot \frac{q-1}{2}" inline />.</p>
            <p>By Gauss's Lemma, <MathBlock math="(q/p) = (-1)^{N_1}" inline /> (counting how many of <MathBlock math="q, 2q, \ldots, ((p-1)/2)q" inline /> have fractional parts exceeding 1/2 when divided by <em>p</em>).</p>
            <p>Similarly, <MathBlock math="(p/q) = (-1)^{N_2}" inline /> by symmetry.</p>
            <p>Therefore:</p>
            <MathBlock math="\left(\frac{p}{q}\right)\left(\frac{q}{p}\right) = (-1)^{N_1 + N_2} = (-1)^{\frac{p-1}{2} \cdot \frac{q-1}{2}}" />
            <p>The product equals 1 unless both <MathBlock math="(p-1)/2" inline /> and <MathBlock math="(q-1)/2" inline /> are odd, which happens iff <MathBlock math="p \equiv q \equiv 3 \pmod{4}" inline />.</p>
          </>
        }
      >
        For distinct odd primes <em>p</em> and <em>q</em>:
        <MathBlock math="\left(\frac{p}{q}\right)\left(\frac{q}{p}\right) = (-1)^{\frac{p-1}{2} \cdot \frac{q-1}{2}}" />
        Equivalently:
        <MathBlock math="\left(\frac{p}{q}\right) = \left(\frac{q}{p}\right) \text{ unless } p \equiv q \equiv 3 \pmod{4}, \text{ in which case } \left(\frac{p}{q}\right) = -\left(\frac{q}{p}\right)" />
      </Theorem>

      <Callout type="info">
        <strong>Historical Note:</strong> Gauss called this the "golden theorem" and published
        at least six different proofs. There are now over 200 known proofs!
      </Callout>

      <Example title="Using Quadratic Reciprocity">
        <p>Compute <MathBlock math="(71/73)" inline />.</p>
        <p className="mt-2"><strong>Solution:</strong></p>
        <ol className="list-decimal list-inside space-y-1 mt-2">
          <li><MathBlock math="71 \equiv 3 \pmod{4}" inline /> and <MathBlock math="73 \equiv 1 \pmod{4}" inline /></li>
          <li>Since not both are <MathBlock math="\equiv 3 \pmod{4}" inline />: <MathBlock math="(71/73) = (73/71)" inline /></li>
          <li><MathBlock math="73 \equiv 2 \pmod{71}" inline />, so <MathBlock math="(73/71) = (2/71)" inline /></li>
          <li><MathBlock math="71 \equiv 7 \pmod{8}" inline />, so <MathBlock math="(2/71) = 1" inline /></li>
        </ol>
        <p className="mt-2">Therefore, <MathBlock math="(71/73) = 1" inline />, and 71 is a QR mod 73.</p>
      </Example>

      <h3>The Jacobi Symbol</h3>

      <Definition title="Jacobi Symbol">
        For odd <MathBlock math="n = p_1^{a_1} \cdots p_k^{a_k}" inline /> and any integer <em>a</em>,
        the <strong>Jacobi symbol</strong> is:
        <MathBlock math="\left(\frac{a}{n}\right) = \left(\frac{a}{p_1}\right)^{a_1} \cdots \left(\frac{a}{p_k}\right)^{a_k}" />
      </Definition>

      <Callout type="warning">
        <strong>Important:</strong> <MathBlock math="(a/n) = 1" inline /> does NOT necessarily mean{' '}
        <em>a</em> is a QR mod <em>n</em> when <em>n</em> is composite. It only means that{' '}
        <em>a</em> is a QR modulo an even number of prime factors.
      </Callout>

      <h3>Computing Square Roots</h3>

      <Theorem title="Tonelli-Shanks Algorithm"
        proof={
          <>
            <p><strong>Special case <MathBlock math="p \equiv 3 \pmod{4}" inline />:</strong></p>
            <p>Let <em>a</em> be a QR modulo <em>p</em>, and set <MathBlock math="x = a^{(p+1)/4}" inline />. We verify <MathBlock math="x^2 = a" inline />:</p>
            <MathBlock math="x^2 = a^{(p+1)/2} = a^{(p-1)/2} \cdot a" />
            <p>Since <em>a</em> is a QR, by Euler's criterion <MathBlock math="a^{(p-1)/2} \equiv 1 \pmod{p}" inline />. Thus:</p>
            <MathBlock math="x^2 \equiv 1 \cdot a = a \pmod{p}" />
            <p>so <em>x</em> is indeed a square root of <em>a</em>.</p>
            <p><strong>General case (Tonelli-Shanks):</strong></p>
            <p>Write <MathBlock math="p - 1 = 2^s \cdot t" inline /> where <em>t</em> is odd. The algorithm works by finding the square root in stages.</p>
            <ol className="list-decimal list-inside mt-2 space-y-1">
              <li>Find a QNR <em>n</em> modulo <em>p</em> (by trying random elements)</li>
              <li>Set <MathBlock math="b = n^t" inline />, so <em>b</em> has order <MathBlock math="2^s" inline /> in <MathBlock math="\mathbb{F}_p^*" inline /></li>
              <li>Set <MathBlock math="x = a^{(t+1)/2}" inline />, so <MathBlock math="x^2 = a^{t+1} = a \cdot a^t" inline /></li>
              <li>The ratio <MathBlock math="x^2/a = a^t" inline /> has order dividing <MathBlock math="2^{s-1}" inline /></li>
              <li>Iteratively multiply <em>x</em> by powers of <em>b</em> to adjust until <MathBlock math="x^2 = a" inline /></li>
            </ol>
            <p>Each iteration reduces the 2-adic order of the discrepancy, converging in at most <em>s</em> steps.</p>
          </>
        }
      >
        If <em>a</em> is a QR modulo <em>p</em>, we can compute <MathBlock math="\sqrt{a} \pmod{p}" inline />{' '}
        in polynomial time. For <MathBlock math="p \equiv 3 \pmod{4}" inline />, there's a simple formula:
        <MathBlock math="x = a^{(p+1)/4} \pmod{p}" />
      </Theorem>

      <Example title="Square Root mod p ≡ 3 (mod 4)">
        <p>Find <MathBlock math="\sqrt{2} \pmod{7}" inline />.</p>
        <p className="mt-2"><strong>Solution:</strong> Since <MathBlock math="7 \equiv 3 \pmod{4}" inline />:</p>
        <MathBlock math="x = 2^{(7+1)/4} = 2^2 = 4 \pmod{7}" />
        <p>Check: <MathBlock math="4^2 = 16 \equiv 2 \pmod{7}" inline /> ✓</p>
        <p className="mt-2">The other root is <MathBlock math="-4 \equiv 3 \pmod{7}" inline />.</p>
      </Example>

      <h3>Cryptographic Applications</h3>

      <div className="bg-dark-800/50 rounded-xl p-4 border border-dark-700 my-4">
        <h4 className="text-lg font-semibold text-primary-400 mb-3">Applications</h4>
        <ul className="list-disc list-inside space-y-2 text-dark-300">
          <li><strong>Rabin Cryptosystem:</strong> Security based on difficulty of computing square roots mod <em>n = pq</em></li>
          <li><strong>Primality Testing:</strong> Solovay-Strassen test uses Jacobi symbol</li>
          <li><strong>Quadratic Residuosity Problem:</strong> Hard to determine if <em>a</em> is QR mod composite <em>n</em></li>
          <li><strong>Goldwasser-Micali:</strong> Probabilistic encryption based on QR problem</li>
        </ul>
      </div>

      <Callout type="success">
        <strong>Key Insight:</strong> Computing square roots mod <em>p</em> is easy, but computing
        square roots mod <MathBlock math="n = pq" inline /> (without knowing <em>p</em> and <em>q</em>)
        is as hard as factoring <em>n</em>.
      </Callout>
    </LessonLayout>
  );
}
