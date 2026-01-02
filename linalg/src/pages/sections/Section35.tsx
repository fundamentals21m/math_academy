import { LessonLayout } from '@/components/layout/LessonLayout';
import { Definition, Theorem, Example } from '@/components/common/ContentBlocks';
import { InlineMath, MathBlock } from '@/components/common/MathBlock';

export default function Section35() {
  return (
    <LessonLayout sectionId={35}>
      {/* Introduction */}
      <p>
        <strong>Complex numbers</strong> extend the real numbers to include solutions of <InlineMath>x^2 = -1</InlineMath>.
        They are essential for understanding eigenvalues and the spectral theory of matrices.
      </p>

      <h2>Complex Numbers</h2>

      <Definition title="Complex Number" className="my-6">
        <p>
          A <strong>complex number</strong> has the form:
        </p>
        <MathBlock>
          {`z = a + bi`}
        </MathBlock>
        <p className="mt-2">
          where <InlineMath>a</InlineMath> is the <strong>real part</strong>, <InlineMath>b</InlineMath> is the <strong>imaginary part</strong>,
          and <InlineMath>{`i = \\sqrt{-1}`}</InlineMath>.
        </p>
      </Definition>

      <h2>Arithmetic with Complex Numbers</h2>

      <Theorem
        title="Complex Arithmetic"
        className="my-6"
        proof={
          <>
            <p><strong>Addition:</strong> Combine real and imaginary parts separately: <InlineMath>(a + bi) + (c + di) = (a+c) + (b+d)i</InlineMath>.</p>
            <p className="mt-2"><strong>Multiplication:</strong> Use distributive law and <InlineMath>i^2 = -1</InlineMath>:</p>
            <MathBlock>{`(a + bi)(c + di) = ac + adi + bci + bdi^2 = (ac - bd) + (ad + bc)i`}</MathBlock>
            <p className="mt-2"><strong>Modulus:</strong> <InlineMath>{`|z|^2 = z \\bar{z} = (a+bi)(a-bi) = a^2 + b^2`}</InlineMath>, so <InlineMath>{`|z| = \\sqrt{a^2 + b^2}`}</InlineMath>.</p>
          </>
        }
      >
        <p>For <InlineMath>z_1 = a + bi</InlineMath> and <InlineMath>z_2 = c + di</InlineMath>:</p>
        <ul className="list-disc list-inside space-y-2">
          <li><strong>Addition:</strong> <InlineMath>z_1 + z_2 = (a+c) + (b+d)i</InlineMath></li>
          <li><strong>Multiplication:</strong> <InlineMath>z_1 z_2 = (ac-bd) + (ad+bc)i</InlineMath></li>
          <li><strong>Complex conjugate:</strong> <InlineMath>{`\\bar{z}_1 = a - bi`}</InlineMath></li>
          <li><strong>Modulus:</strong> <InlineMath>{`|z_1| = \\sqrt{a^2 + b^2}`}</InlineMath></li>
        </ul>
      </Theorem>

      <Example title="Multiplication" className="my-6">
        <p><InlineMath>(2 + 3i)(4 - i)</InlineMath>:</p>
        <MathBlock>
          {`(2 + 3i)(4 - i) = 8 - 2i + 12i - 3i^2 = 8 + 10i + 3 = 11 + 10i`}
        </MathBlock>
      </Example>

      <h2>Polar Form</h2>

      <Definition title="Polar Representation" className="my-6">
        <p>
          Every complex number can be written as:
        </p>
        <MathBlock>
          {`z = r(\\cos\\theta + i\\sin\\theta) = re^{i\\theta}`}
        </MathBlock>
        <p className="mt-2">
          where <InlineMath>r = |z|</InlineMath> is the <strong>modulus</strong> and <InlineMath>\theta = \arg(z)</InlineMath> is the <strong>argument</strong>.
        </p>
      </Definition>

      <Theorem
        title="Euler's Formula"
        className="my-6"
        proof={
          <>
            <p>Using Taylor series expansions:</p>
            <MathBlock>{`e^{i\\theta} = 1 + i\\theta + \\frac{(i\\theta)^2}{2!} + \\frac{(i\\theta)^3}{3!} + \\frac{(i\\theta)^4}{4!} + \\cdots`}</MathBlock>
            <p className="mt-2">Since <InlineMath>i^2 = -1</InlineMath>, <InlineMath>i^3 = -i</InlineMath>, <InlineMath>i^4 = 1</InlineMath>, etc.:</p>
            <MathBlock>{`= 1 - \\frac{\\theta^2}{2!} + \\frac{\\theta^4}{4!} - \\cdots + i\\left(\\theta - \\frac{\\theta^3}{3!} + \\frac{\\theta^5}{5!} - \\cdots\\right)`}</MathBlock>
            <p className="mt-2">The real part is the Taylor series for <InlineMath>\\cos\\theta</InlineMath>, and the imaginary part is the series for <InlineMath>\\sin\\theta</InlineMath>.</p>
          </>
        }
      >
        <MathBlock>
          {`e^{i\\theta} = \\cos\\theta + i\\sin\\theta`}
        </MathBlock>
        <p className="mt-2">
          This connects exponentials to trigonometry. Special case: <InlineMath>{`e^{i\\\\pi} + 1 = 0`}</InlineMath>.
        </p>
      </Theorem>

      <h2>Complex Vectors</h2>

      <Definition title="Complex Vector Space" className="my-6">
        <p>
          <InlineMath>{`\\mathbb{C}^n`}</InlineMath> is the space of vectors with <InlineMath>n</InlineMath> complex components:
        </p>
        <MathBlock>
          {`\\mathbf{z} = \\begin{bmatrix} z_1 \\\\ z_2 \\\\ \\vdots \\\\ z_n \\end{bmatrix}, \\quad z_i \\in \\mathbb{C}`}
        </MathBlock>
      </Definition>

      <h2>Complex Inner Product</h2>

      <Definition title="Hermitian Inner Product" className="my-6">
        <p>
          The inner product of complex vectors <InlineMath>{`\\mathbf{u}`}</InlineMath> and <InlineMath>{`\\mathbf{v}`}</InlineMath> is:
        </p>
        <MathBlock>
          {`\\langle \\mathbf{u}, \\mathbf{v} \\rangle = \\bar{\\mathbf{u}}^T \\mathbf{v} = \\sum_{i=1}^{n} \\bar{u}_i v_i`}
        </MathBlock>
        <p className="mt-2 text-primary-400">
          Note the conjugate! This ensures <InlineMath>{`\\langle \\mathbf{u}, \\mathbf{u} \\rangle = \\|\\mathbf{u}\\|^2 \\geq 0`}</InlineMath>.
        </p>
      </Definition>

      <div className="bg-dark-800/50 rounded-xl p-4 my-6 border border-amber-500/20">
        <p className="font-semibold text-amber-400 mb-2">Why Conjugates?</p>
        <p className="text-dark-300 text-sm">
          Without conjugates, <InlineMath>(i)(i) = -1</InlineMath>, so the "length squared" of <InlineMath>(0, i)</InlineMath>
          would be <InlineMath>0 + (-1) = -1</InlineMath>. With conjugates: <InlineMath>{`\\bar{i}(i) = (-i)(i) = 1`}</InlineMath> ✓
        </p>
      </div>

      <h2>Complex Eigenvalues</h2>

      <Theorem
        title="Eigenvalues of Real Matrices"
        className="my-6"
        proof={
          <>
            <p>Suppose <InlineMath>A</InlineMath> is real and <InlineMath>{`A\\mathbf{x} = \\lambda\\mathbf{x}`}</InlineMath> where <InlineMath>{`\\lambda`}</InlineMath> and <InlineMath>{`\\mathbf{x}`}</InlineMath> may be complex.</p>
            <p className="mt-2">Take the complex conjugate of both sides:</p>
            <MathBlock>{`\\overline{A\\mathbf{x}} = \\overline{\\lambda\\mathbf{x}}`}</MathBlock>
            <p className="mt-2">Since <InlineMath>A</InlineMath> is real, <InlineMath>{`\\bar{A} = A`}</InlineMath>. Also, <InlineMath>{`\\overline{A\\mathbf{x}} = A\\bar{\\mathbf{x}}`}</InlineMath> and <InlineMath>{`\\overline{\\lambda\\mathbf{x}} = \\bar{\\lambda}\\bar{\\mathbf{x}}`}</InlineMath>:</p>
            <MathBlock>{`A\\bar{\\mathbf{x}} = \\bar{\\lambda}\\bar{\\mathbf{x}}`}</MathBlock>
            <p className="mt-2">This shows <InlineMath>{`\\bar{\\lambda}`}</InlineMath> is an eigenvalue with eigenvector <InlineMath>{`\\bar{\\mathbf{x}}`}</InlineMath>.</p>
          </>
        }
      >
        <p>
          For a real matrix <InlineMath>A</InlineMath>, complex eigenvalues come in conjugate pairs:
        </p>
        <MathBlock>
          {`\\text{If } \\lambda = a + bi \\text{ is an eigenvalue, so is } \\bar{\\lambda} = a - bi`}
        </MathBlock>
        <p className="mt-2">
          The eigenvectors are also conjugates: <InlineMath>{`\\mathbf{x}`}</InlineMath> and <InlineMath>{`\\bar{\\mathbf{x}}`}</InlineMath>.
        </p>
      </Theorem>

      <Example title="Rotation Matrix Eigenvalues" className="my-6">
        <MathBlock>
          {`R_{90°} = \\begin{bmatrix} 0 & -1 \\\\ 1 & 0 \\end{bmatrix}`}
        </MathBlock>
        <p className="mt-2">
          Characteristic equation: <InlineMath>\lambda^2 + 1 = 0</InlineMath><br />
          Eigenvalues: <InlineMath>\lambda = \pm i</InlineMath> (complex conjugate pair)
        </p>
      </Example>

      <h2>Key Ideas</h2>

      <div className="bg-gradient-to-br from-primary-500/10 to-dark-800/50 rounded-xl p-6 my-6 border border-primary-500/20">
        <ul className="space-y-3 text-dark-200">
          <li className="flex items-start gap-3">
            <span className="text-primary-400 font-bold">1.</span>
            <span>Complex numbers: <InlineMath>z = a + bi</InlineMath> with <InlineMath>i^2 = -1</InlineMath>.</span>
          </li>
          <li className="flex items-start gap-3">
            <span className="text-primary-400 font-bold">2.</span>
            <span>Euler's formula: <InlineMath>{`e^{i\\\\theta} = \\cos\\theta + i\\sin\\theta`}</InlineMath>.</span>
          </li>
          <li className="flex items-start gap-3">
            <span className="text-primary-400 font-bold">3.</span>
            <span>Complex inner product uses conjugate: <InlineMath>{`\\langle u, v \\rangle = \\bar{u}^T v`}</InlineMath>.</span>
          </li>
          <li className="flex items-start gap-3">
            <span className="text-primary-400 font-bold">4.</span>
            <span>Complex eigenvalues of real matrices come in conjugate pairs.</span>
          </li>
          <li className="flex items-start gap-3">
            <span className="text-primary-400 font-bold">5.</span>
            <span>Rotation matrices have purely imaginary eigenvalues.</span>
          </li>
        </ul>
      </div>
    </LessonLayout>
  );
}
