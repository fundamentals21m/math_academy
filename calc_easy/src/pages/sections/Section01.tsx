import { LessonLayout } from '@/components/layout/LessonLayout';
import { Callout } from '@/components/common/Callout';
import { MathBlock } from '@/components/common/MathBlock';

export default function Section01() {
  return (
    <LessonLayout sectionId={1}>
      <h2>What Is a Limit?</h2>

      <p>
        It is possible, though difficult, to understand calculus without a firm grasp
        on the meaning of a limit. A derivative, the fundamental concept of differential
        calculus, <em>is</em> a limit. An integral, the fundamental concept of integral
        calculus, <em>is</em> a limit.
      </p>

      <Callout type="info">
        <strong>The Big Idea:</strong> A limit describes what value a sequence or
        function approaches as we get closer and closer to some point—even if we never
        actually reach it.
      </Callout>

      <h2>Sequences and Series</h2>

      <p>
        A <strong>sequence</strong> is a set of numbers in some order. Consider the
        sequence 1, 2, 3, 4, ... This is the positive integers—an infinite sequence
        because it continues without stopping.
      </p>

      <p>
        If the terms of a finite sequence are added to obtain a finite sum, it is
        called a <strong>series</strong>. If a series is infinite, the sum up to any
        specified term is called a "partial sum." If the partial sums get closer and
        closer to a number <em>k</em>, then <em>k</em> is called the <strong>limit</strong>
        of the series.
      </p>

      <h2>Zeno's Paradox</h2>

      <p>
        The fifth century B.C. Greek philosopher Zeno of Elia invented several famous
        paradoxes about motion. One involves a runner going from A to B:
      </p>

      <div className="bg-dark-800/50 rounded-xl p-4 border border-dark-700 my-6">
        <p className="text-dark-300">
          He first runs half the distance, then half the remaining distance, then again
          half the remaining distance, and so on. The distances form the halving series:
        </p>
        <MathBlock math="\frac{1}{2} + \frac{1}{4} + \frac{1}{8} + \frac{1}{16} + \ldots" />
        <p className="text-dark-400 text-sm mt-2">
          Does the runner ever reach the goal? The series converges to 1!
        </p>
      </div>

      <h2>Three Ways to Converge</h2>

      <p>An infinite series can converge on its limit in three different ways:</p>

      <ol className="list-decimal list-inside space-y-2 my-6 text-dark-300">
        <li>The partial sums get ever closer to the limit without actually reaching it,
            but they never go beyond the limit.</li>
        <li>The partial sums reach the limit.</li>
        <li>The partial sums go beyond the limit before they converge.</li>
      </ol>

      <h2>The Halving Series</h2>

      <p>
        To prove that the halving series converges to 2, let <em>x</em> equal the
        entire series:
      </p>

      <MathBlock math="x = 1 + \frac{1}{2} + \frac{1}{4} + \frac{1}{8} + \ldots" />

      <p>Multiply each side by 2:</p>

      <MathBlock math="2x = 2 + 1 + \frac{1}{2} + \frac{1}{4} + \ldots" />

      <p>
        Note that the series beyond 2 is the same as the original series <em>x</em>.
        So we can substitute:
      </p>

      <MathBlock math="2x = 2 + x" />
      <MathBlock math="x = 2" />

      <h2>The Harmonic Series</h2>

      <p>
        You might suppose that if the terms of an infinite series get smaller and
        smaller, the series must converge. This is far from true! The most famous
        example is the <strong>harmonic series</strong>:
      </p>

      <MathBlock math="\frac{1}{1} + \frac{1}{2} + \frac{1}{3} + \frac{1}{4} + \frac{1}{5} + \ldots" />

      <p>
        Although its fractions get progressively smaller, converging on zero, its
        partial sums grow without limit! The growth is infuriatingly slow—after a
        hundred terms the partial sum is only a bit higher than 5. To reach a sum of
        100 requires more than 10<sup>43</sup> terms!
      </p>

      <Callout type="success">
        <strong>Key Insight:</strong> As Thompson likes to say, infinitesimals can be
        "thrown away" because they get so close to zero. In early books on calculus,
        terms said to become infinitely close to zero were called "infinitesimals."
      </Callout>
    </LessonLayout>
  );
}
