import { LessonLayout } from '@/components/layout';
import { Definition, Theorem, Example } from '@/components/common';
import { Callout } from '@/components/common';
import { Math, MathBlock } from '@/components/common';

export default function Section59() {
  return (
    <LessonLayout sectionId={59}>
      <p>
        We have shown that there are large classes of bounded functions which are Riemann
        integrable: continuous functions, bounded piecewise continuous functions, and
        bounded monotone functions. A natural question arises: are <em>all</em> bounded
        functions Riemann integrable?
      </p>

      <p className="mt-4">
        Unfortunately, the answer is no. There do exist bounded functions which are not
        Riemann integrable, though such functions are rather "artificial" in nature.
      </p>

      <h2>The Dirichlet Function</h2>

      <Definition id="11.7.0" title="The Dirichlet function">
        <p>
          The <strong>Dirichlet function</strong> (also called the indicator function of
          the rationals) is the function <Math>{String.raw`f: [0, 1] \to \mathbb{R}`}</Math>{' '}
          defined by:
        </p>
        <MathBlock>{String.raw`f(x) := \begin{cases} 1 & \text{if } x \in \mathbb{Q} \\ 0 & \text{if } x \notin \mathbb{Q} \end{cases}`}</MathBlock>
        <p className="mt-2">
          This function equals 1 at every rational point and 0 at every irrational point.
        </p>
      </Definition>

      <p className="mt-4">
        We showed in Example 9.3.21 that this function is discontinuous at every point
        in <Math>[0, 1]</Math>. Now we show that it is not Riemann integrable.
      </p>

      <Theorem id="11.7.1" title="Proposition: The Dirichlet function is not Riemann integrable">
        <p>
          Let <Math>{String.raw`f: [0, 1] \to \mathbb{R}`}</Math> be the Dirichlet function
          defined above. Then <Math>f</Math> is bounded but not Riemann integrable.
        </p>
        <div className="proof">
          <p>
            It is clear that <Math>f</Math> is bounded (by 0 and 1), so let us show that
            it is not Riemann integrable.
          </p>
          <p className="mt-2">
            <strong>Computing the upper integral:</strong> Let <Math>\mathbf{'{P}'}</Math>{' '}
            be any partition of <Math>[0, 1]</Math>. For any{' '}
            <Math>{String.raw`J \in \mathbf{P}`}</Math>, observe that if <Math>J</Math>{' '}
            is not a point or the empty set, then:
          </p>
          <MathBlock>{String.raw`\sup_{x \in J} f(x) = 1`}</MathBlock>
          <p className="mt-2">
            This is because every non-trivial interval contains rational numbers (by the
            density of rationals, Proposition 5.4.14). In particular:
          </p>
          <MathBlock>{String.raw`\left(\sup_{x \in J} f(x)\right)|J| = |J|`}</MathBlock>
          <p className="mt-2">
            (Note this is also true when <Math>J</Math> is a point, since both sides are
            zero.) Therefore:
          </p>
          <MathBlock>{String.raw`U(f, \mathbf{P}) = \sum_{J \in \mathbf{P}: J \neq \emptyset} |J| = |[0, 1]| = 1`}</MathBlock>
          <p className="mt-2">
            by Theorem 11.1.13. In particular,{' '}
            <Math>{String.raw`\overline{\int}_{[0,1]} f = 1`}</Math> by Proposition 11.3.12.
          </p>
          <p className="mt-2">
            <strong>Computing the lower integral:</strong> Similarly, for any{' '}
            <Math>J</Math> (other than points or the empty set):
          </p>
          <MathBlock>{String.raw`\inf_{x \in J} f(x) = 0`}</MathBlock>
          <p className="mt-2">
            This is because every non-trivial interval contains irrational numbers (by the
            density of irrationals). Therefore:
          </p>
          <MathBlock>{String.raw`L(f, \mathbf{P}) = \sum_{J \in \mathbf{P}: J \neq \emptyset} 0 = 0`}</MathBlock>
          <p className="mt-2">
            In particular, <Math>{String.raw`\underline{\int}_{[0,1]} f = 0`}</Math> by
            Proposition 11.3.12.
          </p>
          <p className="mt-2">
            <strong>Conclusion:</strong> Since the upper and lower Riemann integrals do not
            match (<Math>1 \neq 0</Math>), this function is not Riemann integrable.
          </p>
        </div>
      </Theorem>

      <h2>Why the Dirichlet Function Fails</h2>

      <p>
        The key issue is that the Dirichlet function oscillates infinitely often between
        0 and 1 in any interval, no matter how small. This prevents any partition from
        producing upper and lower Riemann sums that are close together.
      </p>

      <Callout type="note">
        <p>
          <strong>Geometric interpretation:</strong> The upper Riemann sums approximate
          the function from above by piecewise constant functions. For the Dirichlet
          function, the best we can do is cover everything with height 1 (since every
          interval contains rationals), giving an upper integral of 1.
        </p>
        <p className="mt-2">
          The lower Riemann sums approximate from below. Since every interval contains
          irrationals, the best we can do is use height 0 everywhere, giving a lower
          integral of 0.
        </p>
      </Callout>

      <h2>Limitations and Generalizations</h2>

      <Callout type="info">
        <p>
          <strong>Remark 11.7.2:</strong> As you can see, it is only rather "artificial"
          bounded functions which are not Riemann integrable. Because of this, the
          Riemann integral is good enough for a large majority of cases encountered in
          practice.
        </p>
        <p className="mt-2">
          There are ways to generalize or improve the Riemann integral to handle more
          functions:
        </p>
        <ul className="list-disc list-inside mt-2 space-y-1">
          <li>
            <strong>The Lebesgue integral</strong> (Chapter 19): Can integrate the
            Dirichlet function and gives <Math>{String.raw`\int_{[0,1]} f = 0`}</Math>,
            since the rationals have "measure zero"
          </li>
          <li>
            <strong>The Riemann-Stieltjes integral</strong> (Section 11.8): A
            generalization that replaces length with a more general "weight function"
          </li>
        </ul>
      </Callout>

      <Example id="11.7.2" title="Another non-integrable function">
        <p>
          Consider the function <Math>{String.raw`g: [0, 1] \to \mathbb{R}`}</Math> defined by:
        </p>
        <MathBlock>{String.raw`g(x) := \begin{cases} 1 & \text{if } x = 0 \text{ or } x = 1/n \text{ for some } n \in \mathbb{N}^+ \\ 0 & \text{otherwise} \end{cases}`}</MathBlock>
        <p className="mt-2">
          Unlike the Dirichlet function, this function <em>is</em> Riemann integrable!
          The key difference is that <Math>g</Math> equals 1 only on a countable set
          (actually, a set with zero length in a precise sense), while the Dirichlet
          function equals 1 on a dense set.
        </p>
        <p className="mt-2">
          For this function, we can show <Math>{String.raw`\int_{[0,1]} g = 0`}</Math>{' '}
          because for any <Math>{String.raw`\varepsilon > 0`}</Math>, we can find a
          piecewise constant majorizing function with integral less than{' '}
          <Math>\varepsilon</Math>.
        </p>
      </Example>

      <Callout type="warning">
        <p>
          <strong>Key insight:</strong> The obstruction to Riemann integrability is not
          merely having discontinuities, but having "too many" discontinuities in a
          precise sense. The Dirichlet function is discontinuous at every point, while
          the function <Math>g</Math> above is discontinuous only at countably many points.
        </p>
        <p className="mt-2">
          The Lebesgue theory makes this precise: a bounded function is Riemann integrable
          if and only if its set of discontinuities has "measure zero."
        </p>
      </Callout>
    </LessonLayout>
  );
}
