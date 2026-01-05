import { LessonLayout } from '../../components/layout/LessonLayout';
import { Callout } from '../../components/common/Callout';
import { Card, CardHeader } from '../../components/common/Card';
import { InlineMath, MathBlock } from '../../components/common/MathBlock';
import { SectionQuiz } from '../../components/quiz';
import { section32Questions } from '../../data/quizzes';

export default function Section32() {
  return (
    <LessonLayout sectionId={32}>
      <h2 className="text-2xl font-semibold mb-4">Natural Numbers (Peano's Approach)</h2>

      <p className="text-dark-200 mb-6 text-lg leading-relaxed">
        <strong>Giuseppe Peano</strong> (1858–1932) published his axioms for the natural
        numbers in his <em>Arithmetices Principia</em> (1889), a book written in a
        language he invented. His approach gives a formal foundation for arithmetic
        using just three primitive notions: a set, a special element, and a successor function.
      </p>

      {/* Peano's Axioms */}
      <h3 className="text-xl font-semibold mt-8 mb-4">Peano's Axioms</h3>

      <p className="text-dark-200 mb-4">
        For Peano, the natural number system is a triple{' '}
        <InlineMath>{`(\\mathbb{N}, 0, S)`}</InlineMath>, where <InlineMath>{`\\mathbb{N}`}</InlineMath>{' '}
        is a set, <InlineMath>{`0`}</InlineMath> is an element of that set, and{' '}
        <InlineMath>{`S`}</InlineMath> is the <strong>successor function</strong> whose
        domain and codomain are that set.
      </p>

      <Callout type="success" title="Peano's Axioms">
        <p className="mb-2">
          The following axioms hold for all elements <InlineMath>{`x`}</InlineMath> and{' '}
          <InlineMath>{`y`}</InlineMath> of <InlineMath>{`\\mathbb{N}`}</InlineMath>:
        </p>
        <ol className="list-decimal list-inside space-y-2 ml-4">
          <li><InlineMath>{`Sx \\neq 0`}</InlineMath> (zero is not a successor)</li>
          <li><InlineMath>{`Sx = Sy \\Rightarrow x = y`}</InlineMath> (the successor function is injective)</li>
          <li><strong>Mathematical Induction:</strong> For any proposition{' '}
            <InlineMath>{`\\phi(x)`}</InlineMath> involving a natural number <InlineMath>{`x`}</InlineMath>:
            <ul className="list-disc list-inside ml-6 mt-1">
              <li>If <InlineMath>{`\\phi(0)`}</InlineMath> holds, and</li>
              <li>If <InlineMath>{`\\forall x \\in \\mathbb{N}, \\phi(x) \\Rightarrow \\phi(Sx)`}</InlineMath></li>
            </ul>
            <p className="mt-1">then <InlineMath>{`\\phi(x)`}</InlineMath> is true for all natural numbers.</p>
          </li>
        </ol>
      </Callout>

      <p className="text-dark-200 mb-4 mt-4">
        We define <InlineMath>{`1`}</InlineMath> as <InlineMath>{`S0`}</InlineMath> and{' '}
        <InlineMath>{`2`}</InlineMath> as <InlineMath>{`SS0 = S1`}</InlineMath>, etc.
        Note that axiom (3) is not a single axiom but a whole <strong>scheme</strong> or
        class of axioms, one for each proposition <InlineMath>{`\\phi`}</InlineMath>.
      </p>

      {/* Recursive Definitions */}
      <h3 className="text-xl font-semibold mt-8 mb-4">Recursive Definitions</h3>

      <p className="text-dark-200 mb-4">
        In Peano's system, we define the basic arithmetic operations using{' '}
        <strong>recursive definitions</strong>—definitions that specify the value at 0
        and show how to compute the value at <InlineMath>{`Sy`}</InlineMath> from the
        value at <InlineMath>{`y`}</InlineMath>.
      </p>

      <Card className="mb-6">
        <CardHeader>Addition</CardHeader>
        <div className="text-dark-300 space-y-3">
          <MathBlock>{`\\begin{aligned}
x + 0 &= x \\\\
x + Sy &= S(x + y)
\\end{aligned}`}</MathBlock>
          <p className="text-sm">
            <strong>Example:</strong> Computing <InlineMath>{`3 + 2`}</InlineMath>:
          </p>
          <MathBlock>{`3 + 2 = 3 + S1 = S(3 + 1) = S(3 + S0) = S(S(3 + 0)) = SS3 = 5`}</MathBlock>
        </div>
      </Card>

      <Card className="mb-6">
        <CardHeader>Multiplication</CardHeader>
        <div className="text-dark-300 space-y-3">
          <MathBlock>{`\\begin{aligned}
x \\cdot 0 &= 0 \\\\
x \\cdot Sy &= (x \\cdot y) + x
\\end{aligned}`}</MathBlock>
          <p className="text-sm">
            <strong>Example:</strong> Computing <InlineMath>{`3 \\cdot 2`}</InlineMath>:
          </p>
          <MathBlock>{`3 \\cdot 2 = 3 \\cdot S1 = (3 \\cdot 1) + 3 = (3 \\cdot S0) + 3 = ((3 \\cdot 0) + 3) + 3 = (0 + 3) + 3 = 6`}</MathBlock>
        </div>
      </Card>

      <Card className="mb-6">
        <CardHeader>Exponentiation</CardHeader>
        <div className="text-dark-300 space-y-3">
          <MathBlock>{`\\begin{aligned}
x^0 &= 1 \\\\
x^{Sy} &= (x^y) \\cdot x
\\end{aligned}`}</MathBlock>
          <p className="text-sm">
            Note that even <InlineMath>{`0^0 = 1`}</InlineMath> in this definition!
          </p>
        </div>
      </Card>

      {/* Laws of Arithmetic */}
      <h3 className="text-xl font-semibold mt-8 mb-4">Laws of Arithmetic</h3>

      <p className="text-dark-200 mb-4">
        All the usual laws of arithmetic follow from Peano's axioms and the recursive
        definitions. These include:
      </p>

      <div className="bg-dark-800 rounded-lg p-4 mb-6">
        <ul className="text-dark-200 space-y-2">
          <li><strong>Commutativity:</strong>{' '}
            <InlineMath>{`x + y = y + x`}</InlineMath>,{' '}
            <InlineMath>{`xy = yx`}</InlineMath></li>
          <li><strong>Associativity:</strong>{' '}
            <InlineMath>{`x + (y + z) = (x + y) + z`}</InlineMath>,{' '}
            <InlineMath>{`x(yz) = (xy)z`}</InlineMath></li>
          <li><strong>Distributivity:</strong>{' '}
            <InlineMath>{`x(y + z) = xy + xz`}</InlineMath>,{' '}
            <InlineMath>{`(x + y)z = xz + yz`}</InlineMath></li>
          <li><strong>Laws of Indices:</strong>{' '}
            <InlineMath>{`(x^y)^z = x^{yz}`}</InlineMath>,{' '}
            <InlineMath>{`x^y x^z = x^{y+z}`}</InlineMath>,{' '}
            <InlineMath>{`x^z y^z = (xy)^z`}</InlineMath></li>
        </ul>
      </div>

      {/* Example Proof */}
      <h3 className="text-xl font-semibold mt-8 mb-4">Example Proofs by Induction</h3>

      <Card className="mb-6">
        <CardHeader>Lemma: 0 + x = x</CardHeader>
        <div className="text-dark-300 space-y-3">
          <p><strong>Proof:</strong> We use mathematical induction.</p>
          <p>
            <em>Base case:</em> When <InlineMath>{`x = 0`}</InlineMath>:{' '}
            <InlineMath>{`0 + 0 = 0`}</InlineMath> by the definition of addition.
          </p>
          <p>
            <em>Inductive step:</em> Assume it holds for <InlineMath>{`x`}</InlineMath>
            (this is the <strong>induction hypothesis</strong>). We show it holds for{' '}
            <InlineMath>{`Sx`}</InlineMath>:
          </p>
          <MathBlock>{`0 + Sx = S(0 + x) = S(x + 0) = Sx`}</MathBlock>
          <p>
            The first equality uses the definition of +; the second uses the induction
            hypothesis; the third uses the definition of +.
          </p>
        </div>
      </Card>

      <Card className="mb-6">
        <CardHeader>Theorem: x + y = y + x (Commutativity)</CardHeader>
        <div className="text-dark-300 space-y-3">
          <p><strong>Proof:</strong> By induction on <InlineMath>{`y`}</InlineMath>.</p>
          <p>
            <em>Base case:</em> When <InlineMath>{`y = 0`}</InlineMath>:{' '}
            <InlineMath>{`x + 0 = x = 0 + x`}</InlineMath> (using the lemma above).
          </p>
          <p>
            <em>Inductive step:</em> Assuming <InlineMath>{`x + y = y + x`}</InlineMath>,
            we prove <InlineMath>{`x + Sy = Sy + x`}</InlineMath>:
          </p>
          <MathBlock>{`x + Sy = S(x + y) = S(y + x) = Sy + x`}</MathBlock>
        </div>
      </Card>

      {/* Naive Subtraction */}
      <h3 className="text-xl font-semibold mt-8 mb-4">Predecessor and Naive Subtraction</h3>

      <p className="text-dark-200 mb-4">
        Every natural number except 0 has a <strong>predecessor</strong>. We can define
        a "naive predecessor" function as follows:
      </p>

      <MathBlock>{`P0 = 0, \\quad PSy = y`}</MathBlock>

      <p className="text-dark-200 mb-4 mt-4">
        Given this, we can define <strong>naive subtraction</strong>{' '}
        <InlineMath>{`\\dot{-}`}</InlineMath>:
      </p>

      <MathBlock>{`x \\dot{-} 0 = x, \\quad x \\dot{-} Sy = P(x \\dot{-} y)`}</MathBlock>

      <Callout type="info" title="Why 'Naive' Subtraction?">
        <p>
          We use the symbol <InlineMath>{`\\dot{-}`}</InlineMath> rather than{' '}
          <InlineMath>{`-`}</InlineMath> because naive subtraction is not quite
          the same as ordinary subtraction. We cannot say <InlineMath>{`1 - 3 = -2`}</InlineMath>{' '}
          since <InlineMath>{`-2`}</InlineMath> is not a natural number. Instead,{' '}
          <InlineMath>{`1 \\dot{-} 3 = 0`}</InlineMath>.
        </p>
      </Callout>

      <p className="text-dark-200 mb-4 mt-4">
        We can also define:
      </p>
      <ul className="text-dark-300 space-y-1 mb-6 ml-4">
        <li>• <InlineMath>{`\\min(x, y) = x \\dot{-} (x \\dot{-} y)`}</InlineMath></li>
        <li>• <InlineMath>{`\\max(x, y) = x + y \\dot{-} \\min(x, y)`}</InlineMath></li>
      </ul>

      {/* Summary */}
      <h3 className="text-xl font-semibold mt-8 mb-4">Summary</h3>

      <div className="bg-dark-800 rounded-lg p-4 mb-6">
        <ul className="text-dark-200 space-y-2">
          <li>• <strong>Peano</strong> (1858–1932) published his axioms in <em>Arithmetices Principia</em> (1889)</li>
          <li>• Natural numbers are <InlineMath>{`(\\mathbb{N}, 0, S)`}</InlineMath>:
            a set, zero, and successor function</li>
          <li>• <strong>Three axioms:</strong> 0 is not a successor; S is injective; mathematical induction</li>
          <li>• <strong>Mathematical induction</strong> is an axiom scheme (one for each proposition)</li>
          <li>• Operations defined <strong>recursively:</strong>
            <ul className="ml-6 mt-1 space-y-1 text-sm">
              <li>– <InlineMath>{`x + 0 = x`}</InlineMath>,{' '}
                <InlineMath>{`x + Sy = S(x + y)`}</InlineMath></li>
              <li>– <InlineMath>{`x \\cdot 0 = 0`}</InlineMath>,{' '}
                <InlineMath>{`x \\cdot Sy = xy + x`}</InlineMath></li>
              <li>– <InlineMath>{`x^0 = 1`}</InlineMath>,{' '}
                <InlineMath>{`x^{Sy} = x^y \\cdot x`}</InlineMath></li>
            </ul>
          </li>
          <li>• All laws of arithmetic (commutativity, associativity, distributivity) are provable</li>
          <li>• <strong>Naive subtraction</strong> <InlineMath>{`\\dot{-}`}</InlineMath> handles{' '}
            <InlineMath>{`x < y`}</InlineMath> by returning 0</li>
        </ul>
      </div>

      {/* Section Quiz */}
      <SectionQuiz sectionId={32} questions={section32Questions} />
    </LessonLayout>
  );
}
