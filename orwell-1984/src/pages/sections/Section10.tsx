import { LessonLayout } from '@/components/layout/LessonLayout';
import { Callout } from '@/components/common/Callout';

export default function Section10() {
  return (
    <LessonLayout sectionId={10}>
      <h2>Part Two, Chapter 3: The Affair Begins</h2>

      <p>
        Winston and Julia's relationship deepens as they find stolen moments together
        in various hiding places around London. Julia reveals her philosophy of
        survival through small acts of rebellion.
      </p>

      <h3>Stolen Meetings</h3>

      <p>
        They cannot meet often or regularly. Each encounter must be arranged in advance
        through elaborate precautions—signals, code words, and varied locations. They
        meet in church ruins, in crowds, in the countryside.
      </p>

      <div className="bg-dark-800 p-4 rounded-lg my-4 border-l-4 border-rose-500">
        <p className="font-semibold text-rose-400">Key Quote</p>
        <p className="mt-2 italic text-dark-300">
          "Confession is not betrayal. What you say or do doesn't matter; only feelings
          matter. If they could make me stop loving you—that would be the real betrayal."
        </p>
      </div>

      <h3>Julia's Philosophy</h3>

      <p>
        Julia teaches Winston her approach to survival: outward conformity combined
        with private rebellion. She serves on Party committees, organizes hikes, hands
        out leaflets—all while conducting affairs and buying black market goods.
      </p>

      <ul className="list-disc list-inside space-y-2 my-4 text-dark-300">
        <li>Appear orthodox in public; rebel in private</li>
        <li>The Party cannot read thoughts—only actions</li>
        <li>Small pleasures are acts of resistance</li>
        <li>Don't try to change the system; just survive it</li>
      </ul>

      <h3>The Belfry</h3>

      <p>
        One meeting takes place in the ruined belfry of a bombed church. High above
        the street, they find temporary privacy. Julia explains how the Party
        maintains power not through force alone but through controlling desire itself.
      </p>

      <Callout type="info">
        <strong>Julia's Insight:</strong> "When you make love you're using up energy;
        and afterwards you feel happy and don't give a damn for anything. They can't
        bear you to feel like that. They want you to be bursting with energy all the
        time. All this marching up and down and cheering and waving flags is simply
        sex gone sour."
      </Callout>

      <h3>Themes Developed</h3>

      <ul className="list-disc list-inside space-y-2 my-4 text-dark-300">
        <li><strong className="text-rose-400">Private vs. Public:</strong> The double life required for survival</li>
        <li><strong className="text-rose-400">Desire and Control:</strong> How the Party channels sexual energy into political fervor</li>
        <li><strong className="text-rose-400">Betrayal:</strong> Julia's distinction between confessing and truly betraying</li>
      </ul>
    </LessonLayout>
  );
}
