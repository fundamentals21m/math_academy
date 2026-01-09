import { LessonLayout } from '@/components/layout/LessonLayout';
import { Callout } from '@/components/common/Callout';
import { MathBlock, InlineMath } from '@/components/common/MathBlock';

export default function Section78() {
  return (
    <LessonLayout sectionId={78}>
      <h2>Radicals and Affine Varieties</h2>
      <p>
        The <strong>radical</strong> of an ideal captures the "geometric essence" of an
        algebraic set. Understanding radicals leads to the correspondence between
        <strong> affine varieties</strong> (irreducible algebraic sets) and <strong>prime ideals</strong>,
        a cornerstone of algebraic geometry.
      </p>

      <Callout type="info">
        <strong>Key Insight:</strong> Different ideals can define the same algebraic set
        (e.g., <InlineMath>(x^2)</InlineMath> and <InlineMath>(x)</InlineMath> both
        define <InlineMath>{`\\{0\\}`}</InlineMath> in <InlineMath>{`\\mathbb{A}^1`}</InlineMath>).
        The radical identifies when this happens.
      </Callout>

      <h3>The Radical of an Ideal</h3>

      <div className="bg-dark-800/50 rounded-xl p-6 border border-dark-700 my-6">
        <h4 className="text-primary-400 mb-4">Definition</h4>
        <p>
          The <strong>radical</strong> of an ideal <InlineMath>I</InlineMath> in a
          ring <InlineMath>R</InlineMath> is:
        </p>
        <MathBlock>{`\\sqrt{I} = \\{r \\in R \\mid r^n \\in I \\text{ for some } n \\geq 1\\}`}</MathBlock>
        <p className="mt-3">
          An ideal is <strong>radical</strong> if <InlineMath>I = \sqrt{"{I}"}</InlineMath>.
        </p>
      </div>

      <div className="bg-dark-800 p-4 rounded-lg my-4 border-l-4 border-amber-500">
        <p className="font-semibold text-amber-400">Examples</p>
        <ul className="list-disc list-inside space-y-2 mt-2 text-dark-300">
          <li><InlineMath>\sqrt{"{(x^2)}"} = (x)</InlineMath> in <InlineMath>k[x]</InlineMath></li>
          <li><InlineMath>\sqrt{"{(4)}"} = (2)</InlineMath> in <InlineMath>\mathbb{"{Z}"}</InlineMath></li>
          <li><InlineMath>\sqrt{"{(x^2, xy)}"} = (x)</InlineMath> in <InlineMath>k[x,y]</InlineMath></li>
          <li>Prime ideals are radical</li>
          <li><InlineMath>\sqrt{"{(0)}"}</InlineMath> = nilradical (all nilpotent elements)</li>
        </ul>
      </div>

      <h3>Properties of Radicals</h3>

      <div className="bg-dark-800/50 rounded-xl p-6 border border-dark-700 my-6">
        <h4 className="text-primary-400 mb-4">Theorem</h4>
        <ol className="list-decimal list-inside space-y-2 text-dark-300">
          <li><InlineMath>\sqrt{"{I}"}</InlineMath> is an ideal containing <InlineMath>I</InlineMath></li>
          <li><InlineMath>\sqrt{"{\\sqrt{I}}"} = \sqrt{"{I}"}</InlineMath></li>
          <li><InlineMath>\sqrt{"{I \\cap J}"} = \sqrt{"{I}"} \cap \sqrt{"{J}"}</InlineMath></li>
          <li><InlineMath>\sqrt{"{IJ}"} = \sqrt{"{I \\cap J}"} = \sqrt{"{I}"} \cap \sqrt{"{J}"}</InlineMath></li>
          <li><InlineMath>\sqrt{"{I}"} = R</InlineMath> iff <InlineMath>I = R</InlineMath></li>
        </ol>
      </div>

      <div className="bg-dark-800/50 rounded-xl p-6 border border-dark-700 my-6">
        <h4 className="text-primary-400 mb-4">Theorem: Radical as Intersection of Primes</h4>
        <MathBlock>{`\\sqrt{I} = \\bigcap_{\\substack{P \\supseteq I \\\\ P \\text{ prime}}} P`}</MathBlock>
        <p className="mt-3">
          The radical is the intersection of all prime ideals containing <InlineMath>I</InlineMath>.
        </p>
      </div>

      <h3>Radical Ideals and Algebraic Sets</h3>

      <div className="bg-dark-800/50 rounded-xl p-6 border border-dark-700 my-6">
        <h4 className="text-primary-400 mb-4">Theorem</h4>
        <p>
          For any subset <InlineMath>X \subseteq k^n</InlineMath>, the ideal <InlineMath>I(X)</InlineMath> is radical.
        </p>
      </div>

      <p>
        <strong>Proof:</strong> If <InlineMath>f^n \in I(X)</InlineMath>, then for
        all <InlineMath>a \in X</InlineMath>, <InlineMath>f(a)^n = 0</InlineMath>.
        Since <InlineMath>k</InlineMath> has no nilpotent elements, <InlineMath>f(a) = 0</InlineMath>,
        so <InlineMath>f \in I(X)</InlineMath>.
      </p>

      <div className="bg-dark-800/50 rounded-xl p-6 border border-dark-700 my-6">
        <h4 className="text-primary-400 mb-4">Theorem</h4>
        <p>
          <InlineMath>V(I) = V(\sqrt{"{I}"})</InlineMath> for any ideal <InlineMath>I</InlineMath>.
        </p>
      </div>

      <h3>Irreducibility and Affine Varieties</h3>

      <div className="bg-dark-800/50 rounded-xl p-6 border border-dark-700 my-6">
        <h4 className="text-primary-400 mb-4">Definition: Irreducible</h4>
        <p>
          An algebraic set <InlineMath>X</InlineMath> is <strong>irreducible</strong> if
          it cannot be written as <InlineMath>X = X_1 \cup X_2</InlineMath> with
          <InlineMath>X_1, X_2</InlineMath> proper closed subsets.
        </p>
        <p className="mt-3">
          An <strong>affine variety</strong> is an irreducible affine algebraic set.
        </p>
      </div>

      <div className="bg-dark-800 p-4 rounded-lg my-4 border-l-4 border-blue-500">
        <p className="font-semibold text-blue-400">Examples</p>
        <ul className="list-disc list-inside space-y-2 mt-2 text-dark-300">
          <li><InlineMath>V(y - x^2)</InlineMath> (parabola) is irreducible</li>
          <li><InlineMath>V(xy)</InlineMath> = x-axis <InlineMath>\cup</InlineMath> y-axis is reducible</li>
          <li><InlineMath>V(x^2 + y^2 - 1)</InlineMath> over <InlineMath>\mathbb{"{R}"}</InlineMath> is irreducible</li>
          <li><InlineMath>V(x^2 - y^2)</InlineMath> = two lines is reducible</li>
        </ul>
      </div>

      <h3>Irreducibility and Prime Ideals</h3>

      <div className="bg-dark-800/50 rounded-xl p-6 border border-dark-700 my-6">
        <h4 className="text-primary-400 mb-4">Theorem: Key Correspondence</h4>
        <p>
          An algebraic set <InlineMath>X</InlineMath> is irreducible if and only
          if <InlineMath>I(X)</InlineMath> is a prime ideal.
        </p>
      </div>

      <p>
        <strong>Proof sketch:</strong> <InlineMath>X</InlineMath> reducible
        means <InlineMath>X = V(I_1) \cup V(I_2) = V(I_1 \cap I_2)</InlineMath>
        with <InlineMath>V(I_j) \subsetneq X</InlineMath>.
        This corresponds to <InlineMath>I(X)</InlineMath> being expressible
        as <InlineMath>I_1 \cap I_2</InlineMath> with <InlineMath>I(X) \subsetneq I_j</InlineMath>,
        which happens iff <InlineMath>I(X)</InlineMath> is not prime.
      </p>

      <h3>Decomposition into Irreducible Components</h3>

      <div className="bg-dark-800/50 rounded-xl p-6 border border-dark-700 my-6">
        <h4 className="text-primary-400 mb-4">Theorem</h4>
        <p>
          Every algebraic set <InlineMath>X</InlineMath> can be uniquely written as:
        </p>
        <MathBlock>{`X = X_1 \\cup X_2 \\cup \\cdots \\cup X_r`}</MathBlock>
        <p className="mt-3">
          where each <InlineMath>X_i</InlineMath> is irreducible
          and <InlineMath>X_i \not\subseteq X_j</InlineMath> for <InlineMath>i \neq j</InlineMath>.
        </p>
        <p className="mt-3">
          The <InlineMath>X_i</InlineMath> are called the <strong>irreducible components</strong> of <InlineMath>X</InlineMath>.
        </p>
      </div>

      <div className="bg-dark-800 p-4 rounded-lg my-4 border-l-4 border-amber-500">
        <p className="font-semibold text-amber-400">Example</p>
        <p className="mt-2">
          <InlineMath>V(xy, xz) \subset k^3</InlineMath> decomposes as:
        </p>
        <p className="mt-2">
          <InlineMath>V(xy, xz) = V(x) \cup V(y, z)</InlineMath>
        </p>
        <p className="mt-2 text-dark-300">
          The yz-plane and the x-axis are the irreducible components.
        </p>
      </div>

      <h3>Primary Decomposition</h3>

      <div className="bg-dark-800/50 rounded-xl p-6 border border-dark-700 my-6">
        <h4 className="text-primary-400 mb-4">Definition: Primary Ideal</h4>
        <p>
          An ideal <InlineMath>Q</InlineMath> is <strong>primary</strong>
          if <InlineMath>ab \in Q</InlineMath> implies <InlineMath>a \in Q</InlineMath>
          or <InlineMath>b^n \in Q</InlineMath> for some <InlineMath>n</InlineMath>.
        </p>
        <p className="mt-3">
          Equivalently: <InlineMath>R/Q</InlineMath> has the property that every zero-divisor is nilpotent.
        </p>
      </div>

      <div className="bg-dark-800/50 rounded-xl p-6 border border-dark-700 my-6">
        <h4 className="text-primary-400 mb-4">Theorem (Lasker-Noether)</h4>
        <p>
          In a Noetherian ring, every ideal has a primary decomposition:
        </p>
        <MathBlock>{`I = Q_1 \\cap Q_2 \\cap \\cdots \\cap Q_r`}</MathBlock>
        <p className="mt-3">
          where each <InlineMath>Q_i</InlineMath> is primary.
        </p>
      </div>

      <Callout type="success">
        <strong>Summary:</strong> The radical <InlineMath>\sqrt{"{I}"}</InlineMath>
        captures the "geometric content" of an ideal: <InlineMath>V(I) = V(\sqrt{"{I}"})</InlineMath>.
        Radical ideals correspond bijectively to algebraic sets. The correspondence deepens:
        irreducible varieties correspond to prime ideals. Every algebraic set decomposes
        uniquely into irreducible components, reflecting primary decomposition of ideals.
        This algebra-geometry dictionary is perfected by the Nullstellensatz.
      </Callout>
    </LessonLayout>
  );
}
