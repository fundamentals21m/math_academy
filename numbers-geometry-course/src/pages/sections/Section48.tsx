import { LessonLayout } from '../../components/layout/LessonLayout';
import { Callout } from '../../components/common/Callout';
import { Card, CardGrid, CardHeader } from '../../components/common/Card';
import { InlineMath, MathBlock } from '../../components/common/MathBlock';
import { SectionQuiz } from '../../components/quiz';
import { section48Questions } from '../../data/quizzes';

export default function Section48() {
  return (
    <LessonLayout sectionId={48}>
      <h2 className="text-2xl font-semibold mb-4">
        The Ring <InlineMath>\mathbb{'{Z}'}/n\mathbb{'{Z}'}</InlineMath>
      </h2>

      <p className="text-dark-200 mb-6 text-lg leading-relaxed">
        The residue classes mod <InlineMath>n</InlineMath> form an algebraic
        structure called a <strong>ring</strong>. Understanding this structure
        reveals why some modular arithmetic behaves like ordinary integers—and
        some doesn't.
      </p>

      {/* Ring Definition */}
      <h3 className="text-xl font-semibold mt-10 mb-4">What is a Ring?</h3>

      <div className="bg-blue-900/30 border border-blue-500/30 rounded-lg p-6 mb-6">
        <h4 className="text-lg font-semibold text-blue-400 mb-3">Definition</h4>
        <p className="text-dark-200">
          A <strong>ring</strong> is a set with two operations (addition and
          multiplication) satisfying:
        </p>
        <ul className="mt-3 space-y-2 text-dark-200">
          <li>• Addition is commutative and associative</li>
          <li>• There's an additive identity (0) and additive inverses (-a)</li>
          <li>• Multiplication is associative</li>
          <li>• Distributive law: <InlineMath>a(b + c) = ab + ac</InlineMath></li>
        </ul>
      </div>

      <p className="text-dark-200 mb-6">
        The integers <InlineMath>\mathbb{'{Z}'}</InlineMath> form a ring, and so do the
        residue classes <InlineMath>\mathbb{'{Z}'}/n\mathbb{'{Z}'}</InlineMath> with operations
        defined by:
      </p>

      <MathBlock>
        {`[a] + [b] = [a + b] \\quad \\text{and} \\quad [a] \\cdot [b] = [ab]`}
      </MathBlock>

      {/* Well-Defined Operations */}
      <h3 className="text-xl font-semibold mt-10 mb-4">Well-Defined Operations</h3>

      <p className="text-dark-200 mb-6">
        A key point is that these operations are <strong>well-defined</strong>:
        the result doesn't depend on which representative we choose for each class.
      </p>

      <div className="bg-dark-800 rounded-lg p-6 mb-6">
        <p className="text-dark-200 mb-4">
          <strong>Example:</strong> In <InlineMath>\mathbb{'{Z}'}/5\mathbb{'{Z}'}</InlineMath>,
          we can compute <InlineMath>[3] + [4]</InlineMath> using any representatives:
        </p>
        <ul className="space-y-2 text-dark-200">
          <li>Using 3 and 4: <InlineMath>3 + 4 = 7 \equiv 2</InlineMath></li>
          <li>Using 8 and -1: <InlineMath>8 + (-1) = 7 \equiv 2</InlineMath></li>
          <li>Using -2 and 9: <InlineMath>-2 + 9 = 7 \equiv 2</InlineMath></li>
        </ul>
        <p className="text-dark-300 text-sm mt-3">
          All give the same residue class [2].
        </p>
      </div>

      {/* Addition and Multiplication Tables */}
      <h3 className="text-xl font-semibold mt-10 mb-4">
        Arithmetic in <InlineMath>\mathbb{'{Z}'}/5\mathbb{'{Z}'}</InlineMath>
      </h3>

      <p className="text-dark-200 mb-6">
        Here are the complete addition and multiplication tables for mod 5:
      </p>

      <div className="grid md:grid-cols-2 gap-6 mb-6">
        <div className="bg-dark-800 rounded-lg p-4">
          <h4 className="text-center font-semibold mb-3 text-blue-400">Addition</h4>
          <table className="w-full text-center text-sm">
            <thead>
              <tr className="text-dark-400">
                <th className="p-2">+</th>
                <th className="p-2">0</th>
                <th className="p-2">1</th>
                <th className="p-2">2</th>
                <th className="p-2">3</th>
                <th className="p-2">4</th>
              </tr>
            </thead>
            <tbody className="text-dark-200">
              <tr><td className="p-2 text-dark-400">0</td><td className="p-2">0</td><td className="p-2">1</td><td className="p-2">2</td><td className="p-2">3</td><td className="p-2">4</td></tr>
              <tr><td className="p-2 text-dark-400">1</td><td className="p-2">1</td><td className="p-2">2</td><td className="p-2">3</td><td className="p-2">4</td><td className="p-2">0</td></tr>
              <tr><td className="p-2 text-dark-400">2</td><td className="p-2">2</td><td className="p-2">3</td><td className="p-2">4</td><td className="p-2">0</td><td className="p-2">1</td></tr>
              <tr><td className="p-2 text-dark-400">3</td><td className="p-2">3</td><td className="p-2">4</td><td className="p-2">0</td><td className="p-2">1</td><td className="p-2">2</td></tr>
              <tr><td className="p-2 text-dark-400">4</td><td className="p-2">4</td><td className="p-2">0</td><td className="p-2">1</td><td className="p-2">2</td><td className="p-2">3</td></tr>
            </tbody>
          </table>
        </div>
        <div className="bg-dark-800 rounded-lg p-4">
          <h4 className="text-center font-semibold mb-3 text-green-400">Multiplication</h4>
          <table className="w-full text-center text-sm">
            <thead>
              <tr className="text-dark-400">
                <th className="p-2">×</th>
                <th className="p-2">0</th>
                <th className="p-2">1</th>
                <th className="p-2">2</th>
                <th className="p-2">3</th>
                <th className="p-2">4</th>
              </tr>
            </thead>
            <tbody className="text-dark-200">
              <tr><td className="p-2 text-dark-400">0</td><td className="p-2">0</td><td className="p-2">0</td><td className="p-2">0</td><td className="p-2">0</td><td className="p-2">0</td></tr>
              <tr><td className="p-2 text-dark-400">1</td><td className="p-2">0</td><td className="p-2">1</td><td className="p-2">2</td><td className="p-2">3</td><td className="p-2">4</td></tr>
              <tr><td className="p-2 text-dark-400">2</td><td className="p-2">0</td><td className="p-2">2</td><td className="p-2">4</td><td className="p-2">1</td><td className="p-2">3</td></tr>
              <tr><td className="p-2 text-dark-400">3</td><td className="p-2">0</td><td className="p-2">3</td><td className="p-2">1</td><td className="p-2">4</td><td className="p-2">2</td></tr>
              <tr><td className="p-2 text-dark-400">4</td><td className="p-2">0</td><td className="p-2">4</td><td className="p-2">3</td><td className="p-2">2</td><td className="p-2">1</td></tr>
            </tbody>
          </table>
        </div>
      </div>

      <Callout type="success">
        <p>
          Notice in the multiplication table: every non-zero element appears in
          every row and column (except the 0 row/column). This means every non-zero
          element has a <strong>multiplicative inverse</strong> in{' '}
          <InlineMath>\mathbb{'{Z}'}/5\mathbb{'{Z}'}</InlineMath>!
        </p>
      </Callout>

      {/* Zero Divisors */}
      <h3 className="text-xl font-semibold mt-10 mb-4">Zero Divisors</h3>

      <p className="text-dark-200 mb-6">
        Something strange happens in <InlineMath>\mathbb{'{Z}'}/6\mathbb{'{Z}'}</InlineMath>.
        Consider the multiplication <InlineMath>2 \times 3 = 6 \equiv 0</InlineMath>:
      </p>

      <MathBlock>{`[2] \\cdot [3] = [0] \\quad \\text{in } \\mathbb{Z}/6\\mathbb{Z}`}</MathBlock>

      <p className="text-dark-200 my-6">
        Neither 2 nor 3 is zero, yet their product is zero! Such elements are
        called <strong>zero divisors</strong>.
      </p>

      <div className="bg-red-900/30 border border-red-500/30 rounded-lg p-6 mb-6">
        <h4 className="text-lg font-semibold text-red-400 mb-3">Definition</h4>
        <p className="text-dark-200">
          A <strong>zero divisor</strong> in a ring is a non-zero element{' '}
          <InlineMath>a</InlineMath> such that <InlineMath>ab = 0</InlineMath>{' '}
          for some non-zero <InlineMath>b</InlineMath>.
        </p>
      </div>

      <p className="text-dark-200 mb-6">
        Zero divisors cause problems: if <InlineMath>a</InlineMath> is a zero
        divisor, then <InlineMath>a</InlineMath> cannot have a multiplicative
        inverse. (Why? If <InlineMath>a^{'{-1}'}</InlineMath> existed, then{' '}
        <InlineMath>ab = 0</InlineMath> would imply{' '}
        <InlineMath>b = a^{'{-1}'}(ab) = 0</InlineMath>.)
      </p>

      {/* Fields vs Rings */}
      <h3 className="text-xl font-semibold mt-10 mb-4">When is Z/nZ a Field?</h3>

      <CardGrid>
        <Card>
          <CardHeader title="Ring" />
          <p className="text-xs text-dark-300">
            Has addition, subtraction, multiplication. May have zero divisors.
            Example: <InlineMath>\mathbb{'{Z}'}/6\mathbb{'{Z}'}</InlineMath>
          </p>
        </Card>
        <Card>
          <CardHeader title="Field" />
          <p className="text-xs text-dark-300">
            A ring where every non-zero element has a multiplicative inverse. No
            zero divisors. Example: <InlineMath>\mathbb{'{Z}'}/5\mathbb{'{Z}'}</InlineMath>
          </p>
        </Card>
      </CardGrid>

      <div className="bg-purple-900/30 border border-purple-500/30 rounded-lg p-6 my-6">
        <h4 className="text-lg font-semibold text-purple-400 mb-3">Key Theorem</h4>
        <p className="text-dark-200">
          <InlineMath>\mathbb{'{Z}'}/n\mathbb{'{Z}'}</InlineMath> is a field if and only
          if <InlineMath>n</InlineMath> is <strong>prime</strong>.
        </p>
      </div>

      <p className="text-dark-200 mb-6">
        When <InlineMath>n = p</InlineMath> is prime, we often write{' '}
        <InlineMath>\mathbb{'{F}'}_p</InlineMath> or{' '}
        <InlineMath>\mathbb{'{Z}'}/p\mathbb{'{Z}'}</InlineMath> and call it the{' '}
        <strong>field with p elements</strong>. These finite fields are fundamental
        in cryptography and coding theory.
      </p>

      {/* Summary */}
      <div className="bg-dark-800 rounded-lg p-6 mt-8">
        <h4 className="text-lg font-semibold mb-4">Key Points</h4>
        <ul className="space-y-2 text-dark-200">
          <li className="flex items-start gap-3">
            <span className="text-amber-400 font-bold">•</span>
            <span>
              <InlineMath>\mathbb{'{Z}'}/n\mathbb{'{Z}'}</InlineMath> is a ring with{' '}
              <InlineMath>n</InlineMath> elements
            </span>
          </li>
          <li className="flex items-start gap-3">
            <span className="text-amber-400 font-bold">•</span>
            <span>
              Operations are well-defined on equivalence classes
            </span>
          </li>
          <li className="flex items-start gap-3">
            <span className="text-amber-400 font-bold">•</span>
            <span>
              Zero divisors exist when <InlineMath>n</InlineMath> is composite
            </span>
          </li>
          <li className="flex items-start gap-3">
            <span className="text-amber-400 font-bold">•</span>
            <span>
              <InlineMath>\mathbb{'{Z}'}/p\mathbb{'{Z}'}</InlineMath> is a field when{' '}
              <InlineMath>p</InlineMath> is prime
            </span>
          </li>
        </ul>
      </div>

      {/* Section Quiz */}
      <SectionQuiz sectionId={48} questions={section48Questions} />
    </LessonLayout>
  );
}
