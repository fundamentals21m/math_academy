import { LessonLayout } from '@/components/layout/LessonLayout';
import { Definition, Theorem, Example } from '@/components/common/ContentBlocks';
import { Callout } from '@/components/common/Callout';
import { InlineMath, MathBlock } from '@/components/common/MathBlock';
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
        action on a basis. If you know what <InlineMath>T</InlineMath> does to each basis vector, you know
        everything about <InlineMath>T</InlineMath>.
      </Callout>

      <h2>Definition and Basic Properties</h2>

      <Definition title="Linear Transformation">
        <p>
          A function <InlineMath>T: V \to W</InlineMath> between vector spaces over the same field <InlineMath>F</InlineMath>
          is a <strong>linear transformation</strong> (or <strong>linear map</strong>) if for all
          <InlineMath>u, v \in V</InlineMath> and <InlineMath>c \in F</InlineMath>:
        </p>
        <ol className="list-decimal list-inside text-dark-300 mt-2">
          <li><strong>Additivity:</strong> <InlineMath>T(u + v) = T(u) + T(v)</InlineMath></li>
          <li><strong>Homogeneity:</strong> <InlineMath>T(cv) = cT(v)</InlineMath></li>
        </ol>
        <p className="mt-2">
          Equivalently: <InlineMath>T(au + bv) = aT(u) + bT(v)</InlineMath> for all <InlineMath>a, b \in F</InlineMath>.
        </p>
      </Definition>

      <Example title="Geometric Transformations">
        <p>In <InlineMath>{`\\mathbb{R}`}^2</InlineMath>, the following are linear transformations:</p>
        <ul className="list-disc list-inside text-dark-300 mt-2 space-y-2">
          <li><strong>Rotation by angle <InlineMath>\theta</InlineMath>:</strong> <InlineMath>R_\theta(x, y) = (x\cos\theta - y\sin\theta, x\sin\theta + y\cos\theta)</InlineMath></li>
          <li><strong>Reflection across x-axis:</strong> <InlineMath>T(x, y) = (x, -y)</InlineMath></li>
          <li><strong>Projection onto x-axis:</strong> <InlineMath>P(x, y) = (x, 0)</InlineMath></li>
          <li><strong>Scaling by factor <InlineMath>k</InlineMath>:</strong> <InlineMath>S(x, y) = (kx, ky)</InlineMath></li>
        </ul>
      </Example>

      <Example title="Differential Operator">
        <p>
          The derivative <InlineMath>D: P_n({`\\mathbb{R}`}) \to P_{'{n-1}'}({`\\mathbb{R}`})</InlineMath> defined by
          <InlineMath>D(p) = p'</InlineMath> is linear:
        </p>
        <MathBlock>{`D(p + q) = (p + q)' = p' + q' = D(p) + D(q)`}</MathBlock>
        <MathBlock>{`D(cp) = (cp)' = cp' = cD(p)`}</MathBlock>
      </Example>

      <Example title="Integration">
        <p>
          The integral <InlineMath>I: \mathcal{'{C}'}[0, 1] \to {`\\mathbb{R}`}</InlineMath> defined by
          <InlineMath>I(f) = \int_0^1 f(x)\, dx</InlineMath> is linear by properties of integrals.
        </p>
      </Example>

      <h2>Kernel and Image</h2>

      <Definition title="Kernel (Null Space)">
        <p>
          The <strong>kernel</strong> (or <strong>null space</strong>) of <InlineMath>T: V \to W</InlineMath> is:
        </p>
        <MathBlock>{`\\ker(T) = \\{v \\in V : T(v) = \\mathbf{0}\\}`}</MathBlock>
        <p>It consists of all vectors that <InlineMath>T</InlineMath> maps to zero.</p>
      </Definition>

      <Definition title="Image (Range)">
        <p>
          The <strong>image</strong> (or <strong>range</strong>) of <InlineMath>T: V \to W</InlineMath> is:
        </p>
        <MathBlock>{`\\text{im}(T) = \\{T(v) : v \\in V\\} = \\{w \\in W : w = T(v) \\text{ for some } v\\}`}</MathBlock>
        <p>It consists of all vectors that <InlineMath>T</InlineMath> can "hit".</p>
      </Definition>

      <Theorem
        title="Kernel and Image are Subspaces"
        proof={
          <>
            <p><strong>Kernel:</strong></p>
            <ul className="list-disc list-inside text-dark-300 space-y-1">
              <li><InlineMath>T({`\\mathbf{0}`}) = T(0 \cdot {`\\mathbf{0}`}) = 0 \cdot T({`\\mathbf{0}`}) = {`\\mathbf{0}`}</InlineMath>, so <InlineMath>{`\\mathbf{0}`} \in \ker(T)</InlineMath></li>
              <li>If <InlineMath>u, v \in \ker(T)</InlineMath>: <InlineMath>T(u + v) = T(u) + T(v) = {`\\mathbf{0}`}</InlineMath></li>
              <li>If <InlineMath>u \in \ker(T)</InlineMath>: <InlineMath>T(cu) = cT(u) = c \cdot {`\\mathbf{0}`} = {`\\mathbf{0}`}</InlineMath></li>
            </ul>
            <p className="mt-2"><strong>Image:</strong></p>
            <ul className="list-disc list-inside text-dark-300 space-y-1">
              <li><InlineMath>{`\\mathbf{0}`} = T({`\\mathbf{0}`}) \in {`\\text{im}`}(T)</InlineMath></li>
              <li>If <InlineMath>w_1 = T(v_1), w_2 = T(v_2)</InlineMath>: <InlineMath>w_1 + w_2 = T(v_1 + v_2) \in {`\\text{im}`}(T)</InlineMath></li>
              <li>If <InlineMath>w = T(v)</InlineMath>: <InlineMath>cw = cT(v) = T(cv) \in {`\\text{im}`}(T)</InlineMath></li>
            </ul>
          </>
        }
      >
        <p>
          For any linear transformation <InlineMath>T: V \to W</InlineMath>:
        </p>
        <ul className="list-disc list-inside text-dark-300 mt-2">
          <li><InlineMath>\ker(T)</InlineMath> is a subspace of <InlineMath>V</InlineMath></li>
          <li><InlineMath>{`\\text{im}`}(T)</InlineMath> is a subspace of <InlineMath>W</InlineMath></li>
        </ul>
      </Theorem>

      <h2>Rank and Nullity</h2>

      <Definition title="Rank and Nullity">
        <p>
          For a linear transformation <InlineMath>T: V \to W</InlineMath>:
        </p>
        <ul className="list-disc list-inside text-dark-300 mt-2">
          <li><strong>Rank:</strong> <InlineMath>{`\\text{rank}`}(T) = \dim({`\\text{im}`}(T))</InlineMath></li>
          <li><strong>Nullity:</strong> <InlineMath>{`\\text{nullity}`}(T) = \dim(\ker(T))</InlineMath></li>
        </ul>
      </Definition>

      <Theorem
        title="Rank-Nullity Theorem (Fundamental Theorem of Linear Maps)"
        proof={
          <>
            <p>Let <InlineMath>n = \dim(V)</InlineMath> and <InlineMath>k = \dim(\ker(T))</InlineMath>. Let <InlineMath>{`\\{v_1, \\ldots, v_k\\}`}</InlineMath> be a basis for <InlineMath>\ker(T)</InlineMath>.</p>
            <p className="mt-2">Extend to a basis <InlineMath>{`\\{v_1, \\ldots, v_k, u_1, \\ldots, u_{n-k}\\}`}</InlineMath> of <InlineMath>V</InlineMath>.</p>
            <p className="mt-2"><strong>Claim:</strong> <InlineMath>{`\\{T(u_1), \\ldots, T(u_{n-k})\\}`}</InlineMath> is a basis for <InlineMath>{`\\text{im}`}(T)</InlineMath>.</p>
            <p className="mt-2"><strong>Spanning:</strong> Any <InlineMath>w \in {`\\text{im}`}(T)</InlineMath> equals <InlineMath>T(v)</InlineMath> for some</p>
            <MathBlock>{`v = \\sum a_i v_i + \\sum b_j u_j`}</MathBlock>
            <p>Then <InlineMath>w = T(v) = \sum a_i T(v_i) + \sum b_j T(u_j) = \sum b_j T(u_j)</InlineMath> since <InlineMath>T(v_i) = {`\\mathbf{0}`}</InlineMath>.</p>
            <p className="mt-2"><strong>Independence:</strong> If <InlineMath>\sum c_j T(u_j) = {`\\mathbf{0}`}</InlineMath>, then <InlineMath>T(\sum c_j u_j) = {`\\mathbf{0}`}</InlineMath>, so <InlineMath>\sum c_j u_j \in \ker(T)</InlineMath>.</p>
            <p>Writing this as a combination of <InlineMath>v_i</InlineMath>'s and using independence of the full basis gives <InlineMath>c_j = 0</InlineMath>.</p>
          </>
        }
      >
        <p>
          For a linear transformation <InlineMath>T: V \to W</InlineMath> with <InlineMath>V</InlineMath> finite-dimensional:
        </p>
        <MathBlock>{`\\dim(V) = \\text{rank}(T) + \\text{nullity}(T)`}</MathBlock>
      </Theorem>

      <Callout type="success">
        <strong>Intuition:</strong> The domain <InlineMath>V</InlineMath> splits into two parts: vectors that get
        "squashed" to zero (the kernel), and vectors that spread out to cover the image. The theorem
        says these parts account for all of <InlineMath>\dim(V)</InlineMath>.
      </Callout>

      <Example title="Projection onto xy-plane">
        <p>
          Let <InlineMath>P: {`\\mathbb{R}`}^3 \to {`\\mathbb{R}`}^3</InlineMath> be <InlineMath>P(x, y, z) = (x, y, 0)</InlineMath>.
        </p>
        <ul className="list-disc list-inside text-dark-300 mt-2">
          <li><InlineMath>\ker(P) = {`\\{(0, 0, z) : z \\in \\mathbb{R}\\}`}</InlineMath> (the z-axis), so <InlineMath>{`\\text{nullity}`}(P) = 1</InlineMath></li>
          <li><InlineMath>{`\\text{im}`}(P) = {`\\{(x, y, 0) : x, y \\in \\mathbb{R}\\}`}</InlineMath> (the xy-plane), so <InlineMath>{`\\text{rank}`}(P) = 2</InlineMath></li>
          <li>Check: <InlineMath>3 = 1 + 2</InlineMath></li>
        </ul>
      </Example>

      <h2>Injective, Surjective, and Bijective Maps</h2>

      <Theorem
        title="Injectivity Criterion"
        proof={
          <>
            <p><strong>(⇒)</strong> If <InlineMath>T</InlineMath> is injective and <InlineMath>v \in \ker(T)</InlineMath>:</p>
            <MathBlock>{`T(v) = \\mathbf{0} = T(\\mathbf{0})`}</MathBlock>
            <p>By injectivity, <InlineMath>v = {`\\mathbf{0}`}</InlineMath>.</p>
            <p className="mt-2"><strong>(⇐)</strong> If <InlineMath>\ker(T) = {`\\{\\mathbf{0}\\}`}</InlineMath> and <InlineMath>T(u) = T(v)</InlineMath>:</p>
            <MathBlock>{`T(u - v) = T(u) - T(v) = \\mathbf{0}`}</MathBlock>
            <p>So <InlineMath>u - v \in \ker(T) = {`\\{\\mathbf{0}\\}`}</InlineMath>, giving <InlineMath>u = v</InlineMath>.</p>
          </>
        }
      >
        <p>
          <InlineMath>T</InlineMath> is injective (one-to-one) if and only if <InlineMath>\ker(T) = {`\\{\\mathbf{0}\\}`}</InlineMath>.
        </p>
      </Theorem>

      <Definition title="Isomorphism">
        <p>
          A linear transformation <InlineMath>T: V \to W</InlineMath> is an <strong>isomorphism</strong> if it
          is bijective (both injective and surjective). We write <InlineMath>V \cong W</InlineMath> if such a
          <InlineMath>T</InlineMath> exists.
        </p>
      </Definition>

      <Theorem
        title="Isomorphism Theorem"
        proof={
          <>
            <p><strong>(⇒)</strong> If <InlineMath>T: V \to W</InlineMath> is an isomorphism, it's bijective. By rank-nullity:</p>
            <MathBlock>{`\\dim(V) = \\text{rank}(T) + 0 = \\dim(\\text{im}(T)) = \\dim(W)`}</MathBlock>
            <p className="mt-2"><strong>(⇐)</strong> If <InlineMath>\dim(V) = \dim(W) = n</InlineMath>, choose bases <InlineMath>{`\\{v_1, \\ldots, v_n\\}`}</InlineMath> and <InlineMath>{`\\{w_1, \\ldots, w_n\\}`}</InlineMath>.</p>
            <p>Define <InlineMath>T(v_i) = w_i</InlineMath> and extend linearly. This is an isomorphism.</p>
          </>
        }
      >
        <p>
          Two finite-dimensional vector spaces over the same field are isomorphic if and only if
          they have the same dimension.
        </p>
      </Theorem>

      <Callout type="info">
        <strong>Consequence:</strong> Every <InlineMath>n</InlineMath>-dimensional vector space over <InlineMath>F</InlineMath>
        is isomorphic to <InlineMath>F^n</InlineMath>. This is why we can study abstract vector spaces by
        studying <InlineMath>{`\\mathbb{R}`}^n</InlineMath>!
      </Callout>

      <div className="mt-8 p-4 rounded-xl bg-dark-800/50 border border-dark-700">
        <h3 className="text-lg font-semibold text-dark-100 mb-2">Key Takeaways</h3>
        <ul className="list-disc list-inside text-dark-300 space-y-1">
          <li>Linear maps preserve addition and scalar multiplication</li>
          <li>Kernel = vectors mapped to zero; Image = vectors that can be "hit"</li>
          <li>Both kernel and image are subspaces</li>
          <li><strong>Rank-Nullity:</strong> <InlineMath>\dim(V) = {`\\text{rank}`}(T) + {`\\text{nullity}`}(T)</InlineMath></li>
          <li><InlineMath>T</InlineMath> is injective iff <InlineMath>\ker(T) = {`\\{\\mathbf{0}\\}`}</InlineMath></li>
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
