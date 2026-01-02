import { LessonLayout } from '@/components/layout/LessonLayout';
import { SectionQuiz } from '@/components/quiz/SectionQuiz';
import { section08Quiz } from '@/data/quizzes';
import { Callout } from '@/components/common/Callout';
import { Definition, Example, RCodeBlock } from '@/components/common/ContentBlocks';
import { InlineMath, MathBlock } from '@/components/common/MathBlock';

export default function Section08() {
  return (
    <LessonLayout sectionId={8}>
      <h2>Other Considerations in the Regression Model</h2>

      <p>
        So far we have assumed that the predictors are quantitative. But often some predictors 
        are <em>qualitative</em>. We also need to consider extensions like interactions and 
        potential problems that can arise in regression.
      </p>

      <h2>Qualitative Predictors</h2>

      <p>
        Qualitative variables, also called <em>categorical variables</em> or <em>factors</em>, 
        take on discrete values. Examples include gender, region, or brand.
      </p>

      <h3>Two-Level Qualitative Variables</h3>

      <p>
        For a qualitative variable with two levels (e.g., male/female), we create a 
        <em>dummy variable</em> (or <em>indicator variable</em>):
      </p>

      <Definition title="Dummy Variable">
        <MathBlock>{`x_i = \\begin{cases} 1 & \\text{if } i\\text{th person is female} \\\\ 0 & \\text{if } i\\text{th person is male} \\end{cases}`}</MathBlock>
        <p className="mt-2">
          The resulting model is:
        </p>
        <MathBlock>{`y_i = \\beta_0 + \\beta_1 x_i + \\epsilon_i = \\begin{cases} \\beta_0 + \\beta_1 + \\epsilon_i & \\text{if female} \\\\ \\beta_0 + \\epsilon_i & \\text{if male} \\end{cases}`}</MathBlock>
        <p className="mt-2">
          Here <InlineMath>\beta_0</InlineMath> is the average value for males (the <em>baseline</em>), 
          and <InlineMath>\beta_1</InlineMath> is the difference between females and males.
        </p>
      </Definition>

      <h3>Qualitative Variables with More Than Two Levels</h3>

      <p>
        When a qualitative predictor has more than two levels, we create multiple dummy variables. 
        For example, for ethnicity with three levels (Asian, Caucasian, African American):
      </p>

      <MathBlock>{`x_{i1} = \\begin{cases} 1 & \\text{if Asian} \\\\ 0 & \\text{otherwise} \\end{cases} \\quad x_{i2} = \\begin{cases} 1 & \\text{if Caucasian} \\\\ 0 & \\text{otherwise} \\end{cases}`}</MathBlock>

      <p>
        The model becomes:
      </p>

      <MathBlock>{`y_i = \\beta_0 + \\beta_1 x_{i1} + \\beta_2 x_{i2} + \\epsilon_i`}</MathBlock>

      <Callout type="info">
        <strong>Baseline Category:</strong> With <InlineMath>k</InlineMath> levels, we create <InlineMath>k-1</InlineMath> dummy 
        variables. The level without a dummy variable is the <em>baseline</em>. The coefficients 
        represent differences from this baseline.
      </Callout>

      <RCodeBlock
        title="Qualitative Predictors in R"
        output={`Coefficients:
                  Estimate Std. Error t value Pr(>|t|)    
(Intercept)        5.7066     0.5314  10.739  < 2e-16 ***
ShelveLoc Good     4.8487     0.1528  31.724  < 2e-16 ***
ShelveLoc Medium   1.9533     0.1258  15.531  < 2e-16 ***`}
      >
{`# R automatically creates dummy variables for factors
lm.fit <- lm(Sales ~ ShelveLoc, data = Carseats)
summary(lm.fit)

# ShelveLoc has 3 levels: Bad, Good, Medium
# Bad is the baseline (intercept)
# Coefficients show difference from Bad`}
      </RCodeBlock>

      <h2>Interaction Terms</h2>

      <p>
        The standard linear model assumes that the effect of one predictor on the response is 
        <em>additive</em>—it doesn't depend on the values of other predictors. But this is 
        often unrealistic.
      </p>

      <Definition title="Interaction Effect">
        <p>
          An <strong>interaction</strong> occurs when the effect of one predictor on the response 
          depends on the value of another predictor. We include an interaction term:
        </p>
        <MathBlock>{`Y = \\beta_0 + \\beta_1 X_1 + \\beta_2 X_2 + \\beta_3 X_1 X_2 + \\epsilon`}</MathBlock>
        <p className="mt-2">
          This can be rewritten as:
        </p>
        <MathBlock>{`Y = \\beta_0 + (\\beta_1 + \\beta_3 X_2) X_1 + \\beta_2 X_2 + \\epsilon`}</MathBlock>
        <p className="mt-2">
          The effect of <InlineMath>X_1</InlineMath> on <InlineMath>Y</InlineMath> is now <InlineMath>\beta_1 + \beta_3 X_2</InlineMath>, 
          which depends on <InlineMath>X_2</InlineMath>.
        </p>
      </Definition>

      <Example title="TV and Radio Interaction">
        <p>
          In the advertising data, there may be <em>synergy</em> between TV and radio advertising. 
          Spending on radio might be more effective when TV spending is also high.
        </p>
        <MathBlock>{`\\text{sales} = \\beta_0 + \\beta_1 \\times \\text{TV} + \\beta_2 \\times \\text{radio} + \\beta_3 \\times (\\text{TV} \\times \\text{radio}) + \\epsilon`}</MathBlock>
        <p className="mt-2">
          The coefficient <InlineMath>\beta_3</InlineMath> for the interaction term is positive and highly 
          significant, confirming that TV and radio advertising are more effective together than 
          the sum of their individual effects.
        </p>
      </Example>

      <RCodeBlock
        title="Interaction in R"
        output={`Coefficients:
              Estimate Std. Error t value Pr(>|t|)    
(Intercept) 6.750e+00  2.479e-01  27.233  < 2e-16 ***
TV          1.910e-02  1.504e-03  12.699  < 2e-16 ***
radio       2.886e-02  8.905e-03   3.241  0.00142 ** 
TV:radio    1.086e-03  5.242e-05  20.727  < 2e-16 ***

Multiple R-squared:  0.9678`}
      >
{`# Include interaction term
lm.fit <- lm(sales ~ TV * radio, data = Advertising)
summary(lm.fit)

# TV * radio is shorthand for TV + radio + TV:radio
# The interaction is highly significant!`}
      </RCodeBlock>

      <Callout type="warning">
        <strong>Hierarchical Principle:</strong> If we include an interaction in a model, we 
        should also include the main effects, even if the p-values for the main effects are 
        not significant. The interaction term only makes sense in the context of the main effects.
      </Callout>

      <h2>Non-linear Relationships</h2>

      <p>
        Linear regression can model some non-linear relationships by including transformed 
        versions of the predictors. For example, we can include polynomial terms.
      </p>

      <Definition title="Polynomial Regression">
        <MathBlock>{`y_i = \\beta_0 + \\beta_1 x_i + \\beta_2 x_i^2 + \\cdots + \\beta_d x_i^d + \\epsilon_i`}</MathBlock>
        <p className="mt-2">
          This is still a <em>linear</em> model because it is linear in the coefficients 
          <InlineMath>\beta_0, \beta_1, \ldots, \beta_d</InlineMath>. The predictors are <InlineMath>x, x^2, \ldots, x^d</InlineMath>.
        </p>
      </Definition>

      <RCodeBlock
        title="Polynomial Regression in R"
        output={`Coefficients:
              Estimate Std. Error t value Pr(>|t|)    
(Intercept) -1.42e+01   2.37e+00  -5.986 3.28e-09 ***
horsepower   1.98e-01   1.18e-02  16.737  < 2e-16 ***
I(horsepower^2)  -7.69e-04   1.38e-05 -55.658  < 2e-16 ***

Multiple R-squared:  0.6876`}
      >
{`# Quadratic fit
lm.fit2 <- lm(mpg ~ horsepower + I(horsepower^2), data = Auto)
summary(lm.fit2)

# The squared term is highly significant
# This indicates a non-linear relationship`}
      </RCodeBlock>

      <h2>Potential Problems</h2>

      <p>
        When fitting a linear regression model, several problems may arise. Here are the most 
        common ones and how to detect them.
      </p>

      <h3>1. Non-linearity of the Data</h3>

      <p>
        If the true relationship is non-linear, the linear model will systematically over- or 
        under-predict. Use <em>residual plots</em> to detect this.
      </p>

      <div className="p-4 bg-dark-800/50 rounded-xl border border-dark-700 my-4">
        <h4 className="text-emerald-400 font-semibold mb-2">Detection</h4>
        <p className="text-dark-300 text-sm">
          Plot residuals <InlineMath>e_i = y_i - \hat y_i</InlineMath> against fitted values <InlineMath>\hat y_i</InlineMath>. 
          Look for patterns—a curved pattern suggests non-linearity.
        </p>
      </div>

      <h3>2. Correlation of Error Terms</h3>

      <p>
        An important assumption is that the error terms are uncorrelated. If there is correlation, 
        the estimated standard errors will be too small, leading to overly narrow confidence intervals.
      </p>

      <div className="p-4 bg-dark-800/50 rounded-xl border border-dark-700 my-4">
        <h4 className="text-emerald-400 font-semibold mb-2">Detection</h4>
        <p className="text-dark-300 text-sm">
          Common with time series data. Plot residuals against time or observation order 
          and look for patterns. The Durbin-Watson test can formally test for autocorrelation.
        </p>
      </div>

      <h3>3. Non-constant Variance (Heteroscedasticity)</h3>

      <p>
        We assume <InlineMath>{"\\text{Var}(\\epsilon_i) = \\sigma^2"}</InlineMath> is constant. If the variance 
        of errors increases with the response, we have <em>heteroscedasticity</em>.
      </p>

      <div className="p-4 bg-dark-800/50 rounded-xl border border-dark-700 my-4">
        <h4 className="text-emerald-400 font-semibold mb-2">Detection & Solution</h4>
        <p className="text-dark-300 text-sm">
          Look for a funnel shape in the residual plot. Common solutions include transforming 
          the response using <InlineMath>{`\\log(Y)`}</InlineMath> or <InlineMath>{`\\sqrt{Y}`}</InlineMath>.
        </p>
      </div>

      <h3>4. Outliers</h3>

      <p>
        An <em>outlier</em> is a point for which <InlineMath>y_i</InlineMath> is far from the value predicted 
        by the model. Outliers can have large effects on RSE and <InlineMath>R^2</InlineMath>.
      </p>

      <div className="p-4 bg-dark-800/50 rounded-xl border border-dark-700 my-4">
        <h4 className="text-emerald-400 font-semibold mb-2">Detection</h4>
        <p className="text-dark-300 text-sm">
          Examine <em>studentized residuals</em>. Observations with studentized residuals 
          greater than 3 in absolute value are potential outliers.
        </p>
      </div>

      <h3>5. High-Leverage Points</h3>

      <p>
        Observations with unusual predictor values have <em>high leverage</em>. They can have a 
        large impact on the fitted regression line.
      </p>

      <Definition title="Leverage Statistic">
        <p>
          The leverage statistic <InlineMath>h_i</InlineMath> quantifies the leverage of observation <InlineMath>i</InlineMath>. 
          It always lies between <InlineMath>1/n</InlineMath> and 1, and the average leverage is <InlineMath>(p+1)/n</InlineMath>.
        </p>
        <p className="mt-2">
          Observations with <InlineMath>h_i</InlineMath> greatly exceeding <InlineMath>(p+1)/n</InlineMath> are high-leverage points.
        </p>
      </Definition>

      <h3>6. Collinearity</h3>

      <p>
        <em>Collinearity</em> refers to the situation in which two or more predictor variables 
        are closely related to one another. It can make it difficult to determine the individual 
        effects of collinear variables.
      </p>

      <Definition title="Variance Inflation Factor (VIF)">
        <p>
          The VIF measures how much the variance of a coefficient is inflated due to collinearity:
        </p>
        <MathBlock>{`\\text{VIF}(\\hat{\\beta}_j) = \\frac{1}{1 - R^2_{X_j | X_{-j}}}`}</MathBlock>
        <p className="mt-2">
          where <InlineMath>{"R^2_{X_j | X_{-j}}"}</InlineMath> is the <InlineMath>R^2</InlineMath> from regressing <InlineMath>X_j</InlineMath> onto 
          all other predictors. A VIF of 1 indicates no collinearity; values exceeding 5 or 10 
          indicate problematic collinearity.
        </p>
      </Definition>

      <RCodeBlock
        title="Diagnostic Plots in R"
      >
{`# Fit model
lm.fit <- lm(sales ~ TV + radio + newspaper, data = Advertising)

# Diagnostic plots
par(mfrow = c(2, 2))
plot(lm.fit)

# Calculate VIF (requires car package)
library(car)
vif(lm.fit)

# Studentized residuals
rstudent(lm.fit)

# Leverage values
hatvalues(lm.fit)`}
      </RCodeBlock>

      <h2>Summary</h2>

      <ul className="list-disc list-inside text-dark-300 space-y-2 my-4">
        <li>Qualitative predictors are included using dummy variables</li>
        <li>Interaction terms model non-additive effects between predictors</li>
        <li>Polynomial terms can capture non-linear relationships</li>
        <li>Always check residual plots for violations of assumptions</li>
        <li>Use VIF to detect collinearity among predictors</li>
      </ul>

      <Callout type="success">
        <strong>Coming Up:</strong> Next we'll examine a case study applying these concepts 
        to a marketing problem, followed by a comparison of linear regression with K-nearest 
        neighbors.
      </Callout>

      <SectionQuiz sectionId={8} questions={section08Quiz} title="Regression Considerations Quiz" />
    </LessonLayout>
  );
}
