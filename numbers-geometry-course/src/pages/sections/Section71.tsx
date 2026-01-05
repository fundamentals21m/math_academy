import { LessonLayout } from '../../components/layout/LessonLayout';
import { Callout } from '../../components/common/Callout';
import { Card, CardGrid, CardHeader } from '../../components/common/Card';
import { InlineMath, MathBlock } from '../../components/common/MathBlock';
import { SectionQuiz } from '../../components/quiz';
import { section71Questions } from '../../data/quizzes';

export default function Section71() {
  return (
    <LessonLayout sectionId={71}>
      <h2 className="text-2xl font-semibold mb-4">Discussion</h2>

      <p className="text-dark-200 mb-6 text-lg leading-relaxed">
        Conic sections connect geometry, algebra, and number theory in profound
        ways. Let's reflect on the key themes and look ahead to deeper
        structures.
      </p>

      {/* Historical Arc */}
      <h3 className="text-xl font-semibold mt-10 mb-4">The Historical Arc</h3>

      <p className="text-dark-200 mb-6">
        The study of conics spans over two millennia:
      </p>

      <div className="bg-dark-800 rounded-lg p-6 mb-6">
        <ul className="space-y-3 text-dark-200">
          <li className="flex items-start gap-3">
            <span className="text-amber-400 font-bold">~350 BC</span>
            <span>
              <strong>Menaechmus</strong> discovers conics while trying to
              duplicate the cube
            </span>
          </li>
          <li className="flex items-start gap-3">
            <span className="text-amber-400 font-bold">~200 BC</span>
            <span>
              <strong>Apollonius</strong> writes the definitive treatise{' '}
              <em>Conics</em>
            </span>
          </li>
          <li className="flex items-start gap-3">
            <span className="text-amber-400 font-bold">~1600</span>
            <span>
              <strong>Kepler</strong> discovers planetary orbits are ellipses
            </span>
          </li>
          <li className="flex items-start gap-3">
            <span className="text-amber-400 font-bold">1637</span>
            <span>
              <strong>Descartes & Fermat</strong> show conics are quadratic
              curves
            </span>
          </li>
          <li className="flex items-start gap-3">
            <span className="text-amber-400 font-bold">1770</span>
            <span>
              <strong>Lagrange</strong> solves Pell's equation via continued
              fractions
            </span>
          </li>
        </ul>
      </div>

      {/* Projective Geometry */}
      <h3 className="text-xl font-semibold mt-10 mb-4">
        Toward Projective Geometry
      </h3>

      <p className="text-dark-200 mb-6">
        In ordinary (Euclidean) geometry, parallel lines don't meet. But from
        certain perspectives, they appear to meet "at infinity"—think of
        railroad tracks converging at the horizon.
      </p>

      <div className="bg-blue-900/30 border border-blue-500/30 rounded-lg p-6 mb-6">
        <h4 className="text-lg font-semibold text-blue-400 mb-3">
          Points at Infinity
        </h4>
        <p className="text-dark-200 mb-4">
          <strong>Projective geometry</strong> formalizes this by adding "points
          at infinity" where parallel lines meet. Each direction has exactly
          one such point.
        </p>
        <p className="text-dark-200">
          In projective geometry, the distinction between ellipse, parabola,
          and hyperbola becomes a distinction about how the conic meets the
          "line at infinity."
        </p>
      </div>

      <CardGrid>
        <Card>
          <CardHeader title="Ellipse" />
          <p className="text-xs text-dark-300">Doesn't meet line at ∞</p>
          <p className="text-xs text-dark-400 mt-2">No asymptotes</p>
        </Card>
        <Card>
          <CardHeader title="Parabola" />
          <p className="text-xs text-dark-300">Tangent to line at ∞</p>
          <p className="text-xs text-dark-400 mt-2">One point at infinity</p>
        </Card>
        <Card>
          <CardHeader title="Hyperbola" />
          <p className="text-xs text-dark-300">Crosses line at ∞ twice</p>
          <p className="text-xs text-dark-400 mt-2">Two asymptotic directions</p>
        </Card>
      </CardGrid>

      {/* Homogeneous Coordinates */}
      <h3 className="text-xl font-semibold mt-10 mb-4">
        Homogeneous Coordinates
      </h3>

      <p className="text-dark-200 mb-6">
        The projective plane is described using <strong>homogeneous
        coordinates</strong> <InlineMath>(X : Y : Z)</InlineMath>, where
        multiples represent the same point:
      </p>

      <MathBlock>
        {`(X : Y : Z) \\equiv (\\lambda X : \\lambda Y : \\lambda Z)`}
      </MathBlock>

      <p className="text-dark-200 my-6">
        The ordinary point <InlineMath>(x, y)</InlineMath> corresponds to{' '}
        <InlineMath>(x : y : 1)</InlineMath>. Points at infinity have{' '}
        <InlineMath>Z = 0</InlineMath>.
      </p>

      <Callout type="info">
        <p>
          In homogeneous coordinates, all nondegenerate conics become
          equivalent! They can all be transformed into each other. The
          projective viewpoint unifies the three types of conics.
        </p>
      </Callout>

      {/* Bézout's Theorem Revisited */}
      <h3 className="text-xl font-semibold mt-10 mb-4">
        Bézout's Theorem Revisited
      </h3>

      <p className="text-dark-200 mb-6">
        In projective geometry, Bézout's theorem becomes exact:
      </p>

      <div className="bg-purple-900/30 border border-purple-500/30 rounded-lg p-6 mb-6">
        <h4 className="text-lg font-semibold text-purple-400 mb-3">
          Projective Bézout
        </h4>
        <p className="text-dark-200">
          A curve of degree <InlineMath>m</InlineMath> and a curve of degree{' '}
          <InlineMath>n</InlineMath> in the projective plane over{' '}
          <InlineMath>\mathbb{'{C}'}</InlineMath> intersect in{' '}
          <strong>exactly</strong> <InlineMath>mn</InlineMath> points (counted
          with multiplicity).
        </p>
      </div>

      <p className="text-dark-200 mb-6">
        No more "at most"—the projective plane and complex numbers give us
        exactness!
      </p>

      {/* Algebraic Geometry */}
      <h3 className="text-xl font-semibold mt-10 mb-4">
        Preview: Algebraic Geometry
      </h3>

      <p className="text-dark-200 mb-6">
        The study of conics is the beginning of <strong>algebraic
        geometry</strong>—the study of solutions to polynomial equations
        using geometric methods.
      </p>

      <div className="bg-dark-800 rounded-lg p-6 mb-6">
        <ul className="space-y-3 text-dark-200">
          <li className="flex items-start gap-3">
            <span className="text-green-400 font-bold">•</span>
            <span>
              <strong>Degree 1:</strong> Lines (linear algebra)
            </span>
          </li>
          <li className="flex items-start gap-3">
            <span className="text-green-400 font-bold">•</span>
            <span>
              <strong>Degree 2:</strong> Conics (this chapter!)
            </span>
          </li>
          <li className="flex items-start gap-3">
            <span className="text-green-400 font-bold">•</span>
            <span>
              <strong>Degree 3:</strong> Elliptic curves (deep number theory)
            </span>
          </li>
          <li className="flex items-start gap-3">
            <span className="text-green-400 font-bold">•</span>
            <span>
              <strong>Higher degree:</strong> Abelian varieties, schemes, ...
            </span>
          </li>
        </ul>
      </div>

      {/* Big Picture */}
      <h3 className="text-xl font-semibold mt-10 mb-4">The Big Picture</h3>

      <p className="text-dark-200 mb-6">
        In this chapter, we've seen how conics unite:
      </p>

      <CardGrid>
        <Card>
          <CardHeader title="Geometry" />
          <p className="text-xs text-dark-300">
            Slicing cones, foci, directrices, reflection
          </p>
        </Card>
        <Card>
          <CardHeader title="Algebra" />
          <p className="text-xs text-dark-300">
            Quadratic equations, discriminant, classification
          </p>
        </Card>
        <Card>
          <CardHeader title="Number Theory" />
          <p className="text-xs text-dark-300">
            Integer points, Pell's equation, continued fractions
          </p>
        </Card>
      </CardGrid>

      <p className="text-dark-200 my-6">
        This interplay between different areas of mathematics—geometry, algebra,
        and arithmetic—is a recurring theme in <em>Numbers and Geometry</em>
        and in mathematics as a whole.
      </p>

      {/* Summary */}
      <div className="bg-dark-800 rounded-lg p-6 mt-8">
        <h4 className="text-lg font-semibold mb-4">Chapter Summary</h4>
        <ul className="space-y-2 text-dark-200">
          <li className="flex items-start gap-3">
            <span className="text-amber-400 font-bold">•</span>
            <span>
              Conic sections come from slicing a cone; they are quadratic curves
            </span>
          </li>
          <li className="flex items-start gap-3">
            <span className="text-amber-400 font-bold">•</span>
            <span>
              Eccentricity and the discriminant classify conics
            </span>
          </li>
          <li className="flex items-start gap-3">
            <span className="text-amber-400 font-bold">•</span>
            <span>
              Focal properties explain optics and planetary motion
            </span>
          </li>
          <li className="flex items-start gap-3">
            <span className="text-amber-400 font-bold">•</span>
            <span>
              Integer points on hyperbolas lead to Pell's equation
            </span>
          </li>
          <li className="flex items-start gap-3">
            <span className="text-amber-400 font-bold">•</span>
            <span>
              Continued fractions solve Pell's equation systematically
            </span>
          </li>
          <li className="flex items-start gap-3">
            <span className="text-amber-400 font-bold">•</span>
            <span>
              Projective geometry unifies all conics
            </span>
          </li>
        </ul>
      </div>

      {/* Section Quiz */}
      <SectionQuiz sectionId={71} questions={section71Questions} />
    </LessonLayout>
  );
}
