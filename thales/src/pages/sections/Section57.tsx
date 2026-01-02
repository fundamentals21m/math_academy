import { LessonLayout } from '../../components/layout/LessonLayout';
import { Callout } from '../../components/common/Callout';
import { SectionQuiz } from '../../components/quiz';
import { section57Questions } from '../../data/quizzes';

export default function Section57() {
  return (
    <LessonLayout sectionId={57}>
      <h2 className="text-2xl font-semibold mb-4">Intuitionistic Type Theory</h2>

      <p className="text-dark-200 mb-6 text-lg leading-relaxed">
        Martin-Löf type theory and constructive mathematics.
      </p>

      <Callout type="info">
        <p>
          This section is under development. Content will be added from
          "The Heritage of Thales" by W.S. Anglin and J. Lambek.
        </p>
      </Callout>

      {/* Section content will be added here */}

      {/* Section Quiz */}
      <SectionQuiz sectionId={57} questions={section57Questions} />
    </LessonLayout>
  );
}
