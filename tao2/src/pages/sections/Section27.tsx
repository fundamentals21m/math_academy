import { LessonLayout } from '@/components/layout';
import { Definition, Example } from '@/components/common';
import { InlineMath, MathBlock } from '@/components/common/MathBlock';
import { Callout } from '@/components/common/Callout';

export default function Section27() {
  return (
    <LessonLayout sectionId={27}>
      <h2 className="text-2xl font-bold text-dark-100 mb-6">Trigonometric Polynomials</h2>

      <p className="mb-4">
        Just as polynomials are combinations of the monomials <InlineMath>{`x^n`}</InlineMath>,{' '}
        <strong>trigonometric polynomials</strong> are combinations of the complex exponentials{' '}
        <InlineMath>{`e^{2\\pi inx}`}</InlineMath>, sometimes called <strong>characters</strong>.
      </p>

      <Definition title="Characters">
        <p>
          For every integer <InlineMath>n</InlineMath>, we let{' '}
          <InlineMath>{`e_n \\in C(\\mathbf{R}/\\mathbf{Z}; \\mathbf{C})`}</InlineMath> denote
          the function:
        </p>
        <MathBlock>{`e_n(x) := e^{2\\pi inx}`}</MathBlock>
        <p className="mt-2">
          This is sometimes referred to as the <strong>character with frequency n</strong>.
        </p>
      </Definition>

      <Definition title="Trigonometric Polynomials">
        <p>
          A function <InlineMath>{`f \\in C(\\mathbf{R}/\\mathbf{Z}; \\mathbf{C})`}</InlineMath>{' '}
          is said to be a <strong>trigonometric polynomial</strong> if we can write:
        </p>
        <MathBlock>{`f = \\sum_{n=-N}^{N} c_n e_n`}</MathBlock>
        <p className="mt-2">
          for some integer <InlineMath>{`N \\geq 0`}</InlineMath> and some complex numbers{' '}
          <InlineMath>{`(c_n)_{n=-N}^{N}`}</InlineMath>.
        </p>
      </Definition>

      <Example title="Trigonometric Polynomial Example">
        <p>
          The function <InlineMath>{`f = 4e_{-2} + ie_{-1} - 2e_0 + 0e_1 - 3e_2`}</InlineMath> is
          a trigonometric polynomial; it can be written more explicitly as:
        </p>
        <MathBlock>{`f(x) = 4e^{-4\\pi ix} + ie^{-2\\pi ix} - 2 - 3e^{4\\pi ix}`}</MathBlock>
      </Example>

      <Example title="Sines and Cosines">
        <p>
          For any integer <InlineMath>n</InlineMath>, the function{' '}
          <InlineMath>{`\\cos(2\\pi nx)`}</InlineMath> is a trigonometric polynomial since:
        </p>
        <MathBlock>{`\\cos(2\\pi nx) = \\frac{e^{2\\pi inx} + e^{-2\\pi inx}}{2} = \\frac{1}{2}e_{-n} + \\frac{1}{2}e_n`}</MathBlock>
        <p className="mt-2">
          Similarly, <InlineMath>{`\\sin(2\\pi nx) = \\frac{-1}{2i}e_{-n} + \\frac{1}{2i}e_n`}</InlineMath>{' '}
          is also a trigonometric polynomial.
        </p>
      </Example>

      <h3 className="text-xl font-semibold text-dark-100 mt-8 mb-4">Orthonormality of Characters</h3>

      <Definition title="Characters are Orthonormal">
        <p>
          For any integers <InlineMath>n</InlineMath> and <InlineMath>m</InlineMath>, we have:
        </p>
        <MathBlock>{`\\langle e_n, e_m \\rangle = \\begin{cases} 1 & \\text{if } n = m \\\\ 0 & \\text{if } n \\neq m \\end{cases}`}</MathBlock>
        <p className="mt-2">
          Also, <InlineMath>{`\\|e_n\\| = 1`}</InlineMath> for all <InlineMath>n</InlineMath>.
        </p>
      </Definition>

      <Callout type="success" title="Coefficient Formula">
        <p>
          As a consequence, if <InlineMath>{`f = \\sum_{n=-N}^{N} c_n e_n`}</InlineMath> is a
          trigonometric polynomial, then:
        </p>
        <MathBlock>{`c_n = \\langle f, e_n \\rangle`}</MathBlock>
        <p className="mt-2">
          for all integers <InlineMath>{`-N \\leq n \\leq N`}</InlineMath>. Also,{' '}
          <InlineMath>{`\\langle f, e_n \\rangle = 0`}</InlineMath> whenever{' '}
          <InlineMath>{`n > N`}</InlineMath> or <InlineMath>{`n < -N`}</InlineMath>.
        </p>
      </Callout>

      <h3 className="text-xl font-semibold text-dark-100 mt-8 mb-4">The Fourier Transform</h3>

      <Definition title="Fourier Coefficients">
        <p>
          For any function <InlineMath>{`f \\in C(\\mathbf{R}/\\mathbf{Z}; \\mathbf{C})`}</InlineMath>,
          and any integer <InlineMath>{`n \\in \\mathbf{Z}`}</InlineMath>, we define the{' '}
          <strong>nth Fourier coefficient</strong> of <InlineMath>f</InlineMath>, denoted{' '}
          <InlineMath>{`\\hat{f}(n)`}</InlineMath>, by:
        </p>
        <MathBlock>{`\\hat{f}(n) := \\langle f, e_n \\rangle = \\int_{[0,1]} f(x) e^{-2\\pi inx} \\, dx`}</MathBlock>
        <p className="mt-2">
          The function <InlineMath>{`\\hat{f} : \\mathbf{Z} \\to \\mathbf{C}`}</InlineMath> is
          called the <strong>Fourier transform</strong> of <InlineMath>f</InlineMath>.
        </p>
      </Definition>

      <Definition title="Fourier Series">
        <p>
          For a trigonometric polynomial <InlineMath>{`f = \\sum_{n=-N}^{N} c_n e_n`}</InlineMath>,
          we have the <strong>Fourier inversion formula</strong>:
        </p>
        <MathBlock>{`f = \\sum_{n=-\\infty}^{\\infty} \\hat{f}(n) e_n`}</MathBlock>
        <p className="mt-2">
          or equivalently:
        </p>
        <MathBlock>{`f(x) = \\sum_{n=-\\infty}^{\\infty} \\hat{f}(n) e^{2\\pi inx}`}</MathBlock>
        <p className="mt-2">
          The right-hand side is referred to as the <strong>Fourier series</strong> of{' '}
          <InlineMath>f</InlineMath>.
        </p>
      </Definition>

      <Definition title="Plancherel Formula (for Trigonometric Polynomials)">
        <p>
          For a trigonometric polynomial <InlineMath>f</InlineMath>, we have:
        </p>
        <MathBlock>{`\\|f\\|_2^2 = \\sum_{n=-\\infty}^{\\infty} |\\hat{f}(n)|^2`}</MathBlock>
      </Definition>

      <Callout type="info" title="Extending to General Functions">
        <p>
          For trigonometric polynomials, the Fourier series is just a finite sum in disguise.
          The main goal of Fourier theory is to extend these formulas to general functions in{' '}
          <InlineMath>{`C(\\mathbf{R}/\\mathbf{Z}; \\mathbf{C})`}</InlineMath>, not just
          trigonometric polynomials. This requires approximating continuous periodic functions
          by trigonometric polynomials.
        </p>
      </Callout>
    </LessonLayout>
  );
}
