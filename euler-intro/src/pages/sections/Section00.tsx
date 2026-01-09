import { LessonLayout } from '@/components/layout/LessonLayout';
import { Callout } from '@/components/common/Callout';
import { MathBlock, InlineMath } from '@/components/common/MathBlock';

export default function Section00() {
  return (
    <LessonLayout sectionId={0}>
      <h2>Chapter I: On Curved Lines in General</h2>
      <p className="text-lg text-dark-300 italic mb-6">
        Caput I: De lineis curvis in genere
      </p>

      <p>
        In this foundational chapter, Euler establishes the framework for studying curved lines
        through the lens of algebraic equations. This revolutionary approach unified geometry
        and algebra in a way that transformed mathematics forever.
      </p>

      <Callout type="info">
        <strong>Historical Context:</strong> The <em>Introductio in Analysin Infinitorum</em> (1748)
        was one of Euler's most influential works. Volume II focuses on the theory of curves,
        building the foundation for what we now call analytic geometry and calculus.
      </Callout>

      <h2>The Variable Quantity and the Coordinate System</h2>

      <p>
        Euler begins by explaining how a <strong>variable quantity</strong> can be represented
        geometrically. Since a variable can take on infinitely many values, it is most conveniently
        represented by an <strong>indefinite straight line</strong> <InlineMath>RS</InlineMath>.
      </p>

      <p>
        On this line, we fix a point <InlineMath>A</InlineMath> as the <strong>origin</strong>,
        from which all measurements begin. Any segment <InlineMath>AP</InlineMath> cut off from
        this line represents a specific value of the variable <InlineMath>x</InlineMath>.
      </p>

      <div className="bg-dark-800/50 rounded-xl p-6 border border-dark-700 my-6">
        <h3 className="text-primary-400 mb-4">Key Terminology</h3>
        <ul className="space-y-3">
          <li>
            <strong className="text-amber-400">Abscissa</strong> (plural: Abscissae): The horizontal
            distance <InlineMath>AP</InlineMath>, representing values of the variable <InlineMath>x</InlineMath>.
          </li>
          <li>
            <strong className="text-amber-400">Ordinate</strong> (or Applicata): The perpendicular
            distance <InlineMath>PM</InlineMath>, representing the value of the function <InlineMath>y</InlineMath>.
          </li>
          <li>
            <strong className="text-amber-400">Coordinates</strong>: Together, the pair <InlineMath>(x, y)</InlineMath>
            determines a unique point in the plane.
          </li>
        </ul>
      </div>

      <h2>Positive and Negative Values</h2>

      <p>
        Since the line <InlineMath>RS</InlineMath> extends indefinitely in both directions from
        <InlineMath>A</InlineMath>, values of <InlineMath>x</InlineMath> can be cut off on either side.
      </p>

      <MathBlock>{`\\text{If } AP \\text{ to the right represents positive } x,`}</MathBlock>
      <MathBlock>{`\\text{then } Ap \\text{ to the left represents negative } x.`}</MathBlock>

      <p>
        When point <InlineMath>P</InlineMath> is at <InlineMath>A</InlineMath> itself,
        the interval vanishes and <InlineMath>x = 0</InlineMath>. As <InlineMath>P</InlineMath>
        moves to the right, <InlineMath>x</InlineMath> increases; as it moves to the left
        past <InlineMath>A</InlineMath>, <InlineMath>x</InlineMath> becomes negative.
      </p>

      <Callout type="success">
        <strong>Modern Notation:</strong> What Euler calls the "abscissa" corresponds to our
        <InlineMath>x</InlineMath>-coordinate, and his "ordinate" or "applicata" corresponds
        to our <InlineMath>y</InlineMath>-coordinate.
      </Callout>

      <h2>Functions and Their Geometric Representation</h2>

      <p>
        Euler now introduces the crucial concept: let <InlineMath>y</InlineMath> be any
        <strong> function</strong> of <InlineMath>x</InlineMath>. For each value of <InlineMath>x</InlineMath>,
        this function yields a corresponding value of <InlineMath>y</InlineMath>.
      </p>

      <p>
        Taking the indefinite line <InlineMath>RAS</InlineMath> as our <strong>axis</strong>,
        for each abscissa <InlineMath>AP = x</InlineMath>, we erect a perpendicular line
        <InlineMath>PM</InlineMath> equal to the value of <InlineMath>y</InlineMath>:
      </p>

      <ul className="list-disc list-inside space-y-2 my-4 text-dark-300">
        <li>If <InlineMath>y</InlineMath> is positive, <InlineMath>PM</InlineMath> is drawn above the axis</li>
        <li>If <InlineMath>y</InlineMath> is negative, <InlineMath>PM</InlineMath> is drawn below the axis</li>
        <li>If <InlineMath>y = 0</InlineMath>, the point <InlineMath>M</InlineMath> lies on the axis itself</li>
      </ul>

      <div className="bg-dark-800 p-4 rounded-lg my-4 border-l-4 border-amber-500">
        <p className="font-semibold text-amber-400">Euler's Key Insight</p>
        <p>
          "Thus the endpoints of all the ordinates <InlineMath>PM</InlineMath> will represent
          a certain line, whether straight or curved, which is determined by the function
          <InlineMath>y</InlineMath>."
        </p>
      </div>

      <p>
        This profound observation establishes that <strong>every function defines a curve</strong>,
        and conversely, every curve can be expressed as an equation relating <InlineMath>x</InlineMath>
        and <InlineMath>y</InlineMath>.
      </p>

      <h2>Continuous vs. Discontinuous Curves</h2>

      <p>
        Euler distinguishes between two types of curves:
      </p>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 my-6">
        <div className="bg-dark-800/50 rounded-xl p-4 border border-dark-700">
          <h4 className="text-emerald-400 font-semibold mb-2">Continuous Curves</h4>
          <p className="text-dark-300">
            A curve is <strong>continuous</strong> when its entire nature is expressed by
            a single function of <InlineMath>x</InlineMath>. The curve follows one consistent
            law throughout.
          </p>
        </div>
        <div className="bg-dark-800/50 rounded-xl p-4 border border-dark-700">
          <h4 className="text-rose-400 font-semibold mb-2">Discontinuous Curves</h4>
          <p className="text-dark-300">
            A curve is <strong>discontinuous</strong> (or mixed/irregular) when different
            portions are defined by different functions. Such curves are composed of
            parts of various continuous curves.
          </p>
        </div>
      </div>

      <Callout type="warning">
        <strong>Note:</strong> In geometry, we focus primarily on continuous curves—those
        that can be described by a single equation and traced by uniform motion according
        to a constant rule.
      </Callout>

      <h2>From Curves to Functions and Back</h2>

      <p>
        Euler emphasizes the two-way relationship between curves and functions:
      </p>

      <ol className="list-decimal list-inside space-y-2 my-4 text-dark-300">
        <li>
          <strong>From Function to Curve:</strong> Any function <InlineMath>y = f(x)</InlineMath>
          determines a unique curve by plotting ordinates for each abscissa.
        </li>
        <li>
          <strong>From Curve to Function:</strong> Given any curve, we can drop perpendiculars
          from each point <InlineMath>M</InlineMath> to the axis, obtaining the relationship
          between <InlineMath>x</InlineMath> and <InlineMath>y</InlineMath>.
        </li>
      </ol>

      <MathBlock>{`\\text{Curve} \\longleftrightarrow \\text{Equation } y = f(x)`}</MathBlock>

      <p>
        No point of the curve escapes this method—the function completely characterizes the curve,
        and the curve completely represents the function.
      </p>

      <h2>The Mechanical Construction of Curves</h2>

      <p>
        While many curves can be traced mechanically by continuous motion of a point
        (for example, drawing a circle with a compass), Euler prefers the analytical
        approach through functions because it is:
      </p>

      <ul className="list-disc list-inside space-y-2 my-4 text-dark-300">
        <li>More analytical and systematic</li>
        <li>More widely applicable</li>
        <li>Better suited to calculation</li>
      </ul>

      <Callout type="success">
        <strong>Chapter Summary:</strong> Euler has established the fundamental correspondence
        between algebraic functions and geometric curves. By using coordinates (abscissas and
        ordinates), any function can be visualized as a curve, and any curve can be expressed
        as an equation. This framework will guide our study of all types of curves—from straight
        lines to the most complex transcendental curves.
      </Callout>
    </LessonLayout>
  );
}
