import { useState, useMemo } from 'react';
import { motion } from 'framer-motion';
import { FEATURES } from '@/config';
import { useGamification } from '@/contexts/GamificationContext';
import { renderContent } from '@shared/gamification';
import type { QuizQuestion, QuestionType, Difficulty } from '@shared/gamification';

// Re-export types for convenience
export type { QuizQuestion, QuestionType } from '@shared/gamification';

/**
 * Quiz data structure with questions organized by difficulty
 */
export interface DifficultyQuizData {
  easy: QuizQuestion[];
  medium: QuizQuestion[];
  hard: QuizQuestion[];
}

interface SectionQuizProps {
  sectionId: number;
  questions: DifficultyQuizData;
  title?: string;
  /** If true, only shows hard difficulty (for chapter quizzes) */
  hardOnly?: boolean;
}

const QUESTIONS_PER_ATTEMPT = 5;

/**
 * Shuffle array using Fisher-Yates algorithm
 */
function shuffleArray<T>(array: T[]): T[] {
  const arr = [...array];
  for (let i = arr.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [arr[i], arr[j]] = [arr[j], arr[i]];
  }
  return arr;
}

export function SectionQuiz({ 
  sectionId, 
  questions, 
  title = 'Section Quiz',
  hardOnly = false 
}: SectionQuizProps) {
  // Always call hook unconditionally, then conditionally use the result
  const gamificationContext = useGamification();
  const gamification = FEATURES.gamification ? gamificationContext : null;
  
  // Quiz state
  const [selectedDifficulty, setSelectedDifficulty] = useState<Difficulty | null>(hardOnly ? 'hard' : null);
  const [attemptKey, setAttemptKey] = useState(0); // Used to trigger re-randomization
  const [currentIndex, setCurrentIndex] = useState(0);
  const [selectedAnswer, setSelectedAnswer] = useState<number | null>(null);
  const [numericAnswer, setNumericAnswer] = useState<number | null>(null);
  const [textAnswer, setTextAnswer] = useState('');
  const [showResult, setShowResult] = useState(false);
  const [answers, setAnswers] = useState<boolean[]>([]);
  const [isComplete, setIsComplete] = useState(false);
  const [numericError, setNumericError] = useState('');

  // Get questions for selected difficulty, randomize and take 5
  const shuffledQuestions = useMemo(() => {
    if (!selectedDifficulty) return [];
    const pool = questions[selectedDifficulty] || [];
    return shuffleArray(pool).slice(0, QUESTIONS_PER_ATTEMPT);
  }, [questions, selectedDifficulty, attemptKey]);

  const currentQuestion = shuffledQuestions[currentIndex];
  const totalQuestions = shuffledQuestions.length;
  const questionType: QuestionType = currentQuestion?.type ?? 'multiple-choice';

  const handleSelectDifficulty = (difficulty: Difficulty) => {
    setSelectedDifficulty(difficulty);
    setAttemptKey((k) => k + 1); // Trigger new randomization
    resetQuizState();
  };

  const resetQuizState = () => {
    setCurrentIndex(0);
    setSelectedAnswer(null);
    setNumericAnswer(null);
    setTextAnswer('');
    setShowResult(false);
    setAnswers([]);
    setIsComplete(false);
    setNumericError('');
  };

  const handleMultipleChoiceAnswer = (answerIndex: number) => {
    if (selectedAnswer !== null || !currentQuestion) return;

    setSelectedAnswer(answerIndex);
    const isCorrect = answerIndex === currentQuestion.correctIndex;

    setAnswers((prev) => [...prev, isCorrect]);
    setShowResult(true);
  };

  const handleNumericAnswer = () => {
    if (numericAnswer === null || !currentQuestion) {
      setNumericError('Please enter a number');
      return;
    }

    const { min, max } = currentQuestion.numericRange ?? {};
    
    // Check range validation
    if (min !== undefined && numericAnswer < min) {
      setNumericError(`Answer must be at least ${min}`);
      return;
    }
    
    if (max !== undefined && numericAnswer > max) {
      setNumericError(`Answer must be at most ${max}`);
      return;
    }

    setNumericError('');
    const isCorrect = numericAnswer === currentQuestion.correctAnswer;

    setAnswers((prev) => [...prev, isCorrect]);
    setShowResult(true);
  };

  const handleTextAnswer = () => {
    if (!currentQuestion) return;
    const trimmedAnswer = textAnswer.trim();
    
    if (trimmedAnswer === '') {
      return;
    }

    const isCorrect = trimmedAnswer.toLowerCase() === currentQuestion.correctAnswer?.toString().toLowerCase();

    setAnswers((prev) => [...prev, isCorrect]);
    setShowResult(true);
  };

  const handleNext = () => {
    if (currentIndex < totalQuestions - 1) {
      setCurrentIndex((prev) => prev + 1);
      setSelectedAnswer(null);
      setNumericAnswer(null);
      setTextAnswer('');
      setShowResult(false);
      setNumericError('');
    } else {
      // Quiz complete
      setIsComplete(true);

      if (gamification && currentQuestion && selectedDifficulty) {
        // Use answers array for accurate count (avoids React state batching issues with score)
        const answeredCorrectly = answers.filter(Boolean).length;
        const lastAnswerCorrect = showResult && (
          (questionType === 'multiple-choice' && selectedAnswer === currentQuestion.correctIndex) ||
          (questionType === 'numeric' && numericAnswer === currentQuestion.correctAnswer) ||
          (questionType === 'text' && textAnswer.toLowerCase() === currentQuestion.correctAnswer?.toString().toLowerCase())
        );
        const finalScore = answeredCorrectly + (lastAnswerCorrect ? 1 : 0);
        const finalPercentage = Math.min(100, Math.round((finalScore / totalQuestions) * 100));
        
        gamification.recordQuiz(
          sectionId,
          selectedDifficulty,
          finalPercentage,
          finalScore,
          totalQuestions
        );
      }
    }
  };

  const handleRetry = () => {
    setAttemptKey((k) => k + 1); // Trigger new randomization
    resetQuizState();
  };

  const handleChangeDifficulty = () => {
    setSelectedDifficulty(null);
    resetQuizState();
  };

  // Difficulty selector screen (only shown if not hardOnly)
  if (!selectedDifficulty) {
    return (
      <div className="mt-12 p-6 rounded-2xl bg-dark-800/50 border border-dark-700/50">
        <div className="text-center">
          <h3 className="text-2xl font-bold text-dark-100 mb-2">{title}</h3>
          <p className="text-dark-400 mb-8">
            Select a difficulty level to begin. Each attempt will give you {QUESTIONS_PER_ATTEMPT} random questions.
          </p>
          
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <button
              onClick={() => handleSelectDifficulty('easy')}
              className="w-full sm:w-auto px-8 py-4 rounded-xl bg-emerald-500/20 border border-emerald-500/50 text-emerald-300 font-medium hover:bg-emerald-500/30 transition-colors"
            >
              <div className="text-lg font-semibold">Easy</div>
              <div className="text-sm opacity-75">{questions.easy?.length || 0} questions</div>
            </button>
            
            <button
              onClick={() => handleSelectDifficulty('medium')}
              className="w-full sm:w-auto px-8 py-4 rounded-xl bg-amber-500/20 border border-amber-500/50 text-amber-300 font-medium hover:bg-amber-500/30 transition-colors"
            >
              <div className="text-lg font-semibold">Medium</div>
              <div className="text-sm opacity-75">{questions.medium?.length || 0} questions</div>
            </button>
            
            <button
              onClick={() => handleSelectDifficulty('hard')}
              className="w-full sm:w-auto px-8 py-4 rounded-xl bg-red-500/20 border border-red-500/50 text-red-300 font-medium hover:bg-red-500/30 transition-colors"
            >
              <div className="text-lg font-semibold">Hard</div>
              <div className="text-sm opacity-75">{questions.hard?.length || 0} questions</div>
            </button>
          </div>
        </div>
      </div>
    );
  }

  // Quiz complete screen
  if (isComplete) {
    const finalScore = answers.filter(Boolean).length;
    const percentage = Math.round((finalScore / totalQuestions) * 100);

    return (
      <div className="mt-12 p-6 rounded-2xl bg-dark-800/50 border border-dark-700/50">
        <div className="text-center">
          <div className="text-6xl mb-4">
            {percentage >= 80 ? '🎉' : percentage >= 60 ? '👍' : '📚'}
          </div>
          <h3 className="text-2xl font-bold text-dark-100 mb-2">Quiz Complete!</h3>
          <p className="text-dark-400 mb-2">
            You scored {finalScore} out of {totalQuestions} ({percentage}%)
          </p>
          <p className="text-sm text-dark-500 mb-6">
            Difficulty: <span className={`font-medium ${
              selectedDifficulty === 'easy' ? 'text-emerald-400' :
              selectedDifficulty === 'medium' ? 'text-amber-400' : 'text-red-400'
            }`}>
              {selectedDifficulty.charAt(0).toUpperCase() + selectedDifficulty.slice(1)}
            </span>
          </p>
          <div className="flex items-center justify-center gap-2 mb-6">
            {answers.map((correct, i) => (
              <div
                key={i}
                className={`w-3 h-3 rounded-full ${
                  correct ? 'bg-emerald-500' : 'bg-red-500'
                }`}
              />
            ))}
          </div>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-3">
            <button
              onClick={handleRetry}
              className="w-full sm:w-auto px-6 py-3 rounded-xl bg-primary-500 hover:bg-primary-600 text-white font-medium transition-colors"
            >
              Try Again
            </button>
            {!hardOnly && (
              <button
                onClick={handleChangeDifficulty}
                className="w-full sm:w-auto px-6 py-3 rounded-xl bg-dark-700 hover:bg-dark-600 text-dark-200 font-medium transition-colors"
              >
                Change Difficulty
              </button>
            )}
          </div>
        </div>
      </div>
    );
  }

  // No questions available
  if (!currentQuestion) {
    return (
      <div className="mt-12 p-6 rounded-2xl bg-dark-800/50 border border-dark-700/50">
        <div className="text-center">
          <p className="text-dark-400">No questions available for this difficulty level.</p>
          {!hardOnly && (
            <button
              onClick={handleChangeDifficulty}
              className="mt-4 px-6 py-3 rounded-xl bg-primary-500 hover:bg-primary-600 text-white font-medium transition-colors"
            >
              Select Different Difficulty
            </button>
          )}
        </div>
      </div>
    );
  }

  // Active quiz screen
  return (
    <div className="mt-12 p-6 rounded-2xl bg-dark-800/50 border border-dark-700/50">
      {/* Header */}
      <div className="flex items-center justify-between mb-6">
        <h3 className="text-xl font-semibold text-dark-100">{title}</h3>
        <span className="text-sm text-dark-400">
          Question {currentIndex + 1} of {totalQuestions}
        </span>
      </div>

      {/* Progress */}
      <div className="h-1 bg-dark-700 rounded-full mb-6 overflow-hidden">
        <motion.div
          className="h-full bg-primary-500"
          initial={{ width: 0 }}
          animate={{ width: `${((currentIndex + 1) / totalQuestions) * 100}%` }}
        />
      </div>

      {/* Difficulty badge */}
      <div className="mb-4">
        <span
          className={`inline-block px-3 py-1 rounded-full text-xs font-medium ${
            selectedDifficulty === 'easy'
              ? 'bg-emerald-500/20 text-emerald-400'
              : selectedDifficulty === 'medium'
              ? 'bg-amber-500/20 text-amber-400'
              : 'bg-red-500/20 text-red-400'
          }`}
        >
          {selectedDifficulty.charAt(0).toUpperCase() + selectedDifficulty.slice(1)}
        </span>
      </div>

      {/* Question */}
      <p className="text-lg text-dark-200 mb-6">
        <span dangerouslySetInnerHTML={{ __html: renderContent(currentQuestion.question) }} />
      </p>

      {/* Multiple-choice options */}
      {questionType === 'multiple-choice' && currentQuestion.options && (
        <div className="space-y-3 mb-6">
          {currentQuestion.options.map((option, index) => {
            const isSelected = selectedAnswer === index;
            const isCorrect = index === currentQuestion.correctIndex;
            const showCorrect = showResult && isCorrect;
            const showIncorrect = showResult && isSelected && !isCorrect;

            return (
              <button
                key={index}
                onClick={() => handleMultipleChoiceAnswer(index)}
                disabled={showResult}
                className={`w-full p-4 rounded-xl text-left transition-all ${
                  showCorrect
                    ? 'bg-emerald-500/20 border-emerald-500/50 text-emerald-300'
                    : showIncorrect
                    ? 'bg-red-500/20 border-red-500/50 text-red-300'
                    : isSelected
                    ? 'bg-primary-500/20 border-primary-500/50 text-primary-300'
                    : 'bg-dark-700/50 border-dark-600/50 text-dark-200 hover:bg-dark-700 hover:border-dark-500'
                } border`}
              >
                <div className="flex items-center gap-3">
                  <span className="w-6 h-6 rounded-full bg-dark-600 flex items-center justify-center text-sm font-medium">
                    {String.fromCharCode(65 + index)}
                  </span>
                  <span dangerouslySetInnerHTML={{ __html: renderContent(option) }} />
                </div>
              </button>
            );
          })}
        </div>
      )}

      {/* Numeric input */}
      {questionType === 'numeric' && (
        <div className="space-y-4 mb-6">
          <input
            type="number"
            step={currentQuestion.numericRange?.precision ? 1 / Math.pow(10, currentQuestion.numericRange.precision) : 1}
            min={currentQuestion.numericRange?.min}
            max={currentQuestion.numericRange?.max}
            value={numericAnswer ?? ''}
            onChange={(e) => setNumericAnswer(parseFloat(e.target.value) || null)}
            disabled={showResult}
            className="w-full px-4 py-3 rounded-xl bg-dark-800 border border-dark-700 text-dark-100 placeholder-dark-500 focus:outline-none focus:border-primary-500 transition-colors"
            placeholder="Enter your answer..."
          />
          {numericError && (
            <p className="text-red-400 text-sm">{numericError}</p>
          )}
          <button
            onClick={handleNumericAnswer}
            disabled={showResult || numericAnswer === null}
            className="w-full py-3 rounded-xl bg-primary-500 hover:bg-primary-600 text-white font-medium transition-colors disabled:bg-dark-600 disabled:cursor-not-allowed"
          >
            Check Answer
          </button>
        </div>
      )}

      {/* Text input */}
      {questionType === 'text' && (
        <div className="space-y-4 mb-6">
          <input
            type="text"
            value={textAnswer}
            onChange={(e) => setTextAnswer(e.target.value)}
            disabled={showResult}
            className="w-full px-4 py-3 rounded-xl bg-dark-800 border border-dark-700 text-dark-100 placeholder-dark-500 focus:outline-none focus:border-primary-500 transition-colors"
            placeholder="Type your answer..."
          />
          <button
            onClick={handleTextAnswer}
            disabled={showResult || !textAnswer.trim()}
            className="w-full py-3 rounded-xl bg-primary-500 hover:bg-primary-600 text-white font-medium transition-colors disabled:bg-dark-600 disabled:cursor-not-allowed"
          >
            Check Answer
          </button>
        </div>
      )}

      {/* Explanation */}
      {showResult && currentQuestion.explanation && (
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          className="p-4 rounded-xl bg-dark-700/50 border border-dark-600/50 mb-6"
        >
          <p className="text-sm text-dark-300">
            <span className="font-medium text-dark-200">Explanation: </span>
            <span dangerouslySetInnerHTML={{ __html: renderContent(currentQuestion.explanation) }} />
          </p>
        </motion.div>
      )}

      {/* Next button */}
      {showResult && (
        <motion.button
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          onClick={handleNext}
          className="w-full py-3 rounded-xl bg-primary-500 hover:bg-primary-600 text-white font-medium transition-colors"
        >
          {currentIndex < totalQuestions - 1 ? 'Next Question' : 'See Results'}
        </motion.button>
      )}
    </div>
  );
}
