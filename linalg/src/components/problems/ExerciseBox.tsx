import { useState, useRef } from 'react';
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

interface Exercise {
  id: string;
  type: 'exercise';
  number: number;
  statement: string;
  solution: Solution;
}

interface ExerciseBoxProps {
  exercise: Exercise;
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

  // Handle pmatrix and other LaTeX
  const mathPatterns = [
    /\\begin\{pmatrix\}[\s\S]*?\\end\{pmatrix\}/g,
    /\\frac\{[^}]*\}\{[^}]*\}/g,
    /\\sqrt\{[^}]*\}/g,
  ];

  for (const pattern of mathPatterns) {
    result = result.replace(pattern, (match) => {
      try {
        return katex.renderToString(match, { displayMode: false, throwOnError: false });
      } catch {
        return match;
      }
    });
  }

  result = result.replace(/\n/g, '<br>');
  return result;
}

export function ExerciseBox({
  exercise,
  isComplete,
  onToggleComplete,
  onSolutionView,
}: ExerciseBoxProps) {
  const [showSolution, setShowSolution] = useState(false);
  const boxRef = useRef<HTMLDivElement>(null);

  return (
    <motion.div
      ref={boxRef}
      id={`problem-${exercise.id}`}
      className={`
        rounded-xl border-2 p-5 transition-colors
        ${
          isComplete
            ? 'bg-emerald-500/5 border-emerald-500/30'
            : 'bg-dark-900 border-dark-700 hover:border-dark-600'
        }
      `}
      initial={{ opacity: 0, y: 10 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.3 }}
    >
      {/* Header */}
      <div className="flex items-start justify-between gap-4 mb-4">
        <div className="flex items-center gap-3">
          <span className="flex items-center justify-center w-8 h-8 rounded-lg bg-dark-800 text-dark-300 text-sm font-bold">
            {exercise.number}
          </span>
          <span className="text-xs font-medium text-dark-500 uppercase tracking-wider">
            Exercise
          </span>
        </div>
        <label className="flex items-center gap-2 cursor-pointer group">
          <span className="text-xs text-dark-400 group-hover:text-dark-300 transition-colors">
            {isComplete ? 'Completed' : 'Mark complete'}
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
                    ? 'bg-emerald-500 border-emerald-500 text-white'
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
        dangerouslySetInnerHTML={{ __html: renderMath(exercise.statement) }}
      />

      {/* Solution */}
      <SolutionPanel
        solution={exercise.solution}
        isExpanded={showSolution}
        onToggle={() => setShowSolution(!showSolution)}
        onView={onSolutionView}
      />
    </motion.div>
  );
}
