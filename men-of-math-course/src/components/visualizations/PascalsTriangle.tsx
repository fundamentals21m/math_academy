import { useState, useMemo } from 'react';

interface Props {
  className?: string;
}

type HighlightMode = 'none' | 'evens' | 'fibonacci' | 'powers';

export function PascalsTriangle({ className = '' }: Props) {
  const [numRows, setNumRows] = useState(8);
  const [highlightMode, setHighlightMode] = useState<HighlightMode>('none');

  // Generate Pascal's triangle
  const triangle = useMemo(() => {
    const rows: number[][] = [[1]];
    for (let i = 1; i < numRows; i++) {
      const prevRow = rows[i - 1];
      const newRow = [1];
      for (let j = 1; j < i; j++) {
        newRow.push(prevRow[j - 1] + prevRow[j]);
      }
      newRow.push(1);
      rows.push(newRow);
    }
    return rows;
  }, [numRows]);

  // Fibonacci numbers (for diagonal sum highlighting)
  const fibonacciNumbers = useMemo(() => {
    const fibs = [1, 1];
    for (let i = 2; i < 20; i++) {
      fibs.push(fibs[i - 1] + fibs[i - 2]);
    }
    return new Set(fibs);
  }, []);

  // Determine cell color
  const getCellColor = (row: number, col: number, value: number) => {
    if (highlightMode === 'evens') {
      return value % 2 === 0 ? 'bg-blue-500/50' : 'bg-dark-600';
    }
    if (highlightMode === 'powers') {
      // Highlight row sums (powers of 2)
      const rowSum = triangle[row].reduce((a, b) => a + b, 0);
      return rowSum === Math.pow(2, row) ? 'bg-orange-500/30' : 'bg-dark-600';
    }
    if (highlightMode === 'fibonacci') {
      // Highlight diagonal sums that give Fibonacci
      return fibonacciNumbers.has(value) ? 'bg-emerald-500/50' : 'bg-dark-600';
    }
    return 'bg-dark-600';
  };

  // Calculate row sums
  const rowSums = triangle.map(row => row.reduce((a, b) => a + b, 0));

  // SVG layout
  const cellSize = 40;
  const width = numRows * cellSize + 100;
  const height = numRows * 45 + 60;

  return (
    <div className={`p-6 rounded-2xl bg-dark-800/50 border border-dark-700/50 ${className}`}>
      <h3 className="text-xl font-bold text-dark-100 mb-4">Pascal's Triangle</h3>

      <p className="text-dark-300 mb-6">
        Each number is the sum of the two above it. This triangle encodes binomial coefficients,
        probability, and countless patterns discovered by Pascal.
      </p>

      {/* Controls */}
      <div className="mb-4">
        <label className="text-blue-400 text-sm">Rows: {numRows}</label>
        <input
          type="range"
          min="4"
          max="12"
          step="1"
          value={numRows}
          onChange={(e) => setNumRows(parseInt(e.target.value))}
          className="w-full h-2 bg-dark-700 rounded-lg appearance-none cursor-pointer accent-blue-500"
        />
      </div>

      {/* Highlight mode */}
      <div className="flex flex-wrap gap-2 mb-4">
        {[
          { mode: 'none' as const, label: 'No Highlight' },
          { mode: 'evens' as const, label: 'Even Numbers' },
          { mode: 'powers' as const, label: 'Powers of 2' },
          { mode: 'fibonacci' as const, label: 'Fibonacci' },
        ].map(({ mode, label }) => (
          <button
            key={mode}
            onClick={() => setHighlightMode(mode)}
            className={`px-3 py-1.5 rounded-lg text-sm font-medium transition-colors ${
              highlightMode === mode
                ? 'bg-primary-500 text-white'
                : 'bg-dark-700 text-dark-300 hover:bg-dark-600'
            }`}
          >
            {label}
          </button>
        ))}
      </div>

      {/* Triangle display */}
      <div className="bg-dark-900 rounded-lg p-4 overflow-x-auto">
        <div className="flex flex-col items-center">
          {triangle.map((row, rowIdx) => (
            <div key={rowIdx} className="flex gap-1 mb-1">
              {row.map((value, colIdx) => (
                <div
                  key={colIdx}
                  className={`w-10 h-10 flex items-center justify-center rounded text-sm font-mono ${getCellColor(rowIdx, colIdx, value)} ${
                    value > 999 ? 'text-xs' : ''
                  }`}
                  title={`C(${rowIdx}, ${colIdx}) = ${value}`}
                >
                  <span className={highlightMode !== 'none' && getCellColor(rowIdx, colIdx, value) !== 'bg-dark-600' ? 'text-white' : 'text-dark-300'}>
                    {value}
                  </span>
                </div>
              ))}
              {highlightMode === 'powers' && (
                <div className="w-12 h-10 flex items-center justify-center text-orange-400 text-sm font-mono">
                  = {rowSums[rowIdx]}
                </div>
              )}
            </div>
          ))}
        </div>
      </div>

      {/* Row labels */}
      <div className="mt-4 grid grid-cols-2 gap-4">
        <div className="p-3 rounded-xl bg-blue-500/10 border border-blue-500/30">
          <p className="text-dark-400 text-xs">Row n entries</p>
          <p className="text-blue-400 font-mono text-sm">
            C(n,0), C(n,1), ..., C(n,n)
          </p>
        </div>
        <div className="p-3 rounded-xl bg-orange-500/10 border border-orange-500/30">
          <p className="text-dark-400 text-xs">Row sum</p>
          <p className="text-orange-400 font-mono text-sm">
            2^{numRows - 1} = {Math.pow(2, numRows - 1)}
          </p>
        </div>
      </div>

      {/* Explanation */}
      <div className="mt-4 p-4 rounded-xl bg-dark-700/50 border border-dark-600">
        <p className="text-emerald-400 font-medium">Hidden Patterns</p>
        <ul className="text-dark-300 text-sm mt-2 space-y-1">
          <li>• <strong>Binomial coefficients:</strong> Entry (n, k) = C(n, k) = n! / (k!(n-k)!)</li>
          <li>• <strong>Row sums:</strong> Each row sums to 2^n</li>
          <li>• <strong>Fibonacci:</strong> Diagonal sums give Fibonacci numbers</li>
          <li>• <strong>Sierpinski:</strong> Coloring odds/evens reveals a fractal</li>
        </ul>
      </div>
    </div>
  );
}
