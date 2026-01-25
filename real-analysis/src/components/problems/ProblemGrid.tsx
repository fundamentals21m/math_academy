import { motion } from 'framer-motion';

interface ProblemGridProps {
  problemIds: string[];
  completedIds: Set<string>;
  onProblemClick?: (problemId: string) => void;
  columns?: number;
}

export function ProblemGrid({
  problemIds,
  completedIds,
  onProblemClick,
  columns = 10,
}: ProblemGridProps) {
  return (
    <div
      className="grid gap-1.5"
      style={{ gridTemplateColumns: `repeat(${columns}, minmax(0, 1fr))` }}
    >
      {problemIds.map((id, index) => {
        const isComplete = completedIds.has(id);
        return (
          <motion.button
            key={id}
            onClick={() => onProblemClick?.(id)}
            className={`
              aspect-square rounded-md text-xs font-medium
              flex items-center justify-center
              transition-colors cursor-pointer
              ${
                isComplete
                  ? 'bg-emerald-500/20 text-emerald-400 border border-emerald-500/30 hover:bg-emerald-500/30'
                  : 'bg-dark-800 text-dark-400 border border-dark-700 hover:bg-dark-700 hover:text-dark-200'
              }
            `}
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.95 }}
            title={`Problem ${index + 1}${isComplete ? ' (Complete)' : ''}`}
          >
            {index + 1}
          </motion.button>
        );
      })}
    </div>
  );
}
