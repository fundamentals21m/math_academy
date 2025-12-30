import { LessonLayout } from '@/components/layout/LessonLayout';
import { Callout } from '@/components/common/Callout';
import { MathBlock, Math } from '@/components/common/MathBlock';
import { BinaryConverter } from '@/components/visualizations';

export default function Section10() {
  return (
    <LessonLayout sectionId={10}>
      <h2>Chapter 10: Binary Arithmetic</h2>

      <p>
        The numerical notation used by computers is called the <strong>binary system</strong>.
        Instead of the ten digits 0, 1, 2, 3, 4, 5, 6, 7, 8, 9 in our ordinary "decimal" system,
        the binary system uses only the two digits 0 and 1.
      </p>

      <p>
        This chapter explains how the binary system works, how arithmetic is performed
        in binary, and why computers use this system. We will also discuss applications
        to data transmission, including the remarkable ability to detect errors.
      </p>

      <h2>10.1 Decimal, Binary, and Ternary Representation</h2>

      <p>
        Our ordinary decimal system is a <em>positional notation</em>. The symbol "276"
        represents two hundreds, seven tens, and six ones:
      </p>

      <MathBlock>{`276 = 2 \\times 100 + 7 \\times 10 + 6 \\times 1 = 2 \\times 10^2 + 7 \\times 10^1 + 6 \\times 10^0`}</MathBlock>

      <p>
        The number 10 is called the <strong>base</strong> of the decimal system. But there's
        nothing magical about 10—we could use any other positive integer as a base.
      </p>

      <Callout type="info">
        <strong>Historical Note:</strong> Our use of base 10 probably stems from the
        fact that we have ten fingers. The Babylonians used base 60, which is why we
        have 60 minutes in an hour and 60 seconds in a minute.
      </Callout>

      <h3>The Binary System (Base 2)</h3>

      <p>
        In the binary system, only the digits 0 and 1 are used, and each position
        represents a power of 2 instead of a power of 10.
      </p>

      <div className="bg-dark-800 p-4 rounded-lg my-4 border-l-4 border-amber-500">
        <p className="font-semibold text-amber-400">Example: Converting Binary to Decimal</p>
        <p className="mt-2">
          The binary number <Math>{`10110`}</Math> represents:
        </p>
        <MathBlock>{`1 \\times 2^4 + 0 \\times 2^3 + 1 \\times 2^2 + 1 \\times 2^1 + 0 \\times 2^0`}</MathBlock>
        <MathBlock>{`= 16 + 0 + 4 + 2 + 0 = 22`}</MathBlock>
        <p className="mt-2 text-emerald-400">
          So <Math>{`10110_2 = 22_{10}`}</Math> (the subscripts indicate the base).
        </p>
      </div>

      <h3>Comparison Table</h3>

      <p>
        Here are the first several positive integers in decimal, binary, and ternary (base 3):
      </p>

      <div className="overflow-x-auto my-6">
        <table className="w-full text-left border-collapse">
          <thead>
            <tr className="border-b border-dark-600">
              <th className="py-2 px-4 text-primary-400">Decimal</th>
              <th className="py-2 px-4 text-primary-400">Binary</th>
              <th className="py-2 px-4 text-primary-400">Ternary</th>
            </tr>
          </thead>
          <tbody className="text-dark-300">
            <tr className="border-b border-dark-700"><td className="py-2 px-4">1</td><td className="py-2 px-4">1</td><td className="py-2 px-4">1</td></tr>
            <tr className="border-b border-dark-700"><td className="py-2 px-4">2</td><td className="py-2 px-4">10</td><td className="py-2 px-4">2</td></tr>
            <tr className="border-b border-dark-700"><td className="py-2 px-4">3</td><td className="py-2 px-4">11</td><td className="py-2 px-4">10</td></tr>
            <tr className="border-b border-dark-700"><td className="py-2 px-4">4</td><td className="py-2 px-4">100</td><td className="py-2 px-4">11</td></tr>
            <tr className="border-b border-dark-700"><td className="py-2 px-4">5</td><td className="py-2 px-4">101</td><td className="py-2 px-4">12</td></tr>
            <tr className="border-b border-dark-700"><td className="py-2 px-4">6</td><td className="py-2 px-4">110</td><td className="py-2 px-4">20</td></tr>
            <tr className="border-b border-dark-700"><td className="py-2 px-4">7</td><td className="py-2 px-4">111</td><td className="py-2 px-4">21</td></tr>
            <tr className="border-b border-dark-700"><td className="py-2 px-4">8</td><td className="py-2 px-4">1000</td><td className="py-2 px-4">22</td></tr>
            <tr className="border-b border-dark-700"><td className="py-2 px-4">9</td><td className="py-2 px-4">1001</td><td className="py-2 px-4">100</td></tr>
            <tr><td className="py-2 px-4">10</td><td className="py-2 px-4">1010</td><td className="py-2 px-4">101</td></tr>
          </tbody>
        </table>
      </div>

      <h3>Converting Decimal to Binary</h3>

      <p>
        To convert a decimal number to binary, repeatedly divide by 2 and record
        the remainders (reading from bottom to top).
      </p>

      <div className="bg-dark-800 p-4 rounded-lg my-4 border-l-4 border-amber-500">
        <p className="font-semibold text-amber-400">Example: Convert 22 to Binary</p>
        <div className="mt-2 font-mono text-dark-300 space-y-1">
          <p><Math>{`22 \\div 2 = 11`}</Math> remainder <Math>0</Math></p>
          <p><Math>{`11 \\div 2 = 5`}</Math> remainder <Math>1</Math></p>
          <p><Math>{`5 \\div 2 = 2`}</Math> remainder <Math>1</Math></p>
          <p><Math>{`2 \\div 2 = 1`}</Math> remainder <Math>0</Math></p>
          <p><Math>{`1 \\div 2 = 0`}</Math> remainder <Math>1</Math></p>
        </div>
        <p className="mt-2 text-emerald-400">
          Reading remainders from bottom to top: <Math>{`22_{10} = 10110_2`}</Math>
        </p>
      </div>

      <BinaryConverter />

      <h3>Addition and Multiplication in Binary</h3>

      <p>
        Binary arithmetic follows the same rules as decimal arithmetic, but with
        simpler addition and multiplication tables:
      </p>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 my-6">
        <div className="bg-dark-800/50 rounded-xl p-4 border border-dark-700">
          <p className="text-primary-400 font-semibold text-center">Binary Addition</p>
          <div className="mt-2 font-mono text-center text-dark-300">
            <p>0 + 0 = 0</p>
            <p>0 + 1 = 1</p>
            <p>1 + 0 = 1</p>
            <p>1 + 1 = 10 (carry 1)</p>
          </div>
        </div>
        <div className="bg-dark-800/50 rounded-xl p-4 border border-dark-700">
          <p className="text-primary-400 font-semibold text-center">Binary Multiplication</p>
          <div className="mt-2 font-mono text-center text-dark-300">
            <p>0 × 0 = 0</p>
            <p>0 × 1 = 0</p>
            <p>1 × 0 = 0</p>
            <p>1 × 1 = 1</p>
          </div>
        </div>
      </div>

      <div className="bg-dark-800 p-4 rounded-lg my-4 border-l-4 border-indigo-500">
        <p className="font-semibold text-indigo-400">Example: Binary Addition</p>
        <p className="mt-2">
          Add <Math>{`101_2`}</Math> and <Math>{`110_2`}</Math> (that's 5 + 6 in decimal):
        </p>
        <pre className="mt-2 font-mono text-dark-300 text-center">
{`    101
  + 110
  -----
   1011`}
        </pre>
        <p className="mt-2 text-emerald-400">
          Result: <Math>{`1011_2 = 11_{10}`}</Math> ✓
        </p>
      </div>

      <Callout type="success">
        <strong>Key Insight:</strong> Multiplication in binary is especially simple—you
        only need to shift and add! Multiplying by 1 copies the number; multiplying
        by 0 gives zero. This simplicity is why computers use the binary system.
      </Callout>

      <h2>10.2 Subtraction and Division in Base Two</h2>

      <h3>Binary Subtraction</h3>

      <p>
        Subtraction in binary uses borrowing, just like in decimal, but borrowing
        works in powers of 2.
      </p>

      <div className="bg-dark-800 p-4 rounded-lg my-4 border-l-4 border-amber-500">
        <p className="font-semibold text-amber-400">Example: Binary Subtraction</p>
        <p className="mt-2">
          Compute <Math>{`1011_2 - 110_2`}</Math> (that's 11 − 6 in decimal):
        </p>
        <pre className="mt-2 font-mono text-dark-300 text-center">
{`    1011
  -  110
  -----
    101`}
        </pre>
        <p className="mt-2 text-emerald-400">
          Result: <Math>{`101_2 = 5_{10}`}</Math> ✓
        </p>
      </div>

      <h3>The Binary Point</h3>

      <p>
        Just as the decimal point separates whole numbers from fractions in base 10,
        a <em>binary point</em> does the same in base 2. Positions to the right of the
        binary point represent negative powers of 2:
      </p>

      <MathBlock>{`0.1_2 = \\frac{1}{2}, \\quad 0.01_2 = \\frac{1}{4}, \\quad 0.11_2 = \\frac{1}{2} + \\frac{1}{4} = \\frac{3}{4}`}</MathBlock>

      <h3>Binary Division</h3>

      <p>
        Division in binary follows the same long division algorithm as in decimal.
        The key observation is that in binary, each step of the quotient is either
        0 or 1—never anything larger.
      </p>

      <div className="bg-dark-800 p-4 rounded-lg my-4 border-l-4 border-indigo-500">
        <p className="font-semibold text-indigo-400">Example: Binary Division</p>
        <p className="mt-2">
          Compute <Math>{`1011_2 \\div 11_2`}</Math> (that's 11 ÷ 3 in decimal):
        </p>
        <p className="mt-2">
          Using long division, we find: <Math>{`1011 \\div 11 = 11`}</Math> remainder <Math>10</Math>
        </p>
        <p className="mt-2 text-emerald-400">
          So <Math>{`11 \\div 3 = 3`}</Math> remainder <Math>2</Math> ✓
        </p>
      </div>

      <h3>Repeating Binaries</h3>

      <p>
        Just as <Math>{`1/3 = 0.333...`}</Math> in decimal, some fractions produce
        repeating patterns in binary:
      </p>

      <MathBlock>{`\\frac{1}{3} = 0.\\overline{01}_2 = 0.010101..._2`}</MathBlock>

      <p>
        You can verify this: <Math>{`0.01_2 + 0.0001_2 + 0.000001_2 + \\cdots`}</Math> is
        a geometric series with first term <Math>{`1/4`}</Math> and ratio <Math>{`1/4`}</Math>,
        summing to <Math>{`(1/4)/(1-1/4) = 1/3`}</Math>.
      </p>

      <h2>10.3 Applications</h2>

      <h3>Why Computers Use Binary</h3>

      <p>
        Electronic computers use the binary system because electronic switches have
        exactly two states: <strong>on</strong> and <strong>off</strong>. These states
        naturally correspond to the digits 1 and 0.
      </p>

      <Callout type="info">
        <strong>Digital Computers:</strong> A modern digital computer consists of
        millions of tiny electronic switches. Each switch can be either "on" (1) or
        "off" (0). All data—numbers, text, images, sound—is ultimately represented
        as sequences of 0s and 1s.
      </Callout>

      <h3>Data Transmission</h3>

      <p>
        Binary signals are ideal for long-distance communication. While static and
        interference can make it impossible to understand a human voice, it remains
        comparatively easy to distinguish between a signal being "on" and being "off."
      </p>

      <div className="bg-dark-800 p-4 rounded-lg my-4 border-l-4 border-amber-500">
        <p className="font-semibold text-amber-400">Example: Representing the Alphabet</p>
        <p className="mt-2">
          How many binary switches are needed to represent each letter of the 26-letter
          English alphabet?
        </p>
        <p className="mt-2">
          Since one must represent 26 different characters, we need <em>five</em> switches.
          With five switches one can record binary numbers from 0 to 11111 (32 different
          combinations). Note that four switches would only provide 16 combinations—not enough!
        </p>
        <MathBlock>{`2^5 = 32 \\geq 26 > 16 = 2^4`}</MathBlock>
      </div>

      <h3>Bits and Bytes</h3>

      <p>
        In binary usage, each 0 or 1 (each "off" or "on" in electrical terms) is
        called one <strong>bit</strong> of information. In modern digital computers,
        a fixed number of bits—usually eight—is assigned to each character or <strong>byte</strong>.
      </p>

      <div className="bg-dark-800 p-4 rounded-lg my-4 border-l-4 border-indigo-500">
        <p className="font-semibold text-indigo-400">Example: 8-Bit Character Codes</p>
        <p className="mt-2">
          In the IBM System/370, every character is represented by eight bits:
        </p>
        <div className="overflow-x-auto mt-2">
          <table className="w-full text-left border-collapse font-mono">
            <tbody className="text-dark-300">
              <tr className="border-b border-dark-700"><td className="py-1 px-4">space</td><td className="py-1 px-4">01000000</td></tr>
              <tr className="border-b border-dark-700"><td className="py-1 px-4">A</td><td className="py-1 px-4">11000001</td></tr>
              <tr className="border-b border-dark-700"><td className="py-1 px-4">B</td><td className="py-1 px-4">11000010</td></tr>
              <tr className="border-b border-dark-700"><td className="py-1 px-4">C</td><td className="py-1 px-4">11000011</td></tr>
              <tr className="border-b border-dark-700"><td className="py-1 px-4">D</td><td className="py-1 px-4">11000100</td></tr>
              <tr className="border-b border-dark-700"><td className="py-1 px-4">E</td><td className="py-1 px-4">11000101</td></tr>
              <tr><td className="py-1 px-4">F</td><td className="py-1 px-4">11000110</td></tr>
            </tbody>
          </table>
        </div>
        <p className="mt-2">
          With eight bits per character, we can represent <Math>{`2^8 = 256`}</Math> distinct
          characters—enough for uppercase, lowercase, digits, punctuation, and special symbols!
        </p>
      </div>

      <h3>Error Detection: Parity Bits</h3>

      <p>
        Even binary data can acquire errors during transmission. A clever technique
        called a <strong>parity bit</strong> can detect such errors.
      </p>

      <Callout type="success">
        <strong>Parity Bit Method:</strong> Add one extra bit at the end of each
        character, chosen so that the total number of 1s is always odd (or always even).
        If a received character has the wrong parity, you know an error occurred!
      </Callout>

      <div className="bg-dark-800 p-4 rounded-lg my-4 border-l-4 border-amber-500">
        <p className="font-semibold text-amber-400">Example: Using Parity Bits</p>
        <p className="mt-2">
          Suppose we use "odd parity" (total 1s must be odd). For the character 10011010:
        </p>
        <ul className="list-disc list-inside mt-2 space-y-1 text-dark-300">
          <li>The character has four 1s (even number)</li>
          <li>Add parity bit 1 to make total 1s = 5 (odd)</li>
          <li>Transmit: 100110101</li>
        </ul>
        <p className="mt-2">
          If you receive 100110100, you count five 1s—that's odd, so parity checks out.
          But if you receive 100110<span className="text-red-400">0</span>00, you count three 1s—also odd!
          Wait... the original had a transmission error that flipped <em>two</em> bits, which
          parity cannot detect. However, single-bit errors are always caught.
        </p>
      </div>

      <h3>Morse Code: A Ternary System</h3>

      <p>
        The International Morse Code uses groups of "dots" and "dashes" to represent
        letters. This might seem ternary (dot, dash, and off), but there's a subtlety.
      </p>

      <div className="bg-dark-800 p-4 rounded-lg my-4 border-l-4 border-indigo-500">
        <p className="font-semibold text-indigo-400">Why Morse Code Needs 4 Symbols</p>
        <p className="mt-2">
          You might think that with three symbols (dot, dash, off), you'd only need
          sequences of length 3 to represent 26 letters (since <Math>{`3^3 = 27 > 26`}</Math>).
        </p>
        <p className="mt-2">
          But there's a practical problem: you cannot signal "off" at the <em>beginning</em> of
          a character! The receiver wouldn't know anything was coming until they detected
          the first dot or dash.
        </p>
        <p className="mt-2 text-emerald-400">
          This is why Morse code uses sequences of up to <em>four</em> dots and dashes
          to represent the 26 letters.
        </p>
      </div>

      <h3>Space Exploration: Voyager 1</h3>

      <p>
        One of the most spectacular examples of binary data transmission occurred
        in 1980, when Voyager 1 sent pictures of Saturn back to Earth.
      </p>

      <Callout type="info">
        <strong>Voyager 1 Mission:</strong> The spacecraft transmitted beautiful
        pictures of Saturn, its rings, and moons from a distance of <em>one billion miles</em>,
        using a transmitter with only 20 watts of power (less than a typical light bulb).
        This was possible because all information was coded in binary—on-off signals.
        The transmitter sent 45,000 bits per second, processed by computers on Earth
        into the stunning images we know today.
      </Callout>

      <Callout type="success">
        <strong>Chapter Summary:</strong> The binary system uses only two digits (0 and 1)
        and underlies all modern digital technology.
        <ul className="list-disc list-inside mt-2 space-y-1">
          <li><strong>Place value:</strong> Each position represents a power of 2</li>
          <li><strong>Simple arithmetic:</strong> Addition and multiplication tables have only four entries each</li>
          <li><strong>Computer-friendly:</strong> Electronic switches naturally have two states (on/off)</li>
          <li><strong>Robust transmission:</strong> Easy to distinguish "on" from "off" even with noise</li>
          <li><strong>Error detection:</strong> Parity bits can catch single-bit transmission errors</li>
        </ul>
      </Callout>
    </LessonLayout>
  );
}
