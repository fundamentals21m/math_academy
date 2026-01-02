import { LessonLayout } from '../../components/layout/LessonLayout';
import { Callout } from '../../components/common/Callout';
import { Card, CardGrid, CardHeader } from '../../components/common/Card';
import { InlineMath, MathBlock } from '../../components/common/MathBlock';
import { SectionQuiz } from '../../components/quiz';
import { section43Questions } from '../../data/quizzes';

export default function Section43() {
  return (
    <LessonLayout sectionId={43}>
      <h2 className="text-2xl font-semibold mb-4">Cardinal Arithmetic</h2>

      <p className="text-dark-200 mb-6 text-lg leading-relaxed">
        Just as we define arithmetic operations for natural numbers, we can extend
        these operations to infinite cardinals. The key insight is that operations
        on cardinalities correspond to operations on sets.
      </p>

      {/* Set Operations */}
      <h3 className="text-xl font-semibold mt-8 mb-4">Operations on Sets</h3>

      <p className="text-dark-200 mb-4">
        We begin by defining three binary operations for sets in general:
      </p>

      <Callout type="definition" title="Set Operations">
        <div className="space-y-3">
          <p><strong>Cartesian Product:</strong></p>
          <MathBlock>{`A \\times B = \\{(a, b) \\mid a \\in A \\text{ and } b \\in B\\}`}</MathBlock>

          <p><strong>Function Set (Exponentiation):</strong></p>
          <MathBlock>{`A^B = \\{f \\mid f : B \\to A\\}`}</MathBlock>

          <p><strong>Disjoint Union:</strong></p>
          <MathBlock>{`A + B = (A \\times \\{0\\}) \\cup (B \\times \\{1\\})`}</MathBlock>
        </div>
      </Callout>

      <Card className="mb-6 mt-4">
        <CardHeader>Motivation from Finite Sets</CardHeader>
        <div className="text-dark-300 space-y-2">
          <p>For finite sets <InlineMath>{`A`}</InlineMath> and <InlineMath>{`B`}</InlineMath>:</p>
          <ul className="list-disc list-inside space-y-1">
            <li><InlineMath>{`|A \\times B| = |A| \\times |B|`}</InlineMath></li>
            <li><InlineMath>{`|A^B| = |A|^{|B|}`}</InlineMath></li>
            <li><InlineMath>{`|A + B| = |A| + |B|`}</InlineMath></li>
          </ul>
        </div>
      </Card>

      {/* Cardinal Operations */}
      <h3 className="text-xl font-semibold mt-8 mb-4">Defining Cardinal Operations</h3>

      <p className="text-dark-200 mb-4">
        We can now define equivalent binary operations for cardinals:
      </p>

      <MathBlock>{`|A| + |B| = |A + B|`}</MathBlock>
      <MathBlock>{`|A| \\times |B| = |A \\times B|`}</MathBlock>
      <MathBlock>{`|A|^{|B|} = |A^B|`}</MathBlock>

      <p className="text-dark-200 mb-4 mt-4">
        For example, <InlineMath>{`\\aleph_0 + 2 = \\aleph_0`}</InlineMath> since{' '}
        <InlineMath>{`\\mathbb{N} + \\{0, 1\\} \\cong \\mathbb{N}`}</InlineMath>.
      </p>

      {/* Laws of Cardinal Arithmetic */}
      <h3 className="text-xl font-semibold mt-8 mb-4">Laws of Cardinal Arithmetic</h3>

      <Callout type="theorem" title="Isomorphism Laws for Sets">
        <p className="mb-2">The following isomorphisms hold for all sets:</p>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-2 text-sm">
          <div><InlineMath>{`A + B \\cong B + A`}</InlineMath></div>
          <div><InlineMath>{`A \\times B \\cong B \\times A`}</InlineMath></div>
          <div><InlineMath>{`(A + B) + C \\cong A + (B + C)`}</InlineMath></div>
          <div><InlineMath>{`(A \\times B) \\times C \\cong A \\times (B \\times C)`}</InlineMath></div>
          <div><InlineMath>{`A \\times (B + C) \\cong (A \\times B) + (A \\times C)`}</InlineMath></div>
          <div><InlineMath>{`(A^B)^C \\cong A^{C \\times B}`}</InlineMath></div>
          <div><InlineMath>{`A^B \\times A^C \\cong A^{B+C}`}</InlineMath></div>
          <div><InlineMath>{`(A \\times B)^C \\cong A^C \\times B^C`}</InlineMath></div>
        </div>
      </Callout>

      <CardGrid columns={2}>
        <Card>
          <CardHeader>Identity Elements</CardHeader>
          <div className="text-dark-300 text-sm space-y-1">
            <p><InlineMath>{`A + 0 \\cong A`}</InlineMath> (additive identity)</p>
            <p><InlineMath>{`A \\times 1 \\cong A`}</InlineMath> (multiplicative identity)</p>
            <p><InlineMath>{`A \\times 0 \\cong 0`}</InlineMath> (annihilation)</p>
          </div>
        </Card>
        <Card>
          <CardHeader>Exponentiation Rules</CardHeader>
          <div className="text-dark-300 text-sm space-y-1">
            <p><InlineMath>{`A^0 \\cong 1`}</InlineMath></p>
            <p><InlineMath>{`A^1 \\cong A`}</InlineMath></p>
            <p>If <InlineMath>{`B \\neq 0`}</InlineMath>, then <InlineMath>{`0^B \\cong 0`}</InlineMath></p>
          </div>
        </Card>
      </CardGrid>

      {/* Currying */}
      <h3 className="text-xl font-semibold mt-8 mb-4">Currying</h3>

      <p className="text-dark-200 mb-4">
        One particularly important isomorphism is{' '}
        <InlineMath>{`(A^B)^C \\cong A^{C \\times B}`}</InlineMath>. The function
        that establishes this correspondence is called <strong>currying</strong>{' '}
        in computer science, named after the logician <strong>Haskell B. Curry</strong>.
      </p>

      <Callout type="note" title="The Currying Isomorphism">
        <p className="mb-2">
          A function <InlineMath>{`f : C \\to A^B`}</InlineMath> (a function returning
          functions) corresponds to a function{' '}
          <InlineMath>{`g : C \\times B \\to A`}</InlineMath> via:
        </p>
        <MathBlock>{`g((c, b)) = (f(c))(b)`}</MathBlock>
        <p className="text-sm mt-2">
          This is fundamental in functional programming languages like Haskell.
        </p>
      </Callout>

      {/* Arithmetic with Aleph-null */}
      <h3 className="text-xl font-semibold mt-8 mb-4">
        Arithmetic with <InlineMath>{`\\aleph_0`}</InlineMath>
      </h3>

      <p className="text-dark-200 mb-4">
        Infinite cardinal arithmetic produces surprising results:
      </p>

      <CardGrid columns={2}>
        <Card>
          <CardHeader>Addition</CardHeader>
          <div className="text-dark-300 space-y-1">
            <p><InlineMath>{`\\aleph_0 + \\aleph_0 = \\aleph_0`}</InlineMath></p>
            <p className="text-sm">
              (The union of two countable sets is countable)
            </p>
          </div>
        </Card>
        <Card>
          <CardHeader>Multiplication</CardHeader>
          <div className="text-dark-300 space-y-1">
            <p><InlineMath>{`\\aleph_0 \\times \\aleph_0 = \\aleph_0`}</InlineMath></p>
            <p className="text-sm">
              (<InlineMath>{`\\mathbb{N} \\times \\mathbb{N}`}</InlineMath> is countable)
            </p>
          </div>
        </Card>
      </CardGrid>

      <Card className="mb-6 mt-4">
        <CardHeader>Proof that <InlineMath>{`\\mathbb{N} \\times \\mathbb{N} \\cong \\mathbb{N}`}</InlineMath></CardHeader>
        <div className="text-dark-300 text-sm">
          <p className="mb-2">
            We can enumerate pairs <InlineMath>{`(m, n)`}</InlineMath> by diagonals:
          </p>
          <p className="font-mono text-xs">
            (0,0), (1,0), (0,1), (2,0), (1,1), (0,2), (3,0), ...
          </p>
          <p className="mt-2">
            The bijection is: <InlineMath>{`f(m,n) = \\frac{(m+n)(m+n+1)}{2} + n`}</InlineMath>
          </p>
        </div>
      </Card>

      <Callout type="note" title="Squaring is Idempotent">
        <p>
          For any infinite cardinal <InlineMath>{`\\kappa`}</InlineMath>:
        </p>
        <MathBlock>{`\\kappa^2 = \\kappa \\times \\kappa = \\kappa`}</MathBlock>
        <p className="text-sm mt-2">
          In particular, <InlineMath>{`\\aleph_0^2 = \\aleph_0`}</InlineMath>.
          This contrasts sharply with finite cardinals!
        </p>
      </Callout>

      {/* Power Set Connection */}
      <h3 className="text-xl font-semibold mt-8 mb-4">Connection to Power Sets</h3>

      <p className="text-dark-200 mb-4">
        The notation <InlineMath>{`2^A`}</InlineMath> for the power set is justified
        by the set-theoretic definition of exponentiation:
      </p>

      <MathBlock>{`P(A) \\cong 2^A = \\{f \\mid f : A \\to \\{0, 1\\}\\}`}</MathBlock>

      <p className="text-dark-200 mb-4 mt-4">
        Each subset <InlineMath>{`S \\subseteq A`}</InlineMath> corresponds to its{' '}
        <strong>characteristic function</strong>{' '}
        <InlineMath>{`\\chi_S : A \\to \\{0, 1\\}`}</InlineMath> where{' '}
        <InlineMath>{`\\chi_S(x) = 1`}</InlineMath> iff{' '}
        <InlineMath>{`x \\in S`}</InlineMath>.
      </p>

      <Card className="mb-6">
        <CardHeader>Advanced Result</CardHeader>
        <div className="text-dark-300 space-y-2">
          <p>Using the Schroeder-Bernstein Theorem, one can prove:</p>
          <MathBlock>{`\\aleph_0^{\\aleph_0} = 2^{\\aleph_0}`}</MathBlock>
          <p className="text-sm">
            This means the set of all sequences of natural numbers has the same
            cardinality as the set of all subsets of{' '}
            <InlineMath>{`\\mathbb{N}`}</InlineMath>.
          </p>
        </div>
      </Card>

      {/* Summary */}
      <h3 className="text-xl font-semibold mt-8 mb-4">Summary</h3>

      <div className="bg-dark-800 rounded-lg p-4 mb-6">
        <ul className="text-dark-200 space-y-2">
          <li>• <strong>Cartesian product</strong>{' '}
            <InlineMath>{`A \\times B`}</InlineMath> corresponds to{' '}
            <strong>multiplication</strong> of cardinalities</li>
          <li>• <strong>Function set</strong> <InlineMath>{`A^B`}</InlineMath>{' '}
            corresponds to <strong>exponentiation</strong></li>
          <li>• <strong>Disjoint union</strong> <InlineMath>{`A + B`}</InlineMath>{' '}
            corresponds to <strong>addition</strong></li>
          <li>• <strong>Currying</strong>:{' '}
            <InlineMath>{`(A^B)^C \\cong A^{C \\times B}`}</InlineMath></li>
          <li>• <InlineMath>{`\\aleph_0 + \\aleph_0 = \\aleph_0`}</InlineMath> and{' '}
            <InlineMath>{`\\aleph_0 \\times \\aleph_0 = \\aleph_0`}</InlineMath></li>
          <li>• <InlineMath>{`\\aleph_0^{\\aleph_0} = 2^{\\aleph_0}`}</InlineMath>{' '}
            (Schroeder-Bernstein)</li>
          <li>• Power set <InlineMath>{`P(A)`}</InlineMath> corresponds to{' '}
            <InlineMath>{`2^A`}</InlineMath> via characteristic functions</li>
        </ul>
      </div>

      {/* Section Quiz */}
      <SectionQuiz sectionId={43} questions={section43Questions} />
    </LessonLayout>
  );
}
