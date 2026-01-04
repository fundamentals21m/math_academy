import { LessonLayout } from '../../components/layout/LessonLayout';
import { Callout } from '../../components/common/Callout';
import { Card, CardGrid } from '../../components/common/Card';

export default function Section11() {
  return (
    <LessonLayout sectionId={11}>
      {/* Opening Quote */}
      <blockquote className="border-l-4 border-amber-500 pl-6 py-2 my-6 text-xl italic text-dark-300">
        "Your days are numbered."
        <footer className="text-sm text-dark-500 mt-2 not-italic">
          — The message Dagny reads in the calendar above the city
        </footer>
      </blockquote>

      {/* Introduction */}
      <p className="text-lg text-dark-300 mb-6">
        "The Aristocracy of Pull" reveals the new social order emerging in America—one where
        political connections replace merit, and success depends not on what you can produce
        but on whom you know in Washington. As Colorado's lights go out one by one, Dagny
        watches helplessly while Jim Taggart builds a new kind of empire.
      </p>

      <Callout type="info">
        <p>
          <strong>What is "Pull"?</strong> In Rand's vocabulary, "pull" means political
          influence—the ability to get favors, exemptions, and advantages through government
          connections rather than through productive achievement. The "aristocracy of pull"
          is a ruling class based on cronyism rather than competence.
        </p>
      </Callout>

      {/* Chapter Summary */}
      <h2 className="text-2xl font-semibold mt-10 mb-4">Chapter Summary</h2>

      <p className="my-4">
        The calendar in the sky beyond Dagny's office window reads September 2. She watches
        it every evening, feeling as if it marks a progression toward something inevitable
        and terrible. Once it clocked her race to build the John Galt Line; now it clocks
        her race against an <strong className="text-amber-400">unknown destroyer</strong>.
      </p>

      <p className="my-4">
        One by one, the men who built new towns in Colorado have departed into silence.
        The towns they left are dying. Some factories remain ownerless and locked; others
        have been seized by local authorities. Either way, the machines stand still. Dagny
        feels as if a dark map of Colorado lies before her, its lights going out one by one.
      </p>

      <div className="bg-dark-800/50 rounded-xl p-6 border border-amber-600/30 my-6">
        <h4 className="font-semibold text-amber-400 mb-3">The Pattern of Disappearance</h4>
        <p className="text-dark-200 text-lg mb-4">
          "There had been a pattern about it, which she felt, but could not define; she had
          become able to predict, almost with certainty, who would go next and when; she was
          unable to grasp the 'why?'"
        </p>
        <p className="text-dark-400 text-sm">
          Dagny notices that the disappearances follow a pattern—the most capable leave first,
          as if someone were systematically removing the producers from the world.
        </p>
      </div>

      {/* Ted Nielsen's Warning */}
      <h2 className="text-2xl font-semibold mt-10 mb-4">Ted Nielsen's Confession</h2>

      <p className="my-4">
        Ted Nielsen, one of the last industrialists remaining in Colorado, visits Dagny.
        When she asks if he will be the next to go, his answer disturbs her:
      </p>

      <div className="bg-dark-800/50 rounded-xl p-6 border border-dark-700 my-6">
        <p className="text-dark-200 text-lg mb-4 italic">
          "Dagny, I've always thought that I'd rather die than stop working. But so did the
          men who are gone. It seems impossible to me that I could ever want to quit. But a
          year ago, it seemed impossible that they ever could. Those men were my friends.
          They knew what their going would do to us, the survivors. They would not have gone
          like that, without a word, leaving to us the added terror of the inexplicable—unless
          they had some reason of supreme importance."
        </p>
        <p className="text-dark-400 text-sm">
          — Ted Nielsen, struggling to understand why his fellow industrialists have vanished
        </p>
      </div>

      <Callout type="warning">
        <p>
          <strong>Roger Marsh's Vow:</strong> A month ago, Roger Marsh of Marsh Electric swore
          he would chain himself to his desk rather than leave. He was furious at the men who
          had gone. Now even he has vanished—suggesting that whatever is calling them away is
          more compelling than anger, loyalty, or self-preservation.
        </p>
      </Callout>

      {/* Jim's New Power */}
      <h2 className="text-2xl font-semibold mt-10 mb-4">Jim Taggart's Triumph</h2>

      <p className="my-4">
        While the productive world crumbles, James Taggart thrives. His new power comes not
        from running the railroad well but from his connections in Washington. The chapter
        introduces <strong className="text-amber-400">Cherryl Brooks</strong>, a young woman
        working at a dime store who has read about Jim Taggart's heroism in building the
        John Galt Line.
      </p>

      <p className="my-4">
        Cherryl sees Jim at a night club and approaches him with innocent admiration. She
        believes everything the newspapers have said—that Jim is a great industrialist, a
        builder, a hero. She doesn't know that Dagny did all the work while Jim took the credit.
      </p>

      <CardGrid>
        <Card>
          <h4 className="font-semibold text-amber-400 mb-2">Cherryl's Innocence</h4>
          <p className="text-sm text-dark-300">
            A poor girl who believes in heroism and achievement, Cherryl mistakes Jim's
            political power for productive greatness.
          </p>
        </Card>
        <Card>
          <h4 className="font-semibold text-amber-400 mb-2">Jim's Deception</h4>
          <p className="text-sm text-dark-300">
            Jim accepts Cherryl's worship without correcting her misunderstanding. He enjoys
            being seen as the hero he is not.
          </p>
        </Card>
        <Card>
          <h4 className="font-semibold text-amber-400 mb-2">The Wrong Brother</h4>
          <p className="text-sm text-dark-300">
            Cherryl gives Jim the admiration that rightfully belongs to people like Dagny
            and Rearden—the actual builders.
          </p>
        </Card>
        <Card>
          <h4 className="font-semibold text-amber-400 mb-2">Society's Confusion</h4>
          <p className="text-sm text-dark-300">
            Cherryl represents how society has lost the ability to distinguish between
            producers and looters.
          </p>
        </Card>
      </CardGrid>

      {/* The System of Pull */}
      <h2 className="text-2xl font-semibold mt-10 mb-4">How Pull Works</h2>

      <p className="my-4">
        The chapter reveals the mechanics of the new economic order. Government directives
        have frozen railroad bonds, but there's a loophole: you can get your bonds "defrozen"
        by proving "essential need." Three questions go unanswered: What constitutes proof?
        What constitutes need? Essential—to whom?
      </p>

      <div className="bg-dark-800/50 rounded-xl p-6 border border-dark-700 my-6">
        <h4 className="font-semibold text-amber-400 mb-3">The Defreezing Game</h4>
        <p className="text-dark-200 mb-4">
          Some bondholders get their money back; others are refused. No one knows why.
          A new profession has emerged: "defreezers"—young men with connections in Washington
          who help you "draft your application in the proper modern terms."
        </p>
        <p className="text-dark-300 text-sm">
          Those who are refused often sell their bonds for one-third of their value to men
          whose "needs" miraculously turn thirty-three frozen cents into a whole dollar.
        </p>
      </div>

      <Callout type="note">
        <p>
          <strong>Jim's Boast:</strong> "You have always considered money-making as such an
          important virtue. Well, it seems to me that I'm better at it than you are." Jim
          taunts Dagny—his "profits" come from government subsidies for empty trains and
          debts he's been excused from paying.
        </p>
      </Callout>

      {/* The Contrast */}
      <h2 className="text-2xl font-semibold mt-10 mb-4">Two Kinds of Success</h2>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 my-6">
        <div className="bg-dark-800/50 rounded-xl p-4 border border-dark-700">
          <h3 className="text-lg font-semibold text-amber-400 mb-2">Production</h3>
          <p className="text-dark-300 text-sm">Creating wealth through invention, efficiency, and trade. Success measured by value created. Rewards earned through merit.</p>
        </div>
        <div className="bg-dark-800/50 rounded-xl p-4 border border-dark-700">
          <h3 className="text-lg font-semibold text-amber-400 mb-2">Pull</h3>
          <p className="text-dark-300 text-sm">Acquiring wealth through political connections. Success measured by favors obtained. Rewards distributed by influence.</p>
        </div>
      </div>

      <p className="my-4">
        Jim's Taggart Transcontinental looks profitable on paper, but the profits are illusions:
        subsidies for trains that carry no freight, exemptions from debts that should have been
        paid. Meanwhile, actual producers like the industrialists of Colorado are being driven
        out—and taking their ability to create real wealth with them.
      </p>

      {/* Key Themes */}
      <h2 className="text-2xl font-semibold mt-10 mb-4">Key Themes</h2>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 my-6">
        <div className="bg-dark-800/50 rounded-xl p-4 border border-dark-700">
          <h3 className="text-lg font-semibold text-amber-400 mb-2">The Inversion of Values</h3>
          <p className="text-dark-300 text-sm">The looters are celebrated while producers disappear. Cherryl worships Jim while Dagny fights alone.</p>
        </div>
        <div className="bg-dark-800/50 rounded-xl p-4 border border-dark-700">
          <h3 className="text-lg font-semibold text-amber-400 mb-2">The Mystery Deepens</h3>
          <p className="text-dark-300 text-sm">The pattern of disappearances becomes clearer but the purpose remains hidden. Someone is recruiting the best minds.</p>
        </div>
        <div className="bg-dark-800/50 rounded-xl p-4 border border-dark-700">
          <h3 className="text-lg font-semibold text-amber-400 mb-2">Innocence Betrayed</h3>
          <p className="text-dark-300 text-sm">Cherryl represents the tragedy of honest people who trust appearances and are deceived by the wrong heroes.</p>
        </div>
        <div className="bg-dark-800/50 rounded-xl p-4 border border-dark-700">
          <h3 className="text-lg font-semibold text-amber-400 mb-2">The Countdown</h3>
          <p className="text-dark-300 text-sm">The calendar marks time passing as civilization crumbles. Dagny races against a destroyer she cannot see or understand.</p>
        </div>
      </div>

      {/* Character Development */}
      <h2 className="text-2xl font-semibold mt-10 mb-4">Character Development</h2>

      <div className="space-y-4 my-6">
        <div className="bg-dark-800/50 rounded-xl p-4 border border-dark-700">
          <h4 className="font-semibold text-amber-400 mb-2">Dagny Taggart</h4>
          <p className="text-dark-300 text-sm">
            Feels increasingly isolated as she watches the world she loves being dismantled.
            She can predict who will vanish but cannot understand why. Her determination to
            keep the railroad running becomes more desperate as support crumbles around her.
          </p>
        </div>
        <div className="bg-dark-800/50 rounded-xl p-4 border border-dark-700">
          <h4 className="font-semibold text-amber-400 mb-2">James Taggart</h4>
          <p className="text-dark-300 text-sm">
            Reaches the height of his power—not through building anything, but through
            political connections. He revels in his false success and enjoys Cherryl's
            misplaced worship, even knowing it is based on a lie.
          </p>
        </div>
        <div className="bg-dark-800/50 rounded-xl p-4 border border-dark-700">
          <h4 className="font-semibold text-amber-400 mb-2">Cherryl Brooks</h4>
          <p className="text-dark-300 text-sm">
            A new character representing innocent idealism. She believes in achievement
            and heroism but lacks the knowledge to distinguish real heroes from frauds.
            Her trajectory will become one of the novel's most poignant storylines.
          </p>
        </div>
      </div>

      {/* Looking at Nat Taggart */}
      <h2 className="text-2xl font-semibold mt-10 mb-4">The Statue of Nat Taggart</h2>

      <p className="my-4">
        As Dagny walks through the Terminal, she pauses before the statue of her ancestor,
        Nat Taggart—the man who built Taggart Transcontinental through sheer ability and
        determination. She makes a silent vow:
      </p>

      <div className="bg-dark-800/50 rounded-xl p-6 border border-amber-600/30 my-6">
        <p className="text-dark-200 text-lg italic">
          "It was your rail, you made it, you fought for it, you were not stopped by fear
          or by loathing—I won't surrender it to the men of blood and rust—and I'm the only
          one left to guard it."
        </p>
        <p className="text-dark-400 text-sm mt-2">
          — Dagny's silent pledge to her ancestor's legacy
        </p>
      </div>

      {/* Discussion Questions */}
      <h2 className="text-2xl font-semibold mt-10 mb-4">Discussion Questions</h2>

      <div className="space-y-4 my-6">
        <div className="bg-dark-800/50 rounded-xl p-4 border border-dark-700">
          <p className="text-dark-200">1. The chapter describes "defreezers"—people who profit by helping others navigate government regulations. What modern equivalents exist today, and what does the existence of such professionals tell us about the complexity of regulatory systems?</p>
        </div>
        <div className="bg-dark-800/50 rounded-xl p-4 border border-dark-700">
          <p className="text-dark-200">2. Cherryl Brooks admires Jim Taggart for achievements that actually belong to Dagny. How do we distinguish between genuine accomplishment and taking credit for others' work in complex organizations where contributions are often unclear?</p>
        </div>
        <div className="bg-dark-800/50 rounded-xl p-4 border border-dark-700">
          <p className="text-dark-200">3. Ted Nielsen observes that the vanished industrialists "would not have gone like that, without a word, leaving to us the added terror of the inexplicable—unless they had some reason of supreme importance." What do you think could convince someone to abandon everything they've built?</p>
        </div>
        <div className="bg-dark-800/50 rounded-xl p-4 border border-dark-700">
          <p className="text-dark-200">4. Dagny pledges to the statue of Nat Taggart that she won't "surrender it to the men of blood and rust." What role do ancestors and legacy play in motivating people to persevere through difficult circumstances?</p>
        </div>
      </div>

      {/* Key Takeaways */}
      <h2 className="text-2xl font-semibold mt-10 mb-4">Key Takeaways</h2>

      <div className="bg-dark-800 rounded-lg p-6">
        <ul className="space-y-3">
          <li className="flex items-start gap-3">
            <span className="text-amber-400 font-bold">1.</span>
            <span>
              <strong>The aristocracy of pull</strong> has replaced the aristocracy of
              ability—success now depends on political connections rather than productive
              achievement.
            </span>
          </li>
          <li className="flex items-start gap-3">
            <span className="text-amber-400 font-bold">2.</span>
            <span>
              <strong>Colorado's industrialists</strong> continue to vanish in a pattern
              Dagny can predict but not understand—the best leave first.
            </span>
          </li>
          <li className="flex items-start gap-3">
            <span className="text-amber-400 font-bold">3.</span>
            <span>
              <strong>Cherryl Brooks</strong> represents innocent idealism deceived by
              false appearances—she worships Jim for achievements that were Dagny's.
            </span>
          </li>
          <li className="flex items-start gap-3">
            <span className="text-amber-400 font-bold">4.</span>
            <span>
              <strong>Jim Taggart's profits</strong> are illusions—subsidies, exemptions,
              and paper wealth built on political favors rather than production.
            </span>
          </li>
          <li className="flex items-start gap-3">
            <span className="text-amber-400 font-bold">5.</span>
            <span>
              <strong>Dagny stands alone</strong> as guardian of her ancestor's legacy,
              facing a world that punishes achievement and rewards destruction.
            </span>
          </li>
        </ul>
      </div>
    </LessonLayout>
  );
}
