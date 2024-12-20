export interface Project {
  id: number;

  image: string;

  coverImage: string;
  className: string;
  title: string;

  tags: string[];
  duration: string;
  team: string;
  description: string;

  RelatedLinksSection: {
    gitHub: string;
    backLog?: string;
    url?: string;
    figma?: string;
    gerrit?: string;
    jira?: string;
  };

  ScreenshotSection: {
    url?: string;
    img: string[];
  };

  BackgroundSection: {
    text?: string[];
    img?: string[];
  };

  IssuesBacklogSection: {
    text?: string[];
    url?: string[];
    img?: string[];
  };

  DatabaseSection?: {
    text?: string[];
    img?: string[];
  };

  SystemArchitectureSection?: {
    text: string[];
    img: string[];
  };

  SkillsSection?: {
    img: string[];
  };

  ConventionSection: {
    text?: string[];
    img: string[];
  };

  FeatureStatementSection?: {
    text?: string[];
    img: string[];
  };

  ApiStatementSection?: {
    text: string[];
    img: string[];
  };

  MyFeatureSection: {
    text?: string[];
    img: string[];
  };

  RetrospectiveSection?: {
    text?: string[];
    img?: string[];
  };

  ImprovementSection?: {
    text: string[];
    img: string[];
  };
}
