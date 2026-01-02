import { LessonLayout } from '@/components/layout/LessonLayout';
import { Definition, Theorem, Example } from '@/components/common/ContentBlocks';
import { InlineMath, MathBlock } from '@/components/common/MathBlock';

export default function Section37() {
  return (
    <LessonLayout sectionId={37}>
      {/* Introduction */}
      <p>
        The <strong>Fast Fourier Transform (FFT)</strong> is one of the most important algorithms ever discovered.
        It reduces the cost of computing the Discrete Fourier Transform from <InlineMath>O(n^2)</InlineMath> to <InlineMath>O(n \log n)</InlineMath>.
      </p>

      <h2>The Discrete Fourier Transform</h2>

      <Definition title="DFT Matrix" className="my-6">
        <p>
          The <InlineMath>n \times n</InlineMath> Fourier matrix <InlineMath>F_n</InlineMath> has entries:
        </p>
        <MathBlock>
          {`(F_n)_{jk} = \\omega^{jk}, \\quad \\omega = e^{-2\\pi i/n}`}
        </MathBlock>
        <p className="mt-2">
          where <InlineMath>\omega</InlineMath> is a primitive <InlineMath>n</InlineMath>th root of unity (<InlineMath>\omega^n = 1</InlineMath>).
        </p>
      </Definition>

      <Example title="4×4 Fourier Matrix" className="my-6">
        <p>With <InlineMath>{`\\omega = e^{-2\\\\pi i/4} = -i`}</InlineMath>:</p>
        <MathBlock>
          {`F_4 = \\begin{bmatrix} 1 & 1 & 1 & 1 \\\\ 1 & -i & -1 & i \\\\ 1 & -1 & 1 & -1 \\\\ 1 & i & -1 & -i \\end{bmatrix}`}
        </MathBlock>
      </Example>

      <h2>The FFT Algorithm</h2>

      <Theorem
        title="The Key Idea"
        className="my-6"
        proof={
          <>
            <p>The DFT of <InlineMath>{`\\mathbf{c}`}</InlineMath> can be split into even and odd terms:</p>
            <MathBlock>{`y_j = \\sum_{k=0}^{n-1} c_k \\omega^{jk} = \\sum_{k \\text{ even}} c_k \\omega^{jk} + \\sum_{k \\text{ odd}} c_k \\omega^{jk}`}</MathBlock>
            <p className="mt-2">Let <InlineMath>{`c_k^{(e)} = c_{2k}`}</InlineMath> and <InlineMath>{`c_k^{(o)} = c_{2k+1}`}</InlineMath> for <InlineMath>{`k = 0, \\ldots, n/2-1`}</InlineMath>:</p>
            <MathBlock>{`y_j = \\sum_{k=0}^{n/2-1} c_k^{(e)} \\omega^{2jk} + \\omega^j \\sum_{k=0}^{n/2-1} c_k^{(o)} \\omega^{2jk}`}</MathBlock>
            <p className="mt-2">Since <InlineMath>{`\\omega^2 = e^{-4\\pi i/n}`}</InlineMath> is the <InlineMath>(n/2)</InlineMath>th root of unity, each sum is a DFT of size <InlineMath>n/2</InlineMath>.</p>
            <p className="mt-2">The permutation <InlineMath>P</InlineMath> separates even and odd indices; <InlineMath>D</InlineMath> provides the "twiddle factors" <InlineMath>{`\\omega^j`}</InlineMath>.</p>
          </>
        }
      >
        <p>
          The FFT exploits a <strong>recursive structure</strong> in <InlineMath>F_n</InlineMath>:
        </p>
        <MathBlock>
          {`F_n = \\begin{bmatrix} I & D \\\\ I & -D \\end{bmatrix} \\begin{bmatrix} F_{n/2} & 0 \\\\ 0 & F_{n/2} \\end{bmatrix} P`}
        </MathBlock>
        <p className="mt-2">
          where <InlineMath>{`D = \\text{diag}(1, \\omega, \\omega^2, \\ldots, \\omega^{n/2-1})`}</InlineMath> and <InlineMath>P</InlineMath> is a permutation.
        </p>
      </Theorem>

      <div className="bg-dark-800/50 rounded-xl p-4 my-6 border border-primary-500/20">
        <p className="font-semibold text-primary-400 mb-2">Why O(n log n)?</p>
        <p className="text-dark-300 text-sm">
          <strong>Direct computation:</strong> <InlineMath>n^2</InlineMath> multiplications for matrix-vector product.<br /><br />
          <strong>FFT:</strong> Recursively compute two DFTs of size <InlineMath>n/2</InlineMath>, then combine.<br />
          <InlineMath>T(n) = 2T(n/2) + O(n) \Rightarrow T(n) = O(n \log n)</InlineMath>
        </p>
      </div>

      <h2>Properties of the Fourier Matrix</h2>

      <Theorem
        title="Fourier Matrix Properties"
        className="my-6"
        proof={
          <>
            <p><strong>Symmetric:</strong> <InlineMath>{`(F_n)_{jk} = \\omega^{jk} = \\omega^{kj} = (F_n)_{kj}`}</InlineMath>.</p>
            <p className="mt-2"><strong>Orthogonal columns:</strong> For columns <InlineMath>j</InlineMath> and <InlineMath>k</InlineMath>:</p>
            <MathBlock>{`(F_n^H F_n)_{jk} = \\sum_{m=0}^{n-1} \\overline{\\omega^{mj}} \\omega^{mk} = \\sum_{m=0}^{n-1} \\omega^{m(k-j)}`}</MathBlock>
            <p className="mt-2">If <InlineMath>j = k</InlineMath>: sum = <InlineMath>n</InlineMath>. If <InlineMath>{`j \\neq k`}</InlineMath>: this is a geometric series with ratio <InlineMath>{`\\omega^{k-j} \\neq 1`}</InlineMath>, so sum = <InlineMath>0</InlineMath>.</p>
            <p className="mt-2"><strong>Inverse:</strong> From <InlineMath>{`F_n^H F_n = nI`}</InlineMath>, we get <InlineMath>{`F_n^{-1} = \\frac{1}{n}F_n^H`}</InlineMath>.</p>
            <p className="mt-2"><strong>Unitary:</strong> <InlineMath>{`(\\frac{1}{\\sqrt{n}}F_n)^H(\\frac{1}{\\sqrt{n}}F_n) = \\frac{1}{n}F_n^H F_n = I`}</InlineMath>.</p>
          </>
        }
      >
        <ul className="list-disc list-inside space-y-2">
          <li><strong>Symmetric:</strong> <InlineMath>F_n = F_n^T</InlineMath></li>
          <li><strong>Orthogonal columns:</strong> <InlineMath>F_n^H F_n = nI</InlineMath></li>
          <li><strong>Inverse:</strong> <InlineMath>{`F_n^{-1} = \\frac{1}{n}\\bar{F}_n = \\frac{1}{n}F_n^H`}</InlineMath></li>
          <li><strong>Unitary (scaled):</strong> <InlineMath>{`\\frac{1}{\\sqrt{n}}F_n`}</InlineMath> is unitary</li>
        </ul>
      </Theorem>

      <h2>Convolution</h2>

      <Theorem
        title="Convolution Theorem"
        className="my-6"
        proof={
          <>
            <p>Let <InlineMath>{`\\hat{a} = F_na`}</InlineMath> and <InlineMath>{`\\hat{b} = F_nb`}</InlineMath> be the DFTs. The <InlineMath>k</InlineMath>th component of the convolution's DFT is:</p>
            <MathBlock>{`\\widehat{(a*b)}_k = \\sum_{m=0}^{n-1} (a*b)_m \\omega^{mk} = \\sum_{m=0}^{n-1} \\left(\\sum_{j=0}^{n-1} a_j b_{m-j}\\right) \\omega^{mk}`}</MathBlock>
            <p className="mt-2">Rearranging (with indices mod <InlineMath>n</InlineMath>):</p>
            <MathBlock>{`= \\sum_{j=0}^{n-1} a_j \\omega^{jk} \\sum_{\\ell=0}^{n-1} b_\\ell \\omega^{\\ell k} = \\hat{a}_k \\cdot \\hat{b}_k`}</MathBlock>
            <p className="mt-2">Thus <InlineMath>{`\\mathcal{F}(a*b) = \\mathcal{F}(a) \\odot \\mathcal{F}(b)`}</InlineMath> (componentwise product).</p>
          </>
        }
      >
        <p>
          The <strong>convolution</strong> of vectors <InlineMath>a</InlineMath> and <InlineMath>b</InlineMath>:
        </p>
        <MathBlock>
          {`(a * b)_k = \\sum_j a_j b_{k-j}`}
        </MathBlock>
        <p className="mt-2">
          becomes <strong>pointwise multiplication</strong> in the Fourier domain:
        </p>
        <MathBlock>
          {`\\mathcal{F}(a * b) = \\mathcal{F}(a) \\cdot \\mathcal{F}(b)`}
        </MathBlock>
      </Theorem>

      <Example title="Polynomial Multiplication" className="my-6">
        <p>
          To multiply polynomials <InlineMath>a(x)</InlineMath> and <InlineMath>b(x)</InlineMath>:
        </p>
        <ol className="list-decimal list-inside mt-2 space-y-1">
          <li>FFT: transform coefficients of <InlineMath>a</InlineMath> and <InlineMath>b</InlineMath></li>
          <li>Multiply pointwise: <InlineMath>O(n)</InlineMath></li>
          <li>Inverse FFT: get coefficients of <InlineMath>a \cdot b</InlineMath></li>
        </ol>
        <p className="mt-2 text-primary-400">
          Total: <InlineMath>O(n \log n)</InlineMath> instead of <InlineMath>O(n^2)</InlineMath>!
        </p>
      </Example>

      <h2>Applications</h2>

      <div className="bg-dark-800/50 rounded-xl p-4 my-6 border border-primary-500/20">
        <p className="font-semibold text-primary-400 mb-2">Where FFT is Used</p>
        <ul className="list-disc list-inside text-dark-300 text-sm space-y-1">
          <li><strong>Signal processing:</strong> Audio, image, and video compression</li>
          <li><strong>Spectral analysis:</strong> Find frequencies in data</li>
          <li><strong>Polynomial/integer multiplication:</strong> Fast algorithms</li>
          <li><strong>Solving PDEs:</strong> Spectral methods</li>
          <li><strong>Data compression:</strong> JPEG, MP3 use FFT-related transforms</li>
        </ul>
      </div>

      <h2>The Roots of Unity</h2>

      <Theorem
        title="Roots of Unity"
        className="my-6"
        proof={
          <>
            <p><strong>Solutions:</strong> By Euler's formula, <InlineMath>{`(e^{2\\pi ik/n})^n = e^{2\\pi ik} = 1`}</InlineMath> for any integer <InlineMath>k</InlineMath>.</p>
            <p className="mt-2">For <InlineMath>{`k = 0, 1, \\ldots, n-1`}</InlineMath>, we get <InlineMath>n</InlineMath> distinct roots (since <InlineMath>{`|\\omega_k| = 1`}</InlineMath> and the arguments are evenly spaced by <InlineMath>{`2\\pi/n`}</InlineMath>).</p>
            <p className="mt-2"><strong>Sum equals zero:</strong> Let <InlineMath>{`\\omega = e^{2\\pi i/n}`}</InlineMath>. The sum is a geometric series:</p>
            <MathBlock>{`S = 1 + \\omega + \\omega^2 + \\cdots + \\omega^{n-1} = \\frac{1 - \\omega^n}{1 - \\omega} = \\frac{1 - 1}{1 - \\omega} = 0`}</MathBlock>
            <p className="mt-2">(Valid since <InlineMath>{`\\omega \\neq 1`}</InlineMath> for <InlineMath>{`n > 1`}</InlineMath>.)</p>
          </>
        }
      >
        <p>
          The <InlineMath>n</InlineMath>th roots of unity are the solutions to <InlineMath>z^n = 1</InlineMath>:
        </p>
        <MathBlock>
          {`\\omega_k = e^{2\\pi ik/n} = \\cos\\frac{2\\pi k}{n} + i\\sin\\frac{2\\pi k}{n}`}
        </MathBlock>
        <p className="mt-2">
          They form a regular <InlineMath>n</InlineMath>-gon on the unit circle. Key property:
        </p>
        <MathBlock>
          {`1 + \\omega + \\omega^2 + \\cdots + \\omega^{n-1} = 0`}
        </MathBlock>
      </Theorem>

      <h2>Key Ideas</h2>

      <div className="bg-gradient-to-br from-primary-500/10 to-dark-800/50 rounded-xl p-6 my-6 border border-primary-500/20">
        <ul className="space-y-3 text-dark-200">
          <li className="flex items-start gap-3">
            <span className="text-primary-400 font-bold">1.</span>
            <span>DFT matrix <InlineMath>F_n</InlineMath> uses roots of unity: <InlineMath>{`(F_n)_{jk} = \\omega^{jk}`}</InlineMath>.</span>
          </li>
          <li className="flex items-start gap-3">
            <span className="text-primary-400 font-bold">2.</span>
            <span>FFT computes DFT in <InlineMath>O(n \log n)</InlineMath> instead of <InlineMath>O(n^2)</InlineMath>.</span>
          </li>
          <li className="flex items-start gap-3">
            <span className="text-primary-400 font-bold">3.</span>
            <span>Key: recursive factorization of <InlineMath>F_n</InlineMath> using <InlineMath>{`F_{n/2}`}</InlineMath>.</span>
          </li>
          <li className="flex items-start gap-3">
            <span className="text-primary-400 font-bold">4.</span>
            <span>Convolution becomes pointwise multiplication in Fourier domain.</span>
          </li>
          <li className="flex items-start gap-3">
            <span className="text-primary-400 font-bold">5.</span>
            <span>Applications: signal processing, polynomial multiplication, compression.</span>
          </li>
        </ul>
      </div>
    </LessonLayout>
  );
}
