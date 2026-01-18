import { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import katex from 'katex';

interface SolutionStep {
  title: string;
  content: string;
}

interface Solution {
  steps: SolutionStep[];
  conclusion?: string;
}

interface SolutionPanelProps {
  solution: Solution;
  isExpanded: boolean;
  onToggle: () => void;
  onView?: () => void;
}

function renderMath(text: string): string {
  // Replace LaTeX delimiters with rendered KaTeX
  let result = text;

  // Display math: \[ ... \] or $$ ... $$
  result = result.replace(/\\\[([\s\S]*?)\\\]|\$\$([\s\S]*?)\$\$/g, (_, p1, p2) => {
    const math = p1 || p2;
    try {
      return katex.renderToString(math.trim(), { displayMode: true, throwOnError: false });
    } catch {
      return `\\[${math}\\]`;
    }
  });

  // Inline math: \( ... \) or $ ... $ (but not $$)
  result = result.replace(/\\\(([\s\S]*?)\\\)|\$([^$]+?)\$/g, (_, p1, p2) => {
    const math = p1 || p2;
    try {
      return katex.renderToString(math.trim(), { displayMode: false, throwOnError: false });
    } catch {
      return `$${math}$`;
    }
  });

  // Handle common LaTeX commands that appear directly in text
  const mathPatterns = [
    /\\begin\{pmatrix\}[\s\S]*?\\end\{pmatrix\}/g,
    /\\frac\{[^}]*\}\{[^}]*\}/g,
    /\\sqrt\{[^}]*\}/g,
    /[a-zA-Z]_\{[^}]*\}/g,
    /[a-zA-Z]\^[0-9a-zA-Z]/g,
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

  // Convert newlines to <br> for display
  result = result.replace(/\n/g, '<br>');

  return result;
}

export function SolutionPanel({ solution, isExpanded, onToggle, onView }: SolutionPanelProps) {
  const [hasBeenViewed, setHasBeenViewed] = useState(false);
  const contentRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (isExpanded && !hasBeenViewed) {
      setHasBeenViewed(true);
      onView?.();
    }
  }, [isExpanded, hasBeenViewed, onView]);

  return (
    <div className="mt-4">
      <button
        onClick={onToggle}
        className={`
          w-full flex items-center justify-between px-4 py-3 rounded-lg
          text-left font-medium transition-colors
          ${
            isExpanded
              ? 'bg-primary-500/10 text-primary-400'
              : 'bg-dark-800 text-dark-300 hover:bg-dark-700 hover:text-dark-100'
          }
        `}
      >
        <span className="flex items-center gap-2">
          <svg
            className={`w-4 h-4 transition-transform ${isExpanded ? 'rotate-90' : ''}`}
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
          </svg>
          {isExpanded ? 'Hide Solution' : 'Show Solution'}
        </span>
        {hasBeenViewed && !isExpanded && (
          <span className="text-xs text-dark-500">(viewed)</span>
        )}
      </button>

      <AnimatePresence>
        {isExpanded && (
          <motion.div
            ref={contentRef}
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: 'auto', opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3, ease: 'easeInOut' }}
            className="overflow-hidden"
          >
            <div className="pt-4 space-y-4">
              {solution.steps.map((step, index) => (
                <div key={index} className="pl-4 border-l-2 border-primary-500/30">
                  <h4 className="text-sm font-semibold text-primary-400 mb-2">
                    {step.title}
                  </h4>
                  <div
                    className="text-dark-300 text-sm leading-relaxed prose prose-invert prose-sm max-w-none"
                    dangerouslySetInnerHTML={{ __html: renderMath(step.content) }}
                  />
                </div>
              ))}

              {solution.conclusion && (
                <div className="mt-4 p-4 bg-emerald-500/10 border border-emerald-500/30 rounded-lg">
                  <h4 className="text-sm font-semibold text-emerald-400 mb-2">Conclusion</h4>
                  <div
                    className="text-emerald-300/90 text-sm"
                    dangerouslySetInnerHTML={{ __html: renderMath(solution.conclusion) }}
                  />
                </div>
              )}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
