import { LessonLayout } from '../../components/layout/LessonLayout';
import { Callout } from '../../components/common/Callout';
import { Card, CardGrid, CardHeader } from '../../components/common/Card';
import { InlineMath, MathBlock } from '../../components/common/MathBlock';
import { SectionQuiz } from '../../components/quiz';
import { section00Questions } from '../../data/quizzes';

export default function Section00() {
  return (
    <LessonLayout sectionId={0}>
      <h2 className="text-2xl font-semibold mb-4">The Natural Numbers</h2>

      <p className="text-dark-200 mb-6 text-lg leading-relaxed">
        The beauty and fascination of numbers can be summed up by one simple fact:
        anyone can count <InlineMath>1, 2, 3, 4, \ldots</InlineMath>, but no one knows
        all the implications of this simple process.
      </p>

      <p className="text-dark-200 mb-6">
        We all realize that the sequence <InlineMath>1, 2, 3, 4, \ldots</InlineMath> continues{' '}
        <InlineMath>5, 6, 7, 8, \ldots</InlineMath>, and that we can continue indefinitely
        adding 1. The objects produced by this counting process are what mathematicians
        call the <strong>natural numbers</strong>.
      </p>

      <Callout type="info">
        <p>
          What do <InlineMath>1, 2, 3, 17, 643, 100097801</InlineMath> have in common?
          They are all produced by the counting process. This is slightly troubling:
          the simplest mathematical objects are defined by an <em>infinite</em> process!
        </p>
      </Callout>

      {/* Natural Numbers and Infinity */}
      <h3 className="text-xl font-semibold mt-10 mb-4">Natural Numbers and Infinity</h3>

      <p className="text-dark-200 mb-6">
        The concept of natural number is inseparable from the concept of infinity.
        We must learn to live with this and, if possible, use it to our advantage.
      </p>

      <p className="text-dark-200 mb-6">
        One of the most powerful methods in mathematics draws its strength from
        the infinite counting process. This is <strong>mathematical induction</strong>,
        which may be formulated in several ways, each basically a restatement of the
        fact that any natural number can be reached by counting.
      </p>

      {/* Infinite Descent */}
      <h3 className="text-xl font-semibold mt-10 mb-4">Infinite Descent</h3>

      <p className="text-dark-200 mb-6">
        The first form of induction we consider expresses the fact that from each
        natural number we can "count down" to 1 by finitely often subtracting 1.
        It follows that an <strong>infinite descending sequence</strong> of natural
        numbers is impossible.
      </p>

      <CardGrid>
        <Card>
          <CardHeader title="The Key Principle" />
          <p className="text-sm text-dark-300 mb-2">
            There is no infinite sequence of natural numbers
          </p>
          <MathBlock>{`n_1 > n_2 > n_3 > n_4 > \\cdots`}</MathBlock>
          <p className="text-sm text-dark-400 mt-2">
            Eventually, we must reach 1 (or 0).
          </p>
        </Card>
        <Card>
          <CardHeader title="Proof Technique" />
          <p className="text-sm text-dark-300 mb-2">
            To prove something is impossible, assume it exists and construct
            an infinite descending sequence.
          </p>
          <p className="text-sm text-dark-400">
            This contradiction proves the original assumption was false.
          </p>
        </Card>
      </CardGrid>

      <p className="text-dark-200 mt-6 mb-6">
        This technique is called <strong>infinite descent</strong>, and it dates
        back to around 500 B.C. The most famous example is the proof that{' '}
        <InlineMath>\sqrt{'{2}'}</InlineMath> is irrational.
      </p>

      {/* Irrationality of sqrt(2) */}
      <h3 className="text-xl font-semibold mt-10 mb-4">
        The Irrationality of <InlineMath>\sqrt{'{2}'}</InlineMath>
      </h3>

      <div className="bg-dark-800 rounded-lg p-6 mb-6 border-l-4 border-amber-400">
        <h4 className="text-lg font-semibold mb-3 text-amber-400">Theorem</h4>
        <p className="text-dark-200">
          There are no natural numbers <InlineMath>m</InlineMath> and{' '}
          <InlineMath>n</InlineMath> such that <InlineMath>m^2 = 2n^2</InlineMath>.
        </p>
      </div>

      <p className="text-dark-200 mb-6">
        This result is better known as "the irrationality of <InlineMath>\sqrt{'{2}'}</InlineMath>."
        If <InlineMath>\sqrt{'{2}'}</InlineMath> were a ratio <InlineMath>m/n</InlineMath>,
        then squaring both sides of <InlineMath>\sqrt{'{2}'} = m/n</InlineMath> would
        give <InlineMath>2 = m^2/n^2</InlineMath>, hence <InlineMath>m^2 = 2n^2</InlineMath>.
      </p>

      <div className="bg-dark-800 rounded-lg p-6 mb-6 border-l-4 border-emerald-400">
        <h4 className="text-lg font-semibold mb-3 text-emerald-400">Proof by Infinite Descent</h4>
        <p className="text-dark-200 mb-4">
          Assume <InlineMath>m^2 = 2n^2</InlineMath> for some natural numbers{' '}
          <InlineMath>m, n</InlineMath>. We derive a contradiction:
        </p>

        <div className="space-y-3 text-dark-200">
          <div className="flex items-start gap-3">
            <span className="text-amber-400 font-bold">1.</span>
            <span>
              <InlineMath>m^2 = 2n^2</InlineMath> implies <InlineMath>m^2</InlineMath> is even
            </span>
          </div>
          <div className="flex items-start gap-3">
            <span className="text-amber-400 font-bold">2.</span>
            <span>
              Therefore <InlineMath>m</InlineMath> is even, say <InlineMath>m = 2m_1</InlineMath>
            </span>
          </div>
          <div className="flex items-start gap-3">
            <span className="text-amber-400 font-bold">3.</span>
            <span>
              Substituting: <InlineMath>4m_1^2 = 2n^2</InlineMath>, so <InlineMath>2m_1^2 = n^2</InlineMath>
            </span>
          </div>
          <div className="flex items-start gap-3">
            <span className="text-amber-400 font-bold">4.</span>
            <span>
              This means <InlineMath>n^2</InlineMath> is even, so <InlineMath>n</InlineMath> is even,
              say <InlineMath>n = 2n_1</InlineMath>
            </span>
          </div>
          <div className="flex items-start gap-3">
            <span className="text-amber-400 font-bold">5.</span>
            <span>
              Now <InlineMath>m_1^2 = 2n_1^2</InlineMath> with <InlineMath>m {'>'} m_1 {'>'} 0</InlineMath>
            </span>
          </div>
        </div>

        <p className="text-dark-200 mt-4">
          Repeating this argument gives an infinite descending sequence{' '}
          <InlineMath>m {'>'} m_1 {'>'} m_2 {'>'} \cdots</InlineMath>, which is impossible!
        </p>
      </div>

      <Callout type="success">
        <p>
          The word "irrational" simply means "not a ratio." The proof shows that{' '}
          <InlineMath>\sqrt{'{2}'}</InlineMath> cannot be expressed as a ratio of
          natural numbers. Whatever <InlineMath>\sqrt{'{2}'}</InlineMath> is, its
          irrationality is a fact about natural numbers.
        </p>
      </Callout>

      {/* Egyptian Fractions */}
      <h3 className="text-xl font-semibold mt-10 mb-4">Egyptian Fractions</h3>

      <p className="text-dark-200 mb-6">
        Another beautiful application of descent comes from ancient Egypt (around 4000 years ago).
        The Egyptians had a curious arithmetic of fractions that depended on expressing
        each fraction between 0 and 1 as a sum of <strong>distinct unit fractions</strong>{' '}
        (fractions of the form <InlineMath>1/n</InlineMath>).
      </p>

      <CardGrid>
        <Card>
          <CardHeader title="Example: 2/3" />
          <MathBlock>{`\\frac{2}{3} = \\frac{1}{2} + \\frac{1}{6}`}</MathBlock>
        </Card>
        <Card>
          <CardHeader title="Example: 3/5" />
          <MathBlock>{`\\frac{3}{5} = \\frac{1}{2} + \\frac{1}{10}`}</MathBlock>
        </Card>
      </CardGrid>

      <p className="text-dark-200 mt-6 mb-6">
        Such sums are called <strong>Egyptian fractions</strong>. A systematic method
        for finding them was developed by Fibonacci in his book <em>Liber Abacci</em> (1202).
      </p>

      <div className="bg-dark-800 rounded-lg p-6 mb-6 border-l-4 border-cyan-400">
        <h4 className="text-lg font-semibold mb-3 text-cyan-400">Fibonacci's Method</h4>
        <p className="text-dark-200 mb-4">
          Given a fraction <InlineMath>a/b</InlineMath> between 0 and 1:
        </p>
        <ol className="space-y-2 text-dark-200">
          <li className="flex items-start gap-3">
            <span className="text-amber-400 font-bold">1.</span>
            <span>
              Find the largest unit fraction <InlineMath>1/n</InlineMath> less than{' '}
              <InlineMath>a/b</InlineMath>
            </span>
          </li>
          <li className="flex items-start gap-3">
            <span className="text-amber-400 font-bold">2.</span>
            <span>
              Compute the remainder: <InlineMath>a'/b' = a/b - 1/n</InlineMath>
            </span>
          </li>
          <li className="flex items-start gap-3">
            <span className="text-amber-400 font-bold">3.</span>
            <span>
              The numerator <InlineMath>a'</InlineMath> is smaller than <InlineMath>a</InlineMath>
            </span>
          </li>
          <li className="flex items-start gap-3">
            <span className="text-amber-400 font-bold">4.</span>
            <span>Repeat until the remainder is a unit fraction</span>
          </li>
        </ol>
        <p className="text-dark-200 mt-4">
          By descent on the numerator, this process must terminate!
        </p>
      </div>

      {/* Key Takeaways */}
      <h3 className="text-xl font-semibold mt-10 mb-4">Key Takeaways</h3>

      <div className="bg-dark-800 rounded-lg p-6">
        <ul className="space-y-3">
          <li className="flex items-start gap-3">
            <span className="text-amber-400 font-bold">1.</span>
            <span>
              <strong>Natural numbers</strong> are the objects produced by the counting
              process: <InlineMath>1, 2, 3, 4, \ldots</InlineMath>
            </span>
          </li>
          <li className="flex items-start gap-3">
            <span className="text-amber-400 font-bold">2.</span>
            <span>
              The concept of natural number is inherently tied to <strong>infinity</strong>.
            </span>
          </li>
          <li className="flex items-start gap-3">
            <span className="text-amber-400 font-bold">3.</span>
            <span>
              <strong>Infinite descent</strong> proves impossibility by showing that
              an assumption leads to an infinite descending sequence.
            </span>
          </li>
          <li className="flex items-start gap-3">
            <span className="text-amber-400 font-bold">4.</span>
            <span>
              The <strong>irrationality of <InlineMath>\sqrt{'{2}'}</InlineMath></strong>{' '}
              follows from descent: assuming <InlineMath>m^2 = 2n^2</InlineMath> leads
              to smaller and smaller solutions forever.
            </span>
          </li>
          <li className="flex items-start gap-3">
            <span className="text-amber-400 font-bold">5.</span>
            <span>
              <strong>Egyptian fractions</strong> show that any fraction can be written
              as a sum of distinct unit fractions, proved by descent on the numerator.
            </span>
          </li>
        </ul>
      </div>

      {/* Section Quiz */}
      <SectionQuiz sectionId={0} questions={section00Questions} />
    </LessonLayout>
  );
}
