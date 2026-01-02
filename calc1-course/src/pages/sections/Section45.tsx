import { LessonLayout } from '../../components/layout/LessonLayout';
import { InlineMath, MathBlock } from '../../components/common/MathBlock';
import { Callout } from '../../components/common/Callout';

export default function Section45() {
  return (
    <LessonLayout sectionId={45}>
      <p>
        The integration of a rational function can always be reduced to the
        integration of a polynomial plus a sum of terms called <em>partial fractions</em>.
        This technique is one of the most powerful methods for integrating
        rational functions of the form <InlineMath>{`\\frac{P(x)}{Q(x)}`}</InlineMath>.
      </p>

      <h2>The General Method</h2>

      <p>
        If the degree of <InlineMath>{`P(x)`}</InlineMath> is greater than or equal to the
        degree of <InlineMath>{`Q(x)`}</InlineMath>, we first perform polynomial division
        to write:
      </p>

      <MathBlock>{`\\frac{P(x)}{Q(x)} = S(x) + \\frac{R(x)}{Q(x)}`}</MathBlock>

      <p>
        where <InlineMath>{`S(x)`}</InlineMath> is a polynomial and the degree
        of <InlineMath>{`R(x)`}</InlineMath> is less than the degree of <InlineMath>{`Q(x)`}</InlineMath>.
        The partial fraction technique then applies to <InlineMath>{`\\frac{R(x)}{Q(x)}`}</InlineMath>.
      </p>

      <Callout type="info">
        The method depends on factoring the denominator <InlineMath>{`Q(x)`}</InlineMath> into
        linear and irreducible quadratic factors. There are four cases to consider,
        depending on the nature of these factors.
      </Callout>

      <h2>Case 1: Distinct Linear Factors</h2>

      <p>
        If <InlineMath>{`Q(x)`}</InlineMath> can be factored into distinct linear factors:
      </p>

      <MathBlock>{`Q(x) = (x - a_1)(x - a_2) \\cdots (x - a_n)`}</MathBlock>

      <p>
        where <InlineMath>{`a_1, a_2, \\ldots, a_n`}</InlineMath> are all distinct, then:
      </p>

      <Callout type="theorem" title="Partial Fractions: Distinct Linear Factors">
        <MathBlock>{`\\frac{R(x)}{Q(x)} = \\frac{A_1}{x - a_1} + \\frac{A_2}{x - a_2} + \\cdots + \\frac{A_n}{x - a_n}`}</MathBlock>
        <p>
          where each <InlineMath>{`A_k`}</InlineMath> is a constant that can be found by the
          cover-up method or by equating coefficients.
        </p>
      </Callout>

      <p>
        To find <InlineMath>{`A_k`}</InlineMath>, multiply both sides
        by <InlineMath>{`(x - a_k)`}</InlineMath> and set <InlineMath>{`x = a_k`}</InlineMath>:
      </p>

      <MathBlock>{`A_k = \\frac{R(a_k)}{Q'(a_k)} = \\lim_{x \\to a_k} (x - a_k) \\frac{R(x)}{Q(x)}`}</MathBlock>

      <Callout type="example" title="Example: Distinct Linear Factors">
        <p>Find <InlineMath>{`\\displaystyle\\int \\frac{1}{x^2 - 1}\\,dx`}</InlineMath>.</p>
        <p><strong>Solution:</strong></p>
        <p>
          Factor: <InlineMath>{`x^2 - 1 = (x-1)(x+1)`}</InlineMath>. We seek:
        </p>
        <MathBlock>{`\\frac{1}{x^2-1} = \\frac{A}{x-1} + \\frac{B}{x+1}`}</MathBlock>
        <p>
          Using the cover-up method:
        </p>
        <ul className="list-disc pl-6 space-y-1">
          <li><InlineMath>{`A = \\frac{1}{1+1} = \\frac{1}{2}`}</InlineMath> (set <InlineMath>{`x=1`}</InlineMath>)</li>
          <li><InlineMath>{`B = \\frac{1}{-1-1} = -\\frac{1}{2}`}</InlineMath> (set <InlineMath>{`x=-1`}</InlineMath>)</li>
        </ul>
        <p>Therefore:</p>
        <MathBlock>{`\\int \\frac{1}{x^2-1}\\,dx = \\frac{1}{2}\\int\\frac{dx}{x-1} - \\frac{1}{2}\\int\\frac{dx}{x+1} = \\frac{1}{2}\\ln\\left|\\frac{x-1}{x+1}\\right| + C`}</MathBlock>
      </Callout>

      <Callout type="example" title="Example: Three Distinct Factors">
        <p>Find <InlineMath>{`\\displaystyle\\int \\frac{x+1}{x(x-1)(x+2)}\\,dx`}</InlineMath>.</p>
        <p><strong>Solution:</strong></p>
        <MathBlock>{`\\frac{x+1}{x(x-1)(x+2)} = \\frac{A}{x} + \\frac{B}{x-1} + \\frac{C}{x+2}`}</MathBlock>
        <p>Using the cover-up method:</p>
        <ul className="list-disc pl-6 space-y-1">
          <li><InlineMath>{`A = \\frac{0+1}{(0-1)(0+2)} = -\\frac{1}{2}`}</InlineMath></li>
          <li><InlineMath>{`B = \\frac{1+1}{1(1+2)} = \\frac{2}{3}`}</InlineMath></li>
          <li><InlineMath>{`C = \\frac{-2+1}{(-2)(-2-1)} = -\\frac{1}{6}`}</InlineMath></li>
        </ul>
        <MathBlock>{`\\int \\frac{x+1}{x(x-1)(x+2)}\\,dx = -\\frac{1}{2}\\ln|x| + \\frac{2}{3}\\ln|x-1| - \\frac{1}{6}\\ln|x+2| + C`}</MathBlock>
      </Callout>

      <h2>Case 2: Repeated Linear Factors</h2>

      <p>
        If a linear factor <InlineMath>{`(x-a)`}</InlineMath> appears with
        multiplicity <InlineMath>{`m`}</InlineMath> in <InlineMath>{`Q(x)`}</InlineMath>, then
        we need <InlineMath>{`m`}</InlineMath> terms in the partial fraction expansion.
      </p>

      <Callout type="theorem" title="Partial Fractions: Repeated Linear Factors">
        <p>
          For the factor <InlineMath>{`(x-a)^m`}</InlineMath>, include:
        </p>
        <MathBlock>{`\\frac{A_1}{x-a} + \\frac{A_2}{(x-a)^2} + \\cdots + \\frac{A_m}{(x-a)^m}`}</MathBlock>
      </Callout>

      <Callout type="example" title="Example: Repeated Factor">
        <p>Find <InlineMath>{`\\displaystyle\\int \\frac{x^2}{(x-1)^3}\\,dx`}</InlineMath>.</p>
        <p><strong>Solution:</strong></p>
        <MathBlock>{`\\frac{x^2}{(x-1)^3} = \\frac{A}{x-1} + \\frac{B}{(x-1)^2} + \\frac{C}{(x-1)^3}`}</MathBlock>
        <p>Multiply both sides by <InlineMath>{`(x-1)^3`}</InlineMath>:</p>
        <MathBlock>{`x^2 = A(x-1)^2 + B(x-1) + C`}</MathBlock>
        <p>Setting <InlineMath>{`x = 1`}</InlineMath>: <InlineMath>{`C = 1`}</InlineMath>.</p>
        <p>Expanding and comparing coefficients:</p>
        <MathBlock>{`x^2 = Ax^2 - 2Ax + A + Bx - B + C`}</MathBlock>
        <p>
          Comparing: <InlineMath>{`A = 1`}</InlineMath>, <InlineMath>{`-2A + B = 0 \\Rightarrow B = 2`}</InlineMath>.
        </p>
        <MathBlock>{`\\int \\frac{x^2}{(x-1)^3}\\,dx = \\int\\frac{dx}{x-1} + 2\\int\\frac{dx}{(x-1)^2} + \\int\\frac{dx}{(x-1)^3}`}</MathBlock>
        <MathBlock>{`= \\ln|x-1| - \\frac{2}{x-1} - \\frac{1}{2(x-1)^2} + C`}</MathBlock>
      </Callout>

      <h2>Case 3: Irreducible Quadratic Factors (Not Repeated)</h2>

      <p>
        A quadratic factor <InlineMath>{`ax^2 + bx + c`}</InlineMath> is <em>irreducible</em> over
        the reals if <InlineMath>{`b^2 - 4ac < 0`}</InlineMath> (i.e., it has no real roots).
      </p>

      <Callout type="theorem" title="Partial Fractions: Irreducible Quadratic">
        <p>
          For each irreducible quadratic factor <InlineMath>{`ax^2 + bx + c`}</InlineMath>, include:
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
        <p>Find <InlineMath>{`\\displaystyle\\int \\frac{x}{(x-1)(x^2+1)}\\,dx`}</InlineMath>.</p>
        <p><strong>Solution:</strong></p>
        <MathBlock>{`\\frac{x}{(x-1)(x^2+1)} = \\frac{A}{x-1} + \\frac{Bx + C}{x^2+1}`}</MathBlock>
        <p>Multiply by <InlineMath>{`(x-1)(x^2+1)`}</InlineMath>:</p>
        <MathBlock>{`x = A(x^2+1) + (Bx+C)(x-1)`}</MathBlock>
        <p>Setting <InlineMath>{`x = 1`}</InlineMath>: <InlineMath>{`1 = 2A \\Rightarrow A = \\frac{1}{2}`}</InlineMath>.</p>
        <p>Expanding: <InlineMath>{`x = Ax^2 + A + Bx^2 - Bx + Cx - C`}</InlineMath></p>
        <p>Comparing coefficients:</p>
        <ul className="list-disc pl-6 space-y-1">
          <li><InlineMath>{`x^2`}</InlineMath>: <InlineMath>{`A + B = 0 \\Rightarrow B = -\\frac{1}{2}`}</InlineMath></li>
          <li><InlineMath>{`x^1`}</InlineMath>: <InlineMath>{`-B + C = 1 \\Rightarrow C = \\frac{1}{2}`}</InlineMath></li>
        </ul>
        <MathBlock>{`\\int \\frac{x}{(x-1)(x^2+1)}\\,dx = \\frac{1}{2}\\int\\frac{dx}{x-1} - \\frac{1}{2}\\int\\frac{x}{x^2+1}\\,dx + \\frac{1}{2}\\int\\frac{dx}{x^2+1}`}</MathBlock>
        <MathBlock>{`= \\frac{1}{2}\\ln|x-1| - \\frac{1}{4}\\ln(x^2+1) + \\frac{1}{2}\\arctan x + C`}</MathBlock>
      </Callout>

      <h2>Case 4: Repeated Irreducible Quadratic Factors</h2>

      <p>
        If an irreducible quadratic factor appears with multiplicity <InlineMath>{`m`}</InlineMath>,
        we need <InlineMath>{`m`}</InlineMath> terms with linear numerators.
      </p>

      <Callout type="theorem" title="Partial Fractions: Repeated Quadratic">
        <p>
          For <InlineMath>{`(ax^2 + bx + c)^m`}</InlineMath>, include:
        </p>
        <MathBlock>{`\\frac{A_1x + B_1}{ax^2+bx+c} + \\frac{A_2x + B_2}{(ax^2+bx+c)^2} + \\cdots + \\frac{A_mx + B_m}{(ax^2+bx+c)^m}`}</MathBlock>
      </Callout>

      <Callout type="example" title="Example: Repeated Quadratic">
        <p>Find <InlineMath>{`\\displaystyle\\int \\frac{1}{(x^2+1)^2}\\,dx`}</InlineMath>.</p>
        <p><strong>Solution:</strong></p>
        <p>
          This doesn't need partial fractions (there's only one factor), but requires a
          reduction formula. Use the substitution <InlineMath>{`x = \\tan\\theta`}</InlineMath>:
        </p>
        <MathBlock>{`\\int \\frac{1}{(x^2+1)^2}\\,dx = \\int \\frac{\\sec^2\\theta}{\\sec^4\\theta}\\,d\\theta = \\int \\cos^2\\theta\\,d\\theta`}</MathBlock>
        <MathBlock>{`= \\frac{\\theta}{2} + \\frac{\\sin 2\\theta}{4} + C = \\frac{1}{2}\\arctan x + \\frac{x}{2(x^2+1)} + C`}</MathBlock>
      </Callout>

      <h2>General Strategy</h2>

      <Callout type="definition" title="Partial Fraction Algorithm">
        <p>To integrate <InlineMath>{`\\displaystyle\\int \\frac{P(x)}{Q(x)}\\,dx`}</InlineMath>:</p>
        <ol className="list-decimal pl-6 space-y-2 mt-2">
          <li>
            If <InlineMath>{`\\deg P \\geq \\deg Q`}</InlineMath>, perform polynomial division first.
          </li>
          <li>
            Factor <InlineMath>{`Q(x)`}</InlineMath> completely into linear and irreducible quadratic factors.
          </li>
          <li>
            Write the partial fraction decomposition using the rules for each case.
          </li>
          <li>
            Find the unknown constants by:
            <ul className="list-disc pl-6 mt-1">
              <li>Cover-up method (for distinct linear factors)</li>
              <li>Equating coefficients</li>
              <li>Substituting convenient values of <InlineMath>{`x`}</InlineMath></li>
            </ul>
          </li>
          <li>
            Integrate each partial fraction term.
          </li>
        </ol>
      </Callout>

      <Callout type="example" title="Example: Mixed Factors">
        <p>Find <InlineMath>{`\\displaystyle\\int \\frac{2x^2 + 3}{(x-1)(x^2+4)}\\,dx`}</InlineMath>.</p>
        <p><strong>Solution:</strong></p>
        <MathBlock>{`\\frac{2x^2+3}{(x-1)(x^2+4)} = \\frac{A}{x-1} + \\frac{Bx+C}{x^2+4}`}</MathBlock>
        <p>Multiply by <InlineMath>{`(x-1)(x^2+4)`}</InlineMath>:</p>
        <MathBlock>{`2x^2+3 = A(x^2+4) + (Bx+C)(x-1)`}</MathBlock>
        <p>Setting <InlineMath>{`x=1`}</InlineMath>: <InlineMath>{`5 = 5A \\Rightarrow A = 1`}</InlineMath>.</p>
        <p>Expanding and comparing:</p>
        <ul className="list-disc pl-6 space-y-1">
          <li><InlineMath>{`x^2`}</InlineMath>: <InlineMath>{`A + B = 2 \\Rightarrow B = 1`}</InlineMath></li>
          <li><InlineMath>{`x^0`}</InlineMath>: <InlineMath>{`4A - C = 3 \\Rightarrow C = 1`}</InlineMath></li>
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
