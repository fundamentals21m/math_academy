import { LessonLayout } from '../../components/layout/LessonLayout';
import { Callout } from '../../components/common/Callout';
import { Card, CardGrid, CardHeader } from '../../components/common/Card';
import { InlineMath, MathBlock } from '../../components/common/MathBlock';
import { SectionQuiz } from '../../components/quiz';
import { section53Questions } from '../../data/quizzes';

export default function Section53() {
  return (
    <LessonLayout sectionId={53}>
      <h2 className="text-2xl font-semibold mb-4">
        The Quadratic Character of −1 and 2
      </h2>

      <Callout type="warning">
        <p>
          <strong>Advanced Section:</strong> This section develops explicit
          formulas for when −1 and 2 are quadratic residues, preparing for the
          full quadratic reciprocity law.
        </p>
      </Callout>

      <p className="text-dark-200 mb-6 text-lg leading-relaxed mt-6">
        Before tackling the general reciprocity law, we determine when the
        specific numbers <InlineMath>-1</InlineMath> and <InlineMath>2</InlineMath>{' '}
        are squares modulo an odd prime <InlineMath>p</InlineMath>.
      </p>

      {/* -1 as a Quadratic Residue */}
      <h3 className="text-xl font-semibold mt-10 mb-4">
        When is −1 a Square mod p?
      </h3>

      <div className="bg-purple-900/30 border border-purple-500/30 rounded-lg p-6 mb-6">
        <h4 className="text-lg font-semibold text-purple-400 mb-3">Theorem</h4>
        <p className="text-dark-200">
          For an odd prime <InlineMath>p</InlineMath>:
        </p>
        <MathBlock>
          {`\\left(\\frac{-1}{p}\\right) = (-1)^{(p-1)/2} = \\begin{cases}
1 & \\text{if } p \\equiv 1 \\pmod 4 \\\\
-1 & \\text{if } p \\equiv 3 \\pmod 4
\\end{cases}`}
        </MathBlock>
      </div>

      <p className="text-dark-200 mb-6">
        <strong>Proof:</strong> By Euler's criterion,{' '}
        <InlineMath>(-1/p) \equiv (-1)^{'{(p-1)/2}'} \pmod p</InlineMath>.
        Since the result is <InlineMath>\pm 1</InlineMath> and{' '}
        <InlineMath>p {'>'} 2</InlineMath>, this congruence is an equality.
      </p>

      <p className="text-dark-200 mb-6">
        Now <InlineMath>(-1)^{'{(p-1)/2}'} = 1</InlineMath> iff{' '}
        <InlineMath>(p-1)/2</InlineMath> is even, i.e.,{' '}
        <InlineMath>4 \mid (p-1)</InlineMath>, i.e.,{' '}
        <InlineMath>p \equiv 1 \pmod 4</InlineMath>.
      </p>

      {/* Examples for -1 */}
      <h3 className="text-xl font-semibold mt-10 mb-4">Examples</h3>

      <CardGrid>
        <Card>
          <CardHeader title="p = 5 ≡ 1 (mod 4)" />
          <p className="text-xs text-dark-300">
            <InlineMath>2^2 = 4 \equiv -1 \pmod 5</InlineMath>
            <br />
            Yes, −1 is a square
          </p>
        </Card>
        <Card>
          <CardHeader title="p = 7 ≡ 3 (mod 4)" />
          <p className="text-xs text-dark-300">
            No <InlineMath>x</InlineMath> with{' '}
            <InlineMath>x^2 \equiv -1 \pmod 7</InlineMath>
            <br />
            −1 is not a square
          </p>
        </Card>
        <Card>
          <CardHeader title="p = 13 ≡ 1 (mod 4)" />
          <p className="text-xs text-dark-300">
            <InlineMath>5^2 = 25 \equiv -1 \pmod{13}</InlineMath>
            <br />
            Yes, −1 is a square
          </p>
        </Card>
        <Card>
          <CardHeader title="p = 11 ≡ 3 (mod 4)" />
          <p className="text-xs text-dark-300">
            No solution to{' '}
            <InlineMath>x^2 \equiv -1 \pmod{11}</InlineMath>
            <br />
            −1 is not a square
          </p>
        </Card>
      </CardGrid>

      {/* Connection to Gaussian integers */}
      <Callout type="info">
        <p className="mt-4">
          This result connects to <strong>Gaussian integers</strong>:{' '}
          <InlineMath>p</InlineMath> remains prime in{' '}
          <InlineMath>\mathbb{'{Z}'}[i]</InlineMath> iff{' '}
          <InlineMath>p \equiv 3 \pmod 4</InlineMath>. When{' '}
          <InlineMath>p \equiv 1 \pmod 4</InlineMath>, it splits as{' '}
          <InlineMath>p = (a + bi)(a - bi)</InlineMath>.
        </p>
      </Callout>

      {/* 2 as a Quadratic Residue */}
      <h3 className="text-xl font-semibold mt-10 mb-4">
        When is 2 a Square mod p?
      </h3>

      <div className="bg-green-900/30 border border-green-500/30 rounded-lg p-6 mb-6">
        <h4 className="text-lg font-semibold text-green-400 mb-3">Theorem</h4>
        <p className="text-dark-200">
          For an odd prime <InlineMath>p</InlineMath>:
        </p>
        <MathBlock>
          {`\\left(\\frac{2}{p}\\right) = (-1)^{(p^2-1)/8} = \\begin{cases}
1 & \\text{if } p \\equiv \\pm 1 \\pmod 8 \\\\
-1 & \\text{if } p \\equiv \\pm 3 \\pmod 8
\\end{cases}`}
        </MathBlock>
      </div>

      <p className="text-dark-200 mb-6">
        This is more subtle than the case of −1. The exponent{' '}
        <InlineMath>(p^2 - 1)/8</InlineMath> is always an integer for odd{' '}
        <InlineMath>p</InlineMath> (since{' '}
        <InlineMath>p^2 - 1 = (p-1)(p+1)</InlineMath> is divisible by 8).
      </p>

      {/* Examples for 2 */}
      <h3 className="text-xl font-semibold mt-10 mb-4">Examples</h3>

      <div className="bg-dark-800 rounded-lg p-6 mb-6">
        <ul className="space-y-3 text-dark-200">
          <li className="flex items-start gap-3">
            <span className="text-green-400 font-bold">✓</span>
            <span>
              <InlineMath>p = 7 \equiv -1 \pmod 8</InlineMath>:{' '}
              <InlineMath>3^2 = 9 \equiv 2</InlineMath>. Yes!
            </span>
          </li>
          <li className="flex items-start gap-3">
            <span className="text-green-400 font-bold">✓</span>
            <span>
              <InlineMath>p = 17 \equiv 1 \pmod 8</InlineMath>:{' '}
              <InlineMath>6^2 = 36 \equiv 2</InlineMath>. Yes!
            </span>
          </li>
          <li className="flex items-start gap-3">
            <span className="text-red-400 font-bold">✗</span>
            <span>
              <InlineMath>p = 3 \equiv 3 \pmod 8</InlineMath>: No square root of 2
            </span>
          </li>
          <li className="flex items-start gap-3">
            <span className="text-red-400 font-bold">✗</span>
            <span>
              <InlineMath>p = 5 \equiv -3 \pmod 8</InlineMath>: No square root of 2
            </span>
          </li>
        </ul>
      </div>

      {/* Proof Idea */}
      <h3 className="text-xl font-semibold mt-10 mb-4">Proof Idea for (2/p)</h3>

      <p className="text-dark-200 mb-6">
        The proof uses <strong>Gauss's lemma</strong>: Consider the set{' '}
        <InlineMath>S = \{'{'}2, 4, 6, \ldots, p-1\{'}'}</InlineMath> (the positive
        even numbers less than <InlineMath>p</InlineMath>).
      </p>

      <p className="text-dark-200 mb-6">
        Count how many of these, when reduced mod <InlineMath>p</InlineMath> to
        the range <InlineMath>(-p/2, p/2)</InlineMath>, are negative. Call this
        count <InlineMath>\nu</InlineMath>. Then:
      </p>

      <MathBlock>{`\\left(\\frac{2}{p}\\right) = (-1)^\\nu`}</MathBlock>

      <p className="text-dark-200 my-6">
        A careful count shows <InlineMath>\nu = \lfloor(p^2 - 1)/8\rfloor \bmod 2</InlineMath>,
        yielding the formula.
      </p>

      {/* Summary Table */}
      <h3 className="text-xl font-semibold mt-10 mb-4">Summary</h3>

      <div className="bg-dark-800 rounded-lg p-6 mb-6 overflow-x-auto">
        <table className="w-full text-sm">
          <thead>
            <tr className="text-dark-400 border-b border-dark-600">
              <th className="text-left p-3">p mod 8</th>
              <th className="text-center p-3">(−1/p)</th>
              <th className="text-center p-3">(2/p)</th>
              <th className="text-left p-3">Example</th>
            </tr>
          </thead>
          <tbody className="text-dark-200">
            <tr className="border-b border-dark-700">
              <td className="p-3">1</td>
              <td className="text-center p-3 text-green-400">+1</td>
              <td className="text-center p-3 text-green-400">+1</td>
              <td className="p-3">p = 17</td>
            </tr>
            <tr className="border-b border-dark-700">
              <td className="p-3">3</td>
              <td className="text-center p-3 text-red-400">−1</td>
              <td className="text-center p-3 text-red-400">−1</td>
              <td className="p-3">p = 3, 11</td>
            </tr>
            <tr className="border-b border-dark-700">
              <td className="p-3">5</td>
              <td className="text-center p-3 text-green-400">+1</td>
              <td className="text-center p-3 text-red-400">−1</td>
              <td className="p-3">p = 5, 13</td>
            </tr>
            <tr>
              <td className="p-3">7</td>
              <td className="text-center p-3 text-red-400">−1</td>
              <td className="text-center p-3 text-green-400">+1</td>
              <td className="p-3">p = 7</td>
            </tr>
          </tbody>
        </table>
      </div>

      {/* Summary Box */}
      <div className="bg-dark-800 rounded-lg p-6 mt-8">
        <h4 className="text-lg font-semibold mb-4">Key Points</h4>
        <ul className="space-y-2 text-dark-200">
          <li className="flex items-start gap-3">
            <span className="text-amber-400 font-bold">•</span>
            <span>
              <InlineMath>(-1/p) = 1</InlineMath> iff{' '}
              <InlineMath>p \equiv 1 \pmod 4</InlineMath>
            </span>
          </li>
          <li className="flex items-start gap-3">
            <span className="text-amber-400 font-bold">•</span>
            <span>
              <InlineMath>(2/p) = 1</InlineMath> iff{' '}
              <InlineMath>p \equiv \pm 1 \pmod 8</InlineMath>
            </span>
          </li>
          <li className="flex items-start gap-3">
            <span className="text-amber-400 font-bold">•</span>
            <span>
              These are special cases of quadratic reciprocity
            </span>
          </li>
          <li className="flex items-start gap-3">
            <span className="text-amber-400 font-bold">•</span>
            <span>
              The formulas connect to splitting of primes in quadratic fields
            </span>
          </li>
        </ul>
      </div>

      {/* Section Quiz */}
      <SectionQuiz sectionId={53} questions={section53Questions} />
    </LessonLayout>
  );
}
