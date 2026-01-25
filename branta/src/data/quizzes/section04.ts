import type { QuizQuestion } from './types';

export const section04Questions: QuizQuestion[] = [
  {
    id: 1,
    type: 'multiple-choice',
    question: 'What is a Man-in-the-Middle (MITM) attack?',
    options: [
      'An attacker secretly intercepts and alters communications between two parties',
      'A denial of service attack on a server',
      'Stealing credentials through fake login pages',
      'Exploiting software bugs to gain system access',
    ],
    correctIndex: 0,
    difficulty: 'easy',
    explanation: 'MITM attacks involve an attacker positioning themselves between two communicating parties to intercept and potentially alter their messages.',
  },
  {
    id: 2,
    type: 'multiple-choice',
    question: 'What is ARP spoofing?',
    options: [
      'Injecting malicious code into web pages',
      'Sending fake ARP messages to link attacker\\'s MAC with a legitimate IP',
      'Redirecting DNS queries to malicious servers',
      'Creating fake wireless access points',
    ],
    correctIndex: 1,
    difficulty: 'medium',
    explanation: 'ARP spoofing involves sending fake ARP messages on a local network to associate the attacker\'s MAC address with a legitimate IP address.',
  },
  {
    id: 3,
    type: 'multiple-choice',
    question: 'Why isn\'t HTTPS always sufficient protection against MITM attacks?',
    options: [
      'HTTPS only encrypts data, not metadata',
      'HTTPS is too slow for real-time verification',
      'HTTPS doesn\\'t work with Bitcoin addresses',
      'Certificate authorities can be compromised or attackers can obtain valid certificates',
    ],
    correctIndex: 3,
    difficulty: 'medium',
    explanation: 'HTTPS can be defeated through compromised CAs, corporate proxy root certificates, self-signed certificate warnings, or malware-installed certificates.',
  },
  {
    id: 4,
    type: 'text',
    question: 'What does SSL stripping do to HTTPS connections? (Answer: "downgrades" or "strips")',
    correctAnswer: 'downgrades',
    difficulty: 'medium',
    explanation: 'SSL stripping downgrades HTTPS connections to HTTP by intercepting the initial request before encryption is established.',
  },
  {
    id: 5,
    type: 'multiple-choice',
    question: 'How does verifying with Branta from a different device help defend against MITM attacks?',
    options: [
      'Different devices use different encryption',
      'Mobile networks are immune to MITM attacks',
      'The attacker would need to compromise both network paths simultaneously',
      'Branta uses a different protocol on mobile'
    ],
    correctIndex: 2,
    difficulty: 'medium',
    explanation: 'Cross-device verification requires the attacker to have MITM position on multiple independent network paths, which is exponentially harder.',
  },
];
