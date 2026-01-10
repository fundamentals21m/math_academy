import { LessonLayout } from '@/components/layout/LessonLayout';
import { Definition, Example } from '@/components/common/ContentBlocks';
import { InlineMath, MathBlock } from '@/components/common/MathBlock';

export default function Section08() {
  return (
    <LessonLayout
      title="2.2 Sample Space and Events"
      sectionId={8}
    >
      <p className="text-lg text-dark-200 mb-6">
        Before we can define probability, we need to formalize what we're assigning probabilities to.
        This requires the concepts of sample space and events.
      </p>

      <Definition title="Sample Space">
        <p>
          The <strong>sample space</strong> <InlineMath>S</InlineMath> (or <InlineMath>\Omega</InlineMath>) of an experiment is 
          the set of all possible outcomes. Each element of <InlineMath>S</InlineMath> is called a 
          <strong> sample point</strong> or <strong>outcome</strong>.
        </p>
      </Definition>

      <Example title="Sample Spaces">
        <div className="space-y-3">
          <p><strong>Coin toss:</strong> <InlineMath>S = \{'{H, T}'}\</InlineMath></p>
          <p><strong>Roll of a die:</strong> <InlineMath>S = \{'{1, 2, 3, 4, 5, 6}'}\</InlineMath></p>
          <p><strong>Two coin tosses:</strong> <InlineMath>S = \{'{HH, HT, TH, TT}'}\</InlineMath></p>
          <p><strong>Lifetime of a bulb:</strong> <InlineMath>S = \{'{ t : t \\geq 0 }'}\</InlineMath> (all non-negative reals)</p>
          <p><strong>Number of calls received:</strong> <InlineMath>S = \{'{0, 1, 2, 3, \\ldots}'}\</InlineMath> (non-negative integers)</p>
        </div>
      </Example>

      <h2 className="text-2xl font-bold text-dark-100 mt-8 mb-4">Events</h2>

      <Definition title="Event">
        <p>
          An <strong>event</strong> is a subset of the sample space <InlineMath>S</InlineMath>. We say that 
          event <InlineMath>E</InlineMath> <strong>occurs</strong> if the outcome of the experiment is in <InlineMath>E</InlineMath>.
        </p>
      </Definition>

      <Example title="Events for Die Roll">
        <p className="mb-2">For <InlineMath>S = \{'{1, 2, 3, 4, 5, 6}'}\</InlineMath>:</p>
        <ul className="list-disc list-inside space-y-1">
          <li><InlineMath>E_1 = \{'{2, 4, 6}'}\</InlineMath> — "rolling an even number"</li>
          <li><InlineMath>E_2 = \{'{1, 2, 3}'}\</InlineMath> — "rolling at most 3"</li>
          <li><InlineMath>E_3 = \{'{6}'}\</InlineMath> — "rolling a 6"</li>
          <li><InlineMath>E_4 = \emptyset</InlineMath> — the empty event (never occurs)</li>
          <li><InlineMath>E_5 = S</InlineMath> — the certain event (always occurs)</li>
        </ul>
      </Example>

      <h2 className="text-2xl font-bold text-dark-100 mt-8 mb-4">Set Operations on Events</h2>

      <p className="text-dark-300 mb-4">
        Since events are sets, we can combine them using set operations:
      </p>

      <Definition title="Union">
        <p className="mb-2">
          The <strong>union</strong> <InlineMath>E \cup F</InlineMath> is the event that occurs if <InlineMath>E</InlineMath> or 
          <InlineMath>F</InlineMath> (or both) occurs.
        </p>
        <MathBlock>{`E \\cup F = \\{\\omega : \\omega \\in E \\text{ or } \\omega \\in F\\}`}</MathBlock>
      </Definition>

      <Definition title="Intersection">
        <p className="mb-2">
          The <strong>intersection</strong> <InlineMath>E \cap F</InlineMath> (also written <InlineMath>EF</InlineMath>) is 
          the event that occurs if both <InlineMath>E</InlineMath> and <InlineMath>F</InlineMath> occur.
        </p>
        <MathBlock>{`E \\cap F = \\{\\omega : \\omega \\in E \\text{ and } \\omega \\in F\\}`}</MathBlock>
      </Definition>

      <Definition title="Complement">
        <p className="mb-2">
          The <strong>complement</strong> <InlineMath>E^c</InlineMath> (or <InlineMath>\bar{'{E}'}</InlineMath> or <InlineMath>E'</InlineMath>) is 
          the event that occurs if <InlineMath>E</InlineMath> does not occur.
        </p>
        <MathBlock>{`E^c = \\{\\omega : \\omega \\in S, \\omega \\notin E\\}`}</MathBlock>
      </Definition>

      <Example title="Set Operations">
        <p className="mb-2">
          For die roll with <InlineMath>E = \{'{1,2,3}'}\</InlineMath> (at most 3) and <InlineMath>F = \{'{2,4,6}'}\</InlineMath> (even):
        </p>
        <ul className="list-disc list-inside space-y-1">
          <li><InlineMath>E \cup F = \{'{1,2,3,4,6}'}\</InlineMath> — "at most 3 OR even"</li>
          <li><InlineMath>E \cap F = \{'{2}'}\</InlineMath> — "at most 3 AND even"</li>
          <li><InlineMath>E^c = \{'{4,5,6}'}\</InlineMath> — "greater than 3"</li>
          <li><InlineMath>F^c = \{'{1,3,5}'}\</InlineMath> — "odd"</li>
        </ul>
      </Example>

      <h2 className="text-2xl font-bold text-dark-100 mt-8 mb-4">Mutually Exclusive Events</h2>

      <Definition title="Mutually Exclusive">
        <p>
          Events <InlineMath>E</InlineMath> and <InlineMath>F</InlineMath> are <strong>mutually exclusive</strong> (or <strong>disjoint</strong>) 
          if they cannot both occur, i.e., <InlineMath>E \cap F = \emptyset</InlineMath>.
        </p>
      </Definition>

      <Example title="Mutually Exclusive Events">
        <p className="mb-2">For a die roll:</p>
        <ul className="list-disc list-inside space-y-1">
          <li><InlineMath>\{'{1,2}'}\</InlineMath> and <InlineMath>\{'{5,6}'}\</InlineMath> are mutually exclusive</li>
          <li><InlineMath>\{'{1,2,3}'}\</InlineMath> and <InlineMath>\{'{2,4,6}'}\</InlineMath> are NOT mutually exclusive (both contain 2)</li>
          <li>Any event <InlineMath>E</InlineMath> and its complement <InlineMath>E^c</InlineMath> are mutually exclusive</li>
        </ul>
      </Example>

      <h2 className="text-2xl font-bold text-dark-100 mt-8 mb-4">De Morgan's Laws</h2>

      <p className="text-dark-300 mb-4">
        Two important identities for manipulating complements:
      </p>

      <div className="bg-dark-800 p-4 rounded-lg mb-6">
        <MathBlock>{`(E \\cup F)^c = E^c \\cap F^c`}</MathBlock>
        <p className="text-center text-dark-400 my-2">"Not (E or F)" = "Not E AND Not F"</p>
        <MathBlock>{`(E \\cap F)^c = E^c \\cup F^c`}</MathBlock>
        <p className="text-center text-dark-400">"Not (E and F)" = "Not E OR Not F"</p>
      </div>

      <p className="text-dark-300 mb-4">
        These generalize to any number of events:
      </p>

      <MathBlock>{`\\left(\\bigcup_{i=1}^{n} E_i\\right)^c = \\bigcap_{i=1}^{n} E_i^c \\qquad \\left(\\bigcap_{i=1}^{n} E_i\\right)^c = \\bigcup_{i=1}^{n} E_i^c`}</MathBlock>
    </LessonLayout>
  );
}
