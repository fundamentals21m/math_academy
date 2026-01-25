import { LessonLayout } from '@/components/layout/LessonLayout';
import { Callout } from '@/components/common/Callout';
import { MathBlock, InlineMath } from '@/components/common/MathBlock';

export default function Section163() {
  return (
    <LessonLayout sectionId={163}>
      <h2>Introduction to the Calculus of Probabilities</h2>

      <p>
        In the previous chapter, we developed the axiomatic foundations of
        probability theory. Now we introduce the powerful tools of calculus to
        study probability distributions, expectations, and limit theorems. This
        fusion of probability with analysis creates the <strong>calculus of
        probabilities</strong>.
      </p>

      <h3>From Set Functions to Random Variables</h3>

      <p>
        Until now, we have focused on probability as a set function{' '}
        <InlineMath>P</InlineMath> defined on events. The next conceptual leap
        is to study <strong>random variables</strong>—functions that assign
        numerical values to outcomes—and their <strong>distributions</strong>.
      </p>

      <p>
        This shift in perspective allows us to apply the full power of calculus:
        integration for computing probabilities, differentiation for finding
        density functions, and infinite series for discrete distributions.
      </p>

      <h3>Motivating Questions</h3>

      <p>
        Consider breaking a stick at a random point. Several natural questions
        arise:
      </p>

      <ul>
        <li>What is the probability that the left piece is longer than the right?</li>
        <li>What is the expected ratio of the pieces?</li>
        <li>How do we compute the distribution of this ratio?</li>
      </ul>

      <p>
        Or consider repeated coin tosses: What happens to the proportion of
        heads as we toss more and more times? Does it converge to{' '}
        <InlineMath>1/2</InlineMath>? In what sense?
      </p>

      <h3>The Main Topics</h3>

      <Callout type="info">
        <strong>Chapter Overview:</strong> This chapter develops the following
        key concepts:
        <ul>
          <li><strong>Random variables</strong> and their distribution functions</li>
          <li><strong>Discrete distributions</strong>: probability mass functions</li>
          <li><strong>Continuous distributions</strong>: probability density functions</li>
          <li><strong>Important distributions</strong>: uniform, exponential, normal</li>
          <li><strong>Expectation and variance</strong>: center and spread</li>
          <li><strong>Chebyshev's inequality</strong>: bounding deviations</li>
          <li><strong>Laws of large numbers</strong>: convergence of averages</li>
          <li><strong>Central limit theorem</strong>: universal bell curves</li>
        </ul>
      </Callout>

      <h3>The Role of Calculus</h3>

      <p>
        Calculus enters probability theory in several essential ways:
      </p>

      <MathBlock>
        {`\\text{Probability} = \\int_a^b f(x)\\,dx \\quad \\text{(continuous case)}`}
      </MathBlock>

      <MathBlock>
        {`\\text{Expectation} = \\int_{-\\infty}^{\\infty} x f(x)\\,dx`}
      </MathBlock>

      <MathBlock>
        {`\\text{Density} = \\frac{d}{dx} F(x) \\quad \\text{(when differentiable)}`}
      </MathBlock>

      <p>
        For discrete distributions, sums replace integrals:
      </p>

      <MathBlock>
        {`\\text{Expectation} = \\sum_{k} x_k P(X = x_k)`}
      </MathBlock>

      <h3>Historical Context</h3>

      <p>
        The calculus of probabilities developed through contributions from many
        mathematicians:
      </p>

      <ul>
        <li><strong>Laplace</strong> (1749–1827): systematic development of probability calculus</li>
        <li><strong>Gauss</strong> (1777–1855): normal distribution and error theory</li>
        <li><strong>Chebyshev</strong> (1821–1894): inequalities and moment methods</li>
        <li><strong>Kolmogorov</strong> (1903–1987): rigorous axiomatic foundations</li>
      </ul>

      <Callout type="success">
        <strong>Key Insight:</strong> The calculus of probabilities transforms
        abstract probability theory into a computational discipline. By
        representing probabilities as integrals and expectations as weighted
        averages, we gain access to the powerful techniques of mathematical
        analysis. This chapter demonstrates how differentiation, integration,
        and limit theorems provide deep insights into random phenomena.
      </Callout>
    </LessonLayout>
  );
}
