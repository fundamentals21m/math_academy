import { LessonLayout } from '@/components/layout/LessonLayout';
import { Definition, Example } from '@/components/common/ContentBlocks';
import { InlineMath, MathBlock } from '@/components/common/MathBlock';

export default function Section07() {
  return (
    <LessonLayout
      title="2.1 Introduction"
      sectionId={7}
    >
      <p className="text-lg text-dark-200 mb-6">
        In this chapter, we develop the mathematical foundation of probability theory by establishing 
        the axioms that govern probability and exploring their consequences.
      </p>

      <h2 className="text-2xl font-bold text-dark-100 mt-8 mb-4">What Is Probability?</h2>

      <p className="text-dark-300 mb-4">
        Probability quantifies uncertainty. When we say "the probability of rain tomorrow is 0.7," 
        we're expressing our degree of certainty about an uncertain event.
      </p>

      <p className="text-dark-300 mb-4">
        There are three main interpretations of probability:
      </p>

      <div className="space-y-4 mb-6">
        <div className="bg-dark-800 p-4 rounded-lg">
          <h3 className="font-semibold text-dark-100 mb-2">1. Frequency Interpretation</h3>
          <p className="text-dark-300">
            The probability of an event is the long-run relative frequency with which it occurs 
            in repeated experiments. If we flip a fair coin many times, the fraction of heads 
            approaches 0.5.
          </p>
        </div>
        
        <div className="bg-dark-800 p-4 rounded-lg">
          <h3 className="font-semibold text-dark-100 mb-2">2. Classical Interpretation</h3>
          <p className="text-dark-300">
            When outcomes are equally likely, the probability of an event is the ratio of 
            favorable outcomes to total outcomes. For a fair die, P(rolling 6) = 1/6.
          </p>
        </div>
        
        <div className="bg-dark-800 p-4 rounded-lg">
          <h3 className="font-semibold text-dark-100 mb-2">3. Subjective Interpretation</h3>
          <p className="text-dark-300">
            Probability represents a person's degree of belief in an event. This allows us to 
            assign probabilities to unique events (like "probability of life on Mars").
          </p>
        </div>
      </div>

      <h2 className="text-2xl font-bold text-dark-100 mt-8 mb-4">The Mathematical Approach</h2>

      <p className="text-dark-300 mb-4">
        Rather than debate interpretations, mathematics takes an axiomatic approach: we define 
        probability by the properties it must satisfy. Any interpretation that satisfies these 
        axioms is a valid probability model.
      </p>

      <p className="text-dark-300 mb-4">
        This approach, formalized by Andrey Kolmogorov in 1933, provides a rigorous foundation 
        that all interpretations share.
      </p>

      <Example title="Why Axioms Matter">
        <p className="mb-2">
          Consider a weather forecaster who says:
        </p>
        <ul className="list-disc list-inside mb-2 space-y-1">
          <li>P(rain tomorrow) = 0.7</li>
          <li>P(no rain tomorrow) = 0.5</li>
        </ul>
        <p>
          This violates the axioms (probabilities of complementary events must sum to 1), 
          revealing the forecaster's predictions are inconsistent—regardless of interpretation.
        </p>
      </Example>

      <h2 className="text-2xl font-bold text-dark-100 mt-8 mb-4">Chapter Overview</h2>

      <p className="text-dark-300 mb-4">
        In this chapter, we will:
      </p>

      <ul className="list-disc list-inside text-dark-300 mb-6 space-y-2">
        <li><strong>Define experiments and sample spaces</strong> — The formal setting for probability</li>
        <li><strong>Define events</strong> — The things we assign probabilities to</li>
        <li><strong>State the probability axioms</strong> — The rules probability must follow</li>
        <li><strong>Derive basic properties</strong> — Consequences of the axioms</li>
        <li><strong>Calculate probabilities</strong> — Using counting from Chapter 1</li>
      </ul>

      <Definition title="Experiment">
        <p>
          An <strong>experiment</strong> (or <strong>random experiment</strong>) is any process that 
          generates well-defined outcomes. We cannot predict with certainty which outcome will 
          occur, but we can describe the set of all possible outcomes.
        </p>
      </Definition>

      <Example title="Examples of Experiments">
        <ul className="list-disc list-inside space-y-1">
          <li>Tossing a coin (outcomes: heads, tails)</li>
          <li>Rolling a die (outcomes: 1, 2, 3, 4, 5, 6)</li>
          <li>Measuring the lifetime of a light bulb (outcomes: positive real numbers)</li>
          <li>Recording tomorrow's stock price (outcomes: non-negative real numbers)</li>
          <li>Counting arrivals at a store in an hour (outcomes: 0, 1, 2, 3, ...)</li>
        </ul>
      </Example>

      <p className="text-dark-300 mb-4">
        The key insight is that while individual outcomes are unpredictable, we can describe 
        and analyze the patterns that emerge over many repetitions.
      </p>
    </LessonLayout>
  );
}
