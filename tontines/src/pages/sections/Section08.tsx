import { LessonLayout } from '@/components/layout';
import { Definition, Example } from '@/components/common';
import { InlineMath, MathBlock } from '@/components/common/MathBlock';
import { Callout } from '@/components/common/Callout';

export default function Section08() {
  return (
    <LessonLayout sectionId={8}>
      <h2 className="text-2xl font-bold text-dark-100 mb-6">The Basic Tontine Setup</h2>

      <p className="mb-4">
        Now we can formalize how a tontine works mathematically. We'll start with a
        simple "classic" tontine and later see how to improve it.
      </p>

      <h3 className="text-xl font-semibold text-dark-100 mt-8 mb-4">Parameters</h3>

      <Definition title="Tontine Parameters">
        <p>A basic tontine is defined by:</p>
        <ul className="list-disc list-inside mt-2 space-y-1">
          <li><InlineMath>N</InlineMath> = number of members (all same age for simplicity)</li>
          <li><InlineMath>C</InlineMath> = contribution per member</li>
          <li><InlineMath>{'P = N \\cdot C'}</InlineMath> = total pool value</li>
          <li><InlineMath>r</InlineMath> = annual investment return rate</li>
        </ul>
      </Definition>

      <Example title="Standard Example">
        <p className="mb-3">We'll use this throughout:</p>
        <div className="grid md:grid-cols-2 gap-4">
          <div className="bg-dark-700 rounded-lg p-3">
            <p className="text-emerald-400 font-bold mb-1">Members</p>
            <p className="text-sm text-dark-300">
              <InlineMath>N = 100</InlineMath> people, all age 65
            </p>
          </div>
          <div className="bg-dark-700 rounded-lg p-3">
            <p className="text-emerald-400 font-bold mb-1">Contribution</p>
            <p className="text-sm text-dark-300">
              <InlineMath>C = \$100,000</InlineMath> each
            </p>
          </div>
          <div className="bg-dark-700 rounded-lg p-3">
            <p className="text-emerald-400 font-bold mb-1">Total Pool</p>
            <p className="text-sm text-dark-300">
              <InlineMath>P = \$10,000,000</InlineMath>
            </p>
          </div>
          <div className="bg-dark-700 rounded-lg p-3">
            <p className="text-emerald-400 font-bold mb-1">Return Rate</p>
            <p className="text-sm text-dark-300">
              <InlineMath>r = 4\%</InlineMath> per year
            </p>
          </div>
        </div>
      </Example>

      <h3 className="text-xl font-semibold text-dark-100 mt-8 mb-4">The Promise</h3>

      <p className="mb-4">
        The tontine promises: <strong>lifetime income from the pool</strong>. Each year,
        investment returns are distributed to surviving members. When you die, your
        capital stays in the pool for others.
      </p>

      <Callout type="note" title="Classic vs. Modern">
        <p>
          In the <em>classic</em> tontine, only investment income is distributed—principal
          stays intact. Modern designs may also consume principal gradually. We'll
          start with the classic model.
        </p>
      </Callout>

      <h3 className="text-xl font-semibold text-dark-100 mt-8 mb-4">Key Variables Over Time</h3>

      <p className="mb-4">
        At any time <InlineMath>t</InlineMath>, we track:
      </p>

      <ul className="list-disc list-inside space-y-2 mb-6">
        <li><InlineMath>n_t</InlineMath> = number of survivors at time <InlineMath>t</InlineMath></li>
        <li><InlineMath>P_t</InlineMath> = pool value at time <InlineMath>t</InlineMath></li>
        <li><InlineMath>D_t</InlineMath> = payout per survivor in year <InlineMath>t</InlineMath></li>
      </ul>

      <p className="text-dark-400 italic">
        With the setup defined, let's calculate what happens year by year.
      </p>
    </LessonLayout>
  );
}
