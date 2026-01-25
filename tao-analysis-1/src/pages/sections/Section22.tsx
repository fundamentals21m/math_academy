import { LessonLayout } from '@/components/layout';
import { Definition, Theorem, Example } from '@/components/common';
import { Callout } from '@/components/common';
import { Math, MathBlock } from '@/components/common';

export default function Section22() {
  return (
    <LessonLayout sectionId={22}>
      {/* Introduction */}
      <section className="mb-12">
        <h2 className="text-2xl font-bold text-amber-400 mb-4">Introduction</h2>
        <p className="text-slate-300 leading-relaxed mb-4">
          There are some sequences which do not converge to any real number, but instead seem
          to be wanting to converge to <Math>{'+\\infty'}</Math> or <Math>{'-\\infty'}</Math>. For
          instance, it seems intuitive that the sequence <Math>{'1, 2, 3, 4, 5, \\ldots'}</Math> should
          be converging to <Math>{'+\\infty'}</Math>, while <Math>{'-1, -2, -3, -4, -5, \\ldots'}</Math> should
          be converging to <Math>{'-\\infty'}</Math>.
        </p>
        <p className="text-slate-300 leading-relaxed mb-4">
          Meanwhile, the sequence <Math>{'1, -1, 1, -1, 1, -1, \\ldots'}</Math> does not seem to
          be converging to anything (although we shall see later that it does
          have <Math>{'+1'}</Math> and <Math>{'-1'}</Math> as "limit points"). Similarly the
          sequence <Math>{'1, -2, 3, -4, 5, -6, \\ldots'}</Math> does not converge to any real
          number, and also does not appear to be converging to <Math>{'+\\infty'}</Math> or
          converging to <Math>{'-\\infty'}</Math>.
        </p>
        <p className="text-slate-300 leading-relaxed">
          To make this precise we need to talk about something called the <em>extended real
          number system</em>.
        </p>
      </section>

      {/* Extended Real Number System */}
      <section className="mb-12">
        <h2 className="text-2xl font-bold text-amber-400 mb-4">The Extended Real Number System</h2>

        <Definition
          id="6.2.1"
          title="Extended real number system"
        >
          <p>
            The <strong>extended real number system</strong> <Math>{'\\mathbf{R}^*'}</Math> is
            the real line <Math>{'\\mathbf{R}'}</Math> with two additional elements attached,
            called <Math>{'+\\infty'}</Math> and <Math>{'-\\infty'}</Math>. These elements
            are distinct from each other and also distinct from every real number.
          </p>
          <p className="mt-2">
            An extended real number <Math>{'x'}</Math> is called <strong>finite</strong> iff
            it is a real number, and <strong>infinite</strong> iff it is equal
            to <Math>{'+\\infty'}</Math> or <Math>{'-\\infty'}</Math>.
          </p>
        </Definition>

        <Callout type="note" className="mt-4">
          <p>
            This definition of finite and infinite is not directly related to the notion of
            finite and infinite sets we studied earlier, though it is of course similar in spirit.
          </p>
        </Callout>

        <p className="text-slate-300 leading-relaxed mt-4 mb-4">
          These new symbols, <Math>{'+\\infty'}</Math> and <Math>{'-\\infty'}</Math>, at
          present do not have much meaning, since we have no operations to manipulate them
          (other than equality <Math>{'='}</Math> and inequality <Math>{'\\neq'}</Math>).
          Now we place a few operations on the extended real number system.
        </p>
      </section>

      {/* Negation */}
      <section className="mb-12">
        <h2 className="text-2xl font-bold text-amber-400 mb-4">Negation of Extended Reals</h2>

        <Definition
          id="6.2.2"
          title="Negation of extended reals"
        >
          <p>
            The operation of negation <Math>{'x \\mapsto -x'}</Math> on <Math>{'\\mathbf{R}'}</Math>,
            we now extend to <Math>{'\\mathbf{R}^*'}</Math> by defining:
          </p>
          <MathBlock>{`-(+\\infty) := -\\infty \\quad \\text{and} \\quad -(-\\infty) := +\\infty`}</MathBlock>
        </Definition>

        <p className="text-slate-300 leading-relaxed mt-4">
          Thus every extended real number <Math>{'x'}</Math> has a negation,
          and <Math>{'-(-x)'}</Math> is always equal to <Math>{'x'}</Math>.
        </p>
      </section>

      {/* Ordering */}
      <section className="mb-12">
        <h2 className="text-2xl font-bold text-amber-400 mb-4">Ordering of Extended Reals</h2>

        <Definition
          id="6.2.3"
          title="Ordering of extended reals"
        >
          <p>
            Let <Math>{'x'}</Math> and <Math>{'y'}</Math> be extended real numbers. We say
            that <Math>{'x \\leq y'}</Math>, i.e., <Math>{'x'}</Math> is less than or equal
            to <Math>{'y'}</Math>, iff one of the following three statements is true:
          </p>
          <ol className="list-alpha pl-6 mt-2 space-y-1">
            <li><Math>{'x'}</Math> and <Math>{'y'}</Math> are real numbers, and <Math>{'x \\leq y'}</Math> as real numbers.</li>
            <li><Math>{'y = +\\infty'}</Math>.</li>
            <li><Math>{'x = -\\infty'}</Math>.</li>
          </ol>
          <p className="mt-2">
            We say that <Math>{'x < y'}</Math> if we have <Math>{'x \\leq y'}</Math> and <Math>{'x \\neq y'}</Math>.
            We sometimes write <Math>{'x < y'}</Math> as <Math>{'y > x'}</Math>,
            and <Math>{'x \\leq y'}</Math> as <Math>{'y \\geq x'}</Math>.
          </p>
        </Definition>

        <Example id="6.2.4" title="Ordering examples">
          <ul className="list-disc pl-6 space-y-1">
            <li><Math>{'3 \\leq 5'}</Math></li>
            <li><Math>{'3 < +\\infty'}</Math></li>
            <li><Math>{'-\\infty < +\\infty'}</Math></li>
            <li><Math>{'3 \\not\\leq -\\infty'}</Math></li>
          </ul>
        </Example>

        <Theorem
          id="6.2.5"
          title="Proposition: Properties of order and negation"
          proof={`Each part follows directly from the definitions. For (a), every extended real satisfies at least one of: being a real (where x ≤ x), being +∞ (satisfying case (b)), or being -∞ (satisfying case (c)). Part (b) follows by checking all cases: if both are real, use trichotomy for reals; if one or both are infinite, the cases are finite. Part (c) is verified by case analysis on which of x, y, z are infinite. Part (d) follows from the definition of negation and order reversal.`}
        >
          <p>
            Let <Math>{'x, y, z'}</Math> be extended real numbers. Then the following
            statements are true:
          </p>
          <ol className="list-alpha pl-6 mt-2 space-y-2">
            <li>
              <strong>(Reflexivity)</strong> We have <Math>{'x \\leq x'}</Math>.
            </li>
            <li>
              <strong>(Trichotomy)</strong> Exactly one of the statements <Math>{'x < y'}</Math>, <Math>{'x = y'}</Math>,
              or <Math>{'x > y'}</Math> is true.
            </li>
            <li>
              <strong>(Transitivity)</strong> If <Math>{'x \\leq y'}</Math> and <Math>{'y \\leq z'}</Math>,
              then <Math>{'x \\leq z'}</Math>.
            </li>
            <li>
              <strong>(Negation reverses order)</strong> If <Math>{'x \\leq y'}</Math>,
              then <Math>{'-y \\leq -x'}</Math>.
            </li>
          </ol>
        </Theorem>

        <Callout type="warning" className="mt-4">
          <p>
            <strong>Arithmetic on extended reals is dangerous!</strong> One could also introduce
            other operations on the extended real number system, such as addition, multiplication, etc.
            However, this is somewhat dangerous as these operations will almost certainly fail to
            obey the familiar rules of algebra.
          </p>
          <p className="mt-2">
            For instance, to define addition it seems reasonable to
            set <Math>{'+\\infty + 5 = +\\infty'}</Math> and <Math>{'+\\infty + 3 = +\\infty'}</Math>,
            but then this implies that <Math>{'+\\infty + 5 = +\\infty + 3'}</Math>,
            while <Math>{'5 \\neq 3'}</Math>. So things like the cancellation law begin to break
            down once we try to operate involving infinity.
          </p>
          <p className="mt-2">
            To avoid these issues we shall simply <strong>not define any arithmetic operations</strong> on
            the extended real number system other than negation and order.
          </p>
        </Callout>
      </section>

      {/* Supremum and Infimum */}
      <section className="mb-12">
        <h2 className="text-2xl font-bold text-amber-400 mb-4">Supremum and Infimum of Extended Reals</h2>

        <p className="text-slate-300 leading-relaxed mb-4">
          Remember that we defined the notion of supremum or least upper bound of a
          set <Math>{'E'}</Math> of reals; this gave an extended real
          number <Math>{'\\sup(E)'}</Math>, which was either finite or infinite. We now
          extend this notion slightly.
        </p>

        <Definition
          id="6.2.6"
          title="Supremum of sets of extended reals"
        >
          <p>
            Let <Math>{'E'}</Math> be a subset of <Math>{'\\mathbf{R}^*'}</Math>. Then we
            define the <strong>supremum</strong> <Math>{'\\sup(E)'}</Math> or <strong>least
            upper bound</strong> of <Math>{'E'}</Math> by the following rule:
          </p>
          <ol className="list-alpha pl-6 mt-2 space-y-2">
            <li>
              If <Math>{'E'}</Math> is contained in <Math>{'\\mathbf{R}'}</Math> (i.e., <Math>{'+\\infty'}</Math> and <Math>{'-\\infty'}</Math> are
              not elements of <Math>{'E'}</Math>), then we let <Math>{'\\sup(E)'}</Math> be
              as defined in Definition 5.5.10.
            </li>
            <li>
              If <Math>{'E'}</Math> contains <Math>{'+\\infty'}</Math>, then we
              set <Math>{'\\sup(E) := +\\infty'}</Math>.
            </li>
            <li>
              If <Math>{'E'}</Math> does not contain <Math>{'+\\infty'}</Math> but does
              contain <Math>{'-\\infty'}</Math>, then we
              set <Math>{'\\sup(E) := \\sup(E \\setminus \\{-\\infty\\})'}</Math> (which is a
              subset of <Math>{'\\mathbf{R}'}</Math> and thus falls under case (a)).
            </li>
          </ol>
          <p className="mt-4">
            We also define the <strong>infimum</strong> <Math>{'\\inf(E)'}</Math> of <Math>{'E'}</Math> (also
            known as the <strong>greatest lower bound</strong> of <Math>{'E'}</Math>) by the formula:
          </p>
          <MathBlock>{`\\inf(E) := -\\sup(-E)`}</MathBlock>
          <p className="mt-2">
            where <Math>{'-E'}</Math> is the set <Math>{'-E := \\{-x : x \\in E\\}'}</Math>.
          </p>
        </Definition>
      </section>

      {/* Examples */}
      <section className="mb-12">
        <h2 className="text-2xl font-bold text-amber-400 mb-4">Examples</h2>

        <Example id="6.2.7" title="Negative integers with -∞">
          <p>
            Let <Math>{'E'}</Math> be the negative integers, together with <Math>{'-\\infty'}</Math>:
          </p>
          <MathBlock>{`E = \\{-1, -2, -3, -4, \\ldots\\} \\cup \\{-\\infty\\}`}</MathBlock>
          <p className="mt-2">
            Then <Math>{'\\sup(E) = \\sup(E \\setminus \\{-\\infty\\}) = -1'}</Math>, while:
          </p>
          <MathBlock>{`\\inf(E) = -\\sup(-E) = -(+\\infty) = -\\infty`}</MathBlock>
        </Example>

        <Example id="6.2.8" title="Decimal approximations to 1">
          <p>
            The set <Math>{'\\{0.9, 0.99, 0.999, 0.9999, \\ldots\\}'}</Math> has
            infimum <Math>{'0.9'}</Math> and supremum <Math>{'1'}</Math>.
          </p>
          <p className="mt-2">
            Note that in this case the supremum does not actually belong to the set, but it is
            in some sense "touching it" from the right.
          </p>
        </Example>

        <Example id="6.2.9" title="Natural numbers">
          <p>
            The set <Math>{'\\{1, 2, 3, 4, 5, \\ldots\\}'}</Math> has
            infimum <Math>{'1'}</Math> and supremum <Math>{'+\\infty'}</Math>.
          </p>
        </Example>

        <Example id="6.2.10" title="Empty set">
          <p>
            Let <Math>{'E'}</Math> be the empty set. Then <Math>{'\\sup(E) = -\\infty'}</Math> and <Math>{'\\inf(E) = +\\infty'}</Math>.
          </p>
          <p className="mt-2">
            This is the only case in which the supremum can be less than the infimum!
          </p>
        </Example>

        <Callout type="info" className="mt-4">
          <p>
            <strong>Piston Intuition:</strong> One can intuitively think of the supremum
            of <Math>{'E'}</Math> as follows. Imagine the real line with <Math>{'+\\infty'}</Math> somehow
            on the far right, and <Math>{'-\\infty'}</Math> on the far left. Imagine a piston
            at <Math>{'+\\infty'}</Math> moving leftward until it is stopped by the presence of
            a set <Math>{'E'}</Math>; the location where it stops is the supremum of <Math>{'E'}</Math>.
          </p>
          <p className="mt-2">
            Similarly if one imagines a piston at <Math>{'-\\infty'}</Math> moving rightward until
            it is stopped by the presence of <Math>{'E'}</Math>, the location where it stops
            is the infimum of <Math>{'E'}</Math>. In the case when <Math>{'E'}</Math> is the
            empty set, the pistons pass through each other, the supremum landing
            at <Math>{'-\\infty'}</Math> and the infimum landing at <Math>{'+\\infty'}</Math>.
          </p>
        </Callout>
      </section>

      {/* Theorem: Least Upper Bound Property */}
      <section className="mb-12">
        <h2 className="text-2xl font-bold text-amber-400 mb-4">Least Upper Bound Characterization</h2>

        <p className="text-slate-300 leading-relaxed mb-4">
          The following theorem justifies the terminology "least upper bound" and
          "greatest lower bound":
        </p>

        <Theorem
          id="6.2.11"
          title="Characterization of supremum and infimum"
          proof={`For (a), if sup(E) = +∞, then +∞ ∈ E and certainly x ≤ +∞ for all x ∈ E. If sup(E) is finite or -∞, then E ⊆ R and the result follows from our earlier definition of supremum for real sets.

For (b), if sup(E) = +∞, then sup(E) ≤ M requires M = +∞. Conversely, if +∞ ∈ E then we need M = +∞. If E ⊆ R, then M is an upper bound iff M ≥ sup(E) by Definition 5.5.10.

Parts (c) and (d) follow by applying (a) and (b) to -E and using the definition inf(E) = -sup(-E).`}
        >
          <p>
            Let <Math>{'E'}</Math> be a subset of <Math>{'\\mathbf{R}^*'}</Math>. Then the
            following statements are true:
          </p>
          <ol className="list-alpha pl-6 mt-2 space-y-2">
            <li>
              For every <Math>{'x \\in E'}</Math>, we have <Math>{'x \\leq \\sup(E)'}</Math>.
            </li>
            <li>
              Suppose <Math>{'M \\in \\mathbf{R}^*'}</Math> is an upper bound for <Math>{'E'}</Math>,
              i.e., <Math>{'x \\leq M'}</Math> for all <Math>{'x \\in E'}</Math>.
              Then <Math>{'\\sup(E) \\leq M'}</Math>.
            </li>
            <li>
              For every <Math>{'x \\in E'}</Math>, we have <Math>{'x \\geq \\inf(E)'}</Math>.
            </li>
            <li>
              Suppose <Math>{'M \\in \\mathbf{R}^*'}</Math> is a lower bound for <Math>{'E'}</Math>,
              i.e., <Math>{'x \\geq M'}</Math> for all <Math>{'x \\in E'}</Math>.
              Then <Math>{'\\inf(E) \\geq M'}</Math>.
            </li>
          </ol>
        </Theorem>

        <p className="text-slate-300 leading-relaxed mt-4">
          In other words, the supremum is an upper bound, and is less than or equal to every
          other upper bound (making it the <em>least</em> upper bound). Similarly, the infimum
          is a lower bound that is greater than or equal to every other lower bound (making it
          the <em>greatest</em> lower bound).
        </p>
      </section>

      {/* Exercises */}
      <section className="mb-12">
        <h2 className="text-2xl font-bold text-amber-400 mb-4">Exercises</h2>

        <div className="space-y-6">
          <div className="bg-slate-800/50 p-4 rounded-lg border border-slate-700">
            <p className="text-amber-400 font-semibold mb-2">Exercise 6.2.1</p>
            <p className="text-slate-300">
              Prove Proposition 6.2.5. (Hint: treat each case separately depending on which
              of the extended reals are finite or infinite.)
            </p>
          </div>

          <div className="bg-slate-800/50 p-4 rounded-lg border border-slate-700">
            <p className="text-amber-400 font-semibold mb-2">Exercise 6.2.2</p>
            <p className="text-slate-300">
              Let <Math>{'E'}</Math> be a non-empty subset of <Math>{'\\mathbf{R}^*'}</Math>.
              Show that <Math>{'\\inf(E) \\leq \\sup(E)'}</Math>.
            </p>
          </div>

          <div className="bg-slate-800/50 p-4 rounded-lg border border-slate-700">
            <p className="text-amber-400 font-semibold mb-2">Exercise 6.2.3</p>
            <p className="text-slate-300">
              Let <Math>{'E'}</Math> and <Math>{'F'}</Math> be subsets of <Math>{'\\mathbf{R}^*'}</Math> with <Math>{'E \\subseteq F'}</Math>.
              Show that <Math>{'\\sup(E) \\leq \\sup(F)'}</Math> and <Math>{'\\inf(E) \\geq \\inf(F)'}</Math>.
            </p>
          </div>

          <div className="bg-slate-800/50 p-4 rounded-lg border border-slate-700">
            <p className="text-amber-400 font-semibold mb-2">Exercise 6.2.4</p>
            <p className="text-slate-300">
              Verify Example 6.2.10: show that if <Math>{'E'}</Math> is empty,
              then <Math>{'\\sup(E) = -\\infty'}</Math> and <Math>{'\\inf(E) = +\\infty'}</Math>.
            </p>
          </div>
        </div>
      </section>

      {/* Key Takeaways */}
      <section className="mb-12">
        <h2 className="text-2xl font-bold text-amber-400 mb-4">Key Takeaways</h2>
        <ul className="list-disc pl-6 space-y-2 text-slate-300">
          <li>
            The <strong>extended real number system</strong> <Math>{'\\mathbf{R}^*'}</Math> adds
            two elements <Math>{'+\\infty'}</Math> and <Math>{'-\\infty'}</Math> to <Math>{'\\mathbf{R}'}</Math>.
          </li>
          <li>
            Negation extends naturally: <Math>{'-(+\\infty) = -\\infty'}</Math> and <Math>{'-(-\\infty) = +\\infty'}</Math>.
          </li>
          <li>
            Order extends naturally: <Math>{'-\\infty < x < +\\infty'}</Math> for all real <Math>{'x'}</Math>.
          </li>
          <li>
            <strong>Arithmetic is dangerous</strong> with infinities—cancellation laws fail!
          </li>
          <li>
            Supremum and infimum extend to subsets of <Math>{'\\mathbf{R}^*'}</Math>, with the
            empty set being the only case where <Math>{'\\sup(E) < \\inf(E)'}</Math>.
          </li>
          <li>
            The "piston" intuition: sup is where a piston from <Math>{'+\\infty'}</Math> stops;
            inf is where a piston from <Math>{'-\\infty'}</Math> stops.
          </li>
        </ul>
      </section>

      {/* Looking Ahead */}
      <section className="mb-12">
        <h2 className="text-2xl font-bold text-amber-400 mb-4">Looking Ahead</h2>
        <p className="text-slate-300 leading-relaxed">
          With the extended real number system in place, we can now make precise what it means
          for a sequence to "converge to infinity." In the next section, we will use these
          extended reals to define suprema and infima of sequences, leading to the important
          concepts of limit superior (limsup) and limit inferior (liminf). These tools will
          be essential for understanding the behavior of sequences that don't converge in the
          usual sense but still have well-defined asymptotic behavior.
        </p>
      </section>
    </LessonLayout>
  );
}
