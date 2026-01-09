import { LessonLayout } from '@/components/layout/LessonLayout';
import { Definition, Theorem, Example } from '@/components/common/ContentBlocks';
import { Callout } from '@/components/common/Callout';
import { MathBlock, InlineMath } from '@/components/common/MathBlock';
import { SectionQuiz } from '@/components/quiz/SectionQuiz';
import { quizMap } from '@/data/quizzes';

export default function Section39() {
  return (
    <LessonLayout sectionId={39}>
      <h2>Convergence Questions</h2>

      <p>
        The 18th century mathematicians manipulated infinite series with
        remarkable freedom and success. But paradoxes emerged: some series
        seemed to have multiple values, or no value at all. The 19th century
        brought a reckoning—when do infinite sums actually make sense?
      </p>

      <Callout type="warning">
        <strong>The Problem:</strong> Is <InlineMath>1 - 1 + 1 - 1 + 1 - \cdots</InlineMath>{' '}
        equal to 0, 1, or 1/2? Different groupings give different answers!
        This shows that intuition about finite sums doesn't always extend
        to infinite ones.
      </Callout>

      <h3>Cauchy's Definition</h3>

      <p>
        Augustin-Louis Cauchy (1789-1857) provided the rigorous foundation
        that infinite series desperately needed:
      </p>

      <Definition title="Convergence of a Series (Cauchy, 1821)">
        <p>
          The infinite series <InlineMath>{`\\sum_{n=1}^{\\infty} a_n`}</InlineMath>{' '}
          <strong>converges</strong> to sum <InlineMath>S</InlineMath> if the
          sequence of partial sums <InlineMath>{`S_N = a_1 + a_2 + \\cdots + a_N`}</InlineMath>{' '}
          converges to <InlineMath>S</InlineMath>:
        </p>
        <MathBlock>
          {`\\lim_{N \\to \\infty} S_N = S`}
        </MathBlock>
        <p className="mt-2 text-dark-400">
          That is, for every <InlineMath>{`\\varepsilon > 0`}</InlineMath>, there
          exists <InlineMath>N_0</InlineMath> such that{' '}
          <InlineMath>{`|S_N - S| < \\varepsilon`}</InlineMath> for all{' '}
          <InlineMath>{`N > N_0`}</InlineMath>.
        </p>
      </Definition>

      <p>
        This definition immediately settles our troublesome series:
      </p>

      <Example title="A Divergent Series">
        <p>For <InlineMath>1 - 1 + 1 - 1 + \cdots</InlineMath>:</p>
        <ul className="list-disc list-inside mt-2 space-y-1">
          <li><InlineMath>S_1 = 1</InlineMath></li>
          <li><InlineMath>S_2 = 1 - 1 = 0</InlineMath></li>
          <li><InlineMath>S_3 = 1 - 1 + 1 = 1</InlineMath></li>
          <li><InlineMath>S_4 = 1 - 1 + 1 - 1 = 0</InlineMath></li>
        </ul>
        <p className="mt-2">
          The partial sums oscillate between 0 and 1 forever—they don't
          approach any limit. The series <strong>diverges</strong>.
        </p>
      </Example>

      <h3>The Cauchy Criterion</h3>

      <p>
        Cauchy also gave a test that doesn't require knowing the limit in advance:
      </p>

      <Theorem title="Cauchy Criterion for Series">
        <p>
          A series <InlineMath>{`\\sum a_n`}</InlineMath> converges if and only if
          for every <InlineMath>{`\\varepsilon > 0`}</InlineMath>, there exists{' '}
          <InlineMath>N</InlineMath> such that for all <InlineMath>{`m > n > N`}</InlineMath>:
        </p>
        <MathBlock>
          {`|a_{n+1} + a_{n+2} + \\cdots + a_m| < \\varepsilon`}
        </MathBlock>
        <p className="mt-2 text-dark-400">
          In words: the "tails" of partial sums can be made arbitrarily small.
        </p>
      </Theorem>

      <h3>Tests for Convergence</h3>

      <p>
        Mathematicians developed various tests to determine convergence without
        computing the sum:
      </p>

      <Definition title="Absolute Convergence">
        <p>
          A series <InlineMath>{`\\sum a_n`}</InlineMath> <strong>converges absolutely</strong>{' '}
          if <InlineMath>{`\\sum |a_n|`}</InlineMath> converges.
        </p>
        <p className="mt-2 text-dark-400">
          Absolute convergence implies ordinary convergence, but not vice versa.
        </p>
      </Definition>

      <Theorem title="Comparison Test">
        <p>If <InlineMath>{`0 \\leq a_n \\leq b_n`}</InlineMath> for all <InlineMath>n</InlineMath>:</p>
        <ul className="list-disc list-inside mt-2">
          <li>If <InlineMath>{`\\sum b_n`}</InlineMath> converges, so does <InlineMath>{`\\sum a_n`}</InlineMath></li>
          <li>If <InlineMath>{`\\sum a_n`}</InlineMath> diverges, so does <InlineMath>{`\\sum b_n`}</InlineMath></li>
        </ul>
      </Theorem>

      <Theorem title="Ratio Test (d'Alembert)">
        <p>
          If <InlineMath>{`\\lim_{n\\to\\infty} \\left|\\frac{a_{n+1}}{a_n}\\right| = L`}</InlineMath>:
        </p>
        <ul className="list-disc list-inside mt-2">
          <li>If <InlineMath>{`L < 1`}</InlineMath>, the series converges absolutely</li>
          <li>If <InlineMath>{`L > 1`}</InlineMath>, the series diverges</li>
          <li>If <InlineMath>L = 1</InlineMath>, the test is inconclusive</li>
        </ul>
      </Theorem>

      <h3>Conditional Convergence</h3>

      <p>
        Some series converge but not absolutely. These exhibit strange behavior:
      </p>

      <Example title="The Alternating Harmonic Series">
        <MathBlock>
          {`1 - \\frac{1}{2} + \\frac{1}{3} - \\frac{1}{4} + \\frac{1}{5} - \\cdots = \\ln 2`}
        </MathBlock>
        <p className="mt-2">
          This series converges (to <InlineMath>\ln 2</InlineMath>), but the
          series of absolute values is the harmonic series{' '}
          <InlineMath>{`\\sum \\frac{1}{n}`}</InlineMath>, which diverges!
        </p>
      </Example>

      <Theorem title="Riemann Rearrangement Theorem (1854)">
        <p>
          If a series converges conditionally (but not absolutely), then its
          terms can be rearranged to converge to <strong>any</strong> real
          number, or to diverge!
        </p>
      </Theorem>

      <Callout type="note">
        <strong>Surprising Consequence:</strong> The alternating harmonic
        series can be rearranged to sum to <InlineMath>\pi</InlineMath>,
        or to 0, or to 1000, or to <InlineMath>-\infty</InlineMath>.
        The order of terms matters for conditionally convergent series!
      </Callout>

      <h3>Power Series</h3>

      <p>
        A particularly important class of series are power series, which have
        a well-defined "radius of convergence":
      </p>

      <Definition title="Power Series">
        <p>A power series centered at <InlineMath>a</InlineMath> has the form:</p>
        <MathBlock>
          {`\\sum_{n=0}^{\\infty} c_n(x-a)^n = c_0 + c_1(x-a) + c_2(x-a)^2 + \\cdots`}
        </MathBlock>
      </Definition>

      <Theorem title="Radius of Convergence">
        <p>
          For any power series, there exists a number <InlineMath>R</InlineMath>{' '}
          (possibly <InlineMath>0</InlineMath> or <InlineMath>\infty</InlineMath>)
          called the <strong>radius of convergence</strong> such that:
        </p>
        <ul className="list-disc list-inside mt-2">
          <li>The series converges absolutely if <InlineMath>{`|x-a| < R`}</InlineMath></li>
          <li>The series diverges if <InlineMath>{`|x-a| > R`}</InlineMath></li>
        </ul>
        <MathBlock>
          {`R = \\frac{1}{\\limsup_{n\\to\\infty} \\sqrt[n]{|c_n|}}`}
        </MathBlock>
      </Theorem>

      <Example title="Different Radii">
        <ul className="list-disc list-inside space-y-2">
          <li>
            <InlineMath>{`\\sum x^n`}</InlineMath> (geometric series): <InlineMath>R = 1</InlineMath>
          </li>
          <li>
            <InlineMath>{`\\sum \\frac{x^n}{n!}`}</InlineMath> (exponential): <InlineMath>{`R = \\infty`}</InlineMath>
          </li>
          <li>
            <InlineMath>{`\\sum n! \\, x^n`}</InlineMath>: <InlineMath>R = 0</InlineMath>{' '}
            (converges only at <InlineMath>x = 0</InlineMath>)
          </li>
        </ul>
      </Example>

      <h3>Uniform Convergence</h3>

      <p>
        When does a series of functions converge to a continuous function?
        Weierstrass introduced a stronger notion:
      </p>

      <Definition title="Uniform Convergence">
        <p>
          A sequence of functions <InlineMath>{`f_n`}</InlineMath> converges
          <strong> uniformly</strong> to <InlineMath>f</InlineMath> on an
          interval <InlineMath>I</InlineMath> if for every{' '}
          <InlineMath>{`\\varepsilon > 0`}</InlineMath>, there exists{' '}
          <InlineMath>N</InlineMath> such that for all <InlineMath>{`n > N`}</InlineMath>{' '}
          and all <InlineMath>{`x \\in I`}</InlineMath>:
        </p>
        <MathBlock>
          {`|f_n(x) - f(x)| < \\varepsilon`}
        </MathBlock>
        <p className="mt-2 text-dark-400">
          The key is that the same <InlineMath>N</InlineMath> works for all{' '}
          <InlineMath>x</InlineMath> simultaneously.
        </p>
      </Definition>

      <Theorem title="Weierstrass M-test">
        <p>
          If <InlineMath>{`|f_n(x)| \\leq M_n`}</InlineMath> for all{' '}
          <InlineMath>x</InlineMath> in an interval, and{' '}
          <InlineMath>{`\\sum M_n`}</InlineMath> converges, then{' '}
          <InlineMath>{`\\sum f_n(x)`}</InlineMath> converges uniformly.
        </p>
      </Theorem>

      <Callout type="info">
        <strong>Why It Matters:</strong> Uniform convergence preserves
        continuity—the limit of uniformly convergent continuous functions
        is continuous. Term-by-term integration is also valid under uniform
        convergence. These were the tools needed to rigorize Euler's bold
        calculations.
      </Callout>

      <SectionQuiz sectionId={39} questions={quizMap[39] || []} title="Check Your Understanding" />
    </LessonLayout>
  );
}
