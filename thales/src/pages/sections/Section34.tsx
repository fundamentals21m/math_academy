import { LessonLayout } from '../../components/layout/LessonLayout';
import { Callout } from '../../components/common/Callout';
import { Card, CardHeader } from '../../components/common/Card';
import { InlineMath, MathBlock } from '../../components/common/MathBlock';
import { SectionQuiz } from '../../components/quiz';
import { section34Questions } from '../../data/quizzes';

export default function Section34() {
  return (
    <LessonLayout sectionId={34}>
      <h2 className="text-2xl font-semibold mb-4">The Rationals</h2>

      <p className="text-dark-200 mb-6 text-lg leading-relaxed">
        In this chapter we construct the field of rationals <InlineMath>{`\\mathbb{Q}`}</InlineMath>{' '}
        from the ring of integers <InlineMath>{`\\mathbb{Z}`}</InlineMath>. Our argument
        uses only the properties of an integral domain, so the same construction produces
        a field from <strong>any</strong> integral domain—the so-called{' '}
        <strong>field of quotients</strong>.
      </p>

      {/* The Problem */}
      <h3 className="text-xl font-semibold mt-8 mb-4">The Problem with Pairs</h3>

      <p className="text-dark-200 mb-4">
        One's first idea is to say that a rational number <InlineMath>{`a/b`}</InlineMath>{' '}
        is simply a pair of integers <InlineMath>{`(a, b)`}</InlineMath> where{' '}
        <InlineMath>{`b \\neq 0`}</InlineMath>. But this doesn't work, because then:
      </p>

      <MathBlock>{`2/3 \\neq 4/6`}</MathBlock>

      <p className="text-dark-200 mb-4 mt-4">
        since the pairs <InlineMath>{`(2, 3)`}</InlineMath> and <InlineMath>{`(4, 6)`}</InlineMath>{' '}
        are different. The solution is to introduce an <strong>equivalence relation</strong>{' '}
        on pairs of integers.
      </p>

      {/* Equivalence Relation */}
      <h3 className="text-xl font-semibold mt-8 mb-4">Equivalence Relation</h3>

      <Callout type="definition" title="Equivalence of Pairs">
        <p className="mb-2">
          For pairs of integers <InlineMath>{`(a, b)`}</InlineMath> and{' '}
          <InlineMath>{`(c, d)`}</InlineMath> with <InlineMath>{`b, d \\neq 0`}</InlineMath>,
          we define:
        </p>
        <MathBlock>{`(a, b) \\equiv (c, d) \\iff ad = bc`}</MathBlock>
      </Callout>

      <p className="text-dark-200 mb-4 mt-4">
        This is an <strong>equivalence relation</strong>, meaning it satisfies three properties:
      </p>

      <div className="bg-dark-800 rounded-lg p-4 mb-6">
        <ul className="text-dark-200 space-y-2">
          <li><InlineMath>{`(a, b) \\equiv (a, b)`}</InlineMath> <span className="text-dark-400">(reflexivity)</span></li>
          <li>If <InlineMath>{`(a, b) \\equiv (c, d)`}</InlineMath>, then{' '}
            <InlineMath>{`(c, d) \\equiv (a, b)`}</InlineMath> <span className="text-dark-400">(symmetry)</span></li>
          <li>If <InlineMath>{`(a, b) \\equiv (c, d)`}</InlineMath> and{' '}
            <InlineMath>{`(c, d) \\equiv (e, f)`}</InlineMath>, then{' '}
            <InlineMath>{`(a, b) \\equiv (e, f)`}</InlineMath> <span className="text-dark-400">(transitivity)</span></li>
        </ul>
      </div>

      <Card className="mb-6">
        <CardHeader>Proving Transitivity</CardHeader>
        <div className="text-dark-300 space-y-3">
          <p>
            Given <InlineMath>{`ad = bc`}</InlineMath> and <InlineMath>{`cf = de`}</InlineMath>,
            we wish to show <InlineMath>{`af = be`}</InlineMath>.
          </p>
          <p>Using associativity and commutativity:</p>
          <MathBlock>{`afd = adf = bcf = bde = bed`}</MathBlock>
          <p className="text-sm">
            Since <InlineMath>{`d \\neq 0`}</InlineMath>, we can use the{' '}
            <strong>cancellation law</strong> to conclude <InlineMath>{`af = be`}</InlineMath>.
          </p>
        </div>
      </Card>

      {/* Defining Rationals */}
      <h3 className="text-xl font-semibold mt-8 mb-4">Defining Rational Numbers</h3>

      <Callout type="definition" title="Ratio (Rational Number)">
        <p>
          Assuming <InlineMath>{`b \\neq 0`}</InlineMath>, we define the <strong>ratio</strong>{' '}
          <InlineMath>{`a/b`}</InlineMath> as the <strong>equivalence class</strong> of{' '}
          <InlineMath>{`(a, b)`}</InlineMath>—the set of all pairs <InlineMath>{`(c, d)`}</InlineMath>{' '}
          with <InlineMath>{`d \\neq 0`}</InlineMath> such that <InlineMath>{`ad = bc`}</InlineMath>.
        </p>
      </Callout>

      <p className="text-dark-200 mb-4 mt-4">
        Note that:
      </p>
      <MathBlock>{`a/b = c/d \\iff (a, b) \\equiv (c, d) \\iff ad = bc`}</MathBlock>

      <p className="text-dark-200 mb-4 mt-4">
        This makes <InlineMath>{`2/3 = 4/6`}</InlineMath> because{' '}
        <InlineMath>{`2 \\cdot 6 = 3 \\cdot 4 = 12`}</InlineMath>.
      </p>

      {/* Operations on Q */}
      <h3 className="text-xl font-semibold mt-8 mb-4">Operations on ℚ</h3>

      <p className="text-dark-200 mb-4">
        If <InlineMath>{`\\mathbb{Q}`}</InlineMath> is the set of ratios, we define operations
        to make <InlineMath>{`(\\mathbb{Q}, \\underline{0}, -, +, \\underline{1}, \\cdot)`}</InlineMath>{' '}
        into a field:
      </p>

      <div className="bg-dark-800 rounded-lg p-4 mb-6">
        <ul className="text-dark-200 space-y-2 font-mono text-sm">
          <li><InlineMath>{`\\underline{0} = 0/1`}</InlineMath></li>
          <li><InlineMath>{`-(a/b) = (-a)/b`}</InlineMath></li>
          <li><InlineMath>{`a/b + c/d = (ad + bc)/(bd)`}</InlineMath></li>
          <li><InlineMath>{`\\underline{1} = 1/1`}</InlineMath></li>
          <li><InlineMath>{`(a/b) \\cdot (c/d) = (ac)/(bd)`}</InlineMath></li>
        </ul>
      </div>

      <p className="text-dark-200 mb-4">
        Note that <InlineMath>{`bd \\neq 0`}</InlineMath> because we're in an integral domain
        (no zero divisors).
      </p>

      {/* Well-Definedness */}
      <h3 className="text-xl font-semibold mt-8 mb-4">Well-Definedness</h3>

      <p className="text-dark-200 mb-4">
        We must check that these operations are <strong>well-defined</strong>—they give
        the same result regardless of which representative we choose.
      </p>

      <Card className="mb-6">
        <CardHeader>Checking Addition</CardHeader>
        <div className="text-dark-300 space-y-3">
          <p>
            Suppose <InlineMath>{`a/b = a'/b'`}</InlineMath> and{' '}
            <InlineMath>{`c/d = c'/d'`}</InlineMath>. We must show:
          </p>
          <MathBlock>{`a/b + c/d = a'/b' + c'/d'`}</MathBlock>
          <p>That is:</p>
          <MathBlock>{`(ad + bc)/(bd) = (a'd' + b'c')/(b'd')`}</MathBlock>
          <p>Which requires:</p>
          <MathBlock>{`(ad + bc)(b'd') = (bd)(a'd' + b'c')`}</MathBlock>
          <p className="text-sm">
            This can be verified using the assumptions <InlineMath>{`ab' = a'b`}</InlineMath>{' '}
            and <InlineMath>{`cd' = c'd`}</InlineMath>.
          </p>
        </div>
      </Card>

      {/* Proving Field Axioms */}
      <h3 className="text-xl font-semibold mt-8 mb-4">Proving ℚ is a Field</h3>

      <p className="text-dark-200 mb-4">
        We must verify all field axioms. Here are two examples:
      </p>

      <Card className="mb-6">
        <CardHeader>Commutativity of Addition (Axiom 4)</CardHeader>
        <div className="text-dark-300 space-y-2">
          <MathBlock>{`\\begin{aligned}
a/b + c/d &= (ad + bc)/(bd) \\\\
&= (da + cb)/(db) && \\text{(commutativity of } \\cdot \\text{ for integers)} \\\\
&= (cb + da)/(db) && \\text{(commutativity of } + \\text{ for integers)} \\\\
&= c/d + a/b
\\end{aligned}`}</MathBlock>
        </div>
      </Card>

      <Card className="mb-6">
        <CardHeader>Multiplicative Inverse (Axiom 10)</CardHeader>
        <div className="text-dark-300 space-y-3">
          <p>
            If <InlineMath>{`a/b \\neq \\underline{0}`}</InlineMath>, then{' '}
            <InlineMath>{`a \\neq 0`}</InlineMath>. We claim{' '}
            <InlineMath>{`(a/b) \\cdot (b/a) = \\underline{1}`}</InlineMath>:
          </p>
          <MathBlock>{`(a/b) \\cdot (b/a) = (a \\cdot b)/(b \\cdot a) = 1/1 = \\underline{1}`}</MathBlock>
          <p className="text-sm">
            This works because <InlineMath>{`(ab) \\cdot 1 = ab = ba = (ba) \\cdot 1`}</InlineMath>.
          </p>
        </div>
      </Card>

      {/* Field of Quotients */}
      <h3 className="text-xl font-semibold mt-8 mb-4">Field of Quotients</h3>

      <Callout type="theorem" title="Field of Quotients">
        <p>
          The same construction that produces <InlineMath>{`\\mathbb{Q}`}</InlineMath> from{' '}
          <InlineMath>{`\\mathbb{Z}`}</InlineMath> can be applied to{' '}
          <strong>any integral domain</strong> to produce a field, called its{' '}
          <strong>field of quotients</strong>.
        </p>
      </Callout>

      {/* Embedding */}
      <h3 className="text-xl font-semibold mt-8 mb-4">Embedding ℤ in ℚ</h3>

      <p className="text-dark-200 mb-4">
        Strictly speaking, <InlineMath>{`\\mathbb{Q}`}</InlineMath> does not contain{' '}
        <InlineMath>{`\\mathbb{Z}`}</InlineMath>. However, <InlineMath>{`\\mathbb{Q}`}</InlineMath>{' '}
        contains a subset consisting of ratios of the form <InlineMath>{`a/1`}</InlineMath>{' '}
        that is <strong>isomorphic</strong> to <InlineMath>{`\\mathbb{Z}`}</InlineMath>.
      </p>

      <Card className="mb-6">
        <CardHeader>The Embedding Homomorphism</CardHeader>
        <div className="text-dark-300 space-y-3">
          <p>
            Define <InlineMath>{`h : \\mathbb{Z} \\to \\mathbb{Q}`}</InlineMath> by{' '}
            <InlineMath>{`h(a) = a/1`}</InlineMath>. Then <InlineMath>{`h`}</InlineMath> is
            a <strong>homomorphism</strong>—it preserves the operations:
          </p>
          <div className="space-y-1 text-sm font-mono">
            <p><InlineMath>{`h(a + b) = h(a) + h(b)`}</InlineMath></p>
            <p><InlineMath>{`h(ab) = h(a)h(b)`}</InlineMath></p>
            <p><InlineMath>{`h(-a) = -h(a)`}</InlineMath></p>
            <p><InlineMath>{`h(0) = \\underline{0}`}</InlineMath></p>
            <p><InlineMath>{`h(1) = \\underline{1}`}</InlineMath></p>
          </div>
          <p className="text-sm">
            Furthermore, <InlineMath>{`h`}</InlineMath> is <strong>injective</strong>{' '}
            (1-to-1), so <InlineMath>{`h(\\mathbb{Z})`}</InlineMath> is an{' '}
            <strong>isomorphic image</strong> of <InlineMath>{`\\mathbb{Z}`}</InlineMath>.
          </p>
        </div>
      </Card>

      <Callout type="note" title="Mathematical Convention">
        <p>
          It is a mathematical convention to identify <InlineMath>{`2`}</InlineMath> with{' '}
          <InlineMath>{`2/1`}</InlineMath> and say that{' '}
          <InlineMath>{`\\mathbb{Z} \\subseteq \\mathbb{Q}`}</InlineMath>. We say that{' '}
          <InlineMath>{`h`}</InlineMath> <strong>embeds</strong>{' '}
          <InlineMath>{`\\mathbb{Z}`}</InlineMath> in <InlineMath>{`\\mathbb{Q}`}</InlineMath>.
        </p>
      </Callout>

      {/* Summary */}
      <h3 className="text-xl font-semibold mt-8 mb-4">Summary</h3>

      <div className="bg-dark-800 rounded-lg p-4 mb-6">
        <ul className="text-dark-200 space-y-2">
          <li>• Rationals can't simply be pairs <InlineMath>{`(a, b)`}</InlineMath> because{' '}
            <InlineMath>{`2/3 \\neq 4/6`}</InlineMath></li>
          <li>• Define equivalence: <InlineMath>{`(a, b) \\equiv (c, d) \\iff ad = bc`}</InlineMath></li>
          <li>• A <strong>ratio</strong> <InlineMath>{`a/b`}</InlineMath> is the equivalence class of{' '}
            <InlineMath>{`(a, b)`}</InlineMath></li>
          <li>• Operations: <InlineMath>{`a/b + c/d = (ad + bc)/(bd)`}</InlineMath>,{' '}
            <InlineMath>{`(a/b)(c/d) = (ac)/(bd)`}</InlineMath></li>
          <li>• Must verify operations are <strong>well-defined</strong></li>
          <li>• The ratios form a <strong>field</strong> (all 10 axioms hold)</li>
          <li>• The same construction works for any integral domain → <strong>field of quotients</strong></li>
          <li>• <InlineMath>{`\\mathbb{Z}`}</InlineMath> embeds in <InlineMath>{`\\mathbb{Q}`}</InlineMath>{' '}
            via <InlineMath>{`a \\mapsto a/1`}</InlineMath></li>
        </ul>
      </div>

      {/* Section Quiz */}
      <SectionQuiz sectionId={34} questions={section34Questions} />
    </LessonLayout>
  );
}
