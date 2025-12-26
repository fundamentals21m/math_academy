import { LessonLayout } from '@/components/layout/LessonLayout';
import { Definition, Theorem, Example } from '@/components/common/ContentBlocks';
import { Math, MathBlock } from '@/components/common/MathBlock';
import { Callout } from '@/components/common/Callout';
import { SectionQuiz } from '@/components/quiz/SectionQuiz';
import { section02Quiz } from '@/data/quizzes';

export default function Section02() {
  return (
    <LessonLayout sectionId={2}>
      <h2>Understanding Numerical Bases</h2>

      <p>
        Computers don't think in tens—they think in twos. To understand cryptography, 
        we need to understand how numbers can be represented in different bases. 
        The three most important bases for cryptography are <strong>binary (base 2)</strong>, 
        <strong>decimal (base 10)</strong>, and <strong>hexadecimal (base 16)</strong>.
      </p>

      <h2>Decimal: Our Familiar System</h2>

      <Definition title="Decimal (Base 10)">
        The decimal system uses 10 digits (0-9). Each position represents a power of 10.
      </Definition>

      <p>
        Consider the number 347. We read this as "three hundred forty-seven" because:
      </p>

      <MathBlock>
        {`347 = 3 \\times 10^2 + 4 \\times 10^1 + 7 \\times 10^0 = 300 + 40 + 7`}
      </MathBlock>

      <p>
        Each position is worth 10 times more than the position to its right. 
        This is called <strong>place value</strong>.
      </p>

      <h2>Binary: The Language of Computers</h2>

      <Definition title="Binary (Base 2)">
        The binary system uses only 2 digits: 0 and 1. Each position represents a power of 2.
      </Definition>

      <p>
        Computers use binary because electronic circuits naturally have two states: 
        on (1) and off (0). Each binary digit is called a <strong>bit</strong>.
      </p>

       <Example title="Binary to Decimal">
         <p>The binary number <Math>1011_2</Math> in decimal:</p>
        <MathBlock>
          {`1011_2 = 1 \\times 2^3 + 0 \\times 2^2 + 1 \\times 2^1 + 1 \\times 2^0 = 8 + 0 + 2 + 1 = 11_{10}`}
        </MathBlock>
      </Example>

      <div className="bg-dark-800/50 rounded-xl p-4 border border-dark-700 my-6">
        <h3 className="text-lg font-semibold text-primary-400 mb-3">Powers of 2 (Memorize These!)</h3>
        <div className="grid grid-cols-4 md:grid-cols-8 gap-2 text-center">
          {[1, 2, 4, 8, 16, 32, 64, 128].map((val, i) => (
            <div key={i} className="bg-dark-700/50 rounded-lg p-2">
              <div className="text-dark-400 text-xs">2<sup>{i}</sup></div>
              <div className="text-emerald-400 font-mono">{val}</div>
            </div>
          ))}
        </div>
      </div>

      <h2>Hexadecimal: A Compact Notation</h2>

      <Definition title="Hexadecimal (Base 16)">
        The hexadecimal system uses 16 digits: 0-9 and A-F (where A=10, B=11, C=12, D=13, E=14, F=15). 
        Each position represents a power of 16.
      </Definition>

      <p>
        Hexadecimal (or "hex") is popular because it's a compact way to represent binary data. 
        Each hex digit corresponds exactly to 4 bits.
      </p>

      <div className="bg-dark-800/50 rounded-xl p-4 border border-dark-700 my-6">
        <h3 className="text-lg font-semibold text-primary-400 mb-3">Hex Digits</h3>
        <div className="grid grid-cols-4 md:grid-cols-8 gap-2 text-center">
          {['0', '1', '2', '3', '4', '5', '6', '7', '8', '9', 'A', 'B', 'C', 'D', 'E', 'F'].map((hex, i) => (
            <div key={i} className="bg-dark-700/50 rounded-lg p-2">
              <div className="text-amber-400 font-mono text-lg">{hex}</div>
              <div className="text-dark-400 text-xs">= {i}</div>
            </div>
          ))}
        </div>
      </div>

       <Example title="Hexadecimal to Decimal">
          <p>The hexadecimal number <Math>{`2F_{16}`}</Math> in decimal:</p>
         <MathBlock>
           {`\\text{2F}_{16} = 2 \\times 16^1 + 15 \\times 16^0 = 32 + 15 = 47_{10}`}
         </MathBlock>
       </Example>

      <h2>Converting Between Bases</h2>

       <Theorem title="Decimal to Binary Conversion" proof={
         <div>
           <p>This algorithm works because any number can be expressed as a sum of powers of 2.</p>
            <MathBlock>{`n = b_k \\times 2^k + b_{k-1} \\times 2^{k-1} + \\dots + b_0 \\times 2^0`}</MathBlock>
           <p>Where each b_i is either 0 or 1.</p>
         </div>
       }>
         To convert from decimal to binary, repeatedly divide by 2 and record the remainders.
         Read the remainders from bottom to top.
       </Theorem>

       <Example title="Decimal to Binary Example">
         <p>Convert 13 to binary:</p>
         <div className="font-mono text-sm bg-dark-700/50 rounded-lg p-4 my-2">
           13 ÷ 2 = 6 remainder <span className="text-emerald-400">1</span><br />
           6 ÷ 2 = 3 remainder <span className="text-emerald-400">0</span><br />
           3 ÷ 2 = 1 remainder <span className="text-emerald-400">1</span><br />
           1 ÷ 2 = 0 remainder <span className="text-emerald-400">1</span>
         </div>
          <p>Reading bottom to top: <Math>{`13_{10} = 1101_2`}</Math></p>
       </Example>

      <h2>Binary to Hex (and Back)</h2>

      <p>
        Converting between binary and hex is easy because <Math>16 = 2^4</Math>. 
        Each hex digit corresponds to exactly 4 binary digits:
      </p>

       <Example title="Binary to Hexadecimal Example">
         <p>Convert <Math>10110011_2</Math> to hexadecimal:</p>
         <div className="font-mono text-sm bg-dark-700/50 rounded-lg p-4 my-2">
           1011 0011<br />
           ↓&nbsp;&nbsp;&nbsp;&nbsp;↓<br />
           <span className="text-amber-400">B</span>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span className="text-amber-400">3</span>
         </div>
          <p>So <Math>{`10110011_2 = B3_{16}`}</Math></p>
       </Example>

      <h2>Why Hex Matters for Cryptography</h2>

      <Callout type="info">
        Cryptographic keys, hash values, and encrypted data are often displayed in hexadecimal 
        because it's much more compact than binary while still being easy to convert.
      </Callout>

      <p>
        When you see a cryptographic hash like:
      </p>

      <div className="font-mono text-xs md:text-sm bg-dark-800/50 rounded-xl p-4 border border-dark-700 my-6 break-all text-amber-400">
        a1b2c3d4e5f6789012345678abcdef01
      </div>

      <p>
        This is hexadecimal! Each character represents 4 bits, so this 32-character 
        hash represents <Math>32 \times 4 = 128</Math> bits of data. 
        In binary, this would be 128 characters of 0s and 1s—much harder to read and copy.
      </p>

      {/* TODO: Add base converter visualization - interactive tool to convert between bases */}

      <Callout type="success">
        <strong>Key Takeaway:</strong> Different bases are just different ways of writing the same number. 
        Binary is what computers use internally, hex is how we read binary data, 
        and decimal is what humans are used to.
      </Callout>

      <SectionQuiz sectionId={2} questions={section02Quiz} title="Numerical Bases Quiz" />
    </LessonLayout>
  );
}
