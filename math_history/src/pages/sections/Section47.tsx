import { LessonLayout } from '@/components/layout/LessonLayout';
import { Definition, Theorem, Example } from '@/components/common/ContentBlocks';
import { Callout } from '@/components/common/Callout';
import { MathBlock, InlineMath } from '@/components/common/MathBlock';
import { SectionQuiz } from '@/components/quiz/SectionQuiz';
import { quizMap } from '@/data/quizzes';

export default function Section47() {
  return (
    <LessonLayout sectionId={47}>
      <h2>The Brachistochrone</h2>

      <p>
        In June 1696, Johann Bernoulli posed a challenge to the mathematicians
        of Europe: find the curve along which a bead slides from one point to
        another in the shortest time, under gravity alone. This problem—the
        brachistochrone—sparked the development of the calculus of variations
        and revealed deep connections between physics and geometry.
      </p>

      <Callout type="info">
        <strong>The Challenge:</strong> "I, Johann Bernoulli, address the most
        brilliant mathematicians in the world. Nothing is more attractive to
        intelligent people than an honest, challenging problem, whose possible
        solution will bestow fame and remain as a lasting monument."
      </Callout>

      <h3>The Problem</h3>

      <Definition title="The Brachistochrone Problem">
        <p>
          Given two points <InlineMath>A</InlineMath> and <InlineMath>B</InlineMath>{' '}
          in a vertical plane, with <InlineMath>A</InlineMath> higher than{' '}
          <InlineMath>B</InlineMath>, find the curve connecting them along
          which a frictionless bead, starting from rest at <InlineMath>A</InlineMath>,
          slides to <InlineMath>B</InlineMath> in the least time.
        </p>
        <p className="mt-2 text-dark-400">
          The name comes from Greek: <em>brachistos</em> (shortest) +{' '}
          <em>chronos</em> (time).
        </p>
      </Definition>

      <p>
        The straight line is the shortest path, but is it the fastest? No!
        A steeper initial descent lets the bead gain speed quickly, potentially
        compensating for a longer path.
      </p>

      <h3>The Solutions</h3>

      <p>
        Five mathematicians submitted solutions: Newton, Leibniz, Jakob
        Bernoulli, Johann Bernoulli, and l'Hôpital. Newton's anonymous
        submission was recognized immediately—Johann remarked "I recognize
        the lion by his claw."
      </p>

      <Theorem title="The Brachistochrone is a Cycloid">
        <p>
          The curve of fastest descent is an inverted cycloid—the path traced
          by a point on the rim of a rolling circle.
        </p>
        <MathBlock>
          {`x = r(\\theta - \\sin\\theta), \\quad y = r(1 - \\cos\\theta)`}
        </MathBlock>
        <p className="mt-2 text-dark-400">
          The same curve also has the <strong>tautochrone property</strong>:
          the time to reach the bottom is the same regardless of starting point!
        </p>
      </Theorem>

      <h3>Johann Bernoulli's Elegant Solution</h3>

      <p>
        Johann used an analogy with optics. By Fermat's principle, light
        travels between two points along the path of least time. In a medium
        where the speed varies, light bends according to Snell's law:
      </p>

      <MathBlock>
        {`\\frac{\\sin\\alpha_1}{v_1} = \\frac{\\sin\\alpha_2}{v_2}`}
      </MathBlock>

      <Example title="The Optical Analogy">
        <p>
          Imagine the vertical plane divided into thin horizontal layers, each
          with a different "speed of light." A bead falling under gravity has
          speed <InlineMath>{`v = \\sqrt{2gy}`}</InlineMath> at depth{' '}
          <InlineMath>y</InlineMath>.
        </p>
        <p className="mt-2">
          The "least time" path in this medium satisfies:
        </p>
        <MathBlock>
          {`\\frac{\\sin\\alpha}{\\sqrt{y}} = \\text{constant}`}
        </MathBlock>
        <p className="mt-2">
          where <InlineMath>\alpha</InlineMath> is the angle the path makes
          with the vertical. This differential equation has the cycloid as
          its solution!
        </p>
      </Example>

      <h3>Jakob Bernoulli's Approach</h3>

      <p>
        Jakob Bernoulli (Johann's older brother and rival) took a more
        direct approach, minimizing the time integral:
      </p>

      <MathBlock>
        {`T = \\int_A^B \\frac{ds}{v} = \\int_A^B \\frac{\\sqrt{1 + y'^2}}{\\sqrt{2gy}}\\, dx`}
      </MathBlock>

      <p>
        He sought conditions for this integral to be minimized, developing
        early techniques of what would become the calculus of variations.
      </p>

      <h3>The Cycloid's Properties</h3>

      <p>
        The cycloid had been studied extensively before the brachistochrone
        problem, and it has remarkable properties:
      </p>

      <Theorem title="Properties of the Cycloid">
        <ul className="list-disc list-inside space-y-2">
          <li>
            <strong>Brachistochrone:</strong> Curve of fastest descent
          </li>
          <li>
            <strong>Tautochrone:</strong> Time to bottom is independent of
            starting point
          </li>
          <li>
            <strong>Arc length:</strong> Exactly 4 times the diameter of the
            generating circle
          </li>
          <li>
            <strong>Area:</strong> Exactly 3 times the area of the generating
            circle
          </li>
        </ul>
      </Theorem>

      <Callout type="note">
        <strong>Huygens and the Pendulum:</strong> Christiaan Huygens discovered
        the tautochrone property in 1659 while designing accurate pendulum
        clocks. A pendulum swinging along cycloidal "cheeks" has a period
        independent of amplitude—perfect for timekeeping.
      </Callout>

      <h3>Newton's Solution</h3>

      <p>
        Newton solved the problem in a single evening after receiving it.
        His method was characteristically terse: he considered small
        variations of the optimal path and showed that the cycloid condition
        must hold at each point.
      </p>

      <Example title="Newton's Variational Argument">
        <p>
          Consider three points on the optimal curve. The middle point must
          be positioned so that the total time through it is minimized. This
          local condition, applied everywhere, determines the global curve.
        </p>
        <p className="mt-2 text-dark-400">
          This "local optimization implies global solution" idea is the heart
          of variational calculus.
        </p>
      </Example>

      <h3>Historical Significance</h3>

      <p>
        The brachistochrone problem was transformative for mathematics:
      </p>

      <ul className="list-disc list-inside space-y-2 mt-4">
        <li>
          <strong>Birth of calculus of variations:</strong> Finding curves
          that optimize integrals became a major field.
        </li>
        <li>
          <strong>Unification of physics:</strong> The optical analogy hinted
          at deep principles underlying different phenomena.
        </li>
        <li>
          <strong>Variational principles:</strong> Led to Lagrangian and
          Hamiltonian mechanics.
        </li>
        <li>
          <strong>Competition and collaboration:</strong> The challenge format
          spurred rapid development.
        </li>
      </ul>

      <Callout type="info">
        <strong>The Bernoulli Rivalry:</strong> Johann and Jakob Bernoulli
        had a famously bitter rivalry. Their competition over the brachistochrone
        and other problems produced brilliant mathematics but also personal
        animosity that lasted until Jakob's death in 1705.
      </Callout>

      <SectionQuiz sectionId={47} questions={quizMap[47] || []} title="Check Your Understanding" />
    </LessonLayout>
  );
}
