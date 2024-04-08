export enum BasicDataCategory {
  RENT = "rent",
  SALARY = "salary",
  DOLLAR = "dollar",
  OTHER = "other",
}

export interface BasicDataDetails {
  id: string;
  user_id: string;
  name: string;
  value: number;
  currency: string;
  createdAt: string;
  updatedAt: string;
  category: BasicDataCategory;
}
