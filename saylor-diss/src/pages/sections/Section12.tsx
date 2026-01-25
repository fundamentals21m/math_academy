import { LessonLayout } from '../../components/layout/LessonLayout';
import { Callout } from '../../components/common/Callout';
import { Card, CardGrid } from '../../components/common/Card';

export default function Section12() {
  return (
    <LessonLayout sectionId={12}>
      <h2 className="text-2xl font-semibold mb-4">Economic Considerations</h2>

      <p className="my-4">
        Government regulation of civil liberties within the society is relatively straightforward.
        It is just a matter of having the power to force the populace to obey. Regulation of the
        economy is more complex. Freedom involves only human interactions, economics requires
        interaction with nature as well; plentiful harvests cannot be legislated.
      </p>

      {/* Economic vs Political */}
      <h3 className="text-xl font-semibold mt-8 mb-4">Economic Distribution vs. Political Freedom</h3>

      <p className="my-4">
        Here, government policy affects the <strong className="text-indigo-400">distribution</strong> of
        economic output. Economic Welfare is then determined by multiplying total production by
        the output fraction allocated to the populace, after accounting for the slight time delay
        involved.
      </p>

      <div className="bg-dark-800/50 rounded-xl p-6 border border-dark-700 my-6">
        <h4 className="text-lg font-semibold text-indigo-400 mb-4">Economic Flow</h4>
        <div className="flex flex-col items-center space-y-4">
          <div className="bg-dark-700 px-4 py-2 rounded-lg">Total Production</div>
          <div className="text-dark-400">↓</div>
          <div className="bg-dark-700 px-4 py-2 rounded-lg">Government Economic Policy</div>
          <div className="text-dark-400">↓</div>
          <div className="bg-dark-700 px-4 py-2 rounded-lg">Economic Distribution</div>
          <div className="flex gap-8 mt-2">
            <div className="text-center">
              <div className="text-green-400">↓</div>
              <div className="bg-dark-700 px-3 py-1 rounded text-sm">Popular Welfare</div>
            </div>
            <div className="text-center">
              <div className="text-amber-400">↓</div>
              <div className="bg-dark-700 px-3 py-1 rounded text-sm">Aristocratic Welfare</div>
            </div>
          </div>
        </div>
      </div>

      {/* Production Factors */}
      <h3 className="text-xl font-semibold mt-8 mb-4">What Affects Productivity?</h3>

      <p className="my-4">
        Productivity is affected by a number of different variables:
      </p>

      <CardGrid>
        <Card>
          <h4 className="font-semibold text-amber-400 mb-2">Land Quality</h4>
          <p className="text-sm text-dark-300">
            Low quality land can decrease the yield simply by making it harder to farm. This is
            an exogenous variable in the model.
          </p>
        </Card>
        <Card>
          <h4 className="font-semibold text-blue-400 mb-2">Freedom</h4>
          <p className="text-sm text-dark-300">
            Low levels of freedom destroy morale and prevent innovation, leading to stagnation
            in the extreme case.
          </p>
        </Card>
        <Card>
          <h4 className="font-semibold text-green-400 mb-2">Economic Welfare</h4>
          <p className="text-sm text-dark-300">
            When Economic Welfare is low, there are likely to be few incentives to work harder,
            and the health of the populace will decline, decreasing its effectiveness.
          </p>
        </Card>
        <Card>
          <h4 className="font-semibold text-red-400 mb-2">Opposition to Government</h4>
          <p className="text-sm text-dark-300">
            The amount of opposition to the government—civil unrest, strikes, rebellion—directly
            reduces productive capacity.
          </p>
        </Card>
      </CardGrid>

      {/* Feedback Loops */}
      <h3 className="text-xl font-semibold mt-8 mb-4">Economic Feedback Loops</h3>

      <p className="my-4">
        The economic sector contains several important <strong className="text-indigo-400">feedback loops</strong>:
      </p>

      <div className="bg-dark-900 rounded-xl p-6 border border-dark-700 my-6">
        <h4 className="text-lg font-semibold text-red-400 mb-3">Destructive Spiral</h4>
        <p className="text-dark-300 mb-4">
          Low welfare → Low productivity → Lower total output → Even lower welfare → ...
        </p>
        <p className="text-dark-400 text-sm">
          In the extreme case, the population simply starves to death. This represents the
          "inflation tax" effect when output allocated to the populace falls so low that
          Economic Welfare falls significantly.
        </p>
      </div>

      <div className="bg-dark-900 rounded-xl p-6 border border-dark-700 my-6">
        <h4 className="text-lg font-semibold text-amber-400 mb-3">Opposition Spiral</h4>
        <p className="text-dark-300 mb-4">
          Discontent → Opposition → Reduced productivity → Less welfare → More discontent → ...
        </p>
        <p className="text-dark-400 text-sm">
          The amount of opposition to the government can impair the ability of the populace to
          protest or rebel, while simultaneously reducing productive capacity.
        </p>
      </div>

      {/* Executive as Stabilizer */}
      <h3 className="text-xl font-semibold mt-8 mb-4">The Executive as Economic Stabilizer</h3>

      <p className="my-4">
        One of the causes of these fluctuations in economic distribution is the lack of any
        executive influence to mitigate excesses. Under normal conditions, the executive acts
        as a natural stabilizer.
      </p>

      <Callout type="info">
        <p>
          <strong>Stabilization Mechanism:</strong> When some unforeseen event causes economic
          distribution to swing too far in one direction, the executive's influence upon the
          actual government policy causes this extreme to be mitigated. Thus, the presence of
          a strong executive serves to damp the system.
        </p>
      </Callout>

      <p className="my-4">
        However, even with the aid of a sophisticated mathematical model, policy analysis can be
        difficult. For example, after the discussion above, one would naturally expect an increase
        in the strength of the executive to result in a more stable response to the production
        shock. However, this is not necessarily the case.
      </p>

      {/* Key Takeaways */}
      <h2 className="text-2xl font-semibold mt-10 mb-4">Key Takeaways</h2>

      <div className="bg-dark-800 rounded-lg p-6">
        <ul className="space-y-3">
          <li className="flex items-start gap-3">
            <span className="text-indigo-400 font-bold">1.</span>
            <span>
              Economic policy controls <strong>distribution</strong>, not production—you can't
              legislate good harvests.
            </span>
          </li>
          <li className="flex items-start gap-3">
            <span className="text-indigo-400 font-bold">2.</span>
            <span>
              Productivity depends on <strong>land quality, freedom, welfare, and opposition</strong>—all
              interconnected through feedback loops.
            </span>
          </li>
          <li className="flex items-start gap-3">
            <span className="text-indigo-400 font-bold">3.</span>
            <span>
              <strong>Destructive spirals</strong> can emerge where low welfare reduces productivity,
              further reducing welfare.
            </span>
          </li>
          <li className="flex items-start gap-3">
            <span className="text-indigo-400 font-bold">4.</span>
            <span>
              The executive can act as an <strong>economic stabilizer</strong>, but policy effects
              are often counter-intuitive.
            </span>
          </li>
        </ul>
      </div>
    </LessonLayout>
  );
}
