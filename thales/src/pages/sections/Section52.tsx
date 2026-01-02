import { LessonLayout } from '../../components/layout/LessonLayout';
import { Callout } from '../../components/common/Callout';
import { Card, CardGrid, CardHeader } from '../../components/common/Card';
import { InlineMath, MathBlock } from '../../components/common/MathBlock';
import { SectionQuiz } from '../../components/quiz';
import { section52Questions } from '../../data/quizzes';

export default function Section52() {
  return (
    <LessonLayout sectionId={52}>
      <h2 className="text-2xl font-semibold mb-4">Lambda Calculus</h2>

      <p className="text-dark-200 mb-6 text-lg leading-relaxed">
        The <strong>Lambda Calculus</strong> of <strong>Alonzo Church</strong>{' '}
        represents an attempt to understand mathematical entities as{' '}
        <em>functions</em>. In the <strong>untyped</strong> version, functions
        can even be applied to themselves! In 1937, Church and Turing showed
        independently that every calculable numerical function can be expressed
        in terms of the lambda calculus.
      </p>

      {/* Basic Idea */}
      <h3 className="text-xl font-semibold mt-8 mb-4">The Basic Idea</h3>

      <p className="text-dark-200 mb-4">
        We write <InlineMath>{`f{\\cdot}a`}</InlineMath> for the value of{' '}
        <InlineMath>{`f`}</InlineMath> at <InlineMath>{`a`}</InlineMath> (read
        "f of a"). If <InlineMath>{`\\phi(x) = x^3 + x + 1`}</InlineMath>, we
        introduce a function <InlineMath>{`g`}</InlineMath> such that{' '}
        <InlineMath>{`g{\\cdot}x = \\phi(x)`}</InlineMath>. We write:
      </p>

      <MathBlock>{`g = \\lambda_x(x^3 + x + 1)`}</MathBlock>

      <p className="text-dark-200 mb-4 mt-4">
        where <InlineMath>{`\\lambda_x`}</InlineMath> is the{' '}
        <strong>abstraction operator</strong>. It distinguishes between the
        expression <InlineMath>{`\\phi(x)`}</InlineMath> and the function{' '}
        <InlineMath>{`\\lambda_x\\phi(x)`}</InlineMath> which sends{' '}
        <InlineMath>{`x`}</InlineMath> to <InlineMath>{`\\phi(x)`}</InlineMath>.
      </p>

      <Card className="mb-6">
        <CardHeader>Example</CardHeader>
        <div className="text-dark-300 text-sm">
          <MathBlock>{`\\lambda_x(x^3 + x + 1){\\cdot}2 = 2^3 + 2 + 1 = 11`}</MathBlock>
          <MathBlock>{`\\lambda_x(x^3 + x + 1){\\cdot}y = y^3 + y + 1`}</MathBlock>
        </div>
      </Card>

      {/* Terms of Lambda Calculus */}
      <h3 className="text-xl font-semibold mt-8 mb-4">Terms of Lambda Calculus</h3>

      <Callout type="definition" title="Lambda Terms">
        <p>
          Assuming countably many variables{' '}
          <InlineMath>{`x_1, x_2, \\ldots`}</InlineMath>, we define{' '}
          <strong>terms</strong> inductively:
        </p>
        <ol className="list-decimal list-inside mt-2 space-y-1 text-sm">
          <li>Each variable is a term</li>
          <li>
            If <InlineMath>{`\\phi`}</InlineMath> and{' '}
            <InlineMath>{`\\psi`}</InlineMath> are terms, so is{' '}
            <InlineMath>{`(\\phi{\\cdot}\\psi)`}</InlineMath> (application)
          </li>
          <li>
            If <InlineMath>{`\\phi`}</InlineMath> is a term and{' '}
            <InlineMath>{`x`}</InlineMath> is a variable, then{' '}
            <InlineMath>{`(\\lambda_x\\phi)`}</InlineMath> is a term
            (abstraction)
          </li>
        </ol>
      </Callout>

      {/* Free and Bound Variables */}
      <h3 className="text-xl font-semibold mt-8 mb-4">Free and Bound Variables</h3>

      <p className="text-dark-200 mb-4">
        A variable <InlineMath>{`x`}</InlineMath> occurring in a term can be{' '}
        <strong>free</strong> or <strong>bound</strong>:
      </p>

      <Card className="mb-6">
        <div className="text-dark-300 text-sm space-y-2">
          <p>
            • <InlineMath>{`x`}</InlineMath> occurs <strong>freely</strong> in
            the term <InlineMath>{`x`}</InlineMath>
          </p>
          <p>
            • If <InlineMath>{`x`}</InlineMath> occurs freely in{' '}
            <InlineMath>{`\\phi`}</InlineMath> or{' '}
            <InlineMath>{`\\psi`}</InlineMath>, it occurs freely in{' '}
            <InlineMath>{`\\phi{\\cdot}\\psi`}</InlineMath>
          </p>
          <p>
            • In <InlineMath>{`\\lambda_x\\phi`}</InlineMath>, the variable{' '}
            <InlineMath>{`x`}</InlineMath> is <strong>bound</strong> to{' '}
            <InlineMath>{`\\lambda_x`}</InlineMath> and does not occur freely
          </p>
        </div>
      </Card>

      {/* The Three Rules */}
      <h3 className="text-xl font-semibold mt-8 mb-4">The Three Rules</h3>

      <p className="text-dark-200 mb-4">
        In addition to the usual properties of equality, we postulate:
      </p>

      <CardGrid columns={1}>
        <Card>
          <CardHeader>R1: Beta Reduction</CardHeader>
          <MathBlock>{`(\\lambda_x\\phi(x)){\\cdot}a = \\phi(a)`}</MathBlock>
          <p className="text-dark-300 text-sm mt-2">
            (if we are allowed to substitute <InlineMath>{`a`}</InlineMath> for{' '}
            <InlineMath>{`x`}</InlineMath> in{' '}
            <InlineMath>{`\\phi(x)`}</InlineMath>)
          </p>
        </Card>
        <Card>
          <CardHeader>R2: Eta Conversion</CardHeader>
          <MathBlock>{`\\lambda_x(\\phi{\\cdot}x) = \\phi`}</MathBlock>
          <p className="text-dark-300 text-sm mt-2">
            (if <InlineMath>{`x`}</InlineMath> is not free in{' '}
            <InlineMath>{`\\phi`}</InlineMath>)
          </p>
        </Card>
        <Card>
          <CardHeader>R3: Alpha Conversion</CardHeader>
          <MathBlock>{`\\lambda_x\\phi(x) = \\lambda_y\\phi(y)`}</MathBlock>
          <p className="text-dark-300 text-sm mt-2">
            (renaming bound variables)
          </p>
        </Card>
      </CardGrid>

      {/* Church Numerals */}
      <h3 className="text-xl font-semibold mt-8 mb-4">Church Numerals</h3>

      <p className="text-dark-200 mb-4">
        Church had the brilliant idea that a number{' '}
        <InlineMath>{`n`}</InlineMath> should be defined as the{' '}
        <strong>process of iteration</strong> — the function that assigns{' '}
        <InlineMath>{`f^n`}</InlineMath> to <InlineMath>{`f`}</InlineMath>:
      </p>

      <MathBlock>{`n = \\lambda_f(f^n)`}</MathBlock>

      <p className="text-dark-200 mb-4 mt-4">
        where <InlineMath>{`f^n = f \\circ f \\circ \\cdots \\circ f`}</InlineMath>{' '}
        (<InlineMath>{`n`}</InlineMath> times).
      </p>

      <CardGrid columns={2}>
        <Card>
          <CardHeader>Zero</CardHeader>
          <MathBlock>{`0 = \\lambda_f(\\lambda_x x)`}</MathBlock>
          <p className="text-dark-300 text-sm mt-2">
            (the identity function <InlineMath>{`f^0 = I`}</InlineMath>)
          </p>
        </Card>
        <Card>
          <CardHeader>One</CardHeader>
          <MathBlock>{`1 = \\lambda_f f`}</MathBlock>
          <p className="text-dark-300 text-sm mt-2">
            (since <InlineMath>{`f^1 = f`}</InlineMath>)
          </p>
        </Card>
        <Card>
          <CardHeader>Two</CardHeader>
          <MathBlock>{`2 = \\lambda_f(\\lambda_x(f{\\cdot}(f{\\cdot}x)))`}</MathBlock>
          <p className="text-dark-300 text-sm mt-2">
            (apply <InlineMath>{`f`}</InlineMath> twice)
          </p>
        </Card>
        <Card>
          <CardHeader>General n</CardHeader>
          <MathBlock>{`n{\\cdot}f = f^n`}</MathBlock>
          <p className="text-dark-300 text-sm mt-2">
            (the <InlineMath>{`n`}</InlineMath>-th iterate)
          </p>
        </Card>
      </CardGrid>

      {/* Arithmetic */}
      <h3 className="text-xl font-semibold mt-8 mb-4">Arithmetic in Lambda Calculus</h3>

      <p className="text-dark-200 mb-4">
        Substituting <InlineMath>{`m`}</InlineMath> for{' '}
        <InlineMath>{`f`}</InlineMath> in{' '}
        <InlineMath>{`n{\\cdot}f = f^n`}</InlineMath>, we get{' '}
        <InlineMath>{`n{\\cdot}m = m^n`}</InlineMath>. This defines{' '}
        <strong>exponentiation</strong>!
      </p>

      <Card className="mb-6">
        <CardHeader>Arithmetic Operations</CardHeader>
        <div className="text-dark-300 text-sm space-y-3">
          <div>
            <strong>Exponentiation:</strong>
            <MathBlock>{`m^n = n{\\cdot}m`}</MathBlock>
          </div>
          <div>
            <strong>Multiplication:</strong>
            <MathBlock>{`m \\times n = m \\circ n = \\lambda_x(m{\\cdot}(n{\\cdot}x))`}</MathBlock>
            <p className="text-xs mt-1">
              Since{' '}
              <InlineMath>{`(m \\times n){\\cdot}f = f^{m \\times n} = (f^n)^m = m{\\cdot}(n{\\cdot}f)`}</InlineMath>
            </p>
          </div>
          <div>
            <strong>Addition:</strong>
            <MathBlock>{`m + n = \\lambda_f((m{\\cdot}f) \\circ (n{\\cdot}f))`}</MathBlock>
            <p className="text-xs mt-1">
              Since{' '}
              <InlineMath>{`(m + n){\\cdot}f = f^{m+n} = f^m \\circ f^n`}</InlineMath>
            </p>
          </div>
        </div>
      </Card>

      <p className="text-dark-200 mb-4">
        Since composition of functions is associative, multiplication is
        associative. Commutativity of multiplication must be proved by
        mathematical induction.
      </p>

      {/* Fixpoint Theorem */}
      <h3 className="text-xl font-semibold mt-8 mb-4">The Fixpoint Theorem</h3>

      <Callout type="theorem" title="Theorem 22.1 (Fixpoint Theorem)">
        <p>
          For any term <InlineMath>{`\\phi`}</InlineMath>, there is a term{' '}
          <InlineMath>{`\\alpha`}</InlineMath> such that{' '}
          <InlineMath>{`\\phi{\\cdot}\\alpha = \\alpha`}</InlineMath> can be
          proved.
        </p>
      </Callout>

      <Card className="mb-6 mt-4">
        <CardHeader>Proof</CardHeader>
        <div className="text-dark-300 text-sm">
          <p>
            Let <InlineMath>{`\\beta = \\lambda_x(\\phi{\\cdot}(x{\\cdot}x))`}</InlineMath>{' '}
            and <InlineMath>{`\\alpha = \\beta{\\cdot}\\beta`}</InlineMath>. Then:
          </p>
          <MathBlock>{`\\alpha = \\beta{\\cdot}\\beta = (\\lambda_x(\\phi{\\cdot}(x{\\cdot}x))){\\cdot}\\beta = \\phi{\\cdot}(\\beta{\\cdot}\\beta) = \\phi{\\cdot}\\alpha`}</MathBlock>
        </div>
      </Card>

      <p className="text-dark-200 mb-4">
        This implies it is <strong>not possible</strong> to incorporate a term
        corresponding to logical negation into the lambda calculus (since
        negation has no fixpoint).
      </p>

      {/* Combinators */}
      <h3 className="text-xl font-semibold mt-8 mb-4">Combinators</h3>

      <p className="text-dark-200 mb-4">
        Surprisingly, <strong>Schönfinkel</strong> (1924) showed that
        lambda-abstraction can be eliminated entirely using just three{' '}
        <strong>combinators</strong>:
      </p>

      <CardGrid columns={1}>
        <Card>
          <CardHeader>The Three Basic Combinators</CardHeader>
          <div className="text-dark-300 text-sm space-y-2">
            <div className="flex items-center gap-4">
              <MathBlock>{`I = \\lambda_x x`}</MathBlock>
              <span>(identity: <InlineMath>{`I{\\cdot}x = x`}</InlineMath>)</span>
            </div>
            <div className="flex items-center gap-4">
              <MathBlock>{`K = \\lambda_x\\lambda_y x`}</MathBlock>
              <span>
                (constant:{' '}
                <InlineMath>{`(K{\\cdot}x){\\cdot}y = x`}</InlineMath>)
              </span>
            </div>
            <div className="flex items-center gap-4">
              <MathBlock>{`S = \\lambda_x\\lambda_y\\lambda_z((x{\\cdot}z){\\cdot}(y{\\cdot}z))`}</MathBlock>
              <span>(Schönfinkel operator)</span>
            </div>
          </div>
        </Card>
      </CardGrid>

      <Callout type="theorem" title="Theorem 22.2 (Schönfinkel)" className="mt-4">
        <p>
          Every term of the lambda calculus is provably equal to a{' '}
          <strong>combinator</strong> — an expression built from variables,{' '}
          <InlineMath>{`I`}</InlineMath>, <InlineMath>{`K`}</InlineMath>, and{' '}
          <InlineMath>{`S`}</InlineMath> using only application.
        </p>
      </Callout>

      {/* Church-Turing Thesis */}
      <h3 className="text-xl font-semibold mt-8 mb-4">The Church-Turing Thesis</h3>

      <Callout type="note" title="Equivalence of Computability">
        <p>
          Every numerical function definable in the untyped lambda calculus is
          calculable, and conversely. Thus:
        </p>
        <MathBlock>{`\\text{recursive} = \\text{calculable} = \\lambda\\text{-definable}`}</MathBlock>
        <p className="text-sm mt-2">
          This is strong evidence that these concepts capture the intuitive
          notion of what it means to be "computable."
        </p>
      </Callout>

      {/* Summary */}
      <h3 className="text-xl font-semibold mt-8 mb-4">Summary</h3>

      <div className="bg-dark-800 rounded-lg p-4 mb-6">
        <ul className="text-dark-200 space-y-2">
          <li>
            • <strong>Lambda calculus</strong>: Church's formal system for
            computation via functions
          </li>
          <li>
            • <strong>Terms</strong>: variables, application{' '}
            <InlineMath>{`\\phi{\\cdot}\\psi`}</InlineMath>, abstraction{' '}
            <InlineMath>{`\\lambda_x\\phi`}</InlineMath>
          </li>
          <li>
            • <strong>Three rules</strong>: R1 (β-reduction), R2 (η-conversion),
            R3 (α-conversion)
          </li>
          <li>
            • <strong>Church numerals</strong>:{' '}
            <InlineMath>{`n = \\lambda_f(f^n)`}</InlineMath> (iteration)
          </li>
          <li>
            • <strong>Arithmetic</strong>: exponentiation, multiplication,
            addition all definable
          </li>
          <li>
            • <strong>Fixpoint theorem</strong>: every{' '}
            <InlineMath>{`\\phi`}</InlineMath> has a fixpoint{' '}
            <InlineMath>{`\\alpha`}</InlineMath> with{' '}
            <InlineMath>{`\\phi{\\cdot}\\alpha = \\alpha`}</InlineMath>
          </li>
          <li>
            • <strong>Combinators</strong> <InlineMath>{`I, K, S`}</InlineMath>:
            eliminate need for λ-abstraction (Schönfinkel)
          </li>
          <li>
            • <strong>Church-Turing thesis</strong>: recursive = calculable =
            λ-definable
          </li>
        </ul>
      </div>

      {/* Section Quiz */}
      <SectionQuiz sectionId={52} questions={section52Questions} />
    </LessonLayout>
  );
}
