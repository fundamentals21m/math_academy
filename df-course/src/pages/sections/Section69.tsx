import { LessonLayout } from '@/components/layout/LessonLayout';
import { Callout } from '@/components/common/Callout';
import { MathBlock, InlineMath } from '@/components/common/MathBlock';

export default function Section69() {
  return (
    <LessonLayout sectionId={69}>
      <h2>Fundamental Theorem of Galois Theory</h2>
      <p>
        The <strong>Fundamental Theorem of Galois Theory</strong> establishes a precise
        correspondence between intermediate fields of a Galois extension and subgroups
        of its Galois group. This bijection reverses inclusion and translates field-theoretic
        properties into group-theoretic ones.
      </p>

      <Callout type="info">
        <strong>The Big Picture:</strong> Instead of studying field extensions directly,
        we can study the much more concrete world of finite groups. Properties of the extension
        (like degree, normality) correspond to properties of subgroups (like index, normality).
      </Callout>

      <h3>The Statement</h3>

      <div className="bg-dark-800/50 rounded-xl p-6 border border-dark-700 my-6">
        <h4 className="text-primary-400 mb-4">Fundamental Theorem of Galois Theory</h4>
        <p>
          Let <InlineMath>K/F</InlineMath> be a finite Galois extension
          with Galois group <InlineMath>G = \text{"{Gal}"}(K/F)</InlineMath>. Then there
          is a bijection:
        </p>
        <MathBlock>{`\\{\\text{intermediate fields } F \\subseteq E \\subseteq K\\} \\longleftrightarrow \\{\\text{subgroups } H \\leq G\\}`}</MathBlock>
        <p className="mt-3">given by:</p>
        <MathBlock>{`E \\mapsto \\text{Gal}(K/E) \\quad \\text{and} \\quad H \\mapsto K^H`}</MathBlock>
      </div>

      <h3>Properties of the Correspondence</h3>

      <div className="bg-dark-800/50 rounded-xl p-6 border border-dark-700 my-6">
        <h4 className="text-primary-400 mb-4">Key Properties</h4>
        <p>
          Under this bijection, if <InlineMath>E \leftrightarrow H</InlineMath>:
        </p>
        <ol className="list-decimal list-inside space-y-3 mt-3 text-dark-300">
          <li><strong>Inclusion-reversing:</strong> <InlineMath>E_1 \subseteq E_2 \iff H_1 \supseteq H_2</InlineMath></li>
          <li><strong>Degree-index correspondence:</strong>
            <MathBlock>{`[K:E] = |H| \\quad \\text{and} \\quad [E:F] = [G:H]`}</MathBlock>
          </li>
          <li><strong>Normality:</strong> <InlineMath>E/F</InlineMath> is Galois (normal
            over <InlineMath>F</InlineMath>) if and only if <InlineMath>H \trianglelefteq G</InlineMath></li>
          <li><strong>Quotient groups:</strong> When <InlineMath>H \trianglelefteq G</InlineMath>:
            <MathBlock>{`\\text{Gal}(E/F) \\cong G/H`}</MathBlock>
          </li>
        </ol>
      </div>

      <h3>Visualizing the Correspondence</h3>

      <p>
        The correspondence is often visualized with lattice diagrams. Fields go "up"
        while groups go "down":
      </p>

      <div className="bg-dark-800 p-4 rounded-lg my-4 border-l-4 border-blue-500">
        <p className="font-semibold text-blue-400">Lattice Diagram</p>
        <pre className="mt-2 text-dark-300 text-sm">
{`         K                    {1}
         |                     |
        / \\                   / \\
       /   \\                 /   \\
      E₁    E₂              H₂    H₁
       \\   /                 \\   /
        \\ /                   \\ /
         |                     |
         F                     G`}
        </pre>
        <p className="mt-2 text-dark-300 text-sm">
          Note: Inclusions are reversed! Larger fields correspond to smaller groups.
        </p>
      </div>

      <h3>Example: Splitting Field of x^3 - 2</h3>

      <div className="bg-dark-800 p-4 rounded-lg my-4 border-l-4 border-amber-500">
        <p className="font-semibold text-amber-400">Complete Analysis</p>
        <p className="mt-2">
          Let <InlineMath>K = \mathbb{"{Q}"}(\sqrt[3]{"{2}"}, \omega)</InlineMath>
          be the splitting field of <InlineMath>x^3 - 2</InlineMath>
          over <InlineMath>\mathbb{"{Q}"}</InlineMath>,
          where <InlineMath>\omega = e^{"{2\\pi i/3}"}</InlineMath>.
        </p>
        <p className="mt-2">
          We have <InlineMath>[K:\mathbb{"{Q}"}] = 6</InlineMath>
          and <InlineMath>G = \text{"{Gal}"}(K/\mathbb{"{Q}"}) \cong S_3</InlineMath>.
        </p>
        <p className="mt-3"><strong>Subgroups of <InlineMath>S_3</InlineMath>:</strong></p>
        <ul className="list-disc list-inside space-y-1 mt-2 text-dark-300">
          <li><InlineMath>\{"{1}"}\</InlineMath> — trivial subgroup (order 1)</li>
          <li><InlineMath>\langle (12) \rangle, \langle (13) \rangle, \langle (23) \rangle</InlineMath> — three subgroups of order 2</li>
          <li><InlineMath>A_3 = \langle (123) \rangle</InlineMath> — unique subgroup of order 3 (normal!)</li>
          <li><InlineMath>S_3</InlineMath> — the whole group (order 6)</li>
        </ul>
        <p className="mt-3"><strong>Corresponding intermediate fields:</strong></p>
        <ul className="list-disc list-inside space-y-1 mt-2 text-dark-300">
          <li><InlineMath>\{"{1}"}\</InlineMath> <InlineMath>\leftrightarrow K</InlineMath></li>
          <li>Each order-2 subgroup <InlineMath>\leftrightarrow</InlineMath> a cubic extension of <InlineMath>\mathbb{"{Q}"}</InlineMath></li>
          <li><InlineMath>A_3 \leftrightarrow \mathbb{"{Q}"}(\omega)</InlineMath> (a Galois extension!)</li>
          <li><InlineMath>S_3 \leftrightarrow \mathbb{"{Q}"}</InlineMath></li>
        </ul>
      </div>

      <h3>Normal Subgroups and Galois Subextensions</h3>

      <p>
        The theorem reveals when intermediate extensions are themselves Galois:
      </p>

      <div className="bg-dark-800/50 rounded-xl p-6 border border-dark-700 my-6">
        <h4 className="text-primary-400 mb-4">Theorem: Normal Subgroups</h4>
        <p>
          An intermediate field <InlineMath>E</InlineMath> is Galois over <InlineMath>F</InlineMath>
          if and only if its corresponding subgroup <InlineMath>H = \text{"{Gal}"}(K/E)</InlineMath>
          is a normal subgroup of <InlineMath>G</InlineMath>.
        </p>
        <p className="mt-3">
          In this case: <InlineMath>\text{"{Gal}"}(E/F) \cong G/H</InlineMath>.
        </p>
      </div>

      <div className="bg-dark-800 p-4 rounded-lg my-4 border-l-4 border-purple-500">
        <p className="font-semibold text-purple-400">Example: <InlineMath>\mathbb{"{Q}"}(\sqrt[3]{"{2}"})</InlineMath> is NOT Galois over <InlineMath>\mathbb{"{Q}"}</InlineMath></p>
        <p className="mt-2">
          In our <InlineMath>S_3</InlineMath> example, <InlineMath>\mathbb{"{Q}"}(\sqrt[3]{"{2}"})</InlineMath>
          corresponds to <InlineMath>\langle (23) \rangle</InlineMath>
          (the automorphism fixing <InlineMath>\sqrt[3]{"{2}"}</InlineMath>
          and swapping <InlineMath>\omega\sqrt[3]{"{2}"}, \omega^2\sqrt[3]{"{2}"}</InlineMath>).
        </p>
        <p className="mt-2">
          This subgroup is NOT normal in <InlineMath>S_3</InlineMath>
          (conjugate it by <InlineMath>(123)</InlineMath> to get <InlineMath>\langle (13) \rangle</InlineMath>).
        </p>
        <p className="mt-2">
          Therefore, <InlineMath>\mathbb{"{Q}"}(\sqrt[3]{"{2}"})/\mathbb{"{Q}"}</InlineMath> is not Galois.
        </p>
      </div>

      <h3>Proof Outline</h3>

      <div className="bg-dark-800/50 rounded-xl p-6 border border-dark-700 my-6">
        <h4 className="text-primary-400 mb-4">Key Steps</h4>
        <ol className="list-decimal list-inside space-y-3 text-dark-300">
          <li><strong>Well-defined:</strong> <InlineMath>K^H</InlineMath> is always a subfield
            containing <InlineMath>F</InlineMath>; <InlineMath>\text{"{Gal}"}(K/E)</InlineMath>
            is always a subgroup of <InlineMath>G</InlineMath>.</li>
          <li><strong>Inverse maps:</strong> Show that <InlineMath>K^{"{\\text{Gal}(K/E)}"} = E</InlineMath>
            and <InlineMath>\text{"{Gal}"}(K/K^H) = H</InlineMath>. These use separability crucially.</li>
          <li><strong>Degree calculation:</strong> For <InlineMath>K/F</InlineMath> Galois,
            the number of automorphisms equals <InlineMath>[K:F]</InlineMath> by definition.</li>
          <li><strong>Normality correspondence:</strong> Uses the characterization that <InlineMath>E/F</InlineMath>
            is normal iff every <InlineMath>F</InlineMath>-embedding sends <InlineMath>E</InlineMath> to itself.</li>
        </ol>
      </div>

      <h3>Applications</h3>

      <div className="bg-dark-800 p-4 rounded-lg my-4 border-l-4 border-emerald-500">
        <p className="font-semibold text-emerald-400">Example: Subfields of Cyclotomic Fields</p>
        <p className="mt-2">
          For <InlineMath>K = \mathbb{"{Q}"}(\zeta_p)</InlineMath>
          where <InlineMath>p</InlineMath> is prime:
        </p>
        <p className="mt-2">
          <InlineMath>\text{"{Gal}"}(K/\mathbb{"{Q}"}) \cong (\mathbb{"{Z}"}/p\mathbb{"{Z}"})^* \cong \mathbb{"{Z}"}/(p-1)\mathbb{"{Z}"}</InlineMath>
        </p>
        <p className="mt-2">
          This is cyclic! So intermediate fields correspond to divisors of <InlineMath>p-1</InlineMath>.
          For each <InlineMath>d \mid (p-1)</InlineMath>, there's exactly one intermediate field
          of degree <InlineMath>d</InlineMath> over <InlineMath>\mathbb{"{Q}"}</InlineMath>.
        </p>
      </div>

      <Callout type="success">
        <strong>Summary:</strong> The Fundamental Theorem of Galois Theory establishes a
        bijection between subgroups of <InlineMath>\text{"{Gal}"}(K/F)</InlineMath> and
        intermediate fields of <InlineMath>K/F</InlineMath>. This correspondence reverses
        inclusions, relates degrees to indices, and identifies Galois intermediate extensions
        with normal subgroups. It transforms field theory questions into group theory questions,
        making the rich structure of finite groups available for studying field extensions.
      </Callout>
    </LessonLayout>
  );
}
