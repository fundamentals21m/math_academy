import { LessonLayout } from '@/components/layout/LessonLayout';
import { SectionQuiz } from '@/components/quiz/SectionQuiz';
import { section07Quiz } from '@/data/quizzes';
import { Callout } from '@/components/common/Callout';
import { Definition, Theorem, Example, RCodeBlock } from '@/components/common/ContentBlocks';
import { Math, MathBlock } from '@/components/common/MathBlock';

export default function Section07() {
  return (
    <LessonLayout sectionId={7}>
      <h2>Multiple Linear Regression</h2>

      <p>
        Simple linear regression is a useful approach for predicting a response on the basis 
        of a single predictor variable. However, in practice we often have more than one 
        predictor. We now extend simple linear regression to accommodate multiple predictors.
      </p>

      <Definition title="Multiple Linear Regression Model">
        <p>
          Instead of fitting a separate simple linear regression model for each predictor, 
          we can extend our model to include multiple predictors:
        </p>
        <MathBlock>{`Y = \\beta_0 + \\beta_1 X_1 + \\beta_2 X_2 + \\cdots + \\beta_p X_p + \\epsilon`}</MathBlock>
        <p className="mt-2">
          where <Math>X_j</Math> represents the <Math>j</Math>th predictor 
          and <Math>\beta_j</Math> quantifies the association between that predictor and the response.
        </p>
        <p className="mt-2">
          We interpret <Math>\beta_j</Math> as the <em>average</em> effect on <Math>Y</Math> of 
          a one unit increase in <Math>X_j</Math>, <strong>holding all other predictors fixed</strong>.
        </p>
      </Definition>

      <h2>Estimating the Regression Coefficients</h2>

      <p>
        As with simple linear regression, the coefficients <Math>\beta_0, \beta_1, \ldots, \beta_p</Math> are 
        unknown and must be estimated. Given estimates <Math>\hat\beta_0, \hat\beta_1, \ldots, \hat\beta_p</Math>, 
        we can make predictions using:
      </p>

      <MathBlock>{`\\hat{y} = \\hat{\\beta}_0 + \\hat{\\beta}_1 x_1 + \\hat{\\beta}_2 x_2 + \\cdots + \\hat{\\beta}_p x_p`}</MathBlock>

      <p>
        The parameters are estimated using the same least squares approach: we choose coefficients 
        to minimize the residual sum of squares (RSS):
      </p>

      <Definition title="RSS for Multiple Regression">
        <MathBlock>{`\\text{RSS} = \\sum_{i=1}^{n} (y_i - \\hat{y}_i)^2 = \\sum_{i=1}^{n} \\left( y_i - \\hat{\\beta}_0 - \\sum_{j=1}^{p} \\hat{\\beta}_j x_{ij} \\right)^2`}</MathBlock>
      </Definition>

      <Callout type="info">
        <strong>Matrix Formulation:</strong> Unlike simple linear regression, the formulas for 
        the least squares coefficient estimates in multiple regression are most conveniently 
        expressed using matrix algebra. In matrix form: <Math>{"\\hat{\\boldsymbol{\\beta}} = (\\mathbf{X}^T\\mathbf{X})^{-1}\\mathbf{X}^T\\mathbf{y}"}</Math>
      </Callout>

      <Example title="Advertising Data with Multiple Predictors">
        <p>
          Using the advertising data, we can regress sales onto TV, radio, and newspaper:
        </p>
        <MathBlock>{`\\widehat{\\text{sales}} = 2.939 + 0.046 \\times \\text{TV} + 0.189 \\times \\text{radio} - 0.001 \\times \\text{newspaper}`}</MathBlock>
        <p className="mt-2">
          <strong>Interpretation:</strong> A $1,000 increase in TV advertising is associated with 
          an increase in sales of about 46 units, holding radio and newspaper fixed. Similarly, 
          spending an additional $1,000 on radio advertising is associated with an increase of 
          about 189 units.
        </p>
      </Example>

      <h2>Some Important Questions</h2>

      <p>
        When we perform multiple regression, we usually want to answer several important questions:
      </p>

      <div className="space-y-4 my-6">
        <div className="p-4 bg-dark-800/50 rounded-xl border border-dark-700">
          <h4 className="text-emerald-400 font-semibold mb-2">1. Is at least one predictor useful?</h4>
          <p className="text-dark-300 text-sm">
            We test <Math>{"H_0: \\beta_1 = \\beta_2 = \\cdots = \\beta_p = 0"}</Math> using the F-statistic.
          </p>
        </div>
        <div className="p-4 bg-dark-800/50 rounded-xl border border-dark-700">
          <h4 className="text-blue-400 font-semibold mb-2">2. Which predictors are important?</h4>
          <p className="text-dark-300 text-sm">
            Examine individual t-statistics and p-values for each coefficient.
          </p>
        </div>
        <div className="p-4 bg-dark-800/50 rounded-xl border border-dark-700">
          <h4 className="text-amber-400 font-semibold mb-2">3. How well does the model fit?</h4>
          <p className="text-dark-300 text-sm">
            Use <Math>R^2</Math> and RSE to assess overall model quality.
          </p>
        </div>
        <div className="p-4 bg-dark-800/50 rounded-xl border border-dark-700">
          <h4 className="text-purple-400 font-semibold mb-2">4. How accurate are predictions?</h4>
          <p className="text-dark-300 text-sm">
            Compute confidence intervals and prediction intervals.
          </p>
        </div>
      </div>

      <h3>The F-Statistic</h3>

      <p>
        To test whether at least one predictor is useful, we use the F-statistic:
      </p>

      <Definition title="F-Statistic">
        <MathBlock>{`F = \\frac{(\\text{TSS} - \\text{RSS})/p}{\\text{RSS}/(n - p - 1)}`}</MathBlock>
        <p className="mt-2">
          where TSS = <Math>{`\\sum(y_i - \\bar{y})^2`}</Math> and RSS = <Math>{`\\sum(y_i - \\hat{y}_i)^2`}</Math>.
        </p>
        <p className="mt-2">
          If <Math>H_0</Math> is true and the errors are normally distributed, <Math>F</Math> follows 
          an F-distribution with <Math>(p, n-p-1)</Math> degrees of freedom.
        </p>
      </Definition>

      <Callout type="warning">
        <strong>Why not just use individual t-tests?</strong> When <Math>p</Math> is large, about 
        5% of p-values will be below 0.05 by chance alone! The F-test avoids this multiple 
        testing problem by testing all coefficients simultaneously.
      </Callout>

      <h3>Deciding Which Variables to Include</h3>

      <p>
        The task of determining which predictors are associated with the response is referred 
        to as <em>variable selection</em>. There are <Math>2^p</Math> possible models containing 
        subsets of the <Math>p</Math> predictors!
      </p>

      <p>Common approaches include:</p>

      <ul className="list-disc list-inside text-dark-300 space-y-2 my-4">
        <li><strong>Forward selection:</strong> Start with no predictors, add one at a time</li>
        <li><strong>Backward selection:</strong> Start with all predictors, remove one at a time</li>
        <li><strong>Mixed selection:</strong> Combination of forward and backward</li>
      </ul>

      <h2>Model Fit</h2>

      <h3>R² in Multiple Regression</h3>

      <Definition title="R² for Multiple Regression">
        <MathBlock>{`R^2 = 1 - \\frac{\\text{RSS}}{\\text{TSS}} = \\frac{\\text{TSS} - \\text{RSS}}{\\text{TSS}}`}</MathBlock>
        <p className="mt-2">
          As in simple regression, <Math>R^2</Math> measures the proportion of variance explained 
          by the model. However, <Math>R^2</Math> will <em>always</em> increase when more variables 
          are added, even if those variables are not truly associated with the response!
        </p>
      </Definition>

      <Callout type="info">
        <strong>Adjusted R²:</strong> To account for the number of predictors, we can use 
        <Math>{"\\text{Adjusted } R^2 = 1 - \\frac{\\text{RSS}/(n-p-1)}{\\text{TSS}/(n-1)}"}</Math>. 
        Unlike <Math>R^2</Math>, adjusted <Math>R^2</Math> can decrease if we add uninformative predictors.
      </Callout>

      <Example title="Advertising Model Comparison">
        <div className="overflow-x-auto my-4">
          <table className="w-full text-sm">
            <thead>
              <tr className="border-b border-dark-700">
                <th className="text-left py-2 px-3 text-dark-300">Model</th>
                <th className="text-left py-2 px-3 text-dark-300">RSE</th>
                <th className="text-left py-2 px-3 text-dark-300">R²</th>
              </tr>
            </thead>
            <tbody className="text-dark-400">
              <tr className="border-b border-dark-800">
                <td className="py-2 px-3">TV only</td>
                <td className="py-2 px-3">3.26</td>
                <td className="py-2 px-3">0.612</td>
              </tr>
              <tr className="border-b border-dark-800">
                <td className="py-2 px-3">TV + Radio</td>
                <td className="py-2 px-3">1.68</td>
                <td className="py-2 px-3">0.897</td>
              </tr>
              <tr>
                <td className="py-2 px-3">TV + Radio + Newspaper</td>
                <td className="py-2 px-3">1.69</td>
                <td className="py-2 px-3">0.897</td>
              </tr>
            </tbody>
          </table>
        </div>
        <p className="text-dark-400 text-sm">
          Adding newspaper to the model barely improves <Math>R^2</Math> and actually increases RSE slightly!
        </p>
      </Example>

      <h2>R Code Example</h2>

      <RCodeBlock
        title="Multiple Regression in R"
        output={`Coefficients:
            Estimate Std. Error t value Pr(>|t|)    
(Intercept)  2.93889    0.31191   9.422  < 2e-16 ***
TV           0.04576    0.00139  32.809  < 2e-16 ***
radio        0.18853    0.00861  21.893  < 2e-16 ***
newspaper   -0.00104    0.00587  -0.177    0.860    

Residual standard error: 1.686 on 196 degrees of freedom
Multiple R-squared:  0.8972,	Adjusted R-squared:  0.8956 
F-statistic: 570.3 on 3 and 196 DF,  p-value: < 2.2e-16`}
      >
{`# Fit multiple regression model
lm.fit <- lm(sales ~ TV + radio + newspaper, data = Advertising)

# View the summary
summary(lm.fit)

# Get confidence intervals
confint(lm.fit)

# Compare models using anova
lm.fit1 <- lm(sales ~ TV + radio, data = Advertising)
anova(lm.fit1, lm.fit)`}
      </RCodeBlock>

      <h2>Correlation Among Predictors</h2>

      <p>
        In multiple regression, the coefficients can behave very differently than in simple 
        regression due to <em>correlation</em> (or <em>collinearity</em>) among predictors.
      </p>

      <Example title="Simple vs. Multiple Regression Coefficients">
        <div className="overflow-x-auto my-4">
          <table className="w-full text-sm">
            <thead>
              <tr className="border-b border-dark-700">
                <th className="text-left py-2 px-3 text-dark-300">Variable</th>
                <th className="text-left py-2 px-3 text-dark-300">Simple Regression</th>
                <th className="text-left py-2 px-3 text-dark-300">Multiple Regression</th>
              </tr>
            </thead>
            <tbody className="text-dark-400">
              <tr className="border-b border-dark-800">
                <td className="py-2 px-3">TV</td>
                <td className="py-2 px-3">0.048 ***</td>
                <td className="py-2 px-3">0.046 ***</td>
              </tr>
              <tr className="border-b border-dark-800">
                <td className="py-2 px-3">Radio</td>
                <td className="py-2 px-3">0.203 ***</td>
                <td className="py-2 px-3">0.189 ***</td>
              </tr>
              <tr>
                <td className="py-2 px-3">Newspaper</td>
                <td className="py-2 px-3 text-amber-400">0.055 ***</td>
                <td className="py-2 px-3 text-dark-500">-0.001</td>
              </tr>
            </tbody>
          </table>
        </div>
        <p className="text-dark-400 text-sm">
          Newspaper appears significant in simple regression but not in multiple regression! 
          This is because newspaper spending is correlated with radio spending. The simple 
          regression coefficient for newspaper is "borrowing" the effect of radio.
        </p>
      </Example>

      <Callout type="warning">
        <strong>Interpreting Correlated Predictors:</strong> When predictors are correlated, 
        it can be difficult to determine the individual contribution of each. The coefficient 
        for one variable represents its effect <em>holding others constant</em>, which may not 
        reflect real-world scenarios where variables change together.
      </Callout>

      <h2>Summary</h2>

      <p>
        Multiple linear regression extends simple linear regression to include multiple predictors:
      </p>

      <ul className="list-disc list-inside text-dark-300 space-y-2 my-4">
        <li>Each coefficient <Math>\beta_j</Math> represents the effect of <Math>X_j</Math> holding other predictors fixed</li>
        <li>The F-statistic tests whether at least one predictor is useful</li>
        <li><Math>R^2</Math> always increases with more predictors; use adjusted <Math>R^2</Math> for comparison</li>
        <li>Correlation among predictors can make interpretation challenging</li>
        <li>Variable selection helps identify the most important predictors</li>
      </ul>

      <Callout type="success">
        <strong>Next:</strong> We'll explore other important considerations in regression, 
        including qualitative predictors, interaction effects, and potential problems like 
        non-linearity and outliers.
      </Callout>

      <SectionQuiz sectionId={7} questions={section07Quiz} title="Multiple Regression Quiz" />
    </LessonLayout>
  );
}
