import { LessonLayout } from '../../components/layout/LessonLayout';
import { Callout } from '../../components/common/Callout';
import { SectionQuiz } from '../../components/quiz';
import { section58Questions } from '../../data/quizzes';

export default function Section58() {
  return (
    <LessonLayout sectionId={58}>
      <h2 className="text-2xl font-semibold mb-4">Gödel's Theorems</h2>

      <p className="text-dark-200 mb-6 text-lg leading-relaxed">
        The incompleteness theorems and their significance.
      </p>

      <Callout type="info">
        <p>
          This section is under development. Content will be added from
          "The Heritage of Thales" by W.S. Anglin and J. Lambek.
        </p>
      </Callout>

      {/* Section content will be added here */}

      {/* Section Quiz */}
      <SectionQuiz sectionId={58} questions={section58Questions} />
    </LessonLayout>
  );
}
