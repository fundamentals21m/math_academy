import { LessonLayout } from '@/components/layout/LessonLayout';
import { Callout } from '@/components/common/Callout';
import { MathBlock, InlineMath } from '@/components/common/MathBlock';
import { CompoundInterestVisualizer, HalfLifeVisualizer } from '@/components/visualizations';

export default function Section06() {
  return (
    <LessonLayout sectionId={6}>
      <h2>Chapter 6: Powers and Geometric Sequences</h2>

      <p>
        This chapter explores one of the most important patterns in mathematics: the
        <strong> geometric sequence</strong>. From chain letters to radioactive decay,
        from compound interest to bouncing balls, geometric sequences appear everywhere.
        We'll see how powers and their generalizations help us understand exponential
        growth and decay.
      </p>

      <h2>6.1 Applications of Powers</h2>

      <p>
        A <strong>geometric sequence</strong> is a sequence of numbers where each term
        is obtained by multiplying the previous term by a fixed ratio <InlineMath>r</InlineMath>:
      </p>

      <MathBlock>{`a, \\quad ar, \\quad ar^2, \\quad ar^3, \\quad ar^4, \\quad \\ldots`}</MathBlock>

      <p>
        The term after <InlineMath>n</InlineMath> steps is <InlineMath>{`ar^n`}</InlineMath>. This simple pattern
        appears in an astonishing variety of contexts.
      </p>

      <h3>Chain Letters and Pyramid Schemes</h3>

      <div className="bg-dark-800 p-4 rounded-lg my-4 border-l-4 border-amber-500">
        <p className="font-semibold text-amber-400">Example: The Chain Letter</p>
        <p className="mt-2">
          You receive a letter instructing you to send copies to 5 friends, who each
          send to 5 friends, and so on. Starting with you, how many people are involved
          after 8 weeks?
        </p>
        <p className="mt-2">The sequence is:</p>
        <MathBlock>{`1, 5, 25, 125, 625, \\ldots`}</MathBlock>
        <p>
          This is geometric with <InlineMath>a = 1</InlineMath> and <InlineMath>r = 5</InlineMath>. After 8 weeks,
          the number of new participants is <InlineMath>{`5^8 = 390,625`}</InlineMath>.
        </p>
        <p className="mt-2 text-rose-400">
          The total involved would be <InlineMath>{`1 + 5 + 5^2 + \\cdots + 5^8 = 488,281`}</InlineMath> people!
        </p>
      </div>

      <Callout type="warning">
        <strong>Why Pyramid Schemes Fail:</strong> After just a few more rounds, you'd
        need more participants than exist on Earth. This mathematical impossibility
        explains why pyramid schemes inevitably collapse.
      </Callout>

      <h3>Radioactive Decay and Half-Life</h3>

      <p>
        Radioactive substances decay at rates proportional to the amount present.
        The <strong>half-life</strong> is the time required for half the material to decay.
      </p>

      <Callout type="success">
        <strong>Half-Life Formula:</strong> If the half-life is <InlineMath>h</InlineMath> time units,
        then after <InlineMath>t</InlineMath> time units, the quantity remaining is:
        <MathBlock>{`Q = Q_0 \\left(\\frac{1}{2}\\right)^{t/h}`}</MathBlock>
        where <InlineMath>{`Q_0`}</InlineMath> is the initial quantity.
      </Callout>

      <div className="bg-dark-800 p-4 rounded-lg my-4 border-l-4 border-amber-500">
        <p className="font-semibold text-amber-400">Example: Radium Decay</p>
        <p className="mt-2">
          Radium has a half-life of approximately 1600 years. How much of 100 grams
          remains after 4800 years?
        </p>
        <p className="mt-2">
          Since <InlineMath>{`4800 = 3 \\times 1600`}</InlineMath>, we have 3 half-lives:
        </p>
        <MathBlock>{`Q = 100 \\cdot \\left(\\frac{1}{2}\\right)^3 = 100 \\cdot \\frac{1}{8} = 12.5 \\text{ grams}`}</MathBlock>
      </div>

      <HalfLifeVisualizer />

      <h3>Newton's Law of Cooling</h3>

      <p>
        When a hot object cools in a room, the temperature drop follows a geometric
        pattern. If the room temperature is <InlineMath>R</InlineMath> and the object starts at
        temperature <InlineMath>{`T_0`}</InlineMath>, after each time interval the excess temperature
        <InlineMath>{`(T - R)`}</InlineMath> is multiplied by a constant factor <InlineMath>r</InlineMath> (where{' '}
        <InlineMath>{`0 < r < 1`}</InlineMath>).
      </p>

      <h2>6.2 More on Half-Lives</h2>

      <h3>Fractional Exponents</h3>

      <p>
        What does <InlineMath>{`r^{1/2}`}</InlineMath> mean? If we want the laws of exponents to hold,
        we need:
      </p>
      <MathBlock>{`r^{1/2} \\cdot r^{1/2} = r^{1/2 + 1/2} = r^1 = r`}</MathBlock>

      <p>
        So <InlineMath>{`r^{1/2}`}</InlineMath> must be the square root of <InlineMath>r</InlineMath>. More generally:
      </p>

      <Callout type="info">
        <strong>Fractional Exponents:</strong>
        <MathBlock>{`r^{1/n} = \\sqrt[n]{r} \\quad \\text{and} \\quad r^{m/n} = \\left(\\sqrt[n]{r}\\right)^m = \\sqrt[n]{r^m}`}</MathBlock>
      </Callout>

      <h3>Carbon Dating</h3>

      <p>
        Carbon-14 is a radioactive isotope with a half-life of about 5730 years.
        Living organisms maintain a constant level of Carbon-14 by absorbing it from
        the atmosphere. When they die, the Carbon-14 decays without replacement.
      </p>

      <div className="bg-dark-800 p-4 rounded-lg my-4 border-l-4 border-amber-500">
        <p className="font-semibold text-amber-400">Example: Dating Ancient Wood</p>
        <p className="mt-2">
          A sample of wood from an ancient tomb contains 70% of the Carbon-14 found in
          living wood. How old is the sample?
        </p>
        <p className="mt-2">We need to solve:</p>
        <MathBlock>{`\\left(\\frac{1}{2}\\right)^{t/5730} = 0.70`}</MathBlock>
        <p className="mt-2">
          Using logarithms (covered later), we find <InlineMath>{`t \\approx 2950`}</InlineMath> years.
        </p>
      </div>

      <h2>6.3 Compound Interest and Related Matters</h2>

      <p>
        When interest is compounded, you earn "interest on interest." This leads to
        exponential growth.
      </p>

      <Callout type="success">
        <strong>Compound Interest Formula:</strong> If principal <InlineMath>P</InlineMath> is invested
        at annual interest rate <InlineMath>I</InlineMath>% compounded annually for <InlineMath>n</InlineMath> years:
        <MathBlock>{`A = P(1 + i)^n \\quad \\text{where } i = I/100`}</MathBlock>
      </Callout>

      <div className="bg-dark-800 p-4 rounded-lg my-4 border-l-4 border-amber-500">
        <p className="font-semibold text-amber-400">Example: Simple vs Compound Interest</p>
        <p className="mt-2">
          Compare $1000 at 8% for 10 years with simple interest vs. compound interest.
        </p>
        <p className="mt-2"><strong>Simple interest:</strong></p>
        <MathBlock>{`A = 1000 + 1000(0.08)(10) = \\$1800`}</MathBlock>
        <p className="mt-2"><strong>Compound interest:</strong></p>
        <MathBlock>{`A = 1000(1.08)^{10} = \\$2158.92`}</MathBlock>
        <p className="mt-2 text-emerald-400">
          Compounding earns an extra $358.92!
        </p>
      </div>

      <CompoundInterestVisualizer />

      <h3>More Frequent Compounding</h3>

      <p>
        Interest can be compounded more frequently than annually. If the annual rate
        is <InlineMath>I</InlineMath>% and interest is compounded <InlineMath>k</InlineMath> times per year,
        then after <InlineMath>n</InlineMath> years:
      </p>

      <MathBlock>{`A = P\\left(1 + \\frac{i}{k}\\right)^{kn}`}</MathBlock>

      <div className="grid grid-cols-2 md:grid-cols-4 gap-4 my-6">
        <div className="bg-dark-800/50 rounded-xl p-4 border border-dark-700 text-center">
          <p className="text-dark-400 text-sm">Annually</p>
          <p className="text-primary-400 font-semibold">k = 1</p>
        </div>
        <div className="bg-dark-800/50 rounded-xl p-4 border border-dark-700 text-center">
          <p className="text-dark-400 text-sm">Quarterly</p>
          <p className="text-primary-400 font-semibold">k = 4</p>
        </div>
        <div className="bg-dark-800/50 rounded-xl p-4 border border-dark-700 text-center">
          <p className="text-dark-400 text-sm">Monthly</p>
          <p className="text-primary-400 font-semibold">k = 12</p>
        </div>
        <div className="bg-dark-800/50 rounded-xl p-4 border border-dark-700 text-center">
          <p className="text-dark-400 text-sm">Daily</p>
          <p className="text-primary-400 font-semibold">k = 365</p>
        </div>
      </div>

      <h3>Inflation and Population Growth</h3>

      <p>
        The same formula applies to any quantity growing at a constant percentage rate:
      </p>

      <ul className="list-disc list-inside space-y-2 my-4 text-dark-300">
        <li>
          <strong className="text-primary-400">Inflation:</strong> If prices rise 5% per
          year, then after 20 years, prices are <InlineMath>{`(1.05)^{20} \\approx 2.65`}</InlineMath> times
          as high.
        </li>
        <li>
          <strong className="text-primary-400">Population:</strong> A population growing
          at 3% per year doubles in about 24 years.
        </li>
        <li>
          <strong className="text-primary-400">Zero Coupon Bonds:</strong> These are
          sold at a discount and pay face value at maturity—the gain is the "interest."
        </li>
      </ul>

      <h2>6.4 IRAs and Tax Sheltered Accounts</h2>

      <p>
        Individual Retirement Accounts (IRAs) offer a mathematical advantage beyond
        just tax deferral. The key insight involves the commutative law of multiplication.
      </p>

      <div className="bg-dark-800 p-4 rounded-lg my-4 border-l-4 border-amber-500">
        <p className="font-semibold text-amber-400">Example: IRA vs Regular Account</p>
        <p className="mt-2">
          An investor in the 40% tax bracket has $2000 of before-tax earnings to invest
          at 10% for 10 years.
        </p>
        <p className="mt-3"><strong>Option A: IRA</strong></p>
        <p>Invest full $2000, then pay tax on withdrawal:</p>
        <MathBlock>{`\\$2000(1.1)^{10}(1 - 0.4) = \\$2000(2.594)(0.6) = \\$3112.49`}</MathBlock>

        <p className="mt-3"><strong>Option B: Taxable Account</strong></p>
        <p>Pay 40% tax first, then invest $1200. Annual tax on interest reduces effective rate to 6%:</p>
        <MathBlock>{`\\$1200(1.06)^{10} = \\$2149.02`}</MathBlock>

        <p className="mt-2 text-emerald-400">
          The IRA yields $963 more—about 45% better!
        </p>
      </div>

      <Callout type="success">
        <strong>Theorem:</strong> If an investor's tax rate remains fixed, an IRA effectively
        makes the accumulated interest tax-free compared to an ordinary investment account.
        The mathematics: <InlineMath>{`P(1+i)^n(1-t) = P(1-t)(1+i)^n`}</InlineMath> by the commutative law.
      </Callout>

      <h2>6.5 Geometric Series—The "Sum" of a Geometric Sequence</h2>

      <p>
        Can we make sense of adding <em>all</em> terms of a geometric sequence?
        Consider the <strong>geometric series</strong>:
      </p>

      <MathBlock>{`a + ar + ar^2 + ar^3 + \\cdots`}</MathBlock>

      <h3>Finite Sums</h3>

      <p>
        First, let's find the sum of the first <InlineMath>{`n+1`}</InlineMath> terms:
      </p>
      <MathBlock>{`S_n = a + ar + ar^2 + \\cdots + ar^n`}</MathBlock>

      <div className="bg-dark-800 p-4 rounded-lg my-4 border-l-4 border-indigo-500">
        <p className="font-semibold text-indigo-400">The Clever Trick</p>
        <p className="mt-2">Multiply <InlineMath>{`S_n`}</InlineMath> by <InlineMath>r</InlineMath> and subtract:</p>
        <MathBlock>{`\\begin{aligned}
S_n &= a + ar + ar^2 + \\cdots + ar^n \\\\
rS_n &= \\quad\\; ar + ar^2 + \\cdots + ar^n + ar^{n+1} \\\\
\\hline
S_n - rS_n &= a - ar^{n+1}
\\end{aligned}`}</MathBlock>
        <p className="mt-2">Therefore:</p>
        <MathBlock>{`S_n = \\frac{a(1 - r^{n+1})}{1 - r} = \\frac{a - ar^{n+1}}{1 - r} \\quad (r \\neq 1)`}</MathBlock>
      </div>

      <h3>Infinite Series</h3>

      <p>
        When <InlineMath>{`|r| < 1`}</InlineMath>, the powers <InlineMath>{`r^n`}</InlineMath> approach zero as{' '}
        <InlineMath>n</InlineMath> grows. So <InlineMath>{`S_n`}</InlineMath> approaches a finite limit:
      </p>

      <Callout type="success">
        <strong>Sum of an Infinite Geometric Series:</strong> When <InlineMath>{`|r| < 1`}</InlineMath>:
        <MathBlock>{`a + ar + ar^2 + ar^3 + \\cdots = \\frac{a}{1-r}`}</MathBlock>
      </Callout>

      <div className="bg-dark-800 p-4 rounded-lg my-4 border-l-4 border-amber-500">
        <p className="font-semibold text-amber-400">Example: Repeating Decimals</p>
        <p className="mt-2">
          Express <InlineMath>{`0.\\overline{3} = 0.3333\\ldots`}</InlineMath> as a fraction.
        </p>
        <MathBlock>{`0.\\overline{3} = \\frac{3}{10} + \\frac{3}{100} + \\frac{3}{1000} + \\cdots`}</MathBlock>
        <p className="mt-2">
          This is geometric with <InlineMath>{`a = 3/10`}</InlineMath> and <InlineMath>{`r = 1/10`}</InlineMath>:
        </p>
        <MathBlock>{`S = \\frac{3/10}{1 - 1/10} = \\frac{3/10}{9/10} = \\frac{3}{9} = \\frac{1}{3}`}</MathBlock>
      </div>

      <h3>The Bouncing Ball</h3>

      <p>
        A ball dropped from height <InlineMath>h</InlineMath> bounces back to <InlineMath>rh</InlineMath>{' '}
        (where <InlineMath>{`0 < r < 1`}</InlineMath>), then to <InlineMath>{`r^2h`}</InlineMath>, and so on.
        How far does it travel in total?
      </p>

      <div className="bg-dark-800 p-4 rounded-lg my-4 border-l-4 border-amber-500">
        <p className="font-semibold text-amber-400">Example: Total Distance</p>
        <p className="mt-2">
          A ball dropped from 5 feet bounces back to <InlineMath>{`\\frac{2}{3}`}</InlineMath> of its
          previous height each time.
        </p>
        <p className="mt-2">Total distance:</p>
        <MathBlock>{`5 + 10\\left(\\frac{2}{3}\\right) + 10\\left(\\frac{2}{3}\\right)^2 + 10\\left(\\frac{2}{3}\\right)^3 + \\cdots`}</MathBlock>
        <p className="mt-2">
          The series part (after the initial 5) has <InlineMath>{`a = 20/3`}</InlineMath> and{' '}
          <InlineMath>{`r = 2/3`}</InlineMath>:
        </p>
        <MathBlock>{`5 + \\frac{20/3}{1 - 2/3} = 5 + \\frac{20/3}{1/3} = 5 + 20 = 25 \\text{ feet}`}</MathBlock>
        <p className="mt-2 text-emerald-400">
          Infinitely many bounces, but only 25 feet of travel!
        </p>
      </div>

      <Callout type="info">
        <strong>Surprising Fact:</strong> The ball also bounces for only a <em>finite</em>{' '}
        amount of time! This follows from the fact that the times between bounces also
        form a geometric series (each bounce takes <InlineMath>{`\\sqrt{r}`}</InlineMath> times as
        long as the previous one).
      </Callout>

      <Callout type="success">
        <strong>Chapter Summary:</strong> Geometric sequences <InlineMath>{`a, ar, ar^2, \\ldots`}</InlineMath>{' '}
        model exponential growth and decay throughout science and finance. The half-life
        formula <InlineMath>{`Q = Q_0(1/2)^{t/h}`}</InlineMath> describes radioactive decay and carbon
        dating. Compound interest <InlineMath>{`A = P(1+i)^n`}</InlineMath> shows how money grows
        exponentially. When <InlineMath>{`|r| < 1`}</InlineMath>, the infinite geometric series sums
        to <InlineMath>{`a/(1-r)`}</InlineMath>, explaining repeating decimals and bounded infinite
        processes like bouncing balls.
      </Callout>
    </LessonLayout>
  );
}
