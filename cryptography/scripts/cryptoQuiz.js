// Cryptography Math Quiz Module

// Helper to render LaTeX in strings using KaTeX
// Supports $...$ for inline math
function renderLatex(text) {
  if (typeof katex === 'undefined') return text;

  return text.replace(/\$([^$]+)\$/g, (_, latex) => {
    try {
      return katex.renderToString(latex.trim(), {
        displayMode: false,
        throwOnError: false
      });
    } catch {
      return latex;
    }
  });
}

const quizQuestions = [
  // ========== MODULAR ARITHMETIC ==========
  {
    question: "What is $17 \\bmod 5$?",
    options: ["$2$", "$3$", "$4$", "$5$"],
    correct: 0,
    explanation: "$17 \\div 5 = 3$ remainder $2$. So $17 \\bmod 5 = 2$."
  },
  {
    question: "If $a \\equiv b \\pmod{n}$, what does this mean?",
    options: [
      "$a$ and $b$ have the same remainder when divided by $n$",
      "$a$ equals $b$",
      "$a$ is greater than $b$",
      "$n$ divides $a$ but not $b$"
    ],
    correct: 0,
    explanation: "The congruence notation $a \\equiv b \\pmod{n}$ means $a$ and $b$ leave the same remainder when divided by $n$."
  },
  {
    question: "What is $(-3) \\bmod 7$ in cryptographic terms?",
    options: ["$4$", "$-3$", "$3$", "$0$"],
    correct: 0,
    explanation: "In cryptography, we always use positive remainders. $-3 \\bmod 7 = 7 - 3 = 4$."
  },
  {
    question: "What is $23 \\bmod 7$?",
    options: ["$2$", "$3$", "$4$", "$5$"],
    correct: 0,
    explanation: "$23 \\div 7 = 3$ remainder $2$. So $23 \\bmod 7 = 2$."
  },
  {
    question: "What is $100 \\bmod 13$?",
    options: ["$9$", "$8$", "$7$", "$10$"],
    correct: 0,
    explanation: "$100 = 13 \\times 7 + 9$. So $100 \\bmod 13 = 9$."
  },
  {
    question: "If $15 \\equiv x \\pmod{4}$, what is $x$ where $0 \\le x < 4$?",
    options: ["$3$", "$1$", "$2$", "$0$"],
    correct: 0,
    explanation: "$15 = 4 \\times 3 + 3$. So $15 \\equiv 3 \\pmod{4}$."
  },

  // ========== PRIME NUMBERS ==========
  {
    question: "Why are prime numbers important for RSA?",
    options: [
      "Multiplying primes is easy, but factoring their product is hard",
      "Primes are the smallest numbers",
      "Primes can only be divided by 2",
      "Primes are always odd"
    ],
    correct: 0,
    explanation: "RSA security relies on the asymmetry: multiplication is easy, but factoring large products back into primes is computationally hard."
  },
  {
    question: "Which of these is NOT a prime number?",
    options: ["$91$", "$89$", "$97$", "$83$"],
    correct: 0,
    explanation: "$91 = 7 \\times 13$. The other numbers are all prime."
  },
  {
    question: "What is the smallest prime number?",
    options: ["$2$", "$1$", "$3$", "$0$"],
    correct: 0,
    explanation: "$2$ is the smallest prime and the only even prime number."
  },
  {
    question: "Which of these is a prime number?",
    options: ["$101$", "$99$", "$100$", "$102$"],
    correct: 0,
    explanation: "$101$ is prime. $99 = 9 \\times 11$, $100 = 4 \\times 25$, $102 = 2 \\times 51$."
  },
  {
    question: "Why is $1$ not considered a prime number?",
    options: [
      "By definition, primes have exactly two distinct divisors",
      "$1$ is too small",
      "$1$ is an even number",
      "$1$ cannot be factored"
    ],
    correct: 0,
    explanation: "A prime has exactly two distinct divisors: $1$ and itself. The number $1$ has only one divisor."
  },

  // ========== GCD AND EUCLIDEAN ALGORITHM ==========
  {
    question: "What is $\\gcd(48, 18)$?",
    options: ["$6$", "$3$", "$9$", "$12$"],
    correct: 0,
    explanation: "Using the Euclidean algorithm: $48 = 18 \\times 2 + 12$, $18 = 12 \\times 1 + 6$, $12 = 6 \\times 2 + 0$. $\\gcd = 6$."
  },
  {
    question: "What does the Extended Euclidean Algorithm find?",
    options: [
      "Integers $x, y$ such that $ax + by = \\gcd(a, b)$",
      "The prime factors of a number",
      "The largest prime less than $n$",
      "The modular square root"
    ],
    correct: 0,
    explanation: "The Extended Euclidean Algorithm finds Bézout coefficients $x$ and $y$ satisfying $ax + by = \\gcd(a, b)$."
  },
  {
    question: "What is $\\gcd(35, 14)$?",
    options: ["$7$", "$5$", "$14$", "$1$"],
    correct: 0,
    explanation: "$35 = 14 \\times 2 + 7$, $14 = 7 \\times 2 + 0$. $\\gcd = 7$."
  },
  {
    question: "What is $\\gcd(17, 13)$?",
    options: ["$1$", "$13$", "$17$", "$4$"],
    correct: 0,
    explanation: "$17$ and $13$ are both prime and different, so $\\gcd(17, 13) = 1$."
  },
  {
    question: "Two numbers are coprime when their $\\gcd$ equals:",
    options: ["$1$", "$0$", "The smaller number", "The larger number"],
    correct: 0,
    explanation: "Numbers are coprime (relatively prime) when their greatest common divisor is $1$."
  },
  {
    question: "What is $\\gcd(24, 36)$?",
    options: ["$12$", "$6$", "$24$", "$4$"],
    correct: 0,
    explanation: "$36 = 24 \\times 1 + 12$, $24 = 12 \\times 2 + 0$. $\\gcd = 12$."
  },

  // ========== MODULAR INVERSE ==========
  {
    question: "When does a modular inverse of $a \\bmod n$ exist?",
    options: [
      "When $\\gcd(a, n) = 1$",
      "When $a < n$",
      "When $n$ is prime",
      "Always"
    ],
    correct: 0,
    explanation: "The modular inverse exists if and only if $a$ and $n$ are coprime ($\\gcd = 1$)."
  },
  {
    question: "What is $3^{-1} \\bmod 7$?",
    options: ["$5$", "$3$", "$4$", "$2$"],
    correct: 0,
    explanation: "$3 \\times 5 = 15 = 2 \\times 7 + 1$, so $3 \\times 5 \\equiv 1 \\pmod{7}$. Therefore $3^{-1} \\equiv 5 \\pmod{7}$."
  },
  {
    question: "What is $2^{-1} \\bmod 5$?",
    options: ["$3$", "$2$", "$4$", "$1$"],
    correct: 0,
    explanation: "$2 \\times 3 = 6 = 5 + 1 \\equiv 1 \\pmod{5}$. Therefore $2^{-1} \\equiv 3 \\pmod{5}$."
  },
  {
    question: "Does $4^{-1} \\bmod 8$ exist?",
    options: ["No, because $\\gcd(4,8) = 4 \\ne 1$", "Yes, it equals $2$", "Yes, it equals $6$", "Yes, it equals $4$"],
    correct: 0,
    explanation: "$\\gcd(4, 8) = 4 \\ne 1$, so no modular inverse exists."
  },
  {
    question: "What is $7^{-1} \\bmod 11$?",
    options: ["$8$", "$7$", "$4$", "$3$"],
    correct: 0,
    explanation: "$7 \\times 8 = 56 = 5 \\times 11 + 1 \\equiv 1 \\pmod{11}$. Therefore $7^{-1} \\equiv 8 \\pmod{11}$."
  },

  // ========== EULER'S TOTIENT ==========
  {
    question: "What is $\\varphi(12)$?",
    options: ["$4$", "$6$", "$8$", "$11$"],
    correct: 0,
    explanation: "Numbers coprime to $12$ are: $1, 5, 7, 11$. So $\\varphi(12) = 4$."
  },
  {
    question: "For a prime $p$, what is $\\varphi(p)$?",
    options: ["$p - 1$", "$p$", "$p + 1$", "$p / 2$"],
    correct: 0,
    explanation: "Every number from $1$ to $p-1$ is coprime to a prime $p$, so $\\varphi(p) = p - 1$."
  },
  {
    question: "What is $\\varphi(10)$?",
    options: ["$4$", "$5$", "$8$", "$9$"],
    correct: 0,
    explanation: "Numbers coprime to $10$: $1, 3, 7, 9$. So $\\varphi(10) = 4$."
  },
  {
    question: "What is $\\varphi(7)$?",
    options: ["$6$", "$7$", "$5$", "$3$"],
    correct: 0,
    explanation: "$7$ is prime, so $\\varphi(7) = 7 - 1 = 6$."
  },
  {
    question: "If $p$ and $q$ are distinct primes, what is $\\varphi(pq)$?",
    options: ["$(p-1)(q-1)$", "$pq - 1$", "$p + q - 1$", "$pq$"],
    correct: 0,
    explanation: "For distinct primes $p$ and $q$, $\\varphi(pq) = \\varphi(p)\\varphi(q) = (p-1)(q-1)$."
  },
  {
    question: "What does Euler's theorem state?",
    options: [
      "$a^{\\varphi(n)} \\equiv 1 \\pmod{n}$ when $\\gcd(a,n) = 1$",
      "$a^n \\equiv 1 \\pmod{\\varphi(n)}$",
      "$\\varphi(n) = n - 1$ for all $n$",
      "$a^n \\equiv a \\pmod{n}$"
    ],
    correct: 0,
    explanation: "Euler's theorem: if $\\gcd(a, n) = 1$, then $a^{\\varphi(n)} \\equiv 1 \\pmod{n}$."
  },

  // ========== MODULAR EXPONENTIATION ==========
  {
    question: "What makes square-and-multiply efficient?",
    options: [
      "It uses the binary representation of the exponent",
      "It only works with small numbers",
      "It skips the mod operation",
      "It uses floating point arithmetic"
    ],
    correct: 0,
    explanation: "Square-and-multiply reduces $O(n)$ multiplications to $O(\\log n)$ by using the binary representation of the exponent."
  },
  {
    question: "What is $2^{10} \\bmod 1000$?",
    options: ["$24$", "$1024$", "$512$", "$256$"],
    correct: 0,
    explanation: "$2^{10} = 1024$. $1024 \\bmod 1000 = 24$."
  },
  {
    question: "Why do we take mod at each step in modular exponentiation?",
    options: [
      "To keep numbers small and prevent overflow",
      "To make the result prime",
      "To speed up division",
      "It's not necessary"
    ],
    correct: 0,
    explanation: "Taking mod at each step keeps intermediate results small, preventing integer overflow."
  },
  {
    question: "What is $3^4 \\bmod 5$?",
    options: ["$1$", "$2$", "$3$", "$4$"],
    correct: 0,
    explanation: "$3^4 = 81$. $81 = 16 \\times 5 + 1$, so $81 \\bmod 5 = 1$."
  },

  // ========== DISCRETE LOGARITHM ==========
  {
    question: "What is the discrete logarithm problem?",
    options: [
      "Given $g^x \\bmod p = h$, find $x$",
      "Compute $g^x \\bmod p$ given $x$",
      "Find the prime factors of $n$",
      "Compute the $\\gcd$ of two numbers"
    ],
    correct: 0,
    explanation: "The discrete log problem is finding the exponent $x$ given $g$, $h$, and $p$ where $g^x \\equiv h \\pmod{p}$. This is believed to be computationally hard."
  },
  {
    question: "Why is the discrete log problem important for cryptography?",
    options: [
      "Computing the forward direction is easy, but reversing is hard",
      "It only works with small numbers",
      "It's easy to solve for all numbers",
      "It's the same as factoring"
    ],
    correct: 0,
    explanation: "The discrete log provides a one-way function: exponentiation is easy, but finding the exponent from the result is hard."
  },
  {
    question: "If $2^x \\equiv 8 \\pmod{13}$, what is $x$?",
    options: ["$3$", "$4$", "$5$", "$2$"],
    correct: 0,
    explanation: "$2^3 = 8$, and $8 < 13$, so $2^3 \\equiv 8 \\pmod{13}$. Thus $x = 3$."
  },
  {
    question: "What makes the discrete log hard to compute?",
    options: [
      "There's no known efficient algorithm for large primes",
      "It requires complex numbers",
      "It can't be computed for odd numbers",
      "It only works for small groups"
    ],
    correct: 0,
    explanation: "No polynomial-time algorithm is known for computing discrete logs in large prime-order groups."
  },

  // ========== RSA ==========
  {
    question: "In RSA, what is the relationship between $e$ and $d$?",
    options: [
      "$e \\times d \\equiv 1 \\pmod{\\varphi(n)}$",
      "$e + d = n$",
      "$e = d$",
      "$e \\times d = n$"
    ],
    correct: 0,
    explanation: "The decryption exponent $d$ is the modular inverse of $e$ modulo $\\varphi(n)$, so $e \\times d \\equiv 1 \\pmod{\\varphi(n)}$."
  },
  {
    question: "What mathematical problem is RSA security based on?",
    options: [
      "The difficulty of factoring large numbers",
      "The difficulty of computing square roots",
      "The difficulty of adding large numbers",
      "The difficulty of computing logarithms"
    ],
    correct: 0,
    explanation: "RSA security relies on the computational difficulty of factoring the product of two large primes."
  },
  {
    question: "In RSA, what is $n$ computed from?",
    options: [
      "$n = p \\times q$ (product of two primes)",
      "$n = p + q$ (sum of two primes)",
      "$n = p^q$ (exponentiation)",
      "$n = \\gcd(p, q)$"
    ],
    correct: 0,
    explanation: "In RSA, $n$ is the product of two large primes $p$ and $q$."
  },
  {
    question: "Why is $e = 65537$ commonly used in RSA?",
    options: [
      "It's prime, has few 1-bits (fast), and is large enough for security",
      "It's the largest prime",
      "It's the smallest odd number",
      "It makes $d$ easy to compute"
    ],
    correct: 0,
    explanation: "$65537 = 2^{16} + 1$ is prime with only two 1-bits in binary, making encryption fast."
  },
  {
    question: "To decrypt RSA ciphertext $c$, we compute:",
    options: [
      "$c^d \\bmod n$",
      "$c^e \\bmod n$",
      "$c \\times d \\bmod n$",
      "$c + d \\bmod n$"
    ],
    correct: 0,
    explanation: "RSA decryption: $m = c^d \\bmod n$, where $d$ is the private exponent."
  },
  {
    question: "If $p = 5$, $q = 11$, what is $\\varphi(n)$ for RSA?",
    options: ["$40$", "$55$", "$54$", "$44$"],
    correct: 0,
    explanation: "$\\varphi(n) = (p-1)(q-1) = 4 \\times 10 = 40$."
  },

  // ========== DIFFIE-HELLMAN ==========
  {
    question: "In Diffie-Hellman, what can an eavesdropper see?",
    options: [
      "$g$, $p$, $g^a \\bmod p$, and $g^b \\bmod p$",
      "The shared secret",
      "Alice's private key $a$",
      "Bob's private key $b$"
    ],
    correct: 0,
    explanation: "The eavesdropper sees the public parameters and the exchanged public values, but cannot compute the shared secret without solving the discrete log."
  },
  {
    question: "What type of attack is Diffie-Hellman vulnerable to?",
    options: [
      "Man-in-the-middle attack",
      "Brute force attack on the shared secret",
      "Timing attacks only",
      "It has no known vulnerabilities"
    ],
    correct: 0,
    explanation: "Without authentication, an attacker can intercept and substitute their own public values, establishing separate keys with Alice and Bob."
  },
  {
    question: "In Diffie-Hellman, the shared secret is:",
    options: [
      "$g^{ab} \\bmod p$",
      "$g^a + g^b \\bmod p$",
      "$a \\times b \\bmod p$",
      "$g^a \\times g^b \\bmod p$"
    ],
    correct: 0,
    explanation: "Both parties compute $g^{ab} \\bmod p$: Alice computes $(g^b)^a$ and Bob computes $(g^a)^b$."
  },
  {
    question: "Why must the generator $g$ be chosen carefully in Diffie-Hellman?",
    options: [
      "It should generate a large subgroup for security",
      "It must be prime",
      "It should equal $p$",
      "It doesn't matter which $g$ is used"
    ],
    correct: 0,
    explanation: "$g$ should generate a large prime-order subgroup to prevent small subgroup attacks."
  },
  {
    question: "What is the computational Diffie-Hellman (CDH) assumption?",
    options: [
      "Given $g^a$ and $g^b$, computing $g^{ab}$ is hard",
      "Computing discrete logs is easy",
      "Factoring $n$ is hard",
      "Modular exponentiation is slow"
    ],
    correct: 0,
    explanation: "CDH assumes that given $g$, $g^a$, $g^b$, computing $g^{ab}$ without knowing $a$ or $b$ is computationally hard."
  },

  // ========== ELLIPTIC CURVES ==========
  {
    question: "Why is ECC more efficient than RSA?",
    options: [
      "Same security with smaller key sizes",
      "It uses simpler math",
      "It doesn't need prime numbers",
      "It's less secure but faster"
    ],
    correct: 0,
    explanation: "The discrete log problem on elliptic curves is harder, allowing the same security level with much smaller keys (256-bit ECC ≈ 3072-bit RSA)."
  },
  {
    question: "What operation replaces exponentiation in elliptic curve cryptography?",
    options: [
      "Scalar multiplication ($nP = P + P + \\cdots + P$)",
      "Division",
      "Subtraction",
      "Matrix multiplication"
    ],
    correct: 0,
    explanation: "Scalar multiplication (adding a point to itself $n$ times) is the EC equivalent of exponentiation in regular DH."
  },
  {
    question: "What is the identity element in an elliptic curve group?",
    options: [
      "The point at infinity",
      "The origin $(0, 0)$",
      "The point $(1, 1)$",
      "There is no identity"
    ],
    correct: 0,
    explanation: "The point at infinity (denoted $\\mathcal{O}$ or $\\infty$) is the identity: $P + \\mathcal{O} = P$ for all points $P$."
  },
  {
    question: "The equation for a typical elliptic curve is:",
    options: [
      "$y^2 = x^3 + ax + b$",
      "$y = x^2 + a$",
      "$y^2 = x^2 + 1$",
      "$y = x^3$"
    ],
    correct: 0,
    explanation: "Elliptic curves used in cryptography typically have the Weierstrass form $y^2 = x^3 + ax + b$."
  },
  {
    question: "What is the elliptic curve discrete log problem (ECDLP)?",
    options: [
      "Given $P$ and $Q = nP$, find $n$",
      "Find points on the curve",
      "Compute $P + Q$",
      "Factor the curve parameters"
    ],
    correct: 0,
    explanation: "ECDLP: Given points $P$ and $Q$ where $Q = nP$, finding the scalar $n$ is believed to be computationally hard."
  },
  {
    question: "Bitcoin uses which elliptic curve?",
    options: [
      "secp256k1",
      "P-256",
      "Curve25519",
      "brainpoolP256r1"
    ],
    correct: 0,
    explanation: "Bitcoin and many cryptocurrencies use the secp256k1 curve for ECDSA signatures."
  }
];

const QuizSystem = {
  currentQuestion: 0,
  score: 0,
  answered: false,
  answers: [],
  shuffledCorrectIndex: 0,
  shuffledOptions: [],
  selectedQuestions: [], // Randomly selected subset of questions for this quiz
  questionsPerQuiz: 20,  // Number of questions per quiz attempt

  // Fisher-Yates shuffle for arrays
  shuffleArray(array) {
    const arr = [...array];
    for (let i = arr.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [arr[i], arr[j]] = [arr[j], arr[i]];
    }
    return arr;
  },

  // Fisher-Yates shuffle that returns new array and tracks where correct answer moved
  shuffleOptions(options, correctIndex) {
    // Create array of {option, isCorrect} objects
    const items = options.map((opt, i) => ({
      option: opt,
      isCorrect: i === correctIndex
    }));

    // Fisher-Yates shuffle
    for (let i = items.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [items[i], items[j]] = [items[j], items[i]];
    }

    // Find new correct index and extract options
    const shuffledOptions = items.map(item => item.option);
    const newCorrectIndex = items.findIndex(item => item.isCorrect);

    return { shuffledOptions, correctIndex: newCorrectIndex };
  },

  init() {
    this.currentQuestion = 0;
    this.score = 0;
    this.answered = false;
    this.answers = [];

    // Shuffle all questions and pick a random subset
    const shuffled = this.shuffleArray(quizQuestions);
    this.selectedQuestions = shuffled.slice(0, this.questionsPerQuiz);

    this.showQuestion();
    this.updateProgress();
  },

  showQuestion() {
    const q = this.selectedQuestions[this.currentQuestion];
    this.answered = false;

    // Shuffle the options
    const { shuffledOptions, correctIndex } = this.shuffleOptions(q.options, q.correct);
    this.shuffledOptions = shuffledOptions;
    this.shuffledCorrectIndex = correctIndex;

    document.getElementById('questionNumber').textContent = `Question ${this.currentQuestion + 1} of ${this.selectedQuestions.length}`;
    document.getElementById('questionText').innerHTML = renderLatex(q.question);

    const optionsContainer = document.getElementById('optionsContainer');
    optionsContainer.innerHTML = '';

    this.shuffledOptions.forEach((option, index) => {
      const div = document.createElement('div');
      div.className = 'quiz-option';
      div.innerHTML = renderLatex(option);
      div.onclick = () => this.selectOption(index);
      optionsContainer.appendChild(div);
    });

    document.getElementById('feedback').className = 'quiz-feedback';
    document.getElementById('feedback').innerHTML = '';
    document.getElementById('nextBtn').style.display = 'none';
  },

  selectOption(index) {
    if (this.answered) return;
    this.answered = true;

    const q = this.selectedQuestions[this.currentQuestion];
    const options = document.querySelectorAll('.quiz-option');
    const feedback = document.getElementById('feedback');

    this.answers.push({
      question: this.currentQuestion,
      selected: index,
      correct: this.shuffledCorrectIndex
    });

    options.forEach((opt, i) => {
      opt.onclick = null;
      if (i === this.shuffledCorrectIndex) {
        opt.classList.add('correct');
      } else if (i === index && index !== this.shuffledCorrectIndex) {
        opt.classList.add('incorrect');
      }
    });

    if (index === this.shuffledCorrectIndex) {
      this.score++;
      feedback.className = 'quiz-feedback show correct';
      feedback.innerHTML = `<strong>Correct!</strong> ${renderLatex(q.explanation)}`;
    } else {
      feedback.className = 'quiz-feedback show incorrect';
      feedback.innerHTML = `<strong>Not quite.</strong> ${renderLatex(q.explanation)}`;
    }

    document.getElementById('nextBtn').style.display = 'inline-block';
    this.updateProgress();
  },

  nextQuestion() {
    this.currentQuestion++;

    if (this.currentQuestion >= this.selectedQuestions.length) {
      this.showResults();
    } else {
      this.showQuestion();
      this.updateProgress();
    }
  },

  updateProgress() {
    const progress = ((this.currentQuestion + (this.answered ? 1 : 0)) / this.selectedQuestions.length) * 100;
    document.getElementById('quizProgress').style.width = `${progress}%`;
    document.getElementById('scoreDisplay').textContent = `Score: ${this.score}/${this.currentQuestion + (this.answered ? 1 : 0)}`;
  },

  showResults() {
    const percentage = Math.round((this.score / this.selectedQuestions.length) * 100);

    // Report to gamification system
    if (window.Gamification) {
      window.Gamification.completeQuiz(this.score, this.selectedQuestions.length);
    }

    let message, messageClass;
    if (percentage === 100) {
      message = "Perfect score! You've mastered the mathematics of cryptography!";
      messageClass = 'success';
    } else if (percentage >= 80) {
      message = "Excellent work! You have a strong understanding of crypto math.";
      messageClass = 'success';
    } else if (percentage >= 60) {
      message = "Good effort! Consider reviewing the topics you missed.";
      messageClass = 'warning';
    } else {
      message = "Keep learning! Review the lessons and try again.";
      messageClass = 'error';
    }

    // Calculate XP earned
    const xpEarned = this.score * 5 + (percentage === 100 ? 100 : 0);

    document.getElementById('quizContainer').innerHTML = `
      <div class="card" style="text-align: center; padding: 3rem;">
        <h2>Quiz Complete!</h2>
        <div class="stats" style="margin: 2rem 0;">
          <div class="stat">
            <div class="stat-value">${this.score}/${this.selectedQuestions.length}</div>
            <div class="stat-label">Correct</div>
          </div>
          <div class="stat">
            <div class="stat-value">${percentage}%</div>
            <div class="stat-label">Score</div>
          </div>
          <div class="stat">
            <div class="stat-value" style="color: var(--success);">+${xpEarned}</div>
            <div class="stat-label">XP Earned</div>
          </div>
        </div>
        <p style="font-size: 1.1rem; color: var(--${messageClass});">${message}</p>
        <div style="margin-top: 2rem;">
          <button class="btn btn-primary" onclick="QuizSystem.init()">Try Again</button>
          <a href="../index.html" class="btn btn-secondary">Back to Lessons</a>
        </div>
      </div>
    `;
  }
};

// Export
window.quizQuestions = quizQuestions;
window.QuizSystem = QuizSystem;
