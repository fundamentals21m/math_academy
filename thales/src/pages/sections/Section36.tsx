import { LessonLayout } from '../../components/layout/LessonLayout';
import { Callout } from '../../components/common/Callout';
import { Card, CardGrid, CardHeader } from '../../components/common/Card';
import { InlineMath, MathBlock } from '../../components/common/MathBlock';
import { SectionQuiz } from '../../components/quiz';
import { section36Questions } from '../../data/quizzes';

export default function Section36() {
  return (
    <LessonLayout sectionId={36}>
      <h2 className="text-2xl font-semibold mb-4">Complex Numbers</h2>

      <p className="text-dark-200 mb-6 text-lg leading-relaxed">
        Negative numbers solve <InlineMath>{`x + 2 = 1`}</InlineMath>. Rationals solve{' '}
        <InlineMath>{`2x = 3`}</InlineMath>. The equation <InlineMath>{`x^2 = 2`}</InlineMath>{' '}
        has an irrational solution. Finally, the equation <InlineMath>{`x^2 = -1`}</InlineMath>{' '}
        has an <strong>imaginary</strong> root called <InlineMath>{`i`}</InlineMath>.
      </p>

      {/* Basic Definition */}
      <h3 className="text-xl font-semibold mt-8 mb-4">Definition and Notation</h3>

      <Callout type="info" title="Complex Numbers">
        <p className="mb-2">
          Numbers of the form <InlineMath>{`a + bi`}</InlineMath>, where{' '}
          <InlineMath>{`a`}</InlineMath> and <InlineMath>{`b`}</InlineMath> are real,
          are called <strong>complex numbers</strong>.
        </p>
        <p>
          Complex numbers with <InlineMath>{`a = 0`}</InlineMath> are also called{' '}
          <strong>imaginary</strong>.
        </p>
      </Callout>

      <p className="text-dark-200 mb-4 mt-4">
        The complex number <InlineMath>{`a + bi`}</InlineMath> is often associated with
        the point <InlineMath>{`(a, b)`}</InlineMath> in the <strong>Cartesian plane</strong>.
      </p>

      <CardGrid columns={2}>
        <Card>
          <CardHeader>Absolute Value</CardHeader>
          <div className="text-dark-300 space-y-2">
            <MathBlock>{`|a + bi| = \\sqrt{a^2 + b^2}`}</MathBlock>
            <p className="text-sm">
              The distance from <InlineMath>{`(a, b)`}</InlineMath> to the origin.
            </p>
          </div>
        </Card>
        <Card>
          <CardHeader>Angle (Argument)</CardHeader>
          <div className="text-dark-300 space-y-2">
            <MathBlock>{`\\tan \\theta = \\frac{b}{a}`}</MathBlock>
            <p className="text-sm">
              Measured counterclockwise from the positive <InlineMath>{`x`}</InlineMath>-axis.
            </p>
          </div>
        </Card>
      </CardGrid>

      {/* History */}
      <h3 className="text-xl font-semibold mt-8 mb-4">Historical Background</h3>

      <p className="text-dark-200 mb-4">
        Complex numbers were introduced by <strong>Girolamo Cardano</strong> (1501–1576),
        who used them in his <em>Ars Magna</em> (1545) to solve cubic equations.
      </p>

      <blockquote className="border-l-4 border-accent-500 pl-4 italic text-dark-300 mb-6">
        Cardano tells us to multiply <InlineMath>{`5 + \\sqrt{-15}`}</InlineMath> by{' '}
        <InlineMath>{`5 - \\sqrt{-15}`}</InlineMath>, "putting aside the mental tortures involved."
      </blockquote>

      {/* Definitions as Ordered Pairs */}
      <h3 className="text-xl font-semibold mt-8 mb-4">Definition as Ordered Pairs</h3>

      <p className="text-dark-200 mb-4">
        We can define complex numbers as <strong>ordered pairs</strong> of real numbers
        with the multiplication rule:
      </p>

      <MathBlock>{`(a, b) \\cdot (c, d) = (ac - bd, ad + bc)`}</MathBlock>

      <div className="bg-dark-800 rounded-lg p-4 mb-6 mt-4">
        <ul className="text-dark-200 space-y-2">
          <li>• <InlineMath>{`(1, 0)`}</InlineMath> plays the role of{' '}
            <InlineMath>{`1`}</InlineMath></li>
          <li>• <InlineMath>{`(0, 1)`}</InlineMath> plays the role of{' '}
            <InlineMath>{`i`}</InlineMath></li>
          <li>• Check: <InlineMath>{`(0, 1) \\cdot (0, 1) = (0 \\cdot 0 - 1 \\cdot 1, 0 \\cdot 1 + 1 \\cdot 0) = (-1, 0)`}</InlineMath></li>
        </ul>
      </div>

      {/* Definition as Quotient Ring */}
      <h3 className="text-xl font-semibold mt-8 mb-4">Definition as Quotient Ring</h3>

      <p className="text-dark-200 mb-4">
        Another way to introduce complex numbers is as the <strong>quotient ring</strong>:
      </p>

      <MathBlock>{`\\mathbb{C} = \\mathbb{R}[x]/(x^2 + 1)`}</MathBlock>

      <p className="text-dark-200 mb-4 mt-4">
        The elements are equivalence classes of polynomials with real coefficients,
        where two polynomials are equivalent if they differ by a multiple of{' '}
        <InlineMath>{`x^2 + 1`}</InlineMath>. The role of <InlineMath>{`i`}</InlineMath>{' '}
        is played by the equivalence class of the polynomial <InlineMath>{`x`}</InlineMath>.
      </p>

      {/* Matrix Definition */}
      <h3 className="text-xl font-semibold mt-8 mb-4">Definition as Matrices</h3>

      <p className="text-dark-200 mb-4">
        Yet another way is to define complex numbers as <InlineMath>{`2 \\times 2`}</InlineMath>{' '}
        matrices with real entries of the form:
      </p>

      <MathBlock>{`\\begin{pmatrix} a & b \\\\ -b & a \\end{pmatrix}`}</MathBlock>

      <CardGrid columns={2}>
        <Card>
          <CardHeader>The Matrix for 1</CardHeader>
          <MathBlock>{`\\begin{pmatrix} 1 & 0 \\\\ 0 & 1 \\end{pmatrix}`}</MathBlock>
        </Card>
        <Card>
          <CardHeader>The Matrix for i</CardHeader>
          <MathBlock>{`\\begin{pmatrix} 0 & 1 \\\\ -1 & 0 \\end{pmatrix}`}</MathBlock>
        </Card>
      </CardGrid>

      <Card className="mb-6 mt-4">
        <CardHeader>Multiplicative Inverse</CardHeader>
        <div className="text-dark-300 space-y-3">
          <p>
            The inverse of a nonzero matrix of this form is:
          </p>
          <MathBlock>{`\\begin{pmatrix} a & b \\\\ -b & a \\end{pmatrix}^{-1} = \\begin{pmatrix} a/k & -b/k \\\\ b/k & a/k \\end{pmatrix}`}</MathBlock>
          <p className="text-sm">
            where <InlineMath>{`k = a^2 + b^2`}</InlineMath> is the determinant.
          </p>
        </div>
      </Card>

      {/* Embedding R in C */}
      <h3 className="text-xl font-semibold mt-8 mb-4">Embedding ℝ in ℂ</h3>

      <p className="text-dark-200 mb-4">
        The mapping <InlineMath>{`h : \\mathbb{R} \\to \\mathbb{C}`}</InlineMath> defined by:
      </p>

      <MathBlock>{`h(a) = \\begin{pmatrix} a & 0 \\\\ 0 & a \\end{pmatrix}`}</MathBlock>

      <p className="text-dark-200 mb-4 mt-4">
        is a 1-to-1 homomorphism. Hence <InlineMath>{`h(\\mathbb{R})`}</InlineMath> is
        isomorphic to <InlineMath>{`\\mathbb{R}`}</InlineMath>, and we may say that{' '}
        <InlineMath>{`\\mathbb{R} \\subseteq \\mathbb{C}`}</InlineMath>.
      </p>

      {/* Properties */}
      <h3 className="text-xl font-semibold mt-8 mb-4">Key Properties</h3>

      <Callout type="success" title="Triangle Inequality and Product Rule">
        <p className="mb-2">
          For any complex numbers <InlineMath>{`u`}</InlineMath> and <InlineMath>{`v`}</InlineMath>:
        </p>
        <MathBlock>{`|u + v| \\leq |u| + |v| \\quad \\text{(triangle inequality)}`}</MathBlock>
        <MathBlock>{`|uv| = |u||v| \\quad \\text{(product rule)}`}</MathBlock>
      </Callout>

      <p className="text-dark-200 mb-4 mt-4">
        The product rule is equivalent to the <strong>two-squares identity</strong>:
      </p>

      <MathBlock>{`(ac - bd)^2 + (ad + bc)^2 = (a^2 + b^2)(c^2 + d^2)`}</MathBlock>

      <p className="text-dark-200 mb-4 mt-4">
        This identity was known to <strong>al-Khazin</strong> in 950 AD.
      </p>

      {/* Polar Form */}
      <h3 className="text-xl font-semibold mt-8 mb-4">Polar Form</h3>

      <p className="text-dark-200 mb-4">
        Associating <InlineMath>{`a + bi`}</InlineMath> with the point{' '}
        <InlineMath>{`(a, b)`}</InlineMath>, let <InlineMath>{`r`}</InlineMath> be
        its distance from the origin and <InlineMath>{`\\theta`}</InlineMath> its angle. Then:
      </p>

      <MathBlock>{`a + bi = r(\\cos\\theta + i\\sin\\theta)`}</MathBlock>

      <p className="text-dark-200 mb-4 mt-4">
        If <InlineMath>{`a' + b'i`}</InlineMath> has absolute value{' '}
        <InlineMath>{`r'`}</InlineMath> and angle <InlineMath>{`\\theta'`}</InlineMath>,
        then multiplication gives:
      </p>

      <MathBlock>{`(a + bi)(a' + b'i) = rr'(\\cos(\\theta + \\theta') + i\\sin(\\theta + \\theta'))`}</MathBlock>

      <p className="text-dark-200 mb-4 mt-4">
        <strong>Multiplying complex numbers multiplies their absolute values and adds
        their angles.</strong>
      </p>

      {/* De Moivre's Theorem */}
      <Callout type="success" title="De Moivre's Theorem">
        <p className="mb-2">
          For any natural number <InlineMath>{`m`}</InlineMath>:
        </p>
        <MathBlock>{`(r(\\cos\\theta + i\\sin\\theta))^m = r^m(\\cos(m\\theta) + i\\sin(m\\theta))`}</MathBlock>
        <p className="text-sm mt-2">
          Named after <strong>Abraham de Moivre</strong> (1667–1754), who was the first
          to make use of it.
        </p>
      </Callout>

      {/* Summary */}
      <h3 className="text-xl font-semibold mt-8 mb-4">Summary</h3>

      <div className="bg-dark-800 rounded-lg p-4 mb-6">
        <ul className="text-dark-200 space-y-2">
          <li>• Complex numbers <InlineMath>{`a + bi`}</InlineMath> solve{' '}
            <InlineMath>{`x^2 = -1`}</InlineMath></li>
          <li>• Introduced by <strong>Cardano</strong> (1545) in <em>Ars Magna</em></li>
          <li>• Can be defined as ordered pairs:{' '}
            <InlineMath>{`(a,b) \\cdot (c,d) = (ac-bd, ad+bc)`}</InlineMath></li>
          <li>• Can be defined as quotient ring{' '}
            <InlineMath>{`\\mathbb{R}[x]/(x^2+1)`}</InlineMath></li>
          <li>• Can be defined as <InlineMath>{`2 \\times 2`}</InlineMath> matrices</li>
          <li>• Absolute value: <InlineMath>{`|a+bi| = \\sqrt{a^2+b^2}`}</InlineMath></li>
          <li>• Triangle inequality: <InlineMath>{`|u+v| \\leq |u| + |v|`}</InlineMath></li>
          <li>• Product rule: <InlineMath>{`|uv| = |u||v|`}</InlineMath></li>
          <li>• Polar form: <InlineMath>{`a+bi = r(\\cos\\theta + i\\sin\\theta)`}</InlineMath></li>
          <li>• <strong>De Moivre's theorem</strong>: powers multiply angles</li>
        </ul>
      </div>

      {/* Section Quiz */}
      <SectionQuiz sectionId={36} questions={section36Questions} />
    </LessonLayout>
  );
}
