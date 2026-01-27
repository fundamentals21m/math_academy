import { LessonLayout } from '@/components/layout/LessonLayout';
import { Callout } from '@/components/common/Callout';
import { Definition, Example } from '@/components/common/ContentBlocks';

export default function Section15() {
  return (
    <LessonLayout sectionId={15}>
      <h2>Part Two, Chapter 8: The Brotherhood</h2>

      <p>
        Winston and Julia visit <strong>O'Brien</strong> at his Inner Party apartment.
        There, in apparent safety, O'Brien reveals himself as a member of the
        Brotherhood and initiates them into the conspiracy.
      </p>

      <h3>O'Brien's Apartment</h3>

      <p>
        The Inner Party apartment is luxurious beyond anything Winston has seen:
        thick carpets, real wine, a servant who can be dismissed. Most remarkably,
        O'Brien can turn off his telescreen—a privilege unimaginable for ordinary
        Party members.
      </p>

      <div className="bg-dark-800 p-4 rounded-lg my-4 border-l-4 border-rose-500">
        <p className="font-semibold text-rose-400">Key Quote</p>
        <p className="mt-2 italic text-dark-300">
          "You can turn it off!" Winston exclaimed.
          "Yes," said O'Brien, "we can turn it off. We have that privilege."
        </p>
      </div>

      <h3>The Initiation</h3>

      <p>
        O'Brien asks Winston and Julia a series of questions about what they are
        willing to do for the Brotherhood:
      </p>

      <ul className="list-disc list-inside space-y-2 my-4 text-dark-300">
        <li>To commit murder? <span className="text-rose-400">Yes.</span></li>
        <li>To commit sabotage? <span className="text-rose-400">Yes.</span></li>
        <li>To betray their country? <span className="text-rose-400">Yes.</span></li>
        <li>To throw acid in a child's face? <span className="text-rose-400">Yes.</span></li>
        <li>To separate and never see each other again? <span className="text-rose-400">No.</span></li>
      </ul>

      <Callout type="danger">
        <strong>A Fatal Weakness:</strong> Their refusal to give each other up reveals
        their one vulnerability. The Party will exploit exactly this bond to destroy
        them both.
      </Callout>

      <h3>The Book</h3>

      <Definition title="The Book">
        <p>
          "The Theory and Practice of Oligarchical Collectivism" by Emmanuel Goldstein—the
          underground manifesto of the Brotherhood that explains how the Party maintains
          power. O'Brien promises to get a copy to Winston.
        </p>
      </Definition>

      <Example title="The Toast">
        <p>
          O'Brien raises his glass of wine: "What shall it be this time? To the
          confusion of the Thought Police? To the death of Big Brother? To humanity?
          To the future?"
        </p>
        <p className="mt-2 italic">
          "To the past," said Winston.
        </p>
      </Example>

      <h3>Themes Developed</h3>

      <ul className="list-disc list-inside space-y-2 my-4 text-dark-300">
        <li><strong className="text-rose-400">Moral Compromise:</strong> What are they willing to do for the cause?</li>
        <li><strong className="text-rose-400">Trust:</strong> The leap of faith required to join the conspiracy</li>
        <li><strong className="text-rose-400">Love's Vulnerability:</strong> How their bond becomes a weakness</li>
      </ul>
    </LessonLayout>
  );
}
