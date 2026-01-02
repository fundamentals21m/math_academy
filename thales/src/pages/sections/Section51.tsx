import { LessonLayout } from '../../components/layout/LessonLayout';
import { Callout } from '../../components/common/Callout';
import { SectionQuiz } from '../../components/quiz';
import { section51Questions } from '../../data/quizzes';

export default function Section51() {
  return (
    <LessonLayout sectionId={51}>
      <h2 className="text-2xl font-semibold mb-4">Hilbert's Tenth Problem</h2>

      <p className="text-dark-200 mb-6 text-lg leading-relaxed">
        The undecidability of Diophantine equations.
      </p>

      <Callout type="info">
        <p>
          This section is under development. Content will be added from
          "The Heritage of Thales" by W.S. Anglin and J. Lambek.
        </p>
      </Callout>

      {/* Section content will be added here */}

      {/* Section Quiz */}
      <SectionQuiz sectionId={51} questions={section51Questions} />
    </LessonLayout>
  );
}
