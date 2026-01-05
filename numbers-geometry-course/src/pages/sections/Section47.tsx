import { LessonLayout } from '../../components/layout/LessonLayout';
import { Callout } from '../../components/common/Callout';
import { Card, CardGrid, CardHeader } from '../../components/common/Card';
import { InlineMath, MathBlock } from '../../components/common/MathBlock';
import { SectionQuiz } from '../../components/quiz';
import { section47Questions } from '../../data/quizzes';

export default function Section47() {
  return (
    <LessonLayout sectionId={47}>
      <h2 className="text-2xl font-semibold mb-4">Arithmetic mod n</h2>

      <p className="text-dark-200 mb-6 text-lg leading-relaxed">
        Gauss introduced a precise notation for modular arithmetic that has become
        standard in mathematics. His insight was to focus on <strong>equivalence
        classes</strong> rather than individual numbers.
      </p>

      {/* Congruence Definition */}
      <h3 className="text-xl font-semibold mt-10 mb-4">Congruence</h3>

      <div className="bg-blue-900/30 border border-blue-500/30 rounded-lg p-6 mb-6">
        <h4 className="text-lg font-semibold text-blue-400 mb-3">Definition</h4>
        <p className="text-dark-200 mb-4">
          Let <InlineMath>n</InlineMath> be a positive integer. We say{' '}
          <InlineMath>a</InlineMath> is <strong>congruent</strong> to{' '}
          <InlineMath>b</InlineMath> modulo <InlineMath>n</InlineMath>, written
        </p>
        <MathBlock>{`a \\equiv b \\pmod n`}</MathBlock>
        <p className="text-dark-200 mt-4">
          if <InlineMath>n</InlineMath> divides <InlineMath>a - b</InlineMath>.
          Equivalently, <InlineMath>a</InlineMath> and <InlineMath>b</InlineMath>{' '}
          leave the same remainder when divided by <InlineMath>n</InlineMath>.
        </p>
      </div>

      <p className="text-dark-200 mb-6">
        The notation <InlineMath>a \equiv b \pmod n</InlineMath> was introduced by
        Gauss in his <em>Disquisitiones Arithmeticae</em> (1801). It emphasizes that
        congruence is an <strong>equivalence relation</strong>—like equality, but
        coarser.
      </p>

      {/* Examples */}
      <h3 className="text-xl font-semibold mt-10 mb-4">Examples</h3>

      <div className="bg-dark-800 rounded-lg p-6 mb-6">
        <ul className="space-y-3 text-dark-200">
          <li className="flex items-start gap-3">
            <span className="text-blue-400 font-bold">•</span>
            <span>
              <InlineMath>17 \equiv 5 \pmod{12}</InlineMath> since{' '}
              <InlineMath>17 - 5 = 12</InlineMath>
            </span>
          </li>
          <li className="flex items-start gap-3">
            <span className="text-blue-400 font-bold">•</span>
            <span>
              <InlineMath>-3 \equiv 4 \pmod 7</InlineMath> since{' '}
              <InlineMath>-3 - 4 = -7</InlineMath>
            </span>
          </li>
          <li className="flex items-start gap-3">
            <span className="text-blue-400 font-bold">•</span>
            <span>
              <InlineMath>100 \equiv 0 \pmod{10}</InlineMath> since{' '}
              <InlineMath>10 \mid 100</InlineMath>
            </span>
          </li>
          <li className="flex items-start gap-3">
            <span className="text-blue-400 font-bold">•</span>
            <span>
              <InlineMath>n \equiv 0 \pmod n</InlineMath> for any{' '}
              <InlineMath>n</InlineMath>
            </span>
          </li>
        </ul>
      </div>

      {/* Equivalence Relation Properties */}
      <h3 className="text-xl font-semibold mt-10 mb-4">
        Properties of Congruence
      </h3>

      <p className="text-dark-200 mb-6">
        Congruence mod <InlineMath>n</InlineMath> is an <strong>equivalence
        relation</strong>, meaning it satisfies three key properties:
      </p>

      <CardGrid>
        <Card>
          <CardHeader title="Reflexive" />
          <p className="text-xs text-dark-300">
            <InlineMath>a \equiv a \pmod n</InlineMath> for all{' '}
            <InlineMath>a</InlineMath>
          </p>
        </Card>
        <Card>
          <CardHeader title="Symmetric" />
          <p className="text-xs text-dark-300">
            If <InlineMath>a \equiv b</InlineMath>, then{' '}
            <InlineMath>b \equiv a</InlineMath>
          </p>
        </Card>
        <Card>
          <CardHeader title="Transitive" />
          <p className="text-xs text-dark-300">
            If <InlineMath>a \equiv b</InlineMath> and{' '}
            <InlineMath>b \equiv c</InlineMath>, then{' '}
            <InlineMath>a \equiv c</InlineMath>
          </p>
        </Card>
      </CardGrid>

      {/* Arithmetic Properties */}
      <h3 className="text-xl font-semibold mt-10 mb-4">
        Arithmetic with Congruences
      </h3>

      <p className="text-dark-200 mb-6">
        The power of congruences comes from the fact that we can <strong>add,
        subtract, and multiply</strong> them like equations:
      </p>

      <div className="bg-green-900/30 border border-green-500/30 rounded-lg p-6 mb-6">
        <h4 className="text-lg font-semibold text-green-400 mb-3">
          Arithmetic Rules
        </h4>
        <p className="text-dark-200 mb-4">
          If <InlineMath>a \equiv b \pmod n</InlineMath> and{' '}
          <InlineMath>c \equiv d \pmod n</InlineMath>, then:
        </p>
        <ul className="space-y-2 text-dark-200">
          <li>
            <InlineMath>a + c \equiv b + d \pmod n</InlineMath> (addition)
          </li>
          <li>
            <InlineMath>a - c \equiv b - d \pmod n</InlineMath> (subtraction)
          </li>
          <li>
            <InlineMath>ac \equiv bd \pmod n</InlineMath> (multiplication)
          </li>
          <li>
            <InlineMath>a^k \equiv b^k \pmod n</InlineMath> (powers)
          </li>
        </ul>
      </div>

      <p className="text-dark-200 mb-6">
        These rules let us simplify calculations. For example, to find{' '}
        <InlineMath>3^{100} \pmod 7</InlineMath>:
      </p>

      <div className="bg-dark-800 rounded-lg p-6 mb-6">
        <p className="text-dark-200 mb-2">
          First note that <InlineMath>3^2 = 9 \equiv 2 \pmod 7</InlineMath>
        </p>
        <p className="text-dark-200 mb-2">
          Then <InlineMath>3^3 = 3 \cdot 9 \equiv 3 \cdot 2 = 6 \equiv -1 \pmod 7</InlineMath>
        </p>
        <p className="text-dark-200 mb-2">
          So <InlineMath>3^6 \equiv (-1)^2 = 1 \pmod 7</InlineMath>
        </p>
        <p className="text-dark-200">
          Since <InlineMath>100 = 6 \cdot 16 + 4</InlineMath>, we have{' '}
          <InlineMath>3^{'{100}'} = (3^6)^{'{16}'} \cdot 3^4 \equiv 1 \cdot 81 \equiv 4 \pmod 7</InlineMath>
        </p>
      </div>

      {/* Residue Classes */}
      <h3 className="text-xl font-semibold mt-10 mb-4">Residue Classes</h3>

      <p className="text-dark-200 mb-6">
        An equivalence relation partitions the integers into disjoint{' '}
        <strong>equivalence classes</strong>. For congruence mod{' '}
        <InlineMath>n</InlineMath>, these are called <strong>residue classes</strong>.
      </p>

      <div className="bg-dark-800 rounded-lg p-6 mb-6">
        <p className="text-dark-200 mb-4">
          For mod 3, the residue classes are:
        </p>
        <ul className="space-y-2 text-dark-200">
          <li>
            <InlineMath>[0]_3 = \{'{'}\ldots, -6, -3, 0, 3, 6, 9, \ldots\{'}'}</InlineMath>
          </li>
          <li>
            <InlineMath>[1]_3 = \{'{'}\ldots, -5, -2, 1, 4, 7, 10, \ldots\{'}'}</InlineMath>
          </li>
          <li>
            <InlineMath>[2]_3 = \{'{'}\ldots, -4, -1, 2, 5, 8, 11, \ldots\{'}'}</InlineMath>
          </li>
        </ul>
      </div>

      <p className="text-dark-200 mb-6">
        Every integer belongs to exactly one of these three classes. We typically
        represent each class by its smallest non-negative member:{' '}
        <InlineMath>0, 1, 2</InlineMath>.
      </p>

      <Callout type="info">
        <p>
          The set of residue classes mod <InlineMath>n</InlineMath> is denoted{' '}
          <InlineMath>\mathbb{'{Z}'}/n\mathbb{'{Z}'}</InlineMath> or{' '}
          <InlineMath>\mathbb{'{Z}'}_n</InlineMath>. It contains exactly{' '}
          <InlineMath>n</InlineMath> elements: the classes{' '}
          <InlineMath>[0], [1], \ldots, [n-1]</InlineMath>.
        </p>
      </Callout>

      {/* The Division Algorithm */}
      <h3 className="text-xl font-semibold mt-10 mb-4">
        The Division Algorithm
      </h3>

      <p className="text-dark-200 mb-6">
        The foundation of modular arithmetic is the <strong>division algorithm</strong>:
        given integers <InlineMath>a</InlineMath> and <InlineMath>n {'>'} 0</InlineMath>,
        there exist unique integers <InlineMath>q</InlineMath> (quotient) and{' '}
        <InlineMath>r</InlineMath> (remainder) such that:
      </p>

      <MathBlock>{`a = qn + r \\quad \\text{where } 0 \\le r < n`}</MathBlock>

      <p className="text-dark-200 my-6">
        The remainder <InlineMath>r</InlineMath> is the unique representative of{' '}
        <InlineMath>a</InlineMath>'s residue class in the range{' '}
        <InlineMath>\{'{'}0, 1, \ldots, n-1\{'}'}</InlineMath>.
      </p>

      {/* Summary */}
      <div className="bg-dark-800 rounded-lg p-6 mt-8">
        <h4 className="text-lg font-semibold mb-4">Key Points</h4>
        <ul className="space-y-2 text-dark-200">
          <li className="flex items-start gap-3">
            <span className="text-amber-400 font-bold">•</span>
            <span>
              <InlineMath>a \equiv b \pmod n</InlineMath> means{' '}
              <InlineMath>n \mid (a - b)</InlineMath>
            </span>
          </li>
          <li className="flex items-start gap-3">
            <span className="text-amber-400 font-bold">•</span>
            <span>
              Congruence is an equivalence relation (reflexive, symmetric, transitive)
            </span>
          </li>
          <li className="flex items-start gap-3">
            <span className="text-amber-400 font-bold">•</span>
            <span>
              We can add, subtract, and multiply congruences
            </span>
          </li>
          <li className="flex items-start gap-3">
            <span className="text-amber-400 font-bold">•</span>
            <span>
              There are exactly <InlineMath>n</InlineMath> residue classes mod{' '}
              <InlineMath>n</InlineMath>
            </span>
          </li>
        </ul>
      </div>

      {/* Section Quiz */}
      <SectionQuiz sectionId={47} questions={section47Questions} />
    </LessonLayout>
  );
}
