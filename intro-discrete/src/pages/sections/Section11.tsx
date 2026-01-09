import { LessonLayout } from '@/components/layout/LessonLayout';
import { Definition, Theorem, Example } from '@/components/common/ContentBlocks';
import { InlineMath, MathBlock } from '@/components/common/MathBlock';

export default function Section11() {
  return (
    <LessonLayout sectionId={11}>
      {/* Introduction */}
      <p>
        Propositional logic deals with statements like "it is raining," but mathematics often
        involves statements about variables: "x is positive" or "n is prime." To handle such
        statements precisely, we need <strong>quantifiers</strong>—symbols that express "for all"
        and "there exists."
      </p>

      <h2>Predicates</h2>

      <Definition title="Predicate" className="my-6">
        <p>
          A <strong>predicate</strong> (or <strong>propositional function</strong>) is a statement
          containing one or more variables that becomes a proposition when specific values are
          substituted for the variables.
        </p>
        <p className="mt-2">
          We write <InlineMath>P(x)</InlineMath>, <InlineMath>Q(x, y)</InlineMath>, etc., where the
          variables are listed in parentheses.
        </p>
      </Definition>

      <Example title="Predicates" className="my-6">
        <ul className="space-y-3">
          <li>
            <InlineMath>P(x)</InlineMath>: "x is a prime number"
            <ul className="list-disc list-inside ml-4 mt-1 text-dark-300">
              <li><InlineMath>P(7)</InlineMath> is true</li>
              <li><InlineMath>P(10)</InlineMath> is false</li>
            </ul>
          </li>
          <li>
            <InlineMath>Q(x, y)</InlineMath>: "x divides y"
            <ul className="list-disc list-inside ml-4 mt-1 text-dark-300">
              <li><InlineMath>Q(3, 12)</InlineMath> is true</li>
              <li><InlineMath>Q(5, 12)</InlineMath> is false</li>
            </ul>
          </li>
        </ul>
      </Example>

      <h2>Universal Quantifier</h2>

      <Definition title="Universal Quantifier" className="my-6">
        <p>
          The <strong>universal quantifier</strong> <InlineMath>\forall</InlineMath> (read "for all"
          or "for every") is used to assert that a predicate is true for all elements of some domain.
        </p>
        <MathBlock>{`\\forall x \\, P(x) \\quad \\text{means "for all } x, P(x) \\text{ is true"}`}</MathBlock>
        <p className="mt-2">
          The <strong>domain</strong> (or <strong>universe of discourse</strong>) specifies which
          values <InlineMath>x</InlineMath> can take.
        </p>
      </Definition>

      <Example title="Universal Statements" className="my-6">
        <ul className="space-y-3">
          <li>
            <InlineMath>\forall x \in \mathbb{'{R}'}, \, x^2 \geq 0</InlineMath>
            <p className="text-dark-300 ml-4">"Every real number squared is non-negative." (True)</p>
          </li>
          <li>
            <InlineMath>\forall n \in \mathbb{'{N}'}, \, n^2 \geq n</InlineMath>
            <p className="text-dark-300 ml-4">"Every natural number squared is at least as large as itself." (True)</p>
          </li>
          <li>
            <InlineMath>\forall x \in \mathbb{'{R}'}, \, x^2 = x</InlineMath>
            <p className="text-dark-300 ml-4">"Every real number squared equals itself." (False—counterexample: x = 2)</p>
          </li>
        </ul>
      </Example>

      <h2>Existential Quantifier</h2>

      <Definition title="Existential Quantifier" className="my-6">
        <p>
          The <strong>existential quantifier</strong> <InlineMath>\exists</InlineMath> (read "there
          exists" or "for some") is used to assert that a predicate is true for at least one element.
        </p>
        <MathBlock>{`\\exists x \\, P(x) \\quad \\text{means "there exists an } x \\text{ such that } P(x) \\text{ is true"}`}</MathBlock>
      </Definition>

      <Example title="Existential Statements" className="my-6">
        <ul className="space-y-3">
          <li>
            <InlineMath>\exists x \in \mathbb{'{R}'}, \, x^2 = 2</InlineMath>
            <p className="text-dark-300 ml-4">"There exists a real number whose square is 2." (True: <InlineMath>x = \sqrt{'{2}'}</InlineMath>)</p>
          </li>
          <li>
            <InlineMath>\exists n \in \mathbb{'{N}'}, \, n^2 = n</InlineMath>
            <p className="text-dark-300 ml-4">"There exists a natural number equal to its square." (True: n = 1)</p>
          </li>
          <li>
            <InlineMath>\exists x \in \mathbb{'{R}'}, \, x^2 {'<'} 0</InlineMath>
            <p className="text-dark-300 ml-4">"There exists a real number with negative square." (False)</p>
          </li>
        </ul>
      </Example>

      <Definition title="Unique Existence" className="my-6">
        <p>
          The notation <InlineMath>\exists! x \, P(x)</InlineMath> means "there exists a unique x
          such that P(x)"—exactly one such x exists.
        </p>
        <MathBlock>{`\\exists! x \\, P(x) \\equiv \\exists x \\, P(x) \\land \\forall y \\forall z \\, (P(y) \\land P(z) \\to y = z)`}</MathBlock>
      </Definition>

      <h2>Negating Quantified Statements</h2>

      <Theorem title="Negation of Quantifiers" className="my-6">
        <p>
          The negation of a universal statement is an existential statement, and vice versa:
        </p>
        <MathBlock>{`\\neg(\\forall x \\, P(x)) \\equiv \\exists x \\, \\neg P(x)`}</MathBlock>
        <MathBlock>{`\\neg(\\exists x \\, P(x)) \\equiv \\forall x \\, \\neg P(x)`}</MathBlock>
      </Theorem>

      <Example title="Negating Quantified Statements" className="my-6">
        <p><strong>Statement:</strong> "All cats are black."</p>
        <p className="mt-2"><InlineMath>\forall x \, (\text{'{cat}'}(x) \to \text{'{black}'}(x))</InlineMath></p>
        <p className="mt-3"><strong>Negation:</strong> "There exists a cat that is not black."</p>
        <p><InlineMath>\exists x \, (\text{'{cat}'}(x) \land \neg\text{'{black}'}(x))</InlineMath></p>

        <p className="mt-6"><strong>Statement:</strong> "There is a solution to the equation."</p>
        <p><InlineMath>\exists x \, (f(x) = 0)</InlineMath></p>
        <p className="mt-3"><strong>Negation:</strong> "For all x, x is not a solution."</p>
        <p><InlineMath>\forall x \, (f(x) \neq 0)</InlineMath></p>
      </Example>

      <h2>Multiple Quantifiers</h2>

      <p>
        Statements can involve multiple quantifiers. The order of quantifiers matters!
      </p>

      <Example title="Order of Quantifiers" className="my-6">
        <p>Consider the domain <InlineMath>\mathbb{'{R}'}</InlineMath>:</p>
        <ul className="space-y-4 mt-3">
          <li>
            <InlineMath>\forall x \, \exists y \, (x {'<'} y)</InlineMath>
            <p className="text-dark-300 ml-4">"For every x, there exists a y greater than x." (True)</p>
          </li>
          <li>
            <InlineMath>\exists y \, \forall x \, (x {'<'} y)</InlineMath>
            <p className="text-dark-300 ml-4">"There exists a y greater than every x." (False—no largest real)</p>
          </li>
        </ul>
        <p className="mt-4 text-dark-300">
          In the first, y can depend on x. In the second, the same y must work for all x.
        </p>
      </Example>

      <Theorem title="Negation of Multiple Quantifiers" className="my-6">
        <p>
          To negate a statement with multiple quantifiers, switch each <InlineMath>\forall</InlineMath>{' '}
          to <InlineMath>\exists</InlineMath> and vice versa, then negate the predicate:
        </p>
        <MathBlock>{`\\neg(\\forall x \\, \\exists y \\, P(x,y)) \\equiv \\exists x \\, \\forall y \\, \\neg P(x,y)`}</MathBlock>
      </Theorem>

      <Example title="Negating Multiple Quantifiers" className="my-6">
        <p><strong>Statement:</strong> "Every student passed some exam."</p>
        <p><InlineMath>\forall s \, \exists e \, \text{'{passed}'}(s, e)</InlineMath></p>
        <p className="mt-3"><strong>Negation:</strong> "There is a student who failed all exams."</p>
        <p><InlineMath>\exists s \, \forall e \, \neg\text{'{passed}'}(s, e)</InlineMath></p>
      </Example>

      <h2>Translating to/from English</h2>

      <Example title="Translation Examples" className="my-6">
        <div className="space-y-6">
          <div>
            <p className="font-semibold text-primary-400">English to Symbolic:</p>
            <p>"Every continuous function is integrable."</p>
            <p className="mt-1"><InlineMath>\forall f \, (\text{'{continuous}'}(f) \to \text{'{integrable}'}(f))</InlineMath></p>
          </div>
          <div>
            <p className="font-semibold text-primary-400">English to Symbolic:</p>
            <p>"Some integers are divisible by both 2 and 3."</p>
            <p className="mt-1"><InlineMath>\exists n \in \mathbb{'{Z}'} \, (2 \mid n \land 3 \mid n)</InlineMath></p>
          </div>
          <div>
            <p className="font-semibold text-primary-400">Symbolic to English:</p>
            <p><InlineMath>\forall \varepsilon {'>'} 0 \, \exists \delta {'>'} 0 \, \forall x \, (|x - a| {'<'} \delta \to |f(x) - L| {'<'} \varepsilon)</InlineMath></p>
            <p className="mt-1">"For every positive ε, there exists a positive δ such that for all x, if x is within δ of a, then f(x) is within ε of L."</p>
            <p className="text-dark-400 mt-1">(This is the ε-δ definition of limit!)</p>
          </div>
        </div>
      </Example>

      <h2>Common Patterns</h2>

      <div className="bg-dark-800/50 rounded-xl p-6 my-6 border border-dark-700">
        <h4 className="text-lg font-semibold text-dark-100 mb-4">Mathematical Statement Patterns</h4>
        <div className="space-y-4 text-dark-200">
          <div>
            <p className="font-semibold text-primary-400">"Every A is a B"</p>
            <p><InlineMath>\forall x \, (A(x) \to B(x))</InlineMath></p>
          </div>
          <div>
            <p className="font-semibold text-primary-400">"Some A is a B"</p>
            <p><InlineMath>\exists x \, (A(x) \land B(x))</InlineMath></p>
          </div>
          <div>
            <p className="font-semibold text-primary-400">"No A is a B"</p>
            <p><InlineMath>\forall x \, (A(x) \to \neg B(x))</InlineMath> or <InlineMath>\neg \exists x \, (A(x) \land B(x))</InlineMath></p>
          </div>
          <div>
            <p className="font-semibold text-primary-400">"Only A's are B's"</p>
            <p><InlineMath>\forall x \, (B(x) \to A(x))</InlineMath></p>
          </div>
        </div>
      </div>

      <h2>Key Ideas</h2>

      <div className="bg-gradient-to-br from-primary-500/10 to-dark-800/50 rounded-xl p-6 my-6 border border-primary-500/20">
        <ul className="space-y-3 text-dark-200">
          <li className="flex items-start gap-3">
            <span className="text-primary-400 font-bold">1.</span>
            <span>
              A <strong>predicate</strong> <InlineMath>P(x)</InlineMath> becomes a proposition when
              a value is substituted for <InlineMath>x</InlineMath>.
            </span>
          </li>
          <li className="flex items-start gap-3">
            <span className="text-primary-400 font-bold">2.</span>
            <span>
              <InlineMath>\forall x \, P(x)</InlineMath>: "For all x, P(x)" is true when P holds for
              every element in the domain.
            </span>
          </li>
          <li className="flex items-start gap-3">
            <span className="text-primary-400 font-bold">3.</span>
            <span>
              <InlineMath>\exists x \, P(x)</InlineMath>: "There exists x such that P(x)" is true
              when P holds for at least one element.
            </span>
          </li>
          <li className="flex items-start gap-3">
            <span className="text-primary-400 font-bold">4.</span>
            <span>
              <strong>Negation rules:</strong>{' '}
              <InlineMath>\neg\forall x \, P(x) \equiv \exists x \, \neg P(x)</InlineMath> and{' '}
              <InlineMath>\neg\exists x \, P(x) \equiv \forall x \, \neg P(x)</InlineMath>.
            </span>
          </li>
          <li className="flex items-start gap-3">
            <span className="text-primary-400 font-bold">5.</span>
            <span>
              <strong>Order matters:</strong> <InlineMath>\forall x \, \exists y</InlineMath> (y can
              depend on x) is different from <InlineMath>\exists y \, \forall x</InlineMath> (one y
              works for all x).
            </span>
          </li>
          <li className="flex items-start gap-3">
            <span className="text-primary-400 font-bold">6.</span>
            <span>
              "Every A is B" translates to <InlineMath>\forall x \, (A(x) \to B(x))</InlineMath>.
              "Some A is B" translates to <InlineMath>\exists x \, (A(x) \land B(x))</InlineMath>.
            </span>
          </li>
        </ul>
      </div>
    </LessonLayout>
  );
}
