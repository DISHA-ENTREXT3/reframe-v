export interface CorePackage {
  id: string;
  title: string;
  tagline: string;
  summary: string;
  deliverables: string[];
  differentiators: {
    investmentThinking: string;
    partnerExpertise: string;
    portfolioStorytelling: string;
  };
  bestFor: string;
  sampleAsset: string;
  cadence: string;
}

export interface ServiceItem {
  id: string;
  title: string;
  summary: string;
  tagline: string;
  deliverables: string[];
  privateMarketValue: string;
  sampleHeadline: string;
}

export interface ReframeTransformation {
  id: string;
  before: string;
  beforeDescription: string;
  after: string;
  afterDescription: string;
  example: string;
}

export interface IdeaTravelNode {
  id: string;
  title: string;
  format: string;
  channel: string;
  purpose: string;
  deliverableExample: string;
}

export interface ClientProfile {
  id: string;
  name: string;
  context: string;
  typicalNeed: string;
  outcomes: string[];
}

export interface TeamMember {
  id: string;
  name: string;
  role: string;
  bioParagraphs: string[];
  focusAreas: string[];
  quote: string;
}

export interface WorkProofItem {
  id: string;
  client: string;
  category: string;
  tagline: string;
  description: string;
  image: string;
  narrativeAngle: string;
  distributionStrategy: string;
  attributionNote: string;
}

export interface PrincipleItem {
  id: string;
  title: string;
  description: string;
  inPractice: string;
  signalExtracted: string;
}

export interface TestimonialItem {
  id: string;
  quote: string;
  author: string;
  role: string;
  firm: string;
  firmType: 'Private Equity' | 'Growth Equity' | 'Venture Capital' | 'Family Office';
  location: string;
  metric: string;
  metricLabel: string;
  context: string;
  avatarInitials: string;
  fundSize?: string;
}
