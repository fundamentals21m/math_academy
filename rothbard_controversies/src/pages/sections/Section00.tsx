import { LessonLayout } from '@/components/layout/LessonLayout';
import { Callout } from '@/components/common/Callout';

export default function Section00() {
  return (
    <LessonLayout sectionId={0}>
      <h2>Introduction</h2>
      <p>
        <em>By Gene Epstein, Economics Editor, Barron's</em>
      </p>

      <p>
        It was nearly forty years ago that Murray Rothbard changed my life. I was then a PhD candidate
        in economics at the New School for Social Research in downtown Manhattan, while also teaching
        Principles courses at a local university. And I was rapidly losing interest in the whole subject.
      </p>

      <p>
        Bored by the prattling of the left-wing crowd who dominated the New School, I could find nothing
        very satisfying in mainstream economics either. The New School's left-wingers certainly cared about
        achieving a free society. But their radical agenda mainly consisted of the "instrumentalist" ideas
        of the econ department's emeritus professor Adolph Lowe, which boiled down to coercing people into
        following the dictates of elitists like him.
      </p>

      <h3>Discovering Rothbard</h3>
      <p>
        Always a compulsive book-browser, I had more than once leafed through a two-volume work titled
        <em>Man, Economy, and State</em> in the New School library, whose author, Murray Rothbard, I had
        barely heard of. After the third or fourth look, I finally began reading the book—and experienced
        one eureka moment after another.
      </p>

      <Callout type="info">
        <strong>Key Insight on Capital:</strong> Rothbard explained that, in a free market, there are no
        financial returns to owners of capital goods as such. Since capital goods consisted of such items
        as factories, machinery, offices, and desks, these goods are entirely the product of labor and land.
        The money capital goods owners receive comes in two forms: interest payments for advancing resources
        in the present and profits for their entrepreneurial foresight.
      </Callout>

      <h3>The Refutation of Monopolistic Competition</h3>
      <p>
        Rothbard's devastating refutation of the theory of imperfect or "monopolistic" competition was
        particularly illuminating. A cornerstone of this theory is that a monopolistic competitor like
        "Marioni Brothers' Barbershop" always operates with excess capacity.
      </p>

      <p>
        Economist Paul Samuelson had targeted barber shops in his best-selling Principles text, observing
        that "The barbershop has excess capacity, with empty chairs much of the time," as he inveighed
        against the "wasteful social losses" resulting.
      </p>

      <Callout type="success">
        <strong>Rothbard's Insight:</strong> Why assume that all such monopolistic competitors necessarily
        invest in excess capacity? The whole naive error hinged on the technicalities of geometry—the theory
        was simply a prisoner of the way the demand curve was made tangent to the cost curve! Rothbard
        demonstrated two different ways of drawing the graph, without violating any of the assumptions,
        where the monopolistic competitor now operates at full capacity.
      </Callout>

      <h3>Austrian Economics as Natural Reasoning</h3>
      <p>
        I found such moments profoundly empowering, making me realize that, whenever I thought about
        economics outside formal straitjackets, I naturally fell back on modes of reasoning used by
        Rothbard and his mentor, Ludwig von Mises. That's why the very term, "Austrian economics," is
        a kind of redundancy. Whenever people think sensibly about economics, they think like Austrians—one
        key reason why even the mainstream can have a few things to teach us, especially when they're
        writing mere journalism.
      </p>

      <h3>Mises and the Regression Theorem</h3>
      <p>
        We all know there could be no Murray Rothbard the great writer and thinker without his great
        teacher, Ludwig von Mises. Reading Mises's magnum opus, <em>Human Action</em>, for the first time,
        I found his discussion of wages finally cemented my understanding of why wages inevitably rise
        in a free market with rising productivity—an insight that helped seal my conversion to libertarianism.
      </p>

      <Callout type="info">
        <strong>The Regression Theorem:</strong> Mises's most beautiful insight shows that all money must
        have originated in some commodity (gold, seashells). If you regress backward in time, this had to
        have been the case. What people think of as government-created money (dollars, euros) is nothing
        of the kind, but came from those same commodities. The beauty of the theorem lies in its power
        to infer historical fact from simple logic about human action.
      </Callout>

      <h3>About This Collection</h3>
      <p>
        This collection contains all of Rothbard's best essays. If there is any single book worthy of
        being called a companion volume to <em>Man, Economy, and State</em>, this is it.
      </p>

      <p>
        You should start, as the book does, with the magisterial essay "The Mantle of Science," in which
        Rothbard lays the groundwork on how to think about economics. After finishing this essay, you might
        reflect that all the writer has really done is make explicit a mode of thinking that comes naturally
        to us all.
      </p>

      <Callout type="warning">
        <strong>Mainstream Economics' Handicaps:</strong> Mainstream economics suffers from two main
        handicaps: (a) the desire to sound like a branch of physics, which feeds the elitist fantasies
        of those who aspire to be professional economists, and (b) the desire to sit at the tables of
        power à la John Maynard Keynes and Alan Greenspan, which spawns such top-down monstrosities
        as "macroeconomics."
      </Callout>

      <p>
        There are many "first books" on libertarianism in general and Austrian economics in particular.
        Which one is most suitable depends on the individual. For me, the way in was <em>Man, Economy,
        and State</em>. If my counterpart today finds that book and this one in the stacks, I would say
        that <em>Economic Controversies</em> is probably the better way in.
      </p>
    </LessonLayout>
  );
}
