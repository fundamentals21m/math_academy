import { LessonLayout } from '../../components/layout/LessonLayout';
import { Callout } from '../../components/common/Callout';
import { Card, CardGrid, CardHeader } from '../../components/common/Card';
import { InlineMath, MathBlock } from '../../components/common/MathBlock';
import { SectionQuiz } from '../../components/quiz';
import { section03Questions } from '../../data/quizzes';

export default function Section03() {
  return (
    <LessonLayout sectionId={3}>
      <h2 className="text-2xl font-semibold mb-4">Integers and Rationals</h2>

      <p className="text-dark-200 mb-6 text-lg leading-relaxed">
        Everyone will agree that the natural numbers 1, 2, 3, 4, ... deserve the name
        "natural," but mathematicians feel they are not natural enough. The natural
        numbers are fine for counting, but not for arithmetic, because they do not
        permit unlimited subtraction. We cannot take 7 from 3, for example.
      </p>

      {/* Extending to Integers */}
      <h3 className="text-xl font-semibold mt-10 mb-4">From Natural Numbers to Integers</h3>

      <p className="text-dark-200 mb-6">
        To make subtraction always possible, we extend the set <InlineMath>\mathbb{'{N}'}</InlineMath>{' '}
        of natural numbers to the set <InlineMath>\mathbb{'{Z}'}</InlineMath> of <strong>integers</strong>{' '}
        by adjoining 0 and the negative integers <InlineMath>-1, -2, -3, -4, \ldots</InlineMath>
      </p>

      <div className="bg-dark-800 rounded-lg p-6 mb-6 border-l-4 border-amber-400">
        <h4 className="text-lg font-semibold mb-3 text-amber-400">The Integers</h4>
        <MathBlock>{`\\mathbb{Z} = \\{\\ldots, -3, -2, -1, 0, 1, 2, 3, \\ldots\\}`}</MathBlock>
        <p className="text-dark-400 text-sm mt-3">
          The letter <InlineMath>\mathbb{'{Z}'}</InlineMath> stands for "Zahlen," the German word for "numbers."
        </p>
      </div>

      <p className="text-dark-200 mb-6">
        The natural numbers now start a new life as the <strong>positive integers</strong>.
        Each positive integer <InlineMath>a</InlineMath> has an <strong>additive inverse</strong>{' '}
        <InlineMath>-a</InlineMath>, and the additive inverse of <InlineMath>-a</InlineMath> is
        defined to be <InlineMath>a</InlineMath>. If we also define <InlineMath>-0 = 0</InlineMath>,
        then in all cases <InlineMath>-(-a) = a</InlineMath>.
      </p>

      {/* Properties of Addition */}
      <h3 className="text-xl font-semibold mt-10 mb-4">Properties of Addition</h3>

      <p className="text-dark-200 mb-6">
        How do <InlineMath>+</InlineMath> and <InlineMath>-</InlineMath> behave? We insist
        they behave on <InlineMath>\mathbb{'{Z}'}</InlineMath> the same way they behave on{' '}
        <InlineMath>\mathbb{'{N}'}</InlineMath>:
      </p>

      <div className="bg-dark-800 rounded-lg p-6 mb-6">
        <div className="space-y-3">
          <div className="flex justify-between items-center">
            <MathBlock>{`a + (b + c) = (a + b) + c`}</MathBlock>
            <span className="text-amber-400 text-sm">(associative law)</span>
          </div>
          <div className="flex justify-between items-center">
            <MathBlock>{`a + b = b + a`}</MathBlock>
            <span className="text-amber-400 text-sm">(commutative law)</span>
          </div>
          <div className="flex justify-between items-center">
            <MathBlock>{`a + (-a) = 0`}</MathBlock>
            <span className="text-amber-400 text-sm">(additive inverse)</span>
          </div>
          <div className="flex justify-between items-center">
            <MathBlock>{`a + 0 = a`}</MathBlock>
            <span className="text-amber-400 text-sm">(identity of 0)</span>
          </div>
        </div>
      </div>

      <Callout type="info">
        <p>
          From these rules we can prove <strong>uniqueness of additive inverse</strong>:{' '}
          <InlineMath>-a</InlineMath> is the only integer <InlineMath>b</InlineMath> such
          that <InlineMath>a + b = 0</InlineMath>. This is what we normally call "solving
          for <InlineMath>b</InlineMath>."
        </p>
      </Callout>

      {/* Properties of Multiplication */}
      <h3 className="text-xl font-semibold mt-10 mb-4">Properties of Multiplication</h3>

      <p className="text-dark-200 mb-6">
        There is a similar set of rules describing the behavior of <InlineMath>\times</InlineMath>:
      </p>

      <div className="bg-dark-800 rounded-lg p-6 mb-6">
        <div className="space-y-3">
          <div className="flex justify-between items-center">
            <MathBlock>{`a \\times (b \\times c) = (a \\times b) \\times c`}</MathBlock>
            <span className="text-amber-400 text-sm">(associative law)</span>
          </div>
          <div className="flex justify-between items-center">
            <MathBlock>{`a \\times b = b \\times a`}</MathBlock>
            <span className="text-amber-400 text-sm">(commutative law)</span>
          </div>
          <div className="flex justify-between items-center">
            <MathBlock>{`a \\times 1 = a`}</MathBlock>
            <span className="text-amber-400 text-sm">(identity of 1)</span>
          </div>
          <div className="flex justify-between items-center">
            <MathBlock>{`a \\times 0 = 0`}</MathBlock>
            <span className="text-amber-400 text-sm">(property of 0)</span>
          </div>
        </div>
      </div>

      <p className="text-dark-200 mb-4">
        And finally, a rule for the interaction of <InlineMath>+</InlineMath> and{' '}
        <InlineMath>\times</InlineMath>:
      </p>

      <div className="bg-dark-800 rounded-lg p-6 mb-6 border-l-4 border-emerald-400">
        <h4 className="text-lg font-semibold mb-3 text-emerald-400">The Distributive Law</h4>
        <MathBlock>{`a \\times (b + c) = a \\times b + a \\times c`}</MathBlock>
      </div>

      {/* Why (-1)×(-1) = 1 */}
      <h3 className="text-xl font-semibold mt-10 mb-4">Why Does (-1) × (-1) = 1?</h3>

      <p className="text-dark-200 mb-6">
        From these rules we can deduce that <InlineMath>a \times (-1) = -a</InlineMath> for
        any integer <InlineMath>a</InlineMath>:
      </p>

      <div className="bg-dark-800 rounded-lg p-6 mb-6">
        <div className="space-y-2 text-dark-200 text-sm">
          <p><InlineMath>a + a \times (-1)</InlineMath></p>
          <p className="pl-4"><InlineMath>= a \times 1 + a \times (-1)</InlineMath> <span className="text-dark-500 ml-2">(identity property of 1)</span></p>
          <p className="pl-4"><InlineMath>= a \times (1 + (-1))</InlineMath> <span className="text-dark-500 ml-2">(distributive law)</span></p>
          <p className="pl-4"><InlineMath>= a \times 0</InlineMath> <span className="text-dark-500 ml-2">(additive inverse property)</span></p>
          <p className="pl-4"><InlineMath>= 0</InlineMath> <span className="text-dark-500 ml-2">(property of 0)</span></p>
          <p className="mt-2"><InlineMath>\Rightarrow a \times (-1) = -a</InlineMath> <span className="text-dark-500 ml-2">(uniqueness of additive inverse)</span></p>
        </div>
      </div>

      <Callout type="success">
        <p>
          It follows that <InlineMath>(-1) \times (-1) = -(-1) = 1</InlineMath>, because
          the additive inverse of <InlineMath>-1</InlineMath> is <InlineMath>1</InlineMath>.
          More generally, <InlineMath>(-a)(-b) = ab</InlineMath>.
        </p>
      </Callout>

      {/* Rationals */}
      <h3 className="text-xl font-semibold mt-10 mb-4">From Integers to Rationals</h3>

      <p className="text-dark-200 mb-6">
        We extend the set <InlineMath>\mathbb{'{Z}'}</InlineMath> of integers to the set{' '}
        <InlineMath>\mathbb{'{Q}'}</InlineMath> of <strong>rational numbers</strong> (or simply
        <em> rationals</em>) by adjoining a <strong>multiplicative inverse</strong>{' '}
        <InlineMath>a^{'{-1}'}</InlineMath> of each nonzero integer <InlineMath>a</InlineMath>.
      </p>

      <div className="bg-dark-800 rounded-lg p-6 mb-6 border-l-4 border-purple-400">
        <h4 className="text-lg font-semibold mb-3 text-purple-400">Multiplicative Inverse Property</h4>
        <MathBlock>{`a \\times a^{-1} = 1`}</MathBlock>
        <p className="text-dark-400 text-sm mt-3">
          The symbol <InlineMath>\mathbb{'{Q}'}</InlineMath> stands for "quotients."
        </p>
      </div>

      <p className="text-dark-200 mb-6">
        The quotient <InlineMath>a \div b</InlineMath> or <InlineMath>a/b</InlineMath> is
        the same as <InlineMath>a \times b^{'{-1}'}</InlineMath>. We add and multiply
        fractions according to familiar rules:
      </p>

      <CardGrid>
        <Card>
          <CardHeader title="Adding Fractions" />
          <MathBlock>{`\\frac{a}{b} + \\frac{c}{d} = \\frac{ad + bc}{bd}`}</MathBlock>
        </Card>
        <Card>
          <CardHeader title="Multiplying Fractions" />
          <MathBlock>{`\\frac{a}{b} \\cdot \\frac{c}{d} = \\frac{ac}{bd}`}</MathBlock>
        </Card>
      </CardGrid>

      {/* Rings and Fields */}
      <h3 className="text-xl font-semibold mt-10 mb-4">Rings and Fields</h3>

      <p className="text-dark-200 mb-6">
        The rules governing <InlineMath>+</InlineMath>, <InlineMath>-</InlineMath>, and{' '}
        <InlineMath>\times</InlineMath> are called the <strong>ring properties</strong>.
        Any set with operations <InlineMath>+</InlineMath> and <InlineMath>\times</InlineMath>{' '}
        satisfying these rules is called a <strong>ring</strong>.
      </p>

      <CardGrid>
        <Card>
          <CardHeader title="Ring" />
          <p className="text-sm text-dark-300 mb-2">
            A set with <InlineMath>+</InlineMath> and <InlineMath>\times</InlineMath>{' '}
            satisfying the ring properties.
          </p>
          <p className="text-sm text-emerald-400">
            Example: <InlineMath>\mathbb{'{Z}'}</InlineMath> (the integers)
          </p>
        </Card>
        <Card>
          <CardHeader title="Field" />
          <p className="text-sm text-dark-300 mb-2">
            A ring with the multiplicative inverse property (for nonzero elements).
          </p>
          <p className="text-sm text-emerald-400">
            Example: <InlineMath>\mathbb{'{Q}'}</InlineMath> (the rationals)
          </p>
        </Card>
      </CardGrid>

      <Callout type="info">
        <p>
          The way we extended <InlineMath>\mathbb{'{Z}'}</InlineMath> to{' '}
          <InlineMath>\mathbb{'{Q}'}</InlineMath> is an instance of a common construction
          called "forming the <strong>field of fractions</strong>."
        </p>
      </Callout>

      {/* Why Rationals Matter */}
      <h3 className="text-xl font-semibold mt-10 mb-4">Why Rationals Matter</h3>

      <p className="text-dark-200 mb-6">
        Questions about the arithmetic of <InlineMath>\mathbb{'{Q}'}</InlineMath> are really
        equivalent to questions about <InlineMath>\mathbb{'{Z}'}</InlineMath>, or even{' '}
        <InlineMath>\mathbb{'{N}'}</InlineMath>, but the extra properties of{' '}
        <InlineMath>\mathbb{'{Q}'}</InlineMath> sometimes make life easier. This is
        particularly the case in geometry, where the rational numbers pave the way for
        interpreting <strong>points as numbers</strong>.
      </p>

      {/* Key Takeaways */}
      <h3 className="text-xl font-semibold mt-10 mb-4">Key Takeaways</h3>

      <div className="bg-dark-800 rounded-lg p-6">
        <ul className="space-y-3">
          <li className="flex items-start gap-3">
            <span className="text-amber-400 font-bold">1.</span>
            <span>
              The <strong>integers</strong> <InlineMath>\mathbb{'{Z}'}</InlineMath> extend{' '}
              <InlineMath>\mathbb{'{N}'}</InlineMath> by adding 0 and negatives, making
              subtraction always possible.
            </span>
          </li>
          <li className="flex items-start gap-3">
            <span className="text-amber-400 font-bold">2.</span>
            <span>
              The <strong>ring properties</strong> govern <InlineMath>+</InlineMath>,{' '}
              <InlineMath>-</InlineMath>, and <InlineMath>\times</InlineMath>: associative,
              commutative, identity, inverse, and distributive laws.
            </span>
          </li>
          <li className="flex items-start gap-3">
            <span className="text-amber-400 font-bold">3.</span>
            <span>
              From the ring properties we can prove <InlineMath>(-1) \times (-1) = 1</InlineMath>.
            </span>
          </li>
          <li className="flex items-start gap-3">
            <span className="text-amber-400 font-bold">4.</span>
            <span>
              The <strong>rationals</strong> <InlineMath>\mathbb{'{Q}'}</InlineMath> extend{' '}
              <InlineMath>\mathbb{'{Z}'}</InlineMath> by adding multiplicative inverses,
              making division (by nonzero) always possible.
            </span>
          </li>
          <li className="flex items-start gap-3">
            <span className="text-amber-400 font-bold">5.</span>
            <span>
              A <strong>ring</strong> satisfies the ring properties; a <strong>field</strong>{' '}
              is a ring where every nonzero element has a multiplicative inverse.
            </span>
          </li>
        </ul>
      </div>

      {/* Section Quiz */}
      <SectionQuiz sectionId={3} questions={section03Questions} />
    </LessonLayout>
  );
}
