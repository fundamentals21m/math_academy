import { LessonLayout } from '../../components/layout/LessonLayout';
import { Callout } from '../../components/common/Callout';
import { Card, CardGrid, CardHeader } from '../../components/common/Card';
import { InlineMath, MathBlock } from '../../components/common/MathBlock';
import { SectionQuiz } from '../../components/quiz';
import { section61Questions } from '../../data/quizzes';

export default function Section61() {
  return (
    <LessonLayout sectionId={61}>
      <h2 className="text-2xl font-semibold mb-4">
        Fermat's Two Squares Theorem
      </h2>

      <p className="text-dark-200 mb-6 text-lg leading-relaxed">
        Which integers can be written as a sum of two squares? This ancient
        question has a beautiful answer discovered by Fermat, with a proof that
        uses Gaussian integers in an essential way.
      </p>

      {/* The Question */}
      <h3 className="text-xl font-semibold mt-10 mb-4">The Question</h3>

      <p className="text-dark-200 mb-6">
        Consider the first few sums of two squares:
      </p>

      <div className="bg-dark-800 rounded-lg p-6 mb-6">
        <ul className="space-y-2 text-dark-200">
          <li><InlineMath>1 = 0^2 + 1^2</InlineMath></li>
          <li><InlineMath>2 = 1^2 + 1^2</InlineMath></li>
          <li><InlineMath>4 = 0^2 + 2^2</InlineMath></li>
          <li><InlineMath>5 = 1^2 + 2^2</InlineMath></li>
          <li><InlineMath>8 = 2^2 + 2^2</InlineMath></li>
          <li><InlineMath>9 = 0^2 + 3^2</InlineMath></li>
          <li><InlineMath>10 = 1^2 + 3^2</InlineMath></li>
          <li><InlineMath>13 = 2^2 + 3^2</InlineMath></li>
        </ul>
      </div>

      <p className="text-dark-200 mb-6">
        Notice that 3, 6, 7, 11, 12 are <em>not</em> on this list. Is there a
        pattern?
      </p>

      {/* Fermat's Theorem */}
      <h3 className="text-xl font-semibold mt-10 mb-4">Fermat's Theorem</h3>

      <div className="bg-purple-900/30 border border-purple-500/30 rounded-lg p-6 mb-6">
        <h4 className="text-lg font-semibold text-purple-400 mb-3">
          Fermat's Two Squares Theorem
        </h4>
        <p className="text-dark-200">
          An odd prime <InlineMath>p</InlineMath> is a sum of two squares if and
          only if <InlineMath>p \equiv 1 \pmod 4</InlineMath>.
        </p>
        <MathBlock>
          {`p = a^2 + b^2 \\iff p \\equiv 1 \\pmod 4`}
        </MathBlock>
      </div>

      <CardGrid>
        <Card>
          <CardHeader title="p ≡ 1 (mod 4)" />
          <p className="text-xs text-dark-300">Sum of two squares</p>
          <p className="text-xs text-dark-400 mt-2">5, 13, 17, 29, 37, ...</p>
        </Card>
        <Card>
          <CardHeader title="p ≡ 3 (mod 4)" />
          <p className="text-xs text-dark-300">NOT a sum of two squares</p>
          <p className="text-xs text-dark-400 mt-2">3, 7, 11, 19, 23, ...</p>
        </Card>
      </CardGrid>

      {/* Connection to Gaussian Integers */}
      <h3 className="text-xl font-semibold mt-10 mb-4">
        The Gaussian Connection
      </h3>

      <p className="text-dark-200 mb-6">
        Here's the key insight: <InlineMath>n = a^2 + b^2</InlineMath> if and
        only if <InlineMath>n</InlineMath> is the norm of a Gaussian integer!
      </p>

      <MathBlock>
        {`n = a^2 + b^2 = N(a + bi)`}
      </MathBlock>

      <p className="text-dark-200 my-6">
        So asking "which integers are sums of two squares?" is the same as
        asking "which integers are norms of Gaussian integers?"
      </p>

      <div className="bg-blue-900/30 border border-blue-500/30 rounded-lg p-6 mb-6">
        <h4 className="text-lg font-semibold text-blue-400 mb-3">
          Norm Interpretation
        </h4>
        <p className="text-dark-200">
          An integer <InlineMath>n</InlineMath> is a sum of two squares if and
          only if in the Gaussian prime factorization of <InlineMath>n</InlineMath>,
          every prime <InlineMath>p \equiv 3 \pmod 4</InlineMath> appears to an
          even power.
        </p>
      </div>

      {/* Proof Outline */}
      <h3 className="text-xl font-semibold mt-10 mb-4">Proof Idea</h3>

      <p className="text-dark-200 mb-6">
        <strong>Why p ≡ 1 (mod 4) ⟹ p is a sum of two squares:</strong>
      </p>

      <p className="text-dark-200 mb-6">
        If <InlineMath>p \equiv 1 \pmod 4</InlineMath>, then <InlineMath>-1</InlineMath>{' '}
        is a quadratic residue mod <InlineMath>p</InlineMath> (by properties of
        the Legendre symbol). So there exists <InlineMath>m</InlineMath> with:
      </p>

      <MathBlock>
        {`m^2 \\equiv -1 \\pmod p`}
      </MathBlock>

      <p className="text-dark-200 my-6">
        This means <InlineMath>p | (m^2 + 1) = (m + i)(m - i)</InlineMath> in{' '}
        <InlineMath>\mathbb{'{Z}'}[i]</InlineMath>.
      </p>

      <p className="text-dark-200 mb-6">
        If <InlineMath>p</InlineMath> were a Gaussian prime, then{' '}
        <InlineMath>p | (m + i)</InlineMath> or <InlineMath>p | (m - i)</InlineMath>.
        But neither is true! (Think about the imaginary parts.)
      </p>

      <p className="text-dark-200 mb-6">
        So <InlineMath>p</InlineMath> is <em>not</em> a Gaussian prime, meaning
        it factors: <InlineMath>p = \pi_1 \pi_2</InlineMath> with neither factor
        a unit.
      </p>

      <MathBlock>
        {`p = N(\\pi_1) = |\\pi_1|^2 = a^2 + b^2`}
      </MathBlock>

      {/* Why not for p ≡ 3 (mod 4) */}
      <h3 className="text-xl font-semibold mt-10 mb-4">
        Why Not for p ≡ 3 (mod 4)?
      </h3>

      <p className="text-dark-200 mb-6">
        <strong>Suppose</strong> <InlineMath>p = a^2 + b^2</InlineMath> for some
        odd prime <InlineMath>p \equiv 3 \pmod 4</InlineMath>. Looking mod 4:
      </p>

      <div className="bg-dark-800 rounded-lg p-6 mb-6">
        <p className="text-dark-200 mb-4">
          Squares mod 4 are only 0 or 1:
        </p>
        <ul className="space-y-2 text-dark-200">
          <li><InlineMath>0^2 \equiv 0 \pmod 4</InlineMath></li>
          <li><InlineMath>1^2 \equiv 1 \pmod 4</InlineMath></li>
          <li><InlineMath>2^2 \equiv 0 \pmod 4</InlineMath></li>
          <li><InlineMath>3^2 \equiv 1 \pmod 4</InlineMath></li>
        </ul>
      </div>

      <p className="text-dark-200 mb-6">
        So <InlineMath>a^2 + b^2 \equiv 0, 1, \text{'{or}'} 2 \pmod 4</InlineMath>,
        never 3. Contradiction!
      </p>

      {/* General Theorem */}
      <h3 className="text-xl font-semibold mt-10 mb-4">
        The Complete Characterization
      </h3>

      <div className="bg-green-900/30 border border-green-500/30 rounded-lg p-6 mb-6">
        <h4 className="text-lg font-semibold text-green-400 mb-3">
          Sum of Two Squares Theorem
        </h4>
        <p className="text-dark-200">
          A positive integer <InlineMath>n</InlineMath> is a sum of two squares
          if and only if in its prime factorization, every prime{' '}
          <InlineMath>p \equiv 3 \pmod 4</InlineMath> appears to an even power.
        </p>
      </div>

      <div className="bg-dark-800 rounded-lg p-6 mb-6">
        <p className="text-dark-200 mb-4">
          <strong>Examples:</strong>
        </p>
        <ul className="space-y-2 text-dark-200">
          <li>
            <InlineMath>45 = 9 \cdot 5 = 3^2 \cdot 5</InlineMath>: Yes!{' '}
            <InlineMath>45 = 3^2 + 6^2</InlineMath>
          </li>
          <li>
            <InlineMath>21 = 3 \cdot 7</InlineMath>: No (both are ≡ 3 mod 4, odd powers)
          </li>
          <li>
            <InlineMath>63 = 9 \cdot 7 = 3^2 \cdot 7</InlineMath>: No (7 appears to odd power)
          </li>
          <li>
            <InlineMath>441 = 9 \cdot 49 = 3^2 \cdot 7^2</InlineMath>: Yes!{' '}
            <InlineMath>441 = 0^2 + 21^2</InlineMath>
          </li>
        </ul>
      </div>

      <Callout type="info">
        <p>
          This theorem beautifully connects number theory (primes mod 4),
          algebra (Gaussian integers), and geometry (lattice points on circles).
          It was one of Fermat's proudest discoveries.
        </p>
      </Callout>

      {/* Summary */}
      <div className="bg-dark-800 rounded-lg p-6 mt-8">
        <h4 className="text-lg font-semibold mb-4">Key Points</h4>
        <ul className="space-y-2 text-dark-200">
          <li className="flex items-start gap-3">
            <span className="text-amber-400 font-bold">•</span>
            <span>
              <InlineMath>n = a^2 + b^2</InlineMath> ⟺ <InlineMath>n = N(a + bi)</InlineMath>
            </span>
          </li>
          <li className="flex items-start gap-3">
            <span className="text-amber-400 font-bold">•</span>
            <span>
              Odd prime <InlineMath>p</InlineMath>: sum of two squares ⟺{' '}
              <InlineMath>p \equiv 1 \pmod 4</InlineMath>
            </span>
          </li>
          <li className="flex items-start gap-3">
            <span className="text-amber-400 font-bold">•</span>
            <span>
              General <InlineMath>n</InlineMath>: sum of two squares ⟺ primes{' '}
              <InlineMath>p \equiv 3 \pmod 4</InlineMath> appear to even powers
            </span>
          </li>
          <li className="flex items-start gap-3">
            <span className="text-amber-400 font-bold">•</span>
            <span>
              The proof uses unique factorization in <InlineMath>\mathbb{'{Z}'}[i]</InlineMath>
            </span>
          </li>
        </ul>
      </div>

      {/* Section Quiz */}
      <SectionQuiz sectionId={61} questions={section61Questions} />
    </LessonLayout>
  );
}
