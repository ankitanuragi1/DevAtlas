export interface LearningTopic {
  slug: string;
  title: string;
}

export interface LearningSubgroup {
  title: string;
  items: LearningTopic[];
}

export interface LearningGroup {
  title: string;
  slugs: string[];
  subgroups?: LearningSubgroup[];
}

export interface LearningNavigation {
  technology: string;
  groups: LearningGroup[];
}