import { LessonLayout } from '@/components/layout/LessonLayout';
import { Definition, Theorem, Example } from '@/components/common/ContentBlocks';
import { Callout } from '@/components/common/Callout';
import { MathBlock, InlineMath } from '@/components/common/MathBlock';
import { SectionQuiz } from '@/components/quiz/SectionQuiz';
import { quizMap } from '@/data/quizzes';

export default function Section54() {
  return (
    <LessonLayout sectionId={54}>
      <h2>Cauchy and Complex Integration</h2>

      <p>
        Augustin-Louis Cauchy (1789-1857) developed the theory of complex
        integration, establishing results that seem almost magical: integrals
        around closed curves are often zero, and when they're not, they reveal
        deep information about the function's singularities. The residue
        theorem provides a powerful tool for computing integrals that seem
        intractable by other methods.
      </p>

      <Callout type="info">
        <strong>Integration in 2D:</strong> Unlike real integration along
        a line, complex integration is along curves in the 2D plane. The
        path matters—or does it?
      </Callout>

      <h3>Contour Integrals</h3>

      <Definition title="Complex Line Integral">
        <p>
          If <InlineMath>\gamma</InlineMath> is a curve parametrized by{' '}
          <InlineMath>{`z(t)`}</InlineMath> for <InlineMath>{`t \\in [a,b]`}</InlineMath>:
        </p>
        <MathBlock>
          {`\\int_\\gamma f(z)\\, dz = \\int_a^b f(z(t)) z'(t)\\, dt`}
        </MathBlock>
      </Definition>

      <Example title="A Simple Integral">
        <p>
          Compute <InlineMath>{`\\oint_{|z|=1} z\\, dz`}</InlineMath> around
          the unit circle.
        </p>
        <p className="mt-2">
          Parametrize: <InlineMath>{`z = e^{it}`}</InlineMath>,{' '}
          <InlineMath>{`dz = ie^{it}dt`}</InlineMath>:
        </p>
        <MathBlock>
          {`\\int_0^{2\\pi} e^{it} \\cdot ie^{it}\\, dt = i\\int_0^{2\\pi} e^{2it}\\, dt = \\frac{i}{2i}[e^{2it}]_0^{2\\pi} = 0`}
        </MathBlock>
      </Example>

      <h3>Cauchy's Theorem</h3>

      <p>
        Cauchy's fundamental theorem says that for analytic functions, the
        integral around a closed curve is zero:
      </p>

      <Theorem title="Cauchy's Theorem">
        <p>
          If <InlineMath>f</InlineMath> is analytic on and inside a simple
          closed curve <InlineMath>\gamma</InlineMath>, then:
        </p>
        <MathBlock>
          {`\\oint_\\gamma f(z)\\, dz = 0`}
        </MathBlock>
      </Theorem>

      <p>
        This has a remarkable consequence—path independence:
      </p>

      <Theorem title="Path Independence">
        <p>
          If <InlineMath>f</InlineMath> is analytic in a simply connected
          domain, then <InlineMath>{`\\int_\\gamma f\\, dz`}</InlineMath>{' '}
          depends only on the endpoints, not the path.
        </p>
      </Theorem>

      <h3>Cauchy's Integral Formula</h3>

      <p>
        An analytic function's values are completely determined by its values
        on a surrounding curve:
      </p>

      <Theorem title="Cauchy's Integral Formula">
        <p>
          If <InlineMath>f</InlineMath> is analytic inside and on a simple
          closed curve <InlineMath>\gamma</InlineMath>, and{' '}
          <InlineMath>z_0</InlineMath> is inside <InlineMath>\gamma</InlineMath>:
        </p>
        <MathBlock>
          {`f(z_0) = \\frac{1}{2\\pi i} \\oint_\\gamma \\frac{f(z)}{z - z_0}\\, dz`}
        </MathBlock>
      </Theorem>

      <Callout type="note">
        <strong>Remarkable Consequences:</strong> From Cauchy's formula,
        one can derive that analytic functions have derivatives of all orders,
        satisfy the maximum modulus principle, and are determined by their
        boundary values.
      </Callout>

      <h3>Singularities and Residues</h3>

      <p>
        When a function has singularities (points where it's not analytic),
        integrals around curves enclosing them are no longer zero:
      </p>

      <Definition title="Types of Singularities">
        <ul className="list-disc list-inside space-y-2">
          <li>
            <strong>Removable:</strong> The singularity can be "filled in"
            to make <InlineMath>f</InlineMath> analytic (like{' '}
            <InlineMath>{`\\sin z/z`}</InlineMath> at 0)
          </li>
          <li>
            <strong>Pole:</strong> <InlineMath>{`f(z) \\sim c/(z-z_0)^n`}</InlineMath>{' '}
            near <InlineMath>z_0</InlineMath>
          </li>
          <li>
            <strong>Essential:</strong> Neither removable nor a pole (like{' '}
            <InlineMath>{`e^{1/z}`}</InlineMath> at 0)
          </li>
        </ul>
      </Definition>

      <Definition title="Residue">
        <p>
          The <strong>residue</strong> of <InlineMath>f</InlineMath> at an
          isolated singularity <InlineMath>z_0</InlineMath> is the coefficient{' '}
          <InlineMath>a_{'{-1}'}</InlineMath> in the Laurent series:
        </p>
        <MathBlock>
          {`f(z) = \\sum_{n=-\\infty}^{\\infty} a_n (z - z_0)^n`}
        </MathBlock>
        <p className="mt-2">
          Equivalently: <InlineMath>{`\\text{Res}_{z_0}(f) = \\frac{1}{2\\pi i}\\oint f(z)\\, dz`}</InlineMath>
        </p>
      </Definition>

      <h3>The Residue Theorem</h3>

      <Theorem title="The Residue Theorem">
        <p>
          If <InlineMath>f</InlineMath> is analytic inside and on a simple
          closed curve <InlineMath>\gamma</InlineMath> except for isolated
          singularities <InlineMath>z_1, \ldots, z_n</InlineMath> inside:
        </p>
        <MathBlock>
          {`\\oint_\\gamma f(z)\\, dz = 2\\pi i \\sum_{k=1}^{n} \\text{Res}_{z_k}(f)`}
        </MathBlock>
      </Theorem>

      <Example title="Computing a Residue">
        <p>For <InlineMath>{`f(z) = \\frac{1}{z^2 + 1} = \\frac{1}{(z-i)(z+i)}`}</InlineMath>:</p>
        <p className="mt-2">
          At <InlineMath>z = i</InlineMath>:
        </p>
        <MathBlock>
          {`\\text{Res}_i(f) = \\lim_{z \\to i} (z-i) \\cdot \\frac{1}{(z-i)(z+i)} = \\frac{1}{2i}`}
        </MathBlock>
      </Example>

      <h3>Applications to Real Integrals</h3>

      <p>
        The residue theorem powerfully evaluates real integrals:
      </p>

      <Example title="A Classic Integral">
        <p>Compute <InlineMath>{`\\int_{-\\infty}^{\\infty} \\frac{dx}{1 + x^2}`}</InlineMath>.</p>
        <p className="mt-2">
          Close the contour with a semicircle in the upper half-plane. The
          only pole inside is at <InlineMath>z = i</InlineMath> with residue{' '}
          <InlineMath>1/2i</InlineMath>:
        </p>
        <MathBlock>
          {`\\int_{-\\infty}^{\\infty} \\frac{dx}{1+x^2} = 2\\pi i \\cdot \\frac{1}{2i} = \\pi`}
        </MathBlock>
        <p className="mt-2 text-dark-400">
          (The semicircular arc contributes nothing as the radius goes to infinity.)
        </p>
      </Example>

      <Example title="Trigonometric Integrals">
        <p>
          For <InlineMath>{`\\int_0^{2\\pi} \\frac{d\\theta}{2 + \\cos\\theta}`}</InlineMath>,
          substitute <InlineMath>{`z = e^{i\\theta}`}</InlineMath>:
        </p>
        <MathBlock>
          {`\\cos\\theta = \\frac{z + z^{-1}}{2}, \\quad d\\theta = \\frac{dz}{iz}`}
        </MathBlock>
        <p className="mt-2">
          The integral becomes a contour integral around the unit circle,
          easily evaluated by residues.
        </p>
      </Example>

      <h3>Historical Impact</h3>

      <p>
        Cauchy's theory transformed analysis:
      </p>

      <ul className="list-disc list-inside space-y-2 mt-4">
        <li>
          <strong>Rigor in analysis:</strong> Cauchy introduced the modern
          definition of limits and continuity.
        </li>
        <li>
          <strong>Complex integration:</strong> Unified previously scattered
          results.
        </li>
        <li>
          <strong>Applications:</strong> From number theory to physics,
          complex integration became indispensable.
        </li>
        <li>
          <strong>Foundation for more:</strong> Led to Riemann surfaces,
          algebraic geometry, and modern algebraic topology.
        </li>
      </ul>

      <Callout type="info">
        <strong>Cauchy's Prolific Output:</strong> Cauchy published over 800
        papers, second only to Euler in volume. His work established complex
        analysis as a fundamental tool of mathematics.
      </Callout>

      <SectionQuiz sectionId={54} questions={quizMap[54] || []} title="Check Your Understanding" />
    </LessonLayout>
  );
}
