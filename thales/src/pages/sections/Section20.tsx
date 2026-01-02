import { LessonLayout } from '../../components/layout/LessonLayout';
import { Callout } from '../../components/common/Callout';
import { Card, CardGrid, CardHeader } from '../../components/common/Card';
import { InlineMath, MathBlock } from '../../components/common/MathBlock';
import { SectionQuiz } from '../../components/quiz';
import { section20Questions } from '../../data/quizzes';

export default function Section20() {
  return (
    <LessonLayout sectionId={20}>
      <h2 className="text-2xl font-semibold mb-4">Mathematics in China and India</h2>

      <p className="text-dark-200 mb-6 text-lg leading-relaxed">
        While Greek mathematics flourished in Alexandria, independent mathematical
        traditions developed in China and India. These cultures made fundamental
        contributions that would transform mathematics: the decimal system, zero,
        negative numbers, and powerful algorithms. Unlike the Greeks, Indian
        mathematicians wrote their treatises in verse!
      </p>

      {/* Chinese Mathematics */}
      <h3 className="text-xl font-semibold mt-8 mb-4">Mathematics in China</h3>

      <p className="text-dark-200 mb-4">
        The <strong>Arithmetic in Nine Sections</strong> (<em>Chiu Chang Suan Shu</em>)
        was written before 200 AD. Like the Egyptian Rhind Papyrus, it is a list of
        problems and solutions—but the Chinese went much further.
      </p>

      <Card className="mb-6">
        <CardHeader>Gaussian Elimination (1800 Years Early!)</CardHeader>
        <div className="text-dark-300 space-y-3">
          <p>
            Chapter 8 shows how to solve <InlineMath>{`n`}</InlineMath> linear equations
            in <InlineMath>{`n`}</InlineMath> unknowns using a method essentially the same
            as <strong>Gaussian elimination</strong>. One system solved is:
          </p>
          <MathBlock>{`\\begin{aligned}
3x + 2y + z &= 39 \\\\
2x + 3y + z &= 34 \\\\
x + 2y + 3z &= 26
\\end{aligned}`}</MathBlock>
        </div>
      </Card>

      <p className="text-dark-200 mb-4">
        The Chinese interest in systems of linear equations was perhaps linked to their
        interest in <strong>magic squares</strong>. The famous Lo Shu square:
      </p>

      <div className="bg-dark-800 rounded-lg p-4 mb-6 text-center">
        <div className="font-mono text-lg text-dark-200 inline-block">
          <div className="grid grid-cols-3 gap-4">
            <span>4</span><span>9</span><span>2</span>
            <span>3</span><span>5</span><span>7</span>
            <span>8</span><span>1</span><span>6</span>
          </div>
        </div>
        <p className="text-dark-400 text-sm mt-3">
          Supposedly brought to humankind on the back of a tortoise from the River Lo
          in the days of Emperor Yu. All rows, columns, and diagonals sum to 15.
        </p>
      </div>

      <Card className="mb-6">
        <CardHeader>The Chinese Remainder Problem</CardHeader>
        <div className="text-dark-300 space-y-3">
          <p><strong>Sun Tsu</strong> (400 AD) solved this famous problem:</p>
          <div className="bg-dark-900 rounded p-3 text-center">
            <p>Divide by 3, the remainder is 2;</p>
            <p>Divide by 5, the remainder is 3;</p>
            <p>Divide by 7, the remainder is 2;</p>
            <p className="font-semibold mt-2">What will be the number?</p>
          </div>
          <p className="text-sm text-dark-400">
            Sun Tsu's method allowed him to find infinitely many solutions. This became
            the <strong>Chinese Remainder Theorem</strong>, fundamental in modern number theory
            and cryptography.
          </p>
        </div>
      </Card>

      <div className="space-y-3 mb-6">
        <div className="bg-dark-800 rounded-lg p-3">
          <span className="text-amber-400 font-semibold">Tsu Ch'ung Chih (475 AD):</span>
          <span className="text-dark-300 ml-2">
            Used Archimedes's method to obtain sharper bounds for π.
          </span>
        </div>
        <div className="bg-dark-800 rounded-lg p-3">
          <span className="text-amber-400 font-semibold">Ch'in Chiu Shao (1247):</span>
          <span className="text-dark-300 ml-2">
            Found roots of polynomials using what is now called <strong>Horner's method</strong>
            (rediscovered by William Horner in 1819).
          </span>
        </div>
        <div className="bg-dark-800 rounded-lg p-3">
          <span className="text-amber-400 font-semibold">Chu Shih Chieh (1303):</span>
          <span className="text-dark-300 ml-2">
            Gave <strong>Pascal's Triangle</strong> in his "Precious Mirror of the Four
            Elements"—350 years before Pascal (1653).
          </span>
        </div>
      </div>

      {/* Indian Mathematics */}
      <h3 className="text-xl font-semibold mt-8 mb-4">Mathematics in India</h3>

      <p className="text-dark-200 mb-4">
        The earliest Indian mathematical texts are the <strong>Sulvasutras</strong>
        ("rules of the cord"), written between 500 BC and 200 AD. They contain elementary
        geometry for altar construction and show knowledge of Pythagorean triples like
        <InlineMath>{`12^2 + 35^2 = 37^2`}</InlineMath>.
      </p>

      <Callout type="note" title="Binary Numbers in Ancient India">
        Around 800 BC, <strong>Pingala</strong> wrote a book on the <em>Science of Verse
        Meters</em>. Syllables in Vedic poetry are either "light" (assigned 1) or "heavy"
        (assigned 0). Each line of verse corresponds to a binary number, which is then
        converted to decimal—perhaps the earliest use of binary arithmetic!
      </Callout>

      <h4 className="text-lg font-semibold mt-6 mb-3">The Great Indian Mathematicians</h4>

      <CardGrid columns={2}>
        <Card>
          <CardHeader>Aryabhata (b. 476 AD)</CardHeader>
          <ul className="text-dark-300 space-y-1 text-sm">
            <li>• Arithmetic, algebra, trigonometry, astronomy</li>
            <li>• Sums <InlineMath>{`1^k + 2^k + \\cdots + n^k`}</InlineMath> for k = 1, 2, 3</li>
            <li>• Defined <InlineMath>{`\\sin A = (\\text{chord } 2A)/2`}</InlineMath></li>
            <li>• Gave trigonometry its modern form</li>
          </ul>
        </Card>
        <Card>
          <CardHeader>Brahmagupta (b. 598 AD)</CardHeader>
          <ul className="text-dark-300 space-y-1 text-sm">
            <li>• First systematic rules for zero and negatives</li>
            <li>• Studied "Pell's equation" <InlineMath>{`x^2 - Ry^2 = 1`}</InlineMath></li>
            <li>• Used <InlineMath>{`\\sqrt{10}`}</InlineMath> as approximation for π</li>
            <li>• Area formula for cyclic quadrilaterals</li>
          </ul>
        </Card>
        <Card>
          <CardHeader>Mahavira (c. 850 AD)</CardHeader>
          <ul className="text-dark-300 space-y-1 text-sm">
            <li>• Properties of zero: <InlineMath>{`a \\pm 0 = a`}</InlineMath>, <InlineMath>{`a \\cdot 0 = 0`}</InlineMath></li>
            <li>• Negative numbers "are not squares"</li>
            <li>• Posed algebra problems as word puzzles</li>
          </ul>
        </Card>
        <Card>
          <CardHeader>Bhaskara (1114–1185)</CardHeader>
          <ul className="text-dark-300 space-y-1 text-sm">
            <li>• Named his book <em>Lilavati</em> after his daughter</li>
            <li>• Earliest extant decimal notation with zero</li>
            <li>• Declared <InlineMath>{`a/0 = \\infty`}</InlineMath></li>
          </ul>
        </Card>
      </CardGrid>

      {/* Zero and Negative Numbers */}
      <h3 className="text-xl font-semibold mt-8 mb-4">The Revolution of Zero</h3>

      <p className="text-dark-200 mb-4">
        <strong>Brahmagupta</strong> was the first to give a systematic presentation of
        rules for working with <strong>zero and negative numbers</strong>. His
        <em> Brahmasphuita Siddhanta</em> explains:
      </p>

      <div className="bg-dark-800 rounded-lg p-4 mb-6">
        <ul className="text-dark-200 space-y-2">
          <li>• Positive ÷ positive = positive</li>
          <li>• Negative ÷ negative = positive</li>
          <li>• Positive ÷ negative = negative</li>
          <li>• Negative ÷ positive = negative</li>
        </ul>
        <p className="text-dark-400 text-sm mt-3">
          However, Brahmagupta had some trouble dividing by zero!
        </p>
      </div>

      <Card className="mb-6">
        <CardHeader>Brahmagupta's Formula</CardHeader>
        <div className="text-dark-300 space-y-3">
          <p>
            One of Brahmagupta's greatest achievements was his formula for the area of
            a <strong>cyclic quadrilateral</strong> with sides a, b, c, d:
          </p>
          <MathBlock>{`A = \\sqrt{(s-a)(s-b)(s-c)(s-d)}`}</MathBlock>
          <p>
            where <InlineMath>{`s = (a+b+c+d)/2`}</InlineMath>. This beautifully generalizes
            Heron's formula (which is the case d = 0, i.e., a triangle).
          </p>
        </div>
      </Card>

      {/* Mathematics in Verse */}
      <h3 className="text-xl font-semibold mt-8 mb-4">Mathematics in Verse</h3>

      <p className="text-dark-200 mb-4">
        Unlike the ancient Greeks, Indian mathematicians wrote their books <strong>in
        verse</strong>! Bhaskara poses this problem poetically:
      </p>

      <div className="bg-dark-800 rounded-lg p-4 mb-6 italic text-dark-300">
        <p>The square root of half the number of bees in a swarm</p>
        <p>Has flown out upon a jasmine bush;</p>
        <p>Eight ninths of the swarm has remained behind;</p>
        <p>And a female bee flies about a male who is buzzing inside a lotus flower...</p>
        <p className="mt-2">Tell me, most enchanting lady, the number of bees.</p>
      </div>

      <p className="text-dark-200 mb-4">
        This is a poetic way of asking for the solution of:
      </p>

      <MathBlock>{`\\sqrt{x/2} + \\frac{8x}{9} + 2 = x`}</MathBlock>

      <Callout type="note" title="The Story of Lilavati">
        According to legend, Bhaskara named his mathematics book after his daughter
        because astrologers said there was only one lucky moment at which she might
        marry. Unfortunately, a pearl fell into the water clock and stopped it unnoticed.
        The lucky moment passed—so Bhaskara gave Lilavati a book of mathematics instead
        of a husband!
      </Callout>

      {/* Legacy */}
      <h3 className="text-xl font-semibold mt-8 mb-4">A Lasting Legacy</h3>

      <p className="text-dark-200 mb-4">
        In the 16th and 17th centuries, Christian missionaries introduced Western
        mathematics to China. Today, mathematicians from both China and India contribute
        to all branches of mathematics.
      </p>

      <p className="text-dark-200 mb-4">
        Perhaps the greatest Indian mathematician of the 20th century was <strong>Srinivasa
        Ramanujan</strong> (1887–1920), who was essentially self-taught and discovered
        many beautiful and ingenious formulas that continue to inspire mathematicians today.
      </p>

      {/* Summary */}
      <h3 className="text-xl font-semibold mt-8 mb-4">Summary</h3>

      <div className="bg-dark-800 rounded-lg p-4 mb-6">
        <ul className="text-dark-200 space-y-2">
          <li>• <strong>China</strong>: Gaussian elimination, magic squares, Chinese Remainder Theorem, Horner's method, Pascal's Triangle</li>
          <li>• <strong>India</strong>: Zero, negative numbers, decimal notation, sine function, cyclic quadrilateral formula</li>
          <li>• <strong>Aryabhata</strong> gave trigonometry its modern form with the sine function</li>
          <li>• <strong>Brahmagupta</strong> first systematized rules for zero and negatives</li>
          <li>• <strong>Bhaskara's</strong> <em>Lilavati</em> contains the earliest extant decimal notation with zero</li>
          <li>• Indian mathematicians wrote their treatises <strong>in verse</strong></li>
          <li>• <strong>Ramanujan</strong> (1887–1920) was one of the greatest mathematicians of the 20th century</li>
        </ul>
      </div>

      {/* Section Quiz */}
      <SectionQuiz sectionId={20} questions={section20Questions} />
    </LessonLayout>
  );
}
