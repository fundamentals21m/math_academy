import { LessonLayout } from '@/components/layout/LessonLayout';
import { Callout } from '@/components/common/Callout';
import { MathBlock, Math } from '@/components/common/MathBlock';
import { TimeDilationVisualizer } from '@/components/visualizations';

export default function Section09() {
  return (
    <LessonLayout sectionId={9}>
      <h2>Chapter 9: Special Relativity</h2>

      <p>
        The theory of relativity, due primarily to H. A. Lorentz in the 1890s and
        Albert Einstein in the early 1900s, revolutionized scientific thinking. This
        chapter gives a brief introduction to the ideas of <em>special relativity</em>—the
        subject of a 1905 paper by Einstein.
      </p>

      <p>
        The special theory of relativity considers the viewpoints of different observers
        moving with constant velocities, as in the previous chapter. But the key postulate
        and the conclusions will now be quite different and, for most people, surprising.
      </p>

      <h2>9.1 Simultaneity and Einstein's Postulate</h2>

      <p>
        Any study of physical phenomena requires the concepts of time and distance,
        and the ability to measure these quantities. The theory of relativity begins with
        a study of time and distance themselves—dramatically changing our understanding
        of these concepts.
      </p>

      <h3>Synchronizing Clocks</h3>

      <p>
        Consider two different observers measuring time at two different places.
        Each has their own clock, and they would like to be sure that the two clocks
        are synchronized. What should they do?
      </p>

      <p>
        One possibility is for the two observers to bring their clocks together, set them
        to read the same time, then carry them to the desired locations. But how could
        they be sure that nothing affects the clocks during transit?
      </p>

      <p>
        Another way is for one observer to look at their clock and simultaneously at the
        other observer's clock, using a telescope. But this fails because light takes time
        to travel the distance—the farther the other clock, the more delayed its image.
      </p>

      <Callout type="info">
        <strong>The Speed of Light:</strong> Light propagates at approximately{' '}
        <Math>{`c \\approx 186,000`}</Math> miles per second. This is fast but finite,
        meaning light from distant objects takes measurable time to reach us.
      </Callout>

      <h3>The Search for the "Ether"</h3>

      <p>
        By the late 19th century, scientists generally assumed that light waves must
        propagate through some medium—just as sound waves propagate through air.
        A mysterious medium called the <em>ether</em> was postulated to carry light waves.
      </p>

      <p>
        If light traveled through the ether like sound through air, then the speed of
        light should be constant relative to the ether. But the best experiments all
        failed to detect the mysterious ether.
      </p>

      <Callout type="success">
        <strong>Einstein's Postulate (1905):</strong> Light from whatever source propagates
        with the speed <Math>c</Math> (approximately 186,000 miles per second) relative to
        <em> any</em> observer who can be considered "stationary" or any observer moving
        with constant velocity relative to a stationary one.
      </Callout>

      <p>
        This postulate has remarkable consequences:
      </p>

      <ul className="list-disc list-inside space-y-2 my-4 text-dark-300">
        <li>There is no way—and never will be—of moving objects faster than the speed of light</li>
        <li>Light is <em>not</em> analogous to sound; there is no preferred "stationary" observer</li>
        <li>Light from a moving lamp does not add velocities like a ball thrown from a moving train</li>
      </ul>

      <h3>The Relativity of Simultaneity</h3>

      <p>
        Imagine this experiment: Observer A stands beside railroad tracks watching a train
        go by at speed <Math>v</Math>. Observer B rides in the middle of the train, carrying
        a flash gun. At each end of the train is a "slave" flash that fires when it receives
        B's signal.
      </p>

      <p>
        Just as B passes A's position, she flashes her light to signal both slave flashes.
        Do the two slave flashes fire simultaneously?
      </p>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 my-6">
        <div className="bg-dark-800/50 rounded-xl p-4 border border-dark-700">
          <p className="text-primary-400 font-semibold">Observer B (on train):</p>
          <p className="mt-2">
            Yes! Her light signal traveled at speed <Math>c</Math> relative to the train,
            an equal distance to both slave flashes. They fired simultaneously.
          </p>
        </div>
        <div className="bg-dark-800/50 rounded-xl p-4 border border-dark-700">
          <p className="text-primary-400 font-semibold">Observer A (on ground):</p>
          <p className="mt-2">
            No! The signal propagates at speed <Math>c</Math> relative to ground,
            but the rear flash is moving toward it while the front moves away.
            The rear fires first!
          </p>
        </div>
      </div>

      <Callout type="warning">
        <strong>Both Are Right!</strong> According to Einstein, two events which are
        simultaneous to one observer will not, in general, be simultaneous to another
        observer who is moving relative to the first.
      </Callout>

      <div className="bg-dark-800 p-4 rounded-lg my-4 border-l-4 border-amber-500">
        <p className="font-semibold text-amber-400">Example: Time Difference Calculation</p>
        <p className="mt-2">
          If the distance between the slave flashes is <Math>{`2d = 0.93`}</Math> miles
          and the train moves at <Math>{`v = 134`}</Math> mph, what is the time difference
          between their firings according to observer A?
        </p>
        <p className="mt-2">
          The signal reaches the rear flash in time <Math>{`t_1 = d/(c+v)`}</Math> and
          the front flash in time <Math>{`t_2 = d/(c-v)`}</Math>. The difference is:
        </p>
        <MathBlock>{`t_2 - t_1 = \\frac{d}{c-v} - \\frac{d}{c+v} = \\frac{2dv}{c^2 - v^2} \\approx \\frac{2dv}{c^2}`}</MathBlock>
        <p className="mt-2">
          With <Math>{`v = 134/3600 \\approx 0.0372`}</Math> miles/second:
        </p>
        <MathBlock>{`\\frac{(0.93)(0.0372)}{(186,000)^2} \\approx 10^{-12} \\text{ second}`}</MathBlock>
        <p className="mt-2 text-emerald-400">
          One-trillionth of a second—far too small to detect in everyday life!
        </p>
      </div>

      <h2>9.2 Time Dilation</h2>

      <p>
        Now we consider how two clocks run if one is stationary and the other is
        moving at a constant velocity. For each observer, imagine a system of position
        markers and clocks distributed throughout space at rest relative to that observer.
        This is called the <strong>reference frame</strong> of the observer.
      </p>

      <h3>The Einstein-Langevin Clock</h3>

      <p>
        Since the speed of light is constant, we can construct a precise clock by
        attaching a light source and mirror at either end of a rigid rod of length{' '}
        <Math>d</Math>. The basic unit of time is the round-trip time for a light flash
        to travel from source to mirror and back.
      </p>

      <p>
        But how does a stationary observer regard the clock of a moving observer?
      </p>

      <p>
        Consider the clock aligned at right angles to the direction of motion. The owner
        of the clock says the light flash requires time <Math>{`t'`}</Math> to reach the
        mirror and time <Math>{`t'`}</Math> to return, where <Math>{`ct' = d`}</Math>.
      </p>

      <p>
        But the stationary observer argues that since the space ship was moving while
        the light traveled, the trip in each direction requires longer, say time{' '}
        <Math>{`t > t'`}</Math>. By the Pythagorean Theorem:
      </p>

      <MathBlock>{`(ct)^2 = d^2 + (vt)^2`}</MathBlock>

      <p>
        Substituting <Math>{`d = ct'`}</Math> and solving:
      </p>

      <MathBlock>{`t = \\frac{t'}{\\sqrt{1 - (v/c)^2}}`}</MathBlock>

      <Callout type="success">
        <strong>Time Dilation:</strong> A moving clock runs <em>slower</em> than a
        stationary clock by the factor <Math>{`\\sqrt{1 - (v/c)^2}`}</Math>. This applies
        to all clocks—mechanical, atomic, and even biological "clocks."
      </Callout>

      <div className="bg-dark-800 p-4 rounded-lg my-4 border-l-4 border-amber-500">
        <p className="font-semibold text-amber-400">Example: Space Travel at 60% Light Speed</p>
        <p className="mt-2">
          If a space ship is traveling at 60% of the speed of light, how "slow" are its clocks?
        </p>
        <p className="mt-2">
          Since <Math>{`v = 0.6c`}</Math>, a time period <Math>t</Math> for a stationary
          observer corresponds to:
        </p>
        <MathBlock>{`t' = t\\sqrt{1 - (0.6)^2} = t\\sqrt{0.64} = 0.8t`}</MathBlock>
        <p className="mt-2 text-emerald-400">
          The stationary observer concludes that the space traveler's clocks are 20% slow—and
          the traveler is aging 20% more slowly!
        </p>
      </div>

      <TimeDilationVisualizer />

      <h3>Experimental Evidence: Muons</h3>

      <p>
        The experimental evidence confirming that moving clocks run slower comes from
        studying elementary particles called <strong>muons</strong>. Muons are unstable
        particles created by cosmic rays hitting the atmosphere.
      </p>

      <p>
        At rest, muons have an average life of only 2.2 microseconds. In that time,
        even traveling at the speed of light, they could go at most:
      </p>

      <MathBlock>{`ct = 186,000 \\times 2.2 \\times 10^{-6} = 0.4 \\text{ miles}`}</MathBlock>

      <p>
        But experimentally, muons traveling near the speed of light go much farther—they
        reach Earth's surface from the upper atmosphere, traveling several miles!
      </p>

      <div className="bg-dark-800 p-4 rounded-lg my-4 border-l-4 border-indigo-500">
        <p className="font-semibold text-indigo-400">Example: Muon at 99.9% Light Speed</p>
        <p className="mt-2">
          If a muon travels at <Math>{`v = 0.999c`}</Math>, how long would it live and
          how far could it travel?
        </p>
        <p className="mt-2">
          Its lifetime in our reference frame is:
        </p>
        <MathBlock>{`t = \\frac{2.2 \\times 10^{-6}}{\\sqrt{1 - (0.999)^2}} = \\frac{2.2 \\times 10^{-6}}{\\sqrt{0.002}} \\approx 5 \\times 10^{-5} \\text{ seconds}`}</MathBlock>
        <p className="mt-2 text-emerald-400">
          About 50 microseconds—during which it travels approximately <Math>{`186,000 \\times 50 \\times 10^{-6} = 9.3`}</Math> miles!
        </p>
      </div>

      <h2>9.3 Length Contraction</h2>

      <p>
        After the downfall of universal time, you might ask whether length measurements
        are the same for different observers. The answer again is <strong>no</strong>!
        A moving rod (pointed in the direction of motion) appears shorter than a
        stationary one.
      </p>

      <p>
        Consider the Einstein-Langevin clock positioned lengthwise in the space ship
        (parallel to the direction of motion). The space traveler sees length{' '}
        <Math>{`d'`}</Math>, while the stationary observer sees length <Math>d</Math>.
      </p>

      <p>
        Working through the mathematics with the round-trip light flash, we find:
      </p>

      <MathBlock>{`d = d'\\sqrt{1 - (v/c)^2}`}</MathBlock>

      <Callout type="success">
        <strong>Lorentz-Fitzgerald Contraction:</strong> All moving objects are
        "contracted" in the direction of motion by the factor{' '}
        <Math>{`\\sqrt{1 - (v/c)^2}`}</Math> from the point of view of a stationary
        observer. Dimensions perpendicular to motion are unchanged.
      </Callout>

      <div className="bg-dark-800 p-4 rounded-lg my-4 border-l-4 border-amber-500">
        <p className="font-semibold text-amber-400">Example: Contracted Space Ship</p>
        <p className="mt-2">
          A space ship is 100 meters long when measured at rest. How long would it
          appear to us if it were passing by at 80% of the speed of light?
        </p>
        <MathBlock>{`d = 100\\sqrt{1 - (0.8)^2} = 100\\sqrt{0.36} = 100 \\times 0.6 = 60 \\text{ meters}`}</MathBlock>
      </div>

      <h3>Resolving the Muon Paradox</h3>

      <p>
        Length contraction resolves an apparent paradox about muons. We explained
        that muons reach Earth because (from our viewpoint) they live longer. But
        from the muon's viewpoint, it only lives 2.2 microseconds—so how does{' '}
        <em>it</em> explain reaching Earth?
      </p>

      <div className="bg-dark-800 p-4 rounded-lg my-4 border-l-4 border-indigo-500">
        <p className="font-semibold text-indigo-400">Example: The Muon's Perspective</p>
        <p className="mt-2">
          A muon is produced 9 miles above Earth, moving at <Math>{`v = 0.999c`}</Math>.
        </p>
        <div className="mt-4 grid grid-cols-1 md:grid-cols-2 gap-4">
          <div className="bg-dark-700/50 p-3 rounded-lg">
            <p className="text-primary-400 font-semibold">Earth's Viewpoint:</p>
            <p className="mt-1 text-sm">
              The muon lives <Math>{`\\approx 50`}</Math> microseconds, traveling{' '}
              <Math>{`\\approx 9.3`}</Math> miles. No surprise it reaches Earth!
            </p>
          </div>
          <div className="bg-dark-700/50 p-3 rounded-lg">
            <p className="text-primary-400 font-semibold">Muon's Viewpoint:</p>
            <p className="mt-1 text-sm">
              The Earth rushes toward it at <Math>{`0.999c`}</Math>. The 9-mile distance
              is contracted to:
            </p>
            <MathBlock>{`9\\sqrt{1-(0.999)^2} \\approx 0.4 \\text{ miles}`}</MathBlock>
            <p className="mt-1 text-sm">
              It meets Earth in less than 2.2 microseconds!
            </p>
          </div>
        </div>
      </div>

      <h3>A Note on Observation</h3>

      <p>
        The Lorentz-Fitzgerald contraction is considered a very real phenomenon.
        But it is not something you would literally "see" by looking at a moving object.
      </p>

      <p>
        If you take a snapshot of a truck driving toward you, it will actually appear
        <em> longer</em> than at rest! This is because light from the front (closer)
        reaches you more quickly than light from the back (farther away at the moment
        of emission). The image you see combines light emitted at different times from
        different positions.
      </p>

      <Callout type="info">
        <strong>Historical Note:</strong> The contraction of lengths in the direction
        of motion was actually proposed by G. F. Fitzgerald and later by H. A. Lorentz
        <em> before</em> Einstein's work. A "principle of relativity" was anticipated
        by H. Poincaré in 1904. Einstein's contribution was unifying these ideas into
        a coherent theory based on his fundamental postulate about the speed of light.
      </Callout>

      <Callout type="success">
        <strong>Chapter Summary:</strong> Einstein's postulate that the speed of light
        is constant for all observers leads to revolutionary conclusions:
        <ul className="list-disc list-inside mt-2 space-y-1">
          <li><strong>Simultaneity is relative:</strong> Events simultaneous for one observer may not be for another</li>
          <li><strong>Time dilation:</strong> Moving clocks run slow by factor <Math>{`\\sqrt{1-(v/c)^2}`}</Math></li>
          <li><strong>Length contraction:</strong> Moving objects are shortened by the same factor</li>
          <li><strong>Nothing travels faster than light:</strong> The speed <Math>c</Math> is the cosmic speed limit</li>
        </ul>
      </Callout>
    </LessonLayout>
  );
}
