import { LessonLayout } from '@/components/layout';
import { Definition, Theorem, Example } from '@/components/common';
import { Callout } from '@/components/common';
import { Math, MathBlock } from '@/components/common';

export default function Section54() {
  return (
    <LessonLayout sectionId={54}>
      <p>
        We can now describe the class of "simple" functions which we can integrate very
        easily. These are the <em>piecewise constant functions</em>, and they will serve
        as building blocks for defining the more general Riemann integral.
      </p>

      <h2>Constant Functions</h2>

      <Definition id="11.2.1" title="Constant functions">
        <p>
          Let <Math>X</Math> be a subset of <Math>\mathbb{'{R}'}</Math>, and let{' '}
          <Math>f: X \to \mathbb{'{R}'}</Math> be a function.
        </p>
        <p className="mt-2">
          We say that <Math>f</Math> is <strong>constant</strong> iff there exists a real
          number <Math>c</Math> such that <Math>f(x) = c</Math> for all <Math>{String.raw`x \in X`}</Math>.
        </p>
        <p className="mt-2">
          If <Math>E</Math> is a subset of <Math>X</Math>, we say that <Math>f</Math> is{' '}
          <strong>constant on</strong> <Math>E</Math> if the restriction{' '}
          <Math>{String.raw`f|_E`}</Math> of <Math>f</Math> to <Math>E</Math> is constant,
          i.e., there exists a real number <Math>c</Math> such that <Math>f(x) = c</Math> for
          all <Math>{String.raw`x \in E`}</Math>. We call <Math>c</Math> the{' '}
          <strong>constant value</strong> of <Math>f</Math> on <Math>E</Math>.
        </p>
      </Definition>

      <Callout type="note">
        <p>
          If <Math>E</Math> is a non-empty set, then a function <Math>f</Math> which is
          constant on <Math>E</Math> can have only one constant value; it is not possible
          for a function to always equal 3 on <Math>E</Math> while simultaneously always
          equalling 4.
        </p>
        <p className="mt-2">
          However, if <Math>E</Math> is empty, every real number <Math>c</Math> is a
          constant value for <Math>f</Math> on <Math>E</Math> (vacuously true).
        </p>
      </Callout>

      <h2>Piecewise Constant Functions</h2>

      <Definition id="11.2.3" title="Piecewise constant functions (with respect to a partition)">
        <p>
          Let <Math>I</Math> be a bounded interval, let <Math>f: I \to \mathbb{'{R}'}</Math> be
          a function, and let <Math>\mathbf{'{P}'}</Math> be a partition of <Math>I</Math>.
        </p>
        <p className="mt-2">
          We say that <Math>f</Math> is <strong>piecewise constant with respect to</strong>{' '}
          <Math>\mathbf{'{P}'}</Math> if for every <Math>{String.raw`J \in \mathbf{P}`}</Math>,{' '}
          <Math>f</Math> is constant on <Math>J</Math>.
        </p>
      </Definition>

      <Example id="11.2.4" title="A piecewise constant function">
        <p>
          The function <Math>f: [1, 6] \to \mathbb{'{R}'}</Math> defined by:
        </p>
        <MathBlock>{String.raw`f(x) = \begin{cases} 7 & \text{if } 1 \leq x < 3 \\ 4 & \text{if } x = 3 \\ 5 & \text{if } 3 < x < 6 \\ 2 & \text{if } x = 6 \end{cases}`}</MathBlock>
        <p className="mt-2">
          is piecewise constant with respect to the partition{' '}
          <Math>{String.raw`\{[1, 3), \{3\}, (3, 6), \{6\}\}`}</Math> of <Math>[1, 6]</Math>.
        </p>
        <p className="mt-2">
          Note that it is also piecewise constant with respect to other partitions, such as{' '}
          <Math>{String.raw`\{[1, 2), \{2\}, (2, 3), \{3\}, (3, 5), [5, 6), \{6\}, \emptyset\}`}</Math>.
        </p>
      </Example>

      <Definition id="11.2.5" title="Piecewise constant functions (general)">
        <p>
          Let <Math>I</Math> be a bounded interval, and let <Math>f: I \to \mathbb{'{R}'}</Math> be
          a function. We say that <Math>f</Math> is <strong>piecewise constant on</strong>{' '}
          <Math>I</Math> if there exists a partition <Math>\mathbf{'{P}'}</Math> of <Math>I</Math> such
          that <Math>f</Math> is piecewise constant with respect to <Math>\mathbf{'{P}'}</Math>.
        </p>
      </Definition>

      <Callout type="info">
        <p>
          Every constant function on a bounded interval <Math>I</Math> is automatically
          piecewise constant (using the trivial partition <Math>{String.raw`\{I\}`}</Math>).
        </p>
      </Callout>

      <Theorem id="11.2.7" title="Lemma: Finer partitions preserve piecewise constancy">
        <p>
          Let <Math>I</Math> be a bounded interval, let <Math>\mathbf{'{P}'}</Math> be a partition
          of <Math>I</Math>, and let <Math>f: I \to \mathbb{'{R}'}</Math> be a function which is
          piecewise constant with respect to <Math>\mathbf{'{P}'}</Math>.
        </p>
        <p className="mt-2">
          Let <Math>\mathbf{'{P}'}'</Math> be a partition of <Math>I</Math> which is finer
          than <Math>\mathbf{'{P}'}</Math>. Then <Math>f</Math> is also piecewise constant with
          respect to <Math>\mathbf{'{P}'}'</Math>.
        </p>
        <div className="proof">
          <p>
            For any <Math>{String.raw`J \in \mathbf{P}'`}</Math>, there exists{' '}
            <Math>{String.raw`K \in \mathbf{P}`}</Math> with <Math>{String.raw`J \subseteq K`}</Math>.
            Since <Math>f</Math> is constant on <Math>K</Math>, it is also constant on the
            subset <Math>J</Math>.
          </p>
        </div>
      </Theorem>

      <Theorem id="11.2.8" title="Lemma: Algebraic closure of piecewise constant functions">
        <p>
          Let <Math>I</Math> be a bounded interval, and let <Math>f: I \to \mathbb{'{R}'}</Math> and{' '}
          <Math>g: I \to \mathbb{'{R}'}</Math> be piecewise constant functions on <Math>I</Math>.
          Then the following functions are also piecewise constant on <Math>I</Math>:
        </p>
        <ul className="list-disc list-inside mt-2 space-y-1">
          <li><Math>f + g</Math></li>
          <li><Math>f - g</Math></li>
          <li><Math>{String.raw`\max(f, g)`}</Math> defined by <Math>{String.raw`\max(f,g)(x) := \max(f(x), g(x))`}</Math></li>
          <li><Math>fg</Math> (the pointwise product)</li>
          <li><Math>f/g</Math> (if <Math>{String.raw`g(x) \neq 0`}</Math> for all <Math>{String.raw`x \in I`}</Math>)</li>
        </ul>
        <div className="proof">
          <p>
            Let <Math>\mathbf{'{P}'}</Math> and <Math>\mathbf{'{P}'}'</Math> be partitions with
            respect to which <Math>f</Math> and <Math>g</Math> are piecewise constant.
            By Lemma 11.1.18, <Math>{String.raw`\mathbf{P} \# \mathbf{P}'`}</Math> is a partition
            finer than both. By Lemma 11.2.7, both <Math>f</Math> and <Math>g</Math> are
            piecewise constant with respect to <Math>{String.raw`\mathbf{P} \# \mathbf{P}'`}</Math>.
          </p>
          <p className="mt-2">
            On each interval <Math>J</Math> in this common refinement, both <Math>f</Math> and{' '}
            <Math>g</Math> are constant, so <Math>f + g</Math>, <Math>f - g</Math>,{' '}
            <Math>{String.raw`\max(f,g)`}</Math>, <Math>fg</Math>, and <Math>f/g</Math> are also constant on <Math>J</Math>.
          </p>
        </div>
      </Theorem>

      <h2>Integration of Piecewise Constant Functions</h2>

      <p>
        We are now ready to integrate piecewise constant functions. We begin with a
        definition relative to a specific partition.
      </p>

      <Definition id="11.2.9" title="Piecewise constant integral (with respect to a partition)">
        <p>
          Let <Math>I</Math> be a bounded interval, let <Math>\mathbf{'{P}'}</Math> be a partition
          of <Math>I</Math>. Let <Math>f: I \to \mathbb{'{R}'}</Math> be a function which is
          piecewise constant with respect to <Math>\mathbf{'{P}'}</Math>.
        </p>
        <p className="mt-2">
          We define the <strong>piecewise constant integral</strong>{' '}
          <Math>{String.raw`\text{p.c.} \int_{[\mathbf{P}]} f`}</Math> of <Math>f</Math> with respect
          to <Math>\mathbf{'{P}'}</Math> by:
        </p>
        <MathBlock>{String.raw`\text{p.c.} \int_{[\mathbf{P}]} f := \sum_{J \in \mathbf{P}} c_J |J|`}</MathBlock>
        <p className="mt-2">
          where for each <Math>{String.raw`J \in \mathbf{P}`}</Math>, we let <Math>c_J</Math> be
          the constant value of <Math>f</Math> on <Math>J</Math>.
        </p>
      </Definition>

      <Callout type="note">
        <p>
          If <Math>J</Math> is empty, then every number <Math>c_J</Math> can be the constant
          value of <Math>f</Math> on <Math>J</Math>, but fortunately <Math>|J| = 0</Math> in
          such cases, so the choice of <Math>c_J</Math> is irrelevant.
        </p>
        <p className="mt-2">
          The integral corresponds intuitively to area: the area of a rectangle is the
          product of the lengths of its sides. If <Math>f</Math> is negative somewhere, the
          "area" <Math>c_J|J|</Math> would also be negative.
        </p>
      </Callout>

      <Example id="11.2.12" title="Computing a piecewise constant integral">
        <p>
          Let <Math>f: [1, 4] \to \mathbb{'{R}'}</Math> be defined by:
        </p>
        <MathBlock>{String.raw`f(x) = \begin{cases} 2 & \text{if } 1 \leq x < 3 \\ 4 & \text{if } x = 3 \\ 6 & \text{if } 3 < x \leq 4 \end{cases}`}</MathBlock>
        <p className="mt-2">
          Let <Math>{String.raw`\mathbf{P} := \{[1, 3), \{3\}, (3, 4]\}`}</Math>. Then:
        </p>
        <MathBlock>{String.raw`\text{p.c.} \int_{[\mathbf{P}]} f = c_{[1,3)}|[1,3)| + c_{\{3\}}|\{3\}| + c_{(3,4]}|(3,4]|`}</MathBlock>
        <MathBlock>{String.raw`= 2 \times 2 + 4 \times 0 + 6 \times 1 = 10`}</MathBlock>
        <p className="mt-2">
          Alternatively, using <Math>{String.raw`\mathbf{P}' := \{[1, 2), [2, 3), \{3\}, (3, 4], \emptyset\}`}</Math>:
        </p>
        <MathBlock>{String.raw`\text{p.c.} \int_{[\mathbf{P}']} f = 2 \times 1 + 2 \times 1 + 4 \times 0 + 6 \times 1 + c_\emptyset \times 0 = 10`}</MathBlock>
        <p className="mt-2">
          The integral gives the same value regardless of which partition we use!
        </p>
      </Example>

      <Theorem id="11.2.13" title="Proposition: Piecewise constant integral is independent of partition">
        <p>
          Let <Math>I</Math> be a bounded interval, and let <Math>f: I \to \mathbb{'{R}'}</Math> be
          a function. Suppose that <Math>\mathbf{'{P}'}</Math> and <Math>\mathbf{'{P}'}'</Math> are
          partitions of <Math>I</Math> such that <Math>f</Math> is piecewise constant with
          respect to both. Then:
        </p>
        <MathBlock>{String.raw`\text{p.c.} \int_{[\mathbf{P}]} f = \text{p.c.} \int_{[\mathbf{P}']} f`}</MathBlock>
        <div className="proof">
          <p>
            Consider the common refinement <Math>{String.raw`\mathbf{P} \# \mathbf{P}'`}</Math>.
            Using Theorem 11.1.13 (finite additivity of length), one can show that both
            integrals equal <Math>{String.raw`\text{p.c.} \int_{[\mathbf{P} \# \mathbf{P}']} f`}</Math>.
          </p>
        </div>
      </Theorem>

      <p>
        Because of this proposition, we can define the integral without reference to a
        specific partition:
      </p>

      <Definition id="11.2.14" title="Piecewise constant integral (general)">
        <p>
          Let <Math>I</Math> be a bounded interval, and let <Math>f: I \to \mathbb{'{R}'}</Math> be
          a piecewise constant function on <Math>I</Math>. We define the{' '}
          <strong>piecewise constant integral</strong> <Math>{String.raw`\text{p.c.} \int_I f`}</Math> by:
        </p>
        <MathBlock>{String.raw`\text{p.c.} \int_I f := \text{p.c.} \int_{[\mathbf{P}]} f`}</MathBlock>
        <p className="mt-2">
          where <Math>\mathbf{'{P}'}</Math> is any partition of <Math>I</Math> with respect to
          which <Math>f</Math> is piecewise constant. (Proposition 11.2.13 ensures this is
          well-defined.)
        </p>
      </Definition>

      <h2>Laws of Piecewise Constant Integration</h2>

      <Theorem id="11.2.16" title="Laws of integration for piecewise constant functions">
        <p>
          Let <Math>I</Math> be a bounded interval, and let <Math>f: I \to \mathbb{'{R}'}</Math> and{' '}
          <Math>g: I \to \mathbb{'{R}'}</Math> be piecewise constant functions on <Math>I</Math>.
        </p>
        <ol className="list-alpha list-inside mt-2 space-y-2">
          <li>
            <strong>Linearity:</strong> <Math>{String.raw`\text{p.c.} \int_I (f + g) = \text{p.c.} \int_I f + \text{p.c.} \int_I g`}</Math>
          </li>
          <li>
            <strong>Scalar multiplication:</strong> For any <Math>c \in \mathbb{'{R}'}</Math>,{' '}
            <Math>{String.raw`\text{p.c.} \int_I (cf) = c \cdot \text{p.c.} \int_I f`}</Math>
          </li>
          <li>
            <strong>Difference:</strong> <Math>{String.raw`\text{p.c.} \int_I (f - g) = \text{p.c.} \int_I f - \text{p.c.} \int_I g`}</Math>
          </li>
          <li>
            <strong>Non-negativity:</strong> If <Math>{String.raw`f(x) \geq 0`}</Math> for all{' '}
            <Math>{String.raw`x \in I`}</Math>, then <Math>{String.raw`\text{p.c.} \int_I f \geq 0`}</Math>
          </li>
          <li>
            <strong>Monotonicity:</strong> If <Math>{String.raw`f(x) \geq g(x)`}</Math> for all{' '}
            <Math>{String.raw`x \in I`}</Math>, then <Math>{String.raw`\text{p.c.} \int_I f \geq \text{p.c.} \int_I g`}</Math>
          </li>
          <li>
            <strong>Constant functions:</strong> If <Math>f(x) = c</Math> for all{' '}
            <Math>{String.raw`x \in I`}</Math>, then <Math>{String.raw`\text{p.c.} \int_I f = c|I|`}</Math>
          </li>
          <li>
            <strong>Extension by zero:</strong> Let <Math>{String.raw`J \supseteq I`}</Math> be a
            bounded interval, and let <Math>F: J \to \mathbb{'{R}'}</Math> be defined by{' '}
            <Math>F(x) = f(x)</Math> if <Math>{String.raw`x \in I`}</Math> and <Math>F(x) = 0</Math> otherwise.
            Then <Math>F</Math> is piecewise constant on <Math>J</Math> and{' '}
            <Math>{String.raw`\text{p.c.} \int_J F = \text{p.c.} \int_I f`}</Math>
          </li>
          <li>
            <strong>Additivity over partitions:</strong> If <Math>{String.raw`\{J, K\}`}</Math> is a
            partition of <Math>I</Math> into two intervals, then{' '}
            <Math>{String.raw`\text{p.c.} \int_I f = \text{p.c.} \int_J f|_J + \text{p.c.} \int_K f|_K`}</Math>
          </li>
        </ol>
      </Theorem>

      <Callout type="info">
        <p>
          These laws will be superseded by the corresponding laws for the Riemann integral
          (Theorem 11.4.1). The piecewise constant integral serves as a stepping stone to
          the more general theory.
        </p>
      </Callout>

      <Callout type="note">
        <p>
          <strong>Looking ahead:</strong> We have now established integration for piecewise
          constant functions. In the next section, we will use these functions to define
          upper and lower Riemann integrals for more general bounded functions, by
          approximating them with piecewise constant majorants and minorants.
        </p>
      </Callout>
    </LessonLayout>
  );
}
