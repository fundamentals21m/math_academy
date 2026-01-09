import { LessonLayout } from '@/components/layout/LessonLayout';
import { Callout } from '@/components/common/Callout';
import { MathBlock, InlineMath } from '@/components/common/MathBlock';

export default function Section79() {
  return (
    <LessonLayout sectionId={79}>
      <h2>Hilbert's Nullstellensatz</h2>
      <p>
        <strong>Hilbert's Nullstellensatz</strong> ("theorem of zeros") is the fundamental
        theorem connecting algebra and geometry. It establishes a perfect correspondence
        between radical ideals and algebraic sets over algebraically closed fields,
        and characterizes when polynomial systems have solutions.
      </p>

      <Callout type="info">
        <strong>Central Theorem:</strong> The Nullstellensatz is THE bridge between
        commutative algebra and algebraic geometry. It tells us exactly how ideals
        and varieties correspond.
      </Callout>

      <h3>Statement of the Nullstellensatz</h3>

      <div className="bg-dark-800/50 rounded-xl p-6 border border-dark-700 my-6">
        <h4 className="text-primary-400 mb-4">Weak Nullstellensatz</h4>
        <p>
          Let <InlineMath>k</InlineMath> be an algebraically closed field
          and <InlineMath>I \subsetneq k[x_1, \ldots, x_n]</InlineMath> a proper ideal. Then:
        </p>
        <MathBlock>{`V(I) \\neq \\emptyset`}</MathBlock>
        <p className="mt-3">
          That is, any proper ideal has at least one common zero.
        </p>
      </div>

      <Callout type="warning">
        <strong>Algebraically closed is essential!</strong> Over <InlineMath>\mathbb{"{R}"}</InlineMath>,
        the ideal <InlineMath>(x^2 + 1)</InlineMath> is proper but <InlineMath>V(x^2 + 1) = \emptyset</InlineMath>.
      </Callout>

      <div className="bg-dark-800/50 rounded-xl p-6 border border-dark-700 my-6">
        <h4 className="text-primary-400 mb-4">Strong Nullstellensatz</h4>
        <p>
          Let <InlineMath>k</InlineMath> be algebraically closed. For any
          ideal <InlineMath>I \subseteq k[x_1, \ldots, x_n]</InlineMath>:
        </p>
        <MathBlock>{`I(V(I)) = \\sqrt{I}`}</MathBlock>
      </div>

      <p>
        This is the precise statement: the ideal of the zero set equals the radical.
      </p>

      <h3>Equivalent Formulations</h3>

      <div className="bg-dark-800/50 rounded-xl p-6 border border-dark-700 my-6">
        <h4 className="text-primary-400 mb-4">Rabinowitsch Trick Formulation</h4>
        <p>
          Let <InlineMath>I = (f_1, \ldots, f_m)</InlineMath>
          and <InlineMath>g \in k[x_1, \ldots, x_n]</InlineMath>.
        </p>
        <p className="mt-3">
          Then <InlineMath>g \in \sqrt{"{I}"}</InlineMath> if and only
          if <InlineMath>1 \in (f_1, \ldots, f_m, 1 - yg)</InlineMath>
          in <InlineMath>k[x_1, \ldots, x_n, y]</InlineMath>.
        </p>
      </div>

      <div className="bg-dark-800/50 rounded-xl p-6 border border-dark-700 my-6">
        <h4 className="text-primary-400 mb-4">Maximal Ideal Formulation</h4>
        <p>
          If <InlineMath>k</InlineMath> is algebraically closed, every maximal ideal
          of <InlineMath>k[x_1, \ldots, x_n]</InlineMath> has the form:
        </p>
        <MathBlock>{`\\mathfrak{m}_a = (x_1 - a_1, x_2 - a_2, \\ldots, x_n - a_n)`}</MathBlock>
        <p className="mt-3">
          for some point <InlineMath>a = (a_1, \ldots, a_n) \in k^n</InlineMath>.
        </p>
      </div>

      <h3>The Galois Correspondence for Varieties</h3>

      <p>
        Over an algebraically closed field, we get a perfect correspondence:
      </p>

      <div className="bg-dark-800/50 rounded-xl p-6 border border-dark-700 my-6">
        <h4 className="text-primary-400 mb-4">Theorem: Bijection</h4>
        <p>
          There is an inclusion-reversing bijection:
        </p>
        <MathBlock>{`\\{\\text{radical ideals in } k[x_1, \\ldots, x_n]\\} \\longleftrightarrow \\{\\text{algebraic sets in } k^n\\}`}</MathBlock>
        <p className="mt-3">
          given by <InlineMath>I \mapsto V(I)</InlineMath> and <InlineMath>X \mapsto I(X)</InlineMath>.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 my-6">
        <div className="bg-dark-800/50 rounded-xl p-4 border border-dark-700">
          <h4 className="text-emerald-400 font-semibold mb-2">Algebraic Side</h4>
          <ul className="list-disc list-inside text-dark-300 text-sm space-y-1">
            <li>Radical ideals</li>
            <li>Prime ideals</li>
            <li>Maximal ideals</li>
            <li>Ideal intersection</li>
            <li>Ideal sum</li>
          </ul>
        </div>
        <div className="bg-dark-800/50 rounded-xl p-4 border border-dark-700">
          <h4 className="text-blue-400 font-semibold mb-2">Geometric Side</h4>
          <ul className="list-disc list-inside text-dark-300 text-sm space-y-1">
            <li>Algebraic sets</li>
            <li>Irreducible varieties</li>
            <li>Points</li>
            <li>Union of sets</li>
            <li>Intersection of sets</li>
          </ul>
        </div>
      </div>

      <h3>Applications</h3>

      <div className="bg-dark-800 p-4 rounded-lg my-4 border-l-4 border-amber-500">
        <p className="font-semibold text-amber-400">Application 1: Solving Systems</p>
        <p className="mt-2">
          A system <InlineMath>f_1 = \cdots = f_m = 0</InlineMath> over <InlineMath>k = \bar{"{k}"}</InlineMath>
          has a solution iff <InlineMath>(f_1, \ldots, f_m) \neq (1)</InlineMath>.
        </p>
        <p className="mt-2">
          This is checkable algorithmically via Grobner bases!
        </p>
      </div>

      <div className="bg-dark-800 p-4 rounded-lg my-4 border-l-4 border-blue-500">
        <p className="font-semibold text-blue-400">Application 2: Ideal Membership</p>
        <p className="mt-2">
          <InlineMath>g \in \sqrt{"{(f_1, \\ldots, f_m)}"}</InlineMath> iff <InlineMath>g</InlineMath>
          vanishes wherever all <InlineMath>f_i</InlineMath> vanish.
        </p>
        <p className="mt-2">
          Equivalently: <InlineMath>g^N = \sum h_i f_i</InlineMath> for some <InlineMath>N</InlineMath>
          and polynomials <InlineMath>h_i</InlineMath>.
        </p>
      </div>

      <div className="bg-dark-800 p-4 rounded-lg my-4 border-l-4 border-purple-500">
        <p className="font-semibold text-purple-400">Application 3: Coordinate Ring Structure</p>
        <p className="mt-2">
          For a variety <InlineMath>X</InlineMath>, the coordinate
          ring <InlineMath>k[X] = k[x_1, \ldots, x_n]/I(X)</InlineMath> is reduced (no nilpotents).
        </p>
        <p className="mt-2">
          Prime spectrum: <InlineMath>\text{"{Spec}"}(k[X])</InlineMath> corresponds to irreducible
          subvarieties of <InlineMath>X</InlineMath>.
        </p>
      </div>

      <h3>Proof Sketch</h3>

      <div className="bg-dark-800/50 rounded-xl p-6 border border-dark-700 my-6">
        <h4 className="text-primary-400 mb-4">Key Steps</h4>
        <ol className="list-decimal list-inside space-y-3 text-dark-300">
          <li><strong>Zariski's Lemma:</strong> If <InlineMath>K/k</InlineMath> is a finitely
            generated <InlineMath>k</InlineMath>-algebra that is a field, then <InlineMath>K/k</InlineMath>
            is algebraic (hence <InlineMath>K = k</InlineMath> if <InlineMath>k</InlineMath> is algebraically closed).</li>
          <li><strong>Weak form:</strong> Use Zariski's Lemma to show proper ideals have zeros.</li>
          <li><strong>Rabinowitsch trick:</strong> Reduce strong form to weak form by introducing
            a new variable.</li>
        </ol>
      </div>

      <h3>The Effective Nullstellensatz</h3>

      <div className="bg-dark-800/50 rounded-xl p-6 border border-dark-700 my-6">
        <h4 className="text-primary-400 mb-4">Theorem (Effective Version)</h4>
        <p>
          If <InlineMath>f \in \sqrt{"{(f_1, \\ldots, f_m)}"}</InlineMath>
          with <InlineMath>\deg f_i \leq d</InlineMath>, then:
        </p>
        <MathBlock>{`f^N = \\sum_{i=1}^m h_i f_i`}</MathBlock>
        <p className="mt-3">
          where <InlineMath>N \leq d^n</InlineMath> and <InlineMath>\deg h_i \leq d^n</InlineMath>
          can be bounded explicitly.
        </p>
      </div>

      <Callout type="success">
        <strong>Summary:</strong> The Nullstellensatz establishes that over algebraically
        closed fields, radical ideals correspond bijectively to algebraic sets via
        <InlineMath>I(V(I)) = \sqrt{"{I}"}</InlineMath>. The weak form says proper ideals
        have zeros; the strong form gives the exact correspondence. This theorem is the
        foundation of algebraic geometry, enabling the translation of geometric problems
        into algebraic ones and vice versa.
      </Callout>
    </LessonLayout>
  );
}
