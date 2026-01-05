import { LessonLayout } from '@/components/layout/LessonLayout';
import { Definition, Theorem } from '@/components/common/ContentBlocks';
import { Callout } from '@/components/common/Callout';
import { MathBlock } from '@/components/common/MathBlock';
import { SectionQuiz } from '@/components/quiz/SectionQuiz';
import { quizMap } from '@/data/quizzes';

export default function Section39() {
  return (
    <LessonLayout sectionId={39}>
      <h2>Discussion</h2>

      <p>
        The plane ℝP² studied in this chapter is the most important projective plane,
        but it is far from being the only one. Many other projective planes can be
        constructed by imitating the construction of ℝP².
      </p>

      <h3>Projective Planes Over Fields</h3>

      <p>
        The construction of ℝP² is based on ordered triples (x, y, z) and linear
        equations ax + by + cz = 0. It is not essential for x, y, z to be real numbers.
        They could be complex numbers, or more generally elements of any <strong>field</strong>.
      </p>

      <Definition title="Field">
        <p>
          A field is any set with + and × operations satisfying the nine field axioms
          listed in Section 4.8.
        </p>
      </Definition>

      <p>
        If F is any field, we can consider the space F³ of ordered triples (x, y, z)
        with x, y, z ∈ F. Then the projective plane FP² has:
      </p>

      <div className="bg-slate-800/50 p-4 rounded-lg my-6">
        <ul className="list-disc list-inside space-y-2">
          <li>
            <strong>"points"</strong>: sets of triples (kx, ky, kz), where x, y, z ∈ F
            are fixed and k runs through the elements of F
          </li>
          <li>
            <strong>"lines"</strong>: sets of "points" satisfying ax + by + cz = 0 for
            some fixed a, b, c ∈ F
          </li>
        </ul>
      </div>

      <Theorem title="FP² is a Projective Plane"
        proof={
          <>
            <p>We verify the three projective plane axioms for FP².</p>
            <p className="mt-2"><strong>Axiom 1: Two points determine a unique line.</strong></p>
            <p>Let P₁ = (x₁, y₁, z₁) and P₂ = (x₂, y₂, z₂) be distinct "points" (i.e., distinct lines through O in F³). We seek coefficients (a, b, c) with ax₁ + by₁ + cz₁ = 0 and ax₂ + by₂ + cz₂ = 0.</p>
            <p className="mt-2">Since P₁ and P₂ are linearly independent (distinct lines through O), the solution space for (a, b, c) is one-dimensional over F—unique up to scalar multiple. This defines a unique "line" in FP².</p>
            <p className="mt-2"><strong>Axiom 2: Two lines meet in a unique point.</strong></p>
            <p>Let L₁: a₁x + b₁y + c₁z = 0 and L₂: a₂x + b₂y + c₂z = 0 be distinct "lines." Since (a₁, b₁, c₁) and (a₂, b₂, c₂) are linearly independent, the solution space is one-dimensional, giving a unique "point."</p>
            <p className="mt-2"><strong>Axiom 3: There exist four points, no three collinear.</strong></p>
            <p>The points (1, 0, 0), (0, 1, 0), (0, 0, 1), and (1, 1, 1) satisfy this. Any line through two of the first three has form x = 0, y = 0, or z = 0, none containing (1, 1, 1). Checking other triples similarly confirms no three are collinear.</p>
            <p className="mt-2">All calculations use only field operations (+, ×, ÷), so they are valid in any field F.</p>
          </>
        }
      >
        <p>
          The projective plane axioms can be checked for FP² just as they were for ℝP².
          The same calculations apply, because the field axioms ensure that the same
          algebraic operations work in F.
        </p>
      </Theorem>

      <h3>The Rational Projective Plane</h3>

      <p>
        Perhaps the most familiar field after ℝ and ℂ is the set ℚ of rational numbers.
        ℚP² is not unlike ℝP², except that all of its points have rational coordinates,
        and all of its lines are full of gaps (containing only rational points).
      </p>

      <h3>Finite Projective Planes</h3>

      <p>
        More surprising examples arise from finite fields. There is a finite field
        with p<sup>n</sup> elements for each prime power p<sup>n</sup>. The simplest
        example is the field F₂ with elements 0 and 1:
      </p>

      <div className="grid grid-cols-2 gap-4 my-6">
        <div className="bg-slate-800/50 p-4 rounded-lg">
          <h4 className="font-semibold text-blue-400 mb-2">Addition in F₂</h4>
          <table className="w-full text-center">
            <thead>
              <tr>
                <th className="border border-slate-600 p-2">+</th>
                <th className="border border-slate-600 p-2">0</th>
                <th className="border border-slate-600 p-2">1</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td className="border border-slate-600 p-2 font-semibold">0</td>
                <td className="border border-slate-600 p-2">0</td>
                <td className="border border-slate-600 p-2">1</td>
              </tr>
              <tr>
                <td className="border border-slate-600 p-2 font-semibold">1</td>
                <td className="border border-slate-600 p-2">1</td>
                <td className="border border-slate-600 p-2">0</td>
              </tr>
            </tbody>
          </table>
        </div>
        <div className="bg-slate-800/50 p-4 rounded-lg">
          <h4 className="font-semibold text-blue-400 mb-2">Multiplication in F₂</h4>
          <table className="w-full text-center">
            <thead>
              <tr>
                <th className="border border-slate-600 p-2">×</th>
                <th className="border border-slate-600 p-2">0</th>
                <th className="border border-slate-600 p-2">1</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td className="border border-slate-600 p-2 font-semibold">0</td>
                <td className="border border-slate-600 p-2">0</td>
                <td className="border border-slate-600 p-2">0</td>
              </tr>
              <tr>
                <td className="border border-slate-600 p-2 font-semibold">1</td>
                <td className="border border-slate-600 p-2">0</td>
                <td className="border border-slate-600 p-2">1</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>

      <h3>The Fano Plane</h3>

      <Definition title="The Fano Plane F₂P²">
        <p>
          The projective plane F₂P² has seven points, corresponding to the seven
          nonzero points in F₂³:
        </p>
        <MathBlock>
          {`(1,0,0), (0,1,0), (0,0,1), (0,1,1), (1,0,1), (1,1,0), (1,1,1)`}
        </MathBlock>
        <p className="mt-2">
          These seven points are arranged in threes along seven lines. This structure
          is called the <strong>Fano plane</strong>—the smallest projective plane.
        </p>
      </Definition>

      <p>
        The lines of the Fano plane satisfy the equations:
      </p>

      <MathBlock>
        {`\\begin{aligned}
&x = 0, \\quad y = 0, \\quad z = 0, \\\\
&x + y = 0, \\quad y + z = 0, \\quad z + x = 0, \\\\
&x + y + z = 0
\\end{aligned}`}
      </MathBlock>

      <Callout type="info">
        <strong>Well-Behaved Finite Geometry:</strong> Despite being small, the Fano
        plane is well-behaved because its "lines" satisfy linear equations, just as
        in traditional geometry. Thanks to finite fields, linear algebra works well
        in many finite structures, leading to the development of finite geometries
        with applications in information and communication.
      </Callout>

      <h3>Beyond Linear Equations</h3>

      <p>
        The three axioms for a finite projective plane do not ensure that the plane
        is of the form FP², with coordinates for points and linear equations for
        lines. They can be satisfied by bizarre "nonlinear" structures.
      </p>

      <p>
        A fourth axiom is needed to engender a field F of coordinates, and that axiom
        is the <strong>theorem of Pappus</strong>. This will be explained in Chapter 6.
      </p>

      <h3>Historical Note: The Invariance of the Cross-Ratio</h3>

      <p>
        The invariance of the cross-ratio was discovered by <strong>Pappus</strong>
        around 300 CE and rediscovered by <strong>Desargues</strong> around 1640.
        It appears as Proposition 129 in Book VII of Pappus' <em>Mathematical Collection</em>.
      </p>

      <p>
        Desargues is considered the founder of projective geometry because he wrote
        the first book on the subject. Nevertheless, projective geometry was little
        known until the 19th century, when geometry expanded in all directions. The
        cross-ratio continued to be a central concept.
      </p>

      <h3>Cross-Ratio Over General Fields</h3>

      <Theorem title="Cross-Ratio in General Fields"
        proof={
          <>
            <p>We verify that the cross-ratio formula and its invariance under linear fractional transformations extend to any field F.</p>
            <p className="mt-2"><strong>The cross-ratio formula:</strong></p>
            <MathBlock math="[p, q; r, s] = \frac{(r - p)(s - q)}{(r - q)(s - p)}" />
            <p className="mt-2">This expression involves only subtraction, multiplication, and division—all defined in any field F (with division defined for nonzero elements).</p>
            <p className="mt-2"><strong>Extension to F ∪ {'{'}∞{'}'}:</strong> We adjoin a symbol ∞ with conventions:</p>
            <ul className="list-disc list-inside mt-2 space-y-1">
              <li>1/0 = ∞ and 1/∞ = 0</li>
              <li>∞ + a = ∞ for any a ∈ F</li>
              <li>a/∞ = 0 for any a ∈ F</li>
            </ul>
            <p className="mt-2"><strong>Invariance proof:</strong> The same calculation as for ℝ shows invariance under the generators:</p>
            <ol className="list-decimal list-inside mt-2 space-y-1">
              <li>x → x + l: Differences (r-p), etc. are unchanged, so the cross-ratio is unchanged.</li>
              <li>x → kx: Each factor picks up k, and k² cancels in numerator and denominator.</li>
              <li>x → 1/x: Converting (1/r - 1/p) = (p-r)/(pr), etc., and simplifying yields the same cross-ratio.</li>
            </ol>
            <p className="mt-2">These calculations use only field axioms, so they are valid in any field.</p>
          </>
        }
      >
        <p>
          Linear fractional transformations and the cross-ratio make sense when ℝ is
          replaced by any field F. The transformations x → x + l and x → kx make sense
          on F, and x → 1/x makes sense on F ∪ {'{'}∞{'}'} if we set 1/0 = ∞ and 1/∞ = 0.
        </p>
        <p className="mt-2">
          The cross-ratio is invariant by the same calculation as before, thanks to
          the field axioms, because the usual calculations with fractions are valid
          in any field.
        </p>
      </Theorem>

      <h3>Key Takeaways from Chapter 5</h3>

      <div className="bg-slate-800/50 p-4 rounded-lg my-6">
        <ul className="list-disc list-inside space-y-2">
          <li>
            <strong>Perspective drawing</strong> requires understanding that parallel
            lines meet at vanishing points on the horizon
          </li>
          <li>
            <strong>Straightedge alone</strong> suffices for perspective construction
            using points at infinity
          </li>
          <li>
            <strong>Projective planes</strong> satisfy three simple axioms about
            incidence of points and lines
          </li>
          <li>
            <strong>Homogeneous coordinates</strong> provide algebraic tools for
            projective geometry
          </li>
          <li>
            <strong>Linear fractional functions</strong> represent projections of lines
          </li>
          <li>
            <strong>The cross-ratio</strong> is the fundamental invariant preserved
            by projection
          </li>
          <li>
            <strong>Three points determine a projection</strong>; the fourth point
            is fixed by the cross-ratio
          </li>
        </ul>
      </div>

      <Callout type="info">
        <strong>Looking Ahead:</strong> In Chapter 6, we will study the theorems of
        Pappus and Desargues in projective planes, and see how they give rise to
        coordinate systems satisfying the field axioms.
      </Callout>

      <SectionQuiz
        sectionId={39}
        questions={quizMap[39] || []}
        title="Chapter 5 Discussion Quiz"
      />
    </LessonLayout>
  );
}
