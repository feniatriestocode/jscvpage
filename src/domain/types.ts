import { ITEM_TYPES, type ItemType } from './constants';

export type Language = 'el' | 'en';

export interface LocalizedText {
  el: string;
  en: string;
}

export interface BaseItemData {
  id: string;
  type: ItemType;
  title: LocalizedText;
  startDate: string;        
  endDate: string | null;   
  description: LocalizedText;
}

export interface EducationItemData extends BaseItemData {
  type: typeof ITEM_TYPES.EDUCATION;
  institution: LocalizedText;
}

export interface WorkItemData extends BaseItemData {
  type: typeof ITEM_TYPES.WORK;
  company: LocalizedText;
  domain: LocalizedText;
}

export interface SeminarItemData extends BaseItemData {
  type: typeof ITEM_TYPES.SEMINAR;
  organizer: LocalizedText;
}

export type CVItemData = EducationItemData | WorkItemData | SeminarItemData;

export interface ProfileData {
  fullName: LocalizedText;
  headline: LocalizedText;
  email: string;
}

export interface CompetencyItem {
  name: LocalizedText;
  level?: LocalizedText;       
  description?: LocalizedText; 
}

export interface CompetenciesData {
  languages: CompetencyItem[];
  digitalSkills: CompetencyItem[];
  softSkills: CompetencyItem[];
}