import { LessonLayout } from '../../components/layout/LessonLayout';
import { Callout } from '../../components/common/Callout';
import { Card, CardGrid, CardHeader } from '../../components/common/Card';
import { InlineMath, MathBlock } from '../../components/common/MathBlock';
import { SectionQuiz } from '../../components/quiz';
import { section34Questions } from '../../data/quizzes';

export default function Section34() {
  return (
    <LessonLayout sectionId={34}>
      <h2 className="text-2xl font-semibold mb-4">Rational Points on the Sphere</h2>

      <p className="text-dark-200 mb-6 text-lg leading-relaxed">
        The projection from line to circle generalizes to a beautiful technique
        called <strong>stereographic projection</strong>, which maps a plane onto
        a sphere. This gives us a way to find all rational points on the unit
        sphere <InlineMath>x^2 + y^2 + z^2 = 1</InlineMath>.
      </p>

      {/* Stereographic Projection */}
      <h3 className="text-xl font-semibold mt-10 mb-4">Stereographic Projection</h3>

      <p className="text-dark-200 mb-6">
        The <InlineMath>(x, y)</InlineMath>-plane in{' '}
        <InlineMath>(x, y, z)</InlineMath>-space is mapped to the unit sphere by
        projection toward the <strong>"north pole"</strong>{' '}
        <InlineMath>N = (0, 0, 1)</InlineMath>.
      </p>

      <div className="bg-dark-800 rounded-lg p-6 mb-6">
        <p className="text-dark-300 text-sm">
          Each point <InlineMath>P = (u, v)</InlineMath> in the plane is
          connected to <InlineMath>N</InlineMath> by a line, which hits the
          sphere at a unique point <InlineMath>P' = (p, q, r)</InlineMath>{' '}
          (other than <InlineMath>N</InlineMath>).
        </p>
      </div>

      {/* Formulas */}
      <h3 className="text-xl font-semibold mt-10 mb-4">
        Formulas for Stereographic Projection
      </h3>

      <div className="bg-dark-800 rounded-lg p-6 mb-6 border-l-4 border-blue-400">
        <h4 className="text-lg font-semibold mb-3 text-blue-400">
          Plane → Sphere
        </h4>
        <p className="text-dark-200 mb-3">
          If <InlineMath>P = (u, v)</InlineMath> is in the plane:
        </p>
        <MathBlock>{`p = \\frac{2u}{u^2 + v^2 + 1}, \\quad q = \\frac{2v}{u^2 + v^2 + 1}, \\quad r = \\frac{u^2 + v^2 - 1}{u^2 + v^2 + 1}`}</MathBlock>
      </div>

      <div className="bg-dark-800 rounded-lg p-6 mb-6 border-l-4 border-green-400">
        <h4 className="text-lg font-semibold mb-3 text-green-400">
          Sphere → Plane
        </h4>
        <p className="text-dark-200 mb-3">
          If <InlineMath>P' = (p, q, r)</InlineMath> is on the sphere:
        </p>
        <MathBlock>{`u = \\frac{p}{1 - r}, \\quad v = \\frac{q}{1 - r}`}</MathBlock>
      </div>

      {/* Derivation */}
      <h3 className="text-xl font-semibold mt-10 mb-4">Why It Works</h3>

      <p className="text-dark-200 mb-6">
        The line through <InlineMath>N = (0, 0, 1)</InlineMath> and{' '}
        <InlineMath>P = (u, v, 0)</InlineMath> has direction components{' '}
        <InlineMath>u, v, -1</InlineMath>, hence parametric equations:
      </p>

      <MathBlock>{`x = ut, \\quad y = vt, \\quad z = 1 - t`}</MathBlock>

      <p className="text-dark-200 my-6">
        Substituting into the sphere equation{' '}
        <InlineMath>x^2 + y^2 + z^2 = 1</InlineMath>:
      </p>

      <MathBlock>{`u^2 t^2 + v^2 t^2 + (1-t)^2 = 1`}</MathBlock>
      <MathBlock>{`t^2(u^2 + v^2 + 1) - 2t = 0`}</MathBlock>
      <MathBlock>{`t = 0 \\quad \\text{or} \\quad t = \\frac{2}{u^2 + v^2 + 1}`}</MathBlock>

      <p className="text-dark-200 my-6">
        The solution <InlineMath>t = 0</InlineMath> corresponds to{' '}
        <InlineMath>N</InlineMath>. The other solution gives the formulas above.
      </p>

      {/* Key Corollary */}
      <Callout type="success">
        <p>
          <strong>Rational Points on the Sphere:</strong> The formulas show that{' '}
          <InlineMath>p, q, r</InlineMath> are rational if and only if{' '}
          <InlineMath>u</InlineMath> and <InlineMath>v</InlineMath> are rational.
          Hence the rational points <InlineMath>(p, q, r) \neq (0, 0, 1)</InlineMath>{' '}
          on the unit sphere are:
        </p>
        <MathBlock>{`p = \\frac{2u}{u^2 + v^2 + 1}, \\quad q = \\frac{2v}{u^2 + v^2 + 1}, \\quad r = \\frac{u^2 + v^2 - 1}{u^2 + v^2 + 1}`}</MathBlock>
        <p className="mt-2">for rational <InlineMath>u</InlineMath> and <InlineMath>v</InlineMath>.</p>
      </Callout>

      {/* Integer Quadruples */}
      <h3 className="text-xl font-semibold mt-10 mb-4">Sums of Three Squares</h3>

      <p className="text-dark-200 mb-6">
        Each rational point{' '}
        <InlineMath>(a/d, b/d, c/d)</InlineMath> on the sphere corresponds to an
        integer quadruple <InlineMath>(a, b, c, d)</InlineMath> such that:
      </p>

      <MathBlock>{`a^2 + b^2 + c^2 = d^2`}</MathBlock>

      <p className="text-dark-200 my-6">
        So stereographic projection gives us a way to find{' '}
        <strong>all</strong> integer solutions to this equation!
      </p>

      {/* Higher Dimensions */}
      <h3 className="text-xl font-semibold mt-10 mb-4">Higher Dimensions</h3>

      <CardGrid>
        <Card>
          <CardHeader title="n-Dimensional Sphere" />
          <p className="text-xs text-dark-300">
            The unit sphere in{' '}
            <InlineMath>n</InlineMath>-space has equation{' '}
            <InlineMath>
              x_1^2 + x_2^2 + \cdots + x_n^2 = 1
            </InlineMath>
            . Stereographic projection generalizes naturally.
          </p>
        </Card>
        <Card>
          <CardHeader title="General Formulas" />
          <p className="text-xs text-dark-300">
            Connect <InlineMath>(0, \ldots, 0, 1)</InlineMath> to{' '}
            <InlineMath>(u_1, \ldots, u_{'{n-1}'}, 0)</InlineMath>. The formulas
            generalize in the expected way.
          </p>
        </Card>
      </CardGrid>

      {/* Quadratic Surfaces */}
      <h3 className="text-xl font-semibold mt-10 mb-4">General Quadratic Surfaces</h3>

      <p className="text-dark-200 mb-6">
        The projection method extends to any surface given by a quadratic
        equation in <InlineMath>x, y, z</InlineMath>.
      </p>

      <Callout type="info">
        <p>
          As with curves, a quadratic surface with rational coefficients has
          either <strong>no</strong> rational points or{' '}
          <strong>infinitely many</strong>.
        </p>
      </Callout>

      <p className="text-dark-200 my-6">
        For example, the sphere <InlineMath>x^2 + y^2 + z^2 = 7</InlineMath>{' '}
        has <strong>no</strong> rational points (proved by considering
        remainders modulo 8).
      </p>

      {/* Key Takeaways */}
      <h3 className="text-xl font-semibold mt-10 mb-4">Key Takeaways</h3>

      <div className="bg-dark-800 rounded-lg p-6">
        <ul className="space-y-3">
          <li className="flex items-start gap-3">
            <span className="text-amber-400 font-bold">1.</span>
            <span>
              <strong>Stereographic projection</strong> maps the plane to the
              sphere via lines through the north pole.
            </span>
          </li>
          <li className="flex items-start gap-3">
            <span className="text-amber-400 font-bold">2.</span>
            <span>
              Rational points in the plane correspond to rational points on the
              sphere.
            </span>
          </li>
          <li className="flex items-start gap-3">
            <span className="text-amber-400 font-bold">3.</span>
            <span>
              This gives all integer solutions to{' '}
              <InlineMath>a^2 + b^2 + c^2 = d^2</InlineMath>.
            </span>
          </li>
          <li className="flex items-start gap-3">
            <span className="text-amber-400 font-bold">4.</span>
            <span>
              The method generalizes to <strong>higher dimensions</strong> and
              other quadratic surfaces.
            </span>
          </li>
        </ul>
      </div>

      {/* Section Quiz */}
      <SectionQuiz sectionId={34} questions={section34Questions} />
    </LessonLayout>
  );
}
