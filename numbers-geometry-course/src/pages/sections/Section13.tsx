import { LessonLayout } from '../../components/layout/LessonLayout';
import { Callout } from '../../components/common/Callout';
import { Card, CardGrid, CardHeader } from '../../components/common/Card';
import { InlineMath, MathBlock } from '../../components/common/MathBlock';
import { SectionQuiz } from '../../components/quiz';
import { section13Questions } from '../../data/quizzes';

export default function Section13() {
  return (
    <LessonLayout sectionId={13}>
      <h2 className="text-2xl font-semibold mb-4">Angles and Circles</h2>

      <p className="text-dark-200 mb-6 text-lg leading-relaxed">
        One of the first theorems in Euclid's Elements says that the base angles
        of an <strong>isosceles</strong> ("equal sides") triangle are equal. This
        simple fact leads to profound results about circles.
      </p>

      {/* Isosceles Triangle */}
      <h3 className="text-xl font-semibold mt-10 mb-4">The Isosceles Triangle Theorem</h3>

      <div className="bg-dark-800 rounded-lg p-6 mb-6 border-l-4 border-emerald-400">
        <h4 className="text-lg font-semibold mb-3 text-emerald-400">Theorem</h4>
        <p className="text-dark-200">
          The base angles of an isosceles triangle are <strong>equal</strong>.
        </p>
      </div>

      <p className="text-dark-200 mb-6">
        The most elegant proof was found by <strong>Pappus</strong> (around 300 AD):
        if triangle <InlineMath>ABC</InlineMath> has <InlineMath>AB = BC</InlineMath>,
        then it can be "turned over" so that <InlineMath>BC</InlineMath> replaces{' '}
        <InlineMath>AB</InlineMath>. Since the triangle exactly fills the same
        space, the base angles must be equal.
      </p>

      {/* Congruence */}
      <h3 className="text-xl font-semibold mt-10 mb-4">Congruence of Triangles</h3>

      <p className="text-dark-200 mb-6">
        Triangles that occupy the same space are called <strong>congruent</strong>.
        Euclid used the idea of "moving" one triangle to coincide with another.
      </p>

      <CardGrid>
        <Card>
          <CardHeader title="Side-Angle-Side (SAS)" />
          <p className="text-sm text-dark-300">
            Two triangles agree in two sides and the included angle.
          </p>
        </Card>
        <Card>
          <CardHeader title="Angle-Side-Angle (ASA)" />
          <p className="text-sm text-dark-300">
            Two triangles agree in two angles and the included side.
          </p>
        </Card>
        <Card>
          <CardHeader title="Side-Side-Side (SSS)" />
          <p className="text-sm text-dark-300">
            Two triangles agree in all three sides.
          </p>
        </Card>
      </CardGrid>

      <Callout type="info">
        <p>
          Later mathematicians (like Hilbert, 1899) stated triangle congruence as
          <em> axioms</em> rather than using the idea of motion. The idea of motion
          came back in Felix Klein's definition of geometry.
        </p>
      </Callout>

      {/* Inscribed Angle Theorem */}
      <h3 className="text-xl font-semibold mt-10 mb-4">The Inscribed Angle Theorem</h3>

      <p className="text-dark-200 mb-6">
        Perhaps the most important result derived from the isosceles triangle
        theorem is the relationship between angles in a circle:
      </p>

      <div className="bg-dark-800 rounded-lg p-6 mb-6 border-l-4 border-purple-400">
        <h4 className="text-lg font-semibold mb-3 text-purple-400">Inscribed Angle Theorem</h4>
        <p className="text-dark-200">
          An arc of a circle subtends <strong>twice the angle</strong> at the
          center as it does at the circumference.
        </p>
        <MathBlock>{`\\text{angle at center} = 2 \\times \\text{angle at circumference}`}</MathBlock>
      </div>

      <div className="bg-dark-800 rounded-lg p-6 mb-6">
        <h4 className="text-lg font-semibold mb-3 text-amber-400">Proof Sketch</h4>
        <p className="text-dark-200 text-sm mb-3">
          Let <InlineMath>P</InlineMath> be a point on the circle, and{' '}
          <InlineMath>O</InlineMath> be the center. Draw radii{' '}
          <InlineMath>OA</InlineMath> and <InlineMath>OP</InlineMath>.
        </p>
        <ul className="space-y-2 text-dark-300 text-sm">
          <li>
            • Since <InlineMath>OA = OP</InlineMath> (both radii), triangle{' '}
            <InlineMath>POA</InlineMath> is isosceles with equal base angles{' '}
            <InlineMath>\alpha</InlineMath>
          </li>
          <li>
            • The external angle at <InlineMath>O</InlineMath> is therefore{' '}
            <InlineMath>2\alpha</InlineMath>
          </li>
          <li>
            • Similarly for triangle <InlineMath>POB</InlineMath> with angles{' '}
            <InlineMath>\beta</InlineMath>
          </li>
          <li>
            • Thus the angle <InlineMath>2(\alpha + \beta)</InlineMath> at the
            center is twice the angle <InlineMath>\alpha + \beta</InlineMath> at
            the circumference
          </li>
        </ul>
      </div>

      {/* Thales' Theorem Revisited */}
      <h3 className="text-xl font-semibold mt-10 mb-4">Thales' Theorem Revisited</h3>

      <p className="text-dark-200 mb-6">
        A special case of the inscribed angle theorem gives Thales' theorem:
      </p>

      <Callout type="success">
        <p>
          When the arc is half the circumference (a semicircle), the angle at
          the center is <InlineMath>180°</InlineMath> (straight), so the angle
          at the circumference is <InlineMath>90°</InlineMath>—a{' '}
          <strong>right angle</strong>!
        </p>
      </Callout>

      <p className="text-dark-200 my-6">
        This explains why any triangle inscribed in a semicircle is right-angled.
        The inscribed angle theorem also implies that the angle at the
        circumference is <em>constant</em>—a chord looks the same size from any
        point on the same arc!
      </p>

      {/* Key Takeaways */}
      <h3 className="text-xl font-semibold mt-10 mb-4">Key Takeaways</h3>

      <div className="bg-dark-800 rounded-lg p-6">
        <ul className="space-y-3">
          <li className="flex items-start gap-3">
            <span className="text-amber-400 font-bold">1.</span>
            <span>
              The <strong>base angles</strong> of an isosceles triangle are equal
              (Pappus's elegant proof).
            </span>
          </li>
          <li className="flex items-start gap-3">
            <span className="text-amber-400 font-bold">2.</span>
            <span>
              <strong>Congruent triangles</strong> can be proven using SAS, ASA,
              or SSS.
            </span>
          </li>
          <li className="flex items-start gap-3">
            <span className="text-amber-400 font-bold">3.</span>
            <span>
              <strong>Inscribed Angle Theorem:</strong> An arc subtends twice
              the angle at the center as at the circumference.
            </span>
          </li>
          <li className="flex items-start gap-3">
            <span className="text-amber-400 font-bold">4.</span>
            <span>
              <strong>Thales' theorem</strong> is a special case: a semicircle
              subtends a right angle at the circumference.
            </span>
          </li>
          <li className="flex items-start gap-3">
            <span className="text-amber-400 font-bold">5.</span>
            <span>
              A chord looks the <strong>same size</strong> from any point on the
              same arc.
            </span>
          </li>
        </ul>
      </div>

      {/* Section Quiz */}
      <SectionQuiz sectionId={13} questions={section13Questions} />
    </LessonLayout>
  );
}
