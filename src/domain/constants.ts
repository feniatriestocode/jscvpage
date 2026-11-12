export const ITEM_TYPES = { WORK: 'work', EDUCATION: 'education', SEMINAR: 'seminar' } as const;
export type ItemType = (typeof ITEM_TYPES)[keyof typeof ITEM_TYPES];