import { LessonLayout } from '../../components/layout/LessonLayout';
import { Callout } from '../../components/common/Callout';
import { InlineMath, MathBlock } from '../../components/common/MathBlock';

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
          Consider the function <InlineMath>{`f`}</InlineMath> defined on the interval
          <InlineMath>{`[0, 2]`}</InlineMath> by the equation <InlineMath>{`f(x) = 2x + 1`}</InlineMath>.
          The range of <InlineMath>{`f`}</InlineMath> is the interval <InlineMath>{`[1, 5]`}</InlineMath>.
          Each point <InlineMath>{`x`}</InlineMath> in <InlineMath>{`[0, 2]`}</InlineMath> is carried by
          <InlineMath>{`f`}</InlineMath> onto exactly one point <InlineMath>{`y`}</InlineMath> in
          <InlineMath>{`[1, 5]`}</InlineMath>, namely:
        </p>
        <MathBlock>{`y = 2x + 1.`}</MathBlock>
        <p>
          Conversely, for every <InlineMath>{`y`}</InlineMath> in <InlineMath>{`[1, 5]`}</InlineMath>, there is
          exactly one <InlineMath>{`x`}</InlineMath> in <InlineMath>{`[0, 2]`}</InlineMath> for which
          <InlineMath>{`y = f(x)`}</InlineMath>. To find this <InlineMath>{`x`}</InlineMath>, we solve for
          <InlineMath>{`x`}</InlineMath>:
        </p>
        <MathBlock>{`x = \\frac{1}{2}(y - 1).`}</MathBlock>
        <p>
          This equation defines <InlineMath>{`x`}</InlineMath> as a function of <InlineMath>{`y`}</InlineMath>.
          If we denote this function by <InlineMath>{`g`}</InlineMath>, we have:
        </p>
        <MathBlock>{`g(y) = \\frac{1}{2}(y - 1)`}</MathBlock>
        <p>
          for each <InlineMath>{`y`}</InlineMath> in <InlineMath>{`[1, 5]`}</InlineMath>. The function
          <InlineMath>{`g`}</InlineMath> is called the <strong>inverse</strong> of <InlineMath>{`f`}</InlineMath>.
        </p>
      </Callout>

      <h2>Definition of Inverse Function</h2>
      <p>
        Consider a function <InlineMath>{`f`}</InlineMath> with domain <InlineMath>{`A`}</InlineMath> and range
        <InlineMath>{`B`}</InlineMath>. For each <InlineMath>{`x`}</InlineMath> in <InlineMath>{`A`}</InlineMath>, there
        is exactly one <InlineMath>{`y`}</InlineMath> in <InlineMath>{`B`}</InlineMath> such that
        <InlineMath>{`y = f(x)`}</InlineMath>. For each <InlineMath>{`y`}</InlineMath> in <InlineMath>{`B`}</InlineMath>,
        there is at least one <InlineMath>{`x`}</InlineMath> in <InlineMath>{`A`}</InlineMath> such that
        <InlineMath>{`f(x) = y`}</InlineMath>.
      </p>

      <Callout type="definition" title="Inverse Function">
        <p>
          Suppose that for each <InlineMath>{`y`}</InlineMath> in <InlineMath>{`B`}</InlineMath>, there is
          <em>exactly one</em> <InlineMath>{`x`}</InlineMath> in <InlineMath>{`A`}</InlineMath> such that
          <InlineMath>{`f(x) = y`}</InlineMath>. Then we can define a new function <InlineMath>{`g`}</InlineMath>
          on <InlineMath>{`B`}</InlineMath> as follows:
        </p>
        <MathBlock>{`g(y) = x \\quad \\text{means} \\quad y = f(x).`}</MathBlock>
        <p>
          In other words, the value of <InlineMath>{`g`}</InlineMath> at each point <InlineMath>{`y`}</InlineMath>
          in <InlineMath>{`B`}</InlineMath> is that unique <InlineMath>{`x`}</InlineMath> in <InlineMath>{`A`}</InlineMath>
          such that <InlineMath>{`f(x) = y`}</InlineMath>. This new function <InlineMath>{`g`}</InlineMath> is
          called the <strong>inverse</strong> of <InlineMath>{`f`}</InlineMath>.
        </p>
      </Callout>

      <h2>Key Properties of Inverse Functions</h2>
      <p>
        The defining property of an inverse function can be expressed as two composition identities:
      </p>

      <Callout type="info" title="Composition Identities">
        <p>
          If <InlineMath>{`g`}</InlineMath> is the inverse of <InlineMath>{`f`}</InlineMath>, then:
        </p>
        <MathBlock>{`g[f(x)] = x \\quad \\text{for all } x \\text{ in } A`}</MathBlock>
        <MathBlock>{`f[g(y)] = y \\quad \\text{for all } y \\text{ in } B`}</MathBlock>
        <p>
          In other words, <InlineMath>{`g`}</InlineMath> "undoes" what <InlineMath>{`f`}</InlineMath> does,
          and vice versa.
        </p>
      </Callout>

      <h2>When Does an Inverse Exist?</h2>
      <p>
        The process of inversion can be applied to any function <InlineMath>{`f`}</InlineMath> having the
        property that for each <InlineMath>{`y`}</InlineMath> in the range of <InlineMath>{`f`}</InlineMath>,
        there is exactly one <InlineMath>{`x`}</InlineMath> in the domain of <InlineMath>{`f`}</InlineMath> such
        that <InlineMath>{`f(x) = y`}</InlineMath>. Such functions are called <strong>one-to-one</strong>
        (or <strong>injective</strong>).
      </p>

      <Callout type="theorem" title="Existence of Inverses">
        <p>
          A function that is continuous and strictly monotonic on an interval
          <InlineMath>{`[a, b]`}</InlineMath> has an inverse.
        </p>
      </Callout>

      <p>
        <strong>Why?</strong> The intermediate value theorem tells us that on the interval
        <InlineMath>{`[a, b]`}</InlineMath>, <InlineMath>{`f`}</InlineMath> takes on every value between
        <InlineMath>{`f(a)`}</InlineMath> and <InlineMath>{`f(b)`}</InlineMath>. Moreover, <InlineMath>{`f`}</InlineMath>
        cannot take on the same value twice because <InlineMath>{`f(x_1) \\neq f(x_2)`}</InlineMath>
        whenever <InlineMath>{`x_1 \\neq x_2`}</InlineMath> (this is what "strictly monotonic" means).
        Therefore, every continuous strictly monotonic function has an inverse.
      </p>

      <h2>Ordered Pair Interpretation</h2>
      <p>
        The relation between a function <InlineMath>{`f`}</InlineMath> and its inverse <InlineMath>{`g`}</InlineMath>
        can be simply explained using ordered pairs. Recall that a function <InlineMath>{`f`}</InlineMath>
        can be described as a set of ordered pairs <InlineMath>{`(x, y)`}</InlineMath> no two of which have
        the same first element.
      </p>

      <Callout type="info" title="Ordered Pair Formulation">
        <p>
          The inverse function <InlineMath>{`g`}</InlineMath> is formed by taking the pairs
          <InlineMath>{`(x, y)`}</InlineMath> in <InlineMath>{`f`}</InlineMath> and interchanging the elements
          <InlineMath>{`x`}</InlineMath> and <InlineMath>{`y`}</InlineMath>. That is:
        </p>
        <MathBlock>{`(y, x) \\in g \\quad \\text{if and only if} \\quad (x, y) \\in f.`}</MathBlock>
        <p>
          If <InlineMath>{`f`}</InlineMath> is strictly monotonic, then no two pairs in
          <InlineMath>{`f`}</InlineMath> have the same second element, and hence no two pairs of
          <InlineMath>{`g`}</InlineMath> have the same first element. Thus <InlineMath>{`g`}</InlineMath> is
          indeed a function.
        </p>
      </Callout>

      <h2>Graphical Interpretation</h2>
      <p>
        The graphs of <InlineMath>{`f`}</InlineMath> and its inverse <InlineMath>{`g`}</InlineMath> are related
        by reflection through the line <InlineMath>{`y = x`}</InlineMath>. A point
        <InlineMath>{`(u, v)`}</InlineMath> lies on the graph of <InlineMath>{`f`}</InlineMath> if and only if
        the point <InlineMath>{`(v, u)`}</InlineMath> lies on the graph of <InlineMath>{`g`}</InlineMath>.
      </p>

      <h2>Properties Preserved by Inversion</h2>
      <p>
        Many properties possessed by the function <InlineMath>{`f`}</InlineMath> are transmitted to the
        inverse <InlineMath>{`g`}</InlineMath>. The following theorem tells us that monotonicity and
        continuity are both preserved.
      </p>

      <Callout type="theorem" title="Theorem 3.10 (Properties Preserved by Inversion)">
        <p>
          Assume <InlineMath>{`f`}</InlineMath> is strictly increasing and continuous on an interval
          <InlineMath>{`[a, b]`}</InlineMath>. Let <InlineMath>{`c = f(a)`}</InlineMath> and
          <InlineMath>{`d = f(b)`}</InlineMath> and let <InlineMath>{`g`}</InlineMath> be the inverse of
          <InlineMath>{`f`}</InlineMath>. That is, for each <InlineMath>{`y`}</InlineMath> in
          <InlineMath>{`[c, d]`}</InlineMath>, let <InlineMath>{`g(y)`}</InlineMath> be that <InlineMath>{`x`}</InlineMath>
          in <InlineMath>{`[a, b]`}</InlineMath> such that <InlineMath>{`y = f(x)`}</InlineMath>. Then:
        </p>
        <p>(a) <InlineMath>{`g`}</InlineMath> is strictly increasing on <InlineMath>{`[c, d]`}</InlineMath>;</p>
        <p>(b) <InlineMath>{`g`}</InlineMath> is continuous on <InlineMath>{`[c, d]`}</InlineMath>.</p>
      </Callout>

      <Callout type="info" title="Proof of Part (a)">
        <p>
          Choose <InlineMath>{`y_1 < y_2`}</InlineMath> in <InlineMath>{`[c, d]`}</InlineMath> and let
          <InlineMath>{`x_1 = g(y_1)`}</InlineMath>, <InlineMath>{`x_2 = g(y_2)`}</InlineMath>. Then
          <InlineMath>{`y_1 = f(x_1)`}</InlineMath> and <InlineMath>{`y_2 = f(x_2)`}</InlineMath>. Since
          <InlineMath>{`f`}</InlineMath> is strictly increasing, the relation
          <InlineMath>{`y_1 < y_2`}</InlineMath> implies <InlineMath>{`x_1 < x_2`}</InlineMath>, which in turn
          implies <InlineMath>{`g`}</InlineMath> is strictly increasing on <InlineMath>{`[c, d]`}</InlineMath>.
        </p>
      </Callout>

      <Callout type="info" title="Proof of Part (b)">
        <p>
          Choose a point <InlineMath>{`y_0`}</InlineMath> in the open interval <InlineMath>{`(c, d)`}</InlineMath>.
          To prove <InlineMath>{`g`}</InlineMath> is continuous at <InlineMath>{`y_0`}</InlineMath>, we must show
          that for every <InlineMath>{`\\epsilon > 0`}</InlineMath> there is a <InlineMath>{`\\delta > 0`}</InlineMath>
          such that:
        </p>
        <MathBlock>{`g(y_0) - \\epsilon < g(y) < g(y_0) + \\epsilon \\quad \\text{whenever} \\quad y_0 - \\delta < y < y_0 + \\delta.`}</MathBlock>
        <p>
          Let <InlineMath>{`x_0 = g(y_0)`}</InlineMath>, so that <InlineMath>{`f(x_0) = y_0`}</InlineMath>.
          Suppose <InlineMath>{`\\epsilon`}</InlineMath> is given (small enough so that both
          <InlineMath>{`x_0 - \\epsilon`}</InlineMath> and <InlineMath>{`x_0 + \\epsilon`}</InlineMath> are in
          <InlineMath>{`[a, b]`}</InlineMath>). Let <InlineMath>{`\\delta`}</InlineMath> be the smaller of the
          two numbers:
        </p>
        <MathBlock>{`f(x_0) - f(x_0 - \\epsilon) \\quad \\text{and} \\quad f(x_0 + \\epsilon) - f(x_0).`}</MathBlock>
        <p>
          It can be verified that this <InlineMath>{`\\delta`}</InlineMath> works. A slight modification
          proves that <InlineMath>{`g`}</InlineMath> is continuous from the right at <InlineMath>{`c`}</InlineMath>,
          and continuous from the left at <InlineMath>{`d`}</InlineMath>.
        </p>
      </Callout>

      <Callout type="info" title="Decreasing Functions">
        <p>
          There is a corresponding theorem for decreasing functions. The inverse of a strictly
          decreasing continuous function <InlineMath>{`f`}</InlineMath> is strictly decreasing and
          continuous. This follows by applying Theorem 3.10 to <InlineMath>{`-f`}</InlineMath>.
        </p>
      </Callout>

      <h2>Example: The nth-Root Function</h2>
      <p>
        A fundamental application of inversion is the construction of root functions.
      </p>

      <Callout type="example" title="The nth-Root Function">
        <p>
          If <InlineMath>{`n`}</InlineMath> is a positive integer, let <InlineMath>{`f(x) = x^n`}</InlineMath>
          for <InlineMath>{`x \\geq 0`}</InlineMath>. Then <InlineMath>{`f`}</InlineMath> is strictly increasing
          on every interval <InlineMath>{`[a, b]`}</InlineMath> with <InlineMath>{`0 \\leq a < b`}</InlineMath>.
          The inverse function <InlineMath>{`g`}</InlineMath> is the <strong>nth-root function</strong>,
          defined for <InlineMath>{`y \\geq 0`}</InlineMath> by the equation:
        </p>
        <MathBlock>{`g(y) = y^{1/n} = \\sqrt[n]{y}.`}</MathBlock>
      </Callout>

      <Callout type="theorem" title="Continuity of the nth-Root Function">
        <p>
          The nth-root function <InlineMath>{`g`}</InlineMath>, defined for <InlineMath>{`y \\geq 0`}</InlineMath>
          by the equation <InlineMath>{`g(y) = y^{1/n}`}</InlineMath>, is strictly increasing and
          continuous on every interval <InlineMath>{`[c, d]`}</InlineMath> with
          <InlineMath>{`0 \\leq c < d`}</InlineMath>, since it is the inverse of a strictly increasing
          continuous function.
        </p>
        <p>
          This gives an alternate proof of the continuity of the nth-root function, independent
          of the theory of integration. Since the product of continuous functions is continuous,
          we again deduce the continuity of the <InlineMath>{`r`}</InlineMath>th-power function:
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
          Suppose <InlineMath>{`f(x) = x^2`}</InlineMath> on an interval of the form
          <InlineMath>{`[-c, c]`}</InlineMath> on the <InlineMath>{`x`}</InlineMath>-axis. Each point
          <InlineMath>{`x`}</InlineMath> in this interval is carried by <InlineMath>{`f`}</InlineMath> into
          exactly one point <InlineMath>{`y`}</InlineMath> in the interval <InlineMath>{`[0, c^2]`}</InlineMath>,
          namely:
        </p>
        <MathBlock>{`y = x^2.`}</MathBlock>
        <p>
          We can solve this equation for <InlineMath>{`x`}</InlineMath> in terms of <InlineMath>{`y`}</InlineMath>,
          but there are <em>two</em> values of <InlineMath>{`x`}</InlineMath> corresponding to each
          <InlineMath>{`y`}</InlineMath> in <InlineMath>{`(0, c^2]`}</InlineMath>, namely:
        </p>
        <MathBlock>{`x = \\sqrt{y} \\quad \\text{and} \\quad x = -\\sqrt{y}.`}</MathBlock>
      </Callout>

      <p>
        In the past, mathematicians would have said that the inverse <InlineMath>{`g`}</InlineMath> in
        this case is a "double-valued function" defined by <InlineMath>{`g(y) = \\pm\\sqrt{y}`}</InlineMath>.
        But since the modern point of view does not admit double-valuedness as a property of
        functions, we say that the process of inversion gives rise to <em>two</em> new functions,
        say <InlineMath>{`g_1`}</InlineMath> and <InlineMath>{`g_2`}</InlineMath>, where:
      </p>

      <MathBlock>{`g_1(y) = \\sqrt{y} \\quad \\text{and} \\quad g_2(y) = -\\sqrt{y} \\quad \\text{for each } y \\text{ in } [0, c^2].`}</MathBlock>

      <Callout type="info" title="Splitting into Monotonic Pieces">
        <p>
          To fit this into the notion of inverse as explained above, we look upon the equation
          <InlineMath>{`y = x^2`}</InlineMath> as defining not one function <InlineMath>{`f`}</InlineMath> but
          <em>two</em> functions <InlineMath>{`f_1`}</InlineMath> and <InlineMath>{`f_2`}</InlineMath>, where:
        </p>
        <MathBlock>{`f_1(x) = x^2 \\quad \\text{if } 0 \\leq x \\leq c`}</MathBlock>
        <MathBlock>{`f_2(x) = x^2 \\quad \\text{if } -c \\leq x \\leq 0.`}</MathBlock>
        <p>
          These may be considered as distinct functions because they have different domains. Each
          function is monotonic on its domain and each has an inverse: the inverse of
          <InlineMath>{`f_1`}</InlineMath> is <InlineMath>{`g_1`}</InlineMath> and the inverse of
          <InlineMath>{`f_2`}</InlineMath> is <InlineMath>{`g_2`}</InlineMath>.
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
          <strong>Composition identities:</strong> If <InlineMath>{`g`}</InlineMath> is the inverse of
          <InlineMath>{`f`}</InlineMath>, then <InlineMath>{`g[f(x)] = x`}</InlineMath> and
          <InlineMath>{`f[g(y)] = y`}</InlineMath>.
        </li>
        <li>
          <strong>Graphical relationship:</strong> The graphs of <InlineMath>{`f`}</InlineMath> and
          <InlineMath>{`g`}</InlineMath> are reflections of each other through the line
          <InlineMath>{`y = x`}</InlineMath>.
        </li>
        <li>
          <strong>Preservation of properties:</strong> If <InlineMath>{`f`}</InlineMath> is strictly
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
