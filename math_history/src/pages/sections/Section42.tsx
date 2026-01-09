import { LessonLayout } from '@/components/layout/LessonLayout';
import { Definition, Theorem, Example } from '@/components/common/ContentBlocks';
import { Callout } from '@/components/common/Callout';
import { MathBlock, InlineMath } from '@/components/common/MathBlock';
import { SectionQuiz } from '@/components/quiz/SectionQuiz';
import { quizMap } from '@/data/quizzes';

export default function Section42() {
  return (
    <LessonLayout sectionId={42}>
      <h2>Quadratic Reciprocity</h2>

      <p>
        Carl Friedrich Gauss (1777-1855) called the law of quadratic reciprocity
        the "golden theorem" of number theory. He discovered it at age 18 and
        eventually gave eight different proofs. This theorem reveals a deep
        symmetry in how quadratic equations behave modulo different primes.
      </p>

      <Callout type="info">
        <strong>The Prince of Mathematicians:</strong> Gauss's{' '}
        <em>Disquisitiones Arithmeticae</em> (1801), written when he was 21,
        revolutionized number theory. It introduced modular arithmetic notation,
        proved quadratic reciprocity, and established number theory as a
        rigorous discipline.
      </Callout>

      <h3>Quadratic Residues</h3>

      <p>
        The central question: for which primes <InlineMath>p</InlineMath> does
        the equation <InlineMath>{`x^2 \\equiv a \\pmod{p}`}</InlineMath> have
        a solution?
      </p>

      <Definition title="Quadratic Residue">
        <p>
          An integer <InlineMath>a</InlineMath> is a <strong>quadratic residue</strong>{' '}
          modulo <InlineMath>p</InlineMath> if the equation{' '}
          <InlineMath>{`x^2 \\equiv a \\pmod{p}`}</InlineMath> has a solution.
        </p>
        <p className="mt-2">
          Otherwise, <InlineMath>a</InlineMath> is a <strong>quadratic non-residue</strong>.
        </p>
      </Definition>

      <Example title="Residues Modulo 7">
        <p>
          Computing squares modulo 7:
        </p>
        <ul className="list-disc list-inside mt-2">
          <li><InlineMath>{`1^2 \\equiv 1`}</InlineMath></li>
          <li><InlineMath>{`2^2 \\equiv 4`}</InlineMath></li>
          <li><InlineMath>{`3^2 \\equiv 9 \\equiv 2`}</InlineMath></li>
          <li><InlineMath>{`4^2 \\equiv 16 \\equiv 2`}</InlineMath></li>
          <li><InlineMath>{`5^2 \\equiv 25 \\equiv 4`}</InlineMath></li>
          <li><InlineMath>{`6^2 \\equiv 36 \\equiv 1`}</InlineMath></li>
        </ul>
        <p className="mt-2">
          <strong>Quadratic residues mod 7:</strong> 1, 2, 4
        </p>
        <p>
          <strong>Quadratic non-residues mod 7:</strong> 3, 5, 6
        </p>
      </Example>

      <h3>The Legendre Symbol</h3>

      <p>
        Adrien-Marie Legendre introduced notation that makes the theory elegant:
      </p>

      <Definition title="Legendre Symbol">
        <p>
          For an odd prime <InlineMath>p</InlineMath> and integer{' '}
          <InlineMath>a</InlineMath> with <InlineMath>{`p \\nmid a`}</InlineMath>:
        </p>
        <MathBlock>
          {`\\left(\\frac{a}{p}\\right) = \\begin{cases} 1 & \\text{if } a \\text{ is a quadratic residue mod } p \\\\ -1 & \\text{if } a \\text{ is a quadratic non-residue mod } p \\end{cases}`}
        </MathBlock>
      </Definition>

      <Theorem title="Euler's Criterion">
        <MathBlock>
          {`\\left(\\frac{a}{p}\\right) \\equiv a^{(p-1)/2} \\pmod{p}`}
        </MathBlock>
        <p className="mt-2 text-dark-400">
          This provides a computational method: raise <InlineMath>a</InlineMath>{' '}
          to the power <InlineMath>{`(p-1)/2`}</InlineMath> and check if the
          result is 1 or -1.
        </p>
      </Theorem>

      <h3>Special Cases</h3>

      <p>
        Two special cases were known before the general law:
      </p>

      <Theorem title="When is -1 a Square?">
        <MathBlock>
          {`\\left(\\frac{-1}{p}\\right) = \\begin{cases} 1 & \\text{if } p \\equiv 1 \\pmod{4} \\\\ -1 & \\text{if } p \\equiv 3 \\pmod{4} \\end{cases}`}
        </MathBlock>
        <p className="mt-2 text-dark-400">
          For example, -1 is a square mod 5, 13, 17 but not mod 3, 7, 11.
        </p>
      </Theorem>

      <Theorem title="When is 2 a Square?">
        <MathBlock>
          {`\\left(\\frac{2}{p}\\right) = \\begin{cases} 1 & \\text{if } p \\equiv \\pm 1 \\pmod{8} \\\\ -1 & \\text{if } p \\equiv \\pm 3 \\pmod{8} \\end{cases}`}
        </MathBlock>
        <p className="mt-2 text-dark-400">
          For example, 2 is a square mod 7, 17, 23 but not mod 3, 5, 11, 13.
        </p>
      </Theorem>

      <h3>The Law of Quadratic Reciprocity</h3>

      <p>
        The remarkable theorem relates whether <InlineMath>p</InlineMath> is a
        square mod <InlineMath>q</InlineMath> to whether <InlineMath>q</InlineMath>{' '}
        is a square mod <InlineMath>p</InlineMath>:
      </p>

      <Theorem title="Quadratic Reciprocity (Gauss, 1796)">
        <p>For distinct odd primes <InlineMath>p</InlineMath> and <InlineMath>q</InlineMath>:</p>
        <MathBlock>
          {`\\left(\\frac{p}{q}\\right)\\left(\\frac{q}{p}\\right) = (-1)^{\\frac{p-1}{2} \\cdot \\frac{q-1}{2}}`}
        </MathBlock>
        <p className="mt-2">Equivalently:</p>
        <ul className="list-disc list-inside mt-2">
          <li>
            If <InlineMath>{`p \\equiv 1 \\pmod{4}`}</InlineMath> or{' '}
            <InlineMath>{`q \\equiv 1 \\pmod{4}`}</InlineMath>, then{' '}
            <InlineMath>{`\\left(\\frac{p}{q}\\right) = \\left(\\frac{q}{p}\\right)`}</InlineMath>
          </li>
          <li>
            If <InlineMath>{`p \\equiv q \\equiv 3 \\pmod{4}`}</InlineMath>, then{' '}
            <InlineMath>{`\\left(\\frac{p}{q}\\right) = -\\left(\\frac{q}{p}\\right)`}</InlineMath>
          </li>
        </ul>
      </Theorem>

      <Example title="Is 3 a Square Mod 13?">
        <p>
          We want <InlineMath>{`\\left(\\frac{3}{13}\\right)`}</InlineMath>.
        </p>
        <p className="mt-2">
          Since <InlineMath>{`13 \\equiv 1 \\pmod{4}`}</InlineMath>, reciprocity gives:
        </p>
        <MathBlock>
          {`\\left(\\frac{3}{13}\\right) = \\left(\\frac{13}{3}\\right) = \\left(\\frac{1}{3}\\right) = 1`}
        </MathBlock>
        <p className="mt-2">
          So yes, 3 is a square mod 13. Indeed, <InlineMath>{`4^2 = 16 \\equiv 3 \\pmod{13}`}</InlineMath>.
        </p>
      </Example>

      <Callout type="note">
        <strong>Computational Power:</strong> Without reciprocity, determining
        whether large numbers are quadratic residues would require computing
        square roots. With it, we can reduce the question to smaller primes
        iteratively.
      </Callout>

      <h3>Gauss's Proofs</h3>

      <p>
        Gauss gave eight different proofs of quadratic reciprocity, each
        revealing different aspects:
      </p>

      <ul className="list-disc list-inside space-y-2 mt-4">
        <li>
          <strong>First proof (1796):</strong> Induction on primes, using
          careful case analysis.
        </li>
        <li>
          <strong>Gauss sums (1801):</strong> Using the sum{' '}
          <InlineMath>{`\\sum_{a=0}^{p-1} \\left(\\frac{a}{p}\\right) e^{2\\pi i a/p}`}</InlineMath>,
          connecting to roots of unity.
        </li>
        <li>
          <strong>Gauss's lemma:</strong> Counting how many products{' '}
          <InlineMath>ka</InlineMath> exceed <InlineMath>p/2</InlineMath>.
        </li>
      </ul>

      <h3>Higher Reciprocity</h3>

      <p>
        Gauss also began investigating cubic and biquadratic reciprocity,
        which led him to introduce the Gaussian integers{' '}
        <InlineMath>{`\\mathbb{Z}[i] = \\{a + bi : a, b \\in \\mathbb{Z}\\}`}</InlineMath>:
      </p>

      <Theorem title="Biquadratic Reciprocity">
        <p>
          The law of biquadratic (fourth power) reciprocity is most naturally
          stated using Gaussian integers, where unique factorization holds.
        </p>
        <p className="mt-2 text-dark-400">
          This was one of the first hints that number theory requires expanding
          beyond the ordinary integers.
        </p>
      </Theorem>

      <Callout type="info">
        <strong>The Beginning of Algebraic Number Theory:</strong> The search
        for higher reciprocity laws led to Eisenstein's work on cubic
        reciprocity (using <InlineMath>{`\\mathbb{Z}[\\omega]`}</InlineMath> where{' '}
        <InlineMath>{`\\omega = e^{2\\pi i/3}`}</InlineMath>), and eventually to
        Kummer's ideal numbers and Dedekind's ideals—the foundations of
        algebraic number theory.
      </Callout>

      <SectionQuiz sectionId={42} questions={quizMap[42] || []} title="Check Your Understanding" />
    </LessonLayout>
  );
}
