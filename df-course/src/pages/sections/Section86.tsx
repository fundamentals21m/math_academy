import { LessonLayout } from '@/components/layout/LessonLayout';
import { Callout } from '@/components/common/Callout';
import { MathBlock, InlineMath } from '@/components/common/MathBlock';

export default function Section86() {
  return (
    <LessonLayout sectionId={86}>
      <h2>Cohomology of Groups</h2>
      <p>
        <strong>Group cohomology</strong> extends homological algebra to groups, treating
        groups as algebraic objects with associated cochain complexes. It connects group
        theory to topology, number theory, and algebraic geometry, providing a powerful
        framework for studying group extensions and Galois cohomology.
      </p>

      <Callout type="info">
        <strong>Multiple Perspectives:</strong> Group cohomology can be defined via derived
        functors, explicit cochains, or topological spaces. Each viewpoint illuminates
        different aspects of this rich theory.
      </Callout>

      <h3>G-Modules</h3>

      <div className="bg-dark-800/50 rounded-xl p-6 border border-dark-700 my-6">
        <h4 className="text-primary-400 mb-4">Definition</h4>
        <p>
          A <strong>G-module</strong> is an abelian group <InlineMath>A</InlineMath> with a
          left action of <InlineMath>G</InlineMath>: a group homomorphism <InlineMath>G \to \text{"{Aut}"}(A)</InlineMath>.
        </p>
        <p className="mt-3">
          Equivalently, <InlineMath>A</InlineMath> is a left module over the group
          ring <InlineMath>\mathbb{"{Z}"}[G]</InlineMath>.
        </p>
      </div>

      <div className="bg-dark-800 p-4 rounded-lg my-4 border-l-4 border-amber-500">
        <p className="font-semibold text-amber-400">Examples</p>
        <ul className="list-disc list-inside space-y-2 mt-2 text-dark-300">
          <li><strong>Trivial module:</strong> <InlineMath>G</InlineMath> acts trivially on <InlineMath>A</InlineMath>
            (<InlineMath>g \cdot a = a</InlineMath>)</li>
          <li><strong>Regular representation:</strong> <InlineMath>G</InlineMath> acts
            on <InlineMath>\mathbb{"{Z}"}[G]</InlineMath> by left multiplication</li>
          <li><strong>Galois modules:</strong> <InlineMath>\text{"{Gal}"}(L/K)</InlineMath> acts on <InlineMath>L^*</InlineMath></li>
        </ul>
      </div>

      <h3>Definition via Derived Functors</h3>

      <div className="bg-dark-800/50 rounded-xl p-6 border border-dark-700 my-6">
        <h4 className="text-primary-400 mb-4">Definition</h4>
        <p>
          For a <InlineMath>G</InlineMath>-module <InlineMath>A</InlineMath>, the
          <InlineMath>n</InlineMath>-th <strong>cohomology group</strong> is:
        </p>
        <MathBlock>{`H^n(G, A) = \\text{Ext}^n_{\\mathbb{Z}[G]}(\\mathbb{Z}, A)`}</MathBlock>
        <p className="mt-3">
          where <InlineMath>\mathbb{"{Z}"}</InlineMath> has the trivial <InlineMath>G</InlineMath>-action.
        </p>
      </div>

      <h3>The Standard Resolution</h3>

      <div className="bg-dark-800/50 rounded-xl p-6 border border-dark-700 my-6">
        <h4 className="text-primary-400 mb-4">Bar Resolution</h4>
        <p>
          The <strong>standard (bar) resolution</strong> of <InlineMath>\mathbb{"{Z}"}</InlineMath>
          as a <InlineMath>\mathbb{"{Z}"}[G]</InlineMath>-module is:
        </p>
        <MathBlock>{`\\cdots \\to B_2 \\to B_1 \\to B_0 \\to \\mathbb{Z} \\to 0`}</MathBlock>
        <p className="mt-3">
          where <InlineMath>B_n</InlineMath> is the free <InlineMath>\mathbb{"{Z}"}[G]</InlineMath>-module
          on symbols <InlineMath>[g_1 | g_2 | \cdots | g_n]</InlineMath>.
        </p>
      </div>

      <h3>Explicit Cochains</h3>

      <div className="bg-dark-800/50 rounded-xl p-6 border border-dark-700 my-6">
        <h4 className="text-primary-400 mb-4">Cochain Complex</h4>
        <p>
          An <InlineMath>n</InlineMath>-<strong>cochain</strong> is a function <InlineMath>f: G^n \to A</InlineMath>.
          The <strong>coboundary</strong> <InlineMath>d: C^n(G, A) \to C^{"{n+1}"}(G, A)</InlineMath> is:
        </p>
        <MathBlock>{`(df)(g_1, \\ldots, g_{n+1}) = g_1 \\cdot f(g_2, \\ldots, g_{n+1})`}</MathBlock>
        <MathBlock>{`+ \\sum_{i=1}^{n} (-1)^i f(g_1, \\ldots, g_i g_{i+1}, \\ldots, g_{n+1}) + (-1)^{n+1} f(g_1, \\ldots, g_n)`}</MathBlock>
        <p className="mt-3">
          Then <InlineMath>H^n(G, A) = \ker(d^n)/\text{"{im}"}(d^{"{n-1}"})</InlineMath>.
        </p>
      </div>

      <h3>Low-Degree Cohomology</h3>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 my-6">
        <div className="bg-dark-800/50 rounded-xl p-4 border border-dark-700">
          <h4 className="text-emerald-400 font-semibold mb-2"><InlineMath>H^0(G, A)</InlineMath></h4>
          <MathBlock>{`H^0(G, A) = A^G = \\{a \\in A \\mid ga = a \\,\\forall g\\}`}</MathBlock>
          <p className="text-dark-300 text-sm mt-2">
            The <InlineMath>G</InlineMath>-invariants of <InlineMath>A</InlineMath>
          </p>
        </div>
        <div className="bg-dark-800/50 rounded-xl p-4 border border-dark-700">
          <h4 className="text-blue-400 font-semibold mb-2"><InlineMath>H^1(G, A)</InlineMath></h4>
          <p className="text-dark-300 text-sm">
            Crossed homomorphisms modulo principal ones (see next section)
          </p>
        </div>
        <div className="bg-dark-800/50 rounded-xl p-4 border border-dark-700 md:col-span-2">
          <h4 className="text-purple-400 font-semibold mb-2"><InlineMath>H^2(G, A)</InlineMath></h4>
          <p className="text-dark-300 text-sm">
            Classifies group extensions of <InlineMath>G</InlineMath> by <InlineMath>A</InlineMath>
            (see section on extensions)
          </p>
        </div>
      </div>

      <h3>Long Exact Sequence</h3>

      <div className="bg-dark-800/50 rounded-xl p-6 border border-dark-700 my-6">
        <h4 className="text-primary-400 mb-4">Theorem</h4>
        <p>
          A short exact sequence of <InlineMath>G</InlineMath>-modules <InlineMath>0 \to A \to B \to C \to 0</InlineMath>
          induces a long exact sequence:
        </p>
        <MathBlock>{`0 \\to H^0(G,A) \\to H^0(G,B) \\to H^0(G,C) \\to H^1(G,A) \\to H^1(G,B) \\to \\cdots`}</MathBlock>
      </div>

      <h3>Cohomology of Cyclic Groups</h3>

      <div className="bg-dark-800 p-4 rounded-lg my-4 border-l-4 border-blue-500">
        <p className="font-semibold text-blue-400">Example: <InlineMath>G = \mathbb{"{Z}"}/n\mathbb{"{Z}"} = \langle \sigma \rangle</InlineMath></p>
        <p className="mt-2">
          For <InlineMath>A</InlineMath> with trivial <InlineMath>G</InlineMath>-action:
        </p>
        <MathBlock>{`H^k(\\mathbb{Z}/n, A) = \\begin{cases} A & k = 0 \\\\ A/nA & k \\text{ odd} \\\\ A[n] & k > 0 \\text{ even} \\end{cases}`}</MathBlock>
        <p className="mt-2">
          where <InlineMath>A[n] = \{"{a \\in A \\mid na = 0}"}\</InlineMath>.
        </p>
      </div>

      <h3>Inflation and Restriction</h3>

      <div className="bg-dark-800/50 rounded-xl p-6 border border-dark-700 my-6">
        <h4 className="text-primary-400 mb-4">Maps Between Cohomology Groups</h4>
        <p>
          For <InlineMath>H \leq G</InlineMath> and a <InlineMath>G</InlineMath>-module <InlineMath>A</InlineMath>:
        </p>
        <ul className="list-disc list-inside space-y-2 mt-3 text-dark-300">
          <li><strong>Restriction:</strong> <InlineMath>\text{"{Res}"}: H^n(G, A) \to H^n(H, A)</InlineMath></li>
          <li><strong>Inflation:</strong> <InlineMath>\text{"{Inf}"}: H^n(G/H, A^H) \to H^n(G, A)</InlineMath>
            (for <InlineMath>H \trianglelefteq G</InlineMath>)</li>
          <li><strong>Corestriction:</strong> <InlineMath>\text{"{Cor}"}: H^n(H, A) \to H^n(G, A)</InlineMath>
            (for <InlineMath>[G:H] &lt; \infty</InlineMath>)</li>
        </ul>
      </div>

      <Callout type="success">
        <strong>Summary:</strong> Group cohomology <InlineMath>H^n(G, A)</InlineMath> is
        defined as <InlineMath>\text{"{Ext}"}^n_{"{\\mathbb{Z}[G]}"}(\mathbb{"{Z}"}, A)</InlineMath>
        and computed via cochains. <InlineMath>H^0</InlineMath> gives invariants,
        <InlineMath>H^1</InlineMath> classifies certain homomorphisms, and <InlineMath>H^2</InlineMath>
        classifies group extensions. Long exact sequences, restriction, inflation, and
        corestriction provide computational tools. This framework underlies Galois
        cohomology and class field theory.
      </Callout>
    </LessonLayout>
  );
}
