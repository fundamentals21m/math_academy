import { LessonLayout } from '../../components/layout/LessonLayout';
import { Callout } from '../../components/common/Callout';
import { Card, CardGrid } from '../../components/common/Card';

export default function Section09() {
  return (
    <LessonLayout sectionId={9}>
      <h2 className="text-2xl font-semibold mb-4">Class Conflict and Social Norms</h2>

      <p className="my-4">
        The model revolves around the aspirations of three political factions: the populace, the
        aristocracy, and the executive. Its normal mode of behavior is identical to that presented
        in the previous chapter's overview. This section describes the sector representing
        <strong className="text-indigo-400"> class conflict</strong> over the issue of civil liberties.
      </p>

      {/* Freedom as the Core Variable */}
      <h3 className="text-xl font-semibold mt-8 mb-4">Freedom: The Core Variable</h3>

      <p className="my-4">
        At the heart of this sector is the concept of <strong className="text-indigo-400">freedom</strong>.
        Freedom is the ability of an individual to do as he pleases. It is not necessarily reflected
        by the state of the laws, as there are many laws in any society which are not enforced, as
        well as many restrictions of individual freedom which are not legitimate.
      </p>

      <div className="bg-dark-800/50 rounded-xl p-6 border border-dark-700 my-6">
        <h4 className="text-lg font-semibold text-indigo-400 mb-3">Freedom Scale</h4>
        <div className="flex items-center justify-between">
          <div className="text-center">
            <p className="text-2xl font-bold text-red-400">0</p>
            <p className="text-dark-400 text-sm">Mechanism</p>
            <p className="text-dark-500 text-xs">(Absolute Control)</p>
          </div>
          <div className="flex-1 h-2 bg-gradient-to-r from-red-500 via-yellow-500 to-green-500 mx-4 rounded"></div>
          <div className="text-center">
            <p className="text-2xl font-bold text-green-400">100</p>
            <p className="text-dark-400 text-sm">Chaos</p>
            <p className="text-dark-500 text-xs">(Social Anarchy)</p>
          </div>
        </div>
      </div>

      <p className="my-4">
        Within the model, the state of freedom is represented by a one dimensional variable ranging
        from 0 (representing absolute mechanical behavior) to 100 (social chaos). This allows us to
        compare various norms, policies, and conditions using common units.
      </p>

      {/* Popular Desired Freedom */}
      <h3 className="text-xl font-semibold mt-8 mb-4">Popular Desired Freedom</h3>

      <p className="my-4">
        <strong className="text-indigo-400">Popular Desired Freedom</strong> is a social norm. It
        represents the amount of freedom the populace would prefer if they had complete power over
        their surroundings. The Government Policy Concerning Freedom is a policy; that is to say,
        a coherent set of actions which are consistent with a certain level of freedom.
      </p>

      <Callout type="info">
        <p>
          <strong>Policy vs. Actuality:</strong> Political actors react to the discrepancy between
          their desires and the government policy (which anticipates a change in the actual level
          of freedom), and not to the difference between their desires and the actual amount of
          freedom present. This is due to the greater visibility of government policy through its
          laws, proclamations, and public acts.
        </p>
      </Callout>

      {/* Discontent Dynamics */}
      <h3 className="text-xl font-semibold mt-8 mb-4">The Causes of Discontent</h3>

      <p className="my-4">
        Discontent is the difference between one's desired and actual state. Here it is important
        to note that political actors react to the discrepancy between their desires and the
        government policy, not the actual level of freedom present.
      </p>

      <CardGrid>
        <Card>
          <h4 className="font-semibold text-green-400 mb-2">Popular Discontent</h4>
          <p className="text-sm text-dark-300">
            Arises when government freedom policy falls below popular desires. The populace always
            wants more freedom than is allowed—freedom means a chance to improve social status and
            material welfare.
          </p>
        </Card>
        <Card>
          <h4 className="font-semibold text-amber-400 mb-2">Aristocratic Discontent</h4>
          <p className="text-sm text-dark-300">
            Arises when government freedom policy exceeds aristocratic desires for the populace.
            Aristocrats continually try to reduce popular freedom due to their conservative
            tendencies.
          </p>
        </Card>
      </CardGrid>

      {/* Machiavelli Quote */}
      <blockquote className="border-l-4 border-indigo-500 pl-6 py-2 my-6 text-lg italic text-dark-300">
        "...in every republic there are two different inclinations; that of the people and that of
        the upper class, and that all the laws which are made in favor of liberty are born of the
        conflict between the two."
        <footer className="text-sm text-dark-500 mt-2 not-italic">— Machiavelli, Discourses, 183</footer>
      </blockquote>

      {/* Equilibrium Discontent */}
      <h3 className="text-xl font-semibold mt-8 mb-4">Equilibrium Discontent</h3>

      <p className="my-4">
        From the model we can note a few important characteristics. First, there is an implied
        level of discontent even in equilibrium. This is the conflict Machiavelli speaks of when
        he claims that all good laws spring from the dissension between the classes.
      </p>

      <div className="bg-dark-900 rounded-xl p-6 border border-dark-700 my-6">
        <h4 className="text-lg font-semibold text-center text-indigo-400 mb-4">Causes of Discontent</h4>
        <div className="flex flex-col md:flex-row items-center justify-center gap-8">
          <div className="text-center">
            <div className="text-amber-400 text-sm mb-2">Aristocratic Desired Level</div>
            <div className="bg-dark-700 px-4 py-2 rounded">Low Freedom</div>
          </div>
          <div className="flex flex-col items-center">
            <div className="text-indigo-400 text-sm mb-2">Government Policy</div>
            <div className="bg-dark-700 px-4 py-2 rounded">Current Freedom Level</div>
          </div>
          <div className="text-center">
            <div className="text-green-400 text-sm mb-2">Popular Desired Level</div>
            <div className="bg-dark-700 px-4 py-2 rounded">High Freedom</div>
          </div>
        </div>
        <div className="flex justify-center gap-8 mt-4 text-sm">
          <div className="text-amber-400">← Aristocratic Discontent</div>
          <div className="text-green-400">Popular Discontent →</div>
        </div>
      </div>

      {/* Policy Resistance */}
      <h3 className="text-xl font-semibold mt-8 mb-4">Policy Resistance Tendencies</h3>

      <p className="my-4">
        Second, there are strong policy resistance tendencies. It is difficult to change the level
        of freedom because any movement immediately generates opposition from the faction being
        disadvantaged.
      </p>

      <Callout type="warning">
        <p>
          <strong>Why Reform is Difficult:</strong> The aristocracy and the populace are constantly
          at odds with one another. The populace is likely to always want more freedom than is
          allowed, while the aristocrats continually try to reduce the amount of freedom possessed
          by the populace. Any policy change generates immediate opposition.
        </p>
      </Callout>

      {/* Key Takeaways */}
      <h2 className="text-2xl font-semibold mt-10 mb-4">Key Takeaways</h2>

      <div className="bg-dark-800 rounded-lg p-6">
        <ul className="space-y-3">
          <li className="flex items-start gap-3">
            <span className="text-indigo-400 font-bold">1.</span>
            <span>
              <strong>Freedom</strong> is the core variable, measured on a 0-100 scale from
              total control to complete chaos.
            </span>
          </li>
          <li className="flex items-start gap-3">
            <span className="text-indigo-400 font-bold">2.</span>
            <span>
              <strong>Discontent</strong> arises from the gap between desired freedom levels
              and government policy.
            </span>
          </li>
          <li className="flex items-start gap-3">
            <span className="text-indigo-400 font-bold">3.</span>
            <span>
              Even in equilibrium, <strong>some discontent exists</strong>—this healthy friction
              is what Machiavelli says produces good laws.
            </span>
          </li>
          <li className="flex items-start gap-3">
            <span className="text-indigo-400 font-bold">4.</span>
            <span>
              <strong>Policy resistance</strong> makes change difficult—any movement creates
              opposition from the disadvantaged faction.
            </span>
          </li>
        </ul>
      </div>
    </LessonLayout>
  );
}
