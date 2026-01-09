import { LessonLayout } from '@/components/layout/LessonLayout';
import { Definition, Theorem, Example } from '@/components/common/ContentBlocks';
import { Callout } from '@/components/common/Callout';
import { MathBlock, InlineMath } from '@/components/common/MathBlock';
import { SectionQuiz } from '@/components/quiz/SectionQuiz';
import { quizMap } from '@/data/quizzes';

export default function Section50() {
  return (
    <LessonLayout sectionId={50}>
      <h2>The Fundamental Theorem of Algebra</h2>

      <p>
        The Fundamental Theorem of Algebra is one of the most important
        results in mathematics: every non-constant polynomial with complex
        coefficients has at least one complex root. This guarantees that
        polynomials can always be completely factored over the complex numbers,
        making <InlineMath>\mathbb{C}</InlineMath> "algebraically closed."
      </p>

      <Callout type="info">
        <strong>Why "Fundamental"?</strong> This theorem ensures that the
        complex numbers are sufficient for solving all polynomial equations.
        No further extension of the number system is needed for algebra.
      </Callout>

      <h3>Statement of the Theorem</h3>

      <Theorem title="The Fundamental Theorem of Algebra">
        <p>
          Every polynomial of degree <InlineMath>{`n \\geq 1`}</InlineMath> with
          complex coefficients:
        </p>
        <MathBlock>
          {`p(z) = a_n z^n + a_{n-1} z^{n-1} + \\cdots + a_1 z + a_0`}
        </MathBlock>
        <p className="mt-2">
          has at least one root in <InlineMath>\mathbb{C}</InlineMath>.
        </p>
      </Theorem>

      <p>
        An immediate corollary is complete factorization:
      </p>

      <Theorem title="Complete Factorization">
        <p>
          Every polynomial of degree <InlineMath>n</InlineMath> factors
          completely into linear factors:
        </p>
        <MathBlock>
          {`p(z) = a_n(z - r_1)(z - r_2)\\cdots(z - r_n)`}
        </MathBlock>
        <p className="mt-2">
          where <InlineMath>r_1, \ldots, r_n</InlineMath> are the roots
          (possibly repeated).
        </p>
      </Theorem>

      <h3>Historical Development</h3>

      <p>
        The theorem was conjectured long before it was proved:
      </p>

      <ul className="list-disc list-inside space-y-2 mt-4">
        <li>
          <strong>Girard (1629):</strong> Stated that an <InlineMath>n</InlineMath>th
          degree equation has <InlineMath>n</InlineMath> solutions (counting
          multiplicities and complex roots).
        </li>
        <li>
          <strong>Descartes (1637):</strong> Acknowledged "imaginary" roots
          but didn't fully develop the theory.
        </li>
        <li>
          <strong>d'Alembert (1746):</strong> Gave the first attempted proof,
          with gaps.
        </li>
        <li>
          <strong>Euler (1749):</strong> Proved special cases.
        </li>
        <li>
          <strong>Gauss (1799):</strong> Gave the first rigorous proof in
          his doctoral dissertation.
        </li>
      </ul>

      <Callout type="note">
        <strong>Gauss's Contributions:</strong> Gauss gave four different
        proofs of the FTA throughout his life, using geometric, algebraic,
        and analytic methods. His first proof criticized earlier attempts
        and established new standards of rigor.
      </Callout>

      <h3>Why the Proof is Hard</h3>

      <p>
        Despite its algebraic statement, the theorem cannot be proved using
        only algebra. Some "analytic" or "topological" ingredient is essential:
      </p>

      <Example title="The Need for Analysis">
        <p>
          The real numbers <InlineMath>\mathbb{R}</InlineMath> are not
          algebraically closed—<InlineMath>{`x^2 + 1 = 0`}</InlineMath> has
          no real roots. What makes <InlineMath>\mathbb{C}</InlineMath> different?
        </p>
        <p className="mt-2">
          The key is that <InlineMath>\mathbb{C}</InlineMath> is{' '}
          <strong>complete</strong> (like <InlineMath>\mathbb{R}</InlineMath>)
          and <strong>algebraically structured</strong> in the right way.
          Proving this requires analysis.
        </p>
      </Example>

      <h3>Proof Approaches</h3>

      <p>
        Several different proofs exist, each using different machinery:
      </p>

      <Definition title="Analytic Proof (Liouville)">
        <p>
          If <InlineMath>p(z)</InlineMath> has no roots, then{' '}
          <InlineMath>1/p(z)</InlineMath> is entire (analytic everywhere)
          and bounded (since <InlineMath>{`|p(z)| \\to \\infty`}</InlineMath>{' '}
          as <InlineMath>{`|z| \\to \\infty`}</InlineMath>). By Liouville's
          theorem, it must be constant—contradiction.
        </p>
      </Definition>

      <Definition title="Topological Proof">
        <p>
          For large <InlineMath>|z|</InlineMath>, the map{' '}
          <InlineMath>{`z \\mapsto p(z)`}</InlineMath> winds around the origin
          <InlineMath>n</InlineMath> times. By continuity, as we shrink
          toward the origin, the winding number can't suddenly become zero
          unless we pass through zero—so <InlineMath>p</InlineMath> must
          have a root.
        </p>
      </Definition>

      <Definition title="Algebraic Proof (Requires Real Analysis)">
        <p>
          Using that <InlineMath>\mathbb{R}</InlineMath> has no proper
          finite algebraic extensions of odd degree (a consequence of the
          intermediate value theorem), one can prove that{' '}
          <InlineMath>\mathbb{C}</InlineMath> is algebraically closed.
        </p>
      </Definition>

      <h3>Consequences</h3>

      <p>
        The FTA has numerous important consequences:
      </p>

      <Example title="Real Polynomials Factor into Linear and Quadratic Factors">
        <p>
          Since complex roots of real polynomials come in conjugate pairs
          (<InlineMath>a + bi</InlineMath> and <InlineMath>a - bi</InlineMath>),
          every real polynomial factors into linear factors (for real roots)
          and irreducible quadratic factors (for complex conjugate pairs):
        </p>
        <MathBlock>
          {`(x - r_1)(x - r_2)\\cdots(x^2 + bx + c)(x^2 + dx + e)\\cdots`}
        </MathBlock>
      </Example>

      <Example title="Partial Fractions">
        <p>
          The FTA guarantees that every rational function can be decomposed
          into partial fractions—essential for integration:
        </p>
        <MathBlock>
          {`\\frac{P(x)}{Q(x)} = \\sum \\frac{A_i}{(x-r_i)^k} + \\sum \\frac{Bx + C}{(x^2+bx+c)^m}`}
        </MathBlock>
      </Example>

      <h3>Algebraic Closure</h3>

      <p>
        The FTA says precisely that <InlineMath>\mathbb{C}</InlineMath> is
        algebraically closed:
      </p>

      <Definition title="Algebraically Closed Field">
        <p>
          A field <InlineMath>F</InlineMath> is <strong>algebraically closed</strong>{' '}
          if every non-constant polynomial with coefficients in{' '}
          <InlineMath>F</InlineMath> has a root in <InlineMath>F</InlineMath>.
        </p>
      </Definition>

      <Callout type="info">
        <strong>Uniqueness:</strong> The complex numbers are (up to isomorphism)
        the unique algebraic closure of <InlineMath>\mathbb{R}</InlineMath>.
        There's no need to extend further—<InlineMath>\mathbb{C}</InlineMath>{' '}
        is complete for solving polynomial equations.
      </Callout>

      <h3>Beyond Polynomials</h3>

      <p>
        While the FTA settles polynomial equations, it raises questions:
      </p>

      <ul className="list-disc list-inside space-y-2 mt-4">
        <li>
          <strong>Can we find roots explicitly?</strong> Yes for degree ≤ 4,
          but not by radicals for degree ≥ 5 (Abel-Ruffini theorem).
        </li>
        <li>
          <strong>How are roots distributed?</strong> This leads to the
          theory of symmetric functions and Galois theory.
        </li>
        <li>
          <strong>What about other equations?</strong> Transcendental
          equations like <InlineMath>{`e^z = z`}</InlineMath> require
          different techniques.
        </li>
      </ul>

      <SectionQuiz sectionId={50} questions={quizMap[50] || []} title="Check Your Understanding" />
    </LessonLayout>
  );
}
