import { LessonLayout } from '@/components/layout';
import { Definition, Theorem, Example } from '@/components/common';
import { Callout } from '@/components/common';
import { Math, MathBlock } from '@/components/common';

export default function Section39() {
  return (
    <LessonLayout sectionId={39}>
      <p className="italic text-gray-300 mb-6">
        You are familiar with many functions <Math>f : \mathbb{'{R}'} \to \mathbb{'{R}'}</Math> from
        the real line to the real line. Just as numbers can be manipulated arithmetically, so can
        functions: the sum of two functions is a function, the product of two functions is a
        function, and so forth.
      </p>

      <h2 className="text-2xl font-semibold mt-8 mb-4 text-amber-400">Functions from R to R</h2>

      <p className="mb-4">
        Some examples of functions <Math>f : \mathbb{'{R}'} \to \mathbb{'{R}'}</Math> are:
      </p>
      <ul className="list-disc list-inside mb-4 space-y-1">
        <li>
          <Math>f(x) := x^2 + 3x + 5</Math>
        </li>
        <li>
          <Math>{'f(x) := 2^x / (x^2 + 1)'}</Math>
        </li>
        <li>
          <Math>{'f(x) := \\sin(x) \\exp(x)'}</Math> (we will define sin and exp formally in
          Chapter 15)
        </li>
      </ul>

      <p className="mb-4">
        These are functions from <Math>\mathbb{'{R}'}</Math> to <Math>\mathbb{'{R}'}</Math> since
        to every real number <Math>x</Math> they assign a single real number <Math>f(x)</Math>.
        We can also consider more exotic functions, e.g.,
      </p>

      <MathBlock>
        {`f(x) := \\begin{cases} 1 & \\text{if } x \\in \\mathbb{Q} \\\\ 0 & \\text{if } x \\notin \\mathbb{Q} \\end{cases}`}
      </MathBlock>

      <p className="mt-4 mb-4">
        This function is not algebraic (it cannot be expressed in terms of <Math>x</Math> purely by
        using the standard algebraic operations), but it is still a function from{' '}
        <Math>\mathbb{'{R}'}</Math> to <Math>\mathbb{'{R}'}</Math>, because it still assigns a real
        number <Math>f(x)</Math> to each <Math>x \in \mathbb{'{R}'}</Math>.
      </p>

      <h2 className="text-2xl font-semibold mt-8 mb-4 text-amber-400">Restricting Functions</h2>

      <p className="mb-4">
        We can take any function <Math>f : \mathbb{'{R}'} \to \mathbb{'{R}'}</Math> defined on all
        of <Math>\mathbb{'{R}'}</Math>, and <strong>restrict</strong> the domain to a smaller set{' '}
        <Math>X \subseteq \mathbb{'{R}'}</Math>, creating a new function, sometimes called{' '}
        <Math>f|_X</Math>, from <Math>X</Math> to <Math>\mathbb{'{R}'}</Math>. This is the same
        function as the original function <Math>f</Math>, but is only defined on a smaller domain.
      </p>

      <p className="mb-4">
        Thus <Math>f|_X(x) := f(x)</Math> when <Math>x \in X</Math>, and <Math>f|_X(x)</Math> is
        undefined when <Math>x \notin X</Math>.
      </p>

      <Example id="ex-restriction" title="Example: Restriction">
        <p>
          For instance, we can restrict the function <Math>f(x) := x^2</Math>, which is initially
          defined from <Math>\mathbb{'{R}'}</Math> to <Math>\mathbb{'{R}'}</Math>, to the interval{' '}
          <Math>[1, 2]</Math>, thus creating a new function{' '}
          <Math>{'f|_{[1,2]} : [1, 2] \\to \\mathbb{R}'}</Math>, which is defined as{' '}
          <Math>{'f|_{[1,2]}(x) = x^2'}</Math> when <Math>x \in [1, 2]</Math> but is undefined
          elsewhere.
        </p>
      </Example>

      <Callout type="note" className="my-6">
        <strong>Note on Range:</strong> One could also restrict the range from{' '}
        <Math>\mathbb{'{R}'}</Math> to some smaller subset <Math>Y</Math>, provided that all the
        values of <Math>f(x)</Math> lie inside <Math>Y</Math>. For instance, the function{' '}
        <Math>f(x) := x^2</Math> could also be thought of as a function from{' '}
        <Math>\mathbb{'{R}'}</Math> to <Math>[0, \infty)</Math>. Formally, these are different
        functions, but the distinction is so minor that we shall often be careless about the range.
      </Callout>

      <h2 className="text-2xl font-semibold mt-8 mb-4 text-amber-400">
        Functions vs Values
      </h2>

      <p className="mb-4">
        Strictly speaking, there is a distinction between a <em>function</em> <Math>f</Math>, and
        its <em>value</em> <Math>f(x)</Math> at a point <Math>x</Math>. The function <Math>f</Math>{' '}
        is a function; but <Math>f(x)</Math> is a number (which depends on some free variable{' '}
        <Math>x</Math>).
      </p>

      <p className="mb-4">
        This distinction is rather subtle and we will not stress it too much, but there are times
        when one has to distinguish between the two. For instance, if{' '}
        <Math>f : \mathbb{'{R}'} \to \mathbb{'{R}'}</Math> is the function <Math>f(x) := x^2</Math>,
        and <Math>g := f|_{'{[1,2]}'}</Math> is the restriction of <Math>f</Math> to the interval{' '}
        <Math>[1, 2]</Math>, then <Math>f</Math> and <Math>g</Math> both perform the operation of
        squaring, i.e., <Math>f(x) = x^2</Math> and <Math>g(x) = x^2</Math>, but the two functions{' '}
        <Math>f</Math> and <Math>g</Math> are not considered the same function,{' '}
        <Math>f \neq g</Math>, because they have different domains.
      </p>

      <Callout type="warning" className="my-6">
        <strong>Important Distinction:</strong> This distinction matters when we start doing things
        like differentiation. For instance, if <Math>f(x) = x^2</Math>, then <Math>f(3) = 9</Math>,
        but the derivative of <Math>f</Math> at <Math>3</Math> is <Math>6</Math>, whereas the
        derivative of <Math>9</Math> is of course <Math>0</Math>. So we cannot simply "differentiate
        both sides" of <Math>f(3) = 9</Math> and conclude that <Math>6 = 0</Math>.
      </Callout>

      <h2 className="text-2xl font-semibold mt-8 mb-4 text-amber-400">Graphs of Functions</h2>

      <p className="mb-4">
        If <Math>X</Math> is a subset of <Math>\mathbb{'{R}'}</Math>, and{' '}
        <Math>f : X \to \mathbb{'{R}'}</Math> is a function, we can form the <strong>graph</strong>{' '}
        <Math>{'{\\{(x, f(x)) : x \\in X\\}}'}</Math> of the function <Math>f</Math>; this is a
        subset of <Math>X \times \mathbb{'{R}'}</Math>, and hence a subset of the Euclidean plane{' '}
        <Math>\mathbb{'{R}'}^2 = \mathbb{'{R}'} \times \mathbb{'{R}'}</Math>.
      </p>

      <p className="mb-4">
        One can certainly study a function through its graph, by using the geometry of the plane{' '}
        <Math>\mathbb{'{R}'}^2</Math> (e.g., employing such concepts as tangent lines, area, and so
        forth). We however will pursue a more "analytic" approach, in which we rely instead on the
        properties of the real numbers to analyze these functions.
      </p>

      <p className="mb-4">
        The two approaches are complementary; the geometric approach offers more visual intuition,
        while the analytic approach offers rigour and precision. Both become useful when extending
        analysis of functions of one variable to functions of many variables.
      </p>

      <h2 className="text-2xl font-semibold mt-8 mb-4 text-amber-400">
        Arithmetic Operations on Functions
      </h2>

      <Definition id="def-9.2.1" title="Definition 9.2.1: Arithmetic operations on functions">
        <p>
          Given two functions <Math>f : X \to \mathbb{'{R}'}</Math> and{' '}
          <Math>g : X \to \mathbb{'{R}'}</Math>, we can define:
        </p>

        <p className="mt-3">
          Their <strong>sum</strong> <Math>f + g : X \to \mathbb{'{R}'}</Math> by the formula
        </p>
        <MathBlock>{`(f + g)(x) := f(x) + g(x)`}</MathBlock>

        <p className="mt-3">
          Their <strong>difference</strong> <Math>f - g : X \to \mathbb{'{R}'}</Math> by the formula
        </p>
        <MathBlock>{`(f - g)(x) := f(x) - g(x)`}</MathBlock>

        <p className="mt-3">
          Their <strong>maximum</strong>{' '}
          <Math>\max(f, g) : X \to \mathbb{'{R}'}</Math> by
        </p>
        <MathBlock>{`\\max(f, g)(x) := \\max(f(x), g(x))`}</MathBlock>

        <p className="mt-3">
          Their <strong>minimum</strong>{' '}
          <Math>\min(f, g) : X \to \mathbb{'{R}'}</Math> by
        </p>
        <MathBlock>{`\\min(f, g)(x) := \\min(f(x), g(x))`}</MathBlock>

        <p className="mt-3">
          Their <strong>product</strong> <Math>fg : X \to \mathbb{'{R}'}</Math> (or{' '}
          <Math>f \cdot g : X \to \mathbb{'{R}'}</Math>) by the formula
        </p>
        <MathBlock>{`(fg)(x) := f(x)g(x)`}</MathBlock>

        <p className="mt-3">
          And (provided that <Math>g(x) \neq 0</Math> for all <Math>x \in X</Math>) the{' '}
          <strong>quotient</strong> <Math>f/g : X \to \mathbb{'{R}'}</Math> by the formula
        </p>
        <MathBlock>{`(f/g)(x) := f(x)/g(x)`}</MathBlock>

        <p className="mt-3">
          Finally, if <Math>c</Math> is a real number, we can define the function{' '}
          <Math>cf : X \to \mathbb{'{R}'}</Math> (or <Math>c \cdot f : X \to \mathbb{'{R}'}</Math>)
          by the formula
        </p>
        <MathBlock>{`(cf)(x) := c \\times f(x)`}</MathBlock>
      </Definition>

      <Example id="ex-9.2.2" title="Example 9.2.2">
        <p>
          If <Math>f : \mathbb{'{R}'} \to \mathbb{'{R}'}</Math> is the function{' '}
          <Math>f(x) := x^2</Math>, and <Math>g : \mathbb{'{R}'} \to \mathbb{'{R}'}</Math> is the
          function <Math>g(x) := 2x</Math>, then:
        </p>
        <ul className="list-disc list-inside mt-2 space-y-1">
          <li>
            <Math>f + g : \mathbb{'{R}'} \to \mathbb{'{R}'}</Math> is the function{' '}
            <Math>(f + g)(x) = x^2 + 2x</Math>
          </li>
          <li>
            <Math>fg : \mathbb{'{R}'} \to \mathbb{'{R}'}</Math> is the function{' '}
            <Math>fg(x) = 2x^3</Math>
          </li>
          <li>
            <Math>f - g : \mathbb{'{R}'} \to \mathbb{'{R}'}</Math> is the function{' '}
            <Math>(f - g)(x) = x^2 - 2x</Math>
          </li>
          <li>
            <Math>6f : \mathbb{'{R}'} \to \mathbb{'{R}'}</Math> is the function{' '}
            <Math>(6f)(x) = 6x^2</Math>
          </li>
        </ul>
      </Example>

      <Callout type="warning" className="my-6">
        <strong>Product vs Composition:</strong> Observe that <Math>fg</Math> is not the same
        function as <Math>f \circ g</Math>, which maps <Math>x \mapsto 4x^2</Math>, nor is it the
        same as <Math>g \circ f</Math>, which maps <Math>x \mapsto 2x^2</Math>. Thus multiplication
        of functions and composition of functions are two different operations.
      </Callout>

      <h2 className="text-2xl font-semibold mt-8 mb-4 text-amber-400">
        Properties of Function Operations
      </h2>

      <p className="mb-4">
        The arithmetic operations on functions satisfy many familiar algebraic laws:
      </p>

      <Theorem id="thm-function-laws" title="Proposition: Function arithmetic laws">
        <p>
          Let <Math>f, g, h : X \to \mathbb{'{R}'}</Math> be functions, and let <Math>c, d</Math> be
          real numbers. Then:
        </p>
        <ul className="list-disc list-inside mt-2 space-y-1">
          <li>
            <strong>Commutativity:</strong> <Math>f + g = g + f</Math> and{' '}
            <Math>f \cdot g = g \cdot f</Math>
          </li>
          <li>
            <strong>Associativity:</strong> <Math>(f + g) + h = f + (g + h)</Math> and{' '}
            <Math>(f \cdot g) \cdot h = f \cdot (g \cdot h)</Math>
          </li>
          <li>
            <strong>Distributivity:</strong> <Math>f \cdot (g + h) = f \cdot g + f \cdot h</Math>
          </li>
          <li>
            <strong>Scalar distributivity:</strong> <Math>c(f + g) = cf + cg</Math> and{' '}
            <Math>(c + d)f = cf + df</Math>
          </li>
          <li>
            <strong>Scalar associativity:</strong> <Math>(cd)f = c(df)</Math>
          </li>
        </ul>
      </Theorem>

      <h2 className="text-2xl font-semibold mt-8 mb-4 text-amber-400">
        Composition and Arithmetic
      </h2>

      <p className="mb-4">
        An important question is how composition interacts with arithmetic operations. Not all
        identities that might seem natural actually hold:
      </p>

      <Theorem id="thm-composition-laws" title="Proposition: Composition identities">
        <p>
          Let <Math>f, g, h : \mathbb{'{R}'} \to \mathbb{'{R}'}</Math> be functions. The following
          are true:
        </p>
        <ul className="list-disc list-inside mt-2 space-y-1">
          <li>
            <Math>(f + g) \circ h = (f \circ h) + (g \circ h)</Math>
          </li>
          <li>
            <Math>(f + g) \cdot h = (f \cdot h) + (g \cdot h)</Math>
          </li>
          <li>
            <Math>f \cdot (g + h) = (f \cdot g) + (f \cdot h)</Math>
          </li>
        </ul>
        <p className="mt-3">
          However, the following is generally <strong>false</strong>:
        </p>
        <ul className="list-disc list-inside mt-2">
          <li>
            <Math>f \circ (g + h) = (f \circ g) + (f \circ h)</Math> (false in general)
          </li>
        </ul>
      </Theorem>

      <Example id="ex-counterexample" title="Counterexample">
        <p>
          Let <Math>f(x) = x^2</Math>, <Math>g(x) = x</Math>, and <Math>h(x) = 1</Math>. Then:
        </p>
        <ul className="list-disc list-inside mt-2 space-y-1">
          <li>
            <Math>f \circ (g + h)</Math> gives <Math>(x + 1)^2 = x^2 + 2x + 1</Math>
          </li>
          <li>
            <Math>(f \circ g) + (f \circ h)</Math> gives <Math>x^2 + 1</Math>
          </li>
        </ul>
        <p className="mt-2">
          Since <Math>x^2 + 2x + 1 \neq x^2 + 1</Math>, we see that{' '}
          <Math>f \circ (g + h) \neq (f \circ g) + (f \circ h)</Math>.
        </p>
      </Example>

      <h2 className="text-2xl font-semibold mt-8 mb-4 text-amber-400">Summary</h2>

      <Callout type="success" className="my-6">
        <strong>Key Takeaways:</strong>
        <ul className="list-disc list-inside mt-2 space-y-1">
          <li>
            Functions can be <strong>restricted</strong> to smaller domains via <Math>f|_X</Math>
          </li>
          <li>
            A <strong>function</strong> <Math>f</Math> is distinct from its <strong>value</strong>{' '}
            <Math>f(x)</Math> at a point
          </li>
          <li>
            <strong>Arithmetic operations</strong> on functions: <Math>f + g</Math>,{' '}
            <Math>f - g</Math>, <Math>fg</Math>, <Math>f/g</Math>, <Math>cf</Math>,{' '}
            <Math>\max(f, g)</Math>, <Math>\min(f, g)</Math>
          </li>
          <li>
            <strong>Multiplication</strong> <Math>fg</Math> is different from{' '}
            <strong>composition</strong> <Math>f \circ g</Math>
          </li>
          <li>
            Composition distributes over addition from the right: <Math>(f + g) \circ h = (f \circ h) + (g \circ h)</Math>
          </li>
          <li>
            But not from the left: <Math>f \circ (g + h) \neq (f \circ g) + (f \circ h)</Math> in
            general
          </li>
        </ul>
      </Callout>

      <h2 className="text-2xl font-semibold mt-8 mb-4 text-amber-400">Exercises</h2>

      <div className="bg-zinc-900/50 rounded-lg p-6 border border-zinc-800">
        <p className="font-semibold text-amber-300 mb-4">Exercise 9.2.1</p>
        <p>
          Let <Math>f : \mathbb{'{R}'} \to \mathbb{'{R}'}</Math>,{' '}
          <Math>g : \mathbb{'{R}'} \to \mathbb{'{R}'}</Math>,{' '}
          <Math>h : \mathbb{'{R}'} \to \mathbb{'{R}'}</Math>. Which of the following identities are
          true, and which ones are false? In the former case, give a proof; in the latter case, give
          a counterexample.
        </p>
        <ul className="list-disc list-inside mt-2 space-y-1">
          <li>
            <Math>(f + g) \circ h = (f \circ h) + (g \circ h)</Math>
          </li>
          <li>
            <Math>f \circ (g + h) = (f \circ g) + (f \circ h)</Math>
          </li>
          <li>
            <Math>(f + g) \cdot h = (f \cdot h) + (g \cdot h)</Math>
          </li>
          <li>
            <Math>f \cdot (g + h) = (f \cdot g) + (f \cdot h)</Math>
          </li>
        </ul>
      </div>

      <div className="bg-zinc-900/50 rounded-lg p-6 border border-zinc-800 mt-4">
        <p className="font-semibold text-amber-300 mb-4">Exercise 9.2.2</p>
        <p>
          Let <Math>f : X \to \mathbb{'{R}'}</Math> be a function. Define the{' '}
          <strong>absolute value</strong> function <Math>|f| : X \to \mathbb{'{R}'}</Math> by{' '}
          <Math>|f|(x) := |f(x)|</Math>. Show that <Math>|f| = \max(f, -f)</Math>. Also show that{' '}
          <Math>-|f| \leq f \leq |f|</Math> (where we say <Math>g \leq h</Math> iff{' '}
          <Math>g(x) \leq h(x)</Math> for all <Math>x \in X</Math>).
        </p>
      </div>

      <div className="bg-zinc-900/50 rounded-lg p-6 border border-zinc-800 mt-4">
        <p className="font-semibold text-amber-300 mb-4">Exercise 9.2.3</p>
        <p>
          Let <Math>f, g : X \to \mathbb{'{R}'}</Math> be functions. Show that{' '}
          <Math>\max(f, g) = (f + g + |f - g|)/2</Math> and{' '}
          <Math>\min(f, g) = (f + g - |f - g|)/2</Math>.
        </p>
      </div>
    </LessonLayout>
  );
}
