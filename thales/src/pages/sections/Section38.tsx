import { LessonLayout } from '../../components/layout/LessonLayout';
import { Callout } from '../../components/common/Callout';
import { Card, CardGrid, CardHeader } from '../../components/common/Card';
import { InlineMath, MathBlock } from '../../components/common/MathBlock';
import { SectionQuiz } from '../../components/quiz';
import { section38Questions } from '../../data/quizzes';

export default function Section38() {
  return (
    <LessonLayout sectionId={38}>
      <h2 className="text-2xl font-semibold mb-4">Quaternions</h2>

      <p className="text-dark-200 mb-6 text-lg leading-relaxed">
        William Rowan Hamilton (1805–1865) first conceived complex numbers as ordered
        pairs of reals. His greatest contribution to pure mathematics, however, was
        his creation of an algebraic system in which the <strong>commutative law of
        multiplication does not hold</strong>.
      </p>

      {/* Historical Background */}
      <h3 className="text-xl font-semibold mt-8 mb-4">Historical Background</h3>

      <p className="text-dark-200 mb-4">
        Just as many people before Bolyai and Lobachevsky had thought of Euclid's
        fifth postulate as a necessary and sacred truth, so many people before
        Hamilton believed that the law of commutativity for the multiplication of
        numbers was decreed by heaven.
      </p>

      <Callout type="note" title="The Discovery">
        <p>
          The idea of quaternions dawned on Hamilton while he was strolling along
          the <strong>Royal Canal in Dublin in 1843</strong>. Matrix algebra came
          fourteen years later.
        </p>
      </Callout>

      {/* Definition */}
      <h3 className="text-xl font-semibold mt-8 mb-4">Definition</h3>

      <Callout type="definition" title="Quaternions">
        <p className="mb-2">
          Quaternions are numbers of the form:
        </p>
        <MathBlock>{`a + bi + cj + dk`}</MathBlock>
        <p className="mt-2">
          where <InlineMath>{`a, b, c, d`}</InlineMath> are real, and
        </p>
        <MathBlock>{`i^2 = j^2 = k^2 = ijk = -1`}</MathBlock>
      </Callout>

      {/* Why Non-Commutative */}
      <h3 className="text-xl font-semibold mt-8 mb-4">Why Non-Commutative?</h3>

      <p className="text-dark-200 mb-4">
        If quaternion multiplication were commutative, we could derive{' '}
        <InlineMath>{`ij = -ij`}</InlineMath>, and from this it would follow that{' '}
        <InlineMath>{`i = j = 0`}</InlineMath>, and the whole system would collapse.
      </p>

      <Card className="mb-6">
        <CardHeader>Non-Commutativity is Essential</CardHeader>
        <div className="text-dark-300 space-y-2">
          <p>
            We must have <InlineMath>{`ij \\neq ji`}</InlineMath>. The multiplication
            rules for the basis elements are:
          </p>
          <MathBlock>{`ij = k, \\quad jk = i, \\quad ki = j`}</MathBlock>
          <MathBlock>{`ji = -k, \\quad kj = -i, \\quad ik = -j`}</MathBlock>
        </div>
      </Card>

      {/* Matrix Representation */}
      <h3 className="text-xl font-semibold mt-8 mb-4">Matrix Representation</h3>

      <p className="text-dark-200 mb-4">
        How do we know that such entities as <InlineMath>{`i, j, k`}</InlineMath> exist?
        There are three <InlineMath>{`2 \\times 2`}</InlineMath> complex matrices:
      </p>

      <CardGrid columns={3}>
        <Card>
          <CardHeader><InlineMath>{`i_1`}</InlineMath></CardHeader>
          <MathBlock>{`\\begin{pmatrix} 0 & 1 \\\\ -1 & 0 \\end{pmatrix}`}</MathBlock>
        </Card>
        <Card>
          <CardHeader><InlineMath>{`i_2`}</InlineMath></CardHeader>
          <MathBlock>{`\\begin{pmatrix} 0 & i \\\\ i & 0 \\end{pmatrix}`}</MathBlock>
        </Card>
        <Card>
          <CardHeader><InlineMath>{`i_3`}</InlineMath></CardHeader>
          <MathBlock>{`\\begin{pmatrix} i & 0 \\\\ 0 & -i \\end{pmatrix}`}</MathBlock>
        </Card>
      </CardGrid>

      <p className="text-dark-200 mb-4 mt-4">
        These satisfy <InlineMath>{`i_1^2 = i_2^2 = i_3^2 = i_1 i_2 i_3 = -1`}</InlineMath>,
        where <InlineMath>{`1`}</InlineMath> is the identity matrix.
      </p>

      <Card className="mb-6">
        <CardHeader>Quaternion as Complex Matrix</CardHeader>
        <div className="text-dark-300 space-y-3">
          <p>
            The quaternion <InlineMath>{`a = a_0 + a_1 i_1 + a_2 i_2 + a_3 i_3`}</InlineMath>{' '}
            can be represented as:
          </p>
          <MathBlock>{`\\begin{pmatrix} a_0 + ia_3 & a_1 + ia_2 \\\\ -a_1 + ia_2 & a_0 - ia_3 \\end{pmatrix} = \\begin{pmatrix} u & v \\\\ -\\bar{v} & \\bar{u} \\end{pmatrix}`}</MathBlock>
          <p className="text-sm">
            where <InlineMath>{`u = a_0 + ia_3`}</InlineMath> and{' '}
            <InlineMath>{`v = a_1 + ia_2`}</InlineMath>.
          </p>
        </div>
      </Card>

      {/* Conjugate and Norm */}
      <h3 className="text-xl font-semibold mt-8 mb-4">Conjugate and Norm</h3>

      <Callout type="definition" title="Quaternion Conjugate">
        <p className="mb-2">
          The <strong>conjugate</strong> of a quaternion{' '}
          <InlineMath>{`a = a_0 + a_1 i_1 + a_2 i_2 + a_3 i_3`}</InlineMath> is:
        </p>
        <MathBlock>{`\\bar{a} = a_0 - a_1 i_1 - a_2 i_2 - a_3 i_3`}</MathBlock>
      </Callout>

      <p className="text-dark-200 mb-4 mt-4">
        Note that <InlineMath>{`a\\bar{a} = a_0^2 + a_1^2 + a_2^2 + a_3^2 = \\bar{a}a`}</InlineMath>.
      </p>

      <Callout type="definition" title="Norm">
        <p className="mb-2">
          The <strong>norm</strong> <InlineMath>{`N(a)`}</InlineMath> of a quaternion{' '}
          <InlineMath>{`a`}</InlineMath> is:
        </p>
        <MathBlock>{`N(a) = a\\bar{a} = a_0^2 + a_1^2 + a_2^2 + a_3^2`}</MathBlock>
        <p className="mt-2 text-sm">
          The norm is 0 if and only if the quaternion is the zero matrix.
        </p>
      </Callout>

      {/* Multiplicative Inverse */}
      <h3 className="text-xl font-semibold mt-8 mb-4">Multiplicative Inverse</h3>

      <p className="text-dark-200 mb-4">
        For a nonzero quaternion <InlineMath>{`a`}</InlineMath>, we can write:
      </p>

      <MathBlock>{`a \\cdot \\frac{\\bar{a}}{N(a)} = 1 = \\frac{\\bar{a}}{N(a)} \\cdot a`}</MathBlock>

      <p className="text-dark-200 mb-4 mt-4">
        This means that <strong>nonzero quaternions have multiplicative inverses</strong>.
      </p>

      {/* Division Ring */}
      <h3 className="text-xl font-semibold mt-8 mb-4">Division Ring</h3>

      <Callout type="definition" title="Division Ring (Skew-Field)">
        <p className="mb-2">
          A <strong>division ring</strong> is a system of elements closed under
          addition and multiplication such that:
        </p>
        <ol className="list-decimal list-inside space-y-1 mt-2">
          <li>Under addition, it is a commutative group</li>
          <li>Under multiplication, the nonzero elements form a group</li>
          <li>Multiplication distributes over addition (on both sides)</li>
        </ol>
      </Callout>

      <p className="text-dark-200 mb-4 mt-4">
        A division ring is a ring in which every nonzero element has an inverse
        under multiplication. It satisfies all the axioms of a field, <em>except</em>{' '}
        the commutative law of multiplication. It is sometimes called a{' '}
        <strong>skew-field</strong>.
      </p>

      <Callout type="theorem" title="Key Theorem">
        <p>The quaternions form a division ring.</p>
      </Callout>

      {/* 4x4 Matrix Representation */}
      <h3 className="text-xl font-semibold mt-8 mb-4">4×4 Real Matrix Representation</h3>

      <p className="text-dark-200 mb-4">
        A quaternion <InlineMath>{`x = x_0 + x_1 i_1 + x_2 i_2 + x_3 i_3`}</InlineMath>{' '}
        gives rise to a column vector:
      </p>

      <MathBlock>{`[x] = \\begin{pmatrix} x_0 \\\\ x_1 \\\\ x_2 \\\\ x_3 \\end{pmatrix}`}</MathBlock>

      <p className="text-dark-200 mb-4 mt-4">
        Given a quaternion <InlineMath>{`a`}</InlineMath>, consider the mapping which
        assigns to every vector <InlineMath>{`[x]`}</InlineMath> the vector{' '}
        <InlineMath>{`[ax]`}</InlineMath>. This is a linear transformation of the
        four-dimensional vector space over <InlineMath>{`\\mathbb{R}`}</InlineMath>,
        so there is a <InlineMath>{`4 \\times 4`}</InlineMath> matrix{' '}
        <InlineMath>{`A = L(a)`}</InlineMath> such that{' '}
        <InlineMath>{`A[x] = [ax]`}</InlineMath>.
      </p>

      <Card className="mb-6">
        <CardHeader>Example: <InlineMath>{`I_1 = L(i_1)`}</InlineMath></CardHeader>
        <div className="text-dark-300 space-y-3">
          <p>
            The equation <InlineMath>{`i_1(x_0 + x_1 i_1 + x_2 i_2 + x_3 i_3) = -x_1 + x_0 i_1 - x_3 i_2 + x_2 i_3`}</InlineMath>{' '}
            gives:
          </p>
          <MathBlock>{`I_1 = \\begin{pmatrix} 0 & -1 & 0 & 0 \\\\ 1 & 0 & 0 & 0 \\\\ 0 & 0 & 0 & -1 \\\\ 0 & 0 & 1 & 0 \\end{pmatrix}`}</MathBlock>
        </div>
      </Card>

      <Callout type="theorem" title="Homomorphism Property">
        <p className="mb-2">
          For all quaternions <InlineMath>{`a`}</InlineMath> and{' '}
          <InlineMath>{`b`}</InlineMath>:
        </p>
        <MathBlock>{`L(ab) = L(a)L(b)`}</MathBlock>
        <p className="mt-2 text-sm">
          This shows that <InlineMath>{`L`}</InlineMath> is an injective homomorphism
          from the division ring of quaternions into the ring of all{' '}
          <InlineMath>{`4 \\times 4`}</InlineMath> matrices over{' '}
          <InlineMath>{`\\mathbb{R}`}</InlineMath>.
        </p>
      </Callout>

      {/* Important Properties */}
      <h3 className="text-xl font-semibold mt-8 mb-4">Important Properties</h3>

      <CardGrid columns={2}>
        <Card>
          <CardHeader>Conjugate of Product</CardHeader>
          <MathBlock>{`\\overline{ab} = \\bar{b}\\bar{a}`}</MathBlock>
          <p className="text-dark-300 text-sm mt-2">
            Note the reversal of order!
          </p>
        </Card>
        <Card>
          <CardHeader>Norm is Multiplicative</CardHeader>
          <MathBlock>{`N(ab) = N(a)N(b)`}</MathBlock>
          <p className="text-dark-300 text-sm mt-2">
            Also: <InlineMath>{`N(\\bar{a}) = N(a)`}</InlineMath>
          </p>
        </Card>
      </CardGrid>

      {/* Summary */}
      <h3 className="text-xl font-semibold mt-8 mb-4">Summary</h3>

      <div className="bg-dark-800 rounded-lg p-4 mb-6">
        <ul className="text-dark-200 space-y-2">
          <li>• <strong>Hamilton</strong> discovered quaternions in <strong>1843</strong>{' '}
            while walking along the Royal Canal in Dublin</li>
          <li>• Quaternions: <InlineMath>{`a + bi + cj + dk`}</InlineMath> with{' '}
            <InlineMath>{`i^2 = j^2 = k^2 = ijk = -1`}</InlineMath></li>
          <li>• Multiplication is <strong>non-commutative</strong>:{' '}
            <InlineMath>{`ij = k`}</InlineMath> but{' '}
            <InlineMath>{`ji = -k`}</InlineMath></li>
          <li>• Can be represented as <InlineMath>{`2 \\times 2`}</InlineMath>{' '}
            complex matrices or <InlineMath>{`4 \\times 4`}</InlineMath> real matrices</li>
          <li>• Conjugate: <InlineMath>{`\\bar{a} = a_0 - a_1 i_1 - a_2 i_2 - a_3 i_3`}</InlineMath></li>
          <li>• Norm: <InlineMath>{`N(a) = a_0^2 + a_1^2 + a_2^2 + a_3^2`}</InlineMath></li>
          <li>• Inverse: <InlineMath>{`a^{-1} = \\bar{a}/N(a)`}</InlineMath> for{' '}
            <InlineMath>{`a \\neq 0`}</InlineMath></li>
          <li>• Quaternions form a <strong>division ring</strong> (skew-field)</li>
          <li>• <InlineMath>{`L: \\mathbb{H} \\to M_4(\\mathbb{R})`}</InlineMath> is
            an injective homomorphism</li>
        </ul>
      </div>

      {/* Section Quiz */}
      <SectionQuiz sectionId={38} questions={section38Questions} />
    </LessonLayout>
  );
}
