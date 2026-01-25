import { LessonLayout } from '@/components/layout';
import { Definition, Theorem, Example } from '@/components/common';
import { Callout } from '@/components/common';
import { Math, MathBlock } from '@/components/common';

export default function Section42() {
  return (
    <LessonLayout sectionId={42}>
      <p>
        We now introduce the notion of left and right limits, which can be thought of as two
        separate "halves" of the complete limit <Math>{String.raw`\lim_{x \to x_0; x \in X} f(x)`}</Math>.
        These one-sided limits are essential for understanding discontinuities and for defining
        derivatives.
      </p>

      <Definition id="9.5.1" title="Left and right limits">
        <p>
          Let <Math>X</Math> be a subset of <Math>{String.raw`\mathbb{R}`}</Math>, <Math>{String.raw`f: X \to \mathbb{R}`}</Math> be a function,
          and let <Math>x_0</Math> be a real number.
        </p>
        <p className="mt-2">
          If <Math>x_0</Math> is an adherent point of <Math>{String.raw`X \cap (x_0, \infty)`}</Math>, then we define
          the <strong>right limit</strong> <Math>f(x_0+)</Math> of <Math>f</Math> at <Math>x_0</Math> by the formula
        </p>
        <MathBlock>{String.raw`f(x_0+) := \lim_{x \to x_0; x \in X \cap (x_0, \infty)} f(x),`}</MathBlock>
        <p>
          provided of course that this limit exists.
        </p>
        <p className="mt-2">
          Similarly, if <Math>x_0</Math> is an adherent point of <Math>{String.raw`X \cap (-\infty, x_0)`}</Math>, then
          we define the <strong>left limit</strong> <Math>f(x_0-)</Math> of <Math>f</Math> at <Math>x_0</Math> by the formula
        </p>
        <MathBlock>{String.raw`f(x_0-) := \lim_{x \to x_0; x \in X \cap (-\infty, x_0)} f(x),`}</MathBlock>
        <p>
          again provided that the limit exists. (Thus in many cases <Math>f(x_0+)</Math> and <Math>f(x_0-)</Math> will
          not be defined.)
        </p>
      </Definition>

      <Callout type="info" title="Shorthand notation">
        <p>
          Sometimes we use the shorthand notations
        </p>
        <MathBlock>{String.raw`\lim_{x \to x_0+} f(x) := \lim_{x \to x_0; x \in X \cap (x_0, \infty)} f(x)`}</MathBlock>
        <MathBlock>{String.raw`\lim_{x \to x_0-} f(x) := \lim_{x \to x_0; x \in X \cap (-\infty, x_0)} f(x)`}</MathBlock>
        <p className="mt-2">
          when the domain <Math>X</Math> of <Math>f</Math> is clear from context.
        </p>
      </Callout>

      <Example id="9.5.2" title="Left and right limits of the signum function">
        <p>
          Consider the signum function <Math>{String.raw`\text{sgn}: \mathbb{R} \to \mathbb{R}`}</Math> defined in
          Example 9.3.16. We have
        </p>
        <MathBlock>{String.raw`\text{sgn}(0+) = \lim_{x \to 0; x \in \mathbb{R} \cap (0, \infty)} \text{sgn}(x) = \lim_{x \to 0; x \in (0, \infty)} 1 = 1`}</MathBlock>
        <p>and</p>
        <MathBlock>{String.raw`\text{sgn}(0-) = \lim_{x \to 0; x \in \mathbb{R} \cap (-\infty, 0)} \text{sgn}(x) = \lim_{x \to 0; x \in (-\infty, 0)} (-1) = -1,`}</MathBlock>
        <p>
          while <Math>{String.raw`\text{sgn}(0) = 0`}</Math> by definition.
        </p>
        <p className="mt-2">
          Notice that the left and right limits exist but are different from each other, and both
          are different from the function value at 0.
        </p>
      </Example>

      <Callout type="warning" title="Limits can exist without the function being defined">
        <p>
          Note that <Math>f</Math> does not necessarily have to be defined at <Math>x_0</Math> in order
          for <Math>f(x_0+)</Math> or <Math>f(x_0-)</Math> to be defined. For instance, if{' '}
          <Math>{String.raw`f: \mathbb{R} \setminus \{0\} \to \mathbb{R}`}</Math> is the function <Math>f(x) := x/|x|</Math>,
          then <Math>f(0+) = 1</Math> and <Math>f(0-) = -1</Math>, even though <Math>f(0)</Math> is undefined.
        </p>
      </Callout>

      <h2 className="text-2xl font-bold mt-8 mb-4">Sequential Characterization</h2>

      <p>
        From Proposition 9.4.7 we see that if the right limit <Math>f(x_0+)</Math> exists,
        and <Math>{String.raw`(a_n)_{n=0}^\infty`}</Math> is a sequence in <Math>X</Math> converging to <Math>x_0</Math> from
        the right (i.e., <Math>{String.raw`a_n > x_0`}</Math> for all <Math>{String.raw`n \in \mathbb{N}`}</Math>), then
      </p>
      <MathBlock>{String.raw`\lim_{n \to \infty} f(a_n) = f(x_0+).`}</MathBlock>
      <p>
        Similarly, if <Math>{String.raw`(b_n)_{n=0}^\infty`}</Math> is a sequence converging to <Math>x_0</Math> from
        the left (i.e., <Math>{String.raw`b_n < x_0`}</Math> for all <Math>{String.raw`n \in \mathbb{N}`}</Math>), then
      </p>
      <MathBlock>{String.raw`\lim_{n \to \infty} f(b_n) = f(x_0-).`}</MathBlock>

      <h2 className="text-2xl font-bold mt-8 mb-4">One-Sided Limits and Continuity</h2>

      <p>
        Let <Math>x_0</Math> be an adherent point of both <Math>{String.raw`X \cap (x_0, \infty)`}</Math> and{' '}
        <Math>{String.raw`X \cap (-\infty, x_0)`}</Math>. If <Math>f</Math> is continuous at <Math>x_0</Math>, it is
        clear from Proposition 9.4.7 that <Math>f(x_0+)</Math> and <Math>f(x_0-)</Math> both exist and are
        equal to <Math>f(x_0)</Math>.
      </p>

      <p className="mt-4">
        A converse is also true:
      </p>

      <Theorem id="9.5.3" title="Proposition: Continuity from one-sided limits">
        <p>
          Let <Math>X</Math> be a subset of <Math>{String.raw`\mathbb{R}`}</Math> containing a real number <Math>x_0</Math>,
          and suppose that <Math>x_0</Math> is an adherent point of both <Math>{String.raw`X \cap (x_0, \infty)`}</Math> and{' '}
          <Math>{String.raw`X \cap (-\infty, x_0)`}</Math>. Let <Math>{String.raw`f: X \to \mathbb{R}`}</Math> be a function.
          If <Math>f(x_0+)</Math> and <Math>f(x_0-)</Math> both exist and are both equal to <Math>f(x_0)</Math>,
          then <Math>f</Math> is continuous at <Math>x_0</Math>.
        </p>
        <details className="mt-4">
          <summary className="cursor-pointer text-amber-600 hover:text-amber-500 font-medium">Proof</summary>
          <div className="mt-2 pl-4 border-l-2 border-amber-200">
            <p>
              Let us write <Math>L := f(x_0)</Math>. Then by hypothesis we have
            </p>
            <MathBlock>{String.raw`\lim_{x \to x_0; x \in X \cap (x_0, \infty)} f(x) = L`}</MathBlock>
            <p>and</p>
            <MathBlock>{String.raw`\lim_{x \to x_0; x \in X \cap (-\infty, x_0)} f(x) = L.`}</MathBlock>
            <p className="mt-2">
              Let <Math>{String.raw`\varepsilon > 0`}</Math> be given. From the first equation and Proposition 9.4.7,
              there exists a <Math>{String.raw`\delta_+ > 0`}</Math> such that <Math>{String.raw`|f(x) - L| < \varepsilon`}</Math> for
              all <Math>{String.raw`x \in X \cap (x_0, \infty)`}</Math> with <Math>{String.raw`|x - x_0| < \delta_+`}</Math>.
            </p>
            <p className="mt-2">
              From the second equation, there exists a <Math>{String.raw`\delta_- > 0`}</Math> such
              that <Math>{String.raw`|f(x) - L| < \varepsilon`}</Math> for all <Math>{String.raw`x \in X \cap (-\infty, x_0)`}</Math> with{' '}
              <Math>{String.raw`|x - x_0| < \delta_-`}</Math>.
            </p>
            <p className="mt-2">
              Now let <Math>{String.raw`\delta := \min(\delta_-, \delta_+)`}</Math>; then <Math>{String.raw`\delta > 0`}</Math>.
              Suppose that <Math>x \in X</Math> is such that <Math>{String.raw`|x - x_0| < \delta`}</Math>. There are three
              cases: <Math>{String.raw`x > x_0`}</Math>, <Math>x = x_0</Math>, and <Math>{String.raw`x < x_0`}</Math>, but in all three
              cases we know that <Math>{String.raw`|f(x) - L| < \varepsilon`}</Math>. (For <Math>x = x_0</Math>,
              we have <Math>f(x) = f(x_0) = L</Math>, so <Math>|f(x) - L| = 0</Math>.)
            </p>
            <p className="mt-2">
              By Proposition 9.4.7 we thus have that <Math>f</Math> is continuous at <Math>x_0</Math>.
            </p>
          </div>
        </details>
      </Theorem>

      <h2 className="text-2xl font-bold mt-8 mb-4">Types of Discontinuities</h2>

      <p>
        As we saw with the signum function, it is possible for the left and right
        limits <Math>f(x_0-)</Math>, <Math>f(x_0+)</Math> of a function <Math>f</Math> at a point <Math>x_0</Math> to both
        exist, but not be equal to each other.
      </p>

      <Definition id="9.5.4a" title="Jump discontinuity">
        <p>
          When the left and right limits <Math>f(x_0-)</Math> and <Math>f(x_0+)</Math> both exist but are not
          equal to each other, we say that <Math>f</Math> has a <strong>jump discontinuity</strong> at <Math>x_0</Math>.
        </p>
      </Definition>

      <Example id="9.5.4b" title="Jump discontinuity example">
        <p>
          The signum function has a jump discontinuity at zero, since <Math>{String.raw`\text{sgn}(0+) = 1`}</Math> and{' '}
          <Math>{String.raw`\text{sgn}(0-) = -1`}</Math>.
        </p>
      </Example>

      <Definition id="9.5.4c" title="Removable discontinuity">
        <p>
          It is also possible for the left and right limits <Math>f(x_0-)</Math>, <Math>f(x_0+)</Math> to
          exist and be equal to each other, but not be equal to <Math>f(x_0)</Math>. When this happens
          we say that <Math>f</Math> has a <strong>removable discontinuity</strong> (or <strong>removable singularity</strong>)
          at <Math>x_0</Math>.
        </p>
      </Definition>

      <Example id="9.5.4d" title="Removable discontinuity example">
        <p>
          If we take <Math>{String.raw`f: \mathbb{R} \to \mathbb{R}`}</Math> to be the function
        </p>
        <MathBlock>{String.raw`f(x) := \begin{cases} 1 & \text{if } x = 0 \\ 0 & \text{if } x \neq 0 \end{cases}`}</MathBlock>
        <p className="mt-2">
          then <Math>f(0+)</Math> and <Math>f(0-)</Math> both exist and equal 0, but <Math>f(0) = 1</Math>.
          Thus <Math>f</Math> has a removable discontinuity at 0.
        </p>
        <p className="mt-2">
          The discontinuity is called "removable" because we could redefine <Math>f(0) := 0</Math> and
          the resulting function would be continuous at 0.
        </p>
      </Example>

      <h2 className="text-2xl font-bold mt-8 mb-4">Other Types of Discontinuities</h2>

      <Callout type="info" title="Asymptotic discontinuities">
        <p>
          Jump discontinuities and removable discontinuities are not the only way a function can
          be discontinuous. Another way is for a function to go to infinity at the discontinuity.
        </p>
        <p className="mt-2">
          For instance, the function <Math>{String.raw`f: \mathbb{R} \setminus \{0\} \to \mathbb{R}`}</Math> defined
          by <Math>f(x) := 1/x</Math> has a discontinuity at 0 which is neither a jump discontinuity nor
          a removable singularity. Informally, <Math>f(x)</Math> converges to <Math>+\infty</Math> when <Math>x</Math> approaches
          0 from the right, and converges to <Math>-\infty</Math> when <Math>x</Math> approaches 0 from the left.
        </p>
        <p className="mt-2">
          These types of singularities are sometimes known as <strong>asymptotic discontinuities</strong>.
        </p>
      </Callout>

      <Callout type="info" title="Oscillatory discontinuities">
        <p>
          There are also <strong>oscillatory discontinuities</strong>, where the function remains bounded
          but still does not have a limit near <Math>x_0</Math>.
        </p>
        <p className="mt-2">
          For instance, the function <Math>{String.raw`f: \mathbb{R} \to \mathbb{R}`}</Math> defined by
        </p>
        <MathBlock>{String.raw`f(x) := \begin{cases} 1 & \text{if } x \in \mathbb{Q} \\ 0 & \text{if } x \notin \mathbb{Q} \end{cases}`}</MathBlock>
        <p className="mt-2">
          has an oscillatory discontinuity at 0 (and in fact at any other real number). This is
          because the function does not have left or right limits at 0, despite the fact that the
          function is bounded.
        </p>
      </Callout>

      <h2 className="text-2xl font-bold mt-8 mb-4">Summary of Discontinuity Types</h2>

      <div className="bg-gray-800 p-4 rounded-lg mt-4">
        <table className="w-full text-left">
          <thead>
            <tr className="border-b border-gray-600">
              <th className="pb-2">Type</th>
              <th className="pb-2">Characterization</th>
              <th className="pb-2">Example</th>
            </tr>
          </thead>
          <tbody className="space-y-2">
            <tr className="border-b border-gray-700">
              <td className="py-2 font-medium">Removable</td>
              <td className="py-2"><Math>{String.raw`f(x_0+) = f(x_0-) \neq f(x_0)`}</Math></td>
              <td className="py-2"><Math>f(x) = 0</Math> for <Math>x \neq 0</Math>, <Math>f(0) = 1</Math></td>
            </tr>
            <tr className="border-b border-gray-700">
              <td className="py-2 font-medium">Jump</td>
              <td className="py-2"><Math>{String.raw`f(x_0+) \neq f(x_0-)`}</Math>, both exist</td>
              <td className="py-2">Signum function at 0</td>
            </tr>
            <tr className="border-b border-gray-700">
              <td className="py-2 font-medium">Asymptotic</td>
              <td className="py-2">One-sided limit is <Math>\pm \infty</Math></td>
              <td className="py-2"><Math>f(x) = 1/x</Math> at 0</td>
            </tr>
            <tr>
              <td className="py-2 font-medium">Oscillatory</td>
              <td className="py-2">Bounded but no one-sided limits</td>
              <td className="py-2">Dirichlet function</td>
            </tr>
          </tbody>
        </table>
      </div>

      <Callout type="info" title="Further study">
        <p>
          The study of discontinuities (also called singularities) continues further but is beyond
          the scope of this text. For instance, singularities play a key role in complex analysis.
        </p>
      </Callout>

      <h2 className="text-2xl font-bold mt-8 mb-4">Key Takeaways</h2>

      <div className="space-y-4 mt-4">
        <div className="p-4 bg-blue-900/30 border border-blue-700 rounded-lg">
          <p className="font-medium">Continuity via one-sided limits</p>
          <p className="mt-2">
            A function <Math>f</Math> is continuous at <Math>x_0</Math> if and only if:
          </p>
          <ol className="list-decimal ml-6 mt-2 space-y-1">
            <li><Math>f(x_0+)</Math> exists (if <Math>x_0</Math> is an adherent point from the right)</li>
            <li><Math>f(x_0-)</Math> exists (if <Math>x_0</Math> is an adherent point from the left)</li>
            <li><Math>f(x_0+) = f(x_0-) = f(x_0)</Math></li>
          </ol>
        </div>

        <div className="p-4 bg-blue-900/30 border border-blue-700 rounded-lg">
          <p className="font-medium">Diagnosing discontinuities</p>
          <p className="mt-2">
            If a function is discontinuous at <Math>x_0</Math>, checking the one-sided limits helps
            classify the type of discontinuity:
          </p>
          <ul className="list-disc ml-6 mt-2 space-y-1">
            <li>If both exist and are equal but differ from <Math>f(x_0)</Math>: removable</li>
            <li>If both exist but are different: jump</li>
            <li>If one or both are infinite: asymptotic</li>
            <li>If one or both don't exist (but bounded): oscillatory</li>
          </ul>
        </div>
      </div>

      <h2 className="text-2xl font-bold mt-8 mb-4">Exercises</h2>

      <div className="space-y-4">
        <div className="p-4 border border-gray-700 rounded-lg">
          <p className="font-medium">Exercise 9.5.1</p>
          <p className="mt-2">
            Let <Math>{String.raw`f: \mathbb{R} \to \mathbb{R}`}</Math> be defined by
          </p>
          <MathBlock>{String.raw`f(x) := \begin{cases} x & \text{if } x \geq 0 \\ -x & \text{if } x < 0 \end{cases}`}</MathBlock>
          <p className="mt-2">
            Compute <Math>f(0+)</Math> and <Math>f(0-)</Math>. Is <Math>f</Math> continuous at 0?
          </p>
        </div>

        <div className="p-4 border border-gray-700 rounded-lg">
          <p className="font-medium">Exercise 9.5.2</p>
          <p className="mt-2">
            Give an example of a function <Math>{String.raw`f: \mathbb{R} \to \mathbb{R}`}</Math> which has a jump
            discontinuity at <Math>x = 1</Math> with <Math>f(1+) = 3</Math> and <Math>f(1-) = 5</Math>.
          </p>
        </div>

        <div className="p-4 border border-gray-700 rounded-lg">
          <p className="font-medium">Exercise 9.5.3</p>
          <p className="mt-2">
            Let <Math>{String.raw`f: \mathbb{R} \setminus \{0\} \to \mathbb{R}`}</Math> be defined by <Math>f(x) := x/|x|</Math>.
            Find <Math>f(0+)</Math> and <Math>f(0-)</Math>. Can <Math>f</Math> be extended to a function on
            all of <Math>{String.raw`\mathbb{R}`}</Math> that is continuous at 0? Why or why not?
          </p>
        </div>

        <div className="p-4 border border-gray-700 rounded-lg">
          <p className="font-medium">Exercise 9.5.4</p>
          <p className="mt-2">
            Prove that if <Math>f</Math> is continuous at <Math>x_0</Math> and <Math>x_0</Math> is an adherent point of{' '}
            <Math>{String.raw`X \cap (x_0, \infty)`}</Math>, then <Math>f(x_0+) = f(x_0)</Math>. State and prove the
            analogous result for left limits.
          </p>
        </div>
      </div>
    </LessonLayout>
  );
}
