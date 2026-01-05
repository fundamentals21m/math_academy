import { LessonLayout } from '../../components/layout/LessonLayout';
import { Callout } from '../../components/common/Callout';
import { Card, CardGrid, CardHeader } from '../../components/common/Card';
import { InlineMath, MathBlock } from '../../components/common/MathBlock';
import { SectionQuiz } from '../../components/quiz';
import { section12Questions } from '../../data/quizzes';

export default function Section12() {
  return (
    <LessonLayout sectionId={12}>
      <h2 className="text-2xl font-semibold mb-4">Parallels and Angles</h2>

      <p className="text-dark-200 mb-6 text-lg leading-relaxed">
        The crucial assumption in Euclid's geometry—the one that makes it
        "Euclidean"—is the <strong>parallel axiom</strong>. It can be stated in
        many different ways.
      </p>

      {/* Playfair's Axiom */}
      <div className="bg-dark-800 rounded-lg p-6 mb-6 border-l-4 border-emerald-400">
        <h4 className="text-lg font-semibold mb-3 text-emerald-400">Playfair's Axiom (1795)</h4>
        <p className="text-dark-200">
          If <InlineMath>\mathcal{'{L}'}</InlineMath> is a line and{' '}
          <InlineMath>P</InlineMath> is a point not on{' '}
          <InlineMath>\mathcal{'{L}'}</InlineMath>, then there is{' '}
          <strong>exactly one line</strong> through <InlineMath>P</InlineMath>{' '}
          that does not meet <InlineMath>\mathcal{'{L}'}</InlineMath>.
        </p>
      </div>

      <p className="text-dark-200 mb-6">
        The single line through <InlineMath>P</InlineMath> that does not meet{' '}
        <InlineMath>\mathcal{'{L}'}</InlineMath> is called the{' '}
        <strong>parallel</strong> to <InlineMath>\mathcal{'{L}'}</InlineMath>{' '}
        through <InlineMath>P</InlineMath>.
      </p>

      {/* Euclid's Version */}
      <h3 className="text-xl font-semibold mt-10 mb-4">Euclid's Original Statement</h3>

      <p className="text-dark-200 mb-6">
        Euclid's statement involves angles, which seems inelegant but is actually
        more informative:
      </p>

      <div className="bg-dark-800 rounded-lg p-6 mb-6">
        <blockquote className="border-l-2 border-amber-400 pl-4 text-dark-300 italic text-sm">
          "That, if a straight line falling on two straight lines make the
          interior angles on the same side less than two right angles, the two
          straight lines, if produced indefinitely, meet on that side on which
          are the angles less than the two right angles."
        </blockquote>
        <p className="text-dark-500 text-xs mt-2">— Euclid's Elements, Book I</p>
      </div>

      {/* Interior Angles */}
      <h3 className="text-xl font-semibold mt-10 mb-4">Interior Angles and Parallels</h3>

      <p className="text-dark-200 mb-6">
        When a transversal line crosses two other lines, it creates interior
        angles <InlineMath>\alpha</InlineMath> and <InlineMath>\beta</InlineMath>:
      </p>

      <CardGrid>
        <Card>
          <CardHeader title="Non-Parallel Lines" />
          <p className="text-sm text-dark-300">
            If <InlineMath>\alpha + \beta {'<'} 180°</InlineMath>, the lines meet
            on that side. If <InlineMath>\alpha + \beta {'>'} 180°</InlineMath>,
            they meet on the opposite side.
          </p>
        </Card>
        <Card>
          <CardHeader title="Parallel Lines" />
          <p className="text-sm text-dark-300">
            If <InlineMath>\alpha + \beta = 180°</InlineMath> (two right angles),
            the lines are <strong>parallel</strong>—they never meet.
          </p>
        </Card>
      </CardGrid>

      {/* Vertically Opposite Angles */}
      <h3 className="text-xl font-semibold mt-10 mb-4">Vertically Opposite Angles</h3>

      <p className="text-dark-200 mb-6">
        When two lines cross, they form two pairs of <strong>vertically opposite
        angles</strong>. These angles are always equal:
      </p>

      <div className="bg-dark-800 rounded-lg p-6 mb-6">
        <p className="text-dark-200 text-sm">
          If angles <InlineMath>\alpha</InlineMath> and{' '}
          <InlineMath>\beta</InlineMath> are on a straight line, then{' '}
          <InlineMath>\alpha + \beta = 180°</InlineMath>.
        </p>
        <p className="text-dark-200 text-sm mt-3">
          The two angles marked <InlineMath>\alpha</InlineMath> (vertically
          opposite) are equal because each plus <InlineMath>\beta</InlineMath>{' '}
          equals <InlineMath>180°</InlineMath>.
        </p>
      </div>

      {/* Angle Sum of Triangle */}
      <h3 className="text-xl font-semibold mt-10 mb-4">Angle Sum of a Triangle</h3>

      <p className="text-dark-200 mb-6">
        The most important consequence of the parallel axiom is:
      </p>

      <div className="bg-dark-800 rounded-lg p-6 mb-6 border-l-4 border-purple-400">
        <h4 className="text-lg font-semibold mb-3 text-purple-400">Triangle Angle Sum Theorem</h4>
        <p className="text-dark-200">
          The angle sum of any triangle is <strong>two right angles</strong>{' '}
          (180°).
        </p>
      </div>

      <div className="bg-dark-800 rounded-lg p-6 mb-6">
        <h4 className="text-lg font-semibold mb-3 text-amber-400">Proof</h4>
        <p className="text-dark-200 text-sm">
          Draw a parallel to one side of the triangle through the opposite vertex.
          The angles of the triangle appear along this parallel line (by the
          properties of parallel lines), and together they form a straight line
          (180°).
        </p>
      </div>

      <Callout type="info">
        <p>
          It follows by pasting triangles together that the angle sum of any{' '}
          <strong>quadrilateral</strong> is <strong>four right angles</strong>{' '}
          (360°).
        </p>
      </Callout>

      {/* Existence of Rectangles */}
      <h3 className="text-xl font-semibold mt-10 mb-4">Existence of Rectangles</h3>

      <p className="text-dark-200 mb-6">
        In a quadrilateral with equal angles, each angle must be a{' '}
        <strong>right angle</strong>. This means:
      </p>

      <Callout type="success">
        <p>
          <strong>Rectangles and squares of any size exist.</strong> This
          seemingly obvious fact actually follows from the parallel axiom! The
          existence of rectangles is the key to the intuitive concept of area
          and to finding a common ground for geometry and arithmetic.
        </p>
      </Callout>

      {/* Equivalence */}
      <h3 className="text-xl font-semibold mt-10 mb-4">Equivalent Statements</h3>

      <p className="text-dark-200 mb-6">
        The crucial role of the parallel axiom can be seen from the number of
        important statements that are <em>equivalent</em> to it:
      </p>

      <div className="bg-dark-800 rounded-lg p-6 mb-6">
        <p className="text-dark-300 text-sm mb-3">
          The following statements are all <strong>logically equivalent</strong>:
        </p>
        <ul className="space-y-2 text-dark-200 text-sm">
          <li className="flex items-start gap-3">
            <span className="text-amber-400">•</span>
            <span>Playfair's axiom (exactly one parallel through a point)</span>
          </li>
          <li className="flex items-start gap-3">
            <span className="text-amber-400">•</span>
            <span>Euclid's version (interior angles sum to two right angles)</span>
          </li>
          <li className="flex items-start gap-3">
            <span className="text-amber-400">•</span>
            <span>The angle sum of a triangle is 180°</span>
          </li>
          <li className="flex items-start gap-3">
            <span className="text-amber-400">•</span>
            <span>Rectangles of any size exist</span>
          </li>
        </ul>
      </div>

      <p className="text-dark-200 mb-6">
        None of these can be proved without the others—they all capture the
        essence of <strong>Euclidean geometry</strong>.
      </p>

      {/* Key Takeaways */}
      <h3 className="text-xl font-semibold mt-10 mb-4">Key Takeaways</h3>

      <div className="bg-dark-800 rounded-lg p-6">
        <ul className="space-y-3">
          <li className="flex items-start gap-3">
            <span className="text-amber-400 font-bold">1.</span>
            <span>
              The <strong>parallel axiom</strong> is what makes Euclidean geometry
              "Euclidean."
            </span>
          </li>
          <li className="flex items-start gap-3">
            <span className="text-amber-400 font-bold">2.</span>
            <span>
              <strong>Playfair's version:</strong> Through any point not on a line,
              there is exactly one parallel.
            </span>
          </li>
          <li className="flex items-start gap-3">
            <span className="text-amber-400 font-bold">3.</span>
            <span>
              <strong>Vertically opposite angles</strong> are equal; angles on a
              line sum to 180°.
            </span>
          </li>
          <li className="flex items-start gap-3">
            <span className="text-amber-400 font-bold">4.</span>
            <span>
              The angle sum of a <strong>triangle is 180°</strong>; of a
              quadrilateral, 360°.
            </span>
          </li>
          <li className="flex items-start gap-3">
            <span className="text-amber-400 font-bold">5.</span>
            <span>
              The parallel axiom implies that <strong>rectangles of any size
              exist</strong>—key to connecting geometry and arithmetic.
            </span>
          </li>
        </ul>
      </div>

      {/* Section Quiz */}
      <SectionQuiz sectionId={12} questions={section12Questions} />
    </LessonLayout>
  );
}
