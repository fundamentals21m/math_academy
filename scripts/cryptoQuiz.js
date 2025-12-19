// Cryptography Math Quiz Module

const quizQuestions = [
  // Modular Arithmetic
  {
    question: "What is 17 mod 5?",
    options: ["2", "3", "4", "5"],
    correct: 0,
    explanation: "17 ÷ 5 = 3 remainder 2. So 17 mod 5 = 2."
  },
  {
    question: "If a ≡ b (mod n), what does this mean?",
    options: [
      "a and b have the same remainder when divided by n",
      "a equals b",
      "a is greater than b",
      "n divides a but not b"
    ],
    correct: 0,
    explanation: "The congruence notation a ≡ b (mod n) means a and b leave the same remainder when divided by n."
  },
  {
    question: "What is (-3) mod 7 in cryptographic terms?",
    options: ["4", "-3", "3", "0"],
    correct: 0,
    explanation: "In cryptography, we always use positive remainders. -3 mod 7 = 7 - 3 = 4."
  },

  // Prime Numbers
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
    options: ["91", "89", "97", "83"],
    correct: 0,
    explanation: "91 = 7 × 13. The other numbers are all prime."
  },

  // GCD and Euclidean Algorithm
  {
    question: "What is GCD(48, 18)?",
    options: ["6", "3", "9", "12"],
    correct: 0,
    explanation: "Using the Euclidean algorithm: 48 = 18×2 + 12, 18 = 12×1 + 6, 12 = 6×2 + 0. GCD = 6."
  },
  {
    question: "What does the Extended Euclidean Algorithm find?",
    options: [
      "Integers x, y such that ax + by = GCD(a, b)",
      "The prime factors of a number",
      "The largest prime less than n",
      "The modular square root"
    ],
    correct: 0,
    explanation: "The Extended Euclidean Algorithm finds Bézout coefficients x and y satisfying ax + by = GCD(a, b)."
  },

  // Modular Inverse
  {
    question: "When does a modular inverse of a mod n exist?",
    options: [
      "When GCD(a, n) = 1",
      "When a < n",
      "When n is prime",
      "Always"
    ],
    correct: 0,
    explanation: "The modular inverse exists if and only if a and n are coprime (GCD = 1)."
  },
  {
    question: "What is 3⁻¹ mod 7?",
    options: ["5", "3", "4", "2"],
    correct: 0,
    explanation: "3 × 5 = 15 = 2×7 + 1, so 3 × 5 ≡ 1 (mod 7). Therefore 3⁻¹ ≡ 5 (mod 7)."
  },

  // Euler's Totient
  {
    question: "What is φ(12)?",
    options: ["4", "6", "8", "11"],
    correct: 0,
    explanation: "Numbers coprime to 12 are: 1, 5, 7, 11. So φ(12) = 4."
  },
  {
    question: "For a prime p, what is φ(p)?",
    options: ["p - 1", "p", "p + 1", "p / 2"],
    correct: 0,
    explanation: "Every number from 1 to p-1 is coprime to a prime p, so φ(p) = p - 1."
  },

  // Modular Exponentiation
  {
    question: "What makes square-and-multiply efficient?",
    options: [
      "It uses the binary representation of the exponent",
      "It only works with small numbers",
      "It skips the mod operation",
      "It uses floating point arithmetic"
    ],
    correct: 0,
    explanation: "Square-and-multiply reduces O(n) multiplications to O(log n) by using the binary representation of the exponent."
  },

  // Discrete Logarithm
  {
    question: "What is the discrete logarithm problem?",
    options: [
      "Given g^x mod p = h, find x",
      "Compute g^x mod p given x",
      "Find the prime factors of n",
      "Compute the GCD of two numbers"
    ],
    correct: 0,
    explanation: "The discrete log problem is finding the exponent x given g, h, and p where g^x ≡ h (mod p). This is believed to be computationally hard."
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

  // RSA
  {
    question: "In RSA, what is the relationship between e and d?",
    options: [
      "e × d ≡ 1 (mod φ(n))",
      "e + d = n",
      "e = d",
      "e × d = n"
    ],
    correct: 0,
    explanation: "The decryption exponent d is the modular inverse of e modulo φ(n), so e × d ≡ 1 (mod φ(n))."
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

  // Diffie-Hellman
  {
    question: "In Diffie-Hellman, what can an eavesdropper see?",
    options: [
      "g, p, g^a mod p, and g^b mod p",
      "The shared secret",
      "Alice's private key a",
      "Bob's private key b"
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

  // Elliptic Curves
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
      "Scalar multiplication (nP = P + P + ... + P)",
      "Division",
      "Subtraction",
      "Matrix multiplication"
    ],
    correct: 0,
    explanation: "Scalar multiplication (adding a point to itself n times) is the EC equivalent of exponentiation in regular DH."
  }
];

const QuizSystem = {
  currentQuestion: 0,
  score: 0,
  answered: false,
  answers: [],
  shuffledCorrectIndex: 0,
  shuffledOptions: [],

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
    this.showQuestion();
    this.updateProgress();
  },

  showQuestion() {
    const q = quizQuestions[this.currentQuestion];
    this.answered = false;

    // Shuffle the options
    const { shuffledOptions, correctIndex } = this.shuffleOptions(q.options, q.correct);
    this.shuffledOptions = shuffledOptions;
    this.shuffledCorrectIndex = correctIndex;

    document.getElementById('questionNumber').textContent = `Question ${this.currentQuestion + 1} of ${quizQuestions.length}`;
    document.getElementById('questionText').textContent = q.question;

    const optionsContainer = document.getElementById('optionsContainer');
    optionsContainer.innerHTML = '';

    this.shuffledOptions.forEach((option, index) => {
      const div = document.createElement('div');
      div.className = 'quiz-option';
      div.textContent = option;
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

    const q = quizQuestions[this.currentQuestion];
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
      feedback.innerHTML = `<strong>Correct!</strong> ${q.explanation}`;
    } else {
      feedback.className = 'quiz-feedback show incorrect';
      feedback.innerHTML = `<strong>Not quite.</strong> ${q.explanation}`;
    }

    document.getElementById('nextBtn').style.display = 'inline-block';
    this.updateProgress();
  },

  nextQuestion() {
    this.currentQuestion++;

    if (this.currentQuestion >= quizQuestions.length) {
      this.showResults();
    } else {
      this.showQuestion();
      this.updateProgress();
    }
  },

  updateProgress() {
    const progress = ((this.currentQuestion + (this.answered ? 1 : 0)) / quizQuestions.length) * 100;
    document.getElementById('quizProgress').style.width = `${progress}%`;
    document.getElementById('scoreDisplay').textContent = `Score: ${this.score}/${this.currentQuestion + (this.answered ? 1 : 0)}`;
  },

  showResults() {
    const percentage = Math.round((this.score / quizQuestions.length) * 100);

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

    document.getElementById('quizContainer').innerHTML = `
      <div class="card" style="text-align: center; padding: 3rem;">
        <h2>Quiz Complete!</h2>
        <div class="stats" style="margin: 2rem 0;">
          <div class="stat">
            <div class="stat-value">${this.score}/${quizQuestions.length}</div>
            <div class="stat-label">Correct</div>
          </div>
          <div class="stat">
            <div class="stat-value">${percentage}%</div>
            <div class="stat-label">Score</div>
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
