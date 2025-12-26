import { LessonLayout } from '@/components/layout/LessonLayout';
import { Callout } from '@/components/common/Callout';
// import { section01Quiz } from '@/data/quizzes'; // Quiz data not implemented yet

export default function Section01() {
  return (
    <LessonLayout sectionId={1}>
      <h2>Why Math Matters for Cryptography</h2>

      <p>
        Every time you send a message, make a purchase online, or connect to a website, 
        mathematics is working behind the scenes to keep your data safe. The same equations 
        that mathematicians explored centuries ago now protect billions of internet 
        transactions every day.
      </p>

      <Callout type="info">
        <strong>The Big Idea:</strong> Cryptography relies on mathematical operations that 
        are easy to do in one direction but incredibly hard to reverse.
      </Callout>

      <h2>The Magic of One-Way Functions</h2>

      <p>
        Imagine you have a function that takes a secret password and transforms it into 
        a seemingly random string of characters. Anyone can run this function forward, 
        but going backward—from the random string back to the password—is practically impossible.
      </p>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 my-6">
        <div className="bg-dark-800/50 rounded-xl p-4 border border-dark-700">
          <h3 className="text-lg font-semibold text-emerald-400 mb-2">Easy Direction</h3>
          <p className="text-dark-300 mb-2">Multiply two large prime numbers together:</p>
          <p className="font-mono text-emerald-400">61 × 53 = 3233</p>
          <p className="text-dark-400 text-sm mt-2">This takes a fraction of a second.</p>
        </div>
        <div className="bg-dark-800/50 rounded-xl p-4 border border-dark-700">
          <h3 className="text-lg font-semibold text-amber-400 mb-2">Hard Direction</h3>
          <p className="text-dark-300 mb-2">Given 3233, find the two primes:</p>
          <p className="font-mono text-amber-400">3233 = ? × ?</p>
          <p className="text-dark-400 text-sm mt-2">Much harder! Imagine if the number had 600 digits.</p>
        </div>
      </div>

      <h2>What You'll Learn</h2>

      <p>
        This course builds your understanding step by step, from simple concepts to the 
        real algorithms used in modern cryptography:
      </p>

      <div className="space-y-4 my-6">
        <div className="bg-dark-800/50 rounded-xl p-4 border border-dark-700">
          <h3 className="text-lg font-semibold text-primary-400 mb-2">Module 1: Foundations</h3>
          <ul className="list-disc list-inside text-dark-300 space-y-1">
            <li><strong>Numerical Bases</strong> – Binary, hex, and base conversions</li>
            <li><strong>Modular Arithmetic</strong> – The "clock math" that wraps numbers around</li>
            <li><strong>Prime Numbers</strong> – The indivisible building blocks</li>
            <li><strong>GCD</strong> – Finding what numbers share</li>
          </ul>
        </div>

        <div className="bg-dark-800/50 rounded-xl p-4 border border-dark-700">
          <h3 className="text-lg font-semibold text-primary-400 mb-2">Module 2: Core Tools</h3>
          <ul className="list-disc list-inside text-dark-300 space-y-1">
            <li><strong>Modular Inverse</strong> – "Division" in modular arithmetic</li>
            <li><strong>Euler's Totient</strong> – Counting coprime numbers</li>
            <li><strong>Modular Exponentiation</strong> – Fast computation of huge powers</li>
            <li><strong>Discrete Logarithms</strong> – The hard problem that secures the web</li>
          </ul>
        </div>

        <div className="bg-dark-800/50 rounded-xl p-4 border border-dark-700">
          <h3 className="text-lg font-semibold text-primary-400 mb-2">Module 3: Cryptographic Protocols</h3>
          <ul className="list-disc list-inside text-dark-300 space-y-1">
            <li><strong>RSA</strong> – The most famous encryption algorithm</li>
            <li><strong>Diffie-Hellman</strong> – Sharing secrets over public channels</li>
            <li><strong>Elliptic Curves</strong> – Modern cryptography on curves</li>
          </ul>
        </div>
      </div>

      {/* TODO: Add hash function demonstration visualization */}

      <h2>A Brief History</h2>

      <p>The mathematics we'll learn has deep roots:</p>

      <ul className="list-none space-y-2 my-6 text-dark-300">
        <li><strong className="text-primary-400">300 BCE</strong> – Euclid describes the algorithm for finding GCD</li>
        <li><strong className="text-primary-400">1760s</strong> – Euler develops the totient function</li>
        <li><strong className="text-primary-400">1976</strong> – Diffie and Hellman invent public-key cryptography</li>
        <li><strong className="text-primary-400">1977</strong> – Rivest, Shamir, and Adleman create RSA</li>
        <li><strong className="text-primary-400">1985</strong> – Elliptic curve cryptography is proposed</li>
        <li><strong className="text-primary-400">Today</strong> – These algorithms protect virtually all internet traffic</li>
      </ul>

      <Callout type="success">
        <strong>Ready to begin?</strong> Let's start with the foundation: numerical bases—binary, 
        decimal, and hexadecimal—the language of computers and cryptography.
      </Callout>

      {/* <SectionQuiz sectionId={1} questions={section01Quiz} title="Introduction to Cryptography Quiz" /> */}
    </LessonLayout>
  );
}
