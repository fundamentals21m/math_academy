import { LessonLayout } from '../../components/layout/LessonLayout';
import { Callout } from '../../components/common/Callout';
import { Card, CardGrid, CardHeader } from '../../components/common/Card';
import { InlineMath, MathBlock } from '../../components/common/MathBlock';
import { SectionQuiz } from '../../components/quiz';
import { section65Questions } from '../../data/quizzes';

export default function Section65() {
  return (
    <LessonLayout sectionId={65}>
      <h2 className="text-2xl font-semibold mb-4">
        Properties of Conic Sections
      </h2>

      <p className="text-dark-200 mb-6 text-lg leading-relaxed">
        Beyond their origin as cone sections, conics have remarkable geometric
        properties involving <strong>foci</strong> and <strong>directrices</strong>.
        These properties explain why conics appear in optics and planetary motion.
      </p>

      {/* Focus-Directrix Definition */}
      <h3 className="text-xl font-semibold mt-10 mb-4">
        Focus and Directrix
      </h3>

      <p className="text-dark-200 mb-6">
        A conic section can be defined in terms of a point <InlineMath>F</InlineMath>{' '}
        (the <strong>focus</strong>) and a line <InlineMath>\mathcal{'{D}'}</InlineMath>{' '}
        (the <strong>directrix</strong>):
      </p>

      <div className="bg-blue-900/30 border border-blue-500/30 rounded-lg p-6 mb-6">
        <h4 className="text-lg font-semibold text-blue-400 mb-3">
          Focus-Directrix Definition
        </h4>
        <p className="text-dark-200">
          A conic is the set of points <InlineMath>P</InlineMath> whose distance
          from <InlineMath>F</InlineMath> is <InlineMath>e</InlineMath> times its
          perpendicular distance from <InlineMath>\mathcal{'{D}'}</InlineMath>:
        </p>
        <MathBlock>
          {`\\frac{FP}{PQ} = e`}
        </MathBlock>
        <p className="text-dark-300 text-sm mt-3">
          The constant <InlineMath>e</InlineMath> is called the <strong>eccentricity</strong>.
        </p>
      </div>

      {/* Eccentricity */}
      <h3 className="text-xl font-semibold mt-10 mb-4">Eccentricity</h3>

      <p className="text-dark-200 mb-6">
        The eccentricity <InlineMath>e</InlineMath> determines the type of conic:
      </p>

      <CardGrid>
        <Card>
          <CardHeader title="e < 1" />
          <p className="text-xs text-dark-300">Ellipse</p>
          <p className="text-xs text-dark-400 mt-2">Closed curve</p>
        </Card>
        <Card>
          <CardHeader title="e = 1" />
          <p className="text-xs text-dark-300">Parabola</p>
          <p className="text-xs text-dark-400 mt-2">Open, one branch</p>
        </Card>
        <Card>
          <CardHeader title="e > 1" />
          <p className="text-xs text-dark-300">Hyperbola</p>
          <p className="text-xs text-dark-400 mt-2">Open, two branches</p>
        </Card>
      </CardGrid>

      <p className="text-dark-200 my-6">
        A circle is the limiting case <InlineMath>e = 0</InlineMath>, where the
        focus is at the center and the directrix is at infinity.
      </p>

      {/* Focal Property of Parabola */}
      <h3 className="text-xl font-semibold mt-10 mb-4">
        Focal Property of the Parabola
      </h3>

      <div className="bg-green-900/30 border border-green-500/30 rounded-lg p-6 mb-6">
        <h4 className="text-lg font-semibold text-green-400 mb-3">
          Reflection Property
        </h4>
        <p className="text-dark-200">
          Lines parallel to the axis of symmetry of a parabola are all reflected
          through the focus.
        </p>
      </div>

      <p className="text-dark-200 mb-6">
        This property was first proved by the Greek mathematician{' '}
        <strong>Diocles</strong> around 200 B.C. in his book <em>On Burning Mirrors</em>.
        Legend has it that Archimedes used parabolic mirrors against Roman ships!
      </p>

      <p className="text-dark-200 mb-6">
        <strong>Why it works:</strong> For any point <InlineMath>P</InlineMath> on
        the parabola, the distances <InlineMath>FP</InlineMath> (to focus) and{' '}
        <InlineMath>PQ</InlineMath> (to directrix) are equal. The tangent at{' '}
        <InlineMath>P</InlineMath> is the perpendicular bisector of{' '}
        <InlineMath>FQ</InlineMath>, making equal angles with the incoming and
        outgoing rays.
      </p>

      {/* Focal Property of Ellipse */}
      <h3 className="text-xl font-semibold mt-10 mb-4">
        Focal Property of the Ellipse
      </h3>

      <p className="text-dark-200 mb-6">
        The ellipse <InlineMath>\frac{'{x^2}'}{'{a^2}'} + \frac{'{y^2}'}{'{b^2}'} = 1</InlineMath>{' '}
        has <em>two</em> foci at <InlineMath>(\pm ae, 0)</InlineMath>, where{' '}
        <InlineMath>e = \sqrt{'{1 - b^2/a^2}'}</InlineMath>.
      </p>

      <div className="bg-purple-900/30 border border-purple-500/30 rounded-lg p-6 mb-6">
        <h4 className="text-lg font-semibold text-purple-400 mb-3">
          Sum of Focal Distances
        </h4>
        <p className="text-dark-200">
          The sum of distances from any point on the ellipse to both foci is constant:
        </p>
        <MathBlock>
          {`F_1P + F_2P = 2a`}
        </MathBlock>
      </div>

      <p className="text-dark-200 mb-6">
        This leads to the famous <strong>thread construction</strong>: tie a thread
        to two pins at the foci, pull it taut with a pencil, and trace an ellipse.
      </p>

      {/* Apollonius's Theorem */}
      <h3 className="text-xl font-semibold mt-10 mb-4">
        Apollonius's Focal Property
      </h3>

      <p className="text-dark-200 mb-6">
        <strong>Apollonius</strong> (around 200 B.C.) proved that the lines from
        the two foci to any point on the ellipse make equal angles with the
        tangent at that point.
      </p>

      <div className="bg-dark-800 rounded-lg p-6 mb-6">
        <p className="text-dark-200 mb-4">
          <strong>Physical interpretation:</strong> If the inside of an ellipse
          is a mirror, a light ray from one focus will reflect to the other focus.
          This is why some rooms (like the "whispering galleries" in St. Paul's
          Cathedral) are built with elliptical ceilings!
        </p>
      </div>

      {/* Kepler Connection */}
      <Callout type="info">
        <p>
          The focus is physically significant in <strong>Newton's theory of
          gravitation</strong>: planets and comets travel on conic sections with
          the sun at one focus. The word "focus" (Latin for "fireplace") was
          coined by <strong>Kepler</strong>.
        </p>
      </Callout>

      {/* Summary */}
      <div className="bg-dark-800 rounded-lg p-6 mt-8">
        <h4 className="text-lg font-semibold mb-4">Key Points</h4>
        <ul className="space-y-2 text-dark-200">
          <li className="flex items-start gap-3">
            <span className="text-amber-400 font-bold">•</span>
            <span>
              Conics defined by focus, directrix, and eccentricity <InlineMath>e</InlineMath>
            </span>
          </li>
          <li className="flex items-start gap-3">
            <span className="text-amber-400 font-bold">•</span>
            <span>
              Ellipse: <InlineMath>e &lt; 1</InlineMath>, Parabola: <InlineMath>e = 1</InlineMath>,
              Hyperbola: <InlineMath>e &gt; 1</InlineMath>
            </span>
          </li>
          <li className="flex items-start gap-3">
            <span className="text-amber-400 font-bold">•</span>
            <span>
              Parabola: parallel rays reflect through focus
            </span>
          </li>
          <li className="flex items-start gap-3">
            <span className="text-amber-400 font-bold">•</span>
            <span>
              Ellipse: sum of focal distances is constant; equal angle reflection
            </span>
          </li>
        </ul>
      </div>

      {/* Section Quiz */}
      <SectionQuiz sectionId={65} questions={section65Questions} />
    </LessonLayout>
  );
}
