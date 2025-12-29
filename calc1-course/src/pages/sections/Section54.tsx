import { LessonLayout } from '../../components/layout/LessonLayout';
import { Math as MathInline, MathBlock } from '../../components/common/MathBlock';
import { Callout } from '../../components/common/Callout';

export default function Section54() {
  return (
    <LessonLayout sectionId={54}>
      <p>
        Differential equations arise naturally in modeling physical, biological, and
        economic phenomena. This section explores classic applications: exponential
        growth and decay, Newton's law of cooling, and mixing problems.
      </p>

      <h2>Exponential Growth and Decay</h2>

      <Callout type="theorem" title="The Exponential Model">
        <p>
          If a quantity <MathInline>{`y(t)`}</MathInline> changes at a rate proportional to its
          current value, then:
        </p>
        <MathBlock>{`\\frac{dy}{dt} = ky`}</MathBlock>
        <p>
          where <MathInline>{`k`}</MathInline> is the <strong>growth constant</strong>
          (<MathInline>{`k > 0`}</MathInline>) or <strong>decay constant</strong>
          (<MathInline>{`k < 0`}</MathInline>).
        </p>
        <p>The solution is:</p>
        <MathBlock>{`y(t) = y_0 e^{kt}`}</MathBlock>
        <p>where <MathInline>{`y_0 = y(0)`}</MathInline> is the initial value.</p>
      </Callout>

      <h3>Population Growth</h3>

      <Callout type="example" title="Example 1: Bacterial Growth">
        <p>
          A bacteria culture starts with 1000 organisms and doubles every 3 hours.
          How many bacteria are present after 8 hours?
        </p>
        <p><strong>Solution:</strong></p>
        <p>
          Model: <MathInline>{`P(t) = P_0 e^{kt}`}</MathInline> with <MathInline>{`P_0 = 1000`}</MathInline>.
        </p>
        <p>
          Find <MathInline>{`k`}</MathInline>: <MathInline>{`P(3) = 2000`}</MathInline>, so:
        </p>
        <MathBlock>{`2000 = 1000e^{3k} \\quad \\Rightarrow \\quad e^{3k} = 2 \\quad \\Rightarrow \\quad k = \\frac{\\ln 2}{3}`}</MathBlock>
        <p>
          Therefore <MathInline>{`P(t) = 1000 \\cdot 2^{t/3}`}</MathInline>.
        </p>
        <p>At <MathInline>{`t = 8`}</MathInline>:</p>
        <MathBlock>{`P(8) = 1000 \\cdot 2^{8/3} = 1000 \\cdot 2^{2.67} \\approx 6350 \\text{ bacteria}`}</MathBlock>
      </Callout>

      <h3>Radioactive Decay</h3>

      <Callout type="definition" title="Half-Life">
        <p>
          The <strong>half-life</strong> <MathInline>{`t_{1/2}`}</MathInline> is the time required
          for half of a radioactive substance to decay:
        </p>
        <MathBlock>{`t_{1/2} = \\frac{\\ln 2}{|k|}`}</MathBlock>
      </Callout>

      <Callout type="example" title="Example 2: Carbon-14 Dating">
        <p>
          Carbon-14 has a half-life of 5730 years. A fossil contains 20% of its original
          C-14. How old is the fossil?
        </p>
        <p><strong>Solution:</strong></p>
        <p>
          Find <MathInline>{`k`}</MathInline>: From <MathInline>{`t_{1/2} = \\frac{\\ln 2}{|k|}`}</MathInline>:
        </p>
        <MathBlock>{`k = -\\frac{\\ln 2}{5730}`}</MathBlock>
        <p>
          (negative because decay). The model is <MathInline>{`y(t) = y_0 e^{kt}`}</MathInline>.
        </p>
        <p>
          When <MathInline>{`y(t) = 0.20 y_0`}</MathInline>:
        </p>
        <MathBlock>{`0.20 = e^{kt} \\quad \\Rightarrow \\quad kt = \\ln(0.20) \\quad \\Rightarrow \\quad t = \\frac{\\ln(0.20)}{k}`}</MathBlock>
        <MathBlock>{`t = \\frac{\\ln(0.20)}{-\\ln 2 / 5730} = \\frac{5730 \\ln 5}{\\ln 2} \\approx 13{,}300 \\text{ years}`}</MathBlock>
      </Callout>

      <Callout type="example" title="Example 3: Decay Rate">
        <p>
          A radioactive substance decays to 75% of its initial amount in 10 days.
          What is its half-life?
        </p>
        <p><strong>Solution:</strong></p>
        <p>
          From <MathInline>{`0.75 = e^{10k}`}</MathInline>:
        </p>
        <MathBlock>{`k = \\frac{\\ln(0.75)}{10} = \\frac{-\\ln(4/3)}{10}`}</MathBlock>
        <p>Half-life:</p>
        <MathBlock>{`t_{1/2} = \\frac{\\ln 2}{|k|} = \\frac{10 \\ln 2}{\\ln(4/3)} \\approx 24.1 \\text{ days}`}</MathBlock>
      </Callout>

      <h2>Newton's Law of Cooling</h2>

      <Callout type="theorem" title="Newton's Law of Cooling">
        <p>
          The rate of change of an object's temperature is proportional to the difference
          between its temperature and the ambient (surrounding) temperature:
        </p>
        <MathBlock>{`\\frac{dT}{dt} = -k(T - T_a)`}</MathBlock>
        <p>
          where <MathInline>{`T`}</MathInline> is the object's temperature, <MathInline>{`T_a`}</MathInline> is
          the ambient temperature, and <MathInline>{`k > 0`}</MathInline>.
        </p>
      </Callout>

      <Callout type="info" title="Solution">
        <p>
          Let <MathInline>{`u = T - T_a`}</MathInline>. Then <MathInline>{`\\frac{du}{dt} = -ku`}</MathInline>,
          giving <MathInline>{`u = u_0 e^{-kt}`}</MathInline>.
        </p>
        <MathBlock>{`T(t) = T_a + (T_0 - T_a)e^{-kt}`}</MathBlock>
        <p>
          where <MathInline>{`T_0 = T(0)`}</MathInline> is the initial temperature.
        </p>
      </Callout>

      <Callout type="example" title="Example 4: Cooling Coffee">
        <p>
          A cup of coffee at 95°C is placed in a room at 20°C. After 5 minutes, the
          coffee is at 80°C. When will it reach 50°C?
        </p>
        <p><strong>Solution:</strong></p>
        <p>
          <MathInline>{`T_a = 20`}</MathInline>, <MathInline>{`T_0 = 95`}</MathInline>, so:
        </p>
        <MathBlock>{`T(t) = 20 + 75e^{-kt}`}</MathBlock>
        <p>Use <MathInline>{`T(5) = 80`}</MathInline> to find <MathInline>{`k`}</MathInline>:</p>
        <MathBlock>{`80 = 20 + 75e^{-5k} \\quad \\Rightarrow \\quad 60 = 75e^{-5k} \\quad \\Rightarrow \\quad e^{-5k} = 0.8`}</MathBlock>
        <MathBlock>{`k = -\\frac{\\ln(0.8)}{5} = \\frac{\\ln(1.25)}{5} \\approx 0.0446`}</MathBlock>
        <p>Find <MathInline>{`t`}</MathInline> when <MathInline>{`T = 50`}</MathInline>:</p>
        <MathBlock>{`50 = 20 + 75e^{-kt} \\quad \\Rightarrow \\quad e^{-kt} = \\frac{30}{75} = 0.4`}</MathBlock>
        <MathBlock>{`t = -\\frac{\\ln(0.4)}{k} = \\frac{\\ln(2.5)}{0.0446} \\approx 20.5 \\text{ minutes}`}</MathBlock>
      </Callout>

      <Callout type="example" title="Example 5: Murder Investigation">
        <p>
          At 10 PM, a body is found with temperature 85°F in a room at 70°F. At 11 PM,
          the body temperature is 80°F. Normal body temperature is 98.6°F. When did death occur?
        </p>
        <p><strong>Solution:</strong></p>
        <p>
          <MathInline>{`T_a = 70`}</MathInline>, so <MathInline>{`T(t) = 70 + (T_0 - 70)e^{-kt}`}</MathInline>.
        </p>
        <p>Let <MathInline>{`t = 0`}</MathInline> be 10 PM. Then:</p>
        <ul className="list-disc pl-6 space-y-1">
          <li><MathInline>{`T(0) = 85`}</MathInline>, so <MathInline>{`T_0 - 70 = 15`}</MathInline></li>
          <li><MathInline>{`T(1) = 80`}</MathInline>, so <MathInline>{`80 = 70 + 15e^{-k}`}</MathInline></li>
        </ul>
        <MathBlock>{`e^{-k} = \\frac{10}{15} = \\frac{2}{3} \\quad \\Rightarrow \\quad k = \\ln(1.5) \\approx 0.405`}</MathBlock>
        <p>
          At death, <MathInline>{`T = 98.6`}</MathInline>. Let <MathInline>{`\\tau`}</MathInline> be hours
          before 10 PM when death occurred:
        </p>
        <MathBlock>{`85 = 70 + (98.6 - 70)e^{-k\\tau}`}</MathBlock>
        <MathBlock>{`15 = 28.6 e^{-0.405\\tau} \\quad \\Rightarrow \\quad e^{-0.405\\tau} = 0.524`}</MathBlock>
        <MathBlock>{`\\tau = \\frac{-\\ln(0.524)}{0.405} \\approx 1.6 \\text{ hours}`}</MathBlock>
        <p>Death occurred approximately 1.6 hours before 10 PM, around <strong>8:24 PM</strong>.</p>
      </Callout>

      <h2>Mixing Problems</h2>

      <p>
        Consider a tank containing a solution, with fluid flowing in and out. We want
        to track the amount of solute (salt, chemical, etc.) in the tank over time.
      </p>

      <Callout type="theorem" title="Mixing Model">
        <p>
          If <MathInline>{`y(t)`}</MathInline> is the amount of solute in the tank at time <MathInline>{`t`}</MathInline>:
        </p>
        <MathBlock>{`\\frac{dy}{dt} = (\\text{rate in}) - (\\text{rate out})`}</MathBlock>
        <p>where:</p>
        <ul className="list-disc pl-6 space-y-1">
          <li>Rate in = (flow rate in) × (concentration in)</li>
          <li>Rate out = (flow rate out) × (concentration in tank)</li>
          <li>Concentration in tank = y(t) / (volume in tank)</li>
        </ul>
      </Callout>

      <Callout type="example" title="Example 6: Salt Tank (Constant Volume)">
        <p>
          A tank holds 100 L of brine with 50 kg of dissolved salt. Fresh water enters
          at 5 L/min, and the well-mixed solution drains at 5 L/min. How much salt
          remains after 20 minutes?
        </p>
        <p><strong>Solution:</strong></p>
        <p>
          Let <MathInline>{`y(t)`}</MathInline> = kg of salt at time <MathInline>{`t`}</MathInline>.
          Volume stays constant at 100 L.
        </p>
        <ul className="list-disc pl-6 space-y-1">
          <li>Rate in: <MathInline>{`5 \\times 0 = 0`}</MathInline> kg/min (fresh water)</li>
          <li>Rate out: <MathInline>{`5 \\times \\frac{y}{100} = \\frac{y}{20}`}</MathInline> kg/min</li>
        </ul>
        <MathBlock>{`\\frac{dy}{dt} = -\\frac{y}{20}`}</MathBlock>
        <p>
          This is exponential decay with <MathInline>{`k = -1/20`}</MathInline>:
        </p>
        <MathBlock>{`y(t) = 50e^{-t/20}`}</MathBlock>
        <p>At <MathInline>{`t = 20`}</MathInline>:</p>
        <MathBlock>{`y(20) = 50e^{-1} \\approx 18.4 \\text{ kg}`}</MathBlock>
      </Callout>

      <Callout type="example" title="Example 7: Salt Tank (Brine Entering)">
        <p>
          A 200 L tank initially contains pure water. Brine with 0.5 kg/L of salt enters
          at 4 L/min, and the mixture drains at 4 L/min. Find the salt content after 30 min.
        </p>
        <p><strong>Solution:</strong></p>
        <ul className="list-disc pl-6 space-y-1">
          <li>Rate in: <MathInline>{`4 \\times 0.5 = 2`}</MathInline> kg/min</li>
          <li>Rate out: <MathInline>{`4 \\times \\frac{y}{200} = \\frac{y}{50}`}</MathInline> kg/min</li>
        </ul>
        <MathBlock>{`\\frac{dy}{dt} = 2 - \\frac{y}{50}`}</MathBlock>
        <p>Rewrite in standard form: <MathInline>{`y' + \\frac{1}{50}y = 2`}</MathInline></p>
        <p>
          Integrating factor: <MathInline>{`\\mu = e^{t/50}`}</MathInline>.
        </p>
        <MathBlock>{`(e^{t/50}y)' = 2e^{t/50}`}</MathBlock>
        <MathBlock>{`e^{t/50}y = 100e^{t/50} + C`}</MathBlock>
        <MathBlock>{`y = 100 + Ce^{-t/50}`}</MathBlock>
        <p>
          Initial condition <MathInline>{`y(0) = 0`}</MathInline>: <MathInline>{`C = -100`}</MathInline>.
        </p>
        <MathBlock>{`y(t) = 100(1 - e^{-t/50})`}</MathBlock>
        <p>At <MathInline>{`t = 30`}</MathInline>:</p>
        <MathBlock>{`y(30) = 100(1 - e^{-0.6}) \\approx 45.1 \\text{ kg}`}</MathBlock>
        <p>
          Note: As <MathInline>{`t \\to \\infty`}</MathInline>, <MathInline>{`y \\to 100`}</MathInline> kg,
          which is the equilibrium (0.5 kg/L × 200 L).
        </p>
      </Callout>

      <Callout type="example" title="Example 8: Changing Volume">
        <p>
          A 100 L tank initially has 20 kg of salt dissolved. Brine with 1 kg/L enters
          at 3 L/min, and mixture drains at 2 L/min. Find salt content as function of time.
        </p>
        <p><strong>Solution:</strong></p>
        <p>
          Volume changes: <MathInline>{`V(t) = 100 + (3-2)t = 100 + t`}</MathInline> L.
        </p>
        <ul className="list-disc pl-6 space-y-1">
          <li>Rate in: <MathInline>{`3 \\times 1 = 3`}</MathInline> kg/min</li>
          <li>Rate out: <MathInline>{`2 \\times \\frac{y}{100+t}`}</MathInline> kg/min</li>
        </ul>
        <MathBlock>{`\\frac{dy}{dt} = 3 - \\frac{2y}{100+t}`}</MathBlock>
        <p>Standard form: <MathInline>{`y' + \\frac{2}{100+t}y = 3`}</MathInline></p>
        <p>
          Integrating factor: <MathInline>{`\\mu = e^{2\\ln(100+t)} = (100+t)^2`}</MathInline>.
        </p>
        <MathBlock>{`((100+t)^2 y)' = 3(100+t)^2`}</MathBlock>
        <MathBlock>{`(100+t)^2 y = (100+t)^3 + C`}</MathBlock>
        <MathBlock>{`y = (100+t) + \\frac{C}{(100+t)^2}`}</MathBlock>
        <p>
          Initial condition <MathInline>{`y(0) = 20`}</MathInline>:
        </p>
        <MathBlock>{`20 = 100 + \\frac{C}{10000} \\quad \\Rightarrow \\quad C = -800000`}</MathBlock>
        <MathBlock>{`y(t) = (100+t) - \\frac{800000}{(100+t)^2}`}</MathBlock>
      </Callout>

      <h2>Compound Interest</h2>

      <Callout type="theorem" title="Continuous Compounding">
        <p>
          If money grows at annual rate <MathInline>{`r`}</MathInline> compounded continuously:
        </p>
        <MathBlock>{`\\frac{dA}{dt} = rA \\quad \\Rightarrow \\quad A(t) = A_0 e^{rt}`}</MathBlock>
      </Callout>

      <Callout type="example" title="Example 9: Investment">
        <p>
          $10,000 is invested at 5% annual interest, compounded continuously. How long
          until it doubles?
        </p>
        <p><strong>Solution:</strong></p>
        <MathBlock>{`A(t) = 10000e^{0.05t}`}</MathBlock>
        <p>Want <MathInline>{`A(t) = 20000`}</MathInline>:</p>
        <MathBlock>{`20000 = 10000e^{0.05t} \\quad \\Rightarrow \\quad e^{0.05t} = 2`}</MathBlock>
        <MathBlock>{`t = \\frac{\\ln 2}{0.05} = 20\\ln 2 \\approx 13.9 \\text{ years}`}</MathBlock>
      </Callout>

      <h2>Summary</h2>
      <ul>
        <li>
          <strong>Exponential model:</strong> <MathInline>{`dy/dt = ky`}</MathInline> has solution <MathInline>{`y = y_0 e^{kt}`}</MathInline>
        </li>
        <li>
          <strong>Half-life:</strong> <MathInline>{`t_{1/2} = \\ln 2 / |k|`}</MathInline>
        </li>
        <li>
          <strong>Doubling time:</strong> <MathInline>{`t_d = \\ln 2 / k`}</MathInline> (for growth)
        </li>
        <li>
          <strong>Newton's cooling:</strong> <MathInline>{`T(t) = T_a + (T_0 - T_a)e^{-kt}`}</MathInline>
        </li>
        <li>
          <strong>Mixing problems:</strong> Rate equation balances inflow and outflow
        </li>
        <li>
          <strong>Compound interest:</strong> <MathInline>{`A = A_0 e^{rt}`}</MathInline> for continuous compounding
        </li>
        <li>
          <strong>General approach:</strong> Set up the differential equation from physical principles, then solve
        </li>
      </ul>
    </LessonLayout>
  );
}
