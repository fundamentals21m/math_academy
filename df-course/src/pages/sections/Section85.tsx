import { LessonLayout } from '@/components/layout/LessonLayout';
import { Callout } from '@/components/common/Callout';
import { MathBlock, InlineMath } from '@/components/common/MathBlock';

export default function Section85() {
  return (
    <LessonLayout sectionId={85}>
      <h2>Ext and Tor</h2>
      <p>
        <strong>Ext</strong> and <strong>Tor</strong> are the fundamental derived functors
        in homological algebra. They measure the failure of Hom and tensor product to be
        exact, and encode deep information about modules and their extensions.
      </p>

      <Callout type="info">
        <strong>Central Role:</strong> Ext and Tor appear throughout algebra and topology:
        in classification of extensions, calculation of cohomology, and understanding
        of module structure. They are the prototypes of derived functors.
      </Callout>

      <h3>Projective and Injective Resolutions</h3>

      <div className="bg-dark-800/50 rounded-xl p-6 border border-dark-700 my-6">
        <h4 className="text-primary-400 mb-4">Definition: Projective Resolution</h4>
        <p>
          A <strong>projective resolution</strong> of an <InlineMath>R</InlineMath>-module <InlineMath>M</InlineMath>
          is an exact sequence:
        </p>
        <MathBlock>{`\\cdots \\to P_2 \\to P_1 \\to P_0 \\to M \\to 0`}</MathBlock>
        <p className="mt-3">
          where each <InlineMath>P_i</InlineMath> is projective.
        </p>
      </div>

      <div className="bg-dark-800/50 rounded-xl p-6 border border-dark-700 my-6">
        <h4 className="text-primary-400 mb-4">Definition: Injective Resolution</h4>
        <p>
          An <strong>injective resolution</strong> of <InlineMath>M</InlineMath> is an exact sequence:
        </p>
        <MathBlock>{`0 \\to M \\to I^0 \\to I^1 \\to I^2 \\to \\cdots`}</MathBlock>
        <p className="mt-3">
          where each <InlineMath>I^i</InlineMath> is injective.
        </p>
      </div>

      <h3>The Tor Functor</h3>

      <div className="bg-dark-800/50 rounded-xl p-6 border border-dark-700 my-6">
        <h4 className="text-primary-400 mb-4">Definition</h4>
        <p>
          For <InlineMath>R</InlineMath>-modules <InlineMath>M</InlineMath> and <InlineMath>N</InlineMath>,
          take a projective resolution <InlineMath>P_\bullet \to M</InlineMath> and define:
        </p>
        <MathBlock>{`\\text{Tor}_n^R(M, N) = H_n(P_\\bullet \\otimes_R N)`}</MathBlock>
        <p className="mt-3">
          the <InlineMath>n</InlineMath>-th homology of the complex <InlineMath>P_\bullet \otimes_R N</InlineMath>.
        </p>
      </div>

      <div className="bg-dark-800 p-4 rounded-lg my-4 border-l-4 border-amber-500">
        <p className="font-semibold text-amber-400">Key Properties of Tor</p>
        <ul className="list-disc list-inside space-y-2 mt-2 text-dark-300">
          <li><InlineMath>\text{"{Tor}"}_0^R(M, N) \cong M \otimes_R N</InlineMath></li>
          <li><InlineMath>\text{"{Tor}"}_n^R(M, N) \cong \text{"{Tor}"}_n^R(N, M)</InlineMath> (symmetric)</li>
          <li>If <InlineMath>M</InlineMath> or <InlineMath>N</InlineMath> is flat,
            then <InlineMath>\text{"{Tor}"}_n^R(M, N) = 0</InlineMath> for <InlineMath>n \geq 1</InlineMath></li>
          <li>Long exact sequence from short exact sequences</li>
        </ul>
      </div>

      <div className="bg-dark-800 p-4 rounded-lg my-4 border-l-4 border-blue-500">
        <p className="font-semibold text-blue-400">Example: Over <InlineMath>\mathbb{"{Z}"}</InlineMath></p>
        <p className="mt-2">
          <InlineMath>\text{"{Tor}"}_1^{"{\\mathbb{Z}}"}(\mathbb{"{Z}"}/m, \mathbb{"{Z}"}/n) = \mathbb{"{Z}"}/\gcd(m,n)</InlineMath>
        </p>
        <p className="mt-2">
          <strong>Proof sketch:</strong> Resolution <InlineMath>0 \to \mathbb{"{Z}"} \xrightarrow{"{\\cdot m}"} \mathbb{"{Z}"} \to \mathbb{"{Z}"}/m \to 0</InlineMath>.
          Tensor with <InlineMath>\mathbb{"{Z}"}/n</InlineMath>:
          <InlineMath>\mathbb{"{Z}"}/n \xrightarrow{"{\\cdot m}"} \mathbb{"{Z}"}/n</InlineMath>.
          Kernel = <InlineMath>\mathbb{"{Z}"}/\gcd(m,n)</InlineMath>.
        </p>
      </div>

      <h3>The Ext Functor</h3>

      <div className="bg-dark-800/50 rounded-xl p-6 border border-dark-700 my-6">
        <h4 className="text-primary-400 mb-4">Definition</h4>
        <p>
          For <InlineMath>R</InlineMath>-modules <InlineMath>M</InlineMath> and <InlineMath>N</InlineMath>,
          take a projective resolution <InlineMath>P_\bullet \to M</InlineMath> and define:
        </p>
        <MathBlock>{`\\text{Ext}^n_R(M, N) = H^n(\\text{Hom}_R(P_\\bullet, N))`}</MathBlock>
        <p className="mt-3">
          Alternatively, use an injective resolution of <InlineMath>N</InlineMath>.
        </p>
      </div>

      <div className="bg-dark-800 p-4 rounded-lg my-4 border-l-4 border-amber-500">
        <p className="font-semibold text-amber-400">Key Properties of Ext</p>
        <ul className="list-disc list-inside space-y-2 mt-2 text-dark-300">
          <li><InlineMath>\text{"{Ext}"}^0_R(M, N) \cong \text{"{Hom}"}_R(M, N)</InlineMath></li>
          <li>If <InlineMath>M</InlineMath> is projective or <InlineMath>N</InlineMath> is injective,
            then <InlineMath>\text{"{Ext}"}^n_R(M, N) = 0</InlineMath> for <InlineMath>n \geq 1</InlineMath></li>
          <li>Long exact sequence from short exact sequences (in either variable)</li>
          <li><InlineMath>\text{"{Ext}"}^1_R(M, N)</InlineMath> classifies extensions of <InlineMath>M</InlineMath> by <InlineMath>N</InlineMath></li>
        </ul>
      </div>

      <h3>Classification of Extensions</h3>

      <div className="bg-dark-800/50 rounded-xl p-6 border border-dark-700 my-6">
        <h4 className="text-primary-400 mb-4">Theorem</h4>
        <p>
          There is a bijection between <InlineMath>\text{"{Ext}"}^1_R(M, N)</InlineMath> and
          equivalence classes of short exact sequences:
        </p>
        <MathBlock>{`0 \\to N \\to E \\to M \\to 0`}</MathBlock>
        <p className="mt-3">
          The zero element corresponds to the split extension <InlineMath>E = N \oplus M</InlineMath>.
        </p>
      </div>

      <div className="bg-dark-800 p-4 rounded-lg my-4 border-l-4 border-purple-500">
        <p className="font-semibold text-purple-400">Example: Extensions of Abelian Groups</p>
        <p className="mt-2">
          <InlineMath>\text{"{Ext}"}^1_{"{\\mathbb{Z}}"}(\mathbb{"{Z}"}/2, \mathbb{"{Z}"}/2) = \mathbb{"{Z}"}/2</InlineMath>
        </p>
        <p className="mt-2">
          Two extensions: the split one <InlineMath>\mathbb{"{Z}"}/2 \oplus \mathbb{"{Z}"}/2</InlineMath>
          and the non-split one <InlineMath>\mathbb{"{Z}"}/4</InlineMath>.
        </p>
      </div>

      <h3>Long Exact Sequences</h3>

      <div className="bg-dark-800/50 rounded-xl p-6 border border-dark-700 my-6">
        <h4 className="text-primary-400 mb-4">Theorem</h4>
        <p>
          A short exact sequence <InlineMath>0 \to A \to B \to C \to 0</InlineMath> induces:
        </p>
        <p className="mt-3"><strong>For Tor:</strong></p>
        <MathBlock>{`\\cdots \\to \\text{Tor}_1(C, N) \\to A \\otimes N \\to B \\otimes N \\to C \\otimes N \\to 0`}</MathBlock>
        <p className="mt-3"><strong>For Ext:</strong></p>
        <MathBlock>{`0 \\to \\text{Hom}(C, N) \\to \\text{Hom}(B, N) \\to \\text{Hom}(A, N) \\to \\text{Ext}^1(C, N) \\to \\cdots`}</MathBlock>
      </div>

      <h3>Projective and Injective Dimension</h3>

      <div className="bg-dark-800/50 rounded-xl p-6 border border-dark-700 my-6">
        <h4 className="text-primary-400 mb-4">Definition</h4>
        <p>
          The <strong>projective dimension</strong> <InlineMath>\text{"{pd}"}_R(M)</InlineMath> is
          the minimum length of a projective resolution of <InlineMath>M</InlineMath>.
        </p>
        <p className="mt-3">
          Equivalently: <InlineMath>\text{"{pd}"}_R(M) = \sup\{"{n \\mid \\text{Ext}^n_R(M, N) \\neq 0 \\text{ for some } N}"}\</InlineMath>
        </p>
      </div>

      <Callout type="success">
        <strong>Summary:</strong> Tor measures failure of tensor product to be exact;
        Ext measures failure of Hom to be exact. Both are computed using resolutions
        and produce long exact sequences. <InlineMath>\text{"{Ext}"}^1</InlineMath>
        classifies extensions, and higher Ext/Tor contain homological information about
        modules. These functors are the starting point for derived categories and
        modern homological algebra.
      </Callout>
    </LessonLayout>
  );
}
