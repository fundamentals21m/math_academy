import { LessonLayout } from '../../components/layout/LessonLayout';
import { Callout } from '../../components/common/Callout';
import { Card, CardGrid, CardHeader } from '../../components/common/Card';
import { SectionQuiz } from '../../components/quiz';
import { section05Questions } from '../../data/quizzes';
import { PriorityTimeline } from '../../components/visualizations';

export default function Section05() {
  return (
    <LessonLayout sectionId={5}>
      <h2 className="text-2xl font-semibold mb-4">The Great Controversy</h2>

      <p className="text-dark-200 mb-6 text-lg leading-relaxed">
        Few disputes in the history of science have been as bitter, as personal, and as
        consequential as the <strong>priority dispute</strong> between Newton and Leibniz over
        the invention of calculus. This feud divided the mathematical world, damaged careers
        and reputations, and held back British mathematics for over a century.
      </p>

      <Callout type="warning">
        <p>
          <strong>A Cautionary Tale:</strong> The Newton-Leibniz controversy shows how ego,
          nationalism, and institutional power can poison intellectual life. Both men were
          geniuses; both were also petty, vindictive, and ultimately diminished by the dispute.
        </p>
      </Callout>

      {/* Interactive Visualization */}
      <PriorityTimeline />

      {/* The Timeline */}
      <h2 className="text-2xl font-semibold mt-10 mb-4">Timeline of Discovery</h2>

      <div className="space-y-4 mb-8">
        <div className="flex gap-4 items-start p-4 bg-dark-800 rounded-lg">
          <span className="text-primary-400 font-mono text-sm whitespace-nowrap">1664–66</span>
          <div>
            <p className="font-semibold">Newton develops calculus</p>
            <p className="text-sm text-dark-400">
              During the plague years, Newton invents the method of fluxions. He writes it
              up in manuscripts that circulate privately among a small group.
            </p>
          </div>
        </div>
        <div className="flex gap-4 items-start p-4 bg-dark-800 rounded-lg">
          <span className="text-primary-400 font-mono text-sm whitespace-nowrap">1673</span>
          <div>
            <p className="font-semibold">Leibniz begins his work</p>
            <p className="text-sm text-dark-400">
              Leibniz, a diplomat in Paris, starts developing his own approach to calculus,
              inspired by Pascal's work on infinitesimals.
            </p>
          </div>
        </div>
        <div className="flex gap-4 items-start p-4 bg-dark-800 rounded-lg">
          <span className="text-primary-400 font-mono text-sm whitespace-nowrap">1676</span>
          <div>
            <p className="font-semibold">The fateful letters</p>
            <p className="text-sm text-dark-400">
              Newton sends two letters to Leibniz (via Oldenburg) hinting at his methods but
              hiding key results in anagrams. Leibniz visits London and may have seen
              Newton's manuscripts.
            </p>
          </div>
        </div>
        <div className="flex gap-4 items-start p-4 bg-dark-800 rounded-lg">
          <span className="text-primary-400 font-mono text-sm whitespace-nowrap">1684</span>
          <div>
            <p className="font-semibold">Leibniz publishes first</p>
            <p className="text-sm text-dark-400">
              Leibniz publishes his calculus paper in <em>Acta Eruditorum</em>—the first
              publication of calculus. No mention of Newton.
            </p>
          </div>
        </div>
        <div className="flex gap-4 items-start p-4 bg-dark-800 rounded-lg">
          <span className="text-primary-400 font-mono text-sm whitespace-nowrap">1687</span>
          <div>
            <p className="font-semibold">Newton's Principia appears</p>
            <p className="text-sm text-dark-400">
              Newton's masterwork is published, using geometric methods rather than calculus.
              A brief acknowledgment of Leibniz is included.
            </p>
          </div>
        </div>
        <div className="flex gap-4 items-start p-4 bg-dark-800 rounded-lg">
          <span className="text-primary-400 font-mono text-sm whitespace-nowrap">1699–</span>
          <div>
            <p className="font-semibold">The war begins</p>
            <p className="text-sm text-dark-400">
              Accusations fly. Newton's supporters claim Leibniz stole the idea. Leibniz's
              supporters claim independent discovery. Neither side backs down.
            </p>
          </div>
        </div>
      </div>

      {/* The Accusations */}
      <h2 className="text-2xl font-semibold mt-10 mb-4">The Accusations</h2>

      <div className="grid md:grid-cols-2 gap-6 mb-8">
        <div className="bg-gradient-to-br from-red-900/30 to-red-800/10 border border-red-700/30 rounded-xl p-6">
          <h4 className="text-lg font-semibold text-red-300 mb-3">Against Leibniz</h4>
          <ul className="space-y-2 text-dark-300 text-sm">
            <li className="flex items-start gap-2">
              <span className="text-red-400">•</span>
              He saw Newton's manuscripts in London in 1676
            </li>
            <li className="flex items-start gap-2">
              <span className="text-red-400">•</span>
              He developed calculus suspiciously soon after receiving Newton's letters
            </li>
            <li className="flex items-start gap-2">
              <span className="text-red-400">•</span>
              He published without acknowledging Newton's prior work
            </li>
            <li className="flex items-start gap-2">
              <span className="text-red-400">•</span>
              He "plagiarized" and merely changed the notation
            </li>
          </ul>
        </div>

        <div className="bg-gradient-to-br from-blue-900/30 to-blue-800/10 border border-blue-700/30 rounded-xl p-6">
          <h4 className="text-lg font-semibold text-blue-300 mb-3">Against Newton</h4>
          <ul className="space-y-2 text-dark-300 text-sm">
            <li className="flex items-start gap-2">
              <span className="text-blue-400">•</span>
              He never published his work—how can he claim priority?
            </li>
            <li className="flex items-start gap-2">
              <span className="text-blue-400">•</span>
              His letters were deliberately obscure, hiding his methods
            </li>
            <li className="flex items-start gap-2">
              <span className="text-blue-400">•</span>
              He used his position as Royal Society president to rig the investigation
            </li>
            <li className="flex items-start gap-2">
              <span className="text-blue-400">•</span>
              He anonymously wrote the "impartial" report condemning Leibniz
            </li>
          </ul>
        </div>
      </div>

      {/* The Royal Society Report */}
      <h2 className="text-2xl font-semibold mt-10 mb-4">The Rigged Investigation</h2>

      <p className="text-dark-200 mb-6">
        In 1712, the Royal Society of London—of which Newton was president—appointed a committee
        to investigate the priority dispute. The committee's report, the <em>Commercium
        Epistolicum</em>, concluded that Newton was the first inventor and implied that
        Leibniz was a plagiarist.
      </p>

      <Callout type="danger">
        <p>
          <strong>The Truth Emerges:</strong> It was later discovered that Newton himself
          wrote much of the "impartial" report, selected the committee members, and edited
          the final document. This was not justice—it was a hatchet job by the most powerful
          scientist in England against a foreign rival.
        </p>
      </Callout>

      {/* The Consequences */}
      <h2 className="text-2xl font-semibold mt-10 mb-4">The Tragic Consequences</h2>

      <CardGrid>
        <Card>
          <CardHeader title="For Leibniz" />
          <p className="text-sm text-dark-300">
            His reputation was tarnished. He died in 1716, largely alone and forgotten,
            without even his employer attending his funeral. History would later vindicate
            his independent discovery.
          </p>
        </Card>
        <Card>
          <CardHeader title="For Newton" />
          <p className="text-sm text-dark-300">
            He spent his final years consumed by the dispute rather than doing mathematics.
            His victory was hollow—he had destroyed a great mind's reputation through lies.
          </p>
        </Card>
        <Card>
          <CardHeader title="For British Math" />
          <p className="text-sm text-dark-300">
            British mathematicians, loyal to Newton, refused to adopt Leibniz's superior
            notation. For over a century, they fell behind their Continental counterparts.
          </p>
        </Card>
        <Card>
          <CardHeader title="For Mathematics" />
          <p className="text-sm text-dark-300">
            The split slowed progress. Euler, Lagrange, and Laplace used Leibniz's calculus
            to advance physics and mathematics while Britain stagnated.
          </p>
        </Card>
      </CardGrid>

      {/* The Modern Verdict */}
      <h2 className="text-2xl font-semibold mt-10 mb-4">The Modern Verdict</h2>

      <p className="text-dark-200 mb-6">
        Today, historians generally agree:
      </p>

      <div className="bg-dark-800 rounded-xl p-6 mb-6">
        <ul className="space-y-3 text-dark-200">
          <li className="flex items-start gap-3">
            <span className="text-emerald-400 font-bold">✓</span>
            <span><strong>Newton invented calculus first</strong> (around 1666), but kept it largely secret.</span>
          </li>
          <li className="flex items-start gap-3">
            <span className="text-emerald-400 font-bold">✓</span>
            <span><strong>Leibniz invented it independently</strong> (around 1675), with different notation and approach.</span>
          </li>
          <li className="flex items-start gap-3">
            <span className="text-emerald-400 font-bold">✓</span>
            <span><strong>There was no plagiarism.</strong> The ideas were "in the air," and both men had the genius to crystallize them.</span>
          </li>
          <li className="flex items-start gap-3">
            <span className="text-emerald-400 font-bold">✓</span>
            <span><strong>Leibniz's notation was better</strong> and became the standard worldwide.</span>
          </li>
          <li className="flex items-start gap-3">
            <span className="text-emerald-400 font-bold">✓</span>
            <span><strong>The dispute was a tragedy</strong> that harmed science and diminished both men.</span>
          </li>
        </ul>
      </div>

      <Callout type="success">
        <p>
          <strong>A Lesson for Today:</strong> Great ideas often emerge independently when the
          time is right. Priority disputes are usually pointless—what matters is the contribution
          to human knowledge, not who can claim to have thought of it first.
        </p>
      </Callout>

      {/* Key Takeaways */}
      <h2 className="text-2xl font-semibold mt-10 mb-4">Key Takeaways</h2>

      <div className="bg-dark-800 rounded-lg p-6">
        <ul className="space-y-3">
          <li className="flex items-start gap-3">
            <span className="text-primary-400 font-bold">1.</span>
            <span>Newton and Leibniz both independently invented calculus—Newton first (secretly), Leibniz first to publish.</span>
          </li>
          <li className="flex items-start gap-3">
            <span className="text-primary-400 font-bold">2.</span>
            <span>The priority dispute consumed both men's later years and damaged mathematics for a century.</span>
          </li>
          <li className="flex items-start gap-3">
            <span className="text-primary-400 font-bold">3.</span>
            <span>Newton used his institutional power to conduct a biased investigation that unfairly condemned Leibniz.</span>
          </li>
          <li className="flex items-start gap-3">
            <span className="text-primary-400 font-bold">4.</span>
            <span>British mathematics suffered by refusing to adopt Leibniz's superior notation until the 19th century.</span>
          </li>
        </ul>
      </div>

      {/* Section Quiz */}
      <SectionQuiz sectionId={5} questions={section05Questions} />
    </LessonLayout>
  );
}
