import { LessonLayout } from '../../components/layout/LessonLayout';
import { Callout } from '../../components/common/Callout';
import { Card, CardGrid, CardHeader } from '../../components/common/Card';
import { InlineMath, MathBlock } from '../../components/common/MathBlock';
import { SectionQuiz } from '../../components/quiz';
import { section33Questions } from '../../data/quizzes';

export default function Section33() {
  return (
    <LessonLayout sectionId={33}>
      <h2 className="text-2xl font-semibold mb-4">The Integers</h2>

      <p className="text-dark-200 mb-6 text-lg leading-relaxed">
        It is not difficult, though rather tedious, to construct the integers from the
        natural numbers. Instead of dwelling on the construction, we shall state the
        properties which make the set of integers <InlineMath>{`\\mathbb{Z}`}</InlineMath>{' '}
        into what is called an <strong>integral domain</strong>. This leads us to
        review some fundamental concepts from abstract algebra.
      </p>

      {/* Rings */}
      <h3 className="text-xl font-semibold mt-8 mb-4">Rings</h3>

      <p className="text-dark-200 mb-4">
        A <strong>ring</strong> <InlineMath>{`(R, 0, -, +, 1, \\cdot)`}</InlineMath> is
        a set <InlineMath>{`R`}</InlineMath> with operations where <InlineMath>{`+`}</InlineMath>{' '}
        and <InlineMath>{`\\cdot`}</InlineMath> are binary operations,{' '}
        <InlineMath>{`-`}</InlineMath> is a unary operation (negation), and{' '}
        <InlineMath>{`0`}</InlineMath> and <InlineMath>{`1`}</InlineMath> are distinguished elements.
      </p>

      <Callout type="info" title="Ring Axioms">
        <p className="mb-2">The following axioms must hold for all <InlineMath>{`x, y, z \\in R`}</InlineMath>:</p>
        <ol className="list-decimal list-inside space-y-1 ml-4 text-sm">
          <li><InlineMath>{`(x + y) + z = x + (y + z)`}</InlineMath> (associativity of +)</li>
          <li><InlineMath>{`x + 0 = x`}</InlineMath> (identity for +)</li>
          <li><InlineMath>{`x + (-x) = 0`}</InlineMath> (inverse for +)</li>
          <li><InlineMath>{`x + y = y + x`}</InlineMath> (commutativity of +)</li>
          <li><InlineMath>{`x \\cdot 1 = x = 1 \\cdot x`}</InlineMath> (identity for ·)</li>
          <li><InlineMath>{`(x \\cdot y) \\cdot z = x \\cdot (y \\cdot z)`}</InlineMath> (associativity of ·)</li>
          <li><InlineMath>{`(x + y) \\cdot z = (x \\cdot z) + (y \\cdot z)`}</InlineMath> and{' '}
            <InlineMath>{`z \\cdot (x + y) = (z \\cdot x) + (z \\cdot y)`}</InlineMath> (distributivity)</li>
        </ol>
      </Callout>

      {/* Groups */}
      <h3 className="text-xl font-semibold mt-8 mb-4">Groups</h3>

      <p className="text-dark-200 mb-4">
        Axioms (1) to (3) make <InlineMath>{`(R, 0, -, +)`}</InlineMath> into a{' '}
        <strong>group</strong>. From these axioms, one can prove:
      </p>

      <div className="bg-dark-800 rounded-lg p-4 mb-6">
        <ul className="text-dark-200 space-y-2">
          <li><InlineMath>{`0 + x = x`}</InlineMath> (left identity)</li>
          <li><InlineMath>{`-x + x = 0`}</InlineMath> (left inverse)</li>
        </ul>
      </div>

      <p className="text-dark-200 mb-4">
        A group is said to be <strong>Abelian</strong> (or commutative) if it also
        satisfies axiom (4). We have stated commutativity as an axiom for rings, even
        though it is actually a consequence of the remaining ring axioms (an interesting
        exercise to prove!).
      </p>

      {/* Commutative Rings */}
      <h3 className="text-xl font-semibold mt-8 mb-4">Commutative Rings</h3>

      <p className="text-dark-200 mb-4">
        The operation <InlineMath>{`\\cdot`}</InlineMath> may or may not satisfy
        the commutative law:
      </p>

      <MathBlock>{`x \\cdot y = y \\cdot x`}</MathBlock>

      <p className="text-dark-200 mb-4 mt-4">
        If it does, we call the ring <strong>commutative</strong>.
      </p>

      <CardGrid columns={2}>
        <Card>
          <CardHeader>Commutative Rings</CardHeader>
          <div className="text-dark-300 text-sm space-y-2">
            <p><InlineMath>{`\\mathbb{Z}`}</InlineMath> (the integers)</p>
            <p><InlineMath>{`\\mathbb{Q}`}</InlineMath> (the rationals)</p>
            <p><InlineMath>{`\\mathbb{R}`}</InlineMath> (the reals)</p>
            <p><InlineMath>{`\\mathbb{Z}_n`}</InlineMath> (integers mod n)</p>
          </div>
        </Card>
        <Card>
          <CardHeader>Non-commutative Rings</CardHeader>
          <div className="text-dark-300 text-sm space-y-2">
            <p><InlineMath>{`\\mathbb{H}`}</InlineMath> (the quaternions)</p>
            <p>
              <InlineMath>{`M_2(\\mathbb{Z})`}</InlineMath> (2×2 matrices over{' '}
              <InlineMath>{`\\mathbb{Z}`}</InlineMath>)
            </p>
          </div>
        </Card>
      </CardGrid>

      {/* Integral Domains */}
      <h3 className="text-xl font-semibold mt-8 mb-4">Integral Domains</h3>

      <Callout type="info" title="Integral Domain">
        <p className="mb-2">
          A commutative ring is called an <strong>integral domain</strong> if:
        </p>
        <MathBlock>{`0 \\neq 1 \\quad \\text{and} \\quad x \\cdot y = 0 \\Rightarrow x = 0 \\text{ or } y = 0`}</MathBlock>
        <p className="text-sm mt-2">
          The second condition says there are <strong>no zero divisors</strong>—you
          cannot multiply two nonzero elements and get zero.
        </p>
      </Callout>

      <p className="text-dark-200 mb-4 mt-4">
        The integers <InlineMath>{`\\mathbb{Z}`}</InlineMath> form an integral domain.
        For example, if <InlineMath>{`ab = 0`}</InlineMath> in <InlineMath>{`\\mathbb{Z}`}</InlineMath>,
        then either <InlineMath>{`a = 0`}</InlineMath> or <InlineMath>{`b = 0`}</InlineMath>.
      </p>

      <Card className="mb-6">
        <CardHeader>Cancellation Law</CardHeader>
        <div className="text-dark-300 space-y-3">
          <p>
            In any integral domain, we have the <strong>cancellation law</strong>:
          </p>
          <MathBlock>{`\\text{If } a \\cdot c = b \\cdot c \\text{ and } c \\neq 0, \\text{ then } a = b`}</MathBlock>
          <p className="text-sm">
            <strong>Proof:</strong> From <InlineMath>{`ac = bc`}</InlineMath>, we get{' '}
            <InlineMath>{`ac - bc = 0`}</InlineMath>, so{' '}
            <InlineMath>{`(a - b)c = 0`}</InlineMath>. Since <InlineMath>{`c \\neq 0`}</InlineMath>{' '}
            and we have no zero divisors, <InlineMath>{`a - b = 0`}</InlineMath>, hence{' '}
            <InlineMath>{`a = b`}</InlineMath>.
          </p>
        </div>
      </Card>

      {/* Fields */}
      <h3 className="text-xl font-semibold mt-8 mb-4">Fields</h3>

      <Callout type="info" title="Field">
        <p className="mb-2">
          A commutative ring is called a <strong>field</strong> if:
        </p>
        <MathBlock>{`0 \\neq 1 \\quad \\text{and} \\quad \\text{if } x \\neq 0, \\text{ there exists } y \\text{ such that } x \\cdot y = 1 = y \\cdot x`}</MathBlock>
        <p className="text-sm mt-2">
          In other words, every nonzero element has a multiplicative inverse.
        </p>
      </Callout>

      <Card className="mb-6 mt-4">
        <CardHeader>Fields vs. Integral Domains</CardHeader>
        <div className="text-dark-300 space-y-3">
          <ul className="list-disc list-inside space-y-2">
            <li>
              <InlineMath>{`\\mathbb{Z}`}</InlineMath> is an integral domain but{' '}
              <strong>not a field</strong> (e.g., 2 has no inverse in <InlineMath>{`\\mathbb{Z}`}</InlineMath>)
            </li>
            <li>
              <InlineMath>{`\\mathbb{Q}`}</InlineMath> is a field (and also an integral domain)
            </li>
            <li>
              <InlineMath>{`\\mathbb{R}`}</InlineMath> and <InlineMath>{`\\mathbb{C}`}</InlineMath>{' '}
              are fields
            </li>
            <li>
              <strong>Every field is an integral domain</strong> (but not conversely)
            </li>
          </ul>
        </div>
      </Card>

      <p className="text-dark-200 mb-4">
        <strong>Why is every field an integral domain?</strong> Suppose{' '}
        <InlineMath>{`xy = 0`}</InlineMath> and <InlineMath>{`x \\neq 0`}</InlineMath>.
        Since we're in a field, <InlineMath>{`x`}</InlineMath> has an inverse{' '}
        <InlineMath>{`x^{-1}`}</InlineMath>. Multiplying both sides by{' '}
        <InlineMath>{`x^{-1}`}</InlineMath>:
      </p>
      <MathBlock>{`x^{-1}(xy) = x^{-1} \\cdot 0 = 0`}</MathBlock>
      <MathBlock>{`(x^{-1}x)y = 0`}</MathBlock>
      <MathBlock>{`1 \\cdot y = y = 0`}</MathBlock>

      {/* Properties from Ring Axioms */}
      <h3 className="text-xl font-semibold mt-8 mb-4">Properties Derivable from Ring Axioms</h3>

      <div className="bg-dark-800 rounded-lg p-4 mb-6">
        <p className="text-dark-200 mb-2"><strong>From the ring axioms, we can prove:</strong></p>
        <ul className="text-dark-300 space-y-2 text-sm">
          <li>• <InlineMath>{`x \\cdot 0 = 0 = 0 \\cdot x`}</InlineMath> (zero annihilates)</li>
          <li>• <InlineMath>{`x \\cdot (-1) = -x = (-1) \\cdot x`}</InlineMath></li>
          <li>• <InlineMath>{`(-x) \\cdot y = -(x \\cdot y) = x \\cdot (-y)`}</InlineMath></li>
          <li>• <InlineMath>{`(-x) \\cdot (-y) = x \\cdot y`}</InlineMath></li>
          <li>• The identity element 0 for + is unique</li>
          <li>• The inverse <InlineMath>{`-x`}</InlineMath> is unique for each <InlineMath>{`x`}</InlineMath></li>
        </ul>
      </div>

      {/* Summary */}
      <h3 className="text-xl font-semibold mt-8 mb-4">Summary</h3>

      <div className="bg-dark-800 rounded-lg p-4 mb-6">
        <ul className="text-dark-200 space-y-2">
          <li>• A <strong>ring</strong> has addition (+) and multiplication (·) satisfying 7 axioms</li>
          <li>• Axioms 1-3 make <InlineMath>{`(R, 0, -, +)`}</InlineMath> a <strong>group</strong></li>
          <li>• A group satisfying commutativity is <strong>Abelian</strong></li>
          <li>• A ring is <strong>commutative</strong> if <InlineMath>{`xy = yx`}</InlineMath></li>
          <li>• An <strong>integral domain</strong> is a commutative ring with no zero divisors</li>
          <li>• A <strong>field</strong> is a commutative ring where every nonzero element has an inverse</li>
          <li>• <InlineMath>{`\\mathbb{Z}`}</InlineMath> is an integral domain but not a field</li>
          <li>• <InlineMath>{`\\mathbb{Q}`}</InlineMath>, <InlineMath>{`\\mathbb{R}`}</InlineMath>,{' '}
            <InlineMath>{`\\mathbb{C}`}</InlineMath> are fields</li>
          <li>• Every field is an integral domain (has the <strong>cancellation law</strong>)</li>
        </ul>
      </div>

      {/* Section Quiz */}
      <SectionQuiz sectionId={33} questions={section33Questions} />
    </LessonLayout>
  );
}
