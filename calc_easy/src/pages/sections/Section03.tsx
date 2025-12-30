import { LessonLayout } from '@/components/layout/LessonLayout';
import { Callout } from '@/components/common/Callout';
import { MathBlock } from '@/components/common/MathBlock';

export default function Section03() {
  return (
    <LessonLayout sectionId={3}>
      <h2>To Deliver You from the Preliminary Terrors</h2>

      <p className="text-lg italic text-dark-400 mb-6">
        "What one fool can do, another can." — Ancient Simian proverb
      </p>

      <p>
        The preliminary terror, which chokes off most high school students from even
        attempting to learn how to calculate, can be abolished once for all by simply
        stating what is the meaning—in common-sense terms—of the two principal symbols
        that are used in calculating.
      </p>

      <Callout type="info">
        <strong>Thompson's Promise:</strong> Considering how many fools can calculate,
        it is surprising that it should be thought either a difficult or a tedious task
        for any other fool to learn how to master the same tricks.
      </Callout>

      <h2>The Two Dreadful Symbols</h2>

      <p>These dreadful symbols are:</p>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 my-6">
        <div className="bg-dark-800/50 rounded-xl p-4 border border-dark-700">
          <h3 className="text-lg font-semibold text-emerald-400 mb-2">Symbol 1: d</h3>
          <p className="text-dark-300 mb-2">
            <em>d</em> which merely means "a little bit of."
          </p>
          <p className="text-dark-400 text-sm">
            Thus <em>dx</em> means a little bit of <em>x</em>; or <em>du</em> means a
            little bit of <em>u</em>. Ordinary mathematicians think it more polite to
            say "an element of" instead of "a little bit of." Just as you please.
          </p>
        </div>
        <div className="bg-dark-800/50 rounded-xl p-4 border border-dark-700">
          <h3 className="text-lg font-semibold text-amber-400 mb-2">Symbol 2: ∫</h3>
          <p className="text-dark-300 mb-2">
            <em>∫</em> which is merely a long S, and may be called "the sum of."
          </p>
          <p className="text-dark-400 text-sm">
            Thus <em>∫dx</em> means the sum of all the little bits of <em>x</em>.
            The word "integral" simply means "the whole."
          </p>
        </div>
      </div>

      <h2>What These Symbols Mean</h2>

      <MathBlock latex="\int dx \text{ means the sum of all the little bits of } x" />

      <p>
        Now any fool can see that if <em>x</em> is considered as made up of a lot of
        little bits, each of which is called <em>dx</em>, if you add them all up
        together you get the sum of all the <em>dx</em>'s (which is the same thing as
        the whole of <em>x</em>).
      </p>

      <h2>An Hour Made of Seconds</h2>

      <p>
        If you think of the duration of time for one hour, you may (if you like) think
        of it as cut up into 3600 little bits called seconds. The whole of the 3600
        little bits added up together make one hour.
      </p>

      <MathBlock latex="\int dt = t" />

      <p>
        When you see an expression that begins with this terrifying symbol, you will
        henceforth know that it is put there merely to give you instructions that you
        are now to perform the operation (if you can) of totalling up all the little
        bits that are indicated by the symbols that follow.
      </p>

      <Callout type="success">
        <strong>That's all.</strong> The terror is banished. You now understand the
        two most important symbols in calculus. Everything else builds on these simple ideas.
      </Callout>
    </LessonLayout>
  );
}
