import { LessonLayout } from '@/components/layout/LessonLayout';
import { Callout } from '@/components/common/Callout';
import { MathBlock } from '@/components/common/MathBlock';

export default function Section10() {
  return (
    <LessonLayout sectionId={10}>
      <h2>When Time Varies</h2>

      <p>
        Some of the most important applications of calculus involve time as the
        independent variable. When we differentiate with respect to time, we're
        finding <strong>rates</strong>—how fast things change.
      </p>

      <Callout type="info">
        <strong>Common Convention:</strong> When time is the independent variable, we
        often use <em>t</em> instead of <em>x</em>, and write dy/dt.
      </Callout>

      <h2>Distance, Velocity, and Acceleration</h2>

      <p>
        If s represents distance traveled in time t, then:
      </p>

      <div className="space-y-4 my-6">
        <div className="bg-dark-800/50 rounded-xl p-4 border border-dark-700">
          <h3 className="text-lg font-semibold text-emerald-400 mb-2">Velocity</h3>
          <MathBlock math="v = \frac{ds}{dt}" />
          <p className="text-dark-400 text-sm">Rate of change of distance with time</p>
        </div>
        <div className="bg-dark-800/50 rounded-xl p-4 border border-dark-700">
          <h3 className="text-lg font-semibold text-amber-400 mb-2">Acceleration</h3>
          <MathBlock math="a = \frac{dv}{dt} = \frac{d^2s}{dt^2}" />
          <p className="text-dark-400 text-sm">Rate of change of velocity with time</p>
        </div>
      </div>

      <h2>Example: Falling Body</h2>

      <p>
        A body falling freely under gravity (ignoring air resistance) follows the law:
      </p>

      <MathBlock math="s = \frac{1}{2}gt^2" />

      <p>where g ≈ 9.8 m/s² is the acceleration due to gravity. Then:</p>

      <MathBlock math="v = \frac{ds}{dt} = gt" />
      <MathBlock math="a = \frac{dv}{dt} = g" />

      <p>
        This tells us the velocity increases linearly with time, while the acceleration
        is constant—exactly what we expect from physics!
      </p>

      <h2>Related Rates</h2>

      <p>
        Often we have quantities that all change with time, but we're interested in
        how they relate to each other. For instance, if a balloon is being inflated,
        both its radius and volume change with time.
      </p>

      <div className="bg-dark-800/50 rounded-xl p-4 border border-dark-700 my-6">
        <h3 className="text-lg font-semibold text-primary-400 mb-3">Inflating Balloon</h3>
        <p className="text-dark-300 mb-2">Volume of a sphere: V = (4/3)πr³</p>
        <MathBlock math="\frac{dV}{dt} = 4\pi r^2 \frac{dr}{dt}" />
        <p className="text-dark-400 text-sm mt-2">
          The rate of volume change depends on both the current radius and how fast
          the radius is changing.
        </p>
      </div>

      <Callout type="success">
        <strong>Physical Intuition:</strong> Differentiation with respect to time gives
        us rates of change that have real physical meaning—velocity, acceleration,
        growth rates, and more. This is why calculus is so essential to physics and
        engineering.
      </Callout>
    </LessonLayout>
  );
}
