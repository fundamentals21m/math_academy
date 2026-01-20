import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { useProblemProgress } from '@/hooks/useProblemProgress';
import { ProblemSet } from '@/components/problems';
import problemData from '@/data/problems/part-02.json';

export default function ProblemsPart02() {
  const { completed, toggleComplete, markSolutionViewed } = useProblemProgress();

  return (
    <div className="min-h-screen bg-dark-950 py-8 px-4 sm:px-6 lg:px-8">
      <div className="max-w-4xl mx-auto">
        {/* Breadcrumb */}
        <motion.div
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          className="mb-6"
        >
          <Link
            to="/problems"
            className="inline-flex items-center gap-2 text-dark-400 hover:text-primary-400 transition-colors"
          >
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
            </svg>
            Back to Problem Sets
          </Link>
        </motion.div>

        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          className="mb-8"
        >
          <div className="flex items-center gap-3 mb-2">
            <span className="flex items-center justify-center w-10 h-10 rounded-xl bg-primary-500/20 text-primary-400 text-lg font-bold">
              {problemData.partId}
            </span>
            <div>
              <h1 className="text-2xl font-bold text-dark-100">{problemData.partTitle}</h1>
              <p className="text-sm text-dark-500">{problemData.textbookChapter}</p>
            </div>
          </div>
          <p className="text-dark-400 mt-2">
            Exercises covering finite and countable sets, metric spaces, compact sets, perfect sets,
            and connected sets in the context of point-set topology.
          </p>
        </motion.div>

        {/* Problem Set */}
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1 }}
        >
          <ProblemSet
            sections={problemData.sections}
            completedIds={completed}
            onToggleComplete={toggleComplete}
            onSolutionView={markSolutionViewed}
          />
        </motion.div>
      </div>
    </div>
  );
}
