import { LessonLayout } from '../../components/layout/LessonLayout';
import { Callout } from '../../components/common/Callout';
import { Card, CardGrid } from '../../components/common/Card';

export default function Section01() {
  return (
    <LessonLayout sectionId={1}>
      {/* Opening Quote */}
      <blockquote className="border-l-4 border-amber-500 pl-6 py-2 my-6 text-xl italic text-dark-300">
        "Few discoveries are more irritating than those which expose the pedigree of ideas."
        <footer className="text-sm text-dark-500 mt-2 not-italic">
          — Lord Acton, quoted by Hayek in the Introduction
        </footer>
      </blockquote>

      {/* Introduction */}
      <p className="text-lg text-dark-300 mb-6">
        F.A. Hayek opens <em>The Road to Serfdom</em> with a warning: the ideas that led to
        totalitarianism in Germany are not unique to the German people. They are ideas that
        have spread throughout Western civilization, and they are at work in Britain and
        America. Understanding these ideas and where they lead is essential if we wish to
        avoid the same fate.
      </p>

      {/* Section 1: The Nature of This Book */}
      <h2 className="text-2xl font-semibold mt-10 mb-4">A Political Book</h2>

      <p className="my-4">
        Hayek is transparent about his purpose: <strong className="text-amber-400">this is
        a political book</strong>. While he is an economist by profession, he writes not as
        a detached scientist but as a concerned citizen. His argument derives from
        certain ultimate values—particularly <strong className="text-amber-400">individual
        freedom</strong>—which he makes explicit throughout.
      </p>

      <Callout type="info">
        <p>
          <strong>Hayek's Motivation:</strong> As an Austrian émigré who witnessed the rise
          of Nazism firsthand, Hayek felt compelled to warn his adopted country of Britain
          that it was in danger of following Germany's path. He wrote this book during
          World War II, when most economists were absorbed in the war effort.
        </p>
      </Callout>

      {/* Section 2: Learning from History */}
      <h2 className="text-2xl font-semibold mt-10 mb-4">Learning from History Without Knowing the Future</h2>

      <p className="my-4">
        Hayek reflects on a fundamental challenge: we cannot know where contemporary events
        will lead. Looking backward, we can trace causes and consequences. But while living
        through history, we navigate an unknown land. He writes:
      </p>

      <blockquote className="border-l-4 border-dark-600 pl-6 py-2 my-6 text-dark-400 italic">
        "It would be different if it were given to us to live a second time through the same
        events with all the knowledge of what we have seen before. How different would things
        appear to us, how important and often alarming would changes seem that we now scarcely
        notice!"
      </blockquote>

      <p className="my-4">
        Yet Hayek has had something close to this experience. Having lived in Austria through
        the ideological shifts that preceded Nazism, and then moving to England, he watches
        with alarm as similar patterns of thought emerge in his new home.
      </p>

      {/* Section 3: Germany as Warning */}
      <h2 className="text-2xl font-semibold mt-10 mb-4">Germany as a Warning</h2>

      <p className="my-4">
        Here Hayek states <strong className="text-amber-400">"the unpalatable truth"</strong>:
        Britain risks repeating Germany's fate. Not immediately—conditions are still very
        different—but the direction of travel is the same. The danger lies not in Nazi
        Germany itself, but in the intellectual currents that preceded it.
      </p>

      <CardGrid>
        <Card>
          <h4 className="font-semibold text-amber-400 mb-2">Similar Tendencies</h4>
          <p className="text-sm text-dark-300">
            Contempt for nineteenth-century liberalism, spurious "realism," fatalistic
            acceptance of "inevitable trends," and belief that wartime organization should
            be retained for peacetime "creation."
          </p>
        </Card>
        <Card>
          <h4 className="font-semibold text-amber-400 mb-2">The Lag Effect</h4>
          <p className="text-sm text-dark-300">
            Ideas spread across nations but at different speeds. Britain in the 1940s
            resembles Germany 15-25 years earlier. The same intellectual evolution is
            underway.
          </p>
        </Card>
        <Card>
          <h4 className="font-semibold text-amber-400 mb-2">Lessons Unlearned</h4>
          <p className="text-sm text-dark-300">
            Nine out of ten lessons that reformers want Britain to learn from the war
            are precisely the lessons Germany learned from World War I—lessons that
            produced Nazism.
          </p>
        </Card>
        <Card>
          <h4 className="font-semibold text-amber-400 mb-2">Good Intentions</h4>
          <p className="text-sm text-dark-300">
            The supreme tragedy is that in Germany, people of goodwill—admired figures—
            prepared the way for forces they would come to detest.
          </p>
        </Card>
      </CardGrid>

      {/* Section 4: The Socialist Connection */}
      <h2 className="text-2xl font-semibold mt-10 mb-4">"We Are All Socialists Now"</h2>

      <p className="my-4">
        Hayek observes that socialism has become so dominant that it's no longer fashionable
        to emphasize that "we are all socialists now"—the fact is too obvious. Across the
        political spectrum, virtually everyone who influences opinion accepts socialist
        premises. The only disagreement is about degree and whose interests should benefit.
      </p>

      <div className="bg-dark-800/50 rounded-xl p-6 border border-amber-600/30 my-6">
        <h4 className="font-semibold text-amber-400 mb-3">The Central Question</h4>
        <p className="text-dark-300">
          Given that nearly everyone wants to move toward socialism, and that no objective
          facts make this inevitable—<em>where will this movement lead?</em> Is it possible
          that the people pushing this movement would recoil in horror if they saw where it
          ends?
        </p>
      </div>

      <blockquote className="border-l-4 border-amber-500 pl-6 py-2 my-6 text-dark-300 italic">
        "Is there a greater tragedy imaginable than that in our endeavour consciously to
        shape our future in accordance with high ideals, we should in fact unwittingly
        produce the very opposite of what we have been striving for?"
      </blockquote>

      {/* Section 5: Understanding the Enemy */}
      <h2 className="text-2xl font-semibold mt-10 mb-4">Understanding the Enemy</h2>

      <p className="my-4">
        Hayek argues that understanding totalitarianism is essential not just for internal
        reasons but for winning the war and building the peace. Britain shows "an inner
        insecurity and uncertainty of aim" in dealing with the dictators—confusion rooted
        in not understanding what separates them from their enemies.
      </p>

      <Callout type="warning">
        <p>
          <strong>Dangerous Misunderstandings:</strong> Both Left and Right have been deceived
          into believing National Socialism served capitalists and opposed socialism. Many
          features of Hitler's system have been recommended for imitation, unaware that they
          are integral to totalitarianism.
        </p>
      </Callout>

      {/* Section 6: Against Racial Theories */}
      <h2 className="text-2xl font-semibold mt-10 mb-4">Against Racial Explanations</h2>

      <p className="my-4">
        Hayek firmly rejects the theory that Germans are "inherently vicious." Such views
        adopt "the worst features of German racial theories." The question is not why
        Germans are uniquely evil—they probably aren't—but what <strong className="text-amber-400">
        circumstances and ideas</strong> allowed a particular set of ideas to grow and
        triumph.
      </p>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 my-6">
        <div className="bg-dark-800/50 rounded-xl p-5 border border-rose-600/30">
          <h3 className="text-lg font-semibold text-rose-400 mb-3">What Hayek Rejects</h3>
          <ul className="text-dark-400 space-y-2 text-sm">
            <li className="flex items-start gap-2">
              <span className="text-rose-400">✗</span>
              <span>Germans as inherently vicious</span>
            </li>
            <li className="flex items-start gap-2">
              <span className="text-rose-400">✗</span>
              <span>Racial explanations of Nazism</span>
            </li>
            <li className="flex items-start gap-2">
              <span className="text-rose-400">✗</span>
              <span>"It can't happen here" complacency</span>
            </li>
            <li className="flex items-start gap-2">
              <span className="text-rose-400">✗</span>
              <span>Hatred of everything German</span>
            </li>
          </ul>
        </div>
        <div className="bg-dark-800/50 rounded-xl p-5 border border-emerald-600/30">
          <h3 className="text-lg font-semibold text-emerald-400 mb-3">What Hayek Affirms</h3>
          <ul className="text-dark-300 space-y-2 text-sm">
            <li className="flex items-start gap-2">
              <span className="text-emerald-400">✓</span>
              <span>Ideas as the cause of totalitarianism</span>
            </li>
            <li className="flex items-start gap-2">
              <span className="text-emerald-400">✓</span>
              <span>These ideas are not confined to Germany</span>
            </li>
            <li className="flex items-start gap-2">
              <span className="text-emerald-400">✓</span>
              <span>British intellectuals have adopted German ideas</span>
            </li>
            <li className="flex items-start gap-2">
              <span className="text-emerald-400">✓</span>
              <span>Understanding ideas can prevent disaster</span>
            </li>
          </ul>
        </div>
      </div>

      <p className="my-4">
        Hayek reminds us that John Stuart Mill drew inspiration for <em>On Liberty</em>
        from Germans like Goethe and Wilhelm von Humboldt, and that two influential
        intellectual forebears of National Socialism—Thomas Carlyle and Houston Stewart
        Chamberlain—were a Scot and an Englishman.
      </p>

      {/* Section 7: Socialist Refugees */}
      <h2 className="text-2xl font-semibold mt-10 mb-4">The Refugee Problem</h2>

      <p className="my-4">
        Hayek notes that many socialist refugees from Germany cling to their beliefs,
        unaware that these very beliefs contributed to the catastrophe they fled. When
        English observers are shocked by the "semi-Fascist views" of genuine German
        socialists, they blame German character. The real explanation: these socialists
        have traveled further down the same road Britain is beginning.
      </p>

      <Callout type="note">
        <p>
          <strong>The Kinship of Prussianism and Socialism:</strong> Hayek acknowledges a
          connection between socialism and Prussian organization—a state "administered like
          a factory." But it was <em>socialist views</em>, not Prussian tradition, that
          Germany shared with Italy and Russia. National Socialism arose from the masses,
          not from classes steeped in Prussian tradition.
        </p>
      </Callout>

      {/* Key Takeaways */}
      <h2 className="text-2xl font-semibold mt-10 mb-4">Key Takeaways</h2>

      <div className="bg-dark-800 rounded-lg p-6">
        <ul className="space-y-3">
          <li className="flex items-start gap-3">
            <span className="text-amber-400 font-bold">1.</span>
            <span>
              This is a <strong>political book</strong>, openly arguing from the value of
              individual freedom against the rising tide of socialism.
            </span>
          </li>
          <li className="flex items-start gap-3">
            <span className="text-amber-400 font-bold">2.</span>
            <span>
              <strong>Germany serves as a warning</strong>—not because Germans are uniquely
              evil, but because they traveled a road other nations are beginning.
            </span>
          </li>
          <li className="flex items-start gap-3">
            <span className="text-amber-400 font-bold">3.</span>
            <span>
              <strong>Ideas, not race</strong>, explain the rise of totalitarianism. These
              ideas have spread throughout Western civilization.
            </span>
          </li>
          <li className="flex items-start gap-3">
            <span className="text-amber-400 font-bold">4.</span>
            <span>
              <strong>"We are all socialists now"</strong>—the question is not whether to
              move toward planning, but where this movement leads.
            </span>
          </li>
          <li className="flex items-start gap-3">
            <span className="text-amber-400 font-bold">5.</span>
            <span>
              <strong>People of goodwill</strong> in Germany prepared the way for forces
              they came to detest. The same could happen elsewhere.
            </span>
          </li>
          <li className="flex items-start gap-3">
            <span className="text-amber-400 font-bold">6.</span>
            <span>
              Understanding these dangers is <strong>not inevitable</strong>—developments
              can be prevented if people recognize where their efforts lead.
            </span>
          </li>
        </ul>
      </div>

      {/* Looking Ahead */}
      <Callout type="success">
        <p>
          <strong>Next chapter:</strong> In "The Abandoned Road," Hayek traces how
          Western civilization turned away from the liberal principles that had produced
          unprecedented freedom and prosperity, and began the march toward collectivism.
        </p>
      </Callout>
    </LessonLayout>
  );
}
