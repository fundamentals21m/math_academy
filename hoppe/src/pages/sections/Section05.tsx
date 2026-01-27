import { LessonLayout } from '@/components/layout';
import { Definition, Theorem, Example } from '@/components/common';
import { Callout } from '@/components/common/Callout';

export default function Section05() {
  return (
    <LessonLayout sectionId={5}>
      <h2 className="text-2xl font-bold text-dark-100 mb-6">The Ethical Justification of Capitalism</h2>

      <p className="mb-4">
        The previous chapters provided systematic reasons and empirical evidence that socialism
        produces less wealth than capitalism. But some people rank other values higher than
        economic wealth. Socialism can thus resort to claiming that while it might not bring
        prosperity, it would mean justice, fairness, and morality.
      </p>

      <p className="mb-4">
        This chapter demonstrates that capitalism is not only economically superior but also
        the <strong>only morally defensible</strong> system—and that socialism is morally
        indefensible regardless of its economic effects.
      </p>

      <h3 className="text-xl font-semibold text-dark-100 mt-8 mb-4">The Foundation: Argumentation Ethics</h3>

      <Definition title="The Presuppositions of Argumentation">
        <p>
          To argue about what is just or unjust presupposes that both parties in the argument
          are <strong>autonomous individuals</strong> capable of independent thought. If one
          could simply impose one's will on the other without argument, there would be no need
          for argumentation at all.
        </p>
        <p className="mt-2">
          Therefore, anyone who engages in argumentation implicitly accepts the principle of
          <strong>self-ownership</strong>—that each person has the exclusive right to control
          their own body.
        </p>
      </Definition>

      <Theorem title="The Performative Contradiction">
        <p>
          To argue against self-ownership is a <strong>performative contradiction</strong>.
          The very act of arguing presupposes that the arguer has the right to control their
          own body (to move their mouth, use their brain, direct their vocal cords). Anyone
          who denies self-ownership while arguing contradicts their own action.
        </p>
      </Theorem>

      <h3 className="text-xl font-semibold text-dark-100 mt-8 mb-4">From Self-Ownership to Property</h3>

      <p className="mb-4">
        Self-ownership extends logically to external property through the principle of
        original appropriation. A person who uses previously unowned resources—mixing
        their labor with nature—establishes an objective link between themselves and those
        resources that no late-comer can claim.
      </p>

      <Definition title="The Prior-Later Distinction">
        <p>
          The natural theory of property is characterized by the <strong>prior-later
          distinction</strong>: first users and producers have a better claim to resources
          than late-comers who did not use or produce them. This distinction is not arbitrary
          but logically necessary.
        </p>
      </Definition>

      <h3 className="text-xl font-semibold text-dark-100 mt-8 mb-4">Why Socialism Is Morally Indefensible</h3>

      <Theorem title="The Absurdity of Late-Comer Ethics">
        <p>
          Socialism proposes that late-comers have as much right to resources as first-comers—
          that priority is irrelevant in deciding property claims. But if late-comers had equal
          rights, then <strong>literally no one would be allowed to do anything with anything</strong>,
          as one would need consent from all possible late-comers, including people not yet born.
        </p>
        <p className="mt-2">
          Since posterity includes one's children's children—people who come so late that one
          could never ask them—advocating such a system implies advocating death while
          presupposing life to advocate anything.
        </p>
      </Theorem>

      <Example title="The Impossibility of Late-Comer Ethics">
        <p>
          Imagine you discover an unowned apple tree. Under late-comer ethics, you cannot
          eat an apple without the consent of everyone who might ever exist and who might
          want that apple. But you cannot wait forever for unborn generations to consent.
          Simply to survive—which is necessary to argue for any ethic at all—you must be
          able to act and use resources <em>now</em>, before all possible late-comers appear.
        </p>
      </Example>

      <Callout type="warning" title="Contracts Require Prior Property">
        <p>
          Only if property rights are conceptualized as private rights originating in time
          does it become possible to make contracts. Contracts are agreements based on mutual
          recognition of each contractor's <em>prior</em> ownership claims to things acquired
          <em>before</em> the agreement. No contracts could exist under a late-comer ethic.
        </p>
      </Callout>

      <h3 className="text-xl font-semibold text-dark-100 mt-8 mb-4">The Nonaggression Principle</h3>

      <Definition title="Nonaggression as a Presupposition">
        <p>
          To argue and possibly agree with someone means to recognize each other's prior
          right of exclusive control over their own body. If one did not recognize this—
          if one simply used force against the other person's body—there would be no
          argumentation, only conflict.
        </p>
        <p className="mt-2">
          Therefore, anyone who argues implicitly accepts the <strong>nonaggression
          principle</strong>: that it is wrong to initiate physical force against another
          person's body or justly acquired property.
        </p>
      </Definition>

      <Theorem title="Socialism as Aggression">
        <p>
          Socialism, by definition, involves taking property from those who produced or
          contracted for it and giving it to those who did neither. This is aggression—
          the initiation of force against the bodies and property of natural owners.
          Therefore, socialism is morally indefensible: it violates the very principles
          that anyone must accept in order to argue for anything at all.
        </p>
      </Theorem>

      <h3 className="text-xl font-semibold text-dark-100 mt-8 mb-4">Capitalism as the Only Moral System</h3>

      <Callout type="success" title="Key Insight">
        <p>
          Capitalism—the system based on self-ownership, original appropriation, and
          voluntary exchange—is the only system that can be justified without contradiction.
          Any argument against capitalism must use the very faculties (one's body, one's
          mind) whose ownership it denies. Any ethic other than the natural theory of
          property is either a <strong>performative contradiction</strong> or leads to
          the <strong>absurd conclusion</strong> that no one may do anything with anything.
        </p>
      </Callout>

      <p className="mb-4">
        This does not mean that capitalism produces perfect outcomes or that all market
        results are fair in some subjective sense. It means that capitalism is the only
        system that respects the rights of individuals as autonomous beings—rights that
        anyone must presuppose in the very act of engaging in moral discourse.
      </p>
    </LessonLayout>
  );
}
