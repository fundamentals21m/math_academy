import { LessonLayout } from '@/components/layout/LessonLayout';
import { SectionQuiz } from '@/components/quiz/SectionQuiz';
import { section09Quiz } from '@/data/quizzes';
import { Callout } from '@/components/common/Callout';
import { Example, RCodeBlock } from '@/components/common/ContentBlocks';
import { Math, MathBlock } from '@/components/common/MathBlock';

export default function Section09() {
  return (
    <LessonLayout sectionId={9}>
      <h2>The Marketing Plan</h2>

      <p>
        We now return to the advertising data introduced at the beginning of this chapter. 
        Recall that we wish to advise a client on how to improve sales of a particular product. 
        The data set consists of the sales of that product in 200 different markets, along with 
        advertising budgets for the product in each of those markets for three different media: 
        TV, radio, and newspaper.
      </p>

      <Callout type="info">
        <strong>The Business Question:</strong> How should advertising budget be allocated 
        across TV, radio, and newspaper in order to maximize sales?
      </Callout>

      <h2>Step 1: Is There a Relationship?</h2>

      <p>
        The first question we address is whether the advertising data provide evidence of an 
        association between advertising expenditure and sales.
      </p>

      <Example title="F-Test for Overall Significance">
        <p>
          We fit a multiple regression model of sales onto TV, radio, and newspaper. The F-statistic 
          tests whether at least one of the predictors is related to sales.
        </p>
        <RCodeBlock
          title="Testing Overall Significance"
          output={`F-statistic: 570.3 on 3 and 196 DF,  p-value: < 2.2e-16`}
        >
{`lm.fit <- lm(sales ~ TV + radio + newspaper, data = Advertising)
summary(lm.fit)$fstatistic`}
        </RCodeBlock>
        <p className="mt-3 text-dark-300">
          <strong>Conclusion:</strong> The p-value is essentially zero, so we reject the null 
          hypothesis and conclude that at least one of the advertising media is associated with sales.
        </p>
      </Example>

      <h2>Step 2: Which Media Are Important?</h2>

      <p>
        Having established that at least one predictor is useful, we now ask: which media 
        contribute to sales?
      </p>

      <div className="my-6 overflow-x-auto">
        <table className="w-full text-sm">
          <thead>
            <tr className="border-b border-dark-700">
              <th className="text-left py-2 px-3 text-dark-300">Predictor</th>
              <th className="text-left py-2 px-3 text-dark-300">Coefficient</th>
              <th className="text-left py-2 px-3 text-dark-300">Std. Error</th>
              <th className="text-left py-2 px-3 text-dark-300">t-statistic</th>
              <th className="text-left py-2 px-3 text-dark-300">p-value</th>
            </tr>
          </thead>
          <tbody className="text-dark-400">
            <tr className="border-b border-dark-800">
              <td className="py-2 px-3">Intercept</td>
              <td className="py-2 px-3">2.939</td>
              <td className="py-2 px-3">0.312</td>
              <td className="py-2 px-3">9.42</td>
              <td className="py-2 px-3 text-emerald-400">&lt; 0.0001</td>
            </tr>
            <tr className="border-b border-dark-800">
              <td className="py-2 px-3 font-semibold text-emerald-400">TV</td>
              <td className="py-2 px-3">0.046</td>
              <td className="py-2 px-3">0.001</td>
              <td className="py-2 px-3">32.81</td>
              <td className="py-2 px-3 text-emerald-400">&lt; 0.0001</td>
            </tr>
            <tr className="border-b border-dark-800">
              <td className="py-2 px-3 font-semibold text-emerald-400">Radio</td>
              <td className="py-2 px-3">0.189</td>
              <td className="py-2 px-3">0.009</td>
              <td className="py-2 px-3">21.89</td>
              <td className="py-2 px-3 text-emerald-400">&lt; 0.0001</td>
            </tr>
            <tr>
              <td className="py-2 px-3 text-dark-500">Newspaper</td>
              <td className="py-2 px-3 text-dark-500">-0.001</td>
              <td className="py-2 px-3 text-dark-500">0.006</td>
              <td className="py-2 px-3 text-dark-500">-0.18</td>
              <td className="py-2 px-3 text-dark-500">0.86</td>
            </tr>
          </tbody>
        </table>
      </div>

      <Callout type="warning">
        <strong>Key Finding:</strong> TV and radio have significant p-values, but newspaper 
        does not! Despite the apparent relationship in simple regression, newspaper advertising 
        does not have a significant effect when TV and radio are accounted for.
      </Callout>

      <p>
        Why the discrepancy? In simple regression, newspaper had a significant coefficient. 
        The explanation is that markets with high newspaper advertising tend to also have high 
        radio advertising. The simple regression coefficient was "borrowing" the effect of radio.
      </p>

      <h2>Step 3: How Large Is the Effect?</h2>

      <p>
        We can compute confidence intervals to quantify the uncertainty in our coefficient estimates:
      </p>

      <RCodeBlock
        title="Confidence Intervals"
        output={`                  2.5 %     97.5 %
(Intercept)  2.32370896  3.5540816
TV           0.04302889  0.0484909
radio        0.17217634  0.2048792
newspaper   -0.01273562  0.0106607`}
      >
{`confint(lm.fit)`}
      </RCodeBlock>

      <p>
        The 95% confidence intervals reveal that:
      </p>

      <ul className="list-disc list-inside text-dark-300 space-y-2 my-4">
        <li>
          For TV, a $1,000 increase in spending is associated with an increase in sales 
          of between 43 and 48 units
        </li>
        <li>
          For radio, a $1,000 increase is associated with an increase of between 172 and 205 units
        </li>
        <li>
          For newspaper, the interval <em>includes zero</em>, consistent with the p-value 
          indicating no significant effect
        </li>
      </ul>

      <h2>Step 4: How Good Is the Model?</h2>

      <p>
        We assess model accuracy using <Math>R^2</Math> and RSE:
      </p>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 my-6">
        <div className="p-4 bg-dark-800/50 rounded-xl border border-emerald-500/30">
          <h4 className="text-emerald-400 font-semibold mb-2">R² = 0.897</h4>
          <p className="text-dark-300 text-sm">
            The model explains 89.7% of the variance in sales. This is a strong fit, 
            suggesting the three media explain most of the variability in sales.
          </p>
        </div>
        <div className="p-4 bg-dark-800/50 rounded-xl border border-blue-500/30">
          <h4 className="text-blue-400 font-semibold mb-2">RSE = 1.69</h4>
          <p className="text-dark-300 text-sm">
            The average deviation from the true regression line is about 1,690 units. 
            Given the mean sales of 14,000 units, this represents about 12% error.
          </p>
        </div>
      </div>

      <h2>Step 5: Is There Synergy?</h2>

      <p>
        The additive model assumes that spending on radio advertising has the same effect 
        regardless of TV spending. But perhaps there is <em>synergy</em>—the effect of TV 
        advertising is enhanced by radio advertising.
      </p>

      <Example title="Testing for Interaction">
        <RCodeBlock
          title="Model with Interaction"
          output={`Coefficients:
              Estimate Std. Error t value Pr(>|t|)    
(Intercept) 6.750e+00  2.479e-01  27.233  < 2e-16 ***
TV          1.910e-02  1.504e-03  12.699  < 2e-16 ***
radio       2.886e-02  8.905e-03   3.241  0.00142 ** 
TV:radio    1.086e-03  5.242e-05  20.727  < 2e-16 ***

Residual standard error: 0.9435 on 196 degrees of freedom
Multiple R-squared:  0.9678,	Adjusted R-squared:  0.9673`}
        >
{`lm.fit.int <- lm(sales ~ TV * radio, data = Advertising)
summary(lm.fit.int)`}
        </RCodeBlock>
        <p className="mt-3 text-dark-300">
          The interaction term is highly significant (p &lt; 0.0001), and <Math>R^2</Math> increases 
          from 0.897 to 0.968. This confirms strong synergy between TV and radio advertising.
        </p>
      </Example>

      <p>
        The model with interaction tells a different story:
      </p>

      <MathBlock>{`\\text{sales} \\approx 6.75 + 0.019 \\times \\text{TV} + 0.029 \\times \\text{radio} + 0.0011 \\times (\\text{TV} \\times \\text{radio})`}</MathBlock>

      <p>
        We can rewrite this to show the effect of TV for different levels of radio:
      </p>

      <MathBlock>{`\\text{sales} \\approx 6.75 + (0.019 + 0.0011 \\times \\text{radio}) \\times \\text{TV} + 0.029 \\times \\text{radio}`}</MathBlock>

      <div className="my-6 p-5 bg-dark-800/50 rounded-xl border border-dark-700">
        <h4 className="text-dark-200 font-semibold mb-3">Interpreting the Synergy</h4>
        <ul className="space-y-2 text-dark-300 text-sm">
          <li>
            <strong>If radio = 0:</strong> Effect of $1,000 in TV ≈ 19 extra units sold
          </li>
          <li>
            <strong>If radio = 20:</strong> Effect of $1,000 in TV ≈ 19 + 0.0011 × 20 × 1000 = 41 units
          </li>
          <li>
            <strong>If radio = 40:</strong> Effect of $1,000 in TV ≈ 19 + 0.0011 × 40 × 1000 = 63 units
          </li>
        </ul>
        <p className="mt-3 text-dark-400 text-sm">
          TV advertising is <em>much more effective</em> when combined with radio advertising!
        </p>
      </div>

      <h2>Step 6: Predictions</h2>

      <p>
        Given a new market with specific advertising budgets, how do we predict sales?
      </p>

      <RCodeBlock
        title="Making Predictions"
        output={`       fit      lwr      upr
1 20.55546 18.73474 22.37617`}
      >
{`# Predict for a market with $100K TV and $20K radio
new.data <- data.frame(TV = 100, radio = 20)
predict(lm.fit.int, new.data, interval = "prediction")`}
      </RCodeBlock>

      <p>
        For a market with $100,000 in TV advertising and $20,000 in radio advertising, 
        we predict sales of about 20,555 units, with a 95% prediction interval of 
        (18,735, 22,376).
      </p>

      <h2>Recommendations to the Client</h2>

      <div className="my-6 p-6 bg-gradient-to-br from-emerald-500/10 to-emerald-600/5 rounded-xl border border-emerald-500/20">
        <h3 className="text-lg font-semibold text-emerald-400 mb-4">Key Findings</h3>
        <ol className="list-decimal list-inside space-y-3 text-dark-300">
          <li>
            <strong>TV and radio advertising are both associated with increased sales.</strong> 
            Newspaper advertising is not, after accounting for the other media.
          </li>
          <li>
            <strong>There is strong synergy between TV and radio.</strong> 
            The effect of one medium is enhanced by spending on the other.
          </li>
          <li>
            <strong>Radio has a higher per-dollar return than TV</strong> 
            (coefficient of 0.029 vs 0.019 in the interaction model), but this depends on 
            the level of TV spending.
          </li>
          <li>
            <strong>Reallocate newspaper budget to TV and radio.</strong> 
            The evidence suggests newspaper spending could be better used elsewhere.
          </li>
          <li>
            <strong>Consider the interaction when planning.</strong> 
            It may be more effective to increase spending on both TV and radio together 
            rather than focusing on just one.
          </li>
        </ol>
      </div>

      <Callout type="success">
        <strong>The Power of Regression:</strong> This case study illustrates how multiple 
        regression, properly applied, can provide actionable business insights. By examining 
        statistical significance, effect sizes, interactions, and model fit, we can make 
        data-driven recommendations.
      </Callout>

      <SectionQuiz sectionId={9} questions={section09Quiz} title="Marketing Plan Quiz" />
    </LessonLayout>
  );
}
