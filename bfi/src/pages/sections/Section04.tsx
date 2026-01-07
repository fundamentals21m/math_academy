import { LessonLayout } from '../../components/layout/LessonLayout';
import { Callout } from '../../components/common/Callout';
import { Card, CardGrid } from '../../components/common/Card';

// Fields required to understand bitcoin
const bitcoinFields = [
  { field: 'Austrian Economics', description: 'Understanding sound money and time preference' },
  { field: 'Computer Science', description: 'How the protocol and network function' },
  { field: 'History', description: 'Monetary history and why bitcoin matters' },
  { field: 'Mathematics', description: 'The cryptographic foundations' },
  { field: 'Game Theory', description: 'Network incentives and Nash equilibrium' },
  { field: 'Cryptography', description: 'Public/private key infrastructure' },
];

export default function Section04() {
  return (
    <LessonLayout sectionId={4}>
      {/* Opening */}
      <p className="text-lg text-dark-300 mb-6">
        The most common solutions to basic human problems take time. Many entail building new skills
        that require habits and structure, and it's a long way towards mastery. Understanding bitcoin
        is no different—except it's <strong className="text-orange-400">far more demanding</strong>.
      </p>

      {/* The Guitar Analogy */}
      <h2 className="text-2xl font-semibold mt-10 mb-4">The Guitar Analogy</h2>

      <p className="my-4">
        Imagine wanting to learn to play the guitar. It would take an ordinary person with a
        40-hour-a-week job several years just to be able to play something competent for a recital.
      </p>

      <div className="bg-dark-800/50 rounded-xl p-6 border border-dark-700 my-6">
        <h4 className="font-semibold text-orange-400 mb-3">The First Year of Guitar</h4>
        <ul className="text-dark-300 space-y-2">
          <li>Learning to read music</li>
          <li>Learning basic fingering techniques</li>
          <li>Learning how to hold a pick and strike the strings</li>
          <li>Learning basic open chords (E, A, G, C, D)</li>
          <li>Perhaps after a year, strumming these chords without muffled strings</li>
          <li>With significant time investment, successfully playing a song</li>
        </ul>
      </div>

      <p className="my-4">
        A person holding down a demanding job would have to carve out two hours a day just to do
        something minimally competent on the guitar at the end of the year. This will have
        <strong className="text-orange-400"> significant consequences</strong>:
      </p>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-4 my-6">
        <div className="bg-dark-800/50 rounded-xl p-4 border border-dark-700">
          <p className="text-dark-200 text-sm">
            Can't socialize with friends
          </p>
        </div>
        <div className="bg-dark-800/50 rounded-xl p-4 border border-dark-700">
          <p className="text-dark-200 text-sm">
            Can't spend time with spouse and/or children
          </p>
        </div>
        <div className="bg-dark-800/50 rounded-xl p-4 border border-dark-700">
          <p className="text-dark-200 text-sm">
            Sacrificing career prospects
          </p>
        </div>
      </div>

      <Callout type="note">
        <p>
          It is what it is — you're not gonna play the guitar without putting in the time, and
          <strong> time is very costly</strong>. It can't be faked, and it's a particularly
          gratifying win when it is realized for that reason.
        </p>
      </Callout>

      {/* Understanding Bitcoin is Harder */}
      <h2 className="text-2xl font-semibold mt-10 mb-4">Understanding Bitcoin is Like Learning Multiple Instruments</h2>

      <p className="my-4">
        Since the launch of the Bitcoin Core protocol in 2009, more and more people have decided
        that it is important to understand "this thing." It turns out that understanding bitcoin
        is like learning to play <strong className="text-orange-400">multiple instruments at the same time</strong>.
      </p>

      <blockquote className="border-l-4 border-orange-500 pl-6 py-2 my-6 text-lg italic text-dark-300">
        "Guitar, piano, drums, horns, and you've got to know how they all come together. You also
        need to learn music theory, how to conduct an orchestra, and understand why music exists
        in the first place."
      </blockquote>

      <p className="my-4">
        Learning bitcoin requires having minimal competence in many disparate fields:
      </p>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 my-6">
        {bitcoinFields.map((item, i) => (
          <div key={i} className="bg-dark-800/50 rounded-xl p-4 border border-dark-700">
            <h4 className="font-semibold text-orange-400 text-sm mb-1">{item.field}</h4>
            <p className="text-dark-400 text-xs">{item.description}</p>
          </div>
        ))}
      </div>

      <Callout type="info">
        <p>
          <strong>Deciding to "master" bitcoin is accepting a lifetime of study</strong> as well
          as being likely fated to never completely understand it. The type of person who takes
          on such a challenge is in quite a predicament.
        </p>
      </Callout>

      {/* The Predicament */}
      <h2 className="text-2xl font-semibold mt-10 mb-4">The Bitcoin Scholar's Predicament</h2>

      <p className="my-4">
        It's one thing to tell your wife you'll be a badass rock star in a year or two, but it's
        quite another to tell her that you're going to be a scholar that nobody appreciates and
        all of your wealth is going into "magic internet money."
      </p>

      <div className="bg-dark-800/50 rounded-xl p-6 border border-orange-600/30 my-6">
        <h4 className="font-semibold text-orange-400 mb-3">The Bitcoin Commitment</h4>
        <p className="text-dark-200">
          Would you expect anything less from somebody who would devote a large portion of their
          wealth to this discovery? Would you expect anything less than the pursuit of mastery?
        </p>
        <p className="text-dark-400 text-sm mt-3">
          Bitcoin will experience the types of ups and downs that all but a few seasoned investors
          have the stomach for. The commitment is not for the faint of heart.
        </p>
      </div>

      {/* Why Companies Struggle */}
      <h2 className="text-2xl font-semibold mt-10 mb-4">Why Companies Struggle with This</h2>

      <p className="my-4">
        Companies are not used to thinking of time in this way. Yes, they have projects and
        project managers, and governance structures to try to achieve long-term and large ambitions.
        But these ambitions are ones that <strong className="text-orange-400">require and receive permission</strong>.
      </p>

      <CardGrid>
        <Card>
          <h4 className="font-semibold text-orange-400 mb-2">Board Approval</h4>
          <p className="text-sm text-dark-300">
            A company wishing to carry out a five-year project will likely first get permission
            from their board.
          </p>
        </Card>
        <Card>
          <h4 className="font-semibold text-orange-400 mb-2">Consultant Opinions</h4>
          <p className="text-sm text-dark-300">
            This entails buying opinions from management consultants (McKinsey), bankers
            (JP Morgan, Goldman), and auditors (EY, PwC).
          </p>
        </Card>
        <Card>
          <h4 className="font-semibold text-orange-400 mb-2">C-Suite Realignment</h4>
          <p className="text-sm text-dark-300">
            Severance packages to executives who fought the effort and lost, promoting new
            executives around the CEO who championed it.
          </p>
        </Card>
        <Card>
          <h4 className="font-semibold text-orange-400 mb-2">Existential Necessity</h4>
          <p className="text-sm text-dark-300">
            It usually requires an existential problem to get all of the battleships aligned
            around a single long-term objective.
          </p>
        </Card>
      </CardGrid>

      <div className="bg-dark-800/50 rounded-xl p-6 border border-red-600/30 my-6">
        <h4 className="font-semibold text-red-400 mb-3">The Fundamental Problem</h4>
        <p className="text-dark-200 text-lg">
          Outside of an existential desire, companies like <strong>easy and quick solutions</strong>.
          They think in terms of quarters, not years, and not multiple years.
        </p>
      </div>

      {/* The Multi-Year Timeline */}
      <h2 className="text-2xl font-semibold mt-10 mb-4">The Multi-Year Timeline</h2>

      <p className="my-4">
        The timeframe from a person seeing bitcoin as a solution to a problem, and gaining the
        understanding of bitcoin to have the skill and conviction to successfully implement such
        a solution, is <strong className="text-orange-400">multi-year and closer to a human lifetime than a quarter</strong>.
      </p>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 my-6">
        <div className="bg-dark-800/50 rounded-xl p-5 border border-dark-700">
          <h4 className="font-semibold text-orange-400 mb-3">New Optics Required</h4>
          <p className="text-dark-300 text-sm">
            Companies which embark on this path will need to develop new optics to determine
            the success of these efforts. Traditional quarterly metrics won't apply.
          </p>
        </div>
        <div className="bg-dark-800/50 rounded-xl p-5 border border-dark-700">
          <h4 className="font-semibold text-orange-400 mb-3">Staff Training</h4>
          <p className="text-dark-300 text-sm">
            Most companies consist of employees who haven't spent more than an hour developing
            the competent skills to feel any confidence implementing a bitcoin strategy.
          </p>
        </div>
      </div>

      {/* The Talent Problem */}
      <h2 className="text-2xl font-semibold mt-10 mb-4">The Talent Problem</h2>

      <p className="my-4">
        Training current staff will take years—if they can be encouraged to learn. Companies can
        hire bitcoin experts, but we're in the early days.
      </p>

      <div className="bg-dark-800/50 rounded-xl p-6 border border-orange-600/30 my-6">
        <h4 className="font-semibold text-orange-400 mb-3">The Scarcity of Expertise</h4>
        <p className="text-dark-200 text-2xl font-bold mb-2">
          ~5,000 people
        </p>
        <p className="text-dark-400">
          Arguably, there aren't more than 5,000 people on Earth that have the mastery required
          to successfully implement institutional bitcoin strategies.
        </p>
      </div>

      <Callout type="warning">
        <p>
          <strong>There are no easy answers.</strong> Companies need to accept that they won't
          contribute much to bitcoin for quite a while, but starting today will get them there faster.
        </p>
      </Callout>

      {/* Key Takeaways */}
      <h2 className="text-2xl font-semibold mt-10 mb-4">Key Takeaways</h2>

      <div className="bg-dark-800 rounded-lg p-6">
        <ul className="space-y-3">
          <li className="flex items-start gap-3">
            <span className="text-orange-400 font-bold">1.</span>
            <span>
              <strong>Mastery takes time</strong>—just as learning guitar requires years of
              dedicated practice, understanding bitcoin requires sustained commitment.
            </span>
          </li>
          <li className="flex items-start gap-3">
            <span className="text-orange-400 font-bold">2.</span>
            <span>
              <strong>Bitcoin requires multi-disciplinary knowledge</strong>—economics, computer
              science, history, mathematics, game theory, and cryptography.
            </span>
          </li>
          <li className="flex items-start gap-3">
            <span className="text-orange-400 font-bold">3.</span>
            <span>
              <strong>Companies think in quarters, not years</strong>—but bitcoin mastery is
              closer to a human lifetime than a quarter.
            </span>
          </li>
          <li className="flex items-start gap-3">
            <span className="text-orange-400 font-bold">4.</span>
            <span>
              <strong>Bitcoin expertise is scarce</strong>—arguably fewer than 5,000 people on
              Earth have the required mastery for institutional implementation.
            </span>
          </li>
          <li className="flex items-start gap-3">
            <span className="text-orange-400 font-bold">5.</span>
            <span>
              <strong>Start today</strong>—there are no easy answers, but beginning the journey
              now will get institutions there faster than waiting.
            </span>
          </li>
        </ul>
      </div>
    </LessonLayout>
  );
}
