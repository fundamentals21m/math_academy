import { LessonLayout } from '../../components/layout/LessonLayout';
import { Callout } from '../../components/common/Callout';
import { SectionQuiz } from '../../components/quiz';
import { section60Questions } from '../../data/quizzes';

export default function Section60() {
  return (
    <LessonLayout sectionId={60}>
      <h2 className="text-2xl font-semibold mb-4">More about Gödel's Theorems</h2>

      <p className="text-dark-200 mb-6 text-lg leading-relaxed">
        Consequences and generalizations.
      </p>

      <Callout type="info">
        <p>
          This section is under development. Content will be added from
          "The Heritage of Thales" by W.S. Anglin and J. Lambek.
        </p>
      </Callout>

      {/* Section content will be added here */}

      {/* Section Quiz */}
      <SectionQuiz sectionId={60} questions={section60Questions} />
    </LessonLayout>
  );
}
