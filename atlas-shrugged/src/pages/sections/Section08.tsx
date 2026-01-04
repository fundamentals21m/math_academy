import { LessonLayout } from '../../components/layout/LessonLayout';
import { Callout } from '../../components/common/Callout';
import { Card, CardGrid } from '../../components/common/Card';

export default function Section08() {
  return (
    <LessonLayout sectionId={8}>
      {/* Opening Quote */}
      <blockquote className="border-l-4 border-amber-500 pl-6 py-2 my-6 text-xl italic text-dark-300">
        "I have been thinking of nothing but you for the past week. I have been thinking
        of the way you carry your head, of the manner of your walk, of the sound of your voice."
        <footer className="text-sm text-dark-500 mt-2 not-italic">
          — Hank Rearden to Dagny Taggart
        </footer>
      </blockquote>

      {/* Introduction */}
      <p className="text-lg text-dark-300 mb-6">
        Chapter IX explores the deepening relationship between <strong className="text-amber-400">Dagny</strong>
        and <strong className="text-amber-400">Rearden</strong>, and Rearden's internal conflict about it.
        While the John Galt Line flourishes, Rearden struggles with guilt imposed by conventional
        morality, unable to integrate his physical desires with his self-respect.
      </p>

      <Callout type="info">
        <p>
          <strong>The title "The Sacred and the Profane"</strong> refers to the false dichotomy
          Rearden has accepted: that the spiritual (his work, his mind, his achievements) is
          "sacred," while the physical (his body, his desires) is "profane." This split tortures
          him even as his relationship with Dagny develops.
        </p>
      </Callout>

      {/* Chapter Summary */}
      <h2 className="text-2xl font-semibold mt-10 mb-4">Chapter Summary</h2>

      <p className="my-4">
        In the aftermath of the John Galt Line's success, Rearden and Dagny continue their
        relationship. But Rearden cannot accept happiness without guilt. He has internalized
        the conventional view that physical desire is base and shameful, separate from—and
        opposed to—his spiritual values.
      </p>

      <p className="my-4">
        Meanwhile, the world outside continues to deteriorate. James Taggart, rather than
        celebrating the success of his own railroad's line, is resentful and bitter. The looters
        begin planning their next assault on the producers. And the question of who is responsible
        for the world's decline grows more urgent.
      </p>

      <div className="bg-dark-800/50 rounded-xl p-6 border border-amber-600/30 my-6">
        <h4 className="font-semibold text-amber-400 mb-3">Rearden's Internal Conflict</h4>
        <p className="text-dark-200 text-lg mb-4">
          "He felt the desire to have her, and fought it... He had held desire as base,
          as something to be conquered. He had fought it... He had won his every battle
          against inanimate nature; but this was a battle he lost."
        </p>
        <p className="text-dark-400 text-sm">
          Rearden's struggle illustrates the damage done by the mind-body split in
          conventional morality—he cannot accept that his desires are expressions
          of his values, not betrayals of them.
        </p>
      </div>

      {/* Rearden's Psychology */}
      <h2 className="text-2xl font-semibold mt-10 mb-4">Rearden's Psychology</h2>

      <p className="my-4">
        The chapter delves deeply into Rearden's psychology, revealing how his relationship
        with <strong className="text-amber-400">Lillian</strong> has shaped his view of physical
        desire. Lillian has made him feel that his desires are degrading, that sex is something
        base that his wife tolerates as a duty. This has left Rearden unable to integrate his
        physical and spiritual nature.
      </p>

      <CardGrid>
        <Card>
          <h4 className="font-semibold text-amber-400 mb-2">The Mind-Body Split</h4>
          <p className="text-sm text-dark-300">
            Rearden has accepted that his mind (which creates Rearden Metal) is noble,
            while his body (which desires women) is base. This split prevents him
            from achieving wholeness.
          </p>
        </Card>
        <Card>
          <h4 className="font-semibold text-amber-400 mb-2">Lillian's Influence</h4>
          <p className="text-sm text-dark-300">
            Lillian has taught Rearden to feel ashamed of his desires. Her cold tolerance
            of sex as a "duty" has made him associate physical pleasure with guilt.
          </p>
        </Card>
        <Card>
          <h4 className="font-semibold text-amber-400 mb-2">The Guilt</h4>
          <p className="text-sm text-dark-300">
            Even as Rearden finds joy with Dagny, he cannot escape the guilt he feels.
            He believes he is treating her badly by desiring her.
          </p>
        </Card>
        <Card>
          <h4 className="font-semibold text-amber-400 mb-2">Dagny's Perspective</h4>
          <p className="text-sm text-dark-300">
            Dagny does not share Rearden's guilt. She sees their relationship as an
            expression of their values, not a betrayal of them. Her clarity will
            eventually help him understand.
          </p>
        </Card>
      </CardGrid>

      {/* Dagny and Rearden's Relationship */}
      <h2 className="text-2xl font-semibold mt-10 mb-4">Dagny and Rearden Together</h2>

      <p className="my-4">
        Despite Rearden's internal conflict, his relationship with Dagny continues. They share
        not just physical passion but intellectual partnership. Together, they discuss business,
        philosophy, and the state of the world. Their conversations reveal the harmony of their
        values.
      </p>

      <div className="bg-dark-800/50 rounded-xl p-6 border border-dark-700 my-6">
        <h4 className="font-semibold text-amber-400 mb-3">A Meeting of Equals</h4>
        <p className="text-dark-200 mb-4">
          What draws Dagny and Rearden together is not need but admiration. Each sees in
          the other a reflection of their own values—competence, determination, the refusal
          to accept the world's terms. Their relationship is a partnership of strength, not
          a compensation for weakness.
        </p>
        <p className="text-dark-400 text-sm">
          This represents Rand's view of ideal romantic love: a response to values, not to needs.
        </p>
      </div>

      {/* James Taggart's Reaction */}
      <h2 className="text-2xl font-semibold mt-10 mb-4">James Taggart's Reaction</h2>

      <p className="my-4">
        Rather than celebrating the John Galt Line's success—which benefits his own company—
        <strong className="text-amber-400">James Taggart</strong> is bitter and resentful. The
        success proves that his sister Dagny was right and he was wrong. His hatred of achievement
        makes him unable to enjoy even his own railroad's triumph.
      </p>

      <Callout type="warning">
        <p>
          <strong>The Psychology of the Second-Hander:</strong> James Taggart's resentment of
          success—even his own company's success—reveals the psychology of those who hate
          achievement. For James, Dagny's success is not a benefit but an affront, a reminder
          of his own inadequacy.
        </p>
      </Callout>

      {/* The World's Deterioration */}
      <h2 className="text-2xl font-semibold mt-10 mb-4">The World's Deterioration</h2>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 my-6">
        <div className="bg-dark-800/50 rounded-xl p-4 border border-dark-700">
          <h3 className="text-lg font-semibold text-amber-400 mb-2">Economic Decline</h3>
          <p className="text-dark-300 text-sm">
            Despite the John Galt Line's success, the broader economy continues to decline.
            Regulations multiply, businesses fail, and the productive suffer.
          </p>
        </div>
        <div className="bg-dark-800/50 rounded-xl p-4 border border-dark-700">
          <h3 className="text-lg font-semibold text-amber-400 mb-2">More Disappearances</h3>
          <p className="text-dark-300 text-sm">
            Capable people continue to vanish mysteriously. The pattern grows clearer:
            the best people are leaving, but no one knows where they go.
          </p>
        </div>
        <div className="bg-dark-800/50 rounded-xl p-4 border border-dark-700">
          <h3 className="text-lg font-semibold text-amber-400 mb-2">New Regulations</h3>
          <p className="text-dark-300 text-sm">
            The looters are not content with their victories. New legislation is being
            planned to further restrict the productive and benefit the incompetent.
          </p>
        </div>
        <div className="bg-dark-800/50 rounded-xl p-4 border border-dark-700">
          <h3 className="text-lg font-semibold text-amber-400 mb-2">Growing Despair</h3>
          <p className="text-dark-300 text-sm">
            The phrase "Who is John Galt?" appears more frequently, expressing the
            growing sense that something fundamental is wrong with the world.
          </p>
        </div>
      </div>

      {/* Key Themes */}
      <h2 className="text-2xl font-semibold mt-10 mb-4">Key Themes Developed</h2>

      <div className="space-y-4 my-6">
        <div className="p-4 bg-dark-800/50 rounded-lg border border-dark-700">
          <h4 className="font-semibold text-amber-400 mb-2">The Mind-Body Dichotomy</h4>
          <p className="text-dark-300">
            Rearden's torture comes from accepting the conventional view that mind and body
            are opposed—that spiritual values and physical desires are enemies. Rand rejects
            this dichotomy: properly understood, desire is a response to values.
          </p>
        </div>
        <div className="p-4 bg-dark-800/50 rounded-lg border border-dark-700">
          <h4 className="font-semibold text-amber-400 mb-2">Love as a Response to Values</h4>
          <p className="text-dark-300">
            Dagny and Rearden are drawn together by what they see in each other—not need or
            dependency, but admiration. This is Rand's view of proper romantic love: a response
            to the virtues one sees in another.
          </p>
        </div>
        <div className="p-4 bg-dark-800/50 rounded-lg border border-dark-700">
          <h4 className="font-semibold text-amber-400 mb-2">The Hatred of Achievement</h4>
          <p className="text-dark-300">
            James Taggart's resentment of his own company's success reveals the psychology
            of the second-hander—one who cannot achieve and therefore hates those who can.
          </p>
        </div>
      </div>

      {/* Notable Events */}
      <h2 className="text-2xl font-semibold mt-10 mb-4">Notable Events</h2>

      <div className="space-y-4 my-6">
        <div className="flex items-start gap-4 p-4 bg-dark-800/50 rounded-lg border border-dark-700">
          <span className="w-8 h-8 flex items-center justify-center bg-amber-600 rounded-full text-white font-bold text-sm shrink-0">1</span>
          <div>
            <p className="font-semibold text-dark-100">Rearden's Internal Struggle</p>
            <p className="text-sm text-dark-400 mt-1">
              Rearden wrestles with guilt about his relationship with Dagny, unable
              to integrate his physical desires with his self-respect.
            </p>
          </div>
        </div>
        <div className="flex items-start gap-4 p-4 bg-dark-800/50 rounded-lg border border-dark-700">
          <span className="w-8 h-8 flex items-center justify-center bg-amber-600 rounded-full text-white font-bold text-sm shrink-0">2</span>
          <div>
            <p className="font-semibold text-dark-100">Their Relationship Deepens</p>
            <p className="text-sm text-dark-400 mt-1">
              Despite his guilt, Rearden's relationship with Dagny continues to develop,
              built on shared values and mutual admiration.
            </p>
          </div>
        </div>
        <div className="flex items-start gap-4 p-4 bg-dark-800/50 rounded-lg border border-dark-700">
          <span className="w-8 h-8 flex items-center justify-center bg-amber-600 rounded-full text-white font-bold text-sm shrink-0">3</span>
          <div>
            <p className="font-semibold text-dark-100">James Taggart's Bitterness</p>
            <p className="text-sm text-dark-400 mt-1">
              Rather than celebrating success, James resents the John Galt Line's triumph
              because it proves his sister was right.
            </p>
          </div>
        </div>
        <div className="flex items-start gap-4 p-4 bg-dark-800/50 rounded-lg border border-dark-700">
          <span className="w-8 h-8 flex items-center justify-center bg-amber-600 rounded-full text-white font-bold text-sm shrink-0">4</span>
          <div>
            <p className="font-semibold text-dark-100">Lillian's Marriage Revealed</p>
            <p className="text-sm text-dark-400 mt-1">
              Through flashbacks, we see how Lillian's coldness has shaped Rearden's
              view of physical desire as something shameful.
            </p>
          </div>
        </div>
      </div>

      <Callout type="success">
        <p>
          <strong>Dagny's Clarity:</strong> Unlike Rearden, Dagny does not feel guilt about
          their relationship. She sees it as an expression of her values, not a contradiction
          of them. Her clarity will eventually help Rearden understand the integration of
          mind and body that makes a whole human being.
        </p>
      </Callout>

      {/* Discussion Questions */}
      <h2 className="text-2xl font-semibold mt-10 mb-4">Discussion Questions</h2>

      <div className="space-y-4 my-6">
        <div className="bg-dark-800/50 rounded-xl p-4 border border-dark-700">
          <p className="text-dark-200">1. Rearden feels guilty about his relationship with Dagny because he has accepted the idea that physical desire is "base" while spiritual values are "noble." What is the source of this mind-body split? Do you think desire and values can be integrated, or are they necessarily in conflict?</p>
        </div>
        <div className="bg-dark-800/50 rounded-xl p-4 border border-dark-700">
          <p className="text-dark-200">2. Dagny does not share Rearden's guilt about their relationship. How does her perspective differ from his? What does she understand about the relationship between desire and values that Rearden has not yet grasped?</p>
        </div>
        <div className="bg-dark-800/50 rounded-xl p-4 border border-dark-700">
          <p className="text-dark-200">3. James Taggart resents the John Galt Line's success even though it benefits his own company. What psychological insight does this reveal about those who hate achievement? How can someone be harmed by success—even their own?</p>
        </div>
        <div className="bg-dark-800/50 rounded-xl p-4 border border-dark-700">
          <p className="text-dark-200">4. Rand presents romantic love as "a response to values"—admiring what one sees in another person. How does this view differ from common conceptions of love as need, fate, or chemistry? What are the implications of choosing a partner based on their character and achievements?</p>
        </div>
      </div>

      {/* Key Takeaways */}
      <h2 className="text-2xl font-semibold mt-10 mb-4">Key Takeaways</h2>

      <div className="bg-dark-800 rounded-lg p-6">
        <ul className="space-y-3">
          <li className="flex items-start gap-3">
            <span className="text-amber-400 font-bold">1.</span>
            <span>
              <strong>Rearden's guilt</strong> about his relationship with Dagny comes from
              accepting the false dichotomy between mind and body.
            </span>
          </li>
          <li className="flex items-start gap-3">
            <span className="text-amber-400 font-bold">2.</span>
            <span>
              <strong>Dagny and Rearden's relationship</strong> is built on shared values
              and mutual admiration, not need or dependency.
            </span>
          </li>
          <li className="flex items-start gap-3">
            <span className="text-amber-400 font-bold">3.</span>
            <span>
              <strong>James Taggart's resentment</strong> of success reveals the psychology
              of those who hate achievement because they cannot achieve.
            </span>
          </li>
          <li className="flex items-start gap-3">
            <span className="text-amber-400 font-bold">4.</span>
            <span>
              <strong>Lillian's influence</strong> has taught Rearden to associate physical
              desire with shame, preventing him from achieving wholeness.
            </span>
          </li>
          <li className="flex items-start gap-3">
            <span className="text-amber-400 font-bold">5.</span>
            <span>
              <strong>The world continues to deteriorate</strong> even as the John Galt Line
              succeeds, with more disappearances and new regulations planned.
            </span>
          </li>
        </ul>
      </div>
    </LessonLayout>
  );
}
