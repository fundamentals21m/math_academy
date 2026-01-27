import { LessonLayout } from '@/components/layout/LessonLayout';
import { Callout } from '@/components/common/Callout';

export default function Section19() {
  return (
    <LessonLayout sectionId={19}>
      <h2>Part Three, Chapter 2: O'Brien's Interrogation</h2>

      <p>
        <strong>O'Brien</strong> appears—not as Winston's secret ally, but as his
        torturer. The man Winston trusted with his life now oversees his systematic
        destruction.
      </p>

      <h3>The Truth Revealed</h3>

      <p>
        O'Brien was never part of the Brotherhood. He helped write Goldstein's Book.
        The entire conspiracy was a trap, designed to identify and capture
        thought-criminals like Winston.
      </p>

      <div className="bg-dark-800 p-4 rounded-lg my-4 border-l-4 border-rose-500">
        <p className="font-semibold text-rose-400">Key Quote</p>
        <p className="mt-2 italic text-dark-300">
          "They got me a long time ago," said O'Brien with a mild, almost regretful
          irony.
        </p>
      </div>

      <h3>The Interrogation</h3>

      <p>
        O'Brien subjects Winston to days (or weeks—time becomes meaningless) of
        interrogation, combining psychological manipulation with electric shock
        torture. The goal is not to extract information but to change Winston's mind.
      </p>

      <ul className="list-disc list-inside space-y-2 my-4 text-dark-300">
        <li>Winston must learn to believe the Party's version of reality</li>
        <li>He must accept that he has always been wrong</li>
        <li>He must love Big Brother</li>
        <li>The torture continues until he genuinely believes</li>
      </ul>

      <h3>Reality Control</h3>

      <p>
        O'Brien holds up four fingers and asks how many Winston sees. When Winston
        says "four," he is shocked until he says "five." But O'Brien is not satisfied
        with a false answer—Winston must truly see five fingers.
      </p>

      <div className="bg-dark-800/50 rounded-xl p-6 border border-rose-500/20 text-center my-6">
        <p className="text-2xl font-bold text-rose-400">
          "How many fingers, Winston?"
        </p>
        <p className="text-xl italic text-dark-400 mt-2">
          "Four! Five! Four! Anything you like. Only stop it, stop the pain!"
        </p>
      </div>

      <Callout type="danger">
        <strong>2+2=5:</strong> This becomes the novel's most famous image of
        totalitarian control: the Party demands not just obedience but genuine
        belief. Winston must learn to see what the Party tells him to see.
      </Callout>

      <h3>Themes Developed</h3>

      <ul className="list-disc list-inside space-y-2 my-4 text-dark-300">
        <li><strong className="text-rose-400">Betrayal:</strong> O'Brien as Winston's destroyer rather than savior</li>
        <li><strong className="text-rose-400">Reality and Truth:</strong> The Party's power over objective fact</li>
        <li><strong className="text-rose-400">Torture and Belief:</strong> Pain as tool for changing minds</li>
      </ul>
    </LessonLayout>
  );
}
