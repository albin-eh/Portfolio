export const projects = [
  {
    id: 'sih-2026',
    badge: 'SIH PROJECT',
    projectNumber: '01',
    title: 'Packaged Commodity Compliance Checker',
    shortDescription:
      'An AI-powered system designed to analyze packaged commodity labels using computer vision and OCR, then validate required declarations against applicable Legal Metrology rules.',
    tech: ['AI', 'Computer Vision', 'OCR', 'Python', 'Rule Validation'],
    status: 'SIH 2026',
    problem:
      'Packaging labels often contain critical declaration information that must be checked against legal requirements, but manual validation is slow and inconsistent.',
    solution:
      'A decision-support system that reads product labels, extracts key text fields, identifies the relevant commodity category, and checks them against legal rules to surface compliant or non-compliant declarations.',
    approach:
      'The system combines visual region detection, OCR, field interpretation, and rule-based validation to create an evidence-backed inspection workflow for packaged commodities.',
    workflow: [
      'Product Image',
      'Region Detection',
      'OCR',
      'Field Understanding',
      'Commodity Identification',
      'Applicable Rule Selection',
      'Declaration Validation',
      'Visual Property Analysis',
      'Evidence-backed Findings',
      'Inspection Report',
    ],
    techStack: ['AI', 'Computer Vision', 'OCR', 'Python', 'Rule Validation'],
    impact:
      'The project is designed to improve inspection consistency, reduce manual review effort, and strengthen evidence-based compliance checking.',
    learning:
      'This project strengthened my understanding of AI-driven document interpretation, rule mapping, and practical validation workflows.',
    future: 'Future work could include more robust rule coverage, stronger product category classification, and a cleaner inspection dashboard.',
  },
  {
    id: 'habit-tracker',
    badge: 'PROTOTYPE',
    projectNumber: '02',
    title: 'AI Automated Habit Tracker',
    shortDescription:
      'An AI-assisted habit tracking concept designed to help users monitor routines, understand patterns, and build more consistent habits.',
    tech: ['AI', 'Python', 'Data Analysis', 'Frontend'],
    status: 'Prototype / Concept',
    problem:
      'People often track habits manually, which makes it harder to notice patterns, missed routines, or meaningful momentum over time.',
    solution:
      'A concept system that combines habit logging, AI-assisted pattern recognition, and minimal insight summaries to help users understand what is driving consistency.',
    approach:
      'The idea focuses on making habit data more actionable through lightweight analysis and user-friendly visual summaries.',
    workflow: ['Problem', 'AI-assisted solution', 'Tracking', 'Insights'],
    techStack: ['AI', 'Python', 'Data Analysis', 'Frontend'],
    impact:
      'The concept is aimed at helping users reflect more clearly on their routines without building a heavy, overwhelming tracking system.',
    learning:
      'This concept helped me think through how AI can support behavior change while staying simple and useful.',
    future: 'A future version could add richer insights, weekly summaries, and more personalized recommendations.',
  },
  {
    id: 'experiments',
    badge: 'EXPLORATION',
    projectNumber: '03',
    title: 'Cybersecurity & AI Experiments',
    shortDescription:
      'Hands-on exploration across cybersecurity, AI, automation, OSINT, and emerging development technologies.',
    tech: ['Cybersecurity', 'AI', 'Python', 'OSINT', 'Automation'],
    status: 'Learning & Experimentation',
    problem:
      'Emerging technologies evolve quickly, and hands-on experimentation is often the fastest way to build intuition and technical confidence.',
    solution:
      'A learning-focused exploration pipeline covering practical experiments in security concepts, AI workflows, automation, and related tooling.',
    approach:
      'Each experiment is designed to test a small concept deeply enough to understand the real-world trade-offs, tools, and limitations involved.',
    workflow: ['Explore', 'Test', 'Learn', 'Refine'],
    techStack: ['Cybersecurity', 'AI', 'Python', 'OSINT', 'Automation'],
    impact:
      'The focus is on building practical understanding rather than claiming finished products or validated metrics.',
    learning:
      'This work has shaped how I approach learning: iterate quickly, validate assumptions, and connect technical curiosity to real projects.',
    future: 'I aim to convert these experiments into more polished tools and applied prototypes over time.',
  },
]
