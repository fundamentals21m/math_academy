import { LessonLayout } from '@/components/layout/LessonLayout';
import { Definition, Theorem, Example } from '@/components/common/ContentBlocks';
import { InlineMath, MathBlock } from '@/components/common/MathBlock';

export default function Section11() {
  return (
    <LessonLayout sectionId={11}>
      {/* Introduction */}
      <p>
        A <strong>vector space</strong> is a collection of vectors that can be added together and multiplied
        by scalars while staying in the collection. <strong>Subspaces</strong> are vector spaces that live
        inside larger spaces.
      </p>

      <h2>The Definition of a Vector Space</h2>

      <Definition title="Vector Space" className="my-6">
        <p>
          A <strong>vector space</strong> is a set <InlineMath>V</InlineMath> with two operations (addition and scalar
          multiplication) satisfying eight rules:
        </p>
        <ol className="list-decimal list-inside mt-2 space-y-1 text-sm">
          <li><InlineMath>{`\\mathbf{v} + \\mathbf{w} = \\mathbf{w} + \\mathbf{v}`}</InlineMath> (commutative)</li>
          <li><InlineMath>{`(\\mathbf{u} + \\mathbf{v}) + \\mathbf{w} = \\mathbf{u} + (\\mathbf{v} + \\mathbf{w})`}</InlineMath> (associative)</li>
          <li>There exists a <strong>zero vector</strong> <InlineMath>{`\\mathbf{0}`}</InlineMath> with <InlineMath>{`\\mathbf{v} + \\mathbf{0} = \\mathbf{v}`}</InlineMath></li>
          <li>For each <InlineMath>{`\\mathbf{v}`}</InlineMath> there is <InlineMath>{`-\\mathbf{v}`}</InlineMath> with <InlineMath>{`\\mathbf{v} + (-\\mathbf{v}) = \\mathbf{0}`}</InlineMath></li>
          <li><InlineMath>{`1 \\cdot \\mathbf{v} = \\mathbf{v}`}</InlineMath></li>
          <li><InlineMath>{`c(d\\mathbf{v}) = (cd)\\mathbf{v}`}</InlineMath></li>
          <li><InlineMath>{`c(\\mathbf{v} + \\mathbf{w}) = c\\mathbf{v} + c\\mathbf{w}`}</InlineMath></li>
          <li><InlineMath>{`(c + d)\\mathbf{v} = c\\mathbf{v} + d\\mathbf{v}`}</InlineMath></li>
        </ol>
      </Definition>

      <Example title="The Space R^n" className="my-6">
        <p>
          The most important example is <InlineMath>{`\\mathbf{R}^n`}</InlineMath>: all column vectors with <InlineMath>n</InlineMath> real components.
        </p>
        <MathBlock>
          {`\\mathbf{R}^3 = \\left\\{ \\begin{bmatrix} x_1 \\\\ x_2 \\\\ x_3 \\end{bmatrix} : x_1, x_2, x_3 \\in \\mathbf{R} \\right\\}`}
        </MathBlock>
      </Example>

      <h2>Subspaces</h2>

      <Definition title="Subspace" className="my-6">
        <p>
          A <strong>subspace</strong> of a vector space <InlineMath>V</InlineMath> is a nonempty subset <InlineMath>S</InlineMath> that is
          itself a vector space under the same operations. This requires:
        </p>
        <ol className="list-decimal list-inside mt-2 space-y-1">
          <li>If <InlineMath>{`\\mathbf{v}, \\mathbf{w} \\in S`}</InlineMath>, then <InlineMath>{`\\mathbf{v} + \\mathbf{w} \\in S`}</InlineMath> (closed under addition)</li>
          <li>If <InlineMath>{`\\mathbf{v} \\in S`}</InlineMath> and <InlineMath>{`c \\in \\mathbf{R}`}</InlineMath>, then <InlineMath>{`c\\mathbf{v} \\in S`}</InlineMath> (closed under scalar multiplication)</li>
        </ol>
        <p className="mt-2 text-amber-400">
          Key fact: Every subspace must contain the zero vector <InlineMath>{`\\mathbf{0}`}</InlineMath>.
        </p>
      </Definition>

      <Theorem
        title="Subspace Test"
        className="my-6"
        proof={
          <>
            <p><strong>(⟹)</strong> If <InlineMath>S</InlineMath> is a subspace, it's closed under addition and scalar multiplication, so <InlineMath>{`c\\mathbf{v} + d\\mathbf{w} \\in S`}</InlineMath>.</p>
            <p className="mt-2"><strong>(⟸)</strong> Assume linear combinations stay in <InlineMath>S</InlineMath>. Then:</p>
            <p>• <strong>Contains zero:</strong> <InlineMath>{`0\\mathbf{v} = \\mathbf{0} \\in S`}</InlineMath></p>
            <p>• <strong>Closed under addition:</strong> <InlineMath>{`1\\mathbf{v} + 1\\mathbf{w} = \\mathbf{v} + \\mathbf{w} \\in S`}</InlineMath></p>
            <p>• <strong>Closed under scalar mult:</strong> <InlineMath>{`c\\mathbf{v} + 0\\mathbf{w} = c\\mathbf{v} \\in S`}</InlineMath></p>
            <p>All other vector space axioms are inherited from the parent space.</p>
          </>
        }
      >
        <p>
          A subset <InlineMath>S</InlineMath> of a vector space is a subspace if and only if all linear combinations
          <InlineMath>{`c\\mathbf{v} + d\\mathbf{w}`}</InlineMath> stay in <InlineMath>S</InlineMath>.
        </p>
      </Theorem>

      <h2>Subspaces of R^3</h2>

      <div className="bg-dark-800/50 rounded-xl p-4 my-6 border border-primary-500/20">
        <p className="font-semibold text-primary-400 mb-3">The possible subspaces of <InlineMath>{`\\mathbf{R}^3`}</InlineMath>:</p>
        <ul className="space-y-2 text-dark-300">
          <li><strong>(L)</strong> Any line through <InlineMath>(0,0,0)</InlineMath></li>
          <li><strong>(P)</strong> Any plane through <InlineMath>(0,0,0)</InlineMath></li>
          <li><strong>(<InlineMath>{`\\mathbf{R}^3`}</InlineMath>)</strong> The whole space</li>
          <li><strong>(Z)</strong> The single vector <InlineMath>(0,0,0)</InlineMath></li>
        </ul>
      </div>

      <Example title="Not a Subspace" className="my-6">
        <p>
          The quarter-plane (vectors with all positive components) is <strong>not</strong> a subspace.
          If <InlineMath>{`\\mathbf{v} = (2, 3)`}</InlineMath> is in the set, then <InlineMath>{`(-1)\\mathbf{v} = (-2, -3)`}</InlineMath> is not!
        </p>
        <p className="mt-2">
          A plane that does not pass through the origin is also <strong>not</strong> a subspace.
        </p>
      </Example>

      <h2>Column Space and Nullspace</h2>

      <Definition title="Column Space" className="my-6">
        <p>
          The <strong>column space</strong> <InlineMath>C(A)</InlineMath> of a matrix <InlineMath>A</InlineMath> is the set of all
          linear combinations of its columns—all vectors <InlineMath>{`A\\mathbf{x}`}</InlineMath>.
        </p>
        <MathBlock>
          {`C(A) = \\{ A\\mathbf{x} : \\mathbf{x} \\in \\mathbf{R}^n \\}`}
        </MathBlock>
      </Definition>

      <Theorem
        title="Solvability Condition"
        className="my-6"
        proof={
          <>
            <p><strong>(⟹)</strong> If <InlineMath>{`A\\mathbf{x} = \\mathbf{b}`}</InlineMath> has a solution <InlineMath>{`\\mathbf{x}_0`}</InlineMath>, then:</p>
            <MathBlock>{`\\mathbf{b} = A\\mathbf{x}_0 = x_1\\mathbf{a}_1 + x_2\\mathbf{a}_2 + \\cdots + x_n\\mathbf{a}_n`}</MathBlock>
            <p>So <InlineMath>{`\\mathbf{b}`}</InlineMath> is a linear combination of the columns of <InlineMath>A</InlineMath>, hence <InlineMath>{`\\mathbf{b} \\in C(A)`}</InlineMath>.</p>
            <p className="mt-2"><strong>(⟸)</strong> If <InlineMath>{`\\mathbf{b} \\in C(A)`}</InlineMath>, then by definition <InlineMath>{`\\mathbf{b}`}</InlineMath> is a linear combination of the columns. The coefficients of this combination form the solution <InlineMath>{`\\mathbf{x}`}</InlineMath>.</p>
          </>
        }
      >
        <p>
          <InlineMath>{`A\\mathbf{x} = \\mathbf{b}`}</InlineMath> is solvable if and only if <InlineMath>{`\\mathbf{b}`}</InlineMath> is in
          the column space <InlineMath>C(A)</InlineMath>.
        </p>
      </Theorem>

      <h2>Key Ideas</h2>

      <div className="bg-gradient-to-br from-primary-500/10 to-dark-800/50 rounded-xl p-6 my-6 border border-primary-500/20">
        <ul className="space-y-3 text-dark-200">
          <li className="flex items-start gap-3">
            <span className="text-primary-400 font-bold">1.</span>
            <span><InlineMath>{`\\mathbf{R}^n`}</InlineMath> contains all column vectors with <InlineMath>n</InlineMath> components.</span>
          </li>
          <li className="flex items-start gap-3">
            <span className="text-primary-400 font-bold">2.</span>
            <span>A subspace must be closed under addition and scalar multiplication (and contain <InlineMath>{`\\mathbf{0}`}</InlineMath>).</span>
          </li>
          <li className="flex items-start gap-3">
            <span className="text-primary-400 font-bold">3.</span>
            <span>The column space <InlineMath>C(A)</InlineMath> = all combinations of columns = all vectors <InlineMath>{`A\\mathbf{x}`}</InlineMath>.</span>
          </li>
          <li className="flex items-start gap-3">
            <span className="text-primary-400 font-bold">4.</span>
            <span><InlineMath>{`A\\mathbf{x} = \\mathbf{b}`}</InlineMath> is solvable exactly when <InlineMath>{`\\mathbf{b}`}</InlineMath> is in <InlineMath>C(A)</InlineMath>.</span>
          </li>
        </ul>
      </div>
    </LessonLayout>
  );
}
