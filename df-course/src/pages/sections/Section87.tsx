import { LessonLayout } from '@/components/layout/LessonLayout';
import { Callout } from '@/components/common/Callout';
import { MathBlock, InlineMath } from '@/components/common/MathBlock';

export default function Section87() {
  return (
    <LessonLayout sectionId={87}>
      <h2>Crossed Homomorphisms and H^1</h2>
      <p>
        The first cohomology group <InlineMath>H^1(G, A)</InlineMath> has a concrete description
        in terms of <strong>crossed homomorphisms</strong>. This interpretation is central to
        Galois cohomology, where <InlineMath>H^1</InlineMath> captures information about
        torsors and principal homogeneous spaces.
      </p>

      <Callout type="info">
        <strong>Key Application:</strong> Hilbert's Theorem 90 and its generalizations
        are statements about <InlineMath>H^1</InlineMath>, with far-reaching consequences
        in Galois theory and algebraic geometry.
      </Callout>

      <h3>Crossed Homomorphisms</h3>

      <div className="bg-dark-800/50 rounded-xl p-6 border border-dark-700 my-6">
        <h4 className="text-primary-400 mb-4">Definition</h4>
        <p>
          A <strong>crossed homomorphism</strong> (or <strong>1-cocycle</strong>)
          from <InlineMath>G</InlineMath> to a <InlineMath>G</InlineMath>-module <InlineMath>A</InlineMath>
          is a function <InlineMath>f: G \to A</InlineMath> satisfying:
        </p>
        <MathBlock>{`f(gh) = f(g) + g \\cdot f(h) \\quad \\text{for all } g, h \\in G`}</MathBlock>
        <p className="mt-3">
          The set of crossed homomorphisms is denoted <InlineMath>Z^1(G, A)</InlineMath>.
        </p>
      </div>

      <div className="bg-dark-800 p-4 rounded-lg my-4 border-l-4 border-amber-500">
        <p className="font-semibold text-amber-400">Note: Trivial Action</p>
        <p className="mt-2">
          If <InlineMath>G</InlineMath> acts trivially on <InlineMath>A</InlineMath>,
          then <InlineMath>f(gh) = f(g) + f(h)</InlineMath>, so crossed homomorphisms
          are just ordinary group homomorphisms.
        </p>
        <p className="mt-2">
          Thus <InlineMath>Z^1(G, A) = \text{"{Hom}"}(G, A)</InlineMath> for trivial action.
        </p>
      </div>

      <h3>Principal Crossed Homomorphisms</h3>

      <div className="bg-dark-800/50 rounded-xl p-6 border border-dark-700 my-6">
        <h4 className="text-primary-400 mb-4">Definition</h4>
        <p>
          A crossed homomorphism <InlineMath>f</InlineMath> is <strong>principal</strong>
          (or a <strong>1-coboundary</strong>) if there exists <InlineMath>a \in A</InlineMath> such that:
        </p>
        <MathBlock>{`f(g) = g \\cdot a - a \\quad \\text{for all } g \\in G`}</MathBlock>
        <p className="mt-3">
          The set of principal crossed homomorphisms is denoted <InlineMath>B^1(G, A)</InlineMath>.
        </p>
      </div>

      <div className="bg-dark-800/50 rounded-xl p-6 border border-dark-700 my-6">
        <h4 className="text-primary-400 mb-4">Theorem</h4>
        <MathBlock>{`H^1(G, A) = Z^1(G, A) / B^1(G, A)`}</MathBlock>
        <p className="mt-3">
          The first cohomology group is crossed homomorphisms modulo principal ones.
        </p>
      </div>

      <h3>Hilbert's Theorem 90</h3>

      <div className="bg-dark-800/50 rounded-xl p-6 border border-dark-700 my-6">
        <h4 className="text-primary-400 mb-4">Theorem (Hilbert's Theorem 90, Additive)</h4>
        <p>
          For a finite Galois extension <InlineMath>L/K</InlineMath> with group <InlineMath>G</InlineMath>:
        </p>
        <MathBlock>{`H^1(G, L) = 0`}</MathBlock>
        <p className="mt-3">
          where <InlineMath>L</InlineMath> is viewed as an additive <InlineMath>G</InlineMath>-module.
        </p>
      </div>

      <div className="bg-dark-800/50 rounded-xl p-6 border border-dark-700 my-6">
        <h4 className="text-primary-400 mb-4">Theorem (Hilbert's Theorem 90, Multiplicative)</h4>
        <p>
          For a finite Galois extension <InlineMath>L/K</InlineMath> with group <InlineMath>G</InlineMath>:
        </p>
        <MathBlock>{`H^1(G, L^*) = 0`}</MathBlock>
        <p className="mt-3">
          where <InlineMath>L^*</InlineMath> is the multiplicative group.
        </p>
      </div>

      <div className="bg-dark-800 p-4 rounded-lg my-4 border-l-4 border-blue-500">
        <p className="font-semibold text-blue-400">Classical Form (Cyclic Extensions)</p>
        <p className="mt-2">
          For cyclic <InlineMath>L/K</InlineMath> with <InlineMath>G = \langle \sigma \rangle</InlineMath>:
        </p>
        <p className="mt-2">
          If <InlineMath>\beta \in L^*</InlineMath> with <InlineMath>N_{"{L/K}"}(\beta) = 1</InlineMath>,
          then <InlineMath>\beta = \alpha/\sigma(\alpha)</InlineMath> for some <InlineMath>\alpha \in L^*</InlineMath>.
        </p>
      </div>

      <h3>Interpretation of H^1</h3>

      <div className="bg-dark-800/50 rounded-xl p-6 border border-dark-700 my-6">
        <h4 className="text-primary-400 mb-4">For Trivial Action</h4>
        <p>
          When <InlineMath>G</InlineMath> acts trivially on <InlineMath>A</InlineMath>:
        </p>
        <ul className="list-disc list-inside space-y-2 mt-3 text-dark-300">
          <li><InlineMath>Z^1(G, A) = \text{"{Hom}"}(G, A)</InlineMath></li>
          <li><InlineMath>B^1(G, A) = 0</InlineMath> (since <InlineMath>g \cdot a - a = 0</InlineMath>)</li>
          <li>Thus <InlineMath>H^1(G, A) = \text{"{Hom}"}(G, A)</InlineMath></li>
        </ul>
      </div>

      <div className="bg-dark-800 p-4 rounded-lg my-4 border-l-4 border-amber-500">
        <p className="font-semibold text-amber-400">Example</p>
        <p className="mt-2">
          <InlineMath>H^1(G, \mathbb{"{Z}"}/n) = \text{"{Hom}"}(G, \mathbb{"{Z}"}/n)</InlineMath>
          for trivial action.
        </p>
        <p className="mt-2">
          For <InlineMath>G = \mathbb{"{Z}"}/m</InlineMath>:
          <InlineMath>H^1(\mathbb{"{Z}"}/m, \mathbb{"{Z}"}/n) = \mathbb{"{Z}"}/\gcd(m,n)</InlineMath>
        </p>
      </div>

      <h3>Torsors and Principal Homogeneous Spaces</h3>

      <div className="bg-dark-800/50 rounded-xl p-6 border border-dark-700 my-6">
        <h4 className="text-primary-400 mb-4">Theorem</h4>
        <p>
          <InlineMath>H^1(G, A)</InlineMath> classifies <InlineMath>G</InlineMath>-torsors
          over a point, i.e., principal homogeneous spaces for <InlineMath>A</InlineMath>
          with compatible <InlineMath>G</InlineMath>-action.
        </p>
      </div>

      <p>
        In algebraic geometry, this interpretation extends: <InlineMath>H^1</InlineMath>
        classifies twisted forms and fiber bundles.
      </p>

      <h3>The Connecting Homomorphism</h3>

      <div className="bg-dark-800/50 rounded-xl p-6 border border-dark-700 my-6">
        <h4 className="text-primary-400 mb-4">From the Long Exact Sequence</h4>
        <p>
          For <InlineMath>0 \to A \to B \to C \to 0</InlineMath>:
        </p>
        <MathBlock>{`\\cdots \\to H^0(G, C) \\xrightarrow{\\delta} H^1(G, A) \\to H^1(G, B) \\to H^1(G, C) \\to \\cdots`}</MathBlock>
        <p className="mt-3">
          The connecting map <InlineMath>\delta</InlineMath> takes <InlineMath>c \in C^G</InlineMath>,
          lifts to <InlineMath>b \in B</InlineMath>, and outputs the cocycle <InlineMath>g \mapsto gb - b \in A</InlineMath>.
        </p>
      </div>

      <h3>Non-abelian H^1</h3>

      <div className="bg-dark-800/50 rounded-xl p-6 border border-dark-700 my-6">
        <h4 className="text-primary-400 mb-4">Definition</h4>
        <p>
          For a (possibly non-abelian) group <InlineMath>A</InlineMath> with <InlineMath>G</InlineMath>-action,
          we can still define <InlineMath>H^1(G, A)</InlineMath> as a <strong>pointed set</strong>:
        </p>
        <p className="mt-3">
          <InlineMath>Z^1(G, A) = \{"{f: G \\to A \\mid f(gh) = f(g) \\cdot g f(h)}"}\</InlineMath>
        </p>
        <p className="mt-3">
          with equivalence: <InlineMath>f \sim f'</InlineMath> if <InlineMath>f'(g) = a^{"{-1}"} f(g) (ga)</InlineMath>.
        </p>
      </div>

      <Callout type="warning">
        <strong>Note:</strong> For non-abelian <InlineMath>A</InlineMath>, <InlineMath>H^1(G, A)</InlineMath>
        is only a pointed set, not a group. There's no natural group structure.
      </Callout>

      <Callout type="success">
        <strong>Summary:</strong> <InlineMath>H^1(G, A)</InlineMath> equals crossed
        homomorphisms modulo principal ones. For trivial action, this is just
        <InlineMath>\text{"{Hom}"}(G, A)</InlineMath>. Hilbert's Theorem 90 says
        <InlineMath>H^1(\text{"{Gal}"}(L/K), L^*) = 0</InlineMath>, a cornerstone of
        Galois cohomology. <InlineMath>H^1</InlineMath> classifies torsors and appears
        in the long exact sequence connecting short exact sequences of <InlineMath>G</InlineMath>-modules.
      </Callout>
    </LessonLayout>
  );
}
