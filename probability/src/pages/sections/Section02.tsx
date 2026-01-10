import { LessonLayout } from '@/components/layout/LessonLayout';
import { Definition, Theorem, Example } from '@/components/common/ContentBlocks';
import { InlineMath, MathBlock } from '@/components/common/MathBlock';

export default function Section02() {
  return (
    <LessonLayout
      title="1.2 The Basic Principle of Counting"
      sectionId={2}
    >
      <p className="text-lg text-dark-200 mb-6">
        The basic principle of counting, also known as the <strong>multiplication principle</strong>, 
        is the foundation of all combinatorial counting. It tells us how to count the outcomes of 
        experiments that occur in stages.
      </p>

      <Theorem title="The Basic Principle of Counting">
        <p className="mb-2">
          If an experiment consists of two stages, where the first stage can result 
          in any one of <InlineMath>m</InlineMath> possible outcomes, and for each outcome of the first stage, 
          there are <InlineMath>n</InlineMath> possible outcomes of the second stage, then together there are
        </p>
        <MathBlock>{`m \\cdot n`}</MathBlock>
        <p>possible outcomes of the experiment.</p>
      </Theorem>

      <p className="text-dark-300 mb-4">
        This principle extends naturally to experiments with more than two stages.
      </p>

      <Theorem title="Generalized Basic Principle of Counting">
        <p className="mb-2">
          If an experiment consists of <InlineMath>r</InlineMath> stages, where:
        </p>
        <ul className="list-disc list-inside mb-2 space-y-1">
          <li>Stage 1 has <InlineMath>n_1</InlineMath> possible outcomes</li>
          <li>For each outcome of stage 1, stage 2 has <InlineMath>n_2</InlineMath> possible outcomes</li>
          <li>For each outcome of stages 1 and 2, stage 3 has <InlineMath>n_3</InlineMath> possible outcomes</li>
          <li>And so on...</li>
        </ul>
        <p className="mb-2">Then the total number of possible outcomes is:</p>
        <MathBlock>{`n_1 \\cdot n_2 \\cdot n_3 \\cdots n_r = \\prod_{i=1}^{r} n_i`}</MathBlock>
      </Theorem>

      <Example title="Forming a Committee">
        <p className="mb-2">
          A committee of 2 is to be formed from a group of 4 people: Alice, Bob, Carol, and Dave.
          How many different committees are possible if:
        </p>
        <p className="mb-2"><strong>(a) One person is chair and one is secretary?</strong></p>
        <p className="mb-2">
          Stage 1: Choose chair — 4 options<br />
          Stage 2: Choose secretary from remaining — 3 options<br />
          Total: <InlineMath>4 \cdot 3 = 12</InlineMath> committees
        </p>
        <p className="mb-2"><strong>(b) Both members have equal standing?</strong></p>
        <p>
          This is different! The pair {'{'}Alice, Bob{'}'} is the same as {'{'}Bob, Alice{'}'}.
          We'll handle this case in Section 1.4 on combinations.
        </p>
      </Example>

      <Example title="License Plates">
        <p className="mb-2">
          How many different license plates can be formed using 3 letters followed by 4 digits 
          (where repetition is allowed)?
        </p>
        <p className="mb-2">
          Stage 1: First letter — 26 options<br />
          Stage 2: Second letter — 26 options<br />
          Stage 3: Third letter — 26 options<br />
          Stage 4: First digit — 10 options<br />
          Stage 5: Second digit — 10 options<br />
          Stage 6: Third digit — 10 options<br />
          Stage 7: Fourth digit — 10 options
        </p>
        <MathBlock>{`26^3 \\cdot 10^4 = 17,576 \\cdot 10,000 = 175,760,000`}</MathBlock>
      </Example>

      <Example title="Paths in a Grid">
        <p className="mb-2">
          A robot starts at position (0, 0) and needs to reach (3, 2) by moving only right (R) 
          or up (U). Each path is a sequence of moves like RRRUU or RURRU.
        </p>
        <p className="mb-2">
          Every path consists of exactly 3 R's and 2 U's in some order.
          The number of such paths equals the number of ways to arrange these 5 moves,
          which we'll compute using techniques from Sections 1.3-1.5.
        </p>
      </Example>

      <h2 className="text-2xl font-bold text-dark-100 mt-8 mb-4">Tree Diagrams</h2>

      <p className="text-dark-300 mb-4">
        The basic principle can be visualized using <strong>tree diagrams</strong>. Each branch 
        at a node represents a possible outcome at that stage, and each path from root to leaf 
        represents a complete outcome of the experiment.
      </p>

      <p className="text-dark-300 mb-4">
        For example, tossing a coin twice can be represented as:
      </p>

      <div className="bg-dark-800 p-4 rounded-lg mb-6 font-mono text-sm">
        <pre className="text-dark-200">
{`         Start
        /     \\
       H       T       (First toss)
      / \\     / \\
     H   T   H   T     (Second toss)
    
Outcomes: HH, HT, TH, TT (4 total = 2 × 2)`}
        </pre>
      </div>

      <Definition title="Sample Space">
        <p>
          The set of all possible outcomes of an experiment is called the <strong>sample space</strong>.
          The basic principle of counting tells us the size of the sample space for multi-stage experiments.
        </p>
      </Definition>

      <h2 className="text-2xl font-bold text-dark-100 mt-8 mb-4">Key Insight</h2>

      <p className="text-dark-300 mb-4">
        The basic principle applies when each stage has a definite number of outcomes 
        <em> regardless of what happened in previous stages</em>. When the number of choices 
        at one stage depends on previous choices (like choosing committee members without replacement), 
        the principle still applies—we just need to track the dependencies carefully.
      </p>
    </LessonLayout>
  );
}
