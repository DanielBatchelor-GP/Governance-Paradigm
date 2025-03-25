// yAxisQuestions.ts

export interface QuizQuestion {
    id: string;
    text: string;
    type: 'likert';
    axis: 'y';
    factor: string;
  }
  
  export const yAxisQuestions: QuizQuestion[] = [
    // 1. The State and Contractarianism
    {
      id: 'y1',
      factor: 'The State and Contractarianism',
      text: 'A government’s legitimacy comes from a social contract with its citizens, grounded in law and democratic values.',
      type: 'likert',
      axis: 'y',
    },
    {
      id: 'y2',
      factor: 'The State and Contractarianism',
      text: 'The state should be free to explore radical new ways of governing, even if that means breaking from established norms.',
      type: 'likert',
      axis: 'y',
    },
  
    // 2. Law and Order
    {
      id: 'y3',
      factor: 'Law and Order',
      text: 'Maintaining law and order requires protecting individual rights and ensuring justice applies equally to all.',
      type: 'likert',
      axis: 'y',
    },
    {
      id: 'y4',
      factor: 'Law and Order',
      text: 'Sometimes the safety and protection of the majority must come before individual freedoms.',
      type: 'likert',
      axis: 'y',
    },
  
    // 3. The Market Economy
    {
      id: 'y5',
      factor: 'The Market Economy',
      text: 'A competitive free market is the best system for innovation, growth, and prosperity.',
      type: 'likert',
      axis: 'y',
    },
    {
      id: 'y6',
      factor: 'The Market Economy',
      text: 'We should explore alternative economic models, including those not based on profit or private ownership.',
      type: 'likert',
      axis: 'y',
    },
  
    // 4. Citizens and their Rights
    {
      id: 'y7',
      factor: 'Citizens and their Rights',
      text: 'The state must protect every citizen’s rights, including equality before the law and protection from discrimination.',
      type: 'likert',
      axis: 'y',
    },
    {
      id: 'y8',
      factor: 'Citizens and their Rights',
      text: 'Not all citizens need the same rights or freedoms; governments should adapt protections based on the needs of the time.',
      type: 'likert',
      axis: 'y',
    },
  
    // 5. Education and Social Engineering
    {
      id: 'y9',
      factor: 'Education and Social Engineering',
      text: 'Education should develop responsible citizens who respect democracy, diversity, and evidence-based knowledge.',
      type: 'likert',
      axis: 'y',
    },
    {
      id: 'y10',
      factor: 'Education and Social Engineering',
      text: 'Education should shape minds to pursue national pride, traditional values, or challenge global ideologies.',
      type: 'likert',
      axis: 'y',
    },
  
    // 6. Social Equity and Public Resources
    {
      id: 'y11',
      factor: 'Social Equity and Public Resources',
      text: 'Government should provide universal services like healthcare, housing, and education to promote equality.',
      type: 'likert',
      axis: 'y',
    },
    {
      id: 'y12',
      factor: 'Social Equity and Public Resources',
      text: 'State support can create dependency — citizens should rely more on themselves or private institutions.',
      type: 'likert',
      axis: 'y',
    },
  
    // 7. The Global Order
    {
      id: 'y13',
      factor: 'The Global Order',
      text: 'International organisations are essential for global peace, diplomacy, and human progress.',
      type: 'likert',
      axis: 'y',
    },
    {
      id: 'y14',
      factor: 'The Global Order',
      text: 'The post-war global order is outdated and should be replaced with new forms of cooperation or competition.',
      type: 'likert',
      axis: 'y',
    },
  
    // 8. The Planet and Nature
    {
      id: 'y15',
      factor: 'The Planet and Nature',
      text: 'States must collaborate on climate change and sustainability based on science and global agreements.',
      type: 'likert',
      axis: 'y',
    },
    {
      id: 'y16',
      factor: 'The Planet and Nature',
      text: 'Environmental priorities are often driven by ideology — each nation should decide how to manage its resources.',
      type: 'likert',
      axis: 'y',
    },
  
    // 9. Governance, Bureaucracy, and Institutional Stability
    {
      id: 'y17',
      factor: 'Governance, Bureaucracy, and Institutional Stability',
      text: 'Well-established institutions and civil services ensure fairness, continuity, and effective government.',
      type: 'likert',
      axis: 'y',
    },
    {
      id: 'y18',
      factor: 'Governance, Bureaucracy, and Institutional Stability',
      text: 'Bureaucracies are slow and self-serving — we need leaner, decentralised or even tech-driven alternatives.',
      type: 'likert',
      axis: 'y',
    },
  ];
  