import { LessonLayout } from '../../components/layout/LessonLayout';
import { Callout } from '../../components/common/Callout';
import { Math as MathInline, MathBlock } from '../../components/common/MathBlock';

export default function Section23() {
  return (
    <LessonLayout sectionId={23}>
      <p>
        This section describes an important method for constructing new functions from given ones:
        the process of <strong>inversion</strong>. Inversion allows us to "reverse" the action of
        a function, and under the right conditions, the inverse inherits important properties like
        monotonicity and continuity from the original function.
      </p>

      <h2>The Process of Inversion</h2>
      <p>
        Before describing the method in detail, let's illustrate it with a simple example.
      </p>

      <Callout type="example" title="A Simple Example">
        <p>
          Consider the function <MathInline>{`f`}</MathInline> defined on the interval
          <MathInline>{`[0, 2]`}</MathInline> by the equation <MathInline>{`f(x) = 2x + 1`}</MathInline>.
          The range of <MathInline>{`f`}</MathInline> is the interval <MathInline>{`[1, 5]`}</MathInline>.
          Each point <MathInline>{`x`}</MathInline> in <MathInline>{`[0, 2]`}</MathInline> is carried by
          <MathInline>{`f`}</MathInline> onto exactly one point <MathInline>{`y`}</MathInline> in
          <MathInline>{`[1, 5]`}</MathInline>, namely:
        </p>
        <MathBlock>{`y = 2x + 1.`}</MathBlock>
        <p>
          Conversely, for every <MathInline>{`y`}</MathInline> in <MathInline>{`[1, 5]`}</MathInline>, there is
          exactly one <MathInline>{`x`}</MathInline> in <MathInline>{`[0, 2]`}</MathInline> for which
          <MathInline>{`y = f(x)`}</MathInline>. To find this <MathInline>{`x`}</MathInline>, we solve for
          <MathInline>{`x`}</MathInline>:
        </p>
        <MathBlock>{`x = \\frac{1}{2}(y - 1).`}</MathBlock>
        <p>
          This equation defines <MathInline>{`x`}</MathInline> as a function of <MathInline>{`y`}</MathInline>.
          If we denote this function by <MathInline>{`g`}</MathInline>, we have:
        </p>
        <MathBlock>{`g(y) = \\frac{1}{2}(y - 1)`}</MathBlock>
        <p>
          for each <MathInline>{`y`}</MathInline> in <MathInline>{`[1, 5]`}</MathInline>. The function
          <MathInline>{`g`}</MathInline> is called the <strong>inverse</strong> of <MathInline>{`f`}</MathInline>.
        </p>
      </Callout>

      <h2>Definition of Inverse Function</h2>
      <p>
        Consider a function <MathInline>{`f`}</MathInline> with domain <MathInline>{`A`}</MathInline> and range
        <MathInline>{`B`}</MathInline>. For each <MathInline>{`x`}</MathInline> in <MathInline>{`A`}</MathInline>, there
        is exactly one <MathInline>{`y`}</MathInline> in <MathInline>{`B`}</MathInline> such that
        <MathInline>{`y = f(x)`}</MathInline>. For each <MathInline>{`y`}</MathInline> in <MathInline>{`B`}</MathInline>,
        there is at least one <MathInline>{`x`}</MathInline> in <MathInline>{`A`}</MathInline> such that
        <MathInline>{`f(x) = y`}</MathInline>.
      </p>

      <Callout type="definition" title="Inverse Function">
        <p>
          Suppose that for each <MathInline>{`y`}</MathInline> in <MathInline>{`B`}</MathInline>, there is
          <em>exactly one</em> <MathInline>{`x`}</MathInline> in <MathInline>{`A`}</MathInline> such that
          <MathInline>{`f(x) = y`}</MathInline>. Then we can define a new function <MathInline>{`g`}</MathInline>
          on <MathInline>{`B`}</MathInline> as follows:
        </p>
        <MathBlock>{`g(y) = x \\quad \\text{means} \\quad y = f(x).`}</MathBlock>
        <p>
          In other words, the value of <MathInline>{`g`}</MathInline> at each point <MathInline>{`y`}</MathInline>
          in <MathInline>{`B`}</MathInline> is that unique <MathInline>{`x`}</MathInline> in <MathInline>{`A`}</MathInline>
          such that <MathInline>{`f(x) = y`}</MathInline>. This new function <MathInline>{`g`}</MathInline> is
          called the <strong>inverse</strong> of <MathInline>{`f`}</MathInline>.
        </p>
      </Callout>

      <h2>Key Properties of Inverse Functions</h2>
      <p>
        The defining property of an inverse function can be expressed as two composition identities:
      </p>

      <Callout type="info" title="Composition Identities">
        <p>
          If <MathInline>{`g`}</MathInline> is the inverse of <MathInline>{`f`}</MathInline>, then:
        </p>
        <MathBlock>{`g[f(x)] = x \\quad \\text{for all } x \\text{ in } A`}</MathBlock>
        <MathBlock>{`f[g(y)] = y \\quad \\text{for all } y \\text{ in } B`}</MathBlock>
        <p>
          In other words, <MathInline>{`g`}</MathInline> "undoes" what <MathInline>{`f`}</MathInline> does,
          and vice versa.
        </p>
      </Callout>

      <h2>When Does an Inverse Exist?</h2>
      <p>
        The process of inversion can be applied to any function <MathInline>{`f`}</MathInline> having the
        property that for each <MathInline>{`y`}</MathInline> in the range of <MathInline>{`f`}</MathInline>,
        there is exactly one <MathInline>{`x`}</MathInline> in the domain of <MathInline>{`f`}</MathInline> such
        that <MathInline>{`f(x) = y`}</MathInline>. Such functions are called <strong>one-to-one</strong>
        (or <strong>injective</strong>).
      </p>

      <Callout type="theorem" title="Existence of Inverses">
        <p>
          A function that is continuous and strictly monotonic on an interval
          <MathInline>{`[a, b]`}</MathInline> has an inverse.
        </p>
      </Callout>

      <p>
        <strong>Why?</strong> The intermediate value theorem tells us that on the interval
        <MathInline>{`[a, b]`}</MathInline>, <MathInline>{`f`}</MathInline> takes on every value between
        <MathInline>{`f(a)`}</MathInline> and <MathInline>{`f(b)`}</MathInline>. Moreover, <MathInline>{`f`}</MathInline>
        cannot take on the same value twice because <MathInline>{`f(x_1) \\neq f(x_2)`}</MathInline>
        whenever <MathInline>{`x_1 \\neq x_2`}</MathInline> (this is what "strictly monotonic" means).
        Therefore, every continuous strictly monotonic function has an inverse.
      </p>

      <h2>Ordered Pair Interpretation</h2>
      <p>
        The relation between a function <MathInline>{`f`}</MathInline> and its inverse <MathInline>{`g`}</MathInline>
        can be simply explained using ordered pairs. Recall that a function <MathInline>{`f`}</MathInline>
        can be described as a set of ordered pairs <MathInline>{`(x, y)`}</MathInline> no two of which have
        the same first element.
      </p>

      <Callout type="info" title="Ordered Pair Formulation">
        <p>
          The inverse function <MathInline>{`g`}</MathInline> is formed by taking the pairs
          <MathInline>{`(x, y)`}</MathInline> in <MathInline>{`f`}</MathInline> and interchanging the elements
          <MathInline>{`x`}</MathInline> and <MathInline>{`y`}</MathInline>. That is:
        </p>
        <MathBlock>{`(y, x) \\in g \\quad \\text{if and only if} \\quad (x, y) \\in f.`}</MathBlock>
        <p>
          If <MathInline>{`f`}</MathInline> is strictly monotonic, then no two pairs in
          <MathInline>{`f`}</MathInline> have the same second element, and hence no two pairs of
          <MathInline>{`g`}</MathInline> have the same first element. Thus <MathInline>{`g`}</MathInline> is
          indeed a function.
        </p>
      </Callout>

      <h2>Graphical Interpretation</h2>
      <p>
        The graphs of <MathInline>{`f`}</MathInline> and its inverse <MathInline>{`g`}</MathInline> are related
        by reflection through the line <MathInline>{`y = x`}</MathInline>. A point
        <MathInline>{`(u, v)`}</MathInline> lies on the graph of <MathInline>{`f`}</MathInline> if and only if
        the point <MathInline>{`(v, u)`}</MathInline> lies on the graph of <MathInline>{`g`}</MathInline>.
      </p>

      <h2>Properties Preserved by Inversion</h2>
      <p>
        Many properties possessed by the function <MathInline>{`f`}</MathInline> are transmitted to the
        inverse <MathInline>{`g`}</MathInline>. The following theorem tells us that monotonicity and
        continuity are both preserved.
      </p>

      <Callout type="theorem" title="Theorem 3.10 (Properties Preserved by Inversion)">
        <p>
          Assume <MathInline>{`f`}</MathInline> is strictly increasing and continuous on an interval
          <MathInline>{`[a, b]`}</MathInline>. Let <MathInline>{`c = f(a)`}</MathInline> and
          <MathInline>{`d = f(b)`}</MathInline> and let <MathInline>{`g`}</MathInline> be the inverse of
          <MathInline>{`f`}</MathInline>. That is, for each <MathInline>{`y`}</MathInline> in
          <MathInline>{`[c, d]`}</MathInline>, let <MathInline>{`g(y)`}</MathInline> be that <MathInline>{`x`}</MathInline>
          in <MathInline>{`[a, b]`}</MathInline> such that <MathInline>{`y = f(x)`}</MathInline>. Then:
        </p>
        <p>(a) <MathInline>{`g`}</MathInline> is strictly increasing on <MathInline>{`[c, d]`}</MathInline>;</p>
        <p>(b) <MathInline>{`g`}</MathInline> is continuous on <MathInline>{`[c, d]`}</MathInline>.</p>
      </Callout>

      <Callout type="info" title="Proof of Part (a)">
        <p>
          Choose <MathInline>{`y_1 < y_2`}</MathInline> in <MathInline>{`[c, d]`}</MathInline> and let
          <MathInline>{`x_1 = g(y_1)`}</MathInline>, <MathInline>{`x_2 = g(y_2)`}</MathInline>. Then
          <MathInline>{`y_1 = f(x_1)`}</MathInline> and <MathInline>{`y_2 = f(x_2)`}</MathInline>. Since
          <MathInline>{`f`}</MathInline> is strictly increasing, the relation
          <MathInline>{`y_1 < y_2`}</MathInline> implies <MathInline>{`x_1 < x_2`}</MathInline>, which in turn
          implies <MathInline>{`g`}</MathInline> is strictly increasing on <MathInline>{`[c, d]`}</MathInline>.
        </p>
      </Callout>

      <Callout type="info" title="Proof of Part (b)">
        <p>
          Choose a point <MathInline>{`y_0`}</MathInline> in the open interval <MathInline>{`(c, d)`}</MathInline>.
          To prove <MathInline>{`g`}</MathInline> is continuous at <MathInline>{`y_0`}</MathInline>, we must show
          that for every <MathInline>{`\\epsilon > 0`}</MathInline> there is a <MathInline>{`\\delta > 0`}</MathInline>
          such that:
        </p>
        <MathBlock>{`g(y_0) - \\epsilon < g(y) < g(y_0) + \\epsilon \\quad \\text{whenever} \\quad y_0 - \\delta < y < y_0 + \\delta.`}</MathBlock>
        <p>
          Let <MathInline>{`x_0 = g(y_0)`}</MathInline>, so that <MathInline>{`f(x_0) = y_0`}</MathInline>.
          Suppose <MathInline>{`\\epsilon`}</MathInline> is given (small enough so that both
          <MathInline>{`x_0 - \\epsilon`}</MathInline> and <MathInline>{`x_0 + \\epsilon`}</MathInline> are in
          <MathInline>{`[a, b]`}</MathInline>). Let <MathInline>{`\\delta`}</MathInline> be the smaller of the
          two numbers:
        </p>
        <MathBlock>{`f(x_0) - f(x_0 - \\epsilon) \\quad \\text{and} \\quad f(x_0 + \\epsilon) - f(x_0).`}</MathBlock>
        <p>
          It can be verified that this <MathInline>{`\\delta`}</MathInline> works. A slight modification
          proves that <MathInline>{`g`}</MathInline> is continuous from the right at <MathInline>{`c`}</MathInline>,
          and continuous from the left at <MathInline>{`d`}</MathInline>.
        </p>
      </Callout>

      <Callout type="info" title="Decreasing Functions">
        <p>
          There is a corresponding theorem for decreasing functions. The inverse of a strictly
          decreasing continuous function <MathInline>{`f`}</MathInline> is strictly decreasing and
          continuous. This follows by applying Theorem 3.10 to <MathInline>{`-f`}</MathInline>.
        </p>
      </Callout>

      <h2>Example: The nth-Root Function</h2>
      <p>
        A fundamental application of inversion is the construction of root functions.
      </p>

      <Callout type="example" title="The nth-Root Function">
        <p>
          If <MathInline>{`n`}</MathInline> is a positive integer, let <MathInline>{`f(x) = x^n`}</MathInline>
          for <MathInline>{`x \\geq 0`}</MathInline>. Then <MathInline>{`f`}</MathInline> is strictly increasing
          on every interval <MathInline>{`[a, b]`}</MathInline> with <MathInline>{`0 \\leq a < b`}</MathInline>.
          The inverse function <MathInline>{`g`}</MathInline> is the <strong>nth-root function</strong>,
          defined for <MathInline>{`y \\geq 0`}</MathInline> by the equation:
        </p>
        <MathBlock>{`g(y) = y^{1/n} = \\sqrt[n]{y}.`}</MathBlock>
      </Callout>

      <Callout type="theorem" title="Continuity of the nth-Root Function">
        <p>
          The nth-root function <MathInline>{`g`}</MathInline>, defined for <MathInline>{`y \\geq 0`}</MathInline>
          by the equation <MathInline>{`g(y) = y^{1/n}`}</MathInline>, is strictly increasing and
          continuous on every interval <MathInline>{`[c, d]`}</MathInline> with
          <MathInline>{`0 \\leq c < d`}</MathInline>, since it is the inverse of a strictly increasing
          continuous function.
        </p>
        <p>
          This gives an alternate proof of the continuity of the nth-root function, independent
          of the theory of integration. Since the product of continuous functions is continuous,
          we again deduce the continuity of the <MathInline>{`r`}</MathInline>th-power function:
        </p>
        <MathBlock>{`h(y) = y^r, \\quad \\text{where } r = m/n \\text{ is a positive rational number and } y > 0.`}</MathBlock>
      </Callout>

      <h2>Inverses of Piecewise Monotonic Functions</h2>
      <p>
        What happens if we try to apply the process of inversion to a function that is
        <em>not</em> monotonic on its domain?
      </p>

      <Callout type="example" title="The Function f(x) = x²">
        <p>
          Suppose <MathInline>{`f(x) = x^2`}</MathInline> on an interval of the form
          <MathInline>{`[-c, c]`}</MathInline> on the <MathInline>{`x`}</MathInline>-axis. Each point
          <MathInline>{`x`}</MathInline> in this interval is carried by <MathInline>{`f`}</MathInline> into
          exactly one point <MathInline>{`y`}</MathInline> in the interval <MathInline>{`[0, c^2]`}</MathInline>,
          namely:
        </p>
        <MathBlock>{`y = x^2.`}</MathBlock>
        <p>
          We can solve this equation for <MathInline>{`x`}</MathInline> in terms of <MathInline>{`y`}</MathInline>,
          but there are <em>two</em> values of <MathInline>{`x`}</MathInline> corresponding to each
          <MathInline>{`y`}</MathInline> in <MathInline>{`(0, c^2]`}</MathInline>, namely:
        </p>
        <MathBlock>{`x = \\sqrt{y} \\quad \\text{and} \\quad x = -\\sqrt{y}.`}</MathBlock>
      </Callout>

      <p>
        In the past, mathematicians would have said that the inverse <MathInline>{`g`}</MathInline> in
        this case is a "double-valued function" defined by <MathInline>{`g(y) = \\pm\\sqrt{y}`}</MathInline>.
        But since the modern point of view does not admit double-valuedness as a property of
        functions, we say that the process of inversion gives rise to <em>two</em> new functions,
        say <MathInline>{`g_1`}</MathInline> and <MathInline>{`g_2`}</MathInline>, where:
      </p>

      <MathBlock>{`g_1(y) = \\sqrt{y} \\quad \\text{and} \\quad g_2(y) = -\\sqrt{y} \\quad \\text{for each } y \\text{ in } [0, c^2].`}</MathBlock>

      <Callout type="info" title="Splitting into Monotonic Pieces">
        <p>
          To fit this into the notion of inverse as explained above, we look upon the equation
          <MathInline>{`y = x^2`}</MathInline> as defining not one function <MathInline>{`f`}</MathInline> but
          <em>two</em> functions <MathInline>{`f_1`}</MathInline> and <MathInline>{`f_2`}</MathInline>, where:
        </p>
        <MathBlock>{`f_1(x) = x^2 \\quad \\text{if } 0 \\leq x \\leq c`}</MathBlock>
        <MathBlock>{`f_2(x) = x^2 \\quad \\text{if } -c \\leq x \\leq 0.`}</MathBlock>
        <p>
          These may be considered as distinct functions because they have different domains. Each
          function is monotonic on its domain and each has an inverse: the inverse of
          <MathInline>{`f_1`}</MathInline> is <MathInline>{`g_1`}</MathInline> and the inverse of
          <MathInline>{`f_2`}</MathInline> is <MathInline>{`g_2`}</MathInline>.
        </p>
      </Callout>

      <p>
        This illustrates how the process of inversion can be applied to <strong>piecewise
        monotonic functions</strong>. We simply consider such a function as a union of monotonic
        functions and invert each monotonic piece separately.
      </p>

      <h2>Summary</h2>
      <p>
        The key results about inverse functions are:
      </p>
      <ul>
        <li>
          <strong>Existence:</strong> A continuous, strictly monotonic function has an inverse.
        </li>
        <li>
          <strong>Composition identities:</strong> If <MathInline>{`g`}</MathInline> is the inverse of
          <MathInline>{`f`}</MathInline>, then <MathInline>{`g[f(x)] = x`}</MathInline> and
          <MathInline>{`f[g(y)] = y`}</MathInline>.
        </li>
        <li>
          <strong>Graphical relationship:</strong> The graphs of <MathInline>{`f`}</MathInline> and
          <MathInline>{`g`}</MathInline> are reflections of each other through the line
          <MathInline>{`y = x`}</MathInline>.
        </li>
        <li>
          <strong>Preservation of properties:</strong> If <MathInline>{`f`}</MathInline> is strictly
          increasing (or decreasing) and continuous, then so is its inverse.
        </li>
        <li>
          <strong>Piecewise monotonic functions:</strong> These can be inverted by splitting them
          into monotonic pieces and inverting each piece separately.
        </li>
      </ul>
      <p>
        We shall make extensive use of the process of inversion in later chapters, particularly
        when defining logarithms and inverse trigonometric functions.
      </p>
    </LessonLayout>
  );
}
