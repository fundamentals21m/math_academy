import { useMemo } from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { useProblemProgress } from '@/hooks/useProblemProgress';
import { curriculum } from '@/data/curriculum';

// Import problem data
import part01Data from '@/data/problems/part-01.json';
import part02Data from '@/data/problems/part-02.json';
import part03Data from '@/data/problems/part-03.json';
import part04Data from '@/data/problems/part-04.json';
import part05Data from '@/data/problems/part-05.json';
import part06Data from '@/data/problems/part-06.json';
import part07Data from '@/data/problems/part-07.json';
import part08Data from '@/data/problems/part-08.json';
import part09Data from '@/data/problems/part-09.json';
import part10Data from '@/data/problems/part-10.json';
import part11Data from '@/data/problems/part-11.json';

// Map curriculum part IDs to problem data
const problemDataByPart: Record<number, typeof part01Data | null> = {
  1: part01Data,
  2: part02Data,
  3: part03Data,
  4: part04Data,
  5: part05Data,
  6: part06Data,
  7: part07Data,
  8: part08Data,
  9: part09Data,
  10: part10Data,
  11: part11Data,
};

export default function ProblemsIndex() {
  const { completed, getCompletionStats } = useProblemProgress();

  // Calculate stats for each part
  const partStats = useMemo(() => {
    return curriculum.map((part) => {
      const data = problemDataByPart[part.id];
      if (!data) {
        return {
          partId: part.id,
          title: part.title,
          available: false,
          stats: { completed: 0, total: 0, percentage: 0 },
        };
      }

      const allIds = data.sections.flatMap((s) => [
        ...s.examples.map((e) => e.id),
        ...s.exercises.map((e) => e.id),
      ]);

      return {
        partId: part.id,
        title: part.title,
        available: true,
        stats: getCompletionStats(allIds),
      };
    });
  }, [completed, getCompletionStats]);

  // Overall stats
  const overallStats = useMemo(() => {
    const allIds = Object.values(problemDataByPart)
      .filter((data): data is typeof part01Data => data !== null)
      .flatMap((data) =>
        data.sections.flatMap((s) => [
          ...s.examples.map((e) => e.id),
          ...s.exercises.map((e) => e.id),
        ])
      );
    return getCompletionStats(allIds);
  }, [completed, getCompletionStats]);

  return (
    <div className="min-h-screen bg-dark-950 py-8 px-4 sm:px-6 lg:px-8">
      <div className="max-w-4xl mx-auto">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          className="mb-8"
        >
          <h1 className="text-3xl font-bold text-dark-100 mb-2">Problem Sets</h1>
          <p className="text-dark-400">
            Exercises from Rudin's Principles of Mathematical Analysis (Baby Rudin)
          </p>
        </motion.div>

        {/* Overall Progress */}
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1 }}
          className="bg-dark-900 rounded-xl p-6 border border-dark-800 mb-8"
        >
          <div className="flex items-center justify-between mb-4">
            <h2 className="text-lg font-semibold text-dark-200">Overall Progress</h2>
            <span className="text-2xl font-bold text-primary-400">
              {overallStats.percentage}%
            </span>
          </div>
          <div className="h-4 bg-dark-800 rounded-full overflow-hidden">
            <motion.div
              className="h-full bg-gradient-to-r from-primary-500 to-primary-400 rounded-full"
              initial={{ width: 0 }}
              animate={{ width: `${overallStats.percentage}%` }}
              transition={{ duration: 0.8, ease: 'easeOut' }}
            />
          </div>
          <div className="mt-2 text-sm text-dark-400">
            {overallStats.completed} of {overallStats.total} problems completed
          </div>
        </motion.div>

        {/* Part Cards */}
        <div className="grid gap-4">
          {partStats.map((part, index) => (
            <motion.div
              key={part.partId}
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 + index * 0.05 }}
            >
              {part.available ? (
                <Link
                  to={`/problems/${part.partId}`}
                  className="block bg-dark-900 rounded-xl p-5 border border-dark-800 hover:border-dark-600 transition-colors group"
                >
                  <div className="flex items-start justify-between gap-4">
                    <div className="flex-1">
                      <div className="flex items-center gap-3 mb-2">
                        <span className="flex items-center justify-center w-8 h-8 rounded-lg bg-primary-500/20 text-primary-400 text-sm font-bold">
                          {part.partId}
                        </span>
                        <h3 className="text-lg font-semibold text-dark-100 group-hover:text-primary-400 transition-colors">
                          {part.title}
                        </h3>
                      </div>
                      <div className="ml-11">
                        <div className="h-2 bg-dark-800 rounded-full overflow-hidden w-48">
                          <div
                            className="h-full bg-gradient-to-r from-emerald-500 to-emerald-400 rounded-full transition-all duration-500"
                            style={{ width: `${part.stats.percentage}%` }}
                          />
                        </div>
                        <span className="text-xs text-dark-500 mt-1 block">
                          {part.stats.completed}/{part.stats.total} complete ({part.stats.percentage}%)
                        </span>
                      </div>
                    </div>
                    <svg
                      className="w-5 h-5 text-dark-500 group-hover:text-primary-400 transition-colors"
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
                  </div>
                </Link>
              ) : (
                <div className="bg-dark-900/50 rounded-xl p-5 border border-dark-800/50 opacity-60">
                  <div className="flex items-center gap-3">
                    <span className="flex items-center justify-center w-8 h-8 rounded-lg bg-dark-800 text-dark-500 text-sm font-bold">
                      {part.partId}
                    </span>
                    <div>
                      <h3 className="text-lg font-semibold text-dark-400">{part.title}</h3>
                      <span className="text-xs text-dark-600">Coming soon</span>
                    </div>
                  </div>
                </div>
              )}
            </motion.div>
          ))}
        </div>

        {/* Info Card */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.5 }}
          className="mt-8 p-4 bg-dark-900/50 rounded-lg border border-dark-800"
        >
          <h3 className="text-sm font-semibold text-dark-300 mb-2">How to use</h3>
          <ul className="text-sm text-dark-400 space-y-1">
            <li>
              <span className="text-amber-400">Examples</span> are worked problems demonstrating key techniques
            </li>
            <li>
              <span className="text-emerald-400">Exercises</span> are end-of-chapter problems with complete solutions
            </li>
            <li>Click <strong>Show Solution</strong> to reveal step-by-step solutions</li>
            <li>Mark problems as complete to track your progress</li>
          </ul>
        </motion.div>
      </div>
    </div>
  );
}
