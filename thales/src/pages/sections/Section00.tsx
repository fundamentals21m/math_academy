import { LessonLayout } from '../../components/layout/LessonLayout';
import { Callout } from '../../components/common/Callout';
import { Card, CardGrid, CardHeader } from '../../components/common/Card';
import { InlineMath, MathBlock } from '../../components/common/MathBlock';
import { SectionQuiz } from '../../components/quiz';
import { section00Questions } from '../../data/quizzes';

export default function Section00() {
  return (
    <LessonLayout sectionId={0}>
      <h2 className="text-2xl font-semibold mb-4">Egyptian Mathematics</h2>

      <p className="text-dark-200 mb-6 text-lg leading-relaxed">
        The Greeks believed that mathematics originated in Egypt. As to the reason for this,
        opinion was divided. Aristotle thought that mathematics was developed by priests,
        "because the priestly class was allowed leisure." Herodotus believed that the annual
        flooding of the Nile necessitated surveying to redetermine field boundaries, and thus
        led to the invention of geometry.
      </p>

      <Callout type="info">
        <p>
          Democritus referred to Egyptian mathematicians as <strong>"rope stretchers"</strong> —
          a reference to their surveying techniques. The Egyptians themselves believed that
          mathematics had been given to them by the god <em>Thoth</em>.
        </p>
      </Callout>

      {/* Primary Sources */}
      <h3 className="text-xl font-semibold mt-10 mb-4">Our Primary Sources</h3>

      <p className="text-dark-200 mb-6">
        Our only original sources of information on the mathematics of ancient Egypt are
        two papyri: the <strong>Moscow Mathematical Papyrus</strong> and the{' '}
        <strong>Rhind Mathematical Papyrus</strong>.
      </p>

      <CardGrid>
        <Card>
          <CardHeader title="Moscow Papyrus" />
          <p className="text-sm text-dark-300 mb-2">
            Dates from <strong>1850 BC</strong>, about the time the Bible dates the life of
            the patriarch Abraham. Acquired by V. S. Golenishchev in 1893 and brought to Moscow.
          </p>
          <p className="text-sm text-dark-400">
            Problem 14 is by far the most interesting: the computation of a truncated pyramid.
          </p>
        </Card>
        <Card>
          <CardHeader title="Rhind Papyrus" />
          <p className="text-sm text-dark-300 mb-2">
            Written by the scribe <strong>Ahmose</strong> in <strong>1650 BC</strong>.
            Alexander Henry Rhind acquired it in Luxor, Egypt in 1858; the British Museum
            bought it from his estate in 1865.
          </p>
          <p className="text-sm text-dark-400">
            Opens by promising "a thorough study of all things, insight into all that exists,
            knowledge of all obscure secrets."
          </p>
        </Card>
      </CardGrid>

      {/* The Truncated Pyramid */}
      <h3 className="text-xl font-semibold mt-10 mb-4">The Truncated Pyramid Formula</h3>

      <p className="text-dark-200 mb-6">
        Problem 14 of the Moscow Papyrus demonstrates the Egyptians' sophisticated geometric
        knowledge. A <em>truncated pyramid</em> (or <em>frustum</em>) is a square pyramid with
        a similar pyramid cut off its top. If a side of the base has length{' '}
        <InlineMath>a</InlineMath> and a side of the top has length <InlineMath>b</InlineMath>,
        then the volume of the truncated pyramid of vertical height <InlineMath>h</InlineMath> is:
      </p>

      <MathBlock>{`V = \\frac{h}{3}(a^2 + ab + b^2)`}</MathBlock>

      <p className="text-dark-200 my-6">
        This is exactly the formula used by the Egyptians. Note that if{' '}
        <InlineMath>b = 0</InlineMath>, we get the familiar formula for the volume of a
        complete pyramid: <InlineMath>{`V = \\frac{1}{3}a^2 h`}</InlineMath>.
      </p>

      <Callout type="success">
        <p>
          The derivation of this formula requires calculus or a clever geometric argument.
          The fact that the Egyptians knew it suggests a sophisticated understanding of
          three-dimensional geometry nearly 4,000 years ago.
        </p>
      </Callout>

      {/* Egyptian Multiplication */}
      <h3 className="text-xl font-semibold mt-10 mb-4">Egyptian Multiplication</h3>

      <p className="text-dark-200 mb-6">
        The Rhind Papyrus reveals a remarkable method for multiplication. By{' '}
        <strong>doubling and adding</strong>, the Egyptians could multiply any two natural
        numbers — without having to memorize multiplication tables!
      </p>

      <p className="text-dark-200 mb-4">
        Problem 32 shows how to compute <InlineMath>{`12 \\times 12`}</InlineMath>:
      </p>

      <div className="bg-dark-800 rounded-lg p-6 mb-6 font-mono text-sm">
        <div className="grid grid-cols-3 gap-4">
          <span className="text-dark-300">12</span>
          <span className="text-dark-300">1</span>
          <span></span>
          <span className="text-dark-300">24</span>
          <span className="text-dark-300">2</span>
          <span></span>
          <span className="text-amber-400">48</span>
          <span className="text-amber-400">4</span>
          <span className="text-amber-400">/</span>
          <span className="text-amber-400">96</span>
          <span className="text-amber-400">8</span>
          <span className="text-amber-400">/</span>
        </div>
        <div className="mt-4 pt-4 border-t border-dark-700">
          <span className="text-emerald-400">144</span>
          <span className="text-dark-400 ml-4">= sum of checked entries (48 + 96)</span>
        </div>
      </div>

      <p className="text-dark-200 mb-6">
        The key insight: <InlineMath>12 = 4 + 8</InlineMath>, so{' '}
        <InlineMath>{`12 \\times 12 = 12 \\times 4 + 12 \\times 8 = 48 + 96 = 144`}</InlineMath>.
        This method works because any number can be expressed as a sum of powers of 2
        (binary representation!).
      </p>

      {/* Egyptian Division */}
      <h3 className="text-xl font-semibold mt-10 mb-4">Egyptian Division</h3>

      <p className="text-dark-200 mb-6">
        The method of repeated doubling can also be used for division. To divide 184 by 17:
      </p>

      <div className="bg-dark-800 rounded-lg p-6 mb-6 font-mono text-sm">
        <div className="grid grid-cols-3 gap-4">
          <span className="text-dark-300">17</span>
          <span className="text-dark-300">1</span>
          <span></span>
          <span className="text-amber-400">34</span>
          <span className="text-amber-400">2</span>
          <span className="text-amber-400">/</span>
          <span className="text-dark-300">68</span>
          <span className="text-dark-300">4</span>
          <span></span>
          <span className="text-amber-400">136</span>
          <span className="text-amber-400">8</span>
          <span className="text-amber-400">/</span>
        </div>
        <div className="mt-4 pt-4 border-t border-dark-700">
          <p className="text-dark-400 mb-2">Stop at 136 (next double exceeds 184)</p>
          <p className="text-dark-400 mb-2">184 - 136 = 48, then 48 - 34 = 14 &lt; 17</p>
          <p className="text-emerald-400">Quotient = 2 + 8 = 10, Remainder = 14</p>
        </div>
      </div>

      {/* Egyptian Fractions */}
      <h3 className="text-xl font-semibold mt-10 mb-4">Unit Fractions: A Curious Tradition</h3>

      <p className="text-dark-200 mb-6">
        In using fractions, the Egyptians were hampered by a curious tradition. They insisted
        on expressing <em>all</em> fractions (except <InlineMath>2/3</InlineMath>) as the sum
        of <strong>distinct unit fractions</strong> of the form <InlineMath>1/n</InlineMath>,
        where <InlineMath>n</InlineMath> is a positive integer.
      </p>

      <div className="bg-dark-800 rounded-lg p-6 mb-6">
        <h4 className="text-lg font-semibold mb-4 text-amber-400">Examples of Egyptian Fractions</h4>
        <ul className="space-y-3">
          <li className="flex items-center gap-4">
            <InlineMath>{`\\frac{2}{9}`}</InlineMath>
            <span className="text-dark-400">=</span>
            <InlineMath>{`\\frac{1}{6} + \\frac{1}{18}`}</InlineMath>
          </li>
          <li className="flex items-center gap-4">
            <InlineMath>{`\\frac{19}{8}`}</InlineMath>
            <span className="text-dark-400">=</span>
            <InlineMath>{`2 + \\frac{1}{4} + \\frac{1}{8}`}</InlineMath>
          </li>
          <li className="flex items-center gap-4">
            <InlineMath>{`\\frac{2}{3}`}</InlineMath>
            <span className="text-dark-400">=</span>
            <InlineMath>{`\\frac{1}{2} + \\frac{1}{6}`}</InlineMath>
            <span className="text-dark-500 text-sm">(sometimes written this way)</span>
          </li>
        </ul>
      </div>

      <p className="text-dark-200 mb-6">
        The Rhind Papyrus contains a table listing unit fraction decompositions for fractions
        of the form <InlineMath>2/n</InlineMath>, with <InlineMath>n</InlineMath> an odd
        positive integer. For example, it gives:
      </p>

      <MathBlock>{`\\frac{2}{13} = \\frac{1}{8} + \\frac{1}{52} + \\frac{1}{104}`}</MathBlock>

      <Callout type="warning">
        <p>
          <strong>An Unsolved Problem:</strong> Paul Erdos proposed the following problem:
          show that, if <InlineMath>n</InlineMath> is an odd integer greater than 4, then{' '}
          <InlineMath>4/n</InlineMath> can be written as a sum of three distinct unit fractions.
          This problem has not yet been solved!
        </p>
      </Callout>

      {/* Other Achievements */}
      <h3 className="text-xl font-semibold mt-10 mb-4">Other Mathematical Achievements</h3>

      <p className="text-dark-200 mb-6">
        The Egyptians also knew how to:
      </p>

      <ul className="space-y-3 mb-8 text-dark-200">
        <li className="flex items-start gap-3">
          <span className="text-amber-400 font-bold">1.</span>
          <span>
            <strong>Extract square roots</strong> and solve linear equations. They used
            the hieroglyph <em>h</em> much as we use the letter <InlineMath>x</InlineMath>{' '}
            for the unknown.
          </span>
        </li>
        <li className="flex items-start gap-3">
          <span className="text-amber-400 font-bold">2.</span>
          <span>
            <strong>Calculate areas of circles</strong> using the formula{' '}
            <InlineMath>{`(\\frac{8}{9})^4 r^2`}</InlineMath>, which implies{' '}
            <InlineMath>{`\\pi \\approx 3.16`}</InlineMath> — remarkably accurate!
          </span>
        </li>
        <li className="flex items-start gap-3">
          <span className="text-amber-400 font-bold">3.</span>
          <span>
            <strong>Work with arithmetic progressions.</strong> Problem 64 of the Rhind
            Papyrus asks to find an arithmetic progression with 10 terms, sum 10, and
            common difference <InlineMath>1/8</InlineMath>.
          </span>
        </li>
      </ul>

      {/* Key Takeaways */}
      <h3 className="text-xl font-semibold mt-10 mb-4">Key Takeaways</h3>

      <div className="bg-dark-800 rounded-lg p-6">
        <ul className="space-y-3">
          <li className="flex items-start gap-3">
            <span className="text-amber-400 font-bold">1.</span>
            <span>
              Egyptian mathematics was primarily <em>practical</em>, developed to solve
              problems in surveying, construction, and administration.
            </span>
          </li>
          <li className="flex items-start gap-3">
            <span className="text-amber-400 font-bold">2.</span>
            <span>
              The Rhind and Moscow Papyri (c. 1850-1650 BC) are our primary sources,
              predating Greek mathematics by over 1,000 years.
            </span>
          </li>
          <li className="flex items-start gap-3">
            <span className="text-amber-400 font-bold">3.</span>
            <span>
              Egyptian multiplication by <strong>doubling and adding</strong> anticipates
              binary arithmetic — the foundation of modern computing.
            </span>
          </li>
          <li className="flex items-start gap-3">
            <span className="text-amber-400 font-bold">4.</span>
            <span>
              The Egyptian insistence on <strong>unit fractions</strong> was a limitation,
              but Egyptian fraction problems remain a topic of mathematical research today.
            </span>
          </li>
          <li className="flex items-start gap-3">
            <span className="text-amber-400 font-bold">5.</span>
            <span>
              The <strong>truncated pyramid formula</strong> demonstrates sophisticated
              geometric understanding that would not be rigorously proved until calculus.
            </span>
          </li>
        </ul>
      </div>

      {/* Section Quiz */}
      <SectionQuiz sectionId={0} questions={section00Questions} />
    </LessonLayout>
  );
}
