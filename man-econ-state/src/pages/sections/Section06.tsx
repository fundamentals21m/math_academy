import { useState } from 'react';
import { LessonLayout } from '../../components/layout/LessonLayout';
import { Callout } from '../../components/common/Callout';
import { Card, CardGrid } from '../../components/common/Card';

// MVP Imputation Demo
function MVPImputationDemo() {
  const [productPrice, setProductPrice] = useState(100);
  const [interestRate, setInterestRate] = useState(5);

  const discountedMVP = Math.round(productPrice / (1 + interestRate / 100));

  return (
    <div className="bg-dark-800/50 rounded-xl p-6 border border-dark-700 my-6">
      <h4 className="text-lg font-semibold mb-4 text-emerald-400">Discounted Marginal Value Product</h4>

      <div className="grid grid-cols-2 gap-4 mb-4">
        <div>
          <label className="text-dark-300 text-sm mb-1 block">Product Price ($)</label>
          <input
            type="range"
            min={50}
            max={200}
            value={productPrice}
            onChange={(e) => setProductPrice(Number(e.target.value))}
            className="w-full accent-emerald-500"
          />
          <span className="text-emerald-400 font-bold">${productPrice}</span>
        </div>
        <div>
          <label className="text-dark-300 text-sm mb-1 block">Interest Rate (%)</label>
          <input
            type="range"
            min={1}
            max={15}
            value={interestRate}
            onChange={(e) => setInterestRate(Number(e.target.value))}
            className="w-full accent-emerald-500"
          />
          <span className="text-emerald-400 font-bold">{interestRate}%</span>
        </div>
      </div>

      <div className="bg-dark-900 rounded-lg p-4">
        <div className="flex items-center justify-center gap-4 text-lg mb-4">
          <div className="text-center">
            <p className="text-dark-400 text-sm">Future MVP</p>
            <p className="text-2xl font-bold text-white">${productPrice}</p>
          </div>
          <span className="text-dark-500">÷ (1 + {interestRate}%)</span>
          <span className="text-dark-500">=</span>
          <div className="text-center">
            <p className="text-dark-400 text-sm">Present Value (Factor Price)</p>
            <p className="text-2xl font-bold text-emerald-400">${discountedMVP}</p>
          </div>
        </div>
        <p className="text-dark-400 text-sm text-center">
          Factor owners receive the discounted MVP now; capitalists earn interest by waiting.
        </p>
      </div>
    </div>
  );
}

// Factor Income Sources
function FactorIncomeDemo() {
  const [activeTab, setActiveTab] = useState<'land' | 'labor' | 'capital'>('labor');

  const factorData = {
    labor: {
      title: 'Labor',
      income: 'Wages',
      description: 'Payment for human exertion in production',
      determinant: 'Discounted marginal value product of labor',
      examples: ['Factory workers', 'Engineers', 'Managers', 'Entrepreneurs'],
    },
    land: {
      title: 'Land',
      income: 'Rent',
      description: 'Payment for the use of nature-given factors',
      determinant: 'Discounted marginal value product of land',
      examples: ['Agricultural land', 'Mining sites', 'Urban locations', 'Natural resources'],
    },
    capital: {
      title: 'Capital Goods',
      income: 'Interest + Depreciation',
      description: 'Return on invested capital minus wear and tear',
      determinant: 'Discounted future returns minus original cost',
      examples: ['Machinery', 'Buildings', 'Tools', 'Inventory'],
    },
  };

  const data = factorData[activeTab];

  return (
    <div className="bg-dark-800/50 rounded-xl p-6 border border-dark-700 my-6">
      <h4 className="text-lg font-semibold mb-4 text-emerald-400">Factor Incomes</h4>

      <div className="flex gap-2 mb-4">
        {(['labor', 'land', 'capital'] as const).map((tab) => (
          <button
            key={tab}
            onClick={() => setActiveTab(tab)}
            className={`flex-1 py-2 rounded capitalize transition-colors ${
              activeTab === tab ? 'bg-emerald-600 text-white' : 'bg-dark-700 text-dark-300'
            }`}
          >
            {factorData[tab].title}
          </button>
        ))}
      </div>

      <div className="bg-dark-900 rounded-lg p-4">
        <div className="flex justify-between items-start mb-4">
          <div>
            <h5 className="font-semibold text-emerald-400 text-lg">{data.title}</h5>
            <p className="text-dark-300">{data.description}</p>
          </div>
          <div className="bg-emerald-900/30 px-3 py-1 rounded border border-emerald-600/30">
            <span className="text-emerald-400 font-semibold">{data.income}</span>
          </div>
        </div>

        <p className="text-dark-400 text-sm mb-3">
          <strong>Price determined by:</strong> {data.determinant}
        </p>

        <div className="flex flex-wrap gap-2">
          {data.examples.map((ex) => (
            <span key={ex} className="bg-dark-700 px-2 py-1 rounded text-sm text-dark-300">
              {ex}
            </span>
          ))}
        </div>
      </div>
    </div>
  );
}

// Discounting Visualization
function DiscountingDemo() {
  const [years, setYears] = useState(3);
  const [rate, setRate] = useState(5);
  const futureValue = 1000;

  const presentValue = Math.round(futureValue / Math.pow(1 + rate / 100, years));

  return (
    <div className="bg-dark-800/50 rounded-xl p-6 border border-dark-700 my-6">
      <h4 className="text-lg font-semibold mb-4 text-emerald-400">Discounting and the Production Structure</h4>

      <div className="grid grid-cols-2 gap-4 mb-4">
        <div>
          <label className="text-dark-300 text-sm mb-1 block">Years until output:</label>
          <input
            type="range"
            min={1}
            max={10}
            value={years}
            onChange={(e) => setYears(Number(e.target.value))}
            className="w-full accent-emerald-500"
          />
          <span className="text-emerald-400 font-bold">{years} years</span>
        </div>
        <div>
          <label className="text-dark-300 text-sm mb-1 block">Interest rate:</label>
          <input
            type="range"
            min={1}
            max={15}
            value={rate}
            onChange={(e) => setRate(Number(e.target.value))}
            className="w-full accent-emerald-500"
          />
          <span className="text-emerald-400 font-bold">{rate}%</span>
        </div>
      </div>

      <div className="flex items-center justify-around bg-dark-900 rounded-lg p-4">
        {Array.from({ length: years + 1 }).map((_, i) => {
          const value = Math.round(futureValue / Math.pow(1 + rate / 100, years - i));
          const isFirst = i === 0;
          const isLast = i === years;
          return (
            <div key={i} className="text-center">
              <div
                className={`w-10 h-10 rounded-full flex items-center justify-center text-xs font-bold ${
                  isFirst ? 'bg-emerald-600' : isLast ? 'bg-amber-600' : 'bg-dark-600'
                }`}
              >
                {isFirst ? 'Now' : isLast ? 'End' : `Y${i}`}
              </div>
              <p className="text-dark-400 text-xs mt-1">${value}</p>
            </div>
          );
        })}
      </div>

      <div className="text-center mt-4">
        <p className="text-dark-300">
          Future value of <span className="text-amber-400 font-bold">${futureValue}</span> in {years} years
        </p>
        <p className="text-dark-300">
          is worth <span className="text-emerald-400 font-bold">${presentValue}</span> today
        </p>
      </div>
    </div>
  );
}

export default function Section06() {
  return (
    <LessonLayout sectionId={6}>
      {/* Opening Quote */}
      <blockquote className="border-l-4 border-emerald-500 pl-6 py-2 my-6 text-xl italic text-dark-300">
        "The prices of factors of production are determined by the prices of products,
        and not the other way around."
        <footer className="text-sm text-dark-500 mt-2 not-italic">
          — Murray N. Rothbard, Man, Economy, and State
        </footer>
      </blockquote>

      {/* Introduction */}
      <p className="text-lg text-dark-300 mb-6">
        This chapter explains how <strong className="text-emerald-400">factor prices</strong> are
        determined. Rothbard develops the theory of <strong className="text-emerald-400">marginal
        productivity</strong> and shows how value is "imputed" backward from consumers' goods
        to the factors that produce them.
      </p>

      {/* Section 1: Imputation of the DMVP */}
      <h2 className="text-2xl font-semibold mt-10 mb-4">1. Imputation of the Discounted Marginal Value Product</h2>

      <p className="my-4">
        Factor prices are derived from product prices through a process called
        <strong className="text-emerald-400"> imputation</strong>. The key principle: factors are
        paid according to their <strong className="text-emerald-400">discounted marginal value
        product (DMVP)</strong>.
      </p>

      <div className="bg-dark-800/50 rounded-xl p-6 border border-emerald-600/30 my-6">
        <h4 className="font-semibold text-emerald-400 mb-3">The DMVP Principle</h4>
        <p className="text-dark-200 text-lg mb-4">
          Each factor tends to be paid the discounted value of its marginal contribution
          to the final product.
        </p>
        <p className="text-center text-xl font-mono text-emerald-400 mb-4">
          Factor Price = MVP ÷ (1 + r)^t
        </p>
        <p className="text-dark-400 text-sm">
          Where MVP is the marginal value product, r is the interest rate, and t is the
          time until the product is sold.
        </p>
      </div>

      <MVPImputationDemo />

      <Callout type="info">
        <p>
          <strong>Why discounted?</strong> Because factors are paid in the present, but their
          products are sold in the future. The capitalist-entrepreneur advances present money
          to factors and waits for future revenue. Interest compensates this waiting.
        </p>
      </Callout>

      {/* Section 2: The Pricing of the Factors */}
      <h2 className="text-2xl font-semibold mt-10 mb-4">2. The Pricing of the Factors</h2>

      <p className="my-4">
        The prices of land, labor, and capital goods are all determined by the same principle:
        the discounted marginal value product. But the specific form of income differs:
      </p>

      <FactorIncomeDemo />

      <CardGrid>
        <Card>
          <h4 className="font-semibold text-emerald-400 mb-2">Wages</h4>
          <p className="text-sm text-dark-300">
            The price of labor services. Determined by the DMVP of the marginal worker
            in each occupation.
          </p>
        </Card>
        <Card>
          <h4 className="font-semibold text-emerald-400 mb-2">Rent</h4>
          <p className="text-sm text-dark-300">
            The price of land services. Determined by the DMVP of the marginal unit
            of land in each use.
          </p>
        </Card>
        <Card>
          <h4 className="font-semibold text-emerald-400 mb-2">Interest</h4>
          <p className="text-sm text-dark-300">
            The return on capital investment. The premium for advancing present goods
            to factors.
          </p>
        </Card>
        <Card>
          <h4 className="font-semibold text-emerald-400 mb-2">Profit/Loss</h4>
          <p className="text-sm text-dark-300">
            The residual that goes to entrepreneurs. Positive if forecasts are correct;
            negative if wrong.
          </p>
        </Card>
      </CardGrid>

      {/* Section 3: The Source of Factor Incomes */}
      <h2 className="text-2xl font-semibold mt-10 mb-4">3. The Source of Factor Incomes</h2>

      <p className="my-4">
        Rothbard emphasizes that factor incomes ultimately come from <strong className="text-emerald-400">
        consumers</strong>. When consumers buy products, they pay prices that cover all
        factor payments. Factors are paid what their services are worth to consumers
        (discounted for time).
      </p>

      <div className="space-y-3 my-6">
        {[
          {
            step: 1,
            title: 'Consumers Value Products',
            description: 'Consumer demand determines product prices.',
          },
          {
            step: 2,
            title: 'Product Prices Determine Factor Demand',
            description: 'Entrepreneurs bid for factors based on expected product revenue.',
          },
          {
            step: 3,
            title: 'Competition Equalizes Returns',
            description: 'Factor prices adjust until DMVP equals price across all uses.',
          },
          {
            step: 4,
            title: 'Factors Flow to Highest-Valued Uses',
            description: 'Resources move from lower-valued to higher-valued production.',
          },
        ].map(({ step, title, description }) => (
          <div key={step} className="flex items-start gap-4 p-4 bg-dark-800/50 rounded-lg border border-dark-700">
            <span className="w-10 h-10 flex items-center justify-center bg-emerald-600 rounded-full text-white font-bold text-sm shrink-0">
              {step}
            </span>
            <div>
              <p className="font-semibold text-dark-100">{title}</p>
              <p className="text-sm text-dark-400">{description}</p>
            </div>
          </div>
        ))}
      </div>

      <Callout type="note">
        <p>
          <strong>No exploitation:</strong> Factors are not "exploited" when they receive
          less than the full MVP. The discount is interest—payment for time. Capitalists
          who advance money to workers perform a valuable service by bearing the waiting.
        </p>
      </Callout>

      {/* Section 4: Discounting and the Structure of Production */}
      <h2 className="text-2xl font-semibold mt-10 mb-4">4. Discounting and the Structure of Production</h2>

      <p className="my-4">
        Discounting connects the interest rate to the structure of production. Higher-order
        goods (farther from consumption) are discounted more heavily because the wait for
        revenue is longer.
      </p>

      <DiscountingDemo />

      <p className="my-4">
        This explains why lower interest rates encourage investment in higher-order (more
        capital-intensive) production. When the discount is smaller, the present value of
        distant future revenues is higher, making long-term projects more attractive.
      </p>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 my-6">
        <div className="bg-dark-800/50 rounded-xl p-4 border border-dark-700">
          <h3 className="text-lg font-semibold text-emerald-400 mb-2">High Interest Rates</h3>
          <ul className="text-dark-400 text-sm space-y-1">
            <li>• Heavy discounting of future</li>
            <li>• Short production processes favored</li>
            <li>• Less capital-intensive methods</li>
            <li>• Quick turnover preferred</li>
          </ul>
        </div>
        <div className="bg-dark-800/50 rounded-xl p-4 border border-dark-700">
          <h3 className="text-lg font-semibold text-emerald-400 mb-2">Low Interest Rates</h3>
          <ul className="text-dark-400 text-sm space-y-1">
            <li>• Light discounting of future</li>
            <li>• Long production processes viable</li>
            <li>• More capital-intensive methods</li>
            <li>• Patient investment rewarded</li>
          </ul>
        </div>
      </div>

      {/* The Marginal Productivity Theory */}
      <h2 className="text-2xl font-semibold mt-10 mb-4">The Marginal Productivity Theory</h2>

      <p className="my-4">
        Rothbard presents a refined version of the <strong className="text-emerald-400">marginal
        productivity theory</strong> of distribution. This theory explains how the total
        product is divided among the factors that contribute to it.
      </p>

      <div className="bg-dark-800/50 rounded-xl p-6 border border-emerald-600/30 my-6">
        <h4 className="font-semibold text-emerald-400 mb-3">The Marginal Productivity Theorem</h4>
        <p className="text-dark-200 text-lg mb-4">
          If each factor is paid its marginal product, and there are constant returns
          to scale, then total payments to factors exactly exhaust the total product.
        </p>
        <p className="text-dark-400 text-sm">
          This "adding-up" theorem shows that there is no residual left over—every dollar
          of revenue goes to some factor of production.
        </p>
      </div>

      <Callout type="success">
        <p>
          <strong>Justice in distribution:</strong> The market's distribution of income is
          not arbitrary. Each factor receives what it contributes at the margin. This is
          neither exploitation (factors receive their contribution) nor charity (they don't
          receive more than their contribution).
        </p>
      </Callout>

      {/* Key Takeaways */}
      <h2 className="text-2xl font-semibold mt-10 mb-4">Key Takeaways</h2>

      <div className="bg-dark-800 rounded-lg p-6">
        <ul className="space-y-3">
          <li className="flex items-start gap-3">
            <span className="text-emerald-400 font-bold">1.</span>
            <span>
              Factor prices are determined by <strong>imputation</strong> from product
              prices—not the other way around.
            </span>
          </li>
          <li className="flex items-start gap-3">
            <span className="text-emerald-400 font-bold">2.</span>
            <span>
              Each factor tends to earn its <strong>discounted marginal value product</strong>
              (DMVP)—what its marginal contribution is worth, discounted for time.
            </span>
          </li>
          <li className="flex items-start gap-3">
            <span className="text-emerald-400 font-bold">3.</span>
            <span>
              <strong>Wages, rent, and interest</strong> are the incomes of labor, land,
              and capital respectively.
            </span>
          </li>
          <li className="flex items-start gap-3">
            <span className="text-emerald-400 font-bold">4.</span>
            <span>
              The <strong>discount rate</strong> (interest) links factor prices to the
              time structure of production.
            </span>
          </li>
          <li className="flex items-start gap-3">
            <span className="text-emerald-400 font-bold">5.</span>
            <span>
              <strong>Marginal productivity theory</strong> explains how income is distributed
              among factors according to their contributions.
            </span>
          </li>
        </ul>
      </div>

      {/* Next Section Preview */}
      <h2 className="text-2xl font-semibold mt-10 mb-4">Coming Next</h2>

      <p className="my-4">
        Chapter 8 examines <strong>Entrepreneurship and Change</strong>—the role of the
        entrepreneur in a dynamic economy, how profits and losses guide resource allocation,
        and what happens when conditions change.
      </p>
    </LessonLayout>
  );
}
