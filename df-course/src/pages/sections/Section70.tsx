import { LessonLayout } from '@/components/layout/LessonLayout';
import { Callout } from '@/components/common/Callout';
import { MathBlock, InlineMath } from '@/components/common/MathBlock';

export default function Section70() {
  return (
    <LessonLayout sectionId={70}>
      <h2>Finite Fields</h2>
      <p>
        <strong>Finite fields</strong> (also called Galois fields) are completely classified:
        for each prime power <InlineMath>q = p^n</InlineMath>, there is exactly one finite field
        of order <InlineMath>q</InlineMath>, denoted <InlineMath>\mathbb{"{F}"}_q</InlineMath>
        or <InlineMath>GF(q)</InlineMath>. Their structure is remarkably explicit and they
        have wide applications in coding theory, cryptography, and combinatorics.
      </p>

      <Callout type="info">
        <strong>Complete Classification:</strong> Unlike infinite fields, finite fields are
        completely understood. Their existence, uniqueness, and structure follow from
        straightforward Galois theory arguments.
      </Callout>

      <h3>Existence and Uniqueness</h3>

      <div className="bg-dark-800/50 rounded-xl p-6 border border-dark-700 my-6">
        <h4 className="text-primary-400 mb-4">Theorem: Classification of Finite Fields</h4>
        <ol className="list-decimal list-inside space-y-3 text-dark-300">
          <li>A finite field has order <InlineMath>p^n</InlineMath> for some prime <InlineMath>p</InlineMath>
            and positive integer <InlineMath>n</InlineMath>.</li>
          <li>For each prime power <InlineMath>q = p^n</InlineMath>, there exists a field of order <InlineMath>q</InlineMath>.</li>
          <li>Any two finite fields of the same order are isomorphic.</li>
        </ol>
      </div>

      <p>
        <strong>Why prime powers?</strong> If <InlineMath>F</InlineMath> is a finite field,
        its characteristic is some prime <InlineMath>p</InlineMath>,
        so <InlineMath>F</InlineMath> is a vector space over <InlineMath>\mathbb{"{F}"}_p</InlineMath>.
        If dimension is <InlineMath>n</InlineMath>, then <InlineMath>|F| = p^n</InlineMath>.
      </p>

      <h3>Construction</h3>

      <div className="bg-dark-800/50 rounded-xl p-6 border border-dark-700 my-6">
        <h4 className="text-primary-400 mb-4">Theorem: Construction as Splitting Field</h4>
        <p>
          <InlineMath>\mathbb{"{F}"}_{"{p^n}"}</InlineMath> is the splitting field of
          <InlineMath>x^{"{p^n}"} - x</InlineMath> over <InlineMath>\mathbb{"{F}"}_p</InlineMath>.
        </p>
        <p className="mt-3">
          Equivalently, <InlineMath>\mathbb{"{F}"}_{"{p^n}"}</InlineMath> consists of all roots
          of <InlineMath>x^{"{p^n}"} - x</InlineMath> in <InlineMath>\overline{"{\\mathbb{F}}"}_p</InlineMath>.
        </p>
      </div>

      <p>
        <strong>Why this works:</strong> The polynomial <InlineMath>x^{"{p^n}"} - x</InlineMath>
        has exactly <InlineMath>p^n</InlineMath> distinct roots (it's separable: derivative
        is <InlineMath>-1 \neq 0</InlineMath>). The roots form a field because
        of the Frobenius: <InlineMath>(a+b)^{"{p^n}"} = a^{"{p^n}"} + b^{"{p^n}"}</InlineMath>.
      </p>

      <div className="bg-dark-800 p-4 rounded-lg my-4 border-l-4 border-amber-500">
        <p className="font-semibold text-amber-400">Example: <InlineMath>\mathbb{"{F}"}_4</InlineMath></p>
        <p className="mt-2">
          To construct <InlineMath>\mathbb{"{F}"}_4</InlineMath>, take the splitting field
          of <InlineMath>x^4 - x = x(x-1)(x^2+x+1)</InlineMath> over <InlineMath>\mathbb{"{F}"}_2</InlineMath>.
        </p>
        <p className="mt-2">
          Since <InlineMath>x^2+x+1</InlineMath> is irreducible over <InlineMath>\mathbb{"{F}"}_2</InlineMath>:
        </p>
        <MathBlock>{`\\mathbb{F}_4 = \\mathbb{F}_2[x]/(x^2+x+1) = \\{0, 1, \\alpha, \\alpha+1\\}`}</MathBlock>
        <p className="mt-2">
          where <InlineMath>\alpha^2 = \alpha + 1</InlineMath>.
        </p>
      </div>

      <h3>The Multiplicative Group</h3>

      <div className="bg-dark-800/50 rounded-xl p-6 border border-dark-700 my-6">
        <h4 className="text-primary-400 mb-4">Theorem</h4>
        <p>
          The multiplicative group <InlineMath>\mathbb{"{F}"}_q^*</InlineMath> is cyclic of order <InlineMath>q - 1</InlineMath>.
        </p>
      </div>

      <p>
        A generator of <InlineMath>\mathbb{"{F}"}_q^*</InlineMath> is called a <strong>primitive element</strong>
        or <strong>primitive root</strong>. There are <InlineMath>\varphi(q-1)</InlineMath> primitive elements.
      </p>

      <div className="bg-dark-800 p-4 rounded-lg my-4 border-l-4 border-blue-500">
        <p className="font-semibold text-blue-400">Example: <InlineMath>\mathbb{"{F}"}_7</InlineMath></p>
        <p className="mt-2">
          <InlineMath>\mathbb{"{F}"}_7^* = \{"{1, 2, 3, 4, 5, 6}"}\</InlineMath> has order 6.
        </p>
        <p className="mt-2">
          Check: <InlineMath>3^1 = 3, 3^2 = 2, 3^3 = 6, 3^4 = 4, 3^5 = 5, 3^6 = 1</InlineMath>.
        </p>
        <p className="mt-2">
          So 3 is a primitive root, and <InlineMath>\mathbb{"{F}"}_7^* = \langle 3 \rangle \cong \mathbb{"{Z}"}/6\mathbb{"{Z}"}</InlineMath>.
        </p>
      </div>

      <h3>Subfield Structure</h3>

      <div className="bg-dark-800/50 rounded-xl p-6 border border-dark-700 my-6">
        <h4 className="text-primary-400 mb-4">Theorem: Subfields</h4>
        <p>
          <InlineMath>\mathbb{"{F}"}_{"{p^m}"}</InlineMath> is a subfield
          of <InlineMath>\mathbb{"{F}"}_{"{p^n}"}</InlineMath> if and only if <InlineMath>m \mid n</InlineMath>.
        </p>
        <p className="mt-3">
          In this case, the unique subfield of order <InlineMath>p^m</InlineMath> consists
          of all solutions to <InlineMath>x^{"{p^m}"} = x</InlineMath>
          in <InlineMath>\mathbb{"{F}"}_{"{p^n}"}</InlineMath>.
        </p>
      </div>

      <div className="bg-dark-800 p-4 rounded-lg my-4 border-l-4 border-amber-500">
        <p className="font-semibold text-amber-400">Example: Subfields of <InlineMath>\mathbb{"{F}"}_{"{64}"}</InlineMath></p>
        <p className="mt-2">
          <InlineMath>64 = 2^6</InlineMath>, and divisors of 6 are 1, 2, 3, 6.
        </p>
        <p className="mt-2">
          Subfields: <InlineMath>\mathbb{"{F}"}_2 \subset \mathbb{"{F}"}_4 \subset \mathbb{"{F}"}_{"{64}"}</InlineMath>
          and <InlineMath>\mathbb{"{F}"}_2 \subset \mathbb{"{F}"}_8 \subset \mathbb{"{F}"}_{"{64}"}</InlineMath>.
        </p>
        <p className="mt-2">
          Note: <InlineMath>\mathbb{"{F}"}_4</InlineMath> and <InlineMath>\mathbb{"{F}"}_8</InlineMath>
          are not comparable (neither contains the other).
        </p>
      </div>

      <h3>The Frobenius Automorphism</h3>

      <div className="bg-dark-800/50 rounded-xl p-6 border border-dark-700 my-6">
        <h4 className="text-primary-400 mb-4">Definition and Properties</h4>
        <p>
          The <strong>Frobenius automorphism</strong> <InlineMath>\phi: \mathbb{"{F}"}_{"{p^n}"} \to \mathbb{"{F}"}_{"{p^n}"}</InlineMath>
          is defined by <InlineMath>\phi(x) = x^p</InlineMath>.
        </p>
        <ul className="list-disc list-inside space-y-2 mt-3 text-dark-300">
          <li>It is an <InlineMath>\mathbb{"{F}"}_p</InlineMath>-automorphism</li>
          <li>It has order <InlineMath>n</InlineMath></li>
          <li>It generates <InlineMath>\text{"{Gal}"}(\mathbb{"{F}"}_{"{p^n}"}/\mathbb{"{F}"}_p)</InlineMath></li>
        </ul>
      </div>

      <div className="bg-dark-800/50 rounded-xl p-6 border border-dark-700 my-6">
        <h4 className="text-primary-400 mb-4">Theorem: Galois Group of Finite Fields</h4>
        <MathBlock>{`\\text{Gal}(\\mathbb{F}_{p^n}/\\mathbb{F}_p) = \\langle \\phi \\rangle \\cong \\mathbb{Z}/n\\mathbb{Z}`}</MathBlock>
        <p className="mt-3">
          More generally, <InlineMath>\text{"{Gal}"}(\mathbb{"{F}"}_{"{p^n}"}/\mathbb{"{F}"}_{"{p^m}"}) \cong \mathbb{"{Z}"}/(n/m)\mathbb{"{Z}"}</InlineMath>
          when <InlineMath>m \mid n</InlineMath>.
        </p>
      </div>

      <h3>Irreducible Polynomials</h3>

      <div className="bg-dark-800/50 rounded-xl p-6 border border-dark-700 my-6">
        <h4 className="text-primary-400 mb-4">Theorem: Counting Irreducibles</h4>
        <p>
          Let <InlineMath>N_n</InlineMath> be the number of monic irreducible polynomials
          of degree <InlineMath>n</InlineMath> over <InlineMath>\mathbb{"{F}"}_q</InlineMath>. Then:
        </p>
        <MathBlock>{`N_n = \\frac{1}{n} \\sum_{d \\mid n} \\mu(n/d) q^d`}</MathBlock>
        <p className="mt-3">
          where <InlineMath>\mu</InlineMath> is the Mobius function.
        </p>
      </div>

      <div className="bg-dark-800 p-4 rounded-lg my-4 border-l-4 border-emerald-500">
        <p className="font-semibold text-emerald-400">Asymptotic: <InlineMath>N_n \sim q^n/n</InlineMath></p>
        <p className="mt-2">
          There are many irreducible polynomials of each degree. For
          example, over <InlineMath>\mathbb{"{F}"}_2</InlineMath>:
        </p>
        <ul className="list-disc list-inside space-y-1 mt-2 text-dark-300">
          <li>Degree 1: 2 irreducibles (<InlineMath>x</InlineMath> and <InlineMath>x+1</InlineMath>)</li>
          <li>Degree 2: 1 irreducible (<InlineMath>x^2+x+1</InlineMath>)</li>
          <li>Degree 3: 2 irreducibles</li>
          <li>Degree 4: 3 irreducibles</li>
          <li>Degree 8: 30 irreducibles</li>
        </ul>
      </div>

      <h3>Applications</h3>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 my-6">
        <div className="bg-dark-800/50 rounded-xl p-4 border border-dark-700">
          <h4 className="text-emerald-400 font-semibold mb-2">Coding Theory</h4>
          <p className="text-dark-300 text-sm">
            Reed-Solomon codes, BCH codes, and other error-correcting codes are
            constructed using finite fields.
          </p>
        </div>
        <div className="bg-dark-800/50 rounded-xl p-4 border border-dark-700">
          <h4 className="text-blue-400 font-semibold mb-2">Cryptography</h4>
          <p className="text-dark-300 text-sm">
            AES uses <InlineMath>\mathbb{"{F}"}_{"{256}"}</InlineMath>. Elliptic curve
            cryptography often uses large prime fields or extension fields.
          </p>
        </div>
        <div className="bg-dark-800/50 rounded-xl p-4 border border-dark-700">
          <h4 className="text-purple-400 font-semibold mb-2">Combinatorics</h4>
          <p className="text-dark-300 text-sm">
            Finite projective planes, Latin squares, and designs are constructed
            from finite fields.
          </p>
        </div>
        <div className="bg-dark-800/50 rounded-xl p-4 border border-dark-700">
          <h4 className="text-amber-400 font-semibold mb-2">Number Theory</h4>
          <p className="text-dark-300 text-sm">
            Finite fields are residue fields of local rings in algebraic
            number theory.
          </p>
        </div>
      </div>

      <Callout type="success">
        <strong>Summary:</strong> Finite fields are completely classified: exactly one
        of each prime power order <InlineMath>q = p^n</InlineMath>, constructed as the
        splitting field of <InlineMath>x^q - x</InlineMath>. The multiplicative group
        is cyclic. Subfields correspond to divisors of <InlineMath>n</InlineMath>.
        The Galois group is cyclic, generated by the Frobenius <InlineMath>x \mapsto x^p</InlineMath>.
        These beautiful structures have extensive applications in coding, cryptography,
        and combinatorics.
      </Callout>
    </LessonLayout>
  );
}
