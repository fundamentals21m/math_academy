import { LessonLayout } from '../../components/layout/LessonLayout';
import { Callout } from '../../components/common/Callout';
import { Math as MathInline, MathBlock } from '../../components/common/MathBlock';

export default function Section05() {
  return (
    <LessonLayout sectionId={5}>
      <h2 className="text-2xl font-semibold mb-4">Summation Notation</h2>

      <p className="text-dark-200 mb-6">
        When working with sums of many terms, writing out each term becomes tedious
        and impractical. Summation notation provides a compact and powerful way to
        express such sums using the Greek letter sigma (<MathInline>{'\\Sigma'}</MathInline>).
      </p>

      <h2 className="text-2xl font-semibold mt-10 mb-4">The Sigma Notation</h2>

      <p className="text-dark-200 mb-4">
        Consider the sum of the first <MathInline>{'n'}</MathInline> squares:
      </p>

      <MathBlock>{'1^2 + 2^2 + 3^2 + \\cdots + n^2'}</MathBlock>

      <p className="text-dark-200 mb-4">
        A typical term in this sum has the form <MathInline>{'k^2'}</MathInline>, and we
        get all the terms by letting <MathInline>{'k'}</MathInline> run through the
        values <MathInline>{'1, 2, 3, \\ldots, n'}</MathInline>. Using summation notation,
        we write:
      </p>

      <MathBlock>{'\\sum_{k=1}^{n} k^2'}</MathBlock>

      <p className="text-dark-200 mb-6">
        This symbol is read: "The sum of <MathInline>{'k^2'}</MathInline> for{' '}
        <MathInline>{'k'}</MathInline> running from 1 to <MathInline>{'n'}</MathInline>."
      </p>

      <Callout type="definition">
        <p className="font-semibold mb-2">Summation Notation</p>
        <p className="mb-2">
          The expression <MathInline>{'\\sum_{k=1}^{n} a_k'}</MathInline> represents
          the sum:
        </p>
        <MathBlock>{'a_1 + a_2 + a_3 + \\cdots + a_n'}</MathBlock>
        <p>
          The letter <MathInline>{'k'}</MathInline> is called the <strong>index of summation</strong>{' '}
          (or <strong>dummy index</strong>). The numbers below and above the sigma indicate the
          range of values taken by <MathInline>{'k'}</MathInline>.
        </p>
      </Callout>

      <h3 className="text-xl font-semibold mt-6 mb-3">Dummy Indices</h3>

      <p className="text-dark-200 mb-4">
        The choice of letter for the index is unimportant. These are all equivalent:
      </p>

      <MathBlock>{'\\sum_{k=1}^{n} k^2 = \\sum_{i=1}^{n} i^2 = \\sum_{j=1}^{n} j^2 = \\sum_{m=1}^{n} m^2'}</MathBlock>

      <p className="text-dark-200 mb-6">
        Just avoid using a letter already in use (like <MathInline>{'n'}</MathInline> in this example).
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
        <p className="mb-2">For <MathInline>{'x \\neq 1'}</MathInline>:</p>
        <MathBlock>{'\\sum_{k=0}^{n} x^k = \\frac{1 - x^{n+1}}{1 - x}'}</MathBlock>
        <p>When <MathInline>{'x = 1'}</MathInline>, the sum equals <MathInline>{'n + 1'}</MathInline>.</p>
      </Callout>

      <h2 className="text-2xl font-semibold mt-10 mb-4">Absolute Values</h2>

      <p className="text-dark-200 mb-4">
        The <strong>absolute value</strong> of a real number <MathInline>{'x'}</MathInline>,
        denoted <MathInline>{'|x|'}</MathInline>, is defined as:
      </p>

      <Callout type="definition">
        <p className="font-semibold mb-2">Absolute Value</p>
        <MathBlock>{'|x| = \\begin{cases} x & \\text{if } x \\geq 0 \\ -x & \\text{if } x < 0 \\end{cases}'}</MathBlock>
        <p className="mt-2">
          Geometrically, <MathInline>{'|x|'}</MathInline> represents the <strong>distance</strong>{' '}
          from <MathInline>{'x'}</MathInline> to 0 on the number line.
        </p>
      </Callout>

      <p className="text-dark-200 mb-4">
        Note that <MathInline>{'-|x| \\leq x \\leq |x|'}</MathInline> for all real <MathInline>{'x'}</MathInline>.
      </p>

      <Callout type="theorem">
        <p className="font-semibold mb-2">Theorem I.38</p>
        <p>
          If <MathInline>{'a > 0'}</MathInline>, then <MathInline>{'|x| \\leq a'}</MathInline> if
          and only if <MathInline>{'-a \\leq x \\leq a'}</MathInline>.
        </p>
      </Callout>

      <p className="text-dark-200 mb-6">
        This theorem says that <MathInline>{'|x| \\leq a'}</MathInline> means{' '}
        <MathInline>{'x'}</MathInline> lies within distance <MathInline>{'a'}</MathInline> of
        the origin.
      </p>

      <h2 className="text-2xl font-semibold mt-10 mb-4">The Triangle Inequality</h2>

      <p className="text-dark-200 mb-4">
        One of the most important properties of absolute values is the triangle inequality:
      </p>

      <Callout type="theorem">
        <p className="font-semibold mb-2">Theorem I.39 (Triangle Inequality)</p>
        <p className="mb-2">For arbitrary real numbers <MathInline>{'x'}</MathInline> and <MathInline>{'y'}</MathInline>:</p>
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
          Starting from <MathInline>{'-|x| \\leq x \\leq |x|'}</MathInline> and{' '}
          <MathInline>{'-|y| \\leq y \\leq |y|'}</MathInline>, add these inequalities:
        </p>
        <MathBlock>{'-(|x| + |y|) \\leq x + y \\leq |x| + |y|'}</MathBlock>
        <p>
          By Theorem I.38, this means <MathInline>{'|x + y| \\leq |x| + |y|'}</MathInline>.
        </p>
      </Callout>

      <h3 className="text-xl font-semibold mt-6 mb-3">Alternative Form</h3>

      <p className="text-dark-200 mb-4">
        Taking <MathInline>{'x = a - c'}</MathInline> and <MathInline>{'y = c - b'}</MathInline>,
        the triangle inequality becomes:
      </p>

      <MathBlock>{'|a - b| \\leq |a - c| + |c - b|'}</MathBlock>

      <p className="text-dark-200 mb-6">
        This form is often used in practice.
      </p>

      <h3 className="text-xl font-semibold mt-6 mb-3">Extended Triangle Inequality</h3>

      <p className="text-dark-200 mb-4">
        Using mathematical induction, we can extend the triangle inequality to <MathInline>{'n'}</MathInline> terms:
      </p>

      <Callout type="theorem">
        <p className="font-semibold mb-2">Theorem I.40 (Generalized Triangle Inequality)</p>
        <p className="mb-2">For arbitrary real numbers <MathInline>{'a_1, a_2, \\ldots, a_n'}</MathInline>:</p>
        <MathBlock>{'\\left| \\sum_{k=1}^{n} a_k \\right| \\leq \\sum_{k=1}^{n} |a_k|'}</MathBlock>
      </Callout>

      <h2 className="text-2xl font-semibold mt-10 mb-4">Properties of Absolute Value</h2>

      <p className="text-dark-200 mb-4">
        Here are fundamental properties that are frequently used:
      </p>

      <Callout type="info">
        <p className="font-semibold mb-2">Key Properties</p>
        <ul className="list-disc list-inside space-y-2">
          <li><MathInline>{'|x| = 0'}</MathInline> if and only if <MathInline>{'x = 0'}</MathInline></li>
          <li><MathInline>{'|-x| = |x|'}</MathInline></li>
          <li><MathInline>{'|x - y| = |y - x|'}</MathInline></li>
          <li><MathInline>{'|x|^2 = x^2'}</MathInline></li>
          <li><MathInline>{'|x| = \\sqrt{x^2}'}</MathInline></li>
          <li><MathInline>{'|xy| = |x| \\cdot |y|'}</MathInline></li>
          <li><MathInline>{'|x/y| = |x|/|y|'}</MathInline> if <MathInline>{'y \\neq 0'}</MathInline></li>
          <li><MathInline>{'|x - y| \\leq |x| + |y|'}</MathInline></li>
          <li><MathInline>{'|x| - |y| \\leq |x - y|'}</MathInline> (reverse triangle inequality)</li>
          <li><MathInline>{'\\big| |x| - |y| \\big| \\leq |x - y|'}</MathInline></li>
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
          If <MathInline>{'a_1, \\ldots, a_n'}</MathInline> and <MathInline>{'b_1, \\ldots, b_n'}</MathInline>{' '}
          are arbitrary real numbers, then:
        </p>
        <MathBlock>{'\\left( \\sum_{k=1}^{n} a_k b_k \\right)^2 \\leq \\left( \\sum_{k=1}^{n} a_k^2 \\right) \\left( \\sum_{k=1}^{n} b_k^2 \\right)'}</MathBlock>
        <p className="mt-2">
          Equality holds if and only if there exists a real number <MathInline>{'x'}</MathInline>{' '}
          such that <MathInline>{'a_k x + b_k = 0'}</MathInline> for each <MathInline>{'k'}</MathInline>.
        </p>
      </Callout>

      <h2 className="text-2xl font-semibold mt-10 mb-4">Summary</h2>

      <p className="text-dark-200 mb-4">
        Summation notation provides a compact way to write sums, with key properties
        (additive, homogeneous, telescoping) that simplify calculations. Absolute
        values measure distance from zero and satisfy the crucial triangle inequality{' '}
        <MathInline>{'|x + y| \\leq |x| + |y|'}</MathInline>. These tools are fundamental
        throughout calculus, appearing in limits, series, and error estimates.
      </p>
    </LessonLayout>
  );
}
