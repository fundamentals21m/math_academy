import { LessonLayout } from '@/components/layout/LessonLayout';
import { SectionQuiz } from '@/components/quiz/SectionQuiz';
import { section06Quiz } from '@/data/quizzes';
import { Callout } from '@/components/common/Callout';
import { Definition, Theorem, Example, RCodeBlock } from '@/components/common/ContentBlocks';
import { Math, MathBlock } from '@/components/common/MathBlock';
import { LinearRegressionFitter } from '@/components/visualizers/LinearRegressionFitter';

export default function Section06() {
  return (
    <LessonLayout sectionId={6}>
      <h2>Simple Linear Regression</h2>

      <p>
        Simple linear regression is a very straightforward approach for predicting a 
        quantitative response <Math>Y</Math> on the basis of a single predictor 
        variable <Math>X</Math>. It assumes that there is approximately a linear 
        relationship between <Math>X</Math> and <Math>Y</Math>.
      </p>

      <Definition title="Simple Linear Regression Model">
        <p>We can write this relationship as:</p>
        <MathBlock>{`Y \\approx \\beta_0 + \\beta_1 X`}</MathBlock>
        <p className="mt-2">
          Here <Math>{`\\beta_0`}</Math> and <Math>{`\\beta_1`}</Math> are two unknown constants that 
          represent the <em>intercept</em> and <em>slope</em> terms in the linear model.
        </p>
        <p className="mt-2">
          Together, <Math>{`\\beta_0`}</Math> and <Math>{`\\beta_1`}</Math> are known as the model 
          <strong> coefficients</strong> or <strong>parameters</strong>.
        </p>
      </Definition>

      <p>
        Once we have used our training data to produce estimates <Math>{`\\hat{\\beta}_0`}</Math> and <Math>{`\\hat{\\beta}_1`}</Math> for 
        the model coefficients, we can predict future values using:
      </p>

      <MathBlock>{`\\hat{y} = \\hat{\\beta}_0 + \\hat{\\beta}_1 x`}</MathBlock>

      <p>
        where <Math>{`\\hat{y}`}</Math> indicates a prediction of <Math>Y</Math> on the basis of <Math>{`X = x`}</Math>. 
        The hat symbol denotes the estimated value.
      </p>

      <h2>Estimating the Coefficients</h2>

      <p>
        Let <Math>{`(x_1, y_1), (x_2, y_2), \\ldots, (x_n, y_n)`}</Math> represent <Math>n</Math> observation 
        pairs. We want to find coefficient estimates <Math>{`\\hat{\\beta}_0`}</Math> and <Math>{`\\hat{\\beta}_1`}</Math> such 
        that the resulting line is as close as possible to the <Math>n</Math> data points.
      </p>

      <Definition title="Residual Sum of Squares (RSS)">
        <p>
          The most common approach is to minimize the <em>residual sum of squares</em>:
        </p>
        <MathBlock>{`\\text{RSS} = \\sum_{i=1}^{n} (y_i - \\hat{y}_i)^2 = \\sum_{i=1}^{n} (y_i - \\hat{\\beta}_0 - \\hat{\\beta}_1 x_i)^2`}</MathBlock>
        <p className="mt-2">
          The RSS measures the total squared deviation between the observed 
          values <Math>{`y_i`}</Math> and the values predicted by the linear model.
        </p>
      </Definition>

      <h3>Interactive Visualization</h3>

      <p>
        Try adding and moving points in the visualization below to see how the least 
        squares regression line changes in real-time:
      </p>

      <div className="my-6">
        <LinearRegressionFitter />
      </div>

      <Theorem title="Least Squares Coefficient Estimates">
        <p>
          Using calculus, one can show that the minimizers of RSS are:
        </p>
        <MathBlock>{`\\hat{\\beta}_1 = \\frac{\\sum_{i=1}^{n}(x_i - \\bar{x})(y_i - \\bar{y})}{\\sum_{i=1}^{n}(x_i - \\bar{x})^2}`}</MathBlock>
        <MathBlock>{`\\hat{\\beta}_0 = \\bar{y} - \\hat{\\beta}_1 \\bar{x}`}</MathBlock>
        <p className="mt-2">
          where <Math>{`\\bar{y} = \\frac{1}{n}\\sum_{i=1}^n y_i`}</Math> and <Math>{`\\bar{x} = \\frac{1}{n}\\sum_{i=1}^n x_i`}</Math> are 
          the sample means.
        </p>
      </Theorem>

      <Example title="Advertising and Sales">
        <p>
          Consider predicting <strong>sales</strong> based on <strong>TV advertising budget</strong>. 
          Using the advertising dataset with 200 markets, the least squares fit gives:
        </p>
        <MathBlock>{`\\widehat{\\text{sales}} = 7.03 + 0.0475 \\times \\text{TV}`}</MathBlock>
        <p className="mt-2">
          <strong>Interpretation:</strong> An additional $1,000 spent on TV advertising is 
          associated with selling approximately 47.5 additional units of the product.
        </p>
      </Example>

      <h2>Assessing the Accuracy of the Coefficient Estimates</h2>

      <p>
        The true relationship between <Math>X</Math> and <Math>Y</Math> takes the form <Math>{`Y = f(X) + \\epsilon`}</Math> for 
        some unknown function <Math>f</Math>. If <Math>f</Math> is approximated by a linear function, 
        we can write:
      </p>

      <MathBlock>{`Y = \\beta_0 + \\beta_1 X + \\epsilon`}</MathBlock>

      <p>
        The error term <Math>{`\\epsilon`}</Math> is a catch-all for what we miss with this simple model: 
        the true relationship is probably not linear, there may be other variables that 
        affect <Math>Y</Math>, and there may be measurement error.
      </p>

      <Definition title="Population Regression Line">
        <p>
          The model <Math>{`Y = \\beta_0 + \\beta_1 X + \\epsilon`}</Math> defines the <em>population 
          regression line</em>, which is the best linear approximation to the true relationship 
          between <Math>X</Math> and <Math>Y</Math>.
        </p>
        <p className="mt-2">
          The least squares regression line <Math>{`\\hat{y} = \\hat{\\beta}_0 + \\hat{\\beta}_1 x`}</Math> is 
          an estimate of this population line, based on our sample of observations.
        </p>
      </Definition>

      <h3>Standard Errors</h3>

      <p>
        If we estimate <Math>{`\\beta_0`}</Math> and <Math>{`\\beta_1`}</Math> using a large number of 
        different data sets drawn from the same population, we would get different estimates 
        each time. The <em>standard error</em> tells us the average amount by which these 
        estimates differ from the actual value.
      </p>

      <Definition title="Standard Errors of Coefficient Estimates">
        <MathBlock>{`\\text{SE}(\\hat{\\beta}_0)^2 = \\sigma^2 \\left[ \\frac{1}{n} + \\frac{\\bar{x}^2}{\\sum_{i=1}^{n}(x_i - \\bar{x})^2} \\right]`}</MathBlock>
        <MathBlock>{`\\text{SE}(\\hat{\\beta}_1)^2 = \\frac{\\sigma^2}{\\sum_{i=1}^{n}(x_i - \\bar{x})^2}`}</MathBlock>
        <p className="mt-2">
          where <Math>{`\\sigma^2 = \\text{Var}(\\epsilon)`}</Math>. In practice, <Math>{`\\sigma`}</Math> is 
          estimated using the <em>residual standard error</em>:
        </p>
        <MathBlock>{`\\text{RSE} = \\sqrt{\\frac{\\text{RSS}}{n-2}}`}</MathBlock>
      </Definition>

      <h3>Confidence Intervals</h3>

      <p>
        Standard errors can be used to compute <em>confidence intervals</em>. A 95% 
        confidence interval is defined as a range of values such that with 95% probability, 
        the range will contain the true unknown value of the parameter.
      </p>

      <Definition title="95% Confidence Interval for Coefficients">
        <p>For <Math>{`\\beta_1`}</Math>, the approximate 95% confidence interval is:</p>
        <MathBlock>{`\\hat{\\beta}_1 \\pm 2 \\cdot \\text{SE}(\\hat{\\beta}_1)`}</MathBlock>
        <p className="mt-2">
          Similarly for <Math>{`\\beta_0`}</Math>:
        </p>
        <MathBlock>{`\\hat{\\beta}_0 \\pm 2 \\cdot \\text{SE}(\\hat{\\beta}_0)`}</MathBlock>
      </Definition>

      <h3>Hypothesis Tests</h3>

      <p>
        Standard errors can also be used to perform <em>hypothesis tests</em> on the coefficients. 
        The most common hypothesis test involves testing:
      </p>

      <div className="my-6 p-4 bg-dark-800/50 rounded-xl border border-dark-700">
        <div className="grid grid-cols-2 gap-4">
          <div>
            <h4 className="text-dark-400 text-sm font-semibold mb-1">Null Hypothesis</h4>
            <MathBlock>{`H_0: \\beta_1 = 0`}</MathBlock>
          </div>
          <div>
            <h4 className="text-dark-400 text-sm font-semibold mb-1">Alternative Hypothesis</h4>
            <MathBlock>{`H_a: \\beta_1 \\neq 0`}</MathBlock>
          </div>
        </div>
        <p className="text-dark-400 text-sm mt-4">
          <Math>{`H_0`}</Math> corresponds to no relationship between <Math>X</Math> and <Math>Y</Math>.
        </p>
      </div>

      <Definition title="t-Statistic">
        <p>To test the null hypothesis, we compute a <em>t-statistic</em>:</p>
        <MathBlock>{`t = \\frac{\\hat{\\beta}_1 - 0}{\\text{SE}(\\hat{\\beta}_1)} = \\frac{\\hat{\\beta}_1}{\\text{SE}(\\hat{\\beta}_1)}`}</MathBlock>
        <p className="mt-2">
          This measures the number of standard deviations that <Math>{`\\hat{\\beta}_1`}</Math> is 
          away from 0. If there truly is no relationship, we expect this to have 
          a <Math>t</Math>-distribution with <Math>{`n-2`}</Math> degrees of freedom.
        </p>
      </Definition>

      <Callout type="info">
        <strong>p-value:</strong> The p-value is the probability of observing a value 
        of <Math>{`|t|`}</Math> equal to or larger than what we observed, assuming <Math>{`H_0`}</Math> is 
        true. A small p-value indicates that it is unlikely to observe such a substantial 
        association between <Math>X</Math> and <Math>Y</Math> due to chance alone.
      </Callout>

      <h2>Assessing the Accuracy of the Model</h2>

      <p>
        Once we have rejected the null hypothesis and concluded that there is a relationship 
        between <Math>X</Math> and <Math>Y</Math>, we want to quantify how well the model fits 
        the data. Two related quantities are commonly used:
      </p>

      <h3>Residual Standard Error (RSE)</h3>

      <Definition title="Residual Standard Error">
        <MathBlock>{`\\text{RSE} = \\sqrt{\\frac{1}{n-2}\\text{RSS}} = \\sqrt{\\frac{1}{n-2}\\sum_{i=1}^{n}(y_i - \\hat{y}_i)^2}`}</MathBlock>
        <p className="mt-2">
          The RSE is an estimate of the standard deviation of <Math>{`\\epsilon`}</Math>. Roughly 
          speaking, it is the average amount that the response will deviate from the true 
          regression line.
        </p>
      </Definition>

      <p>
        The RSE is measured in the units of <Math>Y</Math>. In the advertising example, 
        RSE = 3.26, meaning actual sales deviate from the true regression line by 
        approximately 3,260 units on average.
      </p>

      <h3>R-squared (R²)</h3>

      <Definition title="R-squared">
        <MathBlock>{`R^2 = \\frac{\\text{TSS} - \\text{RSS}}{\\text{TSS}} = 1 - \\frac{\\text{RSS}}{\\text{TSS}}`}</MathBlock>
        <p className="mt-2">
          where <strong>TSS</strong> (Total Sum of Squares) = <Math>{`\\sum(y_i - \\bar{y})^2`}</Math> measures 
          the total variance in the response <Math>Y</Math>, and RSS measures the variance 
          that is left unexplained after performing the regression.
        </p>
        <p className="mt-2">
          Hence, <Math>R^2</Math> measures the <strong>proportion of variance explained</strong> by 
          the model.
        </p>
      </Definition>

      <div className="my-6 p-5 bg-dark-800/50 rounded-xl border border-dark-700">
        <h4 className="text-dark-200 font-semibold mb-3">Interpreting R²</h4>
        <ul className="space-y-2 text-dark-300">
          <li className="flex items-start gap-2">
            <span className="text-emerald-400 mt-1">→</span>
            <span><Math>{`R^2 = 0`}</Math>: The model explains none of the variability in <Math>Y</Math></span>
          </li>
          <li className="flex items-start gap-2">
            <span className="text-emerald-400 mt-1">→</span>
            <span><Math>{`R^2 = 1`}</Math>: The model explains all of the variability in <Math>Y</Math></span>
          </li>
          <li className="flex items-start gap-2">
            <span className="text-amber-400 mt-1">→</span>
            <span><Math>{`R^2`}</Math> close to 1: Regression explains most of the variance (good fit)</span>
          </li>
          <li className="flex items-start gap-2">
            <span className="text-red-400 mt-1">→</span>
            <span><Math>{`R^2`}</Math> close to 0: Regression explains little of the variance (poor fit)</span>
          </li>
        </ul>
      </div>

      <Callout type="warning">
        <strong>R² and Correlation:</strong> In simple linear regression with one predictor, 
        <Math>{`R^2 = r^2`}</Math> where <Math>r</Math> is the correlation between <Math>X</Math> and <Math>Y</Math>. 
        This relationship does not extend to multiple regression.
      </Callout>

      <h2>R Code Example</h2>

      <p>
        Here's how to fit a simple linear regression model in R:
      </p>

      <RCodeBlock
        title="Simple Linear Regression in R"
        output={`Call:
lm(formula = sales ~ TV, data = Advertising)

Coefficients:
            Estimate Std. Error t value Pr(>|t|)    
(Intercept) 7.032594   0.457843  15.360  < 2e-16 ***
TV          0.047537   0.002691  17.668  < 2e-16 ***
---
Signif. codes: 0 '***' 0.001 '**' 0.01 '*' 0.05 '.' 0.1 ' ' 1

Residual standard error: 3.259 on 198 degrees of freedom
Multiple R-squared: 0.6119`}
      >
{`# Load the data
Advertising <- read.csv("Advertising.csv")

# Fit simple linear regression
lm.fit <- lm(sales ~ TV, data = Advertising)

# View the summary
summary(lm.fit)

# Get confidence intervals for coefficients
confint(lm.fit)

# Make predictions
predict(lm.fit, data.frame(TV = c(50, 100, 150)))`}
      </RCodeBlock>

      <h2>Summary</h2>

      <p>
        This section covered the fundamentals of simple linear regression:
      </p>

      <ul className="list-disc list-inside text-dark-300 space-y-2 my-4">
        <li>The model: <Math>{`Y = \\beta_0 + \\beta_1 X + \\epsilon`}</Math></li>
        <li>Estimating coefficients by minimizing RSS (least squares)</li>
        <li>Standard errors, confidence intervals, and hypothesis tests</li>
        <li>Assessing fit with RSE and <Math>{`R^2`}</Math></li>
      </ul>

      <Callout type="success">
        <strong>Next Steps:</strong> In the next section, we'll extend these ideas to 
        <em>multiple linear regression</em>, where we predict <Math>Y</Math> using multiple 
        predictors <Math>{`X_1, X_2, \\ldots, X_p`}</Math>.
      </Callout>

      <SectionQuiz sectionId={6} questions={section06Quiz} title="Simple Linear Regression Quiz" />
    </LessonLayout>
  );
}
