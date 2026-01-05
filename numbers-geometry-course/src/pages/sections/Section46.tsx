import { LessonLayout } from '../../components/layout/LessonLayout';
import { Callout } from '../../components/common/Callout';
import { Card, CardGrid, CardHeader } from '../../components/common/Card';
import { InlineMath, MathBlock } from '../../components/common/MathBlock';
import { SectionQuiz } from '../../components/quiz';
import { section46Questions } from '../../data/quizzes';

export default function Section46() {
  return (
    <LessonLayout sectionId={46}>
      <h2 className="text-2xl font-semibold mb-4">Three Examples</h2>

      <p className="text-dark-200 mb-6 text-lg leading-relaxed">
        Before diving into the formal theory of <strong>finite arithmetic</strong>,
        let's explore three familiar examples that motivate the subject. These
        examples show that arithmetic with remainders is both natural and useful.
      </p>

      {/* Example 1: Clock Arithmetic */}
      <h3 className="text-xl font-semibold mt-10 mb-4">Clock Arithmetic</h3>

      <p className="text-dark-200 mb-6">
        The most intuitive example of finite arithmetic is the <strong>clock</strong>.
        When we add hours, we work modulo 12 (or 24). For example:
      </p>

      <div className="bg-dark-800 rounded-lg p-6 mb-6">
        <p className="text-dark-200 mb-4">
          If it's 10 o'clock now, what time will it be in 5 hours?
        </p>
        <MathBlock>{`10 + 5 = 15 \\equiv 3 \\pmod{12}`}</MathBlock>
        <p className="text-dark-300 text-sm mt-3">
          The answer is 3 o'clock—we "wrap around" after 12.
        </p>
      </div>

      <p className="text-dark-200 mb-6">
        Similarly, days of the week cycle through 7 values. If today is Friday
        (day 5), what day is it in 10 days?
      </p>

      <MathBlock>{`5 + 10 = 15 \\equiv 1 \\pmod 7`}</MathBlock>

      <p className="text-dark-200 my-6">
        So it's Monday (day 1). This is <strong>arithmetic mod 7</strong>—we only
        care about the remainder when dividing by 7.
      </p>

      <Callout type="info">
        <p>
          Calendar calculations are a rich source of modular arithmetic. The
          determination of Easter, for example, involves arithmetic mod 7 (for
          days), mod 19 (for the Metonic cycle), and mod 30 (for phases of the moon).
        </p>
      </Callout>

      {/* Example 2: Even and Odd */}
      <h3 className="text-xl font-semibold mt-10 mb-4">Even and Odd Numbers</h3>

      <p className="text-dark-200 mb-6">
        The simplest example of modular arithmetic is <strong>parity</strong>—the
        distinction between even and odd numbers. This is arithmetic mod 2:
      </p>

      <CardGrid>
        <Card>
          <CardHeader title="Even = 0" />
          <p className="text-xs text-dark-300">
            An even number has remainder 0 when divided by 2.
          </p>
        </Card>
        <Card>
          <CardHeader title="Odd = 1" />
          <p className="text-xs text-dark-300">
            An odd number has remainder 1 when divided by 2.
          </p>
        </Card>
      </CardGrid>

      <p className="text-dark-200 my-6">
        The familiar rules for parity follow from the arithmetic of 0 and 1 mod 2:
      </p>

      <div className="bg-dark-800 rounded-lg p-6 mb-6">
        <ul className="space-y-3 text-dark-200">
          <li className="flex items-start gap-3">
            <span className="text-blue-400 font-bold">•</span>
            <span>
              <strong>even + even = even:</strong>{' '}
              <InlineMath>0 + 0 = 0</InlineMath>
            </span>
          </li>
          <li className="flex items-start gap-3">
            <span className="text-blue-400 font-bold">•</span>
            <span>
              <strong>even + odd = odd:</strong>{' '}
              <InlineMath>0 + 1 = 1</InlineMath>
            </span>
          </li>
          <li className="flex items-start gap-3">
            <span className="text-blue-400 font-bold">•</span>
            <span>
              <strong>odd + odd = even:</strong>{' '}
              <InlineMath>1 + 1 = 0</InlineMath> (mod 2)
            </span>
          </li>
          <li className="flex items-start gap-3">
            <span className="text-green-400 font-bold">•</span>
            <span>
              <strong>even × anything = even:</strong>{' '}
              <InlineMath>0 \times x = 0</InlineMath>
            </span>
          </li>
          <li className="flex items-start gap-3">
            <span className="text-green-400 font-bold">•</span>
            <span>
              <strong>odd × odd = odd:</strong>{' '}
              <InlineMath>1 \times 1 = 1</InlineMath>
            </span>
          </li>
        </ul>
      </div>

      {/* Example 3: Sums of Squares */}
      <h3 className="text-xl font-semibold mt-10 mb-4">
        Sums of Squares mod 4
      </h3>

      <p className="text-dark-200 mb-6">
        A deeper example involves <strong>sums of squares</strong>. Consider the
        question: which integers can be written as the sum of two squares?
      </p>

      <p className="text-dark-200 mb-6">
        Working mod 4 gives a powerful obstruction. Every perfect square has a
        specific form mod 4:
      </p>

      <div className="bg-dark-800 rounded-lg p-6 mb-6">
        <ul className="space-y-2 text-dark-200">
          <li>
            <InlineMath>0^2 = 0 \equiv 0</InlineMath> (mod 4)
          </li>
          <li>
            <InlineMath>1^2 = 1 \equiv 1</InlineMath> (mod 4)
          </li>
          <li>
            <InlineMath>2^2 = 4 \equiv 0</InlineMath> (mod 4)
          </li>
          <li>
            <InlineMath>3^2 = 9 \equiv 1</InlineMath> (mod 4)
          </li>
        </ul>
        <p className="text-dark-300 text-sm mt-4">
          Every square is congruent to 0 or 1 mod 4.
        </p>
      </div>

      <p className="text-dark-200 mb-6">
        Therefore, a sum of two squares can only be congruent to:
      </p>

      <MathBlock>{`0 + 0 = 0, \\quad 0 + 1 = 1, \\quad 1 + 1 = 2 \\pmod 4`}</MathBlock>

      <div className="bg-purple-900/30 border border-purple-500/30 rounded-lg p-6 my-6">
        <h4 className="text-lg font-semibold text-purple-400 mb-3">
          Key Observation
        </h4>
        <p className="text-dark-200">
          A sum of two squares is <em>never</em> congruent to 3 mod 4. This means
          numbers like 3, 7, 11, 15, 19, ... cannot be expressed as sums of two
          squares.
        </p>
      </div>

      <p className="text-dark-200 mb-6">
        More generally, a number of the form <InlineMath>4k + 3</InlineMath>{' '}
        cannot be a sum of two squares. This is our first glimpse of how modular
        arithmetic can prove things about ordinary integers!
      </p>

      {/* The Pattern */}
      <h3 className="text-xl font-semibold mt-10 mb-4">The Common Pattern</h3>

      <p className="text-dark-200 mb-6">
        All three examples share a common structure:
      </p>

      <div className="bg-dark-800 rounded-lg p-6 mb-6">
        <ol className="space-y-3">
          <li className="flex items-start gap-3">
            <span className="text-amber-400 font-bold">1.</span>
            <span>
              We fix a <strong>modulus</strong>{' '}
              <InlineMath>n</InlineMath> (12 for hours, 7 for days, 2 for parity, 4 for sums of squares)
            </span>
          </li>
          <li className="flex items-start gap-3">
            <span className="text-amber-400 font-bold">2.</span>
            <span>
              Two integers are considered <strong>equivalent</strong> if they
              differ by a multiple of <InlineMath>n</InlineMath>
            </span>
          </li>
          <li className="flex items-start gap-3">
            <span className="text-amber-400 font-bold">3.</span>
            <span>
              <strong>Addition and multiplication</strong> are well-defined on
              equivalence classes
            </span>
          </li>
        </ol>
      </div>

      <p className="text-dark-200 mb-6">
        In the next section, we'll make this precise using Gauss's powerful
        notation and develop the general theory of <strong>arithmetic mod n</strong>.
      </p>

      {/* Historical Note */}
      <Callout type="info">
        <p>
          The systematic study of modular arithmetic was initiated by{' '}
          <strong>Carl Friedrich Gauss</strong> in his masterwork{' '}
          <em>Disquisitiones Arithmeticae</em> (1801), written when he was just
          24 years old. This book transformed number theory into a rigorous
          mathematical discipline.
        </p>
      </Callout>

      {/* Section Quiz */}
      <SectionQuiz sectionId={46} questions={section46Questions} />
    </LessonLayout>
  );
}
