import { LessonLayout } from '@/components/layout';
import { Definition, Theorem, Example } from '@/components/common';
import { Callout } from '@/components/common';
import { Math, MathBlock } from '@/components/common';

export default function Section51() {
  return (
    <LessonLayout sectionId={51}>
      <p>
        We now ask the following question: if we know that a function{' '}
        <Math>{String.raw`f: X \to Y`}</Math> is differentiable, and it has an inverse{' '}
        <Math>{String.raw`f^{-1}: Y \to X`}</Math>, what can we say about the differentiability
        of <Math>f^{'{-1}'}</Math>? This will be useful for many applications, for instance
        if we want to differentiate the function <Math>{String.raw`f(x) := x^{1/n}`}</Math>.
      </p>

      <h2>A Preliminary Result</h2>

      <p>
        We begin with a preliminary result that relates the derivatives of a function
        and its inverse.
      </p>

      <Theorem id="10.4.1" title="Lemma: Derivative of inverse (assuming differentiability)">
        <p>
          Let <Math>{String.raw`f: X \to Y`}</Math> be an invertible function, with
          inverse <Math>{String.raw`f^{-1}: Y \to X`}</Math>. Suppose that{' '}
          <Math>{String.raw`x_0 \in X`}</Math> and <Math>{String.raw`y_0 \in Y`}</Math> are
          such that <Math>y_0 = f(x_0)</Math> (which also implies that <Math>{String.raw`x_0 = f^{-1}(y_0)`}</Math>).
        </p>
        <p className="mt-2">
          If <Math>f</Math> is differentiable at <Math>x_0</Math>, and{' '}
          <Math>f^{'{-1}'}</Math> is differentiable at <Math>y_0</Math>, then:
        </p>
        <MathBlock>{String.raw`(f^{-1})'(y_0) = \frac{1}{f'(x_0)}`}</MathBlock>
        <div className="proof">
          <p>
            From the chain rule (Theorem 10.1.15) we have:
          </p>
          <MathBlock>{String.raw`(f^{-1} \circ f)'(x_0) = (f^{-1})'(y_0) \cdot f'(x_0)`}</MathBlock>
          <p className="mt-2">
            But <Math>{String.raw`f^{-1} \circ f`}</Math> is the identity function on <Math>X</Math>,
            and hence by Theorem 10.1.13(b):
          </p>
          <MathBlock>{String.raw`(f^{-1} \circ f)'(x_0) = 1`}</MathBlock>
          <p className="mt-2">
            Therefore <Math>{String.raw`(f^{-1})'(y_0) \cdot f'(x_0) = 1`}</Math>, and the claim follows.
          </p>
        </div>
      </Theorem>

      <Callout type="info">
        <p>
          If one writes <Math>y = f(x)</Math>, so that <Math>{String.raw`x = f^{-1}(y)`}</Math>,
          then one can write the conclusion of Lemma 10.4.1 in the more appealing form:
        </p>
        <MathBlock>{String.raw`\frac{dx}{dy} = \frac{1}{dy/dx}`}</MathBlock>
        <p className="mt-2">
          However, this way of writing things, while very convenient and easy to remember,
          can be misleading and cause errors if applied too carelessly (especially when
          working in multivariable calculus).
        </p>
      </Callout>

      <Example id="10.4.2" title="When the inverse is not differentiable">
        <p>
          As a corollary of Lemma 10.4.1, if <Math>f</Math> is differentiable
          at <Math>x_0</Math> with <Math>f'(x_0) = 0</Math>, then <Math>f^{'{-1}'}</Math> cannot
          be differentiable at <Math>y_0 = f(x_0)</Math>, since <Math>{String.raw`1/f'(x_0)`}</Math> is
          undefined in that case.
        </p>
        <p className="mt-2">
          For instance, the function <Math>{String.raw`g: [0, \infty) \to [0, \infty)`}</Math> defined
          by <Math>{String.raw`g(y) := y^{1/3}`}</Math> cannot be differentiable at 0.
        </p>
        <p className="mt-2">
          This is because <Math>{String.raw`g = f^{-1}`}</Math> where{' '}
          <Math>{String.raw`f: [0, \infty) \to [0, \infty)`}</Math> is defined by <Math>f(x) := x^3</Math>,
          and this function has <Math>f'(0) = 0</Math>.
        </p>
      </Example>

      <h2>The Drawback of Lemma 10.4.1</h2>

      <p>
        Lemma 10.4.1 seems to answer the question of how to differentiate the inverse of
        a function. However, it has one significant drawback: the lemma only works if one
        assumes <em>a priori</em> that <Math>f^{'{-1}'}</Math> is differentiable.
      </p>

      <p>
        Thus, if one does not already know that <Math>f^{'{-1}'}</Math> is differentiable,
        one cannot use Lemma 10.4.1 to compute the derivative of <Math>f^{'{-1}'}</Math>.
      </p>

      <p>
        The following improved version compensates for this fact, by relaxing the
        requirement on <Math>f^{'{-1}'}</Math> from differentiability to continuity.
      </p>

      <Theorem id="10.4.3" title="Inverse function theorem">
        <p>
          Let <Math>{String.raw`f: X \to Y`}</Math> be an invertible function, with
          inverse <Math>{String.raw`f^{-1}: Y \to X`}</Math>. Suppose that{' '}
          <Math>{String.raw`x_0 \in X`}</Math> and <Math>{String.raw`y_0 \in Y`}</Math> are
          such that <Math>f(x_0) = y_0</Math>.
        </p>
        <p className="mt-2">
          If <Math>f</Math> is differentiable at <Math>x_0</Math>,{' '}
          <Math>f^{'{-1}'}</Math> is continuous at <Math>y_0</Math>, and{' '}
          <Math>{String.raw`f'(x_0) \neq 0`}</Math>, then <Math>f^{'{-1}'}</Math> is
          differentiable at <Math>y_0</Math> and:
        </p>
        <MathBlock>{String.raw`(f^{-1})'(y_0) = \frac{1}{f'(x_0)}`}</MathBlock>
        <div className="proof">
          <p>
            We need to show that:
          </p>
          <MathBlock>{String.raw`\lim_{y \to y_0; y \in Y - \{y_0\}} \frac{f^{-1}(y) - f^{-1}(y_0)}{y - y_0} = \frac{1}{f'(x_0)}`}</MathBlock>
          <p className="mt-2">
            By Proposition 9.3.9, it suffices to show that:
          </p>
          <MathBlock>{String.raw`\lim_{n \to \infty} \frac{f^{-1}(y_n) - f^{-1}(y_0)}{y_n - y_0} = \frac{1}{f'(x_0)}`}</MathBlock>
          <p>
            for any sequence <Math>{String.raw`(y_n)_{n=1}^{\infty}`}</Math> of elements
            in <Math>{String.raw`Y - \{y_0\}`}</Math> which converge to <Math>y_0</Math>.
          </p>
          <p className="mt-2">
            Set <Math>{String.raw`x_n := f^{-1}(y_n)`}</Math>. Then <Math>{String.raw`(x_n)_{n=1}^{\infty}`}</Math> is
            a sequence in <Math>{String.raw`X - \{x_0\}`}</Math> (since <Math>f^{'{-1}'}</Math> is a bijection).
          </p>
          <p className="mt-2">
            Since <Math>f^{'{-1}'}</Math> is continuous, <Math>{String.raw`x_n = f^{-1}(y_n)`}</Math> converges
            to <Math>{String.raw`f^{-1}(y_0) = x_0`}</Math> as <Math>{String.raw`n \to \infty`}</Math>.
          </p>
          <p className="mt-2">
            Since <Math>f</Math> is differentiable at <Math>x_0</Math>:
          </p>
          <MathBlock>{String.raw`\lim_{n \to \infty} \frac{f(x_n) - f(x_0)}{x_n - x_0} = f'(x_0)`}</MathBlock>
          <p className="mt-2">
            Since <Math>{String.raw`x_n \neq x_0`}</Math> and <Math>f</Math> is a bijection, the
            fraction <Math>{String.raw`\frac{f(x_n) - f(x_0)}{x_n - x_0}`}</Math> is non-zero.
            Also, by hypothesis <Math>f'(x_0)</Math> is non-zero. So by limit laws:
          </p>
          <MathBlock>{String.raw`\lim_{n \to \infty} \frac{x_n - x_0}{f(x_n) - f(x_0)} = \frac{1}{f'(x_0)}`}</MathBlock>
          <p className="mt-2">
            But since <Math>{String.raw`x_n = f^{-1}(y_n)`}</Math> and <Math>{String.raw`x_0 = f^{-1}(y_0)`}</Math>:
          </p>
          <MathBlock>{String.raw`\lim_{n \to \infty} \frac{f^{-1}(y_n) - f^{-1}(y_0)}{y_n - y_0} = \frac{1}{f'(x_0)}`}</MathBlock>
          <p>as desired.</p>
        </div>
      </Theorem>

      <Callout type="note">
        <p>
          The key improvement in Theorem 10.4.3 over Lemma 10.4.1 is that we only need
          to assume <Math>f^{'{-1}'}</Math> is <em>continuous</em> (not differentiable)
          to conclude that it is differentiable. This is a powerful result because
          continuity of inverse functions is often easier to establish.
        </p>
      </Callout>

      <h2>Applications</h2>

      <Example id="10.4.4" title="Differentiating the n-th root function">
        <p>
          Let <Math>{String.raw`n \geq 1`}</Math> be a natural number, and let{' '}
          <Math>{String.raw`g: (0, \infty) \to (0, \infty)`}</Math> be the function{' '}
          <Math>{String.raw`g(x) := x^{1/n}`}</Math>.
        </p>
        <p className="mt-2">
          <strong>Step 1:</strong> We know <Math>g</Math> is continuous on <Math>(0, \infty)</Math> from
          Proposition 9.8.3 (continuity of exponentiation).
        </p>
        <p className="mt-2">
          <strong>Step 2:</strong> The function <Math>g</Math> is the inverse of{' '}
          <Math>{String.raw`f: (0, \infty) \to (0, \infty)`}</Math> defined by <Math>f(y) = y^n</Math>.
        </p>
        <p className="mt-2">
          <strong>Step 3:</strong> We have <Math>f'(y) = ny^{'{n-1}'}</Math>, which is non-zero
          for <Math>{String.raw`y > 0`}</Math>.
        </p>
        <p className="mt-2">
          <strong>Step 4:</strong> By the inverse function theorem, <Math>g</Math> is differentiable
          on <Math>(0, \infty)</Math> and for <Math>{String.raw`x > 0`}</Math>:
        </p>
        <MathBlock>{String.raw`g'(x) = \frac{1}{f'(g(x))} = \frac{1}{n(x^{1/n})^{n-1}} = \frac{1}{n \cdot x^{(n-1)/n}} = \frac{1}{n} x^{1/n - 1} = \frac{1}{n} x^{(1-n)/n}`}</MathBlock>
        <p className="mt-2">
          This can be written more simply as:
        </p>
        <MathBlock>{String.raw`\frac{d}{dx}(x^{1/n}) = \frac{1}{n} x^{1/n - 1}`}</MathBlock>
      </Example>

      <Example id="10.4.5" title="Differentiating rational powers">
        <p>
          Let <Math>q</Math> be a rational number, and let{' '}
          <Math>{String.raw`f: (0, \infty) \to \mathbb{R}`}</Math> be the function <Math>f(x) = x^q</Math>.
        </p>
        <p className="mt-2">
          Write <Math>q = a/b</Math> where <Math>a, b</Math> are integers with <Math>{String.raw`b > 0`}</Math>.
          Then:
        </p>
        <MathBlock>{String.raw`f(x) = x^{a/b} = (x^{1/b})^a`}</MathBlock>
        <p className="mt-2">
          Using the chain rule and our result for <Math>n</Math>-th roots:
        </p>
        <MathBlock>{String.raw`f'(x) = a(x^{1/b})^{a-1} \cdot \frac{1}{b} x^{1/b - 1} = \frac{a}{b} x^{(a-1)/b} \cdot x^{(1-b)/b}`}</MathBlock>
        <MathBlock>{String.raw`= \frac{a}{b} x^{(a-1)/b + (1-b)/b} = \frac{a}{b} x^{(a-b)/b} = q x^{q-1}`}</MathBlock>
        <p className="mt-2">
          Thus the power rule <Math>{String.raw`\frac{d}{dx}(x^q) = qx^{q-1}`}</Math> holds for
          all rational exponents <Math>q</Math>.
        </p>
      </Example>

      <Example id="10.4.6" title="Differentiating real powers">
        <p>
          Let <Math>\alpha</Math> be a real number, and let{' '}
          <Math>{String.raw`f: (0, \infty) \to \mathbb{R}`}</Math> be the function{' '}
          <Math>{String.raw`f(x) = x^{\alpha}`}</Math>.
        </p>
        <p className="mt-2">
          One can show (using the definition of real exponentiation and squeeze theorem
          arguments with rational approximations) that:
        </p>
        <MathBlock>{String.raw`f'(x) = \alpha x^{\alpha - 1}`}</MathBlock>
        <p className="mt-2">
          Thus the power rule extends to all real exponents:
        </p>
        <MathBlock>{String.raw`\frac{d}{dx}(x^{\alpha}) = \alpha x^{\alpha - 1} \quad \text{for all } \alpha \in \mathbb{R}, \, x > 0`}</MathBlock>
      </Example>

      <Callout type="info">
        <p>
          <strong>The general power rule:</strong> We have now established that for any
          real number <Math>\alpha</Math>:
        </p>
        <MathBlock>{String.raw`\frac{d}{dx}(x^{\alpha}) = \alpha x^{\alpha - 1} \quad (x > 0)`}</MathBlock>
        <p className="mt-2">
          This extends the familiar power rule from elementary calculus (which typically
          only covers integer or rational exponents) to arbitrary real exponents.
        </p>
      </Callout>

      <h2>Summary</h2>

      <Definition id="10.4.7" title="Key results for inverse function differentiation">
        <p>
          For an invertible function <Math>{String.raw`f: X \to Y`}</Math> with inverse <Math>f^{'{-1}'}</Math>:
        </p>
        <ol className="list-decimal list-inside mt-2 space-y-2">
          <li>
            If both <Math>f</Math> and <Math>f^{'{-1}'}</Math> are differentiable at corresponding
            points, then <Math>{String.raw`(f^{-1})'(y_0) = 1/f'(x_0)`}</Math>.
          </li>
          <li>
            If <Math>f</Math> is differentiable at <Math>x_0</Math> with{' '}
            <Math>{String.raw`f'(x_0) \neq 0`}</Math>, and <Math>f^{'{-1}'}</Math> is merely continuous
            at <Math>y_0 = f(x_0)</Math>, then <Math>f^{'{-1}'}</Math> is automatically differentiable
            at <Math>y_0</Math>.
          </li>
          <li>
            If <Math>f'(x_0) = 0</Math>, then <Math>f^{'{-1}'}</Math> cannot be differentiable
            at <Math>y_0 = f(x_0)</Math>.
          </li>
        </ol>
      </Definition>
    </LessonLayout>
  );
}
