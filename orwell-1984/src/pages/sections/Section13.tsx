import { LessonLayout } from '@/components/layout/LessonLayout';
import { Callout } from '@/components/common/Callout';
import { Definition } from '@/components/common/ContentBlocks';

export default function Section13() {
  return (
    <LessonLayout sectionId={13}>
      <h2>Part Two, Chapter 6: O'Brien's Invitation</h2>

      <p>
        <strong>O'Brien</strong>, the Inner Party member Winston noticed during the
        Two Minutes Hate, approaches him with an invitation. Winston's long-held
        hope that O'Brien is a secret rebel seems confirmed.
      </p>

      <h3>The Approach</h3>

      <p>
        O'Brien stops Winston in a corridor at the Ministry and mentions having
        read Winston's articles on Newspeak. He offers to lend Winston an advance
        copy of the Newspeak dictionary—and gives Winston his home address.
      </p>

      <Definition title="O'Brien">
        <p>
          A member of the Inner Party with a "large, burly" frame and a "coarse,
          humorous, brutal face." Despite his thuggish appearance, he has a certain
          charm and sophistication. Winston has long believed that O'Brien's eyes
          communicate secret understanding.
        </p>
      </Definition>

      <div className="bg-dark-800 p-4 rounded-lg my-4 border-l-4 border-rose-500">
        <p className="font-semibold text-rose-400">Key Quote</p>
        <p className="mt-2 italic text-dark-300">
          "For perhaps five seconds they were within the aura of the same glance. For
          that long O'Brien's dark eyes held his, as though examining him, and then
          moved away. That was all, and he was already uncertain whether it had happened."
        </p>
      </div>

      <h3>Inner Party Privileges</h3>

      <p>
        The fact that O'Brien gives Winston his address is extraordinary. Inner Party
        members live in special areas; ordinary Party members never visit them. The
        invitation itself is a sign of unusual interest.
      </p>

      <Callout type="warning">
        <strong>Question for the Reader:</strong> Is O'Brien really a secret rebel?
        Or is he testing Winston—drawing out his thoughtcrime to expose it? The novel
        maintains this ambiguity, leaving readers as uncertain as Winston himself.
      </Callout>

      <h3>Winston's Decision</h3>

      <p>
        Winston tells Julia about O'Brien's invitation. Despite the danger, both feel
        they must accept. They are ready to join the Brotherhood—the legendary
        underground resistance—even if it means death.
      </p>

      <ul className="list-disc list-inside space-y-2 my-4 text-dark-300">
        <li>They accept that they will be caught</li>
        <li>They want to do something meaningful before the end</li>
        <li>They hope the Brotherhood is real</li>
        <li>They are willing to die for the cause</li>
      </ul>

      <h3>Themes Developed</h3>

      <ul className="list-disc list-inside space-y-2 my-4 text-dark-300">
        <li><strong className="text-rose-400">Trust and Paranoia:</strong> The impossibility of knowing whom to trust</li>
        <li><strong className="text-rose-400">Hope Against Reason:</strong> Winston's desperate belief in O'Brien</li>
        <li><strong className="text-rose-400">The Brotherhood:</strong> The dream of organized resistance</li>
      </ul>
    </LessonLayout>
  );
}
