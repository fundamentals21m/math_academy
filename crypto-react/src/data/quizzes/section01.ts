import type { QuizQuestion } from './types';

export const section01Quiz = {
  easy: [
    {
      id: 's01-e01',
      type: 'multiple-choice',
      question: 'What is the primary goal of cryptography?',
      options: [
        'To make communication faster',
        'To secure information from unauthorized access',
        'To compress data for storage',
        'To convert analog signals to digital'
      ],
      correctIndex: 1,
      difficulty: 'easy',
      explanation: 'Cryptography is the science of securing information and communications so that only authorized parties can access it.'
    },
    {
      id: 's01-e02',
      type: 'multiple-choice',
      question: 'In symmetric cryptography, how many keys are used?',
      options: [
      'One key',
      'Two keys',
      'Three keys',
      'No keys',
    ],
      correctIndex: 0,
      difficulty: 'easy',
      explanation: 'Symmetric cryptography uses a single shared key for both encryption and decryption.'
    },
    {
      id: 's01-e03',
      type: 'multiple-choice',
      question: 'What is a one-way function?',
      options: [
      'A function that can only be computed once',
      'A function that always returns the same value',
      'A function that is easy to compute but hard to reverse',
      'A function that works in one direction only on a network',
    ],
      correctIndex: 2,
      difficulty: 'easy',
      explanation: 'A one-way function is easy to compute in one direction but computationally infeasible to reverse without special information.'
    },
    {
      id: 's01-e04',
      type: 'multiple-choice',
      question: 'Which of the following is an example of symmetric encryption?',
      options: [
      'RSA',
      'AES',
      'Diffie-Hellman',
      'ECC',
    ],
      correctIndex: 1,
      difficulty: 'easy',
      explanation: 'AES (Advanced Encryption Standard) is a symmetric encryption algorithm that uses the same key for encryption and decryption.'
    },
    {
      id: 's01-e05',
      type: 'multiple-choice',
      question: 'In asymmetric cryptography, the public key is used for:',
      options: [
      'Decryption only',
      'Neither encryption nor decryption',
      'Both encryption and decryption',
      'Encryption only',
    ],
      correctIndex: 3,
      difficulty: 'easy',
      explanation: 'In asymmetric cryptography, the public key is used for encryption, while the private key is used for decryption.'
    },
    {
      id: 's01-e06',
      type: 'numeric',
      question: 'If symmetric encryption uses 1 key and asymmetric uses a key pair, how many total keys are involved when Alice sends an encrypted message to Bob using asymmetric encryption?',
      correctAnswer: 2,
      numericRange: { min: 1, max: 10 },
      difficulty: 'easy',
      explanation: 'In asymmetric encryption, there are 2 keys: Bob\'s public key (for encryption) and Bob\'s private key (for decryption).'
    },
    {
      id: 's01-e07',
      type: 'multiple-choice',
      question: 'What does "plaintext" refer to in cryptography?',
      options: [
      'Encrypted data',
      'The encryption key',
      'Unencrypted, readable data',
      'A type of cipher',
    ],
      correctIndex: 2,
      difficulty: 'easy',
      explanation: 'Plaintext is the original, unencrypted data that can be read by anyone.'
    },
    {
      id: 's01-e08',
      type: 'multiple-choice',
      question: 'What is "ciphertext"?',
      options: [
      'The encrypted, unreadable data',
      'The encryption algorithm',
      'The decrypted message',
      'A secret key',
    ],
      correctIndex: 0,
      difficulty: 'easy',
      explanation: 'Ciphertext is the result of encrypting plaintext; it is unreadable without the proper decryption key.'
    },
    {
      id: 's01-e09',
      type: 'numeric',
      question: 'The Caesar cipher shifts each letter by a fixed number. If A becomes D with a shift of 3, what position letter does F become? (A=1, B=2, ..., I=9)',
      correctAnswer: 9,
      numericRange: { min: 1, max: 26 },
      difficulty: 'easy',
      explanation: 'F is the 6th letter. With a shift of 3, it becomes the 9th letter, which is I.'
    },
    {
      id: 's01-e10',
      type: 'multiple-choice',
      question: 'Which term describes the study of breaking encryption?',
      options: [
      'Cryptography',
      'Cryptanalysis',
      'Steganography',
      'Cryptology',
    ],
      correctIndex: 1,
      difficulty: 'easy',
      explanation: 'Cryptanalysis is the study of analyzing and breaking cryptographic systems.'
    }
  ] as QuizQuestion[],

  medium: [
    {
      id: 's01-m01',
      type: 'multiple-choice',
      question: 'What distinguishes a trapdoor function from a regular one-way function?',
      options: [
      'Trapdoor functions are faster to compute',
      'Trapdoor functions only work with prime numbers',
      'Trapdoor functions can be reversed with secret information',
      'Trapdoor functions are impossible to reverse',
    ],
      correctIndex: 2,
      difficulty: 'medium',
      explanation: 'A trapdoor function is a one-way function that becomes easy to reverse if you know a special "trapdoor" secret, such as a private key.'
    },
    {
      id: 's01-m02',
      type: 'multiple-choice',
      question: 'Why is the integer factorization problem important for RSA?',
      options: [
      'Multiplying primes is easy, but factoring their product is hard',
      'It makes addition faster',
      'It ensures the key is always odd',
      'It generates random numbers',
    ],
      correctIndex: 0,
      difficulty: 'medium',
      explanation: 'RSA security relies on the asymmetry: multiplying two large primes is easy, but factoring their product back into the original primes is computationally hard.'
    },
    {
      id: 's01-m03',
      type: 'multiple-choice',
      question: 'In public-key cryptography, if Alice wants to send a secret message to Bob, which key should she use to encrypt?',
      options: [
      'Alice\\'s public key',
      'Bob\\'s private key',
      'Alice\\'s private key',
      'Bob\\'s public key',
    ],
      correctIndex: 3,
      difficulty: 'medium',
      explanation: 'Alice encrypts with Bob\'s public key so that only Bob (who has the corresponding private key) can decrypt it.'
    },
    {
      id: 's01-m04',
      type: 'multiple-choice',
      question: 'What is the main advantage of asymmetric cryptography over symmetric cryptography?',
      options: [
      'It eliminates the key distribution problem',
      'It is always faster',
      'It uses smaller keys',
      'It requires less memory',
    ],
      correctIndex: 0,
      difficulty: 'medium',
      explanation: 'Asymmetric cryptography solves the key distribution problem because the public key can be shared openly without compromising security.'
    },
    {
      id: 's01-m05',
      type: 'numeric',
      question: 'In a communication network with $n$ people, symmetric encryption requires each pair to share a unique key. How many keys are needed for 5 people? (Use formula $\\frac{n(n-1)}{2}$)',
      correctAnswer: 10,
      numericRange: { min: 1, max: 100 },
      difficulty: 'medium',
      explanation: 'With $n=5$, the number of keys is $\\frac{5 \\times 4}{2} = 10$. Each pair of people needs their own shared secret key.'
    },
    {
      id: 's01-m06',
      type: 'multiple-choice',
      question: 'Which property ensures that a hash function produces different outputs for different inputs?',
      options: [
      'Pre-image resistance',
      'Second pre-image resistance',
      'Collision resistance',
      'Determinism',
    ],
      correctIndex: 2,
      difficulty: 'medium',
      explanation: 'Collision resistance means it should be computationally infeasible to find two different inputs that produce the same hash output.'
    },
    {
      id: 's01-m07',
      type: 'multiple-choice',
      question: 'What is a digital signature used for?',
      options: [
      'Verifying authenticity and integrity of a message',
      'Encrypting messages',
      'Compressing data',
      'Generating random numbers',
    ],
      correctIndex: 0,
      difficulty: 'medium',
      explanation: 'Digital signatures prove that a message came from a specific sender (authenticity) and hasn\'t been altered (integrity).'
    },
    {
      id: 's01-m08',
      type: 'numeric',
      question: 'If asymmetric encryption requires 2 keys per person, how many total keys exist in a network of 8 people?',
      correctAnswer: 16,
      numericRange: { min: 1, max: 100 },
      difficulty: 'medium',
      explanation: 'Each person has a public/private key pair (2 keys). For 8 people: $8 \\times 2 = 16$ keys total.'
    },
    {
      id: 's01-m09',
      type: 'multiple-choice',
      question: 'Which of the following best describes "computational security"?',
      options: [
      'Security that can never be broken',
      'Security that uses only one computer',
      'Security based on time and computational resources needed to break it',
      'Security that requires no computation',
    ],
      correctIndex: 2,
      difficulty: 'medium',
      explanation: 'Computational security means breaking the encryption is theoretically possible but requires more computational resources than an attacker could realistically have.'
    },
    {
      id: 's01-m10',
      type: 'multiple-choice',
      question: 'What does "key exchange" refer to in cryptography?',
      options: [
      'Replacing old keys with new ones',
      'Securely sharing a secret key between parties',
      'Converting public keys to private keys',
      'Destroying used encryption keys',
    ],
      correctIndex: 1,
      difficulty: 'medium',
      explanation: 'Key exchange is the process by which two parties securely establish a shared secret key, often used for symmetric encryption.'
    }
  ] as QuizQuestion[],

  hard: [
    {
      id: 's01-h01',
      type: 'multiple-choice',
      question: 'Why can\'t symmetric cryptography alone solve the secure communication problem between strangers?',
      options: [
      'Symmetric keys are too short',
      'Symmetric encryption is too slow',
      'Symmetric algorithms are mathematically broken',
      'There is no secure way to share the secret key over an insecure channel',
    ],
      correctIndex: 3,
      difficulty: 'hard',
      explanation: 'The fundamental challenge is that symmetric encryption requires both parties to have the same secret key, but sharing that key securely over an insecure channel is impossible without additional mechanisms like public-key cryptography.'
    },
    {
      id: 's01-h02',
      type: 'multiple-choice',
      question: 'What is the relationship between $P$ and $NP$ that makes one-way functions possible?',
      options: [
      '$P = NP$, so all problems are equally hard',
      'One-way functions require $P > NP
      correctIndex: 2,
      difficulty: 'hard',
      explanation: 'The existence of one-way functions depends on $P \\neq NP$, meaning there are problems (like factoring) that are easy to verify but believed to be hard to solve in polynomial time.'
    },
      'It is widely believed that $P \\neq NP$, meaning some problems are easy to verify but hard to solve',
      '$P$ is always larger than $NP
      correctIndex: 3,
      difficulty: 'hard',
      explanation: 'The existence of one-way functions depends on $P \\neq NP$, meaning there are problems (like factoring) that are easy to verify but believed to be hard to solve in polynomial time.'
    },
    ],
      correctIndex: 3,
      difficulty: 'hard',
      explanation: 'The existence of one-way functions depends on $P \\neq NP$, meaning there are problems (like factoring) that are easy to verify but believed to be hard to solve in polynomial time.'
    },
    {
      id: 's01-h03',
      type: 'multiple-choice',
      question: 'In hybrid encryption, why is symmetric encryption still used alongside public-key encryption?',
      options: [
      'Public-key encryption cannot encrypt large amounts of data',
      'Symmetric encryption is much faster, so the asymmetric part only encrypts the symmetric key',
      'Public-key encryption is insecure for large files',
      'Symmetric encryption provides stronger security guarantees',
    ],
      correctIndex: 1,
      difficulty: 'hard',
      explanation: 'Hybrid encryption uses asymmetric encryption to securely exchange a symmetric key, then uses the faster symmetric encryption for the actual data. This combines the best of both: secure key exchange and efficient bulk encryption.'
    },
    {
      id: 's01-h04',
      type: 'numeric',
      question: 'If a brute-force attack on a 56-bit key takes 1 day, approximately how many days would it take to brute-force a 64-bit key? (Hint: each additional bit doubles the keyspace)',
      correctAnswer: 256,
      numericRange: { min: 100, max: 500 },
      difficulty: 'hard',
      explanation: 'Each additional bit doubles the search space. From 56 to 64 bits is 8 additional bits, so $2^8 = 256$ times longer. 1 day $\\times$ 256 = 256 days.'
    },
    {
      id: 's01-h05',
      type: 'multiple-choice',
      question: 'What is "forward secrecy" in cryptographic protocols?',
      options: [
      'The ability to encrypt messages to future recipients',
      'Past encrypted sessions remain secure even if long-term keys are compromised',
      'Messages can only be read in chronological order',
      'Keys become stronger over time',
    ],
      correctIndex: 1,
      difficulty: 'hard',
      explanation: 'Forward secrecy (or perfect forward secrecy) ensures that if long-term keys are compromised, previously recorded encrypted communications cannot be decrypted because each session used unique ephemeral keys.'
    },
    {
      id: 's01-h06',
      type: 'multiple-choice',
      question: 'Why is a 128-bit symmetric key considered roughly equivalent to a 3072-bit RSA key in security?',
      options: [
      'They both use the same algorithm',
      '128 times 24 equals 3072',
      'The best known attacks have similar complexity for breaking each',
      'RSA keys must always be 24 times larger',
    ],
      correctIndex: 2,
      difficulty: 'hard',
      explanation: 'Security equivalence is based on attack complexity. Brute-forcing a 128-bit symmetric key and factoring a 3072-bit RSA modulus both require approximately $2^{128}$ operations with the best known attacks.'
    },
    {
      id: 's01-h07',
      type: 'numeric',
      question: 'In a network of $n$ people using symmetric encryption, each pair needs a unique key. For 100 people, how many keys are required?',
      correctAnswer: 4950,
      numericRange: { min: 4000, max: 6000 },
      difficulty: 'hard',
      explanation: 'Using the formula $\\frac{n(n-1)}{2}$: $\\frac{100 \\times 99}{2} = \\frac{9900}{2} = 4950$ keys.'
    },
    {
      id: 's01-h08',
      type: 'multiple-choice',
      question: 'What is the "semantic security" property of an encryption scheme?',
      options: [
      'The ciphertext can be parsed grammatically',
      'Only semantically correct messages can be encrypted',
      'The encryption preserves the meaning of the message',
      'An adversary cannot learn any information about the plaintext from the ciphertext',
    ],
      correctIndex: 3,
      difficulty: 'hard',
      explanation: 'Semantic security means that an adversary with the ciphertext cannot determine any property of the plaintext that they couldn\'t determine without the ciphertext.'
    },
    {
      id: 's01-h09',
      type: 'multiple-choice',
      question: 'Why is it important that cryptographic algorithms be publicly known rather than secret?',
      options: [
      'Secret algorithms are illegal',
      'Public algorithms are faster to compute',
      'Secret algorithms cannot be implemented in software',
      'Public scrutiny helps identify vulnerabilities (Kerckhoffs\\'s principle)',
    ],
      correctIndex: 3,
      difficulty: 'hard',
      explanation: 'Kerckhoffs\'s principle states that a cryptographic system should be secure even if everything about the system, except the key, is public knowledge. Public algorithms undergo extensive peer review, finding weaknesses that secret algorithms might hide.'
    },
    {
      id: 's01-h10',
      type: 'multiple-choice',
      question: 'What is the primary threat that quantum computers pose to current public-key cryptography?',
      options: [
      'Shor\\'s algorithm can factor large numbers and solve discrete log in polynomial time',
      'They can generate truly random numbers',
      'They consume too much power',
      'They cannot perform modular arithmetic',
    ],
      correctIndex: 0,
      difficulty: 'hard',
      explanation: 'Shor\'s algorithm, when run on a sufficiently powerful quantum computer, can factor large integers and solve the discrete logarithm problem efficiently, breaking RSA and ECC-based systems.'
    }
  ] as QuizQuestion[],
};
