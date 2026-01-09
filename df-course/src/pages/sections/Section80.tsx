import { LessonLayout } from '@/components/layout/LessonLayout';
import { Callout } from '@/components/common/Callout';
import { MathBlock, InlineMath } from '@/components/common/MathBlock';

export default function Section80() {
  return (
    <LessonLayout sectionId={80}>
      <h2>Localization</h2>
      <p>
        <strong>Localization</strong> is the process of formally inverting elements of a ring,
        generalizing the construction of <InlineMath>\mathbb{"{Q}"}</InlineMath>
        from <InlineMath>\mathbb{"{Z}"}</InlineMath>. This fundamental technique allows us to
        "zoom in" on a ring at a prime ideal, giving local information about algebraic structures.
      </p>

      <Callout type="info">
        <strong>Motivation:</strong> Just as fractions let us divide in <InlineMath>\mathbb{"{Z}"}</InlineMath>,
        localization lets us divide by certain elements in any ring. Geometrically, this
        corresponds to studying a variety "near a point."
      </Callout>

      <h3>Multiplicative Sets</h3>

      <div className="bg-dark-800/50 rounded-xl p-6 border border-dark-700 my-6">
        <h4 className="text-primary-400 mb-4">Definition</h4>
        <p>
          A subset <InlineMath>S \subseteq R</InlineMath> of a ring is a
          <strong> multiplicative set</strong> (or <strong>multiplicatively closed</strong>) if:
        </p>
        <ul className="list-disc list-inside space-y-2 mt-3 text-dark-300">
          <li><InlineMath>1 \in S</InlineMath></li>
          <li>If <InlineMath>s, t \in S</InlineMath>, then <InlineMath>st \in S</InlineMath></li>
        </ul>
      </div>

      <div className="bg-dark-800 p-4 rounded-lg my-4 border-l-4 border-amber-500">
        <p className="font-semibold text-amber-400">Key Examples</p>
        <ul className="list-disc list-inside space-y-2 mt-2 text-dark-300">
          <li><InlineMath>S = \{"{1, f, f^2, f^3, \\ldots}"}\</InlineMath> for some <InlineMath>f \in R</InlineMath></li>
          <li><InlineMath>S = R \setminus P</InlineMath> where <InlineMath>P</InlineMath> is a prime ideal</li>
          <li><InlineMath>S = R \setminus \{"{\\text{zero divisors}}"}\</InlineMath></li>
          <li><InlineMath>S = R^* = \{"{\\text{units}}"}\</InlineMath></li>
        </ul>
      </div>

      <h3>The Localization</h3>

      <div className="bg-dark-800/50 rounded-xl p-6 border border-dark-700 my-6">
        <h4 className="text-primary-400 mb-4">Definition</h4>
        <p>
          Let <InlineMath>S \subseteq R</InlineMath> be multiplicative. The
          <strong> localization</strong> <InlineMath>S^{"{-1}"}R</InlineMath> is the ring of equivalence
          classes of pairs <InlineMath>(r, s)</InlineMath> with <InlineMath>r \in R, s \in S</InlineMath>,
          where:
        </p>
        <MathBlock>{`(r, s) \\sim (r', s') \\iff u(rs' - r's) = 0 \\text{ for some } u \\in S`}</MathBlock>
        <p className="mt-3">
          We write <InlineMath>r/s</InlineMath> for the equivalence class.
          Operations are as expected:
        </p>
        <MathBlock>{`\\frac{r}{s} + \\frac{r'}{s'} = \\frac{rs' + r's}{ss'}, \\quad \\frac{r}{s} \\cdot \\frac{r'}{s'} = \\frac{rr'}{ss'}`}</MathBlock>
      </div>

      <h3>Common Notation</h3>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 my-6">
        <div className="bg-dark-800/50 rounded-xl p-4 border border-dark-700">
          <h4 className="text-emerald-400 font-semibold mb-2">Localizing at element f</h4>
          <MathBlock>{`R_f = S^{-1}R \\text{ where } S = \\{1, f, f^2, \\ldots\\}`}</MathBlock>
        </div>
        <div className="bg-dark-800/50 rounded-xl p-4 border border-dark-700">
          <h4 className="text-blue-400 font-semibold mb-2">Localizing at prime P</h4>
          <MathBlock>{`R_P = S^{-1}R \\text{ where } S = R \\setminus P`}</MathBlock>
        </div>
      </div>

      <div className="bg-dark-800 p-4 rounded-lg my-4 border-l-4 border-blue-500">
        <p className="font-semibold text-blue-400">Examples</p>
        <ul className="list-disc list-inside space-y-2 mt-2 text-dark-300">
          <li><InlineMath>\mathbb{"{Z}"}_{"{(p)}"}</InlineMath> = rationals with denominator
            coprime to <InlineMath>p</InlineMath></li>
          <li><InlineMath>k[x]_{"{(x)}"}</InlineMath> = rational functions regular at 0</li>
          <li><InlineMath>\mathbb{"{Z}"}[1/2] = \mathbb{"{Z}"}_{"{\\{1,2,4,8,...\\}}"}</InlineMath> = dyadic rationals</li>
        </ul>
      </div>

      <h3>Universal Property</h3>

      <div className="bg-dark-800/50 rounded-xl p-6 border border-dark-700 my-6">
        <h4 className="text-primary-400 mb-4">Theorem</h4>
        <p>
          The localization map <InlineMath>\iota: R \to S^{"{-1}"}R</InlineMath>
          given by <InlineMath>\iota(r) = r/1</InlineMath> is universal for making elements
          of <InlineMath>S</InlineMath> invertible:
        </p>
        <p className="mt-3">
          For any ring homomorphism <InlineMath>\phi: R \to T</InlineMath>
          with <InlineMath>\phi(s)</InlineMath> invertible for all <InlineMath>s \in S</InlineMath>,
          there is a unique <InlineMath>\bar{"{\\phi}"}: S^{"{-1}"}R \to T</InlineMath>
          with <InlineMath>\bar{"{\\phi}"} \circ \iota = \phi</InlineMath>.
        </p>
      </div>

      <h3>Properties of Localization</h3>

      <div className="bg-dark-800/50 rounded-xl p-6 border border-dark-700 my-6">
        <h4 className="text-primary-400 mb-4">Theorem</h4>
        <ol className="list-decimal list-inside space-y-2 text-dark-300">
          <li>If <InlineMath>R</InlineMath> is an integral domain and <InlineMath>0 \notin S</InlineMath>,
            then <InlineMath>\iota: R \hookrightarrow S^{"{-1}"}R</InlineMath> is injective</li>
          <li>If <InlineMath>R</InlineMath> is Noetherian, so is <InlineMath>S^{"{-1}"}R</InlineMath></li>
          <li>Localization is exact: it preserves exactness of sequences of modules</li>
          <li><InlineMath>S^{"{-1}"}R = 0</InlineMath> iff <InlineMath>0 \in S</InlineMath></li>
        </ol>
      </div>

      <h3>Ideals in Localizations</h3>

      <div className="bg-dark-800/50 rounded-xl p-6 border border-dark-700 my-6">
        <h4 className="text-primary-400 mb-4">Theorem: Correspondence</h4>
        <p>
          There is a bijection:
        </p>
        <MathBlock>{`\\{\\text{prime ideals } Q \\text{ in } S^{-1}R\\} \\longleftrightarrow \\{\\text{prime ideals } P \\text{ in } R \\text{ with } P \\cap S = \\emptyset\\}`}</MathBlock>
        <p className="mt-3">
          The correspondence is: <InlineMath>Q \mapsto \iota^{"{-1}"}(Q)</InlineMath>
          and <InlineMath>P \mapsto S^{"{-1}"}P</InlineMath>.
        </p>
      </div>

      <h3>Local Rings</h3>

      <div className="bg-dark-800/50 rounded-xl p-6 border border-dark-700 my-6">
        <h4 className="text-primary-400 mb-4">Definition</h4>
        <p>
          A ring <InlineMath>R</InlineMath> is <strong>local</strong> if it has a unique maximal ideal.
        </p>
      </div>

      <div className="bg-dark-800/50 rounded-xl p-6 border border-dark-700 my-6">
        <h4 className="text-primary-400 mb-4">Theorem</h4>
        <p>
          If <InlineMath>P</InlineMath> is a prime ideal of <InlineMath>R</InlineMath>,
          then <InlineMath>R_P</InlineMath> is a local ring with unique maximal
          ideal <InlineMath>PR_P</InlineMath>.
        </p>
      </div>

      <Callout type="info">
        <strong>Geometric interpretation:</strong> <InlineMath>R_P</InlineMath> captures
        the "local behavior" of <InlineMath>\text{"{Spec}"}(R)</InlineMath>
        at the point <InlineMath>P</InlineMath>. It contains information about germs of
        functions at that point.
      </Callout>

      <h3>Examples in Algebraic Geometry</h3>

      <div className="bg-dark-800 p-4 rounded-lg my-4 border-l-4 border-purple-500">
        <p className="font-semibold text-purple-400">Local Ring at a Point</p>
        <p className="mt-2">
          For a variety <InlineMath>V \subseteq k^n</InlineMath> and
          point <InlineMath>P \in V</InlineMath>, the local
          ring <InlineMath>\mathcal{"{O}"}_{"{V,P}"}</InlineMath> is <InlineMath>k[V]_\mathfrak{"{m}"}</InlineMath>
          where <InlineMath>\mathfrak{"{m}"}</InlineMath> is the maximal ideal
          of functions vanishing at <InlineMath>P</InlineMath>.
        </p>
        <p className="mt-2">
          This captures "rational functions defined at P."
        </p>
      </div>

      <Callout type="success">
        <strong>Summary:</strong> Localization <InlineMath>S^{"{-1}"}R</InlineMath>
        formally inverts elements of a multiplicative set <InlineMath>S</InlineMath>,
        generalizing fraction fields. Key cases: <InlineMath>R_f</InlineMath>
        (inverting one element) and <InlineMath>R_P</InlineMath> (localizing at a prime).
        The latter gives a local ring, capturing behavior "near a point." Localization
        is exact and preserves Noetherian property. Prime ideals correspond bijectively
        to primes avoiding <InlineMath>S</InlineMath>.
      </Callout>
    </LessonLayout>
  );
}
