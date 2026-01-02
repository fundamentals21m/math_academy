import { LessonLayout } from '@/components/layout/LessonLayout';
import { Callout } from '@/components/common/Callout';
import { MathBlock, InlineMath } from '@/components/common/MathBlock';
import { ScalingVisualizer } from '@/components/visualizations';

export default function Section07() {
  return (
    <LessonLayout sectionId={7}>
      <h2>Chapter 7: Areas and Volumes</h2>

      <p>
        Before reading this chapter, try to answer these questions:
      </p>

      <ul className="list-disc list-inside space-y-2 my-4 text-dark-300">
        <li>If a 10-inch pizza costs $3.00, what should a 15-inch pizza cost?</li>
        <li>If a flower pot 1 foot deep and 1 foot in diameter holds 5 gallons, what would be the capacity of a similar pot 2 feet deep and 2 feet in diameter?</li>
        <li>How many dimes can be placed flat on the face of a half-dollar with none overlapping?</li>
      </ul>

      <Callout type="warning">
        <strong>Surprise:</strong> The "obvious" answers ($4.50, 10 gallons, and 2-3 dimes) are all <em>wrong</em>!
        After studying this chapter, you'll understand why.
      </Callout>

      <h2>7.1 Areas</h2>

      <p>
        Any discussion of area begins with the rectangle. A rectangle <InlineMath>a</InlineMath> units
        by <InlineMath>b</InlineMath> units has area:
      </p>

      <MathBlock>{`A = ab \\text{ square units}`}</MathBlock>

      <div className="bg-dark-800 p-4 rounded-lg my-4 border-l-4 border-amber-500">
        <p className="font-semibold text-amber-400">Example: Comparing Rectangles</p>
        <p className="mt-2">
          How does the area of a 4-foot by 6-foot rectangle compare with that of a
          2-foot by 3-foot rectangle?
        </p>
        <p className="mt-2">
          <strong>Small:</strong> <InlineMath>{`2 \\times 3 = 6`}</InlineMath> square feet
        </p>
        <p>
          <strong>Large:</strong> <InlineMath>{`4 \\times 6 = 24`}</InlineMath> square feet—<em>four times</em> as large!
        </p>
      </div>

      <Callout type="success">
        <strong>Key Theorem (Areas):</strong> If each dimension of a region is multiplied
        by <InlineMath>m</InlineMath>, then the area is multiplied by <InlineMath>{`m^2`}</InlineMath>.
        <MathBlock>{`\\text{New Area} = m^2 \\times \\text{Original Area}`}</MathBlock>
      </Callout>

      <p>
        This explains why doubling the dimensions of a rectangle quadruples its area:
        <InlineMath>{`m = 2`}</InlineMath>, so the area multiplies by <InlineMath>{`m^2 = 4`}</InlineMath>.
      </p>

      <h3>The Pizza Problem</h3>

      <div className="bg-dark-800 p-4 rounded-lg my-4 border-l-4 border-amber-500">
        <p className="font-semibold text-amber-400">Example: Pizza Pricing</p>
        <p className="mt-2">
          If a 10-inch pizza costs $3.00, what should a 15-inch pizza cost?
        </p>
        <p className="mt-2">
          The multiplier is <InlineMath>{`m = 15/10 = 3/2`}</InlineMath>.
        </p>
        <p className="mt-2">
          The larger pizza has area <InlineMath>{`(3/2)^2 = 9/4`}</InlineMath> times the smaller.
        </p>
        <MathBlock>{`\\text{Price} = \\$3.00 \\times \\frac{9}{4} = \\$6.75`}</MathBlock>
        <p className="mt-2 text-emerald-400">
          Not $4.50—that would be a bargain!
        </p>
      </div>

      <ScalingVisualizer />

      <h3>Why This Works for Any Shape</h3>

      <p>
        This <InlineMath>{`m^2`}</InlineMath> rule works for <em>any</em> plane region, not just rectangles.
        The idea: approximate any shape with small rectangles. When you scale up by <InlineMath>m</InlineMath>,
        each small rectangle's area scales by <InlineMath>{`m^2`}</InlineMath>, so the total area scales by <InlineMath>{`m^2`}</InlineMath>.
      </p>

      <div className="grid grid-cols-2 md:grid-cols-4 gap-4 my-6">
        <div className="bg-dark-800/50 rounded-xl p-4 border border-dark-700 text-center">
          <p className="text-dark-400 text-sm">Circle</p>
          <p className="text-primary-400 font-semibold"><InlineMath>{`\\pi r^2`}</InlineMath></p>
        </div>
        <div className="bg-dark-800/50 rounded-xl p-4 border border-dark-700 text-center">
          <p className="text-dark-400 text-sm">Triangle</p>
          <p className="text-primary-400 font-semibold"><InlineMath>{`\\frac{1}{2}bh`}</InlineMath></p>
        </div>
        <div className="bg-dark-800/50 rounded-xl p-4 border border-dark-700 text-center">
          <p className="text-dark-400 text-sm">Rectangle</p>
          <p className="text-primary-400 font-semibold"><InlineMath>{`ab`}</InlineMath></p>
        </div>
        <div className="bg-dark-800/50 rounded-xl p-4 border border-dark-700 text-center">
          <p className="text-dark-400 text-sm">Any shape!</p>
          <p className="text-primary-400 font-semibold"><InlineMath>{`\\times m^2`}</InlineMath></p>
        </div>
      </div>

      <h2>7.2 Volumes</h2>

      <p>
        Just as areas scale by <InlineMath>{`m^2`}</InlineMath>, volumes scale by <InlineMath>{`m^3`}</InlineMath>.
        A rectangular solid <InlineMath>a</InlineMath> by <InlineMath>b</InlineMath> by <InlineMath>c</InlineMath> has volume:
      </p>

      <MathBlock>{`V = abc \\text{ cubic units}`}</MathBlock>

      <Callout type="success">
        <strong>Key Theorem (Volumes):</strong> If each dimension of a solid is multiplied
        by <InlineMath>m</InlineMath>, then the volume is multiplied by <InlineMath>{`m^3`}</InlineMath>.
        <MathBlock>{`\\text{New Volume} = m^3 \\times \\text{Original Volume}`}</MathBlock>
      </Callout>

      <div className="bg-dark-800 p-4 rounded-lg my-4 border-l-4 border-amber-500">
        <p className="font-semibold text-amber-400">Example: The Flower Pot</p>
        <p className="mt-2">
          A flower pot 1 foot deep and 1 foot in diameter holds 5 gallons. What about
          a similar pot 2 feet deep and 2 feet in diameter?
        </p>
        <p className="mt-2">
          The multiplier is <InlineMath>{`m = 2`}</InlineMath>, so the volume multiplies by <InlineMath>{`m^3 = 8`}</InlineMath>.
        </p>
        <MathBlock>{`\\text{Capacity} = 5 \\times 8 = 40 \\text{ gallons}`}</MathBlock>
        <p className="mt-2 text-emerald-400">
          Not 10 gallons—eight times as much!
        </p>
      </div>

      <div className="bg-dark-800 p-4 rounded-lg my-4 border-l-4 border-amber-500">
        <p className="font-semibold text-amber-400">Example: Ball of String</p>
        <p className="mt-2">
          If a ball of string 2 inches in diameter contains 400 feet of string, how much
          is in a similar ball 3 inches in diameter?
        </p>
        <p className="mt-2">
          <InlineMath>{`m = 3/2`}</InlineMath>, so volume multiplies by <InlineMath>{`m^3 = 27/8`}</InlineMath>.
        </p>
        <MathBlock>{`\\text{String} = 400 \\times \\frac{27}{8} = 1350 \\text{ feet}`}</MathBlock>
      </div>

      <h3>The Dime Problem Solved</h3>

      <div className="bg-dark-800 p-4 rounded-lg my-4 border-l-4 border-indigo-500">
        <p className="font-semibold text-indigo-400">Example: Dimes on a Half-Dollar</p>
        <p className="mt-2">
          Silver dimes, quarters, and half-dollars were made with volumes proportional
          to their values. If a half-dollar has <InlineMath>{`m`}</InlineMath> times the dimensions of a dime:
        </p>
        <MathBlock>{`m^3 = 5 \\quad \\Rightarrow \\quad m = \\sqrt[3]{5} \\approx 1.71`}</MathBlock>
        <p className="mt-2">
          Since <InlineMath>{`m < 2`}</InlineMath>, the half-dollar's diameter is less than twice a dime's.
        </p>
        <p className="mt-2 text-emerald-400">
          You can only fit <strong>one</strong> dime on top!
        </p>
      </div>

      <h3>Archimedes and the Golden Crown</h3>

      <p>
        How do you find the volume of an irregularly shaped object like a crown?
        Archimedes discovered the answer while getting into his bath: the water that
        overflows equals the volume of the immersed object. Legend says he ran through
        the streets shouting "Eureka!" (I have found it!)
      </p>

      <p>
        This allowed him to test whether King Hieron's crown was truly pure gold
        (gold is 1.8 times as dense as silver). Indeed, the crown was found to be fake.
      </p>

      <h2>7.3 Surface Area vs. Volume</h2>

      <p>
        Surface area scales differently from volume. When dimensions multiply by <InlineMath>m</InlineMath>:
      </p>

      <ul className="list-disc list-inside space-y-2 my-4 text-dark-300">
        <li><strong className="text-primary-400">Surface area</strong> multiplies by <InlineMath>{`m^2`}</InlineMath></li>
        <li><strong className="text-primary-400">Volume</strong> multiplies by <InlineMath>{`m^3`}</InlineMath></li>
      </ul>

      <p>
        This difference has profound consequences in nature and engineering!
      </p>

      <Callout type="info">
        <strong>The Key Insight:</strong> As objects get larger, their volume grows faster
        than their surface area. The ratio of volume to surface area increases with size.
      </Callout>

      <h3>Applications</h3>

      <div className="bg-dark-800 p-4 rounded-lg my-4 border-l-4 border-amber-500">
        <p className="font-semibold text-amber-400">Cooling Rate</p>
        <p className="mt-2">
          Heat content depends on <em>volume</em>, but heat escapes through <em>surface area</em>.
          A half-dollar has 5 times the heat of a dime but only 3 times the surface area—so
          it cools more slowly.
        </p>
      </div>

      <div className="bg-dark-800 p-4 rounded-lg my-4 border-l-4 border-amber-500">
        <p className="font-semibold text-amber-400">Why Dinosaurs Could Be So Big</p>
        <p className="mt-2">
          Bone strength depends on cross-sectional <em>area</em> (<InlineMath>{`m^2`}</InlineMath>), but
          weight depends on <em>volume</em> (<InlineMath>{`m^3`}</InlineMath>). As animals get larger,
          weight grows faster than strength. This sets a theoretical limit on animal size!
        </p>
      </div>

      <div className="bg-dark-800 p-4 rounded-lg my-4 border-l-4 border-amber-500">
        <p className="font-semibold text-amber-400">Why Ants Survive Falls</p>
        <p className="mt-2">
          Air resistance depends on surface area, but weight depends on volume. Small
          creatures have a large surface-area-to-volume ratio, so air resistance slows
          them more. An ant can fall from any height and survive!
        </p>
      </div>

      <h2>7.4 Computation of Cube Roots</h2>

      <p>
        Volume problems often require finding cube roots. To find <InlineMath>{`\\sqrt[3]{a}`}</InlineMath>,
        we use an iterative method similar to the Babylonian method for square roots.
      </p>

      <Callout type="info">
        <strong>Cube Root Algorithm:</strong> Start with a guess <InlineMath>{`x_1`}</InlineMath>,
        then iterate:
        <MathBlock>{`x_{n+1} = \\frac{1}{3}\\left(\\frac{a}{x_n^2} + 2x_n\\right)`}</MathBlock>
        This is a weighted average: one part <InlineMath>{`a/x_n^2`}</InlineMath> and two parts <InlineMath>{`x_n`}</InlineMath>.
      </Callout>

      <div className="bg-dark-800 p-4 rounded-lg my-4 border-l-4 border-amber-500">
        <p className="font-semibold text-amber-400">Example: Finding <InlineMath>{`\\sqrt[3]{5}`}</InlineMath></p>
        <p className="mt-2">Start with <InlineMath>{`x_1 = 2`}</InlineMath>:</p>
        <div className="mt-2 font-mono text-dark-300 space-y-1">
          <p><InlineMath>{`x_2 = \\frac{1}{3}\\left(\\frac{5}{4} + 4\\right) = 1.75`}</InlineMath></p>
          <p><InlineMath>{`x_3 = \\frac{1}{3}\\left(\\frac{5}{(1.75)^2} + 3.5\\right) = 1.71`}</InlineMath></p>
          <p><InlineMath>{`x_4 = \\frac{1}{3}\\left(\\frac{5}{(1.71)^2} + 3.42\\right) = 1.71`}</InlineMath></p>
        </div>
        <p className="mt-2 text-emerald-400">
          After just 3 iterations: <InlineMath>{`\\sqrt[3]{5} \\approx 1.71`}</InlineMath>
        </p>
      </div>

      <Callout type="success">
        <strong>Chapter Summary:</strong> When dimensions scale by <InlineMath>m</InlineMath>, areas
        scale by <InlineMath>{`m^2`}</InlineMath> and volumes scale by <InlineMath>{`m^3`}</InlineMath>. This explains
        why a 15-inch pizza should cost 2.25 times a 10-inch pizza, not 1.5 times. The
        different scaling rates for surface area and volume explain phenomena from
        cooling rates to the limits of animal size. Cube roots can be computed
        iteratively using a weighted average formula.
      </Callout>
    </LessonLayout>
  );
}
