import { LessonLayout } from '@/components/layout/LessonLayout';
import { Definition, Example } from '@/components/common/ContentBlocks';
import { InlineMath, MathBlock } from '@/components/common/MathBlock';

export default function Section01() {
  return (
    <LessonLayout
      title="1.1 Introduction"
      sectionId={1}
    >
      <p className="text-lg text-dark-200 mb-6">
        Combinatorial analysis is the mathematical theory of counting. It provides the foundation 
        for computing probabilities by enabling us to count the number of ways events can occur.
      </p>

      <p className="text-dark-300 mb-4">
        As the famous French mathematician Pierre-Simon Laplace noted, probability theory is 
        "at bottom only common sense reduced to calculation." The first step in this calculation 
        is often counting—determining how many ways something can happen.
      </p>

      <h2 className="text-2xl font-bold text-dark-100 mt-8 mb-4">Why Counting Matters</h2>
      
      <p className="text-dark-300 mb-4">
        Many probability problems reduce to counting problems. If we want to find the probability 
        that a randomly selected arrangement has some property, we need to count:
      </p>

      <ul className="list-disc list-inside text-dark-300 mb-6 space-y-2">
        <li>The total number of possible arrangements (our sample space)</li>
        <li>The number of arrangements with the desired property (our event)</li>
      </ul>

      <p className="text-dark-300 mb-4">
        The probability is then simply the ratio of these two counts.
      </p>

      <Example title="Counting Cards">
        <p className="mb-2">
          What is the probability of being dealt a flush (5 cards of the same suit) in poker?
        </p>
        <p className="mb-2">
          To answer this, we need to count:
        </p>
        <ul className="list-disc list-inside mb-2 space-y-1">
          <li>Total number of 5-card hands from a 52-card deck</li>
          <li>Number of 5-card hands that are flushes</li>
        </ul>
        <p>
          The techniques in this chapter give us the tools to perform such counts efficiently.
        </p>
      </Example>

      <h2 className="text-2xl font-bold text-dark-100 mt-8 mb-4">Historical Context</h2>

      <p className="text-dark-300 mb-4">
        Combinatorics has its roots in gambling problems from the 17th century. When the 
        Chevalier de Méré posed questions about dice games to Blaise Pascal, it sparked a 
        correspondence between Pascal and Pierre de Fermat that laid the foundations of 
        probability theory.
      </p>

      <p className="text-dark-300 mb-4">
        Today, combinatorial analysis is essential not only in probability but also in 
        computer science (algorithm analysis), physics (statistical mechanics), and many 
        other fields.
      </p>

      <Definition title="Combinatorial Analysis">
        <p>
          <strong>Combinatorial analysis</strong> (or combinatorics) is the branch of mathematics 
          concerned with counting, arrangement, and combination of objects according to specified rules.
        </p>
      </Definition>

      <h2 className="text-2xl font-bold text-dark-100 mt-8 mb-4">What We'll Learn</h2>

      <p className="text-dark-300 mb-4">
        In this chapter, we develop systematic techniques for counting:
      </p>

      <ul className="list-disc list-inside text-dark-300 mb-6 space-y-2">
        <li><strong>The Basic Principle of Counting</strong> — How to count multi-stage processes</li>
        <li><strong>Permutations</strong> — Counting ordered arrangements</li>
        <li><strong>Combinations</strong> — Counting unordered selections</li>
        <li><strong>Multinomial Coefficients</strong> — Counting divisions into groups</li>
        <li><strong>Integer Solutions</strong> — Counting solutions to equations</li>
      </ul>

      <p className="text-dark-300 mb-4">
        These techniques will form the backbone of our probability calculations throughout the course.
      </p>
    </LessonLayout>
  );
}
