export enum AccountType {
  CASH = "cash",
  BANK = "bank",
  CREDIT = "credit",
  INVESTING = "investing",
  SAVINGS = "savings",
  TRAVEL = "travel",
  OTHER = "other",
}

export interface AccountDetails {
  id: string;
  user_id: string;
  name: string;
  value: number;
  createdAt: string;
  updatedAt: string;
  type: AccountType;
  transactions: Transaction[];
}

export interface Transaction {
  id: string;
  accountId: string;
  value: number;
  createdAt: string;
  updatedAt: string;
}
