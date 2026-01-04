import { LessonLayout } from '../../components/layout/LessonLayout';
import { Callout } from '../../components/common/Callout';
import { Card, CardGrid } from '../../components/common/Card';

export default function Section02() {
  return (
    <LessonLayout sectionId={2}>
      {/* Opening Quote */}
      <blockquote className="border-l-4 border-amber-500 pl-6 py-2 my-6 text-xl italic text-dark-300">
        "A programme whose basic thesis is, not that the system of free enterprise
        for profit has failed in this generation, but that it has not yet been tried."
        <footer className="text-sm text-dark-500 mt-2 not-italic">
          — F.D. Roosevelt, quoted by Hayek
        </footer>
      </blockquote>

      {/* Introduction */}
      <p className="text-lg text-dark-300 mb-6">
        In this chapter, Hayek traces the intellectual journey of Western civilization—how
        it rose to unprecedented heights through <strong className="text-amber-400">
        individualism and freedom</strong>, and how it has progressively abandoned these
        principles in favor of collectivism. The "abandoned road" is the path of liberty
        that brought prosperity, now being forsaken for central planning.
      </p>

      {/* Section 1: The Magnitude of Change */}
      <h2 className="text-2xl font-semibold mt-10 mb-4">The Unnoticed Transformation</h2>

      <p className="my-4">
        Hayek argues that the English have been slow to recognize how far they have already
        moved from nineteenth-century liberal principles. While they still believe they are
        governed by <em>laissez-faire</em>, the reality is that by 1931 Britain had already
        transformed significantly—and the years 1931-1939 accelerated this change "beyond
        recognition."
      </p>

      <Callout type="warning">
        <p>
          <strong>The Crucial Point:</strong> The changes are not merely in magnitude but
          in <em>direction</em>. For at least twenty-five years before totalitarianism
          became a threat, Western nations had been progressively moving away from the
          basic ideas that built European civilization.
        </p>
      </Callout>

      <blockquote className="border-l-4 border-dark-600 pl-6 py-2 my-6 text-dark-400 italic">
        "We have progressively abandoned that freedom in economic affairs without which
        personal and political freedom has never existed in the past."
      </blockquote>

      {/* Section 2: Warnings Ignored */}
      <h2 className="text-2xl font-semibold mt-10 mb-4">Warnings Ignored</h2>

      <p className="my-4">
        Hayek reminds us that the great liberal thinkers of the nineteenth century—
        <strong className="text-amber-400">de Tocqueville</strong> and
        <strong className="text-amber-400"> Lord Acton</strong>—warned that socialism
        means slavery. Yet we have steadily moved in the direction of socialism, and
        when a new form of slavery arose before our eyes, we failed to connect it to
        these warnings.
      </p>

      <div className="bg-dark-800/50 rounded-xl p-6 border border-amber-600/30 my-6">
        <h4 className="font-semibold text-amber-400 mb-3">The Depth of the Break</h4>
        <p className="text-dark-300 mb-4">
          The modern trend toward socialism represents not merely a break with the
          nineteenth century, but with the whole evolution of Western civilization.
          We are abandoning not just the views of:
        </p>
        <ul className="text-dark-300 space-y-2">
          <li className="flex items-start gap-2">
            <span className="text-amber-400">•</span>
            <span><strong>Cobden and Bright</strong> — Victorian free traders</span>
          </li>
          <li className="flex items-start gap-2">
            <span className="text-amber-400">•</span>
            <span><strong>Adam Smith and Hume</strong> — Enlightenment economists and philosophers</span>
          </li>
          <li className="flex items-start gap-2">
            <span className="text-amber-400">•</span>
            <span><strong>Locke and Milton</strong> — Founders of liberal political thought</span>
          </li>
          <li className="flex items-start gap-2">
            <span className="text-amber-400">•</span>
            <span><strong>Erasmus and Montaigne</strong> — Renaissance humanists</span>
          </li>
          <li className="flex items-start gap-2">
            <span className="text-amber-400">•</span>
            <span><strong>Cicero, Tacitus, Pericles, Thucydides</strong> — Classical foundations</span>
          </li>
        </ul>
      </div>

      {/* Section 3: The Counter-Renaissance */}
      <h2 className="text-2xl font-semibold mt-10 mb-4">The Counter-Renaissance</h2>

      <p className="my-4">
        A Nazi leader described National Socialism as a <strong className="text-amber-400">
        "counter-Renaissance"</strong>—and Hayek argues this was more true than he knew.
        It was the decisive step in destroying the civilization modern man had built
        since the Renaissance: above all, an <em>individualist</em> civilization.
      </p>

      <CardGrid>
        <Card>
          <h4 className="font-semibold text-amber-400 mb-2">What Individualism Means</h4>
          <p className="text-sm text-dark-300">
            Respect for the individual man <em>qua</em> man—recognition that his views
            and tastes are supreme in his own sphere, however narrow.
          </p>
        </Card>
        <Card>
          <h4 className="font-semibold text-amber-400 mb-2">What It Does Not Mean</h4>
          <p className="text-sm text-dark-300">
            Individualism has no necessary connection with egotism or selfishness,
            despite today's common usage of the term.
          </p>
        </Card>
        <Card>
          <h4 className="font-semibold text-amber-400 mb-2">The Key Virtue</h4>
          <p className="text-sm text-dark-300">
            <strong>Tolerance</strong> perhaps best captures what this principle meant—
            now disappearing with the rise of totalitarianism.
          </p>
        </Card>
        <Card>
          <h4 className="font-semibold text-amber-400 mb-2">Its Origins</h4>
          <p className="text-sm text-dark-300">
            Elements from Christianity and classical antiquity, fully developed in
            the Renaissance and spread as Western European civilization.
          </p>
        </Card>
      </CardGrid>

      {/* Section 4: Commerce and Freedom */}
      <h2 className="text-2xl font-semibold mt-10 mb-4">The Growth of Commerce and Freedom</h2>

      <p className="my-4">
        Hayek traces how freedom spread with commerce, starting from the commercial
        cities of Northern Italy and moving through France, Germany, the Low Countries,
        and Britain. Wherever there was no despotic power to stifle it, freedom took root.
      </p>

      <div className="bg-dark-800/50 rounded-xl p-6 border border-dark-700 my-6">
        <h4 className="font-semibold text-amber-400 mb-3">The Discovery of Spontaneous Order</h4>
        <p className="text-dark-300">
          A crucial insight emerged: the spontaneous and uncontrolled efforts of
          individuals were capable of producing a <strong>complex order of economic
          activities</strong>. This realization came only after freedom had made
          progress—the argument for economic freedom was the <em>outcome</em> of
          free growth, not its cause.
        </p>
      </div>

      <Callout type="info">
        <p>
          <strong>Freedom and Science:</strong> The marvellous growth of science followed
          the march of individual liberty. Only since industrial freedom opened the path
          to free use of new knowledge has science made its great strides. Innovation was
          suppressed so long as dominant views were held binding for all.
        </p>
      </Callout>

      {/* Section 5: Success Beyond Dreams */}
      <h2 className="text-2xl font-semibold mt-10 mb-4">Success Beyond All Dreams</h2>

      <p className="my-4">
        The results of this freedom surpassed all expectations. Wherever barriers to
        human ingenuity were removed, people became rapidly able to satisfy ever-widening
        desires. By the beginning of the twentieth century, the working man in the Western
        world had achieved material comfort, security, and personal independence that a
        hundred years before had seemed scarcely possible.
      </p>

      <blockquote className="border-l-4 border-amber-500 pl-6 py-2 my-6 text-dark-300 italic">
        "What in the future will probably appear the most significant and far-reaching
        effect of this success is the new sense of power over their own fate, the belief
        in the unbounded possibilities of improving their own lot."
      </blockquote>

      <p className="my-4">
        But here lies the paradox: <strong className="text-amber-400">success bred
        discontent</strong>. What had been inspiring promises no longer seemed enough.
        The rate of progress felt too slow. The very principles that made progress
        possible came to be seen as obstacles to <em>speedier</em> progress.
      </p>

      {/* Section 6: The Decline of Liberalism */}
      <h2 className="text-2xl font-semibold mt-10 mb-4">Why Liberalism Declined</h2>

      <p className="my-4">
        Hayek identifies several factors that undermined liberalism even as it succeeded:
      </p>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 my-6">
        <div className="bg-dark-800/50 rounded-xl p-5 border border-rose-600/30">
          <h3 className="text-lg font-semibold text-rose-400 mb-3">Problems with Liberal Advocacy</h3>
          <ul className="text-dark-400 space-y-2 text-sm">
            <li className="flex items-start gap-2">
              <span className="text-rose-400">•</span>
              <span>"Wooden insistence" on crude rules like <em>laissez-faire</em></span>
            </li>
            <li className="flex items-start gap-2">
              <span className="text-rose-400">•</span>
              <span>Slow progress on "positive" improvements</span>
            </li>
            <li className="flex items-start gap-2">
              <span className="text-rose-400">•</span>
              <span>Appearing as a "negative" creed</span>
            </li>
            <li className="flex items-start gap-2">
              <span className="text-rose-400">•</span>
              <span>Some used liberal rhetoric to defend privileges</span>
            </li>
          </ul>
        </div>
        <div className="bg-dark-800/50 rounded-xl p-5 border border-emerald-600/30">
          <h3 className="text-lg font-semibold text-emerald-400 mb-3">What Hayek Clarifies</h3>
          <ul className="text-dark-300 space-y-2 text-sm">
            <li className="flex items-start gap-2">
              <span className="text-emerald-400">✓</span>
              <span>Liberalism has no hard-and-fast rules fixed forever</span>
            </li>
            <li className="flex items-start gap-2">
              <span className="text-emerald-400">✓</span>
              <span>Creating conditions for competition ≠ passive acceptance</span>
            </li>
            <li className="flex items-start gap-2">
              <span className="text-emerald-400">✓</span>
              <span>The liberal is like a gardener tending a plant</span>
            </li>
            <li className="flex items-start gap-2">
              <span className="text-emerald-400">✓</span>
              <span>Immense possibilities remained on liberal lines</span>
            </li>
          </ul>
        </div>
      </div>

      {/* Section 7: The New Direction */}
      <h2 className="text-2xl font-semibold mt-10 mb-4">Replacing Spontaneous Order with Conscious Direction</h2>

      <p className="my-4">
        By the turn of the century, impatience with slow progress led people to abandon
        liberal principles. What had been achieved was taken for granted as a secure
        possession. People's eyes fixed on new demands. It became accepted that further
        advance required not improving the existing framework but <strong className="text-amber-400">
        completely scrapping and replacing it</strong>.
      </p>

      <Callout type="note">
        <p>
          <strong>The Crucial Shift:</strong> The question is no longer how to make the
          best use of spontaneous forces in a free society. Instead, we undertake to
          <em>dispense</em> with those forces and replace the "impersonal and anonymous
          mechanism of the market" with collective and conscious direction toward
          deliberately chosen goals.
        </p>
      </Callout>

      {/* Section 8: Ideas from the East */}
      <h2 className="text-2xl font-semibold mt-10 mb-4">The Reversal: Ideas from the East</h2>

      <p className="my-4">
        For over two hundred years, English ideas of freedom had spread eastward. By
        about 1870, these ideas reached their peak expansion. Then the tide reversed.
        A different set of ideas—not really new but very old—began advancing from the
        East. England became an <em>importer</em> of ideas, and Germany became the
        center from which twentieth-century ideas spread.
      </p>

      <div className="bg-dark-800/50 rounded-xl p-6 border border-amber-600/30 my-6">
        <h4 className="font-semibold text-amber-400 mb-3">German Intellectual Leadership (1870-1930)</h4>
        <p className="text-dark-300 mb-4">
          Whether it was Hegel or Marx, List or Schmoller, Sombart or Mannheim—German
          ideas were everywhere imported and German institutions imitated. Germany had
          a large socialist party in parliament a generation before socialism became
          serious in Britain.
        </p>
        <p className="text-dark-400 text-sm">
          The Germans recognized the conflict: what had been common European heritage
          became "Western" civilization—where "Western" meant <em>west of the Rhine</em>,
          synonymous with liberalism, democracy, capitalism, individualism, and free trade.
        </p>
      </div>

      {/* Key Takeaways */}
      <h2 className="text-2xl font-semibold mt-10 mb-4">Key Takeaways</h2>

      <div className="bg-dark-800 rounded-lg p-6">
        <ul className="space-y-3">
          <li className="flex items-start gap-3">
            <span className="text-amber-400 font-bold">1.</span>
            <span>
              Western civilization's progress came from <strong>individualism</strong>—
              respect for individual views, tolerance, and freedom to pursue one's own ends.
            </span>
          </li>
          <li className="flex items-start gap-3">
            <span className="text-amber-400 font-bold">2.</span>
            <span>
              Freedom and commerce grew together; the <strong>spontaneous order</strong>
              of markets was discovered, not designed.
            </span>
          </li>
          <li className="flex items-start gap-3">
            <span className="text-amber-400 font-bold">3.</span>
            <span>
              The success of liberalism was so great that people forgot what produced it,
              taking <strong>progress for granted</strong>.
            </span>
          </li>
          <li className="flex items-start gap-3">
            <span className="text-amber-400 font-bold">4.</span>
            <span>
              Impatience with "slow" progress led to demands to <strong>replace</strong>
              the liberal framework rather than improve it.
            </span>
          </li>
          <li className="flex items-start gap-3">
            <span className="text-amber-400 font-bold">5.</span>
            <span>
              Around 1870, the flow of ideas <strong>reversed</strong>: England began
              importing collectivist ideas from Germany.
            </span>
          </li>
          <li className="flex items-start gap-3">
            <span className="text-amber-400 font-bold">6.</span>
            <span>
              The move toward socialism is an <strong>abandonment</strong> of Western
              civilization's foundations going back to Greece and Rome.
            </span>
          </li>
        </ul>
      </div>

      {/* Looking Ahead */}
      <Callout type="success">
        <p>
          <strong>Next chapter:</strong> In "The Great Utopia," Hayek examines how
          socialism captured the word "freedom" and promised a "new freedom"—and why
          this promise of the Road to Freedom may in fact be the High Road to Servitude.
        </p>
      </Callout>
    </LessonLayout>
  );
}
