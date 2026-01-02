import { LessonLayout } from '../../components/layout/LessonLayout';
import { Callout } from '../../components/common/Callout';
import { Card, CardGrid, CardHeader } from '../../components/common/Card';
import { InlineMath, MathBlock } from '../../components/common/MathBlock';
import { SectionQuiz } from '../../components/quiz';
import { section11Questions } from '../../data/quizzes';

export default function Section11() {
  return (
    <LessonLayout sectionId={11}>
      <h2 className="text-2xl font-semibold mb-4">Mathematics in Athens</h2>

      <p className="text-dark-200 mb-6 text-lg leading-relaxed">
        After an alliance of Greek cities defeated the Persians in <strong>490 BC</strong>,
        Athens became, for over a hundred years, a great center of civilization.
        The degree of culture achieved by the Athenians around 400 BC has rarely
        been surpassed in history. Here we focus on the remarkable mathematical
        developments of this golden age.
      </p>

      <Callout type="info">
        <p>
          Three classical problems dominated Greek mathematics: <strong>squaring
          the circle</strong>, <strong>trisecting an angle</strong>, and{' '}
          <strong>doubling the cube</strong>. All three were eventually proven
          impossible using only straightedge and compass.
        </p>
      </Callout>

      {/* Hippias and the Quadratrix */}
      <h3 className="text-xl font-semibold mt-10 mb-4">Hippias and the Quadratrix</h3>

      <p className="text-dark-200 mb-6">
        One of the first mathematicians to work in Athens was the sophist{' '}
        <strong>Hippias of Elis</strong> (c. 420 BC). In a dialogue sometimes
        ascribed to Plato, we hear Socrates teasing Hippias about his mathematical
        abilities.
      </p>

      <p className="text-dark-200 mb-6">
        Hippias discovered a remarkable curve called the <strong>quadratrix</strong>,
        which can be used for both <em>trisecting an arbitrary angle</em> and{' '}
        <em>squaring the circle</em>. He described it as follows:
      </p>

      <div className="bg-dark-800 rounded-lg p-6 mb-6 border-l-4 border-cyan-400">
        <h4 className="text-lg font-semibold mb-3 text-cyan-400">
          Constructing the Quadratrix
        </h4>
        <p className="text-dark-300 mb-3">
          Imagine a unit square ABCD. Side AD moves downward at a constant rate
          toward BC, while side AB rotates about B toward BC. Both reach BC at
          the same time. The curve traced by their intersection is the quadratrix.
        </p>
        <p className="text-dark-400 text-sm">
          In modern notation: <InlineMath>{`y = x \\tan(90° \\cdot y)`}</InlineMath>
        </p>
      </div>

      <p className="text-dark-200 mb-6">
        To trisect a 60° angle, place it with vertex at origin and one arm along
        the positive x-axis. If the other arm meets the quadratrix at{' '}
        <InlineMath>(a, b)</InlineMath>, find where <InlineMath>{`y = b/3`}</InlineMath>{' '}
        meets the quadratrix. The line from this point to the origin makes a
        20° angle with the x-axis.
      </p>

      <Callout type="warning">
        <p>
          Plato criticized the quadratrix as inelegant — he insisted that
          geometric constructions should use only <strong>straightedge and
          compass</strong>. However, <strong>Pierre Wantzel</strong> (1814–1848)
          proved that trisecting an arbitrary angle with straightedge and compass
          alone is <em>impossible</em>. Hippias was right; Plato was wrong!
        </p>
      </Callout>

      {/* Antiphon and the Circle */}
      <h3 className="text-xl font-semibold mt-10 mb-4">Antiphon and the Area of a Circle</h3>

      <p className="text-dark-200 mb-6">
        <strong>Antiphon the sophist</strong> (c. 425 BC) worked on the problem
        of finding the area of a circle. He suggested calculating the area using{' '}
        <strong>inscribed regular polygons</strong>.
      </p>

      <p className="text-dark-200 mb-6">
        Using what we now call <strong>mathematical induction</strong>, one can
        show that an inscribed regular <InlineMath>{`2^n`}</InlineMath>-gon takes
        up more than <InlineMath>{`1 - 1/2^{n-1}`}</InlineMath> of the circle's area:
      </p>

      <div className="bg-dark-800 rounded-lg p-6 mb-6">
        <ul className="space-y-2 text-dark-300">
          <li>• Inscribed square: more than <strong>1/2</strong> of circle area</li>
          <li>• Inscribed octagon: more than <strong>3/4</strong> of circle area</li>
          <li>• Inscribed 16-gon: more than <strong>7/8</strong> of circle area</li>
          <li>• And so on...</li>
        </ul>
      </div>

      <p className="text-dark-200 mb-6">
        Antiphon boldly claimed that a circle simply <em>is</em> a regular polygon
        with a very large number of sides. This entered the debate about whether
        space is <strong>continuous or discrete</strong>.
      </p>

      <p className="text-dark-200 mb-6">
        Later, <strong>Eudoxus</strong> (408–355 BC) gave a rigorous proof that
        the area of a circle is proportional to the square of its diameter — a
        result we express today as <InlineMath>{`A = \\pi r^2`}</InlineMath>.
      </p>

      {/* Hippocrates of Chios */}
      <h3 className="text-xl font-semibold mt-10 mb-4">Hippocrates of Chios</h3>

      <p className="text-dark-200 mb-6">
        <strong>Hippocrates of Chios</strong> (not to be confused with the
        physician famous for the Hippocratic oath) came to Athens around 430 BC.
        Legend says he had been swindled in business and came to pursue legal
        action. While the case dragged on, he studied philosophy and supported
        himself by teaching geometry.
      </p>

      <CardGrid>
        <Card>
          <CardHeader title="Euclid's Elements" />
          <p className="text-sm text-dark-300">
            Hippocrates was responsible for much of the material in{' '}
            <strong>Books III and IV</strong> of Euclid's Elements.
          </p>
        </Card>
        <Card>
          <CardHeader title="The Word 'Power'" />
          <p className="text-sm text-dark-300">
            He called the square of a quantity <em>dynamos</em> — hence our
            word <strong>"power"</strong> in mathematics.
          </p>
        </Card>
        <Card>
          <CardHeader title="Proof by Contradiction" />
          <p className="text-sm text-dark-300">
            He pioneered <strong>reductio ad absurdum</strong> and reducing
            one theorem to another.
          </p>
        </Card>
      </CardGrid>

      {/* The Lunes of Hippocrates */}
      <h3 className="text-xl font-semibold mt-10 mb-4">The Lunes of Hippocrates</h3>

      <p className="text-dark-200 mb-6">
        Hippocrates was the <strong>first mathematician to find the exact area
        of a region bounded by curves</strong>. His famous result concerns{' '}
        <strong>lunes</strong> (crescent-shaped regions).
      </p>

      <div className="bg-dark-800 rounded-lg p-6 mb-6 border-l-4 border-amber-400">
        <h4 className="text-lg font-semibold mb-3 text-amber-400">
          Construction of the Lunes
        </h4>
        <p className="text-dark-300 mb-3">
          Construct semicircles on all three sides of a right triangle ABC
          (with right angle at C). The semicircle on the hypotenuse AB passes
          through C (by the converse of Thales's theorem). The other semicircles
          lie outside the triangle.
        </p>
        <p className="text-dark-300">
          The crescent-shaped regions between the smaller semicircles and the
          large semicircle are the <strong>lunes</strong>.
        </p>
      </div>

      <p className="text-dark-200 mb-6">
        Hippocrates proved a beautiful result:
      </p>

      <MathBlock>{`\\text{Area of lune AC} + \\text{Area of lune CB} = \\text{Area of triangle } ABC`}</MathBlock>

      <p className="text-dark-200 mt-6 mb-6">
        <strong>Proof:</strong> By the Pythagorean theorem,{' '}
        <InlineMath>{`AC^2 + CB^2 = AB^2`}</InlineMath>. Since semicircle area
        is proportional to the square of the diameter:
      </p>

      <MathBlock>{`\\text{semicircle on } AC + \\text{semicircle on } CB = \\text{semicircle on } AB`}</MathBlock>

      <p className="text-dark-200 mt-6 mb-6">
        Subtracting the overlapping regions gives the result. This was the first
        exact calculation of a curved area in history!
      </p>

      {/* Doubling the Cube */}
      <h3 className="text-xl font-semibold mt-10 mb-4">Doubling the Cube</h3>

      <p className="text-dark-200 mb-6">
        Hippocrates also worked on the famous problem of <strong>doubling the
        cube</strong>: finding a length <InlineMath>x</InlineMath> such that{' '}
        <InlineMath>{`x^3 = 2`}</InlineMath>.
      </p>

      <div className="bg-dark-800 rounded-lg p-6 mb-6 border-l-4 border-purple-400">
        <h4 className="text-lg font-semibold mb-3 text-purple-400">
          The Delian Problem
        </h4>
        <p className="text-dark-300 mb-3">
          Legend says that during the plague of 430 BC, the Athenians consulted
          the oracle of Delos. The oracle told them to <strong>double the altar
          of Apollo</strong> (a marble cube). When the plague continued, the
          oracle explained they had doubled the <em>edge</em>, not the <em>volume</em>.
        </p>
        <p className="text-dark-400 text-sm">
          (The plague eventually stopped anyway.)
        </p>
      </div>

      <p className="text-dark-200 mb-6">
        Hippocrates made progress by showing that if one could find{' '}
        <InlineMath>x</InlineMath> and <InlineMath>y</InlineMath> such that:
      </p>

      <MathBlock>{`\\frac{1}{x} = \\frac{x}{y} = \\frac{y}{2}`}</MathBlock>

      <p className="text-dark-200 mt-6 mb-6">
        then <InlineMath>{`x^3 = 2`}</InlineMath>. These are called{' '}
        <strong>two mean proportionals</strong> between 1 and 2. However, he
        could not construct them with straightedge and compass — which was
        later proven impossible.
      </p>

      {/* Key Takeaways */}
      <h3 className="text-xl font-semibold mt-10 mb-4">Key Takeaways</h3>

      <div className="bg-dark-800 rounded-lg p-6">
        <ul className="space-y-3">
          <li className="flex items-start gap-3">
            <span className="text-amber-400 font-bold">1.</span>
            <span>
              After defeating the Persians in 490 BC, <strong>Athens</strong>{' '}
              became a major center of mathematics for over a century.
            </span>
          </li>
          <li className="flex items-start gap-3">
            <span className="text-amber-400 font-bold">2.</span>
            <span>
              <strong>Hippias</strong> invented the quadratrix, which can trisect
              angles and square the circle — though Plato rejected it as
              "inelegant."
            </span>
          </li>
          <li className="flex items-start gap-3">
            <span className="text-amber-400 font-bold">3.</span>
            <span>
              <strong>Antiphon</strong> approximated circle area with inscribed
              polygons; <strong>Eudoxus</strong> later proved the area is
              proportional to the square of the diameter.
            </span>
          </li>
          <li className="flex items-start gap-3">
            <span className="text-amber-400 font-bold">4.</span>
            <span>
              <strong>Hippocrates of Chios</strong> contributed to Euclid's
              Elements, pioneered proof by contradiction, and found the exact
              area of curved lunes.
            </span>
          </li>
          <li className="flex items-start gap-3">
            <span className="text-amber-400 font-bold">5.</span>
            <span>
              The <strong>Delian problem</strong> (doubling the cube) led
              Hippocrates to reduce it to finding two mean proportionals —
              impossible with straightedge and compass alone.
            </span>
          </li>
        </ul>
      </div>

      {/* Section Quiz */}
      <SectionQuiz sectionId={11} questions={section11Questions} />
    </LessonLayout>
  );
}
