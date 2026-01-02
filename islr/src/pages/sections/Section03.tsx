import { LessonLayout } from '@/components/layout/LessonLayout';
import { SectionQuiz } from '@/components/quiz/SectionQuiz';
import { section03Quiz } from '@/data/quizzes';
import { Callout } from '@/components/common/Callout';
import { Definition, Theorem, Example, Algorithm } from '@/components/common/ContentBlocks';
import { InlineMath, MathBlock } from '@/components/common/MathBlock';
import { BiasVarianceTradeoff } from '@/components/visualizers/BiasVarianceTradeoff';

export default function Section03() {
  return (
    <LessonLayout sectionId={3}>
      <h2>Measuring the Quality of Fit</h2>

      <p>
        In order to evaluate the performance of a statistical learning method on a given 
        data set, we need some way to measure how well its predictions actually match the 
        observed data. That is, we need to quantify the extent to which the predicted 
        response value for a given observation is close to the true response value for 
        that observation.
      </p>

      <h3>Mean Squared Error for Regression</h3>

      <p>
        In the regression setting, the most commonly-used measure is the <em>mean squared error</em> (MSE):
      </p>

      <Definition title="Mean Squared Error (MSE)">
        <MathBlock>{`\\text{MSE} = \\frac{1}{n} \\sum_{i=1}^{n} (y_i - \\hat{f}(x_i))^2`}</MathBlock>
        <p className="mt-2">
          where <InlineMath>\hat f(x_i)</InlineMath> is the prediction that <InlineMath>\hat f</InlineMath> gives 
          for the <InlineMath>i</InlineMath>th observation.
        </p>
        <p className="mt-2">
          The MSE will be small if the predicted responses are very close to the true 
          responses, and will be large if for some of the observations, the predicted 
          and true responses differ substantially.
        </p>
      </Definition>

      <h3>Training MSE vs. Test MSE</h3>

      <p>
        The MSE computed using the training data is known as the <em>training MSE</em>. 
        But in general, we do not really care how well the method works on the training data. 
        Instead, we are interested in the accuracy of the predictions when we apply our 
        method to previously unseen <em>test data</em>.
      </p>

      <Callout type="warning">
        <strong>Critical Distinction:</strong> We want to choose the method that gives the 
        lowest <em>test MSE</em>, as opposed to the lowest training MSE. In general, there 
        is no guarantee that the method with the lowest training MSE will also have the 
        lowest test MSE.
      </Callout>

      <Example title="Overfitting">
        <p>
          As model flexibility increases, training MSE will decrease, but the test MSE 
          may not. When a method yields a small training MSE but a large test MSE, we 
          are said to be <strong>overfitting</strong> the data.
        </p>
        <p className="mt-2">
          This happens because our statistical learning procedure is working too hard to 
          find patterns in the training data, and may be picking up patterns that are 
          just caused by random chance rather than true properties of <InlineMath>f</InlineMath>.
        </p>
      </Example>

      <h2>The Bias-Variance Trade-Off</h2>

      <p>
        The expected test MSE for a given value <InlineMath>x_0</InlineMath> can always be decomposed 
        into the sum of three fundamental quantities: the <em>variance</em> of <InlineMath>\hat f(x_0)</InlineMath>, 
        the squared <em>bias</em> of <InlineMath>\hat f(x_0)</InlineMath>, and the variance of the 
        error terms <InlineMath>\epsilon</InlineMath>.
      </p>

      <Theorem title="Bias-Variance Decomposition">
        <MathBlock>{`E\\left[(y_0 - \\hat{f}(x_0))^2\\right] = \\text{Var}(\\hat{f}(x_0)) + [\\text{Bias}(\\hat{f}(x_0))]^2 + \\text{Var}(\\epsilon)`}</MathBlock>
        <p className="mt-3">
          Here the notation <InlineMath>E[(y_0 - \hat f(x_0))^2]</InlineMath> defines the <em>expected test MSE</em> 
          at <InlineMath>x_0</InlineMath>, and refers to the average test MSE that we would obtain 
          if we repeatedly estimated <InlineMath>f</InlineMath> using a large number of training sets, 
          and tested each at <InlineMath>x_0</InlineMath>.
        </p>
      </Theorem>

      <Definition title="Variance">
        <p>
          <strong>Variance</strong> refers to the amount by which <InlineMath>\hat f</InlineMath> would 
          change if we estimated it using a different training data set.
        </p>
        <p className="mt-2">
          Since the training data are used to fit the statistical learning method, different 
          training data sets will result in a different <InlineMath>\hat f</InlineMath>. Ideally, the 
          estimate should not vary too much between training sets.
        </p>
        <p className="mt-2 text-dark-400">
          In general, <strong>more flexible methods have higher variance</strong>.
        </p>
      </Definition>

      <Definition title="Bias">
        <p>
          <strong>Bias</strong> refers to the error that is introduced by approximating a 
          real-life problem, which may be extremely complicated, by a much simpler model.
        </p>
        <p className="mt-2">
          For example, linear regression assumes that there is a linear relationship 
          between <InlineMath>Y</InlineMath> and <InlineMath>X</InlineMath>. It is unlikely that any real-life 
          problem truly has such a simple linear relationship, and so the linear regression 
          will introduce some bias.
        </p>
        <p className="mt-2 text-dark-400">
          In general, <strong>more flexible methods result in less bias</strong>.
        </p>
      </Definition>

      <h3>Interactive Visualization: The Trade-Off</h3>

      <p>
        The relationship between model flexibility, bias, and variance is fundamental to 
        understanding statistical learning. Use the slider below to see how changing model 
        flexibility affects these components:
      </p>

      <div className="my-6">
        <BiasVarianceTradeoff />
      </div>

      <Callout type="info">
        <strong>The Challenge:</strong> As we use more flexible methods, the variance will 
        increase and the bias will decrease. The relative rate of change of these two 
        quantities determines whether the test MSE increases or decreases.
      </Callout>

      <h3>Finding the Sweet Spot</h3>

      <p>
        As we increase the flexibility of a class of methods, the bias tends to initially 
        decrease faster than the variance increases. Consequently, the expected test MSE 
        declines. However, at some point increasing flexibility has little impact on the 
        bias but starts to significantly increase the variance.
      </p>

      <div className="my-6 p-5 bg-dark-800/50 rounded-xl border border-dark-700">
        <h4 className="text-dark-200 font-semibold mb-3">Key Observations</h4>
        <ul className="space-y-2 text-dark-300">
          <li className="flex items-start gap-2">
            <span className="text-emerald-400 mt-1">→</span>
            <span><strong>Too simple</strong> (high bias, low variance): Underfitting - fails to capture important patterns</span>
          </li>
          <li className="flex items-start gap-2">
            <span className="text-amber-400 mt-1">→</span>
            <span><strong>Just right</strong>: Optimal balance between bias and variance</span>
          </li>
          <li className="flex items-start gap-2">
            <span className="text-red-400 mt-1">→</span>
            <span><strong>Too complex</strong> (low bias, high variance): Overfitting - picks up random noise as patterns</span>
          </li>
        </ul>
      </div>

      <h2>The Classification Setting</h2>

      <p>
        The concepts discussed so far have focused on the regression setting. We now 
        consider the classification setting, where the response variable <InlineMath>Y</InlineMath> is 
        qualitative.
      </p>

      <h3>Training Error Rate</h3>

      <p>
        The most common approach for quantifying the accuracy of our estimate <InlineMath>\hat f</InlineMath> is 
        the <em>training error rate</em>, the proportion of mistakes made when applying 
        <InlineMath>\hat f</InlineMath> to the training observations:
      </p>

      <Definition title="Training Error Rate">
        <MathBlock>{`\\frac{1}{n} \\sum_{i=1}^{n} I(y_i \\neq \\hat{y}_i)`}</MathBlock>
        <p className="mt-2">
          Here <InlineMath>\hat y_i</InlineMath> is the predicted class label for the <InlineMath>i</InlineMath>th 
          observation using <InlineMath>\hat f</InlineMath>, and <InlineMath>I(y_i \neq \hat y_i)</InlineMath> is 
          an <em>indicator variable</em> that equals 1 if <InlineMath>y_i \neq \hat y_i</InlineMath> and 
          zero if <InlineMath>y_i = \hat y_i</InlineMath>.
        </p>
      </Definition>

      <p>
        As in the regression setting, we are most interested in the error rates that 
        result from applying our classifier to test observations that were not used in training.
      </p>

      <Definition title="Test Error Rate">
        <MathBlock>{`\\text{Ave}(I(y_0 \\neq \\hat{y}_0))`}</MathBlock>
        <p className="mt-2">
          where <InlineMath>\hat y_0</InlineMath> is the predicted class label that results from applying 
          the classifier to the test observation with predictor <InlineMath>x_0</InlineMath>.
        </p>
      </Definition>

      <h3>The Bayes Classifier</h3>

      <p>
        It is possible to show that the test error rate is minimized, on average, by a very 
        simple classifier that assigns each observation to the most likely class, given 
        its predictor values.
      </p>

      <Definition title="Bayes Classifier">
        <p>
          The Bayes classifier assigns a test observation with predictor vector <InlineMath>x_0</InlineMath> to 
          the class <InlineMath>j</InlineMath> for which the conditional probability is largest:
        </p>
        <MathBlock>{`\\Pr(Y = j \\,|\\, X = x_0)`}</MathBlock>
        <p className="mt-2">
          In a two-class problem where there are only two possible response values (0 or 1), 
          the Bayes classifier corresponds to predicting class 1 if <InlineMath>{"\\Pr(Y = 1 | X = x_0) > 0.5"}</InlineMath>, 
          and class 0 otherwise.
        </p>
      </Definition>

      <Theorem title="Bayes Error Rate">
        <p>
          The Bayes classifier produces the lowest possible test error rate, called the 
          <strong> Bayes error rate</strong>:
        </p>
        <MathBlock>{`1 - E\\left[\\max_j \\Pr(Y = j \\,|\\, X)\\right]`}</MathBlock>
        <p className="mt-2">
          The Bayes error rate is analogous to the irreducible error in regression. It 
          represents the best possible classification error rate.
        </p>
      </Theorem>

      <Callout type="warning">
        <strong>In Practice:</strong> For real data, we do not know the conditional 
        distribution of <InlineMath>Y</InlineMath> given <InlineMath>X</InlineMath>, so computing the Bayes 
        classifier is impossible. The Bayes classifier serves as an unattainable gold 
        standard against which to compare other methods.
      </Callout>

      <h3>K-Nearest Neighbors</h3>

      <p>
        One of the most intuitive classifiers is <em>K-Nearest Neighbors</em> (KNN). Given 
        a positive integer <InlineMath>K</InlineMath> and a test observation <InlineMath>x_0</InlineMath>, the KNN 
        classifier first identifies the <InlineMath>K</InlineMath> points in the training data that 
        are closest to <InlineMath>x_0</InlineMath>, then estimates the conditional probability as the 
        fraction of points in this neighborhood belonging to each class.
      </p>

      <Algorithm title="K-Nearest Neighbors Classifier">
        <ol className="list-decimal list-inside space-y-2">
          <li>Given a test observation <InlineMath>x_0</InlineMath>, identify the <InlineMath>K</InlineMath> training 
              observations closest to <InlineMath>x_0</InlineMath> (call this set <InlineMath>\mathcal N_0</InlineMath>)</li>
          <li>Estimate the conditional probability for class <InlineMath>j</InlineMath> as:
            <MathBlock>{`\\Pr(Y = j \\,|\\, X = x_0) = \\frac{1}{K} \\sum_{i \\in \\mathcal{N}_0} I(y_i = j)`}</MathBlock>
          </li>
          <li>Apply Bayes rule: classify <InlineMath>x_0</InlineMath> to the class with the largest probability</li>
        </ol>
      </Algorithm>

      <p>
        The choice of <InlineMath>K</InlineMath> has a drastic effect on the KNN classifier:
      </p>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 my-6">
        <div className="bg-dark-800/50 rounded-xl p-4 border border-blue-500/30">
          <h4 className="text-blue-400 font-semibold mb-2">Small K (e.g., K = 1)</h4>
          <ul className="list-disc list-inside text-dark-300 text-sm space-y-1">
            <li>Very flexible decision boundary</li>
            <li>Low bias, high variance</li>
            <li>Risk of overfitting</li>
          </ul>
        </div>
        <div className="bg-dark-800/50 rounded-xl p-4 border border-amber-500/30">
          <h4 className="text-amber-400 font-semibold mb-2">Large K (e.g., K = 100)</h4>
          <ul className="list-disc list-inside text-dark-300 text-sm space-y-1">
            <li>Nearly linear decision boundary</li>
            <li>High bias, low variance</li>
            <li>Risk of underfitting</li>
          </ul>
        </div>
      </div>

      <Callout type="success">
        <strong>Connection to Regression:</strong> Just as in regression, there is a 
        bias-variance trade-off in classification. The training error rate declines as 
        <InlineMath>K</InlineMath> decreases (more flexibility), but the test error rate may not.
      </Callout>

      <h2>Summary</h2>

      <p>
        This section introduced the fundamental concepts for assessing model accuracy:
      </p>

      <ul className="list-disc list-inside text-dark-300 space-y-2 my-4">
        <li>The distinction between training error and test error</li>
        <li>The bias-variance trade-off and its implications for model selection</li>
        <li>The Bayes classifier as the optimal (but unattainable) classifier</li>
        <li>K-Nearest Neighbors as a simple, intuitive classification method</li>
      </ul>

      <Callout type="info">
        <strong>Coming Up:</strong> In the next section, we'll get hands-on with R and 
        learn the basic commands needed to implement statistical learning methods. After 
        that, we'll dive into linear regression—the foundation of many more advanced methods.
      </Callout>

      <SectionQuiz sectionId={3} questions={section03Quiz} title="Model Accuracy Quiz" />
    </LessonLayout>
  );
}
