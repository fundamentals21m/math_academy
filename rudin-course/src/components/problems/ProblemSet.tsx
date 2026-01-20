import { useState, useMemo, useCallback, useRef } from 'react';
import { ProgressTracker } from './ProgressTracker';
import { ProblemGrid } from './ProblemGrid';
import { ExerciseBox } from './ExerciseBox';
import { ExampleBox } from './ExampleBox';

interface SolutionStep {
  title: string;
  content: string;
}

interface Solution {
  steps: SolutionStep[];
  conclusion?: string;
}

interface Example {
  id: string;
  type: 'example';
  title: string;
  statement: string;
  solution: Solution;
}

interface Exercise {
  id: string;
  type: 'exercise';
  number: number;
  statement: string;
  solution: Solution;
}

interface Section {
  sectionId: number;
  sectionTitle: string;
  textbookSection: string;
  examples: Example[];
  exercises: Exercise[];
}

interface ProblemSetProps {
  sections: Section[];
  completedIds: Set<string>;
  onToggleComplete: (problemId: string) => void;
  onSolutionView?: (problemId: string) => void;
}

type FilterType = 'all' | 'examples' | 'exercises' | 'incomplete' | 'complete';

export function ProblemSet({
  sections,
  completedIds,
  onToggleComplete,
  onSolutionView,
}: ProblemSetProps) {
  const [activeSection, setActiveSection] = useState<number | 'all'>('all');
  const [filterType, setFilterType] = useState<FilterType>('all');
  const problemRefs = useRef<Map<string, HTMLElement>>(new Map());

  // Get all problem IDs for stats
  const allProblemIds = useMemo(() => {
    return sections.flatMap((section) => [
      ...section.examples.map((e) => e.id),
      ...section.exercises.map((e) => e.id),
    ]);
  }, [sections]);

  // Filter sections based on active section
  const filteredSections = useMemo(() => {
    if (activeSection === 'all') return sections;
    return sections.filter((s) => s.sectionId === activeSection);
  }, [sections, activeSection]);

  // Apply content type filter
  const filteredContent = useMemo(() => {
    return filteredSections.map((section) => {
      let examples = section.examples;
      let exercises = section.exercises;

      if (filterType === 'examples') {
        exercises = [];
      } else if (filterType === 'exercises') {
        examples = [];
      } else if (filterType === 'incomplete') {
        examples = examples.filter((e) => !completedIds.has(e.id));
        exercises = exercises.filter((e) => !completedIds.has(e.id));
      } else if (filterType === 'complete') {
        examples = examples.filter((e) => completedIds.has(e.id));
        exercises = exercises.filter((e) => completedIds.has(e.id));
      }

      return { ...section, examples, exercises };
    });
  }, [filteredSections, filterType, completedIds]);

  // Calculate stats
  const stats = useMemo(() => {
    const completed = allProblemIds.filter((id) => completedIds.has(id)).length;
    return {
      completed,
      total: allProblemIds.length,
      percentage: allProblemIds.length > 0 ? Math.round((completed / allProblemIds.length) * 100) : 0,
    };
  }, [allProblemIds, completedIds]);

  const scrollToProblem = useCallback((problemId: string) => {
    const element = document.getElementById(`problem-${problemId}`);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'center' });
      element.classList.add('ring-2', 'ring-primary-500');
      setTimeout(() => {
        element.classList.remove('ring-2', 'ring-primary-500');
      }, 2000);
    }
  }, []);

  return (
    <div className="space-y-6">
      {/* Progress and Grid */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        <div className="lg:col-span-1">
          <ProgressTracker completed={stats.completed} total={stats.total} />
        </div>
        <div className="lg:col-span-2 bg-dark-900 rounded-xl p-4 border border-dark-800">
          <h3 className="text-sm font-medium text-dark-400 mb-3">Completion Grid</h3>
          <ProblemGrid
            problemIds={allProblemIds}
            completedIds={completedIds}
            onProblemClick={scrollToProblem}
            columns={Math.min(15, Math.ceil(Math.sqrt(allProblemIds.length * 1.5)))}
          />
        </div>
      </div>

      {/* Section Tabs */}
      <div className="flex flex-wrap gap-2">
        <button
          onClick={() => setActiveSection('all')}
          className={`px-4 py-2 rounded-lg text-sm font-medium transition-colors ${
            activeSection === 'all'
              ? 'bg-primary-500 text-white'
              : 'bg-dark-800 text-dark-300 hover:bg-dark-700'
          }`}
        >
          All Sections
        </button>
        {sections.map((section) => (
          <button
            key={section.sectionId}
            onClick={() => setActiveSection(section.sectionId)}
            className={`px-4 py-2 rounded-lg text-sm font-medium transition-colors ${
              activeSection === section.sectionId
                ? 'bg-primary-500 text-white'
                : 'bg-dark-800 text-dark-300 hover:bg-dark-700'
            }`}
          >
            {section.textbookSection}
          </button>
        ))}
      </div>

      {/* Filter Buttons */}
      <div className="flex flex-wrap gap-2 pb-2 border-b border-dark-800">
        {[
          { value: 'all', label: 'All' },
          { value: 'examples', label: 'Examples' },
          { value: 'exercises', label: 'Exercises' },
          { value: 'incomplete', label: 'Incomplete' },
          { value: 'complete', label: 'Complete' },
        ].map(({ value, label }) => (
          <button
            key={value}
            onClick={() => setFilterType(value as FilterType)}
            className={`px-3 py-1.5 rounded-md text-xs font-medium transition-colors ${
              filterType === value
                ? 'bg-dark-700 text-dark-100'
                : 'text-dark-400 hover:text-dark-200 hover:bg-dark-800'
            }`}
          >
            {label}
          </button>
        ))}
      </div>

      {/* Problems */}
      <div className="space-y-8">
        {filteredContent.map((section) => (
          <div key={section.sectionId}>
            {activeSection === 'all' && (
              <div className="mb-4 pb-2 border-b border-dark-800">
                <h2 className="text-lg font-semibold text-dark-100">
                  {section.textbookSection}: {section.sectionTitle}
                </h2>
              </div>
            )}

            {/* Examples */}
            {section.examples.length > 0 && (
              <div className="space-y-4 mb-6">
                {section.examples.map((example) => (
                  <ExampleBox
                    key={example.id}
                    example={example}
                    isComplete={completedIds.has(example.id)}
                    onToggleComplete={() => onToggleComplete(example.id)}
                    onSolutionView={() => onSolutionView?.(example.id)}
                  />
                ))}
              </div>
            )}

            {/* Exercises */}
            {section.exercises.length > 0 && (
              <div className="space-y-4">
                {section.exercises.map((exercise) => (
                  <ExerciseBox
                    key={exercise.id}
                    exercise={exercise}
                    isComplete={completedIds.has(exercise.id)}
                    onToggleComplete={() => onToggleComplete(exercise.id)}
                    onSolutionView={() => onSolutionView?.(exercise.id)}
                  />
                ))}
              </div>
            )}

            {section.examples.length === 0 && section.exercises.length === 0 && (
              <div className="text-center py-8 text-dark-500">
                No problems match the current filter.
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
}
