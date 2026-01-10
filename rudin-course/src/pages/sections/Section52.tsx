import { LessonLayout } from '../../components/layout/LessonLayout';
import { Definition, Theorem, Example } from '../../components/common/ContentBlocks';
import { Callout } from '../../components/common/Callout';
import { InlineMath, MathBlock } from '../../components/common/MathBlock';

export default function Section52() {
  return (
    <LessonLayout sectionId={52}>
      <h2 className="text-2xl font-semibold mb-4">The Stone-Weierstrass Theorem</h2>

      <p className="mb-4">
        The Stone-Weierstrass theorem is one of the most important and beautiful results
        in analysis. It tells us that continuous functions on compact sets can be uniformly
        approximated by functions from certain special families, most notably polynomials.
      </p>

      <Theorem
        title="7.26 - Weierstrass Approximation Theorem"
        proof={
          <p>
            The proof uses convolution with the Bernstein polynomials or similar approximating
            sequences. See the full proof in the text. The key idea is to construct
            polynomials <InlineMath>{'P_n(x) = \\sum_{k=0}^n f(k/n) \\binom{n}{k} x^k (1-x)^{n-k}'}</InlineMath> (Bernstein
            polynomials) and show <InlineMath>{'P_n \\to f'}</InlineMath> uniformly.
          </p>
        }
      >
        <p>
          If <InlineMath>{'f'}</InlineMath> is a continuous complex-valued function on <InlineMath>{'[a, b]'}</InlineMath>,
          there exists a sequence of polynomials <InlineMath>{'P_n'}</InlineMath> such that
        </p>
        <MathBlock>{'\\lim_{n \\to \\infty} P_n(x) = f(x)'}</MathBlock>
        <p>
          uniformly on <InlineMath>{'[a, b]'}</InlineMath>.
        </p>
      </Theorem>

      <Callout type="info" title="Interpretation">
        <p>
          Every continuous function on a closed bounded interval can be uniformly approximated
          by polynomials. This is remarkable: polynomials are algebraically simple objects,
          yet they can approximate arbitrarily closely any continuous function!
        </p>
      </Callout>

      <p className="mb-4">
        Stone generalized Weierstrass's theorem to a much broader setting.
      </p>

      <Definition title="7.27 - Algebra of Functions">
        <p className="mb-3">
          A family <InlineMath>{'\\mathscr{A}'}</InlineMath> of complex-valued functions defined
          on a set <InlineMath>{'E'}</InlineMath> is said to be an <em>algebra</em> if:
        </p>
        <p className="mb-2">
          (a) <InlineMath>{'f + g \\in \\mathscr{A}'}</InlineMath> whenever <InlineMath>{'f, g \\in \\mathscr{A}'}</InlineMath>
        </p>
        <p className="mb-2">
          (b) <InlineMath>{'fg \\in \\mathscr{A}'}</InlineMath> whenever <InlineMath>{'f, g \\in \\mathscr{A}'}</InlineMath>
        </p>
        <p>
          (c) <InlineMath>{'cf \\in \\mathscr{A}'}</InlineMath> for all complex <InlineMath>{'c'}</InlineMath> and <InlineMath>{'f \\in \\mathscr{A}'}</InlineMath>
        </p>
      </Definition>

      <Definition title="7.28 - Separating Points and Vanishing">
        <p className="mb-3">
          An algebra <InlineMath>{'\\mathscr{A}'}</InlineMath> of functions on <InlineMath>{'E'}</InlineMath> is said
          to <em>separate points</em> on <InlineMath>{'E'}</InlineMath> if for every pair of
          distinct points <InlineMath>{'x_1, x_2 \\in E'}</InlineMath> there
          exists <InlineMath>{'f \\in \\mathscr{A}'}</InlineMath> such
          that <InlineMath>{'f(x_1) \\neq f(x_2)'}</InlineMath>.
        </p>
        <p>
          We say <InlineMath>{'\\mathscr{A}'}</InlineMath> <em>vanishes at no point</em> of <InlineMath>{'E'}</InlineMath> if
          for every <InlineMath>{'x \\in E'}</InlineMath> there exists <InlineMath>{'f \\in \\mathscr{A}'}</InlineMath> such
          that <InlineMath>{'f(x) \\neq 0'}</InlineMath>.
        </p>
      </Definition>

      <Example title="Polynomials Separate Points">
        <p className="mb-3">
          The algebra <InlineMath>{'\\mathscr{P}'}</InlineMath> of all polynomials on <InlineMath>{'[a, b]'}</InlineMath>:
        </p>
        <p className="mb-3">
          <strong>Separates points:</strong> If <InlineMath>{'x_1 \\neq x_2'}</InlineMath>,
          then <InlineMath>{'f(x) = x'}</InlineMath> satisfies <InlineMath>{'f(x_1) \\neq f(x_2)'}</InlineMath>.
        </p>
        <p>
          <strong>Vanishes at no point:</strong> The constant polynomial <InlineMath>{'f(x) = 1'}</InlineMath> is
          nonzero everywhere.
        </p>
      </Example>

      <Definition title="7.29 - Closure of an Algebra">
        <p>
          The <em>closure</em> <InlineMath>{'\\overline{\\mathscr{A}}'}</InlineMath> of an
          algebra <InlineMath>{'\\mathscr{A}'}</InlineMath> consists of all functions that are uniform
          limits of sequences from <InlineMath>{'\\mathscr{A}'}</InlineMath>.
        </p>
      </Definition>

      <Theorem
        title="7.32 - Stone-Weierstrass Theorem (Real Version)"
        proof={
          <>
            <p className="mb-3">
              The proof proceeds in several steps:
            </p>
            <p className="mb-3">
              <strong>Step 1:</strong> Show that <InlineMath>{'\\overline{\\mathscr{A}}'}</InlineMath> is an algebra.
            </p>
            <p className="mb-3">
              <strong>Step 2:</strong> Show that if <InlineMath>{'f \\in \\overline{\\mathscr{A}}'}</InlineMath>,
              then <InlineMath>{'|f| \\in \\overline{\\mathscr{A}}'}</InlineMath>. (Use Weierstrass to
              approximate <InlineMath>{'|t|'}</InlineMath> by polynomials.)
            </p>
            <p className="mb-3">
              <strong>Step 3:</strong> Hence <InlineMath>{'\\max(f, g)'}</InlineMath> and <InlineMath>{'\\min(f, g)'}</InlineMath> are
              in <InlineMath>{'\\overline{\\mathscr{A}}'}</InlineMath> (use the identities involving <InlineMath>{'|f - g|'}</InlineMath>).
            </p>
            <p className="mb-3">
              <strong>Step 4:</strong> For any two points and any two values, find <InlineMath>{'h \\in \\mathscr{A}'}</InlineMath> taking
              those values (using the hypotheses).
            </p>
            <p className="mb-3">
              <strong>Step 5:</strong> Given <InlineMath>{'f \\in \\mathscr{C}(K)'}</InlineMath> and <InlineMath>{'\\varepsilon > 0'}</InlineMath>,
              construct <InlineMath>{'g \\in \\overline{\\mathscr{A}}'}</InlineMath> with <InlineMath>{'\\|f - g\\| < \\varepsilon'}</InlineMath> using
              max/min operations.
            </p>
          </>
        }
      >
        <p className="mb-3">
          Let <InlineMath>{'\\mathscr{A}'}</InlineMath> be an algebra of real-valued continuous functions
          on a compact set <InlineMath>{'K'}</InlineMath>. If <InlineMath>{'\\mathscr{A}'}</InlineMath> separates
          points on <InlineMath>{'K'}</InlineMath> and vanishes at no point of <InlineMath>{'K'}</InlineMath>, then
          the closure <InlineMath>{'\\overline{\\mathscr{A}}'}</InlineMath> consists of all real-valued
          continuous functions on <InlineMath>{'K'}</InlineMath>.
        </p>
        <p>
          In symbols: <InlineMath>{'\\overline{\\mathscr{A}} = \\mathscr{C}(K, \\mathbb{R})'}</InlineMath>.
        </p>
      </Theorem>

      <Callout type="warning" title="The Complex Case">
        <p className="mb-3">
          The Stone-Weierstrass theorem does <em>not</em> hold for complex-valued functions
          without an additional hypothesis.
        </p>
        <p>
          For example, the algebra of analytic functions on the unit disk is closed but does
          not contain all continuous functions. We need the algebra to be <em>self-adjoint</em>:
          if <InlineMath>{'f \\in \\mathscr{A}'}</InlineMath>, then <InlineMath>{'\\bar{f} \\in \\mathscr{A}'}</InlineMath>.
        </p>
      </Callout>

      <Theorem
        title="7.33 - Stone-Weierstrass Theorem (Complex Version)"
        proof={
          <p>
            The self-adjoint condition allows us to decompose <InlineMath>{'f = \\frac{f + \\bar{f}}{2} + i \\cdot \\frac{f - \\bar{f}}{2i}'}</InlineMath> into
            real and imaginary parts, both of which are in <InlineMath>{'\\overline{\\mathscr{A}}'}</InlineMath>.
            Apply the real version to each.
          </p>
        }
      >
        <p>
          Let <InlineMath>{'\\mathscr{A}'}</InlineMath> be a self-adjoint algebra of complex-valued continuous
          functions on a compact set <InlineMath>{'K'}</InlineMath>. If <InlineMath>{'\\mathscr{A}'}</InlineMath> separates
          points and vanishes at no point, then <InlineMath>{'\\overline{\\mathscr{A}} = \\mathscr{C}(K, \\mathbb{C})'}</InlineMath>.
        </p>
      </Theorem>

      <Example title="7.34 - Trigonometric Polynomial Approximation">
        <p className="mb-3">
          Consider continuous functions on the unit circle <InlineMath>{'|z| = 1'}</InlineMath> (equivalently,
          continuous <InlineMath>{'2\\pi'}</InlineMath>-periodic functions on <InlineMath>{'\\mathbb{R}'}</InlineMath>).
        </p>
        <p className="mb-3">
          The trigonometric polynomials <InlineMath>{'\\sum_{n=-N}^{N} c_n e^{inx}'}</InlineMath> form
          a self-adjoint algebra that separates points and vanishes nowhere.
        </p>
        <p>
          By Stone-Weierstrass, every continuous <InlineMath>{'2\\pi'}</InlineMath>-periodic function can
          be uniformly approximated by trigonometric polynomials.
        </p>
      </Example>

      <h3 className="text-xl font-semibold mt-8 mb-4">Key Takeaways</h3>
      <ul className="list-disc list-inside space-y-2 text-dark-300">
        <li>Weierstrass: polynomials uniformly approximate any continuous function on <InlineMath>{'[a, b]'}</InlineMath></li>
        <li>Stone generalized this to arbitrary compact spaces and algebras</li>
        <li>Key conditions: separate points, vanish nowhere, (self-adjoint for complex)</li>
        <li>The closure of such an algebra is all of <InlineMath>{'\\mathscr{C}(K)'}</InlineMath></li>
        <li>Applications: trigonometric approximation, polynomial approximation on general compact sets</li>
      </ul>
    </LessonLayout>
  );
}
