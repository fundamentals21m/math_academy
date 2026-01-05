import { LessonLayout } from '../../components/layout/LessonLayout';
import { Callout } from '../../components/common/Callout';
import { InlineMath, MathBlock } from '../../components/common/MathBlock';
import { SectionQuiz } from '../../components/quiz';
import { section43Questions } from '../../data/quizzes';

export default function Section43() {
  return (
    <LessonLayout sectionId={43}>
      <h2 className="text-2xl font-semibold mb-4">Additive Functions</h2>

      <Callout type="warning">
        <p>
          <strong>Advanced Section:</strong> This section introduces the concept
          of additive functions and their role in proving the Dehn invariant
          distinguishes non-equidecomposable polyhedra.
        </p>
      </Callout>

      <p className="text-dark-200 mb-6 text-lg leading-relaxed mt-6">
        To show that the tetrahedron and cube have <em>different</em> Dehn
        invariants, we need to understand when tensors like{' '}
        <InlineMath>l_1 \otimes \alpha_1 + \cdots + l_k \otimes \alpha_k</InlineMath>{' '}
        can equal zero. The key tool is <strong>additive functions</strong>.
      </p>

      {/* From Tensors to Functions */}
      <h3 className="text-xl font-semibold mt-10 mb-4">
        From Tensors to Functions
      </h3>

      <p className="text-dark-200 mb-6">
        The nearest thing to a tensor{' '}
        <InlineMath>l_1 \otimes \alpha_1 + \cdots + l_k \otimes \alpha_k</InlineMath>{' '}
        in ordinary algebra is an expression{' '}
        <InlineMath>l_1 f(\alpha_1) + \cdots + l_k f(\alpha_k)</InlineMath>, where{' '}
        <InlineMath>f</InlineMath> satisfies properties analogous to the tensor
        rules:
      </p>

      <div className="bg-dark-800 rounded-lg p-6 mb-6">
        <ul className="space-y-3 text-dark-200">
          <li>
            • <InlineMath>f(\alpha + \beta) = f(\alpha) + f(\beta)</InlineMath>{' '}
            (additivity)
          </li>
          <li>
            • <InlineMath>f(\pi) = 0</InlineMath>
          </li>
        </ul>
      </div>

      {/* Additive Functions */}
      <h3 className="text-xl font-semibold mt-10 mb-4">
        What Are Additive Functions?
      </h3>

      <p className="text-dark-200 mb-6">
        A function <InlineMath>f: \mathbb{'{R}'} \to \mathbb{'{R}'}</InlineMath> is{' '}
        <strong>additive</strong> if:
      </p>

      <MathBlock>{`f(\\alpha + \\beta) = f(\\alpha) + f(\\beta)`}</MathBlock>

      <p className="text-dark-200 my-6">
        The simplest additive functions are <InlineMath>f(x) = kx</InlineMath>{' '}
        for constant <InlineMath>k</InlineMath>. But if <InlineMath>f(\pi) = 0</InlineMath>{' '}
        as well, then <InlineMath>k\pi = 0</InlineMath>, so{' '}
        <InlineMath>k = 0</InlineMath>. This gives only the trivial zero function!
      </p>

      <Callout type="info">
        <p>
          The key insight: we don't need additive functions defined on{' '}
          <em>all</em> of <InlineMath>\mathbb{'{R}'}</InlineMath>. We only need them
          on <strong>finite sets</strong> of angles, and these can be constructed.
        </p>
      </Callout>

      {/* Bases Over Q */}
      <h3 className="text-xl font-semibold mt-10 mb-4">Bases Over ℚ</h3>

      <p className="text-dark-200 mb-6">
        A <strong>basis over ℚ</strong> for a finite set{' '}
        <InlineMath>S</InlineMath> of real numbers is a set{' '}
        <InlineMath>{`\\{\\beta_1, \\beta_2, \\ldots, \\beta_n\\}`}</InlineMath>{' '}
        such that:
      </p>

      <div className="bg-dark-800 rounded-lg p-6 mb-6">
        <ol className="space-y-3 text-dark-200 list-decimal list-inside">
          <li>
            Each <InlineMath>x</InlineMath> in <InlineMath>S</InlineMath> is a{' '}
            <strong>rational combination</strong>:{' '}
            <InlineMath>x = r_1\beta_1 + r_2\beta_2 + \cdots + r_n\beta_n</InlineMath>
          </li>
          <li>
            The <InlineMath>\beta_i</InlineMath> are <strong>rationally independent</strong>:{' '}
            <InlineMath>r_1\beta_1 + \cdots + r_n\beta_n = 0</InlineMath> only if
            all <InlineMath>r_i = 0</InlineMath>
          </li>
        </ol>
      </div>

      <p className="text-dark-200 mb-6">
        Any finite set of reals has such a basis. From it, we can define additive
        functions <InlineMath>f_i(x) = r_i</InlineMath> that extract the coefficient
        of each basis element.
      </p>

      {/* The Key Theorem */}
      <h3 className="text-xl font-semibold mt-10 mb-4">
        The Rational Independence Theorem
      </h3>

      <div className="bg-dark-800 rounded-lg p-6 mb-6 border-l-4 border-blue-400">
        <h4 className="text-lg font-semibold mb-3 text-blue-400">
          Rational Independence Theorem
        </h4>
        <p className="text-dark-200">
          If <InlineMath>\alpha_1, \alpha_2, \ldots, \alpha_k</InlineMath> and{' '}
          <InlineMath>\pi</InlineMath> are <strong>rationally independent</strong>,
          then:
        </p>
        <MathBlock>
          {`l_1 \\otimes \\alpha_1 + l_2 \\otimes \\alpha_2 + \\cdots + l_k \\otimes \\alpha_k = 0`}
        </MathBlock>
        <p className="text-dark-200 mt-3">
          only if <InlineMath>l_1 = l_2 = \cdots = l_k = 0</InlineMath>.
        </p>
      </div>

      <p className="text-dark-200 mb-6">
        This is the crucial link between rational independence and equidecomposability!
        If the dihedral angle <InlineMath>\alpha</InlineMath> of a tetrahedron is
        rationally independent of <InlineMath>\pi</InlineMath>, then{' '}
        <InlineMath>l \otimes \alpha \neq 0</InlineMath> for any{' '}
        <InlineMath>l \neq 0</InlineMath>.
      </p>

      {/* Application to Rectangles */}
      <h3 className="text-xl font-semibold mt-10 mb-4">
        Application: Rectangle Dissection
      </h3>

      <p className="text-dark-200 mb-6">
        The same ideas apply to a simpler problem: can a rectangle with sides{' '}
        <InlineMath>\sqrt{'{2}'}</InlineMath> and <InlineMath>1/\sqrt{'{2}'}</InlineMath>{' '}
        (area 1) be converted to a unit square by horizontal and vertical cuts?
      </p>

      <p className="text-dark-200 mb-6">
        Using <InlineMath>\mathbb{'{R}'} \otimes \mathbb{'{R}'}</InlineMath> (tensors for
        rectangles), we can show it's <strong>impossible</strong> because{' '}
        <InlineMath>\sqrt{'{2}'}</InlineMath> and <InlineMath>1</InlineMath> are
        rationally independent.
      </p>

      {/* Key Takeaways */}
      <h3 className="text-xl font-semibold mt-10 mb-4">Key Takeaways</h3>

      <div className="bg-dark-800 rounded-lg p-6">
        <ul className="space-y-3">
          <li className="flex items-start gap-3">
            <span className="text-amber-400 font-bold">1.</span>
            <span>
              <strong>Additive functions</strong> satisfy{' '}
              <InlineMath>f(\alpha + \beta) = f(\alpha) + f(\beta)</InlineMath>.
            </span>
          </li>
          <li className="flex items-start gap-3">
            <span className="text-amber-400 font-bold">2.</span>
            <span>
              A <strong>basis over ℚ</strong> lets us construct useful additive
              functions on finite sets.
            </span>
          </li>
          <li className="flex items-start gap-3">
            <span className="text-amber-400 font-bold">3.</span>
            <span>
              <strong>Rational independence</strong> of angles with{' '}
              <InlineMath>\pi</InlineMath> implies the tensor is nonzero.
            </span>
          </li>
          <li className="flex items-start gap-3">
            <span className="text-amber-400 font-bold">4.</span>
            <span>
              This links <strong>number theory</strong> to{' '}
              <strong>equidecomposability</strong>.
            </span>
          </li>
        </ul>
      </div>

      {/* Section Quiz */}
      <SectionQuiz sectionId={43} questions={section43Questions} />
    </LessonLayout>
  );
}
