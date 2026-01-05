import { LessonLayout } from '../../components/layout/LessonLayout';
import { Callout } from '../../components/common/Callout';
import { Card, CardGrid, CardHeader } from '../../components/common/Card';
import { InlineMath, MathBlock } from '../../components/common/MathBlock';
import { SectionQuiz } from '../../components/quiz';
import { section35Questions } from '../../data/quizzes';

export default function Section35() {
  return (
    <LessonLayout sectionId={35}>
      <h2 className="text-2xl font-semibold mb-4">The Real Numbers</h2>

      <p className="text-dark-200 mb-6 text-lg leading-relaxed">
        There are two well-known ways of constructing the reals from the rationals:
        the <strong>Dedekind cut</strong> approach, which goes back to Eudoxus, and
        the <strong>Cauchy sequence</strong> approach. We also discuss the axiomatic
        characterization of <InlineMath>{`\\mathbb{R}`}</InlineMath> as a{' '}
        <strong>complete ordered field</strong>.
      </p>

      {/* Dedekind Cuts */}
      <h3 className="text-xl font-semibold mt-8 mb-4">Dedekind Cuts</h3>

      <p className="text-dark-200 mb-4">
        <strong>Eudoxus</strong>, a member of Plato's Academy, was interested in defining
        the notion of proportion for geometric quantities. His idea can be interpreted
        in modern terms as defining equality between two real numbers{' '}
        <InlineMath>{`\\alpha`}</InlineMath> and <InlineMath>{`\\beta`}</InlineMath>:
      </p>

      <MathBlock>{`\\alpha = \\beta \\iff \\text{the set of all rationals below } \\alpha \\text{ equals the set below } \\beta`}</MathBlock>

      <p className="text-dark-200 mb-4 mt-4">
        <strong>Richard Dedekind</strong> (1831–1916) exploited this idea by defining
        a real number <InlineMath>{`\\alpha`}</InlineMath> as a pair{' '}
        <InlineMath>{`(L, U)`}</InlineMath> of sets of rationals—those{' '}
        <em>below</em> and <em>above</em> <InlineMath>{`\\alpha`}</InlineMath>, respectively.
      </p>

      <Callout type="info" title="Dedekind Cut">
        <p className="mb-2">
          A <strong>Dedekind cut</strong> is a pair <InlineMath>{`(L, U)`}</InlineMath>{' '}
          of sets of rationals such that:
        </p>
        <ul className="list-disc list-inside space-y-1 ml-4 text-sm">
          <li>Every rational is in exactly one of <InlineMath>{`L`}</InlineMath> or{' '}
            <InlineMath>{`U`}</InlineMath></li>
          <li>Every element of <InlineMath>{`L`}</InlineMath> is less than every element
            of <InlineMath>{`U`}</InlineMath></li>
          <li><InlineMath>{`L`}</InlineMath> has no greatest element</li>
        </ul>
      </Callout>

      <Card className="mb-6 mt-4">
        <CardHeader>Example: √2 as a Dedekind Cut</CardHeader>
        <div className="text-dark-300 space-y-2">
          <p>
            <InlineMath>{`L`}</InlineMath> = the set of all rationals{' '}
            <InlineMath>{`x`}</InlineMath> for which <InlineMath>{`x^2 < 2`}</InlineMath>{' '}
            (or <InlineMath>{`x < 0`}</InlineMath>)
          </p>
          <p>
            <InlineMath>{`U`}</InlineMath> = the set of all rationals{' '}
            <InlineMath>{`y`}</InlineMath> for which <InlineMath>{`y^2 > 2`}</InlineMath>{' '}
            and <InlineMath>{`y > 0`}</InlineMath>
          </p>
          <p className="text-sm">
            This describes <InlineMath>{`\\sqrt{2}`}</InlineMath> without ever mentioning
            an irrational number!
          </p>
        </div>
      </Card>

      {/* Cauchy Sequences */}
      <h3 className="text-xl font-semibold mt-8 mb-4">Cauchy Sequences</h3>

      <p className="text-dark-200 mb-4">
        Analysts prefer a construction proposed by <strong>Augustin-Louis Cauchy</strong>{' '}
        (1789–1857), according to which a real number is defined as an equivalence
        class of sequences of rationals.
      </p>

      <Callout type="info" title="Cauchy Sequence">
        <p>
          A <strong>Cauchy sequence</strong> is a sequence{' '}
          <InlineMath>{`\\{a_n | n \\in \\mathbb{N}\\}`}</InlineMath> of rational numbers
          such that <InlineMath>{`|a_m - a_n|`}</InlineMath> can be made as small as one
          likes by taking <InlineMath>{`m`}</InlineMath> and <InlineMath>{`n`}</InlineMath>{' '}
          sufficiently large.
        </p>
      </Callout>

      <p className="text-dark-200 mb-4 mt-4">
        Two Cauchy sequences <InlineMath>{`\\{a_n\\}`}</InlineMath> and{' '}
        <InlineMath>{`\\{b_n\\}`}</InlineMath> are <strong>equivalent</strong> if{' '}
        <InlineMath>{`|a_n - b_n|`}</InlineMath> can be made as small as one likes by
        taking <InlineMath>{`n`}</InlineMath> sufficiently large. A real number is then
        defined as an <strong>equivalence class</strong> of Cauchy sequences.
      </p>

      {/* Schanuel's Construction */}
      <h3 className="text-xl font-semibold mt-8 mb-4">Schanuel's Construction</h3>

      <p className="text-dark-200 mb-4">
        An amusing construction due to <strong>Steve Schanuel</strong> bypasses the
        rationals altogether and defines a real number as an equivalence class of
        certain mappings <InlineMath>{`f : \\mathbb{Z} \\to \\mathbb{Z}`}</InlineMath>.
      </p>

      <Card className="mb-6">
        <CardHeader>Almost Linear Mappings</CardHeader>
        <div className="text-dark-300 space-y-3">
          <p>
            Call <InlineMath>{`f`}</InlineMath> <strong>almost linear</strong> if the set
            of all <InlineMath>{`|f(m + n) - f(m) - f(n)|`}</InlineMath>, where{' '}
            <InlineMath>{`m, n \\in \\mathbb{Z}`}</InlineMath>, is bounded.
          </p>
          <p>
            Two almost linear mappings <InlineMath>{`f, g`}</InlineMath> are{' '}
            <strong>equivalent</strong> if the set of all{' '}
            <InlineMath>{`|f(n) - g(n)|`}</InlineMath> is bounded.
          </p>
          <p>
            The real number <InlineMath>{`\\alpha`}</InlineMath> corresponds to the
            equivalence class of the mapping <InlineMath>{`f(n) = [\\alpha n]`}</InlineMath>{' '}
            (the greatest integer <InlineMath>{`\\leq \\alpha n`}</InlineMath>).
          </p>
          <p className="text-sm">
            Operations: <InlineMath>{`(f + g)(n) = f(n) + g(n)`}</InlineMath> and{' '}
            <InlineMath>{`(f \\circ g)(n) = f(g(n))`}</InlineMath>.
          </p>
        </div>
      </Card>

      {/* Axiomatic Approach */}
      <h3 className="text-xl font-semibold mt-8 mb-4">The Axiomatic Approach</h3>

      <p className="text-dark-200 mb-4">
        Instead of constructing the real numbers, one may describe them axiomatically
        as a <strong>complete ordered field</strong>. We already know what a field is,
        so we need to define "ordered" and "complete".
      </p>

      {/* Ordered Field */}
      <Callout type="info" title="Ordered Field">
        <p className="mb-2">
          A field <InlineMath>{`F`}</InlineMath> is <strong>ordered</strong> if it has
          a subset <InlineMath>{`P`}</InlineMath> (the <strong>positive elements</strong>)
          such that:
        </p>
        <ol className="list-decimal list-inside space-y-1 ml-4 text-sm">
          <li><InlineMath>{`x, y \\in P \\Rightarrow x + y \\in P`}</InlineMath></li>
          <li><InlineMath>{`x, y \\in P \\Rightarrow xy \\in P`}</InlineMath></li>
          <li>Exactly one of the following holds: <InlineMath>{`x = 0`}</InlineMath>, or{' '}
            <InlineMath>{`x \\in P`}</InlineMath>, or <InlineMath>{`-x \\in P`}</InlineMath></li>
        </ol>
      </Callout>

      <p className="text-dark-200 mb-4 mt-4">
        Note that by (3), either <InlineMath>{`1`}</InlineMath> or <InlineMath>{`-1`}</InlineMath>{' '}
        is in <InlineMath>{`P`}</InlineMath>. Since <InlineMath>{`(-1)(-1) = 1`}</InlineMath>,
        it follows from (2) that <InlineMath>{`1 \\in P`}</InlineMath>.
      </p>

      <p className="text-dark-200 mb-4">
        The existence of <InlineMath>{`P`}</InlineMath> allows us to define an{' '}
        <strong>order relation</strong>:
      </p>

      <MathBlock>{`x \\leq y \\iff x = y \\text{ or } y - x \\in P`}</MathBlock>

      {/* Order Relation Properties */}
      <div className="bg-dark-800 rounded-lg p-4 mb-6 mt-4">
        <p className="text-dark-200 mb-2"><strong>Properties of the order relation:</strong></p>
        <ul className="text-dark-300 space-y-1 text-sm">
          <li><InlineMath>{`x \\leq x`}</InlineMath> <span className="text-dark-400">(reflexivity)</span></li>
          <li><InlineMath>{`x \\leq y`}</InlineMath> and <InlineMath>{`y \\leq z \\Rightarrow x \\leq z`}</InlineMath>{' '}
            <span className="text-dark-400">(transitivity)</span></li>
          <li><InlineMath>{`x \\leq y`}</InlineMath> and <InlineMath>{`y \\leq x \\Rightarrow x = y`}</InlineMath>{' '}
            <span className="text-dark-400">(antisymmetry)</span></li>
          <li><InlineMath>{`x \\leq y`}</InlineMath> or <InlineMath>{`y \\leq x`}</InlineMath>{' '}
            <span className="text-dark-400">(dichotomy)</span></li>
        </ul>
      </div>

      {/* Which fields are ordered? */}
      <CardGrid columns={2}>
        <Card>
          <CardHeader>Ordered Fields</CardHeader>
          <div className="text-dark-300 text-sm space-y-2">
            <p><InlineMath>{`\\mathbb{Q}`}</InlineMath> (the rationals)</p>
            <p><InlineMath>{`\\mathbb{R}`}</InlineMath> (the reals)</p>
          </div>
        </Card>
        <Card>
          <CardHeader>Not Ordered</CardHeader>
          <div className="text-dark-300 text-sm space-y-2">
            <p><InlineMath>{`\\mathbb{C}`}</InlineMath> (the complex numbers)</p>
            <p className="text-xs text-dark-400">
              (Cannot decide if <InlineMath>{`i`}</InlineMath> is positive or negative)
            </p>
          </div>
        </Card>
      </CardGrid>

      <Card className="mb-6 mt-4">
        <CardHeader>Why ℂ Cannot Be Ordered</CardHeader>
        <div className="text-dark-300 space-y-2">
          <p>
            Consider <InlineMath>{`i`}</InlineMath>. If <InlineMath>{`i \\in P`}</InlineMath>,
            then <InlineMath>{`-1 = i \\cdot i \\in P`}</InlineMath>. But this is impossible
            since <InlineMath>{`1 \\in P`}</InlineMath>.
          </p>
          <p>
            If <InlineMath>{`-i \\in P`}</InlineMath>, then{' '}
            <InlineMath>{`-1 = (-i)(-i) \\in P`}</InlineMath>—same contradiction.
          </p>
          <p className="text-sm">
            So neither <InlineMath>{`i`}</InlineMath> nor <InlineMath>{`-i`}</InlineMath>{' '}
            is in <InlineMath>{`P`}</InlineMath>, contradicting axiom (3).
          </p>
        </div>
      </Card>

      {/* Completeness */}
      <h3 className="text-xl font-semibold mt-8 mb-4">Completeness</h3>

      <Callout type="info" title="Complete Ordered Field">
        <p>
          An ordered field is <strong>complete</strong> if every nonempty set of
          positive elements has a <strong>greatest lower bound</strong> (infimum).
        </p>
      </Callout>

      <p className="text-dark-200 mb-4 mt-4">
        For example, <InlineMath>{`\\sqrt{2}`}</InlineMath> is the greatest lower bound
        of all positive reals <InlineMath>{`r`}</InlineMath> such that{' '}
        <InlineMath>{`2 \\leq r^2`}</InlineMath>. Since <InlineMath>{`\\sqrt{2}`}</InlineMath>{' '}
        is not rational, we conclude that <InlineMath>{`\\mathbb{Q}`}</InlineMath> is{' '}
        <strong>not</strong> a complete ordered field.
      </p>

      {/* Uniqueness */}
      <Callout type="success" title="Uniqueness of ℝ">
        <p>
          <strong>Theorem:</strong> Any two complete ordered fields are isomorphic.
        </p>
        <p className="text-sm mt-2">
          This means there is essentially <strong>only one</strong> complete ordered
          field—the real numbers <InlineMath>{`\\mathbb{R}`}</InlineMath>.
        </p>
      </Callout>

      {/* Summary */}
      <h3 className="text-xl font-semibold mt-8 mb-4">Summary</h3>

      <div className="bg-dark-800 rounded-lg p-4 mb-6">
        <ul className="text-dark-200 space-y-2">
          <li>• <strong>Dedekind cuts</strong>: real number as pair{' '}
            <InlineMath>{`(L, U)`}</InlineMath> of rationals below/above</li>
          <li>• <strong>Cauchy sequences</strong>: real number as equivalence class
            of sequences where <InlineMath>{`|a_m - a_n| \\to 0`}</InlineMath></li>
          <li>• <strong>Schanuel's construction</strong>: equivalence classes of
            "almost linear" maps <InlineMath>{`\\mathbb{Z} \\to \\mathbb{Z}`}</InlineMath></li>
          <li>• A field is <strong>ordered</strong> if it has positive elements{' '}
            <InlineMath>{`P`}</InlineMath> with closure properties</li>
          <li>• <InlineMath>{`\\mathbb{Q}`}</InlineMath> and{' '}
            <InlineMath>{`\\mathbb{R}`}</InlineMath> are ordered;{' '}
            <InlineMath>{`\\mathbb{C}`}</InlineMath> is not</li>
          <li>• An ordered field is <strong>complete</strong> if every nonempty set
            of positives has an infimum</li>
          <li>• <InlineMath>{`\\mathbb{Q}`}</InlineMath> is not complete (missing{' '}
            <InlineMath>{`\\sqrt{2}`}</InlineMath>)</li>
          <li>• <InlineMath>{`\\mathbb{R}`}</InlineMath> is the{' '}
            <strong>unique complete ordered field</strong> (up to isomorphism)</li>
        </ul>
      </div>

      {/* Section Quiz */}
      <SectionQuiz sectionId={35} questions={section35Questions} />
    </LessonLayout>
  );
}
