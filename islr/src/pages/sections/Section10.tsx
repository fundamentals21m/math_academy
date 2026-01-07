import { LessonLayout } from '@/components/layout/LessonLayout';
import { SectionQuiz } from '@/components/quiz/SectionQuiz';
import { section10Quiz } from '@/data/quizzes';
import { Callout } from '@/components/common/Callout';
import { Theorem, Example, Algorithm } from '@/components/common/ContentBlocks';
import { InlineMath, MathBlock } from '@/components/common/MathBlock';

export default function Section10() {
  return (
    <LessonLayout sectionId={10}>
      <h2>Comparison of Linear Regression with K-Nearest Neighbors</h2>

      <p>
        Linear regression is an example of a <em>parametric</em> approach—we assume a specific 
        functional form (linear) for <InlineMath>f(X)</InlineMath>. An alternative is a <em>non-parametric</em> approach, 
        which makes fewer assumptions about the form of <InlineMath>f</InlineMath>. One of the simplest 
        non-parametric methods is <strong>K-nearest neighbors</strong> (KNN) regression.
      </p>

      <h2>K-Nearest Neighbors Regression</h2>

      <p>
        KNN regression identifies the <InlineMath>K</InlineMath> training observations that are closest 
        to a test observation <InlineMath>x_0</InlineMath> and estimates <InlineMath>f(x_0)</InlineMath> using the 
        average of their response values.
      </p>

      <Algorithm title="KNN Regression">
        <p>Given a value for <InlineMath>K</InlineMath> and a prediction point <InlineMath>x_0</InlineMath>:</p>
        <ol className="list-decimal list-inside mt-2 space-y-2">
          <li>Identify the <InlineMath>K</InlineMath> training observations closest to <InlineMath>x_0</InlineMath> (call this set <InlineMath>{`\\mathcal{N}_0`}</InlineMath>)</li>
          <li>Estimate <InlineMath>f(x_0)</InlineMath> as the average of the responses in <InlineMath>{`\\mathcal{N}_0`}</InlineMath>:
            <MathBlock>{`\\hat{f}(x_0) = \\frac{1}{K} \\sum_{i \\in \\mathcal{N}_0} y_i`}</MathBlock>
          </li>
        </ol>
      </Algorithm>

      <h3>Choosing K</h3>

      <p>
        The choice of <InlineMath>K</InlineMath> controls the flexibility of the KNN fit:
      </p>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 my-6">
        <div className="p-4 bg-dark-800/50 rounded-xl border border-blue-500/30">
          <h4 className="text-blue-400 font-semibold mb-2">Small K (e.g., K = 1)</h4>
          <ul className="list-disc list-inside text-dark-300 text-sm space-y-1">
            <li>Very flexible fit</li>
            <li>Low bias, high variance</li>
            <li>Rough, jagged predictions</li>
            <li>Risk of overfitting</li>
          </ul>
        </div>
        <div className="p-4 bg-dark-800/50 rounded-xl border border-amber-500/30">
          <h4 className="text-amber-400 font-semibold mb-2">Large K (e.g., K = 100)</h4>
          <ul className="list-disc list-inside text-dark-300 text-sm space-y-1">
            <li>Inflexible fit</li>
            <li>High bias, low variance</li>
            <li>Smooth predictions</li>
            <li>Risk of underfitting</li>
          </ul>
        </div>
      </div>

      <h2>Comparing KNN and Linear Regression</h2>

      <p>
        Which method is better? The answer depends on the true relationship between <InlineMath>X</InlineMath> and <InlineMath>Y</InlineMath>.
      </p>

      <h3>When Linear Regression Wins</h3>

      <Example title="True Linear Relationship">
        <p>
          When the true relationship is linear (or close to linear), linear regression 
          will outperform KNN because:
        </p>
        <ul className="list-disc list-inside text-dark-300 mt-2 space-y-1">
          <li>Linear regression makes the correct assumption about <InlineMath>f</InlineMath></li>
          <li>KNN estimates are inherently more variable</li>
          <li>Linear regression uses all data points to estimate the relationship</li>
        </ul>
        <p className="mt-2 text-dark-400 text-sm">
          Even with slight non-linearity, linear regression often performs comparably 
          because its lower variance offsets its higher bias.
        </p>
      </Example>

      <h3>When KNN Wins</h3>

      <Example title="Highly Non-Linear Relationship">
        <p>
          When the true relationship is substantially non-linear:
        </p>
        <ul className="list-disc list-inside text-dark-300 mt-2 space-y-1">
          <li>Linear regression's bias dominates, leading to poor predictions</li>
          <li>KNN can adapt to the non-linearity</li>
          <li>With enough data, KNN can closely approximate any <InlineMath>f</InlineMath></li>
        </ul>
        <p className="mt-2 text-dark-400 text-sm">
          However, KNN requires more data to achieve good performance in non-linear settings.
        </p>
      </Example>

      <h2>The Curse of Dimensionality</h2>

      <p>
        A major limitation of KNN is that it suffers from the <em>curse of dimensionality</em>. 
        As the number of predictors <InlineMath>p</InlineMath> grows, the performance of KNN rapidly deteriorates.
      </p>

      <Theorem title="The Curse of Dimensionality">
        <p>
          In high dimensions, even a large training set may not provide many "nearby" 
          observations. As <InlineMath>p</InlineMath> increases:
        </p>
        <ul className="list-disc list-inside mt-2 space-y-1">
          <li>The nearest neighbors become increasingly far away</li>
          <li>These neighbors may not be very similar to the test point</li>
          <li>The bias of KNN increases</li>
        </ul>
        <p className="mt-2">
          With <InlineMath>p = 20</InlineMath> predictors, KNN often performs poorly even with large <InlineMath>n</InlineMath>.
        </p>
      </Theorem>

      <div className="my-6 p-5 bg-dark-800/50 rounded-xl border border-dark-700">
        <h4 className="text-dark-200 font-semibold mb-3">Intuition: Why Does Dimension Hurt KNN?</h4>
        <p className="text-dark-300 text-sm mb-3">
          Imagine you want 10% of the data to be "near" a test point:
        </p>
        <ul className="space-y-2 text-dark-400 text-sm">
          <li><strong>p = 1:</strong> Need 10% of the range of each predictor → side length = 0.10</li>
          <li><strong>p = 2:</strong> Need <InlineMath>{`\\sqrt{0.10}`}</InlineMath> = 0.32 of each dimension</li>
          <li><strong>p = 10:</strong> Need <InlineMath>{`0.10^{1/10}`}</InlineMath> = 0.79 of each dimension!</li>
        </ul>
        <p className="mt-3 text-dark-500 text-sm">
          In high dimensions, to get any neighbors at all, we must look over almost the 
          entire range of each predictor—the neighbors aren't really "near"!
        </p>
      </div>

      <h2>Practical Implications</h2>

      <div className="space-y-4 my-6">
        <div className="p-4 bg-gradient-to-br from-emerald-500/10 to-emerald-600/5 rounded-xl border border-emerald-500/20">
          <h4 className="text-emerald-400 font-semibold mb-2">Use Linear Regression When:</h4>
          <ul className="list-disc list-inside text-dark-300 text-sm space-y-1">
            <li>The relationship is approximately linear</li>
            <li>You have many predictors (high <InlineMath>p</InlineMath>)</li>
            <li>Interpretability is important</li>
            <li>You have limited training data</li>
            <li>You need to understand which predictors matter</li>
          </ul>
        </div>

        <div className="p-4 bg-gradient-to-br from-blue-500/10 to-blue-600/5 rounded-xl border border-blue-500/20">
          <h4 className="text-blue-400 font-semibold mb-2">Consider KNN When:</h4>
          <ul className="list-disc list-inside text-dark-300 text-sm space-y-1">
            <li>The relationship is highly non-linear</li>
            <li>You have few predictors (small <InlineMath>p</InlineMath>)</li>
            <li>You have abundant training data</li>
            <li>Interpretability is less important than prediction accuracy</li>
            <li>You don't want to specify a functional form</li>
          </ul>
        </div>
      </div>

      <h2>A Simulation Study</h2>

      <p>
        Consider a comparison where we generate data from different true functions:
      </p>

      <div className="my-6 overflow-x-auto">
        <table className="w-full text-sm">
          <thead>
            <tr className="border-b border-dark-700">
              <th className="text-left py-2 px-3 text-dark-300">True Function</th>
              <th className="text-left py-2 px-3 text-dark-300">Linear Reg MSE</th>
              <th className="text-left py-2 px-3 text-dark-300">KNN-1 MSE</th>
              <th className="text-left py-2 px-3 text-dark-300">KNN-10 MSE</th>
              <th className="text-left py-2 px-3 text-dark-300">Winner</th>
            </tr>
          </thead>
          <tbody className="text-dark-400">
            <tr className="border-b border-dark-800">
              <td className="py-2 px-3">Linear</td>
              <td className="py-2 px-3 text-emerald-400">1.0</td>
              <td className="py-2 px-3">1.8</td>
              <td className="py-2 px-3">1.3</td>
              <td className="py-2 px-3 text-emerald-400">Linear Regression</td>
            </tr>
            <tr className="border-b border-dark-800">
              <td className="py-2 px-3">Slightly Non-linear</td>
              <td className="py-2 px-3 text-emerald-400">1.2</td>
              <td className="py-2 px-3">2.0</td>
              <td className="py-2 px-3">1.5</td>
              <td className="py-2 px-3 text-emerald-400">Linear Regression</td>
            </tr>
            <tr className="border-b border-dark-800">
              <td className="py-2 px-3">Moderately Non-linear</td>
              <td className="py-2 px-3">2.5</td>
              <td className="py-2 px-3">2.2</td>
              <td className="py-2 px-3 text-blue-400">1.8</td>
              <td className="py-2 px-3 text-blue-400">KNN-10</td>
            </tr>
            <tr>
              <td className="py-2 px-3">Highly Non-linear</td>
              <td className="py-2 px-3">5.0</td>
              <td className="py-2 px-3 text-blue-400">1.5</td>
              <td className="py-2 px-3">2.0</td>
              <td className="py-2 px-3 text-blue-400">KNN-1</td>
            </tr>
          </tbody>
        </table>
      </div>

      <Callout type="info">
        <strong>Key Insight:</strong> Even when the true relationship is somewhat non-linear, 
        linear regression can perform well due to its lower variance. KNN only wins decisively 
        when the non-linearity is substantial and we have enough data.
      </Callout>

      <h2>Summary</h2>

      <ul className="list-disc list-inside text-dark-300 space-y-2 my-4">
        <li>
          <strong>Linear regression</strong> is parametric: it assumes a linear functional form 
          and estimates a fixed number of parameters
        </li>
        <li>
          <strong>KNN regression</strong> is non-parametric: it makes no assumptions about 
          the form of <InlineMath>f</InlineMath>
        </li>
        <li>
          Linear regression tends to outperform KNN when the relationship is linear or 
          when <InlineMath>p</InlineMath> is large (curse of dimensionality)
        </li>
        <li>
          KNN can outperform linear regression when the relationship is highly non-linear 
          and <InlineMath>p</InlineMath> is small
        </li>
        <li>
          The optimal choice of <InlineMath>K</InlineMath> in KNN involves a bias-variance tradeoff
        </li>
      </ul>

      <Callout type="success">
        <strong>Chapter Complete!</strong> You've now learned the fundamentals of linear 
        regression—from simple regression with one predictor to multiple regression with 
        interactions and diagnostics. In Chapter 4, we'll explore classification methods 
        for qualitative response variables.
      </Callout>

      <SectionQuiz sectionId={10} questions={section10Quiz} title="KNN Comparison Quiz" />
    </LessonLayout>
  );
}
