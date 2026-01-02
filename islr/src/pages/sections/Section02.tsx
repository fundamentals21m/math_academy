import { LessonLayout } from '@/components/layout/LessonLayout';
import { SectionQuiz } from '@/components/quiz/SectionQuiz';
import { section02Quiz } from '@/data/quizzes';
import { Callout } from '@/components/common/Callout';
import { Definition, Theorem, Example } from '@/components/common/ContentBlocks';
import { InlineMath, MathBlock } from '@/components/common/MathBlock';

export default function Section02() {
  return (
    <LessonLayout sectionId={2}>
      <h2>The Statistical Learning Framework</h2>

      <p>
        Suppose we observe a quantitative response <InlineMath>Y</InlineMath> and <InlineMath>p</InlineMath> different 
        predictors, <InlineMath>X_1, X_2, \ldots, X_p</InlineMath>. We assume that there is some 
        relationship between <InlineMath>Y</InlineMath> and <InlineMath>X = (X_1, X_2, \ldots, X_p)</InlineMath>, 
        which can be written in the very general form:
      </p>

      <MathBlock>{`Y = f(X) + \\epsilon`}</MathBlock>

      <Definition title="The Statistical Learning Model">
        <p>
          Here <InlineMath>f</InlineMath> is some fixed but unknown function of <InlineMath>X_1, \ldots, X_p</InlineMath>, 
          and <InlineMath>\epsilon</InlineMath> is a random <em>error term</em>, which is independent 
          of <InlineMath>X</InlineMath> and has mean zero.
        </p>
        <p className="mt-2">
          In this formulation, <InlineMath>f</InlineMath> represents the <em>systematic</em> information 
          that <InlineMath>X</InlineMath> provides about <InlineMath>Y</InlineMath>.
        </p>
      </Definition>

      <h2>Example: Income and Education</h2>

      <p>
        Consider a study examining the relationship between years of education, seniority, 
        and income. The response variable is <InlineMath>{"Y = \\text{income}"}</InlineMath>, and the 
        predictors are <InlineMath>{"X_1 = \\text{years of education}"}</InlineMath> and <InlineMath>{"X_2 = \\text{seniority}"}</InlineMath>.
      </p>

      <Example title="Income Prediction">
        <p>
          Suppose we have collected data on 30 individuals. We might model income as:
        </p>
        <MathBlock>{`\\text{Income} = f(\\text{Education}, \\text{Seniority}) + \\epsilon`}</MathBlock>
        <p className="mt-2">
          The function <InlineMath>f</InlineMath> might be a surface in 3D space, where different 
          combinations of education and seniority map to different expected incomes.
        </p>
      </Example>

      <h2>Why Estimate <InlineMath>f</InlineMath>?</h2>

      <p>
        There are two main reasons we may wish to estimate <InlineMath>f</InlineMath>: <strong>prediction</strong> and <strong>inference</strong>. 
        Depending on whether our ultimate goal is prediction, inference, or some combination 
        of the two, different methods for estimating <InlineMath>f</InlineMath> may be appropriate.
      </p>

      <h3>Prediction</h3>

      <p>
        In many situations, a set of inputs <InlineMath>X</InlineMath> are readily available, but the 
        output <InlineMath>Y</InlineMath> cannot be easily obtained. In this setting, since the error 
        term averages to zero, we can predict <InlineMath>Y</InlineMath> using:
      </p>

      <MathBlock>{`\\hat{Y} = \\hat{f}(X)`}</MathBlock>

      <p>
        where <InlineMath>\hat f</InlineMath> represents our estimate for <InlineMath>f</InlineMath>, 
        and <InlineMath>\hat Y</InlineMath> represents the resulting prediction for <InlineMath>Y</InlineMath>.
      </p>

      <Definition title="Reducible and Irreducible Error">
        <p>
          The accuracy of <InlineMath>\hat Y</InlineMath> as a prediction for <InlineMath>Y</InlineMath> depends 
          on two quantities:
        </p>
        <ul className="list-disc list-inside mt-2 space-y-1">
          <li>
            <strong>Reducible error:</strong> The error that arises because <InlineMath>\hat f</InlineMath> is 
            not a perfect estimate for <InlineMath>f</InlineMath>. This can potentially be reduced by 
            using a more appropriate statistical learning technique.
          </li>
          <li>
            <strong>Irreducible error:</strong> The error that arises from <InlineMath>\epsilon</InlineMath>. 
            Even if we could perfectly estimate <InlineMath>f</InlineMath>, we could not perfectly 
            predict <InlineMath>Y</InlineMath> because <InlineMath>\epsilon</InlineMath> cannot be predicted using <InlineMath>X</InlineMath>.
          </li>
        </ul>
      </Definition>

      <p>
        Why is the irreducible error larger than zero? The quantity <InlineMath>\epsilon</InlineMath> may 
        contain unmeasured variables that are useful in predicting <InlineMath>Y</InlineMath>: since we 
        don't measure them, <InlineMath>f</InlineMath> cannot use them for its prediction. It may also 
        contain unmeasurable variation.
      </p>

      <Theorem title="Decomposition of Expected Prediction Error">
        <p>
          Consider a given estimate <InlineMath>\hat f</InlineMath> and a set of predictors <InlineMath>X</InlineMath>, 
          which yields the prediction <InlineMath>\hat Y = \hat f(X)</InlineMath>. Assuming <InlineMath>\hat f</InlineMath> and <InlineMath>X</InlineMath> are 
          fixed, we can show that:
        </p>
        <MathBlock>{`E[(Y - \\hat{Y})^2] = E[(f(X) + \\epsilon - \\hat{f}(X))^2]`}</MathBlock>
        <MathBlock>{`= \\underbrace{[f(X) - \\hat{f}(X)]^2}_{\\text{Reducible}} + \\underbrace{\\text{Var}(\\epsilon)}_{\\text{Irreducible}}`}</MathBlock>
      </Theorem>

      <Callout type="warning">
        <strong>Key Insight:</strong> The irreducible error provides an upper bound on the 
        accuracy of our prediction for <InlineMath>Y</InlineMath>. This bound is almost always unknown 
        in practice, but it reminds us that prediction will never be perfect.
      </Callout>

      <h3>Inference</h3>

      <p>
        We are often interested in understanding the <em>relationship</em> between <InlineMath>X</InlineMath> and <InlineMath>Y</InlineMath>, 
        rather than just predicting <InlineMath>Y</InlineMath>. In this situation we wish to 
        estimate <InlineMath>f</InlineMath>, but our goal is not necessarily to make predictions.
      </p>

      <p>We instead want to understand:</p>

      <div className="space-y-3 my-6">
        <div className="bg-dark-800/50 rounded-xl p-4 border border-dark-700">
          <h4 className="text-emerald-400 font-semibold mb-2">Which predictors are associated with the response?</h4>
          <p className="text-dark-300 text-sm">
            It is often the case that only a small fraction of the available predictors 
            are substantially associated with <InlineMath>Y</InlineMath>. Identifying these predictors 
            is often valuable.
          </p>
        </div>
        <div className="bg-dark-800/50 rounded-xl p-4 border border-dark-700">
          <h4 className="text-blue-400 font-semibold mb-2">What is the relationship between the response and each predictor?</h4>
          <p className="text-dark-300 text-sm">
            Some predictors may have a positive relationship with <InlineMath>Y</InlineMath>, while 
            others have a negative relationship. The relationship may also depend on the 
            values of other predictors.
          </p>
        </div>
        <div className="bg-dark-800/50 rounded-xl p-4 border border-dark-700">
          <h4 className="text-amber-400 font-semibold mb-2">Can the relationship be summarized using a linear equation?</h4>
          <p className="text-dark-300 text-sm">
            Or is the relationship more complicated? Linear models are easier to interpret, 
            but may not capture the true relationship accurately.
          </p>
        </div>
      </div>

      <h2>How Do We Estimate <InlineMath>f</InlineMath>?</h2>

      <p>
        Our goal is to apply a statistical learning method to the training data in order 
        to estimate the unknown function <InlineMath>f</InlineMath>. In broad terms, most statistical 
        learning methods can be characterized as either <em>parametric</em> or <em>non-parametric</em>.
      </p>

      <h3>Parametric Methods</h3>

      <p>
        Parametric methods involve a two-step model-based approach:
      </p>

      <div className="my-6 p-5 bg-gradient-to-br from-blue-500/10 to-blue-600/5 rounded-xl border border-blue-500/20">
        <h4 className="text-blue-400 font-semibold mb-3">Two-Step Parametric Approach</h4>
        <ol className="list-decimal list-inside space-y-3 text-dark-300">
          <li>
            <strong>Make an assumption about the functional form of <InlineMath>f</InlineMath>.</strong>
            <p className="ml-6 mt-1 text-dark-400 text-sm">
              For example, we might assume that <InlineMath>f</InlineMath> is linear in <InlineMath>X</InlineMath>:
            </p>
            <div className="ml-6 mt-2">
              <MathBlock>{`f(X) = \\beta_0 + \\beta_1 X_1 + \\beta_2 X_2 + \\cdots + \\beta_p X_p`}</MathBlock>
            </div>
          </li>
          <li>
            <strong>Use the training data to <em>fit</em> or <em>train</em> the model.</strong>
            <p className="ml-6 mt-1 text-dark-400 text-sm">
              Estimate the parameters <InlineMath>\beta_0, \beta_1, \ldots, \beta_p</InlineMath> such that:
            </p>
            <div className="ml-6 mt-2">
              <MathBlock>{`Y \\approx \\beta_0 + \\beta_1 X_1 + \\cdots + \\beta_p X_p`}</MathBlock>
            </div>
          </li>
        </ol>
      </div>

      <Callout type="info">
        <strong>Advantage:</strong> Estimating a set of parameters is much simpler than 
        fitting an entirely arbitrary function <InlineMath>f</InlineMath>.
        <br /><br />
        <strong>Disadvantage:</strong> The model we choose will usually not match the true 
        unknown form of <InlineMath>f</InlineMath>. If the chosen model is too far from the true <InlineMath>f</InlineMath>, 
        our estimate will be poor.
      </Callout>

      <h3>Non-Parametric Methods</h3>

      <p>
        Non-parametric methods do not make explicit assumptions about the functional form 
        of <InlineMath>f</InlineMath>. Instead, they seek an estimate of <InlineMath>f</InlineMath> that gets as 
        close to the data points as possible without being too rough or wiggly.
      </p>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 my-6">
        <div className="bg-dark-800/50 rounded-xl p-4 border border-emerald-500/30">
          <h4 className="text-emerald-400 font-semibold mb-2">Advantages</h4>
          <ul className="list-disc list-inside text-dark-300 text-sm space-y-1">
            <li>Can accurately fit a wider range of shapes for <InlineMath>f</InlineMath></li>
            <li>No assumptions about functional form needed</li>
            <li>More flexible than parametric approaches</li>
          </ul>
        </div>
        <div className="bg-dark-800/50 rounded-xl p-4 border border-amber-500/30">
          <h4 className="text-amber-400 font-semibold mb-2">Disadvantages</h4>
          <ul className="list-disc list-inside text-dark-300 text-sm space-y-1">
            <li>Requires a very large number of observations</li>
            <li>Can overfit if not carefully tuned</li>
            <li>Harder to interpret than parametric models</li>
          </ul>
        </div>
      </div>

      <h2>The Trade-Off Between Flexibility and Interpretability</h2>

      <p>
        There is often a trade-off between <em>flexibility</em> and <em>interpretability</em>. 
        Linear regression is relatively inflexible but very interpretable. Methods like 
        thin-plate splines or neural networks are more flexible but harder to interpret.
      </p>

      <div className="my-6 p-4 bg-dark-800/50 rounded-xl border border-dark-700">
        <h4 className="text-dark-200 font-semibold mb-3 text-center">Flexibility vs. Interpretability Spectrum</h4>
        <div className="flex items-center justify-between text-sm">
          <div className="text-center">
            <div className="text-emerald-400 font-semibold">Low Flexibility</div>
            <div className="text-dark-400">High Interpretability</div>
            <div className="text-dark-500 mt-1">Subset Selection, Lasso</div>
          </div>
          <div className="flex-1 mx-4 h-2 bg-gradient-to-r from-emerald-500 via-amber-500 to-red-500 rounded-full" />
          <div className="text-center">
            <div className="text-red-400 font-semibold">High Flexibility</div>
            <div className="text-dark-400">Low Interpretability</div>
            <div className="text-dark-500 mt-1">Neural Networks, SVMs</div>
          </div>
        </div>
      </div>

      <p>
        Why would we ever choose a more restrictive method instead of a very flexible approach? 
        There are several reasons:
      </p>

      <ul className="list-disc list-inside text-dark-300 space-y-2 my-4">
        <li>If we are mainly interested in <strong>inference</strong>, restrictive models are much more interpretable</li>
        <li>Highly flexible methods can <strong>overfit</strong> the training data, performing poorly on new data</li>
        <li>Simple models often perform just as well as complex ones, especially with limited data</li>
      </ul>

      <h2>Supervised vs. Unsupervised Learning</h2>

      <p>
        Most statistical learning problems fall into one of two categories: 
        <em>supervised</em> or <em>unsupervised</em>.
      </p>

      <Definition title="Supervised Learning">
        <p>
          For each observation of the predictor measurement(s) <InlineMath>x_i</InlineMath>, <InlineMath>i = 1, \ldots, n</InlineMath>, 
          there is an associated response measurement <InlineMath>y_i</InlineMath>.
        </p>
        <p className="mt-2">
          We wish to fit a model that relates the response to the predictors, with the aim 
          of accurately predicting the response for future observations (prediction) or 
          better understanding the relationship between the response and the predictors (inference).
        </p>
      </Definition>

      <Definition title="Unsupervised Learning">
        <p>
          For every observation <InlineMath>i = 1, \ldots, n</InlineMath>, we observe a vector of 
          measurements <InlineMath>x_i</InlineMath> but no associated response <InlineMath>y_i</InlineMath>.
        </p>
        <p className="mt-2">
          We cannot fit a linear regression model since there is no response variable to predict. 
          Instead, we seek to understand the relationships between the variables or between 
          the observations.
        </p>
      </Definition>

      <Example title="Clustering">
        <p>
          One important tool in unsupervised learning is <em>cluster analysis</em>. The goal 
          is to ascertain, on the basis of <InlineMath>x_1, \ldots, x_n</InlineMath>, whether the 
          observations fall into relatively distinct groups.
        </p>
        <p className="mt-2">
          For example, in a market segmentation study, we might observe multiple characteristics 
          for potential customers and try to identify clusters of similar customers.
        </p>
      </Example>

      <h2>Regression vs. Classification Problems</h2>

      <p>
        Variables can be characterized as either <em>quantitative</em> or <em>qualitative</em> 
        (also known as <em>categorical</em>).
      </p>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 my-6">
        <div className="bg-gradient-to-br from-emerald-500/10 to-emerald-600/5 rounded-xl p-5 border border-emerald-500/20">
          <h4 className="text-emerald-400 font-semibold mb-2">Quantitative Variables</h4>
          <p className="text-dark-300 text-sm mb-2">
            Take on numerical values. Examples:
          </p>
          <ul className="list-disc list-inside text-dark-400 text-sm">
            <li>Age, height, income</li>
            <li>Temperature, price</li>
            <li>Number of items sold</li>
          </ul>
        </div>
        <div className="bg-gradient-to-br from-blue-500/10 to-blue-600/5 rounded-xl p-5 border border-blue-500/20">
          <h4 className="text-blue-400 font-semibold mb-2">Qualitative Variables</h4>
          <p className="text-dark-300 text-sm mb-2">
            Take on values in one of <InlineMath>K</InlineMath> different classes. Examples:
          </p>
          <ul className="list-disc list-inside text-dark-400 text-sm">
            <li>Gender (male/female)</li>
            <li>Brand purchased</li>
            <li>Cancer diagnosis (yes/no)</li>
          </ul>
        </div>
      </div>

      <Definition title="Regression and Classification">
        <p>
          Problems with a <strong>quantitative response</strong> are referred to 
          as <strong>regression</strong> problems.
        </p>
        <p className="mt-2">
          Problems involving a <strong>qualitative response</strong> are often referred to 
          as <strong>classification</strong> problems.
        </p>
      </Definition>

      <Callout type="success">
        <strong>Up Next:</strong> In the next section, we'll explore how to assess the 
        accuracy of statistical learning models, introducing the crucial concept of the 
        bias-variance tradeoff.
      </Callout>

      <SectionQuiz sectionId={2} questions={section02Quiz} title="Statistical Learning Quiz" />
    </LessonLayout>
  );
}
