import { LessonLayout } from '@/components/layout/LessonLayout';
import { Callout } from '@/components/common/Callout';
import { MathBlock, InlineMath } from '@/components/common/MathBlock';

export default function Section74() {
  return (
    <LessonLayout sectionId={74}>
      <h2>Solvable and Radical Extensions</h2>
      <p>
        A polynomial is <strong>solvable by radicals</strong> if its roots can be expressed
        using only arithmetic operations and <InlineMath>n</InlineMath>-th roots. Galois's
        profound insight was that this happens precisely when the Galois group is
        <strong> solvable</strong>. This leads to the famous proof that the general quintic
        cannot be solved by radicals.
      </p>

      <Callout type="info">
        <strong>Historical Significance:</strong> This is one of the crown jewels of algebra.
        For centuries, mathematicians sought formulas for polynomial roots. Galois theory
        explains exactly when such formulas exist and why they fail for degree 5 and higher.
      </Callout>

      <h3>Radical Extensions</h3>

      <div className="bg-dark-800/50 rounded-xl p-6 border border-dark-700 my-6">
        <h4 className="text-primary-400 mb-4">Definition: Simple Radical Extension</h4>
        <p>
          An extension <InlineMath>K/F</InlineMath> is a <strong>simple radical extension</strong>
          if <InlineMath>K = F(\alpha)</InlineMath> where <InlineMath>\alpha^n \in F</InlineMath>
          for some <InlineMath>n \geq 1</InlineMath>.
        </p>
      </div>

      <div className="bg-dark-800/50 rounded-xl p-6 border border-dark-700 my-6">
        <h4 className="text-primary-400 mb-4">Definition: Radical Extension</h4>
        <p>
          An extension <InlineMath>K/F</InlineMath> is a <strong>radical extension</strong>
          if there exists a tower:
        </p>
        <MathBlock>{`F = K_0 \\subseteq K_1 \\subseteq K_2 \\subseteq \\cdots \\subseteq K_m = K`}</MathBlock>
        <p className="mt-3">
          where each <InlineMath>K_{"{i+1}"}/K_i</InlineMath> is a simple radical extension.
        </p>
      </div>

      <div className="bg-dark-800/50 rounded-xl p-6 border border-dark-700 my-6">
        <h4 className="text-primary-400 mb-4">Definition: Solvable by Radicals</h4>
        <p>
          A polynomial <InlineMath>f(x) \in F[x]</InlineMath> is <strong>solvable by radicals</strong>
          over <InlineMath>F</InlineMath> if there exists a radical extension <InlineMath>K/F</InlineMath>
          containing all roots of <InlineMath>f</InlineMath>.
        </p>
      </div>

      <div className="bg-dark-800 p-4 rounded-lg my-4 border-l-4 border-amber-500">
        <p className="font-semibold text-amber-400">Example: The Quadratic Formula</p>
        <p className="mt-2">
          For <InlineMath>f(x) = x^2 + bx + c</InlineMath>:
        </p>
        <MathBlock>{`x = \\frac{-b \\pm \\sqrt{b^2 - 4c}}{2}`}</MathBlock>
        <p className="mt-2">
          The roots lie in the radical extension <InlineMath>\mathbb{"{Q}"}(\sqrt{"{b^2-4c}"})</InlineMath>.
        </p>
      </div>

      <h3>Solvable Groups</h3>

      <div className="bg-dark-800/50 rounded-xl p-6 border border-dark-700 my-6">
        <h4 className="text-primary-400 mb-4">Definition: Solvable Group</h4>
        <p>
          A group <InlineMath>G</InlineMath> is <strong>solvable</strong> if there exists a chain of subgroups:
        </p>
        <MathBlock>{`\\{1\\} = G_0 \\trianglelefteq G_1 \\trianglelefteq G_2 \\trianglelefteq \\cdots \\trianglelefteq G_n = G`}</MathBlock>
        <p className="mt-3">
          where each quotient <InlineMath>G_{"{i+1}"}/G_i</InlineMath> is abelian.
        </p>
      </div>

      <div className="bg-dark-800 p-4 rounded-lg my-4 border-l-4 border-emerald-500">
        <p className="font-semibold text-emerald-400">Examples of Solvable Groups</p>
        <ul className="list-disc list-inside space-y-2 mt-2 text-dark-300">
          <li>All abelian groups (trivially)</li>
          <li><InlineMath>S_3</InlineMath>: <InlineMath>{`\\{1\\} \\trianglelefteq A_3 \\trianglelefteq S_3`}</InlineMath>
            with <InlineMath>{`A_3/\\{1\\} \\cong \\mathbb{Z}/3`}</InlineMath>
            and <InlineMath>{`S_3/A_3 \\cong \\mathbb{Z}/2`}</InlineMath></li>
          <li><InlineMath>S_4</InlineMath>: <InlineMath>{`\\{1\\} \\trianglelefteq V_4 \\trianglelefteq A_4 \\trianglelefteq S_4`}</InlineMath></li>
          <li>All <InlineMath>p</InlineMath>-groups (groups of prime power order)</li>
        </ul>
      </div>

      <div className="bg-dark-800 p-4 rounded-lg my-4 border-l-4 border-red-500">
        <p className="font-semibold text-red-400">Non-Solvable Groups</p>
        <p className="mt-2">
          <InlineMath>A_5</InlineMath> is the smallest non-abelian simple group. Since it has
          no proper normal subgroups except <InlineMath>{`\\{1\\}`}</InlineMath>, it cannot have
          a composition series with abelian quotients.
        </p>
        <p className="mt-2">
          Therefore <InlineMath>S_5</InlineMath> is not solvable (it contains <InlineMath>A_5</InlineMath>).
        </p>
        <p className="mt-2">
          Similarly, <InlineMath>A_n</InlineMath> and <InlineMath>S_n</InlineMath> are not solvable
          for <InlineMath>n \geq 5</InlineMath>.
        </p>
      </div>

      <h3>The Main Theorem</h3>

      <div className="bg-dark-800/50 rounded-xl p-6 border border-dark-700 my-6">
        <h4 className="text-primary-400 mb-4">Galois's Theorem</h4>
        <p>
          Let <InlineMath>f(x) \in F[x]</InlineMath> be a polynomial over a field <InlineMath>F</InlineMath>
          of characteristic 0. Then <InlineMath>f</InlineMath> is solvable by radicals if and only
          if its Galois group <InlineMath>\text{"{Gal}"}(f)</InlineMath> is a solvable group.
        </p>
      </div>

      <h3>Proof Sketch</h3>

      <p>
        The proof has two directions:
      </p>

      <div className="bg-dark-800 p-4 rounded-lg my-4 border-l-4 border-blue-500">
        <p className="font-semibold text-blue-400">Solvable by radicals implies solvable group</p>
        <ol className="list-decimal list-inside space-y-2 mt-2 text-dark-300">
          <li>Adding an <InlineMath>n</InlineMath>-th root of unity gives a cyclic Galois group
            (or abelian if we add all primitive roots)</li>
          <li>Taking an <InlineMath>n</InlineMath>-th root of an element gives a cyclic extension
            when roots of unity are present (Kummer theory)</li>
          <li>Composing these corresponds to taking quotients by normal subgroups with cyclic quotients</li>
        </ol>
      </div>

      <div className="bg-dark-800 p-4 rounded-lg my-4 border-l-4 border-purple-500">
        <p className="font-semibold text-purple-400">Solvable group implies solvable by radicals</p>
        <ol className="list-decimal list-inside space-y-2 mt-2 text-dark-300">
          <li>A solvable group has a composition series with cyclic quotients (of prime order)</li>
          <li>Each cyclic quotient corresponds to adjoining a root of unity and then a prime root</li>
          <li>Thus we can build the splitting field using only radical extensions</li>
        </ol>
      </div>

      <h3>Insolvability of the Quintic</h3>

      <div className="bg-dark-800/50 rounded-xl p-6 border border-dark-700 my-6">
        <h4 className="text-primary-400 mb-4">Theorem (Abel-Ruffini)</h4>
        <p>
          There is no general formula in radicals for the roots of polynomials of degree 5 or higher.
        </p>
      </div>

      <div className="bg-dark-800/50 rounded-xl p-6 border border-dark-700 my-6">
        <h4 className="text-primary-400 mb-4">Galois's Proof</h4>
        <ol className="list-decimal list-inside space-y-3 text-dark-300">
          <li>The "generic" polynomial of degree <InlineMath>n</InlineMath> over <InlineMath>\mathbb{"{Q}"}</InlineMath>
            has Galois group <InlineMath>S_n</InlineMath></li>
          <li><InlineMath>S_n</InlineMath> is not solvable for <InlineMath>n \geq 5</InlineMath>
            (since <InlineMath>A_n</InlineMath> is simple for <InlineMath>n \geq 5</InlineMath>)</li>
          <li>By Galois's theorem, such polynomials are not solvable by radicals</li>
        </ol>
      </div>

      <div className="bg-dark-800 p-4 rounded-lg my-4 border-l-4 border-red-500">
        <p className="font-semibold text-red-400">Explicit Example</p>
        <p className="mt-2">
          The polynomial <InlineMath>f(x) = x^5 - 6x + 3 \in \mathbb{"{Q}"}[x]</InlineMath> is irreducible
          (Eisenstein with <InlineMath>p = 3</InlineMath>) and has Galois group <InlineMath>S_5</InlineMath>.
        </p>
        <p className="mt-2">
          Since <InlineMath>S_5</InlineMath> is not solvable, this polynomial's roots cannot be
          expressed using radicals, no matter how complex a formula we attempt.
        </p>
      </div>

      <Callout type="warning">
        <strong>Important clarification:</strong> The theorem says there's no <em>general</em> formula.
        Specific quintics may still be solvable. For example, <InlineMath>x^5 - 2</InlineMath>
        has Galois group <InlineMath>F_{"{20}"}</InlineMath> (Frobenius group of order 20),
        which IS solvable, so its roots can be expressed using radicals.
      </Callout>

      <h3>Which Polynomials Are Solvable?</h3>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 my-6">
        <div className="bg-dark-800/50 rounded-xl p-4 border border-dark-700">
          <h4 className="text-emerald-400 font-semibold mb-2">Always Solvable</h4>
          <ul className="list-disc list-inside text-dark-300 text-sm">
            <li>Degree 2, 3, or 4 polynomials</li>
            <li>Polynomials with abelian Galois groups</li>
            <li><InlineMath>x^n - a</InlineMath> (any <InlineMath>n</InlineMath>)</li>
            <li>Cyclotomic polynomials</li>
          </ul>
        </div>
        <div className="bg-dark-800/50 rounded-xl p-4 border border-dark-700">
          <h4 className="text-red-400 font-semibold mb-2">May Be Unsolvable</h4>
          <ul className="list-disc list-inside text-dark-300 text-sm">
            <li>Degree <InlineMath>\geq 5</InlineMath> with <InlineMath>S_n</InlineMath> or <InlineMath>A_n</InlineMath> Galois group</li>
            <li>Generic polynomials of degree <InlineMath>\geq 5</InlineMath></li>
          </ul>
        </div>
      </div>

      <Callout type="success">
        <strong>Summary:</strong> A polynomial is solvable by radicals iff its Galois group
        is solvable (has a composition series with abelian quotients). Since <InlineMath>S_n</InlineMath>
        is not solvable for <InlineMath>n \geq 5</InlineMath>, the general quintic and higher-degree
        polynomials cannot be solved by radicals. This is Galois's crowning achievement: transforming
        the ancient problem of solving equations into the modern theory of groups.
      </Callout>
    </LessonLayout>
  );
}
