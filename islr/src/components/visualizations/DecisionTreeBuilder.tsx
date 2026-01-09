import { useState } from 'react';

interface TreeNode {
  id: string;
  splitFeature?: string;
  splitValue?: number;
  prediction?: string;
  left?: TreeNode;
  right?: TreeNode;
  samples: number;
  impurity: number;
}

/**
 * DecisionTreeBuilder Visualizer
 * 
 * Interactive visualization showing how decision trees make splits.
 * Users can:
 * - See the tree structure
 * - Understand split criteria (Gini, Entropy)
 * - Watch how data flows through the tree
 */
export function DecisionTreeBuilder() {
  const [criterion, setCriterion] = useState<'gini' | 'entropy'>('gini');
  const [maxDepth, setMaxDepth] = useState(2);

  // Sample tree structure
  const tree: TreeNode = {
    id: 'root',
    splitFeature: 'Income',
    splitValue: 50000,
    samples: 100,
    impurity: 0.48,
    left: {
      id: 'l1',
      splitFeature: 'Age',
      splitValue: 35,
      samples: 40,
      impurity: 0.32,
      left: {
        id: 'l1l',
        prediction: 'No',
        samples: 25,
        impurity: 0.0,
      },
      right: {
        id: 'l1r',
        prediction: 'Yes',
        samples: 15,
        impurity: 0.12,
      },
    },
    right: {
      id: 'r1',
      splitFeature: 'Education',
      splitValue: 16,
      samples: 60,
      impurity: 0.28,
      left: {
        id: 'r1l',
        prediction: 'Yes',
        samples: 35,
        impurity: 0.08,
      },
      right: {
        id: 'r1r',
        prediction: 'Yes',
        samples: 25,
        impurity: 0.0,
      },
    },
  };

  const renderNode = (node: TreeNode, x: number, y: number, level: number, parentX?: number, parentY?: number) => {
    const nodeWidth = 90;
    const nodeHeight = 50;
    const verticalGap = 70;
    const horizontalSpread = 140 / (level + 1);

    const isLeaf = !node.left && !node.right;
    const bgColor = isLeaf 
      ? (node.prediction === 'Yes' ? '#10b981' : '#ef4444')
      : '#3b82f6';

    return (
      <g key={node.id}>
        {/* Connection line from parent */}
        {parentX !== undefined && parentY !== undefined && (
          <line
            x1={parentX}
            y1={parentY + nodeHeight / 2}
            x2={x}
            y2={y - nodeHeight / 2}
            stroke="#4b5563"
            strokeWidth={2}
          />
        )}

        {/* Node rectangle */}
        <rect
          x={x - nodeWidth / 2}
          y={y - nodeHeight / 2}
          width={nodeWidth}
          height={nodeHeight}
          rx={8}
          fill={bgColor}
          opacity={0.9}
        />

        {/* Node content */}
        {isLeaf ? (
          <>
            <text
              x={x}
              y={y - 8}
              textAnchor="middle"
              fill="#fff"
              fontSize={12}
              fontWeight="bold"
            >
              {node.prediction}
            </text>
            <text
              x={x}
              y={y + 10}
              textAnchor="middle"
              fill="#fff"
              fontSize={9}
              opacity={0.8}
            >
              n={node.samples}
            </text>
          </>
        ) : (
          <>
            <text
              x={x}
              y={y - 10}
              textAnchor="middle"
              fill="#fff"
              fontSize={10}
              fontWeight="bold"
            >
              {node.splitFeature}
            </text>
            <text
              x={x}
              y={y + 4}
              textAnchor="middle"
              fill="#fff"
              fontSize={9}
            >
              {'<'} {node.splitValue?.toLocaleString()}
            </text>
            <text
              x={x}
              y={y + 16}
              textAnchor="middle"
              fill="#fff"
              fontSize={8}
              opacity={0.7}
            >
              {criterion}={node.impurity.toFixed(2)}
            </text>
          </>
        )}

        {/* Render children */}
        {node.left && renderNode(
          node.left,
          x - horizontalSpread,
          y + verticalGap,
          level + 1,
          x,
          y
        )}
        {node.right && renderNode(
          node.right,
          x + horizontalSpread,
          y + verticalGap,
          level + 1,
          x,
          y
        )}
      </g>
    );
  };

  return (
    <div className="p-6 bg-dark-800/50 rounded-xl">
      <h3 className="text-lg font-semibold text-dark-100 mb-4">
        Decision Tree Structure
      </h3>
      
      <div className="flex gap-4 mb-4">
        <div>
          <label className="block text-xs text-dark-400 mb-1">Criterion</label>
          <select
            value={criterion}
            onChange={(e) => setCriterion(e.target.value as 'gini' | 'entropy')}
            className="px-2 py-1 text-sm bg-dark-700 text-dark-200 rounded border border-dark-600"
          >
            <option value="gini">Gini Index</option>
            <option value="entropy">Entropy</option>
          </select>
        </div>
        <div>
          <label className="block text-xs text-dark-400 mb-1">Max Depth</label>
          <select
            value={maxDepth}
            onChange={(e) => setMaxDepth(Number(e.target.value))}
            className="px-2 py-1 text-sm bg-dark-700 text-dark-200 rounded border border-dark-600"
          >
            <option value={1}>1</option>
            <option value={2}>2</option>
            <option value={3}>3</option>
          </select>
        </div>
      </div>

      <svg
        width={340}
        height={220}
        className="bg-dark-900 rounded-lg"
      >
        {renderNode(tree, 170, 40, 0)}
      </svg>

      <div className="mt-4 flex gap-4 text-xs">
        <div className="flex items-center gap-2">
          <div className="w-3 h-3 rounded bg-blue-500" />
          <span className="text-dark-400">Split Node</span>
        </div>
        <div className="flex items-center gap-2">
          <div className="w-3 h-3 rounded bg-emerald-500" />
          <span className="text-dark-400">Leaf (Yes)</span>
        </div>
        <div className="flex items-center gap-2">
          <div className="w-3 h-3 rounded bg-red-500" />
          <span className="text-dark-400">Leaf (No)</span>
        </div>
      </div>

      <p className="mt-3 text-xs text-dark-500">
        The tree recursively splits data to minimize impurity (Gini or Entropy) at each node.
      </p>
    </div>
  );
}

export default DecisionTreeBuilder;
