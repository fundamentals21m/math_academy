import { LessonLayout } from '@/components/layout/LessonLayout';
import { Callout } from '@/components/common/Callout';
import { MathBlock, InlineMath } from '@/components/common/MathBlock';

export default function Section68() {
  return (
    <LessonLayout sectionId={68}>
      <h2>Galois Theory - Basic Definitions</h2>
      <p>
        <strong>Galois theory</strong> reveals a profound correspondence between field extensions
        and groups. Named after Evariste Galois, who developed these ideas before his tragic death
        at age 20, this theory unified disparate results about polynomial equations and opened
        vast new areas of mathematics.
      </p>

      <Callout type="info">
        <strong>The Vision:</strong> Galois realized that the symmetries of the roots of a polynomial
        (the Galois group) encode essential information about the polynomial's solvability.
        This transforms questions about equations into questions about groups.
      </Callout>

      <h3>Field Automorphisms</h3>

      <div className="bg-dark-800/50 rounded-xl p-6 border border-dark-700 my-6">
        <h4 className="text-primary-400 mb-4">Definition: Field Automorphism</h4>
        <p>
          A <strong>field automorphism</strong> of a field <InlineMath>K</InlineMath> is a
          ring isomorphism <InlineMath>\sigma: K \to K</InlineMath>.
        </p>
        <p className="mt-3">
          For an extension <InlineMath>K/F</InlineMath>, an <strong>F-automorphism</strong>
          (or automorphism fixing <InlineMath>F</InlineMath>) is a field automorphism
          <InlineMath>\sigma</InlineMath> such that <InlineMath>\sigma(a) = a</InlineMath>
          for all <InlineMath>a \in F</InlineMath>.
        </p>
      </div>

      <p>
        The <InlineMath>F</InlineMath>-automorphisms form a group under composition, denoted
        <InlineMath>\text{"{Aut}"}(K/F)</InlineMath> or <InlineMath>\text{"{Aut}"}_F(K)</InlineMath>.
      </p>

      <div className="bg-dark-800 p-4 rounded-lg my-4 border-l-4 border-amber-500">
        <p className="font-semibold text-amber-400">Example: <InlineMath>\mathbb{"{C}"}/\mathbb{"{R}"}</InlineMath></p>
        <p className="mt-2">
          The <InlineMath>\mathbb{"{R}"}</InlineMath>-automorphisms
          of <InlineMath>\mathbb{"{C}"}</InlineMath> are:
        </p>
        <ul className="list-disc list-inside space-y-1 mt-2 text-dark-300">
          <li>The identity: <InlineMath>\text{"{id}"}(a + bi) = a + bi</InlineMath></li>
          <li>Complex conjugation: <InlineMath>\sigma(a + bi) = a - bi</InlineMath></li>
        </ul>
        <p className="mt-2">
          So <InlineMath>\text{"{Aut}"}(\mathbb{"{C}"}/\mathbb{"{R}"}) \cong \mathbb{"{Z}"}/2\mathbb{"{Z}"}</InlineMath>.
        </p>
      </div>

      <h3>The Galois Group</h3>

      <div className="bg-dark-800/50 rounded-xl p-6 border border-dark-700 my-6">
        <h4 className="text-primary-400 mb-4">Definition: Galois Group</h4>
        <p>
          For a field extension <InlineMath>K/F</InlineMath>, the <strong>Galois group</strong>
          is the group of <InlineMath>F</InlineMath>-automorphisms of <InlineMath>K</InlineMath>:
        </p>
        <MathBlock>{`\\text{Gal}(K/F) = \\text{Aut}(K/F) = \\{\\sigma: K \\to K \\mid \\sigma \\text{ is an isomorphism, } \\sigma|_F = \\text{id}\\}`}</MathBlock>
      </div>

      <h3>Automorphisms Permute Roots</h3>

      <div className="bg-dark-800/50 rounded-xl p-6 border border-dark-700 my-6">
        <h4 className="text-primary-400 mb-4">Key Lemma</h4>
        <p>
          If <InlineMath>\sigma \in \text{"{Gal}"}(K/F)</InlineMath>
          and <InlineMath>f(x) \in F[x]</InlineMath>, then <InlineMath>\sigma</InlineMath>
          permutes the roots of <InlineMath>f</InlineMath> that lie in <InlineMath>K</InlineMath>.
        </p>
      </div>

      <p>
        <strong>Proof:</strong> If <InlineMath>f(\alpha) = 0</InlineMath>
        where <InlineMath>f(x) = \sum a_i x^i</InlineMath> with <InlineMath>a_i \in F</InlineMath>, then:
      </p>
      <MathBlock>{`f(\\sigma(\\alpha)) = \\sum a_i \\sigma(\\alpha)^i = \\sum \\sigma(a_i) \\sigma(\\alpha)^i = \\sigma\\left(\\sum a_i \\alpha^i\\right) = \\sigma(f(\\alpha)) = \\sigma(0) = 0`}</MathBlock>

      <h3>Galois Extensions</h3>

      <div className="bg-dark-800/50 rounded-xl p-6 border border-dark-700 my-6">
        <h4 className="text-primary-400 mb-4">Definition: Galois Extension</h4>
        <p>
          A finite extension <InlineMath>K/F</InlineMath> is called a <strong>Galois extension</strong>
          if <InlineMath>|\text{"{Gal}"}(K/F)| = [K:F]</InlineMath>.
        </p>
      </div>

      <Callout type="info">
        <strong>Equivalently:</strong> A finite extension <InlineMath>K/F</InlineMath> is Galois
        if and only if it is both <strong>normal</strong> and <strong>separable</strong>.
      </Callout>

      <h3>Normal Extensions</h3>

      <div className="bg-dark-800/50 rounded-xl p-6 border border-dark-700 my-6">
        <h4 className="text-primary-400 mb-4">Definition</h4>
        <p>
          An algebraic extension <InlineMath>K/F</InlineMath> is <strong>normal</strong> if every
          irreducible polynomial in <InlineMath>F[x]</InlineMath> that has at least one root
          in <InlineMath>K</InlineMath> splits completely in <InlineMath>K[x]</InlineMath>.
        </p>
      </div>

      <div className="bg-dark-800/50 rounded-xl p-6 border border-dark-700 my-6">
        <h4 className="text-primary-400 mb-4">Theorem: Characterizations of Normal Extensions</h4>
        <p>
          For a finite extension <InlineMath>K/F</InlineMath>, the following are equivalent:
        </p>
        <ol className="list-decimal list-inside space-y-2 mt-3 text-dark-300">
          <li><InlineMath>K/F</InlineMath> is normal</li>
          <li><InlineMath>K</InlineMath> is the splitting field of some polynomial <InlineMath>f(x) \in F[x]</InlineMath></li>
          <li>Every <InlineMath>F</InlineMath>-embedding of <InlineMath>K</InlineMath>
            into <InlineMath>\overline{"{F}"}</InlineMath> has image <InlineMath>K</InlineMath></li>
        </ol>
      </div>

      <div className="bg-dark-800 p-4 rounded-lg my-4 border-l-4 border-amber-500">
        <p className="font-semibold text-amber-400">Example: Normal vs Non-Normal</p>
        <p className="mt-2">
          <strong>Normal:</strong> <InlineMath>\mathbb{"{Q}"}(\sqrt{"{2}"})/\mathbb{"{Q}"}</InlineMath> is
          normal (splitting field of <InlineMath>x^2 - 2</InlineMath>).
        </p>
        <p className="mt-2">
          <strong>Not normal:</strong> <InlineMath>\mathbb{"{Q}"}(\sqrt[3]{"{2}"})/\mathbb{"{Q}"}</InlineMath>
          is not normal. The polynomial <InlineMath>x^3 - 2</InlineMath> has a root
          in <InlineMath>\mathbb{"{Q}"}(\sqrt[3]{"{2}"})</InlineMath> but doesn't split there
          (the other roots are <InlineMath>\omega\sqrt[3]{"{2}"}</InlineMath>
          and <InlineMath>\omega^2\sqrt[3]{"{2}"}</InlineMath>, which are not real).
        </p>
      </div>

      <h3>Computing Galois Groups</h3>

      <div className="bg-dark-800 p-4 rounded-lg my-4 border-l-4 border-blue-500">
        <p className="font-semibold text-blue-400">Example: <InlineMath>\text{"{Gal}"}(\mathbb{"{Q}"}(\sqrt{"{2}"})/\mathbb{"{Q}"})</InlineMath></p>
        <p className="mt-2">
          Any <InlineMath>\sigma \in \text{"{Gal}"}(\mathbb{"{Q}"}(\sqrt{"{2}"})/\mathbb{"{Q}"})</InlineMath>
          is determined by <InlineMath>\sigma(\sqrt{"{2}"})</InlineMath>.
        </p>
        <p className="mt-2">
          Since <InlineMath>\sigma</InlineMath> permutes roots
          of <InlineMath>x^2 - 2</InlineMath>, we have <InlineMath>\sigma(\sqrt{"{2}"}) = \pm\sqrt{"{2}"}</InlineMath>.
        </p>
        <p className="mt-2">
          Two automorphisms: <InlineMath>\text{"{id}"}</InlineMath> and <InlineMath>\sigma: \sqrt{"{2}"} \mapsto -\sqrt{"{2}"}</InlineMath>.
        </p>
        <p className="mt-2">
          Thus <InlineMath>\text{"{Gal}"}(\mathbb{"{Q}"}(\sqrt{"{2}"})/\mathbb{"{Q}"}) \cong \mathbb{"{Z}"}/2\mathbb{"{Z}"}</InlineMath>.
        </p>
      </div>

      <div className="bg-dark-800 p-4 rounded-lg my-4 border-l-4 border-purple-500">
        <p className="font-semibold text-purple-400">Example: Splitting Field of <InlineMath>x^3 - 2</InlineMath></p>
        <p className="mt-2">
          Let <InlineMath>K = \mathbb{"{Q}"}(\sqrt[3]{"{2}"}, \omega)</InlineMath>
          where <InlineMath>\omega = e^{"{2\\pi i/3}"}</InlineMath>.
        </p>
        <p className="mt-2">
          The roots are <InlineMath>\alpha = \sqrt[3]{"{2}"}, \omega\alpha, \omega^2\alpha</InlineMath>.
        </p>
        <p className="mt-2">
          We have <InlineMath>[K:\mathbb{"{Q}"}] = 6</InlineMath>, so <InlineMath>|\text{"{Gal}"}(K/\mathbb{"{Q}"})| = 6</InlineMath>.
        </p>
        <p className="mt-2">
          The Galois group permutes the three roots, giving an embedding into <InlineMath>S_3</InlineMath>.
          Since <InlineMath>|S_3| = 6</InlineMath>, we have <InlineMath>\text{"{Gal}"}(K/\mathbb{"{Q}"}) \cong S_3</InlineMath>.
        </p>
      </div>

      <h3>The Fixed Field</h3>

      <div className="bg-dark-800/50 rounded-xl p-6 border border-dark-700 my-6">
        <h4 className="text-primary-400 mb-4">Definition</h4>
        <p>
          For a subgroup <InlineMath>H \leq \text{"{Gal}"}(K/F)</InlineMath>, the <strong>fixed field</strong> is:
        </p>
        <MathBlock>{`K^H = \\{\\alpha \\in K \\mid \\sigma(\\alpha) = \\alpha \\text{ for all } \\sigma \\in H\\}`}</MathBlock>
      </div>

      <p>
        The fixed field is indeed a field, and <InlineMath>F \subseteq K^H \subseteq K</InlineMath>.
      </p>

      <div className="bg-dark-800 p-4 rounded-lg my-4 border-l-4 border-amber-500">
        <p className="font-semibold text-amber-400">Example: Fixed Fields</p>
        <p className="mt-2">
          For <InlineMath>\mathbb{"{C}"}/\mathbb{"{R}"}</InlineMath> with <InlineMath>\text{"{Gal}"}(\mathbb{"{C}"}/\mathbb{"{R}"}) = \{"{\\text{id}, \\sigma}"}\</InlineMath>
          where <InlineMath>\sigma</InlineMath> is complex conjugation:
        </p>
        <ul className="list-disc list-inside space-y-1 mt-2 text-dark-300">
          <li><InlineMath>\mathbb{"{C}"}^{"{\\{\\text{id}\\}}"} = \mathbb{"{C}"}</InlineMath></li>
          <li><InlineMath>\mathbb{"{C}"}^{"{\\{\\text{id}, \\sigma\\}}"} = \mathbb{"{R}"}</InlineMath></li>
        </ul>
      </div>

      <Callout type="success">
        <strong>Summary:</strong> The Galois group <InlineMath>\text{"{Gal}"}(K/F)</InlineMath>
        consists of all field automorphisms of <InlineMath>K</InlineMath> fixing <InlineMath>F</InlineMath>.
        A Galois extension is one where this group has order equal to the degree. This occurs
        precisely when the extension is both normal (a splitting field) and separable. Automorphisms
        permute roots of polynomials, giving concrete ways to compute Galois groups. The fixed field
        construction reverses the process, going from groups back to fields.
      </Callout>
    </LessonLayout>
  );
}
