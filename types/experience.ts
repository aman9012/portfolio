import type { Placeholder } from "./common";

export interface ExperienceEntry {
  id: string;
  title: Placeholder;
  organization: Placeholder;
  location?: Placeholder;
  period: Placeholder;
  description: Placeholder;
  disciplines: string[];
  technologies?: string[];
}
