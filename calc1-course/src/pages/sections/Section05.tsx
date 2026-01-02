import { LessonLayout } from '../../components/layout/LessonLayout';
import { Callout } from '../../components/common/Callout';
import { InlineMath, MathBlock } from '../../components/common/MathBlock';

export default function Section05() {
  return (
    <LessonLayout sectionId={5}>
      <h2 className="text-2xl font-semibold mb-4">Summation Notation</h2>

      <p className="text-dark-200 mb-6">
        When working with sums of many terms, writing out each term becomes tedious
        and impractical. Summation notation provides a compact and powerful way to
        express such sums using the Greek letter sigma (<InlineMath>{'\\Sigma'}</InlineMath>).
      </p>

      <h2 className="text-2xl font-semibold mt-10 mb-4">The Sigma Notation</h2>

      <p className="text-dark-200 mb-4">
        Consider the sum of the first <InlineMath>{'n'}</InlineMath> squares:
      </p>

      <MathBlock>{'1^2 + 2^2 + 3^2 + \\cdots + n^2'}</MathBlock>

      <p className="text-dark-200 mb-4">
        A typical term in this sum has the form <InlineMath>{'k^2'}</InlineMath>, and we
        get all the terms by letting <InlineMath>{'k'}</InlineMath> run through the
        values <InlineMath>{'1, 2, 3, \\ldots, n'}</InlineMath>. Using summation notation,
        we write:
      </p>

      <MathBlock>{'\\sum_{k=1}^{n} k^2'}</MathBlock>

      <p className="text-dark-200 mb-6">
        This symbol is read: "The sum of <InlineMath>{'k^2'}</InlineMath> for{' '}
        <InlineMath>{'k'}</InlineMath> running from 1 to <InlineMath>{'n'}</InlineMath>."
      </p>

      <Callout type="definition">
        <p className="font-semibold mb-2">Summation Notation</p>
        <p className="mb-2">
          The expression <InlineMath>{'\\sum_{k=1}^{n} a_k'}</InlineMath> represents
          the sum:
        </p>
        <MathBlock>{'a_1 + a_2 + a_3 + \\cdots + a_n'}</MathBlock>
        <p>
          The letter <InlineMath>{'k'}</InlineMath> is called the <strong>index of summation</strong>{' '}
          (or <strong>dummy index</strong>). The numbers below and above the sigma indicate the
          range of values taken by <InlineMath>{'k'}</InlineMath>.
        </p>
      </Callout>

      <h3 className="text-xl font-semibold mt-6 mb-3">Dummy Indices</h3>

      <p className="text-dark-200 mb-4">
        The choice of letter for the index is unimportant. These are all equivalent:
      </p>

      <MathBlock>{'\\sum_{k=1}^{n} k^2 = \\sum_{i=1}^{n} i^2 = \\sum_{j=1}^{n} j^2 = \\sum_{m=1}^{n} m^2'}</MathBlock>

      <p className="text-dark-200 mb-6">
        Just avoid using a letter already in use (like <InlineMath>{'n'}</InlineMath> in this example).
      </p>

      <h3 className="text-xl font-semibold mt-6 mb-3">Different Starting Points</h3>

      <p className="text-dark-200 mb-4">
        Summations can begin from 0 or any other value:
      </p>

      <MathBlock>{'\\sum_{i=0}^{4} x_i = x_0 + x_1 + x_2 + x_3 + x_4'}</MathBlock>

      <MathBlock>{'\\sum_{n=2}^{5} n^3 = 2^3 + 3^3 + 4^3 + 5^3'}</MathBlock>

      <Callout type="example">
        <p className="font-semibold mb-2">More Examples</p>
        <MathBlock>{'\\sum_{m=0}^{4} x^{m+1} = x + x^2 + x^3 + x^4 + x^5'}</MathBlock>
        <MathBlock>{'\\sum_{j=1}^{6} 2^{j-1} = 1 + 2 + 4 + 8 + 16 + 32'}</MathBlock>
      </Callout>

      <h2 className="text-2xl font-semibold mt-10 mb-4">Properties of Summation</h2>

      <p className="text-dark-200 mb-4">
        Summation notation obeys several useful properties:
      </p>

      <Callout type="theorem">
        <p className="font-semibold mb-2">Properties of Sums</p>
        <p className="mb-2"><strong>Additive Property:</strong></p>
        <MathBlock>{'\\sum_{k=1}^{n} (a_k + b_k) = \\sum_{k=1}^{n} a_k + \\sum_{k=1}^{n} b_k'}</MathBlock>

        <p className="mb-2"><strong>Homogeneous Property:</strong></p>
        <MathBlock>{'\\sum_{k=1}^{n} (c \\cdot a_k) = c \\sum_{k=1}^{n} a_k'}</MathBlock>

        <p className="mb-2"><strong>Telescoping Property:</strong></p>
        <MathBlock>{'\\sum_{k=1}^{n} (a_k - a_{k-1}) = a_n - a_0'}</MathBlock>
      </Callout>

      <h3 className="text-xl font-semibold mt-6 mb-3">Important Summation Formulas</h3>

      <p className="text-dark-200 mb-4">
        Several closed-form formulas are fundamental in calculus:
      </p>

      <Callout type="info">
        <p className="font-semibold mb-2">Key Formulas</p>
        <MathBlock>{'\\sum_{k=1}^{n} 1 = n'}</MathBlock>
        <MathBlock>{'\\sum_{k=1}^{n} k = \\frac{n^2}{2} + \\frac{n}{2} = \\frac{n(n+1)}{2}'}</MathBlock>
        <MathBlock>{'\\sum_{k=1}^{n} k^2 = \\frac{n^3}{3} + \\frac{n^2}{2} + \\frac{n}{6} = \\frac{n(n+1)(2n+1)}{6}'}</MathBlock>
        <MathBlock>{'\\sum_{k=1}^{n} k^3 = \\frac{n^4}{4} + \\frac{n^3}{2} + \\frac{n^2}{4} = \\left( \\frac{n(n+1)}{2} \\right)^2'}</MathBlock>
      </Callout>

      <Callout type="example">
        <p className="font-semibold mb-2">Geometric Series</p>
        <p className="mb-2">For <InlineMath>{'x \\neq 1'}</InlineMath>:</p>
        <MathBlock>{'\\sum_{k=0}^{n} x^k = \\frac{1 - x^{n+1}}{1 - x}'}</MathBlock>
        <p>When <InlineMath>{'x = 1'}</InlineMath>, the sum equals <InlineMath>{'n + 1'}</InlineMath>.</p>
      </Callout>

      <h2 className="text-2xl font-semibold mt-10 mb-4">Absolute Values</h2>

      <p className="text-dark-200 mb-4">
        The <strong>absolute value</strong> of a real number <InlineMath>{'x'}</InlineMath>,
        denoted <InlineMath>{'|x|'}</InlineMath>, is defined as:
      </p>

      <Callout type="definition">
        <p className="font-semibold mb-2">Absolute Value</p>
        <MathBlock>{'|x| = \\begin{cases} x & \\text{if } x \\geq 0 \\ -x & \\text{if } x < 0 \\end{cases}'}</MathBlock>
        <p className="mt-2">
          Geometrically, <InlineMath>{'|x|'}</InlineMath> represents the <strong>distance</strong>{' '}
          from <InlineMath>{'x'}</InlineMath> to 0 on the number line.
        </p>
      </Callout>

      <p className="text-dark-200 mb-4">
        Note that <InlineMath>{'-|x| \\leq x \\leq |x|'}</InlineMath> for all real <InlineMath>{'x'}</InlineMath>.
      </p>

      <Callout type="theorem">
        <p className="font-semibold mb-2">Theorem I.38</p>
        <p>
          If <InlineMath>{'a > 0'}</InlineMath>, then <InlineMath>{'|x| \\leq a'}</InlineMath> if
          and only if <InlineMath>{'-a \\leq x \\leq a'}</InlineMath>.
        </p>
      </Callout>

      <p className="text-dark-200 mb-6">
        This theorem says that <InlineMath>{'|x| \\leq a'}</InlineMath> means{' '}
        <InlineMath>{'x'}</InlineMath> lies within distance <InlineMath>{'a'}</InlineMath> of
        the origin.
      </p>

      <h2 className="text-2xl font-semibold mt-10 mb-4">The Triangle Inequality</h2>

      <p className="text-dark-200 mb-4">
        One of the most important properties of absolute values is the triangle inequality:
      </p>

      <Callout type="theorem">
        <p className="font-semibold mb-2">Theorem I.39 (Triangle Inequality)</p>
        <p className="mb-2">For arbitrary real numbers <InlineMath>{'x'}</InlineMath> and <InlineMath>{'y'}</InlineMath>:</p>
        <MathBlock>{'|x + y| \\leq |x| + |y|'}</MathBlock>
      </Callout>

      <Callout type="info">
        <p className="font-semibold mb-2">Why "Triangle" Inequality?</p>
        <p>
          When generalized to vectors, this inequality states that the length of any
          side of a triangle is less than or equal to the sum of the lengths of the
          other two sides.
        </p>
      </Callout>

      <Callout type="example">
        <p className="font-semibold mb-2">Proof of the Triangle Inequality</p>
        <p className="mb-2">
          Starting from <InlineMath>{'-|x| \\leq x \\leq |x|'}</InlineMath> and{' '}
          <InlineMath>{'-|y| \\leq y \\leq |y|'}</InlineMath>, add these inequalities:
        </p>
        <MathBlock>{'-(|x| + |y|) \\leq x + y \\leq |x| + |y|'}</MathBlock>
        <p>
          By Theorem I.38, this means <InlineMath>{'|x + y| \\leq |x| + |y|'}</InlineMath>.
        </p>
      </Callout>

      <h3 className="text-xl font-semibold mt-6 mb-3">Alternative Form</h3>

      <p className="text-dark-200 mb-4">
        Taking <InlineMath>{'x = a - c'}</InlineMath> and <InlineMath>{'y = c - b'}</InlineMath>,
        the triangle inequality becomes:
      </p>

      <MathBlock>{'|a - b| \\leq |a - c| + |c - b|'}</MathBlock>

      <p className="text-dark-200 mb-6">
        This form is often used in practice.
      </p>

      <h3 className="text-xl font-semibold mt-6 mb-3">Extended Triangle Inequality</h3>

      <p className="text-dark-200 mb-4">
        Using mathematical induction, we can extend the triangle inequality to <InlineMath>{'n'}</InlineMath> terms:
      </p>

      <Callout type="theorem">
        <p className="font-semibold mb-2">Theorem I.40 (Generalized Triangle Inequality)</p>
        <p className="mb-2">For arbitrary real numbers <InlineMath>{'a_1, a_2, \\ldots, a_n'}</InlineMath>:</p>
        <MathBlock>{'\\left| \\sum_{k=1}^{n} a_k \\right| \\leq \\sum_{k=1}^{n} |a_k|'}</MathBlock>
      </Callout>

      <h2 className="text-2xl font-semibold mt-10 mb-4">Properties of Absolute Value</h2>

      <p className="text-dark-200 mb-4">
        Here are fundamental properties that are frequently used:
      </p>

      <Callout type="info">
        <p className="font-semibold mb-2">Key Properties</p>
        <ul className="list-disc list-inside space-y-2">
          <li><InlineMath>{'|x| = 0'}</InlineMath> if and only if <InlineMath>{'x = 0'}</InlineMath></li>
          <li><InlineMath>{'|-x| = |x|'}</InlineMath></li>
          <li><InlineMath>{'|x - y| = |y - x|'}</InlineMath></li>
          <li><InlineMath>{'|x|^2 = x^2'}</InlineMath></li>
          <li><InlineMath>{'|x| = \\sqrt{x^2}'}</InlineMath></li>
          <li><InlineMath>{'|xy| = |x| \\cdot |y|'}</InlineMath></li>
          <li><InlineMath>{'|x/y| = |x|/|y|'}</InlineMath> if <InlineMath>{'y \\neq 0'}</InlineMath></li>
          <li><InlineMath>{'|x - y| \\leq |x| + |y|'}</InlineMath></li>
          <li><InlineMath>{'|x| - |y| \\leq |x - y|'}</InlineMath> (reverse triangle inequality)</li>
          <li><InlineMath>{'\\big| |x| - |y| \\big| \\leq |x - y|'}</InlineMath></li>
        </ul>
      </Callout>

      <h2 className="text-2xl font-semibold mt-10 mb-4">The Cauchy-Schwarz Inequality</h2>

      <p className="text-dark-200 mb-4">
        Another important inequality that arises in connection with sums is the
        Cauchy-Schwarz inequality:
      </p>

      <Callout type="theorem">
        <p className="font-semibold mb-2">Theorem I.41 (Cauchy-Schwarz Inequality)</p>
        <p className="mb-2">
          If <InlineMath>{'a_1, \\ldots, a_n'}</InlineMath> and <InlineMath>{'b_1, \\ldots, b_n'}</InlineMath>{' '}
          are arbitrary real numbers, then:
        </p>
        <MathBlock>{'\\left( \\sum_{k=1}^{n} a_k b_k \\right)^2 \\leq \\left( \\sum_{k=1}^{n} a_k^2 \\right) \\left( \\sum_{k=1}^{n} b_k^2 \\right)'}</MathBlock>
        <p className="mt-2">
          Equality holds if and only if there exists a real number <InlineMath>{'x'}</InlineMath>{' '}
          such that <InlineMath>{'a_k x + b_k = 0'}</InlineMath> for each <InlineMath>{'k'}</InlineMath>.
        </p>
      </Callout>

      <h2 className="text-2xl font-semibold mt-10 mb-4">Summary</h2>

      <p className="text-dark-200 mb-4">
        Summation notation provides a compact way to write sums, with key properties
        (additive, homogeneous, telescoping) that simplify calculations. Absolute
        values measure distance from zero and satisfy the crucial triangle inequality{' '}
        <InlineMath>{'|x + y| \\leq |x| + |y|'}</InlineMath>. These tools are fundamental
        throughout calculus, appearing in limits, series, and error estimates.
      </p>
    </LessonLayout>
  );
}
