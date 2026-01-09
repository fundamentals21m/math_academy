import { LessonLayout } from '@/components/layout/LessonLayout';
import { Callout } from '@/components/common/Callout';
import { MathBlock, InlineMath } from '@/components/common/MathBlock';

export default function Section18() {
  return (
    <LessonLayout sectionId={18}>
      <h2>Chapter XIX: Intersection of Curves</h2>
      <p className="text-lg text-dark-300 italic mb-6">
        Caput XIX: De intersectione Curvarum
      </p>

      <p>
        When two curves meet, how many intersection points should we expect?
        This chapter develops the theory of curve intersections, culminating in
        what we now call <strong>Bezout's theorem</strong>—though Euler had the
        essential ideas before Bezout published.
      </p>

      <Callout type="info">
        <strong>The Central Question:</strong> Given curves of degrees <InlineMath>m</InlineMath>
        and <InlineMath>n</InlineMath>, what is the maximum (or typical) number of
        intersection points?
      </Callout>

      <h2>Line and Curve</h2>

      <p>
        We've seen that a line (degree 1) intersects a curve of degree <InlineMath>n</InlineMath>
        in at most <InlineMath>n</InlineMath> points:
      </p>

      <MathBlock>{`\\text{deg}(\\text{line}) \\times \\text{deg}(\\text{curve}) = 1 \\times n = n`}</MathBlock>

      <p>
        This suggests a general pattern.
      </p>

      <h2>Two Conics</h2>

      <p>
        Two conics (both degree 2) can intersect in at most:
      </p>

      <MathBlock>{`2 \\times 2 = 4 \\text{ points}`}</MathBlock>

      <div className="bg-dark-800 p-4 rounded-lg my-4 border-l-4 border-amber-500">
        <p className="font-semibold text-amber-400">Example: Circle and Ellipse</p>
        <MathBlock>{`x^2 + y^2 = 5`}</MathBlock>
        <MathBlock>{`\\frac{x^2}{4} + y^2 = 1`}</MathBlock>
        <p className="mt-2">
          Solving: From the second equation, <InlineMath>y^2 = 1 - x^2/4</InlineMath>.
          Substituting: <InlineMath>x^2 + 1 - x^2/4 = 5</InlineMath>, giving
          <InlineMath>3x^2/4 = 4</InlineMath>, so <InlineMath>x = \pm 4/\sqrt{3}</InlineMath>.
        </p>
        <p className="mt-1">
          But wait—this gives <InlineMath>|x| &gt; 2</InlineMath>, outside the ellipse!
          These conics don't intersect in real points. The 4 intersections are complex.
        </p>
      </div>

      <h2>Bezout's Theorem</h2>

      <div className="bg-dark-800/50 rounded-xl p-6 border border-dark-700 my-6">
        <h3 className="text-primary-400 mb-4">Statement</h3>
        <p className="text-lg">
          Two algebraic curves of degrees <InlineMath>m</InlineMath> and <InlineMath>n</InlineMath>,
          with no common component, intersect in exactly <InlineMath>mn</InlineMath> points,
          counted with multiplicity and including complex and infinite points.
        </p>
      </div>

      <p>
        The theorem requires careful counting:
      </p>

      <ul className="list-disc list-inside space-y-2 my-4 text-dark-300">
        <li><strong>Multiplicity:</strong> Tangent intersections count more than once</li>
        <li><strong>Complex points:</strong> Include solutions over the complex numbers</li>
        <li><strong>Points at infinity:</strong> Work in projective space</li>
        <li><strong>No common component:</strong> The curves don't share a factor</li>
      </ul>

      <h2>Intersection Multiplicity</h2>

      <p>
        When curves are tangent at an intersection, the point has <strong>multiplicity</strong>
        greater than 1:
      </p>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 my-6">
        <div className="bg-dark-800/50 rounded-xl p-4 border border-dark-700">
          <h4 className="text-emerald-400 font-semibold mb-2">Transverse Intersection</h4>
          <p className="text-dark-300 text-sm">
            Curves cross at different angles: multiplicity = 1
          </p>
        </div>
        <div className="bg-dark-800/50 rounded-xl p-4 border border-dark-700">
          <h4 className="text-blue-400 font-semibold mb-2">Tangent Intersection</h4>
          <p className="text-dark-300 text-sm">
            Curves touch with same tangent: multiplicity ≥ 2
          </p>
        </div>
      </div>

      <div className="bg-dark-800 p-4 rounded-lg my-4 border-l-4 border-blue-500">
        <p className="font-semibold text-blue-400">Example: Tangent Conics</p>
        <MathBlock>{`y = x^2 \\quad \\text{and} \\quad y = 2x - 1`}</MathBlock>
        <p className="mt-2">
          Substituting: <InlineMath>x^2 = 2x - 1</InlineMath>, so <InlineMath>(x-1)^2 = 0</InlineMath>.
        </p>
        <p>
          The line is tangent to the parabola at <InlineMath>(1, 1)</InlineMath> with
          multiplicity 2. Total: <InlineMath>2 \times 1 = 2</InlineMath> ✓
        </p>
      </div>

      <h2>Applications</h2>

      <h3>Finding Common Points</h3>
      <p>
        To find intersections of <InlineMath>f(x,y) = 0</InlineMath> and <InlineMath>g(x,y) = 0</InlineMath>:
      </p>

      <ol className="list-decimal list-inside space-y-2 my-4 text-dark-300">
        <li>Eliminate one variable (e.g., using resultants)</li>
        <li>Solve the resulting polynomial in the other variable</li>
        <li>Back-substitute to find all coordinates</li>
      </ol>

      <h3>The Resultant</h3>
      <p>
        The <strong>resultant</strong> of two polynomials detects common roots:
      </p>

      <MathBlock>{`\\text{Res}(f, g) = 0 \\iff f \\text{ and } g \\text{ have a common root}`}</MathBlock>

      <p>
        For curves, the resultant in <InlineMath>y</InlineMath> gives a polynomial
        in <InlineMath>x</InlineMath> whose roots are the <InlineMath>x</InlineMath>-coordinates
        of intersections.
      </p>

      <h2>Conic Through Five Points</h2>

      <p>
        Since a conic has 5 essential parameters, it should be determined by 5 points.
        Using intersections:
      </p>

      <Callout type="success">
        <strong>Construction:</strong> Given 5 points, the conic through them can be
        found by solving a linear system in the 6 coefficients of the general conic.
        The conic through points <InlineMath>P_1, \ldots, P_5</InlineMath> is unique
        (if no 4 are collinear).
      </Callout>

      <h2>Cubic Through Nine Points</h2>

      <p>
        A cubic should be determined by 9 points. But there's a subtlety:
      </p>

      <div className="bg-dark-800 p-4 rounded-lg my-4 border-l-4 border-purple-500">
        <p className="font-semibold text-purple-400">Cayley-Bacharach Theorem</p>
        <p>
          If 8 of the 9 intersection points of two cubics are given, the 9th is
          determined. So 8 points don't uniquely determine a cubic—there's a
          1-parameter family (a "pencil") of cubics through them.
        </p>
      </div>

      <p>
        This is related to the fact that <InlineMath>3 \times 3 = 9</InlineMath>
        and the constraints aren't independent.
      </p>

      <Callout type="success">
        <strong>Chapter Summary:</strong> Two curves of degrees <InlineMath>m</InlineMath>
        and <InlineMath>n</InlineMath> intersect in <InlineMath>mn</InlineMath> points
        (Bezout's theorem), counted with multiplicity and including complex/infinite
        points. This fundamental result underlies much of algebraic geometry. Computing
        intersections uses elimination theory (resultants). The theorem explains why
        conics are determined by 5 points and hints at deeper structure for higher curves.
      </Callout>
    </LessonLayout>
  );
}
