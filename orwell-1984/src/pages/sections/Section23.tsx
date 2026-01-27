import { LessonLayout } from '@/components/layout/LessonLayout';
import { Callout } from '@/components/common/Callout';

export default function Section23() {
  return (
    <LessonLayout sectionId={23}>
      <h2>Part Three, Chapter 6: The Chestnut Tree</h2>

      <p>
        Winston is released. He sits in the Chestnut Tree Café, drinking Victory Gin,
        a shell of his former self. The final words of the novel mark his complete
        surrender: <strong>"He loved Big Brother."</strong>
      </p>

      <h3>Life After Ministry of Love</h3>

      <p>
        Winston has been given a sinecure job on a sub-committee. He spends his days
        at the Chestnut Tree Café—the traditional haunt of disgraced Party members—drinking
        clove-flavored Victory Gin and playing chess.
      </p>

      <div className="bg-dark-800 p-4 rounded-lg my-4 border-l-4 border-rose-500">
        <p className="font-semibold text-rose-400">Key Quote</p>
        <p className="mt-2 italic text-dark-300">
          "The Chestnut Tree was almost empty... In these days he could never fix his
          mind on any one subject for more than a few moments at a time."
        </p>
      </div>

      <h3>The Meeting with Julia</h3>

      <p>
        Winston encounters Julia one day in the park. They speak briefly, without
        emotion. Both have betrayed the other in Room 101. Both know it. There is
        nothing left between them.
      </p>

      <ul className="list-disc list-inside space-y-2 my-4 text-dark-300">
        <li>Julia has grown thicker, stiffer—her body has lost its grace</li>
        <li>They speak of their betrayals matter-of-factly</li>
        <li>Winston feels nothing for her—neither love nor hatred</li>
        <li>They part knowing they will not meet again</li>
      </ul>

      <div className="bg-dark-800 p-4 rounded-lg my-4 border-l-4 border-rose-500">
        <p className="font-semibold text-rose-400">Key Quote</p>
        <p className="mt-2 italic text-dark-300">
          "I betrayed you," she said baldly.<br />
          "I betrayed you," he said.
        </p>
      </div>

      <h3>The Telescreen Announcement</h3>

      <p>
        In the café, the telescreen announces a great military victory. Oceania has
        triumphed over Eurasia in Africa. Winston, swept up in the celebration,
        experiences a moment of genuine emotion.
      </p>

      <h3>The Final Victory</h3>

      <p>
        Winston looks up at the portrait of Big Brother. Something has changed in him.
        The long-hoped-for bullet enters his brain—metaphorically. His resistance is
        over.
      </p>

      <div className="bg-dark-800/50 rounded-xl p-6 border border-rose-500/20 text-center my-6">
        <p className="text-xl font-bold text-rose-400">
          "He had won the victory over himself."
        </p>
        <p className="text-2xl font-bold text-rose-400 mt-2">
          "He loved Big Brother."
        </p>
      </div>

      <Callout type="danger">
        <strong>The Ending:</strong> The novel ends not with Winston's death but with
        his spiritual annihilation. He has become what the Party wanted: a hollow man
        who genuinely loves his oppressor. This is more terrible than any execution.
      </Callout>

      <h3>Themes Concluded</h3>

      <ul className="list-disc list-inside space-y-2 my-4 text-dark-300">
        <li><strong className="text-rose-400">Total Defeat:</strong> The Party's complete victory over the individual</li>
        <li><strong className="text-rose-400">Love Destroyed:</strong> The final emptiness between Winston and Julia</li>
        <li><strong className="text-rose-400">The Broken Spirit:</strong> Survival without humanity</li>
        <li><strong className="text-rose-400">Doublethink Achieved:</strong> Winston's genuine love for Big Brother</li>
      </ul>

      <Callout type="info">
        <strong>A Note on Hope:</strong> Many readers find the ending of <em>Nineteen
        Eighty-Four</em> unrelentingly bleak. However, the Appendix—written in past
        tense about Newspeak—suggests that the Party's reign eventually ended. The
        novel exists as a warning, not a prophecy.
      </Callout>
    </LessonLayout>
  );
}
