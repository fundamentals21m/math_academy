import { LessonLayout } from '@/components/layout/LessonLayout';
import { Definition, Theorem } from '@/components/common/ContentBlocks';
import { Callout } from '@/components/common/Callout';
import { MathBlock } from '@/components/common/MathBlock';
import { SectionQuiz } from '@/components/quiz/SectionQuiz';
import { quizMap } from '@/data/quizzes';
import { LinearIndependenceDemo } from '@/components/visualizations/chapter4';

export default function Section24() {
  return (
    <LessonLayout sectionId={24}>
      <h2>Direction and Linear Independence</h2>

      <p>
        Vectors give a concept of <strong>direction</strong> in ℝ² by representing
        lines through the origin. If <strong>u</strong> is a nonzero vector, then the
        real multiples <em>a</em><strong>u</strong> of <strong>u</strong> make up the
        line through <strong>0</strong> and <strong>u</strong>, so we call them the
        points "in direction <strong>u</strong> from <strong>0</strong>."
      </p>

      <Callout type="info">
        It is simpler to associate direction with a whole line, rather than a half line.
        So we say −<strong>u</strong> is in the same direction as <strong>u</strong>.
      </Callout>

      <h3>Linear Independence</h3>

      <p>
        Nonzero vectors <strong>u</strong> and <strong>v</strong> have <strong>different
        directions</strong> from <strong>0</strong> if neither is a multiple of the other.
        Such vectors are called <strong>linearly independent</strong>.
      </p>

      <Definition title="Linear Independence">
        <p>
          Vectors <strong>u</strong> and <strong>v</strong> are <strong>linearly independent</strong>
          if there are no real numbers <em>a</em> and <em>b</em>, not both zero, with:
        </p>
        <MathBlock>
          {`a\\mathbf{u} + b\\mathbf{v} = \\mathbf{0}`}
        </MathBlock>
        <p className="mt-2">
          Because if one of <em>a</em>, <em>b</em> is not zero in this equation, we can
          divide by it and express one of <strong>u</strong>, <strong>v</strong> as a
          multiple of the other.
        </p>
      </Definition>

      <h3>Direction Relative to a Point</h3>

      <p>
        The concept of direction has an obvious generalization: <strong>w</strong> has
        direction <strong>u</strong> from <strong>v</strong> (or relative to <strong>v</strong>)
        if <strong>w</strong> − <strong>v</strong> is a multiple of <strong>u</strong>.
      </p>

      <Definition title="Parallel Line Segments">
        <p>
          Line segments from <strong>v</strong> to <strong>w</strong> and from
          <strong> s</strong> to <strong>t</strong> are <strong>parallel</strong> if
          they have the same direction:
        </p>
        <MathBlock>
          {`\\mathbf{w} - \\mathbf{v} = a(\\mathbf{t} - \\mathbf{s}) \\text{ for some } a \\neq 0`}
        </MathBlock>
      </Definition>

      <h3>The Vector Thales Theorem</h3>

      <p>
        Let us try out the vector concept of parallels on an important theorem
        from previous chapters: the Thales theorem that parallels cut a pair of
        lines in proportional segments.
      </p>

      <Theorem title="Vector Thales Theorem">
        <p>
          If <strong>s</strong> and <strong>v</strong> are on one line through
          <strong> 0</strong>, <strong>t</strong> and <strong>w</strong> are on another,
          and <strong>w</strong> − <strong>v</strong> is parallel to <strong>t</strong> − <strong>s</strong>,
          then <strong>v</strong> = <em>a</em><strong>s</strong> and <strong>w</strong> = <em>a</em><strong>t</strong>
          for some number <em>a</em>.
        </p>
      </Theorem>

      <div className="bg-slate-800/50 p-4 rounded-lg my-6">
        <h4 className="font-semibold text-blue-400 mb-3">Proof</h4>
        <p className="text-slate-300 mb-2">
          If <strong>w</strong> − <strong>v</strong> is parallel to <strong>t</strong> − <strong>s</strong>, then:
        </p>
        <MathBlock>
          {`\\mathbf{w} - \\mathbf{v} = a(\\mathbf{t} - \\mathbf{s}) = a\\mathbf{t} - a\\mathbf{s}`}
        </MathBlock>
        <p className="text-slate-300 mt-2">
          Because <strong>v</strong> is on the same line through <strong>0</strong> as <strong>s</strong>,
          we have <strong>v</strong> = <em>b</em><strong>s</strong> for some <em>b</em>, and similarly
          <strong> w</strong> = <em>c</em><strong>t</strong> for some <em>c</em>. It follows that:
        </p>
        <MathBlock>
          {`(c - a)\\mathbf{t} + (a - b)\\mathbf{s} = \\mathbf{0}`}
        </MathBlock>
        <p className="text-slate-300 mt-2">
          But <strong>s</strong> and <strong>t</strong> are in different directions from <strong>0</strong>,
          hence linearly independent, so <em>c</em> − <em>a</em> = <em>a</em> − <em>b</em> = 0.
          Thus, <strong>v</strong> = <em>a</em><strong>s</strong> and <strong>w</strong> = <em>a</em><strong>t</strong>.
        </p>
      </div>

      <h3>The Vector Pappus Theorem</h3>

      <p>
        As in axiomatic geometry, the Pappus theorem follows from the Thales theorem.
        However, "proportionality" is easier to handle with vectors.
      </p>

      <Theorem title="Vector Pappus Theorem">
        <p>
          If <strong>r</strong>, <strong>s</strong>, <strong>t</strong>, <strong>u</strong>,
          <strong> v</strong>, <strong>w</strong> lie alternately on two lines through
          <strong> 0</strong>, with <strong>u</strong> − <strong>v</strong> parallel to
          <strong> s</strong> − <strong>r</strong> and <strong>t</strong> − <strong>s</strong>
          parallel to <strong>v</strong> − <strong>w</strong>, then <strong>u</strong> − <strong>t</strong>
          is parallel to <strong>w</strong> − <strong>r</strong>.
        </p>
      </Theorem>

      <Callout type="info">
        <strong>Key Insight:</strong> The last step in the proof of the Pappus theorem,
        where we exchange <em>ba</em> for <em>ab</em>, is trivial because <em>ab</em> = <em>ba</em>
        for real numbers. But in Chapter 6, where we develop geometry without numbers, the
        Pappus theorem becomes crucial for getting multiplication to behave properly.
      </Callout>

      <h3>Exercises</h3>

      <div className="bg-slate-800/50 p-4 rounded-lg my-6">
        <h4 className="font-semibold text-blue-400 mb-3">Exercise 4.2.1</h4>
        <p className="text-slate-300">
          Following the setup explained in Exercise 1.4.4, formulate a "vector Desargues theorem."
        </p>
      </div>

      <div className="bg-slate-800/50 p-4 rounded-lg my-6">
        <h4 className="font-semibold text-blue-400 mb-3">Exercise 4.2.2</h4>
        <p className="text-slate-300">
          Prove your vector Desargues theorem with the help of the vector Thales theorem.
        </p>
      </div>

      <LinearIndependenceDemo className="my-6" />

      <SectionQuiz
        sectionId={24}
        questions={quizMap[24] || []}
        title="Direction and Linear Independence Quiz"
      />
    </LessonLayout>
  );
}
