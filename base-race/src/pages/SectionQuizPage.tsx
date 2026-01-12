import { useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import { SectionQuiz } from '@/components/quiz/SectionQuiz';
import { getQuizQuestions } from '@/data/quizzes/quizMap';
import { getSectionById, getPartBySectionId } from '@/data/curriculum';
import { FEATURES } from '@/config';
import { useGamification } from '@/contexts/GamificationContext';

export default function SectionQuizPage() {
  const { id } = useParams<{ id: string }>();
  const sectionId = parseInt(id || '0', 10);
  const questions = getQuizQuestions(sectionId);
  const section = getSectionById(sectionId);
  const part = getPartBySectionId(sectionId);

  const gamificationContext = useGamification();
  const gamification = FEATURES.gamification ? gamificationContext : null;

  useEffect(() => {
    if (gamification) {
      gamification.visitSection(sectionId);
    }
  }, [sectionId, gamification]);

  if (!questions || questions.length === 0) {
    return (
      <div className="min-h-screen relative">
        {/* Background decoration */}
        <div className="fixed inset-0 pointer-events-none overflow-hidden">
          <div className="absolute top-0 right-0 w-[800px] h-[800px] bg-primary-500/[0.02] rounded-full blur-[150px] -translate-y-1/2 translate-x-1/2" />
          <div className="absolute bottom-0 left-0 w-[600px] h-[600px] bg-cyan-500/[0.02] rounded-full blur-[120px] translate-y-1/2 -translate-x-1/2" />
        </div>

        <div className="max-w-4xl mx-auto px-6 py-12 text-center">
          <div className="mb-8">
            <div className="inline-flex items-center gap-2 px-4 py-1.5 text-sm font-semibold bg-gradient-to-r from-dark-700/50 to-dark-800/30 text-dark-400 rounded-full border border-dark-700/50 mb-4">
              <span className="w-2 h-2 rounded-full bg-dark-500" />
              No Quiz Available
            </div>
            <h1 className="text-3xl font-bold text-dark-100 mb-4">
              Quiz Not Found
            </h1>
            <p className="text-dark-400 text-lg mb-8">
              There is no quiz available for this section yet.
            </p>
          </div>
          <Link
            to={`/section/${sectionId}`}
            className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-primary-500/10 text-primary-400 hover:bg-primary-500/20 transition-colors font-medium"
          >
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
            </svg>
            Return to Section
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen relative">
      {/* Background decoration */}
      <div className="fixed inset-0 pointer-events-none overflow-hidden">
        <div className="absolute top-0 right-0 w-[800px] h-[800px] bg-amber-500/[0.02] rounded-full blur-[150px] -translate-y-1/2 translate-x-1/2" />
        <div className="absolute bottom-0 left-0 w-[600px] h-[600px] bg-primary-500/[0.02] rounded-full blur-[120px] translate-y-1/2 -translate-x-1/2" />
      </div>

      {/* Breadcrumb */}
      <div className="relative py-4 px-6 border-b border-dark-800/50 bg-dark-950/50 backdrop-blur-sm">
        <nav className="max-w-4xl mx-auto flex items-center gap-2 text-sm">
          <Link to="/" className="text-dark-500 hover:text-dark-300 transition-colors flex items-center gap-1">
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" />
            </svg>
            Home
          </Link>
          <svg className="w-4 h-4 text-dark-700" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
          </svg>
          <Link to={`/section/${sectionId}`} className="text-dark-500 hover:text-dark-300 transition-colors">
            Section {sectionId}
          </Link>
          <svg className="w-4 h-4 text-dark-700" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
          </svg>
          <span className="text-amber-400 font-medium">Quiz</span>
        </nav>
      </div>

      <div className="max-w-4xl mx-auto px-6 py-12">
        {/* Header */}
        <header className="mb-10">
          <div className="flex flex-wrap items-center gap-3 mb-6">
            <span className="inline-flex items-center gap-2 px-4 py-1.5 text-sm font-semibold bg-gradient-to-r from-amber-500/20 to-amber-600/10 text-amber-400 rounded-full border border-amber-500/20">
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-6 9l2 2 4-4" />
              </svg>
              Section Quiz
            </span>
            {part && (
              <span className="text-dark-500 text-sm">
                Part {part.id}: {part.title}
              </span>
            )}
          </div>

          <h1 className="text-3xl md:text-4xl font-bold mb-4">
            <span className="text-gradient">{section?.title}</span>
          </h1>

          <p className="text-dark-400 text-lg">
            Test your understanding of this section with {questions.length} question{questions.length !== 1 ? 's' : ''}.
          </p>

          {/* Decorative line */}
          <div className="mt-8 flex items-center gap-4">
            <div className="h-px flex-1 bg-gradient-to-r from-transparent via-dark-700 to-transparent" />
            <div className="flex gap-1">
              <span className="w-1.5 h-1.5 rounded-full bg-amber-500/50" />
              <span className="w-1.5 h-1.5 rounded-full bg-amber-500/30" />
              <span className="w-1.5 h-1.5 rounded-full bg-amber-500/10" />
            </div>
            <div className="h-px flex-1 bg-gradient-to-r from-transparent via-dark-700 to-transparent" />
          </div>
        </header>

        {/* Quiz Component */}
        <SectionQuiz sectionId={sectionId} questions={questions} />

        {/* Back to section link */}
        <div className="mt-12 pt-8 border-t border-dark-800/50">
          <Link
            to={`/section/${sectionId}`}
            className="inline-flex items-center gap-2 text-dark-400 hover:text-dark-200 transition-colors"
          >
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
            </svg>
            Back to Section {sectionId}
          </Link>
        </div>
      </div>
    </div>
  );
}
