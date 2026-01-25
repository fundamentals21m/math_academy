import { LessonLayout } from '@/components/layout';
import { Definition, Example } from '@/components/common';
import { Math } from '@/components/common';

export default function Section00() {
  return (
    <LessonLayout sectionId={0}>
      {/* Introduction */}
      <p className="text-lg text-dark-200 mb-6">
        This text is an honours-level undergraduate introduction to{' '}
        <strong className="text-indigo-400">real analysis</strong>: the analysis of the real
        numbers, sequences and series of real numbers, and real-valued functions.
      </p>

      <Definition title="Related Branches of Analysis">
        <p className="mb-3">
          Real analysis is related to, but distinct from, several other branches of analysis:
        </p>
        <ul className="list-disc list-inside space-y-2 text-dark-300">
          <li>
            <strong className="text-blue-300">Complex analysis</strong>: concerns the analysis
            of complex numbers and complex functions
          </li>
          <li>
            <strong className="text-blue-300">Harmonic analysis</strong>: concerns the analysis
            of harmonics (waves) such as sine waves, and how they synthesize other functions
            via the Fourier transform
          </li>
          <li>
            <strong className="text-blue-300">Functional analysis</strong>: focuses much more
            heavily on functions and how they form things like vector spaces
          </li>
        </ul>
      </Definition>

      <p className="text-dark-300 mb-6">
        <em>Analysis</em> is the rigorous study of such objects, with a focus on trying to
        pin down precisely and accurately the qualitative and quantitative behavior of these
        objects. Real analysis is the theoretical foundation which underlies{' '}
        <strong className="text-indigo-400">calculus</strong>, which is the collection of
        computational algorithms one uses to manipulate functions.
      </p>

      <p className="text-dark-300 mb-6">
        In this course we will be studying many objects which will be familiar to you from
        freshman calculus: numbers, sequences, series, limits, functions, definite integrals,
        derivatives, and so forth. You already have a great deal of experience of{' '}
        <em>computing</em> with these objects; however here we will be focused more on the
        underlying <em>theory</em> for these objects.
      </p>

      {/* Key Questions Section */}
      <h2 className="text-2xl font-bold text-dark-100 mt-10 mb-6">
        Fundamental Questions in Real Analysis
      </h2>

      <p className="text-dark-300 mb-6">
        We will be concerned with questions such as the following:
      </p>

      {/* Question 1: Real Numbers */}
      <Example title="Questions About Real Numbers">
        <ul className="list-disc list-inside space-y-3 text-dark-300">
          <li>What <em>is</em> a real number? Is there a largest real number?</li>
          <li>
            After 0, what is the "next" real number (i.e., what is the smallest positive
            real number)?
          </li>
          <li>Can you cut a real number into pieces infinitely many times?</li>
          <li>
            Why does a number such as 2 have a square root, while a number such as{' '}
            <Math>{'-2'}</Math> does not?
          </li>
          <li>
            If there are infinitely many reals and infinitely many rationals, how come there
            are "more" real numbers than rational numbers?
          </li>
        </ul>
      </Example>

      {/* Question 2: Sequences and Series */}
      <Example title="Questions About Sequences and Series">
        <ul className="list-disc list-inside space-y-3 text-dark-300">
          <li>
            How do you take the limit of a sequence of real numbers? Which sequences have
            limits and which ones don't?
          </li>
          <li>
            If you can stop a sequence from escaping to infinity, does this mean that it
            must eventually settle down and converge?
          </li>
          <li>
            Can you add infinitely many real numbers together and still get a finite real
            number?
          </li>
          <li>
            Can you add infinitely many rational numbers together and end up with a
            non-rational number?
          </li>
          <li>
            If you rearrange the elements of an infinite sum, is the sum still the same?
          </li>
        </ul>
      </Example>

      {/* Question 3: Functions */}
      <Example title="Questions About Functions">
        <ul className="list-disc list-inside space-y-3 text-dark-300">
          <li>
            What is a function? What does it mean for a function to be continuous?
            differentiable? integrable? bounded?
          </li>
          <li>
            Can you add infinitely many functions together? What about taking limits of
            sequences of functions?
          </li>
          <li>
            Can you differentiate an infinite series of functions? What about integrating?
          </li>
          <li>
            If a function <Math>{'f(x)'}</Math> takes the value 3 when <Math>{'x = 0'}</Math>{' '}
            and 5 when <Math>{'x = 1'}</Math> (i.e., <Math>{'f(0) = 3'}</Math> and{' '}
            <Math>{'f(1) = 5'}</Math>), does it have to take every intermediate value between
            3 and 5 when <Math>{'x'}</Math> goes between 0 and 1? Why?
          </li>
        </ul>
      </Example>

      {/* Conclusion */}
      <h2 className="text-2xl font-bold text-dark-100 mt-10 mb-6">
        From Computation to Theory
      </h2>

      <p className="text-dark-300 mb-6">
        You may already know how to answer some of these questions from your calculus classes,
        but most likely these sorts of issues were only of secondary importance to those courses;
        the emphasis was on getting you to perform computations, such as computing the integral of{' '}
        <Math>{'x \\sin(x^2)'}</Math> from <Math>{'x = 0'}</Math> to <Math>{'x = 1'}</Math>.
      </p>

      <p className="text-dark-300 mb-6">
        But now that you are comfortable with these objects and already know how to do all
        the computations, we will go back to the theory and try to <em>really</em> understand
        what is going on.
      </p>

      <div className="mt-8 p-6 rounded-2xl bg-gradient-to-br from-indigo-500/10 to-purple-600/5 border border-indigo-500/20">
        <h3 className="text-lg font-semibold text-indigo-400 mb-3">Course Philosophy</h3>
        <p className="text-dark-300">
          This course will help you understand <em>why</em> the rules of calculus work,
          not just <em>how</em> to apply them. By building a rigorous foundation from the
          ground up, you'll gain deeper insight into the mathematical structures that
          underpin all of calculus and analysis.
        </p>
      </div>
    </LessonLayout>
  );
}
