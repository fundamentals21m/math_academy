import { LessonLayout } from '@/components/layout';
import { Example } from '@/components/common';
import { Callout } from '@/components/common';
import { Math, MathBlock } from '@/components/common';

export default function Section01() {
  return (
    <LessonLayout sectionId={1}>
      {/* Introduction */}
      <p className="text-lg text-dark-200 mb-6">
        It is a fair question to ask, "why bother?", when it comes to analysis. There is a
        certain philosophical satisfaction in knowing <em>why</em> things work, but a pragmatic
        person may argue that one only needs to know <em>how</em> things work to do real-life
        problems.
      </p>

      <p className="text-dark-300 mb-6">
        The calculus training you receive in introductory classes is certainly adequate for you
        to begin solving many problems in physics, chemistry, biology, economics, computer science,
        finance, engineering, or whatever else you end up doing — and you can certainly use things
        like the chain rule, L'Hôpital's rule, or integration by parts without knowing why these
        rules work, or whether there are any exceptions to these rules.
      </p>

      <Callout type="warning" title="The Danger of Blind Application">
        However, one can get into trouble if one applies rules without knowing where they came
        from and what the limits of their applicability are. Let us examine some examples in
        which familiar rules, if applied blindly without knowledge of the underlying analysis,
        can lead to disaster.
      </Callout>

      {/* Example 1.2.1 */}
      <Example title="Example 1.2.1: Division by Zero">
        <p className="mb-4">
          This is a very familiar one: the cancellation law <Math>{'ac = bc \\Rightarrow a = b'}</Math>{' '}
          does not work when <Math>{'c = 0'}</Math>.
        </p>
        <p className="mb-4">
          For instance, the identity <Math>{'1 \\times 0 = 2 \\times 0'}</Math> is true, but if one
          blindly cancels the 0 then one obtains <Math>{'1 = 2'}</Math>, which is false.
        </p>
        <p>
          In this case it was obvious that one was dividing by zero; but in other cases it can
          be more hidden.
        </p>
      </Example>

      {/* Example 1.2.2 */}
      <Example title="Example 1.2.2: Divergent Series">
        <p className="mb-4">
          You have probably seen geometric series such as the infinite sum:
        </p>
        <MathBlock>{'S = 1 + \\frac{1}{2} + \\frac{1}{4} + \\frac{1}{8} + \\frac{1}{16} + \\cdots'}</MathBlock>
        <p className="mb-4">
          You have probably seen the following trick to sum this series: if we call the above
          sum <Math>{'S'}</Math>, then if we multiply both sides by 2, we obtain:
        </p>
        <MathBlock>{'2S = 2 + 1 + \\frac{1}{2} + \\frac{1}{4} + \\frac{1}{8} + \\cdots = 2 + S'}</MathBlock>
        <p className="mb-4">
          and hence <Math>{'S = 2'}</Math>, so the series sums to 2.
        </p>

        <Callout type="danger" title="The Same Trick Goes Wrong">
          <p className="mb-3">
            However, if you apply the same trick to the series <Math>{'S = 1 + 2 + 4 + 8 + 16 + \\cdots'}</Math>,
            one gets nonsensical results:
          </p>
          <MathBlock>{'2S = 2 + 4 + 8 + 16 + \\cdots = S - 1 \\Rightarrow S = -1'}</MathBlock>
          <p>
            So the same reasoning that shows <Math>{'1 + \\frac{1}{2} + \\frac{1}{4} + \\cdots = 2'}</Math>{' '}
            also gives <Math>{'1 + 2 + 4 + 8 + \\cdots = -1'}</Math>. Why do we trust the first
            equation but not the second?
          </p>
        </Callout>

        <p className="mt-4 mb-4">A similar example arises with the series:</p>
        <MathBlock>{'S = 1 - 1 + 1 - 1 + 1 - 1 + \\cdots'}</MathBlock>
        <p className="mb-2">We can write:</p>
        <MathBlock>{'S = 1 - (1 - 1 + 1 - 1 + \\cdots) = 1 - S'}</MathBlock>
        <p className="mb-4">and hence <Math>{'S = 1/2'}</Math>; or instead we can write:</p>
        <MathBlock>{'S = (1 - 1) + (1 - 1) + (1 - 1) + \\cdots = 0 + 0 + \\cdots'}</MathBlock>
        <p className="mb-4">and hence <Math>{'S = 0'}</Math>; or instead:</p>
        <MathBlock>{'S = 1 + (-1 + 1) + (-1 + 1) + \\cdots = 1 + 0 + 0 + \\cdots'}</MathBlock>
        <p>
          and hence <Math>{'S = 1'}</Math>. Which one is correct? (See Exercise 7.2.1 for an answer.)
        </p>
      </Example>

      {/* Example 1.2.3 */}
      <Example title="Example 1.2.3: Divergent Sequences">
        <p className="mb-4">
          Here is a slight variation of the previous example. Let <Math>{'x'}</Math> be a real
          number, and let <Math>{'L'}</Math> be the limit:
        </p>
        <MathBlock>{'L = \\lim_{n \\to \\infty} x^n'}</MathBlock>
        <p className="mb-4">
          Changing variables <Math>{'n = m + 1'}</Math>, we have:
        </p>
        <MathBlock>{'L = \\lim_{m+1 \\to \\infty} x^{m+1} = \\lim_{m+1 \\to \\infty} x \\cdot x^m = x \\lim_{m+1 \\to \\infty} x^m'}</MathBlock>
        <p className="mb-4">
          But if <Math>{'m + 1 \\to \\infty'}</Math>, then <Math>{'m \\to \\infty'}</Math>, thus:
        </p>
        <MathBlock>{'\\lim_{m+1 \\to \\infty} x^m = \\lim_{m \\to \\infty} x^m = \\lim_{n \\to \\infty} x^n = L'}</MathBlock>
        <p className="mb-4">and thus <Math>{'xL = L'}</Math>.</p>
        <p className="mb-4">
          At this point we could cancel the <Math>{'L'}</Math>'s and conclude that <Math>{'x = 1'}</Math>{' '}
          for an arbitrary real number <Math>{'x'}</Math>, which is absurd. But since we are already
          aware of the division by zero problem, we could be a little smarter and conclude instead
          that either <Math>{'x = 1'}</Math>, or <Math>{'L = 0'}</Math>. In particular we seem to
          have shown that:
        </p>
        <MathBlock>{'\\lim_{n \\to \\infty} x^n = 0 \\text{ for all } x \\neq 1'}</MathBlock>
        <p>
          But this conclusion is absurd if we apply it to certain values of <Math>{'x'}</Math>,
          for instance by specializing to the case <Math>{'x = 2'}</Math> we could conclude that
          the sequence <Math>{'1, 2, 4, 8, \\ldots'}</Math> converges to zero, and by specializing
          to <Math>{'x = -1'}</Math> we conclude that <Math>{'1, -1, 1, -1, \\ldots'}</Math> also
          converges to zero. What is the problem with the above argument? (See Exercise 6.3.4.)
        </p>
      </Example>

      {/* Example 1.2.4 */}
      <Example title="Example 1.2.4: Limiting Values of Functions">
        <p className="mb-4">
          Start with the expression <Math>{'\\lim_{x \\to \\infty} \\sin(x)'}</Math>, make the
          change of variable <Math>{'x = y + \\pi'}</Math> and recall that{' '}
          <Math>{'\\sin(y + \\pi) = -\\sin(y)'}</Math> to obtain:
        </p>
        <MathBlock>{'\\lim_{x \\to \\infty} \\sin(x) = \\lim_{y+\\pi \\to \\infty} \\sin(y + \\pi) = \\lim_{y \\to \\infty} (-\\sin(y)) = -\\lim_{y \\to \\infty} \\sin(y)'}</MathBlock>
        <p className="mb-4">
          Since <Math>{'\\lim_{x \\to \\infty} \\sin(x) = \\lim_{y \\to \\infty} \\sin(y)'}</Math>,
          we thus have:
        </p>
        <MathBlock>{'\\lim_{x \\to \\infty} \\sin(x) = -\\lim_{x \\to \\infty} \\sin(x)'}</MathBlock>
        <p className="mb-4">and hence <Math>{'\\lim_{x \\to \\infty} \\sin(x) = 0'}</Math>.</p>
        <p className="mb-4">
          If we then make the change of variables <Math>{'x = \\pi/2 - z'}</Math> and recall that{' '}
          <Math>{'\\sin(\\pi/2 - z) = \\cos(z)'}</Math>, we conclude that:
        </p>
        <MathBlock>{'\\lim_{x \\to \\infty} \\cos(x) = 0'}</MathBlock>
        <p className="mb-4">Squaring both limits and adding we see that:</p>
        <MathBlock>{'\\lim_{x \\to \\infty} (\\sin^2(x) + \\cos^2(x)) = 0^2 + 0^2 = 0'}</MathBlock>
        <p>
          On the other hand, we have <Math>{'\\sin^2(x) + \\cos^2(x) = 1'}</Math> for all{' '}
          <Math>{'x'}</Math>. Thus we have shown that <Math>{'1 = 0'}</Math>! What is the
          difficulty here?
        </p>
      </Example>

      {/* Example 1.2.5 */}
      <Example title="Example 1.2.5: Interchanging Sums">
        <p className="mb-4">
          Consider the following fact of arithmetic. Consider any matrix of numbers, compute the
          sums of all the rows and columns, and then total all the row sums and all the column
          sums. In both cases you will get the same number — the total sum of all entries in the matrix.
        </p>
        <p className="mb-4">In series notation:</p>
        <MathBlock>{'\\sum_{i=1}^{m} \\sum_{j=1}^{n} a_{ij} = \\sum_{j=1}^{n} \\sum_{i=1}^{m} a_{ij}'}</MathBlock>
        <p className="mb-4">
          Now one might think that this rule should extend easily to infinite series:
        </p>
        <MathBlock>{'\\sum_{i=1}^{\\infty} \\sum_{j=1}^{\\infty} a_{ij} = \\sum_{j=1}^{\\infty} \\sum_{i=1}^{\\infty} a_{ij}'}</MathBlock>

        <Callout type="danger" title="Counterexample">
          <p className="mb-3">However, this statement is actually false! Consider this infinite matrix:</p>
          <MathBlock>{`\\begin{pmatrix} 1 & 0 & 0 & 0 & \\cdots \\\\ -1 & 1 & 0 & 0 & \\cdots \\\\ 0 & -1 & 1 & 0 & \\cdots \\\\ 0 & 0 & -1 & 1 & \\cdots \\\\ \\vdots & \\vdots & \\vdots & \\vdots & \\ddots \\end{pmatrix}`}</MathBlock>
          <p>
            If you sum up all the rows, then add up all row totals, you get <strong>1</strong>;
            but if you sum up all the columns, then add up all column totals, you get <strong>0</strong>!
          </p>
        </Callout>
        <p className="mt-4">
          So, does this mean that summations for infinite series should not be swapped?
          (See Theorem 8.2.2 for an answer.)
        </p>
      </Example>

      {/* Example 1.2.6 */}
      <Example title="Example 1.2.6: Interchanging Integrals">
        <p className="mb-4">
          The interchanging of integrals is a trick which occurs in mathematics just as commonly
          as the interchanging of sums. This seems to suggest that one should always be able to
          swap integral signs:
        </p>
        <MathBlock>{'\\int \\int f(x,y) \\, dx \\, dy = \\int \\int f(x,y) \\, dy \\, dx'}</MathBlock>
        <p className="mb-4">
          However, just as infinite sums sometimes cannot be swapped, integrals are also sometimes
          dangerous to swap. Consider the integrand <Math>{'e^{-xy} - xye^{-xy}'}</Math>:
        </p>
        <MathBlock>{'\\int_0^{\\infty} \\int_0^{1} (e^{-xy} - xye^{-xy}) \\, dy \\, dx = \\int_0^{1} \\int_0^{\\infty} (e^{-xy} - xye^{-xy}) \\, dx \\, dy'}</MathBlock>
        <p className="mb-4">Computing the left side:</p>
        <MathBlock>{'\\int_0^{1} (e^{-xy} - xye^{-xy}) \\, dy = ye^{-xy}\\Big|_{y=0}^{y=1} = e^{-x}'}</MathBlock>
        <p className="mb-4">
          so the left-hand side is <Math>{'\\int_0^{\\infty} e^{-x} \\, dx = -e^{-x}\\Big|_0^{\\infty} = 1'}</Math>.
        </p>
        <p className="mb-4">But computing the right side:</p>
        <MathBlock>{'\\int_0^{\\infty} (e^{-xy} - xye^{-xy}) \\, dx = xe^{-xy}\\Big|_{x=0}^{x=\\infty} = 0'}</MathBlock>
        <p>
          so the right-hand side is <Math>{'\\int_0^{1} 0 \\, dy = 0'}</Math>. Clearly{' '}
          <Math>{'1 \\neq 0'}</Math>! (See Theorem 19.5.1 for a partial answer.)
        </p>
      </Example>

      {/* Example 1.2.7 */}
      <Example title="Example 1.2.7: Interchanging Limits">
        <p className="mb-4">Suppose we start with the plausible looking statement:</p>
        <MathBlock>{'\\lim_{x \\to 0} \\lim_{y \\to 0} \\frac{x^2}{x^2 + y^2} = \\lim_{y \\to 0} \\lim_{x \\to 0} \\frac{x^2}{x^2 + y^2}'}</MathBlock>
        <p className="mb-4">But we have:</p>
        <MathBlock>{'\\lim_{y \\to 0} \\frac{x^2}{x^2 + y^2} = \\frac{x^2}{x^2 + 0^2} = 1'}</MathBlock>
        <p className="mb-4">so the left-hand side is 1; on the other hand:</p>
        <MathBlock>{'\\lim_{x \\to 0} \\frac{x^2}{x^2 + y^2} = \\frac{0^2}{0^2 + y^2} = 0'}</MathBlock>
        <p>
          so the right-hand side is 0. Since <Math>{'1 \\neq 0'}</Math>, this suggests that
          interchange of limits is untrustworthy. But are there circumstances in which the
          interchange of limits is legitimate? (See Exercise 13.2.9 for a partial answer.)
        </p>
      </Example>

      {/* Example 1.2.12 */}
      <Example title="Example 1.2.12: L'Hôpital's Rule">
        <p className="mb-4">
          We are all familiar with the beautifully simple L'Hôpital's rule:
        </p>
        <MathBlock>{'\\lim_{x \\to x_0} \\frac{f(x)}{g(x)} = \\lim_{x \\to x_0} \\frac{f\'(x)}{g\'(x)}'}</MathBlock>
        <p className="mb-4">
          but one can still get led to incorrect conclusions if one applies it incorrectly.
          Applying it to <Math>{'f(x) := x'}</Math>, <Math>{'g(x) := 1 + x'}</Math>, and{' '}
          <Math>{'x_0 := 0'}</Math> we would obtain:
        </p>
        <MathBlock>{'\\lim_{x \\to 0} \\frac{x}{1+x} = \\lim_{x \\to 0} \\frac{1}{1} = 1'}</MathBlock>
        <p className="mb-4">
          but this is incorrect, since <Math>{'\\lim_{x \\to 0} \\frac{x}{1+x} = \\frac{0}{1+0} = 0'}</Math>.
        </p>
        <p>
          Of course, L'Hôpital's rule is only applicable when both <Math>{'f(x)'}</Math> and{' '}
          <Math>{'g(x)'}</Math> go to zero as <Math>{'x \\to x_0'}</Math>, a condition which was
          violated in the above example. But even when these conditions are met, there is still
          potential for incorrect conclusions if applied carelessly.
        </p>
      </Example>

      {/* Example 1.2.13 */}
      <Example title="Example 1.2.13: Limits and Lengths">
        <p className="mb-4">
          When you learn about integration and how it relates to the area under a curve, you were
          probably presented with some picture in which the area was approximated by rectangles,
          whose area was given by a Riemann sum, and then one "took limits" to replace that sum
          with an integral.
        </p>
        <p className="mb-4">
          Consider the right-angled triangle with vertices <Math>{'(0,0)'}</Math>,{' '}
          <Math>{'(1,0)'}</Math>, and <Math>{'(0,1)'}</Math>. The hypotenuse has length{' '}
          <Math>{'\\sqrt{2}'}</Math> by Pythagoras' theorem.
        </p>
        <p className="mb-4">
          Now approximate the hypotenuse by a "staircase" consisting of <Math>{'N'}</Math>{' '}
          horizontal edges alternating with <Math>{'N'}</Math> vertical edges, each of length{' '}
          <Math>{'1/N'}</Math>. The total length of the staircase is{' '}
          <Math>{'2N/N = 2'}</Math>.
        </p>
        <Callout type="danger" title="The Paradox">
          If one takes limits as <Math>{'N \\to \\infty'}</Math>, the staircase clearly approaches
          the hypotenuse, and so in the limit we should get the length of the hypotenuse. However,
          as <Math>{'N \\to \\infty'}</Math>, the limit of <Math>{'2N/N'}</Math> is <strong>2</strong>,
          not <Math>{'\\sqrt{2}'}</Math>! How did this happen?
        </Callout>
      </Example>

      {/* Conclusion */}
      <h2 className="text-2xl font-bold text-dark-100 mt-10 mb-6">
        The Purpose of Rigorous Analysis
      </h2>

      <p className="text-dark-300 mb-6">
        The analysis you learn in this course will help you resolve these questions, and will let
        you know when these rules (and others) are justified, and when they are illegal, thus
        separating the useful applications of these rules from the nonsense. This can prevent you
        from making mistakes, and can help you place these rules in a wider context.
      </p>

      <p className="text-dark-300 mb-6">
        Moreover, as you learn analysis you will develop an "analytical way of thinking", which
        will help you whenever you come into contact with any new rules of mathematics, or when
        dealing with situations which are not quite covered by the standard rules.
      </p>

      <div className="mt-8 p-6 rounded-2xl bg-gradient-to-br from-indigo-500/10 to-purple-600/5 border border-indigo-500/20">
        <h3 className="text-lg font-semibold text-indigo-400 mb-3">Key Takeaway</h3>
        <p className="text-dark-300">
          You will develop a sense of <em>why</em> a rule in mathematics (e.g., the chain rule)
          works, how to adapt it to new situations, and what its limitations (if any) are; this
          will allow you to apply the mathematics you have already learnt more confidently and
          correctly.
        </p>
      </div>
    </LessonLayout>
  );
}
