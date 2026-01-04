import { LessonLayout } from '../../components/layout/LessonLayout';
import { Callout } from '../../components/common/Callout';
import { Card, CardGrid } from '../../components/common/Card';

export default function Section12() {
  return (
    <LessonLayout sectionId={12}>
      {/* Opening Quote */}
      <blockquote className="border-l-4 border-amber-500 pl-6 py-2 my-6 text-xl italic text-dark-300">
        "All anti-liberal forces are combining against everything that is liberal."
        <footer className="text-sm text-dark-500 mt-2 not-italic">
          — A. Moeller van den Bruck
        </footer>
      </blockquote>

      {/* Introduction */}
      <p className="text-lg text-dark-300 mb-6">
        In this chapter, Hayek traces the intellectual roots of National-Socialism
        back to German socialist thought. Contrary to the common misconception that
        Nazism was merely an irrational revolt against reason, Hayek shows it was the{' '}
        <strong className="text-amber-400">culmination of a long evolution of thought</strong>
        —collectivism freed from all traces of an individualist tradition.
      </p>

      {/* Section 1: The Common Mistake */}
      <h2 className="text-2xl font-semibold mt-10 mb-4">The Common Mistake</h2>

      <p className="my-4">
        It is a common mistake to regard National-Socialism as a mere revolt against
        reason, an irrational movement without intellectual background. If that were
        so, the movement would be much less dangerous than it is. But nothing could
        be further from the truth.
      </p>

      <Callout type="warning">
        <p>
          <strong>A Logical Development:</strong> The doctrines of National-Socialism
          are the culmination of a long evolution of thought. The men who produced
          these doctrines were powerful writers who left the impress of their ideas
          on the whole of European thought. Once one accepts the premises from which
          it starts, <em>there is no escape from its logic</em>.
        </p>
      </Callout>

      <p className="my-4">
        National-Socialism is simply{' '}
        <strong className="text-amber-400">
          collectivism freed from all traces of an individualist tradition
        </strong>{' '}
        which might hamper its realisation. Though German thinkers took the lead,
        they were not alone—Thomas Carlyle, Houston Stewart Chamberlain, Auguste
        Comte, and Georges Sorel are as much a part of this development.
      </p>

      {/* Section 2: Support from the Socialist Camp */}
      <h2 className="text-2xl font-semibold mt-10 mb-4">
        Support from the Socialist Camp
      </h2>

      <p className="my-4">
        What caused the views held by a reactionary minority to gain the support of
        the great majority of Germans? It was not merely the defeat, the suffering,
        and the wave of nationalism. Still less was it a "capitalist reaction" against
        socialism.
      </p>

      <div className="bg-dark-800/50 rounded-xl p-6 border border-amber-600/30 my-6">
        <h4 className="font-semibold text-amber-400 mb-3">A Crucial Point</h4>
        <p className="text-dark-300">
          On the contrary, the support which brought these ideas to power came
          precisely from the <strong>socialist camp</strong>. It was certainly not
          through the bourgeoisie, but rather the <em>absence</em> of a strong
          bourgeoisie, by which they were helped to power.
        </p>
      </div>

      <p className="my-4">
        The doctrines which had guided the ruling elements in Germany were not
        opposed to the <em>socialism</em> in Marxism, but to the{' '}
        <strong className="text-amber-400">liberal elements</strong> contained in
        it—its internationalism and its democracy. As it became clear that these
        liberal elements formed obstacles to the realisation of socialism, the
        socialists of the Left approached more and more those of the Right.
      </p>

      <blockquote className="border-l-4 border-dark-600 pl-6 py-2 my-6 text-dark-400 italic">
        "It was the union of the anti-capitalist forces of the right and the left,
        the fusion of radical and conservative socialism, which drove out from
        Germany everything that was liberal."
      </blockquote>

      {/* Section 3: The Socialist Fathers of Nazism */}
      <h2 className="text-2xl font-semibold mt-10 mb-4">
        The Socialist Fathers of National-Socialism
      </h2>

      <p className="my-4">
        The connection between socialism and nationalism in Germany was close from
        the beginning. It is significant that the most important ancestors of
        National-Socialism—Fichte, Rodbertus, and Lassall—are at the same time
        acknowledged <strong className="text-amber-400">fathers of socialism</strong>.
      </p>

      <Callout type="info">
        <p>
          <strong>From 1914 Onwards:</strong> From the ranks of Marxist socialism
          arose one teacher after another who led—not the conservatives and
          reactionaries, but the <em>hardworking labourer and idealist youth</em>
          —into the national-socialist fold. It was largely with the assistance of
          old socialists that the movement rose.
        </p>
      </Callout>

      {/* Section 4: Key Figures */}
      <h2 className="text-2xl font-semibold mt-10 mb-4">
        Key Figures in the Development
      </h2>

      <div className="space-y-6 my-6">
        <div className="bg-dark-800/50 rounded-xl p-6 border border-rose-600/30">
          <h4 className="font-semibold text-rose-400 mb-3">
            Werner Sombart (1863-1941)
          </h4>
          <p className="text-dark-300 mb-3">
            Former Marxian socialist who devoted his life to fighting for the ideas
            of Karl Marx. His work spread socialist ideas and anti-capitalist
            resentment throughout Germany more than any other.
          </p>
          <p className="text-dark-400 text-sm">
            In his war book <em>Händler und Helden</em> (Merchants and Heroes, 1915),
            this old socialist welcomed the "German War" as the inevitable conflict
            between the <strong>commercial civilisation of England</strong> and the{' '}
            <strong>heroic culture of Germany</strong>. He celebrated war as "the
            consummation of the heroic view of life."
          </p>
        </div>

        <div className="bg-dark-800/50 rounded-xl p-6 border border-rose-600/30">
          <h4 className="font-semibold text-rose-400 mb-3">
            Johann Plenge (1874-1963)
          </h4>
          <p className="text-dark-300 mb-3">
            A great authority on Marx whose book <em>Marx und Hegel</em> marks the
            beginning of the modern Hegel-renaissance among Marxian scholars.
          </p>
          <p className="text-dark-400 text-sm">
            His <em>1789 and 1914: The Symbolic Years in the History of the Political
            Mind</em> proclaimed the conflict between the "Ideas of 1789" (freedom)
            and the "Ideas of 1914" (organisation). He declared Germany "the exemplary
            people" whose ideas would "determine the aims of the life of humanity."
          </p>
        </div>

        <div className="bg-dark-800/50 rounded-xl p-6 border border-rose-600/30">
          <h4 className="font-semibold text-rose-400 mb-3">
            Paul Lensch (1873-1926)
          </h4>
          <p className="text-dark-300 mb-3">
            A member of the <em>left wing</em> of the social-democratic party in the
            Reichstag who developed these ideas most fully.
          </p>
          <p className="text-dark-400 text-sm">
            In <em>Three Years of World Revolution</em>, he argued that "in the
            present World Revolution Germany represents the revolutionary, and her
            greatest antagonist, England, the counter-revolutionary side." He observed:
            "The state has undergone a process of <strong>socialisation</strong>, and
            Social Democracy has undergone a process of <strong>nationalisation</strong>."
          </p>
        </div>
      </div>

      {/* Section 5: The Ideas of 1789 vs 1914 */}
      <h2 className="text-2xl font-semibold mt-10 mb-4">
        The Ideas of 1789 vs. the Ideas of 1914
      </h2>

      <CardGrid>
        <Card>
          <h4 className="font-semibold text-amber-400 mb-2">Ideas of 1789</h4>
          <p className="text-sm text-dark-300">
            The ideal of <strong>freedom</strong>: Liberty, Equality, Fraternity.
            "Characteristically commercial ideals which have no other purpose but
            to secure certain advantages to individuals."
          </p>
        </Card>
        <Card>
          <h4 className="font-semibold text-amber-400 mb-2">Ideas of 1914</h4>
          <p className="text-sm text-dark-300">
            The ideal of <strong>organisation</strong>: Central planning,
            <em> Volksgemeinschaft</em>, the state as supreme. "German organisation,
            the people's community of national socialism."
          </p>
        </Card>
        <Card>
          <h4 className="font-semibold text-amber-400 mb-2">The German View</h4>
          <p className="text-sm text-dark-300">
            The state is neither founded by individuals nor serves their interests.
            It is a <em>Volksgemeinschaft</em> in which "the individual has no
            rights but only duties."
          </p>
        </Card>
        <Card>
          <h4 className="font-semibold text-amber-400 mb-2">The War Economy</h4>
          <p className="text-sm text-dark-300">
            The war economy of 1914 was celebrated as "the first realisation of a
            socialist society"—the model for what would become National-Socialism.
          </p>
        </Card>
      </CardGrid>

      <blockquote className="border-l-4 border-amber-500 pl-6 py-2 my-6 text-dark-300 italic">
        "Because in the sphere of ideas Germany was the most convinced exponent of
        all socialist dreams, and in the sphere of reality she was the most powerful
        architect of the most highly organised economic system.—In us is the twentieth
        century."
        <footer className="text-sm text-dark-500 mt-2 not-italic">
          — Johann Plenge
        </footer>
      </blockquote>

      {/* Section 6: Spengler and Moeller van den Bruck */}
      <h2 className="text-2xl font-semibold mt-10 mb-4">
        The Immediate Masters of National-Socialism
      </h2>

      <p className="my-4">
        Plenge and Lensch provided the leading ideas for the immediate masters of
        National-Socialism, particularly <strong className="text-amber-400">
        Oswald Spengler</strong> and <strong className="text-amber-400">
        Moeller van den Bruck</strong>.
      </p>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 my-6">
        <div className="bg-dark-800/50 rounded-xl p-5 border border-amber-600/30">
          <h3 className="text-lg font-semibold text-amber-400 mb-3">
            Oswald Spengler
          </h3>
          <p className="text-dark-400 text-sm mb-3">
            In <em>Prussianism and Socialism</em> (1920), Spengler wrote: "Old
            Prussian spirit and socialist conviction, which to-day hate each other
            with the hatred of brothers, <strong>are one and the same</strong>."
          </p>
          <p className="text-dark-400 text-sm">
            He identified liberalism as the "invisible English army" left behind
            in Germany, and proclaimed: "There are in Germany many hated contrasts,
            but <em>liberalism alone is contemptible</em> on German soil."
          </p>
        </div>
        <div className="bg-dark-800/50 rounded-xl p-5 border border-amber-600/30">
          <h3 className="text-lg font-semibold text-amber-400 mb-3">
            Moeller van den Bruck
          </h3>
          <p className="text-dark-400 text-sm mb-3">
            The "patron-saint of National-Socialism" proclaimed the World War as
            "a war between liberalism and socialism": "We have lost the war against
            the West. <strong>Socialism has lost it against Liberalism.</strong>"
          </p>
          <p className="text-dark-400 text-sm">
            His <em>Third Reich</em> was intended to give Germans "a socialism
            adapted to their nature and undefiled by Western liberal ideas. And
            so it did."
          </p>
        </div>
      </div>

      <Callout type="note">
        <p>
          <strong>German Youth's View of Liberalism:</strong> "There are no liberals
          in Germany to-day; there are young revolutionaries: there are young
          conservatives. But who would be a liberal? ... Liberalism is a philosophy
          of life from which German youth now turns with nausea, with wrath, with
          quite peculiar scorn."
        </p>
      </Callout>

      {/* Section 7: The Prussian Idea */}
      <h2 className="text-2xl font-semibold mt-10 mb-4">The Prussian Idea</h2>

      <p className="my-4">
        Spengler articulated what became the foundation of the Nazi state:
      </p>

      <div className="bg-dark-800/50 rounded-xl p-6 border border-dark-700 my-6">
        <ul className="text-dark-300 space-y-3">
          <li className="flex items-start gap-2">
            <span className="text-amber-400">•</span>
            <span>
              "In Prussia there existed a <strong>real state</strong>. There could
              be, strictly speaking, <em>no private persons</em>."
            </span>
          </li>
          <li className="flex items-start gap-2">
            <span className="text-amber-400">•</span>
            <span>
              "Everybody who lived within the system that worked with the precision
              of a clockwork was in some way a <strong>link in it</strong>."
            </span>
          </li>
          <li className="flex items-start gap-2">
            <span className="text-amber-400">•</span>
            <span>
              "The 'Prussian idea' requires that everybody should become a{' '}
              <strong>state official</strong>, that all wages and salaries be fixed
              by the state."
            </span>
          </li>
          <li className="flex items-start gap-2">
            <span className="text-amber-400">•</span>
            <span>
              "The decisive question for Germany and the world: Is in future{' '}
              <strong>trade to govern the state, or the state to govern trade</strong>?"
            </span>
          </li>
        </ul>
      </div>

      <blockquote className="border-l-4 border-dark-600 pl-6 py-2 my-6 text-dark-400 italic">
        "The structure of the English nation is based on the distinction between rich
        and poor, that of the Prussian on that between command and obedience."
        <footer className="text-sm text-dark-500 mt-2 not-italic">
          — Oswald Spengler
        </footer>
      </blockquote>

      {/* Section 8: Conservative Socialism */}
      <h2 className="text-2xl font-semibold mt-10 mb-4">
        Conservative Socialism
      </h2>

      <p className="my-4">
        The fight against liberalism—the liberalism that had "defeated" Germany—was
        the common idea which united socialists and conservatives in one common front.
        At first it was mainly in the German Youth Movement, almost entirely socialist
        in inspiration, where the fusion of socialism and nationalism was completed.
      </p>

      <Callout type="warning">
        <p>
          <strong>"Conservative Socialism"</strong> (and "Religious Socialism") was
          the slogan under which a large number of writers prepared the atmosphere
          in which "National-Socialism" succeeded. It is "conservative socialism"
          which Hayek warned was becoming the dominant trend in 1940s Britain.
        </p>
      </Callout>

      <p className="my-4">
        As early as 1922, a detached observer noted a "peculiar and surprising
        phenomenon" in Germany:
      </p>

      <blockquote className="border-l-4 border-amber-500 pl-6 py-2 my-6 text-dark-300 italic">
        "The fight against the capitalistic order, according to this view, is a
        continuation of the war against the Entente with the weapons of the spirit
        and of economic organisation, the way which leads to practical socialism,
        a return of the German people to their best and noblest traditions."
      </blockquote>

      {/* Key Takeaways */}
      <h2 className="text-2xl font-semibold mt-10 mb-4">Key Takeaways</h2>

      <div className="bg-dark-800 rounded-lg p-6">
        <ul className="space-y-3">
          <li className="flex items-start gap-3">
            <span className="text-amber-400 font-bold">1.</span>
            <span>
              National-Socialism was <strong>not</strong> merely an irrational
              revolt against reason—it was the culmination of a long intellectual
              evolution, developed with ruthless consistency.
            </span>
          </li>
          <li className="flex items-start gap-3">
            <span className="text-amber-400 font-bold">2.</span>
            <span>
              Nazism was <strong>collectivism freed from all individualist
              tradition</strong>—the logical endpoint of socialist premises
              stripped of their liberal elements.
            </span>
          </li>
          <li className="flex items-start gap-3">
            <span className="text-amber-400 font-bold">3.</span>
            <span>
              Support for National-Socialism came from the{' '}
              <strong>socialist camp</strong>, not from capitalists or the
              bourgeoisie. The absence of a strong bourgeoisie helped it to power.
            </span>
          </li>
          <li className="flex items-start gap-3">
            <span className="text-amber-400 font-bold">4.</span>
            <span>
              The founders of both National-Socialism and German socialism were
              often the <strong>same men</strong>: Fichte, Rodbertus, Lassall.
            </span>
          </li>
          <li className="flex items-start gap-3">
            <span className="text-amber-400 font-bold">5.</span>
            <span>
              From 1914, Marxist socialists led workers into the national-socialist
              fold. The state underwent <strong>socialisation</strong> while Social
              Democracy underwent <strong>nationalisation</strong>.
            </span>
          </li>
          <li className="flex items-start gap-3">
            <span className="text-amber-400 font-bold">6.</span>
            <span>
              The fusion of <strong>radical and conservative socialism</strong>
              —united in their hatred of liberalism—drove out everything liberal
              from Germany.
            </span>
          </li>
          <li className="flex items-start gap-3">
            <span className="text-amber-400 font-bold">7.</span>
            <span>
              "Conservative Socialism" prepared the atmosphere for National-Socialism
              —a warning that Hayek saw relevant to 1940s Britain and beyond.
            </span>
          </li>
        </ul>
      </div>

      {/* Looking Ahead */}
      <Callout type="success">
        <p>
          <strong>Next chapter:</strong> In "The Totalitarians in Our Midst," Hayek
          turns his attention to Britain, warning that the same intellectual
          developments that prepared Germany for totalitarianism were already
          advancing in the English-speaking world.
        </p>
      </Callout>
    </LessonLayout>
  );
}
