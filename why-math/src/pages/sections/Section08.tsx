import { LessonLayout } from '@/components/layout/LessonLayout';
import { Callout } from '@/components/common/Callout';
import { MathBlock, Math } from '@/components/common/MathBlock';
import { VectorAdditionVisualizer } from '@/components/visualizations';

export default function Section08() {
  return (
    <LessonLayout sectionId={8}>
      <h2>Chapter 8: Galilean Relativity</h2>

      <p>
        This chapter considers problems involving relationships between moving
        objects: a plane flying in moving air, a horn sounding on a moving train,
        a police radar speed trap, and the basics of sailing.
      </p>

      <p>
        Many such problems are best analyzed by considering the <em>points of view
        of different observers</em>. A boat traveling in a river might be considered
        from the point of view of a swimmer treading water nearby or from the
        point of view of an observer standing on the bank.
      </p>

      <h2>8.1 Displacement and Velocity Vectors</h2>

      <p>
        If a passenger on a train walks 10 feet forward while the train travels
        500 feet forward, then from the point of view of an observer on the ground,
        the passenger has moved <Math>{`500 + 10 = 510`}</Math> feet forward.
      </p>

      <p>
        Similarly, if a plane flies with air speed <Math>v</Math> in air moving in the
        same direction with speed <Math>w</Math>, the plane has speed <Math>{`v + w`}</Math> relative
        to the ground. If the plane turns around and flies against the wind, it has
        speed <Math>{`v - w`}</Math> relative to the ground.
      </p>

      <Callout type="info">
        <strong>Key Concept:</strong> A displacement or velocity is not completely
        described unless both its <em>magnitude</em> and <em>direction</em> are specified.
        Such quantities are called <strong>vectors</strong>.
      </Callout>

      <h3>Vector Addition</h3>

      <div className="bg-dark-800 p-4 rounded-lg my-4 border-l-4 border-amber-500">
        <p className="font-semibold text-amber-400">Example: Rowing Across a River</p>
        <p className="mt-2">
          A man rows a boat across a 40-foot wide river flowing east. He keeps the
          boat pointed due north. When he reaches the other bank, he has been carried
          downstream 30 feet. How far did he travel relative to the earth?
        </p>
        <p className="mt-2">
          His displacement is composed of 40 feet north (relative to water) plus
          30 feet east (the water's movement). Using the Pythagorean Theorem:
        </p>
        <MathBlock>{`d^2 = 40^2 + 30^2 = 1600 + 900 = 2500`}</MathBlock>
        <p className="mt-2 text-emerald-400">
          Thus <Math>{`d = 50`}</Math> feet.
        </p>
      </div>

      <p>
        The lines with arrowheads used to represent displacements are called
        <strong> vectors</strong>. Their lengths and directions correspond to the
        amounts and directions of the displacements.
      </p>

      <Callout type="success">
        <strong>Vector Addition:</strong> To add two vectors, draw the first vector,
        then draw the second with its tail placed at the tip of the first. The sum
        is the vector extending from the tail of the first to the tip of the second.
        This forms a <em>parallelogram</em> and the result is the same regardless of
        which vector you draw first.
      </Callout>

      <div className="bg-dark-800 p-4 rounded-lg my-4 border-l-4 border-amber-500">
        <p className="font-semibold text-amber-400">Example: Motorboat in a Current</p>
        <p className="mt-2">
          A motorboat travels 4 ft/sec in still water, pointed north across a river
          with a 3 ft/sec eastward current. What is its actual speed relative to the bank?
        </p>
        <p className="mt-2">
          Each second the boat moves 4 feet north and 3 feet east:
        </p>
        <MathBlock>{`d^2 = 3^2 + 4^2 = 9 + 16 = 25`}</MathBlock>
        <p className="mt-2 text-emerald-400">
          So <Math>{`d = 5`}</Math> ft/sec relative to the bank.
        </p>
      </div>

      <VectorAdditionVisualizer />

      <h3>Crossing Directly</h3>

      <div className="bg-dark-800 p-4 rounded-lg my-4 border-l-4 border-indigo-500">
        <p className="font-semibold text-indigo-400">Example: Heading Upstream</p>
        <p className="mt-2">
          The same boat is headed upstream at exactly the correct angle so that it
          actually moves directly across the stream. What is its speed relative to the bank?
        </p>
        <p className="mt-2">
          The boat's 4 ft/sec velocity must have a 3 ft/sec component upstream to
          counteract the current. The Pythagorean Theorem gives:
        </p>
        <MathBlock>{`3^2 + s^2 = 4^2 \\quad \\Rightarrow \\quad s^2 = 16 - 9 = 7`}</MathBlock>
        <p className="mt-2 text-emerald-400">
          So <Math>{`s = \\sqrt{7} \\approx 2.65`}</Math> ft/sec.
        </p>
      </div>

      <h2>8.2 Doppler Effect</h2>

      <p>
        You have probably noticed the changing sound of a train horn or car horn
        as the vehicle approaches, passes, and departs. The sound changes from a
        high frequency (pitch) to a lower frequency. But an observer riding in
        the vehicle hears no change at all!
      </p>

      <p>
        Sound propagates through the air as <em>waves</em>—successive zones of
        higher and lower air pressure traveling away from the source at speed:
      </p>

      <MathBlock>{`c \\approx 1100 \\text{ feet/second (750 mph)}`}</MathBlock>

      <Callout type="info">
        <strong>Wavelength and Frequency:</strong> The frequency <Math>f</Math> is the
        number of complete cycles per second. The wavelength <Math>l</Math> is the
        distance between consecutive high-pressure zones:
        <MathBlock>{`l = \\frac{c}{f} \\quad \\text{or} \\quad f = \\frac{c}{l}`}</MathBlock>
        High frequencies correspond to short wavelengths; low frequencies to long wavelengths.
      </Callout>

      <h3>Moving Observer</h3>

      <p>
        If an observer moves <em>toward</em> a stationary source at speed <Math>v</Math>,
        they encounter the pressure waves more frequently:
      </p>

      <MathBlock>{`f' = \\frac{c + v}{l} = \\left(1 + \\frac{v}{c}\\right)f`}</MathBlock>

      <p>
        If moving <em>away</em> from the source:
      </p>

      <MathBlock>{`f'' = \\frac{c - v}{l} = \\left(1 - \\frac{v}{c}\\right)f`}</MathBlock>

      <div className="bg-dark-800 p-4 rounded-lg my-4 border-l-4 border-amber-500">
        <p className="font-semibold text-amber-400">Example: Approaching a Parked Car</p>
        <p className="mt-2">
          A parked car's horn produces 300 cycles/second. What frequency does an
          observer hear when approaching at 45 mph (66 ft/sec)?
        </p>
        <MathBlock>{`f' = \\left(1 + \\frac{66}{1100}\\right) \\times 300 = 318 \\text{ cycles/second}`}</MathBlock>
        <p className="mt-2">
          Moving away at 45 mph:
        </p>
        <MathBlock>{`f'' = \\left(1 - \\frac{66}{1100}\\right) \\times 300 = 282 \\text{ cycles/second}`}</MathBlock>
      </div>

      <h3>Moving Source</h3>

      <p>
        When the <em>source</em> moves, it actually produces a shorter wavelength
        ahead of its position and a longer wavelength behind. For a source moving
        at speed <Math>v</Math>:
      </p>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 my-6">
        <div className="bg-dark-800/50 rounded-xl p-4 border border-dark-700">
          <p className="text-primary-400 font-semibold">Ahead of source:</p>
          <MathBlock>{`f' = \\frac{f}{1 - v/c} \\approx \\left(1 + \\frac{v}{c}\\right)f`}</MathBlock>
        </div>
        <div className="bg-dark-800/50 rounded-xl p-4 border border-dark-700">
          <p className="text-primary-400 font-semibold">Behind source:</p>
          <MathBlock>{`f'' = \\frac{f}{1 + v/c} \\approx \\left(1 - \\frac{v}{c}\\right)f`}</MathBlock>
        </div>
      </div>

      <div className="bg-dark-800 p-4 rounded-lg my-4 border-l-4 border-indigo-500">
        <p className="font-semibold text-indigo-400">Example: Car Horn Pitch Change</p>
        <p className="mt-2">
          A car approaches you with its horn sounding like E above middle C (329.6 Hz).
          After it passes, the horn sounds like middle C (261.6 Hz). How fast is the car going?
        </p>
        <p className="mt-2">Using the formulas:</p>
        <MathBlock>{`\\left(1 + \\frac{v}{c}\\right)f \\approx 329.6 \\quad \\text{and} \\quad \\left(1 - \\frac{v}{c}\\right)f \\approx 261.6`}</MathBlock>
        <p className="mt-2">
          Adding: <Math>{`2f \\approx 591.2`}</Math>, so <Math>{`f \\approx 295.6`}</Math> Hz.
        </p>
        <p className="mt-2">
          Subtracting: <Math>{`2(v/c)f \\approx 68`}</Math>, so <Math>{`v \\approx 126.5`}</Math> ft/sec.
        </p>
        <p className="mt-2 text-emerald-400">
          Converting: <Math>{`v \\approx 126.5 \\times \\frac{3600}{5280} \\approx 86`}</Math> mph.
        </p>
      </div>

      <h3>Christian Doppler and Light</h3>

      <p>
        Christian Johann Doppler (1803–1853) was an Austrian physicist who in 1842
        predicted that the color (frequency) of light from a moving source would
        depend on its velocity—just as the pitch of sound depends on the source's speed.
        This phenomenon is now called the <strong>Doppler effect</strong>.
      </p>

      <p>
        Light waves propagate at <Math>{`c = 186,000`}</Math> miles/second. The same
        formulas apply, giving the famous <em>red shift</em> observed in light from
        receding galaxies.
      </p>

      <Callout type="warning">
        <strong>Radar Speed Detectors:</strong> Police radar sends out a radio wave
        at frequency <Math>f</Math>. The reflected wave from an approaching vehicle
        returns at frequency:
        <MathBlock>{`f' = \\left(1 + 2\\frac{v}{c}\\right)f`}</MathBlock>
        The factor of 2 occurs because the target acts as both a moving receiver
        and a moving source.
      </Callout>

      <h2>8.3 Components of Vectors</h2>

      <p>
        Often it's useful to represent a given vector as the sum of two other
        vectors, conveniently chosen. These are called <strong>components</strong> of
        the original vector, usually chosen at right angles to each other.
      </p>

      <div className="bg-dark-800 p-4 rounded-lg my-4 border-l-4 border-amber-500">
        <p className="font-semibold text-amber-400">Example: Walking Northeast</p>
        <p className="mt-2">
          A pedestrian walks 40 feet east, then jaywalks 30 feet to the northeast
          (at 45°). How far is she from her starting point?
        </p>
        <p className="mt-2">
          The 30-foot northeast vector decomposes into equal east and north components.
          Since it forms an isosceles right triangle:
        </p>
        <MathBlock>{`a^2 + a^2 = 30^2 \\quad \\Rightarrow \\quad a = \\frac{30}{\\sqrt{2}} = 15\\sqrt{2}`}</MathBlock>
        <p className="mt-2">
          Total displacement has legs <Math>{`40 + 15\\sqrt{2}`}</Math> east and <Math>{`15\\sqrt{2}`}</Math> north:
        </p>
        <MathBlock>{`d^2 = (40 + 15\\sqrt{2})^2 + (15\\sqrt{2})^2 \\approx 4197`}</MathBlock>
        <p className="mt-2 text-emerald-400">
          Thus <Math>{`d \\approx 64.8`}</Math> feet.
        </p>
      </div>

      <div className="bg-dark-800 p-4 rounded-lg my-4 border-l-4 border-indigo-500">
        <p className="font-semibold text-indigo-400">Example: Walking Northwest</p>
        <p className="mt-2">
          If you walk 1 mile east and then 2 miles northwest, how far are you from
          your starting point?
        </p>
        <p className="mt-2">
          The 2-mile northwest vector decomposes into <Math>{`a = \\sqrt{2}`}</Math> miles
          west and <Math>{`\\sqrt{2}`}</Math> miles north.
        </p>
        <p className="mt-2">
          Net effect: <Math>{`\\sqrt{2} - 1`}</Math> miles west and <Math>{`\\sqrt{2}`}</Math> miles north:
        </p>
        <MathBlock>{`d^2 = (\\sqrt{2} - 1)^2 + (\\sqrt{2})^2 = 5 - 2\\sqrt{2} \\approx 2.17`}</MathBlock>
        <p className="mt-2 text-emerald-400">
          Thus <Math>{`d \\approx 1.47`}</Math> miles.
        </p>
      </div>

      <h3>Doppler Effect with Components</h3>

      <p>
        What does an observer hear as a locomotive passes nearby (not directly
        through them)?
      </p>

      <p>
        Decompose the locomotive's velocity into a component <em>toward</em> the
        observer and a component perpendicular to this. Only the component toward
        (or away from) the observer affects the Doppler shift—and this component
        changes continuously as the locomotive passes.
      </p>

      <p>
        When approaching from a distance, the observer hears <Math>{`f' \\approx (1 + v/c)f`}</Math>.
        As the train gets closer, the component toward the observer decreases,
        causing the frequency to drop smoothly until eventually the observer hears
        <Math>{`f'' \\approx (1 - v/c)f`}</Math> as it departs.
      </p>

      <h3>Force Vectors and Sailing</h3>

      <p>
        Force is also a vector quantity. Forces can be added and decomposed just
        like displacement and velocity vectors.
      </p>

      <Callout type="info">
        <strong>How Sailboats Sail Against the Wind:</strong> Sailing downwind is
        simple—let the sail out perpendicular to the boat and the wind pushes you
        along. But how can one sail <em>into</em> the wind?
        <p className="mt-2">
          By angling the sail, the wind's force decomposes into a component
          perpendicular to the sail (which moves the boat sideways) and a component
          parallel to the sail (which slides off). The boat's keel resists sideways
          motion, so only the forward component of force moves the boat. By
          "tacking" (zigzagging), a sailboat can make progress even against the wind!
        </p>
      </Callout>

      <Callout type="success">
        <strong>Chapter Summary:</strong> Vectors have both magnitude and direction.
        They can be added geometrically by placing them tip-to-tail, forming a
        parallelogram. The Doppler effect explains why moving sources produce
        higher frequencies ahead and lower frequencies behind—the key formulas
        involve the ratio <Math>{`v/c`}</Math>. Decomposing vectors into components
        helps solve complex problems and explains phenomena from river crossings
        to sailing into the wind.
      </Callout>
    </LessonLayout>
  );
}
