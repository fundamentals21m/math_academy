import { LessonLayout } from '../../components/layout/LessonLayout';
import { Callout } from '../../components/common/Callout';
import { Card, CardGrid } from '../../components/common/Card';

export default function Section19() {
  return (
    <LessonLayout sectionId={19}>
      {/* Opening Quote */}
      <blockquote className="border-l-4 border-amber-500 pl-6 py-2 my-6 text-xl italic text-dark-300">
        "Is this the woman you love?"<br />
        Francisco closed his eyes.<br />
        "Is this the woman you love?"<br />
        Francisco answered, looking at her, "Yes."
        <footer className="text-sm text-dark-500 mt-2 not-italic">
          — Rearden confronts Francisco about Dagny
        </footer>
      </blockquote>

      {/* Introduction */}
      <p className="text-lg text-dark-300 mb-6">
        "The Face Without Pain or Fear or Guilt" concludes Part Two with Dagny's return
        to Taggart Transcontinental after the tunnel disaster. But her return leads to
        a devastating confrontation between the three people bound together by love and
        betrayal—Dagny, Rearden, and Francisco.
      </p>

      <Callout type="info">
        <p>
          <strong>The Title's Meaning:</strong> "The Face Without Pain or Fear or Guilt"
          describes the ideal Dagny glimpses—a face of complete integrity, a person who
          lives without the burdens that weigh down the rest of humanity. It is the face
          of someone who has resolved all contradictions and lives by a single, integrated
          standard.
        </p>
      </Callout>

      {/* Chapter Summary */}
      <h2 className="text-2xl font-semibold mt-10 mb-4">Chapter Summary</h2>

      <p className="my-4">
        The tunnel disaster brings Dagny racing back to New York. Eddie Willers, who has
        refused to reveal her location to anyone, watches in amazement as she appears in
        the doorway—returned not because anyone forced her, but because she could not
        abandon the railroad in its hour of greatest need.
      </p>

      <p className="my-4">
        But her return leads to an explosive confrontation when Rearden discovers Francisco
        at Dagny's apartment. The three people who have shaped each other's lives face the
        truth of their relationships—and Rearden's anger nearly destroys the fragile hope
        that connects them.
      </p>

      {/* Eddie's Stand */}
      <h2 className="text-2xl font-semibold mt-10 mb-4">Eddie Willers' Loyalty</h2>

      <p className="my-4">
        Before Dagny returns, Eddie Willers faces James Taggart's fury. Jim demands to
        know where Dagny is hiding—but Eddie refuses to tell him:
      </p>

      <div className="bg-dark-800/50 rounded-xl p-6 border border-amber-600/30 my-6">
        <h4 className="font-semibold text-amber-400 mb-3">Eddie's Defiance</h4>
        <p className="text-dark-200 text-lg mb-4 italic">
          "Do you realize that you're a traitor?" yelled Taggart.<br /><br />
          Eddie asked quietly, "To whom?"
        </p>
        <p className="text-dark-400 text-sm">
          Eddie's calm question cuts through Jim's bluster. Loyalty to what? To
          the railroad Jim is destroying? To the system that punishes competence?
        </p>
      </div>

      <div className="bg-dark-800/50 rounded-xl p-6 border border-dark-700 my-6">
        <p className="text-dark-200 text-lg mb-4 italic">
          "You won't find her. She won't be back. I'm glad she won't. You can starve,
          you can close the railroad, you can throw me in jail, you can have me shot—
          what does it matter? I won't tell you where she is."
        </p>
      </div>

      <Callout type="note">
        <p>
          <strong>The Loyal Serf:</strong> Eddie, whom Jim dismisses as a "feudal serf,"
          shows more integrity than all the executives combined. He is willing to face
          any punishment rather than betray Dagny's trust.
        </p>
      </Callout>

      {/* Dagny Returns */}
      <h2 className="text-2xl font-semibold mt-10 mb-4">Dagny's Return</h2>

      <p className="my-4">
        In the middle of Jim's tirade, the door opens—and Dagny stands in the doorway.
        She has returned not because anyone summoned her, but because she heard about
        the tunnel disaster and knew what it would mean for the railroad:
      </p>

      <div className="bg-dark-800/50 rounded-xl p-6 border border-dark-700 my-6">
        <p className="text-dark-200 text-lg mb-4">
          She wore a wrinkled cotton dress, and her hair was disheveled by hours of
          driving. Her face had aged, not by means of lines, but by means of a still,
          naked look stripped of any quality save ruthlessness.
        </p>
        <p className="text-dark-400 text-sm">
          Yet the first response throughout the room was relief—a gasp that went
          through everyone present. Eddie collapsed at his desk, his shoulders shaking
          with sobs.
        </p>
      </div>

      <p className="my-4">
        Dagny walks past Jim without acknowledgment and goes to her office. When Jim
        follows, screaming that the disaster was her fault for leaving, she does not
        even hear him. He has become irrelevant to her.
      </p>

      {/* The Triangle */}
      <h2 className="text-2xl font-semibold mt-10 mb-4">The Confrontation</h2>

      <p className="my-4">
        The chapter reaches its climax when Rearden discovers Francisco at Dagny's
        apartment. The man Rearden has grown to love as a friend—and to hate as a
        betrayer—is there with the woman Rearden loves. The truth comes crashing down:
      </p>

      <div className="bg-dark-800/50 rounded-xl p-6 border border-amber-600/30 my-6">
        <h4 className="font-semibold text-amber-400 mb-3">The Question</h4>
        <p className="text-dark-200 text-lg mb-4 italic">
          "Is this the woman you love?"<br /><br />
          Francisco closed his eyes.<br /><br />
          "Don't ask him that!" The cry was Dagny's.<br /><br />
          "Is this the woman you love?"<br /><br />
          Francisco answered, looking at her, "Yes."
        </p>
      </div>

      <p className="my-4">
        Rearden's hand rises and strikes Francisco across the face. What follows is one
        of the novel's most powerful moments—Francisco's absolute stillness as he refuses
        to fight back:
      </p>

      <div className="bg-dark-800/50 rounded-xl p-6 border border-dark-700 my-6">
        <p className="text-dark-200 text-lg mb-4 italic">
          "Francisco's hands were the first thing she saw. The heir of the d'Anconias
          stood thrown back against a table, clasping the edge behind him, not to support
          himself, but to stop his own hands... She saw his convulsed fingers struggling
          to grow fast to the table's edge, she wondered which would break first, the
          wood of the table or the bones of the man."
        </p>
        <p className="text-dark-400 text-sm">
          Dagny knew that Rearden's life hung in the balance—if Francisco released his
          grip, he could kill Rearden with a single blow. But he does not move.
        </p>
      </div>

      <CardGrid>
        <Card>
          <h4 className="font-semibold text-amber-400 mb-2">Rearden's Rage</h4>
          <p className="text-sm text-dark-300">
            Driven by the discovery that Francisco—whom he loved as a friend—has
            been loving the same woman. His blow is the release of years of confusion.
          </p>
        </Card>
        <Card>
          <h4 className="font-semibold text-amber-400 mb-2">Francisco's Restraint</h4>
          <p className="text-sm text-dark-300">
            Refuses to fight back—not from weakness but from love. He will not harm
            the man Dagny loves, even to defend himself.
          </p>
        </Card>
        <Card>
          <h4 className="font-semibold text-amber-400 mb-2">Dagny's Position</h4>
          <p className="text-sm text-dark-300">
            Caught between two men she loves—watching one strike the other while
            knowing that both deserve her loyalty.
          </p>
        </Card>
        <Card>
          <h4 className="font-semibold text-amber-400 mb-2">The Truth Revealed</h4>
          <p className="text-sm text-dark-300">
            Francisco's admission that he loves Dagny exposes the hidden connection
            between all three—and the years of unspoken pain.
          </p>
        </Card>
      </CardGrid>

      {/* The Aftermath */}
      <h2 className="text-2xl font-semibold mt-10 mb-4">The Aftermath</h2>

      <p className="my-4">
        After Francisco leaves, Dagny and Rearden must confront what has happened.
        Rearden realizes the full weight of his error—not just in striking Francisco,
        but in all the ways he has misunderstood the situation:
      </p>

      <div className="bg-dark-800/50 rounded-xl p-6 border border-amber-600/30 my-6">
        <h4 className="font-semibold text-amber-400 mb-3">Understanding</h4>
        <p className="text-dark-200 text-lg mb-4">
          Rearden sees that Francisco accepted the blow without retaliation—not from
          cowardice but from something he cannot yet name. He begins to understand that
          Francisco's apparent betrayals may not be what they seemed.
        </p>
      </div>

      <Callout type="warning">
        <p>
          <strong>The Complexity of Love:</strong> The confrontation shows that love is
          not simple possession but recognition of value. All three people love with
          integrity—and their pain comes not from weakness but from the impossibility
          of their situation in a world that demands they betray their values.
        </p>
      </Callout>

      {/* Lillian's Weapon */}
      <h2 className="text-2xl font-semibold mt-10 mb-4">Lillian's Blackmail</h2>

      <p className="my-4">
        The chapter also reveals how Lillian discovered the relationship between Dagny
        and Rearden—and how she plans to use it. She meets Dagny at the train station,
        having found roses in Rearden's compartment:
      </p>

      <div className="bg-dark-800/50 rounded-xl p-6 border border-dark-700 my-6">
        <p className="text-dark-200 text-lg mb-4 italic">
          "It's Dagny Taggart who's your mistress, isn't she?"<br /><br />
          He did not answer.<br /><br />
          "Yes," he answered calmly.
        </p>
        <p className="text-dark-400 text-sm">
          Rearden's calm admission shows how far he has come—he no longer feels guilty
          for loving Dagny.
        </p>
      </div>

      <p className="my-4">
        Lillian demands that Rearden give up Dagny, threatening to expose the affair.
        His response is absolute:
      </p>

      <div className="bg-dark-800/50 rounded-xl p-6 border border-amber-600/30 my-6">
        <p className="text-dark-200 text-lg mb-4 italic">
          "Lillian, if you wish to discuss it, there's one thing you'd better understand:
          nothing on earth will make me give it up."
        </p>
      </div>

      {/* Key Themes */}
      <h2 className="text-2xl font-semibold mt-10 mb-4">Key Themes</h2>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 my-6">
        <div className="bg-dark-800/50 rounded-xl p-4 border border-dark-700">
          <h3 className="text-lg font-semibold text-amber-400 mb-2">Love as Value-Response</h3>
          <p className="text-dark-300 text-sm">All three protagonists love with integrity—their pain comes from circumstance, not from any failure of feeling.</p>
        </div>
        <div className="bg-dark-800/50 rounded-xl p-4 border border-dark-700">
          <h3 className="text-lg font-semibold text-amber-400 mb-2">Restraint as Strength</h3>
          <p className="text-dark-300 text-sm">Francisco's refusal to fight back shows the ultimate strength—controlling violence when violence would be easy.</p>
        </div>
        <div className="bg-dark-800/50 rounded-xl p-4 border border-dark-700">
          <h3 className="text-lg font-semibold text-amber-400 mb-2">Loyalty Beyond Orders</h3>
          <p className="text-dark-300 text-sm">Eddie's defiance of Jim shows that true loyalty is to values, not to persons or positions.</p>
        </div>
        <div className="bg-dark-800/50 rounded-xl p-4 border border-dark-700">
          <h3 className="text-lg font-semibold text-amber-400 mb-2">The End of Shame</h3>
          <p className="text-dark-300 text-sm">Rearden's calm admission to Lillian shows that he has overcome the guilt that once chained him.</p>
        </div>
      </div>

      {/* Character Development */}
      <h2 className="text-2xl font-semibold mt-10 mb-4">Character Development</h2>

      <div className="space-y-4 my-6">
        <div className="bg-dark-800/50 rounded-xl p-4 border border-dark-700">
          <h4 className="font-semibold text-amber-400 mb-2">Hank Rearden</h4>
          <p className="text-dark-300 text-sm">
            Reaches the end of his tolerance—and in his rage, glimpses something he
            cannot yet understand about Francisco. His admission to Lillian shows
            his growth, but his violence toward Francisco shows work still to be done.
          </p>
        </div>
        <div className="bg-dark-800/50 rounded-xl p-4 border border-dark-700">
          <h4 className="font-semibold text-amber-400 mb-2">Francisco d'Anconia</h4>
          <p className="text-dark-300 text-sm">
            Reveals the depth of his love for Dagny—and his willingness to suffer
            Rearden's rage without retaliation. His restraint is not weakness but
            the ultimate expression of his values.
          </p>
        </div>
        <div className="bg-dark-800/50 rounded-xl p-4 border border-dark-700">
          <h4 className="font-semibold text-amber-400 mb-2">Dagny Taggart</h4>
          <p className="text-dark-300 text-sm">
            Returns to the railroad knowing it may be futile—but unable to abandon
            what she loves while any chance remains. Her return is not surrender
            but a choice to fight as long as fighting is possible.
          </p>
        </div>
        <div className="bg-dark-800/50 rounded-xl p-4 border border-dark-700">
          <h4 className="font-semibold text-amber-400 mb-2">Eddie Willers</h4>
          <p className="text-dark-300 text-sm">
            Shows the quiet heroism of the honest man. He cannot follow the strikers
            into withdrawal, but he will not betray Dagny to the looters. His loyalty
            is absolute.
          </p>
        </div>
      </div>

      {/* Conclusion of Part Two */}
      <h2 className="text-2xl font-semibold mt-10 mb-4">End of Part Two</h2>

      <div className="bg-dark-800/50 rounded-xl p-6 border border-amber-600/30 my-6">
        <h4 className="font-semibold text-amber-400 mb-3">Either-Or</h4>
        <p className="text-dark-200 text-lg mb-4">
          Part Two ends with all the conflicts at their peak: Dagny has returned but
          the railroad is crippled; Rearden has overcome his guilt but faces blackmail;
          Francisco has revealed his love but faces Rearden's hatred. The title
          "Either-Or" has been fulfilled—each character has been forced to choose
          between competing values.
        </p>
        <p className="text-dark-400 text-sm">
          Part Three, "A Is A," will resolve these conflicts through the revelation
          of the hidden world where the strikers have built their refuge—and through
          Dagny's discovery of the answer to the question: "Who is John Galt?"
        </p>
      </div>

      {/* Discussion Questions */}
      <h2 className="text-2xl font-semibold mt-10 mb-4">Discussion Questions</h2>

      <div className="space-y-4 my-6">
        <div className="bg-dark-800/50 rounded-xl p-4 border border-dark-700">
          <p className="text-dark-200">1. When Jim demands to know where Dagny is, Eddie asks quietly, "To whom?" am I a traitor. What does this question reveal about the nature of loyalty? Can loyalty to a person conflict with loyalty to an institution or idea?</p>
        </div>
        <div className="bg-dark-800/50 rounded-xl p-4 border border-dark-700">
          <p className="text-dark-200">2. Francisco refuses to fight back when Rearden strikes him, restraining himself with visible effort. Is his restraint a sign of strength or weakness? What does it reveal about his values and his feelings for both Dagny and Rearden?</p>
        </div>
        <div className="bg-dark-800/50 rounded-xl p-4 border border-dark-700">
          <p className="text-dark-200">3. Rearden tells Lillian that "nothing on earth will make me give it up" when she demands he end his relationship with Dagny. How has Rearden changed from the man who once accepted guilt for his desires? What enabled this transformation?</p>
        </div>
        <div className="bg-dark-800/50 rounded-xl p-4 border border-dark-700">
          <p className="text-dark-200">4. The chapter is titled "The Face Without Pain or Fear or Guilt." What would it mean to live without these burdens? Is such a state achievable, and would it be desirable?</p>
        </div>
      </div>

      {/* Key Takeaways */}
      <h2 className="text-2xl font-semibold mt-10 mb-4">Key Takeaways</h2>

      <div className="bg-dark-800 rounded-lg p-6">
        <ul className="space-y-3">
          <li className="flex items-start gap-3">
            <span className="text-amber-400 font-bold">1.</span>
            <span>
              <strong>Eddie refuses to betray Dagny</strong>—showing that loyalty to
              values transcends loyalty to orders or positions.
            </span>
          </li>
          <li className="flex items-start gap-3">
            <span className="text-amber-400 font-bold">2.</span>
            <span>
              <strong>Dagny returns</strong> because she cannot abandon the railroad
              while any hope remains—her return is a choice, not a surrender.
            </span>
          </li>
          <li className="flex items-start gap-3">
            <span className="text-amber-400 font-bold">3.</span>
            <span>
              <strong>Francisco admits he loves Dagny</strong>—and accepts Rearden's
              blow without retaliation, showing strength through restraint.
            </span>
          </li>
          <li className="flex items-start gap-3">
            <span className="text-amber-400 font-bold">4.</span>
            <span>
              <strong>Rearden tells Lillian</strong> that nothing will make him give up
              Dagny—demonstrating his freedom from the guilt that once controlled him.
            </span>
          </li>
          <li className="flex items-start gap-3">
            <span className="text-amber-400 font-bold">5.</span>
            <span>
              <strong>Part Two concludes</strong> with all conflicts at their peak,
              setting up the resolution to come in Part Three: "A Is A."
            </span>
          </li>
        </ul>
      </div>
    </LessonLayout>
  );
}
