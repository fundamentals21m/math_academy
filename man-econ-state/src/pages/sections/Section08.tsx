import { useState } from 'react';
import { LessonLayout } from '../../components/layout/LessonLayout';
import { Callout } from '../../components/common/Callout';
import { Card, CardGrid } from '../../components/common/Card';

// Wage Determination Demo
function WageDeterminationDemo() {
  const [productivity, setProductivity] = useState(100);
  const [laborSupply, setLaborSupply] = useState(50);

  const wage = Math.round((productivity * 1.2) - (laborSupply * 0.5));

  return (
    <div className="bg-dark-800/50 rounded-xl p-6 border border-dark-700 my-6">
      <h4 className="text-lg font-semibold mb-4 text-emerald-400">Wage Determination</h4>

      <div className="grid grid-cols-2 gap-4 mb-4">
        <div>
          <label className="text-dark-300 text-sm mb-1 block">Labor Productivity (MVP)</label>
          <input
            type="range"
            min={50}
            max={150}
            value={productivity}
            onChange={(e) => setProductivity(Number(e.target.value))}
            className="w-full accent-emerald-500"
          />
          <span className="text-emerald-400 font-bold">${productivity}/hour</span>
        </div>
        <div>
          <label className="text-dark-300 text-sm mb-1 block">Labor Supply</label>
          <input
            type="range"
            min={20}
            max={100}
            value={laborSupply}
            onChange={(e) => setLaborSupply(Number(e.target.value))}
            className="w-full accent-emerald-500"
          />
          <span className="text-emerald-400 font-bold">{laborSupply} workers</span>
        </div>
      </div>

      <div className="bg-dark-900 rounded-lg p-4 text-center">
        <p className="text-dark-300 mb-2">Market Wage Rate:</p>
        <p className="text-3xl font-bold text-emerald-400">${wage}/hour</p>
        <p className="text-dark-500 text-sm mt-2">
          Higher productivity → higher wages. More supply → lower wages.
        </p>
      </div>
    </div>
  );
}

// Rent Theory Demo
function RentTheoryDemo() {
  const [landType, setLandType] = useState<'prime' | 'average' | 'marginal'>('average');

  const landData = {
    prime: {
      yield: 100,
      rent: 40,
      description: 'Best agricultural land - highest yield',
    },
    average: {
      yield: 70,
      rent: 10,
      description: 'Typical farmland - average yield',
    },
    marginal: {
      yield: 60,
      rent: 0,
      description: 'Poorest land in use - no rent',
    },
  };

  const data = landData[landType];

  return (
    <div className="bg-dark-800/50 rounded-xl p-6 border border-dark-700 my-6">
      <h4 className="text-lg font-semibold mb-4 text-emerald-400">The Theory of Land Rent</h4>

      <div className="flex gap-2 mb-4">
        {(['prime', 'average', 'marginal'] as const).map((type) => (
          <button
            key={type}
            onClick={() => setLandType(type)}
            className={`flex-1 py-2 rounded capitalize transition-colors ${
              landType === type ? 'bg-emerald-600 text-white' : 'bg-dark-700 text-dark-300'
            }`}
          >
            {type}
          </button>
        ))}
      </div>

      <div className="bg-dark-900 rounded-lg p-4">
        <div className="flex items-end justify-center gap-8 h-32 mb-4">
          <div className="text-center">
            <div
              className="w-16 bg-amber-600 rounded-t"
              style={{ height: `${data.yield}px` }}
            />
            <span className="text-xs text-dark-400">Yield</span>
          </div>
          <div className="text-center">
            <div
              className="w-16 bg-dark-500 rounded-t"
              style={{ height: '60px' }}
            />
            <span className="text-xs text-dark-400">Cost</span>
          </div>
          <div className="text-center">
            <div
              className="w-16 bg-emerald-600 rounded-t"
              style={{ height: `${data.rent * 2}px` }}
            />
            <span className="text-xs text-dark-400">Rent</span>
          </div>
        </div>
        <p className="text-dark-300 text-center">{data.description}</p>
        <p className="text-dark-400 text-sm text-center mt-2">
          Rent: ${data.rent}/acre (yield ${data.yield} - costs $60)
        </p>
      </div>

      <p className="text-dark-400 text-sm mt-4 italic">
        Rent arises from differential productivity. Marginal land earns no rent.
      </p>
    </div>
  );
}

// Specific vs Nonspecific Factors
function FactorSpecificityDemo() {
  const [activeTab, setActiveTab] = useState<'specific' | 'nonspecific'>('specific');

  return (
    <div className="bg-dark-800/50 rounded-xl p-6 border border-dark-700 my-6">
      <h4 className="text-lg font-semibold mb-4 text-emerald-400">Specific vs. Nonspecific Factors</h4>

      <div className="flex gap-2 mb-4">
        <button
          onClick={() => setActiveTab('specific')}
          className={`flex-1 py-2 rounded transition-colors ${
            activeTab === 'specific' ? 'bg-emerald-600 text-white' : 'bg-dark-700 text-dark-300'
          }`}
        >
          Specific Factors
        </button>
        <button
          onClick={() => setActiveTab('nonspecific')}
          className={`flex-1 py-2 rounded transition-colors ${
            activeTab === 'nonspecific' ? 'bg-emerald-600 text-white' : 'bg-dark-700 text-dark-300'
          }`}
        >
          Nonspecific Factors
        </button>
      </div>

      <div className="bg-dark-900 rounded-lg p-4">
        {activeTab === 'specific' ? (
          <div>
            <h5 className="font-semibold text-emerald-400 mb-2">Specific Factors</h5>
            <p className="text-dark-300 mb-3">Can only be used in one or a few productions.</p>
            <div className="flex flex-wrap gap-2 mb-3">
              <span className="bg-dark-700 px-2 py-1 rounded text-sm">Iron ore mine</span>
              <span className="bg-dark-700 px-2 py-1 rounded text-sm">Specialized machinery</span>
              <span className="bg-dark-700 px-2 py-1 rounded text-sm">Unique talent</span>
            </div>
            <p className="text-dark-400 text-sm">
              Price is determined entirely by demand for the specific product.
              If demand falls, the factor's value collapses.
            </p>
          </div>
        ) : (
          <div>
            <h5 className="font-semibold text-emerald-400 mb-2">Nonspecific Factors</h5>
            <p className="text-dark-300 mb-3">Can be used in many different productions.</p>
            <div className="flex flex-wrap gap-2 mb-3">
              <span className="bg-dark-700 px-2 py-1 rounded text-sm">Unskilled labor</span>
              <span className="bg-dark-700 px-2 py-1 rounded text-sm">General-purpose land</span>
              <span className="bg-dark-700 px-2 py-1 rounded text-sm">Money capital</span>
            </div>
            <p className="text-dark-400 text-sm">
              Price is set by the best alternative use. If one industry's demand falls,
              the factor shifts to other uses with minimal price change.
            </p>
          </div>
        )}
      </div>
    </div>
  );
}

export default function Section08() {
  return (
    <LessonLayout sectionId={8}>
      {/* Opening Quote */}
      <blockquote className="border-l-4 border-emerald-500 pl-6 py-2 my-6 text-xl italic text-dark-300">
        "Wage rates are determined by the marginal productivity of labor, discounted
        by the interest rate."
        <footer className="text-sm text-dark-500 mt-2 not-italic">
          — Murray N. Rothbard, Man, Economy, and State
        </footer>
      </blockquote>

      {/* Introduction */}
      <p className="text-lg text-dark-300 mb-6">
        Having established the general theory of factor pricing, Rothbard now examines
        <strong className="text-emerald-400"> particular factors</strong>—land, labor, and
        capital goods. This chapter develops the theories of <strong className="text-emerald-400">
        wages</strong> and <strong className="text-emerald-400">rent</strong>.
      </p>

      {/* Section 1: Land, Labor, and Capital Goods */}
      <h2 className="text-2xl font-semibold mt-10 mb-4">1. Land, Labor, and Capital Goods</h2>

      <p className="my-4">
        Rothbard refines the traditional factor categories:
      </p>

      <CardGrid>
        <Card>
          <h4 className="font-semibold text-emerald-400 mb-2">Land</h4>
          <p className="text-sm text-dark-300">
            Original, nature-given factors. Indestructible and permanent (in economic
            sense). Earns rent.
          </p>
        </Card>
        <Card>
          <h4 className="font-semibold text-emerald-400 mb-2">Labor</h4>
          <p className="text-sm text-dark-300">
            Human effort applied to production. Inseparable from the laborer.
            Earns wages.
          </p>
        </Card>
        <Card>
          <h4 className="font-semibold text-emerald-400 mb-2">Capital Goods</h4>
          <p className="text-sm text-dark-300">
            Produced factors of production. Wear out and must be replaced.
            Earn interest plus depreciation.
          </p>
        </Card>
        <Card>
          <h4 className="font-semibold text-emerald-400 mb-2">Entrepreneurship</h4>
          <p className="text-sm text-dark-300">
            Decision-making under uncertainty. Not a factor in the same sense—
            earns profit (or suffers loss).
          </p>
        </Card>
      </CardGrid>

      {/* Section 2: Wages and Marginal Productivity */}
      <h2 className="text-2xl font-semibold mt-10 mb-4">2. Wages and Marginal Productivity</h2>

      <p className="my-4">
        Wage rates are determined by the <strong className="text-emerald-400">discounted marginal
        value product</strong> of labor. Each worker tends to be paid what their marginal
        contribution is worth (discounted for time).
      </p>

      <WageDeterminationDemo />

      <p className="my-4">
        Several implications follow:
      </p>

      <div className="space-y-3 my-6">
        {[
          {
            title: 'Capital raises wages',
            description: 'More capital per worker increases labor productivity, hence wages.',
          },
          {
            title: 'Skills command premiums',
            description: 'Scarce skills have higher marginal products and earn higher wages.',
          },
          {
            title: 'Competition equalizes',
            description: 'For similar work, wage rates tend toward equality across firms.',
          },
          {
            title: 'Minimum wages cause unemployment',
            description: 'Wages above MVP mean some workers cannot find jobs.',
          },
        ].map(({ title, description }, i) => (
          <div key={i} className="flex items-start gap-4 p-4 bg-dark-800/50 rounded-lg border border-dark-700">
            <span className="w-10 h-10 flex items-center justify-center bg-emerald-600 rounded-full text-white font-bold text-sm shrink-0">
              {i + 1}
            </span>
            <div>
              <p className="font-semibold text-dark-100">{title}</p>
              <p className="text-sm text-dark-400">{description}</p>
            </div>
          </div>
        ))}
      </div>

      <Callout type="warning">
        <p>
          <strong>The minimum wage:</strong> If law mandates wages above the marginal product
          of some workers, employers cannot profitably hire them. The result is unemployment
          for the least skilled—the very people the law intends to help.
        </p>
      </Callout>

      {/* Section 3: Capitalization and Rent */}
      <h2 className="text-2xl font-semibold mt-10 mb-4">3. Capitalization and Rent</h2>

      <p className="my-4">
        Land is a permanent factor—it earns a perpetual income stream. This income stream
        can be <strong className="text-emerald-400">capitalized</strong> into a present value.
      </p>

      <div className="bg-dark-800/50 rounded-xl p-6 border border-emerald-600/30 my-6">
        <h4 className="font-semibold text-emerald-400 mb-3">Capitalizing Rent</h4>
        <p className="text-dark-200 text-lg mb-4">
          The price of land equals the present value of its expected future rents.
        </p>
        <p className="text-center text-xl font-mono text-emerald-400 mb-4">
          Land Price = Annual Rent ÷ Interest Rate
        </p>
        <p className="text-dark-400 text-sm">
          Example: If land earns $1,000/year rent and the interest rate is 5%, the land
          is worth $1,000 ÷ 0.05 = $20,000.
        </p>
      </div>

      <RentTheoryDemo />

      <p className="my-4">
        <strong className="text-emerald-400">Rent</strong> arises from differential productivity.
        The best land earns the most rent; the marginal land (the worst land in use) earns
        no rent at all.
      </p>

      <Callout type="info">
        <p>
          <strong>Economic rent:</strong> "Rent" in economics means payment for any factor
          in fixed supply—not just land. Any inelastically supplied factor earns "rent."
          A star athlete's exceptional talent earns economic rent.
        </p>
      </Callout>

      {/* Section 4: Specific vs. Nonspecific Factors */}
      <h2 className="text-2xl font-semibold mt-10 mb-4">4. The Pricing of Productive Factors</h2>

      <p className="my-4">
        An important distinction: some factors are <strong className="text-emerald-400">specific</strong>
        (usable in only one or a few productions) while others are <strong className="text-emerald-400">
        nonspecific</strong> (usable in many productions).
      </p>

      <FactorSpecificityDemo />

      <p className="my-4">
        This distinction matters for how factor prices respond to demand changes:
      </p>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 my-6">
        <div className="bg-dark-800/50 rounded-xl p-4 border border-dark-700">
          <h3 className="text-lg font-semibold text-emerald-400 mb-2">Specific Factor Price Change</h3>
          <p className="text-dark-300 text-sm">
            If demand for the product falls, the specific factor's price can drop to zero.
            No alternative uses cushion the fall.
          </p>
        </div>
        <div className="bg-dark-800/50 rounded-xl p-4 border border-dark-700">
          <h3 className="text-lg font-semibold text-emerald-400 mb-2">Nonspecific Factor Price Change</h3>
          <p className="text-dark-300 text-sm">
            If one industry's demand falls, the factor shifts to other industries.
            The price floor is the value in the best alternative use.
          </p>
        </div>
      </div>

      {/* Labor Market Analysis */}
      <h2 className="text-2xl font-semibold mt-10 mb-4">Labor Market Analysis</h2>

      <p className="my-4">
        Rothbard applies these principles to analyze various labor market issues:
      </p>

      <CardGrid>
        <Card>
          <h4 className="font-semibold text-emerald-400 mb-2">Wage Differentials</h4>
          <p className="text-sm text-dark-300">
            Different wages for different jobs reflect differences in skill, risk,
            pleasantness, and marginal productivity.
          </p>
        </Card>
        <Card>
          <h4 className="font-semibold text-emerald-400 mb-2">Union Effects</h4>
          <p className="text-sm text-dark-300">
            Unions can raise wages only by restricting labor supply. This benefits
            members but harms excluded workers.
          </p>
        </Card>
        <Card>
          <h4 className="font-semibold text-emerald-400 mb-2">Immigration</h4>
          <p className="text-sm text-dark-300">
            Free labor mobility tends to equalize wages across regions. Restrictions
            maintain artificial differentials.
          </p>
        </Card>
        <Card>
          <h4 className="font-semibold text-emerald-400 mb-2">Human Capital</h4>
          <p className="text-sm text-dark-300">
            Education and training increase workers' marginal product. Investment in
            skills is investment in human capital.
          </p>
        </Card>
      </CardGrid>

      <Callout type="note">
        <p>
          <strong>Exploitation theory refuted:</strong> Rothbard argues that workers are not
          "exploited" when paid less than the full product price. The discount is interest—
          payment for time. Capitalists who advance wages perform a valuable service.
        </p>
      </Callout>

      {/* Key Takeaways */}
      <h2 className="text-2xl font-semibold mt-10 mb-4">Key Takeaways</h2>

      <div className="bg-dark-800 rounded-lg p-6">
        <ul className="space-y-3">
          <li className="flex items-start gap-3">
            <span className="text-emerald-400 font-bold">1.</span>
            <span>
              <strong>Wages equal the discounted MVP of labor.</strong> More productive
              workers earn higher wages.
            </span>
          </li>
          <li className="flex items-start gap-3">
            <span className="text-emerald-400 font-bold">2.</span>
            <span>
              <strong>Capital increases labor productivity</strong>, hence wages.
              Capital accumulation benefits workers.
            </span>
          </li>
          <li className="flex items-start gap-3">
            <span className="text-emerald-400 font-bold">3.</span>
            <span>
              <strong>Land rent</strong> arises from differential productivity.
              Marginal land earns no rent.
            </span>
          </li>
          <li className="flex items-start gap-3">
            <span className="text-emerald-400 font-bold">4.</span>
            <span>
              <strong>Land price = rent/interest rate.</strong> Capitalization converts
              income streams to present values.
            </span>
          </li>
          <li className="flex items-start gap-3">
            <span className="text-emerald-400 font-bold">5.</span>
            <span>
              <strong>Specific vs. nonspecific factors</strong> respond differently to
              demand changes.
            </span>
          </li>
        </ul>
      </div>

      {/* Next Section Preview */}
      <h2 className="text-2xl font-semibold mt-10 mb-4">Coming Next</h2>

      <p className="my-4">
        Chapter 10 examines <strong>Monopoly and Competition</strong>—Rothbard's provocative
        critique of standard monopoly theory and his argument that free markets are inherently
        competitive.
      </p>
    </LessonLayout>
  );
}
