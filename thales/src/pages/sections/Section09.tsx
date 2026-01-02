import { LessonLayout } from '../../components/layout/LessonLayout';
import { Callout } from '../../components/common/Callout';
import { Card, CardGrid, CardHeader } from '../../components/common/Card';
import { InlineMath, MathBlock } from '../../components/common/MathBlock';
import { SectionQuiz } from '../../components/quiz';
import { section09Questions } from '../../data/quizzes';

export default function Section09() {
  return (
    <LessonLayout sectionId={9}>
      <h2 className="text-2xl font-semibold mb-4">The Crisis of Incommensurables</h2>

      <p className="text-dark-200 mb-6 text-lg leading-relaxed">
        The Pythagorean belief that <strong>"all is number"</strong> implied that
        every pair of lengths could be expressed as a ratio of whole numbers. This
        assumption was shattered by one of the most profound discoveries in the
        history of mathematics: the <strong>irrationality of{' '}
        <InlineMath>{`\\sqrt{2}`}</InlineMath></strong>.
      </p>

      <Callout type="info">
        <p>
          Two lengths <InlineMath>a</InlineMath> and <InlineMath>b</InlineMath> are
          said to be <strong>commensurable</strong> if there exist positive integers{' '}
          <InlineMath>p</InlineMath> and <InlineMath>q</InlineMath> such that{' '}
          <InlineMath>{`a/b = p/q`}</InlineMath>. In modern terms, this means their
          ratio is a <strong>rational number</strong>.
        </p>
      </Callout>

      {/* The Discovery */}
      <h3 className="text-xl font-semibold mt-10 mb-4">The Shocking Discovery</h3>

      <p className="text-dark-200 mb-6">
        The Pythagoreans were aware that when a vibrating string is divided into
        two parts of lengths <InlineMath>a</InlineMath> and <InlineMath>b</InlineMath>,
        a melodious tone is produced only when <InlineMath>a</InlineMath> and{' '}
        <InlineMath>b</InlineMath> are commensurable. This supported their view that
        harmony and number were deeply connected.
      </p>

      <p className="text-dark-200 mb-6">
        Unfortunately for the Pythagoreans, they soon discovered that the{' '}
        <strong>diagonal of a square is not commensurable with its side</strong>.
        Consider a square with side length 1. By the Pythagorean theorem, the
        diagonal has length <InlineMath>{`\\sqrt{2}`}</InlineMath>.
      </p>

      <div className="bg-dark-800 rounded-lg p-6 mb-6 border-l-4 border-red-400">
        <h4 className="text-lg font-semibold mb-3 text-red-400">
          Proof that <InlineMath>{`\\sqrt{2}`}</InlineMath> is Irrational
        </h4>
        <p className="text-dark-200 mb-4">
          This elegant proof by contradiction is found in Aristotle's{' '}
          <em>Prior Analytics</em>:
        </p>
        <ol className="text-dark-300 space-y-3 ml-4">
          <li>
            <strong>1.</strong> Suppose{' '}
            <InlineMath>{`\\sqrt{2} = p/q`}</InlineMath> where{' '}
            <InlineMath>p</InlineMath> and <InlineMath>q</InlineMath> are positive
            integers with no common factors.
          </li>
          <li>
            <strong>2.</strong> Then <InlineMath>{`p^2 = 2q^2`}</InlineMath>, so{' '}
            <InlineMath>{`p^2`}</InlineMath> is even.
          </li>
          <li>
            <strong>3.</strong> Since the square of an odd number is odd,{' '}
            <InlineMath>p</InlineMath> must be even. Write{' '}
            <InlineMath>{`p = 2r`}</InlineMath>.
          </li>
          <li>
            <strong>4.</strong> Substituting: <InlineMath>{`2q^2 = (2r)^2 = 4r^2`}</InlineMath>,
            so <InlineMath>{`q^2 = 2r^2`}</InlineMath>.
          </li>
          <li>
            <strong>5.</strong> This means <InlineMath>{`q^2`}</InlineMath> is also even,
            so <InlineMath>q</InlineMath> is even.
          </li>
          <li>
            <strong>6.</strong> <span className="text-red-400">Contradiction!</span> Both{' '}
            <InlineMath>p</InlineMath> and <InlineMath>q</InlineMath> are even, but we
            assumed they have no common factors.
          </li>
        </ol>
        <p className="text-dark-400 mt-4 text-sm">
          Therefore, <InlineMath>{`\\sqrt{2}`}</InlineMath> cannot be written as a
          ratio of integers. It is <strong>irrational</strong>.
        </p>
      </div>

      {/* The Secret and Hippasus */}
      <h3 className="text-xl font-semibold mt-10 mb-4">The Secret of the Brotherhood</h3>

      <p className="text-dark-200 mb-6">
        The Pythagoreans tried to keep this discovery a secret, as it seemed to
        undermine their entire philosophy. According to legend, it was{' '}
        <strong>Hippasus</strong> who leaked the secret to outsiders — and he
        allegedly drowned in a shipwreck as divine punishment for his betrayal.
      </p>

      <Callout type="warning">
        <p>
          It seems that Hippasus was the "Trotsky" of the Pythagorean society. The
          discovery of incommensurables created a profound <strong>crisis</strong>{' '}
          in Greek mathematics that would take generations to resolve.
        </p>
      </Callout>

      {/* Geometric Algebra */}
      <h3 className="text-xl font-semibold mt-10 mb-4">The Turn to Geometry</h3>

      <p className="text-dark-200 mb-6">
        The Greeks did not have infinite decimals. They did not know how to handle
        a number like <InlineMath>{`\\sqrt{2}`}</InlineMath> arithmetically or
        algebraically the way we do now. However, they knew that{' '}
        <InlineMath>{`\\sqrt{2}`}</InlineMath> was a <em>length</em>, and they
        turned to <strong>geometry</strong> for understanding.
      </p>

      <p className="text-dark-200 mb-6">
        The problem of incommensurables was one of the main reasons that the Greeks
        preferred to do what we would call algebra in a <strong>geometric manner</strong>.
        Algebraic identities were expressed as relationships between areas.
      </p>

      <CardGrid>
        <Card>
          <CardHeader title="Distributive Law" />
          <p className="text-sm text-dark-300 mb-2">
            The law <InlineMath>{`a(b + c) = ab + ac`}</InlineMath>
          </p>
          <p className="text-xs text-dark-400">
            Thought of as an addition rule for areas of rectangles
          </p>
        </Card>
        <Card>
          <CardHeader title="Binomial Square" />
          <p className="text-sm text-dark-300 mb-2">
            The law <InlineMath>{`(a + b)^2 = a^2 + 2ab + b^2`}</InlineMath>
          </p>
          <p className="text-xs text-dark-400">
            Illustrated by dividing a square into four parts
          </p>
        </Card>
        <Card>
          <CardHeader title="Difference of Squares" />
          <p className="text-sm text-dark-300 mb-2">
            The law <InlineMath>{`(a+b)(a-b) = a^2 - b^2`}</InlineMath>
          </p>
          <p className="text-xs text-dark-400">
            From Euclid's Elements, Book II, Proposition 5
          </p>
        </Card>
      </CardGrid>

      <p className="text-dark-200 mt-6 mb-6">
        Euclid expressed these algebraic identities in purely geometric language.
        For example, the distributive law became:
      </p>

      <div className="bg-dark-800 rounded-lg p-6 mb-6 border-l-4 border-cyan-400 italic">
        <p className="text-dark-200">
          "If there are two straight lines, and one of them be cut into any number
          of segments whatever, the rectangle contained by the two straight lines
          is equal to the rectangles contained by the uncut straight line and each
          of the segments."
        </p>
        <p className="text-dark-400 mt-2 text-sm not-italic">
          — Euclid, <em>Elements</em>, Book II
        </p>
      </div>

      {/* Approximating √2 */}
      <h3 className="text-xl font-semibold mt-10 mb-4">
        Approximating <InlineMath>{`\\sqrt{2}`}</InlineMath>
      </h3>

      <p className="text-dark-200 mb-6">
        Although <InlineMath>{`\\sqrt{2}`}</InlineMath> is irrational, the
        Pythagoreans found ways to approximate it as closely as desired using
        rational numbers. Their method exploited solutions to the equation:
      </p>

      <MathBlock>{`x^2 - 2y^2 = \\pm 1`}</MathBlock>

      <p className="text-dark-200 mt-6 mb-6">
        If <InlineMath>x</InlineMath> and <InlineMath>y</InlineMath> are positive
        integers satisfying this equation, then <InlineMath>{`x/y`}</InlineMath> is
        approximately <InlineMath>{`\\sqrt{2}`}</InlineMath>. More precisely:
      </p>

      <MathBlock>{`\\left| \\frac{x}{y} - \\sqrt{2} \\right| < \\frac{1}{y^2}`}</MathBlock>

      <p className="text-dark-200 mt-6 mb-6">
        To find such integers, the Pythagoreans used a recursive method. Starting
        with <InlineMath>{`a_1 = 1`}</InlineMath> and{' '}
        <InlineMath>{`b_1 = 1`}</InlineMath>, they defined:
      </p>

      <MathBlock>{`a_{n+1} = a_n + 2b_n, \\quad b_{n+1} = a_n + b_n`}</MathBlock>

      <p className="text-dark-200 mt-6 mb-4">
        This produces increasingly accurate approximations:
      </p>

      <div className="overflow-x-auto mb-6">
        <table className="w-full text-sm">
          <thead>
            <tr className="border-b border-dark-600">
              <th className="text-center py-3 px-4 text-amber-400">n</th>
              <th className="text-center py-3 px-4 text-amber-400">
                <InlineMath>{`a_n`}</InlineMath>
              </th>
              <th className="text-center py-3 px-4 text-amber-400">
                <InlineMath>{`b_n`}</InlineMath>
              </th>
              <th className="text-center py-3 px-4 text-amber-400">
                <InlineMath>{`a_n / b_n`}</InlineMath>
              </th>
              <th className="text-center py-3 px-4 text-amber-400">Decimal</th>
            </tr>
          </thead>
          <tbody className="text-dark-300">
            <tr className="border-b border-dark-700">
              <td className="text-center py-3 px-4">1</td>
              <td className="text-center py-3 px-4">1</td>
              <td className="text-center py-3 px-4">1</td>
              <td className="text-center py-3 px-4">1/1</td>
              <td className="text-center py-3 px-4">1.000</td>
            </tr>
            <tr className="border-b border-dark-700">
              <td className="text-center py-3 px-4">2</td>
              <td className="text-center py-3 px-4">3</td>
              <td className="text-center py-3 px-4">2</td>
              <td className="text-center py-3 px-4">3/2</td>
              <td className="text-center py-3 px-4">1.500</td>
            </tr>
            <tr className="border-b border-dark-700">
              <td className="text-center py-3 px-4">3</td>
              <td className="text-center py-3 px-4">7</td>
              <td className="text-center py-3 px-4">5</td>
              <td className="text-center py-3 px-4">7/5</td>
              <td className="text-center py-3 px-4">1.400</td>
            </tr>
            <tr className="border-b border-dark-700">
              <td className="text-center py-3 px-4">4</td>
              <td className="text-center py-3 px-4">17</td>
              <td className="text-center py-3 px-4">12</td>
              <td className="text-center py-3 px-4">17/12</td>
              <td className="text-center py-3 px-4">1.41667</td>
            </tr>
            <tr>
              <td className="text-center py-3 px-4">5</td>
              <td className="text-center py-3 px-4">41</td>
              <td className="text-center py-3 px-4">29</td>
              <td className="text-center py-3 px-4">41/29</td>
              <td className="text-center py-3 px-4">1.41379</td>
            </tr>
          </tbody>
        </table>
      </div>

      <p className="text-dark-200 mb-6">
        For comparison, <InlineMath>{`\\sqrt{2} \\approx 1.41421`}</InlineMath>.
        The approximations alternate above and below the true value, getting
        closer with each step.
      </p>

      <Callout type="success">
        <p>
          It can be proven by mathematical induction that{' '}
          <InlineMath>{`a_n^2 - 2b_n^2 = (-1)^n`}</InlineMath>. This guarantees that
          each fraction <InlineMath>{`a_n/b_n`}</InlineMath> satisfies the Pell
          equation <InlineMath>{`x^2 - 2y^2 = \\pm 1`}</InlineMath>.
        </p>
      </Callout>

      {/* The Legacy */}
      <h3 className="text-xl font-semibold mt-10 mb-4">The Legacy of the Crisis</h3>

      <p className="text-dark-200 mb-6">
        The discovery of incommensurables had lasting effects on the development
        of mathematics:
      </p>

      <div className="bg-dark-800 rounded-lg p-6 mb-6">
        <ul className="space-y-3 text-dark-300">
          <li className="flex items-start gap-3">
            <span className="text-amber-400">•</span>
            <span>
              It forced a separation between <strong>number</strong> and{' '}
              <strong>magnitude</strong> that persisted for two millennia
            </span>
          </li>
          <li className="flex items-start gap-3">
            <span className="text-amber-400">•</span>
            <span>
              It led to the development of <strong>geometric algebra</strong>,
              where algebraic relationships were expressed through areas and lengths
            </span>
          </li>
          <li className="flex items-start gap-3">
            <span className="text-amber-400">•</span>
            <span>
              It eventually led to <strong>Eudoxus's theory of proportions</strong>{' '}
              (Book V of Euclid's Elements), which could handle incommensurable ratios
            </span>
          </li>
          <li className="flex items-start gap-3">
            <span className="text-amber-400">•</span>
            <span>
              It foreshadowed the development of <strong>real numbers</strong> and{' '}
              <strong>continued fractions</strong> in later centuries
            </span>
          </li>
        </ul>
      </div>

      {/* Key Takeaways */}
      <h3 className="text-xl font-semibold mt-10 mb-4">Key Takeaways</h3>

      <div className="bg-dark-800 rounded-lg p-6">
        <ul className="space-y-3">
          <li className="flex items-start gap-3">
            <span className="text-amber-400 font-bold">1.</span>
            <span>
              Two lengths are <strong>commensurable</strong> if their ratio is a
              fraction of whole numbers. The Pythagoreans believed all lengths were
              commensurable.
            </span>
          </li>
          <li className="flex items-start gap-3">
            <span className="text-amber-400 font-bold">2.</span>
            <span>
              The discovery that <InlineMath>{`\\sqrt{2}`}</InlineMath> is{' '}
              <strong>irrational</strong> (incommensurable with 1) created a crisis
              in Greek mathematics.
            </span>
          </li>
          <li className="flex items-start gap-3">
            <span className="text-amber-400 font-bold">3.</span>
            <span>
              The proof uses <strong>contradiction</strong>: assuming{' '}
              <InlineMath>{`\\sqrt{2} = p/q`}</InlineMath> in lowest terms leads to
              both <InlineMath>p</InlineMath> and <InlineMath>q</InlineMath> being even.
            </span>
          </li>
          <li className="flex items-start gap-3">
            <span className="text-amber-400 font-bold">4.</span>
            <span>
              The Greeks turned to <strong>geometric algebra</strong>, expressing
              algebraic identities through areas and lengths.
            </span>
          </li>
          <li className="flex items-start gap-3">
            <span className="text-amber-400 font-bold">5.</span>
            <span>
              The Pythagoreans developed a <strong>recursive method</strong> to
              approximate <InlineMath>{`\\sqrt{2}`}</InlineMath> using solutions to{' '}
              <InlineMath>{`x^2 - 2y^2 = \\pm 1`}</InlineMath>.
            </span>
          </li>
        </ul>
      </div>

      {/* Section Quiz */}
      <SectionQuiz sectionId={9} questions={section09Questions} />
    </LessonLayout>
  );
}
