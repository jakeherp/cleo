export interface ITransaction {
  category: number;
  iconUrl: string | null;
  id: string;
  isBill: boolean;
  name: string;
  transactions: {
    amount: number;
    date: string;
    id: number;
  }[]
}