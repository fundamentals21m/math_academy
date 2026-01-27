import { LessonLayout } from '@/components/layout/LessonLayout';
import { Callout } from '@/components/common/Callout';
import { Definition } from '@/components/common/ContentBlocks';

export default function Section22() {
  return (
    <LessonLayout sectionId={22}>
      <h2>Part Three, Chapter 5: Room 101</h2>

      <p>
        Winston is taken to <strong>Room 101</strong>—the room that every prisoner
        fears, the place where the Party uses each person's deepest terror against
        them. Here Winston will make his final, ultimate betrayal.
      </p>

      <h3>The Worst Thing in the World</h3>

      <Definition title="Room 101">
        <p>
          The final stage of re-education. Room 101 contains "the worst thing in the
          world"—different for each person. It is the one thing that no human can
          endure. Faced with it, anyone will betray anyone.
        </p>
      </Definition>

      <div className="bg-dark-800 p-4 rounded-lg my-4 border-l-4 border-rose-500">
        <p className="font-semibold text-rose-400">Key Quote</p>
        <p className="mt-2 italic text-dark-300">
          "The thing that is in Room 101 is the worst thing in the world... It
          varies from individual to individual. It may be burial alive, or death by
          fire, or by drowning, or by impalement... In your case, the worst thing
          in the world happens to be rats."
        </p>
      </div>

      <h3>Winston's Terror</h3>

      <p>
        O'Brien brings out a wire cage containing two starving rats. The cage has
        a mask-like attachment that can be fitted over a prisoner's face. When
        released, the rats will eat their way through the victim.
      </p>

      <p>
        Winston has always feared rats with a deep, irrational terror. He cannot
        face this. He cannot endure it.
      </p>

      <h3>The Betrayal</h3>

      <p>
        As O'Brien positions the cage against Winston's face, Winston screams the
        only thing that can save him—the only thing he has left to give:
      </p>

      <div className="bg-dark-800/50 rounded-xl p-6 border border-rose-500/20 text-center my-6">
        <p className="text-2xl font-bold text-rose-400">
          "Do it to Julia! Do it to Julia! Not me! Julia!"
        </p>
      </div>

      <Callout type="danger">
        <strong>The Ultimate Betrayal:</strong> This is what the Party wanted.
        Not a forced confession but a genuine betrayal—Winston truly wishing his
        suffering on the woman he loved. His soul has been broken at its core.
      </Callout>

      <h3>Victory Over Self</h3>

      <p>
        The cage is removed. Winston has passed the final test. He has betrayed
        Julia not just in words but in his heart. The Party has won.
      </p>

      <ul className="list-disc list-inside space-y-2 my-4 text-dark-300">
        <li>Winston wished his suffering on Julia</li>
        <li>He meant it with his whole being</li>
        <li>His last private loyalty has been destroyed</li>
        <li>The Party now controls every part of him</li>
      </ul>

      <h3>Themes Developed</h3>

      <ul className="list-disc list-inside space-y-2 my-4 text-dark-300">
        <li><strong className="text-rose-400">Ultimate Betrayal:</strong> The destruction of love itself</li>
        <li><strong className="text-rose-400">Human Limits:</strong> Everyone has a breaking point</li>
        <li><strong className="text-rose-400">Total Control:</strong> The Party's victory over the soul</li>
      </ul>

      <Callout type="info">
        <strong>Julia's Words:</strong> Recall what Julia said: "What you say or
        do doesn't matter; only feelings matter. If they could make me stop loving
        you—that would be the real betrayal." In Room 101, Winston commits exactly
        this betrayal.
      </Callout>
    </LessonLayout>
  );
}
