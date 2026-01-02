import { LessonLayout } from '../../components/layout/LessonLayout';
import { Callout } from '../../components/common/Callout';
import { InlineMath, MathBlock } from '../../components/common/MathBlock';
import { Card, CardGrid, CardHeader } from '../../components/common/Card';
import { SectionQuiz } from '../../components/quiz';
import { section09Questions } from '../../data/quizzes';
import { RiemannSumExplorer } from '../../components/visualizations';

export default function Section09() {
  return (
    <LessonLayout sectionId={9}>
      <h2 className="text-2xl font-semibold mb-4">The Area Problem</h2>

      <p className="text-dark-200 mb-6 text-lg leading-relaxed">
        How do you measure the area of a curved region? For rectangles and triangles, we have
        simple formulas. But what about the area under a parabola, or inside a circle? This
        ancient problem—solved by Archimedes with breathtaking ingenuity—leads to the second
        great pillar of calculus: the <strong>integral</strong>.
      </p>

      <Callout type="info">
        <p className="italic">
          "Give me a place to stand, and I will move the Earth."
        </p>
        <p className="text-sm text-dark-400 mt-2">— Archimedes, who also figured out how to measure curved areas</p>
      </Callout>

      {/* The Challenge */}
      <h2 className="text-2xl font-semibold mt-10 mb-4">Why Curves Are Hard</h2>

      <p className="text-dark-200 mb-6">
        We can easily compute the area of shapes with straight sides:
      </p>

      <CardGrid>
        <Card>
          <CardHeader title="Rectangle" />
          <MathBlock>{`A = \\text{base} \\times \\text{height}`}</MathBlock>
        </Card>
        <Card>
          <CardHeader title="Triangle" />
          <MathBlock>{`A = \\frac{1}{2} \\times \\text{base} \\times \\text{height}`}</MathBlock>
        </Card>
      </CardGrid>

      <p className="text-dark-200 my-6">
        But a curved boundary doesn't play by these rules. How much area lies under the curve{' '}
        <InlineMath>{'y = x^2'}</InlineMath> from <InlineMath>{'x = 0'}</InlineMath> to{' '}
        <InlineMath>{'x = 1'}</InlineMath>? There's no simple formula—or is there?
      </p>

      {/* Archimedes' Method */}
      <h2 className="text-2xl font-semibold mt-10 mb-4">Archimedes' Brilliant Idea</h2>

      <p className="text-dark-200 mb-6">
        Around 250 BCE, Archimedes developed the <strong>method of exhaustion</strong>: approximate
        a curved area with simpler shapes, then make the approximation as accurate as you want.
      </p>

      <div className="bg-dark-800 rounded-xl p-6 mb-6">
        <h4 className="text-lg font-semibold text-primary-300 mb-4">The Strategy</h4>
        <ol className="space-y-3 text-dark-200">
          <li className="flex items-start gap-3">
            <span className="text-primary-400 font-bold">1.</span>
            <span>Fill the curved region with rectangles (or triangles).</span>
          </li>
          <li className="flex items-start gap-3">
            <span className="text-primary-400 font-bold">2.</span>
            <span>The rectangles don't quite fit—they leave gaps or overhang.</span>
          </li>
          <li className="flex items-start gap-3">
            <span className="text-primary-400 font-bold">3.</span>
            <span>Use more, thinner rectangles. The error gets smaller.</span>
          </li>
          <li className="flex items-start gap-3">
            <span className="text-primary-400 font-bold">4.</span>
            <span>As the rectangles become infinitely thin, the error vanishes.</span>
          </li>
        </ol>
      </div>

      <p className="text-dark-200 mb-6">
        Using this method, Archimedes proved that the area of a parabolic segment is exactly{' '}
        <InlineMath>{'\\frac{4}{3}'}</InlineMath> times the area of an inscribed triangle—a
        result that still amazes mathematicians today.
      </p>

      {/* Riemann Sums */}
      <h2 className="text-2xl font-semibold mt-10 mb-4">Riemann Sums: The Modern Version</h2>

      <p className="text-dark-200 mb-6">
        Today we formalize Archimedes' method using <strong>Riemann sums</strong>. To find the
        area under <InlineMath>{'y = f(x)'}</InlineMath> from <InlineMath>{'x = a'}</InlineMath>{' '}
        to <InlineMath>{'x = b'}</InlineMath>:
      </p>

      <div className="space-y-4 mb-8">
        <div className="flex gap-4 items-start p-4 bg-dark-800 rounded-lg">
          <span className="text-primary-400 font-mono text-sm whitespace-nowrap">Step 1</span>
          <div>
            <p className="font-semibold">Divide into strips</p>
            <p className="text-sm text-dark-400">
              Split the interval <InlineMath>{'[a, b]'}</InlineMath> into{' '}
              <InlineMath>{'n'}</InlineMath> equal pieces, each of width{' '}
              <InlineMath>{'\\Delta x = \\frac{b-a}{n}'}</InlineMath>.
            </p>
          </div>
        </div>
        <div className="flex gap-4 items-start p-4 bg-dark-800 rounded-lg">
          <span className="text-primary-400 font-mono text-sm whitespace-nowrap">Step 2</span>
          <div>
            <p className="font-semibold">Build rectangles</p>
            <p className="text-sm text-dark-400">
              For each strip, make a rectangle with width <InlineMath>{'\\Delta x'}</InlineMath>{' '}
              and height <InlineMath>{'f(x_i)'}</InlineMath> for some point{' '}
              <InlineMath>{'x_i'}</InlineMath> in that strip.
            </p>
          </div>
        </div>
        <div className="flex gap-4 items-start p-4 bg-dark-800 rounded-lg">
          <span className="text-primary-400 font-mono text-sm whitespace-nowrap">Step 3</span>
          <div>
            <p className="font-semibold">Sum the areas</p>
            <MathBlock>{`\\sum_{i=1}^{n} f(x_i) \\cdot \\Delta x`}</MathBlock>
          </div>
        </div>
        <div className="flex gap-4 items-start p-4 bg-dark-800 rounded-lg">
          <span className="text-primary-400 font-mono text-sm whitespace-nowrap">Step 4</span>
          <div>
            <p className="font-semibold">Take the limit</p>
            <MathBlock>{`\\text{Area} = \\lim_{n \\to \\infty} \\sum_{i=1}^{n} f(x_i) \\cdot \\Delta x`}</MathBlock>
          </div>
        </div>
      </div>

      <Callout type="success">
        <p>
          <strong>The Integral Symbol:</strong> Leibniz wrote this limit as{' '}
          <InlineMath>{'\\int_a^b f(x)\\,dx'}</InlineMath>. The elongated S (∫) stands for "summa"
          (sum), and <InlineMath>{'dx'}</InlineMath> represents the infinitesimally thin width
          of each rectangle.
        </p>
      </Callout>

      {/* Interactive Visualization */}
      <RiemannSumExplorer />

      {/* A Concrete Example */}
      <h2 className="text-2xl font-semibold mt-10 mb-4">Example: Area Under a Parabola</h2>

      <p className="text-dark-200 mb-6">
        Let's find the area under <InlineMath>{'y = x^2'}</InlineMath> from 0 to 1 using
        Riemann sums.
      </p>

      <div className="bg-dark-800 rounded-xl p-6 mb-6">
        <p className="text-dark-200 mb-4">
          Using right endpoints with <InlineMath>{'n'}</InlineMath> rectangles:
        </p>
        <MathBlock>{`\\sum_{i=1}^{n} \\left(\\frac{i}{n}\\right)^2 \\cdot \\frac{1}{n} = \\frac{1}{n^3} \\sum_{i=1}^{n} i^2`}</MathBlock>
        <p className="text-dark-200 my-4">
          Using the formula <InlineMath>{'\\sum_{i=1}^{n} i^2 = \\frac{n(n+1)(2n+1)}{6}'}</InlineMath>:
        </p>
        <MathBlock>{`= \\frac{1}{n^3} \\cdot \\frac{n(n+1)(2n+1)}{6} = \\frac{(n+1)(2n+1)}{6n^2}`}</MathBlock>
        <p className="text-dark-200 my-4">
          As <InlineMath>{'n \\to \\infty'}</InlineMath>:
        </p>
        <MathBlock>{`\\lim_{n \\to \\infty} \\frac{(n+1)(2n+1)}{6n^2} = \\lim_{n \\to \\infty} \\frac{2n^2 + 3n + 1}{6n^2} = \\frac{2}{6} = \\frac{1}{3}`}</MathBlock>
      </div>

      <p className="text-dark-200 mb-6">
        The area under <InlineMath>{'y = x^2'}</InlineMath> from 0 to 1 is exactly{' '}
        <InlineMath>{'\\frac{1}{3}'}</InlineMath>. This is what{' '}
        <InlineMath>{'\\int_0^1 x^2\\,dx = \\frac{1}{3}'}</InlineMath> means.
      </p>

      {/* Beyond Area */}
      <h2 className="text-2xl font-semibold mt-10 mb-4">Beyond Area: What Integrals Really Measure</h2>

      <p className="text-dark-200 mb-6">
        While we introduced the integral through area, it measures much more:
      </p>

      <div className="grid md:grid-cols-2 gap-6 mb-8">
        <div className="bg-gradient-to-br from-blue-900/30 to-blue-800/10 border border-blue-700/30 rounded-xl p-6">
          <h4 className="text-lg font-semibold text-blue-300 mb-3">Total Distance</h4>
          <MathBlock>{`\\int_a^b |v(t)|\\,dt`}</MathBlock>
          <p className="text-dark-200 mt-3 text-sm">
            If <InlineMath>{'v(t)'}</InlineMath> is velocity, this gives total distance traveled
            (accounting for direction changes).
          </p>
        </div>

        <div className="bg-gradient-to-br from-emerald-900/30 to-emerald-800/10 border border-emerald-700/30 rounded-xl p-6">
          <h4 className="text-lg font-semibold text-emerald-300 mb-3">Total Work</h4>
          <MathBlock>{`W = \\int_a^b F(x)\\,dx`}</MathBlock>
          <p className="text-dark-200 mt-3 text-sm">
            If force varies with position, integrate to find total work done.
          </p>
        </div>

        <div className="bg-gradient-to-br from-purple-900/30 to-purple-800/10 border border-purple-700/30 rounded-xl p-6">
          <h4 className="text-lg font-semibold text-purple-300 mb-3">Average Value</h4>
          <MathBlock>{`\\bar{f} = \\frac{1}{b-a}\\int_a^b f(x)\\,dx`}</MathBlock>
          <p className="text-dark-200 mt-3 text-sm">
            The average value of a continuous function over an interval.
          </p>
        </div>

        <div className="bg-gradient-to-br from-amber-900/30 to-amber-800/10 border border-amber-700/30 rounded-xl p-6">
          <h4 className="text-lg font-semibold text-amber-300 mb-3">Probability</h4>
          <MathBlock>{`P(a \\leq X \\leq b) = \\int_a^b f(x)\\,dx`}</MathBlock>
          <p className="text-dark-200 mt-3 text-sm">
            For continuous distributions, probabilities are integrals of density functions.
          </p>
        </div>
      </div>

      <Callout type="warning">
        <p>
          <strong>Signed Area:</strong> When the function is negative, the integral counts
          area as negative. This is intentional—it lets integrals measure net accumulation,
          where increases and decreases can cancel out.
        </p>
      </Callout>

      {/* The Philosophical Leap */}
      <h2 className="text-2xl font-semibold mt-10 mb-4">The Infinite Sum</h2>

      <p className="text-dark-200 mb-6">
        The integral represents something philosophically profound: an <strong>infinite sum</strong>{' '}
        of infinitesimal quantities. We're adding up infinitely many rectangles, each with zero
        area, and getting a finite, meaningful answer.
      </p>

      <div className="bg-dark-800 rounded-xl p-6 mb-6">
        <p className="text-dark-200 mb-4 italic">
          "The integral is a machine that turns zero times infinity into something sensible."
        </p>
        <p className="text-dark-200">
          Each thin slice has width <InlineMath>{'dx \\to 0'}</InlineMath>, but there are
          infinitely many of them. The product—handled carefully through limits—yields exact
          results. This is the magic of calculus.
        </p>
      </div>

      {/* Key Takeaways */}
      <h2 className="text-2xl font-semibold mt-10 mb-4">Key Takeaways</h2>

      <div className="bg-dark-800 rounded-lg p-6">
        <ul className="space-y-3">
          <li className="flex items-start gap-3">
            <span className="text-primary-400 font-bold">1.</span>
            <span>The integral solves the area problem: finding the area under a curve.</span>
          </li>
          <li className="flex items-start gap-3">
            <span className="text-primary-400 font-bold">2.</span>
            <span>We approximate with rectangles (Riemann sums) and take the limit as rectangles become infinitely thin.</span>
          </li>
          <li className="flex items-start gap-3">
            <span className="text-primary-400 font-bold">3.</span>
            <span>The integral symbol ∫ represents this infinite sum of infinitesimal pieces.</span>
          </li>
          <li className="flex items-start gap-3">
            <span className="text-primary-400 font-bold">4.</span>
            <span>Integrals measure more than area: distance, work, averages, probabilities, and countless other accumulations.</span>
          </li>
        </ul>
      </div>

      {/* Section Quiz */}
      <SectionQuiz sectionId={9} questions={section09Questions} />
    </LessonLayout>
  );
}
