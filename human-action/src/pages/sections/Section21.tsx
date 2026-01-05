import { useState } from 'react';
import { LessonLayout } from '@/components/layout';
import { Callout, Card, CardGrid } from '@/components/common';

// Interactive demo showing introversive vs extroversive labor
function LaborTypesDemo() {
  const [laborType, setLaborType] = useState<'introversive' | 'extroversive'>('extroversive');

  return (
    <div className="bg-dark-800 rounded-lg p-6 my-6">
      <h4 className="text-lg font-semibold text-dark-100 mb-4">Types of Labor</h4>
      <p className="text-dark-400 text-sm mb-4">
        Compare introversive labor (valued for the experience) with extroversive labor (valued for the product).
      </p>

      <div className="flex gap-2 mb-6">
        <button
          onClick={() => setLaborType('introversive')}
          className={`flex-1 px-4 py-2 rounded-lg text-sm font-medium transition-colors ${
            laborType === 'introversive'
              ? 'bg-purple-600 text-white'
              : 'bg-dark-700 text-dark-300 hover:bg-dark-600'
          }`}
        >
          Introversive
        </button>
        <button
          onClick={() => setLaborType('extroversive')}
          className={`flex-1 px-4 py-2 rounded-lg text-sm font-medium transition-colors ${
            laborType === 'extroversive'
              ? 'bg-amber-600 text-white'
              : 'bg-dark-700 text-dark-300 hover:bg-dark-600'
          }`}
        >
          Extroversive
        </button>
      </div>

      <div className="bg-dark-900 rounded-lg p-4">
        {laborType === 'introversive' ? (
          <>
            <h5 className="text-purple-400 font-medium mb-2">Introversive Labor</h5>
            <p className="text-dark-300 text-sm mb-4">
              Labor valued for the experience itself, not just the product. The disutility is
              essential to the value—a necessary ingredient of the experience.
            </p>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-3">
              <div className="bg-dark-800 rounded p-3 text-center">
                <span className="text-2xl block mb-2">🧗</span>
                <span className="text-dark-300 text-sm">Mountain Climbing</span>
                <p className="text-dark-500 text-xs mt-1">Using a helicopter defeats the purpose</p>
              </div>
              <div className="bg-dark-800 rounded p-3 text-center">
                <span className="text-2xl block mb-2">🙏</span>
                <span className="text-dark-300 text-sm">Religious Service</span>
                <p className="text-dark-500 text-xs mt-1">The sacrifice is part of devotion</p>
              </div>
              <div className="bg-dark-800 rounded p-3 text-center">
                <span className="text-2xl block mb-2">🎨</span>
                <span className="text-dark-300 text-sm">Artistic Creation</span>
                <p className="text-dark-500 text-xs mt-1">The process is the reward</p>
              </div>
            </div>
            <p className="text-purple-300 text-xs mt-4">
              Economics treats introversive labor as consumption, not production.
            </p>
          </>
        ) : (
          <>
            <h5 className="text-amber-400 font-medium mb-2">Extroversive Labor</h5>
            <p className="text-dark-300 text-sm mb-4">
              Labor performed for the sake of an end beyond its performance. The worker
              experiences disutility but endures it to obtain the product or wage.
            </p>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-3">
              <div className="bg-dark-800 rounded p-3 text-center">
                <span className="text-2xl block mb-2">🏭</span>
                <span className="text-dark-300 text-sm">Factory Work</span>
                <p className="text-dark-500 text-xs mt-1">Done for wages, not enjoyment</p>
              </div>
              <div className="bg-dark-800 rounded p-3 text-center">
                <span className="text-2xl block mb-2">🌾</span>
                <span className="text-dark-300 text-sm">Farming</span>
                <p className="text-dark-500 text-xs mt-1">Labor for harvest, not for its own sake</p>
              </div>
              <div className="bg-dark-800 rounded p-3 text-center">
                <span className="text-2xl block mb-2">💼</span>
                <span className="text-dark-300 text-sm">Office Work</span>
                <p className="text-dark-500 text-xs mt-1">Compensation for time and effort</p>
              </div>
            </div>
            <p className="text-amber-300 text-xs mt-4">
              Only extroversive labor is the subject of catallactic (economic) analysis.
            </p>
          </>
        )}
      </div>
    </div>
  );
}

// Interactive demo showing marginal productivity wage determination
function WageDeterminationDemo() {
  const [workers, setWorkers] = useState(5);
  const [productPrice, setProductPrice] = useState(20);

  // Diminishing marginal productivity
  const marginalProducts = [100, 90, 75, 60, 45, 32, 22, 15, 10, 7];
  const marginalProductivity = marginalProducts[workers - 1] || 5;
  const wage = marginalProductivity * productPrice * 0.8; // 80% of marginal revenue product

  return (
    <div className="bg-dark-800 rounded-lg p-6 my-6">
      <h4 className="text-lg font-semibold text-dark-100 mb-4">Marginal Productivity Theory of Wages</h4>
      <p className="text-dark-400 text-sm mb-4">
        Wages tend toward the marginal product of labor. Adjust the variables to see how wages are determined.
      </p>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
        <div>
          <label className="text-dark-300 text-sm block mb-2">
            Number of Workers: {workers}
          </label>
          <input
            type="range"
            min="1"
            max="10"
            value={workers}
            onChange={(e) => setWorkers(Number(e.target.value))}
            className="w-full accent-amber-500"
          />
        </div>
        <div>
          <label className="text-dark-300 text-sm block mb-2">
            Product Price: ${productPrice}
          </label>
          <input
            type="range"
            min="10"
            max="50"
            value={productPrice}
            onChange={(e) => setProductPrice(Number(e.target.value))}
            className="w-full accent-amber-500"
          />
        </div>
      </div>

      <div className="bg-dark-900 rounded-lg p-4">
        <div className="grid grid-cols-3 gap-4 text-center mb-4">
          <div>
            <span className="text-dark-400 text-xs block mb-1">Marginal Product</span>
            <span className="text-xl font-bold text-blue-400">{marginalProductivity} units</span>
          </div>
          <div>
            <span className="text-dark-400 text-xs block mb-1">× Product Price</span>
            <span className="text-xl font-bold text-green-400">${productPrice}</span>
          </div>
          <div>
            <span className="text-dark-400 text-xs block mb-1">≈ Market Wage</span>
            <span className="text-xl font-bold text-amber-400">${wage.toFixed(0)}</span>
          </div>
        </div>

        <div className="mt-4 pt-4 border-t border-dark-700">
          <p className="text-dark-400 text-xs">
            <strong>Key insight:</strong> If wages fall below this level, employers profit by hiring more workers,
            bidding wages up. If wages rise above this level, employers discharge workers, pushing wages down.
            Competition drives wages toward the marginal revenue product.
          </p>
        </div>
      </div>
    </div>
  );
}

// Interactive demo showing types of unemployment
function UnemploymentDemo() {
  const [unemploymentType, setUnemploymentType] = useState<'catallactic' | 'institutional'>('catallactic');

  return (
    <div className="bg-dark-800 rounded-lg p-6 my-6">
      <h4 className="text-lg font-semibold text-dark-100 mb-4">Types of Unemployment</h4>
      <p className="text-dark-400 text-sm mb-4">
        Compare voluntary unemployment in free markets with forced unemployment from intervention.
      </p>

      <div className="flex gap-2 mb-6">
        <button
          onClick={() => setUnemploymentType('catallactic')}
          className={`flex-1 px-4 py-2 rounded-lg text-sm font-medium transition-colors ${
            unemploymentType === 'catallactic'
              ? 'bg-green-600 text-white'
              : 'bg-dark-700 text-dark-300 hover:bg-dark-600'
          }`}
        >
          Catallactic (Voluntary)
        </button>
        <button
          onClick={() => setUnemploymentType('institutional')}
          className={`flex-1 px-4 py-2 rounded-lg text-sm font-medium transition-colors ${
            unemploymentType === 'institutional'
              ? 'bg-red-600 text-white'
              : 'bg-dark-700 text-dark-300 hover:bg-dark-600'
          }`}
        >
          Institutional (Forced)
        </button>
      </div>

      <div className="bg-dark-900 rounded-lg p-4">
        {unemploymentType === 'catallactic' ? (
          <>
            <h5 className="text-green-400 font-medium mb-2">Catallactic Unemployment</h5>
            <p className="text-dark-300 text-sm mb-4">
              Voluntary unemployment in an unhampered market. Workers choose to remain unemployed
              while seeking better opportunities.
            </p>
            <div className="space-y-3">
              <div className="flex items-start gap-3">
                <span className="text-green-400 text-lg">1.</span>
                <div>
                  <span className="text-dark-200 font-medium">Job Search</span>
                  <p className="text-dark-400 text-xs">Expecting preferred employment to become available soon</p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <span className="text-green-400 text-lg">2.</span>
                <div>
                  <span className="text-dark-200 font-medium">Seasonal Work</span>
                  <p className="text-dark-400 text-xs">Living off savings between work periods</p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <span className="text-green-400 text-lg">3.</span>
                <div>
                  <span className="text-dark-200 font-medium">Ethical Standards</span>
                  <p className="text-dark-400 text-xs">Rejecting positions that violate personal values</p>
                </div>
              </div>
            </div>
            <p className="text-green-300 text-xs mt-4">
              At market-clearing wages, anyone willing to work can find employment.
            </p>
          </>
        ) : (
          <>
            <h5 className="text-red-400 font-medium mb-2">Institutional Unemployment</h5>
            <p className="text-dark-300 text-sm mb-4">
              Involuntary unemployment caused by government or union interference that prevents
              wages from adjusting to market-clearing levels.
            </p>
            <div className="space-y-3">
              <div className="flex items-start gap-3">
                <span className="text-red-400 text-lg">⚠</span>
                <div>
                  <span className="text-dark-200 font-medium">Minimum Wage Laws</span>
                  <p className="text-dark-400 text-xs">Pricing low-productivity workers out of the market</p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <span className="text-red-400 text-lg">⚠</span>
                <div>
                  <span className="text-dark-200 font-medium">Union Restrictions</span>
                  <p className="text-dark-400 text-xs">Preventing wage competition among workers</p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <span className="text-red-400 text-lg">⚠</span>
                <div>
                  <span className="text-dark-200 font-medium">Licensing Requirements</span>
                  <p className="text-dark-400 text-xs">Blocking entry into occupations</p>
                </div>
              </div>
            </div>
            <p className="text-red-300 text-xs mt-4">
              Workers are prevented from accepting employment at the wages employers can afford to pay.
            </p>
          </>
        )}
      </div>
    </div>
  );
}

// Interactive demo showing labor market equilibrium
function LaborMarketDemo() {
  const [wage, setWage] = useState(50);
  const [minWage, setMinWage] = useState(0);

  const laborSupply = Math.min(100, Math.max(0, (wage - 20) * 2));
  const laborDemand = Math.min(100, Math.max(0, (100 - wage) * 1.5));
  const equilibriumWage = 47;
  const effectiveWage = Math.max(wage, minWage);
  const actualEmployment = Math.min(
    Math.min(100, Math.max(0, (effectiveWage - 20) * 2)),
    Math.min(100, Math.max(0, (100 - effectiveWage) * 1.5))
  );
  const unemployment = minWage > equilibriumWage ? laborSupply - laborDemand : 0;

  return (
    <div className="bg-dark-800 rounded-lg p-6 my-6">
      <h4 className="text-lg font-semibold text-dark-100 mb-4">The Labor Market</h4>
      <p className="text-dark-400 text-sm mb-4">
        See how wages balance supply and demand—and what happens with a minimum wage floor.
      </p>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
        <div>
          <label className="text-dark-300 text-sm block mb-2">
            Market Wage: ${wage}
          </label>
          <input
            type="range"
            min="20"
            max="80"
            value={wage}
            onChange={(e) => setWage(Number(e.target.value))}
            className="w-full accent-amber-500"
          />
        </div>
        <div>
          <label className="text-dark-300 text-sm block mb-2">
            Minimum Wage: ${minWage > 0 ? minWage : 'None'}
          </label>
          <input
            type="range"
            min="0"
            max="70"
            value={minWage}
            onChange={(e) => setMinWage(Number(e.target.value))}
            className="w-full accent-red-500"
          />
        </div>
      </div>

      <div className="bg-dark-900 rounded-lg p-4">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 text-center mb-4">
          <div>
            <span className="text-dark-400 text-xs block mb-1">Labor Supply</span>
            <span className="text-xl font-bold text-blue-400">{laborSupply.toFixed(0)}</span>
          </div>
          <div>
            <span className="text-dark-400 text-xs block mb-1">Labor Demand</span>
            <span className="text-xl font-bold text-green-400">{laborDemand.toFixed(0)}</span>
          </div>
          <div>
            <span className="text-dark-400 text-xs block mb-1">Employment</span>
            <span className="text-xl font-bold text-amber-400">{actualEmployment.toFixed(0)}</span>
          </div>
          <div>
            <span className="text-dark-400 text-xs block mb-1">Unemployment</span>
            <span className={`text-xl font-bold ${unemployment > 0 ? 'text-red-400' : 'text-dark-500'}`}>
              {Math.max(0, unemployment).toFixed(0)}
            </span>
          </div>
        </div>

        {minWage > equilibriumWage && (
          <div className="mt-4 p-3 bg-red-900/30 rounded border border-red-700/50">
            <p className="text-red-300 text-sm">
              <strong>Institutional unemployment:</strong> The minimum wage (${minWage}) exceeds the equilibrium
              wage (${equilibriumWage}), creating {Math.max(0, unemployment).toFixed(0)} unemployed workers who
              want to work but cannot find jobs.
            </p>
          </div>
        )}

        {wage === equilibriumWage && minWage <= equilibriumWage && (
          <div className="mt-4 p-3 bg-green-900/30 rounded border border-green-700/50">
            <p className="text-green-300 text-sm">
              <strong>Market equilibrium:</strong> At $47, labor supply equals labor demand.
              All workers seeking employment can find jobs.
            </p>
          </div>
        )}
      </div>
    </div>
  );
}

export default function Section21() {
  return (
    <LessonLayout sectionId={21}>
      <div className="prose prose-invert max-w-none">
        {/* Introduction */}
        <h2 className="text-3xl font-bold text-dark-100 mb-6">
          XXI. Work and Wages
        </h2>

        <p className="text-dark-300 text-lg leading-relaxed mb-6">
          Labor is a scarce factor of production, and like all scarce goods, it is allocated
          through the market process. This chapter examines the nature of labor, how wages
          are determined, and the crucial distinction between voluntary unemployment (which
          exists in free markets) and involuntary unemployment (which results from intervention
          in the labor market).
        </p>

        {/* Introversive and Extroversive Labor */}
        <h3 className="text-2xl font-semibold text-dark-100 mt-10 mb-4">
          1. Introversive and Extroversive Labor
        </h3>

        <p className="text-dark-300 leading-relaxed mb-4">
          Not all human effort is analyzed the same way by economics. Mises distinguishes
          between labor performed for its own sake (introversive) and labor performed for
          an external reward (extroversive). Only extroversive labor is the subject of
          catallactic analysis.
        </p>

        <LaborTypesDemo />

        <Callout type="info" title="Why the Distinction Matters">
          Introversive labor is treated as consumption in economic theory because the
          "disutility" is actually part of the value. A mountain climber who uses a
          helicopter hasn't had the mountain climbing experience. Economics analyzes
          only extroversive labor—work done to obtain something beyond the work itself.
        </Callout>

        {/* The Disutility of Labor */}
        <h3 className="text-2xl font-semibold text-dark-100 mt-10 mb-4">
          2. Joy and Tedium of Labor
        </h3>

        <p className="text-dark-300 leading-relaxed mb-4">
          Extroversive labor involves <em>disutility</em>—the sacrifice of leisure. Workers
          prefer leisure to labor, all else equal. They work because the compensation
          outweighs the disutility. This fundamental trade-off determines the supply of labor.
        </p>

        <CardGrid>
          <Card title="The Disutility of Labor" className="bg-dark-800">
            <p className="text-dark-300 text-sm">
              Labor causes discomfort, fatigue, and the sacrifice of leisure time.
              Workers require compensation to overcome this disutility. Higher wages
              induce more labor supply; lower wages induce less.
            </p>
          </Card>
          <Card title="The Joy of Achievement" className="bg-dark-800">
            <p className="text-dark-300 text-sm">
              Some work brings satisfaction beyond mere wages—the joy of creation,
              social recognition, or meaningful contribution. This can reduce the
              wage needed to attract workers to certain occupations.
            </p>
          </Card>
        </CardGrid>

        {/* Wages */}
        <h3 className="text-2xl font-semibold text-dark-100 mt-10 mb-4">
          3. Wages
        </h3>

        <p className="text-dark-300 leading-relaxed mb-4">
          Wages are the price of labor. Like all prices, they are determined by supply
          and demand in the market. The key insight is that wages tend toward the
          <em>marginal productivity</em> of labor—the value that an additional worker
          adds to production.
        </p>

        <WageDeterminationDemo />

        <Callout type="warning" title="No Monopsony Power">
          Mises refutes the claim that employers can systematically underpay workers.
          If established employers pay below marginal productivity, new entrepreneurs
          can profit by offering higher wages to capture the difference. Competition
          among employers drives wages toward workers' marginal product.
        </Callout>

        <p className="text-dark-300 leading-relaxed mb-4">
          Workers cannot collectively claim the "entire product" because production
          requires more than labor alone. Land, capital goods, and entrepreneurial
          direction all contribute. Wages reflect what consumers ultimately value
          in the worker's contribution to final goods.
        </p>

        {/* Catallactic Unemployment */}
        <h3 className="text-2xl font-semibold text-dark-100 mt-10 mb-4">
          4. Catallactic Unemployment
        </h3>

        <p className="text-dark-300 leading-relaxed mb-4">
          In an unhampered market, unemployment is always voluntary. Workers who remain
          unemployed do so because they judge the available wages inadequate compensation
          for the disutility of working—or because they expect better opportunities soon.
          This is <em>catallactic</em> or <em>market-generated</em> unemployment.
        </p>

        <UnemploymentDemo />

        <p className="text-dark-300 leading-relaxed mb-4">
          Institutional unemployment, by contrast, results from interference with the
          market mechanism. When laws or union rules prevent wages from falling to
          market-clearing levels, workers who would willingly work at lower wages
          are prevented from doing so.
        </p>

        <Callout type="info" title="The Cure for Unemployment">
          On an unhampered market, wages adjust until all workers willing to work at
          the going rate can find employment. Persistent mass unemployment is always
          a symptom of wage rates being held above market-clearing levels by institutional
          intervention.
        </Callout>

        {/* The Labor Market */}
        <h3 className="text-2xl font-semibold text-dark-100 mt-10 mb-4">
          5. The Labor Market
        </h3>

        <p className="text-dark-300 leading-relaxed mb-4">
          The labor market functions like any other market. Wages act as signals,
          directing workers to where their services are most valued. When consumer
          demand shifts, wage changes guide labor from declining to expanding industries.
        </p>

        <LaborMarketDemo />

        <CardGrid>
          <Card title="Wage Flexibility" className="bg-dark-800">
            <p className="text-dark-300 text-sm">
              Flexible wages allow the market to clear—matching willing workers with
              willing employers. Wage rigidity, whether from law or custom, creates
              mismatches between labor supply and demand.
            </p>
          </Card>
          <Card title="Labor Mobility" className="bg-dark-800">
            <p className="text-dark-300 text-sm">
              Workers move between occupations and locations in response to wage
              differentials. This mobility, combined with flexible wages, ensures
              efficient allocation of labor across the economy.
            </p>
          </Card>
        </CardGrid>

        {/* Wages and Subsistence */}
        <h3 className="text-2xl font-semibold text-dark-100 mt-10 mb-4">
          6. Wages and Living Standards
        </h3>

        <p className="text-dark-300 leading-relaxed mb-4">
          The classical economists' "iron law of wages"—that wages tend toward bare
          subsistence—has been refuted by history. Real wages have risen dramatically
          over the past two centuries. This improvement stems from capital accumulation,
          which raises the marginal productivity of labor.
        </p>

        <Callout type="info" title="Capital and Wages">
          Workers in capital-rich economies earn higher wages than those in capital-poor
          economies, not because of union power or minimum wage laws, but because capital
          makes labor more productive. The same worker operating modern machinery produces
          far more than one using primitive tools—and is paid accordingly.
        </Callout>

        {/* Summary */}
        <h3 className="text-2xl font-semibold text-dark-100 mt-10 mb-4">
          Summary: The Economics of Labor
        </h3>

        <div className="bg-dark-800 rounded-lg p-6 mb-6">
          <ul className="space-y-3 text-dark-300">
            <li className="flex items-start gap-3">
              <span className="text-amber-400 font-bold">1.</span>
              <span>
                Economics analyzes only extroversive labor—work done for external reward.
                Introversive labor (work for its own sake) is treated as consumption.
              </span>
            </li>
            <li className="flex items-start gap-3">
              <span className="text-amber-400 font-bold">2.</span>
              <span>
                Labor involves disutility—the sacrifice of leisure. Workers supply labor
                when compensation exceeds this disutility.
              </span>
            </li>
            <li className="flex items-start gap-3">
              <span className="text-amber-400 font-bold">3.</span>
              <span>
                Wages are determined by the marginal productivity of labor. Competition
                among employers drives wages toward workers' marginal product.
              </span>
            </li>
            <li className="flex items-start gap-3">
              <span className="text-amber-400 font-bold">4.</span>
              <span>
                In unhampered markets, unemployment is voluntary (catallactic). Institutional
                unemployment results from intervention that prevents market-clearing wages.
              </span>
            </li>
            <li className="flex items-start gap-3">
              <span className="text-amber-400 font-bold">5.</span>
              <span>
                Real wages rise through capital accumulation, which increases labor's
                marginal productivity—not through legislation or union pressure.
              </span>
            </li>
          </ul>
        </div>
      </div>
    </LessonLayout>
  );
}
