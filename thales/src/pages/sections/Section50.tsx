import { LessonLayout } from '../../components/layout/LessonLayout';
import { Callout } from '../../components/common/Callout';
import { SectionQuiz } from '../../components/quiz';
import { section50Questions } from '../../data/quizzes';

export default function Section50() {
  return (
    <LessonLayout sectionId={50}>
      <h2 className="text-2xl font-semibold mb-4">Recursive and Recursively Enumerable Sets</h2>

      <p className="text-dark-200 mb-6 text-lg leading-relaxed">
        Decidable and semi-decidable problems.
      </p>

      <Callout type="info">
        <p>
          This section is under development. Content will be added from
          "The Heritage of Thales" by W.S. Anglin and J. Lambek.
        </p>
      </Callout>

      {/* Section content will be added here */}

      {/* Section Quiz */}
      <SectionQuiz sectionId={50} questions={section50Questions} />
    </LessonLayout>
  );
}
