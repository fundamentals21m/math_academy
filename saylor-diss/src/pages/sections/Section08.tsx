import { LessonLayout } from '../../components/layout/LessonLayout';
import { Callout } from '../../components/common/Callout';
import { Card, CardGrid } from '../../components/common/Card';

export default function Section08() {
  return (
    <LessonLayout sectionId={8}>
      <h2 className="text-2xl font-semibold mb-4">Model Scope</h2>

      <p className="my-4">
        The model draws upon Machiavelli's rich description of political interaction in order to
        simulate many of the modes of behavior described in his works. Because the model is intended
        to replicate some of the political conditions in a <strong className="text-indigo-400">Renaissance
        Italian city-state</strong>, economic modes of production and technology are assumed to
        be constant.
      </p>

      {/* Time Horizon */}
      <h3 className="text-xl font-semibold mt-8 mb-4">Time Horizon and Assumptions</h3>

      <p className="my-4">
        Most of the scenarios tested run for about <strong>35 years</strong>, thus fluctuations in
        the quality of land or environmental effects are also ignored. Perhaps the most significant
        assumption of the model is no population growth over this period. Because the primary units
        in the model (freedom and welfare) are intensive quantities (per person/aristocrat), an
        increase in size alone would have little effect (assuming resources to support the added
        population were available).
      </p>

      <Callout type="info">
        <p>
          <strong>Intensive vs. Extensive Variables:</strong> Freedom and welfare are measured
          <em>per person</em>—they don't automatically increase with population. However, a change
          in the proportional make-up of the aristocracy and populace would be significant and is
          captured in the model.
        </p>
      </Callout>

      {/* Variable Categories */}
      <h3 className="text-xl font-semibold mt-8 mb-4">Endogenous, Exogenous, and Excluded Variables</h3>

      <p className="my-4">
        System dynamics models distinguish between three categories of variables:
      </p>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-4 my-6">
        <div className="bg-dark-800/50 rounded-xl p-4 border border-dark-700">
          <h4 className="text-lg font-semibold text-green-400 mb-2">Endogenous</h4>
          <p className="text-dark-400 text-sm mb-2">Determined within the model</p>
          <ul className="text-dark-300 text-sm space-y-1">
            <li>• Production</li>
            <li>• Freedom</li>
            <li>• Economic Welfare</li>
            <li>• Executive Authority</li>
            <li>• Legislative Power Distribution</li>
            <li>• Social Expectations</li>
            <li>• Government Policy</li>
            <li>• Social Unrest</li>
            <li>• Rebellion</li>
          </ul>
        </div>
        <div className="bg-dark-800/50 rounded-xl p-4 border border-dark-700">
          <h4 className="text-lg font-semibold text-amber-400 mb-2">Exogenous</h4>
          <p className="text-dark-400 text-sm mb-2">Set externally as inputs</p>
          <ul className="text-dark-300 text-sm space-y-1">
            <li>• Land Quality</li>
            <li>• Famine</li>
            <li>• Population</li>
            <li>• Ratio of Upper to Lower Class</li>
            <li>• Environmental Influence on Social Norms</li>
          </ul>
        </div>
        <div className="bg-dark-800/50 rounded-xl p-4 border border-dark-700">
          <h4 className="text-lg font-semibold text-red-400 mb-2">Excluded</h4>
          <p className="text-dark-400 text-sm mb-2">Outside model scope</p>
          <ul className="text-dark-300 text-sm space-y-1">
            <li>• War (economic effects can be simulated)</li>
            <li>• Technological change</li>
            <li>• Long-term demographic shifts</li>
          </ul>
        </div>
      </div>

      {/* Model Focus */}
      <h3 className="text-xl font-semibold mt-8 mb-4">Why These Variables?</h3>

      <p className="my-4">
        The selection of endogenous variables reflects the core political dynamics Machiavelli
        analyzed: the interaction between factions over freedom and economic welfare, mediated
        through legislative and executive processes, with the possibility of breakdown into
        rebellion.
      </p>

      <CardGrid>
        <Card>
          <h4 className="font-semibold text-indigo-400 mb-2">Political Variables</h4>
          <p className="text-sm text-dark-300">
            Freedom, executive authority, legislative influence—these capture the distribution of
            political power that Machiavelli saw as central to republican stability.
          </p>
        </Card>
        <Card>
          <h4 className="font-semibold text-indigo-400 mb-2">Economic Variables</h4>
          <p className="text-sm text-dark-300">
            Production, welfare, distribution—economic factors drive much of the discontent that
            leads to political instability.
          </p>
        </Card>
        <Card>
          <h4 className="font-semibold text-indigo-400 mb-2">Social Variables</h4>
          <p className="text-sm text-dark-300">
            Expectations, discontent, unrest—these psychological and behavioral factors mediate
            between conditions and political action.
          </p>
        </Card>
        <Card>
          <h4 className="font-semibold text-indigo-400 mb-2">Crisis Variables</h4>
          <p className="text-sm text-dark-300">
            Rebellion, opposition—these capture the non-legislative political processes that occur
            when normal channels fail.
          </p>
        </Card>
      </CardGrid>

      {/* Simulation Parameters */}
      <h3 className="text-xl font-semibold mt-8 mb-4">Simulation Parameters</h3>

      <div className="bg-dark-800/50 rounded-xl p-6 border border-dark-700 my-6">
        <h4 className="text-lg font-semibold text-indigo-400 mb-4">Key Model Parameters</h4>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          <div className="text-center">
            <p className="text-3xl font-bold text-indigo-400">35</p>
            <p className="text-dark-400 text-sm">Years simulated</p>
          </div>
          <div className="text-center">
            <p className="text-3xl font-bold text-indigo-400">3</p>
            <p className="text-dark-400 text-sm">Political factions</p>
          </div>
          <div className="text-center">
            <p className="text-3xl font-bold text-indigo-400">9</p>
            <p className="text-dark-400 text-sm">Endogenous variables</p>
          </div>
          <div className="text-center">
            <p className="text-3xl font-bold text-indigo-400">5</p>
            <p className="text-dark-400 text-sm">Exogenous inputs</p>
          </div>
        </div>
      </div>

      <Callout type="note">
        <p>
          <strong>Model Philosophy:</strong> Machiavelli's philosophy is vague in areas where he
          makes general statements about political dynamics. Drawing on outside sources helps fill
          these gaps while remaining true to his systematic approach. The model tests whether
          Machiavelli's qualitative insights produce consistent quantitative behavior.
        </p>
      </Callout>

      {/* Key Takeaways */}
      <h2 className="text-2xl font-semibold mt-10 mb-4">Key Takeaways</h2>

      <div className="bg-dark-800 rounded-lg p-6">
        <ul className="space-y-3">
          <li className="flex items-start gap-3">
            <span className="text-indigo-400 font-bold">1.</span>
            <span>
              The model simulates a <strong>Renaissance Italian city-state</strong> over
              approximately 35 years with constant technology.
            </span>
          </li>
          <li className="flex items-start gap-3">
            <span className="text-indigo-400 font-bold">2.</span>
            <span>
              <strong>Nine endogenous variables</strong> capture political, economic, social,
              and crisis dynamics.
            </span>
          </li>
          <li className="flex items-start gap-3">
            <span className="text-indigo-400 font-bold">3.</span>
            <span>
              <strong>Exogenous inputs</strong> like famine and class ratios can be varied to
              test system responses.
            </span>
          </li>
          <li className="flex items-start gap-3">
            <span className="text-indigo-400 font-bold">4.</span>
            <span>
              War and technological change are <strong>excluded</strong> to focus on pure
              political dynamics.
            </span>
          </li>
        </ul>
      </div>
    </LessonLayout>
  );
}
