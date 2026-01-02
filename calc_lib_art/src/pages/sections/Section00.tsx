import { LessonLayout } from '../../components/layout/LessonLayout';
import { Callout } from '../../components/common/Callout';
import { InlineMath, MathBlock } from '../../components/common/MathBlock';
import { Card, CardGrid, CardHeader } from '../../components/common/Card';
import { SectionQuiz } from '../../components/quiz';
import { section00Questions } from '../../data/quizzes';
import { CalculusDualView } from '../../components/visualizations';

export default function Section00() {
  return (
    <LessonLayout sectionId={0}>
      <h2 className="text-2xl font-semibold mb-4">What is Calculus?</h2>

      <p className="text-dark-200 mb-6 text-lg leading-relaxed">
        Calculus is humanity's greatest intellectual achievement for understanding <em>change</em>.
        While arithmetic teaches us to count, and algebra teaches us to find unknowns, calculus
        teaches us to capture the fleeting moment—to measure the immeasurable, to sum the infinite,
        and to make precise what seems hopelessly continuous.
      </p>

      <Callout type="info">
        <p className="italic">
          "Nature is written in the language of mathematics, and its characters are triangles,
          circles, and other geometric figures, without which it is humanly impossible to
          understand a single word."
        </p>
        <p className="text-sm text-dark-400 mt-2">— Galileo Galilei, 1623</p>
      </Callout>

      {/* The Big Questions */}
      <h3 className="text-xl font-semibold mt-10 mb-4">The Questions Calculus Answers</h3>

      <p className="text-dark-200 mb-6">
        Before calculus, mathematicians could measure static things: the area of a rectangle,
        the volume of a pyramid, the length of a line. But what about things that <em>change</em>?
      </p>

      <CardGrid>
        <Card>
          <CardHeader title="How Fast?" />
          <p className="text-sm text-dark-300">
            Not average speed over a journey, but <em>instantaneous</em> speed at a precise moment.
            How fast is a falling apple moving right <em>now</em>?
          </p>
        </Card>
        <Card>
          <CardHeader title="How Much?" />
          <p className="text-sm text-dark-300">
            How do we add up infinitely many infinitely small pieces? What's the area under a curve
            when there are no straight edges to measure?
          </p>
        </Card>
        <Card>
          <CardHeader title="Where Next?" />
          <p className="text-sm text-dark-300">
            Given how something is changing, can we predict where it will be? If we know
            velocity, can we find position?
          </p>
        </Card>
        <Card>
          <CardHeader title="What's Best?" />
          <p className="text-sm text-dark-300">
            When is a quantity at its maximum or minimum? What shape holds the most volume?
            What path takes the least time?
          </p>
        </Card>
      </CardGrid>

      {/* The Two Pillars */}
      <h2 className="text-2xl font-semibold mt-10 mb-4">The Two Pillars of Calculus</h2>

      <p className="text-dark-200 mb-6">
        All of calculus rests on two fundamental concepts, each answering a different kind
        of question about change:
      </p>

      <div className="grid md:grid-cols-2 gap-6 mb-8">
        <div className="bg-gradient-to-br from-indigo-900/30 to-indigo-800/10 border border-indigo-700/30 rounded-xl p-6">
          <h4 className="text-xl font-semibold text-indigo-300 mb-3">The Derivative</h4>
          <p className="text-dark-200 mb-4">
            Measures <strong>instantaneous rate of change</strong>—how fast something is
            changing at a single moment.
          </p>
          <div className="bg-dark-900/50 rounded-lg p-4">
            <MathBlock>{`\\frac{df}{dx} = \\lim_{h \\to 0} \\frac{f(x+h) - f(x)}{h}`}</MathBlock>
          </div>
          <p className="text-sm text-dark-400 mt-3">
            The slope of a curve at a point. The velocity at an instant. The sensitivity
            of one quantity to another.
          </p>
        </div>

        <div className="bg-gradient-to-br from-emerald-900/30 to-emerald-800/10 border border-emerald-700/30 rounded-xl p-6">
          <h4 className="text-xl font-semibold text-emerald-300 mb-3">The Integral</h4>
          <p className="text-dark-200 mb-4">
            Measures <strong>accumulated total</strong>—the sum of infinitely many
            infinitely small pieces.
          </p>
          <div className="bg-dark-900/50 rounded-lg p-4">
            <MathBlock>{`\\int_a^b f(x)\\,dx = \\lim_{n \\to \\infty} \\sum_{i=1}^n f(x_i)\\Delta x`}</MathBlock>
          </div>
          <p className="text-sm text-dark-400 mt-3">
            The area under a curve. The total distance traveled. The sum of continuously
            varying quantities.
          </p>
        </div>
      </div>

      <Callout type="success">
        <p>
          <strong>The Miracle of Calculus:</strong> These two operations—differentiation and
          integration—turn out to be <em>inverses</em> of each other. This stunning connection,
          the Fundamental Theorem of Calculus, is what makes the subject so powerful.
        </p>
      </Callout>

      {/* Interactive Visualization */}
      <CalculusDualView />

      {/* Why Liberal Arts? */}
      <h2 className="text-2xl font-semibold mt-10 mb-4">Calculus as a Liberal Art</h2>

      <p className="text-dark-200 mb-6">
        In this course, we approach calculus not as a collection of computational techniques,
        but as one of humanity's great intellectual adventures. We'll explore:
      </p>

      <div className="space-y-4 mb-8">
        <div className="flex gap-4 items-start p-4 bg-dark-800 rounded-lg">
          <span className="text-2xl">🏛️</span>
          <div>
            <p className="font-semibold">The History</p>
            <p className="text-sm text-dark-400">
              From Zeno's paradoxes in ancient Greece to the Newton-Leibniz controversy—the
              human story behind the mathematics.
            </p>
          </div>
        </div>
        <div className="flex gap-4 items-start p-4 bg-dark-800 rounded-lg">
          <span className="text-2xl">💭</span>
          <div>
            <p className="font-semibold">The Philosophy</p>
            <p className="text-sm text-dark-400">
              What does it mean for something to be "infinitely small"? Can we really reach
              a limit we only approach?
            </p>
          </div>
        </div>
        <div className="flex gap-4 items-start p-4 bg-dark-800 rounded-lg">
          <span className="text-2xl">🎨</span>
          <div>
            <p className="font-semibold">The Beauty</p>
            <p className="text-sm text-dark-400">
              The elegant connections between seemingly unrelated ideas, and the aesthetic
              pleasure of mathematical insight.
            </p>
          </div>
        </div>
        <div className="flex gap-4 items-start p-4 bg-dark-800 rounded-lg">
          <span className="text-2xl">🌍</span>
          <div>
            <p className="font-semibold">The Applications</p>
            <p className="text-sm text-dark-400">
              How calculus became the language of physics, economics, biology, and virtually
              every quantitative science.
            </p>
          </div>
        </div>
      </div>

      {/* A Taste of What's Coming */}
      <h3 className="text-xl font-semibold mt-8 mb-4">A Taste of What's Coming</h3>

      <p className="text-dark-200 mb-4">
        Consider a simple question: If you drop a ball, how fast is it falling after 2 seconds?
      </p>

      <p className="text-dark-200 mb-4">
        Galileo discovered that a falling object travels a distance proportional to the
        <em> square</em> of time:
      </p>

      <MathBlock>{`d(t) = 16t^2 \\text{ feet}`}</MathBlock>

      <p className="text-dark-200 my-4">
        After 1 second, it has fallen 16 feet. After 2 seconds, 64 feet. After 3 seconds, 144 feet.
        But what is its <em>instantaneous velocity</em> at exactly <InlineMath>t = 2</InlineMath>?
      </p>

      <p className="text-dark-200 mb-4">
        This is not a question ancient mathematics could answer. The velocity is constantly changing—there
        is no single "speed" to measure. Yet calculus gives us a precise answer:
      </p>

      <MathBlock>{`v(t) = \\frac{d}{dt}(16t^2) = 32t`}</MathBlock>

      <p className="text-dark-200 my-4">
        At <InlineMath>t = 2</InlineMath> seconds, the ball is falling at exactly 64 feet per second.
        This is the power of the derivative.
      </p>

      {/* Key Takeaways */}
      <h2 className="text-2xl font-semibold mt-10 mb-4">Key Takeaways</h2>

      <div className="bg-dark-800 rounded-lg p-6">
        <ul className="space-y-3">
          <li className="flex items-start gap-3">
            <span className="text-primary-400 font-bold">1.</span>
            <span>Calculus is the mathematics of <em>change</em>—it answers questions that arithmetic, algebra, and geometry cannot.</span>
          </li>
          <li className="flex items-start gap-3">
            <span className="text-primary-400 font-bold">2.</span>
            <span>The two pillars are the <strong>derivative</strong> (instantaneous rate of change) and the <strong>integral</strong> (accumulated total).</span>
          </li>
          <li className="flex items-start gap-3">
            <span className="text-primary-400 font-bold">3.</span>
            <span>Remarkably, differentiation and integration are inverse operations—the Fundamental Theorem of Calculus.</span>
          </li>
          <li className="flex items-start gap-3">
            <span className="text-primary-400 font-bold">4.</span>
            <span>This course explores the ideas, history, and philosophy of calculus, not just its techniques.</span>
          </li>
        </ul>
      </div>

      {/* Section Quiz */}
      <SectionQuiz sectionId={0} questions={section00Questions} />
    </LessonLayout>
  );
}
