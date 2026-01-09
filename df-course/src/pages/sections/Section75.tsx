import { LessonLayout } from '@/components/layout/LessonLayout';
import { Callout } from '@/components/common/Callout';
import { MathBlock, InlineMath } from '@/components/common/MathBlock';

export default function Section75() {
  return (
    <LessonLayout sectionId={75}>
      <h2>Computing Galois Groups over Q</h2>
      <p>
        We now develop practical techniques for computing Galois groups of polynomials
        over <InlineMath>\mathbb{"{Q}"}</InlineMath>. While the theory is beautiful, actually
        determining the Galois group of a specific polynomial requires a toolkit of
        computational methods.
      </p>

      <Callout type="info">
        <strong>Goal:</strong> Given a polynomial <InlineMath>f(x) \in \mathbb{"{Q}"}[x]</InlineMath>,
        determine its Galois group as a subgroup of <InlineMath>S_n</InlineMath> (up to conjugacy).
      </Callout>

      <h3>Key Tools</h3>

      <p>
        The main techniques for computing Galois groups are:
      </p>

      <ol className="list-decimal list-inside space-y-2 my-4 text-dark-300">
        <li>Order constraints from transitivity and degree</li>
        <li>The discriminant (determining containment in <InlineMath>A_n</InlineMath>)</li>
        <li>Reduction modulo primes (Dedekind/Frobenius)</li>
        <li>Resolvent polynomials</li>
        <li>Direct calculation of splitting field degree</li>
      </ol>

      <h3>Transitivity and Order Constraints</h3>

      <div className="bg-dark-800/50 rounded-xl p-6 border border-dark-700 my-6">
        <h4 className="text-primary-400 mb-4">Basic Constraints</h4>
        <p>
          For irreducible <InlineMath>f(x)</InlineMath> of degree <InlineMath>n</InlineMath>:
        </p>
        <ul className="list-disc list-inside space-y-2 mt-3 text-dark-300">
          <li><InlineMath>G = \text{"{Gal}"}(f)</InlineMath> acts transitively on <InlineMath>n</InlineMath> roots</li>
          <li><InlineMath>n \mid |G|</InlineMath></li>
          <li><InlineMath>|G| \mid n!</InlineMath> (since <InlineMath>G \leq S_n</InlineMath>)</li>
          <li><InlineMath>|G| = [K:\mathbb{"{Q}"}]</InlineMath> where <InlineMath>K</InlineMath> is the splitting field</li>
        </ul>
      </div>

      <h3>The Dedekind Theorem</h3>

      <div className="bg-dark-800/50 rounded-xl p-6 border border-dark-700 my-6">
        <h4 className="text-primary-400 mb-4">Theorem (Dedekind)</h4>
        <p>
          Let <InlineMath>f(x) \in \mathbb{"{Z}"}[x]</InlineMath> be monic and <InlineMath>p</InlineMath>
          a prime not dividing the discriminant of <InlineMath>f</InlineMath>. If
          <InlineMath>\bar{"{f}"}(x) \in \mathbb{"{F}"}_p[x]</InlineMath> factors as:
        </p>
        <MathBlock>{`\\bar{f}(x) = \\bar{f}_1(x)\\bar{f}_2(x) \\cdots \\bar{f}_k(x)`}</MathBlock>
        <p className="mt-3">
          with <InlineMath>\bar{"{f}"}_i</InlineMath> irreducible of degree <InlineMath>d_i</InlineMath>,
          then <InlineMath>\text{"{Gal}"}(f)</InlineMath> contains an element with cycle
          type <InlineMath>(d_1, d_2, \ldots, d_k)</InlineMath>.
        </p>
      </div>

      <div className="bg-dark-800 p-4 rounded-lg my-4 border-l-4 border-amber-500">
        <p className="font-semibold text-amber-400">Example: Using Dedekind</p>
        <p className="mt-2">
          Consider <InlineMath>f(x) = x^5 - x + 1</InlineMath>.
        </p>
        <ul className="list-disc list-inside space-y-2 mt-2 text-dark-300">
          <li>Mod 2: <InlineMath>f(x) \equiv x^5 + x + 1 = (x^2+x+1)(x^3+x^2+1)</InlineMath> — cycle type (2,3)</li>
          <li>Mod 3: <InlineMath>f(x)</InlineMath> is irreducible — cycle type (5)</li>
        </ul>
        <p className="mt-2">
          Having a 5-cycle and a (2,3)-element means <InlineMath>G</InlineMath> contains
          both a 5-cycle and a transposition (or product of disjoint cycles generating one).
        </p>
      </div>

      <h3>Transitive Subgroups of S_n</h3>

      <p>
        The classification of transitive subgroups helps narrow possibilities:
      </p>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 my-6">
        <div className="bg-dark-800/50 rounded-xl p-4 border border-dark-700">
          <h4 className="text-emerald-400 font-semibold mb-2">n = 3</h4>
          <p className="text-dark-300 text-sm">
            <InlineMath>S_3</InlineMath> (order 6) or <InlineMath>A_3 \cong \mathbb{"{Z}"}/3</InlineMath> (order 3)
          </p>
        </div>
        <div className="bg-dark-800/50 rounded-xl p-4 border border-dark-700">
          <h4 className="text-blue-400 font-semibold mb-2">n = 4</h4>
          <p className="text-dark-300 text-sm">
            <InlineMath>S_4, A_4, D_4, V_4, \mathbb{"{Z}"}/4</InlineMath>
          </p>
        </div>
        <div className="bg-dark-800/50 rounded-xl p-4 border border-dark-700">
          <h4 className="text-purple-400 font-semibold mb-2">n = 5</h4>
          <p className="text-dark-300 text-sm">
            <InlineMath>S_5, A_5, F_{"{20}"}, D_5, \mathbb{"{Z}"}/5</InlineMath>
          </p>
        </div>
        <div className="bg-dark-800/50 rounded-xl p-4 border border-dark-700">
          <h4 className="text-amber-400 font-semibold mb-2">n = p prime</h4>
          <p className="text-dark-300 text-sm">
            If <InlineMath>G</InlineMath> contains a <InlineMath>p</InlineMath>-cycle and a transposition,
            then <InlineMath>G = S_p</InlineMath>
          </p>
        </div>
      </div>

      <h3>A Useful Criterion</h3>

      <div className="bg-dark-800/50 rounded-xl p-6 border border-dark-700 my-6">
        <h4 className="text-primary-400 mb-4">Theorem</h4>
        <p>
          Let <InlineMath>f(x) \in \mathbb{"{Q}"}[x]</InlineMath> be irreducible of prime
          degree <InlineMath>p</InlineMath>. If <InlineMath>f</InlineMath> has exactly two
          non-real complex roots, then <InlineMath>\text{"{Gal}"}(f) = S_p</InlineMath>.
        </p>
      </div>

      <p>
        <strong>Why:</strong> Complex conjugation gives a transposition in <InlineMath>G</InlineMath>.
        Transitivity gives a <InlineMath>p</InlineMath>-cycle. Together they generate <InlineMath>S_p</InlineMath>.
      </p>

      <div className="bg-dark-800 p-4 rounded-lg my-4 border-l-4 border-blue-500">
        <p className="font-semibold text-blue-400">Example: <InlineMath>f(x) = x^5 - 6x + 3</InlineMath></p>
        <p className="mt-2">
          This is irreducible (Eisenstein at <InlineMath>p = 3</InlineMath>).
        </p>
        <p className="mt-2">
          <InlineMath>f'(x) = 5x^4 - 6 = 0</InlineMath> at <InlineMath>x = \pm(6/5)^{"{1/4}"}</InlineMath>.
        </p>
        <p className="mt-2">
          Checking signs: <InlineMath>f</InlineMath> has exactly 3 real roots.
        </p>
        <p className="mt-2">
          Therefore <InlineMath>f</InlineMath> has 2 complex conjugate roots,
          so <InlineMath>\text{"{Gal}"}(f) = S_5</InlineMath>.
        </p>
      </div>

      <h3>Complete Example</h3>

      <div className="bg-dark-800 p-4 rounded-lg my-4 border-l-4 border-purple-500">
        <p className="font-semibold text-purple-400">Determine <InlineMath>\text{"{Gal}"}(x^4 - 2)</InlineMath></p>
        <p className="mt-2"><strong>Step 1:</strong> Irreducibility</p>
        <p className="text-dark-300">Eisenstein at <InlineMath>p = 2</InlineMath> shows <InlineMath>x^4 - 2</InlineMath> is irreducible.</p>

        <p className="mt-3"><strong>Step 2:</strong> Roots</p>
        <p className="text-dark-300">
          Roots are <InlineMath>\alpha, i\alpha, -\alpha, -i\alpha</InlineMath>
          where <InlineMath>\alpha = \sqrt[4]{"{2}"}</InlineMath> (real).
        </p>

        <p className="mt-3"><strong>Step 3:</strong> Splitting field</p>
        <p className="text-dark-300">
          <InlineMath>K = \mathbb{"{Q}"}(\sqrt[4]{"{2}"}, i)</InlineMath>.
          We have <InlineMath>[\mathbb{"{Q}"}(\sqrt[4]{"{2}"}):\mathbb{"{Q}"}] = 4</InlineMath>
          and <InlineMath>i \notin \mathbb{"{Q}"}(\sqrt[4]{"{2}"}) \subset \mathbb{"{R}"}</InlineMath>,
          so <InlineMath>[K:\mathbb{"{Q}"}] = 8</InlineMath>.
        </p>

        <p className="mt-3"><strong>Step 4:</strong> Discriminant</p>
        <p className="text-dark-300">
          <InlineMath>\Delta = 2^8 \cdot 4^3 / 4^4 = ...</InlineMath> (can check it's not a square).
        </p>

        <p className="mt-3"><strong>Step 5:</strong> Identify the group</p>
        <p className="text-dark-300">
          <InlineMath>|G| = 8</InlineMath>. Transitive subgroups of <InlineMath>S_4</InlineMath>
          of order 8: only <InlineMath>D_4</InlineMath>.
        </p>
        <p className="mt-2">
          Therefore <InlineMath>\text{"{Gal}"}(x^4 - 2) \cong D_4</InlineMath>.
        </p>
      </div>

      <h3>Algorithm Summary</h3>

      <div className="bg-dark-800/50 rounded-xl p-6 border border-dark-700 my-6">
        <h4 className="text-primary-400 mb-4">Computing Galois Groups</h4>
        <ol className="list-decimal list-inside space-y-2 text-dark-300">
          <li>Check irreducibility (Eisenstein, rational root test, etc.)</li>
          <li>Determine <InlineMath>|G|</InlineMath> (splitting field degree)</li>
          <li>Compute discriminant (is <InlineMath>G \subseteq A_n</InlineMath>?)</li>
          <li>Use Dedekind's theorem with several primes</li>
          <li>Count real roots (for prime degree)</li>
          <li>Use resolvents if needed</li>
          <li>Match against transitive subgroups of <InlineMath>S_n</InlineMath></li>
        </ol>
      </div>

      <Callout type="success">
        <strong>Summary:</strong> Computing Galois groups over <InlineMath>\mathbb{"{Q}"}</InlineMath>
        combines multiple techniques: transitivity constraints, discriminant calculations,
        reduction modulo primes (Dedekind), and analysis of resolvents. For prime degree,
        counting complex roots often suffices. The classification of transitive subgroups
        of <InlineMath>S_n</InlineMath> provides the target list. These computational
        methods make Galois theory practical, not just theoretical.
      </Callout>
    </LessonLayout>
  );
}
