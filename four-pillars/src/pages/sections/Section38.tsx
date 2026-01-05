import { LessonLayout } from '@/components/layout/LessonLayout';
import { Definition, Theorem } from '@/components/common/ContentBlocks';
import { Callout } from '@/components/common/Callout';
import { MathBlock } from '@/components/common/MathBlock';
import { SectionQuiz } from '@/components/quiz/SectionQuiz';
import { quizMap } from '@/data/quizzes';
import { CrossRatioDemo } from '@/components/visualizations/chapter5';

export default function Section38() {
  return (
    <LessonLayout sectionId={38}>
      <h2>What is Special About the Cross-Ratio?</h2>

      <p>
        We use the abbreviation [p, q; r, s] for the cross-ratio of four points p, q, r, s:
      </p>

      <MathBlock>
        {`[p, q; r, s] = \\frac{(r - p)(s - q)}{(r - q)(s - p)}`}
      </MathBlock>

      <p>
        We have shown that the cross-ratio is an invariant of linear fractional
        transformations, but it is obviously not the only one. Examples of other
        invariants are (cross-ratio)² and cross-ratio + 1.
      </p>

      <Callout type="info">
        <strong>Key Point:</strong> The cross-ratio is special because it is the
        <strong> defining invariant</strong> of linear fractional transformations.
        That is, linear fractional transformations are precisely the transformations
        of ℝP¹ that preserve the cross-ratio. (The cross-ratio defines linear
        fractional transformations the way that length defines isometries.)
      </Callout>

      <h3>Fourth Point Determination</h3>

      <Theorem title="Fourth Point Determination"
        proof={
          <>
            <p>Given three distinct points p, q, r and a value y, we show there is exactly one x satisfying [p, q; r, x] = y.</p>
            <p className="mt-2">The cross-ratio equation is:</p>
            <MathBlock math="\frac{(r - p)(x - q)}{(r - q)(x - p)} = y" />
            <p className="mt-2">Cross-multiplying:</p>
            <MathBlock math="(r - p)(x - q) = y(r - q)(x - p)" />
            <p className="mt-2">Expanding:</p>
            <MathBlock math="(r-p)x - (r-p)q = y(r-q)x - y(r-q)p" />
            <p className="mt-2">Collecting terms in x:</p>
            <MathBlock math="x[(r-p) - y(r-q)] = (r-p)q - y(r-q)p" />
            <p className="mt-2">Since p, q, r are distinct and y is finite, the coefficient of x is nonzero (unless y = (r-p)/(r-q), but this would make the right side nonzero too). Thus we can solve uniquely:</p>
            <MathBlock math="x = \frac{(r-p)q - y(r-q)p}{(r-p) - y(r-q)}" />
            <p className="mt-2">This gives a unique value of x for each value of y, establishing the bijection.</p>
          </>
        }
      >
        <p>
          Given any three points p, q, r ∈ ℝP¹, any other point x ∈ ℝP¹ is uniquely
          determined by its cross-ratio [p, q; r, x] = y with p, q, r.
        </p>
        <p className="mt-2 text-slate-300">
          This holds because we can solve the equation for x uniquely in terms of p, q, r, and y.
        </p>
      </Theorem>

      <h3>Existence of Three-Point Maps</h3>

      <Theorem title="Existence of Three-Point Maps"
        proof={
          <>
            <p>We construct f explicitly. First, we find a linear fractional transformation g sending (p, q, r) to (0, 1, ∞), then a transformation h sending (0, 1, ∞) to (p′, q′, r′). The composition h ∘ g sends (p, q, r) to (p′, q′, r′).</p>
            <p className="mt-2"><strong>Step 1:</strong> To send (p, q, r) to (0, 1, ∞), we need:</p>
            <MathBlock math="g(x) = \frac{(x - p)(q - r)}{(x - r)(q - p)}" />
            <p className="mt-2">Verification: g(p) = 0 (numerator vanishes), g(r) = ∞ (denominator vanishes), and g(q) = (q-p)(q-r)/((q-r)(q-p)) = 1.</p>
            <p className="mt-2"><strong>Step 2:</strong> To send (0, 1, ∞) to (p′, q′, r′), we use:</p>
            <MathBlock math="h(x) = \frac{(p' - r')x + r'(q' - p')}{(1 - 1)x + (q' - p')}" />
            <p className="mt-2">Actually, a simpler form: h(x) = p′ + (q′ - p′)x/(1 + (x-1)(q′-p′)/(r′-p′)) when r′ ≠ ∞. Direct verification:</p>
            <MathBlock math="h(x) = \frac{p'(q'-r') + x(r'-p')}{(q'-r') + x \cdot 0} = p' + \frac{(r'-p')(x)}{(q'-r')}" />
            <p className="mt-2">The explicit formula is:</p>
            <MathBlock math="h(x) = \frac{r'(q'-p')x + p'(r'-q')}{(q'-p')x + (r'-q')}" />
            <p className="mt-2">Composing g and h yields a linear fractional transformation (since composition of linear fractional is linear fractional) with the desired property.</p>
          </>
        }
      >
        <p>
          Given three points p, q, r ∈ ℝP¹ and three points p′, q′, r′ ∈ ℝP¹, there
          is a linear fractional transformation f sending p, q, r to p′, q′, r′
          respectively.
        </p>
        <p className="mt-2 text-slate-300">
          This holds because there is a projection sending any three points to any
          three points. Without loss of generality, place the two copies of ℝP¹ so
          that p = p′. Then project from the point P where lines qq′ and rr′ meet.
        </p>
      </Theorem>

      <h3>Uniqueness of Three-Point Maps</h3>

      <Theorem title="Uniqueness of Three-Point Maps"
        proof={
          <>
            <p>Suppose f and g are two linear fractional transformations both sending p → p′, q → q′, r → r′.</p>
            <p className="mt-2">Consider any fourth point x ≠ p, q, r. Since linear fractional transformations preserve cross-ratio:</p>
            <MathBlock math="[p', q'; r', f(x)] = [p, q; r, x] = [p', q'; r', g(x)]" />
            <p className="mt-2">By the Fourth Point Determination theorem, the point with cross-ratio [p, q; r, x] relative to p′, q′, r′ is unique. Therefore f(x) = g(x).</p>
            <p className="mt-2">Since this holds for all x in ℝP¹, we have f = g. Thus there is at most one such transformation.</p>
            <p className="mt-2">Combined with the Existence theorem, exactly one linear fractional transformation sends p, q, r to p′, q′, r′.</p>
          </>
        }
      >
        <p>
          Exactly one linear fractional function sends three points p, q, r to three
          points p′, q′, r′ respectively.
        </p>
        <p className="mt-2 text-slate-300">
          A linear fractional f sending p, q, r to p′, q′, r′ must send any x ≠ p, q, r
          to x′ satisfying [p, q; r, x] = [p′, q′; r′, x′], because f preserves the
          cross-ratio. But x′ is unique by fourth point determination, so there is
          exactly one such function f.
        </p>
      </Theorem>

      <h3>Characterization of Linear Fractional Maps</h3>

      <Theorem title="Characterization Theorem"
        proof={
          <>
            <p>We prove both directions.</p>
            <p className="mt-2"><strong>(⇒)</strong> If f is linear fractional, then f preserves cross-ratio. This was proven in Section 37 by showing invariance under the generators.</p>
            <p className="mt-2"><strong>(⇐)</strong> Suppose f: ℝP¹ → ℝP¹ preserves cross-ratio. Pick three distinct points p, q, r and let p′ = f(p), q′ = f(q), r′ = f(r).</p>
            <p className="mt-2">By the Existence theorem, there is a linear fractional transformation g with g(p) = p′, g(q) = q′, g(r) = r′.</p>
            <p className="mt-2">Now let x be any fourth point. Since f preserves cross-ratio:</p>
            <MathBlock math="[p', q'; r', f(x)] = [f(p), f(q); f(r), f(x)] = [p, q; r, x]" />
            <p className="mt-2">Since g is linear fractional and hence preserves cross-ratio:</p>
            <MathBlock math="[p', q'; r', g(x)] = [g(p), g(q); g(r), g(x)] = [p, q; r, x]" />
            <p className="mt-2">Therefore [p′, q′; r′, f(x)] = [p′, q′; r′, g(x)]. By Fourth Point Determination, f(x) = g(x).</p>
            <p className="mt-2">Since x was arbitrary, f = g, so f is linear fractional.</p>
          </>
        }
      >
        <p>
          Linear fractional transformations are precisely the maps of ℝP¹ that
          preserve the cross-ratio.
        </p>
        <p className="mt-2 text-slate-300">
          By the previous section, any linear fractional map f preserves cross-ratio.
          Conversely, suppose f preserves cross-ratio. By existence of three-point maps,
          we can find a linear fractional g that agrees with f on p, q, r. Because f
          preserves cross-ratio, g agrees with f on s also by unique fourth point
          determination. Thus g agrees with f everywhere, so f is linear fractional.
        </p>
      </Theorem>

      <h3>Why No Invariant for Three Points?</h3>

      <p>
        The existence of three-point maps says that any three points on ℝP¹ can be
        sent to any three points by a linear fractional transformation. Thus, any
        invariant of triples of points must have the same value for any triple—so
        it is trivial!
      </p>

      <Callout type="info">
        <strong>Minimum Points:</strong> A nontrivial invariant must involve at least
        four points, and the cross-ratio is the fundamental example.
      </Callout>

      <h3>The Fundamental Invariant</h3>

      <Theorem title="The Fundamental Invariant"
        proof={
          <>
            <p>Let I(p, q, r, s) be any quantity invariant under linear fractional transformations. We show I depends only on [p, q; r, s].</p>
            <p className="mt-2">Consider two quadruples (p, q, r, s) and (p′, q′, r′, s′) with the same cross-ratio:</p>
            <MathBlock math="[p, q; r, s] = [p', q'; r', s'] = y" />
            <p className="mt-2">By the Existence theorem, there is a linear fractional transformation f with f(p) = p′, f(q) = q′, f(r) = r′.</p>
            <p className="mt-2">Since f preserves cross-ratio:</p>
            <MathBlock math="[p', q'; r', f(s)] = [f(p), f(q); f(r), f(s)] = [p, q; r, s] = y" />
            <p className="mt-2">But we also have [p′, q′; r′, s′] = y. By Fourth Point Determination, f(s) = s′.</p>
            <p className="mt-2">Therefore f maps (p, q, r, s) to (p′, q′, r′, s′). Since I is invariant under f:</p>
            <MathBlock math="I(p', q', r', s') = I(p, q, r, s)" />
            <p className="mt-2">Thus I has the same value on any two quadruples with the same cross-ratio. This means I is determined by the cross-ratio: I(p, q, r, s) = J([p, q; r, s]) for some function J.</p>
          </>
        }
      >
        <p>Any invariant of four points is a function of the cross-ratio.</p>
        <p className="mt-2 text-slate-300">
          Suppose I(p, q, r, s) is invariant under linear fractional transformations.
          Then I has the same value on all quadruples with the same cross-ratio, because
          any such quadruple results from (p, q, r, s) by a linear fractional transformation.
          Therefore I is really a function J of the cross-ratio: J([p, q; r, s]) = I(p, q, r, s).
        </p>
      </Theorem>

      <h3>Permutations of the Cross-Ratio</h3>

      <p>
        Permuting the variables in the cross-ratio y = [p, q; r, s] gives simple
        functions of y:
      </p>

      <div className="bg-slate-800/50 p-4 rounded-lg my-6">
        <ul className="list-disc list-inside space-y-2">
          <li>[p, q; s, r] = 1/y</li>
          <li>[q, p; r, s] = 1/y</li>
          <li>[p, r; q, s] = 1 − y</li>
        </ul>
      </div>

      <p>
        The transformations y → 1/y and y → 1 − y generate all transformations of
        the cross-ratio obtained by permuting its variables. There are six such
        transformations (even though there are 24 permutations of four variables):
      </p>

      <MathBlock>
        {`y, \\quad \\frac{1}{y}, \\quad 1-y, \\quad 1-\\frac{1}{y}, \\quad \\frac{1}{1-y}, \\quad \\frac{y}{y-1}`}
      </MathBlock>

      <Callout type="info">
        <strong>The Cross-Ratio Group:</strong> These six linear fractional functions
        constitute the <em>cross-ratio group</em>—an example of a group of transformations,
        which we will study in Chapter 7. Unlike most groups studied there, this group
        is finite.
      </Callout>

      <h3>Exercises</h3>

      <div className="bg-slate-800/50 p-4 rounded-lg my-6">
        <h4 className="font-semibold text-blue-400 mb-3">Exercise 5.8.1</h4>
        <p className="text-slate-300">
          If [p, q; r, s] = y, show that [p, q; s, r] = 1/y.
        </p>
      </div>

      <div className="bg-slate-800/50 p-4 rounded-lg my-6">
        <h4 className="font-semibold text-blue-400 mb-3">Exercise 5.8.2</h4>
        <p className="text-slate-300">
          If [p, q; r, s] = y, show that [q, p; r, s] = 1/y.
        </p>
      </div>

      <div className="bg-slate-800/50 p-4 rounded-lg my-6">
        <h4 className="font-semibold text-blue-400 mb-3">Exercise 5.8.3</h4>
        <p className="text-slate-300">
          Prove that [p, q; r, s] + [p, r; q, s] = 1, so if [p, q; r, s] = y, then
          [p, r; q, s] = 1 − y.
        </p>
      </div>

      <div className="bg-slate-800/50 p-4 rounded-lg my-6">
        <h4 className="font-semibold text-blue-400 mb-3">Exercise 5.8.4</h4>
        <p className="text-slate-300">
          Show that the functions of y obtained by combining 1/y and 1 − y in all ways
          are precisely the six listed above.
        </p>
      </div>

      <div className="bg-slate-800/50 p-4 rounded-lg my-6">
        <h4 className="font-semibold text-blue-400 mb-3">Exercise 5.8.5</h4>
        <p className="text-slate-300">
          Explain why any permutation of four variables may be obtained by exchanges:
          either of the first two, the middle two, or the last two variables.
        </p>
      </div>

      <CrossRatioDemo className="my-6" />

      <SectionQuiz
        sectionId={38}
        questions={quizMap[38] || []}
        title="What is Special About the Cross-Ratio? Quiz"
      />
    </LessonLayout>
  );
}
