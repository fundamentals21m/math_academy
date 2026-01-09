import { LessonLayout } from '@/components/layout/LessonLayout';
import { Callout } from '@/components/common/Callout';
import { MathBlock, InlineMath } from '@/components/common/MathBlock';

export default function Section77() {
  return (
    <LessonLayout sectionId={77}>
      <h2>Noetherian Rings and Affine Algebraic Sets</h2>
      <p>
        <strong>Noetherian rings</strong> satisfy the ascending chain condition on ideals,
        making them tractable for algebraic geometry. The study of solution sets of polynomial
        systems—<strong>affine algebraic sets</strong>—relies fundamentally on the Noetherian
        property of polynomial rings.
      </p>

      <Callout type="info">
        <strong>The Bridge:</strong> Commutative algebra (Noetherian rings, ideals) and
        algebraic geometry (varieties, algebraic sets) are two sides of the same coin.
        This section builds the algebraic foundations.
      </Callout>

      <h3>Noetherian Rings</h3>

      <div className="bg-dark-800/50 rounded-xl p-6 border border-dark-700 my-6">
        <h4 className="text-primary-400 mb-4">Definition: Noetherian Ring</h4>
        <p>
          A ring <InlineMath>R</InlineMath> is <strong>Noetherian</strong> if it satisfies
          any of the following equivalent conditions:
        </p>
        <ol className="list-decimal list-inside space-y-2 mt-3 text-dark-300">
          <li><strong>ACC:</strong> Every ascending chain of ideals <InlineMath>I_1 \subseteq I_2 \subseteq \cdots</InlineMath> stabilizes</li>
          <li><strong>Finite generation:</strong> Every ideal of <InlineMath>R</InlineMath> is finitely generated</li>
          <li><strong>Maximum condition:</strong> Every nonempty set of ideals has a maximal element</li>
        </ol>
      </div>

      <div className="bg-dark-800 p-4 rounded-lg my-4 border-l-4 border-amber-500">
        <p className="font-semibold text-amber-400">Examples</p>
        <ul className="list-disc list-inside space-y-2 mt-2 text-dark-300">
          <li>All fields (only ideals are <InlineMath>(0)</InlineMath> and <InlineMath>(1)</InlineMath>)</li>
          <li><InlineMath>\mathbb{"{Z}"}</InlineMath> (every ideal is <InlineMath>(n)</InlineMath>)</li>
          <li>All PIDs</li>
          <li><InlineMath>k[x_1, \ldots, x_n]</InlineMath> for any field <InlineMath>k</InlineMath> (Hilbert basis theorem)</li>
        </ul>
        <p className="mt-3 font-semibold text-red-400">Non-example:</p>
        <p className="text-dark-300">
          <InlineMath>k[x_1, x_2, x_3, \ldots]</InlineMath> (infinitely many variables) — the
          ideal <InlineMath>(x_1, x_2, \ldots)</InlineMath> is not finitely generated.
        </p>
      </div>

      <h3>Hilbert Basis Theorem</h3>

      <div className="bg-dark-800/50 rounded-xl p-6 border border-dark-700 my-6">
        <h4 className="text-primary-400 mb-4">Theorem (Hilbert Basis Theorem)</h4>
        <p>
          If <InlineMath>R</InlineMath> is Noetherian, then so is <InlineMath>R[x]</InlineMath>.
        </p>
        <p className="mt-3">
          <strong>Corollary:</strong> If <InlineMath>k</InlineMath> is a field,
          then <InlineMath>k[x_1, \ldots, x_n]</InlineMath> is Noetherian.
        </p>
      </div>

      <p>
        This is fundamental: every ideal in a polynomial ring is finitely generated.
        Thus every system of polynomial equations is equivalent to a finite system.
      </p>

      <h3>Affine Algebraic Sets</h3>

      <div className="bg-dark-800/50 rounded-xl p-6 border border-dark-700 my-6">
        <h4 className="text-primary-400 mb-4">Definition</h4>
        <p>
          Let <InlineMath>k</InlineMath> be a field and <InlineMath>S \subseteq k[x_1, \ldots, x_n]</InlineMath>
          a set of polynomials. The <strong>affine algebraic set</strong> (or <strong>variety</strong>)
          defined by <InlineMath>S</InlineMath> is:
        </p>
        <MathBlock>{`V(S) = \\{(a_1, \\ldots, a_n) \\in k^n \\mid f(a_1, \\ldots, a_n) = 0 \\text{ for all } f \\in S\\}`}</MathBlock>
      </div>

      <div className="bg-dark-800 p-4 rounded-lg my-4 border-l-4 border-blue-500">
        <p className="font-semibold text-blue-400">Examples in <InlineMath>\mathbb{"{R}"}^2</InlineMath></p>
        <ul className="list-disc list-inside space-y-2 mt-2 text-dark-300">
          <li><InlineMath>V(x^2 + y^2 - 1)</InlineMath> = unit circle</li>
          <li><InlineMath>V(xy)</InlineMath> = union of x-axis and y-axis</li>
          <li><InlineMath>V(x^2 - y)</InlineMath> = parabola</li>
          <li><InlineMath>V(x - 1, y - 2)</InlineMath> = single point <InlineMath>(1, 2)</InlineMath></li>
        </ul>
      </div>

      <h3>Properties of V</h3>

      <div className="bg-dark-800/50 rounded-xl p-6 border border-dark-700 my-6">
        <h4 className="text-primary-400 mb-4">Theorem</h4>
        <ol className="list-decimal list-inside space-y-2 text-dark-300">
          <li><InlineMath>{`V(\\{0\\}) = k^n`}</InlineMath> and <InlineMath>{`V(\\{1\\}) = \\emptyset`}</InlineMath></li>
          <li><InlineMath>S \subseteq T \Rightarrow V(T) \subseteq V(S)</InlineMath></li>
          <li><InlineMath>V(S) = V((S))</InlineMath> where <InlineMath>(S)</InlineMath> is the ideal generated by <InlineMath>S</InlineMath></li>
          <li><InlineMath>V(I \cap J) = V(I) \cup V(J)</InlineMath></li>
          <li><InlineMath>V(I + J) = V(I) \cap V(J)</InlineMath></li>
          <li><InlineMath>V(\sum_\alpha I_\alpha) = \bigcap_\alpha V(I_\alpha)</InlineMath></li>
        </ol>
      </div>

      <p>
        Properties (4), (5), (6) show that algebraic sets form the closed sets of a topology:
      </p>

      <div className="bg-dark-800/50 rounded-xl p-6 border border-dark-700 my-6">
        <h4 className="text-primary-400 mb-4">Definition: Zariski Topology</h4>
        <p>
          The <strong>Zariski topology</strong> on <InlineMath>k^n</InlineMath> has closed sets
          exactly the affine algebraic sets <InlineMath>V(I)</InlineMath>.
        </p>
      </div>

      <Callout type="warning">
        <strong>Note:</strong> The Zariski topology is NOT Hausdorff (except for finite sets).
        Any two nonempty open sets intersect. This is very different from the usual topology
        on <InlineMath>\mathbb{"{R}"}^n</InlineMath>.
      </Callout>

      <h3>The Ideal of an Algebraic Set</h3>

      <div className="bg-dark-800/50 rounded-xl p-6 border border-dark-700 my-6">
        <h4 className="text-primary-400 mb-4">Definition</h4>
        <p>
          For <InlineMath>X \subseteq k^n</InlineMath>, the <strong>ideal of X</strong> is:
        </p>
        <MathBlock>{`I(X) = \\{f \\in k[x_1, \\ldots, x_n] \\mid f(a) = 0 \\text{ for all } a \\in X\\}`}</MathBlock>
      </div>

      <div className="bg-dark-800/50 rounded-xl p-6 border border-dark-700 my-6">
        <h4 className="text-primary-400 mb-4">Properties</h4>
        <ol className="list-decimal list-inside space-y-2 text-dark-300">
          <li><InlineMath>I(X)</InlineMath> is always an ideal</li>
          <li><InlineMath>X \subseteq Y \Rightarrow I(Y) \subseteq I(X)</InlineMath></li>
          <li><InlineMath>I(V(J)) \supseteq J</InlineMath> for any ideal <InlineMath>J</InlineMath></li>
          <li><InlineMath>V(I(X)) \supseteq X</InlineMath> for any set <InlineMath>X</InlineMath></li>
          <li><InlineMath>V(I(V(J))) = V(J)</InlineMath></li>
          <li><InlineMath>I(V(I(X))) = I(X)</InlineMath></li>
        </ol>
      </div>

      <h3>The Coordinate Ring</h3>

      <div className="bg-dark-800/50 rounded-xl p-6 border border-dark-700 my-6">
        <h4 className="text-primary-400 mb-4">Definition</h4>
        <p>
          The <strong>coordinate ring</strong> (or <strong>affine algebra</strong>) of an
          algebraic set <InlineMath>X = V(I)</InlineMath> is:
        </p>
        <MathBlock>{`k[X] = k[x_1, \\ldots, x_n]/I(X)`}</MathBlock>
        <p className="mt-3">
          Elements of <InlineMath>k[X]</InlineMath> are polynomial functions on <InlineMath>X</InlineMath>.
        </p>
      </div>

      <div className="bg-dark-800 p-4 rounded-lg my-4 border-l-4 border-emerald-500">
        <p className="font-semibold text-emerald-400">Example: The Circle</p>
        <p className="mt-2">
          For the circle <InlineMath>X = V(x^2 + y^2 - 1) \subset \mathbb{"{R}"}^2</InlineMath>:
        </p>
        <MathBlock>{`\\mathbb{R}[X] = \\mathbb{R}[x, y]/(x^2 + y^2 - 1)`}</MathBlock>
        <p className="mt-2">
          In this ring, <InlineMath>x^2 + y^2 = 1</InlineMath>, so we can reduce any polynomial
          to one of degree at most 1 in <InlineMath>x^2, y^2</InlineMath>.
        </p>
      </div>

      <Callout type="success">
        <strong>Summary:</strong> Noetherian rings satisfy the ascending chain condition,
        ensuring all ideals are finitely generated. The Hilbert Basis Theorem guarantees
        polynomial rings over fields are Noetherian. Affine algebraic sets are solution
        sets of polynomial systems; they form the closed sets of the Zariski topology.
        The coordinate ring captures polynomial functions on a variety. This algebra-geometry
        dictionary is deepened by the Nullstellensatz.
      </Callout>
    </LessonLayout>
  );
}
