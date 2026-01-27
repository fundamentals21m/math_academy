import { LessonLayout } from '@/components/layout/LessonLayout';
import { Callout } from '@/components/common/Callout';

export default function Section20() {
  return (
    <LessonLayout sectionId={20}>
      <h2>Part Three, Chapter 3: The Nature of Power</h2>

      <p>
        O'Brien explains to Winston the Party's true philosophy. Unlike past
        tyrannies that claimed to rule for the people's good, the Party seeks
        <strong> power for its own sake</strong>.
      </p>

      <h3>Power as an End</h3>

      <p>
        Winston had always wondered WHY the Party wanted power. Now O'Brien tells him:
        the Party seeks power entirely for itself. Not wealth, not luxury, not
        happiness—only power, forever.
      </p>

      <div className="bg-dark-800/50 rounded-xl p-6 border border-rose-500/20 text-center my-6">
        <p className="text-xl font-bold text-rose-400">
          "Power is not a means; it is an end."
        </p>
        <p className="mt-2 text-dark-400">
          One does not establish a dictatorship to safeguard a revolution; one makes
          the revolution to establish the dictatorship.
        </p>
      </div>

      <h3>The Boot on the Face</h3>

      <p>
        O'Brien paints a vision of the future that has become one of the most famous
        passages in twentieth-century literature:
      </p>

      <div className="bg-dark-800 p-4 rounded-lg my-4 border-l-4 border-rose-500">
        <p className="font-semibold text-rose-400">Key Quote</p>
        <p className="mt-2 italic text-dark-300">
          "If you want a picture of the future, imagine a boot stamping on a human
          face—forever."
        </p>
      </div>

      <h3>God is Power</h3>

      <p>
        The Party does not pretend to rule for the common good. It rules because
        it can. Power is its own justification. In this, O'Brien explains, the
        Party has discovered something previous tyrannies missed.
      </p>

      <ul className="list-disc list-inside space-y-2 my-4 text-dark-300">
        <li>The Nazis claimed to serve the German race</li>
        <li>The Communists claimed to serve the proletariat</li>
        <li>The Party serves only itself and seeks only power</li>
        <li>This makes it invulnerable to the contradictions that destroyed other regimes</li>
      </ul>

      <Callout type="warning">
        <strong>Philosophical Horror:</strong> The Party's philosophy is more
        terrifying than any ideology because it is honest about its own nature.
        It seeks nothing beyond its own perpetuation. There is no principle to
        appeal to, no value it claims to serve.
      </Callout>

      <h3>Collective Solipsism</h3>

      <p>
        O'Brien explains that reality exists only in the mind—and the Party controls
        all minds. Therefore, the Party controls reality itself. This is "collective
        solipsism": the shared belief of the Party becomes truth.
      </p>

      <h3>Themes Developed</h3>

      <ul className="list-disc list-inside space-y-2 my-4 text-dark-300">
        <li><strong className="text-rose-400">Power as End:</strong> The Party's nihilistic philosophy</li>
        <li><strong className="text-rose-400">Reality and Will:</strong> The Party's control over truth itself</li>
        <li><strong className="text-rose-400">Eternal Tyranny:</strong> The vision of power without limit or end</li>
      </ul>
    </LessonLayout>
  );
}
