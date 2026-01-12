import { useState, type ReactNode } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

interface ContentBlockProps {
  title: string;
  children: ReactNode;
  className?: string;
}

/**
 * Definition block - blue gradient, used for mathematical definitions
 */
export function Definition({ title, children, className = '' }: ContentBlockProps) {
  return (
    <div
      className={`my-6 p-6 rounded-2xl bg-gradient-to-br from-blue-500/10 to-blue-600/5 border border-blue-500/20 ${className}`}
    >
      <div className="flex items-start gap-3 mb-3">
        <div className="w-8 h-8 rounded-lg bg-blue-500/20 flex items-center justify-center flex-shrink-0">
          <svg
            className="w-4 h-4 text-blue-400"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253"
            />
          </svg>
        </div>
        <div>
          <span className="text-xs font-semibold text-blue-400 uppercase tracking-wider">
            Definition
          </span>
          <h3 className="text-lg font-semibold text-dark-100">{title}</h3>
        </div>
      </div>
      <div className="text-dark-300 pl-11">{children}</div>
    </div>
  );
}

interface TheoremProps extends ContentBlockProps {
  proof?: ReactNode;  // Optional - some theorems may omit formal proofs
}

/**
 * Theorem block - amber gradient, with collapsible proof
 */
export function Theorem({ title, children, proof, className = '' }: TheoremProps) {
  const [showProof, setShowProof] = useState(false);

  return (
    <div
      className={`my-6 p-6 rounded-2xl bg-gradient-to-br from-amber-500/10 to-amber-600/5 border border-amber-500/20 ${className}`}
    >
      <div className="flex items-start gap-3 mb-3">
        <div className="w-8 h-8 rounded-lg bg-amber-500/20 flex items-center justify-center flex-shrink-0">
          <svg
            className="w-4 h-4 text-amber-400"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z"
            />
          </svg>
        </div>
        <div>
          <span className="text-xs font-semibold text-amber-400 uppercase tracking-wider">
            Theorem
          </span>
          <h3 className="text-lg font-semibold text-dark-100">{title}</h3>
        </div>
      </div>
      <div className="text-dark-300 pl-11">{children}</div>

      {proof && (
        <div className="mt-4 pl-11">
          <button
            onClick={() => setShowProof(!showProof)}
            className="flex items-center gap-2 text-sm text-amber-400 hover:text-amber-300 transition-colors"
          >
            <svg
              className={`w-4 h-4 transition-transform ${showProof ? 'rotate-90' : ''}`}
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M9 5l7 7-7 7"
              />
            </svg>
            {showProof ? 'Hide Proof' : 'Show Proof'}
          </button>
          <AnimatePresence>
            {showProof && (
              <motion.div
                initial={{ height: 0, opacity: 0 }}
                animate={{ height: 'auto', opacity: 1 }}
                exit={{ height: 0, opacity: 0 }}
                className="overflow-hidden"
              >
                <div className="mt-4 p-4 rounded-xl bg-dark-800/50 border border-dark-700/50 text-dark-300">
                  <div className="text-xs font-semibold text-dark-500 uppercase tracking-wider mb-2">
                    Proof
                  </div>
                  {proof}
                  <div className="text-right mt-4 text-dark-500">∎</div>
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      )}
    </div>
  );
}

/**
 * Example block - emerald gradient, used for worked examples
 */
export function Example({ title, children, className = '' }: ContentBlockProps) {
  return (
    <div
      className={`my-6 p-6 rounded-2xl bg-gradient-to-br from-emerald-500/10 to-emerald-600/5 border border-emerald-500/20 ${className}`}
    >
      <div className="flex items-start gap-3 mb-3">
        <div className="w-8 h-8 rounded-lg bg-emerald-500/20 flex items-center justify-center flex-shrink-0">
          <svg
            className="w-4 h-4 text-emerald-400"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
            />
          </svg>
        </div>
        <div>
          <span className="text-xs font-semibold text-emerald-400 uppercase tracking-wider">
            Example
          </span>
          <h3 className="text-lg font-semibold text-dark-100">{title}</h3>
        </div>
      </div>
      <div className="text-dark-300 pl-11">{children}</div>
    </div>
  );
}

/**
 * Axiom block - purple gradient, used for fundamental axioms
 */
export function Axiom({ title, children, className = '' }: ContentBlockProps) {
  return (
    <div
      className={`my-6 p-6 rounded-2xl bg-gradient-to-br from-purple-500/10 to-purple-600/5 border border-purple-500/20 ${className}`}
    >
      <div className="flex items-start gap-3 mb-3">
        <div className="w-8 h-8 rounded-lg bg-purple-500/20 flex items-center justify-center flex-shrink-0">
          <svg
            className="w-4 h-4 text-purple-400"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M13 10V3L4 14h7v7l9-11h-7z"
            />
          </svg>
        </div>
        <div>
          <span className="text-xs font-semibold text-purple-400 uppercase tracking-wider">
            Axiom
          </span>
          <h3 className="text-lg font-semibold text-dark-100">{title}</h3>
        </div>
      </div>
      <div className="text-dark-300 pl-11">{children}</div>
    </div>
  );
}

interface AlgorithmProps extends ContentBlockProps {
  complexity?: { time: string; space: string };
  interactive?: ReactNode;
}

/**
 * Algorithm block - cyan gradient, used for ML algorithms with pseudocode
 * Optionally includes complexity analysis and interactive visualizer
 */
export function Algorithm({ title, children, complexity, interactive, className = '' }: AlgorithmProps) {
  const [showInteractive, setShowInteractive] = useState(false);

  return (
    <div
      className={`my-6 p-6 rounded-2xl bg-gradient-to-br from-cyan-500/10 to-cyan-600/5 border border-cyan-500/20 ${className}`}
    >
      <div className="flex items-start gap-3 mb-3">
        <div className="w-8 h-8 rounded-lg bg-cyan-500/20 flex items-center justify-center flex-shrink-0">
          <svg
            className="w-4 h-4 text-cyan-400"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4"
            />
          </svg>
        </div>
        <div className="flex-1">
          <span className="text-xs font-semibold text-cyan-400 uppercase tracking-wider">
            Algorithm
          </span>
          <h3 className="text-lg font-semibold text-dark-100">{title}</h3>
          {complexity && (
            <div className="flex gap-4 mt-1 text-xs text-dark-400">
              <span>Time: <code className="text-cyan-400">{complexity.time}</code></span>
              <span>Space: <code className="text-cyan-400">{complexity.space}</code></span>
            </div>
          )}
        </div>
      </div>
      <div className="text-dark-300 pl-11 font-mono text-sm">{children}</div>
      
      {interactive && (
        <div className="mt-4 pl-11">
          <button
            onClick={() => setShowInteractive(!showInteractive)}
            className="flex items-center gap-2 text-sm text-cyan-400 hover:text-cyan-300 transition-colors"
          >
            <svg
              className={`w-4 h-4 transition-transform ${showInteractive ? 'rotate-90' : ''}`}
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M9 5l7 7-7 7"
              />
            </svg>
            {showInteractive ? 'Hide Visualization' : 'Show Interactive Visualization'}
          </button>
          <AnimatePresence>
            {showInteractive && (
              <motion.div
                initial={{ height: 0, opacity: 0 }}
                animate={{ height: 'auto', opacity: 1 }}
                exit={{ height: 0, opacity: 0 }}
                className="overflow-hidden"
              >
                <div className="mt-4 p-4 rounded-xl bg-dark-800/50 border border-dark-700/50">
                  {interactive}
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      )}
    </div>
  );
}

interface RCodeBlockProps {
  title?: string;
  output?: string;
  collapsible?: boolean;
  className?: string;
  children: string;
}

/**
 * R Code block - slate/gray gradient, displays R code with syntax highlighting
 * Includes optional output display and copy functionality
 */
export function RCodeBlock({ title, output, collapsible = false, className = '', children }: RCodeBlockProps) {
  const [showCode, setShowCode] = useState(!collapsible);
  const [copied, setCopied] = useState(false);

  const handleCopy = async () => {
    await navigator.clipboard.writeText(children);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  // Simple R syntax highlighting
  const highlightR = (code: string) => {
    return code
      // Comments
      .replace(/(#.*)$/gm, '<span class="text-dark-500">$1</span>')
      // Strings
      .replace(/("[^"]*"|'[^']*')/g, '<span class="text-emerald-400">$1</span>')
      // Numbers
      .replace(/\b(\d+\.?\d*)\b/g, '<span class="text-amber-400">$1</span>')
      // Keywords
      .replace(/\b(function|if|else|for|while|repeat|break|next|return|TRUE|FALSE|NULL|NA|Inf|NaN|in)\b/g, '<span class="text-purple-400">$1</span>')
      // Function calls
      .replace(/\b([a-zA-Z_][a-zA-Z0-9_.]*)\s*\(/g, '<span class="text-blue-400">$1</span>(')
      // Assignment operators
      .replace(/(<-|->|=(?!=))/g, '<span class="text-rose-400">$1</span>')
      // Pipes
      .replace(/(%>%|%\+%|\|>)/g, '<span class="text-cyan-400">$1</span>');
  };

  return (
    <div
      className={`my-6 rounded-2xl bg-gradient-to-br from-slate-500/10 to-slate-600/5 border border-slate-500/20 overflow-hidden ${className}`}
    >
      <div className="flex items-center justify-between px-4 py-3 bg-slate-800/50 border-b border-slate-700/50">
        <div className="flex items-center gap-3">
          <div className="flex gap-1.5">
            <div className="w-3 h-3 rounded-full bg-red-500/80" />
            <div className="w-3 h-3 rounded-full bg-yellow-500/80" />
            <div className="w-3 h-3 rounded-full bg-green-500/80" />
          </div>
          <span className="text-xs font-semibold text-slate-400 uppercase tracking-wider">
            R {title && `- ${title}`}
          </span>
        </div>
        <div className="flex items-center gap-2">
          {collapsible && (
            <button
              onClick={() => setShowCode(!showCode)}
              className="text-xs text-slate-400 hover:text-slate-300 transition-colors"
            >
              {showCode ? 'Collapse' : 'Expand'}
            </button>
          )}
          <button
            onClick={handleCopy}
            className="text-xs text-slate-400 hover:text-slate-300 transition-colors flex items-center gap-1"
          >
            {copied ? (
              <>
                <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
                Copied!
              </>
            ) : (
              <>
                <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 16H6a2 2 0 01-2-2V6a2 2 0 012-2h8a2 2 0 012 2v2m-6 12h8a2 2 0 002-2v-8a2 2 0 00-2-2h-8a2 2 0 00-2 2v8a2 2 0 002 2z" />
                </svg>
                Copy
              </>
            )}
          </button>
        </div>
      </div>
      
      <AnimatePresence>
        {showCode && (
          <motion.div
            initial={collapsible ? { height: 0, opacity: 0 } : false}
            animate={{ height: 'auto', opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
          >
            <pre className="p-4 overflow-x-auto">
              <code 
                className="text-sm font-mono text-dark-200"
                dangerouslySetInnerHTML={{ __html: highlightR(children) }}
              />
            </pre>
          </motion.div>
        )}
      </AnimatePresence>
      
      {output && (
        <div className="px-4 py-3 bg-dark-900/50 border-t border-slate-700/50">
          <div className="text-xs font-semibold text-slate-500 uppercase tracking-wider mb-2">
            Output
          </div>
          <pre className="text-sm font-mono text-slate-300 whitespace-pre-wrap">
            {output}
          </pre>
        </div>
      )}
    </div>
  );
}
