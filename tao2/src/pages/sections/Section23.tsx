import { LessonLayout } from '@/components/layout';
import { Definition, Example } from '@/components/common';
import { InlineMath, MathBlock } from '@/components/common/MathBlock';
import { Callout } from '@/components/common/Callout';

export default function Section23() {
  return (
    <LessonLayout sectionId={23}>
      <h2 className="text-2xl font-bold text-dark-100 mb-6">A Digression on Complex Numbers</h2>

      <p className="mb-4">
        To proceed further (particularly to define the trigonometric functions rigorously), we need
        the <strong>complex number system</strong> <InlineMath>{`\\mathbf{C}`}</InlineMath>, which
        extends the real number system <InlineMath>{`\\mathbf{R}`}</InlineMath>.
      </p>

      <Definition title="Complex Numbers (Formal Definition)">
        <p>
          A <strong>complex number</strong> is any pair of the form{' '}
          <InlineMath>{`(a, b)`}</InlineMath>, where <InlineMath>a</InlineMath> and{' '}
          <InlineMath>b</InlineMath> are real numbers. Two complex numbers{' '}
          <InlineMath>{`(a, b)`}</InlineMath> and <InlineMath>{`(c, d)`}</InlineMath> are equal iff{' '}
          <InlineMath>{`a = c`}</InlineMath> and <InlineMath>{`b = d`}</InlineMath>.
        </p>
        <p className="mt-2">
          The set of all complex numbers is denoted <InlineMath>{`\\mathbf{C}`}</InlineMath>.
        </p>
      </Definition>

      <h3 className="text-xl font-semibold text-dark-100 mt-8 mb-4">Complex Arithmetic</h3>

      <Definition title="Complex Addition and Negation">
        <p>
          If <InlineMath>{`z = (a, b)`}</InlineMath> and <InlineMath>{`w = (c, d)`}</InlineMath> are
          complex numbers:
        </p>
        <ul className="list-disc list-inside mt-2 space-y-1">
          <li>
            <strong>Sum:</strong> <InlineMath>{`z + w := (a + c, b + d)`}</InlineMath>
          </li>
          <li>
            <strong>Negation:</strong> <InlineMath>{`-z := (-a, -b)`}</InlineMath>
          </li>
          <li>
            <strong>Zero:</strong> <InlineMath>{`0_{\\mathbf{C}} := (0, 0)`}</InlineMath>
          </li>
        </ul>
      </Definition>

      <Definition title="Complex Multiplication">
        <p>
          If <InlineMath>{`z = (a, b)`}</InlineMath> and <InlineMath>{`w = (c, d)`}</InlineMath>:
        </p>
        <MathBlock>{`zw := (ac - bd, ad + bc)`}</MathBlock>
        <p className="mt-2">
          We also define <InlineMath>{`1_{\\mathbf{C}} := (1, 0)`}</InlineMath>.
        </p>
      </Definition>

      <h3 className="text-xl font-semibold text-dark-100 mt-8 mb-4">The Imaginary Unit</h3>

      <p className="mb-4">
        We identify real numbers <InlineMath>x</InlineMath> with complex numbers{' '}
        <InlineMath>{`(x, 0)`}</InlineMath>. We define the <strong>imaginary unit</strong> as{' '}
        <InlineMath>{`i := (0, 1)`}</InlineMath>.
      </p>

      <Definition title="Standard Form">
        <p>
          Every complex number <InlineMath>{`z \\in \\mathbf{C}`}</InlineMath> can be written as{' '}
          <InlineMath>{`z = a + bi`}</InlineMath> for exactly one pair{' '}
          <InlineMath>{`a, b`}</InlineMath> of real numbers. Also, <InlineMath>{`i^2 = -1`}</InlineMath>.
        </p>
      </Definition>

      <Definition title="Real and Imaginary Parts">
        <p>
          If <InlineMath>{`z = a + bi`}</InlineMath> for real numbers{' '}
          <InlineMath>{`a, b`}</InlineMath>:
        </p>
        <ul className="list-disc list-inside mt-2 space-y-1">
          <li>
            <InlineMath>a</InlineMath> is the <strong>real part</strong>:{' '}
            <InlineMath>{`\\Re(z) := a`}</InlineMath>
          </li>
          <li>
            <InlineMath>b</InlineMath> is the <strong>imaginary part</strong>:{' '}
            <InlineMath>{`\\Im(z) := b`}</InlineMath>
          </li>
        </ul>
        <p className="mt-2">
          We say <InlineMath>z</InlineMath> is <strong>real</strong> iff{' '}
          <InlineMath>{`\\Im(z) = 0`}</InlineMath>, and <strong>imaginary</strong> iff{' '}
          <InlineMath>{`\\Re(z) = 0`}</InlineMath>.
        </p>
      </Definition>

      <Definition title="Complex Conjugate">
        <p>
          The <strong>complex conjugate</strong> of <InlineMath>{`z = a + bi`}</InlineMath> is:
        </p>
        <MathBlock>{`\\overline{z} := a - bi = \\Re(z) - i\\Im(z)`}</MathBlock>
        <p className="mt-2">
          Properties: <InlineMath>{`\\overline{z + w} = \\overline{z} + \\overline{w}`}</InlineMath>,{' '}
          <InlineMath>{`\\overline{zw} = \\overline{z} \\cdot \\overline{w}`}</InlineMath>, and{' '}
          <InlineMath>{`\\overline{\\overline{z}} = z`}</InlineMath>.
        </p>
      </Definition>

      <h3 className="text-xl font-semibold text-dark-100 mt-8 mb-4">Complex Absolute Value</h3>

      <Definition title="Complex Absolute Value">
        <p>
          If <InlineMath>{`z = a + bi`}</InlineMath> is a complex number, the <strong>absolute
          value</strong> (or <strong>modulus</strong>) of <InlineMath>z</InlineMath> is:
        </p>
        <MathBlock>{`|z| := \\sqrt{a^2 + b^2} = \\sqrt{z \\overline{z}}`}</MathBlock>
      </Definition>

      <Definition title="Properties of Complex Absolute Value">
        <ul className="list-disc list-inside space-y-2">
          <li>
            <InlineMath>{`|z| \\geq 0`}</InlineMath>, and{' '}
            <InlineMath>{`|z| = 0`}</InlineMath> iff <InlineMath>{`z = 0`}</InlineMath>.
          </li>
          <li>
            <InlineMath>{`z\\overline{z} = |z|^2`}</InlineMath>
          </li>
          <li>
            <InlineMath>{`|zw| = |z||w|`}</InlineMath>
          </li>
          <li>
            <InlineMath>{`|\\overline{z}| = |z|`}</InlineMath>
          </li>
          <li>
            <strong>Triangle inequality:</strong> <InlineMath>{`|z + w| \\leq |z| + |w|`}</InlineMath>
          </li>
        </ul>
      </Definition>

      <Definition title="Complex Reciprocal">
        <p>
          If <InlineMath>{`z \\neq 0`}</InlineMath>, the <strong>reciprocal</strong> of{' '}
          <InlineMath>z</InlineMath> is:
        </p>
        <MathBlock>{`z^{-1} := \\frac{\\overline{z}}{|z|^2}`}</MathBlock>
      </Definition>

      <Example title="Computing a Reciprocal">
        <p>
          For <InlineMath>{`z = 1 + 2i`}</InlineMath>:
        </p>
        <MathBlock>{`z^{-1} = \\frac{1 - 2i}{|1 + 2i|^2} = \\frac{1 - 2i}{1^2 + 2^2} = \\frac{1 - 2i}{5} = \\frac{1}{5} - \\frac{2}{5}i`}</MathBlock>
      </Example>

      <Callout type="warning" title="No Ordering on Complex Numbers">
        <p>
          Unlike the real numbers, the complex numbers cannot be given a meaningful total ordering
          that is compatible with the arithmetic operations. For instance, if{' '}
          <InlineMath>{`i > 0`}</InlineMath>, then <InlineMath>{`i^2 = -1 > 0`}</InlineMath>, which
          is false. If <InlineMath>{`i < 0`}</InlineMath>, then <InlineMath>{`-i > 0`}</InlineMath>,
          so <InlineMath>{`(-i)^2 = -1 > 0`}</InlineMath>, which is also false.
        </p>
      </Callout>
    </LessonLayout>
  );
}
