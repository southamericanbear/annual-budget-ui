export interface AccountDetails {
  id: string;
  user_id: string;
  name: string;
  value: number;
  createdAt: string;
  updatedAt: string;
  type: string;
  transactions: Transaction[];
}

export interface Transaction {
  id: string;
  accountId: string;
  value: number;
  createdAt: string;
  updatedAt: string;
}
