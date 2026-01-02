import { LessonLayout } from '../../components/layout/LessonLayout';
import { Callout } from '../../components/common/Callout';
import { Card, CardGrid, CardHeader } from '../../components/common/Card';
import { InlineMath, MathBlock } from '../../components/common/MathBlock';
import { SectionQuiz } from '../../components/quiz';
import { section01Questions } from '../../data/quizzes';

export default function Section01() {
  return (
    <LessonLayout sectionId={1}>
      <h2 className="text-2xl font-semibold mb-4">Scales of Notation</h2>

      <p className="text-dark-200 mb-6 text-lg leading-relaxed">
        The ancient Egyptian language belongs to the Hamito-Semitic group of languages.
        Like the Indo-European group, it contains a system of counting by tens, undoubtedly
        arising from the habit of counting using one's fingers. The notation used for writing
        numbers is also clearly based on the scale of ten.
      </p>

      <Callout type="info">
        <p>
          For some reason, standard French departs from decimal nomenclature — it expresses
          97 as <strong>4 × 20 + 17</strong> (quatre-vingt-dix-sept). This seems odd, since
          it was the French who introduced the decimal system for weights and measures!
        </p>
      </Callout>

      {/* General Number Scales */}
      <h3 className="text-xl font-semibold mt-10 mb-4">Number Scales in General</h3>

      <p className="text-dark-200 mb-6">
        Some African languages express numbers in the scale of five. In fact, one may express
        natural numbers in <em>any</em> scale <InlineMath>b</InlineMath>, where{' '}
        <InlineMath>b</InlineMath> is an integer greater than 1, since every natural number
        is uniquely expressible in the form:
      </p>

      <MathBlock>{`a = a_0 + a_1 b + a_2 b^2 + a_3 b^3 + \\cdots + a_n b^n`}</MathBlock>

      <p className="text-dark-200 my-6">
        where <InlineMath>{`0 \\leq a_i < b`}</InlineMath> for each digit. We write this
        more briefly as <InlineMath>{`a = (a_n a_{n-1} \\cdots a_2 a_1 a_0)_b`}</InlineMath>.
        If there is no doubt which scale is in use, the subscript <InlineMath>b</InlineMath>{' '}
        may be dropped.
      </p>

      {/* Egyptian Number Systems */}
      <h3 className="text-xl font-semibold mt-10 mb-4">Egyptian Number Systems</h3>

      <p className="text-dark-200 mb-6">
        The Egyptians had a number system based on the scale of ten, but they often worked
        with other scales as well:
      </p>

      <CardGrid>
        <Card>
          <CardHeader title="Scale of Two (Binary)" />
          <p className="text-sm text-dark-300 mb-2">
            To multiply by 12, Ahmose expressed 12 as <InlineMath>4 + 8</InlineMath>,
            that is, <InlineMath>2^2 + 2^3</InlineMath>.
          </p>
          <p className="text-sm text-dark-400">
            In binary: <InlineMath>12 = (1100)_2</InlineMath>
          </p>
        </Card>
        <Card>
          <CardHeader title="Scale of Seven" />
          <p className="text-sm text-dark-300 mb-2">
            The Egyptians also took <InlineMath>b = 7</InlineMath> in some calculations,
            since there are <strong>seven palms in a cubit</strong>.
          </p>
          <p className="text-sm text-dark-400">
            They had no symbol for zero; instead they used special symbols for different
            powers of ten.
          </p>
        </Card>
      </CardGrid>

      {/* Binary in Ancient Cultures */}
      <h3 className="text-xl font-semibold mt-10 mb-4">Binary in Ancient Cultures</h3>

      <p className="text-dark-200 mb-6">
        The binary scale (with <InlineMath>b = 2</InlineMath>) shows up in several
        ancient contexts:
      </p>

      <div className="bg-dark-800 rounded-lg p-6 mb-6">
        <ul className="space-y-4">
          <li className="flex items-start gap-3">
            <span className="text-amber-400 font-bold">1.</span>
            <span>
              <strong>Chinese Book of Changes</strong> (1200 BC) — A system of divination
              where each six-place binary number represents some concept. The digit 1 was
              associated with the male "yang", and 0 with the female "yin". The number{' '}
              <InlineMath>34 = (100010)_2</InlineMath> represented "progress and success".
            </span>
          </li>
          <li className="flex items-start gap-3">
            <span className="text-amber-400 font-bold">2.</span>
            <span>
              <strong>Hindu Classification of Meters</strong> (800 BC) — Binary notation
              was used to classify meters in verse.
            </span>
          </li>
          <li className="flex items-start gap-3">
            <span className="text-amber-400 font-bold">3.</span>
            <span>
              <strong>Modern Computers</strong> — The digit 1 is represented by a current,
              and 0 by the absence of a current.
            </span>
          </li>
        </ul>
      </div>

      {/* Six Weight Problem */}
      <h3 className="text-xl font-semibold mt-10 mb-4">The Six Weight Problem</h3>

      <p className="text-dark-200 mb-6">
        Number scales appear naturally in recreational mathematics. Consider this classic problem:
      </p>

      <div className="bg-dark-800 rounded-lg p-6 mb-6 border-l-4 border-amber-400">
        <h4 className="text-lg font-semibold mb-3 text-amber-400">Problem</h4>
        <p className="text-dark-200 mb-4">
          A balance is a weighing apparatus with a central pivot, a beam, two scales, and
          a set of counter-weights that are placed in one of the scales. Suppose we have
          some flour and want to weigh bags from 1 to 63 kilograms. How can this be done
          using just <strong>six counter-weights</strong>?
        </p>
        <h4 className="text-lg font-semibold mb-3 text-emerald-400">Solution</h4>
        <p className="text-dark-200">
          Weights of <strong>1, 2, 4, 8, 16, and 32 kg</strong> will allow you to weigh
          any integral load from 1 to <InlineMath>32 + 16 + 8 + 4 + 2 + 1 = 63</InlineMath>{' '}
          kilograms.
        </p>
      </div>

      <p className="text-dark-200 mb-6">
        The following three statements are equivalent:
      </p>

      <ul className="space-y-3 mb-6 text-dark-200">
        <li className="flex items-start gap-3">
          <span className="text-amber-400 font-bold">1.</span>
          <span>
            Every integral load less than 64 kg can be weighed uniquely with 6 weights:
            1, 2, 4, 8, 16, and 32 kg.
          </span>
        </li>
        <li className="flex items-start gap-3">
          <span className="text-amber-400 font-bold">2.</span>
          <span>
            Every natural number less than 64 can be expressed uniquely as the sum of
            distinct powers of 2.
          </span>
        </li>
        <li className="flex items-start gap-3">
          <span className="text-amber-400 font-bold">3.</span>
          <span>
            Every natural number less than 64 can be written uniquely in the scale of 2
            with up to 6 digits, each 0 or 1.
          </span>
        </li>
      </ul>

      {/* Four Weight Problem */}
      <h3 className="text-xl font-semibold mt-10 mb-4">The Four Weight Problem</h3>

      <div className="bg-dark-800 rounded-lg p-6 mb-6 border-l-4 border-cyan-400">
        <h4 className="text-lg font-semibold mb-3 text-cyan-400">Problem</h4>
        <p className="text-dark-200 mb-4">
          This time, suppose we are allowed to put weights on <strong>either scale</strong>.
          How can we weigh bags under 42 kilograms using only <strong>four weights</strong>?
        </p>
        <h4 className="text-lg font-semibold mb-3 text-emerald-400">Solution</h4>
        <p className="text-dark-200 mb-4">
          Choose weights of <strong>1, 3, 9, and 27 kg</strong>, since any integer{' '}
          <InlineMath>a</InlineMath> can be written uniquely in the form:
        </p>
        <MathBlock>{`a = a_0 + a_1 \\cdot 3 + a_2 \\cdot 3^2 + \\cdots + a_n \\cdot 3^n`}</MathBlock>
        <p className="text-dark-200 mt-4">
          where each <InlineMath>a_i</InlineMath> is one of <InlineMath>-1, 0,</InlineMath>{' '}
          or <InlineMath>1</InlineMath>. This is called <em>balanced ternary</em>.
        </p>
      </div>

      <Callout type="success">
        <p>
          The key insight: placing a weight on the <em>same</em> side as the flour
          corresponds to a coefficient of <InlineMath>-1</InlineMath>. The maximum
          weight is <InlineMath>1 + 3 + 9 + 27 = 40</InlineMath> kg (actually 41 with
          balanced ternary).
        </p>
      </Callout>

      {/* Game of Nim */}
      <h3 className="text-xl font-semibold mt-10 mb-4">The Game of Nim</h3>

      <p className="text-dark-200 mb-6">
        This so-called Chinese game is played by two opponents who take turns removing
        matches from several piles according to these rules:
      </p>

      <div className="bg-dark-800 rounded-lg p-6 mb-6">
        <ul className="space-y-2 mb-4">
          <li className="flex items-start gap-3">
            <span className="text-amber-400 font-bold">1.</span>
            <span>A player must remove at least one match in a turn.</span>
          </li>
          <li className="flex items-start gap-3">
            <span className="text-amber-400 font-bold">2.</span>
            <span>A player may remove any number of matches from a single pile in a turn.</span>
          </li>
        </ul>
        <p className="text-dark-200 font-semibold">
          The player who removes the last match wins.
        </p>
      </div>

      <h4 className="text-lg font-semibold mb-4 text-amber-400">Winning Strategy</h4>

      <p className="text-dark-200 mb-6">
        Express the number of matches in each pile in binary and write these numbers
        one below the other. If, when it is your turn, you can arrange it so that
        <strong> each column adds up to an even number</strong>, then you can do the
        same in every subsequent turn and you will win the game.
      </p>

      <div className="bg-dark-800 rounded-lg p-6 mb-6">
        <h4 className="text-lg font-semibold mb-4 text-amber-400">Example: Piles of 7, 5, and 3</h4>
        <div className="font-mono text-sm mb-4">
          <div className="grid grid-cols-4 gap-2 mb-2">
            <span className="text-dark-400">7:</span>
            <span className="text-amber-400">1</span>
            <span className="text-amber-400">1</span>
            <span className="text-amber-400">1</span>
          </div>
          <div className="grid grid-cols-4 gap-2 mb-2">
            <span className="text-dark-400">5:</span>
            <span className="text-amber-400">1</span>
            <span className="text-dark-400">0</span>
            <span className="text-amber-400">1</span>
          </div>
          <div className="grid grid-cols-4 gap-2 mb-2">
            <span className="text-dark-400">3:</span>
            <span className="text-dark-400"></span>
            <span className="text-amber-400">1</span>
            <span className="text-amber-400">1</span>
          </div>
          <div className="grid grid-cols-4 gap-2 pt-2 border-t border-dark-700">
            <span className="text-dark-400">Sum:</span>
            <span className="text-red-400">2</span>
            <span className="text-red-400">2</span>
            <span className="text-red-400">3</span>
          </div>
        </div>
        <p className="text-dark-300 text-sm">
          Take 1 match from the first pile (making it 6 = 110₂). Now all columns sum to
          an even number!
        </p>
      </div>

      {/* Mathematical Proof */}
      <h3 className="text-xl font-semibold mt-10 mb-4">An 18th-Century Proof</h3>

      <p className="text-dark-200 mb-6">
        A direct proof that every number has a unique binary representation is easy,
        but a proof in the spirit of the 18th century is more elegant. Consider:
      </p>

      <MathBlock>{`(1+x)(1+x^2)(1+x^4)(1+x^8)(1+x^{16})(1+x^{32}) = \\sum_{n=0}^{\\infty} f(n)x^n`}</MathBlock>

      <p className="text-dark-200 my-6">
        Then <InlineMath>f(n)</InlineMath> is the number of ways <InlineMath>n</InlineMath>{' '}
        can be written as a sum of distinct powers of 2 (up to 32). The left-hand side
        can be rewritten as:
      </p>

      <MathBlock>{`\\frac{1-x^2}{1-x} \\cdot \\frac{1-x^4}{1-x^2} \\cdot \\frac{1-x^8}{1-x^4} \\cdots \\frac{1-x^{64}}{1-x^{32}} = \\frac{1-x^{64}}{1-x} = \\sum_{n=0}^{63} x^n`}</MathBlock>

      <p className="text-dark-200 my-6">
        Hence <InlineMath>f(n) = 1</InlineMath> if <InlineMath>n &lt; 64</InlineMath>,
        proving uniqueness of binary representations.
      </p>

      <Callout type="warning">
        <p>
          By extending this to an infinite product{' '}
          <InlineMath>{`\\prod_{n=0}^{\\infty}(1+x^{2^n})`}</InlineMath>, we can show
          that <em>every</em> natural number can be written uniquely in binary.
        </p>
      </Callout>

      {/* Key Takeaways */}
      <h3 className="text-xl font-semibold mt-10 mb-4">Key Takeaways</h3>

      <div className="bg-dark-800 rounded-lg p-6">
        <ul className="space-y-3">
          <li className="flex items-start gap-3">
            <span className="text-amber-400 font-bold">1.</span>
            <span>
              Numbers can be represented in any base <InlineMath>b &gt; 1</InlineMath>.
              The decimal system (base 10) arose from counting on fingers.
            </span>
          </li>
          <li className="flex items-start gap-3">
            <span className="text-amber-400 font-bold">2.</span>
            <span>
              The Egyptians used base 10, but their multiplication algorithm implicitly
              used <strong>binary (base 2)</strong>.
            </span>
          </li>
          <li className="flex items-start gap-3">
            <span className="text-amber-400 font-bold">3.</span>
            <span>
              Binary appeared in the Chinese <em>Book of Changes</em> (1200 BC) and
              Hindu verse classification (800 BC).
            </span>
          </li>
          <li className="flex items-start gap-3">
            <span className="text-amber-400 font-bold">4.</span>
            <span>
              The <strong>Six Weight Problem</strong> demonstrates that powers of 2
              can represent any number — the basis of modern computing.
            </span>
          </li>
          <li className="flex items-start gap-3">
            <span className="text-amber-400 font-bold">5.</span>
            <span>
              The <strong>Game of Nim</strong> has a winning strategy based on binary
              representation and XOR operations.
            </span>
          </li>
        </ul>
      </div>

      {/* Section Quiz */}
      <SectionQuiz sectionId={1} questions={section01Questions} />
    </LessonLayout>
  );
}
