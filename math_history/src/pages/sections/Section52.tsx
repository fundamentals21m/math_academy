import { LessonLayout } from '@/components/layout/LessonLayout';
import { Definition, Theorem, Example } from '@/components/common/ContentBlocks';
import { Callout } from '@/components/common/Callout';
import { MathBlock, InlineMath } from '@/components/common/MathBlock';
import { SectionQuiz } from '@/components/quiz/SectionQuiz';
import { quizMap } from '@/data/quizzes';

export default function Section52() {
  return (
    <LessonLayout sectionId={52}>
      <h2>The Quintic</h2>

      <p>
        For centuries, mathematicians sought formulas for solving polynomial
        equations using only arithmetic operations and root extraction (radicals).
        Success came for degrees 2, 3, and 4. But in the early 19th century,
        Abel and Galois proved the shocking truth: no such formula exists for
        the general quintic. This impossibility result revolutionized algebra.
      </p>

      <Callout type="info">
        <strong>A Paradigm Shift:</strong> Before Abel, mathematicians assumed
        a formula existed and just needed to be found. After Abel, mathematics
        learned that some problems have no solutions of a certain type—and
        that proving impossibility is as important as finding solutions.
      </Callout>

      <h3>The Classical Formulas</h3>

      <p>
        The progression of solution formulas suggested a pattern:
      </p>

      <Example title="Solutions by Radicals">
        <p><strong>Degree 2 (ancient):</strong></p>
        <MathBlock>
          {`x = \\frac{-b \\pm \\sqrt{b^2 - 4ac}}{2a}`}
        </MathBlock>
        <p className="mt-2"><strong>Degree 3 (Cardano, 1545):</strong></p>
        <MathBlock>
          {`x = \\sqrt[3]{-\\frac{q}{2} + \\sqrt{\\frac{q^2}{4} + \\frac{p^3}{27}}} + \\sqrt[3]{-\\frac{q}{2} - \\sqrt{\\frac{q^2}{4} + \\frac{p^3}{27}}}`}
        </MathBlock>
        <p className="mt-2"><strong>Degree 4 (Ferrari, 1545):</strong></p>
        <p className="text-dark-400">
          Solved by reducing to a cubic auxiliary equation.
        </p>
      </Example>

      <p>
        These formulas express roots using only <InlineMath>+, -, \times, \div</InlineMath>{' '}
        and <InlineMath>n</InlineMath>th roots. For degree 5, mathematicians
        searched for 250 years—and failed.
      </p>

      <h3>Abel's Impossibility Theorem</h3>

      <p>
        Niels Henrik Abel (1802-1829) proved in 1824 that no such formula
        can exist:
      </p>

      <Theorem title="Abel-Ruffini Theorem">
        <p>
          There is no general algebraic solution—no formula involving only
          arithmetic operations and radicals—for polynomial equations of
          degree 5 or higher.
        </p>
      </Theorem>

      <Callout type="note">
        <strong>What This Means:</strong> The theorem doesn't say quintics
        have no solutions (they do, by the Fundamental Theorem). It says
        there's no universal formula like the quadratic formula that works
        for all quintics.
      </Callout>

      <h3>Lagrange's Analysis</h3>

      <p>
        Joseph-Louis Lagrange laid the groundwork by analyzing why the
        classical methods worked:
      </p>

      <Example title="Lagrange Resolvents">
        <p>
          For a cubic with roots <InlineMath>r_1, r_2, r_3</InlineMath>,
          Lagrange considered:
        </p>
        <MathBlock>
          {`y = r_1 + \\omega r_2 + \\omega^2 r_3`}
        </MathBlock>
        <p className="mt-2">
          where <InlineMath>{`\\omega = e^{2\\pi i/3}`}</InlineMath> is a
          primitive cube root of unity. The six permutations of roots give
          only two values of <InlineMath>y^3</InlineMath>—which satisfies
          a quadratic!
        </p>
        <p className="mt-2 text-dark-400">
          This "degree reduction" is why cubics are solvable.
        </p>
      </Example>

      <p>
        Lagrange showed that for the quintic, the analogous construction
        gives a resolvent of degree 6, not lower—no simplification occurs.
      </p>

      <h3>Galois Theory</h3>

      <p>
        Évariste Galois (1811-1832), killed in a duel at age 20, created
        the definitive theory explaining solvability:
      </p>

      <Definition title="Galois Group">
        <p>
          The <strong>Galois group</strong> of a polynomial is the group of
          permutations of its roots that preserve all algebraic relations
          among them.
        </p>
      </Definition>

      <Theorem title="Galois's Criterion">
        <p>
          A polynomial is solvable by radicals if and only if its Galois
          group is a <strong>solvable group</strong>—one that can be built
          up from abelian groups through a series of extensions.
        </p>
      </Theorem>

      <Example title="Why the Quintic Fails">
        <p>
          The general quintic has Galois group <InlineMath>S_5</InlineMath>{' '}
          (all permutations of 5 elements). This group is not solvable because
          it contains <InlineMath>A_5</InlineMath> (the alternating group),
          which is simple (no normal subgroups) and non-abelian.
        </p>
        <p className="mt-2 text-dark-400">
          The "obstruction" to solvability is group-theoretic: <InlineMath>A_5</InlineMath>{' '}
          cannot be broken down into abelian pieces.
        </p>
      </Example>

      <h3>Specific Solvable Quintics</h3>

      <p>
        While the <em>general</em> quintic is unsolvable, specific quintics
        may be solvable:
      </p>

      <Example title="Solvable Quintics">
        <ul className="list-disc list-inside space-y-2">
          <li>
            <InlineMath>{`x^5 - 1 = 0`}</InlineMath>: Roots are 5th roots of
            unity, expressible by radicals.
          </li>
          <li>
            <InlineMath>{`x^5 - 2 = 0`}</InlineMath>: Root is{' '}
            <InlineMath>{`\\sqrt[5]{2}`}</InlineMath>.
          </li>
          <li>
            <InlineMath>{`x^5 - 5x + 12 = 0`}</InlineMath>: Has a solvable
            Galois group (not <InlineMath>S_5</InlineMath>).
          </li>
        </ul>
      </Example>

      <Callout type="warning">
        <strong>Not All Quintics Are Unsolvable:</strong> The theorem says
        there's no <em>general</em> formula. Specific quintics with special
        structure (smaller Galois groups) can still be solved by radicals.
      </Callout>

      <h3>Beyond Radicals</h3>

      <p>
        Even though the general quintic can't be solved by radicals, it can
        be solved by other means:
      </p>

      <ul className="list-disc list-inside space-y-2 mt-4">
        <li>
          <strong>Bring-Jerrard form:</strong> Every quintic can be transformed
          to <InlineMath>{`x^5 + x + a = 0`}</InlineMath>.
        </li>
        <li>
          <strong>Elliptic functions:</strong> Hermite showed quintics can
          be solved using elliptic modular functions.
        </li>
        <li>
          <strong>Numerical methods:</strong> Newton's method and other
          algorithms find roots to any precision.
        </li>
        <li>
          <strong>Hypergeometric functions:</strong> Solutions can be
          expressed using generalized hypergeometric series.
        </li>
      </ul>

      <h3>The Legacy</h3>

      <p>
        The quintic problem transformed mathematics:
      </p>

      <ul className="list-disc list-inside space-y-2 mt-4">
        <li>
          <strong>Group theory:</strong> Born from Galois's analysis of
          solvability.
        </li>
        <li>
          <strong>Impossibility proofs:</strong> Established that proving
          something impossible is mathematically rigorous and important.
        </li>
        <li>
          <strong>Abstract algebra:</strong> Shifted focus from computation
          to structure.
        </li>
        <li>
          <strong>Field theory:</strong> The study of field extensions
          emerged from understanding solvability.
        </li>
      </ul>

      <Callout type="info">
        <strong>Galois's Tragic Life:</strong> Galois developed his
        revolutionary theory as a teenager, was rejected by the mathematical
        establishment, imprisoned for political activities, and killed in
        a duel at 20. The night before the duel, he frantically wrote down
        his mathematical ideas—work that would reshape algebra.
      </Callout>

      <SectionQuiz sectionId={52} questions={quizMap[52] || []} title="Check Your Understanding" />
    </LessonLayout>
  );
}
