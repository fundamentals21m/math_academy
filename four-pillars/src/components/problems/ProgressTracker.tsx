import { motion } from 'framer-motion';

interface ProgressTrackerProps {
  completed: number;
  total: number;
  label?: string;
}

export function ProgressTracker({ completed, total, label = 'Progress' }: ProgressTrackerProps) {
  const percentage = total > 0 ? Math.round((completed / total) * 100) : 0;

  return (
    <div className="bg-dark-900 rounded-xl p-4 border border-dark-800">
      <div className="flex items-center justify-between mb-2">
        <span className="text-sm font-medium text-dark-300">{label}</span>
        <span className="text-sm font-bold text-dark-100">
          {completed}/{total} ({percentage}%)
        </span>
      </div>
      <div className="h-3 bg-dark-800 rounded-full overflow-hidden">
        <motion.div
          className="h-full bg-gradient-to-r from-emerald-500 to-emerald-400 rounded-full"
          initial={{ width: 0 }}
          animate={{ width: `${percentage}%` }}
          transition={{ duration: 0.5, ease: 'easeOut' }}
        />
      </div>
      {percentage === 100 && (
        <motion.div
          initial={{ opacity: 0, y: 5 }}
          animate={{ opacity: 1, y: 0 }}
          className="mt-2 text-center text-emerald-400 text-sm font-medium"
        >
          Section Complete!
        </motion.div>
      )}
    </div>
  );
}
