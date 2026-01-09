import { LessonLayout } from '@/components/layout/LessonLayout';
import { Definition, Theorem, Example } from '@/components/common/ContentBlocks';
import { Callout } from '@/components/common/Callout';
import { MathBlock, InlineMath } from '@/components/common/MathBlock';
import { SectionQuiz } from '@/components/quiz/SectionQuiz';
import { quizMap } from '@/data/quizzes';

export default function Section46() {
  return (
    <LessonLayout sectionId={46}>
      <h2>Doubly Periodic Functions</h2>

      <p>
        The discovery that elliptic functions have two independent periods
        opened a new chapter in complex analysis. Karl Weierstrass developed
        a unified theory of doubly periodic functions that revealed their
        deep structure and connected them to algebraic geometry.
      </p>

      <Callout type="info">
        <strong>From Jacobi to Weierstrass:</strong> While Jacobi's elliptic
        functions (sn, cn, dn) arose from inverting integrals, Weierstrass
        constructed doubly periodic functions directly, providing a more
        symmetric and theoretically elegant approach.
      </Callout>

      <h3>Periodicity in Complex Analysis</h3>

      <p>
        A meromorphic function <InlineMath>f(z)</InlineMath> is periodic if
        there exists a nonzero <InlineMath>{'\\omega'}</InlineMath> such that{' '}
        <InlineMath>{`f(z + \\omega) = f(z)`}</InlineMath> for all{' '}
        <InlineMath>z</InlineMath>.
      </p>

      <Example title="Simply Periodic Functions">
        <p>The exponential function has period <InlineMath>{`2\\pi i`}</InlineMath>:</p>
        <MathBlock>
          {`e^{z + 2\\pi i} = e^z`}
        </MathBlock>
        <p className="mt-2">
          All periods of <InlineMath>e^z</InlineMath> are multiples of{' '}
          <InlineMath>{`2\\pi i`}</InlineMath>. Such functions are{' '}
          <strong>simply periodic</strong>.
        </p>
      </Example>

      <Definition title="Doubly Periodic Function">
        <p>
          A meromorphic function <InlineMath>f(z)</InlineMath> is{' '}
          <strong>doubly periodic</strong> if it has two periods{' '}
          <InlineMath>{'\\omega_1'}</InlineMath> and <InlineMath>{'\\omega_2'}</InlineMath>{' '}
          whose ratio is not real:
        </p>
        <MathBlock>
          {`f(z + \\omega_1) = f(z + \\omega_2) = f(z)`}
        </MathBlock>
        <p className="mt-2">
          with <InlineMath>{`\\omega_2/\\omega_1 \\notin \\mathbb{R}`}</InlineMath>.
        </p>
      </Definition>

      <h3>The Period Lattice</h3>

      <p>
        The set of all periods forms a lattice in the complex plane:
      </p>

      <Definition title="Period Lattice">
        <MathBlock>
          {`\\Lambda = \\{m\\omega_1 + n\\omega_2 : m, n \\in \\mathbb{Z}\\}`}
        </MathBlock>
        <p className="mt-2 text-dark-400">
          This is a two-dimensional grid of points. The fundamental domain—a
          parallelogram with vertices at <InlineMath>0</InlineMath>,{' '}
          <InlineMath>{'\\omega_1'}</InlineMath>, <InlineMath>{'\\omega_2'}</InlineMath>,{' '}
          <InlineMath>{`\\omega_1 + \\omega_2`}</InlineMath>—tiles the plane.
        </p>
      </Definition>

      <p>
        A doubly periodic function is completely determined by its values
        on one fundamental domain.
      </p>

      <h3>The Weierstrass ℘-Function</h3>

      <p>
        Weierstrass constructed the most natural doubly periodic function:
      </p>

      <Definition title="Weierstrass ℘-Function">
        <MathBlock>
          {`\\wp(z) = \\frac{1}{z^2} + \\sum_{\\omega \\in \\Lambda \\setminus \\{0\\}} \\left( \\frac{1}{(z-\\omega)^2} - \\frac{1}{\\omega^2} \\right)`}
        </MathBlock>
        <p className="mt-2 text-dark-400">
          This sum converges absolutely and defines a meromorphic function
          with poles at each lattice point.
        </p>
      </Definition>

      <Theorem title="Properties of ℘">
        <ul className="list-disc list-inside space-y-2">
          <li>
            <InlineMath>{'\\wp(z)'}</InlineMath> has a double pole at each{' '}
            <InlineMath>{`\\omega \\in \\Lambda`}</InlineMath>
          </li>
          <li>
            <InlineMath>{'\\wp(-z) = \\wp(z)'}</InlineMath> (even function)
          </li>
          <li>
            <InlineMath>{`\\wp(z + \\omega_1) = \\wp(z + \\omega_2) = \\wp(z)`}</InlineMath>
          </li>
        </ul>
      </Theorem>

      <h3>The Differential Equation</h3>

      <p>
        The ℘-function satisfies a remarkable algebraic differential equation:
      </p>

      <Theorem title="Weierstrass Differential Equation">
        <MathBlock>
          {`(\\wp')^2 = 4\\wp^3 - g_2\\wp - g_3`}
        </MathBlock>
        <p className="mt-2">
          where <InlineMath>g_2</InlineMath> and <InlineMath>g_3</InlineMath>{' '}
          are constants determined by the lattice:
        </p>
        <MathBlock>
          {`g_2 = 60 \\sum_{\\omega \\neq 0} \\frac{1}{\\omega^4}, \\quad g_3 = 140 \\sum_{\\omega \\neq 0} \\frac{1}{\\omega^6}`}
        </MathBlock>
      </Theorem>

      <Callout type="note">
        <strong>Connection to Elliptic Curves:</strong> The equation{' '}
        <InlineMath>{`y^2 = 4x^3 - g_2 x - g_3`}</InlineMath> defines an
        elliptic curve! The map <InlineMath>{`z \\mapsto (\\wp(z), \\wp'(z))`}</InlineMath>{' '}
        parametrizes points on this curve.
      </Callout>

      <h3>Uniformization</h3>

      <p>
        Every elliptic curve over <InlineMath>{'\\mathbb{C}'}</InlineMath> can be
        parametrized by elliptic functions:
      </p>

      <Theorem title="Uniformization of Elliptic Curves">
        <p>
          For any elliptic curve <InlineMath>{`E: y^2 = 4x^3 - g_2 x - g_3`}</InlineMath>,
          there exists a lattice <InlineMath>{'\\Lambda'}</InlineMath> such that:
        </p>
        <MathBlock>
          {`E(\\mathbb{C}) \\cong \\mathbb{C}/\\Lambda`}
        </MathBlock>
        <p className="mt-2">
          The isomorphism is given by <InlineMath>{`z \\mapsto (\\wp(z), \\wp'(z))`}</InlineMath>{' '}
          for <InlineMath>{`z \\notin \\Lambda`}</InlineMath>.
        </p>
      </Theorem>

      <p>
        This means elliptic curves are complex tori—the complex plane "rolled
        up" along two directions.
      </p>

      <h3>Liouville's Theorems</h3>

      <p>
        Joseph Liouville proved fundamental restrictions on doubly periodic
        functions:
      </p>

      <Theorem title="Liouville's Theorems on Elliptic Functions">
        <ol className="list-decimal list-inside space-y-2 mt-2">
          <li>
            A doubly periodic function with no poles is constant.
          </li>
          <li>
            The sum of residues over a fundamental domain is zero.
          </li>
          <li>
            A non-constant doubly periodic function takes every value the
            same number of times (counting multiplicity) in each fundamental
            domain.
          </li>
        </ol>
      </Theorem>

      <Example title="The ℘-Function Takes Each Value Twice">
        <p>
          Since <InlineMath>{'\\wp(z)'}</InlineMath> has a double pole in each
          fundamental domain, it takes every value exactly twice (counting
          multiplicity). This is the "order" of the elliptic function.
        </p>
      </Example>

      <h3>Modular Functions</h3>

      <p>
        Different lattices can give equivalent elliptic curves. The study of
        which lattices are equivalent leads to modular functions:
      </p>

      <Definition title="The j-Invariant">
        <MathBlock>
          {`j(\\tau) = 1728 \\frac{g_2^3}{g_2^3 - 27g_3^2}`}
        </MathBlock>
        <p className="mt-2">
          where <InlineMath>{`\\tau = \\omega_2/\\omega_1`}</InlineMath>. Two
          lattices give isomorphic elliptic curves if and only if they have
          the same <InlineMath>j</InlineMath>-invariant.
        </p>
      </Definition>

      <Callout type="info">
        <strong>Modular Forms and Number Theory:</strong> The{' '}
        <InlineMath>j</InlineMath>-invariant is a modular function—it has
        remarkable transformation properties under the modular group{' '}
        <InlineMath>{`\\text{SL}_2(\\mathbb{Z})`}</InlineMath>. Modular forms
        (related generalizations) are central to modern number theory,
        including the proof of Fermat's Last Theorem.
      </Callout>

      <h3>The Legacy</h3>

      <p>
        Doubly periodic functions connect many areas of mathematics:
      </p>

      <ul className="list-disc list-inside space-y-2 mt-4">
        <li>
          <strong>Complex analysis:</strong> The most structured meromorphic
          functions after rational functions.
        </li>
        <li>
          <strong>Algebraic geometry:</strong> Elliptic curves are the simplest
          non-rational algebraic curves.
        </li>
        <li>
          <strong>Number theory:</strong> Via modular forms, connected to
          L-functions and arithmetic.
        </li>
        <li>
          <strong>Mathematical physics:</strong> Solutions to integrable
          systems and string theory.
        </li>
      </ul>

      <SectionQuiz sectionId={46} questions={quizMap[46] || []} title="Check Your Understanding" />
    </LessonLayout>
  );
}
