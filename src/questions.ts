export {};

// questions.ts

export interface QuizQuestion {
    id: string;
    text: string;
    type: 'likert' | 'multiple';
    axis: 'x';
    factor: string;
    options?: {
      label: string;
      value: number;
    }[];
  }
  
  export const xAxisQuestions: QuizQuestion[] = [
    // 1. Identity through authority a person chooses to govern them
    {
      id: 'x1',
      factor: 'Identity through authority a person chooses to govern them',
      text: 'We should have the freedom to challenge traditional forms of government and explore new systems of leadership and accountability.',
      type: 'likert',
      axis: 'x',
    },
    {
      id: 'x2',
      factor: 'Identity through authority a person chooses to govern them',
      text: 'Which of the following best reflects your view of how authority should be established?',
      type: 'multiple',
      axis: 'x',
      options: [
        { label: 'Governments must derive legitimacy from tradition and historical roots', value: -2 },
        { label: 'Leaders should be accountable to the nation and its people above global bodies', value: -1 },
        { label: 'Authority should be flexible, decentralised, and locally or democratically chosen', value: +1 },
        { label: 'New forms of global and digital leadership should be explored beyond nation-states', value: +2 },
      ],
    },
  
    // 2. Identity through national belonging and global citizenship
    {
      id: 'x3',
      factor: 'Identity through national belonging and global citizenship',
      text: 'In today’s world, we should move beyond national borders and start thinking of ourselves as global citizens.',
      type: 'likert',
      axis: 'x',
    },
    {
      id: 'x4',
      factor: 'Identity through national belonging and global citizenship',
      text: 'Which of the following best reflects your identity?',
      type: 'multiple',
      axis: 'x',
      options: [
        { label: 'I feel strongest loyalty to my country or place of origin', value: -2 },
        { label: 'I relate most to people who share my culture, background, or religion', value: -1 },
        { label: 'I feel part of many places or communities around the world', value: +1 },
        { label: 'I see myself as a global citizen before anything else', value: +2 },
      ],
    },
  
    // 3. Identity via Consumerism
    {
      id: 'x5',
      factor: 'Identity via Consumerism',
      text: 'People should be free to choose products from around the world without cultural or national restrictions.',
      type: 'likert',
      axis: 'x',
    },
    {
      id: 'x6',
      factor: 'Identity via Consumerism',
      text: 'Which best reflects your view of modern consumer culture?',
      type: 'multiple',
      axis: 'x',
      options: [
        { label: 'Foreign consumerism threatens national culture', value: -2 },
        { label: 'People should support their nation’s products first', value: -1 },
        { label: 'Choice is good, but we should preserve local traditions', value: +1 },
        { label: 'Global brands and lifestyles are enriching society', value: +2 },
      ],
    },
  
    // 4. Identity via cultural exchange in the global village
    {
      id: 'x7',
      factor: 'Identity via cultural exchange in the global village',
      text: 'A society is stronger when it includes people from a wide variety of backgrounds, cultures, and ethnicities.',
      type: 'likert',
      axis: 'x',
    },
    {
      id: 'x8',
      factor: 'Identity via cultural exchange in the global village',
      text: 'Migrants who come to a country should be fully accepted as part of the national community, regardless of their background.',
      type: 'likert',
      axis: 'x',
    },
  
    // 5. Identity via Sociolinguistics
    {
      id: 'x9',
      factor: 'Identity via Sociolinguistics',
      text: 'People should follow a country’s cultural and legal rules about what can and cannot be said.',
      type: 'likert',
      axis: 'x',
    },
    {
      id: 'x10',
      factor: 'Identity via Sociolinguistics',
      text: 'Media and public communication should reflect global cultural diversity and be sensitive to different backgrounds.',
      type: 'likert',
      axis: 'x',
    },
  
    // 6. Identity via Faith, religion, nature and consciousness
    {
      id: 'x11',
      factor: 'Identity via Faith, religion, nature and consciousness',
      text: 'Faith, religion, and spirituality are universal human experiences that should be respected across borders.',
      type: 'likert',
      axis: 'x',
    },
    {
      id: 'x12',
      factor: 'Identity via Faith, religion, nature and consciousness',
      text: 'One religion in particular provides the strongest foundation for national identity, morality, and governance.',
      type: 'likert',
      axis: 'x',
    },
  
    // 7. Identity via Ethics and Morals
    {
      id: 'x13',
      factor: 'Identity via Ethics and Morals',
      text: 'We should seek a shared moral language that unites people across nations, cultures, and backgrounds.',
      type: 'likert',
      axis: 'x',
    },
    {
      id: 'x14',
      factor: 'Identity via Ethics and Morals',
      text: 'Each country has the right to determine what is morally acceptable, based on its own cultural heritage.',
      type: 'likert',
      axis: 'x',
    },
  
    // 8. Identity via Law and Justice
    {
      id: 'x15',
      factor: 'Identity via Law and Justice',
      text: 'Laws should reflect universal human rights and apply equally to all people regardless of where they live.',
      type: 'likert',
      axis: 'x',
    },
    {
      id: 'x16',
      factor: 'Identity via Law and Justice',
      text: 'Justice means giving people what they deserve — an eye for an eye when necessary.',
      type: 'likert',
      axis: 'x',
    },
  
    // 9. Identity via Historical Narrative and Memory
    {
      id: 'x17',
      factor: 'Identity via Historical Narrative and Memory',
      text: 'History should be used to learn from others and build a shared global understanding of progress.',
      type: 'likert',
      axis: 'x',
    },
    {
      id: 'x18',
      factor: 'Identity via Historical Narrative and Memory',
      text: 'A nation’s story is sacred — attempts to rewrite it from outside are an attack on identity.',
      type: 'likert',
      axis: 'x',
    },
  ];
  