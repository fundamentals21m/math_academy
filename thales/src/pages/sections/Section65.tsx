import { LessonLayout } from '../../components/layout/LessonLayout';
import { Callout } from '../../components/common/Callout';
import { SectionQuiz } from '../../components/quiz';
import { section65Questions } from '../../data/quizzes';

export default function Section65() {
  return (
    <LessonLayout sectionId={65}>
      <h2 className="text-2xl font-semibold mb-4">A Natural Transformation between Vector Spaces</h2>

      <p className="text-dark-200 mb-6 text-lg leading-relaxed">
        A concrete example of naturality.
      </p>

      <Callout type="info">
        <p>
          This section is under development. Content will be added from
          "The Heritage of Thales" by W.S. Anglin and J. Lambek.
        </p>
      </Callout>

      {/* Section content will be added here */}

      {/* Section Quiz */}
      <SectionQuiz sectionId={65} questions={section65Questions} />
    </LessonLayout>
  );
}
