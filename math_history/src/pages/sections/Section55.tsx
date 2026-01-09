import { LessonLayout } from '@/components/layout/LessonLayout';
import { Definition, Theorem, Example } from '@/components/common/ContentBlocks';
import { Callout } from '@/components/common/Callout';
import { MathBlock, InlineMath } from '@/components/common/MathBlock';
import { SectionQuiz } from '@/components/quiz/SectionQuiz';
import { quizMap } from '@/data/quizzes';

export default function Section55() {
  return (
    <LessonLayout sectionId={55}>
      <h2>Riemann Surfaces</h2>

      <p>
        The complex logarithm, square root, and other functions are
        "multi-valued"—they have multiple outputs for each input. Bernhard
        Riemann resolved this conceptual difficulty by introducing a
        revolutionary idea: instead of viewing these as multi-valued functions
        on the plane, view them as single-valued functions on a new geometric
        object—a <em>Riemann surface</em>.
      </p>

      <Callout type="info">
        <strong>Riemann's Geometric Vision:</strong> Riemann (1826-1866)
        transformed mathematics by thinking geometrically about analysis.
        His surfaces unite complex analysis, topology, and algebraic geometry.
      </Callout>

      <h3>The Problem of Multi-Valued Functions</h3>

      <p>
        Consider the square root function <InlineMath>{`w = \\sqrt{z}`}</InlineMath>:
      </p>

      <Example title="Two Square Roots">
        <p>
          Every nonzero <InlineMath>z</InlineMath> has two square roots.
          Writing <InlineMath>{`z = re^{i\\theta}`}</InlineMath>:
        </p>
        <MathBlock>
          {`\\sqrt{z} = \\pm\\sqrt{r}e^{i\\theta/2}`}
        </MathBlock>
        <p className="mt-2">
          Starting at <InlineMath>z = 1</InlineMath> with{' '}
          <InlineMath>{`\\sqrt{1} = 1`}</InlineMath>, traverse a circle around
          the origin. When <InlineMath>\theta</InlineMath> increases by{' '}
          <InlineMath>{`2\\pi`}</InlineMath>, the square root becomes{' '}
          <InlineMath>{`e^{i\\pi} = -1`}</InlineMath>.
        </p>
        <p className="mt-2 text-dark-400">
          We return to the same <InlineMath>z</InlineMath> but a different
          value of <InlineMath>\sqrt{z}</InlineMath>!
        </p>
      </Example>

      <p>
        The complex logarithm is even more multi-valued:
      </p>

      <Example title="Infinitely Many Logarithms">
        <p>
          For <InlineMath>{`z = re^{i\\theta}`}</InlineMath>:
        </p>
        <MathBlock>
          {`\\log z = \\ln r + i(\\theta + 2\\pi k), \\quad k \\in \\mathbb{Z}`}
        </MathBlock>
        <p className="mt-2">
          Each circuit around the origin adds <InlineMath>{`2\\pi i`}</InlineMath>{' '}
          to the logarithm. There are infinitely many "branches."
        </p>
      </Example>

      <h3>Riemann's Solution</h3>

      <p>
        Riemann's insight: instead of a multi-valued function on{' '}
        <InlineMath>\mathbb{C}</InlineMath>, consider a single-valued function
        on a <em>branched covering surface</em>.
      </p>

      <Definition title="Riemann Surface">
        <p>
          A <strong>Riemann surface</strong> is a one-dimensional complex
          manifold—locally, it looks like <InlineMath>\mathbb{C}</InlineMath>,
          but globally it may have nontrivial topology (like a torus or
          sphere with handles).
        </p>
      </Definition>

      <Example title="The Riemann Surface of √z">
        <p>
          Take two copies of the complex plane. Cut each along the positive
          real axis. Glue the "top" edge of one sheet to the "bottom" edge
          of the other, and vice versa.
        </p>
        <p className="mt-2">
          The result is a single connected surface where circling the origin
          once takes you from one sheet to the other. The square root becomes
          single-valued on this surface!
        </p>
        <p className="mt-2 text-dark-400">
          Topologically, this is equivalent to a sphere (with two points
          removed).
        </p>
      </Example>

      <Example title="The Riemann Surface of log z">
        <p>
          Take infinitely many copies of <InlineMath>{`\\mathbb{C} \\setminus \\{0\\}`}</InlineMath>,
          stacked vertically. Glue them in a spiral: as you circle the
          origin, you move up one sheet.
        </p>
        <p className="mt-2">
          The logarithm becomes single-valued on this infinite helical surface.
        </p>
      </Example>

      <h3>Branch Points and Cuts</h3>

      <Definition title="Branch Point">
        <p>
          A <strong>branch point</strong> is where sheets of a Riemann surface
          meet—where the multi-valuedness "originates."
        </p>
        <p className="mt-2">
          For <InlineMath>\sqrt{z}</InlineMath>: the branch points are at{' '}
          <InlineMath>z = 0</InlineMath> and <InlineMath>z = \infty</InlineMath>.
        </p>
      </Definition>

      <Definition title="Branch Cut">
        <p>
          A <strong>branch cut</strong> is a curve (often a ray or line segment)
          connecting branch points, across which we define the function to
          "jump" between branches.
        </p>
        <p className="mt-2 text-dark-400">
          The choice of branch cut is somewhat arbitrary—different choices
          give different "principal branches."
        </p>
      </Definition>

      <h3>Algebraic Curves</h3>

      <p>
        Riemann surfaces naturally arise from algebraic equations:
      </p>

      <Example title="The Surface of y² = x³ - x">
        <p>
          Consider all <InlineMath>(x, y)</InlineMath> satisfying{' '}
          <InlineMath>{`y^2 = x^3 - x = x(x-1)(x+1)`}</InlineMath>.
        </p>
        <p className="mt-2">
          For most <InlineMath>x</InlineMath>, there are two values of{' '}
          <InlineMath>y</InlineMath>. The branch points are at{' '}
          <InlineMath>x = -1, 0, 1, \infty</InlineMath>.
        </p>
        <p className="mt-2">
          The resulting Riemann surface is a torus (genus 1).
        </p>
      </Example>

      <Theorem title="Genus Formula">
        <p>
          For a smooth algebraic curve of degree <InlineMath>d</InlineMath>:
        </p>
        <MathBlock>
          {`g = \\frac{(d-1)(d-2)}{2}`}
        </MathBlock>
        <p className="mt-2 text-dark-400">
          Degree 3 curves have genus 1 (tori); degree 4 has genus 3; etc.
        </p>
      </Theorem>

      <h3>The Riemann-Roch Theorem</h3>

      <p>
        Riemann proved a deep theorem about meromorphic functions on surfaces:
      </p>

      <Theorem title="Riemann-Roch Theorem">
        <p>
          For a compact Riemann surface of genus <InlineMath>g</InlineMath>,
          the dimension of the space of meromorphic functions with prescribed
          pole behavior is given by:
        </p>
        <MathBlock>
          {`\\ell(D) - \\ell(K - D) = \\deg(D) + 1 - g`}
        </MathBlock>
        <p className="mt-2 text-dark-400">
          Here <InlineMath>D</InlineMath> is a "divisor" encoding poles,{' '}
          <InlineMath>K</InlineMath> is the canonical divisor, and{' '}
          <InlineMath>\ell</InlineMath> counts dimensions.
        </p>
      </Theorem>

      <Callout type="note">
        <strong>A Bridge Theorem:</strong> The Riemann-Roch theorem connects
        topology (genus), algebra (divisors), and analysis (meromorphic
        functions). It's a cornerstone of algebraic geometry and has been
        generalized enormously.
      </Callout>

      <h3>Modern Significance</h3>

      <p>
        Riemann surfaces are central to many areas of mathematics:
      </p>

      <ul className="list-disc list-inside space-y-2 mt-4">
        <li>
          <strong>Algebraic geometry:</strong> Complex algebraic curves are
          Riemann surfaces.
        </li>
        <li>
          <strong>Number theory:</strong> Modular curves are Riemann surfaces
          parametrizing elliptic curves.
        </li>
        <li>
          <strong>String theory:</strong> Worldsheets of strings are Riemann
          surfaces; amplitudes involve integrating over moduli spaces.
        </li>
        <li>
          <strong>Teichmüller theory:</strong> The study of how complex
          structures on surfaces vary.
        </li>
      </ul>

      <Callout type="info">
        <strong>Riemann's Vision:</strong> Riemann saw that geometry,
        analysis, and algebra are deeply intertwined. His surfaces showed
        that "multi-valued functions" are really single-valued on the right
        space—a profound shift in perspective that continues to inspire
        mathematics today.
      </Callout>

      <SectionQuiz sectionId={55} questions={quizMap[55] || []} title="Check Your Understanding" />
    </LessonLayout>
  );
}
