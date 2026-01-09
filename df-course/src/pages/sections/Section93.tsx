import { LessonLayout } from '@/components/layout/LessonLayout';
import { Callout } from '@/components/common/Callout';
import { MathBlock, InlineMath } from '@/components/common/MathBlock';

export default function Section93() {
  return (
    <LessonLayout sectionId={93}>
      <h2>Theorems of Burnside and Hall</h2>
      <p>
        Character theory yields powerful structural results about finite groups.
        <strong> Burnside's theorem</strong> on solvability of groups of order <InlineMath>p^a q^b</InlineMath>
        and <strong>Hall's theorems</strong> on subgroups are crown jewels of finite group
        theory, demonstrating the interplay between representation theory and group structure.
      </p>

      <Callout type="info">
        <strong>Applications of Characters:</strong> These theorems show that character
        theory is not just computational but reveals deep structural properties of groups
        that are difficult to establish by other means.
      </Callout>

      <h3>Burnside's p^a q^b Theorem</h3>

      <div className="bg-dark-800/50 rounded-xl p-6 border border-dark-700 my-6">
        <h4 className="text-primary-400 mb-4">Theorem (Burnside, 1904)</h4>
        <p>
          If <InlineMath>|G| = p^a q^b</InlineMath> for primes <InlineMath>p, q</InlineMath>,
          then <InlineMath>G</InlineMath> is solvable.
        </p>
      </div>

      <Callout type="warning">
        <strong>Historical Note:</strong> Burnside's original proof used character theory.
        A purely group-theoretic proof wasn't found until Goldschmidt (1970) and
        independently by Bender, Matsuyama and others. The character-theoretic proof
        remains more elegant.
      </Callout>

      <h3>Key Lemma: Burnside's Lemma on Characters</h3>

      <div className="bg-dark-800/50 rounded-xl p-6 border border-dark-700 my-6">
        <h4 className="text-primary-400 mb-4">Lemma</h4>
        <p>
          Let <InlineMath>\chi</InlineMath> be an irreducible character of <InlineMath>G</InlineMath>,
          and let <InlineMath>C</InlineMath> be a conjugacy class with <InlineMath>|C|</InlineMath>
          coprime to <InlineMath>\chi(1)</InlineMath>. Then for any <InlineMath>g \in C</InlineMath>,
          either:
        </p>
        <ul className="list-disc list-inside space-y-2 mt-3 text-dark-300">
          <li><InlineMath>|\chi(g)| = \chi(1)</InlineMath> (so <InlineMath>\chi(g) = \zeta \cdot \chi(1)</InlineMath>
            for some root of unity <InlineMath>\zeta</InlineMath>), or</li>
          <li><InlineMath>\chi(g) = 0</InlineMath></li>
        </ul>
      </div>

      <h3>Proof Strategy for Burnside's Theorem</h3>

      <div className="bg-dark-800 p-4 rounded-lg my-4 border-l-4 border-blue-500">
        <p className="font-semibold text-blue-400">Outline</p>
        <ol className="list-decimal list-inside space-y-2 mt-2 text-dark-300">
          <li>If <InlineMath>G</InlineMath> has a proper non-trivial normal subgroup, use induction.</li>
          <li>Otherwise, <InlineMath>G</InlineMath> is simple with <InlineMath>|G| = p^a q^b</InlineMath>.</li>
          <li>By Sylow theory, there exists a conjugacy class of size <InlineMath>p^k</InlineMath>
            for some <InlineMath>k \geq 1</InlineMath>.</li>
          <li>Apply the lemma to show the corresponding element is in the center.</li>
          <li>This contradicts simplicity unless <InlineMath>G</InlineMath> is abelian (hence solvable).</li>
        </ol>
      </div>

      <h3>Hall Subgroups</h3>

      <div className="bg-dark-800/50 rounded-xl p-6 border border-dark-700 my-6">
        <h4 className="text-primary-400 mb-4">Definition</h4>
        <p>
          A subgroup <InlineMath>H \leq G</InlineMath> is a <strong>Hall subgroup</strong>
          if <InlineMath>\gcd(|H|, [G:H]) = 1</InlineMath>.
        </p>
        <p className="mt-3">
          A <strong>Hall <InlineMath>\pi</InlineMath>-subgroup</strong> (for a set of primes <InlineMath>\pi</InlineMath>)
          is a Hall subgroup whose order involves only primes in <InlineMath>\pi</InlineMath>.
        </p>
      </div>

      <div className="bg-dark-800 p-4 rounded-lg my-4 border-l-4 border-amber-500">
        <p className="font-semibold text-amber-400">Examples</p>
        <ul className="list-disc list-inside space-y-2 mt-2 text-dark-300">
          <li>Sylow <InlineMath>p</InlineMath>-subgroups are Hall <InlineMath>\{"{p}"}\</InlineMath>-subgroups</li>
          <li>In <InlineMath>S_3</InlineMath>: subgroups of order 2 and 3 are Hall subgroups</li>
          <li>In <InlineMath>A_5</InlineMath>: no Hall <InlineMath>\{"{2,3}"}\</InlineMath>-subgroup exists
            (would have order 12, but <InlineMath>A_5</InlineMath> has none)</li>
        </ul>
      </div>

      <h3>Hall's Theorems</h3>

      <div className="bg-dark-800/50 rounded-xl p-6 border border-dark-700 my-6">
        <h4 className="text-primary-400 mb-4">Theorem (Philip Hall, 1928)</h4>
        <p>
          Let <InlineMath>G</InlineMath> be a finite <strong>solvable</strong> group
          and <InlineMath>\pi</InlineMath> a set of primes. Then:
        </p>
        <ol className="list-decimal list-inside space-y-2 mt-3 text-dark-300">
          <li><strong>Existence:</strong> <InlineMath>G</InlineMath> has a Hall <InlineMath>\pi</InlineMath>-subgroup</li>
          <li><strong>Conjugacy:</strong> Any two Hall <InlineMath>\pi</InlineMath>-subgroups are conjugate</li>
          <li><strong>Covering:</strong> Any <InlineMath>\pi</InlineMath>-subgroup is contained in
            a Hall <InlineMath>\pi</InlineMath>-subgroup</li>
        </ol>
      </div>

      <Callout type="info">
        <strong>Comparison with Sylow:</strong> Hall's theorem generalizes Sylow theorems
        from single primes to sets of primes, but requires solvability. For non-solvable
        groups, Hall subgroups may not exist.
      </Callout>

      <h3>Converse to Hall's Theorem</h3>

      <div className="bg-dark-800/50 rounded-xl p-6 border border-dark-700 my-6">
        <h4 className="text-primary-400 mb-4">Theorem</h4>
        <p>
          If for every set of primes <InlineMath>\pi</InlineMath>, the group <InlineMath>G</InlineMath>
          has a Hall <InlineMath>\pi</InlineMath>-subgroup, then <InlineMath>G</InlineMath> is solvable.
        </p>
      </div>

      <h3>The Schur-Zassenhaus Theorem</h3>

      <div className="bg-dark-800/50 rounded-xl p-6 border border-dark-700 my-6">
        <h4 className="text-primary-400 mb-4">Theorem</h4>
        <p>
          Let <InlineMath>N \trianglelefteq G</InlineMath> with <InlineMath>\gcd(|N|, [G:N]) = 1</InlineMath>. Then:
        </p>
        <ol className="list-decimal list-inside space-y-2 mt-3 text-dark-300">
          <li><InlineMath>G</InlineMath> splits over <InlineMath>N</InlineMath>:
            <InlineMath>G = N \rtimes H</InlineMath> for some complement <InlineMath>H</InlineMath></li>
          <li>If <InlineMath>N</InlineMath> or <InlineMath>G/N</InlineMath> is solvable, all complements are conjugate</li>
        </ol>
      </div>

      <h3>Applications</h3>

      <div className="bg-dark-800 p-4 rounded-lg my-4 border-l-4 border-emerald-500">
        <p className="font-semibold text-emerald-400">Corollaries of Burnside's Theorem</p>
        <ul className="list-disc list-inside space-y-2 mt-2 text-dark-300">
          <li>Groups of order <InlineMath>p^2 q</InlineMath> are solvable</li>
          <li>Groups of order <InlineMath>pqr</InlineMath> (distinct primes) are solvable</li>
          <li>Non-abelian simple groups have order divisible by at least 3 distinct primes</li>
        </ul>
      </div>

      <div className="bg-dark-800 p-4 rounded-lg my-4 border-l-4 border-purple-500">
        <p className="font-semibold text-purple-400">Structure of Solvable Groups</p>
        <p className="mt-2">
          Hall's theorem gives a "Sylow theory" for solvable groups that controls
          all prime divisors simultaneously, making the structure of solvable groups
          much more accessible than arbitrary finite groups.
        </p>
      </div>

      <Callout type="success">
        <strong>Summary:</strong> Burnside's <InlineMath>p^a q^b</InlineMath> theorem
        shows groups with only two prime divisors are solvable, proved elegantly using
        character theory. Hall's theorems extend Sylow theory to solvable groups,
        guaranteeing Hall <InlineMath>\pi</InlineMath>-subgroups exist and are conjugate.
        The Schur-Zassenhaus theorem guarantees splitting of normal subgroups when
        the order is coprime to the index. These results reveal the special structure
        of solvable groups.
      </Callout>
    </LessonLayout>
  );
}
