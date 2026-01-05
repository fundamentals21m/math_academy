import { useState } from 'react';
import { LessonLayout } from '@/components/layout';
import { Callout, Card, CardGrid } from '@/components/common';

// Interactive demo: The Philosophy of Confiscation
function ConfiscationPhilosophyDemo() {
  const [showFallacy, setShowFallacy] = useState(false);

  const assumption = {
    title: 'The Confiscationist Assumption',
    claim: 'The total output of society is a fixed quantity, independent of how it is distributed.',
    implication: 'Government can redistribute without affecting production.'
  };

  const reality = {
    title: 'Economic Reality',
    truth: 'Production depends on incentives, which depend on property rights.',
    consequence: 'Confiscation reduces future production by destroying incentives to accumulate capital.'
  };

  return (
    <div className="bg-dark-800 rounded-lg p-6 my-6">
      <h4 className="text-lg font-semibold text-dark-100 mb-4">The Philosophy of Confiscation</h4>

      <div className="grid md:grid-cols-2 gap-4 mb-4">
        <div className={`p-4 rounded-lg ${showFallacy ? 'bg-red-900/30 border border-red-500/50' : 'bg-dark-700'}`}>
          <h5 className="font-medium text-dark-100 mb-2">{assumption.title}</h5>
          <p className="text-dark-300 text-sm mb-2">"{assumption.claim}"</p>
          <p className="text-dark-400 text-sm">{assumption.implication}</p>
        </div>

        <div className={`p-4 rounded-lg ${showFallacy ? 'bg-green-900/30 border border-green-500/50' : 'bg-dark-700'}`}>
          <h5 className="font-medium text-dark-100 mb-2">{reality.title}</h5>
          <p className="text-dark-300 text-sm mb-2">{reality.truth}</p>
          <p className="text-dark-400 text-sm">{reality.consequence}</p>
        </div>
      </div>

      <button
        onClick={() => setShowFallacy(!showFallacy)}
        className="px-4 py-2 bg-blue-600 hover:bg-blue-700 rounded text-white text-sm"
      >
        {showFallacy ? 'Hide Analysis' : 'Reveal the Fallacy'}
      </button>

      {showFallacy && (
        <div className="mt-4 p-4 bg-dark-700 rounded-lg">
          <p className="text-dark-200 text-sm">
            <span className="text-yellow-400 font-medium">The Error:</span> Confiscationists treat
            economic output like a fixed pie to be divided. But the pie's size depends on
            property rights. People produce and accumulate capital only when they expect
            to keep the fruits of their efforts. Repeated confiscation teaches them to
            consume rather than save—shrinking the pie for everyone.
          </p>
        </div>
      )}
    </div>
  );
}

// Interactive demo: Land Reform Effects
function LandReformDemo() {
  const [reformed, setReformed] = useState(false);

  const before = {
    farms: 10,
    avgSize: 1000,
    workersPerFarm: 5,
    outputPerWorker: 100,
    totalAgWorkers: 50,
    industrialWorkers: 150,
    totalOutput: 5000 + 15000
  };

  const after = {
    farms: 100,
    avgSize: 100,
    workersPerFarm: 1.5,
    outputPerWorker: 60,
    totalAgWorkers: 150,
    industrialWorkers: 50,
    totalOutput: 9000 + 5000
  };

  const current = reformed ? after : before;

  return (
    <div className="bg-dark-800 rounded-lg p-6 my-6">
      <h4 className="text-lg font-semibold text-dark-100 mb-4">Land Reform: Who Benefits?</h4>

      <div className="grid md:grid-cols-3 gap-4 mb-4">
        <div className="p-4 bg-dark-700 rounded-lg text-center">
          <div className="text-3xl mb-2">🌾</div>
          <div className="text-xl font-bold text-dark-100">{current.farms}</div>
          <div className="text-sm text-dark-400">Farms</div>
          <div className="text-xs text-dark-500 mt-1">{current.avgSize} acres avg</div>
        </div>

        <div className="p-4 bg-dark-700 rounded-lg text-center">
          <div className="text-3xl mb-2">👨‍🌾</div>
          <div className="text-xl font-bold text-dark-100">{current.totalAgWorkers}</div>
          <div className="text-sm text-dark-400">Farm Workers</div>
          <div className="text-xs text-dark-500 mt-1">{current.outputPerWorker} output/worker</div>
        </div>

        <div className="p-4 bg-dark-700 rounded-lg text-center">
          <div className="text-3xl mb-2">🏭</div>
          <div className="text-xl font-bold text-dark-100">{current.industrialWorkers}</div>
          <div className="text-sm text-dark-400">Industrial Workers</div>
          <div className="text-xs text-dark-500 mt-1">100 output/worker</div>
        </div>
      </div>

      <div className="p-4 bg-dark-700 rounded-lg mb-4">
        <div className="flex justify-between items-center">
          <span className="text-dark-300">Total Economic Output:</span>
          <span className={`text-xl font-bold ${reformed ? 'text-red-400' : 'text-green-400'}`}>
            {current.totalOutput.toLocaleString()} units
          </span>
        </div>
        {reformed && (
          <div className="text-sm text-red-400 mt-2">
            ↓ {((before.totalOutput - after.totalOutput) / before.totalOutput * 100).toFixed(0)}% decline in total output
          </div>
        )}
      </div>

      <button
        onClick={() => setReformed(!reformed)}
        className={`px-4 py-2 rounded text-white text-sm ${
          reformed ? 'bg-green-600 hover:bg-green-700' : 'bg-red-600 hover:bg-red-700'
        }`}
      >
        {reformed ? 'Restore Large Farms' : 'Implement Land Reform'}
      </button>

      {reformed && (
        <div className="mt-4 p-4 bg-red-900/20 border border-red-500/30 rounded-lg">
          <p className="text-dark-200 text-sm">
            <span className="text-red-400 font-medium">Result:</span> Land reform increases
            farm employment but decreases productivity per worker. More workers are tied to
            agriculture, leaving fewer for manufacturing. Total output falls—a certain group
            benefits at the expense of the majority.
          </p>
        </div>
      )}
    </div>
  );
}

// Interactive demo: Confiscatory Taxation Effects
function TaxationEffectsDemo() {
  const [taxRate, setTaxRate] = useState(30);

  const calculateEffects = (rate: number) => {
    const afterTaxReturn = 100 - rate;
    const savingsRate = Math.max(0, (afterTaxReturn - 30) / 70 * 40); // 0-40% savings
    const capitalAccumulation = savingsRate * (100 - rate) / 100;
    const wageGrowth = capitalAccumulation * 0.5; // Capital drives wage growth

    return {
      afterTaxReturn,
      savingsRate: savingsRate.toFixed(1),
      capitalAccumulation: capitalAccumulation.toFixed(1),
      wageGrowth: wageGrowth.toFixed(1),
      investorBehavior: rate > 70 ? 'Consume capital' : rate > 50 ? 'Minimal investment' : 'Active investment'
    };
  };

  const effects = calculateEffects(taxRate);

  return (
    <div className="bg-dark-800 rounded-lg p-6 my-6">
      <h4 className="text-lg font-semibold text-dark-100 mb-4">Confiscatory Taxation & Capital</h4>

      <div className="mb-6">
        <label className="block text-dark-300 text-sm mb-2">
          Marginal Tax Rate: <span className="text-blue-400 font-bold">{taxRate}%</span>
        </label>
        <input
          type="range"
          min="10"
          max="90"
          value={taxRate}
          onChange={(e) => setTaxRate(parseInt(e.target.value))}
          className="w-full accent-blue-500"
        />
        <div className="flex justify-between text-xs text-dark-500 mt-1">
          <span>10%</span>
          <span>50%</span>
          <span>90%</span>
        </div>
      </div>

      <div className="grid md:grid-cols-2 gap-4 mb-4">
        <div className="p-4 bg-dark-700 rounded-lg">
          <h5 className="font-medium text-dark-100 mb-3">Investor Response</h5>
          <div className="space-y-2 text-sm">
            <div className="flex justify-between">
              <span className="text-dark-400">After-tax return:</span>
              <span className={`${effects.afterTaxReturn < 30 ? 'text-red-400' : 'text-green-400'}`}>
                {effects.afterTaxReturn}%
              </span>
            </div>
            <div className="flex justify-between">
              <span className="text-dark-400">Savings rate:</span>
              <span className="text-dark-200">{effects.savingsRate}%</span>
            </div>
            <div className="flex justify-between">
              <span className="text-dark-400">Behavior:</span>
              <span className={`${taxRate > 70 ? 'text-red-400' : taxRate > 50 ? 'text-yellow-400' : 'text-green-400'}`}>
                {effects.investorBehavior}
              </span>
            </div>
          </div>
        </div>

        <div className="p-4 bg-dark-700 rounded-lg">
          <h5 className="font-medium text-dark-100 mb-3">Economic Effects</h5>
          <div className="space-y-2 text-sm">
            <div className="flex justify-between">
              <span className="text-dark-400">Capital accumulation:</span>
              <span className="text-dark-200">{effects.capitalAccumulation} units</span>
            </div>
            <div className="flex justify-between">
              <span className="text-dark-400">Wage growth rate:</span>
              <span className={`${parseFloat(effects.wageGrowth) < 5 ? 'text-red-400' : 'text-green-400'}`}>
                {effects.wageGrowth}%
              </span>
            </div>
          </div>
        </div>
      </div>

      {taxRate > 60 && (
        <div className="p-4 bg-red-900/20 border border-red-500/30 rounded-lg">
          <p className="text-dark-200 text-sm">
            <span className="text-red-400 font-medium">Warning:</span> At confiscatory rates,
            capital holders prefer to consume their capital rather than save it for the tax
            collector. Capital accumulation slows, productivity stagnates, and real wages
            cannot rise.
          </p>
        </div>
      )}
    </div>
  );
}

// Interactive demo: Risk-Taking Under Taxation
function RiskTakingDemo() {
  const [taxRate, setTaxRate] = useState(30);

  const scenarios = [
    { name: 'Safe Bond', risk: 'Low', grossReturn: 5, lossChance: 0 },
    { name: 'New Business', risk: 'High', grossReturn: 40, lossChance: 50 },
  ];

  const calculateNetReturn = (gross: number, loss: number) => {
    const netReturn = gross * (1 - taxRate / 100);
    const expectedValue = netReturn * (1 - loss / 100) - 100 * (loss / 100) * (1 - taxRate / 100);
    return { netReturn: netReturn.toFixed(1), expectedValue };
  };

  const bondCalc = calculateNetReturn(scenarios[0].grossReturn, scenarios[0].lossChance);
  const businessCalc = calculateNetReturn(scenarios[1].grossReturn, scenarios[1].lossChance);

  // The asymmetry: losses aren't fully deductible in practice
  const asymmetryNote = taxRate > 40;

  return (
    <div className="bg-dark-800 rounded-lg p-6 my-6">
      <h4 className="text-lg font-semibold text-dark-100 mb-4">Taxation & Risk-Taking</h4>

      <div className="mb-6">
        <label className="block text-dark-300 text-sm mb-2">
          Tax Rate: <span className="text-blue-400 font-bold">{taxRate}%</span>
        </label>
        <input
          type="range"
          min="0"
          max="80"
          value={taxRate}
          onChange={(e) => setTaxRate(parseInt(e.target.value))}
          className="w-full accent-blue-500"
        />
      </div>

      <div className="grid md:grid-cols-2 gap-4 mb-4">
        <div className="p-4 bg-dark-700 rounded-lg">
          <h5 className="font-medium text-dark-100 mb-2">🏦 Safe Bond</h5>
          <div className="space-y-1 text-sm">
            <div className="flex justify-between">
              <span className="text-dark-400">Gross return:</span>
              <span className="text-dark-200">5%</span>
            </div>
            <div className="flex justify-between">
              <span className="text-dark-400">Net return:</span>
              <span className="text-green-400">{bondCalc.netReturn}%</span>
            </div>
            <div className="flex justify-between">
              <span className="text-dark-400">Risk of loss:</span>
              <span className="text-dark-200">0%</span>
            </div>
          </div>
        </div>

        <div className="p-4 bg-dark-700 rounded-lg">
          <h5 className="font-medium text-dark-100 mb-2">🚀 New Business</h5>
          <div className="space-y-1 text-sm">
            <div className="flex justify-between">
              <span className="text-dark-400">Gross return if success:</span>
              <span className="text-dark-200">40%</span>
            </div>
            <div className="flex justify-between">
              <span className="text-dark-400">Net return if success:</span>
              <span className="text-yellow-400">{(40 * (1 - taxRate / 100)).toFixed(1)}%</span>
            </div>
            <div className="flex justify-between">
              <span className="text-dark-400">Risk of total loss:</span>
              <span className="text-red-400">50%</span>
            </div>
          </div>
        </div>
      </div>

      <div className="p-4 bg-dark-700 rounded-lg mb-4">
        <h5 className="font-medium text-dark-100 mb-2">The Asymmetry Problem</h5>
        <p className="text-dark-300 text-sm">
          Government takes {taxRate}% of profits but only partially shares in losses
          (through limited deductions). At higher rates, this asymmetry destroys the
          risk-reward ratio that makes entrepreneurship worthwhile.
        </p>

        <div className="mt-3 grid grid-cols-2 gap-4 text-center">
          <div className="p-2 bg-dark-600 rounded">
            <div className="text-xs text-dark-400">Safe choice premium</div>
            <div className={`font-bold ${taxRate > 50 ? 'text-green-400' : 'text-dark-200'}`}>
              {taxRate > 50 ? 'High' : 'Normal'}
            </div>
          </div>
          <div className="p-2 bg-dark-600 rounded">
            <div className="text-xs text-dark-400">Entrepreneurship incentive</div>
            <div className={`font-bold ${taxRate > 50 ? 'text-red-400' : 'text-green-400'}`}>
              {taxRate > 50 ? 'Low' : 'Adequate'}
            </div>
          </div>
        </div>
      </div>

      {asymmetryNote && (
        <div className="p-4 bg-yellow-900/20 border border-yellow-500/30 rounded-lg">
          <p className="text-dark-200 text-sm">
            <span className="text-yellow-400 font-medium">Effect:</span> High tax rates
            channel capital toward safe, low-return investments. Innovation and new
            enterprises—which drive economic progress—become relatively less attractive.
            Society loses the dynamism that comes from risk-taking entrepreneurs.
          </p>
        </div>
      )}
    </div>
  );
}

export default function Section32() {
  return (
    <LessonLayout sectionId={32}>
      <p className="text-lg text-dark-200 mb-6">
        Confiscation and redistribution represent the most direct form of interventionism.
        Whether through land reform, estate taxes, or progressive income taxation, these
        policies rest on a fundamental error: the assumption that production is independent
        of property rights. Mises shows why repeated confiscation cannot achieve its goals
        without undermining the productive capacity it seeks to redistribute.
      </p>

      <Callout type="concept" title="The Confiscationist Fallacy">
        The confiscationist views economic output as a fixed quantity—a "national income"
        that exists independently of how society is organized. The task of government
        becomes the "fair" distribution of this income. This view ignores that production
        itself depends on the incentives created by property rights.
      </Callout>

      <h2 className="text-2xl font-bold text-dark-100 mt-12 mb-6">The Philosophy of Confiscation</h2>

      <p className="text-dark-300 mb-4">
        Interventionism proceeds from the premise that interfering with property rights
        does not affect the quantity of production. In its most naïve form, this becomes
        explicit confiscatory policy. Advocates treat the economy like a pie of fixed
        size—the only question is how to slice it.
      </p>

      <p className="text-dark-300 mb-4">
        But capitalism cannot withstand repeated predatory raids. Capital accumulation
        and investment are founded on the expectation that expropriation will not occur.
        Remove that expectation, and people prefer to consume their capital rather than
        preserve it for future confiscators.
      </p>

      <ConfiscationPhilosophyDemo />

      <Callout type="warning" title="The Inherent Error">
        All plans that aim at combining private ownership with repeated expropriation
        contain an inherent contradiction. Private ownership requires security of
        property. Expropriation destroys that security. The combination is unstable—
        it either evolves toward full socialism or retreats toward genuine property rights.
      </Callout>

      <h2 className="text-2xl font-bold text-dark-100 mt-12 mb-6">Land Reform</h2>

      <p className="text-dark-300 mb-4">
        Land reform—the breaking up of large estates into small holdings—is often
        justified by appeals to natural law, historical rights, or social justice.
        But whatever the rhetoric, the economic effects are clear: such reforms raise
        the price of agricultural products and reduce total economic output.
      </p>

      <p className="text-dark-300 mb-4">
        When more workers are required to produce a unit of farm output (due to smaller,
        less efficient holdings), more people must work in agriculture and fewer remain
        for manufacturing and other industries. The total amount of goods available for
        consumption decreases, and one group benefits at the expense of the majority.
      </p>

      <LandReformDemo />

      <CardGrid columns={2}>
        <Card title="Large-Scale Farming">
          Economies of scale in agriculture allow fewer workers to produce more output.
          Surplus labor moves to manufacturing, increasing total production of both
          food and industrial goods.
        </Card>
        <Card title="Fragmented Holdings">
          Small plots often cannot support modern equipment or techniques. Labor
          productivity falls, prices rise, and fewer workers remain for industry.
          Total output contracts.
        </Card>
      </CardGrid>

      <h2 className="text-2xl font-bold text-dark-100 mt-12 mb-6">Confiscatory Taxation</h2>

      <p className="text-dark-300 mb-4">
        Today, taxation is the main instrument of confiscatory interventionism. Whether
        motivated by desires to equalize wealth, raise revenue, or punish success, what
        matters are the effects. High marginal rates on income and estates directly
        attack capital accumulation.
      </p>

      <p className="text-dark-300 mb-4">
        The greater part of high incomes would otherwise flow into savings and investment—
        the accumulation of additional capital. When the treasury captures this portion,
        it typically uses the proceeds for current expenditure. The result is a drop in
        capital formation, a check on productivity growth, and stagnation in real wages.
      </p>

      <TaxationEffectsDemo />

      <Callout type="insight" title="Who Really Pays?">
        Workers ultimately bear the cost of confiscatory taxation on capital. Lower
        capital accumulation means less productive equipment, slower technological
        progress, and stagnant wages. The policy that claims to help workers against
        capitalists actually harms workers by slowing the growth that raises their
        living standards.
      </Callout>

      <h2 className="text-2xl font-bold text-dark-100 mt-12 mb-6">Taxation and Risk-Taking</h2>

      <p className="text-dark-300 mb-4">
        Progressive taxation creates a fundamental asymmetry: the government shares
        heavily in profits but only partially in losses. An entrepreneur who succeeds
        may keep only 20% of gains while absorbing most of the downside risk.
      </p>

      <p className="text-dark-300 mb-4">
        This asymmetry particularly affects innovative ventures—new technologies,
        experimental business models, and risky investments that drive economic progress.
        Capital flows instead toward safe, established investments with predictable
        (and taxable) returns. Society loses the dynamism of entrepreneurial risk-taking.
      </p>

      <RiskTakingDemo />

      <CardGrid columns={2}>
        <Card title="The Safe Path">
          Under high taxation, capital gravitates toward bonds, established businesses,
          and low-risk investments. Returns are modest but predictable. Innovation slows.
        </Card>
        <Card title="Entrepreneurship Deterred">
          Risky new ventures offer high potential returns—but after taxes, the
          risk-reward ratio may no longer justify the gamble. Fewer entrepreneurs
          attempt the innovations that advance civilization.
        </Card>
      </CardGrid>

      <h2 className="text-2xl font-bold text-dark-100 mt-12 mb-6">The Self-Defeating Policy</h2>

      <p className="text-dark-300 mb-4">
        Confiscatory policies contain the seeds of their own failure. By attacking
        capital accumulation, they reduce the very wealth they seek to redistribute.
        Each round of expropriation leaves less to expropriate next time. Eventually,
        either policy must change or the economy must deteriorate toward subsistence.
      </p>

      <Callout type="summary" title="Chapter Summary">
        Confiscation and redistribution fail because they rest on the fallacy that
        production is independent of property rights. Land reform raises food prices
        and reduces total output. Confiscatory taxation slows capital accumulation,
        checks productivity growth, and deters the risk-taking that drives innovation.
        The policies intended to help workers actually harm them by slowing the capital
        formation that raises real wages.
      </Callout>
    </LessonLayout>
  );
}
