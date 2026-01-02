import { LessonLayout } from '../../components/layout/LessonLayout';
import { Callout } from '../../components/common/Callout';
import { InlineMath } from '../../components/common/MathBlock';
import { Card, CardGrid, CardHeader } from '../../components/common/Card';

export default function Section00() {
  return (
    <LessonLayout sectionId={0}>
      <h2 className="text-2xl font-semibold mb-4">The Two Basic Concepts of Calculus</h2>

      <p className="text-dark-200 mb-6">
        The remarkable progress that has been made in science and technology during the last
        century is due in large part to the development of mathematics. That branch of mathematics
        known as <strong>integral and differential calculus</strong> serves as a natural and
        powerful tool for attacking a variety of problems that arise in physics, astronomy,
        engineering, chemistry, geology, biology, and other fields.
      </p>

      <Callout type="info">
        <p>
          Calculus is more than a technical tool—it is a collection of fascinating and exciting
          ideas that have interested thinking men for centuries. These ideas have to do with
          <em> speed, area, volume, rate of growth, continuity, tangent line</em>, and other
          concepts from a variety of fields.
        </p>
      </Callout>

      {/* Sample Problems */}
      <h3 className="text-xl font-semibold mt-8 mb-4">What Can Calculus Do?</h3>

      <p className="text-dark-200 mb-4">
        To give you an idea of the many different types of problems that can be treated by
        the methods of calculus, here are a few sample questions:
      </p>

      <CardGrid>
        <Card>
          <CardHeader title="Escape Velocity" />
          <p className="text-sm text-dark-300">
            With what speed should a rocket be fired upward so that it never returns to earth?
          </p>
        </Card>
        <Card>
          <CardHeader title="Geometric Optimization" />
          <p className="text-sm text-dark-300">
            What is the radius of the smallest circular disk that can cover every isosceles
            triangle of a given perimeter <InlineMath>{'L'}</InlineMath>?
          </p>
        </Card>
        <Card>
          <CardHeader title="Volume Calculation" />
          <p className="text-sm text-dark-300">
            What volume of material is removed from a solid sphere of radius <InlineMath>{'2r'}</InlineMath> if
            a hole of radius <InlineMath>{'r'}</InlineMath> is drilled through the center?
          </p>
        </Card>
        <Card>
          <CardHeader title="Population Growth" />
          <p className="text-sm text-dark-300">
            If a strain of bacteria grows at a rate proportional to the amount present and
            if the population doubles in one hour, by how much will it increase at the end of two hours?
          </p>
        </Card>
      </CardGrid>

      {/* The Two Fundamental Problems */}
      <h2 className="text-2xl font-semibold mt-10 mb-4">The Two Fundamental Problems</h2>

      <p className="text-dark-200 mb-6">
        Most of the ideas in calculus can be formulated so that they revolve around two
        rather specialized problems of a geometric nature. Understanding these two problems
        is the key to understanding all of calculus.
      </p>

      <div className="grid md:grid-cols-2 gap-6 mb-8">
        <Callout type="definition">
          <p className="font-semibold text-lg mb-2">Problem 1: The Area Problem</p>
          <p>
            Given a curve <InlineMath>{'C'}</InlineMath> above a horizontal base line,
            <strong> assign a number which measures the area</strong> of the region below
            the curve and above the base.
          </p>
          <p className="text-sm text-dark-400 mt-2">
            This leads to <strong>Integral Calculus</strong> (Chapter 1)
          </p>
        </Callout>

        <Callout type="definition">
          <p className="font-semibold text-lg mb-2">Problem 2: The Tangent Problem</p>
          <p>
            Given a curve <InlineMath>{'C'}</InlineMath> and a line drawn tangent to it,
            <strong> assign a number which measures the steepness</strong> of this tangent line.
          </p>
          <p className="text-sm text-dark-400 mt-2">
            This leads to <strong>Differential Calculus</strong> (Chapter 4)
          </p>
        </Callout>
      </div>

      <Callout type="theorem">
        <p>
          <strong>The Unifying Power of Calculus:</strong> These two seemingly different
          problems—finding areas and finding tangent slopes—turn out to be intimately
          connected. The <em>Fundamental Theorem of Calculus</em> reveals that differentiation
          and integration are inverse operations.
        </p>
      </Callout>

      {/* Historical Background */}
      <h2 className="text-2xl font-semibold mt-10 mb-4">Historical Background</h2>

      <p className="text-dark-200 mb-4">
        The birth of integral calculus occurred more than 2000 years ago when the Greeks
        attempted to determine areas by a process which they called the <strong>method of exhaustion</strong>.
      </p>

      <Callout type="info">
        <p className="font-semibold mb-2">The Method of Exhaustion</p>
        <p>
          Given a region whose area is to be determined:
        </p>
        <ol className="list-decimal list-inside mt-2 space-y-1 text-sm">
          <li>Inscribe a polygonal region which approximates the given region</li>
          <li>Choose another polygon that gives a better approximation</li>
          <li>Continue with polygons having more and more sides</li>
          <li>The polygons "exhaust" the given region in the limit</li>
        </ol>
      </Callout>

      <p className="text-dark-200 mt-4 mb-6">
        This method was used successfully by <strong>Archimedes (287-212 B.C.)</strong> to
        find exact formulas for the area of a circle and a few other special figures.
      </p>

      {/* Timeline */}
      <h3 className="text-xl font-semibold mt-8 mb-4">Key Figures in the Development of Calculus</h3>

      <div className="space-y-4">
        <div className="flex gap-4 items-start p-4 bg-dark-800 rounded-lg">
          <span className="text-primary-400 font-mono text-sm whitespace-nowrap">287-212 BC</span>
          <div>
            <p className="font-semibold">Archimedes</p>
            <p className="text-sm text-dark-400">Method of exhaustion; areas of circles and parabolic segments</p>
          </div>
        </div>
        <div className="flex gap-4 items-start p-4 bg-dark-800 rounded-lg">
          <span className="text-primary-400 font-mono text-sm whitespace-nowrap">17th Century</span>
          <div>
            <p className="font-semibold">Cavalieri, Fermat, Pascal</p>
            <p className="text-sm text-dark-400">Extended integration methods to many new curves</p>
          </div>
        </div>
        <div className="flex gap-4 items-start p-4 bg-dark-800 rounded-lg">
          <span className="text-primary-400 font-mono text-sm whitespace-nowrap">1642-1727</span>
          <div>
            <p className="font-semibold">Isaac Newton</p>
            <p className="text-sm text-dark-400">Discovered the fundamental theorem; invented fluxions</p>
          </div>
        </div>
        <div className="flex gap-4 items-start p-4 bg-dark-800 rounded-lg">
          <span className="text-primary-400 font-mono text-sm whitespace-nowrap">1646-1716</span>
          <div>
            <p className="font-semibold">Gottfried Wilhelm Leibniz</p>
            <p className="text-sm text-dark-400">Independent discovery; created the notation we use today</p>
          </div>
        </div>
        <div className="flex gap-4 items-start p-4 bg-dark-800 rounded-lg">
          <span className="text-primary-400 font-mono text-sm whitespace-nowrap">19th Century</span>
          <div>
            <p className="font-semibold">Cauchy, Weierstrass, Dedekind</p>
            <p className="text-sm text-dark-400">Rigorous foundations using limits and real analysis</p>
          </div>
        </div>
      </div>

      {/* Key Takeaways */}
      <h2 className="text-2xl font-semibold mt-10 mb-4">Key Takeaways</h2>

      <div className="bg-dark-800 rounded-lg p-6">
        <ul className="space-y-3">
          <li className="flex items-start gap-3">
            <span className="text-primary-400 font-bold">1.</span>
            <span>Calculus solves two fundamental problems: finding areas under curves (integration) and finding slopes of tangent lines (differentiation).</span>
          </li>
          <li className="flex items-start gap-3">
            <span className="text-primary-400 font-bold">2.</span>
            <span>These two problems, seemingly unrelated, are connected by the Fundamental Theorem of Calculus.</span>
          </li>
          <li className="flex items-start gap-3">
            <span className="text-primary-400 font-bold">3.</span>
            <span>The Greeks invented the method of exhaustion, which foreshadowed integral calculus.</span>
          </li>
          <li className="flex items-start gap-3">
            <span className="text-primary-400 font-bold">4.</span>
            <span>Newton and Leibniz independently discovered the fundamental theorem in the 17th century.</span>
          </li>
        </ul>
      </div>
    </LessonLayout>
  );
}
