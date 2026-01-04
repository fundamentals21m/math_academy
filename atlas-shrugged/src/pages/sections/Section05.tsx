import { LessonLayout } from '../../components/layout/LessonLayout';
import { Callout } from '../../components/common/Callout';
import { Card, CardGrid } from '../../components/common/Card';

export default function Section05() {
  return (
    <LessonLayout sectionId={5}>
      {/* Opening Quote */}
      <blockquote className="border-l-4 border-amber-500 pl-6 py-2 my-6 text-xl italic text-dark-300">
        "The purpose of philosophy is not to help men find the meaning of life, but to
        prove to them that there isn't any."
        <footer className="text-sm text-dark-500 mt-2 not-italic">
          — Dr. Simon Pritchett
        </footer>
      </blockquote>

      {/* Introduction */}
      <p className="text-lg text-dark-300 mb-6">
        Chapter VI explores the conflict between those who value commerce and production
        and those who claim to represent "higher" non-commercial values. Through Dagny's
        meeting with <strong className="text-amber-400">Dr. Robert Stadler</strong> and
        the State Science Institute's attack on Rearden Metal, we see how intellectuals
        betray truth for political expediency.
      </p>

      <Callout type="info">
        <p>
          <strong>The title "The Non-Commercial"</strong> refers to those who claim to be
          above mere commerce—intellectuals, scientists, and artists who profess contempt
          for business while depending on its products for their existence.
        </p>
      </Callout>

      {/* Chapter Summary */}
      <h2 className="text-2xl font-semibold mt-10 mb-4">Chapter Summary</h2>

      <p className="my-4">
        The chapter opens with the <strong className="text-amber-400">State Science Institute</strong>
        releasing a statement attacking Rearden Metal as unsafe. Although the statement contains
        no actual evidence against the metal, its vague insinuations and appeals to authority
        create doubt in the public mind and threaten the Rio Norte Line project.
      </p>

      <p className="my-4">
        Dagny goes to confront <strong className="text-amber-400">Dr. Robert Stadler</strong>,
        the brilliant physicist who heads the Institute. She hopes that this man—once considered
        one of the greatest scientific minds of the age—will speak the truth about Rearden Metal.
        Instead, she discovers that Stadler has sacrificed his integrity for political survival.
      </p>

      <div className="bg-dark-800/50 rounded-xl p-6 border border-amber-600/30 my-6">
        <h4 className="font-semibold text-amber-400 mb-3">The State Science Institute's Statement</h4>
        <p className="text-dark-200 text-lg mb-4">
          "It is the opinion of this Institute that the metal known as Rearden Metal is
          of dubious value... We are unable to recommend it for any structural purpose..."
        </p>
        <p className="text-dark-400 text-sm">
          The statement provides no evidence, no data, no scientific argument—just vague
          insinuations designed to destroy public confidence in Rearden Metal.
        </p>
      </div>

      {/* Dr. Robert Stadler */}
      <h2 className="text-2xl font-semibold mt-10 mb-4">Dr. Robert Stadler</h2>

      <p className="my-4">
        Dr. Stadler represents the tragedy of genius without integrity. Once one of the
        greatest physicists in the world, he has allowed himself to become dependent on
        government funding and political favor. When Dagny confronts him about the Institute's
        false statement, he admits that Rearden Metal is "a remarkable thing" but refuses
        to say so publicly.
      </p>

      <CardGrid>
        <Card>
          <h4 className="font-semibold text-amber-400 mb-2">Scientific Achievement</h4>
          <p className="text-sm text-dark-300">
            Stadler made genuine contributions to physics and was once considered
            a hero of the mind. His early work on the nature of matter was brilliant
            and groundbreaking.
          </p>
        </Card>
        <Card>
          <h4 className="font-semibold text-amber-400 mb-2">Moral Compromise</h4>
          <p className="text-sm text-dark-300">
            Rather than maintain his independence, Stadler accepted government funding
            and position. He now must serve political masters rather than truth.
          </p>
        </Card>
        <Card>
          <h4 className="font-semibold text-amber-400 mb-2">Contempt for Reality</h4>
          <p className="text-sm text-dark-300">
            Stadler considers practical matters "beneath" him, yet the practical
            consequences of his compromise destroy his ability to pursue truth.
          </p>
        </Card>
        <Card>
          <h4 className="font-semibold text-amber-400 mb-2">The Betrayal</h4>
          <p className="text-sm text-dark-300">
            When asked to tell the truth about Rearden Metal, Stadler refuses,
            choosing political safety over scientific integrity.
          </p>
        </Card>
      </CardGrid>

      {/* The Confrontation */}
      <h2 className="text-2xl font-semibold mt-10 mb-4">Dagny Confronts Stadler</h2>

      <div className="bg-dark-800/50 rounded-xl p-6 border border-dark-700 my-6">
        <h4 className="font-semibold text-amber-400 mb-3">The Exchange</h4>
        <div className="space-y-4 text-dark-200">
          <p>
            <strong>Dagny:</strong> "Do you know the nature of Rearden Metal? Have you
            examined it?"
          </p>
          <p>
            <strong>Stadler:</strong> "Yes, I know. From such information as I've seen,
            it appears to be a remarkable thing. Quite a brilliant achievement."
          </p>
          <p>
            <strong>Dagny:</strong> "You know the truth, yet you will not state it publicly?"
          </p>
          <p>
            <strong>Stadler:</strong> "Miss Taggart, you are using an abstract term, when
            we are dealing with a matter of practical reality."
          </p>
        </div>
      </div>

      <Callout type="warning">
        <p>
          <strong>The Separation of Truth and Practice:</strong> Stadler claims that truth
          is only valid in "pure science" and doesn't apply to practical matters. This
          separation allows him to know Rearden Metal is good while refusing to say so—a
          betrayal of the very purpose of science.
        </p>
      </Callout>

      {/* The Equalization of Opportunity Bill */}
      <h2 className="text-2xl font-semibold mt-10 mb-4">The Equalization of Opportunity Bill</h2>

      <p className="my-4">
        The chapter also advances the plot of the <strong className="text-amber-400">Equalization
        of Opportunity Bill</strong>, which would limit how many businesses any individual can own.
        This legislation is aimed directly at Hank Rearden, who owns not just his steel mills but
        also ore mines and other operations that give him independence from other suppliers.
      </p>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 my-6">
        <div className="bg-dark-800/50 rounded-xl p-4 border border-dark-700">
          <h3 className="text-lg font-semibold text-amber-400 mb-2">The Bill's Purpose</h3>
          <p className="text-dark-300 text-sm">
            The stated purpose is to "equalize opportunity" by preventing anyone from
            owning too much. The real purpose is to strip Rearden of his ore mines and
            make him dependent on Orren Boyle and other incompetent suppliers.
          </p>
        </div>
        <div className="bg-dark-800/50 rounded-xl p-4 border border-dark-700">
          <h3 className="text-lg font-semibold text-amber-400 mb-2">The Consequences</h3>
          <p className="text-dark-300 text-sm">
            If passed, Rearden will be forced to sell his ore mines to the very competitors
            who cannot compete with him honestly—rewarding incompetence and punishing
            achievement.
          </p>
        </div>
      </div>

      {/* Key Themes */}
      <h2 className="text-2xl font-semibold mt-10 mb-4">Key Themes Developed</h2>

      <div className="space-y-4 my-6">
        <div className="p-4 bg-dark-800/50 rounded-lg border border-dark-700">
          <h4 className="font-semibold text-amber-400 mb-2">The Corruption of Science</h4>
          <p className="text-dark-300">
            When science becomes dependent on government, it loses its independence and
            becomes a tool of political manipulation. The State Science Institute exists
            not to discover truth but to serve political interests.
          </p>
        </div>
        <div className="p-4 bg-dark-800/50 rounded-lg border border-dark-700">
          <h4 className="font-semibold text-amber-400 mb-2">The Mind-Body Dichotomy</h4>
          <p className="text-dark-300">
            Stadler's claim that truth applies only to "pure science" and not to practical
            matters reflects a false separation between mind and reality. Rand rejects this
            dichotomy—truth is truth, whether in the laboratory or the marketplace.
          </p>
        </div>
        <div className="p-4 bg-dark-800/50 rounded-lg border border-dark-700">
          <h4 className="font-semibold text-amber-400 mb-2">The Price of Compromise</h4>
          <p className="text-dark-300">
            Stadler's compromise with the government has destroyed his ability to pursue
            the very values he claims to hold. By seeking safety, he has lost everything
            that made him great.
          </p>
        </div>
      </div>

      {/* Notable Events */}
      <h2 className="text-2xl font-semibold mt-10 mb-4">Notable Events</h2>

      <div className="space-y-4 my-6">
        <div className="flex items-start gap-4 p-4 bg-dark-800/50 rounded-lg border border-dark-700">
          <span className="w-8 h-8 flex items-center justify-center bg-amber-600 rounded-full text-white font-bold text-sm shrink-0">1</span>
          <div>
            <p className="font-semibold text-dark-100">State Science Institute's Statement</p>
            <p className="text-sm text-dark-400 mt-1">
              The Institute releases a vague attack on Rearden Metal, providing no evidence
              but creating doubt in the public mind.
            </p>
          </div>
        </div>
        <div className="flex items-start gap-4 p-4 bg-dark-800/50 rounded-lg border border-dark-700">
          <span className="w-8 h-8 flex items-center justify-center bg-amber-600 rounded-full text-white font-bold text-sm shrink-0">2</span>
          <div>
            <p className="font-semibold text-dark-100">Dagny Confronts Stadler</p>
            <p className="text-sm text-dark-400 mt-1">
              Dagny meets with Dr. Stadler, who admits Rearden Metal is "remarkable"
              but refuses to say so publicly.
            </p>
          </div>
        </div>
        <div className="flex items-start gap-4 p-4 bg-dark-800/50 rounded-lg border border-dark-700">
          <span className="w-8 h-8 flex items-center justify-center bg-amber-600 rounded-full text-white font-bold text-sm shrink-0">3</span>
          <div>
            <p className="font-semibold text-dark-100">The Debate Setup</p>
            <p className="text-sm text-dark-400 mt-1">
              James Taggart arranges for Dagny to debate Bertram Scudder on the radio
              about Rearden Metal, hoping she will fail publicly.
            </p>
          </div>
        </div>
        <div className="flex items-start gap-4 p-4 bg-dark-800/50 rounded-lg border border-dark-700">
          <span className="w-8 h-8 flex items-center justify-center bg-amber-600 rounded-full text-white font-bold text-sm shrink-0">4</span>
          <div>
            <p className="font-semibold text-dark-100">Dagny Refuses the Debate</p>
            <p className="text-sm text-dark-400 mt-1">
              When Dagny learns the debate's real purpose, she walks out, refusing
              to participate in a rigged game.
            </p>
          </div>
        </div>
      </div>

      {/* Dagny's Response */}
      <h2 className="text-2xl font-semibold mt-10 mb-4">Dagny's Response</h2>

      <Callout type="success">
        <p>
          <strong>The John Galt Line:</strong> In response to the attacks on Rearden Metal,
          Dagny decides to form a separate company—the "John Galt Line"—to build the
          Rio Norte Line with Rearden Metal. This bold move puts her personal reputation
          on the line but frees her from the Taggart board's interference.
        </p>
      </Callout>

      <p className="my-4">
        Dagny's decision to name the line after John Galt is an act of defiance. The name
        represents the impossible, the unattainable—everything the looters say cannot be
        achieved. By naming her line after this symbol of despair, she is declaring that
        she will prove them wrong.
      </p>

      {/* Discussion Questions */}
      <h2 className="text-2xl font-semibold mt-10 mb-4">Discussion Questions</h2>

      <div className="space-y-4 my-6">
        <div className="bg-dark-800/50 rounded-xl p-4 border border-dark-700">
          <p className="text-dark-200">1. Dr. Stadler admits privately that Rearden Metal is "a remarkable thing" but refuses to say so publicly. How does his separation of "pure science" from "practical matters" allow him to justify this dishonesty? What are the consequences of this separation?</p>
        </div>
        <div className="bg-dark-800/50 rounded-xl p-4 border border-dark-700">
          <p className="text-dark-200">2. The State Science Institute's statement against Rearden Metal contains no evidence or data, just vague insinuations. How can institutions of authority spread doubt without proof? What makes people accept statements from authority even without supporting evidence?</p>
        </div>
        <div className="bg-dark-800/50 rounded-xl p-4 border border-dark-700">
          <p className="text-dark-200">3. Dagny decides to name her new venture "The John Galt Line" as an act of defiance. Why would she embrace a phrase associated with despair and impossibility? What does this choice reveal about her character?</p>
        </div>
        <div className="bg-dark-800/50 rounded-xl p-4 border border-dark-700">
          <p className="text-dark-200">4. The chapter suggests that intellectuals who claim to be "above" commerce actually depend on it for their existence. Is there a contradiction in condemning the source of one's livelihood? How should we evaluate people who criticize the systems that support them?</p>
        </div>
      </div>

      {/* Key Takeaways */}
      <h2 className="text-2xl font-semibold mt-10 mb-4">Key Takeaways</h2>

      <div className="bg-dark-800 rounded-lg p-6">
        <ul className="space-y-3">
          <li className="flex items-start gap-3">
            <span className="text-amber-400 font-bold">1.</span>
            <span>
              <strong>The State Science Institute</strong> attacks Rearden Metal without
              evidence, showing how science can be corrupted by government dependence.
            </span>
          </li>
          <li className="flex items-start gap-3">
            <span className="text-amber-400 font-bold">2.</span>
            <span>
              <strong>Dr. Stadler</strong> represents the tragedy of genius without integrity—
              he knows the truth but refuses to speak it.
            </span>
          </li>
          <li className="flex items-start gap-3">
            <span className="text-amber-400 font-bold">3.</span>
            <span>
              <strong>The Equalization of Opportunity Bill</strong> threatens to strip
              Rearden of the very operations that make his independence possible.
            </span>
          </li>
          <li className="flex items-start gap-3">
            <span className="text-amber-400 font-bold">4.</span>
            <span>
              <strong>Dagny creates the John Galt Line</strong> as a separate company,
              taking personal responsibility for the success of Rearden Metal.
            </span>
          </li>
          <li className="flex items-start gap-3">
            <span className="text-amber-400 font-bold">5.</span>
            <span>
              <strong>The "non-commercial" claim to be above business</strong> while
              depending on business for their existence and using political power to loot it.
            </span>
          </li>
        </ul>
      </div>
    </LessonLayout>
  );
}
