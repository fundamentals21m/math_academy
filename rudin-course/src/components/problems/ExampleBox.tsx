import { useState } from 'react';
import { motion } from 'framer-motion';
import katex from 'katex';
import { SolutionPanel } from './SolutionPanel';

interface SolutionStep {
  title: string;
  content: string;
}

interface Solution {
  steps: SolutionStep[];
  conclusion?: string;
}

interface Example {
  id: string;
  type: 'example';
  title: string;
  statement: string;
  solution: Solution;
}

interface ExampleBoxProps {
  example: Example;
  isComplete: boolean;
  onToggleComplete: () => void;
  onSolutionView?: () => void;
}

function renderMath(text: string): string {
  let result = text;

  // Display math
  result = result.replace(/\\\[([\s\S]*?)\\\]|\$\$([\s\S]*?)\$\$/g, (_, p1, p2) => {
    const math = p1 || p2;
    try {
      return katex.renderToString(math.trim(), { displayMode: true, throwOnError: false });
    } catch {
      return `\\[${math}\\]`;
    }
  });

  // Inline math
  result = result.replace(/\\\(([\s\S]*?)\\\)|\$([^$]+?)\$/g, (_, p1, p2) => {
    const math = p1 || p2;
    try {
      return katex.renderToString(math.trim(), { displayMode: false, throwOnError: false });
    } catch {
      return `$${math}$`;
    }
  });

  result = result.replace(/\n/g, '<br>');
  return result;
}

export function ExampleBox({
  example,
  isComplete,
  onToggleComplete,
  onSolutionView,
}: ExampleBoxProps) {
  const [showSolution, setShowSolution] = useState(false);

  return (
    <motion.div
      id={`problem-${example.id}`}
      className={`
        rounded-xl border-2 p-5 transition-colors
        ${
          isComplete
            ? 'bg-amber-500/5 border-amber-500/30'
            : 'bg-gradient-to-br from-amber-500/5 to-orange-500/5 border-amber-500/20 hover:border-amber-500/40'
        }
      `}
      initial={{ opacity: 0, y: 10 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.3 }}
    >
      {/* Header */}
      <div className="flex items-start justify-between gap-4 mb-4">
        <div className="flex items-center gap-3">
          <span className="flex items-center justify-center w-8 h-8 rounded-lg bg-amber-500/20 text-amber-400">
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z"
              />
            </svg>
          </span>
          <div>
            <span className="text-xs font-medium text-amber-500 uppercase tracking-wider block">
              Example
            </span>
            <span className="text-sm font-semibold text-amber-300">{example.title}</span>
          </div>
        </div>
        <label className="flex items-center gap-2 cursor-pointer group">
          <span className="text-xs text-dark-400 group-hover:text-dark-300 transition-colors">
            {isComplete ? 'Reviewed' : 'Mark reviewed'}
          </span>
          <div className="relative">
            <input
              type="checkbox"
              checked={isComplete}
              onChange={onToggleComplete}
              className="sr-only peer"
            />
            <div
              className={`
                w-5 h-5 rounded border-2 flex items-center justify-center
                transition-all cursor-pointer
                ${
                  isComplete
                    ? 'bg-amber-500 border-amber-500 text-white'
                    : 'border-dark-600 peer-hover:border-dark-500'
                }
              `}
            >
              {isComplete && (
                <svg className="w-3 h-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={3}
                    d="M5 13l4 4L19 7"
                  />
                </svg>
              )}
            </div>
          </div>
        </label>
      </div>

      {/* Statement */}
      <div
        className="text-dark-200 leading-relaxed prose prose-invert prose-sm max-w-none"
        dangerouslySetInnerHTML={{ __html: renderMath(example.statement) }}
      />

      {/* Solution */}
      <SolutionPanel
        solution={example.solution}
        isExpanded={showSolution}
        onToggle={() => setShowSolution(!showSolution)}
        onView={onSolutionView}
      />
    </motion.div>
  );
}
