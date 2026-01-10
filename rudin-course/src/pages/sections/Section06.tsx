import { LessonLayout } from '../../components/layout/LessonLayout';
import { Definition, Theorem, Example } from '../../components/common/ContentBlocks';
import { Callout } from '../../components/common/Callout';
import { InlineMath, MathBlock } from '../../components/common/MathBlock';

export default function Section06() {
  return (
    <LessonLayout sectionId={6}>
      <h2 className="text-2xl font-semibold mb-4">Euclidean Spaces</h2>

      <p className="mb-4">
        Euclidean spaces generalize the familiar notion of vectors in 2 and 3 dimensions
        to arbitrary finite dimensions. The key structures are the inner product (dot product)
        and the norm (length), which satisfy important inequalities.
      </p>

      <Definition title="1.36 - Euclidean k-space">
        <p className="mb-3">
          For each positive integer <InlineMath>{'k'}</InlineMath>, let <InlineMath>{'R^k'}</InlineMath> be
          the set of all ordered <InlineMath>{'k'}</InlineMath>-tuples
        </p>
        <MathBlock>{'\\mathbf{x} = (x_1, x_2, \\ldots, x_k)'}</MathBlock>
        <p className="mb-3">
          where <InlineMath>{'x_1, \\ldots, x_k'}</InlineMath> are real numbers, called
          the <em>coordinates</em> of <InlineMath>{'\\mathbf{x}'}</InlineMath>. The elements
          of <InlineMath>{'R^k'}</InlineMath> are called <em>points</em>, or <em>vectors</em>, especially
          when <InlineMath>{'k > 1'}</InlineMath>. We shall denote vectors by boldfaced letters.
        </p>
        <p className="mb-3">
          If <InlineMath>{'\\mathbf{y} = (y_1, \\ldots, y_k)'}</InlineMath> and
          if <InlineMath>{'\\alpha'}</InlineMath> is a real number, put
        </p>
        <MathBlock>{'\\mathbf{x} + \\mathbf{y} = (x_1 + y_1, \\ldots, x_k + y_k)'}</MathBlock>
        <MathBlock>{'\\alpha\\mathbf{x} = (\\alpha x_1, \\ldots, \\alpha x_k)'}</MathBlock>
        <p className="mb-3">
          so that <InlineMath>{'\\mathbf{x} + \\mathbf{y} \\in R^k'}</InlineMath> and <InlineMath>{'\\alpha\\mathbf{x} \\in R^k'}</InlineMath>.
          This defines addition of vectors, as well as multiplication of a vector by a real number (a scalar).
          These two operations satisfy the commutative, associative, and distributive laws
          (the proof is trivial, in view of the analogous laws for the real numbers) and
          make <InlineMath>{'R^k'}</InlineMath> into a <em>vector space over the real field</em>.
        </p>
        <p className="mb-3">
          The zero element of <InlineMath>{'R^k'}</InlineMath> (sometimes called the <em>origin</em> or
          the <em>null vector</em>) is the point <InlineMath>{'\\mathbf{0}'}</InlineMath>, all of
          whose coordinates are 0.
        </p>
      </Definition>

      <Definition title="1.37 - Inner Product and Norm">
        <p className="mb-3">
          We also define the so-called "inner product" (or scalar product) of <InlineMath>{'\\mathbf{x}'}</InlineMath> and <InlineMath>{'\\mathbf{y}'}</InlineMath> by
        </p>
        <MathBlock>{'\\mathbf{x} \\cdot \\mathbf{y} = \\sum_{i=1}^k x_i y_i'}</MathBlock>
        <p className="mb-3">
          and the <em>norm</em> of <InlineMath>{'\\mathbf{x}'}</InlineMath> by
        </p>
        <MathBlock>{'|\\mathbf{x}| = (\\mathbf{x} \\cdot \\mathbf{x})^{1/2} = \\left(\\sum_{i=1}^k x_i^2\\right)^{1/2}'}</MathBlock>
      </Definition>

      <Callout type="info" title="Vector Space Structure">
        <p>
          The structure now defined (the vector space <InlineMath>{'R^k'}</InlineMath> with the above inner
          product and norm) is called <em>euclidean <InlineMath>{'k'}</InlineMath>-space</em>.
        </p>
      </Callout>

      <Theorem
        title="1.37 - Properties of Euclidean Space"
        proof={
          <>
            <p className="mb-3">
              <strong>(a)</strong>, <strong>(b)</strong>, and <strong>(c)</strong> are obvious,
              and <strong>(d)</strong> is an immediate consequence of the Schwarz inequality.
            </p>
            <p className="mb-3">
              By <strong>(d)</strong> we have
            </p>
            <MathBlock>{'|\\mathbf{x} + \\mathbf{y}|^2 = (\\mathbf{x} + \\mathbf{y}) \\cdot (\\mathbf{x} + \\mathbf{y})'}</MathBlock>
            <MathBlock>{'= \\mathbf{x} \\cdot \\mathbf{x} + 2\\mathbf{x} \\cdot \\mathbf{y} + \\mathbf{y} \\cdot \\mathbf{y}'}</MathBlock>
            <MathBlock>{'\\leq |\\mathbf{x}|^2 + 2|\\mathbf{x}||\\mathbf{y}| + |\\mathbf{y}|^2'}</MathBlock>
            <MathBlock>{'= (|\\mathbf{x}| + |\\mathbf{y}|)^2'}</MathBlock>
            <p className="mb-3">so that <strong>(e)</strong> is proved.</p>
            <p>
              Finally, <strong>(f)</strong> follows from <strong>(e)</strong> if we replace <InlineMath>{'\\mathbf{x}'}</InlineMath> by <InlineMath>{'\\mathbf{x} - \\mathbf{y}'}</InlineMath> and <InlineMath>{'\\mathbf{y}'}</InlineMath> by <InlineMath>{'\\mathbf{y} - \\mathbf{z}'}</InlineMath>.
            </p>
          </>
        }
      >
        <p className="mb-3">
          Suppose <InlineMath>{'\\mathbf{x}, \\mathbf{y}, \\mathbf{z} \\in R^k'}</InlineMath>,
          and <InlineMath>{'\\alpha'}</InlineMath> is real. Then
        </p>
        <ul className="list-none space-y-1">
          <li>(a) <InlineMath>{'|\\mathbf{x}| \\geq 0'}</InlineMath>;</li>
          <li>(b) <InlineMath>{'|\\mathbf{x}| = 0'}</InlineMath> if and only if <InlineMath>{'\\mathbf{x} = \\mathbf{0}'}</InlineMath>;</li>
          <li>(c) <InlineMath>{'|\\alpha\\mathbf{x}| = |\\alpha||\\mathbf{x}|'}</InlineMath>;</li>
          <li>(d) <InlineMath>{'|\\mathbf{x} \\cdot \\mathbf{y}| \\leq |\\mathbf{x}||\\mathbf{y}|'}</InlineMath> (Schwarz inequality);</li>
          <li>(e) <InlineMath>{'|\\mathbf{x} + \\mathbf{y}| \\leq |\\mathbf{x}| + |\\mathbf{y}|'}</InlineMath> (triangle inequality);</li>
          <li>(f) <InlineMath>{'|\\mathbf{x} - \\mathbf{z}| \\leq |\\mathbf{x} - \\mathbf{y}| + |\\mathbf{y} - \\mathbf{z}|'}</InlineMath>.</li>
        </ul>
      </Theorem>

      <Callout type="note" title="1.38 - Remarks">
        <p className="mb-3">
          Theorem 1.37 (a), (b), and (f) will allow us (see Chap. 2) to
          regard <InlineMath>{'R^k'}</InlineMath> as a <em>metric space</em>.
        </p>
        <p className="mb-3">
          <InlineMath>{'R^1'}</InlineMath> (the set of all real numbers) is usually called the <em>line</em>,
          or the <em>real line</em>. Likewise, <InlineMath>{'R^2'}</InlineMath> is called the <em>plane</em>,
          or the <em>complex plane</em> (compare Definitions 1.24 and 1.36). In these two cases
          the norm is just the absolute value of the corresponding real or complex number.
        </p>
      </Callout>

      <Example title="Euclidean 2-space and 3-space">
        <p className="mb-3">
          In <InlineMath>{'R^2'}</InlineMath>, vectors are ordered pairs <InlineMath>{'\\mathbf{x} = (x_1, x_2)'}</InlineMath>.
          The inner product is
        </p>
        <MathBlock>{'\\mathbf{x} \\cdot \\mathbf{y} = x_1 y_1 + x_2 y_2'}</MathBlock>
        <p className="mb-3">
          and the norm is
        </p>
        <MathBlock>{'|\\mathbf{x}| = \\sqrt{x_1^2 + x_2^2}'}</MathBlock>
        <p className="mb-3">
          This is the familiar Pythagorean formula for the distance from the origin to the
          point <InlineMath>{'(x_1, x_2)'}</InlineMath>.
        </p>
        <p className="mb-3">
          In <InlineMath>{'R^3'}</InlineMath>, the norm of <InlineMath>{'\\mathbf{x} = (x_1, x_2, x_3)'}</InlineMath> is
        </p>
        <MathBlock>{'|\\mathbf{x}| = \\sqrt{x_1^2 + x_2^2 + x_3^2}'}</MathBlock>
        <p>
          This is the 3-dimensional version of the Pythagorean theorem.
        </p>
      </Example>

      <Example title="The Schwarz Inequality in R^2">
        <p className="mb-3">
          In <InlineMath>{'R^2'}</InlineMath>, the Schwarz inequality states that for
          any <InlineMath>{'\\mathbf{x} = (x_1, x_2)'}</InlineMath> and <InlineMath>{'\\mathbf{y} = (y_1, y_2)'}</InlineMath>:
        </p>
        <MathBlock>{'|x_1 y_1 + x_2 y_2| \\leq \\sqrt{x_1^2 + x_2^2}\\sqrt{y_1^2 + y_2^2}'}</MathBlock>
        <p className="mb-3">
          Geometrically, this says that the dot product of two vectors is at most the product
          of their lengths. Equality holds if and only if one vector is a scalar multiple of the other.
        </p>
        <p>
          The Schwarz inequality can also be written as
        </p>
        <MathBlock>{'\\frac{\\mathbf{x} \\cdot \\mathbf{y}}{|\\mathbf{x}||\\mathbf{y}|} \\leq 1'}</MathBlock>
        <p className="mt-3">
          which shows that <InlineMath>{'\\cos\\theta = \\frac{\\mathbf{x} \\cdot \\mathbf{y}}{|\\mathbf{x}||\\mathbf{y}|}'}</InlineMath> is
          well-defined for nonzero vectors, and <InlineMath>{'\\theta'}</InlineMath> is the angle between them.
        </p>
      </Example>

      <h3 className="text-xl font-semibold mt-8 mb-4">Key Takeaways</h3>
      <ul className="list-disc list-inside space-y-2 text-dark-300">
        <li><InlineMath>{'R^k'}</InlineMath> consists of all ordered <InlineMath>{'k'}</InlineMath>-tuples of real numbers</li>
        <li>Vector addition and scalar multiplication make <InlineMath>{'R^k'}</InlineMath> a vector space</li>
        <li>The inner product is <InlineMath>{'\\mathbf{x} \\cdot \\mathbf{y} = \\sum x_i y_i'}</InlineMath></li>
        <li>The norm is <InlineMath>{'|\\mathbf{x}| = \\sqrt{\\sum x_i^2}'}</InlineMath></li>
        <li>The Schwarz inequality: <InlineMath>{'|\\mathbf{x} \\cdot \\mathbf{y}| \\leq |\\mathbf{x}||\\mathbf{y}|'}</InlineMath></li>
        <li>The triangle inequality: <InlineMath>{'|\\mathbf{x} + \\mathbf{y}| \\leq |\\mathbf{x}| + |\\mathbf{y}|'}</InlineMath></li>
        <li><InlineMath>{'R^1'}</InlineMath> is the real line, <InlineMath>{'R^2'}</InlineMath> is the plane</li>
        <li>The norm generalizes absolute value to higher dimensions</li>
      </ul>
    </LessonLayout>
  );
}
