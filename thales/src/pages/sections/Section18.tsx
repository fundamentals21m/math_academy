import { LessonLayout } from '../../components/layout/LessonLayout';
import { Callout } from '../../components/common/Callout';
import { Card, CardGrid, CardHeader } from '../../components/common/Card';
import { InlineMath, MathBlock } from '../../components/common/MathBlock';
import { SectionQuiz } from '../../components/quiz';
import { section18Questions } from '../../data/quizzes';

export default function Section18() {
  return (
    <LessonLayout sectionId={18}>
      <h2 className="text-2xl font-semibold mb-4">Archimedes</h2>

      <p className="text-dark-200 mb-6 text-lg leading-relaxed">
        <strong>Archimedes of Syracuse</strong> (287–212 BC) was the greatest applied
        mathematician and physicist before Newton. His work on geometry, especially
        on circles, spheres, and parabolas, anticipated the methods of calculus by
        nearly two thousand years. His contributions to physics—the theory of the
        lever and hydrostatics—founded these sciences.
      </p>

      {/* The Eureka Story */}
      <h3 className="text-xl font-semibold mt-8 mb-4">Eureka! The Gold Crown Problem</h3>

      <p className="text-dark-200 mb-4">
        Many stories are told about Archimedes. The most famous relates that while
        taking a bath, he suddenly discovered a simple way to determine the ratio of
        gold to silver in an alloy. Elated by his discovery, he leapt from the bath
        and ran through the streets of Syracuse shouting <strong>"Eureka!"</strong>
        (meaning "I have found it!")—unfortunately having forgotten to get dressed.
      </p>

      <Card className="mb-6">
        <CardHeader>The Method of Displacement</CardHeader>
        <div className="text-dark-300 space-y-3">
          <p>
            Suppose you have an object made of gold and silver weighing <InlineMath>{`m`}</InlineMath> ounces,
            and want to find the mass <InlineMath>{`x`}</InlineMath> of gold. If <InlineMath>{`g`}</InlineMath> is the
            density of gold and <InlineMath>{`s`}</InlineMath> the density of silver, the volume is:
          </p>
          <MathBlock>{`v = \\frac{x}{g} + \\frac{m-x}{s}`}</MathBlock>
          <p>
            Archimedes realized that by immersing the object in a bath and observing the
            increase in water level, you can determine its volume <InlineMath>{`v`}</InlineMath>. Solving
            for <InlineMath>{`x`}</InlineMath> reveals the mass of gold. This allowed Archimedes to tell
            his friend King Hieron whether a goldsmith had cheated him.
          </p>
        </div>
      </Card>

      {/* Defense of Syracuse */}
      <h3 className="text-xl font-semibold mt-8 mb-4">The Defense of Syracuse</h3>

      <p className="text-dark-200 mb-4">
        When Syracuse was besieged by a Roman army, Archimedes constructed various
        machines to defend his city:
      </p>

      <div className="bg-dark-800 rounded-lg p-4 mb-6">
        <ul className="text-dark-200 space-y-2">
          <li>• <strong>Catapults and crossbows</strong> to attack enemy ships</li>
          <li>• <strong>Devices that dropped huge stones</strong> on Roman ships</li>
          <li>• <strong>A crane</strong> that could lift a ship from the water and drop it back stern-first</li>
        </ul>
      </div>

      <p className="text-dark-200 mb-4">
        When Syracuse finally fell in 212 BC, the Roman general Marcellus gave orders
        to bring Archimedes to him unharmed. These orders were not obeyed—Archimedes
        was slain by an unknown soldier. The best-known account is by Plutarch in his
        biography of Marcellus.
      </p>

      <Callout type="info" title="A Lasting Legacy">
        Who today would know of Marcellus were it not for Archimedes?
      </Callout>

      {/* Mathematical Works */}
      <h3 className="text-xl font-semibold mt-8 mb-4">Mathematical Works</h3>

      <p className="text-dark-200 mb-4">
        Archimedes wrote on many subjects: the circle, the parabola, the spiral, the
        sphere, the cylinder, arithmetic, mechanics, statics, and hydrostatics. One of
        his more interesting books, the <em>Method</em>, was lost for centuries and only
        rediscovered in 1906.
      </p>

      <CardGrid columns={2}>
        <Card>
          <CardHeader>Key Formulas</CardHeader>
          <ul className="text-dark-300 space-y-2">
            <li>• Area of circle: <InlineMath>{`\\pi r^2`}</InlineMath></li>
            <li>• Volume of sphere: <InlineMath>{`\\frac{4}{3}\\pi r^3`}</InlineMath></li>
            <li>• Area bounded by parabola and chord</li>
            <li>• Area of a sector of a spiral</li>
            <li>• Volume of ellipsoid of revolution</li>
          </ul>
        </Card>
        <Card>
          <CardHeader>Remarkable Calculations</CardHeader>
          <ul className="text-dark-300 space-y-2">
            <li>• Volume of a segment of a sphere</li>
            <li>• Centroid of a hemisphere</li>
            <li>• Volume common to two perpendicular cylinders</li>
            <li>• All these are <em>calculus problems</em>!</li>
          </ul>
        </Card>
      </CardGrid>

      {/* Approximation of Pi */}
      <h3 className="text-xl font-semibold mt-8 mb-4">Approximating π</h3>

      <p className="text-dark-200 mb-4">
        Archimedes gave the first rigorous bounds on π by considering regular polygons
        inscribed in and circumscribed about a circle.
      </p>

      <Card className="mb-6">
        <CardHeader>Archimedes's Bounds on π</CardHeader>
        <div className="text-dark-300 space-y-3">
          <p>
            By considering a regular <strong>96-gon inscribed</strong> in a circle:
          </p>
          <MathBlock>{`\\pi < 3\\frac{1}{7} \\approx 3.1429`}</MathBlock>
          <p>
            By considering a regular <strong>96-gon circumscribed</strong> about a circle:
          </p>
          <MathBlock>{`3\\frac{10}{71} < \\pi \\approx 3.1408`}</MathBlock>
          <p className="text-dark-400 text-sm">
            Archimedes knew that π could be calculated to any desired accuracy by letting
            the number of sides tend to infinity. (The first person to use the symbol π
            was William Jones in 1706.)
          </p>
        </div>
      </Card>

      {/* Proof of Circle Area */}
      <h3 className="text-xl font-semibold mt-8 mb-4">The Method of Exhaustion</h3>

      <p className="text-dark-200 mb-4">
        Archimedes proved that the area of a circle equals <InlineMath>{`\\pi r^2`}</InlineMath> using
        the <strong>method of exhaustion</strong>—a precursor to integral calculus. His
        proof was the culmination of about 200 years of work on the circle, beginning
        with Antiphon (425 BC).
      </p>

      <Callout type="success" title="Area of a Circle">
        The area of a circle equals that of a right triangle whose legs equal the
        radius and circumference of the circle:
        <MathBlock>{`\\text{Area} = \\frac{1}{2} \\times \\text{circumference} \\times \\text{radius} = \\pi r^2`}</MathBlock>
      </Callout>

      <p className="text-dark-200 mb-4 mt-4">
        Archimedes proved this by contradiction. He showed that:
      </p>

      <div className="bg-dark-800 rounded-lg p-4 mb-6">
        <ul className="text-dark-200 space-y-2">
          <li><strong>(A)</strong> If the circle's area is <em>greater</em> than the triangle's, we get a contradiction</li>
          <li><strong>(B)</strong> If the circle's area is <em>less</em> than the triangle's, we get a contradiction</li>
        </ul>
        <p className="text-dark-300 mt-3">
          By Aristotle's Law of Excluded Middle, the areas must be <em>equal</em>.
        </p>
      </div>

      <p className="text-dark-200 mb-4">
        This argument uses what we now call the <strong>Axiom of Archimedes</strong>:
        given any areas <InlineMath>{`e`}</InlineMath> and <InlineMath>{`f`}</InlineMath>, there exists a
        natural number <InlineMath>{`m`}</InlineMath> such that <InlineMath>{`me > f`}</InlineMath>. (This
        axiom actually appears earlier in Euclid's <em>Elements</em> Book V and in
        Aristotle's <em>Physics</em>.)
      </p>

      {/* The Cattle Problem */}
      <h3 className="text-xl font-semibold mt-8 mb-4">The Cattle Problem</h3>

      <p className="text-dark-200 mb-4">
        Archimedes communicated his results to mathematicians back in Alexandria. He
        became annoyed when they suspiciously often claimed to have made the same
        discoveries. To fool them, Archimedes included false results in one book. To
        challenge them, he posed the famous <strong>Cattle Problem</strong>.
      </p>

      <Card className="mb-6">
        <CardHeader>Archimedes's Cattle Problem</CardHeader>
        <div className="text-dark-300 space-y-3">
          <p>
            The sun god had a herd of cattle: white, grey, brown, and spotted bulls
            (and cows of matching colors). Given seven equations relating their numbers,
            plus two additional conditions (that the sum of white and grey bulls is a
            perfect square, and brown plus spotted bulls is a triangular number), find
            the total number of cattle.
          </p>
          <p className="text-amber-400 font-semibold">
            The mathematicians at Alexandria could not solve this problem!
          </p>
        </div>
      </Card>

      <p className="text-dark-200 mb-4">
        The problem reduces to finding integer solutions to:
      </p>

      <MathBlock>{`(2n+1)^2 - 8(2471)(957)(4657^2)t^2 = 1`}</MathBlock>

      <p className="text-dark-200 mb-4">
        This problem was not solved until <strong>1965</strong>, when H.C. Williams,
        R.A. German, and C.R. Zarnke used a computer to generate the answer. The total
        number of cattle has <strong>206,545 digits</strong>! The full answer was first
        published in 1980–1981.
      </p>

      {/* Physics Contributions */}
      <h3 className="text-xl font-semibold mt-8 mb-4">Contributions to Physics</h3>

      <p className="text-dark-200 mb-4">
        It is impossible to do full justice to Archimedes's important contributions
        to physics. He developed:
      </p>

      <CardGrid columns={2}>
        <Card>
          <CardHeader>Theory of the Lever</CardHeader>
          <p className="text-dark-300">
            Archimedes famously said: "Give me a place to stand and I will move the Earth."
            He developed the mathematical theory of levers and mechanical advantage.
          </p>
        </Card>
        <Card>
          <CardHeader>Hydrostatics</CardHeader>
          <p className="text-dark-300">
            <strong>Archimedes's Principle:</strong> A body immersed in fluid experiences
            an upward buoyant force equal to the weight of the fluid displaced.
          </p>
        </Card>
      </CardGrid>

      {/* Summary */}
      <h3 className="text-xl font-semibold mt-8 mb-4">Summary</h3>

      <div className="bg-dark-800 rounded-lg p-4 mb-6">
        <ul className="text-dark-200 space-y-2">
          <li>• Greatest mathematician and physicist before Newton</li>
          <li>• Bounded π: <InlineMath>{`3\\frac{10}{71} < \\pi < 3\\frac{1}{7}`}</InlineMath></li>
          <li>• Proved <InlineMath>{`\\text{Area} = \\pi r^2`}</InlineMath> and <InlineMath>{`\\text{Volume} = \\frac{4}{3}\\pi r^3`}</InlineMath></li>
          <li>• Used the <strong>method of exhaustion</strong>—precursor to calculus</li>
          <li>• The <strong>Cattle Problem</strong> wasn't solved until 1965 (206,545 digit answer!)</li>
          <li>• Founded <strong>hydrostatics</strong> and the theory of the <strong>lever</strong></li>
        </ul>
      </div>

      {/* Section Quiz */}
      <SectionQuiz sectionId={18} questions={section18Questions} />
    </LessonLayout>
  );
}
