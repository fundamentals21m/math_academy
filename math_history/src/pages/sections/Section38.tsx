import { LessonLayout } from '@/components/layout/LessonLayout';
import { Definition, Theorem, Example } from '@/components/common/ContentBlocks';
import { Callout } from '@/components/common/Callout';
import { MathBlock, InlineMath } from '@/components/common/MathBlock';
import { SectionQuiz } from '@/components/quiz/SectionQuiz';
import { quizMap } from '@/data/quizzes';

export default function Section38() {
  return (
    <LessonLayout sectionId={38}>
      <h2>Euler's Discoveries</h2>

      <p>
        Leonhard Euler (1707-1783) was the most prolific mathematician in
        history, contributing fundamental results to every branch of mathematics
        known in his time. His work with infinite series was particularly
        remarkable—he discovered identities and summation formulas that still
        astonish us today.
      </p>

      <Callout type="info">
        <strong>The Basel Problem:</strong> One of Euler's most celebrated
        achievements was solving a problem that had stumped mathematicians for
        nearly a century—finding the exact value of <InlineMath>{`\\sum_{n=1}^{\\infty} \\frac{1}{n^2}`}</InlineMath>.
      </Callout>

      <h3>The Basel Problem</h3>

      <p>
        Pietro Mengoli posed this problem in 1644: what is the sum of the
        reciprocals of the perfect squares?
      </p>

      <MathBlock>
        {`1 + \\frac{1}{4} + \\frac{1}{9} + \\frac{1}{16} + \\frac{1}{25} + \\cdots = ?`}
      </MathBlock>

      <p>
        Mathematicians knew the sum converged (it's bounded by <InlineMath>{`1 + \\int_1^\\infty x^{-2}dx = 2`}</InlineMath>),
        but finding the exact value seemed impossible. The Bernoulli brothers
        tried and failed.
      </p>

      <Theorem title="Euler's Solution (1734)">
        <MathBlock>
          {`\\sum_{n=1}^{\\infty} \\frac{1}{n^2} = \\frac{\\pi^2}{6}`}
        </MathBlock>
        <p className="mt-2 text-dark-400">
          This was shocking—what could <InlineMath>\pi</InlineMath>, a number
          from geometry, possibly have to do with sums of reciprocal squares?
        </p>
      </Theorem>

      <Example title="Euler's Ingenious Method">
        <p>Euler used the Taylor series for sine:</p>
        <MathBlock>
          {`\\sin x = x - \\frac{x^3}{3!} + \\frac{x^5}{5!} - \\cdots`}
        </MathBlock>
        <p className="mt-2">
          He treated <InlineMath>{`\\frac{\\sin x}{x}`}</InlineMath> as a
          polynomial with roots at <InlineMath>{`\\pm\\pi, \\pm 2\\pi, \\pm 3\\pi, \\ldots`}</InlineMath>:
        </p>
        <MathBlock>
          {`\\frac{\\sin x}{x} = \\left(1 - \\frac{x^2}{\\pi^2}\\right)\\left(1 - \\frac{x^2}{4\\pi^2}\\right)\\left(1 - \\frac{x^2}{9\\pi^2}\\right)\\cdots`}
        </MathBlock>
        <p className="mt-2">
          Expanding and comparing the coefficient of <InlineMath>x^2</InlineMath>
          on both sides gives the result!
        </p>
      </Example>

      <Callout type="warning">
        <strong>Bold but not rigorous:</strong> Euler's argument treats an
        infinite series as a polynomial with infinitely many roots. This
        needed careful justification, which came later from Weierstrass.
        But Euler's intuition was correct!
      </Callout>

      <h3>The Most Beautiful Equation</h3>

      <p>
        Euler discovered the profound relationship between the exponential
        function and trigonometry through complex numbers:
      </p>

      <Theorem title="Euler's Formula">
        <MathBlock>
          {`e^{ix} = \\cos x + i\\sin x`}
        </MathBlock>
        <p className="mt-2">
          This connects the exponential, trigonometric, and imaginary unit in
          one elegant identity.
        </p>
      </Theorem>

      <p>
        Euler derived this by comparing the Taylor series. Starting with:
      </p>

      <MathBlock>
        {`e^{ix} = 1 + ix + \\frac{(ix)^2}{2!} + \\frac{(ix)^3}{3!} + \\frac{(ix)^4}{4!} + \\cdots`}
      </MathBlock>

      <p>
        Using <InlineMath>i^2 = -1</InlineMath>, <InlineMath>i^3 = -i</InlineMath>,{' '}
        <InlineMath>i^4 = 1</InlineMath>, etc., this becomes:
      </p>

      <MathBlock>
        {`e^{ix} = \\left(1 - \\frac{x^2}{2!} + \\frac{x^4}{4!} - \\cdots\\right) + i\\left(x - \\frac{x^3}{3!} + \\frac{x^5}{5!} - \\cdots\\right)`}
      </MathBlock>

      <p>
        Which is precisely <InlineMath>{`\\cos x + i\\sin x`}</InlineMath>!
      </p>

      <Theorem title="Euler's Identity">
        <p>Setting <InlineMath>{`x = \\pi`}</InlineMath> in Euler's formula:</p>
        <MathBlock>
          {`e^{i\\pi} + 1 = 0`}
        </MathBlock>
        <p className="mt-2 text-dark-400">
          This single equation links the five most important constants in
          mathematics: <InlineMath>e</InlineMath>, <InlineMath>i</InlineMath>,{' '}
          <InlineMath>\pi</InlineMath>, <InlineMath>1</InlineMath>, and{' '}
          <InlineMath>0</InlineMath>.
        </p>
      </Theorem>

      <h3>Euler's Product Formula</h3>

      <p>
        Euler discovered a remarkable connection between infinite sums and
        infinite products—specifically, between the natural numbers and the
        prime numbers:
      </p>

      <Theorem title="Euler Product (1737)">
        <p>For <InlineMath>{`s > 1`}</InlineMath>:</p>
        <MathBlock>
          {`\\sum_{n=1}^{\\infty} \\frac{1}{n^s} = \\prod_{p \\text{ prime}} \\frac{1}{1 - p^{-s}}`}
        </MathBlock>
        <p className="mt-2">
          The sum over all positive integers equals a product over all primes!
        </p>
      </Theorem>

      <Example title="Understanding the Product">
        <p>
          Each factor <InlineMath>{`\\frac{1}{1-p^{-s}}`}</InlineMath> expands as
          a geometric series:
        </p>
        <MathBlock>
          {`\\frac{1}{1-p^{-s}} = 1 + \\frac{1}{p^s} + \\frac{1}{p^{2s}} + \\frac{1}{p^{3s}} + \\cdots`}
        </MathBlock>
        <p className="mt-2">
          When you multiply all these series together (for all primes), every
          term <InlineMath>{`\\frac{1}{n^s}`}</InlineMath> appears exactly once,
          because every positive integer has a unique prime factorization.
        </p>
      </Example>

      <Callout type="note">
        <strong>Number Theory Connection:</strong> Euler used this product
        to give a new proof that there are infinitely many primes. If there
        were only finitely many primes, the product would be finite, but
        the sum diverges at <InlineMath>s = 1</InlineMath> (the harmonic series).
      </Callout>

      <h3>More Remarkable Sums</h3>

      <p>
        Euler evaluated many other infinite sums that had seemed intractable:
      </p>

      <Example title="Higher Powers of Reciprocals">
        <MathBlock>
          {`\\sum_{n=1}^{\\infty} \\frac{1}{n^4} = \\frac{\\pi^4}{90}`}
        </MathBlock>
        <MathBlock>
          {`\\sum_{n=1}^{\\infty} \\frac{1}{n^6} = \\frac{\\pi^6}{945}`}
        </MathBlock>
        <p className="mt-2 text-dark-400">
          Euler found formulas for all even powers—they all involve powers of{' '}
          <InlineMath>\pi</InlineMath> and rational numbers.
        </p>
      </Example>

      <p>
        Euler also computed alternating series:
      </p>

      <MathBlock>
        {`1 - \\frac{1}{3} + \\frac{1}{5} - \\frac{1}{7} + \\cdots = \\frac{\\pi}{4}`}
      </MathBlock>

      <p>
        (This is the Leibniz formula, which Euler re-derived through
        his methods.)
      </p>

      <h3>Euler's Legacy in Series</h3>

      <p>
        Euler's fearless manipulation of infinite series, though sometimes
        lacking rigor by modern standards, led to correct and profound results:
      </p>

      <ul className="list-disc list-inside space-y-2 mt-4">
        <li>
          <strong>Zeta function values:</strong> <InlineMath>{`\\zeta(2k) = \\frac{(-1)^{k+1}B_{2k}(2\\pi)^{2k}}{2(2k)!}`}</InlineMath>{' '}
          where <InlineMath>B_{'{2k}'}</InlineMath> are Bernoulli numbers.
        </li>
        <li>
          <strong>Gamma function:</strong> Extending factorials to all complex numbers.
        </li>
        <li>
          <strong>Partition function:</strong> Generating functions for counting
          partitions of integers.
        </li>
        <li>
          <strong>Constant <InlineMath>\gamma</InlineMath>:</strong> The
          Euler-Mascheroni constant arising from the harmonic series.
        </li>
      </ul>

      <Callout type="info">
        <strong>The Euler-Mascheroni Constant:</strong> Euler discovered that{' '}
        <InlineMath>{`1 + \\frac{1}{2} + \\cdots + \\frac{1}{n} - \\ln n`}</InlineMath>{' '}
        approaches a limit <InlineMath>{`\\gamma \\approx 0.5772`}</InlineMath>.
        Whether <InlineMath>\gamma</InlineMath> is rational or irrational
        remains unknown to this day!
      </Callout>

      <SectionQuiz sectionId={38} questions={quizMap[38] || []} title="Check Your Understanding" />
    </LessonLayout>
  );
}
