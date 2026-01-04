import { LessonLayout } from '../../components/layout/LessonLayout';
import { Callout } from '../../components/common/Callout';
import { Card, CardGrid } from '../../components/common/Card';

export default function Section04() {
  return (
    <LessonLayout sectionId={4}>
      {/* Opening Quote */}
      <blockquote className="border-l-4 border-amber-500 pl-6 py-2 my-6 text-xl italic text-dark-300">
        "So you think that money is the root of all evil? Have you ever asked what is
        the root of money?"
        <footer className="text-sm text-dark-500 mt-2 not-italic">
          — Francisco d'Anconia
        </footer>
      </blockquote>

      {/* Introduction */}
      <p className="text-lg text-dark-300 mb-6">
        Chapter V contains one of the most famous passages in Atlas Shrugged: Francisco
        d'Anconia's <strong className="text-amber-400">"Money Speech"</strong> at the
        anniversary party of James and Lillian Taggart. In this chapter, we also see the
        collision between the world of the producers and the world of the looters at a
        society gathering.
      </p>

      <Callout type="info">
        <p>
          <strong>The title "The Climax of the d'Anconias"</strong> refers both to the
          centuries of d'Anconia achievement that Francisco represents, and to the dramatic
          confrontation at the party where Francisco delivers his famous speech.
        </p>
      </Callout>

      {/* Chapter Summary */}
      <h2 className="text-2xl font-semibold mt-10 mb-4">Chapter Summary</h2>

      <p className="my-4">
        The chapter centers on a party at the Rearden home, hosted by <strong className="text-amber-400">Lillian Rearden</strong>.
        The gathering brings together the novel's main characters in a social setting that
        exposes the conflicts between them. Intellectuals like <strong className="text-amber-400">Dr. Pritchett</strong>
        and <strong className="text-amber-400">Balph Eubank</strong> spout nihilistic philosophy, while
        businessmen like James Taggart scheme in corners.
      </p>

      <p className="my-4">
        When a guest makes a casual comment that "money is the root of all evil," Francisco
        d'Anconia—who has been playing the role of idle playboy—suddenly drops his mask and
        delivers a passionate defense of money as a tool of free exchange and human achievement.
      </p>

      <div className="bg-dark-800/50 rounded-xl p-6 border border-amber-600/30 my-6">
        <h4 className="font-semibold text-amber-400 mb-3">The Party Scene</h4>
        <p className="text-dark-200 text-lg mb-4">
          At Lillian's party, intellectuals proclaim that man is worthless, that reason
          is a superstition, and that suffering is the essence of life. Meanwhile, they
          enjoy the products of industry and live off the wealth created by those they despise.
        </p>
        <p className="text-dark-400 text-sm">
          The party represents the cultural establishment that provides intellectual cover
          for the looters' assault on the producers.
        </p>
      </div>

      {/* The Money Speech */}
      <h2 className="text-2xl font-semibold mt-10 mb-4">Francisco's Money Speech</h2>

      <p className="my-4">
        When someone at the party declares that "money is the root of all evil," Francisco
        responds with a detailed philosophical defense of money. This speech is one of the
        novel's most important passages, presenting Rand's view of money as a symbol of
        human achievement and free exchange.
      </p>

      <div className="bg-dark-800/50 rounded-xl p-6 border border-dark-700 my-6">
        <h4 className="font-semibold text-amber-400 mb-3">Key Points of the Money Speech</h4>
        <div className="space-y-4">
          <div>
            <p className="text-dark-200 font-medium">Money as a Tool of Exchange</p>
            <p className="text-dark-400 text-sm mt-1">
              "Money is a tool of exchange, which can't exist unless there are goods
              produced and men able to produce them."
            </p>
          </div>
          <div>
            <p className="text-dark-200 font-medium">The Source of Money</p>
            <p className="text-dark-400 text-sm mt-1">
              "Money is made—before it can be looted or mooched—made by the effort of
              every honest man, each to the extent of his ability."
            </p>
          </div>
          <div>
            <p className="text-dark-200 font-medium">Money and Virtue</p>
            <p className="text-dark-400 text-sm mt-1">
              "Money is the barometer of a society's virtue. When money ceases to be
              the tool by which men deal with one another, then men become the tools of men."
            </p>
          </div>
        </div>
      </div>

      <Callout type="note">
        <p>
          <strong>The Alternative to Money:</strong> Francisco argues that if money is
          not the medium of exchange, then force must be—men will have to obtain goods
          by seizing them from others. Money represents voluntary trade; its abolition
          means the rule of force.
        </p>
      </Callout>

      {/* The Intellectuals */}
      <h2 className="text-2xl font-semibold mt-10 mb-4">The Intellectuals</h2>

      <CardGrid>
        <Card>
          <h4 className="font-semibold text-amber-400 mb-2">Dr. Simon Pritchett</h4>
          <p className="text-sm text-dark-300">
            A philosophy professor who preaches that reason is a superstition, that
            nothing can be known, and that man's purpose is to be "tractable."
            He supports the Equalization of Opportunity Bill.
          </p>
        </Card>
        <Card>
          <h4 className="font-semibold text-amber-400 mb-2">Balph Eubank</h4>
          <p className="text-sm text-dark-300">
            A "literary leader" who believes suffering is the essence of life and
            wants a law limiting book sales to 10,000 copies to force people to
            read "better" literature.
          </p>
        </Card>
        <Card>
          <h4 className="font-semibold text-amber-400 mb-2">Mort Liddy</h4>
          <p className="text-sm text-dark-300">
            A composer who writes old-fashioned scores for money and modern
            atonal music for prestige, embodying the split between values
            and pretensions.
          </p>
        </Card>
        <Card>
          <h4 className="font-semibold text-amber-400 mb-2">Bertram Scudder</h4>
          <p className="text-sm text-dark-300">
            Editor of "The Future" magazine, who wrote an article calling Rearden
            "The Octopus." He represents the media's hostility to business.
          </p>
        </Card>
      </CardGrid>

      {/* Rearden and Francisco */}
      <h2 className="text-2xl font-semibold mt-10 mb-4">Rearden Meets Francisco</h2>

      <p className="my-4">
        At the party, <strong className="text-amber-400">Hank Rearden</strong> and
        <strong className="text-amber-400">Francisco d'Anconia</strong> have their first
        real conversation. Despite being told that Francisco is his enemy, Rearden finds
        himself intrigued by the man's unusual honesty and insight.
      </p>

      <div className="bg-dark-800/50 rounded-xl p-6 border border-dark-700 my-6">
        <p className="text-dark-200 text-lg mb-4">
          "Mr. Rearden, I came to this party solely in order to meet you... My motives
          cannot interest you at present... I want to learn to understand you."
        </p>
        <p className="text-dark-400 text-sm">
          Francisco's directness contrasts sharply with the evasiveness of everyone else
          at the party. Rearden senses that Francisco is unlike anyone he has ever met.
        </p>
      </div>

      <p className="my-4">
        Francisco tells Rearden that he wants to understand him—and hints that he eventually
        wants Rearden to lose money. This mysterious statement begins a relationship that will
        prove central to the novel's plot.
      </p>

      {/* Dagny at the Party */}
      <h2 className="text-2xl font-semibold mt-10 mb-4">Dagny at the Party</h2>

      <p className="my-4">
        Dagny attends the party reluctantly, finding herself an outsider in the world of
        social pretensions. She watches Rearden from across the room, noticing how different
        he is from everyone else present.
      </p>

      <Callout type="warning">
        <p>
          <strong>The Bracelet Exchange:</strong> At the party, Dagny notices Lillian wearing
          the Rearden Metal bracelet—and wearing it as a symbol of contempt. In a later scene,
          Dagny will exchange one of her own valuable jewels for the bracelet, recognizing its
          true worth.
        </p>
      </Callout>

      {/* Key Themes */}
      <h2 className="text-2xl font-semibold mt-10 mb-4">Key Themes Developed</h2>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 my-6">
        <div className="bg-dark-800/50 rounded-xl p-4 border border-dark-700">
          <h3 className="text-lg font-semibold text-amber-400 mb-2">Money as Virtue</h3>
          <p className="text-dark-300 text-sm">
            Francisco's speech presents money as a tool of achievement and free exchange,
            arguing that hostility to money is hostility to human accomplishment.
          </p>
        </div>
        <div className="bg-dark-800/50 rounded-xl p-4 border border-dark-700">
          <h3 className="text-lg font-semibold text-amber-400 mb-2">Intellectual Corruption</h3>
          <p className="text-dark-300 text-sm">
            The intellectuals at the party provide philosophical cover for looting by
            preaching that nothing can be known, man is worthless, and suffering is noble.
          </p>
        </div>
        <div className="bg-dark-800/50 rounded-xl p-4 border border-dark-700">
          <h3 className="text-lg font-semibold text-amber-400 mb-2">Social Masks</h3>
          <p className="text-dark-300 text-sm">
            The party reveals the gap between people's social poses and their true values.
            Francisco drops his playboy mask to reveal unexpected depth.
          </p>
        </div>
        <div className="bg-dark-800/50 rounded-xl p-4 border border-dark-700">
          <h3 className="text-lg font-semibold text-amber-400 mb-2">Recognition</h3>
          <p className="text-dark-300 text-sm">
            Rearden and Dagny recognize each other as kindred spirits, different from
            everyone else at the gathering.
          </p>
        </div>
      </div>

      {/* Notable Events */}
      <h2 className="text-2xl font-semibold mt-10 mb-4">Notable Events</h2>

      <div className="space-y-4 my-6">
        <div className="flex items-start gap-4 p-4 bg-dark-800/50 rounded-lg border border-dark-700">
          <span className="w-8 h-8 flex items-center justify-center bg-amber-600 rounded-full text-white font-bold text-sm shrink-0">1</span>
          <div>
            <p className="font-semibold text-dark-100">Francisco's Money Speech</p>
            <p className="text-sm text-dark-400 mt-1">
              In response to the claim that "money is the root of all evil," Francisco
              delivers a passionate philosophical defense of money and achievement.
            </p>
          </div>
        </div>
        <div className="flex items-start gap-4 p-4 bg-dark-800/50 rounded-lg border border-dark-700">
          <span className="w-8 h-8 flex items-center justify-center bg-amber-600 rounded-full text-white font-bold text-sm shrink-0">2</span>
          <div>
            <p className="font-semibold text-dark-100">Rearden Meets Francisco</p>
            <p className="text-sm text-dark-400 mt-1">
              The two men have their first real conversation, with Francisco
              stating he wants to understand Rearden—and eventually to have him lose money.
            </p>
          </div>
        </div>
        <div className="flex items-start gap-4 p-4 bg-dark-800/50 rounded-lg border border-dark-700">
          <span className="w-8 h-8 flex items-center justify-center bg-amber-600 rounded-full text-white font-bold text-sm shrink-0">3</span>
          <div>
            <p className="font-semibold text-dark-100">The Intellectuals' Philosophy</p>
            <p className="text-sm text-dark-400 mt-1">
              Dr. Pritchett and Balph Eubank expound nihilistic views that provide
              intellectual cover for the looters' assault on producers.
            </p>
          </div>
        </div>
        <div className="flex items-start gap-4 p-4 bg-dark-800/50 rounded-lg border border-dark-700">
          <span className="w-8 h-8 flex items-center justify-center bg-amber-600 rounded-full text-white font-bold text-sm shrink-0">4</span>
          <div>
            <p className="font-semibold text-dark-100">James Taggart's Embarrassment</p>
            <p className="text-sm text-dark-400 mt-1">
              Francisco exposes James Taggart's pretensions by asking him pointed
              questions about his investments in d'Anconia Copper.
            </p>
          </div>
        </div>
      </div>

      {/* The Money Speech - Extended */}
      <h2 className="text-2xl font-semibold mt-10 mb-4">Understanding the Money Speech</h2>

      <Callout type="success">
        <p>
          <strong>Core Argument:</strong> Francisco argues that money is a tool that allows
          people to trade value for value. When people condemn money, they are really
          condemning the freedom to trade—and advocating for a system where goods are
          distributed by force rather than by voluntary exchange.
        </p>
      </Callout>

      <div className="bg-dark-800/50 rounded-xl p-6 border border-dark-700 my-6">
        <h4 className="font-semibold text-amber-400 mb-3">Key Passages</h4>
        <div className="space-y-4 text-dark-200">
          <p>
            "Money is the material shape of the principle that men who wish to deal with
            one another must deal by trade and give value for value."
          </p>
          <p>
            "Run for your life from any man who tells you that money is evil. That sentence
            is the leper's bell of an approaching looter."
          </p>
          <p>
            "When you see that trading is done, not by consent, but by compulsion—when you
            see that in order to produce, you need to obtain permission from men who produce
            nothing—you may know that your society is doomed."
          </p>
        </div>
      </div>

      {/* Discussion Questions */}
      <h2 className="text-2xl font-semibold mt-10 mb-4">Discussion Questions</h2>

      <div className="space-y-4 my-6">
        <div className="bg-dark-800/50 rounded-xl p-4 border border-dark-700">
          <p className="text-dark-200">1. Francisco argues that "money is the barometer of a society's virtue." What does he mean by this? Do you agree that how a society treats money reflects its deeper values? Why or why not?</p>
        </div>
        <div className="bg-dark-800/50 rounded-xl p-4 border border-dark-700">
          <p className="text-dark-200">2. The intellectuals at the party proclaim that reason is a superstition and that man is worthless, yet they enjoy the products of industry and live off wealth created by others. What does this contradiction reveal about their philosophy? How do ideas influence economic outcomes?</p>
        </div>
        <div className="bg-dark-800/50 rounded-xl p-4 border border-dark-700">
          <p className="text-dark-200">3. Francisco tells Rearden he wants to understand him—and eventually wants him to lose money. Why would someone who admires Rearden want him to lose money? What might Francisco understand that Rearden does not yet see?</p>
        </div>
        <div className="bg-dark-800/50 rounded-xl p-4 border border-dark-700">
          <p className="text-dark-200">4. According to Francisco, if money is not the medium of exchange, then force must be. Do you agree that these are the only two alternatives? What historical examples support or challenge this claim?</p>
        </div>
      </div>

      {/* Key Takeaways */}
      <h2 className="text-2xl font-semibold mt-10 mb-4">Key Takeaways</h2>

      <div className="bg-dark-800 rounded-lg p-6">
        <ul className="space-y-3">
          <li className="flex items-start gap-3">
            <span className="text-amber-400 font-bold">1.</span>
            <span>
              <strong>Francisco's Money Speech</strong> presents money as a tool of
              achievement and free exchange, not as a source of evil.
            </span>
          </li>
          <li className="flex items-start gap-3">
            <span className="text-amber-400 font-bold">2.</span>
            <span>
              <strong>The party intellectuals</strong> preach nihilism and anti-reason
              philosophy, providing cover for the looters' assault on producers.
            </span>
          </li>
          <li className="flex items-start gap-3">
            <span className="text-amber-400 font-bold">3.</span>
            <span>
              <strong>Rearden and Francisco</strong> meet for the first time, beginning
              a relationship that will prove central to the novel.
            </span>
          </li>
          <li className="flex items-start gap-3">
            <span className="text-amber-400 font-bold">4.</span>
            <span>
              <strong>The social gathering</strong> exposes the conflict between producers
              who create value and parasites who consume it while despising its source.
            </span>
          </li>
          <li className="flex items-start gap-3">
            <span className="text-amber-400 font-bold">5.</span>
            <span>
              <strong>Francisco drops his mask</strong> briefly, revealing that he is
              far more than the idle playboy he pretends to be.
            </span>
          </li>
        </ul>
      </div>
    </LessonLayout>
  );
}
