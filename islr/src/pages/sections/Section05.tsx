import { LessonLayout } from '@/components/layout/LessonLayout';
import { SectionQuiz } from '@/components/quiz/SectionQuiz';
import { section05Quiz } from '@/data/quizzes';
import { Callout } from '@/components/common/Callout';
import { InlineMath } from '@/components/common/MathBlock';

export default function Section05() {
  return (
    <LessonLayout sectionId={5}>
      <h2>Chapter 2 Exercises</h2>

      <p>
        This section contains conceptual and applied exercises to test your understanding 
        of statistical learning fundamentals. Work through these problems to solidify your 
        grasp of the key concepts.
      </p>

      <h2>Conceptual Exercises</h2>

      <div className="space-y-8 my-6">
        <div className="p-5 bg-dark-800/50 rounded-xl border border-dark-700">
          <h3 className="text-lg font-semibold text-primary-400 mb-3">Exercise 1: Flexible vs. Inflexible Methods</h3>
          <p className="text-dark-300 mb-4">
            For each of parts (a) through (d), indicate whether we would generally expect the 
            performance of a flexible statistical learning method to be better or worse than an 
            inflexible method. Justify your answer.
          </p>
          <ol className="list-alpha list-inside space-y-3 text-dark-400">
            <li>The sample size <InlineMath>n</InlineMath> is extremely large, and the number of predictors <InlineMath>p</InlineMath> is small.</li>
            <li>The number of predictors <InlineMath>p</InlineMath> is extremely large, and the number of observations <InlineMath>n</InlineMath> is small.</li>
            <li>The relationship between the predictors and response is highly non-linear.</li>
            <li>The variance of the error terms, i.e. <InlineMath>{"\\sigma^2 = \\text{Var}(\\epsilon)"}</InlineMath>, is extremely high.</li>
          </ol>
          
          <div className="mt-4 p-4 bg-dark-900/50 rounded-lg">
            <h4 className="text-sm font-semibold text-dark-300 mb-2">Hints:</h4>
            <ul className="list-disc list-inside text-dark-500 text-sm space-y-1">
              <li>(a) Think about overfitting risk with large samples</li>
              <li>(b) Consider the curse of dimensionality</li>
              <li>(c) Can inflexible methods capture non-linearity?</li>
              <li>(d) What happens when signal-to-noise ratio is low?</li>
            </ul>
          </div>
        </div>

        <div className="p-5 bg-dark-800/50 rounded-xl border border-dark-700">
          <h3 className="text-lg font-semibold text-primary-400 mb-3">Exercise 2: Regression vs. Classification</h3>
          <p className="text-dark-300 mb-4">
            Explain whether each scenario is a classification or regression problem, and indicate 
            whether we are most interested in inference or prediction. Finally, provide <InlineMath>n</InlineMath> and <InlineMath>p</InlineMath>.
          </p>
          <ol className="list-alpha list-inside space-y-3 text-dark-400">
            <li>
              We collect a set of data on the top 500 firms in the US. For each firm we record 
              profit, number of employees, industry, and the CEO salary. We are interested in 
              understanding which factors affect CEO salary.
            </li>
            <li>
              We are considering launching a new product and wish to know whether it will be a 
              success or a failure. We collect data on 20 similar products that were previously 
              launched. For each product we have recorded whether it was a success or failure, 
              price charged, marketing budget, competition price, and ten other variables.
            </li>
            <li>
              We are interested in predicting the % change in the USD/Euro exchange rate in 
              relation to the weekly changes in the world stock markets. Hence we collect weekly 
              data for all of 2012. For each week we record the % change in the USD/Euro, the 
              % change in the US market, the % change in the British market, and the % change 
              in the German market.
            </li>
          </ol>
        </div>

        <div className="p-5 bg-dark-800/50 rounded-xl border border-dark-700">
          <h3 className="text-lg font-semibold text-primary-400 mb-3">Exercise 3: Bias-Variance Decomposition</h3>
          <p className="text-dark-300 mb-4">
            We now revisit the bias-variance decomposition.
          </p>
          <ol className="list-alpha list-inside space-y-3 text-dark-400">
            <li>
              Provide a sketch of typical (squared) bias, variance, training error, test error, 
              and Bayes (irreducible) error curves, on a single plot, as a function of model 
              flexibility. The x-axis should represent the amount of flexibility in the method, 
              and the y-axis should represent the values for each curve.
            </li>
            <li>Explain why each of the five curves has the shape displayed in part (a).</li>
          </ol>
          
          <div className="mt-4 p-4 bg-dark-900/50 rounded-lg">
            <h4 className="text-sm font-semibold text-dark-300 mb-2">Key relationships to remember:</h4>
            <ul className="list-disc list-inside text-dark-500 text-sm space-y-1">
              <li>Test Error = Bias² + Variance + Irreducible Error</li>
              <li>Training error always decreases with flexibility</li>
              <li>Irreducible error is constant (horizontal line)</li>
            </ul>
          </div>
        </div>

        <div className="p-5 bg-dark-800/50 rounded-xl border border-dark-700">
          <h3 className="text-lg font-semibold text-primary-400 mb-3">Exercise 4: Real-World Applications</h3>
          <p className="text-dark-300 mb-4">
            Describe three real-life applications in which:
          </p>
          <ol className="list-alpha list-inside space-y-3 text-dark-400">
            <li>Classification might be useful. Describe the response and predictors, and explain whether inference or prediction is the goal.</li>
            <li>Regression might be useful. Describe the response and predictors, and explain whether inference or prediction is the goal.</li>
            <li>Cluster analysis might be useful. Describe the data and explain what you hope to learn.</li>
          </ol>
        </div>

        <div className="p-5 bg-dark-800/50 rounded-xl border border-dark-700">
          <h3 className="text-lg font-semibold text-primary-400 mb-3">Exercise 5: Parametric vs. Non-Parametric</h3>
          <p className="text-dark-300 mb-4">
            What are the advantages and disadvantages of a very flexible (versus a less flexible) 
            approach for regression or classification? Under what circumstances might a more 
            flexible approach be preferred to a less flexible approach? When might a less flexible 
            approach be preferred?
          </p>
        </div>
      </div>

      <h2>Applied Exercises</h2>

      <div className="space-y-8 my-6">
        <div className="p-5 bg-dark-800/50 rounded-xl border border-dark-700">
          <h3 className="text-lg font-semibold text-emerald-400 mb-3">Exercise 6: College Data</h3>
          <p className="text-dark-300 mb-4">
            This exercise involves the <code className="text-emerald-400">College</code> data set, 
            which can be found in the ISLR2 package.
          </p>
          <ol className="list-alpha list-inside space-y-3 text-dark-400">
            <li>
              Use the <code className="text-emerald-400">read.csv()</code> function to read the 
              data into R. Call the loaded data <code className="text-emerald-400">college</code>.
            </li>
            <li>
              Look at the data using the <code className="text-emerald-400">View()</code> function 
              and use <code className="text-emerald-400">summary()</code> to produce a numerical 
              summary of the variables.
            </li>
            <li>
              Use the <code className="text-emerald-400">pairs()</code> function to produce a 
              scatterplot matrix of the first ten columns.
            </li>
            <li>
              Use the <code className="text-emerald-400">plot()</code> function to produce side-by-side 
              boxplots of <code className="text-emerald-400">Outstate</code> versus <code className="text-emerald-400">Private</code>.
            </li>
            <li>
              Create a new qualitative variable, called <code className="text-emerald-400">Elite</code>, 
              by binning the <code className="text-emerald-400">Top10perc</code> variable.
            </li>
            <li>
              Use the <code className="text-emerald-400">hist()</code> function to produce histograms 
              with differing numbers of bins for a few quantitative variables.
            </li>
          </ol>
        </div>

        <div className="p-5 bg-dark-800/50 rounded-xl border border-dark-700">
          <h3 className="text-lg font-semibold text-emerald-400 mb-3">Exercise 7: Auto Data</h3>
          <p className="text-dark-300 mb-4">
            This exercise involves the <code className="text-emerald-400">Auto</code> data set.
          </p>
          <ol className="list-alpha list-inside space-y-3 text-dark-400">
            <li>Which of the predictors are quantitative, and which are qualitative?</li>
            <li>What is the range of each quantitative predictor?</li>
            <li>What is the mean and standard deviation of each quantitative predictor?</li>
            <li>
              Now remove the 10th through 85th observations. What is the range, mean, and 
              standard deviation of each predictor in the subset of the data that remains?
            </li>
            <li>
              Using the full data set, investigate the predictors graphically using scatterplots 
              or other tools. Create plots highlighting relationships between predictors.
            </li>
            <li>
              Suppose we wish to predict <code className="text-emerald-400">mpg</code> on the 
              basis of the other variables. Which predictors appear useful for prediction?
            </li>
          </ol>
        </div>

        <div className="p-5 bg-dark-800/50 rounded-xl border border-dark-700">
          <h3 className="text-lg font-semibold text-emerald-400 mb-3">Exercise 8: Boston Data</h3>
          <p className="text-dark-300 mb-4">
            This exercise involves the <code className="text-emerald-400">Boston</code> data set.
          </p>
          <ol className="list-alpha list-inside space-y-3 text-dark-400">
            <li>How many rows are in this data set? How many columns? What do the rows and columns represent?</li>
            <li>Make some pairwise scatterplots of the predictors. Describe your findings.</li>
            <li>Are any of the predictors associated with per capita crime rate?</li>
            <li>Do any of the census tracts bound the Charles River?</li>
            <li>What is the median pupil-teacher ratio among the towns in this data set?</li>
            <li>Which census tract has the lowest median value of owner-occupied homes?</li>
            <li>How many census tracts average more than seven rooms per dwelling? More than eight?</li>
          </ol>
        </div>
      </div>

      <Callout type="info">
        <strong>Working Through Exercises:</strong> These exercises are designed to reinforce 
        the concepts from Chapter 2. For the applied exercises, make sure you have R installed 
        and the ISLR2 package loaded. Don't just read the solutions—work through each problem 
        yourself first!
      </Callout>

      <h2>Key Takeaways</h2>

      <p>After completing these exercises, you should understand:</p>

      <ul className="list-disc list-inside text-dark-300 space-y-2 my-4">
        <li>When to use flexible vs. inflexible methods</li>
        <li>The difference between regression and classification problems</li>
        <li>The bias-variance tradeoff and how it affects model selection</li>
        <li>How to explore data in R using basic functions and graphics</li>
        <li>The difference between inference and prediction goals</li>
      </ul>

      <Callout type="success">
        <strong>Next Up:</strong> In Chapter 3, we dive into Linear Regression—the most 
        fundamental supervised learning method. You'll learn how to fit models, assess their 
        quality, and make predictions.
      </Callout>

      <SectionQuiz sectionId={5} questions={section05Quiz} title="Chapter 2 Review Quiz" />
    </LessonLayout>
  );
}
