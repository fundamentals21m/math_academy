import { LessonLayout } from '@/components/layout/LessonLayout';
import { Callout } from '@/components/common/Callout';
import { MathBlock, InlineMath } from '@/components/common/MathBlock';

export default function Section151() {
  return (
    <LessonLayout sectionId={151}>
      <h2>Finitely Additive Measures</h2>

      <p>
        A <strong>measure</strong> is a finitely additive set function with an
        additional property: nonnegativity. Measures generalize the concepts of
        length, area, and volume to abstract settings.
      </p>

      <h3>Definition of a Measure</h3>

      <Callout type="info">
        <strong>Definition:</strong> A finitely additive set function{' '}
        <InlineMath>f</InlineMath> defined on a Boolean algebra{' '}
        <InlineMath>{`\\mathscr{B}`}</InlineMath> is called a{' '}
        <strong>finitely additive measure</strong> (or simply a{' '}
        <strong>measure</strong>) if it is nonnegative:
        <MathBlock>
          {`f(A) \\geq 0 \\quad \\text{for all } A \\in \\mathscr{B}`}
        </MathBlock>
      </Callout>

      <h3>Properties of Measures</h3>

      <p>
        Let <InlineMath>f</InlineMath> be a measure on a Boolean algebra{' '}
        <InlineMath>{`\\mathscr{B}`}</InlineMath>. Then:
      </p>

      <p>
        <strong>1. Empty set has measure zero:</strong>
      </p>
      <MathBlock>
        {`f(\\varnothing) = 0`}
      </MathBlock>

      <p>
        <strong>2. Monotonicity:</strong> If{' '}
        <InlineMath>{'A \\subseteq B'}</InlineMath>, then{' '}
        <InlineMath>{'f(A) \\leq f(B)'}</InlineMath>.
      </p>

      <p>
        <strong>3. Subtractivity:</strong> If{' '}
        <InlineMath>{'A \\subseteq B'}</InlineMath>, then:
      </p>
      <MathBlock>
        f(B - A) = f(B) - f(A)
      </MathBlock>

      <p>
        <strong>4. Subadditivity:</strong> For any sets{' '}
        <InlineMath>A</InlineMath> and <InlineMath>B</InlineMath>:
      </p>
      <MathBlock>
        {`f(A \\cup B) \\leq f(A) + f(B)`}
      </MathBlock>

      <h3>Examples of Measures</h3>

      <p>
        <strong>Example 1 (Counting measure):</strong> For a finite set{' '}
        <InlineMath>S</InlineMath>, define <InlineMath>{'\\nu(A)'}</InlineMath>{' '}
        to be the number of elements in <InlineMath>A</InlineMath>. This is a
        measure on the Boolean algebra of all subsets of{' '}
        <InlineMath>S</InlineMath>.
      </p>

      <p>
        <strong>Example 2 (Length on intervals):</strong> For intervals on the
        real line, the length function <InlineMath>{'L([a, b]) = b - a'}</InlineMath>{' '}
        is a measure.
      </p>

      <p>
        <strong>Example 3 (Point mass):</strong> Fix a point{' '}
        <InlineMath>p</InlineMath> in a set <InlineMath>S</InlineMath>. Define:
      </p>
      <MathBlock>
        {`\\delta_p(A) = \\begin{cases} 1 & \\text{if } p \\in A \\\\ 0 & \\text{if } p \\notin A \\end{cases}`}
      </MathBlock>
      <p>
        This is called the <strong>Dirac measure</strong> or{' '}
        <strong>point mass</strong> at <InlineMath>p</InlineMath>.
      </p>

      <h3>Normalized Measures</h3>

      <Callout type="info">
        <strong>Definition:</strong> A measure <InlineMath>f</InlineMath> on a
        Boolean algebra <InlineMath>{`\\mathscr{B}`}</InlineMath> with{' '}
        <InlineMath>{'S \\in \\mathscr{B}'}</InlineMath> is called{' '}
        <strong>normalized</strong> if <InlineMath>{'f(S) = 1'}</InlineMath>.
      </Callout>

      <p>
        A normalized measure is especially important in probability theory,
        where it represents the total probability of all possible outcomes.
      </p>

      <p>
        If <InlineMath>f</InlineMath> is any measure with{' '}
        <InlineMath>{'f(S) > 0'}</InlineMath>, we can normalize it by defining:
      </p>
      <MathBlock>
        {`g(A) = \\frac{f(A)}{f(S)}`}
      </MathBlock>
      <p>
        Then <InlineMath>g</InlineMath> is a normalized measure.
      </p>

      <Callout type="success">
        <strong>Key Insight:</strong> Measures provide a mathematical framework
        for assigning "sizes" to sets in a consistent way. The properties of
        measures—nonnegativity, additivity, and monotonicity—ensure that our
        intuitive notions of size are preserved: larger sets have larger
        measures, and the measure of a union of disjoint parts equals the sum of
        their individual measures.
      </Callout>
    </LessonLayout>
  );
}
