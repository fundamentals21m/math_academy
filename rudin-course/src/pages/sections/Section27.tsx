import { LessonLayout } from '../../components/layout/LessonLayout';
import { Definition, Theorem, Example } from '../../components/common/ContentBlocks';
import { Callout } from '../../components/common/Callout';
import { InlineMath, MathBlock } from '../../components/common/MathBlock';

export default function Section27() {
  return (
    <LessonLayout sectionId={27}>
      <h2 className="text-2xl font-semibold mb-4">Limits of Functions</h2>

      <p className="mb-4">
        Chapter 4 begins our systematic study of continuity. The function concept and some of the related
        terminology were introduced in Definitions 2.1 and 2.2. Although we shall be mainly interested
        in real and complex functions (functions whose values are real or complex numbers), we shall also
        discuss vector-valued functions with values in <InlineMath>{'R^k'}</InlineMath> and functions
        with values in an arbitrary metric space. The theorems we shall discuss in this general setting
        would not become any easier if we restricted ourselves to real functions.
      </p>

      <Callout type="info">
        <p>
          The domains of definition of our functions will also be metric spaces, suitably specialized
          in various instances. This simplifies and clarifies the statements and proofs of theorems
          in an appropriately general context.
        </p>
      </Callout>

      <h3 className="text-xl font-semibold mt-8 mb-4">Definition of Limits</h3>

      <Definition title="4.1 Limit of a Function at a Point">
        <p>
          Let <InlineMath>{'X'}</InlineMath> and <InlineMath>{'Y'}</InlineMath> be metric spaces;
          suppose <InlineMath>{'E \\subset X'}</InlineMath>, <InlineMath>{'f'}</InlineMath> maps{' '}
          <InlineMath>{'E'}</InlineMath> into <InlineMath>{'Y'}</InlineMath>, and{' '}
          <InlineMath>{'p'}</InlineMath> is a limit point of <InlineMath>{'E'}</InlineMath>. We write
        </p>
        <MathBlock>{'\\lim_{x \\to p} f(x) = q'}</MathBlock>
        <p>
          or equivalently <InlineMath>{'f(x) \\to q'}</InlineMath> as{' '}
          <InlineMath>{'x \\to p'}</InlineMath>, if there is a point{' '}
          <InlineMath>{'q \\in Y'}</InlineMath> with the following property: For every{' '}
          <InlineMath>{'\\varepsilon > 0'}</InlineMath> there exists a{' '}
          <InlineMath>{'\\delta > 0'}</InlineMath> such that
        </p>
        <MathBlock>{'d_Y(f(x), q) < \\varepsilon'}</MathBlock>
        <p>
          for all points <InlineMath>{'x \\in E'}</InlineMath> for which
        </p>
        <MathBlock>{'0 < d_X(x, p) < \\delta.'}</MathBlock>
        <p className="mt-2">
          The symbols <InlineMath>{'d_X'}</InlineMath> and <InlineMath>{'d_Y'}</InlineMath> refer to
          the distances in <InlineMath>{'X'}</InlineMath> and <InlineMath>{'Y'}</InlineMath>,
          respectively. If <InlineMath>{'X'}</InlineMath> and/or <InlineMath>{'Y'}</InlineMath> are
          replaced by the real line, the complex plane, or by some euclidean space{' '}
          <InlineMath>{'R^k'}</InlineMath>, the distances <InlineMath>{'d_X'}</InlineMath>,{' '}
          <InlineMath>{'d_Y'}</InlineMath> are of course replaced by absolute values or by norms of
          differences.
        </p>
      </Definition>

      <p className="my-4">
        It should be noted that <InlineMath>{'p \\in X'}</InlineMath>, but that{' '}
        <InlineMath>{'p'}</InlineMath> need not be a point of <InlineMath>{'E'}</InlineMath> in the
        above definition. Moreover, even if <InlineMath>{'p \\in E'}</InlineMath>, we may very well
        have <InlineMath>{'f(p) \\neq \\lim_{x \\to p} f(x)'}</InlineMath>.
      </p>

      <p className="my-4">
        We can recast this definition in terms of limits of sequences:
      </p>

      <Theorem
        title="4.2 Sequential Characterization of Limits"
        proof={
          <>
            <p>
              Suppose (4) holds. Choose <InlineMath>{'\\{p_n\\}'}</InlineMath> in{' '}
              <InlineMath>{'E'}</InlineMath> satisfying (6). Let <InlineMath>{'\\varepsilon > 0'}</InlineMath>{' '}
              be given. Then there exists <InlineMath>{'\\delta > 0'}</InlineMath> such that{' '}
              <InlineMath>{'d_Y(f(x), q) < \\varepsilon'}</InlineMath> if{' '}
              <InlineMath>{'x \\in E'}</InlineMath> and{' '}
              <InlineMath>{'0 < d_X(x, p) < \\delta'}</InlineMath>. Also, there exists{' '}
              <InlineMath>{'N'}</InlineMath> such that <InlineMath>{'n > N'}</InlineMath> implies{' '}
              <InlineMath>{'0 < d_X(p_n, p) < \\delta'}</InlineMath>. Thus, for{' '}
              <InlineMath>{'n > N'}</InlineMath>, we have{' '}
              <InlineMath>{'d_Y(f(p_n), q) < \\varepsilon'}</InlineMath>, which shows that (5) holds.
            </p>
            <p className="mt-2">
              Conversely, suppose (4) is false. Then there exists some{' '}
              <InlineMath>{'\\varepsilon > 0'}</InlineMath> such that for every{' '}
              <InlineMath>{'\\delta > 0'}</InlineMath> there exists a point{' '}
              <InlineMath>{'x \\in E'}</InlineMath> (depending on <InlineMath>{'\\delta'}</InlineMath>),
              for which <InlineMath>{'d_Y(f(x), q) \\geq \\varepsilon'}</InlineMath> but{' '}
              <InlineMath>{'0 < d_X(x, p) < \\delta'}</InlineMath>. Taking{' '}
              <InlineMath>{'\\delta_n = 1/n'}</InlineMath> (<InlineMath>{'n = 1, 2, 3, \\ldots'}</InlineMath>),
              we thus find a sequence in <InlineMath>{'E'}</InlineMath> satisfying (6) for which (5)
              is false.
            </p>
          </>
        }
      >
        <p>
          Let <InlineMath>{'X'}</InlineMath>, <InlineMath>{'Y'}</InlineMath>,{' '}
          <InlineMath>{'E'}</InlineMath>, <InlineMath>{'f'}</InlineMath>, and{' '}
          <InlineMath>{'p'}</InlineMath> be as in Definition 4.1. Then
        </p>
        <MathBlock>{'\\lim_{x \\to p} f(x) = q'}</MathBlock>
        <p>if and only if</p>
        <MathBlock>{'\\lim_{n \\to \\infty} f(p_n) = q'}</MathBlock>
        <p>
          for every sequence <InlineMath>{'\\{p_n\\}'}</InlineMath> in{' '}
          <InlineMath>{'E'}</InlineMath> such that
        </p>
        <MathBlock>{'p_n \\neq p, \\quad \\lim_{n \\to \\infty} p_n = p.'}</MathBlock>
      </Theorem>

      <p className="my-4">
        <strong>Corollary:</strong> If <InlineMath>{'f'}</InlineMath> has a limit at{' '}
        <InlineMath>{'p'}</InlineMath>, this limit is unique.
      </p>
      <p className="my-4">
        This follows from Theorems 3.2(b) and 4.2.
      </p>

      <h3 className="text-xl font-semibold mt-8 mb-4">Algebraic Operations on Functions</h3>

      <Definition title="4.3 Operations on Complex Functions">
        <p>
          Suppose we have two complex functions, <InlineMath>{'f'}</InlineMath> and{' '}
          <InlineMath>{'g'}</InlineMath>, both defined on <InlineMath>{'E'}</InlineMath>. By{' '}
          <InlineMath>{'f + g'}</InlineMath> we mean the function which assigns to each point{' '}
          <InlineMath>{'x'}</InlineMath> of <InlineMath>{'E'}</InlineMath> the number{' '}
          <InlineMath>{'f(x) + g(x)'}</InlineMath>. Similarly we define the difference{' '}
          <InlineMath>{'f - g'}</InlineMath>, the product <InlineMath>{'fg'}</InlineMath>, and the
          quotient <InlineMath>{'f/g'}</InlineMath> of the two functions, with the understanding
          that the quotient is defined only at those points <InlineMath>{'x'}</InlineMath> of{' '}
          <InlineMath>{'E'}</InlineMath> at which <InlineMath>{'g(x) \\neq 0'}</InlineMath>.
        </p>
        <p className="mt-2">
          If <InlineMath>{'f'}</InlineMath> assigns to each point <InlineMath>{'x'}</InlineMath> of{' '}
          <InlineMath>{'E'}</InlineMath> the same number <InlineMath>{'c'}</InlineMath>, then{' '}
          <InlineMath>{'f'}</InlineMath> is said to be a constant function, or simply a constant,
          and we write <InlineMath>{'f = c'}</InlineMath>. If <InlineMath>{'f'}</InlineMath> and{' '}
          <InlineMath>{'g'}</InlineMath> are real functions, and if{' '}
          <InlineMath>{'f(x) \\geq g(x)'}</InlineMath> for every <InlineMath>{'x \\in E'}</InlineMath>,
          we shall sometimes write <InlineMath>{'f \\geq g'}</InlineMath>, for brevity.
        </p>
        <p className="mt-2">
          Similarly, if <InlineMath>{'\\mathbf{f}'}</InlineMath> and{' '}
          <InlineMath>{'\\mathbf{g}'}</InlineMath> map <InlineMath>{'E'}</InlineMath> into{' '}
          <InlineMath>{'R^k'}</InlineMath>, we define{' '}
          <InlineMath>{'\\mathbf{f} + \\mathbf{g}'}</InlineMath> and{' '}
          <InlineMath>{'\\mathbf{f} \\cdot \\mathbf{g}'}</InlineMath> by
        </p>
        <MathBlock>{'(\\mathbf{f} + \\mathbf{g})(x) = \\mathbf{f}(x) + \\mathbf{g}(x), \\quad (\\mathbf{f} \\cdot \\mathbf{g})(x) = \\mathbf{f}(x) \\cdot \\mathbf{g}(x);'}</MathBlock>
        <p>
          and if <InlineMath>{'\\lambda'}</InlineMath> is a real number,{' '}
          <InlineMath>{'(\\lambda\\mathbf{f})(x) = \\lambda\\mathbf{f}(x)'}</InlineMath>.
        </p>
      </Definition>

      <Theorem title="4.4 Algebra of Limits">
        <p>
          Suppose <InlineMath>{'E \\subset X'}</InlineMath>, a metric space,{' '}
          <InlineMath>{'p'}</InlineMath> is a limit point of <InlineMath>{'E'}</InlineMath>,{' '}
          <InlineMath>{'f'}</InlineMath> and <InlineMath>{'g'}</InlineMath> are complex functions
          on <InlineMath>{'E'}</InlineMath>, and
        </p>
        <MathBlock>{'\\lim_{x \\to p} f(x) = A, \\quad \\lim_{x \\to p} g(x) = B.'}</MathBlock>
        <p>Then</p>
        <ul className="list-none mt-2 space-y-2 ml-4">
          <li>
            (a) <InlineMath>{'\\lim_{x \\to p} (f + g)(x) = A + B'}</InlineMath>;
          </li>
          <li>
            (b) <InlineMath>{'\\lim_{x \\to p} (fg)(x) = AB'}</InlineMath>;
          </li>
          <li>
            (c) <InlineMath>{'\\lim_{x \\to p} \\left(\\frac{f}{g}\\right)(x) = \\frac{A}{B}'}</InlineMath>,
            if <InlineMath>{'B \\neq 0'}</InlineMath>.
          </li>
        </ul>
      </Theorem>

      <p className="my-4">
        <em>Proof:</em> In view of Theorem 4.2, these assertions follow immediately from the
        analogous properties of sequences (Theorem 3.3).
      </p>

      <p className="my-4">
        <strong>Remark:</strong> If <InlineMath>{'\\mathbf{f}'}</InlineMath> and{' '}
        <InlineMath>{'\\mathbf{g}'}</InlineMath> map <InlineMath>{'E'}</InlineMath> into{' '}
        <InlineMath>{'R^k'}</InlineMath>, then (a) remains true, and (b) becomes
      </p>
      <p className="my-4 ml-4">
        (b') <InlineMath>{'\\lim_{x \\to p} (\\mathbf{f} \\cdot \\mathbf{g})(x) = \\mathbf{A} \\cdot \\mathbf{B}'}</InlineMath>.
      </p>
      <p className="my-4">
        (Compare Theorem 3.4.)
      </p>

      <Example title="4.5 Limits of Polynomial and Rational Functions">
        <p>
          Let <InlineMath>{'P(x)'}</InlineMath> be a polynomial with real or complex coefficients.
          Then for any <InlineMath>{'a'}</InlineMath>,
        </p>
        <MathBlock>{'\\lim_{x \\to a} P(x) = P(a).'}</MathBlock>
        <p className="mt-2">
          This follows by repeated application of Theorem 4.4 (a) and (b), since we can write
        </p>
        <MathBlock>{'P(x) = c_0 + c_1 x + c_2 x^2 + \\cdots + c_n x^n'}</MathBlock>
        <p>
          and <InlineMath>{'\\lim_{x \\to a} x = a'}</InlineMath> trivially.
        </p>
        <p className="mt-2">
          Similarly, if <InlineMath>{'Q(x)'}</InlineMath> is another polynomial and{' '}
          <InlineMath>{'Q(a) \\neq 0'}</InlineMath>, then
        </p>
        <MathBlock>{'\\lim_{x \\to a} \\frac{P(x)}{Q(x)} = \\frac{P(a)}{Q(a)}.'}</MathBlock>
      </Example>

      <Example title="4.6 A Fundamental Trigonometric Limit">
        <p>
          We claim that
        </p>
        <MathBlock>{'\\lim_{x \\to 0} \\frac{\\sin x}{x} = 1.'}</MathBlock>
        <p className="mt-2">
          To prove this, consider a unit circle and note that for{' '}
          <InlineMath>{'0 < x < \\pi/2'}</InlineMath>, we have
        </p>
        <MathBlock>{'\\sin x < x < \\tan x,'}</MathBlock>
        <p>
          which gives <InlineMath>{'\\cos x < \\frac{\\sin x}{x} < 1'}</InlineMath>. Since{' '}
          <InlineMath>{'\\cos x \\to 1'}</InlineMath> as <InlineMath>{'x \\to 0'}</InlineMath>,
          the squeeze theorem yields the result. The case{' '}
          <InlineMath>{'-\\pi/2 < x < 0'}</InlineMath> follows by symmetry.
        </p>
      </Example>

      <h3 className="text-xl font-semibold mt-8 mb-4">Summary</h3>

      <p className="my-4">
        The key results of this section are:
      </p>
      <ul className="list-disc list-inside space-y-2">
        <li>
          Definition 4.1 gives the precise <InlineMath>{'\\varepsilon'}</InlineMath>-<InlineMath>{'\\delta'}</InlineMath>{' '}
          definition of limit for functions between metric spaces
        </li>
        <li>
          Theorem 4.2 provides the powerful sequential characterization: limits of functions can be
          computed via sequences
        </li>
        <li>
          Theorem 4.4 shows that limits respect algebraic operations (sums, products, quotients)
        </li>
        <li>
          The limit of a function at a point, if it exists, is unique
        </li>
      </ul>
    </LessonLayout>
  );
}
