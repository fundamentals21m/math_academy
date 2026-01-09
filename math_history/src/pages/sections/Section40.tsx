import { LessonLayout } from '@/components/layout/LessonLayout';
import { Definition, Theorem, Example } from '@/components/common/ContentBlocks';
import { Callout } from '@/components/common/Callout';
import { MathBlock, InlineMath } from '@/components/common/MathBlock';
import { SectionQuiz } from '@/components/quiz/SectionQuiz';
import { quizMap } from '@/data/quizzes';

export default function Section40() {
  return (
    <LessonLayout sectionId={40}>
      <h2>The Riemann Zeta Function</h2>

      <p>
        What began as Euler's study of infinite sums became, in Riemann's hands,
        one of the most profound objects in all of mathematics. The zeta function
        connects number theory, analysis, and geometry in ways that still
        challenge and inspire mathematicians today.
      </p>

      <Callout type="info">
        <strong>The Million-Dollar Question:</strong> The Riemann Hypothesis,
        concerning the zeros of this function, is one of the Clay Millennium
        Problems—with a $1,000,000 prize for its solution.
      </Callout>

      <h3>From Euler to Riemann</h3>

      <p>
        Euler studied the series for real values <InlineMath>{`s > 1`}</InlineMath>:
      </p>

      <Definition title="The Zeta Function (Euler)">
        <MathBlock>
          {`\\zeta(s) = \\sum_{n=1}^{\\infty} \\frac{1}{n^s} = 1 + \\frac{1}{2^s} + \\frac{1}{3^s} + \\frac{1}{4^s} + \\cdots`}
        </MathBlock>
        <p className="mt-2 text-dark-400">
          This converges for <InlineMath>{`s > 1`}</InlineMath> and diverges for{' '}
          <InlineMath>{`s \\leq 1`}</InlineMath>.
        </p>
      </Definition>

      <p>
        Euler's product formula revealed the connection to primes:
      </p>

      <MathBlock>
        {`\\zeta(s) = \\prod_{p \\text{ prime}} \\frac{1}{1-p^{-s}}`}
      </MathBlock>

      <h3>Riemann's Revolutionary Paper</h3>

      <p>
        In 1859, Bernhard Riemann published one of the most influential papers
        in mathematics history: "On the Number of Primes Less Than a Given
        Magnitude." In just eight pages, he:
      </p>

      <ul className="list-disc list-inside space-y-2 mt-4">
        <li>Extended <InlineMath>\zeta(s)</InlineMath> to all complex numbers</li>
        <li>Proved a functional equation relating <InlineMath>{`\\zeta(s)`}</InlineMath> and <InlineMath>{`\\zeta(1-s)`}</InlineMath></li>
        <li>Connected the zeros of <InlineMath>\zeta</InlineMath> to the distribution of primes</li>
        <li>Made the famous hypothesis about where these zeros lie</li>
      </ul>

      <h3>Analytic Continuation</h3>

      <p>
        The series <InlineMath>{`\\sum n^{-s}`}</InlineMath> only makes sense for{' '}
        <InlineMath>{`\\text{Re}(s) > 1`}</InlineMath>. But Riemann showed there is a
        unique way to extend <InlineMath>\zeta</InlineMath> to the entire complex
        plane (except for a pole at <InlineMath>s = 1</InlineMath>):
      </p>

      <Theorem title="Analytic Continuation of Zeta">
        <p>
          The function <InlineMath>{`\\zeta(s)`}</InlineMath> extends to a
          meromorphic function on the entire complex plane, with a simple pole
          at <InlineMath>s = 1</InlineMath> with residue 1.
        </p>
      </Theorem>

      <Example title="Values at Negative Integers">
        <p>Through analytic continuation, we can assign values like:</p>
        <MathBlock>
          {`\\zeta(0) = -\\frac{1}{2}`}
        </MathBlock>
        <MathBlock>
          {`\\zeta(-1) = -\\frac{1}{12}`}
        </MathBlock>
        <MathBlock>
          {`\\zeta(-2) = 0`}
        </MathBlock>
        <p className="mt-2 text-dark-400">
          The infamous equation <InlineMath>{`1 + 2 + 3 + 4 + \\cdots = -1/12`}</InlineMath>{' '}
          comes from <InlineMath>{`\\zeta(-1)`}</InlineMath>—not as a sum in the
          usual sense, but as a value of the analytically continued function.
        </p>
      </Example>

      <h3>The Functional Equation</h3>

      <p>
        Riemann discovered a beautiful symmetry relating values of zeta at{' '}
        <InlineMath>s</InlineMath> and <InlineMath>1 - s</InlineMath>:
      </p>

      <Theorem title="Riemann's Functional Equation">
        <MathBlock>
          {`\\zeta(s) = 2^s \\pi^{s-1} \\sin\\left(\\frac{\\pi s}{2}\\right) \\Gamma(1-s) \\zeta(1-s)`}
        </MathBlock>
        <p className="mt-2">
          This relates <InlineMath>{`\\zeta(s)`}</InlineMath> for{' '}
          <InlineMath>{`\\text{Re}(s) < 0`}</InlineMath> to values for{' '}
          <InlineMath>{`\\text{Re}(s) > 1`}</InlineMath>.
        </p>
      </Theorem>

      <Callout type="note">
        <strong>The Critical Strip:</strong> The functional equation and the
        Euler product together constrain where the zeros of zeta can be. The
        interesting zeros must lie in the "critical strip" where{' '}
        <InlineMath>{`0 < \\text{Re}(s) < 1`}</InlineMath>.
      </Callout>

      <h3>The Zeros of Zeta</h3>

      <p>
        The zeta function has two types of zeros:
      </p>

      <Definition title="Trivial and Non-trivial Zeros">
        <p><strong>Trivial zeros:</strong> <InlineMath>{`\\zeta(s) = 0`}</InlineMath>{' '}
        at <InlineMath>s = -2, -4, -6, \ldots</InlineMath> (the negative even integers).</p>
        <p className="mt-2">
          <strong>Non-trivial zeros:</strong> All other zeros, which must lie
          in the critical strip <InlineMath>{`0 < \\text{Re}(s) < 1`}</InlineMath>.
        </p>
      </Definition>

      <p>
        Riemann computed the first few non-trivial zeros and observed something
        remarkable:
      </p>

      <Theorem title="The Riemann Hypothesis (1859)">
        <p>
          <strong>Conjecture:</strong> All non-trivial zeros of{' '}
          <InlineMath>{`\\zeta(s)`}</InlineMath> have real part exactly{' '}
          <InlineMath>1/2</InlineMath>.
        </p>
        <p className="mt-2 text-dark-400">
          That is, they all lie on the "critical line"{' '}
          <InlineMath>{`\\text{Re}(s) = 1/2`}</InlineMath>.
        </p>
      </Theorem>

      <h3>Connection to Prime Numbers</h3>

      <p>
        The profound connection between zeta and primes comes through the
        prime counting function <InlineMath>{`\\pi(x)`}</InlineMath>:
      </p>

      <Definition title="Prime Counting Function">
        <p>
          <InlineMath>{`\\pi(x)`}</InlineMath> = the number of primes ≤{' '}
          <InlineMath>x</InlineMath>.
        </p>
        <p className="mt-2">
          For example: <InlineMath>{`\\pi(10) = 4`}</InlineMath> (the primes
          2, 3, 5, 7).
        </p>
      </Definition>

      <Theorem title="The Explicit Formula">
        <p>
          Riemann showed that <InlineMath>{`\\pi(x)`}</InlineMath> can be
          expressed as a sum involving the zeros of zeta:
        </p>
        <MathBlock>
          {`\\pi(x) = \\text{Li}(x) - \\sum_{\\rho} \\text{Li}(x^\\rho) + \\text{(smaller terms)}`}
        </MathBlock>
        <p className="mt-2">
          where the sum is over all non-trivial zeros <InlineMath>\rho</InlineMath>{' '}
          and <InlineMath>{`\\text{Li}(x) = \\int_0^x \\frac{dt}{\\ln t}`}</InlineMath>{' '}
          is the logarithmic integral.
        </p>
      </Theorem>

      <p>
        This is why the Riemann Hypothesis matters: the location of the zeros
        controls how "randomly" the primes are distributed. If RH is true,
        we get the best possible estimates for <InlineMath>{`\\pi(x)`}</InlineMath>.
      </p>

      <h3>Evidence and Progress</h3>

      <p>
        The Riemann Hypothesis remains unproven after 165+ years, but there
        is strong evidence:
      </p>

      <Example title="Computational Verification">
        <p>
          Over <InlineMath>10^{'{13}'}</InlineMath> zeros have been computed—all
          on the critical line. Not a single counterexample has been found.
        </p>
      </Example>

      <ul className="list-disc list-inside space-y-2 mt-4">
        <li>
          <strong>Hardy (1914):</strong> Proved infinitely many zeros lie on
          the critical line.
        </li>
        <li>
          <strong>Selberg (1942):</strong> A positive proportion of zeros are
          on the critical line.
        </li>
        <li>
          <strong>Conrey (1989):</strong> At least 40% of zeros are on the
          critical line.
        </li>
      </ul>

      <Callout type="warning">
        <strong>Implications of RH:</strong> The Riemann Hypothesis has
        hundreds of consequences—results in number theory, cryptography,
        random matrix theory, and physics that are proven conditional on
        RH being true. Its resolution would be one of the greatest
        achievements in mathematics.
      </Callout>

      <h3>The Zeta Function in Modern Mathematics</h3>

      <p>
        The zeta function has become a prototype for a vast generalization:
      </p>

      <ul className="list-disc list-inside space-y-2 mt-4">
        <li>
          <strong>Dirichlet L-functions:</strong> Generalizations that encode
          prime behavior in arithmetic progressions.
        </li>
        <li>
          <strong>Dedekind zeta functions:</strong> Analogues for algebraic
          number fields.
        </li>
        <li>
          <strong>The Langlands Program:</strong> A vast web of conjectures
          connecting these functions across mathematics.
        </li>
        <li>
          <strong>Random matrix theory:</strong> The zeros of zeta appear to
          follow the same statistics as eigenvalues of random matrices—a
          mysterious connection still being explored.
        </li>
      </ul>

      <SectionQuiz sectionId={40} questions={quizMap[40] || []} title="Check Your Understanding" />
    </LessonLayout>
  );
}
