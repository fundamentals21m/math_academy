import { LessonLayout } from '../../components/layout/LessonLayout';
import { Callout } from '../../components/common/Callout';
import { Card, CardGrid, CardHeader } from '../../components/common/Card';
import { InlineMath, MathBlock } from '../../components/common/MathBlock';
import { SectionQuiz } from '../../components/quiz';
import { section04Questions } from '../../data/quizzes';

export default function Section04() {
  return (
    <LessonLayout sectionId={4}>
      <h2 className="text-2xl font-semibold mb-4">More about Mesopotamian Mathematics</h2>

      <p className="text-dark-200 mb-6 text-lg leading-relaxed">
        Beyond their remarkable number system, the Babylonians developed sophisticated
        methods for solving equations that would not be surpassed for over a thousand
        years. Clay tablets reveal their mastery of algebra and their deep understanding
        of number relationships.
      </p>

      {/* Solving Equations */}
      <h3 className="text-xl font-semibold mt-10 mb-4">Babylonian Algebra</h3>

      <p className="text-dark-200 mb-6">
        A clay tablet called <strong>AO8862</strong>, dating from about the same time as
        the Rhind Papyrus (c. 1650 BC), contains problems like this one:
      </p>

      <div className="bg-dark-800 rounded-lg p-6 mb-6 border-l-4 border-amber-400">
        <h4 className="text-lg font-semibold mb-3 text-amber-400">Problem from AO8862</h4>
        <p className="text-dark-300 italic mb-4">
          "Length, width. I have multiplied the length and the width, thus obtaining
          the area. Then I added to the area the excess of the length over the width:
          183 was the result. Moreover, I have added the length and the width: 27.
          Required: length, width, and area."
        </p>
        <p className="text-dark-200">
          In modern notation: Find <InlineMath>x</InlineMath> and <InlineMath>y</InlineMath>{' '}
          such that:
        </p>
        <MathBlock>{`xy + (x - y) = 183 \\quad \\text{and} \\quad x + y = 27`}</MathBlock>
        <p className="text-dark-400 mt-3 text-sm">
          Answer: <InlineMath>x = 15</InlineMath>, <InlineMath>y = 12</InlineMath>,
          area = 180
        </p>
      </div>

      <p className="text-dark-200 mb-6">
        The Babylonians could solve many kinds of equations, including:
      </p>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
        <div className="bg-dark-800 rounded-lg p-4">
          <h4 className="text-amber-400 font-semibold mb-2">Single Equations</h4>
          <ul className="space-y-1 text-dark-300 text-sm font-mono">
            <li><InlineMath>ax = b</InlineMath></li>
            <li><InlineMath>{`x^2 \\pm ax = b`}</InlineMath></li>
            <li><InlineMath>{`x^3 = a`}</InlineMath></li>
            <li><InlineMath>{`x^2(x + 1) = a`}</InlineMath></li>
          </ul>
        </div>
        <div className="bg-dark-800 rounded-lg p-4">
          <h4 className="text-amber-400 font-semibold mb-2">Simultaneous Equations</h4>
          <ul className="space-y-1 text-dark-300 text-sm font-mono">
            <li><InlineMath>{`x \\pm y = a, \\quad xy = b`}</InlineMath></li>
            <li><InlineMath>{`x \\pm y = a, \\quad x^2 + y^2 = b`}</InlineMath></li>
          </ul>
        </div>
      </div>

      {/* Algebraic Identities */}
      <h3 className="text-xl font-semibold mt-10 mb-4">Algebraic Identities</h3>

      <p className="text-dark-200 mb-6">
        The Babylonians knew fundamental algebraic identities that we still use today:
      </p>

      <CardGrid>
        <Card>
          <CardHeader title="Difference of Squares" />
          <MathBlock>{`a^2 - b^2 = (a + b)(a - b)`}</MathBlock>
        </Card>
        <Card>
          <CardHeader title="Square of a Sum" />
          <MathBlock>{`(a + b)^2 = a^2 + 2ab + b^2`}</MathBlock>
        </Card>
      </CardGrid>

      {/* Sum of Squares Formula */}
      <h3 className="text-xl font-semibold mt-10 mb-4">The Sum of Squares Formula</h3>

      <p className="text-dark-200 mb-6">
        Like the Egyptians, the Babylonians built pyramids, called <strong>ziggurats</strong>.
        If each story of a ziggurat consists of a square platform measuring{' '}
        <InlineMath>{`1 \\times m \\times m`}</InlineMath>, then the volume of a ziggurat
        with a base of length <InlineMath>n</InlineMath> is:
      </p>

      <MathBlock>{`1^2 + 2^2 + 3^2 + \\cdots + n^2`}</MathBlock>

      <p className="text-dark-200 my-6">
        The Babylonians knew the formula for this sum:
      </p>

      <MathBlock>{`1^2 + 2^2 + 3^2 + \\cdots + n^2 = \\frac{n(n+1)(2n+1)}{6}`}</MathBlock>

      <Callout type="info">
        <p>
          This result was also known to Pythagoras, but perhaps first rigorously proved
          by Archimedes. According to the biblical story of the <strong>Tower of Babel</strong>,
          there was once an attempt to build a ziggurat "with its top reaching heaven."
        </p>
      </Callout>

      {/* Pythagorean Triangles */}
      <h3 className="text-xl font-semibold mt-10 mb-4">Pythagorean Triangles</h3>

      <p className="text-dark-200 mb-6">
        A remarkable fact about ancient Babylonian mathematics is that it included not
        just the so-called theorem of Pythagoras, but a complete <strong>theory of
        Pythagorean triangles</strong>. A Pythagorean triangle is a triple{' '}
        <InlineMath>(a, b, c)</InlineMath> of positive integers such that{' '}
        <InlineMath>{`a^2 + b^2 = c^2`}</InlineMath>.
      </p>

      <div className="bg-dark-800 rounded-lg p-6 mb-6 border-l-4 border-cyan-400">
        <h4 className="text-lg font-semibold mb-3 text-cyan-400">
          The Babylonian Formula for Pythagorean Triples
        </h4>
        <p className="text-dark-200 mb-4">
          Suppose <InlineMath>u</InlineMath> and <InlineMath>v</InlineMath> are relatively
          prime positive integers (gcd = 1), not both odd, with{' '}
          <InlineMath>{`u > v`}</InlineMath>. Then:
        </p>
        <MathBlock>{`a = 2uv, \\quad b = u^2 - v^2, \\quad c = u^2 + v^2`}</MathBlock>
        <p className="text-dark-200 mt-4">
          gives <InlineMath>{`\\gcd(a, b, c) = 1`}</InlineMath> and{' '}
          <InlineMath>{`a^2 + b^2 = c^2`}</InlineMath>.
        </p>
      </div>

      <h4 className="text-lg font-semibold mb-4">Plimpton 322</h4>

      <p className="text-dark-200 mb-6">
        From a clay tablet called <strong>Plimpton 322</strong> (dating from 1900–1600 BC),
        we can deduce that the Babylonians used this formula. The tablet contains 15
        Pythagorean triangles, including:
      </p>

      <div className="bg-dark-800 rounded-lg p-6 mb-6">
        <p className="text-dark-200 mb-2">
          <strong>Example:</strong> The triangle <InlineMath>(13500, 12709, 18541)</InlineMath>
        </p>
        <p className="text-dark-300 text-sm">
          Generated by <InlineMath>u = 125</InlineMath> and <InlineMath>v = 54</InlineMath>:
        </p>
        <ul className="text-dark-400 text-sm mt-2 space-y-1">
          <li><InlineMath>{`a = 2 \\times 125 \\times 54 = 13500`}</InlineMath></li>
          <li><InlineMath>{`b = 125^2 - 54^2 = 15625 - 2916 = 12709`}</InlineMath></li>
          <li><InlineMath>{`c = 125^2 + 54^2 = 15625 + 2916 = 18541`}</InlineMath></li>
        </ul>
      </div>

      <Callout type="warning">
        <p>
          The converse of this theorem — that <em>all</em> primitive Pythagorean triples
          arise this way — appears first in <strong>Diophantus</strong> (250 AD). The
          first rigorous proof was given only in 1738 by C. A. Koerbero.
        </p>
      </Callout>

      {/* Value of Pi */}
      <h3 className="text-xl font-semibold mt-10 mb-4">The Value of π</h3>

      <p className="text-dark-200 mb-6">
        According to a tablet found in 1936 in <strong>Susa</strong> (an ancient city
        in what is now Iran), the Babylonians sometimes used the value{' '}
        <InlineMath>{`3\\frac{1}{8} = 3.125`}</InlineMath> for <InlineMath>\\pi</InlineMath>.
        At other times, they seem to have been satisfied with{' '}
        <InlineMath>{`\\pi \\approx 3`}</InlineMath>.
      </p>

      <Callout type="info">
        <p>
          It has been suggested that this Babylonian approximation is behind{' '}
          <strong>1 Kings 7:23–24</strong>, which describes a basin with diameter 10
          cubits and circumference 30 cubits (implying <InlineMath>\\pi = 3</InlineMath>).
          Some scholars suggest the basin was hexagonal, not circular!
        </p>
      </Callout>

      <div className="bg-dark-800 rounded-lg p-6 mb-6">
        <h4 className="text-lg font-semibold mb-3 text-amber-400">
          Comparison of Ancient π Approximations
        </h4>
        <div className="space-y-2 text-dark-200">
          <p><strong>Babylonian:</strong> <InlineMath>{`\\pi \\approx 3`}</InlineMath> or{' '}
            <InlineMath>{`3\\frac{1}{8} = 3.125`}</InlineMath></p>
          <p><strong>Egyptian:</strong> <InlineMath>{`\\pi \\approx (16/9)^2 \\approx 3.16`}</InlineMath></p>
          <p><strong>True value:</strong> <InlineMath>{`\\pi = 3.14159...`}</InlineMath></p>
        </div>
      </div>

      {/* Key Takeaways */}
      <h3 className="text-xl font-semibold mt-10 mb-4">Key Takeaways</h3>

      <div className="bg-dark-800 rounded-lg p-6">
        <ul className="space-y-3">
          <li className="flex items-start gap-3">
            <span className="text-amber-400 font-bold">1.</span>
            <span>
              The Babylonians could solve <strong>quadratic equations</strong> and
              systems of simultaneous equations using sophisticated algebraic methods.
            </span>
          </li>
          <li className="flex items-start gap-3">
            <span className="text-amber-400 font-bold">2.</span>
            <span>
              They knew fundamental <strong>algebraic identities</strong> like the
              difference of squares and perfect square formulas.
            </span>
          </li>
          <li className="flex items-start gap-3">
            <span className="text-amber-400 font-bold">3.</span>
            <span>
              The <strong>sum of squares formula</strong>{' '}
              <InlineMath>{`1^2 + 2^2 + \\cdots + n^2 = n(n+1)(2n+1)/6`}</InlineMath>{' '}
              was known to the Babylonians, useful for calculating ziggurat volumes.
            </span>
          </li>
          <li className="flex items-start gap-3">
            <span className="text-amber-400 font-bold">4.</span>
            <span>
              <strong>Plimpton 322</strong> (c. 1800 BC) shows the Babylonians had a
              complete theory of Pythagorean triples, over 1000 years before Pythagoras.
            </span>
          </li>
          <li className="flex items-start gap-3">
            <span className="text-amber-400 font-bold">5.</span>
            <span>
              They used approximations for <InlineMath>\\pi</InlineMath> ranging from
              3 to 3.125, compared to the Egyptian approximation of about 3.16.
            </span>
          </li>
        </ul>
      </div>

      {/* Section Quiz */}
      <SectionQuiz sectionId={4} questions={section04Questions} />
    </LessonLayout>
  );
}
