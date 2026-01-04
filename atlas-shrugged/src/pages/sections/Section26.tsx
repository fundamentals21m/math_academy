import { LessonLayout } from '../../components/layout/LessonLayout';
import { Callout } from '../../components/common/Callout';
import { Card, CardGrid } from '../../components/common/Card';

export default function Section26() {
  return (
    <LessonLayout sectionId={26}>
      {/* Opening Quote */}
      <blockquote className="border-l-4 border-amber-500 pl-6 py-2 my-6 text-xl italic text-dark-300">
        "For twelve years, you have been asking: Who is John Galt? This is John Galt speaking."
        <footer className="text-sm text-dark-500 mt-2 not-italic">
          — The opening words of Galt's radio address
        </footer>
      </blockquote>

      {/* Introduction */}
      <p className="text-lg text-dark-300 mb-6">
        "This Is John Galt Speaking" is the philosophical climax of <em>Atlas Shrugged</em>.
        John Galt commandeers the nation's radio airwaves to deliver a three-hour speech explaining
        the strike, condemning the morality of sacrifice, and presenting the philosophy of rational
        self-interest. It is Rand's fullest statement of Objectivism in the novel.
      </p>

      <Callout type="info">
        <p>
          <strong>The Speech:</strong> Galt's radio address runs approximately 60 pages in the
          original novel—the longest speech in literary fiction. It presents the complete
          philosophical system that underlies the novel's narrative.
        </p>
      </Callout>

      {/* Chapter Summary */}
      <h2 className="text-2xl font-semibold mt-10 mb-4">Chapter Summary</h2>

      <p className="my-4">
        The nation's airwaves have been reserved for a special broadcast by the head of state,
        Mr. Thompson, who plans to announce new emergency measures. But when the broadcast begins,
        a different voice speaks: John Galt has seized control of the airwaves. For three hours,
        he addresses the nation, explaining who he is, what he has done, and why.
      </p>

      <p className="my-4">
        Galt explains that the world's crisis is not economic or political—it is moral. The men
        of the mind have gone on strike because the world demanded that they sacrifice their
        achievements, their values, their lives. He announces that the strike will continue until
        the world abandons the morality of sacrifice and embraces the ethics of rational self-interest.
      </p>

      <div className="bg-dark-800/50 rounded-xl p-6 border border-amber-600/30 my-6">
        <h4 className="font-semibold text-amber-400 mb-3">The Core Message</h4>
        <p className="text-dark-200 text-lg mb-4">
          "You have heard it said that this is an age of moral crisis... You have cried that
          man's sins are destroying the world and you have cursed human nature for its
          unwillingness to practice the virtues you demanded. Since virtue, to you, consists
          of sacrifice, you have demanded more sacrifices at every successive disaster."
        </p>
        <p className="text-dark-400 text-sm">
          Galt diagnosing the world's crisis as the inevitable result of a morality of sacrifice.
        </p>
      </div>

      {/* Key Philosophical Arguments */}
      <h2 className="text-2xl font-semibold mt-10 mb-4">Key Philosophical Arguments</h2>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 my-6">
        <div className="bg-dark-800/50 rounded-xl p-4 border border-dark-700">
          <h3 className="text-lg font-semibold text-amber-400 mb-2">Existence Exists</h3>
          <p className="text-dark-300 text-sm">Reality is objective—it exists independent of wishes, prayers, or feelings. A is A. Facts are facts.</p>
        </div>
        <div className="bg-dark-800/50 rounded-xl p-4 border border-dark-700">
          <h3 className="text-lg font-semibold text-amber-400 mb-2">Reason is Man's Tool</h3>
          <p className="text-dark-300 text-sm">The mind is man's basic means of survival. Thinking is not automatic—it requires choice and effort.</p>
        </div>
        <div className="bg-dark-800/50 rounded-xl p-4 border border-dark-700">
          <h3 className="text-lg font-semibold text-amber-400 mb-2">Man's Life is the Standard</h3>
          <p className="text-dark-300 text-sm">Morality exists to guide human life. What sustains life is good; what destroys it is evil.</p>
        </div>
        <div className="bg-dark-800/50 rounded-xl p-4 border border-dark-700">
          <h3 className="text-lg font-semibold text-amber-400 mb-2">Rational Self-Interest</h3>
          <p className="text-dark-300 text-sm">The proper moral purpose is the pursuit of one's own happiness—not through others' sacrifice but through productive achievement.</p>
        </div>
      </div>

      {/* The Three Pillars */}
      <h2 className="text-2xl font-semibold mt-10 mb-4">The Three Pillars of Objectivism</h2>

      <CardGrid>
        <Card>
          <h4 className="font-semibold text-amber-400 mb-2">Metaphysics: Objective Reality</h4>
          <p className="text-sm text-dark-300">
            Reality exists independent of consciousness. Wishing doesn't make it so. The universe
            is not subject to human desires or divine whims—it simply is what it is.
          </p>
        </Card>
        <Card>
          <h4 className="font-semibold text-amber-400 mb-2">Epistemology: Reason</h4>
          <p className="text-sm text-dark-300">
            Reason—the faculty that identifies and integrates the material provided by the
            senses—is man's only means of knowledge. Faith and feeling are not valid guides.
          </p>
        </Card>
        <Card>
          <h4 className="font-semibold text-amber-400 mb-2">Ethics: Rational Self-Interest</h4>
          <p className="text-sm text-dark-300">
            Each person's own life is his highest value. The moral purpose of life is the
            achievement of one's own happiness through productive work and rational values.
          </p>
        </Card>
        <Card>
          <h4 className="font-semibold text-amber-400 mb-2">Politics: Individual Rights</h4>
          <p className="text-sm text-dark-300">
            The only proper social system is one that recognizes individual rights—including
            property rights—and bans the initiation of physical force.
          </p>
        </Card>
      </CardGrid>

      {/* The Speech's Structure */}
      <h2 className="text-2xl font-semibold mt-10 mb-4">The Speech's Structure</h2>

      <div className="space-y-4 my-6">
        <div className="flex items-start gap-4 p-4 bg-dark-800/50 rounded-lg border border-dark-700">
          <span className="w-8 h-8 flex items-center justify-center bg-amber-600 rounded-full text-white font-bold text-sm shrink-0">1</span>
          <div>
            <p className="font-semibold text-dark-100">The Diagnosis</p>
            <p className="text-sm text-dark-400">Galt identifies the world's crisis as moral, not economic—the result of a philosophy that condemns the good</p>
          </div>
        </div>
        <div className="flex items-start gap-4 p-4 bg-dark-800/50 rounded-lg border border-dark-700">
          <span className="w-8 h-8 flex items-center justify-center bg-amber-600 rounded-full text-white font-bold text-sm shrink-0">2</span>
          <div>
            <p className="font-semibold text-dark-100">The Metaphysics</p>
            <p className="text-sm text-dark-400">He establishes that reality is objective, that A is A, that existence exists independent of consciousness</p>
          </div>
        </div>
        <div className="flex items-start gap-4 p-4 bg-dark-800/50 rounded-lg border border-dark-700">
          <span className="w-8 h-8 flex items-center justify-center bg-amber-600 rounded-full text-white font-bold text-sm shrink-0">3</span>
          <div>
            <p className="font-semibold text-dark-100">The Epistemology</p>
            <p className="text-sm text-dark-400">He argues that reason is man's only means of knowledge, and that evasion of reality is the root of all evil</p>
          </div>
        </div>
        <div className="flex items-start gap-4 p-4 bg-dark-800/50 rounded-lg border border-dark-700">
          <span className="w-8 h-8 flex items-center justify-center bg-amber-600 rounded-full text-white font-bold text-sm shrink-0">4</span>
          <div>
            <p className="font-semibold text-dark-100">The Ethics</p>
            <p className="text-sm text-dark-400">He presents rational self-interest as the proper moral code and condemns the morality of sacrifice</p>
          </div>
        </div>
        <div className="flex items-start gap-4 p-4 bg-dark-800/50 rounded-lg border border-dark-700">
          <span className="w-8 h-8 flex items-center justify-center bg-amber-600 rounded-full text-white font-bold text-sm shrink-0">5</span>
          <div>
            <p className="font-semibold text-dark-100">The Politics</p>
            <p className="text-sm text-dark-400">He argues for laissez-faire capitalism as the only system consistent with individual rights</p>
          </div>
        </div>
        <div className="flex items-start gap-4 p-4 bg-dark-800/50 rounded-lg border border-dark-700">
          <span className="w-8 h-8 flex items-center justify-center bg-amber-600 rounded-full text-white font-bold text-sm shrink-0">6</span>
          <div>
            <p className="font-semibold text-dark-100">The Demand</p>
            <p className="text-sm text-dark-400">He announces that the strike will end only when the world accepts the morality of life</p>
          </div>
        </div>
      </div>

      <Callout type="warning">
        <p>
          <strong>The World's Response:</strong> The speech throws the looters into panic. They
          cannot refute Galt's arguments, but they cannot accept them either. Their only remaining
          option is force—which leads to the novel's final confrontation.
        </p>
      </Callout>

      {/* Key Quotations */}
      <h2 className="text-2xl font-semibold mt-10 mb-4">Key Quotations from the Speech</h2>

      <div className="space-y-4 my-6">
        <div className="bg-dark-800/50 rounded-xl p-4 border border-amber-600/30">
          <p className="text-dark-200 italic">
            "You have been taught that morality is a code of behavior imposed on you by whim...
            the purpose of which is to enable you to make the kind of choices you would have
            made without it."
          </p>
        </div>
        <div className="bg-dark-800/50 rounded-xl p-4 border border-amber-600/30">
          <p className="text-dark-200 italic">
            "Man's mind is his basic tool of survival... To remain alive, he must think."
          </p>
        </div>
        <div className="bg-dark-800/50 rounded-xl p-4 border border-amber-600/30">
          <p className="text-dark-200 italic">
            "The man who refuses to judge, who neither agrees nor disagrees, who declares that
            there are no absolutes and believes that he escapes responsibility, is the man
            responsible for all the blood that is now spilled in the world."
          </p>
        </div>
        <div className="bg-dark-800/50 rounded-xl p-4 border border-amber-600/30">
          <p className="text-dark-200 italic">
            "I swear by my life and my love of it that I will never live for the sake of another
            man, nor ask another man to live for mine."
          </p>
        </div>
      </div>

      {/* Character Reactions */}
      <h2 className="text-2xl font-semibold mt-10 mb-4">Character Reactions</h2>

      <p className="my-4">
        The speech affects different characters in different ways, revealing their fundamental
        natures:
      </p>

      <CardGrid>
        <Card>
          <h4 className="font-semibold text-amber-400 mb-2">The Looters</h4>
          <p className="text-sm text-dark-300">
            Wesley Mouch, James Taggart, and their allies are terrified. They cannot answer
            Galt's arguments but refuse to accept his conclusions. Their only recourse is force.
          </p>
        </Card>
        <Card>
          <h4 className="font-semibold text-amber-400 mb-2">Dagny</h4>
          <p className="text-sm text-dark-300">
            Hearing Galt's voice on the radio, Dagny feels a complex mix of pride, fear for
            his safety, and recognition that he has done what she could not: named the truth.
          </p>
        </Card>
        <Card>
          <h4 className="font-semibold text-amber-400 mb-2">Hank Rearden</h4>
          <p className="text-sm text-dark-300">
            The speech gives Rearden the words he has been seeking. He finally understands
            why he has always felt guilty for his achievements—and why he should not.
          </p>
        </Card>
        <Card>
          <h4 className="font-semibold text-amber-400 mb-2">The People</h4>
          <p className="text-sm text-dark-300">
            Ordinary Americans listen in stunned silence. Many are shaken—they have never
            heard their own suppressed thoughts articulated so clearly.
          </p>
        </Card>
      </CardGrid>

      <Callout type="note">
        <p>
          <strong>The Title's Significance:</strong> "This Is John Galt Speaking" answers the
          question that has haunted the novel from its first line. John Galt is no longer a
          myth or a question—he is a man with a message, and the world must respond.
        </p>
      </Callout>

      {/* Discussion Questions */}
      <h2 className="text-2xl font-semibold mt-10 mb-4">Discussion Questions</h2>

      <div className="space-y-4 my-6">
        <div className="bg-dark-800/50 rounded-xl p-4 border border-dark-700">
          <p className="text-dark-200">1. Galt's speech argues that "A is A"—that reality is objective and cannot be changed by wishes or beliefs. How would philosophers who emphasize the role of perspective, interpretation, or social construction respond to this claim? Is objective reality as straightforward as Galt suggests?</p>
        </div>
        <div className="bg-dark-800/50 rounded-xl p-4 border border-dark-700">
          <p className="text-dark-200">2. The speech condemns "the man who refuses to judge" as responsible for "all the blood that is now spilled in the world." Do you agree that moral neutrality is itself a moral failing? Are there situations where withholding judgment is appropriate or even virtuous?</p>
        </div>
        <div className="bg-dark-800/50 rounded-xl p-4 border border-dark-700">
          <p className="text-dark-200">3. Galt presents rational self-interest as the only proper moral code. Critics argue this philosophy ignores social bonds, family obligations, and the value of community. How might Rand respond to these criticisms? Is there room in her philosophy for genuine concern for others?</p>
        </div>
        <div className="bg-dark-800/50 rounded-xl p-4 border border-dark-700">
          <p className="text-dark-200">4. The speech runs for three hours in the novel. Why do you think Rand chose to include such an extensive philosophical treatise within a work of fiction? Does embedding philosophy in narrative strengthen or weaken its persuasive power?</p>
        </div>
      </div>

      {/* Key Takeaways */}
      <h2 className="text-2xl font-semibold mt-10 mb-4">Key Takeaways</h2>

      <div className="bg-dark-800 rounded-lg p-6">
        <ul className="space-y-3">
          <li className="flex items-start gap-3">
            <span className="text-amber-400 font-bold">1.</span>
            <span>
              <strong>The crisis is moral:</strong> The world's collapse stems from a philosophy
              that condemns reason, production, and self-interest as evil.
            </span>
          </li>
          <li className="flex items-start gap-3">
            <span className="text-amber-400 font-bold">2.</span>
            <span>
              <strong>A is A:</strong> Reality is objective. Facts are facts. Wishing and
              pretending cannot change the nature of existence.
            </span>
          </li>
          <li className="flex items-start gap-3">
            <span className="text-amber-400 font-bold">3.</span>
            <span>
              <strong>Reason is man's survival tool:</strong> The mind is not a social product
              to be sacrificed—it is the individual's means of living.
            </span>
          </li>
          <li className="flex items-start gap-3">
            <span className="text-amber-400 font-bold">4.</span>
            <span>
              <strong>Self-interest is moral:</strong> The pursuit of one's own happiness through
              productive work is the proper purpose of life.
            </span>
          </li>
          <li className="flex items-start gap-3">
            <span className="text-amber-400 font-bold">5.</span>
            <span>
              <strong>The strike continues:</strong> The men of the mind will not return until
              the world abandons the morality that has enslaved them.
            </span>
          </li>
        </ul>
      </div>
    </LessonLayout>
  );
}
