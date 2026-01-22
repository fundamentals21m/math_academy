import { useState, useMemo, useCallback } from 'react';

// Gompertz mortality parameters (typical human mortality)
// μ(x) = α * exp(β * x) where α ≈ 0.00002 and β ≈ 0.085
const GOMPERTZ_ALPHA = 0.00002;
const GOMPERTZ_BETA = 0.085;

interface SimulationYear {
  year: number;
  age: number;
  survivors: number;
  deaths: number;
  poolValue: number;
  payoutPerSurvivor: number;
  investmentReturn: number;
  mortalityCredit: number;
  mortalityCreditPercent: number;
  qx: number; // mortality rate for that age
}

/**
 * Calculate mortality rate qx using Gompertz law
 * qx ≈ 1 - exp(-∫_x^{x+1} μ(t)dt)
 * where μ(t) = α * exp(β * t)
 */
function calculateMortalityRate(age: number): number {
  // Integral of μ(t) from x to x+1 = (α/β) * exp(βx) * (exp(β) - 1)
  const integral =
    (GOMPERTZ_ALPHA / GOMPERTZ_BETA) *
    Math.exp(GOMPERTZ_BETA * age) *
    (Math.exp(GOMPERTZ_BETA) - 1);
  return 1 - Math.exp(-integral);
}

/**
 * Simulate deaths using binomial distribution
 * Returns number of deaths given n survivors and mortality rate p
 */
function simulateDeaths(n: number, p: number): number {
  let deaths = 0;
  for (let i = 0; i < n; i++) {
    if (Math.random() < p) {
      deaths++;
    }
  }
  return deaths;
}

interface SliderProps {
  label: string;
  value: number;
  min: number;
  max: number;
  step: number;
  onChange: (value: number) => void;
  formatValue?: (value: number) => string;
}

function Slider({ label, value, min, max, step, onChange, formatValue }: SliderProps) {
  const displayValue = formatValue ? formatValue(value) : value.toString();

  return (
    <div className="space-y-2">
      <div className="flex justify-between items-center">
        <label className="text-sm font-medium text-dark-300">{label}</label>
        <span className="text-sm font-mono text-emerald-400">{displayValue}</span>
      </div>
      <input
        type="range"
        min={min}
        max={max}
        step={step}
        value={value}
        onChange={(e) => onChange(parseFloat(e.target.value))}
        className="w-full h-2 bg-dark-700 rounded-lg appearance-none cursor-pointer
                   [&::-webkit-slider-thumb]:appearance-none
                   [&::-webkit-slider-thumb]:w-4
                   [&::-webkit-slider-thumb]:h-4
                   [&::-webkit-slider-thumb]:rounded-full
                   [&::-webkit-slider-thumb]:bg-emerald-500
                   [&::-webkit-slider-thumb]:cursor-pointer
                   [&::-webkit-slider-thumb]:transition-all
                   [&::-webkit-slider-thumb]:hover:bg-emerald-400
                   [&::-webkit-slider-thumb]:hover:scale-110
                   [&::-moz-range-thumb]:w-4
                   [&::-moz-range-thumb]:h-4
                   [&::-moz-range-thumb]:rounded-full
                   [&::-moz-range-thumb]:bg-emerald-500
                   [&::-moz-range-thumb]:border-0
                   [&::-moz-range-thumb]:cursor-pointer"
      />
      <div className="flex justify-between text-xs text-dark-500">
        <span>{formatValue ? formatValue(min) : min}</span>
        <span>{formatValue ? formatValue(max) : max}</span>
      </div>
    </div>
  );
}

interface ChartProps {
  data: SimulationYear[];
  dataKey: keyof SimulationYear;
  label: string;
  color: string;
  formatY?: (value: number) => string;
  height?: number;
}

function LineChart({ data, dataKey, label, color, formatY, height = 150 }: ChartProps) {
  if (data.length === 0) return null;

  const values = data.map((d) => d[dataKey] as number);
  const maxValue = Math.max(...values);
  const minValue = Math.min(...values);
  const range = maxValue - minValue || 1;

  const width = 400;
  const padding = { top: 20, right: 40, bottom: 30, left: 60 };
  const chartWidth = width - padding.left - padding.right;
  const chartHeight = height - padding.top - padding.bottom;

  const points = data.map((d, i) => {
    const x = padding.left + (i / Math.max(data.length - 1, 1)) * chartWidth;
    const y = padding.top + chartHeight - ((d[dataKey] as number) - minValue) / range * chartHeight;
    return `${x},${y}`;
  }).join(' ');

  const areaPoints = `${padding.left},${padding.top + chartHeight} ${points} ${padding.left + chartWidth},${padding.top + chartHeight}`;

  return (
    <div className="bg-dark-800/30 rounded-xl p-4 border border-dark-700/50">
      <h4 className="text-sm font-medium text-dark-300 mb-3">{label}</h4>
      <svg viewBox={`0 0 ${width} ${height}`} className="w-full">
        {/* Grid lines */}
        {[0, 0.25, 0.5, 0.75, 1].map((tick, i) => (
          <g key={i}>
            <line
              x1={padding.left}
              y1={padding.top + chartHeight * (1 - tick)}
              x2={width - padding.right}
              y2={padding.top + chartHeight * (1 - tick)}
              stroke="rgb(51, 65, 85)"
              strokeWidth="0.5"
              strokeDasharray="4,4"
            />
            <text
              x={padding.left - 8}
              y={padding.top + chartHeight * (1 - tick) + 4}
              textAnchor="end"
              className="fill-dark-500 text-[10px]"
            >
              {formatY ? formatY(minValue + range * tick) : Math.round(minValue + range * tick)}
            </text>
          </g>
        ))}

        {/* Area fill */}
        <polygon
          points={areaPoints}
          fill={`url(#gradient-${dataKey})`}
          opacity="0.3"
        />

        {/* Gradient definition */}
        <defs>
          <linearGradient id={`gradient-${dataKey}`} x1="0" y1="0" x2="0" y2="1">
            <stop offset="0%" stopColor={color} stopOpacity="0.6" />
            <stop offset="100%" stopColor={color} stopOpacity="0" />
          </linearGradient>
        </defs>

        {/* Line */}
        <polyline
          points={points}
          fill="none"
          stroke={color}
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        />

        {/* Data points */}
        {data.map((d, i) => {
          const x = padding.left + (i / Math.max(data.length - 1, 1)) * chartWidth;
          const y = padding.top + chartHeight - ((d[dataKey] as number) - minValue) / range * chartHeight;
          return (
            <circle
              key={i}
              cx={x}
              cy={y}
              r="3"
              fill={color}
              className="opacity-0 hover:opacity-100 transition-opacity"
            />
          );
        })}

        {/* X-axis labels */}
        {data.length > 0 && (
          <>
            <text
              x={padding.left}
              y={height - 8}
              textAnchor="start"
              className="fill-dark-500 text-[10px]"
            >
              Year 0
            </text>
            <text
              x={width - padding.right}
              y={height - 8}
              textAnchor="end"
              className="fill-dark-500 text-[10px]"
            >
              Year {data.length - 1}
            </text>
          </>
        )}
      </svg>
    </div>
  );
}

function StatCard({ label, value, subValue }: { label: string; value: string; subValue?: string }) {
  return (
    <div className="bg-dark-800/50 rounded-xl p-4 border border-dark-700/50">
      <p className="text-xs font-medium text-dark-400 uppercase tracking-wider mb-1">{label}</p>
      <p className="text-xl font-bold text-emerald-400">{value}</p>
      {subValue && <p className="text-xs text-dark-500 mt-1">{subValue}</p>}
    </div>
  );
}

export function TontineSimulator() {
  // Input parameters
  const [poolSize, setPoolSize] = useState(100);
  const [contribution, setContribution] = useState(100000);
  const [returnRate, setReturnRate] = useState(0.05);
  const [startingAge, setStartingAge] = useState(65);

  // Simulation state
  const [simulationData, setSimulationData] = useState<SimulationYear[]>([]);
  const [currentYear, setCurrentYear] = useState(0);
  const [isRunning, setIsRunning] = useState(false);
  const [isComplete, setIsComplete] = useState(false);

  // Calculate initial pool value
  const initialPoolValue = useMemo(() => poolSize * contribution, [poolSize, contribution]);

  // Format currency
  const formatCurrency = useCallback((value: number) => {
    if (value >= 1000000) {
      return `$${(value / 1000000).toFixed(2)}M`;
    } else if (value >= 1000) {
      return `$${(value / 1000).toFixed(0)}K`;
    }
    return `$${value.toFixed(0)}`;
  }, []);

  // Format percentage
  const formatPercent = useCallback((value: number) => `${(value * 100).toFixed(1)}%`, []);

  // Initialize or reset simulation
  const resetSimulation = useCallback(() => {
    const initialYear: SimulationYear = {
      year: 0,
      age: startingAge,
      survivors: poolSize,
      deaths: 0,
      poolValue: initialPoolValue,
      payoutPerSurvivor: contribution,
      investmentReturn: 0,
      mortalityCredit: 0,
      mortalityCreditPercent: 0,
      qx: calculateMortalityRate(startingAge),
    };
    setSimulationData([initialYear]);
    setCurrentYear(0);
    setIsComplete(false);
    setIsRunning(false);
  }, [poolSize, contribution, startingAge, initialPoolValue]);

  // Step one year forward
  const stepYear = useCallback(() => {
    setSimulationData((prevData) => {
      if (prevData.length === 0) return prevData;

      const lastYear = prevData[prevData.length - 1];

      if (lastYear.survivors <= 1) {
        setIsComplete(true);
        setIsRunning(false);
        return prevData;
      }

      const newAge = lastYear.age + 1;
      const qx = calculateMortalityRate(newAge);
      const deaths = simulateDeaths(lastYear.survivors, qx);
      const newSurvivors = Math.max(lastYear.survivors - deaths, 1);

      // Calculate pool growth
      const investmentReturn = lastYear.poolValue * returnRate;
      const newPoolValue = lastYear.poolValue + investmentReturn;

      // Calculate payout per survivor
      const newPayoutPerSurvivor = newPoolValue / newSurvivors;

      // Calculate mortality credit
      // Mortality credit = what you gained from others dying
      // Base payout without mortality would be: poolValue / survivors if no one died
      const basePayout = newPoolValue / lastYear.survivors;
      const mortalityCredit = newPayoutPerSurvivor - basePayout;
      const mortalityCreditPercent = mortalityCredit / newPayoutPerSurvivor;

      const newYear: SimulationYear = {
        year: lastYear.year + 1,
        age: newAge,
        survivors: newSurvivors,
        deaths,
        poolValue: newPoolValue,
        payoutPerSurvivor: newPayoutPerSurvivor,
        investmentReturn,
        mortalityCredit,
        mortalityCreditPercent,
        qx,
      };

      setCurrentYear(newYear.year);

      if (newSurvivors <= 1) {
        setIsComplete(true);
        setIsRunning(false);
      }

      return [...prevData, newYear];
    });
  }, [returnRate]);

  // Run simulation to completion
  const runToCompletion = useCallback(() => {
    setIsRunning(true);

    const runStep = () => {
      setSimulationData((prevData) => {
        if (prevData.length === 0) {
          setIsRunning(false);
          return prevData;
        }

        const lastYear = prevData[prevData.length - 1];

        if (lastYear.survivors <= 1 || lastYear.year >= 50) {
          setIsComplete(true);
          setIsRunning(false);
          return prevData;
        }

        const newAge = lastYear.age + 1;
        const qx = calculateMortalityRate(newAge);
        const deaths = simulateDeaths(lastYear.survivors, qx);
        const newSurvivors = Math.max(lastYear.survivors - deaths, 1);

        const investmentReturn = lastYear.poolValue * returnRate;
        const newPoolValue = lastYear.poolValue + investmentReturn;
        const newPayoutPerSurvivor = newPoolValue / newSurvivors;

        const basePayout = newPoolValue / lastYear.survivors;
        const mortalityCredit = newPayoutPerSurvivor - basePayout;
        const mortalityCreditPercent = mortalityCredit / newPayoutPerSurvivor;

        const newYear: SimulationYear = {
          year: lastYear.year + 1,
          age: newAge,
          survivors: newSurvivors,
          deaths,
          poolValue: newPoolValue,
          payoutPerSurvivor: newPayoutPerSurvivor,
          investmentReturn,
          mortalityCredit,
          mortalityCreditPercent,
          qx,
        };

        setCurrentYear(newYear.year);

        if (newSurvivors <= 1 || newYear.year >= 50) {
          setIsComplete(true);
          setIsRunning(false);
        } else {
          setTimeout(runStep, 100);
        }

        return [...prevData, newYear];
      });
    };

    runStep();
  }, [returnRate]);

  // Get current stats
  const currentStats = useMemo(() => {
    if (simulationData.length === 0) return null;
    return simulationData[simulationData.length - 1];
  }, [simulationData]);

  return (
    <div className="bg-dark-900/50 rounded-2xl border border-dark-700/50 p-6 space-y-6">
      {/* Header */}
      <div className="border-b border-dark-700/50 pb-4">
        <h3 className="text-xl font-bold text-dark-100">Tontine Pool Simulator</h3>
        <p className="text-sm text-dark-400 mt-1">
          Simulate a tontine pool year-by-year using Gompertz mortality
        </p>
      </div>

      {/* Input Controls */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <Slider
          label="Pool Size (N)"
          value={poolSize}
          min={10}
          max={1000}
          step={10}
          onChange={setPoolSize}
          formatValue={(v) => `${v} members`}
        />
        <Slider
          label="Contribution per Member (C)"
          value={contribution}
          min={10000}
          max={500000}
          step={10000}
          onChange={setContribution}
          formatValue={formatCurrency}
        />
        <Slider
          label="Investment Return Rate (r)"
          value={returnRate}
          min={0.02}
          max={0.08}
          step={0.005}
          onChange={setReturnRate}
          formatValue={formatPercent}
        />
        <Slider
          label="Starting Age"
          value={startingAge}
          min={60}
          max={80}
          step={1}
          onChange={setStartingAge}
          formatValue={(v) => `${v} years old`}
        />
      </div>

      {/* Initial Pool Value */}
      <div className="bg-emerald-500/10 border border-emerald-500/20 rounded-xl p-4">
        <p className="text-sm text-emerald-300">
          Initial Pool Value: <span className="font-bold text-emerald-400">{formatCurrency(initialPoolValue)}</span>
          <span className="text-dark-400 ml-2">({poolSize} members x {formatCurrency(contribution)})</span>
        </p>
      </div>

      {/* Control Buttons */}
      <div className="flex flex-wrap gap-3">
        <button
          onClick={resetSimulation}
          className="px-4 py-2 bg-dark-700 hover:bg-dark-600 text-dark-200 rounded-lg font-medium transition-colors"
        >
          {simulationData.length === 0 ? 'Initialize' : 'Reset'}
        </button>
        <button
          onClick={stepYear}
          disabled={simulationData.length === 0 || isComplete || isRunning}
          className="px-4 py-2 bg-emerald-600 hover:bg-emerald-500 disabled:bg-dark-700 disabled:text-dark-500 text-white rounded-lg font-medium transition-colors"
        >
          Step Year
        </button>
        <button
          onClick={runToCompletion}
          disabled={simulationData.length === 0 || isComplete || isRunning}
          className="px-4 py-2 bg-emerald-600 hover:bg-emerald-500 disabled:bg-dark-700 disabled:text-dark-500 text-white rounded-lg font-medium transition-colors"
        >
          {isRunning ? 'Running...' : 'Run to Completion'}
        </button>
      </div>

      {/* Current Year Stats */}
      {currentStats && (
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          <StatCard
            label="Year / Age"
            value={`${currentStats.year} / ${currentStats.age}`}
            subValue={`Started at age ${startingAge}`}
          />
          <StatCard
            label="Survivors"
            value={currentStats.survivors.toString()}
            subValue={`${currentStats.deaths} died this year`}
          />
          <StatCard
            label="Pool Value"
            value={formatCurrency(currentStats.poolValue)}
            subValue={`+${formatCurrency(currentStats.investmentReturn)} returns`}
          />
          <StatCard
            label="Payout / Survivor"
            value={formatCurrency(currentStats.payoutPerSurvivor)}
            subValue={`${formatPercent(currentStats.mortalityCreditPercent)} from mortality credit`}
          />
        </div>
      )}

      {/* Charts */}
      {simulationData.length > 1 && (
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
          <LineChart
            data={simulationData}
            dataKey="poolValue"
            label="Pool Value Over Time"
            color="#10b981"
            formatY={formatCurrency}
          />
          <LineChart
            data={simulationData}
            dataKey="survivors"
            label="Number of Survivors"
            color="#f59e0b"
            formatY={(v) => Math.round(v).toString()}
          />
          <LineChart
            data={simulationData}
            dataKey="payoutPerSurvivor"
            label="Payout per Survivor"
            color="#06b6d4"
            formatY={formatCurrency}
          />
          <LineChart
            data={simulationData}
            dataKey="mortalityCreditPercent"
            label="Mortality Credit (% of Payout)"
            color="#ec4899"
            formatY={formatPercent}
          />
        </div>
      )}

      {/* Completion message */}
      {isComplete && (
        <div className="bg-amber-500/10 border border-amber-500/20 rounded-xl p-4 text-center">
          <p className="text-amber-300 font-medium">
            Simulation Complete! {currentStats?.survivors === 1 ? 'Only 1 survivor remains.' : `${currentStats?.survivors} survivors after 50 years.`}
          </p>
          {currentStats && (
            <p className="text-dark-400 text-sm mt-2">
              Final payout: {formatCurrency(currentStats.payoutPerSurvivor)} per survivor
              (initial contribution: {formatCurrency(contribution)})
            </p>
          )}
        </div>
      )}

      {/* Mortality Rate Reference */}
      {simulationData.length > 0 && (
        <div className="bg-dark-800/30 rounded-xl p-4 border border-dark-700/50">
          <h4 className="text-sm font-medium text-dark-300 mb-2">Gompertz Mortality Reference</h4>
          <p className="text-xs text-dark-500">
            Current mortality rate (q<sub>{currentStats?.age}</sub>): {formatPercent(currentStats?.qx || 0)}
          </p>
          <p className="text-xs text-dark-500 mt-1">
            Formula: q<sub>x</sub> = 1 - exp(-integral of mu(t) from x to x+1), where mu(t) = alpha * exp(beta * t)
          </p>
          <p className="text-xs text-dark-500 mt-1">
            Parameters: alpha = {GOMPERTZ_ALPHA}, beta = {GOMPERTZ_BETA}
          </p>
        </div>
      )}
    </div>
  );
}

export default TontineSimulator;
