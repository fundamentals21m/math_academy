import { LessonLayout } from '../../components/layout/LessonLayout';
import { Callout } from '../../components/common/Callout';
import { Card, CardGrid, CardHeader } from '../../components/common/Card';
import { InlineMath, MathBlock } from '../../components/common/MathBlock';
import { SectionQuiz } from '../../components/quiz';
import { section51Questions } from '../../data/quizzes';

export default function Section51() {
  return (
    <LessonLayout sectionId={51}>
      <h2 className="text-2xl font-semibold mb-4">Hilbert's Tenth Problem</h2>

      <p className="text-dark-200 mb-6 text-lg leading-relaxed">
        Hilbert's tenth problem asked for an algorithm to determine whether any
        given polynomial Diophantine equation has a solution in integers. After
        important preliminary work by <strong>Martin Davis</strong>,{' '}
        <strong>Hilary Putnam</strong>, and <strong>Julia Robinson</strong>,{' '}
        <strong>Yuri Matiyasevič</strong> showed in 1970 that{' '}
        <em>no such algorithm exists</em>.
      </p>

      {/* The Problem */}
      <h3 className="text-xl font-semibold mt-8 mb-4">The Problem</h3>

      <Callout type="definition" title="Hilbert's 10th Problem (1900)">
        <p>
          Find an algorithm to determine whether any given polynomial
          Diophantine equation has a solution in integers.
        </p>
        <p className="text-sm mt-2">
          A <strong>Diophantine equation</strong> is a polynomial equation with
          integer coefficients where we seek integer solutions.
        </p>
      </Callout>

      <p className="text-dark-200 mb-4 mt-4">
        First, we can reduce the problem from <em>integers</em> to{' '}
        <em>positive integers</em> using <strong>Lagrange's Theorem</strong>:
        every positive integer <InlineMath>{`x`}</InlineMath> can be written as:
      </p>

      <MathBlock>{`x = x_0^2 + x_1^2 + x_2^2 + x_3^2 + 1`}</MathBlock>

      <Card className="mb-6 mt-4">
        <CardHeader>Example: Reducing to Positive Integers</CardHeader>
        <div className="text-dark-300 text-sm">
          <p>
            To test whether <InlineMath>{`x^{17} + y^{17} - z^{17} = 0`}</InlineMath>{' '}
            has a solution in positive integers, we test whether:
          </p>
          <MathBlock>{`(x_0^2 + x_1^2 + x_2^2 + x_3^2 + 1)^{17} + (y_0^2 + \\cdots + 1)^{17} - (z_0^2 + \\cdots + 1)^{17} = 0`}</MathBlock>
          <p className="mt-2">has a solution in integers.</p>
        </div>
      </Card>

      {/* Diophantine Sets */}
      <h3 className="text-xl font-semibold mt-8 mb-4">Diophantine Sets</h3>

      <Callout type="definition" title="Diophantine Set">
        <p>
          A set <InlineMath>{`A`}</InlineMath> of positive integers is{' '}
          <strong>Diophantine</strong> if there is a polynomial{' '}
          <InlineMath>{`p(t, x_1, \\ldots, x_n)`}</InlineMath> with integer
          coefficients such that:
        </p>
        <MathBlock>{`t \\in A \\iff \\exists x_1, \\ldots, x_n \\in \\mathbb{Z}^+ : p(t, x_1, \\ldots, x_n) = 0`}</MathBlock>
      </Callout>

      <Card className="mb-6 mt-4">
        <CardHeader>Example: Composite Numbers</CardHeader>
        <div className="text-dark-300 text-sm">
          <p>
            The set of <strong>composite</strong> positive integers is
            Diophantine. Define:
          </p>
          <MathBlock>{`p(t, x_1, x_2) \\equiv t - (x_1 + 1)(x_2 + 1) \\equiv t - x_1 x_2 - x_1 - x_2 - 1`}</MathBlock>
          <p className="mt-2">
            Then <InlineMath>{`t`}</InlineMath> is composite iff{' '}
            <InlineMath>{`p(t, x_1, x_2) = 0`}</InlineMath> has a solution in
            positive integers.
          </p>
        </div>
      </Card>

      {/* Key Lemmas */}
      <h3 className="text-xl font-semibold mt-8 mb-4">Key Lemmas</h3>

      <Callout type="theorem" title="Lemma 21.1">
        <p>
          Every Diophantine set is <strong>recursively enumerable</strong>.
        </p>
      </Callout>

      <Card className="mb-6 mt-4">
        <CardHeader>Proof Sketch</CardHeader>
        <div className="text-dark-300 text-sm">
          <p>
            Given <InlineMath>{`p(t, x_1, \\ldots, x_n)`}</InlineMath> and any
            positive integer <InlineMath>{`m`}</InlineMath>, let{' '}
            <InlineMath>{`S_m`}</InlineMath> be the set of all{' '}
            <InlineMath>{`(n+1)`}</InlineMath>-tuples of positive integers, each{' '}
            <InlineMath>{`\\leq m`}</InlineMath>.
          </p>
          <p className="mt-2">
            We enumerate elements of the Diophantine set by checking{' '}
            <InlineMath>{`S_1, S_2, \\ldots`}</InlineMath> in turn. Whenever we
            find a solution, we list its first member{' '}
            <InlineMath>{`t`}</InlineMath>.
          </p>
        </div>
      </Card>

      <Callout type="theorem" title="Lemma 21.2">
        <p>
          Suppose there is an algorithm for deciding whether, for any given{' '}
          <InlineMath>{`t`}</InlineMath>, the equation{' '}
          <InlineMath>{`p(t, x_1, \\ldots, x_n) = 0`}</InlineMath> has a solution
          in positive integers. Then the Diophantine set{' '}
          <InlineMath>{`A_p`}</InlineMath> is <strong>recursive</strong>.
        </p>
      </Callout>

      {/* Julia Robinson's Contribution */}
      <h3 className="text-xl font-semibold mt-8 mb-4">Julia Robinson's Lemma</h3>

      <p className="text-dark-200 mb-4">
        Julia Robinson's key insight connected exponential growth to
        Diophantine sets. Consider the <strong>Fibonacci sequence</strong>:
      </p>

      <MathBlock>{`F_m: 1, 1, 2, 3, 5, 8, 13, \\ldots`}</MathBlock>

      <p className="text-dark-200 mb-4 mt-4">
        where <InlineMath>{`F_{m+2} = F_{m+1} + F_m`}</InlineMath>. As shown
        earlier, <InlineMath>{`F_m`}</InlineMath> is the integer nearest to:
      </p>

      <MathBlock>{`\\frac{1}{\\sqrt{5}} \\left( \\frac{1 + \\sqrt{5}}{2} \\right)^m`}</MathBlock>

      <p className="text-dark-200 mb-4">
        This explains why rabbit populations (which Fibonacci studied) grow{' '}
        <strong>exponentially</strong>.
      </p>

      <Callout type="theorem" title="Lemma 21.3 (Julia Robinson)">
        <p>
          A sufficient condition for every recursively enumerable set to be
          Diophantine is that there exists a polynomial equation{' '}
          <InlineMath>{`p(u, v, x_2, \\ldots, x_n) = 0`}</InlineMath> with
          integer coefficients such that, in its positive integer solutions,{' '}
          <InlineMath>{`v`}</InlineMath> grows <strong>exponentially</strong>{' '}
          relative to <InlineMath>{`u`}</InlineMath>.
        </p>
      </Callout>

      {/* Matiyasevič's Theorem */}
      <h3 className="text-xl font-semibold mt-8 mb-4">Matiyasevič's Theorem</h3>

      <p className="text-dark-200 mb-4">
        In <strong>1970</strong>, Matiyasevič found a polynomial Diophantine
        equation whose <InlineMath>{`(m-1)`}</InlineMath>-th positive integer
        solution, for <InlineMath>{`m \\geq 2`}</InlineMath>, has the form:
      </p>

      <MathBlock>{`(m, F_{2m}, x_2, \\ldots, x_n)`}</MathBlock>

      <Callout type="theorem" title="Theorem 21.4 (Matiyasevič, 1970)">
        <p>
          Every recursively enumerable set of positive integers is{' '}
          <strong>Diophantine</strong>.
        </p>
      </Callout>

      <Card className="mb-6 mt-4">
        <CardHeader>The Conclusion</CardHeader>
        <div className="text-dark-300 text-sm space-y-2">
          <p>
            Combining Matiyasevič's theorem with the earlier lemmas:
          </p>
          <ul className="list-disc list-inside space-y-1">
            <li>
              A set is Diophantine <InlineMath>{`\\iff`}</InlineMath> it is
              recursively enumerable (by Lemma 21.1 and Theorem 21.4)
            </li>
            <li>
              Not every r.e. set is recursive (e.g., the set of theorems)
            </li>
            <li>
              By Lemma 21.2, there is <strong>no algorithm</strong> for testing
              whether any given polynomial equation has a solution
            </li>
          </ul>
          <p className="font-semibold mt-2">
            Hilbert's tenth problem is <strong>unsolvable</strong>.
          </p>
        </div>
      </Card>

      {/* Prime-Representing Polynomials */}
      <h3 className="text-xl font-semibold mt-8 mb-4">Prime-Representing Polynomials</h3>

      <p className="text-dark-200 mb-4">
        Matiyasevič's result has curious repercussions. Consider:
      </p>

      <CardGrid columns={2}>
        <Card>
          <CardHeader>Euler's Polynomial</CardHeader>
          <MathBlock>{`f(x) = x^2 - x + 41`}</MathBlock>
          <p className="text-dark-300 text-sm mt-2">
            For <InlineMath>{`x = 1, 2, \\ldots, 40`}</InlineMath>,{' '}
            <InlineMath>{`f(x)`}</InlineMath> is always prime. But{' '}
            <InlineMath>{`f(41) = 41^2`}</InlineMath> is not.
          </p>
        </Card>
        <Card>
          <CardHeader>A Subset of Primes</CardHeader>
          <MathBlock>{`g(x) = -x^2 + 3`}</MathBlock>
          <p className="text-dark-300 text-sm mt-2">
            The positive values are <InlineMath>{`\\{2, 3\\}`}</InlineMath> — a
            subset of the primes.
          </p>
        </Card>
      </CardGrid>

      <p className="text-dark-200 mb-4 mt-4">
        Two natural questions arise:
      </p>

      <Card className="mb-6">
        <div className="text-dark-300 text-sm space-y-2">
          <p>
            <strong>Q1:</strong> Is there a polynomial whose values for positive
            integer arguments are <em>all</em> prime?{' '}
            <strong className="text-red-400">No.</strong>
          </p>
          <p>
            <strong>Q2:</strong> Is there a polynomial whose positive values for
            positive integer arguments are <em>exactly</em> the primes?{' '}
            <strong className="text-green-400">Yes!</strong>
          </p>
        </div>
      </Card>

      <Callout type="theorem" title="Theorem 21.5 (Putnam)">
        <p>
          For any Diophantine set <InlineMath>{`A_p`}</InlineMath>, there is a
          polynomial <InlineMath>{`q(t, x_1, \\ldots, x_n)`}</InlineMath> with
          integer coefficients such that <InlineMath>{`A_p`}</InlineMath> is the
          set of all <strong>positive values</strong> of{' '}
          <InlineMath>{`q`}</InlineMath> for positive integer arguments.
        </p>
      </Callout>

      <Card className="mb-6 mt-4">
        <CardHeader>Proof</CardHeader>
        <div className="text-dark-300 text-sm">
          <p>
            Let <InlineMath>{`q(t, x_1, \\ldots, x_n) = t(1 - (p(t, x_1, \\ldots, x_n))^2)`}</InlineMath>.
          </p>
          <p className="mt-2">
            If <InlineMath>{`q(t, \\bar{x}) > 0`}</InlineMath>, then{' '}
            <InlineMath>{`1 > p(t, \\bar{x})^2`}</InlineMath>, so{' '}
            <InlineMath>{`p(t, \\bar{x}) = 0`}</InlineMath>, hence{' '}
            <InlineMath>{`t \\in A_p`}</InlineMath>.
          </p>
          <p className="mt-2">
            Conversely, if <InlineMath>{`t \\in A_p`}</InlineMath>, then{' '}
            <InlineMath>{`p(t, \\bar{x}) = 0`}</InlineMath> for some{' '}
            <InlineMath>{`\\bar{x}`}</InlineMath>, so{' '}
            <InlineMath>{`q(t, \\bar{x}) = t > 0`}</InlineMath>.
          </p>
        </div>
      </Card>

      <p className="text-dark-200 mb-4">
        Since the set of primes is recursively enumerable (hence Diophantine by
        Matiyasevič), there exists a polynomial whose positive values are
        exactly the primes!
      </p>

      {/* Key Contributors */}
      <h3 className="text-xl font-semibold mt-8 mb-4">Key Contributors</h3>

      <CardGrid columns={2}>
        <Card>
          <CardHeader>Julia Robinson</CardHeader>
          <p className="text-dark-300 text-sm">
            Developed crucial lemmas connecting exponential growth to
            Diophantine representability.
          </p>
        </Card>
        <Card>
          <CardHeader>Yuri Matiyasevič</CardHeader>
          <p className="text-dark-300 text-sm">
            Found the final piece in 1970, showing r.e. sets are Diophantine,
            proving Hilbert's 10th problem unsolvable.
          </p>
        </Card>
        <Card>
          <CardHeader>Martin Davis</CardHeader>
          <p className="text-dark-300 text-sm">
            Did important preliminary work on the problem over many years.
          </p>
        </Card>
        <Card>
          <CardHeader>Hilary Putnam</CardHeader>
          <p className="text-dark-300 text-sm">
            The philosopher contributed to the preliminary work and proved the
            prime-representing polynomial theorem.
          </p>
        </Card>
      </CardGrid>

      {/* Summary */}
      <h3 className="text-xl font-semibold mt-8 mb-4">Summary</h3>

      <div className="bg-dark-800 rounded-lg p-4 mb-6">
        <ul className="text-dark-200 space-y-2">
          <li>• <strong>Hilbert's 10th Problem</strong>: Find an algorithm for
            Diophantine equation solvability</li>
          <li>• <strong>Diophantine set</strong>:{' '}
            <InlineMath>{`t \\in A`}</InlineMath> iff{' '}
            <InlineMath>{`p(t, \\bar{x}) = 0`}</InlineMath> has a solution</li>
          <li>• <strong>Lemma 21.1</strong>: Every Diophantine set is r.e.</li>
          <li>• <strong>Julia Robinson</strong>: Exponential growth suffices for
            r.e. = Diophantine</li>
          <li>• <strong>Matiyasevič (1970)</strong>: Every r.e. set is
            Diophantine</li>
          <li>• <strong>Conclusion</strong>: Diophantine = r.e., but not all r.e.
            sets are recursive</li>
          <li>• <strong>Result</strong>: Hilbert's 10th problem is{' '}
            <strong>unsolvable</strong></li>
          <li>• <strong>Putnam</strong>: There exists a prime-representing
            polynomial</li>
        </ul>
      </div>

      {/* Section Quiz */}
      <SectionQuiz sectionId={51} questions={section51Questions} />
    </LessonLayout>
  );
}
