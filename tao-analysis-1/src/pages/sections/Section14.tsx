import { LessonLayout } from '@/components/layout';
import { Definition, Theorem, Example } from '@/components/common';
import { Callout } from '@/components/common';
import { Math, MathBlock } from '@/components/common';

export default function Section14() {
  return (
    <LessonLayout sectionId={14}>
      {/* Introduction */}
      <p className="text-lg text-dark-200 mb-6">
        Having constructed the rational numbers and explored their algebraic and order properties, we now
        investigate a fundamental limitation: the rationals have "gaps." Despite being <em>dense</em> (between
        any two rationals lies another rational), the rationals fail to contain many important numbers. This
        section reveals why we need to construct the real numbers.
      </p>

      <Callout type="info">
        <strong>The Number Line Intuition</strong>
        <p className="mt-2">
          Imagine arranging the rationals on a line, with <Math tex="x" /> to the right of <Math tex="y" />
          if <Math tex="x > y" />. The integers sit inside this line. We'll explore how integers and rationals
          interleave, and discover that despite this dense arrangement, there are "holes" where numbers
          like <Math tex="\sqrt{2}" /> should be.
        </p>
      </Callout>

      {/* Proposition 4.4.1 */}
      <Theorem
        title="4.4.1 (Interspersing of integers by rationals)"
        proof={
          <div className="space-y-4">
            <p>
              See Exercise 4.4.1. The key idea is to use Proposition 2.3.9 (which establishes that
              natural numbers have no "gaps" between consecutive integers).
            </p>
            <p>
              For a positive rational <Math tex="x = p/q" />, we can find the largest integer <Math tex="n" /> such
              that <Math tex="n \leq x" /> by examining multiples of <Math tex="1/q" />. The uniqueness follows
              from the fact that if <Math tex="n \leq x < n+1" /> and <Math tex="m \leq x < m+1" />, then
              both <Math tex="n" /> and <Math tex="m" /> must equal <Math tex="\lfloor x \rfloor" />.
            </p>
          </div>
        }
      >
        <p className="mb-3">
          Let <Math tex="x" /> be a rational number. Then there exists an integer <Math tex="n" /> such that:
        </p>
        <MathBlock tex="n \leq x < n + 1" />
        <p className="mt-3">
          In fact, this integer is <strong>unique</strong> (i.e., for each <Math tex="x" /> there is only
          one <Math tex="n" /> for which <Math tex="n \leq x < n + 1" />).
        </p>
        <p className="mt-3">
          In particular, there exists a natural number <Math tex="N" /> such that <Math tex="N > x" /> (i.e.,
          there is no such thing as a rational number which is larger than all the natural numbers).
        </p>
      </Theorem>

      <Definition title="4.4.2 (Integer Part / Floor Function)">
        <p>
          The integer <Math tex="n" /> for which <Math tex="n \leq x < n + 1" /> is sometimes referred to
          as the <strong>integer part</strong> of <Math tex="x" /> and is denoted:
        </p>
        <MathBlock tex="n = \lfloor x \rfloor" />
        <p className="mt-3">
          This is also called the <strong>floor function</strong>. For example:
        </p>
        <ul className="list-disc list-inside mt-2 space-y-1 text-dark-300">
          <li><Math tex="\lfloor 3.7 \rfloor = 3" /></li>
          <li><Math tex="\lfloor 5 \rfloor = 5" /></li>
          <li><Math tex="\lfloor -2.3 \rfloor = -3" /> (note: we need <Math tex="-3 \leq -2.3 < -2" />)</li>
        </ul>
      </Definition>

      {/* Proposition 4.4.3 */}
      <Theorem
        title="4.4.3 (Interspersing of rationals by rationals)"
        proof={
          <div className="space-y-4">
            <p>
              We set <Math tex="z := (x + y)/2" />. Since <Math tex="x < y" /> and <Math tex="1/2 = 1\mathbin{/\mkern-4mu/}2" /> is
              positive, we have from Proposition 4.2.9 that <Math tex="x/2 < y/2" />.
            </p>
            <p>
              If we add <Math tex="y/2" /> to both sides using Proposition 4.2.9 we obtain:
            </p>
            <MathBlock tex="x/2 + y/2 < y/2 + y/2" />
            <p>
              i.e., <Math tex="z < y" />.
            </p>
            <p>
              If we instead add <Math tex="x/2" /> to both sides we obtain:
            </p>
            <MathBlock tex="x/2 + x/2 < y/2 + x/2" />
            <p>
              i.e., <Math tex="x < z" />. Thus <Math tex="x < z < y" /> as desired.
            </p>
          </div>
        }
      >
        <p className="mb-3">
          If <Math tex="x" /> and <Math tex="y" /> are two rationals such that <Math tex="x < y" />, then
          there exists a third rational <Math tex="z" /> such that:
        </p>
        <MathBlock tex="x < z < y" />
      </Theorem>

      <Callout type="note">
        <strong>Density of the Rationals</strong>
        <p className="mt-2">
          Proposition 4.4.3 shows that the rationals are <strong>dense</strong>: between any two distinct
          rationals, there is always another rational. In fact, by repeated application, there are
          <em>infinitely many</em> rationals between any two distinct rationals. The midpoint construction
          can be applied indefinitely.
        </p>
      </Callout>

      {/* The Gap: No Square Root of 2 */}
      <h2 className="text-2xl font-bold text-dark-100 mt-12 mb-6">
        The Gaps in the Rationals
      </h2>

      <p className="text-dark-200 mb-6">
        Despite having this denseness property, the rationals are still <strong>incomplete</strong>; there are
        still an infinite number of "gaps" or "holes" between the rationals. This denseness property does
        ensure that these holes are in some sense infinitely small. We now demonstrate the most famous
        example: the rational numbers do not contain any square root of two.
      </p>

      <Theorem
        title="4.4.4 (Irrationality of the Square Root of 2)"
        proof={
          <div className="space-y-4">
            <p>
              We give a sketch of a proof (the gaps will be filled in Exercise 4.4.3). Suppose for sake
              of contradiction that we had a rational number <Math tex="x" /> for which <Math tex="x^2 = 2" />.
            </p>
            <p>
              Clearly <Math tex="x" /> is not zero. We may assume that <Math tex="x" /> is positive, for
              if <Math tex="x" /> were negative then we could just replace <Math tex="x" /> by <Math tex="-x" /> (since <Math tex="x^2 = (-x)^2" />).
            </p>
            <p>
              Thus <Math tex="x = p/q" /> for some positive integers <Math tex="p, q" />, so <Math tex="(p/q)^2 = 2" />, which
              we can rearrange as:
            </p>
            <MathBlock tex="p^2 = 2q^2" />
            <p>
              Define a natural number <Math tex="p" /> to be <em>even</em> if <Math tex="p = 2k" /> for some natural
              number <Math tex="k" />, and <em>odd</em> if <Math tex="p = 2k + 1" /> for some natural number <Math tex="k" />.
              Every natural number is either even or odd, but not both.
            </p>
            <p>
              If <Math tex="p" /> is odd, then <Math tex="p^2" /> is also odd, which contradicts <Math tex="p^2 = 2q^2" /> (which
              must be even). Thus <Math tex="p" /> is even, i.e., <Math tex="p = 2k" /> for some natural number <Math tex="k" />.
            </p>
            <p>
              Since <Math tex="p" /> is positive, <Math tex="k" /> must also be positive. Inserting <Math tex="p = 2k" /> into <Math tex="p^2 = 2q^2" />:
            </p>
            <MathBlock tex="4k^2 = 2q^2 \implies q^2 = 2k^2" />
            <p>
              <strong>The key insight (Infinite Descent):</strong> We started with a pair <Math tex="(p, q)" /> of
              positive integers such that <Math tex="p^2 = 2q^2" />, and ended up with a pair <Math tex="(q, k)" /> of
              positive integers such that <Math tex="q^2 = 2k^2" />.
            </p>
            <p>
              Since <Math tex="p^2 = 2q^2" />, we have <Math tex="q < p" />. If we rewrite <Math tex="p' := q" /> and <Math tex="q' := k" />,
              we can pass from one solution <Math tex="(p, q)" /> to the equation <Math tex="p^2 = 2q^2" /> to a new
              solution <Math tex="(p', q')" /> with a smaller value of <Math tex="p" />.
            </p>
            <p>
              But then we can repeat this procedure again and again, obtaining a sequence <Math tex="(p'', q'')" />, <Math tex="(p''', q''')" />,
              etc. of solutions to <Math tex="p^2 = 2q^2" />, each with a smaller value of <Math tex="p" /> than the
              previous, and each consisting of positive integers. But this contradicts the <strong>principle of
              infinite descent</strong> (see Exercise 4.4.2). This contradiction shows that we could not have had
              a rational <Math tex="x" /> for which <Math tex="x^2 = 2" />.
            </p>
          </div>
        }
      >
        <p>
          There does not exist any rational number <Math tex="x" /> for which <Math tex="x^2 = 2" />.
        </p>
      </Theorem>

      <Callout type="warning">
        <strong>Historical Significance</strong>
        <p className="mt-2">
          This result was known to the ancient Greeks and is attributed to the Pythagoreans. According to
          legend, the discovery that <Math tex="\sqrt{2}" /> is irrational was deeply troubling to the
          Pythagorean school, which believed that all quantities could be expressed as ratios of integers.
          The proof by infinite descent is one of the earliest examples of this powerful technique.
        </p>
      </Callout>

      {/* Approaching the Gap */}
      <h2 className="text-2xl font-bold text-dark-100 mt-12 mb-6">
        Approaching the Gap
      </h2>

      <p className="text-dark-200 mb-6">
        Although no rational equals <Math tex="\sqrt{2}" />, we can get <em>arbitrarily close</em>:
      </p>

      <Theorem
        title="4.4.5 (Approximating the Square Root of 2)"
        proof={
          <div className="space-y-4">
            <p>
              Let <Math tex="\varepsilon > 0" /> be rational. Suppose for sake of contradiction that there
              is no non-negative rational number <Math tex="x" /> for which <Math tex="x^2 < 2 < (x + \varepsilon)^2" />.
            </p>
            <p>
              This means that whenever <Math tex="x" /> is non-negative and <Math tex="x^2 < 2" />, we must also
              have <Math tex="(x + \varepsilon)^2 < 2" /> (note that <Math tex="(x + \varepsilon)^2" /> cannot equal 2,
              by Proposition 4.4.4).
            </p>
            <p>
              Since <Math tex="0^2 < 2" />, we thus have <Math tex="\varepsilon^2 < 2" />, which then
              implies <Math tex="(2\varepsilon)^2 < 2" />, and indeed a simple induction shows that <Math tex="(n\varepsilon)^2 < 2" /> for
              every natural number <Math tex="n" />. (Note that <Math tex="n\varepsilon" /> is non-negative for every
              natural number <Math tex="n" />.)
            </p>
            <p>
              But, by Proposition 4.4.1 we can find an integer <Math tex="n" /> such that <Math tex="n > 2/\varepsilon" />,
              which implies that <Math tex="n\varepsilon > 2" />, which implies that <Math tex="(n\varepsilon)^2 > 4 > 2" />,
              contradicting the claim that <Math tex="(n\varepsilon)^2 < 2" /> for all natural numbers <Math tex="n" />.
              This contradiction gives the proof.
            </p>
          </div>
        }
      >
        <p className="mb-3">
          For every rational number <Math tex="\varepsilon > 0" />, there exists a non-negative rational
          number <Math tex="x" /> such that:
        </p>
        <MathBlock tex="x^2 < 2 < (x + \varepsilon)^2" />
      </Theorem>

      <Example title="4.4.6 (A Concrete Approximation)">
        <p>
          If <Math tex="\varepsilon = 0.001" />, we can take <Math tex="x = 1.414" />, since:
        </p>
        <MathBlock tex="x^2 = 1.999396 < 2 < 2.002225 = (x + \varepsilon)^2" />
        <p className="mt-3">
          Indeed, the sequence of decimal approximations:
        </p>
        <MathBlock tex="1.4, \quad 1.41, \quad 1.414, \quad 1.4142, \quad 1.41421, \quad \ldots" />
        <p className="mt-3">
          gets closer and closer to <Math tex="\sqrt{2}" />, as their squares indicate:
        </p>
        <MathBlock tex="1.96, \quad 1.9881, \quad 1.999396, \quad 1.99996164, \quad 1.9999899241, \quad \ldots" />
      </Example>

      {/* Motivation for Real Numbers */}
      <h2 className="text-2xl font-bold text-dark-100 mt-12 mb-6">
        The Path Forward: Constructing the Reals
      </h2>

      <Callout type="info">
        <strong>Creating Real Numbers via Limits</strong>
        <p className="mt-2">
          Proposition 4.4.5 indicates that, while the set <Math tex="\mathbb{Q}" /> of rationals does not
          actually have <Math tex="\sqrt{2}" /> as a member, we can get as close as we wish
          to <Math tex="\sqrt{2}" />.
        </p>
        <p className="mt-2">
          Thus it seems that we can create a square root of 2 by taking a "limit" of a sequence of rationals.
          This is how we shall construct the real numbers in the next chapter, using <strong>Cauchy sequences</strong>.
        </p>
      </Callout>

      <p className="text-dark-200 mb-6">
        There are other approaches to constructing the real numbers:
      </p>
      <ul className="list-disc list-inside space-y-2 text-dark-300 mb-6">
        <li>
          <strong>Dedekind cuts</strong>: Partition the rationals into two sets based on whether they are
          less than or greater than the "gap"
        </li>
        <li>
          <strong>Infinite decimal expansions</strong>: Though familiar, this approach has subtle issues
          (e.g., making <Math tex="0.999\ldots = 1.000\ldots" />)
        </li>
        <li>
          <strong>Cauchy sequences</strong>: Define a real number as an equivalence class of Cauchy sequences
          of rationals (the approach we will take)
        </li>
      </ul>

      {/* Exercises */}
      <h2 className="text-2xl font-bold text-dark-100 mt-12 mb-6">Exercises</h2>

      <div className="space-y-6">
        <div className="p-4 bg-dark-800/50 rounded-xl border border-dark-700/50">
          <h3 className="font-semibold text-dark-100 mb-2">Exercise 4.4.1</h3>
          <p className="text-dark-300">
            Prove Proposition 4.4.1. (<em>Hint:</em> use Proposition 2.3.9, which states that for any natural
            number <Math tex="n" />, there is no natural number between <Math tex="n" /> and <Math tex="n+1" />.)
          </p>
        </div>

        <div className="p-4 bg-dark-800/50 rounded-xl border border-dark-700/50">
          <h3 className="font-semibold text-dark-100 mb-2">Exercise 4.4.2</h3>
          <p className="text-dark-300 mb-3">
            <strong>Definition:</strong> A sequence <Math tex="a_0, a_1, a_2, \ldots" /> of numbers is said to
            be in <em>infinite descent</em> if we have <Math tex="a_n > a_{n+1}" /> for all natural
            numbers <Math tex="n" /> (i.e., <Math tex="a_0 > a_1 > a_2 > \cdots" />).
          </p>
          <p className="text-dark-300 mb-3">
            <strong>(a)</strong> Prove the <em>principle of infinite descent</em>: that it is not possible to
            have a sequence of natural numbers which is in infinite descent. (<em>Hint:</em> assume for sake
            of contradiction that you can find such a sequence. Since all <Math tex="a_n" /> are natural
            numbers, you know <Math tex="a_n \geq 0" /> for all <Math tex="n" />. Use induction to show
            that <Math tex="a_n \geq k" /> for all <Math tex="k \in \mathbb{N}" /> and all <Math tex="n \in \mathbb{N}" />,
            and obtain a contradiction.)
          </p>
          <p className="text-dark-300">
            <strong>(b)</strong> Does the principle of infinite descent work if the sequence is allowed to
            take <em>integer</em> values instead of natural number values? What about positive <em>rational</em> values?
            Explain.
          </p>
        </div>

        <div className="p-4 bg-dark-800/50 rounded-xl border border-dark-700/50">
          <h3 className="font-semibold text-dark-100 mb-2">Exercise 4.4.3</h3>
          <p className="text-dark-300">
            Fill in the gaps marked (why?) in the proof of Proposition 4.4.4:
          </p>
          <ul className="list-disc list-inside mt-2 space-y-1 text-dark-300">
            <li>Why is every natural number either even or odd, but not both?</li>
            <li>Why is <Math tex="p^2" /> odd when <Math tex="p" /> is odd?</li>
            <li>Why does <Math tex="p^2 = 2q^2" /> imply <Math tex="q < p" />?</li>
          </ul>
        </div>
      </div>

      {/* Key Takeaways */}
      <h2 className="text-2xl font-bold text-dark-100 mt-12 mb-6">Key Takeaways</h2>

      <div className="grid gap-4 md:grid-cols-2">
        <div className="p-4 bg-gradient-to-br from-purple-500/10 to-purple-600/5 rounded-xl border border-purple-500/20">
          <h3 className="font-semibold text-purple-400 mb-2">Integer Part</h3>
          <p className="text-sm text-dark-300">
            Every rational <Math tex="x" /> has a unique integer part <Math tex="\lfloor x \rfloor" /> satisfying <Math tex="\lfloor x \rfloor \leq x < \lfloor x \rfloor + 1" />.
          </p>
        </div>

        <div className="p-4 bg-gradient-to-br from-blue-500/10 to-blue-600/5 rounded-xl border border-blue-500/20">
          <h3 className="font-semibold text-blue-400 mb-2">Density</h3>
          <p className="text-sm text-dark-300">
            Between any two distinct rationals lies another rational (take their midpoint).
          </p>
        </div>

        <div className="p-4 bg-gradient-to-br from-amber-500/10 to-amber-600/5 rounded-xl border border-amber-500/20">
          <h3 className="font-semibold text-amber-400 mb-2">Incompleteness</h3>
          <p className="text-sm text-dark-300">
            Despite density, the rationals have "gaps" - there is no rational <Math tex="x" /> with <Math tex="x^2 = 2" />.
          </p>
        </div>

        <div className="p-4 bg-gradient-to-br from-emerald-500/10 to-emerald-600/5 rounded-xl border border-emerald-500/20">
          <h3 className="font-semibold text-emerald-400 mb-2">Approximation</h3>
          <p className="text-sm text-dark-300">
            We can get arbitrarily close to <Math tex="\sqrt{2}" /> with rationals, motivating the construction of real numbers via limits.
          </p>
        </div>
      </div>
    </LessonLayout>
  );
}
