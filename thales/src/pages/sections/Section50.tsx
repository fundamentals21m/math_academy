import { LessonLayout } from '../../components/layout/LessonLayout';
import { Callout } from '../../components/common/Callout';
import { Card, CardGrid, CardHeader } from '../../components/common/Card';
import { InlineMath, MathBlock } from '../../components/common/MathBlock';
import { SectionQuiz } from '../../components/quiz';
import { section50Questions } from '../../data/quizzes';

export default function Section50() {
  return (
    <LessonLayout sectionId={50}>
      <h2 className="text-2xl font-semibold mb-4">Recursive and Recursively Enumerable Sets</h2>

      <p className="text-dark-200 mb-6 text-lg leading-relaxed">
        Having defined what it means to calculate a function, we now turn to
        sets of natural numbers. Some sets have <em>decidable</em> membership
        (we can compute whether any given number is in the set), while others
        are only <em>semi-decidable</em> (we can list their elements but cannot
        always tell when something is <em>not</em> in the set).
      </p>

      {/* Recursive Sets */}
      <h3 className="text-xl font-semibold mt-8 mb-4">Recursive Sets</h3>

      <Callout type="info" title="Recursive Set">
        <p>
          A set <InlineMath>{`A`}</InlineMath> of natural numbers is{' '}
          <strong>recursive</strong> (or <strong>decidable</strong>) if there
          is a recursive function <InlineMath>{`f : \\mathbb{N} \\to \\mathbb{N}`}</InlineMath>{' '}
          such that:
        </p>
        <MathBlock>{`A = \\{x \\in \\mathbb{N} \\mid f(x) = 0\\}`}</MathBlock>
        <p className="text-sm mt-2">
          In other words, for any <InlineMath>{`x`}</InlineMath>, we can determine
          whether <InlineMath>{`x \\in A`}</InlineMath> by performing a calculation.
        </p>
      </Callout>

      <Card className="mb-6 mt-4">
        <CardHeader>Example: The Set of Primes</CardHeader>
        <div className="text-dark-300 text-sm">
          <p>
            The set of prime numbers is recursive. We can determine whether a
            given number <InlineMath>{`n`}</InlineMath> is prime by dividing it
            by all natural numbers <InlineMath>{`\\leq \\sqrt{n}`}</InlineMath>.
          </p>
          <p className="mt-2">
            With some work, one can construct a recursive function{' '}
            <InlineMath>{`f`}</InlineMath> such that{' '}
            <InlineMath>{`f(n) = 0`}</InlineMath> iff <InlineMath>{`n`}</InlineMath>{' '}
            is prime.
          </p>
        </div>
      </Card>

      {/* Recursively Enumerable Sets */}
      <h3 className="text-xl font-semibold mt-8 mb-4">Recursively Enumerable Sets</h3>

      <Callout type="info" title="Recursively Enumerable Set">
        <p>
          A set <InlineMath>{`A`}</InlineMath> of natural numbers is{' '}
          <strong>recursively enumerable</strong> (r.e.) if there is a recursive
          function <InlineMath>{`g : \\mathbb{N} \\to \\mathbb{N}`}</InlineMath> such that:
        </p>
        <MathBlock>{`A = \\{g(0), g(1), g(2), \\ldots\\}`}</MathBlock>
        <p className="text-sm mt-2">
          The <InlineMath>{`g(n)`}</InlineMath> need not be in order and may
          repeat. The empty set is also considered r.e.
        </p>
      </Callout>

      <p className="text-dark-200 mb-4 mt-4">
        Intuitively, a set is r.e. if there is a calculation that will{' '}
        <strong>generate</strong> all and only its elements (possibly with
        repetitions), but we may never know when we've seen them all.
      </p>

      {/* Kleene's Theorem */}
      <h3 className="text-xl font-semibold mt-8 mb-4">The Key Connection</h3>

      <Callout type="success" title="Proposition 20.1 (Kleene)">
        <p>
          Let <InlineMath>{`A`}</InlineMath> be a set of natural numbers and{' '}
          <InlineMath>{`A^c`}</InlineMath> its complement in{' '}
          <InlineMath>{`\\mathbb{N}`}</InlineMath>. Then:
        </p>
        <MathBlock>{`A \\text{ is recursive} \\iff \\text{both } A \\text{ and } A^c \\text{ are r.e.}`}</MathBlock>
      </Callout>

      <Card className="mb-6 mt-4">
        <CardHeader>Proof Sketch</CardHeader>
        <div className="text-dark-300 text-sm space-y-2">
          <p>
            <strong>(⇒)</strong> If <InlineMath>{`A`}</InlineMath> is recursive
            via <InlineMath>{`f`}</InlineMath>, define{' '}
            <InlineMath>{`g(x) = x`}</InlineMath> if{' '}
            <InlineMath>{`f(x) = 0`}</InlineMath>, else{' '}
            <InlineMath>{`g(x) = a`}</InlineMath> (some fixed element of{' '}
            <InlineMath>{`A`}</InlineMath>). Then <InlineMath>{`g`}</InlineMath>{' '}
            enumerates <InlineMath>{`A`}</InlineMath>. Similarly for{' '}
            <InlineMath>{`A^c`}</InlineMath>.
          </p>
          <p>
            <strong>(⇐)</strong> If <InlineMath>{`A`}</InlineMath> is enumerated
            by <InlineMath>{`g`}</InlineMath> and <InlineMath>{`A^c`}</InlineMath>{' '}
            by <InlineMath>{`h`}</InlineMath>, we can determine{' '}
            <InlineMath>{`x \\in A`}</InlineMath> by computing{' '}
            <InlineMath>{`g(0), h(0), g(1), h(1), \\ldots`}</InlineMath> until{' '}
            <InlineMath>{`x`}</InlineMath> appears.
          </p>
        </div>
      </Card>

      {/* Encoding Formulas */}
      <h3 className="text-xl font-semibold mt-8 mb-4">Encoding Mathematics</h3>

      <p className="text-dark-200 mb-4">
        These concepts extend to formal languages. Assuming a finite alphabet
        of <InlineMath>{`s`}</InlineMath> symbols (e.g., 14 symbols for set
        theory), we can think of a string as a number in base{' '}
        <InlineMath>{`s`}</InlineMath>. The number <strong>encodes</strong> the
        string.
      </p>

      <CardGrid columns={2}>
        <Card>
          <CardHeader>Proofs Are Recursive</CardHeader>
          <p className="text-dark-300 text-sm">
            A <strong>proof</strong> is a finite list of formulas, each an
            axiom or derived from earlier formulas. There is a finite procedure
            to check if a list is a valid proof. Thus the set of proofs is{' '}
            <strong>recursive</strong>.
          </p>
        </Card>
        <Card>
          <CardHeader>Theorems Are R.E.</CardHeader>
          <p className="text-dark-300 text-sm">
            A <strong>theorem</strong> is the last formula of a proof. A
            computer can enumerate all proofs and print the last formula of
            each. Thus the set of theorems is <strong>recursively enumerable</strong>.
          </p>
        </Card>
      </CardGrid>

      {/* Church's Theorem */}
      <h3 className="text-xl font-semibold mt-8 mb-4">Church's Theorem</h3>

      <Callout type="success" title="Church's Theorem">
        <p>
          There is <strong>no algorithm</strong> for determining, in general,
          whether a given formula is a theorem of mathematics. In other words,
          the set of theorems is <strong>not recursive</strong>.
        </p>
      </Callout>

      <p className="text-dark-200 mb-4 mt-4">
        Combining Church's result with Kleene's proposition:
      </p>

      <Card className="mb-6">
        <CardHeader>Consequence</CardHeader>
        <div className="text-dark-300 text-sm">
          <p>
            Since the set of theorems <InlineMath>{`T`}</InlineMath> is r.e. but
            not recursive, by Kleene's proposition, the complement{' '}
            <InlineMath>{`T^c`}</InlineMath> (the set of nontheorems) is{' '}
            <strong>not recursively enumerable</strong>.
          </p>
          <p className="mt-2">
            We can list all theorems, but we cannot list all nontheorems!
          </p>
        </div>
      </Card>

      {/* Incompleteness */}
      <h3 className="text-xl font-semibold mt-8 mb-4">The Incompleteness Theorem</h3>

      <Callout type="success" title="Theorem 20.2 (Incompleteness)">
        <p>
          There are mathematical formulas <InlineMath>{`p`}</InlineMath> such
          that neither <InlineMath>{`p`}</InlineMath> nor{' '}
          <InlineMath>{`\\neg p`}</InlineMath> are provable.
        </p>
      </Callout>

      <Card className="mb-6 mt-4">
        <CardHeader>Proof</CardHeader>
        <div className="text-dark-300 text-sm space-y-2">
          <p>
            Let <InlineMath>{`T`}</InlineMath> = set of theorems,{' '}
            <InlineMath>{`C`}</InlineMath> = set of contradictions (formulas{' '}
            <InlineMath>{`p`}</InlineMath> where{' '}
            <InlineMath>{`\\neg p`}</InlineMath> is a theorem).
          </p>
          <p>
            Both <InlineMath>{`T`}</InlineMath> and <InlineMath>{`C`}</InlineMath>{' '}
            are r.e.
          </p>
          <p>
            <strong>Suppose</strong> for every formula{' '}
            <InlineMath>{`p`}</InlineMath>, either <InlineMath>{`p`}</InlineMath>{' '}
            or <InlineMath>{`\\neg p`}</InlineMath> is provable. Then{' '}
            <InlineMath>{`p`}</InlineMath> is a nontheorem iff{' '}
            <InlineMath>{`\\neg p`}</InlineMath> is provable, so{' '}
            <InlineMath>{`C = T^c`}</InlineMath>.
          </p>
          <p>
            Then both <InlineMath>{`T`}</InlineMath> and{' '}
            <InlineMath>{`T^c`}</InlineMath> are r.e., so{' '}
            <InlineMath>{`T`}</InlineMath> is recursive—contradicting Church's
            theorem!
          </p>
        </div>
      </Card>

      <p className="text-dark-200 mb-4">
        <strong>Note:</strong> This was first proved by <strong>Gödel</strong>{' '}
        (1906–1978). Church used Gödel's result to prove his own theorem. We
        shall see Gödel's original proof in a later chapter.
      </p>

      {/* Summary */}
      <h3 className="text-xl font-semibold mt-8 mb-4">Summary</h3>

      <div className="bg-dark-800 rounded-lg p-4 mb-6">
        <ul className="text-dark-200 space-y-2">
          <li>• <strong>Recursive set</strong>:{' '}
            <InlineMath>{`A = \\{x \\mid f(x) = 0\\}`}</InlineMath> for some
            recursive <InlineMath>{`f`}</InlineMath> (decidable)</li>
          <li>• <strong>Recursively enumerable</strong>:{' '}
            <InlineMath>{`A = \\{g(0), g(1), \\ldots\\}`}</InlineMath> for some
            recursive <InlineMath>{`g`}</InlineMath> (listable)</li>
          <li>• <strong>Kleene</strong>: <InlineMath>{`A`}</InlineMath> is
            recursive iff both <InlineMath>{`A`}</InlineMath> and{' '}
            <InlineMath>{`A^c`}</InlineMath> are r.e.</li>
          <li>• <strong>Set of primes</strong>: recursive (testable)</li>
          <li>• <strong>Set of proofs</strong>: recursive (checkable)</li>
          <li>• <strong>Set of theorems</strong>: r.e. but not recursive</li>
          <li>• <strong>Church's Theorem</strong>: no algorithm to decide
            theoremhood</li>
          <li>• <strong>Incompleteness</strong>: some formulas are undecidable
            (neither provable nor refutable)</li>
        </ul>
      </div>

      {/* Section Quiz */}
      <SectionQuiz sectionId={50} questions={section50Questions} />
    </LessonLayout>
  );
}
