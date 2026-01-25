import { LessonLayout } from '../../components/layout/LessonLayout';
import { Callout } from '../../components/common/Callout';
import { Card, CardGrid } from '../../components/common/Card';

export default function Section18() {
  return (
    <LessonLayout sectionId={18}>
      <h2 className="text-2xl font-semibold mb-4">Corruption and Reform</h2>

      <p className="my-4">
        This section explores one of Machiavelli's most important themes: the dynamics of
        <strong className="text-indigo-400"> corruption</strong> and the paradox of{' '}
        <strong className="text-indigo-400">reform</strong>. Why do attempts to improve corrupt
        systems so often fail—or even make things worse?
      </p>

      {/* What Is Corruption? */}
      <h3 className="text-xl font-semibold mt-8 mb-4">What Is Corruption?</h3>

      <p className="my-4">
        In Machiavelli's framework, corruption is not simply about bribery or personal vice. It
        represents a <strong className="text-indigo-400">structural condition</strong> of the
        political system—a state where the normal feedback mechanisms have broken down.
      </p>

      <blockquote className="border-l-4 border-indigo-500 pl-6 py-2 my-6 text-lg italic text-dark-300">
        "A corrupt city which lives under a prince will never be able to regain its freedom."
        <footer className="text-sm text-dark-500 mt-2 not-italic">— Machiavelli, Discourses, 223</footer>
      </blockquote>

      <CardGrid>
        <Card>
          <h4 className="font-semibold text-red-400 mb-2">Structural Corruption</h4>
          <p className="text-sm text-dark-300">
            The political system has settled into a dysfunctional equilibrium. Normal legislative
            processes serve elite interests. The populace is too oppressed to effectively protest.
          </p>
        </Card>
        <Card>
          <h4 className="font-semibold text-amber-400 mb-2">Energy Barrier</h4>
          <p className="text-sm text-dark-300">
            Like a physical system in a local energy minimum, the corrupt state is stable but
            suboptimal. Moving to a better state requires overcoming a barrier—which may cause
            collapse.
          </p>
        </Card>
      </CardGrid>

      {/* The J-Curve */}
      <h3 className="text-xl font-semibold mt-8 mb-4">The J-Curve of Revolution</h3>

      <p className="my-4">
        Political scientists have observed a pattern called the <strong className="text-indigo-400">J-curve</strong>:
        revolutions tend to occur not when conditions are worst, but when conditions have been
        improving and then suddenly worsen.
      </p>

      <div className="bg-dark-800/50 rounded-xl p-6 border border-dark-700 my-6">
        <h4 className="text-lg font-semibold text-indigo-400 mb-4">The J-Curve Pattern</h4>
        <div className="space-y-3">
          <div className="flex items-center gap-4">
            <span className="w-8 h-8 flex items-center justify-center bg-dark-600 rounded-full text-sm">1</span>
            <span className="text-dark-300">Conditions are bad but stable—people are resigned</span>
          </div>
          <div className="flex items-center gap-4">
            <span className="w-8 h-8 flex items-center justify-center bg-dark-600 rounded-full text-sm">2</span>
            <span className="text-dark-300">Conditions begin improving—expectations rise faster than reality</span>
          </div>
          <div className="flex items-center gap-4">
            <span className="w-8 h-8 flex items-center justify-center bg-dark-600 rounded-full text-sm">3</span>
            <span className="text-dark-300">Improvement stalls or reverses—gap between expectations and reality widens</span>
          </div>
          <div className="flex items-center gap-4">
            <span className="w-8 h-8 flex items-center justify-center bg-red-600 rounded-full text-sm">4</span>
            <span className="text-dark-300"><strong>Revolution</strong>—the dashed expectations trigger uprising</span>
          </div>
        </div>
      </div>

      {/* Reform Paradox */}
      <h3 className="text-xl font-semibold mt-8 mb-4">The Paradox of Reform</h3>

      <p className="my-4">
        This leads to a troubling paradox: <strong className="text-indigo-400">reform can trigger
        the very instability it aims to prevent</strong>.
      </p>

      <Callout type="warning">
        <p>
          <strong>The Reformer's Dilemma:</strong> A well-meaning executive who improves conditions
          for the populace raises expectations. If the reform cannot be sustained—due to aristocratic
          backlash, external shocks, or simple limits of power—the resulting disappointment may
          exceed what would have occurred without reform at all.
        </p>
      </Callout>

      <p className="my-4">
        Machiavelli recognized this dynamic centuries before modern political scientists formalized it:
      </p>

      <blockquote className="border-l-4 border-amber-500 pl-6 py-2 my-6 text-lg italic text-dark-300">
        "And this should be taken as a general rule: it rarely or never happens that a republic
        or kingdom is well organized from the beginning, or completely reformed, with no respect
        for its ancient institutions, unless it is done by one man alone..."
        <footer className="text-sm text-dark-500 mt-2 not-italic">— Machiavelli, Discourses, 200</footer>
      </blockquote>

      {/* Implications */}
      <h3 className="text-xl font-semibold mt-8 mb-4">Implications for Policy</h3>

      <div className="space-y-4 my-6">
        <div className="bg-dark-800/50 rounded-xl p-4 border border-dark-700">
          <h4 className="font-semibold text-indigo-400 mb-2">Gradual vs. Radical Reform</h4>
          <p className="text-dark-300 text-sm">
            Gradual reform may be more sustainable but risks being reversed before it takes hold.
            Radical reform may be more decisive but triggers stronger backlash.
          </p>
        </div>
        <div className="bg-dark-800/50 rounded-xl p-4 border border-dark-700">
          <h4 className="font-semibold text-indigo-400 mb-2">Managing Expectations</h4>
          <p className="text-dark-300 text-sm">
            Successful reform requires managing expectations—not raising hopes faster than reality
            can deliver. Under-promise and over-deliver.
          </p>
        </div>
        <div className="bg-dark-800/50 rounded-xl p-4 border border-dark-700">
          <h4 className="font-semibold text-indigo-400 mb-2">Power Concentration</h4>
          <p className="text-dark-300 text-sm">
            Machiavelli's solution—concentrating power in one reformer—may be necessary but
            creates its own dangers. Who reforms the reformer?
          </p>
        </div>
      </div>

      {/* Key Takeaways */}
      <h2 className="text-2xl font-semibold mt-10 mb-4">Key Takeaways</h2>

      <div className="bg-dark-800 rounded-lg p-6">
        <ul className="space-y-3">
          <li className="flex items-start gap-3">
            <span className="text-indigo-400 font-bold">1.</span>
            <span>
              <strong>Corruption</strong> is a structural condition—a dysfunctional equilibrium
              the system has settled into.
            </span>
          </li>
          <li className="flex items-start gap-3">
            <span className="text-indigo-400 font-bold">2.</span>
            <span>
              The <strong>J-curve</strong> shows revolutions occur when improving conditions
              suddenly reverse—dashed expectations are more dangerous than low expectations.
            </span>
          </li>
          <li className="flex items-start gap-3">
            <span className="text-indigo-400 font-bold">3.</span>
            <span>
              <strong>Reform can trigger instability</strong> by raising expectations that
              cannot be sustained.
            </span>
          </li>
          <li className="flex items-start gap-3">
            <span className="text-indigo-400 font-bold">4.</span>
            <span>
              Successful reform may require <strong>power concentration</strong>—but this creates
              new risks.
            </span>
          </li>
        </ul>
      </div>
    </LessonLayout>
  );
}
