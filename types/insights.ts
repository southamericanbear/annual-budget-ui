export interface Insights {
  basicData: BasicDatum[];
  accounts: Account[];
}

export interface Account {
  id: string;
  name: string;
  value: number;
  type: string;
}

export interface BasicDatum {
  name: string;
  value: number;
  currency: string;
}
