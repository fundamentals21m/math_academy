import { LessonLayout } from '../../components/layout/LessonLayout';
import { Callout } from '../../components/common/Callout';
import { Math as MathInline, MathBlock } from '../../components/common/MathBlock';
import { Card, CardGrid, CardHeader } from '../../components/common/Card';
import { SectionQuiz } from '../../components/quiz';
import { section04Questions } from '../../data/quizzes';
import { LeibnizNotation } from '../../components/visualizations';

export default function Section04() {
  return (
    <LessonLayout sectionId={4}>
      <h2 className="text-2xl font-semibold mb-4">Leibniz and the Art of Notation</h2>

      <p className="text-dark-200 mb-6 text-lg leading-relaxed">
        While Newton hoarded his discoveries in Cambridge, a German polymath named{' '}
        <strong>Gottfried Wilhelm Leibniz</strong> independently invented calculus—and gave it
        the notation we still use today. Where Newton saw physical motion, Leibniz saw pure
        patterns. Where Newton was secretive, Leibniz was a prolific communicator. Their
        rivalry would split the mathematical world for a century.
      </p>

      <Callout type="info">
        <p className="italic">
          "It is unworthy of excellent men to lose hours like slaves in the labor of
          calculation which could be relegated to anyone else if machines were used."
        </p>
        <p className="text-sm text-dark-400 mt-2">— Gottfried Wilhelm Leibniz</p>
      </Callout>

      {/* The Universal Genius */}
      <h2 className="text-2xl font-semibold mt-10 mb-4">The Last Universal Genius</h2>

      <p className="text-dark-200 mb-6">
        Leibniz (1646–1716) was perhaps the last person who could claim mastery of nearly all
        human knowledge. His contributions span an astonishing range:
      </p>

      <CardGrid>
        <Card>
          <CardHeader title="Mathematics" />
          <p className="text-sm text-dark-300">
            Calculus. Binary arithmetic. Symbolic logic. Determinants. The concept of a
            function. Topology (analysis situs).
          </p>
        </Card>
        <Card>
          <CardHeader title="Philosophy" />
          <p className="text-sm text-dark-300">
            Monads. Pre-established harmony. The principle of sufficient reason. Theodicy
            ("best of all possible worlds").
          </p>
        </Card>
        <Card>
          <CardHeader title="Technology" />
          <p className="text-sm text-dark-300">
            Designed a calculating machine. Proposed a submarine. Improved mining technology.
            Developed a windmill-powered pump.
          </p>
        </Card>
        <Card>
          <CardHeader title="Other Fields" />
          <p className="text-sm text-dark-300">
            Law. Diplomacy. History. Linguistics. Geology. Library science. Theology.
            Corresponded with over 1,000 people.
          </p>
        </Card>
      </CardGrid>

      {/* The Notation */}
      <h2 className="text-2xl font-semibold mt-10 mb-4">The Gift of Notation</h2>

      <p className="text-dark-200 mb-6">
        Leibniz understood something profound: <strong>good notation is not just convenient—it
        actually helps you think</strong>. His symbols for calculus are so well-designed that
        they've survived over 300 years virtually unchanged.
      </p>

      <div className="grid md:grid-cols-2 gap-6 mb-8">
        <div className="bg-gradient-to-br from-indigo-900/30 to-indigo-800/10 border border-indigo-700/30 rounded-xl p-6">
          <h4 className="text-xl font-semibold text-indigo-300 mb-3">The Derivative</h4>
          <MathBlock>{`\\frac{dy}{dx}`}</MathBlock>
          <p className="text-dark-200 mt-4 mb-2">
            Leibniz wrote the derivative as a ratio of infinitesimals: the infinitely small
            change in <MathInline>{'y'}</MathInline> divided by the infinitely small change
            in <MathInline>{'x'}</MathInline>.
          </p>
          <p className="text-sm text-dark-400">
            This notation suggests correctly that derivatives behave like fractions—you can
            multiply, divide, and cancel them (with care).
          </p>
        </div>

        <div className="bg-gradient-to-br from-emerald-900/30 to-emerald-800/10 border border-emerald-700/30 rounded-xl p-6">
          <h4 className="text-xl font-semibold text-emerald-300 mb-3">The Integral</h4>
          <MathBlock>{`\\int y\\, dx`}</MathBlock>
          <p className="text-dark-200 mt-4 mb-2">
            The integral sign ∫ is an elongated S, for "summa" (Latin for sum). It represents
            the sum of infinitely many infinitesimal rectangles of height{' '}
            <MathInline>{'y'}</MathInline> and width <MathInline>{'dx'}</MathInline>.
          </p>
          <p className="text-sm text-dark-400">
            The notation visually captures the idea: we're adding up (∫) little pieces (y·dx).
          </p>
        </div>
      </div>

      <Callout type="success">
        <p>
          <strong>The Chain Rule Made Easy:</strong> With Leibniz's notation, the chain rule
          looks like simple algebra:
        </p>
        <MathBlock>{`\\frac{dy}{dx} = \\frac{dy}{du} \\cdot \\frac{du}{dx}`}</MathBlock>
        <p className="mt-2">
          The <MathInline>{'du'}</MathInline>'s "cancel"—not rigorously true, but a powerful
          mnemonic that usually gives the right answer.
        </p>
      </Callout>

      {/* Interactive Visualization */}
      <LeibnizNotation />

      {/* Comparison */}
      <h2 className="text-2xl font-semibold mt-10 mb-4">Newton vs. Leibniz: A Comparison</h2>

      <div className="overflow-x-auto mb-8">
        <table className="w-full text-sm">
          <thead>
            <tr className="border-b border-dark-600">
              <th className="text-left p-3 text-dark-400">Aspect</th>
              <th className="text-left p-3 text-dark-400">Newton</th>
              <th className="text-left p-3 text-dark-400">Leibniz</th>
            </tr>
          </thead>
          <tbody className="text-dark-300">
            <tr className="border-b border-dark-700">
              <td className="p-3 font-semibold">Notation</td>
              <td className="p-3"><MathInline>{'\\dot{x}, \\ddot{x}'}</MathInline></td>
              <td className="p-3"><MathInline>{'\\frac{dx}{dt}, \\frac{d^2x}{dt^2}'}</MathInline></td>
            </tr>
            <tr className="border-b border-dark-700">
              <td className="p-3 font-semibold">Viewpoint</td>
              <td className="p-3">Physical (motion, velocity)</td>
              <td className="p-3">Formal (infinitesimals, sums)</td>
            </tr>
            <tr className="border-b border-dark-700">
              <td className="p-3 font-semibold">Strengths</td>
              <td className="p-3">Simple for time derivatives</td>
              <td className="p-3">Versatile, suggests manipulations</td>
            </tr>
            <tr className="border-b border-dark-700">
              <td className="p-3 font-semibold">Discovery</td>
              <td className="p-3">~1666</td>
              <td className="p-3">~1675</td>
            </tr>
            <tr className="border-b border-dark-700">
              <td className="p-3 font-semibold">Publication</td>
              <td className="p-3">1687 (Principia)</td>
              <td className="p-3">1684 (first paper)</td>
            </tr>
            <tr>
              <td className="p-3 font-semibold">Legacy</td>
              <td className="p-3">Dominated British math</td>
              <td className="p-3">Dominated Continental math</td>
            </tr>
          </tbody>
        </table>
      </div>

      {/* The Philosophical Backdrop */}
      <h2 className="text-2xl font-semibold mt-10 mb-4">The Philosopher's Calculus</h2>

      <p className="text-dark-200 mb-6">
        For Leibniz, calculus was part of a grander vision: a universal language of reasoning,
        a <em>characteristica universalis</em>, that could resolve all disputes through
        calculation.
      </p>

      <div className="bg-dark-800 rounded-xl p-6 mb-6">
        <p className="text-dark-200 mb-4 italic">
          "If controversies were to arise, there would be no more need of disputation between
          two philosophers than between two accountants. For it would suffice to take their
          pencils in hand, sit down at their slates, and say to each other: Let us calculate."
        </p>
        <p className="text-sm text-dark-400">— Leibniz, imagining a future of rational discourse</p>
      </div>

      <p className="text-dark-200 mb-6">
        This dream of reducing all thought to calculation would inspire later work in
        mathematical logic, from Boole to Frege to Gödel—even though Gödel would eventually
        prove its impossibility.
      </p>

      {/* The Fundamental Theorem */}
      <h2 className="text-2xl font-semibold mt-10 mb-4">The Fundamental Insight</h2>

      <p className="text-dark-200 mb-6">
        Both Newton and Leibniz independently discovered the most important theorem in calculus:
        differentiation and integration are inverse operations.
      </p>

      <div className="bg-gradient-to-r from-primary-900/20 to-primary-800/10 border border-primary-700/30 rounded-xl p-6 mb-6">
        <h4 className="text-lg font-semibold text-primary-300 mb-4">The Fundamental Theorem of Calculus</h4>
        <MathBlock>{`\\frac{d}{dx}\\int_a^x f(t)\\,dt = f(x)`}</MathBlock>
        <p className="text-dark-200 mt-4">
          If you integrate a function and then differentiate the result, you get back the
          original function. And conversely:
        </p>
        <MathBlock>{`\\int_a^b \\frac{df}{dx}\\,dx = f(b) - f(a)`}</MathBlock>
        <p className="text-dark-200 mt-4">
          The integral of a derivative gives the net change. <strong>This connection is why
          calculus is so powerful</strong>—problems about areas become problems about rates,
          and vice versa.
        </p>
      </div>

      {/* Key Takeaways */}
      <h2 className="text-2xl font-semibold mt-10 mb-4">Key Takeaways</h2>

      <div className="bg-dark-800 rounded-lg p-6">
        <ul className="space-y-3">
          <li className="flex items-start gap-3">
            <span className="text-primary-400 font-bold">1.</span>
            <span>Leibniz independently invented calculus and gave it superior notation: dy/dx for derivatives, ∫ for integrals.</span>
          </li>
          <li className="flex items-start gap-3">
            <span className="text-primary-400 font-bold">2.</span>
            <span>Good notation is a tool for thought—Leibniz's symbols suggest algebraic manipulations that often give correct results.</span>
          </li>
          <li className="flex items-start gap-3">
            <span className="text-primary-400 font-bold">3.</span>
            <span>Leibniz viewed calculus as part of a broader dream of reducing all reasoning to calculation.</span>
          </li>
          <li className="flex items-start gap-3">
            <span className="text-primary-400 font-bold">4.</span>
            <span>Both Newton and Leibniz discovered the Fundamental Theorem: differentiation and integration are inverse operations.</span>
          </li>
        </ul>
      </div>

      {/* Section Quiz */}
      <SectionQuiz sectionId={4} questions={section04Questions} />
    </LessonLayout>
  );
}
