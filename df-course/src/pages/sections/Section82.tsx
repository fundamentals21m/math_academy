import { LessonLayout } from '@/components/layout/LessonLayout';
import { Callout } from '@/components/common/Callout';
import { MathBlock, InlineMath } from '@/components/common/MathBlock';

export default function Section82() {
  return (
    <LessonLayout sectionId={82}>
      <h2>Artinian Rings</h2>
      <p>
        <strong>Artinian rings</strong> satisfy the descending chain condition on ideals,
        dual to the Noetherian property. While seemingly symmetric, Artinian rings have
        much stronger structure: they decompose into products of local Artinian rings,
        and commutative Artinian rings are always Noetherian.
      </p>

      <Callout type="info">
        <strong>Duality with Noetherian:</strong> Noetherian = ACC on ideals (finite generation).
        Artinian = DCC on ideals. Surprisingly, for commutative rings, Artinian implies
        Noetherian (but not conversely)!
      </Callout>

      <h3>Definition and Basic Properties</h3>

      <div className="bg-dark-800/50 rounded-xl p-6 border border-dark-700 my-6">
        <h4 className="text-primary-400 mb-4">Definition</h4>
        <p>
          A ring <InlineMath>R</InlineMath> is <strong>Artinian</strong> if it satisfies
          the <strong>descending chain condition (DCC)</strong> on ideals: every descending
          chain <InlineMath>I_1 \supseteq I_2 \supseteq I_3 \supseteq \cdots</InlineMath> stabilizes.
        </p>
      </div>

      <div className="bg-dark-800 p-4 rounded-lg my-4 border-l-4 border-amber-500">
        <p className="font-semibold text-amber-400">Examples</p>
        <ul className="list-disc list-inside space-y-2 mt-2 text-dark-300">
          <li>Any field (only ideals are <InlineMath>(0)</InlineMath> and <InlineMath>(1)</InlineMath>)</li>
          <li><InlineMath>\mathbb{"{Z}"}/n\mathbb{"{Z}"}</InlineMath> for any <InlineMath>n</InlineMath></li>
          <li><InlineMath>k[x]/(x^n)</InlineMath> for field <InlineMath>k</InlineMath></li>
          <li>Finite products of Artinian rings</li>
          <li>Any finite ring</li>
        </ul>
        <p className="mt-3 font-semibold text-red-400">Non-example:</p>
        <p className="text-dark-300">
          <InlineMath>\mathbb{"{Z}"}</InlineMath> is Noetherian but NOT Artinian:
          <InlineMath>(2) \supsetneq (4) \supsetneq (8) \supsetneq \cdots</InlineMath>
        </p>
      </div>

      <h3>Key Structure Theorem</h3>

      <div className="bg-dark-800/50 rounded-xl p-6 border border-dark-700 my-6">
        <h4 className="text-primary-400 mb-4">Theorem: Artinian Implies Noetherian</h4>
        <p>
          A commutative Artinian ring is Noetherian.
        </p>
      </div>

      <Callout type="warning">
        <strong>Not symmetric!</strong> The converse is false. <InlineMath>\mathbb{"{Z}"}</InlineMath>
        and <InlineMath>k[x]</InlineMath> are Noetherian but not Artinian.
      </Callout>

      <h3>Nilradical and Dimension</h3>

      <div className="bg-dark-800/50 rounded-xl p-6 border border-dark-700 my-6">
        <h4 className="text-primary-400 mb-4">Theorem</h4>
        <p>
          In an Artinian ring <InlineMath>R</InlineMath>:
        </p>
        <ol className="list-decimal list-inside space-y-2 mt-3 text-dark-300">
          <li>Every prime ideal is maximal</li>
          <li>There are only finitely many maximal ideals</li>
          <li>The nilradical <InlineMath>\sqrt{"{(0)}"}</InlineMath> is nilpotent:
            <InlineMath>(\sqrt{"{(0)}"})^n = (0)</InlineMath> for some <InlineMath>n</InlineMath></li>
          <li><InlineMath>\dim R = 0</InlineMath> (Krull dimension)</li>
        </ol>
      </div>

      <div className="bg-dark-800 p-4 rounded-lg my-4 border-l-4 border-blue-500">
        <p className="font-semibold text-blue-400">Implication</p>
        <p className="mt-2">
          Artinian rings are "zero-dimensional" in the sense of Krull dimension.
          They have no proper chains of prime ideals.
        </p>
        <p className="mt-2">
          Geometrically: <InlineMath>\text{"{Spec}"}(R)</InlineMath> is a finite discrete set of points.
        </p>
      </div>

      <h3>Structure Theorem</h3>

      <div className="bg-dark-800/50 rounded-xl p-6 border border-dark-700 my-6">
        <h4 className="text-primary-400 mb-4">Theorem: Decomposition of Artinian Rings</h4>
        <p>
          A commutative Artinian ring <InlineMath>R</InlineMath> is isomorphic to a finite
          product of local Artinian rings:
        </p>
        <MathBlock>{`R \\cong R_1 \\times R_2 \\times \\cdots \\times R_n`}</MathBlock>
        <p className="mt-3">
          where each <InlineMath>R_i</InlineMath> is a local Artinian ring (with unique
          maximal ideal).
        </p>
      </div>

      <p>
        This decomposition corresponds to the factorization
        <InlineMath>\text{"{Spec}"}(R) = \{"{\\mathfrak{m}_1, \\ldots, \\mathfrak{m}_n}"}\</InlineMath>
        into individual maximal ideals.
      </p>

      <div className="bg-dark-800 p-4 rounded-lg my-4 border-l-4 border-amber-500">
        <p className="font-semibold text-amber-400">Example: <InlineMath>\mathbb{"{Z}"}/60\mathbb{"{Z}"}</InlineMath></p>
        <p className="mt-2">
          <InlineMath>60 = 4 \cdot 3 \cdot 5 = 2^2 \cdot 3 \cdot 5</InlineMath>
        </p>
        <p className="mt-2">
          By CRT: <InlineMath>\mathbb{"{Z}"}/60\mathbb{"{Z}"} \cong \mathbb{"{Z}"}/4\mathbb{"{Z}"} \times \mathbb{"{Z}"}/3\mathbb{"{Z}"} \times \mathbb{"{Z}"}/5\mathbb{"{Z}"}</InlineMath>
        </p>
        <p className="mt-2">
          Each factor is a local Artinian ring.
        </p>
      </div>

      <h3>Local Artinian Rings</h3>

      <div className="bg-dark-800/50 rounded-xl p-6 border border-dark-700 my-6">
        <h4 className="text-primary-400 mb-4">Characterization</h4>
        <p>
          A local ring <InlineMath>(R, \mathfrak{"{m}"})</InlineMath> is Artinian if and only if:
        </p>
        <ul className="list-disc list-inside space-y-2 mt-3 text-dark-300">
          <li><InlineMath>\mathfrak{"{m}"}</InlineMath> is nilpotent: <InlineMath>\mathfrak{"{m}"}^n = (0)</InlineMath>
            for some <InlineMath>n</InlineMath></li>
          <li><InlineMath>R</InlineMath> is finitely generated as an <InlineMath>R/\mathfrak{"{m}"}</InlineMath>-module</li>
        </ul>
      </div>

      <div className="bg-dark-800 p-4 rounded-lg my-4 border-l-4 border-purple-500">
        <p className="font-semibold text-purple-400">Example: <InlineMath>k[x]/(x^n)</InlineMath></p>
        <p className="mt-2">
          This is local with maximal ideal <InlineMath>(x)</InlineMath>.
        </p>
        <p className="mt-2">
          The chain of ideals is: <InlineMath>(1) \supsetneq (x) \supsetneq (x^2) \supsetneq \cdots \supsetneq (x^{"{n-1}"}) \supsetneq (0)</InlineMath>
        </p>
        <p className="mt-2">
          Length as <InlineMath>k</InlineMath>-vector space: <InlineMath>n</InlineMath>
        </p>
      </div>

      <h3>Length of Modules</h3>

      <div className="bg-dark-800/50 rounded-xl p-6 border border-dark-700 my-6">
        <h4 className="text-primary-400 mb-4">Definition</h4>
        <p>
          The <strong>length</strong> of an <InlineMath>R</InlineMath>-module <InlineMath>M</InlineMath>
          is the supremum of lengths of chains of submodules:
        </p>
        <MathBlock>{`\\ell(M) = \\sup\\{n \\mid 0 = M_0 \\subsetneq M_1 \\subsetneq \\cdots \\subsetneq M_n = M\\}`}</MathBlock>
      </div>

      <div className="bg-dark-800/50 rounded-xl p-6 border border-dark-700 my-6">
        <h4 className="text-primary-400 mb-4">Theorem</h4>
        <p>
          <InlineMath>M</InlineMath> has finite length iff <InlineMath>M</InlineMath> is
          both Noetherian and Artinian (as an <InlineMath>R</InlineMath>-module).
        </p>
        <p className="mt-3">
          A commutative ring <InlineMath>R</InlineMath> is Artinian iff <InlineMath>\ell(R) &lt; \infty</InlineMath>.
        </p>
      </div>

      <h3>Hopkins-Levitzki Theorem</h3>

      <div className="bg-dark-800/50 rounded-xl p-6 border border-dark-700 my-6">
        <h4 className="text-primary-400 mb-4">Theorem</h4>
        <p>
          For a ring <InlineMath>R</InlineMath> (not necessarily commutative):
        </p>
        <p className="mt-3">
          <InlineMath>R</InlineMath> is left Artinian <InlineMath>\Leftrightarrow</InlineMath>
          <InlineMath>R</InlineMath> is left Noetherian and every prime ideal is maximal.
        </p>
      </div>

      <Callout type="success">
        <strong>Summary:</strong> Artinian rings satisfy DCC on ideals. Unlike the Noetherian
        condition, Artinian implies Noetherian (for commutative rings). Artinian rings have
        Krull dimension 0: all primes are maximal, and there are only finitely many. Every
        Artinian ring decomposes as a finite product of local Artinian rings. The length
        function measures "size" and is finite precisely for Artinian (= Noetherian) modules.
      </Callout>
    </LessonLayout>
  );
}
