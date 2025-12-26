import { useState } from 'react';
import { motion } from 'framer-motion';

interface Props {
  className?: string;
}

export function ClockArithmetic({ className = '' }: Props) {
  const [startHour, setStartHour] = useState(3);
  const [hoursToAdd, setHoursToAdd] = useState(5);
  const [result, setResult] = useState<number | null>(null);
  const [isAnimating, setIsAnimating] = useState(false);
  const [currentHour, setCurrentHour] = useState(3);

  const calculateResult = () => {
    setIsAnimating(true);
    setCurrentHour(startHour);
    
    // Animate through each hour
    let step = 0;
    const interval = setInterval(() => {
      step++;
      setCurrentHour((startHour + step) % 12 || 12);
      
      if (step >= hoursToAdd) {
        clearInterval(interval);
        const finalResult = (startHour + hoursToAdd) % 12 || 12;
        setResult(finalResult);
        setIsAnimating(false);
      }
    }, 200);
  };

  const getHourPosition = (hour: number) => {
    const angle = ((hour % 12) * 30 - 90) * (Math.PI / 180);
    const radius = 80;
    return {
      x: 100 + radius * Math.cos(angle),
      y: 100 + radius * Math.sin(angle),
    };
  };

  const getHandRotation = (hour: number) => {
    return (hour % 12) * 30;
  };

  return (
    <div className={`p-6 rounded-2xl bg-dark-800/50 border border-dark-700/50 ${className}`}>
      <h3 className="text-xl font-bold text-dark-100 mb-4">Clock Arithmetic (Modular Addition)</h3>
      
      <p className="text-dark-300 mb-6">
        Clock arithmetic is a perfect example of modular arithmetic. On a 12-hour clock, 
        after 12 comes 1 again. This is the same as calculating <code className="text-primary-400">(a + b) mod 12</code>.
      </p>

      <div className="flex flex-col lg:flex-row gap-8 items-center">
        {/* Clock Face */}
        <div className="relative">
          <svg width="200" height="200" className="drop-shadow-lg">
            {/* Clock background */}
            <circle cx="100" cy="100" r="95" fill="#1a1a2e" stroke="#374151" strokeWidth="2" />
            
            {/* Hour markers */}
            {[...Array(12)].map((_, i) => {
              const hour = i === 0 ? 12 : i;
              const pos = getHourPosition(hour);
              const isStart = hour === startHour;
              const isResult = hour === result;
              const isCurrent = hour === currentHour && isAnimating;
              
              return (
                <g key={hour}>
                  <circle
                    cx={pos.x}
                    cy={pos.y}
                    r="12"
                    fill={isCurrent ? '#8b5cf6' : isResult ? '#10b981' : isStart ? '#f59e0b' : '#374151'}
                    className="transition-colors duration-200"
                  />
                  <text
                    x={pos.x}
                    y={pos.y}
                    textAnchor="middle"
                    dominantBaseline="central"
                    fill="#fff"
                    fontSize="10"
                    fontWeight="bold"
                  >
                    {hour}
                  </text>
                </g>
              );
            })}
            
            {/* Clock hand */}
            <motion.line
              x1="100"
              y1="100"
              x2="100"
              y2="35"
              stroke="#8b5cf6"
              strokeWidth="4"
              strokeLinecap="round"
              animate={{ rotate: getHandRotation(currentHour) }}
              style={{ originX: '100px', originY: '100px', transformOrigin: '100px 100px' }}
              transition={{ type: 'spring', stiffness: 100, damping: 15 }}
            />
            
            {/* Center dot */}
            <circle cx="100" cy="100" r="6" fill="#8b5cf6" />
          </svg>
        </div>

        {/* Controls */}
        <div className="flex-1 space-y-4">
          <div className="grid grid-cols-2 gap-4">
            <div>
              <label className="block text-dark-300 text-sm mb-2">Start Hour</label>
              <input
                type="number"
                min="1"
                max="12"
                value={startHour}
                onChange={(e) => {
                  const val = Math.max(1, Math.min(12, parseInt(e.target.value) || 1));
                  setStartHour(val);
                  setCurrentHour(val);
                  setResult(null);
                }}
                className="w-full px-4 py-2 rounded-xl bg-dark-700 border border-dark-600 text-dark-100 focus:outline-none focus:border-primary-500"
              />
            </div>
            <div>
              <label className="block text-dark-300 text-sm mb-2">Hours to Add</label>
              <input
                type="number"
                min="0"
                max="24"
                value={hoursToAdd}
                onChange={(e) => {
                  setHoursToAdd(Math.max(0, parseInt(e.target.value) || 0));
                  setResult(null);
                }}
                className="w-full px-4 py-2 rounded-xl bg-dark-700 border border-dark-600 text-dark-100 focus:outline-none focus:border-primary-500"
              />
            </div>
          </div>

          <button
            onClick={calculateResult}
            disabled={isAnimating}
            className="w-full px-4 py-2 rounded-xl bg-primary-500 hover:bg-primary-600 text-white font-medium disabled:opacity-50 disabled:cursor-not-allowed transition-colors"
          >
            {isAnimating ? 'Calculating...' : 'Calculate'}
          </button>

          {result !== null && !isAnimating && (
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              className="p-4 rounded-xl bg-dark-700/50 border border-dark-600"
            >
              <div className="text-center">
                <p className="text-dark-300 mb-2">Result:</p>
                <p className="text-2xl font-bold text-emerald-400">
                  {startHour} + {hoursToAdd} = {result} (mod 12)
                </p>
                <p className="text-dark-400 text-sm mt-2">
                  The clock hand moves {hoursToAdd} hours forward from {startHour} and lands on {result}
                </p>
              </div>
            </motion.div>
          )}

          <div className="p-4 rounded-xl bg-dark-700/30 border border-dark-600/50">
            <h4 className="text-dark-200 font-medium mb-2">How it works:</h4>
            <p className="text-dark-400 text-sm">
              In modular arithmetic mod 12, we "wrap around" after reaching 12. 
              The formula is: <code className="text-primary-400">(start + add) mod 12</code>, 
              where we use 12 instead of 0 for the result.
            </p>
          </div>
        </div>
      </div>

      {/* Legend */}
      <div className="flex gap-6 mt-6 justify-center text-sm">
        <div className="flex items-center gap-2">
          <div className="w-4 h-4 rounded-full bg-amber-500"></div>
          <span className="text-dark-300">Start</span>
        </div>
        <div className="flex items-center gap-2">
          <div className="w-4 h-4 rounded-full bg-primary-500"></div>
          <span className="text-dark-300">Current</span>
        </div>
        <div className="flex items-center gap-2">
          <div className="w-4 h-4 rounded-full bg-emerald-500"></div>
          <span className="text-dark-300">Result</span>
        </div>
      </div>
    </div>
  );
}
