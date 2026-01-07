import { useState } from 'react';

export function CantorDiagonalVisualizer() {
  const [gridSize, setGridSize] = useState(6);
  const [showDiagonal, setShowDiagonal] = useState(true);
  const [step] = useState(0);

  // Generate "random" decimals for demonstration (deterministic for consistency)
  const generateDecimal = (index: number): string => {
    const digits = [];
    for (let i = 0; i < gridSize; i++) {
      digits.push((index * 3 + i * 7 + index * i) % 10);
    }
    return digits.join('');
  };

  const decimals = Array.from({ length: gridSize }, (_, i) => generateDecimal(i + 1));

  // Construct the diagonal number (flipping each digit)
  const diagonalDigits = decimals.map((d, i) => {
    const digit = parseInt(d[i]);
    return digit === 9 ? 0 : digit + 1; // Avoid using same digit
  });
  const diagonalNumber = '0.' + diagonalDigits.join('');

  // SVG dimensions
  const width = 380;
  const height = 280;
  const cellSize = 28;
  const startX = 80;
  const startY = 40;

  const isHighlighted = (row: number, col: number) => {
    if (!showDiagonal) return false;
    if (step === 0) return row === col;
    return row === col && row < step;
  };

  return (
    <div className="bg-dark-800 rounded-xl p-6 my-6">
      <h3 className="text-lg font-semibold text-dark-200 mb-4">
        Cantor's Diagonal Argument
      </h3>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div>
          <svg width={width} height={height} className="bg-dark-900 rounded-lg">
            {/* Row labels */}
            {decimals.map((_, i) => (
              <text
                key={`row-${i}`}
                x={startX - 40}
                y={startY + i * cellSize + cellSize / 2 + 5}
                fill="#6b7280"
                fontSize="12"
              >
                r{i + 1} = 0.
              </text>
            ))}

            {/* Column headers */}
            {Array.from({ length: gridSize }, (_, i) => (
              <text
                key={`col-${i}`}
                x={startX + i * cellSize + cellSize / 2}
                y={startY - 10}
                fill="#6b7280"
                fontSize="10"
                textAnchor="middle"
              >
                d{i + 1}
              </text>
            ))}

            {/* Grid of digits */}
            {decimals.map((decimal, row) => (
              <g key={`row-${row}`}>
                {decimal.split('').map((digit, col) => {
                  const isDiag = row === col;
                  const highlighted = isHighlighted(row, col);

                  return (
                    <g key={`cell-${row}-${col}`}>
                      <rect
                        x={startX + col * cellSize}
                        y={startY + row * cellSize}
                        width={cellSize}
                        height={cellSize}
                        fill={highlighted ? 'rgba(245, 158, 11, 0.3)' : isDiag && showDiagonal ? 'rgba(239, 68, 68, 0.2)' : 'transparent'}
                        stroke={isDiag && showDiagonal ? '#ef4444' : '#374151'}
                        strokeWidth={isDiag && showDiagonal ? 2 : 0.5}
                      />
                      <text
                        x={startX + col * cellSize + cellSize / 2}
                        y={startY + row * cellSize + cellSize / 2 + 5}
                        fill={isDiag && showDiagonal ? '#ef4444' : '#9ca3af'}
                        fontSize="14"
                        fontWeight={isDiag ? 'bold' : 'normal'}
                        textAnchor="middle"
                      >
                        {digit}
                      </text>
                    </g>
                  );
                })}
              </g>
            ))}

            {/* Diagonal number construction */}
            {showDiagonal && (
              <g>
                <text x={startX - 40} y={startY + gridSize * cellSize + 35} fill="#10b981" fontSize="12">
                  New:
                </text>
                {diagonalDigits.map((digit, i) => (
                  <g key={`diag-${i}`}>
                    <rect
                      x={startX + i * cellSize}
                      y={startY + gridSize * cellSize + 20}
                      width={cellSize}
                      height={cellSize}
                      fill="rgba(16, 185, 129, 0.2)"
                      stroke="#10b981"
                      strokeWidth="2"
                    />
                    <text
                      x={startX + i * cellSize + cellSize / 2}
                      y={startY + gridSize * cellSize + 20 + cellSize / 2 + 5}
                      fill="#10b981"
                      fontSize="14"
                      fontWeight="bold"
                      textAnchor="middle"
                    >
                      {digit}
                    </text>
                    {/* Arrow from diagonal */}
                    <line
                      x1={startX + i * cellSize + cellSize / 2}
                      y1={startY + i * cellSize + cellSize}
                      x2={startX + i * cellSize + cellSize / 2}
                      y2={startY + gridSize * cellSize + 20}
                      stroke="#10b981"
                      strokeWidth="1"
                      strokeDasharray="2,2"
                      opacity="0.5"
                    />
                  </g>
                ))}
              </g>
            )}
          </svg>
        </div>

        <div className="space-y-4">
          <div>
            <label className="block text-dark-300 mb-2">
              List Size: {gridSize} numbers
            </label>
            <input
              type="range"
              min="4"
              max="8"
              step="1"
              value={gridSize}
              onChange={(e) => setGridSize(Number(e.target.value))}
              className="w-full"
            />
          </div>

          <div className="flex gap-2">
            <button
              onClick={() => setShowDiagonal(!showDiagonal)}
              className={`px-3 py-1 rounded text-sm ${showDiagonal ? 'bg-primary-500 text-white' : 'bg-dark-700 text-dark-300'}`}
            >
              {showDiagonal ? 'Hide' : 'Show'} Diagonal
            </button>
          </div>

          <div className="bg-dark-700 rounded-lg p-4 space-y-2 text-sm">
            <div className="text-dark-300 mb-2">
              Suppose we list ALL real numbers in [0,1):
            </div>
            {decimals.slice(0, 3).map((d, i) => (
              <div key={i} className="text-dark-400 font-mono text-xs">
                r{i + 1} = 0.{d}...
              </div>
            ))}
            <div className="text-dark-500 text-xs">...</div>

            {showDiagonal && (
              <>
                <div className="border-t border-dark-600 pt-2 text-dark-200">
                  <span className="text-emerald-400">Diagonal number:</span>
                </div>
                <div className="text-emerald-400 font-mono">
                  {diagonalNumber}...
                </div>
                <div className="text-dark-400 text-xs">
                  Each digit differs from the diagonal!
                </div>
              </>
            )}

            <div className="border-t border-dark-600 pt-2 text-dark-300 text-xs">
              <span className="text-amber-400">Conclusion:</span> The new number can't be in any list position,
              so no list can contain ALL real numbers. The reals are <em>uncountably</em> infinite!
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
