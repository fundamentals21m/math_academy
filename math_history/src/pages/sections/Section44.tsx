import { LessonLayout } from '@/components/layout/LessonLayout';
import { Definition, Theorem, Example } from '@/components/common/ContentBlocks';
import { Callout } from '@/components/common/Callout';
import { MathBlock, InlineMath } from '@/components/common/MathBlock';
import { SectionQuiz } from '@/components/quiz/SectionQuiz';
import { quizMap } from '@/data/quizzes';

export default function Section44() {
  return (
    <LessonLayout sectionId={44}>
      <h2>Elliptic Integrals</h2>

      <p>
        Elliptic integrals arose naturally from two classical problems: finding
        the arc length of an ellipse and computing the period of a pendulum.
        These integrals cannot be expressed in terms of elementary functions,
        leading mathematicians to discover an entirely new class of functions
        with remarkable properties.
      </p>

      <Callout type="info">
        <strong>Why "Elliptic"?</strong> The name comes from the arc length
        problem for ellipses. Though elliptic functions have far broader
        applications, this historical origin stuck.
      </Callout>

      <h3>The Arc Length of an Ellipse</h3>

      <p>
        Consider an ellipse with semi-major axis <InlineMath>a</InlineMath> and
        semi-minor axis <InlineMath>b</InlineMath>:
      </p>

      <MathBlock>
        {`\\frac{x^2}{a^2} + \\frac{y^2}{b^2} = 1`}
      </MathBlock>

      <p>
        Parametrizing as <InlineMath>{`x = a\\cos\\theta`}</InlineMath>,{' '}
        <InlineMath>{`y = b\\sin\\theta`}</InlineMath>, the arc length from
        0 to <InlineMath>\theta</InlineMath> is:
      </p>

      <MathBlock>
        {`s = a \\int_0^\\theta \\sqrt{1 - e^2\\sin^2\\phi}\\, d\\phi`}
      </MathBlock>

      <p>
        where <InlineMath>{`e = \\sqrt{1 - b^2/a^2}`}</InlineMath> is the
        eccentricity. This integral cannot be evaluated in closed form using
        elementary functions!
      </p>

      <Definition title="Elliptic Integral of the Second Kind">
        <MathBlock>
          {`E(\\phi, k) = \\int_0^\\phi \\sqrt{1 - k^2\\sin^2\\theta}\\, d\\theta`}
        </MathBlock>
        <p className="mt-2 text-dark-400">
          The "complete" elliptic integral is <InlineMath>{`E(k) = E(\\pi/2, k)`}</InlineMath>,
          giving a quarter of the ellipse's circumference (scaled).
        </p>
      </Definition>

      <h3>The Pendulum Problem</h3>

      <p>
        A simple pendulum of length <InlineMath>L</InlineMath> swinging through
        a large angle <InlineMath>\theta_0</InlineMath> has period:
      </p>

      <MathBlock>
        {`T = 4\\sqrt{\\frac{L}{g}} \\int_0^{\\pi/2} \\frac{d\\phi}{\\sqrt{1 - k^2\\sin^2\\phi}}`}
      </MathBlock>

      <p>
        where <InlineMath>{`k = \\sin(\\theta_0/2)`}</InlineMath>. For small
        oscillations (<InlineMath>k \approx 0</InlineMath>), this gives the
        familiar <InlineMath>{`T = 2\\pi\\sqrt{L/g}`}</InlineMath>, but for
        large swings, the elliptic integral is needed.
      </p>

      <Definition title="Elliptic Integral of the First Kind">
        <MathBlock>
          {`F(\\phi, k) = \\int_0^\\phi \\frac{d\\theta}{\\sqrt{1 - k^2\\sin^2\\theta}}`}
        </MathBlock>
        <p className="mt-2">
          The complete integral is <InlineMath>{`K(k) = F(\\pi/2, k)`}</InlineMath>.
        </p>
      </Definition>

      <h3>Historical Development</h3>

      <p>
        The study of elliptic integrals began in the 17th century:
      </p>

      <ul className="list-disc list-inside space-y-2 mt-4">
        <li>
          <strong>John Wallis (1655):</strong> First studied the arc length
          of an ellipse, recognizing it couldn't be expressed simply.
        </li>
        <li>
          <strong>Jakob Bernoulli (1694):</strong> Encountered elliptic
          integrals in studying the elastica (shape of a bent rod).
        </li>
        <li>
          <strong>Fagnano (1718):</strong> Discovered addition formulas for
          elliptic integrals, analogous to trigonometric identities.
        </li>
        <li>
          <strong>Euler (1750s):</strong> Systematically studied elliptic
          integrals and found the addition theorem.
        </li>
        <li>
          <strong>Legendre (1786-1832):</strong> Devoted 40 years to classifying
          and tabulating elliptic integrals.
        </li>
      </ul>

      <h3>Legendre's Classification</h3>

      <p>
        Adrien-Marie Legendre showed that all elliptic integrals can be reduced
        to three standard forms:
      </p>

      <Theorem title="Legendre's Normal Forms">
        <p>Every elliptic integral can be expressed using:</p>
        <ul className="list-disc list-inside mt-2 space-y-2">
          <li>
            <strong>First kind:</strong>{' '}
            <InlineMath>{`F(\\phi, k) = \\int_0^\\phi \\frac{d\\theta}{\\sqrt{1 - k^2\\sin^2\\theta}}`}</InlineMath>
          </li>
          <li>
            <strong>Second kind:</strong>{' '}
            <InlineMath>{`E(\\phi, k) = \\int_0^\\phi \\sqrt{1 - k^2\\sin^2\\theta}\\, d\\theta`}</InlineMath>
          </li>
          <li>
            <strong>Third kind:</strong>{' '}
            <InlineMath>{`\\Pi(n; \\phi, k) = \\int_0^\\phi \\frac{d\\theta}{(1 + n\\sin^2\\theta)\\sqrt{1 - k^2\\sin^2\\theta}}`}</InlineMath>
          </li>
        </ul>
      </Theorem>

      <Callout type="note">
        <strong>Legendre's Dedication:</strong> Legendre computed extensive
        tables of elliptic integrals by hand—thousands of values to many
        decimal places. His three-volume <em>Traité des Fonctions Elliptiques</em>{' '}
        (1825-1832) was the definitive reference until Abel and Jacobi
        revolutionized the subject.
      </Callout>

      <h3>The Addition Theorem</h3>

      <p>
        Fagnano and Euler discovered that elliptic integrals satisfy addition
        theorems analogous to those for trigonometric functions:
      </p>

      <Theorem title="Euler's Addition Theorem">
        <p>
          If <InlineMath>{`u = F(\\phi_1, k)`}</InlineMath> and{' '}
          <InlineMath>{`v = F(\\phi_2, k)`}</InlineMath>, then{' '}
          <InlineMath>{`u + v = F(\\phi_3, k)`}</InlineMath> where:
        </p>
        <MathBlock>
          {`\\sin\\phi_3 = \\frac{\\sin\\phi_1\\cos\\phi_2\\sqrt{1-k^2\\sin^2\\phi_2} + \\sin\\phi_2\\cos\\phi_1\\sqrt{1-k^2\\sin^2\\phi_1}}{1 - k^2\\sin^2\\phi_1\\sin^2\\phi_2}`}
        </MathBlock>
      </Theorem>

      <Example title="Analogy with Trigonometry">
        <p>For circular functions, we have:</p>
        <MathBlock>
          {`\\int_0^x \\frac{dt}{\\sqrt{1-t^2}} = \\arcsin(x)`}
        </MathBlock>
        <p className="mt-2">
          The addition theorem <InlineMath>{`\\arcsin(a) + \\arcsin(b) = \\arcsin(c)`}</InlineMath>{' '}
          corresponds to the sine addition formula. Elliptic integrals have
          analogous—but more complex—addition theorems.
        </p>
      </Example>

      <h3>The Revolutionary Insight</h3>

      <p>
        For a century, mathematicians studied elliptic integrals as the
        fundamental objects. The breakthrough came when Abel and Jacobi
        realized: instead of studying the integral as a function of its
        upper limit, invert it! Study the upper limit as a function of
        the integral's value.
      </p>

      <Callout type="info">
        <strong>The Analogy:</strong> This is like moving from{' '}
        <InlineMath>{`\\int_0^x \\frac{dt}{\\sqrt{1-t^2}}`}</InlineMath> to{' '}
        <InlineMath>{`\\sin`}</InlineMath>. The integral is arcsin; its
        inverse is sine. Elliptic functions are the inverses of elliptic
        integrals—and they turn out to have beautiful properties that the
        integrals lack.
      </Callout>

      <SectionQuiz sectionId={44} questions={quizMap[44] || []} title="Check Your Understanding" />
    </LessonLayout>
  );
}
