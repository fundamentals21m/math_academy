import { useState } from 'react';

export function VennDiagramVisualizer() {
  const [setA, setSetA] = useState<number[]>([1, 2, 3, 4, 5]);
  const [setB, setSetB] = useState<number[]>([4, 5, 6, 7, 8]);
  const [highlightOperation, setHighlightOperation] = useState<'union' | 'intersection' | 'difference' | 'symmetric' | null>(null);

  // Calculate set operations
  const union = [...new Set([...setA, ...setB])].sort((a, b) => a - b);
  const intersection = setA.filter((x) => setB.includes(x)).sort((a, b) => a - b);
  const differenceAB = setA.filter((x) => !setB.includes(x)).sort((a, b) => a - b);
  const differenceBA = setB.filter((x) => !setA.includes(x)).sort((a, b) => a - b);

  // SVG dimensions
  const width = 350;
  const height = 250;
  const circleRadius = 80;
  const leftX = 130;
  const rightX = 220;
  const centerY = 125;

  // Helper to position elements within circles
  const getElementPosition = (element: number, inA: boolean, inB: boolean) => {
    if (inA && inB) {
      // Intersection - center between circles
      const idx = intersection.indexOf(element);
      return { x: (leftX + rightX) / 2, y: centerY - 30 + idx * 20 };
    } else if (inA) {
      // Only in A - left side
      const idx = differenceAB.indexOf(element);
      return { x: leftX - 35, y: centerY - 30 + idx * 20 };
    } else {
      // Only in B - right side
      const idx = differenceBA.indexOf(element);
      return { x: rightX + 35, y: centerY - 30 + idx * 20 };
    }
  };

  const getFillA = () => {
    if (highlightOperation === 'union') return 'rgba(59, 130, 246, 0.4)';
    if (highlightOperation === 'difference') return 'rgba(59, 130, 246, 0.4)';
    if (highlightOperation === 'symmetric') return 'rgba(59, 130, 246, 0.4)';
    return 'rgba(59, 130, 246, 0.2)';
  };

  const getFillB = () => {
    if (highlightOperation === 'union') return 'rgba(16, 185, 129, 0.4)';
    if (highlightOperation === 'symmetric') return 'rgba(16, 185, 129, 0.4)';
    return 'rgba(16, 185, 129, 0.2)';
  };

  const getIntersectionFill = () => {
    if (highlightOperation === 'intersection' || highlightOperation === 'union') return 'rgba(245, 158, 11, 0.5)';
    if (highlightOperation === 'symmetric' || highlightOperation === 'difference') return 'rgba(75, 85, 99, 0.3)';
    return 'rgba(245, 158, 11, 0.3)';
  };

  const toggleElement = (num: number, set: 'A' | 'B') => {
    if (set === 'A') {
      if (setA.includes(num)) {
        setSetA(setA.filter((x) => x !== num));
      } else {
        setSetA([...setA, num].sort((a, b) => a - b));
      }
    } else {
      if (setB.includes(num)) {
        setSetB(setB.filter((x) => x !== num));
      } else {
        setSetB([...setB, num].sort((a, b) => a - b));
      }
    }
  };

  return (
    <div className="bg-dark-800 rounded-xl p-6 my-6">
      <h3 className="text-lg font-semibold text-dark-200 mb-4">
        Venn Diagram Explorer
      </h3>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div>
          <svg width={width} height={height} className="bg-dark-900 rounded-lg">
            <defs>
              <clipPath id="clipA">
                <circle cx={leftX} cy={centerY} r={circleRadius} />
              </clipPath>
              <clipPath id="clipB">
                <circle cx={rightX} cy={centerY} r={circleRadius} />
              </clipPath>
            </defs>

            {/* Circle A (only part not in B) */}
            <circle
              cx={leftX}
              cy={centerY}
              r={circleRadius}
              fill={getFillA()}
              stroke="#3b82f6"
              strokeWidth="2"
            />

            {/* Circle B (only part not in A) */}
            <circle
              cx={rightX}
              cy={centerY}
              r={circleRadius}
              fill={getFillB()}
              stroke="#10b981"
              strokeWidth="2"
            />

            {/* Intersection overlay */}
            <circle
              cx={leftX}
              cy={centerY}
              r={circleRadius}
              fill={getIntersectionFill()}
              clipPath="url(#clipB)"
            />

            {/* Labels */}
            <text x={leftX - 50} y={30} fill="#3b82f6" fontSize="14" fontWeight="bold">
              Set A
            </text>
            <text x={rightX + 20} y={30} fill="#10b981" fontSize="14" fontWeight="bold">
              Set B
            </text>

            {/* Elements */}
            {[...new Set([...setA, ...setB])].map((num) => {
              const inA = setA.includes(num);
              const inB = setB.includes(num);
              const pos = getElementPosition(num, inA, inB);
              return (
                <text
                  key={num}
                  x={pos.x}
                  y={pos.y}
                  fill={inA && inB ? '#f59e0b' : inA ? '#3b82f6' : '#10b981'}
                  fontSize="14"
                  textAnchor="middle"
                  dominantBaseline="middle"
                >
                  {num}
                </text>
              );
            })}
          </svg>
        </div>

        <div className="space-y-4">
          <div>
            <label className="block text-dark-300 mb-2">Set A elements (click to toggle):</label>
            <div className="flex flex-wrap gap-1">
              {[1, 2, 3, 4, 5, 6, 7, 8, 9].map((num) => (
                <button
                  key={num}
                  onClick={() => toggleElement(num, 'A')}
                  className={`w-8 h-8 rounded text-sm ${
                    setA.includes(num) ? 'bg-blue-500 text-white' : 'bg-dark-700 text-dark-400'
                  }`}
                >
                  {num}
                </button>
              ))}
            </div>
          </div>

          <div>
            <label className="block text-dark-300 mb-2">Set B elements (click to toggle):</label>
            <div className="flex flex-wrap gap-1">
              {[1, 2, 3, 4, 5, 6, 7, 8, 9].map((num) => (
                <button
                  key={num}
                  onClick={() => toggleElement(num, 'B')}
                  className={`w-8 h-8 rounded text-sm ${
                    setB.includes(num) ? 'bg-emerald-500 text-white' : 'bg-dark-700 text-dark-400'
                  }`}
                >
                  {num}
                </button>
              ))}
            </div>
          </div>

          <div>
            <label className="block text-dark-300 mb-2">Highlight operation:</label>
            <div className="flex flex-wrap gap-2">
              {[
                { key: 'union', label: 'A ∪ B' },
                { key: 'intersection', label: 'A ∩ B' },
                { key: 'difference', label: 'A − B' },
                { key: 'symmetric', label: 'A △ B' },
              ].map(({ key, label }) => (
                <button
                  key={key}
                  onClick={() => setHighlightOperation(highlightOperation === key ? null : (key as typeof highlightOperation))}
                  className={`px-3 py-1 rounded text-sm ${
                    highlightOperation === key ? 'bg-primary-500 text-white' : 'bg-dark-700 text-dark-300'
                  }`}
                >
                  {label}
                </button>
              ))}
            </div>
          </div>

          <div className="bg-dark-700 rounded-lg p-4 space-y-2 text-sm">
            <div className="text-dark-200">
              <span className="text-blue-400">A:</span> {'{' + setA.join(', ') + '}'}
            </div>
            <div className="text-dark-200">
              <span className="text-emerald-400">B:</span> {'{' + setB.join(', ') + '}'}
            </div>
            <div className="border-t border-dark-600 pt-2 text-dark-200">
              <span className="text-amber-400">A ∪ B:</span> {'{' + union.join(', ') + '}'} ({union.length})
            </div>
            <div className="text-dark-200">
              <span className="text-amber-400">A ∩ B:</span> {'{' + intersection.join(', ') + '}'} ({intersection.length})
            </div>
            <div className="text-dark-200">
              <span className="text-amber-400">A − B:</span> {'{' + differenceAB.join(', ') + '}'} ({differenceAB.length})
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
