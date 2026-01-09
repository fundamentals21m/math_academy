import { LessonLayout } from '@/components/layout/LessonLayout';
import { Callout } from '@/components/common/Callout';
import { MathBlock, InlineMath } from '@/components/common/MathBlock';

export default function Section81() {
  return (
    <LessonLayout sectionId={81}>
      <h2>Prime Spectrum of a Ring</h2>
      <p>
        The <strong>prime spectrum</strong> <InlineMath>\text{"{Spec}"}(R)</InlineMath> of a ring
        transforms algebra into geometry. By treating prime ideals as "points" and equipping
        them with the Zariski topology, we obtain a topological space that encodes the
        ring's structure. This is the foundation of modern algebraic geometry.
      </p>

      <Callout type="info">
        <strong>Modern Viewpoint:</strong> A ring IS the same thing as its spectrum
        (equipped with a structure sheaf). This functorial perspective, developed by
        Grothendieck, revolutionized algebraic geometry.
      </Callout>

      <h3>Definition of Spec</h3>

      <div className="bg-dark-800/50 rounded-xl p-6 border border-dark-700 my-6">
        <h4 className="text-primary-400 mb-4">Definition</h4>
        <p>
          For a commutative ring <InlineMath>R</InlineMath>, the <strong>prime spectrum</strong> is:
        </p>
        <MathBlock>{`\\text{Spec}(R) = \\{P \\subseteq R \\mid P \\text{ is a prime ideal}\\}`}</MathBlock>
      </div>

      <div className="bg-dark-800 p-4 rounded-lg my-4 border-l-4 border-amber-500">
        <p className="font-semibold text-amber-400">Examples</p>
        <ul className="list-disc list-inside space-y-2 mt-2 text-dark-300">
          <li><InlineMath>\text{"{Spec}"}(\mathbb{"{Z}"}) = \{"{(0), (2), (3), (5), (7), \\ldots}"}\</InlineMath>
            (zero and primes)</li>
          <li><InlineMath>\text{"{Spec}"}(k[x]) = \{"{(0)}"}\} \cup \{"{(f) \\mid f \\text{ irreducible}}"}\</InlineMath>
            for field <InlineMath>k</InlineMath></li>
          <li><InlineMath>\text{"{Spec}"}(k) = \{"{(0)}"}\</InlineMath> (single point)</li>
          <li><InlineMath>\text{"{Spec}"}(\mathbb{"{Z}"}/6\mathbb{"{Z}"}) = \{"{(2), (3)}"}\</InlineMath></li>
        </ul>
      </div>

      <h3>The Zariski Topology</h3>

      <div className="bg-dark-800/50 rounded-xl p-6 border border-dark-700 my-6">
        <h4 className="text-primary-400 mb-4">Definition</h4>
        <p>
          For an ideal <InlineMath>I \subseteq R</InlineMath>, define the <strong>vanishing set</strong>:
        </p>
        <MathBlock>{`V(I) = \\{P \\in \\text{Spec}(R) \\mid I \\subseteq P\\}`}</MathBlock>
        <p className="mt-3">
          The closed sets of the <strong>Zariski topology</strong> on <InlineMath>\text{"{Spec}"}(R)</InlineMath>
          are exactly the sets <InlineMath>V(I)</InlineMath>.
        </p>
      </div>

      <div className="bg-dark-800/50 rounded-xl p-6 border border-dark-700 my-6">
        <h4 className="text-primary-400 mb-4">Theorem: Topology Axioms</h4>
        <ol className="list-decimal list-inside space-y-2 text-dark-300">
          <li><InlineMath>V(R) = \emptyset</InlineMath> and <InlineMath>V(0) = \text{"{Spec}"}(R)</InlineMath></li>
          <li><InlineMath>V(I) \cup V(J) = V(I \cap J) = V(IJ)</InlineMath></li>
          <li><InlineMath>\bigcap_\alpha V(I_\alpha) = V(\sum_\alpha I_\alpha)</InlineMath></li>
        </ol>
      </div>

      <h3>Basic Open Sets</h3>

      <div className="bg-dark-800/50 rounded-xl p-6 border border-dark-700 my-6">
        <h4 className="text-primary-400 mb-4">Definition</h4>
        <p>
          For <InlineMath>f \in R</InlineMath>, the <strong>distinguished open set</strong> is:
        </p>
        <MathBlock>{`D(f) = \\text{Spec}(R) \\setminus V(f) = \\{P \\in \\text{Spec}(R) \\mid f \\notin P\\}`}</MathBlock>
      </div>

      <div className="bg-dark-800/50 rounded-xl p-6 border border-dark-700 my-6">
        <h4 className="text-primary-400 mb-4">Theorem</h4>
        <p>
          The sets <InlineMath>D(f)</InlineMath> form a basis for the Zariski topology.
          Moreover:
        </p>
        <ul className="list-disc list-inside space-y-2 mt-3 text-dark-300">
          <li><InlineMath>D(f) \cap D(g) = D(fg)</InlineMath></li>
          <li><InlineMath>D(f) = \emptyset</InlineMath> iff <InlineMath>f</InlineMath> is nilpotent</li>
          <li><InlineMath>D(f) = \text{"{Spec}"}(R)</InlineMath> iff <InlineMath>f</InlineMath> is a unit</li>
          <li><InlineMath>D(f) \cong \text{"{Spec}"}(R_f)</InlineMath> as topological spaces</li>
        </ul>
      </div>

      <h3>Properties of Spec(R)</h3>

      <div className="bg-dark-800/50 rounded-xl p-6 border border-dark-700 my-6">
        <h4 className="text-primary-400 mb-4">Theorem</h4>
        <ol className="list-decimal list-inside space-y-3 text-dark-300">
          <li><InlineMath>\text{"{Spec}"}(R)</InlineMath> is quasi-compact (every open cover has a finite subcover)</li>
          <li><InlineMath>\text{"{Spec}"}(R)</InlineMath> is <InlineMath>T_0</InlineMath> but generally not Hausdorff</li>
          <li>The closure of <InlineMath>\{"{P}"}\</InlineMath> is <InlineMath>V(P) = \{"{Q \\supseteq P}"}\</InlineMath></li>
          <li><InlineMath>\{"{P}"}\</InlineMath> is closed iff <InlineMath>P</InlineMath> is maximal</li>
          <li><InlineMath>\text{"{Spec}"}(R)</InlineMath> is irreducible iff <InlineMath>\sqrt{"{(0)}"}</InlineMath> is prime</li>
        </ol>
      </div>

      <h3>Generic Points</h3>

      <div className="bg-dark-800/50 rounded-xl p-6 border border-dark-700 my-6">
        <h4 className="text-primary-400 mb-4">Definition</h4>
        <p>
          A point <InlineMath>\eta</InlineMath> is a <strong>generic point</strong> of an
          irreducible closed set <InlineMath>Z</InlineMath> if <InlineMath>\overline{"{\\{\\eta\\}}"} = Z</InlineMath>.
        </p>
      </div>

      <p>
        In <InlineMath>\text{"{Spec}"}(R)</InlineMath>, the generic point of <InlineMath>V(P)</InlineMath>
        is <InlineMath>P</InlineMath> itself. This is unique!
      </p>

      <div className="bg-dark-800 p-4 rounded-lg my-4 border-l-4 border-blue-500">
        <p className="font-semibold text-blue-400">Example: <InlineMath>\text{"{Spec}"}(\mathbb{"{Z}"})</InlineMath></p>
        <p className="mt-2">
          Points: <InlineMath>(0), (2), (3), (5), (7), \ldots</InlineMath>
        </p>
        <p className="mt-2">
          Closed points: <InlineMath>(2), (3), (5), \ldots</InlineMath> (maximal ideals)
        </p>
        <p className="mt-2">
          Generic point: <InlineMath>(0)</InlineMath> — its closure is all of <InlineMath>\text{"{Spec}"}(\mathbb{"{Z}"})</InlineMath>
        </p>
        <p className="mt-2">
          Topology: <InlineMath>(0)</InlineMath> is in every nonempty open set!
        </p>
      </div>

      <h3>Functoriality</h3>

      <div className="bg-dark-800/50 rounded-xl p-6 border border-dark-700 my-6">
        <h4 className="text-primary-400 mb-4">Theorem</h4>
        <p>
          A ring homomorphism <InlineMath>\phi: R \to S</InlineMath> induces a continuous map:
        </p>
        <MathBlock>{`\\phi^*: \\text{Spec}(S) \\to \\text{Spec}(R), \\quad P \\mapsto \\phi^{-1}(P)`}</MathBlock>
        <p className="mt-3">
          This makes <InlineMath>\text{"{Spec}"}</InlineMath> a contravariant functor from
          <InlineMath>\textbf{"{CRing}"}</InlineMath> to <InlineMath>\textbf{"{Top}"}</InlineMath>.
        </p>
      </div>

      <div className="bg-dark-800 p-4 rounded-lg my-4 border-l-4 border-amber-500">
        <p className="font-semibold text-amber-400">Example: Inclusion <InlineMath>\mathbb{"{Z}"} \hookrightarrow \mathbb{"{Q}"}</InlineMath></p>
        <p className="mt-2">
          <InlineMath>\text{"{Spec}"}(\mathbb{"{Q}"}) = \{"{(0)}"}\</InlineMath> (one point)
        </p>
        <p className="mt-2">
          The induced map sends <InlineMath>(0) \mapsto (0)</InlineMath>.
        </p>
        <p className="mt-2">
          Geometrically: <InlineMath>\mathbb{"{Q}"}</InlineMath> corresponds to the "generic point"
          of <InlineMath>\text{"{Spec}"}(\mathbb{"{Z}"})</InlineMath>.
        </p>
      </div>

      <h3>Maximal Spectrum</h3>

      <div className="bg-dark-800/50 rounded-xl p-6 border border-dark-700 my-6">
        <h4 className="text-primary-400 mb-4">Definition</h4>
        <p>
          The <strong>maximal spectrum</strong> is:
        </p>
        <MathBlock>{`\\text{MaxSpec}(R) = \\{\\mathfrak{m} \\subseteq R \\mid \\mathfrak{m} \\text{ is maximal}\\}`}</MathBlock>
        <p className="mt-3">
          with the subspace topology from <InlineMath>\text{"{Spec}"}(R)</InlineMath>.
        </p>
      </div>

      <p>
        For finitely generated algebras over algebraically closed fields,
        <InlineMath>\text{"{MaxSpec}"}</InlineMath> corresponds to the classical variety.
      </p>

      <Callout type="success">
        <strong>Summary:</strong> The prime spectrum <InlineMath>\text{"{Spec}"}(R)</InlineMath>
        treats prime ideals as points of a topological space with the Zariski topology.
        It is quasi-compact but not Hausdorff; only maximal ideals are closed points.
        Non-maximal primes are generic points of their closures. Ring homomorphisms
        induce continuous maps contravariantly. This construction, enhanced with
        a structure sheaf, is the foundation of scheme theory.
      </Callout>
    </LessonLayout>
  );
}
