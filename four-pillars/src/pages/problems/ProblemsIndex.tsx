import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { useProblemProgress } from '@/hooks/useProblemProgress';

// Import all problem data
import part01Data from '@/data/problems/part-01.json';
import part02Data from '@/data/problems/part-02.json';
import part03Data from '@/data/problems/part-03.json';
import part04Data from '@/data/problems/part-04.json';
import part05Data from '@/data/problems/part-05.json';
import part06Data from '@/data/problems/part-06.json';
import part07Data from '@/data/problems/part-07.json';
import part08Data from '@/data/problems/part-08.json';

const parts = [
  part01Data,
  part02Data,
  part03Data,
  part04Data,
  part05Data,
  part06Data,
  part07Data,
  part08Data,
];

function countProblems(part: typeof part01Data): number {
  return part.sections.reduce((total, section) => {
    return total + (section.examples?.length || 0) + (section.exercises?.length || 0);
  }, 0);
}

export default function ProblemsIndex() {
  const { completed } = useProblemProgress();

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
            Practice problems organized by chapter from Stillwell's "The Four Pillars of Geometry"
          </p>
        </motion.div>

        {/* Parts Grid */}
        <div className="grid gap-4">
          {parts.map((part, index) => {
            const problemCount = countProblems(part);
            const completedCount = part.sections.reduce((total, section) => {
              const sectionCompleted = [...(section.examples || []), ...(section.exercises || [])]
                .filter(p => completed.includes(p.id))
                .length;
              return total + sectionCompleted;
            }, 0);
            const progress = problemCount > 0 ? Math.round((completedCount / problemCount) * 100) : 0;

            return (
              <motion.div
                key={part.partId}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.05 }}
              >
                <Link
                  to={`/problems/${part.partId}`}
                  className="block p-4 rounded-xl bg-dark-900/50 border border-dark-800 hover:border-primary-500/50 hover:bg-dark-900 transition-all group"
                >
                  <div className="flex items-center gap-4">
                    <span className="flex items-center justify-center w-12 h-12 rounded-xl bg-primary-500/20 text-primary-400 text-xl font-bold group-hover:bg-primary-500/30 transition-colors">
                      {part.partId}
                    </span>
                    <div className="flex-1 min-w-0">
                      <h2 className="text-lg font-semibold text-dark-100 group-hover:text-primary-400 transition-colors">
                        {part.partTitle}
                      </h2>
                      <p className="text-sm text-dark-500">{part.textbookChapter}</p>
                    </div>
                    <div className="text-right">
                      <div className="text-sm font-medium text-dark-300">
                        {completedCount}/{problemCount}
                      </div>
                      <div className="w-20 h-2 bg-dark-800 rounded-full mt-1 overflow-hidden">
                        <div
                          className="h-full bg-primary-500 rounded-full transition-all"
                          style={{ width: `${progress}%` }}
                        />
                      </div>
                    </div>
                  </div>
                </Link>
              </motion.div>
            );
          })}
        </div>

        {/* Summary */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.4 }}
          className="mt-8 p-4 rounded-xl bg-dark-900/30 border border-dark-800"
        >
          <div className="text-center text-dark-400">
            <span className="text-2xl font-bold text-primary-400">
              {completed.length}
            </span>
            <span className="mx-2">/</span>
            <span className="text-2xl font-bold text-dark-300">
              {parts.reduce((total, part) => total + countProblems(part), 0)}
            </span>
            <span className="ml-2">problems completed</span>
          </div>
        </motion.div>
      </div>
    </div>
  );
}
