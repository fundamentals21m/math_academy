import { LessonLayout } from '@/components/layout/LessonLayout';
import { Callout, MathBlock, InlineMath } from '@/components/common';
import { QuadraticResidueChecker } from '@/components/visualizations';

export default function Section03() {
  return (
    <LessonLayout sectionId={3}>
      <h2>Congruences of the Second Degree</h2>

      <p>
        Section IV of the Disquisitiones is devoted to <strong>quadratic residues</strong>—the
        study of which numbers are perfect squares modulo a prime. This investigation
        culminates in what Gauss called the "golden theorem": the <strong>Law of Quadratic
        Reciprocity</strong>, one of the most beautiful and surprising results in all of
        mathematics.
      </p>

      <h2>Quadratic Residues and Non-Residues</h2>

      <div className="bg-dark-800/50 rounded-xl p-6 border border-amber-500/30 my-6">
        <h3 className="text-lg font-semibold text-amber-400 mb-4">Definition</h3>
        <p className="text-dark-200 mb-4">
          An integer <InlineMath>a</InlineMath> not divisible by an odd prime{' '}
          <InlineMath>p</InlineMath> is called a <strong>quadratic residue</strong> modulo{' '}
          <InlineMath>p</InlineMath> if the congruence{' '}
          <InlineMath>x^2 \equiv a \pmod{p}</InlineMath> has a solution.
        </p>
        <p className="text-dark-300">
          Otherwise, <InlineMath>a</InlineMath> is a <strong>quadratic non-residue</strong>.
        </p>
      </div>

      <p>
        For <InlineMath>p = 7</InlineMath>, let's compute all squares modulo 7:
      </p>

      <div className="bg-dark-800/50 rounded-xl p-6 border border-dark-700 my-6">
        <p className="font-mono text-dark-300">
          1² ≡ 1 (mod 7)<br />
          2² ≡ 4 (mod 7)<br />
          3² ≡ 9 ≡ 2 (mod 7)<br />
          4² ≡ 16 ≡ 2 (mod 7)<br />
          5² ≡ 25 ≡ 4 (mod 7)<br />
          6² ≡ 36 ≡ 1 (mod 7)
        </p>
        <div className="mt-4 flex gap-4">
          <div>
            <span className="text-emerald-400 font-semibold">Quadratic Residues:</span>{' '}
            <span className="font-mono">1, 2, 4</span>
          </div>
          <div>
            <span className="text-rose-400 font-semibold">Non-Residues:</span>{' '}
            <span className="font-mono">3, 5, 6</span>
          </div>
        </div>
      </div>

      <Callout type="info">
        <strong>Key Observation:</strong> For any odd prime <InlineMath>p</InlineMath>,
        exactly half of the non-zero residues are quadratic residues, and half are
        non-residues. There are <InlineMath>(p-1)/2</InlineMath> of each.
      </Callout>

      <h2>The Legendre Symbol</h2>

      <p>
        Gauss introduces a convenient notation (later named after Legendre) to indicate
        whether a number is a quadratic residue:
      </p>

      <div className="bg-dark-800/50 rounded-xl p-6 border border-dark-700 my-6">
        <h3 className="text-lg font-semibold text-primary-400 mb-4">The Legendre Symbol</h3>
        <MathBlock>{`\\left(\\frac{a}{p}\\right) = \\begin{cases} 1 & \\text{if } a \\text{ is a quadratic residue mod } p \\\\ -1 & \\text{if } a \\text{ is a quadratic non-residue mod } p \\\\ 0 & \\text{if } p \\mid a \\end{cases}`}</MathBlock>
      </div>

      <h2>Euler's Criterion</h2>

      <p>
        Gauss proves a beautiful formula for computing the Legendre symbol:
      </p>

      <div className="bg-dark-800/50 rounded-xl p-6 border border-amber-500/30 my-6">
        <h3 className="text-lg font-semibold text-amber-400 mb-4">Euler's Criterion</h3>
        <MathBlock>{`\\left(\\frac{a}{p}\\right) \\equiv a^{(p-1)/2} \\pmod{p}`}</MathBlock>
        <p className="text-dark-300 mt-4">
          That is, <InlineMath>a</InlineMath> is a quadratic residue if and only if{' '}
          <InlineMath>a^{'{(p-1)/2}'} \equiv 1 \pmod{p}</InlineMath>.
        </p>
      </div>

      <p>
        For example, is 2 a quadratic residue mod 7? Compute{' '}
        <InlineMath>2^{'{(7-1)/2}'} = 2^3 = 8 \equiv 1 \pmod 7</InlineMath>. Yes, 2 is a QR mod 7.
      </p>

      <h2>Try It: Quadratic Residue Checker</h2>

      <p>
        Use Euler's criterion to test whether numbers are quadratic residues. See
        all quadratic residues and non-residues for a given prime, along with the
        Legendre symbol computation:
      </p>

      <QuadraticResidueChecker className="my-6" />

      <h2>Special Cases: -1, 2, and 3</h2>

      <p>
        Gauss determines precisely when small numbers are quadratic residues:
      </p>

      <div className="space-y-4 my-6">
        <div className="bg-dark-800/50 rounded-xl p-4 border border-dark-700">
          <h3 className="text-lg font-semibold text-primary-400 mb-2">When is -1 a QR mod p?</h3>
          <MathBlock>{`\\left(\\frac{-1}{p}\\right) = \\begin{cases} 1 & \\text{if } p \\equiv 1 \\pmod{4} \\\\ -1 & \\text{if } p \\equiv 3 \\pmod{4} \\end{cases}`}</MathBlock>
          <p className="text-dark-400 text-sm mt-2">
            Examples: -1 is a QR mod 5, 13, 17, 29... but not mod 3, 7, 11, 19, 23...
          </p>
        </div>

        <div className="bg-dark-800/50 rounded-xl p-4 border border-dark-700">
          <h3 className="text-lg font-semibold text-primary-400 mb-2">When is 2 a QR mod p?</h3>
          <MathBlock>{`\\left(\\frac{2}{p}\\right) = \\begin{cases} 1 & \\text{if } p \\equiv \\pm 1 \\pmod{8} \\\\ -1 & \\text{if } p \\equiv \\pm 3 \\pmod{8} \\end{cases}`}</MathBlock>
          <p className="text-dark-400 text-sm mt-2">
            Examples: 2 is a QR mod 7, 17, 23, 31... but not mod 3, 5, 11, 13, 19...
          </p>
        </div>
      </div>

      <h2>The Law of Quadratic Reciprocity</h2>

      <p>
        The crown jewel of Section IV—and arguably the entire Disquisitiones—is the
        Law of Quadratic Reciprocity. It reveals a stunning symmetry between two different
        primes:
      </p>

      <div className="bg-dark-800/50 rounded-xl p-6 border border-amber-500/30 my-6">
        <h3 className="text-lg font-semibold text-amber-400 mb-4">Law of Quadratic Reciprocity</h3>
        <p className="text-dark-200 mb-4">
          Let <InlineMath>p</InlineMath> and <InlineMath>q</InlineMath> be distinct odd primes. Then:
        </p>
        <MathBlock>{`\\left(\\frac{p}{q}\\right)\\left(\\frac{q}{p}\\right) = (-1)^{\\frac{p-1}{2} \\cdot \\frac{q-1}{2}}`}</MathBlock>
        <p className="text-dark-300 mt-4">Equivalently:</p>
        <MathBlock>{`\\left(\\frac{p}{q}\\right) = \\left(\\frac{q}{p}\\right) \\quad \\text{unless } p \\equiv q \\equiv 3 \\pmod{4}`}</MathBlock>
        <p className="text-dark-300 mt-2">
          In the exceptional case where both primes are ≡ 3 (mod 4), the symbols have
          <em>opposite</em> signs.
        </p>
      </div>

      <Callout type="info">
        <strong>Why "Reciprocity"?</strong> The theorem relates whether <InlineMath>p</InlineMath>{' '}
        is a square mod <InlineMath>q</InlineMath> to whether <InlineMath>q</InlineMath>{' '}
        is a square mod <InlineMath>p</InlineMath>—two seemingly unrelated questions
        connected by a beautiful formula.
      </Callout>

      <div className="bg-dark-800/50 rounded-xl p-6 border border-dark-700 my-6">
        <h3 className="text-lg font-semibold text-primary-400 mb-4">Example: p = 5, q = 11</h3>
        <p className="text-dark-200 mb-2">
          Is 5 a QR mod 11? Is 11 a QR mod 5?
        </p>
        <p className="text-dark-200 mb-2">
          Since 5 ≡ 1 (mod 4) and 11 ≡ 3 (mod 4), the product{' '}
          <InlineMath>\frac{'{5-1}{2}'} \cdot \frac{'{11-1}{2}'} = 2 \cdot 5 = 10</InlineMath>{' '}
          is even.
        </p>
        <p className="text-dark-200 mb-2">
          So <InlineMath>(-1)^{'{10}'} = 1</InlineMath>, meaning the Legendre symbols are equal.
        </p>
        <p className="text-dark-200 mb-2">
          Check: <InlineMath>(5/11) = 5^5 \mod 11 = 3125 \mod 11 = 1</InlineMath>, so 5 is a QR mod 11.
        </p>
        <p className="text-emerald-400">
          Therefore 11 is also a QR mod 5. (Indeed, 11 ≡ 1 ≡ 1² (mod 5) ✓)
        </p>
      </div>

      <h2>Gauss's Proofs</h2>

      <p>
        Gauss considered Quadratic Reciprocity so important that he eventually gave{' '}
        <em>eight different proofs</em> over his lifetime! In the Disquisitiones, he
        presents two proofs: one by induction on the primes, and one using what is
        now called "Gauss's Lemma."
      </p>

      <Callout type="warning">
        <strong>Gauss's Sentiment:</strong> Gauss called Quadratic Reciprocity the
        "theorema aureum" (golden theorem) and spent years searching for the most
        natural proof. He wrote: "It tortured me for a whole year until at last I
        obtained the proof."
      </Callout>

      <h2>Practical Applications</h2>

      <p>
        Quadratic reciprocity allows us to determine whether a number is a quadratic
        residue without computing any square roots:
      </p>

      <div className="bg-dark-800/50 rounded-xl p-6 border border-dark-700 my-6">
        <h3 className="text-lg font-semibold text-primary-400 mb-4">Example: Is 219 a QR mod 383?</h3>
        <p className="text-dark-200 mb-2">
          Factor: 219 = 3 × 73. Use multiplicativity of the Legendre symbol:
        </p>
        <MathBlock>{`\\left(\\frac{219}{383}\\right) = \\left(\\frac{3}{383}\\right)\\left(\\frac{73}{383}\\right)`}</MathBlock>
        <p className="text-dark-200 mt-2">
          Apply reciprocity to each factor and reduce... Eventually we get the answer
          without computing 219<sup>191</sup> mod 383!
        </p>
      </div>

      <h2>Non-Pure Quadratic Congruences</h2>

      <p>
        Gauss also addresses the general quadratic congruence:
      </p>

      <MathBlock>{`ax^2 + bx + c \\equiv 0 \\pmod{p}`}</MathBlock>

      <p>
        By completing the square (when <InlineMath>p \nmid 2a</InlineMath>), this reduces
        to determining whether the discriminant <InlineMath>b^2 - 4ac</InlineMath> is a
        quadratic residue.
      </p>

      <Callout type="success">
        <strong>Looking Ahead:</strong> The study of quadratic residues naturally leads
        to Section V, where Gauss develops the theory of binary quadratic forms—expressions
        of the form <InlineMath>ax^2 + bxy + cy^2</InlineMath>. This theory would eventually
        influence the development of algebraic number theory.
      </Callout>
    </LessonLayout>
  );
}
