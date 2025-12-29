import { LessonLayout } from '../../components/layout/LessonLayout';
import { Math as MathInline, MathBlock } from '../../components/common/MathBlock';
import { Callout } from '../../components/common/Callout';

export default function Section45() {
  return (
    <LessonLayout sectionId={45}>
      <p>
        The integration of a rational function can always be reduced to the
        integration of a polynomial plus a sum of terms called <em>partial fractions</em>.
        This technique is one of the most powerful methods for integrating
        rational functions of the form <MathInline>{`\\frac{P(x)}{Q(x)}`}</MathInline>.
      </p>

      <h2>The General Method</h2>

      <p>
        If the degree of <MathInline>{`P(x)`}</MathInline> is greater than or equal to the
        degree of <MathInline>{`Q(x)`}</MathInline>, we first perform polynomial division
        to write:
      </p>

      <MathBlock>{`\\frac{P(x)}{Q(x)} = S(x) + \\frac{R(x)}{Q(x)}`}</MathBlock>

      <p>
        where <MathInline>{`S(x)`}</MathInline> is a polynomial and the degree
        of <MathInline>{`R(x)`}</MathInline> is less than the degree of <MathInline>{`Q(x)`}</MathInline>.
        The partial fraction technique then applies to <MathInline>{`\\frac{R(x)}{Q(x)}`}</MathInline>.
      </p>

      <Callout type="info">
        The method depends on factoring the denominator <MathInline>{`Q(x)`}</MathInline> into
        linear and irreducible quadratic factors. There are four cases to consider,
        depending on the nature of these factors.
      </Callout>

      <h2>Case 1: Distinct Linear Factors</h2>

      <p>
        If <MathInline>{`Q(x)`}</MathInline> can be factored into distinct linear factors:
      </p>

      <MathBlock>{`Q(x) = (x - a_1)(x - a_2) \\cdots (x - a_n)`}</MathBlock>

      <p>
        where <MathInline>{`a_1, a_2, \\ldots, a_n`}</MathInline> are all distinct, then:
      </p>

      <Callout type="theorem" title="Partial Fractions: Distinct Linear Factors">
        <MathBlock>{`\\frac{R(x)}{Q(x)} = \\frac{A_1}{x - a_1} + \\frac{A_2}{x - a_2} + \\cdots + \\frac{A_n}{x - a_n}`}</MathBlock>
        <p>
          where each <MathInline>{`A_k`}</MathInline> is a constant that can be found by the
          cover-up method or by equating coefficients.
        </p>
      </Callout>

      <p>
        To find <MathInline>{`A_k`}</MathInline>, multiply both sides
        by <MathInline>{`(x - a_k)`}</MathInline> and set <MathInline>{`x = a_k`}</MathInline>:
      </p>

      <MathBlock>{`A_k = \\frac{R(a_k)}{Q'(a_k)} = \\lim_{x \\to a_k} (x - a_k) \\frac{R(x)}{Q(x)}`}</MathBlock>

      <Callout type="example" title="Example: Distinct Linear Factors">
        <p>Find <MathInline>{`\\displaystyle\\int \\frac{1}{x^2 - 1}\\,dx`}</MathInline>.</p>
        <p><strong>Solution:</strong></p>
        <p>
          Factor: <MathInline>{`x^2 - 1 = (x-1)(x+1)`}</MathInline>. We seek:
        </p>
        <MathBlock>{`\\frac{1}{x^2-1} = \\frac{A}{x-1} + \\frac{B}{x+1}`}</MathBlock>
        <p>
          Using the cover-up method:
        </p>
        <ul className="list-disc pl-6 space-y-1">
          <li><MathInline>{`A = \\frac{1}{1+1} = \\frac{1}{2}`}</MathInline> (set <MathInline>{`x=1`}</MathInline>)</li>
          <li><MathInline>{`B = \\frac{1}{-1-1} = -\\frac{1}{2}`}</MathInline> (set <MathInline>{`x=-1`}</MathInline>)</li>
        </ul>
        <p>Therefore:</p>
        <MathBlock>{`\\int \\frac{1}{x^2-1}\\,dx = \\frac{1}{2}\\int\\frac{dx}{x-1} - \\frac{1}{2}\\int\\frac{dx}{x+1} = \\frac{1}{2}\\ln\\left|\\frac{x-1}{x+1}\\right| + C`}</MathBlock>
      </Callout>

      <Callout type="example" title="Example: Three Distinct Factors">
        <p>Find <MathInline>{`\\displaystyle\\int \\frac{x+1}{x(x-1)(x+2)}\\,dx`}</MathInline>.</p>
        <p><strong>Solution:</strong></p>
        <MathBlock>{`\\frac{x+1}{x(x-1)(x+2)} = \\frac{A}{x} + \\frac{B}{x-1} + \\frac{C}{x+2}`}</MathBlock>
        <p>Using the cover-up method:</p>
        <ul className="list-disc pl-6 space-y-1">
          <li><MathInline>{`A = \\frac{0+1}{(0-1)(0+2)} = -\\frac{1}{2}`}</MathInline></li>
          <li><MathInline>{`B = \\frac{1+1}{1(1+2)} = \\frac{2}{3}`}</MathInline></li>
          <li><MathInline>{`C = \\frac{-2+1}{(-2)(-2-1)} = -\\frac{1}{6}`}</MathInline></li>
        </ul>
        <MathBlock>{`\\int \\frac{x+1}{x(x-1)(x+2)}\\,dx = -\\frac{1}{2}\\ln|x| + \\frac{2}{3}\\ln|x-1| - \\frac{1}{6}\\ln|x+2| + C`}</MathBlock>
      </Callout>

      <h2>Case 2: Repeated Linear Factors</h2>

      <p>
        If a linear factor <MathInline>{`(x-a)`}</MathInline> appears with
        multiplicity <MathInline>{`m`}</MathInline> in <MathInline>{`Q(x)`}</MathInline>, then
        we need <MathInline>{`m`}</MathInline> terms in the partial fraction expansion.
      </p>

      <Callout type="theorem" title="Partial Fractions: Repeated Linear Factors">
        <p>
          For the factor <MathInline>{`(x-a)^m`}</MathInline>, include:
        </p>
        <MathBlock>{`\\frac{A_1}{x-a} + \\frac{A_2}{(x-a)^2} + \\cdots + \\frac{A_m}{(x-a)^m}`}</MathBlock>
      </Callout>

      <Callout type="example" title="Example: Repeated Factor">
        <p>Find <MathInline>{`\\displaystyle\\int \\frac{x^2}{(x-1)^3}\\,dx`}</MathInline>.</p>
        <p><strong>Solution:</strong></p>
        <MathBlock>{`\\frac{x^2}{(x-1)^3} = \\frac{A}{x-1} + \\frac{B}{(x-1)^2} + \\frac{C}{(x-1)^3}`}</MathBlock>
        <p>Multiply both sides by <MathInline>{`(x-1)^3`}</MathInline>:</p>
        <MathBlock>{`x^2 = A(x-1)^2 + B(x-1) + C`}</MathBlock>
        <p>Setting <MathInline>{`x = 1`}</MathInline>: <MathInline>{`C = 1`}</MathInline>.</p>
        <p>Expanding and comparing coefficients:</p>
        <MathBlock>{`x^2 = Ax^2 - 2Ax + A + Bx - B + C`}</MathBlock>
        <p>
          Comparing: <MathInline>{`A = 1`}</MathInline>, <MathInline>{`-2A + B = 0 \\Rightarrow B = 2`}</MathInline>.
        </p>
        <MathBlock>{`\\int \\frac{x^2}{(x-1)^3}\\,dx = \\int\\frac{dx}{x-1} + 2\\int\\frac{dx}{(x-1)^2} + \\int\\frac{dx}{(x-1)^3}`}</MathBlock>
        <MathBlock>{`= \\ln|x-1| - \\frac{2}{x-1} - \\frac{1}{2(x-1)^2} + C`}</MathBlock>
      </Callout>

      <h2>Case 3: Irreducible Quadratic Factors (Not Repeated)</h2>

      <p>
        A quadratic factor <MathInline>{`ax^2 + bx + c`}</MathInline> is <em>irreducible</em> over
        the reals if <MathInline>{`b^2 - 4ac < 0`}</MathInline> (i.e., it has no real roots).
      </p>

      <Callout type="theorem" title="Partial Fractions: Irreducible Quadratic">
        <p>
          For each irreducible quadratic factor <MathInline>{`ax^2 + bx + c`}</MathInline>, include:
        </p>
        <MathBlock>{`\\frac{Ax + B}{ax^2 + bx + c}`}</MathBlock>
        <p>
          Note the numerator is linear (not constant) when the denominator factor is quadratic.
        </p>
      </Callout>

      <p>
        To integrate such terms, complete the square and use:
      </p>

      <MathBlock>{`\\int \\frac{dx}{x^2 + a^2} = \\frac{1}{a}\\arctan\\frac{x}{a} + C`}</MathBlock>

      <MathBlock>{`\\int \\frac{x\\,dx}{x^2 + a^2} = \\frac{1}{2}\\ln(x^2 + a^2) + C`}</MathBlock>

      <Callout type="example" title="Example: Irreducible Quadratic Factor">
        <p>Find <MathInline>{`\\displaystyle\\int \\frac{x}{(x-1)(x^2+1)}\\,dx`}</MathInline>.</p>
        <p><strong>Solution:</strong></p>
        <MathBlock>{`\\frac{x}{(x-1)(x^2+1)} = \\frac{A}{x-1} + \\frac{Bx + C}{x^2+1}`}</MathBlock>
        <p>Multiply by <MathInline>{`(x-1)(x^2+1)`}</MathInline>:</p>
        <MathBlock>{`x = A(x^2+1) + (Bx+C)(x-1)`}</MathBlock>
        <p>Setting <MathInline>{`x = 1`}</MathInline>: <MathInline>{`1 = 2A \\Rightarrow A = \\frac{1}{2}`}</MathInline>.</p>
        <p>Expanding: <MathInline>{`x = Ax^2 + A + Bx^2 - Bx + Cx - C`}</MathInline></p>
        <p>Comparing coefficients:</p>
        <ul className="list-disc pl-6 space-y-1">
          <li><MathInline>{`x^2`}</MathInline>: <MathInline>{`A + B = 0 \\Rightarrow B = -\\frac{1}{2}`}</MathInline></li>
          <li><MathInline>{`x^1`}</MathInline>: <MathInline>{`-B + C = 1 \\Rightarrow C = \\frac{1}{2}`}</MathInline></li>
        </ul>
        <MathBlock>{`\\int \\frac{x}{(x-1)(x^2+1)}\\,dx = \\frac{1}{2}\\int\\frac{dx}{x-1} - \\frac{1}{2}\\int\\frac{x}{x^2+1}\\,dx + \\frac{1}{2}\\int\\frac{dx}{x^2+1}`}</MathBlock>
        <MathBlock>{`= \\frac{1}{2}\\ln|x-1| - \\frac{1}{4}\\ln(x^2+1) + \\frac{1}{2}\\arctan x + C`}</MathBlock>
      </Callout>

      <h2>Case 4: Repeated Irreducible Quadratic Factors</h2>

      <p>
        If an irreducible quadratic factor appears with multiplicity <MathInline>{`m`}</MathInline>,
        we need <MathInline>{`m`}</MathInline> terms with linear numerators.
      </p>

      <Callout type="theorem" title="Partial Fractions: Repeated Quadratic">
        <p>
          For <MathInline>{`(ax^2 + bx + c)^m`}</MathInline>, include:
        </p>
        <MathBlock>{`\\frac{A_1x + B_1}{ax^2+bx+c} + \\frac{A_2x + B_2}{(ax^2+bx+c)^2} + \\cdots + \\frac{A_mx + B_m}{(ax^2+bx+c)^m}`}</MathBlock>
      </Callout>

      <Callout type="example" title="Example: Repeated Quadratic">
        <p>Find <MathInline>{`\\displaystyle\\int \\frac{1}{(x^2+1)^2}\\,dx`}</MathInline>.</p>
        <p><strong>Solution:</strong></p>
        <p>
          This doesn't need partial fractions (there's only one factor), but requires a
          reduction formula. Use the substitution <MathInline>{`x = \\tan\\theta`}</MathInline>:
        </p>
        <MathBlock>{`\\int \\frac{1}{(x^2+1)^2}\\,dx = \\int \\frac{\\sec^2\\theta}{\\sec^4\\theta}\\,d\\theta = \\int \\cos^2\\theta\\,d\\theta`}</MathBlock>
        <MathBlock>{`= \\frac{\\theta}{2} + \\frac{\\sin 2\\theta}{4} + C = \\frac{1}{2}\\arctan x + \\frac{x}{2(x^2+1)} + C`}</MathBlock>
      </Callout>

      <h2>General Strategy</h2>

      <Callout type="definition" title="Partial Fraction Algorithm">
        <p>To integrate <MathInline>{`\\displaystyle\\int \\frac{P(x)}{Q(x)}\\,dx`}</MathInline>:</p>
        <ol className="list-decimal pl-6 space-y-2 mt-2">
          <li>
            If <MathInline>{`\\deg P \\geq \\deg Q`}</MathInline>, perform polynomial division first.
          </li>
          <li>
            Factor <MathInline>{`Q(x)`}</MathInline> completely into linear and irreducible quadratic factors.
          </li>
          <li>
            Write the partial fraction decomposition using the rules for each case.
          </li>
          <li>
            Find the unknown constants by:
            <ul className="list-disc pl-6 mt-1">
              <li>Cover-up method (for distinct linear factors)</li>
              <li>Equating coefficients</li>
              <li>Substituting convenient values of <MathInline>{`x`}</MathInline></li>
            </ul>
          </li>
          <li>
            Integrate each partial fraction term.
          </li>
        </ol>
      </Callout>

      <Callout type="example" title="Example: Mixed Factors">
        <p>Find <MathInline>{`\\displaystyle\\int \\frac{2x^2 + 3}{(x-1)(x^2+4)}\\,dx`}</MathInline>.</p>
        <p><strong>Solution:</strong></p>
        <MathBlock>{`\\frac{2x^2+3}{(x-1)(x^2+4)} = \\frac{A}{x-1} + \\frac{Bx+C}{x^2+4}`}</MathBlock>
        <p>Multiply by <MathInline>{`(x-1)(x^2+4)`}</MathInline>:</p>
        <MathBlock>{`2x^2+3 = A(x^2+4) + (Bx+C)(x-1)`}</MathBlock>
        <p>Setting <MathInline>{`x=1`}</MathInline>: <MathInline>{`5 = 5A \\Rightarrow A = 1`}</MathInline>.</p>
        <p>Expanding and comparing:</p>
        <ul className="list-disc pl-6 space-y-1">
          <li><MathInline>{`x^2`}</MathInline>: <MathInline>{`A + B = 2 \\Rightarrow B = 1`}</MathInline></li>
          <li><MathInline>{`x^0`}</MathInline>: <MathInline>{`4A - C = 3 \\Rightarrow C = 1`}</MathInline></li>
        </ul>
        <MathBlock>{`\\int \\frac{2x^2+3}{(x-1)(x^2+4)}\\,dx = \\int\\frac{dx}{x-1} + \\int\\frac{x+1}{x^2+4}\\,dx`}</MathBlock>
        <MathBlock>{`= \\ln|x-1| + \\frac{1}{2}\\ln(x^2+4) + \\frac{1}{2}\\arctan\\frac{x}{2} + C`}</MathBlock>
      </Callout>

      <h2>Key Integration Formulas</h2>

      <p>The partial fraction method often leads to these standard integrals:</p>

      <Callout type="info" title="Reference Integrals">
        <MathBlock>{`\\int \\frac{dx}{x-a} = \\ln|x-a| + C`}</MathBlock>
        <MathBlock>{`\\int \\frac{dx}{(x-a)^n} = \\frac{-1}{(n-1)(x-a)^{n-1}} + C \\quad (n > 1)`}</MathBlock>
        <MathBlock>{`\\int \\frac{dx}{x^2+a^2} = \\frac{1}{a}\\arctan\\frac{x}{a} + C`}</MathBlock>
        <MathBlock>{`\\int \\frac{x\\,dx}{x^2+a^2} = \\frac{1}{2}\\ln(x^2+a^2) + C`}</MathBlock>
      </Callout>
    </LessonLayout>
  );
}
