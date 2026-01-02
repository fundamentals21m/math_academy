import { LessonLayout } from '../../components/layout/LessonLayout';
import { Callout } from '../../components/common/Callout';
import { Card, CardGrid, CardHeader } from '../../components/common/Card';
import { InlineMath, MathBlock } from '../../components/common/MathBlock';
import { SectionQuiz } from '../../components/quiz';
import { section47Questions } from '../../data/quizzes';

export default function Section47() {
  return (
    <LessonLayout sectionId={47}>
      <h2 className="text-2xl font-semibold mb-4">Quadratic Surds</h2>

      <p className="text-dark-200 mb-6 text-lg leading-relaxed">
        Let <InlineMath>{`d`}</InlineMath> be a positive nonsquare integer. Using the
        Fundamental Theorem of Arithmetic, it is not hard to show that{' '}
        <InlineMath>{`\\sqrt{d}`}</InlineMath> is irrational. This was first proved by{' '}
        <strong>Theaetetus</strong> in about 400 BC. In this chapter we study
        continued fraction expansions of <strong>quadratic surds</strong>, which
        can be used to solve quadratic Diophantine equations like the{' '}
        <strong>Pell equation</strong> <InlineMath>{`x^2 - dy^2 = 1`}</InlineMath>.
      </p>

      {/* Definition */}
      <h3 className="text-xl font-semibold mt-8 mb-4">What is a Quadratic Surd?</h3>

      <Callout type="definition" title="Quadratic Surd">
        <p>
          If <InlineMath>{`a`}</InlineMath> and <InlineMath>{`b \\neq 0`}</InlineMath> are
          integers and <InlineMath>{`d`}</InlineMath> is a positive nonsquare integer,
          the expression:
        </p>
        <MathBlock>{`\\frac{a + \\sqrt{d}}{b}`}</MathBlock>
        <p className="mt-2">
          is called a <strong>quadratic surd</strong>.
        </p>
      </Callout>

      <p className="text-dark-200 mb-4 mt-4">
        Note that if <InlineMath>{`(a + \\sqrt{d})/b = (a' + \\sqrt{d})/b'`}</InlineMath>,
        then <InlineMath>{`a = a'`}</InlineMath> and <InlineMath>{`b = b'`}</InlineMath>.
        The integers in a quadratic surd are uniquely determined.
      </p>

      {/* Golden Ratio Example */}
      <h3 className="text-xl font-semibold mt-8 mb-4">The Golden Ratio</h3>

      <Card className="mb-6">
        <CardHeader>Example: (1, 1, 1, ...)</CardHeader>
        <div className="text-dark-300 space-y-3">
          <p>
            Suppose <InlineMath>{`x = (1, 1, 1, \\ldots)`}</InlineMath>. Then:
          </p>
          <MathBlock>{`x = 1 + \\frac{1}{x}`}</MathBlock>
          <p>
            This gives <InlineMath>{`x^2 - x - 1 = 0`}</InlineMath>, so:
          </p>
          <MathBlock>{`x = \\frac{1 + \\sqrt{5}}{2} = \\varphi \\approx 1.618`}</MathBlock>
          <p className="text-sm">
            (We take the positive root since <InlineMath>{`x > 0`}</InlineMath>.)
          </p>
          <p className="mt-2">
            This is the famous <strong>golden ratio</strong>, the ratio of side to
            base in the triangles of the Pythagorean star.
          </p>
        </div>
      </Card>

      {/* Another Example */}
      <Card className="mb-6">
        <CardHeader>Example: (1, 1, 2, 1, 2, 1, ...)</CardHeader>
        <div className="text-dark-300 space-y-3">
          <p>
            Suppose <InlineMath>{`y = (1, 1, 2, 1, 2, 1, \\ldots)`}</InlineMath>.
          </p>
          <p>
            Let <InlineMath>{`x = (1, 2, 1, 2, 1, \\ldots)`}</InlineMath>. Then{' '}
            <InlineMath>{`y = 1 + 1/x`}</InlineMath>.
          </p>
          <p>
            Furthermore, <InlineMath>{`x = 1 + \\frac{1}{2 + 1/x}`}</InlineMath>, so{' '}
            <InlineMath>{`2x^2 - 2x - 1 = 0`}</InlineMath>.
          </p>
          <p>
            This gives <InlineMath>{`x = \\frac{1}{2}(1 + \\sqrt{3})`}</InlineMath>, and thus:
          </p>
          <MathBlock>{`y = \\sqrt{3}`}</MathBlock>
        </div>
      </Card>

      {/* Periodic Continued Fractions */}
      <h3 className="text-xl font-semibold mt-8 mb-4">Periodic Continued Fractions</h3>

      <p className="text-dark-200 mb-4">
        Generalizing from these examples, it is easily shown that any continued
        fraction which is <strong>ultimately periodic</strong> represents a
        quadratic surd. Less obvious is the converse:
      </p>

      <Callout type="theorem" title="Lagrange's Theorem (~1770)">
        <p>
          Every quadratic surd has a continued fraction expansion which is
          ultimately periodic.
        </p>
      </Callout>

      <p className="text-dark-200 mb-4 mt-4">
        We prove the special case for <InlineMath>{`\\sqrt{d}`}</InlineMath>:
      </p>

      <Callout type="theorem" title="Theorem 17.1">
        <p>
          If <InlineMath>{`d`}</InlineMath> is a positive integer which is not a
          perfect square, the continued fraction expansion of{' '}
          <InlineMath>{`\\sqrt{d}`}</InlineMath> is ultimately periodic.
        </p>
      </Callout>

      {/* Algorithm */}
      <h3 className="text-xl font-semibold mt-8 mb-4">Computing the Expansion</h3>

      <Card className="mb-6">
        <CardHeader>Algorithm for √d</CardHeader>
        <div className="text-dark-300 space-y-3">
          <p>
            Define sequences <InlineMath>{`a_n`}</InlineMath>, <InlineMath>{`b_n`}</InlineMath>,
            and <InlineMath>{`r_n`}</InlineMath> where <InlineMath>{`[\\rho]`}</InlineMath>{' '}
            denotes the greatest integer in <InlineMath>{`\\rho`}</InlineMath>:
          </p>
          <MathBlock>{`a_0 = 0, \\quad r_0 = 1, \\quad b_n = \\left\\lfloor \\frac{\\sqrt{d} + a_n}{r_n} \\right\\rfloor`}</MathBlock>
          <MathBlock>{`a_{n+1} = b_n r_n - a_n, \\quad r_{n+1} = \\frac{d - a_{n+1}^2}{r_n}`}</MathBlock>
          <p>Then:</p>
          <MathBlock>{`\\sqrt{d} = b_0 + \\cfrac{1}{b_1 + \\cfrac{1}{b_2 + \\cdots}}`}</MathBlock>
        </div>
      </Card>

      {/* Proof Sketch */}
      <h3 className="text-xl font-semibold mt-8 mb-4">Why Must It Be Periodic?</h3>

      <Card className="mb-6">
        <CardHeader>Proof Sketch</CardHeader>
        <div className="text-dark-300 text-sm space-y-2">
          <p>
            Let <InlineMath>{`x_n = (\\sqrt{d} + a_n)/r_n`}</InlineMath> and let{' '}
            <InlineMath>{`t_n = (-\\sqrt{d} + a_n)/r_n`}</InlineMath> be its conjugate.
          </p>
          <p>
            Using convergent formulas and taking conjugates, one can show that
            for sufficiently large <InlineMath>{`n`}</InlineMath>:
          </p>
          <MathBlock>{`2\\sqrt{d} > r_n > 0, \\quad \\sqrt{d} > a_n > -\\sqrt{d}`}</MathBlock>
          <p>
            Since there are only finitely many possibilities for{' '}
            <InlineMath>{`x_n = (\\sqrt{d} + a_n)/r_n`}</InlineMath>, the continued
            fraction must eventually repeat.
          </p>
        </div>
      </Card>

      {/* Special Form */}
      <h3 className="text-xl font-semibold mt-8 mb-4">The Special Form of √d</h3>

      <Callout type="note" title="Structure of √d Expansion">
        <p className="mb-2">
          For nonsquare <InlineMath>{`d`}</InlineMath>, the continued fraction
          expansion of <InlineMath>{`\\sqrt{d}`}</InlineMath> has the form:
        </p>
        <MathBlock>{`\\sqrt{d} = (a_0, \\overline{a_1, \\ldots, a_{n-1}, 2a_0})`}</MathBlock>
        <p className="text-sm mt-2">
          The part under the bar is periodic, always ending with{' '}
          <InlineMath>{`2a_0`}</InlineMath>.
        </p>
      </Callout>

      <CardGrid columns={2}>
        <Card>
          <CardHeader>√2</CardHeader>
          <p className="text-dark-300 text-sm">
            <InlineMath>{`\\sqrt{2} = (1, \\overline{2})`}</InlineMath>
          </p>
          <p className="text-dark-400 text-xs mt-1">
            Period length 1
          </p>
        </Card>
        <Card>
          <CardHeader>√10</CardHeader>
          <p className="text-dark-300 text-sm">
            <InlineMath>{`\\sqrt{10} = (3, \\overline{6})`}</InlineMath>
          </p>
          <p className="text-dark-400 text-xs mt-1">
            Period length 1
          </p>
        </Card>
      </CardGrid>

      {/* Pell Equation */}
      <h3 className="text-xl font-semibold mt-8 mb-4">Connection to Pell's Equation</h3>

      <p className="text-dark-200 mb-4">
        The continued fraction expansion of <InlineMath>{`\\sqrt{d}`}</InlineMath> can
        be used to solve the <strong>Pell equation</strong>:
      </p>

      <MathBlock>{`x^2 - dy^2 = \\pm 1`}</MathBlock>

      <Callout type="theorem" title="Solutions from Convergents">
        <p>
          If <InlineMath>{`\\sqrt{d} = (a_0, \\overline{a_1, \\ldots, a_{n-1}, 2a_0})`}</InlineMath>{' '}
          and <InlineMath>{`p_{n-1}/q_{n-1}`}</InlineMath> is the{' '}
          <InlineMath>{`(n-1)`}</InlineMath>th convergent of{' '}
          <InlineMath>{`\\sqrt{d}`}</InlineMath>, then:
        </p>
        <MathBlock>{`p_{n-1}^2 - d \\cdot q_{n-1}^2 = \\pm 1`}</MathBlock>
      </Callout>

      <Card className="mb-6 mt-4">
        <CardHeader>Example: d = 61</CardHeader>
        <div className="text-dark-300 text-sm">
          <p>
            Finding a solution to <InlineMath>{`x^2 - 61y^2 = \\pm 1`}</InlineMath>{' '}
            requires computing the continued fraction expansion of{' '}
            <InlineMath>{`\\sqrt{61}`}</InlineMath> and extracting the appropriate
            convergent. This demonstrates the power of continued fractions for
            solving quadratic Diophantine equations.
          </p>
        </div>
      </Card>

      {/* Historical Note */}
      <h3 className="text-xl font-semibold mt-8 mb-4">Historical Note</h3>

      <p className="text-dark-200 mb-4">
        The connection between periodic continued fractions and quadratic surds
        was first proved by <strong>Joseph-Louis Lagrange</strong> around 1770.
        The Pell equation was actually studied much earlier by{' '}
        <strong>Brahmagupta</strong> (628 AD) and later by{' '}
        <strong>Bhaskara II</strong> (12th century), who developed the
        "chakravala" cyclic method for solving it.
      </p>

      {/* Summary */}
      <h3 className="text-xl font-semibold mt-8 mb-4">Summary</h3>

      <div className="bg-dark-800 rounded-lg p-4 mb-6">
        <ul className="text-dark-200 space-y-2">
          <li>• <strong>Quadratic surd</strong>:{' '}
            <InlineMath>{`(a + \\sqrt{d})/b`}</InlineMath> where{' '}
            <InlineMath>{`d`}</InlineMath> is a positive nonsquare integer</li>
          <li>• <InlineMath>{`\\sqrt{d}`}</InlineMath> is irrational (Theaetetus, ~400 BC)</li>
          <li>• <InlineMath>{`(1, 1, 1, \\ldots) = \\varphi`}</InlineMath> (golden ratio)</li>
          <li>• <strong>Lagrange's Theorem</strong>: Every quadratic surd has an
            ultimately periodic continued fraction</li>
          <li>• <InlineMath>{`\\sqrt{d} = (a_0, \\overline{a_1, \\ldots, 2a_0})`}</InlineMath>{' '}
            (periodic part ends with <InlineMath>{`2a_0`}</InlineMath>)</li>
          <li>• Convergents of <InlineMath>{`\\sqrt{d}`}</InlineMath> solve the{' '}
            <strong>Pell equation</strong> <InlineMath>{`x^2 - dy^2 = \\pm 1`}</InlineMath></li>
          <li>• Only finitely many <InlineMath>{`x_n = (\\sqrt{d} + a_n)/r_n`}</InlineMath>,
            so the expansion must repeat</li>
        </ul>
      </div>

      {/* Section Quiz */}
      <SectionQuiz sectionId={47} questions={section47Questions} />
    </LessonLayout>
  );
}
