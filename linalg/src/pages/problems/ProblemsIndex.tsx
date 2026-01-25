import { useState } from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { useProblemProgress } from '@/hooks/useProblemProgress';

// Import problem data for each part
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
import part12Data from '@/data/problems/part-12.json';

// Map of problem data by part ID
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
  12: part12Data,
};

// Count problems in a part
function countProblemsInPart(data: typeof part01Data | null): { examples: number; exercises: number } {
  if (!data) return { examples: 0, exercises: 0 };
  let examples = 0;
  let exercises = 0;
  for (const section of data.sections) {
    examples += section.examples?.length || 0;
    exercises += section.exercises?.length || 0;
  }
  return { examples, exercises };
}

// Parts data for the index
const parts = Object.entries(problemDataByPart)
  .filter(([, data]) => data !== null)
  .map(([partId, data]) => ({
    id: Number(partId),
    title: data!.partTitle,
    chapter: data!.textbookChapter,
    ...countProblemsInPart(data),
  }));

export default function ProblemsIndex() {
  const { completed } = useProblemProgress();
  const [hoveredPart, setHoveredPart] = useState<number | null>(null);

  // Calculate completion for a part
  const getPartCompletion = (partId: number) => {
    const data = problemDataByPart[partId];
    if (!data) return { completed: 0, total: 0 };

    let total = 0;
    let completedCount = 0;

    for (const section of data.sections) {
      const exerciseIds = section.exercises?.map(e => e.id) || [];
      total += exerciseIds.length;
      completedCount += exerciseIds.filter(id => completed.includes(id)).length;
    }

    return { completed: completedCount, total };
  };

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
            Practice problems organized by chapter from Strang's Introduction to Linear Algebra.
          </p>
        </motion.div>

        {/* Overall Progress */}
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1 }}
          className="mb-8 p-4 rounded-xl bg-dark-900/50 border border-dark-800"
        >
          <div className="flex items-center justify-between mb-2">
            <span className="text-dark-300">Overall Progress</span>
            <span className="text-primary-400 font-medium">
              {completed.length} completed
            </span>
          </div>
          <div className="h-2 bg-dark-800 rounded-full overflow-hidden">
            <div
              className="h-full bg-gradient-to-r from-primary-600 to-primary-400 transition-all"
              style={{
                width: `${Math.min(100, (completed.length / 150) * 100)}%`,
              }}
            />
          </div>
        </motion.div>

        {/* Parts Grid */}
        <div className="grid gap-4">
          {parts.map((part, index) => {
            const completion = getPartCompletion(part.id);
            const progressPercent = completion.total > 0
              ? (completion.completed / completion.total) * 100
              : 0;

            return (
              <motion.div
                key={part.id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.1 + index * 0.03 }}
              >
                <Link
                  to={`/problems/${part.id}`}
                  className="block p-5 rounded-xl bg-dark-900/50 border border-dark-800 hover:border-primary-500/50 hover:bg-dark-900 transition-all group"
                  onMouseEnter={() => setHoveredPart(part.id)}
                  onMouseLeave={() => setHoveredPart(null)}
                >
                  <div className="flex items-start justify-between mb-3">
                    <div className="flex items-center gap-3">
                      <span className="flex items-center justify-center w-10 h-10 rounded-xl bg-primary-500/20 text-primary-400 text-lg font-bold group-hover:bg-primary-500/30 transition-colors">
                        {part.id}
                      </span>
                      <div>
                        <h3 className="text-lg font-semibold text-dark-100 group-hover:text-primary-400 transition-colors">
                          {part.title}
                        </h3>
                        <p className="text-sm text-dark-500">{part.chapter}</p>
                      </div>
                    </div>
                    <div className="text-right text-sm">
                      <div className="text-dark-400">
                        {part.examples} examples
                      </div>
                      <div className="text-dark-400">
                        {part.exercises} exercises
                      </div>
                    </div>
                  </div>

                  {/* Progress bar */}
                  <div className="h-1.5 bg-dark-800 rounded-full overflow-hidden">
                    <motion.div
                      className="h-full bg-gradient-to-r from-primary-600 to-primary-400"
                      initial={{ width: 0 }}
                      animate={{
                        width: hoveredPart === part.id || progressPercent > 0
                          ? `${progressPercent}%`
                          : '0%',
                      }}
                      transition={{ duration: 0.3 }}
                    />
                  </div>
                  {completion.total > 0 && (
                    <div className="mt-2 text-xs text-dark-500">
                      {completion.completed} / {completion.total} exercises completed
                    </div>
                  )}
                </Link>
              </motion.div>
            );
          })}
        </div>
      </div>
    </div>
  );
}
