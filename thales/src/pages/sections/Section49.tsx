import { LessonLayout } from '../../components/layout/LessonLayout';
import { Callout } from '../../components/common/Callout';
import { Card, CardGrid, CardHeader } from '../../components/common/Card';
import { InlineMath, MathBlock } from '../../components/common/MathBlock';
import { SectionQuiz } from '../../components/quiz';
import { section49Questions } from '../../data/quizzes';

export default function Section49() {
  return (
    <LessonLayout sectionId={49}>
      <h2 className="text-2xl font-semibold mb-4">What Is a Calculation?</h2>

      <p className="text-dark-200 mb-6 text-lg leading-relaxed">
        At the second International Congress of Mathematicians (Paris, 1900),{' '}
        <strong>David Hilbert</strong> (1862–1943) presented a famous list of
        23 problems. Three of these concern the foundations of mathematics and
        required first answering: <em>What exactly is an "effective method" or
        algorithm?</em>
      </p>

      {/* Hilbert's Problems */}
      <h3 className="text-xl font-semibold mt-8 mb-4">Hilbert's Foundational Problems</h3>

      <CardGrid columns={1}>
        <Card>
          <CardHeader>Problem 1: Continuum Hypothesis</CardHeader>
          <p className="text-dark-300 text-sm">
            Prove or disprove that there is no cardinality between{' '}
            <InlineMath>{`\\aleph_0`}</InlineMath> and{' '}
            <InlineMath>{`2^{\\aleph_0}`}</InlineMath>.
          </p>
          <p className="text-dark-400 text-xs mt-1">
            Gödel (1938): Cannot be proved. Cohen (1964): Cannot be disproved!
          </p>
        </Card>
        <Card>
          <CardHeader>Problem 2: Consistency of Arithmetic</CardHeader>
          <p className="text-dark-300 text-sm">
            Show that arithmetic, as an axiomatic system, is consistent
            (cannot prove 0 = 1).
          </p>
          <p className="text-dark-400 text-xs mt-1">
            Gödel (1931): Cannot be proved within the system itself.
          </p>
        </Card>
        <Card>
          <CardHeader>Problem 10: Solvability of Diophantine Equations</CardHeader>
          <p className="text-dark-300 text-sm">
            Find an algorithm for deciding whether a polynomial Diophantine
            equation has integer solutions.
          </p>
          <p className="text-dark-400 text-xs mt-1">
            Matijasevič (1970): No such algorithm exists!
          </p>
        </Card>
      </CardGrid>

      {/* Etymology */}
      <h3 className="text-xl font-semibold mt-8 mb-4">What Is a Calculation?</h3>

      <p className="text-dark-200 mb-4">
        The word <strong>calculation</strong> comes from the Latin{' '}
        <em>calculus</em> meaning "pebble." The ancients performed calculations
        by moving pebbles between grooves on a table called an <strong>abacus</strong>.
      </p>

      <p className="text-dark-200 mb-4">
        The first rigorous answers to "what is a calculation?" were given by{' '}
        <strong>Alan Turing</strong> and <strong>Emil L. Post</strong>,
        independently in <strong>1936</strong>. Turing invented a theoretical
        machine (the <strong>Turing machine</strong>) that is the ancestor of
        all modern computers.
      </p>

      {/* Primitive Recursive Functions */}
      <h3 className="text-xl font-semibold mt-8 mb-4">Primitive Recursive Functions</h3>

      <p className="text-dark-200 mb-4">
        A <strong>numerical function</strong> is any function{' '}
        <InlineMath>{`f : \\mathbb{N}^n \\to \\mathbb{N}`}</InlineMath>. The
        simplest are:
      </p>

      <CardGrid columns={2}>
        <Card>
          <CardHeader>Identity</CardHeader>
          <MathBlock>{`f(x) = x`}</MathBlock>
        </Card>
        <Card>
          <CardHeader>Successor</CardHeader>
          <MathBlock>{`f(x) = Sx = x + 1`}</MathBlock>
        </Card>
      </CardGrid>

      <p className="text-dark-200 mb-4 mt-4">
        The set of calculable functions is closed under these schemes:
      </p>

      <Card className="mb-6">
        <CardHeader>Schemes for Building Functions</CardHeader>
        <div className="text-dark-300 text-sm space-y-2">
          <p><strong>1. Substitution:</strong> If{' '}
            <InlineMath>{`g`}</InlineMath> and <InlineMath>{`f`}</InlineMath> are
            calculable, so is <InlineMath>{`h(\\bar{x}, \\bar{y}, \\bar{z}) = f(\\bar{x}, g(\\bar{y}), \\bar{z})`}</InlineMath></p>
          <p><strong>2. Interchange:</strong> If{' '}
            <InlineMath>{`f(u, x, y, v)`}</InlineMath> is calculable, so is{' '}
            <InlineMath>{`g(u, x, y, v) = f(u, y, x, v)`}</InlineMath></p>
          <p><strong>3. Contraction:</strong> If{' '}
            <InlineMath>{`f(u, x, y, v)`}</InlineMath> is calculable, so is{' '}
            <InlineMath>{`g(u, x, v) = f(u, x, x, v)`}</InlineMath></p>
          <p><strong>4. Superfluous variables:</strong> If{' '}
            <InlineMath>{`f(u, v)`}</InlineMath> is calculable, so is{' '}
            <InlineMath>{`g(u, x, v) = f(u, v)`}</InlineMath></p>
          <p><strong>5. Recursion:</strong> If{' '}
            <InlineMath>{`g(\\bar{x})`}</InlineMath> and{' '}
            <InlineMath>{`h(\\bar{x}, y, z)`}</InlineMath> are calculable, so is{' '}
            <InlineMath>{`f(\\bar{x}, y)`}</InlineMath> defined by:</p>
          <MathBlock>{`f(\\bar{x}, 0) = g(\\bar{x}), \\quad f(\\bar{x}, Sy) = h(\\bar{x}, y, f(\\bar{x}, y))`}</MathBlock>
        </div>
      </Card>

      <Callout type="definition" title="Primitive Recursive Functions">
        <p>
          Functions built from the basic functions using schemes (1)–(5) are
          called <strong>primitive recursive functions</strong>. They were
          introduced by <strong>Gödel</strong> in his Incompleteness Theorem proof.
        </p>
        <p className="text-sm mt-2">
          Examples: <InlineMath>{`x + y`}</InlineMath>,{' '}
          <InlineMath>{`x \\times y`}</InlineMath>,{' '}
          <InlineMath>{`x^y`}</InlineMath>, factorial, and many more.
        </p>
      </Callout>

      {/* Abacus Model */}
      <h3 className="text-xl font-semibold mt-8 mb-4">The Abacus Model</h3>

      <p className="text-dark-200 mb-4">
        An <strong>abacus</strong> (for theoretical purposes) consists of
        potentially infinitely many <em>locations</em> and an inexhaustible
        supply of <em>pebbles</em>. A program uses two basic instructions:
      </p>

      <CardGrid columns={2}>
        <Card>
          <CardHeader>A⁺ (Put)</CardHeader>
          <p className="text-dark-300 text-sm">
            Put a pebble at location A, then go to next instruction.
          </p>
        </Card>
        <Card>
          <CardHeader>A⁻ (Take)</CardHeader>
          <p className="text-dark-300 text-sm">
            Take a pebble from A (if not empty, go to ...; else go to ...).
          </p>
        </Card>
      </CardGrid>

      <Card className="mb-6 mt-4">
        <CardHeader>Computing z = f(x, y)</CardHeader>
        <div className="text-dark-300 text-sm">
          <p><strong>Start:</strong> x pebbles at X, y pebbles at Y, all other locations empty.</p>
          <p><strong>Stop:</strong> x at X, y at Y, f(x,y) at Z, all others empty.</p>
          <p className="mt-2">
            Programs are illustrated by <strong>flow diagrams</strong> showing
            the sequence of A⁺ and A⁻ operations.
          </p>
        </div>
      </Card>

      {/* Minimization */}
      <h3 className="text-xl font-semibold mt-8 mb-4">The Minimization Scheme</h3>

      <p className="text-dark-200 mb-4">
        Primitive recursive functions are not the only calculable functions.
        There is one more scheme:
      </p>

      <Callout type="definition" title="Scheme 6: Minimization">
        <p>
          Given a calculable function <InlineMath>{`g(\\bar{x}, y)`}</InlineMath>,
          we can calculate:
        </p>
        <MathBlock>{`f(\\bar{x}) = \\mu y\\, [g(\\bar{x}, y) = 0]`}</MathBlock>
        <p className="text-sm mt-2">
          (the smallest <InlineMath>{`y`}</InlineMath> such that{' '}
          <InlineMath>{`g(\\bar{x}, y) = 0`}</InlineMath>)
        </p>
      </Callout>

      <p className="text-dark-200 mb-4 mt-4">
        Note: <InlineMath>{`f(\\bar{x})`}</InlineMath> is only well-defined if
        such a <InlineMath>{`y`}</InlineMath> exists for all{' '}
        <InlineMath>{`\\bar{x}`}</InlineMath>. Otherwise{' '}
        <InlineMath>{`f`}</InlineMath> is a <strong>partial function</strong>.
      </p>

      {/* Recursive Functions */}
      <h3 className="text-xl font-semibold mt-8 mb-4">Recursive Functions</h3>

      <Callout type="theorem" title="Church-Turing Thesis">
        <p>
          The class of functions obtainable from schemes (1)–(6) are the{' '}
          <strong>(partial) recursive functions</strong>. These are exactly
          the functions that can be calculated on:
        </p>
        <ul className="list-disc list-inside mt-2 text-sm">
          <li>An abacus</li>
          <li>A Turing machine</li>
          <li>A modern computer</li>
        </ul>
      </Callout>

      <p className="text-dark-200 mb-4 mt-4">
        This equivalence—that all reasonable models of computation define the
        same class of functions—is strong evidence for the{' '}
        <strong>Church-Turing thesis</strong>: these are all the functions
        that can be "effectively computed."
      </p>

      {/* Historical Contributors */}
      <h3 className="text-xl font-semibold mt-8 mb-4">Key Contributors</h3>

      <CardGrid columns={2}>
        <Card>
          <CardHeader>Alan Turing (1936)</CardHeader>
          <p className="text-dark-300 text-sm">
            Invented the Turing machine, the theoretical ancestor of all
            modern computers.
          </p>
        </Card>
        <Card>
          <CardHeader>Emil L. Post (1936)</CardHeader>
          <p className="text-dark-300 text-sm">
            Independently developed an equivalent model of computation.
          </p>
        </Card>
        <Card>
          <CardHeader>Kurt Gödel</CardHeader>
          <p className="text-dark-300 text-sm">
            Introduced primitive recursive functions in his Incompleteness
            Theorem proof.
          </p>
        </Card>
        <Card>
          <CardHeader>Alonzo Church</CardHeader>
          <p className="text-dark-300 text-sm">
            Proved there is no algorithm for determining if a formula is a
            theorem (Church's theorem).
          </p>
        </Card>
      </CardGrid>

      {/* Summary */}
      <h3 className="text-xl font-semibold mt-8 mb-4">Summary</h3>

      <div className="bg-dark-800 rounded-lg p-4 mb-6">
        <ul className="text-dark-200 space-y-2">
          <li>• <strong>Hilbert's Problems</strong> (1900) required defining
            "effective method"</li>
          <li>• "Calculation" from Latin <em>calculus</em> = pebble (abacus)</li>
          <li>• <strong>Turing & Post</strong> (1936) gave rigorous definitions</li>
          <li>• <strong>Basic functions</strong>: identity{' '}
            <InlineMath>{`f(x) = x`}</InlineMath> and successor{' '}
            <InlineMath>{`f(x) = x + 1`}</InlineMath></li>
          <li>• <strong>Primitive recursive</strong>: built from schemes (1)–(5)</li>
          <li>• <strong>Recursion scheme</strong>:{' '}
            <InlineMath>{`f(\\bar{x}, 0) = g(\\bar{x})`}</InlineMath>,{' '}
            <InlineMath>{`f(\\bar{x}, Sy) = h(\\bar{x}, y, f(\\bar{x}, y))`}</InlineMath></li>
          <li>• <strong>Minimization</strong> (scheme 6):{' '}
            <InlineMath>{`f(\\bar{x}) = \\mu y\\,[g(\\bar{x}, y) = 0]`}</InlineMath></li>
          <li>• <strong>(Partial) recursive functions</strong> = all calculable
            functions</li>
          <li>• <strong>Church-Turing thesis</strong>: all models of computation
            give the same class</li>
        </ul>
      </div>

      {/* Section Quiz */}
      <SectionQuiz sectionId={49} questions={section49Questions} />
    </LessonLayout>
  );
}
