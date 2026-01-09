import { LessonLayout } from '@/components/layout/LessonLayout';
import { Callout } from '@/components/common/Callout';
import { MathBlock, InlineMath } from '@/components/common/MathBlock';

export default function Section76() {
  return (
    <LessonLayout sectionId={76}>
      <h2>Transcendental Extensions</h2>
      <p>
        Not all field extensions are algebraic. <strong>Transcendental extensions</strong>
        contain elements that satisfy no polynomial over the base field. These extensions
        are fundamental in algebraic geometry (function fields) and lead to concepts
        like transcendence degree and algebraic independence.
      </p>

      <Callout type="info">
        <strong>Two Worlds:</strong> Algebraic extensions (finite or infinite) are governed
        by Galois theory. Transcendental extensions require different tools: transcendence
        degree plays the role of dimension in algebraic geometry.
      </Callout>

      <h3>Transcendental Elements</h3>

      <div className="bg-dark-800/50 rounded-xl p-6 border border-dark-700 my-6">
        <h4 className="text-primary-400 mb-4">Definition</h4>
        <p>
          An element <InlineMath>\alpha</InlineMath> in an extension <InlineMath>K/F</InlineMath>
          is <strong>transcendental over F</strong> if it is not algebraic over <InlineMath>F</InlineMath>,
          i.e., if no nonzero polynomial <InlineMath>f(x) \in F[x]</InlineMath>
          satisfies <InlineMath>f(\alpha) = 0</InlineMath>.
        </p>
      </div>

      <div className="bg-dark-800 p-4 rounded-lg my-4 border-l-4 border-amber-500">
        <p className="font-semibold text-amber-400">Famous Transcendental Numbers</p>
        <ul className="list-disc list-inside space-y-2 mt-2 text-dark-300">
          <li><InlineMath>e</InlineMath> — proved transcendental by Hermite (1873)</li>
          <li><InlineMath>\pi</InlineMath> — proved transcendental by Lindemann (1882)</li>
          <li><InlineMath>e^\pi</InlineMath> — by Gelfond-Schneider theorem</li>
          <li><InlineMath>2^{"\sqrt{2}"}</InlineMath> — by Gelfond-Schneider theorem</li>
        </ul>
        <p className="mt-3 text-dark-300">
          Most real numbers are transcendental (uncountably many), though proving
          specific numbers transcendental is usually hard.
        </p>
      </div>

      <h3>Simple Transcendental Extensions</h3>

      <div className="bg-dark-800/50 rounded-xl p-6 border border-dark-700 my-6">
        <h4 className="text-primary-400 mb-4">Theorem</h4>
        <p>
          If <InlineMath>t</InlineMath> is transcendental over <InlineMath>F</InlineMath>, then:
        </p>
        <MathBlock>{`F(t) \\cong F(x) = \\text{Frac}(F[x])`}</MathBlock>
        <p className="mt-3">
          the field of rational functions in one variable over <InlineMath>F</InlineMath>.
        </p>
      </div>

      <p>
        This is the key difference from algebraic extensions: if <InlineMath>\alpha</InlineMath>
        is algebraic with minimal polynomial of degree <InlineMath>n</InlineMath>,
        then <InlineMath>F(\alpha) \cong F[x]/(m_\alpha(x))</InlineMath> is finite-dimensional.
        But <InlineMath>F(t)</InlineMath> is infinite-dimensional over <InlineMath>F</InlineMath>.
      </p>

      <h3>Algebraic Independence</h3>

      <div className="bg-dark-800/50 rounded-xl p-6 border border-dark-700 my-6">
        <h4 className="text-primary-400 mb-4">Definition</h4>
        <p>
          Elements <InlineMath>\alpha_1, \ldots, \alpha_n \in K</InlineMath>
          are <strong>algebraically independent over F</strong> if there is no nonzero
          polynomial <InlineMath>f \in F[x_1, \ldots, x_n]</InlineMath>
          with <InlineMath>f(\alpha_1, \ldots, \alpha_n) = 0</InlineMath>.
        </p>
        <p className="mt-3">
          Otherwise they are <strong>algebraically dependent</strong>.
        </p>
      </div>

      <div className="bg-dark-800 p-4 rounded-lg my-4 border-l-4 border-blue-500">
        <p className="font-semibold text-blue-400">Example</p>
        <p className="mt-2">
          <InlineMath>t</InlineMath> and <InlineMath>t^2</InlineMath> are algebraically dependent
          over <InlineMath>F</InlineMath> (satisfy <InlineMath>y - x^2 = 0</InlineMath>).
        </p>
        <p className="mt-2">
          <InlineMath>s</InlineMath> and <InlineMath>t</InlineMath> in <InlineMath>F(s, t)</InlineMath>
          (independent transcendentals) are algebraically independent.
        </p>
      </div>

      <h3>Transcendence Degree</h3>

      <div className="bg-dark-800/50 rounded-xl p-6 border border-dark-700 my-6">
        <h4 className="text-primary-400 mb-4">Definition: Transcendence Basis</h4>
        <p>
          A <strong>transcendence basis</strong> of <InlineMath>K/F</InlineMath> is a maximal
          algebraically independent subset <InlineMath>B \subseteq K</InlineMath>.
        </p>
        <p className="mt-3">
          Equivalently, <InlineMath>B</InlineMath> is algebraically independent
          and <InlineMath>K</InlineMath> is algebraic over <InlineMath>F(B)</InlineMath>.
        </p>
      </div>

      <div className="bg-dark-800/50 rounded-xl p-6 border border-dark-700 my-6">
        <h4 className="text-primary-400 mb-4">Theorem: Well-Defined Transcendence Degree</h4>
        <p>
          Any two transcendence bases of <InlineMath>K/F</InlineMath> have the same cardinality.
        </p>
      </div>

      <div className="bg-dark-800/50 rounded-xl p-6 border border-dark-700 my-6">
        <h4 className="text-primary-400 mb-4">Definition: Transcendence Degree</h4>
        <p>
          The <strong>transcendence degree</strong> of <InlineMath>K/F</InlineMath>,
          denoted <InlineMath>\text{"{tr.deg}"}_F K</InlineMath> or <InlineMath>\text{"{trdeg}"}(K/F)</InlineMath>,
          is the cardinality of any transcendence basis.
        </p>
      </div>

      <div className="bg-dark-800 p-4 rounded-lg my-4 border-l-4 border-amber-500">
        <p className="font-semibold text-amber-400">Examples</p>
        <ul className="list-disc list-inside space-y-2 mt-2 text-dark-300">
          <li><InlineMath>\text{"{tr.deg}"}_\mathbb{"{Q}"} \mathbb{"{Q}"} = 0</InlineMath> (algebraic extension of itself)</li>
          <li><InlineMath>\text{"{tr.deg}"}_\mathbb{"{Q}"} \mathbb{"{Q}"}(t) = 1</InlineMath> (one transcendental)</li>
          <li><InlineMath>\text{"{tr.deg}"}_\mathbb{"{Q}"} \mathbb{"{Q}"}(s,t) = 2</InlineMath> (two independent transcendentals)</li>
          <li><InlineMath>\text{"{tr.deg}"}_\mathbb{"{Q}"} \mathbb{"{R}"} = 2^{"\aleph_0"}</InlineMath> (uncountable!)</li>
          <li><InlineMath>\text{"{tr.deg}"}_\mathbb{"{Q}"} \mathbb{"{C}"} = 2^{"\aleph_0"}</InlineMath></li>
        </ul>
      </div>

      <h3>Tower Law for Transcendence Degree</h3>

      <div className="bg-dark-800/50 rounded-xl p-6 border border-dark-700 my-6">
        <h4 className="text-primary-400 mb-4">Theorem</h4>
        <p>
          If <InlineMath>F \subseteq K \subseteq L</InlineMath>, then:
        </p>
        <MathBlock>{`\\text{tr.deg}_F L = \\text{tr.deg}_F K + \\text{tr.deg}_K L`}</MathBlock>
      </div>

      <h3>Function Fields</h3>

      <p>
        The most important transcendental extensions in algebraic geometry are <strong>function fields</strong>:
      </p>

      <div className="bg-dark-800/50 rounded-xl p-6 border border-dark-700 my-6">
        <h4 className="text-primary-400 mb-4">Definition</h4>
        <p>
          A <strong>function field</strong> over <InlineMath>k</InlineMath> is a finitely generated
          extension <InlineMath>K/k</InlineMath> with <InlineMath>\text{"{tr.deg}"}_k K = n &gt; 0</InlineMath>.
        </p>
        <p className="mt-3">
          The integer <InlineMath>n</InlineMath> is called the <strong>dimension</strong>
          of the function field.
        </p>
      </div>

      <div className="bg-dark-800 p-4 rounded-lg my-4 border-l-4 border-emerald-500">
        <p className="font-semibold text-emerald-400">Function Fields of Varieties</p>
        <p className="mt-2">
          For an irreducible variety <InlineMath>V \subseteq \mathbb{"{A}"}^n</InlineMath>
          over <InlineMath>k</InlineMath>, the function field <InlineMath>k(V)</InlineMath>
          is the fraction field of the coordinate ring.
        </p>
        <p className="mt-2">
          <InlineMath>\text{"{tr.deg}"}_k \, k(V) = \dim V</InlineMath>
        </p>
        <p className="mt-2">
          This is the algebraic definition of dimension in algebraic geometry!
        </p>
      </div>

      <h3>Luroth's Theorem</h3>

      <div className="bg-dark-800/50 rounded-xl p-6 border border-dark-700 my-6">
        <h4 className="text-primary-400 mb-4">Theorem (Luroth)</h4>
        <p>
          If <InlineMath>K</InlineMath> is a field with <InlineMath>F \subsetneq K \subseteq F(t)</InlineMath>
          (where <InlineMath>t</InlineMath> is transcendental over <InlineMath>F</InlineMath>),
          then <InlineMath>K = F(u)</InlineMath> for some <InlineMath>u</InlineMath>.
        </p>
        <p className="mt-3">
          That is, every intermediate field of a simple transcendental extension is itself
          a simple transcendental extension.
        </p>
      </div>

      <Callout type="warning">
        <strong>Luroth fails in higher dimension!</strong> There exist intermediate
        fields <InlineMath>F \subset K \subset F(s, t)</InlineMath> that are not
        of the form <InlineMath>F(u, v)</InlineMath>. This is related to the
        problem of rational parameterization in algebraic geometry.
      </Callout>

      <h3>Purelу Transcendental Extensions</h3>

      <div className="bg-dark-800/50 rounded-xl p-6 border border-dark-700 my-6">
        <h4 className="text-primary-400 mb-4">Definition</h4>
        <p>
          An extension <InlineMath>K/F</InlineMath> is <strong>purely transcendental</strong>
          if <InlineMath>K = F(T)</InlineMath> for some algebraically independent set <InlineMath>T</InlineMath>.
        </p>
        <p className="mt-3">
          Equivalently, <InlineMath>K \cong F(x_1, x_2, \ldots)</InlineMath> (rational functions).
        </p>
      </div>

      <Callout type="success">
        <strong>Summary:</strong> Transcendental extensions contain elements satisfying
        no polynomial over the base field. The key invariant is transcendence degree,
        which is additive in towers. Function fields in algebraic geometry have
        transcendence degree equal to the variety's dimension. Luroth's theorem
        describes intermediate fields in simple transcendental extensions but fails
        for higher transcendence degree.
      </Callout>
    </LessonLayout>
  );
}
