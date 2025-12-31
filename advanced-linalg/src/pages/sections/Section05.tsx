import { LessonLayout } from '@/components/layout/LessonLayout';
import { Definition, Theorem, Example } from '@/components/common/ContentBlocks';
import { Callout } from '@/components/common/Callout';
import { Math, MathBlock } from '@/components/common/MathBlock';
import { SectionQuiz } from '@/components/quiz/SectionQuiz';
import { section05Quiz } from '@/data/quizzes';

export default function Section05() {
  return (
    <LessonLayout sectionId={5}>
      <h2>Linear Transformations: Structure-Preserving Maps</h2>

      <p>
        A <strong>linear transformation</strong> is a function between vector spaces that respects
        the vector space structure — it preserves addition and scalar multiplication. These are
        the "natural" functions in linear algebra, and understanding them is central to the subject.
      </p>

      <Callout type="info">
        <strong>The Central Idea:</strong> Linear transformations are completely determined by their
        action on a basis. If you know what <Math>T</Math> does to each basis vector, you know
        everything about <Math>T</Math>.
      </Callout>

      <h2>Definition and Basic Properties</h2>

      <Definition title="Linear Transformation">
        <p>
          A function <Math>T: V \to W</Math> between vector spaces over the same field <Math>F</Math>
          is a <strong>linear transformation</strong> (or <strong>linear map</strong>) if for all
          <Math>u, v \in V</Math> and <Math>c \in F</Math>:
        </p>
        <ol className="list-decimal list-inside text-dark-300 mt-2">
          <li><strong>Additivity:</strong> <Math>T(u + v) = T(u) + T(v)</Math></li>
          <li><strong>Homogeneity:</strong> <Math>T(cv) = cT(v)</Math></li>
        </ol>
        <p className="mt-2">
          Equivalently: <Math>T(au + bv) = aT(u) + bT(v)</Math> for all <Math>a, b \in F</Math>.
        </p>
      </Definition>

      <Example title="Geometric Transformations">
        <p>In <Math>{`\\mathbb{R}`}^2</Math>, the following are linear transformations:</p>
        <ul className="list-disc list-inside text-dark-300 mt-2 space-y-2">
          <li><strong>Rotation by angle <Math>\theta</Math>:</strong> <Math>R_\theta(x, y) = (x\cos\theta - y\sin\theta, x\sin\theta + y\cos\theta)</Math></li>
          <li><strong>Reflection across x-axis:</strong> <Math>T(x, y) = (x, -y)</Math></li>
          <li><strong>Projection onto x-axis:</strong> <Math>P(x, y) = (x, 0)</Math></li>
          <li><strong>Scaling by factor <Math>k</Math>:</strong> <Math>S(x, y) = (kx, ky)</Math></li>
        </ul>
      </Example>

      <Example title="Differential Operator">
        <p>
          The derivative <Math>D: P_n({`\\mathbb{R}`}) \to P_{'{n-1}'}({`\\mathbb{R}`})</Math> defined by
          <Math>D(p) = p'</Math> is linear:
        </p>
        <MathBlock>{`D(p + q) = (p + q)' = p' + q' = D(p) + D(q)`}</MathBlock>
        <MathBlock>{`D(cp) = (cp)' = cp' = cD(p)`}</MathBlock>
      </Example>

      <Example title="Integration">
        <p>
          The integral <Math>I: \mathcal{'{C}'}[0, 1] \to {`\\mathbb{R}`}</Math> defined by
          <Math>I(f) = \int_0^1 f(x)\, dx</Math> is linear by properties of integrals.
        </p>
      </Example>

      <h2>Kernel and Image</h2>

      <Definition title="Kernel (Null Space)">
        <p>
          The <strong>kernel</strong> (or <strong>null space</strong>) of <Math>T: V \to W</Math> is:
        </p>
        <MathBlock>{`\\ker(T) = \\{v \\in V : T(v) = \\mathbf{0}\\}`}</MathBlock>
        <p>It consists of all vectors that <Math>T</Math> maps to zero.</p>
      </Definition>

      <Definition title="Image (Range)">
        <p>
          The <strong>image</strong> (or <strong>range</strong>) of <Math>T: V \to W</Math> is:
        </p>
        <MathBlock>{`\\text{im}(T) = \\{T(v) : v \\in V\\} = \\{w \\in W : w = T(v) \\text{ for some } v\\}`}</MathBlock>
        <p>It consists of all vectors that <Math>T</Math> can "hit".</p>
      </Definition>

      <Theorem
        title="Kernel and Image are Subspaces"
        proof={
          <>
            <p><strong>Kernel:</strong></p>
            <ul className="list-disc list-inside text-dark-300 space-y-1">
              <li><Math>T({`\\mathbf{0}`}) = T(0 \cdot {`\\mathbf{0}`}) = 0 \cdot T({`\\mathbf{0}`}) = {`\\mathbf{0}`}</Math>, so <Math>{`\\mathbf{0}`} \in \ker(T)</Math></li>
              <li>If <Math>u, v \in \ker(T)</Math>: <Math>T(u + v) = T(u) + T(v) = {`\\mathbf{0}`}</Math></li>
              <li>If <Math>u \in \ker(T)</Math>: <Math>T(cu) = cT(u) = c \cdot {`\\mathbf{0}`} = {`\\mathbf{0}`}</Math></li>
            </ul>
            <p className="mt-2"><strong>Image:</strong></p>
            <ul className="list-disc list-inside text-dark-300 space-y-1">
              <li><Math>{`\\mathbf{0}`} = T({`\\mathbf{0}`}) \in {`\\text{im}`}(T)</Math></li>
              <li>If <Math>w_1 = T(v_1), w_2 = T(v_2)</Math>: <Math>w_1 + w_2 = T(v_1 + v_2) \in {`\\text{im}`}(T)</Math></li>
              <li>If <Math>w = T(v)</Math>: <Math>cw = cT(v) = T(cv) \in {`\\text{im}`}(T)</Math></li>
            </ul>
          </>
        }
      >
        <p>
          For any linear transformation <Math>T: V \to W</Math>:
        </p>
        <ul className="list-disc list-inside text-dark-300 mt-2">
          <li><Math>\ker(T)</Math> is a subspace of <Math>V</Math></li>
          <li><Math>{`\\text{im}`}(T)</Math> is a subspace of <Math>W</Math></li>
        </ul>
      </Theorem>

      <h2>Rank and Nullity</h2>

      <Definition title="Rank and Nullity">
        <p>
          For a linear transformation <Math>T: V \to W</Math>:
        </p>
        <ul className="list-disc list-inside text-dark-300 mt-2">
          <li><strong>Rank:</strong> <Math>{`\\text{rank}`}(T) = \dim({`\\text{im}`}(T))</Math></li>
          <li><strong>Nullity:</strong> <Math>{`\\text{nullity}`}(T) = \dim(\ker(T))</Math></li>
        </ul>
      </Definition>

      <Theorem
        title="Rank-Nullity Theorem (Fundamental Theorem of Linear Maps)"
        proof={
          <>
            <p>Let <Math>n = \dim(V)</Math> and <Math>k = \dim(\ker(T))</Math>. Let <Math>{`\\{v_1, \\ldots, v_k\\}`}</Math> be a basis for <Math>\ker(T)</Math>.</p>
            <p className="mt-2">Extend to a basis <Math>{`\\{v_1, \\ldots, v_k, u_1, \\ldots, u_{n-k}\\}`}</Math> of <Math>V</Math>.</p>
            <p className="mt-2"><strong>Claim:</strong> <Math>{`\\{T(u_1), \\ldots, T(u_{n-k})\\}`}</Math> is a basis for <Math>{`\\text{im}`}(T)</Math>.</p>
            <p className="mt-2"><strong>Spanning:</strong> Any <Math>w \in {`\\text{im}`}(T)</Math> equals <Math>T(v)</Math> for some</p>
            <MathBlock>{`v = \\sum a_i v_i + \\sum b_j u_j`}</MathBlock>
            <p>Then <Math>w = T(v) = \sum a_i T(v_i) + \sum b_j T(u_j) = \sum b_j T(u_j)</Math> since <Math>T(v_i) = {`\\mathbf{0}`}</Math>.</p>
            <p className="mt-2"><strong>Independence:</strong> If <Math>\sum c_j T(u_j) = {`\\mathbf{0}`}</Math>, then <Math>T(\sum c_j u_j) = {`\\mathbf{0}`}</Math>, so <Math>\sum c_j u_j \in \ker(T)</Math>.</p>
            <p>Writing this as a combination of <Math>v_i</Math>'s and using independence of the full basis gives <Math>c_j = 0</Math>.</p>
          </>
        }
      >
        <p>
          For a linear transformation <Math>T: V \to W</Math> with <Math>V</Math> finite-dimensional:
        </p>
        <MathBlock>{`\\dim(V) = \\text{rank}(T) + \\text{nullity}(T)`}</MathBlock>
      </Theorem>

      <Callout type="success">
        <strong>Intuition:</strong> The domain <Math>V</Math> splits into two parts: vectors that get
        "squashed" to zero (the kernel), and vectors that spread out to cover the image. The theorem
        says these parts account for all of <Math>\dim(V)</Math>.
      </Callout>

      <Example title="Projection onto xy-plane">
        <p>
          Let <Math>P: {`\\mathbb{R}`}^3 \to {`\\mathbb{R}`}^3</Math> be <Math>P(x, y, z) = (x, y, 0)</Math>.
        </p>
        <ul className="list-disc list-inside text-dark-300 mt-2">
          <li><Math>\ker(P) = {`\\{(0, 0, z) : z \\in \\mathbb{R}\\}`}</Math> (the z-axis), so <Math>{`\\text{nullity}`}(P) = 1</Math></li>
          <li><Math>{`\\text{im}`}(P) = {`\\{(x, y, 0) : x, y \\in \\mathbb{R}\\}`}</Math> (the xy-plane), so <Math>{`\\text{rank}`}(P) = 2</Math></li>
          <li>Check: <Math>3 = 1 + 2</Math></li>
        </ul>
      </Example>

      <h2>Injective, Surjective, and Bijective Maps</h2>

      <Theorem
        title="Injectivity Criterion"
        proof={
          <>
            <p><strong>(⇒)</strong> If <Math>T</Math> is injective and <Math>v \in \ker(T)</Math>:</p>
            <MathBlock>{`T(v) = \\mathbf{0} = T(\\mathbf{0})`}</MathBlock>
            <p>By injectivity, <Math>v = {`\\mathbf{0}`}</Math>.</p>
            <p className="mt-2"><strong>(⇐)</strong> If <Math>\ker(T) = {`\\{\\mathbf{0}\\}`}</Math> and <Math>T(u) = T(v)</Math>:</p>
            <MathBlock>{`T(u - v) = T(u) - T(v) = \\mathbf{0}`}</MathBlock>
            <p>So <Math>u - v \in \ker(T) = {`\\{\\mathbf{0}\\}`}</Math>, giving <Math>u = v</Math>.</p>
          </>
        }
      >
        <p>
          <Math>T</Math> is injective (one-to-one) if and only if <Math>\ker(T) = {`\\{\\mathbf{0}\\}`}</Math>.
        </p>
      </Theorem>

      <Definition title="Isomorphism">
        <p>
          A linear transformation <Math>T: V \to W</Math> is an <strong>isomorphism</strong> if it
          is bijective (both injective and surjective). We write <Math>V \cong W</Math> if such a
          <Math>T</Math> exists.
        </p>
      </Definition>

      <Theorem
        title="Isomorphism Theorem"
        proof={
          <>
            <p><strong>(⇒)</strong> If <Math>T: V \to W</Math> is an isomorphism, it's bijective. By rank-nullity:</p>
            <MathBlock>{`\\dim(V) = \\text{rank}(T) + 0 = \\dim(\\text{im}(T)) = \\dim(W)`}</MathBlock>
            <p className="mt-2"><strong>(⇐)</strong> If <Math>\dim(V) = \dim(W) = n</Math>, choose bases <Math>{`\\{v_1, \\ldots, v_n\\}`}</Math> and <Math>{`\\{w_1, \\ldots, w_n\\}`}</Math>.</p>
            <p>Define <Math>T(v_i) = w_i</Math> and extend linearly. This is an isomorphism.</p>
          </>
        }
      >
        <p>
          Two finite-dimensional vector spaces over the same field are isomorphic if and only if
          they have the same dimension.
        </p>
      </Theorem>

      <Callout type="info">
        <strong>Consequence:</strong> Every <Math>n</Math>-dimensional vector space over <Math>F</Math>
        is isomorphic to <Math>F^n</Math>. This is why we can study abstract vector spaces by
        studying <Math>{`\\mathbb{R}`}^n</Math>!
      </Callout>

      <div className="mt-8 p-4 rounded-xl bg-dark-800/50 border border-dark-700">
        <h3 className="text-lg font-semibold text-dark-100 mb-2">Key Takeaways</h3>
        <ul className="list-disc list-inside text-dark-300 space-y-1">
          <li>Linear maps preserve addition and scalar multiplication</li>
          <li>Kernel = vectors mapped to zero; Image = vectors that can be "hit"</li>
          <li>Both kernel and image are subspaces</li>
          <li><strong>Rank-Nullity:</strong> <Math>\dim(V) = {`\\text{rank}`}(T) + {`\\text{nullity}`}(T)</Math></li>
          <li><Math>T</Math> is injective iff <Math>\ker(T) = {`\\{\\mathbf{0}\\}`}</Math></li>
          <li>Finite-dimensional spaces are isomorphic iff they have the same dimension</li>
        </ul>
      </div>

      <SectionQuiz
        sectionId={5}
        questions={section05Quiz}
        title="Linear Transformations Quiz"
      />
    </LessonLayout>
  );
}
