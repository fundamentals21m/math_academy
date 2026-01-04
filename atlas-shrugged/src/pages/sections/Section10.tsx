import { LessonLayout } from '../../components/layout/LessonLayout';
import { Callout } from '../../components/common/Callout';
import { Card, CardGrid } from '../../components/common/Card';

export default function Section10() {
  return (
    <LessonLayout sectionId={10}>
      {/* Opening Quote */}
      <blockquote className="border-l-4 border-amber-500 pl-6 py-2 my-6 text-xl italic text-dark-300">
        "I had nothing to do with it!"
        <footer className="text-sm text-dark-500 mt-2 not-italic">
          — Dr. Robert Stadler's internal protest
        </footer>
      </blockquote>

      {/* Introduction */}
      <p className="text-lg text-dark-300 mb-6">
        Part Two of <em>Atlas Shrugged</em> opens with a devastating portrait of intellectual
        corruption. "The Man Who Belonged on Earth" introduces us to Dr. Robert Stadler,
        once the greatest physicist of his age, now trapped in a web of compromises that
        has turned his genius into a weapon against reason itself.
      </p>

      <Callout type="info">
        <p>
          <strong>Part Two: Either-Or</strong> begins here. The title refers to the law of
          the excluded middle in logic—a thing is either A or not-A, with no middle ground.
          As the conflict intensifies, characters will be forced to choose sides.
        </p>
      </Callout>

      {/* Chapter Summary */}
      <h2 className="text-2xl font-semibold mt-10 mb-4">Chapter Summary</h2>

      <p className="my-4">
        Dr. Robert Stadler sits in his office at the State Science Institute, staring at a
        book that fills him with shame: <strong className="text-amber-400">"Why Do You Think You Think?"</strong> by
        Dr. Floyd Ferris. The book is a bestseller—twenty thousand copies in two weeks—and
        it preaches that reason is a "primitive superstition" and thought is an "illusion
        created by your glands."
      </p>

      <p className="my-4">
        Stadler is horrified. The book uses his own scientific discoveries to argue that the
        mind is incapable of understanding reality. But when he confronts Ferris, he learns
        a chilling truth: the book was never meant for thinking people. It was written for
        "the general public"—to give them permission not to think.
      </p>

      <div className="bg-dark-800/50 rounded-xl p-6 border border-amber-600/30 my-6">
        <h4 className="font-semibold text-amber-400 mb-3">The Anti-Mind Manifesto</h4>
        <p className="text-dark-200 text-lg mb-4 italic">
          "Thought is a primitive superstition. Reason is an irrational idea. The childish
          notion that we are able to think has been mankind's costliest error."
        </p>
        <p className="text-dark-400 text-sm">
          From Dr. Floyd Ferris's book, published by the State Science Institute—using
          Dr. Stadler's work to destroy the very concept of rational thought.
        </p>
      </div>

      {/* Dr. Stadler's Tragedy */}
      <h2 className="text-2xl font-semibold mt-10 mb-4">The Tragedy of Dr. Robert Stadler</h2>

      <p className="my-4">
        Dr. Stadler represents one of Rand's most complex character studies: the brilliant
        mind that has betrayed itself. Once, he was the greatest physicist of his generation,
        a man who <em>belonged</em> on earth in the deepest sense—a man whose mind was his
        tool for living.
      </p>

      <p className="my-4">
        But Stadler made a fatal choice years ago: he helped create the State Science
        Institute, believing that government funding would free scientists from commercial
        pressures. Instead, it made them servants of political masters. Now he finds his
        name and work used to destroy the very thing he valued most—the human capacity
        for reason.
      </p>

      <CardGrid>
        <Card>
          <h4 className="font-semibold text-amber-400 mb-2">The Compromise</h4>
          <p className="text-sm text-dark-300">
            Stadler accepted government control of science, believing pure research
            mattered more than who funded it. He now sees the consequences.
          </p>
        </Card>
        <Card>
          <h4 className="font-semibold text-amber-400 mb-2">The Evasion</h4>
          <p className="text-sm text-dark-300">
            "I had nothing to do with it!" he protests—but his silence and sanction
            made the Institute's corruption possible.
          </p>
        </Card>
        <Card>
          <h4 className="font-semibold text-amber-400 mb-2">The Loneliness</h4>
          <p className="text-sm text-dark-300">
            Stadler is surrounded by mediocrities who cannot understand him and
            manipulators who use him. He has cut himself off from his intellectual equals.
          </p>
        </Card>
        <Card>
          <h4 className="font-semibold text-amber-400 mb-2">Project X</h4>
          <p className="text-sm text-dark-300">
            A mysterious secret project emerges—"Project Xylophone"—that Stadler
            dismisses as mere "technological" work beneath his notice.
          </p>
        </Card>
      </CardGrid>

      {/* Dr. Ferris's Philosophy */}
      <h2 className="text-2xl font-semibold mt-10 mb-4">Dr. Ferris and the Psychology of Evasion</h2>

      <p className="my-4">
        Dr. Floyd Ferris represents a different kind of intellectual—not the tragic genius
        who compromised, but the deliberate destroyer who knows exactly what he is doing.
        When Stadler confronts him about the book's contradictions, Ferris is unmoved:
      </p>

      <div className="bg-dark-800/50 rounded-xl p-6 border border-dark-700 my-6">
        <p className="text-dark-200 text-lg mb-4 italic">
          "You see, Dr. Stadler, people don't want to think. And the deeper they get into
          trouble, the less they want to think. But by some sort of instinct, they feel
          that they ought to and it makes them feel guilty. So they'll bless and follow
          anyone who gives them a justification for not thinking."
        </p>
        <p className="text-dark-400 text-sm">
          — Dr. Floyd Ferris, explaining why the book was written
        </p>
      </div>

      <Callout type="warning">
        <p>
          <strong>The Weapon of Guilt:</strong> Ferris understands that people feel guilty
          about not thinking—so he offers them intellectual permission to evade. By making
          irrationality sound "scientific," he removes their last barrier to mindlessness.
        </p>
      </Callout>

      {/* Rearden's Defiance */}
      <h2 className="text-2xl font-semibold mt-10 mb-4">Rearden's Parallel Choice</h2>

      <p className="my-4">
        Meanwhile, Hank Rearden faces his own moment of decision. He receives an order
        from the State Science Institute demanding ten thousand tons of Rearden Metal for
        the mysterious "Project X." Without hesitation, he refuses.
      </p>

      <p className="my-4">
        When a government agent asks why, Rearden delivers one of the novel's most powerful statements:
      </p>

      <div className="bg-dark-800/50 rounded-xl p-6 border border-amber-600/30 my-6">
        <p className="text-dark-200 text-lg mb-4 italic">
          "There might be some sort of justification for the savage societies in which a
          man had to expect that enemies could murder him at any moment and had to defend
          himself as best he could. But there can be no justification for a society in
          which a man is expected to manufacture the weapons for his own murderers."
        </p>
        <p className="text-dark-400 text-sm">
          — Hank Rearden, refusing to sell his metal to the State Science Institute
        </p>
      </div>

      {/* Themes */}
      <h2 className="text-2xl font-semibold mt-10 mb-4">Key Themes</h2>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 my-6">
        <div className="bg-dark-800/50 rounded-xl p-4 border border-dark-700">
          <h3 className="text-lg font-semibold text-amber-400 mb-2">The Corruption of Science</h3>
          <p className="text-dark-300 text-sm">When science serves political masters rather than truth, it becomes a weapon against the mind itself.</p>
        </div>
        <div className="bg-dark-800/50 rounded-xl p-4 border border-dark-700">
          <h3 className="text-lg font-semibold text-amber-400 mb-2">Sanction of the Victim</h3>
          <p className="text-dark-300 text-sm">The looters need Stadler's prestige and Rearden's metal—but they can only get it if the victims cooperate.</p>
        </div>
        <div className="bg-dark-800/50 rounded-xl p-4 border border-dark-700">
          <h3 className="text-lg font-semibold text-amber-400 mb-2">The Choice to Think</h3>
          <p className="text-dark-300 text-sm">Ferris's book gives people permission not to think. The fundamental choice is whether to exercise one's mind.</p>
        </div>
        <div className="bg-dark-800/50 rounded-xl p-4 border border-dark-700">
          <h3 className="text-lg font-semibold text-amber-400 mb-2">Either-Or</h3>
          <p className="text-dark-300 text-sm">Part Two's title reflects the inescapable choice: reason or force, production or looting, life or death.</p>
        </div>
      </div>

      {/* The Dagny-Stadler Meeting */}
      <h2 className="text-2xl font-semibold mt-10 mb-4">Dagny Meets Dr. Stadler</h2>

      <p className="my-4">
        In this chapter, Dagny visits Dr. Stadler seeking help with her quest to rebuild
        the mysterious motor she found in the abandoned factory. Stadler is moved by the
        fragments of the motor's design—it represents genuine scientific achievement, the
        kind of work he once lived for.
      </p>

      <p className="my-4">
        He recommends a young physicist named <strong className="text-amber-400">Quentin Daniels</strong> from
        the Utah Institute of Technology. Daniels refused to work for the State Science
        Institute—a choice that Stadler cannot help but respect, even as it implicitly
        condemns his own path.
      </p>

      <Callout type="note">
        <p>
          <strong>The Three Students:</strong> Dr. Stadler mentions that he once had three
          brilliant students who he believed would change the world. One of them was named
          John Galt. But Stadler believes Galt must be dead—"He had such a mind that, had
          he lived, the whole world would have been talking of him by now."
        </p>
      </Callout>

      {/* Character Analysis */}
      <h2 className="text-2xl font-semibold mt-10 mb-4">Character Development</h2>

      <div className="space-y-4 my-6">
        <div className="bg-dark-800/50 rounded-xl p-4 border border-dark-700">
          <h4 className="font-semibold text-amber-400 mb-2">Dr. Robert Stadler</h4>
          <p className="text-dark-300 text-sm">
            A tragic figure who chose prestige and funding over intellectual independence.
            He despises what the Institute has become but cannot bring himself to oppose it.
            His internal conflict—knowing he is complicit in evil while screaming "I had
            nothing to do with it!"—makes him one of the novel's most psychologically
            complex characters.
          </p>
        </div>
        <div className="bg-dark-800/50 rounded-xl p-4 border border-dark-700">
          <h4 className="font-semibold text-amber-400 mb-2">Dr. Floyd Ferris</h4>
          <p className="text-dark-300 text-sm">
            The cynical manipulator who understands exactly what he is doing. Unlike Stadler,
            Ferris has no illusions about serving truth or science. He views the public as
            cattle to be managed and uses the prestige of science as a tool of control.
          </p>
        </div>
        <div className="bg-dark-800/50 rounded-xl p-4 border border-dark-700">
          <h4 className="font-semibold text-amber-400 mb-2">Hank Rearden</h4>
          <p className="text-dark-300 text-sm">
            Continues his evolution from successful industrialist to conscious defender of
            his rights. His refusal to sell to the State Science Institute shows growing
            clarity about the nature of the conflict he faces.
          </p>
        </div>
      </div>

      {/* Discussion Questions */}
      <h2 className="text-2xl font-semibold mt-10 mb-4">Discussion Questions</h2>

      <div className="space-y-4 my-6">
        <div className="bg-dark-800/50 rounded-xl p-4 border border-dark-700">
          <p className="text-dark-200">1. Dr. Stadler protests "I had nothing to do with it!" when confronted with Ferris's book. To what extent is he actually responsible for how his work has been used? Can a scientist be held accountable for the applications others make of their discoveries?</p>
        </div>
        <div className="bg-dark-800/50 rounded-xl p-4 border border-dark-700">
          <p className="text-dark-200">2. Dr. Ferris argues that his book was written for "the general public" to give them "permission not to think." Can you identify examples in today's world where intellectual authorities seem to discourage critical thinking rather than encourage it?</p>
        </div>
        <div className="bg-dark-800/50 rounded-xl p-4 border border-dark-700">
          <p className="text-dark-200">3. Rearden refuses to sell his metal for "Project X," saying he will not "manufacture the weapons for his own murderers." When, if ever, is it appropriate for a business to refuse to sell its products to certain customers based on how those products might be used?</p>
        </div>
        <div className="bg-dark-800/50 rounded-xl p-4 border border-dark-700">
          <p className="text-dark-200">4. Stadler once had three brilliant students, including John Galt, whom he believes must be dead because "the whole world would have been talking of him by now." What does this assumption reveal about Stadler's understanding of success and recognition?</p>
        </div>
      </div>

      {/* Key Takeaways */}
      <h2 className="text-2xl font-semibold mt-10 mb-4">Key Takeaways</h2>

      <div className="bg-dark-800 rounded-lg p-6">
        <ul className="space-y-3">
          <li className="flex items-start gap-3">
            <span className="text-amber-400 font-bold">1.</span>
            <span>
              <strong>Part Two begins</strong> with the title "Either-Or," signaling that
              the time for compromise is ending—characters must choose sides.
            </span>
          </li>
          <li className="flex items-start gap-3">
            <span className="text-amber-400 font-bold">2.</span>
            <span>
              <strong>Dr. Robert Stadler</strong> represents the intellectual who has
              compromised with evil and now finds his work used to destroy reason itself.
            </span>
          </li>
          <li className="flex items-start gap-3">
            <span className="text-amber-400 font-bold">3.</span>
            <span>
              <strong>Dr. Ferris's book</strong> gives people intellectual permission not
              to think—using the prestige of science to destroy the concept of science.
            </span>
          </li>
          <li className="flex items-start gap-3">
            <span className="text-amber-400 font-bold">4.</span>
            <span>
              <strong>Rearden refuses</strong> to sell his metal for Project X, declaring
              he will not manufacture weapons for his own murderers.
            </span>
          </li>
          <li className="flex items-start gap-3">
            <span className="text-amber-400 font-bold">5.</span>
            <span>
              <strong>John Galt is mentioned</strong> as one of Stadler's former students—
              a man of such brilliance that Stadler believes he must be dead.
            </span>
          </li>
        </ul>
      </div>
    </LessonLayout>
  );
}
