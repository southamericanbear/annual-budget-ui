export interface Insights {
  basicData: BasicData[];
  accounts: Account[];
}

export interface Account {
  id: string;
  name: string;
  value: number;
  type: string;
}

export interface BasicData {
  name: string;
  value: number;
  currency: string;
}
