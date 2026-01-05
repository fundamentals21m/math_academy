import { LessonLayout } from '../../components/layout/LessonLayout';
import { Callout } from '../../components/common/Callout';
import { Card, CardGrid, CardHeader } from '../../components/common/Card';
import { InlineMath, MathBlock } from '../../components/common/MathBlock';
import { SectionQuiz } from '../../components/quiz';
import { section29Questions } from '../../data/quizzes';

export default function Section29() {
  return (
    <LessonLayout sectionId={29}>
      <h2 className="text-2xl font-semibold mb-4">Pythagorean Triples</h2>

      <p className="text-dark-200 mb-6 text-lg leading-relaxed">
        One of the most astonishing documents in the history of mathematics is a
        clay tablet in the Columbia University collection of Babylonian
        artifacts. Known as <strong>Plimpton 322</strong>, it dates from around{' '}
        <strong>1800 B.C.</strong> and contains columns of numbers that reveal a
        deep understanding of what we now call{' '}
        <strong>Pythagorean triples</strong>.
      </p>

      {/* Definition */}
      <div className="bg-dark-800 rounded-lg p-6 mb-6 border-l-4 border-blue-400">
        <h4 className="text-lg font-semibold mb-3 text-blue-400">
          Pythagorean Triple
        </h4>
        <p className="text-dark-200">
          A <strong>Pythagorean triple</strong> is a triple{' '}
          <InlineMath>(a, b, c)</InlineMath> of natural numbers satisfying:
        </p>
        <MathBlock>{`a^2 + b^2 = c^2`}</MathBlock>
        <p className="text-dark-300 text-sm mt-3">
          By the converse Pythagorean theorem, these are also the side lengths
          of right-angled triangles.
        </p>
      </div>

      {/* Plimpton 322 */}
      <h3 className="text-xl font-semibold mt-10 mb-4">The Plimpton 322 Tablet</h3>

      <p className="text-dark-200 mb-6">
        The tablet contains pairs <InlineMath>(b, c)</InlineMath> with a
        remarkable property: in every case,{' '}
        <InlineMath>c^2 - b^2</InlineMath> is a perfect square{' '}
        <InlineMath>a^2</InlineMath>. This leaves no doubt about what they are:
        a list of Pythagorean triples.
      </p>

      <div className="bg-dark-800 rounded-lg p-6 mb-6">
        <h4 className="font-semibold mb-3">Sample Entries from Plimpton 322</h4>
        <div className="grid grid-cols-3 gap-4 text-center text-sm">
          <div className="font-bold text-dark-300">b</div>
          <div className="font-bold text-dark-300">c</div>
          <div className="font-bold text-dark-300">a = √(c² - b²)</div>
          <div>119</div><div>169</div><div>120</div>
          <div>65</div><div>97</div><div>72</div>
          <div>319</div><div>481</div><div>360</div>
          <div>45</div><div>75</div><div>60</div>
        </div>
      </div>

      <Callout type="info">
        <p>
          Triples as large as <InlineMath>(13500, 12709, 18541)</InlineMath>{' '}
          appear on the tablet—far too large to have been found by trial and
          error. The Babylonians must have had a systematic method!
        </p>
      </Callout>

      {/* Babylonian Number System */}
      <h3 className="text-xl font-semibold mt-10 mb-4">
        The Babylonian Number System
      </h3>

      <p className="text-dark-200 mb-6">
        The meaning of the pairs <InlineMath>(b, c)</InlineMath> was discovered
        by Otto Neugebauer and Abraham Sachs in 1945. Computing the values{' '}
        <InlineMath>a = \sqrt{'{c^2 - b^2}'}</InlineMath> is interesting because
        many turn out to be remarkably "round" numbers.
      </p>

      <div className="bg-dark-800 rounded-lg p-6 mb-6">
        <p className="text-dark-300 text-sm">
          All but three of the <InlineMath>a</InlineMath> values are multiples
          of 60. The Babylonians wrote their numbers in <strong>base 60</strong>,
          so multiples of 60 were the "roundest" numbers in their notation. The
          divisors 12 and 30 of 60 were also considered "round."
        </p>
      </div>

      {/* Famous Examples */}
      <h3 className="text-xl font-semibold mt-10 mb-4">Famous Pythagorean Triples</h3>

      <CardGrid>
        <Card>
          <CardHeader title="(3, 4, 5)" />
          <p className="text-xs text-dark-300">
            The smallest Pythagorean triple. Check: 9 + 16 = 25.
          </p>
        </Card>
        <Card>
          <CardHeader title="(5, 12, 13)" />
          <p className="text-xs text-dark-300">
            Another classic. Check: 25 + 144 = 169.
          </p>
        </Card>
        <Card>
          <CardHeader title="(8, 15, 17)" />
          <p className="text-xs text-dark-300">
            Check: 64 + 225 = 289.
          </p>
        </Card>
        <Card>
          <CardHeader title="(7, 24, 25)" />
          <p className="text-xs text-dark-300">
            Check: 49 + 576 = 625.
          </p>
        </Card>
      </CardGrid>

      {/* Multiples */}
      <h3 className="text-xl font-semibold mt-10 mb-4">Multiples of Triples</h3>

      <p className="text-dark-200 mb-6">
        If <InlineMath>(a, b, c)</InlineMath> is a Pythagorean triple, then so
        is <InlineMath>(ka, kb, kc)</InlineMath> for any natural number{' '}
        <InlineMath>k</InlineMath>. For example, the multiples of{' '}
        <InlineMath>(3, 4, 5)</InlineMath> include:
      </p>

      <MathBlock>{`(6, 8, 10), \\quad (9, 12, 15), \\quad (12, 16, 20), \\quad \\ldots`}</MathBlock>

      <p className="text-dark-200 my-6">
        Geometrically, these all represent the <em>same</em> right triangle,
        just with different choices of the unit of length.
      </p>

      {/* Primitive Triples */}
      <h3 className="text-xl font-semibold mt-10 mb-4">Primitive Triples</h3>

      <div className="bg-dark-800 rounded-lg p-6 mb-6 border-l-4 border-green-400">
        <h4 className="text-lg font-semibold mb-3 text-green-400">
          Primitive Pythagorean Triple
        </h4>
        <p className="text-dark-200">
          A Pythagorean triple <InlineMath>(a, b, c)</InlineMath> is called{' '}
          <strong>primitive</strong> if <InlineMath>a</InlineMath>,{' '}
          <InlineMath>b</InlineMath>, and <InlineMath>c</InlineMath> have no
          common divisor greater than 1.
        </p>
      </div>

      <p className="text-dark-200 mb-6">
        Every Pythagorean triple is a multiple of a unique primitive triple.
        Thus, the main problem is to find all <em>primitive</em> triples—once we
        know <InlineMath>(3, 4, 5)</InlineMath>, it's trivial to list its
        multiples.
      </p>

      {/* Preview */}
      <h3 className="text-xl font-semibold mt-10 mb-4">What's Next?</h3>

      <p className="text-dark-200 mb-6">
        For enlightenment on the <em>method</em> of finding Pythagorean triples,
        we must turn to ancient Greece. In the following sections, we'll see how
        Euclid found <em>all</em> Pythagorean triples using a formula, and how
        Diophantus simplified the problem using rational numbers.
      </p>

      {/* Key Takeaways */}
      <h3 className="text-xl font-semibold mt-10 mb-4">Key Takeaways</h3>

      <div className="bg-dark-800 rounded-lg p-6">
        <ul className="space-y-3">
          <li className="flex items-start gap-3">
            <span className="text-amber-400 font-bold">1.</span>
            <span>
              A <strong>Pythagorean triple</strong> is{' '}
              <InlineMath>(a, b, c)</InlineMath> with{' '}
              <InlineMath>a^2 + b^2 = c^2</InlineMath>.
            </span>
          </li>
          <li className="flex items-start gap-3">
            <span className="text-amber-400 font-bold">2.</span>
            <span>
              The <strong>Plimpton 322</strong> tablet (1800 B.C.) shows the
              Babylonians knew many large triples.
            </span>
          </li>
          <li className="flex items-start gap-3">
            <span className="text-amber-400 font-bold">3.</span>
            <span>
              Multiples of a triple are also triples—they represent the{' '}
              <strong>same triangle</strong>.
            </span>
          </li>
          <li className="flex items-start gap-3">
            <span className="text-amber-400 font-bold">4.</span>
            <span>
              A <strong>primitive</strong> triple has{' '}
              <InlineMath>\gcd(a, b, c) = 1</InlineMath>.
            </span>
          </li>
        </ul>
      </div>

      {/* Section Quiz */}
      <SectionQuiz sectionId={29} questions={section29Questions} />
    </LessonLayout>
  );
}
