import { LessonLayout } from '@/components/layout/LessonLayout';
import { Callout } from '@/components/common/Callout';
import { Definition } from '@/components/common/ContentBlocks';
import { Math, MathBlock } from '@/components/common/MathBlock';

export default function Section01() {
  return (
    <LessonLayout sectionId={1}>
      <h2>What is Statistical Learning?</h2>

      <p>
        Statistical learning refers to a vast set of tools for <em>understanding data</em>. 
        These tools can be classified as <strong>supervised</strong> or <strong>unsupervised</strong>. 
        Broadly speaking, supervised statistical learning involves building a statistical model 
        for predicting or estimating an <em>output</em> based on one or more <em>inputs</em>.
      </p>

      <Callout type="info">
        <strong>The Central Problem:</strong> Given a set of predictors <Math>{`X_1, X_2, \\ldots, X_p`}</Math> and 
        a response variable <Math>Y</Math>, we want to find a function <Math>f</Math> such 
        that <Math>{`Y \\approx f(X)`}</Math>.
      </Callout>

      <h2>Applications of Statistical Learning</h2>

      <p>
        Statistical learning has emerged as a new subfield of statistics, focused on supervised 
        and unsupervised modeling and prediction. It has applications across an enormous variety 
        of fields including:
      </p>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 my-6">
        <div className="bg-dark-800/50 rounded-xl p-4 border border-dark-700">
          <h3 className="text-lg font-semibold text-emerald-400 mb-2">Business & Marketing</h3>
          <ul className="list-disc list-inside text-dark-300 space-y-1">
            <li>Predicting customer churn</li>
            <li>Sales forecasting from advertising spend</li>
            <li>Market basket analysis</li>
            <li>Credit scoring and fraud detection</li>
          </ul>
        </div>
        <div className="bg-dark-800/50 rounded-xl p-4 border border-dark-700">
          <h3 className="text-lg font-semibold text-blue-400 mb-2">Medicine & Biology</h3>
          <ul className="list-disc list-inside text-dark-300 space-y-1">
            <li>Predicting disease risk from genetic data</li>
            <li>Cancer classification from gene expression</li>
            <li>Drug discovery and development</li>
            <li>Medical image analysis</li>
          </ul>
        </div>
        <div className="bg-dark-800/50 rounded-xl p-4 border border-dark-700">
          <h3 className="text-lg font-semibold text-amber-400 mb-2">Finance</h3>
          <ul className="list-disc list-inside text-dark-300 space-y-1">
            <li>Stock price prediction</li>
            <li>Risk management</li>
            <li>Algorithmic trading</li>
            <li>Portfolio optimization</li>
          </ul>
        </div>
        <div className="bg-dark-800/50 rounded-xl p-4 border border-dark-700">
          <h3 className="text-lg font-semibold text-purple-400 mb-2">Technology</h3>
          <ul className="list-disc list-inside text-dark-300 space-y-1">
            <li>Spam filtering</li>
            <li>Recommendation systems</li>
            <li>Natural language processing</li>
            <li>Computer vision</li>
          </ul>
        </div>
      </div>

      <h2>A Motivating Example: Advertising Data</h2>

      <p>
        Consider a dataset consisting of sales of a product in 200 different markets, along with 
        advertising budgets for three different media: TV, radio, and newspaper. Our goal is to 
        understand the relationship between advertising and sales.
      </p>

      <p>
        We might ask questions like:
      </p>

      <ul className="list-disc list-inside text-dark-300 space-y-2 my-4">
        <li>Is there a relationship between advertising budget and sales?</li>
        <li>How strong is the relationship?</li>
        <li>Which media contribute to sales?</li>
        <li>How accurately can we predict future sales?</li>
        <li>Is the relationship linear?</li>
        <li>Is there synergy among the advertising media?</li>
      </ul>

      <Definition title="Input and Output Variables">
        <p>
          In statistical learning, we typically have a set of <strong>input variables</strong> (also 
          called predictors, independent variables, features, or just variables), 
          denoted <Math>{`X_1, X_2, \\ldots, X_p`}</Math>.
        </p>
        <p className="mt-2">
          We also have an <strong>output variable</strong> (also called response or dependent variable), 
          denoted <Math>Y</Math>.
        </p>
      </Definition>

      <h2>Supervised vs. Unsupervised Learning</h2>

      <p>
        Most statistical learning problems fall into one of two categories: supervised or unsupervised.
      </p>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 my-6">
        <div className="bg-gradient-to-br from-emerald-500/10 to-emerald-600/5 rounded-xl p-5 border border-emerald-500/20">
          <h3 className="text-lg font-semibold text-emerald-400 mb-3">Supervised Learning</h3>
          <p className="text-dark-300 mb-3">
            For each observation of the predictor measurements <Math>x_i</Math>, there is 
            an associated response measurement <Math>y_i</Math>.
          </p>
          <p className="text-dark-400 text-sm">
            <strong>Goal:</strong> Fit a model that relates the response to the predictors, 
            with the aim of accurately predicting future responses or better understanding 
            the relationship.
          </p>
          <div className="mt-3 text-sm">
            <span className="text-dark-500">Examples: </span>
            <span className="text-emerald-400">Regression, Classification</span>
          </div>
        </div>
        <div className="bg-gradient-to-br from-blue-500/10 to-blue-600/5 rounded-xl p-5 border border-blue-500/20">
          <h3 className="text-lg font-semibold text-blue-400 mb-3">Unsupervised Learning</h3>
          <p className="text-dark-300 mb-3">
            For every observation <Math>{`i = 1, \\ldots, n`}</Math>, we observe measurements <Math>{`x_i`}</Math> but 
            no associated response <Math>{`y_i`}</Math>.
          </p>
          <p className="text-dark-400 text-sm">
            <strong>Goal:</strong> Understand relationships between variables or between 
            observations. Find patterns or structure in the data.
          </p>
          <div className="mt-3 text-sm">
            <span className="text-dark-500">Examples: </span>
            <span className="text-blue-400">Clustering, PCA</span>
          </div>
        </div>
      </div>

      <h2>Regression vs. Classification</h2>

      <p>
        Variables can be characterized as either <em>quantitative</em> or <em>qualitative</em>. 
        Quantitative variables take on numerical values, while qualitative variables take on 
        values in one of <Math>K</Math> different classes or categories.
      </p>

      <Definition title="Regression and Classification Problems">
        <p>
          Problems with a <strong>quantitative response</strong> are referred to 
          as <strong>regression</strong> problems.
        </p>
        <p className="mt-2">
          Problems involving a <strong>qualitative response</strong> are referred to 
          as <strong>classification</strong> problems.
        </p>
      </Definition>

      <p>
        For example, predicting a person's income (quantitative) is a regression problem, 
        while predicting whether a tumor is malignant or benign (qualitative) is a classification problem.
      </p>

      <h2>The General Model</h2>

      <p>
        We assume there is some relationship between <Math>Y</Math> and <Math>{`X = (X_1, X_2, \\ldots, X_p)`}</Math>, 
        which can be written in the general form:
      </p>

      <MathBlock>{`Y = f(X) + \\epsilon`}</MathBlock>

      <p>
        where <Math>f</Math> is some fixed but unknown function of <Math>X</Math>, 
        and <Math>{`\\epsilon`}</Math> is a random <em>error term</em> which is independent 
        of <Math>X</Math> and has mean zero.
      </p>

      <Callout type="warning">
        <strong>The Error Term:</strong> The error term <Math>{`\\epsilon`}</Math> captures 
        measurement errors and other discrepancies. Even if we knew <Math>f</Math> exactly, 
        we could not perfectly predict <Math>Y</Math> because of this irreducible error.
      </Callout>

      <h2>Why Estimate <Math>f</Math>?</h2>

      <p>
        There are two main reasons we may wish to estimate <Math>f</Math>: prediction and inference.
      </p>

      <div className="space-y-4 my-6">
        <div className="bg-dark-800/50 rounded-xl p-4 border border-dark-700">
          <h3 className="text-lg font-semibold text-emerald-400 mb-2">Prediction</h3>
          <p className="text-dark-300 mb-2">
            In many situations, a set of inputs <Math>X</Math> are readily available, but the 
            output <Math>Y</Math> cannot be easily obtained. We can predict <Math>Y</Math> using:
          </p>
          <MathBlock>{`\\hat{Y} = \\hat{f}(X)`}</MathBlock>
          <p className="text-dark-400 text-sm mt-2">
            Here <Math>{`\\hat{f}`}</Math> is our estimate for <Math>f</Math>, 
            and <Math>{`\\hat{Y}`}</Math> is the resulting prediction for <Math>Y</Math>.
          </p>
        </div>

        <div className="bg-dark-800/50 rounded-xl p-4 border border-dark-700">
          <h3 className="text-lg font-semibold text-blue-400 mb-2">Inference</h3>
          <p className="text-dark-300 mb-2">
            We often want to understand the <em>way</em> that <Math>Y</Math> is affected 
            as <Math>X</Math> changes. We want to understand the relationship, not just make predictions.
          </p>
          <ul className="list-disc list-inside text-dark-400 text-sm mt-2 space-y-1">
            <li>Which predictors are associated with the response?</li>
            <li>What is the relationship between the response and each predictor?</li>
            <li>Can the relationship be summarized using a linear equation?</li>
          </ul>
        </div>
      </div>

      <h2>What's Coming Next</h2>

      <p>
        This course will take you through the essential methods of statistical learning:
      </p>

      <ul className="list-none space-y-2 my-6 text-dark-300">
        <li><strong className="text-emerald-400">Chapter 2</strong> – Statistical Learning: The bias-variance tradeoff and model accuracy</li>
        <li><strong className="text-emerald-400">Chapter 3</strong> – Linear Regression: The foundation of predictive modeling</li>
        <li><strong className="text-emerald-400">Chapter 4</strong> – Classification: Logistic regression, LDA, and more</li>
        <li><strong className="text-emerald-400">Chapter 5</strong> – Resampling: Cross-validation and bootstrap</li>
        <li><strong className="text-emerald-400">Chapter 6</strong> – Model Selection: Ridge, Lasso, and dimension reduction</li>
        <li><strong className="text-emerald-400">Chapter 7</strong> – Non-linear Methods: Splines and GAMs</li>
        <li><strong className="text-emerald-400">Chapter 8</strong> – Tree-Based Methods: Decision trees, random forests, boosting</li>
        <li><strong className="text-emerald-400">Chapter 9</strong> – Support Vector Machines</li>
        <li><strong className="text-emerald-400">Chapter 10</strong> – Deep Learning: Neural networks and beyond</li>
        <li><strong className="text-emerald-400">Chapter 11</strong> – Survival Analysis</li>
        <li><strong className="text-emerald-400">Chapter 12</strong> – Unsupervised Learning: PCA and clustering</li>
        <li><strong className="text-emerald-400">Chapter 13</strong> – Multiple Testing</li>
      </ul>

      <Callout type="success">
        <strong>Ready to begin?</strong> In the next section, we'll dive deeper into 
        what statistical learning is, exploring the key concepts of reducible and irreducible 
        error, and understanding how we estimate the unknown function <Math>f</Math>.
      </Callout>

      {/* <SectionQuiz sectionId={1} questions={section01Quiz} title="Introduction Quiz" /> */}
    </LessonLayout>
  );
}
