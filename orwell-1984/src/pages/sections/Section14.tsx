import { LessonLayout } from '@/components/layout/LessonLayout';
import { Callout } from '@/components/common/Callout';
import { PowerStructure } from '@/components/visualizations';

export default function Section14() {
  return (
    <LessonLayout sectionId={14}>
      <h2>Part Two, Chapter 7: The Proles Will Rise</h2>

      <p>
        Winston wakes from a dream with his mother's name on his lips. He writes in
        his diary about the proles and the future, articulating his deepest hopes
        and fears.
      </p>

      <h3>The Dream of His Mother</h3>

      <p>
        Winston dreams of his mother sinking into dark water, holding his baby sister.
        The dream brings back fragmented memories of his childhood—memories that fill
        him with guilt and grief.
      </p>

      <div className="bg-dark-800 p-4 rounded-lg my-4 border-l-4 border-rose-500">
        <p className="font-semibold text-rose-400">Key Quote</p>
        <p className="mt-2 italic text-dark-300">
          "Tragedy, he perceived, belonged to the ancient time, to a time when there
          was still privacy, love, and friendship, and when the members of a family
          stood by one another without needing to know the reason."
        </p>
      </div>

      <h3>Private Loyalty</h3>

      <p>
        His mother, Winston realizes, died loving him—and that kind of private,
        unquestioning loyalty is what the Party has destroyed. In the proles, this
        loyalty still survives.
      </p>

      <Callout type="info">
        <strong>The Proles' Humanity:</strong> Winston watches the singing prole woman
        hanging laundry. Despite her hard life, she retains something the Party
        members have lost: genuine human feeling, expressed without fear or calculation.
      </Callout>

      <h3>To the Future</h3>

      <p>
        Winston writes in his diary a message to the future, expressing his belief
        that humanity will eventually free itself:
      </p>

      <div className="bg-dark-800/50 rounded-xl p-6 border border-rose-500/20 text-center my-6">
        <p className="text-lg italic text-rose-400">
          "To the future or to the past, to a time when thought is free... From the
          age of uniformity, from the age of solitude, from the age of Big Brother,
          from the age of doublethink—greetings!"
        </p>
      </div>

      <h3>Themes Developed</h3>

      <ul className="list-disc list-inside space-y-2 my-4 text-dark-300">
        <li><strong className="text-rose-400">Memory and Guilt:</strong> Winston's unresolved feelings about his family</li>
        <li><strong className="text-rose-400">Human Nature:</strong> The survival of genuine emotion in the proles</li>
        <li><strong className="text-rose-400">Hope for the Future:</strong> Winston's faith that humanity will endure</li>
      </ul>

      <h3>Interactive: Power Structure of Oceania</h3>
      <p className="mb-4">
        Explore the social hierarchy and government structure of Oceania—the Inner Party,
        Outer Party, and proles.
      </p>
      <PowerStructure />
    </LessonLayout>
  );
}
