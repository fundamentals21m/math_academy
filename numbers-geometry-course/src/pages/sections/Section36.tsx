import { LessonLayout } from '../../components/layout/LessonLayout';
import { Callout } from '../../components/common/Callout';
import { Card, CardGrid, CardHeader } from '../../components/common/Card';
import { InlineMath } from '../../components/common/MathBlock';
import { SectionQuiz } from '../../components/quiz';
import { section36Questions } from '../../data/quizzes';

export default function Section36() {
  return (
    <LessonLayout sectionId={36}>
      <h2 className="text-2xl font-semibold mb-4">
        Discussion: Diophantus and His Legacy
      </h2>

      <p className="text-dark-200 mb-6 text-lg leading-relaxed">
        The last peak in classical Greek mathematics was reached by{' '}
        <strong>Diophantus of Alexandria</strong>, sometime between 150 A.D. and
        300 A.D. His surviving work, the <em>Arithmetica</em>, has inspired
        mathematicians for nearly two millennia.
      </p>

      {/* Diophantus */}
      <h3 className="text-xl font-semibold mt-10 mb-4">
        The Arithmetica
      </h3>

      <p className="text-dark-200 mb-6">
        At first glance, the <em>Arithmetica</em> seems quite elementary—a
        collection of solved problems about numbers with no general theorems and
        no apparent "depth" (later results don't depend on earlier ones, unlike
        Euclid's <em>Elements</em>).
      </p>

      <Callout type="info">
        <p>
          This apparent simplicity is deceptive. The problems of Diophantus
          effectively illustrate general theorems, and some were deep enough to
          inspire <strong>Fermat</strong> and <strong>Euler</strong>, the
          greatest number theorists of the 17th and 18th centuries.
        </p>
      </Callout>

      {/* Euler's Assessment */}
      <h3 className="text-xl font-semibold mt-10 mb-4">Euler's Praise</h3>

      <div className="bg-dark-800 rounded-lg p-6 mb-6 border-l-4 border-purple-400">
        <p className="text-dark-200 italic">
          "Diophantus himself gives only the most special solutions of all the
          questions which he treats... But it must not be supposed that his
          method is restricted to these very special solutions... The actual
          methods which he uses for solving any of his problems are as general
          as those which are in use today; nay, we are obliged to admit that
          there is hardly any method yet invented in this kind of analysis of
          which there are not sufficiently distinct traces to be discovered in
          Diophantus."
        </p>
        <p className="text-dark-400 text-sm mt-3">— Leonhard Euler</p>
      </div>

      {/* Diophantine Equations */}
      <h3 className="text-xl font-semibold mt-10 mb-4">Diophantine Equations</h3>

      <p className="text-dark-200 mb-6">
        Equations to be solved in integers or rational numbers are now called{' '}
        <strong>Diophantine equations</strong> in his honor. The study of such
        equations combines algebra, geometry, and number theory in fascinating
        ways.
      </p>

      <CardGrid>
        <Card>
          <CardHeader title="Linear Equations" />
          <p className="text-xs text-dark-300">
            <InlineMath>ax + by = c</InlineMath>: solved completely using the
            Euclidean algorithm.
          </p>
        </Card>
        <Card>
          <CardHeader title="Quadratic Curves" />
          <p className="text-xs text-dark-300">
            Rational points found using Diophantus's line method. Either 0 or ∞
            solutions.
          </p>
        </Card>
        <Card>
          <CardHeader title="Cubic Curves" />
          <p className="text-xs text-dark-300">
            Much more mysterious! Can have any finite number of rational points.
          </p>
        </Card>
        <Card>
          <CardHeader title="Higher Degree" />
          <p className="text-xs text-dark-300">
            Generally intractable. Fermat's Last Theorem took 350+ years to
            resolve!
          </p>
        </Card>
      </CardGrid>

      {/* The Method of Lines */}
      <h3 className="text-xl font-semibold mt-10 mb-4">
        The Power of Geometric Methods
      </h3>

      <p className="text-dark-200 mb-6">
        Diophantus's method of finding rational points on curves by using lines
        through known points is remarkably powerful. It shows that:
      </p>

      <div className="bg-dark-800 rounded-lg p-6 mb-6">
        <ul className="space-y-3 text-dark-200">
          <li className="flex items-start gap-3">
            <span className="text-green-400 font-bold">•</span>
            <span>
              <strong>Algebra and geometry complement each other.</strong> Lines
              (geometry) give rational solutions (algebra).
            </span>
          </li>
          <li className="flex items-start gap-3">
            <span className="text-green-400 font-bold">•</span>
            <span>
              <strong>One solution generates all.</strong> For quadratic curves,
              a single rational point yields infinitely many.
            </span>
          </li>
          <li className="flex items-start gap-3">
            <span className="text-green-400 font-bold">•</span>
            <span>
              <strong>Rational numbers simplify integer problems.</strong> The
              parameter <InlineMath>t</InlineMath> is cleaner than{' '}
              <InlineMath>u, v, w</InlineMath>.
            </span>
          </li>
        </ul>
      </div>

      {/* Connection to Modern Mathematics */}
      <h3 className="text-xl font-semibold mt-10 mb-4">
        Connections to Modern Mathematics
      </h3>

      <p className="text-dark-200 mb-6">
        The study of rational points on curves has blossomed into one of the
        deepest areas of modern mathematics:
      </p>

      <CardGrid>
        <Card>
          <CardHeader title="Elliptic Curves" />
          <p className="text-xs text-dark-300">
            Cubic curves with a rational point form groups under a geometric
            "addition" law.
          </p>
        </Card>
        <Card>
          <CardHeader title="Mordell's Theorem" />
          <p className="text-xs text-dark-300">
            The rational points on an elliptic curve form a finitely generated
            group (1922).
          </p>
        </Card>
        <Card>
          <CardHeader title="Wiles's Proof" />
          <p className="text-xs text-dark-300">
            Fermat's Last Theorem was proved using deep connections to elliptic
            curves (1995).
          </p>
        </Card>
        <Card>
          <CardHeader title="BSD Conjecture" />
          <p className="text-xs text-dark-300">
            A million-dollar problem connecting rational points to analysis—still
            unsolved!
          </p>
        </Card>
      </CardGrid>

      {/* What We've Learned */}
      <h3 className="text-xl font-semibold mt-10 mb-4">
        What We've Learned in This Chapter
      </h3>

      <div className="bg-dark-800 rounded-lg p-6 mb-6">
        <ul className="space-y-3 text-dark-200">
          <li className="flex items-start gap-3">
            <span className="text-amber-400 font-bold">1.</span>
            <span>
              <strong>Pythagorean triples</strong> were known to the Babylonians
              1800 years before Pythagoras.
            </span>
          </li>
          <li className="flex items-start gap-3">
            <span className="text-amber-400 font-bold">2.</span>
            <span>
              <strong>Euclid</strong> found a formula giving all triples, using
              unique prime factorization.
            </span>
          </li>
          <li className="flex items-start gap-3">
            <span className="text-amber-400 font-bold">3.</span>
            <span>
              <strong>Diophantus</strong> simplified by using rational numbers
              and geometric projection.
            </span>
          </li>
          <li className="flex items-start gap-3">
            <span className="text-amber-400 font-bold">4.</span>
            <span>
              <strong>Brahmagupta</strong> extended to general rational
              triangles (628 A.D.).
            </span>
          </li>
          <li className="flex items-start gap-3">
            <span className="text-amber-400 font-bold">5.</span>
            <span>
              <strong>Fermat</strong> proved the area of a rational right
              triangle is never a square.
            </span>
          </li>
          <li className="flex items-start gap-3">
            <span className="text-amber-400 font-bold">6.</span>
            <span>
              <strong>Stereographic projection</strong> extends these ideas to
              spheres and higher dimensions.
            </span>
          </li>
        </ul>
      </div>

      {/* Looking Ahead */}
      <Callout type="success">
        <p>
          The ideas in this chapter—unique factorization, rational points,
          infinite descent—will return throughout the rest of the book. They
          connect to trigonometry, complex numbers, conic sections, and
          beyond!
        </p>
      </Callout>

      {/* Section Quiz */}
      <SectionQuiz sectionId={36} questions={section36Questions} />
    </LessonLayout>
  );
}
